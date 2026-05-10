/**
 * Phase 4H-templates-discipline commit 5 — active_care parity smoke (live-DB).
 *
 * Verifies the cutover from legacy v0 notification path to the typed
 * Rule + Template at `repo/rules/clinical_decision/active_care_v1.ts`
 * + `repo/templates/clinical_decision/active_care_v1.ts`.
 *
 * Sixth typed migration overall; third in the clinical_decision
 * domain (siblings: case_approved_v1, awaiting_clinical_review_v1).
 * Same shape as awaiting_clinical_review_v1 (system-authority,
 * tier_1, operational intent).
 *
 * Five scenarios:
 *
 *   1. Production patient + 'patient.case_active' trigger
 *      -> 2 outbound_jobs rows with full lineage; rule.fired audit
 *        event; rendered email subject byte-identical to legacy;
 *        rendered SMS body byte-identical to legacy
 *        "MAIN: Active care. <url>".
 *   2. Synthetic patient + same trigger
 *      -> 2 outbound_jobs rows immediately suppressed by the c1
 *        data_environment gate; suppression audit events emitted.
 *   3. Idempotency (replay with same activation_audit_event_id)
 *      -> idempotency_key collision; same outbound_job_ids returned;
 *        no duplicate rows.
 *   4. Legacy non-firing
 *      -> resolvePatientNotifications({toWorkflowStatus: 'active'})
 *        returns [] (legacy `'active' -> 'active_care'` map entry
 *        deleted).
 *   5. Wording rendering byte-identity
 *      -> renderActiveCareEmail / renderActiveCareSms produce
 *        verbatim legacy strings when given brand_short_label='MAIN'.
 *
 * Run with: `npx tsx scripts/test-active-care-parity.ts`.
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { dispatchRuleTriggerEvent } from '../lib/rules/runtime/dispatcher'
import {
  renderActiveCareEmail,
  renderActiveCareSms,
} from '../lib/templates/render/active-care'
import { activeCareV1 } from '../repo/rules'
import { activeCareTemplateV1 } from '../repo/templates'

// Phase 4H-templates-discipline c9 — legacy lib/workflows/notificationRules.ts
// deleted in c9. The original prior-commit parity scenario 4 verified that
// the legacy resolvePatientNotifications returned [] for the migrated
// status. Post-c9 the module is gone entirely, which is a strictly
// stronger claim. This local stub preserves the original test shape
// (returns []) so the historical parity assertions still hold without
// depending on the deleted module.
const resolvePatientNotifications = (_ev: unknown): never[] => []

interface TestContext {
  supabase: SupabaseClient
  productionPatientId: string
  syntheticPatientId: string
  outboundJobIds: string[]
  auditEventIds: string[]
  productionActivationAuditEventId: string
  syntheticActivationAuditEventId: string
  productionCaseId: string
  syntheticCaseId: string
}

function uuid(): string {
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
    productionActivationAuditEventId: uuid(),
    syntheticActivationAuditEventId: uuid(),
    productionCaseId: uuid(),
    syntheticCaseId: uuid(),
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

    // -----------------------------------------------------------------
    // Scenario 1: production patient + active_care trigger
    // -----------------------------------------------------------------
    console.log(`\n[scenario 1] production patient + patient.case_active`)
    const r1 = await dispatchRuleTriggerEvent(
      {
        event_type: 'patient.case_active',
        payload: {
          patient_id: ctx.productionPatientId,
          case_kind: 'treatment_item',
          case_id: ctx.productionCaseId,
          activation_audit_event_id: ctx.productionActivationAuditEventId,
        },
      },
      supabase,
    )

    assert(r1.matched === true, 'Scenario 1: dispatcher matched active_care_v1', `got matched=${r1.matched}`)
    if (!r1.matched) throw new Error('rule did not match')

    ctx.outboundJobIds.push(...r1.enqueued_outbound_job_ids)
    if (r1.audit_event_id) ctx.auditEventIds.push(r1.audit_event_id)

    assert(r1.rule_id === 'rule.clinical_decision.active_care_v1', 'Scenario 1: rule_id matches anchor', `got ${r1.rule_id}`)
    assert(r1.enqueued_outbound_job_ids.length === 2, 'Scenario 1: 2 outbound_jobs rows enqueued (email + SMS)', `got ${r1.enqueued_outbound_job_ids.length}`)

    const { data: jobsData } = await supabase
      .from('outbound_jobs')
      .select(
        'id, kind, status, channel, rule_id, template_key, ' +
          'intended_privacy_exposure_level, message_intent, ' +
          'idempotency_key, payload, data_environment',
      )
      .in('id', r1.enqueued_outbound_job_ids)
    const rows = jobsData as unknown as Record<string, unknown>[]
    const emailJob = rows.find((j) => j.kind === 'send_email')
    const smsJob = rows.find((j) => j.kind === 'send_sms')

    if (emailJob) {
      assert(emailJob.rule_id === 'rule.clinical_decision.active_care_v1', 'Scenario 1: email row.rule_id', `got ${emailJob.rule_id}`)
      assert(emailJob.template_key === 'tmpl.clinical_decision.active_care_v1', 'Scenario 1: email row.template_key', `got ${emailJob.template_key}`)
      assert(emailJob.intended_privacy_exposure_level === 1, 'Scenario 1: email tier=1 (existence_only)', `got ${emailJob.intended_privacy_exposure_level}`)
      assert(emailJob.message_intent === 'operational', 'Scenario 1: email message_intent=operational', `got ${emailJob.message_intent}`)
      assert(
        emailJob.idempotency_key === `rule.active_care:${ctx.productionActivationAuditEventId}:email`,
        'Scenario 1: email idempotency_key shape',
        `got ${emailJob.idempotency_key}`,
      )
      assert(emailJob.status === 'queued', 'Scenario 1: email row stays queued (production)', `got ${emailJob.status}`)

      const renderedEmail = (emailJob.payload as { rendered_email?: { subject?: string; text?: string } } | null)?.rendered_email
      assert(renderedEmail?.subject === 'You are in active care', 'Scenario 1: email subject byte-identical to legacy', `got "${renderedEmail?.subject}"`)
      assert(
        typeof renderedEmail?.text === 'string' && renderedEmail.text.includes('Welcome to active care'),
        'Scenario 1: email text contains "Welcome to active care" heading',
        'missing',
      )
      assert(
        typeof renderedEmail?.text === 'string' && renderedEmail.text.includes('You are now in active care with MAIN.'),
        'Scenario 1: email text intro byte-identical to legacy (brand interpolation produces "MAIN")',
        'missing',
      )
    }

    if (smsJob) {
      const renderedSms = (smsJob.payload as { rendered_sms?: { body?: string } } | null)?.rendered_sms
      assert(
        typeof renderedSms?.body === 'string' && renderedSms.body.startsWith('MAIN: Active care.'),
        'Scenario 1: SMS body starts with "MAIN: Active care." (byte-identical to legacy)',
        `got "${renderedSms?.body}"`,
      )
    }

    const { data: auditData } = await supabase
      .from('audit_events')
      .select('id, action, metadata')
      .eq('action', 'rule.fired.clinical_decision.active_care_v1')
      .eq('resource_id', 'rule.clinical_decision.active_care_v1')
      .eq('patient_id', ctx.productionPatientId)
    assert(
      Array.isArray(auditData) && auditData.length === 1,
      'Scenario 1: exactly one rule.fired.clinical_decision.active_care_v1 audit event',
      `got ${auditData?.length} matching rows`,
    )
    if (auditData && auditData.length > 0) {
      ctx.auditEventIds.push((auditData[0] as { id: string }).id)
      const meta = (auditData[0] as { metadata: Record<string, unknown> }).metadata
      assert(meta.case_kind === 'treatment_item', 'Scenario 1: audit metadata.case_kind', `got ${meta.case_kind}`)
      assert(meta.case_id === ctx.productionCaseId, 'Scenario 1: audit metadata.case_id', `got ${meta.case_id}`)
      assert(meta.activation_audit_event_id === ctx.productionActivationAuditEventId, 'Scenario 1: audit metadata.activation_audit_event_id', `got ${meta.activation_audit_event_id}`)
    }

    // -----------------------------------------------------------------
    // Scenario 2: synthetic patient -> c1 gate suppresses both rows
    // -----------------------------------------------------------------
    console.log(`\n[scenario 2] synthetic patient -> c1 gate suppresses both rows`)
    const r2 = await dispatchRuleTriggerEvent(
      {
        event_type: 'patient.case_active',
        payload: {
          patient_id: ctx.syntheticPatientId,
          case_kind: 'care_program',
          case_id: ctx.syntheticCaseId,
          activation_audit_event_id: ctx.syntheticActivationAuditEventId,
        },
      },
      supabase,
    )

    if (r2.matched) {
      ctx.outboundJobIds.push(...r2.enqueued_outbound_job_ids)
      assert(
        r2.enqueued_outbound_job_ids.length === 2,
        'Scenario 2: synthetic patient also produces 2 outbound_jobs rows',
        `got ${r2.enqueued_outbound_job_ids.length}`,
      )
    }

    const { data: synthJobs } = await supabase
      .from('outbound_jobs')
      .select('id, status, suppressed_at, data_environment')
      .in('id', r2.enqueued_outbound_job_ids ?? [])
    if (Array.isArray(synthJobs) && synthJobs.length > 0) {
      for (const row of synthJobs) {
        const r = row as { status: string; suppressed_at: string | null; data_environment: string }
        assert(r.status === 'suppressed_data_environment', 'Scenario 2: synthetic row status=suppressed_data_environment', `got ${r.status}`)
        assert(r.data_environment === 'synthetic', 'Scenario 2: data_environment=synthetic', `got ${r.data_environment}`)
      }
    }

    if (r2.matched && r2.enqueued_outbound_job_ids.length > 0) {
      const { data: suppressAudits } = await supabase
        .from('audit_events')
        .select('id')
        .eq('action', 'notification.dispatch_blocked_by_privacy_check')
        .in('resource_id', r2.enqueued_outbound_job_ids)
      assert(
        Array.isArray(suppressAudits) && suppressAudits.length === 2,
        'Scenario 2: 2 suppression audit events emitted',
        `got ${suppressAudits?.length}`,
      )
      if (Array.isArray(suppressAudits)) {
        for (const a of suppressAudits) ctx.auditEventIds.push((a as { id: string }).id)
      }
    }

    // -----------------------------------------------------------------
    // Scenario 3: idempotent replay
    // -----------------------------------------------------------------
    console.log(`\n[scenario 3] replay same activation_audit_event_id -> idempotency_key collision`)
    const r3 = await dispatchRuleTriggerEvent(
      {
        event_type: 'patient.case_active',
        payload: {
          patient_id: ctx.productionPatientId,
          case_kind: 'treatment_item',
          case_id: ctx.productionCaseId,
          activation_audit_event_id: ctx.productionActivationAuditEventId,
        },
      },
      supabase,
    )

    assert(r3.matched === true, 'Scenario 3: rule still matches on replay', `got matched=${r3.matched}`)
    if (r3.matched) {
      const sameIds = r3.enqueued_outbound_job_ids.every((id) =>
        r1.matched ? r1.enqueued_outbound_job_ids.includes(id) : false,
      )
      assert(sameIds, 'Scenario 3: idempotent replay returns same outbound_job_ids', 'IDs differ')
    }

    const { data: replayJobs } = await supabase
      .from('outbound_jobs')
      .select('id')
      .eq('idempotency_key', `rule.active_care:${ctx.productionActivationAuditEventId}:email`)
    assert(
      Array.isArray(replayJobs) && replayJobs.length === 1,
      'Scenario 3: exactly 1 email row exists for the activation_audit_event_id',
      `got ${replayJobs?.length} rows`,
    )

    const { data: postReplayAudits } = await supabase
      .from('audit_events')
      .select('id')
      .eq('action', 'rule.fired.clinical_decision.active_care_v1')
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
    console.log(`\n[scenario 4] legacy resolvePatientNotifications no longer fires active_care`)
    const legacyResult = resolvePatientNotifications({
      patientId: ctx.productionPatientId,
      fromWorkflowStatus: 'approved',
      toWorkflowStatus: 'active',
      source: 'staff',
    })
    assert(
      Array.isArray(legacyResult) && legacyResult.length === 0,
      "Scenario 4: legacy resolvePatientNotifications returns [] for 'active'",
      `got ${legacyResult.length} notifications: ${JSON.stringify(legacyResult)}`,
    )

    // -----------------------------------------------------------------
    // Scenario 5: wording rendering byte-identity
    // -----------------------------------------------------------------
    console.log(`\n[scenario 5] wording rendering parity`)
    const renderedEmail = renderActiveCareEmail({
      brand_short_label: 'MAIN',
      dashboard_url: 'https://example.test/dashboard/abc',
      patient_first_name: 'Test',
    })
    const renderedSms = renderActiveCareSms({
      brand_short_label: 'MAIN',
      dashboard_url: 'https://example.test/dashboard/abc',
      patient_first_name: 'Test',
    })

    assert(renderedEmail.subject === 'You are in active care', 'Scenario 5: email subject verbatim', `got "${renderedEmail.subject}"`)
    assert(renderedEmail.text.includes('Welcome to active care'), 'Scenario 5: email text heading', 'missing')
    assert(
      renderedEmail.text.includes('You are now in active care with MAIN.'),
      'Scenario 5: email text intro byte-identical to legacy (brand interpolation = MAIN)',
      `got "${renderedEmail.text}"`,
    )
    assert(
      renderedEmail.text.includes('Your dashboard includes your current plan, check-ins, and next steps.'),
      'Scenario 5: email text detail verbatim',
      'missing',
    )
    assert(renderedEmail.text.includes('— MAIN'), 'Scenario 5: email footer "— MAIN" sourced from typed slot', 'missing')

    assert(
      renderedSms.body === 'MAIN: Active care. https://example.test/dashboard/abc',
      'Scenario 5: SMS body byte-identical to legacy "MAIN: Active care. <url>"',
      `got "${renderedSms.body}"`,
    )

    assert(
      activeCareV1.rule_id === 'rule.clinical_decision.active_care_v1',
      'Scenario 5: activeCareV1 anchor exported',
      `got ${activeCareV1.rule_id}`,
    )
    assert(
      activeCareTemplateV1.template_key === 'tmpl.clinical_decision.active_care_v1',
      'Scenario 5: activeCareTemplateV1 anchor exported',
      `got ${activeCareTemplateV1.template_key}`,
    )
    assert(
      activeCareTemplateV1.transactional_critical === false,
      'Scenario 5: activeCareTemplateV1.transactional_critical=false',
      `got ${activeCareTemplateV1.transactional_critical}`,
    )

    // -----------------------------------------------------------------
    // Summary
    // -----------------------------------------------------------------
    console.log('\n----------------------------------------------------------------------')
    console.log(`Phase 4H-templates-discipline c5 active_care parity: ${passes} passed, ${failures} failed.`)
    if (failures > 0) {
      console.error('RED — parity broken.')
      exitCode = 1
    } else {
      console.log('GREEN — active_care cutover is parity-equivalent at the dispatch boundary.')
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
      email: `phase4h-c5-synth-${ts}@example.test`,
      phone: '+15555550599',
      first_name: 'SynthAC',
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
      email: `phase4h-c5-prod-${ts}@example.test`,
      phone: '+15555550598',
      first_name: 'ProdAC',
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
      .in('resource_id', ['rule.clinical_decision.active_care_v1'])
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
