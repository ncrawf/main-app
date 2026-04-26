/**
 * Matches Postgres enum `public.lab_kit_fulfillment_status` and transitions seeded
 * in `supabase/migrations/20260428100000_orders_lifecycle_v1.sql`.
 *
 * Shipping-only — this has nothing to do with lab requisition / results lifecycle.
 */
export const LAB_KIT_FULFILLMENT_STATUSES = [
  'not_shipping_kit',
  'kit_queued',
  'kit_shipped',
  'kit_delivered',
  'kit_returned',
  'kit_cancelled',
] as const

export type LabKitFulfillmentStatus = (typeof LAB_KIT_FULFILLMENT_STATUSES)[number]

const TRANSITIONS: Record<LabKitFulfillmentStatus, LabKitFulfillmentStatus[]> = {
  not_shipping_kit: ['kit_queued'],
  kit_queued: ['kit_shipped', 'kit_cancelled'],
  kit_shipped: ['kit_delivered', 'kit_returned', 'kit_cancelled'],
  kit_delivered: ['kit_returned'],
  kit_returned: ['kit_queued'],
  kit_cancelled: ['kit_queued'],
}

export function isLabKitFulfillmentStatus(value: string): value is LabKitFulfillmentStatus {
  return (LAB_KIT_FULFILLMENT_STATUSES as readonly string[]).includes(value)
}

export function allowedNextLabKitFulfillmentStatuses(
  current: string
): LabKitFulfillmentStatus[] {
  if (!isLabKitFulfillmentStatus(current)) return []
  return TRANSITIONS[current]
}

export function isLabKitFulfillmentTransitionAllowed(from: string, to: string): boolean {
  if (!isLabKitFulfillmentStatus(from) || !isLabKitFulfillmentStatus(to)) return false
  return TRANSITIONS[from].includes(to)
}

export function labelLabKitFulfillmentStatus(status: string): string {
  switch (status) {
    case 'not_shipping_kit':
      return 'No kit'
    case 'kit_queued':
      return 'Queued'
    case 'kit_shipped':
      return 'Shipped'
    case 'kit_delivered':
      return 'Delivered'
    case 'kit_returned':
      return 'Returned'
    case 'kit_cancelled':
      return 'Cancelled'
    default:
      return status
  }
}
