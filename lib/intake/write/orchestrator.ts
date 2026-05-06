/**
 * Phase 4A writeEmissions — TypeScript wrapper around the SECURITY DEFINER
 * orchestrator function `record_intake_emissions_batch` (see
 * supabase/migrations/20260505120000_intake_emission_orchestrator_v1.sql).
 *
 * This is the SINGLE entry point for any intake-runtime write. The 21
 * individual write handlers in lib/intake/write/<target>.ts delegate here.
 *
 * Discipline per Section 1K.0.5.11 + 1Q.7:
 * - Atomic multi-row write across all emissions in one Postgres transaction.
 * - Each row insert paired with audit_events row in same transaction.
 * - source_assertion_id auto-propagated from prior clinical_assertion to
 *   entity emissions (medication / allergy / immunization) per Section 1K.0.5.4
 *   two-stage flow.
 * - Zod validation of each emission's payload against its target's schema
 *   before round-tripping to Postgres.
 *
 * Anti-drift: imports types only from Phase 3 declared files; does NOT
 * redefine EmissionTarget / Emission / payload schemas.
 */

import type { Emission, EmissionTarget } from '../targets';
import {
  ClinicalAssertionEmissionPayload,
  ObservationEmissionPayload,
  MedicationEmissionPayload,
  AllergyEmissionPayload,
  ImmunizationEmissionPayload,
  ExamFindingEmissionPayload,
  ConsentEmissionPayload,
  PatientColumnEmissionPayload,
  PatientAddressEmissionPayload,
  PatientContactEmissionPayload,
  ExternalProviderEmissionPayload,
  PreferredPharmacyEmissionPayload,
  EmergencyContactEmissionPayload,
  AdvanceDirectiveEmissionPayload,
  InsuranceDetailsEmissionPayload,
  SubscriptionEmissionPayload,
  TreatmentOrderEmissionPayload,
  CommerceOrderEmissionPayload,
  SessionMetadataEmissionPayload,
  EligibilityDecisionEmissionPayload,
  AuditEventOnlyEmissionPayload,
} from '../targets';
import type { InteractionContext } from '../interaction-context';
import { createAdminClient } from '@/lib/supabase/admin';

/**
 * Args for the orchestrator. Caller is the recordIntakeResponse wrapper
 * (Commit 8) or any per-target write handler (Commits 4-7).
 */
export interface WriteEmissionsArgs {
  emissions: Emission[];
  /** Required: every intake write is scoped to a session per Section 1K.19. */
  session_id: string;
  /** Optional in pre-account flow per Section 1J.6; required for entity writes. */
  patient_id?: string;
  /**
   * Back-pointer to the originating intake_responses row when the emissions
   * stem from a question answer. Null for direct-action writes (provider
   * reconciliation, system-derived assertions, etc.).
   */
  intake_response_id?: string;
  /**
   * Composite group binding for multi-row emits (e.g.,
   * 'universal.base_consents_composite' for Module 2's 3-consent emit;
   * 'universal.membership_checkout_composite' for Module 26's 3-consent +
   * subscription + treatment_order emit). Surfaces in audit_events metadata.
   */
  assertion_group_id?: string;
  interaction_context: InteractionContext;
}

export interface WriteEmissionResult {
  target: EmissionTarget;
  /** Primary key of inserted row; null for audit_event_only target. */
  id: string | null;
  /** audit_events row id (always emitted in same transaction per Section 1Q.7). */
  audit_event_id: string;
}

export interface WriteEmissionsResult {
  results: WriteEmissionResult[];
}

/**
 * Phase 3 pressure-test Gap 3 fix: orchestrate multi-target emissions atomically.
 *
 * Sequencing per Section 1K.0.5.4: clinical_assertion emissions execute first
 * within the batch (their generated id is captured as prior_assertion_id and
 * propagated to subsequent entity emissions whose source_assertion_id is empty).
 * Caller is responsible for declaring emissions in correct order; orchestrator
 * enforces the CLAIM-FIRST rule by re-sorting the array if needed.
 */
export async function writeEmissions(args: WriteEmissionsArgs): Promise<WriteEmissionsResult> {
  if (args.emissions.length === 0) {
    return { results: [] };
  }

  // 1. Validate each emission's payload against its target's Zod schema.
  for (const emission of args.emissions) {
    validateEmissionPayload(emission);
  }

  // 2. Sort: clinical_assertion emissions before their dependent entity emissions
  //    per Section 1K.0.5.4. Other ordering preserved as-is.
  const sorted = sortEmissionsForBatch(args.emissions);

  // 3. Call the SECURITY DEFINER function via supabase-js .rpc().
  const supabase = createAdminClient();
  const { data, error } = await supabase.rpc('record_intake_emissions_batch', {
    p_session_id: args.session_id,
    p_patient_id: args.patient_id ?? null,
    p_intake_response_id: args.intake_response_id ?? null,
    p_assertion_group_id: args.assertion_group_id ?? null,
    p_interaction_context: args.interaction_context,
    p_emissions: sorted,
  });

  if (error) {
    throw new Error(
      `writeEmissions failed: ${error.message} (code: ${error.code ?? 'unknown'}). ` +
        `Targets attempted: ${sorted.map((e) => e.target).join(', ')}.`
    );
  }

  if (!Array.isArray(data)) {
    throw new Error(
      `writeEmissions: orchestrator returned non-array result: ${JSON.stringify(data)}.`
    );
  }

  // 4. Parse + return results. The orchestrator returns array of { target, id, audit_event_id }.
  const results: WriteEmissionResult[] = data.map((row: { target: string; id: string | null; audit_event_id: string }) => ({
    target: row.target as EmissionTarget,
    id: row.id ?? null,
    audit_event_id: row.audit_event_id,
  }));

  return { results };
}

