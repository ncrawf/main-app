import { createAdminClient } from '@/lib/supabase/admin'

function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

/** Keys the patient has dismissed from the dashboard alert stack / feed. */
export async function getPatientDashboardAlertDismissals(patientId: string): Promise<Set<string>> {
  try {
    const admin = createAdminClient()
    const { data, error } = await admin
      .from('patient_dashboard_alert_dismissals')
      .select('alert_key')
      .eq('patient_id', patientId)
    if (error) {
      if (isMissingRelationError(error)) return new Set()
      console.error('getPatientDashboardAlertDismissals', error)
      return new Set()
    }
    return new Set((data ?? []).map((r) => r.alert_key as string))
  } catch (e) {
    console.error('getPatientDashboardAlertDismissals', e)
    return new Set()
  }
}
