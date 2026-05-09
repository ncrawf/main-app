/**
 * Phase 4H-disclosure-policy commit 2 — live-DB end-to-end smoke for
 * pathway_sensitivity propagation.
 *
 * Run: NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... \
 *      npx tsx scripts/test-pathway-sensitivity-propagation-live.ts
 *
 * Validates 3 scenarios end-to-end:
 *
 *   Scenario 1 (regression — unscoped rule):
 *     Enqueue an outbound row exactly as today's payment_received +
 *     intake_submitted rules do (no pathway_code, no pathway_sensitivity
 *     passed). Verify both columns are NULL on the resulting row.
 *     Confirms the existing unscoped rules continue to behave as before.
 *
 *   Scenario 2 (forward-compatible — single-pathway scoped):
 *     Enqueue an outbound row with pathway_code='glp1' +
 *     pathway_sensitivity='moderate' (the values the dispatcher would
 *     resolve for a future pathway-scoped rule). Verify both columns
 *     persist on the row at the expected values, end-to-end through
 *     the SECURITY DEFINER orchestrator.
 *
 *   Scenario 3 (consistency check — registry alignment):
 *     Read back the lib/intake/pathways/glp1.ts Pathway.sensitivity_level
 *     and confirm it agrees with PATHWAY_SENSITIVITY_BY_CODE['glp1'].
 *     The registry is the source of truth for the rules engine; the
 *     intake Pathway is the source of truth for intake composition.
 *     They MUST agree on the canonical pathway code's sensitivity.
 *
 * Cleans up all created rows on success or failure.
 */

import { createClient } from '@supabase/supabase-js'
import { enqueueOutboundJob } from '../lib/outbound/enqueue'
import { PATHWAY_SENSITIVITY_BY_CODE } from '../lib/pathways/sensitivity-registry'
import { glp1Pathway } from '../lib/intake/pathways/glp1'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LooseSupabase = any

interface TestContext {
  supabase: LooseSupabase
  patientId: string
  outboundJobIds: string[]
  orgId: string
}

async function main(): Promise<void> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars.')
    process.exit(1)
  }

  const supabase: LooseSupabase = createClient(url, key)
  const ctx: TestContext = {
    supabase,
    patientId: '',
    outboundJobIds: [],
    orgId: '',
  }

  const ts = Date.now()
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
    console.log(`[${new Date().toISOString()}] Setting up test patient ...`)
    await setup(ctx, ts, supabase)
    console.log(`  patient_id=${ctx.patientId}`)
    console.log(`  org_id=${ctx.orgId}`)

    // ----------------------------------------------------------------
    // Scenario 1: unscoped rule -> both columns NULL (regression)
    // ----------------------------------------------------------------
    console.log(`\n[scenario 1] unscoped rule -> pathway_code + pathway_sensitivity both NULL`)
    const r1 = await enqueueOutboundJob({
      kind: 'send_email',
      payload: { test_marker: `s1-${ts}`, rendered_email: { subject: 'x', html: '<p>x</p>', text: 'x' } },
      patient_id: ctx.patientId,
      channel: 'email',
      idempotency_key: `phase4h-c2-pathway-s1-${ts}`,
      template_key: 'tmpl.billing.payment_received_v1',
      template_version: '1.0.0',
      message_intent: 'billing',
      intended_privacy_exposure_level: 1,
      declared_privacy_exposure_level: 1,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: 'rule.test.unscoped',
      queued_by_kind: 'rule_engine',
      // No pathway_code, no pathway_sensitivity (regression: unscoped rule).
      // org_id intentionally omitted; SECURITY DEFINER infers it from patient_id.
    })
    ctx.outboundJobIds.push(r1.outbound_job_id)
    const r1Row = await fetchPathwayCols(supabase, r1.outbound_job_id)
    assert(
      r1Row.pathway_code === null,
      'Scenario 1: row.pathway_code is NULL (unscoped rule)',
      `got '${r1Row.pathway_code}'`,
    )
    assert(
      r1Row.pathway_sensitivity === null,
      'Scenario 1: row.pathway_sensitivity is NULL (unscoped rule)',
      `got '${r1Row.pathway_sensitivity}'`,
    )

    // ----------------------------------------------------------------
    // Scenario 2: single-pathway scoped -> both columns populated
    // ----------------------------------------------------------------
    console.log(`\n[scenario 2] single-pathway scoped -> pathway_code='glp1' + pathway_sensitivity='moderate'`)
    const r2 = await enqueueOutboundJob({
      kind: 'send_email',
      payload: { test_marker: `s2-${ts}`, rendered_email: { subject: 'x', html: '<p>x</p>', text: 'x' } },
      patient_id: ctx.patientId,
      channel: 'email',
      idempotency_key: `phase4h-c2-pathway-s2-${ts}`,
      template_key: 'tmpl.billing.payment_received_v1',
      template_version: '1.0.0',
      pathway_code: 'glp1',
      pathway_sensitivity: 'moderate',
      message_intent: 'billing',
      intended_privacy_exposure_level: 1,
      declared_privacy_exposure_level: 1,
      decision_outcome_reason: 'rule_matched',
      priority_hint: 'standard',
      source_kind: 'rule_engine',
      source_id: 'rule.test.glp1_scoped',
      queued_by_kind: 'rule_engine',
      // org_id intentionally omitted; SECURITY DEFINER infers it from patient_id.
    })
    ctx.outboundJobIds.push(r2.outbound_job_id)
    const r2Row = await fetchPathwayCols(supabase, r2.outbound_job_id)
    assert(
      r2Row.pathway_code === 'glp1',
      `Scenario 2: row.pathway_code === 'glp1'`,
      `got '${r2Row.pathway_code}'`,
    )
    assert(
      r2Row.pathway_sensitivity === 'moderate',
      `Scenario 2: row.pathway_sensitivity === 'moderate'`,
      `got '${r2Row.pathway_sensitivity}'`,
    )

    // ----------------------------------------------------------------
    // Scenario 3: registry alignment with intake Pathway
    // ----------------------------------------------------------------
    console.log(`\n[scenario 3] registry alignment with lib/intake/pathways/glp1.ts`)
    assert(
      glp1Pathway.pathway_code === 'glp1',
      'glp1Pathway.pathway_code matches registry key',
      `got '${glp1Pathway.pathway_code}'`,
    )
    assert(
      glp1Pathway.sensitivity_level === PATHWAY_SENSITIVITY_BY_CODE['glp1'],
      `glp1Pathway.sensitivity_level (${glp1Pathway.sensitivity_level}) === PATHWAY_SENSITIVITY_BY_CODE['glp1'] (${PATHWAY_SENSITIVITY_BY_CODE['glp1']})`,
      `Drift between intake composition and rules-engine registry; one of them is wrong`,
    )

    // ----------------------------------------------------------------
    // Summary
    // ----------------------------------------------------------------
    console.log('\n----------------------------------------------------------------------')
    console.log(
      `Phase 4H-disclosure-policy commit 2 pathway propagation live-DB smoke: ${passes} passed, ${failures} failed.`,
    )
    if (failures > 0) {
      console.error('RED — propagation broken or registry / intake out of sync.')
      exitCode = 1
    } else {
      console.log('GREEN — pathway propagation is end-to-end + registry aligned with intake.')
    }
  } catch (err) {
    console.error(
      `[${new Date().toISOString()}] FAIL —`,
      err instanceof Error ? err.message : err,
    )
    if (err instanceof Error && err.stack) console.error(err.stack)
    exitCode = 1
  } finally {
    console.log(`\n[${new Date().toISOString()}] Cleaning up ...`)
    await cleanup(ctx).catch((e) => console.error('Cleanup error (best-effort):', e))
  }

  process.exit(exitCode)
}

