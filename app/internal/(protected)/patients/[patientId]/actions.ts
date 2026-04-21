'use server'

import type { NotificationTemplateKey } from '@/lib/workflows/notificationRules'
import * as patientCase from '@/lib/internal/patient-case/impl'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { getStaffProfile } from '@/lib/staff/getStaffProfile'
import { parseActionPlanTasksFromPayload } from '@/lib/pathways/decisionContract'
import { allowedNextRefillRequestStatuses, isValidRefillRequestStatus } from '@/lib/refill/refillRequestTransitions'
import { revalidatePath } from 'next/cache'

export type {
  AddStaffNoteResult,
  AddCatalogTreatmentResult,
  ApplyCaseResult,
  CreateClinicalVisitAddendumResult,
  CreateClinicalVisitNoteResult,
  CreateLabOrderResult,
  GenerateRxPdfResult,
  MarkLabOrderDispatchedResult,
  PreparePharmacyDispatchResult,
  PublishClinicalVisitPdfResult,
  RequestRefillForTreatmentItemResult,
  RequestRefillsBulkResult,
  SendTemplateTestResult,
  UpdateCareProgramStatusResult,
  UpdatePatientSupportRequestStatusResult,
  UpdateRefillRequestStatusResult,
  UpdateSupplementFulfillmentStatusResult,
  UpdateTreatmentItemStatusResult,
} from '@/lib/internal/patient-case/impl'

export type ReviewChartAiDraftResult = { ok: true } | { ok: false; error: string }

type RefillTaskTargetRow = {
  id: string
  status: string
  treatment_item_id: string
  created_at: string
}

async function resolveTaskTargets(
  supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>,
  patientId: string,
  allowedActions: string[]
): Promise<{ refillRequestId: string | null; treatmentItemId: string | null }> {
  const needsRefillTarget =
    allowedActions.includes('refill_approved') || allowedActions.includes('refill_fulfilled')
  const needsTreatmentTarget = allowedActions.includes('treatment_activated')

  let refillRows: RefillTaskTargetRow[] = []
  if (needsRefillTarget) {
    const { data } = await supabase
      .from('refill_requests')
      .select('id, status, treatment_item_id, created_at')
      .eq('patient_id', patientId)
      .order('created_at', { ascending: false })
      .limit(25)
    refillRows = (data ?? []) as RefillTaskTargetRow[]
  }

  const nextRefillStatus =
    allowedActions.includes('refill_fulfilled')
      ? 'fulfilled'
      : allowedActions.includes('refill_approved')
        ? 'approved'
        : null

  let refillTarget: RefillTaskTargetRow | null = null
  if (nextRefillStatus) {
    refillTarget =
      refillRows.find((row) => {
        if (!isValidRefillRequestStatus(row.status)) return false
        return allowedNextRefillRequestStatuses(row.status).includes(nextRefillStatus)
      }) ?? null
  }

  if (needsTreatmentTarget) {
    if (refillTarget?.treatment_item_id) {
      return {
        refillRequestId: refillTarget.id,
        treatmentItemId: refillTarget.treatment_item_id,
      }
    }
    const { data: treatmentRows } = await supabase
      .from('treatment_items')
      .select('id, status, updated_at')
      .eq('patient_id', patientId)
      .order('updated_at', { ascending: false })
      .limit(25)
    const treatmentTarget =
      (treatmentRows as Array<{ id: string; status: string; updated_at: string }> | null)?.find(
        (row) => row.status === 'refill_pending' || row.status === 'approved'
      ) ??
      (treatmentRows as Array<{ id: string; status: string; updated_at: string }> | null)?.[0] ??
      null
    return {
      refillRequestId: refillTarget?.id ?? null,
      treatmentItemId: treatmentTarget?.id ?? null,
    }
  }

  return {
    refillRequestId: refillTarget?.id ?? null,
    treatmentItemId: refillTarget?.treatment_item_id ?? null,
  }
}

export async function addStaffNote(patientId: string, rawText: string) {
  return patientCase.addStaffNote(patientId, rawText)
}

export async function applyCaseUpdates(patientId: string, nextAssignedTo: string | null) {
  return patientCase.applyCaseUpdates(patientId, nextAssignedTo)
}

export async function sendTemplateTestEmail(patientId: string, templateKey: NotificationTemplateKey) {
  return patientCase.sendTemplateTestEmail(patientId, templateKey)
}

export async function updateTreatmentItemStatus(patientId: string, treatmentItemId: string, nextStatus: string) {
  return patientCase.updateTreatmentItemStatus(patientId, treatmentItemId, nextStatus)
}

export async function updateCareProgramStatus(patientId: string, careProgramId: string, nextStatus: string) {
  return patientCase.updateCareProgramStatus(patientId, careProgramId, nextStatus)
}

export async function requestRefillForTreatmentItem(patientId: string, treatmentItemId: string, rawNote?: string) {
  return patientCase.requestRefillForTreatmentItem(patientId, treatmentItemId, rawNote)
}

export async function requestRefillsForTreatmentItemsBulk(
  patientId: string,
  treatmentItemIds: string[],
  rawSharedNote?: string
) {
  return patientCase.requestRefillsForTreatmentItemsBulk(patientId, treatmentItemIds, rawSharedNote)
}

export async function updateRefillRequestStatus(
  patientId: string,
  refillRequestId: string,
  nextStatus: string,
  rawStaffNote?: string
) {
  return patientCase.updateRefillRequestStatus(patientId, refillRequestId, nextStatus, rawStaffNote)
}

export async function addCatalogTreatmentItem(patientId: string, formData: FormData) {
  return patientCase.addCatalogTreatmentItem(patientId, formData)
}

