/**
 * Phase 4G-pre — wire 4C-runtime resolver into a real intake submission
 * function. This is the standalone runtime entry point that the Next route
 * handler delegates to (and that the smoke test invokes directly).
 *
 * Shape:
 *   raw client input { question_id, raw_value, ... } + session lookup
 *   -> getQuestion()                       (question-bank lookup)
 *   -> resolveEmissions()                  (Phase 4C-runtime; pure)
 *   -> recordIntakeResponse()              (Phase 4A live-DB orchestrator)
 *   -> { intake_response_id, emission_results }
 *
 * Discipline:
 * - All primitives (org_id / data_environment / actor_kind) are derived
 *   server-side from the intake_sessions row + downstream patient row
 *   inside recordIntakeResponse. Per system primitives addendum: HTTP
 *   handlers MUST NOT propagate them from request body. This function
 *   accepts no override args; the route handler also blocks them.
 * - Resolver runs BEFORE the DB write so a Zod validation failure rejects
 *   the entire request without a partial intake_responses row.
 * - prior_responses are loaded from intake_responses for the same session
 *   so cross-question dependencies (e.g., Q15.2 medication.status flips
 *   on Q15.1 status_v1='past') resolve correctly.
 */
import { createAdminClient } from '@/lib/supabase/admin'
import { getQuestion } from '@/lib/intake/question-bank'
import { resolveEmissions, ResolveEmissionsError } from '@/lib/intake/runtime/resolve-emissions'
import { recordIntakeResponse } from '@/lib/intake/runtime/record-intake-response'
import type { InteractionContext } from '@/lib/intake/interaction-context'
import { InteractionContextSchema } from '@/lib/intake/interaction-context'
import type { Question } from '@/lib/intake/types'

export interface SubmitIntakeResponseArgs {
  /** Required: the intake session this response belongs to. */
  session_id: string
  /** Required: which question is being answered (must exist in the question-bank). */
  question_id: string
  /** Patient input value. Type depends on the question's answer_type. */
  raw_value: unknown

  /** Mode-J branch path token per Section 1K.5. */
  branch_path_token?: string
  /** Mode-J self-correction supersession. */
  supersedes_response_id?: string
  correction_reason?: string

  /** Client de-dup hint per Section 1K.5. */
  client_idempotency_key?: string
  client_round_trip_ms?: number
  rendered_at?: string
}

export interface SubmitIntakeResponseResult {
  intake_response_id: string
  emission_results: Array<{
    target: string
    id: string | null
    audit_event_id: string | null
  }>
  resolved_emission_count: number
}

/**
 * Discriminated error type so the route handler can map each failure mode
 * to a stable HTTP status without parsing free-form messages.
 */
export type SubmitIntakeResponseError =
  | { kind: 'session_not_found'; session_id: string }
  | { kind: 'question_not_registered'; question_id: string }
  | { kind: 'invalid_interaction_context'; reason: string }
  | { kind: 'resolution_failed'; question_id: string; field_path: string; reason: string }
  | { kind: 'write_failed'; reason: string }

export class SubmitIntakeResponseFailure extends Error {
  constructor(public readonly detail: SubmitIntakeResponseError) {
    super(JSON.stringify(detail))
    this.name = 'SubmitIntakeResponseFailure'
  }
}

/**
 * Run the full Phase 4 intake submission pipeline against a real session.
 *
 * The session row is the single source of truth for primitives (org_id /
 * data_environment / actor_kind / patient_id / interaction_context /
 * engine_version / last_resolver_step_id). Callers do not get to pass them
 * — the route handler blocks request-body fields that look like primitives
 * before calling this function.
 */
