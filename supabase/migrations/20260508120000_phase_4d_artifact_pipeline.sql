-- =====================================================================
-- Phase 4D — Section 1O artifact pipeline (canonical document routing).
--
-- Per system map Section 1O (Patient Document & Attachment Routing),
-- companion doc data_layers_reconciliation_v1.md, and the system primitives
-- addendum.
--
-- Establishes:
--   1. patient_document_routing — thin manifest (Section 1O.5).
--   2. external_clinical_documents — domain target for medication evidence,
--      clinical media photos, general medical records (Section 1O.4).
--   3. payer_eligibility_documents — minimal insurance-eligibility target
--      (Section 1O.4.2; routing-only shape; full insurance-domain design
--      deferred to future Section).
--   4. patient_documents canonical storage bucket (~50MB cap; allows PDF +
--      JPEG + PNG + HEIC + WEBP per Section 1O.6 + companion doc file-type
--      allowlist).
--   5. Append-only RLS hardening on the manifest (REVOKE UPDATE per
--      Section 1O.7 hard rules; updates only via SECURITY DEFINER).
--
-- Scope discipline (per companion doc):
--   - Legacy storage buckets (rx_artifacts, intake_uploads,
--     clinical_note_artifacts) coexist; future code paths write through
--     routePatientDocument + patient_document_routing manifest + canonical
--     patient_documents bucket. Migration of legacy blobs deferred.
--   - patient_identity_verifications stays as-is from Phase 3 (Section
--     1O.4.1 minimal shape already aligned: id_artifact_storage_id +
--     selfie_artifact_storage_id columns + verification_status enum).
--   - Reclassification UI / workflow deferred (Section 1O.9; staff
--     workspace doesn't exist yet); manifest schema supports it.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. patient_documents canonical storage bucket (Section 1O.6)
-- ---------------------------------------------------------------------

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'patient_documents',
  'patient_documents',
  false,                                               -- private; signed URLs only
  52428800,                                            -- 50 MB
  array['application/pdf', 'image/jpeg', 'image/png', 'image/heic', 'image/heif', 'image/webp']::text[]
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- Patient can read their own documents via signed URL only (no direct bucket read).
-- Staff can read via signed URL (capability-gated at app layer; bucket RLS coarse).
drop policy if exists "staff_select_patient_documents" on storage.objects;
create policy "staff_select_patient_documents"
  on storage.objects
  for select
  to authenticated
  using (
    bucket_id = 'patient_documents'
    and public.is_staff_user(auth.uid())
  );

-- All inserts go through routePatientDocument (service-role); no direct authenticated insert.
drop policy if exists "staff_insert_patient_documents" on storage.objects;
create policy "staff_insert_patient_documents"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'patient_documents'
    and public.is_staff_user(auth.uid())
  );

-- ---------------------------------------------------------------------
-- 2. patient_document_routing — the canonical manifest (Section 1O.5)
-- ---------------------------------------------------------------------

