import type { PatientWorkflowEvent } from './types'

export type NotificationChannel = 'email' | 'sms'

/**
 * One key per email template (copy lives in `lib/notifications/patientMessages.ts`).
 * Add a key here → add `buildPatientEmail` / SMS preview cases → map status below.
 */
export type NotificationTemplateKey =
  | 'payment_received'
  | 'intake_submitted'
  | 'awaiting_clinical_review'
  | 'case_approved'
  | 'case_denied'
  | 'followup_needed'
  | 'rx_sent'
  | 'shipped'
  | 'active_care'
  | 'followup_due'
  | 'refill_pending'

export type ResolvedPatientNotification = {
  channel: NotificationChannel
  templateKey: NotificationTemplateKey
  /** Globally unique per channel for idempotent sends (Stripe retries, double-clicks). */
  dedupeKey: string
}

/** Staff moves patient into this status → patient gets email + SMS row (SMS sends when Twilio is wired). */
const PATIENT_NOTIFY_BY_STATUS: Partial<Record<string, NotificationTemplateKey>> = {
  intake_submitted: 'intake_submitted',
  under_review: 'awaiting_clinical_review',
  pending_approval: 'awaiting_clinical_review',
  approved: 'case_approved',
  denied: 'case_denied',
  paused: 'followup_needed',
  completed: 'followup_needed',
  cancelled: 'followup_needed',
  stopped: 'followup_needed',
  rx_sent: 'rx_sent',
  shipped: 'shipped',
  active: 'active_care',
  refill_due: 'followup_due',
  refill_pending: 'refill_pending',
}

function transitionDedupe(channel: NotificationChannel, templateKey: string, patientId: string, from: string | null, to: string): string {
  return `${channel}:${templateKey}:${patientId}:${from ?? 'null'}->${to}`
}

/**
 * Declarative map: which outbound notifications fire when entering `toWorkflowStatus`.
 * Payment uses Stripe session id for dedupe; everything else uses from→to per patient.
 *
 * Program and treatment statuses are canonical (`care_programs.status`, `treatment_items.status`).
 */
export function resolvePatientNotifications(ev: PatientWorkflowEvent): ResolvedPatientNotification[] {
  if (ev.fromWorkflowStatus === ev.toWorkflowStatus) return []

  const { patientId, fromWorkflowStatus, toWorkflowStatus, stripeCheckoutSessionId } = ev
  const out: ResolvedPatientNotification[] = []

  if (toWorkflowStatus === 'payment_completed') {
    const sid = stripeCheckoutSessionId?.trim() || `patient:${patientId}:payment`
    out.push({
      channel: 'email',
      templateKey: 'payment_received',
      dedupeKey: `email:payment_received:${sid}`,
    })
    out.push({
      channel: 'sms',
      templateKey: 'payment_received',
      dedupeKey: `sms:payment_received:${sid}`,
    })
    return out
  }

  const templateKey = PATIENT_NOTIFY_BY_STATUS[toWorkflowStatus]
  if (!templateKey) return out

  const emailDedupe = transitionDedupe('email', templateKey, patientId, fromWorkflowStatus, toWorkflowStatus)
  const smsDedupe = transitionDedupe('sms', templateKey, patientId, fromWorkflowStatus, toWorkflowStatus)

  out.push({ channel: 'email', templateKey, dedupeKey: emailDedupe })
  out.push({ channel: 'sms', templateKey, dedupeKey: smsDedupe })

  return out
}
