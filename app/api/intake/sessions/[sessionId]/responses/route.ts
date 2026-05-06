/**
 * Phase 4G-pre — POST /api/intake/sessions/[sessionId]/responses
 *
 * Submits a single answer to an intake session, resolving the question's
 * emission templates via Phase 4C-runtime and writing the canonical rows
 * via the Phase 4A orchestrator. Replaces nothing — coexists with the
 * legacy /api/forms route (LEGACY-REPLACE per data_layers_reconciliation_v1
 * Section 4 audit).
 *
 * Auth: when the session has a patient_id, requires a valid patient-portal
 * session cookie for that patient (mirrors existing /api/patient-portal/*
 * routes via assertPatientPortalSessionOnly). Pre-account sessions
 * (patient_id null per Section 1J.6) skip the cookie check — the session
 * id itself is the bearer credential at that stage. NODE_ENV=development
 * relaxes the cookie gate via isPatientPortalGateRelaxed.
 *
 * Discipline:
 * - Request body MUST NOT carry org_id, data_environment, actor_kind,
 *   patient_id. These are server-derived from the session row + downstream
 *   patient row inside recordIntakeResponse. Per system primitives addendum
 *   (Layer 1 foundation) + Section 1U: HTTP handlers do not propagate
 *   primitives from req.body.
 * - All mutations route through submitIntakeResponse → recordIntakeResponse
 *   → record_intake_emissions_batch (SECURITY DEFINER orchestrator) per
 *   primitives top-line invariant ("no row enters except through the
 *   orchestrator boundary").
 */
import { NextResponse } from 'next/server'
import { z } from 'zod'

import { assertPatientPortalSessionOnly } from '@/lib/patient-portal/assertAccess'
import { createAdminClient } from '@/lib/supabase/admin'
import {
  submitIntakeResponse,
  SubmitIntakeResponseFailure,
} from '@/lib/intake/runtime/submit-response'

export const runtime = 'nodejs'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

/**
 * Request body schema. Note the explicit lack of: org_id, data_environment,
 * actor_kind, patient_id. Those are server-derived. Zod refuses unknown
 * keys in strict mode so a forged body that adds them gets rejected.
 */
const RequestBodySchema = z
  .object({
    question_id: z.string().min(1).max(200),
    raw_value: z.unknown(),
    branch_path_token: z.string().min(1).max(200).optional(),
    supersedes_response_id: z.string().regex(UUID_RE).optional(),
    correction_reason: z.string().min(1).max(2000).optional(),
    client_idempotency_key: z.string().min(1).max(200).optional(),
    client_round_trip_ms: z.number().int().nonnegative().optional(),
    rendered_at: z.string().datetime().optional(),
  })
  .strict()

export async function POST(
  request: Request,
  context: { params: Promise<{ sessionId: string }> },
) {
  const { sessionId } = await context.params
  if (!UUID_RE.test(sessionId)) {
    return NextResponse.json({ error: 'Invalid sessionId' }, { status: 400 })
  }

  let bodyJson: unknown
  try {
    bodyJson = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = RequestBodySchema.safeParse(bodyJson)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid request body', issues: parsed.error.issues },
      { status: 400 },
    )
  }
  const body = parsed.data

  // Auth: look up the session to find patient_id, then assert portal session.
  // We use service role for the lookup since the client doesn't have row-level
  // read access to intake_sessions (RLS permits staff only).
  const admin = createAdminClient()
  const { data: sessionRow, error: sessionErr } = await admin
    .from('intake_sessions')
    .select('id, patient_id, status')
    .eq('id', sessionId)
    .maybeSingle<{ id: string; patient_id: string | null; status: string }>()

  if (sessionErr || !sessionRow) {
    // Don't leak whether session id exists — same 404 either way.
    return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  }

  if (sessionRow.status !== 'in_progress') {
    return NextResponse.json(
      { error: `Session is in ${sessionRow.status} state; cannot accept new responses.` },
      { status: 409 },
    )
  }

  if (sessionRow.patient_id) {
    const ok = await assertPatientPortalSessionOnly(sessionRow.patient_id)
    if (!ok) {
      return NextResponse.json(
        { error: 'Sign in again using your secure dashboard link.' },
        { status: 401 },
      )
    }
  }
  // Pre-account flow (patient_id === null) — session id is the bearer
  // credential at this stage. Hardening landed in Section 1K.13 entry +
  // identity-commit staging once that lands as a runtime concern.

  // Run the pipeline.
  try {
    const result = await submitIntakeResponse({
      session_id: sessionId,
      question_id: body.question_id,
      raw_value: body.raw_value,
      branch_path_token: body.branch_path_token,
      supersedes_response_id: body.supersedes_response_id,
      correction_reason: body.correction_reason,
      client_idempotency_key: body.client_idempotency_key,
      client_round_trip_ms: body.client_round_trip_ms,
      rendered_at: body.rendered_at,
    })
    return NextResponse.json(result, { status: 200 })
  } catch (err) {
    if (err instanceof SubmitIntakeResponseFailure) {
      const detail = err.detail
      switch (detail.kind) {
        case 'session_not_found':
          return NextResponse.json({ error: 'Session not found' }, { status: 404 })
        case 'question_not_registered':
          return NextResponse.json(
            { error: `Unknown question_id: ${detail.question_id}` },
            { status: 400 },
          )
        case 'invalid_interaction_context':
          return NextResponse.json(
            { error: `Session interaction_context invalid: ${detail.reason}` },
            { status: 500 },
          )
        case 'resolution_failed':
          return NextResponse.json(
            {
              error: 'Emission resolution failed',
              question_id: detail.question_id,
              field_path: detail.field_path,
              reason: detail.reason,
            },
            { status: 422 },
          )
        case 'write_failed':
          return NextResponse.json(
            { error: 'Database write failed', reason: detail.reason },
            { status: 500 },
          )
      }
    }
    console.error('[api/intake/sessions/[sessionId]/responses POST] unexpected', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Server error' },
      { status: 500 },
    )
  }
}
