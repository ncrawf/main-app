/**
 * Phase 4H-pre commit 5 — typed registry of rule trigger event names.
 *
 * Per system map primitives addendum #6 (enum-as-code-as-config): every
 * named string used as a typed identifier lives in a central registry
 * under `lib/events/`. This file is the home for `RuleTrigger.event_type`
 * values consumed by the rules engine dispatcher.
 *
 * Why a separate registry from `audit-actions.ts` and
 * `timeline-event-types.ts`:
 *
 *   - `audit_events.action` (1H.5) is the staff/system traceability
 *     spine — code-as-config catalog of who-did-what.
 *   - `patient_timeline_events.event_type` (1H.6) is the patient-facing
 *     memory projection — what happened to the patient.
 *   - `RuleTrigger.event_type` (1Q.4) is the INTERNAL domain event the
 *     rules engine listens to. Same string may not appear in either DB
 *     catalog: a Stripe webhook arrival emits BOTH the external-rail
 *     audit action `'stripe.checkout.session_completed'` AND the
 *     internal trigger `'commerce.checkout.session_completed'` — those
 *     are distinct concerns.
 *
 * Per system map ADR Section 8 + Section 1Q.4: the exact mapping of
 * domain events to RuleTrigger and the event-bus shape are deferred to
 * Phase 4H-rules-runtime. Until then, this registry holds the trigger
 * names the dispatcher recognizes; the `Rule.trigger.event_type` field
 * stays typed as `string` in the scaffold (`repo/rules/types.ts`) so
 * the runtime swap-in is non-breaking.
 *
 * Adding a new trigger event type:
 *   1. Add the string to `RULE_TRIGGER_EVENT_TYPES` below (alphabetical
 *      within domain prefix).
 *   2. Make sure the producing site (e.g. webhook handler) imports the
 *      constant value rather than inlining the string literal.
 *   3. Add a Rule with matching `trigger.event_type` to `repo/rules/`.
 */

