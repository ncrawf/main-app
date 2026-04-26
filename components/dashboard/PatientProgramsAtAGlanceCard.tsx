import Link from 'next/link'
import type { PatientCareOverview, PatientCareProgramCard } from '@/lib/dashboard/getPatientCareOverview'
import {
  compactProgramCardStatus,
  getProgramCategoryLabel,
  getProgramPrimaryLabel,
  getTreatmentIdentityLabel,
  compactProgramStatus,
  compactTreatmentStatus,
  programCardCtaLabel,
  programCardEmphasized,
} from '@/lib/dashboard/programCardPresentation'
import type { PatientUpcomingEvent } from '@/lib/dashboard/buildPatientUpcomingEvents'

function sortProgramsForDisplay(programs: PatientCareProgramCard[]): PatientCareProgramCard[] {
  return [...programs].sort((a, b) => {
    if (a.needs_attention_now !== b.needs_attention_now) return a.needs_attention_now ? -1 : 1
    const rank = (p: PatientCareProgramCard) => {
      if (p.status === 'stopped') return 4
      if (p.status === 'under_review') return 1
      return 2
    }
    return rank(a) - rank(b)
  })
}

/** Lead program after the same sort used for the at-a-glance card (for de-duplicating the list below). */
export function getLeadProgramForAtAGlance(careOverview: PatientCareOverview): PatientCareProgramCard | null {
  if (!careOverview.available || careOverview.programs.length === 0) return null
  return sortProgramsForDisplay(careOverview.programs)[0] ?? null
}

function statusDotClass(status: ReturnType<typeof compactProgramStatus>): string {
  if (status === 'Action needed') return 'bg-amber-500'
  if (status === 'In review') return 'bg-sky-500'
  if (status === 'Stopped') return 'bg-neutral-300'
  if (status === 'Paused') return 'bg-neutral-400'
  return 'bg-emerald-500'
}

type Props = {
  patientId: string
  careOverview: PatientCareOverview
  /** Urgent lab/upload from existing `upcomingEvents` — shown as a compact supporting line only. */
  urgentLabEvent?: PatientUpcomingEvent | null
}

/**
 * Programs hub summary: category + up to 3 treatment rows + compact status + single CTA.
 * Display-only; uses existing overview fields (no journey / primary selection).
 */
export function PatientProgramsAtAGlanceCard({ patientId, careOverview, urgentLabEvent }: Props) {
  if (!careOverview.available || careOverview.programs.length === 0) return null

  const sorted = sortProgramsForDisplay(careOverview.programs)
  const program = sorted[0]
  if (!program) return null

  const treatments = careOverview.treatmentsByProgramId[program.id] ?? []
  const activeFirst = treatments.filter((t) => (t.status ?? '').toLowerCase() !== 'stopped')
  const rows = (activeFirst.length > 0 ? activeFirst : treatments).slice(0, 3)

  const categoryLabel = getProgramCategoryLabel(program)
  const href = `/dashboard/${patientId}/programs/${program.id}`
  const cta = programCardCtaLabel(program, treatments)
  const emphasized = programCardEmphasized(program, treatments)
  const cardClass = emphasized
    ? 'group block rounded-xl border-2 border-neutral-900 bg-white p-5 shadow-md transition hover:bg-neutral-50'
    : 'group block rounded-xl border border-neutral-200 bg-neutral-50/90 p-5 shadow-sm transition hover:border-neutral-300 hover:bg-white'

  return (
    <section aria-label="Current care" className="space-y-2">
      <Link href={href} className={cardClass}>
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{categoryLabel}</p>

        {rows.length > 0 ? (
          <ul className="mt-3 space-y-2.5">
            {rows.map((t) => {
              const status = compactTreatmentStatus(t, program)
              return (
                <li key={t.id} className="flex items-center justify-between gap-3 text-sm">
                  <span className="min-w-0 font-medium text-neutral-900">{getTreatmentIdentityLabel(t)}</span>
                  <span className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-neutral-600">
                    <span className={`h-2 w-2 rounded-full ${statusDotClass(status)}`} aria-hidden />
                    {status}
                  </span>
                </li>
              )
            })}
          </ul>
        ) : (
          <div className="mt-3 flex items-center justify-between gap-3 text-sm">
            <span className="min-w-0 font-medium text-neutral-900">
              {getProgramPrimaryLabel(program, treatments)}
            </span>
            <span className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-neutral-600">
              <span className={`h-2 w-2 rounded-full ${statusDotClass(compactProgramCardStatus(program, treatments))}`} aria-hidden />
              {compactProgramCardStatus(program, treatments)}
            </span>
          </div>
        )}

        <div className="mt-4">
          <span className="inline-flex text-sm font-semibold text-neutral-900 group-hover:underline">{cta}</span>
        </div>
      </Link>

      {urgentLabEvent ? (
        <p className="px-1 text-xs text-neutral-500">
          <Link href={urgentLabEvent.deepLinkHref} className="font-medium text-neutral-700 underline-offset-2 hover:underline">
            Labs
          </Link>
          <span className="text-neutral-600"> · {urgentLabEvent.title} · Action needed</span>
        </p>
      ) : null}
    </section>
  )
}
