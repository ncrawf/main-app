/**
 * Phase 4F event registry barrel + typed insert helpers per Section 1H.5
 * + 1Q.7 + system primitives addendum #6.
 *
 * Use these helpers (or pass values from the typed catalogs) instead of
 * inline string literals at every `audit_events` / `patient_timeline_events`
 * write site. CI lint at `scripts/lint-event-types.ts` enforces.
 *
 * Read sites are exempt — filtering reads by `event_type` is fine because
 * a typo there returns no rows rather than corrupting the audit ledger.
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import { createAdminClient } from '@/lib/supabase/admin'
import { assertKnownAuditAction, type AuditAction } from './audit-actions'
import { assertKnownTimelineEventType, type TimelineEventType } from './timeline-event-types'

export {
  AUDIT_ACTIONS,
  AuditActionSchema,
  CAPABILITY_AUDIT_ACTIONS,
  EXTERNAL_RAIL_AUDIT_ACTIONS,
  INTAKE_AUDIT_ACTIONS,
  PATIENT_CASE_AUDIT_ACTIONS,
  RULE_AND_NOTIFICATION_AUDIT_ACTIONS,
  assertKnownAuditAction,
  isKnownAuditAction,
  type AuditAction,
} from './audit-actions'

export {
  CLINICAL_TIMELINE_TYPES,
  COMMERCE_TIMELINE_TYPES,
  NOTIFICATION_DISPATCH_TIMELINE_TYPES,
  ORDER_LIFECYCLE_TIMELINE_TYPES,
  PATIENT_PORTAL_TIMELINE_TYPES,
  REFILL_TIMELINE_TYPES,
  STAFF_ANNOTATION_TIMELINE_TYPES,
  SUPPORT_TIMELINE_TYPES,
  TIMELINE_EVENT_TYPES,
  TREATMENT_LIFECYCLE_TIMELINE_TYPES,
  TimelineEventTypeSchema,
  assertKnownTimelineEventType,
  isKnownTimelineEventType,
  type TimelineEventType,
} from './timeline-event-types'

// ---------------------------------------------------------------------------
// Typed insert helpers
//
// Action / event_type parameters are typed against the registry, so passing
// an unknown literal is a TS compile error. The runtime guards
// (`assertKnown*`) catch dynamically-built action strings (e.g. derived
// from external webhooks) before they reach the DB.
// ---------------------------------------------------------------------------

export type InsertAuditEventInput = {
  /** Must come from `AUDIT_ACTIONS` — TS enforces at compile, runtime guard catches dynamic values. */
  action: AuditAction
  resourceType: string
  resourceId?: string | null
  patientId?: string | null
  actorUserId?: string | null
  /** Per primitives addendum #1 — orchestrator emissions populate this; manual call sites should pass it. */
  actorKind?: string | null
  /** Per Section 1U — orchestrator populates from session context; manual call sites can leave undefined. */
  orgId?: string | null
  metadata?: Record<string, unknown>
}

/**
 * Insert one `audit_events` row using the canonical Phase 4F vocabulary.
 *
 * Sole canonical entry point for `audit_events` writes outside the Phase 4A
 * orchestrator. Replaced the legacy `lib/audit/logAuditEvent` helper as part
 * of the strict-lint migration (Phase 4F follow-up).
 *
 * Errors are swallowed and logged — audit writes are non-blocking by design
 * per Section 1H.3 idempotency.
 */
export async function insertAuditEvent(
  input: InsertAuditEventInput,
  supabase?: SupabaseClient,
): Promise<{ ok: true; audit_event_id: string | null } | { ok: false; error: string }> {
  // Catch dynamically-built action strings that bypassed compile-time enforcement.
  assertKnownAuditAction(input.action)

  const client = supabase ?? createAdminClient()
  const row: Record<string, unknown> = {
    actor_user_id: input.actorUserId ?? null,
    action: input.action,
    resource_type: input.resourceType,
    resource_id: input.resourceId ?? null,
    patient_id: input.patientId ?? null,
    metadata: input.metadata ?? {},
  }
  if (input.actorKind !== undefined) row.actor_kind = input.actorKind
  if (input.orgId !== undefined) row.org_id = input.orgId

  // Phase 4H-pre commit 5 — surface the inserted row id on success so
  // callers that need the audit lineage (e.g. lib/rules/runtime/dispatcher.ts)
  // can chain it. Existing callers that only check `.ok` are unaffected.
  const { data, error } = await client
    .from('audit_events')
    .insert(row)
    .select('id')
    .single()
  if (error) {
    console.error('[insertAuditEvent] failed', { action: input.action, error })
    return { ok: false, error: error.message }
  }
  const auditEventId = (data as { id: string } | null)?.id ?? null
  return { ok: true, audit_event_id: auditEventId }
}

export type InsertTimelineEventInput = {
  /** Must come from `TIMELINE_EVENT_TYPES` — TS enforces at compile, runtime guard catches dynamic values. */
  eventType: TimelineEventType
  patientId: string
  body?: string | null
  payload?: Record<string, unknown>
  actorUserId?: string | null
  careProgramId?: string | null
  treatmentItemId?: string | null
}

/**
 * Insert one `patient_timeline_events` row using the canonical Phase 4F
 * vocabulary. Per Section 1H — patient-facing memory; values can carry
 * narrative pointers but never PHI values that belong in canonical tables
 * (use `patient_state_observations` for those).
 */
export async function insertTimelineEvent(
  input: InsertTimelineEventInput,
  supabase?: SupabaseClient,
): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  assertKnownTimelineEventType(input.eventType)

  const client = supabase ?? createAdminClient()
  const row: Record<string, unknown> = {
    patient_id: input.patientId,
    event_type: input.eventType,
    body: input.body ?? null,
    payload: input.payload ?? {},
    actor_user_id: input.actorUserId ?? null,
  }
  if (input.careProgramId !== undefined) row.care_program_id = input.careProgramId
  if (input.treatmentItemId !== undefined) row.treatment_item_id = input.treatmentItemId

  const { data, error } = await client
    .from('patient_timeline_events')
    .insert(row)
    .select('id')
    .single()
  if (error || !data) {
    console.error('[insertTimelineEvent] failed', { eventType: input.eventType, error })
    return { ok: false, error: error?.message ?? 'insert failed' }
  }
  return { ok: true, id: (data as { id: string }).id }
}
