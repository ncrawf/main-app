/**
 * Matches Postgres enum `public.treatment_order_status` and
 * `public.treatment_order_status_transitions` seeded in
 * `supabase/migrations/20260428100000_orders_lifecycle_v1.sql`.
 * Keep in sync when the DB graph changes.
 */
export const TREATMENT_ORDER_STATUS_VALUES = [
  'pending_clinician_review',
  'approved_fulfillment_pending',
  'payment_failed',
  'preparing',
  'rx_sent',
  'shipped',
  'fulfilled',
  'exception',
  'refunded',
  'cancelled',
] as const

export type TreatmentOrderStatus = (typeof TREATMENT_ORDER_STATUS_VALUES)[number]

const TRANSITIONS: Record<TreatmentOrderStatus, TreatmentOrderStatus[]> = {
  pending_clinician_review: ['approved_fulfillment_pending', 'cancelled'],
  approved_fulfillment_pending: ['preparing', 'payment_failed', 'cancelled'],
  payment_failed: ['preparing', 'approved_fulfillment_pending', 'cancelled'],
  preparing: ['rx_sent', 'exception', 'cancelled'],
  rx_sent: ['shipped', 'exception', 'cancelled'],
  shipped: ['fulfilled', 'exception'],
  fulfilled: ['refunded'],
  exception: ['preparing', 'rx_sent', 'shipped', 'cancelled', 'refunded'],
  refunded: [],
  cancelled: [],
}

export const TERMINAL_TREATMENT_ORDER_STATUSES: readonly TreatmentOrderStatus[] = [
  'fulfilled',
  'refunded',
  'cancelled',
]

export function isTreatmentOrderStatus(value: string): value is TreatmentOrderStatus {
  return (TREATMENT_ORDER_STATUS_VALUES as readonly string[]).includes(value)
}

export function allowedNextTreatmentOrderStatuses(
  current: string
): TreatmentOrderStatus[] {
  if (!isTreatmentOrderStatus(current)) return []
  return TRANSITIONS[current]
}

export function isTreatmentOrderTransitionAllowed(
  from: string,
  to: string
): boolean {
  if (!isTreatmentOrderStatus(from) || !isTreatmentOrderStatus(to)) return false
  return TRANSITIONS[from].includes(to)
}

/**
 * Internal operational label (staff-facing, Shopify-style).
 * Patient-facing labels are derived separately in `patientOrderLabels.ts`.
 */
export function labelTreatmentOrderStatus(status: string): string {
  switch (status) {
    case 'pending_clinician_review':
      return 'Pending clinician review'
    case 'approved_fulfillment_pending':
      return 'Approved — awaiting payment'
    case 'payment_failed':
      return 'Payment failed'
    case 'preparing':
      return 'Preparing'
    case 'rx_sent':
      return 'Rx sent to pharmacy'
    case 'shipped':
      return 'Shipped'
    case 'fulfilled':
      return 'Fulfilled'
    case 'exception':
      return 'Exception'
    case 'refunded':
      return 'Refunded'
    case 'cancelled':
      return 'Cancelled'
    default:
      return status
  }
}

/**
 * Shopify-like status pill tone. Keep neutral; the UI layer maps this to Tailwind classes.
 */
export type OrderStatusTone = 'neutral' | 'info' | 'warn' | 'success' | 'danger'

export function toneForTreatmentOrderStatus(status: string): OrderStatusTone {
  switch (status) {
    case 'pending_clinician_review':
    case 'approved_fulfillment_pending':
      return 'info'
    case 'preparing':
    case 'rx_sent':
    case 'shipped':
      return 'neutral'
    case 'fulfilled':
      return 'success'
    case 'payment_failed':
    case 'exception':
      return 'warn'
    case 'refunded':
    case 'cancelled':
      return 'danger'
    default:
      return 'neutral'
  }
}
