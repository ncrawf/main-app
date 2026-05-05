/**
 * Consent types per system map Section 1K.11.
 *
 * The 13-value `type` enum matches the canonical patient_consents.type column
 * (extended with `membership_service_agreement` per Section 1K.0.5 + Phase A
 * companion edit).
 */

export const CONSENT_TYPE_VALUES = [
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
] as const;

export type ConsentType = (typeof CONSENT_TYPE_VALUES)[number];

export const CONSENT_SOURCE_SURFACE_VALUES = [
  'intake_account_creation',
  'intake_state_gate',
  'intake_submit_to_provider',
  'checkout_subscription',
  'account_settings_sms',
  'account_settings_research',
  'provider_message',
  'ops_manual_capture',
] as const;

export type ConsentSourceSurface = (typeof CONSENT_SOURCE_SURFACE_VALUES)[number];

export const CONSENT_CAPTURED_BY_VALUES = ['patient', 'staff_witnessed_in_person'] as const;
export type ConsentCapturedBy = (typeof CONSENT_CAPTURED_BY_VALUES)[number];

/**
 * `patient_consents` row shape.
 */
export interface PatientConsent {
  id: string;
  patient_id?: string;
  type: ConsentType;
  version_hash: string;
  legal_text_snapshot_id: string;
  accepted_at: string;
  source_surface: ConsentSourceSurface;
  captured_intake_response_id?: string;
  captured_session_id?: string;
  /** Mirror to clinical_assertions when applicable (rare; see Section 1K.0.5 anti-patterns). */
  captured_atom_id?: string;
  ip_address?: string;
  device_context?: Record<string, unknown>;
  captured_by: ConsentCapturedBy;
  verifying_staff_user_id?: string;
  staff_attestation_text?: string;
  revoked_at?: string;
  revoked_reason?: string;
  /** Supersession chain for revocation + re-acceptance. */
  supersedes_consent_id?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Catalog entry for a typed consent kind. Maps consent type → versioned
 * legal text + governance metadata. Phase 4 runtime reads from this catalog
 * to render consent screens with the correct legal_text_snapshot_id.
 */
export interface ConsentCatalogEntry {
  type: ConsentType;
  version_hash: string;
  legal_text_snapshot_id: string;
  /** Whether absence of this consent BLOCKS a patient action. */
  is_gating: boolean;
  /** Patient-facing display title (typically maps to a UI toggle label). */
  display_title: string;
  /** Patient-facing summary (1-2 sentences). */
  summary: string;
  /** Where the legal document is sourced from when rendered (resolved by content service). */
  legal_text_source: 'static' | 'cms' | 'pending_legalops';
  /** Marker for documents still pending legalops authoring. */
  legalops_pending: boolean;
}
