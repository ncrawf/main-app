/**
 * WP-EXEC-002 Phase 1:
 * Scheduling authority boundary contracts (types only, no behavior).
 */

export const SCHEDULING_INTENT_KINDS = [
  'request',
  'propose',
  'confirm',
  'cancel',
  'reschedule',
] as const;

export type SchedulingIntentKind = (typeof SCHEDULING_INTENT_KINDS)[number];

export const SCHEDULING_STATES = [
  'requested',
  'proposed',
  'confirmed',
  'cancelled',
  'reschedule_requested',
] as const;

export type SchedulingState = (typeof SCHEDULING_STATES)[number];

export interface SchedulingTraceLineage {
  source_event_id: string;
  candidate_id?: string;
  resolver_id?: string;
  commit_id?: string;
  scheduling_state_change_id?: string;
  messaging_projection_id?: string;
}

export interface SchedulingIntentInput {
  intent_kind: SchedulingIntentKind;
  patient_id: string;
  occurred_at: string;
  requested_by_kind: 'system' | 'staff' | 'patient';
  trace_lineage: SchedulingTraceLineage;
}

export interface SchedulingStateChange {
  scheduling_state_change_id: string;
  from_state: SchedulingState | null;
  to_state: SchedulingState;
  changed_at: string;
}

export interface SchedulingAuthorityResult {
  state_change: SchedulingStateChange;
  trace_lineage: SchedulingTraceLineage;
  notes?: readonly string[];
}
