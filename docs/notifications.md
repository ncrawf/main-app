# Patient notifications (Resend + Twilio)

## Where do emails “live”? Does Resend have an app?

- **Resend** is a hosted service: you sign up at [resend.com](https://resend.com), get an API key, verify your **sending domain** (DNS), and use their **dashboard** for logs, domains, and API keys. There is no separate “email designer” app required for V1.
- **Email content (subject + HTML/text)** is **designed in this repo**, in code:
  - `lib/notifications/patientMessages.ts` — copy for each alert type.
  - Optional later: [React Email](https://react.email) components + Resend’s ability to send JSX/HTML templates; still stored in git, not only in Resend’s UI.
- **Sending** happens from your **Vercel server** when `onPatientWorkflowEvent` runs (`lib/workflows/onPatientWorkflowEvent.ts`), which calls the Resend API (`lib/notifications/emailResend.ts`). Nothing sends from the patient’s browser.

**Exactly what you do:** (1) Resend account + domain + API key, (2) set `RESEND_API_KEY` and `RESEND_FROM_EMAIL` on Vercel, (3) edit `patientMessages.ts` when you want different wording, (4) run the `patient_notification_deliveries` migration on Supabase.

---

Outbound email/SMS is driven by **`onPatientWorkflowEvent`** (`lib/workflows/onPatientWorkflowEvent.ts`), not by individual integrations. After canonical workflow state is saved, callers invoke that hook with `{ fromWorkflowStatus, toWorkflowStatus, source, … }`. Rules live in `lib/workflows/notificationRules.ts`.

## Environment variables

| Variable | Where | Purpose |
|----------|--------|---------|
| `RESEND_API_KEY` | Vercel + `.env.local` | Resend API |
| `RESEND_FROM_EMAIL` | Same | Verified sender, e.g. `MAIN <notifications@yourdomain.com>` |
| `EMAIL_BRAND_NAME` | Optional | Brand label in email shell (default `MAIN`) |
| `EMAIL_ACCENT_HEX` | Optional | CTA color token (default `#111827`) |
| `EMAIL_LOGO_URL` | Optional | Absolute URL to a logo image in email header |
| `TWILIO_ACCOUNT_SID` | Future | Optional until SMS is wired |
| `TWILIO_AUTH_TOKEN` | Future | |
| `TWILIO_FROM_NUMBER` | Future | E.164 from number |

If `RESEND_API_KEY` or `RESEND_FROM_EMAIL` is missing, emails are **skipped** (logged); app behavior otherwise unchanged.

## Which statuses trigger patient email + SMS?

Configured in `lib/workflows/notificationRules.ts` (`PATIENT_NOTIFY_BY_STATUS` + special case `payment_completed`) from canonical care statuses (`care_programs.status`, `treatment_items.status`). Today: **intake submitted**, **payment completed** (Stripe), **under review / pending approval**, **approved**, **denied**, **rx sent**, **shipped**, **active care**, **refill due**, **refill pending**, and follow-up-needed states (**paused/completed/cancelled/stopped**).

## Theme vs content

- **Theme tokens:** `lib/notifications/emailTheme.ts` (brand name, accent color, logo URL, shared colors).
- **Template copy/content:** `lib/notifications/patientMessages.ts` (subject, heading, body lines per workflow template).

Use theme file for visual brand changes. Use patient messages file for wording changes.

## Resend setup (dashboard)

1. Create a [Resend](https://resend.com) account and API key.
2. Add and verify your **sending domain** (DNS records).
3. Set `RESEND_FROM_EMAIL` to an address on that domain.

## Twilio (later)

1. Twilio account, A2P / consent as required for your use case.
2. `npm install twilio` and implement `sendPatientSms` in `lib/notifications/smsTwilio.ts`.
3. Add SMS rows to `resolvePatientNotifications` in `notificationRules.ts` (pattern already matches email).

## Internal template QA

On each internal patient case page there is an **Email template preview** card. It sends the selected template to the signed-in staff user's email (not the patient) so you can quickly QA HTML/copy changes from the app UI.

## Idempotency

Table `patient_notification_deliveries` stores one row per successful send (`dedupe_key` + `channel` unique). Stripe webhook retries reuse the same `stripeCheckoutSessionId` dedupe key so patients are not emailed twice.

## Supabase migration

Apply `supabase/migrations/20260421120000_patient_notification_deliveries.sql` to your project (CLI `db push` or SQL editor).
