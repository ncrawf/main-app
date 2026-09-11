# ECB Gate 0 — OMNI's Care–Capability Operating Model

Document type: `plan_or_roadmap` — **Gate-0 estate-reconnaissance and subject-definition carrier**
Authority: `analysis_nonbinding` (`D0THES-GRD-036` — capture broad, promotion gated). **This carrier originates no doctrine, mints no domain, and accepts no architecture.**
Status: `G0_R2_AUTHORED_PENDING_NICK_KNOX_REVIEW · arc_not_started · fai_untouched · catalog_registration_OWED`
Revision: **R2** — amends R1 (`60619c4f`) against the Knox review of 2026-09-11. Amendment log at `§22`.
Domain(s): `cross_domain` · `architecture_governance` · `federation` · `rbac_authority` · `cns_orchestration` · `ordered_fulfillment` · `d7_documents_consent` · `observation_measurement` · `clinical_memory` · `trials_research`
Lifecycle role: names the subject, freezes the proof obligations, records the recovered inheritance and the frontier burden, and defines the discriminating tests — **before** any architecture extraction. It is the object Nick + Knox review to decide whether this arc opens.
Source-of-truth relationship: **owns nothing.** Every recovered claim points at its native carrier and that carrier's authority and maturity. Arc state belongs to `§1`; nothing else may restate it.
Supersedes: nothing.
Superseded by: none.
Manifest action: `add_tier2` — **PROPOSED, registration OWED** (`§20`).
Review gate: `user_knox_required`

---

## §0 — R2 amendment summary: what the review changed

R1 recovered real prior work and then drew the wrong conclusion from it. The Knox review is **accepted on nine of nine points**, and its five repository-factual claims were **independently verified here before amendment** — all five held. One additional defect was found during that verification that neither review caught.

### §0.1 The conclusion R1 got wrong

R1 reasoned: the EXISTS-AS pass found most ingredients already named, therefore the assignment is smaller and centred on closing P35, and *"the 2035 cases come free."*

**That does not follow, and the sentence is withdrawn.** Existing primitives reduce **reinvention**. They do not reduce the **proof burden for a materially different operating regime**. A routine case can demonstrate that inheritance is useful; it cannot demonstrate that a design survives a regime change. R1's own matrix showed nearly every recovered concept at `analysis_nonbinding` with `No` in the implementation column — the honest reading of that evidence is **the vocabulary exists and the operating model does not**, which is close to the opposite of what R1 concluded.

The operator's correction — *"do NOT let us take our teeth off the 2035 meat ... in favor of 'oh we figured out botox inventory during p35 or whatever'"* — is upheld. Present applicability and frontier adequacy are now **separate conclusions** (`§18.2`); `S0` tests the former and **cannot veto** the latter.

### §0.2 The bigger miss: R1 recovered the mechanism and lost the frame

R1's headline was P35. The review located a closer antecedent in the **same C3.7 source** R1 had already mined for the permission stack:

```100:100:.cursor/plans/v4_C3_7_oncology_trial_access_wedge_plan.md
- **SUPER-FRAME recognized (Opus — broaden, but BOUND):** C3.6+C3.7 are slices of a larger **"tumor-biology → care → translational evidence → research → outcomes" longitudinal governed loop** (the dragon Nick named: OMNI as the environment connecting patient biology, care, models, pharma, outcomes — without lying to the patient or selling them to a sponsor). **Recognized as a v4/contract finding + a Future-Work-Registry seam; NOT built in C3.7.**
```

P35 governs **how an external capability participates across a boundary**. This governs **how biology, care, experimental evidence, intervention opportunity and outcome interact over time.** The second is the subject the operator raised. R1 recovered the smaller mechanism and left behind the larger idea the mechanism exists to serve.

**The additional defect, found while verifying the review and reported by neither side.** The super-frame was recorded as *"Recognized as a v4/contract finding **+ a Future-Work-Registry seam**."* **That FWREG row was never written.** `future_work_registry.md` contains `FWREG-001`–`020` and **zero** keyword matches for `tumor`, `translational`, `biospecimen`, `organoid`, `PDX` or `model_to_trial`. The *mechanism* did survive, in open-review row **`D0THES-REV-190`** (translational/model bridge; `leave-door-open, NOT build`; owner Nick + architecture_steward; open since 2026-06-14). **The super-frame loop itself has no row, no route and no owner.** So "the dragon Nick named" was recognised, promised a durable home, and then lost — which is precisely why R1 did not find it, and is a live instance of the estate's recurring loss pattern rather than a reader error.

### §0.3 Corrections to R1's own factual claims

| R1 claim | Status after verification |
|---|---|
| *"Nothing in the read graph routes to P35"* | **FALSE — corrected.** Route `10` (C3.8) names `agent-runtime/P35/tools` as one of six axes; route `9a` is the canonical v4-authoring input set carrying the C3.5–C3.8 termini. The true, narrower finding: **there is no dedicated task-entry route** — nothing triggers on *"I am doing external-capability work, load P35."* Route `10`'s trigger is *"any C3.8 enterprise-AI convergence finding,"* which a Care or Pharmacy author would not fire. Restated at `§20.3`. |
| `Manifest action: add_tier3` | **INVALID — corrected to `add_tier2`.** The `manifest_action_enum` in `00_architecture_memory_control_plane.md` is `none · add_tier0 · add_tier1 · add_tier2 · demote · supersede_link · review_queue · retire`. **There is no `add_tier3`.** Noted separately: `HANDOFF_2026-08-09_foundational_architecture_arc_opened.md` carries the same invalid value — a pre-existing estate defect R1 inherited by copying FAI's pattern. Recorded as `D0ECB-REV-003`; not this arc's to fix. |
| *"A layered containment model does not exist"* | **TOO BROAD — corrected.** C4.6 Rx L2 already carries the governed return path including recall, and decisively: *"**Delivery may close one fulfillment episode while refill, monitoring, adverse-event, recall and continuation obligations remain open** — the longitudinal medication relationship is not the same object as a single fulfillment."* It also separates counterparty communication capacities so that *"promotional or aggregate commercial outreach may never masquerade as patient-specific care evidence, fulfillment state, or clinical recommendation."* The surviving claim is narrower: **no generalised model, and no exposed-cohort identification.** |
| Integrator vacancy blocks the catalog row | **OVER-INHERITED — corrected.** `AGENTS.md`: *"a standalone lane requires **no** launch envelope, integrator, or parent integration transaction."* The real and sufficient reason to serialize is the **verified collision** — the FAI branch has modified all three governance files — not an inherited global prohibition. Restated at `§20.1`. |
| P35 boundary quoted from F4 | **NEEDS F5's QUALIFIER — corrected at `§5` row 2.** F5 explicitly supersedes F4's over-crystallization: *"OMNI does **not assume** it owns the mechanics or the native UI ... The mode is a per-system, per-context governed decision — **not a thesis assumption.**"* R1 risked restoring F4's absolute sentence as a permanent ownership ceiling. |
| *"Incumbents do not have this problem; the absence of a name is evidence of an empty seat"* | **WITHDRAWN.** It built an artificially weak opponent. Palantir's own ontology architecture covers data, logic, action, security, write-back and feedback loops. The better distinction is at `§3.5`. |
| *"Roughly two-thirds already exists"* | **WITHDRAWN — no denominator, no coverage measure.** Replaced by the five-level maturity ladder at `§5.0` and per-gap verdicts at `§5.2`. |
| `H4`: no mechanism, therefore *"no lawful path"* | **WITHDRAWN.** A legal conclusion does not follow from a repository gap. Restated at `§9`. |
| FAI G1 ordering as **the** cause of Outputs 1–3 | **SOFTENED.** A missed source-floor check is documented; that it was the sole cause is not established. The mechanical rule at `§19.2` is retained on its own merits. |
| *"P35 gets a home or the arc failed"* | **WITHDRAWN — it contradicted this carrier's own permission to re-defer `REV-188`.** A valid outcome may distribute P35 semantics across existing owners without creating one new owner or object. |
| Minimum scenario set claimed *"all eight axes at their extremes"* | **FALSE — corrected.** It dropped `S5`, the only scenario maximising `adaptivity`. `S5` restored to the minimum set (`§16`). |

### §0.4 The one place this carrier holds a narrower line than the review

The review asks that `NEW_DOMAIN_REQUIRED` remain fully available. It does — the verdict stays in the frozen vocabulary and the arc may reach it. **The burden stays high**, because `D0THES-GRD-026` and `D0THES-GRD-035` are active guardrails that were each caught three times by human review before existing, and *"intervention"* is exactly the shape that swallows Identity, RBAC, Federation, D7, Observation, Clinical Memory, OFC and D6. This is a burden of proof, not a pre-decided answer, and it is symmetric: `§15` now also forbids **requiring** a universal exposure record before source-preserving alternatives have been tested.

---

## §1 — Arc state *(this section owns it; nothing else may restate it)*

```
Arc key:                 ECB
Object of focus:          OMNI's Care–Capability Operating Model
Arc state:               GATE_0_R2_AUTHORED — NOT STARTED, NOT ACCEPTED
Gate 0 verdict:          none issued (Nick + Knox review pending)
Architecture accepted:   none
Domain minted:           none
FAI relationship:        separate bounded object; FAI G1 untouched
Next act:                Nick + Knox accept / amend / reject this carrier
Authorized on rejection: revise this carrier, or close the arc. Nothing else.
```

