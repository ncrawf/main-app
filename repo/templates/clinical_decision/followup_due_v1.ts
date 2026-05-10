/**
 * Phase 4H-templates-discipline commit 6 — followup_due Template.
 *
 * Companion to repo/rules/clinical_decision/followup_due_v1.ts.
 *
 * Seventh typed Template overall; fourth in the clinical_decision
 * domain (siblings: case_approved_v1, awaiting_clinical_review_v1,
 * active_care_v1). Same shape as awaiting_clinical_review_v1 +
 * active_care_v1: tier_1 existence_only, operational intent,
 * system-authority on the companion Rule.
 *
 * Per Section 1Q.5 + 1Q.17 + ADR Section 7.5 cutover discipline:
 *   - All required fields declared (no grandfathering).
 *   - tier_1 existence_only — references "check-in", "follow-up",
 *     "due tasks", "dashboard" without naming protocol, dose,
 *     condition, or pathway.
 *   - message_intent: 'operational'.
 *   - outside_secure_render_strategy: 'mention_brand_only'.
 *   - Brand sourced from typed multi-tenant primitives via the
 *     brand_short_label slot. NO inline brand interpolation in the
 *     body text (unlike active_care_v1 which embedded brand mid-body).
 *     Brand only at SMS prefix + email logo + email footer.
 *
 * GOVERNED EQUIVALENCE NOT BYTE-LEVEL (per ADR Section 7.5 cutover
 * discipline). For brands.slug='main' the rendered output is
 * byte-identical to legacy because legacy wording was already
 * governance-compliant.
 *
 * `transactional_critical: false` (BINDING per the same axis-
 * separation reasoning locked on the prior Templates).
 */

import type { Template } from '../types'

export const followupDueTemplateV1: Template = {
  template_key: 'tmpl.clinical_decision.followup_due_v1',
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
        'Brand prefix for SMS + email logo + email footer. Sourced from ' +
        'brands.slug.toUpperCase() per ADR Section 7.5 multi-tenant rule.',
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
      doc: 'Patient first name for greeting; absent / empty falls back to "Hi,".',
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
    'Seventh typed Template, fourth in the clinical_decision domain. ' +
    'Migrates the v0 followup_due case (PATIENT_NOTIFY_BY_STATUS ' +
    "`refill_due: 'followup_due'` map entry + lib/notifications/" +
    "patientMessages.ts case 'followup_due' arms). tier_1 existence_only " +
    'operational intent; pathway-agnostic at the Template layer. The ' +
    'producer-site filters at lib/internal/patient-case/impl.ts gate ' +
    'to glp1_primary treatment_items (preserving legacy behavior). ' +
    'Wording preserved verbatim; brand sourcing rewritten to typed ' +
    'brand_short_label slot per ADR Section 7.5 (SMS prefix + email ' +
    'logo + email footer only — no inline brand interpolation in the ' +
    'body text). transactional_critical: false. Wording diff log per ' +
    'ADR Section 7.5 lives in the commit message body.',

  // Section 1Q.17 privacy + governance.
  privacy_exposure_level: 1, // existence_only
  message_intent: 'operational',
  outside_secure_render_strategy: 'mention_brand_only',
  secure_view_render_strategy: 'full_detail_default',
  safety_critical_override_allowed: false,
  // Body has actionable cue ("Please complete any due tasks in your dashboard.").
  action_context_required: true,

  // Section 1Q.21 marketing lifecycle extensions.
  personalization_level: 'none',
  pathway_sensitivity_compatibility: ['low', 'moderate', 'high', 'extreme'],
  transactional_critical: false,

  // Section 1Q.23 hybrid care delivery extensions.
  interaction_context_compatibility: ['both'],
  // Check-in reminder is a discrete operational event; not subject
  // to in-person redundancy collapse (the patient was not separately
  // told their check-in is due during an in-person visit — this is
  // the canonical surface for that information).
  interaction_context_redundancy_check: false,
}
