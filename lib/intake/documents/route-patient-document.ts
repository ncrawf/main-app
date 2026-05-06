/**
 * Phase 4D Section 1O — routePatientDocument canonical entry point.
 *
 * SINGLE entry point for any document/artifact upload across the system per
 * Section 1O.2 (intake / messaging / action items / ops manual upload /
 * partner integration). All flows MUST go through this function. Direct
 * inserts to the legacy storage buckets (intake_uploads / rx_artifacts /
 * clinical_note_artifacts) for new code paths are forbidden by Section 1O.7
 * hard rules; legacy buckets remain operational for legacy reads only.
 *
 * Discipline (Section 1O):
 * - Atomic: manifest INSERT + domain row INSERT + audit_events row in ONE
 *   Postgres transaction via the SECURITY DEFINER `route_patient_document`
 *   RPC. Storage upload happens BEFORE the RPC; failure here surfaces as
 *   a thrown error and no manifest row lands.
 * - PHI-minimized object keys per Section 1O.6: opaque path
 *   `documents/<routing_id>/<file_uuid>.<ext>`. Never patient names, DOB,
 *   or identifying detail in storage paths.
 * - MIME validation before upload; rejects unsafe types early.
 * - Cross-org write rejection inside RPC per Section 1U.
 * - data_environment-gated per primitives addendum #4: synthetic patient
 *   uploads still write to canonical bucket but inherit
 *   data_environment='synthetic' on the manifest, suppressing them from
 *   downstream search/dashboard/AI surfaces.
 *
 * Caller responsibilities:
 * - Capability check at the route handler layer (e.g., `requireCapability`
 *   per Section 1D + AGENTS.md).
 * - Decide input_type from the surface (intake module declares it; messaging
 *   declares it from context; ops staff selects explicitly).
 * - Generate the file_uuid + storage_path; or pass null for non-file routings
 *   (`lab_intent_to_order` is structured-only).
 * - Compute content_hash_sha256 for forensic verification + dedupe.
 *
 * What this function does NOT do (deferred to other phases):
 * - Reclassification (Section 1O.9 — staff workspace not yet wired).
 * - OCR / extraction (Section 1O.1 explicitly out of scope; lives in 1G AI / 1N).
 * - Patient action item closure (patient_action_items table not yet built).
 */

import { randomUUID, createHash } from 'crypto';
import { createAdminClient } from '@/lib/supabase/admin';
import {
  RoutePatientDocumentArgs,
  type RoutePatientDocumentResult,
  isAllowedMimeType,
  INPUT_TYPE_TO_DOMAIN_TARGET,
  type DomainTarget,
} from './types';

const CANONICAL_BUCKET = 'patient_documents';

/**
 * Canonical upload + routing entry point. Validates args, uploads to
 * Supabase Storage, then calls the SECURITY DEFINER RPC for atomic
 * manifest + domain row + audit insertion.
 */
