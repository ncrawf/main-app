/**
 * Write handler for target='treatment_order'.
 * Canonical destination: treatment_orders (existing table; Phase 4A Commit 2
 * adds intake_session_id + pathway_code + interaction_context columns).
 *
 * Used by Module 26 (membership_checkout submit) within the composite emit
 * to create the pending_clinical_review order that triggers the provider
 * review queue.
 */

import type { z } from 'zod';
import type { TreatmentOrderEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteTreatmentOrderArgs {
  payload: z.infer<typeof TreatmentOrderEmissionPayload>;
  session_id: string;
  patient_id: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteTreatmentOrderResult {
  id?: string;
  audit_event_id: string;
}

export async function writeTreatmentOrder(
  args: WriteTreatmentOrderArgs
): Promise<WriteTreatmentOrderResult> {
  const result = await writeSingleEmission(
    { target: 'treatment_order', payload: args.payload },
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
