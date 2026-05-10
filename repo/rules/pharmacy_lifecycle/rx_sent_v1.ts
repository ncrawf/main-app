/**
 * Phase 4H-templates-discipline commit 8 — rx_sent parity migration.
 *
 * Ninth typed Rule overall; FIRST in the new `pharmacy_lifecycle`
 * domain folder. Sibling-domain activation #3 (after the original
 * `clinical_decision/` and the c4 `fulfillment_lifecycle/`
 * activation). Ships in a single commit alongside its sibling
 * `refill_initiated_v1` to demonstrate `pharmacy_event_kind`
 * polymorphism out of the gate (the c4 single-member precedent
 * was deliberately not repeated; see PREFLIGHT c8 §3).
 *
 * Per the system-map `## Platform operational model` doctrine
 * (binding):
 *
 *   "Major operational domains are first-class siblings under the
 *    patient and shared organizational context. These include
 *    ... prescriptions / pharmacy lifecycle ... Siblings are
 *    never modeled as sub-shapes of any single sibling (including
 *    'case')."
 *
 *   "Each sibling owns its own discriminant: case_kind for
 *    clinical-decision, order_kind for fulfillment, ...
 *    pharmacy_event_kind for pharmacy lifecycle, ..."
 *
 * This Rule consequently lives in `repo/rules/pharmacy_lifecycle/`
 * (NOT `clinical_decision/` even though the producer side rides
 * a `treatment_items.status` transition today) and consumes a
 * payload with a `pharmacy_event_kind` discriminant (NOT
 * `case_kind` and NOT `order_kind`). Future pharmacy migrations
 * (`rx_filled`, `rx_dispensed`, `refill_approved_by_provider`,
 * `refill_denied_by_provider`) follow the same pattern.
 *
 * Migrates the v0 `rx_sent` notification (legacy
 * `lib/workflows/notificationRules.ts` PATIENT_NOTIFY_BY_STATUS
 * `rx_sent: 'rx_sent'` map entry + `lib/notifications/patientMessages.ts`
 * `case 'rx_sent'` arms) per Section 1Q.4 + 1Q.5 + ADR Section 7.5
 * + Section 1Q.12 DELETE-AFTER-PARITY.
 *
 * Architectural shape mirrors the order_shipped_v1 precedent (also
 * tier_2 / system / operational); the differences are the domain
 * folder, the discriminant name, the audit namespace, and the
 * future-correct producer surface (`lib/pharmacy/...` vs
 * `lib/orders/updateFulfillment.ts`).
 *
 * Per ADR Section 7.6 (binding): action.kind = 'notify'. Falls
 * within the commit-5 approved set (no new orchestrator boundary
 * required). The dispatcher stays side-effect-bounded.
 *
 * `transactional_critical: false` (BINDING per the same axis-
 * separation reasoning that locked it false on every prior 4H
 * Template): cadence-bypass is a separate axis from operational
 * importance. A pharmacy-send notification is informational; if
 * Step 4 safety orchestration ever suppresses normal traffic
 * during an active safety window, this notification SHOULD honor
 * the suppression while a provider re-reviews.
 *
 * `pathway_scope: undefined` (binding for this commit): the
 * producer-site filter at `lib/internal/patient-case/impl.ts`
 * already gates to glp1_primary treatment_items (preserving
 * legacy behavior); the Rule layer does not double-filter.
 * pathway_sensitivity stays null on enqueue — correct for tier_2
 * (the disclosure-policy clamp does not read it for tier_2).
 *
 * PRODUCER-SITE TRANSITIONAL LOCALITY (binding per audit §6 #3 +
 * doctrine):
 *
 *   The Rule's trigger fires from `updateTreatmentItemStatus` in
 *   `lib/internal/patient-case/impl.ts` — the same case-shaped
 *   surface that fires the existing clinical_decision and
 *   fulfillment_lifecycle triggers. This is transitional locality.
 *   The architecturally-correct producer is a future
 *   `lib/pharmacy/...` module that owns prescription state
 *   machines (rx-sent, rx-filled, rx-dispensed, refill-approval).
 *   That module does not exist yet; producer migration is
 *   deferred pending broader pharmacy-state consolidation
 *   appetite. Tracked as v1 pressure-test radar zone 27 (post-
 *   snapshot 2026-05-10 addendum).
 *
 *   The TYPE SYSTEM nonetheless encodes the correct architecture:
 *   folder = pharmacy_lifecycle, discriminant = pharmacy_event_kind,
 *   audit namespace = rule.fired.pharmacy_lifecycle.*. Future
 *   authors reading the registry see the correct sibling-domain
 *   layering and replicate it.
 *
 * Action-level enforcement per Section 1Q.4:
 *   intended_privacy_exposure_level: 2 (low_context_phi).
 *   Honest tier survey: legacy body says "Your prescription has
 *   been sent to the pharmacy." + "You can track fulfillment
 *   progress in your dashboard." References "prescription" +
 *   "pharmacy" + "Medication update" eyebrow + "fulfillment" +
 *   "dashboard" without naming protocol, dose, condition, or
 *   pathway by name — but carries the implicit signal that a
 *   prescription was issued (pathway-adjacent context). Honest
 *   tier_2 low_context_phi rather than tier_1 existence_only.
 */

