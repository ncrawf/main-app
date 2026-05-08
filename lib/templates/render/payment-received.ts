/**
 * Phase 4H-pre commit 5 — render module for tmpl.billing.payment_received_v1.
 *
 * Per ADR Section 7.5 cutover discipline + Section 1Q.5 Template object
 * shape: this module renders the typed Template into channel-specific
 * output (email subject + html + text; sms body) using TYPED slot
 * binding from the Template's required_variables. No free-form
 * interpolation strings; no hardcoded brand prefixes.
 *
 * Wording strategy:
 *   - Visual structure (HTML shell) mirrors the legacy
 *     lib/notifications/patientMessages.ts renderEmailHtml output so
 *     the rendered emails look the same to the patient.
 *   - Brand text (logo + footer) sources from the brand_short_label
 *     slot (brands.slug.toUpperCase() per the cutover wiring),
 *     replacing the legacy `getEmailTheme().brandName` env default.
 *   - The intro line uses the typed payment_amount_cents +
 *     payment_currency slots, formatted to the legacy "199.00 USD"
 *     shape.
 *   - Visual styling tokens (colors, accent, border) continue to come
 *     from getEmailTheme() because they are deployment-level brand
 *     visual identity, not patient data; they are out of scope of the
 *     cutover discipline (which focuses on PHI surface + multi-tenant
 *     brand strings).
 *
 * Per ADR Section 7.6 (rule execution scope): this render module is
 * imported by lib/rules/runtime/dispatcher.ts. The dispatcher's
 * import allowlist permits lib/templates/render/* because rendering
 * is read-only computation (no DB writes); all writes flow through
 * the dispatcher's call to enqueueOutboundJob.
 */

import { getEmailTheme } from '@/lib/notifications/emailTheme'

/**
 * Typed inputs to the render. Mirrors the Template's required_variables
 * (with optional patient_first_name as the only optional slot). All
 * fields are typed and required; the dispatcher resolves them at
 * enqueue time before calling render.
 */
export interface PaymentReceivedRenderInputs {
  /** Charged amount in smallest currency unit (cents for USD/CAD/EUR). */
  payment_amount_cents: number
  /** ISO 4217 3-letter currency code. */
  payment_currency: string
  /** Brand short label (brands.slug.toUpperCase(), e.g. "MAIN"). */
  brand_short_label: string
  /** Patient dashboard deep link. */
  dashboard_url: string
  /** Patient first name for greeting; undefined / empty falls back to "Hi,". */
  patient_first_name?: string | null
}

export interface RenderedEmail {
  subject: string
  html: string
  text: string
}

export interface RenderedSms {
  body: string
}

// =====================================================================
// Helpers
// =====================================================================

/**
 * Format a payment amount to the legacy "199.00 USD" shape.
 * Cents are integer; render with 2 decimals for currencies that have
 * a 2-decimal subdivision (USD, CAD, EUR, GBP, AUD, NZD, etc.).
 * For zero-decimal currencies (JPY, KRW), the cents value IS the
 * major unit; no decimal applied.
 */
function formatPaymentAmount(cents: number, currency: string): string {
  const upperCurrency = currency.toUpperCase()
  const ZERO_DECIMAL_CURRENCIES = new Set(['JPY', 'KRW', 'VND', 'CLP', 'PYG'])
  if (ZERO_DECIMAL_CURRENCIES.has(upperCurrency)) {
    return `${Math.round(cents)} ${upperCurrency}`
  }
  const major = (cents / 100).toFixed(2)
  return `${major} ${upperCurrency}`
}

function escapeHtml(s: string): string {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function greeting(firstName: string | null | undefined): string {
  const n = firstName?.trim()
  return n ? `Hi ${n},` : 'Hi,'
}

// =====================================================================
// Email render
// =====================================================================

/**
 * Render the payment_received email. Returns subject + html + text.
 * The html structure mirrors the legacy renderEmailHtml output for
 * visual continuity; brand text sources from the typed brand_short_label
 * slot rather than the env-default theme.brandName.
 */
export function renderPaymentReceivedEmail(
  inputs: PaymentReceivedRenderInputs,
): RenderedEmail {
  const theme = getEmailTheme()
  const dash = inputs.dashboard_url
  const paymentSummary = formatPaymentAmount(
    inputs.payment_amount_cents,
    inputs.payment_currency,
  )

  // Legacy literal preserved verbatim for tier_1 fields (subject, preview,
  // eyebrow, heading, detail) per ADR Section 7.5 wording-preservation
  // rule. The intro line uses the typed slot to replace v0 free-form
  // paymentSummary; the rendered output is byte-identical to legacy
  // when the slot value matches the legacy paymentSummary string shape.
  const subject = 'We received your payment'
  const previewText = 'Payment confirmed — your visit is moving forward.'
  const eyebrow = 'Payment update'
  const heading = 'Payment confirmed'
  const intro = `Thanks — we received your payment (${paymentSummary}).`
  const detail = 'Your visit is moving forward. You can track next steps in your dashboard.'

  const g = greeting(inputs.patient_first_name)
  const brandLabel = inputs.brand_short_label

  const preheader = `<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(previewText)}</div>`
  const eyebrowHtml = `<p style="margin:0 0 10px 0;color:${escapeHtml(theme.textMuted)};font-size:12px;letter-spacing:.06em;text-transform:uppercase;">${escapeHtml(eyebrow)}</p>`
  const detailHtml = `<p style="margin:0 0 18px 0;color:${escapeHtml(theme.textPrimary)};font-size:16px;line-height:1.6;">${escapeHtml(detail)}</p>`
  const logo = theme.logoUrl
    ? `<img src="${escapeHtml(theme.logoUrl)}" alt="${escapeHtml(brandLabel)}" height="20" style="display:block;margin:0 0 14px 0;height:20px;width:auto;" />`
    : `<p style="margin:0 0 14px 0;color:${escapeHtml(theme.accentHex)};font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">${escapeHtml(brandLabel)}</p>`
  const footer = `${escapeHtml(brandLabel)} care updates are sent based on your current protocol status.`

  const html = `<!doctype html>
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
                ${eyebrowHtml}
                <h1 style="margin:0 0 14px 0;color:${escapeHtml(theme.textPrimary)};font-size:24px;line-height:1.25;">${escapeHtml(heading)}</h1>
                <p style="margin:0 0 18px 0;color:${escapeHtml(theme.textPrimary)};font-size:16px;line-height:1.6;">${escapeHtml(g)}</p>
                <p style="margin:0 0 18px 0;color:${escapeHtml(theme.textPrimary)};font-size:16px;line-height:1.6;">${escapeHtml(intro)}</p>
                ${detailHtml}
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

  const text = `${heading}

${g}

${intro}

${detail}

Open your dashboard: ${dash}

— ${brandLabel}`

  return { subject, html, text }
}

// =====================================================================
// SMS render
// =====================================================================

/**
 * Render the payment_received SMS. Brand prefix sources from the
 * typed brand_short_label slot, replacing the legacy hardcoded "MAIN:"
 * prefix per ADR Section 7.5 multi-tenant rule.
 *
 * Legacy: `MAIN: Payment received. ${short}` where short = dashboard URL.
 * New:    `${brand_short_label}: Payment received. ${dashboard_url}`.
 *
 * For brand_short_label = "MAIN" (the existing brand's slug.toUpperCase()),
 * the rendered output is byte-identical to legacy.
 */
export function renderPaymentReceivedSms(
  inputs: PaymentReceivedRenderInputs,
): RenderedSms {
  return {
    body: `${inputs.brand_short_label}: Payment received. ${inputs.dashboard_url}`,
  }
}
