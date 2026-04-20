import type { SupabaseClient } from '@supabase/supabase-js'
import type { OutboundJobType } from '@/lib/jobs/outboundJobTypes'

/**
 * Inserts a durable outbound job (fast). Processing runs via cron + service role.
 */
export async function enqueueOutboundJob(
  admin: SupabaseClient,
  jobType: OutboundJobType | string,
  payload: Record<string, unknown>
): Promise<void> {
  const { error } = await admin.from('outbound_jobs').insert({
    job_type: jobType,
    payload,
    status: 'pending',
    run_after: new Date().toISOString(),
  })
  if (error) {
    console.error('enqueueOutboundJob', jobType, error)
  }
}
