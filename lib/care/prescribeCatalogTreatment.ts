import { randomBytes } from 'crypto'
import type { SupabaseClient } from '@supabase/supabase-js'
import { logAuditEvent } from '@/lib/audit/logAuditEvent'
import {
  buildDosagePayload,
  getMedicationCatalogEntry,
  isFrequencyAllowed,
  isRouteAllowed,
  isStrengthAllowed,
  type StrengthUnit,
} from '@/lib/care/medicationCatalog'
import {
  buildRxHandoffMetadata,
  isValidNpi10,
  normalizeNpi,
  type FulfillmentChannel,
  type RxDurationDays,
} from '@/lib/care/rxHandoff'
import { isWorkflowTransitionAllowed } from '@/lib/care/workflowTransition'

export type PrescribeCatalogTreatmentInput = {
  patientId: string
  careProgramId: string
  catalogMedicationId: string
  strengthAmount: number
  strengthUnit: StrengthUnit
  route: string
  frequency: string
  /** pending_approval | approved typical for eRx queue */
  initialStatus: 'pending_approval' | 'approved'
  supersedesTreatmentItemId: string | null
  sig: string
  dispenseQuantity: string
  cycling: string
  hold_if: string
  /** Per-fill day supply (503A / partner handoff). */
  durationDays: RxDurationDays
  refillsAuthorized: number
  fulfillmentChannel: FulfillmentChannel
  prescriberDisplayName: string
  prescriberNpi: string
  prescriberCredentials?: string | null
  prescriberStateLicenseNumber?: string | null
  prescriberPrescriptionLicenseNumber?: string | null
  prescriberDeaNumber?: string | null
  prescriberPhone: string
  organizationPhone: string
}

export type PrescribeCatalogTreatmentResult =
  | { ok: true; treatmentItemId: string }
  | { ok: false; error: string }

function treatmentKeyForCatalog(catalogId: string): string {
  const suffix = randomBytes(5).toString('hex')
  return `catalog.${catalogId}.${suffix}`
}

async function stopPriorTreatment(
  supabase: SupabaseClient,
  patientId: string,
  treatmentItemId: string,
  actorUserId: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  const { data: item, error: selErr } = await supabase
    .from('treatment_items')
    .select('id, patient_id, care_program_id, treatment_key, display_name, status')
    .eq('id', treatmentItemId)
    .maybeSingle()

  if (selErr || !item) return { ok: false, error: 'Prior treatment not found.' }
  if (item.patient_id !== patientId) return { ok: false, error: 'Prior treatment does not belong to this patient.' }

  const prev = item.status
  if (prev === 'stopped') return { ok: true }

  const allowed = await isWorkflowTransitionAllowed(supabase, 'treatment_item', prev, 'stopped')
  if (!allowed) {
    return { ok: false, error: `Cannot discontinue treatment from status “${prev}”. Run DB migration for universal stop or adjust workflow.` }
  }

  const now = new Date().toISOString()
  const { error: updErr } = await supabase
    .from('treatment_items')
    .update({ status: 'stopped', stopped_at: now, updated_at: now })
    .eq('id', treatmentItemId)

  if (updErr) {
    console.error('stopPriorTreatment', updErr)
    return { ok: false, error: 'Could not stop prior treatment row.' }
  }

  const body = `Treatment (${item.display_name}): discontinued (superseded by new dose row)`
  const { error: tErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: patientId,
    care_program_id: item.care_program_id,
    treatment_item_id: item.id,
    event_type: 'treatment_status_changed',
    body,
    actor_user_id: actorUserId,
    payload: { treatment_key: item.treatment_key, from: prev, to: 'stopped', reason: 'catalog_supersede' },
  })
  if (tErr) console.error('stopPriorTreatment.timeline', tErr)

  return { ok: true }
}

