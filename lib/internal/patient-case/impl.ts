/**
 * Patient case workspace mutations (internal staff). Import only from
 * `app/internal/(protected)/patients/[patientId]/actions.ts`, which is the
 * **only** place capability enforcement (`requireCapability` / `requirePatientCaseCapability`)
 * must run. Calling these functions from new routes, clients, or tests without
 * the same gate bypasses policy.
 *
 * In a few areas this module still loads `getStaffProfile` for PDF/note content
 * (e.g. “Prepared by,” author display name) — that is not an authorization
 * check; the actions layer owns access control.
 */

import { createHash } from 'crypto'
import { revalidatePath } from 'next/cache'
import type { SupabaseClient } from '@supabase/supabase-js'
import { logAuditEvent } from '@/lib/audit/logAuditEvent'
import { isMissingRelationError, isWorkflowTransitionAllowed } from '@/lib/care/workflowTransition'
import { buildClinicalVisitPdfArtifactPointer } from '@/lib/clinical/artifact'
import { buildLabOrderPdfArtifactPointer } from '@/lib/labs/artifact'
import { listLabTestsByCodes } from '@/lib/labs/catalog'
import { buildClinicalProgressNote } from '@/lib/clinical/progressNote'
import {
  DEFAULT_TEMP_FAX_NUMBER,
  attachRxPdfToMetadata,
  buildRxPdfArtifactPointer,
} from '@/lib/care/rxArtifact'
import { buildSimpleRxPdf } from '@/lib/care/rxPdf'
import { prescribeCatalogTreatment } from '@/lib/care/prescribeCatalogTreatment'
import type { StrengthUnit } from '@/lib/care/medicationCatalog'
import type { FulfillmentChannel, RxDurationDays } from '@/lib/care/rxHandoff'
import {
  buildClinicalVisitNotePublishedEmail,
  buildLabRequisitionPublishedEmail,
  buildPatientCallbackCompletedEmail,
  buildPatientEmail,
  buildSupplementFulfillmentEmail,
} from '@/lib/notifications/patientMessages'
import { sendTransactionalEmail } from '@/lib/notifications/emailResend'
import {
  isRefillRequestTransitionAllowed,
  isValidRefillRequestStatus,
  OPEN_REFILL_REQUEST_STATUSES,
  type RefillRequestStatus,
} from '@/lib/refill/refillRequestTransitions'
import { enqueueOutboundJob } from '@/lib/jobs/enqueueOutboundJob'
import { OUTBOUND_JOB_TYPES } from '@/lib/jobs/outboundJobTypes'
import { enqueueChartAiReview } from '@/lib/ai/enqueueChartAiReview'
import { buildPatientPortalExchangeUrl } from '@/lib/patient-portal/exchangeUrl'
import {
  allowedNextSupplementFulfillmentStatuses,
  isSupplementFulfillmentStatus,
  isSupplementFulfillmentTransitionAllowed,
  labelSupplementFulfillmentStatus,
} from '@/lib/supplement/fulfillment'
import { createAdminClient } from '@/lib/supabase/admin'
import { getStaffProfile } from '@/lib/staff/getStaffProfile'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { onPatientWorkflowEvent } from '@/lib/workflows/onPatientWorkflowEvent'
import type { NotificationTemplateKey } from '@/lib/workflows/notificationRules'

const MAX_NOTE = 8000

export type AddStaffNoteResult = { ok: true } | { ok: false; error: string }
export type ApplyCaseResult = { ok: true } | { ok: false; error: string }
export type SendTemplateTestResult = { ok: true; sentTo: string } | { ok: false; error: string }
export type UpdateTreatmentItemStatusResult = { ok: true } | { ok: false; error: string }
export type UpdateCareProgramStatusResult = { ok: true } | { ok: false; error: string }
export type RequestRefillForTreatmentItemResult = { ok: true } | { ok: false; error: string }
export type RequestRefillsBulkResult =
  | { ok: true; submitted: number }
  | { ok: false; error: string }
export type UpdateRefillRequestStatusResult = { ok: true } | { ok: false; error: string }
export type AddCatalogTreatmentResult = { ok: true } | { ok: false; error: string }
export type GenerateRxPdfResult = { ok: true; signedUrl: string; objectPath: string } | { ok: false; error: string }
export type CreateLabOrderResult =
  | { ok: true; signedUrl: string; objectPath: string; labOrderId: string; testCount: number }
  | { ok: false; error: string }
export type CreateClinicalVisitNoteResult = { ok: true; visitId: string } | { ok: false; error: string }
export type CreateClinicalVisitAddendumResult = { ok: true; addendumId: string } | { ok: false; error: string }
export type PublishClinicalVisitPdfResult = { ok: true; signedUrl: string; objectPath: string } | { ok: false; error: string }
export type MarkLabOrderDispatchedResult = { ok: true } | { ok: false; error: string }
export type PreparePharmacyDispatchResult =
  | { ok: true; orderId: string; warning?: string }
  | { ok: false; error: string }
export type UpdateSupplementFulfillmentStatusResult = { ok: true } | { ok: false; error: string }
export type UpdatePatientSupportRequestStatusResult = { ok: true } | { ok: false; error: string }

type SupportRequestStatus = 'new' | 'acknowledged' | 'call_completed' | 'resolved'
type SupportRequestAction = 'acknowledged' | 'call_completed' | 'resolved'
type SupportEventType = 'patient_message_submitted' | 'patient_callback_requested'

type ProviderSigner = {
  id: string
  displayName: string
  credentials: string | null
  npi: string
  specialty: string | null
  stateLicenseNumber: string | null
  prescriptionLicenseNumber: string | null
  deaNumber: string | null
}

const PROGRAM_STATUS_VALUES = new Set([
  'intake_submitted',
  'under_review',
  'approved',
  'denied',
  'active',
  'paused',
  'completed',
  'cancelled',
])

const TREATMENT_STATUS_VALUES = new Set([
  'pending_approval',
  'approved',
  'denied',
  'rx_sent',
  'shipped',
  'active',
  'paused',
  'stopped',
  'refill_due',
  'refill_pending',
])

function labelForTreatmentStatus(value: string): string {
  return value
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

function labelForProgramStatus(value: string): string {
  return value
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

function normalizeTrackingUrl(raw: string): string | null {
  const trimmed = raw.trim()
  if (!trimmed) return null
  try {
    const url = new URL(trimmed)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null
    return url.toString()
  } catch {
    return null
  }
}

function normalizeNpi(raw: string): string {
  return raw.replace(/\D/g, '').slice(0, 10)
}

function firstLicenseNumber(licenses: unknown): string | null {
  if (!Array.isArray(licenses) || licenses.length === 0) return null
  const first = licenses[0]
  if (!first || typeof first !== 'object') return null
  const value = (first as Record<string, unknown>).license_number
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : null
}

async function loadProviderSignerById(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  providerStaffId: string
): Promise<ProviderSigner | null> {
  const { data, error } = await supabase
    .from('staff_profiles')
    .select(
      'id, role, display_name, first_name, last_name, credentials, specialty, npi, dea_number, state_licenses, prescription_licenses'
    )
    .eq('id', providerStaffId)
    .maybeSingle()
  if (error || !data) return null
  if (data.role !== 'prescriber') return null
  const label =
    data.display_name?.trim() ||
    [data.first_name, data.last_name].filter(Boolean).join(' ').trim() ||
    data.id
  const npi = typeof data.npi === 'string' ? normalizeNpi(data.npi) : ''
  if (npi.length !== 10) return null
  return {
    id: data.id,
    displayName: label,
    credentials: typeof data.credentials === 'string' ? data.credentials : null,
    npi,
    specialty: typeof data.specialty === 'string' ? data.specialty : null,
    stateLicenseNumber: firstLicenseNumber(data.state_licenses),
    prescriptionLicenseNumber: firstLicenseNumber(data.prescription_licenses),
    deaNumber: typeof data.dea_number === 'string' && data.dea_number.trim().length > 0 ? data.dea_number.trim() : null,
  }
}

export async function addStaffNote(patientId: string, rawText: string): Promise<AddStaffNoteResult> {
  const text = rawText.trim()
  if (!text) return { ok: false, error: 'Note cannot be empty.' }
  if (text.length > MAX_NOTE) return { ok: false, error: `Note must be ${MAX_NOTE} characters or less.` }

  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const { data: patient, error: pErr } = await supabase.from('patients').select('id').eq('id', patientId).maybeSingle()
  if (pErr || !patient) return { ok: false, error: 'Patient not found.' }

  const { error: insErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    event_type: 'staff_note',
    body: text,
    actor_user_id: user.id,
    payload: {},
  })

  if (insErr) {
    console.error(insErr)
    return { ok: false, error: 'Could not save note.' }
  }

  revalidatePath(`/internal/patients/${patientId}`)
  return { ok: true }
}

async function staffDisplayName(supabase: SupabaseClient, id: string | null): Promise<string> {
  if (!id) return 'Unassigned'
  const { data } = await supabase.from('staff_profiles').select('display_name').eq('id', id).maybeSingle()
  return data?.display_name?.trim() || `${id.slice(0, 8)}…`
}

export async function applyCaseUpdates(
  patientId: string,
  nextAssignedTo: string | null
): Promise<ApplyCaseResult> {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const { data: patient, error: pErr } = await supabase.from('patients').select('id').eq('id', patientId).maybeSingle()
  if (pErr || !patient) return { ok: false, error: 'Patient not found.' }

  if (nextAssignedTo) {
    const { data: assignee } = await supabase.from('staff_profiles').select('id').eq('id', nextAssignedTo).maybeSingle()
    if (!assignee) return { ok: false, error: 'Invalid assignee.' }
  }

  const { data: stateRow } = await supabase.from('patient_states').select('assigned_to').eq('patient_id', patientId).maybeSingle()

  const prevAssignee = stateRow?.assigned_to ?? null
  const assigneeNorm = nextAssignedTo || null

  const assigneeChanged = (prevAssignee ?? null) !== (assigneeNorm ?? null)

  if (!assigneeChanged) {
    return { ok: true }
  }

  // Transitional path: keep assignment in patient_states while workflow status lives in care tables.
  const { error: upsertErr } = await supabase.from('patient_states').upsert(
    {
      patient_id: patientId,
      assigned_to: assigneeNorm,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'patient_id' }
  )

  if (upsertErr) {
    console.error(upsertErr)
    return { ok: false, error: 'Could not update case state.' }
  }

  if (assigneeChanged) {
    const fromN = await staffDisplayName(supabase, prevAssignee)
    const toN = await staffDisplayName(supabase, assigneeNorm)
    const body = `Assignee: ${fromN} → ${toN}`
    const { error: aErr } = await supabase.from('patient_timeline_events').insert({
      patient_id: patientId,
      event_type: 'assignee_changed',
      body,
      actor_user_id: user.id,
      payload: {
        from: prevAssignee,
        to: assigneeNorm,
      },
    })
    if (aErr) console.error(aErr)

    await logAuditEvent({
      actorUserId: user.id,
      action: 'patient_state.assignee_changed',
      resourceType: 'patient_state',
      resourceId: patientId,
      patientId,
      metadata: { from: prevAssignee, to: assigneeNorm },
    })
  }

  revalidatePath(`/internal/patients/${patientId}`)
  revalidatePath('/internal/patients')
  return { ok: true }
}

export async function sendTemplateTestEmail(
  patientId: string,
  templateKey: NotificationTemplateKey
): Promise<SendTemplateTestResult> {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user?.email) return { ok: false, error: 'Not signed in.' }

  const { data: patient, error: pErr } = await supabase
    .from('patients')
    .select('id, first_name')
    .eq('id', patientId)
    .maybeSingle()
  if (pErr || !patient) return { ok: false, error: 'Patient not found.' }

  let patientPortalUrl: string | null = null
  try {
    patientPortalUrl = await buildPatientPortalExchangeUrl(patientId, `/dashboard/${patientId}`)
  } catch (e) {
    console.warn('sendTemplateTestEmail: patient portal link omitted', e)
  }

  const email = buildPatientEmail(templateKey, {
    patientId,
    email: user.email,
    firstName: patient.first_name,
    patientPortalUrl,
    paymentSummary: '199.00 USD',
  })

  const result = await sendTransactionalEmail({
    to: user.email,
    subject: `[Preview] ${email.subject}`,
    html: email.html,
    text: email.text,
  })

  if (!result.ok) {
    return { ok: false, error: result.error }
  }

  await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    event_type: 'email_preview_sent',
    body: `${templateKey} preview sent to ${user.email}`,
    actor_user_id: user.id,
    payload: { template_key: templateKey, provider_message_id: result.id },
  })

  revalidatePath(`/internal/patients/${patientId}`)
  return { ok: true, sentTo: user.email }
}

