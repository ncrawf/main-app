/**
 * Derived-view types per system map Section 1K.0.5 (composed reads across canonical homes).
 *
 * Views are READ-ONLY. They compose data from claim ledger + reconciled entities +
 * observations + diagnostic artifacts + administrative entities. No DB writes.
 *
 * Phase 3 ships type contracts + function signatures with NotImplemented bodies.
 * Phase 4 implements the queries.
 */

import type { PatientMedication } from '../../entities/medications';
import type { PatientAllergy } from '../../entities/allergies';
import type { PatientImmunization } from '../../entities/immunizations';

/** A row from `patient_clinical_assertions` projected for view consumption. */
export interface ClinicalAssertionRow {
  id: string;
  patient_id: string;
  concept_id: string;
  concept_version: string;
  concept_type: string;
  assertion_type: string;
  status: string;
  authored_by: string;
  authority_rank: number;
  confidence: string;
  context: Record<string, unknown>;
  context_key: string;
  asserted_at: string;
  metadata?: Record<string, unknown>;
}

/** Active problem list — derived from patient_clinical_assertions. */
export interface ProblemListView {
  patient_id: string;
  generated_at: string;
  active_problems: ClinicalAssertionRow[];
  /** Resolved / past problems shown separately. */
  past_problems: ClinicalAssertionRow[];
}

/**
 * Allergy list — composes reconciled entities + claim-side unreconciled assertions.
 * Provides BOTH reconciled view (clean) AND awaiting-reconciliation queue.
 */
export interface AllergyListView {
  patient_id: string;
  generated_at: string;
  reconciled: PatientAllergy[];
  unreconciled_claims: ClinicalAssertionRow[];
}

/**
 * Med list — composes reconciled entities + claim-side unreconciled assertions.
 * Includes active + discontinued + on-hold meds for full clinical context.
 */
export interface MedListView {
  patient_id: string;
  generated_at: string;
  reconciled_active: PatientMedication[];
  reconciled_discontinued: PatientMedication[];
  reconciled_on_hold: PatientMedication[];
  unreconciled_claims: ClinicalAssertionRow[];
}

/** Family history — derived from claim ledger with assertion_type='family_history'. */
export interface FamilyHistoryView {
  patient_id: string;
  generated_at: string;
  rows: ClinicalAssertionRow[];
}

/**
 * Facesheet — composed snapshot for AI consumption + provider workspace UI.
 * Reads across multiple canonical homes per Section 1K.0.5.12.
 */
export interface FacesheetView {
  patient_id: string;
  generated_at: string;
  demographics: Record<string, unknown>;
  problem_list: ProblemListView;
  allergy_list: AllergyListView;
  med_list: MedListView;
  immunizations: PatientImmunization[];
  recent_vitals: Array<{ field_name: string; value: unknown; observed_at: string }>;
  recent_abnormal_labs: Array<{ id: string; name: string; value: unknown; reference_range: string; observed_at: string }>;
  active_consents: Array<{ type: string; accepted_at: string }>;
  active_subscriptions: Array<{ pricing_profile_id: string; status: string; current_period_end: string }>;
  external_providers: Array<{ relationship_type: string; provider_name: string; phone?: string }>;
  preferred_pharmacies: Array<{ pharmacy_name: string; phone: string; is_default: boolean }>;
  emergency_contacts: Array<{ name: string; relationship: string; phone_primary: string }>;
  active_advance_directives: Array<{ directive_type: string; executed_date: string }>;
}

/**
 * Care plan — composed view of orders + intent + treatment_targets + monitoring.
 */
export interface CarePlanView {
  patient_id: string;
  generated_at: string;
  pathway_code: string;
  active_orders: Array<{ id: string; status: string; metadata: Record<string, unknown> }>;
  patient_intent: ClinicalAssertionRow[];
  provider_treatment_targets: ClinicalAssertionRow[];
  monitoring_schedule: Array<{ field_name: string; cadence: string; next_due: string }>;
}

/**
 * Reconciliation queue — lists entity rows awaiting staff/provider workflow.
 */
export interface ReconciliationQueueView {
  generated_at: string;
  unreconciled_medications: PatientMedication[];
  unreconciled_allergies: PatientAllergy[];
  unreconciled_immunizations: PatientImmunization[];
  conflict_medications: PatientMedication[];
  conflict_allergies: PatientAllergy[];
}
