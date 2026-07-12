# OMNI Agent Runtime & Harness — architecture capture

*Working handle: **Agent Runtime & Harness** = the cross-cutting AI-substrate (§B) realization of **how a real agent is instantiated, budgeted, equipped, delegated, steered, compacted, recovered, and governed across a run** — consumed by Build-OS (build agents), the Platform Loop (E&V/Release/Runtime), and product/care surfaces. It **fulfills the already-named "Agent Runtime / Control Plane Doctrine"** owed by the AI-substrate work — it is NOT a new lane/domain and NOT invented from a screenshot. Public name finalizes at the spine.*

Document type: `plan_or_roadmap` (cross-cutting architecture capture; pre-spine) · Authority: `analysis_nonbinding` (`GRD-036`) — **NOT spine/thesis prose, NOT contract edits, NOT a Build-OS build.** Status: `active_map` (mapped to spine/thesis/contract depth; runtime BUILD deferred). Domain(s): ai_substrate, build_os, platform_architecture, cns_orchestration, cross_cutting · Review gate: `user_knox_required`.
**Relationship:** the **§B AI-substrate axis** runtime layer. **CNS** orchestrates candidates through it; **owning domains** commit; **Build-OS** governs the build-agent instance of it; **E&V/Release/Runtime** validate/deploy/operate agent runtime profiles. Bounded by construction (`GRD-029` CNS-not-sovereign; §B AI-is-capability-never-authority). **Map-depth only; not build-ready.**

## §0 — What this is / is NOT (read first)
- **IS:** the anti-evaporation home + spine/thesis/contract MAP for the agent runtime — the objects, relationships, ownership, and seams that let an agent run governed. Enough for spine/thesis/contracts/taxonomy/ontology, per operator directive ("map it out enough… not build the whole Build-OS today").
- **IS NOT:** a new domain/lane · a Build-OS build spec · a "one giant Opus with repo access" (explicitly rejected in the AI-substrate work) · MCP-as-doctrine (`GRD-033`) · a reopening of the two loop captures.
- **Dedup (compose, do NOT re-mint):** this **consumes** deeply pre-authored material — thesis **v3 §B** (Capability/Model/Tool plane · `capability_envelope` · Context Router · autonomy A0–X/HITL · `model_version_of_record` · least-agency) · **`ai_substrate_frame_2026-06-03`** (`DEC-034`) · **Agent Work Protocol** (the runtime loop of an agent executing a work package) · **Build-OS `09`/`10`/`11`** (admission/proof) · **`REV-158`** (Build-OS practice) · **FWREG-007** (CNS + Knowledge Reservoirs frontier) · the EVRUN registry agent-runtime carriers (§13). **The AI-substrate work already NAMED this deliverable** (AI Capability Envelope Contract · Context Packet Doctrine · Agent Runtime/Control-Plane Doctrine · Model/Context Strategy Router · Non-Human Identity/Security · AI Eval/Runtime-Proof · Build-OS AI Addendum) and rated the old architecture **~20–30% complete on AI-native build/runtime**; this capture assembles the scattered parts, it does not discover a need.

## §1 — Three runtime contexts (same harness laws; different authority + exposure)
| context | who runs it | authority ceiling | readiness (honest) |
|---|---|---|---|
| **Build agent** (builds/maintains OMNI) | Build-OS lanes under Agent Work Protocol | build artifacts + proof; **no product/care authority**; open-tools / closed-commit | **manually usable, not robustly self-governing** (this session = the live scenario, §12) |
| **Internal-operations agent** | ops/back-office under RBAC | governed operational actions; candidate→domain-commit | **conceptually modeled, not contractually complete** |
| **User/care-facing agent** (patient/provider/staff) | product surfaces under Polaris + REV-184 | retrieve/explain/draft/propose/execute-bounded; **never silently commits clinical truth** | **NOT build-ready as a general runtime** (a narrow, heavily-governed AI-assisted workflow can still ship) |

## §2 — Object model (candidate; names → C5; composes §B + registry `101`/`102`/`106`/`217`)
- **`agent_definition`** — stable identity/purpose: name·version · owner · intended workflow lanes · allowed principals · **authority ceiling** · lifecycle/deprecation. (Not the model.)
- **`agent_runtime_profile`** — versioned operational passport: model route · harness version · context policy · **skill-catalog projection** · tool/capability grants · credential policy · memory policy · delegation policy · execution environment · HITL/steering mode · token/cost/latency budgets · trace/eval policy · fallback/rollback/kill-switch. (= registry `agent_runtime_profile` 101/102.)
- **`agent_session`** — continuity with a particular user/operator/task.
- **`agent_run`** — one execution attempt with **immutable lineage** (`agent_rollout` = the eval unit; a run is data).
- **`subagent_run`** — a delegated child with **narrower** authority + context (§7).
- **Law (registry `106`):** *an agent is the **model + a governed harness** (context·tools·memory·skills·sandbox·identity·HITL·trace·domain-boundaries) — "harness = where authority lives."* Model choice is downstream of workload architecture; model selection is OMNI's, not a user-facing "which AI is right" marketplace.

