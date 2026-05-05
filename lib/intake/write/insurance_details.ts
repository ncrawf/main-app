/**
 * Write handler stub for target='insurance_details'.
 *
 * Canonical destination: patient_insurance_details administrative entity row.
 *
 * Phase 3 ships the type contract only. Phase 4 runtime fills the body with
 * the canonical write + paired audit_events row in the same DB transaction
 * per Section 1Q.7 same-transaction discipline.
 */

import type { z } from 'zod';
import type { InsuranceDetailsEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';

export interface WriteInsuranceDetailsArgs {
  payload: z.infer<typeof InsuranceDetailsEmissionPayload>;
  session_id: string;
  patient_id?: string;
  interaction_context: InteractionContext;
  /** For multi-target emissions, the assertion_group_id binding all rows in one logical action. */
  assertion_group_id?: string;
}

export interface WriteInsuranceDetailsResult {
  /** Primary key of the row written (or undefined if target='audit_event_only'). */
  id?: string;
  /** audit_events row id (always emitted in same transaction per Section 1Q.7). */
  audit_event_id: string;
}

/**
 * Phase 4: implement transactional write + audit emission.
 * Phase 3 stub: throws to make missing implementations obvious in tests + dev.
 */
export async function writeInsuranceDetails(_args: WriteInsuranceDetailsArgs): Promise<WriteInsuranceDetailsResult> {
  throw new Error("lib/intake/write/insurance_details.ts not implemented; Phase 4 runtime fills this in per Section 1Q.7 same-transaction discipline.");
}
