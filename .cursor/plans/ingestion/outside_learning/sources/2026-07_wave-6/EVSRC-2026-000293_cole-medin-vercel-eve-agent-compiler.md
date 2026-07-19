# EVSRC-2026-000293 — TK

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed · covered · semantic_fidelity=restored`** (2nd-reader signed 2026-07-19; keeper restored)
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-6 scaffold (`EVSRC-2026-000293_cole-medin-vercel-eve-agent-compiler.md`); firm slug at processing (id = highest EVSRC + 1). Row in `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000293`  ·  filename: `EVSRC-2026-000293_cole-medin-vercel-eve-agent-compiler.md` (firm-slug SUGGESTION: `EVSRC-2026-000293_cole-medin-vercel-eve-agent-folder-compiler.md` — NOT renamed per run hard-rule)
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=m8VC2SV2igM`  ·  source_title: `This Completely Changes the Way We Build Production AI Agents (Vercel Eve)`
- channel_or_org: `Cole Medin`  ·  speaker: `Cole Medin`  ·  published_at: `2026-07-15`
- captured_at: `2026-07-18`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot` (NOTE: only Knox Review 001 was pasted into §1; no verbatim timestamped transcript captured → anchors reference Knox read, no-ts)
- content_type: `sponsored technical demonstration / open-source agent-framework walkthrough (declarative agent packaging + compile-and-deploy)`  ·  source_reliability_context: `practitioner (developer educator, Vercel-partnered demo) — authoritative for visible framework shape + claimed workflow; NOT independent proof of reliability/security/portability/regulated-data readiness (`inferred`; no screenshot supplied)`  ·  topic_tags_light: `[Vercel_Eve, filesystem_first_agents, agent_as_folder, declarative_agent_definition, compiled_agent_manifest, agent_packaging, production_agent_runtime, skills, tools, subagents, channels, schedules, MCP, sandbox, durable_sessions, checkpointing, HITL, eval_deploy_gate, agent_scaffolding, coding_agent_plugin, deployment_automation, Slack_agent, runtime_portability, Build_OS, Agent_Runtime, Platform_Loop]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Cole Medin` · role_in_source: `presenter / technical educator / demo builder` · affiliation_at_publication: `independent developer educator (Vercel-partnered for this video)` · speaker_type: `educator (open-source agent-framework practitioner)` · authority_context: `strong for the demonstrated workflow, Eve folder conventions, intended DX, and the instructions/tools/skills/channels/subagents/schedules/evals distinction + claimed compile-and-deploy; weak for scale reliability, session-durability under distributed failure, adversarial/regulated-workload sandbox sufficiency, approval-to-identity binding, eval-gate efficacy, healthcare security/residency/BCP, or Eve-as-standard` · identity_confidence: `inferred` (no screenshot; taken from Knox Review 001 metadata)
  - *(add a bullet per additional speaker)*
- publisher / channel: `Cole Medin (YouTube)`  ·  interviewer / moderator / host: `n/a (solo demo)`
- event_context: `sponsored technical demo produced "in partnership with Vercel"; positive framework walkthrough of a sample Eve data-analysis agent scaffolded/run/tested/deployed via Claude Code + Vercel plugin + MCP`  ·  perspective / conflict notes: `commercial vendor partnership → import the ARCHITECTURE pattern more heavily than the production-readiness claim; the demo does NOT stress Eve against partial failure, tool replay, approval race, credential compromise, dependency drift, tenant isolation, PHI, rollback, vendor outage, or migration away from Vercel (Knox §2)`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

## Review 001 — Knox / ChatGPT strategic read

**Layer:** `captured_interpretation_nonbinding`
**Purpose:** strategic source-local interpretation

### 1. Rough metadata

`source_platform: YouTube`
`source_url: https://www.youtube.com/watch?v=m8VC2SV2igM`
`source_title: This Completely Changes the Way We Build Production AI Agents (Vercel Eve)`
`channel_or_org: Cole Medin`
`speaker: Cole Medin`
`published_at: 2026-07-15`
`captured_at: 2026-07-18`
`capture_method: YouTube screenshot + full transcript paste`
`content_type: sponsored technical demonstration / open-source agent-framework walkthrough / declarative agent packaging and deployment`
`product_or_framework: Vercel Eve`
`source_reliability_context: developer educator demonstrating a Vercel open-source framework in partnership with Vercel; useful for visible framework shape and claimed workflow, but not independent proof of production reliability, security, portability, regulated-data readiness, or operational maturity`
`topic_tags_light: [Vercel_Eve, filesystem_first_agents, agent_as_folder, declarative_agent_definition, compiled_agent_manifest, agent_packaging, production_agent_runtime, skills, tools, subagents, channels, schedules, MCP, sandbox, durable_sessions, checkpointing, HITL, eval_deploy_gate, agent_scaffolding, coding_agent_plugin, deployment_automation, Slack_agent, runtime_portability, Build_OS, Agent_Runtime, Platform_Loop]`

---

### 2. People / authority context

**Cole Medin**

`role_in_source: presenter / technical educator / demo builder`
`speaker_type: developer educator / open-source agent-framework practitioner`
`relationship_to_subject: demonstrates a sample Eve data-analysis agent; uses Claude Code plus Vercel’s plugin and MCP integration to scaffold, run, test, deploy, and operate it`
`commercial_context: explicitly states that the video was produced in partnership with Vercel`

His authority is strongest for:

* the workflow visible in the demonstration;
* the folder conventions exposed by Eve;
* the intended developer experience;
* the distinction among instructions, tools, skills, channels, subagents, schedules, and evals;
* and the claimed compile-and-deploy workflow.

His authority is weaker for:

* whether Eve is reliable at thousands or millions of concurrent users;
* whether session durability is complete under real distributed failure;
* whether the sandbox is sufficient for adversarial or regulated workloads;
* whether human approval is strongly bound to actor identity and action version;
* whether eval gates prevent harmful regressions;
* whether hosted deployment satisfies healthcare security, residency, or business-continuity requirements;
* or whether Eve will become an industry standard.

The source is also a **positive sponsored demo**. It does not attempt to stress Eve against:

* partial failure;
* tool replay;
* approval race conditions;
* credential compromise;
* dependency drift;
* tenant isolation;
* PHI;
* rollback;
* vendor outage;
* or migration away from Vercel.

Import the architecture pattern more heavily than the production-readiness claim.

---

### 3. Suggested processing

`priority: 4.5/5`
`depth: full_semantic, strongly deduplicated against existing Agent Runtime and EVSRC-274`
`EVRUN needed?: yes`
`spine_candidate?: supporting Agent Runtime / Build-OS / Platform evidence; not standalone constitutional doctrine`

**Promotion posture**

`Agent-Runtime sharpening | declarative packaging | compiled-runtime manifest | Build-OS authoring experience | Platform release artifact | provider-portability pressure | product-capability boundary | supply-chain and credential governance`

### Closest siblings

* **EVSRC-2026-000274 — Cole Medin / Archon generalization**

  * queue and bounded work;
  * worker profiles;
  * staged artifacts;
  * human approval;
  * cost-aware execution;
  * durable workflow state outside agent conversation;
  * the harness as the reusable factory.

* **EVSRC-2026-000272 — agent-session tracing**

  * turns;
  * model metadata;
  * tool calls;
  * subagent lineage;
  * token use;
  * cancellation traces;
  * and the distinction between observability and governance.

* **Rippling flat-agent / eval-driven source**

  * avoid ceremonial multi-agent organizational decomposition;
  * one agent can operate broadly when tools and verification are strong.

* **ToyotaGPT and LangSmith Fleet sources**

  * configuration-driven agent production;
  * centralized platform machinery;
  * no-code or low-code authoring;
  * deployment and operational lifecycle.

* **Open Knowledge Format source**

  * simple filesystem conventions;
  * machine-readable front matter;
  * index and change log;
  * deterministic discovery replacing unconstrained search.

* **Current OMNI Agent Runtime & Harness capture**

  * agent identity;
  * runtime profile;
  * context;
  * skills;
  * tools;
  * delegation;
  * credentials;
  * authority;
  * trace;
  * budgets;
  * release;
  * and kill-switches.

### What is genuinely additive

Most constituent primitives already exist in OMNI.

The strongest incremental contributions are:

1. **A developer-legible agent source package**

   * one folder;
   * obvious conventions;
   * inspectable files;
   * easy version control;
   * generated or edited by humans and coding agents.

2. **A compilation step**

   * discover components;
   * resolve relationships;
   * produce one runtime manifest;
   * validate before execution;
   * and separate authoring convenience from runtime representation.

3. **A unified packaging grammar**

   * instructions;
   * model configuration;
   * skills;
   * typed tools;
   * subagents;
   * channels;
   * connections;
   * schedules;
   * sandbox;
   * and evals.

4. **Agent infrastructure as a platform concern**

   * durable sessions;
   * hosting;
   * scale;
   * sandboxing;
   * approvals;
   * deployment;
   * and recovery.

5. **Coding agents as agent-build compilers**

   * the operator states intent;
   * a coding agent scaffolds the package;
   * the framework compiles it;
   * and the platform deploys it.

---

## 4. Strategic read

### Classification

This is a **high-value implementation and packaging source with low foundational ontology novelty**.

The visible message is:

> An agent can be represented as one folder containing mostly Markdown and small TypeScript files.

That is useful.

It is not the deepest keeper.

The deeper message is:

> **A production agent can be authored declaratively, compiled into an explicit runtime artifact, validated, released, and operated through a platform rather than hand-wired as an opaque application.**

That is directly relevant to OMNI.

The source points toward a cleaner division among:

* human- and agent-editable source;
* resolved runtime definition;
* deployed instance;
* active session;
* individual run;
* and canonical domain state.

---

### Core takeaway

**The keeper is: the agent folder should function like source code, not like the live agent itself. A compiler must resolve the folder into a versioned, inspectable, validated runtime manifest before anything is deployed or authorized.**

A second keeper:

> **Simple authoring is valuable only when compilation makes the hidden composition explicit.**

A third keeper:

> **Production reliability comes from the runtime, release process, and durable state—not from Markdown being easy to edit.**

