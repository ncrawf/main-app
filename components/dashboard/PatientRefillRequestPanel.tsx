'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState, useTransition } from 'react'
import { toast } from 'sonner'
import { emptyGenericRefillQuestionnaire } from '@/lib/refill/genericRefillQuestionnaire'
import { emptyGlp1RefillQuestionnaire } from '@/lib/refill/glp1RefillQuestionnaire'
import { resolveRefillCheckInProfile, type RefillCheckInProfile } from '@/lib/refill/refillCheckInProfile'
import type { GenericRefillQuestionnaireV1 } from '@/lib/refill/genericRefillQuestionnaire'
import type { Glp1RefillQuestionnaireV2 } from '@/lib/refill/glp1RefillQuestionnaire'
import { GenericRxRefillCheckInFields, Glp1RefillCheckInFields } from '@/components/dashboard/PatientRefillCheckInForms'
import { PayForVisitButton } from '@/components/dashboard/PayForVisitButton'

export type RefillPanelItem = {
  id: string
  display_name: string
  treatment_key: string
  category: string | null
}

export function PatientRefillRequestPanel({ patientId, items }: { patientId: string; items: RefillPanelItem[] }) {
  const router = useRouter()
  const [treatmentItemId, setTreatmentItemId] = useState(items[0]?.id ?? '')
  const [note, setNote] = useState('')
  const [glp1, setGlp1] = useState<Glp1RefillQuestionnaireV2>(() => emptyGlp1RefillQuestionnaire())
  const [generic, setGeneric] = useState<GenericRefillQuestionnaireV1>(() => emptyGenericRefillQuestionnaire())
  const [lastRefillRequestId, setLastRefillRequestId] = useState<string | null>(null)
  const [lastTreatmentLabel, setLastTreatmentLabel] = useState<string | null>(null)
  const [msg, setMsg] = useState('')
  const [pending, start] = useTransition()
  const checkoutStepRef = useRef<HTMLDivElement | null>(null)

  const selected = useMemo(
    () => items.find((it) => it.id === treatmentItemId) ?? items[0] ?? null,
    [items, treatmentItemId]
  )

  const profile: RefillCheckInProfile = useMemo(() => {
    if (!selected) return 'none'
    return resolveRefillCheckInProfile(selected.treatment_key, selected.display_name, selected.category)
  }, [selected])

  useEffect(() => {
    setGlp1(emptyGlp1RefillQuestionnaire())
    setGeneric(emptyGenericRefillQuestionnaire())
    setNote('')
    setMsg('')
    setLastRefillRequestId(null)
    setLastTreatmentLabel(null)
  }, [treatmentItemId])

  useEffect(() => {
    if (!lastRefillRequestId) return
    checkoutStepRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [lastRefillRequestId])

  if (items.length === 0) return null

  return (
    <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-neutral-900">Continue plan</h3>
      <p className="mt-1 text-sm text-neutral-600">Quick check-in, then checkout. Your clinician reviews right after.</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full border border-neutral-300 bg-neutral-50 px-2.5 py-1 text-neutral-700">1. Quick check-in</span>
        <span className="rounded-full border border-neutral-300 bg-neutral-50 px-2.5 py-1 text-neutral-700">2. Checkout</span>
      </div>
      <div className="mt-4 space-y-4">
        {!lastRefillRequestId ? (
          <>
            {items.length > 1 ? (
              <div>
                <label htmlFor="refill-treatment" className="block text-xs font-medium text-neutral-700">
                  Treatment
                </label>
                <select
                  id="refill-treatment"
                  value={treatmentItemId}
                  onChange={(e) => setTreatmentItemId(e.target.value)}
                  disabled={pending}
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
                >
                  {items.map((it) => (
                    <option key={it.id} value={it.id}>
                      {it.display_name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <p className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-800">
                {selected?.display_name}
              </p>
            )}

            {profile === 'glp1_weight_loss' ? (
              <Glp1RefillCheckInFields value={glp1} onChange={setGlp1} disabled={pending} />
            ) : profile === 'generic_rx' ? (
              <GenericRxRefillCheckInFields value={generic} onChange={setGeneric} disabled={pending} />
            ) : null}

            <div>
              <label htmlFor="refill-note" className="block text-xs font-medium text-neutral-700">
                Optional note
              </label>
              <textarea
                id="refill-note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                disabled={pending}
                rows={3}
                placeholder={
                  profile === 'none'
                    ? 'Anything we should know?'
                    : 'Anything else to share?'
                }
                className="mt-1 w-full resize-y rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
              />
            </div>
            <button
              type="button"
              disabled={pending || !treatmentItemId}
              onClick={() =>
                start(async () => {
                  setMsg('')
                  const questionnaire =
                    profile === 'glp1_weight_loss'
                      ? glp1
                      : profile === 'generic_rx'
                        ? generic
                        : undefined
                  const res = await fetch('/api/patient-portal/refill-request', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      patientId,
                      treatmentItemId,
                      note,
                      questionnaire,
                    }),
                  })
                  const json: { error?: string; ok?: boolean; refillRequestId?: string } = await res.json().catch(() => ({}))
                  if (!res.ok) {
                    const err = json.error || 'Request failed'
                    setMsg(err)
                    toast.error(err)
                    return
                  }
                  setMsg('Great. Continue to checkout.')
                  setNote('')
                  setGlp1(emptyGlp1RefillQuestionnaire())
                  setGeneric(emptyGenericRefillQuestionnaire())
                  setLastRefillRequestId(typeof json.refillRequestId === 'string' ? json.refillRequestId : null)
                  setLastTreatmentLabel(selected?.display_name ?? null)
                  toast.success('Check-in received')
                  router.refresh()
                })
              }
              className="rounded-md bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {pending ? 'Saving…' : 'Continue'}
            </button>
          </>
        ) : null}
        {msg ? <p className="text-sm text-neutral-700">{msg}</p> : null}
        {lastRefillRequestId ? (
          <div ref={checkoutStepRef} className="rounded-md border border-neutral-200 bg-neutral-50 p-3">
            <p className="text-xs font-medium text-neutral-800">
              {lastTreatmentLabel ? `${lastTreatmentLabel}: ` : ''}continuation in progress
            </p>
            <p className="mt-1 text-xs text-neutral-600">
              Next step: checkout. We will then move this into clinician review.
            </p>
            <div className="mt-2">
              <PayForVisitButton patientId={patientId} refillRequestId={lastRefillRequestId} />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
