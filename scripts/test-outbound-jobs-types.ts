/**
 * Phase 4E outbound jobs — pure-function unit test (no DB, no network).
 *
 * Validates:
 *  1. JOB_KINDS enum completeness (21 values).
 *  2. JOB_STATUSES enum completeness (8 values).
 *  3. ALLOWED_STATUS_TRANSITIONS state machine — terminal states have no
 *     outgoing edges; `dispatching` can transition to all expected outcomes;
 *     invalid transitions throw via assertValidStatusTransition.
 *  4. isExternalRailJobKind() correctly partitions kinds into "real
 *     outbound" (Stripe / Twilio / Resend / pharmacy / lab) vs internal-only.
 *  5. EnqueueOutboundJobArgs Zod schema accepts happy-path; rejects invalid
 *     kind / channel / message_intent / data_environment.
 *  6. Idempotency key path validated (string accepted; non-string rejected).
 *  7. priority_hint defaults to 'standard' when omitted.
 *
 * Run with: npx tsx scripts/test-outbound-jobs-types.ts
 */

import {
  JOB_KINDS,
  JOB_STATUSES,
  ALLOWED_STATUS_TRANSITIONS,
  EnqueueOutboundJobArgs,
  assertValidStatusTransition,
  isExternalRailJobKind,
  type JobKind,
  type JobStatus,
} from '../lib/outbound/types';

let passes = 0;
let failures = 0;
function pass(label: string): void {
  console.log(`  PASS — ${label}`);
  passes++;
}
function fail(label: string, msg: string): void {
  console.error(`  FAIL — ${label}: ${msg}`);
  failures++;
}
function assert(cond: boolean, label: string, msg: string): void {
  if (cond) pass(label);
  else fail(label, msg);
}

// ---------------------------------------------------------------------
// Test 1: JOB_KINDS completeness
// ---------------------------------------------------------------------
console.log('[test 1] JOB_KINDS enum');
assert(JOB_KINDS.length === 21, 'JOB_KINDS has 21 values', `got ${JOB_KINDS.length}`);
const expectedKinds: JobKind[] = [
  'send_email', 'send_sms', 'send_push', 'send_in_app',
  'stripe_charge', 'stripe_refund', 'stripe_subscription_op',
  'pharmacy_send_rx', 'pharmacy_cancel_rx',
  'lab_send_order', 'lab_kit_ship',
  'ai_extraction', 'document_ocr', 'ai_drafting',
  'scheduled_reminder', 'reengagement_nudge',
  'escalation_to_provider', 'escalation_to_ops',
  'sar_export', 'rtbf_apply',
  'misc_internal',
];
for (const k of expectedKinds) {
  assert((JOB_KINDS as readonly string[]).includes(k), `JOB_KINDS contains ${k}`, 'missing');
}

// ---------------------------------------------------------------------
// Test 2: JOB_STATUSES completeness
// ---------------------------------------------------------------------
console.log('[test 2] JOB_STATUSES enum');
assert(JOB_STATUSES.length === 8, 'JOB_STATUSES has 8 values', `got ${JOB_STATUSES.length}`);
const expectedStatuses: JobStatus[] = [
  'queued', 'dispatching', 'succeeded', 'failed', 'dead',
  'cancelled', 'suppressed', 'superseded',
];
for (const s of expectedStatuses) {
  assert((JOB_STATUSES as readonly string[]).includes(s), `JOB_STATUSES contains ${s}`, 'missing');
}

// ---------------------------------------------------------------------
// Test 3: State machine — transitions
// ---------------------------------------------------------------------
console.log('[test 3] ALLOWED_STATUS_TRANSITIONS state machine');

// Terminal states have no outgoing edges.
const terminalStates: JobStatus[] = ['succeeded', 'dead', 'cancelled', 'superseded'];
for (const t of terminalStates) {
  assert(
    ALLOWED_STATUS_TRANSITIONS[t].length === 0,
    `${t} is terminal (no outgoing edges)`,
    `has ${ALLOWED_STATUS_TRANSITIONS[t].length} edges`
  );
}

// queued can dispatch / be cancelled / suppressed / superseded but NOT directly succeeded.
assert(
  ALLOWED_STATUS_TRANSITIONS['queued'].includes('dispatching'),
  'queued → dispatching allowed',
  'missing edge'
);
assert(
  !ALLOWED_STATUS_TRANSITIONS['queued'].includes('succeeded'),
  'queued → succeeded forbidden (must go via dispatching)',
  'unexpectedly allowed'
);

// dispatching can succeed / fail / dead / re-queue (retry).
const dispatchingNext: JobStatus[] = ['succeeded', 'failed', 'dead', 'queued'];
for (const next of dispatchingNext) {
  assert(
    ALLOWED_STATUS_TRANSITIONS['dispatching'].includes(next),
    `dispatching → ${next} allowed`,
    'missing'
  );
}

// failed can re-queue or escalate to dead but not succeed (must re-dispatch).
assert(
  ALLOWED_STATUS_TRANSITIONS['failed'].includes('queued'),
  'failed → queued allowed (retry)',
  'missing'
);
assert(
  ALLOWED_STATUS_TRANSITIONS['failed'].includes('dead'),
  'failed → dead allowed (max attempts)',
  'missing'
);
assert(
  !ALLOWED_STATUS_TRANSITIONS['failed'].includes('succeeded'),
  'failed → succeeded forbidden (must re-dispatch)',
  'unexpectedly allowed'
);

// assertValidStatusTransition throws on invalid.
let threw = false;
try {
  assertValidStatusTransition('succeeded', 'queued');
} catch {
  threw = true;
}
assert(threw, 'assertValidStatusTransition throws on terminal-state outgoing edge', 'did not throw');

