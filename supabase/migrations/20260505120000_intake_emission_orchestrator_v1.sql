-- =====================================================================
-- Phase 4A Commit 2 — record_intake_emissions_batch SECURITY DEFINER function.
--
-- Implements the writeEmissions transaction orchestrator per Phase 3
-- pressure-test Gap 3 + system map Section 1K.0.5.11 (router shape) +
-- Section 1Q.7 (same-transaction audit emission CI lint).
--
-- Single Postgres function wraps the multi-row insert + paired audit_events
-- emission in ONE transaction. Called via supabase-js .rpc() from the
-- TypeScript writeEmissions wrapper (Commit 3).
--
-- 21 target branches per the EmissionTarget enum in lib/intake/targets.ts.
--
-- Anti-drift: NO new tables. ALTER on existing treatment_orders adds
-- intake-aware columns (additive, IF NOT EXISTS). commerce_order target
-- raises an exception until commerce_orders table is created (out of
-- Phase 4A scope; future retail rail per Section 1Q.23 Patch G5).
-- =====================================================================

-- ---------------------------------------------------------------------
-- 0. Additive ALTERs on existing treatment_orders for intake awareness
-- ---------------------------------------------------------------------

alter table public.treatment_orders
  add column if not exists intake_session_id uuid references public.intake_sessions (id) on delete set null,
  add column if not exists pathway_code text,
  add column if not exists interaction_context jsonb;

create index if not exists treatment_orders_intake_session_idx
  on public.treatment_orders (intake_session_id) where intake_session_id is not null;

create index if not exists treatment_orders_pathway_status_idx
  on public.treatment_orders (pathway_code, status) where pathway_code is not null;

-- ---------------------------------------------------------------------
-- 1. record_intake_emissions_batch — the orchestrator
-- ---------------------------------------------------------------------

