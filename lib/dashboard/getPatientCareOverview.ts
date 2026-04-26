import { createAdminClient } from '@/lib/supabase/admin'
import { treatmentStatusTrackingHint } from '@/lib/dashboard/formatCarePatientView'

function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

export type PatientCareProgramCard = {
  id: string
  program_type: string
  title: string | null
  status: string
  started_at: string | null
  created_at: string
  updated_at: string
  subtitle: string
  tracking_hint: string | null
  treatment_count: number
  needs_attention_now: boolean
  next_action_summary: string
}

export type PatientCareTreatmentDetail = {
  id: string
  care_program_id: string
  display_name: string
  treatment_key: string
  category: string | null
  status: string
  dosage: Record<string, unknown>
  metadata: Record<string, unknown>
  started_at: string | null
  created_at: string
  updated_at: string
  latest_refill_status: string | null
  tracking_hint: string
}

export type PatientCareOverview = {
  available: boolean
  programs: PatientCareProgramCard[]
  treatmentsByProgramId: Record<string, PatientCareTreatmentDetail[]>
}

function buildSubtitle(items: PatientCareTreatmentDetail[]): string {
  if (items.length === 0) return 'No treatments linked yet.'
  const names = items.slice(0, 2).map((i) => i.display_name)
  const extra = items.length > 2 ? ` +${items.length - 2} more` : ''
  return `${names.join(' · ')}${extra}`
}

function buildProgramHint(items: PatientCareTreatmentDetail[]): string | null {
  if (items.some((i) => i.status === 'refill_due')) {
    return 'A refill may be due — open the program to request or review.'
  }
  if (items.some((i) => i.status === 'refill_pending')) {
    return 'A refill is in progress with your care team.'
  }
  if (items.some((i) => i.status === 'pending_approval')) {
    return 'A treatment is awaiting clinician approval.'
  }
  return null
}

function buildProgramActionSummary(items: PatientCareTreatmentDetail[]): {
  needsAttentionNow: boolean
  nextActionSummary: string
} {
  if (items.some((i) => i.status === 'refill_due')) {
    return {
      needsAttentionNow: true,
      nextActionSummary: 'Continue plan for refill-due treatment',
    }
  }
  if (items.some((i) => i.status === 'refill_pending')) {
    return {
      needsAttentionNow: true,
      nextActionSummary: 'Review in progress for a continuation step',
    }
  }
  if (items.some((i) => i.status === 'pending_approval')) {
    return {
      needsAttentionNow: true,
      nextActionSummary: 'Waiting on clinician review',
    }
  }
  if (items.some((i) => i.status === 'active')) {
    return {
      needsAttentionNow: false,
      nextActionSummary: 'Stay on plan and watch next prompts',
    }
  }
  return {
    needsAttentionNow: false,
    nextActionSummary: 'No immediate action',
  }
}

export async function getPatientCareOverview(patientId: string): Promise<PatientCareOverview> {
  const admin = createAdminClient()

  const { data: programs, error: pErr } = await admin
    .from('care_programs')
    .select('id, program_type, title, status, started_at, created_at, updated_at')
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })

  if (pErr) {
    if (isMissingRelationError(pErr)) return { available: false, programs: [], treatmentsByProgramId: {} }
    console.error('getPatientCareOverview.care_programs', pErr)
    return { available: true, programs: [], treatmentsByProgramId: {} }
  }

  const programRows = programs ?? []
  if (programRows.length === 0) {
    return { available: true, programs: [], treatmentsByProgramId: {} }
  }

  const { data: treatments, error: tErr } = await admin
    .from('treatment_items')
    .select(
      'id, care_program_id, display_name, treatment_key, category, status, dosage, metadata, started_at, created_at, updated_at'
    )
    .eq('patient_id', patientId)
    .order('updated_at', { ascending: false })

  if (tErr) {
    if (isMissingRelationError(tErr)) return { available: false, programs: [], treatmentsByProgramId: {} }
    console.error('getPatientCareOverview.treatment_items', tErr)
    return { available: true, programs: [], treatmentsByProgramId: {} }
  }

  const treatmentList = (treatments ?? []) as Omit<PatientCareTreatmentDetail, 'latest_refill_status' | 'tracking_hint'>[]

  const { data: refills, error: rErr } = await admin
    .from('refill_requests')
    .select('treatment_item_id, status, created_at')
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })

  const latestRefillByTreatment = new Map<string, string>()
  if (rErr && !isMissingRelationError(rErr)) {
    console.error('getPatientCareOverview.refill_requests', rErr)
  }
  if (!rErr && refills) {
    for (const row of refills) {
      const tid = row.treatment_item_id as string
      if (!latestRefillByTreatment.has(tid)) {
        latestRefillByTreatment.set(tid, row.status as string)
      }
    }
  }

  const byProgram: Record<string, PatientCareTreatmentDetail[]> = {}
  for (const t of treatmentList) {
    const dosage = (t.dosage as Record<string, unknown>) ?? {}
    const metadata = (t.metadata as Record<string, unknown>) ?? {}
    const detail: PatientCareTreatmentDetail = {
      ...t,
      dosage,
      metadata,
      latest_refill_status: latestRefillByTreatment.get(t.id) ?? null,
      tracking_hint: treatmentStatusTrackingHint(t.status),
    }
    if (!byProgram[t.care_program_id]) byProgram[t.care_program_id] = []
    byProgram[t.care_program_id].push(detail)
  }

  const cards: PatientCareProgramCard[] = programRows.map((p) => {
    const items = byProgram[p.id] ?? []
    const action = buildProgramActionSummary(items)
    return {
      id: p.id,
      program_type: p.program_type,
      title: p.title,
      status: p.status,
      started_at: p.started_at,
      created_at: p.created_at,
      updated_at: p.updated_at,
      subtitle: buildSubtitle(items),
      tracking_hint: buildProgramHint(items),
      treatment_count: items.length,
      needs_attention_now: action.needsAttentionNow,
      next_action_summary: action.nextActionSummary,
    }
  })

  return { available: true, programs: cards, treatmentsByProgramId: byProgram }
}

export async function getPatientCareProgramDetail(
  patientId: string,
  programId: string
): Promise<{ ok: true; program: PatientCareProgramCard; treatments: PatientCareTreatmentDetail[] } | { ok: false }> {
  const overview = await getPatientCareOverview(patientId)
  if (!overview.available) return { ok: false }
  const program = overview.programs.find((p) => p.id === programId)
  if (!program) return { ok: false }
  const treatments = overview.treatmentsByProgramId[programId] ?? []
  return { ok: true, program, treatments }
}