---

# A. “Agent as folder” is primarily an authoring model

The folder contains recognizable elements:

* `agent.ts`;
* `instructions.md`;
* `tools/`;
* `skills/`;
* `channels/`;
* `connections/`;
* `subagents/`;
* `schedules/`;
* sandbox configuration;
* and evals.

This provides several advantages:

* the agent can be inspected in ordinary development tools;
* components can be version controlled;
* changes can be reviewed through diffs;
* humans and coding agents can modify the same representation;
* reusable procedures can be copied or packaged;
* and the structure is understandable without a proprietary visual builder.

That is excellent for authoring.

It does not mean a folder is sufficient as:

* operational state;
* workflow state;
* authority state;
* session state;
* memory;
* audit ledger;
* queue;
* or clinical record.

**Keeper line:**
**A folder can define an agent; it should not become the database of what the agent did or what the world now believes.**

---

# B. The compilation boundary is the strongest architectural idea

Eve reportedly walks the folder, discovers its components, connects them, and produces one compiled manifest.

This matters because authoring conventions often hide relationships.

For example:

* a tool exists because a file sits in `tools/`;
* a skill becomes available because it sits in `skills/`;
* a channel activates because a connector file exists;
* a subagent becomes callable because it is nested under the correct directory;
* a schedule creates autonomous work because a schedule file is present.

The compiler should turn those implicit relationships into an explicit artifact.

A production compiled manifest should be able to answer:

* Which model route is used?
* Which instruction version is active?
* Which skills are available?
* Which tools are callable?
* Which credentials may be requested?
* Which channels can receive or send messages?
* Which subagents can be delegated to?
* Which schedules may initiate runs?
* Which sandbox applies?
* Which evals were required?
* What authority ceiling applies?
* What budgets apply?
* Which runtime version will execute it?
* Which operator and environment may deploy it?

**Keeper line:**
**Compilation should convert filesystem implication into an explicit operational contract.**

---

# C. OMNI should preserve three distinct artifacts

The source can tempt a team to speak about “the agent” as one thing.

OMNI should distinguish at least:

### 1. Agent source package

The editable authoring representation:

* Markdown;
* code;
* configuration;
* skill files;
* tool definitions;
* eval definitions;
* and channel adapters.

### 2. Compiled runtime manifest

The fully resolved, normalized, immutable candidate:

* exact versions;
* dependency graph;
* grants;
* policies;
* routes;
* budgets;
* signatures;
* hashes;
* and validation requirements.

### 3. Deployed runtime profile

The manifest as admitted into a particular:

* environment;
* operator;
* tenant;
* region;
* release channel;
* and infrastructure topology.

A fourth distinction remains necessary:

### 4. Active session or run

The actual runtime execution with:

* actor;
* purpose;
* input context;
* tool calls;
* approvals;
* outputs;
* side effects;
* and trace.

**Keeper line:**
**Source package, compiled manifest, deployment, and run are different records with different lifecycles.**

---

# D. Compilation is not merely import resolution

The source presents compilation mainly as automatic wiring.

For OMNI, compilation should do more.

A serious agent compiler can perform static checks such as:

* missing owner;
* missing authority ceiling;
* undeclared tool;
* incompatible tool and environment;
* unsafe channel;
* absent eval requirement;
* credential request outside policy;
* schedule without principal;
* subagent with broader authority than parent;
* PHI-capable tool in a non-PHI environment;
* unbounded cost or fan-out;
* write-capable tool without approval or policy;
* unsupported model route;
* missing fallback;
* missing kill switch;
* conflicting instructions;
* and orphaned components.

**Keeper line:**
**The compiler should reject unsafe composition before the runtime has a chance to improvise around it.**

---

# E. The compiled manifest can become a high-value review surface

Folder diffs may be easy to read but difficult to reason about globally.

A small source change can produce a large operational change.

Examples:

* adding one tool may introduce a write capability;
* adding a schedule may create unattended execution;
* changing a skill description may alter selection behavior;
* changing a connection may expose new data;
* changing a model may affect cost and performance;
* changing a channel may expand the audience;
* changing a subagent may increase delegation depth.

A manifest diff should show the **effective runtime change**, not merely the textual file change.

Possible review:

`source diff`
`→ compiled-manifest diff`
`→ authority diff`
`→ capability diff`
`→ data-exposure diff`
`→ cost and latency diff`
`→ required eval profile`
`→ release decision`

**Keeper line:**
**Review what the change causes the agent to become, not only which files changed.**

---

# F. Convention-based discovery improves usability and increases hidden coupling

Automatic discovery removes repetitive imports and wiring.

That is good developer experience.

It also means a file can acquire operational meaning merely by appearing in a directory.

Risks include:

* unintended component inclusion;
* stale files remaining active;
* name collisions;
* order-dependent behavior;
* environment-specific discovery;
* hidden defaults;
* and compiler-version drift.

The compiled artifact must therefore preserve:

* every discovered component;
* source path;
* component identity;
* selection rule;
* normalized configuration;
* and compiler version.

**Keeper line:**
**Magic during authoring must become evidence during compilation.**

---

# G. The folder schema is not the ontology

Eve uses directories such as:

* `skills`;
* `tools`;
* `channels`;
* and `subagents`.

Those are useful package categories.

OMNI should not conclude that they are sufficient semantic categories for governed care or business operation.

For example:

* a file under `tools/` may wrap a read, write, external communication, financial transaction, or clinical side effect;
* a file under `skills/` may contain harmless formatting guidance or an unsafe pseudo-clinical procedure;
* a channel may be internal Slack, patient SMS, email, API, or an external agent interface;
* a subagent may be an analysis worker or a system capable of causing real-world action.

**Keeper line:**
**Directory placement explains packaging; capability contracts explain meaning and consequence.**

---

# H. Skills remain procedural guidance, not authority

The demo uses a revenue-analysis skill to shape answers.

That is a reasonable use of a skill:

* when to load it;
* what method to apply;
* how to structure the response;
* and which rules to follow.

In OMNI, placing a file under `skills/` cannot create a live healthcare capability.

A skill must not independently authorize:

* prescription;
* patient communication;
* clinical interpretation;
* refund;
* scheduling mutation;
* record correction;
* or external disclosure.

The runtime must separately determine whether the current actor, purpose, workflow, and authority permit the capability.

**Keeper line:**
**Skills teach the agent how; the governed capability layer determines whether it may.**

---

# I. Tool discovery must not become tool authorization

The source emphasizes how easy it is to drop a TypeScript function into the tools directory and have it become available after compilation.

That convenience is useful.

For OMNI it is also dangerous.

A visible tool should still require:

* registered tool identity;
* version;
* owner;
* action class;
* data classes exposed;
* purpose;
* actor eligibility;
* tenant and patient scope;
* credential policy;
* rate and cost limits;
* idempotency;
* timeout and retry policy;
* evidence returned;
* side-effect semantics;
* and kill switch.

The compiler can include the tool in the manifest.

The runtime must authorize each call.

**Keeper line:**
**Compilation establishes availability; runtime policy establishes admissibility.**

---

# J. Typed tool inputs improve reliability but do not prove correctness

The demo highlights Zod schemas for tool inputs.

Typed input is valuable.

It can prevent:

* missing required fields;
* malformed argument shapes;
* wrong primitive types;
* and some classes of model-generated call error.

It cannot prove:

* the correct tool was selected;
* the requested action is authorized;
* the referenced patient or tenant is correct;
* the SQL query is safe;
* the result is truthful;
* or the side effect is appropriate.

**Keeper line:**
**Schema validity proves shape, not intent, authority, or truth.**

---

# K. Channels are policy boundaries, not presentation adapters

Eve packages channels such as Slack, Discord, HTTP, and custom UI.

A channel changes more than interface.

It changes:

* actor authentication;
* audience;
* thread and session semantics;
* delivery guarantees;
* privacy;
* retention;
* impersonation risk;
* response timing;
* message visibility;
* interaction controls;
* and available approval mechanisms.

The same agent response may be appropriate in an internal staff channel and inappropriate in:

* patient SMS;
* public chat;
* an external agent API;
* or a shared operational room.

**Keeper line:**
**A channel is an identity, visibility, custody, and delivery boundary—not merely another way to render text.**

---

# L. Thread memory is not longitudinal memory

The source demonstrates that the Slack agent remembers what the user said earlier in the thread.

That is useful conversational continuity.

It should not be confused with:

* durable patient memory;
* operator memory;
* institutional knowledge;
* adopted clinical truth;
* or canonical workflow state.

Thread content can be:

* incomplete;
* ambiguous;
* deleted;
* inaccessible;
* duplicated;
* or visible to the wrong participants.

**Keeper line:**
**A conversation can preserve interaction continuity without becoming the system’s canonical memory.**

---

# M. Durable sessions are valuable, but checkpointing requires semantics

The source claims that sessions survive crashes and redeployments because turns and tool calls are stored.

That is directionally important.

A durable workflow needs to know more than where execution stopped.

It needs to know:

* whether the last tool call completed;
* whether the side effect occurred;
* whether the response was delivered;
* whether approval is still valid;
* whether inputs changed;
* whether a retry is safe;
* whether the model or tool version changed;
* and whether the session should resume, compensate, or stop.

**Keeper line:**
**Durability is not replaying the transcript; it is recovering the workflow without duplicating or losing real-world effects.**

---

# N. Crash recovery requires idempotency and side-effect receipts

Suppose the agent:

1. calls a tool;
2. the external system performs the action;
3. the runtime crashes before recording success;
4. the session resumes.

The runtime must not blindly repeat the call.

A durable action needs:

* idempotency key;
* attempt identity;
* external receipt;
* status reconciliation;
* compensation path;
* and human escalation where state is uncertain.

This matters for:

* messages;
* database writes;
* appointments;
* payments;
* orders;
* prescriptions;
* and fulfillment.

**Keeper line:**
**Checkpointing protects computation; idempotency and reconciliation protect the world.**

---

# O. Schedules create autonomous principals

The source presents schedules as another optional folder allowing the agent to run autonomously.

That is not a small packaging feature.

A scheduled agent needs:

