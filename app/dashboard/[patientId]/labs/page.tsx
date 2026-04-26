import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { PatientPortalDocumentUploadPanel } from '@/components/dashboard/PatientPortalDocumentUploadPanel'
import { getCachedPatientAccountDashboardModel } from '@/lib/dashboard/cachedPatientAccountDashboardModel'
import { dominantActionLabel } from '@/lib/dashboard/patientAccountDominantPresentation'
import { assertPatientDashboardAccess } from '@/lib/patient-portal/assertAccess'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export const dynamic = 'force-dynamic'

export default async function PatientAccountLabsPage({
  params,
}: {
  params: Promise<{ patientId: string }>
}) {
  const { patientId } = await params
  if (!UUID_RE.test(patientId)) notFound()
  if (!(await assertPatientDashboardAccess(patientId))) redirect('/dashboard?session=required')

  const m = await getCachedPatientAccountDashboardModel(patientId)
  const careOverview = m.careOverview
  const treatmentOptions = careOverview.available
    ? Object.values(careOverview.treatmentsByProgramId)
        .flat()
        .filter((t) => t.status !== 'stopped')
        .map((t) => ({ id: t.id, display_name: t.display_name }))
    : []

  const pendingFromAlerts = m.dashboardAlerts.filter((a) => a.kind === 'lab')
  const labIdsWithAlert = new Set(
    pendingFromAlerts.filter((a) => a.key.startsWith('lab:')).map((a) => a.key.slice('lab:'.length))
  )
  const pendingFromEvents = m.upcomingEvents.filter((e) => {
    if (e.kind === 'portal_lab_upload') return true
    if (e.kind !== 'lab_order') return false
    const raw = e.id.startsWith('lab-') ? e.id.slice('lab-'.length) : e.id
    return !labIdsWithAlert.has(raw)
  })

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-lg font-semibold text-neutral-900">Labs</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Upload documents, review requisitions, and see what has been received.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-neutral-900">Upload</h2>
        <p className="text-sm text-neutral-600">
          Optional treatment link helps routing; you can still upload without choosing a program first.
        </p>
        <PatientPortalDocumentUploadPanel patientId={patientId} treatmentOptions={treatmentOptions} />
      </section>

      <section className="space-y-3">
        <div id="lab-requisitions" className="scroll-mt-6">
          <h2 className="text-sm font-semibold text-neutral-900">Pending & requested</h2>
          <p className="mt-1 text-sm text-neutral-600">Requisitions and upload reminders from your dashboard feed.</p>
        </div>
        {pendingFromAlerts.length === 0 && pendingFromEvents.length === 0 ? (
          <p className="rounded-lg border border-neutral-200 bg-white p-4 text-sm text-neutral-600">
            No pending lab requests right now.
          </p>
        ) : (
          <ul className="space-y-3">
            {pendingFromAlerts.map((a) => (
              <li key={a.key}>
                <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-neutral-900">{a.title}</p>
                  <p className="mt-1 text-sm text-neutral-600">{a.body}</p>
                  <div className="mt-3">
                    <Link
                      href={a.href}
                      className="text-sm font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
                    >
                      {dominantActionLabel(a.kind, a.title)}
                    </Link>
                  </div>
                </div>
              </li>
            ))}
            {pendingFromEvents.map((e) => (
              <li key={e.id}>
                <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-neutral-900">{e.title}</p>
                  {e.subtitle ? <p className="mt-1 text-sm text-neutral-600">{e.subtitle}</p> : null}
                  <div className="mt-3">
                    <Link
                      href={e.deepLinkHref}
                      className="text-sm font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
                    >
                      Open
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="space-y-2">
        <h2 className="text-sm font-semibold text-neutral-900">Received & results</h2>
        <p className="text-sm text-neutral-600">
          When clinicians publish lab results to your chart, they will appear in your program timeline and messages.
          There is nothing new to show here yet.
        </p>
        <p className="text-sm">
          <Link
            href={`/dashboard/${patientId}/programs`}
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700"
          >
            View programs
          </Link>
        </p>
      </section>

      <p className="text-center text-xs text-neutral-400">
        The standalone upload route still works:{' '}
        <Link href={`/dashboard/${patientId}/upload`} className="underline">
          /upload
        </Link>
      </p>
    </div>
  )
}
