import { createAdminClient } from '@/lib/supabase/admin'

export type PatientRefillHistoryItem = {
  refillRequestId: string
  treatmentName: string
  requestedAt: string
  status: string
  supplyDurationDays: number | null
}

function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

function extractSupplyDurationDays(metadata: unknown): number | null {
  if (!metadata || typeof metadata !== 'object') return null
  const md = metadata as Record<string, unknown>
  const rxSupply = md.rx_supply
  if (!rxSupply || typeof rxSupply !== 'object') return null
  const durationDays = (rxSupply as Record<string, unknown>).duration_days
  if (typeof durationDays === 'number' && Number.isFinite(durationDays) && durationDays > 0) {
    return Math.round(durationDays)
  }
  return null
}

export async function getPatientRefillHistory(patientId: string): Promise<PatientRefillHistoryItem[]> {
  const admin = createAdminClient()
  const { data: refills, error: rErr } = await admin
    .from('refill_requests')
    .select('id, treatment_item_id, status, created_at')
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })
    .limit(100)

  if (rErr) {
    if (isMissingRelationError(rErr)) return []
    console.error('getPatientRefillHistory.refills', rErr)
    return []
  }

  const refillRows =
    (refills as Array<{
      id: string
      treatment_item_id: string
      status: string
      created_at: string
    }>) ?? []
  if (refillRows.length === 0) return []

  const treatmentIds = [...new Set(refillRows.map((row) => row.treatment_item_id))]
  const { data: treatments, error: tErr } = await admin
    .from('treatment_items')
    .select('id, display_name, metadata')
    .in('id', treatmentIds)

  if (tErr) {
    if (!isMissingRelationError(tErr)) console.error('getPatientRefillHistory.treatments', tErr)
  }

  const treatmentMap = new Map<
    string,
    {
      displayName: string
      supplyDurationDays: number | null
    }
  >()
  for (const row of treatments ?? []) {
    treatmentMap.set(row.id as string, {
      displayName: (row.display_name as string) || `Treatment ${String(row.id).slice(0, 8)}…`,
      supplyDurationDays: extractSupplyDurationDays(row.metadata),
    })
  }

  return refillRows.map((row) => {
    const treatment = treatmentMap.get(row.treatment_item_id)
    return {
      refillRequestId: row.id,
      treatmentName: treatment?.displayName ?? `Treatment ${row.treatment_item_id.slice(0, 8)}…`,
      requestedAt: row.created_at,
      status: row.status,
      supplyDurationDays: treatment?.supplyDurationDays ?? null,
    }
  })
}

