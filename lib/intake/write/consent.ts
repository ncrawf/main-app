/**
 * Write handler for target='consent'.
 *
 * Canonical destination: patient_consents per Section 1K.11.
 *
 * Multi-row composite consents (Module 2 base_consents = telehealth +
 * privacy + terms; Module 26 membership_checkout = membership_service_agreement
 * + auto_renew + prescription_acceptance) are written via writeEmissions with
 * the same assertion_group_id; this single-target handler is for one-off
 * post-intake consents (e.g., account_settings_sms_opt_in).
 */

import type { z } from 'zod';
import type { ConsentEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteConsentArgs {
  payload: z.infer<typeof ConsentEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteConsentResult {
  id?: string;
  audit_event_id: string;
}

export async function writeConsent(args: WriteConsentArgs): Promise<WriteConsentResult> {
  const result = await writeSingleEmission(
    { target: 'consent', payload: args.payload },
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
