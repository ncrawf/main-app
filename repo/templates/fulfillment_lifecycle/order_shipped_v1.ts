/**
 * Phase 4H-templates-discipline commit 4 — order_shipped Template.
 *
 * Companion to repo/rules/fulfillment_lifecycle/order_shipped_v1.ts.
 *
 * Fifth typed Template overall; FIRST in the new fulfillment_lifecycle
 * domain folder. First Template to land AFTER the system-map
 * `## Platform operational model` doctrine was inserted (2026-05-10);
 * the doctrine binds this Template's domain choice + governance
 * shape.
 *
 * Per the doctrine (binding):
 *
 *   Orders / fulfillment / inventory is a first-class sibling under
 *   Patient. The fulfillment_lifecycle domain folder + order_kind
 *   discriminant + rule.fired.fulfillment_lifecycle.* audit namespace
 *   together encode that sibling-domain home in the type system,
 *   independent of the producer site's transitional locality on the
 *   case-shaped surface.
 *
 * Distinct shape vs the existing four typed Templates:
 *   - tier_2 low_context_phi (vs payment_received tier_1 / intake tier_1
 *     / case_approved tier_2 / awaiting_clinical_review tier_1) —
 *     shipping wording references "order" + "tracking" + "dashboard"
 *     without naming protocol/dose/condition/pathway, but carries the
 *     implicit signal that a prescription was filled (pathway-adjacent
 *     context).
 *   - message_intent: 'operational' (vs billing / account / clinical /
 *     operational respectively) — system-emitted shipping update.
 *   - First Template in domain='fulfillment_lifecycle'.
 *
 * Per Section 1Q.5 + 1Q.17 + ADR Section 7.5 cutover discipline:
 *   - All required fields declared (no grandfathering).
 *   - tier_2 low_context_phi: legacy body referenced "order" +
 *     "tracking" + "dashboard". No protocol naming, no dose, no
 *     condition, no pathway. Honest tier_2 — implicit "you got a
 *     prescription filled" context.
 *   - message_intent: 'operational' (matches the Rule's
 *     action.message_intent).
 *   - outside_secure_render_strategy: 'mention_brand_only' — body
 *     mentions the brand without naming the underlying protocol or
 *     pathway, which fits the 'mention_brand_only' contract.
 *   - Brand sourced from typed multi-tenant primitives via the
 *     brand_short_label slot.
 *   - Wording carried forward verbatim from legacy because legacy
 *     wording is already tier_2 compliant.
 *
 * GOVERNED EQUIVALENCE NOT BYTE-LEVEL (per ADR Section 7.5 cutover
 * discipline + the c2 case_approved precedent): the parity test asserts
 * canonical governed output, not byte-identical legacy preservation.
 * For this Template the governed and legacy outputs are identical
 * because legacy wording was already governance-compliant; the test
 * surface is the same either way.
 *
 * `transactional_critical: false` (BINDING per the same axis-separation
 * reasoning that locked it false on the prior four Templates):
 * cadence-bypass is a separate axis from operational importance. A
 * shipping notification is informational; if Step 4 safety
 * orchestration ever suppresses normal traffic during an active
 * adverse-event review, this notification SHOULD honor the
 * suppression while a provider re-reviews. Operational semantics
 * carried by the Rule's recall_severity='operational' +
 * authority_floor='system' + Template's message_intent='operational'.
 *
 * Wording strategy:
 *   - Email subject / preview / eyebrow / heading / intro / detail:
 *     legacy wording preserved verbatim — already tier_2 compliant.
 *   - Email brand_footer: rewritten to source from brands.slug per
 *     ADR Section 7.5 multi-tenant rule.
 *   - SMS body: rewritten to source brand prefix from brands.slug.
 *     Renders byte-identical "MAIN: Order shipped." for the existing
 *     brand.
 */

import type { Template } from '../types'

