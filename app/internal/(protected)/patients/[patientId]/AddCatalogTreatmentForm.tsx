'use client'

import { useEffect, useMemo, useState, useTransition } from 'react'
import {
  MEDICATION_CATALOG,
  formatCatalogStrengthOption,
  getMedicationCatalogEntry,
} from '@/lib/care/medicationCatalog'
import type { OrgRxPresetForCatalogForm } from '@/lib/care/orgRxPresets'
import { parseOrgRxPresetDosage } from '@/lib/care/orgRxPresets'
import commonCatalogConfig from '@/lib/care/formularyCommon.json'
import { addCatalogTreatmentItem } from './actions'

export type ProgramPick = { id: string; label: string }
export type TreatmentPick = { id: string; careProgramId: string; displayName: string; status: string }
export type ProviderPick = {
  id: string
  label: string
  credentials: string | null
  specialty: string | null
  npi: string | null
  stateLicenseNumber: string | null
  prescriptionLicenseNumber: string | null
  deaNumber: string | null
}

const catalogSorted = [...MEDICATION_CATALOG].sort((a, b) => a.displayName.localeCompare(b.displayName))
const COMMON_CATALOG_IDS = new Set(commonCatalogConfig.commonCatalogIds)

function humanizeToken(value: string): string {
  return value
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

export function AddCatalogTreatmentForm({
  patientId,
  programs,
  treatmentItems,
  providerOptions,
  rxPresets = [],
  disabled,
}: {
  patientId: string
  programs: ProgramPick[]
  treatmentItems: TreatmentPick[]
  providerOptions: ProviderPick[]
  /** Org-level dose/sig templates; `treatment_key` must match a catalog medication id. */
  rxPresets?: OrgRxPresetForCatalogForm[]
  disabled?: boolean
}) {
  const [programId, setProgramId] = useState(programs[0]?.id ?? '')
  const [catalogId, setCatalogId] = useState(catalogSorted[0]?.id ?? '')
  const [catalogTypeFilter, setCatalogTypeFilter] = useState<'all' | 'rx' | 'supplement' | 'device'>('all')
  const [categoryFilter, setCategoryFilter] = useState<'all' | string>('all')
  const [searchText, setSearchText] = useState('')
  const [commonFirst, setCommonFirst] = useState(true)
  const [strengthMode, setStrengthMode] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [customUnit, setCustomUnit] = useState<'mg' | 'mcg' | '%'>('mg')
  const [route, setRoute] = useState('')
  const [frequency, setFrequency] = useState('')
  const [initialStatus, setInitialStatus] = useState<'pending_approval' | 'approved'>('pending_approval')
  const [supersedesId, setSupersedesId] = useState('')
  const [providerId, setProviderId] = useState(providerOptions[0]?.id ?? '')
  const [dispenseQuantity, setDispenseQuantity] = useState('')
  const [sig, setSig] = useState('')
  const [cycling, setCycling] = useState('')
  const [holdIf, setHoldIf] = useState('')
  const [durationDays, setDurationDays] = useState('90')
  const [refillsAuthorized, setRefillsAuthorized] = useState('0')
  const [fulfillmentChannel, setFulfillmentChannel] = useState('503a_partner')
  const [presetSelection, setPresetSelection] = useState('')
  const [msg, setMsg] = useState('')
  const [pending, start] = useTransition()

  const entry = useMemo(() => getMedicationCatalogEntry(catalogId), [catalogId])

  const categoryOptions = useMemo(() => {
    const values = [...new Set(catalogSorted.map((m) => m.category))].sort((a, b) => a.localeCompare(b))
    return values
  }, [])

  const filteredCatalog = useMemo(() => {
    const q = searchText.trim().toLowerCase()
    const matches = catalogSorted.filter((m) => {
      if (catalogTypeFilter !== 'all' && m.treatmentCategory !== catalogTypeFilter) return false
      if (categoryFilter !== 'all' && m.category !== categoryFilter) return false
      if (!q) return true
      return (
        m.displayName.toLowerCase().includes(q) ||
        m.id.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q)
      )
    })
    if (!commonFirst) return matches
    return [...matches].sort((a, b) => {
      const aCommon = COMMON_CATALOG_IDS.has(a.id) ? 0 : 1
      const bCommon = COMMON_CATALOG_IDS.has(b.id) ? 0 : 1
      if (aCommon !== bCommon) return aCommon - bCommon
      return a.displayName.localeCompare(b.displayName)
    })
  }, [catalogTypeFilter, categoryFilter, searchText, commonFirst])

  useEffect(() => {
    if (filteredCatalog.length === 0) return
    if (!filteredCatalog.some((m) => m.id === catalogId)) {
      setCatalogId(filteredCatalog[0]!.id)
    }
  }, [catalogId, filteredCatalog])

  const supersedeOptions = useMemo(
    () =>
      treatmentItems.filter((t) => t.careProgramId === programId && t.status !== 'stopped'),
    [treatmentItems, programId]
  )
  const selectedProvider = useMemo(
    () => providerOptions.find((provider) => provider.id === providerId) ?? null,
    [providerOptions, providerId]
  )

  const applyOrgPreset = (preset: OrgRxPresetForCatalogForm) => {
    const catalogEntry = getMedicationCatalogEntry(preset.treatment_key)
    if (!catalogEntry) {
      setMsg(`Unknown catalog id in preset: ${preset.treatment_key}`)
      return
    }
    setCatalogId(preset.treatment_key)
    const d = parseOrgRxPresetDosage(preset.dosage)
    if (d.strengthMode) setStrengthMode(d.strengthMode)
    if (d.customAmount !== undefined) setCustomAmount(d.customAmount)
    if (d.customUnit) setCustomUnit(d.customUnit)
    if (d.route && catalogEntry.routes.includes(d.route)) setRoute(d.route)
    if (d.frequency && catalogEntry.frequencies.includes(d.frequency)) setFrequency(d.frequency)
    if (d.sig !== undefined) setSig(d.sig)
    if (d.dispenseQuantity !== undefined) setDispenseQuantity(d.dispenseQuantity)
    else setDispenseQuantity(catalogEntry.defaultDispenseQuantity ?? '')
    if (d.cycling !== undefined) setCycling(d.cycling)
    if (d.holdIf !== undefined) setHoldIf(d.holdIf)
    if (d.initialStatus) setInitialStatus(d.initialStatus)
    if (d.durationDays) setDurationDays(d.durationDays)
    if (d.refillsAuthorized !== undefined) setRefillsAuthorized(d.refillsAuthorized)
    if (d.fulfillmentChannel) setFulfillmentChannel(d.fulfillmentChannel)
  }

  const strengthSelectOptions = useMemo(() => {
    if (!entry) return []
    const opts = entry.strengths.map((s) => ({
      value: `${s.amount}|${s.unit}`,
      label: formatCatalogStrengthOption(s),
    }))
    if (entry.allowCustomStrength) {
      opts.push({ value: 'custom', label: 'Custom strength…' })
    }
    return opts
  }, [entry])

  useEffect(() => {
    if (!entry) return
    const first = strengthSelectOptions[0]?.value ?? 'custom'
    setStrengthMode((prev) => (strengthSelectOptions.some((o) => o.value === prev) ? prev : first))
    setRoute((r) => (entry.routes.includes(r) ? r : entry.routes[0]!))
    setFrequency((f) => (entry.frequencies.includes(f) ? f : entry.frequencies[0]!))
    setDispenseQuantity(entry.defaultDispenseQuantity ?? '')
    if (entry.defaultCustomUnit) {
      setCustomUnit(entry.defaultCustomUnit)
    }
  }, [entry, strengthSelectOptions])

  if (disabled || programs.length === 0) {
    return (
      <section className="mt-8 rounded-lg border border-dashed border-neutral-200 bg-neutral-50 px-4 py-6 text-sm text-neutral-600">
        <h2 className="text-sm font-semibold text-neutral-900">Formulary prescribing</h2>
        <p className="mt-2">
          {programs.length === 0
            ? 'Create a care program first, then you can add catalog medications as new treatment rows (one row per dose change).'
            : 'Catalog prescribing is unavailable.'}
        </p>
      </section>
    )
  }

  const showCustomStrength = strengthMode === 'custom'

  return (
    <section className="mt-8 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-neutral-900">Formulary treatment builder (Rx + supplements)</h2>
      <p className="mt-1 text-xs text-neutral-500">
        Adds a <strong>new</strong> <code className="rounded bg-neutral-100 px-1">treatment_items</code> row with structured{' '}
        <code className="rounded bg-neutral-100 px-1">dosage</code> (dose, frequency, quantity, instructions). To titrate, choose{' '}
        <strong>Supersede prior treatment</strong> to stop the old row and link the new dose. Levothyroxine uses{' '}
        <strong>mcg</strong> (e.g. 88 mcg vs 137 mcg), not mg.
      </p>

      {rxPresets.length > 0 ? (
        <div className="mt-4 rounded-md border border-sky-200 bg-sky-50/70 px-3 py-3">
          <label className="block text-xs font-medium text-neutral-800">
            Apply org preset
            <select
              className="mt-1 w-full max-w-lg rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
              value={presetSelection}
              onChange={(e) => {
                const id = e.target.value
                setPresetSelection('')
                if (!id) return
                const preset = rxPresets.find((p) => p.id === id)
                if (!preset) return
                setMsg('')
                applyOrgPreset(preset)
                setMsg(`Applied preset “${preset.label}”. Review signing provider and submit.`)
              }}
              disabled={pending}
            >
              <option value="">— Choose preset —</option>
              {rxPresets.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
          </label>
          <p className="mt-2 text-[11px] text-neutral-600">
            Preset <code className="rounded bg-white/80 px-1">treatment_key</code> must match a catalog medication id.
          </p>
        </div>
      ) : null}

      <form
        className="mt-4 space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          setMsg('')
          const form = e.currentTarget
          const fd = new FormData(form)
          start(async () => {
            const res = await addCatalogTreatmentItem(patientId, fd)
            if (!res.ok) {
              setMsg(res.error)
              return
            }
            setMsg('Treatment row created.')
            setSupersedesId('')
            setDispenseQuantity(entry?.defaultDispenseQuantity ?? '')
            setSig('')
            setCycling('')
            setHoldIf('')
            setDurationDays('90')
            setRefillsAuthorized('0')
            setFulfillmentChannel('503a_partner')
          })
        }}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-xs font-medium text-neutral-700">
            Catalog type
            <select
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
              value={catalogTypeFilter}
              onChange={(e) => setCatalogTypeFilter(e.target.value as 'all' | 'rx' | 'supplement' | 'device')}
              disabled={pending}
            >
              <option value="all">All types</option>
              <option value="rx">Rx</option>
              <option value="supplement">Supplements</option>
              <option value="device">Devices</option>
            </select>
          </label>

          <label className="block text-xs font-medium text-neutral-700">
            Category
            <select
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              disabled={pending}
            >
              <option value="all">All categories</option>
              {categoryOptions.map((cat) => (
                <option key={cat} value={cat}>
                  {humanizeToken(cat)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block text-xs font-medium text-neutral-700">
          Search formulary
          <input
            className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-2 text-sm"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            disabled={pending}
            placeholder="Search by name, id, or category..."
          />
        </label>

        <label className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700">
          <input
            type="checkbox"
            checked={commonFirst}
            onChange={(e) => setCommonFirst(e.target.checked)}
            disabled={pending}
            className="size-4 rounded border-neutral-300"
          />
          Show common items first
        </label>

        <div className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-600">
          Showing {filteredCatalog.length} of {catalogSorted.length} formulary items.
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-xs font-medium text-neutral-700">
            Care program
            <select
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
              value={programId}
              onChange={(e) => {
                setProgramId(e.target.value)
                setSupersedesId('')
              }}
              disabled={pending}
            >
              {programs.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-xs font-medium text-neutral-700">
            Medication (catalog)
            <select
              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
              value={catalogId}
              onChange={(e) => setCatalogId(e.target.value)}
              disabled={pending || filteredCatalog.length === 0}
            >
              {filteredCatalog.length === 0 ? (
                <option value="">No matches</option>
              ) : (
                filteredCatalog.map((m) => (
                  <option key={m.id} value={m.id}>
                    {COMMON_CATALOG_IDS.has(m.id) ? '★ ' : ''}
                    {m.displayName} — {humanizeToken(m.category)}
                  </option>
                ))
              )}
            </select>
          </label>
        </div>

        {entry ? (
          <>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block text-xs font-medium text-neutral-700">
                Strength
                <select
                  name="strengthMode"
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
                  value={strengthMode}
                  onChange={(e) => setStrengthMode(e.target.value)}
                  disabled={pending}
                >
                  {strengthSelectOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>

              {showCustomStrength ? (
                <div className="grid grid-cols-2 gap-2">
                  <label className="block text-xs font-medium text-neutral-700">
                    Custom amount
                    <input
                      name="customStrengthAmount"
                      type="number"
                      step="any"
                      min={0}
                      className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-2 text-sm"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      disabled={pending}
                      placeholder="e.g. 12.5"
                    />
                  </label>
                  <label className="block text-xs font-medium text-neutral-700">
                    Unit
                    <select
                      name="customStrengthUnit"
                      className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
                      value={customUnit}
                      onChange={(e) => setCustomUnit(e.target.value as 'mg' | 'mcg' | '%')}
                      disabled={pending}
                    >
                      <option value="mg">mg</option>
                      <option value="mcg">mcg (thyroid, patch micrograms)</option>
                      <option value="%">% (topical)</option>
                    </select>
                  </label>
                </div>
              ) : null}

              <label className="block text-xs font-medium text-neutral-700">
                Route
                <select
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                  disabled={pending}
                >
                  {entry.routes.map((r) => (
                    <option key={r} value={r}>
                      {r === 'SQ'
                        ? 'SQ (subcutaneous)'
                        : r === 'IM'
                          ? 'IM (intramuscular)'
                          : r === 'PO'
                            ? 'PO (oral)'
                            : r === 'IV'
                              ? 'IV'
                              : r === 'topical'
                                ? 'Topical'
                                : r === 'transdermal'
                                  ? 'Transdermal'
                                  : r}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-xs font-medium text-neutral-700">
                Frequency
                <select
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  disabled={pending}
                >
                  {entry.frequencies.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-xs font-medium text-neutral-700">
                Initial workflow status
                <select
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
                  value={initialStatus}
                  onChange={(e) => setInitialStatus(e.target.value as 'pending_approval' | 'approved')}
                  disabled={pending}
                >
                  <option value="pending_approval">Pending approval</option>
                  <option value="approved">Approved (on file / sent)</option>
                </select>
              </label>

              <label className="block text-xs font-medium text-neutral-700 sm:col-span-2">
                Supersede prior treatment (optional — stops old row, same program)
                <select
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
                  value={supersedesId}
                  onChange={(e) => setSupersedesId(e.target.value)}
                  disabled={pending}
                >
                  <option value="">— None —</option>
                  {supersedeOptions.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.displayName} ({t.status})
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="rounded-md border border-neutral-200 bg-neutral-50/80 p-4">
              <p className="text-xs font-semibold text-neutral-900">503A / partner handoff</p>
              <p className="mt-1 text-xs text-neutral-500">
                Day supply + refills go on the chart for fax/portal/API to your compounder. Phones are optional; use
                whichever number the pharmacy should call back.
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <label className="block text-xs font-medium text-neutral-700">
                  Days per fill
                  <select
                    name="durationDays"
                    className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
                    value={durationDays}
                    onChange={(e) => setDurationDays(e.target.value)}
                    disabled={pending}
                  >
                    <option value={30}>30 days</option>
                    <option value={60}>60 days</option>
                    <option value={90}>90 days</option>
                  </select>
                </label>
                <label className="block text-xs font-medium text-neutral-700">
                  Refills authorized
                  <select
                    name="refillsAuthorized"
                    className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
                    value={refillsAuthorized}
                    onChange={(e) => setRefillsAuthorized(e.target.value)}
                    disabled={pending}
                  >
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={i}>
                        {i === 0 ? 'No refills' : i === 1 ? '1 refill' : `${i} refills`}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-xs font-medium text-neutral-700 sm:col-span-2">
                  Fulfillment channel
                  <select
                    name="fulfillmentChannel"
                    className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
                    value={fulfillmentChannel}
                    onChange={(e) => setFulfillmentChannel(e.target.value)}
                    disabled={pending}
                  >
                    <option value="503a_partner">503A compounding partner (default)</option>
                    <option value="retail_erx_planned">Retail eRx (planned — not wired)</option>
                    <option value="internal_only">Internal / not sent to pharmacy yet</option>
                  </select>
                </label>
                <label className="block text-xs font-medium text-neutral-700 sm:col-span-2">
                  Signing provider
                  <select
                    name="providerStaffProfileId"
                    className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 py-2 text-sm"
                    value={providerId}
                    onChange={(e) => setProviderId(e.target.value)}
                    required
                    disabled={pending || providerOptions.length === 0}
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
                {selectedProvider ? (
                  <div className="rounded-md border border-neutral-200 bg-white p-3 text-xs text-neutral-700 sm:col-span-2">
                    <p className="font-medium text-neutral-800">
                      {selectedProvider.label}
                      {selectedProvider.specialty ? ` · ${selectedProvider.specialty}` : ''}
                    </p>
                    <p className="mt-1">
                      NPI: {selectedProvider.npi ?? '—'} · State license: {selectedProvider.stateLicenseNumber ?? '—'} ·
                      Prescriptive license: {selectedProvider.prescriptionLicenseNumber ?? '—'}
                      {selectedProvider.deaNumber ? ` · DEA: ${selectedProvider.deaNumber}` : ''}
                    </p>
                  </div>
                ) : null}
                <label className="block text-xs font-medium text-neutral-700 sm:col-span-2">
                  Prescriber name (as it should appear on the Rx)
                  <input
                    name="prescriberDisplayName"
                    type="text"
                    className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-2 text-sm"
                    value={selectedProvider?.label ?? ''}
                    readOnly
                    disabled={pending || !selectedProvider}
                  />
                </label>
                <label className="block text-xs font-medium text-neutral-700 sm:col-span-2">
                  Prescriber NPI (10 digits)
                  <input
                    name="prescriberNpi"
                    type="text"
                    inputMode="numeric"
                    pattern="\d{10}"
                    maxLength={12}
                    className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-2 text-sm font-mono"
                    value={selectedProvider?.npi ?? ''}
                    readOnly
                    disabled={pending || !selectedProvider}
                  />
                </label>
                <label className="block text-xs font-medium text-neutral-700">
                  Prescriber / callback phone (optional)
                  <input
                    name="prescriberPhone"
                    type="text"
                    className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-2 text-sm"
                    placeholder="e.g. (555) 123-4567"
                    disabled={pending}
                  />
                </label>
                <label className="block text-xs font-medium text-neutral-700">
                  Clinic / org phone for pharmacy (optional)
                  <input
                    name="organizationPhone"
                    type="text"
                    className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-2 text-sm"
                    placeholder="Main line or triage"
                    disabled={pending}
                  />
                </label>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-1">
              <label className="block text-xs font-medium text-neutral-700">
                Quantity / bottle amount (patient-facing)
                <input
                  className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-2 text-sm"
                  value={dispenseQuantity}
                  onChange={(e) => setDispenseQuantity(e.target.value)}
                  disabled={pending}
                  placeholder="e.g. 120 softgels (60-day supply)"
                />
              </label>
              <label className="block text-xs font-medium text-neutral-700">
                Sig (optional — overrides catalog default when set)
                <textarea
                  className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-2 text-sm"
                  rows={2}
                  value={sig}
                  onChange={(e) => setSig(e.target.value)}
                  disabled={pending}
                  placeholder="Patient-facing directions"
                />
              </label>
              <label className="block text-xs font-medium text-neutral-700">
                Titration / cycling (optional)
                <textarea
                  className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-2 text-sm"
                  rows={2}
                  value={cycling}
                  onChange={(e) => setCycling(e.target.value)}
                  disabled={pending}
                />
              </label>
              <label className="block text-xs font-medium text-neutral-700">
                Hold / stop instructions (optional)
                <textarea
                  className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-2 text-sm"
                  rows={2}
                  value={holdIf}
                  onChange={(e) => setHoldIf(e.target.value)}
                  disabled={pending}
                />
              </label>
            </div>
          </>
        ) : null}

        <FormHiddenSync
          programId={programId}
          catalogId={catalogId}
          route={route}
          frequency={frequency}
          initialStatus={initialStatus}
          supersedesId={supersedesId}
          dispenseQuantity={dispenseQuantity}
          sig={sig}
          cycling={cycling}
          holdIf={holdIf}
        />

        <button
          type="submit"
          disabled={pending || !entry || !selectedProvider}
          className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {pending ? 'Saving…' : 'Create treatment row'}
        </button>
        {msg ? <p className="text-xs text-neutral-600">{msg}</p> : null}
      </form>
    </section>
  )
}

function FormHiddenSync({
  programId,
  catalogId,
  route,
  frequency,
  initialStatus,
  supersedesId,
  dispenseQuantity,
  sig,
  cycling,
  holdIf,
}: {
  programId: string
  catalogId: string
  route: string
  frequency: string
  initialStatus: string
  supersedesId: string
  dispenseQuantity: string
  sig: string
  cycling: string
  holdIf: string
}) {
  return (
    <>
      <input type="hidden" name="careProgramId" value={programId} />
      <input type="hidden" name="catalogMedicationId" value={catalogId} />
      <input type="hidden" name="route" value={route} />
      <input type="hidden" name="frequency" value={frequency} />
      <input type="hidden" name="initialStatus" value={initialStatus} />
      <input type="hidden" name="supersedesTreatmentItemId" value={supersedesId} />
      <input type="hidden" name="dispenseQuantity" value={dispenseQuantity} />
      <input type="hidden" name="sig" value={sig} />
      <input type="hidden" name="cycling" value={cycling} />
      <input type="hidden" name="hold_if" value={holdIf} />
    </>
  )
}
