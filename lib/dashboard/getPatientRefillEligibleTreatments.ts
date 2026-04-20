import { createAdminClient } from '@/lib/supabase/admin'

export type RefillEligibleTreatment = {
  id: string
  display_name: string
}

/**
 * Treatments in `refill_due` for this patient (care model). Returns [] if tables are missing or on error.
 */
export async function getPatientRefillEligibleTreatments(patientId: string): Promise<RefillEligibleTreatment[]> {
  try {
    const admin = createAdminClient()
    const { data, error } = await admin
      .from('treatment_items')
      .select('id, display_name')
      .eq('patient_id', patientId)
      .eq('status', 'refill_due')
      .order('updated_at', { ascending: false })

    if (error) {
      const code = 'code' in error ? String(error.code) : ''
      const msg = error.message ?? ''
      if (code === '42P01' || msg.includes('does not exist')) return []
      console.error('getPatientRefillEligibleTreatments', error)
      return []
    }
    return (data ?? []) as RefillEligibleTreatment[]
  } catch (e) {
    console.error('getPatientRefillEligibleTreatments', e)
    return []
  }
}