create or replace function public.record_intake_emissions_batch(
  p_session_id uuid,
  p_patient_id uuid,
  p_intake_response_id uuid,
  p_assertion_group_id text,
  p_interaction_context jsonb,
  p_emissions jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  emission jsonb;
  payload jsonb;
  target_name text;
  inserted_id uuid;
  audit_id uuid;
  prior_assertion_id uuid := null;
  audit_metadata jsonb;
  results jsonb := '[]'::jsonb;
begin
  for emission in select * from jsonb_array_elements(p_emissions) loop
    target_name := emission->>'target';
    payload := emission->'payload';
    inserted_id := null;
    audit_id := null;

    -- ---------- 1. clinical_assertion ----------
    if target_name = 'clinical_assertion' then
      insert into patient_clinical_assertions (
        patient_id, concept_id, concept_version, assertion_type, status, authored_by,
        authored_by_user_id, confidence, confidence_score, evidence_refs, context, context_key,
        onset_at, onset_estimated, resolved_at, resolution_reason, severity,
        notes_clinical_visit_id, supersedes_assertion_id, branch_path_token,
        source_intake_response_id, metadata
      ) values (
        p_patient_id,
        payload->>'concept_id',
        payload->>'concept_version',
        payload->>'assertion_type',
        payload->>'status',
        payload->>'authored_by',
        nullif(payload->>'authored_by_user_id', '')::uuid,
        payload->>'confidence',
        nullif(payload->>'confidence_score', '')::numeric,
        coalesce(payload->'evidence_refs', '[]'::jsonb),
        coalesce(payload->'context', '{}'::jsonb),
        payload->>'context_key',
        nullif(payload->>'onset_at', '')::timestamptz,
        coalesce((payload->>'onset_estimated')::boolean, false),
        nullif(payload->>'resolved_at', '')::timestamptz,
        payload->>'resolution_reason',
        nullif(payload->>'severity', ''),
        nullif(payload->>'notes_clinical_visit_id', '')::uuid,
        nullif(payload->>'supersedes_assertion_id', '')::uuid,
        coalesce(payload->>'branch_path_token', null),
        p_intake_response_id,
        payload->'metadata'
      ) returning id into inserted_id;
      prior_assertion_id := inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'patient_clinical_assertions', inserted_id::text, p_patient_id,
                jsonb_build_object(
                  'session_id', p_session_id,
                  'intake_response_id', p_intake_response_id,
                  'concept_id', payload->>'concept_id',
                  'concept_version', payload->>'concept_version',
                  'assertion_type', payload->>'assertion_type',
                  'authored_by', payload->>'authored_by',
                  'assertion_group_id', p_assertion_group_id,
                  'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 2. observation ----------
    elsif target_name = 'observation' then
      insert into patient_state_observations (
        patient_id, field_name, value, value_units, observed_at, source,
        observation_context, clinical_visit_id, recorded_by_user_id, supersedes_observation_id, metadata
      ) values (
        p_patient_id,
        payload->>'field_name',
        payload->'value',
        nullif(payload->>'value_units', ''),
        coalesce(nullif(payload->>'observed_at', '')::timestamptz, now()),
        payload->>'source',
        coalesce(payload->'observation_context', '{}'::jsonb),
        nullif(payload->>'clinical_visit_id', '')::uuid,
        nullif(payload->>'recorded_by_user_id', '')::uuid,
        nullif(payload->>'supersedes_observation_id', '')::uuid,
        payload->'metadata'
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'patient_state_observations', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id, 'field_name', payload->>'field_name',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 3. medication (reconciled entity; dual emit pairs with clinical_assertion) ----------
    elsif target_name = 'medication' then
      insert into patient_medications (
        patient_id, medication_concept_id, name_normalized, name_as_reported,
        dose_value, dose_units, frequency, route, prn_indication,
        prescribed_by_user_id, prescribed_by_external_provider_id, prescribing_clinical_visit_id,
        treatment_order_id, start_date, end_date, status, reconciliation_status,
        reconciled_by_user_id, reconciled_at,
        source_assertion_id, supersedes_medication_id, metadata
      ) values (
        p_patient_id,
        payload->>'medication_concept_id',
        payload->>'name_normalized',
        nullif(payload->>'name_as_reported', ''),
        nullif(payload->>'dose_value', '')::numeric,
        nullif(payload->>'dose_units', ''),
        nullif(payload->>'frequency', ''),
        nullif(payload->>'route', ''),
        nullif(payload->>'prn_indication', ''),
        nullif(payload->>'prescribed_by_user_id', '')::uuid,
        nullif(payload->>'prescribed_by_external_provider_id', '')::uuid,
        nullif(payload->>'prescribing_clinical_visit_id', '')::uuid,
        nullif(payload->>'treatment_order_id', '')::uuid,
        nullif(payload->>'start_date', '')::date,
        nullif(payload->>'end_date', '')::date,
        payload->>'status',
        payload->>'reconciliation_status',
        nullif(payload->>'reconciled_by_user_id', '')::uuid,
        nullif(payload->>'reconciled_at', '')::timestamptz,
        coalesce(nullif(payload->>'source_assertion_id', '')::uuid, prior_assertion_id),
        nullif(payload->>'supersedes_medication_id', '')::uuid,
        payload->'metadata'
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'patient_medications', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'source_assertion_id', coalesce(payload->>'source_assertion_id', prior_assertion_id::text),
                                   'reconciliation_status', payload->>'reconciliation_status',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 4. allergy ----------
    elsif target_name = 'allergy' then
      insert into patient_allergies (
        patient_id, allergen_concept_id, reaction_type, severity,
        onset_age, onset_date, last_reaction_date, verified_by_user_id, reconciliation_status,
        source_assertion_id, clinical_visit_id, supersedes_allergy_id, metadata
      ) values (
        p_patient_id,
        payload->>'allergen_concept_id',
        payload->>'reaction_type',
        payload->>'severity',
        nullif(payload->>'onset_age', '')::int,
        nullif(payload->>'onset_date', '')::date,
        nullif(payload->>'last_reaction_date', '')::date,
        nullif(payload->>'verified_by_user_id', '')::uuid,
        payload->>'reconciliation_status',
        coalesce(nullif(payload->>'source_assertion_id', '')::uuid, prior_assertion_id),
        nullif(payload->>'clinical_visit_id', '')::uuid,
        nullif(payload->>'supersedes_allergy_id', '')::uuid,
        payload->'metadata'
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'patient_allergies', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'reconciliation_status', payload->>'reconciliation_status',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 5. immunization ----------
    elsif target_name = 'immunization' then
      insert into patient_immunizations (
        patient_id, cvx_code, vaccine_name, administered_date, lot_number, manufacturer,
        site, route, administering_user_id, administering_external_org, clinical_visit_id,
        source, reconciliation_status, source_assertion_id, supersedes_immunization_id, metadata
      ) values (
        p_patient_id,
        nullif(payload->>'cvx_code', ''),
        payload->>'vaccine_name',
        (payload->>'administered_date')::date,
        nullif(payload->>'lot_number', ''),
        nullif(payload->>'manufacturer', ''),
        nullif(payload->>'site', ''),
        nullif(payload->>'route', ''),
        nullif(payload->>'administering_user_id', '')::uuid,
        nullif(payload->>'administering_external_org', ''),
        nullif(payload->>'clinical_visit_id', '')::uuid,
        payload->>'source',
        payload->>'reconciliation_status',
        coalesce(nullif(payload->>'source_assertion_id', '')::uuid, prior_assertion_id),
        nullif(payload->>'supersedes_immunization_id', '')::uuid,
        payload->'metadata'
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'patient_immunizations', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'reconciliation_status', payload->>'reconciliation_status',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 6. exam_finding (provider-only path; clinical_visit_id NOT NULL) ----------
    elsif target_name = 'exam_finding' then
      insert into patient_exam_findings (
        patient_id, finding_concept_id, severity, location, laterality,
        observed_at, observed_by_provider_user_id, clinical_visit_id, free_text_notes,
        supersedes_finding_id, metadata
      ) values (
        p_patient_id,
        payload->>'finding_concept_id',
        payload->>'severity',
        payload->'location',
        nullif(payload->>'laterality', ''),
        (payload->>'observed_at')::timestamptz,
        (payload->>'observed_by_provider_user_id')::uuid,
        (payload->>'clinical_visit_id')::uuid,
        nullif(payload->>'free_text_notes', ''),
        nullif(payload->>'supersedes_finding_id', '')::uuid,
        payload->'metadata'
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'patient_exam_findings', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'finding_concept_id', payload->>'finding_concept_id',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 7. consent ----------
    elsif target_name = 'consent' then
      insert into patient_consents (
        patient_id, type, version_hash, legal_text_snapshot_id, accepted_at, source_surface,
        captured_intake_response_id, captured_session_id, captured_atom_id,
        ip_address, device_context, captured_by, verifying_staff_user_id, staff_attestation_text,
        supersedes_consent_id, metadata
      ) values (
        p_patient_id,
        payload->>'type',
        payload->>'version_hash',
        payload->>'legal_text_snapshot_id',
        coalesce(nullif(payload->>'accepted_at', '')::timestamptz, now()),
        payload->>'source_surface',
        p_intake_response_id,
        p_session_id,
        coalesce(nullif(payload->>'captured_atom_id', '')::uuid, prior_assertion_id),
        nullif(payload->>'ip_address', ''),
        payload->'device_context',
        coalesce(payload->>'captured_by', 'patient'),
        nullif(payload->>'verifying_staff_user_id', '')::uuid,
        nullif(payload->>'staff_attestation_text', ''),
        nullif(payload->>'supersedes_consent_id', '')::uuid,
        coalesce(payload->'metadata', jsonb_build_object('assertion_group_id', payload->>'assertion_group_id'))
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'patient_consents', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'consent_type', payload->>'type',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 8. patient_column (UPDATE not INSERT) ----------
    elsif target_name = 'patient_column' then
      execute format(
        'update public.patients set %I = $1 where id = $2',
        payload->>'column'
      ) using payload->'value', p_patient_id;
      inserted_id := p_patient_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'patients', p_patient_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'column', payload->>'column',
                                   'value_set', payload->'value' is not null,
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 9. patient_address ----------
    elsif target_name = 'patient_address' then
      insert into patient_addresses (
        patient_id, street, apt, city, state, zip, country, validated_by, is_default, metadata
      ) values (
        p_patient_id,
        payload->>'street',
        nullif(payload->>'apt', ''),
        payload->>'city',
        payload->>'state',
        payload->>'zip',
        coalesce(payload->>'country', 'US'),
        nullif(payload->>'validated_by', ''),
        coalesce((payload->>'is_default')::boolean, false),
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'patient_addresses', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 10. patient_contact ----------
    elsif target_name = 'patient_contact' then
      insert into patient_contacts (
        patient_id, kind, value, is_default, verified_at, metadata
      ) values (
        p_patient_id,
        payload->>'kind',
        payload->>'value',
        coalesce((payload->>'is_default')::boolean, false),
        nullif(payload->>'verified_at', '')::timestamptz,
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'patient_contacts', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'kind', payload->>'kind',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 11. external_provider ----------
    elsif target_name = 'external_provider' then
      insert into patient_external_providers (
        patient_id, relationship_type, provider_name, practice_name, npi,
        address, phone, fax, email, is_active, metadata
      ) values (
        p_patient_id,
        payload->>'relationship_type',
        payload->>'provider_name',
        nullif(payload->>'practice_name', ''),
        nullif(payload->>'npi', ''),
        payload->'address',
        nullif(payload->>'phone', ''),
        nullif(payload->>'fax', ''),
        nullif(payload->>'email', ''),
        coalesce((payload->>'is_active')::boolean, true),
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'patient_external_providers', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'relationship_type', payload->>'relationship_type',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 12. preferred_pharmacy ----------
    elsif target_name = 'preferred_pharmacy' then
      insert into patient_preferred_pharmacies (
        patient_id, pharmacy_name, pharmacy_chain, address, phone, fax, npi, is_default, is_active, metadata
      ) values (
        p_patient_id,
        payload->>'pharmacy_name',
        nullif(payload->>'pharmacy_chain', ''),
        payload->'address',
        payload->>'phone',
        nullif(payload->>'fax', ''),
        nullif(payload->>'npi', ''),
        coalesce((payload->>'is_default')::boolean, false),
        coalesce((payload->>'is_active')::boolean, true),
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'patient_preferred_pharmacies', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 13. emergency_contact ----------
    elsif target_name = 'emergency_contact' then
      insert into patient_emergency_contacts (
        patient_id, name, relationship, phone_primary, phone_secondary, email, address,
        is_authorized_to_receive_phi, is_default, is_active, notes, metadata
      ) values (
        p_patient_id,
        payload->>'name',
        payload->>'relationship',
        payload->>'phone_primary',
        nullif(payload->>'phone_secondary', ''),
        nullif(payload->>'email', ''),
        payload->'address',
        coalesce((payload->>'is_authorized_to_receive_phi')::boolean, false),
        coalesce((payload->>'is_default')::boolean, false),
        coalesce((payload->>'is_active')::boolean, true),
        nullif(payload->>'notes', ''),
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'patient_emergency_contacts', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'relationship', payload->>'relationship',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 14. advance_directive ----------
    elsif target_name = 'advance_directive' then
      insert into patient_advance_directives (
        patient_id, directive_type, executed_date, expires_date,
        proxy_name, proxy_phone, proxy_relationship, document_storage_id, is_active, metadata
      ) values (
        p_patient_id,
        payload->>'directive_type',
        (payload->>'executed_date')::date,
        nullif(payload->>'expires_date', '')::date,
        nullif(payload->>'proxy_name', ''),
        nullif(payload->>'proxy_phone', ''),
        nullif(payload->>'proxy_relationship', ''),
        nullif(payload->>'document_storage_id', ''),
        coalesce((payload->>'is_active')::boolean, true),
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'patient_advance_directives', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'directive_type', payload->>'directive_type',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 15. insurance_details ----------
    elsif target_name = 'insurance_details' then
      insert into patient_insurance_details (
        patient_id, coverage_type, carrier_name, plan_name, member_id, group_id,
        subscriber_name, subscriber_dob, relationship_to_subscriber,
        effective_date, termination_date, card_image_storage_id, is_active, metadata
      ) values (
        p_patient_id,
        payload->>'coverage_type',
        payload->>'carrier_name',
        nullif(payload->>'plan_name', ''),
        payload->>'member_id',
        nullif(payload->>'group_id', ''),
        nullif(payload->>'subscriber_name', ''),
        nullif(payload->>'subscriber_dob', '')::date,
        coalesce(payload->>'relationship_to_subscriber', 'self'),
        nullif(payload->>'effective_date', '')::date,
        nullif(payload->>'termination_date', '')::date,
        nullif(payload->>'card_image_storage_id', ''),
        coalesce((payload->>'is_active')::boolean, true),
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'patient_insurance_details', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'coverage_type', payload->>'coverage_type',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 16. subscription ----------
    elsif target_name = 'subscription' then
      insert into subscriptions (
        patient_id, pricing_profile_id, pricing_profile_version, pathway_code, plan_id, status, psp,
        stripe_subscription_id, stripe_price_id, stripe_customer_id,
        started_at, current_period_start, current_period_end, cancellation_window_days, metadata
      ) values (
        p_patient_id,
        payload->>'pricing_profile_id',
        payload->>'pricing_profile_version',
        payload->>'pathway_code',
        payload->>'plan_id',
        payload->>'status',
        coalesce(payload->>'psp', 'stripe'),
        nullif(payload->>'stripe_subscription_id', ''),
        nullif(payload->>'stripe_price_id', ''),
        nullif(payload->>'stripe_customer_id', ''),
        nullif(payload->>'started_at', '')::timestamptz,
        nullif(payload->>'current_period_start', '')::timestamptz,
        nullif(payload->>'current_period_end', '')::timestamptz,
        coalesce((payload->>'cancellation_window_days')::int, 2),
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('commerce.membership_plan_selected', 'subscriptions', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'pricing_profile_id', payload->>'pricing_profile_id',
                                   'plan_id', payload->>'plan_id',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 17. treatment_order ----------
    elsif target_name = 'treatment_order' then
      insert into treatment_orders (
        patient_id, status, intake_session_id, pathway_code, interaction_context, metadata
      ) values (
        p_patient_id,
        payload->>'status',
        coalesce(nullif(payload->>'intake_session_id', '')::uuid, p_session_id),
        payload->>'pathway_code',
        p_interaction_context,
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('commerce.submit_to_provider_triggered', 'treatment_orders', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'pathway_code', payload->>'pathway_code',
                                   'status', payload->>'status',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 18. commerce_order (table not yet created; out of Phase 4A scope) ----------
    elsif target_name = 'commerce_order' then
      raise exception 'commerce_order target not implemented in Phase 4A: commerce_orders table not yet created. See Section 1Q.23 Patch G5 retail rail (future phase). Emission discarded.'
        using errcode = 'feature_not_supported',
              hint = 'Add commerce_orders table in a future migration before using this target.';

    -- ---------- 19. session_metadata (UPDATE intake_sessions.metadata field) ----------
    elsif target_name = 'session_metadata' then
      update intake_sessions
      set metadata = jsonb_set(coalesce(metadata, '{}'::jsonb),
                               array[payload->>'field'],
                               payload->'value',
                               true),
          last_activity_at = now()
      where id = p_session_id
      returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.atom.emitted', 'intake_sessions', p_session_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'field', payload->>'field',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 20. eligibility_decision ----------
    elsif target_name = 'eligibility_decision' then
      insert into eligibility_decisions (
        patient_id, session_id, pathway_code, rule_id, rule_version, result, reasons,
        input_refs, inputs_hash, input_snapshot, decided_by, decided_by_user_id,
        supersedes_decision_id, interaction_context, metadata
      ) values (
        p_patient_id,
        p_session_id,
        payload->>'pathway_code',
        payload->>'rule_id',
        payload->>'rule_version',
        payload->>'result',
        coalesce(payload->'reasons', '[]'::jsonb),
        payload->'input_refs',
        payload->>'inputs_hash',
        payload->'input_snapshot',
        coalesce(payload->>'decided_by', 'rule_engine'),
        nullif(payload->>'decided_by_user_id', '')::uuid,
        nullif(payload->>'supersedes_decision_id', '')::uuid,
        p_interaction_context,
        coalesce(payload->'metadata', '{}'::jsonb)
      ) returning id into inserted_id;

      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values ('intake.candidacy_result.rendered', 'eligibility_decisions', inserted_id::text, p_patient_id,
                jsonb_build_object('session_id', p_session_id,
                                   'pathway_code', payload->>'pathway_code',
                                   'rule_id', payload->>'rule_id',
                                   'result', payload->>'result',
                                   'assertion_group_id', p_assertion_group_id,
                                   'interaction_context', p_interaction_context))
        returning id into audit_id;

    -- ---------- 21. audit_event_only ----------
    elsif target_name = 'audit_event_only' then
      audit_metadata := coalesce(payload->'metadata', '{}'::jsonb)
                        || jsonb_build_object('session_id', p_session_id,
                                              'assertion_group_id', p_assertion_group_id,
                                              'interaction_context', p_interaction_context);
      insert into audit_events (action, resource_type, resource_id, patient_id, metadata)
        values (payload->>'action',
                payload->>'resource_type',
                nullif(payload->>'resource_id', ''),
                p_patient_id,
                audit_metadata)
        returning id into audit_id;
      inserted_id := null;

    else
      raise exception 'Unknown emission target: %', target_name
        using errcode = 'invalid_parameter_value',
              hint = 'Target must be one of the 21 EmissionTarget enum values declared in lib/intake/targets.ts.';
    end if;

    results := results || jsonb_build_array(jsonb_build_object(
      'target', target_name,
      'id', inserted_id,
      'audit_event_id', audit_id
    ));
  end loop;

  return results;
end;
$$;

comment on function public.record_intake_emissions_batch(uuid, uuid, uuid, text, jsonb, jsonb) is
'Phase 4A intake emission orchestrator. Atomic multi-row write across 21 EmissionTargets per Section 1K.0.5.11 + 1Q.7. Inserts row + paired audit_events row in single transaction. Multi-target dual emission (claim + entity) propagates source_assertion_id from prior_assertion_id automatically. SECURITY DEFINER bypasses RLS; called via supabase-js .rpc() from lib/intake/write/orchestrator.ts.';

grant execute on function public.record_intake_emissions_batch(uuid, uuid, uuid, text, jsonb, jsonb) to authenticated;
grant execute on function public.record_intake_emissions_batch(uuid, uuid, uuid, text, jsonb, jsonb) to service_role;
