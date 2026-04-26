import type { PatientCareProgramCard, PatientCareTreatmentDetail } from '@/lib/dashboard/getPatientCareOverview'
import { formatIsoDateUs, humanizeToken } from '@/lib/dashboard/formatCarePatientView'

export type CompactCareStatus = 'Active' | 'In review' | 'Action needed' | 'Paused' | 'Stopped'

export function compactProgramStatus(program: PatientCareProgramCard): CompactCareStatus {
  const s = (program.status ?? '').toLowerCase()
  if (s === 'stopped') return 'Stopped'
  if (s === 'paused') return 'Paused'
  if (s === 'under_review') return 'In review'
  if (program.needs_attention_now) return 'Action needed'
  return 'Active'
}

export function compactTreatmentStatus(t: PatientCareTreatmentDetail, program: PatientCareProgramCard): CompactCareStatus {
  const s = (t.status ?? '').toLowerCase()
  if (s === 'stopped') return 'Stopped'
  if (s === 'paused') return 'Paused'
  if (program.status === 'under_review') return 'In review'
  if (s === 'pending_approval') return 'In review'
  if (s === 'refill_pending') return 'In review'
  if (s === 'refill_due') return 'Action needed'
  if (program.needs_attention_now) return 'Action needed'
  return 'Active'
}

const STATUS_RANK: Record<CompactCareStatus, number> = {
  'Action needed': 0,
  'In review': 1,
  Active: 2,
  Paused: 3,
  Stopped: 4,
}

export function compactProgramCardStatus(
  program: PatientCareProgramCard,
  treatments: PatientCareTreatmentDetail[]
): CompactCareStatus {
  if (treatments.length === 0) return compactProgramStatus(program)
  const statuses = treatments.map((t) => compactTreatmentStatus(t, program))
  statuses.sort((a, b) => STATUS_RANK[a] - STATUS_RANK[b])
  return statuses[0] ?? compactProgramStatus(program)
}

/** Heavy outline only for active / in-review / action-needed presentation. */
export function programCardEmphasized(program: PatientCareProgramCard, treatments: PatientCareTreatmentDetail[]): boolean {
  const ps = compactProgramStatus(program)
  if (ps === 'Paused' || ps === 'Stopped') return false
  if (ps === 'Action needed' || ps === 'In review') return true
  if (treatments.length === 0) return ps === 'Active'
  return treatments.some((t) => {
    const st = compactTreatmentStatus(t, program)
    return st === 'Action needed' || st === 'In review' || st === 'Active'
  })
}

export function getTreatmentIdentityLabel(treatment: PatientCareTreatmentDetail): string {
  const explicit = treatment.display_name?.trim()
  if (explicit) {
    if (treatment.category && String(treatment.category).trim()) {
      return `${explicit} (${humanizeToken(String(treatment.category))})`
    }
    return explicit
  }
  const key = humanizeToken(treatment.treatment_key)
  if (treatment.category && String(treatment.category).trim()) {
    return `${key} (${humanizeToken(String(treatment.category))})`
  }
  return key
}

export function getProgramPrimaryLabel(
  program: PatientCareProgramCard,
  treatments: PatientCareTreatmentDetail[]
): string {
  const picked = getProgramDisplayTreatment(treatments)
  const categoryLabel = getProgramCategoryLabel(program)
  const fromTreatment = medicationOrTreatmentName(picked)
  if (fromTreatment && !equalsLoose(fromTreatment, categoryLabel)) return fromTreatment

  const title = program.title?.trim()
  if (title) {
    const cleanTitle = cleanLabel(title)
    if (!equalsLoose(cleanTitle, categoryLabel) && !/program|treatment/i.test(cleanTitle)) {
      return cleanTitle
    }
  }

  if (fromTreatment) return fromTreatment
  return `${categoryLabel} prescription`
}

export function getProgramCategoryLabel(program: PatientCareProgramCard): string {
  return humanizeToken(program.program_type)
}

export function getProgramDisplayTreatment(treatments: PatientCareTreatmentDetail[]): PatientCareTreatmentDetail | null {
  const activeFirst = treatments
    .filter((t) => (t.status ?? '').toLowerCase() !== 'stopped')
    .sort((a, b) => b.updated_at.localeCompare(a.updated_at))
  return (activeFirst[0] ?? treatments[0]) || null
}

function pickValue(
  treatment: PatientCareTreatmentDetail | null,
  ...keys: string[]
): string | null {
  if (!treatment) return null
  const dosage = treatment.dosage ?? {}
  const metadata = treatment.metadata ?? {}
  for (const key of keys) {
    const raw = dosage[key] ?? metadata[key]
    if (typeof raw === 'string' && raw.trim()) return raw.trim()
    if (typeof raw === 'number') return String(raw)
  }
  return null
}

/**
 * Pull the strength string from a treatment row.
 * Supports both the legacy flat shape (`strength_amount` / `strength_unit` / `dose_text`)
 * and the catalog-prescriber nested shape (`strength: { amount, unit }`).
 */
