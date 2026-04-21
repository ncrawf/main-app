import type { SupabaseClient } from '@supabase/supabase-js'

export type OrgRxPresetRow = {
  id: string
  slug: string
  label: string
  treatment_key: string
  dosage: Record<string, unknown>
  metadata: Record<string, unknown>
  updated_at: string
}

/** Serializable pick for client catalog form (apply preset). */
export type OrgRxPresetForCatalogForm = Pick<OrgRxPresetRow, 'id' | 'slug' | 'label' | 'treatment_key' | 'dosage'>

function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

export async function listOrgRxPresets(supabase: SupabaseClient): Promise<OrgRxPresetRow[]> {
  const { data, error } = await supabase
    .from('org_rx_presets')
    .select('id, slug, label, treatment_key, dosage, metadata, updated_at')
    .order('label', { ascending: true })
  if (error) {
    if (isMissingRelationError(error)) return []
    console.error('listOrgRxPresets', error)
    return []
  }
  return (data ?? []) as OrgRxPresetRow[]
}

export type ParsedOrgRxPresetDosage = {
  strengthMode?: string
  customAmount?: string
  customUnit?: 'mg' | 'mcg' | '%'
  route?: string
  frequency?: string
  sig?: string
  dispenseQuantity?: string
  cycling?: string
  holdIf?: string
  initialStatus?: 'pending_approval' | 'approved'
  durationDays?: '30' | '60' | '90'
  refillsAuthorized?: string
  fulfillmentChannel?: '503a_partner' | 'retail_erx_planned' | 'internal_only'
}

/** Reads optional fields from preset.dosage JSON (v1 contract for catalog form). */
export function parseOrgRxPresetDosage(dosage: Record<string, unknown>): ParsedOrgRxPresetDosage {
  const out: ParsedOrgRxPresetDosage = {}
  if (typeof dosage.strengthMode === 'string') out.strengthMode = dosage.strengthMode
  if (typeof dosage.customStrengthAmount === 'string' || typeof dosage.customStrengthAmount === 'number') {
    out.customAmount = String(dosage.customStrengthAmount)
  }
  if (dosage.customStrengthUnit === 'mg' || dosage.customStrengthUnit === 'mcg' || dosage.customStrengthUnit === '%') {
    out.customUnit = dosage.customStrengthUnit
  }
  if (typeof dosage.route === 'string') out.route = dosage.route
  if (typeof dosage.frequency === 'string') out.frequency = dosage.frequency
  if (typeof dosage.sig === 'string') out.sig = dosage.sig
  if (typeof dosage.dispenseQuantity === 'string') out.dispenseQuantity = dosage.dispenseQuantity
  if (typeof dosage.cycling === 'string') out.cycling = dosage.cycling
  if (typeof dosage.hold_if === 'string') out.holdIf = dosage.hold_if
  if (dosage.initialStatus === 'pending_approval' || dosage.initialStatus === 'approved') {
    out.initialStatus = dosage.initialStatus
  }
  if (dosage.durationDays === 30 || dosage.durationDays === '30') out.durationDays = '30'
  else if (dosage.durationDays === 60 || dosage.durationDays === '60') out.durationDays = '60'
  else if (dosage.durationDays === 90 || dosage.durationDays === '90') out.durationDays = '90'
  if (typeof dosage.refillsAuthorized === 'number' && dosage.refillsAuthorized >= 0 && dosage.refillsAuthorized <= 11) {
    out.refillsAuthorized = String(dosage.refillsAuthorized)
  } else if (typeof dosage.refillsAuthorized === 'string' && /^\d+$/.test(dosage.refillsAuthorized)) {
    const n = Number(dosage.refillsAuthorized)
    if (n >= 0 && n <= 11) out.refillsAuthorized = String(n)
  }
  if (
    dosage.fulfillmentChannel === '503a_partner' ||
    dosage.fulfillmentChannel === 'retail_erx_planned' ||
    dosage.fulfillmentChannel === 'internal_only'
  ) {
    out.fulfillmentChannel = dosage.fulfillmentChannel
  }
  return out
}
