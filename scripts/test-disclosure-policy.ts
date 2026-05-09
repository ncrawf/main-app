/**
 * Phase 4H-disclosure-policy commit 1 — pure-function unit tests for
 * the disclosure-policy evaluator.
 *
 * Tests the graduated fail-safety posture, channel ceiling clamps,
 * pathway sensitivity hard-blocks, and consent uplift flows. No DB.
 *
 * Run: npx tsx scripts/test-disclosure-policy.ts
 */

import {
  evaluateDisclosurePolicy,
  suppressionReasonForDecision,
  auditActionForDecision,
  type DisclosurePolicyInput,
  type TemplateMetadata,
  type ConsentSnapshot,
} from '../lib/disclosure-policy/evaluator'
import {
  CHANNEL_DEFAULT_CEILING,
  pathwaySensitivityClampedCeiling,
  isOutsideSecureChannel,
  type DisclosureChannel,
  type PathwaySensitivity,
} from '../lib/disclosure-policy/channel-defaults'

let pass = 0
let fail = 0
function assert(cond: boolean, msg: string) {
  if (cond) {
    pass++
    return
  }
  fail++
  console.error(`FAIL: ${msg}`)
}

const EMPTY_CONSENTS: ConsentSnapshot = { active_types: new Set<string>() }
const ALL_OUTSIDE_CONSENTS: ConsentSnapshot = {
  active_types: new Set([
    'pathway_named_outside_secure_comm',
    'clinical_detail_outside_secure_comm',
    'sensitive_clinical_outside_secure_comm',
    'marketing_email',
    'marketing_sms',
  ]),
}

// Tier-1 template (existence_only, account intent).
const TIER_1_ACCOUNT: TemplateMetadata = {
  template_key: 'tmpl.account_lifecycle.intake_submitted_v1',
  template_version: '1.0.0',
  privacy_exposure_level: 1,
  message_intent: 'account',
  safety_critical_override_allowed: false,
  transactional_critical: true,
}

// Tier-1 template (existence_only, billing intent).
const TIER_1_BILLING: TemplateMetadata = {
  template_key: 'tmpl.billing.payment_received_v1',
  template_version: '1.0.0',
  privacy_exposure_level: 1,
  message_intent: 'billing',
  safety_critical_override_allowed: false,
  transactional_critical: true,
}

// Tier-3 template (pathway_named_phi).
const TIER_3_CLINICAL: TemplateMetadata = {
  template_key: 'tmpl.clinical.protocol_named_v1',
  template_version: '1.0.0',
  privacy_exposure_level: 3,
  message_intent: 'clinical',
  safety_critical_override_allowed: false,
  requires_consent_for_exposure_level: ['pathway_named_outside_secure_comm'],
}

// Tier-4 template (clinical_detail_phi).
const TIER_4_CLINICAL: TemplateMetadata = {
  template_key: 'tmpl.clinical.detail_v1',
  template_version: '1.0.0',
  privacy_exposure_level: 4,
  message_intent: 'clinical',
  safety_critical_override_allowed: false,
  requires_consent_for_exposure_level: ['clinical_detail_outside_secure_comm'],
}

// =====================================================================
// Group 1: channel ceiling table sanity
// =====================================================================

assert(CHANNEL_DEFAULT_CEILING.sms === 1, 'sms ceiling = 1 (existence_only)')
assert(CHANNEL_DEFAULT_CEILING.push === 1, 'push ceiling = 1 (existence_only)')
assert(CHANNEL_DEFAULT_CEILING.email === 2, 'email ceiling = 2 (low_context_phi)')
assert(CHANNEL_DEFAULT_CEILING.mail === 2, 'mail ceiling = 2 (low_context_phi)')
assert(CHANNEL_DEFAULT_CEILING.in_app === 5, 'in_app ceiling = 5 (full detail)')
assert(CHANNEL_DEFAULT_CEILING.phone === 5, 'phone ceiling = 5 (full detail)')

assert(isOutsideSecureChannel('sms'), 'sms is outside-secure')
assert(isOutsideSecureChannel('email'), 'email is outside-secure')
assert(isOutsideSecureChannel('push'), 'push is outside-secure')
assert(isOutsideSecureChannel('mail'), 'mail is outside-secure')
assert(!isOutsideSecureChannel('in_app'), 'in_app is NOT outside-secure')
assert(!isOutsideSecureChannel('phone'), 'phone is NOT outside-secure')

// =====================================================================
// Group 2: pathway sensitivity clamps
// =====================================================================

