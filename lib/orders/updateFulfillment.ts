import type { SupabaseClient } from '@supabase/supabase-js'
import {
  allowedNextSupplementFulfillmentStatuses,
  isSupplementFulfillmentStatus,
  isSupplementFulfillmentTransitionAllowed,
} from '@/lib/supplement/fulfillment'
import {
  allowedNextLabKitFulfillmentStatuses,
  isLabKitFulfillmentStatus,
  isLabKitFulfillmentTransitionAllowed,
} from './labKitFulfillmentTransitions'
import { parseOrderIdentifier, type ParsedOrderIdentifier } from './orderIdentifiers'
import {
  allowedNextTreatmentOrderStatuses,
  isTreatmentOrderStatus,
  isTreatmentOrderTransitionAllowed,
} from './treatmentOrderTransitions'

export type UpdateFulfillmentInput = {
  identifier: string
  actorStaffUserId: string
  status?: string
  trackingNumber?: string | null
  trackingUrl?: string | null
  carrier?: string | null
  internalNotes?: string | null
  exceptionReason?: string | null
  kitFulfillmentNotes?: string | null
}

export type UpdateFulfillmentResult =
  | { ok: true; kind: ParsedOrderIdentifier['kind']; patientId: string }
  | { ok: false; status: number; error: string }

type PatientIdOnly = { patient_id: string }

async function updateTreatmentOrder(
  supabase: SupabaseClient,
  orderNumber: string,
  input: UpdateFulfillmentInput
): Promise<UpdateFulfillmentResult> {
  const { data: existing, error: loadErr } = await supabase
    .from('treatment_orders')
    .select('id, patient_id, status, tracking_number, tracking_url')
    .eq('order_number', orderNumber)
    .maybeSingle()

  if (loadErr) {
    console.error('updateFulfillment.loadTreatment', loadErr)
    return { ok: false, status: 500, error: 'Failed to load order' }
  }
  if (!existing) return { ok: false, status: 404, error: 'Order not found' }

  const patch: Record<string, unknown> = { updated_at: new Date().toISOString() }
  const timelinePayload: Record<string, unknown> = {
    order_number: orderNumber,
    treatment_order_id: existing.id,
  }
  let statusTransitioned = false

  if (typeof input.status === 'string' && input.status) {
    if (!isTreatmentOrderStatus(input.status)) {
      return { ok: false, status: 400, error: `Unknown status ${input.status}` }
    }
    if (input.status !== existing.status) {
      if (!isTreatmentOrderTransitionAllowed(existing.status, input.status)) {
        const allowed = allowedNextTreatmentOrderStatuses(existing.status)
        return {
          ok: false,
          status: 400,
          error: `Cannot move ${existing.status} -> ${input.status}. Allowed: ${allowed.join(', ') || '(none)'}.`,
        }
      }
      patch.status = input.status
      timelinePayload.from_status = existing.status
      timelinePayload.to_status = input.status
      statusTransitioned = true
    }
  }

  if (input.trackingNumber !== undefined) patch.tracking_number = input.trackingNumber
  if (input.trackingUrl !== undefined) patch.tracking_url = input.trackingUrl
  if (input.internalNotes !== undefined) patch.internal_notes = input.internalNotes
  if (input.exceptionReason !== undefined) patch.exception_reason = input.exceptionReason

  const { error: upErr } = await supabase
    .from('treatment_orders')
    .update(patch)
    .eq('id', existing.id)

  if (upErr) {
    console.error('updateFulfillment.updateTreatment', upErr)
    return { ok: false, status: 500, error: upErr.message || 'Update failed' }
  }

  const eventType = statusTransitioned
    ? 'treatment_order_status_changed'
    : 'treatment_order_fulfillment_updated'

  const { error: timelineErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: existing.patient_id,
    event_type: eventType,
    body: statusTransitioned
      ? `Order ${orderNumber}: ${timelinePayload.from_status} -> ${timelinePayload.to_status}`
      : `Order ${orderNumber} fulfillment updated`,
    payload: timelinePayload,
    actor_user_id: input.actorStaffUserId,
  })
  if (timelineErr) {
    // Non-fatal — update already succeeded. Log for observability.
    console.error('updateFulfillment.timelineTreatment', timelineErr)
  }

  return { ok: true, kind: 'treatment', patientId: existing.patient_id }
}