async function setup(ctx: TestContext, ts: number, supabase: LooseSupabase): Promise<void> {
  // Resolve canonical 'main' org_id (seeded in 4H-pre commit 5).
  const { data: brandRows, error: brandErr } = await supabase
    .from('brands')
    .select('org_id')
    .eq('slug', 'main')
    .limit(1)
  if (brandErr || !brandRows || brandRows.length === 0) {
    throw new Error(
      `setup: could not resolve canonical main brand org_id: ${brandErr?.message ?? 'no brand rows'}`,
    )
  }
  ctx.orgId = (brandRows[0] as { org_id: string }).org_id

  const prodRes = await supabase
    .from('patients')
    .insert({
      email: `phase4h-c2-pathway-${ts}@example.test`,
      phone: '+15555550196',
      first_name: 'Test',
      org_id: ctx.orgId,
    })
    .select('id')
    .single()
  if (prodRes.error || !prodRes.data) {
    throw new Error(`patient insert failed: ${prodRes.error?.message}`)
  }
  ctx.patientId = (prodRes.data as { id: string }).id
}

async function fetchPathwayCols(supabase: LooseSupabase, id: string) {
  const { data, error } = await supabase
    .from('outbound_jobs')
    .select('id, pathway_code, pathway_sensitivity')
    .eq('id', id)
    .single()
  if (error || !data) throw new Error(`fetchPathwayCols(${id}) failed: ${error?.message}`)
  return data as {
    id: string
    pathway_code: string | null
    pathway_sensitivity: string | null
  }
}

async function cleanup(ctx: TestContext): Promise<void> {
  if (ctx.outboundJobIds.length > 0) {
    await ctx.supabase
      .from('audit_events')
      .delete()
      .eq('resource_type', 'outbound_jobs')
      .in('resource_id', ctx.outboundJobIds)
    await ctx.supabase.from('outbound_jobs').delete().in('id', ctx.outboundJobIds)
  }
  if (ctx.patientId) {
    await ctx.supabase.from('patients').delete().eq('id', ctx.patientId)
  }
}

main().catch((err) => {
  console.error('Unhandled error:', err)
  process.exit(1)
})
