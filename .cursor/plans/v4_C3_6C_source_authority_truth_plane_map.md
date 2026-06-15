# v4 — C3.6C: Source-Authority / Truth-Plane Map + Ownership Ladder (the centerpiece)

Document type: `analysis` (C3.6 arc — G1 reality-field, artifact C; the centerpiece) · Authority: `analysis_nonbinding` (`GRD-036`)
Status: `populated_G1_pending_review` 2026-06-14. Built on A (asset inventory) + B (cited reality map). **C-strength gate: if this is mush, D becomes oncology fan fiction — so this is written to be the strong spine D pressure-tests.**
Answers the central question — *where is the record of truth housed?* — with the honest answer: **nowhere single; per-fact, positional, governed.**

## §1 The model (3 claims, each grounded in B)
1. **Source authority is FIELD-LEVEL, not system-level.** A "trial patient record" is not one truth; it is hundreds of facts, each with its own originator + repository-of-record (FDA: source data = the *first durable electronic repository* the element is transferred to [B-A2]). → the object is **`source_authority_map`**, keyed per fact-element, NOT a `source_data_system`.
2. **It maps onto OMNI's existing per-event-ownership (CNS §7.5.1, 7 dimensions) + the Observation 3-gate + CM adoption** — OMNI already speaks ALCOA++ via `amend_not_overwrite` + `trace_lineage` + `attestation` + `retention_class` [B-A3]. So this is **mostly composition of existing primitives**, with a small net-new spine (the map object + the knowledge-partition axis).
3. **There are 6 truth planes; facts FLOW across them with authority preserved, never flattened.** care → (source feeds) → EDC/eCRF → (lock/adjudicate) → sponsor/publication; protocol governs; CTMS operates. OMNI's wedge is to *own the map + the flow*, then climb the ownership ladder plane-by-plane.

## §2 The `source_authority_map` — per-fact-element schema (candidate net-new spine)
For each clinical/trial fact, OMNI records:
- **`fact_key`** — the data element (e.g., `chemo_admin.dose`, `lab.ANC`, `response.RECIST`, `ae.ctcae_grade`, `randomization.arm`).
- **`source_originator`** — the authorized originator/system that first records it (FDA "authorized source data originator" [B-A1]).
- **`repository_of_record`** — the first durable electronic repository (the positional source-of-truth [B-A2]); the rung OMNI holds here is the ownership-ladder posture.
- **`extraction`** — manual / electronic-feed / AI-extracted (+ `model_version`); AI-extracted carries the VALID-style validation state [B-B3] = OMNI's Observation `verification_state` + CM candidate.
- **`adoption_authority`** — who adopts it as care-truth (clinician, CM `clinical_adoption_state`) vs trial-truth (PI/monitor) — **adoption ≠ source-verified** (Observation 3-gate).
- **`correction_authority`** — amend-not-overwrite + reason-for-change + attributable audit (ALCOA++ [B-A3]) = D7/CM.
- **`audit_provenance`** — `trace_lineage` + `cns_decision` + e-signature/attestation (Part 11).
- **`publication_lineage`** — whether/how the fact flows to the locked EDC → SAP → endpoint → submission/publication (the proof chain).
- **`knowledge_partition`** — blind/masked state for this fact (see §4).

## §3 The 6 truth planes + per-fact worked map (the spine)
Plane definitions (refined per Knox: CTMS = operations, not universal truth): **(1) Clinical care** (ARIA/OncoEMR/Epic-onc) · **(2) Protocol** (`trial_protocol`) · **(3) Source-data, per-element** (MAR, lab feed, imaging read, ePRO, IRT) · **(4) EDC/eCRF** (study dataset; often the first-durable-repository for trial-specific fields) · **(5) CTMS operations/control** (OnCore: calendar, accrual, finance, coverage-analysis) · **(6) Sponsor/publication** (locked DB, SAP, adjudicated endpoints, submission).

