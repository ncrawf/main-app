/**
 * WP-EXEC-002 Phase 1:
 * Scheduling trace helper shapes only (no scheduling behavior).
 */

import type { SchedulingTraceLineage } from './types';

export function buildSchedulingTraceLineage(
  input: SchedulingTraceLineage
): SchedulingTraceLineage {
  return {
    source_event_id: input.source_event_id,
    candidate_id: input.candidate_id,
    resolver_id: input.resolver_id,
    commit_id: input.commit_id,
    scheduling_state_change_id: input.scheduling_state_change_id,
    messaging_projection_id: input.messaging_projection_id,
  };
}

export function attachSchedulingTraceLineage<T extends Record<string, unknown>>(
  payload: T,
  trace: SchedulingTraceLineage
): T & { trace_lineage: SchedulingTraceLineage } {
  return {
    ...payload,
    trace_lineage: buildSchedulingTraceLineage(trace),
  };
}
