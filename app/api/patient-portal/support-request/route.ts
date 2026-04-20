import { NextResponse } from 'next/server'
import { assertPatientPortalSessionOnly } from '@/lib/patient-portal/assertAccess'
import { createAdminClient } from '@/lib/supabase/admin'

export const runtime = 'nodejs'

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

type MessageBody = {
  patientId?: string
  type?: 'message'
  recipient?: 'team' | 'provider'
  message?: string
}

type CallbackBody = {
  patientId?: string
  type?: 'callback'
  callbackFrom?: 'team' | 'provider'
  timing?: 'asap' | 'later_today' | 'within_24h'
  medium?: 'phone' | 'video'
  note?: string
}

type Body = MessageBody | CallbackBody

function isRecipient(v: unknown): v is 'team' | 'provider' {
  return v === 'team' || v === 'provider'
}

function isTiming(v: unknown): v is 'asap' | 'later_today' | 'within_24h' {
  return v === 'asap' || v === 'later_today' || v === 'within_24h'
}

function isMedium(v: unknown): v is 'phone' | 'video' {
  return v === 'phone' || v === 'video'
}

export async function POST(request: Request) {
  let body: Body
  try {
    body = (await request.json()) as Body
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const patientId = body.patientId?.trim()
  if (!patientId || !UUID_RE.test(patientId)) {
    return NextResponse.json({ error: 'Invalid patientId' }, { status: 400 })
  }

  const portalOk = await assertPatientPortalSessionOnly(patientId)
  if (!portalOk) {
    return NextResponse.json({ error: 'Sign in again using your secure dashboard link.' }, { status: 401 })
  }

  let admin
  try {
    admin = createAdminClient()
  } catch (e) {
    console.error('support-request: admin client', e)
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const now = new Date().toISOString()

  if (body.type === 'message') {
    const recipient = body.recipient
    const message = body.message?.trim() ?? ''
    if (!isRecipient(recipient)) {
      return NextResponse.json({ error: 'Invalid recipient' }, { status: 400 })
    }
    if (message.length < 5 || message.length > 2000) {
      return NextResponse.json({ error: 'Message must be 5-2000 characters.' }, { status: 400 })
    }

    const portalPayload = { recipient, submitted_at: now }
    const { data: inserted, error } = await admin
      .from('patient_timeline_events')
      .insert({
        patient_id: patientId,
        event_type: 'patient_message_submitted',
        body: message,
        actor_user_id: null,
        payload: portalPayload,
      })
      .select('id')
      .maybeSingle()
    if (error) {
      console.error('support-request: message insert', error)
      return NextResponse.json({ error: 'Could not submit your message right now.' }, { status: 500 })
    }
    if (inserted?.id) {
      const { error: sopErr } = await admin.from('patient_support_requests').insert({
        patient_id: patientId,
        source_timeline_event_id: inserted.id,
        request_kind: 'message',
        status: 'new',
        portal_payload: portalPayload,
      })
      if (sopErr) console.error('support-request: message ops row', sopErr)
    }
    return NextResponse.json({ ok: true })
  }

  if (body.type === 'callback') {
    const callbackFrom = body.callbackFrom
    const timing = body.timing
    const medium = body.medium
    const note = body.note?.trim() ?? ''
    if (!isRecipient(callbackFrom) || !isTiming(timing) || !isMedium(medium)) {
      return NextResponse.json({ error: 'Invalid callback request fields.' }, { status: 400 })
    }
    if (note.length > 1200) {
      return NextResponse.json({ error: 'Note must be 1200 characters or less.' }, { status: 400 })
    }

    const bodyText =
      note.length > 0
        ? `Requested ${medium} callback from ${callbackFrom} (${timing}).\n\n${note}`
        : `Requested ${medium} callback from ${callbackFrom} (${timing}).`

    const portalPayload = {
      callback_from: callbackFrom,
      timing,
      medium,
      note: note || null,
      submitted_at: now,
    }
    const { data: inserted, error } = await admin
      .from('patient_timeline_events')
      .insert({
        patient_id: patientId,
        event_type: 'patient_callback_requested',
        body: bodyText,
        actor_user_id: null,
        payload: portalPayload,
      })
      .select('id')
      .maybeSingle()
    if (error) {
      console.error('support-request: callback insert', error)
      return NextResponse.json({ error: 'Could not submit your callback request right now.' }, { status: 500 })
    }
    if (inserted?.id) {
      const { error: sopErr } = await admin.from('patient_support_requests').insert({
        patient_id: patientId,
        source_timeline_event_id: inserted.id,
        request_kind: 'callback',
        status: 'new',
        portal_payload: portalPayload,
      })
      if (sopErr) console.error('support-request: callback ops row', sopErr)
    }
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Invalid request type.' }, { status: 400 })
}

