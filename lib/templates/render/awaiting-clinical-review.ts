/**
 * Phase 4H-templates-discipline commit 3 — render module for
 * tmpl.clinical_decision.awaiting_clinical_review_v1.
 *
 * Per ADR Section 7.5 cutover discipline + Section 1Q.5 Template
 * object shape: this module renders the typed Template into channel-
 * specific output (email subject + html + text; sms body) using TYPED
 * slot binding from the Template's required_variables. No free-form
 * interpolation strings; no hardcoded brand prefixes.
 *
 * Wording strategy:
 *   - Visual structure mirrors prior render modules (payment-received,
 *     intake-submitted, case-approved) so emails look consistent
 *     across migrations.
 *   - Brand text (logo + footer + SMS prefix) sources from the
 *     brand_short_label slot (brands.slug.toUpperCase()).
 *   - Email body literals (subject / preview / eyebrow / heading /
 *     intro / detail) are byte-identical to legacy because legacy
 *     wording was already tier_1 compliant (no protocol naming, no
 *     dose, no condition, no pathway, no clinical content).
 *   - SMS body matches legacy "MAIN: In clinical review. <url>"
 *     pattern; for brands.slug = 'main' the rendered output is
 *     byte-identical.
 *
 * Per ADR Section 7.5: parity is GOVERNED behavioral equivalence, not
 * byte-for-byte preservation. For this Template the legacy wording
 * happens to be governance-compliant, so byte-level holds organically.
 *
 * Per ADR Section 7.6 (rule execution scope): this render module is
 * imported by lib/rules/runtime/dispatcher.ts. The dispatcher's import
 * allowlist permits lib/templates/render/* because rendering is read-
 * only computation (no DB writes); all writes flow through the
 * dispatcher's call to enqueueOutboundJob.
 */

import { getEmailTheme } from '@/lib/notifications/emailTheme'

export interface AwaitingClinicalReviewRenderInputs {
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
// Helpers (mirror prior render modules)
// =====================================================================

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

export function renderAwaitingClinicalReviewEmail(
  inputs: AwaitingClinicalReviewRenderInputs,
): RenderedEmail {
  const theme = getEmailTheme()
  const dash = inputs.dashboard_url

  // Verbatim legacy literals from
  // lib/notifications/patientMessages.ts case 'awaiting_clinical_review'.
  // tier_1 existence_only — references "visit" + "case" + "clinician"
  // + "decision" without naming protocol, dose, condition, or pathway.
  const subject = 'Your visit is in clinical review'
  const previewText = 'Your case is now in clinical review.'
  const eyebrow = 'Clinical review'
  const heading = 'In clinical review'
  const intro = 'Your visit is now in clinical review.'
  const detail = 'We will send another update as soon as your clinician has a decision.'

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
 * Renders the awaiting_clinical_review SMS. Brand prefix sources from
 * the typed brand_short_label slot, replacing the legacy hardcoded
 * "MAIN:" prefix per ADR Section 7.5 multi-tenant rule.
 *
 * Legacy: `MAIN: In clinical review. ${short}` where short = dashboard URL.
 * New:    `${brand_short_label}: In clinical review. ${dashboard_url}`.
 *
 * For brand_short_label = "MAIN" (the existing brand's slug.toUpperCase()),
 * the rendered output is byte-identical to legacy.
 */
export function renderAwaitingClinicalReviewSms(
  inputs: AwaitingClinicalReviewRenderInputs,
): RenderedSms {
  return {
    body: `${inputs.brand_short_label}: In clinical review. ${inputs.dashboard_url}`,
  }
}
