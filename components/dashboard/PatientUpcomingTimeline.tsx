import Link from 'next/link'
import type { PatientUpcomingEvent } from '@/lib/dashboard/buildPatientUpcomingEvents'

function dateChip(e: PatientUpcomingEvent): string {
  if (e.kind === 'portal_lab_upload') return 'Anytime'
  if (e.due_at === null) return 'Now / soon'
  try {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(
      new Date(e.due_at + 'T12:00:00')
    )
  } catch {
    return e.due_at
  }
}

const ROW: Record<PatientUpcomingEvent['urgency'], string> = {
  action: 'border-l-red-400 bg-red-50/40',
  soon: 'border-l-amber-400 bg-amber-50/40',
  info: 'border-l-sky-400 bg-sky-50/30',
}

export function PatientUpcomingTimeline({
  events,
  reorderStripAbove = false,
}: {
  events: PatientUpcomingEvent[]
  reorderStripAbove?: boolean
}) {
  if (events.length === 0) return null

  const head = events.slice(0, 5)
  const tail = events.slice(5)

  const rows = (list: PatientUpcomingEvent[]) =>
    list.map((e) => (
      <li
        key={e.id}
        className={`flex flex-wrap items-start gap-3 rounded-lg border border-neutral-200 px-3 py-2.5 text-sm border-l-4 ${ROW[e.urgency]}`}
      >
        <span className="shrink-0 rounded-md bg-white/80 px-2 py-0.5 text-xs font-medium text-neutral-700 ring-1 ring-neutral-200">
          {dateChip(e)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-medium text-neutral-900">{e.title}</p>
          {e.subtitle ? <p className="mt-0.5 text-xs text-neutral-600">{e.subtitle}</p> : null}
          <Link
            href={e.deepLinkHref}
            className="mt-1 inline-block text-xs font-medium text-neutral-800 underline underline-offset-2 hover:text-neutral-600"
          >
            Open
          </Link>
        </div>
      </li>
    ))

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-neutral-900">Full picture</h3>
      <p className="mt-1 text-xs text-neutral-500">
        {reorderStripAbove
          ? 'Labs, visits, and dated reminders—alongside reorder & renewal status above. Not a scheduling calendar.'
          : 'Labs, visits, check-ins, and dated reminders on your care journey. Not a scheduling calendar.'}
      </p>
      <ul className="mt-4 space-y-2">{rows(head)}</ul>
      {tail.length > 0 ? (
        <details className="mt-3">
          <summary className="cursor-pointer text-sm font-medium text-neutral-800 underline-offset-2 hover:underline">
            View all ({events.length})
          </summary>
          <ul className="mt-3 space-y-2 border-t border-neutral-100 pt-3">{rows(tail)}</ul>
        </details>
      ) : null}
    </div>
  )
}
