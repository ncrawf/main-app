# v4 — C4 Author Readiness Note (the comprehension proof; pass BEFORE any spine prose)

Document type: `plan_or_roadmap` (the output of C4 named gate #5, `v4_C4_fresh_agent_readiness_prompt.md`) · Authority: `analysis_nonbinding` (`GRD-036`) — a comprehension proof, **NOT spine prose, NOT a section map, NO contract edits.**
Status: `passed_reviewed` 2026-06-15 (✅ PASSED Nick + Knox; **Lane-6 L6-B status correction** from the file's earlier `draft_for_review` header — the note passed and unlocked spine draft 0; the partial-staleness forward-pointer immediately below remains in force). Originally written by the fresh v4 authoring agent for **Nick + Knox** review; PASS unlocked v4 spine prose. Mirrors the C3 comprehension gate.
Controlling plan: `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md` → C4. Boot-freshness triad checked at session start (AGENTS ↔ read-graph #15 ↔ HOME controlling-plan banner agree on `HANDOFF_2026-06-14_…pre_c4.md`).
Owed (New-Artifact §5): catalog row + read-graph eval — deferred to package acceptance, consistent with the other C4 runway docs (`analysis_nonbinding` pending Nick+Knox). Flagged, not silently skipped. Standing flag: git identity unset.

> I am writing this from a cold boot — no prior-conversation context — which is exactly the condition the gate is designed for. Below, in my own words: what the source base is, what v4 *is* (the frame), the method, why the pressure arcs are inputs and not the frame, REV-184's seven lines, what I will not do, and the covered-thin families + acceptance gate I will be held to.

> **★ FORWARD-POINTER (added 2026-07-04, post-C3.8) — this note is a PARTIALLY-STALE baseline.** It was written 2026-06-15, **before** the C3.8 Enterprise-AI-OS convergence pass. The comprehension it proves still holds, but the current boot state is **`HANDOFF_2026-07-04_c3_8_complete_pre_spine.md`** (not the 06-14 handoff named above), and the spine author MUST ALSO carry: **C3.8 `G4`** (disposition ledger + operator-ratified posture decisions + governed data-value economy) · the **`v4_C4_spine_watch_list.md`** (7 items + framing — the operator/business/config/semantic/legal/copilot cluster; HELD until Nick+Knox close it) · **field cases** (`FIELD-*`, esp. `FIELD-002`). **The authoritative "load exactly this" list is read-graph #9a (CANONICAL v4-AUTHORING INPUT SET).** Do not treat this note's original read-first list as complete.

---

## 1. What "the source base" is

The source base is the **full 9-category estate enumerated and reconciled in `v4_C2_source_base_declaration.md`** (CLOSED/accepted 2026-06-13, current, living per `GRD-036`). It is the single canonical referent — whenever any doc says "source base" / "full estate" / "all sources," it means this, and I will never silently author from a subset. The nine categories:

1. **Thesis lineage** — author from `omni_thesis_v3_integrated_spine.md` (the weave map) + `omni_thesis_v3_integrated_2026-06-05`, with `omni_thesis_v2_2026-05-26` as the **verbatim preservation source**; v0/v1 are `historical` (never cited as live).
2. **The planes (P0–P6)** — `OMNI_System_Map_vNext.md` (canonical, emerging) + legacy `system_map_three_layers` (transitional evidence only, vNext wins on conflict) + `OMNI_Surface_Map_vNext.md` + `surfaces/` (14) + `projections/` (5).
3. **Domain contracts (15) + seams (5)** — identity · clinical_memory · observation · intake · CNS · messaging · RBAC · D3 · D5 · D6 · D7 · ordered_fulfillment · business_ops_workforce · federation · settings_catalog. These are **P1 truth-ownership boundaries the thesis must not contradict.**
4. **Doctrine spine (~45)** — governance core, read-graph, Build-OS (`09/10/11`), Agent Work Protocol, the ledgers (`02/03/05/06/07/08`), comparator registry, future-work registry, and the v4-load-bearing frames (`ai_substrate_frame`, `omni_enterprise_posture`, `cns_and_knowledge_reservoirs_frontier`/`FWREG-007`, operator-collaboration model).
5. **Audits / pressure-tests** — the 06-03 agentic + federation pressure tests, the 06-07 federation operator read, 06-08 website (account, do-NOT-over-promote), 06-12 care-lanes, plus the prior 38-doc audit bank.
6. **Ingestion / Evidence Plane (the video corpus is HERE)** — the process spine + **EVRUN-2026-000001 §2A baseline + EVRUN-2026-000002 (110/110 COMPLETE, conformance-verified)**: run · concept registry · §1 clusters · §2A net-new families · tension register · coverage matrix · anchor ledger · spring AI-substrate corpus (v01–v47) · competitor evidence (Mindbody/Hims) · `ORIENTATION-2026-06-10`.
7. **Repo / Foundry / future-build** — `foundation_vnext_reconciliation.plan` + `REV-176` routing spine + the named (not-yet-authored) C5 gates.
8. **Handoff chain** — continuity evidence, named not re-synthesized.
9. **Designs / build-arc evidence** — `.cursor/plans/designs/` (the day-0 scheduling rule-matrix arc, etc.) = the provenance behind the live contracts.

Plus the **one genuine C2 addition: the code/ADR reality-check lane** (`docs/architecture/` ADRs, `supabase/migrations/`, `app`/`lib`/`components` consulted by area on demand) at authority `reality_check_nonbinding` — it pressures the thesis against shipped reality but never displaces doctrine or a contract. Two findings I will carry: the scheduling spine is **reserved on `main`, not built** (`D0THES-CNF-011`), and narratives ≠ authority (`D0-CNF-004`).

**The non-negotiable: I will actively MINE the video corpus, not cite the §2A summary.** The depth lives in the registry §1 clusters and the per-source §3 Review-003 reads + the tension register — proven load-bearing twice in REV-184 (the video decision-mechanics added blast-radius authority, verifiability→autonomy, harness≠authority, eval-the-context-packet, minimum-sufficient-mechanism). Reconciliation is by **Knox's authority hierarchy** (Tier 0 OMNI doctrine → Tier 1 contracts → Tier 2 evidence/corpora/audits → Tier 3 brainstorm/handoff): external sources PRESSURE doctrine but do not outrank accepted doctrine unless routed + approved (`GRD-036`). No input is pre-ranked — not the videos, not the Epic question, not any single audit, not even v2/v3.

## 2. The broad v4 frame (what OMNI IS) — stated without collapsing into the one shiny insight

**v2/v3 settled the domain physics: *who owns which truth, and how truth is kept separate.*** That skeleton is **validated by the corpus, not invalidated** — domain-owned truth (one owner / one authority path / one audit trail per fact), CNS **orchestrates, does not own** domain truth, **candidate ≠ commit**, source-event ≠ candidate, patient-source ≠ clinical truth, D3 ≠ D5 ≠ D6 ≠ D7, the **D7 / Observation / Clinical-Memory** three-gate separation, **projection ≠ authority** (`DEC-033`), federation/tenant/operator/visibility boundaries, system-centric (not person-centric) architecture. v4 **sharpens** these; it does not rewrite them.

**What v3's *method* under-carried is the execution physics — how OMNI safely turns signals into authorized action and proves it, with AI in the loop.** That is the v4 frame: a **governed care/business *execution* substrate** that runs the **Sense → Decide → Act → Prove/Learn loops + authority gates** (thesis §8) *over* the preserved domains, plus the cross-cutting **control planes** that make those loops safe at scale:

- **AI as a cross-cutting substrate axis** (`DEC-034`) — actor = model + governed harness; the workflow lane (not the model call) is the unit of architecture; autonomy ladder; output-authority limits; lineage; evals.
- **Runtime / context / knowledge routing** — memory-mode + capability routing; `retrieval ≠ authority` (`GRD-042`); runtime economics.
- **Intelligence Foundry + Evidence Plane + Knowledge Reservoirs** — continuous governed ingestion → promotion (≈ the ratified Evidence Plane + a compiled-wiki layer; **extend, don't rebuild**; `FWREG-007`); the mechanism that keeps OMNI a 2035 system, not a 2025 website.
- **External-Capability Ownership / connector & tool governance** — the build-vs-buy-vs-wrap **ownership LAW** (OMNI owns the authority model, truth boundary, context contract, evidence/proof path, connector observability, security envelope, action semantics; vendor picks are C5).
- **Security as a continuous lane** (not a later audit), **assurance / evals / proof** as first-class.
- **Federation as boundary-policy** (custody/visibility/authority; transport-open) — including federation-as-boundary-policy-for-AI-context.
- **Build-OS / agent harness** as a **posture** (agents build/maintain OMNI under governance), never the product.
- The explicit topology split: **OMNI-Core vs Federation-Network vs layered-CNS** (not one brain).

And — the recurring flatten-risk I will guard hardest — OMNI is a care **AND business** execution substrate: **workforce/staffing/HR/payroll, inventory/supply, commerce/billing/claims, and business-operations are first-class operating domains**, not a parenthetical (the dedicated §3b in the shape plan).

**The honest anti-hijack tell:** the action loop (`signal → context → candidate → resolver/policy → authority gate → action envelope → owning-domain commit → evidence/proof → obligation → learn`, C3.5's Chain A) is **ONE mechanism inside this substrate**, and "make the EMR less central / Epic beside→above→replacement" is **ONE strategic positioning lens**. Both are central and both live *inside* the frame; neither IS the frame. Elevating the loudest recent care-lanes/Epic phrase to "the higher-order object" is precisely the prior drift — it silently drops the other loops, the AI substrate, the Foundry, security, and federation. The frame is the **execution substrate**; action + Epic live inside it.

## 3. The method (ratified Option B — C3)

**Spine-first authoring** (write the controlling spine → review → weave section-by-section against it), protected by the **4-lane Constitutional Reconciliation Ledger** (anti-flattening), the **Authoring Safeguards** ("the thesis is aware of the stack, it does not become the stack"), and the **Final Assembly Gate** — combined with **bidirectional 4-layer reconciliation** (gather ALL sources → **Freshest-Authority Check over the whole set FIRST** → author once integrated → disposition sweep; L1 contract←thesis top-down · L2 system-map backfill · L3 corpus gem-pull bottom-up · L4 cross-cutting checks). Enforced by `GRD-001/021/022/023/024/025/026/036/043`.

Operating sequence I will run:
1. **Top-down spine draft** from the full source base + the execution-substrate frame, **control-plane sections before domain sections** (dependencies first), care-first within that.
2. **Per-section worktable** (the 4-lane ledger — worktable, not prose): `existing-claim (ALL sources, not just v2/v3) → corpus/arc PRESSURE → v4 rewrite → contract/primitive/build-proof impact → open-review`. Tag each idea `stable | new-pressure | candidate-canon | conflict | needs-review`.
3. **Bottom-up pressure pass** against **every** existing contract (15), control-plane concept, the System Map, the code/ADR reality lane, and the **cumulative registry** (000001 §2A + 000002 §1/§2A + tension register).
4. **Bidirectional reconciliation** — reconcile TO the locked contract ownership boundaries; do not contradict P1 truth.
5. **Tension-register adjudication (explicit)** — every tension → `settled-by-doctrine` (cite) | `v4-decision` (state + why) | `open-review` (→ `08`). **No unrouted tensions** (`GRD-043`).
6. **C4.0 Depth discipline** — no section authored from a routing pointer/one-liner. Before writing, I pull a **Depth Packet** (the *richest* full-body articulation from registry §1 + per-source §3 Review-003 + ORIENTATION verbatim + the v2/v3 body + the relevant arc artifacts via their use-maps) and write from the packet. Proportional (heavyweight for load-bearing lenses, a line for a thin vocabulary lens), spirit-not-verbatim-plucking, worktable-not-archive. A section **FAILS** if it uses the right lens name but loses the mechanism / loop / tension / ownership-law behind it.
7. **Corpus cautions carried as a CLASS** (harvest all → dedupe vs existing `GRD-*` → route each → promote only the load-bearing into the spine's non-goals/anti-patterns). Not a cherry-picked memorable handful.
8. **Timeless output** — the spine states *what OMNI IS* (positioning "is X, not Y" kept); no dated v2→v3→v4 journey/changelog prose. The before/pressure/after lives in the worktable, not the prose.

Then **spine** (terse: one-sentence thesis + section claims + non-goals + open questions) is accepted before the **thesis** synthesis (per-section Depth-Packet deepening into full-body timeless prose, immutable on the accepted claims) per docs #3/#4. No C5 contract work before the spine is accepted.

## 4. The pressure arcs are INPUTS, not the frame (no hospital/oncology Part)

C3.5 (hospital/EHR-gravity), C3.6 (oncology/trials execution), C3.7 (oncology/trials access), and REV-184 are **required pressure inputs that sharpen specific existing sections** — they are **not** the frame, the section hierarchy, or the source base. **There is NO hospital Part and NO oncology Part.** Their findings live inside the substrate / operating-model / AI / boundary parts. I read each via its own artifact-use map and, for contract-grade dispositions, cite the **verified** ledger (C3.5 → G4.1, not G4 alone; C3.6 → G + C/E/F; C3.7 → G + C/E/F) — never G alone.

What I actually take from each (the depth, not the label):
- **C3.5 — survivability PASS · superiority PASS.** The 100x is **governed-loop ownership concentrated in relationship chains (A–GG)** a records-first EHR cannot retrofit — *not* "Epic clone + AI." The "40 families" honestly reduce to **~6 genuinely-net-new** (P35 external_capability/command_authority_boundary · P18 patient/bedside-agent · P29 trial_protocol · P39 simulation_harness · P22 ai_consent_scope+grievance · P28 RWE→`REV-174`) **+ 2 named extensions** (`movement_state`→D5, `administration_event`→OFC) + ~17 extensions + ~15 confirmations. **Hospital = stress-case of ONE substrate, not a bolt-on** (D5 self-scopes outpatient §2; inpatient is a bounded extension). **Topology = existing Federation 6-tier canon** — operator = `legal_entity`+`brand`, federation = the cross-operator relationship, async = a `modality`; **do NOT mint parallel operator/node/setting/location vocabulary.** The **1,158 rows are seed corpus for a Build-OS sim/eval/regression harness, NOT coverage** (and that harness must reconcile with the existing native-AI/Build-OS workstream — C3.5 contributes one requirement, it does not define the Build OS).
- **C3.6 — architecturally poised YES (bounded 10-item delta), build/regulatory NO.** Mechanism = **there is NO single record of truth**: source authority is **field-level and positional** across 6 plane-specific repositories, represented by the net-new `source_authority_map` index (D-135 is the load-bearing proof). The regulatory backbone (ALCOA++/21 CFR Part 11) is **reuse, not net-new**. Anti-diminishment doctrine is binding: OMNI = environment-of-work + environment-of-proof; incumbents are **rungs, not the ceiling**; the locked regulatory dataset is a **durable export-target ROLE (distinct plane), not a permanent vendor concession**. Necessary-and-bounded ≠ sufficient.
- **C3.7 — the load-bearing finding is the economically-blind, posture-invariant recommendation/display firewall.** Across clinic-retention, sponsor-accrual, academic internal-accrual, AND **OMNI's own economics**, one invariant: **accrual/revenue/retention pressure must not bend what the patient sees as clinically appropriate** — enforced as a **structural, auditable property** (the recommendation engine cannot read who/how-much pays OMNI), not a policy. **Honest-null is a product law** (no-appropriate-trial / SOC-better / palliative-honest is a first-class terminal, never a failed conversion). **Multi-principal neutrality is the architecture, not a policy.** Care-quality primitives **route OUT** to the general care substrate (Clinical Memory + Observation + CNS), **not** a research lane (`GRD-026`). And C3.7 surfaced the governed-decision primitive → REV-184.

These pressure CNS, OFC, D5, D6, RBAC, Federation, P35/external-capability, Observation, Clinical-Memory, and Surfaces/Projections, and feed open-review **REV-185** (econ-blind firewall invariant) · **REV-186** (C3.6 trial-execution homes) · **REV-187** (C3.7 access deltas + the GTM-posture decision = strategic/open, not settled) · **REV-188** (C3.5 net-new owner decisions) · **REV-189** (care-substrate route-outs — confirm CARE-contract homes, NOT research) · **REV-190** (translational/PDX 2040 = leave-door-open, not build). I load these from `08`; I do not re-derive them.

## 5. REV-184 — the Governed Resolution Lifecycle (7 spine lines; read §0 only)

REV-184 is **CLOSED / signed off (Nick + Knox, 2026-06-14)** — a confirmed **v4 spine-grade law**. It is the missing **DECIDE layer at the thesis-§8 authority gate between Sense and Act** — the home for resolutions, especially **non-act** ones (defer/monitor/decline/no-intervention/dispute) that never enter the Act loop and are not Sense-truth. It is **actor-agnostic** (human clinician · AI agent · protocol · team · external system = `DEC-034` made concrete), realized as a **canonical pattern + a thin interface over EXISTING primitives — NOT a god-object**.

The **7 named spine lines** (from §0.2 — canonical) I will carry into the Decide / AI-substrate / authority sections:
1. **governed-resolution-lifecycle** — the actor-agnostic §8-gate primitive (completes C3.5 Chain A, which modeled only the *act* branch).
2. **non-action-as-commit** — "no-intervention / not-indicated" is a committed decision, not absence.
3. **blast-radius-keyed authority** — authority-to-commit scales with *what if the actor is wrong*, not with capability.
4. **disagreement-as-escalation** — multi-actor discordance is an active HITL/escalation signal, not just a recorded fact.
5. **outcome-reads-original-context (never rewrites)** — freeze what-was-known-then; later outcome (read by `outcome_intelligence`/`REV-174`) never retro-judges; reasoning-quality ≠ decision-correctness.
6. **world-model honesty** — `predicted_state = candidate, not truth`; OMNI's state is a partial, time-stamped projection; **OMNI participates in reality, it does not source it**.
7. **`trust_horizon`** — authorized-autonomy ≤ trusted-horizon; absorbs verifiability + freshness + reversibility into one law.

Two orthogonal axes I will **not** merge: **`gate_holder_posture`** (who held the gate: omni_mediated / omni_recommended_human_committed / external_authority_committed / emergency_first / out_of_band_action / unknown_pending_reconciliation) × **`world_model_trust`** (current / stale / partially_unknown / degraded → feeds trust_horizon). Ownership map (pattern + thin interface): **CNS** owns record/lifecycle/graph (process-state, not truth) · **RBAC** owns authority/blast-radius/reversibility/autonomy gate · **CM** owns truth + commit · **OFC** owns obligations-resulting-from-a-stance · freshness reads off **`source_authority_map`** · **REV-174** outcome-link · **D7 + trace_lineage** proof.

**Read-order guard I will obey:** §0 is canonical and supersedes everything below it; §1–§R3.x are derivation/lineage. I will **not** resurrect superseded round language (Round-1's narrower "clinical-decision-record" framing, the "OMNI-mediated vs observed" binary). **The 7 lines are v4 spine; the field-set + lifecycle state-machine are C5 contract-edit, not C4.** It is the single highest flatten-risk — I will not collapse it into a generic "decision" bullet.

## 6. What I will NOT do (yet)

- **No spine prose, no thesis prose** before this note passes Nick + Knox.
- **No contracts, schemas, field-sets, lifecycle state-machines, primitive registries** — those are C5 (including REV-184's field-set/state-machine and every arc net-new object's contract home).
- **No repo restructure / taxonomy, no vendor or tool picks** — C5-derived from the accepted v4.
- **No more scenario batches** — convergence is proven (C3.5: 0 new families across 24 un-batched domains); corpora are harness seed, not coverage.
- **No journey/changelog prose; no cherry-picked guardrails; no subset or ambiguous "source base."**
- **No arc-as-frame collapse** (no hospital/oncology Part), **no action-loop/Epic-lens hijack**, **no parallel topology vocabulary**, **no god-object for REV-184**, **no letting Build-OS / repo-as-OS / generic-AI-agent-company become the product/frame.**

## 7. The C3.1 covered-thin families + the acceptance gate I am held to

**Four `covered-thin` families must be VISIBLY first-class** (a reviewer must be able to point to where each lands — not buried):
- **#2 Prove/Learn + effect-sensing** → the Sense/Decide/Act/**Prove-Learn** loop section + the evaluation section; **not** collapsed into a generic "feedback loop."
- **#7 provider / staff / inventory / business-ops learning** → the Knowledge-Reservoirs section as **their own reservoir families**, **NOT** buried under Patient-CNS (patient learning is one family among many).
- **#16 BIZOPS / workforce / inventory / commerce** → a **dedicated section** as first-class care **and business** operating domains ("share events, not ownership").
- **#10 classic infra-security** → the continuous-security section, **not** only AI-security (pending the `REV-181` commissioned classic-security source; the corpus over-indexes AI/agent security).

Plus the **5 carried open-review items** resolved-or-carried at their sections: **REV-179** (`evaluation_shapes_system_law` as a named line) · **REV-180** (`runtime_cost_dominates_law` + no-cheap-route-high-risk) · **REV-181** (classic-security source) · **REV-182** (data-platform retention/deletion/provenance = doctrine-in-v4, build-in-C5) · **REV-183** (`memory-routing ≠ capability-routing` + multi-axis-scaling naming).

**The spine is NOT accepted until:** full-source-base checkoff (every C2 category consulted, **video corpus actively mined**, no silent subset) · the 4 covered-thin families visibly handled + REV-179..183 resolved-or-carried · **REV-184's 7 lines carried** · tension register **fully adjudicated** (no unrouted tensions) · **C4.0 depth check passed per section** (no flattened lenses) · **timeless prose** · **Nick (+ Knox) sign-off**. No C5 work before the spine is accepted.

---

## Stop / authority
`analysis_nonbinding` (`GRD-036`); this is the comprehension gate output, not spine prose. **No v4 spine prose until Nick + Knox PASS this note.** On PASS, the first authoring step is the top-down spine draft against `v4_C4_spine_shape_plan.md`, using the method in §3. On FAIL, I revise here. Owed at acceptance: catalog row + read-graph eval (deferred, consistent with the runway package). Standing flag: git identity unset — no commit attempted.
