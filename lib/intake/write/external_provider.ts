/**
 * Write handler for target='external_provider'.
 * Canonical destination: patient_external_providers (administrative entity
 * per Section 1K.0.5.1 — PCPs, referring providers, specialty consultants,
 * prior providers).
 */

import type { z } from 'zod';
import type { ExternalProviderEmissionPayload } from '../targets';
import type { InteractionContext } from '../interaction-context';
import { writeSingleEmission } from './orchestrator';

export interface WriteExternalProviderArgs {
  payload: z.infer<typeof ExternalProviderEmissionPayload>;
  session_id: string;
  patient_id?: string;
  intake_response_id?: string;
  interaction_context: InteractionContext;
  assertion_group_id?: string;
}

export interface WriteExternalProviderResult {
  id?: string;
  audit_event_id: string;
}

export async function writeExternalProvider(
  args: WriteExternalProviderArgs
): Promise<WriteExternalProviderResult> {
  const result = await writeSingleEmission(
    { target: 'external_provider', payload: args.payload },
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
