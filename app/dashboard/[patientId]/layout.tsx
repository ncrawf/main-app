import { notFound, redirect } from 'next/navigation'
import { PatientAccountShell } from '@/components/account-shell/PatientAccountShell'
import { getCachedPatientAccountDashboardModel } from '@/lib/dashboard/cachedPatientAccountDashboardModel'
import { assertPatientDashboardAccess } from '@/lib/patient-portal/assertAccess'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export const dynamic = 'force-dynamic'

export default async function PatientAccountLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ patientId: string }>
}) {
  const { patientId } = await params
  if (!UUID_RE.test(patientId)) notFound()
  if (!(await assertPatientDashboardAccess(patientId))) redirect('/dashboard?session=required')

  const model = await getCachedPatientAccountDashboardModel(patientId)

  return (
    <PatientAccountShell patientId={patientId} actionItemsQueue={model.actionItemsQueue}>
      {children}
    </PatientAccountShell>
  )
}
