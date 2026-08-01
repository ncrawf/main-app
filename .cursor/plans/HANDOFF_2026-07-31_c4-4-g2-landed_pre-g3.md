# HANDOFF — C4.4 G1/G2 LANDED on `main`; pre-G3 (2026-07-31)

Document type: `handoff` (operational-state transfer / landing record — NOT an architecture essay)
Authority: `analysis_nonbinding` (`GRD-036`). Records a clerical curated landing; binds nothing; promotes nothing.
Status: `c4_4_G1_G2_MERGED_to_main · agent_runtime_bridge_accepted_bounded · G3_reference_architecture_AUTHORED_pending_Nick_Knox_review · G4_not_started · analysis_nonbinding · not_promoted · outer_checkpoint_UNCHANGED` — G1/G2 MERGED to `main` @ `fa98a34` (Knox PASS + Nick, 2026-08-01). **★ 2026-08-01 UPDATE: C4.4 G3 §R reference architecture AUTHORED + Knox-amended + normalization-cleaned (Nick + Knox authorized G3; Knox review = PASS WITH REQUIRED AMENDMENTS → all 5 amendment groups applied + 2 tiny post-amendment cleanups — §20.4) on branch `analysis/c4-4-g3-reference-architecture` off `origin/main a87d305`, **PUSHED to remote (fast-forward `99f4e02..03b91a7`, no force), NOT merged.** Remote tip = **`03b91a7`**; `origin/main` still `a87d305`. Next gate = Knox verifies the remote bytes → Nick + Knox accept G3 → G4/Gemini. See §0-G3-NEXT runbook for the full sequence + the frozen Gemini G4 packet.**
Domain(s): architecture_governance, cns_orchestration, ai_substrate, evidence_processing, federation
Lifecycle role: the live next-agent boot packet for C4.4 after the G2 curated landing. Supersedes `v4_C4_4_G2_kickoff_handoff.md` as the C4.4 boot artifact (the kickoff handoff is a consumed historical packet preserved ONLY on the C4.4 analysis branch — it is NOT on `main` and is NOT the live handoff).
Source-of-truth relationship: points to the charter / G1 map / G2 constitution + the Agent-Runtime capture. Does NOT supersede the outer checkpoint (#15).
Supersedes: `v4_C4_4_G2_kickoff_handoff.md` (as the C4.4 boot pointer only; that packet is not landed on `main`)
Superseded by: none
Manifest action: `add_tier2` (catalog row + read-graph `9j` route updated same pass)
Review gate: `user_knox_required`
agent_read_rule: `consult_if_routed`

---

## §0-G3 — LIVE ADDENDUM: C4.4 G3 §R reference architecture AUTHORED (2026-08-01, pending Nick + Knox review)

> This addendum is the **live** top-of-state for C4.4. The §1–§4 landing record below is preserved as the **historical** G1/G2 landing record (it remains accurate for the pre-G3 transaction). Where they differ on current state, this addendum wins.

- **What happened:** Nick + Knox authorized C4.4 G3; a fresh Opus agent authored the reserved technology-neutral **§R reference architecture + plug-point model** (R.0 orientation + R.1–R.17 + §R.CORPUS D7/corpus verdict + §R.FIX F0/F-Self/F-Inv design traces + §20 G3 completion ledger) inside `v4_C4_4_taxonomy_constitution_and_reference_architecture.md`, on top of the accepted G2 constitution (§§1–19 **not reopened**).
- **Branch:** `analysis/c4-4-g3-reference-architecture` (off `origin/main a87d305`, pushed, **NOT merged to `main`**, no force-push).
- **Commit SHA:** `13c3ec5cd14ba0f418038ebcdee1d96da2e112c1` (the G3 authoring commit; this line stamped by the immediately-following state-normalization commit).
- **G2/G3 artifact blob SHA (`…taxonomy_constitution_and_reference_architecture.md`):** `9ecf042fbd0b11423b2b37ee423070ec0950bf2e`.
- **Status:** `analysis_nonbinding` · **pending Nick + Knox G3 review** (NOT self-accepted) · G4 NOT authorized/started (G4 owns the frozen adversary + rubric) · nothing promoted · outer checkpoint #15 + AGENTS UNCHANGED · G1 + the Agent-Runtime bridge (`de5b9a1`) UNCHANGED.
- **Load-bearing G3 verdict (§R.CORPUS):** reuse D7 per-artifact custody physics **subject-agnostically** for the artifact primitive; add a **Source-Estate-owned S1 corpus/package layer ABOVE D7 artifacts** (membership by reference, not copy); corpus completeness/closure + operational/federation admission live in S1; the corpus-parent schema/table shape is deferred to C5. P1 (corpus inside D7) and P2 (new corpus domain) rejected.
- **Files touched on this G3 branch:** the taxonomy/reference-architecture artifact (§R + passport + §0 + §20); the charter status; this handoff; catalog row; read-graph #9j; FWREG-007. Nothing else.
- **★ Knox G3-review amendment pass (2026-08-01):** Knox returned **PASS WITH REQUIRED AMENDMENTS** (direction + P3 verdict accepted; 5 bounded amendment groups). Opus verified all five against the live bytes and applied them (§20.4 amendment matrix): (1) governance control-plane state = committed S3-role, NOT S5 projection [with the divergence: S3-of-governance-domain, not a new "P0 class"]; (2) blob/artifact/receipt/evidence-independence four-identity split; (3) federated revocation split into grant-revoke/withdrawal/lawful-deletion/recipient-local-reconsideration + recipient sovereignty + bidirectional lawful-retention exception + profile A/B; (4) closed-package receipt-closure immutability; (5) live-state normalization + R.17 truth qualifier + named S1 custody-governance commit role. Runtime blob `de5b9a1` NOT touched. **Amendment commit SHA:** `32a7a88671c1ed41bd24bdef2e76c6aee9c99c74` · **amended artifact blob SHA:** `e20c3f3a5d6063aa564761db19ac9e5b85ab560d` *(authoring commit was `13c3ec5`; the amendment commit sits on top).*
- **★ Post-amendment normalization cleanups (2026-08-01):** two microscopic cleanups from Knox's amended-artifact review were applied to the artifact (NOT architecture reopenings): (a) the contradictory live-§0 "This is G2 only" line rewritten to "§§1–19 = closed G2 body; §R + §20 = authored+amended G3 layer"; (b) an inline supersession pointer added at G2 §14 F-Self prose → §R.FIX Amendment-1 (G2 body not rewritten). Knox's linguistic caution folded into the spine-§8 deferral note. See §20.4. **Post-cleanup commit SHA:** `6c86e2edc3935f5f7bad9c628b4e450837712767` · **post-cleanup artifact blob SHA:** `e364acbad3352457eb8c761d287e91787ea71eea` (a SHA-stamp commit sits on top).
- **Exact next action:** **Knox verifies the remote bytes at tip `03b91a7`** (the push is DONE) → Nick + Knox accept G3 → G4/Gemini. See **§0-G3-NEXT runbook** immediately below.

## §0-G3-NEXT — Next-agent runbook (2026-08-01): ~~push~~ ✅ → Knox verify → accept → G4/Gemini

> **Status:** Step 1 (push) is **DONE** — the amended + cleaned branch is on the remote at tip **`03b91a7`** (fast-forward, no force, not merged). Begin at **Step 2 (Knox byte-verification)**.

**Three-state reality (read this first — it looks confusing but nothing is lost):**
| state | ref | contains |
|---|---|---|
| `main` (committed estate) | `a87d305` | G1/G2 landed; **no G3**; nothing promoted |
| remote review branch (GitHub) | `origin/analysis/c4-4-g3-reference-architecture` (✅ pushed; tip = `03b91a7` **plus this push-status docs commit on top**) | full G3: authoring + amendments + cleanups + runbook |
| **local working branch** | in sync with remote | authoring `13c3ec5` → stamp `99f4e02` → amendments `32a7a88` → stamp `a885a7d` → cleanups+runbook `6c86e2e` → stamp `03b91a7` → push-status docs commit |

> **Regress-proof content pin:** the reviewable G3 architecture content is fixed at **artifact blob `e364acbad3352457eb8c761d287e91787ea71eea`** (commit `6c86e2e`). Later branch-tip commits are docs/push-status stamps only and do NOT change that architecture blob — Knox/Gemini should verify the artifact **by blob**, and treat the literal branch tip as "the latest of these stamps."

**Step 1 — Push. ✅ DONE (2026-08-01):** fast-forward `99f4e02..03b91a7`, no force, not merged; remote tip = `03b91a7`; `origin/main` still `a87d305`.

**Step 2 — Knox verifies the exact remote bytes (tip `03b91a7`):** the six-file diff vs `a87d305`; the amendment matrix §20.4 lands as specified (esp. Amendment-1 S3-not-P0); the two cleanups are present; runtime blob `de5b9a1` + AGENTS + checkpoint #15 + `main a87d305` unchanged.

**Step 3 — Nick + Knox accept G3.** (The two normalization cleanups Knox required are ALREADY applied in these bytes — no further artifact pass needed unless Knox finds something in the pushed bytes.)

**Step 4 — Freeze the G4 fixtures + rubric**, THEN give a fresh, repo-connected **Gemini** the G4 white-box adversarial packet (Gemini's highest-value role is the G4 adversary leg, NOT another general prose review). Do NOT begin G4 authoring before steps 1–3.

**Frozen Gemini G4 adversarial-packet template (target commit now filled = the pushed tip `03b91a7`; re-stamp only if the branch advances before G4):**
```
AT GEMINI — C4.4 G4 WHITE-BOX ARCHITECTURE ADVERSARY.
Repository: ncrawf/main-app
Target branch: analysis/c4-4-g3-reference-architecture
Target commit: 03b91a77ac93b014c401554164db3b5ff7a52bcd
Read the exact repository bytes. Do not review from an operator summary.
Primary object: .cursor/plans/v4_C4_4_taxonomy_constitution_and_reference_architecture.md
Governing inputs: live C4.4 handoff · charter · closed G1 map · accepted G2 constitution ·
  accepted bounded Agent-Runtime bridge · D7 contract · Architecture Memory Control Plane +
  catalog/read-graph · C4.3 correction-continuity law · C4.5 temporal charter · Federation + CNS boundaries.
Role: ADVERSARY, not co-author. Do not rewrite; do not invent schemas/vendors/services/domains/planes/rosters/surfaces.
Pressure-test F0/F-Self/F-Inv for: (1) constitutional-class collapse; (2) Source-Estate/corpus god-object;
  (3) hidden authority transfer to Foundry/Router/Runtime/control-plane; (4) blob/artifact/receipt/evidence-
  independence collapse; (5) cross-sovereign revocation/correction overreach; (6) false package closure /
  history rewrite; (7) privacy/tenant/principal/jurisdiction/Federation leakage; (8) missing Care/Accountability/
  Time/domain-commit consequences; (9) lost uncertainty/partial-failure/lineage; (10) build/buy/wrap language
  that secretly selects architecture by vendor.
For each defect: instantiate a concrete fixture mutation · cite the exact §R sentence that permits it ·
  cite the governing source it contradicts · classify severity (blocker|major|minor|no defect) · state the
  smallest correction. Return: PASS | PASS_WITH_BLOCKERS | HOLD. No repo writes. No G5. No promotion.
```

**Step 5 — Knox adjudicates Gemini's findings; Step 6 — G5 disposition/handoff** into Task-D, spine §§7/8, C5, Runtime (`FWREG-010`), CNS, Federation, and the other named owners.

**Live hard stops for the next agent:** no G4 authoring before acceptance · no merge to `main` · no force-push · no checkpoint-#15 repoint · no AGENTS edit · no runtime-blob edit (`de5b9a1`) · no schema/vendor/build · nothing promoted.

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
- **G3 is AUTHORED, pending Nick + Knox review** (see §0-G3 addendum — supersedes the historical "G3 NOT started" language below). §R is populated on branch `analysis/c4-4-g3-reference-architecture` (not merged). **G4 is NOT started.**
- **No checkpoint repoint.** Outer checkpoint #15 + AGENTS UNCHANGED; no controlling-banner change. This is a parallel operator-activated pre-spine input, not a gate move.

## §3 Exact next action

**DONE: the eight-file curated landing is Knox-verified (PASS) and MERGED to `main` via fast-forward @ `fa98a343565e35c4c6aba2aff7f8504e56e028af` (Nick authorization, 2026-08-01), followed by this bounded two-file post-merge state-normalization commit. No further merge decision is pending.**

**★ SUPERSEDED 2026-08-01 (see §0-G3 addendum):** Nick + Knox DID authorize G3, and §R is now AUTHORED on `analysis/c4-4-g3-reference-architecture` (not merged). The ONLY authorized next architecture action is now: **Nick + Knox review C4.4 G3** (the authored §R). Historical pre-G3 text follows:

The ONLY authorized next architecture action is: **Nick + Knox explicitly authorize C4.4 G3.**

- **G3 scope** = populate the reserved technology-neutral **§R reference architecture + plug-point model** over the six G2 constitutional classes/roles (charter §8 G3 row; G2 §R outline R.1–R.17). Technology-neutral; no vendor picks; no schema; no build.
- **NOT next:** the Reservoir-family roster / partition deep dive (that is a spine §8 / later concern, not G3), any Build-OS work, any promotion, any C5 contract/schema/code.
- **After G3 review:** if Nick + Knox accept, G4 (frozen adversary + rubric scoring of F0/F-Self/F-Inv) becomes the next authorizable action; G4 is NOT authorized yet.

## §4 Hard stops carried

No AGENTS edit · no checkpoint #15 change · no controlling-banner change · **no G4 authoring** *(★ Amendment-5: the original "no G3 authoring" stop is HISTORICAL — G3 was Nick+Knox-authorized and §R is authored + Knox-amended pending review; the live stop is now no G4 authoring/auto-start)* · no schema/code/services/folders/vendor picks · no Build-OS/Platform/Care/Pharmacy/Task-D/Time/Demand changes · no cross-facet worksheet changes · no promotion. `analysis_nonbinding` throughout.
