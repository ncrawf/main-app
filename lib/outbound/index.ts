/**
 * Phase 4E outbound jobs barrel export.
 */

export {
  JOB_KINDS,
  JOB_STATUSES,
  JOB_CHANNELS,
  PATHWAY_SENSITIVITY_LEVELS,
  MESSAGE_INTENTS,
  PRIORITY_HINTS,
  SUPPRESSION_REASONS,
  QUEUED_BY_KINDS,
  ALLOWED_STATUS_TRANSITIONS,
  DISPATCH_OUTCOMES,
  EnqueueOutboundJobArgs,
  assertValidStatusTransition,
  isExternalRailJobKind,
  type JobKind,
  type JobStatus,
  type JobChannel,
  type PathwaySensitivity,
  type MessageIntent,
  type PriorityHint,
  type SuppressionReason,
  type QueuedByKind,
  type DispatchOutcome,
  type DispatchResultArgs,
  type DispatchResultResponse,
  type EnqueueOutboundJobResult,
} from './types';

export { enqueueOutboundJob } from './enqueue';

export {
  pickNextOutboundJob,
  markOutboundJobDispatch,
  runSendPolicyGate,
  runDispatcherTick,
  AdapterNotImplementedError,
  type OutboundJobRow,
} from './dispatch';
