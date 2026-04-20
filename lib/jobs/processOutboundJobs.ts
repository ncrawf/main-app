import type { SupabaseClient } from '@supabase/supabase-js'
import { dispatchOutboundJob } from '@/lib/jobs/dispatchOutboundJob'

const DEFAULT_BATCH = 20

function backoffSeconds(attempts: number): number {
  const capped = Math.min(attempts, 10)
  return Math.min(900, Math.pow(2, capped) * 10)
}

async function scheduleRetry(
  admin: SupabaseClient,
  job: { id: string; attempts: number; max_attempts: number },
  errMsg: string
): Promise<void> {
  const attempts = job.attempts + 1
  if (attempts >= job.max_attempts) {
    await admin
      .from('outbound_jobs')
      .update({
        status: 'dead',
        attempts,
        last_error: errMsg.slice(0, 2000),
        locked_at: null,
      })
      .eq('id', job.id)
    return
  }
  const runAfter = new Date(Date.now() + backoffSeconds(attempts) * 1000).toISOString()
  await admin
    .from('outbound_jobs')
    .update({
      status: 'pending',
      attempts,
      last_error: errMsg.slice(0, 2000),
      run_after: runAfter,
      locked_at: null,
    })
    .eq('id', job.id)
}

/**
 * Claims pending jobs and runs dispatch (idempotent per dedupe_key in handlers).
 * Intended for cron / internal caller with service role client.
 */
export async function processOutboundJobsBatch(
  admin: SupabaseClient,
  options?: { limit?: number }
): Promise<{ examined: number; completed: number; retried: number; dead: number }> {
  const limit = options?.limit ?? DEFAULT_BATCH
  const nowIso = new Date().toISOString()

  const { data: pending, error: listErr } = await admin
    .from('outbound_jobs')
    .select('id, job_type, payload, status, attempts, max_attempts, created_at')
    .eq('status', 'pending')
    .lte('run_after', nowIso)
    .order('created_at', { ascending: true })
    .limit(limit)

  if (listErr) {
    console.error('processOutboundJobsBatch.list', listErr)
    return { examined: 0, completed: 0, retried: 0, dead: 0 }
  }

  let completed = 0
  let retried = 0
  let dead = 0

  for (const row of pending ?? []) {
    const job = row as {
      id: string
      job_type: string
      payload: unknown
      attempts: number
      max_attempts: number
    }

    const { data: claimed, error: claimErr } = await admin
      .from('outbound_jobs')
      .update({ status: 'processing', locked_at: nowIso })
      .eq('id', job.id)
      .eq('status', 'pending')
      .select('id')
      .maybeSingle()

    if (claimErr || !claimed) continue

    let result: Awaited<ReturnType<typeof dispatchOutboundJob>>
    try {
      result = await dispatchOutboundJob(admin, job.job_type, job.payload)
    } catch (e) {
      await scheduleRetry(admin, job, e instanceof Error ? e.message : String(e))
      retried += 1
      continue
    }

    if (result.outcome === 'completed') {
      await admin
        .from('outbound_jobs')
        .update({
          status: 'completed',
          last_error: result.detail ? result.detail.slice(0, 500) : null,
          locked_at: null,
        })
        .eq('id', job.id)
      completed += 1
      continue
    }

    if (result.outcome === 'retry') {
      await scheduleRetry(admin, job, result.detail ?? 'retry')
      retried += 1
      continue
    }

    await admin
      .from('outbound_jobs')
      .update({
        status: 'dead',
        last_error: (result.detail ?? 'dead').slice(0, 2000),
        locked_at: null,
      })
      .eq('id', job.id)
    dead += 1
  }

  return { examined: (pending ?? []).length, completed, retried, dead }
}
