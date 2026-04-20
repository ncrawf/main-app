/**
 * Prescription PDF (or TIFF) artifacts for 503A fax / chart storage.
 *
 * Strategy (v1):
 * - **Source of truth** stays structured: `treatment_items.dosage` + `metadata` (prescriber, rx_supply, etc.).
 * - **PDF** is a derived file: generate from that row, upload to **Supabase Storage**, store only a **pointer** here.
 * - **Fax**: many vendors accept PDF; print-to-fax or e-fax APIs take PDF bytes the same way.
 * - **Data weight**: a few hundred KB per PDF × thousands of patients is cheap vs storing in Postgres bytea.
 *   Prefer Storage + optional `content_hash` to dedupe regenerated copies later.
 *
 * Bucket (create in Supabase Dashboard → Storage, private): `rx_artifacts`
 * Object path convention: `{patient_id}/{treatment_item_id}/rx-{version}.pdf`
 */

export const RX_ARTIFACTS_BUCKET = 'rx_artifacts' as const
/** Temporary default destination while partner routing is finalized. */
export const DEFAULT_TEMP_FAX_NUMBER = '248-934-1307'

export type RxPdfArtifactMetadata = {
  /** Supabase Storage bucket id (see RX_ARTIFACTS_BUCKET). */
  bucket: typeof RX_ARTIFACTS_BUCKET
  /** Path within bucket, no leading slash. */
  object_path: string
  /** ISO time the PDF was generated and uploaded. */
  generated_at: string
  /** Logical template / layout version used to render (bump when Rx layout changes). */
  layout_version: string
  /** Optional sha256 hex of file bytes for integrity / dedupe. */
  content_sha256?: string
  /** When staff (or integration) marked fax / send complete. */
  fax_sent_at?: string | null
  /** Destination fax E.164 or raw digits as used by vendor. */
  fax_to?: string | null
  /** Partner reference if their API returns an id. */
  partner_send_id?: string | null
}

export function buildRxPdfArtifactPointer(args: {
  patientId: string
  treatmentItemId: string
  layoutVersion: string
  /** e.g. "rx-v1.pdf" or include timestamp for immutability */
  fileName?: string
}): RxPdfArtifactMetadata {
  const file = args.fileName ?? `rx-${args.layoutVersion}.pdf`
  const object_path = `${args.patientId}/${args.treatmentItemId}/${file}`
  return {
    bucket: RX_ARTIFACTS_BUCKET,
    object_path,
    generated_at: new Date().toISOString(),
    layout_version: args.layoutVersion,
  }
}

/** Merge into `treatment_items.metadata` under key `rx_pdf` when a file exists. */
export function attachRxPdfToMetadata(
  existingMetadata: Record<string, unknown>,
  artifact: RxPdfArtifactMetadata
): Record<string, unknown> {
  return {
    ...existingMetadata,
    rx_pdf: artifact,
  }
}
