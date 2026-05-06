/**
 * Write handler for target='patient_column'.
 *
 * Canonical destination: UPDATE on the patients row identified by patient_id,
 * setting the named column. Used for identity columns (legal_first_name,
 * legal_last_name, dob, sex_assigned_at_birth, gender_identity, etc.) and
 * for operational preferences (preferred_communication_channel, etc.).
 *
 * Per Section 1K.0.5.2 anti-pattern: identity must NOT live in
 * patient_clinical_assertions. This handler is the canonical write path
 * for those columns.
 */

import type { z } from 'zod';
import type { PatientColumnEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WritePatientColumnArgs {
  payload: z.infer<typeof PatientColumnEmissionPayload>;
  session_id: string;
  patient_id: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WritePatientColumnResult {
  id?: string;
  audit_event_id: string;
}

export async function writePatientColumn(
  args: WritePatientColumnArgs
): Promise<WritePatientColumnResult> {
  const result = await writeSingleEmission(
    { target: 'patient_column', payload: args.payload },
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
