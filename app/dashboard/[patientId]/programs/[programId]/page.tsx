import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import {
  formatDosageForPatient,
  formatLatestRefillRequestStatus,
  formatSchedulingHintsFromMetadata,
  formatTenureLine,
  humanizeToken,
} from '@/lib/dashboard/formatCarePatientView'
import { getPatientCareProgramDetail } from '@/lib/dashboard/getPatientCareOverview'
import { assertPatientDashboardAccess } from '@/lib/patient-portal/assertAccess'

export const dynamic = 'force-dynamic'

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

type Props = {
  params: Promise<{ patientId: string; programId: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { patientId, programId } = await params
  if (!UUID_RE.test(patientId) || !UUID_RE.test(programId)) {
    return { title: 'Program | MAIN', robots: { index: false, follow: false } }
  }
  if (!(await assertPatientDashboardAccess(patientId))) {
    return { title: 'Program | MAIN', robots: { index: false, follow: false } }
  }
  const detail = await getPatientCareProgramDetail(patientId, programId)
  const title =
    detail.ok && detail.program.title?.trim()
      ? detail.program.title.trim()
      : detail.ok
        ? humanizeToken(detail.program.program_type)
        : 'Program'
  return {
    title: `${title} | MAIN`,
    description: 'Treatments and refill status for this program.',
    robots: { index: false, follow: false },
  }
}

export default async function PatientProgramDetailPage({ params }: Props) {
  const { patientId, programId } = await params

  if (!UUID_RE.test(patientId) || !UUID_RE.test(programId)) {
    notFound()
  }

  if (!(await assertPatientDashboardAccess(patientId))) {
    redirect('/dashboard?session=required')
  }

  const detail = await getPatientCareProgramDetail(patientId, programId)
  if (!detail.ok) {
    notFound()
  }

  const { program, treatments } = detail
  const programTitle = program.title?.trim() || humanizeToken(program.program_type)
  const programTenure = formatTenureLine(program.started_at ?? program.created_at, 'Program started')

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">MAIN</p>
            <h1 className="text-xl font-semibold tracking-tight">{programTitle}</h1>
            <p className="mt-1 text-sm text-neutral-600">
              {humanizeToken(program.program_type)} · {humanizeToken(program.status)}
            </p>
          </div>
          <Link
            href={`/dashboard/${patientId}`}
            className="text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
          >
            ← Back to dashboard
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-8 px-6 py-10">
        {programTenure ? (
          <p className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800">
            {programTenure}
          </p>
        ) : null}

        {treatments.length === 0 ? (
          <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-neutral-900">Treatments</h2>
            <p className="mt-2 text-sm text-neutral-600">
              No treatment rows are linked to this program yet. Your clinician will attach medications and plans here
              when they are ready.
            </p>
          </section>
        ) : (
          <section className="space-y-6">
            <h2 className="text-sm font-semibold text-neutral-900">Treatments & refills</h2>
            <p className="text-sm text-neutral-600">
              Read-only view of what your team has on file. Exact drug, strength, route, and sig appear when your
              prescriber documents them in the chart.
            </p>
            <ul className="space-y-6">
              {treatments.map((t) => {
                const dosage = formatDosageForPatient(t.dosage, t.metadata)
                const tenure = formatTenureLine(t.started_at ?? t.created_at, 'Treatment started')
                const scheduleHints = formatSchedulingHintsFromMetadata(t.metadata)
                const refillLine = formatLatestRefillRequestStatus(t.latest_refill_status)
                return (
                  <li
                    key={t.id}
                    className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-neutral-900">{t.display_name}</h3>
                      <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                        {humanizeToken(t.status)}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-xs text-neutral-500">{t.treatment_key}</p>
                    {tenure ? <p className="mt-3 text-sm text-neutral-700">{tenure}</p> : null}
                    <p className="mt-3 text-sm text-neutral-700">{t.tracking_hint}</p>
                    {scheduleHints.length > 0 ? (
                      <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-neutral-800">
                        {scheduleHints.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    ) : null}
                    {refillLine ? <p className="mt-3 text-sm text-neutral-700">{refillLine}</p> : null}
                    <div className="mt-6 border-t border-neutral-100 pt-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{dosage.headline}</p>
                      <ul className="mt-3 space-y-2 text-sm text-neutral-800">
                        {dosage.lines.map((line) => (
                          <li key={line} className="leading-relaxed">
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              })}
            </ul>
          </section>
        )}
      </div>
    </main>
  )
}
