import type { SupabaseClient } from '@supabase/supabase-js'
import { isWorkflowTransitionAllowed } from '@/lib/care/workflowTransition'
import { logAuditEvent } from '@/lib/audit/logAuditEvent'
import { OPEN_REFILL_REQUEST_STATUSES } from '@/lib/refill/refillRequestTransitions'
import { onPatientWorkflowEvent } from '@/lib/workflows/onPatientWorkflowEvent'
import { enqueueChartAiReview } from '@/lib/ai/enqueueChartAiReview'
import { buildPortalRefillNotes } from '@/lib/refill/portalRefillQuestionnaire'
import { resolveRefillCheckInProfile } from '@/lib/refill/refillCheckInProfile'

const MAX_NOTE = 8000

function labelForTreatmentStatus(value: string): string {
  return value
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

async function hasOpenRefillRequest(
  admin: SupabaseClient,
  patientId: string,
  treatmentItemId: string
): Promise<{ ok: true; open: boolean } | { ok: false; error: string }> {
  const { data, error } = await admin
    .from('refill_requests')
    .select('id')
    .eq('patient_id', patientId)
    .eq('treatment_item_id', treatmentItemId)
    .in('status', [...OPEN_REFILL_REQUEST_STATUSES])
    .limit(1)
    .maybeSingle()

  if (error) {
    const msg = error.message ?? ''
    const code = 'code' in error ? String(error.code) : ''
    if (code === '42P01' || msg.includes('does not exist')) {
      return { ok: true, open: false }
    }
    console.error('hasOpenRefillRequest', error)
    return { ok: false, error: 'Could not verify existing refill requests.' }
  }
  return { ok: true, open: !!data }
}

export type SubmitPatientRefillRequestResult =
  | { ok: true; refillRequestId: string }
  | { ok: false; error: string; status: number }

/**
 * Patient-submitted refill: uses service role (RLS on `refill_requests` is staff-only).
 * Caller must verify portal session matches `patientId` before invoking.
 */
export async function submitPatientRefillRequest(
  admin: SupabaseClient,
  patientId: string,
  treatmentItemId: string,
  rawNote?: string | null,
  questionnaireRaw?: unknown
): Promise<SubmitPatientRefillRequestResult> {
  const { data: item, error: itemErr } = await admin
    .from('treatment_items')
    .select('id, patient_id, care_program_id, treatment_key, display_name, status, category')
    .eq('id', treatmentItemId)
    .maybeSingle()

  if (itemErr || !item) {
    return { ok: false, error: 'Treatment not found.', status: 404 }
  }
  if (item.patient_id !== patientId) {
    return { ok: false, error: 'Treatment does not belong to this account.', status: 403 }
  }
  if (item.status !== 'refill_due') {
    return { ok: false, error: 'Refill can only be requested when your treatment is due for refill.', status: 409 }
  }

  const profile = resolveRefillCheckInProfile(
    item.treatment_key as string,
    item.display_name as string,
    (item.category as string | null) ?? null
  )
  const built = buildPortalRefillNotes(profile, questionnaireRaw, rawNote ?? '')
  if (!built.ok) {
    return { ok: false, error: built.error, status: 400 }
  }
  const patientNote = built.patientNote
  if (patientNote && patientNote.length > MAX_NOTE) {
    return { ok: false, error: `Note must be ${MAX_NOTE} characters or less.`, status: 400 }
  }

  const open = await hasOpenRefillRequest(admin, patientId, treatmentItemId)
  if (!open.ok) return { ok: false, error: open.error, status: 500 }
  if (open.open) {
    return { ok: false, error: 'A continuation is already in progress for this treatment.', status: 409 }
  }

  const allowed = await isWorkflowTransitionAllowed(admin, 'treatment_item', item.status, 'refill_pending')
  if (!allowed) {
    return {
      ok: false,
      error: `Cannot move treatment to refill pending from ${labelForTreatmentStatus(item.status)}.`,
      status: 409,
    }
  }

  const prevStatus = item.status
  const nextStatus = 'refill_pending'

  const { error: updErr } = await admin
    .from('treatment_items')
    .update({ status: nextStatus, updated_at: new Date().toISOString() })
    .eq('id', treatmentItemId)

  if (updErr) {
    console.error('submitPatientRefillRequest.treatment_items', updErr)
    return { ok: false, error: 'Could not update treatment status.', status: 500 }
  }

  const treatmentBody = `Treatment (${item.display_name}): ${labelForTreatmentStatus(prevStatus)} → ${labelForTreatmentStatus(nextStatus)}`
  const { error: tErr } = await admin.from('patient_timeline_events').insert({
    patient_id: patientId,
    care_program_id: item.care_program_id,
    treatment_item_id: item.id,
    event_type: 'treatment_status_changed',
    body: treatmentBody,
    actor_user_id: null,
    payload: {
      treatment_key: item.treatment_key,
      from: prevStatus,
      to: nextStatus,
      source: 'patient_portal',
    },
  })
  if (tErr) console.error(tErr)

  if (item.treatment_key === 'glp1_primary') {
    if (prevStatus !== nextStatus) {
      try {
        await onPatientWorkflowEvent({
          patientId,
          fromWorkflowStatus: prevStatus,
          toWorkflowStatus: nextStatus,
          source: 'system',
          actorStaffUserId: null,
        })
      } catch (err) {
        console.error('submitPatientRefillRequest: onPatientWorkflowEvent', err)
      }
    }
  }

  const { data: inserted, error: insErr } = await admin
    .from('refill_requests')
    .insert({
      patient_id: patientId,
      care_program_id: item.care_program_id,
      treatment_item_id: treatmentItemId,
      status: 'requested',
      requested_by_staff_id: null,
      patient_note: patientNote,
      metadata: {
        source: 'patient_portal',
        refill_check_in: built.refillCheckIn,
        refill_check_in_profile: profile,
        continuation_phase: 'post_submit_pre_payment',
        continuation_payment_state: 'unpaid',
        continuation_review_state: 'not_started',
      },
    })
    .select('id')
    .maybeSingle()

  if (insErr || !inserted) {
    console.error('submitPatientRefillRequest.refill_requests', insErr)
    const { error: revErr } = await admin
      .from('treatment_items')
      .update({ status: prevStatus, updated_at: new Date().toISOString() })
      .eq('id', treatmentItemId)
    if (revErr) console.error('submitPatientRefillRequest.revert_treatment', revErr)
    return { ok: false, error: 'Could not record refill request. Your treatment status was reverted.', status: 500 }
  }

  const refillBody = `Continue plan started for ${item.display_name}. Checkout is required before clinician review.`
  const { error: refillTlErr } = await admin.from('patient_timeline_events').insert({
    patient_id: patientId,
    care_program_id: item.care_program_id,
    treatment_item_id: item.id,
    event_type: 'refill_requested',
    body: refillBody,
    actor_user_id: null,
    payload: {
      refill_request_id: inserted.id,
      treatment_key: item.treatment_key,
      patient_note: patientNote,
      refill_check_in_profile: profile,
      source: 'patient_portal',
      continuation_phase: 'post_submit_pre_payment',
    },
  })
  if (refillTlErr) console.error(refillTlErr)

  await logAuditEvent({
    actorUserId: null,
    action: 'refill_request.submitted_patient_portal',
    resourceType: 'refill_request',
    resourceId: inserted.id,
    patientId,
    metadata: { treatment_item_id: treatmentItemId, treatment_key: item.treatment_key },
  })

  await enqueueChartAiReview(admin, {
    patientId,
    triggerEventType: 'refill_requested',
    triggerRef: inserted.id,
  })

  return { ok: true, refillRequestId: inserted.id }
}
