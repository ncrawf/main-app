# v4 — C3.5 G4: Hospital-Grade Pressure-Test — Handoff & Verdict (with disposition ledger)

Document type: `handoff` + `analysis` (C3.5 arc closing synthesis) · Authority: `analysis_nonbinding` (`GRD-036`) — feeds v4 thesis/contract shaping; **does not edit contracts**.
Status: `complete_pending_review` 2026-06-14 (C3.5 pressure-test agent). Gate **G4 (Handoff)** — final gate of the C3.5 arc. Closes G1 (A/B/C) → G2 (D) → G3 (E/F) → G3.5 (F2/F3/F4/F5 + convergence-check + topology-reconciliation) → **G4**.
Inputs synthesized: `v4_C3_5A..F` (E/F survivability), `v4_C3_5F2/F3/F4/F5` (superiority), `v4_C3_5_convergence_check_pre_G4`, `v4_C3_5_topology_reconciliation_note`. Contracts read for reconciliation: `federation`, `identity`, `D5` (full) + `settings_catalog`, `CNS`, `ordered_fulfillment`, `clinical_memory` (grep). **Desk-check is CLOSED — all 15 contracts read; finalized in `v4_C3_5G4_1_contract_deskcheck_addendum.md`. (Original phrasing said "8 contracts owed"; that is resolved — no reading owed to the v4 agent.)**

## §0 What G4 IS / is NOT
- **IS:** the C3.5 closing **verdict + disposition ledger**. It states what the hospital pressure-test proved, and **dispositions every F2–F5 family/chain/decision** into one of: `confirmed-canon` · `contract-extension` · `net-new` · `open-review` · `build-os/eval` · `C5-build-only` · `duplicate`. It routes each finding to its canon owner or to `08`. **The ledger (§3) is the integrity mechanism — nothing from 1,158 rows is lost or silently inflated.**
- **IS NOT:** C4 prose · contract edits · a new scenario batch · a vibes summary. No row generation. The 1,158 rows are seed corpus, not coverage (§7).
- **Honest framing (the answer to "did we just rediscover the contracts?"):** partly yes — and that is **validation**. The hospital pressure independently re-derived a large share of locked canon (the contracts are not bullshit), located the true gaps precisely, produced the relationship chains the contracts lacked, and created the simulation-harness obligation. The net-new set is **small because the architecture mostly held.**

## §1 The C3.5 verdict (binding for v4)
1. **Survivability — PASS.** OMNI's separations survive hospital-grade physics: *physics-holds / objects-missing* (E/F). Doctrine holds; specific inpatient write-back objects are unbuilt (named in §4).
2. **Superiority — PASS, and now specific.** OMNI's 100x is **NOT "Epic clone + AI."** It is **governed-loop ownership** across care, family, service-ops, legal/audit, billing, research, workforce, ambient signals, external systems, and network governance — concentrated in **relationship chains** (A–GG) a records-first EHR cannot retrofit. Most of the 100x is **relationship design + a small net-new-object set**, not new objects (F2 headline, confirmed and *sharpened* by reconciliation — the net-new set shrank).
3. **Hospital = stress-case of ONE substrate, NOT a bolt-on.** Evidence-backed, not asserted: **D5 explicitly scopes itself "outpatient-EMR-class … NOT hospital-grade Epic" (D5 §2)**, and the inpatient gap is a *bounded D5/external-capability extension* — not a separate world. Making hospital a bolt-on would forfeit continuity, identity, and governance (lose the dragon).
4. **Topology answer = existing Federation canon.** A hospital / ASC / anesthesia group / lab / SNF / vendor is an **operator** (`legal_entity` + `brand`), i.e. a tenancy/accountability boundary that **owns distinct operational state** (Identity §6 admission guardrail). **Federation is the access *relationship* between operators**, not the entity. **Async is a `modality`, not a node** (D5: modality is an axis; venue.mode_of_practice; modality-switch re-checks licensure). The 6-tier composite topology (`deployment·legal_entity·brand·site·location·venue`) and the 7 per-event ownership dimensions already hold this. **Do not mint a parallel operator/node/setting/location vocabulary.**
5. **External systems = governed via capability modes (P35).** OMNI owns the **link + data + record + command/authority loop + proof**; the device/robot/vendor owns the **physical actuation / native UI**. Per-system mode ∈ `{read-only · write-back · request-only · bounded-command · human-confirmed-command · prohibited-command · emergency-break-glass · vendor-operated}`. This is **genuinely net-new** (no contract owns it).
6. **The 1,158 rows are seed corpus, not coverage.** OMNI needs a **permanent simulation / eval / regression harness** (P39, chains DD/Z); the 10k–30k+ scenarios are a *system function*, not manual markdown. This is a **Build-OS obligation** (§7).
7. **Convergence proven, not asserted.** A 24-domain adversarial breadth probe (pediatrics → genomics → transplant → forensics → value-based-care) found **zero new families**, two new chains (HH, II), three bounded extensions. Family-level discovery is closed; more manual rows would re-derive canon.

