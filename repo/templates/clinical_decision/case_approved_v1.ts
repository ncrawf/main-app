/**
 * Phase 4H-templates-discipline commit 2 — case_approved Template.
 *
 * Companion to repo/rules/clinical_decision/case_approved_v1.ts.
 *
 * FIRST clinical + provider-authority Template in the registry. The
 * existing two (payment_received billing, intake_submitted account)
 * are system-authority. This Template is the first that ships
 * `message_intent: 'clinical'` + (via the companion Rule)
 * `authority_floor: 'provider'`.
 *
 * Per Section 1Q.5 + 1Q.17 + ADR Section 7.5 cutover discipline:
 *   - All required fields declared (no grandfathering).
 *   - tier_2 low_context_phi: legacy wording references "clinician" +
 *     "case" + "next steps" but does NOT name protocol, dose,
 *     condition, or pathway. Honest tier_2 — not tier_3.
 *   - message_intent: 'clinical' (matches the Rule's action.message_intent).
 *   - outside_secure_render_strategy: 'mention_brand_only' (renders
 *     "clinician has approved" / "case approved" without naming the
 *     underlying protocol; the legacy "Clinical decision" eyebrow + body
 *     references "clinician" generically, which is consistent with the
 *     'mention_brand_only' contract — no pathway name leaks outside-
 *     secure).
 *   - Brand sourced from typed multi-tenant primitives via the
 *     brand_short_label slot.
 *   - Wording carried forward verbatim from legacy because legacy
 *     wording is already tier_2 compliant.
 *
 * GOVERNED EQUIVALENCE NOT BYTE-LEVEL (per ADR Section 7.5 cutover
 * discipline + pre-execution refinement #2): the parity test asserts
 * canonical governed output, not byte-identical legacy preservation.
 * For this Template the governed and legacy outputs are identical
 * because legacy wording was already governance-compliant; the test
 * surface is the same either way.
 *
 * `transactional_critical: false` (BINDING per pre-execution refinement
 * #3): the flag is a CADENCE-BYPASS flag, not a "this is important"
 * flag. case_approved carries real clinical authority but is NOT
 * cadence-bypass critical. If Step 4 safety orchestration ever
 * suppresses normal traffic during an active safety window (e.g.,
 * recent serious adverse event flagged after the approval), this
 * notification SHOULD honor the suppression while a provider re-reviews.
 * Forcing transactional_critical: true would override that. Clinical-
 * authority semantics live on the Rule (`authority_floor: 'provider'`,
 * `recall_severity: 'clinical_significant'`) + the Template's
 * `message_intent: 'clinical'`. Cadence-bypass and clinical authority
 * are separate axes.
 *
 * Wording strategy:
 *   - Email subject / preview / eyebrow / heading / intro / detail:
 *     legacy wording preserved verbatim — already tier_2 compliant.
 *   - Email brand_footer: rewritten to source from brands.slug per
 *     ADR Section 7.5 multi-tenant rule.
 *   - SMS body: rewritten to source brand prefix from brands.slug.
 *     Renders byte-identical "MAIN: Case approved." for the existing
 *     brand.
 *
 * Dual-codeowner co-sign: this is a tier_2 clinical Template; per
 * Section 1Q.5 binding rule the change requires both clinical and
 * compliance CODEOWNER review on the PR — covered by the existing
 * /repo/templates/ CODEOWNERS gate at .github/CODEOWNERS.
 */

import type { Template } from '../types'

export const caseApprovedTemplateV1: Template = {
  template_key: 'tmpl.clinical_decision.case_approved_v1',
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
  // Clinical-authority Template; PR review covers clinical CODEOWNER
  // co-sign. Runtime clinical_review per send is not required (the
  // approval mutation IS the provider's review; the notification
  // confirms it).
  clinical_review_required: false,
  ai_refinement_allowed: false,
  evidence_required: [],

  status: 'active',
  effective_at: '2026-05-08T00:00:00Z',
  test_renders: [],
  rationale_note:
    'Third typed Template, first with clinical message_intent. Migrates ' +
    'the v0 case_approved case (PATIENT_NOTIFY_BY_STATUS map entry + ' +
    'lib/notifications/patientMessages.ts case_approved arms). tier_2 ' +
    'low_context_phi clinical intent; pathway-agnostic at the Template ' +
    'layer (the producer site filters to glp1_primary / weight_loss ' +
    'today; the Template itself is independent of pathway). Wording ' +
    'preserved verbatim (already tier_2 compliant); brand sourcing ' +
    'rewritten to typed brand_short_label slot per ADR Section 7.5. ' +
    'transactional_critical: false (cadence-bypass NOT defensible for ' +
    'case approval per pre-execution refinement #3 — clinical-authority ' +
    'metadata lives on the Rule + message_intent, not on the cadence ' +
    'bypass flag). Wording diff log per ADR Section 7.5 lives in the ' +
    'commit message body.',

  // Section 1Q.17 privacy + governance.
  privacy_exposure_level: 2, // low_context_phi
  message_intent: 'clinical',
  outside_secure_render_strategy: 'mention_brand_only',
  secure_view_render_strategy: 'full_detail_default',
  safety_critical_override_allowed: false,
  // Body has actionable cue ("Next steps are ready in your dashboard.").
  action_context_required: true,

  // Section 1Q.21 marketing lifecycle extensions.
  // 'none' matches the intake_submitted precedent — optional first_name
  // greeting is greeting-decoration, not behavioral / contextual / sensitive
  // personalization in the Section 1Q.21 5-level taxonomy.
  personalization_level: 'none',
  // Pathway-agnostic at the Template layer — the rule may scope to
  // specific program types via the producer-site filter, but the
  // Template wording does not name any pathway and is compatible with
  // all sensitivity buckets.
  pathway_sensitivity_compatibility: ['low', 'moderate', 'high', 'extreme'],
  // BINDING: see file-level comment + rationale_note. transactional_critical
  // = false because cadence-bypass is NOT defensible for case approval.
  // Clinical authority is carried by the Rule (authority_floor + recall_severity)
  // + the Template's message_intent. Future safety-window suppression
  // SHOULD be allowed to honor itself for this notification.
  transactional_critical: false,

  // Section 1Q.23 hybrid care delivery extensions.
  interaction_context_compatibility: ['both'],
  // Case-approval is a discrete clinical-decision event; not subject
  // to in-person redundancy collapse (the patient has not separately
  // been told their case was approved in person — this is the canonical
  // surface for that information).
  interaction_context_redundancy_check: false,
}
