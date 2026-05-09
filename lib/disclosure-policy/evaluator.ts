/**
 * Phase 4H-disclosure-policy commit 1 — pure-function evaluator for
 * the disclosure-policy gate.
 *
 * Per system map Section 1G.3 (the application of disclosure-policy
 * to outbound notifications) + Section 1Q.17 (privacy +
 * communication governance) + ADR Section 7.5 cutover discipline.
 *
 * STRUCTURAL GUARANTEE:
 *   This module is PURE — no DB calls, no I/O, no side effects.
 *   `evaluateDisclosurePolicy(input)` is referentially transparent;
 *   given the same input, it always returns the same decision. The
 *   async wrapper at `runtime.ts` handles the DB reads + the
 *   SECURITY DEFINER suppression call.
 *
 * GRADUATED FAIL-SAFETY POSTURE (binding):
 *   Per the architectural review preceding this commit. Replaces the
 *   simpler "permissive default on missing inputs" with tier-aware
 *   behavior:
 *     - Unknown template (template not found in registry) → fail closed
 *     - Invalid template tier (undefined / out-of-range) → fail closed
 *     - Missing action metadata + tier_1 template → fail open
 *       with fail_safety_posture: 'fail_open_tier_1'
 *     - Missing action metadata + tier_2+ template → fail closed
 *       with fail_safety_posture: 'fail_closed_uncertain_high_tier'
 *     - Unresolved pathway_sensitivity on tier_3+ template → fail closed
 *     - Unknown intent → fail closed regardless of tier
 *
 *   Every audit emission carries `fail_safety_posture` so post-incident
 *   analysis can distinguish a deliberate decision from a fail-safe
 *   activation.
 *
 * ARCHITECTURAL FRAMING:
 *   This evaluator generalizes beyond outbound notifications. Future
 *   surfaces using the same evaluator: AI summarization visibility,
 *   provider-facing disclosure, exports, transcription visibility,
 *   support tooling. The Section 1G.3 "send-policy gate" naming in
 *   the binding map describes the *application* of this evaluator
 *   to outbound notifications; the engine is `disclosure-policy`.
 */

import {
  CHANNEL_DEFAULT_CEILING,
  isOutsideSecureChannel,
  pathwaySensitivityClampedCeiling,
  type DisclosureChannel,
  type PathwaySensitivity,
  type PrivacyExposureLevel,
} from './channel-defaults'

// =====================================================================
// Inputs + outputs (pure types)
// =====================================================================

/**
 * The 10-value MessageIntent enum per Section 1Q.5. Mirrored from
 * lib/outbound/types.ts for convenience; the canonical source is
 * lib/outbound/types.ts MESSAGE_INTENTS.
 */
export type MessageIntent =
  | 'account'
  | 'operational'
  | 'clinical'
  | 'safety'
  | 'billing'
  | 'support'
  | 'marketing'
  | 'education'
  | 'vendor'
  | 'internal'

export const KNOWN_MESSAGE_INTENTS: ReadonlySet<MessageIntent> = new Set<MessageIntent>([
  'account',
  'operational',
  'clinical',
  'safety',
  'billing',
  'support',
  'marketing',
  'education',
  'vendor',
  'internal',
])

/**
 * The minimum surface of Template metadata the evaluator needs.
 *
 * Note: this intentionally reads only what the gate cares about. The
 * full Template object shape lives at repo/templates/types.ts.
 */
export interface TemplateMetadata {
  template_key: string
  template_version: string
  privacy_exposure_level: PrivacyExposureLevel
  message_intent: MessageIntent
  /**
   * When true, the template MAY fire over patient channel preferences
   * per Section 1G.3 safety override. Step 4 (emergency orchestration)
   * is deferred from commit 1; the evaluator currently treats
   * safety_critical_override_allowed as informational only — it does
   * NOT trigger the vague-companion swap in this commit.
   */
  safety_critical_override_allowed: boolean
  /**
   * Per Section 1Q.21 + ADR Section 7.5: when true, the template
   * bypasses safety-window + marketing-exclusion suppression for
   * billing / account / safety intents. CI lint forbids
   * `transactional_critical: true` on marketing / education intents.
   * The evaluator does NOT consult cadence rules in commit 1
   * (deferred), but transactional_critical IS used as part of the
   * "known-safe" categorization for fail-safety posture.
   */
  transactional_critical?: boolean
  /**
   * Patient consent types (from patient_consents.type CHECK
   * vocabulary) that MUST be valid + non-revoked for the template to
   * render at its declared exposure_level. When undefined, no
   * exposure-level-specific consent is required.
   */
  requires_consent_for_exposure_level?: string[]
  /**
   * Patient consent types required by intent (e.g., `marketing` intent
   * requires `marketing_sms` for SMS channel; `marketing_email` for
   * email channel). When undefined, no intent-specific consent is required.
   */
  requires_consent_for_intent?: string[]
}

