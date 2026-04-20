import type { SupabaseClient } from '@supabase/supabase-js'

export type ProviderProfile = {
  id: string
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
}

export async function listProviders(supabase: SupabaseClient): Promise<ProviderProfile[]> {
  const { data, error } = await supabase
    .from('staff_profiles')
    .select(
      'id, display_name, first_name, last_name, credentials, specialty, board_certifications, years_in_practice, npi, dea_number, state_licenses, prescription_licenses'
    )
    .eq('role', 'prescriber')
    .order('display_name', { ascending: true })

  if (error) {
    console.error('listProviders', error)
    return []
  }

  return ((data ?? []) as Array<Record<string, unknown>>).map((row) => ({
    id: String(row.id ?? ''),
    display_name: typeof row.display_name === 'string' ? row.display_name : null,
    first_name: typeof row.first_name === 'string' ? row.first_name : null,
    last_name: typeof row.last_name === 'string' ? row.last_name : null,
    credentials: typeof row.credentials === 'string' ? row.credentials : null,
    specialty: typeof row.specialty === 'string' ? row.specialty : null,
    board_certifications: Array.isArray(row.board_certifications)
      ? (row.board_certifications.filter((item): item is string => typeof item === 'string') as string[])
      : [],
    years_in_practice: typeof row.years_in_practice === 'number' ? row.years_in_practice : null,
    npi: typeof row.npi === 'string' ? row.npi : null,
    dea_number: typeof row.dea_number === 'string' ? row.dea_number : null,
    state_licenses: Array.isArray(row.state_licenses)
      ? (row.state_licenses.filter((item): item is Record<string, unknown> => !!item && typeof item === 'object') as Array<
          Record<string, unknown>
        >)
      : [],
    prescription_licenses: Array.isArray(row.prescription_licenses)
      ? (row.prescription_licenses.filter((item): item is Record<string, unknown> => !!item && typeof item === 'object') as Array<
          Record<string, unknown>
        >)
      : [],
  }))
}
