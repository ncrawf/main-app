/**
 * Phase 4H-templates-discipline commit 7 — followup_needed Template.
 *
 * Companion to repo/rules/clinical_decision/followup_needed_v1.ts.
 *
 * Eighth typed Template overall; fifth in the clinical_decision
 * domain (siblings: case_approved_v1, awaiting_clinical_review_v1,
 * active_care_v1, followup_due_v1). Same shape as
 * awaiting_clinical_review_v1 + active_care_v1 + followup_due_v1:
 * tier_1 existence_only, operational intent, system-authority on the
 * companion Rule.
 *
 * Per Section 1Q.5 + 1Q.17 + ADR Section 7.5 cutover discipline:
 *   - All required fields declared.
 *   - tier_1 existence_only — references "info needed", "case
 *     moving", "steps in dashboard" without naming protocol, dose,
 *     condition, or pathway.
 *   - message_intent: 'operational'.
 *   - outside_secure_render_strategy: 'mention_brand_only'.
 *   - Brand sourced from typed brand_short_label slot. NO inline
 *     brand interpolation in body text (mirrors followup_due c6).
 *
 * `transactional_critical: false` (BINDING per the same axis-
 * separation reasoning locked on the prior Templates).
 */

import type { Template } from '../types'

export const followupNeededTemplateV1: Template = {
  template_key: 'tmpl.clinical_decision.followup_needed_v1',
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
    'Eighth typed Template, fifth in the clinical_decision domain. ' +
    'Migrates the v0 followup_needed case (4 PATIENT_NOTIFY_BY_STATUS ' +
    'map entries: paused/completed/cancelled/stopped + lib/' +
    "notifications/patientMessages.ts case 'followup_needed' arms). " +
    'tier_1 existence_only operational intent; pathway-agnostic. ' +
    'Producer-site filters at lib/internal/patient-case/impl.ts gate ' +
    'to glp1_primary / weight_loss with ASYMMETRIC status sets per ' +
    'producer (treatment_items: paused | stopped; care_programs: ' +
    'paused | completed | cancelled). transactional_critical: false. ' +
    'Wording preserved verbatim; brand sourcing rewritten to typed ' +
    'brand_short_label slot per ADR Section 7.5. Wording diff log per ' +
    'ADR Section 7.5 lives in the commit message body.',

  // Section 1Q.17 privacy + governance.
  privacy_exposure_level: 1, // existence_only
  message_intent: 'operational',
  outside_secure_render_strategy: 'mention_brand_only',
  secure_view_render_strategy: 'full_detail_default',
  safety_critical_override_allowed: false,
  // Body has actionable cue ("Please complete the requested steps in your dashboard.").
  action_context_required: true,

  // Section 1Q.21 marketing lifecycle extensions.
  personalization_level: 'none',
  pathway_sensitivity_compatibility: ['low', 'moderate', 'high', 'extreme'],
  transactional_critical: false,

  // Section 1Q.23 hybrid care delivery extensions.
  interaction_context_compatibility: ['both'],
  // Action-needed reminder is a discrete operational event; not
  // subject to in-person redundancy collapse (the patient was not
  // separately told what info is needed during an in-person visit
  // — this is the canonical surface for that information).
  interaction_context_redundancy_check: false,
}
