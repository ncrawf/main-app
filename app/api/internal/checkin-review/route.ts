import { NextResponse } from 'next/server'
import { getStaffProfile } from '@/lib/staff/getStaffProfile'
import { createSupabaseServerClient } from '@/lib/supabase/server'

export const runtime = 'nodejs'

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

type Body = {
  patientId?: string
  sourceEventId?: string
}

export async function POST(request: Request) {
  let body: Body
  try {
    body = (await request.json()) as Body
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const patientId = body.patientId?.trim()
  const sourceEventId = body.sourceEventId?.trim()
  if (!patientId || !UUID_RE.test(patientId) || !sourceEventId || !UUID_RE.test(sourceEventId)) {
    return NextResponse.json({ error: 'Invalid ids.' }, { status: 400 })
  }

  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Not signed in.' }, { status: 401 })

  const staff = await getStaffProfile(supabase, user.id)
  if (!staff) return NextResponse.json({ error: 'Staff access required.' }, { status: 403 })

  const { data: source, error: sourceErr } = await supabase
    .from('patient_timeline_events')
    .select('id, patient_id, event_type')
    .eq('id', sourceEventId)
    .maybeSingle()
  if (sourceErr || !source) {
    return NextResponse.json({ error: 'Source check-in not found.' }, { status: 404 })
  }
  if (source.patient_id !== patientId || source.event_type !== 'patient_treatment_checkin_submitted') {
    return NextResponse.json({ error: 'Invalid source check-in event.' }, { status: 400 })
  }

  const { data: existing } = await supabase
    .from('patient_timeline_events')
    .select('id')
    .eq('patient_id', patientId)
    .eq('event_type', 'patient_treatment_checkin_reviewed')
    .eq('payload->>source_event_id', sourceEventId)
    .maybeSingle()
  if (existing) return NextResponse.json({ ok: true })

  const { error: insErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    event_type: 'patient_treatment_checkin_reviewed',
    body: 'Staff reviewed patient check-in.',
    actor_user_id: user.id,
    payload: {
      source_event_id: sourceEventId,
      reviewed_at: new Date().toISOString(),
      reviewed_by: user.id,
    },
  })
  if (insErr) {
    console.error('checkin-review.insert', insErr)
    return NextResponse.json({ error: 'Could not mark check-in as reviewed.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

