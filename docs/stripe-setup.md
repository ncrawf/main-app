# Stripe: visit checkout + webhook

This app uses **Stripe Checkout** (hosted payment page) and a **webhook** to project checkout completion into the canonical care workflow and append a **timeline** row (`stripe_checkout_completed`).

## Mixed cart routing (consult + supplements)

`POST /api/stripe/checkout` now supports optional `items[]`:

- `kind`: `consult_fee` | `supplement`
- `priceId`
- `quantity`
- optional `catalogMedicationId`, `displayName`

If `items` is omitted, behavior stays backward compatible (single consult item from `STRIPE_PRICE_ID`).

Webhook behavior on `checkout.session.completed`:

- consult items → clinical pipeline (`patient_states` + care sync + workflow notifications)
- supplement items → `supplement_fulfillment_orders` queue (non-prescriber fulfillment)
- both present → both pipelines run

Manifest metadata is persisted in `stripe_checkout_manifests` for deterministic webhook routing.

Apply migration `supabase/migrations/20260422120000_supplement_checkout_routing.sql` before using mixed cart routing in production.

## 1. Stripe Dashboard

1. Go to [https://dashboard.stripe.com](https://dashboard.stripe.com) (use **Test mode** while developing).
2. **Products** → **Add product** → add a **one-time price** (e.g. your visit fee). Copy the **Price ID** (`price_...`).

## 2. Environment variables

Add to `.env.local` (and Vercel Production / Preview when you deploy):

| Variable | Purpose |
|----------|---------|
| `STRIPE_SECRET_KEY` | Secret key (`sk_test_...` or `sk_live_...`) — **API keys** in Dashboard |
| `STRIPE_PRICE_ID` | The `price_...` ID from step 1 |
| `STRIPE_WEBHOOK_SECRET` | Signing secret for webhook verification (`whsec_...`) — see below |
| `NEXT_PUBLIC_APP_URL` | Public site URL for Checkout redirects, e.g. `http://localhost:3000` or `https://your-domain.com` |
| `SUPABASE_SERVICE_ROLE_KEY` | Already required — webhook uses it to update DB |

Never commit real keys; use Vercel / hosting env UI for production.

## 3. Supabase migration

Run the SQL in:

- `supabase/migrations/20260420170000_stripe_timeline_system_actor.sql`

This allows **null** `actor_user_id` on timeline rows for system events and adds `stripe_webhook_events` for idempotency.

## 4. Webhook URL (local development)

Stripe must reach your machine. Use the **Stripe CLI**:

```bash
# Install: https://stripe.com/docs/stripe-cli
stripe login
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

The CLI prints a **webhook signing secret** — put it in `STRIPE_WEBHOOK_SECRET` (it changes each time you run `listen` unless you use a fixed endpoint in Dashboard for a tunnel URL).

**Production:** In Stripe Dashboard → **Developers** → **Webhooks** → **Add endpoint** → URL `https://YOUR_DOMAIN/api/webhooks/stripe` → select event **`checkout.session.completed`** → copy the endpoint’s **Signing secret** into Vercel as `STRIPE_WEBHOOK_SECRET`.

## 5. Try the flow

1. `npm run dev` and (in another terminal) `stripe listen --forward-to localhost:3000/api/webhooks/stripe`.
2. Open a patient **dashboard** URL: `/dashboard/{patient-uuid}` (from intake redirect or internal list).
3. Click **Pay for visit** → complete Checkout with [Stripe test card](https://docs.stripe.com/testing#cards) `4242 4242 4242 4242`.
4. You should land back on the dashboard with `?paid=1`; after the webhook runs, **`payment_completed`** appears in Supabase and on **Internal → Timeline**.

## 6. Troubleshooting

- **Checkout error “STRIPE_PRICE_ID”** — add `STRIPE_PRICE_ID` and restart dev server.
- **Webhook 400 signature** — `STRIPE_WEBHOOK_SECRET` must match the CLI or Dashboard endpoint secret you’re actually sending events through.
- **Payment succeeds but status unchanged** — check server logs; confirm `metadata.patient_id` on the session (set automatically by `/api/stripe/checkout`). Confirm `SUPABASE_SERVICE_ROLE_KEY` and that migrations ran.