/**
 * Validate a single emission's payload against its target's Zod schema.
 * Throws ZodError on invalid payload. This is the outer-edge type guard;
 * the SQL function performs additional NULLIF / type-coercion at insert time.
 */
function validateEmissionPayload(emission: Emission): void {
  switch (emission.target) {
    case 'clinical_assertion':
      ClinicalAssertionEmissionPayload.parse(emission.payload);
      return;
    case 'observation':
      ObservationEmissionPayload.parse(emission.payload);
      return;
    case 'medication':
      MedicationEmissionPayload.parse(emission.payload);
      return;
    case 'allergy':
      AllergyEmissionPayload.parse(emission.payload);
      return;
    case 'immunization':
      ImmunizationEmissionPayload.parse(emission.payload);
      return;
    case 'exam_finding':
      ExamFindingEmissionPayload.parse(emission.payload);
      return;
    case 'consent':
      ConsentEmissionPayload.parse(emission.payload);
      return;
    case 'patient_column':
      PatientColumnEmissionPayload.parse(emission.payload);
      return;
    case 'patient_address':
      PatientAddressEmissionPayload.parse(emission.payload);
      return;
    case 'patient_contact':
      PatientContactEmissionPayload.parse(emission.payload);
      return;
    case 'external_provider':
      ExternalProviderEmissionPayload.parse(emission.payload);
      return;
    case 'preferred_pharmacy':
      PreferredPharmacyEmissionPayload.parse(emission.payload);
      return;
    case 'emergency_contact':
      EmergencyContactEmissionPayload.parse(emission.payload);
      return;
    case 'advance_directive':
      AdvanceDirectiveEmissionPayload.parse(emission.payload);
      return;
    case 'insurance_details':
      InsuranceDetailsEmissionPayload.parse(emission.payload);
      return;
    case 'subscription':
      SubscriptionEmissionPayload.parse(emission.payload);
      return;
    case 'treatment_order':
      TreatmentOrderEmissionPayload.parse(emission.payload);
      return;
    case 'commerce_order':
      CommerceOrderEmissionPayload.parse(emission.payload);
      return;
    case 'session_metadata':
      SessionMetadataEmissionPayload.parse(emission.payload);
      return;
    case 'eligibility_decision':
      EligibilityDecisionEmissionPayload.parse(emission.payload);
      return;
    case 'audit_event_only':
      AuditEventOnlyEmissionPayload.parse(emission.payload);
      return;
    default: {
      // Exhaustiveness check: unknown target at the type level should be unreachable.
      const exhaustive: never = emission;
      throw new Error(`Unknown emission target: ${JSON.stringify(exhaustive)}`);
    }
  }
}

/**
 * Convenience: run writeEmissions with a single emission and return the
 * single result row. Used by the 21 per-target write handlers as their
 * common delegation path.
 */
export async function writeSingleEmission<T extends EmissionTarget>(
  emission: Emission & { target: T },
  context: Omit<WriteEmissionsArgs, 'emissions'>
): Promise<WriteEmissionResult> {
  const { results } = await writeEmissions({
    emissions: [emission],
    ...context,
  });
  if (results.length !== 1) {
    throw new Error(
      `writeSingleEmission(target=${emission.target}): orchestrator returned ${results.length} results, expected 1.`
    );
  }
  return results[0];
}

/**
 * Stable-sort emissions so that clinical_assertion entries appear before any
 * entity emission (medication / allergy / immunization / exam_finding) per
 * Section 1K.0.5.4 two-stage-flow ordering. Within each tier, original
 * caller-declared order is preserved.
 *
 * Caller is encouraged to declare emissions in correct order to begin with;
 * this sort is defense-in-depth.
 */
function sortEmissionsForBatch(emissions: Emission[]): Emission[] {
  const claimEmissions: Emission[] = [];
  const entityEmissions: Emission[] = [];
  const otherEmissions: Emission[] = [];

  for (const emission of emissions) {
    if (emission.target === 'clinical_assertion') {
      claimEmissions.push(emission);
    } else if (
      emission.target === 'medication' ||
      emission.target === 'allergy' ||
      emission.target === 'immunization' ||
      emission.target === 'exam_finding'
    ) {
      entityEmissions.push(emission);
    } else {
      otherEmissions.push(emission);
    }
  }

  return [...claimEmissions, ...entityEmissions, ...otherEmissions];
}
