'use client'

import { useMemo, useState } from 'react'

type Tab = 'all' | 'payments' | 'orders' | 'refills'
type DateRange = '30d' | '90d' | 'all'

export type AdminPaymentHistoryItem = {
  id: string
  stripeCheckoutSessionId: string | null
  createdAt: string
  amountLabel: string | null
  checkoutType: string
}

export type AdminOrderHistoryItem = {
  id: string
  stripeCheckoutSessionId: string
  createdAt: string
  status: string
}

export type AdminRefillHistoryItem = {
  id: string
  treatmentName: string
  createdAt: string
  status: string
  supplyDurationDays: number | null
}

function pillClass(active: boolean): string {
  return active
    ? 'rounded-full border border-neutral-900 bg-neutral-900 px-3 py-1 text-xs font-semibold text-white'
    : 'rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-semibold text-neutral-700 hover:border-neutral-500'
}

function statusChipClass(status: string): string {
  if (status.includes('blocked') || status.includes('cancel') || status.includes('denied')) {
    return 'rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-medium text-red-800'
  }
  if (status.includes('queued') || status.includes('pending') || status.includes('review')) {
    return 'rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-medium text-amber-800'
  }
  if (status.includes('shipped') || status.includes('delivered') || status.includes('fulfilled') || status.includes('active')) {
    return 'rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-800'
  }
  return 'rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-700'
}

function humanizeToken(v: string): string {
  return v
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

export function AdminHistoryPanel({
  payments,
  orders,
  refills,
  nowIso,
}: {
  payments: AdminPaymentHistoryItem[]
  orders: AdminOrderHistoryItem[]
  refills: AdminRefillHistoryItem[]
  nowIso: string
}) {
  const [tab, setTab] = useState<Tab>('all')
  const [dateRange, setDateRange] = useState<DateRange>('90d')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const cutoffMs = useMemo(() => {
    if (dateRange === 'all') return null
    const days = dateRange === '30d' ? 30 : 90
    const nowMs = new Date(nowIso).getTime()
    if (!Number.isFinite(nowMs)) return null
    return nowMs - days * 24 * 60 * 60 * 1000
  }, [dateRange, nowIso])

  const inRange = (iso: string) => {
    if (cutoffMs === null) return true
    const ms = new Date(iso).getTime()
    return Number.isFinite(ms) && ms >= cutoffMs
  }

  const fp = payments.filter((x) => inRange(x.createdAt))
  const fo = orders.filter((x) => inRange(x.createdAt))
  const fr = refills.filter((x) => inRange(x.createdAt))

  async function copyId(id: string) {
    try {
      await navigator.clipboard.writeText(id)
      setCopiedId(id)
      setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 1200)
    } catch {
      // ignore
    }
  }

  return (
    <section className="mt-10">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-sm font-semibold text-neutral-900">Commerce & Rx history (admin)</h2>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className={pillClass(tab === 'all')} onClick={() => setTab('all')}>
            All
          </button>
          <button type="button" className={pillClass(tab === 'payments')} onClick={() => setTab('payments')}>
            Payments
          </button>
          <button type="button" className={pillClass(tab === 'orders')} onClick={() => setTab('orders')}>
            Orders
          </button>
          <button type="button" className={pillClass(tab === 'refills')} onClick={() => setTab('refills')}>
            Refills
          </button>
        </div>
      </div>
      <p className="mt-1 text-xs text-neutral-500">
        Ops-facing summary. Payments, orders, and refills are related but tracked as separate ledgers.
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-neutral-500">Range</span>
        <button type="button" className={pillClass(dateRange === '30d')} onClick={() => setDateRange('30d')}>
          30d
        </button>
        <button type="button" className={pillClass(dateRange === '90d')} onClick={() => setDateRange('90d')}>
          90d
        </button>
        <button type="button" className={pillClass(dateRange === 'all')} onClick={() => setDateRange('all')}>
          All time
        </button>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {(tab === 'all' || tab === 'payments') && (
          <article className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Payments</h3>
            {fp.length === 0 ? (
              <p className="mt-2 text-xs text-neutral-500">No payments recorded.</p>
            ) : (
              <ul className="mt-2 space-y-2">
                {fp.slice(0, 20).map((row) => (
                  <li key={row.id} className="rounded-md border border-neutral-100 bg-neutral-50 px-2 py-2 text-xs">
                    <p className="font-medium text-neutral-900">
                      {row.amountLabel ?? 'Payment recorded'} · {row.checkoutType}
                    </p>
                    <p className="mt-0.5 text-neutral-500">
                      {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                        new Date(row.createdAt)
                      )}
                    </p>
                    {row.stripeCheckoutSessionId ? (
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <code className="rounded bg-neutral-200 px-1 py-0.5 font-mono text-[11px] text-neutral-700">
                          {row.stripeCheckoutSessionId}
                        </code>
                        <button
                          type="button"
                          onClick={() => copyId(row.stripeCheckoutSessionId!)}
                          className="rounded border border-neutral-300 bg-white px-1.5 py-0.5 text-[11px] text-neutral-700 hover:bg-neutral-50"
                        >
                          {copiedId === row.stripeCheckoutSessionId ? 'Copied' : 'Copy'}
                        </button>
                        <a
                          href={`https://dashboard.stripe.com/search?query=${encodeURIComponent(row.stripeCheckoutSessionId)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] text-neutral-700 underline-offset-2 hover:underline"
                        >
                          Open in Stripe
                        </a>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </article>
        )}

        {(tab === 'all' || tab === 'orders') && (
          <article className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Orders</h3>
            {fo.length === 0 ? (
              <p className="mt-2 text-xs text-neutral-500">No orders recorded.</p>
            ) : (
              <ul className="mt-2 space-y-2">
                {fo.slice(0, 20).map((row) => (
                  <li key={row.id} className="rounded-md border border-neutral-100 bg-neutral-50 px-2 py-2 text-xs">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-neutral-900">Supplement order</p>
                      <span className={statusChipClass(row.status)}>{humanizeToken(row.status)}</span>
                    </div>
                    <p className="mt-0.5 text-neutral-500">
                      {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                        new Date(row.createdAt)
                      )}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <code className="rounded bg-neutral-200 px-1 py-0.5 font-mono text-[11px] text-neutral-700">
                        {row.stripeCheckoutSessionId}
                      </code>
                      <button
                        type="button"
                        onClick={() => copyId(row.stripeCheckoutSessionId)}
                        className="rounded border border-neutral-300 bg-white px-1.5 py-0.5 text-[11px] text-neutral-700 hover:bg-neutral-50"
                      >
                        {copiedId === row.stripeCheckoutSessionId ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </article>
        )}

        {(tab === 'all' || tab === 'refills') && (
          <article className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Rx refills</h3>
            {fr.length === 0 ? (
              <p className="mt-2 text-xs text-neutral-500">No refill history yet.</p>
            ) : (
              <ul className="mt-2 space-y-2">
                {fr.slice(0, 20).map((row) => (
                  <li key={row.id} className="rounded-md border border-neutral-100 bg-neutral-50 px-2 py-2 text-xs">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-neutral-900">{row.treatmentName}</p>
                      <span className={statusChipClass(row.status)}>{humanizeToken(row.status)}</span>
                    </div>
                    <p className="mt-0.5 text-neutral-500">
                      {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                        new Date(row.createdAt)
                      )}
                    </p>
                    <p className="mt-0.5 text-neutral-500">
                      Supply: {typeof row.supplyDurationDays === 'number' ? `${row.supplyDurationDays} days` : 'Not specified'}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </article>
        )}
      </div>
    </section>
  )
}

