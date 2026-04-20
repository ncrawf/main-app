'use client'

import { useRouter } from 'next/navigation'
import { useMemo, useState, useTransition } from 'react'
import type { TreatmentCheckinPrompt } from '@/lib/dashboard/getPatientTreatmentCheckinPrompts'

type Scale = '1' | '2' | '3' | '4' | '5'
const SCALE_OPTIONS: Scale[] = ['1', '2', '3', '4', '5']

function isEdPrompt(prompt: TreatmentCheckinPrompt): boolean {
  const v = `${prompt.treatmentKey} ${prompt.displayName}`.toLowerCase()
  return v.includes('cialis') || v.includes('tadalafil') || v.includes('sildenafil') || v.includes('ed')
}

export function PatientTreatmentCheckinPanel({
  patientId,
  prompts,
}: {
  patientId: string
  prompts: TreatmentCheckinPrompt[]
}) {
  const router = useRouter()
  const [selectedId, setSelectedId] = useState(prompts[0]?.treatmentItemId ?? '')
  const selectedPrompt = useMemo(
    () => prompts.find((p) => p.treatmentItemId === selectedId) ?? prompts[0] ?? null,
    [prompts, selectedId]
  )
  const [weightLb, setWeightLb] = useState('')
  const [sleepQuality, setSleepQuality] = useState<Scale>('3')
  const [appetiteControl, setAppetiteControl] = useState<Scale>('3')
  const [energyLevel, setEnergyLevel] = useState<Scale>('3')
  const [edFirmness, setEdFirmness] = useState<Scale>('3')
  const [edDuration, setEdDuration] = useState<Scale>('3')
  const [doseAdequate, setDoseAdequate] = useState<'yes' | 'no' | 'unsure'>('yes')
  const [sideEffects, setSideEffects] = useState('')
  const [progressNotes, setProgressNotes] = useState('')
  const [msg, setMsg] = useState('')
  const [pending, start] = useTransition()

  if (!selectedPrompt) return null
  const edMode = isEdPrompt(selectedPrompt)

  return (
    <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-neutral-900">Weekly treatment check-in</h3>
      <p className="mt-1 text-sm text-neutral-600">
        Quick update so your team can adjust protocol before your next refill.
      </p>

      <div className="mt-4 space-y-3">
        <div>
          <label htmlFor="checkin-treatment" className="block text-xs font-medium text-neutral-700">
            Treatment
          </label>
          <select
            id="checkin-treatment"
            value={selectedPrompt.treatmentItemId}
            onChange={(e) => setSelectedId(e.target.value)}
            disabled={pending}
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
          >
            {prompts.map((prompt) => (
              <option key={prompt.treatmentItemId} value={prompt.treatmentItemId}>
                {prompt.displayName}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-neutral-500">{selectedPrompt.promptDescription}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-xs font-medium text-neutral-700">
            Current weight (lbs)
            <input
              type="number"
              min={70}
              max={700}
              value={weightLb}
              onChange={(e) => setWeightLb(e.target.value)}
              disabled={pending}
              placeholder="Optional"
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
            />
          </label>
          <label className="block text-xs font-medium text-neutral-700">
            Dose feels adequate?
            <select
              value={doseAdequate}
              onChange={(e) => setDoseAdequate(e.target.value as 'yes' | 'no' | 'unsure')}
              disabled={pending}
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="unsure">Not sure</option>
            </select>
          </label>
        </div>

        {!edMode ? (
          <div className="grid gap-3 sm:grid-cols-3">
            <label className="block text-xs font-medium text-neutral-700">
              Sleep quality (1-5)
              <select
                value={sleepQuality}
                onChange={(e) => setSleepQuality(e.target.value as Scale)}
                disabled={pending}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
              >
                {SCALE_OPTIONS.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-xs font-medium text-neutral-700">
              Appetite control (1-5)
              <select
                value={appetiteControl}
                onChange={(e) => setAppetiteControl(e.target.value as Scale)}
                disabled={pending}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
              >
                {SCALE_OPTIONS.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-xs font-medium text-neutral-700">
              Energy level (1-5)
              <select
                value={energyLevel}
                onChange={(e) => setEnergyLevel(e.target.value as Scale)}
                disabled={pending}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
              >
                {SCALE_OPTIONS.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-xs font-medium text-neutral-700">
              Firmness improvement (1-5)
              <select
                value={edFirmness}
                onChange={(e) => setEdFirmness(e.target.value as Scale)}
                disabled={pending}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
              >
                {SCALE_OPTIONS.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-xs font-medium text-neutral-700">
              Duration improvement (1-5)
              <select
                value={edDuration}
                onChange={(e) => setEdDuration(e.target.value as Scale)}
                disabled={pending}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
              >
                {SCALE_OPTIONS.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}

        <label className="block text-xs font-medium text-neutral-700">
          Side effects to report
          <textarea
            value={sideEffects}
            onChange={(e) => setSideEffects(e.target.value)}
            disabled={pending}
            rows={3}
            placeholder="Optional..."
            className="mt-1 w-full resize-y rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
          />
        </label>
        <label className="block text-xs font-medium text-neutral-700">
          Progress notes
          <textarea
            value={progressNotes}
            onChange={(e) => setProgressNotes(e.target.value)}
            disabled={pending}
            rows={3}
            placeholder={edMode ? 'Tell us how treatment is going.' : 'How are you doing overall on this treatment?'}
            className="mt-1 w-full resize-y rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900"
          />
        </label>

        <button
          type="button"
          disabled={pending || !selectedPrompt.treatmentItemId}
          onClick={() =>
            start(async () => {
              setMsg('')
              const res = await fetch('/api/patient-portal/treatment-checkin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  patientId,
                  treatmentItemId: selectedPrompt.treatmentItemId,
                  weightLb: weightLb ? Number(weightLb) : null,
                  sleepQuality: edMode ? null : Number(sleepQuality),
                  appetiteControl: edMode ? null : Number(appetiteControl),
                  energyLevel: edMode ? null : Number(energyLevel),
                  edFirmness: edMode ? Number(edFirmness) : null,
                  edDuration: edMode ? Number(edDuration) : null,
                  doseAdequate,
                  sideEffects,
                  progressNotes,
                }),
              })
              const json: { ok?: boolean; error?: string } = await res.json().catch(() => ({}))
              if (!res.ok || !json.ok) {
                setMsg(json.error || 'Could not submit check-in.')
                return
              }
              setMsg('Check-in submitted. Thank you.')
              setSideEffects('')
              setProgressNotes('')
              setWeightLb('')
              router.refresh()
            })
          }
          className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? 'Submitting…' : 'Submit check-in'}
        </button>
        {msg ? <p className="text-sm text-neutral-700">{msg}</p> : null}
      </div>
    </section>
  )
}

