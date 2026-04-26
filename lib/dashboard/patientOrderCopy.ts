import type { TreatmentOrderStatus } from '@/lib/orders/treatmentOrderTransitions'

/**
 * Patient-safe copy for each order lifecycle state.
 *
 * Rules (aligns with the product brief):
 * - Titles stay BROAD before clinician approval (handled by patientTreatmentOrderTitle).
 * - Status copy here is the patient-facing layer: operational values like
 *   `approved_fulfillment_pending` or `payment_failed` should read as calm,
 *   user-readable statements.
 */

export type PatientOrderStatusView = {
  label: string
  /** Longer explanation for the card body / detail view. */
  description: string
  /** Visual tone for the patient-facing pill. */
  tone: 'neutral' | 'info' | 'warn' | 'success' | 'danger'
}

const TREATMENT_COPY: Record<TreatmentOrderStatus, PatientOrderStatusView> = {
  pending_clinician_review: {
    label: 'Under review',
    description:
      'Your clinician is reviewing your intake. You won’t be charged until they approve a prescription.',
    tone: 'info',
  },
  approved_fulfillment_pending: {
    label: 'Preparing payment',
    description:
      'Your clinician approved your treatment. We’re capturing payment before shipment.',
    tone: 'info',
  },
  payment_failed: {
    label: 'Payment needs attention',
    description:
      'We couldn’t capture payment. Update your card and we’ll retry the charge automatically.',
    tone: 'warn',
  },
  preparing: {
    label: 'Preparing order',
    description: 'Payment received. Your pharmacy is preparing your order.',
    tone: 'info',
  },
  rx_sent: {
    label: 'Sent to pharmacy',
    description: 'Your prescription is at the pharmacy and awaiting shipment.',
    tone: 'info',
  },
  shipped: {
    label: 'Shipped',
    description: 'Your order is on its way. Tracking details are below.',
    tone: 'success',
  },
  fulfilled: {
    label: 'Delivered',
    description: 'Your order was delivered.',
    tone: 'success',
  },
  exception: {
    label: 'Action needed',
    description:
      'We hit a snag with this order. Our team is working on it and will update you shortly.',
    tone: 'warn',
  },
  refunded: {
    label: 'Refunded',
    description: 'This order was refunded.',
    tone: 'neutral',
  },
  cancelled: {
    label: 'Cancelled',
    description: 'This order was cancelled. No charge was captured.',
    tone: 'neutral',
  },
}

export function patientTreatmentOrderStatusView(status: string): PatientOrderStatusView {
  if (status in TREATMENT_COPY) {
    return TREATMENT_COPY[status as TreatmentOrderStatus]
  }
  return { label: status, description: '', tone: 'neutral' }
}

const SUPPLEMENT_COPY: Record<string, PatientOrderStatusView> = {
  queued: {
    label: 'Preparing order',
    description: 'Your supplement order is queued for fulfillment.',
    tone: 'info',
  },
  blocked_missing_shipping: {
    label: 'Shipping info needed',
    description: 'We’re missing part of your shipping address. Please update your profile.',
    tone: 'warn',
  },
  sent_to_vendor: {
    label: 'Preparing order',
    description: 'Your supplement order is being packed.',
    tone: 'info',
  },
  shipped: {
    label: 'Shipped',
    description: 'Your supplement order is on its way.',
    tone: 'success',
  },
  delivered: {
    label: 'Delivered',
    description: 'Your supplement order was delivered.',
    tone: 'success',
  },
  cancelled: {
    label: 'Cancelled',
    description: 'This supplement order was cancelled.',
    tone: 'neutral',
  },
}

export function patientSupplementOrderStatusView(status: string): PatientOrderStatusView {
  if (status in SUPPLEMENT_COPY) {
    return SUPPLEMENT_COPY[status]!
  }
  return { label: status, description: '', tone: 'neutral' }
}

export function patientOrderToneToPillClasses(tone: PatientOrderStatusView['tone']): string {
  switch (tone) {
    case 'success':
      return 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'
    case 'info':
      return 'bg-sky-50 text-sky-700 ring-1 ring-sky-200'
    case 'warn':
      return 'bg-amber-50 text-amber-800 ring-1 ring-amber-200'
    case 'danger':
      return 'bg-rose-50 text-rose-700 ring-1 ring-rose-200'
    default:
      return 'bg-neutral-100 text-neutral-700 ring-1 ring-neutral-200'
  }
}
