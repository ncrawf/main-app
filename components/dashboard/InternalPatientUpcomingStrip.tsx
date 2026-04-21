import Link from 'next/link'
import type { PatientUpcomingEvent } from '@/lib/dashboard/buildPatientUpcomingEvents'

function whenLabel(e: PatientUpcomingEvent): string {
  if (e.due_at === null) return 'Now'
  try {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(
      new Date(e.due_at + 'T12:00:00')
    )
  } catch {
    return e.due_at
  }
}

export function InternalPatientUpcomingStrip({
  events,
  portalHref,
}: {
  events: PatientUpcomingEvent[]
  portalHref: string
}) {
  if (events.length === 0) return null
  const preview = events.slice(0, 5)
  return (
    <div className="mt-4 border-t border-neutral-200 pt-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Patient upcoming (portal)</p>
      <ul className="mt-2 space-y-1.5 text-xs text-neutral-700">
        {preview.map((e) => (
          <li key={e.id} className="rounded bg-neutral-50 px-2 py-1">
            <span className="font-medium text-neutral-800">{whenLabel(e)}</span>
            <span className="text-neutral-400"> · </span>
            <span>{e.title}</span>
          </li>
        ))}
      </ul>
      {events.length > 5 ? (
        <p className="mt-1 text-[11px] text-neutral-500">+{events.length - 5} more on patient dashboard.</p>
      ) : null}
      <p className="mt-2">
        <Link href={portalHref} className="text-xs font-medium text-neutral-900 underline">
          Open patient view
        </Link>
      </p>
    </div>
  )
}
