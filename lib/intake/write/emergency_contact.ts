/**
 * Write handler for target='emergency_contact'.
 * Canonical destination: patient_emergency_contacts.
 */

import type { z } from 'zod';
import type { EmergencyContactEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteEmergencyContactArgs {
  payload: z.infer<typeof EmergencyContactEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteEmergencyContactResult {
  id?: string;
  audit_event_id: string;
}

export async function writeEmergencyContact(
  args: WriteEmergencyContactArgs
): Promise<WriteEmergencyContactResult> {
  const result = await writeSingleEmission(
    { target: 'emergency_contact', payload: args.payload },
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
