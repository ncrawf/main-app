/** Canonical GLP-1 workflow keys for internal ops (must stay in sync with patient dashboard copy). */
export const GLP1_OPS_STATUSES = [
  { value: 'intake_submitted', label: 'Intake submitted' },
  { value: 'payment_completed', label: 'Payment completed' },
  { value: 'awaiting_review', label: 'Awaiting clinical review' },
  { value: 'approved', label: 'Approved' },
  { value: 'denied', label: 'Denied (hard)' },
  { value: 'rejected_followup', label: 'Rejected — follow-up needed' },
  { value: 'rx_sent', label: 'Rx sent to pharmacy' },
  { value: 'shipped', label: 'Shipped' },
  { value: 'active', label: 'Active care' },
  { value: 'followup_due', label: 'Follow-up due' },
  { value: 'refill_pending', label: 'Refill pending' },
  { value: 'lead', label: 'Lead' },
  { value: 'intake_started', label: 'Intake started' },
] as const

export type Glp1OpsStatusValue = (typeof GLP1_OPS_STATUSES)[number]['value']

export const GLP1_OPS_STATUS_VALUES = new Set<string>(GLP1_OPS_STATUSES.map((s) => s.value))

const LABEL = new Map(GLP1_OPS_STATUSES.map((s) => [s.value, s.label]))

export function labelForGlp1Status(value: string | null | undefined): string {
  if (!value) return '—'
  return LABEL.get(value as Glp1OpsStatusValue) ?? value
}
