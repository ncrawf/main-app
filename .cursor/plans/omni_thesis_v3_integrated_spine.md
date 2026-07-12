# Integrated Thesis v3 — SPINE (weave map; pre-authoring review artifact)

Document type: `plan_or_roadmap` (the section-by-section skeleton for the standalone Integrated Thesis v3; reviewed by Nick + Knox BEFORE authoring)
Authority: `analysis_nonbinding` — this is the blueprint, not the thesis. Authoring proceeds only after this spine is accepted.
Status: `draft_for_review` 2026-06-05 · **§C ⏸ PAUSED (2026-06-05)** pending the first outside-learning analysis run's §C-impact triage (incoming sources in `ingestion/outside_learning/sources/`, analysis runs in `ingestion/outside_learning/analysis/`, governed by `ingestion/outside_learning/00_pipeline_doctrine.md`). §A/§B drafted; **do not draft §C** until that run's concept registry (`EVRUN-…_ai-corpus_concept_registry_and_routing_map.md`) §C-impact triage runs and patches the §C absorption-plan rows below (Part V) if anything changes. No §C change → log + resume.

> **Downstream thesis-weave reminder (Nick 2026-06-06):** weave the **Evidence Plane / governed learning workbench** into the thesis (likely §8 or §B) — it is the operational form of the §8 Sense loop pointed at the outside world (continuous capture of parallels/industry/research → index + analyze, manually or agentically → gated promotion = how the substrate stays a 2035 system, not a 2025 website; ties `GRD-033`/`GRD-036`/`GRD-041`). Reminder only — do NOT inject a body blurb now (mid-rework).

> **Downstream thesis-weave reminder #2 — CNS + Knowledge Reservoirs (Nick 2026-06-06, FRONTIER/provisional):** the thesis under-states the **CNS as co-primary with the substrate** (we kept saying "the CNS" without a framework). Emerging top-tier taxonomy to weave once defined: a **Knowledge Reservoirs family** (governed knowledge/context bodies the CNS draws on — Evidence Plane, Clinical Memory, future Medical Literature, future Care Outcomes Learning, Build/Threat/Brand/Operator knowledge; each an authority class), under the law *CNS orchestrates · reservoirs supply · domains commit*. **Do NOT author yet** — captured in `.cursor/plans/doctrine/cns_and_knowledge_reservoirs_frontier_2026-06-06.md` + `FWREG-007`; revisit after the neural-network batch. Names provisional.
Reads through: `omni_enterprise_posture_2026-06-03.md` (`D0THES-DEC-035` + `D0THES-DEC-036`) · `ai_substrate_frame_2026-06-03.md` (`D0THES-DEC-034`).
Purpose: prove this is a **re-grounding woven at the DNA level**, not a bolt-on. Per Knox's hard rule: every row shows v2 section → disposition → new concept woven in → source/routing anchor → future contract impacted. If a new concept only appears "near the end," that's a failure.

Column key — **disp:** `preserve` (verbatim carry-forward) · `sharpen` (refine inherited) · `add` (net-new section) · `supersede` (replace prior framing). **anchor:** routing spine `REV-176` / inventory cluster / source video / prior DEC. **contract:** the Phase-5 contract this section will drive.

---

## §0 — Canonical Source Stack (authoring inputs; consult per section — NOT three files)

The integrated v3 is authored from a **source stack**, not a summary. Per-section, the author consults: **(1)** this spine row, **(2)** the exact v2 source section, **(3)** the 1–3 named source packets below. That is bounded — it does **not** mean re-reading all 37 contracts per section. The spine routes; the author confirms against the named packet.

