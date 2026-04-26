import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getStaffOrderDetail } from '@/lib/orders/getOrderDetail'
import { listStaffOrders } from '@/lib/orders/listOrders'
import { parseOrderIdentifier } from '@/lib/orders/orderIdentifiers'
import {
  labelLabKitFulfillmentStatus,
} from '@/lib/orders/labKitFulfillmentTransitions'
import { labelTreatmentOrderStatus } from '@/lib/orders/treatmentOrderTransitions'
import { labelSupplementFulfillmentStatus } from '@/lib/supplement/fulfillment'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { OrderApprovalPanel } from '@/components/internal/orders/OrderApprovalPanel'
import { OrderFulfillmentPanel } from '@/components/internal/orders/OrderFulfillmentPanel'
import { OrderStatusPill } from '@/components/internal/orders/OrderStatusPill'
import { OrdersSidebar } from '@/components/internal/orders/OrdersSidebar'
import type { StaffOrderDetail } from '@/lib/orders/types'

export const dynamic = 'force-dynamic'

function fmtDate(iso: string | null | undefined): string {
  if (!iso) return '—'
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

function fmtAmount(cents: number | null | undefined, currency: string | null | undefined): string {
  if (typeof cents !== 'number' || Number.isNaN(cents)) return '—'
  const value = (cents / 100).toFixed(2)
  const code = (currency ?? 'usd').toUpperCase()
  return `${value} ${code}`
}

function shippingLines(snapshot: Record<string, unknown>): string[] {
  const get = (k: string) => (typeof snapshot[k] === 'string' ? (snapshot[k] as string) : null)
  const name =
    get('name') ??
    ([get('first_name'), get('last_name')].filter(Boolean).join(' ').trim() || null)
  const l1 = get('address_line1') ?? get('line1')
  const l2 = get('address_line2') ?? get('line2')
  const city = get('city')
  const st = get('state')
  const zip = get('postal_code') ?? get('zip')
  const cityLine = [city, st, zip].filter(Boolean).join(', ').replace(/, $/, '')
  return [name, l1, l2, cityLine].filter((x): x is string => Boolean(x && x.trim().length > 0))
}

function SectionCard({
  title,
  children,
  action,
}: {
  title: string
  children: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <section className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
      <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-2.5">
        <h2 className="text-sm font-semibold text-neutral-900">{title}</h2>
        {action}
      </div>
      <div className="px-4 py-4">{children}</div>
    </section>
  )
}

function FieldRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-dashed border-neutral-200 py-2 first:border-t-0 first:pt-0">
      <div className="text-xs font-medium uppercase tracking-wide text-neutral-500">{label}</div>
      <div className="text-sm text-neutral-900">{children}</div>
    </div>
  )
}

type DetailRenderProps = { detail: StaffOrderDetail }

function TreatmentDetail({ detail }: DetailRenderProps) {
  if (detail.kind !== 'treatment') return null
  const allowedOpts = detail.allowedNextStatuses.map((s) => ({
    value: s,
    label: labelTreatmentOrderStatus(s),
  }))
  const shipping = shippingLines(detail.shippingSnapshot)

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        <SectionCard
          title="Order summary"
          action={<OrderStatusPill tone={detail.statusTone}>{detail.statusLabel}</OrderStatusPill>}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
            <FieldRow label="Order #">
              <span className="font-mono">{detail.orderNumber}</span>
            </FieldRow>
            <FieldRow label="Treatment">{detail.title}</FieldRow>
            <FieldRow label="Program">{detail.programTitle ?? detail.programType ?? '—'}</FieldRow>
            <FieldRow label="Opened">{fmtDate(detail.openedAt ?? detail.createdAt)}</FieldRow>
            <FieldRow label="Closed">{fmtDate(detail.closedAt)}</FieldRow>
            <FieldRow label="Last updated">{fmtDate(detail.updatedAt)}</FieldRow>
          </div>
        </SectionCard>

        <SectionCard title="Payment">
          <div className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
            <FieldRow label="Amount">{fmtAmount(detail.amountCents, detail.currency)}</FieldRow>
            <FieldRow label="Amount paid">
              {fmtAmount(detail.amountPaidCents, detail.currency)}
            </FieldRow>
          </div>
          {detail.amountPaidCents === 0 && detail.status === 'pending_clinician_review' ? (
            <p className="mt-3 rounded-md bg-blue-50 px-3 py-2 text-xs text-blue-800 ring-1 ring-inset ring-blue-200">
              No charge has been created. Payment is attempted only after clinician approval.
            </p>
          ) : null}
        </SectionCard>

        <SectionCard title="Shipping">
          {shipping.length > 0 ? (
            <address className="text-sm not-italic text-neutral-800">
              {shipping.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </address>
          ) : (
            <p className="text-xs text-neutral-500">
              No shipping snapshot yet. Captured at clinician approval.
            </p>
          )}
        </SectionCard>

        {detail.exceptionReason || detail.internalNotes ? (
          <SectionCard title="Operational notes">
            {detail.exceptionReason ? (
              <div className="mb-3 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
                <div className="font-semibold">Exception</div>
                <div>{detail.exceptionReason}</div>
              </div>
            ) : null}
            {detail.internalNotes ? (
              <pre className="whitespace-pre-wrap rounded-md bg-neutral-50 px-3 py-2 font-sans text-sm text-neutral-800">
                {detail.internalNotes}
              </pre>
            ) : null}
          </SectionCard>
        ) : null}
      </div>

      <aside className="space-y-6">
        {detail.status === 'pending_clinician_review' ||
        detail.status === 'payment_failed' ? (
          <SectionCard title="Clinician decision">
            <OrderApprovalPanel
              orderNumber={detail.orderNumber}
              patientHasPaymentMethod={detail.patientHasPaymentMethod}
              paymentFailureMessage={detail.paymentFailureMessage}
              canRetryCharge={detail.status === 'payment_failed'}
            />
          </SectionCard>
        ) : null}

        <SectionCard title="Fulfillment">
          <OrderFulfillmentPanel
            identifier={detail.orderNumber}
            currentStatus={detail.status}
            currentStatusLabel={detail.statusLabel}
            allowedNextStatuses={allowedOpts}
            initialTrackingNumber={detail.trackingNumber}
            initialTrackingUrl={detail.trackingUrl}
            initialInternalNotes={detail.internalNotes}
            initialExceptionReason={detail.exceptionReason}
            kind="treatment"
          />
        </SectionCard>

        <SectionCard title="Patient">
          <Link
            href={`/internal/patients/${detail.patientId}`}
            className="text-sm font-medium text-neutral-900 hover:underline"
          >
            {detail.patientName}
          </Link>
        </SectionCard>
      </aside>
    </div>
  )
}