* principal or sponsoring authority;
* approved purpose;
* recurrence;
* timezone;
* eligibility window;
* input selection rule;
* scope;
* cost budget;
* expiration;
* concurrency policy;
* backpressure;
* missed-run behavior;
* and stop conditions.

A schedule should not simply mean:

> Run this agent every morning.

It should mean:

> This authorized operational objective may initiate these bounded runs under these conditions.

**Keeper line:**
**A schedule is delegated standing authority, not merely a clock expression.**

---

# P. Subagents need narrower authority and structured returns

The sample investigator subagent is used for deeper questions.

This is a reasonable decomposition:

* the parent recognizes a larger investigation;
* the worker receives a bounded task;
* the parent receives a result.

The compiled manifest should show:

* which parent may invoke the child;
* delegated objective schema;
* context allowed;
* tools allowed;
* budget;
* deadline;
* output schema;
* and termination policy.

The child should not inherit every:

* secret;
* tool;
* channel;
* memory;
* or authority

available to the parent.

**Keeper line:**
**Nested folders must not imply inherited power.**

---

# Q. The sandbox is a containment mechanism, not a complete trust model

The source presents isolated code execution as a major production-reliability feature.

It is.

A sandbox can constrain:

* filesystem access;
* process execution;
* network access;
* resource use;
* and persistence.

It does not automatically secure:

* credentials passed into it;
* malicious tool outputs;
* data exfiltration through allowed networks;
* dependency installation;
* poisoned packages;
* model-generated destructive logic;
* or unsafe external actions.

**Keeper line:**
**The sandbox contains execution; policy still governs what execution may touch and cause.**

---

# R. Human approval is necessary but easy to fake architecturally

The Slack demo pauses a large SQL operation and presents Allow or Deny buttons.

That is a useful interaction pattern.

A production approval must be bound to:

* authenticated actor;
* authority;
* exact proposed action;
* exact query or parameters;
* target resource;
* estimated scope;
* consequence;
* time window;
* and action version.

The approval should become invalid if the action changes after review.

The system should record:

* what the approver saw;
* what they approved;
* what actually ran;
* and what occurred.

**Keeper line:**
**A human button is not an approval contract unless it binds identity, proposal, consequence, and execution.**

---

# S. Human approval should not become universal safety theater

The source suggests a balance:

* give the agent more power;
* require approval for risky actions.

That can work.

But approval is not always the correct control.

Some actions should be:

* prohibited;
* structurally constrained;
* split into smaller capabilities;
* simulated first;
* dual-controlled;
* or unavailable in the channel.

A human may approve without:

* understanding the query;
* seeing the affected records;
* noticing a hidden parameter;
* or having legitimate authority.

**Keeper line:**
**Use human review where judgment is required; use system boundaries where the action should never be possible.**

---

# T. Eval-as-deploy-gate is correct in direction

Treating evals as deploy gates is one of the source’s strongest operational ideas.

An agent change should not ship merely because:

* the code compiles;
* the agent responds;
* or a smoke test passes.

The required evidence may include:

* task success;
* tool-selection accuracy;
* factuality;
* refusal behavior;
* permission behavior;
* cost;
* latency;
* concurrency;
* recovery;
* channel behavior;
* subgroup performance;
* and adversarial testing.

**Keeper line:**
**An agent release should carry behavior evidence, not merely build success.**

---

# U. One green eval suite cannot establish universal readiness

The relevant eval set must depend on the effective manifest and deployment target.

Examples:

* adding Slack requires channel and identity tests;
* adding a write tool requires authority and side-effect tests;
* adding a schedule requires unattended-execution tests;
* changing a model requires behavior, cost, and latency regression;
* changing a skill requires selection and instruction-conflict tests;
* adding a subagent requires delegation and lineage tests;
* changing the sandbox requires containment tests.

**Keeper line:**
**The compiled capability diff should select the required validation contract.**

---

# V. Evals are evidence, not production authority

A passing eval can support deployment.

It does not authorize a live action for a particular actor, patient, operator, or context.

Those decisions remain runtime and domain-specific.

Likewise:

* an LLM judge is not a regulator;
* a benchmark is not a care standard;
* a smoke test is not a security review;
* and a deploy gate is not a clinical-authority gate.

**Keeper line:**
**Release evidence determines whether a capability may enter service; runtime authority determines what it may do now.**

---

# W. Deployment convenience should not conceal the platform identity graph

The source shows deployment through a coding-agent instruction:

> Deploy this Eve agent.

That is excellent ergonomics.

The platform still needs durable relationships among:

* source revision;
* compiled manifest;
* eval run;
* release candidate;
* release;
* deployment;
* environment;
* operator;
* runtime version;
* model version;
* tool versions;
* and active sessions.

Without that graph, the organization cannot answer:

* Which release produced this output?
* Which manifest granted this tool?
* Which model and instruction versions were active?
* Which operators were exposed?
* Can this version be rolled back?
* Which sessions need remediation?

**Keeper line:**
**One-command deployment should simplify the operator experience, not erase release provenance.**

---

# X. A successful smoke test is not a safe release

The demo reports that the deployment process runs a smoke test.

A smoke test may establish:

* the service starts;
* a simple request succeeds;
* credentials resolve;
* and the endpoint responds.

It may not test:

* concurrency;
* tenant isolation;
* authorization;
* recovery;
* tool failures;
* malformed inputs;
* adversarial behavior;
* PHI handling;
* or rollback.

**Keeper line:**
**Smoke tests prove basic life; validation proves bounded fitness.**

---

# Y. “Scales to millions” is infrastructure capacity, not operational trust

The source connects Vercel hosting with the ability to serve large numbers of users.

Even if the infrastructure can elastically serve millions of requests, that does not establish:

* correct behavior;
* fairness;
* state isolation;
* cost stability;
* supportability;
* or safe failure.

Scale can increase:

* blast radius;
* duplicate side effects;
* approval burden;
* data exposure;
* and incident complexity.

**Keeper line:**
**Infrastructure scale multiplies both useful throughput and architectural mistakes.**

---

# Z. Hosted runtime does not automatically satisfy OMNI deployment requirements

A healthcare or care-adjacent agent may require:

* contractual data protections;
* regional placement;
* retention control;
* audit export;
* encryption controls;
* operator isolation;
* incident obligations;
* business continuity;
* subprocessor governance;
* and migration capability.

The source does not establish those properties.

OMNI should treat Eve/Vercel as:

* a candidate implementation;
* a reference architecture;
* or a useful build surface.

Not as automatically admitted care infrastructure.

**Keeper line:**
**Production-ready for a generic agent is not the same as admissible for a governed care capability.**

---

# AA. The coding-agent plugin is a build accelerator and a supply-chain surface

The Vercel plugin reportedly gives Claude Code or Cursor:

* framework instructions;
* skills;
* an MCP connection;
* scaffolding knowledge;
* and deployment capability.

This can dramatically reduce setup cost.

It also gives the plugin influence over:

* files created;
* package versions;
* infrastructure;
* environment variables;
* deployment targets;
* and credentials.

The plugin should therefore have:

* version;
* publisher identity;
* signature or provenance;
* permissions;
* allowed repositories;
* allowed deployment environments;
* change review;
* and revocation.

**Keeper line:**
**A plugin that can scaffold and deploy an agent is part of the software supply chain and the release authority surface.**

---

# AB. Generated scaffolding can scale the wrong assumptions

The source demonstrates creating an agent from a prompt as small as:

> Scaffold a new Eve agent called Hello agent.

That is powerful.

It can also create hundreds of agents carrying the same:

* permissive defaults;
* weak credential handling;
* missing evals;
* broad tools;
* ambiguous ownership;
* absent budgets;
* or vendor-coupled assumptions.

Templates and generators should encode:

* least privilege;
* required owner;
* default trace;
* no ambient credentials;
* explicit authority ceiling;
* safe channel defaults;
* default budgets;
* and deployment restrictions.

**Keeper line:**
**Scaffolding converts defaults into organizational architecture.**

---

# AC. Environment variables are convenient and insufficient as credential doctrine

The demo places an Anthropic API key in environment variables.

That may be acceptable for a local demonstration.

A production system needs:

* secret manager;
* runtime retrieval;
* rotation;
* scope;
* tenant separation;
* non-exportability;
* audit;
* expiration;
* emergency revocation;
* and protection from tool or sandbox exfiltration.

**Keeper line:**
**A credential must be brokered to an admitted capability, not merely present in the agent’s environment.**

---

# AD. The agent package should be provider-neutral above the deployment adapter

The folder model could support portability if the source package expresses:

* purpose;
* capabilities;
* tools;
* skills;
* policies;
* and evals

independently of one provider.

Portability weakens if:

* deployment semantics;
* session durability;
* channels;
* approvals;
* sandbox;
* queues;
* traces;
* and secret management

are all provider-specific.

OMNI should preserve a provider-neutral internal contract and compile it into:

* Vercel;
* another managed runtime;
* self-hosted infrastructure;
* or an operator-specific environment.

**Keeper line:**
**Compile toward providers; do not let the provider become the only definition of the agent.**

---

# AE. Portability requires state export, not only source portability

An agent folder may be easy to move.

The operational system may still be captive if the provider owns:

* durable sessions;
* approvals;
* traces;
* schedules;
* queue state;
* secrets;
* deployment metadata;
* and recovery checkpoints.

Migration requires exportable:

* manifests;
* session records;
* run traces;
* approval records;
* schedule definitions;
* deployment history;
* and canonical domain links.

**Keeper line:**
**Portable source without portable operational state is partial portability.**

---

# AF. Knowledge remains separate from agent packaging

The source correctly distinguishes the agent folder from a large Markdown knowledge base.

The folder may package:

* instructions;
* procedural skills;
* and configuration.

Large, evolving knowledge requires:

* durable source records;
* authority;
* metadata;
* retrieval;
* freshness;
* supersession;
* access control;
* and provenance.

OMNI should not pour its:

* clinical memory;
* operator policy;
* evidence corpus;
* or longitudinal state

into the agent folder.

**Keeper line:**
**Package the agent’s operating contract; retrieve governed knowledge from its owning systems.**

---

