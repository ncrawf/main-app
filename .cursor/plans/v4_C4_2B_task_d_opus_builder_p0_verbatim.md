# v4 — C4.2B — Task-D Opus Builder P0 (VERBATIM PRESERVATION)

Document type: `analysis` / `architecture_pressure_test` · Authority: `analysis_nonbinding` (`GRD-036`).
Status: `interim_builder_population` · `not_final_task_d` · `not_admission_verdict` · `preserved_verbatim`.
Provenance: byte-for-byte preservation of the frozen Opus Task-D Builder population packet — local source `taskd_working/TASKD_population_packet_FROZEN_2026-07-19.md` · SHA-256 `4838bb9998f28a888dd6ccdee0dc16a4f3b05ba7ec7c3fc66a2b56403b3c5596` (39,345-byte source; interim P0). **Not silently improved, shortened, normalized, or converted to a final result.** Read order: C4.2A (terminus) → C4.2B (this) → C4.2C. This is the executive/interim synthesis, NOT the final Task-D evidence/mechanism body (that is still owed — see C4.2A §5).
Review gate: Nick + Knox + Opus.

---

## PRESERVED P0 PACKET (verbatim)

# TASK D — Enterprise Full-Stack Adversarial Pressure Test — OPUS BUILDER POPULATION PACKET (FROZEN for Knox review)
# analysis_nonbinding (GRD-036). Local, uncommitted. NOT a repo write. NO spine prose. NO contract/Reactor/checkpoint edits. Opus assembles; Knox adjudicates the §7 verdict (Task-D §C.2).
# Consumes v4_C4_2 method (frozen shell) at repo commit 52757072bfdae44069c97820aa31414e79644839. Primary-source external verification performed 2026-07-19.
# The preserved Gemini-B artifact (scope_nonconformant_partial_adversary) was NOT rewritten; it is treated as adversary PRESSURE, not evidence. Every external claim below is independently supported by official primary material or flagged inferred.

## §0 — Verdict surface (proposed; Knox adjudicates)
**Proposed §7 admission verdict: `SPINE_READY_WITH_NAMED_RECONCILIATIONS`.**
- No incumbent (Palantir/Epic/Microsoft-Nuance/ServiceNow/Salesforce), and no verified composite, ships OMNI's **hard care invariants** as native primitives → OMNI's care-semantic kernel is a genuine *design-distinctive* package. No hard invariant was falsified BY an incumbent, and none of OMNI's own contracts was shown to collapse a hard invariant → not `NOT_READY`.
- BUT: (a) the kernel is **design/paper, not production** (C4.3 design-PASS; contracts/build/external all OPEN); (b) **H0 (vertical-config) is materially stronger than Gemini claimed** — Palantir/ServiceNow ship the governed-action+lineage machinery natively, so the honest open question is the **size + assurance burden + portability of the healthcare-semantic layer**, not whether the substrate machinery exists; (c) **H1 (portable kernel hosted on an enterprise substrate) is credible** and must stay open per-layer; (d) the **seam-tax / H2** and **external accepted-custody** questions are NOT paper-settleable — they route to the real external-seam pilot (EVRUN-008 R3). → not clean `SPINE_READY`.
- **The four strategic options remain OPEN** (OMNI-owned substrate · portable semantic kernel · hosted-on-enterprise · hybrid-by-layer). **Do NOT choose HOST_ON Palantir** (or any) here.