function SupplementDetail({ detail }: DetailRenderProps) {
  if (detail.kind !== 'supplement') return null
  const allowedOpts = detail.allowedNextStatuses.map((s) => ({
    value: s,
    label: labelSupplementFulfillmentStatus(s),
  }))
  const shipping = shippingLines(detail.shippingSnapshot)
  const tracking =
    (detail.metadata?.tracking as Record<string, unknown> | null | undefined) ?? null

  const currentTrackingNumber =
    typeof tracking?.number === 'string' ? (tracking.number as string) : null
  const currentTrackingUrl =
    typeof tracking?.url === 'string' ? (tracking.url as string) : null
  const currentCarrier = typeof tracking?.carrier === 'string' ? (tracking.carrier as string) : null

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        <SectionCard
          title="Supplement order"
          action={<OrderStatusPill tone={detail.statusTone}>{detail.statusLabel}</OrderStatusPill>}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
            <FieldRow label="Order #">
              <span className="font-mono">{detail.displayId}</span>
            </FieldRow>
            <FieldRow label="Created">{fmtDate(detail.createdAt)}</FieldRow>
            <FieldRow label="Last updated">{fmtDate(detail.updatedAt)}</FieldRow>
            <FieldRow label="Stripe session">
              <span className="font-mono text-xs text-neutral-600">
                {detail.stripeCheckoutSessionId.slice(0, 18)}…
              </span>
            </FieldRow>
          </div>
        </SectionCard>

        <SectionCard title="Items">
          {detail.items.length === 0 ? (
            <p className="text-xs text-neutral-500">No line items captured.</p>
          ) : (
            <ul className="divide-y divide-neutral-100 text-sm">
              {detail.items.map((item, i) => {
                const name =
                  (typeof item.name === 'string' && item.name) ||
                  (typeof item.display_name === 'string' && item.display_name) ||
                  'Item'
                const qty = typeof item.quantity === 'number' ? item.quantity : 1
                return (
                  <li key={i} className="flex items-center justify-between py-2">
                    <span className="text-neutral-800">{name}</span>
                    <span className="text-xs text-neutral-500">× {qty}</span>
                  </li>
                )
              })}
            </ul>
          )}
        </SectionCard>

        <SectionCard title="Shipping">
          {shipping.length > 0 ? (
            <address className="text-sm not-italic text-neutral-800">
              {shipping.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </address>
          ) : (
            <p className="text-xs text-neutral-500">No shipping snapshot captured.</p>
          )}
        </SectionCard>
      </div>

      <aside className="space-y-6">
        <SectionCard title="Fulfillment">
          <OrderFulfillmentPanel
            identifier={`SUP-${detail.id}`}
            currentStatus={detail.status}
            currentStatusLabel={detail.statusLabel}
            allowedNextStatuses={allowedOpts}
            initialTrackingNumber={currentTrackingNumber}
            initialTrackingUrl={currentTrackingUrl}
            initialCarrier={currentCarrier}
            kind="supplement"
          />
        </SectionCard>

        <SectionCard title="Patient">
          <Link
            href={`/internal/patients/${detail.patientId}`}
            className="text-sm font-medium text-neutral-900 hover:underline"
          >
            {detail.patientName}
          </Link>
        </SectionCard>
      </aside>
    </div>
  )
}

