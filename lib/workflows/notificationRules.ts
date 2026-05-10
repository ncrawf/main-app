import type { PatientWorkflowEvent } from './types'

export type NotificationChannel = 'email' | 'sms'

/**
 * One key per email template (copy lives in `lib/notifications/patientMessages.ts`).
 * Add a key here → add `buildPatientEmail` / SMS preview cases → map status below.
 *
 * Phase 4H-pre commit 5 — `payment_received` removed; migrated to typed
 * Rule + Template at `repo/rules/billing/payment_received_v1.ts` +
 * `repo/templates/billing/payment_received_v1.ts` per Section 1Q.12
 * DELETE-AFTER-PARITY directive.
 *
 * Phase 4H-templates-discipline commit 1 — `intake_submitted` removed;
 * migrated to typed Rule + Template at
 * `repo/rules/account_lifecycle/intake_submitted_v1.ts` +
 * `repo/templates/account_lifecycle/intake_submitted_v1.ts`.
 *
 * New patient-facing notifications MUST NOT extend this union; per the
 * cutover discipline, each remaining NotificationTemplateKey case
 * migrates per-PR to a typed Rule + Template, and the legacy case
 * deletes in the same PR. When the last case is removed, this file
 * deletes entirely.
 */
export type NotificationTemplateKey =
  | 'case_denied'
  | 'followup_needed'
  | 'rx_sent'
  | 'refill_pending'

export type ResolvedPatientNotification = {
  channel: NotificationChannel
  templateKey: NotificationTemplateKey
  /** Globally unique per channel for idempotent sends (Stripe retries, double-clicks). */
  dedupeKey: string
}

/** Staff moves patient into this status → patient gets email + SMS row (SMS sends when Twilio is wired). */
const PATIENT_NOTIFY_BY_STATUS: Partial<Record<string, NotificationTemplateKey>> = {
  // Phase 4H-templates-discipline commit 1 — `intake_submitted: 'intake_submitted'`
  // removed. The typed Rule at repo/rules/account_lifecycle/intake_submitted_v1.ts
  // is now the sole producer of intake_submitted notifications, fired from
  // lib/protocol/derive.ts deriveCanonicalState via the dispatcher.
  // Phase 4H-templates-discipline c3 — BOTH `under_review:` and
  // `pending_approval:` map entries removed (both used to point at
  // 'awaiting_clinical_review'). The typed Rule at
  // repo/rules/clinical_decision/awaiting_clinical_review_v1.ts is now
  // the sole producer of those notifications, fired from
  // lib/internal/patient-case/impl.ts via the dispatcher's 2-status
  // OR producer gate.
  // Phase 4H-templates-discipline c2 — `approved: 'case_approved'` removed.
  // The typed Rule at repo/rules/clinical_decision/case_approved_v1.ts is
  // now the sole producer of case_approved notifications, fired from
  // lib/internal/patient-case/impl.ts (updateTreatmentItemStatus +
  // updateCareProgramStatus) via the dispatcher.
  // Phase 4H-templates-discipline c4 — `shipped: 'shipped'` removed. The
  // typed Rule at repo/rules/fulfillment_lifecycle/order_shipped_v1.ts
  // is now the sole producer of shipped notifications, fired from
  // lib/internal/patient-case/impl.ts via the dispatcher. FIRST sibling-
  // domain expansion since the registry was scaffolded; per system-map
  // `## Platform operational model` doctrine, fulfillment is a first-
  // class sibling under Patient (not a sub-shape of clinical_decision).
  // Phase 4H-templates-discipline c5 — `active: 'active_care'` removed.
  // The typed Rule at repo/rules/clinical_decision/active_care_v1.ts
  // is now the sole producer of active_care notifications, fired from
  // lib/internal/patient-case/impl.ts (updateTreatmentItemStatus +
  // updateCareProgramStatus) via the dispatcher.
  // Phase 4H-templates-discipline c6 — `refill_due: 'followup_due'`
  // removed. The typed Rule at
  // repo/rules/clinical_decision/followup_due_v1.ts is now the sole
  // producer of followup_due notifications, fired from
  // lib/internal/patient-case/impl.ts updateTreatmentItemStatus on
  // transition to 'refill_due' via the dispatcher.
  denied: 'case_denied',
  paused: 'followup_needed',
  completed: 'followup_needed',
  cancelled: 'followup_needed',
  stopped: 'followup_needed',
  rx_sent: 'rx_sent',
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
