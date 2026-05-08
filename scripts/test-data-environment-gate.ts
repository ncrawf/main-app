/**
 * Phase 4H-pre commit 2 — pure-function unit test for the
 * data_environment dispatch gate.
 *
 * Validates:
 *  1. Production rows always pass (regardless of kind).
 *  2. Synthetic / staging / internal_qa rows + external-rail kind = suppress.
 *  3. Synthetic / staging / internal_qa rows + internal-only kind = pass.
 *  4. The full JOB_KINDS x DATA_ENVIRONMENTS matrix has exactly the
 *     expected pass/suppress decisions (exhaustive coverage; if a new
 *     kind is added without classification, this test catches it).
 *  5. The 'reason' field is set correctly on suppress decisions and
 *     omitted on pass decisions.
 *
 * Run with: npx tsx scripts/test-data-environment-gate.ts
 */

import {
  evaluateDataEnvironmentGate,
  type DataEnvironmentGateDecision,
} from '../lib/outbound/dataEnvironmentGate';
import {
  JOB_KINDS,
  isExternalRailJobKind,
  type JobKind,
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
// The data_environment values we expect to see in real rows. The
// outbound_jobs CHECK constraint allows these four (Phase 4C-pre).
// ---------------------------------------------------------------------
const DATA_ENVIRONMENTS = ['production', 'staging', 'internal_qa', 'synthetic'] as const;

// ---------------------------------------------------------------------
// Test 1: Production rows always pass
// ---------------------------------------------------------------------
console.log('[test 1] production rows always pass');

for (const kind of JOB_KINDS) {
  const result = evaluateDataEnvironmentGate({ kind, data_environment: 'production' });
  assert(
    result.decision === 'pass',
    `production + ${kind} → pass`,
    `unexpectedly suppressed (reason: ${(result as { reason?: string }).reason ?? 'none'})`
  );
}

// ---------------------------------------------------------------------
// Test 2: Non-production + external-rail kind = suppress
// ---------------------------------------------------------------------
console.log('[test 2] non-production + external-rail kind = suppress');

const externalRailKinds = JOB_KINDS.filter(isExternalRailJobKind);
const nonProductionEnvs = DATA_ENVIRONMENTS.filter(e => e !== 'production');

for (const env of nonProductionEnvs) {
  for (const kind of externalRailKinds) {
    const result = evaluateDataEnvironmentGate({ kind, data_environment: env });
    assert(
      result.decision === 'suppress',
      `${env} + ${kind} → suppress`,
      `unexpectedly passed`
    );
    if (result.decision === 'suppress') {
      assert(
        result.reason === 'data_environment',
        `${env} + ${kind} reason = data_environment`,
        `got reason=${result.reason}`
      );
    }
  }
}

// ---------------------------------------------------------------------
// Test 3: Non-production + internal-only kind = pass
// ---------------------------------------------------------------------
console.log('[test 3] non-production + internal-only kind = pass (internal kinds run in any env)');

const internalOnlyKinds = JOB_KINDS.filter(k => !isExternalRailJobKind(k));

for (const env of nonProductionEnvs) {
  for (const kind of internalOnlyKinds) {
    const result = evaluateDataEnvironmentGate({ kind, data_environment: env });
    assert(
      result.decision === 'pass',
      `${env} + ${kind} → pass (internal-only)`,
      `unexpectedly suppressed (reason: ${(result as { reason?: string }).reason ?? 'none'})`
    );
  }
}

// ---------------------------------------------------------------------
// Test 4: Full JOB_KINDS × DATA_ENVIRONMENTS matrix coverage
// ---------------------------------------------------------------------
// Forces every (kind, env) pair to be evaluated. If a new JobKind is
// added to JOB_KINDS, this test still runs over it because the matrix
// is driven from JOB_KINDS — but the partition correctness is
// guaranteed only if isExternalRailJobKind classifies it (which is
// itself enforced by the TypeScript exhaustiveness check + the
// runtime exhaustive test in scripts/test-outbound-jobs-types.ts).
console.log('[test 4] full JOB_KINDS × DATA_ENVIRONMENTS matrix');

let matrixPasses = 0;
let matrixSuppresses = 0;
for (const kind of JOB_KINDS) {
  for (const env of DATA_ENVIRONMENTS) {
    const result = evaluateDataEnvironmentGate({ kind, data_environment: env });
    if (result.decision === 'pass') matrixPasses++;
    else matrixSuppresses++;
  }
}

const expectedMatrixSuppresses = externalRailKinds.length * nonProductionEnvs.length;
const expectedMatrixPasses = JOB_KINDS.length * DATA_ENVIRONMENTS.length - expectedMatrixSuppresses;

assert(
  matrixSuppresses === expectedMatrixSuppresses,
  `matrix suppress count = ${expectedMatrixSuppresses}`,
  `got ${matrixSuppresses}`
);
assert(
  matrixPasses === expectedMatrixPasses,
  `matrix pass count = ${expectedMatrixPasses}`,
  `got ${matrixPasses}`
);
assert(
  matrixPasses + matrixSuppresses === JOB_KINDS.length * DATA_ENVIRONMENTS.length,
  `matrix is exhaustive (${JOB_KINDS.length} kinds × ${DATA_ENVIRONMENTS.length} envs = ${JOB_KINDS.length * DATA_ENVIRONMENTS.length} cells)`,
  `total cells covered: ${matrixPasses + matrixSuppresses}`
);

// ---------------------------------------------------------------------
// Test 5: Reason field correctness
// ---------------------------------------------------------------------
console.log('[test 5] reason field correctness');

const passDecision = evaluateDataEnvironmentGate({
  kind: 'send_email',
  data_environment: 'production',
});
assert(
  passDecision.decision === 'pass',
  'production decision is pass',
  `got ${passDecision.decision}`
);
assert(
  (passDecision as DataEnvironmentGateDecision & { reason?: string }).reason === undefined,
  'pass decision has no reason field',
  `unexpected reason: ${(passDecision as { reason?: string }).reason}`
);

const suppressDecision = evaluateDataEnvironmentGate({
  kind: 'send_email',
  data_environment: 'synthetic',
});
assert(
  suppressDecision.decision === 'suppress',
  'synthetic + send_email decision is suppress',
  `got ${suppressDecision.decision}`
);
if (suppressDecision.decision === 'suppress') {
  assert(
    suppressDecision.reason === 'data_environment',
    'suppress decision reason = data_environment',
    `got ${suppressDecision.reason}`
  );
}

// ---------------------------------------------------------------------
// Test 6: Specific high-signal cases
// ---------------------------------------------------------------------
console.log('[test 6] specific high-signal cases');

// HIPAA-critical case: synthetic patient + SMS = MUST suppress.
const hipaaCriticalSms = evaluateDataEnvironmentGate({
  kind: 'send_sms',
  data_environment: 'synthetic',
});
assert(
  hipaaCriticalSms.decision === 'suppress',
  'synthetic + send_sms suppressed (HIPAA-critical: synthetic patient never gets a real SMS)',
  'CRITICAL: suppression failed'
);

// Stripe charge in staging = must suppress.
const stagingStripe = evaluateDataEnvironmentGate({
  kind: 'stripe_charge',
  data_environment: 'staging',
});
assert(
  stagingStripe.decision === 'suppress',
  'staging + stripe_charge suppressed (no real charges in staging)',
  'CRITICAL: would charge a card in staging'
);

// Pharmacy Rx in internal_qa = must suppress.
const qaPharmacy = evaluateDataEnvironmentGate({
  kind: 'pharmacy_send_rx',
  data_environment: 'internal_qa',
});
assert(
  qaPharmacy.decision === 'suppress',
  'internal_qa + pharmacy_send_rx suppressed (no real Rx in QA)',
  'CRITICAL: would send a real prescription in QA'
);

// SAR export in synthetic = pass (internal-only; can run in any env).
const sarSynthetic = evaluateDataEnvironmentGate({
  kind: 'sar_export',
  data_environment: 'synthetic',
});
assert(
  sarSynthetic.decision === 'pass',
  'synthetic + sar_export passes (internal-only kind; SAR can run in any env)',
  'unexpectedly suppressed an internal-only kind'
);

// In-app notification in synthetic = pass (doesn't leave platform).
const inAppSynthetic = evaluateDataEnvironmentGate({
  kind: 'send_in_app',
  data_environment: 'synthetic',
});
assert(
  inAppSynthetic.decision === 'pass',
  'synthetic + send_in_app passes (in-app push does not leave the platform)',
  'unexpectedly suppressed in-app push'
);

// ---------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------
console.log('');
console.log('----------------------------------------------------------------------');
console.log(`Phase 4H-pre commit 2 dataEnvironmentGate: ${passes} passed, ${failures} failed.`);

if (failures > 0) {
  console.error('RED — gate logic broken. Investigate before shipping.');
  process.exit(1);
} else {
  console.log('GREEN — data_environment gate partition locked.');
}

// Tell TypeScript JobKind import is used (it is — in the type guards).
type _UseJobKind = JobKind;
