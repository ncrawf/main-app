/**
 * Facesheet composed view — patient summary across all canonical homes per
 * Section 1K.0.5.12 AI consumption pattern.
 *
 * Composes: demographics + problem_list + allergy_list + med_list +
 * immunizations + recent_vitals + recent_abnormal_labs + active_consents +
 * active_subscriptions + external_providers + preferred_pharmacies +
 * emergency_contacts + active_advance_directives.
 *
 * Phase 3 ships signature; Phase 4 implements composed query.
 */

import type { FacesheetView } from './types';

export async function getFacesheet(_patientId: string): Promise<FacesheetView> {
  throw new Error('lib/intake/views/facesheet.ts not implemented; Phase 4 runtime fills this in.');
}
