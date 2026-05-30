# HANDOFF 2026-05-30 — Foundation vNext Pivot (CURRENT CHECKPOINT)

Document type: `handoff_or_readiness_gate`
Authority: `derived_nonbinding` operational state transfer (canonical destinations win on conflict)
Status: `active` (current checkpoint; supersedes `HANDOFF_2026-05-23_post_tier0_activation_pre_omni_thesis_refinement.md` as the operational current-checkpoint pointer)
Domain(s): `architecture_governance`
Lifecycle role: continuity artifact for the Foundation vNext pivot
Source-of-truth relationship: non-binding; cites canonical homes. Read-graph Tier 0 Universal Path #15 updated to point here.
Supersedes: operational current-checkpoint role of `HANDOFF_2026-05-23_...` (that file remains valid historical/arc reference, esp. its Extension #33)
Superseded by: next Tier 2+ checkpoint
Manifest action: `add_tier2`
Review gate: `architecture_steward_required`

---

## 0. Read this first

This session executed a **process pivot**, not just domain work. Operating the trifecta (Opus produces → Nick relays → Knox [ChatGPT reviewer] reviews → Nick relays → refine). Per `operator_context_and_collaboration_model.md`: full technical fidelity; evaluate Knox on merits; push back when wrong.

**The pivot in one sentence:** stop *patching stale docs in place* (which produced the DL-20 "Frankenstein"); instead **produce clean canonical vNext artifacts and demote old docs to evidence** — using the architecture OS OMNI already has, made enforceable/legible/clean, not a new OS.

## 1. What changed this session (the arc)

1. **DL-20 reconciliation (then superseded by pivot).** DL-20 was three-layer reconciled per `D0THES-GRD-022/023`: a controlling `§0` header + frozen vocabulary lock + in-place supersession markers on the whole body (`encounter_container`/`encounter_profile_registry`/first-class `encounter`/`encounter_line`-as-canonical all marked superseded → `service_occurrence` canonical). This proved the freshest-authority model BUT produced a Frankenstein (clean §0 over a stale body). Nick + Knox correctly judged it **not lock-ready as an artifact**.
2. **Process diagnosis.** The disease was the **medium**: trying to make one file be constitution + history + ADR + contract + reconciliation workspace = always a monster; and 10 weeks of architecture with no shipped product + unbounded reconciliation. Product-slice-first was proposed (Opus) and rejected (already-siloed system, not greenfield); integration-map-first proposed (Knox) and rejected (another semi-lite intermediate). **Landing: foundation-first, clean canonical vNext, domain-by-domain, old docs → evidence.**
3. **Key realization:** OMNI already HAS the artifact OS (doctrine, decision ledger, open-review queue, guardrails, evidence ledger, future-work registry, Build OS, catalog, read graph). The only non-conformant artifacts were the **bloated System Map** and the **DLs reconciled in-place**. Fix = bring those into conformance + add the missing **seam/event contract** type. Do NOT fork governance into a parallel `/docs/architecture` universe (would violate `D0TIER0-GRD-004`).

## 2. Artifacts produced (clean; conformance-closed)

| Artifact | Role | Status |
|---|---|---|
| `.cursor/plans/doctrine/00_architecture_artifact_index.md` | **Artifact Index** — what each artifact holds, what's forbidden in each, seam-contract spec, DL-disposition rule, disposition-on-demotion rule. Ratifies existing homes; does not fork governance. | active; Tier 0.5 boot-visible |
| `.cursor/plans/OMNI_System_Map_vNext.md` | **System Map vNext** = the MAP only (domains / ownership / does-not-own / canonical object names / inputs-outputs / adjacency / contract links / seam registry). NO fields/lifecycles/debt/UX/history. | active_skeleton; D5 entry filled, 11 domains stubbed |
| `.cursor/plans/contracts/D5_service_occurrence_care_coordination_contract.md` | **D5 Domain Contract** (first proof) — clean territory distilled from DL-20 §0 + service_occurrence rules + thesis §7.3. Includes disposition table. | draft_for_ratification |
| `.cursor/plans/contracts/seams/SC-D3-D5-001_appointment_checked_in__to__service_occurrence.md` | **Seam Contract** (first proof of the type) — D3→D5 glue. | draft_for_ratification |

## 3. Settled decisions — do NOT re-litigate

- **Foundation-first, not product-slice, not integration-map.** (Nick, explicit.)
- **Artifact taxonomy:** System Map = map; Domain Contracts = detail (the DLs as *starting corpus*, dispositioned per-domain: preserve/clean/split/merge/supersede/evidence — NOT auto-final); Seam Contracts = cross-domain glue (canonical, durable boundaries only); decisions → `03`; open → `08`; evidence → `07` + Frankenstein passes; doctrine = constitutional only.
- **Disposition-on-demotion rule (constitutional):** every demoted/renamed/split primitive needs `old → disposition → new home → why → what breaks if omitted`. (This is the rule whose absence caused the `encounter_profile_registry` scare. In D5 it's answered: identity role rejected → `service_occurrence_kind`; policy/config role preserved → split to DL-15/DL-19/DL-18/DL-17.)
- **`service_occurrence` canonical D5 parent; `encounter_view` derived; `encounter_line` D7 transitional; `care_episode` longitudinal nullable; `care_commitment` accountability overlay (relationship only, full substrate queued); D6/D7 OPEN.** Frozen vocabulary — thesis reconciles TO it; no rename without Nick + Knox.
- **`encounter_participant` 3rd FK = `service_occurrence_id`** (ratified; not `encounter_view_id` — no canonical FK to a derived view).
- **Episode terminology (binding):** thesis `care_commitment.scope = "episode"` (single event) ≠ D5 `care_episode` (longitudinal). Do not conflate or rename.
- **Thesis v2 is the pinned governing lens for this pass** (sturdy, not moving). Governs meaning; substrate governs mechanics; stop-and-surface on conflict.
- **DL-20 is now evidence/workbench** (top banner added). Build from the D5 contract, not DL-20.
- **Legacy `system_map_three_layers_60706286.plan.md` stays Tier 0 Universal Path #13** until System Map vNext is populated across domains (avoids ripping out the only populated source for 11 domains). Both coexist during transition.

## 4. Conformance closure done this session (the new process is real)

- `01_master_corpus_catalog.md` — 4 rows added (`wave_11_foundation_vnext`).
- `04_manifest_read_graph.md` — Artifact Index → Tier 0.5 boot-visible (item 2); new "Foundation vNext Artifacts (transitional)" routing section; **Tier 0 Universal Path #15 repointed to this handoff**.
- `08_open_review_queue.md` — 3 open-decision rows with hardened lifecycle fields: `D0THES-REV-139` (D5→D6 commerce seam), `D0THES-REV-140` (D5→D7 documentation seam), `D0THES-REV-141` (full `care_commitment` substrate).

## 5. How this reframes the prior queue (Extension #33)

Extension #33's queue was: DL-20 rewrite → DL-22 → DL-17 → messaging/intake/CNS freshness maps → G.3-G.6. **The pivot reframes it:** DL-20 is reconciled-and-demoted-to-evidence (its content lives in the D5 contract). Do NOT continue "patch DL-22 / DL-17 / patch 20 docs." Instead, **process each domain into a clean vNext contract** (DLs become evidence/starting-corpus). DL-22 (clinical media) and DL-17 (commerce) get dispositioned during their domain passes (D7 documents/media; D6 commerce). The messaging/intake/CNS freshness maps become their domain-contract passes.

## 6. Unresolved / owed

- **Tier-3 preservation owed (this stop scoped by Nick to the handoff):** a **narrative volume** (`docs/architecture/evolution_narrative_volume_5_*.md`) for the Foundation vNext pivot arc, and a **guardrail row** in `06_guardrail_antipattern_digest.md` capturing the timeless lesson — *"reconcile in a clean vNext output artifact; never patch the stale doc in place as the final artifact (Frankenstein-in-place anti-pattern)."* Recommend the guardrail row as the next preservation step (boot-visible anti-recurrence). Owner: architecture_steward + Nick.
- **Git:** working tree has uncommitted changes from this session (Nick has not requested a commit).
- **CNS prerequisite (unchanged):** LI doctrine off-main on parking branch `d753a64` (`D0THES-CNF-010`) — recover before the CNS domain pass.
- Open seams: `D0THES-REV-139/140/141` (see `08`).

## 6.5 Operative roadmap (READ FIRST)

The ordered domain sequence + per-domain method + live status tracker live in **`.cursor/plans/foundation_vnext_reconciliation.plan.md`** (created 2026-05-30). That plan — not chat memory — is what the next agent works off of for the domain passes. It supersedes-in-approach the pre-pivot Phase G sequencing (reconciliation map §20).

## 7. Next gate + stop condition

- **Next domain pass: Identity / Patient / Contact / Actor** (everything downstream — CNS/messaging/intake — depends on who/what is acted on). Same output contract per `00_architecture_artifact_index.md` "Domain pass output contract": System Map entry → Identity domain contract (existing identity substrate work as evidence) → decisions/ADR → open seams → seam contracts (e.g., `identity → patient/account linking`) → disposition table. Then STOP.
- **Stop condition for this handoff:** superseded when the next domain pass (Identity) completes its checkpoint, OR when the Tier-3 narrative/guardrail preservation lands.

## 8. Source-of-truth load order

Tier 0 Universal Path (incl. THIS handoff at #15) → Tier 0.5 (guardrail digest + **Artifact Index**) → `00_architecture_artifact_index.md` (artifact boundaries) → `OMNI_System_Map_vNext.md` (map) → `contracts/` (domain + seam contracts) → DLs + reconciliation map + DL-20 §0 as **evidence**. Thesis v2 = pinned governing lens.
