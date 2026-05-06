/**
 * Write handler for target='advance_directive'.
 * Canonical destination: patient_advance_directives.
 */

import type { z } from 'zod';
import type { AdvanceDirectiveEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteAdvanceDirectiveArgs {
  payload: z.infer<typeof AdvanceDirectiveEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteAdvanceDirectiveResult {
  id?: string;
  audit_event_id: string;
}

export async function writeAdvanceDirective(
  args: WriteAdvanceDirectiveArgs
): Promise<WriteAdvanceDirectiveResult> {
  const result = await writeSingleEmission(
    { target: 'advance_directive', payload: args.payload },
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