| Fact (`fact_key`) | Source originator (plane 3) | Repository-of-record | Adoption authority | Correction | Knowledge-partition | OMNI ladder posture (today→target) |
|---|---|---|---|---|---|---|
| `chemo_admin.dose/route/time` | MAR / oncology administration record (ARIA) | care plane (then eCRF) | RN+pharmacist verify; provider order | amend-not-overwrite | unblinded (open-label) / **masked** (blinded) | reconciliation→**system-of-record** (`administration_event`) |
| `lab.ANC` | lab analyzer → result feed | lab system (then care + eCRF) | clinician review/adopt | corrected-result lineage | usually open | read→workflow-control (Observation owns value) |
| `response.RECIST` | imaging read workflow (radiologist; ± AI-assist) | care plane read + eCRF | radiologist sign + provider adopt | addendum (amend-not-overwrite) | often **central-read blinded** | reconciliation→system-of-work (P30 read-lifecycle) |
| `ae.ctcae_grade` | clinician/trial assessment (from symptom obs) | care plane + EDC AE form | PI/clinician adopt | amend + reason | open (grade) | workflow-control→system-of-record |
| `ae.sae_report` | derived from AE + seriousness | EDC safety + sponsor/IRB | PI sign; sponsor clock | amend + audit | open | obligation+escalation (CNS) |
| `randomization.arm` | **IRT/IWRS** | IRT (authoritative) | system-assigned | n/a (immutable) | **blinded → masked_dataset** | **vendor-operated-control** (strict capability mode) |
| `pro.nausea_score` | **ePRO** (patient-reported) | ePRO (then eCRF) | patient-source; clinician interprets | patient self-correct (Mode-J analog) | open | **swallowed → patient surface** (Observation `source=patient`) |
| `eligibility.biomarker` | path/genomics report | care + screening | PI eligibility adopt | amend | open | screening pre-screen (Intake 1K.7 extend) |
| `ip.lot/custody` | pharmacy/IRT (drug accountability) | IP custody chain | pharmacist; sponsor reconcile | amend + chain | open | **net-new breaker** (custody_chain + P35) |
| `endpoint.PFS/OS` | adjudicated from multiple facts | **locked EDC → SAP** | sponsor/adjudication committee | locked (post-lock = formal) | **blinded until unlock/lock** | **regulatory/export-target** (OMNI feeds, does not own the locked DB) |
| `billing.designation` | coverage analysis (MCA) | CTMS billing-grid → EHR routing | research-vs-routine determination | amend + rationale | open | **swallow ops** (coverage-analysis object + `payment_care_firewall`) |

**Reading of the map (Knox-corrected 2026-06-14):** OMNI can become **system-of-work / system-of-record for care + administration + PRO planes**, and for **AE *capture* + *care-facing AE assessment*** — but **AE truth is split**: raw symptom (patient/clinician observation) → CTCAE grade (clinician/trial assessment) → SAE report (sponsor/IRB obligation) → causality attribution (PI/sponsor adjudication) → eCRF AE field (study dataset). **So OMNI owns AE capture + care-facing assessment, while sponsor/EDC/adjudication AE outputs remain export/regulatory planes with preserved lineage** (do not overclaim "SoR for the whole AE plane"). OMNI should **own the RWE/outcome plane** (B-B3 VALID ≈ OMNI adoption/eval) and **swallow CTMS operations** (calendar/coverage/billing-grid), hold **IRT as vendor-operated** (blinding integrity).

**EDC / first-durable-repository — precise rule (Knox-corrected):** do NOT say "EDC owns truth." (a) For **direct-entered trial-specific fields** (typed straight into EDC/eCRF), EDC **may be the first durable source repository** for that element. (b) For **transcribed/extracted-from-EHR/MAR/lab/imaging/ePRO** data, EDC is the **study-dataset representation, NOT the original source** — the source stays upstream and EDC must **preserve lineage back to the actual source element**. (c) The **locked DB / submission dataset is regulatory/export truth, not automatically source truth.** So the honest durable role is narrow: the locked regulatory dataset / submission plane is a **durable export-target ROLE (a distinct plane), NOT a permanent incumbent-vendor concession** — OMNI feeds + reconciles + preserves provenance (and may eventually own the validated Part-11/GCP-grade export environment), and is source-of-record only where it is the actual point of capture. This is governed, plane-by-plane ownership — *not* coordination between incumbents.

## §4 Knowledge-partition / blinding — a FIRST-CLASS axis (net-new; composes with visibility_grant/RBAC)
Blinding is **not "just trial protocol"** and **not just visibility** — it is *who may know what truth, when, under what safety exception.* Candidate primitives:
- **`blind_state`** per fact/dataset (`open` / `single-blind` / `double-blind` / `masked`).
- **`knowledge_partition`** — the rule of which actor-roles may resolve which `fact_key` (care team sees care facts but NOT `randomization.arm`; statistician sees masked dataset; sponsor sees aggregate).
- **`masked_dataset`** — a projection where blinded facts are withheld/coded.
- **`unblinding_event`** — a governed, audited state change.
- **`emergency_unblind_authority`** — maps to RBAC **`break_glass_session`** + T4 attestation [A §1: RBAC owns break-glass teeth]; logged, reason-coded, notifies sponsor/IRB.
**Why first-class:** it cross-cuts every plane and is a *safety + integrity* invariant, not a UI concern. It composes with `visibility_grant` (Federation) + RBAC but adds the *temporal + safety-exception* dimension visibility alone doesn't carry.

