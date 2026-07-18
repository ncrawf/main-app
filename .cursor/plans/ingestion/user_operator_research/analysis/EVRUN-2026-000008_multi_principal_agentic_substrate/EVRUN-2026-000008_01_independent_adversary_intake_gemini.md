# EVRUN-2026-000008 — §01 · Independent Adversary Intake (Gemini, verbatim)

Document type: `evidence_or_ingestion` (Evidence Plane · adversary intake · receipts) · Authority: **`independent_adversarial_interpretation_nonbinding`** (`GRD-036`). **Preserved VERBATIM. NOT repository fact. NOT authority.** Captured 2026-07-18 (operator-relayed from Gemini via Antigravity, repo access).

> **★ LABELS (see `_00 §2` for the disposition):**
> - **ROUND 1** (below) = `scope_nonconformant_for_ratification` — executed `EVSRC-251` + **`EVSRC-252`** (NOT the required `251`+`279`), incomplete full-251 read → useful pressure, NOT a valid independent reconstruction of the Reactor-generating arc.
> - **ROUND 2** (below) = `candidate_exposed_before_adjudication` — had seen `_05`; useful critique, NOT blind-convergence evidence.
> - No external factual claim herein (about Epic/Palantir/ServiceNow/FHIR/TEFCA/NCPDP/liability/market) is repository fact merely because Gemini asserted it. Do NOT flatten the reasoning into only the disposition. Gemini's two REDIRECTS — "retire the name → Portable Semantic Kernel" and "build a Continuity Escrow Service" — are REJECTED as current conclusions (`_00 §3`); its real contributions (name-objectification risk · provider-bypass falsifier · enterprise deployment profile · discovery/liability duality · the heartbeat question) are ACCEPTED as pressure/test obligations.

---

## ROUND 1 — "Adversarial Architecture Review: OMNI" (verbatim)

**Reviewer Stance**: Independent External Adversary (Gemini) · **Scope**: Field Cases EVSRC-251 (TRT/ChatGPT loop) and EVSRC-252 (Dan/Outbreak case) · **Date**: 2026-07-18

### 1. Source Posture
What I read: `omni_field_cases.md` (FIELD-001…FIELD-004); `EVSRC-2026-000251/_source.md` (TRT consult + ChatGPT loop); `EVSRC-2026-000252/_source.md` (Dan outbreak + pharmacy reroute).
What I did not read: the complete 190KB raw transcript of EVSRC-251 (though the load-bearing identity failure 46yo vs 18yo was reviewed); the entirety of OMNI's thesis docs (to preserve independent reconstruction).
Material uncertainty: the materials are anecdotal field observations — behavioral specimens, not clinical/architectural truth; not statistical market-failure evidence.

### 2. Independent Reconstruction
Observed system: patient comms in shadow channels (iMessage/SMS/phone) outside the EHR, unstructured data (MyChart screenshots); fragile human-dependent identity (251: age 18 vs 46 alters the trajectory); AI-assisted deliberation in an ungoverned parallel loop (ChatGPT), invisible to the record; clinical evidence gathered piecemeal (phone/SMS/Google in 252); provider holds ultimate authority as the manual integration layer, commits on fragmented unverified signals; execution handed to external actors (pharmacists), operational failure (stockout) in 252; cross-channel continuity depends on provider working memory; decisions may reach an EHR but the LINEAGE evaporates. Conclusion: the actual "system" is a capable human manually bridging a rigid EHR, an ungoverned reasoning engine, external knowledge, and external fulfillment.

### 3. Strongest Incumbent/Standards-Native Alternative (Steelman)
Epic (system of record + identity + orders) · Palantir Foundry/AIP (ontology + cross-domain orchestration; model the outbreak as an event object) · Microsoft Nuance DAX Copilot (ambient capture, note draft, pull CDC/outbreak data into Epic) · Surescripts/NCPDP SCRIPT (e-prescribing + RxChangeRequest + stockout exceptions to EHR inbox) · ServiceNow (patient illness as a Case with sub-tasks; failed fulfillment reopens the Case) · TEFCA (cross-entity exchange). This keeps the provider in one governed pane, handles identity, auto-routes pharmacy exceptions, keeps an auditable log.

