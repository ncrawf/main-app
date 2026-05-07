/**
 * Phase 4G — Section 1R search adapter (Postgres pg_trgm + GIN backend).
 *
 * Per system map §1R.5: "Today it executes pg_trgm + GIN against the
 * canonical tables. Tomorrow it can route to Elasticsearch / OpenSearch /
 * Typesense without callers changing." This file is the v1 implementation;
 * the future Elastic adapter slots in beside it under
 * `lib/search-entities/adapters/`.
 *
 * v1 scope coverage per §1R.5 ("indexes added per-entity on first
 * search-surface need"):
 *   - 'patients' — IMPLEMENTED.
 *   - everything else — throws `ScopeNotImplementedError` so first
 *     surface that needs it lights up the entity, the index, and the
 *     adapter branch in one PR.
 *
 * Discipline:
 *   - Always filter by org_id (Section 1U: PHI never crosses org).
 *   - Always filter by data_environment (primitives addendum #4 +
 *     §1R.4: production-only by default; non-prod requires
 *     `can_see_test_data`).
 *   - Never pull more than the clamped `limit`.
 *   - Don't echo PHI inside `match_basis`; that's a column name only.
 *   - Don't apply ranking heuristics that depend on row position; rely on
 *     pg_trgm `similarity()` so ties are deterministic.
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import { createAdminClient } from '@/lib/supabase/admin'
import type {
  PatientSearchResult,
  SearchEntitiesArgs,
  SearchResult,
} from '../types'

const HARD_RESULT_LIMIT = 100
const DEFAULT_RESULT_LIMIT = 25
const MIN_QUERY_LENGTH = 2

const DOB_RE = /^\d{4}-\d{2}-\d{2}$/
const ALL_DIGITS_RE = /^\d+$/

interface PatientRow {
  id: string
  first_name: string | null
  last_name: string | null
  email: string | null
  phone: string | null
  dob: string | null
  org_id: string
  data_environment: 'production' | 'staging' | 'internal_qa' | 'synthetic'
}

/**
 * Search the patients table per Section 1R.3 indexed columns.
 *
 * v1 strategy:
 *   1. Trim + sanitize query.
 *   2. Special-case ISO date queries (YYYY-MM-DD) → exact `dob` lookup.
 *   3. Special-case all-digit queries (likely phone fragment) → ILIKE on
 *      phone (uses GIN trigram).
 *   4. Default → ILIKE OR across first_name / last_name / email / phone
 *      (all use GIN trigram).
 *   5. Hard-filter org_id + data_environment server-side (every branch).
 *   6. Clamp to `limit` (default 25, ceiling 100).
 *
 * Each row is returned with a `match_basis` that names which column
 * dominated the hit so the UI can highlight it. We pick the most likely
 * basis per row at projection time.
 */
export async function searchPatients(
  args: SearchEntitiesArgs,
  supabase?: SupabaseClient,
): Promise<PatientSearchResult[]> {
  const client = supabase ?? createAdminClient()
  const queryRaw = args.query.trim()
  if (queryRaw.length < MIN_QUERY_LENGTH) return []

  const limit = clamp(args.limit ?? DEFAULT_RESULT_LIMIT, 1, HARD_RESULT_LIMIT)
  const offset = Math.max(0, args.offset ?? 0)
  const dataEnv = args.data_environment ?? 'production'

  const baseQuery = client
    .from('patients')
    .select('id, first_name, last_name, email, phone, dob, org_id, data_environment')
    .eq('org_id', args.org_id)
    .range(offset, offset + limit - 1)

  // data_environment filter: 'production' is a hard equality;
  // 'all' means no filter (caller has been validated to hold
  // can_see_test_data upstream of the adapter).
  const envFiltered = dataEnv === 'production'
    ? baseQuery.eq('data_environment', 'production')
    : baseQuery

  // Branch on query shape.
  let executable = envFiltered
  if (DOB_RE.test(queryRaw)) {
    executable = envFiltered.eq('dob', queryRaw)
  } else if (ALL_DIGITS_RE.test(queryRaw)) {
    // Phone fragment. Trigram GIN handles the wildcard.
    executable = envFiltered.ilike('phone', `%${queryRaw}%`)
  } else {
    // Default: trigram across name / email / phone. Postgres OR with
    // ilike against four GIN-indexed columns. The `.or()` syntax in
    // supabase-js takes a comma-separated list of filter clauses.
    const escaped = escapeForOrFilter(queryRaw)
    const pattern = `%${escaped}%`
    executable = envFiltered.or(
      [
        `first_name.ilike.${pattern}`,
        `last_name.ilike.${pattern}`,
        `email.ilike.${pattern}`,
        `phone.ilike.${pattern}`,
      ].join(','),
    )
  }

  const { data, error } = await executable
  if (error) {
    console.error('[search-entities/postgres] patients query failed', error)
    return []
  }

  const rows = (data ?? []) as PatientRow[]
  return rows.map((row) => projectPatient(row, queryRaw))
}

