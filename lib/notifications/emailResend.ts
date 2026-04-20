import { Resend } from 'resend'

export type SendEmailResult =
  | { ok: true; id: string }
  | { ok: false; error: string; skipped?: boolean }

/**
 * Sends one transactional email via Resend.
 * If `RESEND_API_KEY` is unset, returns skipped (local dev / not configured).
 */
export async function sendTransactionalEmail(params: {
  to: string
  subject: string
  html: string
  text: string
}): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey?.trim()) {
    return { ok: false, error: 'RESEND_API_KEY not set', skipped: true }
  }

  const from = process.env.RESEND_FROM_EMAIL?.trim()
  if (!from) {
    return { ok: false, error: 'RESEND_FROM_EMAIL not set', skipped: true }
  }

  const resend = new Resend(apiKey)
  const { data, error } = await resend.emails.send({
    from,
    to: params.to,
    subject: params.subject,
    html: params.html,
    text: params.text,
  })

  if (error) {
    return { ok: false, error: error.message }
  }
  if (!data?.id) {
    return { ok: false, error: 'Resend returned no message id' }
  }
  return { ok: true, id: data.id }
}
