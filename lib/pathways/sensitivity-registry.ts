/**
 * Phase 4H-disclosure-policy commit 2 — typed pathway-code -> pathway-sensitivity
 * registry.
 *
 * Per system map Section 1Q.17 (privacy + communication governance) +
 * Section 1Q.4 (Rule.pathway_scope) + Section 1K.2 (Pathway composition).
 *
 * Why this exists:
 *   The disclosure-policy evaluator at lib/disclosure-policy/evaluator.ts
 *   fail-closes when `pathway_sensitivity === null && templateTier >= 3 &&
 *   isOutsideSecureChannel(channel)`. Until rules populate
 *   `pathway_sensitivity` at enqueue time, no tier_3+ outside-secure rule
 *   can ship. This registry is the data the rule dispatcher reads to
 *   resolve sensitivity from the rule's declared `pathway_scope`.
 *
 * Why a registry instead of inlining on each Pathway object:
 *   The Rule layer at repo/rules/ should not import from the intake
 *   composition layer at lib/intake/pathways/ (different concerns,
 *   different lifecycles). The registry is the typed boundary between
 *   the two layers — the intake pathway composes patient-facing flows,
 *   while this file declares the privacy posture of each pathway code
 *   for governance purposes. The values must agree (and the live-DB
 *   smoke test asserts they do for the canonical 'glp1' code), but the
 *   layers stay independent.
 *
 * EDITING DISCIPLINE:
 *   These sensitivity values are binding governance policy, not config.
 *   Per Section 1Q.5 binding rule, changes to high-sensitivity defaults
 *   require dual CODEOWNER co-sign (clinical + compliance). Treat this
 *   file like a policy document.
 *
 * SCOPE NOTE:
 *   Today this registry has exactly one entry ('glp1') because that is
 *   the only Pathway with composition shipped at lib/intake/pathways/.
 *   Future pathways (female_hrt, trt, peptides, etc.) get added here as
 *   their compositions land. The CI lint at
 *   scripts/lint-rules-templates-scaffold.ts asserts every PathwayCode
 *   referenced in any Rule's pathway_scope resolves to a value here.
 */

import type { PathwaySensitivity } from '../outbound/types'

/**
 * Canonical set of pathway codes the rules engine knows about. Keys
 * MUST match the `pathway_code` strings used by Pathway compositions
 * at lib/intake/pathways/ to keep the two layers consistent.
 *
 * Adding a new code here requires (a) a corresponding sensitivity
 * declaration in PATHWAY_SENSITIVITY_BY_CODE below and (b) the
 * intake-side Pathway composition to use the same string identifier.
 */
export const PATHWAY_CODES = ['glp1'] as const

export type PathwayCode = (typeof PATHWAY_CODES)[number]

/**
 * Per-pathway privacy sensitivity declaration. Drives:
 *   - Outside-secure channel ceiling clamps in the disclosure-policy
 *     evaluator (Section 1Q.17 four-bucket taxonomy).
 *   - Hard blocks on tier_3+ outside-secure for `extreme` pathways
 *     regardless of patient consent.
 *   - Consent-uplift requirements on tier_3+ outside-secure for `high`
 *     pathways (deferred runtime; see disclosure-policy commit 1
 *     checkpoint section 5).
 *
 * Sensitivity rationale per Section 1Q.17:
 *   - low: wellness / supplements
 *   - moderate: GLP-1 / metabolic
 *   - high: female HRT
 *   - extreme: TRT, ED, peptides, mental health
 *
 * Today's single entry ('glp1' -> 'moderate') aligns with the
 * Pathway.sensitivity_level in lib/intake/pathways/glp1.ts.
 */
export const PATHWAY_SENSITIVITY_BY_CODE: Record<PathwayCode, PathwaySensitivity> = {
  glp1: 'moderate',
}

/**
 * Resolve a pathway code to its sensitivity. Throws on unknown codes
 * (rather than returning undefined) because every PathwayCode in the
 * Rule layer must be declared here — an unknown code at runtime is a
 * governance gap that should fail fast, not silently fall back to a
 * permissive default.
 *
 * Callers in the rule dispatcher should catch the throw and let the
 * downstream evaluator's graduated fail-safety posture handle the row
 * (it will fail-closed for tier_3+ outside-secure with
 * `unresolved_pathway_sensitivity_high_tier`).
 */
export function resolvePathwaySensitivity(code: PathwayCode): PathwaySensitivity {
  const v = PATHWAY_SENSITIVITY_BY_CODE[code]
  if (v === undefined) {
    throw new Error(
      `resolvePathwaySensitivity: unknown pathway_code='${code}'. ` +
        `Add an entry to PATHWAY_SENSITIVITY_BY_CODE in lib/pathways/sensitivity-registry.ts ` +
        `or remove the reference from the Rule's pathway_scope.`,
    )
  }
  return v
}

/**
 * Type guard: checks whether an arbitrary string is a registered
 * PathwayCode. Used by the CI lint to validate Rule.pathway_scope
 * elements without throwing.
 */
export function isKnownPathwayCode(s: string): s is PathwayCode {
  return (PATHWAY_CODES as readonly string[]).includes(s)
}
