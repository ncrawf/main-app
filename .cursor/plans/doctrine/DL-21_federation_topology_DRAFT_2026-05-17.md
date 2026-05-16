# DL-21 — Federation Topology Substrate (11-Axis Venue + Permeability Policy + A1 Fulfillment) (DRAFT)

**Date:** 2026-05-17
**Status:** DRAFT — Phase 1 hardening per Day 0 Build Contract commit `6dc1286`. NOT locked doctrine. Joint Opus + Knox + user signoff required before promotion to locked DL in `system_map_three_layers_60706286.plan.md`. NOT code. NOT migrations. NOT substrate slice. **EXTENSION of existing FUTURE_ARC A1 (Federation / Permeability / Topology) + DL-10 (multi-tenant) — converts A1 from future arc to Day 0 substrate per user direction.**

**USER DIRECTION ANCHOR (2026-05-17, verbatim):** *"federation ability needs to be day 0 man. like we're gonna have 3 spas using this on day 1. plastics is next after deerm. then GI and cardio etc. attribution substrate needs to be planned for in advance, month 1-2."* — Federation Day 0 (not deferred to e1+) per user direction.

**Cross-anchors:**
- System map DL-10 (Consumer identity vs operational patient-relationship scoping) + DL-16 amendment 43 (actor 4-tuple incl. `clinic` + `third_party_integration` actor_kinds) + DL-18 inv 13-14 (cross-brand permission + legal entity ownership)
- Future arc document `FUTURE_ARC_2026-05-12_federation_permeability_topology.md` (A1 source-of-truth; promoted from future to Day 0 substrate per user direction)
- Day 0 Build Contract §3.7 patch 1 (jurisdiction + licensure per legal entity) + §3.7 patch 6 (federation Day 0) + §6.4 step 4
- Layer 2 Section J (cross-domain reality findings) + Section J.9 (identity federation)
- Synthesis doc §3 (venue substrate) + §5 federation workflow scenarios

**Scope (binding):** OMNI **federation + topology substrate** — multi-LE / multi-brand / multi-site / multi-venue / multi-jurisdiction operational reality. Specializes against DL-10 — every DL-21 invariant inherits the DL-10 patient identity vs relationship scoping discipline. DL-21 binds the **federation substrate**; it does NOT bind clinical encoding (DL-7 / DL-22) nor commerce (DL-17) nor scheduling (DL-15) — those substrates READ federation substrate to gate cross-tenant actions. **Day 0 promotion** required per user direction (3 spas live Day 0; plastics next; GI/cardio/endocrine/sleep specialties later).

---

## Invariants (28 candidates)

### Topology hierarchy primitives

1. **6-tier topology hierarchy (binding extension of DL-10).** OMNI federation operates across 6 explicit tiers:
    - **Tier 1 — Deployment** (single OMNI deployment / installation; e.g., production / sandbox; per DL-16 inv 28 environment_context)
    - **Tier 2 — Legal Entity** (org holding company; tax + compliance + liability boundary; e.g., Bloom Health Holdings LLC; per Build Contract §3.7 patch 1)
    - **Tier 3 — Brand** (operational brand under LE; consumer-facing identity; e.g., Bloom Health Birmingham brand vs Bloom Plastics brand)
    - **Tier 4 — Site** (administrative grouping of locations under one brand; e.g., Bloom Birmingham Site vs Bloom Somerset Site)
    - **Tier 5 — Location** (physical clinic address; one site may have multiple locations)
    - **Tier 6 — Venue** (operational venue per inv 6; physical room / virtual room / partner facility — finer granularity than location)
    
    Each operational substrate (scheduling / commerce / clinical / encounters) declares which tier it scopes to (per DL-16 inv 8 tenant isolation). Default scoping: most operational substrate scopes to brand or site; clinical scopes to legal_entity (regulatory floor); patient identity scopes to deployment (per DL-10).

2. **Tenant scoping is multi-tier composite (binding).** `tenant_id` on substrate rows is NOT a single FK but a composite of tier IDs: `(deployment_id, legal_entity_id, brand_id, site_id, location_id, venue_id)`. Most substrates carry the relevant subset (e.g., scheduling substrate scopes to (brand_id, site_id, location_id, venue_id); commerce to (brand_id, site_id); clinical to (legal_entity_id, brand_id, site_id)). DL-16 inv 8 multi-tenant isolation reads the composite. REJECTED: single tenant_id collapses 6-tier hierarchy into opaque flat namespace.