export async function prescribeCatalogTreatment(
  supabase: SupabaseClient,
  actorUserId: string,
  input: PrescribeCatalogTreatmentInput
): Promise<PrescribeCatalogTreatmentResult> {
  const entry = getMedicationCatalogEntry(input.catalogMedicationId)
  if (!entry) return { ok: false, error: 'Unknown catalog medication.' }

  if (!isStrengthAllowed(entry, input.strengthAmount, input.strengthUnit)) {
    return { ok: false, error: 'Strength is not allowed for this medication (or invalid custom dose).' }
  }
  if (!isRouteAllowed(entry, input.route)) {
    return { ok: false, error: 'Route is not allowed for this medication.' }
  }
  if (!isFrequencyAllowed(entry, input.frequency)) {
    return { ok: false, error: 'Frequency is not allowed for this medication.' }
  }

  const { data: program, error: pErr } = await supabase
    .from('care_programs')
    .select('id, patient_id')
    .eq('id', input.careProgramId)
    .maybeSingle()
  if (pErr || !program) return { ok: false, error: 'Care program not found.' }
  if (program.patient_id !== input.patientId) return { ok: false, error: 'Care program does not match patient.' }

  if (input.supersedesTreatmentItemId) {
    const { data: prior, error: prErr } = await supabase
      .from('treatment_items')
      .select('id, patient_id, care_program_id')
      .eq('id', input.supersedesTreatmentItemId)
      .maybeSingle()
    if (prErr || !prior) return { ok: false, error: 'Prior treatment to supersede was not found.' }
    if (prior.patient_id !== input.patientId) return { ok: false, error: 'Prior treatment does not match patient.' }
    if (prior.care_program_id !== input.careProgramId) {
      return { ok: false, error: 'Prior treatment must belong to the same care program.' }
    }

    const stopped = await stopPriorTreatment(supabase, input.patientId, input.supersedesTreatmentItemId, actorUserId)
    if (!stopped.ok) return stopped
  }

  const dosage = buildDosagePayload({
    entry,
    strengthAmount: input.strengthAmount,
    strengthUnit: input.strengthUnit,
    route: input.route,
    frequency: input.frequency,
    dispenseQuantity: input.dispenseQuantity,
    sig: input.sig,
    cycling: input.cycling,
    hold_if: input.hold_if,
  })

  const strengthLabel = `${input.strengthAmount} ${input.strengthUnit}`
  const displayName = `${entry.displayName} — ${strengthLabel} · ${input.route} · ${input.frequency}`

  const treatmentKey = treatmentKeyForCatalog(entry.id)
  const now = new Date().toISOString()

  const npi = normalizeNpi(input.prescriberNpi)
  if (!isValidNpi10(npi)) {
    return { ok: false, error: 'Prescriber NPI must be exactly 10 digits.' }
  }
  const prescriberName = input.prescriberDisplayName.trim()
  if (!prescriberName) {
    return { ok: false, error: 'Prescriber name is required.' }
  }

  const handoff = buildRxHandoffMetadata({
    durationDays: input.durationDays,
    refillsAuthorized: input.refillsAuthorized,
    fulfillmentChannel: input.fulfillmentChannel,
    writtenAtIso: now,
    prescriber: {
      display_name: prescriberName,
      credentials: input.prescriberCredentials ?? null,
      state_license_number: input.prescriberStateLicenseNumber ?? null,
      prescription_license_number: input.prescriberPrescriptionLicenseNumber ?? null,
      npi,
      dea_number: input.prescriberDeaNumber ?? null,
      phone: input.prescriberPhone.trim() || null,
      organization_phone: input.organizationPhone.trim() || null,
    },
  })

  const metadata: Record<string, unknown> = {
    catalog_medication_id: entry.id,
    emr_entry_type: 'catalog_prescription_v1',
    prescribed_at: now,
    prescribed_by_staff_id: actorUserId,
    ...handoff,
  }
  if (input.supersedesTreatmentItemId) {
    metadata.supersedes_treatment_item_id = input.supersedesTreatmentItemId
  }

  const { data: inserted, error: insErr } = await supabase
    .from('treatment_items')
    .insert({
      patient_id: input.patientId,
      care_program_id: input.careProgramId,
      treatment_key: treatmentKey,
      display_name: displayName,
      category: entry.treatmentCategory,
      status: input.initialStatus,
      dosage: dosage as unknown as Record<string, unknown>,
      metadata,
      started_at: now,
      updated_at: now,
    })
    .select('id')
    .single()

  if (insErr || !inserted) {
    console.error('prescribeCatalogTreatment.insert', insErr)
    return { ok: false, error: 'Could not create treatment row.' }
  }

  const body = `New treatment from catalog: ${displayName}`
  const { error: tErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: input.patientId,
    care_program_id: input.careProgramId,
    treatment_item_id: inserted.id,
    event_type: 'catalog_treatment_prescribed',
    body,
    actor_user_id: actorUserId,
    payload: {
      catalog_medication_id: entry.id,
      treatment_key: treatmentKey,
      initial_status: input.initialStatus,
      supersedes: input.supersedesTreatmentItemId,
    },
  })
  if (tErr) console.error('prescribeCatalogTreatment.timeline', tErr)

  await logAuditEvent({
    actorUserId,
    action: 'treatment_item.catalog_prescribe',
    resourceType: 'treatment_item',
    resourceId: inserted.id,
    patientId: input.patientId,
    metadata: {
      catalog_medication_id: entry.id,
      care_program_id: input.careProgramId,
      supersedes_treatment_item_id: input.supersedesTreatmentItemId,
    },
  })

  return { ok: true, treatmentItemId: inserted.id }
}
