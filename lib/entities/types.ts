/**
 * Base shapes for reconciled clinical entities + administrative entities per
 * system map Section 1K.0.5.3.
 *
 * Reconciled clinical entities follow the two-stage flow per Section 1K.0.5.4:
 * claim ledger row → reconciliation workflow → entity row with rich structured fields.
 * Administrative entities are direct writes (no claim ledger feeder).
 */

import type { ReconciliationStatus } from '../intake/reconciliation-status';

/**
 * Common fields on every reconciled clinical entity row.
 */
export interface ReconciledEntityBase {
  id: string;
  patient_id: string;
  reconciliation_status: ReconciliationStatus;
  reconciled_by_user_id?: string;
  reconciled_at?: string;
  /** Back-pointer to originating claim ledger row (when entity was created from a claim). */
  source_assertion_id?: string;
  /** Multi-source array when multiple claims feed one entity. */
  source_assertion_ids?: string[];
  /** Entity-level supersession chain (dose changes, name corrections, etc.). */
  supersedes_entity_id?: string;
  retracted_at?: string;
  retracted_reason?: string;
  asserted_at: string;
  metadata?: Record<string, unknown>;
}

/**
 * Common fields on every administrative entity row. No reconciliation_status
 * (these are direct writes; not feeder-claim-driven).
 */
export interface AdministrativeEntityBase {
  id: string;
  patient_id: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  metadata?: Record<string, unknown>;
}
