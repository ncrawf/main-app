/**
 * Write handler stub for target='audit_event_only'.
 *
 * Canonical destination: audit_events row only no other write.
 *
 * Phase 3 ships the type contract only. Phase 4 runtime fills the body with
 * the canonical write + paired audit_events row in the same DB transaction
 * per Section 1Q.7 same-transaction discipline.
 */

import type { z } from 'zod';
import type { AuditEventOnlyEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';

export interface WriteAuditEventOnlyArgs {
  payload: z.infer<typeof AuditEventOnlyEmissionPayload>;
  session_id: string;
  patient_id?: string;
  interaction_context: InteractionContext;
  /** For multi-target emissions, the assertion_group_id binding all rows in one logical action. */
  assertion_group_id?: string;
}

export interface WriteAuditEventOnlyResult {
  /** Primary key of the row written (or undefined if target='audit_event_only'). */
  id?: string;
  /** audit_events row id (always emitted in same transaction per Section 1Q.7). */
  audit_event_id: string;
}

/**
 * Phase 4: implement transactional write + audit emission.
 * Phase 3 stub: throws to make missing implementations obvious in tests + dev.
 */
export async function writeAuditEventOnly(_args: WriteAuditEventOnlyArgs): Promise<WriteAuditEventOnlyResult> {
  throw new Error("lib/intake/write/audit_event_only.ts not implemented; Phase 4 runtime fills this in per Section 1Q.7 same-transaction discipline.");
}
