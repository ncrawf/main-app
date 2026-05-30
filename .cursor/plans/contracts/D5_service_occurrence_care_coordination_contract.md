# D5 — Service Occurrence / Care Coordination — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain)
Authority: `canonical` for D5 substrate (objects, lifecycle, events, invariants, projections)
Status: `draft_for_ratification` (created 2026-05-30, Foundation vNext; first proof contract; Nick + Knox review gate)
Domain(s): `d5_service_occurrence`, `care_coordination`
Lifecycle role: the TERRITORY for D5 — how the domain actually works
Source-of-truth relationship: distilled from evidence (DL-20 §0 reconciliation + `designs/day_0_scheduling_rule_matrix/05_domain_service_occurrence.md` SO-01..SO-34 + thesis v2 §7.3/§7.5.1). Artifact boundaries per `00_architecture_artifact_index.md`. Decisions of record: `03_decision_extraction_ledger.md` `D0THES-DEC-027/028/029`.
Supersedes: DL-20 as the build-facing D5 artifact (DL-20 → evidence/workbench)
Superseded by: none
Manifest action: `add_tier1` (D5 domain contract; pending catalog row + read-graph route — owed)
Review gate: `user_knox_required`

---

## 1. Purpose

D5 owns the truth of **what actually happened / was actualized** in care and service delivery, and the longitudinal threading of that work. It is the canonical actualized-work layer between *planned* (D3 Scheduling) and the *sibling truths* of commerce (D6) and documentation (D7).

## 2. Governing thesis concepts (the lens; full text in Doctrine / thesis v2)

- **Per-event ownership orthogonality** (§7.5.1): authority/owner dimensions are queryable and do not collapse.
- **Universal projection** (§7.7, `T0-15`): one substrate object, many projections; projection ≠ authority.
- **Candidate ≠ commit** (`D0W3D-GRD-002`): D5 emits candidates into CNS; only the owning domain commits.
- **care_commitment is an accountability OVERLAY** (§7.3), not a parent — relationship landed here; full substrate queued.

## 3. Ownership boundary

**Owns truth for:** `service_occurrence` (canonical parent) · `service_occurrence_work_item` (atomic actualized work) · `service_occurrence_link` (typed lineage edges) · `encounter_view` (derived projection) · `care_episode` (longitudinal thread).

**Does NOT own:** appointment lifecycle (**D3**) · commerce/entitlement/payment/refund (**D6**) · documentation/materialization/legal-record truth (**D7**) · Rx prescribing/fulfillment (Rx domain) · identity (**ID**) · clinical adoption authority (provider/AI domains).

## 4. Canonical objects (names + one-line; fields are normative below)

| Object | One-line |
|---|---|
| `service_occurrence` | canonical parent — a bounded unit of actualized service/care/review work |
| `service_occurrence_work_item` | canonical atomic actualized-work unit under an occurrence |
| `service_occurrence_link` | typed edge for non-tree lineage (`supersedes`/`depends_on`/`follows`/`caused_by`/`references`/`sibling_of`) |
| `encounter_view` | **derived projection** of occurrence(s) for care/charting/UI — two classes: `operational_projection`, `record_materialization` |
| `care_episode` | longitudinal care thread (therapy-lane / series-or-plan / case continuity); `care_episode_id` nullable on occurrence |

**Decomposed axes on `service_occurrence`** (prevent compound-enum drift, SO-02/SO-21): `service_occurrence_kind` (primary classifier: `service_delivery`/`review`/`procedure_step`/`resource_session`/`care_coordination_touch`/`monitoring_check`) · `origin_kind` · `trigger_domain` · `authority_class` (`operational`/`clinical`/`provider_required`/`compliance_required`) · `clinicality_level` (`none`/`adjacent`/`clinical`) · `context_domain` · `modality_path` (JSONB sequence) · chain fields (`root_/parent_occurrence_id`, `chain_id`, `link_reason_code`) · `occurrence_identity_key` (revision-safe dedupe).

## 5. Lifecycle

