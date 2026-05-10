/**
 * Phase 4H-templates-discipline commit 9 — case_denied Template.
 * FINAL legacy v0 notification migration.
 *
 * Companion to repo/rules/clinical_decision/case_denied_v1.ts.
 *
 * Eleventh typed Template overall; sixth in clinical_decision
 * (siblings: case_approved_v1, awaiting_clinical_review_v1,
 * active_care_v1, followup_due_v1, followup_needed_v1).
 *
 * Architectural shape mirrors awaiting_clinical_review_v1 +
 * followup_needed_v1: tier_1 existence_only / operational intent /
 * `transactional_critical: false`. Brand sourced from typed
 * brand_short_label slot per ADR Section 7.5; NO inline brand
 * interpolation in body.
 *
 * Per Section 1Q.5 + 1Q.17 + ADR Section 7.5 cutover discipline:
 *   - All required fields declared.
 *   - tier_1 existence_only — references "visit", "update",
 *     "dashboard" without naming protocol, dose, condition, or
 *     pathway, AND without any denial reason text (no
 *     `denial_reason` field exists today).
 *   - message_intent: 'operational'.
 *   - outside_secure_render_strategy: 'mention_brand_only'.
 *   - Wording carried forward verbatim from legacy because legacy
 *     wording was already tier_1 compliant.
 *
 * `transactional_critical: false` (BINDING) — cadence-bypass not
 * defensible for an informational case-status update.
 *
 * ============================================================
 * DENIED SEMANTIC SCOPE (anti-overload binding — pinned reference)
 * ============================================================
 *
 * This Template renders ONLY a provider clinical-decision denial
 * (treatment_item or care_program request denied by licensed
 * clinician). It is NOT for:
 *   - Payer adjudication / claim denial (future revenue_cycle/)
 *   - Prior authorization denial (future authorization_lifecycle/)
 *   - Refill denial by provider (pharmacy_lifecycle/, slot reserved)
 *   - Refill denial by pharmacy / insurance (TBD sibling)
 *   - Identity-verification denial (account_lifecycle/)
 *   - Capability/permission denial (audit-only, NOT a notification)
 *
 * See companion Rule file header + PREFLIGHT_2026-05-10_phase_4h_
 * templates_discipline_c9_case_denied.md §1A for the full binding
 * and sibling-domain assignments.
 * ============================================================
 *
 * Wording strategy:
 *   - Email subject `'Update on your ${brand_short_label} visit'`
 *     uses typed slot (legacy hardcoded 'Update on your MAIN visit'
 *     per ADR Section 7.5 multi-tenant rule).
 *   - All other email body literals (preview / eyebrow / heading /
 *     intro / detail) byte-identical to legacy.
 *   - SMS body matches legacy "MAIN: Update on your visit. <url>"
 *     pattern; brand prefix typed via brand_short_label.
 */

import type { Template } from '../types'

export const caseDeniedTemplateV1: Template = {
  template_key: 'tmpl.clinical_decision.case_denied_v1',
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
        'Brand prefix for SMS + email logo + email footer + email ' +
        'subject ("Update on your ${brand_short_label} visit"). ' +
        'Sourced from brands.slug.toUpperCase() per ADR Section 7.5 ' +
        'multi-tenant rule.',
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
    'FINAL typed Template, sixth in the clinical_decision domain. ' +
    'Migrates the v0 case_denied case (PATIENT_NOTIFY_BY_STATUS map ' +
    "entry + lib/notifications/patientMessages.ts case 'case_denied' " +
    'arms). SCOPE BINDING: provider clinical-decision denial only. ' +
    'Not a payer / prior_auth / refill / identity-verification / ' +
    'capability denial — those will eventually live in their own ' +
    'sibling-domain folders. See file header DENIED SEMANTIC SCOPE ' +
    'block + PREFLIGHT_2026-05-10_phase_4h_templates_discipline_c9_' +
    'case_denied.md §1A for the full binding. tier_1 existence_only ' +
    'operational intent; pathway-agnostic. Wording preserved ' +
    'verbatim (already tier_1 compliant; no denial_reason field ' +
    'exists in the legacy schema, so there is nothing to redact); ' +
    'brand sourcing rewritten to typed brand_short_label slot per ' +
    'ADR Section 7.5 (legacy email subject "Update on your MAIN ' +
    'visit" rewires to "Update on your ${brand_short_label} visit"). ' +
    'transactional_critical: false. Wording diff log per ADR ' +
    'Section 7.5 lives in the commit message body.',

  // Section 1Q.17 privacy + governance.
  privacy_exposure_level: 1, // existence_only
  message_intent: 'operational',
  outside_secure_render_strategy: 'mention_brand_only',
  secure_view_render_strategy: 'full_detail_default',
  safety_critical_override_allowed: false,
  // Body has actionable cue ("Please review details and next steps in your dashboard.").
  action_context_required: true,

  // Section 1Q.21 marketing lifecycle extensions.
  personalization_level: 'none',
  pathway_sensitivity_compatibility: ['low', 'moderate', 'high', 'extreme'],
  transactional_critical: false,

  // Section 1Q.23 hybrid care delivery extensions.
  interaction_context_compatibility: ['both'],
  // Case denial is a discrete clinical-decision event; not subject
  // to in-person redundancy collapse (the patient was not separately
  // told their case was denied during an in-person visit — this is
  // the canonical surface for that information).
  interaction_context_redundancy_check: false,
}
