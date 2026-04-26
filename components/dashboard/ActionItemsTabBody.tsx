'use client'

import Link from 'next/link'
import { usePatientActionSurfaces } from '@/components/account-shell/PatientAccountActionSurfacesContext'

type Props = {
  patientId: string
}

/**
 * Action Items tab — same derived queue as shell banner; row click opens shared drawer (no immediate navigation).
 */
export function ActionItemsTabBody({ patientId }: Props) {
  const { items, openDrawer } = usePatientActionSurfaces()

  if (items.length === 0) {
    return (
      <section className="rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold text-neutral-900">You&apos;re all caught up</p>
        <p className="mt-2 text-sm text-neutral-600">No tasks need your attention right now.</p>
        <p className="mt-4">
          <Link
            href={`/dashboard/${patientId}/programs`}
            className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
          >
            Programs
          </Link>
        </p>
      </section>
    )
  }

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.id}>
          <button
            type="button"
            onClick={() => openDrawer(item.id)}
            className="w-full rounded-xl border border-neutral-200 bg-white p-5 text-left shadow-sm transition hover:border-neutral-300 hover:shadow"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-neutral-900">{item.title}</p>
                {item.description ? <p className="mt-1 text-sm text-neutral-600">{item.description}</p> : null}
              </div>
              <span className="inline-flex shrink-0 rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm font-semibold text-neutral-900">
                {item.ctaLabel}
              </span>
            </div>
          </button>
        </li>
      ))}
    </ul>
  )
}
