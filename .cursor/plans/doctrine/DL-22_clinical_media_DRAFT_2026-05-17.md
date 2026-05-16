# DL-22 — Clinical Media + Intake + Consent + Patient Document Substrates (DRAFT)

**Date:** 2026-05-17
**Status:** DRAFT — Phase 1 hardening per Day 0 Build Contract commit `6dc1286`. NOT locked doctrine. Joint Opus + Knox + user signoff required before promotion to locked DL in `system_map_three_layers_60706286.plan.md`. NOT code. NOT migrations. NOT substrate slice.

**Cross-anchors:**
- System map DL-7 (tracked clinical objects + procedure / intervention lifecycle as foundation primitive — DL-22 specializes for clinical media artifacts) + DL-14 + DL-16 + DL-18 (RBAC for media access) + DL-20 (Care-Coordination — clinical media attaches to encounter_container + care_episode) + Q14 (Photos/intake/consent/docs as separate clinical artifacts — partial resolution)
- Day 0 Build Contract §3.4 (consent + attestation Day 0) + §3.6 (visit closeout includes photos + chart attach) + §3.7 patch 4 (clinical product/lot capture; complementary) + §6.4 step 4
- Layer 2 Section A (entity model — patient_document fragmented across forms / intake / consent / receipt / clinical photo) + open_questions Q14
- Mindbody raw layer batches 5 (Forms tab) / 10 (Documents tab) / 11 (consent + signature) / 20 (mobile Documents tab)

**Scope (binding):** OMNI **clinical media + intake + consent + patient document substrate** — patient photos (clinical + before/after), intake session artifacts (form responses + free-text + uploaded files), consent artifacts (informed-consent signatures with version tracking + revocation), patient documents (ID scans / insurance cards / liability waivers / external lab reports / external imaging / pre-op clearance / signed contracts). Specializes against DL-7 + DL-16 + DL-20 — every DL-22 invariant inherits the appropriate disciplines. DL-22 binds the **clinical media + intake + consent substrate**; it does NOT bind clinical encounter operations (DL-20) nor clinical encoding (Clinical-Coding DL Phase D) nor structured chart authoring (DL-7); it does NOT bind operational documents like receipts (DL-17 inv 30 — separate concern). **Day 0 substrate** because intake + consent + signed contracts + before/after photos are operationally required for every medspa visit per Build Contract §3.4.

---

## Invariants (26 candidates)

### Universal patient_document primitive