## §1 — Source posture
- **Read/consumed (repo, commit 5275707):** `v4_C4_2` frozen method (§B–§J) · `v4_C4_3` correction-continuity test (Law 10.1 + O1–O22 + fixtures + M-ledger) · 15/15 domain contracts · `OMNI_System_Map_vNext` + Surface/Projection maps · Platform/Accountability/Agent-Runtime/Care loop captures · REV-184 §0 (verified) · fixture carriers HCASE-061, C36-D-073, EVSRC-251 (TRT), EVSRC-252 (Dan-diarrheal), Fixture-5/GRR · `EVRUN-2026-000004`. Source-set completeness confirmed in-repo (0 missing named artifacts).
- **External primary-source verification (2026-07-19):** Palantir Foundry/AIP docs + blog; ServiceNow docs/product/ServiceNowDocs mirror; Epic (epic.com, open.epic.com, fhir.epic.com); Microsoft/Nuance Dragon-DAX (microsoft.com/support.microsoft.com/learn.microsoft.com); Salesforce Health Cloud dev docs; HL7 FHIR (hl7.org/build.fhir.org). Citations in §3/§4.
- **Adversary input:** Gemini-B = `scope_nonconformant_partial_adversary` — used as hypothesis pressure ONLY; not scored as evidence; not rewritten.
- **NOT inspected:** vendor-gated Epic UserWeb, unpublished implementation configs, real runtime behavior of any stack (all external-acceptance/performance claims remain unproven by design).
- **Honesty gate applied:** OMNI's own advantages are labeled design-vs-production; unbuilt OMNI semantics count only as DESIGN advantages (Task-D Axis-3 rule).

## §2 — Fixture manifests (5 fixed; each through the longitudinal second loop)
Exact carriers locked: **Fixture 1 = EVSRC-2026-000251 (TRT)** · **Fixture 2 = EVSRC-2026-000252 (Dan acute-diarrheal — NOT the TRT Dan)** · **Fixture 3 = HCASE-061** (order→verify→administer→result canonical chain) · **Fixture 4 = C36-D-073** (sponsor lot recall → subjects/doses/inventory/EDC blast-radius across 5 planes) · **Fixture 5 = GRR** (cross-domain report + provider AI-wrong flag + near-miss + out-of-band-while-OMNI-down).
Each manifest carries: starting_state · participants/principals · source_artifacts · event_sequence · active_uncertainty · required_authority · expected_committed_outputs · required_obligations · failure_injections · prohibited_semantic_collapses · proof_requirements · closure_condition · **second loop** (action→execution→proof→follow-up→outcome→learning→next-resolution).
- **F1 TRT:** the 18-vs-46 identity mis-seed (ungoverned screenshot loop reasoned on a false age) · PHI exfiltration to a generalist AI · candidate≠commit at each provider decision · controlled-substance authority gate · no-record/false-closure at "labs ordered" · multi-channel continuity (iMessage+MyChart+PCP/Quest). Prohibited collapses: AI commits a clinical/controlled-substance decision · lab image → clinical truth without adoption · cross-patient (Trent) reference bleed. Second loop: lab order → Quest/PCP fulfillment → results → Tx decision → monitoring → learning; the 18yo AI reasoning must remain historically stale, never silently overwritten.
- **F2 Dan-diarrheal:** live external outbreak signal (candidate, not authority) · unresolved dx branches (Bactrim = broad/empiric/targeted simultaneously) · execution exception (pharmacy stockout) → reroute holding treatment intent · pharmacist "500 scripts" claim atomized by authority · Gate-1 context-admission ≠ Gate-2 action-authorization · false closure at "called in." Second loop: Rx called → filled? → started? → improved? → testing-if-not → dx-change → prior reasoning intact → learning.
- **F3 HCASE-061:** 4 actors / 4 authorities / 4 events (MD order · pharmacist verify · RN BCMA administer · lab result → provider adoption). Prohibited: order→administration collapse; result posted without adoption. Second loop: admin → response-lab fulfillment → proof → review obligation → outcome → dose/pathway learning; chain reconstructable without rewriting prior events. (OMNI: physics-holds / inpatient-BCMA-object-missing = build-now-if-inpatient.)
- **F4 C36-D-073:** sponsor lot recall → lot→subject→dose→inventory→EDC blast-radius across planes 1/2/3/4/6 without force-matching; custody_chain + recall-blast-radius (OFC/D7/P35/EDC). Prohibited: silent overwrite of pharmacy source on monitor correction; lot conflation. Second loop: recall → quarantine → cohort-identified proof → subject contact → exposure/remedy → recall-effectiveness/regression learning; prior admin records stay historically intact.
- **F5 GRR:** correlated multi-symptom report (refill-missing + double-charge + app-crash + AI-wrong-dose) + provider AI-wrong flag + near-miss + OUT-OF-BAND capture while OMNI is down → snapshot → classify (care/ops/commerce/build/security) → route by domain/authority/severity/radius/duty-to-act → parent matter + domain children → mandatory clocks → reporter live-projection → incident→problem→change→VERIFICATION → failure→eval/regression/runbook. Prohibited: AI silently closes/downgrades; one "case closed"; ACK=custody. Second loop: contain/remedy → proof(snapshot+lineage) → reporter+affected-party follow-up → recurrence check → eval/regression/runbook without rewriting history.