**No lane, agent, evidence run, scenario execution or extraction pass is authorized by this file.**

---

## §2 — Repository, base, branch and review-object posture

| Field | Value |
|---|---|
| Repository | `ncrawf/main-app` |
| Branch | `cursor/ecb-g0-reconnaissance-6a09` |
| Base | `main` @ `2629099e0a611510e52a34c6479f6353bf11a0d5` |
| R1 head / blob | `60619c4f492a1d373429b4810a1ee7e4d2116bea` / `64d4bc3e124af5d884b6259dcabd6b5c1790bc65` |
| Branch inheritance | **NONE.** Deliberately based on `main`, not on `cursor/fai-g1-operating-model-4933` |
| Review object | this file at the pushed head of this branch; R1→R2 is a single-file diff |

**Why a `main` base.** The current Tier-0 checkpoint exists only on the FAI branch. Basing there would have imported 157 commits of frozen FAI work into this arc's diff and put this arc's commits on the branch holding the frozen Authority object. The cost is `main`'s stale boot pointer (`§20.3`), handled by pinning rather than inheriting.

### §2.1 Source pins — FAI-branch artifacts consumed read-only

| Artifact | Pin |
|---|---|
| FAI branch head at recon time | `65f310e0b40901cb4f34bb607d92b37ecf9be043` |
| `HANDOFF_2026-08-23_fai_g1_paused_by_operator.md` | blob `46c0e0037976637720f8720e5770f6acdb34c84a` |
| `v4_FAI_omni_architecture_arc_execution_plan_2026-08-09.md` (R8) | blob `ba4c967a1ca883775d481f4dc07643c2c930668f` |
| `v4_FAI_G1_operating_model_carrier_2026-08-10.md` | blob `9835715ed8795a14df395d9f85c8b44fa3af88ea` |

**Verification receipt.** The G1 carrier blob resolves to `9835715e` — exactly the blob the pause checkpoint `§2` pins as identical across all three of its recorded heads. **Frozen Authority content has not drifted.** Verify future re-entry by carrier blob, never by branch-head equality.

---

## §3 — The subject, named now

### §3.1 Object of focus

> **OMNI's Care–Capability Operating Model** — the operating model by which longitudinal care and biological, computational and physical capability providers **discover** relevant possibilities, **work from authorized context**, **develop and evaluate** candidates, **establish bounded commitments**, **execute**, **observe consequences**, **revise**, **transfer** and **end participation** — without losing patient rights, independent authority, or continuity of the care relationship.

Adopted from the Knox review, substantively unchanged. The operator's objection to deferring this is upheld: *"i do not want to wait until halfway thru an arc to name the object of focus, as though we need more discovery or time to identify it."* **`Q-ECB-NAME-1` is CLOSED.** Arc key `ECB` is retained as the mechanical key; visible title is `ECB — Care–Capability Operating Model`.

**This names an architectural subject.** It is not a domain, a universal lifecycle, a control plane, a database object, a product brand or a central executive. Naming an operating model does not decide whether its realisation needs a new record, several seam contracts, existing records with stronger relationships, or some combination. That is an arc output.

**Required disambiguation, because this estate has been bitten by exactly this.** *"Capability"* is already load-bearing in **two different senses**: RBAC's `capability` (a permission atom held by an actor) and P35 / GCE's `capability` (a thing an external system can do, admitted under a posture). **In this arc's title, "capability" means the second.** Conflating them would be a textbook `D0THES-GRD-035` collapse — RBAC's capability is one composer of authority, not the external participant.

### §3.2 The two directions of inquiry

R1 graded the arc only on broken guarantees and smallest repair. That finds deficiencies and misses opportunities the architecture never promised to support. The inquiry is **two-directional**, and the arc is graded on the meeting point.

**From care outward** — what should a patient, care team or operator be able to **discover, request, evaluate, commission, monitor, refuse, transfer or revisit**? A care team needs more than *"the vendor is integrated"*: current capability, limitations, eligibility, evidence, timing, responsibility, alternatives, actual acceptance, and recourse when the arrangement fails.

**From capability inward** — what does a laboratory, manufacturer, model provider, device operator or research programme need to **know, prove, accept, return and continue to honour**? A producer needs more than *"the chart"*: a defined phenotype, a qualified specimen, confidence in a particular measurement, documented exclusion criteria, permission for one use, a receiving organisation able to administer the result, and a party that will perform follow-up.

**The hard middle is not context flowing outward. It is a governed relationship in which both sides' claims, limitations, commitments and changes stay legible — including when one side is developing a new capability rather than fulfilling an existing one.**

### §3.3 Non-goals

1. **Not a new domain.** `D0THES-GRD-026`. Already settled for P34 (physical automation → EXTEND via Identity + RBAC + P35), pharmacy (*"Pharmacy is NOT a new OMNI-owned unified lifecycle or truth-owning domain"*) and the agent-native edge (WI9: *"NOT a new arc, NOT MCP-as-doctrine, NOT a new domain"*).
2. **Not a god-object or a new control plane.** `D0THES-GRD-035`.
3. **Not a reopening of FAI.** Graduated contact ladder at `§3.4`.
4. **Not a claim that OMNI owns therapy design, manufacturing or physical actuation** — nor the artificial retreat that OMNI may never operate a capability or a surface. Per F5: **a per-system, per-context governed decision.**
5. **Not a patient marketplace, lead-broker or paid-placement ranker** (`§14`).
6. **Not a literature or clinical-evidence corpus build** — `D0THES-GRD-041`; that is `FWREG-006`, status `watch`.
7. **Not a product roadmap, GTM plan or wedge selection** (`§19.1`).
8. **Not an accepted ontology for "intervention"** — whether it survives as an architectural noun is an output.

### §3.4 Relationship to FAI — graduated, not binary

Authorized by the pause checkpoint `§6`: unrelated exploration *"remains its own evidence, comparator or bounded strategic object ... does not reopen FAI ... **merely by being interesting**."*

R1 treated any contact as an interrupt candidate. **Five distinct postures, only the last of which stops work:**

| Posture | Permitted? | Handling |
|---|---|---|
| **Consult** a frozen FAI candidate as context | Yes | cite with its hold status |
| **Test a hypothesis against** it | Yes | record the test; the result binds nothing |
| **Depend on its unaccepted semantics** for a conclusion | Only if declared | record candidate reliance + affected scope; the conclusion inherits the hold |
| **Propose a change** to it | No | route to Nick as a proposal; do not write it |
| **Genuine blocking contradiction** in foundational architecture | — | `FAI_INTERRUPT_CANDIDATE`; stop **that finding**, not the arc |

**Mere relevance is never an interrupt.** No Selection Accountability amendment or promotion, no `Q-DL18-4` adjudication, no Output-4 consolidation, no FAI write, no PR #17 or #19 merge is authorized.

**`Q-ECB-6` — the real dependency.** `Q-DL18-4` (delegated-authority grain) is FAI's paused next act and sits under this arc's command-boundary work. This arc **describes** the grain requirement and **does not choose it**. If a finding cannot be stated without choosing, that finding stops and reports; unrelated work continues.

### §3.5 "Fusion layer" and "surviving relationship" are not competitors

R1's framing — *they fuse data, we preserve relationships* — is withdrawn. Palantir's ontology architecture already covers integration of data, logic, action and security, including operational write-back, physical-world workflows and feedback. Treating that as passive fusion is a steelman failure.

**The actual distinction:** *what does the operating model preserve when the participants do not share one controlling institution, one incentive, one source of authority, or one willingness to remain?*

OMNI must assemble a coherent situation from distributed information — that part is real and is the fusion job. The differentiating question is what happens when a manufacturer refuses OMNI's outcome-return terms; a treatment centre accepts the patient but not OMNI's custody model; a vendor employs the prescribing clinicians; an outside system returns a valid result but will not expose its proprietary intermediate process; or a patient simply wants to leave. **What may OMNI legitimately know, require, promise and do in each case?** Those answers determine the commitments the system may represent and the claims its interfaces may make — which is why this is architecture and not messaging (`§19.1`).

Withdrawn with it: R1's implication that these actors could not safely participate without OMNI. **Reliance has to be earned by making the arrangement better, not assumed because the problem is important.** A patient-directed departure may be entirely legitimate; the failure mode is abandoned follow-up, suppressed alternatives, unauthorized reuse or a misleading continuity claim — not lost revenue.

---

## §4 — Source and authority posture

**Read fully by this author:** this carrier; the Knox review; `HANDOFF_2026-08-23_fai_g1_paused_by_operator.md`; `HANDOFF_2026-08-09_foundational_architecture_arc_opened.md`; `HANDOFF_2026-08-09_work_horizon_closed_insurance_gate2_startable.md`; `06_guardrail_antipattern_digest.md`; FAI R8 `§3.9.1`–`§3.9.3`; `00_document_governance_and_taxonomy_2026-05-19.md` `§3`; read-graph Route Entry Contract + Major-Arc Intake routing + Tier-0 list.