export async function updateTreatmentItemStatus(
  patientId: string,
  treatmentItemId: string,
  nextStatus: string
): Promise<UpdateTreatmentItemStatusResult> {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  if (!TREATMENT_STATUS_VALUES.has(nextStatus)) {
    return { ok: false, error: 'Invalid treatment status.' }
  }

  const { data: item, error: itemErr } = await supabase
    .from('treatment_items')
    .select('id, patient_id, care_program_id, treatment_key, display_name, status')
    .eq('id', treatmentItemId)
    .maybeSingle()
  if (itemErr || !item) return { ok: false, error: 'Treatment item not found.' }
  if (item.patient_id !== patientId) return { ok: false, error: 'Treatment item does not match patient.' }

  const prevStatus = item.status
  if (prevStatus === nextStatus) return { ok: true }

  const allowed = await isWorkflowTransitionAllowed(supabase, 'treatment_item', prevStatus, nextStatus)
  if (!allowed) {
    return {
      ok: false,
      error: `Invalid transition: ${labelForTreatmentStatus(prevStatus)} -> ${labelForTreatmentStatus(nextStatus)}.`,
    }
  }

  let openDiagnosticTasks: OpenDiagnosticActionTask[] = []
  if (nextStatus === 'active') {
    const gate = await assertDiagnosticActionTasksSatisfied(
      supabase,
      patientId,
      'treatment_activated',
      'before_treatment_action'
    )
    if (!gate.ok) return { ok: false, error: gate.error }
    openDiagnosticTasks = gate.openTasks
  }

  const { error: updErr } = await supabase
    .from('treatment_items')
    .update({ status: nextStatus, updated_at: new Date().toISOString() })
    .eq('id', treatmentItemId)

  if (updErr) {
    console.error(updErr)
    return { ok: false, error: 'Could not update treatment status.' }
  }

  const body = `Treatment (${item.display_name}): ${labelForTreatmentStatus(prevStatus)} → ${labelForTreatmentStatus(nextStatus)}`
  const { error: tErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    care_program_id: item.care_program_id,
    treatment_item_id: item.id,
    event_type: 'treatment_status_changed',
    body,
    actor_user_id: user.id,
    payload: {
      treatment_key: item.treatment_key,
      from: prevStatus,
      to: nextStatus,
    },
  })
  if (tErr) console.error(tErr)

  if (nextStatus === 'active') {
    await completeDiagnosticActionTasks(supabase, patientId, user.id, 'treatment_activated', openDiagnosticTasks)
  }

  // Workflow notifications follow canonical treatment status transitions.
  if (item.treatment_key === 'glp1_primary') {
    if (prevStatus !== nextStatus) {
      try {
        await onPatientWorkflowEvent({
          patientId,
          fromWorkflowStatus: prevStatus,
          toWorkflowStatus: nextStatus,
          source: 'staff',
          actorStaffUserId: user.id,
        })
      } catch (err) {
        console.error('updateTreatmentItemStatus: onPatientWorkflowEvent', err)
      }
    }
  }

  await logAuditEvent({
    actorUserId: user.id,
    action: 'treatment_item.status_changed',
    resourceType: 'treatment_item',
    resourceId: treatmentItemId,
    patientId,
    metadata: { from: prevStatus, to: nextStatus, treatment_key: item.treatment_key },
  })

  revalidatePath(`/internal/patients/${patientId}`)
  revalidatePath('/internal/patients')
  return { ok: true }
}

export async function updateCareProgramStatus(
  patientId: string,
  careProgramId: string,
  nextStatus: string
): Promise<UpdateCareProgramStatusResult> {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  if (!PROGRAM_STATUS_VALUES.has(nextStatus)) {
    return { ok: false, error: 'Invalid program status.' }
  }

  const { data: program, error: pErr } = await supabase
    .from('care_programs')
    .select('id, patient_id, status, title, program_type')
    .eq('id', careProgramId)
    .maybeSingle()
  if (pErr || !program) return { ok: false, error: 'Program not found.' }
  if (program.patient_id !== patientId) return { ok: false, error: 'Program does not match patient.' }

  const prevStatus = program.status
  if (prevStatus === nextStatus) return { ok: true }

  const allowed = await isWorkflowTransitionAllowed(supabase, 'care_program', prevStatus, nextStatus)
  if (!allowed) {
    return {
      ok: false,
      error: `Invalid transition: ${labelForProgramStatus(prevStatus)} -> ${labelForProgramStatus(nextStatus)}.`,
    }
  }

  const { error: updErr } = await supabase
    .from('care_programs')
    .update({ status: nextStatus, updated_at: new Date().toISOString() })
    .eq('id', careProgramId)

  if (updErr) {
    console.error(updErr)
    return { ok: false, error: 'Could not update program status.' }
  }

  const body = `Program (${program.title?.trim() || labelForProgramStatus(program.program_type)}): ${labelForProgramStatus(prevStatus)} → ${labelForProgramStatus(nextStatus)}`
  const { error: tErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    care_program_id: program.id,
    event_type: 'program_status_changed',
    body,
    actor_user_id: user.id,
    payload: { from: prevStatus, to: nextStatus, program_type: program.program_type },
  })
  if (tErr) console.error(tErr)

  // Workflow notifications follow canonical program status transitions.
  if (program.program_type === 'weight_loss') {
    if (prevStatus !== nextStatus) {
      try {
        await onPatientWorkflowEvent({
          patientId,
          fromWorkflowStatus: prevStatus,
          toWorkflowStatus: nextStatus,
          source: 'staff',
          actorStaffUserId: user.id,
        })
      } catch (err) {
        console.error('updateCareProgramStatus: onPatientWorkflowEvent', err)
      }
    }
  }

  await logAuditEvent({
    actorUserId: user.id,
    action: 'care_program.status_changed',
    resourceType: 'care_program',
    resourceId: careProgramId,
    patientId,
    metadata: { from: prevStatus, to: nextStatus, program_type: program.program_type },
  })

  revalidatePath(`/internal/patients/${patientId}`)
  revalidatePath('/internal/patients')
  return { ok: true }
}

async function hasOpenRefillRequest(
  supabase: SupabaseClient,
  patientId: string,
  treatmentItemId: string
): Promise<{ ok: true; open: boolean } | { ok: false; error: string }> {
  const { data, error } = await supabase
    .from('refill_requests')
    .select('id')
    .eq('patient_id', patientId)
    .eq('treatment_item_id', treatmentItemId)
    .in('status', [...OPEN_REFILL_REQUEST_STATUSES])
    .limit(1)
    .maybeSingle()

  if (error) {
    if (isMissingRelationError(error)) {
      return { ok: true, open: false }
    }
    console.error('hasOpenRefillRequest', error)
    return { ok: false, error: 'Could not verify existing refill requests.' }
  }
  return { ok: true, open: !!data }
}

export async function requestRefillForTreatmentItem(
  patientId: string,
  treatmentItemId: string,
  rawNote?: string
): Promise<RequestRefillForTreatmentItemResult> {
  const note = (rawNote ?? '').trim()
  if (note.length > MAX_NOTE) return { ok: false, error: `Note must be ${MAX_NOTE} characters or less.` }

  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const { data: item, error: itemErr } = await supabase
    .from('treatment_items')
    .select('id, patient_id, care_program_id, treatment_key, display_name, status')
    .eq('id', treatmentItemId)
    .maybeSingle()
  if (itemErr || !item) return { ok: false, error: 'Treatment item not found.' }
  if (item.patient_id !== patientId) return { ok: false, error: 'Treatment item does not match patient.' }
  if (item.status !== 'refill_due') {
    return { ok: false, error: 'Refill can only be requested when the treatment is Refill due.' }
  }

  const open = await hasOpenRefillRequest(supabase, patientId, treatmentItemId)
  if (!open.ok) return { ok: false, error: open.error }
  if (open.open) return { ok: false, error: 'An open refill request already exists for this treatment.' }

  const statusRes = await updateTreatmentItemStatus(patientId, treatmentItemId, 'refill_pending')
  if (!statusRes.ok) return statusRes

  const { data: inserted, error: insErr } = await supabase
    .from('refill_requests')
    .insert({
      patient_id: patientId,
      care_program_id: item.care_program_id,
      treatment_item_id: treatmentItemId,
      status: 'requested',
      requested_by_staff_id: user.id,
      patient_note: note.length > 0 ? note : null,
      metadata: { source: 'internal_staff_ui' },
    })
    .select('id')
    .maybeSingle()

  if (insErr || !inserted) {
    console.error('requestRefillForTreatmentItem.insert', insErr)
    const rollback = await updateTreatmentItemStatus(patientId, treatmentItemId, 'refill_due')
    if (!rollback.ok) {
      console.error('requestRefillForTreatmentItem.rollback_failed', rollback)
    }
    return { ok: false, error: 'Could not record refill request (treatment status was reverted).' }
  }

  const body = `Refill requested for ${item.display_name}`
  const { error: tErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    care_program_id: item.care_program_id,
    treatment_item_id: item.id,
    event_type: 'refill_requested',
    body,
    actor_user_id: user.id,
    payload: {
      refill_request_id: inserted.id,
      treatment_key: item.treatment_key,
      patient_note: note.length > 0 ? note : null,
    },
  })
  if (tErr) console.error(tErr)

  await logAuditEvent({
    actorUserId: user.id,
    action: 'refill_request.submitted',
    resourceType: 'refill_request',
    resourceId: inserted.id,
    patientId,
    metadata: { treatment_item_id: treatmentItemId, treatment_key: item.treatment_key },
  })

  revalidatePath(`/internal/patients/${patientId}`)
  revalidatePath('/internal/patients')
  return { ok: true }
}

export async function requestRefillsForTreatmentItemsBulk(
  patientId: string,
  treatmentItemIds: string[],
  rawSharedNote?: string
): Promise<RequestRefillsBulkResult> {
  const shared = (rawSharedNote ?? '').trim()
  if (shared.length > MAX_NOTE) return { ok: false, error: `Note must be ${MAX_NOTE} characters or less.` }

  const unique = [...new Set(treatmentItemIds.map((id) => id.trim()).filter(Boolean))]
  if (unique.length === 0) return { ok: false, error: 'Select at least one treatment.' }

  let submitted = 0
  const errors: string[] = []

  for (const id of unique) {
    const res = await requestRefillForTreatmentItem(patientId, id, shared)
    if (!res.ok) {
      errors.push(`${id.slice(0, 8)}…: ${res.error}`)
      continue
    }
    submitted += 1
  }

  if (submitted === 0) {
    return { ok: false, error: errors[0] ?? 'No refills submitted.' }
  }

  if (errors.length > 0) {
    console.warn('requestRefillsForTreatmentItemsBulk.partial', { submitted, errors })
  }

  return { ok: true, submitted }
}

function mergeRefillStaffNote(existing: string | null, rawAppend: string): string | null {
  const t = rawAppend.trim()
  if (!t) return existing?.trim() ?? null
  const e = existing?.trim()
  if (!e) return t
  return `${e}\n---\n${t}`
}