# AG. File-system standards are useful as interchange contracts

The source compares Eve to standards such as:

* MCP;
* A2A;
* and OKF.

Whether Eve itself becomes a standard is less important than the pressure toward portable conventions.

A useful agent-package standard might define:

* component types;
* metadata;
* dependency declaration;
* versioning;
* tool schemas;
* skill manifests;
* channel adapters;
* schedule semantics;
* eval declarations;
* compilation output;
* and compatibility.

OMNI should watch and possibly support emerging standards.

It should not let an external packaging convention determine:

* care ontology;
* authority;
* operator policy;
* or canonical domain boundaries.

**Keeper line:**
**Adopt interchange standards at the membrane; retain OMNI’s governing semantics behind it.**

---

# AH. The manifest is a natural attestation target

Once compilation creates a normalized manifest, OMNI can:

* hash it;
* sign it;
* attach eval evidence;
* approve it;
* package it into a release;
* and prove which deployed instance used it.

Potential artifact chain:

`agent source revision`
`→ compiler version`
`→ compiled manifest hash`
`→ validation bundle`
`→ approved release candidate`
`→ release`
`→ deployment`
`→ active runtime instance`
`→ run trace`

**Keeper line:**
**The compiled manifest can become the agent’s reproducible release identity.**

---

# AI. Runtime overrides must be visible

A platform may alter the manifest at deployment through:

* environment variables;
* provider defaults;
* region-specific settings;
* model routing;
* secret injection;
* feature flags;
* or operator policy.

Those effective overrides must be captured.

Otherwise the source package and compiled manifest will not explain actual behavior.

**Keeper line:**
**The runtime truth is the compiled manifest plus every admitted deployment override.**

---

# AJ. Agent identity should survive model and framework changes

An OMNI agent should not be identified as:

* “the Claude agent”;
* “the Eve agent”;
* or “the Slack bot.”

Its stable identity should express:

* owned purpose;
* responsible team;
* intended workflows;
* eligible principals;
* and authority ceiling.

The underlying:

* model;
* framework;
* channel;
* tools;
* and runtime

may change through versioned releases.

**Keeper line:**
**The agent’s identity is its governed responsibility, not its current model or hosting framework.**

---

# AK. A single folder improves comprehensibility but can become a false boundary

One folder creates a tidy package.

Real production behavior may depend on:

* external tools;
* model providers;
* knowledge stores;
* secret brokers;
* databases;
* queues;
* channel platforms;
* and policy services.

The agent is therefore not operationally self-contained.

The manifest should represent external dependencies and their health.

**Keeper line:**
**The folder defines the agent package; the dependency graph defines the operating system it relies on.**

---

# AL. The framework does not eliminate application architecture

The demo is intentionally simple:

* a data-analysis agent;
* warehouse tools;
* a revenue skill;
* a Slack channel;
* an investigator subagent;
* and approval for a risky query.

A real OMNI capability still needs:

* domain contracts;
* canonical records;
* workflow lifecycle;
* actor and relationship context;
* policy resolution;
* consequence management;
* and outcome linkage.

Eve may package and operate the agent.

It does not replace OMNI’s governed care-and-business substrate.

**Keeper line:**
**An agent framework runs intelligent workers; it does not define the institution they work inside.**

---

## Where it lands

### Massive

**Agent Runtime & Harness**

* agent source package;
* compilation;
* runtime manifest;
* skill and tool projection;
* subagent contract;
* channel contract;
* schedule authority;
* sandbox;
* session durability;
* budgets;
* trace;
* fallback;
* kill switch.

**Platform Loop**

* compiler version;
* manifest diff;
* validation contract;
* release candidate;
* deployment;
* rollout;
* rollback;
* runtime health;
* effective configuration;
* blast-radius analysis.

### Major

**OMNI Build-OS**

* agent scaffolding;
* standard package templates;
* coding-agent build skills;
* safe defaults;
* manifest review;
* source-to-release proof;
* plugin and dependency governance;
* generated-change verification.

**Security / Identity / RBAC / Federation**

* credential brokering;
* channel identity;
* non-human identity;
* tool authorization;
* schedule principal;
* environment and operator scope;
* tenant isolation;
* provider admission.

**Observability and Accountability**

* run trace;
* approval lineage;
* side-effect receipts;
* session recovery;
* exposure;
* failure;
* incident scope;
* remediation.

### Medium-major

**Knowledge Reservoirs**

* procedural skill versus durable knowledge;
* source references;
* projection at runtime;
* freshness and authority;
* package references rather than copied truth.

**CNS and domain orchestration**

* runtime invocation;
* candidate handling;
* bounded delegation;
* human attention;
* domain-owned commit;
* no framework-level sovereignty.

### Minor as direct doctrine

**Care ontology**

The source does not contribute new clinical or care primitives.

Its runtime and release ideas can support care capabilities, but care remains governed by OMNI’s separate:

* evidence;
* resolution;
* commitment;
* fulfillment;
* outcome;
* and authority architecture.

---

## Doctrine / primitive pressure

Candidate concepts requiring deduplication:

`agent_source_package`
`agent_package_schema`
`agent_compiler`
`agent_compiler_version`
`compiled_agent_manifest`
`effective_runtime_manifest`
`manifest_hash`
`manifest_diff`
`capability_diff`
`authority_diff`
`data_exposure_diff`
`agent_release_attestation`
`agent_source_to_runtime_lineage`
`deployment_override_record`
`channel_capability_profile`
`schedule_authority_profile`
`tool_discovery_record`
`skill_discovery_record`
`compile_time_policy_check`
`agent_package_lint`
`runtime_dependency_graph`
`session_checkpoint`
`side_effect_receipt`
`recovery_reconciliation_state`
`plugin_supply_chain_record`
`agent_scaffold_template`
`portable_runtime_export`

Most should extend current OMNI objects rather than become independent root primitives:

* `agent_definition`;
* `agent_runtime_profile`;
* capability envelope;
* tool registry;
* skill catalog;
* release candidate;
* release;
* deployment;
* model version of record;
* trace;
* approval evidence;
* and platform capability graph.

The most likely genuinely useful additions are:

1. **`agent_source_package`**
2. **`compiled_agent_manifest`**
3. **source → manifest → release → deployment → run lineage**
4. **effective-manifest diffing**
5. **compile-time policy validation**

---

## Keeper doctrine

1. **The folder is the agent’s editable source package, not the live agent.**

2. **Compilation must convert implicit filesystem composition into an explicit runtime contract.**

3. **Source package, compiled manifest, deployment, session, and run are distinct records.**

4. **Simple authoring is safe only when hidden composition becomes reviewable before release.**

5. **The compiler should reject unsafe combinations before runtime improvisation begins.**

6. **Review effective capability and authority changes, not merely textual file diffs.**

7. **Filesystem convention is packaging, not ontology.**

8. **Skills teach procedures; capability contracts authorize live responsibility.**

9. **Tool availability is not tool admissibility.**

10. **Typed inputs prove shape, not authority, intent, or correctness.**

11. **Channels are identity, visibility, custody, and delivery boundaries.**

12. **Thread memory is conversational continuity, not canonical institutional memory.**

13. **Durable execution requires semantic recovery, not transcript replay.**

14. **Checkpointing protects computation; idempotency and reconciliation protect side effects.**

15. **A schedule is standing delegated authority.**

16. **Subagents inherit narrower context and authority, never broader authority.**

17. **A sandbox contains code execution but does not govern external consequences.**

18. **Human approval must bind actor, authority, proposal, version, and executed effect.**

19. **Human review should not substitute for structural prohibition.**

20. **Agent releases require behavioral evidence, not merely successful builds.**

21. **The effective manifest should determine the required validation contract.**

22. **Evals support release; they do not authorize live domain action.**

23. **One-command deployment must retain complete release provenance.**

24. **Smoke tests establish basic life, not bounded fitness.**

25. **Infrastructure scale multiplies both throughput and blast radius.**

26. **Generic production readiness does not establish regulated-care admissibility.**

27. **Build plugins are software-supply-chain actors.**

28. **Scaffolding turns defaults into repeated architecture.**

29. **Credentials should be brokered to capabilities, not ambiently inherited by agents.**

30. **Compile toward infrastructure providers; do not let one provider define the agent.**

31. **Portable source without portable operational state is incomplete portability.**

32. **Package procedural behavior; retrieve canonical knowledge from owning systems.**

33. **Use external standards at the membrane without outsourcing OMNI’s governing meaning.**

34. **The compiled manifest is a natural release identity and attestation target.**

35. **Runtime overrides are part of runtime truth.**

36. **Agent identity should survive model, framework, and channel replacement.**

37. **The package is compact; the operating dependency graph is not.**

38. **An agent framework operates workers but does not replace the governed institution.**

---

## What not to import blindly

### Do not say “the agent is a folder” without qualification

The source package can be a folder.

The live agent is a composition of:

* runtime;
* infrastructure;
* policy;
* credentials;
* state;
* sessions;
* tools;
* external systems;
* and domain authority.

### Do not treat automatic discovery as harmless magic

Every discovered component changes the effective runtime.

### Do not let a skill file create a care capability

Markdown placement is not authority.

### Do not let every file in `tools/` become callable in every context

Compile-time inclusion and per-call authorization remain separate.

### Do not infer safe SQL from typed inputs

A structurally valid query can still be destructive, expensive, unauthorized, or privacy-violating.

### Do not treat Slack approval as sufficient for every risky action

The approver may lack authority, context, or a complete view of the proposed effect.

### Do not interpret human-in-the-loop as a universal safety strategy

Some actions need prohibition, separation of duties, dual control, or narrower capability design.

### Do not equate persisted turns with durable workflow recovery

A resumed model can duplicate a side effect unless the external state is reconciled.

### Do not let schedules create ownerless autonomous behavior

Every schedule needs a principal, purpose, scope, expiry, and budget.

### Do not allow subagents to inherit the full parent environment by default

Context, tools, credentials, and authority should narrow.

### Do not treat sandboxing as complete security

External network, credentials, packages, and tools remain attack surfaces.

### Do not let one passing eval suite authorize every deployment target

Environment, operator, channel, data class, and consequence change the required evidence.