**Read at specific passages, verbatim-verified by this author (not delegated):** `v4_C3_5F5` P35 rename `§`; `v4_C3_7_oncology_trial_access_wedge_plan.md` `§11`/`§12`/`§100` super-frame; `08_open_review_queue.md` `REV-188`, `REV-190`; `00_architecture_memory_control_plane.md` `manifest_action_enum`; `04_manifest_read_graph.md` routes `9a`/`10`; `v4_C4_6_rx_build_doctrine_standards_and_2035_conformance.md` return-path/recall/communication-capacity passages; `future_work_registry.md` row inventory; `AGENTS.md` standalone-lane clause.

**Recovered through three delegated EXISTS-AS scans with quotation and passport verification** — external-capability/command-authority lineage; context-package and purpose-bound-disclosure lineage; intervention-lineage / obligation-survival / outcome-adoption lineage. **Delegated scans are evidence, not a full read by this author**, and are labelled as such in `§5`.

**Repository-verified:** branch divergence and strict-superset relation; G1 carrier blob identity; PR states; absence of `context_packet`, `trust_transfer_record`, `care_obligation`, `external_capability`, `outcome_intelligence` from `*.ts`/`*.sql`; the shipped `actor_kind` enum; `CONSENT_TYPE_VALUES`; `manifest_action_enum`; FWREG row inventory.

**NOT inspected — declared:** the off-repo controlling plan under `~/.cursor/plans/`; the FAI G1 carrier byte-for-byte; the six AI-corpus registries (`EVRUN-000001/2/3/5/6/11`) — **Gate-1 obligation, `§19.2.7`**; thesis `§C`; `v4_C3_7G_handoff_and_verdict.md` beyond the translational cluster; the Demand/counterparty disposition and residual-moat frame — **Gate-1 obligation**; the full C3.5–C3.7 scenario rows; all implementation code.

**Forbidden inferences:** inventory presence is not a full read · chronology is not authority · **a search miss is not proof of absence** — every absence claim carries its coverage · a delegated scan's absence claim is weaker than an authored one.

---

## §5 — Recovered inheritance

### §5.0 The maturity ladder — R1's central analytic error, fixed

R1 conflated *"already named"* with *"covered."* These are five distinct states and the arc must label every recovered concept with one:

| Level | Meaning |
|---|---|
`L1 named` | the concern has a name somewhere in the estate
`L2 specified` | it has proposed semantics — fields, states, invariants
`L3 accepted at scope` | a gate accepted it **for a stated scope**; scope matters
`L4 implemented` | it exists in code or migrations
`L5 composition-tested` | it has been shown to hold **in combination**, under change, with negative controls

**No level implies the next.** A permission stack (`L2`) does not establish safe federated genomic discovery. A `care_episode_id` reference (`L2`) does not establish who accepts the duty when a clinician leaves. A `robot` actor subtype (`L2`) does not establish real-time command validity. A recall concept (`L2`/`L3` for the pharmacy rail) does not establish reliable identification of everyone actually exposed. **Conversely, the absence of a named `intervention_exposure_record` does not establish the need for one** — a source-preserving composition may be better, and `§15` requires testing that first.

### §5.1 Matrix

`RATIFIED` = binding, gate-satisfied · `GATE-ACCEPTED` = Nick+Knox accepted, still `analysis_nonbinding` · `DRAFT-CANON` = `domain_contract`, `draft_for_ratification` · `ANALYSIS` = `analysis_nonbinding`, pending review · `[D]` = recovered via delegated scan, not authored read.

| # | Concept | Where it lives | Authority | Max level |
|---|---|---|---|---|
| **A** | **THE SUPER-FRAME** — *"tumor-biology → care → translational evidence → research → outcomes"* longitudinal governed loop; *"OMNI as the environment connecting patient biology, care, models, pharma, outcomes — without lying to the patient or selling them to a sponsor"* | `v4_C3_7` plan `§100`; *"Recognized as a v4/contract finding + a Future-Work-Registry seam; NOT built in C3.7"* | ANALYSIS — **and its promised FWREG row was never written; no route, no owner** | **`L1`** |
| **B** | **Third supply side** — patient/tumor biology ↔ trial slots ↔ **translational model/evidence supply** (biospecimens, tissue banks, PDX/organoid lineages, drug-response datasets, sponsor programmes). Eight pressure-candidates named *reuse-first, do NOT pre-mint*: `biospecimen_lineage` · `tumor_model_link` · `translational_model_evidence` · `model_match_candidate` · `model_to_trial_signal` · `specimen_use_consent_scope` · `pharma_model_access_contract` · `patient_model_feedback_loop` | `v4_C3_7` plan `§11`; durable row **`D0THES-REV-190`** — *"leave-door-open, NOT build"*, owner Nick + architecture_steward, **open** since 2026-06-14 | ANALYSIS + open review | `L2` |
| **C** | **Capability-formation chain + its governing guardrail** — *"PDX/organoid/model response is TRANSLATIONAL EVIDENCE, not direct clinical truth ... NEVER 'mouse responded → patient gets drug' (precision-oncology theater)"*; chain: `patient imaging/path/genomics → biopsy/specimen lineage → model-library match or model creation → translational_model_evidence packet → model_to_trial_signal → trial_match_candidate → human review → patient-facing option` | `v4_C3_7` plan `§11` | ANALYSIS; guardrail restated in `REV-190` | `L2` |
| **D** | **Option preservation** — present care can foreclose a later pathway: *steroids-before-biopsy · NGS-not-ordered · tissue-window-missed*; routed to **general care, not research-owned** | `v4_C3_7` plan `§12` *"care-substrate capability families (subscribed, not owned)"* | ANALYSIS | `L2` |
| 1 | **`P35` — External Capability / Signal-Command Boundary**, eight modes: `read-only · write-back · request-only · bounded-command · human-confirmed-command · prohibited-command · emergency-break-glass · vendor-operated` | `v4_C3_5F5` §P35-RENAME (*"Nick/Knox 2026-06-14 — corrects F4's over-crystallization"*, worked example: a surgical robot); `v4_C3_5G4` §1.5 | ANALYSIS; frame GATE-ACCEPTED C3.8 `§1A` 2026-07-04; **owner OPEN `REV-188`** | `L3` (frame only) |
| 2 | **The boundary, with F5's qualifier** — F4: *"OMNI owns the LINK + TELEMETRY + RECORD + the COMMAND/AUTHORITY LOOP — not the surface, and not the physical actuation."* **F5 supersedes that framing:** *"OMNI does **not assume** it owns the mechanics or the native UI ... The mode is a per-system, per-context governed decision — **not a thesis assumption.**"* | `v4_C3_5F4`; **`v4_C3_5F5`** | ANALYSIS | `L2` |
| 3 | **GCE — Governed Capability Exchange** (`D0THES-DEC-036`): `actor/represented-principal → capability contract → Identity → Federation boundary → RBAC capability → delegated authority → context packet → consent/grant → CNS orchestration → owning-domain commit → audit/proof → returned artifact/status` | `omni_enterprise_posture_2026-06-03.md` | **RATIFIED `governance_binding`** | `L3` (spine); boundary-contract content **absent** per FAI `G-18` |
| 4 | External returns classified `evidence \| observation \| proposed-meaning \| externally_committed_truth` — *"committed in the source system, NOT OMNI-committed — BEFORE it counts"*; *"External systems never own OMNI-owned canonical truth"* | same decision | **RATIFIED** | `L3` |
| 5 | Robots/devices are not a domain — `P34` → **EXTEND** via RBAC + Identity actor + P35 | `v4_C3_5G4_1` §B `[D]` | ANALYSIS | `L2` |
| 6 | Machine actors in the actor model — `device`/`robot`/`external_system` subtypes; **only humans hold care-ownership** (Identity inv 7, RBAC inv 5); `system_actor_atom_grant` | `contracts/identity_contract.md` §4; `rbac_authority_contract.md` §4 `[D]` | DRAFT-CANON | `L2` — shipped `actor_kind` is `patient/staff_user/provider_user/system/cron/webhook/partner_adapter/ai_engine` |
| 7 | Non-human delegated authority is **decomposed** across Identity + RBAC (`delegated_authority_envelope`) + Federation + D7 — *"AI is one subtype, not the universal model"* | enterprise posture `[D]` | **RATIFIED** | `L1` — envelope uncontracted |
| 8 | **`chain_of_identity`** — cell-therapy vein-to-vein patient binding through an external manufacturer; `NET-NEW (narrow)` | `v4_C3_6F` §1.4 `[D]` | ANALYSIS | `L2` |
| 9 | IP `custody_chain` — `shipped→received→stored→dispensed→administered→returned→destroyed` + excursion / lot / sponsor reconciliation | `v4_C3_6G` §1.6 `[D]` | ANALYSIS | `L2` |
| 10 | **`research_permission_stack`** — permission-to-contact → upload-records → HIPAA release → pre-screen (or IRB waiver) → share-identifiable-with-site → protocol informed consent → screening consent | `v4_C3_7` plan | ANALYSIS | `L2` |
| 11 | **`candidate_visibility_scope`** — pre-consent, external parties see *aggregate accrual projection / de-identified pipeline / site-level feasibility only* | `v4_C3_7` plan | ANALYSIS | `L2` |
| 12 | **`standing_match`** / `research_navigation_obligation` — *"we'll keep watching and tell you"* is a long-lived duty | `v4_C3_7` plan | ANALYSIS | `L2` |
| 13 | Consent is many legally distinct families under an anti-coercion `[INV]`, with purpose-of-use · permitted recipient · expiry · revocation · derived-grant invalidation | Care `§5a` `[D]` | ANALYSIS (REVIEW-DRAFT) | `L2`; 13 `CONSENT_TYPE_VALUES` + `patient_consents` at `L4` |
| 14 | `gate_timing` — `booking_visibility / booking_hard_gate / pre_arrival_task / pre_performance_gate / closeout_documentation_gate`; consent defaults to `pre_performance_gate` | Settings / scheduling design `[D]` | DRAFT-CANON | `L2`/partial `L4` |
| 15 | Admissibility is **four non-collapsible projections** incl. `indicated/contraindicated/uncertain/awaiting-evidence`, evidence sufficiency, action-critical freshness; `§5b.1` `authority_basis` · `authorization_evidence_form` · `approval_requirement` (`dual_control`, `committee/ethics_review`) · versioned `checkpoint_graph` | Care `§5b`/`§5b.1` `[D]` — capture frozen against edit, **readable** | ANALYSIS | `L2`; conformance fixture only |
| 16 | Trust is relocated by every outward rail; *"context-packet exchange carries a `trust_transfer_record`"* | `D0THES-GRD-030` | **RATIFIED** guardrail | `L1` — record unbuilt (`C38-G3-034` = bent) |
| 17 | ACK is not accepted custody; C4.3 ten-state external-custody ladder; `O10` | `D0W3B-GRD-002`; `v4_C4_3` `[D]` | Guardrail **active**; design PASS | `L2`; conformance script only |
| 18 | Counterparty acceptance is an explicit event — `ingest_counterparty_acceptance_assertion`, *"MUST NOT itself set accepted state"*; *"reciprocal counterparty acceptance across organizations that have **not** delegated command"* | C4.6 L2 | L2 accepted; GCE anchor RATIFIED | `L3` (pharmacy scope) |
| 19 | **Post-delivery obligations survive episode closure** — *"Delivery may close one fulfillment episode while refill, monitoring, adverse-event, recall and continuation obligations remain open — the longitudinal medication relationship is not the same object as a single fulfillment"*; governed return path incl. recall; purpose-separated counterparty capacities so promotional outreach *"may never masquerade as patient-specific care evidence"* | C4.6 Rx L2 | L2 accepted | `L3` (pharmacy scope) |
| 20 | Regulatory status is dated — *"preserved as dated `as_of` truth, never as timeless catalog metadata"* | `v4_C4_6_G2A` `[D]` | ANALYSIS, `not_promoted` | `L2` |
| 21 | `care_obligation` — `care_episode_id` anchor + `task_kind` + `obligation_strength` + temporal + escalation + `parent/dependency/supersedes`; conversion rule; **explicit expiry** | OFC `§5` `[D]` | DRAFT-CANON; `REV-163` | `L2` — **no table** |
| 22 | `care_commitment` — an accountable promise, distinct from something owed — **DEFERRED, `REV-141` OPEN**; D5 landed only the relationship | OFC `§10`; `08` `[D]` | OPEN | `L1` |
| 23 | Outcome reads the frozen context, never rewrites it | `REV-184` `[D]` | **SIGNED OFF 2026-06-14, CLOSED** as spine-grade law | `L3`; field-set deferred to C5 |
| 24 | `outcome_intelligence` / RWE → own sub-plane under **`REV-174`**, *"OMNI OWNS RWE"* | `v4_C3_6G` `[D]` | ANALYSIS; `REV-174` OPEN | `L1` |
| 25 | *"No truth by generation"* — simulated output never auto-commits; `sim/truth firewall` | `v4_C3_5F5`; C4.4 `[D]` | ANALYSIS | `L2` |
| 26 | Verification ≠ verification ≠ adoption — artifact-integrity (D7) · data-fidelity (Observation) · **clinical adoption** (CM); *"none implies the next"* | Observation `§4` `[D]` | DRAFT-CANON | `L2`/partial `L4` |
| 27 | Incentive must not bend clinical presentation — *"structural, auditable, economically-blind, posture-invariant"*; C4.6 **`C6` margin-only counterfactual** | Care `§4`; C4.6 `[D]` | ANALYSIS / L2 accepted | `L2` |
| 28 | Population learning needs a stated basis — *"purpose + legal basis + consent + partition + source-authority ... NOT a blanket 'de-identified'"*; `L5 alpha laundering PROHIBITED` | Care `§7`; platform `[D]` | ANALYSIS | `L2` |
| 29 | Federation must not prefer OMNI's own operators — inv 29 / `T0-14` | Federation `[D]` | DRAFT-CANON | `L2` |
| 30 | Do not become a thin broker — `GRD-032`; measured by preservation not integration count — `GRD-034` | enterprise posture | **RATIFIED** | `L3` |

