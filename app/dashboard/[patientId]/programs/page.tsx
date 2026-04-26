import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { PatientCareProgramCards } from '@/components/dashboard/PatientCareProgramCards'
import {
  getLeadProgramForAtAGlance,
  PatientProgramsAtAGlanceCard,
} from '@/components/dashboard/PatientProgramsAtAGlanceCard'
import { getCachedPatientAccountDashboardModel } from '@/lib/dashboard/cachedPatientAccountDashboardModel'
import { assertPatientDashboardAccess } from '@/lib/patient-portal/assertAccess'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export const dynamic = 'force-dynamic'

export default async function PatientAccountProgramsPage({
  params,
}: {
  params: Promise<{ patientId: string }>
}) {
  const { patientId } = await params
  if (!UUID_RE.test(patientId)) notFound()
  if (!(await assertPatientDashboardAccess(patientId))) redirect('/dashboard?session=required')

  const m = await getCachedPatientAccountDashboardModel(patientId)
  const { careOverview, upcomingEvents, actionItemsQueue } = m
  const programs = careOverview.programs

  const urgentLabEvent =
    upcomingEvents.find(
      (e) => (e.kind === 'lab_order' || e.kind === 'portal_lab_upload') && e.urgency === 'action'
    ) ?? null

  const lead = getLeadProgramForAtAGlance(careOverview)
  /** When derived Action Items exist, skip the large lead card so the top task is not duplicated in-body. */
  const showAtAGlance = actionItemsQueue.length === 0

  return (
    <div className="space-y-8">
      <div id="refill-request" className="scroll-mt-6" aria-hidden />
      <div id="treatment-checkin" className="scroll-mt-6" aria-hidden />

      <div>
        <h1 className="text-lg font-semibold text-neutral-900">Subscriptions</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Your treatments and active prescriptions. Anything you need to complete is under Action Items.
        </p>
      </div>

      {showAtAGlance ? (
        <PatientProgramsAtAGlanceCard
          patientId={patientId}
          careOverview={careOverview}
          urgentLabEvent={urgentLabEvent}
        />
      ) : urgentLabEvent ? (
        <p className="text-sm text-neutral-600">
          <Link href={urgentLabEvent.deepLinkHref} className="font-medium text-neutral-900 underline-offset-2 hover:underline">
            Labs
          </Link>
          <span className="text-neutral-600"> · {urgentLabEvent.title}</span>
        </p>
      ) : null}

      <PatientCareProgramCards
        patientId={patientId}
        programs={programs}
        careTablesAvailable={careOverview.available}
        treatmentsByProgramId={careOverview.treatmentsByProgramId}
        excludeProgramId={showAtAGlance ? (lead?.id ?? null) : null}
        sectionTitle=""
        sectionDescription=""
        emphasis="subdued"
      />
    </div>
  )
}