## §2 The arc in one place (what each step proved)
| Step | Artifact | Proved |
|---|---|---|
| G1 | A/B/C | hospital reality field from cited public refs; existing OMNI pressure-assets are format, not hospital content |
| G2 | D (101 HCASE) | stratified, brutal scenario library w/ coverage manifest |
| G3 | E (40 traces) / F (disposition) | **survivability: physics-holds / objects-missing**; market-posture ≠ architecture-obligation; dragon's-egg preserved |
| G3.5-B1 | F2 (503 rows) | primitive-sufficiency: **17 families, chains A–H; 100x = mostly relationship design** |
| G3.5-B2 | F3 (255 rows) | hospital-organism layer: **9 families P18–26, chains I–Q** (bedside/family/service/legal/rights) |
| G3.5-B3 | F4 (250 rows) | network/research/twin layer: **9 families P27–35, chains R–Z**; P35 external-capability |
| G3.5-B4 | F5 (150 rows) | topology/continuity/enterprise-ops closure: **5 families P36–40, chains AA–GG; 3 closure decisions** |
| pre-G4 | convergence check | **zero new families across 24 un-batched domains** → row phase closes |
| pre-G4 | topology reconciliation | **P36/P26/P4 = rediscovered canon**; real gap = D5 movement-stateful encounter |

**Corpus total: 1,158 mapped rows · 40 candidate families (P1–P40) · 33 chains (A–GG) · 3 closure decisions.** Disposition follows.

## §3 DISPOSITION LEDGER (the integrity mechanism — every family accounted for)
**Legend:** `CONFIRMED` = already owned by canon (do not reinvent) · `EXTEND` = existing contract needs bounded expansion · `NET-NEW` = no current owner, real v4 candidate · `OPEN-REVIEW` = decision → `08` · `BUILD-OS` = eval/harness obligation. **`✓verified`** = checked against a contract I read; **`~deskcheck`** = inferred from boot-knowledge, formal desk-check owed (§9).

> **UPDATE — all `~deskcheck` items now finalized in `v4_C3_5G4_1_contract_deskcheck_addendum.md`** (all 15 contracts read 2026-06-14). Net movement: several `~`-NET-NEW families moved to **CONFIRMED/EXTEND** (the contracts owned more than this best-judgment ledger assumed). **Read the rows below as the first-pass judgment; G4.1 §A is the verified final disposition. Genuinely-homeless net-new shrank ~11 → ~6.**

