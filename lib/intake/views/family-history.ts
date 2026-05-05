/**
 * Family history derived view — reads patient_clinical_assertions for
 * assertion_type='family_history' + non-superseded + non-retracted.
 *
 * Phase 3 ships signature; Phase 4 implements query.
 */

import type { FamilyHistoryView } from './types';

export async function getFamilyHistory(_patientId: string): Promise<FamilyHistoryView> {
  throw new Error('lib/intake/views/family-history.ts not implemented; Phase 4 runtime fills this in.');
}