## §3 — Context budget · health · compaction · rehydration (the screenshot's lesson — a candidate contract, TEST don't canonize)
**Root law:** **conversation is EXECUTION context, NOT canonical memory.** A patient conversation / provider session / ops incident / coding run must **never become the sole durable state** of the workflow — canonical state lives in owned files/domains; the run reconstructs from them.
- **`context_budget`** partitioned across: constitutional policy · task/work-package · domain evidence · conversation · retrieved context · memory · skill instructions · tool schemas · tool outputs · delegation returns · **reserved completion capacity**.
- **`context_health_state` (candidate; percentages to TEST, not lock):** `healthy <60%` · `warning 60–75%` (checkpoint + compact) · `constrained 75–85%` (no new broad work; load only necessary evidence) · `exhausted/closeout >85%` (stop broad work · preserve state · rehydrate into a fresh run).
- **Compaction MUST preserve (never an ungrounded summary that silently replaces evidence):** unresolved obligations · accepted/rejected decisions · source pointers · authority state · current owner · next action · open conflicts · exact artifacts changed.
- **Anti-evaporation tie:** this is the runtime enforcement of the estate's own recurring failure — *work leaks at pivots; the deepest cost is silent re-derivation.* Controlled checkpoint/rehydration is how a run stops being the database/ledger/log/reasoning-substrate all at once.

## §4 — Skills — governed, lane-scoped, and the hard build-vs-product line
- **Progressive disclosure** (registry): load skill name+description first · full instructions on selection · scripts/refs/assets only when needed.
- **Lane-scoped skill-catalog projection:** OMNI does NOT expose every skill to every run — the admissible set is computed from `actor × task × operator × domain × environment × risk-tier × current-authority × tool-availability` (a Polaris-style computed projection; C4.1).
- **★ HARD LINE (do NOT let a markdown skill become a healthcare capability because the harness can invoke it):**
  - **Build skill** = procedural guidance for a build agent (update a registry · generate a migration · run a security review · write a contract) — **no product authority.**
  - **Product capability** = a governed responsibility for a live product agent (prepare a refill packet · retrieve fulfillment status · assemble a clinical-review context · create a human escalation) — needs a **capability contract · authority ceiling · typed side effects · evals · versioning · proof** (`capability_envelope`, §B).

## §5 — MCP / tools — recognized but visible ≠ authorized
- **Posture (`GRD-033`):** MCP is for integration, **never governance** — wrap it behind OMNI identity/permission/audit/security/Federation. **A tool visible through MCP NEVER means the agent is authorized to call it.**
- **Connector/tool registry (candidate):** connector+tool identity/owner/version · read/write class · allowed actors+purposes · patient/operator/tenant scope · credential broker · data-classes exposed · PHI posture · rate/cost limits · timeout/retry/idempotency · health state · deprecation/kill-switch. The agent receives only tools **admissible to the current workflow lane**, authorized **per call**.

## §6 — Delegation (subagents) — a real contract, not more text poured back
Production delegation carries: parent run · delegated objective · input packet · **output schema** · authority ceiling · allowed tools · context budget · cost/time budget · deadline · termination conditions · required proof · visibility rules.
**Hard laws:** parent stays **accountable** · child **never inherits broader authority than the parent** · delegation depth/fan-out **bounded** · the child returns a **structured result + evidence pointers, NOT its whole transcript** · **subagent output = candidate until adopted by the owning authority.** (This is how subagents *reduce* parent-context pressure instead of inflating it — cf. §3.)

## §7 — Memory · steering · trace/eval · resilience (map-level)
- **Memory:** classes (working/semantic/procedural/episodic — §B) + **promotion/forgetting** rules; the `agent_learning_boundary` — self-edit/memory may NEVER touch clinical policy/authority/consent/identity (registry §2A-B); repo/artifacts = source of truth, not model memory.
- **Steering/HITL:** pause/cancel/resume · "ask a human" · authority modes (HITL/HOTL/HOOTL) per risk tier · least-agency.
- **Trace/eval/observability:** every run traceable; `instrumentation_health_state` (active/degraded/absent, §SBI); evals = evidence never authority; LLM-as-judge = evidence never compliance authority.
- **Resilience:** cost/latency/concurrency budgets · backpressure/fairness · fallback/degraded-route · **kill-switch** · recovery after model/tool failure; assume every component (incl. monitors) can fail.

