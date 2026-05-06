/**
 * Write handler for target='commerce_order'.
 *
 * NOT IMPLEMENTED in Phase 4A: the commerce_orders table is not yet created
 * (out of scope for V1 GLP-1 single-rail flow per Section 1Q.23 Patch G5
 * retail rail). The orchestrator (record_intake_emissions_batch) raises an
 * exception with a clear hint when this target is encountered.
 *
 * This typed entry point is preserved so future code can compile cleanly;
 * any caller invoking it will receive the orchestrator's exception at
 * runtime until the commerce_orders table + handler body land in a future
 * migration.
 */

import type { z } from 'zod';
import type { CommerceOrderEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteCommerceOrderArgs {
  payload: z.infer<typeof CommerceOrderEmissionPayload>;
  session_id: string;
  patient_id: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteCommerceOrderResult {
  id?: string;
  audit_event_id: string;
}

export async function writeCommerceOrder(
  args: WriteCommerceOrderArgs
): Promise<WriteCommerceOrderResult> {
  const result = await writeSingleEmission(
    { target: 'commerce_order', payload: args.payload },
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
