import type { SupabaseClient } from '@supabase/supabase-js'
import type { WorkflowEventSource } from '@/lib/workflows/types'

type SyncArgs = {
  patientId: string
  legacyStatus: string
  source: WorkflowEventSource
}

export type CareSyncResult = {
  available: boolean
  careProgramId: string | null
  treatmentItemId: string | null
}

function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

function mapProgramStatus(legacy: string):
  | 'intake_submitted'
  | 'under_review'
  | 'approved'
  | 'denied'
  | 'active'
  | 'paused'
  | 'completed'
  | 'cancelled' {
  switch (legacy) {
    case 'approved':
      return 'approved'
    case 'denied':
      return 'denied'
    case 'rx_sent':
    case 'shipped':
    case 'active':
    case 'followup_due':
    case 'refill_pending':
      return 'active'
    case 'rejected_followup':
    case 'awaiting_review':
    case 'payment_completed':
      return 'under_review'
    case 'lead':
    case 'intake_started':
    case 'intake_submitted':
    default:
      return 'intake_submitted'
  }
}

function mapTreatmentStatus(legacy: string):
  | 'pending_approval'
  | 'approved'
  | 'denied'
  | 'rx_sent'
  | 'shipped'
  | 'active'
  | 'paused'
  | 'stopped'
  | 'refill_due'
  | 'refill_pending' {
  switch (legacy) {
    case 'approved':
      return 'approved'
    case 'denied':
      return 'denied'
    case 'rx_sent':
      return 'rx_sent'
    case 'shipped':
      return 'shipped'
    case 'active':
      return 'active'
    case 'refill_pending':
      return 'refill_pending'
    case 'followup_due':
      return 'refill_due'
    case 'lead':
    case 'intake_started':
    case 'intake_submitted':
    case 'payment_completed':
    case 'awaiting_review':
    case 'rejected_followup':
    default:
      return 'pending_approval'
  }
}

/**
 * Transitional compatibility shim.
 * Accepts legacy status semantics as input and projects them into canonical care tables.
 * If care tables are not migrated yet, returns `{ available: false }` without throwing.
 */
export async function syncLegacyGlp1ToCareModel(
  supabase: SupabaseClient,
  args: SyncArgs
): Promise<CareSyncResult> {
  const now = new Date().toISOString()
  const programStatus = mapProgramStatus(args.legacyStatus)
  const treatmentStatus = mapTreatmentStatus(args.legacyStatus)

  const programType = 'weight_loss'
  const treatmentKey = 'glp1_primary'

  const { data: existingProgram, error: pSelErr } = await supabase
    .from('care_programs')
    .select('id')
    .eq('patient_id', args.patientId)
    .eq('program_type', programType)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (pSelErr) {
    if (isMissingRelationError(pSelErr)) {
      return { available: false, careProgramId: null, treatmentItemId: null }
    }
    console.error('syncLegacyGlp1ToCareModel.care_programs.select', pSelErr)
    return { available: false, careProgramId: null, treatmentItemId: null }
  }

  let careProgramId = existingProgram?.id ?? null

  if (!careProgramId) {
    const { data: createdProgram, error: pInsErr } = await supabase
      .from('care_programs')
      .insert({
        patient_id: args.patientId,
        program_type: programType,
        status: programStatus,
        title: 'Weight Loss Program',
        metadata: { dual_write_source: args.source },
        created_at: now,
        updated_at: now,
      })
      .select('id')
      .single()

    if (pInsErr || !createdProgram) {
      console.error('syncLegacyGlp1ToCareModel.care_programs.insert', pInsErr)
      return { available: false, careProgramId: null, treatmentItemId: null }
    }
    careProgramId = createdProgram.id
  } else {
    const { error: pUpdErr } = await supabase
      .from('care_programs')
      .update({
        status: programStatus,
        updated_at: now,
        metadata: { dual_write_source: args.source, legacy_glp1_status: args.legacyStatus },
      })
      .eq('id', careProgramId)
    if (pUpdErr) console.error('syncLegacyGlp1ToCareModel.care_programs.update', pUpdErr)
  }

  const { data: existingItem, error: iSelErr } = await supabase
    .from('treatment_items')
    .select('id')
    .eq('care_program_id', careProgramId)
    .eq('treatment_key', treatmentKey)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (iSelErr) {
    if (isMissingRelationError(iSelErr)) {
      return { available: false, careProgramId, treatmentItemId: null }
    }
    console.error('syncLegacyGlp1ToCareModel.treatment_items.select', iSelErr)
    return { available: false, careProgramId, treatmentItemId: null }
  }

  let treatmentItemId = existingItem?.id ?? null

  if (!treatmentItemId) {
    const { data: createdItem, error: iInsErr } = await supabase
      .from('treatment_items')
      .insert({
        patient_id: args.patientId,
        care_program_id: careProgramId,
        treatment_key: treatmentKey,
        display_name: 'GLP-1 treatment',
        category: 'rx',
        status: treatmentStatus,
        metadata: { dual_write_source: args.source },
        created_at: now,
        updated_at: now,
      })
      .select('id')
      .single()

    if (iInsErr || !createdItem) {
      console.error('syncLegacyGlp1ToCareModel.treatment_items.insert', iInsErr)
      return { available: false, careProgramId, treatmentItemId: null }
    }
    treatmentItemId = createdItem.id
  } else {
    const { error: iUpdErr } = await supabase
      .from('treatment_items')
      .update({
        status: treatmentStatus,
        updated_at: now,
        metadata: { dual_write_source: args.source, legacy_glp1_status: args.legacyStatus },
      })
      .eq('id', treatmentItemId)
    if (iUpdErr) console.error('syncLegacyGlp1ToCareModel.treatment_items.update', iUpdErr)
  }

  return { available: true, careProgramId, treatmentItemId }
}

