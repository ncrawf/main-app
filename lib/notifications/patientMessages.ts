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
    // Phase 4H-pre commit 5 — `payment_received` case removed. Migrated
    // to typed Template at `repo/templates/billing/payment_received_v1.ts`
    // per Section 1Q.12 DELETE-AFTER-PARITY directive. Rendering now
    // happens in `lib/templates/render/payment-received.ts` driven by
    // typed required_variables; brand sourced from `brands` table per
    // ADR Section 7.5 multi-tenant rule.
    // Phase 4H-templates-discipline commit 1 — `intake_submitted` case
    // removed. Migrated to typed Template at
    // `repo/templates/account_lifecycle/intake_submitted_v1.ts` per
    // Section 1Q.12 DELETE-AFTER-PARITY directive. Rendering now happens
    // in `lib/templates/render/intake-submitted.ts` driven by typed
    // required_variables; brand sourced from `brands` table per ADR
    // Section 7.5 multi-tenant rule.
    // Phase 4H-templates-discipline c3 — `case 'awaiting_clinical_review'`
    // arm removed; rendering migrated to
    // lib/templates/render/awaiting-clinical-review.ts and the typed
    // Template at repo/templates/clinical_decision/
    // awaiting_clinical_review_v1.ts.
    // Phase 4H-templates-discipline c2 — `case 'case_approved'` arm
    // removed; rendering migrated to lib/templates/render/case-approved.ts
    // and the typed Template at repo/templates/clinical_decision/
    // case_approved_v1.ts.
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
    // Phase 4H-templates-discipline c7 — `case 'followup_needed'`
    // arm removed; email rendering migrated to
    // renderFollowupNeededEmail in lib/templates/render/followup-
    // needed.ts. Producer dispatch from updateTreatmentItemStatus
    // (paused | stopped) + updateCareProgramStatus (paused |
    // completed | cancelled) on transition to those statuses.
    // Phase 4H-templates-discipline c8 — `case 'rx_sent'` arm
    // removed; email rendering migrated to renderRxSentEmail in
    // lib/templates/render/rx-sent.ts. Brand prefix sourced from
    // `brands.slug.toUpperCase()` (typed slot `brand_short_label`)
    // instead of hardcoded "MAIN:" per ADR Section 7.5 multi-tenant
    // rule. Type system encodes pharmacy_lifecycle /
    // pharmacy_event_kind per system-map `## Platform operational
    // model` doctrine; runtime dispatch is from
    // updateTreatmentItemStatus on the legacy case-shaped producer
    // surface as transitional locality per PREFLIGHT 4H-c8 §1 +
    // radar zone 27.
    // Phase 4H-templates-discipline c4 — `case 'shipped'` arm
    // removed; email rendering migrated to renderOrderShippedEmail
    // in lib/templates/render/order-shipped.ts. Brand prefix sourced
    // from `brands.slug.toUpperCase()` (typed slot `brand_short_label`)
    // instead of hardcoded "MAIN:" per ADR Section 7.5 multi-tenant
    // rule. Type system encodes fulfillment_lifecycle / order_kind
    // per system-map `## Platform operational model` doctrine; runtime
    // dispatch is from updateTreatmentItemStatus on the legacy case-
    // shaped producer surface as transitional locality (radar zone
    // 27 + audit §6 #3).
    // Phase 4H-templates-discipline c5 — `case 'active_care'` arm
    // removed; email rendering migrated to renderActiveCareEmail in
    // lib/templates/render/active-care.ts. Legacy intro line
    // "You are now in active care with MAIN." rewritten to
    // "You are now in active care with ${brand_short_label}." per
    // ADR Section 7.5 multi-tenant rule. SMS prefix sourced from
    // brand_short_label slot. Producer dispatch from
    // updateTreatmentItemStatus + updateCareProgramStatus on
    // transition to 'active'.
    // Phase 4H-templates-discipline c6 — `case 'followup_due'` arm
    // removed; email rendering migrated to renderFollowupDueEmail in
    // lib/templates/render/followup-due.ts. SMS prefix sourced from
    // brand_short_label slot. Producer dispatch from
    // updateTreatmentItemStatus on transition to 'refill_due'.
    // Phase 4H-templates-discipline c8 — `case 'refill_pending'`
    // arm removed; email rendering migrated to
    // renderRefillInitiatedEmail in lib/templates/render/refill-
    // initiated.ts. Producer dispatch from updateTreatmentItemStatus
    // on transition to 'refill_pending'. Note: the typed Rule's
    // pharmacy_event_kind discriminant value is 'refill_initiated'
    // (not 'refill_pending') — the legacy status name is internal
    // to treatment_items.status and does not leak into the cross-
    // sibling event vocabulary.
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
    // Phase 4H-pre commit 5 — `payment_received` case removed. Migrated
    // to typed Template per Section 1Q.12 DELETE-AFTER-PARITY directive.
    // SMS now renders via `lib/templates/render/payment-received.ts`
    // `renderPaymentReceivedSms` with brand prefix sourced from
    // `brands.slug.toUpperCase()` (typed slot `brand_short_label`)
    // instead of hardcoded "MAIN:" per ADR Section 7.5 multi-tenant rule.
    // Phase 4H-templates-discipline commit 1 — `intake_submitted` case
    // removed. SMS now renders via
    // `lib/templates/render/intake-submitted.ts` `renderIntakeSubmittedSms`
    // with brand prefix sourced from `brands.slug.toUpperCase()` (typed
    // slot `brand_short_label`) instead of hardcoded "MAIN:" per ADR
    // Section 7.5 multi-tenant rule.
    // Phase 4H-templates-discipline c3 — `case 'awaiting_clinical_review'`
    // arm removed; SMS preview migrated to renderAwaitingClinicalReviewSms
    // in lib/templates/render/awaiting-clinical-review.ts.
    // Phase 4H-templates-discipline c2 — `case 'case_approved'` arm
    // removed; SMS preview migrated to renderCaseApprovedSms in
    // lib/templates/render/case-approved.ts.
    case 'case_denied':
      return `MAIN: Update on your visit. ${short}`
    // Phase 4H-templates-discipline c7 — `case 'followup_needed'`
    // arm removed; SMS preview migrated to renderFollowupNeededSms
    // in lib/templates/render/followup-needed.ts.
    // Phase 4H-templates-discipline c8 — `case 'rx_sent'` arm
    // removed; SMS preview migrated to renderRxSentSms in
    // lib/templates/render/rx-sent.ts.
    // Phase 4H-templates-discipline c4 — `case 'shipped'` arm removed;
    // SMS preview migrated to renderOrderShippedSms in
    // lib/templates/render/order-shipped.ts.
    // Phase 4H-templates-discipline c5 — `case 'active_care'` arm
    // removed; SMS preview migrated to renderActiveCareSms in
    // lib/templates/render/active-care.ts.
    // Phase 4H-templates-discipline c6 — `case 'followup_due'` arm
    // removed; SMS preview migrated to renderFollowupDueSms in
    // lib/templates/render/followup-due.ts.
    // Phase 4H-templates-discipline c8 — `case 'refill_pending'`
    // arm removed; SMS preview migrated to renderRefillInitiatedSms
    // in lib/templates/render/refill-initiated.ts.
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
