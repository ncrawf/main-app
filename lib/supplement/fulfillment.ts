export const SUPPLEMENT_FULFILLMENT_STATUSES = [
  'queued',
  'blocked_missing_shipping',
  'sent_to_vendor',
  'shipped',
  'delivered',
  'cancelled',
] as const

export type SupplementFulfillmentStatus = (typeof SUPPLEMENT_FULFILLMENT_STATUSES)[number]

const TRANSITIONS: Record<SupplementFulfillmentStatus, SupplementFulfillmentStatus[]> = {
  queued: ['blocked_missing_shipping', 'sent_to_vendor', 'shipped', 'cancelled'],
  blocked_missing_shipping: ['queued', 'cancelled'],
  sent_to_vendor: ['shipped', 'cancelled'],
  shipped: ['delivered'],
  delivered: [],
  cancelled: [],
}

export function isSupplementFulfillmentStatus(value: string): value is SupplementFulfillmentStatus {
  return (SUPPLEMENT_FULFILLMENT_STATUSES as readonly string[]).includes(value)
}

export function allowedNextSupplementFulfillmentStatuses(
  currentStatus: string
): SupplementFulfillmentStatus[] {
  if (!isSupplementFulfillmentStatus(currentStatus)) return []
  return TRANSITIONS[currentStatus]
}

export function isSupplementFulfillmentTransitionAllowed(from: string, to: string): boolean {
  if (!isSupplementFulfillmentStatus(from) || !isSupplementFulfillmentStatus(to)) return false
  return TRANSITIONS[from].includes(to)
}

export function labelSupplementFulfillmentStatus(status: string): string {
  return status
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