/**
 * The patient's current consent snapshot. The evaluator only needs to
 * know which non-revoked consent types are present. The runtime
 * wrapper queries patient_consents and reduces it to this shape.
 */
export interface ConsentSnapshot {
  /** Non-revoked consent types currently in effect for this patient. */
  active_types: ReadonlySet<string>
}

/**
 * The full evaluator input.
 */
export interface DisclosurePolicyInput {
  /** The channel this dispatch attempt targets. */
  channel: DisclosureChannel
  /**
   * The action's intended_privacy_exposure_level cap (from the rule
   * that produced the row). When undefined, the evaluator's
   * graduated fail-safety rule applies.
   */
  intended_privacy_exposure_level: PrivacyExposureLevel | undefined
  /**
   * The action's message_intent (from the rule that produced the row).
   * When undefined, the evaluator's graduated fail-safety rule applies.
   */
  message_intent: MessageIntent | undefined
  /**
   * The Template metadata, resolved from `template_key` +
   * `template_version` on the outbound_jobs row. When undefined
   * (template not found in registry), fail closed regardless of tier.
   */
  template: TemplateMetadata | undefined
  /**
   * The pathway sensitivity for the patient + flow. Sourced from
   * outbound_jobs.pathway_sensitivity (currently null for the 2
   * migrated rules). When null, the evaluator allows tier_1-2 outside-
   * secure but fails closed for tier_3+ that needs the clamp.
   */
  pathway_sensitivity: PathwaySensitivity | null
  /** The patient's current consent snapshot (read at runtime). */
  consents: ConsentSnapshot
}

/**
 * The decision returned by the evaluator. Note `decision: 'pass'` may
 * be accompanied by `fail_safety_posture: 'fail_open_tier_1'` when the
 * pass came via the graduated fail-safety rule rather than a normal
 * decision path; observability code should distinguish the two.
 */
export type DisclosurePolicyDecision =
  | {
      decision: 'pass'
      computed_channel_max: PrivacyExposureLevel
      fail_safety_posture: 'normal_decision' | 'fail_open_tier_1'
    }
  | {
      decision: 'consent_uplift_required'
      reason: ConsentUpliftReason
      missing_consent_types: ReadonlyArray<string>
      computed_channel_max: PrivacyExposureLevel
      fail_safety_posture: 'normal_decision'
    }
  | {
      decision: 'block'
      reason: BlockReason
      computed_channel_max: PrivacyExposureLevel | null
      fail_safety_posture: 'normal_decision' | 'fail_closed_uncertain_high_tier'
    }
  | {
      decision: 'failsafe_action_template_mismatch'
      reason: FailsafeReason
      fail_safety_posture: 'fail_closed_uncertain_high_tier'
    }

export type ConsentUpliftReason =
  | 'missing_consent_for_exposure_level'
  | 'missing_consent_for_intent'

export type BlockReason =
  | 'pathway_sensitivity_block'
  | 'channel_ceiling_exceeded'
  | 'missing_consent_unclosable'
  | 'missing_action_metadata_high_tier'
  | 'unresolved_pathway_sensitivity_high_tier'
  | 'unknown_template'
  | 'invalid_template_tier'
  | 'unknown_intent_high_tier'

export type FailsafeReason =
  | 'template_tier_exceeds_action_cap'
  | 'template_intent_mismatches_action_intent'

// =====================================================================
// Pure evaluator
// =====================================================================

/**
 * Evaluate the disclosure-policy gate for a single dispatch attempt.
 *
 * Pure function: no DB, no I/O, no side effects. Given the same input,
 * always returns the same decision.
 *
 * Decision precedence (early-return order):
 *   1. Unknown template → block (fail closed).
 *   2. Invalid template tier → block (fail closed).
 *   3. Action-template intent mismatch (when both are known) →
 *      failsafe_action_template_mismatch.
 *   4. Action-template tier mismatch (template tier > action cap when
 *      both known) → failsafe_action_template_mismatch.
 *   5. Missing action metadata (intent or cap):
 *        - Template tier ≤ 1 → pass (fail_open_tier_1)
 *        - Template tier ≥ 2 → block (fail_closed_uncertain_high_tier)
 *   6. Unknown / out-of-range intent → see step 5 logic.
 *   7. Unresolved pathway_sensitivity on tier_3+ template → block.
 *   8. Pathway-sensitivity hard clamp → block.
 *   9. Channel ceiling exceeded:
 *        - Consent uplift available → consent_uplift_required.
 *        - Consent uplift not closeable → block.
 *  10. Required consents missing (per template):
 *        - Closeable → consent_uplift_required.
 *        - Not closeable → block.
 *  11. Otherwise → pass (normal_decision).
 */
