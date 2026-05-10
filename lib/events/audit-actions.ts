/**
 * Phase 4F — canonical `audit_events.action` registry per Section 1H.5 + 1Q.7
 * + system primitives addendum #6 (enum-as-code-as-config).
 *
 * Every value written to `audit_events.action` MUST exist here. CI lint
 * (`scripts/lint-event-types.ts`) refuses inline string literals at write
 * sites — call sites pass `AUDIT_ACTIONS.x` or use `insertAuditEvent` from
 * `lib/events/index.ts` which is statically typed against this catalog.
 *
 * Adding a new action: add it under the right domain group below, then run
 * `npx tsx scripts/test-events-registry.ts` and `npx tsx scripts/lint-event-types.ts`.
 *
 * Domain grouping mirrors the Sections of the system map. Keep alphabetical
 * within each group so diffs are reviewable. Never delete an entry that has
 * shipped to production — append `__deprecated` suffix instead so the
 * historical audit trail still parses.
 */

import { z } from 'zod'

/**
 * Phase 4A intake runtime + commerce decisions per Section 1K.0.5.11 +
 * 1K.19.9. Locked since Phase 3; the orchestrator emits these inside
 * `record_intake_emissions_batch`.
 *
 * Source-of-truth mirror: `lib/intake/events.ts` `INTAKE_EVENT_ACTIONS`.
 * The two arrays MUST stay in sync — verified by
 * `scripts/test-events-registry.ts`.
 */
export const INTAKE_AUDIT_ACTIONS = [
  'commerce.checkout_link_sent',
  'commerce.membership_plan_selected',
  'commerce.payment_method_added',
  'commerce.submit_to_provider_triggered',
  'intake.atom.consumed',
  'intake.atom.emitted',
  'intake.branch.capped',
  'intake.branch.completed',
  'intake.branch.stop_early',
  'intake.branch.triggered',
  'intake.candidacy_result.continued',
  'intake.candidacy_result.rendered',
  'intake.candidacy_result.session_closed',
  'intake.educational_screen.continued',
  'intake.in_office_handoff_ready',
  'intake.question.answered',
  'intake.question.rendered',
  'intake.question.skipped',
  'intake.session.abandoned',
  'intake.session.started',
  'intake.session.submitted',
  'intake.smart_loading.completed',
  'intake.smart_loading.shown',
  'intake.smart_loading.staff_skipped',
  'intake.smart_loading.timeout_fallback',
] as const

/**
 * Patient-case mutations per Section 1G (treatment_items, care_programs,
 * refill_requests, lab_orders, clinical_visits) — written by
 * `lib/internal/patient-case/impl.ts` and downstream helpers.
 */
export const PATIENT_CASE_AUDIT_ACTIONS = [
  'care_program.status_changed',
  'clinical_visit.addendum_created',
  'clinical_visit.documented',
  'clinical_visit.pdf_published',
  'lab_order.dispatch_updated',
  'lab_order.published',
  'patient_diagnostic.portal_upload',
  'patient_state.assignee_changed',
  'patient_support_request.status_updated',
  'refill_request.status_changed',
  'refill_request.submitted',
  'refill_request.submitted_patient_portal',
  'supplement_fulfillment_order.status_updated',
  'treatment_item.catalog_prescribe',
  'treatment_item.rx_pdf_generated',
  'treatment_item.status_changed',
  'treatment_order.payload_prepared',
] as const

/**
 * External rail interactions per primitives addendum #3 (Stripe / Twilio /
 * Resend / partner pharmacy / lab vendor adapters). Each adapter MUST
 * declare its outbound + inbound audit actions here. Stripe is canonical
 * via Section 1I.6.
 */
export const EXTERNAL_RAIL_AUDIT_ACTIONS = [
  'stripe.checkout.session_completed',
] as const

