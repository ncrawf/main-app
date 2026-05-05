-- =====================================================================
-- Phase 3 intake foundation migration per system map Section 1K.0.5.
--
-- Establishes canonical clinical infrastructure: claim ledger, reconciled
-- clinical entities, observations, process state, consents, decisions,
-- identity / contact, administrative entities.
--
-- Pre-migration verification confirmed:
--   * patient_lab_observations + patient_diagnostic_reports exist (20260426100000)
--   * audit_events exists (20260419210000)
--   * is_staff_user() exists (20260420140000)
--   * patients exists with first_name/last_name/address fields
-- =====================================================================

-- ---------------------------------------------------------------------
-- 0. Helper function: touch_updated_at()
-- ---------------------------------------------------------------------
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------
-- 1. patient_clinical_assertions — canonical claim ledger (Section 1K.5.A)
-- ---------------------------------------------------------------------
create table if not exists public.patient_clinical_assertions (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  concept_id text not null,
  concept_version text not null,
  concept_type text generated always as (split_part(concept_id, '.', 1)) stored,
  field_name text,
  assertion_type text not null check (assertion_type in (
    'present', 'absent', 'history_of', 'suspected', 'ruled_out',
    'active_problem', 'resolved', 'family_history', 'risk_factor',
    'exposure', 'use', 'allergy_reaction', 'signed', 'selected', 'captured'
  )),
  status text not null check (status in (
    'unconfirmed', 'provider_confirmed', 'provider_rejected',
    'provider_resolved', 'provider_refined', 'retracted', 'superseded'
  )),
  authored_by text not null check (authored_by in (
    'patient_reported', 'patient_self_correction', 'provider_assessed',
    'provider_confirmed', 'document_extracted', 'lab_derived',
    'third_party_reported', 'ai_suggested', 'system_derived'
  )),
  authored_by_user_id uuid,
  authority_rank int generated always as (
    case authored_by
      when 'provider_confirmed' then 100 when 'provider_assessed' then 90
      when 'lab_derived' then 70 when 'document_extracted' then 60
      when 'patient_self_correction' then 50 when 'patient_reported' then 40
      when 'third_party_reported' then 30 when 'ai_suggested' then 20
      when 'system_derived' then 10 else 0 end
  ) stored,
  confidence text not null check (confidence in ('low', 'moderate', 'high', 'definitive')),
  confidence_score numeric(3,2) check (confidence_score is null or (confidence_score >= 0 and confidence_score <= 1)),
  evidence_refs jsonb not null default '[]'::jsonb,
  context jsonb not null default '{}'::jsonb,
  context_key text not null,
  onset_at timestamptz,
  onset_estimated boolean default false,
  resolved_at timestamptz,
  resolution_reason text,
  severity text check (severity is null or severity in ('none', 'mild', 'moderate', 'severe', 'very_severe')),
  notes_clinical_visit_id uuid,
  supersedes_assertion_id uuid references public.patient_clinical_assertions (id),
  retracted_at timestamptz,
  retracted_reason text,
  asserted_at timestamptz not null default now(),
  ingested_at timestamptz not null default now(),
  branch_path_token text,
  source_intake_response_id uuid,
  metadata jsonb
);
create index if not exists pca_patient_concept_idx on public.patient_clinical_assertions (patient_id, concept_id, context_key);
create index if not exists pca_patient_status_idx on public.patient_clinical_assertions (patient_id, status, asserted_at);
create index if not exists pca_patient_concept_type_idx on public.patient_clinical_assertions (patient_id, concept_type, status) where retracted_at is null;
create index if not exists pca_supersedes_idx on public.patient_clinical_assertions (supersedes_assertion_id) where supersedes_assertion_id is not null;
create index if not exists pca_authored_by_idx on public.patient_clinical_assertions (authored_by, asserted_at);
create index if not exists pca_source_response_idx on public.patient_clinical_assertions (source_intake_response_id) where source_intake_response_id is not null;
comment on table public.patient_clinical_assertions is 'Canonical clinical claim ledger per Section 1K.5.A. Append-only.';

