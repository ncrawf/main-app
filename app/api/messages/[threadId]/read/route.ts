/**
 * Phase 4H-communications c2 — patient mark-read API.
 *
 *   PATCH /api/messages/[threadId]/read
 *
 * Advances the patient's per-thread read pointer to the supplied message_id
 * (or to the latest message in the thread if `message_id` omitted).
 *
 * Same security pattern as `/api/messages/[threadId]/messages` —
 * `patientId` in body, verified via `assertPatientPortalSessionOnly`. The
 * server then resolves the patient's participant row and calls the
 * `mark_thread_read` SECURITY DEFINER orchestrator.
 */

import { NextResponse } from 'next/server'
import { assertPatientPortalSessionOnly } from '@/lib/patient-portal/assertAccess'
import { createAdminClient } from '@/lib/supabase/admin'
import { markThreadRead } from '@/lib/messages/markThreadRead'

export const runtime = 'nodejs'

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

type PatchBody = {
  patientId?: string
  message_id?: string
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ threadId: string }> },
) {
  const { threadId } = await context.params
  if (!UUID_RE.test(threadId)) {
    return NextResponse.json({ error: 'Invalid threadId' }, { status: 400 })
  }

  let body: PatchBody
  try {
    body = (await request.json()) as PatchBody
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

  const admin = createAdminClient()

  // Find the patient's participant row + verify thread ownership.
  const { data: participantRaw, error: partErr } = await admin
    .from('message_thread_participants')
    .select('id, message_thread_id, patient_id')
    .eq('message_thread_id', threadId)
    .eq('kind', 'patient')
    .eq('patient_id', patientId)
    .maybeSingle()

  if (partErr) {
    console.error('PATCH /read: participant fetch failed', partErr)
    return NextResponse.json({ error: 'Could not advance read pointer.' }, { status: 500 })
  }
  if (!participantRaw) {
    return NextResponse.json({ error: 'Thread access denied' }, { status: 403 })
  }
  const participant = participantRaw as { id: string }

  // Resolve target message id. If body.message_id is omitted, advance to the
  // latest message in the thread by (created_at, id) tuple.
  let targetMessageId: string | null = body.message_id ?? null
  if (!targetMessageId) {
    const { data: latestRaw, error: latestErr } = await admin
      .from('messages')
      .select('id')
      .eq('message_thread_id', threadId)
      .order('created_at', { ascending: false })
      .order('id', { ascending: false })
      .limit(1)
      .maybeSingle()
    if (latestErr) {
      console.error('PATCH /read: latest message fetch failed', latestErr)
      return NextResponse.json({ error: 'Could not advance read pointer.' }, { status: 500 })
    }
    if (!latestRaw) {
      // Thread is empty; nothing to mark read.
      return NextResponse.json({
        ok: true,
        advanced: false,
        reason: 'thread_empty',
      })
    }
    targetMessageId = (latestRaw as { id: string }).id
  }

  if (!UUID_RE.test(targetMessageId)) {
    return NextResponse.json({ error: 'Invalid message_id' }, { status: 400 })
  }

  try {
    const result = await markThreadRead({
      thread_id: threadId,
      participant_id: participant.id,
      message_id: targetMessageId,
    })
    return NextResponse.json({ ok: true, ...result })
  } catch (e) {
    console.error('PATCH /read failed', e)
    return NextResponse.json({ error: 'Could not advance read pointer.' }, { status: 500 })
  }
}
