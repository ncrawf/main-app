# ECB Gate 0 — External Capability Boundary: does care survive when the intervention comes from outside?

Document type: `plan_or_roadmap` — **Gate-0 estate-reconnaissance and question-freeze carrier**
Authority: `analysis_nonbinding` (`D0THES-GRD-036` — capture broad, promotion gated). **This carrier originates no doctrine, mints no domain, and accepts no architecture.**
Status: `G0_AUTHORED_PENDING_NICK_KNOX_REVIEW · arc_not_started · fai_untouched · governance_side_effects_PROPOSED_NOT_LANDED`
Domain(s): `cross_domain` · `architecture_governance` · `federation` · `rbac_authority` · `cns_orchestration` · `ordered_fulfillment` · `d7_documents_consent` · `observation_measurement` · `clinical_memory`
Lifecycle role: freezes the question, the recovered prior art, the gap hypotheses, the scenario set and the verdict vocabulary **before** any architecture extraction begins. It is the object Nick + Knox review to decide whether this arc opens at all.
Source-of-truth relationship: **owns nothing.** Every recovered claim points at its native carrier and that carrier's authority. Arc state, once the arc exists, belongs to this file's `§1`; nothing else may restate it.
Supersedes: nothing.
Superseded by: none.
Manifest action: `add_tier3` — **PROPOSED, NOT LANDED** (see `§20`; blocked on integrator vacancy, same blocker FAI recorded).
Review gate: `user_knox_required`

---

## §0 — Read this first: what this carrier changed about the proposal it came from

Nick relayed a Knox proposal to open an arc named **Frontier Intervention Continuity (`FIC`)**. The direction is right and most of its substance is adopted below. Three things changed after the mandatory EXISTS-AS pass ran **before** authoring rather than after.

**1. The estate already minted this primitive family and then orphaned it.** `external_capability` + `command_authority_boundary` — **`P35`** — was named at C3.5 F4, authoritatively renamed at F5 with an eight-mode taxonomy, identified as genuinely homeless at the G4.1 desk check, pressure-tested as sufficient at C3.6, and gate-accepted as a *frame* by Nick + Knox at C3.8 on 2026-07-04. **Its owner decision has been open since 2026-06-14 as `D0THES-REV-188` and it has never landed in a contract or in code.** The arc's spine is therefore not a discovery. It is a closure.

The rename is attributed in the carrier itself — *"## P35 RENAME (Nick/Knox 2026-06-14 — corrects F4's over-crystallization)"* — and its worked example is a surgical robot. **Nick and Knox named this primitive together, with this exact use case, on 2026-06-14 — three months before the proposal that re-describes it.** The eight modes and the *"OMNI does not assume it owns the mechanics or the native UI"* boundary were verified verbatim in the source for this carrier, not inherited from a summary.

**2. One relayed factual claim does not survive repository verification.** The proposal stated that C3.8 dispositioned P35 as *"an extension of actor/resource/action architecture with explicit command boundary, evidence, and audit requirements."* That sentence **does not exist** in the estate — searched on `main` and on the FAI branch for `extension of actor`, `actor/resource/action`, and the full phrase; zero matches. The actual C3.8 routing is narrower: `§1A` validated P35 **as a frame already covered**, and `§1C` routed only a **contract-extension for MCP security teeth** (schema-pin, runtime tool-output validation, privilege isolation) plus a `trace_lineage` ↔ W3C-Trace-Context adapter. **P35's owner remained open then and remains open now.** Recorded here so the arc does not inherit a false discharge.

**3. "Frontier" is the wrong load-bearing word, and the reframe materially changes what the arc is worth.**

- It **collides**. `frontier` is already claimed in this estate by FAI R8 `§3.9.2` (the *architecture* frontier test: 2030/2035 agent-native operation vs `current_practice_only`) and by `cns_and_knowledge_reservoirs_frontier_2026-06-06.md`. A second meaning guarantees future agents conflate a clinical-admissibility arc with an ops-evaluation discipline.
- It is **time-indexed**. Today's frontier is tomorrow's standard of care. mRNA was frontier in 2020 and routine by 2023. Naming durable architecture after a moving window is the naming form of `D0THES-GRD-033` (rail lock-in): the name goes stale while the physics does not.
- It **dates the arc's value to a future we do not operate in yet** — and that is the expensive error. **The invariant already binds routine care today.** A Botox injection has a manufacturer, a lot, an expiration and an exposure cohort. A compounded peptide has a 503A producer whose regulatory status is `as_of` truth, not timeless metadata. A GLP-1 has a fulfillment channel, a supervising authority and a titration obligation that outlives the prescriber. **The frontier modalities are stressors that reveal the gap. They are not the subject.** Framed as "frontier," this arc pays off in 2035. Framed correctly, it pays off on the current medspa / hormone / weight-loss wedge and the 2035 cases come free.

`FIC` is therefore **not adopted**. See `§3.3` for the naming decision and its frozen alternatives.

---

## §1 — Arc state *(this section owns it; nothing else may restate it)*

```
Arc:                     ECB — External Capability Boundary
Arc state:               GATE_0_AUTHORED — NOT STARTED, NOT ACCEPTED
Gate 0 verdict:          none issued (Nick + Knox review pending)
Architecture accepted:   none
Domain minted:           none
FAI relationship:        separate bounded object; FAI G1 untouched
Next act:                Nick + Knox accept / amend / reject this carrier
Authorized on rejection: revise this carrier, or close the arc. Nothing else.
```

**No lane, agent, evidence run, scenario execution or extraction pass is authorized by this file.** Gate 0 is authored; Gate 0 is not closed.

---

## §2 — Repository, base, branch and review-object posture

Per collaboration model `§2.6` (Reviewable Repository Snapshots, `D0OPER-GRD-002`) and the proposal's own instruction not to silently inherit the FAI working branch.

| Field | Value |
|---|---|
| Repository | `ncrawf/main-app` |
| This branch | `cursor/ecb-g0-reconnaissance-6a09` |
| Base | `main` @ `2629099e0a611510e52a34c6479f6353bf11a0d5` |
| Branch inheritance | **NONE.** Deliberately based on `main`, not on `cursor/fai-g1-operating-model-4933` |
| Review object | this file, at the pushed head of this branch |

**Why a `main` base despite the governing checkpoint living elsewhere.** The current Tier-0 checkpoint (`HANDOFF_2026-08-23_fai_g1_paused_by_operator.md`) exists **only** on the FAI branch. Basing on that branch would have imported 157 commits of frozen FAI work into this arc's diff, made the review object unreadable, and put this arc's commits on the same branch as the frozen Authority object. Basing on `main` keeps the diff to this arc's own bytes. The cost is that `main`'s boot pointer is stale (see `§20.3`), which is handled by pinning rather than by inheriting.

### §2.1 Source pins — FAI-branch artifacts consumed as frozen inputs

These are read-only inputs. This arc does not write to them and does not merge their branch.

| Artifact | Pin |
|---|---|
| FAI branch head at recon time | `65f310e0b40901cb4f34bb607d92b37ecf9be043` |
| `HANDOFF_2026-08-23_fai_g1_paused_by_operator.md` | blob `46c0e0037976637720f8720e5770f6acdb34c84a` |
| `v4_FAI_omni_architecture_arc_execution_plan_2026-08-09.md` (R8) | blob `ba4c967a1ca883775d481f4dc07643c2c930668f` |
| `v4_FAI_G1_operating_model_carrier_2026-08-10.md` | blob `9835715ed8795a14df395d9f85c8b44fa3af88ea` |

**Verification receipt.** The G1 carrier blob resolves to `9835715e`, which is exactly the blob the pause checkpoint `§2` pins as identical across all three of its recorded heads. **Frozen Authority content has not drifted.** Verify future re-entry by carrier blob, never by branch-head equality — the checkpoint says so and it is right.

---

## §3 — The question, the non-goals, and the name

### §3.1 The candidate question (frozen for Gate-0 review)

> **When an intervention is discovered, designed, configured, manufactured, selected or executed by a system OMNI does not own, does OMNI still preserve identity, patient rights, authority, consent, provenance, clinical meaning, commitment, execution proof, outcome, exposure and continuing obligation — through the whole cycle, and after the producing party is gone?**

Restated as the falsifiable form the arc must actually test:

> **Given the accepted and draft architecture as it exists on 2026-09-11, name the specific continuity guarantees that BREAK when the intervention's producer is external, versioned, and impermanent — and name the smallest set of extensions that repair them.**