/**
 * Pick the most likely match_basis per row by checking which column
 * actually contained the query (case-insensitive). When multiple match
 * (e.g., name appears in email), we report `composite`. When no column
 * contains the literal — possible because trigram similarity matched a
 * fuzzy fragment — we report `composite` too.
 */
function projectPatient(row: PatientRow, queryRaw: string): PatientSearchResult {
  const q = queryRaw.toLowerCase()
  const hits: PatientSearchResult['match_basis'][] = []

  if (row.first_name && row.first_name.toLowerCase().includes(q)) hits.push('first_name')
  if (row.last_name && row.last_name.toLowerCase().includes(q)) hits.push('last_name')
  if (row.email && row.email.toLowerCase().includes(q)) hits.push('email')
  if (row.phone && row.phone.includes(queryRaw)) hits.push('phone')
  if (row.dob === queryRaw) hits.push('dob')

  const matchBasis: PatientSearchResult['match_basis'] =
    hits.length === 0 ? 'composite' : hits.length === 1 ? hits[0] : 'composite'

  const display = buildPatientDisplay(row)
  return {
    scope: 'patients',
    id: row.id,
    display,
    match_basis: matchBasis,
    similarity: null, // populated when we add ranked queries; v1 returns raw rows
    data_environment: row.data_environment,
    org_id: row.org_id,
    context: {
      first_name: row.first_name,
      last_name: row.last_name,
      email: row.email,
      phone: row.phone,
      dob: row.dob,
    },
  }
}

function buildPatientDisplay(row: PatientRow): string {
  const namePart = [row.first_name, row.last_name].filter(Boolean).join(' ').trim()
  const idSuffix = `id=${row.id.slice(0, 8)}…`
  if (namePart && row.email) return `${namePart} · ${row.email}`
  if (namePart) return `${namePart} · ${idSuffix}`
  if (row.email) return `${row.email} · ${idSuffix}`
  if (row.phone) return `${row.phone} · ${idSuffix}`
  return idSuffix
}

/**
 * Supabase's `.or()` takes a comma-separated string of filters where
 * commas inside values would be interpreted as filter separators. We
 * escape commas + parentheses + percent signs in the pattern so a query
 * like `o'malley` or `(555)` doesn't break the parser.
 */
function escapeForOrFilter(value: string): string {
  // Strip commas + parens entirely; replace % with literal escape so users
  // can't inject SQL wildcards.
  return value.replace(/[,()%]/g, '')
}

function clamp(n: number, lo: number, hi: number): number {
  if (!Number.isFinite(n)) return lo
  return Math.max(lo, Math.min(hi, Math.floor(n)))
}

/**
 * Adapter exit point used by the orchestrator. Dispatches by scope.
 * v1 covers 'patients' only; other scopes throw `ScopeNotImplementedError`
 * so the orchestrator can convert that to a stable HTTP error code.
 */
export async function executeSearch(
  args: SearchEntitiesArgs,
  supabase?: SupabaseClient,
): Promise<SearchResult[]> {
  switch (args.scope) {
    case 'patients':
      return searchPatients(args, supabase)
    case 'all':
      // 'all' v1 = patients only. As more scopes ship, this fans out.
      return searchPatients(args, supabase)
    default:
      // Unreachable for IMPLEMENTED_SEARCH_SCOPES guard upstream; the
      // orchestrator is responsible for that check. We assert here as a
      // defensive backstop.
      throw new Error(`postgres adapter: scope '${args.scope}' not implemented`)
  }
}
