/**
 * Routing targets enum + per-target emission payload schemas per system map
 * Section 1K.0.5.11. Pure types; no runtime logic. Each target maps 1:1 to a
 * write handler in `lib/intake/write/<target>.ts`.
 *
 * 21 target values cover every canonical home in the data architecture.
 */

import { z } from 'zod';
import { AUTHORED_BY_VALUES } from './authored-by';
import {
  ASSERTION_TYPE_VALUES,
  ASSERTION_STATUS_VALUES,
  CONFIDENCE_VALUES,
  SEVERITY_VALUES,
} from './assertion-types';

export const EMISSION_TARGETS = [
  'clinical_assertion',
  'observation',
  'medication',
  'allergy',
  'immunization',
  'exam_finding',
  'consent',
  'patient_column',
  'patient_address',
  'patient_contact',
  'external_provider',
  'preferred_pharmacy',
  'emergency_contact',
  'advance_directive',
  'insurance_details',
  'subscription',
  'treatment_order',
  'commerce_order',
  'session_metadata',
  'eligibility_decision',
  'audit_event_only',
] as const;

export type EmissionTarget = (typeof EMISSION_TARGETS)[number];

// =====================================================================
// Per-target emission payload schemas (Zod)
// =====================================================================

export const ClinicalAssertionEmissionPayload = z.object({
  concept_id: z.string(),
  concept_version: z.string(),
  assertion_type: z.enum(ASSERTION_TYPE_VALUES),
  status: z.enum(ASSERTION_STATUS_VALUES),
  authored_by: z.enum(AUTHORED_BY_VALUES),
  authored_by_user_id: z.string().uuid().optional(),
  confidence: z.enum(CONFIDENCE_VALUES),
  confidence_score: z.number().min(0).max(1).optional(),
  evidence_refs: z.array(z.record(z.string(), z.unknown())),
  context: z.record(z.string(), z.unknown()),
  context_key: z.string(),
  onset_at: z.string().datetime().optional(),
  onset_estimated: z.boolean().optional(),
  resolved_at: z.string().datetime().optional(),
  resolution_reason: z.string().optional(),
  severity: z.enum(SEVERITY_VALUES).optional(),
  notes_clinical_visit_id: z.string().uuid().optional(),
  supersedes_assertion_id: z.string().uuid().optional(),
  branch_path_token: z.string().optional(),
  source_intake_response_id: z.string().uuid().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const ObservationEmissionPayload = z.object({
  field_name: z.string(),
  value: z.unknown(),
  value_units: z.string().optional(),
  observed_at: z.string().datetime(),
  source: z.enum(['patient_self_reported', 'staff_measured', 'wearable', 'lab_derived', 'document_extracted']),
  observation_context: z.record(z.string(), z.unknown()).optional(),
  clinical_visit_id: z.string().uuid().optional(),
  recorded_by_user_id: z.string().uuid().optional(),
  supersedes_observation_id: z.string().uuid().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const MedicationEmissionPayload = z.object({
  medication_concept_id: z.string(),
  name_normalized: z.string(),
  name_as_reported: z.string().optional(),
  dose_value: z.number().optional(),
  dose_units: z.string().optional(),
  frequency: z.string().optional(),
  route: z.string().optional(),
  prn_indication: z.string().optional(),
  prescribed_by_user_id: z.string().uuid().optional(),
  prescribed_by_external_provider_id: z.string().uuid().optional(),
  prescribing_clinical_visit_id: z.string().uuid().optional(),
  treatment_order_id: z.string().uuid().optional(),
  start_date: z.string().date().optional(),
  end_date: z.string().date().optional(),
  status: z.enum(['proposed', 'active', 'discontinued', 'on_hold']),
  reconciliation_status: z.enum(['unreconciled', 'reconciled', 'conflict', 'declined_to_reconcile', 'superseded']),
  reconciled_by_user_id: z.string().uuid().optional(),
  reconciled_at: z.string().datetime().optional(),
  source_assertion_id: z.string().uuid().optional(),
  supersedes_medication_id: z.string().uuid().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const AllergyEmissionPayload = z.object({
  allergen_concept_id: z.string(),
  reaction_type: z.enum(['rash', 'anaphylaxis', 'swelling', 'gi', 'respiratory', 'other', 'unknown']),
  severity: z.enum(['mild', 'moderate', 'severe', 'life_threatening', 'unknown']),
  onset_age: z.number().int().nonnegative().optional(),
  onset_date: z.string().date().optional(),
  last_reaction_date: z.string().date().optional(),
  verified_by_user_id: z.string().uuid().optional(),
  reconciliation_status: z.enum(['unreconciled', 'reconciled', 'conflict', 'declined_to_reconcile', 'superseded']),
  source_assertion_id: z.string().uuid().optional(),
  clinical_visit_id: z.string().uuid().optional(),
  supersedes_allergy_id: z.string().uuid().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const ImmunizationEmissionPayload = z.object({
  cvx_code: z.string().optional(),
  vaccine_name: z.string(),
  administered_date: z.string().date(),
  lot_number: z.string().optional(),
  manufacturer: z.string().optional(),
  site: z.enum(['left_deltoid', 'right_deltoid', 'left_thigh', 'right_thigh', 'oral', 'nasal', 'other']).optional(),
  route: z.enum(['IM', 'SQ', 'PO', 'IN', 'ID', 'other']).optional(),
  administering_user_id: z.string().uuid().optional(),
  administering_external_org: z.string().optional(),
  clinical_visit_id: z.string().uuid().optional(),
  source: z.enum(['in_house_administration', 'external_record_imported', 'patient_self_reported']),
  reconciliation_status: z.enum(['unreconciled', 'reconciled', 'conflict', 'declined_to_reconcile', 'superseded']),
  source_assertion_id: z.string().uuid().optional(),
  supersedes_immunization_id: z.string().uuid().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const ExamFindingEmissionPayload = z.object({
  finding_concept_id: z.string(),
  severity: z.enum(['mild', 'moderate', 'severe']),
  location: z.record(z.string(), z.unknown()).optional(),
  laterality: z.enum(['left', 'right', 'bilateral', 'midline', 'n_a']).optional(),
  observed_at: z.string().datetime(),
  observed_by_provider_user_id: z.string().uuid(),
  clinical_visit_id: z.string().uuid(),
  free_text_notes: z.string().optional(),
  supersedes_finding_id: z.string().uuid().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const ConsentEmissionPayload = z.object({
  type: z.enum([
    'telehealth_consent',
    'terms_and_conditions',
    'privacy_policy_acknowledgment',
    'off_label_rx_acknowledgment',
    'sms_marketing_opt_in',
    'subscription_auto_renew',
    'identity_verification_biometric',
    'research_or_deidentified_data',
    'prescription_order_acceptance',
    'marketing_sms',
    'marketing_email',
    'marketing_personalization_with_phi',
    'membership_service_agreement',
  ]),
  version_hash: z.string(),
  legal_text_snapshot_id: z.string(),
  source_surface: z.enum([
    'intake_account_creation',
    'intake_state_gate',
    'intake_submit_to_provider',
    'checkout_subscription',
    'account_settings_sms',
    'account_settings_research',
    'provider_message',
    'ops_manual_capture',
  ]),
  captured_intake_response_id: z.string().uuid().optional(),
  captured_session_id: z.string().uuid().optional(),
  ip_address: z.string().optional(),
  device_context: z.record(z.string(), z.unknown()).optional(),
  captured_by: z.enum(['patient', 'staff_witnessed_in_person']).default('patient'),
  verifying_staff_user_id: z.string().uuid().optional(),
  staff_attestation_text: z.string().optional(),
  assertion_group_id: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const PatientColumnEmissionPayload = z.object({
  column: z.string(),
  value: z.unknown(),
});

export const PatientAddressEmissionPayload = z.object({
  street: z.string(),
  apt: z.string().optional(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string().default('US'),
  validated_by: z.enum(['usps', 'unvalidated']).optional(),
  is_default: z.boolean().optional(),
});

export const PatientContactEmissionPayload = z.object({
  kind: z.enum(['phone_mobile', 'phone_home', 'phone_work', 'email_personal', 'email_work']),
  value: z.string(),
  is_default: z.boolean().optional(),
  verified_at: z.string().datetime().optional(),
});

export const ExternalProviderEmissionPayload = z.object({
  relationship_type: z.enum(['pcp', 'referring', 'specialty_consultant', 'prior_provider']),
  provider_name: z.string(),
  practice_name: z.string().optional(),
  npi: z.string().optional(),
  address: z.record(z.string(), z.unknown()).optional(),
  phone: z.string().optional(),
  fax: z.string().optional(),
  email: z.string().optional(),
  is_active: z.boolean().default(true),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const PreferredPharmacyEmissionPayload = z.object({
  pharmacy_name: z.string(),
  pharmacy_chain: z.string().optional(),
  address: z.record(z.string(), z.unknown()),
  phone: z.string(),
  fax: z.string().optional(),
  npi: z.string().optional(),
  is_default: z.boolean().default(false),
  is_active: z.boolean().default(true),
});

export const EmergencyContactEmissionPayload = z.object({
  name: z.string(),
  relationship: z.enum(['spouse', 'parent', 'child', 'sibling', 'partner', 'friend', 'legal_guardian', 'other']),
  phone_primary: z.string(),
  phone_secondary: z.string().optional(),
  email: z.string().optional(),
  address: z.record(z.string(), z.unknown()).optional(),
  is_authorized_to_receive_phi: z.boolean().default(false),
  is_default: z.boolean().default(false),
  is_active: z.boolean().default(true),
  notes: z.string().optional(),
});

export const AdvanceDirectiveEmissionPayload = z.object({
  directive_type: z.enum(['DNR', 'DNI', 'POLST', 'healthcare_proxy', 'living_will']),
  executed_date: z.string().date(),
  expires_date: z.string().date().optional(),
  proxy_name: z.string().optional(),
  proxy_phone: z.string().optional(),
  proxy_relationship: z.string().optional(),
  document_storage_id: z.string().optional(),
  verified_by_user_id: z.string().uuid().optional(),
  is_active: z.boolean().default(true),
});

export const InsuranceDetailsEmissionPayload = z.object({
  coverage_type: z.enum(['medical', 'prescription', 'dental', 'vision']),
  carrier_name: z.string(),
  plan_name: z.string().optional(),
  member_id: z.string(),
  group_id: z.string().optional(),
  subscriber_name: z.string().optional(),
  subscriber_dob: z.string().date().optional(),
  relationship_to_subscriber: z.enum(['self', 'spouse', 'dependent', 'other']).default('self'),
  effective_date: z.string().date().optional(),
  termination_date: z.string().date().optional(),
  card_image_storage_id: z.string().optional(),
  is_active: z.boolean().default(true),
});

export const SubscriptionEmissionPayload = z.object({
  pricing_profile_id: z.string(),
  pricing_profile_version: z.string(),
  pathway_code: z.string(),
  plan_id: z.string(),
  status: z.enum(['pending', 'active', 'paused', 'cancelled', 'expired']),
  psp: z.enum(['stripe']).default('stripe'),
  stripe_subscription_id: z.string().optional(),
  stripe_price_id: z.string().optional(),
  stripe_customer_id: z.string().optional(),
  started_at: z.string().datetime().optional(),
  current_period_start: z.string().datetime().optional(),
  current_period_end: z.string().datetime().optional(),
  cancellation_window_days: z.number().int().nonnegative().default(2),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const TreatmentOrderEmissionPayload = z.object({
  pathway_code: z.string(),
  status: z.enum(['pending_clinical_review', 'approved', 'denied', 'cancelled', 'fulfilled']),
  intake_session_id: z.string().uuid(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const CommerceOrderEmissionPayload = z.object({
  order_kind: z.enum(['retail_in_clinic', 'retail_online']),
  line_items: z.array(z.record(z.string(), z.unknown())),
  total_cents: z.number().int().nonnegative(),
  currency: z.string().default('USD'),
  psp_payment_intent_id: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const SessionMetadataEmissionPayload = z.object({
  field: z.string(),
  value: z.unknown(),
});

export const EligibilityDecisionEmissionPayload = z.object({
  pathway_code: z.string(),
  rule_id: z.string(),
  rule_version: z.string(),
  result: z.enum(['eligible', 'review_required', 'blocked']),
  reasons: z.array(z.record(z.string(), z.unknown())).default([]),
  input_refs: z.array(z.record(z.string(), z.unknown())),
  inputs_hash: z.string(),
  input_snapshot: z.record(z.string(), z.unknown()).optional(),
  decided_by: z.enum(['rule_engine', 'provider_override', 'system_derived']).default('rule_engine'),
  decided_by_user_id: z.string().uuid().optional(),
  supersedes_decision_id: z.string().uuid().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const AuditEventOnlyEmissionPayload = z.object({
  action: z.string(),
  resource_type: z.string(),
  resource_id: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

// =====================================================================
// Discriminated union: Emission
// =====================================================================

/**
 * Top-level discriminated union for emissions. Used by intake question definitions
 * (`Question.emissions: Emission[]`). The `target` field selects which payload schema
 * applies; the runtime dispatches to the matching write handler.
 */
export type Emission =
  | { target: 'clinical_assertion'; payload: z.infer<typeof ClinicalAssertionEmissionPayload> }
  | { target: 'observation'; payload: z.infer<typeof ObservationEmissionPayload> }
  | { target: 'medication'; payload: z.infer<typeof MedicationEmissionPayload> }
  | { target: 'allergy'; payload: z.infer<typeof AllergyEmissionPayload> }
  | { target: 'immunization'; payload: z.infer<typeof ImmunizationEmissionPayload> }
  | { target: 'exam_finding'; payload: z.infer<typeof ExamFindingEmissionPayload> }
  | { target: 'consent'; payload: z.infer<typeof ConsentEmissionPayload> }
  | { target: 'patient_column'; payload: z.infer<typeof PatientColumnEmissionPayload> }
  | { target: 'patient_address'; payload: z.infer<typeof PatientAddressEmissionPayload> }
  | { target: 'patient_contact'; payload: z.infer<typeof PatientContactEmissionPayload> }
  | { target: 'external_provider'; payload: z.infer<typeof ExternalProviderEmissionPayload> }
  | { target: 'preferred_pharmacy'; payload: z.infer<typeof PreferredPharmacyEmissionPayload> }
  | { target: 'emergency_contact'; payload: z.infer<typeof EmergencyContactEmissionPayload> }
  | { target: 'advance_directive'; payload: z.infer<typeof AdvanceDirectiveEmissionPayload> }
  | { target: 'insurance_details'; payload: z.infer<typeof InsuranceDetailsEmissionPayload> }
  | { target: 'subscription'; payload: z.infer<typeof SubscriptionEmissionPayload> }
  | { target: 'treatment_order'; payload: z.infer<typeof TreatmentOrderEmissionPayload> }
  | { target: 'commerce_order'; payload: z.infer<typeof CommerceOrderEmissionPayload> }
  | { target: 'session_metadata'; payload: z.infer<typeof SessionMetadataEmissionPayload> }
  | { target: 'eligibility_decision'; payload: z.infer<typeof EligibilityDecisionEmissionPayload> }
  | { target: 'audit_event_only'; payload: z.infer<typeof AuditEventOnlyEmissionPayload> };