function labelRefillStatus(value: string): string {
  return value
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

type OpenDiagnosticActionTask = {
  reviewId: string
  taskId: string
  title: string
  reason: string
  requiredOwner: 'provider' | 'care_team'
  requiredDueState: 'before_treatment_action' | 'before_fulfillment'
  allowedCompletionActions: string[]
}

function asRecord(v: unknown): Record<string, unknown> | null {
  return v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : null
}

function parseOpenDiagnosticTaskPayload(payload: unknown): OpenDiagnosticActionTask | null {
  const p = asRecord(payload)
  if (!p) return null
  if (p.source !== 'chart_ai_action_plan') return null
  const reviewId = typeof p.review_id === 'string' ? p.review_id : null
  const taskId = typeof p.task_id === 'string' ? p.task_id : null
  const title = typeof p.task_title === 'string' ? p.task_title : null
  const reason = typeof p.task_reason === 'string' ? p.task_reason : null
  const requiredOwner = p.required_owner === 'provider' || p.required_owner === 'care_team' ? p.required_owner : null
  const requiredDueState =
    p.required_due_state === 'before_treatment_action' || p.required_due_state === 'before_fulfillment'
      ? p.required_due_state
      : null
  const allowedCompletionActions = Array.isArray(p.allowed_completion_actions)
    ? p.allowed_completion_actions.filter((v): v is string => typeof v === 'string' && v.trim().length > 0)
    : []
  if (
    !reviewId ||
    !taskId ||
    !title ||
    !reason ||
    !requiredOwner ||
    !requiredDueState ||
    allowedCompletionActions.length === 0
  ) {
    return null
  }
  return {
    reviewId,
    taskId,
    title,
    reason,
    requiredOwner,
    requiredDueState,
    allowedCompletionActions,
  }
}

async function getOpenDiagnosticActionTasks(
  supabase: SupabaseClient,
  patientId: string
): Promise<OpenDiagnosticActionTask[]> {
  const [createdRows, completedRows] = await Promise.all([
    supabase
      .from('patient_timeline_events')
      .select('payload')
      .eq('patient_id', patientId)
      .eq('event_type', 'clinical_action_task_created')
      .limit(200),
    supabase
      .from('patient_timeline_events')
      .select('payload')
      .eq('patient_id', patientId)
      .eq('event_type', 'clinical_action_task_completed')
      .limit(200),
  ])
  if (createdRows.error && !isMissingRelationError(createdRows.error)) {
    console.error('getOpenDiagnosticActionTasks.createdRows', createdRows.error)
    return []
  }
  if (completedRows.error && !isMissingRelationError(completedRows.error)) {
    console.error('getOpenDiagnosticActionTasks.completedRows', completedRows.error)
    return []
  }
  const completedKeys = new Set<string>()
  for (const row of completedRows.data ?? []) {
    const p = asRecord(row.payload)
    const reviewId = typeof p?.review_id === 'string' ? p.review_id : null
    const taskId = typeof p?.task_id === 'string' ? p.task_id : null
    if (reviewId && taskId) completedKeys.add(`${reviewId}:${taskId}`)
  }
  const open: OpenDiagnosticActionTask[] = []
  for (const row of createdRows.data ?? []) {
    const parsed = parseOpenDiagnosticTaskPayload(row.payload)
    if (!parsed) continue
    const key = `${parsed.reviewId}:${parsed.taskId}`
    if (completedKeys.has(key)) continue
    open.push(parsed)
  }
  return open
}

async function assertDiagnosticActionTasksSatisfied(
  supabase: SupabaseClient,
  patientId: string,
  completionAction: string,
  dueState: 'before_treatment_action' | 'before_fulfillment'
): Promise<{ ok: true; openTasks: OpenDiagnosticActionTask[] } | { ok: false; error: string }> {
  const openTasks = await getOpenDiagnosticActionTasks(supabase, patientId)
  const blocking = openTasks.filter(
    (task) =>
      task.requiredOwner === 'provider' &&
      task.requiredDueState === dueState &&
      !task.allowedCompletionActions.includes(completionAction)
  )
  if (blocking.length > 0) {
    return {
      ok: false,
      error: `Complete required provider task first: ${blocking[0]?.title ?? 'diagnostic follow-up task'}.`,
    }
  }
  return { ok: true, openTasks }
}

async function completeDiagnosticActionTasks(
  supabase: SupabaseClient,
  patientId: string,
  actorUserId: string,
  completionAction: string,
  openTasks: OpenDiagnosticActionTask[]
): Promise<void> {
  const toClose = openTasks.filter((task) => task.allowedCompletionActions.includes(completionAction))
  if (toClose.length === 0) return
  const rows = toClose.map((task) => ({
    patient_id: patientId,
    event_type: 'clinical_action_task_completed',
    body: `Completed action task: ${task.title}`,
    actor_user_id: actorUserId,
    payload: {
      source: 'chart_ai_action_plan',
      review_id: task.reviewId,
      task_id: task.taskId,
      completion_action: completionAction,
      task_status: 'completed',
    },
  }))
  const { error } = await supabase.from('patient_timeline_events').insert(rows)
  if (error) {
    console.error('completeDiagnosticActionTasks', error)
  }
}

export async function updateRefillRequestStatus(
  patientId: string,
  refillRequestId: string,
  nextStatus: string,
  rawStaffNote?: string
): Promise<UpdateRefillRequestStatusResult> {
  const staffAppend = (rawStaffNote ?? '').trim()
  if (staffAppend.length > MAX_NOTE) return { ok: false, error: `Note must be ${MAX_NOTE} characters or less.` }

  if (!isValidRefillRequestStatus(nextStatus)) {
    return { ok: false, error: 'Invalid refill request status.' }
  }
  const next = nextStatus as RefillRequestStatus

  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const { data: row, error: rowErr } = await supabase
    .from('refill_requests')
    .select('id, patient_id, treatment_item_id, care_program_id, status, staff_note')
    .eq('id', refillRequestId)
    .maybeSingle()

  if (rowErr || !row) return { ok: false, error: 'Refill request not found.' }
  if (row.patient_id !== patientId) return { ok: false, error: 'Refill request does not match patient.' }

  if (!isValidRefillRequestStatus(row.status)) {
    return { ok: false, error: 'Unknown current refill status.' }
  }
  const prev = row.status as RefillRequestStatus
  if (prev === next) return { ok: true }

  if (!isRefillRequestTransitionAllowed(prev, next)) {
    return {
      ok: false,
      error: `Invalid transition: ${labelRefillStatus(prev)} → ${labelRefillStatus(next)}.`,
    }
  }

  let openDiagnosticTasks: OpenDiagnosticActionTask[] = []
  if (next === 'approved') {
    const gate = await assertDiagnosticActionTasksSatisfied(
      supabase,
      patientId,
      'refill_approved',
      'before_treatment_action'
    )
    if (!gate.ok) return { ok: false, error: gate.error }
    openDiagnosticTasks = gate.openTasks
  } else if (next === 'fulfilled') {
    const gate = await assertDiagnosticActionTasksSatisfied(supabase, patientId, 'refill_fulfilled', 'before_fulfillment')
    if (!gate.ok) return { ok: false, error: gate.error }
    openDiagnosticTasks = gate.openTasks
  }

  const { data: treatment, error: tiErr } = await supabase
    .from('treatment_items')
    .select('id, patient_id, status, display_name')
    .eq('id', row.treatment_item_id)
    .maybeSingle()
  if (tiErr || !treatment) return { ok: false, error: 'Treatment item not found.' }
  if (treatment.patient_id !== patientId) return { ok: false, error: 'Treatment item does not match patient.' }

  const mergedStaffNote = mergeRefillStaffNote(row.staff_note, staffAppend)
  const snapshot = { status: prev, staff_note: row.staff_note as string | null }

  const { error: updErr } = await supabase
    .from('refill_requests')
    .update({
      status: next,
      staff_note: mergedStaffNote,
      updated_at: new Date().toISOString(),
    })
    .eq('id', refillRequestId)

  if (updErr) {
    console.error('updateRefillRequestStatus.refill_requests', updErr)
    return { ok: false, error: 'Could not update refill request.' }
  }

  async function revertRefillRow(): Promise<void> {
    const { error: revErr } = await supabase
      .from('refill_requests')
      .update({
        status: snapshot.status,
        staff_note: snapshot.staff_note,
        updated_at: new Date().toISOString(),
      })
      .eq('id', refillRequestId)
    if (revErr) console.error('updateRefillRequestStatus.revert', revErr)
  }

  if (next === 'fulfilled') {
    if (treatment.status === 'refill_pending') {
      const tr = await updateTreatmentItemStatus(patientId, treatment.id, 'active')
      if (!tr.ok) {
        await revertRefillRow()
        return tr
      }
    }
  } else if (next === 'denied' || next === 'cancelled') {
    if (treatment.status === 'refill_pending') {
      const tr = await updateTreatmentItemStatus(patientId, treatment.id, 'refill_due')
      if (!tr.ok) {
        await revertRefillRow()
        return tr
      }
    }
  }

  const body = `Refill (${treatment.display_name}): ${labelRefillStatus(prev)} → ${labelRefillStatus(next)}`
  const { error: tErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    care_program_id: row.care_program_id,
    treatment_item_id: treatment.id,
    event_type: 'refill_request_status_changed',
    body,
    actor_user_id: user.id,
    payload: {
      refill_request_id: refillRequestId,
      from: prev,
      to: next,
    },
  })
  if (tErr) console.error(tErr)

  if (next === 'approved') {
    await completeDiagnosticActionTasks(supabase, patientId, user.id, 'refill_approved', openDiagnosticTasks)
  } else if (next === 'fulfilled') {
    await completeDiagnosticActionTasks(supabase, patientId, user.id, 'refill_fulfilled', openDiagnosticTasks)
  }

  await logAuditEvent({
    actorUserId: user.id,
    action: 'refill_request.status_changed',
    resourceType: 'refill_request',
    resourceId: refillRequestId,
    patientId,
    metadata: { from: prev, to: next, treatment_item_id: treatment.id },
  })

  revalidatePath(`/internal/patients/${patientId}`)
  revalidatePath('/internal/patients')
  return { ok: true }
}

function parseStrengthUnit(v: string): StrengthUnit | null {
  if (v === 'mg' || v === 'mcg' || v === '%') return v
  return null
}

export async function addCatalogTreatmentItem(
  patientId: string,
  formData: FormData
): Promise<AddCatalogTreatmentResult> {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const careProgramId = String(formData.get('careProgramId') ?? '').trim()
  const catalogMedicationId = String(formData.get('catalogMedicationId') ?? '').trim()
  const route = String(formData.get('route') ?? '').trim()
  const frequency = String(formData.get('frequency') ?? '').trim()
  const initialStatusRaw = String(formData.get('initialStatus') ?? '').trim()
  const initialStatus = initialStatusRaw === 'approved' ? 'approved' : 'pending_approval'
  const supersedesRaw = String(formData.get('supersedesTreatmentItemId') ?? '').trim()
  const supersedesTreatmentItemId = supersedesRaw.length > 0 ? supersedesRaw : null
  const sig = String(formData.get('sig') ?? '')
  const dispenseQuantity = String(formData.get('dispenseQuantity') ?? '')
  const cycling = String(formData.get('cycling') ?? '')
  const hold_if = String(formData.get('hold_if') ?? '')

  const strengthMode = String(formData.get('strengthMode') ?? '').trim()
  let strengthAmount = Number.NaN
  let strengthUnit: StrengthUnit | null = null

  if (strengthMode === 'custom') {
    strengthAmount = Number(String(formData.get('customStrengthAmount') ?? '').trim())
    strengthUnit = parseStrengthUnit(String(formData.get('customStrengthUnit') ?? '').trim())
  } else {
    const parts = strengthMode.split('|')
    if (parts.length === 2) {
      strengthAmount = Number(parts[0])
      strengthUnit = parseStrengthUnit(parts[1] ?? '')
    }
  }

  if (!careProgramId || !catalogMedicationId || !route || !frequency) {
    return { ok: false, error: 'Program, medication, route, and frequency are required.' }
  }
  if (!Number.isFinite(strengthAmount) || strengthAmount <= 0 || !strengthUnit) {
    return { ok: false, error: 'Select a valid strength (or enter a custom dose with unit).' }
  }

  const durationRaw = Number(String(formData.get('durationDays') ?? '').trim())
  const allowedDuration = new Set<RxDurationDays>([30, 60, 90])
  if (!allowedDuration.has(durationRaw as RxDurationDays)) {
    return { ok: false, error: 'Supply duration must be 30, 60, or 90 days.' }
  }
  const durationDays = durationRaw as RxDurationDays

  const refillsAuthorized = Number(String(formData.get('refillsAuthorized') ?? '0').trim())
  if (!Number.isFinite(refillsAuthorized) || refillsAuthorized < 0 || refillsAuthorized > 11) {
    return { ok: false, error: 'Refills must be between 0 and 11.' }
  }

  const fulfillmentRaw = String(formData.get('fulfillmentChannel') ?? '503a_partner').trim()
  const allowedFulfillment = new Set<string>(['503a_partner', 'retail_erx_planned', 'internal_only'])
  if (!allowedFulfillment.has(fulfillmentRaw)) {
    return { ok: false, error: 'Invalid fulfillment channel.' }
  }
  const fulfillmentChannel = fulfillmentRaw as FulfillmentChannel

  const providerStaffProfileId = String(formData.get('providerStaffProfileId') ?? '').trim()
  const selectedProvider = providerStaffProfileId ? await loadProviderSignerById(supabase, providerStaffProfileId) : null

  const prescriberDisplayName = selectedProvider?.displayName ?? String(formData.get('prescriberDisplayName') ?? '')
  const prescriberNpi = selectedProvider?.npi ?? String(formData.get('prescriberNpi') ?? '')
  const prescriberPhone = String(formData.get('prescriberPhone') ?? '')
  const organizationPhone = String(formData.get('organizationPhone') ?? '')

  if (providerStaffProfileId && !selectedProvider) {
    return { ok: false, error: 'Selected signing provider is invalid or missing required NPI.' }
  }

  const res = await prescribeCatalogTreatment(supabase, user.id, {
    patientId,
    careProgramId,
    catalogMedicationId,
    strengthAmount,
    strengthUnit,
    route,
    frequency,
    initialStatus,
    supersedesTreatmentItemId,
    sig,
    dispenseQuantity,
    cycling,
    hold_if,
    durationDays,
    refillsAuthorized,
    fulfillmentChannel,
    prescriberDisplayName,
    prescriberNpi,
    prescriberCredentials: selectedProvider?.credentials ?? null,
    prescriberStateLicenseNumber: selectedProvider?.stateLicenseNumber ?? null,
    prescriberPrescriptionLicenseNumber: selectedProvider?.prescriptionLicenseNumber ?? null,
    prescriberDeaNumber: selectedProvider?.deaNumber ?? null,
    prescriberPhone,
    organizationPhone,
  })

  if (!res.ok) return res

  revalidatePath(`/internal/patients/${patientId}`)
  revalidatePath('/internal/patients')
  return { ok: true }
}

