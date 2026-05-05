/**
 * Preferred pharmacy entity types — `patient_preferred_pharmacies` table.
 * Multi-row per patient (mail-order + retail + specialty).
 * Administrative entity per Section 1K.0.5.3.
 */

import type { AdministrativeEntityBase } from './types';

export interface PatientPreferredPharmacy extends AdministrativeEntityBase {
  pharmacy_name: string;
  pharmacy_chain?: string;
  address: Record<string, unknown>;
  phone: string;
  fax?: string;
  npi?: string;
  is_default: boolean;
}
