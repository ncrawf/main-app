/**
 * Write handler for target='observation'.
 *
 * Canonical destination: patient_state_observations per Section 1M.
 *
 * Phase 4A: thin delegation to the writeEmissions orchestrator.
 */

import type { z } from 'zod';
import type { ObservationEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteObservationArgs {
  payload: z.infer<typeof ObservationEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteObservationResult {
  id?: string;
  audit_event_id: string;
}

export async function writeObservation(
  args: WriteObservationArgs
): Promise<WriteObservationResult> {
  const result = await writeSingleEmission(
    { target: 'observation', payload: args.payload },
    {
      session_id: args.session_id,
      patient_id: args.patient_id,
      intake_response_id: args.intake_response_id,
      interaction_context: args.interaction_context,
      assertion_group_id: args.assertion_group_id,
    }
  );
  return {
    id: result.id ?? undefined,
    audit_event_id: result.audit_event_id,
  };
}
