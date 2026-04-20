import { NextResponse } from 'next/server'
import { assertPatientPortalSessionOnly } from '@/lib/patient-portal/assertAccess'
import { submitPatientRefillRequest } from '@/lib/refill/submitPatientRefillRequest'
import { createAdminClient } from '@/lib/supabase/admin'

export const runtime = 'nodejs'

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

type Body = {
  patientId?: string
  treatmentItemId?: string
  note?: string | null
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

  let admin
  try {
    admin = createAdminClient()
  } catch (e) {
    console.error('refill-request: admin client', e)
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const result = await submitPatientRefillRequest(admin, patientId, treatmentItemId, body.note ?? null)
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status })
  }

  return NextResponse.json({ ok: true, refillRequestId: result.refillRequestId })
}
