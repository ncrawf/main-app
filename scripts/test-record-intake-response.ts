/**
 * Phase 4C-pre verification — extended end-to-end smoke test.
 *
 * Runs against a real Supabase project (requires NEXT_PUBLIC_SUPABASE_URL +
 * SUPABASE_SERVICE_ROLE_KEY env vars + the 4C-pre migrations applied).
 *
 * Run with: npx tsx scripts/test-record-intake-response.ts
 *
 * Validates the five verification items called out in the 4C-pre spec:
 *  1. intake_responses gets org_id + data_environment
 *  2. patient_clinical_assertions gets org_id + data_environment
 *  3. audit_events gets org_id + actor_kind
 *  4. cross-org mismatch throws before any write lands
 *  5. non-clinical domain write (patient_address) includes source_kind + source_id
 *
 * Cleans up all created rows on success or failure.
 */

import { createClient } from '@supabase/supabase-js';
import { recordIntakeResponse } from '../lib/intake/runtime/record-intake-response';
import type { Emission } from '../lib/intake/targets';
import type { InteractionContext } from '../lib/intake/interaction-context';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LooseSupabase = any;

interface TestContext {
  supabase: LooseSupabase;
  patientId: string;
  sessionId: string;
  alienOrgId: string;
  intakeResponseId?: string;
  assertionId?: string;
  addressId?: string;
  auditEventIds: string[];
  /** intake_responses ids created during the cross-org negative test (should be empty after pass). */
  unexpectedResponseIds: string[];
}

const MAIN_ORG_ID = '00000000-0000-0000-0000-000000000001';

interface IntakeResponseRow {
  id: string;
  raw_value: unknown;
  session_id: string;
  question_id: string;
  org_id: string;
  data_environment: string;
}

interface AssertionRow {
  id: string;
  concept_id: string;
  source_intake_response_id: string | null;
  authored_by: string;
  status: string;
  org_id: string;
  data_environment: string;
}

interface AddressRow {
  id: string;
  patient_id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  org_id: string;
  data_environment: string;
  source_kind: string | null;
  source_id: string | null;
}

interface AuditRow {
  id: string;
  action: string;
  resource_type: string | null;
  resource_id: string | null;
  actor_kind: string | null;
  org_id: string | null;
}

async function main(): Promise<void> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars.');
    process.exit(1);
  }

  const supabase: LooseSupabase = createClient(url, key);
  const ctx: TestContext = {
    supabase,
    patientId: '',
    sessionId: '',
    alienOrgId: '',
    auditEventIds: [],
    unexpectedResponseIds: [],
  };

  const ts = Date.now();
  let exitCode = 0;

  try {
    console.log(`[${new Date().toISOString()}] Setting up test patient + session + alien org ...`);
    await setup(ctx, ts);

    console.log(`[${new Date().toISOString()}] [item 1+2+3+5] Happy path: clinical_assertion + patient_address ...`);
    await runHappyPath(ctx);

    console.log(`[${new Date().toISOString()}] Verifying happy-path writes ...`);
    await verifyHappyPath(ctx);

    console.log(`[${new Date().toISOString()}] [item 4] Cross-org mismatch must throw + write nothing ...`);
    await runCrossOrgMismatch(ctx);

    console.log(`[${new Date().toISOString()}] PASS — Phase 4C-pre verification (5/5 items green).`);
  } catch (err) {
    console.error(
      `[${new Date().toISOString()}] FAIL —`,
      err instanceof Error ? err.message : err
    );
    exitCode = 1;
  } finally {
    console.log(`[${new Date().toISOString()}] Cleaning up ...`);
    await cleanup(ctx).catch((err) => {
      console.error('Cleanup error (best-effort):', err);
    });
  }

  process.exit(exitCode);
}