- `service_occurrence.lifecycle_state`: `created → active → completed | cancelled | superseded | aborted` (SO-07). Illegal transitions rejected.
- **Completion ≠ closure (SO-24):** D5 `completed` is the actualization boundary only — it does NOT imply D6 settlement or D7 documentation/attestation. Unresolved siblings emit reconciliation candidates.
- Supersession is first-class & stale-safe (SO-08): `superseded_at` + `superseded_by_occurrence_id`; stale timers/events no-op on superseded rows (SO-09).

## 6. Events

**Consumes (inbound seams):** `appointment.checked_in` (D3) · `message.escalated_to_provider_review` (CNS/MSG) · `lab.review_required` · `rx.followup_required` · `resource.session_started`. (Async care = occurrence WITHOUT synchronous appointment — SO-32 binding.)

**Emits:** `service_occurrence.create_or_link_decided` · `.lifecycle_transitioned` · `.superseded` · `.work_item_recorded` · `.encounter_view_derived` / `.encounter_view_materialized` · CNS candidates (`occurrence_create_candidate`, `provider_review_occurrence_candidate`, reconciliation candidates).

## 7. Invariants / rejection rules

1. `service_occurrence` is the canonical parent; `encounter_view` is **derived only** — reject any direct canonical write to `encounter_view` (SO-01, guardrail `D0W3A-GRD-003`).
2. `service_occurrence_work_item` is the canonical atomic actualized-work unit; `encounter_line` may exist ONLY as a D7 projection/transitional alias mapped from it — reject dual canonical write (SO-23 / inv 43).
3. D5 stores **references only** to D6/D7 — reject direct commerce/documentation commit from D5 (SO-11).
4. Reject fixed-modality identity typing (e.g., `in_person_encounter` as parent) — modality is an axis, not identity (SO-02).
5. Reject new `service_occurrence_kind` that is a hidden combination of existing axes (SO-21).
6. Patientless occurrence allowed only for approved non-patient-bound contexts (`resource_session`); no auto-conversion to patient-clinical without explicit provenance event (SO-26).
7. Candidate emission ≠ commit; canonical commit only on accepted/applied handshake with resolver decision id (SO-15/SO-27).
8. No hidden one-patient-one-occurrence invariant (Amendment K compatibility; RESOLVED Path A / K(C) minimal) (SO-28).

## 8. Vocabulary lock (frozen — Nick + Knox 2026-05-30)

`service_occurrence` · `service_occurrence_work_item` · `service_occurrence_link` · `encounter_view` · `encounter_line` (D7 projection only) · `care_episode` · `care_commitment` (overlay). **The thesis reconciles TO these names; no rename without Nick + Knox approval.**

## 9. Disposition table (every demoted/moved primitive — the safety mechanism)

| Old primitive / function (from DL-20) | Disposition | New home | Why | What breaks if omitted |
|---|---|---|---|---|
| `encounter_container` (1st-class parent) | **reject** (as identity) | `service_occurrence` (D5) | canonical actualized-work parent is the occurrence; container-as-identity collapses planned/actual + modality into one row | nothing — superseded by occurrence model |
| `encounter` (1st-class substrate) | **demote-to-projection** | `encounter_view` (D5, derived) | universal-projection: one substrate object, many views; charting is a projection, not the truth | charting/record needs a view — provided by `encounter_view` (`record_materialization` class) |
| **`encounter_profile_registry` — IDENTITY function** (visit-kind as parent type) | **reject** | `service_occurrence_kind` axis (D5) | specialty-coded parent identity = leakage + compound-enum drift | nothing — `service_occurrence_kind` + axes carry it |
| **`encounter_profile_registry` — POLICY/CONFIG function** (`policy_axes_required`, `requires_staff/room/resource/capacity/consent/intake/deposit`, `default_duration`, `default_authorship_tier`, `commerce_line_kinds_admitted`) | **split** (preserved, not vaporized) | scheduling requirements → **D3 / DL-15 booking policy**; settings/catalog config → **DL-19 settings**; authorship tier → **DL-18 attestation policy**; commerce line kinds → **D6 / DL-17 policy** | this is real, hard-won policy config — it just isn't *occurrence identity*; it's per-kind workflow policy that belongs to scheduling/settings/authority/commerce | **CRITICAL** — without this split, booking would not know what a visit-kind requires (staff/room/consent/deposit). This is the function that must NOT be lost. (This row directly answers the `encounter_profile_registry` scare: its policy value survives; only its parent-identity role is rejected.) |
| `encounter_line` (1st-class child) | **demote-to-projection** | `encounter_line` as D7 projection of `service_occurrence_work_item` (provisional pending Round 7) | canonical atomic work = work_item; line is a D7 materialized view | D7 read/render needs the projection — preserved as alias |
| `appointment` / `appointment_item` / `appointment_*` substrates (inv 33-34, 38-40, 42) | **move (preserve)** | **D3 Scheduling contract** | planned operational commitment is D3's truth, not D5's — DL-20 conflated D3+D5 | nothing — names + fields preserved verbatim under D3 |
| `care_episode` + `episode_catalog` (inv 1-5) | **clean-into-contract** | D5 (this contract) | longitudinal thread is D5 truth; `care_episode_id` nullable | nothing |
| `care_episode_task` / provider review queue / cadence (inv 16-18) | **queue (care-coordination-CNS)** | dedicated care-coordination + CNS pass | future-care-obligations substrate is bigger than this contract (already parked) | nothing now — preserved as parked design |
| `care_commitment` (thesis §7.3) | **relationship-landed; full substrate queued** | relationship here; full schema/lifecycle/scopes → dedicated pass | accountability overlay; touches CNS/ownership/commerce/artifacts — bigger than D5 | overlay relationship defined (§10); full mechanics deferred with trigger |

