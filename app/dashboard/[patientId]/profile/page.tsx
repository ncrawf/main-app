import { notFound, redirect } from 'next/navigation'
import { getPatientDashboard } from '@/lib/dashboard/getPatientDashboard'
import { formatAddressBlock, formatDobUs, patientDisplayName } from '@/lib/dashboard/formatPatientDisplay'
import { maskEmail, maskPhoneE164 } from '@/lib/dashboard/maskContact'
import { assertPatientDashboardAccess } from '@/lib/patient-portal/assertAccess'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export const dynamic = 'force-dynamic'

export default async function PatientDashboardProfilePage({
  params,
}: {
  params: Promise<{ patientId: string }>
}) {
  const { patientId } = await params
  if (!UUID_RE.test(patientId)) notFound()
  if (!(await assertPatientDashboardAccess(patientId))) redirect('/dashboard?session=required')

  const data = await getPatientDashboard(patientId)
  if (!data) notFound()
  const { patient } = data

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h1 className="text-lg font-semibold text-neutral-900">Profile</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Contact details and account information for your care profile.
        </p>
        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-neutral-500">Name</dt>
            <dd className="font-medium text-neutral-900">{patientDisplayName(patient)}</dd>
          </div>
          <div>
            <dt className="text-neutral-500">Email</dt>
            <dd className="font-medium text-neutral-900">{maskEmail(patient.email)}</dd>
          </div>
          <div>
            <dt className="text-neutral-500">Phone</dt>
            <dd className="font-medium text-neutral-900">{maskPhoneE164(patient.phone)}</dd>
          </div>
          <div>
            <dt className="text-neutral-500">Date of birth</dt>
            <dd className="font-medium text-neutral-900">{formatDobUs(patient.dob)}</dd>
          </div>
          <div>
            <dt className="text-neutral-500">Member since</dt>
            <dd className="font-medium text-neutral-900">
              {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(patient.created_at))}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-neutral-500">Mailing address</dt>
            <dd className="whitespace-pre-line font-medium text-neutral-900">{formatAddressBlock(patient)}</dd>
          </div>
        </dl>
      </section>
    </div>
  )
}
