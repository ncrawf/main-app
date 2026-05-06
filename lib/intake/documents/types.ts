/**
 * Phase 4D Section 1O — typed registry for patient document routing.
 *
 * Source of truth for input_type vocabulary (Section 1O.3) and the
 * input_type → domain_target routing matrix (Section 1O.4). The migration
 * `20260508120000_phase_4d_artifact_pipeline.sql` mirrors these vocabularies
 * in DB CHECK constraints; CI lint will enforce parity in a future phase.
 *
 * Per primitives addendum #6 (enums-as-code-as-config): all enums centrally
 * defined in TS; never invented inline at write sites.
 */

import { z } from 'zod';

// =====================================================================
// Section 1O.3 input-type vocabulary (controlled enum)
// =====================================================================

export const INPUT_TYPES = [
  // Diagnostics / labs
  'lab_document',                  // vendor-issued lab PDF/image (orphan-bind via 1L.5 if no lab_order_id)
  'prior_lab_report',              // patient-uploaded historical lab — never displaces vendor-issued
  'lab_intent_to_order',           // structured signal; no file
  'lab_completion_evidence',       // kit return confirmation / requisition pickup confirmation

  // Identity verification (Section 1O.11 strictest sensitivity)
  'government_id_front',
  'government_id_back',
  'drivers_license_front',
  'drivers_license_back',
  'selfie_face_verification',

  // Insurance (Section 1O.11 strict sensitivity)
  'insurance_card_front',
  'insurance_card_back',
  'payer_eligibility_document',

  // Medication / supplement evidence
  'current_medication_photo',
  'supplement_stack_photo',

  // Clinical / symptom media
  'clinical_media_photo',          // subtype hint in metadata: hair / skin / body_composition / wound / etc.

  // General medical records
  'general_medical_record',        // PDFs of prior visits, panels, outside reports

  // Triage entry only — NEVER a permanent destination per Section 1O.3 hard rule.
  'unclassified_pending_review',
] as const;

export type InputType = (typeof INPUT_TYPES)[number];

// =====================================================================
// Section 1O.4 domain target enum + routing matrix
// =====================================================================

export const DOMAIN_TARGETS = [
  'patient_diagnostic_reports',     // labs (1L)
  'patient_identity_verifications', // ID + selfie (1J / 1J.4 + Section 1O.4.1)
  'payer_eligibility_documents',    // insurance (Section 1O.4.2 minimal target)
  'external_clinical_documents',    // medication evidence + clinical media + records
  'patient_state_observations',     // structured signals routed to 1M
  'intake_responses',               // structured-only flags (lab_intent_to_order)
  'lab_orders',                     // lab_completion_evidence
  'none_pending_triage',            // unclassified_pending_review
] as const;

export type DomainTarget = (typeof DOMAIN_TARGETS)[number];

/**
 * The Section 1O.4 routing matrix. SOURCE OF TRUTH on the TS side; mirrored
 * in route_patient_document() SQL function CASE statement. CI lint will
 * confirm parity in a future phase.
 */
export const INPUT_TYPE_TO_DOMAIN_TARGET: Record<InputType, DomainTarget> = {
  lab_document: 'patient_diagnostic_reports',
  prior_lab_report: 'external_clinical_documents',
  lab_intent_to_order: 'intake_responses',
  lab_completion_evidence: 'lab_orders',
  government_id_front: 'patient_identity_verifications',
  government_id_back: 'patient_identity_verifications',
  drivers_license_front: 'patient_identity_verifications',
  drivers_license_back: 'patient_identity_verifications',
  selfie_face_verification: 'patient_identity_verifications',
  insurance_card_front: 'payer_eligibility_documents',
  insurance_card_back: 'payer_eligibility_documents',
  payer_eligibility_document: 'payer_eligibility_documents',
  current_medication_photo: 'external_clinical_documents',
  supplement_stack_photo: 'external_clinical_documents',
  clinical_media_photo: 'external_clinical_documents',
  general_medical_record: 'external_clinical_documents',
  unclassified_pending_review: 'none_pending_triage',
};

/**
 * Section 1O.11 access tiering. Determines who can read the row + whether
 * a SensitiveAccessReason is required per Section 1J.10.
 */
export const SENSITIVITY_TIERS = ['strictest', 'strict', 'standard_clinical'] as const;
export type SensitivityTier = (typeof SENSITIVITY_TIERS)[number];

