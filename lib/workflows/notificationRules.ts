import type { PatientWorkflowEvent } from './types'

export type NotificationChannel = 'email' | 'sms'

/**
 * One key per email template (copy lives in `lib/notifications/patientMessages.ts`).
 * Add a key here → add `buildPatientEmail` / SMS preview cases → map status below.
 *
 * Phase 4H-pre commit 5 — `payment_received` removed; migrated to typed
 * Rule + Template at `repo/rules/billing/payment_received_v1.ts` +
 * `repo/templates/billing/payment_received_v1.ts` per Section 1Q.12
 * DELETE-AFTER-PARITY directive. New patient-facing notifications MUST
 * NOT extend this union; per the cutover discipline, each remaining
 * NotificationTemplateKey case migrates per-PR to a typed Rule +
 * Template, and the legacy case deletes in the same PR. When the last
 * case is removed, this file deletes entirely.
 */
export type NotificationTemplateKey =
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

  const { patientId, fromWorkflowStatus, toWorkflowStatus } = ev
  const out: ResolvedPatientNotification[] = []

  // Phase 4H-pre commit 5 — the legacy `payment_completed` special-case
  // branch that resolved 'payment_received' for email + SMS has been
  // deleted. The typed Rule at `repo/rules/billing/payment_received_v1.ts`
  // is now the sole producer of payment_received notifications, fired
  // directly from `lib/payments/handleStripeCheckoutCompleted.ts` via
  // the dispatcher at `lib/rules/runtime/dispatcher.ts`. For
  // `toWorkflowStatus === 'payment_completed'`, the rules engine handles
  // the notification side effect; this function returns no notifications
  // for that status.

  const templateKey = PATIENT_NOTIFY_BY_STATUS[toWorkflowStatus]
  if (!templateKey) return out

  const emailDedupe = transitionDedupe('email', templateKey, patientId, fromWorkflowStatus, toWorkflowStatus)
  const smsDedupe = transitionDedupe('sms', templateKey, patientId, fromWorkflowStatus, toWorkflowStatus)

  out.push({ channel: 'email', templateKey, dedupeKey: emailDedupe })
  out.push({ channel: 'sms', templateKey, dedupeKey: smsDedupe })

  return out
}
