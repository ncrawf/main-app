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
import {
  writeEmissions,
  type WriteEmissionResult,
  type ActorKind,
  type DataEnvironment,
} from '../write/orchestrator';
import { createAdminClient } from '@/lib/supabase/admin';

const DEFAULT_MAIN_ORG_ID = '00000000-0000-0000-0000-000000000001';

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
   * payload fields from the question definition; that's a Phase 4C-runtime
   * resolver concern. Pass fully-formed emissions here.
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
  /**
   * Phase 4C-pre primitives. Optional at the call site — when omitted, this
   * wrapper looks up org_id + data_environment from the patient's row (when
   * patient_id is set) or falls back to main / production. actor_kind defaults
   * to 'patient'.
   *
   * IMPORTANT (per system map primitives addendum + Section 1U): API route
   * handlers that accept patient input MUST NOT propagate these from request
   * body — they are derived server-side from session context only. Internal
   * callers (resolvers, system jobs, partner adapters, ops UIs) may pass
   * explicit overrides; the orchestrator rejects cross-org mismatches.
   */
  org_id?: string;
  data_environment?: DataEnvironment;
  actor_kind?: ActorKind;
}

export interface RecordIntakeResponseResult {
  intake_response_id: string;
  emission_results: WriteEmissionResult[];
}

export async function recordIntakeResponse(
  args: RecordIntakeResponseArgs
): Promise<RecordIntakeResponseResult> {
  const supabase = createAdminClient();

  // 1. Resolve primitives (org_id + data_environment) from explicit override OR
  //    look-up against patients OR fall back. The supabase-js client cannot set
  //    the Postgres session-context vars that current_org_id() reads, so we
  //    explicitly populate these columns on the intake_responses INSERT.
  const { orgId, dataEnvironment } = await resolvePrimitives(supabase, args);
  const actorKind: ActorKind = args.actor_kind ?? 'patient';

  // 2. Insert the raw intake_responses row.
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
      org_id: orgId,
      data_environment: dataEnvironment,
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

  // 3. Bump the session's last_activity_at.
  await supabase
    .from('intake_sessions')
    .update({ last_activity_at: new Date().toISOString() })
    .eq('id', args.session_id);

  // 4. If no emissions, we're done — pure raw-input capture.
  if (args.emissions.length === 0) {
    return { intake_response_id: intakeResponseId, emission_results: [] };
  }

  // 5. Hand off to writeEmissions with the new intake_response_id as back-pointer.
  //    Pass primitives so the orchestrator's set_config + conflict detection runs.
  const { results } = await writeEmissions({
    emissions: args.emissions,
    session_id: args.session_id,
    patient_id: args.patient_id,
    intake_response_id: intakeResponseId,
    assertion_group_id: args.assertion_group_id,
    interaction_context: args.interaction_context,
    org_id: orgId,
    data_environment: dataEnvironment,
    actor_kind: actorKind,
  });

  return { intake_response_id: intakeResponseId, emission_results: results };
}

/**
 * Resolve org_id + data_environment for the intake_responses row.
 *
 * Order of precedence:
 *   1. Caller-passed explicit override (args.org_id / args.data_environment).
 *   2. Patient row lookup when patient_id is present.
 *   3. Fallback: main org + 'production' (pre-account flow).
 *
 * Conflict detection: if both override and patient row exist and differ on
 * org_id, throw immediately. The orchestrator's RPC also checks this; we
 * fail fast here so the intake_responses row never lands in the wrong org.
 */
async function resolvePrimitives(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: any,
  args: RecordIntakeResponseArgs
): Promise<{ orgId: string; dataEnvironment: DataEnvironment }> {
  let patientOrgId: string | undefined;
  let patientDataEnv: DataEnvironment | undefined;

  if (args.patient_id) {
    const { data, error } = await supabase
      .from('patients')
      .select('org_id, data_environment')
      .eq('id', args.patient_id)
      .single();
    if (!error && data) {
      const row = data as { org_id?: string; data_environment?: DataEnvironment };
      patientOrgId = row.org_id;
      patientDataEnv = row.data_environment;
    }
  }

  if (args.org_id && patientOrgId && args.org_id !== patientOrgId) {
    throw new Error(
      `recordIntakeResponse: cross-org write rejected. caller passed org_id=${args.org_id} ` +
        `but patient ${args.patient_id} belongs to org_id=${patientOrgId}. ` +
        `Per Section 1U: PHI never crosses org_id.`
    );
  }

  const orgId = args.org_id ?? patientOrgId ?? DEFAULT_MAIN_ORG_ID;
  const dataEnvironment: DataEnvironment =
    args.data_environment ?? patientDataEnv ?? 'production';

  return { orgId, dataEnvironment };
}
