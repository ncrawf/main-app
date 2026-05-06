/**
 * Phase 4E enqueueOutboundJob — canonical TS entry point.
 *
 * Section 1G.3: every outbound job (email, SMS, Stripe, pharmacy, lab,
 * scheduled reminder, AI extraction, governance) flows through this
 * function. Direct INSERTs to outbound_jobs are forbidden by RLS;
 * service-role + SECURITY DEFINER `enqueue_outbound_job` are the only
 * legitimate writers.
 *
 * Discipline:
 *  - Zod validation on args.
 *  - Idempotency: if `idempotency_key` matches an existing row, returns
 *    that row's id with `idempotent_replay: true` (no duplicate insert).
 *  - Cross-org rejection inside the RPC.
 *  - data_environment-gated at DISPATCH time (not enqueue): synthetic
 *    patients can enqueue jobs (e.g., for testing the queue path) but
 *    `pick_next_outbound_job()` only returns production rows. The
 *    structural lock per primitives addendum #4.
 */

import { createAdminClient } from '@/lib/supabase/admin';
import {
  EnqueueOutboundJobArgs,
  type EnqueueOutboundJobResult,
} from './types';

export async function enqueueOutboundJob(rawArgs: unknown): Promise<EnqueueOutboundJobResult> {
  const args = EnqueueOutboundJobArgs.parse(rawArgs);

  const supabase = createAdminClient();

  const { data, error } = await supabase.rpc('enqueue_outbound_job', {
    p_kind: args.kind,
    p_payload: args.payload ?? {},
    p_patient_id: args.patient_id ?? null,
    p_channel: args.channel ?? null,
    p_idempotency_key: args.idempotency_key ?? null,
    p_external_system_name: args.external_system_name ?? null,
    p_external_system_id: args.external_system_id ?? null,
    p_external_inbound_event_id: args.external_inbound_event_id ?? null,
    p_rule_id: args.rule_id ?? null,
    p_rule_version: args.rule_version ?? null,
    p_template_key: args.template_key ?? null,
    p_template_version: args.template_version ?? null,
    p_pathway_code: args.pathway_code ?? null,
    p_pathway_sensitivity: args.pathway_sensitivity ?? null,
    p_message_intent: args.message_intent ?? null,
    p_priority_hint: args.priority_hint,
    p_declared_privacy_exposure_level: args.declared_privacy_exposure_level ?? null,
    p_scheduled_for: args.scheduled_for ?? null,
    p_run_after: args.run_after ?? null,
    p_max_attempts: args.max_attempts,
    p_source_kind: args.source_kind ?? null,
    p_source_id: args.source_id ?? null,
    p_queued_by_kind: args.queued_by_kind,
    p_org_id: args.org_id ?? null,
    p_data_environment: args.data_environment ?? null,
    p_actor_kind: args.actor_kind ?? null,
    p_metadata: args.metadata ?? {},
  });

  if (error) {
    throw new Error(
      `enqueueOutboundJob: enqueue_outbound_job RPC failed (kind='${args.kind}'): ` +
        `${error.message} (code: ${error.code ?? 'unknown'})`
    );
  }

  if (!data || typeof data !== 'object') {
    throw new Error(`enqueueOutboundJob: RPC returned non-object: ${JSON.stringify(data)}`);
  }

  const row = data as {
    outbound_job_id: string;
    audit_event_id: string | null;
    idempotent_replay: boolean;
  };

  return {
    outbound_job_id: row.outbound_job_id,
    audit_event_id: row.audit_event_id,
    idempotent_replay: row.idempotent_replay,
  };
}
