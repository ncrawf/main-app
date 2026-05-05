/**
 * Emergency contact entity types — `patient_emergency_contacts` table.
 * HIPAA-flagged contact list. Multi-row per patient.
 * Administrative entity per Section 1K.0.5.3.
 */

import type { AdministrativeEntityBase } from './types';

export const EMERGENCY_CONTACT_RELATIONSHIP_VALUES = [
  'spouse',
  'parent',
  'child',
  'sibling',
  'partner',
  'friend',
  'legal_guardian',
  'other',
] as const;
export type EmergencyContactRelationship = (typeof EMERGENCY_CONTACT_RELATIONSHIP_VALUES)[number];

export interface PatientEmergencyContact extends AdministrativeEntityBase {
  name: string;
  relationship: EmergencyContactRelationship;
  phone_primary: string;
  phone_secondary?: string;
  email?: string;
  address?: Record<string, unknown>;
  is_authorized_to_receive_phi: boolean;
  is_default: boolean;
  notes?: string;
}
