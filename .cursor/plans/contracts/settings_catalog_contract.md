# Settings / Catalog / Registry — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain)
Authority: `canonical` for the settings-as-operating-system substrate — the declarative configuration/registry/catalog DEFINITION plane (the config plane, distinct from the operational data plane)
Status: `draft_for_ratification` (created 2026-06-01, Foundation vNext; domain pass #10 — native draft; Nick + Knox review gate)
Domain(s): `settings`, `catalog`, `registry`
Lifecycle role: the CONFIGURATION PLANE — it DEFINES the shapes, registries, catalog items, policies, required-fields, vocabularies, and the doctrine floors that every operational domain READS to behave. It owns config DEFINITIONS, **never per-domain runtime facts** (anti-junk-drawer, §3).
Source-of-truth relationship: distilled per `foundation_vnext_reconciliation.plan.md` §2 native-draft method (FAC-first, one integrated pass). **Controlling spine: DL-19 (LOCKED, 31 inv) — setting/setting_registry + 4-tier inheritance + required-fields dual-mode + client-metadata 4-tier + `service_policy`/`service_policy_eligibility_gate` (5 gate-timings) + `booking_preset` + universal `catalog_item` (T0-15) + AI-autonomy-mode + provider-routing-policy + the T0-16 anti-collapse doctrine floors.** Lens: thesis §7.5.2 (universal catalog substrate) + §7.7 (universal projection) + Tier-0 `T0-15`/`T0-16`. Method per `00_architecture_artifact_index.md`.
Supersedes: DL-19 as the build-facing settings artifact (→ evidence/spine); legacy §1F settings scaffold → evidence
Superseded by: none · Manifest action: `add_tier1` · Review gate: `user_knox_required`
**Consolidation statement (binding):** single build-facing home for the configuration/catalog/registry plane. DL-19 (31 inv) + legacy §1F + Mindbody settings raws are **evidence/provenance.** Build from THIS contract.

---

## §1.5 Freshest-Authority Check (embedded — native draft)

| Layer | Source | Disposition |
|---|---|---|
| **Controlling spine (LOCKED, fresh)** | DL-19 (2026-05-17, locked 2026-05-28 `D0THES-DEC-022`; 31 inv) | **clean-into-contract** (compile) |
| **Staged items routed here** | `pathway_sensitivity` declaration (privacy/comms `SC-SET-MSG-001`) · service/catalog DEFINITIONS (D3 `SC-SET-D3-001` / D6 `SC-SET-D6-001`) · `service_policy` definitions (D3 §3 boundary) · offer/campaign catalog (marketing) · venue service-compatibility config (Federation venue refs) · `federation_permeability_policy` hosting (Federation defines shape) · rule/template/campaign config locations (`REV-149`/`REV-170`) | **land here** as DEFINITIONS (§4/§5) |
| **Thesis (lens)** | §7.5.2 universal catalog · §7.7 universal projection · `T0-15` (projection ≠ authority) · `T0-16` anti-collapse trinity (transparency/consent-specificity/model-lineage floors) | governs; consonant |
| **Shipped** | legacy §1F settings surface scaffold | evidence; reconcile at build (§10.5) |

**No staleness:** DL-19 LOCKED + recent + carries the T0-16 floors (inv 16) + universal catalog (inv 31, T0-15). The `encounter_profile_policy` framing was already RIPPED OUT and replaced by `service_policy` keyed by (service_id, modality) — DL-19 inv 18 reflects the post-rip-out model (consonant with D5's `service_occurrence` lock; no stale leak). Q-DL19-1..5 are open sub-questions (§11).

## §1 Purpose

Settings owns **the configuration plane**: the declarative `setting`/`setting_registry`, the universal `catalog_item`, the policy DEFINITIONS (`service_policy` + eligibility gates, routing, autonomy, federation-permeability values), required-fields, client-metadata taxonomies, vocabularies, and **the doctrine floors that cannot be configured away**. It answers *what is configured / defined / catalogued, at what scope, with what inheritance* — it does NOT evaluate, price, commit, enforce, or execute (those are the operational domains).

## §2 Governing thesis concepts

§7.5.2 **universal catalog substrate** (one `catalog_item`, many projections — NOT per-domain catalog tables). §7.7 + `T0-15` **universal projection** (the catalog projects to patient-shelf / provider-menu / commerce-cart / lab-order-form; projection ≠ authority). `T0-16` **anti-collapse trinity floors** (the config plane structurally cannot disable brand-trust-transparency, consent-specificity, or model_version_of_record).

**Build depth bar (Lens A/B; registry + thesis §3.5):** the *actual build* is a **deeply-configurable business-rules/config OS (Mindbody-class "settings as OS" — 12 sections, 200+ registered paths, 4-tier inheritance)** + a **single universal catalog** (the Shopify/Square catalog discipline, but spanning service/lab/retail/supplement/procedure/membership as ONE substrate with projections). NOT per-screen state, NOT per-domain catalog silos. This is the build-facing comparator for Settings.

## §3 Ownership boundary — the anti-junk-drawer rule (binding; Knox front-and-center)

**Settings owns config/registry/catalog DEFINITIONS — it does NOT own per-domain RUNTIME facts.** It defines shapes; the operational domains evaluate/price/commit/enforce/execute against those definitions.

**Owns:** `setting` + `setting_registry` (declarative config plane, ≥200 paths, JSON-Schema-validated) + 4-tier scope inheritance (deployment→legal_entity→brand→site); `required_field_policy` (dual-mode consumer/business); client-metadata 4-tier (`patient_metadata_axis`/value/custom-field/tags); `tenant_vocabulary_override` + auto-fill + `consumer_view_setting`; **universal `catalog_item`** (kind + category_tags + domain_associations + `projection_rules`, T0-15) — the ONE catalog; **`service_policy` + `service_policy_eligibility_gate` DEFINITIONS** (axis-composition + the **5 gate-timings**); `booking_preset`; `ai_autonomy_mode`; outbound-comm setting overrides; `provider_routing_policy` cluster (config); jurisdiction-policy config; **the HOSTED VALUES of `federation_permeability_policy`** (Federation defines its cross-operator meaning); `pathway_sensitivity` declaration (privacy/comms); **the T0-16 doctrine FLOORS**; settings-change events + temporal versioning.
**Does NOT own (anti-junk-drawer):** **booking-time EVALUATION of `service_policy`/gates** (D3 evaluates; Settings defines — D3 §3); **prices/orders/entitlements** (D6 owns; Settings defines `catalog_item`, D6 commercializes via `pricing_option`); **the cross-operator MEANING of permeability** (Federation owns; Settings only hosts the configurable values — Federation §3); **who-may-edit a setting** (RBAC — `settings.edit_*` atoms); **campaign/rule/template LOGIC** (the rules-templates-campaigns engine `REV-149`/`REV-170`; Settings hosts config *locations*, not the firing engine); **policy EXECUTION/orchestration** (Messaging/CNS consume configured policy but own send/orchestration); **runtime per-domain truth** (occurrences/assertions/messages/observations live in their domains). **If a per-domain runtime fact starts living in Settings, that is the junk-drawer bug — move it back.**

## §4 Canonical objects (compiled from DL-19)

**The config plane has 5 sub-substrates (Knox spine):** (a) **Registry** — `setting`/`setting_registry` mechanics + versioning + CODEOWNERS + tenant override/inheritance; (b) **Catalog** — `catalog_item` (service/lab/product/supplement/procedure/membership/…) + `booking_preset` + offer/campaign definitions; (c) **Policy-declaration** — `service_policy` + eligibility-gate definitions + `pathway_sensitivity` + send-policy/autonomy declarations (consumed elsewhere); (d) **Compatibility** — service↔room/resource compatibility + staff-service eligibility definitions (§4a); (e) **Config-governance** — who can edit/version/publish/rollback/deprecate (RBAC-gated, §6 inv 7).

`setting` (inv 1; `setting_path`/`value`/`value_type`/inheritance/temporal/policy_hash) · `setting_registry` (inv 2; per-path schema + read/write atom + `affects_operational_behavior` + `cascade_on_change_event_kind`; ≥200 seed) · `required_field_policy` (inv 7; dual-mode 3-state) · `patient_metadata_axis`/`_value`/custom-field + `client_tag_assignment` (inv 9; 4-tier; **indexes = typed taxonomy for clinical/ops decisions vs tags = free-form CRM labels**) · `tenant_vocabulary_override` (inv 12; display-only, not substrate values) · `tenant_auto_fill_default` · `consumer_view_setting` · **`catalog_item`** (inv 31; universal — `catalog_item_kind` {service/lab_panel/retail_product/supplement/procedure/medication/membership/package/gift_card/…} + category_tags + domain_associations + projection_rules) · **`service_policy`** + **`service_policy_eligibility_gate`** (inv 18; axis-composition + requirement_kind + `gate_timing`(5) + gate_payload) · `booking_preset` (inv 19; single/hierarchical/combo) · `ai_autonomy_mode` (inv 20) · `provider_routing_policy`/`provider_pool`/`_membership`/`_routing_state` (inv 30; deterministic Day-0, AI-optimization deferred) · federation_permeability_policy values (inv 22, hosted) · compliance/audit settings (inv 23).

### §4a Compatibility DEFINITIONS (Settings defines; the owning domain evaluates — Knox)

Compatibility is a config **definition**, not a runtime decision. **Settings owns the definitions:** `service↔room_compatibility` + `service↔resource_compatibility` (which rooms/resources admit which service) + the **service↔staff eligibility** mapping (which staff *may* perform which service). **D3 EVALUATES** these in its 4-axis booking composer + **owns the booking-time mechanics** on `staff_service_assignment` (the prep/booking/finish timing + per-resource concurrency locks are scheduling mechanics, D3 §4 — NOT pure compatibility). **Venue-level compatibility** (`venue.compatible_service_ids[]` / `eligible_staff_ids[]` / `attached_resource_ids[]`) is **Federation** (DL-21 venue, §venue). So the split: Settings defines service-level compatibility; Federation defines venue-level compatibility; D3 evaluates both at booking + owns assignment timing/locks. (Boundary to confirm at D3 ratification — D3 §4 currently lists `room/resource_service_compatibility`; reconcile to "Settings-defined, D3-evaluated" per the `service_policy` precedent in D3 §3.)

## §5 The 5 gate-timings (binding cross-DL doctrine — NOT all requirements are booking blockers)

Eligibility requirements (consent/intake/clearance/age/license/jurisdiction/prior-consult/substance-class/member/permeability) fire at DIFFERENT timings; conflating them into "booking gates" breaks basic flow. **`gate_timing` ∈** `booking_visibility` (appears in self-booking?) · `booking_hard_gate` (blocks appointment creation) · `pre_arrival_task` (task at booking, before arrival, non-blocking) · `pre_performance_gate` (**blocks the performed `service_occurrence_work_item`/encounter_line — where consent normally fires**, NOT at booking) · `closeout_documentation_gate` (blocks settlement/attestation). **Binding default:** consent = `pre_performance_gate`; intake = `pre_arrival_task` (unless tenant marks intake-first → `booking_hard_gate`). Settings DEFINES the timing per (service, modality, requirement); D3 evaluates it at booking, D5 at performance, D7 at closeout.

## §6 Invariants / rejection rules (the gems)

1. **Settings is substrate, not screens** (inv 1) — declarative config plane; UI sections/sub-pages are derived projections (inv 3); REJECT settings-as-code-constants / per-screen-state.
2. **Everything registry-governed** (inv 2) — every `setting_path` registered with schema + read/write atom + cascade event; open registry, not a closed enum.
3. **4-tier inheritance, explicit override** (inv 4/5) — deployment→LE→brand→site; lower overrides higher; override is an explicit row (no silent NULL-fallthrough).
4. **ONE universal catalog** (inv 31, T0-15) — a lab panel, product, service, procedure, supplement, membership are ALL `catalog_item` rows (different kind + projections); **REJECT per-domain catalog tables** (`lab_catalog`+`product_catalog`+`service_catalog` as separate substrates fragments vocabulary + forces N-way reconciliation). Patient sees ONE shelf.
5. **"Configurable" does NOT mean "Settings owns it"** (§3 anti-junk-drawer — THE trap): if the output is an **appointment/eligibility result, commerce price/order/entitlement, actualized clinical work, grant/permeability decision, authority decision, message send, or orchestration decision**, Settings owns ONLY the input **policy/registry/definition** — the **owning domain evaluates + commits**. `service_policy` defined here, *evaluated* by D3; `catalog_item` defined here, *priced* by D6; compatibility defined here, *evaluated* by D3; permeability values hosted here, *meaning* owned by Federation; edit-authority owned by RBAC; send by Messaging; orchestration by CNS.
6. **Doctrine FLOORS are structurally un-disableable (`T0-16`, inv 16):** the settings substrate REFUSES to write a value that would (a) make brand-trust transparency opaque/marketing-mediated, (b) coarsen/aggregate/auto-renew consent-specificity (per-operator/scope/purpose/duration), or (c) null `model_version_of_record` on AI-as-author actions. These are not policy requests — JSON-Schema + cross-validation reject the write. Also cannot disable critical/transactional comms, audit logging, clinical-clearance gating, payload minimization, jurisdiction gating, or break-glass attestation (inv 16).
7. **Settings change emits operational events + is audited** (inv 14/15) — `cascade_on_change_event_kind` notifies downstream domains; high-risk changes require RBAC atom + Tier-3/4 attestation + before/after diff preview (inv 28); append-only temporal (inv 24).
8. **Required-field enforcement is substrate-level** (inv 8) — booking/sale/intake RPCs read `required_field_policy`; REJECT per-screen validation drift.
9. **Indexes ≠ tags** (inv 9) — typed metadata axes (clinical/ops decisions) vs free-form tags (CRM segmentation) stay distinct.
10. **Provider-routing is deterministic Day-0** (inv 30) — round-robin/first-available/weighted/cascade; AI-optimization deferred; routing NEVER bypasses license/jurisdiction/capability (eligibility always upstream); routing POLICY reusable across scheduled + async targets but NEVER collapses async into a fake `appointment` (Round-2.6 guardrail).

## §7 Seams

- **Settings → all domains:** every operational substrate READS effective settings; settings changes emit `policy_changed.*` events domains subscribe to.
- **`SC-SET-D3-001`** Settings → D3: service catalog + `service_policy`/gate + **compatibility (service↔room/resource, service↔staff eligibility, §4a)** DEFINITIONS (D3 evaluates at booking + owns `staff_service_assignment` timing/locks; venue-level compatibility = Federation; `REV-147` + boundary-confirm at D3 ratification).
- **`SC-SET-D6-001`** Settings → D6: `catalog_item` definition → `pricing_option` commercialization (D6 prices).
- **`SC-SET-MSG-001`** Settings → Messaging: `pathway_sensitivity` + outbound-comm overrides (Messaging computes send-policy §6.1).
- **Settings ↔ Federation:** Settings HOSTS `federation_permeability_policy` values; **Federation defines the cross-operator meaning/shape + Tier-4 admission** (Federation §3; Settings must NOT reinterpret it as mere tenant config).
- **Settings ↔ RBAC:** every settings_path write gated by `settings.edit_*` atom + (for floors/high-risk) Tier-3/4 attestation (RBAC §6); doctrine-floor downgrades rejected at write.
- **Settings ↔ labs/Observation:** `catalog_item_kind=lab_panel` (the §1L panel-as-catalog-item half).
- **Settings ↔ rules-engine (`REV-149`/`REV-170`):** hosts campaign/rule/template config *locations*; the firing engine is CNS/the rules-templates-policy engine, not Settings.

## §8 Disposition table

| Prior primitive / source | Disposition | Note |
|---|---|---|
| DL-19 (31 inv) | **compile-into-contract (spine)** | §4-§7; evidence |
| legacy §1F settings scaffold | **superseded; reconcile shipped at build** | §10.5 |
| `encounter_profile_policy`/`registry` framing | **superseded → `service_policy` keyed (service_id, modality)** (inv 18) | consonant with D5 `service_occurrence` lock; no stale leak |
| per-domain catalog tables (lab/product/service separate) | **reject → universal `catalog_item`** (inv 31, T0-15) | one catalog, many projections |
| `pathway_sensitivity` declaration (privacy/comms staged) | **land → §4 setting/catalog** (`SC-SET-MSG-001`) | Messaging computes send-policy; Settings declares the per-pathway value |
| `service_policy`/gate DEFINITIONS (D3 staged) | **own DEFINITIONS** (D3 evaluates) | D3 §3 boundary |
| `federation_permeability_policy` | **HOST values; Federation owns meaning** (inv 22) | Knox boundary; §3 / §7 |
| campaign/rule/template config (marketing/REV-149/170) | **host config locations; engine owns logic** | not the firing engine |
| catalog item / service policy = D3 evaluation / D6 pricing | **NOT owned here** (anti-junk-drawer) | Settings defines shapes only |

## §9 Open items (→ `08`)

- Confirm staged re-points at ratification: `SC-SET-D3-001` (service/policy/**compatibility §4a** defs → D3 evaluate; reconcile D3 §4's `room/resource_service_compatibility` to "Settings-defined, D3-evaluated"), `SC-SET-D6-001` (catalog → D6 price), `SC-SET-MSG-001` (`pathway_sensitivity` → Messaging), Federation permeability hosting boundary (Settings hosts values, Federation owns meaning).
- `REV-149`/`REV-170`: rules-templates-campaigns engine — Settings hosts config *locations*; the engine ownership (CNS sub-area vs own) is decided there; confirm Settings is the config host, not the engine.
- Q-DL19-1 site-vs-venue scope (settings inherit through site; venue is Federation operational); Q-DL19-2 vocabulary override = display-only; Q-DL19-3 export/import UI timing; Q-DL19-4 12-section UI taxonomy signoff; Q-DL19-5 deployment-immutable-floor vs tenant-config boundary.
- Build reconciliation: shipped §1F settings + the DDL (setting/registry/catalog_item/service_policy/…) substrate-slice (DL-19 promotion gate; Day-1 seed ≥200 paths).

## §10 Evidence sources

`DL-19_settings_infrastructure_DRAFT_2026-05-17.md` (LOCKED; 31 inv + gate-timing taxonomy + Q-gates + rejected patterns) · legacy §1F settings scaffold · thesis v2 §7.5.2 / §7.7 + `T0-15` / `T0-16` (anti-collapse trinity floors) · DL-15/DL-17/DL-18/DL-21 cross-links (settings composes with scheduling/commerce/RBAC/federation) · Day 0 Scheduling Rule Matrix Domain 1-2 (service_policy + gate evaluation) · Mindbody settings raws (batches 15/16/18/21).
