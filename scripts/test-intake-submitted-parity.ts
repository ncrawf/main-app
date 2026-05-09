/**
 * Phase 4H-templates-discipline commit 1 — intake_submitted parity smoke (live-DB).
 *
 * Verifies the cutover from legacy v0 notification path to the typed
 * Rule + Template at `repo/rules/account_lifecycle/intake_submitted_v1.ts`
 * + `repo/templates/account_lifecycle/intake_submitted_v1.ts`.
 *
 * Five scenarios (mirror commit 5 pattern):
 *
 *   1. Production patient + 'patient.intake_submitted' trigger
 *      → 2 outbound_jobs rows with full rule lineage + 1 rule.fired
 *        audit event with metadata + rendered email subject byte-
 *        identical to legacy + rendered SMS body byte-identical to
 *        legacy "MAIN: Intake received. <url>".
 *   2. Synthetic patient + same trigger
 *      → 2 outbound_jobs rows immediately suppressed by the commit 2
 *        data_environment gate; suppression audit events emitted.
 *   3. Idempotency (replay with same form_submission_id)
 *      → idempotency_key collision; same outbound_job_ids returned;
 *        no duplicate rows.
 *   4. Legacy non-firing
 *      → resolvePatientNotifications({toWorkflowStatus:
 *        'intake_submitted'}) returns [] (legacy case deleted from the
 *        union + PATIENT_NOTIFY_BY_STATUS map).
 *   5. Wording rendering byte-identity
 *      → renderIntakeSubmittedEmail / renderIntakeSubmittedSms produce
 *        verbatim legacy strings when given the same brand_short_label.
 *
 * Run with: `npx tsx scripts/test-intake-submitted-parity.ts`.
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { dispatchRuleTriggerEvent } from '../lib/rules/runtime/dispatcher'
import {
  renderIntakeSubmittedEmail,
  renderIntakeSubmittedSms,
} from '../lib/templates/render/intake-submitted'
import { resolvePatientNotifications } from '../lib/workflows/notificationRules'
import { intakeSubmittedV1 } from '../repo/rules'
import { intakeSubmittedTemplateV1 } from '../repo/templates'

interface TestContext {
  supabase: SupabaseClient
  productionPatientId: string
  syntheticPatientId: string
  outboundJobIds: string[]
  auditEventIds: string[]
  productionFormSubmissionId: string
  syntheticFormSubmissionId: string
}

function uuid(): string {
  // Generate a v4-shaped UUID for fixture purposes; the dispatcher
  // does not look it up against form_submissions, so a synthesized
  // value is sufficient for idempotency-key testing.
  const hex = (n: number) => n.toString(16).padStart(2, '0')
  const bytes = new Uint8Array(16)
  for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256)
  bytes[6] = (bytes[6] & 0x0f) | 0x40
  bytes[8] = (bytes[8] & 0x3f) | 0x80
  const s = Array.from(bytes, hex).join('')
  return `${s.slice(0, 8)}-${s.slice(8, 12)}-${s.slice(12, 16)}-${s.slice(16, 20)}-${s.slice(20)}`
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
    outboundJobIds: [],
    auditEventIds: [],
    productionFormSubmissionId: uuid(),
    syntheticFormSubmissionId: uuid(),
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
    console.log(`[${new Date().toISOString()}] Setting up test patients ...`)
    await setup(ctx, ts)
    console.log(`  production_patient_id=${ctx.productionPatientId}`)
    console.log(`  synthetic_patient_id=${ctx.syntheticPatientId}`)
    console.log(`  production_form_submission_id=${ctx.productionFormSubmissionId}`)
    console.log(`  synthetic_form_submission_id=${ctx.syntheticFormSubmissionId}`)

    // -----------------------------------------------------------------
    // Scenario 1: production patient + intake_submitted trigger
    // -----------------------------------------------------------------
    console.log(`\n[scenario 1] production patient + patient.intake_submitted`)
    const r1 = await dispatchRuleTriggerEvent(
      {
        event_type: 'patient.intake_submitted',
        payload: {
          patient_id: ctx.productionPatientId,
          form_submission_id: ctx.productionFormSubmissionId,
          form_key: 'glp1-intake',
        },
      },
      supabase,
    )

    assert(r1.matched === true, 'Scenario 1: dispatcher matched intake_submitted_v1', `got matched=${r1.matched}`)
    if (!r1.matched) throw new Error('rule did not match — cannot continue scenario 1')

    ctx.outboundJobIds.push(...r1.enqueued_outbound_job_ids)
    if (r1.audit_event_id) ctx.auditEventIds.push(r1.audit_event_id)

    assert(r1.rule_id === 'rule.account_lifecycle.intake_submitted_v1', 'Scenario 1: rule_id matches anchor', `got ${r1.rule_id}`)
    assert(r1.rule_version === '1.0.0', 'Scenario 1: rule_version pinned', `got ${r1.rule_version}`)
    assert(r1.enqueued_outbound_job_ids.length === 2, 'Scenario 1: 2 outbound_jobs rows enqueued (email + SMS)', `got ${r1.enqueued_outbound_job_ids.length}`)

    const { data: jobsData, error: jobsError } = await supabase
      .from('outbound_jobs')
      .select(
        'id, kind, status, channel, rule_id, rule_version, template_key, template_version, ' +
          'intended_privacy_exposure_level, declared_privacy_exposure_level, message_intent, ' +
          'decision_outcome_reason, idempotency_key, payload, data_environment',
      )
      .in('id', r1.enqueued_outbound_job_ids)
    if (jobsError || !jobsData) {
      throw new Error(`Scenario 1: outbound_jobs lookup failed: ${jobsError?.message}`)
    }
    const rows = jobsData as unknown as Record<string, unknown>[]
    const emailJob = rows.find((j) => j.kind === 'send_email')
    const smsJob = rows.find((j) => j.kind === 'send_sms')

    assert(!!emailJob, 'Scenario 1: send_email row exists', 'missing')
    assert(!!smsJob, 'Scenario 1: send_sms row exists', 'missing')

    if (emailJob) {
      assert(emailJob.rule_id === 'rule.account_lifecycle.intake_submitted_v1', 'Scenario 1: email row.rule_id', `got ${emailJob.rule_id}`)
      assert(emailJob.template_key === 'tmpl.account_lifecycle.intake_submitted_v1', 'Scenario 1: email row.template_key', `got ${emailJob.template_key}`)
      assert(emailJob.intended_privacy_exposure_level === 1, 'Scenario 1: email intended_privacy_exposure_level=1', `got ${emailJob.intended_privacy_exposure_level}`)
      assert(emailJob.declared_privacy_exposure_level === 1, 'Scenario 1: email declared_privacy_exposure_level=1', `got ${emailJob.declared_privacy_exposure_level}`)
      assert(emailJob.message_intent === 'account', 'Scenario 1: email message_intent=account', `got ${emailJob.message_intent}`)
      assert(emailJob.decision_outcome_reason === 'rule_matched', 'Scenario 1: email decision_outcome_reason=rule_matched', `got ${emailJob.decision_outcome_reason}`)
      assert(
        emailJob.idempotency_key === `rule.intake_submitted:${ctx.productionFormSubmissionId}:email`,
        'Scenario 1: email idempotency_key shape (per-submission)',
        `got ${emailJob.idempotency_key}`,
      )
      assert(emailJob.status === 'queued', 'Scenario 1: email row stays queued (production)', `got ${emailJob.status}`)

      const renderedEmail = (emailJob.payload as { rendered_email?: { subject?: string; text?: string } } | null)?.rendered_email
      assert(!!renderedEmail, 'Scenario 1: payload.rendered_email present', 'missing')
      assert(renderedEmail?.subject === 'We received your intake', 'Scenario 1: email subject byte-identical to legacy', `got "${renderedEmail?.subject}"`)
      assert(
        typeof renderedEmail?.text === 'string' && renderedEmail.text.includes('Intake received'),
        'Scenario 1: email text contains "Intake received" heading',
        'missing',
      )
      assert(
        typeof renderedEmail?.text === 'string' && renderedEmail.text.includes('Thanks — we received your intake form.'),
        'Scenario 1: email text intro byte-identical to legacy',
        'missing',
      )
    }

    if (smsJob) {
      const renderedSms = (smsJob.payload as { rendered_sms?: { body?: string } } | null)?.rendered_sms
      assert(!!renderedSms, 'Scenario 1: payload.rendered_sms present', 'missing')
      assert(
        typeof renderedSms?.body === 'string' && renderedSms.body.startsWith('MAIN: Intake received.'),
        'Scenario 1: SMS body starts with brand-sourced "MAIN: Intake received." (byte-identical to legacy)',
        `got "${renderedSms?.body}"`,
      )
    }

    // Verify the rule.fired audit event.
    const { data: auditData } = await supabase
      .from('audit_events')
      .select('id, action, resource_type, resource_id, patient_id, metadata')
      .eq('action', 'rule.fired.account_lifecycle.intake_submitted_v1')
      .eq('resource_id', 'rule.account_lifecycle.intake_submitted_v1')
      .eq('patient_id', ctx.productionPatientId)
    assert(
      Array.isArray(auditData) && auditData.length === 1,
      'Scenario 1: exactly one rule.fired.account_lifecycle.intake_submitted_v1 audit event for production patient',
      `got ${auditData?.length} matching rows`,
    )
    if (auditData && auditData.length > 0) {
      ctx.auditEventIds.push((auditData[0] as { id: string }).id)
      const meta = (auditData[0] as { metadata: Record<string, unknown> }).metadata
      assert(meta.rule_version === '1.0.0', 'Scenario 1: audit metadata.rule_version', `got ${meta.rule_version}`)
      assert(meta.template_key === 'tmpl.account_lifecycle.intake_submitted_v1', 'Scenario 1: audit metadata.template_key', `got ${meta.template_key}`)
      assert(meta.intended_privacy_exposure_level === 1, 'Scenario 1: audit metadata.intended_privacy_exposure_level=1', `got ${meta.intended_privacy_exposure_level}`)
      assert(meta.message_intent === 'account', 'Scenario 1: audit metadata.message_intent=account', `got ${meta.message_intent}`)
      assert(meta.form_submission_id === ctx.productionFormSubmissionId, 'Scenario 1: audit metadata.form_submission_id', `got ${meta.form_submission_id}`)
      assert(meta.form_key === 'glp1-intake', 'Scenario 1: audit metadata.form_key', `got ${meta.form_key}`)
    }

    // -----------------------------------------------------------------
    // Scenario 2: synthetic patient → commit-2 gate suppresses both rows
    // -----------------------------------------------------------------
    console.log(`\n[scenario 2] synthetic patient → commit-2 gate suppresses both rows`)
    const r2 = await dispatchRuleTriggerEvent(
      {
        event_type: 'patient.intake_submitted',
        payload: {
          patient_id: ctx.syntheticPatientId,
          form_submission_id: ctx.syntheticFormSubmissionId,
          form_key: 'glp1-intake',
        },
      },
      supabase,
    )

    if (r2.matched) {
      ctx.outboundJobIds.push(...r2.enqueued_outbound_job_ids)
      assert(
        r2.enqueued_outbound_job_ids.length === 2,
        'Scenario 2: synthetic patient also produces 2 outbound_jobs rows (gate fires post-enqueue)',
        `got ${r2.enqueued_outbound_job_ids.length}`,
      )
    }

    const { data: synthJobs } = await supabase
      .from('outbound_jobs')
      .select('id, status, suppressed_at, suppression_reason, data_environment')
      .in('id', r2.enqueued_outbound_job_ids ?? [])
    if (Array.isArray(synthJobs) && synthJobs.length > 0) {
      for (const row of synthJobs) {
        const r = row as { status: string; suppressed_at: string | null; data_environment: string }
        assert(r.status === 'suppressed_data_environment', `Scenario 2: synthetic row status=suppressed_data_environment`, `got ${r.status}`)
        assert(r.suppressed_at !== null, `Scenario 2: synthetic row has suppressed_at`, 'null')
        assert(r.data_environment === 'synthetic', `Scenario 2: data_environment=synthetic`, `got ${r.data_environment}`)
      }
    } else {
      fail('Scenario 2: synthetic outbound_jobs rows lookup', 'no rows returned')
    }

    if (r2.matched && r2.enqueued_outbound_job_ids.length > 0) {
      const { data: suppressAudits } = await supabase
        .from('audit_events')
        .select('id')
        .eq('action', 'notification.dispatch_blocked_by_privacy_check')
        .in('resource_id', r2.enqueued_outbound_job_ids)
      assert(
        Array.isArray(suppressAudits) && suppressAudits.length === 2,
        'Scenario 2: 2 suppression audit events emitted (one per row)',
        `got ${suppressAudits?.length}`,
      )
      if (Array.isArray(suppressAudits)) {
        for (const a of suppressAudits) ctx.auditEventIds.push((a as { id: string }).id)
      }
    }

    // -----------------------------------------------------------------
    // Scenario 3: idempotent replay
    // -----------------------------------------------------------------
    console.log(`\n[scenario 3] replay same form_submission_id → idempotency_key collision`)
    const r3 = await dispatchRuleTriggerEvent(
      {
        event_type: 'patient.intake_submitted',
        payload: {
          patient_id: ctx.productionPatientId,
          form_submission_id: ctx.productionFormSubmissionId, // SAME as scenario 1
          form_key: 'glp1-intake',
        },
      },
      supabase,
    )

    assert(r3.matched === true, 'Scenario 3: rule still matches on replay', `got matched=${r3.matched}`)
    if (r3.matched) {
      assert(r3.enqueued_outbound_job_ids.length === 2, 'Scenario 3: 2 outbound_job_ids returned (same as scenario 1)', `got ${r3.enqueued_outbound_job_ids.length}`)
      const sameIds = r3.enqueued_outbound_job_ids.every((id) =>
        r1.matched ? r1.enqueued_outbound_job_ids.includes(id) : false,
      )
      assert(
        sameIds,
        'Scenario 3: idempotent_replay returns the same outbound_job_ids',
        'IDs differ — duplicate insert leaked through idempotency_key uniqueness',
      )
    }

    const { data: replayJobs } = await supabase
      .from('outbound_jobs')
      .select('id')
      .eq('idempotency_key', `rule.intake_submitted:${ctx.productionFormSubmissionId}:email`)
    assert(
      Array.isArray(replayJobs) && replayJobs.length === 1,
      'Scenario 3: exactly 1 email row exists for the form_submission_id (no duplicate)',
      `got ${replayJobs?.length} rows`,
    )

    const { data: postReplayAudits } = await supabase
      .from('audit_events')
      .select('id')
      .eq('action', 'rule.fired.account_lifecycle.intake_submitted_v1')
      .eq('patient_id', ctx.productionPatientId)
    if (Array.isArray(postReplayAudits)) {
      for (const a of postReplayAudits) {
        const id = (a as { id: string }).id
        if (!ctx.auditEventIds.includes(id)) ctx.auditEventIds.push(id)
      }
    }

    // -----------------------------------------------------------------
    // Scenario 4: legacy non-firing
    // -----------------------------------------------------------------
    console.log(`\n[scenario 4] legacy resolvePatientNotifications no longer fires intake_submitted`)
    const legacyResult = resolvePatientNotifications({
      patientId: ctx.productionPatientId,
      fromWorkflowStatus: null,
      toWorkflowStatus: 'intake_submitted',
      source: 'system',
    })
    assert(
      Array.isArray(legacyResult) && legacyResult.length === 0,
      'Scenario 4: legacy resolvePatientNotifications returns [] for intake_submitted (case + map entry deleted)',
      `got ${legacyResult.length} notifications: ${JSON.stringify(legacyResult)}`,
    )

    // -----------------------------------------------------------------
    // Scenario 5: wording rendering byte-identity
    // -----------------------------------------------------------------
    console.log(`\n[scenario 5] wording rendering parity (byte-level checks)`)
    const renderedEmail = renderIntakeSubmittedEmail({
      brand_short_label: 'MAIN',
      dashboard_url: 'https://example.test/dashboard/abc',
      patient_first_name: 'Test',
    })
    const renderedSms = renderIntakeSubmittedSms({
      brand_short_label: 'MAIN',
      dashboard_url: 'https://example.test/dashboard/abc',
      patient_first_name: 'Test',
    })

    assert(renderedEmail.subject === 'We received your intake', 'Scenario 5: email subject verbatim from legacy', `got "${renderedEmail.subject}"`)
    assert(renderedEmail.text.includes('Intake received'), 'Scenario 5: email text includes legacy heading', 'missing')
    assert(
      renderedEmail.text.includes('Thanks — we received your intake form.'),
      'Scenario 5: email text intro byte-identical to legacy',
      `got "${renderedEmail.text}"`,
    )
    assert(
      renderedEmail.text.includes('Our team will review it as part of your visit and keep you posted.'),
      'Scenario 5: email text detail verbatim from legacy',
      'missing',
    )
    assert(renderedEmail.text.includes('— MAIN'), 'Scenario 5: email text footer "— MAIN" sourced from typed brand_short_label slot', 'missing')

    assert(
      renderedSms.body === 'MAIN: Intake received. https://example.test/dashboard/abc',
      'Scenario 5: SMS body byte-identical to legacy "MAIN: Intake received. <url>"',
      `got "${renderedSms.body}"`,
    )

    assert(
      intakeSubmittedV1.rule_id === 'rule.account_lifecycle.intake_submitted_v1',
      'Scenario 5: intakeSubmittedV1 anchor exported',
      `got ${intakeSubmittedV1.rule_id}`,
    )
    assert(
      intakeSubmittedTemplateV1.template_key === 'tmpl.account_lifecycle.intake_submitted_v1',
      'Scenario 5: intakeSubmittedTemplateV1 anchor exported',
      `got ${intakeSubmittedTemplateV1.template_key}`,
    )

    // -----------------------------------------------------------------
    // Summary
    // -----------------------------------------------------------------
    console.log('\n----------------------------------------------------------------------')
    console.log(
      `Phase 4H-templates-discipline commit 1 intake_submitted parity: ${passes} passed, ${failures} failed.`,
    )
    if (failures > 0) {
      console.error('RED — parity broken. Investigate before shipping.')
      exitCode = 1
    } else {
      console.log('GREEN — intake_submitted cutover is parity-equivalent at the dispatch boundary.')
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
      email: `phase4h-templates-c1-synth-${ts}@example.test`,
      phone: '+15555550399',
      first_name: 'Synth',
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
      email: `phase4h-templates-c1-prod-${ts}@example.test`,
      phone: '+15555550398',
      first_name: 'Prod',
    })
    .select('id')
    .single()
  if (prod.error || !prod.data) {
    throw new Error(`production patient insert failed: ${prod.error?.message}`)
  }
  ctx.productionPatientId = (prod.data as { id: string }).id
}

async function cleanup(ctx: TestContext): Promise<void> {
  if (ctx.auditEventIds.length > 0) {
    await ctx.supabase.from('audit_events').delete().in('id', ctx.auditEventIds)
  }
  if (ctx.outboundJobIds.length > 0) {
    await ctx.supabase
      .from('audit_events')
      .delete()
      .eq('resource_type', 'outbound_jobs')
      .in('resource_id', ctx.outboundJobIds)
    await ctx.supabase
      .from('audit_events')
      .delete()
      .eq('resource_type', 'rule')
      .in('resource_id', ['rule.account_lifecycle.intake_submitted_v1'])
      .in('patient_id', [ctx.productionPatientId, ctx.syntheticPatientId])
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