/**
 * Capability-gated staff actions per Section 1D + AGENTS.md
 * `requireCapability` discipline. Written by `logCapabilityUsage` in
 * `lib/auth/capabilities.ts` after every gated mutation attempt.
 *
 * NOTE: capability.exercised is dual-written — once to audit_events
 * (this registry), and once to patient_timeline_events.staff_capability_exercised
 * for patient-visible surfaces (see TIMELINE_EVENT_TYPES).
 */
export const CAPABILITY_AUDIT_ACTIONS = [
  'capability.denied',
  'capability.exercised',
] as const

/**
 * Section 1Q.7 privacy gate + rule firing audit actions. Reserved
 * directional vocabulary — runtime lands in Phase 4H. Listed here so
 * intent surfaces consume from the typed catalog rather than introducing
 * inline strings during 4H implementation.
 */
export const RULE_AND_NOTIFICATION_AUDIT_ACTIONS = [
  'campaign.exit',
  'campaign.exit_due_to_conversion',
  'campaign.exit_due_to_recall',
  'campaign_recall_issued',
  'notification.action_template_intent_mismatch',
  'notification.cancelled_pre_send_contact_info_changed',
  'notification.cancelled_pre_send_jurisdiction_changed',
  'notification.cancelled_pre_send_stale_evidence',
  'notification.clarification_escalated_to_phone',
  'notification.consent_uplift_required',
  'notification.dispatch_blocked_by_privacy_check',
  'notification.emergency_vague_override_fired',
  'notification.privacy_exposure_check',
  'notification.suppressed_during_safety_window',
  'pathway.closed_clarification_unanswered',
  'provider_decision.flagged_stale_pending_review',
  // Phase 4H-pre commit 5 — first Rule-firing audit action under the
  // rule.fired.<domain>.<concept>_v<N> namespace per Section 1Q.4
  // line 7209. Emitted by lib/rules/runtime/dispatcher.ts when
  // repo/rules/billing/payment_received_v1.ts fires in response to a
  // commerce.checkout.session_completed trigger.
  'rule.fired.account_lifecycle.intake_submitted_v1',
  'rule.fired.billing.payment_received_v1',
  // Phase 4H-templates-discipline c3 — fourth Rule-firing audit action.
  // First with a 2-status OR producer gate (under_review +
  // pending_approval both route to the same Rule, preserving legacy
  // PATIENT_NOTIFY_BY_STATUS behavior). System-authority status ack
  // (NOT provider-authority — distinct from case_approved). Emitted by
  // lib/rules/runtime/dispatcher.ts when
  // repo/rules/clinical_decision/awaiting_clinical_review_v1.ts fires
  // in response to a patient.case_under_review trigger from
  // lib/internal/patient-case/impl.ts.
  'rule.fired.clinical_decision.awaiting_clinical_review_v1',
  // Phase 4H-templates-discipline c2 — third Rule-firing audit action.
  // First with `message_intent: 'clinical'` + `authority_floor: 'provider'`
  // semantics. Emitted by lib/rules/runtime/dispatcher.ts when
  // repo/rules/clinical_decision/case_approved_v1.ts fires in response to
  // a patient.case_approved trigger from lib/internal/patient-case/impl.ts.
  'rule.fired.clinical_decision.case_approved_v1',
  // Phase 4H-templates-discipline c7 — eighth Rule-firing audit action.
  // Fifth in the rule.fired.clinical_decision.* namespace (siblings:
  // case_approved_v1, awaiting_clinical_review_v1, active_care_v1,
  // followup_due_v1). System-authority status ack. Tier_1 existence_only
  // operational intent. FIRST with asymmetric producer-side status
  // gates: treatment_items (paused | stopped) vs care_programs (paused
  // | completed | cancelled). Collapses 4 legacy
  // PATIENT_NOTIFY_BY_STATUS map entries into one typed Rule. Emitted
  // by lib/rules/runtime/dispatcher.ts when
  // repo/rules/clinical_decision/followup_needed_v1.ts fires in
  // response to a patient.case_followup_needed trigger.
  'rule.fired.clinical_decision.followup_needed_v1',
  // Phase 4H-templates-discipline c6 — seventh Rule-firing audit action.
  // Fourth in the rule.fired.clinical_decision.* namespace (siblings:
  // case_approved_v1, awaiting_clinical_review_v1, active_care_v1).
  // System-authority status ack. Tier_1 existence_only operational
  // intent. FIRST single-producer-surface clinical_decision rule
  // (treatment_items only; refill_due not a care_programs.status).
  // Emitted by lib/rules/runtime/dispatcher.ts when
  // repo/rules/clinical_decision/followup_due_v1.ts fires in response
  // to a patient.case_followup_due trigger from
  // lib/internal/patient-case/impl.ts updateTreatmentItemStatus.
  'rule.fired.clinical_decision.followup_due_v1',
  // Phase 4H-templates-discipline c5 — sixth Rule-firing audit action.
  // Third in the rule.fired.clinical_decision.* namespace (siblings:
  // case_approved_v1, awaiting_clinical_review_v1). System-authority
  // status ack (NOT provider-authority — distinct from case_approved).
  // Tier_1 existence_only operational intent. Emitted by
  // lib/rules/runtime/dispatcher.ts when
  // repo/rules/clinical_decision/active_care_v1.ts fires in response
  // to a patient.case_active trigger from
  // lib/internal/patient-case/impl.ts (updateTreatmentItemStatus +
  // updateCareProgramStatus producer sites).
  'rule.fired.clinical_decision.active_care_v1',
  // Phase 4H-templates-discipline c4 — fifth Rule-firing audit action.
  // FIRST in the `rule.fired.fulfillment_lifecycle.*` namespace —
  // sibling-domain expansion since the registry was scaffolded (prior
  // four lived in account_lifecycle / billing / clinical_decision).
  // Per system-map `## Platform operational model` doctrine (binding
  // 2026-05-10): orders/fulfillment is a first-class sibling under
  // Patient, not a sub-shape of clinical_decision. Emitted by
  // lib/rules/runtime/dispatcher.ts when
  // repo/rules/fulfillment_lifecycle/order_shipped_v1.ts fires in
  // response to a patient.order_shipped trigger from
  // lib/internal/patient-case/impl.ts (transitional producer-site
  // locality per audit §6 #3 + radar zone 27).
  'rule.fired.fulfillment_lifecycle.order_shipped_v1',
  'rule.firing_overridden',
] as const