export async function routePatientDocument(
  rawArgs: unknown
): Promise<RoutePatientDocumentResult> {
  // 1. Validate args (Zod).
  const args = RoutePatientDocumentArgs.parse(rawArgs);

  // 2. MIME validation (Section 1O.6 hard rule).
  const hasFile = args.file_bytes !== undefined && args.file_bytes !== null;
  if (hasFile) {
    if (!args.mime_type) {
      throw new Error(
        `routePatientDocument: file_bytes provided but mime_type missing. Caller must declare MIME for Section 1O.6 validation.`
      );
    }
    if (!isAllowedMimeType(args.mime_type)) {
      throw new Error(
        `routePatientDocument: mime_type '${args.mime_type}' not allowed. Section 1O.6 file-type allowlist: ` +
          `application/pdf, image/jpeg, image/png, image/heic, image/heif, image/webp. ` +
          `Add to the allowlist + bucket config before accepting.`
      );
    }
  } else if (args.input_type !== 'lab_intent_to_order') {
    // Only `lab_intent_to_order` is allowed to be a non-file (structured signal) routing.
    throw new Error(
      `routePatientDocument: file_bytes missing for input_type='${args.input_type}'. ` +
        `Only 'lab_intent_to_order' supports non-file routings.`
    );
  }

  const supabase = createAdminClient();

  // 3. Upload to canonical bucket (when file present). Path is opaque per Section 1O.6.
  const routingId = randomUUID();                              // generate ahead so we can use it in storage_path
  let storagePath: string | null = null;
  let contentHash: string | null = args.content_hash_sha256 ?? null;
  let sizeBytes: number | null = args.size_bytes ?? null;

  if (hasFile && args.file_bytes) {
    const ext = mimeToExtension(args.mime_type!);
    const fileUuid = randomUUID();
    storagePath = `documents/${routingId}/${fileUuid}.${ext}`;

    if (!contentHash) {
      contentHash = createHash('sha256').update(args.file_bytes).digest('hex');
    }
    if (sizeBytes === null) {
      sizeBytes = args.file_bytes.byteLength;
    }

    const { error: uploadErr } = await supabase.storage
      .from(CANONICAL_BUCKET)
      .upload(storagePath, args.file_bytes, {
        contentType: args.mime_type,
        upsert: false,
      });

    if (uploadErr) {
      throw new Error(
        `routePatientDocument: storage upload failed for input_type='${args.input_type}', ` +
          `bucket='${CANONICAL_BUCKET}', path='${storagePath}': ${uploadErr.message}`
      );
    }
  }

  // 4. Atomic RPC: manifest + domain row + audit_events.
  const { data, error } = await supabase.rpc('route_patient_document', {
    p_patient_id: args.patient_id ?? null,
    p_input_type: args.input_type,
    p_capture_surface: args.capture_surface,
    p_capture_source_id: args.capture_source_id ?? null,
    p_capture_source_module_id: args.capture_source_module_id ?? null,
    p_storage_bucket: CANONICAL_BUCKET,
    p_storage_path: storagePath,
    p_mime_type: args.mime_type ?? null,
    p_size_bytes: sizeBytes,
    p_content_hash_sha256: contentHash,
    p_uploaded_by: args.uploaded_by,
    p_uploaded_by_staff_id: args.uploaded_by_staff_id ?? null,
    p_org_id: args.org_id ?? null,
    p_data_environment: args.data_environment ?? null,
    p_actor_kind: args.actor_kind ?? null,
    p_metadata: args.metadata ?? {},
  });

  if (error) {
    // If RPC fails AFTER storage upload succeeded, attempt to clean up the orphaned blob.
    if (storagePath) {
      await supabase.storage
        .from(CANONICAL_BUCKET)
        .remove([storagePath])
        .catch(() => {
          // Best-effort cleanup; swallow secondary failure to surface the original RPC error.
        });
    }
    throw new Error(
      `routePatientDocument: route_patient_document RPC failed (input_type='${args.input_type}'): ` +
        `${error.message} (code: ${error.code ?? 'unknown'})`
    );
  }

  if (!data || typeof data !== 'object') {
    throw new Error(
      `routePatientDocument: RPC returned non-object result: ${JSON.stringify(data)}`
    );
  }

  const result = data as {
    routing_id: string;
    domain_target: DomainTarget;
    source_object_id: string | null;
    audit_event_id: string;
  };

  return {
    routing_id: result.routing_id,
    domain_target: result.domain_target,
    source_object_id: result.source_object_id,
    storage_path: storagePath,
    audit_event_id: result.audit_event_id,
  };
}

/**
 * Pure-function helper exposed for tests + caller-side preflight checks.
 * Mirrors the migration's CASE statement; CI lint will verify parity.
 */
export function routingTargetForInputType(input_type: keyof typeof INPUT_TYPE_TO_DOMAIN_TARGET): DomainTarget {
  return INPUT_TYPE_TO_DOMAIN_TARGET[input_type];
}

function mimeToExtension(mime: string): string {
  switch (mime) {
    case 'application/pdf':
      return 'pdf';
    case 'image/jpeg':
      return 'jpg';
    case 'image/png':
      return 'png';
    case 'image/heic':
      return 'heic';
    case 'image/heif':
      return 'heif';
    case 'image/webp':
      return 'webp';
    default:
      return 'bin';
  }
}
