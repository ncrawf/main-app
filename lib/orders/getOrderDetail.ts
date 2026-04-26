import type { SupabaseClient } from '@supabase/supabase-js'
import {
  SUPPLEMENT_FULFILLMENT_STATUSES,
  allowedNextSupplementFulfillmentStatuses,
  labelSupplementFulfillmentStatus,
} from '@/lib/supplement/fulfillment'
import {
  allowedNextLabKitFulfillmentStatuses,
  isLabKitFulfillmentStatus,
  labelLabKitFulfillmentStatus,
} from './labKitFulfillmentTransitions'
import { displayIdForUuid, type ParsedOrderIdentifier } from './orderIdentifiers'
import { staffTreatmentOrderTitle } from './titles'
import {
  allowedNextTreatmentOrderStatuses,
  isTreatmentOrderStatus,
  labelTreatmentOrderStatus,
  toneForTreatmentOrderStatus,
  type OrderStatusTone,
} from './treatmentOrderTransitions'
import type {
  LabKitOrderDetail,
  StaffOrderDetail,
  SupplementOrderDetail,
  TreatmentOrderDetail,
} from './types'

type PatientJoin = {
  id: string
  first_name: string | null
  last_name: string | null
}

function pickSingle<T>(v: T | T[] | null | undefined): T | null {
  if (!v) return null
  if (Array.isArray(v)) return v[0] ?? null
  return v
}

function patientDisplayName(p: PatientJoin | null): string {
  if (!p) return 'Unknown patient'
  const name = [p.first_name, p.last_name].filter(Boolean).join(' ').trim()
  return name || 'Unknown patient'
}

function toneForSupplement(status: string): OrderStatusTone {
  switch (status) {
    case 'queued':
      return 'info'
    case 'blocked_missing_shipping':
      return 'warn'
    case 'sent_to_vendor':
    case 'shipped':
      return 'neutral'
    case 'delivered':
      return 'success'
    case 'cancelled':
      return 'danger'
    default:
      return 'neutral'
  }
}

function toneForLabKit(status: string): OrderStatusTone {
  switch (status) {
    case 'not_shipping_kit':
      return 'neutral'
    case 'kit_queued':
      return 'info'
    case 'kit_shipped':
      return 'neutral'
    case 'kit_delivered':
      return 'success'
    case 'kit_returned':
      return 'warn'
    case 'kit_cancelled':
      return 'danger'
    default:
      return 'neutral'
  }
}

async function getTreatmentOrderDetail(
  supabase: SupabaseClient,
  orderNumber: string
): Promise<TreatmentOrderDetail | null> {
  const { data, error } = await supabase
    .from('treatment_orders')
    .select(
      `id, order_number, status, amount_cents, amount_paid_cents, currency,
       tracking_number, tracking_url, internal_notes, exception_reason,
       shipping_snapshot, opened_at, closed_at, created_at, updated_at,
       stripe_payment_intent_id, payment_failure_message,
       care_programs:care_program_id (id, program_type, title),
       treatment_items:treatment_item_id (id, display_name, treatment_key),
       patients:patient_id (id, first_name, last_name, stripe_default_payment_method_id)`
    )
    .eq('order_number', orderNumber)
    .maybeSingle()

  if (error) {
    console.error('orders.getTreatmentOrderDetail', error)
    return null
  }
  if (!data) return null

  const row = data as unknown as {
    id: string
    order_number: string
    status: string
    amount_cents: number | null
    amount_paid_cents: number | null
    currency: string | null
    tracking_number: string | null
    tracking_url: string | null
    internal_notes: string | null
    exception_reason: string | null
    shipping_snapshot: unknown
    opened_at: string | null
    closed_at: string | null
    created_at: string
    updated_at: string
    stripe_payment_intent_id: string | null
    payment_failure_message: string | null
    care_programs:
      | { id: string; program_type: string | null; title: string | null }
      | Array<{ id: string; program_type: string | null; title: string | null }>
      | null
    treatment_items:
      | { id: string; display_name: string | null; treatment_key: string | null }
      | Array<{ id: string; display_name: string | null; treatment_key: string | null }>
      | null
    patients:
      | (PatientJoin & { stripe_default_payment_method_id: string | null })
      | Array<PatientJoin & { stripe_default_payment_method_id: string | null }>
      | null
  }

  if (!isTreatmentOrderStatus(row.status)) {
    console.warn('orders.getTreatmentOrderDetail: unexpected status value', row.status)
  }

  const program = pickSingle(row.care_programs)
  const treatment = pickSingle(row.treatment_items)
  const patient = pickSingle(row.patients)

  return {
    kind: 'treatment',
    id: row.id,
    orderNumber: row.order_number,
    patientId: patient?.id ?? '',
    patientName: patientDisplayName(patient),
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    openedAt: row.opened_at,
    closedAt: row.closed_at,
    status: row.status as TreatmentOrderDetail['status'],
    statusLabel: labelTreatmentOrderStatus(row.status),
    statusTone: toneForTreatmentOrderStatus(row.status),
    allowedNextStatuses: allowedNextTreatmentOrderStatuses(row.status),
    amountCents: row.amount_cents,
    amountPaidCents: row.amount_paid_cents ?? 0,
    currency: row.currency,
    trackingNumber: row.tracking_number,
    trackingUrl: row.tracking_url,
    internalNotes: row.internal_notes,
    exceptionReason: row.exception_reason,
    shippingSnapshot:
      (row.shipping_snapshot as Record<string, unknown> | null) ?? {},
    programType: program?.program_type ?? null,
    programTitle: program?.title ?? null,
    treatmentDisplayName: treatment?.display_name ?? null,
    treatmentKey: treatment?.treatment_key ?? null,
    title: staffTreatmentOrderTitle({
      treatmentDisplayName: treatment?.display_name ?? null,
      programType: program?.program_type ?? null,
    }),
    paymentFailureMessage: row.payment_failure_message,
    stripePaymentIntentId: row.stripe_payment_intent_id,
    patientHasPaymentMethod: Boolean(patient?.stripe_default_payment_method_id),
  }
}

