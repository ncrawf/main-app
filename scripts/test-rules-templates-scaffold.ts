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
// Test 1: Registries are exported and empty (commit 3 scaffold-only)
// ---------------------------------------------------------------------
console.log('[test 1] Registries are empty in commit 3 (no rules / templates ship)')

assert(
  Array.isArray(RULE_REGISTRY),
  'RULE_REGISTRY is an array',
  `got ${typeof RULE_REGISTRY}`
)
assert(
  RULE_REGISTRY.length === 0,
  'RULE_REGISTRY is empty (commit 3 ships no rules)',
  `got ${RULE_REGISTRY.length} rules`
)

assert(
  Array.isArray(TEMPLATE_REGISTRY),
  'TEMPLATE_REGISTRY is an array',
  `got ${typeof TEMPLATE_REGISTRY}`
)
assert(
  TEMPLATE_REGISTRY.length === 0,
  'TEMPLATE_REGISTRY is empty (commit 3 ships no templates)',
  `got ${TEMPLATE_REGISTRY.length} templates`
)

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
