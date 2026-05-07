/**
 * Phase 4G — Section 1R search adapter types.
 *
 * The binding contract per `system_map_three_layers_60706286.plan.md` §1R.2:
 *
 *   searchEntities({
 *     query: string,
 *     scope: 'patients' | 'orders' | 'messages' | 'documents' | 'lab_orders' |
 *            'subscriptions' | 'action_items' | 'all',
 *     capability: Capability,
 *     org_id: string,
 *     data_environment?: 'production' | 'all',
 *     limit?: number,
 *     offset?: number,
 *   }): Promise<SearchResult[]>
 *
 * Direct LIKE / ILIKE queries from app code are forbidden by CI lint
 * (`scripts/lint-direct-like-queries.ts`); every staff search call site
 * routes through `searchEntities()`.
 */

import type { Capability } from '@/lib/auth/capabilities'

/** Section 1R.3 indexed entities + 'all' for cross-scope search. */
export type SearchScope =
  | 'patients'
  | 'orders'
  | 'messages'
  | 'documents'
  | 'lab_orders'
  | 'subscriptions'
  | 'action_items'
  | 'all'

export const SEARCH_SCOPES: ReadonlyArray<SearchScope> = [
  'patients',
  'orders',
  'messages',
  'documents',
  'lab_orders',
  'subscriptions',
  'action_items',
  'all',
] as const

const SEARCH_SCOPE_SET: ReadonlySet<string> = new Set<string>(SEARCH_SCOPES)

export function isKnownSearchScope(value: string): value is SearchScope {
  return SEARCH_SCOPE_SET.has(value)
}

/** v1 — only 'patients' is implemented. Other scopes throw `ScopeNotImplementedError`. */
export const IMPLEMENTED_SEARCH_SCOPES: ReadonlySet<SearchScope> = new Set<SearchScope>([
  'patients',
])

/**
 * Per primitives addendum #4: production rows are the default visible set.
 * Non-production access requires `can_see_test_data` capability per 1R.4.
 */
export type SearchDataEnvironmentFilter = 'production' | 'all'

export interface SearchEntitiesArgs {
  /** User-supplied query string. Trimmed; min 2 chars enforced by adapter. */
  query: string
  /** What kind of entity to search; determines which adapter implementation runs. */
  scope: SearchScope
  /**
   * Caller's capability per Section 1R.4. The adapter validates the
   * capability is known (typed against `Capability`), but the AUTHORIZATION
   * decision (does this user actually hold this capability?) lives upstream
   * at the route boundary via `requireCapability` per Section 1D. The
   * adapter trusts that the caller has already passed that gate.
   */
  capability: Capability
  /**
   * Section 1U: PHI never crosses `org_id`. Required on every call.
   * The adapter applies this as a hard filter; cross-org leakage is
   * structurally impossible via this entry point.
   */
  org_id: string
  /**
   * Default `'production'`. `'all'` includes synthetic / staging /
   * internal_qa rows and requires `can_see_test_data` per 1R.4 +
   * primitives addendum #4. The adapter validates this at runtime.
   */
  data_environment?: SearchDataEnvironmentFilter
  /** Max results to return. Default 25. Hard ceiling 100 (adapter clamps). */
  limit?: number
  offset?: number
}

/**
 * One match returned to the caller. A discriminated union per scope so the
 * UI can render the right card without reflecting on the underlying row.
 *
 * `match_basis` names which indexed column produced the hit so the UI can
 * highlight the relevant fragment ("matched: email") + so debug tooling
 * can profile which signals dominate searches.
 */
export type SearchResult =
  | PatientSearchResult
  | OrderSearchResult
  | MessageSearchResult
  | DocumentSearchResult
  | LabOrderSearchResult
  | SubscriptionSearchResult
  | ActionItemSearchResult

export interface PatientSearchResult {
  scope: 'patients'
  /** Stable patient id; UI uses this to navigate to the chart. */
  id: string
  /** Single-line display string assembled by the adapter. */
  display: string
  match_basis: 'first_name' | 'last_name' | 'email' | 'phone' | 'dob' | 'composite'
  similarity: number | null
  /** Per primitives addendum #4 — surfaced so the UI can flag synthetic rows. */
  data_environment: 'production' | 'staging' | 'internal_qa' | 'synthetic'
  /** Per Section 1U — surfaced so cross-org instrumentation is observable. */
  org_id: string
  context: {
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    dob: string | null
  }
}

export interface OrderSearchResult {
  scope: 'orders'
  id: string
  display: string
  match_basis: string
  similarity: number | null
  data_environment: 'production' | 'staging' | 'internal_qa' | 'synthetic'
  org_id: string
  context: Record<string, unknown>
}

export interface MessageSearchResult {
  scope: 'messages'
  id: string
  display: string
  match_basis: string
  similarity: number | null
  data_environment: 'production' | 'staging' | 'internal_qa' | 'synthetic'
  org_id: string
  context: Record<string, unknown>
}

export interface DocumentSearchResult {
  scope: 'documents'
  id: string
  display: string
  match_basis: string
  similarity: number | null
  data_environment: 'production' | 'staging' | 'internal_qa' | 'synthetic'
  org_id: string
  context: Record<string, unknown>
}

export interface LabOrderSearchResult {
  scope: 'lab_orders'
  id: string
  display: string
  match_basis: string
  similarity: number | null
  data_environment: 'production' | 'staging' | 'internal_qa' | 'synthetic'
  org_id: string
  context: Record<string, unknown>
}

export interface SubscriptionSearchResult {
  scope: 'subscriptions'
  id: string
  display: string
  match_basis: string
  similarity: number | null
  data_environment: 'production' | 'staging' | 'internal_qa' | 'synthetic'
  org_id: string
  context: Record<string, unknown>
}

export interface ActionItemSearchResult {
  scope: 'action_items'
  id: string
  display: string
  match_basis: string
  similarity: number | null
  data_environment: 'production' | 'staging' | 'internal_qa' | 'synthetic'
  org_id: string
  context: Record<string, unknown>
}

/**
 * Discriminated error type so route handlers can map each failure to a
 * stable HTTP status without parsing free-form messages.
 */
export type SearchEntitiesError =
  | { kind: 'invalid_scope'; scope: string }
  | { kind: 'scope_not_implemented'; scope: SearchScope }
  | { kind: 'unknown_capability'; capability: string }
  | { kind: 'query_too_short'; min: number }
  | { kind: 'data_environment_requires_capability'; required: 'can_see_test_data' }
  | { kind: 'invalid_org_id'; reason: string }

export class SearchEntitiesFailure extends Error {
  constructor(public readonly detail: SearchEntitiesError) {
    super(JSON.stringify(detail))
    this.name = 'SearchEntitiesFailure'
  }
}

/** Specific subclass surfaces the v1 'patients-only' shape per Section 1R.5. */
export class ScopeNotImplementedError extends SearchEntitiesFailure {
  constructor(scope: SearchScope) {
    super({ kind: 'scope_not_implemented', scope })
    this.name = 'ScopeNotImplementedError'
  }
}