export async function createAndPublishLabOrder(
  patientId: string,
  input: {
    orderingProviderStaffId?: string
    orderDate: string
    orderingProviderName: string
    orderingProviderNpi?: string
    signatureMode?: 'typed' | 'stamp'
    diagnosisCodes?: string[]
    diagnosisHint?: string
    instructions?: string
    testCodes: string[]
    notifyPatientByEmail?: boolean
  }
): Promise<CreateLabOrderResult> {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const selectedProvider = input.orderingProviderStaffId
    ? await loadProviderSignerById(supabase, input.orderingProviderStaffId)
    : null
  if (input.orderingProviderStaffId && !selectedProvider) {
    return { ok: false, error: 'Selected signing provider is invalid or missing required NPI.' }
  }

  const orderingProviderName = (selectedProvider?.displayName ?? input.orderingProviderName).trim()
  if (!orderingProviderName) {
    return { ok: false, error: 'Ordering provider name is required.' }
  }
  const orderingProviderNpi = normalizeNpi(selectedProvider?.npi ?? input.orderingProviderNpi ?? '')
  if (orderingProviderNpi && orderingProviderNpi.length !== 10) {
    return { ok: false, error: 'Provider NPI must be 10 digits when entered.' }
  }
  const orderDate = input.orderDate.trim()
  if (!/^\d{4}-\d{2}-\d{2}$/.test(orderDate)) {
    return { ok: false, error: 'Order date is invalid.' }
  }

  const testCodes = [...new Set(input.testCodes.map((v) => v.trim()).filter(Boolean))]
  const selectedTests = listLabTestsByCodes(testCodes)
  if (selectedTests.length === 0) {
    return { ok: false, error: 'Select at least one lab test.' }
  }

  const diagnosisCodes = [...new Set((input.diagnosisCodes ?? []).map((v) => v.trim().toUpperCase()).filter(Boolean))]
  if (diagnosisCodes.length > 20) {
    return { ok: false, error: 'Use 20 diagnosis codes or fewer.' }
  }

  const diagnosisHint = (input.diagnosisHint ?? '').trim()
  const instructions = (input.instructions ?? '').trim()
  const signatureMode = input.signatureMode === 'stamp' ? 'stamp' : 'typed'
  const notifyPatientByEmail = input.notifyPatientByEmail !== false
  if (diagnosisHint.length > 400) return { ok: false, error: 'Diagnosis hint is too long.' }
  if (instructions.length > 2000) return { ok: false, error: 'Instructions are too long.' }

  const { data: patient, error: pErr } = await supabase
    .from('patients')
    .select('id, first_name, last_name, dob, email, phone, address_line1, address_line2, city, state, postal_code')
    .eq('id', patientId)
    .maybeSingle()
  if (pErr || !patient) return { ok: false, error: 'Patient not found.' }

  const patientName = [patient.first_name, patient.last_name].filter(Boolean).join(' ').trim() || patient.id
  const cityStateZip = [patient.city, patient.state, patient.postal_code].filter(Boolean).join(', ')
  const generatedAt = new Date().toISOString()
  const preparedByStaff = await getStaffProfile(supabase, user.id)

  const { data: inserted, error: insErr } = await supabase
    .from('lab_orders')
    .insert({
      patient_id: patientId,
      status: 'draft',
      order_date: orderDate,
      ordering_provider_name: orderingProviderName,
      ordering_provider_npi: orderingProviderNpi || null,
      diagnosis_hint: diagnosisHint || null,
      instructions: instructions || null,
      tests: selectedTests,
      created_by_staff_id: user.id,
      metadata: {
        source: 'internal_staff_ui',
        selected_test_codes: selectedTests.map((test) => test.code),
        diagnosis_codes: diagnosisCodes,
        signature_mode: signatureMode,
        ordering_provider_staff_id: selectedProvider?.id ?? null,
        ordering_provider_credentials: selectedProvider?.credentials ?? null,
        ordering_provider_specialty: selectedProvider?.specialty ?? null,
        ordering_provider_state_license: selectedProvider?.stateLicenseNumber ?? null,
        ordering_provider_prescription_license: selectedProvider?.prescriptionLicenseNumber ?? null,
        ordering_provider_dea: selectedProvider?.deaNumber ?? null,
      },
      updated_at: generatedAt,
    })
    .select('id')
    .maybeSingle()
  if (insErr || !inserted) {
    console.error('createAndPublishLabOrder.insert', insErr)
    return { ok: false, error: 'Could not create lab order row.' }
  }

  const lines = [
    'MAIN LAB REQUISITION',
    '----------------------------------------',
    `Order ID: ${inserted.id}`,
    `Generated: ${generatedAt}`,
    `Order date: ${orderDate}`,
    '',
    'PATIENT',
    `Name: ${patientName}`,
    `DOB: ${patient.dob ?? '—'}`,
    `Email: ${patient.email ?? '—'}`,
    `Phone: ${patient.phone ?? '—'}`,
    `Address: ${patient.address_line1 ?? '—'}`,
    `${patient.address_line2 ?? ''}`,
    `${cityStateZip || '—'}`,
    '',
    'ORDERING PROVIDER',
    `Provider: ${orderingProviderName}`,
    `NPI: ${orderingProviderNpi || '—'}`,
    `Credentials: ${selectedProvider?.credentials ?? '—'}`,
    `State license: ${selectedProvider?.stateLicenseNumber ?? '—'}`,
    `Prescriptive license: ${selectedProvider?.prescriptionLicenseNumber ?? '—'}`,
    `DEA: ${selectedProvider?.deaNumber ?? '—'}`,
    `Signature mode: ${signatureMode === 'stamp' ? 'Provider stamp on file' : 'Typed e-signature block'}`,
    `Signed at: ${generatedAt}`,
    '',
    `Diagnosis codes: ${diagnosisCodes.length > 0 ? diagnosisCodes.join(', ') : '—'}`,
    `Diagnosis hint: ${diagnosisHint || '—'}`,
    '',
    'ORDERED TESTS',
    ...selectedTests.map((test) => `- ${test.label}`),
    '',
    'LAB INSTRUCTIONS',
    ...(instructions ? instructions.split('\n') : ['—']),
    '',
    `Prepared by: ${preparedByStaff?.display_name?.trim() || user.id}`,
    'Document type: patient hand-carry lab requisition',
  ]
  const pdfBytes = buildSimpleRxPdf(lines)
  const hash = createHash('sha256').update(pdfBytes).digest('hex')

  const artifact = {
    ...buildLabOrderPdfArtifactPointer({
      patientId,
      labOrderId: inserted.id,
      layoutVersion: 'v1',
      fileName: `lab-order-v1-${Date.now()}.pdf`,
    }),
    content_sha256: hash,
  }

  const admin = createAdminClient()
  const up = await admin.storage.from(artifact.bucket).upload(artifact.object_path, pdfBytes, {
    contentType: 'application/pdf',
    upsert: false,
  })
  if (up.error) {
    console.error('createAndPublishLabOrder.upload', up.error)
    return { ok: false, error: 'Could not upload requisition PDF.' }
  }

  const { error: updErr } = await supabase
    .from('lab_orders')
    .update({
      status: 'published_to_portal',
      pdf_artifact: artifact,
      published_to_patient_at: generatedAt,
      updated_at: generatedAt,
    })
    .eq('id', inserted.id)
  if (updErr) {
    console.error('createAndPublishLabOrder.update', updErr)
    return { ok: false, error: 'PDF generated but order status update failed.' }
  }

  const { data: signed, error: sErr } = await admin.storage.from(artifact.bucket).createSignedUrl(artifact.object_path, 3600)
  if (sErr || !signed?.signedUrl) {
    console.error('createAndPublishLabOrder.signed_url', sErr)
    return { ok: false, error: 'Order published, but signed URL could not be created.' }
  }

  const { error: tErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    event_type: 'lab_order_published',
    body: `Lab requisition published (${selectedTests.length} tests)`,
    actor_user_id: user.id,
    payload: {
      lab_order_id: inserted.id,
      order_date: orderDate,
      ordering_provider_name: orderingProviderName,
      diagnosis_codes: diagnosisCodes,
      ordered_tests: selectedTests.map((test) => ({ code: test.code, label: test.label })),
      signature_mode: signatureMode,
      object_path: artifact.object_path,
      bucket: artifact.bucket,
      content_sha256: hash,
    },
  })
  if (tErr) console.error('createAndPublishLabOrder.timeline', tErr)

  await logAuditEvent({
    actorUserId: user.id,
    action: 'lab_order.published',
    resourceType: 'lab_order',
    resourceId: inserted.id,
    patientId,
    metadata: {
      object_path: artifact.object_path,
      bucket: artifact.bucket,
      test_count: selectedTests.length,
      ordering_provider_name: orderingProviderName,
      ordering_provider_npi: orderingProviderNpi || null,
      diagnosis_codes: diagnosisCodes,
      signature_mode: signatureMode,
    },
  })

  if (notifyPatientByEmail) {
    try {
      const dedupeKey = `email:lab_requisition_published:${inserted.id}`
      const { data: existing } = await admin
        .from('patient_notification_deliveries')
        .select('id')
        .eq('dedupe_key', dedupeKey)
        .eq('channel', 'email')
        .maybeSingle()
      if (!existing && patient.email) {
        let patientPortalUrl: string | null = null
        try {
          patientPortalUrl = await buildPatientPortalExchangeUrl(patientId, `/dashboard/${patientId}`)
        } catch (e) {
          console.warn('createAndPublishLabOrder.portal_link', e)
        }
        const email = buildLabRequisitionPublishedEmail({
          patientId,
          email: patient.email,
          firstName: patient.first_name,
          patientPortalUrl,
          orderDate,
          testCount: selectedTests.length,
        })
        const sent = await sendTransactionalEmail({
          to: patient.email,
          subject: email.subject,
          html: email.html,
          text: email.text,
        })
        if (sent.ok) {
          const { error: dErr } = await admin.from('patient_notification_deliveries').insert({
            patient_id: patientId,
            channel: 'email',
            dedupe_key: dedupeKey,
            template_key: 'lab_requisition_published',
            provider_message_id: sent.id,
          })
          if (dErr) console.error('createAndPublishLabOrder.delivery', dErr)
        } else if (!('skipped' in sent && sent.skipped)) {
          console.error('createAndPublishLabOrder.email', sent.error)
        }
      }
    } catch (err) {
      console.error('createAndPublishLabOrder.notify', err)
    }
  }

  revalidatePath(`/internal/patients/${patientId}`)
  revalidatePath(`/dashboard/${patientId}`)
  return {
    ok: true,
    signedUrl: signed.signedUrl,
    objectPath: artifact.object_path,
    labOrderId: inserted.id,
    testCount: selectedTests.length,
  }
}

