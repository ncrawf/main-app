/**
 * Allergy list derived view — composes patient_allergies (reconciled) +
 * patient_clinical_assertions (claim-side unreconciled allergy claims).
 *
 * Phase 3 ships signature; Phase 4 implements query.
 */

import type { AllergyListView } from './types';

export async function getAllergyList(_patientId: string): Promise<AllergyListView> {
  throw new Error('lib/intake/views/allergy-list.ts not implemented; Phase 4 runtime fills this in.');
}