The second form is the one the arc is graded against. It has a failure condition: if nothing breaks, the verdict is `EXISTING_ARCHITECTURE_SUFFICIENT_WITH_ROUTING` and the arc closes cheaply. **An arc that cannot return "nothing is broken" is not a test.**

### §3.2 Non-goals — what this arc is NOT

1. **Not a new domain.** `D0THES-GRD-026` — payload nouns are not domains. "Robotics," "peptides," "cell therapy," "genomics" are use-cases threading the operating model. The estate has already said this for P34 (physical automation → EXTEND via Identity + RBAC + P35), for pharmacy (*"Pharmacy is NOT a new OMNI-owned unified lifecycle or truth-owning domain"*), and for the agent-native edge (WI9: *"NOT a new arc, NOT MCP-as-doctrine, NOT a new domain"*).
2. **Not a god-object or a new control plane.** `D0THES-GRD-035` — cross-cutting concerns are composed across owning domains, never absorbed by one for convenience. The risk here is concrete: an "intervention" object is exactly the shape that would swallow Identity, RBAC, Federation, D7, Observation, Clinical Memory, OFC and D6.
3. **Not a reopening of FAI.** Not the FAI G1 carrier, not the frozen Authority object, not the FAI checkpoint, not Output-4 consolidation, not `Q-DL18-4`, not PR #17 or #19.
4. **Not a claim that OMNI should own therapy design, manufacturing, or physical actuation.** The estate's existing boundary holds: *"OMNI owns the LINK + TELEMETRY + RECORD + the COMMAND/AUTHORITY LOOP — not the surface, and not the physical actuation."*
5. **Not a patient marketplace, lead-broker or paid-placement ranker.** Already prohibited in pieces; see `§14`.
6. **Not a literature or clinical-evidence corpus build.** `D0THES-GRD-041` fences literature-at-scale out of the Evidence Plane; that substrate is `FWREG-006`, status `watch`, explicitly *"reserved, not solved."*
7. **Not a product roadmap** and not an accepted ontology for the word "intervention" — whether `intervention` survives as an architectural noun at all is an arc output, not an arc premise.

### §3.3 The name — decided provisionally, frozen as an open decision

**`Q-ECB-NAME-1` — what is this thing called?** Status: **OPEN. Must close before Gate 1.** Renaming is cheap now and expensive later, because the key propagates into row IDs.