async function updateSupplementOrder(
  supabase: SupabaseClient,
  id: string,
  input: UpdateFulfillmentInput
): Promise<UpdateFulfillmentResult> {
  const { data: existing, error: loadErr } = await supabase
    .from('supplement_fulfillment_orders')
    .select('id, patient_id, status, metadata')
    .eq('id', id)
    .maybeSingle()

  if (loadErr) {
    console.error('updateFulfillment.loadSupplement', loadErr)
    return { ok: false, status: 500, error: 'Failed to load order' }
  }
  if (!existing) return { ok: false, status: 404, error: 'Order not found' }

  const patch: Record<string, unknown> = { updated_at: new Date().toISOString() }
  const timelinePayload: Record<string, unknown> = { supplement_order_id: existing.id }
  let statusTransitioned = false

  if (typeof input.status === 'string' && input.status) {
    if (!isSupplementFulfillmentStatus(input.status)) {
      return { ok: false, status: 400, error: `Unknown status ${input.status}` }
    }
    if (input.status !== existing.status) {
      if (!isSupplementFulfillmentTransitionAllowed(existing.status, input.status)) {
        const allowed = allowedNextSupplementFulfillmentStatuses(existing.status)
        return {
          ok: false,
          status: 400,
          error: `Cannot move ${existing.status} -> ${input.status}. Allowed: ${allowed.join(', ') || '(none)'}.`,
        }
      }
      patch.status = input.status
      timelinePayload.from_status = existing.status
      timelinePayload.to_status = input.status
      statusTransitioned = true
    }
  }

  // Tracking on supplements lives inside metadata jsonb to avoid schema changes.
  if (
    input.trackingNumber !== undefined ||
    input.trackingUrl !== undefined ||
    input.carrier !== undefined
  ) {
    const existingMeta =
      (existing.metadata as Record<string, unknown> | null | undefined) ?? {}
    const existingTracking =
      (existingMeta.tracking as Record<string, unknown> | null | undefined) ?? {}
    const tracking: Record<string, unknown> = { ...existingTracking }
    if (input.trackingNumber !== undefined) tracking.number = input.trackingNumber ?? null
    if (input.trackingUrl !== undefined) tracking.url = input.trackingUrl ?? null
    if (input.carrier !== undefined) tracking.carrier = input.carrier ?? null
    patch.metadata = { ...existingMeta, tracking }
  }

  const { error: upErr } = await supabase
    .from('supplement_fulfillment_orders')
    .update(patch)
    .eq('id', existing.id)

  if (upErr) {
    console.error('updateFulfillment.updateSupplement', upErr)
    return { ok: false, status: 500, error: upErr.message || 'Update failed' }
  }

  const eventType = statusTransitioned
    ? 'supplement_order_status_changed'
    : 'supplement_order_fulfillment_updated'

  const { error: timelineErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: existing.patient_id,
    event_type: eventType,
    body: statusTransitioned
      ? `Supplement order: ${timelinePayload.from_status} -> ${timelinePayload.to_status}`
      : 'Supplement order fulfillment updated',
    payload: timelinePayload,
    actor_user_id: input.actorStaffUserId,
  })
  if (timelineErr) console.error('updateFulfillment.timelineSupplement', timelineErr)

  return { ok: true, kind: 'supplement', patientId: existing.patient_id }
}

