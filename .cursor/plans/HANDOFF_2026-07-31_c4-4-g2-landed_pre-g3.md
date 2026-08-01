# HANDOFF — C4.4: G1/G2 landed on `main`, G3 §R ACCEPTED, G4 fixtures+rubric FROZEN (live 2026-08-01; filename retains its 2026-07-31 origin)

Document type: `handoff` (operational-state transfer / landing record — NOT an architecture essay)
Authority: `analysis_nonbinding` (`GRD-036`). Records a clerical curated landing; binds nothing; promotes nothing.
Status: `c4_4_G1_G2_MERGED_to_main · agent_runtime_bridge_accepted_bounded · G3_reference_architecture_ACCEPTED_Nick_Knox · G4_fixtures_and_rubric_FROZEN · Gemini_not_started · analysis_nonbinding · not_promoted · outer_checkpoint_UNCHANGED` — G1/G2 MERGED to `main` @ `fa98a34` (Knox PASS + Nick, 2026-08-01). **★ 2026-08-01 UPDATE: C4.4 G3 §R reference architecture ACCEPTED (Nick operator acceptance + Knox independent remote-byte verification, ruling `G3_ACCEPTED`) on branch `analysis/c4-4-g3-reference-architecture` off `origin/main a87d305`, NOT merged, nothing promoted; accepted architecture content blob `e364acb`. G4 now OPENED for FREEZE/PREPARATION only — the fixture suite + Knox rubric are FROZEN in the new G4 carrier `v4_C4_4_fixture_suite_and_adversarial_results.md` (blob `2b89a0f`); Gemini adversary NOT run, G4 NOT executed/scored, G5 NOT started. Next sequence = Knox freeze-verification → fresh repo-connected Gemini adversary (read-only) → Knox adjudication → G5. See §0-G3-NEXT runbook + the frozen Gemini packet.**
Domain(s): architecture_governance, cns_orchestration, ai_substrate, evidence_processing, federation
Lifecycle role: the live next-agent boot packet for C4.4 after the G2 curated landing. Supersedes `v4_C4_4_G2_kickoff_handoff.md` as the C4.4 boot artifact (the kickoff handoff is a consumed historical packet preserved ONLY on the C4.4 analysis branch — it is NOT on `main` and is NOT the live handoff).
Source-of-truth relationship: points to the charter / G1 map / G2 constitution + the Agent-Runtime capture. Does NOT supersede the outer checkpoint (#15).
Supersedes: `v4_C4_4_G2_kickoff_handoff.md` (as the C4.4 boot pointer only; that packet is not landed on `main`)
Superseded by: none
Manifest action: `add_tier2` (catalog row + read-graph `9j` route updated same pass)
Review gate: `user_knox_required`
agent_read_rule: `consult_if_routed`

---

## §0-G3 — LIVE ADDENDUM: C4.4 G3 §R ACCEPTED · G4 fixtures+rubric FROZEN (2026-08-01)

> This addendum is the **live** top-of-state for C4.4. The §1–§4 landing record below is preserved as the **historical** G1/G2 landing record (it remains accurate for the pre-G3 transaction). Where they differ on current state, this addendum wins. **The bullets below trace the full G3 lifecycle (authored → amended → cleaned → pushed → accepted) and the G4 freeze; the earliest bullets are historical detail, the acceptance + G4-freeze bullets are the live state.**

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

## §0-G3-NEXT — Next-agent runbook (2026-08-01): G3 ACCEPTED ✅ · G4 FROZEN ✅ → Knox freeze-verify → Gemini → Knox adjudicate → G5

> **Status:** G3 is **ACCEPTED** and the G4 fixtures+rubric are **FROZEN** (this transaction). The live next step is **Step 5 (Knox freeze-verification)**, then release the frozen Gemini packet.

**State reality (pin by blobs, not by branch tip):**
| state | ref | contains |
|---|---|---|
| `main` (committed estate) | `a87d305` | G1/G2 landed; **no G3/G4**; nothing promoted |
| review branch (local == remote after push) | `analysis/c4-4-g3-reference-architecture` | accepted G3 §R + this acceptance-close + frozen G4 carrier |

> **Regress-proof content pins (verify by blob):** accepted **G3 architecture blob `e364acbad3352457eb8c761d287e91787ea71eea`** · frozen **G4 carrier blob `2b89a0ffe814c3a173acb075364db943c7bddc1b`** (`v4_C4_4_fixture_suite_and_adversarial_results.md`) · accepted **Runtime bridge blob `de5b9a1fc7bf9ff77797d28a53a6fef9ced3ed34`** (unchanged). The literal branch tip may carry docs/status stamps above these; the pinned blobs are the authoritative content. The G4-freeze commit SHA is in Opus's return report; `main` remains `a87d305`.

**Step 1 — Push G3. ✅ DONE.**  **Step 2 — Knox remote-byte verification of G3. ✅ DONE.**  **Step 3 — Nick + Knox accept G3. ✅ DONE** (ruling `G3_ACCEPTED`; §20.5).  **Step 4 — Freeze G4 fixtures + rubric. ✅ DONE this transaction** (carrier `v4_C4_4_fixture_suite_and_adversarial_results.md`, blob `2b89a0f`; §G4-A fixtures + §G4-B rubric; §G4-C..F reserved).

**Step 5 — Knox freeze-verification (NEXT):** verify the frozen G4 carrier bytes (blob `2b89a0f`) — all 15 fixtures present at full charter-§9 depth with baseline pointers; the 16-dimension rubric + bands + K1–K10 verbatim; §G4-C..F reserved/empty; and the acceptance-close six-file diff + new-artifact row. `main`/AGENTS/#15/G1/Runtime unchanged.

**Step 6 — Release the frozen Gemini packet** (below + G4 carrier §G4-G) to a **fresh, repo-connected Gemini** as a **read-only white-box adversary**. Gemini supplies mutations + evidence; **Gemini does NOT self-score**.

**Step 7 — Knox adjudicates + scores** into §G4-D/E/F (16-dimension rubric, K1–K10, band). **Step 8 — G5 disposition/handoff** into Task-D, spine §§7–8, C5, Runtime (`FWREG-010`), CNS, Federation, and other named owners (zero unrouted).

**★ FROZEN Gemini G4 packet (SUPERSEDES the earlier pre-freeze template — that one pointed only at §R and lacked the frozen G4 carrier + rubric; do NOT use it). This is the release-ready packet; it is reproduced identically in the G4 carrier §G4-G:**
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

**Live hard stops for the next agent:** no Gemini execution before Knox freeze-verification + release · no G4 self-scoring (Opus/Nick do not score OMNI) · no G5 · no merge to `main` · no force-push · no checkpoint-#15 repoint · no AGENTS edit · no runtime-blob edit (`de5b9a1`) · no architecture-body rewrite (frozen object `e364acb`) · no schema/vendor/service/Build-OS work · nothing promoted.

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

## §4 Hard stops carried

No AGENTS edit · no checkpoint #15 change · no controlling-banner change · **no G4 EXECUTION/self-scoring before Knox freeze-verification + Gemini adversary** *(★ 2026-08-01: the "no G3 authoring" and later "no G4 authoring" stops are HISTORICAL — G3 is ACCEPTED and the G4 fixtures+rubric are now FROZEN; the live stop is: G4 is FROZEN-only — Gemini has not run, Opus/Nick do NOT score OMNI, and G5 does not auto-start)* · no merge to `main` · no force-push · no schema/code/services/folders/vendor picks · no Build-OS/Platform/Care/Pharmacy/Task-D/Time/Demand changes · no cross-facet worksheet changes · no promotion. `analysis_nonbinding` throughout.
