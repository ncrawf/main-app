/**
 * Write handler stub for target='medication'.
 *
 * Canonical destination: patient_medications reconciled clinical entity per Section 1K.0.5.4.
 *
 * Phase 3 ships the type contract only. Phase 4 runtime fills the body with
 * the canonical write + paired audit_events row in the same DB transaction
 * per Section 1Q.7 same-transaction discipline.
 */

import type { z } from 'zod';
import type { MedicationEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';

export interface WriteMedicationArgs {
  payload: z.infer<typeof MedicationEmissionPayload>;
  session_id: string;
  patient_id?: string;
  interaction_context: InteractionContext;
  /** For multi-target emissions, the assertion_group_id binding all rows in one logical action. */
  assertion_group_id?: string;
}

export interface WriteMedicationResult {
  /** Primary key of the row written (or undefined if target='audit_event_only'). */
  id?: string;
  /** audit_events row id (always emitted in same transaction per Section 1Q.7). */
  audit_event_id: string;
}

/**
 * Phase 4: implement transactional write + audit emission.
 * Phase 3 stub: throws to make missing implementations obvious in tests + dev.
 */
export async function writeMedication(_args: WriteMedicationArgs): Promise<WriteMedicationResult> {
  throw new Error("lib/intake/write/medication.ts not implemented; Phase 4 runtime fills this in per Section 1Q.7 same-transaction discipline.");
}