export const INPUT_TYPE_TO_SENSITIVITY: Record<InputType, SensitivityTier> = {
  // Strictest: identity images
  government_id_front: 'strictest',
  government_id_back: 'strictest',
  drivers_license_front: 'strictest',
  drivers_license_back: 'strictest',
  selfie_face_verification: 'strictest',

  // Strict: insurance
  insurance_card_front: 'strict',
  insurance_card_back: 'strict',
  payer_eligibility_document: 'strict',

  // Standard clinical: everything else
  lab_document: 'standard_clinical',
  prior_lab_report: 'standard_clinical',
  lab_intent_to_order: 'standard_clinical',
  lab_completion_evidence: 'standard_clinical',
  current_medication_photo: 'standard_clinical',
  supplement_stack_photo: 'standard_clinical',
  clinical_media_photo: 'standard_clinical',
  general_medical_record: 'standard_clinical',
  unclassified_pending_review: 'standard_clinical',
};

// =====================================================================
// Section 1O.2 capture-surface enum
// =====================================================================

export const CAPTURE_SURFACES = [
  'intake',
  'messaging',
  'action_item',
  'ops_manual_upload',
  'partner_integration',
] as const;

export type CaptureSurface = (typeof CAPTURE_SURFACES)[number];

// =====================================================================
// Section 1O.6 file-type allowlist (matches DB bucket allowed_mime_types)
// =====================================================================

export const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/heic',
  'image/heif',
  'image/webp',
] as const;

export type AllowedMimeType = (typeof ALLOWED_MIME_TYPES)[number];

export function isAllowedMimeType(mime: string): mime is AllowedMimeType {
  return (ALLOWED_MIME_TYPES as readonly string[]).includes(mime);
}

// =====================================================================
// Manifest status + uploaded_by + correction_reason enums
// =====================================================================

export const ROUTING_STATUSES = [
  'captured', 'routed', 'verified', 'failed', 'reclassified', 'superseded',
] as const;
export type RoutingStatus = (typeof ROUTING_STATUSES)[number];

export const UPLOADED_BY_KINDS = ['patient', 'staff', 'system', 'partner'] as const;
export type UploadedByKind = (typeof UPLOADED_BY_KINDS)[number];

export const CORRECTION_REASONS = [
  'patient_misuploaded_to_wrong_prompt',
  'staff_misclassified_at_capture',
  'partner_metadata_wrong',
  'data_quality_remediation',
] as const;
export type CorrectionReason = (typeof CORRECTION_REASONS)[number];

// =====================================================================
// Zod schemas for the TS API (Section 1O.7 validation discipline)
// =====================================================================

export const RoutePatientDocumentArgs = z.object({
  patient_id: z.string().uuid().optional(),                    // optional in pre-account flow per 1J.6
  input_type: z.enum(INPUT_TYPES),
  capture_surface: z.enum(CAPTURE_SURFACES),
  capture_source_id: z.string().optional(),                    // intake_session_id / message_id / action_item_id / partner_source_id
  capture_source_module_id: z.string().optional(),

  // File payload — caller has already validated MIME locally; the TS API
  // re-validates against ALLOWED_MIME_TYPES and uploads to canonical bucket.
  file_bytes: z.instanceof(Uint8Array).optional(),             // optional for non-file routings (lab_intent_to_order)
  file_name: z.string().optional(),
  mime_type: z.string().optional(),
  size_bytes: z.number().int().nonnegative().optional(),
  content_hash_sha256: z.string().optional(),

  uploaded_by: z.enum(UPLOADED_BY_KINDS).default('patient'),
  uploaded_by_staff_id: z.string().uuid().optional(),

  // Phase 4C-pre primitives (passed through to RPC).
  org_id: z.string().uuid().optional(),
  data_environment: z.enum(['production', 'staging', 'internal_qa', 'synthetic']).optional(),
  actor_kind: z.enum(['patient', 'staff_user', 'provider_user', 'system', 'cron', 'webhook', 'partner_adapter', 'ai_engine']).optional(),

  // Per-input-type metadata (subtype hints, payer fields, etc.).
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export type RoutePatientDocumentArgs = z.infer<typeof RoutePatientDocumentArgs>;

export interface RoutePatientDocumentResult {
  routing_id: string;
  domain_target: DomainTarget;
  source_object_id: string | null;
  storage_path: string | null;
  audit_event_id: string;
}