## §5 Per-system ownership ladder (the anti-diminishment column) — current → target
"External capability" is a rung, not a destiny. Posture is a **hypothesis to pressure-test in D/E/F**, not an assumption.

| Incumbent system | Plane | Current rung (realistic entry) | Target rung | Classification |
|---|---|---|---|---|
| **OncoEMR / ARIA** (onc EHR/OIS) | care | 1–2 read/reconcile | 5–7 system-of-work → displacement | **displacement-target** (where operator adopts OMNI care env) |
| **OnCore** (CTMS) | ops/control | 2–3 reconcile/workflow | 6 system-of-record for ops (calendar/coverage/accrual) | **partially swallowed** (finance/invoicing may stay peer) |
| **EDC / eCRF / locked DB** | study dataset | 1–4 read→write-back | 4 governed write-back; OMNI feeds + preserves lineage | **regulatory/export-target** (long-lived; first-durable-repository ONLY for direct-entered trial-specific fields; for transcribed/extracted data it is a study-dataset representation with lineage to the real source) |
| **IRT / IWRS** | randomization | 1 read | 1–3 bounded | **vendor-operated-control** (blinding integrity) |
| **ePRO / eCOA** | patient-reported | 3 source | 5–6 swallowed | **displacement-target** (OMNI patient surface) |
| **Sponsor / CRO portal** | publication/ops | 1 export | 4 governed export | **regulatory/export-target** |
| **Central lab / imaging** | source-data | 1–2 feed/reconcile | 3 workflow-control | **external-capability(rail)** → workflow-control |
| **RWE plane (Flatiron-class)** | outcome | n/a | 6 system-of-record | **OMNI aims to OWN** (P28; VALID ≈ OMNI adoption/eval) |

## §6 Where this lands the homeless three (preview of F)
- **P29 `trial_protocol`** — needed as a real object (arm/I-E/visit-window/blinding/dose-schema/AE-rules/sponsor-IRB-obligations). Open question for F: **full domain vs cross-domain contract** over OFC+CNS+Settings+D7+RBAC+Federation. Leaning cross-domain *contract* with a small owned core (protocol state + knowledge-partition), since most of it composes existing primitives.
- **P28 RWE / outcome-intelligence** — its own plane; OMNI should OWN it (VALID = OMNI's adoption/eval). Routes to `REV-174` Operating-Intelligence as the home.
- **P35 external-capability** — the attachment mechanism for every row in §5, each carrying a `command_authority_boundary` mode + a **target rung** (so external ≠ forever).
- **Net-new spine objects this arc proposes:** `source_authority_map` (field-level) + `knowledge_partition`/`blind_state` axis + IP `custody_chain` + a `coverage_analysis`/billing-grid object. Everything else = confirm/extend (per A §1).

## §7 Anti-diminishment statement (binding; carry to G)
The `source_authority_map` is **not** a confession that OMNI is middleware. It is the **mechanism by which OMNI safely takes over truth plane by plane** — *because it understands why those systems had to be separate (regulatory lock, blinding integrity, vendor randomization) in the first place.* OMNI enters as the **environment-of-work and environment-of-proof**; incumbents are rungs, not the ceiling. The one honest durable role is the **regulatory locked dataset / submission plane** — a distinct plane (immutable audit/lineage/inspection), **NOT a permanent incumbent-vendor concession**; OMNI owns the *feed + provenance + reconciliation* and may eventually own the validated export environment itself.

## Stop / authority — G1 COMPLETE, stop for trifecta review
- G1 artifacts A + B + C are populated. **STOP for trifecta review before G2/D** (per gate discipline + the C-strength gate).
- Review asks: is C strong enough to generate D without fan fiction? Is the 6-plane + field-level map right? Is the knowledge-partition axis correctly first-class? Are the ladder postures defensible hypotheses?
- `analysis_nonbinding` (`GRD-036`); reconciles to existing draft contracts; no contract edits. Standing flag: git identity unset.
