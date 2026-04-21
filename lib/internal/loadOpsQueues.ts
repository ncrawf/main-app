import type { SupabaseClient } from '@supabase/supabase-js'

export type OpenRefillQueueRow = {
  id: string
  patientId: string
  treatmentItemId: string
  status: string
  createdAt: string
  continuationPaid: boolean
}

export type UnpublishedVisitRow = {
  id: string
  patientId: string
  visitAt: string
  visitType: string
  status: string
}

export type UnpublishedLabRow = {
  id: string
  patientId: string
  orderDate: string
  status: string
}

export type OpenSupportRequestRow = {
  id: string
  patientId: string
  requestKind: string
  status: string
  updatedAt: string
}

function isMissingRelationError(err: unknown): boolean {
  if (!err || typeof err !== 'object') return false
  const msg = 'message' in err && typeof err.message === 'string' ? err.message : ''
  const code = 'code' in err && typeof err.code === 'string' ? err.code : ''
  return code === '42P01' || msg.includes('does not exist')
}

/** Cross-patient operational queues for internal staff (RLS applies). */
export async function loadOpenRefillQueue(supabase: SupabaseClient): Promise<OpenRefillQueueRow[]> {
  const { data, error } = await supabase
    .from('refill_requests')
    .select('id, patient_id, treatment_item_id, status, created_at, metadata')
    .eq('status', 'under_review')
    .order('created_at', { ascending: false })
    .limit(80)
  if (error) {
    if (isMissingRelationError(error)) return []
    console.error('loadOpenRefillQueue', error)
    return []
  }
  return (data ?? [])
    .map((r) => ({
      continuationPaid:
        !!r.metadata &&
        typeof r.metadata === 'object' &&
        !Array.isArray(r.metadata) &&
        (r.metadata as Record<string, unknown>).continuation_payment_state === 'paid',
      id: r.id as string,
      patientId: r.patient_id as string,
      treatmentItemId: r.treatment_item_id as string,
      status: r.status as string,
      createdAt: r.created_at as string,
    }))
    .filter((row) => row.continuationPaid)
}

export async function loadVisitsPendingPatientPublish(supabase: SupabaseClient): Promise<UnpublishedVisitRow[]> {
  const { data, error } = await supabase
    .from('clinical_visits')
    .select('id, patient_id, visit_at, visit_type, status')
    .is('published_to_patient_at', null)
    .order('visit_at', { ascending: false })
    .limit(80)
  if (error) {
    if (isMissingRelationError(error)) return []
    console.error('loadVisitsPendingPatientPublish', error)
    return []
  }
  return (data ?? []).map((r) => ({
    id: r.id as string,
    patientId: r.patient_id as string,
    visitAt: (r.visit_at as string) ?? '',
    visitType: (r.visit_type as string) ?? 'visit',
    status: (r.status as string) ?? '',
  }))
}

export async function loadLabsPendingPatientPublish(supabase: SupabaseClient): Promise<UnpublishedLabRow[]> {
  const { data, error } = await supabase
    .from('lab_orders')
    .select('id, patient_id, order_date, status')
    .is('published_to_patient_at', null)
    .order('created_at', { ascending: false })
    .limit(80)
  if (error) {
    if (isMissingRelationError(error)) return []
    console.error('loadLabsPendingPatientPublish', error)
    return []
  }
  return (data ?? []).map((r) => ({
    id: r.id as string,
    patientId: r.patient_id as string,
    orderDate: (r.order_date as string) ?? '',
    status: (r.status as string) ?? '',
  }))
}

export async function loadOpenSupportRequests(supabase: SupabaseClient): Promise<OpenSupportRequestRow[]> {
  const { data, error } = await supabase
    .from('patient_support_requests')
    .select('id, patient_id, request_kind, status, updated_at')
    .in('status', ['new', 'acknowledged'])
    .order('updated_at', { ascending: false })
    .limit(80)
  if (error) {
    if (isMissingRelationError(error)) return []
    console.error('loadOpenSupportRequests', error)
    return []
  }
  return (data ?? []).map((r) => ({
    id: r.id as string,
    patientId: r.patient_id as string,
    requestKind: (r.request_kind as string) ?? '',
    status: (r.status as string) ?? '',
    updatedAt: (r.updated_at as string) ?? '',
  }))
}