### §5.2 Per-gap verdicts, with maturity — replacing R1's "two-thirds"

| Concern | Highest level reached | What is actually missing |
|---|---|---|
| Care↔capability continuity as one account | **`L1`** (row A) | the whole operating account; **plus its promised registry row** |
| Capability formation from patient context | `L2` (rows B, C) | acceptance at any scope; generalisation beyond oncology; stage-impersonation controls |
| Boundary exchange / context package | `L3` spine, content absent | field-level content; `trust_transfer_record` |
| Intervention lineage + exposure | `L2` fragments | end-to-end composition; exposed-cohort identification |
| Private discovery mechanism | `L2` research-scoped (rows 10–12) | any general mechanism; repeated-query and rare-cohort disclosure risk |
| Selection / neutrality | `L2`–`L3` distributed (rows 27–30) | producer-selection case not covered by the five existing constraints, if one exists |
| Obligation survival | `L2` (rows 21–22) | successor undertaking; producer/operator disappearance; consent expiry |
| Containment / recall | `L3` **pharmacy scope only** (row 19) | generalisation; layered principals; exposed-cohort reach |
| Option preservation | `L2` (row D) | a positive capability, not just an audit trail |

**The honest summary: the vocabulary is rich, mostly `L2`, occasionally `L3` at a narrow scope, and almost nowhere `L4` or `L5`. Nothing is `L5`.** That is why the arc is warranted and why inheritance makes it cheaper rather than smaller.

---

## §6 — Inheritance map: who owns what

| Concern | Owner | State |
|---|---|---|
| **The super-frame loop** | **NO OWNER, NO ROW, NO ROUTE** | **LOST** — row A |
| Translational model / biospecimen bridge | `REV-190` — Nick + architecture_steward | OPEN, `leave-door-open` |
| Per-system capability posture + command mode | **`REV-188`** | **ORPHAN** — frame gate-accepted, owner open |
| Outcome / RWE | `REV-174` | **ORPHAN** |
| `care_commitment` | `REV-141` | **OPEN** |
| Intervention exposure / lineage record | — | **does not exist** (need untested — `§15`) |
| External actor identity, represented principal | Identity | DRAFT-CANON; cross-org DEFERRED `REV-143` |
| Capability, attestation, delegated-authority envelope | RBAC | DRAFT-CANON; `Q-DL18-4` OPEN |
| Cross-boundary topology, grants, `patient_continuity_policy` | Federation | DRAFT-CANON; **no non-human/agent modeling** |
| Consent artifacts and families | D7 | DRAFT-CANON |
| Governed exchange spine | GCE (posture) | **RATIFIED**; content absent |
| Context assembly, `cns_decision`, `trace_lineage` | CNS | DRAFT-CANON; owns no truth |
| `service_policy`, eligibility-gate definitions and timings | Settings | DRAFT-CANON; no evaluator in `lib/` |
| Booking-time evaluation | D3 | DRAFT-CANON |
| Actualized work, `care_episode`, clinician-of-record continuity | D5 | DRAFT-CANON |
| Act loop, `fulfillment_order`, `care_obligation`, release **state** | OFC | DRAFT-CANON; `REV-163` |
| Money, entitlement, financing physics | D6 | DRAFT-CANON |
| Data-fidelity gate | Observation | DRAFT-CANON |
| Clinical adoption gate | Clinical Memory | DRAFT-CANON |

**One lost frame, three orphans, one open deferral, one untested absence.** That is the work surface.

---

## §7 — Actor / principal map

`patient` · `surrogate / DPOA / guardian` · `referring or prescribing clinician` · `proceduralist or administering clinician` · `supervising clinician` · `longitudinal care team` · `treatment facility / site` · `operator of record` · **`intervention producer`** (manufacturer, compounder, protein-design lab, model operator) · **`capability developer`** (a party creating something that does not yet exist) · `execution device or robot` + its `vendor operator` · `laboratory / diagnostic` · **`biospecimen / model custodian`** · `logistics / cold-chain custodian` · `payer / financer` · `regulator` · `IRB / ethics body` · `sponsor` · `non-human delegated agent` · `federation peer`.

**Discipline from existing law:** a principal's rights derive from `authority_basis`, not from possessing data, employing a clinician, owning an interface, or having generated a recommendation. Only humans hold care-ownership. **Delegation is never inferred from call topology** (`D0OL-GRD-008`: *"a nested call, agent invocation, MCP exposure, function signature, or parent-child trace proves execution topology — NOT identity, delegation, capability, custody, or authority"*).

---

## §8 — Lifecycle skeleton, with break-points

R1 began at *"signal."* The subject begins earlier — **the capability may be created in response to the patient.**

