import { notFound, redirect } from 'next/navigation'
import { ActionItemsTabBody } from '@/components/dashboard/ActionItemsTabBody'
import { getCachedPatientAccountDashboardModel } from '@/lib/dashboard/cachedPatientAccountDashboardModel'
import { assertPatientDashboardAccess } from '@/lib/patient-portal/assertAccess'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export const dynamic = 'force-dynamic'

export default async function PatientAccountActionItemsPage({
  params,
}: {
  params: Promise<{ patientId: string }>
}) {
  const { patientId } = await params
  if (!UUID_RE.test(patientId)) notFound()
  if (!(await assertPatientDashboardAccess(patientId))) redirect('/dashboard?session=required')

  await getCachedPatientAccountDashboardModel(patientId)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-neutral-900">Action items</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Tasks derived from your care state, labs, refills, and account — most urgent first.
        </p>
      </div>

      <ActionItemsTabBody patientId={patientId} />
    </div>
  )
}
