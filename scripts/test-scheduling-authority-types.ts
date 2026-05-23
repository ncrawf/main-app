/**
 * WP-EXEC-002 Phase 1 boundary test:
 * - validates scheduling type/trace exports
 * - proves trace helper shape behavior
 * - no scheduling runtime behavior exercised
 *
 * Run with: npx tsx scripts/test-scheduling-authority-types.ts
 */

import {
  SCHEDULING_INTENT_KINDS,
  SCHEDULING_STATES,
  type SchedulingIntentInput,
  type SchedulingStateChange,
} from '../lib/scheduling/types';
import {
  buildSchedulingTraceLineage,
  attachSchedulingTraceLineage,
} from '../lib/scheduling/trace';
import {
  SCHEDULING_AUTHORITY_CONTRACT_VERSION,
  type SchedulingAuthority,
  type NormalizeSchedulingIntent,
  type DeriveSchedulingStateChange,
} from '../lib/scheduling/authority';

let passes = 0;
let failures = 0;

function pass(label: string): void {
  console.log(`  PASS — ${label}`);
  passes++;
}

function fail(label: string, message: string): void {
  console.error(`  FAIL — ${label}: ${message}`);
  failures++;
}

function assert(condition: boolean, label: string, message: string): void {
  if (condition) pass(label);
  else fail(label, message);
}

console.log('[test 1] intent/state registries');
assert(
  SCHEDULING_INTENT_KINDS.length === 5,
  'intent kind registry length locked',
  `got ${SCHEDULING_INTENT_KINDS.length}`
);
assert(
  SCHEDULING_STATES.length === 5,
  'state registry length locked',
  `got ${SCHEDULING_STATES.length}`
);

console.log('[test 2] type contracts compile');
const intentInput: SchedulingIntentInput = {
  intent_kind: 'request',
  patient_id: '11111111-1111-4111-8111-111111111111',
  occurred_at: '2026-05-21T23:00:00.000Z',
  requested_by_kind: 'system',
  trace_lineage: {
    source_event_id: 'evt_src_123',
    candidate_id: 'cand_123',
    resolver_id: 'res_123',
  },
};
assert(intentInput.intent_kind === 'request', 'SchedulingIntentInput typed shape accepted', 'unexpected intent_kind');

const stateChange: SchedulingStateChange = {
  scheduling_state_change_id: 'sch_state_123',
  from_state: 'requested',
  to_state: 'proposed',
  changed_at: '2026-05-21T23:01:00.000Z',
};
assert(stateChange.to_state === 'proposed', 'SchedulingStateChange typed shape accepted', 'unexpected to_state');

console.log('[test 3] trace helper shape');
const trace = buildSchedulingTraceLineage({
  source_event_id: 'evt_src_456',
  commit_id: 'commit_456',
});
assert(trace.source_event_id === 'evt_src_456', 'buildSchedulingTraceLineage preserves source_event_id', 'missing source_event_id');
assert(trace.commit_id === 'commit_456', 'buildSchedulingTraceLineage preserves optional fields', 'missing commit_id');

const payload = attachSchedulingTraceLineage(
  { scope: 'wp-exec-002-phase-1' },
  trace
);
assert(payload.scope === 'wp-exec-002-phase-1', 'attachSchedulingTraceLineage preserves payload fields', 'payload field changed');
assert(
  payload.trace_lineage.source_event_id === 'evt_src_456',
  'attachSchedulingTraceLineage attaches trace_lineage',
  'trace_lineage missing or incorrect'
);

console.log('[test 4] authority contract shape');
const authorityContract: SchedulingAuthority = {
  normalizeIntent(input) {
    return input;
  },
  deriveStateChange(input) {
    return {
      state_change: {
        scheduling_state_change_id: 'sch_state_contract_stub',
        from_state: null,
        to_state: 'requested',
        changed_at: input.occurred_at,
      },
      trace_lineage: input.trace_lineage,
      notes: ['contract-shape-test-only'],
    };
  },
};
assert(
  typeof authorityContract.normalizeIntent === 'function',
  'SchedulingAuthority.normalizeIntent signature conformance',
  'normalizeIntent missing'
);
assert(
  typeof authorityContract.deriveStateChange === 'function',
  'SchedulingAuthority.deriveStateChange signature conformance',
  'deriveStateChange missing'
);

const normalizeIntentSignature: NormalizeSchedulingIntent = authorityContract.normalizeIntent;
const deriveStateChangeSignature: DeriveSchedulingStateChange = authorityContract.deriveStateChange;
assert(
  typeof normalizeIntentSignature === 'function',
  'NormalizeSchedulingIntent alias resolved',
  'alias not function'
);
assert(
  typeof deriveStateChangeSignature === 'function',
  'DeriveSchedulingStateChange alias resolved',
  'alias not function'
);
assert(
  SCHEDULING_AUTHORITY_CONTRACT_VERSION === 'v1',
  'authority contract version pinned to v1',
  `got ${SCHEDULING_AUTHORITY_CONTRACT_VERSION}`
);

console.log('');
console.log(`WP-EXEC-002 Phase 1 boundary test: ${passes} passed, ${failures} failed.`);
if (failures > 0) process.exit(1);
console.log('GREEN — scheduling authority boundary type/trace/authority contracts locked (Phase 2).');
