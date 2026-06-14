# v4 — C3.5 G4.1: Contract Desk-Check Addendum (closes the G4 `~deskcheck` items)

Document type: `analysis` (C3.5 arc — finalizes the G4 disposition ledger against canon) · Authority: `analysis_nonbinding` (`GRD-036`)
Status: `complete` 2026-06-14 (C3.5 pressure-test agent). **Not a new gate, not a row batch.** A canon-reconciliation pass: every G4 ledger family marked `~deskcheck` is now read against its contract and finalized. Patches G4 §3 + §9.1.
Contracts read in full for this pass: **RBAC, Observation, D7, Messaging, Intake, D6, BIZOPS, CNS** (+ Federation, Identity, D5 from the topology pass; settings/CM/OFC from grep). **All 15 domain contracts now consulted.**

## Headline (Knox's prediction held: the net-new set SHRANK)
Reading the remaining 8 contracts moved **several G4 "net-new" families to CONFIRMED/EXTEND** — the contracts already own more than the G4 best-judgment assumed. **Shrinking is the win** (we killed duplicate would-be-canon). Genuinely-homeless net-new drops from ~11 to **~6**.

## §A — Finalized dispositions (every prior `~deskcheck` item, now `✓verified`)
| Family | G4 (best-judgment) | **FINAL (verified)** | Canon evidence |
|---|---|---|---|
| **P1** Authority-Gate | EXTEND | **EXTEND ✓** | RBAC owns permission atoms + 4-tier attestation + break-glass + consent-gate + default-deny; stop-line/dual-verify/order-verification = new atoms/attestation tiers |
| **P2** Actor-Capability-State | EXTEND | **EXTEND ✓** | RBAC §5 competency-gate (composed input) + BIZOPS `workforce_intelligence_state`; live credential = compose at action |
| **P5** Attention/Routing | NET-NEW | **EXTEND ✓ (CNS)** | CNS owns orchestration + §10.2 routine-**suppression window** (= over-message-shield seed) + priority; attention-budget/interrupt-threshold = new CNS objects, **CNS is the owner** (not homeless) |
| **P6** Conversation/Rail | EXTEND | **CONFIRMED ✓ (Messaging)** | Messaging owns `conversation_scope`, rail-agnostic 8-gate outbound, internal_collaboration, scoped projections (§7.7.2) |
| **P12** AI-Substrate/Governance | CONFIRMED+NET-NEW | **CONFIRMED ✓ + EXTEND** | CNS owns the universal flow, `candidate`≠commit, `cns_decision`, `model_version_of_record`, `capability_envelope` (§12.8), `trace_lineage`; `eval_harness`/`untrusted_input_firewall` = EXTEND (CNS/Network-Governance), not homeless |
| **P13** Proactive-Orchestration | EXTEND/NET-NEW | **CONFIRMED ✓ + EXTEND (CNS)** | CNS Patient-CNS coherence signals gaps/duplicate-therapy (§12.7) + LI signal-ladder (§8); proactive candidate routing already canon |
| **P18** Patient/Bedside-Agent | NET-NEW | **NET-NEW ✓ (composition; no owner)** | Intake (patient-source), Messaging (transport), CNS (coordinate), Surfaces (render) exist — the **patient-as-requester agent surface** composing them is genuinely new |
| **P19** Service-Op/Work-Order | EXTEND | **EXTEND ✓ (OFC + Inventory)** | OFC `care_obligation`/`fulfillment_order` (conversion rule); non-clinical work-order = OFC subtype; supply = Inventory (home open) |
| **P20** Coding/Claim-Lifecycle | EXTEND | **EXTEND ✓ (D6)** — insurance already deferred `REV-159` | D6 owns money/rails/treatment_orders; insurance/claims mechanics explicitly DEFERRED (`REV-159`); coding-candidate = new D6 object |
| **P21** Disclosure + AI-Explainability | EXTEND+NET-NEW | **EXTEND ✓ (D7 + CNS)** | D7 owns retention/legal-record/GDPR/access + materialized records; `ai_decision_log` ≈ CNS `cns_decision`+`trace_lineage` (already record AI influence + model version) → EXTEND, not homeless; `disclosure_package`/`legal_hold` = D7 extend |
| **P22** Rights/Consent-Granularity + Grievance | NET-NEW | **NET-NEW ✓ (extend RBAC/D7) — `ai_consent_scope` + `grievance_workflow` homeless** | consent record=D7 §5, gate=RBAC §7, prefs=Identity; per-AI-function consent + grievance/rights-state = genuinely new |
| **P23** Std-of-Care/Policy + Provider-Perf | EXTEND/NET-NEW | **EXTEND ✓ (CNS + BIZOPS)** | CNS §9.2 rules/templates engine (four-layer; rule=WHAT) + Network-Governance (policy/model-registry) + BIZOPS `workforce_intelligence_state.performance_context`; std-of-care-object = policy-object extend |
| **P24** Ambient-Sensing | NET-NEW/EXTEND | **EXTEND ✓ (Observation)** | Observation owns device telemetry/signal + verification-state; video/audio/behavioral = new signal kinds under it |
| **P25** Ops-Analytics/Command + Simulation | NET-NEW/BUILD-OS | **EXTEND (BIZOPS analytics-projection + CNS Network-Gov) + BUILD-OS (sim/fleet-observability) ✓** | analytics=projection (BIZOPS §2, `REV-174` Operating-Intelligence sweep); `operational_simulation`/`agent_fleet_observability` = Build-OS |
| **P27** Network/Multi-Operator-Governance | EXTEND | **CONFIRMED ✓ (CNS Meta + Federation)** | CNS **Network Governance Plane** (Meta-level CNS): rules/safety/audit/model-registry/`model_version_of_record`/boundary-modes/break-glass, per-deployment + network-wide; drift-dashboard = extend |
| **P28** Outcome-Intelligence / RWE | NET-NEW | **NET-NEW ✓ → routes to `REV-174` (Operating-Intelligence/Analytics-Projection layer)** | not owned; CM=assertions, BIZOPS=labor-projection; cohort/RWE plane is the `REV-174` sweep — flag there |
| **P29** Research/Trials | NET-NEW | **NET-NEW ✓ (no owner)** | confirmed: no contract owns trials/eligibility/blinding/protocol-window |
| **P30** Diagnostic-Read-Lifecycle | EXTEND | **CONFIRMED ✓ (Observation + CM)** | Observation §4 **3-gate model** (artifact-integrity/D7 · data-fidelity/Observation · clinical-adoption/CM) + verification-state already IS the read lifecycle; AI≠adopted = canon |
| **P32** Procedural/OR-Command | EXTEND | **EXTEND ✓ (D5 + Settings)** | D5 `service_occurrence` (peri-op) + Settings `service_policy` gate-timings; procedural command = D5/Settings extend |
| **P33** Data-Product/Secondary-Use | EXTEND/NET-NEW | **EXTEND ✓ (D7 + RBAC + CNS Network-Gov)** | D7 GDPR/consent/retention + RBAC purpose + Network-Governance; de-id/DUA = extend |
| **P34** Physical-Automation/Robotics | NET-NEW | **EXTEND ✓ (RBAC + Identity actor + P35) — gated by P35 owner decision** | robot=`actor` (Identity), authority=RBAC, capability_envelope (CNS §12.8); `physical_action_authority` rides P35 modes |
| **P37** Cross-Setting Continuity | EXTEND | **EXTEND ✓ (Identity + Federation + D5)** | Identity (1 patient/many relationships) + Federation grants + D5 `care_episode` + modality; `continuity_binding` = compose-and-name |
| **P38** Workforce-Lifecycle/HR/Payroll | EXTEND | **CONFIRMED ✓ (BIZOPS)** | BIZOPS owns `workforce_member`/employment/`shift`/`time_clock`/`pay_rule`/`payroll_run`/`commission_payout`/`workforce_intelligence_state` + payroll-rail; flu-shot/onboarding/comp = extend, **all homed** |
| **P39** Training/Sim/Academy | NET-NEW/BUILD-OS | **split: training_competency CONFIRMED ✓ (BIZOPS WI-state + Settings defn + D7 artifact + RBAC gate); simulation_harness NET-NEW (BUILD-OS)** | WI-state owns competency/training; the **rehearsal/regression harness** is the homeless Build-OS piece |
| **P40** Security/Emergency/Physical-Safety | EXTEND/OPEN-REVIEW | **EXTEND ✓ (CNS §10.2 + Messaging + RBAC) + NET-NEW (`physical_access_command`)** | CNS owns safety-orchestration sequence + suppression-window; Messaging executes broadcast; RBAC break-glass; physical-access = new |
| **P3b** `administration_event` | NET-NEW | **EXTEND ✓ (OFC)** | OFC `fulfillment_order` lifecycle exists (incl. rx/procedure kinds); med-**administration** event (who/when/dose/route/BCMA) = new OFC event under it |

