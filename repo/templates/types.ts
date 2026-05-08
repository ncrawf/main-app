/**
 * Phase 4H-pre commit 3 — Template object shape (TypeScript discriminated union).
 *
 * Verbatim transcription of system map Section 1Q.5 (binding source of
 * truth). Supporting types are stubbed where they are not yet defined
 * elsewhere; the stubs are marked `@stub-for-4H-runtime` so the
 * engineer wiring the runtime can replace them with full definitions
 * without touching the Template interface itself.
 *
 * For the architectural reasoning, see:
 *   - System map Section 1Q.5 (the canonical Template shape).
 *   - System map Section 1Q.17 (privacy + communication governance).
 *   - System map Section 1Q.21 (marketing lifecycle extensions).
 *   - System map Section 1Q.23 (hybrid care delivery extensions).
 *   - docs/architecture/phase_4h_target_first_decision_record.md.
 */

import type { MessageIntent, PathwaySensitivity } from '../../lib/outbound/types'
import type { Channel } from '../rules/types'

// =====================================================================
// Re-exports of types defined elsewhere
// =====================================================================

export type { MessageIntent, PathwaySensitivity, Channel }

// =====================================================================
// Stub types for 4H-rules-runtime
// =====================================================================

/** @stub-for-4H-runtime — 10-value enum per Section 1Q.2 template domains. */
export type TemplateDomain = string

/**
 * @stub-for-4H-runtime — typed interpolation slot.
 * Free-form interpolation strings are forbidden per Section 1Q.5.
 * The legacy v0 pattern `paymentSummary?: string | null` is an
 * anti-pattern; the Phase 4H-pre commit 5 migration replaces it
 * with typed slots like
 *   { name: 'payment_amount', type: 'number', required: true } +
 *   { name: 'payment_currency', type: 'iso4217', required: true }.
 */
export type TemplateVariable = {
  name: string
  /** Typed at the runtime level; @stub for now. */
  type: string
  required: boolean
  /** Optional documentation for the variable's intended source. */
  doc?: string
}

/**
 * @stub-for-4H-runtime — typed prohibited claim spec.
 * Examples: must_not_promise_outcome, must_not_diagnose,
 * must_not_quote_lab_value_without_provider_review,
 * must_not_imply_FDA_approval_unless_FDA_approved,
 * must_not_imply_clinical_outcome (marketing).
 */
export type ProhibitedClaimSpec = {
  kind: string
  /** Optional rationale for the constraint. */
  rationale?: string
}

/**
 * @stub-for-4H-runtime — typed tone constraint.
 * Per Section 1Q.5: warm_direct | clinical_formal | empathetic_concerned |
 * factual_only | celebratory_brief | identity_affirming.
 */
export type ToneConstraint = string

/** @stub-for-4H-runtime — AI refinement allow/deny matrix per Section 1Q.5. */
export type AIRefinementConstraints = {
  may_change: string[]
  must_not_change: string[]
}

/** @stub-for-4H-runtime — typed evidence reference spec (mirrors the rules-side type). */
export type EvidenceRefSpec = {
  source_kind: string
  required: boolean
}

/** @stub-for-4H-runtime — typed test render reference. */
export type TestRenderRef = {
  fixture_id: string
}

/**
 * @stub-for-4H-runtime — jurisdiction variants for state/country-specific
 * wording differences. Final shape (flat lookup vs merge-by-key) TBD.
 */
export type JurisdictionVariants = Record<string, Partial<Template>>

/**
 * @stub-for-4H-runtime — patient consent type per Section 1K.11.
 * Examples: marketing_sms, marketing_email, marketing_personalization_with_phi,
 * pathway_named_outside_secure_comm, telehealth_consent.
 */
export type ConsentType = string

/**
 * @stub-for-4H-runtime — 18-value enum per Section 1Q.21 Part 5.
 * Examples: lead_nurture, abandoned_intake, abandoned_checkout,
 * lab_completion_reminder, refill_reorder_reminder, subscription_retention,
 * winback, post_cancel_feedback, post_denial_re_evaluation, etc.
 */
export type CampaignType = string

/**
 * @stub-for-4H-runtime — 5-level personalization taxonomy per Section 1Q.21.
 */
export type PersonalizationLevel =
  | 'none'
  | 'basic'
  | 'contextual'
  | 'behavioral'
  | 'sensitive_restricted'

// =====================================================================
// Template interface (Section 1Q.5 verbatim)
// =====================================================================

/**
 * Per system map Section 1Q.5. Every Template MUST satisfy this shape.
 * No partial Templates. CI lint at PR time enforces the required-fields
 * invariant. Templates with `domain: 'marketing_lifecycle'` +
 * `privacy_exposure_level: 3` + `pathway_sensitivity_compatibility`
 * including `'high'` require dual clinical CODEOWNER + compliance
 * CODEOWNER co-sign per Section 1Q.5 binding rule.
 */
