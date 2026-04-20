import { getAppBaseUrl } from '@/lib/stripe/server'
import type { NotificationTemplateKey } from '@/lib/workflows/notificationRules'
import { getEmailTheme } from './emailTheme'

export type PatientMessageContext = {
  patientId: string
  email: string
  firstName: string | null
  /** Signed exchange URL (sets httpOnly session). Prefer over raw `/dashboard/{id}` in outbound messages. */
  patientPortalUrl?: string | null
  /** Optional line e.g. "199.00 USD" for payment emails */
  paymentSummary?: string | null
  trackingNumber?: string | null
  trackingUrl?: string | null
}

function greeting(firstName: string | null): string {
  const n = firstName?.trim()
  return n ? `Hi ${n},` : 'Hi,'
}

function dashboardUrl(ctx: PatientMessageContext): string {
  const trimmed = ctx.patientPortalUrl?.trim()
  if (trimmed) return trimmed
  const base = getAppBaseUrl().replace(/\/$/, '')
  return `${base}/dashboard/${ctx.patientId}`
}

function escapeHtml(s: string): string {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

type EmailBody = {
  subject: string
  previewText: string
  eyebrow?: string
  heading: string
  intro: string
  detail?: string
  footerVariant?: 'transactional' | 'marketing'
}

function renderEmailHtml(ctx: PatientMessageContext, body: EmailBody): string {
  const dash = dashboardUrl(ctx)
  const g = greeting(ctx.firstName)
  const theme = getEmailTheme()
  const eyebrow = body.eyebrow
    ? `<p style="margin:0 0 10px 0;color:${escapeHtml(theme.textMuted)};font-size:12px;letter-spacing:.06em;text-transform:uppercase;">${escapeHtml(body.eyebrow)}</p>`
    : ''
  const detail = body.detail
    ? `<p style="margin:0 0 18px 0;color:${escapeHtml(theme.textPrimary)};font-size:16px;line-height:1.6;">${escapeHtml(body.detail)}</p>`
    : ''
  const preheader = `<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(body.previewText)}</div>`
  const logo = theme.logoUrl
    ? `<img src="${escapeHtml(theme.logoUrl)}" alt="${escapeHtml(theme.brandName)}" height="20" style="display:block;margin:0 0 14px 0;height:20px;width:auto;" />`
    : `<p style="margin:0 0 14px 0;color:${escapeHtml(theme.accentHex)};font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">${escapeHtml(theme.brandName)}</p>`
  const footer =
    body.footerVariant === 'marketing'
      ? `${escapeHtml(theme.brandName)} updates. Manage preferences in your account settings.`
      : `${escapeHtml(theme.brandName)} care updates are sent based on your current protocol status.`
  const shippedExtra =
    body.footerVariant !== 'marketing' && ctx.trackingNumber
      ? `<p style="margin:0 0 18px 0;color:${escapeHtml(theme.textPrimary)};font-size:14px;line-height:1.6;"><strong>Tracking:</strong> ${escapeHtml(
          ctx.trackingNumber
        )}${ctx.trackingUrl ? ` · <a href="${escapeHtml(ctx.trackingUrl)}" style="color:${escapeHtml(theme.accentHex)};">Open carrier link</a>` : ''}</p>`
      : ''

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:${escapeHtml(theme.pageBg)};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${escapeHtml(theme.textPrimary)};">
    ${preheader}
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:${escapeHtml(theme.cardBg)};border:1px solid ${escapeHtml(theme.border)};border-radius:14px;">
            <tr>
              <td style="padding:24px 24px 8px 24px;">
                ${logo}
                ${eyebrow}
                <h1 style="margin:0 0 14px 0;color:${escapeHtml(theme.textPrimary)};font-size:24px;line-height:1.25;">${escapeHtml(body.heading)}</h1>
                <p style="margin:0 0 18px 0;color:${escapeHtml(theme.textPrimary)};font-size:16px;line-height:1.6;">${escapeHtml(g)}</p>
                <p style="margin:0 0 18px 0;color:${escapeHtml(theme.textPrimary)};font-size:16px;line-height:1.6;">${escapeHtml(body.intro)}</p>
                ${detail}
                ${shippedExtra}
                <table role="presentation" cellspacing="0" cellpadding="0" style="margin:8px 0 24px 0;">
                  <tr>
                    <td align="center" style="border-radius:8px;background:${escapeHtml(theme.accentHex)};">
                      <a href="${escapeHtml(dash)}" style="display:inline-block;padding:12px 18px;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;">
                        Open your dashboard
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="border-top:1px solid ${escapeHtml(theme.pageBg)};padding:14px 24px 22px 24px;color:${escapeHtml(theme.textMuted)};font-size:12px;line-height:1.5;">
                ${footer}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

function renderEmailText(ctx: PatientMessageContext, body: EmailBody): string {
  const theme = getEmailTheme()
  const dash = dashboardUrl(ctx)
  const tracking =
    ctx.trackingNumber && body.subject.toLowerCase().includes('shipp')
      ? `\n\nTracking: ${ctx.trackingNumber}${ctx.trackingUrl ? ` (${ctx.trackingUrl})` : ''}`
      : ''
  return `${body.heading}

${greeting(ctx.firstName)}

${body.intro}${body.detail ? `\n\n${body.detail}` : ''}${tracking}

Open your dashboard: ${dash}

— ${theme.brandName}`
}

export function buildPatientEmail(
  templateKey: NotificationTemplateKey,
  ctx: PatientMessageContext
): { subject: string; html: string; text: string } {
  let body: EmailBody

  switch (templateKey) {
    case 'payment_received': {
      const extra = ctx.paymentSummary ? ` (${ctx.paymentSummary})` : ''
      body = {
        subject: 'We received your payment',
        previewText: 'Payment confirmed — your visit is moving forward.',
        eyebrow: 'Payment update',
        heading: 'Payment confirmed',
        intro: `Thanks — we received your payment${extra}.`,
        detail: 'Your visit is moving forward. You can track next steps in your dashboard.',
      }
      break
    }
    case 'intake_submitted': {
      body = {
        subject: 'We received your intake',
        previewText: 'Intake received — we will review your visit details.',
        eyebrow: 'Intake update',
        heading: 'Intake received',
        intro: 'Thanks — we received your intake form.',
        detail: 'Our team will review it as part of your visit and keep you posted.',
      }
      break
    }
    case 'awaiting_clinical_review': {
      body = {
        subject: 'Your visit is in clinical review',
        previewText: 'Your case is now in clinical review.',
        eyebrow: 'Clinical review',
        heading: 'In clinical review',
        intro: 'Your visit is now in clinical review.',
        detail: 'We will send another update as soon as your clinician has a decision.',
      }
      break
    }
    case 'case_approved': {
      body = {
        subject: 'Your case was approved',
        previewText: 'Approved — next steps are available now.',
        eyebrow: 'Clinical decision',
        heading: 'You are approved',
        intro: 'Your clinician has approved your case.',
        detail: 'Next steps are ready in your dashboard.',
      }
      break
    }
    case 'case_denied': {
      body = {
        subject: 'Update on your MAIN visit',
        previewText: 'There is an update on your visit request.',
        eyebrow: 'Clinical decision',
        heading: 'Your visit has an update',
        intro: 'There is an update on your visit request.',
        detail: 'Please review details and next steps in your dashboard.',
      }
      break
    }
    case 'followup_needed': {
      body = {
        subject: 'We need a bit more information',
        previewText: 'Action needed to keep your case moving.',
        eyebrow: 'Action needed',
        heading: 'Additional info needed',
        intro: 'We need a little more information before we can move forward.',
        detail: 'Please complete the requested steps in your dashboard.',
      }
      break
    }
    case 'rx_sent': {
      body = {
        subject: 'Prescription sent to pharmacy',
        previewText: 'Your prescription has been sent.',
        eyebrow: 'Medication update',
        heading: 'Prescription sent',
        intro: 'Your prescription has been sent to the pharmacy.',
        detail: 'You can track fulfillment progress in your dashboard.',
      }
      break
    }
    case 'shipped': {
      body = {
        subject: 'Your order has shipped',
        previewText: 'Shipment update — your order is on the way.',
        eyebrow: 'Shipment update',
        heading: 'Your order has shipped',
        intro: 'Good news — your order is on the way.',
        detail: 'Tracking details are available in your dashboard.',
      }
      break
    }
    case 'active_care': {
      body = {
        subject: 'You are in active care',
        previewText: 'Welcome to active care.',
        eyebrow: 'Care update',
        heading: 'Welcome to active care',
        intro: 'You are now in active care with MAIN.',
        detail: 'Your dashboard includes your current plan, check-ins, and next steps.',
      }
      break
    }
    case 'followup_due': {
      body = {
        subject: 'Time for a check-in',
        previewText: 'Check-in due now.',
        eyebrow: 'Check-in due',
        heading: 'Time for your check-in',
        intro: 'It is time for your next follow-up.',
        detail: 'Please complete any due tasks in your dashboard.',
      }
      break
    }
    case 'refill_pending': {
      body = {
        subject: 'Refill update',
        previewText: 'There is a refill update for your care plan.',
        eyebrow: 'Refill update',
        heading: 'Refill in progress',
        intro: 'There is an update on your refill.',
        detail: 'Please review current details in your dashboard.',
      }
      break
    }
    default: {
      const _exhaustive: never = templateKey
      throw new Error(`Unhandled template: ${String(_exhaustive)}`)
    }
  }

  return {
    subject: body.subject,
    html: renderEmailHtml(ctx, body),
    text: renderEmailText(ctx, body),
  }
}

/** Short SMS bodies (Twilio); same keys as email templates. */
export function buildPatientSmsPreview(templateKey: NotificationTemplateKey, ctx: PatientMessageContext): string {
  const short =
    ctx.patientPortalUrl?.trim() ||
    `${getAppBaseUrl().replace(/\/$/, '')}/dashboard/${ctx.patientId}`

  switch (templateKey) {
    case 'payment_received':
      return `MAIN: Payment received. ${short}`
    case 'intake_submitted':
      return `MAIN: Intake received. ${short}`
    case 'awaiting_clinical_review':
      return `MAIN: In clinical review. ${short}`
    case 'case_approved':
      return `MAIN: Case approved. ${short}`
    case 'case_denied':
      return `MAIN: Update on your visit. ${short}`
    case 'followup_needed':
      return `MAIN: More info needed. ${short}`
    case 'rx_sent':
      return `MAIN: Rx sent to pharmacy. ${short}`
    case 'shipped':
      return `MAIN: Order shipped. ${short}`
    case 'active_care':
      return `MAIN: Active care. ${short}`
    case 'followup_due':
      return `MAIN: Check-in due. ${short}`
    case 'refill_pending':
      return `MAIN: Refill update. ${short}`
    default: {
      return `MAIN: Update. ${short}`
    }
  }
}

export type SupplementFulfillmentEmailStatus =
  | 'queued'
  | 'blocked_missing_shipping'
  | 'sent_to_vendor'
  | 'shipped'
  | 'delivered'
  | 'cancelled'

export function buildSupplementFulfillmentEmail(
  status: SupplementFulfillmentEmailStatus,
  ctx: PatientMessageContext
): { subject: string; html: string; text: string } {
  let body: EmailBody
  switch (status) {
    case 'queued':
      body = {
        subject: 'Your supplement order is queued',
        previewText: 'We received your supplement order.',
        eyebrow: 'Supplement order',
        heading: 'Order received',
        intro: 'We received your supplement order and queued it for fulfillment.',
        detail: 'You can follow status updates in your dashboard.',
      }
      break
    case 'blocked_missing_shipping':
      body = {
        subject: 'We need your shipping details',
        previewText: 'Your supplement order is waiting on shipping info.',
        eyebrow: 'Supplement order',
        heading: 'Shipping info needed',
        intro: 'Your supplement order is paused because we need complete shipping details.',
        detail: 'Please review your profile information in your dashboard so we can continue.',
      }
      break
    case 'sent_to_vendor':
      body = {
        subject: 'Your supplement order is being prepared',
        previewText: 'Your supplement order is now with our fulfillment partner.',
        eyebrow: 'Supplement order',
        heading: 'Preparing your order',
        intro: 'Your supplement order has been sent to our fulfillment partner.',
        detail: 'We will send another update as soon as it ships.',
      }
      break
    case 'shipped':
      body = {
        subject: 'Your supplement order is on the way',
        previewText: 'Shipment update — your supplements are on the way.',
        eyebrow: 'Shipment update',
        heading: 'Order shipped',
        intro: 'Good news — your supplement order is on the way.',
        detail: 'Tracking details are available in your dashboard.',
      }
      break
    case 'delivered':
      body = {
        subject: 'Your supplement order was delivered',
        previewText: 'Delivery confirmation for your supplement order.',
        eyebrow: 'Delivery update',
        heading: 'Order delivered',
        intro: 'Your supplement order was marked as delivered.',
        detail: 'If anything looks off, contact support from your dashboard.',
      }
      break
    case 'cancelled':
      body = {
        subject: 'Update on your supplement order',
        previewText: 'Your supplement order has been canceled.',
        eyebrow: 'Supplement order',
        heading: 'Order canceled',
        intro: 'Your supplement order has been canceled.',
        detail: 'Please check your dashboard for details and next steps.',
      }
      break
    default: {
      const _exhaustive: never = status
      throw new Error(`Unhandled supplement status: ${String(_exhaustive)}`)
    }
  }

  return {
    subject: body.subject,
    html: renderEmailHtml(ctx, body),
    text: renderEmailText(ctx, body),
  }
}

export function buildPatientCallbackCompletedEmail(ctx: PatientMessageContext): {
  subject: string
  html: string
  text: string
} {
  const body: EmailBody = {
    subject: 'Update: your callback request was completed',
    previewText: 'Your care team marked your callback request complete.',
    eyebrow: 'Care team update',
    heading: 'Callback completed',
    intro: 'Your callback request was marked complete by our team.',
    detail: 'If you still need help, send another message from your dashboard.',
  }

  return {
    subject: body.subject,
    html: renderEmailHtml(ctx, body),
    text: renderEmailText(ctx, body),
  }
}

export function buildLabRequisitionPublishedEmail(
  ctx: PatientMessageContext & { orderDate: string; testCount: number }
): { subject: string; html: string; text: string } {
  const body: EmailBody = {
    subject: 'Your lab requisition is ready',
    previewText: 'A new lab requisition PDF is available in your dashboard.',
    eyebrow: 'Lab order update',
    heading: 'Lab requisition ready',
    intro: `Your care team published a lab requisition dated ${ctx.orderDate}.`,
    detail: `The order includes ${ctx.testCount} lab ${ctx.testCount === 1 ? 'test' : 'tests'}. Open your dashboard to view or download the PDF.`,
  }

  return {
    subject: body.subject,
    html: renderEmailHtml(ctx, body),
    text: renderEmailText(ctx, body),
  }
}

export function buildClinicalVisitNotePublishedEmail(
  ctx: PatientMessageContext & { visitDate: string }
): { subject: string; html: string; text: string } {
  const body: EmailBody = {
    subject: 'Your visit summary is available',
    previewText: 'A signed visit summary PDF is available in your dashboard.',
    eyebrow: 'Visit update',
    heading: 'Visit summary ready',
    intro: `Your care team published your visit summary from ${ctx.visitDate}.`,
    detail: 'Open your dashboard to view or download your signed progress note.',
  }

  return {
    subject: body.subject,
    html: renderEmailHtml(ctx, body),
    text: renderEmailText(ctx, body),
  }
}
