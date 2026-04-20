import Link from 'next/link'
import type { PatientCareProgramCard } from '@/lib/dashboard/getPatientCareOverview'
import { formatTenureLine, humanizeToken } from '@/lib/dashboard/formatCarePatientView'

type Props = {
  patientId: string
  programs: PatientCareProgramCard[]
  careTablesAvailable: boolean
}

export function PatientCareProgramCards({ patientId, programs, careTablesAvailable }: Props) {
  if (!careTablesAvailable) {
    return (
      <section className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50/80 p-6">
        <h3 className="text-sm font-semibold text-neutral-900">Your programs</h3>
        <p className="mt-2 text-sm text-neutral-600">
          Program details will load here once your care records are fully synced. Your status above still reflects where
          you are today.
        </p>
      </section>
    )
  }

  if (programs.length === 0) {
    return (
      <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-neutral-900">Your programs</h3>
        <p className="mt-2 text-sm text-neutral-600">
          No active program rows yet. After intake and clinician setup, your weight-loss or other tracks will appear
          here with timelines and dosing.
        </p>
      </section>
    )
  }

  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-neutral-900">Your programs</h3>
        <p className="mt-1 text-sm text-neutral-600">
          Each program groups the treatments your team manages for you. Open one to see medication, dose, route, and
          refill timing when documented.
        </p>
      </div>
      <ul className="space-y-3">
        {programs.map((p) => {
          const title = p.title?.trim() || humanizeToken(p.program_type)
          const tenureIso = p.started_at ?? p.created_at
          const tenure = formatTenureLine(tenureIso, 'On this program since')
          return (
            <li key={p.id}>
              <Link
                href={`/dashboard/${patientId}/programs/${p.id}`}
                className="group block rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-neutral-400 hover:shadow"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="text-base font-semibold text-neutral-900">{title}</p>
                    <p className="mt-0.5 text-xs text-neutral-500">
                      {humanizeToken(p.program_type)} · {humanizeToken(p.status)}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-neutral-600 underline-offset-2 group-hover:underline">
                    View treatments →
                  </span>
                </div>
                {tenure ? <p className="mt-3 text-sm text-neutral-700">{tenure}</p> : null}
                <p className="mt-2 text-sm text-neutral-600">{p.subtitle}</p>
                {p.tracking_hint ? (
                  <p className="mt-2 rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-950">{p.tracking_hint}</p>
                ) : null}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
