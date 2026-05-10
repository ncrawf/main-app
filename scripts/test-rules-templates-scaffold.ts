/**
 * Phase 4H-pre commit 3 — unit test for the rules + templates scaffold.
 *
 * Validates:
 *  1. Rule + Template interfaces compile and accept a worked example
 *     (dry-run construction; nothing is written to a registry).
 *  2. The registries are exported and empty.
 *  3. Type-guard helpers (actionEmitsCommunication,
 *     templateRequiresDualCodeownerCosign, templateSafetyOverrideIsValid)
 *     return the expected results across happy + edge cases.
 *  4. CI lint at scripts/lint-rules-templates-scaffold.ts exits 0 on
 *     the current tree (CODEOWNERS gate intact, no v0 extensions,
 *     scaffold present).
 *
 * Run with: npx tsx scripts/test-rules-templates-scaffold.ts
 */

import { execSync } from 'node:child_process'

import {
  RULE_REGISTRY,
  type Rule,
  type RuleAction,
  actionEmitsCommunication,
  getActionIntendedPrivacyExposureLevel,
  getActionMessageIntent,
} from '../repo/rules'

import {
  TEMPLATE_REGISTRY,
  type Template,
  templateRequiresDualCodeownerCosign,
  templateSafetyOverrideIsValid,
} from '../repo/templates'

let passes = 0
let failures = 0
function pass(label: string): void {
  console.log(`  PASS — ${label}`)
  passes++
}
function fail(label: string, msg: string): void {
  console.error(`  FAIL — ${label}: ${msg}`)
  failures++
}
function assert(cond: boolean, label: string, msg: string): void {
  if (cond) pass(label)
  else fail(label, msg)
}

// ---------------------------------------------------------------------
// Test 1: Registries reflect the current cutover state
// ---------------------------------------------------------------------
// Phase 4H-pre commit 3 baseline was empty registries. Commit 5 lands
// the first Rule + Template (`rule.billing.payment_received_v1` +
// `tmpl.billing.payment_received_v1`). After every subsequent per-PR
// migration of a NotificationTemplateKey case, the registries grow by
// one entry each. This test asserts the registries contain the
// expected baseline rules/templates and remain consistent.
console.log('[test 1] Registries reflect the current cutover state')

