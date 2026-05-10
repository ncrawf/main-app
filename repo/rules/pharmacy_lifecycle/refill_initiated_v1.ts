/**
 * Phase 4H-templates-discipline commit 8 — refill_initiated parity migration.
 *
 * Tenth typed Rule overall; SECOND in the new `pharmacy_lifecycle`
 * domain folder. Sibling of rx_sent_v1; together they activate the
 * sibling-domain folder with two members in one commit, demonstrating
 * `pharmacy_event_kind` polymorphism out of the gate.
 *
 * Per the system-map `## Platform operational model` doctrine
 * (binding):
 *
 *   "Each sibling owns its own discriminant: ... pharmacy_event_kind
 *    for pharmacy lifecycle, ..."
 *
 *   "Producer-site locality is per-sibling. Legacy cross-sibling
 *    producers ... are tagged transitional with explicit comments
 *    and tracked in the v1 pressure-test radar; they do not
 *    retroactively justify nesting siblings under each other."
 *
 * Migrates the v0 `refill_pending` notification (legacy
 * `lib/workflows/notificationRules.ts` PATIENT_NOTIFY_BY_STATUS
 * `refill_pending: 'refill_pending'` map entry + `lib/notifications/
 * patientMessages.ts` `case 'refill_pending'` arms) per Section 1Q.4
 * + 1Q.5 + ADR Section 7.5 + Section 1Q.12 DELETE-AFTER-PARITY.
 *
 * Discriminant value choice: `'refill_initiated'` (NOT
 * `'refill_pending'`). The legacy STATUS name was `'refill_pending'`
 * because that's what `treatment_items.status` reads after a refill
 * request is submitted. The PHARMACY EVENT, semantically, is
 * "the system has initiated a refill request with the pharmacy" —
 * `'refill_initiated'` makes the producer-side semantic explicit
 * and leaves room for future events (`'refill_approved_by_provider'`,
 * `'refill_denied_by_provider'`, `'refill_filled'`) to slot
 * cleanly alongside without overloading the existing discriminant.
 *
 * Architectural shape mirrors rx_sent_v1 (and order_shipped_v1
 * before that): tier_2 / system / operational / pathway_scope
 * undefined / `transactional_critical: false`.
 *
 * Per ADR Section 7.6 (binding): action.kind = 'notify'. Falls
 * within the commit-5 approved set (no new orchestrator boundary
 * required).
 *
 * PRODUCER-SITE TRANSITIONAL LOCALITY (binding per audit §6 #3 +
 * doctrine): producer fires from `updateTreatmentItemStatus` in
 * `lib/internal/patient-case/impl.ts` — case-shaped surface;
 * transitional locality. Architecturally-correct producer is a
 * future `lib/pharmacy/...` module that owns refill state
 * machines (initiated, approved-by-provider, denied-by-provider,
 * filled, dispensed). Producer migration deferred. Tracked as
 * v1 pressure-test radar zone 27.
 *
 * The TYPE SYSTEM encodes the correct architecture: folder =
 * pharmacy_lifecycle, discriminant = pharmacy_event_kind, audit
 * namespace = rule.fired.pharmacy_lifecycle.*.
 *
 * Action-level enforcement per Section 1Q.4:
 *   intended_privacy_exposure_level: 2 (low_context_phi).
 *   Honest tier survey: legacy body says "There is an update on
 *   your refill." + "Refill update" + "Refill in progress" +
 *   "There is a refill update for your care plan." References
 *   "refill" + "care plan" + "dashboard" without naming protocol,
 *   dose, condition, or pathway — but carries the implicit signal
 *   that a refill is in motion (pathway-adjacent context). Honest
 *   tier_2 low_context_phi rather than tier_1 existence_only.
 */

import type { Rule } from '../types'

export const refillInitiatedV1: Rule = {
  rule_id: 'rule.pharmacy_lifecycle.refill_initiated_v1',
  rule_version: '1.0.0',
  domain: 'pharmacy_lifecycle',
  trigger: {
    kind: 'event',
    event_type: 'patient.refill_initiated',
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
  template_key: 'tmpl.pharmacy_lifecycle.refill_initiated_v1',
  evidence_refs_required: [
    { source_kind: 'treatment_items', required: false },
    { source_kind: 'audit_events', required: true },
  ],
  audit_event_type: 'rule.fired.pharmacy_lifecycle.refill_initiated_v1',
  status: 'active',
  effective_at: '2026-05-10T00:00:00Z',
  test_fixtures: [],
  rationale_note:
    'Tenth parity proof of the v0 -> 1Q cutover. SECOND migration ' +
    'in the new pharmacy_lifecycle domain folder; ships in the same ' +
    'commit as rx_sent_v1 to populate the sibling with two members ' +
    'and demonstrate pharmacy_event_kind polymorphism out of the ' +
    'gate. Per system-map ## Platform operational model doctrine: ' +
    "lives in pharmacy_lifecycle (NOT clinical_decision) because " +
    'pharmacy lifecycle is a first-class sibling under Patient. ' +
    "Migrates the v0 refill_pending case (PATIENT_NOTIFY_BY_STATUS " +
    "map entry + lib/notifications/patientMessages.ts case " +
    "'refill_pending' arms). Discriminant value 'refill_initiated' " +
    "(not 'refill_pending') makes the producer-side semantic " +
    "explicit (the system has initiated a refill request); the " +
    "legacy STATUS name 'refill_pending' is an internal " +
    'treatment_items.status value, not a pharmacy event vocabulary. ' +
    'tier_2 low_context_phi operational intent; pathway-agnostic at ' +
    'the Rule layer. Producer-site filter at lib/internal/patient-' +
    'case/impl.ts gates to glp1_primary treatment_items (preserving ' +
    'legacy behavior). Idempotency keyed on the underlying status-' +
    'transition audit_event_id. transactional_critical: false on ' +
    'the Template. Producer-site transitional locality documented; ' +
    'future correct producer is a lib/pharmacy/... module; tracked ' +
    'as v1 pressure-test radar zone 27. Wording diff log per ADR ' +
    'Section 7.5 lives in the commit message body.',
  recall_severity: 'operational',
}