1. **`patient_document` as universal substrate primitive (binding partial resolution of Q14).** `patient_document` carries: `id`, `tenant_id` composite per DL-21 inv 2, `patient_id` FK + `patient_relationship_id` FK (per DL-10 + primitive #19), `document_kind` ENUM per inv 2, `subject_kind` ENUM (`single_patient` / `relationship_specific` / `episode_scoped` / `encounter_scoped` / `staff_scoped`), `subject_id` FK (resolves per subject_kind; e.g., encounter_container_id when subject_kind=encounter_scoped), `linked_encounter_ids[]` ARRAY (1-to-N — same document can attach to multiple encounters; e.g., baseline before-photo referenced from initial-visit + 6-month-followup), `linked_episode_ids[]` ARRAY, `linked_care_objects_ids[]` (per DL-7 — tracked_clinical_objects), `file_storage_kind` ENUM (`object_storage_blob` / `inline_data_uri` / `partner_reference_url`), `storage_uri` STRING, `mime_type`, `file_size_bytes`, `checksum_sha256`, `original_filename`, `captured_at`, `captured_by_actor` per DL-16 amendment 43, `captured_at_venue_id` FK NULL (per DL-21 inv 3), `pii_classification` ENUM (`minimal` / `patient_facing_only` / `clinical_phi` / `clinical_phi_high_sensitivity`), `retention_class` per DL-16 inv 13, `status` ENUM per inv 22 lifecycle. **Q14 resolution rationale:** photos + intake responses + consent signatures + uploaded scans + signed contracts are ALL clinical artifacts with similar substrate needs (blob storage + PHI classification + retention + auditable access + encounter/episode/object linkage); separate primitive substrates would fragment. `patient_document` is the UNIFIED substrate with `document_kind` discriminator + kind-specific child rows where needed.

2. **`document_kind` discriminator enum (16 Day 0 seed values).** Day 0 seed `document_kind` ENUM: (1) `clinical_photo_general` / (2) `clinical_photo_before_after_baseline` / (3) `clinical_photo_before_after_followup` / (4) `intake_form_submission` (composes with inv 8 intake_session) / (5) `consent_signature` (composes with inv 13 consent_artifact) / (6) `signed_liability_waiver` / (7) `signed_contract_document` (per DL-17 inv 11) / (8) `id_scan_patient` (driver license / passport) / (9) `insurance_card_scan` / (10) `external_lab_report` / (11) `external_imaging_report` (radiology / ultrasound) / (12) `external_pathology_report` / (13) `external_referral_letter` / (14) `clinical_progress_attachment` (provider's photo of skin biopsy / pathology slide / device readout) / (15) `clinical_education_handout_sent` (per DL-16 amendment 42 outbound — sent to patient) / (16) `other`. **NOT a closed enum** — registry extends per DL-16 inv 5 + 9 + 29 as specialty needs land (e.g., `derm.dermoscope_image` / `plastics.peri_op_marking_photo` / `sleep.polysomnography_report`).

3. **PII classification governs access + retention + payload semantics (binding per DL-16 inv 7 payload minimization + inv 13 retention).** PII classification per inv 1: (a) `minimal` (no patient-identifying content; e.g., a tenant-wide policy document not patient-specific) / (b) `patient_facing_only` (patient can view freely; e.g., aftercare handout) / (c) `clinical_phi` (standard PHI; access gated per DL-18) / (d) `clinical_phi_high_sensitivity` (e.g., genetic test results / mental health / SUD records — additional HHS / 42 CFR Part 2 protections per inv 17). Higher classifications require Tier 4 attestation for break-glass disclosure per DL-18 inv 12.

4. **Object storage + signed-URL discipline (binding per DL-16 inv 7 + inv 25 patient impersonation gate).** File blobs are stored in object storage (S3 / Vercel Blob / equivalent) — NOT in row payload (per DL-16 inv 7 payload minimization). Substrate carries `storage_uri` + signed-URL-issuance-per-access (signed URLs are short-lived; per-access logging per DL-16 inv 30 decision record). Inline data URIs admitted ONLY for trivially small documents (< 10KB) where signed-URL overhead wasteful. REJECTED: long-lived public URLs for clinical media; embedded blob storage in row payload.

### Clinical photo substrate (per Build Contract §3.6 anchor)

5. **Clinical photo substrate composes patient_document with clinical-photo-specific child (binding).** `clinical_photo_detail` (1-to-1 child of `patient_document` where `document_kind ∈ {clinical_photo_general, _before_after_baseline, _before_after_followup}`) carries: `id`, `patient_document_id` FK, `treatment_area_id` FK NULL (per DL-20 inv 13 treatment_areas; e.g., glabella / lip / cheek), `anatomical_anchor_text` STRING NULL (free-form descriptor), `pose_kind` ENUM (`frontal` / `left_profile` / `right_profile` / `oblique_left` / `oblique_right` / `chin_up` / `chin_down` / `dynamic_expression` / `closeup_detail`), `lighting_kind` ENUM (`clinical_overhead` / `clinical_ring` / `natural_window` / `mixed`), `camera_kind` ENUM (`tenant_device_ipad` / `tenant_device_dslr` / `partner_device_canfield_visia` / `patient_uploaded`), `pre_post_kind` ENUM (`baseline_pre` / `immediate_post_procedure` / `followup_2_weeks` / `followup_1_month` / `followup_3_months` / `followup_6_months` / `followup_1_year` / `unscheduled_concern_capture`), `paired_with_photo_id` FK NULL (links before to after via stable pairing key per inv 6), `clinical_object_id` FK NULL (per DL-7 — the tracked clinical object being documented; e.g., glabellar_rhytid).

6. **Before/after photo pairing discipline (binding).** Per Mindbody Layer 2 + medspa reality: before/after photos require deterministic pairing so the UI can render side-by-side comparison + clinical analytics can compute objective change. `before_after_pair` carries: `id`, `tenant_id`, `patient_id` + `patient_relationship_id`, `tracked_clinical_object_id` FK (per DL-7), `treatment_area_id`, `pose_kind` (same pose required for valid pair), `baseline_photo_document_id` FK (clinical_photo_detail.pre_post_kind=baseline_pre), `followup_photo_document_id` FK (clinical_photo_detail.pre_post_kind=followup_*), `intervention_encounter_id` FK NULL (the encounter that performed the intervention; per DL-20 inv 6), `pair_created_at`, `pair_status` ENUM (`pending_followup` / `pair_complete` / `pair_quality_flagged_inconsistent_pose` / `pair_archived`). Substrate enforces pose consistency (same pose_kind on both sides); inconsistent pairs auto-flagged.

7. **Photo capture surface affordances Day 0 (binding per Build Contract §3.6 + §6.7).** Capture surfaces:
    - **Provider-side iPad / DSLR capture** (per `camera_kind = tenant_device_*`; integrated into encounter_container Day 0)
    - **Patient-side upload** (per `camera_kind = patient_uploaded`; via patient portal Day 0 for follow-up self-uploads; consent_artifact required per inv 13 + 17)
    - **Partner imaging device ingestion** (per `camera_kind = partner_device_canfield_visia`; e.g., Canfield Visia integration; Day 0 partner_adapter actor_kind per DL-16 amendment 43)
    
    All capture paths emit `clinical_photo_captured` event per DL-16 envelope.

### Intake session substrate

8. **Intake session substrate (binding per Build Contract §3.4 + §3.6).** `intake_session` carries: `id`, `tenant_id`, `patient_id` FK + `patient_relationship_id` FK, `triggered_by_event_kind` STRING NULL (e.g., `appointment.booked_with_intake_required` / `episode.created_with_intake_required` / `staff_initiated_intake`), `intake_template_id` FK to `intake_template` per inv 9, `linked_appointment_id` FK NULL, `linked_episode_id` FK NULL, `linked_encounter_id` FK NULL, `sent_at` (when intake delivered to patient), `delivery_method` ENUM (`email_with_link` / `sms_with_link` / `patient_portal_in_app` / `in_clinic_kiosk` / `provider_walked_through_in_person`), `started_at` NULLABLE, `submitted_at` NULLABLE, `reviewed_by_provider_at` NULLABLE, `review_provider_id` FK NULL, `status` ENUM (per inv 22 lifecycle: `sent` / `started` / `submitted` / `provider_reviewed` / `expired_unsent` / `expired_unreviewed` / `revoked`), `provider_review_outcome` ENUM NULL (`accepted` / `request_revisions` / `flagged_for_clinical_review` / `safety_concern_escalated`). Substrate emits `intake_submitted` event per DL-16 envelope.

9. **Intake template substrate (binding settings substrate per DL-19).** `intake_template` carries: `id`, `tenant_id`, `template_name`, `template_version` (semver), `applicable_episode_kinds[]` (which episode kinds use this template; per DL-20 inv 5), `applicable_encounter_profile_ids[]`, `applicable_services[]`, `question_set` JSONB (typed question schema — per DL-19 inv 2 registry value_schema; supports text / multi-select / single-select / file-upload / signature / date / number), `requires_signature` BOOLEAN, `linked_consent_artifact_template_ids[]` (intake may require accepting consent artifacts inline; per inv 13), `status` per DL-12 lifecycle (proposed / active / superseded / archived). Versioning: template change creates new template_version row; existing in-flight intakes retain old version per DL-16 inv 18 temporal validity.

10. **Intake response substrate (binding).** `intake_response` 1-to-N child of `intake_session` (one row per question answered): carries `id`, `intake_session_id` FK, `question_id` STRING (from question_set), `response_value` JSONB (typed per question), `response_file_document_id` FK NULL (for file-upload questions; links to patient_document inv 1), `responded_at`, `responded_by_actor` per DL-16 amendment 43 (typically patient; sometimes staff_user when intake captured in person). Free-text + structured responses both first-class.

11. **Intake form submission as patient_document (binding cross-link).** A submitted intake_session emits a `patient_document` row with `document_kind = intake_form_submission` + `subject_kind = encounter_scoped` (or episode_scoped depending on context). The rendered intake (PDF/printable view per inv 24) is stored as the document blob. Original intake_session + responses preserved per DL-12 (auditable; not just rendered PDF).

12. **Intake-driven encounter creation (binding per DL-20 inv 10 intake-first path).** Intake submission may auto-create an encounter_container per DL-20 inv 10 (e.g., Hims weight loss async review). Cross-link DL-20 inv 10 + DL-14 inv 17 orchestration_runs (intake-to-encounter is a saga).

### Consent artifact substrate

13. **Consent artifact substrate (binding per Build Contract §3.4).** `consent_artifact` carries: `id`, `tenant_id`, `patient_id` FK + `patient_relationship_id` FK, `consent_template_id` FK to `consent_template` per inv 14, `signed_template_version` (immutable snapshot of template version at signature time), `subject_kind` ENUM (`encounter_scoped` / `episode_scoped` / `procedure_specific` / `omni_blanket_relationship` / `marketing` / `data_sharing_federation`), `subject_id` FK NULL, `linked_appointment_id` / `linked_encounter_id` / `linked_episode_id` FK NULL, `signed_at`, `signed_by_actor` per DL-16 amendment 43 (typically patient; surrogate signing allowed via inv 19), `signature_method` ENUM (`touchscreen_pad_signature` / `webauthn_signature` / `typed_full_name_acknowledgment` / `verbal_attestation_recorded` / `paper_signed_scanned`), `signature_evidence_hash` STRING (per DL-16 inv 38 tamper-evident; e.g., hash of canvas-drawn signature SVG or webauthn assertion), `linked_patient_document_id` FK (the rendered + countersigned PDF stored as patient_document per inv 1), `valid_from`, `valid_to` NULLABLE (some consents are perpetual; some scoped per inv 13 subject_kind), `revoked_at` NULLABLE, `revoked_by_actor`, `revocation_reason` ENUM NULL. Consent artifacts are IMMUTABLE post-signature; revocation is an additive row not a mutation.

14. **Consent template substrate (binding settings substrate per DL-19).** `consent_template` carries: `id`, `tenant_id`, `template_name` (e.g., `medspa_botox_consent` / `medspa_filler_consent` / `glp1_telehealth_consent` / `consent_to_treat_blanket` / `marketing_consent` / `data_sharing_federation_consent`), `template_version` (semver), `applicable_jurisdictions[]` (per DL-21 inv 11 — some consents are state-specific), `applicable_episode_kinds[]`, `applicable_services[]`, `legal_text` TEXT (the canonical text), `requires_separate_acknowledgment_clauses[]` (e.g., "I acknowledge risk of bruising"), `requires_witness` BOOLEAN, `requires_provider_countersignature` BOOLEAN, `expiration_after_signature_kind` ENUM (`never_expires` / `expires_after_days` / `expires_at_episode_close` / `expires_per_state_regulation`), `replaces_template_id` FK NULL (when superseding prior template per DL-12 versioning).

15. **Consent precedence + expiration resolution (binding per DL-16 inv 18 temporal validity).** Multiple consents may apply to a single action (e.g., Botox visit requires `consent_to_treat_blanket` + `medspa_botox_consent` + jurisdiction-specific addendum). Resolution at action emission per DL-14 inv 8 capability + per inv 13 consent check: substrate enumerates required consents per (action, jurisdiction, service) — REJECTS action if any required consent missing or expired. Cross-link DL-15 inv 10 absolute clinical clearance gating (consent is one form of clearance).

16. **Consent revocation cascade (binding).** Revoked consent immediately invalidates downstream actions that require it. Substrate: `consent_revoked` event per DL-16 envelope triggers downstream `orchestration_run` per DL-14 inv 17 — cancel pending scheduled actions that depend on revoked consent; alert provider; emit patient confirmation. Cross-link DL-15 inv 6 compensation.

17. **42 CFR Part 2 + high-sensitivity protections (binding per inv 3 PII class `clinical_phi_high_sensitivity`).** Some clinical phenomena (SUD records / mental health / genetic testing / HIV status) carry stricter federal protections than HIPAA baseline. Substrate-level: consent_artifact for `data_sharing_federation` of high-sensitivity records requires explicit per-category consent (e.g., separate `consent_to_share_sud_records` + `consent_to_share_mental_health_records`). REJECTED: bundled consent that conflates standard PHI with 42 CFR Part 2 protected categories.

### Document signature substrate (composes with consent + contracts + waivers)

18. **Signature envelope substrate (binding).** Per DL-16 amendment 43 actor + Build Contract §3.4. `signature_envelope` carries: `id`, `tenant_id`, `signed_document_kind` ENUM (per inv 2 — must be a document_kind that admits signature), `signed_document_id` FK (FK to patient_document inv 1), `signature_method` per inv 13 same enum, `signed_by_actor` per DL-16 amendment 43 (patient / staff / provider), `signed_at`, `signature_evidence_hash`, `device_fingerprint_hash` STRING NULL (per DL-16 inv 25 — device fingerprint for non-repudiation; admits webauthn assertion / ip + user_agent hash / trusted device cert), `co_signer_id` FK NULL (when document requires multi-party signature; e.g., provider countersigns patient consent), `geo_jurisdiction_at_signature` FK (per DL-21 inv 11; admits cross-state telehealth audit).

19. **Surrogate signer admitted under guardian + power-of-attorney (binding).** When patient is minor / incapacitated / has legal surrogate, signature substrate admits surrogate signing with `signed_by_actor.actor_kind = patient` + `on_behalf_of_id = patient_id (the actual patient)` + additional `surrogate_legal_basis` ENUM (`parent_guardian_of_minor` / `legal_guardian_court_order` / `healthcare_power_of_attorney` / `spouse_in_emergency` / `surrogate_per_state_default`). Surrogate basis evidence required per inv 18 device_fingerprint_hash + supporting documentation linked via inv 20.

### Patient document linkages + access

20. **Document linkage substrate (1-to-N many-to-many) (binding).** Some patient_documents may link to multiple parents (e.g., a single ID scan is referenced by multiple encounters across episodes; a single consent artifact applies to a series of follow-up visits). `patient_document_linkage` carries: `patient_document_id` FK + `linked_entity_kind` ENUM (`encounter_container` / `care_episode` / `tracked_clinical_object` / `commerce_order` / `patient_relationship` / `appointment`) + `linked_entity_id` FK + `linkage_reason` ENUM (`primary_subject` / `referenced_evidence` / `supersedes_prior` / `superseded_by`). REJECTED: document copies for each linkage (single source of truth; multiple references).

21. **Access governance per DL-18 atoms (binding).** Per DL-18 inv 22 every action_kind declares required_atoms. Read access to patient_document requires `phi.read.<document_kind>` atom; export requires `phi.export.<document_kind>` atom; high-sensitivity access (per inv 3 + 17) requires Tier 4 attestation. Cross-link DL-18 inv 8 attestation tiers + DL-16 inv 7 payload minimization + inv 25 impersonation gate.

### Lifecycle + audit

22. **Document lifecycle 7-state (binding).** `patient_document.status` ENUM: (1) `uploading_in_progress` (file transfer started, not yet committed) / (2) `active` (committed; in force) / (3) `superseded_by_new_version` (new version uploaded; old preserved per DL-12) / (4) `revoked` (consent revocation cascade per inv 16; access blocked but row preserved per inv 23) / (5) `entered_in_error_voided` (mistakenly uploaded; access blocked; row preserved for audit) / (6) `archived_post_retention` (per DL-16 inv 13 retention class) / (7) `gdpr_erasure_pseudonymized` (per DL-16 inv 19 GDPR right-to-erasure — content pseudonymized; row + linkage preserved; PHI redacted). Transitions are state-machine-validated.

23. **Tamper-evident audit (binding per DL-16 inv 38).** Every patient_document access (read / sign / supersede / void / link / unlink) emits audit event hash-chained per DL-16 inv 38. Patient may request access audit report per consent — substrate supports patient-side access log projection per inv 25.

### Compliance + GDPR erasure

24. **GDPR / state right-to-erasure preserves audit (binding per DL-16 inv 19).** Patient erasure request triggers per-document evaluation: lawful basis for retention (clinical necessity / regulatory retention floor per DL-21 inv 21) may require denial OR partial erasure (PHI pseudonymized; encounter + audit metadata preserved). Cross-link DL-16 inv 19 + Privacy DL Phase D.

25. **Patient access portal projection (binding).** Per Mindbody Layer 2 evidence (Documents tab in patient profile) + Day 0 patient portal scope. Substrate: `patient_document_portal_visibility` carries patient-side visibility flag per document — defaults vary by document_kind (clinical photos default `provider_only_until_shared`; intake forms `patient_visible`; consents `patient_visible_immutable`). Cross-link DL-18 inv 17 patient-relationship permissions.

### Cross-DL bindings + event vocabulary

26. **Clinical media + intake + consent event vocabulary seed (binding per DL-16 amendment 40 pattern).** Day 0 seed event_kinds (registered per DL-16 inv 5 + 9 + 29):
    - `clinical_media.photo_captured` / `clinical_media.before_after_pair_created` / `clinical_media.pair_quality_flagged`
    - `intake.session_sent` / `intake.session_started` / `intake.session_submitted` / `intake.provider_reviewed` / `intake.expired_unreviewed` / `intake.safety_concern_escalated`
    - `consent.signed` / `consent.revoked` / `consent.expired` / `consent.required_for_action_missing`
    - `patient_document.uploaded` / `patient_document.superseded` / `patient_document.voided_entered_in_error` / `patient_document.accessed` / `patient_document.exported` / `patient_document.gdpr_pseudonymized`
    - `signature.envelope_created` / `signature.surrogate_signing_invoked`
    
    Each registry record carries `default_severity` per DL-16 amendment 41 (consent.revoked / consent.required_for_action_missing = `red`; most others `yellow`).

---

## Open sub-questions (require Knox + user signoff before lock)

- **Q-DL22-1 (Q14 partial resolution)**: Unified `patient_document` substrate with `document_kind` discriminator (per inv 1) — promotion to LOCK requires Q14 SHELVED → RESOLVED commit + Knox + user joint signoff. Tentative resolution: unified substrate.
- **Q-DL22-2**: Before/after photo pairing — is `before_after_pair` row created at baseline capture OR at first followup capture? Tentative: created at baseline with `pair_status=pending_followup`; updated on followup capture matching pose criteria; allows multi-followup-period series.
- **Q-DL22-3**: Consent template versioning + in-flight signing — what if patient is mid-signing when template version changes? Tentative: in-flight signing locks template_version at session start; new version available for new sessions.
- **Q-DL22-4**: Surrogate signer evidence handling — what's the minimum proof for healthcare POA? Tentative: copy of POA document uploaded + verified by staff with `data_privacy.verify_surrogate_legal_basis` atom per DL-18.
- **Q-DL22-5**: External lab/imaging report ingestion — does OMNI auto-OCR and structure, or store as opaque PDF? Tentative: Day 0 store as opaque PDF; OCR + structuring M6+ per future Lab-Ingestion DL.

---

## Rejected patterns

- **Separate substrate per document kind (photos / intake / consent / scans).** Per inv 1 — unified substrate.
- **Inline blob in row payload.** Per inv 4 — object storage required.
- **Long-lived public URLs for clinical media.** Per inv 4 — signed URLs per access.
- **Consent mutability post-signature.** Per inv 13 — immutable; revocation additive.
- **Bundled consent conflating standard PHI with 42 CFR Part 2.** Per inv 17 — per-category required.
- **Document deletion for GDPR.** Per inv 24 — pseudonymization preserves audit.
- **Photo without pose + clinical_object linkage for clinical analytics.** Per inv 5 — substrate primitives.
- **Intake without versioning of template.** Per inv 9 — versioned + locked at session start.
- **Patient portal default-visible for all clinical media.** Per inv 25 — defaults vary by kind.
- **Access to high-sensitivity records without Tier 4 attestation.** Per inv 21 — substrate REJECTS.

---

## Cross-link summary

- **Inherits from:** DL-1 + DL-2 + DL-7 (tracked clinical objects — clinical photos link to object continuity) + DL-10 (patient identity) + DL-12 (versioning) + DL-14 + DL-16 (envelope + amendment 42 outbound + amendment 43 actor) + DL-18 (atoms for access governance) + DL-20 (encounter linkage)
- **Specializes:** DL-7 foundation primitives for clinical media + intake + consent + document substrates
- **Composes with:** DL-15 (intake → booking) + DL-17 (signed contracts as commerce + receipt rendering) + DL-18 (atom-gated access) + DL-19 (intake_template + consent_template settings) + DL-20 (encounter linkage; closeout includes photo capture) + DL-21 (cross-LE consent + federation permeability + 42 CFR Part 2 jurisdiction)
- **Future DL composition:** Clinical-Coding DL (Phase D — performed_line links to clinical_photo) + Lab-Ingestion DL (Phase D — external lab report OCR) + Privacy DL (Phase D — GDPR + state privacy) + Inventory DL (Phase D — clinical photo correlates with product usage)
- **Coexists with:** §1G AI layer (AI may analyze photos for clinical decision support per DL-14 inv 18-21) + §1K.5.A clinical authority (provider attests clinical conclusions from photos) + §1J identity (patient_document scoped via patient identity discipline)

---

## Q14 partial resolution promotion gate

This DRAFT contains **tentative resolution of Q14** (photos/intake/consent/docs as separate clinical artifacts). Promotion to locked doctrine requires:
1. Knox + user joint signoff on unified `patient_document` substrate per Q-DL22-1
2. mindbody_open_questions_raw.md update marking Q14 SHELVED → RESOLVED with cross-reference to DL-22 inv 1 + 2
3. system_map cross-references updated per cross-link summary

NOT code. NOT migrations. NOT substrate slice. NOT §10.5 stale-existing-OMNI warning removal.

---

## Phase 1 hardening completion

DL-22 is the LAST of 6 new DL drafts per Build Contract §6.4 step 4. After DL-22 commit + push, Phase 1 hardening per Build Contract §6.4 enumeration is structurally complete:
- ✅ Step 1 — Day 0 Build Contract (commit 6dc1286)
- ✅ Step 2 — DL-15 amendments (7 commits, dc0bb76 → 2432ea7)
- ✅ Step 3 — DL-16 amendments (4 commits, ca2c2aa → eb9be60)
- ✅ Step 4 — 6 new DL drafts (DL-17 → DL-22):
    - DL-17 Commerce (commit 0a79414)
    - DL-18 RBAC (commit 6e16613)
    - DL-19 Settings-Infrastructure (commit 53f020b)
    - DL-20 Care-Coordination (commit 7e5de53; contains Q1+Q6 partial resolution)
    - DL-21 Federation-Topology (commit 18760f1; promotes A1 to Day 0)
    - DL-22 Clinical-Media (this commit; contains Q14 partial resolution)
- ⏭ Step 5 — Substrate slice scoping (NEXT GATE per Build Contract §6.5)
- ⏭ Step 6 — Code (after substrate slice)

NEXT GATE: substrate slice scoping per Build Contract §6.5 — convert §3 feature ledger into Tables (DDL) / RPCs (TypeScript signatures) / Events + actions (DL-16 registry seed) / UI surfaces / Test plan. Substrate slice MUST verify existing OMNI primitives are current per §10.5 stale-existing-OMNI warning BEFORE implementation.
