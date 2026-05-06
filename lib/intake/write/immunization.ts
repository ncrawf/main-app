/**
 * Write handler for target='immunization'.
 *
 * Canonical destination: patient_immunizations per Section 1K.0.5.4 two-stage flow.
 */

import type { z } from 'zod';
import type { ImmunizationEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteImmunizationArgs {
  payload: z.infer<typeof ImmunizationEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteImmunizationResult {
  id?: string;
  audit_event_id: string;
}

export async function writeImmunization(args: WriteImmunizationArgs): Promise<WriteImmunizationResult> {
  const result = await writeSingleEmission(
    { target: 'immunization', payload: args.payload },
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
