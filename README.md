This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Patient dashboard access (`/dashboard/[patientId]`)

Patient pages are **not** public UUID links anymore. Access uses:

1. A short-lived **bootstrap JWT** in a URL (e.g. from intake, Stripe return, transactional email, or staff-generated link).
2. `GET /api/patient-portal/session?token=…&next=…` sets an **httpOnly** `patient_portal` cookie (session JWT) and redirects to the dashboard.

Environment:

- **`PATIENT_PORTAL_SECRET`** — required in **production** (use 32+ random characters). In development, omitting it falls back to an insecure dev key with a console warning.
- Optional: `PATIENT_PORTAL_BOOTSTRAP_TTL` (default `24h`), `PATIENT_PORTAL_SESSION_TTL` (default `30d`), `PATIENT_PORTAL_SESSION_MAX_AGE_SEC` (cookie `max-age`, default matches ~30d).

**Staff** signed in with Supabase (`staff_profiles`) can still open `/dashboard/{id}` without the patient cookie (support preview). Patients should use signed links or the intake / payment return flow.

Refills: patients with a valid portal cookie can `POST /api/patient-portal/refill-request` with `{ patientId, treatmentItemId, note? }` (treatment must be `refill_due`). The handler checks **`assertPatientPortalSessionOnly(patientId)`** (staff preview alone is not enough) and writes via the **service role** because `refill_requests` RLS remains staff-only.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
