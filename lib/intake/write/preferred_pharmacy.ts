/**
 * Write handler for target='preferred_pharmacy'.
 * Canonical destination: patient_preferred_pharmacies.
 */

import type { z } from 'zod';
import type { PreferredPharmacyEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WritePreferredPharmacyArgs {
  payload: z.infer<typeof PreferredPharmacyEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WritePreferredPharmacyResult {
  id?: string;
  audit_event_id: string;
}

export async function writePreferredPharmacy(
  args: WritePreferredPharmacyArgs
): Promise<WritePreferredPharmacyResult> {
  const result = await writeSingleEmission(
    { target: 'preferred_pharmacy', payload: args.payload },
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
