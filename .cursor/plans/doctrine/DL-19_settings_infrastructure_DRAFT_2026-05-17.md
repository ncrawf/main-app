# DL-19 — Settings-as-Operating-System Substrate (DRAFT)

**Date:** 2026-05-17
**Status:** DRAFT — Phase 1 hardening per Day 0 Build Contract commit `6dc1286`. NOT locked doctrine. Joint Opus + Knox + user signoff required before promotion to locked DL in `system_map_three_layers_60706286.plan.md`. NOT code. NOT migrations. NOT substrate slice.

**User direction anchor (2026-05-17, verbatim):** *"seettggins sub pages NEED TO BE CONISDERED IN THE BROAD CONTEXT OF OMNI MAN!!!! like. half those fucking setting s are for OMNI at large, not for the fucking scheduling pillar itself. LIKE YES. we need all thos e setting smapped out and usable on day 0."* — Settings-Infrastructure DL is OMNI-wide Day 0, NOT a scheduling sub-feature.

**Cross-DL discipline:** honors system_map Cross-DL warning (Phase 1 hardening 2026-05-17 — vendor/specialty/Mindbody-artifact labels do NOT become OMNI substrate enum values). Treatment menu is tenant-curated configuration via DL-19 settings, NOT a flat substrate enum. Booking presets are tenant-configured affordances, not new substrate hops in the scheduling lifecycle.

**Broad-default booking doctrine (binding cross-DL clause per 2026-05-17 user direction; mirrored in DL-15 + DL-20 preambles):** Broad booking is the patient-facing default WHEN the tenant exposes a self-bookable category-targeting `booking_preset` per inv 19. Broad booking is a SUPPORTED PATTERN, not a UNIVERSAL RIGHT (per Knox 2026-05-17 wording correction — some categories should not be self-bookable: controlled medications, certain HRT flows, surgical consults, post-op issues, pediatric/minor cases, anything requiring prior intake/labs/provider review). Service_category remains pure taxonomy (per system_map §1F service catalog scaffold + Day 0 Scheduling Rule Matrix Domain 1 TM-01 + TM-12). When tenant exposes a self-bookable category-targeting preset, that preset carries operational defaults (default_duration_minutes, default_provider_eligibility_filter, default_resource_requirement, default_planned_details). When tenant does NOT expose such a preset for a category, broad booking at that category is unavailable to patients (staff may still create category-level appointments via the degenerate fallback path with appropriate capability). Patient-facing schedule renders the cleanest parent label ("Neuromodulator Visit" / "Filler Consult" / "Weight Loss Follow-Up" / "Peptide & Wellness Provider Guidance") — NEVER "Unknown Botox" or "Unspecified [whatever]." Missing planned_details are stored as null or marked internally as "not_specified"; they never display as patient-facing ugliness. Per-service tenant configuration via TWO INDEPENDENT FIELDS on `service` (Amendment B per Phase 1 hardening v3 / Knox 2026-05-17 patch round — decomposes the prior conflated `self_bookable_progressive_disclosure_mode` ENUM into two axes that real operations require independently):
- **`service.self_bookable` BOOLEAN** (visibility axis; default TRUE — patient may self-book unless tenant opts service out)
- **`service.planned_detail_disclosure_mode` ENUM** (`none` / `optional` / `required`; default `optional` — form rigor axis, independent of self_bookable)

These admit "self-bookable with no structured details" AND "staff-only but with required structured details when staff books" — neither combination was expressible under the prior conflated ENUM. Pattern 3 (compound enum) regression caught + corrected pre-substrate-slice.

**Gate-timing taxonomy (binding cross-DL doctrine per Knox 2026-05-17 refinement — clarifies that NOT all eligibility/intake/consent requirements are booking blockers):** Eligibility requirements (consent, intake, clinical clearance, age, license, jurisdiction, prior consult, substance class, member-only, federation permeability) fire at DIFFERENT TIMINGS in the appointment lifecycle. Conflating all into "booking gates" would break basic medspa flow (e.g., a patient booking Hydrafacial online — they should book, arrive, then sign consent on-site; consent is NOT a pre-booking requirement). Five distinct gate timings:

1. **`booking_visibility`** — controls whether a service/preset appears in patient self-booking surface. Implemented in Domain 1 via `service.self_bookable` BOOLEAN + `booking_preset.visible_in_self_booking` BOOLEAN. Hidden services do NOT appear; patient cannot attempt; no error.
2. **`booking_hard_gate`** — blocks appointment creation at booking commit time. Examples: no licensed provider available for service + jurisdiction; intake-first programs (Hims-style GLP-1 requires intake submitted before any provider review can be scheduled); age/guardian impossibility (Botox requested for minor without guardian flow available); explicit tenant-policy "consent-before-booking" services (rare, e.g., new-patient surgical consent packet).
3. **`pre_arrival_task`** — task created at booking, must be completed before arrival but does NOT block booking. Examples: intake form for medspa visit; pre-treatment instructions; medical history update; consent packet for typical medspa services like Hydrafacial / Botox / Filler / LHR (consent is pre-arrival OR pre-performance, NOT pre-booking — see #4).
4. **`pre_performance_gate`** — blocks creation of `encounter_line` (i.e., the actual performed treatment) until satisfied. Examples: Botox consent before injection performed_intervention_line; LHR consent before laser treatment performed_line; procedure consent before surgical/endoscopic procedure; medical history update required to authorize treatment. **This is where consent normally fires** — NOT at booking. Patient books Hydrafacial → arrives → completes consent at check-in → performed_intervention_line created. If consent missing at check-in, treatment is blocked but appointment + arrival are preserved.
5. **`closeout_documentation_gate`** — blocks commerce_order closeout OR provider attestation OR encounter_line completion until satisfied. Examples: lot/expiration/units/areas captured for injectable performed_intervention_line; provider signature attestation; required procedure note; required imaging captured.

**Binding rule:** consent is usually a `pre_performance_gate`, NOT a `booking_hard_gate`. Tenant-policy may upgrade specific services to `booking_hard_gate` (e.g., new-patient surgical consult requires consent before booking) BUT this is an explicit tenant decision per-service, NOT a substrate default. The substrate exposes the 5 timings; tenant policy assigns each requirement to one of them per service. Default for consent is `pre_performance_gate`; default for intake is `pre_arrival_task` (UNLESS tenant marks service as intake-first → upgraded to `booking_hard_gate`).

**Substrate location of gate_timing:** Domain 2 (Booking composer / availability) will model `service_policy` (inv 18) to admit per-requirement `gate_timing` ENUM. Day 0 Domain 1 binds the taxonomy; Domain 2 implements the column. Anchored as Amendment D candidate in [Day 0 Scheduling Rule Matrix Domain 2 round](../designs/day_0_scheduling_rule_matrix/) (not designed yet).

**Cross-anchors:**
- System map §1F (existing settings surface scaffold) + DL-14 inv 8 (auditable mutations) + DL-16 inv 30 (decision record for settings changes) + DL-18 inv 23 (settings atoms gate edit operations) + DL-10 (multi-tenant brand scoping)
- Layer 2 Section C (configuration surface — 10 sections + 100+ sub-pages) + Section G.2.2
- Day 0 Build Contract §3 ledger (Settings-Infrastructure Day 0 per user direction) + §6.4 step 4
- Mindbody raw batches 15-16-18 + 21 (cumulative settings surface evidence — Knox marker 6 "deeply configurable business rules engine")

**Scope (binding):** OMNI **settings-as-operating-system substrate** — every configurable behavior across scheduling, commerce, clinical, messaging, federation, RBAC, attribution, compliance, communications, marketing, retail, inventory, taxes, branding, vocabulary, client metadata, required fields, prospect stages, gender enum, contact log types, referral types, room requirements, etc. Settings substrate is the OMNI "configuration plane" distinct from operational substrate (data plane). Specializes against DL-14 + DL-16 — every DL-19 invariant inherits the appropriate cross-domain disciplines (envelope, audit, brand-scoping, registry governance, capability gating).

**EXPLICITLY NOT a scheduling sub-feature.** Settings-Infrastructure is OMNI-wide, Day 0, ships alongside scheduling Day 0 per user direction. Settings substrate is read by every operational substrate; settings changes emit events that operational substrates subscribe to.

---

## Invariants (29 candidates; was 28; +1 for booking_preset substrate)

### Core settings substrate primitives

1. **Settings is a substrate primitive (not screens) — declarative configuration plane (binding).** `setting` carries: `id`, `tenant_id` (brand / site / location per DL-10), `setting_path` STRING (hierarchical dotted path; e.g., `communications.appointment_reminders.lead_time_minutes` / `clients.required_fields.email.consumer_mode` / `pricing.cancellation_policy.lead_time_minutes` / `general.accounting_basis` / `general.default_currency`), `value` JSONB (typed per setting_path schema), `value_type` ENUM (`string` / `number` / `boolean` / `enum` / `array` / `object` / `duration` / `currency_amount` / `percentage` / `cron_expression`), `value_schema_version` (semver per inv 4 registry), `is_inherited` BOOLEAN (TRUE if inherited from brand parent; FALSE if locally overridden — per inv 5), `inherited_from_tenant_id` FK NULL, `effective_at`, `valid_from` + `valid_to` (temporal validity per DL-16 inv 18), `changed_by_actor` per DL-16 amendment 43 actor 4-tuple, `change_reason_code` ENUM NULL, `policy_hash` STRING (audit-evident hash including value + actor + timestamp per DL-16 inv 38). REJECTED: settings as code constants / hardcoded enum values / per-screen state without substrate persistence.

2. **Settings registry governance (binding per DL-16 inv 5 + 9 + 29).** Every `setting_path` MUST be registered in `setting_registry` with: `setting_path` UNIQUE, `description`, `value_type`, `value_schema` JSON Schema (validation rules), `default_value`, `applicable_tenant_kinds[]` (brand / site / location / legal_entity), `read_capability_atom_id` FK NULL (which atom is required to read; e.g., financial settings require atom), `write_capability_atom_id` FK NULL (which atom is required to write), `domain_scope` ENUM (per DL-18 inv 2 — `scheduling` / `commerce` / `clinical` / etc.), `cardinality` ENUM (`single_value` / `array` / `object_list`), `permits_inheritance` BOOLEAN, `affects_operational_behavior` BOOLEAN (TRUE if change emits operational events; FALSE if pure UI), `cascade_on_change_event_kind` STRING NULL (event_kind to emit on change for downstream operational substrate to react). Day 0 registry seed: ≥ 200 setting_paths covering Mindbody Layer 2 §C.1.1-C.1.10 + OMNI-specific additions (federation policy / encounter profile policy / jurisdiction policy / Rx capability / lab capability / AI autonomy mode / etc.). **NOT a closed enum** — registry extends as new operational features land.

3. **Settings sections + sub-pages as derived UI projection (binding).** Per Layer 2 C.1 (10 sections + ~100 sub-pages). UI sections + sub-pages are NOT substrate primitives — they are projections per DL-16 inv 3 category e derived from registry grouping by `domain_scope` + `affects_operational_behavior`. `setting_admin_section` projection: groups setting_paths by section. `setting_admin_subpage` projection: groups by sub-page within section. Day 0 UI ships ≥ Mindbody's 10 sections (Communications & Marketing / Staff / Clients / Inventory / Pricing / General / Services / Retail / Mindbody Add-ons / Classic Setup) RENAMED for OMNI as 12 sections (Communications & Outbound / Staff & RBAC / Patients & Identity / Inventory & Supply / Commerce & Pricing / General & Branding / Services & Scheduling / Retail & POS / Clinical & Rx / Federation & Permeability / Marketing & Lifecycle / Compliance & Audit). Per-page URL-addressable per inv 6.

### Inheritance + scoping primitives

4. **Settings scope hierarchy 4-tier (binding per DL-10).** `setting` admits 4 tenant scope levels with inheritance: (1) **deployment** (OMNI-wide default per setting_path; system-shipped) → (2) **legal_entity** (organization holding company; e.g., Bloom Health Holdings) → (3) **brand** (operational brand under LE; e.g., Bloom Health Birmingham brand) → (4) **site** (individual clinic location). Lower scope overrides higher scope; missing-at-scope falls through to parent. Resolution: `effective_setting(tenant_id, setting_path) = first-non-null walk from site → brand → legal_entity → deployment`. `is_inherited = TRUE` rows are denormalized for query performance; rebuilt on parent change per inv 13.

5. **Inheritance override is explicit per row (not silent).** When a site overrides a brand setting, the substrate inserts a new `setting` row at site scope with `is_inherited = FALSE` + `value` overriding parent. Subsequent reads at site scope return the override. REJECTED: silent overrides via NULL-fallthrough that re-inherit on row deletion; deletion is explicit `valid_to` + new row admission. Per DL-12 versioning + DL-16 inv 18.

6. **Every setting sub-page is URL-addressable with stable identifier (binding).** Per Layer 2 G.2.2 invariant + Mindbody URL patterns. `setting_admin_subpage.url_slug` is stable (e.g., `/settings/clients/required-fields` / `/settings/pricing/cancellation-policy` / `/settings/general/accounting-basis`). URL changes require redirect registry per DL-13 + amendment for vocabulary changes per inv 12. Deep-linking from operational UI (e.g., commerce admin links to `payment-methods` sub-page) MUST use stable slug, not screen ID.

### Required Fields + dual-mode primitives

7. **Required Fields substrate with 3-state field-state enum + dual-mode policy (binding per Mindbody Layer 2 C.2 + Batch 16 Step 07).** `required_field_policy` carries: `id`, `tenant_id`, `entity_kind` ENUM (`patient` / `appointment` / `commerce_order` / `intake_session` / `consent_artifact` / etc.), `field_path` STRING (dotted path within entity; e.g., `patient.email` / `patient.dob` / `patient.emergency_contact.phone` / `appointment.deposit_amount` / `commerce_order.tax_exempt_reason`), `consumer_mode_state` ENUM (3-state: `always_required` / `configurable_required` / `configurable_optional`), `business_mode_state` ENUM (3-state, same enum). Dual-mode = independent flag per consumer-facing flow vs staff-facing flow. Some fields (e.g., email in consumer mode) are `always_required` (greyed-permanent in UI per Mindbody pattern). Field state validation runs at form submit per mode-of-emission (consumer flow vs business flow).

8. **Required Field admission tier composes with DL-15 inv 2 booking + DL-17 inv 6 sale + Clinical-Media intake (binding cross-DL discipline).** Booking RPC, sale RPC, intake submission RPC all read required_field_policy per `entity_kind + mode` and REJECT if required fields missing. Substrate-level enforcement (NOT app-layer-only). REJECTED: per-screen field validation drift where some surfaces require email and others don't for the same entity.

### Client metadata 4-tier substrate (Mindbody axis)

9. **Client metadata substrate is a 4-tier hierarchy (binding per Mindbody Layer 2 + Batch 16 Step 06-08 + system map 1J discipline).** Four distinct mechanisms operate orthogonally on patient/client:
    - **Tier 1 — Required Fields**: which fields the patient record MUST have populated per inv 7 dual-mode
    - **Tier 2 — Client Indexes** (`patient_metadata_axis`): tenant-defined typed taxonomies (e.g., `Massage Pressure` axis with values `Light / Medium / Firm / Deep`; `Music Preference` axis with values `None / Classical / Pop`; `Reason for Visiting` axis with tenant-customized values). Each axis has: `id`, `tenant_id`, `name`, `value_kind` ENUM (`single_select` / `multi_select` / `free_text_within_axis`).
    - **Tier 3 — Client Index Values** (`patient_metadata_axis_value`): values within an axis; per-axis configurable; tenant adds/removes values without code change.
    - **Tier 4 — Form Custom Fields**: form-level extensions distinct from index axes (e.g., "Number of children" on intake form for pediatric practice); per-form scope.
    
    Plus **Tags** (orthogonal to all 4 tiers per Mindbody distinction): `client_tag_assignment` carries arbitrary unstructured labels (e.g., VIP / Difficult / Refer-friend). Tags vs Client Indexes distinction (Layer 2 + system map 1J amendment territory): tags = free-form labels for marketing/CRM segmentation; indexes = typed structured taxonomy for clinical/operational decisions.

10. **Client Index resolution at booking + commerce + outbound (cross-DL binding).** Patient metadata axes are read by operational substrates: scheduling reads `Massage Pressure` for therapist matching; outbound reads `Music Preference` for in-room ambient audio control (where integrated); commerce reads `Tax-Exempt Status` for sale tax computation; Rx reads `Pharmacy Preference` for refill destination. Resolution path: `patient_metadata_assignment(patient_id, axis_id) → axis_value_id → axis_value.label`. Operational substrates declare which axes they consume per DL-16 inv 5 + 9 + 29 registry.

### Per-clinic auto-fill + vocabulary

11. **Per-clinic auto-fill defaults substrate (binding per Layer 2 C.7).** `tenant_auto_fill_default` carries: `tenant_id`, `entity_kind`, `field_path`, `default_value` JSONB, `applies_to_actor_kinds[]` ARRAY (per DL-16 amendment 43; e.g., applies to staff-created records but not patient-self-service). New patient form (Mindbody Layer 2 Batch 12 Step 03): City "Bloomfield Hills" / State Michigan / Country US auto-populates for clinic in Michigan. OMNI substrate generalizes.

12. **Words and Phrases vocabulary override substrate (binding per Mindbody Layer 2 C.4 + chat nav cluster 1).** `tenant_vocabulary_override` carries: `tenant_id`, `original_word` (canonical OMNI term; e.g., `appointment` / `member` / `pricing_option`), `override_word` (tenant's preferred term; e.g., medspa uses `treatment` / `client` / `package`). UI surfaces read effective vocabulary at render time per `tenant_id`. NOT a translation system (i18n is separate); this is brand-domain-vocabulary customization. Affects projections + outbound templates per DL-16 inv 3 category e.

13. **Client View Settings (consumer-facing UI customization per Layer 2 C.5).** `consumer_view_setting` carries: `tenant_id`, `consumer_surface_path` (e.g., `client_portal.home` / `client_portal.booking`), `customization_kind` ENUM (`hide_section` / `show_section` / `relabel_section` / `reorder_sections` / `inject_custom_block`), `customization_value` JSONB. Per-brand customization without code change. Consumer surface renders read this substrate at render time.

### Settings change lifecycle + audit

14. **Settings change emits operational events for downstream substrates (binding per DL-16 inv 4 bidirectional CNS↔domain seam).** Per inv 2 registry `cascade_on_change_event_kind`. Examples:
    - Change `pricing.cancellation_policy.lead_time_minutes` → emit `policy_changed.cancellation_lead_time` → scheduler subscribes + recomputes pending cancellation validations
    - Change `commerce.tax_rate_sales_tax_percent` → emit `policy_changed.tax_rate` → commerce subscribes + recomputes pending sale totals (in-flight carts)
    - Change `clinical.rx_capability.enabled` → emit `brand_capability_changed.clinical_rx` → DL-18 inv 10 brand-capability gate updates
    
    Settings substrate is **append-only** per inv 1 (changes insert new rows with new `valid_from`; old rows have `valid_to` set). Read-side projection materializes current effective value per tenant.

15. **Settings change requires DL-18 atom + DL-18 inv 8 attestation tier (binding cross-DL).** Every settings_path in registry declares `write_capability_atom_id` per inv 2. Edit emits `orchestration_action` per DL-14 inv 16 + DL-16 envelope. Action authorization runs DL-18 inv 5 resolution. Some settings_paths (e.g., `compliance.hipaa_strict_mode.disabled` / `audit.retention.years` / `federation.permeability_to_partner_X`) require DL-18 inv 8 Tier 4 attestation (provider_signature or legal_entity_owner_signature).

16. **Settings cannot violate doctrine invariants (binding doctrinal floor).** Settings substrate admits configuration WITHIN doctrine guardrails per DL-1 + DL-7 + DL-14 + DL-15 + DL-16 + DL-17 + DL-18. Examples:
    - Cannot disable critical/transactional comms (per DL-16 + 1Q outbound 8-gate gate 2 consent class)
    - Cannot disable audit logging (per DL-16 inv 38 tamper-evident)
    - Cannot disable clinical clearance gating (per DL-15 inv 10 absolute)
    - Cannot override per DL-16 inv 7 payload minimization for PHI events
    - Cannot bypass jurisdiction gating (per DL-15 amendment + Build Contract §3.7 patch 1)
    - Cannot disable break-glass attestation (per DL-18 inv 12)
    
    Doctrine floor is enforced at substrate write time via JSON Schema validation (per inv 2 registry `value_schema`) + cross-validation rules. REJECTED: tenant setting any value that violates doctrine.

### Specific high-value settings substrates

17. **Accounting Basis brand-level setting (composes with DL-17 inv 21).** `general.accounting_basis` ENUM(`accrual` / `cash`) at brand scope. Change emits `policy_changed.accounting_basis` → DL-17 revenue recognition substrate updates. Audit trail per inv 14.

18. **Service-policy substrate (REPLACES prior encounter_profile_policy framing per DL-20 rip-out of encounter_profile_registry; EXTENDED with Amendment D per Phase 1 hardening v4 / Knox 2026-05-17 Round 1.7 correction).** `service_policy` carries per-(service_id, modality) axis composition flags + eligibility gates separated by timing. Settings UI exposes per-service-per-modality editor. Booking RPC reads policy at appointment_propose time per DL-15 inv 30; encounter_line creation reads policy per DL-20 inv 12; closeout reads policy per DL-20 inv 15.

**Two-part substrate (Amendment D restructure):**

```text
service_policy (axis composition — structural, no timing semantics):
├── id, tenant_id (composite per DL-21 inv 2)
├── service_id FK (per DL-15 inv 30)
├── modality ENUM (per DL-20 inv 35 — in_person / video / phone / async)
├── requires_staff BOOLEAN          (4-axis composer per DL-15 inv 30)
├── requires_room BOOLEAN
├── requires_resource BOOLEAN
├── requires_capacity_consume BOOLEAN
├── requires_scheduled_time BOOLEAN
├── allows_walk_in BOOLEAN
└── audit lineage

service_policy_eligibility_gate (NEW Amendment D child substrate — eligibility + 5-timing):
├── id, tenant_id (composite per DL-21 inv 2)
├── service_id FK (per DL-15 inv 30)
├── modality ENUM
├── requirement_kind ENUM (registry-extensible per DL-16 inv 5):
│       clinical_clearance / consent / intake_complete / deposit /
│       age_verification / license_validation / prior_consult_required /
│       substance_class_authorization / member_only / federation_permeability /
│       medical_director_review / lab_results_review
├── required BOOLEAN (TRUE if this gate applies to this service+modality)
├── gate_timing ENUM (the 5 values per Day 0 Scheduling Rule Matrix TM-12 +
│       DL-19 preamble gate-timing taxonomy):
│       booking_visibility / booking_hard_gate / pre_arrival_task /
│       pre_performance_gate / closeout_documentation_gate
├── gate_payload JSONB NULL (per-requirement-kind extensions; e.g.,
│       age_verification: {min_age: 18, guardian_consent_allowed: TRUE};
│       consent: {consent_artifact_kind: 'neuromodulator_consent_v2'};
│       license_validation: {required_license_kinds: ['md','np','pa'],
│       jurisdiction_match_required: TRUE};
│       deposit: {amount: 50, capture_method: 'card_on_file'};
│       intake_complete: {intake_template_id: '<uuid>'})
├── tenant_override_allowed BOOLEAN (can tenant downgrade/upgrade
│       gate_timing per service via admin UI? default TRUE for most;
│       FALSE for license_validation + age_verification when statute-bound)
├── unique_per_kind UNIQUE constraint: (service_id, modality, requirement_kind)
│       — one row per (service+modality+requirement); update via insert-new-
│       row + valid_to set on old row per DL-12 versioning + DL-16 inv 18
├── created_by_actor (DL-16 amendment 43)
└── audit lineage
```

**Day 0 default seed (per DL-19 preamble gate-timing taxonomy):**

| Service kind | requirement_kind | required | gate_timing | Rationale |
|---|---|---|---|---|
| Normal medspa (Hydrafacial / Botox / Filler / LHR / CoolSculpting / Sculptra) | `consent` | TRUE | `pre_performance_gate` | Patient signs at check-in before treatment; not pre-booking |
| Normal medspa | `intake_complete` | TRUE | `pre_arrival_task` | Standard intake form; pre-arrival; does not block booking |
| Normal medspa | `clinical_clearance` | TRUE (per service) | `pre_performance_gate` | Verified at check-in; does not block booking |
| GLP-1 / HRT async (Hims-style) | `intake_complete` | TRUE | `booking_hard_gate` | Intake-first; tenant explicitly upgrades for this service kind |
| GLP-1 / HRT | `consent` | TRUE | `pre_performance_gate` (provider review) | Provider reviews intake + consent before Rx |
| GLP-1 / HRT | `prior_consult_required` | TRUE (state-dependent) | `booking_hard_gate` | Some states (e.g., AL/AR/TX) require prior in-person before async Rx; jurisdiction-derived per DL-21 |
| Controlled substance Rx | `substance_class_authorization` | TRUE | `booking_hard_gate` | DEA license + state license per substance class |
| Surgery / Procedure | `consent` | TRUE | `pre_performance_gate` (procedure-specific) | Procedure consent before procedure performed |
| Surgery / Procedure | `prior_consult_required` | TRUE | `booking_hard_gate` | Pre-surgical consult required before procedure booking |
| All services | `license_validation` | TRUE | `booking_hard_gate` | Provider must hold license valid for service + patient jurisdiction |
| All services | `age_verification` | (per service min_age) | `booking_hard_gate` (when no workaround) OR `pre_performance_gate` (when guardian consent admitted) | Statute-bound for substance class; tenant-config for medspa minors |

After DL-20 patches RIP OUT the encounter_profile_registry substrate (encounter.modality is just a 4-value enum: in_person / video / phone / async; specialty leakage prevented), policy is keyed by (service_id, modality) instead of (encounter_profile_id). Same axes; different key. NOT pure-scheduling — care-coordination cross-cuts.

**Cross-link:** Day 0 Scheduling Rule Matrix [Domain 2 Section A](../designs/day_0_scheduling_rule_matrix/02_domain_booking_composer.md) implements the gate evaluation logic + per-timing firing across booking flow. Domain 5 (encounter creation) reads `pre_performance_gate` to block encounter_line; Domain 7 (documentation) reads `closeout_documentation_gate` to block attestation/closeout.

19. **`booking_preset` substrate (NEW DL-19 Phase 1 hardening addition 2026-05-17).** Tenant-configured booking affordance, lives under DL-19 settings substrate. NOT a new substrate layer in the scheduling lifecycle. Maps tenant-named affordances ("Brazilian LHR" / "CoolSculpting 2 cycles" / "Hydrafacial Deluxe" / "Injectable Consult" / "Neuromodulator Visit" / "Masseter Tox" / "Full Facial Balancing combo") to default substrate values on the resulting appointment_item.

    ```text
    booking_preset
    ├── id, tenant_id
    ├── display_label                    -- patient-facing name
    ├── target_service_id FK NULL        -- when preset targets specific service
    ├── target_service_category_id FK NULL  -- when preset targets category-level
    │                                       (mutually exclusive with target_service_id)
    ├── target_pricing_option_id FK NULL -- for tier-at-booking (Hydrafacial-style)
    ├── default_planned_quantity NUMERIC NULL
    ├── default_planned_details JSONB    -- pre-populates planned_details with
    │                                       preset's structured defaults
    │                                       (e.g., "Masseter Tox" preset =>
    │                                        planned_treatment_areas=['masseter'])
    ├── default_duration_minutes NUMERIC NULL
    ├── default_provider_eligibility_filter STRING NULL
    ├── default_resource_requirement STRING NULL
    ├── visible_in_self_booking BOOLEAN
    ├── parent_preset_id FK NULL         -- for hierarchical drill-down UX
    │                                       (Hydrafacial parent w/ Signature/
    │                                        Deluxe/Platinum children)
    ├── bundled_member_preset_ids[] ARRAY NULL  -- for combo bundles like
    │                                       "Full Facial Balancing" =
    │                                       Neuromodulator + Filler + Filler +
    │                                       Biostimulator Consult; picking
    │                                       this preset materializes MULTIPLE
    │                                       appointment_items
    ├── tenant_display_order NUMERIC
    └── active BOOLEAN
    ```
    
    Booking RPC reads preset(s), materializes one or more appointment_items with preset defaults, allows edit-with-schema-validation before commit. Single substrate row supports three patterns: single-item preset (target_service_id), hierarchical drill-down preset (parent_preset_id chain), combo bundle preset (bundled_member_preset_ids[]). Tenant chooses pattern per affordance. Cross-link DL-15 amendment 5 (quantity_strategy / per_unit_quantity / treatment_areas) + DL-20 appointment_item.linked_booking_preset_id FK. Day 0 ships substrate + admin UI; tenants create their own preset libraries.

19. **Jurisdiction + Licensure Policy substrate (composes with Build Contract §3.7 patch 1 + DL-18 inv 6 capability flags).** `jurisdiction_policy` carries per-(legal_entity, profile, service, jurisdiction-state) admission rules: which provider licenses admit which actions. Settings UI per Build Contract patch 1.

20. **AI Autonomy Mode substrate per DL-14 inv 18 (binding settings substrate per actor_kind).** `ai_autonomy_mode` carries: `tenant_id`, `actor_kind` (per DL-16 amendment 43; e.g., `staff_with_ai_assist` / `provider_ai_assisted`), `surface_path` (e.g., `messaging.draft_reply` / `clinical.summarize_chart` / `commerce.discount_propose`), `autonomy_level` ENUM (`disabled` / `propose_only_human_must_confirm` / `bounded_autopilot_with_audit` / `full_autonomy_within_policy`), `policy_overrides` JSONB. Per DL-14 inv 18-21. Settings UI: clinical surfaces default to `propose_only` Day 0; marketing/lifecycle default to `bounded_autopilot`.

21. **Outbound communication settings substrate (composes with DL-16 amendment 42 32 outbound trigger registry).** Per DL-16 amendment 42 — each registered outbound `orchestration_action_kind` has tenant-overridable settings: `default_template_set` / `default_throttle` / `default_quiet_hours_policy` / `default_consent_class` overrides. Settings substrate carries these overrides at tenant scope; resolution per inv 4 inheritance.

22. **Federation Permeability Policy substrate (composes with DL-10 + A1 + Federation-Topology DL).** `federation_permeability_policy` carries per-tenant outgoing-permission grants (which other tenants may see / write to / participate with this tenant's substrate). Settings UI requires DL-18 inv 8 Tier 4 attestation (legal_entity_owner_signature). Change emits `policy_changed.federation_permeability` + immediate red alert per DL-16 amendment 41.

23. **Compliance + Audit settings substrate.** `compliance.hipaa_strict_mode` / `compliance.retention_policy` / `audit.tamper_evident_chain_verification_interval_hours` / `audit.export_phi_dual_approval_required` / etc. All such settings REJECT downgrade without DL-18 inv 8 Tier 4 attestation. Per DL-16 inv 38 tamper-evident + Build Contract §3.4.

### Lifecycle + versioning

24. **Settings has temporal validity (binding per DL-16 inv 18).** Settings change at time T creates new row with `valid_from = T`; old row gets `valid_to = T`. Historical reads at past time `T_past` return the value-in-force-at-T_past. Operational substrates use this for compliance + reconciliation per DL-16 inv 39.

25. **Settings registry versioning (binding per DL-16 inv 9 + DL-12).** Setting_path schema changes (new field, removed field, type change) require registry version bump + migration plan per DL-16 inv 9 + DL-12. CI lint rejects production deploy if registry change shipped without migration. Tenant-side: existing values either auto-migrate (additive) or queue for tenant admin review (breaking).

26. **Settings export / import for tenant cloning (Day 0 OR M1-2? — Q-DL19-3).** Tenant admin may export current settings configuration as machine-readable manifest (JSON / YAML) + import to new tenant (e.g., onboarding new clinic location with same brand). Day 0 substrate exists; UI affordance Day 0 or M1-2 deferred per joint signoff. Cross-link Build Contract §6.4.

### UI projections + admin surface

27. **Settings admin surface composes 12-section taxonomy (binding per inv 3).** Day 0 UI ships 12-section admin interface. Each section: collapsible left-nav with sub-pages; sub-pages list relevant setting_paths with edit affordances. URL-addressable per inv 6. Audit log link per sub-page (drill into change history). Search across all settings (read DL-18 atom-gated).

28. **Settings change preview / diff (binding for high-risk changes).** Per DL-16 inv 30 decision record. High-risk settings changes (Tier 3 / Tier 4 per inv 15) MUST show preview: before-state → after-state diff + downstream impact summary (e.g., "This change will affect 142 pending appointments / 38 active contracts / cancel 17 in-flight outbound messages"). Confirmation requires reason_code + Tier 3/4 attestation per inv 15.

---

## Open sub-questions (require Knox + user signoff before lock)

- **Q-DL19-1**: Site vs location vs venue scope distinctions — DL-10 has site; Build Contract §3.7 patch 6 + Federation-Topology DL has 11-axis venue. How do settings inherit through site vs venue? Tentative: site is multi-tenancy administrative unit; venue is operational location; settings inherit through site, venue admits its own substrate but inherits configuration from site.
- **Q-DL19-2**: Vocabulary override (inv 12) — does it affect substrate stored values OR only display rendering? Tentative: only display rendering; substrate stores canonical OMNI terms; render-time substitution per tenant vocabulary.
- **Q-DL19-3**: Settings export/import (inv 26) — Day 0 substrate + UI affordance, OR Day 0 substrate + M1-2 UI? Tentative: Day 0 substrate; M1-2 UI affordance per Build Contract Core Workflow tier.
- **Q-DL19-4**: 12-section UI taxonomy — exact renamed sections per inv 3 require user signoff; the proposed 12-section list is OPUS-recommendation only.
- **Q-DL19-5**: When does a setting belong to OMNI deployment level (per inv 4 tier 1) vs admin-configurable? Tentative: critical doctrinal floors are deployment-level immutable (per inv 16); everything else is tenant-configurable down to site.

---

## Rejected patterns

- **Settings as code constants.** Per inv 1 — substrate-persisted.
- **Per-screen state without substrate.** Per inv 1 — substrate-persisted.
- **Hardcoded enum values without registry.** Per inv 2 — registry-extensible.
- **Settings disabling critical/transactional comms.** Per inv 16 — doctrine floor.
- **Settings disabling audit / clinical clearance / payload minimization / jurisdiction gating.** Per inv 16 — doctrine floor.
- **Silent inheritance overrides.** Per inv 5 — explicit override rows.
- **URL-unstable settings sub-pages.** Per inv 6 — stable slugs + redirect registry.
- **Required field validation drift across surfaces.** Per inv 8 — substrate-level enforcement.
- **AI autonomy mode default to full autonomy for clinical.** Per inv 20 — default propose_only.
- **Settings change without audit + decision record.** Per inv 14 + 15 — every change emits event + audit.

---

## Cross-link summary

- **Inherits from:** DL-1 + DL-2 + DL-10 (tenant scoping) + DL-12 (versioning) + DL-14 + DL-16 (envelope + audit + decision record + amendment 43 actor) + DL-18 (atom gating)
- **Composes with:** DL-15 (scheduling settings: cancellation policy / waitlist policy / deposits / encounter profile policy) + DL-17 (commerce settings: tax rates / accounting basis / cancellation fees / discount programs) + DL-18 (RBAC settings: permission groups + atoms) + future Care-Coordination DL + Federation-Topology DL (permeability policy)
- **Coexists with:** §1F existing settings surface scaffold + §1Q rules engine (rules read effective settings) + §1Q.14.2 outbound 8-gate (gate config in settings)

---

## Promotion gate

Per Build Contract §6.4 step 4 + §6.5 step 5: DL-19 (DRAFT) → joint signoff → promotion to LOCKED inline in system_map → substrate slice scoping (setting / setting_registry / required_field_policy / patient_metadata_axis* / tenant_auto_fill_default / tenant_vocabulary_override / consumer_view_setting / encounter_profile_policy / jurisdiction_policy / ai_autonomy_mode / federation_permeability_policy DDL + admin UI components + change event registry). Substrate slice MUST verify existing §1F implementation is current per §10.5 stale-existing-OMNI warning.

NOT code. NOT migrations. NOT substrate slice. NOT §10.5 warning removal.