// assertValidStatusTransition does NOT throw on valid.
threw = false;
try {
  assertValidStatusTransition('dispatching', 'succeeded');
} catch {
  threw = true;
}
assert(!threw, 'assertValidStatusTransition does not throw on valid edge', 'unexpectedly threw');

// ---------------------------------------------------------------------
// Test 4: isExternalRailJobKind partition
// ---------------------------------------------------------------------
console.log('[test 4] isExternalRailJobKind partition');

const externalKinds: JobKind[] = [
  'send_email', 'send_sms', 'send_push',
  'stripe_charge', 'stripe_refund', 'stripe_subscription_op',
  'pharmacy_send_rx', 'pharmacy_cancel_rx',
  'lab_send_order', 'lab_kit_ship',
];
for (const k of externalKinds) {
  assert(isExternalRailJobKind(k), `${k} is external rail`, 'returned false');
}

const internalKinds: JobKind[] = [
  'send_in_app',                                      // in-app push doesn't leave the platform
  'ai_extraction', 'document_ocr', 'ai_drafting',
  'scheduled_reminder', 'reengagement_nudge',
  'escalation_to_provider', 'escalation_to_ops',
  'sar_export', 'rtbf_apply',
  'misc_internal',
];
for (const k of internalKinds) {
  assert(!isExternalRailJobKind(k), `${k} is internal-only`, 'returned true');
}

// ---------------------------------------------------------------------
// Test 5: EnqueueOutboundJobArgs Zod schema
// ---------------------------------------------------------------------
console.log('[test 5] EnqueueOutboundJobArgs Zod schema');

const VALID_UUID = '11111111-1111-4111-8111-111111111111';

const happy = EnqueueOutboundJobArgs.safeParse({
  kind: 'send_email',
  payload: { template_key: 'tmpl.test_v1', to: 'patient@example.test' },
  patient_id: VALID_UUID,
  channel: 'email',
  idempotency_key: 'rule.glp1.welcome:patient-123:v1',
  template_key: 'tmpl.glp1.welcome_v1',
  template_version: '1.0.0',
  pathway_code: 'glp1',
  pathway_sensitivity: 'moderate',
  message_intent: 'operational',
  priority_hint: 'standard',
  declared_privacy_exposure_level: 2,
  source_kind: 'rule_engine',
  source_id: 'rule.glp1.welcome.v1',
  queued_by_kind: 'rule_engine',
});
assert(happy.success, 'happy-path payload accepted', happy.success ? '' : JSON.stringify(happy.error.issues));

const badKind = EnqueueOutboundJobArgs.safeParse({
  kind: 'not_a_real_kind',
  payload: {},
});
assert(!badKind.success, 'invalid kind rejected', 'unexpectedly accepted');

const badChannel = EnqueueOutboundJobArgs.safeParse({
  kind: 'send_email',
  channel: 'tiktok',
});
assert(!badChannel.success, 'invalid channel rejected', 'unexpectedly accepted');

const badIntent = EnqueueOutboundJobArgs.safeParse({
  kind: 'send_email',
  message_intent: 'social_media_blast',
});
assert(!badIntent.success, 'invalid message_intent rejected', 'unexpectedly accepted');

const badEnv = EnqueueOutboundJobArgs.safeParse({
  kind: 'send_email',
  data_environment: 'wherever',
});
assert(!badEnv.success, 'invalid data_environment rejected', 'unexpectedly accepted');

const tooHighExposure = EnqueueOutboundJobArgs.safeParse({
  kind: 'send_email',
  declared_privacy_exposure_level: 99,
});
assert(!tooHighExposure.success, 'declared_privacy_exposure_level out of range rejected', 'unexpectedly accepted');

// ---------------------------------------------------------------------
// Test 6: Idempotency key path
// ---------------------------------------------------------------------
console.log('[test 6] Idempotency key validation');

const withKey = EnqueueOutboundJobArgs.safeParse({
  kind: 'send_email',
  idempotency_key: 'a-stable-string-key',
});
assert(withKey.success, 'string idempotency_key accepted', withKey.success ? '' : JSON.stringify(withKey.error.issues));

const noKey = EnqueueOutboundJobArgs.safeParse({
  kind: 'send_email',
  // no idempotency_key — non-idempotent path
});
assert(noKey.success, 'omitted idempotency_key accepted (optional)', noKey.success ? '' : JSON.stringify(noKey.error.issues));

const badKey = EnqueueOutboundJobArgs.safeParse({
  kind: 'send_email',
  idempotency_key: 12345,                              // numeric — must be string
});
assert(!badKey.success, 'non-string idempotency_key rejected', 'unexpectedly accepted');

// ---------------------------------------------------------------------
// Test 7: priority_hint default
// ---------------------------------------------------------------------
console.log('[test 7] priority_hint default');

const omittedPriority = EnqueueOutboundJobArgs.parse({
  kind: 'send_sms',
});
assert(
  omittedPriority.priority_hint === 'standard',
  'priority_hint defaults to "standard"',
  `got ${omittedPriority.priority_hint}`
);

const explicitUrgent = EnqueueOutboundJobArgs.parse({
  kind: 'send_sms',
  priority_hint: 'urgent_clinical',
});
assert(
  explicitUrgent.priority_hint === 'urgent_clinical',
  'explicit priority_hint=urgent_clinical preserved',
  `got ${explicitUrgent.priority_hint}`
);

console.log('');
console.log(`Phase 4E outbound jobs types: ${passes} passed, ${failures} failed.`);
if (failures > 0) process.exit(1);
console.log('GREEN — outbound_jobs type registry locked.');
