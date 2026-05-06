/**
 * Write handler for target='allergy'.
 *
 * Canonical destination: patient_allergies per Section 1K.0.5.4 two-stage flow.
 * See lib/intake/write/medication.ts for the dual-emit pattern.
 */

import type { z } from 'zod';
import type { AllergyEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteAllergyArgs {
  payload: z.infer<typeof AllergyEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteAllergyResult {
  id?: string;
  audit_event_id: string;
}

export async function writeAllergy(args: WriteAllergyArgs): Promise<WriteAllergyResult> {
  const result = await writeSingleEmission(
    { target: 'allergy', payload: args.payload },
    {
      session_id: args.session_id,
      patient_id: args.patient_id,
      intake_response_id: args.intake_response_id,
      interaction_context: args.interaction_context,
      assertion_group_id: args.assertion_group_id,
    }
  );
  return { id: result.id ?? undefined, audit_event_id: result.audit_event_id };
}
