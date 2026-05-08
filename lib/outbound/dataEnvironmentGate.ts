/**
 * Phase 4H-pre commit 2 — data_environment dispatch gate (TS side).
 *
 * Per docs/architecture/phase_4h_target_first_decision_record.md
 * Section 6 commit 2 + system map primitives addendum #4 (line 123).
 *
 * The gate suppresses external-rail outbound jobs whose row carries a
 * non-`production` data_environment. Suppression is the canonical
 * terminal state for synthetic / staging / internal_qa rows that must
 * never reach external SDKs (Twilio / Resend / Stripe / pharmacy / lab).
 *
 * Two call sites:
 *
 *   1. enqueue boundary (lib/outbound/enqueue.ts): immediately after
 *      enqueue_outbound_job() returns, the gate evaluates the row and,
 *      if it would not pass, marks it terminal. Without this wire-in,
 *      non-production rows accumulate as 'queued' forever (the SQL
 *      pick_next_outbound_job filter never picks them up).
 *
 *   2. dispatch boundary (lib/outbound/dispatch.ts): inside
 *      runDispatcherTick(), before the existing runSendPolicyGate
 *      stub. Defense-in-depth — even though pick_next_outbound_job
 *      should never return a non-production row (Phase 4E SQL filter),
 *      if a future code path bypasses pick_next (manual ops dispatch,
 *      malformed worker, schema drift), this gate catches it.
 *
 * Why kind partition (external rail vs internal-only) lives in TS:
 *
 *   isExternalRailJobKind() is the source of truth for which kinds
 *   reach external systems. Mirroring that partition in SQL would
 *   create drift risk. The TS gate decides; the SECURITY DEFINER
 *   function trusts the caller and does the atomic transition.
 *
 * Atomicity:
 *
 *   When the gate suppresses, the state transition + audit emission
 *   pair is atomic via the SECURITY DEFINER function
 *   mark_outbound_job_suppressed_by_env. Partial state (suppressed
 *   without audit, or audit without suppression) is a HIPAA-grade
 *   compliance gap that a two-step app-code call cannot prevent.
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import { createAdminClient } from '@/lib/supabase/admin'
import {
  isExternalRailJobKind,
  type JobKind,
} from './types'
import type { OutboundJobRow } from './dispatch'

// =====================================================================
// Pure function: the gate decision
// =====================================================================

export type DataEnvironmentGateInput = {
  kind: JobKind
  data_environment: string
}

export type DataEnvironmentGateDecision =
  | { decision: 'pass'; reason?: never }
  | { decision: 'suppress'; reason: 'data_environment' }

/**
 * Pure-function gate: given a row's kind + data_environment, decide
 * whether the row may proceed to external dispatch.
 *
 * Rule: pass when (a) the data_environment is 'production', OR (b) the
 * kind is internal-only (does not touch external SDKs). Otherwise
 * suppress. Internal-only kinds (sar_export, rtbf_apply, ai_extraction,
 * document_ocr, ai_drafting, scheduled_reminder, reengagement_nudge,
 * escalation_to_provider, escalation_to_ops, send_in_app, misc_internal)
 * MAY run in any environment because they do not reach external rails
 * — see lib/outbound/types.ts isExternalRailJobKind().
 */
export function evaluateDataEnvironmentGate(
  input: DataEnvironmentGateInput,
): DataEnvironmentGateDecision {
  if (input.data_environment === 'production') {
    return { decision: 'pass' }
  }
  if (!isExternalRailJobKind(input.kind)) {
    return { decision: 'pass' }
  }
  return { decision: 'suppress', reason: 'data_environment' }
}

// =====================================================================
// Async wrappers: invoke the SECURITY DEFINER suppression function
// =====================================================================

export type DataEnvironmentSuppressionResult = {
  decision: 'pass' | 'suppress'
  data_environment: string
  /**
   * True when the SECURITY DEFINER function actually transitioned the
   * row. False when the gate decided pass, OR when the row was no
   * longer in 'queued' state at suppression time (race condition;
   * idempotent no-op).
   */
  transitioned: boolean
  /**
   * The audit_events row id emitted by the suppression. Null when the
   * gate passed or the suppression was a no-op.
   */
  audit_event_id: string | null
}

