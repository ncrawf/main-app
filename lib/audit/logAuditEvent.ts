import { createAdminClient } from '@/lib/supabase/admin'

type Params = {
  actorUserId: string | null
  action: string
  resourceType: string
  resourceId?: string | null
  patientId?: string | null
  metadata?: Record<string, unknown>
}

/**
 * Append-only audit row. Uses service role so inserts are trusted from API routes
 * after you verify the session server-side.
 */
export async function logAuditEvent(params: Params): Promise<void> {
  const supabase = createAdminClient()
  const { error } = await supabase.from('audit_events').insert({
    actor_user_id: params.actorUserId,
    action: params.action,
    resource_type: params.resourceType,
    resource_id: params.resourceId ?? null,
    patient_id: params.patientId ?? null,
    metadata: params.metadata ?? {},
  })

  if (error) {
    console.error('audit insert failed', error)
  }
}
