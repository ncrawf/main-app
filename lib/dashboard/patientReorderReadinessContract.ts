import type { PatientCareProgramCard, PatientCareOverview } from '@/lib/dashboard/getPatientCareOverview'
import type { RefillEligibleTreatment } from '@/lib/dashboard/getPatientRefillEligibleTreatments'
import type { TreatmentCheckinPrompt } from '@/lib/dashboard/getPatientTreatmentCheckinPrompts'
import {
  computeTreatmentReorderReadinessRows,
  type TreatmentReorderReadinessRow,
} from '@/lib/dashboard/computeTreatmentReorderReadiness'

/** API / mobile contract row (same shape as internal readiness rows). */
export type ReorderReadinessTreatmentDTO = TreatmentReorderReadinessRow

export type PatientReorderReadinessSnapshotDTO = {
  schema: 'patient_reorder_readiness_v1'
  patientId: string
  computedAt: string
  treatments: ReorderReadinessTreatmentDTO[]
}

/**
 * Single builder for dashboard, alerts, and GET /api/patient-portal/reorder-readiness.
 */
export function buildPatientReorderReadinessSnapshot(input: {
  patientId: string
  careOverview: Pick<PatientCareOverview, 'programs' | 'treatmentsByProgramId'>
  portalSession: boolean
  refillEligible: RefillEligibleTreatment[]
  checkinPrompts: TreatmentCheckinPrompt[]
}): PatientReorderReadinessSnapshotDTO {
  const { patientId, careOverview, portalSession, refillEligible, checkinPrompts } = input
  const programs = careOverview.programs as PatientCareProgramCard[]
  const treatments =
    programs.length > 0
      ? computeTreatmentReorderReadinessRows({
          patientId,
          treatmentsByProgramId: careOverview.treatmentsByProgramId,
          programs,
          checkinPrompts: portalSession ? checkinPrompts : [],
          refillEligible: portalSession ? refillEligible : [],
        })
      : []
  return {
    schema: 'patient_reorder_readiness_v1',
    patientId,
    computedAt: new Date().toISOString(),
    treatments,
  }
}