export function evaluateDisclosurePolicy(
  input: DisclosurePolicyInput,
): DisclosurePolicyDecision {
  // 1. Unknown template → fail closed.
  if (!input.template) {
    return {
      decision: 'block',
      reason: 'unknown_template',
      computed_channel_max: null,
      fail_safety_posture: 'fail_closed_uncertain_high_tier',
    }
  }

  // 2. Invalid template tier → fail closed.
  if (
    input.template.privacy_exposure_level === undefined ||
    input.template.privacy_exposure_level === null ||
    input.template.privacy_exposure_level < 0 ||
    input.template.privacy_exposure_level > 5 ||
    !Number.isInteger(input.template.privacy_exposure_level)
  ) {
    return {
      decision: 'block',
      reason: 'invalid_template_tier',
      computed_channel_max: null,
      fail_safety_posture: 'fail_closed_uncertain_high_tier',
    }
  }

  const templateTier = input.template.privacy_exposure_level

  // 3 + 4. Action-template alignment (when both action fields are known).
  if (
    input.intended_privacy_exposure_level !== undefined &&
    input.message_intent !== undefined &&
    KNOWN_MESSAGE_INTENTS.has(input.message_intent)
  ) {
    if (templateTier > input.intended_privacy_exposure_level) {
      return {
        decision: 'failsafe_action_template_mismatch',
        reason: 'template_tier_exceeds_action_cap',
        fail_safety_posture: 'fail_closed_uncertain_high_tier',
      }
    }
    if (input.template.message_intent !== input.message_intent) {
      return {
        decision: 'failsafe_action_template_mismatch',
        reason: 'template_intent_mismatches_action_intent',
        fail_safety_posture: 'fail_closed_uncertain_high_tier',
      }
    }
  }

  // 5 + 6. Missing action metadata: graduated fail-safety rule.
  const intentKnown =
    input.message_intent !== undefined &&
    KNOWN_MESSAGE_INTENTS.has(input.message_intent)
  const capKnown = input.intended_privacy_exposure_level !== undefined

  if (!intentKnown || !capKnown) {
    if (templateTier <= 1) {
      // Tier_0 or tier_1: existing safe paths; fail open.
      const channelMax = pathwaySensitivityClampedCeiling(
        input.channel,
        input.pathway_sensitivity,
      )
      return {
        decision: 'pass',
        computed_channel_max: (channelMax ?? CHANNEL_DEFAULT_CEILING[input.channel]) as PrivacyExposureLevel,
        fail_safety_posture: 'fail_open_tier_1',
      }
    }
    // Tier_2+: fail closed.
    return {
      decision: 'block',
      reason: !intentKnown ? 'unknown_intent_high_tier' : 'missing_action_metadata_high_tier',
      computed_channel_max: null,
      fail_safety_posture: 'fail_closed_uncertain_high_tier',
    }
  }

  // 7. Unresolved pathway_sensitivity on tier_3+ outside-secure.
  if (
    input.pathway_sensitivity === null &&
    templateTier >= 3 &&
    isOutsideSecureChannel(input.channel)
  ) {
    return {
      decision: 'block',
      reason: 'unresolved_pathway_sensitivity_high_tier',
      computed_channel_max: null,
      fail_safety_posture: 'fail_closed_uncertain_high_tier',
    }
  }

  // 8a. Extreme pathway hard-blocks tier_3+ on outside-secure
  // REGARDLESS of consent. Per Section 1Q.17: the patient cannot opt
  // in to having their TRT / ED / mental-health pathway named in an
  // SMS or email. This check fires BEFORE consent uplift to make the
  // hard-block unconditional.
  if (
    input.pathway_sensitivity === 'extreme' &&
    templateTier >= 3 &&
    isOutsideSecureChannel(input.channel)
  ) {
    return {
      decision: 'block',
      reason: 'pathway_sensitivity_block',
      computed_channel_max: null,
      fail_safety_posture: 'normal_decision',
    }
  }

  // 8b. Compute channel max with pathway-sensitivity clamp.
  const channelMaxOrNull = pathwaySensitivityClampedCeiling(
    input.channel,
    input.pathway_sensitivity,
  )

  if (channelMaxOrNull === null) {
    // Pathway sensitivity hard-blocks this channel for any tier.
    return {
      decision: 'block',
      reason: 'pathway_sensitivity_block',
      computed_channel_max: null,
      fail_safety_posture: 'normal_decision',
    }
  }

  const channelMax: PrivacyExposureLevel = channelMaxOrNull

  // 8c. High-sensitivity pathway with tier_3 outside-secure: requires
  // explicit pathway_named_outside_secure_comm consent. Per
  // Section 1Q.17 binding rule.
  if (
    input.pathway_sensitivity === 'high' &&
    templateTier >= 3 &&
    isOutsideSecureChannel(input.channel)
  ) {
    if (!input.consents.active_types.has('pathway_named_outside_secure_comm')) {
      return {
        decision: 'consent_uplift_required',
        reason: 'missing_consent_for_exposure_level',
        missing_consent_types: ['pathway_named_outside_secure_comm'],
        computed_channel_max: channelMax,
        fail_safety_posture: 'normal_decision',
      }
    }
  }

  // 9. Channel ceiling exceeded.
  if (templateTier > channelMax) {
    // Check whether template declares consent uplift path.
    const exposureUplift = input.template.requires_consent_for_exposure_level ?? []
    if (exposureUplift.length > 0) {
      const missing = exposureUplift.filter(
        (consentType) => !input.consents.active_types.has(consentType),
      )
      if (missing.length > 0) {
        return {
          decision: 'consent_uplift_required',
          reason: 'missing_consent_for_exposure_level',
          missing_consent_types: missing,
          computed_channel_max: channelMax,
          fail_safety_posture: 'normal_decision',
        }
      }
      // All required consents present: pass.
      return {
        decision: 'pass',
        computed_channel_max: channelMax,
        fail_safety_posture: 'normal_decision',
      }
    }
    // No consent uplift path declared: hard block.
    return {
      decision: 'block',
      reason: 'channel_ceiling_exceeded',
      computed_channel_max: channelMax,
      fail_safety_posture: 'normal_decision',
    }
  }

  // 10. Required intent-specific consents (e.g. marketing_sms).
  const intentConsents = input.template.requires_consent_for_intent ?? []
  if (intentConsents.length > 0) {
    const missing = intentConsents.filter(
      (consentType) => !input.consents.active_types.has(consentType),
    )
    if (missing.length > 0) {
      return {
        decision: 'consent_uplift_required',
        reason: 'missing_consent_for_intent',
        missing_consent_types: missing,
        computed_channel_max: channelMax,
        fail_safety_posture: 'normal_decision',
      }
    }
  }

  // 11. Pass.
  return {
    decision: 'pass',
    computed_channel_max: channelMax,
    fail_safety_posture: 'normal_decision',
  }
}