### Venue substrate (11-axis per user direction patch)

3. **Venue substrate is an 11-axis composite primitive (binding per Build Contract §3.7 patch 6 + user direction 2026-05-17).** `venue` carries: `id`, `tenant_id` composite per inv 2 (location_id parent),
    - **Axis 1 — Physical address**: `address_line_1`, `address_line_2`, `city`, `state_or_province`, `postal_code`, `country_code`, `latitude`, `longitude`
    - **Axis 2 — Venue kind**: ENUM(`clinic_room` / `procedure_room` / `surgical_suite` / `infusion_chair` / `virtual_room` / `home_visit` / `hospital_facility` / `partner_facility` / `mobile_unit` / `pop_up_event` / `lab_collection_facility`)
    - **Axis 3 — Capacity**: `max_concurrent_patients`, `default_concurrent_capacity`, `capacity_unit` ENUM(`patient` / `procedure_slot` / `room_unit`)
    - **Axis 4 — Equipment / resource attachment**: `attached_resource_ids[]` (FK to resource substrate per DL-15)
    - **Axis 5 — Staff assignment scope**: `eligible_staff_ids[]` NULL (when null, all staff at parent location admit; when populated, restricts to subset; e.g., Botox room admits only injectors)
    - **Axis 6 — Service compatibility**: `compatible_service_ids[]` (FK to service per DL-15 + DL-17; e.g., laser room admits only LHR services)
    - **Axis 7 — Operating hours**: `operating_hours_recurrence_rule` per RFC 5545 RRULE (e.g., M-F 8a-6p) + override windows (composes with DL-15 amendment 35 recurring + override)
    - **Axis 8 — Jurisdiction**: `state_jurisdiction_id` FK (US state); compose with provider_license_state per Build Contract §3.7 patch 1 jurisdiction
    - **Axis 9 — Accessibility / amenities**: `is_wheelchair_accessible` BOOLEAN, `has_private_recovery_area`, `has_consult_room_adjacent`, `amenity_flags[]`
    - **Axis 10 — Mode of practice**: ENUM(`in_person_only` / `virtual_only` / `hybrid` / `mobile`)
    - **Axis 11 — Partner / federation linkage**: `partner_facility_partner_id` FK NULL (per DL-16 amendment 43 third_party_integration partner_id; populated when venue is operated by partner not OMNI tenant; e.g., partner imaging center where OMNI patient receives lab draw)
    
    Day 0 substrate ships all 11 axes. UI affordances for venue admin Day 0 (basic) + M1-2 (full 11-axis editor). Cross-link DL-15 amendment 34 (Staff Availability Window 4-axis venue-aware).

### Patient continuity across federation (A1 fulfillment)

