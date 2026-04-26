import type { SupabaseClient } from '@supabase/supabase-js'
import {
  SUPPLEMENT_FULFILLMENT_STATUSES,
  labelSupplementFulfillmentStatus,
} from '@/lib/supplement/fulfillment'
import { broadTitleForProgramType, staffTreatmentOrderTitle } from './titles'
import {
  displayIdForUuid,
  labKitOrderPath,
  supplementOrderPath,
  treatmentOrderPath,
} from './orderIdentifiers'
import {
  labelTreatmentOrderStatus,
  toneForTreatmentOrderStatus,
} from './treatmentOrderTransitions'
import { labelLabKitFulfillmentStatus } from './labKitFulfillmentTransitions'
import type { StaffOrderRow, StaffOrdersListBundle } from './types'
import type { OrderStatusTone } from './treatmentOrderTransitions'

const DEFAULT_PAGE_SIZE = 50

type PatientJoin = {
  id: string
  first_name: string | null
  last_name: string | null
}

function patientDisplayName(p: PatientJoin | null | undefined): string {
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

type TreatmentOrderRow = {
  id: string
  order_number: string | null
  status: string
  amount_cents: number | null
  amount_paid_cents: number | null
  currency: string | null
  tracking_number: string | null
  tracking_url: string | null
  created_at: string
  care_programs:
    | { id: string; program_type: string | null; title: string | null }
    | Array<{ id: string; program_type: string | null; title: string | null }>
    | null
  treatment_items:
    | { id: string; display_name: string | null; treatment_key: string | null }
    | Array<{ id: string; display_name: string | null; treatment_key: string | null }>
    | null
  patients: PatientJoin | PatientJoin[] | null
}

function pickSingle<T>(v: T | T[] | null | undefined): T | null {
  if (!v) return null
  if (Array.isArray(v)) return v[0] ?? null
  return v
}

async function listTreatmentOrders(
  supabase: SupabaseClient,
  limit: number
): Promise<StaffOrderRow[]> {
  const { data, error } = await supabase
    .from('treatment_orders')
    .select(
      `id, order_number, status, amount_cents, amount_paid_cents, currency,
       tracking_number, tracking_url, created_at,
       care_programs:care_program_id (id, program_type, title),
       treatment_items:treatment_item_id (id, display_name, treatment_key),
       patients:patient_id (id, first_name, last_name)`
    )
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('orders.listTreatmentOrders', error)
    return []
  }

  return (data ?? []).map((raw) => {
    const row = raw as unknown as TreatmentOrderRow
    const program = pickSingle(row.care_programs)
    const treatment = pickSingle(row.treatment_items)
    const patient = pickSingle(row.patients)
    const orderNumber = row.order_number ?? `RX-${row.id.slice(0, 8).toUpperCase()}`
    return {
      kind: 'treatment',
      identifier: orderNumber,
      displayId: orderNumber,
      detailHref: treatmentOrderPath(orderNumber),
      patientId: patient?.id ?? '',
      patientName: patientDisplayName(patient),
      createdAt: row.created_at,
      statusCode: row.status,
      statusLabel: labelTreatmentOrderStatus(row.status),
      statusTone: toneForTreatmentOrderStatus(row.status),
      programLabel:
        program?.title ?? (program?.program_type ? broadTitleForProgramType(program.program_type) : null),
      titleLabel: staffTreatmentOrderTitle({
        treatmentDisplayName: treatment?.display_name ?? null,
        programType: program?.program_type ?? null,
      }),
      amountCents: row.amount_cents,
      amountPaidCents: row.amount_paid_cents ?? 0,
      currency: row.currency,
      trackingNumber: row.tracking_number,
      trackingUrl: row.tracking_url,
    }
  })
}

type SupplementRow = {
  id: string
  status: string
  created_at: string
  stripe_checkout_session_id: string
  items: unknown
  shipping_snapshot: unknown
  patients: PatientJoin | PatientJoin[] | null
}

