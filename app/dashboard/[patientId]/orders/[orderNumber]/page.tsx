import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { getPatientOrderDetail } from '@/lib/dashboard/listPatientOrders'
import { patientOrderToneToPillClasses } from '@/lib/dashboard/patientOrderCopy'
import { assertPatientDashboardAccess } from '@/lib/patient-portal/assertAccess'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export const dynamic = 'force-dynamic'

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

function formatDateLong(iso: string | null | undefined): string | null {
  if (!iso) return null
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(iso))
}

type Props = {
  params: Promise<{ patientId: string; orderNumber: string }>
}

export default async function PatientOrderDetailPage({ params }: Props) {
  const { patientId, orderNumber } = await params
  if (!UUID_RE.test(patientId)) notFound()
  if (!(await assertPatientDashboardAccess(patientId))) redirect('/dashboard?session=required')

  const order = await getPatientOrderDetail(patientId, orderNumber)
  if (!order) notFound()

  const total = formatAmount(order.amountCents, order.currency)
  const paid = formatAmount(order.amountPaidCents, order.currency)
  const shipping = order.shipping
  const hasShipping =
    shipping &&
    (shipping.line1 ||
      shipping.city ||
      shipping.state ||
      shipping.postalCode ||
      shipping.name)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 text-sm">
        <Link
          href={`/dashboard/${patientId}/orders`}
          className="text-neutral-500 underline-offset-2 hover:text-neutral-800 hover:underline"
        >
          ← All orders
        </Link>
      </div>

      <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-mono font-medium uppercase tracking-wide text-neutral-400">
              {order.displayId}
            </p>
            <h1 className="mt-0.5 text-xl font-semibold tracking-tight text-neutral-900">
              {order.title}
            </h1>
            {order.subtitle ? (
              <p className="mt-0.5 text-sm text-neutral-500">{order.subtitle}</p>
            ) : null}
          </div>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${patientOrderToneToPillClasses(
              order.status.tone
            )}`}
          >
            {order.status.label}
          </span>
        </div>

        {order.status.description ? (
          <p className="mt-4 text-sm text-neutral-700">{order.status.description}</p>
        ) : null}
      </section>

      <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Payment</h2>
        <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
          <div className="flex items-baseline justify-between gap-3">
            <dt className="text-neutral-500">Order placed</dt>
            <dd className="font-medium text-neutral-900">{formatDateLong(order.createdAt)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-3">
            <dt className="text-neutral-500">Amount</dt>
            <dd className="font-medium text-neutral-900">{total ?? '—'}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-3">
            <dt className="text-neutral-500">Amount paid</dt>
            <dd className="font-medium text-neutral-900">{paid ?? '$0.00'}</dd>
          </div>
          {order.chargeDeferred ? (
            <div className="col-span-full rounded-md bg-neutral-50 px-3 py-2 text-xs text-neutral-600">
              You won’t be charged until a clinician approves your treatment. If the clinician
              denies the case, no charge is ever made.
            </div>
          ) : null}
        </dl>
      </section>

      {order.trackingNumber || order.trackingUrl ? (
        <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Shipment
          </h2>
          <div className="mt-3 space-y-1 text-sm">
            {order.trackingNumber ? (
              <p className="text-neutral-700">
                Tracking number:{' '}
                <span className="font-mono text-neutral-900">{order.trackingNumber}</span>
              </p>
            ) : null}
            {order.trackingUrl ? (
              <p>
                <a
                  href={order.trackingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-neutral-900 underline-offset-2 hover:underline"
                >
                  Track shipment →
                </a>
              </p>
            ) : null}
          </div>
        </section>
      ) : null}

      {hasShipping ? (
        <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Shipping to
          </h2>
          <address className="mt-3 whitespace-pre-line not-italic text-sm text-neutral-800">
            {[
              shipping?.name,
              shipping?.line1,
              shipping?.line2,
              [shipping?.city, shipping?.state].filter(Boolean).join(', '),
              shipping?.postalCode,
            ]
              .filter((v) => v && String(v).trim().length > 0)
              .join('\n')}
          </address>
        </section>
      ) : null}

      {order.kind === 'supplement' && order.items.length > 0 ? (
        <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Items</h2>
          <ul className="mt-3 divide-y divide-neutral-100 text-sm">
            {order.items.map((item, idx) => (
              <li key={idx} className="flex items-center justify-between py-2">
                <span className="text-neutral-800">{item.displayName}</span>
                <span className="text-neutral-500">× {item.quantity}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}
