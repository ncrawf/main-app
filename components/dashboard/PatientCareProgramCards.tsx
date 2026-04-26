import Link from 'next/link'
import type { PatientCareProgramCard, PatientCareTreatmentDetail } from '@/lib/dashboard/getPatientCareOverview'
import {
  compactProgramCardStatus,
  getProgramCategoryLabel,
  getProgramPrimaryLabel,
  getProgramRegimenLine,
  getTreatmentCardCta,
  getTreatmentCardStatus,
  getTreatmentLifecycleLine,
  getTreatmentMedicationParts,
  getTreatmentRegimenLine,
  programCardCtaLabel,
  programCardEmphasized,
  treatmentCardEmphasized,
  type CompactCareStatus,
} from '@/lib/dashboard/programCardPresentation'

type Props = {
  patientId: string
  programs: PatientCareProgramCard[]
  careTablesAvailable: boolean
  treatmentsByProgramId?: Record<string, PatientCareTreatmentDetail[]>
  /** Hide this program from the list (e.g. shown as primary above). */
  excludeProgramId?: string | null
  sectionTitle?: string
  sectionDescription?: string
  /** Softer section heading only; per-card chrome follows program state. */
  emphasis?: 'default' | 'subdued'
}

type MedicationCardItem = {
  key: string
  program: PatientCareProgramCard
  treatment: PatientCareTreatmentDetail | null
  href: string
  categoryLabel: string
  /** Medication / treatment name (e.g. "Tadalafil"). */
  primaryLabel: string
  /** Parenthetical formulation shown after the name (e.g. "(transdermal gel)"). */
  formSuffix: string | null
  /** Dose rendered next to the name with lighter weight (e.g. "2.5 mg"). */
  doseLabel: string | null
  regimenLine: string
  lifecycleLine: string | null
  status: CompactCareStatus
  cta: string
  emphasized: boolean
}

function statusDotClass(status: CompactCareStatus): string {
  if (status === 'Action needed') return 'bg-amber-500'
  if (status === 'In review') return 'bg-sky-500'
  if (status === 'Paused') return 'bg-neutral-400'
  if (status === 'Stopped') return 'bg-neutral-300'
  return 'bg-emerald-500'
}

function buildCardItems(
  patientId: string,
  programs: PatientCareProgramCard[],
  treatmentsByProgramId: Record<string, PatientCareTreatmentDetail[]>
): MedicationCardItem[] {
  const items: MedicationCardItem[] = []
  for (const program of programs) {
    const treatments = treatmentsByProgramId[program.id] ?? []
    const href = `/dashboard/${patientId}/programs/${program.id}`
    const categoryLabel = getProgramCategoryLabel(program)

    if (treatments.length === 0) {
      // Fallback: no treatment rows — render one card based on program data.
      items.push({
        key: `program:${program.id}`,
        program,
        treatment: null,
        href,
        categoryLabel,
        primaryLabel: getProgramPrimaryLabel(program, treatments),
        formSuffix: null,
        doseLabel: null,
        regimenLine: getProgramRegimenLine(program, treatments),
        lifecycleLine: null,
        status: compactProgramCardStatus(program, treatments),
        cta: programCardCtaLabel(program, treatments),
        emphasized: programCardEmphasized(program, treatments),
      })
      continue
    }

    // One card per medication (treatment row). Stopped treatments drop to the bottom.
    const sorted = [...treatments].sort((a, b) => {
      const aStopped = (a.status ?? '').toLowerCase() === 'stopped' ? 1 : 0
      const bStopped = (b.status ?? '').toLowerCase() === 'stopped' ? 1 : 0
      if (aStopped !== bStopped) return aStopped - bStopped
      return b.updated_at.localeCompare(a.updated_at)
    })

    for (const t of sorted) {
      const parts = getTreatmentMedicationParts(t)
      items.push({
        key: `treatment:${t.id}`,
        program,
        treatment: t,
        href,
        categoryLabel,
        primaryLabel: parts.name,
        formSuffix: parts.formSuffix,
        doseLabel: parts.dose,
        regimenLine: getTreatmentRegimenLine(t, program),
        lifecycleLine: getTreatmentLifecycleLine(t),
        status: getTreatmentCardStatus(t, program),
        cta: getTreatmentCardCta(t, program),
        emphasized: treatmentCardEmphasized(t, program),
      })
    }
  }
  return items
}

