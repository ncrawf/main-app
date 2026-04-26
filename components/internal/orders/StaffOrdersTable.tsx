import Link from 'next/link'
import type { StaffOrderRow } from '@/lib/orders/types'
import { OrderStatusPill } from './OrderStatusPill'

function fmtAmount(cents: number | null | undefined, currency: string | null): string {
  if (typeof cents !== 'number' || Number.isNaN(cents)) return '—'
  const value = (cents / 100).toFixed(2)
  const code = (currency ?? 'usd').toUpperCase()
  return `${value} ${code}`
}

function fmtDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return iso
  }
}

export function StaffOrdersTable({
  rows,
  showProgramColumn = true,
  showAmountColumn = true,
}: {
  rows: StaffOrderRow[]
  showProgramColumn?: boolean
  showAmountColumn?: boolean
}) {
  if (rows.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-8 text-center text-sm text-neutral-500">
        No orders match this filter yet.
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-neutral-200 text-sm">
          <thead className="bg-neutral-50 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">
            <tr>
              <th className="px-4 py-2.5">Order</th>
              <th className="px-4 py-2.5">Patient</th>
              <th className="px-4 py-2.5">Date</th>
              <th className="px-4 py-2.5">Status</th>
              {showProgramColumn ? <th className="px-4 py-2.5">Program</th> : null}
              <th className="px-4 py-2.5">Item</th>
              {showAmountColumn ? (
                <>
                  <th className="px-4 py-2.5 text-right">Amount</th>
                  <th className="px-4 py-2.5 text-right">Paid</th>
                </>
              ) : null}
              <th className="px-4 py-2.5">Tracking</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 bg-white">
            {rows.map((row) => (
              <tr key={row.identifier} className="hover:bg-neutral-50/60">
                <td className="px-4 py-2.5">
                  <Link
                    href={row.detailHref}
                    className="font-mono text-xs font-semibold text-neutral-900 hover:underline"
                  >
                    {row.displayId}
                  </Link>
                </td>
                <td className="px-4 py-2.5">
                  {row.patientId ? (
                    <Link
                      href={`/internal/patients/${row.patientId}`}
                      className="text-neutral-900 hover:underline"
                    >
                      {row.patientName}
                    </Link>
                  ) : (
                    <span className="text-neutral-500">{row.patientName}</span>
                  )}
                </td>
                <td className="px-4 py-2.5 text-xs text-neutral-600">{fmtDate(row.createdAt)}</td>
                <td className="px-4 py-2.5">
                  <OrderStatusPill tone={row.statusTone}>{row.statusLabel}</OrderStatusPill>
                </td>
                {showProgramColumn ? (
                  <td className="px-4 py-2.5 text-xs text-neutral-600">
                    {row.programLabel ?? '—'}
                  </td>
                ) : null}
                <td className="px-4 py-2.5 text-neutral-800">{row.titleLabel}</td>
                {showAmountColumn ? (
                  <>
                    <td className="px-4 py-2.5 text-right text-xs text-neutral-700">
                      {fmtAmount(row.amountCents, row.currency)}
                    </td>
                    <td className="px-4 py-2.5 text-right text-xs text-neutral-700">
                      {fmtAmount(row.amountPaidCents, row.currency)}
                    </td>
                  </>
                ) : null}
                <td className="px-4 py-2.5 text-xs">
                  {row.trackingNumber ? (
                    row.trackingUrl ? (
                      <a
                        href={row.trackingUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-neutral-900 hover:underline"
                      >
                        {row.trackingNumber}
                      </a>
                    ) : (
                      <span className="font-mono text-neutral-700">{row.trackingNumber}</span>
                    )
                  ) : (
                    <span className="text-neutral-400">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