```
  need / risk / opportunity signal                  [Observation + CM — L2]
        ↓
  patient and/or provider intent                    [Care §5a — L2]
        ↓
╔═ CAPABILITY FORMATION ══════════════════════════════════════════════╗
║ discovery that relevant people/problems exist    ◆ NO MECHANISM     ║
║ feasibility / cohort viability                   ◆ NO MECHANISM     ║
║ specimen / signal qualification                  ◆ L2, oncology-only║
║ model match OR model creation                    ◆ L2, REV-190 open ║
║ experimental evidence generated                  ◆ L2 + guardrail C ║
║ candidate designed for this person               ◆ no object        ║
╚══════════════════════════════════════════════════════════════════════╝
        ↓   ↑ stage-impersonation control REQUIRED at every ↓ (row C)
  purpose-bound context grant                       ◆ home RATIFIED, content ABSENT
        ↓
  external capability + counterparty acceptance     ◆ P35 ORPHAN; acceptance L3 pharmacy-scope
        ↓
  clinical / patient / institutional / reg review   [Care §5b — L2]
        ↓
  care commitment / order / enrolment / referral    ◆ care_commitment OPEN (REV-141)
        ↓
  manufacturing / preparation / release decision    ◆ custody_chain L2; release ≠ adoption
        ↓
  administration / procedure / device activation    ◆ command boundary ORPHAN
        ↓
  exposure + execution receipt                      ◆ exposure record absent; need untested
        ↓
  outcome / adverse event / non-response            ◆ REV-174 ORPHAN
        ↓
  monitoring / recall / revision / re-dose          ◆ L3 pharmacy-scope only; no cohort reach
        ↓
  transfer / substitution / closure / obligation    ◆ care_obligation L2, no table
```

**The transition that must never collapse (row C, verbatim):** *"NEVER 'mouse responded → patient gets drug' (precision-oncology theater)."* Generalised: **scientific evidence ≠ manufacturing release ≠ clinical adoption ≠ actual use.** A model's prediction is not an observed response; a product shipped is not a product administered; a version approved for deployment is not proof of which version performed a given act.

---

## §9 — Hypotheses, counter-hypotheses, falsifiers

Each may lose. `INSUFFICIENT_EVIDENCE` and `OPEN` are permitted outcomes (`§18.3`).

| ID | Hypothesis | Counter-hypothesis | Falsifier |
|---|---|---|---|
| **`H0`** | **The super-frame is the real subject, and its loss — recognised, promised a row, never written — is why three later arcs re-derived pieces of it** | The mechanism rows (`REV-190`, `REV-188`) are sufficient carriers; the loop is narrative | Find a durable carrier for the loop. If `REV-190` + P35 + GCE together compose it, `H0` narrows to a registry-hygiene finding |
| `H1` | No carrier composes care → capability → exposure → obligation end to end; seams break at the joins | The pieces compose once routed; the gap is documentation | Trace the minimum set with attributed state, authority, evidence, time, commitments, effects, response duties and residual uncertainty at every consequential transition |
| `H2` | GCE's boundary-contract **content** is absent, so each arc re-derives a profile shaped like it | The ratified spine + `GRD-034` suffice; field-level content is premature | Find any accepted field-level boundary-exchange contract |
| `H3` | Exposure cannot be reliably reached from a recall because no composition links producer + version + administration + person | Exposure is derivable by joining OFC + D5 + D7 + Observation; **no new object needed** | Attempt the derivation for `S8`. **Both directions count:** a complete authority-preserving derivation kills `H3`; a gap does not by itself justify a universal record |
| `H4` | No general privacy-preserving discovery mechanism exists in the estate | C3.7's stack + `candidate_visibility_scope` already generalise | Trace `S6` using only C3.7 primitives. **Repository absence establishes an architectural gap, not a legal conclusion** — lawfulness is out of scope |
| `H5` | `care_obligation`'s `care_episode_id` anchor survives clinician departure but not operator exit, producer insolvency or consent expiry — **because an episode identifier is not a successor undertaking** | The anchor solves all four | Trace `S9`/`S10`/`S12`. Name who retains or accepts the duty, how refusal is represented, and what happens when no successor exists |
| `H6` | The eight P35 modes are an adequate **vocabulary** but not an adequate **model** — supervision, delivery mode, emergency authority, execution delegation and autonomy degree may be separate dimensions collapsed into one enum | Eight modes plus context binding suffice | Attempt to express `S4`'s supervised-autonomous posture. If one mode captures it without ambiguity, `H6` dies |
| `H7` | Producer selection is not covered by existing neutrality law | `GRD-032/034` + Federation inv 29 + Care `§4` + C4.6 `C6` cover it | Construct a producer-selection case none of the five constrains |
| `H8` | The invariant already binds present-day care, so inheritance is immediately useful | It binds only novel modalities | **`S0`.** Informs present-wedge leverage **only**; cannot decide frontier adequacy (`§18.2`) |
| **`H9`** | **Action-relative context validity is unmodelled** — prior authorization plus good provenance does not establish that the world is still suitable for the next physical or manufacturing act | Care `§4` action-critical freshness already covers it | Trace `S4` (scene changed since authorization) and `S5` (patient state changed during manufacture). Name which facts must be current, how currency is established, what uncertainty is tolerated, and who may pause or reject |
| **`H10`** | **Control timescales are conflated** — device-local safety, case-level coordination and multi-year surveillance are treated as one loop | The estate already separates them | Trace `S4`/`S5`. Two failure modes to detect: OMNI becoming a remote dependency for a device's immediate safety response, and a device's safe local completion falsely closing the patient's broader obligations |
| **`H11`** | **Option preservation is recognised but not actionable** — row D exists as `L2` and nothing makes it a capability | It is adequately routed to general care | Trace an option-foreclosure case (`steroids-before-biopsy` class). Can OMNI help preserve future options while honestly representing uncertainty, urgency, preference and the cost of waiting? |

---

## §10 — Modality and stressor taxonomy

Modalities are **stressors chosen for the axes they stress**, never the subject.

| Axis | Low | High |
|---|---|---|
| `production_locus` | shelf product | designed for one patient |
| `patient_specificity` | none | the patient **is** the input |
| `capability_existence` | exists to order | **must be created** |
| `execution_agency` | human | machine under supervision → autonomous |
| `adaptivity` | fixed at commitment | continuously revised |
| `control_timescale_spread` | one loop | milliseconds to years |
| `obligation_horizon` | single visit | multi-year / lifetime |
| `principal_count` | 2 | 8+ |
| `regulatory_settledness` | approved, stable | individualized pathway / gray zone |
| `producer_permanence` | incumbent | single programme |
| `institutional_willingness` | cooperative | refuses OMNI's terms |

---

## §11 — Context-package questions

`Q-ECB-1` — Does the boundary exchange object need field-level content, or does the ratified GCE spine plus `GRD-034` suffice? *(FAI `G-18`: content does not exist. The `2026-06-03` audit: "Big new contract." Both non-binding.)*

`Q-ECB-1a` — If content is needed, which are **contract terms** and which are **derivable**: purpose · intended act · recipient · minimum-necessary envelope · provenance per fact · adopted-vs-unadopted status · freshness · uncertainty · permitted use · prohibited secondary use · retention · expiry · revocation · onward disclosure · required response · capability/model version · receipt and destruction proof · `trust_transfer_record`.

`Q-ECB-1b` — Relation between CNS `§9.1`'s **internal layered packet** (references, never copies) and a **boundary** object? Same object with a boundary profile, or two? *(Naming them alike is a live collapse risk.)*

`Q-ECB-1c` — `trust_transfer_record` is ratified and unbuilt. Specify here, or route? **Default: route.**

`Q-ECB-1d` — Which disclosures should **not move data at all** — computation to the data, aggregate-only return, one-time eligibility response, clinician-mediated relay, refusal?

`Q-ECB-1e` — **Context as production input.** When context feeds a *design* or a *physical act* rather than a decision, what changes? Which facts must be current for **this** act, how is currency established, and who may pause or reject? *(`H9`.)*

---

## §12 — External-capability and command-boundary questions

`Q-ECB-2` — **`REV-188`: who owns `external_capability` / `command_authority_boundary`?** Open since 2026-06-14. **A valid answer may distribute the semantics across existing owners without creating a new owner or object, or may explicitly re-defer with a reason.**

`Q-ECB-3` — At what grain do modes bind — per system, capability, context, act, patient, episode?

`Q-ECB-4` — Are supervision, delivery mode, emergency authority, execution delegation and autonomy degree **separate dimensions** rather than values in one enum? *(`H6`.)*

`Q-ECB-5` — What positively constitutes an execution **receipt**, given that ACK-as-custody is already forbidden?

`Q-ECB-6` — The `Q-DL18-4` dependency (`§3.4`).

`Q-ECB-7` — Federation has no non-human/agent modeling despite the ratified posture requiring it. This arc's finding to route, or Federation's debt? **Default: route.**

`Q-ECB-7a` — **Control timescales.** How are device-local safety, case-level coordination and long-horizon surveillance separated so that OMNI is not a remote dependency for immediate safety, and local completion does not falsely close care obligations? *(`H10`.)*

---

## §13 — Discovery, privacy and demand-aggregation questions

`Q-ECB-8` — Are these constitutionally distinct, and where does each live: aggregate opportunity · cohort feasibility · anonymous eligibility · patient notification · patient re-contact · clinical qualification · identity release · enrolment · commercial lead generation · executable case?

