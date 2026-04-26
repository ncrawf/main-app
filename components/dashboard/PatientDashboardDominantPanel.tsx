import Link from 'next/link'
import {
  dominantActionLabel,
  dominantToneClass,
} from '@/lib/dashboard/patientAccountDominantPresentation'
import type { PatientAccountDominantAction } from '@/lib/dashboard/cachedPatientAccountDashboardModel'

type Props = {
  dominant: PatientAccountDominantAction | null
  nextUp: string | null
}

/** Single “what matters now” surface — uses existing dominant / on-track rules from callers. */
export function PatientDashboardDominantPanel({ dominant, nextUp }: Props) {
  if (dominant) {
    return (
      <section className={`rounded-xl border p-5 shadow-sm ${dominantToneClass(dominant.tone)}`}>
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-600">Needs attention now</p>
        <h2 className="mt-1 text-lg font-semibold text-neutral-900">{dominant.title}</h2>
        {dominant.body ? <p className="mt-2 text-sm text-neutral-700">{dominant.body}</p> : null}
        <div className="mt-4">
          <Link
            href={dominant.href}
            className="inline-flex rounded-md bg-neutral-900 px-3 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            {dominantActionLabel(dominant.kind, dominant.title)}
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="rounded-xl border border-sky-200 bg-sky-50/70 p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-sky-800">You’re on track</p>
      <p className="mt-1 text-sm font-semibold text-sky-950">No action is needed right now.</p>
      <p className="mt-1 text-sm text-sky-900">Your latest update is in place and care is moving forward.</p>
      {nextUp ? <p className="mt-2 text-xs text-sky-800">What’s next: {nextUp}</p> : null}
    </section>
  )
}
