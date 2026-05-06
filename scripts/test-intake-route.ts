/**
 * Phase 4G-pre live-DB smoke — exercises POST /api/intake/sessions/[id]/responses
 * end-to-end, driving the real route handler (no Next dev server) with the
 * full read→resolve→write pipeline against a real Supabase project.
 *
 * Validates:
 *  1. POST returns 200 with intake_response_id + emission_results.
 *  2. intake_responses row has correct primitives (org_id + data_environment).
 *  3. patient_clinical_assertion row has resolved concept_id from raw_value.
 *  4. Q15.2 medication entity flips status='discontinued' when Q15.1's
 *     prior status_v1='past' (cross-question resolver rule).
 *  5. audit_events rows pair with each emission.
 *  6. Strict request body rejects forged primitives (org_id, patient_id, etc.).
 *  7. Unknown question_id returns 400 (resolution_failed surface).
 *  8. Mismatched session UUID returns 404.
 *
 * Cleans up all created rows on success or failure.
 *
 * Run with: NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... \
 *           npx tsx scripts/test-intake-route.ts
 *
 * NODE_ENV is forced to 'development' so the patient-portal cookie gate
 * relaxes per isPatientPortalGateRelaxed() (matches the existing
 * /api/patient-portal/* test pattern).
 */

// Force the cookie gate to relax BEFORE importing anything that captures NODE_ENV.
// TS marks process.env.NODE_ENV readonly; runtime allows mutation, so cast through.
;(process.env as Record<string, string>).NODE_ENV = 'development'

import { createClient } from '@supabase/supabase-js'
import { POST } from '../app/api/intake/sessions/[sessionId]/responses/route'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LooseSupabase = any

interface TestContext {
  supabase: LooseSupabase
  patientId: string
  sessionId: string
  intakeResponseIds: string[]
  assertionIds: string[]
  medicationIds: string[]
  auditEventIds: string[]
}

const MAIN_ORG_ID = '00000000-0000-0000-0000-000000000001'

let passed = 0
let failed = 0

function check(label: string, cond: boolean, detail?: string): void {
  if (cond) {
    passed++
    console.log(`  PASS — ${label}`)
  } else {
    failed++
    console.log(`  FAIL — ${label}${detail ? `: ${detail}` : ''}`)
  }
}

