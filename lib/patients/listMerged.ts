import type { SupabaseClient } from '@supabase/supabase-js'
import { deriveWorkflowStatusFromCare } from '@/lib/dashboard/deriveWorkflowStatusFromCare'

export type PatientListRow = {
  id: string
  email: string
  first_name: string | null
  last_name: string | null
  phone: string | null
  dob: string | null
  created_at: string
  updated_at: string
  workflow_status: string | null
  state_updated_at: string | null
  assigned_to: string | null
  assignee_display_name: string | null
  primary_program_status: string | null
  treatment_statuses: string[]
}

function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

export async function listPatientsWithState(supabase: SupabaseClient): Promise<PatientListRow[]> {
  const { data: patients, error: pErr } = await supabase
    .from('patients')
    .select('id, email, first_name, last_name, phone, dob, created_at, updated_at')
    .order('created_at', { ascending: false })

  if (pErr) {
    const code = 'code' in pErr && typeof (pErr as { code?: unknown }).code === 'string' ? (pErr as { code: string }).code : ''
    const message =
      'message' in pErr && typeof (pErr as { message?: unknown }).message === 'string'
        ? (pErr as { message: string }).message
        : JSON.stringify(pErr)
    console.warn('listPatientsWithState: patients query failed', code || '(no code)', message)
    return []
  }

  if (!patients?.length) return []

  const ids = patients.map((p) => p.id)
  const { data: states, error: sErr } = await supabase
    .from('patient_states')
    .select('patient_id, updated_at, assigned_to')
    .in('patient_id', ids)

  if (sErr) {
    const code = 'code' in sErr && typeof (sErr as { code?: unknown }).code === 'string' ? (sErr as { code: string }).code : ''
    const message =
      'message' in sErr && typeof (sErr as { message?: unknown }).message === 'string'
        ? (sErr as { message: string }).message
        : JSON.stringify(sErr)
    console.warn('listPatientsWithState: patient_states query failed', code || '(no code)', message)
  }
  const stateRows = sErr ? [] : (states ?? [])

  const assigneeIds = new Set<string>()
  const byPatient = new Map<
    string,
    { updated_at: string; assigned_to: string | null }
  >()
  for (const s of stateRows) {
    byPatient.set(s.patient_id, {
      updated_at: s.updated_at,
      assigned_to: s.assigned_to ?? null,
    })
    if (s.assigned_to) assigneeIds.add(s.assigned_to)
  }

  let assigneeNames = new Map<string, string | null>()
  if (assigneeIds.size > 0) {
    const { data: staff } = await supabase
      .from('staff_profiles')
      .select('id, display_name')
      .in('id', [...assigneeIds])

    assigneeNames = new Map((staff ?? []).map((r) => [r.id, r.display_name]))
  }

  // Read-only care-model badges for queueing (safe fallback if migration not applied).
  const byPrimaryProgramStatus = new Map<string, string | null>()
  const byTreatmentStatuses = new Map<string, string[]>()

  const { data: carePrograms, error: cpErr } = await supabase
    .from('care_programs')
    .select('patient_id, status, updated_at')
    .in('patient_id', ids)
    .order('updated_at', { ascending: false })

  if (cpErr && !isMissingRelationError(cpErr)) {
    console.error(cpErr)
  }
  for (const row of carePrograms ?? []) {
    if (!byPrimaryProgramStatus.has(row.patient_id)) {
      byPrimaryProgramStatus.set(row.patient_id, row.status)
    }
  }

  const { data: treatmentItems, error: tiErr } = await supabase
    .from('treatment_items')
    .select('patient_id, status, updated_at')
    .in('patient_id', ids)
    .order('updated_at', { ascending: false })

  if (tiErr && !isMissingRelationError(tiErr)) {
    console.error(tiErr)
  }
  for (const row of treatmentItems ?? []) {
    const curr = byTreatmentStatuses.get(row.patient_id) ?? []
    if (!curr.includes(row.status)) curr.push(row.status)
    byTreatmentStatuses.set(row.patient_id, curr.slice(0, 3))
  }

  return patients.map((p) => {
    const st = byPatient.get(p.id)
    const aid = st?.assigned_to ?? null
    return {
      id: p.id,
      email: p.email,
      first_name: p.first_name,
      last_name: p.last_name,
      phone: p.phone,
      dob: p.dob,
      created_at: p.created_at,
      updated_at: p.updated_at,
      workflow_status: deriveWorkflowStatusFromCare({
        primaryProgramStatus: byPrimaryProgramStatus.get(p.id) ?? null,
        treatmentStatuses: byTreatmentStatuses.get(p.id) ?? [],
      }),
      state_updated_at: st?.updated_at ?? null,
      assigned_to: aid,
      assignee_display_name: aid ? (assigneeNames.get(aid) ?? null) : null,
      primary_program_status: byPrimaryProgramStatus.get(p.id) ?? null,
      treatment_statuses: byTreatmentStatuses.get(p.id) ?? [],
    }
  })
}
