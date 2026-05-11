/**
 * Phase 4H-communications c2 — request-fingerprint helper.
 *
 * Single centralized helper used by both `postPatientMessage` (insert path)
 * and the post_patient_message SECURITY DEFINER orchestrator (duplicate-check
 * path). NO other call site re-implements the normalization rules.
 *
 * Why centralized:
 *   * If three call sites each normalized slightly differently, the same
 *     logical payload could produce different stored fingerprints → silent
 *     drift bug where idempotent replays return 409 instead of the existing
 *     row.
 *   * If a future write path emerges (assisted compose, ops-on-behalf), it
 *     uses this helper unchanged.
 *
 * Refs:
 *   * Preflight §4.3 "Centralized helper discipline"
 *   * Preflight §4.7 scenario 6 (idempotency match + mismatch + missing-key)
 *   * Section 1G.3 message turn shape
 */

import { createHash } from 'node:crypto'

export type MessageRequestFingerprintInput = {
  /** The `message_threads.id` the message is bound to. */
  threadId: string
  /** Raw message body as the client sent it. Will be normalized below. */
  body: string
  /**
   * Optional attachment refs (e.g., document ids). Stable ordering applied
   * before hashing so [a, b] and [b, a] hash equally. c2 does not yet ship
   * attachments; this is forward-compat seam for c5+ work.
   */
  attachmentRefs?: string[]
  /**
   * Author identity scope. For patient compose: the patient id. For future
   * staff-on-behalf compose: a tuple-ish string like `staff:<id>:patient:<id>`.
   * Different author identities for the same body must produce different
   * fingerprints.
   */
  authorIdentity: string
}

/**
 * Normalize body text before hashing. The c2 default:
 *   * Trim leading + trailing whitespace
 *   * Collapse internal runs of whitespace (spaces, tabs, newlines) to a single space
 *
 * Whether this is "right" is a product decision; the c2 preflight pins it as
 * "yes, trim + collapse internal whitespace" and §4.7 scenario 6 unit-tests
 * it. If product later wants whitespace-sensitive idempotency (e.g.,
 * differentiating "0.5mg" from "0.5  mg"), this is the one place to change.
 */
function normalizeBody(body: string): string {
  return body.trim().replace(/\s+/g, ' ')
}

/**
 * Returns SHA-256 hex digest (64 chars) of the normalized payload.
 *
 * Stable across:
 *   * Whitespace-only differences in body (per `normalizeBody`)
 *   * Attachment ref ordering (sorted before joining)
 *
 * Sensitive to:
 *   * Any non-whitespace change in body
 *   * Different attachment refs
 *   * Different threadId
 *   * Different authorIdentity
 */
export function computeMessageRequestFingerprint(
  input: MessageRequestFingerprintInput,
): string {
  const normalizedBody = normalizeBody(input.body)
  const sortedAttachments = (input.attachmentRefs ?? [])
    .slice()
    .sort()
    .join(',')

  // Use a structured-delimiter so collisions can't be crafted via embedding
  // delimiter characters in any single field.
  const canonical = [
    `t:${input.threadId}`,
    `a:${input.authorIdentity}`,
    `f:${sortedAttachments}`,
    `b:${normalizedBody}`,
  ].join('\u0000')

  return createHash('sha256').update(canonical, 'utf8').digest('hex')
}