## 10. care_episode ↔ care_commitment (relationship)

- `care_episode` = longitudinal thread. `care_commitment` = accountability overlay (who owns the next step, under what authority, by when). A `care_episode` may contain many `care_commitment`s; a `care_commitment` may attach to episode / occurrence / work_item / `encounter_view` / lab / message / intake-finding / CNS-candidate.
- **Accountability threshold:** `care_commitment` instantiates when accountability attaches (maps to `authority_class` + the SO-27 candidate→commit handshake). Pre-accountable inputs (observation/source_event/commerce_order) are context until then.
- **⚠️ Episode terminology (binding):** thesis `care_commitment.scope = "episode"` = a SINGLE service event; D5 `care_episode` = a LONGITUDINAL thread. They are NOT the same. D5 `care_episode` maps to thesis `care_commitment.scope ∈ {therapy-lane, series-or-plan, case}`. Do not map `care_episode → "episode" scope`; do not rename `care_episode`.

## 11. Projections

`encounter_view` (SO-25): `operational_projection` (UI/routing; recomputable) and `record_materialization` (legal/clinical chart; version-pinned, durable; supersession lineage; **never** the canonical D5 work source).

**Sharp D5/D7 boundary (per Knox):** D5 owns the *derivation/projection concept* (`encounter_view` and when it derives). **D7 owns record-grade materialization / attestation / legal-documentation truth.** The `record_materialization` class is *produced under* D5 derivation but its canonical legal-record truth is **D7-owned** — this boundary is nailed in seam `SC-D5-D7-001` (OPEN, Round 7 never ran).

## 12. Open seams (registry rows owed in `08_open_review_queue.md`)

| seam | owner | trigger to resolve | blocks | can still proceed |
|---|---|---|---|---|
| D5 → D6 commerce (`SC-D5-D6-001`) | architecture steward + Nick | before checkout/settlement build slice | commerce settlement linked to work-items | D5 occurrence + work-item modeling |
| D5 → D7 documentation/materialization (`SC-D5-D7-001`) | architecture steward + Nick | before chart-signing build slice | `encounter_line` permanence; record-grade chart | D5 occurrence modeling; `encounter_view` operational class |
| full `care_commitment` substrate (thesis §7.3) | architecture steward + Nick | dedicated care_commitment pass | accountability lifecycle/ownership-dimension build | care_episode + overlay relationship |

## 13. Evidence sources

`DL-20_care_coordination_DRAFT_2026-05-17.md` (§0 reconciliation + body, now evidence) · `designs/day_0_scheduling_rule_matrix/05_domain_service_occurrence.md` (SO-01..SO-34) + `05_3_round5_closure_verdict.md` · `omni_thesis_v2_2026-05-26.md` §7.3/§7.5.1/§7.7 · decisions `D0THES-DEC-027/028/029`.
