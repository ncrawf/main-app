'use client'

import { useMemo, useState, useTransition } from 'react'
import { LAB_PANEL_TEMPLATES, LAB_TEST_CATALOG } from '@/lib/labs/catalog'
import { createAndPublishLabOrder } from './actions'

type ProviderOption = {
  id: string
  label: string
  npi: string | null
  credentials: string | null
  specialty: string | null
  stateLicenseNumber: string | null
  prescriptionLicenseNumber: string | null
  deaNumber: string | null
}

export function CreateLabOrderForm({
  patientId,
  patientDisplayName,
  providerOptions,
}: {
  patientId: string
  patientDisplayName: string
  providerOptions: ProviderOption[]
}) {
  const [pending, start] = useTransition()
  const [selectedTests, setSelectedTests] = useState<string[]>([])
  const [orderDate, setOrderDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [providerId, setProviderId] = useState(providerOptions[0]?.id ?? '')
  const [signatureMode, setSignatureMode] = useState<'typed' | 'stamp'>('typed')
  const [diagnosisCodes, setDiagnosisCodes] = useState<string[]>([])
  const [diagnosisCodeInput, setDiagnosisCodeInput] = useState('')
  const [diagnosisHint, setDiagnosisHint] = useState('')
  const [instructions, setInstructions] = useState('If fasting labs are ordered, fast 8-10 hours (water allowed).')
  const [notifyPatientByEmail, setNotifyPatientByEmail] = useState(true)
  const [msg, setMsg] = useState('')
  const [signedUrl, setSignedUrl] = useState<string | null>(null)

  const selectedCount = selectedTests.length
  const groupedTests = useMemo(() => {
    const categories = ['metabolic', 'cardiometabolic', 'hormonal', 'inflammation', 'safety', 'other'] as const
    return categories.map((category) => ({
      category,
      rows: LAB_TEST_CATALOG.filter((test) => test.category === category),
    }))
  }, [])
  const selectedProvider = useMemo(
    () => providerOptions.find((provider) => provider.id === providerId) ?? null,
    [providerOptions, providerId]
  )

  function toggleTest(code: string) {
    setSelectedTests((prev) => (prev.includes(code) ? prev.filter((x) => x !== code) : [...prev, code]))
  }

  function applyPanel(panelId: string) {
    const panel = LAB_PANEL_TEMPLATES.find((p) => p.id === panelId)
    if (!panel) return
    const testCodes = panel.testCodes
    setSelectedTests((prev) => [...new Set([...prev, ...testCodes])])
    setDiagnosisCodes((prev) => [...new Set([...prev, ...panel.defaultDiagnosisCodes])])
    setDiagnosisHint((prev) => (prev.trim().length > 0 ? prev : panel.defaultDiagnosisHint ?? ''))
  }

  function clearAll() {
    setSelectedTests([])
  }

  function normalizeDiagnosisCode(raw: string): string {
    return raw.trim().toUpperCase()
  }

  function addDiagnosisCode(raw: string) {
    const code = normalizeDiagnosisCode(raw)
    if (!code) return
    setDiagnosisCodes((prev) => (prev.includes(code) ? prev : [...prev, code]))
    setDiagnosisCodeInput('')
  }

  function removeDiagnosisCode(code: string) {
    setDiagnosisCodes((prev) => prev.filter((x) => x !== code))
  }

  return (
    <section className="mt-10 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-neutral-900">Create lab requisition</h2>
      <p className="mt-1 text-xs text-neutral-500">
        Build and publish a branded requisition PDF for {patientDisplayName || 'this patient'}.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="text-xs font-medium text-neutral-700">
          Order date
          <input
            type="date"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            disabled={pending}
            className="mt-1 block w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
          />
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
          Ordering provider NPI
          <input
            value={selectedProvider?.npi ?? ''}
            readOnly
            disabled={pending || !selectedProvider}
            className="mt-1 block w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
          />
        </label>
        <label className="text-xs font-medium text-neutral-700">
          Signature mode
          <select
            value={signatureMode}
            onChange={(e) => setSignatureMode(e.target.value === 'stamp' ? 'stamp' : 'typed')}
            disabled={pending}
            className="mt-1 block w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
          >
            <option value="typed">Typed e-signature block</option>
            <option value="stamp">Provider stamp on file</option>
          </select>
        </label>
        <label className="text-xs font-medium text-neutral-700 sm:col-span-2">
          Diagnosis / clinical hint (optional)
          <input
            value={diagnosisHint}
            onChange={(e) => setDiagnosisHint(e.target.value)}
            placeholder="Example: obesity, metabolic syndrome, ED evaluation"
            disabled={pending}
            className="mt-1 block w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
          />
        </label>
      </div>
      {selectedProvider ? (
        <p className="mt-2 text-xs text-neutral-500">
          State license: {selectedProvider.stateLicenseNumber ?? '—'} · Prescriptive license:{' '}
          {selectedProvider.prescriptionLicenseNumber ?? '—'}
          {selectedProvider.deaNumber ? ` · DEA: ${selectedProvider.deaNumber}` : ''}
        </p>
      ) : null}

      <div className="mt-4 rounded-md border border-neutral-200 bg-neutral-50 p-3">
        <p className="text-xs font-medium text-neutral-700">Quick panel presets</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {LAB_PANEL_TEMPLATES.map((panel) => (
            <button
              key={panel.id}
              type="button"
              disabled={pending}
              onClick={() => applyPanel(panel.id)}
              className="rounded-md border border-neutral-300 bg-white px-2.5 py-1 text-xs font-medium text-neutral-800 hover:bg-neutral-100 disabled:opacity-60"
              title={panel.description}
            >
              + {panel.label}
            </button>
          ))}
          <button
            type="button"
            disabled={pending || selectedCount === 0}
            onClick={clearAll}
            className="rounded-md border border-neutral-300 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-100 disabled:opacity-60"
          >
            Clear all
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-md border border-neutral-200 p-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-medium text-neutral-700">Select tests</p>
          <span className="text-xs text-neutral-500">{selectedCount} selected</span>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {groupedTests.map((group) => (
            <div key={group.category}>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">{group.category}</p>
              <div className="mt-1 space-y-1">
                {group.rows.map((test) => (
                  <label key={test.code} className="flex items-center gap-2 text-sm text-neutral-800">
                    <input
                      type="checkbox"
                      checked={selectedTests.includes(test.code)}
                      onChange={() => toggleTest(test.code)}
                      disabled={pending}
                    />
                    <span>{test.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-md border border-neutral-200 bg-neutral-50 p-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-medium text-neutral-700">Diagnosis codes (auto-populates by panel)</p>
          <span className="text-xs text-neutral-500">{diagnosisCodes.length} codes</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {diagnosisCodes.length === 0 ? (
            <span className="text-xs text-neutral-500">No diagnosis codes selected yet.</span>
          ) : (
            diagnosisCodes.map((code) => (
              <button
                key={code}
                type="button"
                disabled={pending}
                onClick={() => removeDiagnosisCode(code)}
                className="rounded-full border border-neutral-300 bg-white px-2 py-0.5 text-xs text-neutral-800 hover:bg-neutral-100"
                title="Remove"
              >
                {code} ×
              </button>
            ))
          )}
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <input
            value={diagnosisCodeInput}
            onChange={(e) => setDiagnosisCodeInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                addDiagnosisCode(diagnosisCodeInput)
              }
            }}
            placeholder="Add ICD-10 code (e.g. E66.9)"
            disabled={pending}
            className="w-56 rounded-md border border-neutral-300 bg-white px-2 py-1 text-xs"
          />
          <button
            type="button"
            disabled={pending}
            onClick={() => addDiagnosisCode(diagnosisCodeInput)}
            className="rounded-md border border-neutral-300 bg-white px-2.5 py-1 text-xs font-medium text-neutral-800 hover:bg-neutral-100 disabled:opacity-60"
          >
            Add code
          </button>
        </div>
      </div>

      <label className="mt-4 block text-xs font-medium text-neutral-700">
        Lab instructions (shown on PDF)
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          rows={3}
          disabled={pending}
          className="mt-1 block w-full rounded-md border border-neutral-300 px-2 py-1.5 text-sm"
        />
      </label>
      <label className="mt-3 inline-flex items-center gap-2 text-xs text-neutral-700">
        <input
          type="checkbox"
          checked={notifyPatientByEmail}
          onChange={(e) => setNotifyPatientByEmail(e.target.checked)}
          disabled={pending}
        />
        Notify patient by email that requisition is available
      </label>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          disabled={pending || !selectedProvider}
          onClick={() =>
            start(async () => {
              setMsg('')
              setSignedUrl(null)
              const res = await createAndPublishLabOrder(patientId, {
                orderDate,
                orderingProviderStaffId: providerId,
                orderingProviderName: selectedProvider?.label ?? '',
                orderingProviderNpi: selectedProvider?.npi ?? '',
                signatureMode,
                diagnosisCodes,
                diagnosisHint,
                instructions,
                testCodes: selectedTests,
                notifyPatientByEmail,
              })
              if (!res.ok) {
                setMsg(res.error)
                return
              }
              setMsg(`Lab requisition published. ${res.testCount} tests included.`)
              setSignedUrl(res.signedUrl)
            })
          }
          className="rounded-md border border-neutral-300 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? 'Publishing…' : 'Publish requisition to portal'}
        </button>
        {signedUrl ? (
          <a
            href={signedUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-50"
          >
            Download PDF
          </a>
        ) : null}
        {msg ? <span className="text-xs text-neutral-600">{msg}</span> : null}
      </div>
    </section>
  )
}
