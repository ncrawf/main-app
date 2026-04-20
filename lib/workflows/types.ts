/** Who caused the workflow transition (used for audit + future routing). */
export type WorkflowEventSource = 'stripe' | 'staff' | 'system' | 'cron'

/** Fired after canonical workflow status has already been persisted. */
export type PatientWorkflowEvent = {
  patientId: string
  fromWorkflowStatus: string | null
  toWorkflowStatus: string
  source: WorkflowEventSource
  /** Staff profile id when `source === 'staff'` */
  actorStaffUserId?: string | null
  /** Stripe Checkout session id — required for payment email dedupe when source is stripe */
  stripeCheckoutSessionId?: string | null
  /** Shown in payment_received email, e.g. "199.00 USD" */
  paymentSummary?: string | null
  /** Optional shipment metadata for `shipped` notifications. */
  trackingNumber?: string | null
  trackingUrl?: string | null
}
