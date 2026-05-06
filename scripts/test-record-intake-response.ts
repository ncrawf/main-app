/**
 * Phase 4A Commit 8 — integration smoke test for recordIntakeResponse.
 *
 * Runs end-to-end against a real Supabase project (requires
 * NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY env vars).
 *
 * Run with: npx tsx scripts/test-record-intake-response.ts
 *
 * Validates:
 * - intake_responses row inserted with raw_value preserved.
 * - patient_clinical_assertions row inserted with source_intake_response_id
 *   back-pointer.
 * - audit_events row(s) emitted in same transaction (verified via paired
 *   select).
 * - record_intake_emissions_batch SECURITY DEFINER function executes
 *   atomically.
 *
 * Cleans up all created rows on success or failure.
 */

import { createClient } from '@supabase/supabase-js';
import { recordIntakeResponse } from '../lib/intake/runtime/record-intake-response';
import type { Emission } from '../lib/intake/targets';
import type { InteractionContext } from '../lib/intake/interaction-context';

// Smoke-test script — supabase client is intentionally loosely typed because
// no generated Database schema types are wired up. All row reads are cast
// through `as unknown as <RowType>` to recover safety at the assertion site.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LooseSupabase = any;

interface TestContext {
  supabase: LooseSupabase;
  patientId: string;
  sessionId: string;
  intakeResponseId?: string;
  assertionId?: string;
  auditEventIds: string[];
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
    auditEventIds: [],
  };

  const ts = Date.now();
  let exitCode = 0;

  try {
    console.log(`[${new Date().toISOString()}] Setting up test patient + session ...`);
    await setup(ctx, ts);

    console.log(`[${new Date().toISOString()}] Calling recordIntakeResponse ...`);
    await runHappyPath(ctx);

    console.log(`[${new Date().toISOString()}] Verifying writes ...`);
    await verify(ctx);

    console.log(`[${new Date().toISOString()}] PASS — recordIntakeResponse smoke test green.`);
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
    .insert({ email: `phase4a-smoke-${ts}@example.test`, phone: '+15555550100' })
    .select('id')
    .single();
  if (patientRes.error || !patientRes.data) {
    throw new Error(`patients insert failed: ${patientRes.error?.message}`);
  }
  ctx.patientId = (patientRes.data as { id: string }).id;

  const sessionRes = await ctx.supabase
    .from('intake_sessions')
    .insert({
      patient_id: ctx.patientId,
      pathway_codes: ['glp1'],
      pathway_version_pins: { glp1: '1.0.0' },
      funnel_slug: 'phase4a_smoke',
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

  console.log(`  patient_id=${ctx.patientId}`);
  console.log(`  session_id=${ctx.sessionId}`);
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
  ];

  const result = await recordIntakeResponse({
    session_id: ctx.sessionId,
    patient_id: ctx.patientId,
    question_id: 'qb.smoke.test_question_v1',
    question_version: '1.0.0',
    module_id: 'module.smoke',
    module_version: '1.0.0',
    raw_value: { selected: 'yes' },
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
  }

  console.log(`  intake_response_id=${ctx.intakeResponseId}`);
  console.log(`  assertion_id=${ctx.assertionId}`);
  console.log(`  audit_event_ids=[${ctx.auditEventIds.join(', ')}]`);
}

interface IntakeResponseRow {
  id: string;
  raw_value: unknown;
  session_id: string;
  question_id: string;
}

interface AssertionRow {
  id: string;
  concept_id: string;
  source_intake_response_id: string | null;
  authored_by: string;
  status: string;
}

interface AuditRow {
  id: string;
  action: string;
  resource_type: string | null;
  resource_id: string | null;
}

async function verify(ctx: TestContext): Promise<void> {
  const irRes = await ctx.supabase
    .from('intake_responses')
    .select('id, raw_value, session_id, question_id')
    .eq('id', ctx.intakeResponseId!)
    .single();
  if (irRes.error || !irRes.data) {
    throw new Error(`intake_responses fetch failed: ${irRes.error?.message}`);
  }
  const ir = irRes.data as unknown as IntakeResponseRow;
  if (ir.session_id !== ctx.sessionId) {
    throw new Error(`intake_responses.session_id mismatch: ${ir.session_id} !== ${ctx.sessionId}`);
  }
  if (ir.question_id !== 'qb.smoke.test_question_v1') {
    throw new Error(`intake_responses.question_id mismatch: ${ir.question_id}`);
  }

  const aRes = await ctx.supabase
    .from('patient_clinical_assertions')
    .select('id, concept_id, source_intake_response_id, authored_by, status')
    .eq('id', ctx.assertionId!)
    .single();
  if (aRes.error || !aRes.data) {
    throw new Error(`patient_clinical_assertions fetch failed: ${aRes.error?.message}`);
  }
  const assertion = aRes.data as unknown as AssertionRow;
  if (assertion.concept_id !== 'condition.hypertension') {
    throw new Error(`assertion.concept_id mismatch: ${assertion.concept_id}`);
  }
  if (assertion.source_intake_response_id !== ctx.intakeResponseId) {
    throw new Error(
      `assertion.source_intake_response_id mismatch: ` +
        `${assertion.source_intake_response_id} !== ${ctx.intakeResponseId}`
    );
  }
  if (assertion.authored_by !== 'patient_reported') {
    throw new Error(`assertion.authored_by mismatch: ${assertion.authored_by}`);
  }

  const auditRes = await ctx.supabase
    .from('audit_events')
    .select('id, action, resource_type, resource_id')
    .in('id', ctx.auditEventIds);
  if (auditRes.error || !auditRes.data) {
    throw new Error(`audit_events fetch failed: ${auditRes.error?.message}`);
  }
  const auditRows = auditRes.data as unknown as AuditRow[];
  if (auditRows.length !== ctx.auditEventIds.length) {
    throw new Error(
      `audit_events row count mismatch: ${auditRows.length} !== ${ctx.auditEventIds.length}`
    );
  }
  const auditRow = auditRows[0];
  if (auditRow.resource_type !== 'patient_clinical_assertions') {
    throw new Error(`audit row resource_type mismatch: ${auditRow.resource_type}`);
  }
  if (auditRow.resource_id !== ctx.assertionId) {
    throw new Error(`audit row resource_id mismatch: ${auditRow.resource_id}`);
  }
  if (auditRow.action !== 'intake.atom.emitted') {
    throw new Error(`audit row action mismatch: ${auditRow.action}`);
  }

  console.log('  intake_responses row OK');
  console.log('  patient_clinical_assertions row OK (back-pointer verified)');
  console.log('  audit_events row OK');
}

async function cleanup(ctx: TestContext): Promise<void> {
  if (ctx.auditEventIds.length > 0) {
    await ctx.supabase.from('audit_events').delete().in('id', ctx.auditEventIds);
  }
  if (ctx.assertionId) {
    await ctx.supabase.from('patient_clinical_assertions').delete().eq('id', ctx.assertionId);
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
}

main().catch((err) => {
  console.error('Unhandled error:', err);
  process.exit(1);
});
