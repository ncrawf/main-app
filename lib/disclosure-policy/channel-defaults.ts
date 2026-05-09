/**
 * Phase 4H-disclosure-policy commit 1 — per-channel default privacy
 * ceilings + pathway-sensitivity clamp rules.
 *
 * Per system map Section 1Q.17 + Section 1G.3 step 2 ("channel max
 * compute"): the maximum privacy_exposure_level that may be sent on a
 * given channel derives from:
 *   1. The channel's default ceiling (this file).
 *   2. The pathway_sensitivity clamp (this file).
 *   3. The patient's consent state (read at runtime; not in this file).
 *   4. The patient's per-event-class channel preferences (Refinement 5;
 *      DEFERRED — not yet in DB schema).
 *
 * The mantra ("high-signal outside, full detail inside" per Section
 * 1Q.17) drives these ceilings: SMS / push / mail / email get tier_1-2
 * outside; in-app + provider phone are full-detail inside-secure.
 *
 * ARCHITECTURAL FRAMING:
 *   This file is part of `lib/disclosure-policy/` because the
 *   underlying ceiling concept generalizes beyond outbound
 *   notifications. Future surfaces (AI summarization visibility,
 *   provider-facing disclosure, exports) will share these defaults
 *   with channel-equivalent overrides; for now, the only reader is
 *   the outbound-notifications gate at lib/outbound/dispatch.ts.
 *
 * EDITING DISCIPLINE:
 *   These ceilings are binding policy. Changes require dual CODEOWNER
 *   co-sign (clinical + compliance) per Section 1Q.5 binding rule
 *   for high-sensitivity templates. Treat this file like a policy
 *   document, not a config knob.
 */

/**
 * The 6-tier privacy exposure level taxonomy per Section 1Q.17:
 *   0 = no_phi
 *   1 = existence_only
 *   2 = low_context_phi
 *   3 = pathway_named_phi
 *   4 = clinical_detail_phi
 *   5 = sensitive_clinical_phi
 */
export type PrivacyExposureLevel = 0 | 1 | 2 | 3 | 4 | 5

/**
 * Channel set per Section 1Q.5 Template object shape.
 */
export type DisclosureChannel =
  | 'sms'
  | 'email'
  | 'in_app'
  | 'push'
  | 'phone'
  | 'mail'

/**
 * Pathway sensitivity per Section 1Q.17 four-bucket taxonomy.
 *
 *   - low: wellness / supplements
 *   - moderate: GLP-1 / metabolic
 *   - high: Female HRT
 *   - extreme: TRT, ED, peptides, mental-health-future
 */
export type PathwaySensitivity = 'low' | 'moderate' | 'high' | 'extreme'

/**
 * Per-channel default privacy ceiling. The maximum
 * `template.privacy_exposure_level` allowed on this channel BEFORE
 * pathway-sensitivity + consent + preference overrides.
 *
 * Rationale per Section 1Q.17:
 *   - sms: existence_only outside (no PHI in plaintext SMS).
 *   - email: low_context_phi outside (some context allowed; tier_3+
 *     requires explicit consent uplift).
 *   - push: existence_only on lockscreen / header (push body content
 *     may surface in lockscreens).
 *   - in_app: full detail; the patient is authenticated in the secure
 *     view per `secure_view_render_strategy: 'full_detail_default'`.
 *   - phone: full detail; provider phone outreach is the canonical
 *     full-detail clinical channel.
 *   - mail: low_context_phi (paper mail surface comparable to email
 *     for outside-secure exposure).
 */
export const CHANNEL_DEFAULT_CEILING: Record<DisclosureChannel, PrivacyExposureLevel> = {
  sms: 1,
  email: 2,
  push: 1,
  in_app: 5,
  phone: 5,
  mail: 2,
} as const

/**
 * Pathway-sensitivity clamp on outside-secure channels (sms / email /
 * push / mail). Inside-secure channels (in_app / phone) are not
 * clamped by pathway sensitivity because the patient is authenticated.
 *
 * Per Section 1Q.17 binding rule:
 *   - extreme: hard-blocks tier_3+ on outside-secure REGARDLESS of
 *     consent. The patient cannot opt in to having their TRT / ED /
 *     mental-health pathway named in an SMS or email.
 *   - high: tier_3+ on outside-secure ONLY with explicit
 *     `pathway_named_outside_secure_comm` consent (caller checks
 *     consents at runtime; this constant only declares the maximum
 *     reachable ceiling, not the consent gate).
 *   - moderate / low: no extra clamp on outside-secure.
 *
 * The function returns the maximum tier reachable on the (channel,
 * pathway_sensitivity) pair after the clamp. Returns null when the
 * combination is hard-blocked regardless of consent (extreme + tier_3+
 * outside-secure).
 */
export function pathwaySensitivityClampedCeiling(
  channel: DisclosureChannel,
  pathwaySensitivity: PathwaySensitivity | null,
): PrivacyExposureLevel | null {
  const baseCeiling = CHANNEL_DEFAULT_CEILING[channel]

  // Inside-secure channels are not clamped by pathway sensitivity.
  if (channel === 'in_app' || channel === 'phone') {
    return baseCeiling
  }

  // Unresolved pathway sensitivity on outside-secure: defer to the
  // graduated fail-safety rule in the evaluator. Channel ceiling is
  // returned as-is; the evaluator will fail-closed for tier_3+ if
  // pathway_sensitivity is unresolved.
  if (pathwaySensitivity === null) {
    return baseCeiling
  }

  if (pathwaySensitivity === 'extreme') {
    // Extreme blocks tier_3 outside-secure HARD. The reachable
    // ceiling on outside-secure for an extreme pathway is at most
    // tier_2 (low_context_phi).
    return Math.min(baseCeiling, 2) as PrivacyExposureLevel
  }

  // high: caller must check consent; we return the channel default
  // and let the evaluator gate on consent presence.
  // moderate / low: no extra clamp.
  return baseCeiling
}

/**
 * Returns true when the channel is "outside-secure" — content is
 * delivered to a surface where the patient is not authenticated
 * (SMS plaintext, email inbox, push lockscreen, paper mail).
 *
 * Used by the evaluator to decide whether pathway-sensitivity clamps
 * apply (they only apply outside-secure).
 */
export function isOutsideSecureChannel(channel: DisclosureChannel): boolean {
  return channel === 'sms' || channel === 'email' || channel === 'push' || channel === 'mail'
}