export async function createClinicalVisitNote(
  patientId: string,
  input: {
    signingProviderStaffId?: string
    visitType: string
    chiefConcern: string
    diagnosisCodes: string[]
    assessment: string
    plan: string
    counseling: string
    followUpPlan: string
    treatmentItemIds: string[]
    sourceRefillRequestId?: string | null
  }
): Promise<CreateClinicalVisitNoteResult> {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const selectedProvider = input.signingProviderStaffId
    ? await loadProviderSignerById(supabase, input.signingProviderStaffId)
    : null
  if (input.signingProviderStaffId && !selectedProvider) {
    return { ok: false, error: 'Selected signing provider is invalid or missing required NPI.' }
  }

  const visitType = input.visitType.trim() || 'async_intake_review'
  const chiefConcern = input.chiefConcern.trim()
  const assessment = input.assessment.trim()
  const plan = input.plan.trim()
  const counseling = input.counseling.trim()
  const followUpPlan = input.followUpPlan.trim()
  const diagnosisCodes = [...new Set(input.diagnosisCodes.map((v) => v.trim().toUpperCase()).filter(Boolean))].slice(0, 20)
  const sourceRefillRequestId = input.sourceRefillRequestId?.trim() || null

  if (!chiefConcern) return { ok: false, error: 'Chief concern is required.' }
  if (!assessment) return { ok: false, error: 'Assessment is required.' }
  if (!plan) return { ok: false, error: 'Plan is required.' }
  if (!followUpPlan) return { ok: false, error: 'Follow-up plan is required.' }

  const treatmentItemIds = [...new Set(input.treatmentItemIds.map((id) => id.trim()).filter(Boolean))]

  const { data: patient, error: pErr } = await supabase
    .from('patients')
    .select('id, first_name, last_name, dob')
    .eq('id', patientId)
    .maybeSingle()
  if (pErr || !patient) return { ok: false, error: 'Patient not found.' }

  const patientName = [patient.first_name, patient.last_name].filter(Boolean).join(' ').trim() || patient.id
  const nowIso = new Date().toISOString()
  const authorStaff = await getStaffProfile(supabase, user.id)

  const { data: latestForm } = await supabase
    .from('forms')
    .select('id')
    .eq('key', 'glp1-intake')
    .order('version', { ascending: false })
    .limit(1)
    .maybeSingle()

  let allergies: string | null = null
  let currentMedications: string | null = null
  let currentSupplements: string | null = null
  if (latestForm?.id) {
    const { data: latestSubmission } = await supabase
      .from('form_submissions')
      .select('answers')
      .eq('patient_id', patientId)
      .eq('form_id', latestForm.id)
      .order('submitted_at', { ascending: false })
      .limit(1)
      .maybeSingle()
    const answers = ((latestSubmission?.answers as Record<string, unknown>) ?? {}) as Record<string, unknown>
    allergies = typeof answers.allergies === 'string' ? answers.allergies : null
    currentMedications = typeof answers.current_medications === 'string' ? answers.current_medications : null
    currentSupplements = typeof answers.current_supplements === 'string' ? answers.current_supplements : null
  }

  let selectedTreatments: Array<{ id: string; display_name: string; status: string }> = []
  if (treatmentItemIds.length > 0) {
    const { data: treatmentRows, error: tErr } = await supabase
      .from('treatment_items')
      .select('id, display_name, status, patient_id')
      .in('id', treatmentItemIds)
    if (tErr) {
      console.error('createClinicalVisitNote.treatment_items', tErr)
      return { ok: false, error: 'Could not load selected treatment items.' }
    }
    selectedTreatments = (treatmentRows ?? [])
      .filter((row) => row.patient_id === patientId)
      .map((row) => ({ id: row.id, display_name: row.display_name, status: row.status }))
  }

  const selectedRxSafetyLines = selectedTreatments.map(
    (row) =>
      `${row.display_name}: reviewed indication/contraindications and deemed ${
        row.status === 'denied' ? 'not appropriate at this time' : 'appropriate for plan'
      }`
  )

  const noteText = buildClinicalProgressNote({
    visitType,
    visitAtIso: nowIso,
    providerDisplayName: selectedProvider?.displayName ?? authorStaff?.display_name?.trim() ?? user.id,
    providerRole: selectedProvider ? 'prescriber' : authorStaff?.role ?? 'staff',
    patientName,
    patientDob: patient.dob,
    chiefConcern,
    diagnosisCodes,
    assessment,
    plan,
    counseling,
    followUpPlan,
    allergies,
    currentMedications,
    currentSupplements,
    selectedRxSafetyLines,
  })
  let sourceRefillSummary: string | null = null
  let sourceRefillProfile: string | null = null
  let sourceRefillCheckIn: unknown = null
  if (sourceRefillRequestId) {
    const { data: refillRow, error: refillErr } = await supabase
      .from('refill_requests')
      .select('id, patient_id, patient_note, metadata')
      .eq('id', sourceRefillRequestId)
      .maybeSingle()
    if (refillErr) {
      console.error('createClinicalVisitNote.source_refill', refillErr)
    } else if (refillRow && refillRow.patient_id === patientId) {
      sourceRefillSummary =
        typeof refillRow.patient_note === 'string' ? refillRow.patient_note.trim().slice(0, 4000) : null
      if (
        refillRow.metadata &&
        typeof refillRow.metadata === 'object' &&
        !Array.isArray(refillRow.metadata)
      ) {
        const refillMeta = refillRow.metadata as Record<string, unknown>
        sourceRefillProfile =
          typeof refillMeta.refill_check_in_profile === 'string' ? refillMeta.refill_check_in_profile : null
        sourceRefillCheckIn = refillMeta.refill_check_in ?? null
      }
    }
  }
  const noteTextWithRefill =
    sourceRefillSummary && sourceRefillSummary.length > 0
      ? `${noteText}\n\n---\nRefill check-in summary:\n${sourceRefillSummary}`
      : noteText

  const { data: insertedVisit, error: insErr } = await supabase
    .from('clinical_visits')
    .insert({
      patient_id: patientId,
      visit_type: visitType,
      visit_at: nowIso,
      status: 'completed',
      diagnosis_codes: diagnosisCodes,
      assessment,
      plan,
      counseling,
      follow_up_plan: followUpPlan,
      note_text: noteTextWithRefill,
      metadata: {
        chief_concern: chiefConcern,
        linked_treatment_item_ids: selectedTreatments.map((row) => row.id),
        signing_provider_staff_id: selectedProvider?.id ?? user.id,
        signing_provider_npi: selectedProvider?.npi ?? null,
        signing_provider_credentials: selectedProvider?.credentials ?? null,
        signing_provider_state_license: selectedProvider?.stateLicenseNumber ?? null,
        signing_provider_prescription_license: selectedProvider?.prescriptionLicenseNumber ?? null,
        signing_provider_dea: selectedProvider?.deaNumber ?? null,
        source_refill_request_id: sourceRefillRequestId,
        source_refill_check_in_profile: sourceRefillProfile,
        source_refill_check_in: sourceRefillCheckIn,
      },
      signed_by_staff_id: selectedProvider?.id ?? user.id,
      signed_at: nowIso,
      updated_at: nowIso,
    })
    .select('id')
    .maybeSingle()
  if (insErr || !insertedVisit) {
    console.error('createClinicalVisitNote.insert_visit', insErr)
    return { ok: false, error: 'Could not save clinical visit note.' }
  }

  if (selectedTreatments.length > 0) {
    const rows = selectedTreatments.map((row) => ({
      clinical_visit_id: insertedVisit.id,
      patient_id: patientId,
      treatment_item_id: row.id,
      indication: chiefConcern,
      risk_review: counseling,
      monitoring_plan: followUpPlan,
      decision: row.status === 'denied' ? 'deferred' : 'approved',
      metadata: {
        treatment_status_at_review: row.status,
      },
      created_by_staff_id: user.id,
    }))
    const { error: rxErr } = await supabase.from('clinical_visit_rx_reviews').insert(rows)
    if (rxErr) {
      console.error('createClinicalVisitNote.insert_rx_reviews', rxErr)
      return { ok: false, error: 'Visit saved but Rx safety addenda failed to save.' }
    }
  }

  const { error: timelineErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    event_type: 'clinical_visit_documented',
    body: `Clinical visit note documented (${visitType.replaceAll('_', ' ')})`,
    actor_user_id: user.id,
    payload: {
      clinical_visit_id: insertedVisit.id,
      diagnosis_codes: diagnosisCodes,
      linked_treatment_item_ids: selectedTreatments.map((row) => row.id),
      source_refill_request_id: sourceRefillRequestId,
    },
  })
  if (timelineErr) console.error('createClinicalVisitNote.timeline', timelineErr)

  await logAuditEvent({
    actorUserId: user.id,
    action: 'clinical_visit.documented',
    resourceType: 'clinical_visit',
    resourceId: insertedVisit.id,
    patientId,
    metadata: {
      visit_type: visitType,
      diagnosis_codes: diagnosisCodes,
      linked_treatment_item_ids: selectedTreatments.map((row) => row.id),
      source_refill_request_id: sourceRefillRequestId,
    },
  })

  revalidatePath(`/internal/patients/${patientId}`)
  return { ok: true, visitId: insertedVisit.id }
}

export async function publishClinicalVisitPdf(
  patientId: string,
  clinicalVisitId: string,
  notifyPatientByEmail = true
): Promise<PublishClinicalVisitPdfResult> {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const { data: visit, error: visitErr } = await supabase
    .from('clinical_visits')
    .select(
      'id, patient_id, visit_type, visit_at, status, diagnosis_codes, assessment, plan, counseling, follow_up_plan, note_text, signed_by_staff_id, signed_at, metadata, pdf_artifact'
    )
    .eq('id', clinicalVisitId)
    .maybeSingle()
  if (visitErr || !visit) return { ok: false, error: 'Clinical visit not found.' }
  if (visit.patient_id !== patientId) return { ok: false, error: 'Clinical visit does not match patient.' }

  const actorStaff = await getStaffProfile(supabase, user.id)
  const { data: patient, error: pErr } = await supabase
    .from('patients')
    .select('id, first_name, last_name, dob, email')
    .eq('id', patientId)
    .maybeSingle()
  if (pErr || !patient) return { ok: false, error: 'Patient not found.' }
  const patientName = [patient.first_name, patient.last_name].filter(Boolean).join(' ').trim() || patient.id
  const diagnosisCodes = Array.isArray(visit.diagnosis_codes)
    ? (visit.diagnosis_codes as unknown[]).filter((v): v is string => typeof v === 'string')
    : []

  const reviewRows = await supabase
    .from('clinical_visit_rx_reviews')
    .select('treatment_item_id, decision, indication, risk_review, monitoring_plan')
    .eq('clinical_visit_id', visit.id)
    .eq('patient_id', patientId)
  const reviews = (reviewRows.data ?? []) as Array<{
    treatment_item_id: string
    decision: string
    indication: string | null
    risk_review: string | null
    monitoring_plan: string | null
  }>

  let treatmentNameById = new Map<string, string>()
  if (reviews.length > 0) {
    const ids = [...new Set(reviews.map((r) => r.treatment_item_id))]
    const { data: treatments } = await supabase
      .from('treatment_items')
      .select('id, display_name')
      .in('id', ids)
    treatmentNameById = new Map((treatments ?? []).map((row) => [row.id, row.display_name]))
  }

  const selectedRxSafetyLines = reviews.map((review) => {
    const treatmentName = treatmentNameById.get(review.treatment_item_id) ?? review.treatment_item_id
    const reviewText = review.risk_review?.trim() || review.indication?.trim() || 'safety reviewed'
    return `${treatmentName}: ${review.decision} (${reviewText})`
  })

  const { data: signedProvider } = await supabase
    .from('staff_profiles')
    .select('id, role, display_name, first_name, last_name, credentials, npi, dea_number, state_licenses, prescription_licenses')
    .eq('id', visit.signed_by_staff_id)
    .maybeSingle()
  const signedProviderName =
    signedProvider?.display_name?.trim() ||
    [signedProvider?.first_name, signedProvider?.last_name].filter(Boolean).join(' ').trim() ||
    actorStaff?.display_name?.trim() ||
    user.id
  const signedProviderRole =
    typeof signedProvider?.role === 'string' ? signedProvider.role : actorStaff?.role ?? 'staff'
  const signedProviderNpi =
    typeof signedProvider?.npi === 'string' && signedProvider.npi.trim().length > 0
      ? normalizeNpi(signedProvider.npi)
      : null
  const signedProviderStateLicense = firstLicenseNumber(signedProvider?.state_licenses)
  const signedProviderPrescriptionLicense = firstLicenseNumber(signedProvider?.prescription_licenses)
  const signedProviderDea =
    typeof signedProvider?.dea_number === 'string' && signedProvider.dea_number.trim().length > 0
      ? signedProvider.dea_number.trim()
      : null
  const metadata = ((visit.metadata as Record<string, unknown>) ?? {}) as Record<string, unknown>
  const chiefConcern =
    typeof metadata.chief_concern === 'string' && metadata.chief_concern.trim().length > 0
      ? metadata.chief_concern
      : 'Clinical follow-up'

  const noteText = buildClinicalProgressNote({
    visitType: visit.visit_type,
    visitAtIso: typeof visit.visit_at === 'string' ? visit.visit_at : new Date().toISOString(),
    providerDisplayName: signedProviderName,
    providerRole: signedProviderRole,
    patientName,
    patientDob: patient.dob,
    chiefConcern,
    diagnosisCodes,
    assessment: typeof visit.assessment === 'string' ? visit.assessment : visit.note_text,
    plan: typeof visit.plan === 'string' ? visit.plan : visit.note_text,
    counseling: typeof visit.counseling === 'string' ? visit.counseling : 'See signed progress note narrative below.',
    followUpPlan:
      typeof visit.follow_up_plan === 'string' ? visit.follow_up_plan : 'Per provider plan in signed note.',
    allergies: null,
    currentMedications: null,
    currentSupplements: null,
    selectedRxSafetyLines,
  })

  const lines = [
    'MAIN CLINICAL VISIT NOTE',
    '----------------------------------------',
    `Visit ID: ${visit.id}`,
    `Patient: ${patientName}`,
    `DOB: ${patient.dob ?? '—'}`,
    `Visit type: ${visit.visit_type}`,
    `Visit date: ${typeof visit.visit_at === 'string' ? visit.visit_at : '—'}`,
    `Signed by: ${signedProviderName}`,
    `NPI: ${signedProviderNpi ?? '—'}`,
    `Credentials: ${typeof signedProvider?.credentials === 'string' ? signedProvider.credentials : '—'}`,
    `State license: ${signedProviderStateLicense ?? '—'}`,
    `Prescriptive license: ${signedProviderPrescriptionLicense ?? '—'}`,
    `DEA: ${signedProviderDea ?? '—'}`,
    `Signed at: ${typeof visit.signed_at === 'string' ? visit.signed_at : '—'}`,
    '',
    `Diagnosis codes: ${diagnosisCodes.length > 0 ? diagnosisCodes.join(', ') : '—'}`,
    '',
    ...noteText.split('\n'),
  ]

  const pdfBytes = buildSimpleRxPdf(lines)
  const hash = createHash('sha256').update(pdfBytes).digest('hex')
  const artifact = {
    ...buildClinicalVisitPdfArtifactPointer({
      patientId,
      clinicalVisitId: visit.id,
      layoutVersion: 'v1',
      fileName: `clinical-visit-v1-${Date.now()}.pdf`,
    }),
    content_sha256: hash,
  }

  const admin = createAdminClient()
  const uploadRes = await admin.storage.from(artifact.bucket).upload(artifact.object_path, pdfBytes, {
    contentType: 'application/pdf',
    upsert: false,
  })
  if (uploadRes.error) {
    console.error('publishClinicalVisitPdf.upload', uploadRes.error)
    return { ok: false, error: 'Could not upload clinical note PDF.' }
  }

  const publishedAt = new Date().toISOString()
  const { error: updErr } = await supabase
    .from('clinical_visits')
    .update({
      status: 'locked',
      pdf_artifact: artifact,
      published_to_patient_at: publishedAt,
      updated_at: publishedAt,
    })
    .eq('id', visit.id)
  if (updErr) {
    console.error('publishClinicalVisitPdf.update', updErr)
    return { ok: false, error: 'PDF uploaded but visit row update failed.' }
  }

  const { data: signed, error: signedErr } = await admin.storage
    .from(artifact.bucket)
    .createSignedUrl(artifact.object_path, 3600)
  if (signedErr || !signed?.signedUrl) {
    console.error('publishClinicalVisitPdf.signed_url', signedErr)
    return { ok: false, error: 'PDF published but signed URL unavailable.' }
  }

  const { error: timelineErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    event_type: 'clinical_visit_pdf_published',
    body: `Clinical visit PDF published to patient portal (${visit.visit_type.replaceAll('_', ' ')})`,
    actor_user_id: user.id,
    payload: {
      clinical_visit_id: visit.id,
      object_path: artifact.object_path,
      bucket: artifact.bucket,
      content_sha256: hash,
    },
  })
  if (timelineErr) console.error('publishClinicalVisitPdf.timeline', timelineErr)

  await logAuditEvent({
    actorUserId: user.id,
    action: 'clinical_visit.pdf_published',
    resourceType: 'clinical_visit',
    resourceId: visit.id,
    patientId,
    metadata: {
      object_path: artifact.object_path,
      bucket: artifact.bucket,
      content_sha256: hash,
      notify_patient_email: notifyPatientByEmail,
    },
  })

  if (notifyPatientByEmail && patient.email) {
    try {
      const dedupeKey = `email:clinical_visit_note_published:${visit.id}`
      const { data: existing } = await admin
        .from('patient_notification_deliveries')
        .select('id')
        .eq('dedupe_key', dedupeKey)
        .eq('channel', 'email')
        .maybeSingle()
      if (!existing) {
        let patientPortalUrl: string | null = null
        try {
          patientPortalUrl = await buildPatientPortalExchangeUrl(patientId, `/dashboard/${patientId}`)
        } catch (e) {
          console.warn('publishClinicalVisitPdf.portal_link', e)
        }
        const email = buildClinicalVisitNotePublishedEmail({
          patientId,
          email: patient.email,
          firstName: patient.first_name,
          patientPortalUrl,
          visitDate:
            typeof visit.visit_at === 'string'
              ? new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(visit.visit_at))
              : 'your recent visit',
        })
        const sent = await sendTransactionalEmail({
          to: patient.email,
          subject: email.subject,
          html: email.html,
          text: email.text,
        })
        if (sent.ok) {
          const { error: dErr } = await admin.from('patient_notification_deliveries').insert({
            patient_id: patientId,
            channel: 'email',
            dedupe_key: dedupeKey,
            template_key: 'clinical_visit_note_published',
            provider_message_id: sent.id,
          })
          if (dErr) console.error('publishClinicalVisitPdf.delivery', dErr)
        } else if (!('skipped' in sent && sent.skipped)) {
          console.error('publishClinicalVisitPdf.email', sent.error)
        }
      }
    } catch (err) {
      console.error('publishClinicalVisitPdf.notify', err)
    }
  }

  revalidatePath(`/internal/patients/${patientId}`)
  revalidatePath(`/dashboard/${patientId}`)
  return { ok: true, signedUrl: signed.signedUrl, objectPath: artifact.object_path }
}

