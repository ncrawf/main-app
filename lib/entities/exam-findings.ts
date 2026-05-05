/**
 * Exam finding entity types — `patient_exam_findings` table.
 * Provider-observed clinical signs per Section 1K.0.5.3.
 *
 * Provider-only path: clinical_visit_id NOT NULL; observed_by_provider_user_id NOT NULL.
 * No patient self-report path; not produced by intake. Used by Phase 4+ in-person
 * encounter workflows.
 */

export const FINDING_SEVERITY_VALUES = ['mild', 'moderate', 'severe'] as const;
export type FindingSeverity = (typeof FINDING_SEVERITY_VALUES)[number];

export const FINDING_LATERALITY_VALUES = ['left', 'right', 'bilateral', 'midline', 'n_a'] as const;
export type FindingLaterality = (typeof FINDING_LATERALITY_VALUES)[number];

/**
 * Anatomic site coding stub. Phase 3 leaves as free jsonb; Phase 4+ may add SNOMED-anatomy
 * vocabulary integration.
 */
export type AnatomicSite = Record<string, unknown>;

export interface PatientExamFinding {
  id: string;
  patient_id: string;
  /** Concept_id from finding registry. */
  finding_concept_id: string;
  severity: FindingSeverity;
  location?: AnatomicSite;
  laterality?: FindingLaterality;
  observed_at: string;
  /** REQUIRED: provider-only path. */
  observed_by_provider_user_id: string;
  /** REQUIRED: every finding ties to an encounter. */
  clinical_visit_id: string;
  free_text_notes?: string;
  supersedes_finding_id?: string;
  retracted_at?: string;
  retracted_reason?: string;
  metadata?: Record<string, unknown>;
}
