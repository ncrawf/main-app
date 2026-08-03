# HANDOFF — C4.4: G5 ACCEPTED · ARCHITECTURE/AUTHORABILITY ARC CLOSED · DOWNSTREAM RUNBOOK (live 2026-08-03; filename retains its 2026-07-31 origin)

Document type: `handoff` (operational-state transfer / landing record + live downstream runbook — NOT an architecture essay)
Authority: `analysis_nonbinding` (`GRD-036`). Records a clerical curated landing + the C4.4 closeout; binds nothing; promotes nothing.
Status: `c4_4_G1_G2_MERGED_to_main · agent_runtime_bridge_accepted_bounded · G3_ACCEPTED · G4_KNOX_ADJUDICATED_PASS_30_OF_32 · G5_ACCEPTED_NICK_KNOX · AUTHORABILITY_PASS_6_OF_6 · ENTERPRISE_IMPLEMENTATION_UNPROVEN · C4.4_ARCHITECTURE_AUTHORABILITY_ARC_CLOSED · analysis_nonbinding · not_promoted · analysis_branch_not_merged_wholesale · accepted_artifacts_curated_landed_on_main · outer_checkpoint_#15_repointed_by_2026-08-03_reconciliation` — G1/G2 MERGED to `main` @ `fa98a34` (Knox PASS + Nick, 2026-08-01); G3 §R ACCEPTED (blob `e364acb`) + G4 KNOX-ADJUDICATED PASS 30/32 on `analysis/c4-4-g3-reference-architecture` (not merged). **★ 2026-08-03 UPDATE: C4.4 G5 ACCEPTED (Nick + Knox direct byte verification).** The G5 integrated reference/disposition/downstream-authoring packet is accepted at the architecture/authorability level; the downstream three-angle authorability test ran EXECUTED (**Angle C PASS 6/6**; fresh **Angle A VALID / five reconciliations applied**; fresh **Angle B VALID current-source / B-C01/B-C02 preserved + routed, not flattened**); **NO further A/B/C rerun and NO further C4.4 architecture formulation; enterprise implementation UNPROVEN.** This handoff is now the **live downstream runbook** — see **§0-CLOSEOUT** immediately below (it supersedes the §0-G3 / §0-G3-NEXT test-phase runbooks, which are retained as historical). **★ 2026-08-03 LANDING NOTE (lifecycle — distinguishes the historical C4.4 acceptance transaction from the later curated landing):** the C4.4 acceptance transaction itself left outer checkpoint #15 UNCHANGED and did NOT merge the analysis branch; the subsequent 2026-08-03 pre-spine portfolio reconciliation curated-landed the accepted final C4.4 artifacts onto `main` for DISCOVERABILITY (curated landing ≠ promotion — `analysis_nonbinding` / `not_promoted` preserved, enterprise implementation still UNPROVEN) and repointed read-graph #15 + AGENTS to `HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md`. The analysis/development lineage was NOT merged wholesale — it remains on the C4.4 analysis branches.
Domain(s): architecture_governance, cns_orchestration, ai_substrate, evidence_processing, federation
Lifecycle role: the live next-agent boot packet for C4.4 after the G2 curated landing. Supersedes `v4_C4_4_G2_kickoff_handoff.md` as the C4.4 boot artifact (the kickoff handoff is a consumed historical packet preserved ONLY on the C4.4 analysis branch — it is NOT on `main` and is NOT the live handoff).
Source-of-truth relationship: points to the charter / G1 map / G2 constitution + the Agent-Runtime capture. Does NOT supersede the outer checkpoint (#15).
Supersedes: `v4_C4_4_G2_kickoff_handoff.md` (as the C4.4 boot pointer only; that packet is not landed on `main`)
Superseded by: none
Manifest action: `add_tier2` (catalog row + read-graph `9j` route updated same pass)
Review gate: `user_knox_required`
agent_read_rule: `consult_if_routed`

---

## §0-CLOSEOUT — LIVE TOP-OF-STATE (2026-08-03): C4.4 G5 ACCEPTED · ARC CLOSED · DOWNSTREAM CONSUMER RUNBOOK

> This is the **live** top-of-state for C4.4 and **supersedes §0-G3 and §0-G3-NEXT** (retained below as the historical G3/G4 test-phase runbooks). **C4.4 is CLOSED at the architecture/authorability level. It does NOT prove: enterprise implementation · Palantir parity · production capability · hospital-scale operation · vendor selection · a moat.** Enterprise implementation is UNPROVEN until the F-Self Intelligence-Foundry Pilot + Enterprise Bootstrap Steel Thread proof programs run under Build-Entry/Build-OS.

**Accepted objects (pin by blob, not branch tip):**
- **G3 architecture** blob `e364acbad3352457eb8c761d287e91787ea71eea` (accepted, unchanged).
- **G4 carrier** blob `07f866207836a22c103505835f80aa495a623101` (PASS 30/32; adjudication-close COMMIT `6388d606…`).
- **G5 packet** `.cursor/plans/v4_C4_4_disposition_ledger_and_v4_handoff.md` (ACCEPTED) — **content blob `e215ee0cf1c097fa7fe297ff331dc7826edd6ac0` CONTROLS**; **R5 commit `50983ce864017f411281eef4d71556bcabf8a514`** (tip of `analysis/c4-4-g3-reference-architecture`) records acceptance-state provenance. Later metadata/checkpoint edits do NOT alter the accepted G5 content identity unless this content blob is explicitly superseded. (Commit = provenance; content blob = controlling identity. This pins the separate G5 packet file, so there is no recursive self-stamp loop.) [Pin corrected 2026-08-03 in the pre-spine portfolio reconciliation — supersedes the prior indirect "in Opus's return report / §G5-10 R4 receipt" wording.]
- **Runtime bridge** blob `de5b9a1fc7bf9ff77797d28a53a6fef9ced3ed34` (unchanged).
- **Preserved raw fresh-B enterprise-composition/proof analysis** — branch `analysis/c4-4-g5-three-angle-test-orchestration` · evidence commit `fee90d4685e962f75c571fcebfe2a466987d7c62` · path `.cursor/plans/c4_4_g5_tests/results/re_adjudication/ANGLE_B_FRESH_KNOX_RAW.md` · blob `24ed64d14394fd95df5ff349407cec1b36a683ea` · body sha256 `47bc728b2e4a159301d1186d85b1bda732cae00a5e9e642c84e97cafc71b8521` (+ `KNOX_RE_ADJUDICATION.md` alongside). **An FWREG row alone is INSUFFICIENT preservation — read the raw object.**

**Mandatory consumer routes (each downstream team reads exactly this, then produces exactly that):**

| consumer | READ (accepted G5 packet + fresh-B) | PRODUCE / PRESERVE |
|---|---|---|
| **Spine / C5** | G5 packet I.3A · I.4 · I.9B · I.9C · I.10 | Source Estate C5 · Knowledge Reservoir C5 · retrieval/context/ranking contract · connector/CDC contract · Identity candidate→commit interface · semantic-mapping/configuration boundary · admission-operations model |
| **Runtime / CNS / owning domains** | G5 packet I.3A · I.6 · I.9B #4–#9 · **fresh-B mechanisms 8 · 12 · 15 + §3 two-speed trace + gaps B2-G08 · B2-G12** | preserve the seam: proposal → authority evaluation → action/override → reason/context/versions/time/scope → owner-state commit → immutable S1 decision/run receipt → immediate next S6 draw → later S2 candidate/admission |
| **Task-D** | **fresh-B §1 (18-mechanism matrix) · §5 (permanent boundary map) · §6 (classified gap ledger) · §7 (2030/2035 failure forecast)** + G5 I.8 | decide BUILD / BUY / WRAP / PARTNER / HOST_ON per mechanism · ontology/action/process substrate · connector/CDC/process-observation composition · switching/exit · operating economics · admission capacity · consequence-specific objectives |
| **Build Entry / Build OS / Platform E&V** | **fresh-B §2 (enterprise-bootstrap trace) · §3 (two-speed override trace) · §4A (F-Self EPP) · §4B (Enterprise Bootstrap Steel Thread)** + G5 I.9A | authorize + prove: F-Self Intelligence-Foundry Pilot · Enterprise Bootstrap Steel Thread · failure injection · rail switching · action/override lineage · temporal reconstruction · admission-channel saturation/degraded behavior |
| **C5 (gap closure)** | **fresh-B gap ledger B2-G03 through B2-G13** | close each gap in the owning C5 contract; do not re-open C4.4 architecture |

**Exact proof obligations before any parity/production/moat claim:** the **F-Self Intelligence-Foundry Pilot** and the **Enterprise Bootstrap Steel Thread** must be authorized + executed with measured, consequence-specific targets (no canonized latency/scale number). Until then, enterprise implementation is UNPROVEN.

**Live hard stops (downstream-consumption phase):** NO further A/B/C rerun · NO further C4.4 architecture formulation · no edit to the accepted G3 (`e364acb`) / G4 (`07f8662`) / G5-packet accepted sections / Runtime bridge (`de5b9a1`) · **the specifically authorized 2026-08-03 portfolio reconciliation + curated `main`-landing are COMPLETE — no further control-plane edit (AGENTS / read-graph #15 / checkpoint / controlling-plan banner) or C4.4 landing is authorized without a NEW Nick + Knox transaction** · **no force push** · no promotion · no schema/vendor/service/plane/domain mint · `C44-PROC-01` (unauthorized_analysis_branch_force_update · nonblocking · must_not_recur) recorded, must not recur. `analysis_nonbinding · not_promoted · enterprise implementation UNPROVEN` throughout.

## §0-G3 — HISTORICAL ADDENDUM (test-phase, SUPERSEDED by §0-CLOSEOUT): C4.4 G3 §R ACCEPTED · G4 KNOX-ADJUDICATED = PASS 30/32 (2026-08-01)

> This addendum is the **live** top-of-state for C4.4. The §1–§4 landing record below is preserved as the **historical** G1/G2 landing record (it remains accurate for the pre-G3 transaction). Where they differ on current state, this addendum wins. **The bullets below trace the full G3 lifecycle (authored → amended → cleaned → pushed → accepted), the G4 freeze, and the G4 adjudication; the earliest bullets are historical detail, the acceptance + G4-freeze + G4-adjudication bullets are the live state.**
>
> **★ G4 ADJUDICATED (2026-08-01, 2nd C4.4 transaction after freeze):** the frozen Gemini packet was relayed to a fresh, repo-connected **Gemini** which ran as a read-only white-box adversary against frozen commit `133d2864160c08797abe5716924d9bc14a03061d` (accepted §R substance `e364acb`), made **no repository writes**, and returned a mutation ledger (3 alleged defects M01–M03 + 12 failed mutations F01–F12 + 15-fixture coverage matrix) now preserved **verbatim** in the G4 carrier **§G4-C**. **Knox adjudicated** (§G4-D/E/F): **PASS · 30/32 · K1–K10 NOT triggered.** M01 (retraction-erasure) `REJECTED_FALSE_POSITIVE` (K3/K8 disproven); M02 (secret-policy-by-indexing) formal K6 blocker rejected but core concern `PARTIALLY_ADOPTED_NON_KILL` → the one non-blocking finding **`C44-G4-R01` Ranking/Selection/Exclusion Influence Governance** routed to Context Router/C5, retrieval-index governance, Agent Runtime/`FWREG-010`, spine §§5/7/8, and decision-support surfaces (Gemini's universal "S3 authorization header" cure NOT adopted); M03 (corpus-poisoning) `REJECTED_FALSE_POSITIVE` (K5 disproven — R.13 is not an ingress shortcut; corrections land through R.1). **G3 remains ACCEPTED and frozen — no amendment.** Nothing promoted; NOT merged; #15 UNCHANGED. **Anti-flattening law recorded:** G4/G5 do not supersede or rewrite the accepted G3 architecture; G5 routes by exact pointer + bounded obligation only. **G5 is ELIGIBLE after Knox verifies this adjudication-close; G5 NOT started.**

- **What happened:** Nick + Knox authorized C4.4 G3; a fresh Opus agent authored the reserved technology-neutral **§R reference architecture + plug-point model** (R.0 orientation + R.1–R.17 + §R.CORPUS D7/corpus verdict + §R.FIX F0/F-Self/F-Inv design traces + §20 G3 completion ledger) inside `v4_C4_4_taxonomy_constitution_and_reference_architecture.md`, on top of the accepted G2 constitution (§§1–19 **not reopened**).
- **Branch:** `analysis/c4-4-g3-reference-architecture` (off `origin/main a87d305`, pushed, **NOT merged to `main`**, no force-push).
- **Commit SHA:** `13c3ec5cd14ba0f418038ebcdee1d96da2e112c1` (the G3 authoring commit; this line stamped by the immediately-following state-normalization commit).
- **G2/G3 artifact blob SHA (`…taxonomy_constitution_and_reference_architecture.md`):** `9ecf042fbd0b11423b2b37ee423070ec0950bf2e`.
- **Status:** `analysis_nonbinding` · **pending Nick + Knox G3 review** (NOT self-accepted) · G4 NOT authorized/started (G4 owns the frozen adversary + rubric) · nothing promoted · outer checkpoint #15 + AGENTS UNCHANGED · G1 + the Agent-Runtime bridge (`de5b9a1`) UNCHANGED.
- **Load-bearing G3 verdict (§R.CORPUS):** reuse D7 per-artifact custody physics **subject-agnostically** for the artifact primitive; add a **Source-Estate-owned S1 corpus/package layer ABOVE D7 artifacts** (membership by reference, not copy); corpus completeness/closure + operational/federation admission live in S1; the corpus-parent schema/table shape is deferred to C5. P1 (corpus inside D7) and P2 (new corpus domain) rejected.
- **Files touched on this G3 branch:** the taxonomy/reference-architecture artifact (§R + passport + §0 + §20); the charter status; this handoff; catalog row; read-graph #9j; FWREG-007. Nothing else.
- **★ Knox G3-review amendment pass (2026-08-01):** Knox returned **PASS WITH REQUIRED AMENDMENTS** (direction + P3 verdict accepted; 5 bounded amendment groups). Opus verified all five against the live bytes and applied them (§20.4 amendment matrix): (1) governance control-plane state = committed S3-role, NOT S5 projection [with the divergence: S3-of-governance-domain, not a new "P0 class"]; (2) blob/artifact/receipt/evidence-independence four-identity split; (3) federated revocation split into grant-revoke/withdrawal/lawful-deletion/recipient-local-reconsideration + recipient sovereignty + bidirectional lawful-retention exception + profile A/B; (4) closed-package receipt-closure immutability; (5) live-state normalization + R.17 truth qualifier + named S1 custody-governance commit role. Runtime blob `de5b9a1` NOT touched. **Amendment commit SHA:** `32a7a88671c1ed41bd24bdef2e76c6aee9c99c74` · **amended artifact blob SHA:** `e20c3f3a5d6063aa564761db19ac9e5b85ab560d` *(authoring commit was `13c3ec5`; the amendment commit sits on top).*
- **★ Post-amendment normalization cleanups (2026-08-01):** two microscopic cleanups from Knox's amended-artifact review were applied to the artifact (NOT architecture reopenings): (a) the contradictory live-§0 "This is G2 only" line rewritten to "§§1–19 = closed G2 body; §R + §20 = authored+amended G3 layer"; (b) an inline supersession pointer added at G2 §14 F-Self prose → §R.FIX Amendment-1 (G2 body not rewritten). Knox's linguistic caution folded into the spine-§8 deferral note. See §20.4. **Post-cleanup commit SHA:** `6c86e2edc3935f5f7bad9c628b4e450837712767` · **post-cleanup artifact blob SHA:** `e364acbad3352457eb8c761d287e91787ea71eea` (a SHA-stamp commit sits on top).
- **★ G3 ACCEPTED (2026-08-01):** Knox independently verified the exact pushed remote bytes (branch a clean linear series above `a87d305` changing exactly the six authorized G3 files; `main` = `a87d305`; G1 + AGENTS byte-identical to `main`; Runtime blob `de5b9a1` unchanged; all 5 amendment groups + both cleanups present) and issued ruling **`G3_ACCEPTED`**; Nick issued operator acceptance. **Accepted architecture content blob:** `e364acbad3352457eb8c761d287e91787ea71eea`. Acceptance is within `analysis_nonbinding`: nothing promoted, NOT merged to `main`, outer checkpoint #15 UNCHANGED. Recorded in the artifact's **§20.5 acceptance receipt**.
- **★ G4 fixtures + rubric FROZEN (2026-08-01):** the G4 carrier `v4_C4_4_fixture_suite_and_adversarial_results.md` (blob `2b89a0ffe814c3a173acb075364db943c7bddc1b`) was created + frozen this same transaction — charter §9 full fixture suite (Knox's 12 + F0 + F-Self + F-Inv) each with a frozen baseline pointer to the accepted §R, the Knox 16-dimension rubric verbatim (0/1/2, max 32; PASS 28–32 / PASS_WITH_NAMED_RECONCILIATIONS 24–27 / HOLD <24 or any K1–K10), and reserved §G4-C Gemini / §G4-D Knox-adjudication / §G4-E reconciliations / §G4-F verdict. **Gemini NOT run · G4 NOT executed/scored · G5 NOT started.**
- **Exact next action:** **Knox freeze-verification** of the G4 carrier bytes (blob `2b89a0f`) + the six-file acceptance-close diff → then release the frozen Gemini packet (§0-G3-NEXT + the G4 carrier §G4-G) to a **fresh, repo-connected Gemini (read-only adversary)** → Knox adjudication into §G4-D/E/F → G5. See **§0-G3-NEXT runbook** immediately below.

## §0-G3-NEXT — HISTORICAL G3/G4 test-phase runbook (SUPERSEDED by §0-CLOSEOUT; G5 has since been ACCEPTED — do NOT read the "NEXT" steps below as live)

> **Status (HISTORICAL):** this runbook drove the G3→G4 phase; it is preserved for provenance only. G3 was ACCEPTED, G4 fixtures+rubric FROZEN, Gemini ran read-only, Knox adjudicated PASS 30/32, then **G5 was authored, tested (Angle C PASS 6/6; fresh A/B VALID), and ACCEPTED** — see §0-CLOSEOUT. Every "NEXT / Step 9 / Step 10 / G5 opening" line below is a completed historical step, **not a live instruction.**

**State reality (pin by blobs, not by branch tip):**
| state | ref | contains |
|---|---|---|
| `main` (committed estate) | `a87d305` | G1/G2 landed; **no G3/G4**; nothing promoted |
| review branch (local == remote after push) | `analysis/c4-4-g3-reference-architecture` | accepted G3 §R + acceptance-close + G4 carrier **now populated with Gemini §G4-C + Knox adjudication §G4-D/E/F** |

> **Regress-proof content pins (verify by blob):** accepted **G3 architecture blob `e364acbad3352457eb8c761d287e91787ea71eea`** (unchanged — no amendment) · accepted **Runtime bridge blob `de5b9a1fc7bf9ff77797d28a53a6fef9ced3ed34`** (unchanged) · **frozen-carrier blob at Gemini-run time `2b89a0ffe814c3a173acb075364db943c7bddc1b`** (the object Gemini attacked) · **populated G4 carrier blob (post-adjudication)** = `07f866207836a22c103505835f80aa495a623101` (`v4_C4_4_fixture_suite_and_adversarial_results.md` after §G4-C/D/E/F population — the current content). The adjudication-close commit SHA is in Opus's return report; `main` remains `a87d305`.

**Step 1 — Push G3. ✅ DONE.**  **Step 2 — Knox remote-byte verification of G3. ✅ DONE.**  **Step 3 — Nick + Knox accept G3. ✅ DONE** (§20.5).  **Step 4 — Freeze G4 fixtures + rubric. ✅ DONE** (carrier blob `2b89a0f`).  **Step 5 — Knox freeze-verification. ✅ DONE.**  **Step 6 — Gemini read-only adversary run. ✅ DONE** (frozen commit `133d286`; no repo writes; ledger verbatim in §G4-C).  **Step 7 — Knox adjudicates + scores. ✅ DONE** (§G4-D/E/F: PASS 30/32; K1–K10 not triggered; one non-blocking finding `C44-G4-R01`).

**Step 8 — Record the G4 adjudication (this transaction). ✅ DONE** — §G4-C (Gemini verbatim) + §G4-D/E/F (Knox adjudication, score ledger, `C44-G4-R01` route, verdict + G5 gate + anti-flattening law) populated; six current-state surfaces synced.

**Step 9 — Knox verification of this adjudication-close (NEXT):** verify the populated G4 carrier bytes + the six-file diff match the adjudication; `main`/AGENTS/#15/G1/Runtime/§R unchanged. **Step 10 — Explicit G5 opening (separate later transaction):** G5 disposition/handoff routing `C44-G4-R01` + the exact G3/G4 pointers into Task-D, spine §§5/7/8, C5, Runtime (`FWREG-010`), CNS, Federation, decision-support surfaces (zero unrouted). **Anti-flattening law binds G5: route by exact pointer + bounded obligation; do NOT replace G3 §R with a thinner summary.**

**★ FROZEN Gemini G4 packet — EXECUTED 2026-08-01 (historical record; do NOT re-run — no second Gemini run is warranted per §G4-F).** This was the exact packet relayed to the Gemini adversary that produced §G4-C. Retained for provenance; also reproduced in the G4 carrier §G4-G:
```
AT GEMINI — C4.4 G4 WHITE-BOX ARCHITECTURE ADVERSARY.

Repository: ncrawf/main-app
Target branch: analysis/c4-4-g3-reference-architecture
Target commit: <G4-FREEZE COMMIT — branch tip at freeze; see Opus return report>
Verify by immutable blobs:
  - accepted G3 architecture blob: e364acbad3352457eb8c761d287e91787ea71eea
  - frozen G4 fixture+rubric carrier blob: 2b89a0ffe814c3a173acb075364db943c7bddc1b
  - accepted Runtime bridge blob (unchanged): de5b9a1fc7bf9ff77797d28a53a6fef9ced3ed34

Read the exact repository bytes. Do not review from an operator summary.

Primary object (frozen): .cursor/plans/v4_C4_4_taxonomy_constitution_and_reference_architecture.md (§R + §R.CORPUS + §R.FIX + §20)
Frozen fixtures + rubric: .cursor/plans/v4_C4_4_fixture_suite_and_adversarial_results.md (§G4-A fixtures, §G4-B rubric)

Read order: 1) this handoff  2) charter  3) G1 map (closed)  4) G2 §§1–19 + accepted G3 §R  5) the G4 carrier (§G4-A/§G4-B).
Governing inputs: accepted bounded Agent-Runtime bridge (de5b9a1) · D7 contract · Architecture Memory Control Plane +
  catalog/read-graph · C4.3 correction-continuity law · C4.5 temporal charter · Federation + CNS boundaries.

Role: ADVERSARY, not co-author. Do NOT rewrite the architecture. Do NOT invent schemas, vendors, services,
  domains, planes, reservoir rosters, or product surfaces. No repository writes.

Pressure-test the frozen fixtures (§G4-A: Knox's 12 + F0 + F-Self + F-Inv) against the frozen §R for:
  1. constitutional-class collapse; 2. Source-Estate/corpus god-object; 3. hidden authority transfer to
  Foundry/Router/Runtime/control-plane; 4. blob/artifact/receipt/evidence-independence collapse;
  5. cross-sovereign revocation/correction overreach; 6. false package closure / history rewrite;
  7. privacy/tenant/principal/jurisdiction/Federation leakage; 8. missing Care/Accountability/Time/domain-commit
  consequences; 9. lost uncertainty/partial-failure/lineage; 10. build/buy/wrap language that secretly selects
  architecture by vendor.

For each defect: instantiate a concrete fixture mutation · quote the exact §R sentence that permits it ·
  cite the governing source it contradicts · state the strongest incumbent/pattern alternative ·
  self-classify: blocker_candidate | major_candidate | minor_candidate | no_defect_found ·
  state the smallest correction that closes it.

Leave scoring + verdict to Knox (§G4-B rubric: 16 dimensions × 0/1/2, max 32; PASS 28–32 /
  PASS_WITH_NAMED_RECONCILIATIONS 24–27 / HOLD <24 or any K1–K10). Gemini does NOT self-score.
Return: mutation ledger + evidence only (no scores). No repo writes. No G5. No promotion.
```

**Hard stops that were in force during the (now-completed) G3→G4 test phase — HISTORICAL, SUPERSEDED by the §0-CLOSEOUT live hard stops; NOT live instructions:** G4 is adjudicated — do NOT re-run Gemini · do NOT re-score · do NOT start G5 in this state (G5 opens only on explicit authorization after Knox verifies the adjudication-close) · no merge to `main` · no force-push · no checkpoint-#15 repoint · no AGENTS edit · no runtime-blob edit (`de5b9a1`) · no architecture-body rewrite (frozen object `e364acb`, no amendment) · no schema/vendor/service/Build-OS work · nothing promoted. *(As of 2026-08-03 these phase constraints are historical: G5 was ACCEPTED, and the specifically authorized 2026-08-03 reconciliation curated-landed the accepted estate on `main` + repointed AGENTS/#15 — see §0-CLOSEOUT.)*

## §1 What this transaction did (the curated landing)

A curated, eight-file artifact landing was applied onto `main` via a clean integration branch (`integration/c4-4-g2-curated-landing @ fa98a34`, one commit above `c40630b`), then **fast-forward-merged into `main` @ `fa98a343565e35c4c6aba2aff7f8504e56e028af`** (Knox PASS + Nick authorization, 2026-08-01). It did NOT merge the C4.4 or runtime analysis branches wholesale; it applied only the accepted artifact content + surgical control-plane deltas.

**Landed:**
1. C4.4 Gate-0 charter — `v4_C4_4_knowledge_and_source_estate_formulation_plan.md` (substance preserved; stale stage banner normalized to G1 closed / G2 closed / G3 not started).
2. C4.4 G1 reality map — `v4_C4_4_prior_depth_and_july_2026_reality_map.md` (substance preserved; repository/state language normalized to closed + repository-durable/landed).
3. C4.4 G2 taxonomy constitution + reference architecture — `v4_C4_4_taxonomy_constitution_and_reference_architecture.md` (accepted G2 body preserved verbatim; **§R remains RESERVED / unpopulated**).
4. Agent Runtime & Harness capture — `v4_C4_agent_runtime_and_harness_capture.md` (**exact accepted blob `de5b9a1`**; the prior over-claiming version was replaced).
5. This handoff.
6–8. Control-plane sync — `01_master_corpus_catalog.md`, `04_manifest_read_graph.md`, `future_work_registry.md`.

## §2 Current state (live)

- **C4.4 G1 and G2 are CLOSED** within the nonbinding pre-spine arc, and now repository-durable on `main`.
- **G2 constitution ACCEPTED** within the `analysis_nonbinding` arc (Nick operator + Knox reviewer). Nothing promoted.
- **The Agent-Runtime bridge was accepted ONLY as the C4.4-G2 consumption slice** — the bounded set of runtime-consumption boundaries G2 needed. It is NOT acceptance of the whole Agent Runtime doctrine.
- **The wider Agent Runtime / Harness formulation is OPEN.** `FWREG-010` is OPEN (bounded G2-consumption bridge accepted; full runtime formulation open; runtime BUILD deferred; promotion trigger unchanged).
- **Build OS is separate and UNCHANGED** by this transaction (`09`/`10`/`11` untouched).
- **G3 §R is ACCEPTED (Nick + Knox 2026-08-01; Knox ruling `G3_ACCEPTED`)** (see §0-G3 addendum — supersedes the historical "G3 NOT started / AUTHORED-pending-review" language below). §R is on branch `analysis/c4-4-g3-reference-architecture` (not merged; blob `e364acb`). **G4 fixtures + rubric are FROZEN** (carrier `v4_C4_4_fixture_suite_and_adversarial_results.md`, blob `2b89a0f`); **Gemini NOT run, G4 NOT executed/scored, G5 NOT started.**
- **No checkpoint repoint.** Outer checkpoint #15 + AGENTS UNCHANGED; no controlling-banner change. This is a parallel operator-activated pre-spine input, not a gate move.

## §3 Exact next action

**DONE: the eight-file curated landing is Knox-verified (PASS) and MERGED to `main` via fast-forward @ `fa98a343565e35c4c6aba2aff7f8504e56e028af` (Nick authorization, 2026-08-01), followed by this bounded two-file post-merge state-normalization commit. No further merge decision is pending.**

**★ SUPERSEDED 2026-08-01 (see §0-G3 addendum):** Nick + Knox DID authorize G3, and §R is now AUTHORED on `analysis/c4-4-g3-reference-architecture` (not merged). The ONLY authorized next architecture action is now: **Nick + Knox review C4.4 G3** (the authored §R). Historical pre-G3 text follows:

The ONLY authorized next architecture action is: **Nick + Knox explicitly authorize C4.4 G3.**

- **G3 scope** = populate the reserved technology-neutral **§R reference architecture + plug-point model** over the six G2 constitutional classes/roles (charter §8 G3 row; G2 §R outline R.1–R.17). Technology-neutral; no vendor picks; no schema; no build.
- **NOT next:** the Reservoir-family roster / partition deep dive (that is a spine §8 / later concern, not G3), any Build-OS work, any promotion, any C5 contract/schema/code.
- **After G3 review:** if Nick + Knox accept, G4 (frozen adversary + rubric scoring of F0/F-Self/F-Inv) becomes the next authorizable action; G4 is NOT authorized yet.

## §4 Hard stops carried (HISTORICAL — G1/G2 landing-record + G3/G4 test-phase constraints; SUPERSEDED by the §0-CLOSEOUT live hard stops — NOT live instructions)

No AGENTS edit · no checkpoint #15 change · no controlling-banner change · **no G4 EXECUTION/self-scoring before Knox freeze-verification + Gemini adversary** *(★ 2026-08-01: the "no G3 authoring" and later "no G4 authoring" stops are HISTORICAL — G3 is ACCEPTED and the G4 fixtures+rubric are now FROZEN; the live stop is: G4 is FROZEN-only — Gemini has not run, Opus/Nick do NOT score OMNI, and G5 does not auto-start)* · no merge to `main` · no force-push · no schema/code/services/folders/vendor picks · no Build-OS/Platform/Care/Pharmacy/Task-D/Time/Demand changes · no cross-facet worksheet changes · no promotion. `analysis_nonbinding` throughout.