async function listSupplementOrders(
  supabase: SupabaseClient,
  limit: number
): Promise<StaffOrderRow[]> {
  const { data, error } = await supabase
    .from('supplement_fulfillment_orders')
    .select(
      `id, status, created_at, stripe_checkout_session_id, items, shipping_snapshot,
       patients:patient_id (id, first_name, last_name)`
    )
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('orders.listSupplementOrders', error)
    return []
  }

  return (data ?? []).map((raw) => {
    const row = raw as unknown as SupplementRow
    const patient = pickSingle(row.patients)
    const items = Array.isArray(row.items) ? (row.items as Array<Record<string, unknown>>) : []
    const firstItemName =
      typeof items[0]?.name === 'string'
        ? (items[0].name as string)
        : typeof items[0]?.display_name === 'string'
          ? (items[0].display_name as string)
          : null
    const statusLabel = SUPPLEMENT_FULFILLMENT_STATUSES.includes(row.status as never)
      ? labelSupplementFulfillmentStatus(row.status)
      : row.status
    const displayId = displayIdForUuid('SUP', row.id)
    return {
      kind: 'supplement',
      identifier: `SUP-${row.id}`,
      displayId,
      detailHref: supplementOrderPath(row.id),
      patientId: patient?.id ?? '',
      patientName: patientDisplayName(patient),
      createdAt: row.created_at,
      statusCode: row.status,
      statusLabel,
      statusTone: toneForSupplement(row.status),
      programLabel: 'Supplements',
      titleLabel:
        firstItemName ?? (items.length > 1 ? `${items.length} supplements` : 'Supplement order'),
      amountCents: null,
      amountPaidCents: null,
      currency: null,
      trackingNumber: null,
      trackingUrl: null,
    }
  })
}

type LabKitRow = {
  id: string
  status: string
  kit_fulfillment_status: string
  kit_carrier: string | null
  kit_tracking_number: string | null
  kit_tracking_url: string | null
  kit_shipped_at: string | null
  kit_delivered_at: string | null
  order_date: string
  ordering_provider_name: string
  tests: unknown
  created_at: string
  patients: PatientJoin | PatientJoin[] | null
}

async function listLabKitOrders(
  supabase: SupabaseClient,
  limit: number
): Promise<StaffOrderRow[]> {
  const { data, error } = await supabase
    .from('lab_orders')
    .select(
      `id, status, kit_fulfillment_status, kit_carrier, kit_tracking_number, kit_tracking_url,
       kit_shipped_at, kit_delivered_at, order_date, ordering_provider_name, tests, created_at,
       patients:patient_id (id, first_name, last_name)`
    )
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('orders.listLabKitOrders', error)
    return []
  }

  return (data ?? []).map((raw) => {
    const row = raw as unknown as LabKitRow
    const patient = pickSingle(row.patients)
    const tests = Array.isArray(row.tests) ? row.tests : []
    const firstTestName =
      tests.length > 0 && typeof (tests[0] as Record<string, unknown>)?.name === 'string'
        ? ((tests[0] as Record<string, unknown>).name as string)
        : null
    const displayId = displayIdForUuid('LAB', row.id)
    return {
      kind: 'lab_kit',
      identifier: `LAB-${row.id}`,
      displayId,
      detailHref: labKitOrderPath(row.id),
      patientId: patient?.id ?? '',
      patientName: patientDisplayName(patient),
      createdAt: row.created_at,
      statusCode: row.kit_fulfillment_status,
      statusLabel: labelLabKitFulfillmentStatus(row.kit_fulfillment_status),
      statusTone: toneForLabKit(row.kit_fulfillment_status),
      programLabel: 'Lab kits',
      titleLabel:
        tests.length === 1
          ? firstTestName ?? 'Lab kit'
          : tests.length > 1
            ? `${tests.length} tests`
            : 'Lab kit',
      amountCents: null,
      amountPaidCents: null,
      currency: null,
      trackingNumber: row.kit_tracking_number,
      trackingUrl: row.kit_tracking_url,
    }
  })
}

export async function listStaffOrders(
  supabase: SupabaseClient,
  opts?: { limit?: number }
): Promise<StaffOrdersListBundle> {
  const limit = opts?.limit ?? DEFAULT_PAGE_SIZE
  const [treatments, supplements, labKits] = await Promise.all([
    listTreatmentOrders(supabase, limit),
    listSupplementOrders(supabase, limit),
    listLabKitOrders(supabase, limit),
  ])
  return {
    treatments,
    supplements,
    labKits,
    counts: {
      treatments: treatments.length,
      supplements: supplements.length,
      labKits: labKits.length,
    },
  }
}
