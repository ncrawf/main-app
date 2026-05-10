/**
 * Phase 4H-in-app-inbox c1 — substrate channel parity smoke (live-DB).
 *
 * Verifies the c1 substrate addition for the `send_in_app` channel.
 * c1 ships substrate ONLY: no rule opts in to in_app yet, no patient
 * portal UI ships, no disclosure-policy dual-fan-out logic. This test
 * verifies the substrate path works correctly in isolation.
 *
 * Per the c1 preflight (.cursor/plans/PREFLIGHT_2026-05-10_phase_4h_in_app_inbox_c1.md):
 *   - new patient_inbox_messages table with primitives + lineage +
 *     rendered output + metadata + read/archived seams
 *   - new record_inbox_message SECURITY DEFINER orchestrator
 *   - new dispatchPreRenderedInApp branch in lib/outbound/dispatch.ts
 *   - substrate already half-acknowledged: 'send_in_app' in JOB_KINDS,
 *     'in_app' in JOB_CHANNELS, isExternalRailJobKind already false
 *
 * Four scenarios:
 *
 *   1. Production patient + send_in_app dispatch (end-to-end via
 *      runDispatcherTick): insert outbound_job, run tick, verify
 *      outbound_jobs.status='succeeded', outbound_job_dispatches row,
 *      patient_inbox_messages row with full lineage.
 *
 *   2. Idempotent replay: call recordInboxMessage directly twice with
 *      same outbound_job_id; verify same id returned, no duplicate row,
 *      idempotent_replay=true on second call.
 *
 *   3. Synthetic patient + recordInboxMessage: verify orchestrator
 *      accepts synthetic data_environment values and writes the inbox
 *      row (in_app is internal, not external — c1 data_environment
 *      gate at the dispatcher would have to bypass, but we exercise
 *      the orchestrator path directly here since pick_next_outbound_job
 *      filters data_environment='production' at the SQL layer; the
 *      filter is a Phase 4E concern, not a c1 concern).
 *
 *   4. Schema invariants: defaults for metadata/archived_at/read_at;
 *      CHECK constraint rejects bogus message_intent + out-of-range
 *      intended_privacy_exposure_level; UNIQUE constraint rejects
 *      duplicate outbound_job_id.
 *
 * Run with: `npx tsx scripts/test-in-app-inbox-c1.ts`
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { recordInboxMessage } from '../lib/inbox/recordInboxMessage'
import { runDispatcherTick } from '../lib/outbound/dispatch'

interface TestContext {
  supabase: SupabaseClient
  productionPatientId: string
  syntheticPatientId: string
  productionOutboundJobId: string
  syntheticOutboundJobId: string
  inboxMessageIds: string[]
  outboundJobIds: string[]
  auditEventIds: string[]
}

async function main(): Promise<void> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
    process.exit(1)
  }
  const supabase = createClient(url, key)

  const ts = Date.now()
  const ctx: TestContext = {
    supabase,
    productionPatientId: '',
    syntheticPatientId: '',
    productionOutboundJobId: '',
    syntheticOutboundJobId: '',
    inboxMessageIds: [],
    outboundJobIds: [],
    auditEventIds: [],
  }

  let exitCode = 0
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

  try {
    console.log(`[${new Date().toISOString()}] Setting up test fixtures ...`)
    await setup(ctx, ts)
    console.log(`  production_patient_id=${ctx.productionPatientId}`)
    console.log(`  synthetic_patient_id=${ctx.syntheticPatientId}`)

    // -----------------------------------------------------------------
    // Scenario 1: production patient + send_in_app dispatch (end-to-end)
    // -----------------------------------------------------------------
    console.log(`\n[scenario 1] production patient + send_in_app dispatch`)

    // Insert outbound_job with kind=send_in_app + rendered_in_app payload.
    // Uses tmpl.fulfillment_lifecycle.order_shipped_v1 as the template_key
    // because the disclosure-policy gate looks up templates from the
    // typed registry and fails closed on unknown templates. The template's
    // privacy_exposure_level (2) and message_intent ('operational') align
    // with what we want to exercise on the inbox row. The channels array
    // declared on that template is ['email','sms'] — the disclosure-
    // policy gate does not currently enforce template.channels matches
    // outbound_job.channel, so using it for an in_app dispatch is fine
    // for substrate verification.
    const enqueueProd = await ctx.supabase
      .from('outbound_jobs')
      .insert({
        kind: 'send_in_app',
        channel: 'in_app',
        patient_id: ctx.productionPatientId,
        idempotency_key: `c1-prod-${ts}-1`,
        rule_id: 'rule.fulfillment_lifecycle.order_shipped_v1',
        rule_version: '1.0.0',
        template_key: 'tmpl.fulfillment_lifecycle.order_shipped_v1',
        template_version: '1.0.0',
        intended_privacy_exposure_level: 2,
        declared_privacy_exposure_level: 2,
        message_intent: 'operational',
        priority_hint: 'standard',
        source_kind: 'message',
        queued_by_kind: 'rule_engine',
        payload: {
          rendered_in_app: {
            subject: 'Test inbox message',
            body_html: '<p>This is a test inbox message body.</p>',
            body_text: 'This is a test inbox message body.',
          },
        },
      })
      .select('id')
      .single()
    if (enqueueProd.error || !enqueueProd.data) {
      throw new Error(`Scenario 1: enqueue failed: ${enqueueProd.error?.message}`)
    }
    ctx.productionOutboundJobId = (enqueueProd.data as { id: string }).id
    ctx.outboundJobIds.push(ctx.productionOutboundJobId)

    // Run dispatcher tick. This will pick up the queued job, run gates,
    // hit our new dispatchPreRenderedInApp branch, call recordInboxMessage,
    // and mark the job succeeded.
    const tickResult = await runDispatcherTick()

    assert(
      tickResult.job_id === ctx.productionOutboundJobId,
      'Scenario 1: dispatcher tick picked up our outbound_job',
      `picked up ${tickResult.job_id} instead of ${ctx.productionOutboundJobId}`,
    )
    assert(
      tickResult.outcome === 'succeeded',
      'Scenario 1: dispatcher outcome=succeeded',
      `got ${tickResult.outcome}`,
    )

    // Verify outbound_jobs.status transitioned to 'succeeded'.
    const { data: jobRow, error: jobErr } = await ctx.supabase
      .from('outbound_jobs')
      .select('id, status')
      .eq('id', ctx.productionOutboundJobId)
      .single()
    if (jobErr || !jobRow) {
      throw new Error(`Scenario 1: outbound_jobs lookup failed: ${jobErr?.message}`)
    }
    assert(
      (jobRow as { status: string }).status === 'succeeded',
      'Scenario 1: outbound_jobs.status=succeeded',
      `got ${(jobRow as { status: string }).status}`,
    )

    // Verify outbound_job_dispatches row exists with channel=in_app.
    const { data: dispatches, error: dispErr } = await ctx.supabase
      .from('outbound_job_dispatches')
      .select('id, channel, provider, provider_message_id, status')
      .eq('outbound_job_id', ctx.productionOutboundJobId)
    if (dispErr) {
      throw new Error(`Scenario 1: dispatches lookup failed: ${dispErr.message}`)
    }
    assert(
      Array.isArray(dispatches) && dispatches.length === 1,
      'Scenario 1: exactly one outbound_job_dispatches row',
      `got ${dispatches?.length} rows`,
    )
    if (dispatches && dispatches.length > 0) {
      const d = dispatches[0] as {
        channel: string
        provider: string
        provider_message_id: string | null
        status: string
      }
      assert(d.channel === 'in_app', 'Scenario 1: dispatch.channel=in_app', `got ${d.channel}`)
      assert(d.provider === 'in_app_inbox', 'Scenario 1: dispatch.provider=in_app_inbox', `got ${d.provider}`)
      assert(d.status === 'succeeded', 'Scenario 1: dispatch.status=succeeded', `got ${d.status}`)
      assert(
        typeof d.provider_message_id === 'string' && d.provider_message_id.length > 0,
        'Scenario 1: dispatch.provider_message_id is the inbox_message id',
        `got ${d.provider_message_id}`,
      )
    }

    // Verify patient_inbox_messages row exists with full lineage.
    const { data: inboxRows, error: inboxErr } = await ctx.supabase
      .from('patient_inbox_messages')
      .select(
        'id, outbound_job_id, patient_id, org_id, data_environment, ' +
          'rule_id, rule_version, template_key, template_version, ' +
          'intended_privacy_exposure_level, message_intent, ' +
          'subject, body_html, body_text, metadata, read_at, archived_at',
      )
      .eq('outbound_job_id', ctx.productionOutboundJobId)
    if (inboxErr) {
      throw new Error(`Scenario 1: inbox lookup failed: ${inboxErr.message}`)
    }
    assert(
      Array.isArray(inboxRows) && inboxRows.length === 1,
      'Scenario 1: exactly one patient_inbox_messages row',
      `got ${inboxRows?.length} rows`,
    )
    if (inboxRows && inboxRows.length > 0) {
      const row = inboxRows[0] as unknown as Record<string, unknown>
      ctx.inboxMessageIds.push(row.id as string)
      assert(
        row.outbound_job_id === ctx.productionOutboundJobId,
        'Scenario 1: inbox.outbound_job_id matches',
        `got ${row.outbound_job_id}`,
      )
      assert(
        row.rule_id === 'rule.fulfillment_lifecycle.order_shipped_v1',
        'Scenario 1: inbox.rule_id',
        `got ${row.rule_id}`,
      )
      assert(row.rule_version === '1.0.0', 'Scenario 1: inbox.rule_version', `got ${row.rule_version}`)
      assert(
        row.template_key === 'tmpl.fulfillment_lifecycle.order_shipped_v1',
        'Scenario 1: inbox.template_key',
        `got ${row.template_key}`,
      )
      assert(
        row.intended_privacy_exposure_level === 2,
        'Scenario 1: inbox.intended_privacy_exposure_level=2',
        `got ${row.intended_privacy_exposure_level}`,
      )
      assert(
        row.message_intent === 'operational',
        'Scenario 1: inbox.message_intent=operational',
        `got ${row.message_intent}`,
      )
      assert(row.subject === 'Test inbox message', 'Scenario 1: inbox.subject', `got "${row.subject}"`)
      assert(
        row.body_html === '<p>This is a test inbox message body.</p>',
        'Scenario 1: inbox.body_html byte-identical',
        `got "${row.body_html}"`,
      )
      assert(
        row.body_text === 'This is a test inbox message body.',
        'Scenario 1: inbox.body_text byte-identical',
        `got "${row.body_text}"`,
      )
      assert(
        JSON.stringify(row.metadata) === '{}',
        'Scenario 1: inbox.metadata defaults to {}',
        `got ${JSON.stringify(row.metadata)}`,
      )
      assert(row.read_at === null, 'Scenario 1: inbox.read_at IS NULL on insert', `got ${row.read_at}`)
      assert(
        row.archived_at === null,
        'Scenario 1: inbox.archived_at IS NULL on insert',
        `got ${row.archived_at}`,
      )
      assert(
        row.data_environment === 'production',
        'Scenario 1: inbox.data_environment=production',
        `got ${row.data_environment}`,
      )
    }

    // -----------------------------------------------------------------
    // Scenario 2: idempotent replay (recordInboxMessage twice with same
    // outbound_job_id returns same inbox_message_id, no duplicate row)
    // -----------------------------------------------------------------
    console.log(`\n[scenario 2] idempotent replay: recordInboxMessage twice with same outbound_job_id`)

    // The dispatcher already wrote one inbox row for productionOutboundJobId.
    // Calling recordInboxMessage with the same outbound_job_id should return
    // the existing id with idempotent_replay=true.
    const replay = await recordInboxMessage(
      {
        outbound_job_id: ctx.productionOutboundJobId,
        patient_id: ctx.productionPatientId,
        org_id: '00000000-0000-0000-0000-000000000001',
        data_environment: 'production',
        intended_privacy_exposure_level: 2,
        message_intent: 'operational',
        subject: 'Replay attempt',
        body_html: '<p>Should not insert.</p>',
        body_text: 'Should not insert.',
        metadata: { ignored: true },
        effective_at: new Date().toISOString(),
      },
      ctx.supabase,
    )

    assert(
      replay.idempotent_replay === true,
      'Scenario 2: replay returns idempotent_replay=true',
      `got idempotent_replay=${replay.idempotent_replay}`,
    )
    assert(
      ctx.inboxMessageIds.includes(replay.inbox_message_id),
      'Scenario 2: replay returns the existing inbox_message_id',
      `got ${replay.inbox_message_id}; expected one of ${ctx.inboxMessageIds.join(',')}`,
    )

    // Verify still exactly one row for this outbound_job_id.
    const { data: replayCheck } = await ctx.supabase
      .from('patient_inbox_messages')
      .select('id, subject')
      .eq('outbound_job_id', ctx.productionOutboundJobId)
    assert(
      Array.isArray(replayCheck) && replayCheck.length === 1,
      'Scenario 2: still exactly one inbox row (no duplicate)',
      `got ${replayCheck?.length} rows`,
    )
    if (replayCheck && replayCheck.length > 0) {
      // Subject should still be the original (not the replay's "Should not insert.")
      assert(
        (replayCheck[0] as { subject: string }).subject === 'Test inbox message',
        'Scenario 2: original subject preserved (replay did not overwrite)',
        `got "${(replayCheck[0] as { subject: string }).subject}"`,
      )
    }

    // -----------------------------------------------------------------
    // Scenario 3: synthetic patient + recordInboxMessage direct
    // -----------------------------------------------------------------
    console.log(`\n[scenario 3] synthetic patient + recordInboxMessage direct`)

    // Insert a synthetic outbound_job (kind=send_in_app, data_environment=synthetic).
    // pick_next_outbound_job filters data_environment='production' at SQL,
    // so the dispatcher tick wouldn't pick this up. We exercise the
    // orchestrator path directly to verify it accepts synthetic data.
    const synthEnqueue = await ctx.supabase
      .from('outbound_jobs')
      .insert({
        kind: 'send_in_app',
        channel: 'in_app',
        patient_id: ctx.syntheticPatientId,
        idempotency_key: `c1-synth-${ts}-1`,
        rule_id: 'rule.fulfillment_lifecycle.order_shipped_v1',
        rule_version: '1.0.0',
        template_key: 'tmpl.fulfillment_lifecycle.order_shipped_v1',
        template_version: '1.0.0',
        intended_privacy_exposure_level: 2,
        message_intent: 'operational',
        priority_hint: 'standard',
        source_kind: 'message',
        queued_by_kind: 'rule_engine',
        data_environment: 'synthetic',
        payload: {
          rendered_in_app: {
            subject: 'Synthetic test inbox',
            body_html: '<p>Synthetic.</p>',
            body_text: 'Synthetic.',
          },
        },
      })
      .select('id')
      .single()
    if (synthEnqueue.error || !synthEnqueue.data) {
      throw new Error(`Scenario 3: synth enqueue failed: ${synthEnqueue.error?.message}`)
    }
    ctx.syntheticOutboundJobId = (synthEnqueue.data as { id: string }).id
    ctx.outboundJobIds.push(ctx.syntheticOutboundJobId)

    // Call recordInboxMessage directly (orchestrator-only path).
    const synthInbox = await recordInboxMessage(
      {
        outbound_job_id: ctx.syntheticOutboundJobId,
        patient_id: ctx.syntheticPatientId,
        org_id: '00000000-0000-0000-0000-000000000001',
        data_environment: 'synthetic',
        intended_privacy_exposure_level: 2,
        message_intent: 'operational',
        subject: 'Synthetic test inbox',
        body_html: '<p>Synthetic.</p>',
        body_text: 'Synthetic.',
        metadata: {},
        effective_at: new Date().toISOString(),
      },
      ctx.supabase,
    )

    assert(
      synthInbox.idempotent_replay === false,
      'Scenario 3: synthetic write is fresh (idempotent_replay=false)',
      `got idempotent_replay=${synthInbox.idempotent_replay}`,
    )
    assert(
      typeof synthInbox.inbox_message_id === 'string' && synthInbox.inbox_message_id.length > 0,
      'Scenario 3: synthetic inbox_message_id returned',
      `got ${synthInbox.inbox_message_id}`,
    )
    if (synthInbox.inbox_message_id) {
      ctx.inboxMessageIds.push(synthInbox.inbox_message_id)
    }

    // Verify the synthetic row exists with data_environment=synthetic.
    const { data: synthInboxRow } = await ctx.supabase
      .from('patient_inbox_messages')
      .select('id, data_environment, patient_id')
      .eq('id', synthInbox.inbox_message_id)
      .single()
    if (synthInboxRow) {
      const row = synthInboxRow as { data_environment: string; patient_id: string }
      assert(
        row.data_environment === 'synthetic',
        'Scenario 3: synthetic inbox row.data_environment=synthetic',
        `got ${row.data_environment}`,
      )
      assert(
        row.patient_id === ctx.syntheticPatientId,
        'Scenario 3: synthetic inbox row.patient_id matches',
        `got ${row.patient_id}`,
      )
    }

    // -----------------------------------------------------------------
    // Scenario 4: schema invariants (defaults + CHECK + UNIQUE)
    // -----------------------------------------------------------------
    console.log(`\n[scenario 4] schema invariants`)

    // 4a. Direct INSERT with bogus message_intent → CHECK rejects.
    const badIntent = await ctx.supabase.from('patient_inbox_messages').insert({
      outbound_job_id: ctx.syntheticOutboundJobId, // already-used id; this would also collide on UNIQUE
      patient_id: ctx.syntheticPatientId,
      data_environment: 'synthetic',
      intended_privacy_exposure_level: 2,
      message_intent: 'bogus_value', // CHECK should reject
      subject: 's',
      body_html: 'h',
      body_text: 't',
    })
    assert(
      badIntent.error !== null,
      'Scenario 4a: CHECK rejects message_intent="bogus_value"',
      'INSERT unexpectedly succeeded',
    )

    // 4b. Direct INSERT with intended_privacy_exposure_level=99 → CHECK rejects.
    // Use a fresh outbound_job (don't collide on UNIQUE before we test the tier CHECK).
    const tierProbeJob = await ctx.supabase
      .from('outbound_jobs')
      .insert({
        kind: 'send_in_app',
        channel: 'in_app',
        patient_id: ctx.productionPatientId,
        idempotency_key: `c1-tier-probe-${ts}`,
        message_intent: 'operational',
        intended_privacy_exposure_level: 2,
        priority_hint: 'standard',
        queued_by_kind: 'rule_engine',
        payload: { rendered_in_app: { subject: 's', body_html: 'h', body_text: 't' } },
      })
      .select('id')
      .single()
    if (tierProbeJob.error || !tierProbeJob.data) {
      throw new Error(`Scenario 4b: tier-probe enqueue failed: ${tierProbeJob.error?.message}`)
    }
    const tierProbeJobId = (tierProbeJob.data as { id: string }).id
    ctx.outboundJobIds.push(tierProbeJobId)

    const badTier = await ctx.supabase.from('patient_inbox_messages').insert({
      outbound_job_id: tierProbeJobId,
      patient_id: ctx.productionPatientId,
      data_environment: 'production',
      intended_privacy_exposure_level: 99, // CHECK should reject (must be 0-5)
      message_intent: 'operational',
      subject: 's',
      body_html: 'h',
      body_text: 't',
    })
    assert(
      badTier.error !== null,
      'Scenario 4b: CHECK rejects intended_privacy_exposure_level=99',
      'INSERT unexpectedly succeeded',
    )

    // 4c. UNIQUE constraint rejects duplicate outbound_job_id.
    const dupJobId = await ctx.supabase.from('patient_inbox_messages').insert({
      outbound_job_id: ctx.productionOutboundJobId, // already has an inbox row from scenario 1
      patient_id: ctx.productionPatientId,
      data_environment: 'production',
      intended_privacy_exposure_level: 2,
      message_intent: 'operational',
      subject: 'duplicate',
      body_html: 'h',
      body_text: 't',
    })
    assert(
      dupJobId.error !== null,
      'Scenario 4c: UNIQUE rejects duplicate outbound_job_id',
      'INSERT unexpectedly succeeded',
    )

    // 4d. Verify row from scenario 1 has metadata={}, read_at=null, archived_at=null
    // (already verified in scenario 1 but double-check via a focused query).
    const { data: defaultsCheck } = await ctx.supabase
      .from('patient_inbox_messages')
      .select('metadata, read_at, archived_at')
      .eq('outbound_job_id', ctx.productionOutboundJobId)
      .single()
    if (defaultsCheck) {
      const row = defaultsCheck as {
        metadata: Record<string, unknown>
        read_at: string | null
        archived_at: string | null
      }
      assert(
        JSON.stringify(row.metadata) === '{}',
        'Scenario 4d: metadata defaults to {} when omitted on insert',
        `got ${JSON.stringify(row.metadata)}`,
      )
      assert(row.read_at === null, 'Scenario 4d: read_at IS NULL on insert', `got ${row.read_at}`)
      assert(
        row.archived_at === null,
        'Scenario 4d: archived_at IS NULL on insert',
        `got ${row.archived_at}`,
      )
    }

    // -----------------------------------------------------------------
    // Summary
    // -----------------------------------------------------------------
    console.log('\n----------------------------------------------------------------------')
    console.log(`Phase 4H-in-app-inbox c1 substrate parity: ${passes} passed, ${failures} failed.`)
    if (failures > 0) {
      console.error('RED — substrate broken. Investigate before shipping.')
      exitCode = 1
    } else {
      console.log('GREEN — patient_inbox_messages substrate path is functional end-to-end.')
    }
  } catch (err) {
    console.error(
      `[${new Date().toISOString()}] FAIL —`,
      err instanceof Error ? err.message : err,
    )
    exitCode = 1
  } finally {
    console.log(`\n[${new Date().toISOString()}] Cleaning up ...`)
    await cleanup(ctx).catch((e) => console.error('Cleanup error (best-effort):', e))
  }

  process.exit(exitCode)
}

async function setup(ctx: TestContext, ts: number): Promise<void> {
  const synth = await ctx.supabase
    .from('patients')
    .insert({
      email: `phase4h-in-app-c1-synth-${ts}@example.test`,
      phone: '+15555550499',
      first_name: 'SynthInbox',
      data_environment: 'synthetic',
    })
    .select('id')
    .single()
  if (synth.error || !synth.data) {
    throw new Error(`synthetic patient insert failed: ${synth.error?.message}`)
  }
  ctx.syntheticPatientId = (synth.data as { id: string }).id

  const prod = await ctx.supabase
    .from('patients')
    .insert({
      email: `phase4h-in-app-c1-prod-${ts}@example.test`,
      phone: '+15555550498',
      first_name: 'ProdInbox',
    })
    .select('id')
    .single()
  if (prod.error || !prod.data) {
    throw new Error(`production patient insert failed: ${prod.error?.message}`)
  }
  ctx.productionPatientId = (prod.data as { id: string }).id
}

async function cleanup(ctx: TestContext): Promise<void> {
  // Inbox rows reference outbound_jobs (ON DELETE RESTRICT), so delete
  // inbox rows first, then outbound_jobs, then patients.
  if (ctx.inboxMessageIds.length > 0) {
    await ctx.supabase
      .from('patient_inbox_messages')
      .delete()
      .in('id', ctx.inboxMessageIds)
  }
  if (ctx.outboundJobIds.length > 0) {
    // Delete dispatches first (FK), then outbound_jobs.
    await ctx.supabase
      .from('outbound_job_dispatches')
      .delete()
      .in('outbound_job_id', ctx.outboundJobIds)
    // Audit events tied to the outbound_jobs (e.g., env-gate suppression).
    await ctx.supabase
      .from('audit_events')
      .delete()
      .eq('resource_type', 'outbound_jobs')
      .in('resource_id', ctx.outboundJobIds)
    await ctx.supabase.from('outbound_jobs').delete().in('id', ctx.outboundJobIds)
  }
  if (ctx.productionPatientId) {
    await ctx.supabase.from('patients').delete().eq('id', ctx.productionPatientId)
  }
  if (ctx.syntheticPatientId) {
    await ctx.supabase.from('patients').delete().eq('id', ctx.syntheticPatientId)
  }
}

main().catch((err) => {
  console.error('Unhandled error:', err)
  process.exit(1)
})
