import Stripe from 'stripe'

let stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (!stripe) {
    const key = process.env.STRIPE_SECRET_KEY
    if (!key) {
      throw new Error('Missing STRIPE_SECRET_KEY')
    }
    stripe = new Stripe(key)
  }
  return stripe
}

/** Base URL for redirects (Checkout success/cancel). */
export function getAppBaseUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, '')
  if (explicit) return explicit
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL.replace(/\/$/, '')}`
  return 'http://localhost:3000'
}
