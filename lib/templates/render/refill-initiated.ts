/**
 * Phase 4H-templates-discipline commit 8 — render module for
 * tmpl.pharmacy_lifecycle.refill_initiated_v1.
 *
 * Second render module for a pharmacy_lifecycle Template. Mirrors
 * the rx-sent render-module structure exactly; the only differences
 * are the wording literals (legacy refill_pending strings) and the
 * SMS prefix ("Refill update.").
 *
 * Per ADR Section 7.5 cutover discipline: typed slot binding from
 * the Template's required_variables.
 *
 * Wording strategy:
 *   - Email body literals byte-identical to legacy `case
 *     'refill_pending'` arms in lib/notifications/patientMessages.ts.
 *   - Brand text (logo + footer + SMS prefix) sources from the
 *     brand_short_label slot.
 *   - SMS body matches legacy "MAIN: Refill update. <url>"; for
 *     brands.slug = 'main' the rendered output is byte-identical.
 */

import { getEmailTheme } from '@/lib/notifications/emailTheme'

export interface RefillInitiatedRenderInputs {
  brand_short_label: string
  dashboard_url: string
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

export function renderRefillInitiatedEmail(
  inputs: RefillInitiatedRenderInputs,
): RenderedEmail {
  const theme = getEmailTheme()
  const dash = inputs.dashboard_url
  const brandLabel = inputs.brand_short_label

  // Verbatim legacy literals from
  // lib/notifications/patientMessages.ts case 'refill_pending'.
  // tier_2 low_context_phi — references "refill" + "care plan" +
  // "dashboard" without naming protocol, dose, condition, or
  // pathway.
  const subject = 'Refill update'
  const previewText = 'There is a refill update for your care plan.'
  const eyebrow = 'Refill update'
  const heading = 'Refill in progress'
  const intro = 'There is an update on your refill.'
  const detail = 'Please review current details in your dashboard.'

  const g = greeting(inputs.patient_first_name)

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

/**
 * Renders the refill_initiated SMS. Brand prefix sources from the
 * typed brand_short_label slot.
 *
 * Legacy: `MAIN: Refill update. ${short}`.
 * New:    `${brand_short_label}: Refill update. ${dashboard_url}`.
 */
export function renderRefillInitiatedSms(
  inputs: RefillInitiatedRenderInputs,
): RenderedSms {
  return {
    body: `${inputs.brand_short_label}: Refill update. ${inputs.dashboard_url}`,
  }
}
