/** Matches Postgres enum `public.refill_request_status`. */
export const REFILL_REQUEST_STATUS_VALUES = [
  'requested',
  'under_review',
  'approved',
  'denied',
  'fulfilled',
  'cancelled',
] as const

export type RefillRequestStatus = (typeof REFILL_REQUEST_STATUS_VALUES)[number]

const REFILL_TRANSITIONS: Record<RefillRequestStatus, RefillRequestStatus[]> = {
  requested: ['under_review', 'approved', 'cancelled'],
  under_review: ['approved', 'denied', 'cancelled'],
  approved: ['fulfilled', 'cancelled'],
  denied: [],
  fulfilled: [],
  cancelled: [],
}

export function isValidRefillRequestStatus(s: string): s is RefillRequestStatus {
  return (REFILL_REQUEST_STATUS_VALUES as readonly string[]).includes(s)
}

export function allowedNextRefillRequestStatuses(current: RefillRequestStatus): RefillRequestStatus[] {
  return REFILL_TRANSITIONS[current] ?? []
}

export function isRefillRequestTransitionAllowed(from: RefillRequestStatus, to: RefillRequestStatus): boolean {
  return allowedNextRefillRequestStatuses(from).includes(to)
}

/** Open pipeline: blocks a new `requestRefill` until resolved or no longer pending fulfillment. */
export const OPEN_REFILL_REQUEST_STATUSES: readonly RefillRequestStatus[] = ['requested', 'under_review', 'approved']