assert(
  Array.isArray(RULE_REGISTRY),
  'RULE_REGISTRY is an array',
  `got ${typeof RULE_REGISTRY}`
)
assert(
  RULE_REGISTRY.length >= 11,
  'RULE_REGISTRY contains all 11 typed Rules after Phase 4H-templates-discipline c9 (FINAL legacy migration; case_denied closes the series)',
  `got ${RULE_REGISTRY.length} rules — expected >= 11 after Phase 4H-templates-discipline commit 9`
)
assert(
  RULE_REGISTRY.some((r) => r.rule_id === 'rule.billing.payment_received_v1'),
  'RULE_REGISTRY contains rule.billing.payment_received_v1',
  'first parity proof Rule missing'
)
assert(
  RULE_REGISTRY.some((r) => r.rule_id === 'rule.account_lifecycle.intake_submitted_v1'),
  'RULE_REGISTRY contains rule.account_lifecycle.intake_submitted_v1',
  'second parity proof Rule missing (Phase 4H-templates-discipline commit 1)'
)
assert(
  RULE_REGISTRY.some((r) => r.rule_id === 'rule.clinical_decision.case_approved_v1'),
  'RULE_REGISTRY contains rule.clinical_decision.case_approved_v1',
  'third parity proof Rule missing (Phase 4H-templates-discipline commit 2; first clinical + provider-authority Rule)'
)
assert(
  RULE_REGISTRY.some((r) => r.rule_id === 'rule.clinical_decision.awaiting_clinical_review_v1'),
  'RULE_REGISTRY contains rule.clinical_decision.awaiting_clinical_review_v1',
  'fourth parity proof Rule missing (Phase 4H-templates-discipline commit 3; first 2-status OR producer gate)'
)
assert(
  RULE_REGISTRY.some((r) => r.rule_id === 'rule.fulfillment_lifecycle.order_shipped_v1'),
  'RULE_REGISTRY contains rule.fulfillment_lifecycle.order_shipped_v1',
  'fifth parity proof Rule missing (Phase 4H-templates-discipline commit 4; first sibling-domain expansion into fulfillment_lifecycle per ## Platform operational model doctrine)'
)
assert(
  RULE_REGISTRY.some((r) => r.rule_id === 'rule.clinical_decision.active_care_v1'),
  'RULE_REGISTRY contains rule.clinical_decision.active_care_v1',
  'sixth parity proof Rule missing (Phase 4H-templates-discipline commit 5; third clinical_decision domain Rule)'
)
assert(
  RULE_REGISTRY.some((r) => r.rule_id === 'rule.clinical_decision.followup_due_v1'),
  'RULE_REGISTRY contains rule.clinical_decision.followup_due_v1',
  'seventh parity proof Rule missing (Phase 4H-templates-discipline commit 6; fourth clinical_decision domain Rule; first single-producer-surface)'
)
assert(
  RULE_REGISTRY.some((r) => r.rule_id === 'rule.clinical_decision.followup_needed_v1'),
  'RULE_REGISTRY contains rule.clinical_decision.followup_needed_v1',
  'eighth parity proof Rule missing (Phase 4H-templates-discipline commit 7; fifth clinical_decision domain Rule; first asymmetric per-producer status gates)'
)
assert(
  RULE_REGISTRY.some((r) => r.rule_id === 'rule.clinical_decision.case_denied_v1'),
  'RULE_REGISTRY contains rule.clinical_decision.case_denied_v1',
  'eleventh parity proof Rule missing (Phase 4H-templates-discipline commit 9; sixth clinical_decision domain Rule; FINAL legacy migration)'
)
// Phase 4H-templates-discipline c9 — sixth clinical_decision domain
// Rule. FINAL legacy migration; closes the 4H-templates-discipline
// series. Same shape as awaiting_clinical_review_v1 + followup_needed_v1
// (system-authority, tier_1 existence_only, operational, dual-producer).
// SCOPE BINDING: provider clinical-decision denials only — see Rule
// file header DENIED SEMANTIC SCOPE block + PREFLIGHT c9 §1A.
{
  const caseDenied = RULE_REGISTRY.find(
    (r) => r.rule_id === 'rule.clinical_decision.case_denied_v1',
  )
  assert(
    caseDenied?.domain === 'clinical_decision',
    'case_denied_v1 declares domain=clinical_decision',
    `got ${caseDenied?.domain}`,
  )
  assert(
    caseDenied?.authority_floor === 'system',
    'case_denied_v1 declares authority_floor=system',
    `got ${caseDenied?.authority_floor}`,
  )
  assert(
    caseDenied?.recall_severity === 'operational',
    'case_denied_v1 declares recall_severity=operational',
    `got ${caseDenied?.recall_severity}`,
  )
  assert(
    caseDenied?.action.kind === 'notify' &&
      'message_intent' in caseDenied.action &&
      caseDenied.action.message_intent === 'operational',
    'case_denied_v1 action.message_intent=operational',
    `got ${caseDenied?.action.kind === 'notify' ? caseDenied.action.message_intent : '(non-notify action)'}`,
  )
  assert(
    caseDenied?.action.kind === 'notify' &&
      'intended_privacy_exposure_level' in caseDenied.action &&
      caseDenied.action.intended_privacy_exposure_level === 1,
    'case_denied_v1 action.intended_privacy_exposure_level=1 (existence_only)',
    `got ${caseDenied?.action.kind === 'notify' ? caseDenied.action.intended_privacy_exposure_level : '(non-notify action)'}`,
  )
  assert(
    caseDenied?.audit_event_type === 'rule.fired.clinical_decision.case_denied_v1',
    'case_denied_v1 audit_event_type uses clinical_decision namespace',
    `got ${caseDenied?.audit_event_type}`,
  )
  assert(
    caseDenied?.trigger.kind === 'event' &&
      caseDenied.trigger.event_type === 'patient.case_denied',
    "case_denied_v1 trigger.event_type='patient.case_denied'",
    `got ${caseDenied?.trigger.kind === 'event' ? caseDenied.trigger.event_type : '(non-event trigger)'}`,
  )
}
assert(
  RULE_REGISTRY.some((r) => r.rule_id === 'rule.pharmacy_lifecycle.rx_sent_v1'),
  'RULE_REGISTRY contains rule.pharmacy_lifecycle.rx_sent_v1',
  'ninth parity proof Rule missing (Phase 4H-templates-discipline commit 8; first pharmacy_lifecycle domain Rule; sibling-domain activation #3)'
)
assert(
  RULE_REGISTRY.some((r) => r.rule_id === 'rule.pharmacy_lifecycle.refill_initiated_v1'),
  'RULE_REGISTRY contains rule.pharmacy_lifecycle.refill_initiated_v1',
  'tenth parity proof Rule missing (Phase 4H-templates-discipline commit 8; second pharmacy_lifecycle domain Rule; ships in same commit as rx_sent_v1)'
)
// Phase 4H-templates-discipline c8 — first pharmacy_lifecycle domain
// Rule. Sibling-domain activation #3 (after clinical_decision and
// fulfillment_lifecycle). system-authority + tier_2 + operational;
// uses the `pharmacy_event_kind` discriminant on its payload (NOT
// case_kind, NOT order_kind) per the system-map `## Platform
// operational model` doctrine.
{
  const rxSent = RULE_REGISTRY.find(
    (r) => r.rule_id === 'rule.pharmacy_lifecycle.rx_sent_v1',
  )
  assert(
    rxSent?.domain === 'pharmacy_lifecycle',
    'rx_sent_v1 declares domain=pharmacy_lifecycle',
    `got ${rxSent?.domain}`,
  )
  assert(
    rxSent?.authority_floor === 'system',
    'rx_sent_v1 declares authority_floor=system',
    `got ${rxSent?.authority_floor}`,
  )
  assert(
    rxSent?.recall_severity === 'operational',
    'rx_sent_v1 declares recall_severity=operational',
    `got ${rxSent?.recall_severity}`,
  )
  assert(
    rxSent?.action.kind === 'notify' &&
      'message_intent' in rxSent.action &&
      rxSent.action.message_intent === 'operational',
    'rx_sent_v1 action.message_intent=operational',
    `got ${rxSent?.action.kind === 'notify' ? rxSent.action.message_intent : '(non-notify action)'}`,
  )
  assert(
    rxSent?.action.kind === 'notify' &&
      'intended_privacy_exposure_level' in rxSent.action &&
      rxSent.action.intended_privacy_exposure_level === 2,
    'rx_sent_v1 action.intended_privacy_exposure_level=2 (low_context_phi)',
    `got ${rxSent?.action.kind === 'notify' ? rxSent.action.intended_privacy_exposure_level : '(non-notify action)'}`,
  )
  assert(
    rxSent?.audit_event_type === 'rule.fired.pharmacy_lifecycle.rx_sent_v1',
    'rx_sent_v1 audit_event_type uses pharmacy_lifecycle namespace',
    `got ${rxSent?.audit_event_type}`,
  )
  assert(
    rxSent?.trigger.kind === 'event' &&
      rxSent.trigger.event_type === 'patient.rx_sent_to_pharmacy',
    "rx_sent_v1 trigger.event_type='patient.rx_sent_to_pharmacy'",
    `got ${rxSent?.trigger.kind === 'event' ? rxSent.trigger.event_type : '(non-event trigger)'}`,
  )
}
// Phase 4H-templates-discipline c8 — second pharmacy_lifecycle domain
// Rule. Same shape as rx_sent_v1; ships in the same commit to
// demonstrate pharmacy_event_kind polymorphism out of the gate.
{
  const refillInitiated = RULE_REGISTRY.find(
    (r) => r.rule_id === 'rule.pharmacy_lifecycle.refill_initiated_v1',
  )
  assert(
    refillInitiated?.domain === 'pharmacy_lifecycle',
    'refill_initiated_v1 declares domain=pharmacy_lifecycle',
    `got ${refillInitiated?.domain}`,
  )
  assert(
    refillInitiated?.authority_floor === 'system',
    'refill_initiated_v1 declares authority_floor=system',
    `got ${refillInitiated?.authority_floor}`,
  )
  assert(
    refillInitiated?.recall_severity === 'operational',
    'refill_initiated_v1 declares recall_severity=operational',
    `got ${refillInitiated?.recall_severity}`,
  )
  assert(
    refillInitiated?.action.kind === 'notify' &&
      'message_intent' in refillInitiated.action &&
      refillInitiated.action.message_intent === 'operational',
    'refill_initiated_v1 action.message_intent=operational',
    `got ${refillInitiated?.action.kind === 'notify' ? refillInitiated.action.message_intent : '(non-notify action)'}`,
  )
  assert(
    refillInitiated?.action.kind === 'notify' &&
      'intended_privacy_exposure_level' in refillInitiated.action &&
      refillInitiated.action.intended_privacy_exposure_level === 2,
    'refill_initiated_v1 action.intended_privacy_exposure_level=2 (low_context_phi)',
    `got ${refillInitiated?.action.kind === 'notify' ? refillInitiated.action.intended_privacy_exposure_level : '(non-notify action)'}`,
  )
  assert(
    refillInitiated?.audit_event_type === 'rule.fired.pharmacy_lifecycle.refill_initiated_v1',
    'refill_initiated_v1 audit_event_type uses pharmacy_lifecycle namespace',
    `got ${refillInitiated?.audit_event_type}`,
  )
  assert(
    refillInitiated?.trigger.kind === 'event' &&
      refillInitiated.trigger.event_type === 'patient.refill_initiated',
    "refill_initiated_v1 trigger.event_type='patient.refill_initiated'",
    `got ${refillInitiated?.trigger.kind === 'event' ? refillInitiated.trigger.event_type : '(non-event trigger)'}`,
  )
}
// Phase 4H-templates-discipline c7 — fifth clinical_decision domain
// Rule. FIRST asymmetric producer-side status gates: treatment_items
// (paused | stopped) vs care_programs (paused | completed |
// cancelled). Collapses 4 legacy PATIENT_NOTIFY_BY_STATUS map
// entries into one typed Rule.
{
  const followupNeeded = RULE_REGISTRY.find(
    (r) => r.rule_id === 'rule.clinical_decision.followup_needed_v1',
  )
  assert(
    followupNeeded?.domain === 'clinical_decision',
    'followup_needed_v1 declares domain=clinical_decision',
    `got ${followupNeeded?.domain}`,
  )
  assert(
    followupNeeded?.authority_floor === 'system',
    'followup_needed_v1 declares authority_floor=system',
    `got ${followupNeeded?.authority_floor}`,
  )
  assert(
    followupNeeded?.recall_severity === 'operational',
    'followup_needed_v1 declares recall_severity=operational',
    `got ${followupNeeded?.recall_severity}`,
  )
  assert(
    followupNeeded?.action.kind === 'notify' &&
      'message_intent' in followupNeeded.action &&
      followupNeeded.action.message_intent === 'operational',
    'followup_needed_v1 action.message_intent=operational',
    `got ${followupNeeded?.action.kind === 'notify' ? followupNeeded.action.message_intent : '(non-notify action)'}`,
  )
  assert(
    followupNeeded?.action.kind === 'notify' &&
      'intended_privacy_exposure_level' in followupNeeded.action &&
      followupNeeded.action.intended_privacy_exposure_level === 1,
    'followup_needed_v1 action.intended_privacy_exposure_level=1 (existence_only)',
    `got ${followupNeeded?.action.kind === 'notify' ? followupNeeded.action.intended_privacy_exposure_level : '(non-notify action)'}`,
  )
  assert(
    followupNeeded?.audit_event_type === 'rule.fired.clinical_decision.followup_needed_v1',
    'followup_needed_v1 audit_event_type uses clinical_decision namespace',
    `got ${followupNeeded?.audit_event_type}`,
  )
  assert(
    followupNeeded?.trigger.kind === 'event' &&
      followupNeeded.trigger.event_type === 'patient.case_followup_needed',
    "followup_needed_v1 trigger.event_type='patient.case_followup_needed'",
    `got ${followupNeeded?.trigger.kind === 'event' ? followupNeeded.trigger.event_type : '(non-event trigger)'}`,
  )
}
// Phase 4H-templates-discipline c6 — fourth clinical_decision domain
// Rule. FIRST single-producer-surface clinical_decision rule (only
// fires from updateTreatmentItemStatus; refill_due not a
// care_programs.status).
{
  const followupDue = RULE_REGISTRY.find(
    (r) => r.rule_id === 'rule.clinical_decision.followup_due_v1',
  )
  assert(
    followupDue?.domain === 'clinical_decision',
    'followup_due_v1 declares domain=clinical_decision',
    `got ${followupDue?.domain}`,
  )
  assert(
    followupDue?.authority_floor === 'system',
    'followup_due_v1 declares authority_floor=system',
    `got ${followupDue?.authority_floor}`,
  )
  assert(
    followupDue?.recall_severity === 'operational',
    'followup_due_v1 declares recall_severity=operational',
    `got ${followupDue?.recall_severity}`,
  )
  assert(
    followupDue?.action.kind === 'notify' &&
      'message_intent' in followupDue.action &&
      followupDue.action.message_intent === 'operational',
    'followup_due_v1 action.message_intent=operational',
    `got ${followupDue?.action.kind === 'notify' ? followupDue.action.message_intent : '(non-notify action)'}`,
  )
  assert(
    followupDue?.action.kind === 'notify' &&
      'intended_privacy_exposure_level' in followupDue.action &&
      followupDue.action.intended_privacy_exposure_level === 1,
    'followup_due_v1 action.intended_privacy_exposure_level=1 (existence_only)',
    `got ${followupDue?.action.kind === 'notify' ? followupDue.action.intended_privacy_exposure_level : '(non-notify action)'}`,
  )
  assert(
    followupDue?.audit_event_type === 'rule.fired.clinical_decision.followup_due_v1',
    'followup_due_v1 audit_event_type uses clinical_decision namespace',
    `got ${followupDue?.audit_event_type}`,
  )
  assert(
    followupDue?.trigger.kind === 'event' &&
      followupDue.trigger.event_type === 'patient.case_followup_due',
    "followup_due_v1 trigger.event_type='patient.case_followup_due'",
    `got ${followupDue?.trigger.kind === 'event' ? followupDue.trigger.event_type : '(non-event trigger)'}`,
  )
}
// Phase 4H-templates-discipline commit 5 — third clinical_decision
// domain Rule (siblings: case_approved_v1, awaiting_clinical_review_v1).
// Same shape as awaiting_clinical_review_v1: system-authority status
// ack, tier_1, operational intent.
{
  const activeCare = RULE_REGISTRY.find(
    (r) => r.rule_id === 'rule.clinical_decision.active_care_v1',
  )
  assert(
    activeCare?.domain === 'clinical_decision',
    'active_care_v1 declares domain=clinical_decision',
    `got ${activeCare?.domain}`,
  )
  assert(
    activeCare?.authority_floor === 'system',
    'active_care_v1 declares authority_floor=system (status ack, NOT provider authority)',
    `got ${activeCare?.authority_floor}`,
  )
  assert(
    activeCare?.recall_severity === 'operational',
    'active_care_v1 declares recall_severity=operational',
    `got ${activeCare?.recall_severity}`,
  )
  assert(
    activeCare?.action.kind === 'notify' &&
      'message_intent' in activeCare.action &&
      activeCare.action.message_intent === 'operational',
    'active_care_v1 action.message_intent=operational',
    `got ${activeCare?.action.kind === 'notify' ? activeCare.action.message_intent : '(non-notify action)'}`,
  )
  assert(
    activeCare?.action.kind === 'notify' &&
      'intended_privacy_exposure_level' in activeCare.action &&
      activeCare.action.intended_privacy_exposure_level === 1,
    'active_care_v1 action.intended_privacy_exposure_level=1 (existence_only)',
    `got ${activeCare?.action.kind === 'notify' ? activeCare.action.intended_privacy_exposure_level : '(non-notify action)'}`,
  )
  assert(
    activeCare?.audit_event_type === 'rule.fired.clinical_decision.active_care_v1',
    'active_care_v1 audit_event_type uses clinical_decision namespace',
    `got ${activeCare?.audit_event_type}`,
  )
  assert(
    activeCare?.trigger.kind === 'event' &&
      activeCare.trigger.event_type === 'patient.case_active',
    "active_care_v1 trigger.event_type='patient.case_active'",
    `got ${activeCare?.trigger.kind === 'event' ? activeCare.trigger.event_type : '(non-event trigger)'}`,
  )
}
// Phase 4H-templates-discipline commit 4 — first Rule in the
// fulfillment_lifecycle domain. system-authority + tier_2; uses the
// `order_kind` discriminant on its payload (NOT case_kind) per the
// system-map `## Platform operational model` doctrine.
{
  const orderShipped = RULE_REGISTRY.find(
    (r) => r.rule_id === 'rule.fulfillment_lifecycle.order_shipped_v1',
  )
  assert(
    orderShipped?.domain === 'fulfillment_lifecycle',
    'order_shipped_v1 declares domain=fulfillment_lifecycle (FIRST sibling-domain expansion)',
    `got ${orderShipped?.domain}`,
  )
  assert(
    orderShipped?.authority_floor === 'system',
    'order_shipped_v1 declares authority_floor=system',
    `got ${orderShipped?.authority_floor}`,
  )
  assert(
    orderShipped?.recall_severity === 'operational',
    'order_shipped_v1 declares recall_severity=operational',
    `got ${orderShipped?.recall_severity}`,
  )
  assert(
    orderShipped?.action.kind === 'notify' &&
      'message_intent' in orderShipped.action &&
      orderShipped.action.message_intent === 'operational',
    'order_shipped_v1 action.message_intent=operational',
    `got ${orderShipped?.action.kind === 'notify' ? orderShipped.action.message_intent : '(non-notify action)'}`,
  )
  assert(
    orderShipped?.action.kind === 'notify' &&
      'intended_privacy_exposure_level' in orderShipped.action &&
      orderShipped.action.intended_privacy_exposure_level === 2,
    'order_shipped_v1 action.intended_privacy_exposure_level=2 (low_context_phi)',
    `got ${orderShipped?.action.kind === 'notify' ? orderShipped.action.intended_privacy_exposure_level : '(non-notify action)'}`,
  )
  assert(
    orderShipped?.audit_event_type === 'rule.fired.fulfillment_lifecycle.order_shipped_v1',
    'order_shipped_v1 audit_event_type uses fulfillment_lifecycle namespace',
    `got ${orderShipped?.audit_event_type}`,
  )
  assert(
    orderShipped?.trigger.kind === 'event' &&
      orderShipped.trigger.event_type === 'patient.order_shipped',
    "order_shipped_v1 trigger.event_type='patient.order_shipped'",
    `got ${orderShipped?.trigger.kind === 'event' ? orderShipped.trigger.event_type : '(non-event trigger)'}`,
  )
}
// Phase 4H-templates-discipline commit 3 — second clinical_decision
// domain Rule. system-authority status ack (NOT provider-authority);
// recall_severity=operational; tier_1.
{
  const awaitingReview = RULE_REGISTRY.find(
    (r) => r.rule_id === 'rule.clinical_decision.awaiting_clinical_review_v1',
  )
  assert(
    awaitingReview?.authority_floor === 'system',
    'awaiting_clinical_review_v1 declares authority_floor=system (NOT provider — distinct from case_approved)',
    `got ${awaitingReview?.authority_floor}`,
  )
  assert(
    awaitingReview?.recall_severity === 'operational',
    'awaiting_clinical_review_v1 declares recall_severity=operational',
    `got ${awaitingReview?.recall_severity}`,
  )
  assert(
    awaitingReview?.action.kind === 'notify' &&
      'message_intent' in awaitingReview.action &&
      awaitingReview.action.message_intent === 'operational',
    'awaiting_clinical_review_v1 action.message_intent=operational',
    `got ${awaitingReview?.action.kind === 'notify' ? awaitingReview.action.message_intent : '(non-notify action)'}`,
  )
  assert(
    awaitingReview?.action.kind === 'notify' &&
      'intended_privacy_exposure_level' in awaitingReview.action &&
      awaitingReview.action.intended_privacy_exposure_level === 1,
    'awaiting_clinical_review_v1 action.intended_privacy_exposure_level=1 (existence_only)',
    `got ${awaitingReview?.action.kind === 'notify' ? awaitingReview.action.intended_privacy_exposure_level : '(non-notify action)'}`,
  )
  assert(
    awaitingReview?.pathway_scope === undefined ||
      awaitingReview.pathway_scope.length === 0,
    'awaiting_clinical_review_v1 pathway_scope is undefined',
    `got pathway_scope=${JSON.stringify(awaitingReview?.pathway_scope)}`,
  )
  assert(
    awaitingReview?.trigger.kind === 'event' &&
      awaitingReview.trigger.event_type === 'patient.case_under_review',
    "awaiting_clinical_review_v1 trigger.event_type='patient.case_under_review' (2-status OR gate at producer)",
    `got ${awaitingReview?.trigger.kind === 'event' ? awaitingReview.trigger.event_type : '(non-event trigger)'}`,
  )
}
// Phase 4H-templates-discipline commit 2 — first Rule with
// authority_floor='provider' + message_intent='clinical' +
// recall_severity='clinical_significant' active in the registry.
{
  const caseApproved = RULE_REGISTRY.find(
    (r) => r.rule_id === 'rule.clinical_decision.case_approved_v1',
  )
  assert(
    caseApproved?.authority_floor === 'provider',
    'case_approved_v1 declares authority_floor=provider',
    `got ${caseApproved?.authority_floor}`,
  )
  assert(
    caseApproved?.recall_severity === 'clinical_significant',
    'case_approved_v1 declares recall_severity=clinical_significant',
    `got ${caseApproved?.recall_severity}`,
  )
  assert(
    caseApproved?.action.kind === 'notify' &&
      'message_intent' in caseApproved.action &&
      caseApproved.action.message_intent === 'clinical',
    'case_approved_v1 action.message_intent=clinical',
    `got ${caseApproved?.action.kind === 'notify' ? caseApproved.action.message_intent : '(non-notify action)'}`,
  )
  assert(
    caseApproved?.action.kind === 'notify' &&
      'intended_privacy_exposure_level' in caseApproved.action &&
      caseApproved.action.intended_privacy_exposure_level === 2,
    'case_approved_v1 action.intended_privacy_exposure_level=2 (low_context_phi)',
    `got ${caseApproved?.action.kind === 'notify' ? caseApproved.action.intended_privacy_exposure_level : '(non-notify action)'}`,
  )
  assert(
    caseApproved?.pathway_scope === undefined ||
      caseApproved.pathway_scope.length === 0,
    'case_approved_v1 pathway_scope is undefined (rule fires regardless of pathway; producer-site filters gate to glp1_primary / weight_loss)',
    `got pathway_scope=${JSON.stringify(caseApproved?.pathway_scope)}`,
  )
}

