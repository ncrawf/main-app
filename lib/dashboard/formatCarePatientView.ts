/**
 * Read-only presentation helpers for patient dashboard (care_programs + treatment_items).
 * Structured `dosage` / `metadata` are filled by clinical/admin tools — see `docs/patient-dashboard-v2.md`.
 */

export function humanizeToken(v: string | null | undefined): string {
  if (!v) return '—'
  return v
    .split('_')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(' ')
}

export function formatIsoDateUs(iso: string | null | undefined): string {
  if (!iso) return '—'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(d)
}

/** Calendar days from `iso` start to today (floor). */
export function daysSince(iso: string | null | undefined): number | null {
  if (!iso) return null
  const start = new Date(iso)
  if (Number.isNaN(start.getTime())) return null
  const now = new Date()
  const ms = now.getTime() - start.getTime()
  return Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24)))
}

/** Whole calendar days from now until `iso` (ceil). Past dates return negative. */
export function daysUntil(iso: string | null | undefined): number | null {
  if (!iso) return null
  const t = new Date(iso).getTime()
  if (Number.isNaN(t)) return null
  const ms = t - Date.now()
  return Math.ceil(ms / (1000 * 60 * 60 * 24))
}

export function formatTenureLine(iso: string | null | undefined, label = 'Started'): string | null {
  if (!iso) return null
  const days = daysSince(iso)
  const date = formatIsoDateUs(iso)
  if (days === null) return `${label} ${date}`
  if (days === 0) return `${label} today (${date})`
  if (days === 1) return `${label} 1 day ago (${date})`
  return `${label} ${days} days ago (${date})`
}

export type DosagePatientLines = {
  headline: string
  lines: string[]
}

/**
 * Turns `treatment_items.dosage` + `metadata` into patient-safe lines.
 * Accepts several ad-hoc shapes until prescribers write a single canonical schema.
 */
export function formatDosageForPatient(
  dosage: Record<string, unknown> | null | undefined,
  metadata: Record<string, unknown> | null | undefined
): DosagePatientLines {
  const d = dosage ?? {}
  const m = metadata ?? {}

  const lines: string[] = []

  const pickStr = (...keys: string[]) => {
    for (const k of keys) {
      const v = d[k] ?? m[k]
      if (typeof v === 'string' && v.trim()) return v.trim()
    }
    return null
  }

  const drug =
    pickStr('drug_display', 'drug_name', 'medication_name', 'name') ||
    (typeof d.drug === 'object' && d.drug && typeof (d.drug as { name?: string }).name === 'string'
      ? (d.drug as { name: string }).name.trim()
      : null)

  const strengthObj = typeof d.strength === 'object' && d.strength ? (d.strength as Record<string, unknown>) : null
  const amount = strengthObj?.amount ?? d.strength_amount ?? d.dose_amount
  const unit = (strengthObj?.unit ?? d.strength_unit ?? d.dose_unit) as string | undefined
  let strengthLine: string | null = null
  if (typeof amount === 'number' && unit) {
    strengthLine = `${amount} ${unit}`
  } else if (typeof amount === 'string' && amount.trim() && unit) {
    strengthLine = `${amount.trim()} ${unit}`
  } else {
    const flat = pickStr('strength', 'dose', 'dose_text')
    if (flat) strengthLine = flat
  }

  const route = pickStr('route', 'administration_route', 'route_display')
  const frequency = pickStr('frequency', 'sig_frequency', 'schedule')
  const dispenseQty = pickStr('dispense_quantity', 'quantity', 'dispense', 'supply_text')

  const sig = pickStr('sig', 'sig_line', 'patient_sig', 'instructions_short')
  const longInst = pickStr('patient_instructions', 'instructions', 'full_sig', 'detail')

  const cycling = pickStr('cycling', 'cycle_instructions', 'titration')
  const hold = pickStr('hold_if', 'hold_instructions', 'stopping_instructions', 'discontinue_if')

  if (strengthLine) lines.push(`Dose: ${strengthLine}`)
  if (route) lines.push(`Route: ${route.toUpperCase() === 'SQ' ? 'Subcutaneous (SQ)' : route.toUpperCase() === 'IM' ? 'Intramuscular (IM)' : route}`)
  if (frequency) lines.push(`Schedule: ${frequency}`)
  if (dispenseQty) lines.push(`Quantity: ${dispenseQty}`)
  if (sig) lines.push(`Directions: ${sig}`)
  if (longInst && longInst !== sig) lines.push(longInst)
  if (cycling) lines.push(`Titration / cycling: ${cycling}`)
  if (hold) lines.push(`Hold or stop: ${hold}`)

  const rx = m.rx_supply as { duration_days?: unknown; refills_authorized?: unknown; written_at?: unknown } | undefined
  if (rx && typeof rx.duration_days === 'number') {
    const rf = typeof rx.refills_authorized === 'number' ? rx.refills_authorized : 0
    lines.push(`This fill covers about ${rx.duration_days} days${rf > 0 ? `; ${rf} refill(s) authorized` : ''}.`)
  }

  const pr = m.prescriber as { display_name?: unknown; npi?: unknown; phone?: unknown; organization_phone?: unknown } | undefined
  if (pr && typeof pr.display_name === 'string' && pr.display_name.trim()) {
    const npi = typeof pr.npi === 'string' ? pr.npi : ''
    lines.push(`Prescriber: ${pr.display_name.trim()}${npi ? ` (NPI ${npi})` : ''}`)
    if (typeof pr.phone === 'string' && pr.phone.trim()) {
      lines.push(`Prescriber phone on file: ${pr.phone.trim()}`)
    }
    if (typeof pr.organization_phone === 'string' && pr.organization_phone.trim()) {
      lines.push(`Clinic / pharmacy line: ${pr.organization_phone.trim()}`)
    }
  }

  const headline = drug ? `Medication: ${drug}` : 'Medication & dosing'

  if (lines.length === 0) {
    lines.push(
      'Your clinician will confirm the exact medication, strength, route (e.g. SQ vs IM), and instructions. Those details will show here once entered in your chart.'
    )
  }

  return { headline, lines }
}

