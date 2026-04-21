'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { toast } from 'sonner'
import type { PatientDashboardAlert } from '@/lib/dashboard/buildPatientDashboardAlerts'

const CARD_TONE: Record<PatientDashboardAlert['tone'], string> = {
  success: 'border-emerald-200 bg-emerald-50/70',
  warning: 'border-amber-200 bg-amber-50/70',
  info: 'border-sky-200 bg-sky-50/60',
  default: 'border-neutral-200 bg-white',
}

function KindPill({ kind }: { kind: PatientDashboardAlert['kind'] }) {
  const label =
    kind === 'reorder'
      ? 'Reorder'
      : kind === 'checkin'
        ? 'Check-in'
        : kind === 'lab'
          ? 'Labs'
          : kind === 'refill_progress'
            ? 'Refill'
            : kind === 'window'
              ? 'Window'
              : kind === 'visit'
                ? 'Visit'
                : 'Update'
  return (
    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-600">
      {label}
    </span>
  )
}

export function PatientDashboardAlertCenter({
  patientId,
  alerts,
  allowDismiss,
}: {
  patientId: string
  alerts: PatientDashboardAlert[]
  allowDismiss: boolean
}) {
  const router = useRouter()
  const [pending, start] = useTransition()

  if (alerts.length === 0) return null

  const dismiss = (alertKey: string) => {
    if (!allowDismiss || pending) return
    start(async () => {
      const res = await fetch('/api/patient-portal/dashboard-alert-dismiss', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patient_id: patientId, alert_key: alertKey }),
      })
      if (res.ok) {
        toast.success('Update dismissed')
        router.refresh()
      } else {
        const err = await res.json().catch(() => ({}))
        toast.error(typeof err.error === 'string' ? err.error : 'Could not dismiss')
      }
    })
  }

  const stack = alerts.slice(0, 3)
  const rest = alerts.slice(3)

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="text-sm font-semibold text-neutral-900">Updates for you</h2>
            <p className="text-xs text-neutral-500">
              Time-sensitive cards first (dismiss with ×). More types—reorders, labs, visits, check-ins—roll up here
              like a delivery app inbox; push notifications can mirror this later on mobile.
            </p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-1">
          {stack.map((a) => (
            <div
              key={a.key}
              className={`relative rounded-xl border-2 p-4 pr-10 shadow-sm ${CARD_TONE[a.tone]}`}
            >
              {allowDismiss ? (
                <button
                  type="button"
                  aria-label="Dismiss update"
                  disabled={pending}
                  onClick={() => dismiss(a.key)}
                  className="absolute right-2 top-2 rounded-md p-1 text-neutral-500 hover:bg-black/5 hover:text-neutral-800 disabled:opacity-50"
                >
                  <span className="text-lg leading-none">×</span>
                </button>
              ) : null}
              <KindPill kind={a.kind} />
              <p className="mt-2 text-sm font-semibold text-neutral-900">{a.title}</p>
              {a.body ? <p className="mt-1 text-xs text-neutral-700">{a.body}</p> : null}
              <div className="mt-3">
                <Link
                  href={a.href}
                  className="text-xs font-semibold text-neutral-900 underline underline-offset-2 hover:text-neutral-700"
                >
                  Open
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {rest.length > 0 ? (
        <section className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">More updates</h3>
          <ul className="mt-3 divide-y divide-neutral-100">
            {rest.map((a) => (
              <li key={a.key} className="flex flex-wrap items-start gap-2 py-3 first:pt-0">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <KindPill kind={a.kind} />
                    <Link href={a.href} className="text-sm font-medium text-neutral-900 hover:underline">
                      {a.title}
                    </Link>
                  </div>
                  {a.body ? <p className="mt-1 text-xs text-neutral-600">{a.body}</p> : null}
                </div>
                {allowDismiss ? (
                  <button
                    type="button"
                    disabled={pending}
                    onClick={() => dismiss(a.key)}
                    className="shrink-0 text-xs font-medium text-neutral-500 hover:text-neutral-900 disabled:opacity-50"
                  >
                    Dismiss
                  </button>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}