export async function createClinicalVisitAddendum(
  patientId: string,
  clinicalVisitId: string,
  rawAddendumText: string
): Promise<CreateClinicalVisitAddendumResult> {
  const addendumText = rawAddendumText.trim()
  if (!addendumText) return { ok: false, error: 'Addendum text is required.' }
  if (addendumText.length > MAX_NOTE) {
    return { ok: false, error: `Addendum must be ${MAX_NOTE} characters or less.` }
  }

  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const { data: visit, error: visitErr } = await supabase
    .from('clinical_visits')
    .select('id, patient_id, status')
    .eq('id', clinicalVisitId)
    .maybeSingle()
  if (visitErr || !visit) return { ok: false, error: 'Clinical visit not found.' }
  if (visit.patient_id !== patientId) return { ok: false, error: 'Clinical visit does not match patient.' }
  if (visit.status !== 'locked') {
    return { ok: false, error: 'Addenda are only allowed after the note is locked/published.' }
  }

  const { data: inserted, error: insErr } = await supabase
    .from('clinical_visit_addenda')
    .insert({
      clinical_visit_id: clinicalVisitId,
      patient_id: patientId,
      addendum_text: addendumText,
      created_by_staff_id: user.id,
    })
    .select('id')
    .maybeSingle()
  if (insErr || !inserted) {
    console.error('createClinicalVisitAddendum.insert', insErr)
    return { ok: false, error: 'Could not save addendum.' }
  }

  const { error: timelineErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    event_type: 'clinical_visit_addendum_created',
    body: `Clinical visit addendum recorded.\n${addendumText}`,
    actor_user_id: user.id,
    payload: {
      clinical_visit_id: clinicalVisitId,
      clinical_visit_addendum_id: inserted.id,
    },
  })
  if (timelineErr) console.error('createClinicalVisitAddendum.timeline', timelineErr)

  await logAuditEvent({
    actorUserId: user.id,
    action: 'clinical_visit.addendum_created',
    resourceType: 'clinical_visit_addendum',
    resourceId: inserted.id,
    patientId,
    metadata: {
      clinical_visit_id: clinicalVisitId,
      text_length: addendumText.length,
    },
  })

  revalidatePath(`/internal/patients/${patientId}`)
  return { ok: true, addendumId: inserted.id }
}

export async function markLabOrderDispatched(
  patientId: string,
  labOrderId: string,
  dispatchModeRaw: string,
  destinationRaw?: string,
  noteRaw?: string
): Promise<MarkLabOrderDispatchedResult> {
  const dispatchMode = dispatchModeRaw.trim() === 'fax' ? 'fax' : 'send_to_lab'
  const destination = (destinationRaw ?? '').trim()
  const note = (noteRaw ?? '').trim()
  if (note.length > MAX_NOTE) return { ok: false, error: `Note must be ${MAX_NOTE} characters or less.` }

  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const { data: order, error } = await supabase
    .from('lab_orders')
    .select('id, patient_id, status, metadata')
    .eq('id', labOrderId)
    .maybeSingle()
  if (error || !order) return { ok: false, error: 'Lab order not found.' }
  if (order.patient_id !== patientId) return { ok: false, error: 'Lab order does not match patient.' }
  if (order.status !== 'published_to_portal' && order.status !== 'sent_to_lab' && order.status !== 'faxed_to_lab') {
    return { ok: false, error: 'Lab order must be published before dispatch updates.' }
  }

  const nextStatus = dispatchMode === 'fax' ? 'faxed_to_lab' : 'sent_to_lab'
  const mergedMetadata = {
    ...((order.metadata as Record<string, unknown>) ?? {}),
    latest_dispatch: {
      mode: dispatchMode,
      destination: destination || null,
      note: note || null,
      at: new Date().toISOString(),
      by_user_id: user.id,
    },
  }

  const { error: updErr } = await supabase
    .from('lab_orders')
    .update({
      status: nextStatus,
      metadata: mergedMetadata,
      updated_at: new Date().toISOString(),
    })
    .eq('id', labOrderId)
  if (updErr) {
    console.error('markLabOrderDispatched.update', updErr)
    return { ok: false, error: 'Could not update lab order dispatch state.' }
  }

  const body =
    dispatchMode === 'fax'
      ? `Lab requisition faxed${destination ? ` to ${destination}` : ''}.${note ? `\nNote: ${note}` : ''}`
      : `Lab requisition sent to lab${destination ? ` (${destination})` : ''}.${note ? `\nNote: ${note}` : ''}`
  const { error: tErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    event_type: 'lab_order_dispatch_updated',
    body,
    actor_user_id: user.id,
    payload: {
      lab_order_id: labOrderId,
      dispatch_mode: dispatchMode,
      destination: destination || null,
      note: note || null,
      status: nextStatus,
    },
  })
  if (tErr) console.error('markLabOrderDispatched.timeline', tErr)

  await logAuditEvent({
    actorUserId: user.id,
    action: 'lab_order.dispatch_updated',
    resourceType: 'lab_order',
    resourceId: labOrderId,
    patientId,
    metadata: { dispatch_mode: dispatchMode, destination: destination || null, status: nextStatus },
  })

  revalidatePath(`/internal/patients/${patientId}`)
  revalidatePath(`/dashboard/${patientId}`)
  return { ok: true }
}

export async function generateRxPdfForTreatment(
  patientId: string,
  treatmentItemId: string
): Promise<GenerateRxPdfResult> {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const { data: item, error: iErr } = await supabase
    .from('treatment_items')
    .select('id, patient_id, care_program_id, display_name, treatment_key, dosage, metadata, status, created_at')
    .eq('id', treatmentItemId)
    .maybeSingle()
  if (iErr || !item) return { ok: false, error: 'Treatment item not found.' }
  if (item.patient_id !== patientId) return { ok: false, error: 'Treatment item does not match patient.' }

  const { data: patient, error: pErr } = await supabase
    .from('patients')
    .select('id, first_name, last_name, dob, email, phone, address_line1, address_line2, city, state, postal_code')
    .eq('id', patientId)
    .maybeSingle()
  if (pErr || !patient) return { ok: false, error: 'Patient not found.' }

  const md = ((item.metadata as Record<string, unknown>) ?? {}) as Record<string, unknown>
  const d = ((item.dosage as Record<string, unknown>) ?? {}) as Record<string, unknown>

  const strength = d.strength as { amount?: unknown; unit?: unknown } | undefined
  const strengthText =
    typeof strength?.amount === 'number' && typeof strength?.unit === 'string'
      ? `${strength.amount} ${strength.unit}`
      : 'Not specified'
  const route = typeof d.route === 'string' ? d.route : 'Not specified'
  const frequency = typeof d.frequency === 'string' ? d.frequency : 'Not specified'
  const sig = typeof d.sig === 'string' ? d.sig : ''

  const rx = md.rx_supply as { duration_days?: unknown; refills_authorized?: unknown } | undefined
  const prescriber = md.prescriber as
    | {
        display_name?: unknown
        npi?: unknown
        phone?: unknown
        organization_phone?: unknown
        credentials?: unknown
        state_license_number?: unknown
        prescription_license_number?: unknown
        dea_number?: unknown
      }
    | undefined

  const patientName = [patient.first_name, patient.last_name].filter(Boolean).join(' ').trim() || patient.id
  const shippingCityStateZip = [patient.city, patient.state, patient.postal_code].filter(Boolean).join(', ')
  const nowIso = new Date().toISOString()
  const lines = [
    'MAIN RX ARTIFACT (TEMP PDF)',
    `Generated: ${nowIso}`,
    '',
    `Patient: ${patientName}`,
    `DOB: ${patient.dob ?? '—'}`,
    `Email: ${patient.email ?? '—'}`,
    `Phone: ${patient.phone ?? '—'}`,
    '',
    'Ship to (on file):',
    `${patientName}`,
    `${patient.address_line1 ?? '—'}`,
    `${patient.address_line2 ?? ''}`,
    `${shippingCityStateZip || '—'}`,
    '',
    `Medication: ${item.display_name}`,
    `Treatment key: ${item.treatment_key}`,
    `Status: ${item.status}`,
    `Strength: ${strengthText}`,
    `Route: ${route}`,
    `Frequency: ${frequency}`,
    `Directions: ${sig || '—'}`,
    '',
    `Day supply: ${typeof rx?.duration_days === 'number' ? rx.duration_days : '—'}`,
    `Refills: ${typeof rx?.refills_authorized === 'number' ? rx.refills_authorized : '—'}`,
    `Prescriber: ${typeof prescriber?.display_name === 'string' ? prescriber.display_name : '—'}`,
    `Credentials: ${typeof prescriber?.credentials === 'string' ? prescriber.credentials : '—'}`,
    `NPI: ${typeof prescriber?.npi === 'string' ? prescriber.npi : '—'}`,
    `State license: ${
      typeof prescriber?.state_license_number === 'string' ? prescriber.state_license_number : '—'
    }`,
    `Prescriptive license: ${
      typeof prescriber?.prescription_license_number === 'string' ? prescriber.prescription_license_number : '—'
    }`,
    `DEA: ${typeof prescriber?.dea_number === 'string' ? prescriber.dea_number : '—'}`,
    `Prescriber phone: ${typeof prescriber?.phone === 'string' && prescriber.phone ? prescriber.phone : '—'}`,
    `Clinic phone: ${
      typeof prescriber?.organization_phone === 'string' && prescriber.organization_phone
        ? prescriber.organization_phone
        : '—'
    }`,
    '',
    `Fax destination (temporary default): ${DEFAULT_TEMP_FAX_NUMBER}`,
  ]
  const pdfBytes = buildSimpleRxPdf(lines)
  const hash = createHash('sha256').update(pdfBytes).digest('hex')

  const version = `v1-${Date.now()}`
  const artifact = {
    ...buildRxPdfArtifactPointer({
      patientId,
      treatmentItemId,
      layoutVersion: 'v1',
      fileName: `rx-${version}.pdf`,
    }),
    content_sha256: hash,
    fax_to: DEFAULT_TEMP_FAX_NUMBER,
    fax_sent_at: null,
    partner_send_id: null,
  }

  const admin = createAdminClient()
  const up = await admin.storage.from(artifact.bucket).upload(artifact.object_path, pdfBytes, {
    contentType: 'application/pdf',
    upsert: false,
  })
  if (up.error) {
    console.error('generateRxPdfForTreatment.upload', up.error)
    return { ok: false, error: 'Could not upload Rx PDF artifact.' }
  }

  const mergedMetadata = attachRxPdfToMetadata(md, artifact)
  const { error: uErr } = await supabase
    .from('treatment_items')
    .update({ metadata: mergedMetadata, updated_at: new Date().toISOString() })
    .eq('id', treatmentItemId)
  if (uErr) {
    console.error('generateRxPdfForTreatment.metadata_update', uErr)
    return { ok: false, error: 'PDF generated but chart metadata could not be updated.' }
  }

  const { data: signed, error: sErr } = await admin.storage.from(artifact.bucket).createSignedUrl(artifact.object_path, 3600)
  if (sErr || !signed?.signedUrl) {
    console.error('generateRxPdfForTreatment.signed_url', sErr)
    return { ok: false, error: 'PDF saved but signed URL could not be created.' }
  }

  const { error: tErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    care_program_id: item.care_program_id,
    treatment_item_id: item.id,
    event_type: 'rx_pdf_generated',
    body: `Rx PDF generated for ${item.display_name} (fax default ${DEFAULT_TEMP_FAX_NUMBER})`,
    actor_user_id: user.id,
    payload: {
      object_path: artifact.object_path,
      bucket: artifact.bucket,
      content_sha256: hash,
      fax_to: DEFAULT_TEMP_FAX_NUMBER,
    },
  })
  if (tErr) console.error('generateRxPdfForTreatment.timeline', tErr)

  await logAuditEvent({
    actorUserId: user.id,
    action: 'treatment_item.rx_pdf_generated',
    resourceType: 'treatment_item',
    resourceId: item.id,
    patientId,
    metadata: { object_path: artifact.object_path, bucket: artifact.bucket, fax_to: DEFAULT_TEMP_FAX_NUMBER },
  })

  revalidatePath(`/internal/patients/${patientId}`)
  return { ok: true, signedUrl: signed.signedUrl, objectPath: artifact.object_path }
}

