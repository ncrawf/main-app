import type { SupabaseClient } from '@supabase/supabase-js'
import { createAdminClient } from '@/lib/supabase/admin'
import {
  broadTitleForProgramType,
  patientTreatmentOrderTitle,
} from '@/lib/orders/titles'
import {
  displayIdForUuid,
  supplementOrderPath,
  treatmentOrderPath,
} from '@/lib/orders/orderIdentifiers'
import type { TreatmentOrderStatus } from '@/lib/orders/treatmentOrderTransitions'
import {
  patientSupplementOrderStatusView,
  patientTreatmentOrderStatusView,
  type PatientOrderStatusView,
} from './patientOrderCopy'

/**
 * Patient-facing order row. Intentionally slimmer than the staff projection — no
 * operational notes, no internal-only status codes leaked. Amounts are exposed
 * (including zero-charge pre-approval) because the patient should understand
 * charge-after-approval behavior.
 */
export type PatientOrderListItem = {
  kind: 'treatment' | 'supplement'
  identifier: string
  /** Short human scannable id shown on the card. */
  displayId: string
  /** Patient-safe broad or specific title. */
  title: string
  /** Program category label (e.g. "Weight loss treatment"). */
  subtitle: string | null
  createdAt: string
  patientHref: string
  status: PatientOrderStatusView
  amountCents: number | null
  amountPaidCents: number
  currency: string | null
  trackingNumber: string | null
  trackingUrl: string | null
  /** True when the order is still pre-charge (amount_paid_cents = 0, pre-approval). */
  chargeDeferred: boolean
}

type PatientsRow = {
  id: string
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
}

type SupplementRow = {
  id: string
  status: string
  created_at: string
  items: unknown
}

function pickSingle<T>(v: T | T[] | null | undefined): T | null {
  if (!v) return null
  if (Array.isArray(v)) return v[0] ?? null
  return v
}

function patientTreatmentPath(patientId: string, orderNumber: string): string {
  return `/dashboard/${patientId}/orders/${encodeURIComponent(orderNumber)}`
}

function patientSupplementPath(patientId: string, id: string): string {
  return `/dashboard/${patientId}/orders/SUP-${id}`
}

async function listPatientTreatmentOrders(
  supabase: SupabaseClient,
  patientId: string
): Promise<PatientOrderListItem[]> {
  const { data, error } = await supabase
    .from('treatment_orders')
    .select(
      `id, order_number, status, amount_cents, amount_paid_cents, currency,
       tracking_number, tracking_url, created_at,
       care_programs:care_program_id (id, program_type, title),
       treatment_items:treatment_item_id (id, display_name, treatment_key)`
    )
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('listPatientTreatmentOrders', error)
    return []
  }

  return (data ?? []).map((raw) => {
    const row = raw as unknown as TreatmentOrderRow
    const program = pickSingle(row.care_programs)
    const treatment = pickSingle(row.treatment_items)
    const orderNumber = row.order_number ?? `RX-${row.id.slice(0, 8).toUpperCase()}`
    const statusView = patientTreatmentOrderStatusView(row.status)
    const title = patientTreatmentOrderTitle({
      status: row.status as TreatmentOrderStatus,
      treatmentDisplayName: treatment?.display_name ?? null,
      programType: program?.program_type ?? null,
    })
    const subtitle =
      program?.title ??
      (program?.program_type ? broadTitleForProgramType(program.program_type) : null)
    const amountPaidCents = row.amount_paid_cents ?? 0
    return {
      kind: 'treatment' as const,
      identifier: orderNumber,
      displayId: orderNumber,
      title,
      subtitle,
      createdAt: row.created_at,
      patientHref: patientTreatmentPath(patientId, orderNumber),
      status: statusView,
      amountCents: row.amount_cents,
      amountPaidCents,
      currency: row.currency,
      trackingNumber: row.tracking_number,
      trackingUrl: row.tracking_url,
      chargeDeferred: amountPaidCents === 0 && row.status === 'pending_clinician_review',
    }
  })
}

