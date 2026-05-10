/**
 * Phase 4H-templates-discipline commit 4 — order_shipped parity migration.
 *
 * Fifth typed Rule overall; FIRST in the new `fulfillment_lifecycle`
 * domain folder. First migration to land AFTER the system-map
 * `## Platform operational model` doctrine was inserted (2026-05-10);
 * every architectural choice in this file operationalizes that doctrine.
 *
 * Per the doctrine (binding):
 *
 *   "Major operational domains are first-class siblings under the
 *    patient and shared organizational context. These include ...
 *    orders / fulfillment / inventory ... Siblings are never modeled
 *    as sub-shapes of any single sibling (including 'case')."
 *
 *   "Each sibling owns its own discriminant: case_kind for clinical-
 *    decision, order_kind for fulfillment, ..."
 *
 * This Rule consequently lives in `repo/rules/fulfillment_lifecycle/`
 * (NOT `clinical_decision/`) and consumes a payload with an
 * `order_kind` discriminant (NOT `case_kind`). Future fulfillment
 * migrations (delivered, supplement_order_shipped, lab_kit_shipped,
 * pharmacy_filled, retail_order_placed) follow the same pattern.
 *
 * Migrates the v0 `shipped` notification (legacy
 * `lib/workflows/notificationRules.ts` PATIENT_NOTIFY_BY_STATUS
 * `shipped: 'shipped'` map entry + `lib/notifications/patientMessages.ts`
 * `case 'shipped'` arms) per Section 1Q.4 + 1Q.5 + ADR Section 7.5 +
 * Section 1Q.12 DELETE-AFTER-PARITY.
 *
 * Distinct from the existing four typed Rules on FOUR axes (the
 * sibling-domain expansion):
 *   - domain: 'fulfillment_lifecycle' (vs billing_subscription /
 *     account_lifecycle / clinical_decision) — FIRST sibling-domain
 *     expansion since the registry was scaffolded.
 *   - trigger.event_type: 'patient.order_shipped' with `order_kind`
 *     discriminant (vs `case_kind` for clinical_decision triggers).
 *   - audit_event_type: 'rule.fired.fulfillment_lifecycle.order_shipped_v1'
 *     (the `fulfillment_lifecycle` audit-action namespace is created in
 *     this commit as the parallel to the existing rule.fired.<domain>.*
 *     namespaces).
 *   - send_policy_class: 'transactional_operational' (vs
 *     transactional_billing / transactional_account / transactional_clinical).
 *
 * Per ADR Section 7.6 (binding): action.kind = 'notify'. Falls within
 * the commit-5 approved set (no new orchestrator boundary required).
 *
 * Per the same axis-separation reasoning that locked
 * transactional_critical: false on the existing clinical-decision
 * Templates (binding): cadence-bypass is a separate axis from
 * operational/clinical importance. A shipping notification is NOT
 * cadence-bypass critical; if Step 4 safety orchestration ever
 * suppresses normal traffic during an active safety window, this
 * notification SHOULD honor the suppression.
 *
 * `pathway_scope: undefined` (binding for this commit): the producer-
 * site filters at `lib/internal/patient-case/impl.ts` already gate to
 * glp1_primary treatment_items (preserving legacy behavior); the Rule
 * layer does not double-filter. pathway_sensitivity stays null on
 * enqueue — correct for tier_2 (the disclosure-policy clamp does not
 * read it for tier_2).
 *
 * PRODUCER-SITE TRANSITIONAL LOCALITY (binding per audit §6 #3 +
 * doctrine "Producer-site locality is per-sibling. Legacy cross-sibling
 * producers (e.g., a fulfillment-shaped event currently emitted from
 * lib/internal/patient-case/impl.ts) are tagged transitional with
 * explicit comments and tracked in the v1 pressure-test radar; they do
 * not retroactively justify nesting siblings under each other."):
 *
 *   The Rule's trigger fires from `updateTreatmentItemStatus` in
 *   `lib/internal/patient-case/impl.ts` — the same case-shaped surface
 *   that fires the existing clinical_decision triggers. This is
 *   transitional locality. The architecturally-correct producer is
 *   `lib/orders/updateFulfillment.ts` (the fulfillment subsystem).
 *   Producer migration is deferred pending broader treatment_items-vs-
 *   treatment_orders consolidation appetite. Tracked as v1 pressure-
 *   test radar zone 27 (post-snapshot 2026-05-10 addendum).
 *
 *   The TYPE SYSTEM nonetheless encodes the correct architecture:
 *   folder = fulfillment_lifecycle, discriminant = order_kind, audit
 *   namespace = rule.fired.fulfillment_lifecycle.*. Future authors
 *   reading the registry see the correct sibling-domain layering and
 *   replicate it for delivered / pharmacy_filled / retail_order_placed
 *   without inheriting the legacy locality.
 *
 * Action-level enforcement per Section 1Q.4:
 *   intended_privacy_exposure_level: 2 (low_context_phi).
 *   Honest tier survey: legacy body says "Your order has shipped" +
 *   "Tracking details are available in your dashboard." References
 *   "order" + "tracking" + "dashboard" without naming protocol, dose,
 *   condition, or pathway. Carries the implicit signal that a
 *   prescription was filled (pathway-adjacent context) so tier_2
 *   low_context_phi rather than tier_1 existence_only.
 */