## §3 — Comparator capability profiles (six-axis grammar; correct test modes)
Modes: Palantir/Epic/Microsoft-Nuance = **standalone-stack**; ServiceNow/Salesforce = **component-and-seam**; Amazon/Stripe/Waymo-Tesla/NASA-ATC = **pattern-transfer (bounded)**; + the **composite**. Axes: R·E·A·X·P·L profile · implementation-class · maturity(competitor_actual / competitor_plausible_24mo / OMNI_actual / OMNI_target) · config-burden · accountability(operational / legal-evidence / redress) · compounding.

### 3.1 Palantir Foundry/AIP (standalone)
- **R·E·A·X·P·L:** strong-R (ontology objects/links/actions — native), strong-E (cell/marking/purpose security enforced at runtime for humans+agents — native; [palantir.com/docs object-permissioning, checkpoints, aip-architecture]), strong-A on *platform* authority (role/marking/purpose, on-behalf-of agent authz), partial-X (actions + staged approval + Checkpoints; agent "stage-and-approve" is blog-level), strong-P (action log + edit history + data lineage; "decision lineage" is vendor-blog-asserted), weak-L for *clinical* learning (generic eval, no care-outcome loop).
- **impl-class:** governed-write machinery = NATIVE_PRIMITIVE; clinical semantics = CUSTOM_APPLICATION.
- **maturity:** competitor_actual = SHIPPED substrate; competitor_plausible_24mo = a large healthcare ontology + action + checkpoint package (feasible, heavy); OMNI_actual = design-only (C4.3); OMNI_target = contracted C5.
- **config-burden:** `large_fragile_custom_application` — the six hard care invariants (below) are all custom ontology/action modeling; safety semantics live in app logic, not platform default.
- **accountability:** operational=structural (action log/edit history); legal-evidence=preserved; redress=custom.
- **compounding:** static substrate; OMNI's compounding (governed care-outcome replay/network) not matchable by Palantir alone.
- **NOT native (verified):** clinical adoption gates · patient/surrogate authority as an authz principal · REV-184 governed clinical resolution (case≠signal≠resolution) · selective CLINICAL reopening · care-obligation continuity · separate remedy/disclosure horizons. → **Palantir is the closest substrate to build OMNI ON, not a clinical governance system.**

