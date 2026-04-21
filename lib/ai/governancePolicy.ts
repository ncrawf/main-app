export const AI_GOVERNANCE_POLICY = {
  minConfidenceForAutofill: 0.4,
  patientVisibilityRequiresReviewedAccepted: true,
  allowAutonomousTreatmentChanges: false,
  allowAutonomousClinicalMessaging: false,
  allowAutonomousTaskCompletion: false,
} as const

export function clampConfidence(v: number | null | undefined): number | null {
  if (typeof v !== 'number' || !Number.isFinite(v)) return null
  if (v < 0) return 0
  if (v > 1) return 1
  return v
}