`Q-ECB-9` — Does C3.7's `research_permission_stack` + `candidate_visibility_scope` + `standing_match` **generalise** beyond research? *(The cheaper hypothesis; test first.)*

`Q-ECB-10` — Scope question: is a discovery *mechanism* this arc's to specify, or a separate substrate? External comparators exist and are handled under `GRD-038`/`GRD-039` — **propose only**.

`Q-ECB-10a` — **Disclosure risk over time.** Federation does not imply privacy and removing names does not settle it. Test repeated queries, rare cohorts, overlapping clinic populations, deduplication, changing permissions, and separation of discovery from identified recruitment.

`Q-ECB-11` — The demand-aggregation sentence collapses six products: regional demand · expected eligible volume · capacity planning · patient identification · individual suitability · permission to act. Which may leave, to whom, at what aggregation, on what basis? Does Care `§7`'s stated-basis requirement cover it?

`Q-ECB-11a` — **Discovery can change what gets developed.** When a query shapes a producer's development decisions, what does the patient acquire an interest in, and what may OMNI represent? *(Row B's `patient_model_feedback_loop`, `L2`.)*

---

## §14 — Selection, commerce and neutrality questions

`Q-ECB-12` — Composing `GRD-032`, `GRD-034`, Federation inv 29 / `T0-14`, Care `§4`, C4.6 `C6`, `L5 alpha laundering PROHIBITED` and WI12 — **is producer selection already constrained, or is there a real hole?** Burden on finding the hole.

`Q-ECB-13` — Are these separable and separately visible: trusted integration · admitted capability · preferred commercial partner · clinically recommended intervention · payer-mandated option · patient-selected option · OMNI-owned product?

`Q-ECB-14` — **HARD CONSTRAINT.** FAI's Selection Accountability is a stabilized candidate under acceptance hold. This arc may **consult** and **test against** it, must **declare** any reliance on its unaccepted semantics, may **not** extend or promote it, and escalates only a genuine blocking contradiction (`§3.4`).

`Q-ECB-15` — **Institutional resistance — mandatory, not optional (`§19.1`).** What can OMNI legitimately know, require, promise and do when a producer refuses outcome-return terms · a site accepts the patient but not OMNI's custody model · a vendor employs the prescribing clinicians · a system returns a valid result but will not expose its intermediate process · a patient chooses to leave · a producer wants selective commercial visibility? **Legitimate patient exit must not be treated as a failure**; the failures to detect are abandoned follow-up, suppressed alternatives, unauthorized reuse and misleading continuity claims.

---

## §15 — Exposure, outcome, recall, transfer, obligation questions

`Q-ECB-16` — **Symmetric burden.** Does a unified exposure record need to exist, **or** is exposure derivable by a source-preserving composition over OFC + D5 + D7 + Observation? **Test the composition FIRST.** Neither its absence nor its convenience justifies minting it.

`Q-ECB-17` — Which lineage axes are **mandatory**, which **per-modality**, which **never OMNI's**: source material · design assumptions · experimental evidence · model version · software version · protocol version · lot/batch · released configuration · device version · operator · supervisor · facility · instructions · consent · administration · exposure? **Different parties are authoritative at different points and must not be collapsed.**

`Q-ECB-18` — **Layered containment.** C4.6 proves it for the pharmacy rail at `L3`. Does it generalise across regulator withdrawal · manufacturer recall · institutional suspension · federation revocation · OMNI integrity suspension · clinician cessation · patient refusal · payer change · emergency containment? Each needs scope · initiating principal · evidence · reason · effective time · affected products/lots/models/sites/populations · temporary-vs-permanent · appeal · notification duties · **exposed-person identification** · safe continuation or substitution.

`Q-ECB-19` — An outcome signal must not auto-become a platform-wide blacklist. How does observation → adjudicated concern → containment → accountability stay staged? *(`REV-184` never-rewrite + Observation/CM gates + `D0OL-GRD-009`: a score informs, never authorizes.)*

`Q-ECB-20` — **Which anchor makes an obligation survive?** An episode identifier is not a successor undertaking. Who retains or accepts the duty, how is refusal represented, what happens when no successor exists? *(`H5`; may be a `REV-141` dependency rather than a new object.)*

`Q-ECB-21` — Is `outcome_intelligence` (`REV-174`, orphan) a prerequisite or a downstream consumer? **Default: consumer.**

`Q-ECB-22` — **Option preservation as a positive capability** (`H11`, row D) — not merely a better audit trail after the fact.

---

## §16 — Scenario plan (planned, NOT executed at Gate 0)

Gate 0 decides only whether the set is sufficient, orthogonal and **discriminating**.

| ID | Scenario | Axes maximised | Falsifies |
|---|---|---|---|
| **S0** | **Routine approved product with a lot, today** — external manufacturer, real lot, exposure cohort, monitoring duty outliving the prescriber. *(A cleanly approved product is the baseline; compounding moves to `S0b` so regulatory complexity does not contaminate it.)* | baseline | `H8` (present leverage **only**) |
| S0b | 503A-compounded peptide — regulatory status as `as_of` truth | settledness ↓, permanence ↓ | `H8`, `H7` |
| S1 | Patient-specific neoantigen vaccine | specificity ↑, capability existence ↑ | `H1`, `H2`, `H9` |
| **S2** | Autologous cell/gene therapy, vein-to-vein | specificity max, custody | `H1`, `H3`; tests `chain_of_identity` reuse |
| S3 | AI-designed biologic *(merge candidate with S1 — overlaps on lineage; differs only in design target)* | production locus, model lineage | `H2`, `H3` |
| **S4** | Supervised autonomous procedure, **scene changed since authorization** | execution agency ↑, timescale spread ↑ | `H6`, `H9`, `H10` |
| **S5** | Adaptive closed-loop implant, **revised after commitment** | adaptivity ↑, horizon ↑ | `H9`, `H10` — **restored to minimum; R1 dropped the only scenario maximising adaptivity while claiming full coverage** |
| **S6** | Privacy-preserving rare-cohort discovery, **repeated queries over overlapping populations** | discovery, principals | `H4`, `Q-ECB-10a` |
| S7 | Trial / expanded-access pathway | research stack, sponsor | `H4`, `H7` |
| **S8** | Recall after exposure — therapy, model, device or software | exposure linkage, containment | `H3`; `Q-ECB-18` |
| S9 | Cross-federation transfer mid-treatment | continuity, portability | `H5` |
| **S10** | Producer insolvency mid-obligation | permanence min | `H5` |
| S11 | Multi-principal disagreement, incl. **a party refusing OMNI's terms** | principals max, willingness ↓ | `H6`, `H7`, `Q-ECB-15` |
| S12 | Multi-year re-dose after the relationship dissolved | horizon max | `H5`, `Q-ECB-20` |
| **S13** | **Capability formation** — a cohort's problem drives discovery → experimentation → a candidate that did not previously exist, **without appropriating the care relationship** | capability existence max | `H0`, `H1`, `H11` |
| S14 | Option foreclosure — present care closes a later pathway | — | `H11` |