### 3.2 Epic (standalone)
- **R·E·A·X·P·L:** strong-R/strong-P on the clinical record (native record + 750+ FHIR APIs, 8B+ calls; Care Everywhere/TEFCA via Epic Nexus QHIN), strong-E within one org, **A/X = draft-for-sign** (Art/DAX draft notes + queue orders + extract diagnoses → clinician review+sign; Penny billing = narrow guardrailed autonomy roadmap ED/Radiology Nov-2026), **P/history = preservation-by-append** (`open.epic PAT_ADDENDUM_INFO` append table; FHIR `entered-in-error` status not delete).
- **impl-class:** record+exchange+AI-draft = NATIVE; cross-operator governed resolution = NOT_SUPPORTED natively (Nexus is currently FHIR responder-only).
- **maturity:** competitor_actual = SHIPPED, deepest installed clinical stack + real distribution/implementation muscle; OMNI_actual = design-only.
- **config-burden:** to reach cross-operator correction-continuity = `not_achievable_without_re-platforming` (single-tenant-per-org record).
- **accountability:** operational=strong within org; cross-operator custody=not modeled.
- **compounding:** massive installed-base + standardization flywheel (real, governance-compatible — cf. REV-201).
- **Correction of the Gemini claim:** Epic does NOT destructively overwrite history and does NOT structurally auto-commit AI (see §4).

### 3.3 Microsoft / Nuance Dragon-DAX (standalone-adjacent)
- **R·E·A·X·P·L:** strong ambient capture/note-gen/diagnosis-aware/multilingual/marketplace; **A/X uniformly draft→clinician Sync→place** ("you cannot create new orders"; note "does not back-update"). impl-class = CONFIGURED (embedded in Epic Hyperdrive SmartSections). maturity = SHIPPED. **NOT a care OS / not a system of record / not an authority engine.** Every commit path clinician-gated.