import type { Rule } from '../types'

export const orderShippedV1: Rule = {
  rule_id: 'rule.fulfillment_lifecycle.order_shipped_v1',
  rule_version: '1.0.0',
  domain: 'fulfillment_lifecycle',
  trigger: {
    kind: 'event',
    event_type: 'patient.order_shipped',
  },
  preconditions: [],
  required_inputs: [
    { source: 'treatment_items', field: 'id' },
    { source: 'patients', field: 'email' },
    { source: 'patients', field: 'first_name' },
    { source: 'patients', field: 'phone' },
    { source: 'brands', field: 'slug' },
    { source: 'audit_events', field: 'id' },
  ],
  authority_floor: 'system',
  action: {
    kind: 'notify',
    channels: ['email', 'sms'],
    send_policy_class: 'transactional_operational',
    intended_privacy_exposure_level: 2,
    message_intent: 'operational',
  },
  priority: 'standard',
  blocking: false,
  template_key: 'tmpl.fulfillment_lifecycle.order_shipped_v1',
  evidence_refs_required: [
    { source_kind: 'treatment_items', required: false },
    { source_kind: 'audit_events', required: true },
  ],
  audit_event_type: 'rule.fired.fulfillment_lifecycle.order_shipped_v1',
  status: 'active',
  effective_at: '2026-05-10T00:00:00Z',
  test_fixtures: [],
  rationale_note:
    'Fifth parity proof of the v0 -> 1Q cutover. FIRST migration in ' +
    'the new fulfillment_lifecycle domain folder; FIRST sibling-domain ' +
    'expansion since the registry was scaffolded (prior four lived in ' +
    'billing_subscription / account_lifecycle / clinical_decision). ' +
    'Per system-map ## Platform operational model doctrine: orders / ' +
    'fulfillment / inventory is a first-class sibling under Patient, ' +
    'NOT a sub-shape of clinical_decision; case_kind is bounded to ' +
    'clinical-decision events; order_kind is the fulfillment sibling ' +
    'discriminant. Migrates the v0 shipped case (PATIENT_NOTIFY_BY_STATUS ' +
    "map entry + lib/notifications/patientMessages.ts case 'shipped' " +
    'arms). tier_2 low_context_phi operational intent; pathway-agnostic. ' +
    'Producer-site filters at lib/internal/patient-case/impl.ts gate to ' +
    'glp1_primary treatment_items (preserving legacy behavior); the ' +
    'Rule layer does not double-filter, so pathway_scope is undefined ' +
    'and pathway_sensitivity is null on enqueue (correct for tier_2; ' +
    'the disclosure-policy clamp does not read it for tier_2). ' +
    'Idempotency keyed on the underlying status-transition audit_event_id ' +
    '(so a treatment_item bouncing approved -> rx_sent -> shipped -> ' +
    'rx_sent -> shipped fires one notification per genuine re-shipment). ' +
    'transactional_critical: false on the Template per the same axis-' +
    'separation reasoning that locked it false on the prior clinical-' +
    'decision Templates — cadence-bypass and operational/clinical ' +
    'importance are separate axes. Producer-site transitional locality ' +
    'documented in this file header + the producer-site comment in ' +
    'lib/internal/patient-case/impl.ts; tracked as v1 pressure-test ' +
    'radar zone 27 (Sibling-discriminant leak / case-as-parent-ontology ' +
    'drift). Wording diff log per ADR Section 7.5 lives in the commit ' +
    'message body.',
  recall_severity: 'operational',
}
