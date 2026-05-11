/**
 * Phase 4H-communications c2 — markThreadRead TS wrapper.
 *
 * Thin TS wrapper around the `mark_thread_read` SECURITY DEFINER. Mirrors the
 * `lib/inbox/recordInboxMessage.ts` pattern from c1.
 *
 * Discipline:
 *   * Zod validation on args
 *   * Monotonic + (created_at, id) tie-break safe via the SQL function
 *   * Returns `{advanced: boolean, last_read_message_id: string, ...}`
 */

import { z } from 'zod'
import type { SupabaseClient } from '@supabase/supabase-js'
import { createAdminClient } from '@/lib/supabase/admin'

export const MarkThreadReadArgs = z.object({
  thread_id: z.string().min(1),
  participant_id: z.string().min(1),
  message_id: z.string().min(1),
})

export type MarkThreadReadArgs = z.infer<typeof MarkThreadReadArgs>

export type MarkThreadReadResult =
  | {
      advanced: true
      last_read_message_id: string
      last_read_at: string
    }
  | {
      advanced: false
      last_read_message_id: string | null
      reason: string
    }

export async function markThreadRead(
  rawArgs: unknown,
  supabase?: SupabaseClient,
): Promise<MarkThreadReadResult> {
  const args = MarkThreadReadArgs.parse(rawArgs)

  const sb = supabase ?? createAdminClient()

  const { data, error } = await sb.rpc('mark_thread_read', {
    p_thread_id: args.thread_id,
    p_participant_id: args.participant_id,
    p_message_id: args.message_id,
  })

  if (error) {
    throw new Error(
      `markThreadRead: mark_thread_read RPC failed ` +
        `(thread=${args.thread_id}, participant=${args.participant_id}, message=${args.message_id}): ` +
        `${error.message} (code: ${error.code ?? 'unknown'})`,
    )
  }

  if (!data || typeof data !== 'object') {
    throw new Error(
      `markThreadRead: RPC returned non-object: ${JSON.stringify(data)}`,
    )
  }

  return data as MarkThreadReadResult
}
