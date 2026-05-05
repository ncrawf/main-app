/**
 * Branching predicate types per system map Section 1K.4.
 *
 * `render_when` declares conditional rendering for questions / modules / screens
 * based on prior answers OR existing patient atoms (cross-pathway atom reuse per
 * Section 1K.5).
 *
 * Phase 3 declares the predicate shape as TypeScript types only. Phase 4 runtime
 * implements the evaluator + Zod runtime validation if needed.
 */

export type PredicateOperator =
  | 'equals'
  | 'not_equals'
  | 'in'
  | 'not_in'
  | 'greater_than'
  | 'less_than'
  | 'between'
  | 'present'
  | 'absent'
  | 'matches_regex';

/**
 * Predicate over a prior intake response in the SAME session.
 * Resolver evaluates by reading `intake_responses` for the current session.
 */
export interface ResponsePredicate {
  kind: 'response';
  question_id: string;
  operator: PredicateOperator;
  value?: unknown;
  values?: unknown[];
}

/**
 * Predicate over an existing patient clinical assertion (cross-session / cross-pathway).
 * Resolver evaluates by querying `patient_clinical_assertions` for non-superseded rows
 * matching the concept_id + optional context_key constraint.
 */
export interface AssertionPredicate {
  kind: 'assertion';
  concept_id: string;
  context_key?: string;
  operator: PredicateOperator;
  value?: unknown;
  values?: unknown[];
  /** Freshness window — only consider assertions newer than this. */
  max_age_days?: number;
}

/**
 * Predicate over a reconciled entity (medications, allergies, immunizations).
 * Resolver evaluates by querying the relevant entity table.
 */
export interface EntityPredicate {
  kind: 'entity';
  entity_table: 'patient_medications' | 'patient_allergies' | 'patient_immunizations';
  field: string;
  operator: PredicateOperator;
  value?: unknown;
  /** Only consider rows with reconciliation_status = 'reconciled' by default. */
  require_reconciled?: boolean;
}

/**
 * Predicate over interaction context (mode, location, etc.).
 */
export interface InteractionContextPredicate {
  kind: 'interaction_context';
  field: 'mode' | 'location_id' | 'staff_user_id' | 'assisted' | 'originating_mode';
  operator: PredicateOperator;
  value?: unknown;
  values?: unknown[];
}

/**
 * Boolean composition of predicates.
 */
export interface AndPredicate {
  kind: 'and';
  predicates: Predicate[];
}

export interface OrPredicate {
  kind: 'or';
  predicates: Predicate[];
}

export interface NotPredicate {
  kind: 'not';
  predicate: Predicate;
}

export type Predicate =
  | ResponsePredicate
  | AssertionPredicate
  | EntityPredicate
  | InteractionContextPredicate
  | AndPredicate
  | OrPredicate
  | NotPredicate;