/** Optional dates in `treatment_items.metadata` for patient-facing “what’s next”. */
export function formatSchedulingHintsFromMetadata(metadata: Record<string, unknown> | null | undefined): string[] {
  const m = metadata ?? {}
  const out: string[] = []

  const add = (label: string, key: string) => {
    const v = m[key]
    if (typeof v !== 'string' || !v.trim()) return
    const d = daysUntil(v.trim())
    const date = formatIsoDateUs(v.trim())
    if (d === null) {
      out.push(`${label}: ${date}`)
      return
    }
    if (d < 0) out.push(`${label}: was ${Math.abs(d)} day(s) ago (${date})`)
    else if (d === 0) out.push(`${label}: today (${date})`)
    else if (d === 1) out.push(`${label}: in 1 day (${date})`)
    else out.push(`${label}: in ${d} days (${date})`)
  }

  add('Next check-in', 'next_checkin_at')
  add('Next refill window', 'next_refill_due_at')
  add('Next visit', 'next_visit_at')
  return out
}

export function formatLatestRefillRequestStatus(status: string | null | undefined): string | null {
  if (!status) return null
  switch (status) {
    case 'requested':
      return 'Latest refill request: received — your team will review it.'
    case 'under_review':
      return 'Latest refill request: in review with your care team.'
    case 'approved':
      return 'Latest refill request: approved — fulfillment in progress.'
    case 'denied':
      return 'Latest refill request: not approved as submitted; your team may follow up.'
    case 'fulfilled':
      return 'Latest refill request: fulfilled.'
    case 'cancelled':
      return 'Latest refill request: cancelled.'
    default:
      return `Latest refill request: ${humanizeToken(status)}.`
  }
}

/** Plain-language “what happens next” from `treatment_items.status` (patient dashboard). */
export function treatmentStatusTrackingHint(status: string): string {
  switch (status) {
    case 'refill_due':
      return 'Refill: due now — you can submit a refill request from your dashboard.'
    case 'refill_pending':
      return 'Refill: submitted and in review with your care team.'
    case 'pending_approval':
      return 'Next: your clinician is reviewing this treatment.'
    case 'approved':
    case 'rx_sent':
    case 'shipped':
      return 'Next: fulfillment in progress; status will update when pharmacy ships or activates care.'
    case 'active':
      return 'Next: stay on plan; we’ll prompt you when a refill or check-in is due.'
    case 'paused':
      return 'This treatment is paused — follow instructions from your care team.'
    case 'stopped':
      return 'This treatment has ended unless your clinician restarts it.'
    case 'denied':
      return 'This treatment was not approved as written; your team may propose an alternative.'
    default:
      return 'Status updates appear here as your care team moves your plan forward.'
  }
}
