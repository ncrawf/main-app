/**
 * Write handler stub for target='external_provider'.
 *
 * Canonical destination: patient_external_providers administrative entity row.
 *
 * Phase 3 ships the type contract only. Phase 4 runtime fills the body with
 * the canonical write + paired audit_events row in the same DB transaction
 * per Section 1Q.7 same-transaction discipline.
 */

import type { z } from 'zod';
import type { ExternalProviderEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';

export interface WriteExternalProviderArgs {
  payload: z.infer<typeof ExternalProviderEmissionPayload>;
  session_id: string;
  patient_id?: string;
  interaction_context: InteractionContext;
  /** For multi-target emissions, the assertion_group_id binding all rows in one logical action. */
  assertion_group_id?: string;
}

export interface WriteExternalProviderResult {
  /** Primary key of the row written (or undefined if target='audit_event_only'). */
  id?: string;
  /** audit_events row id (always emitted in same transaction per Section 1Q.7). */
  audit_event_id: string;
}

/**
 * Phase 4: implement transactional write + audit emission.
 * Phase 3 stub: throws to make missing implementations obvious in tests + dev.
 */
export async function writeExternalProvider(_args: WriteExternalProviderArgs): Promise<WriteExternalProviderResult> {
  throw new Error("lib/intake/write/external_provider.ts not implemented; Phase 4 runtime fills this in per Section 1Q.7 same-transaction discipline.");
}
