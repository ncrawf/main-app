import type { SupabaseClient } from '@supabase/supabase-js'

function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

export type SupportRequestOpsRow = {
  source_timeline_event_id: string
  status: string
}

/** Map source timeline event id → ops row. Empty map if table missing or error. */
export async function loadSupportRequestOpsBySourceEventId(
  supabase: SupabaseClient,
  patientId: string
): Promise<Map<string, SupportRequestOpsRow>> {
  const { data, error } = await supabase
    .from('patient_support_requests')
    .select('source_timeline_event_id, status')
    .eq('patient_id', patientId)

  if (error) {
    if (!isMissingRelationError(error)) console.error('loadSupportRequestOpsBySourceEventId', error)
    return new Map()
  }

  const map = new Map<string, SupportRequestOpsRow>()
  for (const row of data ?? []) {
    const id = row.source_timeline_event_id as string
    map.set(id, { source_timeline_event_id: id, status: String(row.status) })
  }
  return map
}

/** Source timeline ids that have a reviewed_at set in ops (table may be absent → null). */
export async function loadTreatmentCheckinReviewedSourceIds(
  supabase: SupabaseClient,
  patientIds: string[]
): Promise<Set<string> | null> {
  if (patientIds.length === 0) return new Set()
  const { data, error } = await supabase
    .from('patient_treatment_checkins')
    .select('source_timeline_event_id')
    .in('patient_id', patientIds)
    .not('reviewed_at', 'is', null)

  if (error) {
    if (isMissingRelationError(error)) return null
    console.error('loadTreatmentCheckinReviewedSourceIds', error)
    return new Set()
  }

  return new Set(
    (data ?? [])
      .map((r) => r.source_timeline_event_id as string | undefined)
      .filter((id): id is string => typeof id === 'string' && id.length > 0)
  )
}

export type TreatmentCheckinOpsReviewMeta = {
  reviewedAt: string
  reviewerStaffId: string | null
}

/** Ops-backed review timestamps for check-ins (fills gaps when timeline review row is missing). */
export async function loadTreatmentCheckinReviewMetaBySourceId(
  supabase: SupabaseClient,
  patientId: string
): Promise<Map<string, TreatmentCheckinOpsReviewMeta>> {
  const { data, error } = await supabase
    .from('patient_treatment_checkins')
    .select('source_timeline_event_id, reviewed_at, reviewed_by_staff_id')
    .eq('patient_id', patientId)
    .not('reviewed_at', 'is', null)

  if (error) {
    if (!isMissingRelationError(error)) console.error('loadTreatmentCheckinReviewMetaBySourceId', error)
    return new Map()
  }

  const map = new Map<string, TreatmentCheckinOpsReviewMeta>()
  for (const row of data ?? []) {
    const sid = row.source_timeline_event_id as string
    const reviewedAt = row.reviewed_at as string
    if (!sid || !reviewedAt) continue
    map.set(sid, {
      reviewedAt,
      reviewerStaffId: (row.reviewed_by_staff_id as string | null) ?? null,
    })
  }
  return map
}
