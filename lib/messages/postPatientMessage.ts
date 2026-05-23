/**
 * Phase 4H-communications c2 — postPatientMessage TS entry point.
 *
 * Patient-side chat compose. Calls the `post_patient_message` SECURITY DEFINER
 * orchestrator which handles validation + idempotency + fingerprint match-or-
 * mismatch + insert + read-pointer advance in a single transaction.
 *
 * Discipline (mirrors lib/inbox/recordInboxMessage.ts pattern):
 *   * Zod validation on args.
 *   * Fingerprint computed via the centralized helper at
 *     `computeMessageRequestFingerprint.ts` (no other call site re-implements
 *     normalization rules).
 *   * Idempotency:
 *       - same (thread_id, client_message_id) + same fingerprint
 *         → returns existing row (`idempotent_replay: true`)
 *       - same (thread_id, client_message_id) + DIFFERENT fingerprint
 *         → SECURITY DEFINER raises with errcode 'unique_violation' which
 *           this wrapper translates to a typed `IdempotencyMismatchError`
 *           that API routes map to HTTP 409 `idempotency_key_reuse_mismatch`.
 *   * Timeline event emission happens TS-side after the RPC returns
 *     (the RPC succeeded → the transaction committed → safe to emit).
 *
 * TODO (c4 — when patient_action_items substrate lands):
 *   When `patient_action_items` exists, also resolve the most recent
 *   unresolved provider_message action item bound to this thread in the
 *   same transaction (move that step into the SECURITY DEFINER orchestrator
 *   so it's atomic with the message insert). The c4 preflight covers the
 *   migration + the wrapper update. c2 deliberately does NOT call any
 *   action-item APIs because the table does not exist substrate-side
 *   (confirmed by lib/intake/documents/route-patient-document.ts:38 comment).
 */

import { z } from 'zod'
import type { SupabaseClient } from '@supabase/supabase-js'
import { createAdminClient } from '@/lib/supabase/admin'
import { insertTimelineEvent } from '@/lib/events'
import { computeMessageRequestFingerprint } from './computeMessageRequestFingerprint'

type MessageTraceLineage = {
  source_event_id?: string
  candidate_id?: string
  resolver_id?: string
  commit_id?: string
}

// =====================================================================
// Errors
// =====================================================================

/**
 * Raised when the same client_message_id is sent twice with different
 * request payloads. API route layer maps this to HTTP 409.
 */
export class IdempotencyMismatchError extends Error {
  readonly code = 'idempotency_key_reuse_mismatch' as const
  readonly existingMessageId: string | null

  constructor(message: string, existingMessageId: string | null) {
    super(message)
    this.name = 'IdempotencyMismatchError'
    this.existingMessageId = existingMessageId
  }
}

// =====================================================================
// Args + result
// =====================================================================

export const PostPatientMessageArgs = z.object({
  /** message_threads.id this message belongs to. */
  thread_id: z.string().min(1),
  /**
   * Patient back-pointer. Caller is responsible for ensuring this matches
   * the session-authenticated patient (the API route layer enforces this
   * via assertPatientDashboardAccess; library callers must enforce
   * equivalently). The SECURITY DEFINER also verifies thread ownership.
   */
  patient_id: z.string().min(1),
  /** Message body. 1-8000 chars; the SQL CHECK enforces too. */
  body: z.string().min(1).max(8000),
  /** Client-generated UUID-shaped idempotency anchor; REQUIRED on patient POST. */
  client_message_id: z.string().min(1),
  /** Optional metadata (interaction_context per §1Q.23 etc.). */
  metadata: z.record(z.string(), z.unknown()).default({}),
  /** Optional attachment refs (forward-compat; not used in c2). */
  attachment_refs: z.array(z.string()).optional(),
  /** Optional WP-EXEC-001 outbound/message trace lineage envelope. */
  trace_lineage: z
    .object({
      source_event_id: z.string().optional(),
      candidate_id: z.string().optional(),
      resolver_id: z.string().optional(),
      commit_id: z.string().optional(),
    })
    .optional(),
})

export type PostPatientMessageArgs = z.infer<typeof PostPatientMessageArgs>

export interface PostPatientMessageResult {
  message_id: string
  created_at: string
  idempotent_replay: boolean
  thread_id: string
  care_program_id: string
}

// =====================================================================
// Public entry point
// =====================================================================

export async function postPatientMessage(
  rawArgs: unknown,
  supabase?: SupabaseClient,
): Promise<PostPatientMessageResult> {
  const args = PostPatientMessageArgs.parse(rawArgs)
  const traceLineage: MessageTraceLineage | undefined = args.trace_lineage

  const fingerprint = computeMessageRequestFingerprint({
    threadId: args.thread_id,
    body: args.body,
    attachmentRefs: args.attachment_refs,
    authorIdentity: `patient:${args.patient_id}`,
  })

  const sb = supabase ?? createAdminClient()

  const { data, error } = await sb.rpc('post_patient_message', {
    p_thread_id: args.thread_id,
    p_patient_id: args.patient_id,
    p_body: args.body,
    p_client_message_id: args.client_message_id,
    p_client_request_fingerprint: fingerprint,
    p_metadata: {
      ...args.metadata,
      ...(traceLineage ? { trace_lineage: traceLineage } : {}),
    },
  })

  if (error) {
    // The SECURITY DEFINER raises errcode 'unique_violation' (mapped from
    // PG '23505') on idempotency-key-reuse-mismatch with a `detail` payload
    // containing `existing_message_id=<uuid>`.
    if (error.code === '23505' && error.message.includes('idempotency_key_reuse_mismatch')) {
      const existingMatch = /existing_message_id=([0-9a-f-]+)/i.exec(error.details ?? '')
      throw new IdempotencyMismatchError(
        `postPatientMessage: client_message_id reused with different payload ` +
          `(thread=${args.thread_id}, client_message_id=${args.client_message_id})`,
        existingMatch ? existingMatch[1] : null,
      )
    }

    throw new Error(
      `postPatientMessage: post_patient_message RPC failed ` +
        `(thread=${args.thread_id}, patient=${args.patient_id}): ` +
        `${error.message} (code: ${error.code ?? 'unknown'})`,
    )
  }

  if (!data || typeof data !== 'object') {
    throw new Error(
      `postPatientMessage: RPC returned non-object: ${JSON.stringify(data)}`,
    )
  }

  const result = data as PostPatientMessageResult

  // Emit timeline event AFTER the RPC commits. The RPC has already
  // succeeded so we know the transaction is durable.
  // (Timeline emission is non-blocking by design per §1H.3 idempotency —
  // a failed emit logs but does not fail the compose.)
  if (!result.idempotent_replay) {
    await insertTimelineEvent(
      {
        eventType: 'patient_chat_message_sent',
        patientId: args.patient_id,
        body: args.body.length > 200 ? `${args.body.slice(0, 200)}…` : args.body,
        careProgramId: result.care_program_id,
        payload: {
          message_id: result.message_id,
          thread_id: result.thread_id,
          client_message_id: args.client_message_id,
          ...(traceLineage ? { trace_lineage: traceLineage } : {}),
        },
      },
      sb,
    )
  }

  return result
}
