/**
 * Module catalog aggregator per system map Section 1K.3 + 1K.0.5.
 *
 * Re-exports all 25 modules. Pathway composition files (e.g.,
 * `lib/intake/pathways/glp1.ts`) import individual modules and arrange them
 * into a runtime composition order.
 */

// Universal layer A
export { demographicsModule } from './universal/demographics';
export { baseConsentsModule } from './universal/base_consents';
export { identityVerificationModule } from './universal/identity_verification';
export { insurancePaymentReadinessModule } from './universal/insurance_payment_readiness';

// Conversion funnel (universal-scope but post-clinical)
export { smartLoadingModule } from './universal/smart_loading';
export { candidacyResultModule } from './universal/candidacy_result';
export { profileHardCommitModule } from './universal/profile_hard_commit';
export { membershipCheckoutModule } from './universal/membership_checkout';

// Clinical core layer B
export { medicationHistoryModule } from './clinical-core/medication_history';
export { allergyHistoryModule } from './clinical-core/allergy_history';
export { surgeryHistoryModule } from './clinical-core/surgery_history';

// Domain layer C
export { cardiometabolicModule } from './domain/cardiometabolic';
export { gastrointestinalModule } from './domain/gastrointestinal';
export { reproductiveModule } from './domain/reproductive';
export { mental_healthModule } from './domain/mental_health';
export { lifestyleModule } from './domain/lifestyle';

// GLP-1 pathway layer D
export { weighthistoryModule } from './pathway/glp1/weight_history';
export { weightlossattemptsModule } from './pathway/glp1/weight_loss_attempts';
export { priorglp1useModule } from './pathway/glp1/prior_glp1_use';
export { motivationandgoalsModule } from './pathway/glp1/motivation_and_goals';
export { eatingdisorderscreenModule } from './pathway/glp1/eating_disorder_screen';
export { cvsafetyextendedModule } from './pathway/glp1/cv_safety_extended';
export { bariatricsurgeryextendedModule } from './pathway/glp1/bariatric_surgery_extended';
export { gisafetyextendedModule } from './pathway/glp1/gi_safety_extended';
export { treatmentpreviewModule } from './pathway/glp1/treatment_preview';
