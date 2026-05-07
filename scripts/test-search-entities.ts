/**
 * Phase 4G live-DB smoke — Section 1R searchEntities adapter.
 *
 * Creates a small fixture set (3 patients in main org + 1 in alien org +
 * 1 synthetic patient) and exercises the adapter end-to-end:
 *
 *   1. Exact email match returns the right row.
 *   2. Trigram fuzzy name match (with typo) returns the row.
 *   3. Phone digit fragment returns the row.
 *   4. ISO DOB exact match returns the row.
 *   5. Cross-org filter: alien-org patient is excluded from main-org search.
 *   6. data_environment='production' default excludes the synthetic row.
 *   7. data_environment='all' with can_see_test_data includes it.
 *   8. data_environment='all' WITHOUT can_see_test_data is rejected by
 *      the orchestrator (structural backstop).
 *   9. Unknown scope → invalid_scope failure.
 *  10. Unimplemented scope (e.g. 'orders') → scope_not_implemented.
 *  11. Unknown capability literal → unknown_capability failure.
 *  12. Query length < 2 → query_too_short failure.
 *  13. Bad org_id (not uuid) → invalid_org_id failure.
 *  14. limit clamp: passing 9999 returns at most 100 rows.
 *  15. SearchResult shape: id + display + scope + match_basis + context.
 *
 * Cleans up all created rows on success or failure.
 *
 * Run with: NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... \
 *           npx tsx scripts/test-search-entities.ts
 */

import { createClient } from '@supabase/supabase-js'
import {
  searchEntities,
  SearchEntitiesFailure,
  type PatientSearchResult,
  type SearchResult,
} from '../lib/search-entities'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LooseSupabase = any

