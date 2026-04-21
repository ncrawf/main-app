import Link from 'next/link'
import type { PatientUpcomingEvent } from '@/lib/dashboard/buildPatientUpcomingEvents'

const BAR: Record<PatientUpcomingEvent['urgency'], string> = {
  action: 'border-l-red-500',
  soon: 'border-l-amber-500',
  info: 'border-l-sky-500',
}

export function PatientUpcomingBanner({
  events,
  reorderStripAbove = false,
}: {
  events: PatientUpcomingEvent[]
  /** When the reorder strip is shown above, frame this block as supporting context—not the primary CTA. */
  reorderStripAbove?: boolean
}) {
  if (events.length === 0) return null
  const top = events[0]
  const extra = events.length - 1
  return (
    <div className={`rounded-xl border border-neutral-200 bg-white p-5 shadow-sm border-l-4 ${BAR[top.urgency]}`}>
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
        {reorderStripAbove ? 'Also on your radar' : 'Upcoming actions'}
      </p>
      <p className="mt-2 text-base font-semibold text-neutral-900">{top.title}</p>
      {top.subtitle ? <p className="mt-1 text-sm text-neutral-600">{top.subtitle}</p> : null}
      {extra > 0 ? (
        <p className="mt-2 text-xs text-neutral-500">
          {extra} more item{extra === 1 ? '' : 's'} in the timeline below.
        </p>
      ) : null}
      <div className="mt-4">
        <Link
          href={top.deepLinkHref}
          className="text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-700"
        >
          Go to this step
        </Link>
      </div>
    </div>
  )
}