export interface Template {
  /** Stable; e.g., 'tmpl.patient.clarification.pregnancy_status_refresh_v2'. */
  template_key: string
  template_version: string
  /** 10-value enum per Section 1Q.2. */
  domain: TemplateDomain
  allowed_use: 'patient_facing' | 'provider_facing' | 'staff_internal' | 'vendor_facing'
  /** sms | email | in_app | push | print | phone_script. */
  channels: Channel[]
  /**
   * Typed interpolation slots; missing variable at render time = render
   * error (not silent fallback). Free-form strings forbidden.
   */
  required_variables: TemplateVariable[]
  optional_variables?: TemplateVariable[]
  /** Structured constraints; never free text. */
  prohibited_claims: ProhibitedClaimSpec[]
  /** Typed enum tone constraints. */
  tone_constraints: ToneConstraint[]
  /**
   * Template GOVERNANCE flag (PR-time CODEOWNER); does NOT imply
   * per-message provider approval at runtime.
   */
  clinical_review_required: boolean
  /** DEFAULT FALSE; system-controlled at CODEOWNER PR time. */
  ai_refinement_allowed: boolean
  ai_refinement_constraints?: AIRefinementConstraints
  /** E.g., must cite intake_response_id when explaining a denial. */
  evidence_required: EvidenceRefSpec[]
  jurisdiction_variants?: JurisdictionVariants
  status: 'draft' | 'active' | 'deprecated' | 'retired'
  effective_at: string // ISO 8601
  retired_at?: string
  /** Sample renders that must pass review. */
  test_renders: TestRenderRef[]
  /** Required. */
  rationale_note: string
  retiring_supersedes_template_key?: string
  retiring_replaced_by_template_key?: string

  // -------------------------------------------------------------------
  // Privacy + communication governance (Section 1Q.17 binding)
  // -------------------------------------------------------------------

  /**
   * REQUIRED. Per Section 1Q.17 6-tier taxonomy:
   *   0 = no_phi
   *   1 = existence_only
   *   2 = low_context_phi
   *   3 = pathway_named_phi
   *   4 = clinical_detail_phi
   *   5 = sensitive_clinical_phi
   * CI lint forbids templates without declared tier.
   */
  privacy_exposure_level: 0 | 1 | 2 | 3 | 4 | 5
  /**
   * REQUIRED. Drives consent path lookup at send time per Section
   * 1Q.17 message intent enum. CI lint forbids templates without
   * declared intent. At runtime, MUST equal `RuleAction.message_intent`
   * per Section 1Q.4 action-template intent match.
   */
  message_intent: MessageIntent
  /**
   * Declares how the template renders to outside-secure channels (SMS /
   * email / push / paper). Does NOT override pathway_sensitivity hard
   * caps per Section 1K.2.
   */
  outside_secure_render_strategy:
    | 'omit_pathway_name'
    | 'mention_pathway_name_with_consent'
    | 'header_only_for_push'
    | 'mention_brand_only'
  /**
   * Always full detail in secure view (in-app + provider phone);
   * declared for completeness.
   */
  secure_view_render_strategy: 'full_detail_default'
  /**
   * Patient_consents.type values that MUST be valid + non-revoked for
   * the template to render at its declared exposure level.
   */
  requires_consent_for_exposure_level?: ConsentType[]
  /**
   * Patient_consents.type values required by intent (e.g., `marketing`
   * intent requires `marketing_sms` for SMS channel; `marketing_email`
   * for email channel).
   */
  requires_consent_for_intent?: ConsentType[]
  /**
   * DEFAULT FALSE. When TRUE: template may fire over patient channel
   * preferences per existing 1G.3 safety override. MUST also declare
   * `safety_vague_companion_template_key`. CI lint forbids `true` on
   * non-`safety` intent templates.
   */
  safety_critical_override_allowed: boolean
  /**
   * REQUIRED when `safety_critical_override_allowed = true`. Points at
   * a tier_2 vague template (intent=`safety`) that fires on outside
   * channels while the tier_4/5 detailed version stays in-app + phone.
   * CI lint validates the companion exists + is `privacy_exposure_level: 2`
   * + is registered as `intent: safety`.
   */
  safety_vague_companion_template_key?: string
  /**
   * NEW per `2026-05-01_dynamic_behavior_pressure_test_post_marketing.md`
   * Cat 5.2 polish-now fix. Defaults TRUE for templates with
   * `privacy_exposure_level <= 2` AND
   * `outside_secure_render_strategy != 'header_only_for_push'`. CI lint
   * at PR time validates template body contains at least one
   * verb-driven actionable cue (e.g., "complete one quick step",
   * "your provider has an update"). Forbidden patterns: pure
   * portal-redirect copy ("You have a notification" alone).
   */
  action_context_required: boolean

