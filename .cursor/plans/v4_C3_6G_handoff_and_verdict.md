# v4 — C3.6G: Oncology / Trials **Clinical-Substrate Readiness** Addendum — Handoff & Verdict

> Framing note: earlier drafts mis-titled this a "source-of-truth addendum." Source authority was the **proof mechanism**, NOT the whole test. The real test was clinical-trial **substrate readiness** (§0.5). The v4 agent must inherit the readiness framing, not the narrow one.

Document type: `handoff` + `analysis` (C3.6 arc closing synthesis) · Authority: `analysis_nonbinding` (`GRD-036`) — feeds v4 thesis/contract shaping as an **added C4 input**; does not edit contracts.
Status: `complete_pending_review` 2026-06-14. Gate **G4 (Handoff)** — final gate of the C3.6 addendum. Closes G1 (A/B/C) → G2 (D, 201 rows) → G3 (E/F) → **G4**.
Inputs synthesized: `v4_C3_6A..F` + the Knox G1/G2/G3 patch passes. Reconciled against all 15 domain contracts (read during C3.5 G4.1 + the C3.6 G1 pass). **C3.5 hospital closure stays closed; this addendum resolved G4.1's three homeless areas (P29/P28/P35) in the oncology/trials stress-case.**

## §0 What G4 IS / is NOT
- **IS:** the C3.6 closing **verdict + disposition ledger + the answer to "where is the record of truth housed?"** + the per-system **ownership-ladder runway**. Feeds the v4 continuity agent.
- **IS NOT:** C4 prose · contract edits · a new scenario batch · a new domain declaration. `analysis_nonbinding`.

## §0.5 — LEAD VERDICT: the real C3.6 question (READ FIRST)
**The real question** (not "where is truth housed" — that was the proof mechanism): *Is OMNI architecturally poised to handle the oncology / chemo / clinical-trial world as an environment-of-work, environment-of-proof, and eventual system-of-record for the planes it should own — WITHOUT becoming middleware or corrupting truth planes?*

**What C3.6 actually pressure-tested (the full trial stack, 201 rows — NOT a bookkeeping question):** subject identity / screening / withdrawal · eligibility / biomarkers / prior-therapy / washout · protocol calendar + visit windows · randomization + blinding · chemo ordering / dose-modification / administration · investigational-product custody · labs / path / genomics / imaging / RECIST / central reads · AE / SAE / CTCAE / attribution / reporting clocks · ePRO / eCOA · EDC / eCRF / SDV / sponsor queries / database lock · coverage analysis + research-vs-routine billing · RWE / publication / secondary use · ARIA / OncoEMR / OnCore / EDC / IRT / ePRO / sponsor-system boundaries · IRB / CRO / delegation / site governance · CAR-T + radiopharmaceuticals.

**READINESS VERDICT — three distinct readiness types, DO NOT conflate:**
- **Architectural readiness = YES (the win).** OMNI's substrate absorbs the full trial world with a *bounded, known* delta set — **no domain explosion, no truth-plane corruption**, and the regulatory integrity backbone (ALCOA++ / 21 CFR Part 11) is **REUSE, not net-new**. The trial world fits the model.
- **Build readiness = NO (and out of scope).** Nothing was built. **Current OMNI as-built is NOT clinically-trial-ready.** C3.6 defines the substrate obligations; it does not discharge them.
- **Operational / regulatory readiness = UNTESTED.** Sponsor audit / Part-11 validation / IRB acceptance is a validation exercise, not a desk-check — C3.6 neither tested nor could prove it.
- **Necessary vs sufficient:** C3.6 proved the delta set is **necessary and bounded** (load-bearing ones trace-proven in E). It did **NOT** prove *sufficiency* — that is earned only when the deltas are contracted, built, and run through the C3.5 sim/eval/regression harness. **"Poised" ≠ "done."**