export function PatientCareProgramCards({
  patientId,
  programs,
  careTablesAvailable,
  treatmentsByProgramId = {},
  excludeProgramId = null,
  sectionTitle = 'Your subscriptions',
  sectionDescription = 'Open a subscription for full details and actions.',
  emphasis = 'default',
}: Props) {
  const listPrograms = excludeProgramId ? programs.filter((p) => p.id !== excludeProgramId) : programs

  if (!careTablesAvailable) {
    return (
      <section className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50/80 p-6">
        <h3 className="text-sm font-semibold text-neutral-900">Your subscriptions</h3>
        <p className="mt-2 text-sm text-neutral-600">
          Subscription details will load here once your care records are fully synced. Your status above still reflects where
          you are today.
        </p>
      </section>
    )
  }

  if (programs.length === 0) {
    return (
      <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-neutral-900">Your subscriptions</h3>
        <p className="mt-2 text-sm text-neutral-600">
          No active subscription rows yet. After intake and clinician setup, your weight-loss or other tracks will appear
          here with timelines and dosing.
        </p>
      </section>
    )
  }

  if (listPrograms.length === 0) {
    return null
  }

  const items = buildCardItems(patientId, listPrograms, treatmentsByProgramId)
  if (items.length === 0) return null

  const emphasizedCardClass =
    'group block rounded-xl border-2 border-neutral-900 bg-white p-5 shadow-md transition hover:bg-neutral-50'
  const subduedCardClass =
    'group block rounded-xl border border-neutral-200 bg-neutral-50/90 p-5 shadow-sm transition hover:border-neutral-300 hover:bg-white'

  return (
    <section className="space-y-4">
      {sectionTitle || sectionDescription ? (
        <div>
          {sectionTitle ? (
            <h3 className={`text-sm font-semibold text-neutral-900 ${emphasis === 'subdued' ? 'text-neutral-700' : ''}`}>
              {sectionTitle}
            </h3>
          ) : null}
          {sectionDescription ? (
            <p className={`mt-1 text-sm text-neutral-600 ${emphasis === 'subdued' ? 'text-neutral-500' : ''}`}>
              {sectionDescription}
            </p>
          ) : null}
        </div>
      ) : null}
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.key}>
            <Link href={item.href} className={item.emphasized ? emphasizedCardClass : subduedCardClass}>
              <div className="flex items-stretch justify-between gap-6">
                {/* LEFT: stacked text block */}
                <div className="min-w-0 flex-1 space-y-1">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                    {item.categoryLabel}
                  </p>
                  <p className="truncate text-base text-neutral-900">
                    <span className="font-semibold">{item.primaryLabel}</span>
                    {item.doseLabel ? (
                      <span className="font-normal text-neutral-700"> · {item.doseLabel}</span>
                    ) : null}
                    {item.formSuffix ? (
                      <span className="text-sm font-normal text-neutral-500"> ({item.formSuffix})</span>
                    ) : null}
                  </p>
                  <p className="truncate text-sm text-neutral-600">{item.regimenLine}</p>
                  {item.lifecycleLine ? (
                    <p className="truncate text-xs text-neutral-500">{item.lifecycleLine}</p>
                  ) : null}
                </div>

                {/* RIGHT: status top, CTA bottom — strictly two elements. */}
                <div className="flex shrink-0 flex-col items-end justify-between gap-3">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-neutral-600">
                    <span className={`h-2 w-2 rounded-full ${statusDotClass(item.status)}`} aria-hidden />
                    {item.status}
                  </p>
                  <span className="text-xs font-semibold text-neutral-900 underline-offset-2 group-hover:underline">
                    {item.cta}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