async function setup(ctx: TestContext, ts: number): Promise<void> {
  const patientRes = await ctx.supabase
    .from('patients')
    .insert({ email: `phase4cpre-smoke-${ts}@example.test`, phone: '+15555550100' })
    .select('id, org_id, data_environment')
    .single();
  if (patientRes.error || !patientRes.data) {
    throw new Error(`patients insert failed: ${patientRes.error?.message}`);
  }
  ctx.patientId = (patientRes.data as { id: string }).id;
  const patientRow = patientRes.data as { org_id: string; data_environment: string };
  if (patientRow.org_id !== MAIN_ORG_ID) {
    throw new Error(`setup: new patient.org_id=${patientRow.org_id} expected ${MAIN_ORG_ID} (DEFAULT not firing — apply migration first)`);
  }
  if (patientRow.data_environment !== 'production') {
    throw new Error(`setup: new patient.data_environment=${patientRow.data_environment} expected 'production'`);
  }

  const sessionRes = await ctx.supabase
    .from('intake_sessions')
    .insert({
      patient_id: ctx.patientId,
      pathway_codes: ['glp1'],
      pathway_version_pins: { glp1: '1.0.0' },
      funnel_slug: 'phase4cpre_smoke',
      funnel_version: '1.0.0',
      engine_version: '1.0.0',
      safety_ruleset_version: '1.0.0',
      status: 'in_progress',
      interaction_context: { mode: 'online' } as InteractionContext,
      metadata: {},
    })
    .select('id')
    .single();
  if (sessionRes.error || !sessionRes.data) {
    throw new Error(`intake_sessions insert failed: ${sessionRes.error?.message}`);
  }
  ctx.sessionId = (sessionRes.data as { id: string }).id;

  // Create an "alien" org for the cross-org mismatch test (item 4).
  const orgRes = await ctx.supabase
    .from('orgs')
    .insert({ slug: `alien-${ts}`, display_name: 'Alien Test Org' })
    .select('id')
    .single();
  if (orgRes.error || !orgRes.data) {
    throw new Error(`alien orgs insert failed: ${orgRes.error?.message}`);
  }
  ctx.alienOrgId = (orgRes.data as { id: string }).id;

  console.log(`  patient_id=${ctx.patientId} (org_id=${patientRow.org_id}, data_environment=${patientRow.data_environment})`);
  console.log(`  session_id=${ctx.sessionId}`);
  console.log(`  alien_org_id=${ctx.alienOrgId}`);
}

async function runHappyPath(ctx: TestContext): Promise<void> {
  const interactionContext: InteractionContext = { mode: 'online' };

  const emissions: Emission[] = [
    {
      target: 'clinical_assertion',
      payload: {
        concept_id: 'condition.hypertension',
        concept_version: '1.0.0',
        assertion_type: 'history_of',
        status: 'unconfirmed',
        authored_by: 'patient_reported',
        confidence: 'definitive',
        evidence_refs: [],
        context: {},
        context_key: '',
      },
    },
    {
      target: 'patient_address',
      payload: {
        street: '123 Verification Way',
        city: 'Testville',
        state: 'CA',
        zip: '94000',
        country: 'US',
        is_default: true,
      },
    },
  ];

  const result = await recordIntakeResponse({
    session_id: ctx.sessionId,
    patient_id: ctx.patientId,
    question_id: 'qb.smoke.test_question_v1',
    question_version: '1.0.0',
    module_id: 'module.smoke',
    module_version: '1.0.0',
    raw_value: { selected: 'yes', address: '123 Verification Way' },
    emissions,
    engine_version: '1.0.0',
    interaction_context: interactionContext,
  });

  ctx.intakeResponseId = result.intake_response_id;
  for (const r of result.emission_results) {
    ctx.auditEventIds.push(r.audit_event_id);
    if (r.target === 'clinical_assertion' && r.id) {
      ctx.assertionId = r.id;
    }
    if (r.target === 'patient_address' && r.id) {
      ctx.addressId = r.id;
    }
  }

  console.log(`  intake_response_id=${ctx.intakeResponseId}`);
  console.log(`  assertion_id=${ctx.assertionId}`);
  console.log(`  address_id=${ctx.addressId}`);
  console.log(`  audit_event_ids=[${ctx.auditEventIds.join(', ')}]`);
}