4. **Single deployment-wide patient identity + multi-relationship pattern (binding per DL-10 + A1 fulfillment per user direction).** Per user direction 2026-05-17 patient continuity premise: *"a Hims patient should always have option to utilize a scheduled visit, video, in clinci or otherwise"* + multi-brand reality. **Single `patient` row per deployment** (canonical identity per DL-10) + **multiple `patient_relationship` rows** per (patient, brand) pair (operational state scoped per DL-10 + primitive #19). Day 0 substrate.

5. **Patient continuity policy substrate (binding per A1 fulfillment).** `patient_continuity_policy` carries: `id`, `deployment_id`, `from_brand_id`, `to_brand_id`, `continuity_kind` ENUM (`hand_off_full` / `hand_off_partial` / `parallel_relationships` / `referral_only` / `isolated`), `permitted_substrate_shares[]` ARRAY (e.g., `clinical_chart_read` / `clinical_chart_write` / `commerce_history_read` / `messaging_thread_read` / `intake_artifact_read` / `appointment_history_read`), `consent_required` BOOLEAN, `consent_artifact_kinds[]` (per Clinical-Media DL), `effective_at`, `created_by_actor` per DL-16 amendment 43, `requires_tier_4_attestation` BOOLEAN. Default policy = `isolated` (per DL-10 strict isolation). Explicit policy admission via Tier 4 attestation per DL-18 inv 8.

6. **Cross-brand operations require explicit permeability admission (binding per DL-10).** Every cross-brand action (booking / sale / chart read / Rx prescribe across brand A → brand B) reads `patient_continuity_policy` per inv 5. If policy admits + consent present (if required), action proceeds with audit lineage per DL-16 inv 30 marking the cross-brand bridge. If policy denies, action REJECTED + emits `cross_brand_action_blocked` event.

### Federation Permeability Policy (DL-19 Settings + DL-18 Tier 4)

7. **Federation Permeability Policy is a 1st-class settings substrate (binding per DL-19 inv 22).** `federation_permeability_policy` carries: `id`, `tenant_id` composite per inv 2 (the OWNING tenant), `permeable_to_tenant_id_composite` (the OTHER tenant), `permeability_kind` ENUM (`bidirectional_full` / `bidirectional_read_only` / `outbound_only` / `inbound_only` / `denied`), `permitted_substrate_kinds[]` (per inv 5 list), `requires_consent` BOOLEAN, `valid_from` + `valid_to`, `attestation_id` FK (per DL-18 inv 8 Tier 4 — legal_entity_owner_signature required; per DL-19 inv 22), `created_by_actor`. Changes emit `policy_changed.federation_permeability` event per DL-16 amendment 41 with severity=red.

### Multi-LE primitives + Day 0 specialty rollout

8. **Legal Entity substrate (binding per Build Contract §3.7 patch 1).** `legal_entity` carries: `id`, `deployment_id`, `legal_name`, `tax_id` (encrypted; PII per DL-16 inv 7), `legal_form` ENUM (`pllc` / `llc` / `s_corp` / `c_corp` / `partnership` / `professional_corp` / `not_for_profit`), `state_of_incorporation`, `legal_address` (composite), `compliance_attestations[]` JSONB (HIPAA BAA / PCI / SOC2 / state-specific compliance certifications), `liability_insurance_policy_ids[]`, `medical_director_provider_id` FK NULL (per Q-DL21-1 medical-director-of-record).

9. **Legal Entity ↔ Brand many-to-many (one LE may operate multiple brands; one brand may be jointly owned).** `legal_entity_brand` carries: `legal_entity_id` FK + `brand_id` FK + `ownership_percent` NUMERIC + `responsibility_kind` ENUM (`operating_entity` / `holding_only` / `licensing_only`) + `created_by_actor`. Cross-link Build Contract §3.7 patch 1 multi-LE federation.

10. **Day 0 specialty rollout order pinned (per user direction 2026-05-17).** Per Build Contract §8 specialty pinned order: **medspa → derm → plastics → GI → cardio → endocrine → sleep**. Day 1 specialty = medspa (Bloom Health 3 spas). Each subsequent specialty admission requires:
    - Specialty-specific encounter_profile_registry seeds per DL-20 inv 8
    - Specialty-specific episode_catalog seeds per DL-20 inv 5
    - Specialty-specific service_category + service catalog seeds (per DL-15 + DL-17)
    - Specialty-specific provider_credentialing seeds per Build Contract §3.7 patch 1
    - Specialty-specific commerce primitive seeds (e.g., plastics adds peri-op packages + pre-op intake-heavy episode kind)
    - Specialty-specific outbound trigger seeds per DL-16 amendment 42
    - Specialty-specific compliance + jurisdiction policy per inv 21
    
    Specialty rollout is NOT a new DL per specialty (per Knox session 2 marker: "not every future GI/cardio/plastics idea is doctrine-perfect"); it is a configuration + seed-data + selective amendment to existing DLs.

### Jurisdiction + licensure + provider credentialing (Build Contract §3.7 patch 1)

11. **Jurisdiction substrate (binding per Build Contract §3.7 patch 1).** `jurisdiction` carries: `id`, `jurisdiction_kind` ENUM (`us_state` / `us_federal` / `canada_province` / `eu_member_state` / `international_country`), `jurisdiction_code` (e.g., `US-MI` / `US-CA` / `CA-ON`), `display_name`, `parent_jurisdiction_id` FK NULL (e.g., `US-MI` parent `US-FED`), `regulatory_compliance_class` ENUM (`hipaa` / `phipa` / `gdpr` / `multi`), `controlled_substance_authority` ENUM (`dea_federal` / `state_only`). Day 0 seed: 50 US states + DC + territories + Canada provinces.

12. **Provider License substrate (binding per Build Contract §3.7 patch 1).** `provider_license` carries: `id`, `provider_id` FK (staff_id where is_provider=TRUE per DL-18 inv 6), `license_kind` ENUM (`md` / `do` / `np` / `pa` / `rn` / `lvn` / `dpm` / `dds` / `pharmacist` / `psychologist` / `lcsw` / etc.), `jurisdiction_id` FK (state of license), `license_number` STRING (encrypted; PII per DL-16 inv 7), `issued_at`, `expires_at`, `status` ENUM (`active` / `expired` / `suspended` / `revoked` / `inactive_voluntary`), `dea_number` STRING NULL (encrypted), `dea_substance_classes[]` ARRAY (2 / 3 / 4 / 5 per DEA schedule), `restrictions_text` TEXT NULL, `verified_at`, `verified_by_actor`. Provider may have multiple licenses (multi-state).

13. **Provider Credentialing substrate (Day 0 per Build Contract §3.7 patch 1).** `provider_credentialing` carries: `id`, `provider_id` FK, `credentialing_kind` ENUM (`board_certification` / `fellowship` / `dea_registration` / `state_license` / `payer_credentialing` / `hospital_privilege` / `cme_credit_pool`), `issuing_authority_name`, `credential_id` STRING (encrypted; PII), `issued_at`, `expires_at`, `verification_evidence_doc_id` FK NULL (per Clinical-Media DL patient_document substrate), `attestation_required_for_credentialing_status_change` BOOLEAN. Cross-link DL-18 inv 6 capability flags + DL-7 clinical authority.

14. **Jurisdiction admission rule substrate (binding executable per Build Contract §3.7 patch 1).** `jurisdiction_admission_rule` carries: `id`, `legal_entity_id` FK, `encounter_profile_id` FK (per DL-20 inv 8), `service_id` FK NULL (per-service override; null = profile-default), `patient_jurisdiction_required` BOOLEAN (patient physically in this jurisdiction at action time), `provider_jurisdiction_required` BOOLEAN, `substance_class_required` ENUM NULL (per DEA schedule; Rx prescribe rules), `prior_relationship_required` BOOLEAN NULL (some states require prior in-person before async-Rx), `additional_attestation_kind` ENUM NULL, `effective_at`, `created_by_actor`. Rule resolution at action emission per DL-16 inv 10 — every booking / Rx / lab order RPC reads applicable rule + REJECTS if rule unsatisfied.

### Multi-modality patient continuity (user direction emphasis)

15. **Same-patient multi-modality availability Day 0 (binding per user direction).** Per user direction: *"A Hims client should be able to click 'schedule video call now' on Day 0"*. Substrate-level: patient with relationship at brand_A (Hims-style weight loss) can ALSO discover + book at brand_B (medspa) WITHOUT creating new patient identity (per inv 4 single patient row). New relationship row created per (patient, brand_B); operational state isolated unless inv 5-7 permeability admits. Cross-brand discovery requires consent: per A1 + DL-10 + DL-21 inv 6.

16. **Modality switching within an episode (binding per DL-20 inv 6 + 20).** Care episode may begin async (Hims-style) and shift to scheduled visit (in-person or video); per DL-20 inv 6 encounter_container with profile change. Federation substrate (DL-21) governs the cross-modality transition; jurisdiction + licensure (per inv 11-14) re-evaluated at modality switch (e.g., async Rx admissible in patient's state; in-person upgrade requires provider with state license).

### Attribution substrate (per user direction)

17. **Attribution Line substrate Day 0 (per user direction; cross-link DL-17 inv 31).** Per user direction: *"attribution substrate needs to be planned for in advance, month 1-2"*. Substrate exists Day 0 (per DL-17 inv 31); UI dashboards M1-2. `attribution_line` linked to: commerce_order / appointment / encounter_container per DL-17 inv 31. Federation-Topology binding: attribution_line carries `legal_entity_id` + `brand_id` + `venue_id` for cross-LE attribution reconciliation. Multi-LE revenue attribution per inv 8-9.

### Identity federation patterns

18. **Email + phone canonical identity discovery (binding per DL-10 + A1).** Per Mindbody Layer 2 (mindbody_15 Step 06 Locate Duplicate / Merge Duplicate / Unmask Merged patterns) — patient identity discovery operates via email + phone + DOB canonical match. Substrate: `patient_identity_canonical_match` index on (normalized_email / normalized_phone / dob) — find existing patient before creating new. Cross-relationship merge per inv 19.

19. **Patient relationship merge across brands (binding per DL-10 + A1 + Mindbody Locate/Merge Duplicate evidence).** When same patient operates at brand_A and brand_B, substrate permits explicit merge (single patient identity + 2 relationship rows); reversal via Unmask (per Mindbody pattern). Merge requires: patient consent (or staff capability per DL-18 inv 8 Tier 3 dual approval). Cross-link Layer 2 D.1.

### Audit + decision record

20. **Every federation cross-tenant action emits cns_decision (binding per DL-16 inv 30).** Cross-tenant booking / sale / chart read / Rx prescribe / message thread / etc. emits decision record marking: source tenant, destination tenant, applicable permeability policy, consent state, attestation, action emitted, alternatives rejected. Cross-link DL-16 inv 30 + 33 + 38.

### Regulatory compliance + topology-aware retention

21. **Topology-aware retention + data residency (binding per DL-16 inv D2 admitted-deferred — promoted Day 0 for state-level requirements).** Some substrates carry retention class per DL-16 inv 13; topology-aware retention adjusts class per jurisdiction. E.g., California patient PHI subject to CCPA 12-month default vs federal HIPAA 6-year baseline; both apply per stricter rule. Substrate: `retention_policy_per_jurisdiction` carries `(jurisdiction_id, substrate_kind, retention_minimum_years, retention_maximum_years, requires_explicit_extension_attestation BOOLEAN)`. Day 0 seed for US-federal + CA + NY (initial); other states M1-2 incremental.

### Cross-DL bindings + federation event vocabulary

22. **DL-21 ↔ DL-15 Scheduling (binding).** Booking RPC reads venue (inv 3-axis 11) + jurisdiction admission rule (inv 14). DL-15 amendment 34 (Staff Availability Window 4-axis) reads `venue_ids[]` for Where axis. Cross-brand booking requires permeability admission per inv 6.

23. **DL-21 ↔ DL-17 Commerce (binding).** Sale tenant_id composite per inv 2 (brand + site for commerce). Cross-brand entitlement transfer (e.g., transfer membership from brand_A to brand_B) requires permeability admission per inv 6. Attribution_line carries legal_entity_id for multi-LE revenue per inv 17.

24. **DL-21 ↔ DL-18 RBAC (binding).** Staff permission_group_assignment is brand-scoped per DL-18 inv 13; cross-brand grants require federation_permeability_policy admission per inv 7. Legal entity ownership grants implicit atoms per DL-18 inv 14.

25. **DL-21 ↔ DL-19 Settings (binding).** Federation permeability policy (inv 7) lives in settings substrate per DL-19 inv 22; requires Tier 4 attestation. Brand-level vs LE-level vs site-level settings inheritance per DL-19 inv 4-5.

26. **DL-21 ↔ DL-20 Care-Coordination (binding).** Encounter venue_id (DL-20 inv 6) references venue substrate (inv 3). Care episode legal_entity_id (DL-20 inv 1) per inv 8-9. Cross-brand episode sharing requires permeability admission per inv 6.

### Event vocabulary + outbound

27. **Federation domain event vocabulary seed (binding per DL-16 amendment 40 pattern).** Day 0 seed event_kinds (registered per DL-16 inv 5 + 9 + 29):
    - `federation.patient_relationship_added` / `federation.patient_relationship_merged` / `federation.patient_relationship_unmasked`
    - `federation.permeability_policy_admitted` / `federation.permeability_policy_revoked`
    - `federation.cross_brand_action_attempted` / `federation.cross_brand_action_blocked` / `federation.cross_brand_action_admitted`
    - `federation.venue_created` / `federation.venue_archived` / `federation.venue_capacity_changed`
    - `federation.legal_entity_credentialing_changed` / `federation.provider_license_changed` / `federation.provider_credentialing_changed`
    - `federation.jurisdiction_admission_rule_changed`
    
    Each registry record carries `default_severity` per DL-16 amendment 41 (most are red — federation changes are high-impact).

### Display projections

28. **Federation topology browseable as admin projection (binding per DL-16 inv 3 category e).** Admin UI projects tenant hierarchy as tree: deployment → LE → brand → site → location → venue. Browse + edit per DL-18 atoms. Day 0 ships read-only browse; full edit Day 0 (per user direction federation Day 0). Cross-link DL-19 admin surface.

---

## Open sub-questions (require Knox + user signoff before lock)

- **Q-DL21-1**: Medical director of record substrate — per inv 8 `legal_entity.medical_director_provider_id` — required for some states; how does this compose with multi-LE federation? Tentative: each LE has 1 medical director per state-of-operation; multi-state LE may have multiple state-specific MDoR rows.
- **Q-DL21-2**: Patient identity canonical match (per inv 18) — match on email OR phone OR DOB OR combination? Tentative: deterministic 3-tuple match (email + phone + DOB) confirms; 2-of-3 match prompts staff resolution; 1-of-3 only does not auto-suggest merge.
- **Q-DL21-3**: Cross-state telehealth — per inv 14 jurisdiction admission — does the rule apply to patient state at action time OR patient state-of-residence? Tentative: patient physical state at action time (per Build Contract §3.7 patch 1).
- **Q-DL21-4**: Specialty rollout depth (per inv 10) — Day 0 ships medspa only OR medspa + derm together? User direction: "plastics is next after derm" implies derm Day 0 deep. Tentative: Day 0 medspa deep + derm shallow seed; derm deep at M3; plastics M6 per Build Contract §8.
- **Q-DL21-5**: Partner facility venues (per inv 3 axis 11) — does OMNI ingest data from partner facilities OR only reference them? Tentative: reference Day 0; ingest M6+ per future Partner-Integration DL Phase D.

---

## Rejected patterns

- **Single flat tenant_id collapsing 6-tier hierarchy.** Per inv 2 — composite required.
- **Patient identity duplicated per brand.** Per inv 4 — single patient per deployment.
- **Cross-brand operations without explicit permeability.** Per inv 6 — substrate REJECTS.
- **Federation permeability change without Tier 4 attestation.** Per inv 7 — Tier 4 required.
- **Specialty as its own DL per specialty (Knox-rejected).** Per inv 10 — config + seed + selective amendment to existing DLs.
- **Jurisdiction admission rule bypassed for telehealth.** Per inv 14 — substrate-level enforcement.
- **Provider license shared cross-state without per-state row.** Per inv 12 — explicit per-state row.
- **Retention policy uniform across jurisdictions.** Per inv 21 — topology-aware.
- **Patient relationship merge without consent or Tier 3 attestation.** Per inv 19 — substrate REJECTS.
- **Cross-tenant action without decision record audit.** Per inv 20 — explicit cns_decision required.

---

## Cross-link summary

- **Inherits from:** DL-1 + DL-2 + DL-10 (multi-tenant + patient relationship — strong inheritance; DL-21 extends DL-10) + DL-12 + DL-14 + DL-16 (envelope + amendment 43 actor + amendment 42 outbound)
- **Specializes:** DL-10 patient relationship scoping for federation topology
- **Composes with:** DL-15 + DL-17 + DL-18 + DL-19 + DL-20 (all read federation substrate for tenant scoping + permeability + jurisdiction)
- **Promotes:** A1 (Federation / Permeability / Topology) future arc to Day 0 substrate
- **Coexists with:** §1J identity (existing patient identity; DL-21 reads + extends, does not replace) + §1Q rules + §1Q.14.2 outbound (federation events emit through 8-gate)

---

## A1 promotion gate

This DRAFT promotes A1 (Federation / Permeability / Topology) from FUTURE_ARC to Day 0 substrate per user direction 2026-05-17. Promotion to locked doctrine requires:
1. Knox + user joint signoff on Day 0 federation scope per Q-DL21-1 through Q-DL21-5
2. `FUTURE_ARC_2026-05-12_federation_permeability_topology.md` updated to reflect Day 0 promotion + reference DL-21
3. DL-10 cross-link updated to reference DL-21
4. system_map cross-references updated per cross-link summary

NOT code. NOT migrations. NOT substrate slice. NOT §10.5 stale-existing-OMNI warning removal.
