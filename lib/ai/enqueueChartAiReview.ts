import type { SupabaseClient } from '@supabase/supabase-js'
import { enqueueOutboundJob } from '@/lib/jobs/enqueueOutboundJob'
import { OUTBOUND_JOB_TYPES } from '@/lib/jobs/outboundJobTypes'

type EnqueueChartAiReviewInput = {
  patientId: string
  triggerEventType: string
  triggerRef?: string | null
}

/**
 * Queue a full-chart AI draft refresh whenever materially relevant data changes.
 */
export async function enqueueChartAiReview(
  admin: SupabaseClient,
  input: EnqueueChartAiReviewInput
): Promise<void> {
  await enqueueOutboundJob(admin, OUTBOUND_JOB_TYPES.chartAiReview, {
    patient_id: input.patientId,
    trigger_event_type: input.triggerEventType,
    trigger_ref: input.triggerRef ?? null,
    requested_at: new Date().toISOString(),
  })
}