async function getSupplementOrderDetail(
  supabase: SupabaseClient,
  id: string
): Promise<SupplementOrderDetail | null> {
  const { data, error } = await supabase
    .from('supplement_fulfillment_orders')
    .select(
      `id, status, stripe_checkout_session_id, shipping_snapshot, items, metadata,
       created_at, updated_at,
       patients:patient_id (id, first_name, last_name)`
    )
    .eq('id', id)
    .maybeSingle()

  if (error) {
    console.error('orders.getSupplementOrderDetail', error)
    return null
  }
  if (!data) return null

  const row = data as unknown as {
    id: string
    status: string
    stripe_checkout_session_id: string
    shipping_snapshot: unknown
    items: unknown
    metadata: unknown
    created_at: string
    updated_at: string
    patients: PatientJoin | PatientJoin[] | null
  }
  const patient = pickSingle(row.patients)
  const allowed = SUPPLEMENT_FULFILLMENT_STATUSES.includes(row.status as never)
    ? allowedNextSupplementFulfillmentStatuses(row.status)
    : []

  return {
    kind: 'supplement',
    id: row.id,
    displayId: displayIdForUuid('SUP', row.id),
    patientId: patient?.id ?? '',
    patientName: patientDisplayName(patient),
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    status: row.status,
    statusLabel: SUPPLEMENT_FULFILLMENT_STATUSES.includes(row.status as never)
      ? labelSupplementFulfillmentStatus(row.status)
      : row.status,
    statusTone: toneForSupplement(row.status),
    allowedNextStatuses: allowed,
    shippingSnapshot:
      (row.shipping_snapshot as Record<string, unknown> | null) ?? {},
    items: Array.isArray(row.items) ? (row.items as Array<Record<string, unknown>>) : [],
    metadata: (row.metadata as Record<string, unknown> | null) ?? {},
    stripeCheckoutSessionId: row.stripe_checkout_session_id,
  }
}

async function getLabKitOrderDetail(
  supabase: SupabaseClient,
  id: string
): Promise<LabKitOrderDetail | null> {
  const { data, error } = await supabase
    .from('lab_orders')
    .select(
      `id, status, kit_fulfillment_status, kit_carrier, kit_tracking_number,
       kit_tracking_url, kit_shipped_at, kit_delivered_at, kit_fulfillment_notes,
       order_date, ordering_provider_name, tests, created_at, updated_at,
       patients:patient_id (id, first_name, last_name)`
    )
    .eq('id', id)
    .maybeSingle()

  if (error) {
    console.error('orders.getLabKitOrderDetail', error)
    return null
  }
  if (!data) return null

  const row = data as unknown as {
    id: string
    status: string
    kit_fulfillment_status: string
    kit_carrier: string | null
    kit_tracking_number: string | null
    kit_tracking_url: string | null
    kit_shipped_at: string | null
    kit_delivered_at: string | null
    kit_fulfillment_notes: string | null
    order_date: string
    ordering_provider_name: string
    tests: unknown
    created_at: string
    updated_at: string
    patients: PatientJoin | PatientJoin[] | null
  }
  const patient = pickSingle(row.patients)

  if (!isLabKitFulfillmentStatus(row.kit_fulfillment_status)) {
    console.warn('orders.getLabKitOrderDetail: unexpected kit_fulfillment_status', row.kit_fulfillment_status)
  }

  return {
    kind: 'lab_kit',
    id: row.id,
    displayId: displayIdForUuid('LAB', row.id),
    patientId: patient?.id ?? '',
    patientName: patientDisplayName(patient),
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    kitStatus: row.kit_fulfillment_status as LabKitOrderDetail['kitStatus'],
    kitStatusLabel: labelLabKitFulfillmentStatus(row.kit_fulfillment_status),
    kitStatusTone: toneForLabKit(row.kit_fulfillment_status),
    allowedNextStatuses: allowedNextLabKitFulfillmentStatuses(row.kit_fulfillment_status),
    kitCarrier: row.kit_carrier,
    kitTrackingNumber: row.kit_tracking_number,
    kitTrackingUrl: row.kit_tracking_url,
    kitShippedAt: row.kit_shipped_at,
    kitDeliveredAt: row.kit_delivered_at,
    kitFulfillmentNotes: row.kit_fulfillment_notes,
    labStatus: row.status,
    orderDate: row.order_date,
    orderingProviderName: row.ordering_provider_name,
    testsCount: Array.isArray(row.tests) ? row.tests.length : 0,
  }
}

export async function getStaffOrderDetail(
  supabase: SupabaseClient,
  parsed: ParsedOrderIdentifier
): Promise<StaffOrderDetail | null> {
  if (parsed.kind === 'treatment') {
    return getTreatmentOrderDetail(supabase, parsed.orderNumber)
  }
  if (parsed.kind === 'supplement') {
    return getSupplementOrderDetail(supabase, parsed.id)
  }
  return getLabKitOrderDetail(supabase, parsed.id)
}
