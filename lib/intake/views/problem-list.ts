/**
 * Problem list derived view — reads patient_clinical_assertions for
 * concept_type='condition' + assertion_type IN ('present', 'active_problem')
 * + non-superseded + non-retracted.
 *
 * Phase 3 ships signature; Phase 4 implements query.
 */

import type { ProblemListView } from './types';

export async function getProblemList(_patientId: string): Promise<ProblemListView> {
  throw new Error('lib/intake/views/problem-list.ts not implemented; Phase 4 runtime fills this in.');
}
