/**
 * External provider entity types — `patient_external_providers` table.
 * PCP, referring providers, specialty consultants, prior providers.
 * Administrative entity per Section 1K.0.5.3.
 */

import type { AdministrativeEntityBase } from './types';

export const EXTERNAL_PROVIDER_RELATIONSHIP_VALUES = [
  'pcp',
  'referring',
  'specialty_consultant',
  'prior_provider',
] as const;
export type ExternalProviderRelationship = (typeof EXTERNAL_PROVIDER_RELATIONSHIP_VALUES)[number];

export interface PatientExternalProvider extends AdministrativeEntityBase {
  relationship_type: ExternalProviderRelationship;
  provider_name: string;
  practice_name?: string;
  npi?: string;
  address?: Record<string, unknown>;
  phone?: string;
  fax?: string;
  email?: string;
  verified_by_user_id?: string;
  verified_at?: string;
}
