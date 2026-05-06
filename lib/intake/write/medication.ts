/**
 * Write handler for target='medication'.
 *
 * Canonical destination: patient_medications per Section 1K.0.5.4 two-stage
 * flow (claim ledger row in patient_clinical_assertions FIRST, then this
 * reconciled entity row with source_assertion_id back-pointer).
 *
 * For dual-emit (intake question that emits BOTH claim + entity), use
 * writeEmissions directly with a multi-emission array — the orchestrator
 * captures the inserted claim's id as prior_assertion_id and auto-populates
 * source_assertion_id on this entity row when payload doesn't provide one.
 */

import type { z } from 'zod';
import type { MedicationEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteMedicationArgs {
  payload: z.infer<typeof MedicationEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteMedicationResult {
  id?: string;
  audit_event_id: string;
}

export async function writeMedication(args: WriteMedicationArgs): Promise<WriteMedicationResult> {
  const result = await writeSingleEmission(
    { target: 'medication', payload: args.payload },
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