assert(
  Array.isArray(TEMPLATE_REGISTRY),
  'TEMPLATE_REGISTRY is an array',
  `got ${typeof TEMPLATE_REGISTRY}`
)
assert(
  TEMPLATE_REGISTRY.length >= 11,
  'TEMPLATE_REGISTRY contains all 11 typed Templates after Phase 4H-templates-discipline c9',
  `got ${TEMPLATE_REGISTRY.length} templates — expected >= 11 after Phase 4H-templates-discipline commit 9`
)
assert(
  TEMPLATE_REGISTRY.some((t) => t.template_key === 'tmpl.billing.payment_received_v1'),
  'TEMPLATE_REGISTRY contains tmpl.billing.payment_received_v1',
  'first parity proof Template missing'
)
assert(
  TEMPLATE_REGISTRY.some((t) => t.template_key === 'tmpl.account_lifecycle.intake_submitted_v1'),
  'TEMPLATE_REGISTRY contains tmpl.account_lifecycle.intake_submitted_v1',
  'second parity proof Template missing (Phase 4H-templates-discipline commit 1)'
)
assert(
  TEMPLATE_REGISTRY.some((t) => t.template_key === 'tmpl.clinical_decision.case_approved_v1'),
  'TEMPLATE_REGISTRY contains tmpl.clinical_decision.case_approved_v1',
  'third parity proof Template missing (Phase 4H-templates-discipline commit 2)'
)
assert(
  TEMPLATE_REGISTRY.some(
    (t) => t.template_key === 'tmpl.clinical_decision.awaiting_clinical_review_v1',
  ),
  'TEMPLATE_REGISTRY contains tmpl.clinical_decision.awaiting_clinical_review_v1',
  'fourth parity proof Template missing (Phase 4H-templates-discipline commit 3)'
)
assert(
  TEMPLATE_REGISTRY.some(
    (t) => t.template_key === 'tmpl.fulfillment_lifecycle.order_shipped_v1',
  ),
  'TEMPLATE_REGISTRY contains tmpl.fulfillment_lifecycle.order_shipped_v1',
  'fifth parity proof Template missing (Phase 4H-templates-discipline commit 4; first fulfillment_lifecycle domain Template)'
)
assert(
  TEMPLATE_REGISTRY.some(
    (t) => t.template_key === 'tmpl.clinical_decision.active_care_v1',
  ),
  'TEMPLATE_REGISTRY contains tmpl.clinical_decision.active_care_v1',
  'sixth parity proof Template missing (Phase 4H-templates-discipline commit 5; third clinical_decision domain Template)'
)
assert(
  TEMPLATE_REGISTRY.some(
    (t) => t.template_key === 'tmpl.clinical_decision.followup_due_v1',
  ),
  'TEMPLATE_REGISTRY contains tmpl.clinical_decision.followup_due_v1',
  'seventh parity proof Template missing (Phase 4H-templates-discipline commit 6; fourth clinical_decision domain Template)'
)
assert(
  TEMPLATE_REGISTRY.some(
    (t) => t.template_key === 'tmpl.clinical_decision.followup_needed_v1',
  ),
  'TEMPLATE_REGISTRY contains tmpl.clinical_decision.followup_needed_v1',
  'eighth parity proof Template missing (Phase 4H-templates-discipline commit 7; fifth clinical_decision domain Template)'
)
assert(
  TEMPLATE_REGISTRY.some(
    (t) => t.template_key === 'tmpl.clinical_decision.case_denied_v1',
  ),
  'TEMPLATE_REGISTRY contains tmpl.clinical_decision.case_denied_v1',
  'eleventh parity proof Template missing (Phase 4H-templates-discipline commit 9; sixth clinical_decision domain Template; FINAL legacy migration)'
)
// Phase 4H-templates-discipline c9 — verify case_denied Template
// ships with the expected tier_1 + operational shape.
{
  const caseDeniedTemplate = TEMPLATE_REGISTRY.find(
    (t) => t.template_key === 'tmpl.clinical_decision.case_denied_v1',
  )
  assert(
    caseDeniedTemplate?.domain === 'clinical_decision',
    'case_denied Template domain=clinical_decision',
    `got ${caseDeniedTemplate?.domain}`,
  )
  assert(
    caseDeniedTemplate?.transactional_critical === false,
    'case_denied Template transactional_critical=false',
    `got transactional_critical=${caseDeniedTemplate?.transactional_critical}`,
  )
  assert(
    caseDeniedTemplate?.privacy_exposure_level === 1,
    'case_denied Template privacy_exposure_level=1 (existence_only)',
    `got ${caseDeniedTemplate?.privacy_exposure_level}`,
  )
  assert(
    caseDeniedTemplate?.message_intent === 'operational',
    'case_denied Template message_intent=operational',
    `got ${caseDeniedTemplate?.message_intent}`,
  )
}
assert(
  TEMPLATE_REGISTRY.some(
    (t) => t.template_key === 'tmpl.pharmacy_lifecycle.rx_sent_v1',
  ),
  'TEMPLATE_REGISTRY contains tmpl.pharmacy_lifecycle.rx_sent_v1',
  'ninth parity proof Template missing (Phase 4H-templates-discipline commit 8; first pharmacy_lifecycle domain Template; sibling-domain activation #3)'
)
assert(
  TEMPLATE_REGISTRY.some(
    (t) => t.template_key === 'tmpl.pharmacy_lifecycle.refill_initiated_v1',
  ),
  'TEMPLATE_REGISTRY contains tmpl.pharmacy_lifecycle.refill_initiated_v1',
  'tenth parity proof Template missing (Phase 4H-templates-discipline commit 8; second pharmacy_lifecycle domain Template)'
)
// Phase 4H-templates-discipline c8 — verify both pharmacy_lifecycle
// Templates ship with the expected tier_2 + operational shape.
{
  const rxSentTemplate = TEMPLATE_REGISTRY.find(
    (t) => t.template_key === 'tmpl.pharmacy_lifecycle.rx_sent_v1',
  )
  assert(
    rxSentTemplate?.domain === 'pharmacy_lifecycle',
    'rx_sent Template domain=pharmacy_lifecycle',
    `got ${rxSentTemplate?.domain}`,
  )
  assert(
    rxSentTemplate?.transactional_critical === false,
    'rx_sent Template transactional_critical=false',
    `got transactional_critical=${rxSentTemplate?.transactional_critical}`,
  )
  assert(
    rxSentTemplate?.privacy_exposure_level === 2,
    'rx_sent Template privacy_exposure_level=2 (low_context_phi)',
    `got ${rxSentTemplate?.privacy_exposure_level}`,
  )
  assert(
    rxSentTemplate?.message_intent === 'operational',
    'rx_sent Template message_intent=operational',
    `got ${rxSentTemplate?.message_intent}`,
  )
}
{
  const refillInitiatedTemplate = TEMPLATE_REGISTRY.find(
    (t) => t.template_key === 'tmpl.pharmacy_lifecycle.refill_initiated_v1',
  )
  assert(
    refillInitiatedTemplate?.domain === 'pharmacy_lifecycle',
    'refill_initiated Template domain=pharmacy_lifecycle',
    `got ${refillInitiatedTemplate?.domain}`,
  )
  assert(
    refillInitiatedTemplate?.transactional_critical === false,
    'refill_initiated Template transactional_critical=false',
    `got transactional_critical=${refillInitiatedTemplate?.transactional_critical}`,
  )
  assert(
    refillInitiatedTemplate?.privacy_exposure_level === 2,
    'refill_initiated Template privacy_exposure_level=2 (low_context_phi)',
    `got ${refillInitiatedTemplate?.privacy_exposure_level}`,
  )
  assert(
    refillInitiatedTemplate?.message_intent === 'operational',
    'refill_initiated Template message_intent=operational',
    `got ${refillInitiatedTemplate?.message_intent}`,
  )
}
// Phase 4H-templates-discipline c7 — verify followup_needed Template
// ships with the expected tier_1 + operational shape.
{
  const followupNeededTemplate = TEMPLATE_REGISTRY.find(
    (t) => t.template_key === 'tmpl.clinical_decision.followup_needed_v1',
  )
  assert(
    followupNeededTemplate?.domain === 'clinical_decision',
    'followup_needed Template domain=clinical_decision',
    `got ${followupNeededTemplate?.domain}`,
  )
  assert(
    followupNeededTemplate?.transactional_critical === false,
    'followup_needed Template transactional_critical=false',
    `got transactional_critical=${followupNeededTemplate?.transactional_critical}`,
  )
  assert(
    followupNeededTemplate?.privacy_exposure_level === 1,
    'followup_needed Template privacy_exposure_level=1 (existence_only)',
    `got ${followupNeededTemplate?.privacy_exposure_level}`,
  )
  assert(
    followupNeededTemplate?.message_intent === 'operational',
    'followup_needed Template message_intent=operational',
    `got ${followupNeededTemplate?.message_intent}`,
  )
}
// Phase 4H-templates-discipline c6 — verify followup_due Template
// ships with the expected tier_1 + operational shape.
{
  const followupDueTemplate = TEMPLATE_REGISTRY.find(
    (t) => t.template_key === 'tmpl.clinical_decision.followup_due_v1',
  )
  assert(
    followupDueTemplate?.domain === 'clinical_decision',
    'followup_due Template domain=clinical_decision',
    `got ${followupDueTemplate?.domain}`,
  )
  assert(
    followupDueTemplate?.transactional_critical === false,
    'followup_due Template transactional_critical=false',
    `got transactional_critical=${followupDueTemplate?.transactional_critical}`,
  )
  assert(
    followupDueTemplate?.privacy_exposure_level === 1,
    'followup_due Template privacy_exposure_level=1 (existence_only)',
    `got ${followupDueTemplate?.privacy_exposure_level}`,
  )
  assert(
    followupDueTemplate?.message_intent === 'operational',
    'followup_due Template message_intent=operational',
    `got ${followupDueTemplate?.message_intent}`,
  )
}
// Phase 4H-templates-discipline c5 — verify active_care Template
// ships with the expected tier_1 + operational shape;
// transactional_critical=false carries the same axis-separation
// reasoning that locked it false on the prior Templates.
{
  const activeCareTemplate = TEMPLATE_REGISTRY.find(
    (t) => t.template_key === 'tmpl.clinical_decision.active_care_v1',
  )
  assert(
    activeCareTemplate?.domain === 'clinical_decision',
    'active_care Template domain=clinical_decision',
    `got ${activeCareTemplate?.domain}`,
  )
  assert(
    activeCareTemplate?.transactional_critical === false,
    'active_care Template transactional_critical=false (cadence-bypass NOT defensible for active-care welcome)',
    `got transactional_critical=${activeCareTemplate?.transactional_critical}`,
  )
  assert(
    activeCareTemplate?.privacy_exposure_level === 1,
    'active_care Template privacy_exposure_level=1 (existence_only)',
    `got ${activeCareTemplate?.privacy_exposure_level}`,
  )
  assert(
    activeCareTemplate?.message_intent === 'operational',
    'active_care Template message_intent=operational',
    `got ${activeCareTemplate?.message_intent}`,
  )
}
// Phase 4H-templates-discipline c4 — verify order_shipped Template
// ships with the expected tier_2 + operational shape;
// transactional_critical=false carries the same axis-separation
// reasoning that locked it false on the prior Templates.
{
  const orderShippedTemplate = TEMPLATE_REGISTRY.find(
    (t) => t.template_key === 'tmpl.fulfillment_lifecycle.order_shipped_v1',
  )
  assert(
    orderShippedTemplate?.domain === 'fulfillment_lifecycle',
    'order_shipped Template domain=fulfillment_lifecycle (FIRST in the new sibling-domain folder per ## Platform operational model doctrine)',
    `got ${orderShippedTemplate?.domain}`,
  )
  assert(
    orderShippedTemplate?.transactional_critical === false,
    'order_shipped Template transactional_critical=false (cadence-bypass NOT defensible for shipping notification)',
    `got transactional_critical=${orderShippedTemplate?.transactional_critical}`,
  )
  assert(
    orderShippedTemplate?.privacy_exposure_level === 2,
    'order_shipped Template privacy_exposure_level=2 (low_context_phi)',
    `got ${orderShippedTemplate?.privacy_exposure_level}`,
  )
  assert(
    orderShippedTemplate?.message_intent === 'operational',
    'order_shipped Template message_intent=operational',
    `got ${orderShippedTemplate?.message_intent}`,
  )
}
// Verify awaiting_clinical_review Template ships with the expected
// tier_1 + operational shape; transactional_critical=false carries
// the same axis-separation reasoning that locked it false on
// case_approved_v1.
{
  const awaitingReviewTemplate = TEMPLATE_REGISTRY.find(
    (t) => t.template_key === 'tmpl.clinical_decision.awaiting_clinical_review_v1',
  )
  assert(
    awaitingReviewTemplate?.transactional_critical === false,
    'awaiting_clinical_review Template transactional_critical=false (cadence-bypass NOT defensible for status ack)',
    `got transactional_critical=${awaitingReviewTemplate?.transactional_critical}`,
  )
  assert(
    awaitingReviewTemplate?.privacy_exposure_level === 1,
    'awaiting_clinical_review Template privacy_exposure_level=1 (existence_only)',
    `got ${awaitingReviewTemplate?.privacy_exposure_level}`,
  )
  assert(
    awaitingReviewTemplate?.message_intent === 'operational',
    'awaiting_clinical_review Template message_intent=operational',
    `got ${awaitingReviewTemplate?.message_intent}`,
  )
}
// Verify case_approved Template ships with transactional_critical=false
// per pre-execution refinement #3 (cadence-bypass NOT defensible for
// case approval; clinical authority is carried by the Rule's
// authority_floor + message_intent + recall_severity instead).
{
  const caseApprovedTemplate = TEMPLATE_REGISTRY.find(
    (t) => t.template_key === 'tmpl.clinical_decision.case_approved_v1',
  )
  assert(
    caseApprovedTemplate?.transactional_critical === false,
    'case_approved Template transactional_critical=false (cadence-bypass NOT defensible for case approval per pre-execution refinement #3)',
    `got transactional_critical=${caseApprovedTemplate?.transactional_critical}`,
  )
  assert(
    caseApprovedTemplate?.privacy_exposure_level === 2,
    'case_approved Template privacy_exposure_level=2 (low_context_phi)',
    `got ${caseApprovedTemplate?.privacy_exposure_level}`,
  )
  assert(
    caseApprovedTemplate?.message_intent === 'clinical',
    'case_approved Template message_intent=clinical',
    `got ${caseApprovedTemplate?.message_intent}`,
  )
}

