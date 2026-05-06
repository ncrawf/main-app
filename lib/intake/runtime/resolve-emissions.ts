/**
 * Phase 4C-runtime resolveEmissions — WRITE-path resolver per system map
 * primitives addendum #7 (named-read-function discipline says read-path
 * = pure-function reads; write-path = template + raw_value → resolved
 * Emission[]; the two are distinct).
 *
 * Companion: lib/intake/runtime/record-intake-response.ts (consumes
 * the resolved emissions); lib/intake/question-bank/** (declares
 * Question templates with placeholder fields).
 *
 * Discipline:
 * - Deterministic: same raw_value + question_version + prior_responses
 *   → same Emission[] every time. CI-checkable.
 * - Pure: no DB reads. Caller passes prior_responses + interaction_context
 *   if needed. Concept registry lookups are static (clinical-concepts/).
 * - Validated: every resolved emission passes its target's Zod schema in
 *   lib/intake/targets.ts before being returned. Resolution failures raise
 *   ResolveEmissionsError with the specific field that failed.
 * - Forward-compatible: convention-based resolution today; if the question
 *   bank later needs a richer DSL (e.g., $raw_value, $response[...],
 *   $concept.description), extend without breaking callers.
 *
 * Phase 4C-runtime v1 covers the conventions needed for GLP-1 prior_glp1_use
 * (Q15.1 + Q15.2): choice-value → concept_id, concept_id → name_normalized,
 * cross-question status flip (status_v1='past' → medication.status='discontinued').
 * Other targets fall through with a documented rule per emission shape.
 */

import {
  type Emission,
  type EmissionTarget,
  ClinicalAssertionEmissionPayload,
  ObservationEmissionPayload,
  MedicationEmissionPayload,
  AllergyEmissionPayload,
  ImmunizationEmissionPayload,
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
  ExamFindingEmissionPayload,
} from '../targets';
import type { Question } from '../types';
import type { InteractionContext } from '../interaction-context';
import { getConcept } from '@/lib/clinical-concepts';

/**
 * Context passed to the resolver. Pure inputs only — no DB reads inside.
 */
export interface ResolveContext {
  /** Required for downstream binding; not used during resolution itself. */
  session_id: string;
  /** Optional in pre-account flow per Section 1J.6. */
  patient_id?: string;
  /** Required for any emission whose payload references context fields. */
  interaction_context: InteractionContext;
  /**
   * Prior responses in the same session keyed by question_id. The resolver
   * reads from this to support cross-question dependencies (e.g., Q15.2's
   * medication.status flips to 'discontinued' when Q15.1 status_v1 = 'past').
   * Caller is responsible for assembling — typically from a session-state
   * cache or from `intake_responses` reads at the call site.
   */
  prior_responses?: Record<string, unknown>;
  /** Composite-row binding propagated from the question or module. */
  assertion_group_id?: string;
}

/**
 * Resolution outcome for one emission. Resolver returns these aggregated
 * so the caller can include resolution_notes in audit metadata if useful.
 */
export interface ResolutionNote {
  field_path: string;
  rule: string;
  resolved_to: unknown;
}

export interface ResolveEmissionsResult {
  emissions: Emission[];
  resolution_notes: ResolutionNote[];
}

export class ResolveEmissionsError extends Error {
  constructor(
    public readonly question_id: string,
    public readonly emission_index: number,
    public readonly field_path: string,
    public readonly reason: string
  ) {
    super(
      `resolveEmissions(${question_id}): emission[${emission_index}].${field_path} — ${reason}`
    );
    this.name = 'ResolveEmissionsError';
  }
}

/**
 * Top-level resolver. Walks each emission template on the question, applies
 * per-target resolution rules, validates against the target's Zod schema,
 * returns fully-resolved Emission[].
 *
 * Throws ResolveEmissionsError on the first unresolvable placeholder or
 * Zod validation failure. Caller should NOT call recordIntakeResponse on
 * a partial result.
 */
export function resolveEmissions(
  question: Question,
  raw_value: unknown,
  context: ResolveContext
): ResolveEmissionsResult {
  const notes: ResolutionNote[] = [];
  const resolved: Emission[] = [];

  for (let i = 0; i < question.emissions.length; i++) {
    const template = question.emissions[i];
    const target = template.target;

    let payload: Record<string, unknown>;
    try {
      payload = resolveEmissionPayload(target, template.payload, question, raw_value, context, notes, i);
    } catch (err) {
      if (err instanceof ResolveEmissionsError) throw err;
      throw new ResolveEmissionsError(
        question.question_id,
        i,
        '<unknown>',
        err instanceof Error ? err.message : String(err)
      );
    }

    // Final Zod validation.
    const validated = validateAgainstTarget(target, payload, question.question_id, i);
    resolved.push({ target, payload: validated } as Emission);
  }

  return { emissions: resolved, resolution_notes: notes };
}

