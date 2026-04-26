import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { assertPatientDashboardAccess } from '@/lib/patient-portal/assertAccess'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export const dynamic = 'force-dynamic'

export default async function PatientAccountSupportPage({
  params,
}: {
  params: Promise<{ patientId: string }>
}) {
  const { patientId } = await params
  if (!UUID_RE.test(patientId)) notFound()
  if (!(await assertPatientDashboardAccess(patientId))) redirect('/dashboard?session=required')

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-semibold text-neutral-900">Support</h1>
      <p className="text-sm text-neutral-600">Help, FAQs, and ways to reach the team.</p>
      <ul className="list-inside list-disc text-sm text-neutral-700">
        <li>
          <Link href={`/dashboard/${patientId}/messages`} className="underline">
            Messages
          </Link>{' '}
          — contact your care team.
        </li>
      </ul>
    </div>
  )
}
