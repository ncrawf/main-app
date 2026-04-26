import type { LabKitFulfillmentStatus } from './labKitFulfillmentTransitions'
import type { OrderKind } from './orderIdentifiers'
import type { OrderStatusTone } from './treatmentOrderTransitions'
import type { TreatmentOrderStatus } from './treatmentOrderTransitions'

export type StaffOrderRow = {
  kind: OrderKind
  identifier: string
  displayId: string
  detailHref: string
  patientId: string
  patientName: string
  createdAt: string
  statusCode: string
  statusLabel: string
  statusTone: OrderStatusTone
  programLabel: string | null
  titleLabel: string
  amountCents: number | null
  amountPaidCents: number | null
  currency: string | null
  trackingNumber: string | null
  trackingUrl: string | null
}

export type StaffOrdersListBundle = {
  treatments: StaffOrderRow[]
  supplements: StaffOrderRow[]
  labKits: StaffOrderRow[]
  counts: {
    treatments: number
    supplements: number
    labKits: number
  }
}

export type TreatmentOrderDetail = {
  kind: 'treatment'
  id: string
  orderNumber: string
  patientId: string
  patientName: string
  createdAt: string
  updatedAt: string
  openedAt: string | null
  closedAt: string | null
  status: TreatmentOrderStatus
  statusLabel: string
  statusTone: OrderStatusTone
  allowedNextStatuses: TreatmentOrderStatus[]
  amountCents: number | null
  amountPaidCents: number
  currency: string | null
  trackingNumber: string | null
  trackingUrl: string | null
  internalNotes: string | null
  exceptionReason: string | null
  shippingSnapshot: Record<string, unknown>
  programType: string | null
  programTitle: string | null
  treatmentDisplayName: string | null
  treatmentKey: string | null
  title: string
  paymentFailureMessage: string | null
  stripePaymentIntentId: string | null
  patientHasPaymentMethod: boolean
}

export type SupplementOrderDetail = {
  kind: 'supplement'
  id: string
  displayId: string
  patientId: string
  patientName: string
  createdAt: string
  updatedAt: string
  status: string
  statusLabel: string
  statusTone: OrderStatusTone
  allowedNextStatuses: string[]
  shippingSnapshot: Record<string, unknown>
  items: Array<Record<string, unknown>>
  metadata: Record<string, unknown>
  stripeCheckoutSessionId: string
}

export type LabKitOrderDetail = {
  kind: 'lab_kit'
  id: string
  displayId: string
  patientId: string
  patientName: string
  createdAt: string
  updatedAt: string
  kitStatus: LabKitFulfillmentStatus
  kitStatusLabel: string
  kitStatusTone: OrderStatusTone
  allowedNextStatuses: LabKitFulfillmentStatus[]
  kitCarrier: string | null
  kitTrackingNumber: string | null
  kitTrackingUrl: string | null
  kitShippedAt: string | null
  kitDeliveredAt: string | null
  kitFulfillmentNotes: string | null
  labStatus: string
  orderDate: string
  orderingProviderName: string
  testsCount: number
}

export type StaffOrderDetail =
  | TreatmentOrderDetail
  | SupplementOrderDetail
  | LabKitOrderDetail
