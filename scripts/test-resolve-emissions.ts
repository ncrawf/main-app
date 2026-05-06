/**
 * Phase 4C-runtime — unit test for resolveEmissions.
 *
 * Pure-function test (no DB, no network). Runs locally:
 *   npx tsx scripts/test-resolve-emissions.ts
 *
 * Validates the GLP-1 prior_glp1_use flow (Module 15) end-to-end through
 * resolveEmissions. This is THE flow the resolver was built to support
 * per Phase 3 pressure-test Gap 1 fix + Phase 4A Commit 1.
 *
 * Cases:
 *   1. Q15.1 status_v1 = 'past' → single clinical_assertion with
 *      concept_id='medication.glp1_use_status', context_key='past',
 *      metadata.value='past'.
 *   2. Q15.2 which_drug_v1 = 'medication.wegovy' (with prior_responses
 *      carrying status_v1='past') → dual emit:
 *        a. clinical_assertion: concept_id='medication.wegovy'
 *        b. medication entity: medication_concept_id='medication.wegovy',
 *           name_normalized='Wegovy',
 *           status='discontinued' (flipped from 'past'),
 *           reconciliation_status='unreconciled'.
 *   3. Q15.2 with status_v1='currently' → medication.status stays 'active'.
 *   4. Q15.2 with raw_value='not.a.real.concept' → ResolveEmissionsError.
 *   5. Q15.1 with raw_value='never' → resolves with context_key='never'.
 */

import { resolveEmissions, ResolveEmissionsError } from '../lib/intake/runtime/resolve-emissions';
import { priorGlp1UseQuestions } from '../lib/intake/question-bank/pathway/glp1/prior_glp1_use';
import type { InteractionContext } from '../lib/intake/interaction-context';

const SESSION_ID = '11111111-1111-1111-1111-111111111111';
const PATIENT_ID = '22222222-2222-2222-2222-222222222222';
const interaction_context: InteractionContext = { mode: 'online' };

const status_v1 = priorGlp1UseQuestions.find((q) => q.question_id.endsWith('.status_v1'))!;
const which_drug_v1 = priorGlp1UseQuestions.find((q) => q.question_id.endsWith('.which_drug_v1'))!;

if (!status_v1 || !which_drug_v1) {
  console.error('Test setup: could not find Q15.1 + Q15.2 in question bank');
  process.exit(1);
}

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
// Case 1: Q15.1 status_v1 = 'past'
// ---------------------------------------------------------------------
console.log('[case 1] Q15.1 status_v1 = "past"');
{
  const result = resolveEmissions(status_v1, 'past', {
    session_id: SESSION_ID,
    patient_id: PATIENT_ID,
    interaction_context,
  });
  assert(result.emissions.length === 1, 'Q15.1 emits exactly 1 row', `got ${result.emissions.length}`);
  const e = result.emissions[0];
  assert(e.target === 'clinical_assertion', 'Q15.1 target is clinical_assertion', `got ${e.target}`);
  const p = e.payload as Record<string, unknown>;
  assert(p.concept_id === 'medication.glp1_use_status', 'concept_id stays as declared', `got ${p.concept_id}`);
  assert(p.context_key === 'past', 'context_key resolved to raw_value (status carries metadata.value)', `got ${p.context_key}`);
  const md = p.metadata as Record<string, unknown> | undefined;
  assert(md?.value === 'past', 'metadata.value populated from raw_value', `got ${JSON.stringify(md)}`);
}

// ---------------------------------------------------------------------
// Case 2: Q15.2 which_drug_v1 = 'medication.wegovy' WITH prior status_v1='past'
// ---------------------------------------------------------------------
console.log('[case 2] Q15.2 which_drug_v1 = "medication.wegovy" with prior status_v1="past"');
{
  const result = resolveEmissions(which_drug_v1, 'medication.wegovy', {
    session_id: SESSION_ID,
    patient_id: PATIENT_ID,
    interaction_context,
    prior_responses: {
      'qb.pathway.glp1.prior_glp1_use.status_v1': 'past',
    },
  });
  assert(result.emissions.length === 2, 'Q15.2 emits exactly 2 rows (dual emit)', `got ${result.emissions.length}`);

  const claim = result.emissions[0];
  assert(claim.target === 'clinical_assertion', 'first emission is clinical_assertion', `got ${claim.target}`);
  const cp = claim.payload as Record<string, unknown>;
  assert(cp.concept_id === 'medication.wegovy', 'clinical_assertion.concept_id resolved from raw_value', `got ${cp.concept_id}`);

  const med = result.emissions[1];
  assert(med.target === 'medication', 'second emission is medication entity', `got ${med.target}`);
  const mp = med.payload as Record<string, unknown>;
  assert(mp.medication_concept_id === 'medication.wegovy', 'medication.medication_concept_id resolved from raw_value', `got ${mp.medication_concept_id}`);
  assert(mp.name_normalized === 'Wegovy', 'medication.name_normalized resolved from concept description', `got "${mp.name_normalized}"`);
  assert(mp.status === 'discontinued', 'medication.status flipped to discontinued via sibling status_v1=past', `got "${mp.status}"`);
  assert(mp.reconciliation_status === 'unreconciled', 'medication.reconciliation_status stays as declared', `got "${mp.reconciliation_status}"`);
}