| # | Source | Path | What it provides | Authority |
|---|---|---|---|---|
| 1 | **Thesis v2** | `omni_thesis_v2_2026-05-26.md` | base body; exact section text for preserve/sharpen/add/supersede | superseded-but-source |
| 2 | **Enterprise Posture** | `doctrine/omni_enterprise_posture_2026-06-03.md` | care+business posture, (c)-resolution, 8 binding statements, **Governed Capability Exchange capstone**, 9 guardrails, keeper lines (`DEC-035`/`DEC-036`) | governance_binding |
| 3 | **AI-Substrate Frame** | `doctrine/ai_substrate_frame_2026-06-03.md` | AI as cross-cutting axis; 5 landing zones (`DEC-034`) | governance_binding |
| 4 | **REV-176 routing spine + inventory** | `ai_substrate_routing_spine_REV-176.md` + `ingestion/outside_learning/sources/2026-spring_ai_substrate/inventory/` (7 clusters on disk; 5 stragglers pending) | the anti-compression source: ~630 source-anchored concepts, landing-zone routing, net-new primitives, reread flags, stale/affirm flags | evidence_nonbinding |
| 5 | **Two pressure tests** | `audits/2026-06-03_outward_omni_agentic_interop_pressure_test.md` + `audits/2026-06-03_federation_universal_trust_topology_pressure_test.md` | trust-transfer/metadata insight; Federation (c)-resolution (axis, not god-domain) | analysis_nonbinding |
| 6 | **This spine** | `omni_thesis_v3_integrated_spine.md` | the per-section weave map (the authoring checklist itself) | plan_nonbinding |
| 7 | **Surface Map + surfaces/ + projections/** | `OMNI_Surface_Map_vNext.md`, `surfaces/*` (17), `projections/*` (4) | P4/P5: external agents/surfaces consume **projections, not raw domain truth** — the structural basis for exchangeable projections (§7.7) | P4/P5 contracts |
| 8 | **System Map + contracts/** | `OMNI_System_Map_vNext.md`, `contracts/*` (18) | P1 ownership boundaries the thesis must not contradict (Identity/Federation/RBAC/CNS/D3/D5/D6/D7/Observation/Clinical-Memory/BIZOPS/Settings-Catalog/OFC/Intake/Messaging) | P1 contracts |

**v4 carry-forward inputs — the v4 Source Stack (fold in at v4 authoring; `analysis_nonbinding`, reconcile at the v4 ledger, bind nothing until promoted `GRD-036`):** post-v3 strategic captures + corpora staged after the spine — pull ALL into v4 authoring alongside #5. **This list GROWS as new captures land; keep it current** (the v4 build gate, wave-2 plan §C2, points here by name). Catalogued + tagged `work_package = v4_thesis_source_stack`.
- `audits/2026-06-07_federation_centralized_vs_decentralized_care_operator_read.md` — federation = operator-sovereign care instances on shared substrate; **capability-topology family DECLARED** (capability-addressable substrate, names provisional → Capability Topology Reconciliation Gate). Routes: §A · §6/§6.7/§6.9 · §7.6/§12 · §7.8 · §C · §7.7 · `REV-177`.
- `audits/2026-06-08_website_surfaces_public_content_operator_read.md` — website = the **Public/content surface KIND** (`OMNI_Surface_Map_vNext.md` §3; un-contracted, `REV-175`); surfaces own NO truth (`D0THES-DEC-033`). **ACCOUNT, do NOT over-promote** — modest weight, not a thesis pillar. Routes: §3 (P5) · §7 · §13 · §21 · `REV-175`.
- `ingestion/outside_learning/orientation/ORIENTATION-2026-06-10_knox_strategic_read_pre-100video-wave_v4-refocus.md` — Knox corpus-level strategic read of the ~199-video wave (v4 = governed **execution** substrate reframe; loop/control-plane model; build-vs-buy-vs-wrap; Intelligence Foundry; repo-as-OS). ★ high-yield, but **pressure, not canon** (`captured_interpretation_nonbinding`; ~10-15% may overlook existing concepts; Knox can't see the real repo). Routes broadly: §B/§7.6/§8/§C + Build-OS + repo/Foundry.
- `audits/2026-06-12_care_lanes_pressure_test_acute_surgical_pt_clinic_snf_ecf.md` — care-lane scope (acute inpatient · ASC · PT · clinics · SNF · ECF) + OMNI Core + Care-Lane Model; **runs as its own pre-spine pressure test** (Knox's 18-section prompt) AFTER the wave-2 corpus is processed. Routes: §2/§10 scope · Federation/operator-types · D3/D5/OFC · Clinical-Memory/Observation · RBAC.
- `analysis/EVRUN-2026-000002_ai-corpus-wave-2/` (the ~110-video wave-2 registry, **once processed**) — built ON `analysis/EVRUN-2026-000001_ai-corpus-synthesis-and-routing/` **§2A** (prior 42-video corpus + full-corpus net-new primitive set). The processed AI-substrate corpus is the primary §B/CNS/Build-OS/§C/security pressure for v4. **This is the largest single v4 input; do not let any other carry-forward note overshadow it.**
- **Post-C2 (2026-07) captures — the maintained list lives in `v4_C2_source_base_declaration.md` §2 "Post-C2 living additions"; consult there so this stack cannot drift stale again:** `EVRUN-2026-000004` (async-care crystallization; §0.5 settled identity/boundary/resolution ontology + build mandate) · `EVRUN-2026-000005` (wave-4 AI corpus, 15 sources) · the three 2026-07-12 architecture captures — `v4_C4_governed_reporting_resolution_capture.md` (**Accountability Loop**, GRR reframe) · `v4_C4_platform_loop_capture.md` (**Platform Loop** = E&V → Release → Runtime) · `v4_C4_agent_runtime_and_harness_capture.md` (**Agent Runtime & Harness**, §B runtime layer) — three coupled specializations + the §B runtime layer of OMNI's recursive governed loop (watch-list WI15). The C2 declaration is the canonical assembled home for post-close captures.

**Chat-capture confirmation (why the chat is NOT a dependency):** every capstone surfaced in the authoring chat is persisted in a durable artifact above — Governed Capability Exchange → #2 (`DEC-036`/`GRD-033/034`); operator capability exchange / backend burden → §7.8/§13.5 (this spine) + #2 subfamilies; trust-transfer/metadata → `GRD-030` + #4 §2 + #5; non-human actors / delegated authority → #4 §2/§3 + §A. If a future capstone is ever *only* in chat, capture it into #2/#4/this spine **before** it can inform thesis prose.

**Non-obvious source consult (the previously-thin P4/P5 + contract dimension) — load-bearing sections only:**
- **§3 / §B (planes):** Surface Map header (7-plane taxonomy P0–P6 + evidence).
- **§7.6 (CNS scope):** `contracts/CNS_orchestration_contract.md` (bounded, non-sovereign).
- **§7.7 (exchangeable projections):** `projections/patient_context_packet_projection_contract.md` + `projections/00_projection_contract_template.md` (canonical truth + internal/external projection + ingestion + action + audit).
- **§7.8 / §13.5 (operator capability exchange):** `contracts/federation_contract.md` + `contracts/business_ops_workforce_contract.md` + `D6_commerce_contract.md` + `ordered_fulfillment_contract.md`.
- **§A (trust axis):** `contracts/{federation,rbac_authority,identity}_contract.md` + `D7_documents_consent_media_contract.md` (the 4-way composition).
- **§B (AI axis):** `contracts/CNS_orchestration_contract.md` + AI #12 (promote-from-deferred per REV-176 §2).
- **§C (Governed Capability Exchange):** all P1 contracts + the new capability-exchange contract this section drives.

### Authoring safeguards (binding checks; Knox 2026-06-05) — "the thesis is aware of the stack, it does not become the stack"

1. **Absorb consequences, not mechanics.** The thesis carries the *architectural consequence* of the P4/P5 + contract work; the contracts/surfaces/projections retain the detailed mechanics. Do NOT restate surface/projection/domain-contract internals in the body.
2. **§7.7 is the P4/P5 bridge — it MUST be strong.** It must state: each domain owns canonical truth **and** supports governed internal projection + external projection + ingestion pathway + action capability + audit/proof. If §7.7 is weak, §C degrades into "API exchange" instead of "governed substrate exchange." This is the single highest-watch section.
3. **§Build-OS pointer carries POSTURE only, never PRACTICE.** Build agents exist · build work is gated · evals/proof matter · agentic build belongs to Build OS + Agent Work Protocol → then point to `REV-158`. Do not let the thesis become a build manual or a live project tracker (Foundation vNext roadmap owns sequence; Build OS owns staged execution).
4. **Standing invariant — exchange ≠ truth ownership.** Recurring guard for §3/§7/§8/§C: *Governed Capability Exchange is HOW OMNI emits / ingests / acts; it does NOT own the facts being exchanged.* P1 domains own truth; external systems are rails/processors/counterparties (anti-corruption layer).
5. **Thesis first, then contract retrofits.** v3 sets constitutional posture; the Foundation vNext roadmap drives the subsequent domain/contract passes. The thesis does not pre-author contract schemas.

---

## FINAL v3 TABLE OF CONTENTS (reading order — normalized; v2 = preservation source, NOT the TOC)

Principle: **use v2 as the preservation source, not the final table of contents.** The body is ordered for comprehension; the v2 section map below each entry is for fidelity only. (Numbering = clean v3 sequence; a v2→v3 number map lives in §DIFF, and internal cross-refs are reconciled in one final pass after all sections land.)

| v3 § | title | v2 source consumed | new v3 material | body/appendix |
|---|---|---|---|---|
| — | passport / front matter | — | supersedes v2; provenance | front |
| §0 | How to read | — | care-first orientation | body |
| **PART I — WHAT OMNI IS** | | | | |
| §1 | What OMNI is (incl. silo-stack grounding — stays early) | §1 | defining property across actors+rails; GCE named; care+business | body |
| §2 | What OMNI is not | §2 | not-fortress/AI-platform/trust-network/data-company/integration-count | body |
| §3 | Architecture planes (P0–P6 + evidence) + the two axes (preview) | §3 | axes promoted to first-class; preview | body |
| **PART II — THE CARE OS STRUCTURE** | | | | |
| §4 | Vertically layered care OS | §3.7 | (preserve) | body |
| §5 | Four coexistent operator-level abilities | §3.8 | (preserve) | body |
| §6 | The designed family of topologies | §4 | capability-exchange surface = bounded family | body |
| §7 | Brand + operator vocabulary (OMNI Direct shell · 5-tier · visible-provider · specialty/core · anti-gravity · brand-trust) | §6.5/§6.6/§6.7/§6.8/§6.9/§6.10 | **OMNI Direct = one rail, economically not demoted**; partner-operator capability face | body |
| **PART III — STRATEGY & TRAJECTORY** | | | | |
| §8 | Strategic pressure-test + comparator lenses *(RELOCATED — after structure)* | §3.5 | Lens B durable-rails patterns | body |
| §9 | Near-term wedge | §5 | (preserve; capability-exchange architected-now/expose-later) | body |
| §10 | Long-term destination + dragon egg | §6/§6.1 | (preserve) | body |
| **PART IV — THE CARE SUBSTRATE DOCTRINE** | | | | |
| §11 | Ownership · care_commitment · consent specificity · clinical adoption · per-event orthogonality | §7.1–§7.5.4 | (preserve) | body |
| §12 | CNS scope | §7.6 | CNS = governed agentic control plane (bounded) | body |
| §13 | Master projection doctrine *(P4/P5 BRIDGE — highest watch)* | §7.7 | **exchangeable projections** (canonical truth + internal/external projection + ingestion + action + audit) | body |
| §14 | Cross-operator coordination | §7.8 | **operator capability exchange** | body |
| §15 | The two governed loops + authority gates | §8/§8.5/§8.6 | **loops touch outside via GCE**; context-as-routed-strategy | body |
| **PART V — THE CROSS-CUTTING AXES (the new heart)** | | | | |
| §A | Trust / Authority / Permeability axis | (new; draws Identity/Fed/RBAC/D7) | full add | body |
| §B | AI substrate axis | (new; absorbs §9/§9.1/§12.8) | full add | body |
| §C | Governed Permeability through Governed Capability Exchange | (new) | full add | body |
| **PART VI — COHERENCE · LADDER · PRIMITIVES** | | | | |
| §16 | Coherence operationalized | §10 | external returns classified before counting | body |
| §17 | Identity/consent/authority ladder | §11 | extends to non-human actors | body |
| §18 | Surgical primitives | §12.1–§12.7 | (preserve) | body |
| **PART VII — BUILD · BUSINESS · GOVERNANCE** | | | | |
| §19 | What to build now | §13 | architect capability-exchange substrate now | body |
| §20 | Business engine | §13.5 | operator capability exchange = backend-burden solve | body |
| §21 | Anti-realself / operator-pluralism | §13.6/§13.7 | (preserve) | body |
| §22 | What NOT to build yet | §14/§14.5 | capability-exchange rails deferred; hook now | body |
| §23 | Unresolved questions | §15 | wire-schema, internet-scale agent identity, economic-center timing | body |
| §24 | Doctrine relationship | §16 | pointers to posture/frame/spine/inventory | body |
| §25 | Operating contract | §17 | stabilize-after-v3 | body |
| §26 | Build-OS pointer (POSTURE only → `REV-158`) | (new, short) | full add | body |
| **APPENDICES** | | | | |
| §INH | Preservation manifest (v2 sections inherited verbatim) | — | add | appendix |
| §DIFF | v2→v3 diff + v2→v3 number map | — | add | appendix |
| §SRC | Source stack (mirror of §0 above) | — | add | appendix |
| §27+ | evidence / position / companions / amendment-log | §18–22 | + Founder v3 companion | appendix |

**Open decision for Nick/Knox:** comparator placement — (A) Knox: Part after the axes; (B) Opus-recommended: **§8, right after the structure part** (early grounding kept, forward-refs fixed); (C) status quo: keep at §3.5 before structure. Opus recommends **B**.

---

## Constitutional Reconciliation Ledger (anti-flattening; FOUR lanes; resolved at §A/§B/§C + Final Assembly Gate step 7)

The last 1–2 weeks produced gems across MORE than AI/GCE — the **surface plane, projection plane, the two governed loops, operator capability exchange, business-ops/workforce/operating-intelligence, domain contracts, the System Map, and Build OS**. Not all of that becomes thesis content (contracts/surfaces/Build-OS keep their mechanics), but its **consequences must land and must not be flattened**. This ledger has **four lanes**; each item is dispositioned **(a)** already landed · **(b)** section-local / stays-in-contracts-or-Build-OS · **(c)** MISSING → must land at the named destination before ratification.

### Lane 1 — Primitive reconciliation (→ §7 catalog)
Trust-axis / AI-axis / GCE primitives (`REV-176` §3 + GCE capstone `DEC-036`): **(a)** already in §7 · **(b)** section-local (§A/§B/§C) · **(c)** missing → add to §7.

| Candidate primitive | source | provisional home | provisional disposition |
|---|---|---|---|
| `non_human_actor` (+ `represented_principal`) | REV-176 §3; v17/v41 | §A (Identity) | §7 has `actor`+subtypes; `represented_principal` is NEW → **(c)** add to §7 identity family |
| `delegation_chain` | REV-176 §3; GCE | §A (Identity/RBAC) | **(c)** likely missing → add to §7 |
| `delegated_authority_envelope` / `agentic_consent` | REV-176 §3; v20/25/29/38 | §A (RBAC) | **(c)** new authority/consent primitive → §7 consent/authority family |
| `delegated_authority_envelope` (preferred term; not bare `authority_envelope`) | GCE capstone + RBAC | §A (RBAC) | **DISTINCT from `capability_envelope` (Knox 2026-06-05, LOCKED):** `delegated_authority_envelope` = what an actor/agent may do *for a represented principal* under scope/purpose/TTL/revocation/escalation; `capability_envelope` = what a *model/tool/capability* may technically/policy-wise do (AI #12). A tool may be *capable* of ordering a lab while the actor is not *authorized* to order this lab for this patient now. **(c)** new → §7 authority family. |
| `capability_contract` | GCE; v08 | §C | **(c)** new → add to §7. **Three-object family LOCKED (Knox 2026-06-05): `capability_envelope` (what a model/tool may do, §B/AI#12) ≠ `delegated_authority_envelope` (what an actor may do for a principal, §A) ≠ `capability_contract` (what an actor/system may invoke across a governed boundary, §C).** AI #12 does not own "capability" generally; §C + owning domains own general/external capability exchange. |
| `capability_server`/`_tool`/`_resource`/`_prompt`/`_call`/`_trace`/`_version`/`_visibility_policy` | REV-176 §3; v07/v08 | §B/§C (AI #12 plane) | §7 has `ai_capability`/`capability_envelope`; full taxonomy is **(b)/(c)** — decide which are constitutional vs registry-internal |
| `context_mode` / `context_strategy` (+ Context Router) | REV-176 §3; v02/03/04/16 | §B | **(b)** section-local unless referenced as substrate primitive |
| `context_packet_exchange` / `purpose_bound_context_packet` | GCE; v04/v35 | §C | §7 has `context_packet`; exchange variant **(c)** → add |
| `trust_transfer_record` | REV-176 §3; v39; `GRD-030` | §A/§C | **(c)** new constitutional primitive → add to §7 |
| `external_return_classification` + `returned_artifact`/`_status`/`_observation_candidate`/`_commit_ack` | GCE; §10 coherence | §C/§10 | **(c)** new → the "classified before it counts" mechanism; add to §7 |
| `short_lived_credential` / vault-bridge | REV-176 §3; v20 | §A/§B | **(b)** likely section-local (security mechanism) |
| `agent_control_plane` / AgentOps | REV-176 §3; v17/v22 | §B (CNS) | **(b)** CNS mechanism, not a new primitive |
| `eval_bundle` / `llm_judge_rubric` / `autonomy_level` (A0–X) / `compiled_skill` / `prompt_template` / `few_shot_example_set` | REV-176 §3; v01/v22/v43 | §B + Build-OS (`REV-158`) | mostly **(b)** Build-OS; `model_version_of_record` already in §7 |

*Lane-1 rule:* when §A/§B/§C are authored, finalize dispositions; the Gate folds every **(c)** back into §7's catalog.

### Lane 2 — Projection / Surface reconciliation (→ §7.7 [HIGHEST watch] + §C + §3 planes; sources: `OMNI_Surface_Map_vNext.md`, `projections/*`, `surfaces/*`, System Map P4/P5)
**Knox correction 2026-06-05: projection must NOT absorb capability.** The exchange decomposes — §7.7 owns the PROJECTION element; §C owns the rest:
- **canonical truth** → P1 (owning domain) · **projection** → governed read-model (exposes, does NOT act) · **ingestion pathway** → inbound evidence/candidates · **capability endpoint** → permitted actions · **owning domain** → commits · **audit/proof** → records the crossing.
- Meta-principle (one line in §7.7): **"Projections expose. Capabilities act. Domains commit. Audit proves."**
- Division of labor: §7.7 = the projection (read) element + exposure/gating/degradation; **the full governed exchange surface (ingestion + capability + commit + trust-transfer) = §C.** "Exchangeable projections" is reframed → a domain's **governed exchange surface, of which the projection is the read element** (not an umbrella for read+write+act+audit).

Consequences of the P4/P5 plane work that MUST land (mostly §7.7 + §C, NOT §7.1–§7.5.4):
- surfaces own **no** canonical truth; surfaces **operate projections** and **route actions to owning domains** — they never commit truth — **(c)** §7.7
- the "≠" set, explicit in §7.7: projection ≠ truth · projection ≠ authority · surface ≠ projection · **projection ≠ capability** · external-projection ≠ raw-substrate
- projections are **views / read-models** over domain truth (P4); `hard_projection` / `soft_projection` / `scoped_conversation_projection` / `care_flow_projection` — **(a)** primitives in §7; doctrine **(c)** in §7.7
- **exposure gating:** projection existence ≠ exposure. truth exists → projection generable → `visibility_grant`/`shared_context_grant` gates who-sees → RBAC/Federation gates who-operates → surface renders → domain commits writes — **(c)** §7.7 (wires to §7.5 grants + consent specificity)
- **degrade-declare:** a projection with incomplete consent/freshness/provenance/authority must self-declare state (hidden / partial / stale / redacted / unverified / patient-source-not-adopted / not-actionable) — never silently present partial as whole; critical for external agents — **(c)** §7.7 (ties to §7.4 degraded_safety_state + §7.5.3 patient-source-not-truth)
- external agents/surfaces receive **purpose-scoped governed projections + permitted capabilities, NOT raw substrate** — **(c)** §7.7/§C
- patient `context_packet` = a projection (authority-labeled, references/summarizes, **not a chart dump/clone**) — **(c)** §7.7
- metrics are projections, never source truth (`T0-15`); every projected value carries **lineage / freshness / source** — **(c)** §7.7

### Lane 3 — Loop / Flow reconciliation (→ §8 / §8.5 / §8.6 + §C + §10; sources: System Map two-loops, `DEC-036`)
The two governed loops + gates that MUST land:
- **Sense loop:** source → observation/assertion → adoption → context — **(c)** §8
- **Act loop:** request → authorize → order → fulfill → output → review/release → follow-up — **(c)** §8/§8.6
- **authority gates** bridge the loops (human commits; NASA/Houston go/no-go) — **(c)** §8
- planning axis (D3) can constrain/initiate Act; `fulfillment_order` / `care_obligation` — **(c)** §8.6
- **external exchange touches BOTH loops:** Sense ingests inbound capability calls **classified before they count** (evidence / observation / proposed-meaning / `externally_committed_truth` — committed in source system, NOT OMNI-committed); Act emits outbound calls via capability contract + owning-domain commit — **(c)** §8 + §C + §10. *(Term renamed from "committed-truth" per Knox 2026-06-05; propagate to §C/§10 + align DEC-036 pipeline at §C retrofit.)*
- context-as-routed-strategy at the sense/assembly gate — **(b/c)** §8 + §B

### Candidate guardrail for §A (Knox-pattern, 2026-06-05) — propose, ratify at §A
**"No single domain owns a cross-cutting concern."** Three caught instances of the same disease (a domain swallowing a cross-cutting concern → god-domain one level down): (1) Partner Operator absorbing *non-human actor* (§6.7, fixed); (2) projection absorbing *capability* (§7.7, fixed); (3) AI #12 absorbing *non-human authority* (posture (c), fixed). Generalizes `GRD-031` (Federation-not-god-domain). Candidate §A line: *the trust axis is decomposed and owned by no single domain; non-human authority is not "AI's"; capability is not "projection's"; actor identity is not "operator's." Each cross-cutting concern is composed across its owners, never absorbed by one.* Mint as a guardrail at §A if Nick/Knox approve.

### Lane 4 — Contract / Domain-boundary reconciliation (stays in contracts/maps/Build-OS — thesis carries the INVARIANT only, does NOT overwrite)
Invariants the thesis preserves as posture; detail stays in P1 contracts + Foundation vNext roadmap + Build OS:
- one owner per fact · projection ≠ authority · payload-noun ≠ domain · candidate ≠ commit · AI proposes / owning domain commits — **(a)** thesis carries these as invariants (§3/§7.2/§7.7/§B/§C); **never** re-author contract schemas in the thesis
- domain sequence/schemas → Foundation vNext roadmap, not thesis — **(b)**
- Build OS (agentic build, evals, autonomy levels, proof gates, Agent Work Protocol) → **posture only** in §Build-OS pointer; practice → `REV-158` — **(b)**

**§C precision nuance (Knox 2026-06-05; deferred from §7.8 to §C):** sharpen "external processors execute, never own" at §C into → *"external processors may execute delegated work under a capability contract; OMNI / the owning domain retains source-of-truth, authority, audit, and commit semantics — UNLESS a specific external source is being accepted as evidence/observation through the ingestion pathway"* (the two faces: outbound-delegated-execution vs inbound-accepted-evidence). Do NOT patch §7.8; lands in §C.

**Overall rule:** at §A/§B/§C authoring, update all four lanes to final dispositions; the Final Assembly Gate (step 7) verifies every **(c)** landed at its destination and every **(b)** stayed out of the body. No lane may be silently skipped.

---

## Part I — Identity & framing (what OMNI is)

| v3 § | v2 source | disp | new concept woven in | anchor | future contract |
|---|---|---|---|---|---|
| §1 What OMNI is | §1 | **sharpen** | defining property = coherent movement of identity/authority/consent/context/proof/commit **across actors + rails**; care = business + moat; trust & AI = axes; **Governed Capability Exchange = the mechanism of this sentence** (named here, not deferred) | `DEC-035`/`DEC-036` | — |
| §1.5 Consumer promise | §1.5 | **preserve** | (care-remembers-you intact) | — | — |
| §2 What OMNI is not | §2 | **sharpen** | + not a fortress+APIs; not an AI/agent platform; not a trust-network-that-does-care; not OMNI-Direct-the-destination; **not measured by integration count** (`GRD-034`) | `DEC-035`/`GRD-034` | — |
| §3 Planes + the two cross-cutting AXES | §3 | **supersede** | P0-P6 + evidence preserved; **promote Trust/Authority/Permeability axis + AI axis to first-class**; the RBAC §5 four-way composition table; **Governed Capability Exchange spine introduced as the cross-cutting mechanism that threads both axes** | `DEC-035`/`DEC-036`; RBAC §5 | (cross-domain) |

## Part II — Strategy, comparators, layering (mostly preserved, two sharpens)

| v3 § | v2 source | disp | new concept woven in | anchor | future contract |
|---|---|---|---|---|---|
| §3.5 Comparator lenses (A/B) | §3.5 | **sharpen** | + Lens B adds: ports-and-adapters / anti-corruption-layer / stable-semantics-vs-unstable-mechanisms as borrowed durable patterns; payload≠domain preserved | `comparator_analogy_registry`; thread_01 | — |
| §3.7 4-layer care OS | §3.7 | **preserve** | (Surface / Coordination-CNS / Boundary-Policy / Substrate-Physics intact) | — | — |
| §3.8 Four operator abilities | §3.8 | **preserve** | — | — | — |
| §4 Designed family of topologies | §4 | **sharpen** | family-expansion-by-doctrine discipline now **also governs the capability-exchange surface** (bounded, expanded by doctrine pass — `GRD-003`/`GRD-034`) | `GRD-034` | — |
| §5 Near-term wedge | §5 | **preserve** | (+ note: capability exchange is architected-now / exposed-when-demand — wedge unaffected) | `GRD` arch-now/expose-later | — |

## Part III — Brand, operator vocabulary, deployment (preserve + one reframe)

| v3 § | v2 source | disp | new concept woven in | anchor | future contract |
|---|---|---|---|---|---|
| §6–§6.6 Brand architecture / visible-provider | §6–6.6 | **preserve** | — | — | — |
| §6.7 5-tier vocabulary (OMNI Direct…Partner Operator) | §6.7 | **sharpen** | **OMNI Direct = architecturally one rail (economically NOT demoted)**; surfaces specialize, substrate unifies; partner-operator gains the agent/capability-exchange face | `DEC-035` #5/#6; `GRD-032` | Federation |
| §6.8–§6.10 Specialty / anti-institutional-gravity / brand-trust transparency | §6.8–6.10 | **preserve** | — | — | — |

## Part IV — Ownership, projections, coordination (the projection sharpen is load-bearing)

| v3 § | v2 source | disp | new concept woven in | anchor | future contract |
|---|---|---|---|---|---|
| §7.1–§7.5.4 Ownership / care_commitment / adoption / per-event orthogonality / consent specificity | §7.1–7.5.4 | **preserve** | (the 19-weeks care doctrine — intact, vindicated) | — | — |
| §7.6 CNS scope | §7.6 | **sharpen** | CNS = governed agentic orchestration/control plane (bounded, non-sovereign, `GRD-029`) | REV-176 §2; v17/v22 | CNS |
| §7.7 Master projection doctrine | §7.7 | **sharpen** | **projections become EXCHANGEABLE: each domain owns canonical truth + internal projection + EXTERNAL projection + ingestion pathway + action capability + audit** — the structural enabler of capability exchange | REV-176 §2; v04/v08 | (all P1 domains) |
| §7.8 Cross-operator coordination | §7.8 | **sharpen** | **Operator Capability Exchange** (schedule-out, credentials, catalog, payroll, inventory); agent = mechanism, human/operator = `care_coordination_owner` | `DEC-036`; v07/v45; thread_01 | Federation, BIZOPS |

## Part V — The operating loops + the two axes + capability exchange (the heart)

| v3 § | v2 source | disp | new concept woven in | anchor | future contract |
|---|---|---|---|---|---|
| §8 Two interlocking loops + gates | §8 | **sharpen** | **the loops touch the outside via Governed Capability Exchange**: Sense loop ingests (inbound capability calls, classified before counting); Act loop emits (outbound capability calls); context-as-routed-strategy at the sense/assembly gate | `DEC-036`; REV-176; v02/03/04/16 | CNS, AI #12 |
| §8.5 Multi-actor deliberation | §8.5 | **preserve** | — | — | — |
| §8.6 Act/Fulfillment loop | §8.6 | **sharpen** | fulfillment_order/care_obligation now also realized through external capability exchange (lab/Rx/insurance/supplier rails) | `DEC-036`; v27 | OFC |
| **§A Trust/Authority/Permeability axis** (NEW) | — | **add** | decomposition (Identity/Federation/RBAC/D7/CNS-Meta/AI#12/domain); Federation-bounded; **non-human actor + delegated-authority envelope + agentic consent**; trust-relocation/metadata (`GRD-030`); controlled-broker inbound/outbound; cross-federation signed capability contracts | REV-176 §2; v20/25/29/37/38/41; `audits/2026-06-03_federation_*` | Federation, RBAC, Identity |
| **§B AI substrate axis** (NEW; absorbs §9/§12.8/§9.1) | §9/§9.1/§12.8 | **add**+supersede | within/on/ongoing; context-as-routed-strategy + Context Router; **Capability/Model/Tool plane (AI #12 promoted)**; CNS-as-control-plane; autonomy A0-X / HITL spectrum; evals/runtime-proof + model-version lineage; failure modes / least-agency; moat-vs-commodity | REV-176 §2/§3; v01/04/17/22/40/43/44 | AI #12, CNS |
| **§C Governed Permeability + Governed Capability Exchange** (NEW) | — | **add** | the universal spine (internal+external); subfamilies (clinical/administrative/operator/commerce/communication); **rail-agnostic/protocol-agile/vendor-replaceable/semantics-stable** (`GRD-033`); bounded-not-connect-everything (`GRD-034`); capability_server/contract/envelope/call/trace + trust_transfer_record + non_human_actor + context_mode | `DEC-036`; REV-176 §3; v06/07/08/28/39/45/47; thread_01 | **all P1 domains + new capability-exchange contract** |

## Part VI — Coherence, identity ladder, surgical primitives (preserve + capability-exchange touches)

| v3 § | v2 source | disp | new concept woven in | anchor | future contract |
|---|---|---|---|---|---|
| §10 Coherence operationalized | §10 | **sharpen** | + coherence property: every external return is classified (evidence/observation/proposed-meaning/committed-truth) before it counts | `DEC-036` | — |
| §11 Identity/consent/authority ladder | §11 | **sharpen** | ladder extends to non-human actors + delegated authority | `DEC-036`; v25/29/41 | Identity, RBAC |
| §12.1–§12.7 Surgical primitives | §12.1–12.7 | **preserve** | (observation/extracted_assertion, device/robot/external_system actors, conversational intake, care_relationship/shared_context_grant, integration plane, case-deliberation, duplicate-therapy) | — | — |
| §12.8 → folded into §B | §12.8 | **supersede** | capability/model registry → the full Capability/Model/Tool plane (§B) | REV-176 | AI #12 |

## Part VII — Build-now, business engine, governance (preserve + operator-exchange)

| v3 § | v2 source | disp | new concept woven in | anchor | future contract |
|---|---|---|---|---|---|
| §13 What to build now | §13 | **sharpen** | + architect the capability-exchange substrate now; expose thin per wedge | `GRD` arch-now | — |
| §13.5 Business engine | §13.5 | **sharpen** | **operator capability exchange solves the backend burden** (payroll/inventory/catalog/scheduling-out) as part of care = business | `DEC-036`; thread_01 | BIZOPS, D6, OFC |
| §13.6–§13.7 Anti-realself / operator-pluralism | §13.6–13.7 | **preserve** | — | — | — |
| §14–§14.5 What NOT to build yet / substrate hooks | §14–14.5 | **sharpen** | capability-exchange rails (specific vendors) = NOT-yet; the substrate hook (projection + capability contract) = now | `GRD-034` | — |
| §15 Unresolved questions | §15 | **sharpen** | + the open capability-exchange wire-schema, internet-scale agent identity, economic-center-shift timing | `audits/*`; REV-176 §6 | — |

## Part VIII — Doctrine stream, build-os pointer, preservation, diff

| v3 § | v2 source | disp | new concept woven in | anchor | future contract |
|---|---|---|---|---|---|
| §16 Doctrine relationship | §16 | **sharpen** | + pointers to posture/frame/spine/inventory | — | — |
| §17 Operating Contract | §17 | **preserve** | + stabilize-after-v3 discipline (`GRD` #5) | — | — |
| **§Build-OS pointer** (NEW, short) | — | **add** | build-time facets (agent lanes, evals-in-CI, autonomy A0-X, deterministic gates, harness-first, compiled skills, synthetic monitoring, secrets/supply-chain, probabilistic SDLC, governance cadence = "boots + bookkeeping") → **`REV-158` Build-OS revamp, NEXT phase** — POSTURE here, PRACTICE there | REV-176 §"Build OS"; v05/19/21/22/23/24/30/46 | (Build OS, not a P1 contract) |
| §INH Preservation manifest | — | **add** | explicit list of v2 sections inherited verbatim | — | — |
| §DIFF v2→v3 diff | — | **add** | this spine, finalized | — | — |
| §18–§22 evidence/preserves/position/companions/amendment-log | §18–22 | **preserve**+update | + companion = Founder v3 (authored AFTER integrated v3) | `SUP-003` | — |

---

## Governed Capability Exchange weave-check (proof it is NOT an end-addendum)
It threads: **§1** (the defining-property mechanism) · **§2** (not-connect-everything) · **§3** (cross-cutting spine) · **§4** (bounded-expansion discipline) · **§6.7** (partner-operator face) · **§7.7** (exchangeable projections — structural enabler) · **§7.8** (operator exchange) · **§8 / §8.6** (loops touch outside) · **§A** (trust/authority of exchange) · **§B** (capability/model/tool plane) · **§C** (the named spine) · **§10/§11** (classification + non-human actors) · **§13.5** (backend-burden business value) · **§14/§15** (what's deferred). **14 sections, front to back** — woven, not bolted.

## Non-loss tracking (Knox constraint #1)
The full concept inventory (`ingestion/outside_learning/sources/2026-spring_ai_substrate/inventory/` — 7 clusters on disk, 5 stragglers pending quota reset) is **tracked, non-blocking-but-not-optional**; the integrated v3 §16 + §18 **back-reference REV-176 + the inventory** so the 47 sources are recoverable, never "vaporized into five sentences."

## Ratified refinements (2026-06-05, Nick + Knox)
- **§C title = "Governed Permeability Through Governed Capability Exchange"** (hybrid): permeability = posture, capability exchange = mechanism. (Not abstract-only, not feature-only.)
- **Care-first order CONFIRMED** (option A): what-OMNI-is → care doctrine → ownership/commit/adoption → operating loops → THEN the axes (§A/§B/§C) that let it survive the agentic/external world. **But preview the two axes briefly in §3** so readers know they exist; full development comes after the care substrate is established. Care remains the center of gravity.
- **Anti-compression rule (binding for authoring):** source/routing-spine anchors must stay ALIVE in the prose for the load-bearing ideas — Context Router, trust-transfer/metadata custody, non-human actors, capability contracts, exchangeable projections. The good spine must not compress into anchor-less prose ("don't turn 'we found oil' into a nice paragraph about oil"). Cite REV-176 clusters / source videos inline for major claims.
