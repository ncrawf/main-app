import type { SupabaseClient } from '@supabase/supabase-js'

export type StaffProfile = {
  id: string
  role: string
  display_name: string | null
  first_name: string | null
  last_name: string | null
  credentials: string | null
  specialty: string | null
  board_certifications: string[]
  years_in_practice: number | null
  npi: string | null
  dea_number: string | null
  state_licenses: Array<Record<string, unknown>>
  prescription_licenses: Array<Record<string, unknown>>
  timezone: string
  service_state_codes: string[]
  availability: Record<string, unknown>
}

export async function getStaffProfile(
  supabase: SupabaseClient,
  userId: string
): Promise<StaffProfile | null> {
  const { data, error } = await supabase
    .from('staff_profiles')
    .select(
      'id, role, display_name, first_name, last_name, credentials, specialty, board_certifications, years_in_practice, npi, dea_number, state_licenses, prescription_licenses, timezone, service_state_codes, availability'
    )
    .eq('id', userId)
    .maybeSingle()

  if (error) {
    console.error(error)
    return null
  }
  if (!data) return null

  return {
    ...data,
    board_certifications: Array.isArray(data.board_certifications)
      ? (data.board_certifications as string[])
      : [],
    state_licenses: Array.isArray(data.state_licenses)
      ? (data.state_licenses as Array<Record<string, unknown>>)
      : [],
    prescription_licenses: Array.isArray(data.prescription_licenses)
      ? (data.prescription_licenses as Array<Record<string, unknown>>)
      : [],
    availability: (data.availability as Record<string, unknown>) ?? {},
  }
}
