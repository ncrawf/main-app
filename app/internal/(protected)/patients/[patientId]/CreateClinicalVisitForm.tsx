'use client'

import { useMemo, useState, useTransition } from 'react'
import { createClinicalVisitNote } from './actions'
import type { ClinicianRefillDraftSeed } from '@/lib/refill/clinicalRefillDraft'

type TreatmentOption = {
  id: string
  displayName: string
  status: string
}

type ProviderOption = {
  id: string
  label: string
  credentials: string | null
  specialty: string | null
  npi: string | null
  stateLicenseNumber: string | null
  prescriptionLicenseNumber: string | null
  deaNumber: string | null
}

function humanizeRefillProfile(profile: ClinicianRefillDraftSeed['refillCheckInProfile']): string {
  if (profile === 'glp1_weight_loss') return 'GLP-1 check-in'
  if (profile === 'generic_rx') return 'Rx check-in'
  return 'Check-in'
}

function formatSubmittedAt(value: string): string {
  const date = new Date(value)
  if (Number.isNaN(date.valueOf())) return 'recently'
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(date)
}

export function CreateClinicalVisitForm({
  patientId,
  treatmentOptions,
  providerOptions,
  refillDraftSeed,
}: {
  patientId: string
  treatmentOptions: TreatmentOption[]
  providerOptions: ProviderOption[]
  refillDraftSeed?: ClinicianRefillDraftSeed | null
}) {
  const [pending, start] = useTransition()
  const [visitType, setVisitType] = useState('async_intake_review')
  const [providerId, setProviderId] = useState(providerOptions[0]?.id ?? '')
  const [chiefConcern, setChiefConcern] = useState(refillDraftSeed?.chiefConcern ?? '')
  const [diagnosisCodesInput, setDiagnosisCodesInput] = useState('')
  const [assessment, setAssessment] = useState(refillDraftSeed?.assessment ?? '')
  const [plan, setPlan] = useState(refillDraftSeed?.plan ?? '')
  const [counseling, setCounseling] = useState(
    refillDraftSeed?.counseling ??
      'Reviewed contraindications/interactions, discussed risks/benefits, and confirmed patient understanding.'
  )
  const [followUpPlan, setFollowUpPlan] = useState(
    refillDraftSeed?.followUpPlan ?? 'Follow up in 2-4 weeks or sooner for adverse effects/concerns.'
  )
  const [selectedTreatmentIds, setSelectedTreatmentIds] = useState<string[]>([])
  const [msg, setMsg] = useState('')

  const diagnosisCodes = useMemo(
    () =>
      [...new Set(diagnosisCodesInput.split(/[,\n]/g).map((v) => v.trim().toUpperCase()).filter(Boolean))].slice(0, 20),
    [diagnosisCodesInput]
  )
  const selectedProvider = useMemo(
    () => providerOptions.find((provider) => provider.id === providerId) ?? null,
    [providerOptions, providerId]
  )

  function toggleTreatment(id: string) {
    setSelectedTreatmentIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  return (
    <section className="mt-10 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-neutral-900">Document visit (progress note)</h2>
      <p className="mt-1 text-xs text-neutral-500">
        Visit-centric clinical note with optional Rx-by-Rx safety addenda.
      </p>
      {refillDraftSeed ? (
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full border border-sky-300 bg-sky-50 px-2 py-0.5 text-sky-800">
            Prefilled from refill request {refillDraftSeed.sourceRefillRequestId.slice(0, 8)}...
          </span>
          <span className="rounded-full border border-neutral-300 bg-neutral-50 px-2 py-0.5 text-neutral-700">
            {refillDraftSeed.treatmentLabel}
          </span>
          <span className="rounded-full border border-neutral-300 bg-neutral-50 px-2 py-0.5 text-neutral-700">
            {humanizeRefillProfile(refillDraftSeed.refillCheckInProfile)}
          </span>
          <span className="rounded-full border border-neutral-300 bg-neutral-50 px-2 py-0.5 text-neutral-700">
            Submitted {formatSubmittedAt(refillDraftSeed.submittedAt)}
          </span>
        </div>
      ) : null}

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="text-xs font-medium text-neutral-700">
          Visit type
          <select
            value={visitType}
            onChange={(e) => setVisitType(e.target.value)}
            disabled={pending}
            className="mt-1 block w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
          >
            <option value="async_intake_review">Async intake review</option>
            <option value="followup_checkin_review">Follow-up check-in review</option>
            <option value="lab_review">Lab review</option>
            <option value="medication_adjustment">Medication adjustment</option>
          </select>
        </label>
        <label className="text-xs font-medium text-neutral-700">
          Signing provider
          <select
            value={providerId}
            onChange={(e) => setProviderId(e.target.value)}
            disabled={pending || providerOptions.length === 0}
            className="mt-1 block w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
          >
            {providerOptions.length === 0 ? (
              <option value="">No provider profiles available</option>
            ) : (
              providerOptions.map((provider) => (
                <option key={provider.id} value={provider.id}>
                  {provider.label}
                </option>
              ))
            )}
          </select>
        </label>
        <label className="text-xs font-medium text-neutral-700">
          Diagnosis codes (comma-separated)
          <input
            value={diagnosisCodesInput}
            onChange={(e) => setDiagnosisCodesInput(e.target.value)}
            placeholder="E66.9, R73.03, N52.9"
            disabled={pending}
            className="mt-1 block w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
          />
        </label>
      </div>
      {selectedProvider ? (
        <p className="mt-2 text-xs text-neutral-500">
          NPI: {selectedProvider.npi ?? '—'} · State license: {selectedProvider.stateLicenseNumber ?? '—'} ·
          Prescriptive license: {selectedProvider.prescriptionLicenseNumber ?? '—'}
          {selectedProvider.deaNumber ? ` · DEA: ${selectedProvider.deaNumber}` : ''}
        </p>
      ) : null}
      {diagnosisCodes.length > 0 ? (
        <p className="mt-2 text-xs text-neutral-500">Parsed diagnosis codes: {diagnosisCodes.join(', ')}</p>
      ) : null}

      <label className="mt-4 block text-xs font-medium text-neutral-700">
        Chief concern
        <textarea
          value={chiefConcern}
          onChange={(e) => setChiefConcern(e.target.value)}
          rows={2}
          disabled={pending}
          className="mt-1 block w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
        />
      </label>

      <label className="mt-3 block text-xs font-medium text-neutral-700">
        Assessment
        <textarea
          value={assessment}
          onChange={(e) => setAssessment(e.target.value)}
          rows={3}
          disabled={pending}
          className="mt-1 block w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
        />
      </label>

      <label className="mt-3 block text-xs font-medium text-neutral-700">
        Safety / counseling
        <textarea
          value={counseling}
          onChange={(e) => setCounseling(e.target.value)}
          rows={3}
          disabled={pending}
          className="mt-1 block w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
        />
      </label>

      <label className="mt-3 block text-xs font-medium text-neutral-700">
        Plan
        <textarea
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          rows={3}
          disabled={pending}
          className="mt-1 block w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
        />
      </label>

      <label className="mt-3 block text-xs font-medium text-neutral-700">
        Follow-up plan
        <textarea
          value={followUpPlan}
          onChange={(e) => setFollowUpPlan(e.target.value)}
          rows={2}
          disabled={pending}
          className="mt-1 block w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
        />
      </label>

      <div className="mt-4 rounded-md border border-neutral-200 bg-neutral-50 p-3">
        <p className="text-xs font-medium text-neutral-700">Attach Rx safety addenda (optional)</p>
        {treatmentOptions.length === 0 ? (
          <p className="mt-2 text-xs text-neutral-500">No treatment items available.</p>
        ) : (
          <div className="mt-2 space-y-1">
            {treatmentOptions.map((item) => (
              <label key={item.id} className="flex items-center gap-2 text-xs text-neutral-700">
                <input
                  type="checkbox"
                  checked={selectedTreatmentIds.includes(item.id)}
                  onChange={() => toggleTreatment(item.id)}
                  disabled={pending}
                />
                <span>
                  {item.displayName} ({item.status})
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          disabled={pending || !selectedProvider}
          onClick={() =>
            start(async () => {
              setMsg('')
              const res = await createClinicalVisitNote(patientId, {
                signingProviderStaffId: providerId,
                visitType,
                chiefConcern,
                diagnosisCodes,
                assessment,
                plan,
                counseling,
                followUpPlan,
                treatmentItemIds: selectedTreatmentIds,
                sourceRefillRequestId: refillDraftSeed?.sourceRefillRequestId ?? null,
              })
              if (!res.ok) {
                setMsg(res.error)
                return
              }
              const refillSourceMsg = refillDraftSeed
                ? ` Source refill: ${refillDraftSeed.sourceRefillRequestId.slice(0, 8)}... (${refillDraftSeed.treatmentLabel}).`
                : ''
              setMsg(`Progress note saved and signed.${refillSourceMsg}`)
            })
          }
          className="rounded-md border border-neutral-300 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-800 disabled:opacity-60"
        >
          {pending ? 'Saving note…' : 'Save progress note'}
        </button>
        {msg ? <span className="text-xs text-neutral-600">{msg}</span> : null}
      </div>
    </section>
  )
}