function extractStrengthLabel(treatment: PatientCareTreatmentDetail | null): string | null {
  if (!treatment) return null
  const dosage = (treatment.dosage ?? {}) as Record<string, unknown>
  const metadata = (treatment.metadata ?? {}) as Record<string, unknown>

  const nested =
    (dosage.strength as { amount?: unknown; unit?: unknown } | undefined) ??
    (metadata.strength as { amount?: unknown; unit?: unknown } | undefined)
  if (nested && typeof nested === 'object') {
    const amount = nested.amount
    const unit = typeof nested.unit === 'string' ? nested.unit.trim() : ''
    if (typeof amount === 'number' && Number.isFinite(amount) && unit) {
      return `${amount} ${unit}`
    }
    if (typeof amount === 'string' && amount.trim() && unit) {
      return `${amount.trim()} ${unit}`
    }
  }

  const flatAmount = pickValue(treatment, 'strength_amount', 'dose_amount')
  const flatUnit = pickValue(treatment, 'strength_unit', 'dose_unit')
  if (flatAmount && flatUnit) return `${flatAmount} ${flatUnit}`

  const flatText = pickValue(treatment, 'strength', 'dose', 'dose_text')
  if (flatText) return flatText
  return null
}

function cleanLabel(value: string): string {
  return value.replace(/\s*\((program|treatment|rx)\)\s*/gi, ' ').replace(/\s+/g, ' ').trim()
}

function equalsLoose(a: string | null | undefined, b: string | null | undefined): boolean {
  if (!a || !b) return false
  return cleanLabel(a).toLowerCase() === cleanLabel(b).toLowerCase()
}

function medicationOrTreatmentName(treatment: PatientCareTreatmentDetail | null): string | null {
  const med =
    pickValue(treatment, 'drug_display', 'drug_name', 'medication_name', 'name') ??
    pickValue(treatment, 'medication', 'compound_name')
  if (med) return cleanLabel(med)
  if (!treatment) return null
  return cleanLabel(getTreatmentIdentityLabel(treatment))
}

export function getProgramRegimenLine(
  program: PatientCareProgramCard,
  treatments: PatientCareTreatmentDetail[]
): string {
  const treatment = getProgramDisplayTreatment(treatments)
  const formBase = pickValue(treatment, 'form', 'route', 'administration_route')
  const form = formBase ? humanizeToken(formBase.toLowerCase().replace(/\s+/g, '_')) : null

  const strengthAmount = pickValue(treatment, 'strength_amount', 'dose_amount')
  const strengthUnit = pickValue(treatment, 'strength_unit', 'dose_unit')
  const strengthFlat = pickValue(treatment, 'strength', 'dose', 'dose_text')
  const dose = strengthAmount && strengthUnit ? `${strengthAmount} ${strengthUnit}` : strengthFlat

  const frequency = pickValue(treatment, 'frequency', 'sig_frequency', 'schedule')

  const parts = [form, dose, frequency].filter((v): v is string => !!v)
  if (parts.length > 0) return parts.join(' • ')
  return `${getProgramCategoryLabel(program)} regimen`
}

export function getProgramOperationalLine(
  program: PatientCareProgramCard,
  treatments: PatientCareTreatmentDetail[]
): string {
  if (treatments.some((t) => t.status === 'refill_pending' || t.status === 'pending_approval')) {
    return 'Review pending'
  }
  if (treatments.some((t) => t.status === 'approved' || t.status === 'rx_sent' || t.status === 'shipped')) {
    return 'Shipment processing'
  }
  if (treatments.some((t) => t.status === 'paused') || program.status === 'paused') {
    return 'Paused'
  }

  const treatment = getProgramDisplayTreatment(treatments)
  const nextRefill = pickValue(treatment, 'next_refill_due_at')
  if (nextRefill) return `Next refill ${formatIsoDateUs(nextRefill)}`

  const renewal = pickValue(treatment, 'next_visit_at', 'next_checkin_at')
  if (renewal) return `Renewal ${formatIsoDateUs(renewal)}`

  if (program.status === 'under_review') return 'Review pending'
  return 'On track'
}

export function programCardCtaLabel(program: PatientCareProgramCard, treatments: PatientCareTreatmentDetail[]): string {
  const statuses =
    treatments.length > 0
      ? treatments.map((t) => compactTreatmentStatus(t, program))
      : [compactProgramStatus(program)]

  if (statuses.some((s) => s === 'Paused') || program.status === 'paused') return 'Resume →'
  if (statuses.some((s) => s === 'Action needed') || program.needs_attention_now) return 'Complete step →'
  if (statuses.some((s) => s === 'In review') || program.status === 'under_review') return 'Check status →'
  if (statuses.every((s) => s === 'Stopped' || s === 'Paused') || program.status === 'stopped') return 'View details →'
  return 'Manage →'
}

/* ------------------------------------------------------------------ */
/* Per-treatment helpers (one card per medication)                    */
/* ------------------------------------------------------------------ */

/**
 * Structured medication label: plain medication name (+ optional formulation),
 * plus the dose as a separate field so the card can render it with a lighter weight
 * next to the name (e.g. "Tadalafil · 2.5 mg").
 */
