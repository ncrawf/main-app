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
import { paymentReceivedTemplateV1 } from './billing/payment_received_v1'
import { intakeSubmittedTemplateV1 } from './account_lifecycle/intake_submitted_v1'
import { caseApprovedTemplateV1 } from './clinical_decision/case_approved_v1'
import { awaitingClinicalReviewTemplateV1 } from './clinical_decision/awaiting_clinical_review_v1'
import { activeCareTemplateV1 } from './clinical_decision/active_care_v1'
import { followupDueTemplateV1 } from './clinical_decision/followup_due_v1'
import { followupNeededTemplateV1 } from './clinical_decision/followup_needed_v1'
import { orderShippedTemplateV1 } from './fulfillment_lifecycle/order_shipped_v1'

/**
 * Templates registry. Phase 4H-pre commit 5 lands the first Template
 * (`tmpl.billing.payment_received_v1`). Subsequent migrations under
 * the per-PR DELETE-AFTER-PARITY directive add more templates; the
 * registry grows one entry per migrated case.
 *
 * Phase 4H-templates-discipline c4 added the fifth Template
 * (`tmpl.fulfillment_lifecycle.order_shipped_v1`) — FIRST in the
 * `fulfillment_lifecycle` sibling-domain folder per system-map
 * `## Platform operational model` doctrine.
 */
export const TEMPLATE_REGISTRY: ReadonlyArray<Template> = [
  paymentReceivedTemplateV1,
  intakeSubmittedTemplateV1,
  caseApprovedTemplateV1,
  awaitingClinicalReviewTemplateV1,
  activeCareTemplateV1,
  followupDueTemplateV1,
  followupNeededTemplateV1,
  orderShippedTemplateV1,
]

/**
 * Look up a Template by its template_key. Returns undefined when not
 * found. Used by the dispatcher + render module.
 */
export function findTemplateByKey(templateKey: string): Template | undefined {
  return TEMPLATE_REGISTRY.find((t) => t.template_key === templateKey)
}

export { paymentReceivedTemplateV1 } from './billing/payment_received_v1'
export { intakeSubmittedTemplateV1 } from './account_lifecycle/intake_submitted_v1'
export { caseApprovedTemplateV1 } from './clinical_decision/case_approved_v1'
export { awaitingClinicalReviewTemplateV1 } from './clinical_decision/awaiting_clinical_review_v1'
export { activeCareTemplateV1 } from './clinical_decision/active_care_v1'
export { followupDueTemplateV1 } from './clinical_decision/followup_due_v1'
export { followupNeededTemplateV1 } from './clinical_decision/followup_needed_v1'
export { orderShippedTemplateV1 } from './fulfillment_lifecycle/order_shipped_v1'

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
