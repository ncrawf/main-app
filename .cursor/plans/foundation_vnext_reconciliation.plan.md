# Foundation vNext Reconciliation Plan

Document type: `plan` (operative roadmap for the Foundation vNext reconciliation program)
Authority: `governance_binding` execution plan — the single source for *what we are doing, in what order, by what method, and what the status is*. Does not own schemas (those live in the artifacts it routes to).
Status: `active` (created 2026-05-30; **living document — status tracker updated at each domain checkpoint**)
Domain(s): `architecture_governance`, `build_os`
Lifecycle role: operative roadmap for the domain-by-domain reconciliation into clean canonical vNext artifacts
Source-of-truth relationship: the operative roadmap. **Supersedes-in-approach** the pre-pivot Phase G sequencing in `omni_doctrine_reconciliation_map_v1_2026-05-25.md` (§20 Phase G G.1–G.6 "patch the DLs") and the off-repo `omni_doctrine_refresh_23fb24b1.plan.md` — their audit findings + decisions remain valid **evidence**, but the execution approach is now this plan. Method/boundaries per `00_architecture_artifact_index.md`.
Supersedes: pre-pivot Phase G execution sequencing (approach only; findings retained as evidence)
Superseded by: none
Manifest action: `add_tier1` (workstream-mandatory: read FIRST for Foundation vNext reconciliation work — NOT universal Tier 0 for every OMNI task)
Review gate: `user_knox_required`

---

## 0. Why this exists — and why we abandoned the old map

The Foundation vNext pivot (2026-05-30, handoff `HANDOFF_2026-05-30_foundation_vnext_pivot.md`) changed the approach from "patch stale DLs in place (Phase G)" to "produce clean canonical vNext artifacts, domain-by-domain, old docs → evidence."

**Why the old map was abandoned (preserve this rationale):** the legacy `system_map_three_layers_60706286.plan.md` had become a ~5k-line dumping ground (map + history + features + open-debt + UX), violating OMNI's own single-source-of-truth discipline. Worse, reconciling *in place* (a controlling `§0` header bolted over a still-stale body — the DL-20 Frankenstein) produced artifacts future agents misread as binding. The fix is **clean vNext artifacts + the reconciliation discipline in §1.5 + old docs demoted to evidence** — explicitly NOT a rewrite-from-scratch and NOT abandoning prior work. This was a hard-won course (≈2-hour pivot arc on 2026-05-30); §1.5 is the discipline that course produced.

This plan is the **guide document** so the rationale + ordered sequence + method + discipline + status do **not** live in chat memory. **Read this (and §1.5) first before any domain pass.**

## 1. The approach (one paragraph)

Foundation-first. For each domain: inventory its evidence → distill a clean **Domain Contract** → define its **seam contracts** → record a **disposition table** for every old primitive → route decisions/open-seams to their canonical homes → checkpoint, then stop. The System Map stays a *map*; detail lives in contracts; old docs (DLs, designs, audits, reconciliation map) are **evidence/starting-corpus**, never the build-facing artifact. Thesis v2 = pinned governing lens (meaning); freshest substrate = mechanics; conflicts stop for Nick + Knox. Full artifact taxonomy + the 3 binding rules: `00_architecture_artifact_index.md`.

## 1.5 Reconciliation hierarchy + preservation rule (the hard-won discipline — DO NOT SKIP)

**This is the point of the whole pivot. A domain pass that ignores this section reproduces the exact drift the pivot was meant to stop.** "Make clean new docs" is NOT a license to rewrite from vibes or to silently drop prior work. This discipline is enforced at boot by guardrails `D0THES-GRD-022` (freshest-authority check), `D0THES-GRD-023` (three-layer reconciliation), `D0THES-GRD-024` (no Frankenstein-in-place), and the Artifact Index disposition-on-demotion rule — **this section is their plan-level statement, and every domain pass applies it.**

**The three layers every domain pass reconciles (none is automatically supreme):**
1. **Thesis v2 = governing lens / meaning / constitutional direction** (pinned; cite canonical homes for binding claims per v2 §16). Governs *what the system must mean*; does NOT by itself dictate low-level mechanics or rename hard-won substrate vocabulary.
2. **Freshest deep substrate work = mechanical evidence** (rule-matrix rounds, design docs, build state, ADRs) — usually the controlling authority for object/lifecycle/field detail. Run the freshest-authority check (GRD-022) against the **freshest** layer, never a presumed-hard-won-but-stale one (that was the DL-20 trap).
3. **Legacy doctrine / system map / DLs / designs / audits = evidence / starting corpus (candidate container)** — dispositioned, never blindly copied OR ignored.