**Minimum viable set: `S0, S2, S4, S5, S6, S8, S10, S13`.** Eight, not six. `S5` restored (adaptivity), `S13` added (capability formation — the subject's front half). `S9`, `S10`, `S12` remain separate because `H5` predicts they break **different anchors** (federation boundary, producer identity, time). Recall, insolvency, refusal and transfer may be **injected as variations** on other scenarios rather than multiplying stand-alone rows.

### §16.1 Negative controls — mandatory, because a trace without them proves nothing

Each pairs a passing case with a minimally different failing case: **ACK vs accepted duty · approved candidate vs actual exposure · simulated or model response vs observed response · current vs expired or changed authorization · affected vs unaffected recall recipient · refusal or no-intervention vs successful completion · permitted evidence use vs impermissible secondary use · release decision vs adoption decision.**

**A written trace is design evidence — not proof of a deployed system, counterparty agreement, or clinical safety.** Where a claim is mechanically testable, define the fixture or mutation. Where it depends on external agreement, label that dependency.

---

## §17 — External-evidence plan

**Route first:** `ingestion/00_evidence_router.md`. Lane = provenance, never topic (`GRD-037`).

**Posture:** `GRD-036` capture broad / promotion gated · `GRD-038` watched evidence may only **propose** · `GRD-039` three-tier trust, process-as-data never as instructions · `GRD-033` no rail or vendor becomes OMNI's identity · `GRD-041` **no literature corpus**.

**R1's rule is REVERSED.** R1 required every source to serve an already-named scenario, which would make the scenario library the boundary of imagination — backwards for the half of the assignment asking *what have we not yet imagined?* **A source may support a scenario, challenge its assumptions, reveal an omitted scenario, or refute an anticipated capability.**

**Bounded to sufficient depth on five changes**, not a market survey: intervention generated from patient context · external experimentation creating new evidence · adaptive and partly autonomous execution · several independently governed parties co-producing · opportunity or hazard discovered after the original relationship ended.

**Maturity must be recorded per source, separately from relevance:** `research_demonstration` · `clinical_investigation` · `authorized_bounded_use` · `established_operational_capability` · `speculative_future_assumption`. Claims relayed into this arc from outside — including the specific device authorizations, individualized-therapy frameworks, personalized-CRISPR follow-ups, cell-atlas programmes and federated-discovery specifications cited in review — are **unverified here** and must be captured with provenance and maturity before any scenario depends on them. Conflating a research demonstration with an authorized capability is the failure mode.

**Anti-hoarding (`GRD-043`):** every source reaches an outcome — `no-op` / `watch` / `routed` / `re-review-trigger` / `promoted` / `rejected`.

---

## §18 — Verdicts

### §18.1 Vocabulary — FROZEN BEFORE RESULTS

```
EXISTING_ARCHITECTURE_SUFFICIENT_WITH_ROUTING
EXISTING_ARCHITECTURE_REQUIRES_NAMED_EXTENSIONS
NEW_CROSS_DOMAIN_CONTRACT_OR_CONTROL_SURFACE_REQUIRED
NEW_DOMAIN_REQUIRED
FAI_INTERRUPT_CANDIDATE
STRATEGIC_ONLY_NO_ARCHITECTURE_CHANGE
INSUFFICIENT_EVIDENCE
```

`NEW_DOMAIN_REQUIRED` must survive `GRD-026` decompose-before-naming and `GRD-035` no-god-domain, with a named concern no existing owner can hold. `FAI_INTERRUPT_CANDIDATE` requires a concrete contradiction. **Prior expectation, recorded so it can be wrong:** `REQUIRES_NAMED_EXTENSIONS` + `NEW_CROSS_DOMAIN_CONTRACT_OR_CONTROL_SURFACE_REQUIRED`. The arc must earn it.

### §18.2 Three separate conclusions — never substituted for each other

| Conclusion | Question | What it may NOT decide |
|---|---|---|
| **Present-wedge leverage** | does inheritance help the business now? | whether the frontier obligation matters |
| **Frontier architectural adequacy** | does the model survive a materially different operating regime? | whether anything is built |
| **Implementation readiness** | what exists in code, and what would it take? | architectural sufficiency |

**Present-day success cannot substitute for frontier proof. Present-day non-novelty cannot erase a future-facing architecture obligation.** An architecture result does not imply counterparties have agreed, a device is authorized for the envisioned use, or OMNI has deployed anything.

### §18.3 Findings may stay open

Each finding carries `resolved` / `open` / `insufficient_evidence`, plus its maturity level (`§5.0`) and its FAI posture (`§3.4`). **G1 is not required to force every hypothesis to win or lose before G2's architecture work** — that would demand ownership answers while forbidding the architecture that produces them.

---

## §19 — Gates

### §19.1 Three gates, with acceptance contracts

| Gate | Purpose | Acceptance contract |
|---|---|---|
| **G0** *(this file)* | Name the subject; recover inheritance; freeze proof obligations, discriminating tests, verdicts and promised outputs | Nick + Knox accept / amend / reject |
| **G1** | Recover remaining inheritance; bounded frontier reality; **trace** candidate operating relationships and failure cases with negative controls; record unresolved findings honestly. **Investigation and tracing may iterate — no artificial blind phase** | Minimum set traced with negative controls; every `H` resolved **or** explicitly `open`/`insufficient_evidence`; source floor discharged per output; institutional-resistance test run |
| **G2** | Deliver the **integrated operating model** plus its adjudicated architecture consequences, destination map, conformance seeds and current-build constraints | One verdict from `§18.1` + the three separate conclusions from `§18.2`; **every substantive conclusion has an accepted home OR a specifically governed downstream consumption obligation naming consumer + trigger + acceptance condition**; `REV-188` answered or explicitly re-deferred with a reason |

**G2's output must be an operating model, not a list of routed tickets.** Minimum content: who participates · what each owns and may decide · what crosses each boundary · what happens when facts or permissions change · what remains owed · how parties enter, refuse, transfer or leave. **No "C5 later" graveyard** — a deferral without a named consumer, trigger and acceptance condition is not a disposition.

**Mandatory inside G1 — the institutional-resistance test** (`Q-ECB-15`). R1 de-gated the entire competitive pass; that was wrong, because refusal-to-participate changes what commitments the architecture may represent. **Separate and optional:** full wedge selection, market sizing, financing, GTM. The wedge question — whether medspa / dermatology / plastics clinics are the right substrate for longitudinal interventions, producer networks, outcome follow-up, consent portability and lineage — is live and Nick's, and does not gate an architecture verdict.

**Not restored:** a six-gate sequence. Gate count is not rigor, and the read-graph's Major-Arc Intake route carries a standing simplification obligation.

### §19.2 Method law for this arc

1. **Inheritance verification precedes assertion, not capture.** Capture candidate findings promptly as **provisional**; run EXISTS-AS before asserting anything as **new, settled or authoritative**. *(R1's rule — nothing written until it fails a novelty check — suppressed discoveries until a large search finished.)*
2. **Source floor declared and discharged per output**, with a named disposition per source. No global "sources consulted" claim. **Delegated scans are evidence, not an authored read** — label which is which.
3. **One carrier** until it demonstrably cannot hold the content (`D0TIER0-GRD-002`).
4. **No parallel lanes, agents or evidence runs before G0 acceptance.**
5. **`METHOD-000` is the default.** The repertoire is an optional catalog; record a method choice only where it changes scope, independence, cost or acceptance. No per-gate matrix.
6. **One current-state surface** — `§1` (`D0CKPT-GRD-003`).
7. **Gate 1 must open the six AI-corpus registries** (`EVRUN-000001/2/3/5/6/11`) for biology and physical-systems concepts, plus the **C3.7 `G` terminus**, the **Demand/counterparty disposition** and the **residual-moat frame** — or record why not applicable. This discharges `§4`'s declared gaps.
8. **Maturity labelling is mandatory** on every recovered claim (`§5.0`) and every external source (`§17`).

**On the FAI G1 precedent, stated at the strength the evidence supports:** R8 `§3.9.1`'s mandatory `M-106` check was *"never run by this arc"* until R7→R8 and then ran for only two capabilities (`B-8` = `PARTIAL`) — a **documented** failure. That it was the **sole cause** of Outputs 1–3's defects is **not established**, and R1 overstated it. The rules above stand on their own merits.

---

## §20 — Governance receipts

### §20.1 Read-graph evaluation COMPLETE; catalog registration OWED — two separate states

R1 conflated them. Corrected:

- **Read-graph evaluation: performed** (`§20.3`) — which is what Agent Work Protocol `§5` requires.
- **Catalog registration: OWED**, row authored at `§20.2`, not landed.

**The correct reason, restated.** `AGENTS.md` states *"a standalone lane requires **no** launch envelope, integrator, or parent integration transaction,"* so R1's inheritance of `PRESPINE-PHASEA-INTEGRATOR` vacancy as a global prohibition was wrong. The real and sufficient reason to serialize is a **verified collision**: the FAI branch has already modified `01_master_corpus_catalog.md`, `04_manifest_read_graph.md` and `future_work_registry.md`. **Collision risk is proven; a textual or semantic conflict is not.** The correct handling is bounded authorization and serialization for those exact surfaces — not a merge of FAI, not unrestricted ECB write authority, and not indefinite deferral. **Requested from Nick: authorization to land the catalog row and route with a recorded freshness + collision check.**

### §20.2 Catalog row — `add_tier2`

```
| `.cursor/plans/v4_ECB_G0_external_capability_boundary_reconnaissance_2026-09-11.md` | ECB Gate 0 — OMNI's Care–Capability Operating Model (reconnaissance + subject definition) | markdown_doc | plan_or_roadmap | cross_domain, architecture_governance, federation, rbac_authority, cns_orchestration, ordered_fulfillment, trials_research | analysis_nonbinding | active | no | yes | no | none | none | `.cursor/plans/v4_ECB_G0_external_capability_boundary_reconnaissance_2026-09-11.md` | add_tier2 | consult_if_routed | user_knox_required | yes | routed | targeted_semantic | review_queue | routed | Gate-0 recon + subject-definition carrier (R2) for the ECB arc — OMNI's Care–Capability Operating Model. Owns arc state at §1; originates no doctrine; mints no domain; does not reopen FAI. Recovers the C3.7 super-frame (tumor-biology → care → translational evidence → research → outcomes; FWREG row never written), REV-190 translational bridge, P35/REV-188, GCE/D0THES-DEC-036, care_obligation/REV-141, REV-174, REV-184, C4.6 post-delivery obligations. Five-level maturity ladder replaces R1's unsupported novelty fraction. Authored on `main` base with FAI source pins; registration owed pending serialization authority. | ecb_arc_gate0 | ECB-G0 |
```

### §20.3 Read-graph evaluation — performed

**Result: a new Tier-2 consult route is warranted, and two routing defects are exposed.**

```
#9w — ECB / Care–Capability Operating Model
  trigger: work touching external capability posture; command/execution authority
           over a non-human actor; capability formation from patient context
           (specimen/model/design); intervention lineage, released configuration
           or exposure; recall-to-exposed-person reach; privacy-preserving
           discovery or opportunity/demand separation; obligation survival past
           producer/operator/consent disappearance.
  artifact: .cursor/plans/v4_ECB_G0_external_capability_boundary_reconnaissance_2026-09-11.md
  also load: v4_C3_5F5 §P35-RENAME · v4_C3_5G4 §1.5 · v4_C3_5G4_1 §B  (P35)
             v4_C3_7 plan §11/§12 + its G terminus                     (super-frame)
             08_open_review_queue.md REV-188, REV-190, REV-141, REV-174
  read rule: consult_if_routed — analysis_nonbinding; originates no doctrine
  tags: cross_domain · architecture_governance · federation · rbac_authority ·
        cns_orchestration · ordered_fulfillment · d7_documents_consent ·
        observation_measurement · clinical_memory · trials_research
  lifecycle: active (arc not started; Gate 0 pending Nick + Knox)
  supersession: none — pure addition
  hard caveat: does NOT reopen FAI; FAI state resolves ONLY through Tier-0 #15.
               FAI Selection Accountability is under acceptance hold — consult
               and test against only, never extend or promote (§3.4, Q-ECB-14).
```

**Defect 1 — P35 has no task-entry route.** R1's claim that *nothing* routes to P35 was **false**: route `10` (C3.8) names `agent-runtime/P35/tools` as one of six axes, and route `9a` carries the C3.5–C3.8 termini in the canonical v4-authoring input set. **The true finding is narrower and still real:** both are triggered by *authoring the v4 spine* or *pursuing a C3.8 convergence finding*, not by *doing external-capability work*. A Care or Pharmacy author with a device question fires neither. That is why P35 was re-derived — the same mechanism recorded for route `#9g` (Reactor), but by trigger mismatch rather than absence.

**Defect 2 — the super-frame has no carrier at all.** It was recognised at C3.7 `§100` as *"a v4/contract finding + a Future-Work-Registry seam"* and **the FWREG row was never written** (`FWREG-001`–`020`; zero matches for `tumor`/`translational`/`biospecimen`/`organoid`/`PDX`/`model_to_trial`). The mechanism survived as `REV-190`; **the loop did not.** Row `D0ECB-REV-004`.

**Separate, and still unaddressed:** `main`'s `AGENTS.md` and read-graph Tier-0 #15 both name the pre-FAI checkpoint, whose `§1` authorizes *"Gate-2 construction and pressure, and nothing else."* An agent cold-booting on `main` abandons the live FAI arc — the incident `D0CKPT-GRD-004` was minted for. **Not fixed here, not a prerequisite to this review, and not this arc's subject.** Reported; operator's decision.

### §20.4 Open-review rows — PROPOSED

```
| D0ECB-REV-001 | v4_ECB_G0_..._2026-09-11.md §20.3 | P35 (`external_capability`/`command_authority_boundary`) has no TASK-ENTRY route. Routes 10 and 9a reference it, but both fire on v4-spine authoring / C3.8 convergence — not on doing external-capability work. Owner open at REV-188 since 2026-06-14; three later arcs re-derived the posture. | architecture_governance, cross_domain | A fourth arc re-derives external-capability posture; REV-188 stays invisible to the authors who need it. | read-graph route addition (#9w naming the P35 carriers) | Nick + architecture_steward | open | owner: architecture_steward; closure_condition: task-entry route lands; next_trigger: serialization authority granted; blocks_current_work: no |
| D0ECB-REV-002 | v4_ECB_G0_..._2026-09-11.md §0.2, §20.3 | The C3.7 SUPER-FRAME ("tumor-biology → care → translational evidence → research → outcomes" longitudinal governed loop) was recognized as "a v4/contract finding + a Future-Work-Registry seam" — the FWREG row was NEVER WRITTEN. No row, no route, no owner. The mechanism survived as REV-190; the frame did not. | architecture_governance, trials_research, cross_domain | The estate's own recognized super-frame stays lost; each arc recovers a fragment. Verified instance of the recurring recognize-then-lose pattern. | FWREG row OR explicit disposition that REV-190 + GCE + P35 compose it | Nick + architecture_steward | open | owner: architecture_steward; closure_condition: durable carrier exists or composition recorded; next_trigger: Gate-0 acceptance; blocks_current_work: no |
| D0ECB-REV-003 | v4_ECB_G0_..._2026-09-11.md §0.3 | `add_tier3` is not in `manifest_action_enum` (none/add_tier0/add_tier1/add_tier2/demote/supersede_link/review_queue/retire). HANDOFF_2026-08-09_foundational_architecture_arc_opened.md carries the invalid value. Corrected in this carrier; the FAI handoff is not this arc's to fix. | architecture_governance, doc_governance | Invalid enum values propagate by copy; the next arc inherits the defect as this one did. | FAI handoff correction at its next substantive touch | architecture_steward | open | owner: architecture_steward; closure_condition: FAI handoff value corrected; next_trigger: next FAI touch; blocks_current_work: no |
```

### §20.5 Future-work registry

**One row proposed** — for the super-frame (`D0ECB-REV-002`), because C3.7 **already promised** it and its absence is the verified defect. **No other FWREG row.** This arc's open items belong to `§11`–`§15` as `Q-ECB-*` and to the rows that already own them (`REV-141`, `REV-163`, `REV-174`, `REV-184`, `REV-188`, `REV-190`, `FWREG-006`). A parallel register would duplicate live state (`D0CKPT-GRD-003`).

### §20.6 Cross-arc collision check

| Arc / object | State | Collision | Handling |
|---|---|---|---|
| FAI G1 / Authority object | PAUSED, frozen, blob `9835715e` | adjacent | read-only, pinned; graduated contact ladder `§3.4` |
| FAI Selection Accountability | candidate under hold | would collide if extended | consult + test against only (`Q-ECB-14`) |
| **C3.7 oncology trial access** | `plan_active`, `analysis_nonbinding` | **strongest overlap** — super-frame, third supply side, permission stack, option preservation | **primary inheritance**; cite and test for generalisation; **do not promote C3.7 content through this arc** |
| `REV-190` translational bridge | OPEN, `leave-door-open, NOT build` | direct | inherit; this arc does not build it |
| C4.6 Rx / pharmacy | Gate-0 accepted; L2 accepted | strong — acceptance ladder, `as_of` status, post-delivery obligations | cite; generalise past pharmacy or the arc has no reason to exist |
| Care capture | FROZEN against edit, **readable** | heavy read dependency | route `#9e`; material claims via evidence ledger + native carriers (`#9f`); **no Care edit** |
| Insurance Gate 2 | FROZEN provisional, PR #14 | none | — |
| Method PR #19 | accepted at review, **not landed** | non-binding | may be consulted; governs nothing |

---

## §21 — Gate-0 stop receipt

**Work class:** major-arc intake / estate reconnaissance. **Produced:** this one carrier, revision R2.

**Discharged:** subject **named now** (`§3.1`) · two-directional inquiry established (`§3.2`) · maturity ladder replacing unsupported novelty claims (`§5.0`) · super-frame recovered and its lost row reported (`§0.2`) · eleven R1 factual claims corrected, five of them from independent verification of the review's own claims (`§0.3`) · hypotheses given falsifiers including three new ones (`§9`) · minimum scenario set corrected to eight with negative controls mandatory (`§16`) · external evidence permitted to change the tests (`§17`) · three separate conclusions that cannot substitute (`§18.2`) · open findings permitted (`§18.3`) · gate acceptance contracts written, institutional resistance made mandatory (`§19.1`) · method law softened to the evidence and inverted to preserve discoveries (`§19.2`) · governance receipts corrected, `add_tier3`→`add_tier2` (`§20`).

**NOT done, by design:** no architecture decided · no domain minted · no scenario executed · no external evidence captured · no lane or agent launched · no contract touched · no FAI mutation · no C3.7 promotion · no shared control-plane surface landed.

**Open and owed:** `Q-ECB-1` … `Q-ECB-22` (Gate 1) · `D0ECB-REV-001` … `-004` · catalog row + route `#9w` (**serialization authority requested from Nick**, `§20.1`) · six AI-corpus registries + C3.7 `G` terminus + Demand disposition + residual-moat frame un-inspected (Gate 1, `§19.2.7`) · relayed external claims unverified (`§17`) · the `main` boot-pointer hazard (Nick, `§20.3`).

**Stop condition.** Superseded only when Nick + Knox accept, amend or reject R2. **On acceptance the next authorized act is G1 with the minimum scenario set — nothing else. On rejection, revise this carrier or close the arc.**

---

## §22 — Amendment log

**R1** (`60619c4f`, 2026-09-11) — initial Gate-0 authoring.

**R2** (this revision, 2026-09-11) — amended against the Knox review. All nine amendment requests accepted. Five repository-factual claims in the review independently verified before amendment; all five held. Principal changes: subject **named** as OMNI's Care–Capability Operating Model and `Q-ECB-NAME-1` closed · *"2035 comes free"* withdrawn and present/frontier/implementation split into three non-substitutable conclusions · C3.7 super-frame recovered as primary inheritance and its never-written FWREG row reported as a new defect · *"two-thirds"* replaced by a five-level maturity ladder · *"nothing routes to P35"* corrected to a trigger-mismatch finding · `add_tier3` corrected to `add_tier2` · integrator-vacancy block replaced by a verified-collision serialization request · *"P35 gets a home or the arc failed"* withdrawn · *"incumbents lack the problem"* withdrawn · `H4`'s legal conclusion withdrawn · FAI causation softened · `S5` restored and `S13` added · evidence permitted to reveal omitted scenarios · negative controls made mandatory · open findings permitted · institutional resistance made mandatory rather than optional · FAI contact made a five-posture ladder rather than a binary.
