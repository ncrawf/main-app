/**
 * WP-EXEC-002 Phase 2:
 * Signature-only scheduling authority boundary.
 * No behavior implementation is allowed in this file.
 */

import type {
  SchedulingAuthorityResult,
  SchedulingIntentInput,
} from './types';

export const SCHEDULING_AUTHORITY_CONTRACT_VERSION = 'v1' as const;

export interface SchedulingAuthority {
  normalizeIntent(input: SchedulingIntentInput): SchedulingIntentInput;
  deriveStateChange(input: SchedulingIntentInput): SchedulingAuthorityResult;
}

export type NormalizeSchedulingIntent = SchedulingAuthority['normalizeIntent'];
export type DeriveSchedulingStateChange = SchedulingAuthority['deriveStateChange'];