## §B — Revised genuinely-homeless NET-NEW set (no contract owns it today): **~6**
1. **`external_capability` / `command_authority_boundary`** (P35) — the headline cross-domain control plane. **Owner decision = open-review.**
2. **`patient_bedside_agent`** (P18) — patient-as-requester surface (composition of Intake/Messaging/CNS/Surfaces).
3. **`trial_protocol`** (P29) — research/trials substrate.
4. **`simulation_harness`** (P39) — the rehearsal/eval/regression engine → **Build-OS obligation (§D)**.
5. **`ai_consent_scope` + `grievance_workflow` + `patient_rights_state`** (P22) — granular AI-function consent + complaint/rights.
6. **`outcome_intelligence` / RWE plane** (P28) — routes to the existing **`REV-174` Operating-Intelligence/Analytics-Projection** sweep, not a fresh invention.

Plus two **named-contract EXTENSIONS** that are new *objects* but have a clear home: **`movement_state`/inpatient-encounter → D5** and **`administration_event` → OFC**. Everything else = CONFIRMED or EXTEND against an existing contract.

## §C — Revised ledger tally (vs G4)
- **CONFIRMED:** ~15 (was ~11) — added P6, P12, P13, P27, P30, P38.
- **EXTEND:** ~17 — added P2, P5, P19, P20, P21, P23, P24, P32, P33, P34, P37, P40, P3b (some moved from net-new).
- **Genuinely-homeless NET-NEW:** **~6** (was ~11) — P35, P18, P29, P39-harness, P22, P28.
- **BUILD-OS:** simulation_harness (P39) + operational_simulation/fleet-observability (P25).
- **Net effect:** the thesis claim sharpens again — *the substrate held even more than G4 stated; the genuinely-new surface is ~6 items + 2 named extensions.*

