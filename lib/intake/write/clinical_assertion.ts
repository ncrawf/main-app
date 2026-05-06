/**
 * Write handler for target='clinical_assertion'.
 *
 * Canonical destination: patient_clinical_assertions per Section 1K.5.A.
 *
 * Phase 4A: thin delegation to the writeEmissions orchestrator. Multi-row
 * batches (claim + entity dual-emit; multiple consents per Module 2) should
 * call writeEmissions directly with a multi-emission array; this single-target
 * handler is for callers that need the typed entry point for one assertion.
 */

import type { z } from 'zod';
import type { ClinicalAssertionEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteClinicalAssertionArgs {
  payload: z.infer<typeof ClinicalAssertionEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteClinicalAssertionResult {
  id?: string;
  audit_event_id: string;
}

export async function writeClinicalAssertion(
  args: WriteClinicalAssertionArgs
): Promise<WriteClinicalAssertionResult> {
  const result = await writeSingleEmission(
    { target: 'clinical_assertion', payload: args.payload },
    {
      session_id: args.session_id,
      patient_id: args.patient_id,
      intake_response_id: args.intake_response_id,
      interaction_context: args.interaction_context,
      assertion_group_id: args.assertion_group_id,
    }
  );
  return {
    id: result.id ?? undefined,
    audit_event_id: result.audit_event_id,
  };
}
