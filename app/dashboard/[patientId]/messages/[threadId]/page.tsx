import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { MessagesThreadComposer } from '@/components/dashboard/MessagesThreadComposer'
import { getCachedPatientAccountDashboardModel } from '@/lib/dashboard/cachedPatientAccountDashboardModel'
import { getProgramCategoryLabel } from '@/lib/dashboard/programCardPresentation'
import { assertPatientDashboardAccess } from '@/lib/patient-portal/assertAccess'

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

  const m = await getCachedPatientAccountDashboardModel(patientId)
  const program = m.careOverview.programs.find((p) => p.id === threadId)
  if (!program) notFound()

  const threadTitle = getProgramCategoryLabel(program)
  const welcomeBody = `Welcome to messaging. Here you can chat with your care team about questions or concerns related to your ${threadTitle.toLowerCase()} care — medications, labs, refills, or anything that comes up during your treatment journey.\n\nReach out any time as part of your subscription.`

  return (
    <div className="flex min-h-[60vh] flex-col">
      <div>
        <Link
          href={`/dashboard/${patientId}/messages`}
          className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600 hover:text-neutral-900"
        >
          ‹ Messages
        </Link>
        <h1 className="mt-3 text-lg font-semibold text-neutral-900">{threadTitle}</h1>
        <p className="mt-1 text-sm text-neutral-600">Chat with your care team about your treatment, medications, and labs.</p>
      </div>

      <div className="mt-6 flex-1 space-y-4">
        <div className="flex items-start gap-3">
          <span
            aria-hidden
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-[11px] font-semibold text-neutral-700"
          >
            CA
          </span>
          <div className="min-w-0 max-w-prose rounded-2xl rounded-tl-sm bg-neutral-100 px-4 py-3">
            <p className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">Care Assistant</p>
            <p className="mt-1 whitespace-pre-line text-sm text-neutral-800">{welcomeBody}</p>
          </div>
        </div>

        <p className="pt-2 text-center text-xs text-neutral-500">
          Your care team responds here. Replies appear in your chart.
        </p>
      </div>

      <MessagesThreadComposer patientId={patientId} threadId={threadId} threadTitle={threadTitle} />
    </div>
  )
}