async function updateLabKitOrder(
  supabase: SupabaseClient,
  id: string,
  input: UpdateFulfillmentInput
): Promise<UpdateFulfillmentResult> {
  const { data: existing, error: loadErr } = await supabase
    .from('lab_orders')
    .select(
      'id, patient_id, kit_fulfillment_status, kit_tracking_number, kit_tracking_url, kit_carrier'
    )
    .eq('id', id)
    .maybeSingle<
      PatientIdOnly & {
        id: string
        kit_fulfillment_status: string
        kit_tracking_number: string | null
        kit_tracking_url: string | null
        kit_carrier: string | null
      }
    >()

  if (loadErr) {
    console.error('updateFulfillment.loadLabKit', loadErr)
    return { ok: false, status: 500, error: 'Failed to load lab kit' }
  }
  if (!existing) return { ok: false, status: 404, error: 'Lab kit not found' }

  const patch: Record<string, unknown> = { updated_at: new Date().toISOString() }
  const timelinePayload: Record<string, unknown> = { lab_order_id: existing.id }
  let statusTransitioned = false

  if (typeof input.status === 'string' && input.status) {
    if (!isLabKitFulfillmentStatus(input.status)) {
      return { ok: false, status: 400, error: `Unknown status ${input.status}` }
    }
    if (input.status !== existing.kit_fulfillment_status) {
      if (!isLabKitFulfillmentTransitionAllowed(existing.kit_fulfillment_status, input.status)) {
        const allowed = allowedNextLabKitFulfillmentStatuses(existing.kit_fulfillment_status)
        return {
          ok: false,
          status: 400,
          error: `Cannot move ${existing.kit_fulfillment_status} -> ${input.status}. Allowed: ${allowed.join(', ') || '(none)'}.`,
        }
      }
      patch.kit_fulfillment_status = input.status
      timelinePayload.from_status = existing.kit_fulfillment_status
      timelinePayload.to_status = input.status
      statusTransitioned = true
    }
  }

  if (input.trackingNumber !== undefined) patch.kit_tracking_number = input.trackingNumber
  if (input.trackingUrl !== undefined) patch.kit_tracking_url = input.trackingUrl
  if (input.carrier !== undefined) patch.kit_carrier = input.carrier
  if (input.kitFulfillmentNotes !== undefined)
    patch.kit_fulfillment_notes = input.kitFulfillmentNotes

  const { error: upErr } = await supabase.from('lab_orders').update(patch).eq('id', existing.id)

  if (upErr) {
    console.error('updateFulfillment.updateLabKit', upErr)
    return { ok: false, status: 500, error: upErr.message || 'Update failed' }
  }

  const eventType = statusTransitioned
    ? 'lab_kit_fulfillment_status_changed'
    : 'lab_kit_fulfillment_updated'

  const { error: timelineErr } = await supabase.from('patient_timeline_events').insert({
    patient_id: existing.patient_id,
    event_type: eventType,
    body: statusTransitioned
      ? `Lab kit: ${timelinePayload.from_status} -> ${timelinePayload.to_status}`
      : 'Lab kit fulfillment updated',
    payload: timelinePayload,
    actor_user_id: input.actorStaffUserId,
  })
  if (timelineErr) console.error('updateFulfillment.timelineLabKit', timelineErr)

  return { ok: true, kind: 'lab_kit', patientId: existing.patient_id }
}

/**
 * Resolves `patient_id` for staff orders API capability checks (D4: patient-scoped
 * `staff_capability_exercised` when the order row exists and is visible under RLS).
 * Returns null if the identifier is invalid, not found, or the user cannot select the row.
 */
export async function resolveOrderPatientId(
  supabase: SupabaseClient,
  rawIdentifier: string
): Promise<string | null> {
  const parsed = parseOrderIdentifier(rawIdentifier)
  if (!parsed) return null
  if (parsed.kind === 'treatment') {
    const { data } = await supabase
      .from('treatment_orders')
      .select('patient_id')
      .eq('order_number', parsed.orderNumber)
      .maybeSingle()
    return data?.patient_id ?? null
  }
  if (parsed.kind === 'supplement') {
    const { data } = await supabase
      .from('supplement_fulfillment_orders')
      .select('patient_id')
      .eq('id', parsed.id)
      .maybeSingle()
    return data?.patient_id ?? null
  }
  const { data } = await supabase
    .from('lab_orders')
    .select('patient_id')
    .eq('id', parsed.id)
    .maybeSingle()
  return data?.patient_id ?? null
}

export async function updateOrderFulfillment(
  supabase: SupabaseClient,
  input: UpdateFulfillmentInput
): Promise<UpdateFulfillmentResult> {
  const parsed = parseOrderIdentifier(input.identifier)
  if (!parsed) return { ok: false, status: 400, error: 'Invalid order identifier' }

  if (parsed.kind === 'treatment') {
    return updateTreatmentOrder(supabase, parsed.orderNumber, input)
  }
  if (parsed.kind === 'supplement') {
    return updateSupplementOrder(supabase, parsed.id, input)
  }
  return updateLabKitOrder(supabase, parsed.id, input)
}