**THE MATERIAL v4 / CONTRACT OUTPUT — the substrate delta package (the real deliverable):**
| # | delta | disposition | why it is load-bearing |
|---|---|---|---|
| 1 | `source_authority_map` | **NET-NEW** field-level index | the spine that lets every other plane be owned without lying (D-135) |
| 2 | `trial_protocol` | **NET-NEW** cross-domain contract (10-teeth core) | owns protocol truth; the trial's governing object |
| 3 | `knowledge_partition` | **NET-NEW** first-class axis | blinding ≠ RBAC (temporal / inference-prohibition / metadata-leak / safety-exception) |
| 4 | `chain_of_identity` | **NET-NEW** narrow | CAR-T / cell-therapy vein-to-vein identity binding |
| 5 | `administration_event` | EXTEND (C3.5 reuse) | arbiter in MAR-vs-note-vs-eCRF dose conflicts (held / partial / interrupted / waste) |
| 6 | IP `custody_chain` | EXTEND | shipped→received→stored→dispensed→administered→returned→destroyed + excursion / lot / sponsor-reconciliation |
| 7 | `outcome_intelligence` / RWE | EXTEND — **own sub-plane** (REV-174) | OMNI **OWNS** RWE (commercial + evidence point), does not coordinate it |
| 8 | coverage-analysis / billing-grid | EXTEND (D6) | research-vs-routine firewall |
| 9 | `trial_subject` linkage | EXTEND (Identity) | subject ↔ patient ↔ de-identified |
| 10 | P35 ownership-ladder | CONFIRM + per-system posture | anti-middleware mechanism per incumbent |

**The six-plane truth model + `source_authority_map` are the ENGINE of this verdict, not a competing headline.** They are *why* OMNI can climb each plane without corrupting care / research / regulatory proof. §1 below states the truth model as **mechanism**, not conclusion.

