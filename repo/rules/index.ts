/**
 * Phase 4H-pre commit 3 — Rules registry barrel.
 *
 * Empty in this commit. The first Rule (`rule.billing.payment_received_v1`)
 * lands in Phase 4H-pre commit 5 as the parity proof for the v0 → 1Q
 * cutover. After that, additional Rules migrate one-per-PR per the
 * DELETE-AFTER-PARITY directive in system map Section 1Q.12.
 *
 * The exact registry shape (Map vs subscription registry vs file-glob
 * auto-discovery) is intentionally deferred to Phase 4H-rules-runtime
 * — see docs/architecture/phase_4h_target_first_decision_record.md
 * Section 8 ("Open implementation choices INTENTIONALLY DEFERRED").
 *
 * For now this barrel exists so:
 *   - Future Rules know where to land their imports.
 *   - CI lint at scripts/lint-rules-templates-scaffold.ts can verify
 *     the scaffold is in place.
 *   - The TS compiler validates the Rule interface is loadable.
 */

import type { Rule } from './types'

/**
 * Empty registry. The runtime shape (Map, file-glob, subscription
 * registry) is decided in 4H-rules-runtime; until then this is a
 * placeholder that compiles + exports the type for downstream
 * consumers to import.
 */
export const RULE_REGISTRY: ReadonlyArray<Rule> = []

export type { Rule } from './types'
export type {
  RuleAction,
  RuleDomain,
  RuleTrigger,
  Predicate,
  InputRef,
  AuthorityFloor,
  CapabilityCode,
  PathwayCode,
  JurisdictionCode,
  EscalationOwnerRole,
  EvidenceRefSpec,
  TestFixtureRef,
  Channel,
  TypedActionOption,
  DecisionSupportPayload,
  TemplateKey,
  SendPolicyClass,
  RecallSeverity,
  AuditEventType,
  MessageIntent,
  PathwaySensitivity,
} from './types'
export {
  actionEmitsCommunication,
  getActionIntendedPrivacyExposureLevel,
  getActionMessageIntent,
} from './types'