-- ---------------------------------------------------------------------
-- 2. patient_state_observations (Section 1M)
-- ---------------------------------------------------------------------
create table if not exists public.patient_state_observations (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  field_name text not null,
  value jsonb not null,
  value_units text,
  observed_at timestamptz not null,
  source text not null check (source in ('patient_self_reported', 'staff_measured', 'wearable', 'lab_derived', 'document_extracted')),
  observation_context jsonb not null default '{}'::jsonb,
  clinical_visit_id uuid,
  recorded_by_user_id uuid,
  supersedes_observation_id uuid references public.patient_state_observations (id),
  recorded_at timestamptz not null default now(),
  metadata jsonb
);
create index if not exists pso_patient_field_idx on public.patient_state_observations (patient_id, field_name, observed_at desc);
create index if not exists pso_patient_observed_idx on public.patient_state_observations (patient_id, observed_at desc);
comment on table public.patient_state_observations is 'Trackable measurements per Section 1M. field_name vocabulary in lib/clinical-concepts/vital-field-names.ts.';

-- ---------------------------------------------------------------------
-- 3. patient_identity_verifications (Section 1J.4 + Patch G4)
-- ---------------------------------------------------------------------
create table if not exists public.patient_identity_verifications (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  verification_method text not null check (verification_method in ('patient_photo_selfie', 'ssn_last4', 'staff_witnessed_in_person')),
  verifying_staff_user_id uuid references public.staff_profiles (id),
  location_id uuid,
  id_artifact_kind text check (id_artifact_kind is null or id_artifact_kind in ('drivers_license', 'passport', 'state_id', 'permanent_resident_card', 'military_id')),
  id_artifact_storage_id text,
  selfie_artifact_storage_id text,
  biometric_match_status text check (biometric_match_status is null or biometric_match_status in ('pending', 'matched', 'failed', 'unverifiable')),
  staff_attestation_text text,
  verified_at timestamptz not null default now(),
  verification_status text not null check (verification_status in ('pending', 'verified', 'failed', 'expired')),
  metadata jsonb not null default '{}'::jsonb
);
create index if not exists piv_patient_idx on public.patient_identity_verifications (patient_id, verified_at desc);

-- ---------------------------------------------------------------------
-- 4. subscriptions
-- ---------------------------------------------------------------------
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  pricing_profile_id text not null,
  pricing_profile_version text not null,
  pathway_code text not null,
  plan_id text not null,
  status text not null check (status in ('pending', 'active', 'paused', 'cancelled', 'expired')),
  psp text not null default 'stripe' check (psp in ('stripe')),
  stripe_subscription_id text, stripe_price_id text, stripe_customer_id text,
  started_at timestamptz, current_period_start timestamptz, current_period_end timestamptz,
  cancellation_window_days int not null default 2,
  cancelled_at timestamptz, cancellation_reason text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists subs_patient_status_idx on public.subscriptions (patient_id, status);
