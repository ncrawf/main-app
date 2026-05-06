/**
 * Write handler for target='subscription'.
 * Canonical destination: subscriptions per Section 1Q.23.
 *
 * Used by Module 26 (membership_checkout) within a multi-emission batch:
 * 3 consents + 1 subscription + 1 treatment_order, all bound by the same
 * assertion_group_id. Caller should use writeEmissions directly for that
 * composite; this handler is for standalone subscription writes.
 */

import type { z } from 'zod';
import type { SubscriptionEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteSubscriptionArgs {
  payload: z.infer<typeof SubscriptionEmissionPayload>;
  session_id: string;
  patient_id: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteSubscriptionResult {
  id?: string;
  audit_event_id: string;
}

export async function writeSubscription(
  args: WriteSubscriptionArgs
): Promise<WriteSubscriptionResult> {
  const result = await writeSingleEmission(
    { target: 'subscription', payload: args.payload },
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
