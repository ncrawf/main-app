import Link from 'next/link'
import type { PatientOrderListItem } from '@/lib/dashboard/listPatientOrders'
import { patientOrderToneToPillClasses } from '@/lib/dashboard/patientOrderCopy'

type Props = {
  order: PatientOrderListItem
}

function formatAmount(cents: number | null, currency: string | null): string | null {
  if (cents == null) return null
  const amount = cents / 100
  const code = (currency ?? 'USD').toUpperCase()
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: code,
    }).format(amount)
  } catch {
    return `${amount.toFixed(2)} ${code}`
  }
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(iso))
}

export function PatientOrderCard({ order }: Props) {
  const total = formatAmount(order.amountCents, order.currency)
  const paid = formatAmount(order.amountPaidCents, order.currency)

  return (
    <Link
      href={order.patientHref}
      className="group block rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:border-neutral-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-[11px] font-mono font-medium uppercase tracking-wide text-neutral-400">
            {order.displayId}
          </p>
          <h3 className="mt-0.5 truncate text-base font-semibold text-neutral-900">
            {order.title}
          </h3>
          {order.subtitle ? (
            <p className="mt-0.5 truncate text-xs text-neutral-500">{order.subtitle}</p>
          ) : null}
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${patientOrderToneToPillClasses(
            order.status.tone
          )}`}
        >
          {order.status.label}
        </span>
      </div>

      {order.status.description ? (
        <p className="mt-3 line-clamp-2 text-sm text-neutral-600">
          {order.status.description}
        </p>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-neutral-500">
        <span>Placed {formatDate(order.createdAt)}</span>
        {order.chargeDeferred ? (
          <span className="font-medium text-neutral-700">
            No charge yet · billed after approval
          </span>
        ) : total ? (
          <span className="font-medium text-neutral-700">
            {paid ?? '$0.00'} paid of {total}
          </span>
        ) : null}
      </div>
    </Link>
  )
}