async function listPatientSupplementOrders(
  supabase: SupabaseClient,
  patientId: string
): Promise<PatientOrderListItem[]> {
  const { data, error } = await supabase
    .from('supplement_fulfillment_orders')
    .select(`id, status, created_at, items`)
    .eq('patient_id', patientId)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('listPatientSupplementOrders', error)
    return []
  }

  return (data ?? []).map((raw) => {
    const row = raw as unknown as SupplementRow
    const items = Array.isArray(row.items) ? (row.items as Array<Record<string, unknown>>) : []
    const firstItemName =
      typeof items[0]?.display_name === 'string'
        ? (items[0].display_name as string)
        : typeof items[0]?.name === 'string'
          ? (items[0].name as string)
          : null
    const title =
      firstItemName ?? (items.length > 1 ? `${items.length} supplements` : 'Supplement order')
    const statusView = patientSupplementOrderStatusView(row.status)
    return {
      kind: 'supplement' as const,
      identifier: `SUP-${row.id}`,
      displayId: displayIdForUuid('SUP', row.id),
      title,
      subtitle: 'Supplements',
      createdAt: row.created_at,
      patientHref: patientSupplementPath(patientId, row.id),
      status: statusView,
      amountCents: null,
      amountPaidCents: 0,
      currency: null,
      trackingNumber: null,
      trackingUrl: null,
      chargeDeferred: false,
    }
  })
}