async function verifyHappyPath(ctx: TestContext): Promise<void> {
  // ------- Item 1: intake_responses primitives -------
  const irRes = await ctx.supabase
    .from('intake_responses')
    .select('id, raw_value, session_id, question_id, org_id, data_environment')
    .eq('id', ctx.intakeResponseId!)
    .single();
  if (irRes.error || !irRes.data) {
    throw new Error(`item 1 — intake_responses fetch failed: ${irRes.error?.message}`);
  }
  const ir = irRes.data as unknown as IntakeResponseRow;
  if (ir.session_id !== ctx.sessionId) {
    throw new Error(`item 1 — intake_responses.session_id mismatch: ${ir.session_id}`);
  }
  if (ir.org_id !== MAIN_ORG_ID) {
    throw new Error(`item 1 — intake_responses.org_id mismatch: ${ir.org_id} !== ${MAIN_ORG_ID}`);
  }
  if (ir.data_environment !== 'production') {
    throw new Error(`item 1 — intake_responses.data_environment mismatch: ${ir.data_environment}`);
  }
  console.log('  [1/5] intake_responses primitives OK');

  // ------- Item 2: patient_clinical_assertions primitives -------
  const aRes = await ctx.supabase
    .from('patient_clinical_assertions')
    .select('id, concept_id, source_intake_response_id, authored_by, status, org_id, data_environment')
    .eq('id', ctx.assertionId!)
    .single();
  if (aRes.error || !aRes.data) {
    throw new Error(`item 2 — patient_clinical_assertions fetch failed: ${aRes.error?.message}`);
  }
  const assertion = aRes.data as unknown as AssertionRow;
  if (assertion.source_intake_response_id !== ctx.intakeResponseId) {
    throw new Error(
      `item 2 — assertion.source_intake_response_id mismatch: ${assertion.source_intake_response_id}`
    );
  }
  if (assertion.authored_by !== 'patient_reported') {
    throw new Error(`item 2 — assertion.authored_by mismatch: ${assertion.authored_by}`);
  }
  if (assertion.org_id !== MAIN_ORG_ID) {
    throw new Error(`item 2 — assertion.org_id mismatch: ${assertion.org_id}`);
  }
  if (assertion.data_environment !== 'production') {
    throw new Error(`item 2 — assertion.data_environment mismatch: ${assertion.data_environment}`);
  }
  console.log('  [2/5] patient_clinical_assertions primitives OK');

  // ------- Item 3: audit_events primitives -------
  const auditRes = await ctx.supabase
    .from('audit_events')
    .select('id, action, resource_type, resource_id, actor_kind, org_id')
    .in('id', ctx.auditEventIds);
  if (auditRes.error || !auditRes.data) {
    throw new Error(`item 3 — audit_events fetch failed: ${auditRes.error?.message}`);
  }
  const auditRows = auditRes.data as unknown as AuditRow[];
  if (auditRows.length !== ctx.auditEventIds.length) {
    throw new Error(
      `item 3 — audit_events row count mismatch: ${auditRows.length} !== ${ctx.auditEventIds.length}`
    );
  }
  for (const row of auditRows) {
    if (row.actor_kind !== 'patient') {
      throw new Error(`item 3 — audit_events.actor_kind mismatch on row ${row.id}: ${row.actor_kind}`);
    }
    if (row.org_id !== MAIN_ORG_ID) {
      throw new Error(`item 3 — audit_events.org_id mismatch on row ${row.id}: ${row.org_id}`);
    }
    if (row.action !== 'intake.atom.emitted') {
      throw new Error(`item 3 — audit_events.action mismatch on row ${row.id}: ${row.action}`);
    }
  }
  console.log(`  [3/5] audit_events primitives OK (${auditRows.length} rows; all carry org_id + actor_kind)`);

  // ------- Item 5: patient_address source_kind + source_id -------
  if (!ctx.addressId) {
    throw new Error('item 5 — addressId not set; patient_address emission did not return an id');
  }
  const addrRes = await ctx.supabase
    .from('patient_addresses')
    .select('id, patient_id, street, city, state, zip, org_id, data_environment, source_kind, source_id')
    .eq('id', ctx.addressId)
    .single();
  if (addrRes.error || !addrRes.data) {
    throw new Error(`item 5 — patient_addresses fetch failed: ${addrRes.error?.message}`);
  }
  const addr = addrRes.data as unknown as AddressRow;
  if (addr.org_id !== MAIN_ORG_ID) {
    throw new Error(`item 5 — patient_addresses.org_id mismatch: ${addr.org_id}`);
  }
  if (addr.data_environment !== 'production') {
    throw new Error(`item 5 — patient_addresses.data_environment mismatch: ${addr.data_environment}`);
  }
  if (addr.source_kind !== 'intake') {
    throw new Error(
      `item 5 — patient_addresses.source_kind mismatch: ${addr.source_kind} !== 'intake' (orchestrator should auto-default)`
    );
  }
  if (addr.source_id !== ctx.intakeResponseId) {
    throw new Error(
      `item 5 — patient_addresses.source_id mismatch: ${addr.source_id} !== ${ctx.intakeResponseId} (should equal intake_response_id::text)`
    );
  }
  console.log('  [5/5] patient_address primitives + source_kind + source_id OK');
}

