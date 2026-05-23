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
 *  - data_environment gate (Phase 4H-pre commit 2): structurally
 *    enforced at the SQL layer (`pick_next_outbound_job` filters
 *    `data_environment = 'production'`) AND additionally at the TS
 *    layer here — after the RPC returns, the gate at
 *    lib/outbound/dataEnvironmentGate.ts evaluates the row and, if
 *    it would not pass, atomically transitions the row to
 *    'suppressed_data_environment' + emits one
 *    'notification.dispatch_blocked_by_privacy_check' audit event.
 *    This prevents non-production rows from accumulating as 'queued'
 *    forever (the SQL filter alone never marks them terminal).
 */

import { createAdminClient } from '@/lib/supabase/admin';
import {
  EnqueueOutboundJobArgs,
  type EnqueueOutboundJobResult,
} from './types';
import { applyDataEnvironmentGateAfterEnqueue } from './dataEnvironmentGate';

type OutboundTraceLineage = {
  source_event_id?: string;
  candidate_id?: string;
  resolver_id?: string;
  commit_id?: string;
};

function extractOutboundTraceLineage(metadata: Record<string, unknown>): OutboundTraceLineage | undefined {
  const raw = metadata.trace_lineage;
  if (!raw || typeof raw !== 'object') return undefined;
  const candidate = raw as Record<string, unknown>;
  return {
    source_event_id:
      typeof candidate.source_event_id === 'string' ? candidate.source_event_id : undefined,
    candidate_id: typeof candidate.candidate_id === 'string' ? candidate.candidate_id : undefined,
    resolver_id: typeof candidate.resolver_id === 'string' ? candidate.resolver_id : undefined,
    commit_id: typeof candidate.commit_id === 'string' ? candidate.commit_id : undefined,
  };
}

export async function enqueueOutboundJob(rawArgs: unknown): Promise<EnqueueOutboundJobResult> {
  const args = EnqueueOutboundJobArgs.parse(rawArgs);
  const traceLineage = extractOutboundTraceLineage(args.metadata ?? {});
  const metadata = {
    ...(args.metadata ?? {}),
    ...(traceLineage ? { trace_lineage: traceLineage } : {}),
  };

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
    p_metadata: metadata,
    // Phase 4H-pre commit 5 — orchestrator extension. The function
    // signature was extended in 20260513130000_phase_4h_pre_extend_enqueue_outbound_job
    // to accept the two columns added by Phase 4H-pre commit 1.
    p_intended_privacy_exposure_level: args.intended_privacy_exposure_level ?? null,
    p_decision_outcome_reason: args.decision_outcome_reason ?? null,
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

  // Phase 4H-pre commit 2 — data_environment gate at the enqueue
  // boundary. Atomically transitions non-production external-rail rows
  // to 'suppressed_data_environment' terminal state + emits a
  // 'notification.dispatch_blocked_by_privacy_check' audit event. The
  // gate is a no-op for production rows + internal-only kinds. Skipped
  // for idempotent replays (we are not the party responsible for those
  // rows' terminal state).
  const gate = await applyDataEnvironmentGateAfterEnqueue({
    outbound_job_id: row.outbound_job_id,
    kind: args.kind,
    idempotent_replay: row.idempotent_replay,
    supabase,
  });

  return {
    outbound_job_id: row.outbound_job_id,
    audit_event_id: row.audit_event_id,
    idempotent_replay: row.idempotent_replay,
    suppressed_by_data_environment: gate.decision === 'suppress',
    suppression_audit_event_id: gate.audit_event_id,
  };
}
