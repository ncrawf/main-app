/**
 * Phase 4H-templates-discipline commit 5 — active_care Template.
 *
 * Companion to repo/rules/clinical_decision/active_care_v1.ts.
 *
 * Sixth typed Template overall; third in the clinical_decision domain
 * (siblings: case_approved_v1, awaiting_clinical_review_v1). Same
 * shape as awaiting_clinical_review_v1:
 *   - tier_1 existence_only
 *   - message_intent: 'operational'
 *   - authority_floor: 'system' on the companion Rule
 *
 * Per Section 1Q.5 + 1Q.17 + ADR Section 7.5 cutover discipline:
 *   - All required fields declared (no grandfathering).
 *   - tier_1 existence_only — references "active care" + "current
 *     plan" + "check-ins" + "next steps" without naming protocol,
 *     dose, condition, or pathway.
 *   - message_intent: 'operational' (matches the Rule's
 *     action.message_intent).
 *   - outside_secure_render_strategy: 'mention_brand_only'.
 *   - Brand sourced from typed multi-tenant primitives via the
 *     brand_short_label slot. The legacy intro line "You are now in
 *     active care with MAIN." has the brand embedded inline; the
 *     typed Template renders this as "You are now in active care
 *     with ${brand_short_label}." For brands.slug='main' the
 *     rendered output is byte-identical.
 *
 * GOVERNED EQUIVALENCE NOT BYTE-LEVEL (per ADR Section 7.5 cutover
 * discipline): the parity test asserts canonical governed output, not
 * byte-identical legacy preservation. For this Template the governed
 * and legacy outputs are identical for brands.slug='main' because
 * legacy wording was already governance-compliant.
 *
 * `transactional_critical: false` (BINDING per the same axis-
 * separation reasoning locked on the prior Templates): cadence-bypass
 * is NOT defensible for a welcome/active-care status ack. If Step 4
 * safety orchestration ever suppresses normal traffic during an
 * active safety window, this notification SHOULD honor the
 * suppression.
 */

import type { Template } from '../types'

export const activeCareTemplateV1: Template = {
  template_key: 'tmpl.clinical_decision.active_care_v1',
  template_version: '1.0.0',
  domain: 'clinical_decision',
  allowed_use: 'patient_facing',
  channels: ['email', 'sms'],

  required_variables: [
    {
      name: 'brand_short_label',
      type: 'string',
      required: true,
      doc:
        'Brand prefix for SMS + email logo + email footer + intro line. ' +
        'Sourced from brands.slug.toUpperCase() per ADR Section 7.5 ' +
        'multi-tenant rule. The legacy intro embedded "MAIN" inline; the ' +
        'typed slot replaces that with the real brand label.',
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
  clinical_review_required: false,
  ai_refinement_allowed: false,
  evidence_required: [],

  status: 'active',
  effective_at: '2026-05-10T00:00:00Z',
  test_renders: [],
  rationale_note:
    'Sixth typed Template, third in the clinical_decision domain. ' +
    'Migrates the v0 active_care case (PATIENT_NOTIFY_BY_STATUS ' +
    "`active: 'active_care'` map entry + lib/notifications/" +
    "patientMessages.ts case 'active_care' arms). tier_1 existence_only " +
    'operational intent; pathway-agnostic at the Template layer. The ' +
    'producer-site filters at lib/internal/patient-case/impl.ts gate ' +
    'to glp1_primary treatment_items + weight_loss care_programs ' +
    '(preserving legacy behavior). Wording preserved verbatim with one ' +
    'multi-tenant rewrite: legacy intro line "You are now in active ' +
    'care with MAIN." renders as "You are now in active care with ' +
    '${brand_short_label}." per ADR Section 7.5. transactional_' +
    'critical: false. Wording diff log per ADR Section 7.5 lives in the ' +
    'commit message body.',

  // Section 1Q.17 privacy + governance.
  privacy_exposure_level: 1, // existence_only
  message_intent: 'operational',
  outside_secure_render_strategy: 'mention_brand_only',
  secure_view_render_strategy: 'full_detail_default',
  safety_critical_override_allowed: false,
  // Body has actionable cue ("Your dashboard includes your current plan...").
  action_context_required: true,

  // Section 1Q.21 marketing lifecycle extensions.
  personalization_level: 'none',
  pathway_sensitivity_compatibility: ['low', 'moderate', 'high', 'extreme'],
  transactional_critical: false,

  // Section 1Q.23 hybrid care delivery extensions.
  interaction_context_compatibility: ['both'],
  // Active-care welcome is a discrete status event; not subject to
  // in-person redundancy collapse (the patient was not separately told
  // their care is active during an in-person visit — this is the
  // canonical surface for that information).
  interaction_context_redundancy_check: false,
}
