import Link from 'next/link'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import {
  loadLabsPendingPatientPublish,
  loadOpenRefillQueue,
  loadOpenSupportRequests,
  loadVisitsPendingPatientPublish,
} from '@/lib/internal/loadOpsQueues'

export const dynamic = 'force-dynamic'

export default async function InternalQueuesPage() {
  const supabase = await createSupabaseServerClient()
  const [refills, support, visits, labs] = await Promise.all([
    loadOpenRefillQueue(supabase),
    loadOpenSupportRequests(supabase),
    loadVisitsPendingPatientPublish(supabase),
    loadLabsPendingPatientPublish(supabase),
  ])

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
        <Link href="/internal" className="text-neutral-600 hover:text-neutral-900 hover:underline">
          Internal
        </Link>
        <span className="mx-2 text-neutral-400">/</span>
        Queues
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">Operational queues</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Cross-patient lists for fulfillment and publishing—same work as the case page, scoped for triage.
      </p>

      <section className="mt-10">
        <h2 className="text-sm font-semibold text-neutral-900">Active continuation reviews</h2>
        <p className="mt-1 text-xs text-neutral-500">
          Paid continue-plan submissions that are now in clinician review.
        </p>
        {refills.length === 0 ? (
          <p className="mt-3 text-sm text-neutral-600">No active continuation reviews.</p>
        ) : (
          <ul className="mt-3 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
            {refills.map((r) => (
              <li key={r.id} className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-sm">
                <span className="font-mono text-xs text-neutral-500">
                  {r.status}
                  {r.continuationPaid ? ' · paid' : ''}
                </span>
                <Link href={`/internal/patients/${r.patientId}`} className="font-medium text-neutral-900 underline">
                  Open case
                </Link>
                <span className="text-xs text-neutral-500">
                  {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                    new Date(r.createdAt)
                  )}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold text-neutral-900">Open support threads</h2>
        <p className="mt-1 text-xs text-neutral-500">Portal message or callback requests still new or acknowledged.</p>
        {support.length === 0 ? (
          <p className="mt-3 text-sm text-neutral-600">No open support rows.</p>
        ) : (
          <ul className="mt-3 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
            {support.map((s) => (
              <li key={s.id} className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-sm">
                <span className="text-neutral-800">
                  {s.requestKind === 'callback' ? 'Callback' : 'Message'} ·{' '}
                  <span className="font-mono text-xs text-neutral-500">{s.status}</span>
                </span>
                <Link href={`/internal/patients/${s.patientId}`} className="font-medium text-neutral-900 underline">
                  Open case
                </Link>
                <span className="text-xs text-neutral-500">
                  {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(
                    new Date(s.updatedAt)
                  )}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold text-neutral-900">Visits not published to portal</h2>
        {visits.length === 0 ? (
          <p className="mt-3 text-sm text-neutral-600">None pending publish.</p>
        ) : (
          <ul className="mt-3 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
            {visits.map((v) => (
              <li key={v.id} className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-sm">
                <span className="capitalize text-neutral-800">{v.visitType.replace(/_/g, ' ')}</span>
                <Link href={`/internal/patients/${v.patientId}`} className="font-medium text-neutral-900 underline">
                  Open case
                </Link>
                <span className="text-xs text-neutral-500">
                  {v.visitAt
                    ? new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(v.visitAt))
                    : '—'}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold text-neutral-900">Lab orders not published to portal</h2>
        {labs.length === 0 ? (
          <p className="mt-3 text-sm text-neutral-600">None pending publish.</p>
        ) : (
          <ul className="mt-3 divide-y divide-neutral-200 rounded-lg border border-neutral-200 bg-white">
            {labs.map((l) => (
              <li key={l.id} className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-sm">
                <span className="text-neutral-800">{l.orderDate || '—'} · {l.status}</span>
                <Link href={`/internal/patients/${l.patientId}`} className="font-medium text-neutral-900 underline">
                  Open case
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
