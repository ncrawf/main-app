/**
 * Vital `field_name` allowlist for `patient_state_observations` per system map
 * Section 1M.
 *
 * Observations carry a `field_name` column drawn from this allowlist. Phase 4 CI lint
 * validates that observation writes use only registered field_names. Future Section 1M
 * additions extend this file.
 *
 * Distinct from clinical concept_ids (which apply to claim ledger). This vocabulary
 * lives here because vitals/PROMs cross the observation/concept boundary.
 */

export const VITAL_FIELD_NAMES = [
  // Vitals
  'vital.height_cm',
  'vital.height_in',
  'vital.weight_kg',
  'vital.weight_lbs',
  'vital.weight_max_kg',
  'vital.weight_max_lbs',
  'vital.bmi',
  'vital.bp_systolic_mmhg',
  'vital.bp_diastolic_mmhg',
  'vital.heart_rate_bpm',
  'vital.respiratory_rate_per_min',
  'vital.temperature_c',
  'vital.temperature_f',
  'vital.oxygen_saturation_pct',

  // Patient-reported outcome measures (PROMs)
  'score.phq9',
  'score.gad7',
  'score.audit_c',
  'score.iief5',
  'score.pain_0_10',

  // Glucose / metabolic (self-report from CGM, fingerstick, etc.)
  'glucose.fasting_mg_dl',
  'glucose.postprandial_mg_dl',
  'glucose.random_mg_dl',
  'glucose.cgm_avg_mg_dl_24h',

  // Sleep / activity (wearable-friendly)
  'sleep.total_minutes',
  'activity.steps_daily',
  'activity.resting_heart_rate_bpm',
] as const;

export type VitalFieldName = (typeof VITAL_FIELD_NAMES)[number];

/** Runtime check (Phase 4 CI lint): is this field_name in the allowlist? */
export function isValidVitalFieldName(fieldName: string): fieldName is VitalFieldName {
  return (VITAL_FIELD_NAMES as readonly string[]).includes(fieldName);
}
