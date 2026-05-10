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
   * Emitted from `lib/internal/patient-case/impl.ts` after a staff
   * user transitions a glp1_primary treatment_item OR a weight_loss
   * care_program to a "more info needed" terminal-or-paused status.
   *
   * ASYMMETRIC producer-side gates per surface:
   *   - updateTreatmentItemStatus: 'paused' | 'stopped'
   *     (treatment_items has no 'completed'/'cancelled' status)
   *   - updateCareProgramStatus: 'paused' | 'completed' | 'cancelled'
   *     (care_programs has no 'stopped' status)
   *
   * Both producers route to the same Rule
   * (rule.clinical_decision.followup_needed_v1) — preserving legacy
   * behavior where 4 PATIENT_NOTIFY_BY_STATUS map entries (paused,
   * completed, cancelled, stopped) all routed to the same
   * 'followup_needed' template.
   *
   * The payload's `next_status` field carries which status fired
   * for audit lineage. Carries the underlying status-transition
   * audit_event_id as the per-transition idempotency anchor.
   *
   * FIRST trigger event whose consumer fires on asymmetric per-
   * producer status gates.
   */
  'patient.case_followup_needed',

  /**
   * Emitted from `lib/internal/patient-case/impl.ts` after a staff
   * user transitions a glp1_primary treatment_item to `'refill_due'`
   * status. Single producer surface (refill_due is not a valid
   * `care_programs.status`). Carries the underlying status-transition
   * audit_event_id as the per-transition idempotency anchor (so a
   * treatment_item bouncing active -> refill_due -> active ->
   * refill_due fires one notification per genuine transition into
   * refill_due). Consumed by `rule.clinical_decision.followup_due_v1`.
   * Fourth clinical_decision domain trigger event (siblings:
   * patient.case_approved, patient.case_under_review,
   * patient.case_active). FIRST single-producer-surface
   * clinical_decision trigger.
   */
  'patient.case_followup_due',

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

  /**
   * Phase 4H-templates-discipline c8 — pharmacy_lifecycle sibling
   * activation (member 1 of 2).
   *
   * Emitted from `lib/internal/patient-case/impl.ts`
   * updateTreatmentItemStatus when a glp1_primary treatment_item
   * transitions to `'rx_sent'`. Consumed by
   * `repo/rules/pharmacy_lifecycle/rx_sent_v1.ts`.
   *
   * Per system-map `## Platform operational model` doctrine:
   * pharmacy lifecycle is a first-class sibling under Patient with
   * its own `pharmacy_event_kind` discriminant. Payload schema is
   * defined alongside the trigger; the discriminant is a single-
   * literal narrow union for this trigger ('rx_sent_to_pharmacy')
   * and widens implicitly across sibling rules in the
   * pharmacy_lifecycle/ folder.
   *
   * Payload shape:
   *   {
   *     patient_id: string                        // UUID
   *     pharmacy_event_kind: 'rx_sent_to_pharmacy'
   *     prescription_id: string                   // see comment below
   *     sent_audit_event_id: string               // UUID; idempotency anchor
   *   }
   *
   * `prescription_id`: logical identifier for the prescription.
   * Today the producer surface is `lib/internal/patient-case/impl.ts`
   * operating on `treatment_items.id` (case-shaped legacy surface);
   * transitional locality per system-map doctrine + radar zone 27.
   * Future producer at `lib/pharmacy/...` will switch the bound id
   * to `prescriptions.id` (or equivalent) without changing payload
   * semantics.
   *
   * Idempotency: per-transition, keyed on `sent_audit_event_id`.
   */
  'patient.rx_sent_to_pharmacy',

  /**
   * Phase 4H-templates-discipline c8 — pharmacy_lifecycle sibling
   * activation (member 2 of 2).
   *
   * Emitted from `lib/internal/patient-case/impl.ts`
   * updateTreatmentItemStatus when a glp1_primary treatment_item
   * transitions to `'refill_pending'` (i.e. `requestRefillForTreatmentItem`
   * has just inserted a `refill_requests` row). Consumed by
   * `repo/rules/pharmacy_lifecycle/refill_initiated_v1.ts`.
   *
   * Discriminant value `'refill_initiated'` (NOT `'refill_pending'`)
   * makes the producer-side semantic explicit: the system has
   * INITIATED a refill request with the pharmacy. The legacy STATUS
   * name `'refill_pending'` is an internal `treatment_items.status`
   * value, not the pharmacy event vocabulary. Future events
   * (`'refill_approved_by_provider'`, `'refill_denied_by_provider'`,
   * `'refill_filled'`) slot cleanly alongside.
   *
   * Payload shape:
   *   {
   *     patient_id: string                  // UUID
   *     pharmacy_event_kind: 'refill_initiated'
   *     prescription_id: string             // see rx_sent_to_pharmacy comment
   *     refill_request_id: string | null    // refill_requests.id when
   *                                         // available; producer site
   *                                         // does not always thread it
   *                                         // through, so optional
   *     initiation_audit_event_id: string   // UUID; idempotency anchor
   *   }
   *
   * Idempotency: per-transition, keyed on `initiation_audit_event_id`.
   *
   * Producer-site transitional locality: same as rx_sent_to_pharmacy.
   * Future correct producer is a `lib/pharmacy/...` module.
   */
  'patient.refill_initiated',
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