// ---------------------------------------------------------------------
// Test 2: Rule interface accepts the commit-5 anchor shape
// ---------------------------------------------------------------------
console.log('\n[test 2] Rule interface accepts the payment_received anchor shape')

const paymentReceivedRule: Rule = {
  rule_id: 'rule.billing.payment_received_v1',
  rule_version: '1.0.0',
  domain: 'billing_subscription',
  trigger: { kind: 'event', event_type: 'commerce.checkout.session_completed' },
  preconditions: [],
  required_inputs: [{ source: 'commerce_orders', field: 'id' }],
  authority_floor: 'system',
  action: {
    kind: 'notify',
    channels: ['email', 'sms'],
    send_policy_class: 'transactional_billing',
    intended_privacy_exposure_level: 1,
    message_intent: 'billing',
  },
  priority: 'standard',
  blocking: false,
  template_key: 'tmpl.billing.payment_received_v1',
  evidence_refs_required: [{ source_kind: 'commerce_orders', required: true }],
  // NOTE: The rule.fired.<concept> audit action vocabulary is intentionally
  // not pre-registered in lib/events/audit-actions.ts at commit 3. Commit 5
  // (the payment_received parity migration) will register the specific
  // value 'rule.fired.payment_received' in the typed catalog. For this
  // scaffold-only worked example, we use an existing reserved
  // RULE_AND_NOTIFICATION_AUDIT_ACTIONS value to demonstrate that the
  // Rule.audit_event_type field accepts catalog values.
  audit_event_type: 'notification.privacy_exposure_check',
  status: 'draft',
  effective_at: '2026-05-08T00:00:00Z',
  test_fixtures: [],
  rationale_note:
    'First parity proof of the v0 → 1Q cutover per Phase 4H-pre commit 5. ' +
    'Replaces the legacy payment_received case in lib/workflows/notificationRules.ts. ' +
    'Tier_1 existence_only billing intent; transactional_critical so cadence rules do not suppress.',
  recall_severity: 'operational',
}
pass('payment_received Rule shape accepted (TS compile)')
assert(
  paymentReceivedRule.action.kind === 'notify',
  'action.kind = notify',
  `got ${paymentReceivedRule.action.kind}`
)