/**
 * Apply the gate to a row that was just enqueued. Reads back the row's
 * resolved data_environment (the orchestrator may have set it from the
 * patient row when the caller did not provide it explicitly), runs the
 * gate, and if suppress, calls the SECURITY DEFINER function.
 *
 * The readback is one extra round-trip vs. trusting the caller-provided
 * args.data_environment. We do the readback because: (a) args may not
 * have provided data_environment (the orchestrator resolves it from
 * patient.data_environment in that case); (b) the readback also tells
 * us the row is still 'queued' (not raced to terminal by another path).
 *
 * Skip the gate entirely when idempotent_replay = true: the row was
 * already in the table before this enqueue call; we are not the
 * party responsible for its terminal state.
 */
export async function applyDataEnvironmentGateAfterEnqueue(args: {
  outbound_job_id: string
  kind: JobKind
  idempotent_replay: boolean
  supabase?: SupabaseClient
}): Promise<DataEnvironmentSuppressionResult> {
  if (args.idempotent_replay) {
    return {
      decision: 'pass',
      data_environment: 'unknown_idempotent_replay',
      transitioned: false,
      audit_event_id: null,
    }
  }

  const supabase = args.supabase ?? createAdminClient()

  const { data: rowData, error: selectError } = await supabase
    .from('outbound_jobs')
    .select('data_environment, status')
    .eq('id', args.outbound_job_id)
    .single()

  if (selectError) {
    throw new Error(
      `applyDataEnvironmentGateAfterEnqueue: SELECT failed for outbound_job_id=${args.outbound_job_id}: ${selectError.message}`,
    )
  }

  const dataEnvironment = (rowData as { data_environment: string }).data_environment

  const gate = evaluateDataEnvironmentGate({
    kind: args.kind,
    data_environment: dataEnvironment,
  })

  if (gate.decision === 'pass') {
    return {
      decision: 'pass',
      data_environment: dataEnvironment,
      transitioned: false,
      audit_event_id: null,
    }
  }

  return suppressByEnv({
    supabase,
    outbound_job_id: args.outbound_job_id,
    extra_metadata: {
      gate_call_site: 'enqueue',
    },
    data_environment: dataEnvironment,
  })
}

/**
 * Apply the gate to a row already loaded from pickNextOutboundJob().
 * No readback needed because the caller already has the full row; this
 * is the dispatch-boundary defense-in-depth path.
 */
export async function applyDataEnvironmentGateAtDispatch(
  job: OutboundJobRow,
  supabase?: SupabaseClient,
): Promise<DataEnvironmentSuppressionResult> {
  const gate = evaluateDataEnvironmentGate({
    kind: job.kind,
    data_environment: job.data_environment,
  })

  if (gate.decision === 'pass') {
    return {
      decision: 'pass',
      data_environment: job.data_environment,
      transitioned: false,
      audit_event_id: null,
    }
  }

  return suppressByEnv({
    supabase: supabase ?? createAdminClient(),
    outbound_job_id: job.id,
    extra_metadata: {
      gate_call_site: 'dispatch_defense_in_depth',
    },
    data_environment: job.data_environment,
  })
}

// =====================================================================
// Internal helper: invoke the SECURITY DEFINER function
// =====================================================================

async function suppressByEnv(args: {
  supabase: SupabaseClient
  outbound_job_id: string
  extra_metadata: Record<string, unknown>
  data_environment: string
}): Promise<DataEnvironmentSuppressionResult> {
  const { data, error } = await args.supabase.rpc(
    'mark_outbound_job_suppressed_by_env',
    {
      p_outbound_job_id: args.outbound_job_id,
      p_extra_metadata: args.extra_metadata,
    },
  )

  if (error) {
    throw new Error(
      `suppressByEnv: mark_outbound_job_suppressed_by_env RPC failed for outbound_job_id=${args.outbound_job_id}: ${error.message} (code: ${error.code ?? 'unknown'})`,
    )
  }

  if (!data || typeof data !== 'object') {
    throw new Error(
      `suppressByEnv: RPC returned non-object for outbound_job_id=${args.outbound_job_id}: ${JSON.stringify(data)}`,
    )
  }

  const row = data as {
    transitioned: boolean
    audit_event_id: string | null
    suppressed_status?: string
    reason?: string
    current_status?: string
  }

  return {
    decision: 'suppress',
    data_environment: args.data_environment,
    transitioned: row.transitioned,
    audit_event_id: row.audit_event_id,
  }
}
