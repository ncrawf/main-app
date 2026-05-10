/**
 * Phase 4H-templates-discipline commit 7 — followup_needed parity smoke (live-DB).
 *
 * Verifies the cutover from legacy v0 notification path to the typed
 * Rule + Template at `repo/rules/clinical_decision/followup_needed_v1.ts`
 * + `repo/templates/clinical_decision/followup_needed_v1.ts`.
 *
 * Eighth typed migration overall; fifth in the clinical_decision
 * domain. FIRST migration with asymmetric producer-side status gates:
 *   - treatment_items: paused | stopped
 *   - care_programs: paused | completed | cancelled
 *
 * Five scenarios: production dispatch (treatment_item, status='paused')
 * + synthetic suppression (care_program, status='cancelled') +
 * idempotent replay + legacy non-firing + wording byte-identity.
 *
 * Exercising the asymmetric gates: scenario 1 uses treatment_item +
 * status='paused' (valid for both producer surfaces), scenario 2
 * uses care_program + status='cancelled' (valid only for the
 * care_program producer). Both are accepted by the Rule layer.
 *
 * Run with: `npx tsx scripts/test-followup-needed-parity.ts`.
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { dispatchRuleTriggerEvent } from '../lib/rules/runtime/dispatcher'
import {
  renderFollowupNeededEmail,
  renderFollowupNeededSms,
} from '../lib/templates/render/followup-needed'
import { resolvePatientNotifications } from '../lib/workflows/notificationRules'
import { followupNeededV1 } from '../repo/rules'
import { followupNeededTemplateV1 } from '../repo/templates'

interface TestContext {
  supabase: SupabaseClient
  productionPatientId: string
  syntheticPatientId: string
  outboundJobIds: string[]
  auditEventIds: string[]
  productionTransitionAuditEventId: string
  syntheticTransitionAuditEventId: string
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
    productionTransitionAuditEventId: uuid(),
    syntheticTransitionAuditEventId: uuid(),
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

    // Scenario 1: production patient + treatment_item + paused
    console.log(`\n[scenario 1] production patient + treatment_item + paused`)
    const r1 = await dispatchRuleTriggerEvent(
      {
        event_type: 'patient.case_followup_needed',
        payload: {
          patient_id: ctx.productionPatientId,
          case_kind: 'treatment_item',
          case_id: ctx.productionCaseId,
          next_status: 'paused',
          transition_audit_event_id: ctx.productionTransitionAuditEventId,
        },
      },
      supabase,
    )

    assert(r1.matched === true, 'Scenario 1: dispatcher matched followup_needed_v1', `got matched=${r1.matched}`)
    if (!r1.matched) throw new Error('rule did not match')

    ctx.outboundJobIds.push(...r1.enqueued_outbound_job_ids)
    if (r1.audit_event_id) ctx.auditEventIds.push(r1.audit_event_id)

    assert(r1.rule_id === 'rule.clinical_decision.followup_needed_v1', 'Scenario 1: rule_id', `got ${r1.rule_id}`)
    assert(r1.enqueued_outbound_job_ids.length === 2, 'Scenario 1: 2 outbound_jobs', `got ${r1.enqueued_outbound_job_ids.length}`)

    const { data: jobsData } = await supabase
      .from('outbound_jobs')
      .select('id, kind, status, rule_id, template_key, intended_privacy_exposure_level, message_intent, idempotency_key, payload')
      .in('id', r1.enqueued_outbound_job_ids)
    const rows = jobsData as unknown as Record<string, unknown>[]
    const emailJob = rows.find((j) => j.kind === 'send_email')
    const smsJob = rows.find((j) => j.kind === 'send_sms')

    if (emailJob) {
      assert(emailJob.rule_id === 'rule.clinical_decision.followup_needed_v1', 'Scenario 1: email rule_id', `got ${emailJob.rule_id}`)
      assert(emailJob.template_key === 'tmpl.clinical_decision.followup_needed_v1', 'Scenario 1: email template_key', `got ${emailJob.template_key}`)
      assert(emailJob.intended_privacy_exposure_level === 1, 'Scenario 1: email tier=1', `got ${emailJob.intended_privacy_exposure_level}`)
      assert(emailJob.message_intent === 'operational', 'Scenario 1: email intent=operational', `got ${emailJob.message_intent}`)
      assert(
        emailJob.idempotency_key === `rule.followup_needed:${ctx.productionTransitionAuditEventId}:email`,
        'Scenario 1: email idempotency_key shape',
        `got ${emailJob.idempotency_key}`,
      )
      assert(emailJob.status === 'queued', 'Scenario 1: email row stays queued', `got ${emailJob.status}`)

      const renderedEmail = (emailJob.payload as { rendered_email?: { subject?: string; text?: string } } | null)?.rendered_email
      assert(renderedEmail?.subject === 'We need a bit more information', 'Scenario 1: email subject byte-identical', `got "${renderedEmail?.subject}"`)
      assert(
        typeof renderedEmail?.text === 'string' && renderedEmail.text.includes('Additional info needed'),
        'Scenario 1: email text contains "Additional info needed" heading',
        'missing',
      )
      assert(
        typeof renderedEmail?.text === 'string' && renderedEmail.text.includes('We need a little more information before we can move forward.'),
        'Scenario 1: email text intro byte-identical',
        'missing',
      )
    }

    if (smsJob) {
      const renderedSms = (smsJob.payload as { rendered_sms?: { body?: string } } | null)?.rendered_sms
      assert(
        typeof renderedSms?.body === 'string' && renderedSms.body.startsWith('MAIN: More info needed.'),
        'Scenario 1: SMS body starts with "MAIN: More info needed."',
        `got "${renderedSms?.body}"`,
      )
    }

    const { data: auditData } = await supabase
      .from('audit_events')
      .select('id, action, metadata')
      .eq('action', 'rule.fired.clinical_decision.followup_needed_v1')
      .eq('resource_id', 'rule.clinical_decision.followup_needed_v1')
      .eq('patient_id', ctx.productionPatientId)
    assert(
      Array.isArray(auditData) && auditData.length === 1,
      'Scenario 1: exactly one rule.fired audit event',
      `got ${auditData?.length}`,
    )
    if (auditData && auditData.length > 0) {
      ctx.auditEventIds.push((auditData[0] as { id: string }).id)
      const meta = (auditData[0] as { metadata: Record<string, unknown> }).metadata
      assert(meta.case_kind === 'treatment_item', 'Scenario 1: audit metadata.case_kind', `got ${meta.case_kind}`)
      assert(meta.next_status === 'paused', 'Scenario 1: audit metadata.next_status=paused', `got ${meta.next_status}`)
      assert(meta.transition_audit_event_id === ctx.productionTransitionAuditEventId, 'Scenario 1: audit metadata.transition_audit_event_id', `got ${meta.transition_audit_event_id}`)
    }

    // Scenario 2: synthetic patient + care_program + cancelled (asymmetric — only valid for care_program producer)
    console.log(`\n[scenario 2] synthetic patient + care_program + cancelled (care_program-only status)`)
    const r2 = await dispatchRuleTriggerEvent(
      {
        event_type: 'patient.case_followup_needed',
        payload: {
          patient_id: ctx.syntheticPatientId,
          case_kind: 'care_program',
          case_id: ctx.syntheticCaseId,
          next_status: 'cancelled',
          transition_audit_event_id: ctx.syntheticTransitionAuditEventId,
        },
      },
      supabase,
    )

    if (r2.matched) {
      ctx.outboundJobIds.push(...r2.enqueued_outbound_job_ids)
      assert(r2.enqueued_outbound_job_ids.length === 2, 'Scenario 2: 2 outbound_jobs', `got ${r2.enqueued_outbound_job_ids.length}`)
    }

    const { data: synthJobs } = await supabase
      .from('outbound_jobs')
      .select('id, status, data_environment')
      .in('id', r2.enqueued_outbound_job_ids ?? [])
    if (Array.isArray(synthJobs) && synthJobs.length > 0) {
      for (const row of synthJobs) {
        const r = row as { status: string; data_environment: string }
        assert(r.status === 'suppressed_data_environment', 'Scenario 2: synthetic row suppressed', `got ${r.status}`)
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

    // Scenario 3: idempotent replay
    console.log(`\n[scenario 3] replay same transition_audit_event_id`)
    const r3 = await dispatchRuleTriggerEvent(
      {
        event_type: 'patient.case_followup_needed',
        payload: {
          patient_id: ctx.productionPatientId,
          case_kind: 'treatment_item',
          case_id: ctx.productionCaseId,
          next_status: 'paused',
          transition_audit_event_id: ctx.productionTransitionAuditEventId,
        },
      },
      supabase,
    )

    assert(r3.matched === true, 'Scenario 3: rule matches on replay', `got matched=${r3.matched}`)
    if (r3.matched) {
      const sameIds = r3.enqueued_outbound_job_ids.every((id) =>
        r1.matched ? r1.enqueued_outbound_job_ids.includes(id) : false,
      )
      assert(sameIds, 'Scenario 3: idempotent replay returns same outbound_job_ids', 'IDs differ')
    }

    const { data: replayJobs } = await supabase
      .from('outbound_jobs')
      .select('id')
      .eq('idempotency_key', `rule.followup_needed:${ctx.productionTransitionAuditEventId}:email`)
    assert(
      Array.isArray(replayJobs) && replayJobs.length === 1,
      'Scenario 3: exactly 1 email row exists',
      `got ${replayJobs?.length} rows`,
    )

    const { data: postReplayAudits } = await supabase
      .from('audit_events')
      .select('id')
      .eq('action', 'rule.fired.clinical_decision.followup_needed_v1')
      .eq('patient_id', ctx.productionPatientId)
    if (Array.isArray(postReplayAudits)) {
      for (const a of postReplayAudits) {
        const id = (a as { id: string }).id
        if (!ctx.auditEventIds.includes(id)) ctx.auditEventIds.push(id)
      }
    }

    // Scenario 4: legacy non-firing (verify all 4 of the legacy mappings are gone)
    console.log(`\n[scenario 4] legacy resolvePatientNotifications no longer fires followup_needed for ANY of paused/completed/cancelled/stopped`)
    for (const status of ['paused', 'completed', 'cancelled', 'stopped']) {
      const legacyResult = resolvePatientNotifications({
        patientId: ctx.productionPatientId,
        fromWorkflowStatus: 'active',
        toWorkflowStatus: status,
        source: 'staff',
      })
      assert(
        Array.isArray(legacyResult) && legacyResult.length === 0,
        `Scenario 4: legacy resolvePatientNotifications returns [] for '${status}'`,
        `got ${legacyResult.length} notifications`,
      )
    }

    // Scenario 5: wording byte-identity
    console.log(`\n[scenario 5] wording rendering parity`)
    const renderedEmail = renderFollowupNeededEmail({
      brand_short_label: 'MAIN',
      dashboard_url: 'https://example.test/dashboard/abc',
      patient_first_name: 'Test',
    })
    const renderedSms = renderFollowupNeededSms({
      brand_short_label: 'MAIN',
      dashboard_url: 'https://example.test/dashboard/abc',
      patient_first_name: 'Test',
    })

    assert(renderedEmail.subject === 'We need a bit more information', 'Scenario 5: email subject verbatim', `got "${renderedEmail.subject}"`)
    assert(renderedEmail.text.includes('Additional info needed'), 'Scenario 5: email heading', 'missing')
    assert(
      renderedEmail.text.includes('We need a little more information before we can move forward.'),
      'Scenario 5: email intro byte-identical',
      `got "${renderedEmail.text}"`,
    )
    assert(
      renderedEmail.text.includes('Please complete the requested steps in your dashboard.'),
      'Scenario 5: email detail verbatim',
      'missing',
    )
    assert(renderedEmail.text.includes('— MAIN'), 'Scenario 5: email footer "— MAIN"', 'missing')

    assert(
      renderedSms.body === 'MAIN: More info needed. https://example.test/dashboard/abc',
      'Scenario 5: SMS body byte-identical to legacy "MAIN: More info needed. <url>"',
      `got "${renderedSms.body}"`,
    )

    assert(
      followupNeededV1.rule_id === 'rule.clinical_decision.followup_needed_v1',
      'Scenario 5: followupNeededV1 anchor exported',
      `got ${followupNeededV1.rule_id}`,
    )
    assert(
      followupNeededTemplateV1.template_key === 'tmpl.clinical_decision.followup_needed_v1',
      'Scenario 5: followupNeededTemplateV1 anchor exported',
      `got ${followupNeededTemplateV1.template_key}`,
    )
    assert(
      followupNeededTemplateV1.transactional_critical === false,
      'Scenario 5: followupNeededTemplateV1.transactional_critical=false',
      `got ${followupNeededTemplateV1.transactional_critical}`,
    )

    // Summary
    console.log('\n----------------------------------------------------------------------')
    console.log(`Phase 4H-templates-discipline c7 followup_needed parity: ${passes} passed, ${failures} failed.`)
    if (failures > 0) {
      console.error('RED — parity broken.')
      exitCode = 1
    } else {
      console.log('GREEN — followup_needed cutover is parity-equivalent.')
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
      email: `phase4h-c7-synth-${ts}@example.test`,
      phone: '+15555550799',
      first_name: 'SynthFN',
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
      email: `phase4h-c7-prod-${ts}@example.test`,
      phone: '+15555550798',
      first_name: 'ProdFN',
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
      .in('resource_id', ['rule.clinical_decision.followup_needed_v1'])
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