## §D — Simulation/eval/regression harness — narrow framing (NOT "C3.5 invented Build-OS")
**Binding language for v4 (deliberately narrow — Nick 2026-06-14):**
> C3.5 does **not** define the Build OS or a "build agent." It contributes **one requirement**: the C3.5 row corpus (1,158 rows) is **seed material** for a permanent **scenario / simulation / eval / regression** capability that already has **denser prior sources** (Stanford/video corpus, native-AI-layer planning, agent-execution doctrine, repo memory, evals, go-live rehearsal, training). That capability must be **reconciled with the existing Build-OS / native-AI-layer workstream before design** — C3.5 only adds the requirement + the seed corpus.

The harness must eventually serve **many areas, not hospital pressure-testing**: contract/domain regression when primitives change · AI/model behavior evals · policy/pathway-change regression · clinical-safety simulations · operational rehearsals · outpatient/async workflow simulation · staff training/Academy · go-live rehearsal · integration/external-capability failure tests · privacy/consent/security/adversarial scenarios · operator-config testing. **Preserve the operating law, not "30k" as a magic number, not a narrow "build agent."**

## §E — Required closure items (Knox's acceptance criteria — confirmed)
- **P36 corrected** against Federation canon (6-tier topology; not a new family) — done (topology-reconciliation note + G4 §1.4).
- **Movement-stateful inpatient context** → **D5 extension** (the located E/F/F2 gap) — confirmed.
- **P35 External Capability / Signal-Command Boundary** → **net-new control plane; owner decision = open-review** — confirmed (§B.1).
- **P39 simulation/eval/regression harness** → **Build-OS obligation, narrowly framed** (§D) — confirmed.
- **Net-new count updated** (shrank ~11 → ~6) — confirmed (§C).
- **G4 patched** to point here; no vague desk-check left to the v4 agent — done (G4 §3/§9.1 patch).

## Stop / authority
- `analysis_nonbinding` (`GRD-036`). Dispositions reconciled against the current **draft_for_ratification** contracts (the contracts themselves are not yet ratified — so these are "reconciled to current canon," accurate as of 2026-06-14).
- All 15 contracts consulted; **no `~deskcheck` items remain** — every P1–P40 family + P3a/b/c has a final disposition.
- Standing flag: git identity unset — no commit attempted.