async function runCrossOrgMismatch(ctx: TestContext): Promise<void> {
  // Snapshot the intake_responses count for this session BEFORE the negative call.
  const beforeRes = await ctx.supabase
    .from('intake_responses')
    .select('id')
    .eq('session_id', ctx.sessionId);
  if (beforeRes.error || !beforeRes.data) {
    throw new Error(`item 4 setup — intake_responses pre-count failed: ${beforeRes.error?.message}`);
  }
  const beforeCount = (beforeRes.data as { id: string }[]).length;

  // Attempt to write under the alien org_id (different from patient's main org).
  let threw = false;
  let errorMsg = '';
  try {
    await recordIntakeResponse({
      session_id: ctx.sessionId,
      patient_id: ctx.patientId,
      question_id: 'qb.smoke.cross_org_negative_v1',
      question_version: '1.0.0',
      module_id: 'module.smoke',
      module_version: '1.0.0',
      raw_value: { malicious: true },
      emissions: [
        {
          target: 'clinical_assertion',
          payload: {
            concept_id: 'condition.hypertension',
            concept_version: '1.0.0',
            assertion_type: 'history_of',
            status: 'unconfirmed',
            authored_by: 'patient_reported',
            confidence: 'definitive',
            evidence_refs: [],
            context: {},
            context_key: '',
          },
        },
      ],
      engine_version: '1.0.0',
      interaction_context: { mode: 'online' } as InteractionContext,
      // Explicit override: alien org. Patient is in main org. Must reject.
      org_id: ctx.alienOrgId,
    });
  } catch (err) {
    threw = true;
    errorMsg = err instanceof Error ? err.message : String(err);
  }

  if (!threw) {
    throw new Error('item 4 — cross-org write was accepted (expected throw)');
  }
  if (!errorMsg.toLowerCase().includes('cross-org')) {
    throw new Error(
      `item 4 — threw but error message doesn't mention 'cross-org': ${errorMsg}`
    );
  }

  // Verify no new intake_responses row landed for this session.
  const afterRes = await ctx.supabase
    .from('intake_responses')
    .select('id')
    .eq('session_id', ctx.sessionId);
  if (afterRes.error || !afterRes.data) {
    throw new Error(`item 4 verify — intake_responses post-count failed: ${afterRes.error?.message}`);
  }
  const afterCount = (afterRes.data as { id: string }[]).length;
  if (afterCount !== beforeCount) {
    // Track unexpected rows for cleanup.
    const newIds = (afterRes.data as { id: string }[])
      .map((r) => r.id)
      .filter((id) => id !== ctx.intakeResponseId);
    ctx.unexpectedResponseIds.push(...newIds);
    throw new Error(
      `item 4 — cross-org write created ${afterCount - beforeCount} new intake_responses row(s); expected 0`
    );
  }

  console.log(`  [4/5] cross-org mismatch rejected before write (error: "${errorMsg.slice(0, 80)}...")`);
}

async function cleanup(ctx: TestContext): Promise<void> {
  if (ctx.auditEventIds.length > 0) {
    await ctx.supabase.from('audit_events').delete().in('id', ctx.auditEventIds);
  }
  if (ctx.assertionId) {
    await ctx.supabase.from('patient_clinical_assertions').delete().eq('id', ctx.assertionId);
  }
  if (ctx.addressId) {
    await ctx.supabase.from('patient_addresses').delete().eq('id', ctx.addressId);
  }
  if (ctx.unexpectedResponseIds.length > 0) {
    await ctx.supabase.from('intake_responses').delete().in('id', ctx.unexpectedResponseIds);
  }
  if (ctx.intakeResponseId) {
    await ctx.supabase.from('intake_responses').delete().eq('id', ctx.intakeResponseId);
  }
  if (ctx.sessionId) {
    await ctx.supabase.from('intake_sessions').delete().eq('id', ctx.sessionId);
  }
  if (ctx.patientId) {
    await ctx.supabase.from('patients').delete().eq('id', ctx.patientId);
  }
  if (ctx.alienOrgId) {
    await ctx.supabase.from('orgs').delete().eq('id', ctx.alienOrgId);
  }
}

main().catch((err) => {
  console.error('Unhandled error:', err);
  process.exit(1);
});