import type { Rule } from '../types'

export const rxSentV1: Rule = {
  rule_id: 'rule.pharmacy_lifecycle.rx_sent_v1',
  rule_version: '1.0.0',
  domain: 'pharmacy_lifecycle',
  trigger: {
    kind: 'event',
    event_type: 'patient.rx_sent_to_pharmacy',
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
  template_key: 'tmpl.pharmacy_lifecycle.rx_sent_v1',
  evidence_refs_required: [
    { source_kind: 'treatment_items', required: false },
    { source_kind: 'audit_events', required: true },
  ],
  audit_event_type: 'rule.fired.pharmacy_lifecycle.rx_sent_v1',
  status: 'active',
  effective_at: '2026-05-10T00:00:00Z',
  test_fixtures: [],
  rationale_note:
    'Ninth parity proof of the v0 -> 1Q cutover. FIRST migration ' +
    'in the new pharmacy_lifecycle domain folder; sibling-domain ' +
    'activation #3 (after clinical_decision and fulfillment_lifecycle). ' +
    'Per system-map ## Platform operational model doctrine: ' +
    'prescriptions / pharmacy lifecycle is a first-class sibling ' +
    'under Patient, NOT a sub-shape of clinical_decision; ' +
    'pharmacy_event_kind is the pharmacy sibling discriminant. ' +
    "Migrates the v0 rx_sent case (PATIENT_NOTIFY_BY_STATUS map " +
    "entry + lib/notifications/patientMessages.ts case 'rx_sent' " +
    'arms). tier_2 low_context_phi operational intent; pathway-' +
    'agnostic at the Rule layer. Producer-site filter at ' +
    'lib/internal/patient-case/impl.ts gates to glp1_primary ' +
    'treatment_items (preserving legacy behavior); the Rule layer ' +
    'does not double-filter, so pathway_scope is undefined and ' +
    'pathway_sensitivity is null on enqueue. Idempotency keyed on ' +
    'the underlying status-transition audit_event_id. ' +
    'transactional_critical: false on the Template per the same ' +
    'axis-separation reasoning locked on prior Templates — cadence-' +
    'bypass and operational/clinical importance are separate axes. ' +
    'Producer-site transitional locality documented in this file ' +
    'header + producer-site comment in lib/internal/patient-case/' +
    'impl.ts; future correct producer is a lib/pharmacy/... module ' +
    'that does not exist yet; tracked as v1 pressure-test radar ' +
    'zone 27. Wording diff log per ADR Section 7.5 lives in the ' +
    'commit message body.',
  recall_severity: 'operational',
}