### Do not treat LLM-as-judge results as compliance proof

Machine evaluation is useful evidence, not authoritative certification.

### Do not assume elastic hosting proves reliable application behavior

Serving capacity and behavioral correctness are separate.

### Do not infer healthcare readiness from generic production deployment

The source demonstrates no healthcare compliance or regulated operational proof.

### Do not copy local API-key handling into OMNI production

Use scoped credential brokerage and rotation.

### Do not let a coding-agent deployment plugin possess unrestricted production authority

Scaffold, test, release, and deploy should have distinct gates.

### Do not allow generated scaffolds to omit ownership and authority

“Hello agent” is adequate for a demo, not for institutional deployment.

### Do not make Vercel-specific runtime state the only durable state

Provider portability requires exportable manifests, traces, schedules, approvals, and sessions.

### Do not treat agent packages as knowledge bases

Operational instructions and canonical knowledge have different lifecycles and authorities.

### Do not adopt Eve as an OMNI standard merely because the structure is elegant

Evaluate:

* portability;
* security;
* lifecycle;
* failure semantics;
* observability;
* extensibility;
* vendor coupling;
* and fit with OMNI’s runtime contracts.

### Do not build a proprietary equivalent prematurely

The correct response may be:

* learn from Eve;
* map its package grammar;
* test it as an implementation;
* preserve OMNI’s internal manifest;
* and compile or adapt toward Eve where useful.

Not:

* recreate every framework feature before product evidence demands it.

---

## Do-not-miss lesson

**Eve’s strongest proposition is not that Markdown has become production infrastructure. It is that production-agent construction can acquire a compiler architecture: humans and coding agents edit a simple declarative package; compilation resolves the package into an explicit manifest; validation proves bounded behavior; release admits a version; and the runtime operates durable sessions under governed infrastructure.**

OMNI should embrace that shape while making the missing boundaries explicit:

`agent source package`
`→ compile`
`→ resolved runtime manifest`
`→ policy and authority checks`
`→ validation evidence`
`→ release candidate`
`→ deployment`
`→ session / run`
`→ domain candidate or action`
`→ domain-owned commitment`
`→ effect and proof`

The source simplifies almost everything before the final two transitions.

OMNI’s differentiating responsibility begins precisely there:

* what the agent is allowed to propose;
* what it is allowed to execute;
* which actor owns the decision;
* what becomes canonical;
* what actually occurred;
* and who remains accountable afterward.

---

## Lightweight tiering

| Concept                                          | stale-vs-current OMNI                    |              weight tier | status                                |
| ------------------------------------------------ | ---------------------------------------- | -----------------------: | ------------------------------------- |
| Agent as editable folder/package                 | `PARTIAL / useful sharpening`            | Agent Runtime / Build-OS | promote                               |
| Compiled agent manifest                          | `PARTIAL / strong incremental mechanism` | Agent Runtime / Platform | promote                               |
| Source → manifest → release → deployment lineage | `PARTIAL`                                |            Platform Loop | promote                               |
| Automatic component discovery                    | `implementation pattern`                 |                 Build-OS | retain with checks                    |
| Convention-over-wiring                           | `useful`                                 |     developer experience | retain                                |
| Folder as live operational state                 | `direct conflict`                        |                guardrail | reject                                |
| Skill file as authority                          | `direct conflict`                        |                guardrail | reject                                |
| Tool inclusion = tool permission                 | `direct conflict`                        |                guardrail | reject                                |
| Durable sessions                                 | `AFFIRM`                                 |                  runtime | promote                               |
| Persisted transcript = safe recovery             | `direct conflict`                        |                guardrail | reject                                |
| Sandboxed execution                              | `AFFIRM`                                 |         runtime/security | promote                               |
| Sandbox = complete safety                        | `direct conflict`                        |                guardrail | reject                                |
| Human approval in channel                        | `AFFIRM as interaction pattern`          |             authority UX | sharpen                               |
| Approval button alone = authority proof          | `direct conflict`                        |                guardrail | reject                                |
| Evals as deploy gates                            | `AFFIRM`                                 |             Platform E&V | promote                               |
| Eval pass = runtime authority                    | `direct conflict`                        |                guardrail | reject                                |
| Schedules as autonomous execution                | `PARTIAL`                                |                  runtime | promote with standing-authority model |
| Subagents as nested package components           | `AFFIRM`                                 |                  runtime | promote with narrowed delegation      |
| Coding-agent scaffolding                         | `AFFIRM`                                 |                 Build-OS | promote                               |
| Coding agent can directly deploy prod by default | `unsafe / unresolved`                    |       release governance | reject as default                     |
| Provider-hosted durability                       | `candidate implementation`               |                  runtime | investigate                           |
| Provider-neutral internal manifest               | `AFFIRM / strategic`                     |             architecture | promote                               |
| Source portability alone                         | `insufficient`                           |              portability | sharpen                               |
| Eve as universal standard                        | `unproven`                               |             future-watch | watch                                 |
| Eve as replaceable runtime target                | `plausible`                              |           implementation | investigate                           |
| Markdown knowledge base at massive scale         | `rejected by source and OMNI`            |   knowledge architecture | reject                                |
| One folder replaces domain architecture          | `direct conflict`                        |                guardrail | reject                                |

---

## 5. Hard read

**Verdict:** `full_semantic`, 4.5/5.

This source is more important than an ordinary framework demo because it reveals a likely normalization in agent engineering:

> **Agent authoring is becoming declarative, convention-based, compiler-assisted, and deployable through standard platform machinery.**

That is a real shift.

Today, many agent systems are still assembled through:

* bespoke application code;
* hidden prompts;
* scattered tools;
* manually configured infrastructure;
* and undocumented deployment assumptions.

A package-plus-compiler model can make the agent:

* inspectable;
* versionable;
* reproducible;
* reviewable;
* portable;
* and easier for both humans and coding agents to build.

But the source repeatedly compresses distinctions that OMNI must restore.

A folder is not:

* governance;
* authority;
* durable domain state;
* recovery semantics;
* or a healthcare capability.

A compiled manifest is not:

* a release;
* a deployment;
* a live session;
* or proof of safe behavior.

A passing eval is not:

* permission to act.

A human click is not:

* necessarily legitimate approval.

A durable session is not:

* necessarily safe side-effect recovery.

A sandbox is not:

* protection from every external consequence.

And Vercel deployment is not:

* proof of care-grade infrastructure.

The most valuable path for OMNI is therefore not to copy Eve wholesale or dismiss it as developer tooling.

It is to adopt and pressure-test the architecture:

1. **Define an OMNI agent source-package shape.**
2. **Compile it into OMNI’s provider-neutral `agent_runtime_profile` or a closely related manifest.**
3. **Make effective capabilities, authority, dependencies, budgets, and exposures explicit.**
4. **Use the manifest diff to select validation and release gates.**
5. **Deploy toward replaceable runtimes such as Eve where they satisfy the contract.**
6. **Keep canonical state, care authority, and accountability outside the framework.**

That preserves Eve’s developer simplicity without allowing its packaging grammar or hosting environment to become OMNI’s constitution.

**Strongest OMNI line:**

> **The agent may begin as a folder, but it becomes operational only after compilation makes its capabilities explicit, validation proves its bounded fitness, release admits its version, and OMNI determines what—if anything—it is authorized to change in the world.**