export async function prepareTreatmentForPharmacyDispatch(
  patientId: string,
  treatmentItemId: string,
  rawPartnerNote?: string
): Promise<PreparePharmacyDispatchResult> {
  const partnerNote = (rawPartnerNote ?? '').trim()
  if (partnerNote.length > MAX_NOTE) return { ok: false, error: `Note must be ${MAX_NOTE} characters or less.` }

  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const { data: treatment, error: tiErr } = await supabase
    .from('treatment_items')
    .select('id, patient_id, care_program_id, treatment_key, display_name, status, dosage, metadata')
    .eq('id', treatmentItemId)
    .maybeSingle()
  if (tiErr || !treatment) return { ok: false, error: 'Treatment item not found.' }
  if (treatment.patient_id !== patientId) return { ok: false, error: 'Treatment item does not match patient.' }

  const { data: patient, error: pErr } = await supabase
    .from('patients')
    .select(
      'id, first_name, last_name, email, phone, dob, address_line1, address_line2, city, state, postal_code'
    )
    .eq('id', patientId)
    .maybeSingle()
  if (pErr || !patient) return { ok: false, error: 'Patient not found.' }

  if (!patient.address_line1 || !patient.city || !patient.state || !patient.postal_code) {
    return { ok: false, error: 'Patient address on file is incomplete (line1/city/state/postal required).' }
  }
  if (!patient.phone) {
    return { ok: false, error: 'Patient phone is required before dispatch.' }
  }

  const md = ((treatment.metadata as Record<string, unknown>) ?? {}) as Record<string, unknown>
  const rxSupply = (md.rx_supply as Record<string, unknown>) ?? {}
  const prescriber = (md.prescriber as Record<string, unknown>) ?? {}

  const shippingSnapshot = {
    patient_name: [patient.first_name, patient.last_name].filter(Boolean).join(' ').trim() || patient.id,
    phone: patient.phone,
    address_line1: patient.address_line1,
    address_line2: patient.address_line2 ?? null,
    city: patient.city,
    state: patient.state,
    postal_code: patient.postal_code,
    captured_at: new Date().toISOString(),
    source: 'patients_on_file_no_confirm_v1',
  }

  const fulfillmentChannel =
    typeof md.fulfillment_channel === 'string' ? md.fulfillment_channel : '503a_partner'

  const payload = {
    main_patient_id: patient.id,
    patient: {
      name: shippingSnapshot.patient_name,
      phone: patient.phone,
      email: patient.email ?? null,
      dob: patient.dob ?? null,
    },
    shipping_snapshot: shippingSnapshot,
    treatment: {
      treatment_item_id: treatment.id,
      treatment_key: treatment.treatment_key,
      display_name: treatment.display_name,
      status: treatment.status,
      dosage: (treatment.dosage as Record<string, unknown>) ?? {},
    },
    rx_supply: rxSupply,
    prescriber: prescriber,
    rx_pdf: (md.rx_pdf as Record<string, unknown>) ?? null,
    fulfillment_channel: fulfillmentChannel,
    dispatch_mode: 'fax_pdf',
    fax_to: DEFAULT_TEMP_FAX_NUMBER,
    partner_note: partnerNote.length > 0 ? partnerNote : null,
    prepared_by_staff_id: user.id,
    prepared_at: new Date().toISOString(),
  }

  // Legacy pharmacy-dispatch flow: by the time staff is preparing a dispatch payload
  // the treatment is already approved and (historically) paid. Create the order row
  // directly in `preparing` under the new lifecycle enum (see 20260428100000_orders_lifecycle_v1.sql).
  const { data: inserted, error: insErr } = await supabase
    .from('treatment_orders')
    .insert({
      patient_id: patientId,
      care_program_id: treatment.care_program_id,
      treatment_item_id: treatment.id,
      status: 'preparing',
      metadata: payload,
      shipping_snapshot: shippingSnapshot,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .select('id')
    .single()

  if (insErr || !inserted) {
    console.error('prepareTreatmentForPharmacyDispatch.insert_order', insErr)
    return { ok: false, error: 'Could not create treatment order payload.' }
  }

  const mergedMetadata = {
    ...md,
    shipping_snapshot: shippingSnapshot,
    latest_dispatch: {
      treatment_order_id: inserted.id,
      prepared_at: new Date().toISOString(),
      dispatch_mode: 'fax_pdf',
      fax_to: DEFAULT_TEMP_FAX_NUMBER,
      fulfillment_channel: fulfillmentChannel,
    },
  }

  const { error: updErr } = await supabase
    .from('treatment_items')
    .update({ metadata: mergedMetadata, updated_at: new Date().toISOString() })
    .eq('id', treatment.id)
  if (updErr) {
    console.error('prepareTreatmentForPharmacyDispatch.update_treatment_metadata', updErr)
  }

  const body = `Pharmacy dispatch payload prepared for ${treatment.display_name} (fax ${DEFAULT_TEMP_FAX_NUMBER})`
  const { error: tErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    care_program_id: treatment.care_program_id,
    treatment_item_id: treatment.id,
    event_type: 'pharmacy_dispatch_prepared',
    body,
    actor_user_id: user.id,
    payload: {
      treatment_order_id: inserted.id,
      dispatch_mode: 'fax_pdf',
      fax_to: DEFAULT_TEMP_FAX_NUMBER,
      fulfillment_channel: fulfillmentChannel,
    },
  })
  if (tErr) console.error('prepareTreatmentForPharmacyDispatch.timeline', tErr)

  await logAuditEvent({
    actorUserId: user.id,
    action: 'treatment_order.payload_prepared',
    resourceType: 'treatment_order',
    resourceId: inserted.id,
    patientId,
    metadata: { treatment_item_id: treatment.id, dispatch_mode: 'fax_pdf', fax_to: DEFAULT_TEMP_FAX_NUMBER },
  })

  let warning: string | undefined
  if (treatment.status === 'approved') {
    const statusRes = await updateTreatmentItemStatus(patientId, treatment.id, 'rx_sent')
    if (!statusRes.ok) {
      warning = `Order payload prepared, but treatment status not moved to Rx sent: ${statusRes.error}`
    }
  }

  revalidatePath(`/internal/patients/${patientId}`)
  return { ok: true, orderId: inserted.id, ...(warning ? { warning } : {}) }
}

export async function updateSupplementFulfillmentStatus(
  patientId: string,
  fulfillmentOrderId: string,
  nextStatusRaw: string,
  trackingNumberRaw?: string,
  trackingUrlRaw?: string,
  staffNoteRaw?: string
): Promise<UpdateSupplementFulfillmentStatusResult> {
  const nextStatus = nextStatusRaw.trim()
  const trackingNumber = (trackingNumberRaw ?? '').trim()
  const staffNote = (staffNoteRaw ?? '').trim()
  const trackingUrlInput = (trackingUrlRaw ?? '').trim()
  const trackingUrl = normalizeTrackingUrl(trackingUrlInput)

  if (!isSupplementFulfillmentStatus(nextStatus)) {
    return { ok: false, error: 'Invalid supplement fulfillment status.' }
  }
  if (staffNote.length > MAX_NOTE) return { ok: false, error: `Note must be ${MAX_NOTE} characters or less.` }
  if (trackingUrlInput && !trackingUrl) {
    return { ok: false, error: 'Tracking URL must be a valid http(s) URL.' }
  }

  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const { data: order, error: orderErr } = await supabase
    .from('supplement_fulfillment_orders')
    .select('id, patient_id, stripe_checkout_session_id, status, metadata, items')
    .eq('id', fulfillmentOrderId)
    .maybeSingle()
  if (orderErr || !order) return { ok: false, error: 'Supplement fulfillment order not found.' }
  if (order.patient_id !== patientId) return { ok: false, error: 'Supplement fulfillment order does not match patient.' }
  if (!isSupplementFulfillmentStatus(order.status)) {
    return { ok: false, error: 'Current status is unsupported. Please set to queued via SQL once.' }
  }
  if (!isSupplementFulfillmentTransitionAllowed(order.status, nextStatus)) {
    const allowed = allowedNextSupplementFulfillmentStatuses(order.status).map(labelSupplementFulfillmentStatus)
    return {
      ok: false,
      error:
        allowed.length > 0
          ? `Transition not allowed. Next allowed: ${allowed.join(', ')}.`
          : `No transitions allowed from ${labelSupplementFulfillmentStatus(order.status)}.`,
    }
  }

  const priorMetadata = ((order.metadata as Record<string, unknown>) ?? {}) as Record<string, unknown>
  const timelineNote = {
    changed_at: new Date().toISOString(),
    changed_by: user.id,
    from_status: order.status,
    to_status: nextStatus,
    note: staffNote || null,
    tracking_number: trackingNumber || null,
    tracking_url: trackingUrl || null,
  }
  const statusHistory = Array.isArray(priorMetadata.status_history)
    ? (priorMetadata.status_history as unknown[])
    : []
  const mergedMetadata: Record<string, unknown> = {
    ...priorMetadata,
    latest_tracking_number: trackingNumber || (priorMetadata.latest_tracking_number as string | undefined) || null,
    latest_tracking_url: trackingUrl || (priorMetadata.latest_tracking_url as string | undefined) || null,
    status_history: [...statusHistory, timelineNote],
  }

  const { error: updErr } = await supabase
    .from('supplement_fulfillment_orders')
    .update({
      status: nextStatus,
      metadata: mergedMetadata,
      updated_at: new Date().toISOString(),
    })
    .eq('id', order.id)
  if (updErr) {
    console.error('updateSupplementFulfillmentStatus.update', updErr)
    return { ok: false, error: 'Could not update supplement fulfillment status.' }
  }

  const labelFrom = labelSupplementFulfillmentStatus(order.status)
  const labelTo = labelSupplementFulfillmentStatus(nextStatus)
  const noteSuffix = staffNote ? `\nNote: ${staffNote}` : ''
  const trackingSuffix = trackingNumber
    ? `\nTracking: ${trackingNumber}${trackingUrl ? ` (${trackingUrl})` : ''}`
    : ''
  const body = `Supplement fulfillment status ${labelFrom} → ${labelTo}.${trackingSuffix}${noteSuffix}`
  const { error: tErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    event_type: 'supplement_fulfillment_status_changed',
    body,
    actor_user_id: user.id,
    payload: {
      fulfillment_order_id: order.id,
      stripe_checkout_session_id: order.stripe_checkout_session_id,
      from_status: order.status,
      to_status: nextStatus,
      tracking_number: trackingNumber || null,
      tracking_url: trackingUrl || null,
    },
  })
  if (tErr) console.error('updateSupplementFulfillmentStatus.timeline', tErr)

  const shouldNotify = nextStatus !== 'blocked_missing_shipping' || Boolean(staffNote)
  if (shouldNotify) {
    try {
      const admin = createAdminClient()
      const dedupeKey = `email:supplement_fulfillment:${order.stripe_checkout_session_id}:${nextStatus}`
      const { data: existing } = await admin
        .from('patient_notification_deliveries')
        .select('id')
        .eq('dedupe_key', dedupeKey)
        .eq('channel', 'email')
        .maybeSingle()

      if (!existing) {
        const { data: patient } = await admin
          .from('patients')
          .select('id, email, first_name')
          .eq('id', patientId)
          .maybeSingle()

        if (patient?.email) {
          let patientPortalUrl: string | null = null
          try {
            patientPortalUrl = await buildPatientPortalExchangeUrl(patientId, `/dashboard/${patientId}`)
          } catch (e) {
            console.warn('updateSupplementFulfillmentStatus.portal_link', e)
          }

          const email = buildSupplementFulfillmentEmail(nextStatus, {
            patientId,
            email: patient.email,
            firstName: patient.first_name,
            patientPortalUrl,
            trackingNumber: trackingNumber || null,
            trackingUrl: trackingUrl || null,
          })
          const sent = await sendTransactionalEmail({
            to: patient.email,
            subject: email.subject,
            html: email.html,
            text: email.text,
          })
          if (sent.ok) {
            const { error: dErr } = await admin.from('patient_notification_deliveries').insert({
              patient_id: patientId,
              channel: 'email',
              dedupe_key: dedupeKey,
              template_key: `supplement_${nextStatus}`,
              provider_message_id: sent.id,
            })
            if (dErr) console.error('updateSupplementFulfillmentStatus.notification_insert', dErr)
          } else if (!('skipped' in sent && sent.skipped)) {
            console.error('updateSupplementFulfillmentStatus.email', sent.error)
          }
        }
      }
    } catch (err) {
      console.error('updateSupplementFulfillmentStatus.notify', err)
    }
  }

  await logAuditEvent({
    actorUserId: user.id,
    action: 'supplement_fulfillment_order.status_updated',
    resourceType: 'supplement_fulfillment_order',
    resourceId: order.id,
    patientId,
    metadata: {
      from_status: order.status,
      to_status: nextStatus,
      tracking_number: trackingNumber || null,
      tracking_url: trackingUrl || null,
      note: staffNote || null,
    },
  })

  try {
    const admin = createAdminClient()
    await enqueueChartAiReview(admin, {
      patientId,
      triggerEventType: 'supplement_fulfillment_status_updated',
      triggerRef: order.id,
    })
  } catch (e) {
    console.error('updateSupplementFulfillmentStatus.ai_review_enqueue', e)
  }

  revalidatePath(`/internal/patients/${patientId}`)
  return { ok: true }
}

