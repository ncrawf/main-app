/**
 * Phase 4E outbound dispatcher skeleton.
 *
 * Calls `pick_next_outbound_job()` to atomically claim a queued job, then
 * invokes the appropriate external-rail adapter (Stripe / Twilio / Resend /
 * pharmacy / lab / AI extraction / OCR / SAR / RTBF), then records the
 * outcome via `mark_outbound_job_dispatch()`.
 *
 * SCOPE NOTE (binding for Phase 4E):
 *  - The data_environment gate is structurally enforced at the SQL layer
 *    (`pick_next_outbound_job` filters `data_environment = 'production'`).
 *    Synthetic / staging / internal_qa rows are never returned.
 *  - The Section 1G.3 5-step send-policy gate (privacy gate, channel pref,
 *    in-person window, pre-send revalidation, contact freshness) ships in
 *    Phase 4H with the rules + templates engine. This file's
 *    `runSendPolicyGate()` is a no-op stub today and a CI-lint anchor for
 *    when 4H wires it in.
 *  - The actual SDK calls per kind are stubbed — they throw
 *    `AdapterNotImplementedError` until 4H+ adapter modules ship. The
 *    queue / receipt / state machine plumbing IS live.
 *
 * Worker integration: a cron job (`/api/cron/outbound-jobs/route.ts`)
 * imports `runDispatcherTick()` and runs it on a schedule (every minute);
 * the function returns the count of jobs processed so the caller can
 * monitor throughput per Section 1H.2 platform ownership.
 */

import { createAdminClient } from '@/lib/supabase/admin';
import {
  type JobKind,
  type JobChannel,
  type DispatchOutcome,
  type DispatchResultArgs,
  type DispatchResultResponse,
  isExternalRailJobKind,
} from './types';

export class AdapterNotImplementedError extends Error {
  constructor(public readonly kind: JobKind) {
    super(
      `outbound dispatcher: adapter for kind='${kind}' not implemented. Ships in Phase 4H with the rules + templates engine.`
    );
    this.name = 'AdapterNotImplementedError';
  }
}

/**
 * Pull the next claimable job. Returns null when queue is empty.
 * Wraps `pick_next_outbound_job()` SECURITY DEFINER RPC.
 */
export async function pickNextOutboundJob(): Promise<OutboundJobRow | null> {
  const supabase = createAdminClient();
  const { data, error } = await supabase.rpc('pick_next_outbound_job');
  if (error) {
    throw new Error(`pickNextOutboundJob: RPC failed: ${error.message}`);
  }
  if (!data) return null;
  return data as OutboundJobRow;
}

/**
 * Record dispatch result + transition outbound_jobs.status.
 * Wraps `mark_outbound_job_dispatch()` SECURITY DEFINER RPC.
 */
export async function markOutboundJobDispatch(
  args: DispatchResultArgs
): Promise<DispatchResultResponse> {
  const supabase = createAdminClient();
  const { data, error } = await supabase.rpc('mark_outbound_job_dispatch', {
    p_outbound_job_id: args.outbound_job_id,
    p_attempt: args.attempt,
    p_status: args.status,
    p_channel: args.channel,
    p_provider: args.provider,
    p_provider_message_id: args.provider_message_id ?? null,
    p_error_message: args.error_message ?? null,
    p_error_code: args.error_code ?? null,
    p_error_payload: args.error_payload ?? null,
    p_metadata: args.metadata ?? {},
  });
  if (error) {
    throw new Error(`markOutboundJobDispatch: RPC failed: ${error.message}`);
  }
  return data as DispatchResultResponse;
}

/**
 * Per Section 1G.3 5-step gate. STUB until Phase 4H rules + templates
 * engine wires the real implementation. Returns 'pass' today; future
 * version returns 'pass' | 'suppress' | 'consent_uplift_required' |
 * 'block' with a reason code.
 *
 * CI lint anchor: any code path that dispatches an external-rail job
 * MUST consult this gate before the SDK call. Tested via the unit test
 * that asserts the symbol exists + the SuppressionReason enum is
 * referenced.
 */
export async function runSendPolicyGate(_job: OutboundJobRow): Promise<{
  decision: 'pass' | 'suppress' | 'consent_uplift_required' | 'block';
  reason?: string;
}> {
  // TODO(4H): wire the 5-step gate using template metadata +
  // patient_consents + jurisdiction + recent-interaction window +
  // pre-send revalidation + contact info freshness.
  return { decision: 'pass' };
}

/**
 * One dispatcher tick: claim one job, run the gate, call the adapter,
 * record the outcome. Returns the job id processed (or null when queue empty).
 */
export async function runDispatcherTick(): Promise<{
  job_id: string | null;
  outcome: DispatchOutcome | 'queue_empty' | 'suppressed_by_gate';
}> {
  const job = await pickNextOutboundJob();
  if (!job) {
    return { job_id: null, outcome: 'queue_empty' };
  }

  // Section 1G.3 5-step send-policy gate (4H ships full impl).
  const gate = await runSendPolicyGate(job);
  if (gate.decision !== 'pass') {
    // Suppress / consent_uplift / block all map to status=suppressed today.
    // 4H will distinguish them with the suppression_reason vocabulary.
    await markOutboundJobDispatch({
      outbound_job_id: job.id,
      attempt: job.attempts,
      status: 'failed_terminal',                // distinct terminal vs retryable; suppression is policy, not retryable
      channel: (job.channel as JobChannel) ?? 'in_app',
      provider: 'send_policy_gate',
      error_message: `suppressed_by_gate: ${gate.reason ?? gate.decision}`,
    });
    return { job_id: job.id, outcome: 'suppressed_by_gate' };
  }

  // Adapter dispatch — real SDK calls land here per kind.
  // Phase 4E ships the queue plumbing only; adapters land in 4H+.
  if (isExternalRailJobKind(job.kind)) {
    throw new AdapterNotImplementedError(job.kind);
  }

  // Internal-only kinds (sar_export / rtbf_apply / ai_extraction / etc.)
  // — also stubbed; 4H+ wires per-kind.
  throw new AdapterNotImplementedError(job.kind);
}

/**
 * Row shape returned by pick_next_outbound_job(). Mirrors the Postgres
 * outbound_jobs columns; loosely typed since supabase-js doesn't have
 * generated Database types.
 */
export interface OutboundJobRow {
  id: string;
  kind: JobKind;
  payload: Record<string, unknown>;
  status: string;
  attempts: number;
  max_attempts: number;
  run_after: string;
  patient_id: string | null;
  channel: string | null;
  idempotency_key: string | null;
  external_system_name: string | null;
  external_system_id: string | null;
  rule_id: string | null;
  rule_version: string | null;
  template_key: string | null;
  template_version: string | null;
  pathway_code: string | null;
  pathway_sensitivity: string | null;
  message_intent: string | null;
  priority_hint: string | null;
  declared_privacy_exposure_level: number | null;
  intended_privacy_exposure_level: number | null;  // Phase 4H-pre commit 1
  decision_outcome_reason: string | null;          // Phase 4H-pre commit 1
  source_kind: string | null;
  source_id: string | null;
  org_id: string;
  data_environment: string;
  queued_by_kind: string | null;
  created_at: string;
}