function LabKitDetail({ detail }: DetailRenderProps) {
  if (detail.kind !== 'lab_kit') return null
  const allowedOpts = detail.allowedNextStatuses.map((s) => ({
    value: s,
    label: labelLabKitFulfillmentStatus(s),
  }))

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        <SectionCard
          title="Lab kit"
          action={
            <OrderStatusPill tone={detail.kitStatusTone}>{detail.kitStatusLabel}</OrderStatusPill>
          }
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
            <FieldRow label="Order #">
              <span className="font-mono">{detail.displayId}</span>
            </FieldRow>
            <FieldRow label="Order date">{fmtDate(detail.orderDate)}</FieldRow>
            <FieldRow label="Ordering provider">{detail.orderingProviderName}</FieldRow>
            <FieldRow label="Tests">{detail.testsCount}</FieldRow>
            <FieldRow label="Lab status">{detail.labStatus}</FieldRow>
          </div>
          <p className="mt-3 rounded-md bg-neutral-50 px-3 py-2 text-xs text-neutral-600 ring-1 ring-inset ring-neutral-200">
            This Orders view tracks kit shipment only. Lab requisitions and results live in the
            Labs system.
          </p>
        </SectionCard>

        <SectionCard title="Kit shipment">
          <div className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
            <FieldRow label="Carrier">{detail.kitCarrier ?? '—'}</FieldRow>
            <FieldRow label="Tracking #">
              {detail.kitTrackingNumber ? (
                <span className="font-mono">{detail.kitTrackingNumber}</span>
              ) : (
                '—'
              )}
            </FieldRow>
            <FieldRow label="Shipped">{fmtDate(detail.kitShippedAt)}</FieldRow>
            <FieldRow label="Delivered">{fmtDate(detail.kitDeliveredAt)}</FieldRow>
          </div>
        </SectionCard>
      </div>

      <aside className="space-y-6">
        <SectionCard title="Fulfillment">
          <OrderFulfillmentPanel
            identifier={`LAB-${detail.id}`}
            currentStatus={detail.kitStatus}
            currentStatusLabel={detail.kitStatusLabel}
            allowedNextStatuses={allowedOpts}
            initialTrackingNumber={detail.kitTrackingNumber}
            initialTrackingUrl={detail.kitTrackingUrl}
            initialCarrier={detail.kitCarrier}
            initialKitFulfillmentNotes={detail.kitFulfillmentNotes}
            kind="lab_kit"
          />
        </SectionCard>

        <SectionCard title="Patient">
          <Link
            href={`/internal/patients/${detail.patientId}`}
            className="text-sm font-medium text-neutral-900 hover:underline"
          >
            {detail.patientName}
          </Link>
        </SectionCard>
      </aside>
    </div>
  )
}

export default async function StaffOrderDetailPage({
  params,
}: {
  params: Promise<{ orderNumber: string }>
}) {
  const { orderNumber } = await params
  const parsed = parseOrderIdentifier(orderNumber)
  if (!parsed) notFound()

  const supabase = await createSupabaseServerClient()
  const [detail, bundle] = await Promise.all([
    getStaffOrderDetail(supabase, parsed),
    listStaffOrders(supabase, { limit: 100 }),
  ])
  if (!detail) notFound()

  const counts = {
    all: bundle.treatments.length + bundle.supplements.length + bundle.labKits.length,
    treatments: bundle.treatments.length,
    supplements: bundle.supplements.length,
    labKits: bundle.labKits.length,
    exceptions: 0,
  }

  const headerId =
    detail.kind === 'treatment' ? detail.orderNumber : detail.displayId

  const headerTitle =
    detail.kind === 'treatment'
      ? detail.title
      : detail.kind === 'supplement'
        ? 'Supplement order'
        : 'Lab kit'

  return (
    <>
      <OrdersSidebar
        activeTab={
          detail.kind === 'treatment'
            ? 'medications'
            : detail.kind === 'supplement'
              ? 'supplements'
              : 'lab-kits'
        }
        counts={counts}
      />
      <main className="min-w-0 flex-1 px-6 py-6">
        <div className="mb-4 flex flex-wrap items-baseline gap-2 text-xs text-neutral-500">
          <Link href="/internal/orders" className="hover:text-neutral-900">
            Orders
          </Link>
          <span>/</span>
          <span className="font-mono text-neutral-700">{headerId}</span>
        </div>

        <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-neutral-200 pb-4">
          <div>
            <h1 className="text-xl font-semibold text-neutral-900">{headerTitle}</h1>
            <p className="mt-1 font-mono text-xs text-neutral-500">{headerId}</p>
          </div>
        </div>

        {detail.kind === 'treatment' ? <TreatmentDetail detail={detail} /> : null}
        {detail.kind === 'supplement' ? <SupplementDetail detail={detail} /> : null}
        {detail.kind === 'lab_kit' ? <LabKitDetail detail={detail} /> : null}
      </main>
    </>
  )
}
