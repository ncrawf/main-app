import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { getCachedPatientAccountDashboardModel } from '@/lib/dashboard/cachedPatientAccountDashboardModel'
import { getProgramCategoryLabel } from '@/lib/dashboard/programCardPresentation'
import { assertPatientDashboardAccess } from '@/lib/patient-portal/assertAccess'
import { listMessageThreadsForPatient } from '@/lib/messages/listMessageThreadsForPatient'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export const dynamic = 'force-dynamic'

const THREAD_DESCRIPTION = 'Chat with your care team about your treatment, medications, and labs'

export default async function PatientDashboardMessagesPage({
  params,
}: {
  params: Promise<{ patientId: string }>
}) {
  const { patientId } = await params
  if (!UUID_RE.test(patientId)) notFound()
  if (!(await assertPatientDashboardAccess(patientId))) redirect('/dashboard?session=required')

  // Phase 4H-communications c2: list page now drives from `message_threads`
  // SoT (per communications_topology.md §11 / preflight §4.9), not from
  // careOverview.programs. The migration backfilled one thread per existing
  // care_program so the 1:1 mapping is preserved today; future non-program-
  // shaped threads (ops/support, post-procedure) will land here automatically
  // once the constraint is relaxed (future commit).
  const threadEntries = await listMessageThreadsForPatient({ patientId })

  // Join program metadata from the cached dashboard model so the display
  // labels stay consistent with the rest of the dashboard.
  const m = await getCachedPatientAccountDashboardModel(patientId)
  const programById = new Map(m.careOverview.programs.map((p) => [p.id, p]))

  // Filter out stopped programs (matches prior UX behavior).
  const renderable = threadEntries
    .map((entry) => ({ entry, program: programById.get(entry.care_program_id) }))
    .filter(({ program }) => program && (program.status ?? '').toLowerCase() !== 'stopped')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-neutral-900">Messages</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Direct connect to professionals with questions about your treatment.
        </p>
      </div>

      {renderable.length === 0 ? (
        <section className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50/80 p-6 text-sm text-neutral-600">
          <p className="font-medium text-neutral-900">No care conversations yet</p>
          <p className="mt-1">
            A dedicated message thread opens for each active subscription. Once your care starts, your thread with the care
            team will appear here.
          </p>
        </section>
      ) : (
        <ul className="space-y-3">
          {renderable.map(({ entry, program }) => {
            if (!program) return null
            const title = getProgramCategoryLabel(program)
            const href = `/dashboard/${patientId}/messages/${entry.thread_id}`
            return (
              <li key={entry.thread_id}>
                <Link
                  href={href}
                  className="group flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:border-neutral-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/60"
                >
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white"
                  >
                    {title
                      .split(/\s+/)
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join('')
                      .toUpperCase() || '•'}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="truncate text-base font-semibold text-neutral-900">{title}</p>
                      <div className="flex shrink-0 items-center gap-2">
                        {entry.unread_count > 0 ? (
                          <span className="rounded-full bg-neutral-900 px-2 py-0.5 text-[11px] font-semibold text-white">
                            {entry.unread_count} unread
                          </span>
                        ) : null}
                        {program.needs_attention_now ? (
                          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-medium text-amber-800">
                            New update
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <p className="mt-1 truncate text-sm text-neutral-600">{THREAD_DESCRIPTION}</p>
                  </div>

                  <span
                    aria-hidden
                    className="mt-1 self-center text-neutral-400 transition group-hover:text-neutral-900"
                  >
                    ›
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