// ---------------------------------------------------------------------
// Test 3: Template interface accepts the commit-5 anchor shape
// ---------------------------------------------------------------------
console.log('\n[test 3] Template interface accepts the payment_received anchor shape')

const paymentReceivedTemplate: Template = {
  template_key: 'tmpl.billing.payment_received_v1',
  template_version: '1.0.0',
  domain: 'billing_subscription',
  allowed_use: 'patient_facing',
  channels: ['email', 'sms'],
  required_variables: [
    { name: 'payment_amount', type: 'number', required: true, doc: 'Charged amount in cents' },
    { name: 'payment_currency', type: 'iso4217', required: true, doc: '3-letter ISO 4217 code' },
    { name: 'brand_short_label', type: 'string', required: true, doc: 'From brands.label_short per 4C-pre' },
  ],
  prohibited_claims: [
    { kind: 'must_not_promise_outcome' },
    { kind: 'must_not_diagnose' },
  ],
  tone_constraints: ['warm_direct', 'factual_only'],
  clinical_review_required: false,
  ai_refinement_allowed: false,
  evidence_required: [],
  status: 'draft',
  effective_at: '2026-05-08T00:00:00Z',
  test_renders: [],
  rationale_note:
    'First parity proof Template. tier_1 existence_only billing intent. ' +
    'Replaces v0 lib/notifications/patientMessages.ts payment_received case. ' +
    'Brand label sourced from brands.label_short per Phase 4C-pre multi-tenant primitives.',
  privacy_exposure_level: 1,
  message_intent: 'billing',
  outside_secure_render_strategy: 'mention_brand_only',
  secure_view_render_strategy: 'full_detail_default',
  safety_critical_override_allowed: false,
  action_context_required: true,
  personalization_level: 'none',
  pathway_sensitivity_compatibility: ['low', 'moderate', 'high', 'extreme'],
  transactional_critical: true,
  interaction_context_compatibility: ['both'],
}
pass('payment_received Template shape accepted (TS compile)')
assert(
  paymentReceivedTemplate.privacy_exposure_level === 1,
  'privacy_exposure_level = 1 (existence_only)',
  `got ${paymentReceivedTemplate.privacy_exposure_level}`
)
assert(
  paymentReceivedTemplate.transactional_critical === true,
  'transactional_critical = true (billing bypasses cadence suppression)',
  `got ${paymentReceivedTemplate.transactional_critical}`
)

