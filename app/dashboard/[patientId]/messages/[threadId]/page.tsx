import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { MessagesThreadView } from '@/components/dashboard/MessagesThreadView'
import { getCachedPatientAccountDashboardModel } from '@/lib/dashboard/cachedPatientAccountDashboardModel'
import { getProgramCategoryLabel } from '@/lib/dashboard/programCardPresentation'
import { assertPatientDashboardAccess } from '@/lib/patient-portal/assertAccess'
import { listMessagesForThread, ThreadAccessError, ThreadNotFoundError } from '@/lib/messages/listMessagesForThread'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export const dynamic = 'force-dynamic'

export default async function PatientMessagesThreadPage({
  params,
}: {
  params: Promise<{ patientId: string; threadId: string }>
}) {
  const { patientId, threadId } = await params
  if (!UUID_RE.test(patientId) || !UUID_RE.test(threadId)) notFound()
  if (!(await assertPatientDashboardAccess(patientId))) redirect('/dashboard?session=required')

  // Server-side initial fetch — the client component hydrates from this prop
  // to avoid a setState-in-effect cascade on mount.
  let initialView
  try {
    initialView = await listMessagesForThread({ patientId, threadId })
  } catch (e) {
    if (e instanceof ThreadAccessError || e instanceof ThreadNotFoundError) {
      notFound()
    }
    throw e
  }

  // Use the cached dashboard model for the program-derived label so the
  // visual category is consistent across the dashboard.
  const m = await getCachedPatientAccountDashboardModel(patientId)
  const program = m.careOverview.programs.find((p) => p.id === initialView.care_program_id)
  const threadTitle = program ? getProgramCategoryLabel(program) : 'Care team'

  return (
    <div className="flex min-h-[60vh] flex-col">
      <Link
        href={`/dashboard/${patientId}/messages`}
        className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600 hover:text-neutral-900"
      >
        ‹ Messages
      </Link>
      <MessagesThreadView
        patientId={patientId}
        threadId={threadId}
        threadTitle={threadTitle}
        initialView={initialView}
      />
    </div>
  )
}