create table if not exists public.patient_document_routing (
  id uuid primary key default gen_random_uuid(),

  -- Multi-tenant + env primitives per Phase 4C-pre.
  org_id uuid not null default public.current_org_id() references public.orgs (id) on delete restrict,
  brand_id uuid references public.brands (id) on delete set null,
  data_environment text not null default public.current_data_env()
    check (data_environment in ('production', 'staging', 'internal_qa', 'synthetic')),

  -- Patient scoping (nullable for partner-integration flows where patient
  -- linkage happens after capture per Section 1O.2 partner_integration).
  patient_id uuid references public.patients (id) on delete cascade,

  -- Section 1O.3 controlled vocabulary. Source of truth for the enum is
  -- lib/intake/documents/types.ts (typed registry; CI lint enforces).
  input_type text not null check (input_type in (
    -- Diagnostics / labs
    'lab_document',
    'prior_lab_report',
    'lab_intent_to_order',
    'lab_completion_evidence',
    -- Identity verification
    'government_id_front',
    'government_id_back',
    'drivers_license_front',
    'drivers_license_back',
    'selfie_face_verification',
    -- Insurance
    'insurance_card_front',
    'insurance_card_back',
    'payer_eligibility_document',
    -- Medication / supplement evidence
    'current_medication_photo',
    'supplement_stack_photo',
    -- Clinical / symptom media
    'clinical_media_photo',
    -- General medical records
    'general_medical_record',
    -- Miscellaneous (triage entry only; never permanent destination)
    'unclassified_pending_review'
  )),

  -- Section 1O.4 routing target. Source of truth: lib/intake/documents/routing-matrix.ts.
  domain_target text not null check (domain_target in (
    'patient_diagnostic_reports',
    'patient_identity_verifications',
    'payer_eligibility_documents',
    'external_clinical_documents',
    'patient_state_observations',
    'intake_responses',
    'lab_orders',
    'none_pending_triage'
  )),

  -- Pointer to the created domain row. Nullable for unclassified_pending_review
  -- and for routing failures (Section 1O.5 rules).
  source_object_id uuid,

  -- Capture surface vocabulary (Section 1O.2). Caller declares.
  capture_surface text not null check (capture_surface in (
    'intake', 'messaging', 'action_item', 'ops_manual_upload', 'partner_integration'
  )),
  capture_source_id text,                                   -- e.g., intake_session_id, message_id, action_item_id, partner_source_id
  capture_source_module_id text,                            -- e.g., 'pathway.glp1.upload_lab_v1'

  -- Storage discipline (Section 1O.6). Opaque key under canonical bucket.
  storage_bucket text not null default 'patient_documents',
  storage_path text,                                        -- e.g., 'documents/<routing_id>/<file_uuid>.<ext>'; nullable for non-file routings (lab_intent_to_order)
  mime_type text,                                           -- nullable when no file
  size_bytes bigint check (size_bytes is null or size_bytes >= 0),
  content_hash_sha256 text,                                 -- forensic verification + dedupe hint per Section 1H.5

  -- Status state machine (Section 1O.5 status enum).
  status text not null default 'captured' check (status in (
    'captured', 'routed', 'verified', 'failed', 'reclassified', 'superseded'
  )),
  failure_reason text check (failure_reason is null or failure_reason in (
    'mime_validation_failed', 'file_too_large', 'storage_upload_failed',
    'domain_target_table_missing', 'patient_lookup_failed', 'partner_metadata_invalid',
    'malware_scan_failed', 'duplicate_content_hash'
  )),

  -- Provenance (per primitives addendum #1 + #2).
  uploaded_by text not null check (uploaded_by in ('patient', 'staff', 'system', 'partner')),
  uploaded_by_staff_id uuid references public.staff_profiles (id),
  uploaded_at timestamptz not null default now(),
  routed_at timestamptz,
  verified_at timestamptz,                                  -- domain-specific (e.g., ID verified, insurance eligibility confirmed)
  expires_at timestamptz,                                   -- per-input-type retention hint (Section 1O.11)

  -- Reclassification chain (Section 1O.9). Append-only on manifest.
  supersedes_routing_id uuid references public.patient_document_routing (id),
  superseded_by_routing_id uuid references public.patient_document_routing (id),
  correction_reason text check (correction_reason is null or correction_reason in (
    'patient_misuploaded_to_wrong_prompt',
    'staff_misclassified_at_capture',
    'partner_metadata_wrong',
    'data_quality_remediation'
  )),

  -- Sensitivity flags (Section 1O.11 access tiering).
  sensitivity_tier text not null default 'standard_clinical' check (sensitivity_tier in (
    'strictest', 'strict', 'standard_clinical'
  )),

  metadata jsonb not null default '{}'::jsonb
);

-- Indexes per Section 1O.5.
create index if not exists pdr_patient_input_uploaded_idx
  on public.patient_document_routing (patient_id, input_type, uploaded_at desc)
  where data_environment = 'production';
create index if not exists pdr_domain_source_idx
  on public.patient_document_routing (domain_target, source_object_id)
  where source_object_id is not null;
create index if not exists pdr_capture_source_idx
  on public.patient_document_routing (capture_surface, capture_source_id)
  where capture_source_id is not null;
create index if not exists pdr_status_uploaded_idx
  on public.patient_document_routing (status, uploaded_at desc)
  where status in ('captured', 'failed') or status = 'captured';
create index if not exists pdr_org_env_idx on public.patient_document_routing (org_id, data_environment);
create index if not exists pdr_content_hash_idx
  on public.patient_document_routing (content_hash_sha256)
  where content_hash_sha256 is not null;

-- RLS: append-only at the patient/staff API surface; orchestrator (SECURITY
-- DEFINER) is the only legitimate writer per Section 1O.7 hard rules.
alter table public.patient_document_routing enable row level security;

drop policy if exists pdr_select_staff on public.patient_document_routing;
create policy pdr_select_staff on public.patient_document_routing
  for select to authenticated
  using (public.is_staff_user(auth.uid()));

-- No direct INSERT/UPDATE/DELETE policy → effectively forbidden for authenticated
-- users; service-role + SECURITY DEFINER functions bypass RLS as expected.

revoke insert, update, delete on public.patient_document_routing from authenticated;
revoke insert, update, delete on public.patient_document_routing from anon;

comment on table public.patient_document_routing is
  'Section 1O thin routing manifest. Append-only. Files live in object storage; actual artifact data lives on the targeted domain row.';

-- ---------------------------------------------------------------------
-- 3. external_clinical_documents — Section 1O.4 domain target
-- ---------------------------------------------------------------------

create table if not exists public.external_clinical_documents (
  id uuid primary key default gen_random_uuid(),

  -- Primitives.
  org_id uuid not null default public.current_org_id() references public.orgs (id) on delete restrict,
  brand_id uuid references public.brands (id) on delete set null,
  data_environment text not null default public.current_data_env()
    check (data_environment in ('production', 'staging', 'internal_qa', 'synthetic')),

  patient_id uuid not null references public.patients (id) on delete cascade,

  -- Document classification within the chart context.
  kind text not null check (kind in (
    'medication_evidence',
    'supplement_evidence',
    'clinical_media',
    'external_medical_record',
    'prior_lab_report',                                    -- patient-uploaded historical labs (Section 1O.4 'prior_lab_report' route)
    'discharge_summary',
    'imaging_report',
    'consult_note',
    'progress_note_external',
    'misc_external'
  )),

  -- Subtype hint per Section 1O.3 (e.g., clinical_media_photo subtype 'hair' / 'skin' / 'body_composition').
  subtype text,

  -- Storage reference (the file lives here; manifest has the same storage_path).
  storage_bucket text not null default 'patient_documents',
  storage_path text not null,
  mime_type text not null,
  size_bytes bigint not null check (size_bytes >= 0),
  content_hash_sha256 text,

  -- Source/provenance per primitives addendum #2 (non-clinical row pattern).
  source_kind text check (source_kind is null or source_kind in (
    'intake', 'message', 'webhook', 'partner_adapter', 'document_extraction',
    'provider_decision', 'system_inference', 'staff_manual', 'patient_self', 'lab_feed'
  )),
  source_id text,
  source_routing_id uuid references public.patient_document_routing (id),

  -- Provider review / extraction status (Section 1O.10).
  review_status text not null default 'pending_review' check (review_status in (
    'pending_review', 'reviewed', 'flagged', 'archived'
  )),
  reviewed_by_user_id uuid references public.staff_profiles (id),
  reviewed_at timestamptz,
  extraction_status text not null default 'not_extracted' check (extraction_status in (
    'not_extracted', 'extraction_queued', 'extracted', 'extraction_failed'
  )),

  -- Sensitivity flag (Section 1O.11).
  sensitivity_tier text not null default 'standard_clinical' check (sensitivity_tier in (
    'strictest', 'strict', 'standard_clinical'
  )),

  -- Lifecycle (per primitives addendum data lifecycle: active → inactive → archived → deleted).
  status text not null default 'active' check (status in (
    'active', 'inactive', 'archived', 'superseded'
  )),
  supersedes_document_id uuid references public.external_clinical_documents (id),

  uploaded_at timestamptz not null default now(),
  expires_at timestamptz,
  metadata jsonb not null default '{}'::jsonb
);

create index if not exists ecd_patient_kind_idx
  on public.external_clinical_documents (patient_id, kind, uploaded_at desc)
  where status = 'active' and data_environment = 'production';
create index if not exists ecd_org_env_idx on public.external_clinical_documents (org_id, data_environment);
create index if not exists ecd_routing_back_idx
  on public.external_clinical_documents (source_routing_id)
  where source_routing_id is not null;
create index if not exists ecd_review_status_idx
  on public.external_clinical_documents (review_status, uploaded_at desc)
  where review_status = 'pending_review';

alter table public.external_clinical_documents enable row level security;

drop policy if exists ecd_select_staff on public.external_clinical_documents;
create policy ecd_select_staff on public.external_clinical_documents
  for select to authenticated
  using (public.is_staff_user(auth.uid()));

revoke insert, update, delete on public.external_clinical_documents from authenticated;
revoke insert, update, delete on public.external_clinical_documents from anon;

comment on table public.external_clinical_documents is
  'Section 1O.4 domain target for medication evidence + clinical media + general external records + patient-uploaded historical labs. Append-only soft-delete via status; supersession via supersedes_document_id.';

-- ---------------------------------------------------------------------
-- 4. payer_eligibility_documents — Section 1O.4.2 minimal target
-- ---------------------------------------------------------------------

create table if not exists public.payer_eligibility_documents (
  id uuid primary key default gen_random_uuid(),

  -- Primitives.
  org_id uuid not null default public.current_org_id() references public.orgs (id) on delete restrict,
  brand_id uuid references public.brands (id) on delete set null,
  data_environment text not null default public.current_data_env()
    check (data_environment in ('production', 'staging', 'internal_qa', 'synthetic')),

  patient_id uuid not null references public.patients (id) on delete cascade,

  -- Routing-only minimal shape per Section 1O.4.2 (full insurance-domain
  -- design deferred to future Section).
  payer_name text not null,
  plan_id text,
  member_id text,                                            -- PHI; access tier strict per 1O.11
  group_id text,
  card_side text not null check (card_side in ('front', 'back', 'eligibility_doc')),

  -- Storage reference.
  storage_bucket text not null default 'patient_documents',
  storage_path text not null,
  mime_type text not null,
  size_bytes bigint not null check (size_bytes >= 0),
  content_hash_sha256 text,

  -- Source/provenance.
  source_kind text check (source_kind is null or source_kind in (
    'intake', 'message', 'webhook', 'partner_adapter', 'document_extraction',
    'provider_decision', 'system_inference', 'staff_manual', 'patient_self', 'lab_feed'
  )),
  source_id text,
  source_routing_id uuid references public.patient_document_routing (id),

  eligibility_status text not null default 'uploaded' check (eligibility_status in (
    'uploaded', 'pending_verification', 'verified', 'rejected', 'expired'
  )),
  verified_at timestamptz,

  status text not null default 'active' check (status in (
    'active', 'inactive', 'archived', 'superseded'
  )),
  supersedes_document_id uuid references public.payer_eligibility_documents (id),

  uploaded_at timestamptz not null default now(),
  expires_at timestamptz,
  metadata jsonb not null default '{}'::jsonb
);

create index if not exists ped_patient_idx
  on public.payer_eligibility_documents (patient_id, uploaded_at desc)
  where status = 'active' and data_environment = 'production';
create index if not exists ped_org_env_idx on public.payer_eligibility_documents (org_id, data_environment);
create index if not exists ped_routing_back_idx
  on public.payer_eligibility_documents (source_routing_id)
  where source_routing_id is not null;

alter table public.payer_eligibility_documents enable row level security;

drop policy if exists ped_select_staff on public.payer_eligibility_documents;
create policy ped_select_staff on public.payer_eligibility_documents
  for select to authenticated
  using (public.is_staff_user(auth.uid()));

revoke insert, update, delete on public.payer_eligibility_documents from authenticated;
revoke insert, update, delete on public.payer_eligibility_documents from anon;

comment on table public.payer_eligibility_documents is
  'Section 1O.4.2 minimal target for insurance-card uploads. Routing-only shape; full insurance-domain design (eligibility checks, claims, prior auth) deferred to future Section.';

-- ---------------------------------------------------------------------
-- 5. SECURITY DEFINER orchestrator: route_patient_document
--
-- Single canonical entry point for ANY upload flow per Section 1O.2. The
-- TS API (lib/intake/documents/route-patient-document.ts) wraps this RPC
-- after performing the storage upload + MIME validation. Caller is
-- responsible for deciding the input_type + capture_surface; this function
-- enforces the routing matrix (input_type → domain_target → domain row
-- INSERT) atomically with the manifest INSERT and an audit_events row.
-- ---------------------------------------------------------------------

create or replace function public.route_patient_document(
  p_patient_id uuid,
  p_input_type text,
  p_capture_surface text,
  p_capture_source_id text,
  p_capture_source_module_id text,
  p_storage_bucket text,
  p_storage_path text,
  p_mime_type text,
  p_size_bytes bigint,
  p_content_hash_sha256 text,
  p_uploaded_by text,
  p_uploaded_by_staff_id uuid,
  p_org_id uuid default null,
  p_data_environment text default null,
  p_actor_kind text default null,
  p_metadata jsonb default '{}'::jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_org_id uuid;
  v_data_env text;
  v_actor_kind text;
  v_patient_org_id uuid;
  v_patient_data_env text;
  v_routing_id uuid;
  v_audit_id uuid;
  v_domain_target text;
  v_source_object_id uuid;
  v_sensitivity_tier text;
  v_kind text;
begin
  -- Resolve primitives (mirror record_intake_emissions_batch pattern per Phase 4C-pre).
  if p_patient_id is not null then
    select org_id, data_environment into v_patient_org_id, v_patient_data_env
      from patients where id = p_patient_id;
  end if;

  if p_org_id is not null then
    if v_patient_org_id is not null and v_patient_org_id <> p_org_id then
      raise exception 'Cross-org document routing rejected: caller passed org_id=% but patient %.org_id=%',
        p_org_id, p_patient_id, v_patient_org_id
        using errcode = 'insufficient_privilege',
              hint = 'Per Section 1U: PHI never crosses org_id.';
    end if;
    v_org_id := p_org_id;
  elsif v_patient_org_id is not null then
    v_org_id := v_patient_org_id;
  else
    v_org_id := '00000000-0000-0000-0000-000000000001'::uuid;
  end if;

  v_data_env := coalesce(p_data_environment, v_patient_data_env, 'production');
  v_actor_kind := coalesce(p_actor_kind, 'patient');

  perform set_config('app.current_org_id', v_org_id::text, true);
  perform set_config('app.current_data_env', v_data_env, true);

  -- Sensitivity tier from input_type (Section 1O.11 access tiering).
  v_sensitivity_tier := case
    when p_input_type in ('government_id_front', 'government_id_back',
                          'drivers_license_front', 'drivers_license_back',
                          'selfie_face_verification') then 'strictest'
    when p_input_type in ('insurance_card_front', 'insurance_card_back',
                          'payer_eligibility_document') then 'strict'
    else 'standard_clinical'
  end;

  -- Domain target from input_type (Section 1O.4 routing matrix).
  v_domain_target := case p_input_type
    when 'lab_document' then 'patient_diagnostic_reports'
    when 'prior_lab_report' then 'external_clinical_documents'
    when 'lab_intent_to_order' then 'intake_responses'
    when 'lab_completion_evidence' then 'lab_orders'
    when 'government_id_front' then 'patient_identity_verifications'
    when 'government_id_back' then 'patient_identity_verifications'
    when 'drivers_license_front' then 'patient_identity_verifications'
    when 'drivers_license_back' then 'patient_identity_verifications'
    when 'selfie_face_verification' then 'patient_identity_verifications'
    when 'insurance_card_front' then 'payer_eligibility_documents'
    when 'insurance_card_back' then 'payer_eligibility_documents'
    when 'payer_eligibility_document' then 'payer_eligibility_documents'
    when 'current_medication_photo' then 'external_clinical_documents'
    when 'supplement_stack_photo' then 'external_clinical_documents'
    when 'clinical_media_photo' then 'external_clinical_documents'
    when 'general_medical_record' then 'external_clinical_documents'
    when 'unclassified_pending_review' then 'none_pending_triage'
    else null
  end;

  if v_domain_target is null then
    raise exception 'Unknown input_type for routing: %', p_input_type
      using errcode = 'invalid_parameter_value',
            hint = 'See Section 1O.3 controlled vocabulary; canonical TS source: lib/intake/documents/types.ts';
  end if;

  -- Insert manifest row first (so we have the routing_id).
  insert into patient_document_routing (
    patient_id, input_type, domain_target, capture_surface, capture_source_id,
    capture_source_module_id, storage_bucket, storage_path, mime_type, size_bytes,
    content_hash_sha256, status, uploaded_by, uploaded_by_staff_id, sensitivity_tier,
    metadata
  ) values (
    p_patient_id, p_input_type, v_domain_target, p_capture_surface, p_capture_source_id,
    p_capture_source_module_id, p_storage_bucket, p_storage_path, p_mime_type, p_size_bytes,
    p_content_hash_sha256, 'captured', p_uploaded_by, p_uploaded_by_staff_id, v_sensitivity_tier,
    p_metadata
  ) returning id into v_routing_id;

  -- Branch: create the domain row per the routing matrix.
  if v_domain_target = 'external_clinical_documents' then
    -- Map input_type to external_clinical_documents.kind.
    v_kind := case p_input_type
      when 'prior_lab_report' then 'prior_lab_report'
      when 'current_medication_photo' then 'medication_evidence'
      when 'supplement_stack_photo' then 'supplement_evidence'
      when 'clinical_media_photo' then 'clinical_media'
      when 'general_medical_record' then 'external_medical_record'
      else 'misc_external'
    end;

    insert into external_clinical_documents (
      patient_id, kind, subtype, storage_bucket, storage_path, mime_type, size_bytes,
      content_hash_sha256, source_kind, source_id, source_routing_id, sensitivity_tier, metadata
    ) values (
      p_patient_id, v_kind, p_metadata->>'subtype', p_storage_bucket, p_storage_path,
      p_mime_type, p_size_bytes, p_content_hash_sha256,
      'intake', v_routing_id::text, v_routing_id, v_sensitivity_tier, p_metadata
    ) returning id into v_source_object_id;

  elsif v_domain_target = 'payer_eligibility_documents' then
    insert into payer_eligibility_documents (
      patient_id, payer_name, plan_id, member_id, group_id, card_side,
      storage_bucket, storage_path, mime_type, size_bytes, content_hash_sha256,
      source_kind, source_id, source_routing_id, metadata
    ) values (
      p_patient_id,
      coalesce(p_metadata->>'payer_name', 'unknown'),
      p_metadata->>'plan_id',
      p_metadata->>'member_id',
      p_metadata->>'group_id',
      case p_input_type
        when 'insurance_card_front' then 'front'
        when 'insurance_card_back' then 'back'
        else 'eligibility_doc'
      end,
      p_storage_bucket, p_storage_path, p_mime_type, p_size_bytes, p_content_hash_sha256,
      'intake', v_routing_id::text, v_routing_id, p_metadata
    ) returning id into v_source_object_id;

  elsif v_domain_target = 'patient_identity_verifications' then
    -- Use the existing Phase 3 table; populate only the artifact storage column.
    insert into patient_identity_verifications (
      patient_id, verification_method, id_artifact_kind, id_artifact_storage_id,
      selfie_artifact_storage_id, verification_status, metadata
    ) values (
      p_patient_id,
      case p_input_type
        when 'selfie_face_verification' then 'patient_photo_selfie'
        else 'staff_witnessed_in_person'
      end,
      case p_input_type
        when 'drivers_license_front' then 'drivers_license'
        when 'drivers_license_back' then 'drivers_license'
        when 'government_id_front' then 'state_id'
        when 'government_id_back' then 'state_id'
        else null
      end,
      case when p_input_type <> 'selfie_face_verification' then p_storage_path else null end,
      case when p_input_type = 'selfie_face_verification' then p_storage_path else null end,
      'pending',
      p_metadata
    ) returning id into v_source_object_id;

  elsif v_domain_target = 'patient_diagnostic_reports' then
    -- Stub: use existing patient_diagnostic_reports if shape allows; otherwise
    -- caller binds via 1L.5 orphan workflow. v1 leaves source_object_id null
    -- and lets 1L lab review surface bind.
    v_source_object_id := null;

  elsif v_domain_target = 'lab_orders' then
    -- lab_completion_evidence references an existing lab_orders row;
    -- caller passes lab_orders.id in metadata.lab_order_id.
    v_source_object_id := nullif(p_metadata->>'lab_order_id', '')::uuid;

  elsif v_domain_target = 'intake_responses' then
    -- lab_intent_to_order is a structured signal, not a file; caller has
    -- already inserted the intake_responses row and references it in
    -- metadata.intake_response_id.
    v_source_object_id := nullif(p_metadata->>'intake_response_id', '')::uuid;

  elsif v_domain_target = 'none_pending_triage' then
    -- unclassified_pending_review — manifest-only; ops triages later via reclassification.
    v_source_object_id := null;

  end if;

  -- Update manifest with the source_object_id + routed_at.
  update patient_document_routing
    set source_object_id = v_source_object_id,
        status = case when v_source_object_id is not null then 'routed'::text else status end,
        routed_at = case when v_source_object_id is not null then now() else routed_at end
    where id = v_routing_id;

  -- Audit per Section 1O.7 + primitives addendum.
  insert into audit_events (action, resource_type, resource_id, patient_id, actor_kind, org_id, metadata)
    values (
      'document.routed',
      'patient_document_routing',
      v_routing_id::text,
      p_patient_id,
      v_actor_kind,
      v_org_id,
      jsonb_build_object(
        'input_type', p_input_type,
        'domain_target', v_domain_target,
        'source_object_id', v_source_object_id,
        'capture_surface', p_capture_surface,
        'storage_path', p_storage_path,
        'sensitivity_tier', v_sensitivity_tier,
        'data_environment', v_data_env
      )
    ) returning id into v_audit_id;

  return jsonb_build_object(
    'routing_id', v_routing_id,
    'domain_target', v_domain_target,
    'source_object_id', v_source_object_id,
    'audit_event_id', v_audit_id
  );
end;
$$;

comment on function public.route_patient_document(uuid, text, text, text, text, text, text, text, bigint, text, text, uuid, uuid, text, text, jsonb) is
  'Phase 4D Section 1O canonical document routing entry point. Atomic: manifest INSERT + domain row INSERT + audit_events row in one Postgres transaction. Caller (TS routePatientDocument) handles object-storage upload + MIME validation + cross-org capability before invoking.';

grant execute on function public.route_patient_document(uuid, text, text, text, text, text, text, text, bigint, text, text, uuid, uuid, text, text, jsonb) to authenticated;
grant execute on function public.route_patient_document(uuid, text, text, text, text, text, text, text, bigint, text, text, uuid, uuid, text, text, jsonb) to service_role;

-- ---------------------------------------------------------------------
-- 6. Notes on legacy reconciliation
-- ---------------------------------------------------------------------
-- Per companion doc data_layers_reconciliation_v1.md early migration audit:
--
--   intake_uploads_storage (20260423120000)        — RECONCILE
--   rx_artifacts_storage   (20260422110000)        — RECONCILE
--   clinical_visit_pdf_artifacts (20260423173000)  — RECONCILE
--
-- Those three migrations established storage buckets only (no domain
-- tables). They remain functional. Future write paths (intake messaging
-- ops manual upload partner integration) MUST go through:
--
--   TS API: routePatientDocument() in lib/intake/documents/route-patient-document.ts
--   RPC:    public.route_patient_document(...)
--   Bucket: 'patient_documents' (canonical; this migration)
--
-- The clinical_visits.pdf_artifact jsonb column (added by
-- 20260423173000_clinical_visit_pdf_artifacts.sql) stays for now;
-- migration of that legacy column to a patient_document_routing reference
-- is deferred to a future targeted commit.