// =====================================================================
// Suppression-reason mapping for the SECURITY DEFINER call
// =====================================================================

/**
 * Map a non-pass decision to the `suppression_reason` value the
 * SECURITY DEFINER suppression function will write to
 * `outbound_jobs.suppression_reason`. Must match the existing CHECK
 * vocabulary on the column.
 */
export function suppressionReasonForDecision(
  decision: DisclosurePolicyDecision,
): string {
  if (decision.decision === 'pass') {
    throw new Error('suppressionReasonForDecision called with pass decision')
  }
  if (decision.decision === 'failsafe_action_template_mismatch') {
    return 'manual_staff_suppression' // failsafe rejection; not a normal suppression. Audit metadata captures the real reason.
  }
  if (decision.decision === 'consent_uplift_required') {
    return 'missing_consent'
  }
  // decision.decision === 'block'
  switch (decision.reason) {
    case 'pathway_sensitivity_block':
    case 'unresolved_pathway_sensitivity_high_tier':
      return 'pathway_sensitivity_block'
    case 'channel_ceiling_exceeded':
      return 'channel_ceiling_exceeded'
    case 'missing_consent_unclosable':
      return 'missing_consent'
    case 'missing_action_metadata_high_tier':
    case 'unknown_intent_high_tier':
    case 'unknown_template':
    case 'invalid_template_tier':
      return 'manual_staff_suppression' // configuration / governance failures; not a runtime policy outcome.
  }
}

/**
 * Map a non-pass decision to the audit action emitted by the
 * SECURITY DEFINER suppression function. Must match the typed
 * RULE_AND_NOTIFICATION_AUDIT_ACTIONS vocabulary in
 * lib/events/audit-actions.ts.
 */
export function auditActionForDecision(
  decision: DisclosurePolicyDecision,
): string {
  if (decision.decision === 'pass') {
    throw new Error('auditActionForDecision called with pass decision')
  }
  if (decision.decision === 'consent_uplift_required') {
    return 'notification.consent_uplift_required'
  }
  if (decision.decision === 'failsafe_action_template_mismatch') {
    return 'notification.action_template_intent_mismatch'
  }
  // decision.decision === 'block'
  return 'notification.dispatch_blocked_by_privacy_check'
}
