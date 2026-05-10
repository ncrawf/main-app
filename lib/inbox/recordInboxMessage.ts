/**
 * Phase 4H-in-app-inbox c1 — recordInboxMessage TS entry point.
 *
 * Per system-map `## Platform operational model` doctrine:
 * communications/inbox is a first-class operational sibling under
 * Patient. This module is the substrate-side write path for the
 * one-way system→patient notification stream (`patient_inbox_messages`
 * table). Direct INSERTs to `patient_inbox_messages` are forbidden by
 * RLS; service-role + the SECURITY DEFINER `record_inbox_message`
 * function are the only legitimate writers.
 *
 * Discipline (mirrors lib/outbound/enqueue.ts pattern):
 *  - Zod validation on args.
 *  - Idempotency: if an inbox row already exists for the
 *    `outbound_job_id`, returns that row's id with
 *    `idempotent_replay: true` (no duplicate insert). The
 *    SECURITY DEFINER handles the lookup atomically.
 *  - Required fields enforced both at the TS layer (this module)
 *    and at the SQL layer (CHECK constraints + explicit validation
 *    inside the function).
 *
 * Caller: lib/outbound/dispatch.ts `dispatchPreRenderedInApp`. The
 * dispatcher reads a `kind='send_in_app'` outbound_job, extracts the
 * rendered payload + lineage, and calls this function. After success
 * the dispatcher calls `markOutboundJobDispatch` with
 * channel='in_app' / provider='in_app_inbox'.
 *
 * Distinct from the existing `messages` table (per-care_program two-
 * way patient↔staff conversations); see migration comment at
 * supabase/migrations/20260515120000_phase_4h_in_app_inbox_c1.sql.
 */

import { z } from 'zod'
import type { SupabaseClient } from '@supabase/supabase-js'
import { createAdminClient } from '@/lib/supabase/admin'
import { MESSAGE_INTENTS } from '@/lib/outbound/types'

// =====================================================================
// Args + result types
// =====================================================================

export const RecordInboxMessageArgs = z.object({
  /** UUID of the outbound_jobs row that produced this message. */
  outbound_job_id: z.string().min(1),
  /** Patient back-pointer. */
  patient_id: z.string().min(1),
  /**
   * Multi-tenant org partition. Note: validated as plain string (not
   * z.string().uuid()) because the seeded canonical org id
   * `00000000-0000-0000-0000-000000000001` is a fixed sentinel that
   * does not conform to strict v4 UUID format. The downstream FK
   * constraint enforces actual referential validity.
   */
  org_id: z.string().min(1),
  /** Optional sub-brand. */
  brand_id: z.string().nullable().optional(),
  /** data_environment partition. */
  data_environment: z.enum([
    'production',
    'staging',
    'internal_qa',
    'synthetic',
  ]),

  /** Optional governance lineage from the rules engine. */
  rule_id: z.string().nullable().optional(),
  rule_version: z.string().nullable().optional(),
  template_key: z.string().nullable().optional(),
  template_version: z.string().nullable().optional(),

  /** Section 1Q.17 6-tier privacy exposure level. */
  intended_privacy_exposure_level: z
    .number()
    .int()
    .min(0)
    .max(5),
  /** Section 1Q.17 message-intent enum (matches outbound_jobs.message_intent). */
  message_intent: z.enum(MESSAGE_INTENTS),

  /** Rendered output (parallels rendered_email payload). */
  subject: z.string().min(1),
  body_html: z.string().min(1),
  body_text: z.string().min(1),

  /** Forward-compat flexible metadata (CTA, deep links, etc.). Default {}. */
  metadata: z.record(z.string(), z.unknown()).default({}),

  /** Effective time of the message (= source outbound_jobs.effective_at). */
  effective_at: z.string(), // ISO 8601 string; SQL accepts text and casts to timestamptz
})

export type RecordInboxMessageArgs = z.infer<typeof RecordInboxMessageArgs>

export interface RecordInboxMessageResult {
  inbox_message_id: string
  idempotent_replay: boolean
}

// =====================================================================
// Public entry point
// =====================================================================

export async function recordInboxMessage(
  rawArgs: unknown,
  supabase?: SupabaseClient,
): Promise<RecordInboxMessageResult> {
  const args = RecordInboxMessageArgs.parse(rawArgs)

  const sb = supabase ?? createAdminClient()

  const { data, error } = await sb.rpc('record_inbox_message', {
    p_outbound_job_id: args.outbound_job_id,
    p_patient_id: args.patient_id,
    p_org_id: args.org_id,
    p_data_environment: args.data_environment,
    p_intended_privacy_exposure_level: args.intended_privacy_exposure_level,
    p_message_intent: args.message_intent,
    p_subject: args.subject,
    p_body_html: args.body_html,
    p_body_text: args.body_text,
    p_effective_at: args.effective_at,
    p_brand_id: args.brand_id ?? null,
    p_rule_id: args.rule_id ?? null,
    p_rule_version: args.rule_version ?? null,
    p_template_key: args.template_key ?? null,
    p_template_version: args.template_version ?? null,
    p_metadata: args.metadata,
  })

  if (error) {
    throw new Error(
      `recordInboxMessage: record_inbox_message RPC failed ` +
        `(outbound_job_id='${args.outbound_job_id}'): ${error.message} ` +
        `(code: ${error.code ?? 'unknown'})`,
    )
  }

  if (!data || typeof data !== 'object') {
    throw new Error(
      `recordInboxMessage: RPC returned non-object: ${JSON.stringify(data)}`,
    )
  }

  const row = data as {
    inbox_message_id: string
    idempotent_replay: boolean
  }

  return {
    inbox_message_id: row.inbox_message_id,
    idempotent_replay: row.idempotent_replay,
  }
}