## §8 — Ownership composition (the connective chart — who owns what; do NOT stuff it all into one plane)
| home | owns |
|---|---|
| **AI Substrate (§B)** | agent/harness semantics · runtime profile · context+memory policy · delegation model · model/capability envelope |
| **OMNI Build-OS (`09`/`10`/`11`)** | build-agent profile · work packages · read graph · build tools/skills · merge + proof gates |
| **Engineering & Validation (E&V)** | validates agent definitions · harness versions · skills · routing policies · eval bundles |
| **Release Operations** | versions + deploys runtime profiles · harnesses · tool catalogs · routing/policy |
| **Runtime Operations** | runs sessions/runs · context health · queues · cost/latency · tool health · failover + kill switches |
| **Care/business domains** | action semantics + **commit authority** |
| **Federation / RBAC / Security** | actor · tenant · purpose · credential · visibility boundaries; non-human identity + delegation proof (§A) |
| **Accountability Loop** | agent failures that create custody/remedy/notification/reporting duties |
**This composition IS the deliverable** — the agent runtime is not one god-plane; it is a governed composition across these homes.

## §9 — Seams (to the loops + Build-OS)
- **Build-OS → E&V:** a build agent produces a change → E&V validates → release candidate.
- **E&V → Release → Runtime:** agent runtime profiles + harnesses + tool catalogs are versioned/deployed/operated as any other platform change (§Platform §8/§9/§10).
- **Runtime → Accountability:** an agent run that harms/owes a party crosses via `response_projection` (Accountability §18).
- **CNS:** orchestrates candidates through the runtime; owning domains commit (candidate≠commit).
- **Polaris:** computes the admissible profile/skill/tool projection per actor×authority×purpose (C4.1).

## §10 — Maturity scenarios (the screenshot is scenario 1 — carried, NOT over-emphasized)
1. **Build agent at high context utilization** (the live Cursor session ~86%): prove the agent **checkpoints canonical state · preserves unresolved decisions + evidence pointers · stops broad work · starts a fresh run · resumes WITHOUT the chat being source-of-truth.** (First Build-OS scenario.)
2. Internal-ops agent invoking a governed tool it is not authorized for (visible≠authorized).
3. User-facing agent delegating to a subagent (structured return; candidate-until-adopted).
4. Skill mis-scoped as capability (build-skill≠product-capability rejection).
5. Model/tool failure mid-run (fallback/kill-switch/recovery).

## §11 — Carrier inheritance (this capture CONSUMES; it does not re-derive — §13 pointers)
Thesis **v3 §B** (the axis) · `ai_substrate_frame_2026-06-03` (`DEC-034`) · Agent Work Protocol · Build-OS `09`/`10`/`11` + `REV-158` · FWREG-007 (CNS/reservoirs) · Platform capture §SBI (hard-law inherit list) · EVRUN registries: `106` model+harness · `101`/`102` agent_runtime_profile · `104` blast-radius autonomy · `105` task-verifiability · `110` agent_sandbox/agency≠authority · `114` mission_object/validation_contract · `217` agent_manifest/declare-before-run · `258` `/goal` · `216` REV-199 reflexive loop · `228` backpressure/fairness · `260` instrumentation_health · `230` llm-as-judge. **Carrier key:** `1xx` = EVRUN-2026-000002 §2A · `2xx` = EVRUN-2026-000003/000005.

## §12 — Owed amendments + Task-D relevance (flagged, propose-only — NOT executed here)
- **OWED (Agent Work Protocol amendment):** a **"Context Health + Controlled Handoff"** section (per §3) — proposed here, **NOT edited into Tier-0 doctrine this pass** (propose-only regime; requires a governance gate). Route on promotion.
- **DONE (this pass):** Platform capture gets a narrow pointer to this capture (how E&V/Release/Runtime consume the agent runtime contract).
- **Task-D:** the agent runtime model is pressured against Palantir Foundry/AIP (agent tooling, evals, SDK/MCP) · ServiceNow AI Control Tower (agent/model/MCP inventory + governance) · Microsoft/Nuance (ambient agent). Add to Task-D inputs (owed).

## Stop / authority
`analysis_nonbinding` (`GRD-036`); propose-only; pre-spine; **map-depth, NOT build-ready, NOT a new domain.** Fulfills the already-named Agent Runtime/Control-Plane Doctrine (AI-substrate work) — assembles scattered parts, does not re-derive. Sibling to the Platform + Accountability captures; the §B axis runtime layer. Wiring owed (catalog + read-graph + FWREG). **Next: the fresh Opus agent populates depth + Task-D pressures it; do NOT build the runtime pre-spine.** Standing flag: git identity set repo-local (Nick Crawford / ncrawf).
