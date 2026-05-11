/**
 * Phase 4H-communications c2 — patient-facing chat thread API.
 *
 * Routes:
 *   GET  /api/messages/[threadId]/messages?patientId=...  — list + read state
 *   POST /api/messages/[threadId]/messages                — patient compose
 *
 * Mark-read uses a sibling route at
 *   PATCH /api/messages/[threadId]/read
 *
 * Security invariant (binding for all patient-facing message APIs per
 * preflight §4.5). The pattern matches the existing
 * `/api/patient-portal/support-request` route:
 *   * Caller supplies `patientId` (query string for GET, body for POST).
 *   * Server verifies via `assertPatientPortalSessionOnly(patientId)` —
 *     the patient portal session cookie is a signed JWT bound to a specific
 *     patient id; verification checks that the cookie was issued for the
 *     claimed patient id. Caller-supplied `patientId` is NOT trusted blindly;
 *     it is the LOOKUP KEY against the cryptographically-verified session.
 *   * The lib layer (`listMessagesForThread`, `postPatientMessage`) then
 *     verifies thread ownership server-side as defense in depth.
 *
 * This matches the established patient portal convention; staff preview of
 * patient chat goes through a different surface that c2 does not ship.
 */

import { NextResponse } from 'next/server'
import { assertPatientPortalSessionOnly } from '@/lib/patient-portal/assertAccess'
import {
  listMessagesForThread,
  ThreadAccessError,
  ThreadNotFoundError,
} from '@/lib/messages/listMessagesForThread'
import { postPatientMessage, IdempotencyMismatchError } from '@/lib/messages/postPatientMessage'

export const runtime = 'nodejs'

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export async function GET(
  request: Request,
  context: { params: Promise<{ threadId: string }> },
) {
  const { threadId } = await context.params
  if (!UUID_RE.test(threadId)) {
    return NextResponse.json({ error: 'Invalid threadId' }, { status: 400 })
  }

  const url = new URL(request.url)
  const patientId = url.searchParams.get('patientId')?.trim() ?? ''
  if (!patientId || !UUID_RE.test(patientId)) {
    return NextResponse.json({ error: 'Invalid patientId' }, { status: 400 })
  }

  if (!(await assertPatientPortalSessionOnly(patientId))) {
    return NextResponse.json(
      { error: 'Sign in again using your secure dashboard link.' },
      { status: 401 },
    )
  }

  try {
    const result = await listMessagesForThread({ patientId, threadId })
    return NextResponse.json({ ok: true, ...result })
  } catch (e) {
    if (e instanceof ThreadAccessError) {
      return NextResponse.json({ error: 'Thread access denied' }, { status: 403 })
    }
    if (e instanceof ThreadNotFoundError) {
      return NextResponse.json({ error: 'Thread not found' }, { status: 404 })
    }
    console.error('GET /api/messages/[threadId]/messages failed', e)
    return NextResponse.json({ error: 'Could not load messages.' }, { status: 500 })
  }
}

type PostBody = {
  patientId?: string
  body?: string
  client_message_id?: string
  metadata?: Record<string, unknown>
}

export async function POST(
  request: Request,
  context: { params: Promise<{ threadId: string }> },
) {
  const { threadId } = await context.params
  if (!UUID_RE.test(threadId)) {
    return NextResponse.json({ error: 'Invalid threadId' }, { status: 400 })
  }

  let body: PostBody
  try {
    body = (await request.json()) as PostBody
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const patientId = body.patientId?.trim() ?? ''
  if (!patientId || !UUID_RE.test(patientId)) {
    return NextResponse.json({ error: 'Invalid patientId' }, { status: 400 })
  }

  if (!(await assertPatientPortalSessionOnly(patientId))) {
    return NextResponse.json(
      { error: 'Sign in again using your secure dashboard link.' },
      { status: 401 },
    )
  }

  // client_message_id is REQUIRED on patient POST per preflight §4.3.
  if (
    !body.client_message_id ||
    typeof body.client_message_id !== 'string' ||
    body.client_message_id.length < 1
  ) {
    return NextResponse.json(
      {
        error: 'client_message_id_required',
        detail: 'Patient POST requires a client_message_id idempotency key.',
      },
      { status: 400 },
    )
  }

  const messageBody = body.body?.toString() ?? ''
  if (messageBody.length < 1 || messageBody.length > 8000) {
    return NextResponse.json(
      { error: 'Body must be 1-8000 characters.' },
      { status: 400 },
    )
  }

  try {
    const result = await postPatientMessage({
      thread_id: threadId,
      patient_id: patientId,
      body: messageBody,
      client_message_id: body.client_message_id,
      metadata: body.metadata ?? {},
    })
    return NextResponse.json({ ok: true, ...result })
  } catch (e) {
    if (e instanceof IdempotencyMismatchError) {
      return NextResponse.json(
        {
          error: e.code,
          detail:
            'The same client_message_id was reused with a different request payload. Generate a fresh id for this new message.',
          existing_message_id: e.existingMessageId,
        },
        { status: 409 },
      )
    }
    console.error('POST /api/messages/[threadId]/messages failed', e)
    return NextResponse.json({ error: 'Could not send message.' }, { status: 500 })
  }
}
