/**
 * Care plan composed view per system map Section 1K.0.5.5 promotion criteria
 * (care plan stays as derived view in Phase 3; not a dedicated table).
 *
 * Composes: active orders + patient intent + provider treatment_targets +
 * monitoring schedule.
 *
 * Phase 3 ships signature; Phase 4 implements composed query.
 */

import type { CarePlanView } from './types';

export async function getCarePlan(
  _patientId: string,
  _pathwayCode: string
): Promise<CarePlanView> {
  throw new Error('lib/intake/views/care-plan.ts not implemented; Phase 4 runtime fills this in.');
}