**Preservation rule (disposition-or-it-doesn't-move):** a clean vNext contract supersedes an old artifact only after **every material prior primitive/function** is `preserve | rename | split | move | demote-to-projection | reject | queue` in the contract's disposition table — each with new-home + why + what-breaks-if-omitted. No primitive disappears silently. (This is the rule whose absence caused the `encounter_profile_registry` scare.)

**Conflict rule (stop-and-surface):** if Thesis v2 and the freshest substrate conflict, do NOT choose by elegance or freshness alone. **Stop and surface to Nick + Knox**, unless the supersession test passes — the newer framing (a) preserves the cases the old model solved, (b) explains additional cases, (c) improves enforceability (fields/invariants/rejection rules), and (d) does not collapse hard-won distinctions (planned/actual · clinical/commerce · doc/authority · source/adoption · projection/truth). Classify **per-claim, not per-primitive**.

**How we know future-us sticks to this:** it lives in three reinforcing places — (i) this read-first plan (§1.5), (ii) the Tier 0.5 boot-visible guardrails `D0THES-GRD-022/023/024` (every agent sees them at boot), and (iii) the per-domain method below (step 0.5). A pass cannot legitimately proceed without it.

## 2. Per-domain method (the repeatable pass)

**Step 0.5 (every pass, not optional): apply §1.5** — reconcile the three layers; disposition every prior primitive; stop-and-surface on thesis↔substrate conflict.

Per the Artifact Index "Domain pass output contract" + "domain-pass mandatory pull":

1. **Inventory + pull evidence** (mandatory, cite in contract §Evidence): relevant DL(s); `designs/` + `audits/` pressure-test/scenario corpora by domain tag; `omni_field_cases.md` `FIELD-*` by domain tag; open-review rows (`08`) by domain tag.
2. **(If on a multi-round superseding arc)** produce a Freshest-Authority Check first (per `D0THES-GRD-022/023`) — e.g., DL-20 needed it; most domains won't.
3. **Draft the clean Domain Contract** (`contracts/<domain>_contract.md`): objects · lifecycle · events · invariants/rejection-rules · vocabulary lock · **disposition table** · projections · open seams · evidence sources.
4. **Seam contracts** (`contracts/seams/<seam_id>_*.md`) for the domain's outward edges.
5. **Route**: decisions → `03`; open seams → `08` (owner+trigger+blocks+can-proceed); supersession → `05`; new field cases → `omni_field_cases.md`.
6. **System Map vNext**: fill the domain's entry (map-level only) + register its seams.
7. **Conformance**: catalog row (`01`) + read-graph route (`04`).
8. **Checkpoint + stop** (commit at work-package boundaries; no auto-continue).

## 3. Ordered domain sequence + status

Rationale for order: foundation dependencies first (who/what is acted on → how it's planned/actualized → coordination → channels → inputs → outputs → cross-cutting). D5 went first as the **process-proof / pain-tax** domain (the DL-20 mess was already exposed there); from here the dependency order applies.

| # | Domain | Contract | Status | Notes / prereqs |
|---|---|---|---|---|
| — | **Foundation scaffolding** | Artifact Index · System Map vNext · Thesis v2 pinned | ✅ done | `00_architecture_artifact_index.md`, `OMNI_System_Map_vNext.md` |
| 1 | **D5 Service Occurrence / Care Coordination** | `contracts/D5_service_occurrence_care_coordination_contract.md` | ◑ **proof contract drafted; NOT done-done** — ratification pending + open seams remain | process-proof / pain-tax domain; seam `SC-D3-D5-001` done; DL-20 → evidence. **Open:** D5→D6 (`REV-139`), D5→D7 (`REV-140`), full `care_commitment` (`REV-141`), Alec loop (`REV-142`). Ratify + close these before D5 is "complete." |
| 2 | **Identity / Patient / Contact / Actor** | `contracts/identity_contract.md` | ◑ **contract drafted (ratify-pending)** | DL-10 four-layer model cleaned-in; seam `SC-ID-PT-001`; ladder-v0 spine; **open:** cross-org federation (`REV-143`), patient_relationship substrate migration (`REV-144`), §1J.10 Rx blocker (`REV-145`) |
| 3 | **D3 Scheduling / Appointment** | `contracts/D3_scheduling_appointment_contract.md` | ◑ **contract drafted; ratify-pending** | = booking composer + appointment lifecycle + confirmation (rule-matrix D2/D3/D4); DL-15 1-35 + DL-20 appt substrate; off-main code classified (port shape, supersede enum, no merge); **open:** rule-matrix closure (`REV-146`), D1→Settings seam (`REV-147`), branch disposition manifest (`REV-148`), D3→D6 fees seam (`REV-139`) |
| 4 | **CNS / Orchestration** | `contracts/CNS_orchestration_contract.md` | ◑ **contract drafted; ratify-pending** | thesis §7.6 3-scope model (Operator/Coherence/Meta; 4 operator types) over DL-14/16/ADR spine; LI doctrine = Patient-CNS coherence (recovered evidence/limited-use, re-verify); anti-collapse + over-domain-contracts; §A recovered; **open:** §B trace-lineage build-task (`REV-148`), rules/templates scope (`REV-149`), LI re-verification |
| 5 | **Messaging / Communications** | `contracts/messaging_contract.md` | ▶ **NEXT** | communications_topology + external-line; `D0W3B-GRD-001` external-line-collapse; CNS seam (messaging→CNS, CNS→outbound) |
| 6 | **Intake / Patient-Source** | `contracts/intake_contract.md` | ⏳ | intake construction + clinical-assertion designs + intake audits; §7.5.3 patient-source |
| 7 | **D7 Documents / Consent / Media** | `contracts/D7_documents_consent_media_contract.md` | ⏳ OPEN (Round 7 never ran) | DL-22 + `SC-D5-D7-001` |
| 8 | **D6 Commerce / Entitlement / Payment** | `contracts/D6_commerce_contract.md` | ⏳ OPEN (Round 6 never ran) | DL-17 + `SC-D5-D6-001` |
| 9 | **RBAC / Authority / Attestation** | `contracts/rbac_authority_contract.md` | ⏳ | DL-18 LOCKED (likely clean-into-contract) |
| 10 | **Settings / Catalog / Registry** | `contracts/settings_catalog_contract.md` | ⏳ | DL-19 LOCKED |
| 11 | **Federation / Operator / Tenant** | `contracts/federation_contract.md` | ⏳ | DL-21 LOCKED |
| 12 | **AI / Model Lineage / Clinical Adoption** | `contracts/ai_model_lineage_contract.md` | ⏳ | §9.1 model_version_of_record + §12.8 |

**Cross-cutting solve-obligations** that must be satisfied across multiple of the above: `D0THES-REV-142` (Alec-Harris longitudinal-signal loop → CNS/Intake/Messaging/LI/care_commitment/AI/Labs); full `care_commitment` substrate (`D0THES-REV-141`).

## 4. Checkpoint / commit discipline

- One domain per pass; **stop after each** (no auto-continue) for Nick + Knox review.
- Commit at each work-package boundary (per Agent Work Protocol §8; default-up tier).
- Update this plan's §3 status tracker + the System Map entry at each checkpoint.

## 5. This plan's own maintenance contract

- **Update trigger:** at every domain checkpoint — flip the domain's status, link its contract, advance the ▶ NEXT pointer.
- **What belongs:** approach, ordered sequence, per-domain method, status. **Not** domain detail (→ contracts), decisions (→ `03`), evidence (→ designs/audits/field-cases).
- **Authority:** governance_binding for *sequencing/method*; schemas live elsewhere.

## 6. Pointers

Artifact taxonomy + rules: `00_architecture_artifact_index.md` · Map: `OMNI_System_Map_vNext.md` · Current checkpoint: `HANDOFF_2026-05-30_foundation_vnext_pivot.md` · Pre-pivot audit evidence: `omni_doctrine_reconciliation_map_v1_2026-05-25.md` · Guardrails: `06_guardrail_antipattern_digest.md` (esp. `D0THES-GRD-022/023/024`) · Thesis: `omni_thesis_v2_2026-05-26.md` (pinned lens).

## 7. Owed

Tier-3 narrative volume for the Foundation vNext pivot arc (per handoff §6).
