/**
 * Phase 4H-pre commit 3 — Templates registry barrel.
 *
 * Empty in this commit. The first Template (`tmpl.billing.payment_received_v1`)
 * lands in Phase 4H-pre commit 5 as the parity proof for the v0 → 1Q
 * cutover. After that, additional Templates migrate one-per-PR per
 * the DELETE-AFTER-PARITY directive in system map Section 1Q.12.
 *
 * The exact registry shape (Map vs file-glob auto-discovery vs typed
 * lookup table) is intentionally deferred to Phase 4H-rules-runtime
 * — see docs/architecture/phase_4h_target_first_decision_record.md
 * Section 8 ("Open implementation choices INTENTIONALLY DEFERRED").
 *
 * For now this barrel exists so:
 *   - Future Templates know where to land their imports.
 *   - CI lint at scripts/lint-rules-templates-scaffold.ts can verify
 *     the scaffold is in place.
 *   - The TS compiler validates the Template interface is loadable.
 */

import type { Template } from './types'

/**
 * Empty registry. The runtime shape is decided in 4H-rules-runtime;
 * until then this is a placeholder that compiles + exports the type
 * for downstream consumers to import.
 */
export const TEMPLATE_REGISTRY: ReadonlyArray<Template> = []

export type { Template } from './types'
export type {
  TemplateDomain,
  TemplateVariable,
  ProhibitedClaimSpec,
  ToneConstraint,
  AIRefinementConstraints,
  EvidenceRefSpec,
  TestRenderRef,
  JurisdictionVariants,
  ConsentType,
  CampaignType,
  PersonalizationLevel,
  Channel,
  MessageIntent,
  PathwaySensitivity,
} from './types'
export {
  templateRequiresDualCodeownerCosign,
  templateSafetyOverrideIsValid,
} from './types'