create trigger subscriptions_updated_at_trigger before update on public.subscriptions for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------
-- 5. intake_sessions
-- ---------------------------------------------------------------------
create table if not exists public.intake_sessions (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references public.patients (id),
  pre_account_session_id uuid,
  pathway_codes text[] not null,
  pathway_version_pins jsonb not null,
  funnel_slug text not null, funnel_version text not null,
  engine_version text not null, safety_ruleset_version text not null,
  status text not null check (status in (
    'in_progress', 'submitted', 'closed_ineligible', 'abandoned',
    'superseded', 'identity_uplift_in_progress', 'identity_uplift_pending_retry',
    'identity_uplift_cancelled', 'identity_uplift_refreshed'
  )),
  closed_eligibility_pathway_codes text[],
  closed_reason_code text,
  reopen_eligibility_criteria text,
  prior_closed_session_id uuid references public.intake_sessions (id),
  prior_cancelled_session_id uuid references public.intake_sessions (id),
  refreshes_identity_from_session_id uuid references public.intake_sessions (id),
  interaction_context jsonb not null,
  acquisition_source jsonb, cohort_assignments jsonb,
  started_at timestamptz not null default now(),
  last_activity_at timestamptz not null default now(),
  submitted_at timestamptz, closed_at timestamptz,
  last_resolver_step_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists is_patient_idx on public.intake_sessions (patient_id) where patient_id is not null;
create index if not exists is_status_idx on public.intake_sessions (status);
create index if not exists is_funnel_idx on public.intake_sessions (funnel_slug);
create trigger intake_sessions_updated_at_trigger before update on public.intake_sessions for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------
-- 6. intake_responses (Mode J supersession per Section 1K.5)
-- ---------------------------------------------------------------------
create table if not exists public.intake_responses (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.intake_sessions (id) on delete cascade,
  question_id text not null, question_version text not null,
  module_id text not null, module_version text not null,
  branch_id text, branch_version text, branch_path_token text,
  raw_value jsonb not null,
  answered_at timestamptz not null default now(),
  rendered_at timestamptz,
  client_round_trip_ms integer, server_compute_time_ms integer,
  resolver_step_id text,
  engine_version text not null,
  supersedes_response_id uuid references public.intake_responses (id),
  correction_reason text,
  client_idempotency_key text,
  interaction_context jsonb not null,
  unique (session_id, question_id, question_version, branch_path_token)
);
create index if not exists ir_session_idx on public.intake_responses (session_id);
create index if not exists ir_question_idx on public.intake_responses (question_id);

-- ---------------------------------------------------------------------
-- 7. patient_consents (Section 1K.11; 13-value enum)
-- ---------------------------------------------------------------------
create table if not exists public.patient_consents (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references public.patients (id),
  type text not null check (type in (
    'telehealth_consent', 'terms_and_conditions', 'privacy_policy_acknowledgment',
    'off_label_rx_acknowledgment', 'sms_marketing_opt_in', 'subscription_auto_renew',
    'identity_verification_biometric', 'research_or_deidentified_data',
    'prescription_order_acceptance', 'marketing_sms', 'marketing_email',
    'marketing_personalization_with_phi', 'membership_service_agreement'
  )),
  version_hash text not null, legal_text_snapshot_id text not null,
  accepted_at timestamptz not null default now(),
  source_surface text not null check (source_surface in (
    'intake_account_creation', 'intake_state_gate', 'intake_submit_to_provider',
    'checkout_subscription', 'account_settings_sms', 'account_settings_research',
    'provider_message', 'ops_manual_capture'
  )),
  captured_intake_response_id uuid references public.intake_responses (id),
  captured_session_id uuid references public.intake_sessions (id),
  captured_atom_id uuid references public.patient_clinical_assertions (id),
  ip_address text, device_context jsonb,
  captured_by text not null default 'patient' check (captured_by in ('patient', 'staff_witnessed_in_person')),
  verifying_staff_user_id uuid references public.staff_profiles (id),
  staff_attestation_text text,
  revoked_at timestamptz, revoked_reason text,
  supersedes_consent_id uuid references public.patient_consents (id),
  metadata jsonb not null default '{}'::jsonb
);
create index if not exists pc_patient_type_active_idx on public.patient_consents (patient_id, type) where revoked_at is null;
create index if not exists pc_type_accepted_idx on public.patient_consents (type, accepted_at);

-- ---------------------------------------------------------------------
-- 8. eligibility_decisions
-- ---------------------------------------------------------------------
create table if not exists public.eligibility_decisions (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references public.patients (id),
  session_id uuid not null references public.intake_sessions (id) on delete cascade,
  pathway_code text not null,
  rule_id text not null, rule_version text not null,
  result text not null check (result in ('eligible', 'review_required', 'blocked')),
  reasons jsonb not null default '[]'::jsonb,
  input_refs jsonb not null,
  inputs_hash text not null,
  input_snapshot jsonb,
  decided_at timestamptz not null default now(),
  decided_by text not null default 'rule_engine' check (decided_by in ('rule_engine', 'provider_override', 'system_derived')),
  decided_by_user_id uuid references public.staff_profiles (id),
  supersedes_decision_id uuid references public.eligibility_decisions (id),
  interaction_context jsonb not null,
  metadata jsonb not null default '{}'::jsonb
);
create index if not exists ed_patient_idx on public.eligibility_decisions (patient_id);
create index if not exists ed_session_idx on public.eligibility_decisions (session_id);
create index if not exists ed_pathway_result_idx on public.eligibility_decisions (pathway_code, result, decided_at);

-- ---------------------------------------------------------------------
-- 9. patient_addresses (multi-row history)
-- ---------------------------------------------------------------------
create table if not exists public.patient_addresses (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  street text not null, apt text, city text not null, state text not null, zip text not null,
  country text not null default 'US',
  validated_by text check (validated_by is null or validated_by in ('usps', 'unvalidated')),
  is_default boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb
);
create index if not exists pa_patient_idx on public.patient_addresses (patient_id) where is_active = true;
create trigger patient_addresses_updated_at_trigger before update on public.patient_addresses for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------
-- 10. patient_contacts
-- ---------------------------------------------------------------------
create table if not exists public.patient_contacts (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  kind text not null check (kind in ('phone_mobile', 'phone_home', 'phone_work', 'email_personal', 'email_work')),
  value text not null,
  is_default boolean not null default false,
  is_active boolean not null default true,
  verified_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb
);
create index if not exists pcontact_patient_idx on public.patient_contacts (patient_id) where is_active = true;
create trigger patient_contacts_updated_at_trigger before update on public.patient_contacts for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------
-- 11. patient_medications (reconciled clinical entity)
-- ---------------------------------------------------------------------
create table if not exists public.patient_medications (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  medication_concept_id text not null,
  name_normalized text not null, name_as_reported text,
  dose_value numeric, dose_units text, frequency text,
  route text check (route is null or route in (
    'PO', 'IM', 'SQ', 'IV', 'topical', 'inhaled', 'sublingual', 'transdermal',
    'rectal', 'vaginal', 'ophthalmic', 'otic', 'nasal', 'other'
  )),
  prn_indication text,
  prescribed_by_user_id uuid, prescribed_by_external_provider_id uuid,
  prescribing_clinical_visit_id uuid, treatment_order_id uuid,
  start_date date, end_date date,
  status text not null check (status in ('proposed', 'active', 'discontinued', 'on_hold')),
  reconciliation_status text not null check (reconciliation_status in (
    'unreconciled', 'reconciled', 'conflict', 'declined_to_reconcile', 'superseded'
  )),
  reconciled_by_user_id uuid, reconciled_at timestamptz,
  source_assertion_id uuid references public.patient_clinical_assertions (id),
  supersedes_medication_id uuid references public.patient_medications (id),
  asserted_at timestamptz not null default now(),
  retracted_at timestamptz, retracted_reason text,
  metadata jsonb
);
create index if not exists pm_patient_status_idx on public.patient_medications (patient_id, status) where retracted_at is null;
create index if not exists pm_patient_recon_idx on public.patient_medications (patient_id, reconciliation_status);
create index if not exists pm_source_idx on public.patient_medications (source_assertion_id) where source_assertion_id is not null;

-- ---------------------------------------------------------------------
-- 12. patient_allergies
-- ---------------------------------------------------------------------
create table if not exists public.patient_allergies (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  allergen_concept_id text not null,
  reaction_type text not null check (reaction_type in ('rash', 'anaphylaxis', 'swelling', 'gi', 'respiratory', 'other', 'unknown')),
  severity text not null check (severity in ('mild', 'moderate', 'severe', 'life_threatening', 'unknown')),
  onset_age int, onset_date date, last_reaction_date date,
  verified_by_user_id uuid,
  reconciliation_status text not null check (reconciliation_status in (
    'unreconciled', 'reconciled', 'conflict', 'declined_to_reconcile', 'superseded'
  )),
  source_assertion_id uuid references public.patient_clinical_assertions (id),
  clinical_visit_id uuid,
  supersedes_allergy_id uuid references public.patient_allergies (id),
  asserted_at timestamptz not null default now(),
  retracted_at timestamptz, retracted_reason text,
  metadata jsonb
);
create index if not exists pal_patient_recon_idx on public.patient_allergies (patient_id, reconciliation_status) where retracted_at is null;

-- ---------------------------------------------------------------------
-- 13. patient_immunizations
-- ---------------------------------------------------------------------
create table if not exists public.patient_immunizations (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  cvx_code text, vaccine_name text not null,
  administered_date date not null,
  lot_number text, manufacturer text,
  site text check (site is null or site in ('left_deltoid', 'right_deltoid', 'left_thigh', 'right_thigh', 'oral', 'nasal', 'other')),
  route text check (route is null or route in ('IM', 'SQ', 'PO', 'IN', 'ID', 'other')),
  administering_user_id uuid, administering_external_org text, clinical_visit_id uuid,
  source text not null check (source in ('in_house_administration', 'external_record_imported', 'patient_self_reported')),
  reconciliation_status text not null check (reconciliation_status in (
    'unreconciled', 'reconciled', 'conflict', 'declined_to_reconcile', 'superseded'
  )),
  source_assertion_id uuid references public.patient_clinical_assertions (id),
  supersedes_immunization_id uuid references public.patient_immunizations (id),
  asserted_at timestamptz not null default now(),
  retracted_at timestamptz, retracted_reason text,
  metadata jsonb
);
create index if not exists pi_patient_admin_idx on public.patient_immunizations (patient_id, administered_date desc) where retracted_at is null;

-- ---------------------------------------------------------------------
-- 14. patient_exam_findings (provider-only)
-- ---------------------------------------------------------------------
create table if not exists public.patient_exam_findings (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  finding_concept_id text not null,
  severity text not null check (severity in ('mild', 'moderate', 'severe')),
  location jsonb,
  laterality text check (laterality is null or laterality in ('left', 'right', 'bilateral', 'midline', 'n_a')),
  observed_at timestamptz not null,
  observed_by_provider_user_id uuid not null,
  clinical_visit_id uuid not null,
  free_text_notes text,
  supersedes_finding_id uuid references public.patient_exam_findings (id),
  retracted_at timestamptz, retracted_reason text,
  metadata jsonb
);
create index if not exists pef_patient_observed_idx on public.patient_exam_findings (patient_id, observed_at desc) where retracted_at is null;
create index if not exists pef_visit_idx on public.patient_exam_findings (clinical_visit_id);

-- ---------------------------------------------------------------------
-- 15. patient_external_providers
-- ---------------------------------------------------------------------
create table if not exists public.patient_external_providers (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  relationship_type text not null check (relationship_type in ('pcp', 'referring', 'specialty_consultant', 'prior_provider')),
  provider_name text not null, practice_name text, npi text,
  address jsonb, phone text, fax text, email text,
  verified_by_user_id uuid, verified_at timestamptz,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb
);
create index if not exists pexp_patient_idx on public.patient_external_providers (patient_id) where is_active = true;
create trigger patient_external_providers_updated_at_trigger before update on public.patient_external_providers for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------
-- 16. patient_preferred_pharmacies
-- ---------------------------------------------------------------------
create table if not exists public.patient_preferred_pharmacies (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  pharmacy_name text not null, pharmacy_chain text,
  address jsonb not null, phone text not null, fax text, npi text,
  is_default boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb
);
create index if not exists ppharm_patient_idx on public.patient_preferred_pharmacies (patient_id) where is_active = true;
create trigger patient_preferred_pharmacies_updated_at_trigger before update on public.patient_preferred_pharmacies for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------
-- 17. patient_emergency_contacts
-- ---------------------------------------------------------------------
create table if not exists public.patient_emergency_contacts (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  name text not null,
  relationship text not null check (relationship in ('spouse', 'parent', 'child', 'sibling', 'partner', 'friend', 'legal_guardian', 'other')),
  phone_primary text not null, phone_secondary text, email text, address jsonb,
  is_authorized_to_receive_phi boolean not null default false,
  is_default boolean not null default false,
  is_active boolean not null default true,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb
);
create index if not exists pec_patient_idx on public.patient_emergency_contacts (patient_id) where is_active = true;
create trigger patient_emergency_contacts_updated_at_trigger before update on public.patient_emergency_contacts for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------
-- 18. patient_advance_directives
-- ---------------------------------------------------------------------
create table if not exists public.patient_advance_directives (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  directive_type text not null check (directive_type in ('DNR', 'DNI', 'POLST', 'healthcare_proxy', 'living_will')),
  executed_date date not null, expires_date date,
  proxy_name text, proxy_phone text, proxy_relationship text,
  document_storage_id text, verified_by_user_id uuid,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb
);
create index if not exists pad_patient_idx on public.patient_advance_directives (patient_id) where is_active = true;
create trigger patient_advance_directives_updated_at_trigger before update on public.patient_advance_directives for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------
-- 19. patient_insurance_details
-- ---------------------------------------------------------------------
create table if not exists public.patient_insurance_details (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid not null references public.patients (id) on delete cascade,
  coverage_type text not null check (coverage_type in ('medical', 'prescription', 'dental', 'vision')),
  carrier_name text not null, plan_name text,
  member_id text not null, group_id text,
  subscriber_name text, subscriber_dob date,
  relationship_to_subscriber text not null default 'self' check (relationship_to_subscriber in ('self', 'spouse', 'dependent', 'other')),
  effective_date date, termination_date date,
  card_image_storage_id text, verified_by_user_id uuid,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb
);
create index if not exists pid_patient_idx on public.patient_insurance_details (patient_id) where is_active = true;
create trigger patient_insurance_details_updated_at_trigger before update on public.patient_insurance_details for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------
-- 20. RLS + append-only discipline
-- ---------------------------------------------------------------------
alter table public.patient_clinical_assertions enable row level security;
alter table public.patient_state_observations enable row level security;
alter table public.patient_identity_verifications enable row level security;
alter table public.subscriptions enable row level security;
alter table public.intake_sessions enable row level security;
alter table public.intake_responses enable row level security;
alter table public.patient_consents enable row level security;
alter table public.eligibility_decisions enable row level security;
alter table public.patient_addresses enable row level security;
alter table public.patient_contacts enable row level security;
alter table public.patient_medications enable row level security;
alter table public.patient_allergies enable row level security;
alter table public.patient_immunizations enable row level security;
alter table public.patient_exam_findings enable row level security;
alter table public.patient_external_providers enable row level security;
alter table public.patient_preferred_pharmacies enable row level security;
alter table public.patient_emergency_contacts enable row level security;
alter table public.patient_advance_directives enable row level security;
alter table public.patient_insurance_details enable row level security;

create policy pca_staff_read on public.patient_clinical_assertions for select using (public.is_staff_user(auth.uid()));
create policy pso_staff_read on public.patient_state_observations for select using (public.is_staff_user(auth.uid()));
create policy piv_staff_read on public.patient_identity_verifications for select using (public.is_staff_user(auth.uid()));
create policy subs_staff_read on public.subscriptions for select using (public.is_staff_user(auth.uid()));
create policy is_staff_read on public.intake_sessions for select using (public.is_staff_user(auth.uid()));
create policy ir_staff_read on public.intake_responses for select using (public.is_staff_user(auth.uid()));
create policy pc_staff_read on public.patient_consents for select using (public.is_staff_user(auth.uid()));
create policy ed_staff_read on public.eligibility_decisions for select using (public.is_staff_user(auth.uid()));
create policy pa_staff_read on public.patient_addresses for select using (public.is_staff_user(auth.uid()));
create policy pcontact_staff_read on public.patient_contacts for select using (public.is_staff_user(auth.uid()));
create policy pm_staff_read on public.patient_medications for select using (public.is_staff_user(auth.uid()));
create policy pal_staff_read on public.patient_allergies for select using (public.is_staff_user(auth.uid()));
create policy pi_staff_read on public.patient_immunizations for select using (public.is_staff_user(auth.uid()));
create policy pef_staff_read on public.patient_exam_findings for select using (public.is_staff_user(auth.uid()));
create policy pexp_staff_read on public.patient_external_providers for select using (public.is_staff_user(auth.uid()));
create policy ppharm_staff_read on public.patient_preferred_pharmacies for select using (public.is_staff_user(auth.uid()));
create policy pec_staff_read on public.patient_emergency_contacts for select using (public.is_staff_user(auth.uid()));
create policy pad_staff_read on public.patient_advance_directives for select using (public.is_staff_user(auth.uid()));
create policy pid_staff_read on public.patient_insurance_details for select using (public.is_staff_user(auth.uid()));

-- Append-only via REVOKE UPDATE per Section 1K.5.A. Status changes write new rows
-- with supersedes_*_id chain. Mutations route through SECURITY DEFINER wrappers
-- in Phase 4 per Section 1K.0.5.11 router shape discipline.
revoke update on public.patient_clinical_assertions from authenticated;
revoke update on public.intake_responses from authenticated;
revoke update on public.patient_consents from authenticated;
revoke update on public.patient_state_observations from authenticated;
revoke update on public.patient_identity_verifications from authenticated;
revoke update on public.eligibility_decisions from authenticated;
revoke update on public.patient_medications from authenticated;
revoke update on public.patient_allergies from authenticated;
revoke update on public.patient_immunizations from authenticated;
revoke update on public.patient_exam_findings from authenticated;