assert(
  pathwaySensitivityClampedCeiling('sms', 'extreme') === 1,
  'extreme + sms = 1 (existence_only)',
)
assert(
  pathwaySensitivityClampedCeiling('email', 'extreme') === 2,
  'extreme + email = 2 (low_context_phi cap from base ceiling)',
)
assert(
  pathwaySensitivityClampedCeiling('email', 'high') === 2,
  'high + email = base ceiling (consent gate via evaluator)',
)
assert(
  pathwaySensitivityClampedCeiling('email', 'moderate') === 2,
  'moderate + email = base ceiling (no clamp)',
)
assert(
  pathwaySensitivityClampedCeiling('email', 'low') === 2,
  'low + email = base ceiling',
)
assert(
  pathwaySensitivityClampedCeiling('in_app', 'extreme') === 5,
  'extreme + in_app = 5 (inside-secure, no clamp)',
)
assert(
  pathwaySensitivityClampedCeiling('phone', 'extreme') === 5,
  'extreme + phone = 5 (inside-secure, no clamp)',
)

// =====================================================================
// Group 3: GRADUATED FAIL-SAFETY POSTURE — fail-open tier_1
// =====================================================================

// Missing intent + tier_1 template → fail open.
{
  const input: DisclosurePolicyInput = {
    channel: 'email',
    intended_privacy_exposure_level: 1,
    message_intent: undefined,
    template: TIER_1_ACCOUNT,
    pathway_sensitivity: null,
    consents: EMPTY_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(r.decision === 'pass', 'tier_1 + missing intent → pass')
  assert(
    r.fail_safety_posture === 'fail_open_tier_1',
    'tier_1 + missing intent → fail_safety_posture = fail_open_tier_1',
  )
}

// Missing cap + tier_1 template → fail open.
{
  const input: DisclosurePolicyInput = {
    channel: 'sms',
    intended_privacy_exposure_level: undefined,
    message_intent: 'account',
    template: TIER_1_ACCOUNT,
    pathway_sensitivity: null,
    consents: EMPTY_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(r.decision === 'pass', 'tier_1 + missing cap → pass')
  assert(
    r.fail_safety_posture === 'fail_open_tier_1',
    'tier_1 + missing cap → fail_open_tier_1',
  )
}

// Missing both + tier_0 (hypothetical no_phi) → fail open.
{
  const tier0Template: TemplateMetadata = {
    ...TIER_1_ACCOUNT,
    privacy_exposure_level: 0,
  }
  const input: DisclosurePolicyInput = {
    channel: 'sms',
    intended_privacy_exposure_level: undefined,
    message_intent: undefined,
    template: tier0Template,
    pathway_sensitivity: null,
    consents: EMPTY_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(r.decision === 'pass', 'tier_0 + missing both → pass')
  assert(
    r.fail_safety_posture === 'fail_open_tier_1',
    'tier_0 + missing both → fail_open_tier_1',
  )
}

// =====================================================================
// Group 4: GRADUATED FAIL-SAFETY POSTURE — fail-closed high tier
// =====================================================================

// Missing intent + tier_3 template → fail closed.
{
  const input: DisclosurePolicyInput = {
    channel: 'sms',
    intended_privacy_exposure_level: 3,
    message_intent: undefined,
    template: TIER_3_CLINICAL,
    pathway_sensitivity: 'moderate',
    consents: ALL_OUTSIDE_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(r.decision === 'block', 'tier_3 + missing intent → block')
  assert(
    r.decision === 'block' && r.reason === 'unknown_intent_high_tier',
    'tier_3 + missing intent → reason = unknown_intent_high_tier',
  )
  assert(
    r.fail_safety_posture === 'fail_closed_uncertain_high_tier',
    'tier_3 + missing intent → fail_closed_uncertain_high_tier',
  )
}

// Missing cap + tier_2 template → fail closed.
{
  const tier2Template: TemplateMetadata = {
    ...TIER_1_ACCOUNT,
    privacy_exposure_level: 2,
  }
  const input: DisclosurePolicyInput = {
    channel: 'email',
    intended_privacy_exposure_level: undefined,
    message_intent: 'account',
    template: tier2Template,
    pathway_sensitivity: 'low',
    consents: EMPTY_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(r.decision === 'block', 'tier_2 + missing cap → block')
  assert(
    r.decision === 'block' && r.reason === 'missing_action_metadata_high_tier',
    'tier_2 + missing cap → reason = missing_action_metadata_high_tier',
  )
  assert(
    r.fail_safety_posture === 'fail_closed_uncertain_high_tier',
    'tier_2 + missing cap → fail_closed_uncertain_high_tier',
  )
}

// =====================================================================
// Group 5: GRADUATED FAIL-SAFETY POSTURE — unknown / invalid template
// =====================================================================

{
  const input: DisclosurePolicyInput = {
    channel: 'email',
    intended_privacy_exposure_level: 1,
    message_intent: 'account',
    template: undefined,
    pathway_sensitivity: 'low',
    consents: EMPTY_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(r.decision === 'block', 'unknown template → block')
  assert(
    r.decision === 'block' && r.reason === 'unknown_template',
    'unknown template → reason = unknown_template',
  )
  assert(
    r.fail_safety_posture === 'fail_closed_uncertain_high_tier',
    'unknown template → fail_closed_uncertain_high_tier',
  )
}

// Out-of-range tier values.
for (const badTier of [-1, 6, 99, 1.5]) {
  const badTemplate = {
    ...TIER_1_ACCOUNT,
    privacy_exposure_level: badTier as 0 | 1 | 2 | 3 | 4 | 5,
  }
  const input: DisclosurePolicyInput = {
    channel: 'email',
    intended_privacy_exposure_level: 1,
    message_intent: 'account',
    template: badTemplate,
    pathway_sensitivity: 'low',
    consents: EMPTY_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(r.decision === 'block', `invalid tier ${badTier} → block`)
  assert(
    r.decision === 'block' && r.reason === 'invalid_template_tier',
    `invalid tier ${badTier} → invalid_template_tier`,
  )
}

// =====================================================================
// Group 6: action-template mismatch (failsafe)
// =====================================================================

// Template tier > action cap.
{
  const input: DisclosurePolicyInput = {
    channel: 'in_app',
    intended_privacy_exposure_level: 1,
    message_intent: 'clinical',
    template: TIER_3_CLINICAL,
    pathway_sensitivity: 'moderate',
    consents: ALL_OUTSIDE_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(
    r.decision === 'failsafe_action_template_mismatch',
    'template_tier > action_cap → failsafe',
  )
  assert(
    r.decision === 'failsafe_action_template_mismatch' &&
      r.reason === 'template_tier_exceeds_action_cap',
    'failsafe reason = template_tier_exceeds_action_cap',
  )
}

// Template intent != action intent.
{
  const input: DisclosurePolicyInput = {
    channel: 'email',
    intended_privacy_exposure_level: 1,
    message_intent: 'marketing',
    template: TIER_1_ACCOUNT,
    pathway_sensitivity: 'low',
    consents: EMPTY_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(
    r.decision === 'failsafe_action_template_mismatch',
    'template_intent != action_intent → failsafe',
  )
  assert(
    r.decision === 'failsafe_action_template_mismatch' &&
      r.reason === 'template_intent_mismatches_action_intent',
    'failsafe reason = template_intent_mismatches_action_intent',
  )
}

// =====================================================================
// Group 7: pathway sensitivity hard blocks
// =====================================================================

// extreme + tier_3 + outside-secure → block (pathway_sensitivity_block).
// Hard block REGARDLESS of consent — patient cannot opt-in to having
// extreme-pathway named in plaintext SMS / email / push / mail.
{
  const input: DisclosurePolicyInput = {
    channel: 'sms',
    intended_privacy_exposure_level: 3,
    message_intent: 'clinical',
    template: TIER_3_CLINICAL,
    pathway_sensitivity: 'extreme',
    consents: ALL_OUTSIDE_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(
    r.decision === 'block',
    'extreme + tier_3 + sms → block',
  )
  assert(
    r.decision === 'block' && r.reason === 'pathway_sensitivity_block',
    'extreme + tier_3 + sms → reason = pathway_sensitivity_block (HARD block, not channel ceiling)',
  )
  assert(
    r.fail_safety_posture === 'normal_decision',
    'extreme + tier_3 + sms → fail_safety_posture = normal_decision',
  )
}

// extreme + tier_3 + outside-secure (email) → block (HARD, not consent uplift).
{
  const input: DisclosurePolicyInput = {
    channel: 'email',
    intended_privacy_exposure_level: 3,
    message_intent: 'clinical',
    template: TIER_3_CLINICAL,
    pathway_sensitivity: 'extreme',
    consents: ALL_OUTSIDE_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(
    r.decision === 'block',
    'extreme + tier_3 + email → block',
  )
  assert(
    r.decision === 'block' && r.reason === 'pathway_sensitivity_block',
    'extreme + tier_3 + email → reason = pathway_sensitivity_block (HARD block, not consent uplift)',
  )
}

// extreme + tier_2 + outside-secure → pass (clamp does NOT hard-block tier_2).
{
  const tier2Template: TemplateMetadata = {
    ...TIER_1_BILLING,
    privacy_exposure_level: 2,
  }
  const input: DisclosurePolicyInput = {
    channel: 'email',
    intended_privacy_exposure_level: 2,
    message_intent: 'billing',
    template: tier2Template,
    pathway_sensitivity: 'extreme',
    consents: EMPTY_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(
    r.decision === 'pass',
    'extreme + tier_2 + email → pass (extreme only hard-blocks tier_3+)',
  )
}

// extreme + tier_3 + in_app → pass (inside-secure not clamped).
{
  const input: DisclosurePolicyInput = {
    channel: 'in_app',
    intended_privacy_exposure_level: 3,
    message_intent: 'clinical',
    template: TIER_3_CLINICAL,
    pathway_sensitivity: 'extreme',
    consents: EMPTY_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(
    r.decision === 'pass',
    'extreme + tier_3 + in_app → pass (inside-secure not clamped)',
  )
}

// =====================================================================
// Group 8: unresolved pathway sensitivity on tier_3+ outside-secure
// =====================================================================

{
  const input: DisclosurePolicyInput = {
    channel: 'sms',
    intended_privacy_exposure_level: 3,
    message_intent: 'clinical',
    template: TIER_3_CLINICAL,
    pathway_sensitivity: null,
    consents: ALL_OUTSIDE_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(
    r.decision === 'block',
    'unresolved pathway_sensitivity + tier_3 + sms → block',
  )
  assert(
    r.decision === 'block' &&
      r.reason === 'unresolved_pathway_sensitivity_high_tier',
    'reason = unresolved_pathway_sensitivity_high_tier',
  )
  assert(
    r.fail_safety_posture === 'fail_closed_uncertain_high_tier',
    'unresolved + tier_3 → fail_closed_uncertain_high_tier',
  )
}

// Unresolved pathway_sensitivity + tier_2 → pass (clamp not needed).
{
  const tier2Template: TemplateMetadata = {
    ...TIER_1_BILLING,
    privacy_exposure_level: 2,
  }
  const input: DisclosurePolicyInput = {
    channel: 'email',
    intended_privacy_exposure_level: 2,
    message_intent: 'billing',
    template: tier2Template,
    pathway_sensitivity: null,
    consents: EMPTY_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(
    r.decision === 'pass',
    'unresolved pathway_sensitivity + tier_2 + email → pass',
  )
}

// =====================================================================
// Group 9: high pathway + tier_3 outside-secure consent uplift
// =====================================================================

// high + tier_3 + email + missing pathway_named_outside_secure_comm.
{
  const input: DisclosurePolicyInput = {
    channel: 'email',
    intended_privacy_exposure_level: 3,
    message_intent: 'clinical',
    template: TIER_3_CLINICAL,
    pathway_sensitivity: 'high',
    consents: EMPTY_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(
    r.decision === 'consent_uplift_required',
    'high + tier_3 + email + missing consent → consent_uplift_required',
  )
  assert(
    r.decision === 'consent_uplift_required' &&
      r.missing_consent_types.includes('pathway_named_outside_secure_comm'),
    'missing_consent_types includes pathway_named_outside_secure_comm',
  )
}

// high + tier_3 + email + has consent → pass.
{
  const input: DisclosurePolicyInput = {
    channel: 'email',
    intended_privacy_exposure_level: 3,
    message_intent: 'clinical',
    template: TIER_3_CLINICAL,
    pathway_sensitivity: 'high',
    consents: ALL_OUTSIDE_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(
    r.decision === 'pass',
    'high + tier_3 + email + has consent → pass',
  )
}

// =====================================================================
// Group 10: channel ceiling exceeded (no consent uplift path)
// =====================================================================

// Tier_3 template + sms (ceiling 1) + no exposure-level consent uplift on the template.
{
  const noUpliftTemplate: TemplateMetadata = {
    ...TIER_3_CLINICAL,
    requires_consent_for_exposure_level: undefined,
  }
  const input: DisclosurePolicyInput = {
    channel: 'sms',
    intended_privacy_exposure_level: 3,
    message_intent: 'clinical',
    template: noUpliftTemplate,
    pathway_sensitivity: 'moderate',
    consents: ALL_OUTSIDE_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(
    r.decision === 'block',
    'tier_3 + sms + no uplift path → block',
  )
  assert(
    r.decision === 'block' && r.reason === 'channel_ceiling_exceeded',
    'reason = channel_ceiling_exceeded',
  )
}

// =====================================================================
// Group 11: in_app + tier_5 (highest) → pass
// =====================================================================

{
  const tier5Template: TemplateMetadata = {
    ...TIER_4_CLINICAL,
    privacy_exposure_level: 5,
  }
  const input: DisclosurePolicyInput = {
    channel: 'in_app',
    intended_privacy_exposure_level: 5,
    message_intent: 'clinical',
    template: tier5Template,
    pathway_sensitivity: 'extreme',
    consents: EMPTY_CONSENTS,
  }
  const r = evaluateDisclosurePolicy(input)
  assert(
    r.decision === 'pass',
    'tier_5 + in_app + extreme → pass (inside-secure)',
  )
}

// =====================================================================
// Group 12: tier_1 + sms + email + various pathways → pass (the
// canonical 4H-pre commit 5 / 4H-templates-discipline commit 1 happy
// paths)
// =====================================================================

const HAPPY_PATH_PATHWAYS: Array<PathwaySensitivity | null> = [
  null,
  'low',
  'moderate',
  'high',
  'extreme',
]
for (const pathway of HAPPY_PATH_PATHWAYS) {
  for (const channel of ['sms', 'email'] as DisclosureChannel[]) {
    for (const template of [TIER_1_ACCOUNT, TIER_1_BILLING]) {
      const input: DisclosurePolicyInput = {
        channel,
        intended_privacy_exposure_level: 1,
        message_intent: template.message_intent,
        template,
        pathway_sensitivity: pathway,
        consents: EMPTY_CONSENTS,
      }
      const r = evaluateDisclosurePolicy(input)
      assert(
        r.decision === 'pass',
        `happy path: tier_1 ${template.message_intent} + ${channel} + ${pathway ?? 'null'} → pass`,
      )
    }
  }
}

// =====================================================================
// Group 13: suppressionReasonForDecision + auditActionForDecision
// =====================================================================

assert(
  suppressionReasonForDecision({
    decision: 'block',
    reason: 'channel_ceiling_exceeded',
    computed_channel_max: 1,
    fail_safety_posture: 'normal_decision',
  }) === 'channel_ceiling_exceeded',
  'channel_ceiling_exceeded → channel_ceiling_exceeded',
)

assert(
  suppressionReasonForDecision({
    decision: 'block',
    reason: 'pathway_sensitivity_block',
    computed_channel_max: null,
    fail_safety_posture: 'normal_decision',
  }) === 'pathway_sensitivity_block',
  'pathway_sensitivity_block → pathway_sensitivity_block',
)

assert(
  suppressionReasonForDecision({
    decision: 'consent_uplift_required',
    reason: 'missing_consent_for_exposure_level',
    missing_consent_types: ['pathway_named_outside_secure_comm'],
    computed_channel_max: 2,
    fail_safety_posture: 'normal_decision',
  }) === 'missing_consent',
  'consent_uplift_required → missing_consent',
)

assert(
  auditActionForDecision({
    decision: 'block',
    reason: 'unknown_template',
    computed_channel_max: null,
    fail_safety_posture: 'fail_closed_uncertain_high_tier',
  }) === 'notification.dispatch_blocked_by_privacy_check',
  'block → notification.dispatch_blocked_by_privacy_check',
)

assert(
  auditActionForDecision({
    decision: 'consent_uplift_required',
    reason: 'missing_consent_for_intent',
    missing_consent_types: ['marketing_email'],
    computed_channel_max: 2,
    fail_safety_posture: 'normal_decision',
  }) === 'notification.consent_uplift_required',
  'consent_uplift_required → notification.consent_uplift_required',
)

assert(
  auditActionForDecision({
    decision: 'failsafe_action_template_mismatch',
    reason: 'template_tier_exceeds_action_cap',
    fail_safety_posture: 'fail_closed_uncertain_high_tier',
  }) === 'notification.action_template_intent_mismatch',
  'failsafe → notification.action_template_intent_mismatch',
)

// =====================================================================
console.log(`\n=== test-disclosure-policy: ${pass} pass, ${fail} fail ===\n`)
if (fail > 0) process.exit(1)
