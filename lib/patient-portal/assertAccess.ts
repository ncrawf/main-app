import { cookies } from 'next/headers'
import { PATIENT_PORTAL_COOKIE_NAME } from '@/lib/patient-portal/constants'
import { getStaffProfile } from '@/lib/staff/getStaffProfile'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { verifySessionCookieForPatientId } from '@/lib/patient-portal/tokens'

/**
 * Patient dashboard data may load when either:
 * - a valid patient-portal session cookie is present for this `patientId`, or
 * - a signed-in staff member opens the page (preview / support).
 */
/** True only when the httpOnly patient portal session cookie matches this patient (not staff preview). */
export async function assertPatientPortalSessionOnly(patientId: string): Promise<boolean> {
  const jar = await cookies()
  const raw = jar.get(PATIENT_PORTAL_COOKIE_NAME)?.value
  try {
    return await verifySessionCookieForPatientId(raw, patientId)
  } catch {
    return false
  }
}

export async function assertPatientDashboardAccess(patientId: string): Promise<boolean> {
  const jar = await cookies()
  const raw = jar.get(PATIENT_PORTAL_COOKIE_NAME)?.value
  try {
    if (await verifySessionCookieForPatientId(raw, patientId)) return true
  } catch {
    return false
  }

  const supabase = await createSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return false
  const profile = await getStaffProfile(supabase, user.id)
  return !!profile
}
