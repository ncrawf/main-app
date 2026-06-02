# Federation / Operator / Tenant / Topology — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain)
Authority: `canonical` for the federation topology + cross-operator grant/visibility/permeability + jurisdiction/licensure substrate
Status: `draft_for_ratification` (created 2026-06-01, Foundation vNext; domain pass #11 — first untouched-domain NATIVE draft; Nick + Knox review gate)
Domain(s): `federation`, `operator`, `tenant`, `topology`
Lifecycle role: the TOPOLOGY + CROSS-OPERATOR substrate — who the operators/tenants are, how they nest, what venue/jurisdiction/licensure they operate under, and **the canonical owner of the grant/visibility/permeability primitives** that let one patient's data move across operators with consent + audit (the layer every other domain READS to gate cross-tenant action).
Source-of-truth relationship: distilled per `foundation_vnext_reconciliation.plan.md` §2 native-draft method (FAC-first, one integrated pass). **Controlling spine: DL-21 (LOCKED, 29 inv — 6-tier topology + 11-axis venue + permeability policy + jurisdiction/licensure + A1 Day-0 federation).** Lens: thesis §7.8 (cross-operator coordination) + §7.6 (CNS Meta = Network Governance Plane) + §6.7-6.8 (5-tier operator vocabulary) + §7.5.1 (per-event ownership) + §13.7 + Tier-0 `T0-14`/`T0-16(a)` (operator-neutrality / anti-institutional-gravity). Extends DL-10 (Identity). Method per `00_architecture_artifact_index.md`.
Supersedes: DL-21 as the build-facing federation artifact (DL-21 → evidence/spine); `FUTURE_ARC_2026-05-12_federation_permeability_topology.md` (A1 source → evidence)
Superseded by: none · Manifest action: `add_tier1` · Review gate: `user_knox_required`
**Consolidation statement (binding):** this is the single build-facing home for federation/topology + the cross-operator grant layer. DL-21 (29 inv) + the A1 future-arc + legacy §1U multi-tenant are **evidence/provenance, not required runtime reading.** Build from THIS contract.

---

## §1.5 Freshest-Authority Check (embedded — native draft)

| Layer | Source | Disposition |
|---|---|---|
| **Controlling spine (LOCKED, fresh)** | DL-21 (2026-05-17, locked 2026-05-28 `D0THES-DEC-023`; 29 inv) — 6-tier topology · composite tenant_id · 11-axis venue · `legal_entity`/`legal_entity_brand` · `jurisdiction`/`provider_license`/`provider_credentialing`/`jurisdiction_admission_rule` · `patient_continuity_policy` · `federation_permeability_policy` · operator-neutrality inv 29 | **clean-into-contract** (compile; not transcribe) |
| **Consume-before-owned primitives (`REV-157`)** | `shared_context_grant`/`visibility_grant`/`care_relationship`/operator-boundary/break-glass — currently referenced by Identity §9/§11, D7 §6, Observation §8, CNS §7, D5 §7 inv 9 with NO owner | **Federation OWNS them here** (this is the headline — the grant layer finally has a home) |
| **Thesis (lens)** | §7.8 cross-operator coordination (passive coherence default / elective active) · §7.6 Network Governance Plane (CNS Meta) · §6.7-6.8 operator vocabulary · §7.5.1 `operator_of_record` per-event dimension · `T0-14`/`T0-16(a)` operator-neutrality | governs meaning/boundaries; consonant |
| **Extends** | DL-10 / Identity (single `patient` per deployment + multi `patient_relationship`) | Federation adds the cross-relationship GRANT/topology layer over Identity's identity/relationship |

**No staleness:** DL-21 is LOCKED + recent + already operator-neutrality-amended (inv 29). No superseded layer. Q-DL21-1..5 are open sub-questions (§9), not stale content.

## §1 Purpose

Federation owns **the operator/tenant topology and the cross-operator permeability substrate**: who the operators are and how they nest (6 tiers), the physical/virtual `venue`, legal-entity + jurisdiction + provider-licensure, and **the canonical grant/visibility/care-relationship/permeability primitives** that govern whether a patient's data or care can cross an operator boundary (with consent + attestation + audit). Every other domain (Identity/D5/D6/D7/Observation/CNS/Messaging/Intake) **READS** federation substrate to gate cross-tenant action; Federation does not own their truth.

## §2 Governing thesis concepts

§7.8: **default = passive coherence** (`care_coordination_owner` = OMNI Patient CNS observes across operators) / **elective = active coordination** (explicit operator closes loops within scope + consent). §7.5.1: `operator_of_record` is a per-event ownership dimension (no global shared chart). §7.6: the Network Governance Plane (CNS Meta) **enforces** policy; Federation provides the topology/grant/consent substrate it reads. **`T0-14` operator-neutrality:** OMNI-operated operators are tenants like any third-party Brand — identical permeability/consent/attestation rules; no privileged tier; no self-dealing via deployment/governance control.

**Build depth bar (Lens B; registry + thesis §3.5):** the *actual build* is the **multi-tenant / multi-entity backbone an enterprise platform (Oracle/Workday-class governance + Salesforce org-hierarchy)** brings — but **inverted to patient-centric**: one patient identity across operators, data moves only by scoped grant + consent + audit (NOT a flattened enterprise chart). Federation is the substrate that makes "3 spas Day 1 → derm → plastics → GI/cardio" + cross-operator patient continuity possible without a rewrite. This is the build-facing comparator for Federation.

## §3 Ownership boundary

**Owns:** the **6-tier topology** (deployment · legal_entity · brand · site · location · venue) + **composite `tenant_id`** (NOT a flat FK); the **11-axis `venue`**; `legal_entity` + `legal_entity_brand` (M:N ownership); `jurisdiction` + `provider_license` + `provider_credentialing` + `jurisdiction_admission_rule`; **the cross-operator GRANT LAYER (`REV-157`): `patient_continuity_policy` · `federation_permeability_policy` · `shared_context_grant` · `visibility_grant` · `care_relationship` · operator-boundary · cross-tenant break-glass**; the federation event vocabulary + cross-tenant `cns_decision` audit marking; topology-aware retention/data-residency; the `operator_of_record`/operator-context *definition* (the dimension other domains stamp on their events).
**Does NOT own:** **patient IDENTITY + `patient_relationship`** (Identity — Federation governs cross-relationship GRANTS, Identity owns the identity/relationship rows); **RBAC capability/role atoms** (DL-18 — cross-brand grants COMPOSE with RBAC atoms, don't replace them); **where permeability policy is *stored/inherited*** (Settings/DL-19 substrate hosts it; Federation defines its shape + admission); **clinical/commerce/scheduling/doc/observation truth** (they READ federation to gate cross-tenant action); **policy ENFORCEMENT orchestration** (CNS Meta / Network Governance Plane enforces; Federation supplies the substrate it reads).

## §4 Canonical objects (compiled from DL-21; build-facing)

| Object | One-line |
|---|---|
| topology tiers + `tenant_id` composite (inv 1-2) | `(deployment_id, legal_entity_id, brand_id, site_id, location_id, venue_id)`; each substrate scopes to its relevant subset; **flat tenant_id REJECTED** |
| `venue` (11-axis, inv 3) | address · venue_kind · capacity · attached_resources · eligible_staff · compatible_services · operating-hours(RRULE) · jurisdiction · accessibility · mode-of-practice · partner/federation-linkage |
| `legal_entity` (inv 8) + `legal_entity_brand` (inv 9, M:N) | LE = tax/compliance/liability boundary (`medical_director_provider_id`); LE↔brand many-to-many with ownership_percent |
| `jurisdiction` (inv 11) | us_state/federal/province/etc.; regulatory class; controlled-substance authority; 50-state+territory seed |
| `provider_license` (inv 12) + `provider_credentialing` (inv 13) | per-state licensure (multi-state = multiple rows; DEA classes); board-cert/fellowship/credentialing |
| `jurisdiction_admission_rule` (inv 14) | executable gate: patient-state + provider-state + substance-class + prior-relationship required; **read at every booking/Rx/lab RPC; REJECT if unsatisfied** |
| **`patient_continuity_policy`** (inv 5) | per (from_brand, to_brand): continuity_kind + permitted_substrate_shares[] + consent_required + tier-4-attestation; **default = `isolated`** |
| **`federation_permeability_policy`** (inv 7) | per (owning_tenant, other_tenant): permeability_kind + permitted_substrate_kinds[] + consent + Tier-4 attestation; settings-hosted (DL-19); change emits red-severity event |
| **`shared_context_grant` / `visibility_grant` / `care_relationship`** (`REV-157`) | the scoped, consented, time-bound grants other domains reference to project one canonical artifact/observation/assertion/occurrence across operators (custody ≠ visibility); the **owner of these is here** |
| `attribution_line` federation dimension (inv 17) | carries `legal_entity_id` + `brand_id` + `venue_id` for cross-LE revenue attribution (commercial truth = D6) |

## §5 Permeability + cross-operator action (the core mechanism, inv 5-7, 15-16, 20)

**Default `isolated` (DL-10 strict isolation).** A cross-operator action (book/sell/chart-read/Rx/message across brand A→B) resolves: `patient_continuity_policy` + `federation_permeability_policy` → if admitted + consent present (if required) → action proceeds with a **cross-tenant `cns_decision`** marking (source/dest tenant, policy, consent, attestation, alternatives); if denied → REJECT + `cross_brand_action_blocked`. **Single patient identity, many relationships** (inv 4, extends DL-10/Identity): cross-brand discovery/continuity creates a new `patient_relationship` (Identity-owned), gated by Federation grants — operational state never auto-shares on identity match. **Modality switching** (inv 16): jurisdiction + licensure re-evaluated at async→in-person/video transition.

## §6 Invariants / rejection rules (the gems)

1. **Composite tenant_id, never flat** (inv 2) — the 6-tier hierarchy is not collapsed to an opaque namespace.
2. **Single patient per deployment; data crosses only by explicit grant** (inv 4/6) — never duplicate patient per brand; never auto-share operational state on identity match.
3. **Permeability change requires Tier-4 attestation** (inv 7) — legal-entity-owner signature; settings-hosted; red-severity event.
4. **Jurisdiction admission is substrate-enforced, never bypassed for telehealth** (inv 14) — every booking/Rx/lab RPC reads the rule + rejects if unsatisfied.
5. **Per-state provider license rows; no shared cross-state license** (inv 12); modality switch re-checks licensure (inv 16).
6. **Every cross-tenant action emits a decision record** (inv 20) — source/dest/policy/consent/attestation/alternatives.
7. **Topology-aware retention/residency** (inv 21) — stricter-rule-wins across jurisdictions (e.g., CCPA vs HIPAA).
8. **Operator-neutrality — no privileged OMNI tier (`T0-14`/`T0-16(a)`, inv 29):** OMNI-operated operators (Core Capabilities / Specialty Lines) are tenants subject to IDENTICAL permeability/consent/Tier-4/transparency rules; the substrate REJECTS (a) a grant giving an OMNI operator access a peer Brand couldn't get under equivalent consent, (b) discovery/routing/continuity preference for OMNI operators, (c) any deployment/governance-plane bypass of the gates. Any OMNI-operated grant carries an audited `operator_neutrality_basis` on the brand-trust-transparency surface.
9. **Federation gates COMPOSE, not replace** — a cross-brand action needs BOTH federation permeability admission AND the owning domain's authority (RBAC atoms, clinical authority, consent). Federation is necessary, not sufficient.
10. **Specialty is config/seed, not a per-specialty DL** (inv 10) — medspa→derm→plastics→GI→cardio→endocrine→sleep is tenant-configured seed timing, NOT substrate enum values.

## §7 Seams

- **Federation → all domains:** the grant/permeability/jurisdiction substrate that Identity/D5/D6/D7/Observation/CNS/Messaging/Intake READ to gate cross-tenant action (closes the consume-before-owned gap `REV-157`). Per-domain seam contracts authored as each ratifies.
- **`SC-FED-ID-001`** Federation ↔ Identity: `patient_relationship` (Identity) scoped by `shared_context_grant`/`care_relationship` (Federation); reconciles the ladder-v0 (`patient_relationship` scope + RBAC) vs cross-org-deferred (`REV-143`) split.
- **`SC-FED-D7-001`** / **`SC-FED-OBS-001`**: one canonical artifact/observation, many scoped `visibility_grant`s across operators (D7 §6 / Observation §8 reference; Federation owns the grant).
- **Federation ↔ RBAC (DL-18):** cross-brand grant requires both permeability admission AND capability atoms (inv 24).
- **Federation ↔ Settings (DL-19):** `federation_permeability_policy` is settings-hosted + Tier-4-gated (inv 25); Federation defines the shape.
- **Federation ↔ CNS Meta (Network Governance Plane):** CNS Meta enforces over this substrate (it reads topology/grants/operator-neutrality); Federation does not orchestrate.
- **Federation ↔ D3/D5/D6:** venue + jurisdiction-admission read at booking/occurrence/sale; `operator_of_record` dimension on D5 occurrences (D5 §4); cross-LE attribution on D6 (inv 17/23).

## §8 Disposition table

| Prior primitive / source | Disposition | Note |
|---|---|---|
| DL-21 (29 inv) | **compile-into-contract (spine)** | §4-§7; evidence |
| A1 `FUTURE_ARC_2026-05-12_federation_permeability_topology` | **evidence** (promoted to substrate by DL-21) | |
| **`shared_context_grant`/`visibility_grant`/`care_relationship`/break-glass** (consume-before-owned) | **OWN here** (`REV-157` closed-at-this-pass pending ratification) | the headline: the grant layer Identity/D7/Observation/CNS/D5 referenced now has a canonical owner |
| legacy §1U multi-tenant | **superseded by 6-tier topology §4** | evidence |
| patient identity / `patient_relationship` | **Identity owns** (Federation extends with grants) | §3 boundary |
| permeability policy STORAGE/inheritance | **Settings (DL-19) hosts; Federation defines** | inv 25 |
| Q-DL21-1..5 open sub-questions | **carry forward → §9** | MDoR multi-LE · canonical-match tuple · cross-state patient-state-at-action · specialty depth · partner ingestion |
| cross-tenant break-glass / partner-facility ingestion / franchise (Modes 4-6) | **defer (DL-21 future scope matrix)** | Day-0 = Modes 1-3 substrate; Modes 4-6 + break-glass deferred |

## §9 Open items (→ `08`)

- **`REV-157` closure:** this contract canonically owns the grant/visibility/care_relationship/permeability/break-glass primitives — confirm at ratification that Identity §11 / D7 §6 / Observation §8 / CNS §7 / D5 §7 inv 9 re-point to Federation as owner (they currently say "consumed-before-owned").
- Q-DL21-1 medical-director-of-record × multi-LE; Q-DL21-2 patient canonical-match tuple (email+phone+DOB 3-of-3 vs 2-of-3); Q-DL21-3 jurisdiction = patient-state-at-action-time; Q-DL21-4 specialty Day-0 depth (medspa deep + derm shallow); Q-DL21-5 partner-facility reference-vs-ingest.
- Cross-org grant layer vs ladder-v0 (`REV-143`): at v0, cross-operator visibility = `patient_relationship` scope + RBAC; the full cross-org grant substrate (this contract) is the target — sequence the build.
- Build reconciliation: existing `staff_profiles` license fields + `SensitiveAccessReason.cross_state_coverage` + multi-tenant code (DL-21 §24 note) reconciled at Build Reconciliation.

## §10 Evidence sources

`DL-21_federation_topology_DRAFT_2026-05-17.md` (LOCKED; 29 inv + Q-gates + rejected patterns) · `FUTURE_ARC_2026-05-12_federation_permeability_topology.md` (A1) · thesis v2 §7.8 / §7.6 / §6.7-6.8 / §7.5.1 / §13.7 + `T0-14`/`T0-16(a)` · DL-10 (identity/relationship inheritance) · DL-16 amд 43 (actor 4-tuple incl. `clinic`/`third_party_integration`) · DL-18 inv 13-14 (cross-brand permission) · Build Contract §3.7 (jurisdiction/licensure) · hybrid_care_delivery_stress_test (multi-location-federation scenario 5.8) · `lib/auth/capabilities.ts` `SensitiveAccessReason.cross_state_coverage`.
