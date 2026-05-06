/**
 * Phase 4F — canonical `patient_timeline_events.event_type` registry per
 * Section 1H (analytics / read-models) + 1H.5 (event-spine boundary) +
 * system primitives addendum #6 (enum-as-code-as-config).
 *
 * Distinction from `audit_events.action`:
 *   - `audit_events` is the staff/system traceability spine (per 1H.5).
 *   - `patient_timeline_events` is the patient-facing memory projection
 *     (per 1H). Values here are about what HAPPENED to the patient, not
 *     who-did-what for compliance.
 *
 * Some events legitimately fire to BOTH tables (e.g. capability.exercised
 * → patient_timeline_events.staff_capability_exercised + audit_events.
 * capability.exercised). That's intentional dual-write per Section 1D
 * comment in `lib/auth/capabilities.ts`.
 *
 * Adding a new event_type: append to the right group below, then run
 * `npx tsx scripts/test-events-registry.ts` and `npx tsx scripts/lint-event-types.ts`.
 *
 * Never rename or delete an entry that has shipped — append `__deprecated`
 * suffix instead so historical timeline rows still parse.
 */

import { z } from 'zod'

/**
 * Generic staff annotations — written by ops and provider users via
 * the patient case workspace.
 */
export const STAFF_ANNOTATION_TIMELINE_TYPES = [
  'assignee_changed',
  'email_preview_sent',
  'staff_capability_exercised',
  'staff_note',
] as const

/**
 * Treatment + care program lifecycle (Section 1G care-tier).
 */
export const TREATMENT_LIFECYCLE_TIMELINE_TYPES = [
  'catalog_treatment_prescribed',
  'pharmacy_dispatch_prepared',
  'program_status_changed',
  'rx_pdf_generated',
  'treatment_status_changed',
] as const

/**
 * Order lifecycle — Rx fulfillment (treatment_orders), supplements,
 * and lab kit shipping per Section 1G.6 + 1L.
 */
export const ORDER_LIFECYCLE_TIMELINE_TYPES = [
  'lab_kit_fulfillment_status_changed',
  'lab_kit_fulfillment_updated',
  'supplement_fulfillment_status_changed',
  'supplement_order_fulfillment_updated',
  'supplement_order_status_changed',
  'treatment_order_approved',
  'treatment_order_charged',
  'treatment_order_denied',
  'treatment_order_fulfillment_updated',
  'treatment_order_payment_failed',
  'treatment_order_status_changed',
] as const

/**
 * Clinical events — visits, lab orders, document uploads (Section 1L + 1O).
 */
export const CLINICAL_TIMELINE_TYPES = [
  'clinical_action_task_completed',
  'clinical_action_task_created',
  'clinical_visit_addendum_created',
  'clinical_visit_documented',
  'clinical_visit_pdf_published',
  'lab_order_dispatch_updated',
  'lab_order_published',
  'patient_document_uploaded',
] as const

/**
 * Patient-portal interactions — what the patient did from their dashboard
 * (Section 1G.3 messaging + check-ins).
 */
export const PATIENT_PORTAL_TIMELINE_TYPES = [
  'patient_callback_requested',
  'patient_message_submitted',
  'patient_treatment_checkin_reviewed',
  'patient_treatment_checkin_submitted',
] as const

/**
 * Refill flow — patient + staff initiated.
 */
export const REFILL_TIMELINE_TYPES = [
  'refill_request_status_changed',
  'refill_requested',
] as const

/**
 * Commerce + payment — Stripe-backed, `commerce_history` derived view
 * read-source. Patient sees these on receipts surface.
 */
export const COMMERCE_TIMELINE_TYPES = [
  'payment_method_added',
  'stripe_checkout_completed',
  'supplement_purchase_recorded',
] as const

/**
 * Outbound notification dispatch records — written by
 * `lib/jobs/dispatchOutboundJob.ts` after a successful send.
 */
export const NOTIFICATION_DISPATCH_TIMELINE_TYPES = [
  'email_sent',
  'sms_sent',
] as const

/**
 * Support request lifecycle (1G.5 exception handling surface).
 */
export const SUPPORT_TIMELINE_TYPES = [
  'support_request_status_updated',
] as const

/**
 * Single ordered union for runtime validation, Zod enum, and CI lint.
 */
export const TIMELINE_EVENT_TYPES = [
  ...STAFF_ANNOTATION_TIMELINE_TYPES,
  ...TREATMENT_LIFECYCLE_TIMELINE_TYPES,
  ...ORDER_LIFECYCLE_TIMELINE_TYPES,
  ...CLINICAL_TIMELINE_TYPES,
  ...PATIENT_PORTAL_TIMELINE_TYPES,
  ...REFILL_TIMELINE_TYPES,
  ...COMMERCE_TIMELINE_TYPES,
  ...NOTIFICATION_DISPATCH_TIMELINE_TYPES,
  ...SUPPORT_TIMELINE_TYPES,
] as const

export type TimelineEventType = (typeof TIMELINE_EVENT_TYPES)[number]

export const TimelineEventTypeSchema = z.enum(TIMELINE_EVENT_TYPES)

const TIMELINE_EVENT_TYPE_SET: ReadonlySet<string> = new Set<string>(TIMELINE_EVENT_TYPES)

export function isKnownTimelineEventType(value: string): value is TimelineEventType {
  return TIMELINE_EVENT_TYPE_SET.has(value)
}

export function assertKnownTimelineEventType(value: string): asserts value is TimelineEventType {
  if (!TIMELINE_EVENT_TYPE_SET.has(value)) {
    throw new Error(
      `Unknown patient_timeline_events.event_type "${value}". Register it in lib/events/timeline-event-types.ts before writing.`,
    )
  }
}
