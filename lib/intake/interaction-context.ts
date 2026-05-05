/**
 * InteractionContext per system map Section 1Q.23.
 *
 * Propagates through ALL state-mutating rows (intake, messages, orders, labs, audit,
 * timeline) so context-aware execution holds across the entire system spine.
 */

import { z } from 'zod';

export const InteractionMode = z.enum(['online', 'in_person']);
export type InteractionModeValue = z.infer<typeof InteractionMode>;

export const InteractionContextSchema = z.object({
  mode: InteractionMode,
  location_id: z.string().uuid().optional(),
  appointment_id: z.string().uuid().optional(),
  staff_user_id: z.string().uuid().optional(),
  assisted: z.boolean().optional(),
  /**
   * For in-office handoff per Section 1Q.23 Patch G6:
   * `originating_mode` differs from `mode` when an in-office session transitions to
   * online for patient-self-serve completion (e.g., Module 26 Path A deep-link checkout).
   */
  originating_mode: InteractionMode.optional(),
});

export type InteractionContext = z.infer<typeof InteractionContextSchema>;
