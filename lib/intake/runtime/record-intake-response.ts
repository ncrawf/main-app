/**
 * Phase 4A recordIntakeResponse — high-level wrapper that:
 *
 * 1. Inserts the raw intake_responses row (Section 1K.5 Mode J supersession
 *    discipline preserved via supersedes_response_id).
 * 2. Calls writeEmissions with the caller-supplied (already-resolved) emissions,
 *    binding the new intake_response_id as their back-pointer in audit_events
 *    metadata + as source_intake_response_id on clinical_assertion rows.
 *
 * Discipline:
 * - Caller is responsible for resolving dynamic emission payload fields
 *   (e.g., concept_id mapping from a choice value, derived medication
 *   name_normalized) BEFORE calling. Phase 4B will add a resolver layer
 *   that consumes Question.emissions templates + raw_value to do this
 *   automatically; until then, runtime callers pass fully-resolved
 *   emissions.
 * - intake_responses row + emission writes happen in the SAME logical
 *   action: response insert is awaited first (gives us intake_response_id
 *   for the back-pointer); writeEmissions then runs as one Postgres
 *   transaction. Section 1Q.7 same-transaction discipline is satisfied
 *   for the emission side; the intake_responses row is the durable
 *   anchor regardless of whether emissions succeed or fail (caller
 *   decides retry / decision-card on failure).
 */

import type { Emission } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeEmissions, type WriteEmissionResult } from '../write/orchestrator';
import { createAdminClient } from '@/lib/supabase/admin';

export interface RecordIntakeResponseArgs {
  /** Required: the session this response belongs to. */
  session_id: string;
  /** Required for clinical_assertion writes; optional in pre-account flow. */
  patient_id?: string;
  question_id: string;
  question_version: string;
  module_id: string;
  module_version: string;
  raw_value: unknown;
  /** Optional Mode-J branch token for asymmetric paths per Section 1K.5. */
  branch_path_token?: string;
  branch_id?: string;
  branch_version?: string;
  /**
   * Caller-resolved emissions. The Phase 4A wrapper does NOT resolve dynamic
   * payload fields from the question definition; that's a Phase 4B resolver
   * concern. Pass fully-formed emissions here.
   */
  emissions: Emission[];
  /** Composite-row binding when this question fires multiple emissions. */
  assertion_group_id?: string;
  /** Engine version pin per Section 1K.19. */
  engine_version: string;
  /** Optional Mode-J self-correction supersession. */
  supersedes_response_id?: string;
  correction_reason?: string;
  /** Client de-dup hint per Section 1K.5. */
  client_idempotency_key?: string;
  client_round_trip_ms?: number;
  rendered_at?: string;
  resolver_step_id?: string;
  interaction_context: InteractionContext;
}

export interface RecordIntakeResponseResult {
  intake_response_id: string;
  emission_results: WriteEmissionResult[];
}

export async function recordIntakeResponse(
  args: RecordIntakeResponseArgs
): Promise<RecordIntakeResponseResult> {
  const supabase = createAdminClient();

  // 1. Insert the raw intake_responses row.
  const { data: responseRow, error: responseError } = await supabase
    .from('intake_responses')
    .insert({
      session_id: args.session_id,
      question_id: args.question_id,
      question_version: args.question_version,
      module_id: args.module_id,
      module_version: args.module_version,
      branch_id: args.branch_id ?? null,
      branch_version: args.branch_version ?? null,
      branch_path_token: args.branch_path_token ?? null,
      raw_value: args.raw_value,
      rendered_at: args.rendered_at ?? null,
      client_round_trip_ms: args.client_round_trip_ms ?? null,
      resolver_step_id: args.resolver_step_id ?? null,
      engine_version: args.engine_version,
      supersedes_response_id: args.supersedes_response_id ?? null,
      correction_reason: args.correction_reason ?? null,
      client_idempotency_key: args.client_idempotency_key ?? null,
      interaction_context: args.interaction_context,
    })
    .select('id')
    .single();

  if (responseError || !responseRow) {
    throw new Error(
      `recordIntakeResponse: intake_responses insert failed: ` +
        `${responseError?.message ?? 'unknown error'} ` +
        `(question_id=${args.question_id}, session_id=${args.session_id}).`
    );
  }

  const intakeResponseId = responseRow.id as string;

  // 2. Bump the session's last_activity_at.
  await supabase
    .from('intake_sessions')
    .update({ last_activity_at: new Date().toISOString() })
    .eq('id', args.session_id);

  // 3. If no emissions, we're done — pure raw-input capture.
  if (args.emissions.length === 0) {
    return { intake_response_id: intakeResponseId, emission_results: [] };
  }

  // 4. Hand off to writeEmissions with the new intake_response_id as back-pointer.
  const { results } = await writeEmissions({
    emissions: args.emissions,
    session_id: args.session_id,
    patient_id: args.patient_id,
    intake_response_id: intakeResponseId,
    assertion_group_id: args.assertion_group_id,
    interaction_context: args.interaction_context,
  });

  return { intake_response_id: intakeResponseId, emission_results: results };
}
