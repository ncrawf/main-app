import { createAdminClient } from '@/lib/supabase/admin'

export type PatientRow = {
  id: string
  email: string
  first_name: string | null
  last_name: string | null
  phone: string | null
  dob: string | null
  address_line1: string | null
  address_line2: string | null
  city: string | null
  state: string | null
  postal_code: string | null
  created_at: string
  updated_at: string
}

export type PatientStateRow = {
  workflow_status: string | null
  updated_at: string | null
}

export async function getPatientDashboard(patientId: string): Promise<{
  patient: PatientRow
} | null> {
  const supabase = createAdminClient()

  const { data: patient, error: pErr } = await supabase
    .from('patients')
    .select(
      'id, email, first_name, last_name, phone, dob, address_line1, address_line2, city, state, postal_code, created_at, updated_at'
    )
    .eq('id', patientId)
    .maybeSingle()

  if (pErr) {
    console.error(pErr)
    throw new Error('Could not load patient')
  }
  if (!patient) return null

  return {
    patient: patient as PatientRow,
  }
}
