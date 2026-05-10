/**
 * Phase 4H-templates-discipline commit 8 — refill_initiated Template.
 *
 * Companion to repo/rules/pharmacy_lifecycle/refill_initiated_v1.ts.
 *
 * Tenth typed Template overall; SECOND in the pharmacy_lifecycle
 * domain folder. Sibling of rx_sent_v1; ships in the same commit.
 *
 * Per the system-map `## Platform operational model` doctrine:
 *   pharmacy lifecycle is a first-class sibling under Patient;
 *   the type system encodes the sibling-domain home regardless
 *   of producer-site transitional locality.
 *
 * Migrates the v0 `refill_pending` notification (legacy
 * `PATIENT_NOTIFY_BY_STATUS` map entry + `case 'refill_pending'`
 * arms in patientMessages.ts) per Section 1Q.4 + 1Q.5 + ADR
 * Section 7.5 + Section 1Q.12 DELETE-AFTER-PARITY.
 *
 * The Template key uses `refill_initiated_v1` (matching the
 * companion Rule's discriminant value) rather than the legacy
 * status name `refill_pending` — see rx_sent_v1 + the rule's
 * rationale for the discriminant-naming reasoning.
 *
 * Architectural shape mirrors rx_sent_v1: tier_2 / operational /
 * `transactional_critical: false` / brand_short_label slot /
 * patient_first_name optional.
 *
 * Per Section 1Q.5 + 1Q.17 + ADR Section 7.5 cutover discipline:
 *   - All required fields declared.
 *   - tier_2 low_context_phi: legacy body referenced "refill",
 *     "care plan", "dashboard". No protocol naming, no dose, no
 *     condition, no pathway, but carries the implicit signal that
 *     a refill is in motion.
 *   - message_intent: 'operational'.
 *   - outside_secure_render_strategy: 'mention_brand_only'.
 *   - Brand sourced from typed brand_short_label slot.
 *
 * `transactional_critical: false` (BINDING).
 *
 * Wording strategy:
 *   - Email subject / preview / eyebrow / heading / intro / detail:
 *     legacy wording preserved verbatim from `case 'refill_pending'`
 *     in patientMessages.ts.
 *   - Email brand_footer: rewritten to source from brands.slug
 *     per ADR Section 7.5.
 *   - SMS body: rewritten to source brand prefix from brands.slug.
 *     Renders byte-identical "MAIN: Refill update. <url>" for the
 *     existing brand.
 */

import type { Template } from '../types'

export const refillInitiatedTemplateV1: Template = {
  template_key: 'tmpl.pharmacy_lifecycle.refill_initiated_v1',
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
  clinical_review_required: false,
  ai_refinement_allowed: false,
  evidence_required: [],

  status: 'active',
  effective_at: '2026-05-10T00:00:00Z',
  test_renders: [],
  rationale_note:
    'Tenth typed Template, second in the pharmacy_lifecycle domain ' +
    'folder. Migrates the v0 refill_pending case (PATIENT_NOTIFY_BY_' +
    "STATUS map entry + lib/notifications/patientMessages.ts case " +
    "'refill_pending' arms). tier_2 low_context_phi operational " +
    'intent; pathway-agnostic at the Template layer. Wording ' +
    'preserved verbatim; brand sourcing rewritten to typed brand_' +
    'short_label slot per ADR Section 7.5. transactional_critical: ' +
    'false. Wording diff log per ADR Section 7.5 lives in the ' +
    'commit message body.',

  // Section 1Q.17 privacy + governance.
  privacy_exposure_level: 2, // low_context_phi
  message_intent: 'operational',
  outside_secure_render_strategy: 'mention_brand_only',
  secure_view_render_strategy: 'full_detail_default',
  safety_critical_override_allowed: false,
  // Body has actionable cue ("Please review current details in your dashboard.").
  action_context_required: true,

  // Section 1Q.21 marketing lifecycle extensions.
  personalization_level: 'none',
  pathway_sensitivity_compatibility: ['low', 'moderate', 'high', 'extreme'],
  transactional_critical: false,

  // Section 1Q.23 hybrid care delivery extensions.
  interaction_context_compatibility: ['both'],
  // Refill initiation is a discrete pharmacy event; not subject to
  // in-person redundancy collapse.
  interaction_context_redundancy_check: false,
}
