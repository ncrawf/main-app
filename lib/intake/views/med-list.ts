/**
 * Med list derived view — composes patient_medications (reconciled) +
 * patient_clinical_assertions (claim-side unreconciled med claims).
 *
 * Phase 3 ships signature; Phase 4 implements query.
 */

import type { MedListView } from './types';

export async function getMedList(_patientId: string): Promise<MedListView> {
  throw new Error('lib/intake/views/med-list.ts not implemented; Phase 4 runtime fills this in.');
}
