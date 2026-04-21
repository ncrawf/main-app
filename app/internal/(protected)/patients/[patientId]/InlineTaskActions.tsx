'use client'

import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { updateRefillRequestStatus, updateTreatmentItemStatus } from './actions'

export type InlineTaskActionCandidate = {
  action: string
  buttonLabel: string
  targetKind: 'refill' | 'treatment'
  targetId: string | null
  targetLabel: string | null
  nextStatus: string
  blockedReason: string | null
}

export function InlineTaskActions({
  patientId,
  candidates,
}: {
  patientId: string
  candidates: InlineTaskActionCandidate[]
}) {
  const router = useRouter()
  const [pendingAction, setPendingAction] = useState<string | null>(null)
  const [msg, setMsg] = useState<string>('')
  const [pending, start] = useTransition()

  if (candidates.length === 0) return null

  return (
    <div className="mt-2 space-y-1.5">
      <p className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">Inline actions</p>
      <div className="flex flex-wrap gap-2">
        {candidates.map((candidate) => {
          const disabled = pending || !candidate.targetId || !!candidate.blockedReason
          return (
            <button
              key={`${candidate.action}-${candidate.targetId ?? 'none'}`}
              type="button"
              disabled={disabled}
              onClick={() =>
                start(async () => {
                  setMsg('')
                  setPendingAction(candidate.action)
                  if (!candidate.targetId) {
                    setMsg(candidate.blockedReason ?? 'No target available for this action.')
                    setPendingAction(null)
                    return
                  }
                  const res =
                    candidate.targetKind === 'refill'
                      ? await updateRefillRequestStatus(patientId, candidate.targetId, candidate.nextStatus)
                      : await updateTreatmentItemStatus(patientId, candidate.targetId, candidate.nextStatus)
                  if (!res.ok) {
                    setMsg(res.error)
                    setPendingAction(null)
                    return
                  }
                  setMsg(`${candidate.buttonLabel} complete.`)
                  setPendingAction(null)
                  router.refresh()
                })
              }
              className="rounded-md border border-neutral-300 bg-white px-2.5 py-1 text-xs font-medium text-neutral-900 hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50"
              title={candidate.blockedReason ?? undefined}
            >
              {pending && pendingAction === candidate.action ? 'Working…' : candidate.buttonLabel}
            </button>
          )
        })}
      </div>
      {candidates.map((candidate) =>
        candidate.targetId ? (
          <p key={`target-${candidate.action}`} className="text-[11px] text-neutral-500">
            {candidate.buttonLabel} target: {candidate.targetLabel ?? `${candidate.targetKind} ${candidate.targetId.slice(0, 8)}…`}
          </p>
        ) : candidate.blockedReason ? (
          <p key={`blocked-${candidate.action}`} className="text-[11px] text-amber-700">
            {candidate.buttonLabel}: {candidate.blockedReason}
          </p>
        ) : null
      )}
      {msg ? <p className="text-xs text-neutral-700">{msg}</p> : null}
    </div>
  )
}
