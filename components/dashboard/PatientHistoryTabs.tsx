'use client'

import { useMemo, useState } from 'react'
import type { PatientPaymentHistoryItem, PatientOrderHistoryItem } from '@/lib/dashboard/getPatientCommerceHistory'
import type { PatientRefillHistoryItem } from '@/lib/dashboard/getPatientRefillHistory'

type Tab = 'all' | 'payments' | 'orders' | 'refills'
type DateRange = '30d' | '90d' | 'all'

function tabButtonClass(active: boolean): string {
  return active
    ? 'rounded-full border border-neutral-900 bg-neutral-900 px-3 py-1 text-xs font-semibold text-white'
    : 'rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-semibold text-neutral-700 hover:border-neutral-500'
}

export function PatientHistoryTabs({
  payments,
  orders,
  refills,
  nowIso,
}: {
  payments: PatientPaymentHistoryItem[]
  orders: PatientOrderHistoryItem[]
  refills: PatientRefillHistoryItem[]
  nowIso: string
}) {
  const [tab, setTab] = useState<Tab>('all')
  const [dateRange, setDateRange] = useState<DateRange>('90d')

  const cutoffMs = useMemo(() => {
    if (dateRange === 'all') return null
    const days = dateRange === '30d' ? 30 : 90
    const nowMs = new Date(nowIso).getTime()
    if (!Number.isFinite(nowMs)) return null
    return nowMs - days * 24 * 60 * 60 * 1000
  }, [dateRange, nowIso])

  const filteredPayments = useMemo(() => {
    if (cutoffMs === null) return payments
    return payments.filter((row) => {
      const ms = new Date(row.createdAt).getTime()
      return Number.isFinite(ms) && ms >= cutoffMs
    })
  }, [payments, cutoffMs])

  const filteredOrders = useMemo(() => {
    if (cutoffMs === null) return orders
    return orders.filter((row) => {
      const ms = new Date(row.createdAt).getTime()
      return Number.isFinite(ms) && ms >= cutoffMs
    })
  }, [orders, cutoffMs])

  const filteredRefills = useMemo(() => {
    if (cutoffMs === null) return refills
    return refills.filter((row) => {
      const ms = new Date(row.requestedAt).getTime()
      return Number.isFinite(ms) && ms >= cutoffMs
    })
  }, [refills, cutoffMs])

  const hasAny =
    filteredPayments.length > 0 || filteredOrders.length > 0 || filteredRefills.length > 0
  const counts = useMemo(
    () => ({
      payments: filteredPayments.length,
      orders: filteredOrders.length,
      refills: filteredRefills.length,
      all: filteredPayments.length + filteredOrders.length + filteredRefills.length,
    }),
    [filteredPayments.length, filteredOrders.length, filteredRefills.length]
  )

  return (
    <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-neutral-900">History</h3>
        <div className="flex flex-wrap gap-2">
          <button type="button" className={tabButtonClass(tab === 'all')} onClick={() => setTab('all')}>
            All ({counts.all})
          </button>
          <button type="button" className={tabButtonClass(tab === 'payments')} onClick={() => setTab('payments')}>
            Payments ({counts.payments})
          </button>
          <button type="button" className={tabButtonClass(tab === 'orders')} onClick={() => setTab('orders')}>
            Orders ({counts.orders})
          </button>
          <button type="button" className={tabButtonClass(tab === 'refills')} onClick={() => setTab('refills')}>
            Refills ({counts.refills})
          </button>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-neutral-500">Range</span>
        <button
          type="button"
          className={tabButtonClass(dateRange === '30d')}
          onClick={() => setDateRange('30d')}
        >
          30d
        </button>
        <button
          type="button"
          className={tabButtonClass(dateRange === '90d')}
          onClick={() => setDateRange('90d')}
        >
          90d
        </button>
        <button
          type="button"
          className={tabButtonClass(dateRange === 'all')}
          onClick={() => setDateRange('all')}
        >
          All time
        </button>
      </div>

      {!hasAny ? <p className="mt-3 text-sm text-neutral-600">No history yet.</p> : null}

      {(tab === 'all' || tab === 'payments') && (
        <div className="mt-4">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Payment history</h4>
          {filteredPayments.length === 0 ? (
            <p className="mt-2 text-sm text-neutral-600">No completed payments yet.</p>
          ) : (
            <ul className="mt-2 space-y-2 text-sm text-neutral-800">
              {filteredPayments.map((row) => (
                <li key={`${row.stripeCheckoutSessionId}-${row.createdAt}`} className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-medium">
                      {row.amountLabel ?? 'Payment recorded'} ·{' '}
                      {row.checkoutType === 'consult'
                        ? 'Consult'
                        : row.checkoutType === 'supplements'
                          ? 'Supplements'
                          : row.checkoutType === 'mixed'
                            ? 'Consult + supplements'
                            : 'Checkout'}
                    </span>
                    <time className="text-xs text-neutral-500" dateTime={row.createdAt}>
                      {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                        new Date(row.createdAt)
                      )}
                    </time>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {(tab === 'all' || tab === 'orders') && (
        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Order history</h4>
          {filteredOrders.length === 0 ? (
            <p className="mt-2 text-sm text-neutral-600">No supplement orders yet.</p>
          ) : (
            <ul className="mt-2 space-y-2 text-sm text-neutral-800">
              {filteredOrders.map((row) => (
                <li key={`${row.stripeCheckoutSessionId}-${row.createdAt}`} className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-medium">{row.itemSummary}</span>
                    <span className="text-xs text-neutral-600">{row.status.replaceAll('_', ' ')}</span>
                  </div>
                  <time className="mt-1 block text-xs text-neutral-500" dateTime={row.createdAt}>
                    {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                      new Date(row.createdAt)
                    )}
                  </time>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {(tab === 'all' || tab === 'refills') && (
        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Rx refill history</h4>
          <p className="mt-1 text-xs text-neutral-500">Medication name, refill date, and duration of supply.</p>
          {filteredRefills.length === 0 ? (
            <p className="mt-2 text-sm text-neutral-600">No refill requests yet.</p>
          ) : (
            <ul className="mt-2 space-y-2 text-sm text-neutral-800">
              {filteredRefills.map((row) => (
                <li key={row.refillRequestId} className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-medium">{row.treatmentName}</span>
                    <span className="text-xs text-neutral-600">{row.status.replaceAll('_', ' ')}</span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                    <time dateTime={row.requestedAt}>
                      {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                        new Date(row.requestedAt)
                      )}
                    </time>
                    <span>
                      Supply:{' '}
                      {typeof row.supplyDurationDays === 'number' ? `${row.supplyDurationDays} days` : 'Not specified'}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  )
}