**Honest bounded gap (composed, NOT separately deep-traced — flagged so we don't fake completeness):** three trial-specific judgment/adjudication patterns — **endpoint adjudication / blinded independent central review (BICR / RECIST committee)**, **AE causality / attribution assessment**, and the **GCP delegation-of-authority log / site-activation state** — were asserted to **compose onto existing primitives** (`attestation` + Observation + `operator_graph` + `trial_protocol` + Federation), not traced row-by-row in E. **Flagged for the contract pass to confirm composition holds; not expected to add net-new objects, but not yet proven.**

## §1 The truth model behind the verdict (the mechanism — binding for v4)
*These are the substrate findings that make §0.5's readiness verdict true. "No single record of truth" is the **mechanism** that makes plane-by-plane ownership safe — not the point of C3.6.*
1. **Where is truth housed? → There is NO single record of truth.** There are **6 plane-specific repositories of record** (clinical-care · protocol · source-data[per-field] · EDC/eCRF · CTMS-operations · sponsor/publication), and **source authority is FIELD-LEVEL and positional** (FDA: source data = the *first durable electronic repository* per element). **Proven by trace, not vibes:** D-135 (locked-DB endpoint vs later clinical correction — both valid in their plane, never force-matched) is the load-bearing row.
2. **OMNI's posture = environment-of-work + environment-of-proof, NOT middleware.** (Anti-diminishment doctrine, binding.) Coordination is the wedge **motion**; environment ownership is the **end-state**. The `source_authority_map` is the *mechanism* for safe plane-by-plane takeover — *because OMNI understands why those systems had to be separate (regulatory lock, blinding integrity, vendor randomization).* **C3.6 thesis line (carry verbatim):** *OMNI does not enter oncology/trials as a passive coordinator between incumbent systems; it enters as the governed environment-of-work and environment-of-proof. Incumbents are rungs on an ownership ladder, not the ceiling. Capability-mode-today ≠ strategic-posture-forever.*
3. **OMNI already speaks the trial-integrity language.** ALCOA++ / 21 CFR Part 11 map cleanly onto existing `amend_not_overwrite` + `trace_lineage` + `attestation`/e-signature + `retention_class`/legal-hold. The regulatory backbone is **reuse, not net-new** — a major finding (the substrate held).

## §2 The arc in one place
| Step | Artifact | Result |
|---|---|---|
| G1 | A (asset inventory) | most of the 15-contract substrate reuses; deltas = trial_protocol, source_authority_map, knowledge-partition, IP-custody, EDC-reconciliation, RWE |
| G1 | B (cited reality map) | FDA eSource "first durable repository" = positional/per-field source authority; OnCore CTMS = ops/control plane (not trial truth); Flatiron VALID ≈ OMNI adoption/eval |
| G1 | C (source-authority/truth-plane map) | the field-level `source_authority_map` + 6 planes + knowledge-partition axis + ownership ladder (the centerpiece) |
| G2 | D (201 rows) | Knox's 200 seeds + D-201 (direct-EDC-source); mapped; ~60 breaker-pool; ~28-row core trace set |
| G3 | E (28 traces) | action-loop proof: HOLDS (integrity backbone) / EXTEND (5) / FORCES-NET-NEW (4); D-135 load-bearing |
| G3 | F (disposition) | confirm/extend/net-new vs 15 contracts; Knox's 6 verdicts; ownership-ladder postures |
| patches | G1/G2/G3 | regulatory-defines→constrains; EDC-first-durable nuance; AE-plane split; breaker-count; D-201; durable-export-role; trial_protocol 10-teeth |

## §3 Disposition ledger (summary; full in F §1)
- **NET-NEW (4):** `source_authority_map` (field-level authority index; ~80% composition) · `knowledge_partition` axis (`blind_state`/`unblinding_event`/`masked_dataset`/`emergency_unblind_authority`) · `trial_protocol` (cross-domain contract, 10-teeth owned core) · `chain_of_identity` (cell-therapy vein-to-vein; narrow).
- **EXTEND (5):** `custody_chain` (IP; reuse C3.5) · `administration_event` (reuse C3.5) · `outcome_intelligence`/RWE (own sub-plane under `REV-174`) · coverage-analysis/billing-grid (D6) · `trial_subject` linkage (Identity + de-id).
- **CONFIRMED (reuse, no new object):** ALCOA++/Part-11 integrity, `payment_care_firewall`, plane-separation, P35 ownership-ladder, RBAC break-glass, candidate≠commit, AI-proposes-humans-commit.

## §4 The `source_authority_map` verdict (the centerpiece object)
**Net-new named cross-domain primitive, built as a field-level INDEX (not a new truth store).** Per fact-element: `source_originator` · `repository_of_record` (positional; first-durable-repository) · `origin_plane` · `extraction` (direct/feed/AI + model_version) · `adoption_authority` · `correction_authority` (amend-not-overwrite) · `audit_provenance` (trace_lineage) · `publication_lineage` · `knowledge_partition`. It is ~80% composition over CNS §7.5.1 (7 ownership dims) + Observation (verification-state) + CM (adoption) + D7 (provenance/retention) — but the **per-field index + positional repository-of-record + publication-lineage** is the net-new spine, and it is the **only thing that can represent D-135** without corruption.

## §5 The 7 key questions — answered (plan §Key-questions + Knox's 6)
1. **Where is truth housed?** → 6 planes, per-fact positional source authority (§1.1).
2. **`trial_protocol` — domain or cross-domain contract?** → **Cross-domain contract** with a 10-teeth owned core (identity/version · I/E · arm/cohort/randomization · visit-schedule/windows · dose-schema · blinding/knowledge-partition · AE/SAE rules+clocks · deviation taxonomy · approval/activation · obligation-graph); composes OFC/CNS/Settings/D7/RBAC/Federation/Observation/D6/P35. **Owns protocol truth; NOT a document-plus-tasks, NOT a standalone domain.**
3. **Need a `source_authority_map` primitive?** → **Yes** — net-new field-level index (§4).
4. **RWE — own plane or under Operating-Intelligence?** → **Own sub-plane under `REV-174` Operating-Intelligence; OMNI owns it** (Flatiron VALID ≈ OMNI's verification/adoption/eval).
5. **P35 modes per system?** → `command_authority_boundary` 8-mode set models ARIA/OncoEMR/OnCore/EDC/IRT/ePRO/sponsor cleanly (read-only / write-back / request-only / bounded-command / human-confirmed / prohibited / break-glass / vendor-operated).
6. **Per-system posture today vs target (anti-diminishment)?** → §6 ladder. Each is a rung, not a destiny; D-173 proves OMNI climbs to workflow-control even when write-back is refused.
7. **What does OMNI own vs reference — today and on the runway?** → today: source-authority-map + care/admin/PRO planes + AE-capture + reconciliation + provenance; runway: system-of-work/record for care+admin+PRO+AE-capture, OWN the RWE plane, swallow CTMS-ops + ePRO, hold IRT vendor-operated; the **locked regulatory dataset stays a distinct plane** (durable export-target ROLE, not vendor-forever — OMNI may eventually own the validated export environment).

## §6 Ownership-ladder runway (anti-diminishment; current → target)
- **OncoEMR / ARIA** → displacement-target (OMNI owns the care environment).
- **OnCore (CTMS)** → partial-swallow (calendar/coverage/accrual; finance may stay peer).
- **ePRO/eCOA** → swallowed into the OMNI patient surface.
- **IRT/IWRS** → vendor-operated-control (blinding integrity; bounded modes).
- **Central lab / imaging** → external-capability(rail) → workflow-control.
- **RWE (Flatiron-class)** → OMNI OWNS (system-of-record).
- **EDC / locked-DB / sponsor portal** → **durable regulatory export-target ROLE — a distinct plane (immutable audit/lineage/inspection), NOT a permanent incumbent-vendor concession; OMNI owns feed+provenance+reconciliation and may eventually own the validated Part-11/GCP export environment.**

## §7 Open-review → route to `08`
- `trial_protocol` owner/home (new contract vs CNS-hosted governance object) — owner decision.
- `source_authority_map` owner/home (cross-domain index — which plane hosts it).
- `knowledge_partition` axis owner (RBAC vs Federation vs new) + emergency-unblind authority wiring.
- RWE/`outcome_intelligence` placement under `REV-174` (confirm at the Operating-Intelligence pass).
- IP `custody_chain` generalization (controlled-substance custody → IP) + `chain_of_identity` for cell therapy.
- Coverage-analysis/billing-grid object in D6 (research-vs-routine; firewall).
- The locked-regulatory-dataset plane formalization (distinct-plane invariant).

## §8 What the v4 continuity agent does next
- Carry C3.6 (this G + A–F) as an **added C4 input** alongside the C3.5 arc (per `v4_C4_readiness_bridge.md` required-inputs).
- Fold the 4 net-new + 5 extend into thesis/contract shaping: biggest touchpoints = a **`trial_protocol` cross-domain contract**, the **`source_authority_map` index** (cross-domain), **`knowledge_partition`** (RBAC/Federation extension), **`custody_chain`/`chain_of_identity`** (OFC/D7/Identity), **`outcome_intelligence`/RWE** under REV-174, coverage-analysis (D6).
- Everything `analysis_nonbinding` until promoted through each domain's review gate (`GRD-036`). Confirmed items need only citation; extensions/net-new go through contract review.
- **No more scenario batches.** The 201-row corpus is seed material for the simulation/eval/regression harness (the C3.5 Build-OS obligation), not a coverage claim.

## §8.5 Artifact Use Map / Non-Graveyard Routing
G is the verdict; **A–F are NOT disposable background — they are evidence, canon-routing, and regression-seed material.** Use them as follows. *(At promotion these get catalog rows + Manifest-Read-Graph routes per §9 — this table is the interim human index that becomes those routes, not a substitute for them.)*

| Artifact | What it is | When future agents MUST open it | How it feeds v4/contracts |
|---|---|---|---|
| **A** — Existing-Asset Inventory | reuse map vs the 15 current contracts | before calling ANY C3.6 delta "net-new" | prevents duplicate canon; routes reuse/extend/net-new |
| **B** — Oncology/Trial Systems Reality Map | cited external reality (FDA eSource / Part 11 / ALCOA++ / RECIST / CTCAE; ARIA/OncoEMR/OnCore/EDC/IRT/ePRO) | when writing regulatory/evidence rationale or source-authority justification | evidence-plane candidates; ontology-from-constraints, NOT vendor marketing |
| **C** — Source-Authority / Truth-Plane Map | the conceptual spine: 6 planes, field-level `source_authority_map`, `knowledge_partition`, ownership ladder | **REQUIRED** before drafting `source_authority_map` / `trial_protocol` / `knowledge_partition` / P35 oncology posture / thesis text | primary substrate map — do NOT reduce C3.6 to G-only |
| **D** — Scenario Library | 201 mapped rows (`C36-D-001..201`) + coverage manifest (15 families) + breaker pool | when building tests, contract examples, sim/eval/regression seeds, or checking a proposed contract handles oncology/trials | **seed corpus, not coverage**; preserve the IDs |
| **E** — Deep Trace Matrix | 28 core breaker traces through the action / source-authority loop | when justifying why a primitive is net-new vs extension (esp. **D-135, D-201**, blinding, IP custody, AE, EDC mismatch) | trace evidence for load-bearing claims |
| **F** — Disposition / Gap Matrix | final confirm/extend/net-new + the 6 verdicts + per-system ladder postures | **REQUIRED** before promoting any C3.6 primitive/extension into C4/contracts | canon-routing ledger; prevents over- and under-claiming |
| **G** — this handoff | executive synthesis + readiness verdict | start here — but do NOT stop here when drafting actual v4/contract material | directional C4 input + acceptance summary |

**Read-depth by task:** thesis summary → **G + C** · contract design → **G + F + C + the relevant E traces** · tests/evals → **D + E** · evidence/citations → **B** · canon reconciliation ("is it already owned?") → **A + F**.

**Hard rule:** never cite **G alone** when drafting C3.6-related contract changes. G gives the *conclusion*; **C/E/F give the mechanism + proof, D gives the regression examples, B gives the external evidence.**

**Seed-corpus rule:** the 201 D rows + 28 E traces are the **oncology/trials seed cases** for the Build-OS scenario/simulation/eval/regression harness (C3.5 §7 obligation) — tagged as C3.6 `source_authority_map` / `trial_protocol` / `knowledge_partition` / RWE / P35 seeds, **NOT** prose-only appendix material. Necessary-not-sufficient seeds, not a coverage claim.

## §9 G4 Stop-Proof (Agent Work Protocol §9)
- **Gate:** G4 (Handoff) — final C3.6 gate. **Status: complete, pending review.** Closes the C3.6 addendum.
- **Result:** the homeless three are placed — **P29 `trial_protocol` = cross-domain contract (10-teeth core); P28 RWE = own sub-plane under REV-174 (OMNI owns); P35 = sufficient + per-system ownership-ladder runway.** Net-new = 4, extend = 5, rest confirmed. Anti-diminishment intact (OMNI = environment-of-work/proof; incumbents = rungs; locked-dataset = durable-role-not-vendor-forever).
- **Headline:** **OMNI is ARCHITECTURALLY poised for the clinical-trial world** — the full trial stack absorbs into the substrate with a *bounded* 10-item delta package (4 net-new + 5 extend + P35 ladder), no domain explosion, no truth-plane corruption, regulatory backbone reused. **NOT build-ready or audit-ready as-built; deltas are necessary-and-bounded, not yet sufficient.** The *mechanism* enabling this is the six-plane / `source_authority_map` model (D-135: no single record of truth) that lets OMNI own the environment plane-by-plane without corrupting care/research/regulatory proof.
- **Files this arc:** A, B, C, D (201 rows), E, F, **G (this)**; plan updated with anti-diminishment + ladder + Knox edits. No edits to locked contracts.
- **Authority:** `analysis_nonbinding` (`GRD-036`). Next: v4 continuity agent (C4 shaping). No more rows.
- **New-artifact completion (Protocol §5):** the C3.6 A–G owe catalog rows + read-graph evaluation at promotion (flagged for the v4 agent's intake; not performed here — `analysis_nonbinding` pending review).
- **Standing flag:** git identity unset (`Bloom Health <…@Blooms-Desktop-11.local>`); workspace path = none (absolute paths used). No commit attempted.
