/**
 * Write handler for target='session_metadata'.
 * Canonical destination: UPDATE on intake_sessions.metadata (jsonb_set on the
 * specified field; original metadata preserved).
 *
 * Used for chief_complaint capture (Section 1K.0.5.7), provider mode-F
 * clarification flags, and other session-scoped state that doesn't warrant
 * a clinical_assertion.
 */

import type { z } from 'zod';
import type { SessionMetadataEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteSessionMetadataArgs {
  payload: z.infer<typeof SessionMetadataEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteSessionMetadataResult {
  id?: string;
  audit_event_id: string;
}

export async function writeSessionMetadata(
  args: WriteSessionMetadataArgs
): Promise<WriteSessionMetadataResult> {
  const result = await writeSingleEmission(
    { target: 'session_metadata', payload: args.payload },
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