&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-19` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Method note:** formalizes Knox Review 001 (a `full_semantic`, 4.5/5 Agent-Runtime/Build-OS/Platform packaging source), verified against Knox's §1-pasted read. **No verbatim timestamped transcript was captured** for this source — only Knox's strategic read was pasted into the §1 block — so anchors cite Knox's read locus (`[Knox §X]`) rather than transcript timestamps (`no-ts`). `build_status` grounded by run brief + prior grep: repo has (partial) `requireCapability`, audit-actions, disclosure-policy evaluator, intake doc routing, `chart_ai_reviews`+lab observations, patient-case/impl, artifact-pipeline, outbound dispatch; **NO agent runtime / AI-gateway / agent-compiler / skill-registry / model-gateway / sandbox-runtime** exists. So the dominant reality-check is `doctrine=AFFIRM/PARTIAL × build=absent`. PROPOSE-ONLY (`GRD-036`); nothing minted, no contract/thesis edited. The source's compression — "an agent is a folder" — is the exact thing OMNI must *decompress*: authoring convenience ≠ runtime/authority/state/care-capability. This is EVSRC-274's (Archon) sibling deepened into a compiler architecture.

### Cluster table

| # | concept | OMNI meaning | homes | anchor | doctrine × build | weight | status |
|---|---|---|---|---|---|---|---|
| A | **Agent source package (folder = editable authoring model, NOT the live agent)** | The folder (`agent.ts`, `instructions.md`, `tools/`, `skills/`, `channels/`, `subagents/`, `schedules/`, sandbox cfg, evals) is source code — inspectable, version-controlled, diffable, human-and-coding-agent editable — but it is NOT operational/workflow/authority/session state, memory, audit ledger, queue, or clinical record; the folder is a false operational boundary (the real agent depends on runtime, infra, policy, credentials, external systems, domain authority) | Agent Runtime & Harness (`agent_definition`) · Build-OS golden-path | "A folder can define an agent; it should not become the database of what the agent did" [Knox §A, no-ts] | PARTIAL (Agent Runtime map-depth only) × build=absent | spine | promote |
| B | **The compilation boundary (folder → one explicit runtime manifest)** | Eve walks the folder, discovers components, resolves relationships, emits ONE compiled manifest; this is the strongest architectural idea — it converts implicit filesystem implication (a file in `tools/` ⇒ a callable tool) into an explicit operational contract answering: which model route / instruction version / skills / callable tools / requestable credentials / channels / subagents / schedules / sandbox / required evals / authority ceiling / budgets / runtime version / deploying operator+environment | Agent Runtime & Harness · Platform Loop · Build-OS | "Compilation should convert filesystem implication into an explicit operational contract" [Knox §B, no-ts] | PARTIAL × build=absent | spine | promote |
| C | **Four distinct records with distinct lifecycles (source package / compiled manifest / deployment profile / active session-run)** | Do not speak of "the agent" as one thing: (1) editable source package; (2) compiled runtime manifest (resolved, normalized, immutable candidate — versions/deps/grants/policies/routes/budgets/signatures/hashes); (3) deployed runtime profile (manifest admitted into env/operator/tenant/region/release-channel/topology); (4) active session/run (actor/purpose/context/tool-calls/approvals/outputs/side-effects/trace) — this is **candidate ≠ commit** applied to agent lifecycle | Agent Runtime & Harness · Platform Loop · CNS (invocation) | "Source package, compiled manifest, deployment, and run are different records" [Knox §C, no-ts] | PARTIAL (candidate≠commit AFFIRM; agent-lifecycle staging map-depth) × build=absent | spine | promote |
| D | **Compilation is a SAFETY GATE, not mere import resolution (compile-time policy check)** | A governed agent compiler must run static checks and REJECT unsafe composition before runtime can improvise: missing owner/authority-ceiling; undeclared tool; incompatible tool×environment; unsafe channel; absent eval requirement; credential request outside policy; schedule without principal; **subagent with broader authority than parent**; PHI-capable tool in non-PHI environment; unbounded cost/fan-out; write-tool without approval/policy; unsupported model route; missing fallback/kill-switch; conflicting instructions; orphaned components | Build-OS / Build Entry Gate · Agent Runtime · Reactor (consequence-scaled checks) | "The compiler should reject unsafe composition before the runtime… improvise" [Knox §D, no-ts] | PARTIAL × build=absent | Build-OS/runtime | promote |
| E | **The effective-manifest diff is the review surface (not the textual file diff); runtime overrides are part of runtime truth** | A small source change can produce a large operational change (add one tool ⇒ new write capability; add a schedule ⇒ unattended execution; edit a skill description ⇒ altered selection). Review what the change causes the agent to *become*: `source diff → compiled-manifest diff → authority diff → capability diff → data-exposure diff → cost/latency diff → required eval profile → release decision`. Runtime truth = compiled manifest **plus every admitted deployment override** (env vars, provider defaults, region settings, model routing, secret injection, flags, operator policy) — overrides must be captured | Platform Loop (manifest/authority/capability/exposure diffs) · Build-OS review · Agent Runtime | "Review what the change causes the agent to become, not… which files changed" [Knox §E/§AI, no-ts] | PARTIAL (blast-radius/effective-diff is REV-184 pressure) × build=absent | spine | promote |
| F | **Convention-based discovery: usability that increases hidden coupling (magic→evidence)** | Automatic discovery removes wiring but lets a file acquire operational meaning merely by appearing in a directory (unintended inclusion, stale-but-active files, name collisions, order-dependence, env-specific discovery, hidden defaults, compiler-version drift). The compiled artifact must preserve every discovered component + source path + component identity + selection rule + normalized config + compiler version | Build-OS · Agent Runtime · Platform Loop (provenance) | "Magic during authoring must become evidence during compilation" [Knox §F, no-ts] | PARTIAL × build=absent | Build-OS | promote |
| G | **Folder schema ≠ ontology (packaging categories are not semantic/consequence categories)** | `skills/tools/channels/subagents` are useful *package* categories, not sufficient *governance* categories: a file under `tools/` may wrap a read, a write, an external communication, a financial transaction, or a clinical side-effect; a `skills/` file may be harmless formatting or an unsafe pseudo-clinical procedure; a channel may be internal Slack or patient SMS; a subagent may be an analysis worker or a real-world actuator — **payload-noun ≠ domain** (`GRD-026`) applied to directories | thesis §B/care-ontology (packaging≠meaning) · capability contracts · Agent Runtime | "Directory placement explains packaging; capability contracts explain meaning and consequence" [Knox §G, no-ts] | AFFIRM (GRD-026) × build=absent | spine-guardrail | promote |
| H | **Skills = procedural guidance ("how"), never authority ("whether")** | Placing a file under `skills/` cannot create a live healthcare capability; a skill (when-to-load / method / response shape / rules) must NOT independently authorize prescription, patient communication, clinical interpretation, refund, scheduling mutation, record correction, or external disclosure — the runtime separately decides whether actor+purpose+workflow+authority permit it | Agent Runtime (skill ≠ capability) · capability_envelope · Care | "Skills teach the agent how; the governed capability layer determines whether it may" [Knox §H, no-ts] | AFFIRM (skill≠capability; AI-never-care-authority) × build=absent | spine | promote |
| I | **Tool discovery ≠ tool authorization; typed inputs prove shape, not intent/authority/truth** | Compile-time inclusion establishes AVAILABILITY; the runtime must authorize each CALL (registered tool identity/version/owner/action-class/data-classes/purpose/actor-eligibility/tenant+patient scope/credential policy/rate+cost/idempotency/timeout+retry/evidence/side-effect semantics/kill-switch). Zod-typed inputs prevent malformed shapes but cannot prove the right tool was selected, the action is authorized, the patient/tenant is correct, the SQL is safe, the result truthful, or the side-effect appropriate | Agent Runtime (per-call authorization) · RBAC · GRD-033 (tool = rail) | "Compilation establishes availability; runtime policy establishes admissibility" [Knox §I/§J, no-ts] | AFFIRM (capability_envelope≠delegated_authority_envelope; MCP visible≠authorized) × build=partial (`requireCapability`) | spine-guardrail | promote |
| J | **Channels = identity/visibility/custody/delivery policy boundaries, not presentation adapters** | A channel (Slack/Discord/HTTP/custom UI/patient SMS/public chat/external agent API) changes actor authentication, audience, thread/session semantics, delivery guarantees, privacy, retention, impersonation risk, timing, visibility, and available approval mechanisms — the same response can be appropriate in a staff channel and inappropriate in patient SMS | Agent Runtime (channel contract) · RBAC/Identity · §C (external boundary) · surfaces | "A channel is an identity, visibility, custody, and delivery boundary" [Knox §K, no-ts] | AFFIRM (projection≠authority; disclosure-policy) × build=partial (disclosure evaluator) | vocabulary/guardrail | promote |
| K | **Thread memory ≠ longitudinal/canonical memory** | Slack-thread continuity (the agent "remembers" earlier turns) is conversational continuity, not durable patient/operator/institutional memory or canonical workflow state; thread content can be incomplete, ambiguous, deleted, inaccessible, duplicated, or visible to the wrong participants — "conversation is execution context, not canonical memory" | Clinical Memory · Agent Runtime (context ≠ record) · one-owner-per-fact | "A conversation can preserve… continuity without becoming… canonical memory" [Knox §L, no-ts] | AFFIRM (context≠canonical memory; one-owner-per-fact) × build=absent | guardrail | promote |
| L | **Durable sessions require SEMANTIC recovery, not transcript replay; idempotency + side-effect receipts protect the world** | Persisting turns/tool-calls is directionally right, but durability must know: did the last tool call complete? did the side-effect occur? was the response delivered? is approval still valid? did inputs change? is retry safe? did model/tool version change? → resume vs compensate vs stop. A durable action needs idempotency key, attempt identity, external receipt, status reconciliation, compensation path, human escalation where state is uncertain (messages/DB-writes/appointments/payments/orders/prescriptions/fulfillment) | Agent Runtime (durable session) · Platform Loop · Care/commerce commit paths (idempotency) | "Checkpointing protects computation; idempotency and reconciliation protect the world" [Knox §M/§N, no-ts] | PARTIAL (idempotency doctrine exists; agent-session recovery map-depth) × build=absent | spine | promote |
| M | **A schedule = standing delegated authority (an autonomous principal), not a clock expression** | A scheduled agent needs principal/sponsoring authority, approved purpose, recurrence, timezone, eligibility window, input-selection rule, scope, cost budget, expiration, concurrency, backpressure, missed-run behavior, stop conditions — "run every morning" must mean "this authorized objective may initiate these bounded runs under these conditions" | Agent Runtime (schedule authority profile) · RBAC (non-human principal) · Reactor | "A schedule is delegated standing authority, not merely a clock expression" [Knox §O, no-ts] | PARTIAL (non-human identity/authority map-depth) × build=absent | runtime | promote |
| N | **Subagents inherit NARROWER authority + structured returns (nested folder ≠ inherited power)** | The compiled manifest should show which parent may invoke the child, delegated-objective schema, allowed context/tools, budget, deadline, output schema, termination policy; the child must NOT inherit every secret/tool/channel/memory/authority of the parent | Agent Runtime (delegation contract) · capability_envelope · CNS (bounded delegation) | "Nested folders must not imply inherited power" [Knox §P, no-ts] | AFFIRM (bounded delegation; capability_envelope) × build=absent | runtime | promote |
| O | **Sandbox = execution containment, not a complete trust model** | A sandbox constrains filesystem/process/network/resource/persistence but does NOT secure credentials passed into it, malicious tool outputs, exfiltration through allowed networks, dependency installation, poisoned packages, model-generated destructive logic, or unsafe external actions | Agent Runtime/security (sandbox) · security-control-plane (absent) | "The sandbox contains execution; policy still governs what execution may touch and cause" [Knox §Q, no-ts] | PARTIAL × build=absent | security-guardrail | promote |
| P | **Human approval must BIND actor/authority/proposal/version/executed-effect — and is not universal safety theater** | An Allow/Deny button is an approval CONTRACT only if bound to authenticated actor + authority + exact proposed action + exact query/params + target resource + estimated scope + consequence + time window + action version; approval must invalidate if the action changes after review, and the system records what-approver-saw / what-approved / what-ran / what-occurred. Approval is NOT always the right control — some actions should be prohibited, structurally constrained, split, simulated-first, dual-controlled, or channel-unavailable (a human may approve without understanding the query, seeing affected records, noticing a hidden parameter, or holding legitimate authority) | Reactor (control selection by consequence) · Care (authority binding) · REV-184 (outcome-reads-frozen-context) | "A human button is not an approval contract unless it binds identity, proposal, consequence, and execution" [Knox §R/§S, no-ts] | AFFIRM (REV-184; AI-never-care-authority) × build=absent | spine-guardrail | promote |
| Q | **Eval-as-deploy-gate is correct in direction; the effective-manifest diff selects the required validation contract; evals are evidence, not runtime/domain authority** | An agent change must carry BEHAVIOR evidence (task success, tool-selection accuracy, factuality, refusal, permission behavior, cost, latency, concurrency, recovery, channel behavior, subgroup, adversarial) — not merely "it compiled / it responded / smoke passed". The required eval set depends on the effective manifest + deployment target (add Slack ⇒ channel+identity tests; add write-tool ⇒ authority+side-effect tests; add schedule ⇒ unattended tests; change model ⇒ behavior/cost/latency regression). A passing eval / LLM-judge / benchmark supports RELEASE; it does not authorize a live action for a particular actor/patient/operator/context | Platform Loop / E&V · Build Entry Gate · Reactor (residual by consequence) · candidate≠commit | "Release evidence determines whether a capability may enter service; runtime authority determines what it may do now" [Knox §T/§U/§V, no-ts] | AFFIRM (candidate≠commit; eval≠authority) × build=partial (`chart_ai_reviews`) | spine | promote |
| R | **One-command deployment must retain full release provenance; smoke test ≠ safe release** | "Deploy this Eve agent" is excellent ergonomics but the platform still needs the durable graph: source revision → compiled manifest → eval run → release candidate → release → deployment → environment → operator → runtime version → model version → tool versions → active sessions — so the org can answer which-release-produced-this-output / which-manifest-granted-this-tool / which model+instruction versions / which operators exposed / can-this-roll-back / which sessions need remediation. A smoke test proves basic life (service starts, simple request succeeds, creds resolve), not concurrency/tenant-isolation/authorization/recovery/tool-failures/malformed-inputs/adversarial/PHI/rollback | Platform Loop (release identity graph) · Accountability Loop (lineage) · Build-OS | "One-command deployment should simplify the operator experience, not erase release provenance" [Knox §W/§X, no-ts] | PARTIAL × build=absent | spine | promote |
| S | **Infra scale + hosted runtime ≠ operational trust or care-grade admissibility** | Elastic "scales to millions" is infrastructure capacity, not correct behavior / fairness / state isolation / cost stability / supportability / safe failure — scale multiplies BOTH throughput and blast radius (duplicate side-effects, approval burden, data exposure, incident complexity). A care-adjacent agent additionally requires contractual data protections, regional placement, retention control, audit export, encryption controls, operator isolation, incident obligations, BCP, subprocessor governance, migration capability — none established by the demo | Platform Loop · Federation/§C (deployment admission) · security | "Production-ready for a generic agent is not the same as admissible for a governed care capability" [Knox §Y/§Z, no-ts] | PARTIAL (deployment-admission map-depth) × build=absent | guardrail | promote |
| T | **The coding-agent plugin + scaffolding + credentials are a software-supply-chain + release-authority surface** | The Vercel plugin that gives Claude Code/Cursor framework instructions + skills + MCP + scaffolding + deploy capability is a supply-chain actor: it must have version, publisher identity, signature/provenance, permissions, allowed repos, allowed deploy environments, change review, revocation. Generators scale DEFAULTS into architecture — templates must encode least-privilege, required owner, default trace, no-ambient-credentials, explicit authority ceiling, safe channel defaults, default budgets, deploy restrictions. Env-var API keys are demo-acceptable only; production needs a secret broker (runtime retrieval, rotation, scope, tenant separation, non-exportability, audit, expiry, emergency revocation, sandbox-exfiltration protection) | Build-OS (plugin/dependency governance) · C3.8 supply-chain proof-fabric · security/RBAC (credential brokerage) | "A credential must be brokered to an admitted capability, not merely present in the agent's environment" [Knox §AA/§AB/§AC, no-ts] | PARTIAL (C3.8 supply-chain proof-fabric named) × build=absent | spine/security | promote |
| U | **Provider-neutral internal contract; portability requires state export, not only source portability** | OMNI should keep a provider-neutral internal contract (purpose/capabilities/tools/skills/policies/evals) and compile it toward Vercel / another managed runtime / self-hosted / operator-specific env. But portable source ≠ portable system: migration also requires exportable manifests, session records, run traces, approval records, schedule definitions, deployment history, canonical domain links. External FS standards (MCP/A2A/OKF) belong at the membrane — adopt interchange conventions without letting them define care ontology / authority / operator policy / domain boundaries | Platform Loop (portability/export) · GRD-033 (rail-agnostic, semantics-stable) · §C · Knowledge Reservoirs (knowledge stays in owning systems) | "Compile toward providers; do not let the provider become the only definition of the agent" [Knox §AD/§AE/§AG, no-ts] | AFFIRM (GRD-033) × build=absent | spine | promote |
| V | **Knowledge stays in owning systems, not the agent package** | The folder may package instructions + procedural skills + config; large evolving knowledge (clinical memory, operator policy, evidence corpus, longitudinal state) needs durable source records, authority, metadata, retrieval, freshness, supersession, access control, provenance — retrieve governed knowledge from its owning systems; do not pour it into the agent folder | Knowledge Reservoirs · Clinical Memory · Evidence Plane | "Package the agent's operating contract; retrieve governed knowledge from its owning systems" [Knox §AF, no-ts] | AFFIRM (Knowledge Reservoirs named; one-owner-per-fact) × build=absent | reservoir | promote |
| W | **Agent identity = governed responsibility, not its model/framework/channel; the framework runs workers, not the institution** | An OMNI agent should not be "the Claude agent"/"the Eve agent"/"the Slack bot"; its stable identity is owned purpose + responsible team + intended workflows + eligible principals + authority ceiling — model/framework/channel/tools/runtime change through versioned releases. Eve may package and operate the agent; it does NOT replace OMNI's governed substrate (domain contracts, canonical records, workflow lifecycle, actor/relationship context, policy resolution, consequence management, outcome linkage) | thesis §B/§8 (governed responsibility) · Agent Runtime (stable agent identity) · CNS-not-sovereign · Polaris-composes-not-enforces | "An agent framework runs intelligent workers; it does not define the institution they work inside" [Knox §AJ/§AL, no-ts] | AFFIRM (CNS orchestrates-not-owns; framework≠institution) × build=absent | spine | promote |
| Z | **The compiled manifest as attestation target + INVESTIGATE object (`compiled_agent_manifest` / `compile_time_policy_check`)** | Once compilation emits a normalized manifest, OMNI can hash/sign it, attach eval evidence, approve it, package it into a release, and prove which deployed instance used it: `source revision → compiler version → compiled-manifest hash → validation bundle → approved release candidate → release → deployment → active runtime instance → run trace`. Candidate architecture objects to route (NOT mint): `compiled_agent_manifest` (reproducible release identity) + `compile_time_policy_check` (the safety gate of cluster D) — pairs directly with 285's `certified_variation_envelope` (the boundary the compiler diffs against) | Platform Loop · Build Entry Gate · Agent Runtime | "The compiled manifest can become the agent's reproducible release identity" [Knox §AH, no-ts] | PARTIAL / potential-new-architecture-object (INVESTIGATE) × build=absent | architecture | investigate → likely promote |

### Net-new primitive dispositions (EVERY Knox candidate dispositioned; net-new DOMAIN objects = 0)
Knox listed ~25 candidate concepts and himself concluded "most should extend current OMNI objects rather than become independent root primitives." Dedup vs cumulative baseline (`EVRUN-000001 §2A`, waves 2–5, wave-6 registry §2/§3 for 282–286, esp. 285/286 Agent-Runtime clusters):
- **dedup-as-EXISTS → Agent Runtime & Harness / capability model:** `agent_source_package`, `agent_package_schema` → `agent_definition` (Agent Runtime, map-depth) [EXISTS-AS wave-6 §1 285-A/D]; `compiled_agent_manifest`, `effective_runtime_manifest` → `agent_runtime_profile` resolved form (Agent Runtime) — **routed INVESTIGATE (cluster Z)**; `channel_capability_profile`, `schedule_authority_profile`, `tool_discovery_record`, `skill_discovery_record`, `runtime_dependency_graph` → Agent Runtime component contracts (sharpenings); `session_checkpoint`, `recovery_reconciliation_state`, `side_effect_receipt` → durable-session + idempotency doctrine (Agent Runtime + commit-path idempotency) [EXISTS-AS candidate≠commit + Stripe-idempotency import]; `portable_runtime_export` → Platform Loop portability (sharpening + GRD-033).
- **dedup-as-EXISTS → Platform Loop / Build Entry Gate:** `manifest_diff`, `capability_diff`, `authority_diff`, `data_exposure_diff` → REV-184 blast-radius + Platform effective-diff review (sharpening; pairs w/ 285 compositional review) [EXISTS-AS registry §2 conv.4]; `agent_release_attestation`, `agent_source_to_runtime_lineage`, `deployment_override_record`, `manifest_hash` → Platform release identity graph + Accountability lineage (sharpening); `agent_compiler`, `agent_compiler_version` → Build-OS compiler (sharpening of 285-E dynamic-graph-generation=compiler).
- **dedup-as-EXISTS → Build-OS / Foundry / supply-chain:** `agent_scaffold_template` → Build-OS golden-path templates (sharpening; scaffolding-scales-defaults); `plugin_supply_chain_record` → C3.8 supply-chain proof-fabric + Build-OS plugin governance (sharpening); `compile_time_policy_check`, `agent_package_lint` → Build Entry Gate compile-time validation — **routed INVESTIGATE (cluster Z/D)**.
- **INVESTIGATE-lane (route to owning home's watch; NOT minted):** `compiled_agent_manifest` (resolved/immutable/attestable form of `agent_runtime_profile`) + `compile_time_policy_check`/`agent_package_lint` (the safety-gate compiler pass) — route Platform Loop + Build Entry Gate + Agent Runtime authoring; **explicitly pairs with 285's `certified_variation_envelope`** (285 = the envelope to diff against; 293 = the compiler + manifest that does the diffing). Reviewer decides distinct-vs-compose.
- **net-new DOMAIN objects: 0.** No `folder`/`skills`/`channels` FS taxonomy adopted as OMNI ontology (Knox §G). No retired terms re-minted (`EVRUN-000004 §0.5`); D0OL-GRD-001..008 not re-minted as primitives.

### Counterweights / what-NOT-to-import (EVERY Knox caution PRESERVED or rejected-with-reason; NEVER inverted)
Knox's "What not to import blindly" (22 cautions) — all preserved:
1. **Do NOT say "the agent is a folder" without qualification** — the source package may be a folder; the live agent is runtime+infra+policy+credentials+state+sessions+tools+external systems+domain authority. [kept — cluster A]
2. **Do NOT treat automatic discovery as harmless magic** — every discovered component changes the effective runtime. [kept — F]
3. **Do NOT let a skill file create a care capability** — Markdown placement is not authority. [kept — H, CARE]
4. **Do NOT let every file in `tools/` be callable in every context** — compile-time inclusion ≠ per-call authorization. [kept — I]
5. **Do NOT infer safe SQL from typed inputs** — a structurally valid query can be destructive/expensive/unauthorized/privacy-violating. [kept — I]
6. **Do NOT treat Slack approval as sufficient for every risky action** — the approver may lack authority/context/complete view. [kept — P]
7. **Do NOT interpret human-in-the-loop as a universal safety strategy** — some actions need prohibition/SoD/dual-control/narrower design. [kept — P]
8. **Do NOT equate persisted turns with durable workflow recovery** — a resumed model can duplicate a side-effect unless external state is reconciled. [kept — L]
9. **Do NOT let schedules create ownerless autonomous behavior** — every schedule needs principal/purpose/scope/expiry/budget. [kept — M]
10. **Do NOT allow subagents to inherit the full parent environment by default** — context/tools/credentials/authority should narrow. [kept — N]
11. **Do NOT treat sandboxing as complete security** — external network/credentials/packages/tools remain attack surfaces. [kept — O]
12. **Do NOT let one passing eval suite authorize every deployment target** — env/operator/channel/data-class/consequence change the required evidence. [kept — Q]
13. **Do NOT treat LLM-as-judge results as compliance proof** — machine evaluation is evidence, not certification. [kept — Q]
14. **Do NOT assume elastic hosting proves reliable application behavior** — serving capacity ≠ behavioral correctness. [kept — S]
15. **Do NOT infer healthcare readiness from generic production deployment** — the demo shows no regulated-operational proof. [kept — S, CARE]
16. **Do NOT copy local API-key handling into OMNI production** — use scoped credential brokerage + rotation. [kept — T]
17. **Do NOT let a coding-agent deploy plugin possess unrestricted production authority** — scaffold/test/release/deploy are distinct gates. [kept — T]
18. **Do NOT allow generated scaffolds to omit ownership and authority** — "Hello agent" is demo-adequate, not institutional. [kept — T]
19. **Do NOT make Vercel-specific runtime state the only durable state** — portability requires exportable manifests/traces/schedules/approvals/sessions. [kept — U]
20. **Do NOT treat agent packages as knowledge bases** — operational instructions and canonical knowledge have different lifecycles/authorities. [kept — V]
21. **Do NOT adopt Eve as an OMNI standard merely because the structure is elegant** — evaluate portability/security/lifecycle/failure-semantics/observability/extensibility/vendor-coupling/fit. [kept — S/U]
22. **Do NOT build a proprietary equivalent prematurely** — learn from Eve, map its grammar, test it as an implementation, preserve OMNI's internal manifest, compile/adapt toward Eve where useful; don't recreate every feature before product evidence demands it. [kept — Z]
- **REJECT-as-OMNI-truth (mechanism kept, claim not canonized):** "agent = a folder" as a complete statement; "scales to millions" as proof of trust; Vercel-hosted = care-grade infra; env-var key handling; folder FS taxonomy as ontology; smoke-pass = safe release; coding-agent-can-deploy-prod-by-default. (Recorded, not silently dropped — `GRD-043`.)

### Care implications (NOT swept by "0 net-new")
- **AI never care authority** is the through-line: skills, tools, typed inputs, durable sessions, evals, human buttons, and Vercel scale are all availability/mechanism — none confers authority to prescribe, communicate clinically, interpret, refund, mutate schedules, correct records, or disclose externally. The demo's "pause a large SQL op → Allow/Deny" is exactly where OMNI must add actor-authority binding + action-version invalidation + prohibited-state design.
- **Side-effect reconciliation is a care-safety issue, not just an engineering nicety:** crash-then-resume duplicating a message/appointment/prescription/order is patient harm — cluster L's idempotency+receipt discipline is a care commit-path requirement.
- **Channel = custody boundary for PHI:** the same agent output safe in a staff Slack is a disclosure event in patient SMS (cluster J) — ties to the existing disclosure-policy evaluator (partial build).

### Candidate guardrails → `08` (gated, `user_knox_required`; dedup noted)
- **G-cand-1:** *A folder can define an agent's source; it must never become the database of what the agent did or what the world now believes* (agent-package ≠ operational/authority/canonical state). [dedup vs one-owner-per-fact / candidate≠commit]
- **G-cand-2:** *Compilation must convert implicit filesystem composition into an explicit runtime contract, and reject unsafe composition before the runtime can improvise* (compile-time policy gate).
- **G-cand-3:** *Tool discovery/availability is not tool authorization; a skill teaches "how", the governed capability layer decides "whether"* [dedup vs 285 G-cand-3/4 + MCP visible≠authorized / D0-GRD-010].
- **G-cand-4:** *Durable checkpointing protects computation; only idempotency + external side-effect receipts + reconciliation protect the world* (no transcript-replay-as-recovery).
- **G-cand-5:** *A human approval is an authority contract only if bound to actor + authority + exact proposal + action version + executed effect, and it must not substitute for structural prohibition* [dedup vs REV-184].
- **G-cand-6:** *A build/deploy plugin that can scaffold and deploy is a software-supply-chain + release-authority actor; scaffold/test/release/deploy are distinct gates and credentials are brokered, never ambient* [dedup vs C3.8 supply-chain proof-fabric].
- **G-cand-7:** *Generic production-readiness (scale, smoke-pass, hosted durability) is not care-grade admissibility* [dedup vs 282 G-cand + deployment-admission].
- **G-cand-8:** *An agent manifest must represent its external dependencies and their health; the dependency graph defines the operating system the agent relies on* (Knox §AK keeper, restored 2026-07-19 per 2nd-reader fidelity audit). A compiled agent is only as governable as its declared+monitored dependencies — an undeclared or unhealthy dependency is an unbounded runtime + supply-chain surface. [restored — dedup vs Platform service-health + operational-finding + C3.8 supply-chain proof-fabric.]

### Reread flags
- Clusters B/C/D/E/Z (compilation boundary + four-record staging + compile-time policy gate + effective-manifest diff + `compiled_agent_manifest`) are the **strongest Agent-Runtime/Build-OS packaging pressure in the wave** — reopen jointly with **285 (`certified_variation_envelope`, compositional review)** for Platform Loop + Build Entry Gate + Agent Runtime authoring at the C5 Foundry/Build-OS design gate. 293 supplies the compiler+manifest; 285 supplies the envelope to diff against; 274 (Archon) supplies the harness-as-factory; 286 supplies the shadow-agent promotion path.
- Cluster L (durable-session semantic recovery + idempotency) → reopen with commerce/care commit-path idempotency doctrine.
- Agent Runtime & Harness capture is **map-depth only** per gate — this source is depth INPUT to that map, not license to build the runtime pre-spine.

### One-line hard read
`full_semantic`, 4.5/5, **0 net-new domain objects + 2 INVESTIGATE architecture candidates (`compiled_agent_manifest`, `compile_time_policy_check`)** — Eve's real keeper is not "Markdown is production infra" but that **agent construction can acquire a compiler architecture**: humans/coding-agents edit a declarative source package → compilation resolves it into an explicit, hashable, attestable manifest → validation proves bounded fitness → release admits a version → the runtime operates durable sessions under governed infra; OMNI's differentiating responsibility begins exactly where the demo compresses everything — *what the agent may propose, what it may execute, which actor owns the decision, what becomes canonical, what actually occurred, and who remains accountable* — so **the agent may begin as a folder, but it becomes operational only after compilation makes its capabilities explicit and OMNI determines what (if anything) it is authorized to change in the world.**

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000011` (ai-corpus wave-6) · concept_registry: `EVRUN-2026-000011_ai-corpus-wave-6_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000011_ai-corpus-wave-6_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Agent Runtime & Harness (map-depth) · Platform Loop · Build-OS / Build Entry Gate · RBAC / MCP / credential brokerage · C3.8 supply-chain proof-fabric · Knowledge Reservoirs · §C (deployment admission) · Care (side-effect reconciliation, channel custody, AI-never-authority)` · promotion: `watch` (7 guardrail candidates + 2 INVESTIGATE architecture candidates `compiled_agent_manifest`/`compile_time_policy_check` → `08`; pairs with 285 `certified_variation_envelope`)

## §5 — Change log
- `2026-07-18` — source file created (wave-6 scaffold; `EVRUN-2026-000011`).
- `2026-07-19` — PROCESSED (Review 003): slug firmed (SUGGESTION only — not renamed); §0/§0.1 filled from Knox Review 001 metadata (no screenshot → `inferred`); noted only Knox read pasted into §1, no timestamped transcript → anchors are `[Knox §X] no-ts`; §3 Review 003 written (24 clusters A–W+Z, **0 net-new domain objects + 2 INVESTIGATE architecture candidates** `compiled_agent_manifest` + `compile_time_policy_check`, 22 counterweights preserved, 7 guardrail candidates → 08); §4 filled. `raw_dropped → analyzed`; awaiting 2nd-reader fidelity sign-off.
- `2026-07-19` — 2nd-reader fidelity audit = `minor_restore_required` → RESTORED: added G-cand-8 (Knox §AK keeper — *the manifest must represent external dependencies + their health; the dependency graph defines the operating system the agent relies on*). Slug firmed via git mv; status `covered · semantic_fidelity=restored`. (Audit also noted the Knox read is pasted in §1 not §3 Review-001 block — schema deviation, non-blocking; extraction correctly sourced from §1 with `no-ts` anchors.)

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.