/**
 * Union of every domain. Single ordered authoritative list for runtime
 * validation, Zod enums, and CI lint.
 */
export const AUDIT_ACTIONS = [
  ...INTAKE_AUDIT_ACTIONS,
  ...PATIENT_CASE_AUDIT_ACTIONS,
  ...EXTERNAL_RAIL_AUDIT_ACTIONS,
  ...CAPABILITY_AUDIT_ACTIONS,
  ...RULE_AND_NOTIFICATION_AUDIT_ACTIONS,
] as const

export type AuditAction = (typeof AUDIT_ACTIONS)[number]

export const AuditActionSchema = z.enum(AUDIT_ACTIONS)

const AUDIT_ACTION_SET: ReadonlySet<string> = new Set<string>(AUDIT_ACTIONS)

/** Type guard: `value` is a known `audit_events.action`. */
export function isKnownAuditAction(value: string): value is AuditAction {
  return AUDIT_ACTION_SET.has(value)
}

/** Throws if `value` is not in the registry. Use at the boundary of routes that accept user-supplied action strings. */
export function assertKnownAuditAction(value: string): asserts value is AuditAction {
  if (!AUDIT_ACTION_SET.has(value)) {
    throw new Error(
      `Unknown audit_events.action "${value}". Register it in lib/events/audit-actions.ts before writing.`,
    )
  }
}