### 3.4 ServiceNow (component-and-seam)
- **R·E·A·X·P·L:** strong-E/A/P on AI-asset + operational governance (AI Control Tower: discover/inventory models/agents/datasets/prompts/MCP; Veza least-privilege access/dependency graph; AI Gateway prompt-injection+PII controls; kill switch) + mature ITSM incident→problem→change→release→case + HCLS Service Management app. impl-class = NATIVE (governance/workflow) + industry app.
- **maturity:** SHIPPED (AI-governance-of-enterprise is its strongest lane).
- **NOT owned (from ServiceNow's own materials):** clinical truth · patient authority · medical adoption · longitudinal care semantics ("not to automate care … what gets in the way"). "ServiceNow = IT tickets" is a strawman; but Accountability-Loop `TAKE_AS_IS` is wrong — **at most adapt/use as rail**.

### 3.5 Salesforce Health Cloud (component-and-seam)
- FHIR-R4-aligned relationship + care-coordination model (Case/CareTask/CarePlan/Goal/HealthCondition); rich CRM graph + case→task orchestration. **Explicit boundary (dev docs): clinical data is replicated, read-only, view-only — "the source system remains the system of record."** → NOT a clinical system of record; NOT an adoption/authority source. "one-interaction→many-intents" is not a documented named primitive (inferred).

### 3.6 Pattern donors (bounded mechanisms only)
- **Amazon** — Act-loop/idempotency/exception-rerouting (F2 pharmacy reroute; F4 recall). **Stripe** — idempotency + immutable audit + money-state-separate-from-meaning (F1/F5 billing correction ≠ care). **Waymo/Tesla** — safety-case/autonomy-graduation/sim≠truth + OTA recall≈model rollback (F4/agent). **NASA/ATC** — telemetry≠command + go/no-go authority gates + handoff discipline (F3/F5). Take the mechanism, reject the ownership model.

### 3.7 Fixture × comparator replay (hard-invariant checkpoints; where the exact semantic survives/collapses)
| Fixture | Palantir | Epic | MS/Nuance | ServiceNow | Salesforce | Composite (P+Epic+DAX+FHIR) |
|---|---|---|---|---|---|---|
| F1 TRT (identity-correction, adoption, controlled-substance gate, continuity, proof) | represent+enforce w/ large custom clinical app; no native adoption/patient-authority | record+draft-for-sign holds *within org*; cross-channel/pre-patient loop not native | ambient draft only; no authority | out-of-scope (component) | view-only; not authority | capability-union plausible; **seam: identity-binding + candidate≠commit + controlled-substance authority across vendors = unproven** |
| F2 Dan (live signal, exec exception/reroute, mixed-authority claim atomization, Gate-1≠Gate-2, false-closure) | actions+lineage strong; claim-atomization + Gate-1/Gate-2 = custom | order draft/reroute within org; external pharmacy custody not native | draft only | incident/problem lifecycle ≈ ops reroute, NOT clinical branch reopen | n/a | reroute representable; **false-closure-avoidance + "sent≠fulfilled" + rationale-preserved-across-reroute across the seam = unproven** |
| F3 HCASE-061 (order≠verify≠administer≠result, 4-authority chain, adoption) | ontology can model 4 events+authz; native | **native strength** (CPOE/pharmacy/BCMA/eMAR); real shipped | assists documentation only | n/a | n/a | Epic strong standalone; cross-operator not required here — OMNI's edge is thin on the single-well inpatient chain (honest loss condition) |
| F4 C36-D-073 (lot recall blast-radius across 5 planes, custody_chain, no force-match) | lineage+actions strong for cohort reconstruction; clinical-trial plane semantics custom | limited (single-org record; EDC/sponsor planes external) | n/a | asset/CMDB blast-radius ≈ analog, NOT clinical/subject custody | n/a | **cross-plane custody without force-matching + amend-not-overwrite across EDC/care/sponsor = unproven at the seam** |
| F5 GRR (cross-domain report, OOB-while-down, decompose-over-domains, verification-before-closure) | ontology+actions can model; OOB-while-platform-down is the anti-pattern for a platform-hosted loop | n/a (not an integrity-loop product) | n/a | **strongest incumbent analog** (incident→problem→change→verify + AICT); but owns ops truth only, not clinical duty/remedy/disclosure horizons | case/task analog; not clinical | ServiceNow-anchored composite is credible for ops; **clinical-duty + patient-remedy + disclosure horizons + decomposed-not-central = OMNI-distinctive (design)** |

**Adjudication rule applied (§C.2):** no incumbent produced an UNSAFE COLLAPSE of a hard invariant on OMNI's behalf; incumbents mostly **fail-safe** (block/lack native primitive → escalate to custom build), which is a *comparative capability gap*, not a hard-fail. OMNI's own contracts did not collapse a hard invariant at any fixture (design-level). The decisive gaps are **maturity** (incumbents shipped, OMNI design) and **seam-tax** (unproven either way on paper).

## §4 — GEMINI-B CLAIM AUDIT (adversary claim → primary-source status → corrected formulation → H-effect)
| gemini_claim | claim_location | official_primary_source | mechanism_actually_supported | mechanism_NOT_established | status | corrected_formulation | effect_on_H0–H3 |
|---|---|---|---|---|---|---|---|
| candidate≠commit needs a massive custom Palantir app | Gemini §Palantir | palantir.com/docs (actions, checkpoints, action-log) | actions + staged approval + checkpoints + edit history are native | that it needs a *massive* app | **QUALIFIED** | native mechanics exist; the burden is a *healthcare-semantic package*, size unproven | H0↑ (config more credible) |
| Palantir correction-of-correction is uniquely hard | Gemini §Palantir | edit-history API + action log | recursive edits + version history native | uniqueness | **UNSUPPORTED** | representable natively; clinical-reopen semantics are the custom part | H0↑ |
| Palantir lacks selective CLINICAL reopening (OMNI-unique) | Gemini | docs (no clinical primitive) | Palantir has no native clinical reopen | that OMNI's is *automatically* an advantage | **QUALIFIED** | true Palantir has no clinical reopen; OMNI's is design-not-built | H2 (design edge) / H0 open |
| Palantir needs only modest config for C4.3 | Gemini | — | — | not shown | **UNSUPPORTED** | construction burden unquantified; likely large + assurance-heavy | H0/H2 open |
| Palantir/FHIR-Epic integration depth (Gemini inferred) | Gemini | — | — | not verified | **UNSUPPORTED (inferred)** | do not rely | — |
| Epic destructively overwrites correction history | Gemini §Epic | open.epic `PAT_ADDENDUM_INFO`; FHIR `entered-in-error` (hl7.org lifecycle) | append/addendum + status-not-delete | overwrite | **CONTRADICTED** | Epic preserves history by append; correction = addendum/`entered-in-error` | removes a false OMNI edge |
| Epic external-AI output structurally auto-commits | Gemini §Epic | epic.com Art/AI-Charting; support.microsoft DAX FAQ | draft-for-review-and-sign; "cannot create new orders" | structural auto-commit | **CONTRADICTED** (QUALIFIED only for Penny billing, guardrailed, non-record) | AI is candidate/draft; only narrow org-gated billing autonomy | removes a false OMNI edge |
| Epic cannot sandbox external AI | Gemini | (no support) | — | not shown | **UNSUPPORTED** | not established | — |
| Composite possesses every required capability | Gemini §composite | — | capability *union* plausible | possession as *one system* | **UNSUPPORTED (capability-union fallacy)** | union ≠ integrated OS; seam-tax untested | H2 central + open |
| Composite definitively fails as integrated OS | Gemini | — | — | not demonstrated | **UNSUPPORTED (hypothesis)** | requires full seam replay (not paper-settleable) | H2 open |
| Research-recall fixture "holds perfectly" | Gemini | — | — | not demonstrated | **UNSUPPORTED** | F4 is a BREAK-carrier-absent for all; unproven | — |
| Liability becomes untraceable at the seam | Gemini | — | architecture preserves/loses *evidence* | that architecture *decides* liability | **OVERSTATEMENT** | OMNI preserves operational-accountability evidence; liability = legal determination | strategy, not verdict |
| ServiceNow GRR can be taken as-is | Gemini appropriation | servicenow.com (ops-only boundary) | strong ops incident→problem→change + AICT | clinical duty/remedy/disclosure ownership | **REJECT (take-as-is)** | at most ADAPT/USE_AS_RAIL; clinical semantics stay OMNI | H1/H2 |
| ServiceNow = IT tickets | Gemini | AICT + Veza + AI Gateway docs | enterprise AI-governance + lifecycle | the strawman | **CONTRADICTED** | ServiceNow is a serious governance/ops reference | H0↑ (control-plane credible) |
| Dragon = mere speech capture | Gemini | microsoft.com Dragon Copilot + marketplace | ambient + diagnosis-aware + app marketplace | reduction to speech | **QUALIFIED** | more than a pipe; still draft-only, not authority | — |
| OMNI should host on Palantir | Gemini | — | H1 is credible | as a *settled recommendation* | **STRATEGIC HYPOTHESIS, not decision** | keep open; decide per-layer post-comparison | H1 credible |
| Pure-software moat is falsified | Gemini | — | — | not established | **NOT ESTABLISHED** | software semantics partly copyable; kernel+governance is the design edge | H3 relevant |
| Non-software moat is supported | Gemini | — | plausible | no compounding evidence supplied | **PLAUSIBLE, UNPROVEN** | needs evidence/adoption/network data | H3 open |

## §5 — Appropriation ledger (pattern-level)
- Palantir **Checkpoints/PBAC** → ADAPT_TO_CARE (purpose-of-use justification, but tie to care obligation, not just audit). Palantir **action-log + edit-history** → ALREADY_OURS-analog (D5/D7/CM append + trace_lineage); ADAPT the runtime-enforcement rigor. Palantir **decision-lineage** → WATCH (vendor-asserted; validate mechanics). Palantir **runtime authz for humans+agents** → ADAPT (compose with clinical adoption authority, which Palantir lacks).
- ServiceNow **AICT / Veza access-graph / AI Gateway** → ADAPT_TO_CARE for the §B AI-substrate / Agent-Runtime governance + Accountability inward loop (use enterprise control patterns; keep clinical duty/remedy/disclosure OMNI-owned). ServiceNow **incident→problem→change→verify** → ADAPT (map to GRR decomposed-over-domains; reject central-case ownership).
- Epic **append/addendum + entered-in-error + Care-Everywhere/TEFCA** → USE_AS_RAIL / STANDARDIZE (interop rails; correction-preservation validates OMNI's amend-not-overwrite law). MS/Nuance **ambient capture** → BUY/WRAP (do not rebuild ambient). Salesforce **case/task graph** → REJECT as truth owner; WATCH as coordination pattern. **FHIR 202-Accepted custody + Provenance/AuditEvent immutability** → STANDARDIZE (directly grounds O10 ACK≠custody + O1 history-preserved). [NOTE — superseded by C4.2A §2.5 correction: the FHIR custody law is THREE-level (transport ACK ≠ message custody ≠ domain/consequence custody); a `$process-message` 202 establishes MESSAGE custody only, never consequence custody. This P0 line's "202-Accepted custody" is imprecise; the C4.2A correction governs.]

## §6 — OMNI deficiency register (brutally honest)
- **Maturity:** incumbents SHIPPED (record, exchange, ambient, AI-governance, ITSM, distribution, implementation muscle); OMNI = design/partial. Unqualified deficit.
- **Single-well loss (F3):** on the single-vertical inpatient chain, a well-built Epic (or Amazon-style single-well) reproduces the trace; OMNI's edge is thin there — win between wells, not inside one. [NOTE — narrowed by C4.2A §3: this is fixture-specific to HCASE-061, NOT a universal "only win between wells" GTM law.]
- **Config-burden unquantified:** the healthcare-semantic package size on a Palantir-class substrate (H0) is NAMED but not measured → the moat's strength is literally unknown until scoped.
- **External custody / seam-tax / cohort-reconstruction performance:** unproven (paper-unsettleable) → real-seam pilot.
- **NAMED-not-CONTRACTED-not-PROVEN:** REV-184 governed resolution, care-obligation continuity, correction-propagation graph (C4.3 Law 10.1), patient/surrogate authority — all design, none built.

## §7 — Strategic-layer ledger (OWN/BUILD/BUY/HOST_ON/WRAP/PARTNER/USE_AS_RAIL/STANDARDIZE/REJECT) — DECISIONS DEFERRED, options kept open
- Governed care-semantic kernel (adoption · patient/surrogate authority · REV-184 · continuity · correction-impact · remedy/disclosure horizons) → **OWN** (no incumbent has it; it is the design-distinctive core).
- Ontology/action/lineage substrate → **OPEN: OWN vs HOST_ON Palantir vs HYBRID** (H0/H1 undecided — do NOT pick here).
- AI-asset/agent-runtime governance (discovery/inventory/access-graph/gateway/kill-switch) → **ADAPT/USE (ServiceNow-pattern)**, likely BUY/WRAP not rebuild.
- Ambient capture → **BUY/WRAP** (MS-Nuance). Record/exchange rails → **USE_AS_RAIL/STANDARDIZE** (Epic/FHIR/TEFCA). Commodity data-engineering/case-mgmt → **do NOT rebuild without an ownership reason**.
- Enterprise ITSM lifecycle → **ADAPT** into GRR (reject central-case ownership).

## §8 — Moat falsification (per proposed moat)
- **"Governed care-semantic kernel is unique"** → survives design-level (no native incumbent primitive), copyability-half-life unknown; FALSIFIER = a competitor ships clinical adoption + patient authority + governed resolution + continuity natively, OR OMNI's own kernel proves unbuildable without a god-object (C4.3 §11 falsifier #1). Status: **design-supported, production-unproven.**
- **"Cross-well seam preservation (H2)"** → the strongest potential moat AND the least proven; FALSIFIER = the composite preserves one patient-level consequence across rival wells without OMNI. Not paper-settleable → real-seam pilot.
- **"Bounded/insurable liability + regulator/insurer pull"** → pilot hypothesis, unproven (Reactor R3 concurs).
- **"Non-software moat (evidence/adoption/network)"** → plausible, no compounding evidence supplied.

## §9 — H0–H3 assessment (posture after full population; Knox adjudicates final)
| Hypothesis | Posture | Basis |
|---|---|---|
| **H0 vertical-configuration** | **STRENGTHENED, unresolved** | Palantir/ServiceNow ship the governed-action+lineage machinery natively; open question = healthcare-semantic package size + assurance burden (not whether machinery exists) |
| **H1 portable semantic-kernel on enterprise substrate** | **CREDIBLE / materially supported** | Palantir especially could host OMNI's governed-action semantics; two-way substrate test favors "run ON" as a live option |
| **H2 coherent OMNI operating system (seam-tax decisive)** | **UNRESOLVED (paper-unsettleable)** | capability-union ≠ integrated OS; seam preservation of one patient-level consequence across wells requires the real seam |
| **H3 non-software moat** | **PLAUSIBLE, UNPROVEN** | evidence/adoption/network compounding not demonstrated |
**Combination read (proposed):** most likely **H1 + H3 with an H0 pressure**. [NOTE — RETRACTED by C4.2A §4 as premature per Knox regrade: H1 requires preservation demonstrated on >1 substrate (not shown); H3 requires demonstrated compounding (not shown). Correct keeper line: "the normative care-semantic composition survives; physical realization and durable moat remain OPEN." Do NOT treat "H1+H3" as an earned verdict.]

## §10 — Proposed §7 admission verdict (for Knox)
**`SPINE_READY_WITH_NAMED_RECONCILIATIONS`.** Named reconciliations the spine must carry (not resolve away):
1. State the care-semantic kernel as **design-distinctive, not production-proven** (no incumbent has the hard invariants natively; OMNI has not built them).
2. Keep the **substrate-ownership decision OPEN** (H0/H1/hybrid) — the spine must NOT assume "replace Palantir"; per-layer OWN/HOST_ON/WRAP is a C5 + strategic decision.
3. Route **seam-tax (H2) + external accepted-custody** to the real external-seam pilot (EVRUN-008 R3) — the spine names them as unproven, not as won.
4. Carry the **maturity deficit** honestly (incumbents shipped; OMNI design/partial).
5. Correct the record: the incumbents are stronger than the Gemini-B pass implied (Epic preserves history + drafts-for-sign; ServiceNow is a serious control plane; Palantir has native governed-action machinery) — the moat is the **healthcare-native governed composition + proven cross-authority operation**, not "we have objects/graphs/actions."
[NOTE — this proposed verdict is NOT issued. Per the operator override + Knox interim review, NO final §7 verdict has been rendered; final population + verdict are deferred. See C4.2A §0/§5.]

## §11 — Preserved-Gemini statement
The Gemini-B artifact remains classified `scope_nonconformant_partial_adversary`, preserved verbatim, NOT rewritten, NOT used to issue a §7 verdict, and NOT credited with additional reading. Its surviving useful core (H1 pressure; don't-rebuild-commodities; seam-tax as the central test; OMNI maturity deficit) is carried above as pressure that this Opus population independently re-grounded on primary sources.

# END TASK D BUILDER POPULATION PACKET (proposed; Knox adjudicates). No repo write. No spine prose. No contract/Reactor/checkpoint edits.

---
## Preservation note
The bracketed `[NOTE …]` insertions above are the ONLY additions to the frozen P0 body; they are non-destructive pointers to the C4.2A corrections (FHIR three-level custody · single-well narrowing · H1+H3 retraction · no-verdict-issued) required by Knox's hard review, added so a future reader is not misled by a superseded P0 line. The original assertions are preserved intact beside them. The verbatim source of record remains the frozen local packet SHA-256 `4838bb99…`.
