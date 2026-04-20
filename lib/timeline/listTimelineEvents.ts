import type { SupabaseClient } from '@supabase/supabase-js'

export type TimelineEventRow = {
  id: string
  event_type: string
  body: string | null
  payload: Record<string, unknown>
  created_at: string
  actor_user_id: string | null
  actor_display_name: string | null
}

export async function listTimelineEvents(
  supabase: SupabaseClient,
  patientId: string
): Promise<TimelineEventRow[]> {
  const { data: events, error } = await supabase
    .from('patient_timeline_events')
    .select('id, event_type, body, payload, created_at, actor_user_id')
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    throw new Error('Failed to load timeline')
  }

  const rows = events ?? []
  if (rows.length === 0) return []

  const actorIds = [...new Set(rows.map((r) => r.actor_user_id))]
  const { data: staff } = await supabase.from('staff_profiles').select('id, display_name').in('id', actorIds)

  const names = new Map((staff ?? []).map((s) => [s.id, s.display_name]))

  return rows.map((r) => ({
    id: r.id,
    event_type: r.event_type,
    body: r.body,
    payload: (r.payload as Record<string, unknown>) ?? {},
    created_at: r.created_at,
    actor_user_id: r.actor_user_id,
    actor_display_name: r.actor_user_id ? (names.get(r.actor_user_id) ?? null) : null,
  }))
}
