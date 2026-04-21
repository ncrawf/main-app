import { createAdminClient } from '@/lib/supabase/admin'
import { OPEN_REFILL_REQUEST_STATUSES } from '@/lib/refill/refillRequestTransitions'

export type RefillEligibleTreatment = {
  id: string
  display_name: string
  treatment_key: string
  category: string | null
}

/**
 * Treatments in `refill_due` for this patient (care model). Returns [] if tables are missing or on error.
 */
export async function getPatientRefillEligibleTreatments(patientId: string): Promise<RefillEligibleTreatment[]> {
  try {
    const admin = createAdminClient()
    const { data, error } = await admin
      .from('treatment_items')
      .select('id, display_name, treatment_key, category')
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
    const eligible = (data ?? []) as RefillEligibleTreatment[]
    if (eligible.length === 0) return []

    const { data: openRows, error: openErr } = await admin
      .from('refill_requests')
      .select('treatment_item_id, status')
      .eq('patient_id', patientId)
      .in('status', [...OPEN_REFILL_REQUEST_STATUSES])

    if (openErr) {
      const code = 'code' in openErr ? String(openErr.code) : ''
      const msg = openErr.message ?? ''
      if (code !== '42P01' && !msg.includes('does not exist')) {
        console.error('getPatientRefillEligibleTreatments.openRows', openErr)
      }
      return eligible
    }

    const blockedTreatmentIds = new Set(
      (openRows ?? [])
        .map((row) => (typeof row.treatment_item_id === 'string' ? row.treatment_item_id : null))
        .filter((v): v is string => !!v)
    )

    return eligible.filter((row) => !blockedTreatmentIds.has(row.id))
  } catch (e) {
    console.error('getPatientRefillEligibleTreatments', e)
    return []
  }
}
