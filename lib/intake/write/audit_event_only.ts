/**
 * Write handler for target='audit_event_only'.
 * Canonical destination: audit_events row only (no other write).
 *
 * Used for transitional / process events that don't materialize a row in
 * any canonical table — e.g., 'intake.module.entered',
 * 'intake.session.resumed', 'intake.candidacy_result.viewed'.
 */

import type { z } from 'zod';
import type { AuditEventOnlyEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteAuditEventOnlyArgs {
  payload: z.infer<typeof AuditEventOnlyEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteAuditEventOnlyResult {
  /** Always undefined for this target; only audit_event_id is returned. */
  id?: undefined;
  audit_event_id: string;
}

export async function writeAuditEventOnly(
  args: WriteAuditEventOnlyArgs
): Promise<WriteAuditEventOnlyResult> {
  const result = await writeSingleEmission(
    { target: 'audit_event_only', payload: args.payload },
    {
      session_id: args.session_id,
      patient_id: args.patient_id,
      intake_response_id: args.intake_response_id,
      interaction_context: args.interaction_context,
      assertion_group_id: args.assertion_group_id,
    }
  );
  return { audit_event_id: result.audit_event_id };
}
