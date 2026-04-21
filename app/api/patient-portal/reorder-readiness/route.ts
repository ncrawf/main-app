import { NextResponse } from 'next/server'
import { assertPatientPortalSessionOnly } from '@/lib/patient-portal/assertAccess'
import { getPatientCareOverview } from '@/lib/dashboard/getPatientCareOverview'
import { getPatientRefillEligibleTreatments } from '@/lib/dashboard/getPatientRefillEligibleTreatments'
import { getPatientTreatmentCheckinPrompts } from '@/lib/dashboard/getPatientTreatmentCheckinPrompts'
import { buildPatientReorderReadinessSnapshot } from '@/lib/dashboard/patientReorderReadinessContract'

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const patientId = searchParams.get('patient_id')?.trim() ?? ''
  if (!UUID_RE.test(patientId)) {
    return NextResponse.json({ error: 'invalid_patient_id' }, { status: 400 })
  }
  if (!(await assertPatientPortalSessionOnly(patientId))) {
    return NextResponse.json({ error: 'session_required' }, { status: 401 })
  }

  const [careOverview, refillEligible, checkinPrompts] = await Promise.all([
    getPatientCareOverview(patientId),
    getPatientRefillEligibleTreatments(patientId),
    getPatientTreatmentCheckinPrompts(patientId),
  ])

  const snapshot = buildPatientReorderReadinessSnapshot({
    patientId,
    careOverview,
    portalSession: true,
    refillEligible,
    checkinPrompts,
  })

  return NextResponse.json(snapshot)
}
