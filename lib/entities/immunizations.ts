/**
 * Immunization entity types — `patient_immunizations` table.
 * CVX-coded immunization record per Section 1K.0.5.3.
 */

import type { ReconciledEntityBase } from './types';

export const IMMUNIZATION_SITE_VALUES = [
  'left_deltoid',
  'right_deltoid',
  'left_thigh',
  'right_thigh',
  'oral',
  'nasal',
  'other',
] as const;
export type ImmunizationSite = (typeof IMMUNIZATION_SITE_VALUES)[number];

export const IMMUNIZATION_ROUTE_VALUES = ['IM', 'SQ', 'PO', 'IN', 'ID', 'other'] as const;
export type ImmunizationRoute = (typeof IMMUNIZATION_ROUTE_VALUES)[number];

export const IMMUNIZATION_SOURCE_VALUES = [
  'in_house_administration',
  'external_record_imported',
  'patient_self_reported',
] as const;
export type ImmunizationSource = (typeof IMMUNIZATION_SOURCE_VALUES)[number];

export interface PatientImmunization extends ReconciledEntityBase {
  cvx_code?: string;
  vaccine_name: string;
  administered_date: string;
  lot_number?: string;
  manufacturer?: string;
  site?: ImmunizationSite;
  route?: ImmunizationRoute;
  administering_user_id?: string;
  administering_external_org?: string;
  clinical_visit_id?: string;
  source: ImmunizationSource;
}
