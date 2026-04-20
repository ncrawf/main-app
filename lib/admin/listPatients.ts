import { listPatientsWithState, type PatientListRow } from '@/lib/patients/listMerged'
import { createAdminClient } from '@/lib/supabase/admin'

export type AdminPatientRow = PatientListRow

export async function listPatientsForAdmin(): Promise<AdminPatientRow[]> {
  return listPatientsWithState(createAdminClient())
}
