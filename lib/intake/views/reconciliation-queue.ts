/**
 * Reconciliation queue view — lists patient_medications / patient_allergies /
 * patient_immunizations rows with reconciliation_status IN ('unreconciled', 'conflict')
 * for staff/provider workflow per Section 1K.0.5.4.
 *
 * Phase 3 ships signature; Phase 4 implements query.
 */

import type { ReconciliationQueueView } from './types';

export async function getReconciliationQueue(_filterArgs?: {
  staff_user_id?: string;
  pathway_code?: string;
  limit?: number;
}): Promise<ReconciliationQueueView> {
  throw new Error('lib/intake/views/reconciliation-queue.ts not implemented; Phase 4 runtime fills this in.');
}
