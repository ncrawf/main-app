/**
 * Advance directive entity types — `patient_advance_directives` table.
 * DNR / DNI / POLST / healthcare proxy / living will.
 * Administrative entity per Section 1K.0.5.3.
 */

import type { AdministrativeEntityBase } from './types';

export const ADVANCE_DIRECTIVE_TYPE_VALUES = [
  'DNR',
  'DNI',
  'POLST',
  'healthcare_proxy',
  'living_will',
] as const;
export type AdvanceDirectiveType = (typeof ADVANCE_DIRECTIVE_TYPE_VALUES)[number];

export interface PatientAdvanceDirective extends AdministrativeEntityBase {
  directive_type: AdvanceDirectiveType;
  executed_date: string;
  expires_date?: string;
  proxy_name?: string;
  proxy_phone?: string;
  proxy_relationship?: string;
  /** Pointer to PDF in Supabase storage. */
  document_storage_id?: string;
  verified_by_user_id?: string;
}
