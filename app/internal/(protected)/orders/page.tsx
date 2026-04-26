import { listStaffOrders } from '@/lib/orders/listOrders'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { OrdersSidebar, type OrdersSidebarTab } from '@/components/internal/orders/OrdersSidebar'
import { StaffOrdersTable } from '@/components/internal/orders/StaffOrdersTable'
import type { StaffOrderRow } from '@/lib/orders/types'

export const dynamic = 'force-dynamic'

const EXCEPTION_TREATMENT_STATUSES = new Set([
  'payment_failed',
  'exception',
  'pending_clinician_review',
])
const EXCEPTION_SUPPLEMENT_STATUSES = new Set(['blocked_missing_shipping'])
const EXCEPTION_LAB_KIT_STATUSES = new Set(['kit_returned'])

function isException(row: StaffOrderRow): boolean {
  if (row.kind === 'treatment') return EXCEPTION_TREATMENT_STATUSES.has(row.statusCode)
  if (row.kind === 'supplement') return EXCEPTION_SUPPLEMENT_STATUSES.has(row.statusCode)
  return EXCEPTION_LAB_KIT_STATUSES.has(row.statusCode)
}

function resolveTab(raw: string | string[] | undefined): OrdersSidebarTab {
  const value = Array.isArray(raw) ? raw[0] : raw
  switch (value) {
    case 'medications':
    case 'supplements':
    case 'lab-kits':
    case 'exceptions':
      return value
    default:
      return 'all'
  }
}

export default async function StaffOrdersPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  const tab = resolveTab(params.tab)
  const supabase = await createSupabaseServerClient()
  const bundle = await listStaffOrders(supabase, { limit: 100 })

  const exceptions = [
    ...bundle.treatments.filter(isException),
    ...bundle.supplements.filter(isException),
    ...bundle.labKits.filter(isException),
  ].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))

  const counts = {
    all: bundle.treatments.length + bundle.supplements.length + bundle.labKits.length,
    treatments: bundle.treatments.length,
    supplements: bundle.supplements.length,
    labKits: bundle.labKits.length,
    exceptions: exceptions.length,
  }

  const { headline, sub } = (() => {
    switch (tab) {
      case 'medications':
        return { headline: 'Medications', sub: 'Rx treatment orders across all patients.' }
      case 'supplements':
        return { headline: 'Supplements', sub: 'Non-Rx supplement fulfillment queue.' }
      case 'lab-kits':
        return { headline: 'Lab kits', sub: 'At-home lab kit shipping only — not lab results.' }
      case 'exceptions':
        return {
          headline: 'Needs attention',
          sub: 'Pending review, payment failed, blocked, or returned.',
        }
      default:
        return { headline: 'All orders', sub: 'Unified view across medications, supplements, and lab kits.' }
    }
  })()

  return (
    <>
      <OrdersSidebar activeTab={tab} counts={counts} />
      <main className="min-w-0 flex-1 px-6 py-6">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-neutral-200 pb-4">
          <div>
            <h1 className="text-xl font-semibold text-neutral-900">{headline}</h1>
            <p className="mt-1 text-sm text-neutral-600">{sub}</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="rounded-full bg-neutral-100 px-2 py-1 font-medium text-neutral-700">
              {counts.all} total
            </span>
            <span className="rounded-full bg-blue-50 px-2 py-1 font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
              {counts.treatments} Rx
            </span>
            <span className="rounded-full bg-neutral-100 px-2 py-1 font-medium text-neutral-700">
              {counts.supplements} supplements
            </span>
            <span className="rounded-full bg-neutral-100 px-2 py-1 font-medium text-neutral-700">
              {counts.labKits} lab kits
            </span>
            {counts.exceptions > 0 ? (
              <span className="rounded-full bg-amber-50 px-2 py-1 font-medium text-amber-800 ring-1 ring-inset ring-amber-200">
                {counts.exceptions} need attention
              </span>
            ) : null}
          </div>
        </div>

        <div className="mt-6 space-y-8">
          {tab === 'all' || tab === 'medications' ? (
            <section>
              <div className="mb-2 flex items-baseline justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
                  Medications (Rx)
                </h2>
                <span className="text-xs text-neutral-500">{counts.treatments} orders</span>
              </div>
              <StaffOrdersTable rows={bundle.treatments} />
            </section>
          ) : null}

          {tab === 'all' || tab === 'supplements' ? (
            <section>
              <div className="mb-2 flex items-baseline justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
                  Supplements
                </h2>
                <span className="text-xs text-neutral-500">{counts.supplements} orders</span>
              </div>
              <StaffOrdersTable
                rows={bundle.supplements}
                showProgramColumn={false}
                showAmountColumn={false}
              />
            </section>
          ) : null}

          {tab === 'all' || tab === 'lab-kits' ? (
            <section>
              <div className="mb-2 flex items-baseline justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
                  Lab kits
                </h2>
                <span className="text-xs text-neutral-500">{counts.labKits} orders</span>
              </div>
              <StaffOrdersTable
                rows={bundle.labKits}
                showProgramColumn={false}
                showAmountColumn={false}
              />
              <p className="mt-2 text-xs text-neutral-500">
                Lab kits tab tracks kit shipping only. Lab requisitions and results live in the
                separate Labs system.
              </p>
            </section>
          ) : null}

          {tab === 'exceptions' ? (
            <section>
              <div className="mb-2 flex items-baseline justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
                  Needs attention
                </h2>
                <span className="text-xs text-neutral-500">{exceptions.length} orders</span>
              </div>
              <StaffOrdersTable rows={exceptions} />
            </section>
          ) : null}
        </div>
      </main>
    </>
  )
}
