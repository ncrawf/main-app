import { NextResponse } from 'next/server'
import { assertPatientPortalSessionOnly } from '@/lib/patient-portal/assertAccess'
import { createAdminClient } from '@/lib/supabase/admin'

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

const MAX_KEY_LEN = 256

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ ok: false, error: 'invalid_body' }, { status: 400 })
  }
  const o = body as Record<string, unknown>
  const patientId = typeof o.patient_id === 'string' ? o.patient_id.trim() : ''
  const alertKey = typeof o.alert_key === 'string' ? o.alert_key.trim() : ''
  if (!UUID_RE.test(patientId)) {
    return NextResponse.json({ ok: false, error: 'invalid_patient' }, { status: 400 })
  }
  if (!alertKey || alertKey.length > MAX_KEY_LEN || alertKey.includes('\0')) {
    return NextResponse.json({ ok: false, error: 'invalid_alert_key' }, { status: 400 })
  }

  if (!(await assertPatientPortalSessionOnly(patientId))) {
    return NextResponse.json({ ok: false, error: 'session_required' }, { status: 401 })
  }

  try {
    const admin = createAdminClient()
    const { error } = await admin.from('patient_dashboard_alert_dismissals').upsert(
      { patient_id: patientId, alert_key: alertKey },
      { onConflict: 'patient_id,alert_key' }
    )
    if (error) {
      const code = 'code' in error ? String(error.code) : ''
      const msg = error.message ?? ''
      if (code === '42P01' || msg.includes('does not exist')) {
        return NextResponse.json({ ok: false, error: 'table_missing' }, { status: 503 })
      }
      console.error('dashboard-alert-dismiss', error)
      return NextResponse.json({ ok: false, error: 'db_error' }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('dashboard-alert-dismiss', e)
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 })
  }
}
