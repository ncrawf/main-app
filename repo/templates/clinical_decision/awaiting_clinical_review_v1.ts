/**
 * Phase 4H-templates-discipline commit 3 — awaiting_clinical_review Template.
 *
 * Companion to repo/rules/clinical_decision/awaiting_clinical_review_v1.ts.
 *
 * Fourth typed Template overall; second in the clinical_decision
 * domain (sibling to case_approved_v1). Distinct from case_approved
 * in three ways:
 *   - tier_1 existence_only (vs case_approved tier_2 low_context_phi)
 *   - `message_intent: 'operational'` (vs case_approved 'clinical')
 *   - `authority_floor: 'system'` on the companion Rule (vs case_approved
 *     'provider')
 *
 * The notification is a system-emitted status acknowledgment, not a
 * provider authority statement. Wording confirms the case is in queue
 * waiting for a clinician — no clinical content, no protocol naming,
 * no decision communicated.
 *
 * Per Section 1Q.5 + 1Q.17 + ADR Section 7.5 cutover discipline:
 *   - All required fields declared (no grandfathering).
 *   - tier_1 existence_only — references "visit" + "case" + "clinician"
 *     + "decision" without naming protocol, dose, condition, or pathway.
 *   - message_intent: 'operational' (matches the Rule's action.message_intent).
 *   - outside_secure_render_strategy: 'mention_brand_only'.
 *   - Brand sourced from typed multi-tenant primitives via the
 *     brand_short_label slot.
 *   - Wording carried forward verbatim from legacy because legacy
 *     wording is already tier_1 compliant.
 *
 * GOVERNED EQUIVALENCE NOT BYTE-LEVEL (per ADR Section 7.5 cutover
 * discipline + the c2 case_approved precedent): the parity test asserts
 * canonical governed output, not byte-identical legacy preservation.
 * For this Template the governed and legacy outputs are identical
 * because legacy wording was already governance-compliant.
 *
 * `transactional_critical: false` (BINDING per the same axis-separation
 * reasoning that locked it false on case_approved_v1): the flag is a
 * CADENCE-BYPASS flag, not a "this is important" flag. A status
 * acknowledgment is NOT cadence-bypass critical; if Step 4 safety
 * orchestration ever suppresses normal traffic during an active
 * safety window, this notification SHOULD honor the suppression
 * (firing "your case is in clinical review" pings during a flagged
 * adverse event review would be wrong). Status-update semantics live
 * on the Rule's `recall_severity: 'operational'` + Template's
 * `message_intent: 'operational'`.
 *
 * Wording strategy:
 *   - Email subject / preview / eyebrow / heading / intro / detail:
 *     legacy wording preserved verbatim — already tier_1 compliant.
 *   - Email brand_footer: rewritten to source from brands.slug per
 *     ADR Section 7.5 multi-tenant rule.
 *   - SMS body: rewritten to source brand prefix from brands.slug.
 *     Renders byte-identical "MAIN: In clinical review." for the
 *     existing brand.
 */

import type { Template } from '../types'

export const awaitingClinicalReviewTemplateV1: Template = {
  template_key: 'tmpl.clinical_decision.awaiting_clinical_review_v1',
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
  // Operational status ack; no clinical content. Runtime
  // clinical_review per send is not required.
  clinical_review_required: false,
  ai_refinement_allowed: false,
  evidence_required: [],

  status: 'active',
  effective_at: '2026-05-10T00:00:00Z',
  test_renders: [],
  rationale_note:
    'Fourth typed Template, second in the clinical_decision domain. ' +
    'Migrates the v0 awaiting_clinical_review case (PATIENT_NOTIFY_BY_STATUS ' +
    'map BOTH `under_review:` AND `pending_approval:` entries + ' +
    "lib/notifications/patientMessages.ts case 'awaiting_clinical_review'). " +
    'tier_1 existence_only operational intent; pathway-agnostic. The ' +
    'producer-site filters at lib/internal/patient-case/impl.ts gate ' +
    'to glp1_primary treatment_items + weight_loss care_programs ' +
    '(preserving legacy behavior); the Rule layer does not double-' +
    'filter, so pathway_scope is undefined and pathway_sensitivity ' +
    'is null on enqueue (correct for tier_1; the disclosure-policy ' +
    'clamp does not read it). Idempotency keyed on the underlying ' +
    'status-transition audit_event_id (so a case bouncing pending -> ' +
    'under_review -> pending_approval -> under_review emits one ' +
    'notification per genuine transition; preserves legacy from->to ' +
    'dedupe behavior). transactional_critical: false on the Template ' +
    'per the same axis-separation reasoning that locked it false on ' +
    'case_approved_v1 — cadence-bypass is a separate axis from ' +
    'operational/clinical importance. Wording diff log per ADR Section ' +
    '7.5 lives in the commit message body.',

  // Section 1Q.17 privacy + governance.
  privacy_exposure_level: 1, // existence_only
  message_intent: 'operational',
  outside_secure_render_strategy: 'mention_brand_only',
  secure_view_render_strategy: 'full_detail_default',
  safety_critical_override_allowed: false,
  // Body has actionable cue ("we will send another update").
  action_context_required: true,

  // Section 1Q.21 marketing lifecycle extensions.
  // 'none' matches the intake_submitted + case_approved precedent.
  // Optional first_name greeting is greeting-decoration, not
  // behavioral / contextual / sensitive personalization.
  personalization_level: 'none',
  // Pathway-agnostic at the Template layer.
  pathway_sensitivity_compatibility: ['low', 'moderate', 'high', 'extreme'],
  // BINDING: see file-level comment + rationale_note. transactional_critical
  // = false because cadence-bypass is NOT defensible for a status
  // acknowledgment. Future safety-window suppression SHOULD honor itself
  // for this notification (during an active adverse-event review, the
  // system shouldn't keep firing "your case is in clinical review"
  // pings). Status-ack semantics carried by recall_severity='operational'
  // + message_intent='operational' on the companion Rule.
  transactional_critical: false,

  // Section 1Q.23 hybrid care delivery extensions.
  interaction_context_compatibility: ['both'],
  // Status-update event; not subject to in-person redundancy collapse
  // (the patient was not separately told their case was in clinical
  // review during an in-person visit — this is the canonical surface
  // for that information).
  interaction_context_redundancy_check: false,
}