export async function listPatientOrders(patientId: string): Promise<PatientOrderListItem[]> {
  const admin = createAdminClient()
  const { data: patient } = await admin
    .from('patients')
    .select('id')
    .eq('id', patientId)
    .maybeSingle<PatientsRow>()
  if (!patient) return []

  const [treatments, supplements] = await Promise.all([
    listPatientTreatmentOrders(admin, patientId),
    listPatientSupplementOrders(admin, patientId),
  ])

  return [...treatments, ...supplements].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

/** Detail projections for the patient-facing order detail page. */
export type PatientTreatmentOrderDetail = PatientOrderListItem & {
  kind: 'treatment'
  orderNumber: string
  programTitle: string | null
  programType: string | null
  treatmentDisplayName: string | null
  shipping: {
    name: string | null
    line1: string | null
    line2: string | null
    city: string | null
    state: string | null
    postalCode: string | null
  } | null
  rawStatus: string
  openedAt: string | null
  closedAt: string | null
}

export type PatientSupplementOrderDetail = PatientOrderListItem & {
  kind: 'supplement'
  items: Array<{ displayName: string; quantity: number }>
  shipping: {
    name: string | null
    line1: string | null
    line2: string | null
    city: string | null
    state: string | null
    postalCode: string | null
  } | null
  rawStatus: string
}

export type PatientOrderDetail = PatientTreatmentOrderDetail | PatientSupplementOrderDetail

function normalizeShipping(raw: unknown): PatientTreatmentOrderDetail['shipping'] {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null
  const r = raw as Record<string, unknown>
  const pick = (k: string) => (typeof r[k] === 'string' ? (r[k] as string) : null)
  return {
    name: pick('patient_name') ?? pick('name'),
    line1: pick('address_line1'),
    line2: pick('address_line2'),
    city: pick('city'),
    state: pick('state'),
    postalCode: pick('postal_code'),
  }
}

export async function getPatientOrderDetail(
  patientId: string,
  identifier: string
): Promise<PatientOrderDetail | null> {
  const admin = createAdminClient()

  if (/^RX-[A-Z0-9]+$/i.test(identifier)) {
    const orderNumber = identifier.toUpperCase()
    const { data, error } = await admin
      .from('treatment_orders')
      .select(
        `id, order_number, patient_id, status, amount_cents, amount_paid_cents, currency,
         tracking_number, tracking_url, shipping_snapshot, opened_at, closed_at, created_at,
         care_programs:care_program_id (id, program_type, title),
         treatment_items:treatment_item_id (id, display_name, treatment_key)`
      )
      .eq('order_number', orderNumber)
      .eq('patient_id', patientId)
      .maybeSingle()
    if (error || !data) return null

    const row = data as unknown as TreatmentOrderRow & {
      patient_id: string
      shipping_snapshot: unknown
      opened_at: string | null
      closed_at: string | null
    }
    const program = pickSingle(row.care_programs)
    const treatment = pickSingle(row.treatment_items)
    const statusView = patientTreatmentOrderStatusView(row.status)
    const title = patientTreatmentOrderTitle({
      status: row.status as TreatmentOrderStatus,
      treatmentDisplayName: treatment?.display_name ?? null,
      programType: program?.program_type ?? null,
    })
    const amountPaidCents = row.amount_paid_cents ?? 0
    return {
      kind: 'treatment',
      identifier: orderNumber,
      orderNumber,
      displayId: orderNumber,
      title,
      subtitle:
        program?.title ??
        (program?.program_type ? broadTitleForProgramType(program.program_type) : null),
      programTitle: program?.title ?? null,
      programType: program?.program_type ?? null,
      treatmentDisplayName: treatment?.display_name ?? null,
      createdAt: row.created_at,
      patientHref: patientTreatmentPath(patientId, orderNumber),
      status: statusView,
      rawStatus: row.status,
      amountCents: row.amount_cents,
      amountPaidCents,
      currency: row.currency,
      trackingNumber: row.tracking_number,
      trackingUrl: row.tracking_url,
      chargeDeferred: amountPaidCents === 0 && row.status === 'pending_clinician_review',
      shipping: normalizeShipping(row.shipping_snapshot),
      openedAt: row.opened_at,
      closedAt: row.closed_at,
    }
  }

  if (/^SUP-[0-9a-f-]{36}$/i.test(identifier)) {
    const id = identifier.slice(4).toLowerCase()
    const { data, error } = await admin
      .from('supplement_fulfillment_orders')
      .select(`id, patient_id, status, shipping_snapshot, items, created_at`)
      .eq('id', id)
      .eq('patient_id', patientId)
      .maybeSingle()
    if (error || !data) return null

    const row = data as unknown as {
      id: string
      status: string
      shipping_snapshot: unknown
      items: unknown
      created_at: string
    }
    const items = Array.isArray(row.items) ? (row.items as Array<Record<string, unknown>>) : []
    const normalizedItems = items.map((raw) => ({
      displayName:
        (typeof raw.display_name === 'string' && raw.display_name) ||
        (typeof raw.name === 'string' && raw.name) ||
        (typeof raw.catalog_medication_id === 'string' && raw.catalog_medication_id) ||
        'Supplement',
      quantity: typeof raw.quantity === 'number' ? raw.quantity : 1,
    }))
    const statusView = patientSupplementOrderStatusView(row.status)
    return {
      kind: 'supplement',
      identifier: `SUP-${id}`,
      displayId: displayIdForUuid('SUP', id),
      title:
        normalizedItems[0]?.displayName ??
        (normalizedItems.length > 1 ? `${normalizedItems.length} supplements` : 'Supplement order'),
      subtitle: 'Supplements',
      createdAt: row.created_at,
      patientHref: patientSupplementPath(patientId, id),
      status: statusView,
      rawStatus: row.status,
      amountCents: null,
      amountPaidCents: 0,
      currency: null,
      trackingNumber: null,
      trackingUrl: null,
      chargeDeferred: false,
      items: normalizedItems,
      shipping: normalizeShipping(row.shipping_snapshot),
    }
  }

  return null
}

// Re-export for callers that only need the path helpers.
export { supplementOrderPath, treatmentOrderPath }
