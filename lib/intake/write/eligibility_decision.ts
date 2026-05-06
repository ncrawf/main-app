/**
 * Write handler for target='eligibility_decision'.
 * Canonical destination: eligibility_decisions per Phase 3 Commit 8 migration
 * (rule_id + rule_version + result + reasons + input_refs + inputs_hash +
 * input_snapshot for replay/debug).
 *
 * Used by Module 23 candidacy_result and any future rule-engine output.
 */

import type { z } from 'zod';
import type { EligibilityDecisionEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteEligibilityDecisionArgs {
  payload: z.infer<typeof EligibilityDecisionEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteEligibilityDecisionResult {
  id?: string;
  audit_event_id: string;
}

export async function writeEligibilityDecision(
  args: WriteEligibilityDecisionArgs
): Promise<WriteEligibilityDecisionResult> {
  const result = await writeSingleEmission(
    { target: 'eligibility_decision', payload: args.payload },
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
