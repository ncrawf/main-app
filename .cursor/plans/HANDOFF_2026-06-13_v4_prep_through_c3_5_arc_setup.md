# HANDOFF — 2026-06-13 — v4 prep: C2 closed → C3 / C3.1 / C4.0 passed → C3.5 arc stood up

Document type: `handoff_or_readiness_gate` · Authority: `derived_nonbinding` (continuity/operational-state transfer; binding decisions route to `03`, open items to `08`)
Status: `active` — **CURRENT checkpoint** (2026-06-13). Supersedes `HANDOFF_2026-06-10_ai_corpus_ingestion_complete_pre_100video_scaleup.md` (now historical; its wave-2 ingestion detail stays valid) and reconciles the read-graph #15 pointer that was still on `HANDOFF_2026-06-06_evidence_plane_and_knowledge_reservoirs.md` (historical; Evidence-Plane/`GRD-036..042` detail stays valid).
Manifest action: `add_tier2`; repoints AGENTS.md current-checkpoint + Read-Graph Tier-0 Universal Path #15 to THIS file.

## 0. Boot in 60 seconds
- You are the **OMNI v4 continuity/integration agent** (Opus, in Cursor). OMNI = governed contextual care + business **execution** substrate (see thesis + AGENTS).
- **★ THE CONTROLLING PLAN lives in the HOME dir, NOT the workspace tree:** `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md`. `glob`/`grep` of `main-app/.cursor/plans/` will NOT find it (an agent missed it once). Its **CURRENT-STATE banner is the live source of truth** for phase/gate state. Read it first for v4 work.
- We are mid the **v4 authoring runway**. Wave-2 ingestion is COMPLETE (EVRUN-2026-000002 = 110/110, C1 conformance-verified). The v4 thesis is **NOT yet authored** — we are still in the gated pre-spine prep, and just stood up the C3.5 hospital-gravity pressure-test arc.
- **Do NOT author v4 spine/thesis prose yet.** Next executable step = run the **C3.5 arc in a SEPARATE agent** (kickoff below), starting at its internal Gate 1.

## 1. Gate state (2026-06-13)
| Gate | State |
|---|---|
| C1 — process wave-2 | ✅ COMPLETE 110/110, conformance-verified |
| C2 — Source Base Declaration | ✅ CLOSED / accepted (Nick+Knox) — `v4_C2_source_base_declaration.md` |
| C3 — Method Recovery / Ratification (comprehension gate) | ✅ PASSED — `v4_C3_method_recovery_ratification_note.md` (Option B: reuse v3 spine-first + bidirectional method + v4 augmentations; no pre-stage Foundry) |
| C3.1 — Lens Coverage Audit (anti-evaporation) | ✅ PASSED — `v4_C3_1_lens_coverage_audit.md` (no missing lens; 4 covered-thin; 5 open-review = `D0THES-REV-179..183`; 1 needs-C3.5; 3 defer-C5) |
| C4.0 — Depth Preservation Protocol (anti-flattening) | ✅ ACCEPTED, standing authoring rule — `v4_C4_0_depth_preservation_protocol.md` (whole v4 write + downstream contracts) |
| C3.5 — Hospital-Grade EHR-Gravity Pressure-Test Arc | ⏳ SET UP (not run) — separate agent next at Gate 1 |
| C4 — v4 spine | ⏳ blocked until C3.5 returns |

## 2. The v4 artifact set (all in WORKSPACE `.cursor/plans/`)
`v4_C2_source_base_declaration.md` · `v4_C3_method_recovery_ratification_note.md` · `v4_C3_1_lens_coverage_audit.md` · `v4_C4_0_depth_preservation_protocol.md` · `v4_C3_5_hospital_ehr_gravity_pressure_test_plan.md` (+ shells `v4_C3_5A..G_*` `shell_pending_population`) · `v4_C3_5_KICKOFF_PROMPT.md`. (The controlling plan that sequences them is in the HOME dir — see §0.)

## 3. The guardrail stack now binding on v4 authoring (read before any prose)
- **C2.0** read-first set + draw-on-ALL-sources + authority-tiering (no input pre-ranked) — `GRD-036`.
- **C3** recovered method: spine-first + 4-lane Constitutional Reconciliation Ledger + bidirectional 4-layer reconciliation; Nick's 3 corrections (full estate · no standalone "stale" deliverable · timeless output — before/pressure/after is worktable only).
- **C3.1** coverage: every lens family lands; 4 covered-thin must be forced first-class at C4 (Prove/Learn+effect-sensing · provider/staff/inventory/business learning · BIZOPS · classic infra-security).
- **C4.0** depth: no section authored from a routing pointer alone — pull the richest full-body articulation (registry §1 + per-source §3 Review-003 + ORIENTATION verbatim); a section FAILS if it uses the right lens name but loses the depth/mechanism/tension/ownership-law. Governs the whole write + contracts.
- **C4 acceptance criteria** (controlling-plan C4 (h)/(i)): covered-thin families visibly handled + open-review carried + depth preserved.

## 4. C3.5 arc (the active next workstream)
v4-FORMING Hospital-Grade Care-Platform / EHR-Gravity Pressure-Test Arc — run by a **SEPARATE agent** (charter `v4_C3_5_KICKOFF_PROMPT.md`; spec `v4_C3_5_hospital_ehr_gravity_pressure_test_plan.md`). Reality-field-first (cited public refs) → actor/authority → `HCASE` scenario library (Coverage-Manifest gated) → deep traces (9-question action loop = inner test) → two-dimension disposition (market-posture × architecture-obligation) → v4 handoff. 4 internal gates (G1 A–C / G2 D / G3 E–F / G4 G). **Calibration:** Epic = benchmark not ceiling; overlay = GTM posture not architecture ceiling; wedge ≠ ceiling; **false confidence AND false retreat both fail.** This continuity agent integrates the G handoff into C4 when the arc returns; the pressure-test agent must NOT author C4 prose.

## 5. Governance state (what's maintained vs owed)
- **Maintained AS WE GO:** catalog rows (`01`) for C2 doc + C3.5 plan-doc + kickoff; read-graph (`04`) Tier-2 #7 (C2) + #8 (C3.5 arc hub) + this checkpoint repoint (#15); open-review (`08`) `D0THES-REV-179..183`; supersession (`05`) consulted/cited.
- **OWED (small, flagged — not blocking):** catalog rows for `v4_C3_method_recovery_ratification_note.md` + `v4_C3_1_lens_coverage_audit.md` + `v4_C4_0_depth_preservation_protocol.md` (Protocol §5); decision-ledger (`03`) rows for the gate closures (C2 CLOSED · Option B ratified · C3.5 reframe); catalog rows for the `v4_C3_5A..G` shells owed on population.

## 6. Operator / collaboration (binding)
Nick = operator/owner (non-coder). Knox = a ChatGPT review instance (third-party AI). Default = trifecta (Opus produces → Nick relays → Knox reviews → Opus refines). Evaluate `knox = …` relays on merits; push back when wrong. Preserve full technical fidelity. (Full: `doctrine/operator_context_and_collaboration_model.md`.)

## 7. Pointers
- Controlling plan (HOME): `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md`
- Prior checkpoints (historical): `HANDOFF_2026-06-10_…pre_100video_scaleup.md` (wave-2 ingestion) · `HANDOFF_2026-06-06_evidence_plane_and_knowledge_reservoirs.md` (Evidence-Plane/reservoirs).
