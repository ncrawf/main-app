/**
 * Phase 4H-templates-discipline commit 3 — awaiting_clinical_review parity smoke (live-DB).
 *
 * Verifies the cutover from legacy v0 notification path to the typed
 * Rule + Template at `repo/rules/clinical_decision/awaiting_clinical_review_v1.ts`
 * + `repo/templates/clinical_decision/awaiting_clinical_review_v1.ts`.
 *
 * FOURTH parity migration; SECOND clinical_decision domain Rule (sibling
 * to case_approved_v1). Distinguishing characteristics from prior 3:
 *   - tier_1 existence_only (vs case_approved tier_2)
 *   - authority_floor='system' (vs case_approved 'provider')
 *   - message_intent='operational' (vs case_approved 'clinical')
 *   - recall_severity='operational' (vs case_approved 'clinical_significant')
 *   - 2-STATUS OR producer gate: legacy PATIENT_NOTIFY_BY_STATUS routed
 *     BOTH `under_review:` AND `pending_approval:` to the same template;
 *     typed Rule preserves this via `nextStatus === 'under_review' ||
 *     nextStatus === 'pending_approval'` gate at the producer
 *
 * Six scenarios (5 standard + 1 covering the 2-status OR):
 *
 *   1. Production patient + transition to 'under_review'
 *      → 2 outbound_jobs rows with full rule lineage + tier_1 +
 *        operational message_intent; 1 rule.fired audit event;
 *        rendered email subject byte-identical to legacy; rendered SMS
 *        body byte-identical to "MAIN: In clinical review. <url>".
 *   2. Production patient + transition to 'pending_approval' (NEW vs
 *      case_approved) → 2 outbound rows enqueued from the SAME Rule
 *      firing on the OTHER status; verifies the 2-status OR gate works
 *      for both branches.
 *   3. Synthetic patient + transition to either status
 *      → rows immediately suppressed by env gate; canonical
 *        notification.dispatch_blocked_by_privacy_check audits emitted.
 *   4. Idempotency (replay with same transition_audit_event_id)
 *      → idempotency_key collision; same outbound_job_ids returned;
 *        no duplicate rows. Verifies per-transition dedupe handle.
 *   5. Legacy non-firing
 *      → resolvePatientNotifications({toWorkflowStatus: 'under_review'})
 *        AND resolvePatientNotifications({toWorkflowStatus: 'pending_approval'})
 *        BOTH return [] (legacy map entries deleted).
 *   6. Wording rendering byte-identity
 *      → renderAwaitingClinicalReviewEmail / renderAwaitingClinicalReviewSms
 *        produce verbatim legacy strings.
 *
 * Run with: `npx tsx scripts/test-awaiting-clinical-review-parity.ts`.
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { dispatchRuleTriggerEvent } from '../lib/rules/runtime/dispatcher'
import {
  renderAwaitingClinicalReviewEmail,
  renderAwaitingClinicalReviewSms,
} from '../lib/templates/render/awaiting-clinical-review'
import { resolvePatientNotifications } from '../lib/workflows/notificationRules'
import { awaitingClinicalReviewV1 } from '../repo/rules'
import { awaitingClinicalReviewTemplateV1 } from '../repo/templates'

interface TestContext {
  supabase: SupabaseClient
  productionPatientId: string
  syntheticPatientId: string
  outboundJobIds: string[]
  auditEventIds: string[]
  productionUnderReviewAuditEventId: string
  productionPendingApprovalAuditEventId: string
  syntheticAuditEventId: string
  productionCaseId: string
  syntheticCaseId: string
}

function uuid(): string {
  // Generate a v4-shaped UUID for fixture purposes; the dispatcher
  // does not look transition_audit_event_id up against audit_events,
  // so a synthesized value is sufficient for idempotency testing
  // (mirrors the case_approved parity test approach).
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
    productionUnderReviewAuditEventId: uuid(),
    productionPendingApprovalAuditEventId: uuid(),
    syntheticAuditEventId: uuid(),
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
    // Scenario 1: production patient + 'under_review' branch
    // -----------------------------------------------------------------
    console.log(`\n[scenario 1] production patient + 'under_review' branch`)
    const r1 = await dispatchRuleTriggerEvent(
      {
        event_type: 'patient.case_under_review',
        payload: {
          patient_id: ctx.productionPatientId,
          case_kind: 'treatment_item',
          case_id: ctx.productionCaseId,
          next_status: 'under_review',
          transition_audit_event_id: ctx.productionUnderReviewAuditEventId,
        },
      },
      supabase,
    )

    assert(r1.matched === true, 'Scenario 1: dispatcher matched awaiting_clinical_review_v1', `got matched=${r1.matched}`)
    if (!r1.matched) throw new Error('rule did not match — cannot continue scenario 1')

    ctx.outboundJobIds.push(...r1.enqueued_outbound_job_ids)
    if (r1.audit_event_id) ctx.auditEventIds.push(r1.audit_event_id)

    assert(r1.rule_id === 'rule.clinical_decision.awaiting_clinical_review_v1', 'Scenario 1: rule_id matches anchor', `got ${r1.rule_id}`)
    assert(r1.enqueued_outbound_job_ids.length === 2, 'Scenario 1: 2 outbound_jobs rows enqueued', `got ${r1.enqueued_outbound_job_ids.length}`)

    const { data: jobsData, error: jobsError } = await supabase
      .from('outbound_jobs')
      .select(
        'id, kind, status, channel, rule_id, rule_version, template_key, template_version, ' +
          'intended_privacy_exposure_level, declared_privacy_exposure_level, message_intent, ' +
          'decision_outcome_reason, idempotency_key, payload, data_environment, ' +
          'pathway_code, pathway_sensitivity',
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
      assert(emailJob.template_key === 'tmpl.clinical_decision.awaiting_clinical_review_v1', 'Scenario 1: email row.template_key', `got ${emailJob.template_key}`)
      assert(emailJob.intended_privacy_exposure_level === 1, 'Scenario 1: email intended_privacy_exposure_level=1 (existence_only)', `got ${emailJob.intended_privacy_exposure_level}`)
      assert(emailJob.message_intent === 'operational', 'Scenario 1: email message_intent=operational', `got ${emailJob.message_intent}`)
      assert(
        emailJob.idempotency_key === `rule.awaiting_clinical_review:${ctx.productionUnderReviewAuditEventId}:email`,
        'Scenario 1: email idempotency_key shape (per-transition keyed on transition_audit_event_id)',
        `got ${emailJob.idempotency_key}`,
      )
      assert(emailJob.status === 'queued', 'Scenario 1: email row stays queued (production)', `got ${emailJob.status}`)
      // Note: row-level metadata is not selected; the audit metadata
      // assertions below verify next_status was carried through the
      // typed lineage. Per-row metadata persistence shape is handled
      // by enqueue_outbound_job SECURITY DEFINER and not part of this
      // commit's parity contract.

      const renderedEmail = (emailJob.payload as { rendered_email?: { subject?: string; text?: string } } | null)?.rendered_email
      assert(renderedEmail?.subject === 'Your visit is in clinical review', 'Scenario 1: email subject byte-identical to legacy', `got "${renderedEmail?.subject}"`)
      assert(
        typeof renderedEmail?.text === 'string' && renderedEmail.text.includes('In clinical review'),
        'Scenario 1: email text contains "In clinical review" heading',
        'missing',
      )
      assert(
        typeof renderedEmail?.text === 'string' && renderedEmail.text.includes('Your visit is now in clinical review.'),
        'Scenario 1: email text intro byte-identical to legacy',
        'missing',
      )
    }

    if (smsJob) {
      const renderedSms = (smsJob.payload as { rendered_sms?: { body?: string } } | null)?.rendered_sms
      assert(
        typeof renderedSms?.body === 'string' && renderedSms.body.startsWith('MAIN: In clinical review.'),
        'Scenario 1: SMS body starts with brand-sourced "MAIN: In clinical review." (byte-identical to legacy)',
        `got "${renderedSms?.body}"`,
      )
    }

    // Verify rule.fired audit event with next_status carried.
    const { data: r1AuditData } = await supabase
      .from('audit_events')
      .select('id, action, metadata')
      .eq('action', 'rule.fired.clinical_decision.awaiting_clinical_review_v1')
      .eq('resource_id', 'rule.clinical_decision.awaiting_clinical_review_v1')
      .eq('patient_id', ctx.productionPatientId)
    assert(
      Array.isArray(r1AuditData) && r1AuditData.length === 1,
      'Scenario 1: exactly one rule.fired audit event for production patient',
      `got ${r1AuditData?.length} matching rows`,
    )
    if (r1AuditData && r1AuditData.length > 0) {
      ctx.auditEventIds.push((r1AuditData[0] as { id: string }).id)
      const meta = (r1AuditData[0] as { metadata: Record<string, unknown> }).metadata
      assert(meta.next_status === 'under_review', 'Scenario 1: audit metadata.next_status=under_review', `got ${meta.next_status}`)
      assert(meta.transition_audit_event_id === ctx.productionUnderReviewAuditEventId, 'Scenario 1: audit metadata.transition_audit_event_id', `got ${meta.transition_audit_event_id}`)
    }

    // -----------------------------------------------------------------
    // Scenario 2: production patient + 'pending_approval' branch
    // (NEW vs case_approved — verifies 2-status OR gate works for both)
    // -----------------------------------------------------------------
    console.log(`\n[scenario 2] production patient + 'pending_approval' branch (2-status OR coverage)`)
    const r2 = await dispatchRuleTriggerEvent(
      {
        event_type: 'patient.case_under_review',
        payload: {
          patient_id: ctx.productionPatientId,
          case_kind: 'care_program',
          case_id: ctx.productionCaseId,
          next_status: 'pending_approval',
          transition_audit_event_id: ctx.productionPendingApprovalAuditEventId,
        },
      },
      supabase,
    )

    assert(r2.matched === true, "Scenario 2: dispatcher matches on 'pending_approval' branch (2-status OR works)", `got matched=${r2.matched}`)
    if (r2.matched) {
      ctx.outboundJobIds.push(...r2.enqueued_outbound_job_ids)
      assert(r2.enqueued_outbound_job_ids.length === 2, 'Scenario 2: 2 outbound rows enqueued from pending_approval branch', `got ${r2.enqueued_outbound_job_ids.length}`)
      assert(r2.rule_id === 'rule.clinical_decision.awaiting_clinical_review_v1', 'Scenario 2: SAME Rule fires on both branches (no separate Rule per status)', `got ${r2.rule_id}`)

      // Verify the new rows have idempotency keys distinct from
      // scenario 1 (i.e. the 2-status OR truly fires a fresh
      // notification per branch — not deduping across statuses).
      const { data: r2Jobs } = await supabase
        .from('outbound_jobs')
        .select('id, idempotency_key')
        .in('id', r2.enqueued_outbound_job_ids)
      if (Array.isArray(r2Jobs)) {
        for (const j of r2Jobs) {
          const row = j as { idempotency_key: string }
          assert(
            row.idempotency_key.startsWith(`rule.awaiting_clinical_review:${ctx.productionPendingApprovalAuditEventId}:`),
            'Scenario 2: idempotency_key uses pending_approval transition audit_event_id (distinct from under_review)',
            `got ${row.idempotency_key}`,
          )
        }
      }

      // Verify the rule.fired audit row count is now 2 (one per branch).
      const { data: r2AuditCount } = await supabase
        .from('audit_events')
        .select('id, metadata')
        .eq('action', 'rule.fired.clinical_decision.awaiting_clinical_review_v1')
        .eq('patient_id', ctx.productionPatientId)
      assert(
        Array.isArray(r2AuditCount) && r2AuditCount.length === 2,
        'Scenario 2: now 2 rule.fired audit rows for production patient (one per branch fired)',
        `got ${r2AuditCount?.length}`,
      )
      if (Array.isArray(r2AuditCount)) {
        for (const a of r2AuditCount) {
          const id = (a as { id: string }).id
          if (!ctx.auditEventIds.includes(id)) ctx.auditEventIds.push(id)
        }
      }
    }

    // -----------------------------------------------------------------
    // Scenario 3: synthetic patient → env gate suppresses
    // -----------------------------------------------------------------
    console.log(`\n[scenario 3] synthetic patient → env gate suppresses both rows`)
    const r3 = await dispatchRuleTriggerEvent(
      {
        event_type: 'patient.case_under_review',
        payload: {
          patient_id: ctx.syntheticPatientId,
          case_kind: 'treatment_item',
          case_id: ctx.syntheticCaseId,
          next_status: 'under_review',
          transition_audit_event_id: ctx.syntheticAuditEventId,
        },
      },
      supabase,
    )

    if (r3.matched) {
      ctx.outboundJobIds.push(...r3.enqueued_outbound_job_ids)
      assert(
        r3.enqueued_outbound_job_ids.length === 2,
        'Scenario 3: synthetic patient also produces 2 outbound rows',
        `got ${r3.enqueued_outbound_job_ids.length}`,
      )
    }

    const { data: synthJobs } = await supabase
      .from('outbound_jobs')
      .select('id, status, suppressed_at, suppression_reason, data_environment')
      .in('id', r3.enqueued_outbound_job_ids ?? [])
    if (Array.isArray(synthJobs) && synthJobs.length > 0) {
      for (const row of synthJobs) {
        const r = row as { status: string; suppressed_at: string | null; data_environment: string }
        assert(r.status === 'suppressed_data_environment', `Scenario 3: synthetic row status=suppressed_data_environment`, `got ${r.status}`)
        assert(r.data_environment === 'synthetic', `Scenario 3: data_environment=synthetic`, `got ${r.data_environment}`)
      }
    } else {
      fail('Scenario 3: synthetic outbound_jobs rows lookup', 'no rows returned')
    }

    if (r3.matched && r3.enqueued_outbound_job_ids.length > 0) {
      const { data: suppressAudits } = await supabase
        .from('audit_events')
        .select('id')
        .eq('action', 'notification.dispatch_blocked_by_privacy_check')
        .in('resource_id', r3.enqueued_outbound_job_ids)
      assert(
        Array.isArray(suppressAudits) && suppressAudits.length === 2,
        'Scenario 3: 2 suppression audit events emitted',
        `got ${suppressAudits?.length}`,
      )
      if (Array.isArray(suppressAudits)) {
        for (const a of suppressAudits) ctx.auditEventIds.push((a as { id: string }).id)
      }
    }

    // -----------------------------------------------------------------
    // Scenario 4: idempotent replay (same transition_audit_event_id)
    // -----------------------------------------------------------------
    console.log(`\n[scenario 4] replay same transition_audit_event_id → idempotency_key collision`)
    const r4 = await dispatchRuleTriggerEvent(
      {
        event_type: 'patient.case_under_review',
        payload: {
          patient_id: ctx.productionPatientId,
          case_kind: 'treatment_item',
          case_id: ctx.productionCaseId,
          next_status: 'under_review',
          transition_audit_event_id: ctx.productionUnderReviewAuditEventId, // SAME as scenario 1
        },
      },
      supabase,
    )

    assert(r4.matched === true, 'Scenario 4: rule still matches on replay', `got matched=${r4.matched}`)
    if (r4.matched) {
      assert(r4.enqueued_outbound_job_ids.length === 2, 'Scenario 4: 2 outbound_job_ids returned (same as scenario 1)', `got ${r4.enqueued_outbound_job_ids.length}`)
      const sameIds = r4.enqueued_outbound_job_ids.every((id) =>
        r1.matched ? r1.enqueued_outbound_job_ids.includes(id) : false,
      )
      assert(
        sameIds,
        'Scenario 4: idempotent_replay returns the same outbound_job_ids',
        'IDs differ — duplicate insert leaked through idempotency_key uniqueness',
      )
    }

    const { data: replayJobs } = await supabase
      .from('outbound_jobs')
      .select('id')
      .eq('idempotency_key', `rule.awaiting_clinical_review:${ctx.productionUnderReviewAuditEventId}:email`)
    assert(
      Array.isArray(replayJobs) && replayJobs.length === 1,
      'Scenario 4: exactly 1 email row exists for the under_review transition_audit_event_id (no duplicate)',
      `got ${replayJobs?.length} rows`,
    )

    const { data: postReplayAudits } = await supabase
      .from('audit_events')
      .select('id')
      .eq('action', 'rule.fired.clinical_decision.awaiting_clinical_review_v1')
      .eq('patient_id', ctx.productionPatientId)
    if (Array.isArray(postReplayAudits)) {
      for (const a of postReplayAudits) {
        const id = (a as { id: string }).id
        if (!ctx.auditEventIds.includes(id)) ctx.auditEventIds.push(id)
      }
    }

    // -----------------------------------------------------------------
    // Scenario 5: legacy non-firing on BOTH statuses
    // -----------------------------------------------------------------
    console.log(`\n[scenario 5] legacy resolvePatientNotifications no longer fires on either status`)
    const legacyUnderReview = resolvePatientNotifications({
      patientId: ctx.productionPatientId,
      fromWorkflowStatus: null,
      toWorkflowStatus: 'under_review',
      source: 'staff',
    })
    assert(
      Array.isArray(legacyUnderReview) && legacyUnderReview.length === 0,
      "Scenario 5: legacy returns [] for 'under_review' (map entry deleted)",
      `got ${legacyUnderReview.length} notifications`,
    )
    const legacyPendingApproval = resolvePatientNotifications({
      patientId: ctx.productionPatientId,
      fromWorkflowStatus: null,
      toWorkflowStatus: 'pending_approval',
      source: 'staff',
    })
    assert(
      Array.isArray(legacyPendingApproval) && legacyPendingApproval.length === 0,
      "Scenario 5: legacy returns [] for 'pending_approval' (map entry deleted)",
      `got ${legacyPendingApproval.length} notifications`,
    )

    // -----------------------------------------------------------------
    // Scenario 6: wording rendering byte-identity
    // -----------------------------------------------------------------
    console.log(`\n[scenario 6] wording rendering parity (byte-level checks)`)
    const renderedEmail = renderAwaitingClinicalReviewEmail({
      brand_short_label: 'MAIN',
      dashboard_url: 'https://example.test/dashboard/abc',
      patient_first_name: 'Test',
    })
    const renderedSms = renderAwaitingClinicalReviewSms({
      brand_short_label: 'MAIN',
      dashboard_url: 'https://example.test/dashboard/abc',
      patient_first_name: 'Test',
    })

    assert(renderedEmail.subject === 'Your visit is in clinical review', 'Scenario 6: email subject verbatim from legacy', `got "${renderedEmail.subject}"`)
    assert(renderedEmail.text.includes('In clinical review'), 'Scenario 6: email text includes legacy heading', 'missing')
    assert(
      renderedEmail.text.includes('Your visit is now in clinical review.'),
      'Scenario 6: email text intro byte-identical to legacy',
      'missing',
    )
    assert(
      renderedEmail.text.includes('We will send another update as soon as your clinician has a decision.'),
      'Scenario 6: email text detail verbatim from legacy',
      'missing',
    )
    assert(renderedEmail.text.includes('— MAIN'), 'Scenario 6: email text footer "— MAIN" sourced from typed brand_short_label slot', 'missing')

    assert(
      renderedSms.body === 'MAIN: In clinical review. https://example.test/dashboard/abc',
      'Scenario 6: SMS body byte-identical to legacy "MAIN: In clinical review. <url>"',
      `got "${renderedSms.body}"`,
    )

    assert(
      awaitingClinicalReviewV1.rule_id === 'rule.clinical_decision.awaiting_clinical_review_v1',
      'Scenario 6: awaitingClinicalReviewV1 anchor exported',
      `got ${awaitingClinicalReviewV1.rule_id}`,
    )
    assert(
      awaitingClinicalReviewTemplateV1.template_key === 'tmpl.clinical_decision.awaiting_clinical_review_v1',
      'Scenario 6: awaitingClinicalReviewTemplateV1 anchor exported',
      `got ${awaitingClinicalReviewTemplateV1.template_key}`,
    )
    assert(
      awaitingClinicalReviewTemplateV1.transactional_critical === false,
      'Scenario 6: Template transactional_critical=false (cadence-bypass NOT defensible for status ack)',
      `got ${awaitingClinicalReviewTemplateV1.transactional_critical}`,
    )
    assert(
      awaitingClinicalReviewV1.authority_floor === 'system',
      'Scenario 6: Rule authority_floor=system (NOT provider — distinct from case_approved)',
      `got ${awaitingClinicalReviewV1.authority_floor}`,
    )
    assert(
      awaitingClinicalReviewV1.recall_severity === 'operational',
      'Scenario 6: Rule recall_severity=operational',
      `got ${awaitingClinicalReviewV1.recall_severity}`,
    )

    // -----------------------------------------------------------------
    // Summary
    // -----------------------------------------------------------------
    console.log('\n----------------------------------------------------------------------')
    console.log(
      `Phase 4H-templates-discipline commit 3 awaiting_clinical_review parity: ${passes} passed, ${failures} failed.`,
    )
    if (failures > 0) {
      console.error('RED — parity broken. Investigate before shipping.')
      exitCode = 1
    } else {
      console.log('GREEN — awaiting_clinical_review cutover is parity-equivalent at the dispatch boundary; 2-status OR producer gate verified on both branches.')
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
      email: `phase4h-templates-c3-synth-${ts}@example.test`,
      phone: '+15555550499',
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
      email: `phase4h-templates-c3-prod-${ts}@example.test`,
      phone: '+15555550498',
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
      .in('resource_id', ['rule.clinical_decision.awaiting_clinical_review_v1'])
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
