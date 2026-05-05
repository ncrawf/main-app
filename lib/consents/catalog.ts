/**
 * Consent catalog per system map Section 1K.11.
 *
 * Phase 3 establishes the catalog with placeholders. Legalops fills the
 * legal_text_snapshot_id values when documents land. Phase 4 production-launch
 * CI gate blocks until `legalops_pending: false` for all gating consents.
 */

import type { ConsentCatalogEntry, ConsentType } from './types';

const c = (
  type: ConsentType,
  args: {
    is_gating: boolean;
    display_title: string;
    summary: string;
    legalops_pending?: boolean;
  }
): ConsentCatalogEntry => ({
  type,
  version_hash: 'v0_pending_legalops',
  legal_text_snapshot_id: `legal.${type}.v0`,
  is_gating: args.is_gating,
  display_title: args.display_title,
  summary: args.summary,
  legal_text_source: args.legalops_pending !== false ? 'pending_legalops' : 'static',
  legalops_pending: args.legalops_pending !== false,
});

export const CONSENT_CATALOG: Record<ConsentType, ConsentCatalogEntry> = {
  telehealth_consent: c('telehealth_consent', {
    is_gating: true,
    display_title: 'Telehealth Consent',
    summary: 'Authorizes care via telehealth platform; required for any clinical interaction.',
  }),
  terms_and_conditions: c('terms_and_conditions', {
    is_gating: true,
    display_title: 'Terms & Conditions',
    summary: 'Platform terms governing account, payments, and use of services.',
  }),
  privacy_policy_acknowledgment: c('privacy_policy_acknowledgment', {
    is_gating: true,
    display_title: 'Privacy Policy',
    summary: 'HIPAA Notice of Privacy Practices acknowledgment.',
  }),
  off_label_rx_acknowledgment: c('off_label_rx_acknowledgment', {
    is_gating: false,
    display_title: 'Off-Label Prescription Acknowledgment',
    summary: 'Acknowledgment of off-label use for specific medications when applicable.',
  }),
  sms_marketing_opt_in: c('sms_marketing_opt_in', {
    is_gating: false,
    display_title: 'Legacy SMS Marketing Opt-In',
    summary: 'Legacy field; supersedes by `marketing_sms` on new accounts post-Section 1Q.13 ship date.',
  }),
  subscription_auto_renew: c('subscription_auto_renew', {
    is_gating: false,
    display_title: 'Auto-Renewal Authorization',
    summary: 'Authorization to charge payment method on monthly basis until canceled.',
  }),
  identity_verification_biometric: c('identity_verification_biometric', {
    is_gating: true,
    display_title: 'Biometric Identity Verification',
    summary: 'Authorization to verify identity via biometric comparison (selfie + ID).',
  }),
  research_or_deidentified_data: c('research_or_deidentified_data', {
    is_gating: false,
    display_title: 'Research / De-identified Data Use',
    summary: 'Optional consent for de-identified data use in research.',
  }),
  prescription_order_acceptance: c('prescription_order_acceptance', {
    is_gating: true,
    display_title: 'Prescription Order Acceptance',
    summary: 'Per-Rx acceptance acknowledgment; re-signed for each new prescription order.',
  }),
  marketing_sms: c('marketing_sms', {
    is_gating: false,
    display_title: 'SMS Marketing',
    summary: 'TCPA-compliant SMS marketing opt-in.',
  }),
  marketing_email: c('marketing_email', {
    is_gating: false,
    display_title: 'Email Marketing',
    summary: 'CASL/CAN-SPAM-compliant email marketing opt-in.',
  }),
  marketing_personalization_with_phi: c('marketing_personalization_with_phi', {
    is_gating: false,
    display_title: 'Personalized Marketing Using Health Info',
    summary: 'HIPAA marketing authorization for marketing communications that personalize using clinical data.',
  }),
  membership_service_agreement: c('membership_service_agreement', {
    is_gating: true,
    display_title: 'Membership Agreement',
    summary: 'Acceptance of subscription plan inclusions, scope, refund policy, and plan-tier provisions; metadata pins subscription_plan_id + tier + pricing_profile_version.',
  }),
};

export function getConsentCatalogEntry(type: ConsentType): ConsentCatalogEntry {
  return CONSENT_CATALOG[type];
}

/** CI-lint helper: list consent types with pending legalops content. */
export function findPendingLegalopsConsents(): ConsentCatalogEntry[] {
  return Object.values(CONSENT_CATALOG).filter((c) => c.legalops_pending);
}