export const RULE_TRIGGER_EVENT_TYPES = [
  /**
   * Emitted from `lib/payments/handleStripeCheckoutCompleted.ts` when a
   * Stripe `checkout.session.completed` webhook arrives with
   * `payment_status === 'paid'` and the checkout includes a consult line.
   * Distinct from the `'stripe.checkout.session_completed'` audit action
   * (vendor-rail telemetry) and from the `'stripe_checkout_completed'`
   * timeline event (patient-facing memory). Consumed by
   * `rule.billing.payment_received_v1`.
   */
  'commerce.checkout.session_completed',

  /**
   * Emitted from `lib/protocol/derive.ts` `deriveCanonicalState` when a
   * patient submits an intake form via `POST /api/forms/[formKey]` and
   * the upstream form-submissions row is inserted. Carries the
   * form_submission_id as the per-submission idempotency anchor.
   * Consumed by `rule.account_lifecycle.intake_submitted_v1`.
   */
  'patient.intake_submitted',

  /**
   * Emitted from `lib/internal/patient-case/impl.ts` after a staff user
   * transitions a glp1_primary treatment_item or a weight_loss
   * care_program to `'approved'` status. Carries the underlying
   * mutation's audit_event_id as the per-transition idempotency anchor
   * (so a case bouncing approved -> denied -> approved emits a fresh
   * notification on each genuine re-approval). Consumed by
   * `rule.clinical_decision.case_approved_v1`. First trigger event in
   * the registry whose consumer carries `message_intent: 'clinical'` +
   * `authority_floor: 'provider'`.
   */
  'patient.case_approved',

  /**
   * Emitted from `lib/internal/patient-case/impl.ts` after a staff user
   * transitions a glp1_primary treatment_item or a weight_loss
   * care_program to EITHER `'under_review'` OR `'pending_approval'`
   * status. Both transition targets route to the same Rule
   * (`rule.clinical_decision.awaiting_clinical_review_v1`) — preserving
   * legacy behavior where both `PATIENT_NOTIFY_BY_STATUS` map entries
   * (`under_review` + `pending_approval`) routed to the same template.
   * The payload carries `next_status` so the executor can record which
   * status was entered for audit lineage. Carries the underlying
   * status-transition audit_event_id as the per-transition idempotency
   * anchor (a case bouncing pending -> under_review -> pending_approval
   * -> under_review emits one notification per genuine transition).
   * First trigger event whose consumer fires on a 2-status OR gate.
   */
  'patient.case_under_review',

  /**
   * Emitted from `lib/internal/patient-case/impl.ts` after a staff user
   * transitions a glp1_primary treatment_item or a weight_loss
   * care_program to `'active'` status. Carries the underlying
   * status-transition audit_event_id as the per-transition idempotency
   * anchor (so a treatment_item bouncing approved -> active -> stopped
   * -> active fires one notification per genuine transition into
   * active). Consumed by `rule.clinical_decision.active_care_v1`.
   * Third clinical_decision domain trigger event (siblings:
   * patient.case_approved, patient.case_under_review). Like the prior
   * two, fires from BOTH `updateTreatmentItemStatus` and
   * `updateCareProgramStatus` producer surfaces.
   */
  'patient.case_active',

  /**
   * Emitted from `lib/internal/patient-case/impl.ts` after a staff user
   * transitions a glp1_primary treatment_item to `'shipped'` status.
   * Consumed by `rule.fulfillment_lifecycle.order_shipped_v1`.
   *
   * FIRST trigger event in the `fulfillment_lifecycle` sibling-domain
   * namespace. Per system-map `## Platform operational model` doctrine
   * (binding 2026-05-10): orders / fulfillment / inventory is a first-
   * class sibling under Patient. The payload carries an `order_kind`
   * discriminant ('treatment_order' | 'supplement_order' |
   * 'lab_kit_order') — NOT `case_kind`. Reusing `case_kind` across
   * sibling seams is the canonization-of-wrong-ontology error the
   * doctrine binds against; `order_kind` is the sibling discriminant
   * for fulfillment events.
   *
   * PRODUCER-SITE TRANSITIONAL LOCALITY (per audit §6 #3 + radar zone
   * 27): the producer site is `lib/internal/patient-case/impl.ts`
   * `updateTreatmentItemStatus` — the same case-shaped surface that
   * fires the existing clinical_decision triggers. This is
   * transitional. The architecturally-correct producer is
   * `lib/orders/updateFulfillment.ts`. Producer migration is deferred
   * pending broader treatment_items-vs-treatment_orders consolidation
   * appetite. The TYPE SYSTEM nonetheless encodes the correct
   * architecture (folder = fulfillment_lifecycle, discriminant =
   * order_kind) so future authors of `delivered`, `pharmacy_filled`,
   * `retail_order_placed`, etc. inherit the correct sibling-domain
   * pattern, NOT the legacy locality.
   *
   * Initial wiring covers `order_kind: 'treatment_order'` only. The
   * other two values (`supplement_order`, `lab_kit_order`) are reserved
   * in the discriminant but not active; their producer sites + parity
   * tests land in future migrations.
   *
   * Carries the underlying status-transition audit_event_id as the
   * per-transition idempotency anchor (so a treatment_item bouncing
   * approved -> rx_sent -> shipped -> rx_sent -> shipped fires one
   * notification per genuine re-shipment).
   */
  'patient.order_shipped',
] as const

export type RuleTriggerEventType = (typeof RULE_TRIGGER_EVENT_TYPES)[number]

const RULE_TRIGGER_EVENT_TYPE_SET: ReadonlySet<string> = new Set<string>(
  RULE_TRIGGER_EVENT_TYPES,
)

/** Type guard: `value` is a known rule trigger event type. */
export function isKnownRuleTriggerEventType(value: string): value is RuleTriggerEventType {
  return RULE_TRIGGER_EVENT_TYPE_SET.has(value)
}

/**
 * Throws if `value` is not in the registry. Use at the boundary of code
 * that accepts user-supplied / external trigger strings.
 */
export function assertKnownRuleTriggerEventType(
  value: string,
): asserts value is RuleTriggerEventType {
  if (!RULE_TRIGGER_EVENT_TYPE_SET.has(value)) {
    throw new Error(
      `Unknown RuleTrigger.event_type "${value}". Register it in lib/events/rule-trigger-event-types.ts before emitting.`,
    )
  }
}
