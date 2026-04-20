/** Stable job_type values for public.outbound_jobs — keep in sync with dispatchOutboundJob. */
export const OUTBOUND_JOB_TYPES = {
  emailTransactional: 'email.transactional',
  smsTransactional: 'sms.transactional',
} as const

export type OutboundJobType = (typeof OUTBOUND_JOB_TYPES)[keyof typeof OUTBOUND_JOB_TYPES]

export type EmailTransactionalPayload = {
  patient_id: string
  dedupe_key: string
  template_key: string
  to: string
  subject: string
  html: string
  text: string
  /** When true, inserts patient_timeline_events email_sent (workflow notifications). */
  insert_timeline_email_sent?: boolean
  workflow_source?: string | null
}

export type SmsTransactionalPayload = {
  patient_id: string
  dedupe_key: string
  template_key: string
  to_e164: string
  body: string
  workflow_source?: string | null
}
