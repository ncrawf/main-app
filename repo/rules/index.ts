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
import { paymentReceivedV1 } from './billing/payment_received_v1'
import { intakeSubmittedV1 } from './account_lifecycle/intake_submitted_v1'
import { caseApprovedV1 } from './clinical_decision/case_approved_v1'

/**
 * Rules registry. Phase 4H-pre commit 5 lands the first Rule
 * (`rule.billing.payment_received_v1`). Subsequent migrations under
 * the per-PR DELETE-AFTER-PARITY directive add more rules; the registry
 * grows one entry per migrated NotificationTemplateKey case.
 *
 * The runtime shape (Map vs file-glob vs subscription registry) is
 * decided in Phase 4H-rules-runtime; until then this array is the
 * single source the dispatcher consults via `findRulesByTriggerEventType`.
 */
export const RULE_REGISTRY: ReadonlyArray<Rule> = [
  paymentReceivedV1,
  intakeSubmittedV1,
  caseApprovedV1,
]

/**
 * Find rules whose trigger matches the given event_type. Used by the
 * dispatcher at lib/rules/runtime/dispatcher.ts. Returns active rules
 * only (status === 'active').
 */
export function findRulesByTriggerEventType(eventType: string): ReadonlyArray<Rule> {
  return RULE_REGISTRY.filter(
    (r) =>
      r.status === 'active' &&
      r.trigger.kind === 'event' &&
      r.trigger.event_type === eventType,
  )
}

export { paymentReceivedV1 } from './billing/payment_received_v1'
export { intakeSubmittedV1 } from './account_lifecycle/intake_submitted_v1'
export { caseApprovedV1 } from './clinical_decision/case_approved_v1'

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