/**
 * Per-target payload resolver. Each branch documents the conventions it
 * applies. Unknown placeholders (empty strings on required fields where
 * convention can't fill) raise ResolveEmissionsError so the caller fails
 * fast at write time rather than landing an empty row.
 */
function resolveEmissionPayload(
  target: EmissionTarget,
  template: unknown,
  question: Question,
  raw_value: unknown,
  context: ResolveContext,
  notes: ResolutionNote[],
  emissionIndex: number
): Record<string, unknown> {
  const t = { ...(template as Record<string, unknown>) };
  const noteWith = (path: string, rule: string, val: unknown) => {
    notes.push({ field_path: `emissions[${emissionIndex}].${path}`, rule, resolved_to: val });
  };

  switch (target) {
    case 'clinical_assertion': {
      // Convention: empty concept_id resolves from raw_value when raw_value
      // is a string that matches the registered concept_id format. Common
      // for single_select questions whose choice values ARE concept_ids
      // (e.g., Q15.2 where 'medication.wegovy' is both choice value AND
      // concept_id).
      if (t.concept_id === '' && typeof raw_value === 'string') {
        if (!getConcept(raw_value)) {
          throw new ResolveEmissionsError(
            question.question_id,
            emissionIndex,
            'concept_id',
            `raw_value '${raw_value}' is not a registered concept_id; declare resolution strategy on question OR add to clinical-concepts registry`
          );
        }
        t.concept_id = raw_value;
        noteWith('concept_id', 'choice_value_is_concept_id', raw_value);
      }

      // Convention: empty context_key on a "status capture" concept (where
      // metadata.value carries the choice value) gets filled with raw_value
      // so different status values (currently / past / never) supersede
      // within their own context_key chain. Detected when concept describes
      // itself as carrying metadata.value.
      const conceptIdStr = typeof t.concept_id === 'string' ? t.concept_id : '';
      const concept = conceptIdStr ? getConcept(conceptIdStr) : undefined;
      const conceptCarriesValue = concept?.description?.toLowerCase().includes('metadata.value carries');

      if (t.context_key === '' && conceptCarriesValue && typeof raw_value === 'string') {
        t.context_key = raw_value;
        noteWith('context_key', 'concept_carries_value_in_metadata', raw_value);
      }

      // Convention: when the concept carries metadata.value, populate it from raw_value.
      if (conceptCarriesValue && (t.metadata === undefined || t.metadata === null)) {
        t.metadata = { value: raw_value };
        noteWith('metadata.value', 'concept_carries_value_in_metadata', raw_value);
      }

      return t;
    }

    case 'medication': {
      // Convention: empty medication_concept_id resolves from raw_value when
      // it's a registered medication.<name> concept_id.
      if (t.medication_concept_id === '' && typeof raw_value === 'string') {
        const concept = getConcept(raw_value);
        if (!concept || concept.concept_type !== 'medication') {
          throw new ResolveEmissionsError(
            question.question_id,
            emissionIndex,
            'medication_concept_id',
            `raw_value '${raw_value}' is not a registered medication concept_id`
          );
        }
        t.medication_concept_id = raw_value;
        noteWith('medication_concept_id', 'choice_value_is_concept_id', raw_value);
      }

      // Convention: empty name_normalized derives from concept description.
      // Strips trailing punctuation; takes the leading clause before parentheses
      // or first comma when present. Examples:
      //   'Wegovy (semaglutide; FDA-approved for weight loss).' → 'Wegovy'
      //   'Compounded semaglutide.' → 'Compounded semaglutide'
      const medConceptId = typeof t.medication_concept_id === 'string' ? t.medication_concept_id : '';
      if (t.name_normalized === '' && medConceptId) {
        const concept = getConcept(medConceptId);
        if (concept) {
          t.name_normalized = normalizeMedicationName(concept.description);
          noteWith('name_normalized', 'concept_description_first_clause', t.name_normalized);
        }
      }

      // Convention: medication.status flips to 'discontinued' when a sibling
      // status question in the same session indicates past use. Looked up
      // by walking the question's question_id namespace upward and checking
      // for a *.status_v1 sibling.
      if (t.status === 'active') {
        const flipped = resolveMedicationStatusFromSibling(question, context);
        if (flipped) {
          t.status = flipped;
          noteWith('status', 'sibling_status_v1_flip', flipped);
        }
      }

      return t;
    }

    case 'observation': {
      // Convention: empty value populates from raw_value; observed_at defaults
      // to now() if not provided. value_units stays as declared.
      if (t.value === undefined || t.value === null) {
        t.value = raw_value;
        noteWith('value', 'raw_value_direct', raw_value);
      }
      if (t.observed_at === undefined || t.observed_at === '') {
        t.observed_at = new Date().toISOString();
        noteWith('observed_at', 'now()', t.observed_at);
      }
      return t;
    }

    case 'allergy': {
      if (t.allergen_concept_id === '' && typeof raw_value === 'string') {
        const concept = getConcept(raw_value);
        if (!concept || concept.concept_type !== 'allergy') {
          throw new ResolveEmissionsError(
            question.question_id,
            emissionIndex,
            'allergen_concept_id',
            `raw_value '${raw_value}' is not a registered allergen concept_id`
          );
        }
        t.allergen_concept_id = raw_value;
        noteWith('allergen_concept_id', 'choice_value_is_concept_id', raw_value);
      }
      return t;
    }

    case 'immunization': {
      if (t.vaccine_name === '' && typeof raw_value === 'string') {
        const concept = getConcept(raw_value);
        if (concept) {
          t.vaccine_name = concept.description.split(/[.(,]/)[0].trim();
          noteWith('vaccine_name', 'concept_description_first_clause', t.vaccine_name);
        } else {
          t.vaccine_name = raw_value;
          noteWith('vaccine_name', 'raw_value_direct', raw_value);
        }
      }
      if (t.administered_date === undefined || t.administered_date === '') {
        t.administered_date = new Date().toISOString().slice(0, 10);
        noteWith('administered_date', 'today()', t.administered_date);
      }
      return t;
    }

    case 'exam_finding': {
      if (t.finding_concept_id === '' && typeof raw_value === 'string') {
        t.finding_concept_id = raw_value;
        noteWith('finding_concept_id', 'choice_value_is_concept_id', raw_value);
      }
      if (t.observed_at === undefined || t.observed_at === '') {
        t.observed_at = new Date().toISOString();
        noteWith('observed_at', 'now()', t.observed_at);
      }
      return t;
    }

    case 'consent': {
      // Consent fields are mostly declared explicitly on the template
      // (type, version_hash, legal_text_snapshot_id). accepted_at defaults
      // to now in DB. Nothing to resolve from raw_value here.
      return t;
    }

    case 'patient_column': {
      // raw_value IS the value being set; column declared on template.
      if (t.value === undefined || t.value === null) {
        t.value = raw_value;
        noteWith('value', 'raw_value_direct', raw_value);
      }
      return t;
    }

    case 'patient_address':
    case 'patient_contact':
    case 'external_provider':
    case 'preferred_pharmacy':
    case 'emergency_contact':
    case 'advance_directive':
    case 'insurance_details': {
      // Convention: when raw_value is an object, spread its fields onto the
      // template. Caller is responsible for naming the raw_value keys to
      // match the payload schema. When raw_value isn't an object, leave the
      // template as-is and rely on Zod to flag missing required fields.
      if (typeof raw_value === 'object' && raw_value !== null && !Array.isArray(raw_value)) {
        for (const [k, v] of Object.entries(raw_value as Record<string, unknown>)) {
          if (t[k] === undefined || t[k] === '' || t[k] === null) {
            t[k] = v;
            noteWith(k, 'raw_value_object_spread', v);
          }
        }
      }
      return t;
    }

    case 'subscription':
    case 'treatment_order':
    case 'commerce_order':
    case 'eligibility_decision':
    case 'session_metadata':
    case 'audit_event_only': {
      // These targets are typically emitted by composite question handlers
      // (Module 26 membership_checkout, Module 23 candidacy_result) where
      // the caller assembles the payload outside resolveEmissions. v1
      // resolver passes through unchanged; future revisions can add
      // composite-aware resolution.
      return t;
    }

    default: {
      const exhaustive: never = target;
      throw new Error(`resolveEmissions: unhandled emission target: ${JSON.stringify(exhaustive)}`);
    }
  }
}

/**
 * Heuristic: extract a clean medication name from a concept description.
 * Examples:
 *   'Wegovy (semaglutide; FDA-approved for weight loss).' → 'Wegovy'
 *   'Compounded semaglutide.' → 'Compounded semaglutide'
 *   'Insulin (any formulation).' → 'Insulin'
 *   'Sulfonylurea class (glipizide, glyburide, glimepiride).' → 'Sulfonylurea class'
 */
function normalizeMedicationName(description: string): string {
  // Take everything before the first '(' or '.'.
  const match = description.match(/^([^(.]+)/);
  if (!match) return description.trim();
  return match[1].trim();
}

/**
 * For a question whose emissions include a medication entity, look up a
 * sibling 'status_v1' question's prior response and translate to the
 * medication.status enum. Returns undefined when no flip should occur.
 *
 * Rule (binding for GLP-1 prior_glp1_use Module 15):
 *   sibling status_v1 = 'currently' → medication.status = 'active' (no change; default)
 *   sibling status_v1 = 'past'      → medication.status = 'discontinued'
 *   sibling status_v1 = 'never'     → would never reach this question (render_when gate)
 *
 * Sibling discovery: walks the question_id namespace and looks for
 * '<prefix>.status_v1' in prior_responses. Discovery is conservative —
 * if the sibling isn't found in prior_responses, leaves status alone.
 */
function resolveMedicationStatusFromSibling(
  question: Question,
  context: ResolveContext
): 'discontinued' | undefined {
  if (!context.prior_responses) return undefined;

  // Derive sibling status_v1 question_id by namespace walk:
  //   'qb.pathway.glp1.prior_glp1_use.which_drug_v1' → 'qb.pathway.glp1.prior_glp1_use.status_v1'
  const lastDot = question.question_id.lastIndexOf('.');
  if (lastDot < 0) return undefined;
  const namespace = question.question_id.slice(0, lastDot);
  const siblingId = `${namespace}.status_v1`;

  const sibling = context.prior_responses[siblingId];
  if (sibling === 'past') return 'discontinued';
  return undefined;
}

/**
 * Final Zod validation per emission target. Mirrors writeEmissions's
 * validation step but happens BEFORE the Postgres round-trip so we catch
 * bad payloads at resolution time, not at write time.
 */
function validateAgainstTarget(
  target: EmissionTarget,
  payload: Record<string, unknown>,
  question_id: string,
  emissionIndex: number
): unknown {
  const schema = (() => {
    switch (target) {
      case 'clinical_assertion':
        return ClinicalAssertionEmissionPayload;
      case 'observation':
        return ObservationEmissionPayload;
      case 'medication':
        return MedicationEmissionPayload;
      case 'allergy':
        return AllergyEmissionPayload;
      case 'immunization':
        return ImmunizationEmissionPayload;
      case 'exam_finding':
        return ExamFindingEmissionPayload;
      case 'consent':
        return ConsentEmissionPayload;
      case 'patient_column':
        return PatientColumnEmissionPayload;
      case 'patient_address':
        return PatientAddressEmissionPayload;
      case 'patient_contact':
        return PatientContactEmissionPayload;
      case 'external_provider':
        return ExternalProviderEmissionPayload;
      case 'preferred_pharmacy':
        return PreferredPharmacyEmissionPayload;
      case 'emergency_contact':
        return EmergencyContactEmissionPayload;
      case 'advance_directive':
        return AdvanceDirectiveEmissionPayload;
      case 'insurance_details':
        return InsuranceDetailsEmissionPayload;
      case 'subscription':
        return SubscriptionEmissionPayload;
      case 'treatment_order':
        return TreatmentOrderEmissionPayload;
      case 'commerce_order':
        return CommerceOrderEmissionPayload;
      case 'session_metadata':
        return SessionMetadataEmissionPayload;
      case 'eligibility_decision':
        return EligibilityDecisionEmissionPayload;
      case 'audit_event_only':
        return AuditEventOnlyEmissionPayload;
      default: {
        const exhaustive: never = target;
        throw new Error(`validateAgainstTarget: unhandled target: ${JSON.stringify(exhaustive)}`);
      }
    }
  })();

  const result = schema.safeParse(payload);
  if (!result.success) {
    const firstIssue = result.error.issues[0];
    throw new ResolveEmissionsError(
      question_id,
      emissionIndex,
      firstIssue?.path?.join('.') ?? '<root>',
      `Zod validation failed: ${firstIssue?.message ?? 'unknown'}`
    );
  }
  return result.data;
}