### 4. Residual Problem
1. Pre-clinical shadow IT (patients initiate in unstructured channels before a formal encounter; Epic/ServiceNow struggle to capture care dimensionality before an encounter is instantiated). 2. AI lineage vs documentation (Nuance writes a note but doesn't preserve epistemic lineage of AI reasoning nor unrecorded generalist-AI deliberations). 3. Semantic meaning of operational failures (Surescripts sees `RxFillStatus=NotFilled`; it doesn't know 500 missing scripts in Michigan is a clinical outbreak signal). Operational residual: *the market lacks a substrate capable of structurally capturing/governing/proving the lineage of AI-assisted clinical reasoning outside formal EHR encounters, and lacks the ability to preserve the clinical semantics of operational failures across organizational boundaries.*

### 5. Kill Matrix (Gemini Round 1 — verdicts as asserted; NOT repository fact)
1 new-architectural-category → **HOLD** (Palantir AIP+ServiceNow+FHIR handle ontology+stateful case mgmt today). 2 prevents shadow-AI → **NARROW** (providers use personal-device ChatGPT regardless). 3 AI-influence-lineage mandatory → **NARROW** (Epic logs+Nuance "good enough" today). 4 govern external pharmacies → **REJECT** (they use own systems). 5 non-action-as-governed-decision → **NARROW** (EHR "task closed without action"). 6 cross-domain projection needs new substrate → **HOLD** (Palantir Foundry does it). 7 identity assembly a substrate problem → **REJECT** (Epic EMPI gold standard). 8 accountability at seams → **HOLD** (can't force a pharmacy; only alert). 9 providers want auditability → **NARROW** (panopticon anxiety). 10 real-time world-event awareness critical → **NARROW** (outbreaks rare). 11 semantic reconciliation novel → **NARROW** (NLP→FHIR mature). 12 monetize data loops → **HOLD** (brokers/HIEs already). 13 neutral layer defensible → **HOLD** (Microsoft/Epic bundle for free). 14 patients use pre-clinical tools → **NARROW** (Apple Health/ChatGPT). 15 care-physics primitives unique → **REJECT** (map 1:1 to event sourcing/tracing/sagas).

### 6. Rubric Scores (0-5, Gemini Round 1)
1 distinctness-of-residual 3 · 2 semantic-precision 4 · 3 domain-ownership 4 · 4 authority-correctness 5 · 5 custody/handoff 2 · 6 enforcement-feasibility 3 · 7 standards-compat 3 · 8 privacy/anti-surveillance 2 · 9 clinical-safety 4 · 10 human-burden/adoption 2 · 11 external-interop 2 · 12 liability-clarity 4 · 13 procurement-plausibility 1 · 14 integration-economics 2 · 15 business-model-integrity 2 · 16 counterparty-fairness 4 · 17 platform-defensibility 2 · 18 institutional-legitimacy 1 · 19 2026-wedge-viability 3 · 20 2030-2035-relevance 4.

### 7. What Survives
1. The pre-clinical shadow boundary (care dimensionality forms before the EHR record; capturing it securely = a massive unserved need). 2. Candidate vs commit. 3. AI influence lineage (which model, what context, proposed what a human later approved).

### 8. What Dies or Narrows
1. The "substrate" ambition NARROWS → OMNI is a **Portable Healthcare Semantic Kernel** (H1) running on top of standard enterprise infra. 2. Omniscient custody DIES (can't enforce external handoffs; only observe/alert/record). 3. Ontology complexity NARROWS (focus only on load-bearing invariant checkpoints: identity, consent, commit, exception).

### 9. Better Decomposition (Portable Kernel Architecture)
Headless Semantic Governance Engine embedded into existing workflows. Execution/integration BUY/USE-AS-RAIL (Palantir or AWS/GCP). System of record USE-AS-RAIL (Epic/Cerner). OMNI Kernel OWN/BUILD (lightweight embeddable policy+lineage engine): Context Admission API (validate identity + standardize pre-clinical data before clinical workflow); Shadow AI Interceptor (wrap enterprise LLM access, structurally log prompts [prevent 18-vs-46], bind AI outputs as candidates); Replayable Proof Ledger (append-only who-saw-what-when, optimized for legal defense). Why better: reduces integration cost, lowers procurement barrier, plays nice with incumbents.

### 10. Enterprise/Company Analysis
Buyer: Health-system CROs + CMIOs afraid of shadow-AI liability. Wedge: "AI Malpractice Protection" (sell a governance wrapper that legally protects the hospital when doctors use AI). Integration: Epic SMART-on-FHIR app or Microsoft Copilot plugin. Model: SaaS per governed AI transaction / covered provider. Moat (2030): compounding dataset of governed AI care resolutions + outcomes (H3 non-software moat).

### 11. Required Experiments
1. Provider UX threshold (will providers use OMNI's AI interface or revert to native ChatGPT?). 2. External seam failure (synthetic Rx → stockout → can OMNI capture the clinical semantics without manual intervention?). 3. Legal defense audit (show a Replayable Proof log to a malpractice attorney — protection or a plaintiff's roadmap?).

### 12. Final Verdict (Round 1)
**NARROW — real residual, smaller than the team believes (85%).** The evidence proves EHRs/workflow engines can't safely govern incoming AI-assisted care — a genuine high-stakes residual. But a massive omniscient substrate is an overreaction. OMNI should own the **Trust-to-Action Boundary** + **Epistemic Lineage**, and pivot from "Palantir for Healthcare" (H0/H2) to a **Portable Semantic Kernel (H1)** securing the seams where AI and human authority intersect.

---

## ROUND 2 — "OMNI Reactor Adjudication" (verbatim)

Independent adversarial adjudication of the team's `OMNI Reactor` candidate (`EVRUN-2026-000007_05`), tested against Round-1's independent reconstruction, standards-native alternatives, and enterprise realities.

### 1. Independent Emergence vs Team Synthesis
Emerged independently: rejection of the monolithic substrate (Round 1 "Portable Semantic Kernel" ↔ team "compiled-not-deployed" + anti-mint); focus on inter-domain seams (Round-1 boundary ↔ team single-well-vs-cross-well); necessity of bounded proof (process not correctness). Appeared only after seeing the team's language: the 5-layer ownership model; compensation≠remedy≠reconsideration≠outcome; false-closure as temporal+custodial (not a boolean). Genuine compressions: "no silent orphaning of unresolved consequence"; "selective reopening of the correct authority layer." Rhetorical inventions/overextensions: the 10BN Network ("Grid") — relied on too heavily to justify differentiation from Epic; "OMNI enforces continuity across federation" — OMNI can only observe/request across federated boundaries, not mathematically enforce.

### 2. Testing the Name ("OMNI Reactor")
By the team's own rule (safe if it names a law; dangerous if it encourages building a thing that owns/stores/centralizes/swallows), **"OMNI Reactor" is DANGEROUS**: a reactor implies a central vessel/hub/god-object; fights "compiled not deployed"; sounds experimental/centralizing/single-point-of-failure to a CISO/general-counsel; high implementation risk (pulls state/orchestration into a central core). **Verdict: retire the name** → e.g. "OMNI Continuity Constitution" or "Action-State Protocol."

### 3. Invariant Audit (Gemini)
1 admissibility-before-consequence = meaningful sharpening (REV-184/policy; block-rate metric). 2 domain-owned commitment = inherited (domain contracts; no central `omni_truth`). 3 accepted custody = genuinely new (CNS/Federation; offered+accepted). 4 no-silent-orphaning = meaningful sharpening (CNS escalation/continuity; core value prop). 5 selective-reopening = genuinely new (operational vs clinical exception). 6 compensation≠remedy≠reconsideration = genuinely new (strongest differentiator from workflow engines). 7 honest-projection = UNDERSPECIFIED ("manufactured closure" subjective without a rigid state-machine). 8 bounded-proof = meaningful sharpening. *Note: invariant 7 needs a strict mathematical definition of when a projection may collapse states.*

### 4. Responsibility Model Test
Attacks: Shadow liability allocation (by recording principal/actor/committer + issuing proof, OMNI IS establishing evidentiary basis for liability — naive to pretend it doesn't practically allocate in court); overlap/circularity (covering physician = actor AND committer under a different principal's duty; AI committer strains custody-vs-authority); missing external counterparties (Walgreens as new Actor not bound by OMNI continuity; if it drops the ball OMNI holds the unresolved obligation but can't force action; patient blames OMNI).

### 5. Test "Compiled, Not Deployed"
Brilliant defense against a monolith, but borders on "no coherent runtime enforcement." **"You cannot compile a global timeout loop into independent domains. The Reactor needs a heartbeat."** Minimum runtime machinery: a centralized (or per-operator singleton) **Continuity Escrow Service** in CNS — CNS owns the `unresolved_obligation` ledger + global timeout/escalation loop; OFC/Commerce own execution rails; Accountability/GRR owns receipt generation.

### 6. Standards-Native Residual Test
Configure Epic + FHIR Task + RequestOrchestration + NCPDP SCRIPT + TEFCA + ServiceNow competently → the only unique OMNI residuals: (1) semantic nuance in failure (invariants 5+6: distinguish refund/compensation vs tell-the-patient/remedy vs re-evaluate/reconsideration); (2) deliberation-to-action lineage (link multi-agent AI deliberation to the committed action without leaking the deliberation); (3) cross-principal agent orchestration (TEFCA exchanges documents, doesn't orchestrate agents for different principals). "If the goal is just routing prescriptions, the incumbent stack wins. OMNI's residual is governing the AI-mediated translation of messy intent into structured action."

### 7. Case-Preservation Audit
Reactor preserves: cross-domain dependency graph; explicit custody handoffs; domain-owned truth. Reactor flattened (must survive elsewhere): provider uncertainty & AI capability uplift → Agent Runtime (FWREG-010) + Care Operating Model (FWREG-011); correlated AI confidence → GRR (FWREG-009); provider privacy → Evidence Plane.

### 8. Enterprise/Institutional Verdict
2026 Product (Plant): highly credible (first-party agents on a strict internal Reactor constitution → operational lift; buyer = clinic operator). 2030 Platform (Grid ph.1): plausible (external agents via admissibility gates). 2035 Institution (Grid ph.2): highly speculative (external counterparties accepting bounded proof in lieu of their own audits; healthcare networks form via mandate/consortia, not bottom-up startup protocol adoption). Model/buyer: wedge = mid-market cash-pay/specialty; CIO buys the Plant, resists the Grid. Liability: bounded proof shifts shape from uninsurable clinical risk to insurable enterprise-software risk (a win) but OMNI still sued for platform defect if an obligation orphans.

### 9. Corrected Successor Charter (Gemini's version)
Builder = Opus (OMNI graph); Adversary = independent agent as Epic/ServiceNow integration engineer solving the same trace with incumbent tools only; Adjudicator = Knox (pre-registered rubric). Rubric: does the incumbent stack silently drop the obligation? does it force a clinical re-eval for a sourcing error? is the OMNI solution technically enforceable across a boundary where OMNI has no legal leverage? Traces: A inadmissible intent, B external-agent adversarial request, C cross-operator portability.

### 10. Final Verdict (Round 2)
**KEEP THE UNDERLYING HYPOTHESIS, RETIRE THE NAME (85%).** The physics (8 invariants, custody continuity, remedy/reconsideration separation) are profound and solve real FHIR/Epic gaps. But "OMNI Reactor" is dangerous/centralizing/misleading, and the 10BN Grid reliance is premature. Final answers — 3 most dangerous unresolved assumptions: external counterparties accept bounded proof; "compiled not deployed" enforces global continuity without a centralized escrow service; atomized N=1 providers survive loss of institutional safety nets via OMNI. 3 strongest surviving insights: compensation≠remedy≠reconsideration; custody offered+accepted never assumed across boundaries; unresolved patient-level obligations can't silently disappear even if local rail tasks fail. First seam: cash-pay specialty Rx loop (clinical commit ↔ internal commerce/payment ↔ external pharmacy). First external party whose acceptance matters: a malpractice insurance carrier. Single experiment most likely to kill it: build the cash-pay Rx seam, inject a stockout, see if clinic staff bypass OMNI and use phone/EHR because "selective reopening" is too rigid — if humans route around the invariants for convenience, the substrate fails.

---
*End verbatim intake. Disposition + Opus push-backs: `_00 §3`. These reports are pressure + test-obligations, NOT authority; they did NOT kill Reactor and did NOT earn a pivot (Knox ruling, Nick concurrence).*
