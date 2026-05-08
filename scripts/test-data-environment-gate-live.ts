/**
 * Phase 4H-pre commit 2 — live-DB end-to-end smoke test for the
 * data_environment dispatch gate.
 *
 * Runs against a real Supabase project (requires NEXT_PUBLIC_SUPABASE_URL +
 * SUPABASE_SERVICE_ROLE_KEY env vars + the 4H-pre commit 2 migration applied).
 *
 * Run with: npx tsx scripts/test-data-environment-gate-live.ts
 *
 * Validates four scenarios end-to-end:
 *
 *   Scenario 1: synthetic patient + external-rail kind (send_email)
 *               → row immediately transitions to
 *                 'suppressed_data_environment' status
 *               → exactly one notification.dispatch_blocked_by_privacy_check
 *                 audit_events row exists with metadata.suppression_reason
 *                 = 'data_environment'
 *               → pickNextOutboundJob returns null for this row
 *               → enqueueOutboundJob returns suppressed_by_data_environment=true
 *                 + suppression_audit_event_id set
 *
 *   Scenario 2: production patient + external-rail kind (send_email)
 *               → row stays 'queued'
 *               → no suppression audit event for this row
 *               → enqueueOutboundJob returns suppressed_by_data_environment=false
 *
 *   Scenario 3: synthetic patient + internal-only kind (sar_export)
 *               → row stays 'queued' (internal kinds run in any env)
 *               → no suppression audit event for this row
 *
 *   Scenario 4: idempotent replay (same idempotency_key twice)
 *               → first enqueue → row + maybe-suppression
 *               → second enqueue → idempotent_replay=true,
 *                 suppressed_by_data_environment=false (gate is skipped
 *                 on idempotent replays per the contract)
 *
 * Cleans up all created rows on success or failure.
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { enqueueOutboundJob } from '../lib/outbound/enqueue';
import { applyDataEnvironmentGateAtDispatch } from '../lib/outbound/dataEnvironmentGate';
import type { OutboundJobRow } from '../lib/outbound/dispatch';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LooseSupabase = any;

interface TestContext {
  supabase: LooseSupabase;
  syntheticPatientId: string;
  productionPatientId: string;
  outboundJobIds: string[];
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
    syntheticPatientId: '',
    productionPatientId: '',
    outboundJobIds: [],
    auditEventIds: [],
  };

  const ts = Date.now();
  let exitCode = 0;
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

  try {
    console.log(`[${new Date().toISOString()}] Setting up test patients ...`);
    await setup(ctx, ts);
    console.log(`  synthetic_patient_id=${ctx.syntheticPatientId}`);
    console.log(`  production_patient_id=${ctx.productionPatientId}`);

    // -----------------------------------------------------------------
    // Scenario 1: synthetic patient + external-rail kind (send_email)
    // -----------------------------------------------------------------
    console.log(`\n[scenario 1] synthetic patient + send_email → suppressed_data_environment`);
    const s1 = await enqueueOutboundJob({
      kind: 'send_email',
      payload: { test_marker: `s1-${ts}` },
      patient_id: ctx.syntheticPatientId,
      channel: 'email',
      idempotency_key: `phase4h-pre-c2-s1-${ts}`,
      template_key: 'tmpl.test.smoke_v1',
      template_version: '1.0.0',
      message_intent: 'operational',
    });
    ctx.outboundJobIds.push(s1.outbound_job_id);
    if (s1.suppression_audit_event_id) ctx.auditEventIds.push(s1.suppression_audit_event_id);

    assert(
      s1.suppressed_by_data_environment === true,
      'Scenario 1: enqueueOutboundJob returns suppressed_by_data_environment=true',
      `got ${s1.suppressed_by_data_environment}`
    );
    assert(
      s1.suppression_audit_event_id !== null,
      'Scenario 1: suppression_audit_event_id is set',
      'got null'
    );

    const s1Row = await fetchRow(supabase, s1.outbound_job_id);
    assert(
      s1Row.status === 'suppressed_data_environment',
      'Scenario 1: row.status = suppressed_data_environment',
      `got status=${s1Row.status}`
    );
    assert(
      s1Row.suppressed_at !== null,
      'Scenario 1: row.suppressed_at is populated',
      'got null'
    );
    assert(
      s1Row.suppression_reason === 'data_environment_non_production',
      'Scenario 1: row.suppression_reason = data_environment_non_production',
      `got ${s1Row.suppression_reason}`
    );

    // Verify the audit event has the right shape.
    const s1Audit = await fetchAudit(supabase, s1.suppression_audit_event_id!);
    assert(
      s1Audit.action === 'notification.dispatch_blocked_by_privacy_check',
      'Scenario 1: audit action = notification.dispatch_blocked_by_privacy_check',
      `got ${s1Audit.action}`
    );
    assert(
      (s1Audit.metadata as Record<string, unknown>).suppression_reason === 'data_environment',
      'Scenario 1: audit metadata.suppression_reason = data_environment',
      `got ${(s1Audit.metadata as Record<string, unknown>).suppression_reason}`
    );
    assert(
      (s1Audit.metadata as Record<string, unknown>).gate_call_site === 'enqueue',
      'Scenario 1: audit metadata.gate_call_site = enqueue',
      `got ${(s1Audit.metadata as Record<string, unknown>).gate_call_site}`
    );
    assert(
      s1Audit.resource_type === 'outbound_jobs',
      'Scenario 1: audit resource_type = outbound_jobs',
      `got ${s1Audit.resource_type}`
    );
    assert(
      s1Audit.resource_id === s1.outbound_job_id,
      'Scenario 1: audit resource_id = outbound_job_id',
      `got resource_id=${s1Audit.resource_id} expected ${s1.outbound_job_id}`
    );
    assert(
      s1Audit.patient_id === ctx.syntheticPatientId,
      'Scenario 1: audit patient_id matches synthetic patient',
      `got patient_id=${s1Audit.patient_id}`
    );

    // Confirm the worker would NEVER pick this up (Phase 4E SQL filter
    // already ensures this; the gate ensures the row is terminal).
    const { data: pickAttempt } = await supabase.rpc('pick_next_outbound_job');
    if (pickAttempt && (pickAttempt as { id?: string }).id === s1.outbound_job_id) {
      fail(
        'Scenario 1: pick_next_outbound_job did NOT return the suppressed row',
        `pick_next returned the suppressed row id=${s1.outbound_job_id} — STRUCTURAL LOCK BROKEN`
      );
    } else {
      pass('Scenario 1: pick_next_outbound_job did not return the suppressed row');
      // If pick_next returned some other row, put it back by marking
      // its dispatch as failed_terminal so we don't leave it
      // half-dispatched. We don't want test side effects.
      if (pickAttempt && (pickAttempt as { id?: string }).id) {
        const otherId = (pickAttempt as { id: string }).id;
        await supabase.rpc('mark_outbound_job_dispatch', {
          p_outbound_job_id: otherId,
          p_attempt: 1,
          p_status: 'failed_terminal',
          p_channel: 'in_app',
          p_provider: 'smoke_test_cleanup',
          p_provider_message_id: null,
          p_error_message: 'released by phase 4h-pre commit 2 smoke test',
          p_error_code: null,
          p_error_payload: null,
          p_metadata: {},
        });
      }
    }

    // -----------------------------------------------------------------
    // Scenario 2: production patient + external-rail kind (send_email)
    // -----------------------------------------------------------------
    console.log(`\n[scenario 2] production patient + send_email → stays queued`);
    const s2 = await enqueueOutboundJob({
      kind: 'send_email',
      payload: { test_marker: `s2-${ts}` },
      patient_id: ctx.productionPatientId,
      channel: 'email',
      idempotency_key: `phase4h-pre-c2-s2-${ts}`,
      template_key: 'tmpl.test.smoke_v1',
      template_version: '1.0.0',
      message_intent: 'operational',
    });
    ctx.outboundJobIds.push(s2.outbound_job_id);

    assert(
      s2.suppressed_by_data_environment === false,
      'Scenario 2: enqueueOutboundJob returns suppressed_by_data_environment=false (production)',
      `got ${s2.suppressed_by_data_environment}`
    );
    assert(
      s2.suppression_audit_event_id === null,
      'Scenario 2: no suppression audit event for production row',
      `got ${s2.suppression_audit_event_id}`
    );

    const s2Row = await fetchRow(supabase, s2.outbound_job_id);
    assert(
      s2Row.status === 'queued',
      'Scenario 2: row stays in queued status',
      `got status=${s2Row.status}`
    );
    assert(
      s2Row.suppressed_at === null,
      'Scenario 2: row.suppressed_at is null',
      `got ${s2Row.suppressed_at}`
    );

    // -----------------------------------------------------------------
    // Scenario 3: synthetic patient + internal-only kind (sar_export)
    // -----------------------------------------------------------------
    console.log(`\n[scenario 3] synthetic patient + sar_export → stays queued (internal kind)`);
    const s3 = await enqueueOutboundJob({
      kind: 'sar_export',
      payload: { test_marker: `s3-${ts}`, patient_id: ctx.syntheticPatientId },
      patient_id: ctx.syntheticPatientId,
      idempotency_key: `phase4h-pre-c2-s3-${ts}`,
      message_intent: 'internal',
    });
    ctx.outboundJobIds.push(s3.outbound_job_id);

    assert(
      s3.suppressed_by_data_environment === false,
      'Scenario 3: enqueueOutboundJob returns suppressed_by_data_environment=false (internal kind)',
      `got ${s3.suppressed_by_data_environment}`
    );

    const s3Row = await fetchRow(supabase, s3.outbound_job_id);
    assert(
      s3Row.status === 'queued',
      'Scenario 3: row stays in queued status (internal kinds run in any env)',
      `got status=${s3Row.status}`
    );

    // -----------------------------------------------------------------
    // Scenario 4: idempotent replay
    // -----------------------------------------------------------------
    console.log(`\n[scenario 4] idempotent replay → gate skipped`);
    const s4 = await enqueueOutboundJob({
      kind: 'send_email',
      payload: { test_marker: `s4-${ts}` },
      patient_id: ctx.syntheticPatientId,
      channel: 'email',
      idempotency_key: `phase4h-pre-c2-s1-${ts}`, // SAME key as scenario 1
      template_key: 'tmpl.test.smoke_v1',
      template_version: '1.0.0',
      message_intent: 'operational',
    });
    // No new outbound_job_id pushed because it's the same as s1.

    assert(
      s4.idempotent_replay === true,
      'Scenario 4: idempotent_replay=true on second enqueue with same key',
      `got idempotent_replay=${s4.idempotent_replay}`
    );
    assert(
      s4.outbound_job_id === s1.outbound_job_id,
      'Scenario 4: returns the same outbound_job_id as the original',
      `got ${s4.outbound_job_id} expected ${s1.outbound_job_id}`
    );
    assert(
      s4.suppressed_by_data_environment === false,
      'Scenario 4: suppressed_by_data_environment=false on idempotent replay (gate skipped)',
      `got ${s4.suppressed_by_data_environment}`
    );
    assert(
      s4.suppression_audit_event_id === null,
      'Scenario 4: no second suppression audit event on idempotent replay',
      `got ${s4.suppression_audit_event_id}`
    );

    // Verify exactly ONE suppression audit event exists for s1's row
    // — the idempotent replay must not have emitted a duplicate.
    const auditCount = await countSuppressionAudits(supabase, s1.outbound_job_id);
    assert(
      auditCount === 1,
      'Scenario 4: exactly one notification.dispatch_blocked_by_privacy_check for the s1 row',
      `got ${auditCount} (idempotent replay emitted a duplicate audit event — atomicity broken)`
    );

    // -----------------------------------------------------------------
    // Scenario 5: dispatch-side defense-in-depth — test the wrapper directly
    // -----------------------------------------------------------------
    console.log(`\n[scenario 5] applyDataEnvironmentGateAtDispatch on a fresh synthetic row`);
    // Insert a row directly into outbound_jobs so we can test the
    // dispatch-side wrapper without going through enqueue.
    const { data: directInsert, error: directError } = await supabase
      .from('outbound_jobs')
      .insert({
        kind: 'send_sms',
        payload: { test_marker: `s5-${ts}` },
        status: 'queued',
        run_after: new Date().toISOString(),
        max_attempts: 12,
        patient_id: ctx.syntheticPatientId,
        channel: 'sms',
        message_intent: 'operational',
        org_id: '00000000-0000-0000-0000-000000000001',
        data_environment: 'synthetic',
        idempotency_key: `phase4h-pre-c2-s5-${ts}`,
      })
      .select('*')
      .single();
    if (directError || !directInsert) {
      throw new Error(`Scenario 5 setup: direct insert failed: ${directError?.message}`);
    }
    ctx.outboundJobIds.push((directInsert as { id: string }).id);
    const dispatchRow = directInsert as OutboundJobRow;

    const s5 = await applyDataEnvironmentGateAtDispatch(dispatchRow, supabase);
    if (s5.audit_event_id) ctx.auditEventIds.push(s5.audit_event_id);

    assert(
      s5.decision === 'suppress',
      'Scenario 5: dispatch-side gate returns suppress for synthetic + send_sms',
      `got ${s5.decision}`
    );
    assert(
      s5.transitioned === true,
      'Scenario 5: dispatch-side gate transitioned the row',
      `got transitioned=${s5.transitioned}`
    );
    assert(
      s5.audit_event_id !== null,
      'Scenario 5: dispatch-side gate emitted an audit event',
      'got null'
    );

    const s5Row = await fetchRow(supabase, dispatchRow.id);
    assert(
      s5Row.status === 'suppressed_data_environment',
      'Scenario 5: row transitioned to suppressed_data_environment',
      `got status=${s5Row.status}`
    );

    if (s5.audit_event_id) {
      const s5Audit = await fetchAudit(supabase, s5.audit_event_id);
      assert(
        (s5Audit.metadata as Record<string, unknown>).gate_call_site === 'dispatch_defense_in_depth',
        'Scenario 5: audit metadata.gate_call_site = dispatch_defense_in_depth',
        `got ${(s5Audit.metadata as Record<string, unknown>).gate_call_site}`
      );
    }

    // -----------------------------------------------------------------
    // Summary
    // -----------------------------------------------------------------
    console.log('\n----------------------------------------------------------------------');
    console.log(
      `Phase 4H-pre commit 2 dataEnvironmentGate live-DB smoke: ${passes} passed, ${failures} failed.`
    );
    if (failures > 0) {
      console.error('RED — gate runtime broken. Investigate before shipping.');
      exitCode = 1;
    } else {
      console.log('GREEN — data_environment gate is live + atomic + idempotent.');
    }
  } catch (err) {
    console.error(
      `[${new Date().toISOString()}] FAIL —`,
      err instanceof Error ? err.message : err
    );
    exitCode = 1;
  } finally {
    console.log(`\n[${new Date().toISOString()}] Cleaning up ...`);
    await cleanup(ctx).catch((err) => {
      console.error('Cleanup error (best-effort):', err);
    });
  }

  process.exit(exitCode);
}

async function setup(ctx: TestContext, ts: number): Promise<void> {
  // Synthetic patient — explicit data_environment override.
  const synthRes = await ctx.supabase
    .from('patients')
    .insert({
      email: `phase4h-pre-c2-synth-${ts}@example.test`,
      phone: '+15555550199',
      data_environment: 'synthetic',
    })
    .select('id, data_environment')
    .single();
  if (synthRes.error || !synthRes.data) {
    throw new Error(`synthetic patient insert failed: ${synthRes.error?.message}`);
  }
  ctx.syntheticPatientId = (synthRes.data as { id: string }).id;
  if ((synthRes.data as { data_environment: string }).data_environment !== 'synthetic') {
    throw new Error(`synthetic patient setup: data_environment override failed`);
  }

  // Production patient (default).
  const prodRes = await ctx.supabase
    .from('patients')
    .insert({
      email: `phase4h-pre-c2-prod-${ts}@example.test`,
      phone: '+15555550198',
    })
    .select('id, data_environment')
    .single();
  if (prodRes.error || !prodRes.data) {
    throw new Error(`production patient insert failed: ${prodRes.error?.message}`);
  }
  ctx.productionPatientId = (prodRes.data as { id: string }).id;
  if ((prodRes.data as { data_environment: string }).data_environment !== 'production') {
    throw new Error(`production patient setup: data_environment default not 'production'`);
  }
}

async function fetchRow(supabase: SupabaseClient, id: string) {
  const { data, error } = await supabase
    .from('outbound_jobs')
    .select('id, status, suppressed_at, suppression_reason, data_environment, kind')
    .eq('id', id)
    .single();
  if (error || !data) {
    throw new Error(`fetchRow(${id}) failed: ${error?.message}`);
  }
  return data as {
    id: string;
    status: string;
    suppressed_at: string | null;
    suppression_reason: string | null;
    data_environment: string;
    kind: string;
  };
}

async function fetchAudit(supabase: SupabaseClient, id: string) {
  const { data, error } = await supabase
    .from('audit_events')
    .select('id, action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata')
    .eq('id', id)
    .single();
  if (error || !data) {
    throw new Error(`fetchAudit(${id}) failed: ${error?.message}`);
  }
  return data as {
    id: string;
    action: string;
    resource_type: string | null;
    resource_id: string | null;
    patient_id: string | null;
    actor_kind: string | null;
    org_id: string | null;
    metadata: unknown;
  };
}

async function countSuppressionAudits(
  supabase: SupabaseClient,
  outboundJobId: string,
): Promise<number> {
  const { data, error } = await supabase
    .from('audit_events')
    .select('id', { count: 'exact', head: false })
    .eq('action', 'notification.dispatch_blocked_by_privacy_check')
    .eq('resource_type', 'outbound_jobs')
    .eq('resource_id', outboundJobId);
  if (error) {
    throw new Error(`countSuppressionAudits failed: ${error.message}`);
  }
  return Array.isArray(data) ? data.length : 0;
}

async function cleanup(ctx: TestContext): Promise<void> {
  if (ctx.auditEventIds.length > 0) {
    await ctx.supabase
      .from('audit_events')
      .delete()
      .in('id', ctx.auditEventIds);
  }
  if (ctx.outboundJobIds.length > 0) {
    // Also clean any audit_events that reference these outbound_jobs
    // by resource_id (the suppression audits, plus any enqueue audits
    // emitted by the orchestrator).
    await ctx.supabase
      .from('audit_events')
      .delete()
      .eq('resource_type', 'outbound_jobs')
      .in('resource_id', ctx.outboundJobIds);
    await ctx.supabase
      .from('outbound_jobs')
      .delete()
      .in('id', ctx.outboundJobIds);
  }
  if (ctx.syntheticPatientId) {
    await ctx.supabase
      .from('patients')
      .delete()
      .eq('id', ctx.syntheticPatientId);
  }
  if (ctx.productionPatientId) {
    await ctx.supabase
      .from('patients')
      .delete()
      .eq('id', ctx.productionPatientId);
  }
}

main().catch((err) => {
  console.error('Unhandled error:', err);
  process.exit(1);
});