// ---------------------------------------------------------------------
// Test 4: Action-template alignment (1Q.4 + 1Q.5)
// ---------------------------------------------------------------------
console.log('\n[test 4] Action-template alignment per 1Q.4')

assert(
  paymentReceivedRule.action.kind === 'notify' &&
    'intended_privacy_exposure_level' in paymentReceivedRule.action &&
    paymentReceivedRule.action.intended_privacy_exposure_level >=
      paymentReceivedTemplate.privacy_exposure_level,
  'template.privacy_exposure_level <= action.intended_privacy_exposure_level',
  'CRITICAL: action-template privacy alignment violation'
)
assert(
  'message_intent' in paymentReceivedRule.action &&
    paymentReceivedRule.action.message_intent === paymentReceivedTemplate.message_intent,
  'template.message_intent === action.message_intent (billing)',
  'message_intent mismatch'
)
assert(
  paymentReceivedRule.template_key === paymentReceivedTemplate.template_key,
  'rule.template_key === template.template_key',
  'template_key linkage broken'
)

// ---------------------------------------------------------------------
// Test 5: Type-guard helpers
// ---------------------------------------------------------------------
console.log('\n[test 5] Type-guard helpers')

const notifyAction: RuleAction = {
  kind: 'notify',
  channels: ['email'],
  send_policy_class: 'standard',
  intended_privacy_exposure_level: 2,
  message_intent: 'operational',
}
const blockAction: RuleAction = {
  kind: 'block',
  reason_code: 'denied_contraindication_absolute',
}

