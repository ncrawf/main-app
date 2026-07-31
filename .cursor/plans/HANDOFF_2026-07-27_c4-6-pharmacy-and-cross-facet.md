# HANDOFF — 2026-07-27 · C4.6 Pharmacy L2 + Cross-Facet worksheet (branch-local continuity)

Document type: `handoff` (agent-continuity artifact — the durable pickup point for the NEXT agent on this branch's live work; NOT a canonical checkpoint, NOT authority, NOT a schema/contract).
Authority: `analysis_nonbinding` (`GRD-036`). Binds nothing. Promotes nothing.
Status: `artifact_landed_on_main_44feb15 · option_b · L2_arc_content_closed_knox_final_PASS · analysis_nonbinding · not_promoted · global_checkpoint_unchanged` — the C4.6 pharmacy arc has been MERGED to `main` @ `44feb15` (Option B artifact-landing, 2026-07-31): the accepted L2 (blob `0f96645`) + G2A + briefs landed as nonbinding subordinate pre-spine inputs; the quarantined cross-facet worksheet was EXCLUDED (preserved on `analysis/cross-facet-operating-model-reconciliation` @ `a526b88`). Canonical checkpoint #15 / AGENTS / controlling-plan banner are UNCHANGED by design (C4.6 is subordinate to #15). See §9.9.
Owner: Opus (closeout) · Reviewers: Nick (operator, final gate) + the current independent Knox thread (adjudicator) · Origin: operator closeout direction 2026-07-27 → post-L2 rebase/closeout 2026-07-31.

---

## §0 — BOOT: read this first (fresh/re-tiered agent)

- **C4.6 pharmacy is DONE and LANDED.** The pharmacy L2 build-doctrine is **CLOSED/ACCEPTED — Knox final content verdict PASS (2026-07-31)** and the arc has been **MERGED to `main` @ `44feb15`** (Option B artifact-landing) as a nonbinding subordinate pre-spine input. No architecture round remains and **no pharmacy re-review is pending**. The next action is operator-controlled selection of the NEXT arc (Task-D final · C4.4 reservoir · C4.5 temporal · demand) — NOT more pharmacy work. Read §9 (esp. §9.2 map + §9.6–§9.9) then the L2 (`v4_C4_6_rx_build_doctrine_standards_and_2035_conformance.md`).
- **HARD STOPS (standing rulings — do NOT violate):** **merged to main @ `44feb15` (Option B) — do NOT re-merge, rollback, or re-rebase** · **do NOT reopen pharmacy architecture** · no promotion of any cross-facet classification/answer · no new "board"/umbrella artifact · no touching the moat frame, Reactor, the watch list, open-review queue · **canonical checkpoint (#15/AGENTS/banner) is UNCHANGED and STAYS unchanged — C4.6 is a subordinate nonbinding input, not the controlling gate** · only ONE control-plane integrator edits `01`/`04`/`08`/routes at a time (concurrency rule).
- **This branch was rebased onto `main` then MERGED @ `44feb15`** (§9.9). The cross-facet worksheet is NOT on main — it lives on `analysis/cross-facet-operating-model-reconciliation` @ `a526b88` (unregistered, quarantined).
- **The agreed cross-arc PROCESS is pinned** at the top of `v4_C4_cross_facet_operating_model_classification_reconciliation.md` (see §5). Read it; do NOT re-derive it.

---

## §1 — Verified repository state (2026-07-31, post-merge; checked against origin)

Live `origin/main` = **`44feb15`** — the C4.6 merge commit (Option B, `--no-ff`) on top of `6588c14` (which carried the residual-moat frame, read-graph **#9n**). The accepted L2 (blob `0f96645`), G2A, briefs, and this handoff are now ON main; the cross-facet worksheet is NOT.

Four worktrees / branches:

| Thread | Branch (worktree) | Tip | Base | State |
|---|---|---|---|---|
| **Pharmacy (C4.6)** ← THIS branch | `analysis/c4-6-g2-external-reality-map` (`/Users/bloomfrontdesk1/Desktop/main-app`) | `c75de75` → **MERGED to main @ `44feb15`** | `6588c14` → merged | G2A **accepted**; L2 doctrine **CLOSED/ACCEPTED — Knox final PASS** (blob `0f96645`); cross-facet worksheet **extracted to `analysis/cross-facet-operating-model-reconciliation` @ `a526b88`**. Rebased + collision-checked + **MERGED (Option B artifact-landing)**. Backup ref `backup/c4-6-pre-rebase-20260731` @ `b23fe8d`. |
| **Reservoir (C4.4)** | `analysis/c4-4-knowledge-source-estate` (`/Users/bloomfrontdesk1/Desktop/c4_4-wt`) | `febfcf5` | `5275707` (stale) | **G2 CLOSED**, Knox-verified, operator-accepted; G3 NOT started. NOT merged. |
| **Runtime** | `analysis/agent-runtime-g2-consumption` (`.../_wt_agent_runtime_g2`) | `febfcf5` | reservoir G2 tip | Branched off reservoir G2; **nothing advanced beyond it**. |
| **Moat** | `strategy/omni-residual-moat-doctrine` (`/Users/bloomfrontdesk1/Desktop/residual-moat-wt`) | `6588c14` | — | **MERGED to main**; owns read-graph #9n. Closed (reopen only at its Gate A/B/`D0-REV-010`). |

This branch's recent commits (newest first):
- *(this pass)* merge-prep: extract cross-facet worksheet → dedicated branch `analysis/cross-facet-operating-model-reconciliation` @ `a526b88`; remove it from this tree; normalize handoff live-state (§9.8) — SHA in relay
- `0e9da07` post-L2 rebase onto `origin/main` `6588c14` + registration-collision closeout (Knox final PASS)
- `b23fe8d` seven-group bounded fidelity patch (narrow mechanical re-check PASS)
- `de94814` integrate fresh-Knox amendments (#1-13 + A14-A20 + C12-C16) coherently; lossless handoff §9 receipt
- `1a6295b` handoff C4.6 branch-local closeout
- `ba4a1bd` pin THE PLAN at top of cross-facet worksheet (process vs provisional answers)
- `08041e7` quarantine cross-facet worksheet — remove premature #9n route + catalog row (fresh-Knox ruling)
- `03ed270` cross-facet: open-routing items (moat=related L0 lens; runtime=separate)
- `7a6fd1f` seed cross-facet carrier *(its #9n route + catalog row were REMOVED by `08041e7` — do not resurrect)*
- `8b7cbec` author L2 Rx/pharmacy build-doctrine + wire #9m-c
- `3a2e0f4` Day-1 brief → Gate-0 product direction (not build-ready)
- `eb7628b` Day-1 External Pharmacy Seam Pass brief (durable capture)
- *(earlier: G2A external-reality map + Appendix-A ledger + sealed Gemini-A, accepted)*

---

## §2 — What lives on THIS branch

1. **`v4_C4_6_G2A_external_reality_map_2026-07-22.md`** (read-graph #9m-a) — G2A external reality, `as_of 2026-07-22`. CONTENT ACCEPTED (Knox). Appendix-A source-anchor ledger; sealed verbatim Gemini-A submission. Merge-eligible on rebase.
2. **`v4_C4_6_rx_build_doctrine_standards_and_2035_conformance.md`** (read-graph #9m-c) — **the L2 build-time engineering doctrine = the LIVE OBJECT.** Now the integrated v3: GCE-anchored shared-vs-specialized counterparty boundary (§0.5) + five-class versioned standards posture (§2) + adapter-family/connection + capability axes (§3) + three-plane command/evidence/commit interface + resolver + multi-principal resolution (§4) + prescription-artifact lineage (§5) + recognition-rule/proof-shape (§6) + same-contract/unequal-assurance evidence envelope (§7) + pharmacy-sovereign offer projection (§8) + composed admissibility/selection (§9) + return-path/continuation (§10) + ownership matrix + purpose-bound comms + loyalty guard (§11) + proof-bearing **C1–C16** (§12) + build-delta incl. present-day C7 nonconformance (§13). Status: **CLOSED/ACCEPTED — Knox final content verdict PASS (2026-07-31)** (substantive-architecture PASS + seven-group fidelity patch + narrow mechanical re-check all PASS, §9.6); rebased onto `main` `6588c14` (§9.7). §17 = the now-satisfied re-verification questions.
3. **`v4_C4_6_day1_external_pharmacy_seam_pass_brief.md`** (read-graph #9m-b) — Gate-0 product DIRECTION (not build-ready).
4. **`v4_C4_6_rx_emit_pharmacy_counterparty_network_pressure_test.md`** (#9m) — parent charter.
5. **`v4_C4_cross_facet_operating_model_classification_reconciliation.md`** — **EXTRACTED (§9.8) to dedicated remote branch `analysis/cross-facet-operating-model-reconciliation` @ `a526b88` (byte-identical; still QUARANTINED + unregistered — no catalog row, no read-graph route) and REMOVED from this merge tree** so a whole-branch merge does not carry a not-merge-eligible worksheet into main. Holds THE agreed cross-arc PLAN (pinned at top, §5) + provisional A–H questions; classifications/level-model remain PROVISIONAL, not accepted.

---

## §3 — Pharmacy L2 adjudication (COMPLETED — historical adjudication lineage; the L2 content verdict is CLOSED/ACCEPTED, Knox final PASS)

**Status update:** this adjudication is COMPLETE. Knox returned PASS-WITH-AMENDMENTS (#1–#13 + A14–A20 + C12–C16, integrated at `de94814`), then substantive-architecture PASS + a seven-group bounded fidelity patch (`b23fe8d`), then the **final content verdict PASS** on the narrow mechanical re-check (§9.6). **There is no open adjudication task.** The material below is the original brief, preserved for lineage; where its L2 section numbers or action names differ from the integrated L2, the integrated L2 + §9.2 map govern (e.g., the evidence envelope is L2 §7; the typed interface is L2 §4; the old `record_acceptance_evidence` is now `ingest_counterparty_acceptance_assertion`).

Original brief — adjudicate `v4_C4_6_rx_build_doctrine_standards_and_2035_conformance.md`:

**Scope discipline (critical):** classify/judge its **specific units**, NOT the noun "Pharmacy" as one genus (a lane is a TUPLE — external-counterparty facet + externally-owned execution lifecycle + conformance profiles + domains + controllers + rails + projections + invariants). The units to test:
- the Rx episode; external-pharmacy execution states; counterparty participation/conformance; the normalized adapter contract (§4 of L2); the canonical evidence envelope (§6 of L2); routing policy; the bilateral execution-obligation (rung-5) meaning; manual-bridge behavior; the CORE-vs-ADAPTER boundary (§3 of L2).

**Questions to put to it** (from the L2's own §12 + the worksheet's provisional A–H):
1. Standards posture (§2 of L2) correct + complete? Anything mis-scoped (FHIR/DSCSA conflation) or missing (state boards/NABP/USP 795/797/503B as an evidence class)?
2. Is the adapter contract genuinely partner-agnostic and does it PROFILE NCPDP SCRIPT rather than reinvent a competing protocol?
3. Does `ingest_counterparty_acceptance_assertion` / rung-5 duplicate OFC/Federation/CNS obligations? Does "CORE" quietly become a shadow Pharmacy domain?
4. Is the conformance test **C1–C16** a real pass/fail instrument (would a wrong build decision actually FAIL a gate) or are the gates soft?
5. Is anything overclaiming (the recurring failure) — does it smuggle in a build spec, named pharmacy, or UI?

Keep it **bounded to the L2 artifact + its pharmacy lineage.** Do NOT turn it into a cross-estate pass.

---

## §4 — Standing constraints (Knox rulings, 2026-07-27)

- **Rebase + collision-check + MERGE are DONE (§9.7–§9.9)** — the bounded pharmacy transaction was rebased onto `main`, collision-checked, and merged @ `44feb15` (Option B). **Do NOT re-merge, rollback, or re-rebase; do NOT reopen pharmacy architecture.**
- **Cross-facet worksheet stays quarantined** — provisional answers, not accepted; its rubric is questions-only, not a frozen ontology; a lane is a tuple, not one genus. It is NOT on main (extracted to its own branch `a526b88`). Do NOT register it, do NOT force per-facet canon, do NOT merge it.
- **Do NOT touch:** the moat frame (merged/closed on main, owns #9n — do not relocate/reopen), Reactor (candidate/frozen), watch list, open-review queue, catalog/read-graph beyond legitimate scoped work under the concurrency rule.
- **Canonical checkpoint (#15/AGENTS/banner) UNCHANGED — Option B chosen (operator, 2026-07-31):** C4.6 landed as a subordinate nonbinding input; the controlling gate stays the `2026-07-19` Task-D/EVRUN-000012 checkpoint. See §7 + §9.9.

---

## §5 — The agreed cross-arc PLAN (anti-silo) — pinned, do NOT re-derive

Pinned at the TOP of the cross-facet worksheet (now on dedicated branch `analysis/cross-facet-operating-model-reconciliation` @ `a526b88`, §9.8) as **"★★ THE PLAN — READ THIS FIRST."** It is AGREED (Nick + Knox + Opus); the operator asked for it 3+ times. Summary:

1. **Sharpen the shared review QUESTIONS first** (A–H, §2 of the worksheet) — questions, NOT a frozen ontology.
2. **Close each arc ONE AT A TIME against those questions** — pharmacy (L2 first), then one of {reservoir/runtime · influencer/demand · care/GRR closure}; **Insurance LATER as a deliberate falsifier**. Never one mega-pass.
3. **Each arc emits a "classification receipt"** consuming the already-accepted prior arcs (moat FSG-10, reservoir G2, pharmacy, care, GRR, demand) — **this is the anti-silo guarantee: no new arc is built blind to prior-arc learnings.**
4. **Cross-arc SYNTHESIS assembles LAST**, from completed receipts — never authored in advance from summaries.

**Critical line:** the PROCESS is agreed + durable; the CLASSIFICATIONS/answers in the worksheet body are PROVISIONAL + not accepted (`not_promoted` applies to the answers, not to the plan).

---

## §6 — After the L2 verdict (next steps, operator-gated)

1. ~~Rebase + collision-check + checkpoint-closeout decision + merge~~ **ALL DONE (§9.7–§9.9): Option B, merged @ `44feb15`.** The C4.6 arc is landed; no pharmacy step remains.
2. Choose **exactly ONE** next arc: reservoir/runtime · influencer/demand · care/GRR closure. Each runs against the §5 questions and emits a classification receipt.
3. Insurance = a bounded Gate-0 LATER, as a falsifier of the rubric — not now.
4. Cross-arc synthesis only once several receipts exist.

Reservoir G2 (`c4_4-wt`) is separately accepted and is the lowest-risk "bring home to main" candidate when the operator chooses to reduce parallel-branch drift — but that is its own deliberate, gated operation, not part of the L2 task.

---

## §7 — Canonical checkpoint: UNCHANGED (Option B chosen + applied at merge)

The canonical current-state pointer (`04_manifest_read_graph.md` #15 + AGENTS = the `2026-07-19` Task-D/EVRUN-000012 controlling-gate checkpoint) is **UNCHANGED** — verified on `main` @ `44feb15` (AGENTS byte-identical `7a8a438`; #15 still points to the `2026-07-19` handoff). It was not touched because C4.6 is `analysis_nonbinding` and **subordinate to #15**, one of several parallel operator-activated pre-spine inputs; it is NOT the boot-controlling gate. The Checkpoint Closeout Rule forced an explicit choice at merge:
- **Option A** — repoint #15/AGENTS/controlling-plan banner to a C4.6-closed state.
- **Option B** — land the C4.6 artifacts as nonbinding subordinate inputs, canonical checkpoint **UNCHANGED**, and do NOT claim global closeout.

**Option B was chosen (operator, 2026-07-31)** and applied at the merge (§9.9). Repointing the global gate to a subordinate `analysis_nonbinding` arc would have misrepresented boot state and lost the Task-D / EVRUN-000012 / temporal controlling sequence — a leak-at-pivots regression. C4.6's content verdict is closed at *its own arc level*; the controlling gate is unchanged. Because Option B was chosen, **no agent may call C4.6 "globally closed" under the control-plane definition** — it is a landed subordinate input.

---

## §8 — Durability receipt

- This handoff is on branch `analysis/c4-6-g2-external-reality-map` (tip `c75de75`), now **MERGED to `main` @ `44feb15`**. Branch lineage: L2 integrated (`de94814`) → fidelity-patched (`b23fe8d`) → rebased onto `main` + collision closeout (`0e9da07`, §9.7) → merge-prep/worksheet-extraction (`c75de75`, §9.8) → merge (`44feb15`, §9.9) → this post-merge control-plane sync (main-only).
- Everything referenced is committed + pushed: pharmacy branch tip `c75de75` (merged); the extracted worksheet on `analysis/cross-facet-operating-model-reconciliation` @ `a526b88`; reservoir `febfcf5`; runtime `febfcf5`; demand `b191d75`; external-engagement `22bcf30`; moat merged at main (pre-C4.6 `6588c14`); `main` = `44feb15` + this sync commit.
- **MERGED to main @ `44feb15` (Option B, §9.9); checkpoint #15/AGENTS/banner UNCHANGED.** L2 body byte-stable throughout (blob `0f96645`). Other agents' untracked worktree files left untouched.

## §9 — AMENDMENT RECEIPT (2026-07-31) — L2 patched coherently · lossless amendment→section map · residuals in full

Authority: `analysis_nonbinding` (`GRD-036`). Branch-local. Not promoted. Cross-facet worksheet untouched. No checkpoint repoint. **This pass PATCHED the L2** (`v4_C4_6_rx_build_doctrine_standards_and_2035_conformance.md`) into one coherent, integrated doctrine — it is no longer "proposed pending edit." This receipt is a **transaction record + lossless map**, not the carrier of the rules; every durable rule now lives in the L2 body. Per adjudicator direction 2026-07-31, all chat-pointer phrasing has been eliminated from both files; every amendment is either written into the L2 body or captured in full in the §9.2 map / §9.3–§9.4 residuals below.

### §9.1 — What changed, and why
- **Fresh Knox returned PASS-WITH-AMENDMENTS** (#1–#13) plus, on operator reopening, corrected A14–A20 and C12–C16. The over-collapse Opus first proposed ("pharmacy = a profile over the OFC fulfillment genus") was **rejected by Knox and, after independent repository re-verification, conceded by Opus on the merits.**
- **Why the correction holds (verified in-repo this pass, agreement ≠ corroboration):**
  - **OFC is `draft_for_ratification`** (`contracts/ordered_fulfillment_contract.md` header + §1.5; closure pending trifecta) — so "already ratified" was overstated. The settled parts are **payload-noun ≠ domain** (`GRD-026`; the guard is OFC §7 invariant 3) and `lab`/`rx`/`commerce_fulfillment` as `fulfillment_order_kind` **subtypes** (OFC §4).
  - **The shared anti-silo anchor is the ratified Governed Capability Exchange** (an *inherited ratified guardrail set*), NOT OFC (`doctrine/omni_enterprise_posture_2026-06-03.md`; `D0THES-DEC-036`; `GRD-033/034`). **OFC owns only the fulfillment-state slice.** (`counterparty-noun ≠ lifecycle` is a **proposed L2 keeper**, not inherited ratified law.)
  - **EVRUN-000012 `_02 §15.3` (operative lifecycle classification)** holds **Care ≠ Sourcing ≠ Fulfillment** and **settlement = D6-native**; **`_07 §7.3` L7** records the **unified Vendor-Loop rejection** and **L8** the offer/sourcing/equivalence objects `REQUIRES_C5_DEDUP` — procurement/inventory/AP/COGS is NOT presumed solved.
  - **New keeper (now in L2 §0.5):** *payload-noun ≠ domain; **counterparty-noun ≠ lifecycle**; classification output is a **tuple**, not a bucket.* **Sharpened:** pharmacy is not a new OMNI-owned unified lifecycle or truth-owning domain — the external pharmacy keeps its own sovereign execution lifecycle; external systems may be source-authoritative for facts in their own systems but never own OMNI canonical truth (L2 §0.5/§7/§10/§11).

### §9.2 — Lossless amendment → final-L2-section map (the durable content lives in the L2 §; this is the index)
| Amendment | Substance (one-line) | Landed in L2 § |
|---|---|---|
| **#1** | Standards posture is versioned + trigger-reopenable, not "resolved once" | §2 (header + per-row `as_of`/`reopen_trigger`) |
| **#2** | Split posture into distinct classes; add compounding/licensure/quality; separate EPCS from PDMP | §2.A–§2.E (five classes); §2.C EPCS≠PDMP; §2.D quality class |
| **#3** | Steelman FHIR — records/tasks/provenance real; the true residual is no bilateral custody/consequence-continuity | §2.B |
| **#4** | Normalized internal seam is genuinely net-new; add mapping-confidence columns; rewrite "what OMNI originates" | §4 (mapping discipline) + §6 |
| **#5** | Three planes: command ≠ evidence ≠ authoritative commit; rename to `ingest_counterparty_acceptance_assertion`; resolver owns `reconcile_observed_state` | §4 (Planes 1/2/3 + resolver) |
| **#6** | Per-connection, per-action capability matrix; unsupported valid, fabricated fail | §3 (capability declaration) |
| **#7** | Shadow-domain ruling + ownership matrix; delete "rung-5 obligation record + deterministic route" from NEW-core | §11 (matrix) + §13 (NEW clause) |
| **#8** | Evidence envelope: same contract, unequal assurance; retire manual==API; remove authoritative `next_obligation`; full field list | §7 |
| **#9** | Composed admissibility + selection, not a deterministic route owner / scalar "best" | §9 |
| **#10** | Proof-bearing conformance gates | §12 (C1–C16 proof/fixture columns) |
| **#11** | Record the present C7 violation (`impl.ts` ~2963–2969) + classify existing scaffolding | §13 (KNOWN NONCONFORMANCE + classification) |
| **#12** | Bound the absence-of-evidence / moat claim to G2A's survey; "rung 5" = OMNI analytical term | §6 (survey-bounded) + §2.A vendor-API bounding |
| **#13** | Demote Palantir/Anthropic to comparators, not imperatives | §14 |
| **A14** | Counterparty formulation/offer assertions: pharmacy-sovereign, versioned provenance-bearing **projection** (not a mirror); anti-collapse of the 7 distinct things; ingredient≠equivalence; clinical-reinterpretation → Care | §8 |
| **A15** | Adapter **family** ≠ counterparty **connection instance**; one platform ↔ many pharmacies; one pharmacy ↔ many rails; capability enum per connection/action | §3 |
| **A16a** | Prescription-artifact lineage: clinical intent ≠ signed Rx ≠ executable instruction ≠ dispense record; none overwrites the prior | §5 |
| **A16b** | Multi-principal resolution protocol: typed, authority-bounded, no `rx_negotiation` god-object; episode = projection | §4 (resolution protocol) |
| **A16c** | Consequence return-path + longitudinal continuation; composed projection; delivery ≠ closure; missing rail = explicit unknown | §10 |
| **A17** | Purpose-bound, authority-separated counterparty communications + the loyalty/brand cross-capacity guard | §11 (communications + loyalty guard) |
| **A18** | GCE shared exchange; capacity-typed participation; multiple native lifecycles; OFC = fulfillment slice; pharmacy = profile; no god-domain | §0.5 + §11 |
| **A19** | Demand-binding vs procurement/inventory vs delivery-topology are independent dimensions; procurement/inventory NOT presumed OFC-owned | §0.5 (orthogonal dimensions) |
| **A20** | Care-origin context ≠ medication artifact ≠ dispensing topology ≠ externality; externality set by principal/authority/topology, not inpatient/outpatient label; internal-pharmacy = named future pass | §0.5 + §15 |
| **C12** | Prescription lineage integrity | §12 C12 |
| **C13** | Longitudinal return-path + purpose separation | §12 C13 |
| **C14** | Shared-counterparty reuse WITHOUT lifecycle collapse | §12 C14 |
| **C15** | Demand-binding & custody-topology integrity | §12 C15 |
| **C16** | Origin-context portability + externality-boundary integrity | §12 C16 |

### §9.3 — Unresolved residual A (IN FULL): third-party loyalty / rewards / brand-permeability
**Nature.** A distinct counterparty **capacity** — loyalty/rewards-program operator / brand-relationship principal (Allē/Allergan, ASPIRE/Galderma) — separable from the same entity's supplier/pharmacy/fulfiller/quality capacities; applies to ANY vendor OR pharmacy. The same external company may simultaneously be product supplier, fulfillment counterparty, loyalty operator, patient-facing brand, data recipient and promoter, and those capacities must not silently inherit one another's authority.
**Real practice pain (operator-attested).** Third-party loyalty recorded manually every visit; patient-data leakage to the brand; brand encroachment into the provider↔patient relationship ("do Botox with us, take it anywhere"); escalating provider-data demands to qualify; providers effectively acting as ungoverned data-entry agents for the brand; manual per-vendor enrollment at checkout (N vendors = N asks).
**Explicit non-authorizations (the guard, now in L2 §11):** a brand supplying product does NOT thereby gain authority to enroll the patient, receive patient-level treatment data, market into the provider relationship, determine routing, become the authoritative rewards ledger inside OMNI, or conscript the provider as its data-entry agent.
**What the future Demand/GCE/loyalty pass must decide (NOT decided here):** whether OMNI blocks / permits / brokers / harmonizes each program; patient-level enrollment + revocation; tenant/provider policy; Federation participation + data-use terms; which system owns reward-balance + redemption truth; multi-program identity matching; portability + vendor lock-in; third-party brand visibility inside provider surfaces; vendor-requested patient + aggregate data; whether loyalty economics may influence sourcing or clinical presentation.
**Routing (homes):** GCE constitution · **Demand/Engagement arc** (permeability/promotion) · **Federation** (participation terms) · **D7 consent / RBAC / Identity** · **Settings** policy · **D6** if OMNI ever represents reward entitlement/redemption · EVRUN-000012 **L9 economic-integrity firewall** (blind to operator advantage, not to patient access). Governance posture is decidable at Federation (collective terms) and individual-patient (consent: "enroll in Allē?") levels.
**L2 touch (minimal):** the §11 cross-capacity guard only. **No Allē connector, rewards ledger, or enrollment mechanism designed in L2.** Status: `bounded_future_item · not_started · deferred_to_demand_and_gce`.

### §9.4 — Unresolved residual B (IN FULL): internal/external pharmacy + inpatient/outpatient + care-origin
**The confusion to avoid:** "internal / on-site / inpatient pharmacy" are NOT synonyms. Four orthogonal axes:
- **Care-origin context:** medspa · asynchronous · ambulatory · emergency · inpatient stay · discharge/transition.
- **Medication artifact:** medication list · reconciliation record · inpatient medication order · outpatient prescription · discharge prescription · dispense record.
- **Execution topology:** external community · external specialty/503A · hospital-owned outpatient pharmacy · internal inpatient pharmacy · clinic office stock.
- **Physical consequence:** unit/floor dispense · office administration · meds-to-beds · patient pickup · drop-ship · carrier delivery.
- **Authority boundary:** outside sovereign counterparty · affiliated enterprise entity · internal licensed department · clinician · pharmacist · nurse/administering professional.
**Two laws (now in L2 §0.5 + C16):** (1) **Medication list ≠ executable prescription** — a discharge/end-of-visit list mixes continued/stopped/newly-prescribed/administered/historical/reconciliation entries; any new discharge Rx is a distinct authorized artifact with its own lineage. (2) **Inpatient/outpatient ≠ internal/external** — a discharge Rx may go to Walgreens, a specialty pharmacy, the hospital's own outpatient pharmacy, meds-to-beds, or an affiliate; an inpatient order may be filled by an internal pharmacy + nurse-administered (a different medication-use lifecycle). **Care setting does not determine pharmacy externality, and pharmacy externality does not determine care setting.**
**Impact on the Care loop (operator's question):** this does **NOT** justify separate "Inpatient Care" and "Outpatient Care" loops. The Care Resolution constitution operates across both; what changes is the context profile, applicable authority, evidence, downstream medication-use lifecycle and closure conditions.
**Why internal pharmacy is a distinct future pass (out of this L2):** it may require pharmacist order verification, formulary/P&T governance, medication-use policy, unit-dose/floor-stock custody, controlled-substance inventory, compounding, dispensing, eMAR/administration, nursing administration, bedside verification, adverse-event monitoring, medication reconciliation, discharge conversion, and transitions-of-care continuity — substantially more than "D5 administration," and internal pharmacy is NOT authority-free merely because it is inside the same health system (pharmacists retain independent professional/regulatory authority). We do not design it now; the L2 (§0.5, §15, C16) only ensures the external seam does not falsely claim it.
**L2 touch:** §0.5 (orthogonality + emission contexts) · §12 C16 (proof) · §15 (internal/inpatient out, named future). Status: `external_seam_in_scope · internal_pharmacy_deferred`.

### §9.5 — Transaction record + exact next action
- **Files changed this pass: exactly two** — `v4_C4_6_rx_build_doctrine_standards_and_2035_conformance.md` (L2, coherently rewritten) and this handoff. **No** cross-facet worksheet edit, **no** catalog, **no** read-graph, **no** checkpoint repoint, **no** merge, **no** rebase, **no** registration. Cross-facet worksheet remains quarantined; the agreed arc-by-arc PLAN (§5) is untouched. Commit SHA + both blob SHAs + the section-level diff receipt are reported to the current Knox thread (a file cannot durably contain its own commit SHA; the relay carries the exact hashes for repository re-verification).
- **Exact next action (superseded — see §9.6):** the current Knox re-reads the committed repository L2 and issues the verdict.

### §9.6 — Knox repository re-verification (2026-07-31): substantive architecture PASS + seven-group bounded fidelity patch
Knox re-read the remote commit `de94814` (L2 blob `3044c77`, handoff blob `c31bc96`) and returned **SUBSTANTIVE ARCHITECTURE = PASS** (GCE-not-OFC shared anchor; OFC = fulfillment slice; payload-noun≠domain; counterparty-noun≠lifecycle; pharmacy/vendor cousins; distinct Care/Sourcing/Fulfillment/Settlement/procurement/Accountability lifecycles; four-artifact Rx lineage; command≠evidence≠commit; same-contract/unequal-assurance evidence; temporal pharmacy-sovereign offers; loyalty + internal-pharmacy preserved as explicit residuals; C1–C16 materially real). **HOLD only for seven bounded fidelity groups (NOT an architecture round — no A21, no new ontology, no reopened cross-facet work).** Applied this pass, both files, IDs → landing:
1. **Handoff boot-state refresh** — §0/§1/§2/§3/§8 + passport were describing pre-patch state (tip `ba4a1bd`, "C1–C10 pending fresh-Knox", old action name), routing a fresh agent to stale work before §9. Fixed below.
2. **Source/decision-state attribution** — "two ratified laws" → one inherited ratified guardrail (`GRD-026`) + one proposed L2 keeper (counterparty-noun≠lifecycle); OFC cites → header/§1.5 + §4 + §7 inv.3 (line-numbers `§43/§67` removed); EVRUN split → `_02 §15.3` operative + `_07 §7.3` L7/L8 downstream; "pharmacy is not a new OMNI-owned unified lifecycle or truth-owning domain" sharpened. (L2 §0.5/§16/passport + this receipt.)
3. **External-source-authority contradiction** — "never source-of-truth owners" replaced by the cross-sovereign rule (external systems may be source-authoritative for facts in their own systems, never own OMNI canonical truth; resolver determines the OMNI consequence). Carried through L2 §0.5/§7/§8/§10/§11.
4. **Adapter family/connection/capability/direction unmix** — removed "one implementation per connection"; capability enum split into orthogonal axes (support-mode / direction / channel / verification); "CORE over GCE/OFC" → "CORE = normalized exchange/seam over GCE, consumed by distinct lifecycles; OFC only when the interaction advances fulfillment." (L2 §3.)
5. **Command/evidence + exception semantics** — `record_exception` → `record_exception_assertion` (proposes; owning domain creates the obligation via Plane 3); added Plane-2 `record_cancellation_response/confirmation` + `record_renewal_request`; SCRIPT mappings stay `partial`/`unknown_unverified`. (L2 §4.)
6. **Evidence envelope completion** — added recording_actor≠asserting_principal, explicit channel, raw-artifact ref + integrity hash, external-txn/correlation/idempotency IDs, four timestamps, evidence-posture, contradiction≠supersession, authority basis, profile version, validity/expiry, owning-domain state ref; assurance vocab → authenticated_machine_assertion | human_attestation | derived_or_inferred | unverified (no default "verified"). (L2 §7.)
7. **Standards ledger + build wording** — §2 common-metadata block added; NCPDP wording fixed (transition began 2024-07-17; either version allowed; 2023011 exclusive 2028-01-01); DSCSA small-dispenser precision (25-or-fewer pharmacist/technician FTE as of 2024-11-27, through 2026-11-27); F&B v60 exclusive / RTPB v13 required 2027-01-01; current build = "single-path dispatch **preparation** workflow; no verified dispatch pipeline yet"; ownership matrix split (Care meaning · D7 artifact custody · counterparty source records · L2 seam owns no runtime truth/stored proof). (L2 §2/§13/§11.)
- **What did NOT reopen (per Knox):** GCE anchor · pharmacy/vendor cousin model · no-Pharmacy-domain ruling · A14–A20 · C1–C16 · loyalty routing · internal/inpatient deferral · Insurance · Reactor · cross-facet classification · L3 homes · surfaces/named-partner wiring. The architecture is settled for this L2.
- **Transaction:** exactly two files changed (this handoff + the L2). No worksheet/catalog/read-graph/checkpoint/moat/Reactor/merge/rebase/registration/code. New commit SHA + both blob SHAs reported to the Knox thread for the narrow mechanical re-check (a file cannot contain its own commit SHA). Knox's next review checks only these seven groups + accidental collateral; it will not repeat the architecture adjudication. Then the operator decides on the post-L2 rebase + collision-check (§9.7).

### §9.7 — Post-L2 rebase + registration-collision closeout (2026-07-31)
Operator-authorized after Knox **final content-verdict PASS** (seven-group fidelity re-check passed; architecture settled). The branch was rebased from stale base `787c34f` onto live `origin/main` `6588c14` (15 commits replayed with `-X theirs` to preserve branch content, then ONE explicit control-plane correction). **Safety:** backup ref `backup/c4-6-pre-rebase-20260731` @ `b23fe8d` (pre-rebase tip); the remote also still held `b23fe8d`.
- **L2 byte-integrity:** the L2 blob was unchanged **through** the rebase (`fe8c03b…`); only its Status / passport / catalog-meta lines changed in this closeout — **no body change**. All pharmacy + cross-facet artifacts are byte-identical to the pre-rebase backup.
- **Collision ledger — only `04` had a genuine textual collision** (both sides edited the cross-workstream block). Resolved as a **union**: order `9m → 9m-a/b/c` (branch C4.6 routes) `→ 9n` (main's moat route) `→ 9a` (main's, carrying item `(12c)`) `→ 10`; the latent `9m-c→9a` missing-newline defect was repaired. `04` now differs from `origin/main` by exactly the three C4.6 route lines.
- **`01` auto-merged** (branch rows at ~L304 vs main's moat row at ~L335, non-overlapping); main's moat row (#9n) preserved.
- **Stripped (operator-authorized):** 3 dangling non-C4.6 catalog rows the branch was carrying — `v4_C4_4_knowledge_and_source_estate_formulation_plan.md`, `v4_C4_4_prior_depth_and_july_2026_reality_map.md`, `v4_demand_engagement_continuity_gate0_recovery.md`. Their artifacts are untracked here and belong to the **reservoir (C4.4)** / **demand** branches, which re-register their own rows when they land. No C4.4/demand read-graph routes were touched.
- **Untouched:** the moat frame + #9n content, Reactor (frozen), the watch list, `08` open-review, checkpoint #15 / AGENTS, and the **quarantined cross-facet worksheet** (still no registration). Every other branch ref was left exactly in place: `analysis/c4-4-knowledge-source-estate` `febfcf5` · `analysis/agent-runtime-g2-consumption` `febfcf5` · `analysis/demand-engagement-gate0-recovery` `b191d75` · `analysis/external-engagement-gate1-operating-reality` `22bcf30` · `strategy/omni-residual-moat-doctrine` `6588c14` · `main` `6588c14`. Only `analysis/c4-6-g2-external-reality-map` moved (force-push `--with-lease`).
- **Next:** operator decision on whether to merge this branch to `main`. Any substantive L2 change would return to the Knox thread as a bounded diff — **none was made here (status pointers + control-plane union only).**

### §9.8 — Merge-preparation / closeout pass (2026-07-31, post-Knox "MERGE AS-IS: HOLD")
Knox's closeout verdict was **REBASE: PASS / MERGE AS-IS: HOLD** — the rebase was accepted, but three procedural (non-architectural) blockers stood before merge. This pass clears the two mechanical ones and PREPARES the third for operator decision. **The L2 body is unchanged (blob `0f96645`); no architecture reopened.**
- **Blocker 1 — quarantined worksheet cannot ride into main (CLEARED).** `v4_C4_cross_facet_operating_model_classification_reconciliation.md` (its own passport: `not_routed · source_recovery_incomplete · not merge-eligible · "do not merge to main"`) was given a **durable dedicated remote home**: branch **`analysis/cross-facet-operating-model-reconciliation` @ `a526b88`** (off `main` `6588c14`, containing the worksheet **byte-identical** to blob `7546a64`, **unaltered + unregistered**), then **removed from this branch's merge tree** (`git rm`) so a whole-branch merge no longer carries it into main. Provisional classifications are NOT promoted; only THE PLAN (pinned at top) is durable.
- **Blocker 2 — handoff live-state contradictions (CLEARED).** §0/§2/§3/§4/§5/§6/§7/§8 + passport still carried live "branch is stale / no merge / pending narrow re-check" instructions that contradicted the closed/rebased top. Normalized to current state; **§9.1–§9.7 preserved verbatim as history/evidence.** Live boot now routes: L2 CLOSED/ACCEPTED (Knox final PASS) → rebase+collision done (§9.7) → this merge-prep (§9.8) → operator merge/closeout decision.
- **Blocker 3 — checkpoint-closeout (PREPARED, NOT committed; operator decides).** Per the Checkpoint Closeout Rule, Tier-2+ work is not "closed" on main until handoff + AGENTS + read-graph #15 + controlling-plan banner are synchronized. C4.6 is `analysis_nonbinding` and **subordinate to #15** (the `2026-07-19` Task-D/EVRUN-000012 controlling-gate checkpoint), one of several parallel pre-spine inputs — it is NOT the boot-controlling gate. **Two options (operator picks; see §7):** **A** = repoint #15/AGENTS/banner to a C4.6-closed state (Opus assessment: WRONG here — it would demote the controlling Task-D/EVRUN/temporal gate and mislead future boots); **B** = land C4.6 artifacts as nonbinding subordinate inputs with the **canonical checkpoint UNCHANGED** and no claim of global closeout (**Opus RECOMMENDATION**). The exact pointer text for either option is prepared for the operator; **no AGENTS/#15/banner byte is changed in this pass.**
- **Transaction:** files touched this pass — this handoff (normalization + §9.8) and the removal of the cross-facet worksheet from the tree. **No** L2 body change, **no** catalog, **no** read-graph, **no** checkpoint/AGENTS/banner, **no** moat/Reactor/watch-list/open-review, **no** merge. The dedicated worksheet branch was created off `main` and pushed (touches no other branch). Backup ref `backup/c4-6-pre-rebase-20260731` @ `b23fe8d` retained until post-merge verification.

### §9.9 — Merge LANDED on main + post-merge control-plane sync (2026-07-31)
Knox verdict **MERGE EXECUTION: PASS** (main = `44feb15`; L2 blob `0f96645` correct; worksheet absent from main + preserved at `a526b88`; AGENTS byte-identical `7a8a438`; read-graph #15 unchanged). Operator chose **Option B** (artifact-landing, NOT global closeout).
- **Merge:** `--no-ff` merge commit **`44feb1528b27d792315b373b4e08aa7383da067f`** (parents: `6588c14` main + `c75de75` C4.6 tip; merge tree == C4.6 tip tree, i.e. no tree difference). C4.6 artifacts landed as `analysis_nonbinding` **subordinate pre-spine inputs**; NO global closeout claimed. Lineage (adjudication → fidelity → rebase → merge-prep) preserved by the non-squash merge.
- **Checkpoint UNCHANGED (verified on main):** read-graph #15 + AGENTS `Current Checkpoint Handoff` both still `HANDOFF_2026-07-19_taskd_interim_checkpointed_evrun12_active.md`; controlling-plan banner untouched. The controlling gate remains the `2026-07-19` Task-D / EVRUN-000012 / temporal sequence.
- **Post-merge control-plane sync (THIS commit, main-only):** normalized the stale pre-merge/pre-adjudication descriptions in exactly THREE files — **this handoff** (status header + this §9.9); **`01_master_corpus_catalog.md`** (C4.6 rows → final accepted/landed state + a NEW handoff row, reached via #9m, `manifest_action=none`, no new route); **`04_manifest_read_graph.md`** (#9m/#9m-a/#9m-b/#9m-c → final accepted artifact states — L2 = final PASS, C1–C16, GCE anchor, three-plane command/evidence/commit, same-envelope/unequal-assurance, composed admissibility, A14–A20, internal-pharmacy + loyalty deferred; #9m-b marked historical Gate-0 direction that the final L2 supersedes). **The L2 body, AGENTS, read-graph #15, controlling banner, Reactor, moat content, the worksheet branch, and all other branches were NOT touched.**
- **Next action:** operator-controlled selection of the NEXT arc (Task-D final · C4.4 reservoir · C4.5 temporal · demand) — **NOT another pharmacy review.** Pre-rebase backup `backup/c4-6-pre-rebase-20260731` @ `b23fe8d` may now be deleted at operator discretion (post-merge verification passed).

---

<!--
Document identity (passport):
type: handoff (agent-continuity; NOT a canonical checkpoint, NOT authority, NOT schema/contract)
authority: analysis_nonbinding (GRD-036) · agent_read_rule: boot_pickup_for_this_branch · review_gate: user_knox_required
status: artifact_landed_on_main_44feb15 · option_b · L2_arc_content_closed_knox_final_PASS · worksheet_extracted · not_promoted · global_checkpoint_unchanged (updated 2026-07-31: MERGED to main §9.9 + post-merge control-plane sync)
branch: analysis/c4-6-g2-external-reality-map @ c75de75 → MERGED to main @ 44feb15 (Option B, --no-ff); backup ref backup/c4-6-pre-rebase-20260731 @ b23fe8d; cross-facet worksheet on analysis/cross-facet-operating-model-reconciliation @ a526b88
scope: C4.6 arc LANDED on main (Option B); no pharmacy step remains; next action = operator-controlled selection of the next arc (Task-D final · C4.4 · C4.5 · demand); cross-facet worksheet quarantined on its own branch; PLAN pinned
hard-stops: do not re-merge/rollback/re-rebase · do not reopen pharmacy · no promotion of cross-facet answers · no moat/Reactor edits · checkpoint #15/AGENTS/banner stay unchanged (Option B) · concurrency rule
wired: post-merge (2026-07-31) a catalog row was added for this handoff (analysis_nonbinding · artifact_landed_main_option_b · consult_if_routed · reached via #9m, no new read-graph route · global checkpoint unchanged); discoverable as a HANDOFF_ file on main
-->
