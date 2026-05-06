/**
 * Write handler for target='insurance_details'.
 * Canonical destination: patient_insurance_details.
 */

import type { z } from 'zod';
import type { InsuranceDetailsEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteInsuranceDetailsArgs {
  payload: z.infer<typeof InsuranceDetailsEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteInsuranceDetailsResult {
  id?: string;
  audit_event_id: string;
}

export async function writeInsuranceDetails(
  args: WriteInsuranceDetailsArgs
): Promise<WriteInsuranceDetailsResult> {
  const result = await writeSingleEmission(
    { target: 'insurance_details', payload: args.payload },
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
