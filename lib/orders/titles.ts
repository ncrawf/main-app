import type { TreatmentOrderStatus } from './treatmentOrderTransitions'

/**
 * Core product rule: before clinician approval, titles must stay BROAD
 * (e.g. "ED treatment — pending prescription"). After approval, titles can
 * surface the specific prescribed medication.
 */
export function isSpecificTitleAllowed(status: string): boolean {
  // Anything *past* clinician review is allowed to surface the prescribed medication.
  // pending_clinician_review must remain broad regardless of any suggested med.
  return status !== 'pending_clinician_review'
}

const PROGRAM_BROAD_LABELS: Record<string, string> = {
  weight_loss: 'Weight loss treatment',
  sexual_health_male: 'ED treatment',
  sexual_health_female: 'Sexual health treatment',
  hair_growth: 'Hair growth treatment',
  energy_recovery: 'Energy + recovery treatment',
  longevity: 'Longevity treatment',
  muscle_performance: 'Muscle performance treatment',
  custom: 'Treatment',
}

export function broadTitleForProgramType(programType: string | null | undefined): string {
  if (!programType) return 'Treatment'
  return PROGRAM_BROAD_LABELS[programType] ?? 'Treatment'
}

/**
 * Internal (staff) order title. Staff always see the specific medication if known,
 * and the broad program label only as a fallback. This view is operational truth.
 */
export function staffTreatmentOrderTitle(opts: {
  treatmentDisplayName: string | null
  programType: string | null
}): string {
  return (
    opts.treatmentDisplayName?.trim() ||
    broadTitleForProgramType(opts.programType) ||
    'Treatment'
  )
}

/**
 * Patient-facing order title. Enforces the broad-vs-specific rule.
 * Used when a patient-facing Orders surface is wired in later — kept in this
 * module so the rule lives alongside the staff title for symmetry.
 */
export function patientTreatmentOrderTitle(opts: {
  status: TreatmentOrderStatus | string
  treatmentDisplayName: string | null
  programType: string | null
}): string {
  const broad = broadTitleForProgramType(opts.programType)
  if (!isSpecificTitleAllowed(opts.status)) {
    if (opts.status === 'pending_clinician_review') {
      return `${broad} — pending prescription`
    }
    return broad
  }
  return opts.treatmentDisplayName?.trim() || broad
}
