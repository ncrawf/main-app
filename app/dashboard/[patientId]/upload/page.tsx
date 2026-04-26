import { notFound, redirect } from 'next/navigation'
import { PatientPortalDocumentUploadPanel } from '@/components/dashboard/PatientPortalDocumentUploadPanel'
import { getPatientCareOverview } from '@/lib/dashboard/getPatientCareOverview'
import { assertPatientDashboardAccess } from '@/lib/patient-portal/assertAccess'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export const dynamic = 'force-dynamic'

export default async function PatientDashboardUploadPage({
  params,
}: {
  params: Promise<{ patientId: string }>
}) {
  const { patientId } = await params
  if (!UUID_RE.test(patientId)) notFound()
  if (!(await assertPatientDashboardAccess(patientId))) redirect('/dashboard?session=required')

  const careOverview = await getPatientCareOverview(patientId)
  const treatmentOptions = careOverview.available
    ? Object.values(careOverview.treatmentsByProgramId)
        .flat()
        .filter((t) => t.status !== 'stopped')
        .map((t) => ({ id: t.id, display_name: t.display_name }))
    : []

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <h1 className="text-lg font-semibold text-neutral-900">Upload documents</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Upload once. We will route the document to the right care context in the background.
        </p>
      </section>
      <PatientPortalDocumentUploadPanel patientId={patientId} treatmentOptions={treatmentOptions} />
    </div>
  )
}