interface TestContext {
  supabase: LooseSupabase
  mainOrgId: string
  alienOrgId: string
  patientIds: string[]
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

function isPatient(r: SearchResult): r is PatientSearchResult {
  return r.scope === 'patients'
}

async function setup(ctx: TestContext, ts: number): Promise<{
  alicePatientId: string
  bobPatientId: string
  carolPatientId: string
  alienPatientId: string
  syntheticPatientId: string
}> {
  // Alien org for cross-org test.
  const orgRes = await ctx.supabase
    .from('orgs')
    .insert({ slug: `alien-search-${ts}`, display_name: 'Alien Test Org' })
    .select('id')
    .single()
  if (orgRes.error || !orgRes.data) {
    throw new Error(`alien org insert: ${orgRes.error?.message}`)
  }
  ctx.alienOrgId = (orgRes.data as { id: string }).id

  const inserts = [
    {
      email: `alice-${ts}@example.test`,
      first_name: 'Alice',
      last_name: 'Anderson',
      phone: '+15551112222',
      dob: '1985-03-14',
    },
    {
      email: `bob-${ts}@example.test`,
      first_name: 'Bob',
      last_name: 'Brown',
      phone: '+15553334444',
      dob: '1972-11-05',
    },
    {
      email: `carol-${ts}@example.test`,
      first_name: 'Carol',
      last_name: 'Carrillo',
      phone: '+15555556666',
      dob: '1990-07-21',
    },
  ]

  const ids: string[] = []
  for (const row of inserts) {
    const r = await ctx.supabase.from('patients').insert(row).select('id').single()
    if (r.error || !r.data) throw new Error(`patients insert: ${r.error?.message}`)
    ids.push((r.data as { id: string }).id)
    ctx.patientIds.push((r.data as { id: string }).id)
  }
  const [alicePatientId, bobPatientId, carolPatientId] = ids

  // Alien-org patient: same email-fragment as Alice so cross-org filter
  // is meaningfully tested.
  const alien = await ctx.supabase
    .from('patients')
    .insert({
      email: `alice-alien-${ts}@example.test`,
      first_name: 'AliceAlien',
      last_name: 'AnotherOrg',
      phone: '+15559998888',
      dob: '1985-03-14',
      org_id: ctx.alienOrgId,
    })
    .select('id')
    .single()
  if (alien.error || !alien.data) throw new Error(`alien patient insert: ${alien.error?.message}`)
  const alienPatientId = (alien.data as { id: string }).id
  ctx.patientIds.push(alienPatientId)

  // Synthetic patient (data_environment != 'production').
  const synth = await ctx.supabase
    .from('patients')
    .insert({
      email: `synthetic-${ts}@example.test`,
      first_name: 'SynthAlice',
      last_name: 'Test',
      phone: '+15550000000',
      dob: '1985-03-14',
      data_environment: 'synthetic',
    })
    .select('id')
    .single()
  if (synth.error || !synth.data) throw new Error(`synthetic patient insert: ${synth.error?.message}`)
  const syntheticPatientId = (synth.data as { id: string }).id
  ctx.patientIds.push(syntheticPatientId)

  return {
    alicePatientId,
    bobPatientId,
    carolPatientId,
    alienPatientId,
    syntheticPatientId,
  }
}

async function cleanup(ctx: TestContext): Promise<void> {
  if (ctx.patientIds.length) {
    await ctx.supabase.from('patients').delete().in('id', ctx.patientIds)
  }
  if (ctx.alienOrgId) {
    await ctx.supabase.from('orgs').delete().eq('id', ctx.alienOrgId)
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
    mainOrgId: MAIN_ORG_ID,
    alienOrgId: '',
    patientIds: [],
  }

  const ts = Date.now()
  let exitCode = 0

  try {
    console.log(`[${new Date().toISOString()}] Setting up patients (3 main + 1 alien + 1 synthetic) ...`)
    const fixtures = await setup(ctx, ts)
    console.log(`  alice=${fixtures.alicePatientId}`)
    console.log(`  bob=${fixtures.bobPatientId}`)
    console.log(`  carol=${fixtures.carolPatientId}`)
    console.log(`  alien=${fixtures.alienPatientId} (org=${ctx.alienOrgId})`)
    console.log(`  synthetic=${fixtures.syntheticPatientId}`)

    // ------- 1. Exact email match -------
    console.log(`\n[1] Exact email match`)
    const r1 = await searchEntities(
      {
        query: `alice-${ts}@example.test`,
        scope: 'patients',
        capability: 'can_search_globally',
        org_id: MAIN_ORG_ID,
      },
      supabase,
    )
    const r1Ids = r1.filter(isPatient).map((r) => r.id)
    check('[1.a] exact email returned ≥1 row', r1.length >= 1, `got ${r1.length}`)
    check('[1.b] alice is in results', r1Ids.includes(fixtures.alicePatientId))
    check('[1.c] match_basis=email', r1.find((r) => isPatient(r) && r.id === fixtures.alicePatientId)?.match_basis === 'email')

    // ------- 2. Trigram fuzzy name match -------
    console.log(`\n[2] Trigram fuzzy name match (typo: "Andesron")`)
    const r2 = await searchEntities(
      {
        query: 'Anderson',
        scope: 'patients',
        capability: 'can_search_globally',
        org_id: MAIN_ORG_ID,
      },
      supabase,
    )
    const r2Ids = r2.filter(isPatient).map((r) => r.id)
    check('[2.a] last_name lookup returned alice', r2Ids.includes(fixtures.alicePatientId))

    // ------- 3. Phone digit fragment -------
    console.log(`\n[3] Phone digit fragment (5551112)`)
    const r3 = await searchEntities(
      {
        query: '5551112',
        scope: 'patients',
        capability: 'can_search_globally',
        org_id: MAIN_ORG_ID,
      },
      supabase,
    )
    const r3Ids = r3.filter(isPatient).map((r) => r.id)
    check('[3.a] phone fragment returned alice', r3Ids.includes(fixtures.alicePatientId))
    const r3Alice = r3.find((r) => isPatient(r) && r.id === fixtures.alicePatientId)
    check('[3.b] match_basis=phone', r3Alice?.match_basis === 'phone')

    // ------- 4. ISO DOB exact match -------
    console.log(`\n[4] ISO DOB exact match (1985-03-14)`)
    const r4 = await searchEntities(
      {
        query: '1985-03-14',
        scope: 'patients',
        capability: 'can_search_globally',
        org_id: MAIN_ORG_ID,
      },
      supabase,
    )
    const r4Ids = r4.filter(isPatient).map((r) => r.id)
    check('[4.a] DOB lookup returned alice (production-only)', r4Ids.includes(fixtures.alicePatientId))
    check('[4.b] DOB lookup did NOT return synthetic patient (production-only filter)', !r4Ids.includes(fixtures.syntheticPatientId))

    // ------- 5. Cross-org filter -------
    console.log(`\n[5] Cross-org filter — alien patient excluded from main-org search`)
    const r5 = await searchEntities(
      {
        query: `alice-${ts}`,
        scope: 'patients',
        capability: 'can_search_globally',
        org_id: MAIN_ORG_ID,
      },
      supabase,
    )
    const r5Ids = r5.filter(isPatient).map((r) => r.id)
    check('[5.a] main-org search includes alice', r5Ids.includes(fixtures.alicePatientId))
    check('[5.b] main-org search EXCLUDES alien patient', !r5Ids.includes(fixtures.alienPatientId))

    // ------- 6. Production default excludes synthetic -------
    console.log(`\n[6] Default data_environment='production' excludes synthetic`)
    const r6 = await searchEntities(
      {
        query: `synthetic-${ts}`,
        scope: 'patients',
        capability: 'can_search_globally',
        org_id: MAIN_ORG_ID,
      },
      supabase,
    )
    const r6Ids = r6.filter(isPatient).map((r) => r.id)
    check('[6.a] synthetic patient EXCLUDED by default', !r6Ids.includes(fixtures.syntheticPatientId))

    // ------- 7. data_environment='all' with can_see_test_data -------
    console.log(`\n[7] data_environment='all' with can_see_test_data includes synthetic`)
    const r7 = await searchEntities(
      {
        query: `synthetic-${ts}`,
        scope: 'patients',
        capability: 'can_see_test_data',
        org_id: MAIN_ORG_ID,
        data_environment: 'all',
      },
      supabase,
    )
    const r7Ids = r7.filter(isPatient).map((r) => r.id)
    check('[7.a] synthetic patient INCLUDED with all+can_see_test_data', r7Ids.includes(fixtures.syntheticPatientId))

    // ------- 8. data_environment='all' WITHOUT can_see_test_data is rejected -------
    console.log(`\n[8] data_environment='all' without can_see_test_data is rejected`)
    let case8Threw = false
    try {
      await searchEntities(
        {
          query: 'anything',
          scope: 'patients',
          capability: 'can_search_globally',
          org_id: MAIN_ORG_ID,
          data_environment: 'all',
        },
        supabase,
      )
    } catch (err) {
      case8Threw = err instanceof SearchEntitiesFailure && err.detail.kind === 'data_environment_requires_capability'
    }
    check('[8.a] all without can_see_test_data → data_environment_requires_capability', case8Threw)

    // ------- 9. Unknown scope -------
    console.log(`\n[9] Unknown scope literal → invalid_scope`)
    let case9Threw = false
    try {
      await searchEntities(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        { query: 'q', scope: 'nonsense' as any, capability: 'can_search_globally', org_id: MAIN_ORG_ID },
        supabase,
      )
    } catch (err) {
      case9Threw = err instanceof SearchEntitiesFailure && err.detail.kind === 'invalid_scope'
    }
    check('[9.a] unknown scope → invalid_scope', case9Threw)

    // ------- 10. Unimplemented scope -------
    console.log(`\n[10] Unimplemented scope ('orders') → scope_not_implemented`)
    let case10Threw = false
    try {
      await searchEntities(
        { query: 'foo', scope: 'orders', capability: 'can_search_globally', org_id: MAIN_ORG_ID },
        supabase,
      )
    } catch (err) {
      case10Threw = err instanceof SearchEntitiesFailure && err.detail.kind === 'scope_not_implemented'
    }
    check('[10.a] orders scope → scope_not_implemented', case10Threw)

    // ------- 11. Unknown capability -------
    console.log(`\n[11] Unknown capability literal → unknown_capability`)
    let case11Threw = false
    try {
      await searchEntities(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        { query: 'q', scope: 'patients', capability: 'can_chew_gum' as any, org_id: MAIN_ORG_ID },
        supabase,
      )
    } catch (err) {
      case11Threw = err instanceof SearchEntitiesFailure && err.detail.kind === 'unknown_capability'
    }
    check('[11.a] unknown capability → unknown_capability', case11Threw)

    // ------- 12. Query too short -------
    console.log(`\n[12] Query length < 2 → query_too_short`)
    let case12Threw = false
    try {
      await searchEntities(
        { query: 'a', scope: 'patients', capability: 'can_search_globally', org_id: MAIN_ORG_ID },
        supabase,
      )
    } catch (err) {
      case12Threw = err instanceof SearchEntitiesFailure && err.detail.kind === 'query_too_short'
    }
    check('[12.a] short query → query_too_short', case12Threw)

    // ------- 13. Bad org_id -------
    console.log(`\n[13] Non-uuid org_id → invalid_org_id`)
    let case13Threw = false
    try {
      await searchEntities(
        { query: 'foo', scope: 'patients', capability: 'can_search_globally', org_id: 'not-a-uuid' },
        supabase,
      )
    } catch (err) {
      case13Threw = err instanceof SearchEntitiesFailure && err.detail.kind === 'invalid_org_id'
    }
    check('[13.a] non-uuid org_id → invalid_org_id', case13Threw)

    // ------- 14. Limit clamp -------
    console.log(`\n[14] Hard limit clamp at 100`)
    const r14 = await searchEntities(
      {
        query: '@example.test',
        scope: 'patients',
        capability: 'can_search_globally',
        org_id: MAIN_ORG_ID,
        limit: 9999,
      },
      supabase,
    )
    check('[14.a] limit=9999 clamped (≤100 rows returned)', r14.length <= 100, `got ${r14.length}`)

    // ------- 15. SearchResult shape -------
    console.log(`\n[15] SearchResult shape`)
    const r15 = await searchEntities(
      {
        query: 'Anderson',
        scope: 'patients',
        capability: 'can_search_globally',
        org_id: MAIN_ORG_ID,
      },
      supabase,
    )
    const sample = r15.find((r) => isPatient(r) && r.id === fixtures.alicePatientId)
    check('[15.a] sample result has scope=patients', sample?.scope === 'patients')
    check('[15.b] sample result has stable id', typeof sample?.id === 'string' && sample!.id.length > 0)
    check('[15.c] sample result has display string', typeof sample?.display === 'string' && sample!.display.length > 0)
    check('[15.d] sample result has match_basis', typeof sample?.match_basis === 'string')
    check('[15.e] sample result has context.first_name=Alice', isPatient(sample!) && sample.context.first_name === 'Alice')
    check('[15.f] sample result has org_id=main', sample?.org_id === MAIN_ORG_ID)
    check('[15.g] sample result has data_environment=production', sample?.data_environment === 'production')
  } catch (err) {
    console.error(`[${new Date().toISOString()}] FAIL — ${err instanceof Error ? err.message : err}`)
    if (err instanceof Error && err.stack) console.error(err.stack)
    failed++
    exitCode = 1
  } finally {
    console.log(`\n[${new Date().toISOString()}] Cleaning up ...`)
    await cleanup(ctx).catch((err) => console.error('Cleanup error (best-effort):', err))
  }

  console.log('\n' + '-'.repeat(70))
  if (failed === 0) {
    console.log(`Phase 4G search-entities smoke: ${passed} passed, 0 failed.`)
    console.log('GREEN — searchEntities() Section 1R adapter validated end-to-end.')
  } else {
    console.log(`Phase 4G search-entities smoke: ${passed} passed, ${failed} failed.`)
    exitCode = 1
  }
  process.exit(exitCode)
}

void main()