function buildPostRequest(sessionId: string, body: unknown): {
  request: Request
  context: { params: Promise<{ sessionId: string }> }
} {
  const request = new Request(`http://test/api/intake/sessions/${sessionId}/responses`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
  const context = { params: Promise.resolve({ sessionId }) }
  return { request, context }
}

async function callRoute(
  sessionId: string,
  body: unknown,
): Promise<{ status: number; json: Record<string, unknown> }> {
  const { request, context } = buildPostRequest(sessionId, body)
  const res = await POST(request, context)
  const json = (await res.json()) as Record<string, unknown>
  return { status: res.status, json }
}

async function setup(ctx: TestContext, ts: number): Promise<void> {
  const patientRes = await ctx.supabase
    .from('patients')
    .insert({ email: `phase4g-pre-route-${ts}@example.test`, phone: '+15555550101' })
    .select('id, org_id, data_environment')
    .single()
  if (patientRes.error || !patientRes.data) {
    throw new Error(`patients insert: ${patientRes.error?.message}`)
  }
  ctx.patientId = (patientRes.data as { id: string }).id

  const sessionRes = await ctx.supabase
    .from('intake_sessions')
    .insert({
      patient_id: ctx.patientId,
      pathway_codes: ['glp1'],
      pathway_version_pins: { glp1: '1.0.0' },
      funnel_slug: 'phase4g_pre_route_smoke',
      funnel_version: '1.0.0',
      engine_version: '1.0.0',
      safety_ruleset_version: '1.0.0',
      status: 'in_progress',
      interaction_context: { mode: 'online' },
      metadata: {},
    })
    .select('id')
    .single()
  if (sessionRes.error || !sessionRes.data) {
    throw new Error(`intake_sessions insert: ${sessionRes.error?.message}`)
  }
  ctx.sessionId = (sessionRes.data as { id: string }).id
  console.log(`  patient_id=${ctx.patientId}`)
  console.log(`  session_id=${ctx.sessionId}`)
}

async function cleanup(ctx: TestContext): Promise<void> {
  // Order: dependents first.
  if (ctx.auditEventIds.length) {
    await ctx.supabase.from('audit_events').delete().in('id', ctx.auditEventIds)
  }
  if (ctx.medicationIds.length) {
    await ctx.supabase.from('patient_medications').delete().in('id', ctx.medicationIds)
  }
  if (ctx.assertionIds.length) {
    await ctx.supabase.from('patient_clinical_assertions').delete().in('id', ctx.assertionIds)
  }
  if (ctx.intakeResponseIds.length) {
    await ctx.supabase.from('intake_responses').delete().in('id', ctx.intakeResponseIds)
  }
  if (ctx.sessionId) {
    await ctx.supabase.from('intake_sessions').delete().eq('id', ctx.sessionId)
  }
  if (ctx.patientId) {
    await ctx.supabase.from('audit_events').delete().eq('patient_id', ctx.patientId)
    await ctx.supabase.from('patients').delete().eq('id', ctx.patientId)
  }
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
    sessionId: '',
    intakeResponseIds: [],
    assertionIds: [],
    medicationIds: [],
    auditEventIds: [],
  }

  const ts = Date.now()
  let exitCode = 0

  try {
    console.log(`[${new Date().toISOString()}] Setting up patient + session ...`)
    await setup(ctx, ts)

    // ---------- Q15.1 status_v1 = 'past' ----------
    console.log(`[${new Date().toISOString()}] [scenario 1] POST Q15.1 status_v1='past' ...`)
    const q1 = await callRoute(ctx.sessionId, {
      question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1',
      raw_value: 'past',
    })
    check('[1.a] Q15.1 POST returns 200', q1.status === 200, JSON.stringify(q1.json))
    if (q1.status !== 200) throw new Error('Q15.1 POST failed')
    const q1IntakeId = q1.json.intake_response_id as string
    const q1Emissions = q1.json.emission_results as Array<{ target: string; id: string; audit_event_id: string }>
    ctx.intakeResponseIds.push(q1IntakeId)
    for (const e of q1Emissions) {
      ctx.auditEventIds.push(e.audit_event_id)
      if (e.target === 'clinical_assertion') ctx.assertionIds.push(e.id)
    }
    check('[1.b] Q15.1 produced exactly 1 emission', q1Emissions.length === 1, `got ${q1Emissions.length}`)
    check('[1.c] Q15.1 emission target = clinical_assertion', q1Emissions[0]?.target === 'clinical_assertion')

    // Verify intake_responses row primitives
    const ir1 = await ctx.supabase
      .from('intake_responses')
      .select('id, raw_value, org_id, data_environment, question_id, session_id')
      .eq('id', q1IntakeId)
      .single()
    check('[1.d] intake_responses row exists', !ir1.error && !!ir1.data, ir1.error?.message)
    if (ir1.data) {
      check('[1.e] intake_responses.org_id = main', ir1.data.org_id === MAIN_ORG_ID, ir1.data.org_id)
      check('[1.f] intake_responses.data_environment = production', ir1.data.data_environment === 'production')
      check('[1.g] intake_responses.raw_value preserved', ir1.data.raw_value === 'past')
    }

    // Verify clinical_assertion row resolved correctly
    if (ctx.assertionIds.length) {
      const a1 = await ctx.supabase
        .from('patient_clinical_assertions')
        .select('id, concept_id, context_key, metadata, status, authored_by, source_intake_response_id, org_id, data_environment')
        .eq('id', ctx.assertionIds[0])
        .single()
      check('[1.h] assertion row exists', !a1.error && !!a1.data)
      if (a1.data) {
        check('[1.i] assertion.concept_id = medication.glp1_use_status', a1.data.concept_id === 'medication.glp1_use_status')
        check('[1.j] assertion.context_key resolved to "past" (concept carries metadata.value)', a1.data.context_key === 'past', `got "${a1.data.context_key}"`)
        const meta = (a1.data.metadata ?? {}) as { value?: unknown }
        check('[1.k] assertion.metadata.value = "past"', meta.value === 'past', JSON.stringify(meta))
        check('[1.l] assertion.source_intake_response_id back-pointer set', a1.data.source_intake_response_id === q1IntakeId)
      }
    }

    // ---------- Q15.2 which_drug_v1 = 'medication.wegovy' ----------
    // The resolver should flip medication.status to 'discontinued' because
    // Q15.1's prior raw_value = 'past' (sibling status_v1).
    console.log(`[${new Date().toISOString()}] [scenario 2] POST Q15.2 which_drug_v1='medication.wegovy' (expect status flip → discontinued) ...`)
    const q2 = await callRoute(ctx.sessionId, {
      question_id: 'qb.pathway.glp1.prior_glp1_use.which_drug_v1',
      raw_value: 'medication.wegovy',
    })
    check('[2.a] Q15.2 POST returns 200', q2.status === 200, JSON.stringify(q2.json))
    if (q2.status !== 200) throw new Error('Q15.2 POST failed')
    const q2IntakeId = q2.json.intake_response_id as string
    const q2Emissions = q2.json.emission_results as Array<{ target: string; id: string; audit_event_id: string }>
    ctx.intakeResponseIds.push(q2IntakeId)
    for (const e of q2Emissions) {
      ctx.auditEventIds.push(e.audit_event_id)
      if (e.target === 'clinical_assertion') ctx.assertionIds.push(e.id)
      if (e.target === 'medication') ctx.medicationIds.push(e.id)
    }
    check('[2.b] Q15.2 produced 2 emissions (claim + entity dual emit)', q2Emissions.length === 2, `got ${q2Emissions.length}`)
    check('[2.c] Q15.2 first emission = clinical_assertion', q2Emissions[0]?.target === 'clinical_assertion')
    check('[2.d] Q15.2 second emission = medication', q2Emissions[1]?.target === 'medication')

    // Verify medication entity row + status flip
    const medId = ctx.medicationIds[0]
    if (medId) {
      const m1 = await ctx.supabase
        .from('patient_medications')
        .select('id, medication_concept_id, name_normalized, status, reconciliation_status, source_assertion_id, org_id, data_environment')
        .eq('id', medId)
        .single()
      check('[2.e] medication row exists', !m1.error && !!m1.data)
      if (m1.data) {
        check('[2.f] medication.medication_concept_id = medication.wegovy', m1.data.medication_concept_id === 'medication.wegovy')
        check('[2.g] medication.name_normalized = "Wegovy" (resolved from concept description)', m1.data.name_normalized === 'Wegovy', `got "${m1.data.name_normalized}"`)
        check('[2.h] medication.status = "discontinued" (cross-question flip from Q15.1 status_v1=past)', m1.data.status === 'discontinued', `got "${m1.data.status}"`)
        check('[2.i] medication.reconciliation_status = "unreconciled"', m1.data.reconciliation_status === 'unreconciled')
        check('[2.j] medication.source_assertion_id back-pointer set', !!m1.data.source_assertion_id)
        check('[2.k] medication.org_id = main', m1.data.org_id === MAIN_ORG_ID)
        check('[2.l] medication.data_environment = production', m1.data.data_environment === 'production')
      }
    }

    // ---------- Negative tests ----------
    console.log(`[${new Date().toISOString()}] [scenario 3] Strict body rejects forged primitives ...`)
    const forged = await callRoute(ctx.sessionId, {
      question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1',
      raw_value: 'never',
      org_id: '11111111-1111-1111-1111-111111111111', // forbidden by route schema
    })
    check('[3.a] forged org_id in body returns 400', forged.status === 400, `got ${forged.status} ${JSON.stringify(forged.json)}`)

    const forgedPatient = await callRoute(ctx.sessionId, {
      question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1',
      raw_value: 'never',
      patient_id: ctx.patientId, // forbidden — derived from session
    })
    check('[3.b] forged patient_id in body returns 400', forgedPatient.status === 400, `got ${forgedPatient.status}`)

    console.log(`[${new Date().toISOString()}] [scenario 4] Unknown question_id returns 400 ...`)
    const unknown = await callRoute(ctx.sessionId, {
      question_id: 'qb.does.not.exist',
      raw_value: 'whatever',
    })
    check('[4.a] unknown question_id returns 400', unknown.status === 400, `got ${unknown.status} ${JSON.stringify(unknown.json)}`)

    console.log(`[${new Date().toISOString()}] [scenario 5] Bad session UUID returns 400 ...`)
    const badSession = await callRoute('not-a-uuid', {
      question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1',
      raw_value: 'never',
    })
    check('[5.a] non-UUID sessionId returns 400', badSession.status === 400)

    const missingSession = await callRoute('00000000-0000-0000-0000-deadbeefdead', {
      question_id: 'qb.pathway.glp1.prior_glp1_use.status_v1',
      raw_value: 'never',
    })
    check('[5.b] missing session UUID returns 404', missingSession.status === 404, `got ${missingSession.status}`)
  } catch (err) {
    console.error(`[${new Date().toISOString()}] FAIL — ${err instanceof Error ? err.message : err}`)
    if (err instanceof Error && err.stack) console.error(err.stack)
    failed++
    exitCode = 1
  } finally {
    console.log(`[${new Date().toISOString()}] Cleaning up ...`)
    await cleanup(ctx).catch((err) => console.error('Cleanup error (best-effort):', err))
  }

  console.log('-'.repeat(70))
  if (failed === 0) {
    console.log(`Phase 4G-pre intake route smoke: ${passed} passed, 0 failed.`)
    console.log('GREEN — POST /api/intake/sessions/[id]/responses end-to-end pipeline validated.')
  } else {
    console.log(`Phase 4G-pre intake route smoke: ${passed} passed, ${failed} failed.`)
    exitCode = 1
  }
  process.exit(exitCode)
}

void main()
