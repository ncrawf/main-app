/**
 * Write handler for target='exam_finding'.
 *
 * Canonical destination: patient_exam_findings per Section 1K.0.5.4 (provider
 * exam path; clinical_visit_id required, observed_by_provider_user_id required).
 *
 * Not used by the patient-facing intake path; reserved for provider exam UIs.
 */

import type { z } from 'zod';
import type { ExamFindingEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteExamFindingArgs {
  payload: z.infer<typeof ExamFindingEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteExamFindingResult {
  id?: string;
  audit_event_id: string;
}

export async function writeExamFinding(args: WriteExamFindingArgs): Promise<WriteExamFindingResult> {
  const result = await writeSingleEmission(
    { target: 'exam_finding', payload: args.payload },
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