export async function createAndPublishLabOrder(
  patientId: string,
  input: Parameters<typeof patientCase.createAndPublishLabOrder>[1]
) {
  return patientCase.createAndPublishLabOrder(patientId, input)
}

export async function createClinicalVisitNote(
  patientId: string,
  input: Parameters<typeof patientCase.createClinicalVisitNote>[1]
) {
  return patientCase.createClinicalVisitNote(patientId, input)
}

export async function publishClinicalVisitPdf(
  patientId: string,
  clinicalVisitId: string,
  notifyPatientByEmail = true
) {
  return patientCase.publishClinicalVisitPdf(patientId, clinicalVisitId, notifyPatientByEmail)
}

export async function createClinicalVisitAddendum(
  patientId: string,
  clinicalVisitId: string,
  rawAddendumText: string
) {
  return patientCase.createClinicalVisitAddendum(patientId, clinicalVisitId, rawAddendumText)
}

export async function markLabOrderDispatched(
  patientId: string,
  labOrderId: string,
  dispatchModeRaw: string,
  destinationRaw?: string,
  noteRaw?: string
) {
  return patientCase.markLabOrderDispatched(patientId, labOrderId, dispatchModeRaw, destinationRaw, noteRaw)
}

export async function generateRxPdfForTreatment(patientId: string, treatmentItemId: string) {
  return patientCase.generateRxPdfForTreatment(patientId, treatmentItemId)
}

export async function prepareTreatmentForPharmacyDispatch(
  patientId: string,
  treatmentItemId: string,
  rawPartnerNote?: string
) {
  return patientCase.prepareTreatmentForPharmacyDispatch(patientId, treatmentItemId, rawPartnerNote)
}

export async function updateSupplementFulfillmentStatus(
  patientId: string,
  fulfillmentOrderId: string,
  nextStatusRaw: string,
  trackingNumberRaw?: string,
  trackingUrlRaw?: string,
  staffNoteRaw?: string
) {
  return patientCase.updateSupplementFulfillmentStatus(
    patientId,
    fulfillmentOrderId,
    nextStatusRaw,
    trackingNumberRaw,
    trackingUrlRaw,
    staffNoteRaw
  )
}

export async function updatePatientSupportRequestStatus(
  patientId: string,
  timelineEventId: string,
  actionRaw: string,
  staffNoteRaw?: string
) {
  return patientCase.updatePatientSupportRequestStatus(patientId, timelineEventId, actionRaw, staffNoteRaw)
}

export async function reviewChartAiDraft(
  patientId: string,
  reviewId: string,
  decision: 'reviewed_accepted' | 'reviewed_rejected',
  reviewNoteRaw?: string
): Promise<ReviewChartAiDraftResult> {
  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Not signed in.' }

  const profile = await getStaffProfile(supabase, user.id)
  if (!profile) return { ok: false, error: 'No staff profile.' }

  const reviewNote = (reviewNoteRaw ?? '').trim().slice(0, 4000)
  const { data: reviewRow, error: reviewLookupErr } = await supabase
    .from('patient_chart_ai_reviews')
    .select('id, output_payload, status')
    .eq('id', reviewId)
    .eq('patient_id', patientId)
    .maybeSingle()
  if (reviewLookupErr || !reviewRow) {
    return { ok: false, error: 'AI review not found.' }
  }
  if (reviewRow.status !== 'draft') {
    return { ok: false, error: 'AI review is no longer in draft status.' }
  }

  const { error } = await supabase
    .from('patient_chart_ai_reviews')
    .update({
      status: decision,
      reviewed_by_staff_id: user.id,
      reviewed_at: new Date().toISOString(),
      review_note: reviewNote.length > 0 ? reviewNote : null,
    })
    .eq('id', reviewId)
    .eq('patient_id', patientId)
    .eq('status', 'draft')

  if (error) {
    console.error('reviewChartAiDraft', error)
    return { ok: false, error: 'Could not update AI review.' }
  }

  if (decision === 'reviewed_accepted') {
    const actionPlanTasks = parseActionPlanTasksFromPayload(reviewRow.output_payload)
    if (actionPlanTasks.length > 0) {
      const taskRows = await Promise.all(
        actionPlanTasks.map(async (task) => {
          const targets = await resolveTaskTargets(supabase, patientId, task.allowed_completion_actions)
          return {
            patient_id: patientId,
            event_type: 'clinical_action_task_created',
            body: `Action required: ${task.title}`,
            actor_user_id: user.id,
            payload: {
              source: 'chart_ai_action_plan',
              review_id: reviewId,
              task_id: task.task_id,
              task_title: task.title,
              task_reason: task.reason,
              required_owner: task.required_owner,
              required_due_state: task.required_due_state,
              allowed_completion_actions: task.allowed_completion_actions,
              refill_request_id: targets.refillRequestId,
              treatment_item_id: targets.treatmentItemId,
              task_status: 'open',
            },
          }
        })
      )
      const { error: taskErr } = await supabase.from('patient_timeline_events').insert(taskRows)
      if (taskErr) {
        console.error('reviewChartAiDraft.taskRows', taskErr)
      }
    }

    const { error: supersedeErr } = await supabase
      .from('patient_chart_ai_reviews')
      .update({ status: 'superseded' })
      .eq('patient_id', patientId)
      .eq('status', 'reviewed_accepted')
      .neq('id', reviewId)
    if (supersedeErr) {
      console.error('reviewChartAiDraft.supersede', supersedeErr)
    }
  }

  revalidatePath(`/internal/patients/${patientId}`)
  revalidatePath(`/dashboard/${patientId}`)
  return { ok: true }
}
