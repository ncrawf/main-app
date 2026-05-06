/**
 * lib/intake/write barrel export.
 * Aggregates the orchestrator + 21 per-target write handlers.
 */

export {
  writeEmissions,
  writeSingleEmission,
  type WriteEmissionsArgs,
  type WriteEmissionsResult,
  type WriteEmissionResult,
} from './orchestrator';

export { writeClinicalAssertion } from './clinical_assertion';
export { writeObservation } from './observation';
export { writeMedication } from './medication';
export { writeAllergy } from './allergy';
export { writeImmunization } from './immunization';
export { writeExamFinding } from './exam_finding';
export { writeConsent } from './consent';
export { writePatientColumn } from './patient_column';
export { writePatientAddress } from './patient_address';
export { writePatientContact } from './patient_contact';
export { writeExternalProvider } from './external_provider';
export { writePreferredPharmacy } from './preferred_pharmacy';
export { writeEmergencyContact } from './emergency_contact';
export { writeAdvanceDirective } from './advance_directive';
export { writeInsuranceDetails } from './insurance_details';
export { writeSubscription } from './subscription';
export { writeTreatmentOrder } from './treatment_order';
export { writeCommerceOrder } from './commerce_order';
export { writeSessionMetadata } from './session_metadata';
export { writeEligibilityDecision } from './eligibility_decision';
export { writeAuditEventOnly } from './audit_event_only';