assert(
  actionEmitsCommunication(notifyAction) === true,
  'actionEmitsCommunication(notify) = true',
  'returned false'
)
assert(
  actionEmitsCommunication(blockAction) === false,
  'actionEmitsCommunication(block) = false',
  'returned true'
)
assert(
  getActionIntendedPrivacyExposureLevel(notifyAction) === 2,
  'getActionIntendedPrivacyExposureLevel(notify) = 2',
  `got ${getActionIntendedPrivacyExposureLevel(notifyAction)}`
)
assert(
  getActionIntendedPrivacyExposureLevel(blockAction) === undefined,
  'getActionIntendedPrivacyExposureLevel(block) = undefined',
  `got ${getActionIntendedPrivacyExposureLevel(blockAction)}`
)
assert(
  getActionMessageIntent(notifyAction) === 'operational',
  'getActionMessageIntent(notify) = operational',
  `got ${getActionMessageIntent(notifyAction)}`
)
assert(
  getActionMessageIntent(blockAction) === undefined,
  'getActionMessageIntent(block) = undefined',
  `got ${getActionMessageIntent(blockAction)}`
)

// ---------------------------------------------------------------------
// Test 6: Template type-guards (dual CODEOWNER co-sign + safety override)
// ---------------------------------------------------------------------
console.log('\n[test 6] Template type-guards')

