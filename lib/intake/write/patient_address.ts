/**
 * Write handler for target='patient_address'.
 * Canonical destination: patient_addresses (multi-row history per Section 1K.0.5.1).
 */

import type { z } from 'zod';
import type { PatientAddressEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WritePatientAddressArgs {
  payload: z.infer<typeof PatientAddressEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WritePatientAddressResult {
  id?: string;
  audit_event_id: string;
}

export async function writePatientAddress(
  args: WritePatientAddressArgs
): Promise<WritePatientAddressResult> {
  const result = await writeSingleEmission(
    { target: 'patient_address', payload: args.payload },
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