export function getTreatmentMedicationParts(treatment: PatientCareTreatmentDetail): {
  name: string
  formSuffix: string | null
  dose: string | null
} {
  const name = medicationOrTreatmentName(treatment) ?? cleanLabel(getTreatmentIdentityLabel(treatment))

  const formRaw = pickValue(treatment, 'form', 'dosage_form', 'formulation')
  const routeRaw = pickValue(treatment, 'route', 'administration_route')
  const form = formRaw ? humanizeToken(formRaw.toLowerCase().replace(/\s+/g, '_')) : null
  const route = routeRaw ? humanizeToken(routeRaw.toLowerCase().replace(/\s+/g, '_')) : null

  let formSuffix: string | null = null
  if (form && route && !equalsLoose(form, route)) {
    formSuffix = `${route.toLowerCase()} ${form.toLowerCase()}`
  } else if (form) {
    formSuffix = form.toLowerCase()
  }

  const dose = extractStrengthLabel(treatment)
  return { name, formSuffix, dose }
}

/** Backwards-compatible flat medication label (name + optional form). */
export function getTreatmentMedicationLabel(treatment: PatientCareTreatmentDetail): string {
  const { name, formSuffix } = getTreatmentMedicationParts(treatment)
  return formSuffix ? `${name} (${formSuffix})` : name
}

/**
 * Route • frequency line (secondary text under medication name).
 * Dose is intentionally omitted here — it lives on the primary name line so it
 * isn't repeated.
 */
export function getTreatmentRegimenLine(
  treatment: PatientCareTreatmentDetail,
  program: PatientCareProgramCard
): string {
  const routeRaw = pickValue(treatment, 'route', 'administration_route')
  const route = routeRaw ? humanizeToken(routeRaw.toLowerCase().replace(/\s+/g, '_')).toLowerCase() : null

  const frequencyRaw = pickValue(treatment, 'frequency', 'sig_frequency', 'schedule')
  const frequency = frequencyRaw ? frequencyRaw.toLowerCase() : null

  const parts = [route, frequency].filter((v): v is string => !!v)
  if (parts.length > 0) return parts.join(' • ')
  return `${getProgramCategoryLabel(program)} regimen`
}

/** Optional small lifecycle hint (smallest, muted). Returns null if nothing meaningful. */
export function getTreatmentLifecycleLine(treatment: PatientCareTreatmentDetail): string | null {
  const nextRefill = pickValue(treatment, 'next_refill_due_at', 'next_refill_at')
  if (nextRefill) return `Next refill ${formatIsoDateUs(nextRefill)}`

  const renewal = pickValue(treatment, 'next_visit_at', 'next_checkin_at', 'renews_at')
  if (renewal) return `Renews ${formatIsoDateUs(renewal)}`

  const cadence = pickValue(treatment, 'renewal_cadence', 'renews_every')
  if (cadence) return `Renews ${cadence.toLowerCase()}`

  const started = treatment.started_at
  if (started) {
    const rel = relativeDurationFromIso(started)
    if (rel) return `Started ${rel}`
  }
  return null
}

/** Per-treatment status; re-exports compactTreatmentStatus as the card-level name. */
export function getTreatmentCardStatus(
  treatment: PatientCareTreatmentDetail,
  program: PatientCareProgramCard
): CompactCareStatus {
  return compactTreatmentStatus(treatment, program)
}

/** Heavy outline only when the individual treatment is Active / In review / Action needed. */
export function treatmentCardEmphasized(
  treatment: PatientCareTreatmentDetail,
  program: PatientCareProgramCard
): boolean {
  const s = compactTreatmentStatus(treatment, program)
  return s === 'Active' || s === 'In review' || s === 'Action needed'
}

/**
 * Per-treatment CTA.
 * Default: "View details →".
 * Only "Complete step →" when the medication itself requires a user action.
 */
export function getTreatmentCardCta(
  treatment: PatientCareTreatmentDetail,
  program: PatientCareProgramCard
): string {
  const s = compactTreatmentStatus(treatment, program)
  if (s === 'Action needed') return 'Complete step →'
  return 'View details →'
}

function relativeDurationFromIso(iso: string): string | null {
  const then = Date.parse(iso)
  if (Number.isNaN(then)) return null
  const diffMs = Date.now() - then
  if (diffMs < 0) return null
  const dayMs = 1000 * 60 * 60 * 24
  const days = Math.floor(diffMs / dayMs)
  if (days < 1) return 'today'
  if (days < 7) return `${days} day${days === 1 ? '' : 's'} ago`
  if (days < 30) {
    const w = Math.max(1, Math.floor(days / 7))
    return `${w} week${w === 1 ? '' : 's'} ago`
  }
  if (days < 365) {
    const mo = Math.max(1, Math.floor(days / 30))
    return `${mo} month${mo === 1 ? '' : 's'} ago`
  }
  const y = Math.max(1, Math.floor(days / 365))
  return `${y} year${y === 1 ? '' : 's'} ago`
}