assert(
  templateRequiresDualCodeownerCosign(paymentReceivedTemplate) === false,
  'payment_received does not require dual co-sign (billing, tier_1)',
  'unexpectedly required dual co-sign'
)

const hrtMarketingTemplate: Template = {
  ...paymentReceivedTemplate,
  template_key: 'tmpl.marketing.hrt_winback_v1',
  domain: 'marketing_lifecycle',
  privacy_exposure_level: 3,
  message_intent: 'marketing',
  outside_secure_render_strategy: 'mention_pathway_name_with_consent',
  pathway_sensitivity_compatibility: ['high'],
  campaign_type: 'winback',
  transactional_critical: false,
}
assert(
  templateRequiresDualCodeownerCosign(hrtMarketingTemplate) === true,
  'HRT marketing tier_3 winback REQUIRES dual CODEOWNER co-sign per 1Q.5 binding rule',
  'CRITICAL: dual co-sign rule broken — high-sensitivity tier_3 marketing escapes governance'
)

const validSafetyTemplate: Template = {
  ...paymentReceivedTemplate,
  template_key: 'tmpl.safety.adverse_event_phone_outreach_v1',
  message_intent: 'safety',
  privacy_exposure_level: 4,
  safety_critical_override_allowed: true,
  safety_vague_companion_template_key: 'tmpl.safety.vague_companion_v1',
}
assert(
  templateSafetyOverrideIsValid(validSafetyTemplate) === true,
  'safety_critical_override on safety intent + with companion = valid',
  'unexpectedly invalid'
)

const invalidSafetyOverrideTemplate: Template = {
  ...paymentReceivedTemplate,
  safety_critical_override_allowed: true,
  // missing companion + non-safety intent → CI lint should catch this
}
assert(
  templateSafetyOverrideIsValid(invalidSafetyOverrideTemplate) === false,
  'safety_critical_override on non-safety intent without companion = invalid',
  'unexpectedly valid'
)

// ---------------------------------------------------------------------
// Test 7: CI lint smoke (lint-rules-templates-scaffold.ts must exit 0)
// ---------------------------------------------------------------------
console.log('\n[test 7] CI lint smoke')

try {
  const lintOutput = execSync('npx tsx scripts/lint-rules-templates-scaffold.ts', {
    cwd: process.cwd(),
    encoding: 'utf8',
    stdio: 'pipe',
  })
  assert(
    lintOutput.includes('GREEN'),
    'scripts/lint-rules-templates-scaffold.ts exits 0 on the current tree',
    `lint output: ${lintOutput.split('\n').slice(-3).join(' | ')}`
  )
} catch (err) {
  const errOut = err instanceof Error ? err.message : String(err)
  fail(
    'CI lint smoke',
    `lint script failed: ${errOut.split('\n').slice(0, 5).join(' | ')}`
  )
}

// ---------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------
console.log('')
console.log('----------------------------------------------------------------------')
console.log(
  `Phase 4H-pre commit 3 rules+templates scaffold: ${passes} passed, ${failures} failed.`
)

if (failures > 0) {
  console.error('RED — scaffold broken. Investigate before shipping.')
  process.exit(1)
} else {
  console.log('GREEN — Rule + Template scaffold + governance lint locked.')
}
