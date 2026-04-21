import Link from 'next/link'
import type { TreatmentReorderReadinessRow } from '@/lib/dashboard/computeTreatmentReorderReadiness'

function badgeLabel(state: TreatmentReorderReadinessRow['state']): string {
  switch (state) {
    case 'reorder_ready':
      return 'Ready'
    case 'needs_checkin':
      return 'Check-in'
    case 'in_refill_review':
      return 'In progress'
    case 'reorder_window':
      return 'Window'
    default:
      return ''
  }
}

const BADGE: Record<TreatmentReorderReadinessRow['state'], string> = {
  reorder_ready: 'bg-emerald-100 text-emerald-900 ring-emerald-200',
  needs_checkin: 'bg-amber-100 text-amber-900 ring-amber-200',
  in_refill_review: 'bg-sky-100 text-sky-900 ring-sky-200',
  reorder_window: 'bg-neutral-100 text-neutral-800 ring-neutral-200',
  no_action: 'bg-neutral-100 text-neutral-600 ring-neutral-200',
}

export function PatientReorderReadinessStrip({ rows }: { rows: TreatmentReorderReadinessRow[] }) {
  if (rows.length === 0) return null
  return (
    <section
      id="reorder-readiness"
      className="scroll-mt-6 rounded-xl border-2 border-emerald-200/80 bg-gradient-to-b from-emerald-50/50 to-white p-5 shadow-sm"
    >
      <h3 className="text-base font-semibold tracking-tight text-neutral-900">Continue plan</h3>
      <p className="mt-1 text-xs text-neutral-600">
        Primary surface for continuing care on the go: each medication has its own status—same model a mobile reorder
        flow will use.
      </p>
      <ul className="mt-4 space-y-3">
        {rows.map((row) => (
          <li
            key={row.treatmentItemId}
            className="flex flex-wrap items-start gap-3 rounded-lg border border-neutral-100 bg-neutral-50/80 px-3 py-2.5"
          >
            <span
              className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ring-1 ${BADGE[row.state]}`}
            >
              {badgeLabel(row.state)}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-neutral-900">{row.headline}</p>
              <p className="mt-0.5 text-xs text-neutral-600">{row.detail}</p>
              <Link
                href={row.href}
                className="mt-1.5 inline-block text-xs font-medium text-emerald-900 underline underline-offset-2 hover:text-emerald-800"
              >
                {row.state === 'reorder_ready'
                  ? 'Continue plan'
                  : row.state === 'in_refill_review'
                    ? 'View review status'
                  : row.state === 'needs_checkin'
                    ? 'Start check-in'
                    : 'Open program'}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
