/**
 * Insurance details entity types — `patient_insurance_details` table.
 * Richer than the boolean `patients.has_insurance` column. Multi-row per patient
 * (primary + secondary + Rx + dental + vision).
 * Administrative entity per Section 1K.0.5.3.
 */

import type { AdministrativeEntityBase } from './types';

export const INSURANCE_COVERAGE_TYPE_VALUES = [
  'medical',
  'prescription',
  'dental',
  'vision',
] as const;
export type InsuranceCoverageType = (typeof INSURANCE_COVERAGE_TYPE_VALUES)[number];

export const INSURANCE_RELATIONSHIP_TO_SUBSCRIBER_VALUES = [
  'self',
  'spouse',
  'dependent',
  'other',
] as const;
export type InsuranceRelationshipToSubscriber =
  (typeof INSURANCE_RELATIONSHIP_TO_SUBSCRIBER_VALUES)[number];

export interface PatientInsuranceDetails extends AdministrativeEntityBase {
  coverage_type: InsuranceCoverageType;
  carrier_name: string;
  plan_name?: string;
  member_id: string;
  group_id?: string;
  subscriber_name?: string;
  subscriber_dob?: string;
  relationship_to_subscriber: InsuranceRelationshipToSubscriber;
  effective_date?: string;
  termination_date?: string;
  /** Pointer to insurance card image in Supabase storage. */
  card_image_storage_id?: string;
  verified_by_user_id?: string;
}