| Family | Disposition | Canon owner | Action | Status |
|---|---|---|---|---|
| **P1** Authority-Gate | EXTEND | RBAC (capability/attestation/break-glass) | add stop-line/stop-strength, order-verification-gate, dual-verify, pre-performance-gate as gate variants | ~deskcheck |
| **P2** Actor-Capability-State (credential/coverage) | EXTEND | BIZOPS (workforce) + RBAC | live `credential_capability_state` + `coverage_state` compose into authority (not nightly batch) | ~deskcheck |
| **P3a** `fulfillment_order` | **CONFIRMED** | Ordered Fulfillment | cite; do not duplicate | ✓verified |
| **P3b** `administration_event` (order≠admin) | **NET-NEW** | (OFC extension) | add as a first-class act-loop event (highest-leverage object; E/F top finding) | ✓verified (absent in OFC) |
| **P3c** `movement_state` (inpatient encounter) | **NET-NEW / EXTEND D5** | D5 | the real gap — D5 is outpatient-scoped (§2); add movement-stateful encounter (location×LOC×responsible-unit×authority recompute on ADT) | ✓verified |
| **P4** Obligation (`care_obligation`) | **CONFIRMED** | Ordered Fulfillment | cite; F2 re-derived it. Extend with family/transition/escalation variants | ✓verified |
| **P5** Attention/Routing (shield/budget/interrupt) | **NET-NEW** | CNS (new) | attention-economy substrate (thesis v3 §B / §2A); no current owner | ~deskcheck |
| **P6** Conversation/Rail (`conversation_scope`/`rail_adapter`) | EXTEND | Messaging | confirm conversation-scope; add rail-agnostic adapter + scopes | ~deskcheck |
| **P7a** grants (`visibility_grant`/`shared_context_grant`/`care_relationship`) | **CONFIRMED** | Federation (`REV-157`) | cite; do not duplicate | ✓verified |
| **P7b** `surrogate_authority` / `data_segment_class` / `purpose_of_use` | EXTEND | Identity/RBAC + D7 | add surrogate hierarchy, segment-class (42CFR), purpose-of-use | ✓verified (Identity has relationship; surrogate not first-class) |
| **P8** Context-Assembly (`clinical_context_packet`/`critical_fact_floor`) | **CONFIRMED/EXTEND** | CNS (§9.1) | cite packet; add critical-fact-floor determinism, delta/anchor | ✓verified (CNS grep) |
| **P9a** truth/record (`clinical_assertion`/`evidence_record`/`amend_not_overwrite`/`record_materialization`) | **CONFIRMED** | Clinical Memory + D7 (+ D5 derives `encounter_view`) | cite; do not duplicate | ✓verified |
| **P9b** `ai_decision_log` (AI influence ledger) | **NET-NEW** | (D7/CNS extension) | append-only AI-influence/explainability ledger | ✓verified (absent) |
| **P10** Identity/Relationship (+device/robot/external actors, provisional, dyad) | **CONFIRMED/EXTEND** | Identity | cite (all there incl. actor subtypes); extend provisional-identity + linked-identity (dyad) | ✓verified |
| **P11** Device-Rail | **RENAMED → P35** | — | superseded by External Capability | ✓ |
| **P12** AI-Substrate/Governance (candidate≠commit, model-version, eval, autonomy-ladder, safety-floor, untrusted-input-firewall) | CONFIRMED (thesis) + NET-NEW (objects) | CNS + thesis v3 §B | candidate/commit + per-event ownership = canon; `eval_harness`, `policy_change_gate`, `untrusted_input_firewall` = net-new | ~deskcheck |
| **P13** Proactive-Orchestration | EXTEND/NET-NEW | CNS | anticipatory candidate routing (always candidate, never autonomous) | ~deskcheck |
| **P14** Surface/Projection | **CONFIRMED** | Surface/Projection planes + Settings `T0-15` | cite; projection ≠ authority is canon | ✓verified (settings grep) |
| **P15** Federation/Permeability | **CONFIRMED** | Federation | cite | ✓verified |
| **P16** Degraded-Mode/Continuity | **NET-NEW** | (Build-OS/CNS) | `degraded_mode` genuinely undesigned (E/F gap #1); `reconciliation` exists in CM | ✓verified (degraded absent) |
| **P17** Payment≠Care firewall / per-event-ownership | **CONFIRMED** | D6 (§8.1) + CNS 7-dim ownership (`T0-13`) | cite invariant; assert as strength | ✓verified |
| **P18** Patient/Bedside-Agent | **NET-NEW** | (Surfaces+CNS+Intake) | patient-as-requester conversational surface routing to governed acts; no owner | ~deskcheck |
| **P19** Service-Operation/Work-Order (`service_work_order`/`supply_consumption`) | EXTEND | OFC (fulfillment subtype) + Inventory | non-clinical work-order with SLA gating clinical flow | ~deskcheck |
| **P20** Coding/Claim-Lifecycle | EXTEND | D6 (revenue cycle) | claim state-machine + coding-candidate, firewalled from care | ~deskcheck |
| **P21** Disclosure/Litigation-Export + AI-Explainability (`legal_hold`/`disclosure_package`/`ai_decision_log`) | EXTEND + NET-NEW | D7 | cross-plane disclosure + legal-hold + AI-decision export | ~deskcheck |
| **P22** Rights/Consent-Granularity + Grievance (`ai_consent_scope`/`patient_rights_state`/`grievance_workflow`) | **NET-NEW** | (RBAC/D7/BIZOPS) | granular per-AI-function consent (the rights prize); grievance workflow | ~deskcheck |
| **P23** Std-of-Care/Policy-Object + Provider-Performance | EXTEND/NET-NEW | Settings (policy config) + CNS + BIZOPS | versioned provenanced policy object + conflict-resolution + perf-state | ~deskcheck |
| **P24** Ambient-Sensing (video/audio/behavioral) | **NET-NEW/EXTEND** | Observation | sensor class w/ consent+purpose scoping + evidence | ~deskcheck |
| **P25** Ops-Analytics/Command + Simulation + Fleet-Observability | NET-NEW / BUILD-OS | (Build-OS + Projections) | `operational_simulation`, `agent_fleet_observability` | ~deskcheck |
| **P26** Care-Progress/Blocker-State | **CONFIRMED/EXTEND** | D5 `care_state_view` | extend `primary_blocker` enum (transport/bed/auth/SNF/supply/turnover); do NOT duplicate | ✓verified |
| **P27** Network/Multi-Operator-Governance + Drift | EXTEND | Federation + CNS Meta (Network Governance Plane, thesis §7.6) | cross-operator config/policy/model drift governance | ✓verified (CNS Meta cited) |
| **P28** Outcome-Intelligence / RWE | **NET-NEW** | (CNS/BIZOPS/CM) | cohort/RWE as a separate plane (not care/billing/marketing truth) | ~deskcheck |
| **P29** Research/Trials substrate (`trial_protocol`) | **NET-NEW** | (new domain) | eligibility/blinding/protocol-window/AE/sponsor — firewalled from care + care-learning | ~deskcheck |
| **P30** Diagnostic-Read-Lifecycle | EXTEND | Observation + Clinical Memory (adoption) + D7 | prelim/AI/human/addendum states; AI≠adopted universal | ~deskcheck |
| **P31** Digital-Hospital/Resource-Twin (`resource_twin`/`facility_state`) | EXTEND + NET-NEW | Federation `venue` (partial) + new | live resource model (room/bed/equip/staff readiness gating) | ✓verified (venue partial) |
| **P32** Procedural/OR-Command | EXTEND | D5 (peri-op occurrence) + Settings (gates) + P31 | procedural command cluster | ~deskcheck |
| **P33** Data-Product/Secondary-Use/Monetization | EXTEND + NET-NEW | D7 + RBAC | de-id/DUA/purpose/reid-risk/revenue-separation | ~deskcheck |
| **P34** Physical-Automation/Robotics authority | NET-NEW | (RBAC/AI + P35; robot=actor in Identity) | which loops may automate, override, proof | ~deskcheck |
| **P35** **External Capability / Signal-Command Boundary** | **NET-NEW (headline)** | (new substrate; Observation+Federation adjacent) | `external_capability` + `command_authority_boundary` (8 modes) + `integration_contract` | ✓verified (no owner) |
| **P36** Operator-Graph / Institution-Topology | **CONFIRMED** | Federation (DL-21, 6-tier, locked) | **demote from "new family" → confirmed canon**; cite, do not reinvent | ✓verified |
| **P37** Cross-Setting Continuity (`continuity_binding`) | EXTEND | Identity + Federation grants + D5 `care_episode` + modality | the cross-setting binding chain (AA) is the new framing; parts exist | ✓verified |
| **P38** Workforce-Lifecycle / HR / Payroll | EXTEND | BIZOPS (business_ops_workforce) | onboarding graph + `compensation_rule` (RVU/payroll, firewalled like billing) | ~deskcheck |
| **P39** Training/Simulation/Academy + Rehearsal-Harness | **NET-NEW / BUILD-OS** | Build-OS + BIZOPS (competency) | `simulation_harness` (corpus = regression set) + `training_competency` gating authority | ~deskcheck |
| **P40** Security/Emergency/Physical-Safety/Overhead-Command | EXTEND / OPEN-REVIEW (owner) | CNS/Messaging/RBAC/D7 | `security_emergency_command` + `physical_access_command`; **decide owner** | ~deskcheck |

**Ledger tally — FINALIZED in G4.1 (all 15 contracts read):** CONFIRMED ≈ **15** (G4.1 added P6, P12, P13, P27, P30, P38) · EXTEND ≈ **17** · genuinely-homeless NET-NEW ≈ **6** (P35 external-capability, P18 bedside-agent, P29 trials, P39 simulation-harness, P22 ai-consent/grievance, P28 RWE→`REV-174`) **+ 2 named-contract extensions** (`movement_state`→D5, `administration_event`→OFC) · BUILD-OS ≈ 2 (sim-harness, ops-sim). **The "40 families" honestly reduce to ~6 genuinely-new objects + ~2 named extensions + ~17 extensions + ~15 confirmations.** The count SHRANK on desk-check (killed duplicate would-be-canon) — which strengthens the thesis: the substrate held even more than first stated.

## §4 The genuinely NET-NEW set (what v4 actually adds — small + sharp)
> **Finalized in G4.1:** genuinely-homeless net-new = **~6** (P35 external-capability, P18 bedside-agent, P29 trials, P39 simulation-harness, P22 ai-consent/grievance, P28 RWE→`REV-174`) **+ 2 named-contract extensions** (`movement_state`→D5, `administration_event`→OFC). The list below was the first pass; items 5/6/7/9/10 partially resolved to existing owners (CNS/Observation/D7) on desk-check — see G4.1 §A/§B.

Ordered by leverage:
1. **`administration_event`** (P3b) — order ≠ administration; the highest-leverage act-loop object. OFC extension.
2. **`movement_state` / inpatient encounter** (P3c) — the long-standing E/F/F2 undesigned gap, now located as a **bounded D5 extension** (D5 is outpatient by its own §2).
3. **`external_capability` + `command_authority_boundary`** (P35) — the only genuinely new *cross-domain control plane*; no owner. 8 capability modes; OMNI owns loop/data/authority/proof, device owns actuation.
4. **`care_setting` authority-physics axis** (D5 axis elevation) — generalize `modality`/`authority_class` so inpatient/ED/peri-op physics are expressible.
5. **Attention-economy substrate** (P5) — `attention_routing_state` + `human_attention_budget` + `over_message_shield` + `interrupt_threshold`.
6. **`ai_consent_scope`** (P22) — granular per-AI-function consent (drafting/routing/monitoring/decision-support/ambient/actuation); the rights-defining primitive.
7. **`ai_decision_log`** (P21) — AI-influence/explainability ledger (powers disclosure + recall-blast-radius).
8. **`degraded_mode`** (P16) — designed downtime/continuity (E/F undesigned gap #2).
9. **`outcome_intelligence` / RWE plane** (P28) + **`trial_protocol`** (P29) — separate outcome plane + research substrate (pending desk-check vs Clinical Memory).
10. **`ambient_sensing`** (P24) — video/audio/behavioral sensor class.
11. **`simulation_harness` + `training_competency`** (P39) — the corpus-as-regression Build-OS obligation (see §7).

Everything else = confirmed canon or bounded extension (§3).

## §5 Relationship chains (A–GG) — the v4-shaping artifact (more important than nouns)
The 33 chains are carried forward as **canonical relationship patterns** v4/contracts should name. Disposition note: most chains are *new compositions of existing/near-existing primitives* (the F2 headline — "100x is relationship design"). Highlights:
- **Chain A (universal act-loop):** `signal → candidate → authority-gate → act/event → proof → obligation → learn` — make this the canonical pattern every domain instantiates.
- **Chains C/D/G** (family-comms, device-safety-loop, attention-economy), **K/L/N** (claim-lifecycle, disclosure, policy-governance), **AA/Y** (continuity, external-capability), **DD/Z** (simulation/regression).
- **+ HH** (genomic cross-person duty-to-warn) and **+ II** (law-enforcement/forensic access) from the convergence probe.
- **Reconciliation note:** chains that turned out to be canon (e.g. blocker-state P/`care_state_view`, obligation A/`care_obligation`) are carried as *confirmations*, not new.

## §6 The three closure decisions (binding positions for v4)
1. **Hospital = stress-case of one substrate, not a bolt-on.** (Evidence: D5 §2 outpatient scope + gap = bounded extension.)
2. **Topology = existing Federation model.** Operator = `legal_entity`+`brand` (owns distinct operational state, Identity §6). Federation = the cross-operator *relationship*. Async = `modality`. **No new operator/node/setting/location vocabulary.** (Full reconciliation in `v4_C3_5_topology_reconciliation_note`.)
3. **External systems via capability modes (P35).** OMNI owns loop/data/authority/proof; actuation stays external; mode is per-system, per-context.

## §7 The corpus as permanent simulation/eval/regression harness (Build-OS obligation)
**The 1,158 rows are seed corpus, not coverage.** The biggest meta-lesson of the arc: static row generation cannot cover a hospital — and shouldn't try. OMNI needs a **permanent scenario-generation + simulation + eval + regression harness** (P39; chains DD/Z) as a *system function*:
- The corpus seeds it; the harness generates/organizes the 10k–30k+ scenarios with provenance.
- Every policy/model/config change runs **regression against the corpus** before promotion (chain Z; F5-049; B3-191).
- This is **where the "Silicon Valley will do 30k scenarios" concern is correctly answered** — by a governed system, not a markdown file.
- **Narrow framing (binding — see G4.1 §D):** C3.5 does **NOT** define the Build OS or a "build agent." It contributes **one requirement** — the corpus is seed material for a scenario/sim/eval/regression capability — which **must be reconciled with the existing, denser Build-OS / native-AI-layer workstream** (Stanford/video corpus, agent-execution doctrine, repo memory, evals, go-live rehearsal, training) before design. The harness serves **many areas** (contract regression, model evals, policy regression, safety sims, go-live rehearsal, training, integration-failure, adversarial/security, operator-config), not just hospital pressure-testing. Preserve the **operating law**, not "30k" as a number, not a narrow agent.
- **Route:** existing OMNI Build-OS / native-AI-layer workstream (P39 = the C3.5-contributed requirement + seed).

## §8 Open-review items → route to `08`
- Acute system-of-record market posture (overlay→authority runway)
- Degraded-mode authority (who acts, what assurance, during outage) — P16
- **External-capability owner assignment** (new substrate vs Observation+Federation extension) — P35
- Physical-automation / command boundaries (which loops may ever automate) — P34
- Security/Emergency-command **owner** (CNS vs Messaging vs RBAC vs D7) — P40
- Safety-floor exemption requests (operator-level) — F4 B3-024
- Retention / data-product / secondary-use governance — P33 (F4/F5)
- Training-expiry-timing mid-shift — F5-041
- Vendor-proprietary-logs vs hospital legal-record ownership — F5/B3-247
- Provider-performance-data for compensation (purpose-scope) — B3-165
- Risk-contract / value-based-care object (P20/P38 extension candidate) — convergence probe
- Rails-ownership (phone/email as OMNI rail vs external) — F2/F4

## §9 What the v4 continuity agent does next + remaining diligence
1. **Desk-check — DONE (G4.1).** All 15 contracts read 2026-06-14; every `~deskcheck` item finalized in `v4_C3_5G4_1_contract_deskcheck_addendum.md` §A. The ledger is now canon-true (no reading owed to the v4 agent). Net-new shrank ~11 → ~6.
2. **Shape the thesis (v4):** carry the verdict (§1), the net-new set (§4), the chains (§5), the 3 decisions (§6), and the harness obligation (§7) into thesis-v4 / contract amendments. The biggest contract touchpoints: **D5** (movement-stateful encounter + care_setting axis), **a new External-Capability contract** (P35), **OFC** (administration_event), **CNS** (attention-economy, proactive, ai_decision_log), **RBAC/D7** (ai_consent_scope, disclosure/legal-hold), **Build-OS** (simulation harness).
3. **Promote nothing silently:** all of this is `analysis_nonbinding` until promoted through each domain's review gate (`GRD-036`). Confirmed-canon items need no action beyond citation; extensions/net-new go through contract review.
4. **Do NOT run another row batch.** Convergence is proven (§1.7). New scenarios belong in the harness (§7).

## §10 Wedge (outpatient/async strengthening — the dragon doesn't wait for hospitals)
The hospital pressure-test's biggest *practical* payoff is the wedge: the substrate that survives inpatient also makes Bloom/async stronger **now**. Highest-value wedge carries: `continuity_binding` (home/async data follows the patient), attention-economy + over-message-shield (async review queues), `care_obligation`/protocol-followup (already canon — deepen), `ai_consent_scope` (async AI trust), `external_capability` (home wearables under one boundary), `outcome_intelligence` (async RWE flywheel), `simulation_harness` (async staff onboarding + regression). **~50%+ of all rows were wedge-tagged. The hospital was the stress-test; the wedge is the immediate dividend.**

## §11 Artifact Use Map / Non-Graveyard Routing
*(Added 2026-06-14, parity with C3.6 G §8.5.)* G4 + G4.1 are the verdict + verified ledger; **the A–F2–F5 corpus is evidence, relationship-pattern source, and the 1,158-row regression seed — NOT background.** *(At promotion these get catalog rows + Manifest-Read-Graph routes per the Stop-Proof; this is the interim human index that becomes those routes.)*

| Artifact(s) | What it is | When future agents MUST open it | Feeds |
|---|---|---|---|
| **A/B/C** | hospital reality field · actor/authority grounding · map grounding (cited public refs) | hospital-reality / evidence rationale | evidence; "format-not-content" baseline |
| **D** (101 HCASE) | stratified scenario library + coverage manifest | tests, contract examples, harness seeds | seed corpus |
| **E** (40 traces) | survivability deep traces + breakpoints (physics-holds / objects-missing) | justifying a gap/object as real | trace evidence |
| **F** | first-pass disposition/gap matrix | **with G4.1** (F superseded where G4.1 verifies) | canon routing (first pass) |
| **F2** (503; 17 fams, chains A–H) | primitive-sufficiency universe; "100x = relationship design" | primitive/chain design; act-loop (chain A) | core relationship patterns |
| **F3** (255; P18–26, chains I–Q) | hospital-organism layer (bedside/family/service/legal/rights) | patient-surface, service-ops, rights/consent work | family + chain seeds |
| **F4** (250; P27–35, chains R–Z) | network/research/digital-twin layer; **P35 external-capability** | external-systems, RWE, twin, network-governance work | P35 + network seeds |
| **F5** (150; P36–40, chains AA–GG) | topology/continuity/enterprise-ops closure | continuity, workforce, security, topology work | closure-family seeds |
| **convergence-check** | why manual row generation stopped (0 new families / 24 domains) | before proposing ANY new row batch | "row phase is closed" guard |
| **topology-reconciliation** | why operator-graph reconciled to Federation 6-tier canon | any topology / operator / node / setting question | **do-not-mint-parallel-vocabulary** guard |
| **G4** | binding verdict + disposition ledger + chains + harness obligation + wedge | start here for synthesis | directional C4 input |
| **G4.1** | verified desk-check (all 15 contracts); FINAL dispositions; net-new ~6 | **REQUIRED** before promoting any C3.5 family into C4/contracts | canon-true ledger |

**Read-depth by task:** thesis positioning → **G4 + G4.1 + topology-reconciliation** · contract shaping → **G4.1 §A/§B + F + E + the relevant F2–F5 families** · sim/eval harness → **D + F2/F3/F4/F5 + G4 §7 + G4.1 §D** · scenario examples → **D/F2/F3/F4/F5 by P-family/chain** · canon reconciliation → **G4.1 §A + F** · relationship patterns → **G4 §5 chains + F2** · evidence/citations → **B**.

**Hard rule:** for C3.5 contract work, cite **G4.1 (not G4 alone)** as the disposition authority — G4.1 is the verified ledger; G4 §3 is first-pass. **Seed-corpus rule:** the 1,158 rows (D+F2+F3+F4+F5) are Build-OS harness seeds tagged by P-family/chain — **seed corpus, not coverage** (§7) — necessary-not-sufficient.

---

## G4 Stop-Proof (Agent Work Protocol §9)
- **Gate:** G4 (Handoff) — final C3.5 gate. **Status: complete, pending review.** Closes the C3.5 arc.
- **Scope honored:** synthesis + disposition ledger; routed every F2–F5 family/chain/decision; reconciled to canon; no contract edits, no C4 prose, no new rows.
- **Deliverable:** §1 binding verdict · §3 full disposition ledger (P1–P40 + tally) · §4 net-new set · §5 chains · §6 decisions · §7 harness obligation · §8 open-review → `08` · §9 v4-next + desk-check diligence.
- **Headline:** survivability PASS · superiority PASS (governed-loop ownership) · hospital = stress-case of one substrate · topology = existing Federation canon (no parallel vocabulary) · external systems = capability-mode boundary (net-new) · 1,158 rows = seed corpus for a permanent harness · **the "40 families" honestly reduce to ~11 net-new objects + ~16 extensions + ~11 confirmations** — the substrate mostly held, which is the win.
- **Integrity:** nothing lost — confirmed items cited to canon owners, extensions routed to contracts, net-new flagged, decisions stated, open-review → `08`, coverage → harness. **Disposition is now canon-true: all 15 contracts read; every `~deskcheck` item finalized in G4.1 §A (net-new shrank ~11 → ~6).** No reading owed to the v4 agent.
- **Artifacts produced this arc:** A–F, F2, F3, F4, F5, convergence-check, topology-reconciliation, **G4 (this)**. No edits to locked contracts.
- **Authority:** `analysis_nonbinding` (`GRD-036`). Not truth until promoted via v4/contract review gates.
- **Next:** v4 continuity agent uses **G4.1 as the verified disposition ledger — NO desk-check remains** (all 15 contracts read; §9.1 closed). Proceed directly to thesis/contract shaping (§9.2). **No more row batches.**
- **New-artifact completion (Protocol §5):** G4 + convergence-check + topology-reconciliation owe a catalog row + read-graph evaluation in the same pass as their promotion; flagged for the v4 agent's intake (not performed here, as these are `analysis_nonbinding` C3.5-arc artifacts pending review).
- **Standing flag:** git identity unset (`Bloom Health <…@Blooms-Desktop-11.local>`) — no commit attempted.
