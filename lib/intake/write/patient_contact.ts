/**
 * Write handler for target='patient_contact'.
 * Canonical destination: patient_contacts (multi-row phone/email history).
 */

import type { z } from 'zod';
import type { PatientContactEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WritePatientContactArgs {
  payload: z.infer<typeof PatientContactEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WritePatientContactResult {
  id?: string;
  audit_event_id: string;
}

export async function writePatientContact(
  args: WritePatientContactArgs
): Promise<WritePatientContactResult> {
  const result = await writeSingleEmission(
    { target: 'patient_contact', payload: args.payload },
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