// ---------------------------------------------------------------------
// Case 3: Q15.2 with prior status_v1='currently' — status stays 'active'
// ---------------------------------------------------------------------
console.log('[case 3] Q15.2 which_drug_v1 = "medication.ozempic" with prior status_v1="currently"');
{
  const result = resolveEmissions(which_drug_v1, 'medication.ozempic', {
    session_id: SESSION_ID,
    patient_id: PATIENT_ID,
    interaction_context,
    prior_responses: {
      'qb.pathway.glp1.prior_glp1_use.status_v1': 'currently',
    },
  });
  const med = result.emissions.find((e) => e.target === 'medication')!;
  const mp = med.payload as Record<string, unknown>;
  assert(mp.status === 'active', 'medication.status stays active when status_v1=currently', `got "${mp.status}"`);
  assert(mp.medication_concept_id === 'medication.ozempic', 'medication_concept_id correct for ozempic', `got ${mp.medication_concept_id}`);
  assert(mp.name_normalized === 'Ozempic', 'name_normalized = "Ozempic"', `got "${mp.name_normalized}"`);
}

// ---------------------------------------------------------------------
// Case 4: Unknown concept_id raises ResolveEmissionsError
// ---------------------------------------------------------------------
console.log('[case 4] Q15.2 with unknown concept_id raises ResolveEmissionsError');
{
  let threw = false;
  let errOk = false;
  try {
    resolveEmissions(which_drug_v1, 'not.a.real.concept', {
      session_id: SESSION_ID,
      patient_id: PATIENT_ID,
      interaction_context,
    });
  } catch (err) {
    threw = true;
    errOk = err instanceof ResolveEmissionsError;
    if (errOk) {
      console.log(`    (error: "${(err as ResolveEmissionsError).message}")`);
    }
  }
  assert(threw, 'unknown concept_id threw', 'expected throw');
  assert(errOk, 'threw a ResolveEmissionsError', 'expected ResolveEmissionsError instance');
}

// ---------------------------------------------------------------------
// Case 5: Q15.1 status_v1 = 'never' — resolves with context_key='never'
// ---------------------------------------------------------------------
console.log('[case 5] Q15.1 status_v1 = "never"');
{
  const result = resolveEmissions(status_v1, 'never', {
    session_id: SESSION_ID,
    patient_id: PATIENT_ID,
    interaction_context,
  });
  const e = result.emissions[0];
  const p = e.payload as Record<string, unknown>;
  assert(p.context_key === 'never', 'context_key=never for Q15.1', `got ${p.context_key}`);
  const md = p.metadata as Record<string, unknown> | undefined;
  assert(md?.value === 'never', 'metadata.value=never', `got ${JSON.stringify(md)}`);
}

// ---------------------------------------------------------------------
// Determinism check: two independent calls produce identical emissions
// ---------------------------------------------------------------------
console.log('[determinism] same inputs → same emissions');
{
  const ctx = {
    session_id: SESSION_ID,
    patient_id: PATIENT_ID,
    interaction_context,
    prior_responses: { 'qb.pathway.glp1.prior_glp1_use.status_v1': 'past' },
  };
  const r1 = resolveEmissions(which_drug_v1, 'medication.zepbound', ctx);
  const r2 = resolveEmissions(which_drug_v1, 'medication.zepbound', ctx);
  // Strip resolution_notes (timing) before compare since observation timestamps could differ.
  const j1 = JSON.stringify(r1.emissions);
  const j2 = JSON.stringify(r2.emissions);
  assert(j1 === j2, 'two calls produce identical Emission[]', `r1 != r2`);
}

console.log('');
console.log(`Phase 4C-runtime resolveEmissions: ${passes} passed, ${failures} failed.`);
if (failures > 0) process.exit(1);
console.log('GREEN — resolveEmissions ready for Phase 4D+ wiring.');
