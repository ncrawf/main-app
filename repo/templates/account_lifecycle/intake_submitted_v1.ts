/**
 * Phase 4H-templates-discipline commit 1 — intake_submitted Template.
 *
 * Companion to repo/rules/account_lifecycle/intake_submitted_v1.ts.
 *
 * Per Section 1Q.5 + 1Q.17 + ADR Section 7.5 cutover discipline:
 *   - All required fields declared (no grandfathering).
 *   - tier_1 existence_only (no PHI; confirms intake was received).
 *   - message_intent: 'account' (matches the Rule's action.message_intent).
 *   - outside_secure_render_strategy: 'mention_brand_only' (renders
 *     brand label without naming pathway / clinical content).
 *   - Brand sourced from typed multi-tenant primitives (brands table)
 *     via the brand_short_label slot at render time.
 *   - All wording carried forward verbatim from legacy because legacy
 *     wording is already tier_1 compliant (no PHI, no pathway named,
 *     no clinical content, no diagnosis, no outcome promise).
 *
 * Wording strategy (per ADR Section 7.5):
 *   - Email subject / preview / eyebrow / heading / intro / detail:
 *     legacy wording preserved verbatim — already tier_1 compliant.
 *   - Email brand_footer: rewritten to source from brands.slug per
 *     ADR Section 7.5 multi-tenant rule. Renders byte-identical "MAIN"
 *     for the existing brand.
 *   - SMS body: rewritten to source brand prefix from brands.slug. For
 *     brands.slug = 'main' the rendered output "MAIN: Intake received."
 *     is byte-identical to legacy.
 *
 * The full wording diff log lives in the commit message body.
 */

import type { Template } from '../types'

export const intakeSubmittedTemplateV1: Template = {
  template_key: 'tmpl.account_lifecycle.intake_submitted_v1',
  template_version: '1.0.0',
  domain: 'account_lifecycle',
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
        'rule. Replaces legacy hardcoded "MAIN:" SMS prefix and ' +
        'env-default email theme brandName.',
    },
    {
      name: 'dashboard_url',
      type: 'url',
      required: true,
      doc: 'Patient dashboard deep link (signed if applicable).',
    },
  ],
  optional_variables: [
    {
      name: 'patient_first_name',
      type: 'string',
      required: false,
      doc:
        'Patient first name for email greeting; absent / empty falls ' +
        'back to "Hi," (matches legacy greeting helper behavior).',
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
  effective_at: '2026-05-08T00:00:00Z',
  test_renders: [],
  rationale_note:
    'Second typed Template, migrating the v0 intake_submitted case. ' +
    'tier_1 existence_only account intent; pathway-agnostic. Wording ' +
    'preserved verbatim (already tier_1 compliant); brand sourcing ' +
    'rewritten to typed brand_short_label slot per ADR Section 7.5. ' +
    'No paymentSummary-style free-form interpolation in the legacy ' +
    'EmailBody literals, so no required_variables typing diff vs legacy ' +
    '(unlike commit 5 which replaced free-form paymentSummary). Wording ' +
    'diff log per ADR Section 7.5 lives in the commit message body.',

  // Section 1Q.17 privacy + governance.
  privacy_exposure_level: 1, // existence_only
  message_intent: 'account',
  outside_secure_render_strategy: 'mention_brand_only',
  secure_view_render_strategy: 'full_detail_default',
  safety_critical_override_allowed: false,
  action_context_required: true, // body has actionable cue ("keep you posted" + dashboard CTA)

  // Section 1Q.21 marketing lifecycle extensions.
  personalization_level: 'none',
  // Intake_submitted is pathway-agnostic — fires regardless of which
  // pathway the patient submitted intake for (only glp1-intake today,
  // but architecturally the Template is independent of pathway sensitivity).
  pathway_sensitivity_compatibility: ['low', 'moderate', 'high', 'extreme'],
  // Account-onboarding ack is transactional_critical: the patient
  // submitting intake expects acknowledgment regardless of cadence
  // suppression windows (1Q.21 marketing exclusion windows do not apply).
  transactional_critical: true,

  // Section 1Q.23 hybrid care delivery extensions.
  interaction_context_compatibility: ['both'],
  // Distinct event from any in-person interaction (intake submission
  // is the event itself); does not get suppressed by the in-person
  // redundancy window.
  interaction_context_redundancy_check: false,
}