**Provisional arc key: `ECB` — External Capability Boundary.** Adopted for four reasons: it is **inherited estate vocabulary**, not a coinage (it is P35's own registered family name, *External Capability / Signal-Command Boundary*); it is **not time-indexed**; it does **not presuppose** that `intervention` is an architectural object, which is a question the arc must answer rather than assume; and it names the arc by its **question**, satisfying `D0PRESS-GRD-001` (*"Name the arc by its QUESTION, not its proof mechanism"*). Verified no `ECB` token collision in the estate.

**Acknowledged weakness, recorded honestly:** `ECB` names the *boundary*, and the arc's scope reaches past it into intervention lineage, exposure, and obligation survival (`§8`). The key is narrower than the scope. It was still preferred over a broader coinage because the arc's single most concrete deliverable is closing `REV-188`, and a key that names the orphan makes success unambiguous: **P35 gets a home, or the arc failed.**

**On Nick's question — what would Tesla, Anthropic or Palantir call this?** The honest answer is that **none of them has a name for it, because none of them has the problem.** Tesla owns the whole vehicle, so its configuration-and-service lineage is an internal bookkeeping matter, not a multi-principal continuity problem. Palantir names the fusion and action layer, not the care relationship that outlives it. Epic names the institution's record. Anthropic names the oversight of a delegated actor, not the decade-long obligation the action created. **The absence of an external name is weak evidence that the seat is genuinely unoccupied** — which is strategically interesting and is exactly why coining a brand at Gate 0 is premature.

Two **real terms of art** exist and are load-bearing, and neither is ours to invent:

- **Chain of identity / chain of custody** — the actual regulatory vocabulary for autologous cell therapy (vein-to-vein). **Already in the estate** as C3.6's `chain_of_identity`, dispositioned `NET-NEW (narrow)`.
- **Continued airworthiness / configuration control** — aviation's name for precisely this problem: an object with a producer, a build configuration, a lot, a modification history, and a safety obligation that outlives the original manufacturer. The comparator registry **already carries Airplane-as-object in Lens B**; it has never been drawn on for this. Per thesis `§3.5` discipline: take the mechanism, not its ownership assumptions.

**Frozen candidates for `Q-ECB-NAME-1`:** (a) keep `ECB`, no architecture name, un-branded — the FAI R2 precedent (*"It needs no coined name because it is not a new invention"*); (b) `ECB` as arc key with a separately-named architecture object if and only if Gate 2 produces one; (c) rename the arc to the broader invariant if Gate 1 proves scope exceeds the boundary; (d) `FIC` / "Frontier Intervention Continuity" — **recorded and not recommended**, for the three reasons in `§0.3`.

### §3.4 Relationship to FAI — and the honest dependency risk

Authorized by the pause checkpoint `§6`: *"unrelated exploration ... remains its **own** evidence, comparator or bounded strategic object. It does not reopen FAI, alter the Authority object, or become an architecture dependency **merely by being interesting**."*

Every eventual finding is classified into exactly one of:

- `NO_FAI_IMPACT`
- `POST_FAI_APPLICATION_OR_EXTENSION`
- `CONTRACT_OR_PROFILE_EXTENSION`
- `FAI_INTERRUPT_CANDIDATE` — **requires a concrete contradiction in foundational architecture, not an exciting scenario.**

**Stated expectation, so it can be falsified:** most findings land as `POST_FAI_APPLICATION_OR_EXTENSION` or `CONTRACT_OR_PROFILE_EXTENSION`.

**The dependency risk named plainly.** `Q-DL18-4` — *at what grain is delegated authority granted, and does human delegation differ from nonhuman delegation?* — is FAI's next architecture act and is **paused**. It is also the question this arc's command-boundary work sits directly on top of. This arc must therefore **describe** the grain problem in its scenarios and **not decide** it. If Gate 1 or Gate 2 cannot proceed without a `Q-DL18-4` answer, that is a real dependency and the correct move is to **stop and report it to Nick**, not to decide it here and not to quietly assume an answer. Recorded as `Q-ECB-6`.

---

## §4 — Source and authority posture

**Read fully:** `HANDOFF_2026-08-23_fai_g1_paused_by_operator.md`; `HANDOFF_2026-08-09_foundational_architecture_arc_opened.md`; `HANDOFF_2026-08-09_work_horizon_closed_insurance_gate2_startable.md`; `06_guardrail_antipattern_digest.md`; FAI R8 `§3.9.1`–`§3.9.3`; both checkpoint-pointer blocks on both refs; `00_document_governance_and_taxonomy_2026-05-19.md` `§3`; read-graph Route Entry Contract + Major-Arc Intake routing.

**Recovered through three independent delegated EXISTS-AS scans with verbatim quotation and passport verification** — external-capability/command-authority lineage; context-package and purpose-bound-disclosure lineage; intervention-lineage / obligation-survival / outcome-adoption lineage. Covering, at minimum: `v4_C3_5F4`, `F5`, `G4`, `G4_1`, `F2`, `F3`; `v4_C3_6C`, `F`, `G`; `v4_C3_7` plan; `v4_C3_8_G2`, `G3`, `G4`; `omni_enterprise_posture_2026-06-03.md`; `contracts/` (identity, rbac, federation, CNS, D7, observation, clinical_memory, ordered_fulfillment, D5, D6, settings_catalog); `v4_C4_care_operating_model_capture.md` `§4`/`§5a`/`§5b`/`§7`; `v4_C4_6` Rx family incl. `G2A`; `v4_C4_3`; `v4_REV184`; `future_care_obligations_design_2026-05-17.md`; `08_open_review_queue.md`; `future_work_registry.md`; `audits/2026-06-03` ×2; `lib/consents/*`, `lib/care/*`, `supabase/migrations/`.

**Repository-verified (not inferred):** branch divergence and strict-superset relation; the G1 carrier blob identity; PR states; absence of `context_packet`, `trust_transfer_record`, `care_obligation`, `external_capability` and `outcome_intelligence` from `*.ts` / `*.sql`; the shipped `actor_kind` enum; `CONSENT_TYPE_VALUES`.

**NOT inspected — declared, not hidden:** the off-repo controlling plan under `~/.cursor/plans/` (unavailable in this environment; in-repo pointers relied on per doctrine); the FAI G1 carrier byte-for-byte; the six AI-corpus concept registries (`EVRUN-000001/2/3/5/6/11`) — **a Gate-1 obligation, see `§19.2`**; thesis `§C` body; the full C3.5/C3.6/C3.7 scenario rows; all implementation code; the complete `2026-06-07` federation operator read.

**Forbidden inferences, per the Major-Arc Intake route:** inventory presence is not a full read; chronology is not authority; **a search miss is not proof of absence** — every absence claim in `§8` carries its search coverage.

---

## §5 — Prior-art / EXISTS-AS matrix

`M-106` EXISTS-AS was run **before** authoring. This is the arc's most important section: it is the reason Gate 1 starts from a narrow question set instead of a blank page.

**Legend.** `RATIFIED` = binding, gate-satisfied · `GATE-ACCEPTED` = Nick + Knox accepted, still `analysis_nonbinding` · `DRAFT-CANON` = `domain_contract`, `draft_for_ratification` · `ANALYSIS` = `analysis_nonbinding`, pending review · `EVIDENCE` = non-binding capture · `ABSENT` = searched, not found.

| # | Concept the arc would otherwise "discover" | It already exists as | Authority | In code? |
|---|---|---|---|---|
| 1 | External systems are capability-scoped with an explicit per-system posture | **`P35` — `external_capability` + `command_authority_boundary`**, eight modes: `read-only · write-back · request-only · bounded-command · human-confirmed-command · prohibited-command · emergency-break-glass · vendor-operated` (`v4_C3_5F5` §P35-RENAME; `v4_C3_5G4` §1.5) | ANALYSIS; frame GATE-ACCEPTED C3.8 `§1A` 2026-07-04; **owner OPEN `D0THES-REV-188`** | **No** |
| 2 | OMNI governs the loop, not the actuation | *"OMNI owns the LINK + TELEMETRY + RECORD + the COMMAND/AUTHORITY LOOP — not the surface, and not the physical actuation"* (`v4_C3_5F4`); *"the device/robot/vendor owns the physical actuation / native UI"* (`G4` §1.5) | ANALYSIS | No |
| 3 | A governed spine for every external exchange | **GCE — Governed Capability Exchange**, `D0THES-DEC-036`: `actor/represented-principal → capability contract → Identity → Federation boundary → RBAC capability → delegated authority → context packet → consent/grant → CNS orchestration → owning-domain commit → audit/proof → returned artifact/status` | **RATIFIED `governance_binding`** 2026-06-03 | Partial patterns |
| 4 | An external return is not truth until classified | `evidence \| observation \| proposed-meaning \| externally_committed_truth` — *"committed in the source system, NOT OMNI-committed — BEFORE it counts"*; *"External systems never own OMNI-owned canonical truth"* | **RATIFIED** (same decision) | No typed enum |
| 5 | Robots/devices do not form a new domain | `P34` physical automation → **EXTEND** via RBAC + Identity actor + P35; `physical_action_authority` rides P35 modes (`G4_1` §B) | ANALYSIS | No |
| 6 | Machine actors exist in the actor model | Identity `§4`: `actor` with `device` / `robot` / `external_system` subtypes; **inv 7** — only humans occupy care-ownership roles. RBAC `§4`: `system_actor_atom_grant`; **inv 5** — non-humans never hold care-ownership atoms | DRAFT-CANON | **No** — shipped `actor_kind` is `patient/staff_user/provider_user/system/cron/webhook/partner_adapter/ai_engine` |
| 7 | Non-human delegated authority is decomposed, not owned by AI | Posture: decomposed across **Identity + RBAC (`delegated_authority_envelope`) + Federation + D7** — *"AI is one subtype, not the universal model"* | **RATIFIED** | `delegated_authority_envelope` **not contracted** |
| 8 | Autologous therapy needs patient-binding through an external manufacturer | **`chain_of_identity`** — CAR-T / cell-therapy vein-to-vein — `NET-NEW (narrow)`, Identity + `custody_chain` (`v4_C3_6F` §1.4) | ANALYSIS | No |
| 9 | Investigational product custody | IP `custody_chain` **EXTEND**: `shipped→received→stored→dispensed→administered→returned→destroyed` + excursion / lot / sponsor reconciliation (`v4_C3_6G` §1.6) | ANALYSIS | No |
| 10 | Graduated research permission, not one consent | **`research_permission_stack`**: permission-to-contact → permission-to-upload-records → HIPAA release → pre-screen authorization (or IRB waiver) → permission-to-share-identifiable-data-with-a-site → protocol informed consent → consent-for-screening (`v4_C3_7` plan) | ANALYSIS | No |
| 11 | Sponsors must not see identified candidates pre-consent | **`candidate_visibility_scope`** — pre-consent, external parties see *aggregate accrual projection / de-identified pipeline / site-level feasibility only* | ANALYSIS | No |
| 12 | "Tell me when something opens" is a long-lived obligation | **`standing_match`** / `research_navigation_obligation` | ANALYSIS | No |
| 13 | Consent is many legally distinct families, not one object | Care `§5a` `[INV]`: treatment consent · procedure-specific informed consent · refusal · advance directive · surrogate/DPOA · visibility permission · recording permission · **AI-function permission** · research authorization · communication preference · financial authorization · attestation. Composition fields include **purpose-of-use · permitted recipient · expiry · revocation · derived-grant invalidation** | ANALYSIS (REVIEW-DRAFT) | 13 `CONSENT_TYPE_VALUES`; `patient_consents` table |
| 14 | Gates fire at different times | Settings `gate_timing`: `booking_visibility / booking_hard_gate / pre_arrival_task / pre_performance_gate / closeout_documentation_gate`; **consent defaults to `pre_performance_gate`, NOT booking** | DRAFT-CANON / binding design | Partial |
| 15 | Admissibility is four non-collapsible projections | Care `§5b` — decision · execution-authorization · readiness · consequence+proof, incl. `indicated/contraindicated/uncertain/awaiting-evidence` + evidence sufficiency + action-critical freshness, under `[INV] Do NOT collapse to one boolean`. `§5b.1`: `authority_basis`, `authorization_evidence_form`, `approval_requirement` (incl. `dual_control`, `committee/ethics_review`), versioned `checkpoint_graph` | ANALYSIS (REVIEW-DRAFT, capture frozen against edit, **readable**) | Conformance fixture only |
| 16 | Trust is relocated by every outward rail | `D0THES-GRD-030` — *"every outward rail names its trust-transfer (who logs / who can be compelled / who monetizes metadata) and governs metadata, not just payload"*; **`context-packet exchange carries a `trust_transfer_record`"** | **RATIFIED** guardrail | **`trust_transfer_record` named, unbuilt** (`C38-G3-034` = bent) |
| 17 | ACK is not accepted custody | `D0W3B-GRD-002` extended: *"a technical ACK, message receipt, task assignment, or local queue acceptance does NOT prove accepted cross-authority custody"*. C4.3 ten-state external-custody ladder; `O10 ACK≠accepted-custody` | Guardrail **active**; C4.3 design PASS, **implementation absent/partial** | Conformance script only |
| 18 | Counterparty acceptance is an explicit event | `ingest_counterparty_acceptance_assertion` — rung 5, *"meaning defined by the bilateral contract, never by a webhook or staff note alone; MUST NOT itself set accepted state"*; *"reciprocal counterparty acceptance across organizations that have **not** delegated command to the platform"* | C4.6 L2 accepted; GCE anchor RATIFIED | No |
| 19 | Regulatory status is dated, not timeless | G2A: *"regulatory status here is preserved as dated `as_of` truth, never as timeless catalog metadata"* + peptide gray zone, 503A/503B, GLP-1 503B exclusion | ANALYSIS, `G2A_CONTENT_ACCEPTED · not_promoted` | No |
| 20 | Something owed has its own lifecycle | OFC `§5` **`care_obligation`**: `care_episode_id` anchor + `task_kind` + `obligation_strength` + `due_at/window/recurrence_rule` + escalation + `parent/dependency/supersedes`; **conversion rule** — neither appointment nor encounter until it converts; **expiry explicit** (`expired_unfulfilled`, audited) | DRAFT-CANON; `REV-163` proposed-resolved | **No table** |
| 21 | An accountable care promise ≠ something owed | **`care_commitment` DEFERRED — `D0THES-REV-141` OPEN.** D5 landed only the `care_episode`↔`care_commitment` relationship; full schema + 11-state `care_commitment_event` lifecycle **not landed** | OPEN | No |
| 22 | Outcome must not rewrite the decision it judges | `REV-184`: *"outcome later reads the frozen context, never rewrites it"* | **SIGNED OFF Nick+Knox 2026-06-14, REV-184 CLOSED** as spine-grade law; field-set deferred to C5 | No |
| 23 | Real-world evidence has a home | `outcome_intelligence` / RWE → **own sub-plane under `REV-174`**; *"OMNI OWNS RWE"* | ANALYSIS; `REV-174` OPEN sweep item | **No** |
| 24 | Simulated output is not truth | *"no truth by generation"* — simulated output never auto-commits to policy/clinical truth; `sim/truth firewall`, `never-sim-as-truth`; drill `no-chart-contamination` | ANALYSIS / C4.4 disposition | No |
| 25 | Verification ≠ verification ≠ adoption | Observation `§4` three levels: artifact-integrity (D7) · data/extraction-fidelity (Observation) · **clinical-adoption gate** (Clinical Memory) — *"none implies the next"* | DRAFT-CANON | Partial |
| 26 | Incentive must not bend clinical presentation | Care `§4` recommendation-integrity firewall — *"structural, auditable, economically-blind, posture-invariant"*; C4.6 **`C6` margin-only counterfactual test** | ANALYSIS / C4.6 L2 accepted | Proof spec only |
| 27 | Population learning needs a stated basis | Care `§7`: *"by purpose + legal basis + consent + partition + source-authority ... NOT a blanket 'de-identified'"*; platform `L5 alpha laundering ... PROHIBITED` | ANALYSIS | No |
| 28 | Federation must not prefer OMNI's own operators | Federation inv 29 / `T0-14`: *"no discovery/routing preference for OMNI operators"* | DRAFT-CANON | No |
| 29 | Do not become a thin broker | `D0THES-GRD-032` — *"Handshake connotes exchange/broker/route; OMNI is context + authority + ownership + proof + commit. Do not let the metaphor optimize the company toward thin brokering"*; `GRD-034` — measured by preservation, not integration count | **RATIFIED** | n/a |
| 30 | Agent-mediated edges are not a new domain | WI9: *"Every incoming AND outgoing edge may be mediated by AI agents ... **NOT a new domain**"* — composes WI1 + P35 + §C + Federation + Identity | Watch item / spine candidate | No |

### §5.1 What the matrix means for the proposal's seven gaps

| Proposal gap | Verdict after EXISTS-AS |
|---|---|
| 1. No single context-to-intervention continuity frame | **CONFIRMED.** Pieces are real and scattered; no carrier composes them end to end. This is the arc's actual subject. |
| 2. Context package underdefined | **CONFIRMED, and already named.** GCE is the **ratified home**; the FAI G1 carrier says verbatim at `G-18` that *"the contract content does not yet exist (thesis §C paused)."* The `2026-06-03` outward-interop audit already proposed it as a **"Big new contract."** The gap is content, not recognition. |
| 3. Intervention lineage not composed end to end | **CONFIRMED, and the sharpest true absence.** A unified exposure/lineage record threading producer + version axes + patient exposure cohort + post-market recall is **not found as a named object** anywhere. |
| 4. Opportunity discovery / demand aggregation not separated | **CONFIRMED for the general mechanism; PARTIALLY EXISTS for the research case.** The proposal's seven-level consent ladder is **substantially a re-derivation of C3.7's `research_permission_stack`** (row 10), and its "aggregate only, pre-consent" rule is **`candidate_visibility_scope`** (row 11). Cite; do not re-derive. Genuinely absent: any privacy-preserving *query mechanism* — federated query, beacon, anonymous eligibility, cohort counts, differential privacy, computation-to-the-data. |
| 5. Selection accountability incomplete | **CONFIRMED but OFF-LIMITS.** FAI's Selection Accountability is a stabilized candidate **under acceptance hold** and must not be repurposed. Adjacent existing law: Federation inv 29 / `T0-14`, Care `§4` economically-blind firewall, C4.6 `C6`. |
| 6. Long-horizon obligation survival underdefined | **CONFIRMED at build level; partially designed.** `care_obligation` is a draft contract anchored to `care_episode_id` rather than to a person — a design that already survives clinician departure. `care_commitment` is OPEN at `REV-141`. Nothing is built. Vendor insolvency, device-app removal and consent-expiry-vs-obligation are genuinely unmodelled. |
| 7. Commercial neutrality / institutional defense | **ALREADY LAW, in pieces.** `GRD-032`, `GRD-034`, Federation inv 29 / `T0-14`, Care `§4`, `L5 alpha laundering PROHIBITED`, WI12. **Do not mint a new anti-marketplace guardrail.** Compose and cite; if a real hole exists, name it against these. |

**Net effect: roughly two-thirds of the proposed gap list is already named in the estate at `analysis_nonbinding` maturity with open owner decisions.** That is the finding, and it is exactly the failure this arc exists to avoid.

---

## §6 — Architecture inheritance map

What the arc composes on, and who owns each piece. **Nothing here is the arc's to re-own.**

| Concern | Owner | State |
|---|---|---|
| Who the external actor is; represented principal | Identity | DRAFT-CANON; `device/robot/external_system` subtypes exist; cross-org DEFERRED (`REV-143`) |
| Capability, attestation, delegated-authority envelope, substance-class and prescribing gates | RBAC | DRAFT-CANON; `system_actor_atom_grant` exists; `Q-DL18-4` OPEN |
| Cross-boundary topology, permeability, grants, `jurisdiction_admission_rule`, `patient_continuity_policy` (default `isolated`) | Federation | DRAFT-CANON; **no non-human/agent modeling — named gap** |
| Consent artifacts and families; media custody | D7 | DRAFT-CANON |
| The governed exchange spine | GCE (posture) | **RATIFIED**; boundary-contract content ABSENT |
| Context assembly, orchestration, `cns_decision` with rule + model versions, `trace_lineage` | CNS | DRAFT-CANON; owns no truth |
| What is offered; `service_policy`; eligibility-gate definitions and timings | Settings | DRAFT-CANON; **no evaluator in `lib/`** |
| Booking-time evaluation | D3 | DRAFT-CANON |
| Actualized work; `care_episode`; clinician-of-record continuity | D5 | DRAFT-CANON |
| Act loop; `fulfillment_order`; `care_obligation`; release **state** (not release authority) | OFC | DRAFT-CANON; `REV-163` |
| Money, entitlement, financing physics | D6 | DRAFT-CANON |
| Data/extraction-fidelity gate | Observation | DRAFT-CANON |
| Clinical adoption gate — what is true now, by whom | Clinical Memory | DRAFT-CANON |
| Per-system posture and command mode | **P35 — NO OWNER (`REV-188`)** | **ORPHAN** |
| Outcome / RWE | `REV-174` sub-plane — NO OWNER | **ORPHAN** |
| Intervention exposure / lineage record | — | **DOES NOT EXIST** |

**Three orphans and one absence. That is the arc's real work surface.**

---

## §7 — Provisional actor / principal map

Not a new ontology — an enumeration of who can appear, so scenarios can be traced without inventing actors.

`patient` · `patient's surrogate / DPOA / guardian` · `referring or prescribing clinician` · `proceduralist or administering clinician` · `supervising clinician` (of a machine or a delegated act) · `longitudinal care team` · `treatment facility / site` · `operator of record` (the OMNI-side business entity) · `intervention producer` (manufacturer, compounder, protein-design lab, model operator) · `execution device or robot` + its `vendor operator` · `laboratory / diagnostic` · `logistics / cold-chain custodian` · `payer / financer` · `regulator` · `IRB / ethics body` · `sponsor` (research) · `non-human delegated agent` (OMNI-side or counterparty-side) · `federation peer`.

**Discipline, from existing law:** a principal's rights derive from `authority_basis` (Care `§5b.1`), not from possession of data, employment of a clinician, ownership of an interface, or having generated a recommendation. Only humans hold care-ownership (Identity inv 7; RBAC inv 5). **Delegation is never inferred from call topology** (`D0OL-GRD-008`: *"A nested call, agent invocation, MCP exposure, function signature, or parent-child trace proves execution topology — NOT identity, delegation, capability, custody, or authority"*).

---

## §8 — Provisional lifecycle skeleton, with the break-points marked

Adopted from the proposal and annotated with what the estate can and cannot carry today. **Each arrow is a candidate failure; the annotation is the Gate-1 hypothesis.**

```
  signal / risk / opportunity                       [Observation + CM: EXISTS, draft]
        ↓
  patient and/or provider intent                    [Care §5a: EXISTS, analysis]
        ↓
  discovery / matching / eligibility inquiry        ◆ MECHANISM ABSENT (privacy-preserving query)
        ↓
  purpose-bound context grant                       ◆ HOME RATIFIED (GCE), CONTENT ABSENT
        ↓
  external capability + counterparty acceptance     ◆ P35 ORPHANED (REV-188); acceptance = C4.6 rung 5
        ↓
  intervention design / selection / configuration   ◆ no object; selection law partly exists
        ↓
  clinical / patient / institutional / reg review   [Care §5b four projections: EXISTS, analysis]
        ↓
  care commitment / order / enrolment / referral    ◆ care_commitment DEFERRED (REV-141)
        ↓
  manufacturing / preparation / logistics           ◆ custody_chain EXTEND proposed; not built
        ↓
  administration / procedure / device activation    ◆ command_authority_boundary ORPHANED
        ↓
  exposure + execution receipt                      ◆ EXPOSURE RECORD DOES NOT EXIST
        ↓
  outcome / adverse event / non-response            ◆ outcome_intelligence ORPHANED (REV-174)
        ↓
  monitoring / recall / revision / re-dose          ◆ no recall→exposure→patient linkage
        ↓
  transfer / substitution / closure / obligation    ◆ care_obligation DRAFT, NOT BUILT
```

**Eight break-points. Three are orphans with open owner decisions; two are absences; three are drafts that have never been built.** This diagram is the arc's Gate-1 test plan in compressed form.

**The non-frontier claim, which the arc must verify or kill first (`§16` S0):** at least five of these break-points are already live for a 503A-compounded peptide and a Botox lot **today**, with no frontier modality involved. If S0 confirms it, the arc's value is immediate rather than speculative. **If S0 refutes it, the arc should be re-scoped or closed** — that is a real reject condition, not a formality.

---

## §9 — Gap hypotheses, counter-hypotheses, falsifiers

Stated so they can lose. Each has a named falsifier.

| ID | Hypothesis | Counter-hypothesis | Falsifier |
|---|---|---|---|
| `H1` | No carrier composes context → intervention → exposure → obligation end to end; the seams break at the joins | The pieces compose fine once routed; the "gap" is a documentation problem | Trace S0 + two frontier scenarios through the existing owners. If every fact has a home and every arrow a rule, `H1` dies and the verdict is `SUFFICIENT_WITH_ROUTING` |
| `H2` | GCE's boundary-contract **content** is absent, so each arc re-derives a profile shaped like it | `GRD-034` + the ratified spine are sufficient; a field-level contract is premature | Find any accepted field-level boundary-exchange contract. FAI `G-18` currently says the content does not exist |
| `H3` | A unified **intervention exposure record** does not exist, so recall cannot reach the exposed cohort | Exposure is derivable by joining OFC + D5 + D7 + Observation; no new object needed | Attempt the join for S8 (recall after exposure). If the derivation is complete and authority-preserving, `H3` dies |
| `H4` | No privacy-preserving discovery mechanism exists, so rare-cohort discovery has no lawful path | C3.7 `research_permission_stack` + `candidate_visibility_scope` already cover it | Trace S6 using only C3.7 primitives. If it completes without identity leakage, `H4` narrows to "research-only" and the general case is a routing decision |
| `H5` | `care_obligation` anchored to `care_episode_id` survives clinician departure but **not** operator exit, vendor insolvency or consent expiry | The three are the same problem and the anchor already solves it | Trace S10 + S12. Name which anchor breaks |
| `H6` | P35's eight modes are sufficient as a *vocabulary* but unusable without an owner, a resolver and a per-context binding | P35 needs no owner; it is a descriptive label consumed by RBAC | Attempt to evaluate a `human-confirmed-command` posture for S4 against RBAC + Identity as written. If it resolves, `REV-188` is a labelling question, not an architecture one |
| `H7` | Selection accountability for *producers* is not covered by existing neutrality law | `GRD-032/034` + Federation inv 29 + Care `§4` + C4.6 `C6` already cover it | Construct a producer-selection case that none of the five constrains. If impossible, `H7` dies and the finding is "compose and cite" |
| `H8` | The invariant already binds routine care, so the arc is not speculative | It only binds novel modalities; today's care is a catalog-and-order world | **S0.** This is the arc's load-bearing commercial claim and the cheapest one to test |

---

## §10 — Modality and stressor taxonomy

Modalities are **stressors selected for the axes they stress**, never the subject. The axes:

| Axis | Meaning | Low | High |
|---|---|---|---|
| `production_locus` | who makes the thing | shelf product | designed for one patient |
| `patient_specificity` | is the patient an input to the product | none | the patient **is** the input (autologous) |
| `execution_agency` | who performs the act | human | machine under supervision → autonomous |
| `adaptivity` | does it change after commitment | fixed | continuously revised |
| `obligation_horizon` | how long the duty runs | single visit | multi-year / lifetime |
| `principal_count` | distinct authorities in the chain | 2 | 8+ |
| `regulatory_settledness` | how stable the legal status is | approved, stable | individualized pathway / gray zone |
| `producer_permanence` | will the maker still exist | incumbent | startup / single program |

**Stressor set, with the axes each maximizes** — chosen for orthogonality, not for novelty:

`503A-compounded peptide, today` (settledness ↓, producer permanence ↓ — **the routine anchor**) · `patient-specific neoantigen vaccine` (specificity ↑, settledness ↓) · `autologous cell/gene therapy` (specificity max, `chain_of_identity`, custody ↑) · `AI-designed peptide or biologic` (production locus, model lineage) · `supervised autonomous procedure` (execution agency ↑, command boundary) · `adaptive closed-loop implant` (adaptivity ↑, obligation horizon ↑) · `privacy-preserving rare-mutation discovery` (discovery mechanism, principal count) · `trial / expanded-access pathway` (research permission stack, sponsor) · `recall after exposure` (exposure linkage, containment authority) · `cross-federation transfer mid-treatment` (continuity, portability) · `producer insolvency mid-obligation` (producer permanence min) · `multi-principal disagreement` (principal count max) · `multi-year re-dose after relationship dissolution` (obligation horizon max).

---

## §11 — Context-package questions (frozen; not answered here)

`Q-ECB-1` — Does the boundary exchange object need field-level contract content, or is the ratified GCE spine plus `GRD-034` sufficient? *(FAI `G-18` says content does not exist; the `2026-06-03` audit says "Big new contract." Both are non-binding. Unresolved.)*

`Q-ECB-1a` — If content is needed, which of these are **contract terms** versus **derivable**: purpose · intended decision or act · recipient · minimum-necessary envelope · provenance per fact · adopted-vs-unadopted status · freshness · uncertainty · permitted use · prohibited secondary use · retention · expiry · revocation · onward-disclosure rule · required response · capability/model version · receipt and destruction proof · `trust_transfer_record`.

`Q-ECB-1b` — What is the relation between CNS `§9.1`'s **internal layered context packet** (references, never copies; preserves authority) and a **boundary** exchange object? Same object with a boundary profile, or two objects? *(Naming them alike is a live collapse risk.)*

`Q-ECB-1c` — `trust_transfer_record` is ratified doctrine and unbuilt (`C38-G3-034` = bent). Does this arc specify it, or route it? **Default: route.**

`Q-ECB-1d` — Which disclosures should **not** move data at all — computation to the data, aggregate-only return, one-time eligibility response, clinician-mediated relay, refusal? *(The proposal's strongest point; no mechanism exists.)*

---

## §12 — External-capability and command-boundary questions

`Q-ECB-2` — **`REV-188`: who owns `external_capability` / `command_authority_boundary`?** New substrate, or an extension of Observation + Federation? Open since 2026-06-14. **This is the arc's most concrete deliverable.**

`Q-ECB-3` — Are the eight modes complete, and at what grain do they bind — per system, per capability, per context, per act, per patient, per episode?

`Q-ECB-4` — Where does a *supervised* act sit? A machine acting under named human supervision is neither `bounded-command` nor `human-confirmed-command` as written. Does a mode exist, or is supervision an orthogonal axis? *(Candidate finding; not decided.)*

`Q-ECB-5` — What is the execution **receipt**, and how does it differ from an ACK? `D0W3B-GRD-002` and C4.3 `O10` already forbid ACK-as-custody; what positively constitutes proof that a physical or digital act occurred, by whom, under whose authority?

`Q-ECB-6` — **The `Q-DL18-4` dependency.** Delegated-authority grain is FAI's paused next act. Can this arc trace command-boundary scenarios **without** deciding it? *(Working assumption: yes — describe the grain requirement, do not choose it. If Gate 1 proves otherwise, STOP and report.)*

`Q-ECB-7` — Federation has **no** non-human/agent modeling despite the ratified posture requiring it. Is that this arc's finding to route, or Federation's own debt? **Default: route to Federation; do not fix here.**

---

## §13 — Opportunity-discovery, privacy and demand-aggregation questions

`Q-ECB-8` — Are these constitutionally distinct, and where does each live: aggregate opportunity · anonymous eligibility · patient re-contact · clinical qualification · commercial lead generation · referral · enrolment · executable case? *(The proposal's separation is right. Six of eight have no home.)*

`Q-ECB-9` — Does C3.7's `research_permission_stack` + `candidate_visibility_scope` + `standing_match` **generalize** beyond research, or is a general discovery-permission model net-new? *(Generalization is the cheaper hypothesis and must be tested first.)*

`Q-ECB-10` — Is a privacy-preserving query mechanism in scope for this arc at all, or is it a separate substrate question? External mechanism comparators exist (federated query, beacon, DP) and must be handled under `GRD-038`/`GRD-039` — **propose only, never adopt as identity** (`GRD-033`).

`Q-ECB-11` — The demand-aggregation case (*"a fleet sees N cases in a region"*) collapses six information products into one sentence: regional demand · expected eligible volume · capacity planning · patient identification · individual suitability · permission to act. Which of these may legitimately leave, to whom, at what aggregation, under what basis? Care `§7` already requires a stated population-learning basis — does it cover this?

---

## §14 — Selection, commerce and neutrality questions

`Q-ECB-12` — Composing existing law (`GRD-032`, `GRD-034`, Federation inv 29 / `T0-14`, Care `§4` economically-blind firewall, C4.6 `C6` margin-only counterfactual, `L5 alpha laundering PROHIBITED`, WI12), **is producer selection already constrained, or is there a real hole?** Burden is on finding the hole, not on minting a guardrail.

`Q-ECB-13` — Are these separable and separately visible: trusted integration · admitted capability · preferred commercial partner · clinically recommended intervention · payer-mandated option · patient-selected option · OMNI-owned product?

`Q-ECB-14` — **HARD CONSTRAINT, not a question.** FAI's Selection Accountability is a stabilized candidate **under acceptance hold**. This arc may **cite** it as an inherited dependency and may **not** extend, repurpose, re-litigate or rely on it. Any finding that appears to require it is a `FAI_INTERRUPT_CANDIDATE` and stops for Nick.

---

## §15 — Exposure, outcome, recall, transfer and obligation questions

`Q-ECB-15` — Does a **unified intervention exposure record** need to exist, or is exposure derivable by joining OFC + D5 + D7 + Observation? *(`H3`. The estate has no such object; DL-20 inv 13 — performed-intervention line captures product/lot/expiration/units — is parked evidence, not a contract.)*

`Q-ECB-16` — Which lineage axes are **mandatory**, which **per-modality**, which **never OMNI's**: design · model version · software version · protocol version · lot/batch · source material · device version · operator · supervisor · facility · instructions · consent · exposure?

`Q-ECB-17` — **Containment is layered, and the layers are not interchangeable.** Regulator withdrawal · manufacturer recall · institutional suspension · federation admission revocation · OMNI integration suspension (integrity/security only) · clinician cessation · patient refusal · payer change · emergency containment. Each needs scope · initiating principal · evidence · reason · effective time · affected products/lots/models/sites/populations · temporary-vs-permanent · appeal route · notification duties · exposed-patient identification · safe continuation or substitution. **Does anything in the estate carry this?** *(Searched: no clinical-product containment substrate found. Outbound suppression and GRR admission-security exist; they are not this.)*

`Q-ECB-18` — An outcome signal must not auto-become a platform-wide blacklist. How does observation → adjudicated safety concern → containment → accountability stay staged? *(Composes `REV-184` never-rewrite + Observation/CM gates + `D0OL-GRD-009` — a score informs, never authorizes.)*

`Q-ECB-19` — Which anchor makes an obligation survive? `care_obligation` hangs on `care_episode_id`, which already survives clinician departure. Does it survive **operator** exit, **producer** insolvency, **consent expiry**, or patient movement across federations? *(`H5`. `care_commitment` is OPEN at `REV-141` and may be the real anchor — which would make this a `REV-141` dependency, not a new object.)*

`Q-ECB-20` — Is `outcome_intelligence` (`REV-174`, orphaned) a prerequisite for this arc, or a downstream consumer? **Default: consumer. Do not adopt `REV-174`'s orphan.**

---

## §16 — Scenario plan (planned, NOT executed at Gate 0)

Gate 0 decides only whether the set is **sufficient, orthogonal and evaluable**.

| ID | Scenario | Primary axes | Falsifies |
|---|---|---|---|
| **S0** | **503A-compounded peptide prescribed today** — producer external, regulatory status `as_of`, lot real, titration obligation outlives prescriber | settledness ↓, producer permanence ↓ | **`H8`** — the whole non-frontier claim |
| S1 | Patient-specific neoantigen vaccine | specificity ↑, settledness ↓ | `H1`, `H2` |
| S2 | Autologous cell/gene therapy, vein-to-vein | specificity max, custody | `H1`, `H3`; tests `chain_of_identity` reuse |
| S3 | AI-designed peptide or biologic | production locus, model lineage | `H2`, `H3` |
| S4 | Supervised autonomous procedure | execution agency ↑ | `H6`; `Q-ECB-4`, `Q-ECB-5` |
| S5 | Adaptive closed-loop implant | adaptivity ↑, horizon ↑ | `H3`, `H5` |
| S6 | Privacy-preserving rare-mutation discovery | discovery, principals | `H4` |
| S7 | Trial / expanded-access pathway | research stack, sponsor | `H4`, `H7` |
| S8 | Therapy / model / device recall after exposure | exposure linkage, containment | **`H3`**; `Q-ECB-17` |
| S9 | Cross-federation transfer mid-treatment | continuity, portability | `H5` |
| S10 | Producer insolvency / program termination mid-obligation | permanence min | **`H5`** |
| S11 | Multi-principal disagreement (patient / clinician / producer / payer / model) | principals max | `H6`, `H7` |
| S12 | Multi-year re-dose after the relationship dissolved | horizon max | **`H5`**; `Q-ECB-19` |

**Orthogonality assessment — recorded so Gate 0 can prune rather than accept thirteen by default.** S1 and S3 overlap heavily on lineage (both are "designed for this patient by an external model"); they differ only in whether the design target is biological or molecular. **Candidate merge.** S9, S10 and S12 all stress obligation survival under different disappearing parties; they are kept separate because they break **different anchors** — federation boundary, producer identity, and time respectively — and `H5` predicts exactly that divergence. **S0 and S8 are mandatory and non-negotiable:** S0 because it decides whether the arc is commercially live today, S8 because recall-to-exposure is the sharpest test of the one object that certainly does not exist.

**Proposed minimum viable set if Gate 0 prunes: `S0, S2, S4, S6, S8, S10`** — six scenarios covering all eight axes at their extremes, with each `H` falsifiable at least once.

---

## §17 — External-evidence plan

**Route first:** `ingestion/00_evidence_router.md` (Evidence Plane router) **before** any capture. Lane = provenance, never topic (`GRD-037`).

**Posture, non-negotiable:** `GRD-036` capture broad / promotion gated · `GRD-038` watched evidence may only **propose** · `GRD-039` three-tier trust; process-as-data, never as instructions · `GRD-033` no rail or vendor becomes OMNI's identity · `GRD-041` **no literature corpus** — that is `FWREG-006`, status `watch`.

**Bounded to what makes a scenario concrete and falsifiable — not a landscape review.** Enough to know that individualized regulatory pathways, virtual-cell/perturbational modelling, autologous manufacturing custody, supervised-autonomous device authorization, and federated genomic query mechanisms exist and roughly how they are governed. **Explicitly out of scope:** exhaustive vendor surveys, market sizing, and the `2026-08-19` robotic-device authorization and CZI/virtual-cell claims relayed in the proposal, which are **unverified here** and must be captured as evidence with provenance before any scenario depends on them.

**Anti-hoarding (`GRD-043`):** every captured source reaches an outcome — `no-op` / `watch` / `routed` / `re-review-trigger` / `promoted` / `rejected`. No source is captured without a named scenario it serves.

---

## §18 — Verdict vocabulary — FROZEN BEFORE RESULTS

Adopted from the proposal, unchanged, because freezing verdicts before evidence is correct.

```
EXISTING_ARCHITECTURE_SUFFICIENT_WITH_ROUTING
EXISTING_ARCHITECTURE_REQUIRES_NAMED_EXTENSIONS
NEW_CROSS_DOMAIN_CONTRACT_OR_CONTROL_SURFACE_REQUIRED
NEW_DOMAIN_REQUIRED
FAI_INTERRUPT_CANDIDATE
STRATEGIC_ONLY_NO_ARCHITECTURE_CHANGE
INSUFFICIENT_EVIDENCE
```

**Burdens.** `NEW_DOMAIN_REQUIRED` requires surviving the `GRD-026` decompose-before-naming test **and** the `GRD-035` no-god-domain test, with a named concern that no existing owner can hold. `FAI_INTERRUPT_CANDIDATE` requires a **concrete contradiction** in foundational architecture — not an exciting scenario.

**Prior expectation, recorded so it can be wrong:** `EXISTING_ARCHITECTURE_REQUIRES_NAMED_EXTENSIONS` + `NEW_CROSS_DOMAIN_CONTRACT_OR_CONTROL_SURFACE_REQUIRED`, with the cross-domain surface most likely being **a seam/boundary object plus a lineage-and-exposure object**, not a domain. The arc must earn it.

**Per-finding classification is additionally mandatory** against the FAI-impact vocabulary in `§3.4`.

---

## §19 — Proposed downstream gates

### §19.1 Three gates, not six — and what was dropped

The proposal suggested G0 → G5. **Three are proposed.** Justification, on the record: the read-graph's Major-Arc Intake route states that *"no arc is owed any prior arc's pressure-test sequence"* and carries a **standing simplification obligation**; Build OS `10` Step 5 requires evidence-driven simplification; and FAI is the live counter-example — eight G1 outputs, three complete, paused. **Scope is the failure mode this estate actually has.**

| Gate | Purpose | Entry | Exit |
|---|---|---|---|
| **G0** *(this file)* | Recover, freeze the question, freeze verdicts, prune scenarios | — | Nick + Knox accept / amend / reject |
| **G1** | Trace the pruned scenario set against the recovered architecture. Bounded external evidence **inside** the trace, only where a scenario needs it to be concrete | G0 accepted | Every scenario traced to a break or a pass; every `H` won or lost; no undisposed `Q-ECB-*` |
| **G2** | Extract candidate architecture, classify each finding, route it, produce backpressure for current build | G1 exit | One verdict from `§18`; every finding routed to a named owner; **`REV-188` answered or explicitly re-deferred with a reason** |

**Dropped, with reasons.** The proposal's separate Gate-1 evidence lanes and Gate-2 scenario tracing are **merged into G1**: running evidence lanes ahead of the trace is what produces unread source floors, and this estate has already paid for that. The proposal's Gate-3 extraction and Gate-5 disposition are **merged into G2**: extraction without routing is precisely the "massive narrative that never routes into contracts" failure the proposal itself warned about, so they should not be separable.

**Gate-4 competitive/institutional pressure is NOT dropped — it is de-gated.** The composite-threat pass (Epic-like record + Palantir-like fusion + Apple-like relationship + frontier model layer + biotech producer + integrated provider network + robot fleet + payer routing) is genuinely valuable and is a **strategy** question Nick owns, not an architecture verdict. Making it a mandatory gate would let a strategy debate block an architecture finding. **Recorded as an optional lane `L-STRAT`, trigger: Nick activates it, independently of G1/G2.** Its most useful question is the wedge test — whether medspa / dermatology / plastics clinics are the right substrate for longitudinal interventions, producer networks, outcome follow-up, consent portability, and device/therapy lineage.

### §19.2 Method law for this arc — the FAI G1 lesson, made mechanical

Nick's diagnosis: *"output 1-3 were totally missing things ... we just didn't design great ... despite using 6-7 agents ... before we finally got in the rhythm for it in output 4."* The mechanical cause is recoverable from the FAI carrier itself: R8 `§3.9.1`'s mandatory Lane-3 `M-106` EXISTS-AS check was **"never run by this arc"** until R7→R8, and even then ran for only **two** of the operations capabilities (`B-8` = `PARTIAL`). Outputs 1–3 were authored **before** the source floor was read. Output 4 improved because by then EXISTS-AS had run and recovered seven ownership concepts.

**Therefore, binding on this arc:**

1. **EXISTS-AS runs BEFORE authoring, per output, never after.** No finding is written until it has failed a novelty check against the estate. *(Discharged for Gate 0 — `§5`.)*
2. **The source floor is declared and discharged per output**, with a named disposition for each source. No global "sources consulted" claim.
3. **One carrier.** No secondary ledger, matrix or register until this carrier proves it cannot hold the content. `D0TIER0-GRD-002` — any stream artifact created needs its operating contract in the same pass, which is a real cost.
4. **No parallel lanes, agents or evidence runs before G0 is accepted** (Major-Arc Intake route, explicit).
5. **`METHOD-000` — read the controlling sources and answer — is the default.** The repertoire (`doctrine/omni_work_method_repertoire.md`) is an optional catalog, consulted only where a named material uncertainty would be better served by a specialized method, and recorded only when it changes scope, independence, cost or acceptance. **No per-gate method matrix. No method performed because it exists.**
6. **One current-state surface** — `§1`. `D0CKPT-GRD-003`: a stale status summary must be invalidated when the owning statement changes.
7. **Gate 1 must open the six AI-corpus concept registries** (`EVRUN-000001/2/3/5/6/11`) for the operations-adjacent questions, or record why they are not applicable. They are declared un-inspected in `§4` and this is the obligation that discharges it.

---

## §20 — Routing, catalog, read-graph, open-review and future-work impacts

### §20.1 Governance side effects are PROPOSED, not landed — and why

`AGENTS.md` requires passport + catalog row + read-graph evaluation in the same pass (Agent Work Protocol `§5`). The passport is present. **The catalog row and read-graph route are authored below but NOT landed**, for two reasons, both concrete:

1. The current checkpoint states: *"While vacant, no lane may land a shared control-plane surface; a replacement holder must run a freshness + collision check and record it."* **`PRESPINE-PHASEA-INTEGRATOR` is VACANT.** FAI — a far larger arc — recorded its own ten catalog rows and its read-graph route as `OWED and BLOCKED` on exactly this, and this arc will not claim a lower bar than FAI accepted.
2. The collision is **real, not theoretical.** The FAI branch has already modified `01_master_corpus_catalog.md` (+13), `04_manifest_read_graph.md` (+10) and `future_work_registry.md` (+2). Editing those same files from a `main` base would produce merge conflicts on shared governance surfaces — precisely the failure `D0CKPT-GRD-002` exists to prevent.

**The read-graph evaluation itself is performed and recorded** (`§20.3`), which is what `§5` requires. The row text is authored here so the debt discharges in one mechanical action the moment an integrator exists.

### §20.2 Catalog row — ready to land, 24-column schema

```
| `.cursor/plans/v4_ECB_G0_external_capability_boundary_reconnaissance_2026-09-11.md` | ECB Gate 0 — External Capability Boundary reconnaissance | markdown_doc | plan_or_roadmap | cross_domain, architecture_governance, federation, rbac_authority, cns_orchestration, ordered_fulfillment | analysis_nonbinding | active | no | yes | no | none | none | `.cursor/plans/v4_ECB_G0_external_capability_boundary_reconnaissance_2026-09-11.md` | add_tier3 | consult_if_routed | user_knox_required | yes | routed | targeted_semantic | review_queue | routed | Gate-0 recon + question-freeze carrier for the ECB arc (external capability boundary / externally produced interventions). Owns arc state at §1; originates no doctrine; mints no domain; does not reopen FAI. Runs EXISTS-AS against P35/REV-188, GCE/D0THES-DEC-036, C3.7 research_permission_stack, care_obligation/REV-141, REV-174, REV-184. Authored on `main` base with source pins to the FAI branch; governance side effects PROPOSED pending integrator. | ecb_arc_gate0 | ECB-G0 |
```

### §20.3 Read-graph evaluation — performed, route PROPOSED

**Evaluation result: a new Tier-3 route is warranted, and one existing routing defect is exposed.**

Proposed route, satisfying the Route Entry Contract (trigger · path · read rule · tags · lifecycle · supersession):

```
#9w — ECB / External Capability Boundary (externally produced interventions)
  trigger: work touching external capability posture, command/execution authority over a
           non-human actor, intervention lineage/lot/exposure, recall-to-exposed-cohort
           linkage, privacy-preserving discovery or opportunity/demand separation, or
           obligation survival past producer/operator disappearance.
  artifact: .cursor/plans/v4_ECB_G0_external_capability_boundary_reconnaissance_2026-09-11.md
  read rule: consult_if_routed — analysis_nonbinding; originates no doctrine
  tags: cross_domain · architecture_governance · federation · rbac_authority ·
        cns_orchestration · ordered_fulfillment · d7_documents_consent ·
        observation_measurement · clinical_memory
  lifecycle: active (arc not started; Gate 0 pending Nick + Knox)
  supersession: none — pure addition
  hard caveat: does NOT reopen FAI; FAI state resolves ONLY through Tier-0 #15.
               FAI Selection Accountability is under acceptance hold and is not
               extensible from here (§14 Q-ECB-14).
```

**Routing defect exposed, and it is the load-bearing one.** `P35` has been analyzed across C3.5, C3.6 and C3.8 and gate-accepted as a frame, yet **nothing in the read graph routes to it.** Its owner decision has sat open at `REV-188` since 2026-06-14 and three later arcs did not see it. This is the same mechanism the FAI arc-opened handoff recorded for route `#9g` (Reactor: *"`consult_if_routed` and nothing routes to it, so a closed, adversarially-tested constitutional candidate was invisible to three later arcs"*). **Recommendation: route `#9w` must also point at the P35 carriers** (`v4_C3_5F5` §P35-RENAME, `v4_C3_5G4` §1.5, `v4_C3_5G4_1` §B) so that any future external-capability work loads them. Recorded, proposed, not landed.

**Separate and more urgent — the `main` boot-pointer hazard.** `main`'s `AGENTS.md` and read-graph Tier-0 #15 both name `HANDOFF_2026-08-09_work_horizon_closed_insurance_gate2_startable.md`, whose `§1` authorizes *"Gate-2 construction and pressure, and nothing else."* The real current checkpoint lives only on the FAI branch. **Any agent cold-booting on `main` — the default for a fresh clone or cloud agent — will abandon the live FAI arc**, which is verbatim the incident `D0CKPT-GRD-004` was minted for. This arc **does not fix it** (integrator-vacant; merging PR #17 is explicitly prohibited without fresh authorization). **It is an operator decision and it should be made before any further arc opens.**

### §20.4 Open-review rows — PROPOSED

```
| D0ECB-REV-001 | v4_ECB_G0_..._2026-09-11.md §3.3 | Arc/architecture naming decision Q-ECB-NAME-1 unresolved: `ECB` adopted provisionally as inherited P35 vocabulary; `FIC`/"Frontier Intervention Continuity" rejected (time-indexed; collides with FAI R8 §3.9.2; presupposes `intervention` as an object under GRD-026 scrutiny). Key propagates into row IDs. | architecture_governance | Rename cost rises sharply after Gate 1; a time-indexed or colliding name creates permanent agent confusion. | close at Gate-0 acceptance or before Gate 1 | Nick + Knox | open | owner: Nick; current_disposition: open; closure_condition: name ratified or arc closed; next_trigger: Gate-0 review; blocks_current_work: no |
| D0ECB-REV-002 | v4_ECB_G0_..._2026-09-11.md §20.3 | `P35` (`external_capability`/`command_authority_boundary`) has no read-graph route despite being gate-accepted as a frame at C3.8 and orphaned at `D0THES-REV-188` since 2026-06-14 — the same invisibility mechanism recorded for route #9g (Reactor). | architecture_governance, cross_domain | P35 stays invisible; the fourth consecutive arc re-derives external-capability posture. | read-graph route addition, with integrator | Nick + architecture_steward | open | owner: architecture_steward; current_disposition: open; closure_condition: route lands naming the P35 carriers; next_trigger: integrator appointed; blocks_current_work: no |
```

### §20.5 Future-work registry — PROPOSED

No new `FWREG` row is proposed. **Deliberate:** this arc's open items belong to `§11`–`§15` as `Q-ECB-*` and to the existing rows that already own them — `REV-141` (`care_commitment`), `REV-163` (OFC), `REV-174` (outcome/RWE), `REV-184` (closed; field-set at C5), `REV-188` (P35 owner), `FWREG-006` (clinical knowledge, `watch`). **Creating a parallel register would duplicate live state, which is `D0CKPT-GRD-003`.**

### §20.6 Cross-arc collision check

| Arc / object | State | Collision | Handling |
|---|---|---|---|
| FAI G1 / Authority object | PAUSED, frozen, blob `9835715e` | **Adjacent, not colliding** | Read-only; pinned `§2.1`; `Q-DL18-4` described, never decided |
| FAI Selection Accountability | candidate under acceptance hold | **Would collide if extended** | `§14 Q-ECB-14` — cite only; any need ⇒ `FAI_INTERRUPT_CANDIDATE` ⇒ stop |
| Insurance Gate 2 | FROZEN provisional, PR #14 | No overlap | none |
| Method PR #19 (bounded interrupt) | accepted at review, **not landed** | Non-binding here | May be consulted as a nonbinding candidate for handling a consequential discovery; governs nothing |
| Care capture | FROZEN against edit, **readable** | Heavy read dependency on `§5a`/`§5b`/`§7` | Read via route `#9e`; resolve material claims through the evidence ledger and native carriers (`#9f`); **no Care edit** |
| C3.7 oncology trial access | `plan_active`, `analysis_nonbinding` | **Strong overlap** — `research_permission_stack`, `candidate_visibility_scope`, `standing_match` | Cite and test for generalization (`Q-ECB-9`); do not re-derive |
| C4.6 Rx / pharmacy | Gate-0 accepted; L2 doctrine accepted | **Strong overlap** — acceptance ladder, `as_of` regulatory status, quality/lot/recall profile | Cite; this arc generalizes past pharmacy or it has no reason to exist |
| `PRESPINE-PHASEA` dormant lanes | `not_started`, dormant | No overlap | none |

---

## §21 — Gate-0 stop receipt

**Work class:** major-arc intake / estate reconnaissance. **Authority loaded:** Tier-0 Universal Path; Major-Arc Intake route (delta); Tier-0.5 guardrail digest; current checkpoint (pinned from the FAI branch); `08` open-review; `future_work_registry`; the accepted parent carriers named in `§4`.

**Produced:** this one carrier. Nothing else.

**Discharged:** EXISTS-AS before authoring (`§5`, 30 rows) · question frozen (`§3.1`) · non-goals fixed (`§3.2`) · naming decided provisionally and recorded as an open decision (`§3.3`) · gap hypotheses given falsifiers (`§9`) · scenario set proposed **with** an orthogonality assessment and a prunable minimum set (`§16`) · verdict vocabulary frozen before results (`§18`) · gate sequence reduced from six to three with reasons on the record (`§19.1`) · arc method law made mechanical against the named FAI G1 defect (`§19.2`) · governance side-effect text authored and its blocker named (`§20`) · collision check run (`§20.6`).

**NOT done, by design:** no architecture decided · no domain minted · no scenario executed · no external evidence captured · no lane or agent launched · no contract touched · no FAI mutation · no shared control-plane surface landed.

**Corrections issued upward:** (1) the relayed C3.8 P35 disposition phrase does not exist in the repository — actual routing recorded at `§0.2`; (2) `FIC` not adopted, three reasons at `§0.3`; (3) roughly two-thirds of the proposed gap list already exists in the estate at `analysis_nonbinding` maturity with open owner decisions — `§5.1`.

**Open and owed:** `Q-ECB-NAME-1` (Nick) · `Q-ECB-1` … `Q-ECB-20` (Gate 1) · `D0ECB-REV-001`, `D0ECB-REV-002` (integrator) · catalog row + read-graph route (integrator) · six AI-corpus registries un-inspected (Gate 1, `§19.2.7`) · the `main` boot-pointer hazard (Nick, `§20.3`) · the proposal's external factual claims unverified (`§17`).

**Stop condition.** Superseded only when Nick + Knox accept, amend or reject this carrier. **On acceptance, the next authorized act is G1 with the pruned scenario set — nothing else. On rejection, the authorized act is revising this carrier or closing the arc.**

**STOP: `g0_authored_pending_nick_knox_review · arc_not_started · fai_untouched · no_architecture_accepted · governance_side_effects_proposed_not_landed`**