function isSupportRequestAction(value: string): value is SupportRequestAction {
  return value === 'acknowledged' || value === 'call_completed' || value === 'resolved'
}

function isSupportEventType(value: string): value is SupportEventType {
  return value === 'patient_message_submitted' || value === 'patient_callback_requested'
}

function supportAllowedNext(eventType: SupportEventType, current: SupportRequestStatus): SupportRequestAction[] {
  if (current === 'resolved') return []
  if (eventType === 'patient_message_submitted') {
    if (current === 'new') return ['acknowledged', 'resolved']
    if (current === 'acknowledged') return ['resolved']
    return ['resolved']
  }
  if (current === 'new') return ['acknowledged', 'call_completed', 'resolved']
  if (current === 'acknowledged') return ['call_completed', 'resolved']
  if (current === 'call_completed') return ['resolved']
  return []
}

function supportActionLabel(action: SupportRequestAction): string {
  switch (action) {
    case 'acknowledged':
      return 'Acknowledged'
    case 'call_completed':
      return 'Call completed'
    case 'resolved':
      return 'Resolved'
    default:
      return action
  }
}

const SUPPORT_WORKFLOW_PAYLOAD_KEYS = [
  'support_status',
  'support_status_history',
  'support_last_action',
  'support_last_action_at',
  'support_last_action_by',
  'support_last_note',
] as const

function supportPortalPayloadStrip(payload: Record<string, unknown>): Record<string, unknown> {
  const next: Record<string, unknown> = { ...payload }
  for (const k of SUPPORT_WORKFLOW_PAYLOAD_KEYS) delete next[k]
  return next
}

function normalizeSupportRequestStatusRaw(raw: string | undefined): SupportRequestStatus {
  if (raw === 'new' || raw === 'acknowledged' || raw === 'call_completed' || raw === 'resolved') return raw
  return 'new'
}

function supportStatusFromTimelinePayload(payload: Record<string, unknown>): SupportRequestStatus {
  const currentStatusRaw = typeof payload.support_status === 'string' ? payload.support_status : 'new'
  return normalizeSupportRequestStatusRaw(currentStatusRaw)
}

export async function updatePatientSupportRequestStatus(
  patientId: string,
  timelineEventId: string,
  actionRaw: string,
  staffNoteRaw?: string
): Promise<UpdatePatientSupportRequestStatusResult> {
  const action = actionRaw.trim()
  const staffNote = (staffNoteRaw ?? '').trim()
  if (!isSupportRequestAction(action)) return { ok: false, error: 'Invalid support request action.' }
  if (staffNote.length > MAX_NOTE) return { ok: false, error: `Note must be ${MAX_NOTE} characters or less.` }

  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const { data: ev, error: evErr } = await supabase
    .from('patient_timeline_events')
    .select('id, patient_id, event_type, body, payload')
    .eq('id', timelineEventId)
    .maybeSingle()
  if (evErr || !ev) return { ok: false, error: 'Support request event not found.' }
  if (ev.patient_id !== patientId) return { ok: false, error: 'Event does not match patient.' }
  if (!isSupportEventType(ev.event_type)) return { ok: false, error: 'Event is not a support request.' }

  const payload = ((ev.payload as Record<string, unknown>) ?? {}) as Record<string, unknown>

  const { data: opRow, error: opSelErr } = await supabase
    .from('patient_support_requests')
    .select('id, status, status_history')
    .eq('source_timeline_event_id', timelineEventId)
    .maybeSingle()

  const opsTableMissing = Boolean(opSelErr && isMissingRelationError(opSelErr))
  if (opSelErr && !opsTableMissing) {
    console.error('updatePatientSupportRequestStatus.ops_select', opSelErr)
    return { ok: false, error: 'Could not load support request.' }
  }

  let opFresh: { id: string; status: string; status_history: unknown } | null = opRow
  if (!opsTableMissing && !opFresh) {
    const initialStatus = supportStatusFromTimelinePayload(payload)
    const initialHistory = Array.isArray(payload.support_status_history)
      ? (payload.support_status_history as unknown[])
      : []
    const lastAtRaw = typeof payload.support_last_action_at === 'string' ? payload.support_last_action_at : null
    const lastByRaw = typeof payload.support_last_action_by === 'string' ? payload.support_last_action_by : null
    const { error: lazyErr } = await supabase.from('patient_support_requests').insert({
      patient_id: patientId,
      source_timeline_event_id: timelineEventId,
      request_kind: ev.event_type === 'patient_callback_requested' ? 'callback' : 'message',
      status: initialStatus,
      portal_payload: supportPortalPayloadStrip(payload),
      status_history: initialHistory,
      last_staff_note: typeof payload.support_last_note === 'string' ? payload.support_last_note : null,
      last_action_at: lastAtRaw,
      last_action_by_staff_id:
        lastByRaw && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(lastByRaw) ? lastByRaw : null,
    })
    if (lazyErr) {
      console.error('updatePatientSupportRequestStatus.ops_lazy_insert', lazyErr)
      return { ok: false, error: 'Could not sync support request record.' }
    }
    const { data: reloaded, error: reloadErr } = await supabase
      .from('patient_support_requests')
      .select('id, status, status_history')
      .eq('source_timeline_event_id', timelineEventId)
      .maybeSingle()
    if (reloadErr || !reloaded) {
      console.error('updatePatientSupportRequestStatus.ops_reload', reloadErr)
      return { ok: false, error: 'Could not load support request.' }
    }
    opFresh = reloaded
  }

  const currentStatus: SupportRequestStatus = opsTableMissing
    ? supportStatusFromTimelinePayload(payload)
    : normalizeSupportRequestStatusRaw(String(opFresh?.status ?? 'new'))

  const allowed = supportAllowedNext(ev.event_type, currentStatus)
  if (!allowed.includes(action)) {
    return {
      ok: false,
      error:
        allowed.length > 0
          ? `Action not allowed. Next allowed: ${allowed.map((a) => supportActionLabel(a)).join(', ')}.`
          : 'Support request is already resolved.',
    }
  }

  const atIso = new Date().toISOString()
  const historyEntry = {
    from_status: currentStatus,
    to_status: action,
    by_user_id: user.id,
    note: staffNote || null,
    at: atIso,
  }

  if (opsTableMissing) {
    const statusHistory = Array.isArray(payload.support_status_history) ? (payload.support_status_history as unknown[]) : []
    const nextPayload: Record<string, unknown> = {
      ...payload,
      support_status: action,
      support_last_action: action,
      support_last_action_at: atIso,
      support_last_action_by: user.id,
      support_last_note: staffNote || null,
      support_status_history: [...statusHistory, historyEntry],
    }
    const { error: updErr } = await supabase.from('patient_timeline_events').update({ payload: nextPayload }).eq('id', timelineEventId)
    if (updErr) {
      console.error('updatePatientSupportRequestStatus.update_event', updErr)
      return { ok: false, error: 'Could not update support request status.' }
    }
  } else if (opFresh) {
    const prior = Array.isArray(opFresh.status_history) ? (opFresh.status_history as unknown[]) : []
    const { error: updErr } = await supabase
      .from('patient_support_requests')
      .update({
        status: action,
        status_history: [...prior, historyEntry],
        last_staff_note: staffNote || null,
        last_action_at: atIso,
        last_action_by_staff_id: user.id,
      })
      .eq('id', opFresh.id)
    if (updErr) {
      console.error('updatePatientSupportRequestStatus.ops_update', updErr)
      return { ok: false, error: 'Could not update support request status.' }
    }
  }

  const sourceLabel = ev.event_type === 'patient_callback_requested' ? 'Patient callback request' : 'Patient message'
  const actionLabel = supportActionLabel(action)
  const noteSuffix = staffNote ? `\nNote: ${staffNote}` : ''
  const timelineBody = `${sourceLabel} marked ${actionLabel.toLowerCase()}.${noteSuffix}`
  const { error: insErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    event_type: 'support_request_status_updated',
    body: timelineBody,
    actor_user_id: user.id,
    payload: {
      support_source_event_id: timelineEventId,
      support_source_event_type: ev.event_type,
      from_status: currentStatus,
      to_status: action,
      staff_note: staffNote || null,
    },
  })
  if (insErr) console.error('updatePatientSupportRequestStatus.timeline', insErr)

  if (action === 'call_completed' && ev.event_type === 'patient_callback_requested') {
    try {
      const admin = createAdminClient()
      const dedupeKey = `email:support_callback_completed:${timelineEventId}`
      const { data: existing } = await admin
        .from('patient_notification_deliveries')
        .select('id')
        .eq('dedupe_key', dedupeKey)
        .eq('channel', 'email')
        .maybeSingle()

      if (!existing) {
        const { data: patient } = await admin
          .from('patients')
          .select('id, email, first_name')
          .eq('id', patientId)
          .maybeSingle()
        if (patient?.email) {
          let patientPortalUrl: string | null = null
          try {
            patientPortalUrl = await buildPatientPortalExchangeUrl(patientId, `/dashboard/${patientId}`)
          } catch (e) {
            console.warn('updatePatientSupportRequestStatus.portal_link', e)
          }

          const email = buildPatientCallbackCompletedEmail({
            patientId,
            email: patient.email,
            firstName: patient.first_name,
            patientPortalUrl,
          })
          await enqueueOutboundJob(admin, OUTBOUND_JOB_TYPES.emailTransactional, {
            patient_id: patientId,
            dedupe_key: dedupeKey,
            template_key: 'support_callback_completed',
            to: patient.email,
            subject: email.subject,
            html: email.html,
            text: email.text,
            insert_timeline_email_sent: false,
          })
        }
      }
    } catch (err) {
      console.error('updatePatientSupportRequestStatus.notify', err)
    }
  }

  await logAuditEvent({
    actorUserId: user.id,
    action: 'patient_support_request.status_updated',
    resourceType: 'patient_timeline_event',
    resourceId: timelineEventId,
    patientId,
    metadata: {
      source_event_type: ev.event_type,
      from_status: currentStatus,
      to_status: action,
      staff_note: staffNote || null,
    },
  })

  try {
    const admin = createAdminClient()
    await enqueueChartAiReview(admin, {
      patientId,
      triggerEventType: 'support_request_status_updated',
      triggerRef: timelineEventId,
    })
  } catch (e) {
    console.error('updatePatientSupportRequestStatus.ai_review_enqueue', e)
  }

  revalidatePath(`/internal/patients/${patientId}`)
  return { ok: true }
}
