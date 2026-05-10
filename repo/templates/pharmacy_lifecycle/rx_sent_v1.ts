/**
 * Phase 4H-templates-discipline commit 8 — rx_sent Template.
 *
 * Companion to repo/rules/pharmacy_lifecycle/rx_sent_v1.ts.
 *
 * Ninth typed Template overall; FIRST in the new pharmacy_lifecycle
 * domain folder. Sibling-domain activation #3.
 *
 * Per the system-map `## Platform operational model` doctrine
 * (binding):
 *
 *   Prescriptions / pharmacy lifecycle is a first-class sibling
 *   under Patient. The pharmacy_lifecycle domain folder +
 *   pharmacy_event_kind discriminant + rule.fired.pharmacy_lifecycle.*
 *   audit namespace together encode that sibling-domain home in
 *   the type system, independent of the producer site's
 *   transitional locality on the case-shaped surface.
 *
 * Distinct shape vs prior Templates:
 *   - tier_2 low_context_phi (matches order_shipped_v1) —
 *     pharmacy-send wording references "prescription" + "pharmacy"
 *     + "Medication update" eyebrow + "fulfillment" + "dashboard"
 *     without naming protocol/dose/condition/pathway, but carries
 *     the implicit signal that a prescription was issued
 *     (pathway-adjacent context).
 *   - message_intent: 'operational' (system-emitted pharmacy
 *     update, not a clinical decision and not billing).
 *   - First Template in domain='pharmacy_lifecycle'.
 *
 * Per Section 1Q.5 + 1Q.17 + ADR Section 7.5 cutover discipline:
 *   - All required fields declared (no grandfathering).
 *   - tier_2 low_context_phi: legacy body referenced "prescription",
 *     "pharmacy", "Medication update", "fulfillment", "dashboard".
 *     No protocol naming, no dose, no condition, no pathway.
 *   - message_intent: 'operational' (matches the Rule's
 *     action.message_intent).
 *   - outside_secure_render_strategy: 'mention_brand_only' — body
 *     mentions the brand without naming the underlying protocol.
 *   - Brand sourced from typed brand_short_label slot.
 *   - Wording carried forward verbatim from legacy because legacy
 *     wording is already tier_2 compliant.
 *
 * GOVERNED EQUIVALENCE NOT BYTE-LEVEL (per ADR Section 7.5
 * cutover discipline + the c2 case_approved precedent): the
 * parity test asserts canonical governed output, not byte-
 * identical legacy preservation. For this Template the governed
 * and legacy outputs are identical because legacy wording was
 * already governance-compliant.
 *
 * `transactional_critical: false` (BINDING per the same axis-
 * separation reasoning that locked it false on every prior 4H
 * Template): cadence-bypass is a separate axis from operational
 * importance. A pharmacy-send notification is informational; if
 * Step 4 safety orchestration ever suppresses normal traffic
 * during an active adverse-event review, this notification SHOULD
 * honor the suppression.
 *
 * Wording strategy:
 *   - Email subject / preview / eyebrow / heading / intro / detail:
 *     legacy wording preserved verbatim — already tier_2 compliant.
 *   - Email brand_footer: rewritten to source from brands.slug per
 *     ADR Section 7.5.
 *   - SMS body: rewritten to source brand prefix from brands.slug.
 *     Renders byte-identical "MAIN: Rx sent to pharmacy. <url>"
 *     for the existing brand.
 */

import type { Template } from '../types'

export const rxSentTemplateV1: Template = {
  template_key: 'tmpl.pharmacy_lifecycle.rx_sent_v1',
  template_version: '1.0.0',
  domain: 'pharmacy_lifecycle',
  allowed_use: 'patient_facing',
  channels: ['email', 'sms'],

  required_variables: [
    {
      name: 'brand_short_label',
      type: 'string',
      required: true,
      doc:
        'Brand prefix for SMS + email logo + email footer. Sourced ' +
        'from brands.slug.toUpperCase() per ADR Section 7.5 multi-' +
        'tenant rule.',
    },
    {
      name: 'dashboard_url',
      type: 'url',
      required: true,
      doc: 'Patient dashboard deep link.',
    },
  ],
  optional_variables: [
    {
      name: 'patient_first_name',
      type: 'string',
      required: false,
      doc:
        'Patient first name for email greeting; absent / empty ' +
        'falls back to "Hi,".',
    },
  ],

  prohibited_claims: [
    { kind: 'must_not_promise_outcome' },
    { kind: 'must_not_diagnose' },
    { kind: 'must_not_quote_lab_value_without_provider_review' },
  ],
  tone_constraints: ['warm_direct', 'factual_only'],
  // Operational pharmacy update; no clinical content. Runtime
  // clinical_review per send is not required.
  clinical_review_required: false,
  ai_refinement_allowed: false,
  evidence_required: [],

  status: 'active',
  effective_at: '2026-05-10T00:00:00Z',
  test_renders: [],
  rationale_note:
    'Ninth typed Template, first in the pharmacy_lifecycle domain ' +
    'folder. Migrates the v0 rx_sent case (PATIENT_NOTIFY_BY_STATUS ' +
    "map entry + lib/notifications/patientMessages.ts case 'rx_sent' " +
    'arms). tier_2 low_context_phi operational intent; pathway-' +
    'agnostic at the Template layer. Wording preserved verbatim ' +
    '(already tier_2 compliant); brand sourcing rewritten to typed ' +
    'brand_short_label slot per ADR Section 7.5. transactional_' +
    'critical: false. Per system-map ## Platform operational model ' +
    'doctrine: lives in pharmacy_lifecycle (NOT clinical_decision ' +
    'and NOT fulfillment_lifecycle) because pharmacy lifecycle is ' +
    "its own first-class sibling under Patient. Wording diff log " +
    'per ADR Section 7.5 lives in the commit message body.',

  // Section 1Q.17 privacy + governance.
  privacy_exposure_level: 2, // low_context_phi
  message_intent: 'operational',
  outside_secure_render_strategy: 'mention_brand_only',
  secure_view_render_strategy: 'full_detail_default',
  safety_critical_override_allowed: false,
  // Body has actionable cue ("You can track fulfillment progress in your dashboard.").
  action_context_required: true,

  // Section 1Q.21 marketing lifecycle extensions.
  personalization_level: 'none',
  pathway_sensitivity_compatibility: ['low', 'moderate', 'high', 'extreme'],
  transactional_critical: false,

  // Section 1Q.23 hybrid care delivery extensions.
  interaction_context_compatibility: ['both'],
  // Rx-send is a discrete pharmacy event; not subject to in-person
  // redundancy collapse (the patient was not separately told their
  // prescription was sent during an in-person visit — this is the
  // canonical surface for that information).
  interaction_context_redundancy_check: false,
}
