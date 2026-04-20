import { NextResponse } from 'next/server'
import { assertPatientPortalSessionOnly } from '@/lib/patient-portal/assertAccess'
import { createAdminClient } from '@/lib/supabase/admin'

export const runtime = 'nodejs'

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

type Body = {
  patientId?: string
  treatmentItemId?: string
  weightLb?: number | string | null
  sleepQuality?: number | null
  appetiteControl?: number | null
  energyLevel?: number | null
  edFirmness?: number | null
  edDuration?: number | null
  doseAdequate?: 'yes' | 'no' | 'unsure'
  sideEffects?: string
  progressNotes?: string
}

function clampScale(v: unknown): number | null {
  if (v === null || v === undefined || v === '') return null
  const n = Number(v)
  if (!Number.isFinite(n)) return null
  const rounded = Math.round(n)
  if (rounded < 1 || rounded > 5) return null
  return rounded
}

export async function POST(request: Request) {
  let body: Body
  try {
    body = (await request.json()) as Body
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const patientId = body.patientId?.trim()
  const treatmentItemId = body.treatmentItemId?.trim()
  if (!patientId || !UUID_RE.test(patientId)) {
    return NextResponse.json({ error: 'Invalid patientId' }, { status: 400 })
  }
  if (!treatmentItemId || !UUID_RE.test(treatmentItemId)) {
    return NextResponse.json({ error: 'Invalid treatmentItemId' }, { status: 400 })
  }

  const portalOk = await assertPatientPortalSessionOnly(patientId)
  if (!portalOk) {
    return NextResponse.json({ error: 'Sign in again using your secure dashboard link.' }, { status: 401 })
  }

  const doseAdequate = body.doseAdequate ?? 'unsure'
  if (doseAdequate !== 'yes' && doseAdequate !== 'no' && doseAdequate !== 'unsure') {
    return NextResponse.json({ error: 'Invalid dose adequacy value.' }, { status: 400 })
  }

  const weightLb =
    body.weightLb === null || body.weightLb === undefined || body.weightLb === ''
      ? null
      : Math.round(Number(body.weightLb))
  if (weightLb !== null && (!Number.isFinite(weightLb) || weightLb < 70 || weightLb > 700)) {
    return NextResponse.json({ error: 'Weight must be between 70 and 700 lbs.' }, { status: 400 })
  }

  const sleepQuality = clampScale(body.sleepQuality)
  const appetiteControl = clampScale(body.appetiteControl)
  const energyLevel = clampScale(body.energyLevel)
  const edFirmness = clampScale(body.edFirmness)
  const edDuration = clampScale(body.edDuration)

  const sideEffects = String(body.sideEffects ?? '').trim()
  const progressNotes = String(body.progressNotes ?? '').trim()
  if (sideEffects.length > 4000 || progressNotes.length > 4000) {
    return NextResponse.json({ error: 'Notes are too long.' }, { status: 400 })
  }

  let admin
  try {
    admin = createAdminClient()
  } catch (e) {
    console.error('treatment-checkin: admin client', e)
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const { data: treatment, error: tErr } = await admin
    .from('treatment_items')
    .select('id, patient_id, display_name, treatment_key, metadata')
    .eq('id', treatmentItemId)
    .maybeSingle()
  if (tErr || !treatment || treatment.patient_id !== patientId) {
    return NextResponse.json({ error: 'Treatment not found for this patient.' }, { status: 404 })
  }

  const payload = {
    treatment_item_id: treatment.id,
    treatment_key: treatment.treatment_key,
    display_name: treatment.display_name,
    submitted_by: 'patient_portal',
    checkin: {
      weight_lb: weightLb,
      sleep_quality: sleepQuality,
      appetite_control: appetiteControl,
      energy_level: energyLevel,
      ed_firmness: edFirmness,
      ed_duration: edDuration,
      dose_adequate: doseAdequate,
      side_effects: sideEffects || null,
      progress_notes: progressNotes || null,
    },
  }

  const bodyText = `Patient check-in submitted for ${treatment.display_name}.`
  const { data: inserted, error: iErr } = await admin
    .from('patient_timeline_events')
    .insert({
      patient_id: patientId,
      treatment_item_id: treatment.id,
      event_type: 'patient_treatment_checkin_submitted',
      body: bodyText,
      actor_user_id: null,
      payload,
    })
    .select('id')
    .maybeSingle()
  if (iErr) {
    console.error('treatment-checkin: timeline', iErr)
    return NextResponse.json({ error: 'Could not save check-in.' }, { status: 500 })
  }
  if (inserted?.id) {
    const { error: cErr } = await admin.from('patient_treatment_checkins').insert({
      patient_id: patientId,
      treatment_item_id: treatment.id,
      source_timeline_event_id: inserted.id,
      treatment_key: treatment.treatment_key,
      display_name: treatment.display_name,
      checkin: payload.checkin,
    })
    if (cErr) console.error('treatment-checkin: ops row', cErr)
  }

  const priorMetadata = ((treatment.metadata as Record<string, unknown>) ?? {}) as Record<string, unknown>
  const { error: mErr } = await admin
    .from('treatment_items')
    .update({
      metadata: {
        ...priorMetadata,
        latest_patient_checkin: {
          submitted_at: new Date().toISOString(),
          weight_lb: weightLb,
          sleep_quality: sleepQuality,
          appetite_control: appetiteControl,
          energy_level: energyLevel,
          ed_firmness: edFirmness,
          ed_duration: edDuration,
          dose_adequate: doseAdequate,
        },
      },
      updated_at: new Date().toISOString(),
    })
    .eq('id', treatment.id)
  if (mErr) console.error('treatment-checkin: metadata', mErr)

  return NextResponse.json({ ok: true })
}

