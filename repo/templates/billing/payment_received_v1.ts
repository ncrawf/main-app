/**
 * Phase 4H-pre commit 5 — first typed Template.
 *
 * Companion to `repo/rules/billing/payment_received_v1.ts`.
 *
 * Per Section 1Q.5 + 1Q.17 + ADR Section 7.5 cutover discipline:
 *   - All required fields declared (no grandfathering).
 *   - tier_1 existence_only (no PHI; confirms a transaction exists).
 *   - message_intent: 'billing' (matches the Rule's action.message_intent).
 *   - transactional_critical: true so 1Q.21 cadence rules do not suppress.
 *   - outside_secure_render_strategy: 'mention_brand_only' (renders
 *     brand label without naming pathway/clinical content).
 *   - Brand sourced from typed multi-tenant primitives (brands table)
 *     via the rendered_payload pre-populated at enqueue time. No
 *     hardcoded brand strings.
 *   - Typed required_variables replace v0 free-form paymentSummary.
 *
 * Wording strategy (per ADR Section 7.5):
 *   - Email subject / preview / heading / detail: legacy wording
 *     preserved verbatim (already tier_1 compliant by accident; new
 *     tier_1 compliant by design).
 *   - Email intro: structurally rewritten to use typed slots; rendered
 *     output is byte-identical to legacy when given the same inputs.
 *   - Email brand_footer: rewritten to source from brands.display_name.
 *   - SMS body: rewritten to source brand prefix from brands.slug
 *     (.toUpperCase() yields "MAIN" for the existing brand → byte-
 *     identical to legacy "MAIN:").
 *
 * The full wording diff log lives in the commit 5 message body.
 */

import type { Template } from '../types'

export const paymentReceivedTemplateV1: Template = {
  template_key: 'tmpl.billing.payment_received_v1',
  template_version: '1.0.0',
  domain: 'billing_subscription',
  allowed_use: 'patient_facing',
  channels: ['email', 'sms'],

  required_variables: [
    {
      name: 'payment_amount_cents',
      type: 'integer_cents',
      required: true,
      doc: 'Amount paid, in smallest currency unit (cents for USD/CAD/EUR/GBP).',
    },
    {
      name: 'payment_currency',
      type: 'iso4217',
      required: true,
      doc: '3-letter ISO 4217 currency code (USD, CAD, etc.).',
    },
    {
      name: 'brand_short_label',
      type: 'string',
      required: true,
      doc:
        'Brand prefix used in SMS prefix + email logo + email footer. ' +
        'Sourced from brands.slug.toUpperCase() per ADR Section 7.5 ' +
        'multi-tenant rule. Replaces hardcoded "MAIN:" / theme env default.',
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
      doc: 'Patient first name for email greeting; falls back to "Hi," when absent.',
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
    'First parity proof Template for Phase 4H-pre commit 5. tier_1 ' +
    'existence_only billing intent; transactional_critical so cadence ' +
    'rules per Section 1Q.21 do not suppress billing-critical sends. ' +
    'Replaces lib/notifications/patientMessages.ts payment_received email ' +
    '+ SMS cases. Wording mostly carried forward from legacy (already ' +
    'tier_1 compliant); structural change is typed required_variables ' +
    'replacing v0 free-form paymentSummary string + brand sourced from ' +
    'brands table per ADR Section 7.5 multi-tenant rule (no hardcoded ' +
    '"MAIN:" prefix). Wording diff log per ADR Section 7.5 lives in the ' +
    'commit 5 message body for auditor traceability.',

  // Section 1Q.17 privacy + governance.
  privacy_exposure_level: 1, // existence_only
  message_intent: 'billing',
  outside_secure_render_strategy: 'mention_brand_only',
  secure_view_render_strategy: 'full_detail_default',
  safety_critical_override_allowed: false,
  action_context_required: true, // body has actionable cue ("track next steps in your dashboard")

  // Section 1Q.21 marketing lifecycle extensions.
  personalization_level: 'none',
  // Billing applies to all sensitivity tiers — payment confirmations
  // fire regardless of pathway sensitivity.
  pathway_sensitivity_compatibility: ['low', 'moderate', 'high', 'extreme'],
  transactional_critical: true,

  // Section 1Q.23 hybrid care delivery extensions.
  interaction_context_compatibility: ['both'],
  // Payment confirmation is distinct from any in-person interaction
  // (it is a billing event, not a clinical event); does not get
  // suppressed by the in-person redundancy window.
  interaction_context_redundancy_check: false,
}