  // -------------------------------------------------------------------
  // Marketing Lifecycle + Growth Orchestration extensions (Section 1Q.21)
  // -------------------------------------------------------------------

  /**
   * 18-value enum per Section 1Q.21 Part 5 campaign taxonomy.
   * REQUIRED for templates with `domain: 'marketing_lifecycle'`.
   */
  campaign_type?: CampaignType
  /**
   * REQUIRED on every template; default 'none'. Per Section 1Q.21
   * 5-level taxonomy. AI refinement may NOT escalate beyond declared
   * level. `sensitive_restricted` only allowed for non-extreme
   * `pathway_sensitivity` templates.
   */
  personalization_level: PersonalizationLevel
  /**
   * When external marketing platform mirrors the template (V2+ only
   * per Section 1Q.21 template ownership models). External platforms
   * are NEVER source of truth per Invariant 19.
   */
  provider_template_registration_id?: string
  /**
   * Which pathway sensitivities the template can fire on.
   * Default = all `low` / `moderate` allowed. Explicit allowlist
   * required for `high` / `extreme`. CI lint validates against
   * template's `prohibited_claims` floor + `privacy_exposure_level`
   * + `outside_secure_render_strategy`.
   *
   * Per Section 1Q.5 binding rule: dual clinical CODEOWNER +
   * compliance CODEOWNER co-sign required when ALL of:
   *   (a) privacy_exposure_level === 3
   *   (b) outside_secure_render_strategy === 'mention_pathway_name_with_consent'
   *   (c) pathway_sensitivity_compatibility includes 'high'
   *   (d) domain === 'marketing_lifecycle'
   */
  pathway_sensitivity_compatibility: PathwaySensitivity[]
  /**
   * Per `2026-04-30_dynamic_behavior_pre_runtime.md` Patch 4 marketing
   * exclusion windows + Section 1Q.21 cadence rules. Default false.
   * When true: bypasses safety-window suppression AND
   * marketing-exclusion-window suppression for billing/account/safety
   * intents. CI lint forbids `transactional_critical = true` on
   * `marketing` or `education` intents.
   */
  transactional_critical?: boolean

  // -------------------------------------------------------------------
  // Hybrid Care Delivery extensions (Section 1Q.23)
  // -------------------------------------------------------------------

  /**
   * REQUIRED per Section 1Q.23 Inv 2 (no duplicate systems) +
   * Failure Condition F4 (no template duplication by mode).
   * Default `['both']`. Explicit per-mode allowlist required when
   * template is mode-specific (RARE; CI lint flags as F4 risk if a
   * template is single-mode without strong `rationale_note`).
   * CI lint forbids creating SEPARATE template versions per mode for
   * the same `(domain, message_intent)` combination — same pair
   * MUST share one template_key with mode-aware variable-driven copy,
   * not forked templates.
   */
  interaction_context_compatibility: ('in_person' | 'remote' | 'both')[]
  /**
   * NEW per Section 1Q.23 Patch G7 + Section 1G.3 step 5b
   * in-person-recent-interaction suppression window. Default false.
   * When true, template is SUPPRESSED when patient has a recent
   * face-to-face interaction (`appointment.actual_end_at` for
   * `modality: 'in_person'` within configurable window, default 60 min).
   * Bypass for `transactional_critical: true` and
   * `message_intent: 'safety'` (which fire regardless).
   */
  interaction_context_redundancy_check?: boolean
}

// =====================================================================
// Type guard helpers (used by the runtime + CI lint)
// =====================================================================

/**
 * Returns true when the Template requires dual CODEOWNER co-sign per
 * Section 1Q.5 binding rule (high-sensitivity pathway-named outside-
 * secure marketing template).
 */
export function templateRequiresDualCodeownerCosign(t: Template): boolean {
  return (
    t.privacy_exposure_level === 3 &&
    t.outside_secure_render_strategy === 'mention_pathway_name_with_consent' &&
    t.pathway_sensitivity_compatibility.includes('high') &&
    t.domain === 'marketing_lifecycle'
  )
}

/**
 * Returns true when the Template's `safety_critical_override_allowed`
 * declaration is consistent with its other fields. CI lint uses this
 * as a structural check.
 */
export function templateSafetyOverrideIsValid(t: Template): boolean {
  if (!t.safety_critical_override_allowed) {
    return true
  }
  // When override is allowed, must be safety intent + must declare a
  // tier_2 vague companion.
  return (
    t.message_intent === 'safety' &&
    typeof t.safety_vague_companion_template_key === 'string' &&
    t.safety_vague_companion_template_key.length > 0
  )
}