export async function submitIntakeResponse(
  args: SubmitIntakeResponseArgs,
): Promise<SubmitIntakeResponseResult> {
  const supabase = createAdminClient()

  // 1. Look up the session. Fail fast on missing.
  const { data: session, error: sessionErr } = await supabase
    .from('intake_sessions')
    .select(
      'id, patient_id, status, interaction_context, engine_version, last_resolver_step_id',
    )
    .eq('id', args.session_id)
    .maybeSingle<{
      id: string
      patient_id: string | null
      status: string
      interaction_context: unknown
      engine_version: string
      last_resolver_step_id: string | null
    }>()

  if (sessionErr || !session) {
    throw new SubmitIntakeResponseFailure({
      kind: 'session_not_found',
      session_id: args.session_id,
    })
  }

  // 2. Question-bank lookup. Unknown question_id is a stable error.
  const question: Question | undefined = getQuestion(args.question_id)
  if (!question) {
    throw new SubmitIntakeResponseFailure({
      kind: 'question_not_registered',
      question_id: args.question_id,
    })
  }

  // 3. Validate the session's interaction_context shape so a corrupt session
  //    surfaces a 4xx, not a 5xx.
  const ctxParse = InteractionContextSchema.safeParse(session.interaction_context)
  if (!ctxParse.success) {
    throw new SubmitIntakeResponseFailure({
      kind: 'invalid_interaction_context',
      reason: ctxParse.error.issues[0]?.message ?? 'unknown',
    })
  }
  const interactionContext: InteractionContext = ctxParse.data

  // 4. Load prior responses for the session keyed by question_id so the
  //    resolver can fire cross-question rules (e.g., medication.status flip).
  //    Per Section 1K.5 Mode-J supersession: take the latest non-superseded
  //    raw_value for each question_id within this session.
  const priorResponses = await loadPriorResponses(supabase, args.session_id)

  // 5. Phase 4C-runtime resolution.
  let resolved
  try {
    resolved = resolveEmissions(question, args.raw_value, {
      session_id: args.session_id,
      patient_id: session.patient_id ?? undefined,
      interaction_context: interactionContext,
      prior_responses: priorResponses,
    })
  } catch (err) {
    if (err instanceof ResolveEmissionsError) {
      throw new SubmitIntakeResponseFailure({
        kind: 'resolution_failed',
        question_id: err.question_id,
        field_path: err.field_path,
        reason: err.reason,
      })
    }
    throw err
  }

  // 6. Phase 4A orchestrator hand-off. recordIntakeResponse handles the
  //    intake_responses insert, primitives lookup against the patient row,
  //    and the writeEmissions transaction.
  let writeResult
  try {
    writeResult = await recordIntakeResponse({
      session_id: args.session_id,
      patient_id: session.patient_id ?? undefined,
      question_id: question.question_id,
      question_version: question.question_version,
      module_id: deriveModuleId(question),
      module_version: question.question_version,
      raw_value: args.raw_value,
      branch_path_token: args.branch_path_token,
      emissions: resolved.emissions,
      engine_version: session.engine_version,
      supersedes_response_id: args.supersedes_response_id,
      correction_reason: args.correction_reason,
      client_idempotency_key: args.client_idempotency_key,
      client_round_trip_ms: args.client_round_trip_ms,
      rendered_at: args.rendered_at,
      resolver_step_id: session.last_resolver_step_id ?? undefined,
      interaction_context: interactionContext,
    })
  } catch (err) {
    throw new SubmitIntakeResponseFailure({
      kind: 'write_failed',
      reason: err instanceof Error ? err.message : String(err),
    })
  }

  return {
    intake_response_id: writeResult.intake_response_id,
    emission_results: writeResult.emission_results.map((r) => ({
      target: r.target,
      id: r.id ?? null,
      audit_event_id: r.audit_event_id ?? null,
    })),
    resolved_emission_count: resolved.emissions.length,
  }
}

/**
 * Best-effort module_id from the question's namespaced id. Question ids
 * follow `qb.<scope>.<module>.<question>` convention; the `<module>`
 * segment is the third dot-component. Falls back to the question_id itself
 * when the convention doesn't match.
 */
function deriveModuleId(question: Question): string {
  const parts = question.question_id.split('.')
  if (parts.length >= 3) return parts.slice(0, 3).join('.')
  return question.question_id
}

/**
 * Load prior intake_responses for this session keyed by question_id so the
 * resolver can fire cross-question rules. Returns the LATEST non-superseded
 * raw_value per question_id (Mode-J supersession discipline).
 */
async function loadPriorResponses(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: any,
  session_id: string,
): Promise<Record<string, unknown>> {
  const { data, error } = await supabase
    .from('intake_responses')
    .select('id, question_id, raw_value, supersedes_response_id, answered_at')
    .eq('session_id', session_id)
    .order('answered_at', { ascending: true })

  if (error || !data) return {}

  const supersededIds = new Set<string>()
  for (const row of data as Array<{ supersedes_response_id: string | null }>) {
    if (row.supersedes_response_id) supersededIds.add(row.supersedes_response_id)
  }

  const latest = new Map<string, unknown>()
  for (const row of data as Array<{
    id: string
    question_id: string
    raw_value: unknown
  }>) {
    if (supersededIds.has(row.id)) continue
    latest.set(row.question_id, row.raw_value)
  }

  return Object.fromEntries(latest)
}
