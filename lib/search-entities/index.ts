/**
 * Phase 4G — Section 1R search adapter entry point.
 *
 * `searchEntities()` is the binding contract per system map §1R.2; every
 * staff-facing search at every surface routes through this single function.
 * Direct LIKE / ILIKE queries against domain tables from app code are
 * forbidden by CI lint (`scripts/lint-direct-like-queries.ts`).
 *
 * Discipline applied here (orchestrator-tier):
 *   - Validate scope against `SEARCH_SCOPES`; unknown → `invalid_scope`.
 *   - Validate scope is implemented in v1; not yet → `scope_not_implemented`.
 *   - Validate capability against the `Capability` union; unknown → fail.
 *   - Validate query length (>= 2 chars after trim).
 *   - Enforce `data_environment === 'all'` requires `can_see_test_data`
 *     per §1R.4 + primitives addendum #4.
 *   - Validate org_id shape (uuid). Per §1U: PHI never crosses org_id;
 *     the adapter applies it as a hard server-side filter.
 *
 * Authorization (does this user actually hold this capability?) lives at
 * the route boundary upstream via `requireCapability` per Section 1D.
 * The adapter trusts the caller has passed that gate; the explicit
 * `capability` argument here is intent-declaration + a hook for future
 * adapter-level filtering (e.g. queue-scoping for providers without
 * `can_search_globally`).
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import type { Capability } from '@/lib/auth/capabilities'
import { executeSearch } from './adapters/postgres'
import {
  IMPLEMENTED_SEARCH_SCOPES,
  isKnownSearchScope,
  SearchEntitiesFailure,
  type SearchEntitiesArgs,
  type SearchResult,
} from './types'

export {
  IMPLEMENTED_SEARCH_SCOPES,
  isKnownSearchScope,
  SEARCH_SCOPES,
  SearchEntitiesFailure,
  ScopeNotImplementedError,
  type ActionItemSearchResult,
  type DocumentSearchResult,
  type LabOrderSearchResult,
  type MessageSearchResult,
  type OrderSearchResult,
  type PatientSearchResult,
  type SearchDataEnvironmentFilter,
  type SearchEntitiesArgs,
  type SearchEntitiesError,
  type SearchResult,
  type SearchScope,
  type SubscriptionSearchResult,
} from './types'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const MIN_QUERY_LENGTH = 2

const KNOWN_CAPABILITIES: ReadonlySet<string> = new Set<Capability>([
  'can_prescribe',
  'can_sign_clinical_visit',
  'can_publish_lab_result',
  'can_view_clinical_history',
  'can_use_chart_ai_review',
  'can_collaborate_patient_case',
  'can_clinical_treatment_authoring',
  'can_edit_tracking',
  'can_advance_fulfillment',
  'can_refund',
  'can_resolve_support_request',
  'can_send_nonclinical_message',
  'can_manage_staff',
  'can_manage_catalog',
  'can_view_audit_log',
  'can_impersonate_patient',
  'can_manage_system_settings',
  'can_search_globally',
  'can_see_test_data',
])

/**
 * Run a staff search against the current backend (Postgres pg_trgm + GIN
 * in v1). Returns up to `limit` results; never throws on "no matches" —
 * an empty array is the success-with-no-hits shape.
 *
 * Throws `SearchEntitiesFailure` for argument-shape problems so the route
 * handler can map each error kind to a stable HTTP status.
 */
export async function searchEntities(
  args: SearchEntitiesArgs,
  supabase?: SupabaseClient,
): Promise<SearchResult[]> {
  // 1. Scope shape.
  if (!isKnownSearchScope(args.scope)) {
    throw new SearchEntitiesFailure({ kind: 'invalid_scope', scope: args.scope })
  }
  if (!IMPLEMENTED_SEARCH_SCOPES.has(args.scope)) {
    throw new SearchEntitiesFailure({ kind: 'scope_not_implemented', scope: args.scope })
  }

  // 2. Capability shape — runtime guard (TS already enforces at compile
  //    time when callers use the typed argument).
  if (!KNOWN_CAPABILITIES.has(args.capability)) {
    throw new SearchEntitiesFailure({ kind: 'unknown_capability', capability: args.capability })
  }

  // 3. Query length.
  const queryTrimmed = (args.query ?? '').trim()
  if (queryTrimmed.length < MIN_QUERY_LENGTH) {
    throw new SearchEntitiesFailure({ kind: 'query_too_short', min: MIN_QUERY_LENGTH })
  }

  // 4. data_environment policy: 'all' requires `can_see_test_data`.
  const dataEnv = args.data_environment ?? 'production'
  if (dataEnv === 'all' && args.capability !== 'can_see_test_data') {
    // Note: this is a structural check only. Upstream `requireCapability`
    // is the authoritative gate. We re-check here so a route handler that
    // forgets to gate doesn't accidentally surface synthetic data via the
    // adapter. See §1R.4 + primitives addendum #4.
    throw new SearchEntitiesFailure({
      kind: 'data_environment_requires_capability',
      required: 'can_see_test_data',
    })
  }

  // 5. org_id shape. PHI never crosses org_id (§1U).
  if (!args.org_id || !UUID_RE.test(args.org_id)) {
    throw new SearchEntitiesFailure({ kind: 'invalid_org_id', reason: 'expected uuid' })
  }

  // 6. Hand off to the backend adapter.
  return executeSearch({ ...args, query: queryTrimmed, data_environment: dataEnv }, supabase)
}