export const orderShippedTemplateV1: Template = {
  template_key: 'tmpl.fulfillment_lifecycle.order_shipped_v1',
  template_version: '1.0.0',
  domain: 'fulfillment_lifecycle',
  allowed_use: 'patient_facing',
  channels: ['email', 'sms'],

  required_variables: [
    {
      name: 'brand_short_label',
      type: 'string',
      required: true,
      doc:
        'Brand prefix for SMS + email logo + email footer. Sourced ' +
        'from brands.slug.toUpperCase() per ADR Section 7.5 multi-tenant ' +
        'rule.',
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
        'Patient first name for email greeting; absent / empty falls ' +
        'back to "Hi,".',
    },
  ],

  prohibited_claims: [
    { kind: 'must_not_promise_outcome' },
    { kind: 'must_not_diagnose' },
    { kind: 'must_not_quote_lab_value_without_provider_review' },
  ],
  tone_constraints: ['warm_direct', 'factual_only'],
  // Operational shipping update; no clinical content. Runtime
  // clinical_review per send is not required.
  clinical_review_required: false,
  ai_refinement_allowed: false,
  evidence_required: [],

  status: 'active',
  effective_at: '2026-05-10T00:00:00Z',
  test_renders: [],
  rationale_note:
    'Fifth typed Template, first in the fulfillment_lifecycle domain ' +
    'folder. Migrates the v0 shipped case (PATIENT_NOTIFY_BY_STATUS ' +
    "map entry + lib/notifications/patientMessages.ts case 'shipped' " +
    'arms). tier_2 low_context_phi operational intent; pathway-' +
    'agnostic at the Template layer (the producer site filters to ' +
    'glp1_primary today; the Template wording is independent of ' +
    'pathway). Wording preserved verbatim (already tier_2 compliant); ' +
    'brand sourcing rewritten to typed brand_short_label slot per ADR ' +
    'Section 7.5. transactional_critical: false (cadence-bypass NOT ' +
    'defensible for shipping notification per the same axis-separation ' +
    'reasoning locked on the prior four Templates — operational ' +
    'importance and cadence-bypass are separate axes). Per system-map ' +
    '## Platform operational model doctrine: lives in fulfillment_' +
    'lifecycle (NOT clinical_decision) because orders/fulfillment is a ' +
    'first-class sibling under Patient, NOT a sub-shape of clinical-' +
    'decision-cases. Wording diff log per ADR Section 7.5 lives in the ' +
    'commit message body.',

  // Section 1Q.17 privacy + governance.
  privacy_exposure_level: 2, // low_context_phi
  message_intent: 'operational',
  outside_secure_render_strategy: 'mention_brand_only',
  secure_view_render_strategy: 'full_detail_default',
  safety_critical_override_allowed: false,
  // Body has actionable cue ("Tracking details are available in your dashboard.").
  action_context_required: true,

  // Section 1Q.21 marketing lifecycle extensions.
  // 'none' matches the prior four Template precedent — optional
  // first_name greeting is greeting-decoration, not behavioral /
  // contextual / sensitive personalization in the Section 1Q.21
  // 5-level taxonomy.
  personalization_level: 'none',
  // Pathway-agnostic at the Template layer — the rule may scope to
  // specific program types via the producer-site filter, but the
  // Template wording does not name any pathway and is compatible with
  // all sensitivity buckets.
  pathway_sensitivity_compatibility: ['low', 'moderate', 'high', 'extreme'],
  // BINDING: see file-level comment + rationale_note. transactional_critical
  // = false because cadence-bypass is NOT defensible for a shipping
  // notification. Future safety-window suppression SHOULD be allowed
  // to honor itself for this notification (during an active adverse-
  // event review, the system shouldn't keep firing "your order
  // shipped" pings while a provider re-reviews). Operational semantics
  // carried by recall_severity='operational' + authority_floor='system'
  // on the companion Rule + message_intent='operational'.
  transactional_critical: false,

  // Section 1Q.23 hybrid care delivery extensions.
  interaction_context_compatibility: ['both'],
  // Shipping is a discrete fulfillment event; not subject to in-person
  // redundancy collapse (the patient was not separately told their
  // order shipped during an in-person visit — this is the canonical
  // surface for that information).
  interaction_context_redundancy_check: false,
}
