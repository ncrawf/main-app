/**
 * Phase 4H-templates-discipline commit 9 — render module for
 * tmpl.clinical_decision.case_denied_v1.
 *
 * FINAL render module of the 4H-templates-discipline series.
 *
 * Per system-map `## Platform operational model` doctrine: render
 * modules are NOT a sibling-domain concern (they're a substrate
 * utility for Templates), so they share the `lib/templates/render/`
 * flat directory.
 *
 * Per ADR Section 7.5 cutover discipline: typed slot binding from
 * the Template's required_variables. No free-form interpolation;
 * no hardcoded brand prefixes.
 *
 * Wording strategy:
 *   - Email subject uses brand_short_label slot interpolation
 *     ('Update on your ${brand_short_label} visit'); legacy was
 *     hardcoded 'Update on your MAIN visit'.
 *   - All other email body literals (preview / eyebrow / heading /
 *     intro / detail) byte-identical to legacy `case 'case_denied'`
 *     in lib/notifications/patientMessages.ts.
 *   - SMS body matches legacy "MAIN: Update on your visit. <url>"
 *     pattern; for brands.slug = 'main' rendered output is byte-
 *     identical.
 */

import { getEmailTheme } from '@/lib/notifications/emailTheme'

export interface CaseDeniedRenderInputs {
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

export function renderCaseDeniedEmail(
  inputs: CaseDeniedRenderInputs,
): RenderedEmail {
  const theme = getEmailTheme()
  const dash = inputs.dashboard_url
  const brandLabel = inputs.brand_short_label

  // Verbatim legacy literals from
  // lib/notifications/patientMessages.ts case 'case_denied', except
  // the subject's brand interpolation (typed slot per ADR §7.5).
  // tier_1 existence_only — references "visit" + "update" +
  // "dashboard" without naming protocol, dose, condition, pathway,
  // OR any denial reason text.
  const subject = `Update on your ${brandLabel} visit`
  const previewText = 'There is an update on your visit request.'
  const eyebrow = 'Clinical decision'
  const heading = 'Your visit has an update'
  const intro = 'There is an update on your visit request.'
  const detail = 'Please review details and next steps in your dashboard.'

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
 * Renders the case_denied SMS. Brand prefix sources from typed
 * brand_short_label slot.
 *
 * Legacy: `MAIN: Update on your visit. ${short}`.
 * New:    `${brand_short_label}: Update on your visit. ${dashboard_url}`.
 */
export function renderCaseDeniedSms(
  inputs: CaseDeniedRenderInputs,
): RenderedSms {
  return {
    body: `${inputs.brand_short_label}: Update on your visit. ${inputs.dashboard_url}`,
  }
}
