# EVSRC-2026-000213 — Bridging Design Systems and Code with MCP and AI Agents

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000213_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000213`  ·  filename: `EVSRC-2026-000213_bridging-design-systems-code-mcp-ai-agents.md` *(proposed slug; file NOT renamed this pass)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=Gh1E9VgXZWs`  ·  source_title: `Bridging Design Systems and Code with MCP and AI Agents`
- channel_or_org: `IBM Technology`  ·  speaker: `Will Scott`  ·  published_at: `Jun 14, 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `YouTube screenshot + pasted transcript`
- content_type: `design systems / context engineering / MCP / AI agents / agent-guided UI generation / design-token governance / component rules / governed context delivery / software consistency`  ·  source_reliability_context: `vendor` (IBM Technology short educational explainer — clean Build-OS/context-delivery vocabulary; MCP + design-system implementation details stay EXAMPLES, not mandatory OMNI doctrine)  ·  topic_tags_light: `[IBM_Technology, Will_Scott, design_systems, context_engineering, MCP, Model_Context_Protocol, AI_agents, agentic_AI, design_tokens, component_registry, governed_context_delivery, context_source_protocol, design_system_as_agent_constraint, Surface_Map, Build_OS, agent_workbench, UI_consistency, agent_guided_UI_generation]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Will Scott` · role_in_source: `presenter` · affiliation_at_publication: `IBM Technology` · speaker_type: `educator` (vendor-channel technical explainer) · authority_context: `IBM Technology educational-explainer voice; introductory framing of design systems + context engineering + MCP for a general dev audience` · identity_confidence: `high_from_metadata` (lifted from Review-001 metadata block; no screenshot attached this pass)
- publisher / channel: `IBM Technology`  ·  interviewer / moderator / host: `n/a (solo explainer)`
- event_context: `short IBM Technology YouTube explainer, published Jun 14, 2026`  ·  perspective / conflict notes: `vendor channel — MCP is IBM-friendly tooling; treat MCP/design-system specifics as illustrative examples, not OMNI doctrine (GRD-039 watch-not-worship: the tool/rail is never the authority boundary)`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat *(metadata block in Review 001)* · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot *(lifted from Review-001 metadata block)* · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) *(deferred to Opus-main fold)* · [ ] update coverage matrix *(Opus-main)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:01
Design systems and context engineering are powering new approaches for AI agents.
0:08
This is gonna change the way that software is getting built.
0:11
Have you ever wondered exactly what design systems are?
0:14
How AI agents are making use of them?
0:17
Or how context engineering plays together with all of these technologies?
0:21
Well, let's talk about it.
0:23
Design system is like a big set of rules and building blocks.
0:31
That let people create things like software apps and websites in a consistent and uniform way.
0:38
It includes things like fonts, UI components, colors to use, and rules for spacing and layout.
0:46
The design system is like a Lego set with instructions.
0:50
The instructions are the design system and the set of rules that comprise the design systems.
0:57
The building blocks, the Lego blocks, are actually the design system components,
1:01
like the fonts, UI components, colors, and rules of spacing that we mentioned earlier.
1:07
The finished Lego set is your app or website.
1:10
So instead of everyone making things differently, a design system helps teams build things
1:14
that deliver familiar experience, that are easy to use, no matter who made it.
1:19
Now that we've covered design systems, let's move on to context engineering.
1:23
In its purest form, context engineering is the way we teach an AI agent.
1:32
What it needs to know before it starts working on something.
1:35
It's a way to provide the AI with the information it needs, to be successful.
1:39
MCP or Model Context Protocol.
1:45
It's an industry standard way of sharing that information to an AI.
1:51
It's formatted in such a way that the information is easily consumed by the AI.
1:57
Agentic AI is AI that ultimately can make decisions based on the information it has, choose
2:03
what it's going to do, and use tools along the way to get real work done.
2:07
Now let's see how this all comes together and why it's changing how most software apps are built.
2:12
Let's say someone needs to build a website.
2:22
The website has to follow the design system's rules and components, but let's
2:26
say they're not an expert in the design systems.
2:29
With MCP connected to an agent, providing guidance and...
2:32
tools.
2:38
The user can describe.
2:40
What they need to the AI, and the AI agent will follow all of the rules for the design
2:44
system and ask for a prototype implementation.
2:47
The AI agent knows how to build the website.
2:56
But since it's been instructed to use.
2:58
Design System MCP, it goes and gets the information it needs to be certain that it's building things absolutely correctly.
3:05
To go back to the Lego analogy, without the use of MCP it's like the AI agent is
3:09
building the Lego set from memorized instructions.
3:13
MCP gives the actual instructions so that the AI agents can check its work.
3:18
The combination of design systems, context engineering, and intelligent AI
3:22
agents will help define the next generation of software development.
3:26
Are you considering using AI agents for future work?
3:29
Or have you already built something really cool?
3:31
We'd really love to hear about it
3:33
in the comments below.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️


source_platform: YouTube
source_url: https://www.youtube.com/watch?v=Gh1E9VgXZWs
source_title: Bridging Design Systems and Code with MCP and AI Agents
channel_or_org: IBM Technology
speaker: Will Scott
published_at: Jun 14, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + pasted transcript
content_type: design systems / context engineering / MCP / AI agents / agent-guided UI generation / design-token governance / component rules / governed context delivery / software consistency
source_reliability_context: IBM Technology short educational explainer. Useful for Build-OS frontend/context-delivery vocabulary and the idea that agents should retrieve governed instructions/components before acting. MCP and design-system implementation details should remain examples, not mandatory OMNI doctrine.
priority: 3.75/5
depth: medium_semantic
recommended_status: route to Build-OS, Surface Map, Design System contract, MCP/tooling layer, context engineering, agent workbench, and governed context-source protocol.

Topic tags:
[IBM_Technology, Will_Scott, design_systems, context_engineering, MCP, Model_Context_Protocol, AI_agents, agentic_AI, design_tokens, component_registry, governed_context_delivery, context_source_protocol, design_system_as_agent_constraint, Surface_Map, Build_OS, agent_workbench, UI_consistency, agent_guided_UI_generation]


Priority: 3.75/5
Depth: medium semantic
Recommended status: route to Build-OS / Surface Map / Design System contract / MCP-tooling / context engineering / agent workbench. This is short, but it carries a clean concept OMNI should keep: agents should build from governed system instructions, not memory or vibes.

Core takeaway

This video connects three ideas:

Design systems = standardized rules + components for consistent software.
Context engineering = giving the AI the right information before it works.
MCP = a standardized way to expose that information/tools to the agent.

The strongest OMNI translation:

Agents should not “remember” how OMNI works. They should retrieve the current governed instructions, contracts, components, and rules before acting.

That matters for Build-OS and product surfaces.

Key concepts to preserve
1. Design system as rules + components

The speaker frames a design system as a reusable set of rules and building blocks: fonts, UI components, colors, spacing, layout, and usage rules.

OMNI keeper:

A design system is not just visual polish. It is a governance layer for product consistency.

For OMNI, this should include:

UI components
surface patterns
terminology
spacing/layout rules
role-specific interaction rules
patient/provider/admin tone
safe display of PHI
action-button hierarchy
status badges
escalation states
warning/error language
audit/provenance display conventions

Likely home:

OMNI_Surface_Map_vNext
Design System contract
Build-OS frontend rules
Patient App / Provider Workspace / Admin Console surface specs

Doctrine candidate:

Product consistency should be encoded as reusable rules and components, not recreated per screen.

2. Context engineering as “teach the agent before work”

The video defines context engineering as giving the agent the information it needs before it starts.

OMNI keeper:

This is exactly the Build-OS problem.

Agents need current context for:

domain contracts
doctrine
surface rules
schema conventions
safety rules
authority boundaries
component libraries
naming conventions
active decisions / stale decisions
open questions
non-goals

Without that, agents hallucinate structure or rebuild old assumptions.

Doctrine candidate:

Agent quality depends on governed context assembly before execution.

3. MCP as governed instruction/tool access

The video treats MCP as a standard way to share information with the AI in a form it can consume.

OMNI keeper:

Do not over-promote MCP specifically, but preserve the architectural pattern:

Agents should access context/tools through governed protocols, not pasted blobs or hidden memory.

For OMNI, MCP-like rails could expose:

design tokens
component docs
domain contracts
schema references
API/tool docs
test fixtures
service definitions
policy snippets
source registries
Build-OS skills

Potential primitive:

context_source_protocol

A governed way for agents to fetch current context, components, and rules from authoritative homes.

4. “Memorized instructions” vs “actual instructions”

The Lego analogy is the most important part.

Without MCP, the agent builds from memorized instructions. With MCP, it fetches actual instructions and checks its work against them.

OMNI translation:

This is the difference between:

“the model probably knows React”
versus
“the agent retrieved OMNI’s actual surface contract, design tokens, component rules, and role-specific action constraints”

For clinical/business/product systems, the second is mandatory.

Doctrine candidate:

Agents must check against current governed instructions, not latent model memory.

This applies beyond UI:

clinical policy
D6 pricing/benefits
RBAC action rules
Federation grants
documentation style
coding standards
prompt templates
patient-facing language
SNF note structure
marketing tone
consent requirements
5. Design-system MCP as Build-OS pattern

The example is website generation, but the reusable OMNI idea is broader:

Give the agent a governed source of truth for how the thing should be built.

For Build-OS, this means:

frontend agents use design-system context
contract agents use doctrine/registry context
migration agents use schema/context rules
test agents use acceptance criteria
copy agents use brand/tone rules
clinical agents use policy/authority context
support agents use workflow/runbook context

This is not a new OMNI domain. It is a context delivery pattern.

Likely OMNI landing zones

Build-OS

context engineering for agents
MCP-like context/tool access
design-system-aware coding agents
current-contract retrieval before edits
agent workbench context assembly

Surface Map / Design System

component registry
design tokens
surface rules
role-specific UI patterns
generated UI constraints

Knowledge Reservoirs

authoritative source packets
doctrine retrieval
source-to-contract context
stale-context prevention

Settings

configurable surface rules / tenant design options where appropriate
but not runtime truth

Agent Work Protocol

retrieve context before action
cite/check against current source
do not rely on model memory
validate output against component/spec rules
Doctrine candidates
Agents should build from governed context, not latent memory.
The design system is a product-governance layer, not just a style guide.
Context engineering is required before agent execution.
MCP-like protocols are context/tool rails; they do not create authority by themselves.
Product surfaces should be generated or edited against authoritative component rules.
The agent may assemble; the design system constrains.
Net-new / sharpen / affirm
Net-new candidates

context_source_protocol
A governed protocol/rail for agents to retrieve authoritative instructions, components, policies, schemas, tools, and examples before acting.

design_system_as_agent_constraint
The design system becomes an executable constraint surface for agent-generated UI/code, not only human documentation.

Sharpen existing

Build-OS context engineering
Agents need doctrine/contracts/components supplied at runtime, not assumed from memory.

Surface Map
Screens and generated UI should be constrained by reusable surface/component rules.

Knowledge Reservoirs
Reservoirs supply current governed context to agents.

Agent Work Protocol
Adds a pre-action step: fetch authoritative context before producing output.

Affirm
context engineering matters
design systems improve consistency
agents need instructions and tools
MCP is useful as a standard context rail
agent output improves when grounded in current system rules
Reject / do not over-import
Do not make MCP itself doctrine.
Do not treat a design system as canonical business/clinical truth.
Do not assume context access equals authority to act.
Do not let agents generate production UI from memory alone.
Do not confuse visual consistency with workflow correctness.
Hard read

Small video, but clean Build-OS value.

The keeper is:

OMNI agents should not be asked to “build the UI” or “edit the system” from generic model memory. They should retrieve the current design system, domain contracts, surface rules, and workflow constraints, then generate inside those rails.

Shortest OMNI version:

MCP is not the point. The point is governed context delivery. OMNI needs agents that fetch actual instructions before work, rather than relying on what the model thinks the instructions probably are.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `TK` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Formalizes Knox Review 001 (priority 3.75/5; depth medium_semantic); does not re-derive.** Grounded vs §1 verbatim. Tier = **medium/vocabulary** (Knox depth: short explainer, one clean keeper). Two-axis reality-check: `doctrine` (vs thesis v3 §B + domain contracts + post-v3 layer: Agent-Work-Protocol, Manifest Read Graph, Build-OS `REV-158`, Surface/Projection Maps) + `build` (repo grep from `/Users/bloomfrontdesk1/Desktop/main-app` on 2026-07-07: `rg -i "design system|design[_-]token|\bMCP\b|model context protocol|context engineering|context_source|component registry"` app lib components scripts supabase middleware.ts → **0 hits**; broader inspect: `components/` has real React surfaces [`DynamicForm.tsx`, `dashboard/`, `account-shell/`, `internal/`] styled via `app/globals.css`, but **`components/ui` empty · no `components.json`/shadcn · no design-token registry · no MCP · no governed context-source rail · no agent-harness**; `lib/ai/` has domain chart-review context [`chartReviewContext.ts`, `governancePolicy.ts`] = a care-domain context assembler, NOT a general retrieve-before-act rail; Surface contracts exist as DOCS in `.cursor/plans/surfaces/` [`ops_command_center`, `intake_review_workspace`, etc.], not as coded design system). Binds nothing (`GRD-036`/`GRD-044`).

**HEADLINE VERDICT.** A **small, clean Build-OS / Surface-Map vocabulary source with ONE keeper and zero net-new frame**: *agents should build from governed system instructions retrieved at runtime, not from latent model memory* ("memorized instructions" vs "actual instructions"). This is the **constructive twin of `205`'s promptware caution** — 213 says *fetch the authoritative instructions you MUST obey*; 205 says *the untrusted world does NOT get to instruct you* — together they make **which content is allowed to instruct** (`content_authority_class`) a first-class boundary. The retrieve-before-act principle is **already OMNI doctrine** — the Agent-Work-Protocol boot loop, the Manifest Read Graph, and the AGENTS Boot Freshness Check *are* "context engineering" (OMNI already practices "fetch actual instructions before work"). **Do NOT make MCP doctrine** (`GRD-039` watch-not-worship: the rail is never the authority); **do NOT treat a design system as canonical business/clinical truth**; **do NOT confuse context access with authority to act** (AI proposes, domains commit). Knox proposes 2 primitives — on dedup both are **net-new NAMEs that compose existing mechanisms**, not net-new frame. Doctrine roll-up = AFFIRM/PARTIAL; the yield is a **doctrine-settled / build-gap** signal (design-system-as-governance-layer + governed context rail are largely uncoded). Convergent with **201** (generated-UI-as-coordination-surface; harness/context-as-assets), **202/208** (governed build loop; spec-as-agent-contract — the input side of the same loop), **210** (retrieve-context / coordinate / don't own truth), and **205** (content-authority boundary).

### A. Concept clusters (medium tier)

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **design system = reusable rules + components (a governance layer, not style polish)** | Product consistency encoded ONCE as reusable rules/components/tokens/terminology/role-tone/PHI-safe-display/status-badges/escalation-states — a product-governance layer, not per-screen recreation | Surface/Projection Maps · Design-System contract · Build-OS frontend rules · Patient/Provider/Admin surface specs | "a big set of rules and building blocks" [0:23]; "fonts, UI components, colors… spacing and layout" [0:38] | PARTIAL | partial | none | vocabulary | watch |
| 2 | **context engineering = teach the agent what it needs BEFORE it works** | Governed context assembly before execution: domain contracts, doctrine, surface rules, schema/naming, safety rules, authority boundaries, active-vs-stale decisions, non-goals — OMNI already does this via Manifest Read Graph + Agent-Work-Protocol boot loop | Build-OS (primary) · Agent-Work-Protocol · Manifest Read Graph · Knowledge-Reservoirs · CNS context-assembly | "context engineering is the way we teach an AI agent" [1:23]; "what it needs to know before it starts" [1:32] | AFFIRM | absent | none | spine | watch |
| 3 | **MCP = a standardized rail to expose governed context/tools to the agent** | Preserve the PATTERN (governed protocol access to context/tools), not MCP specifically: agents fetch design-tokens/contracts/schema/policy/skills via authoritative rails, not pasted blobs or hidden memory — the rail carries NO authority | §B AI-substrate (model/tool-pluggable) · Build-OS agent-workbench · Knowledge-Reservoirs · (cross-link `205` ai_gateway/tool-gateway) | "industry standard way of sharing that information to an AI" [1:45]; "easily consumed by the AI" [1:51] | PARTIAL | absent | tension (rail ≠ authority; `GRD-039` watch-not-worship) | vocabulary | watch |
| 4 | **"memorized instructions" vs "actual instructions" — check work against current governed source (Lego analogy) — THE keeper** | For clinical/business/product systems the agent MUST retrieve current contracts/design-tokens/surface/RBAC/policy and validate output against them, never build from latent model memory; extends beyond UI to clinical policy, D6 pricing/benefits, RBAC rules, Federation grants, consent, doc-style | Agent-Work-Protocol (fetch-before-act + Boot Freshness Check) · Build-OS · Manifest Read Graph · CNS · all domain contracts | "building the Lego set from memorized instructions" [3:05]; "MCP gives the actual instructions so… check its work" [3:13] | AFFIRM | absent | none | spine | watch |
| 5 | **design-system-MCP as a Build-OS context-delivery PATTERN (not a new domain)** | Each agent type gets a governed source of truth: frontend→design-system, contract→doctrine/registry, migration→schema, test→acceptance-criteria, copy→brand/tone, clinical→policy/authority, support→runbook — a context-delivery pattern, NOT an "AI agent" domain | Build-OS (primary) · Agent-Work-Protocol · Knowledge-Reservoirs · Settings (configurable surface rules, not runtime truth) | "give the agent a governed source of truth for how… built" [3:18 area]; "follow all of the rules for the design system" [2:40] | AFFIRM | absent | none | vocabulary | watch |
| 6 | **agentic AI = decide + use tools to get work done; but the agent ASSEMBLES, the design system CONSTRAINS** | AI may make decisions/use tools, yet output is bounded by authoritative component/spec rules; visual consistency ≠ workflow correctness; context access ≠ authority to commit | §B model-pluggable-at-substrate-not-care · thesis §1 AI-proposes law · `capability_envelope` · CNS commit-gate | "make decisions based on the information it has… use tools" [1:57]; "be certain that it's building things absolutely correctly" [2:58] | AFFIRM | partial | tension (other pole: agent decisioning/tool-use vs domains-commit-truth) | vocabulary | watch |

### B. Net-new primitives (dedup vs existing registry + wave-3 minted — **dedup-pending, Opus-main verifies**)
Knox Review 001 proposes 2 (`context_source_protocol`, `design_system_as_agent_constraint`). On dedup vs the run baseline (CNS/candidate≠commit · workflow_lane · capability_envelope · delegated_authority_envelope · non_human_actor · ai_model_registry · trace_lineage · context_packet · autonomy_level · source_authority · consent-specificity · projection≠truth · per-event-ownership · content_authority_class · ai_gateway · spec_as_agent_contract · tool_gateway_policy_enforcement · workload_identity_for_agents · context_token_nonpropagation + the rest) → **0 net-new mechanisms; 2 net-new NAMEs to sharpen:**

- `context_source_protocol` — a governed protocol/rail for agents to fetch authoritative instructions/components/policies/schemas/tools/examples BEFORE acting (the READ/pull side). **EXISTS-AS: net-new NAME only; mechanism = `context_packet` (assembly payload) + Agent-Work-Protocol §5/§6 fetch-before-act + Manifest Read Graph (which context to load) + Knowledge-Reservoirs retrieval; composes with wave-3 `tool_gateway_policy_enforcement` as its read-side complement.** Formalize as the *retrieval-rail schema* of the existing retrieve-before-act discipline; do NOT mint a new god-primitive, and (per `GRD-039`) the rail carries no authority. (dedup-pending, Opus-main verifies.)
- `design_system_as_agent_constraint` — the design system becomes an EXECUTABLE constraint surface for agent-generated UI/code (not only human documentation). **EXISTS-AS: net-new NAME; a Surface-Map / Design-System-contract candidate = surface/projection contracts + `generated_ui_as_agent_coordination_surface` (201) + `capability_envelope` applied to agent OUTPUT.** The one mildly-genuine addition (a constraint *target* for generated surfaces); reconcile into the Surface Map rather than minting a standalone mechanism. (dedup-pending, Opus-main verifies.)

Net-new count = **0 mechanisms** (2 net-new NAMEs to sharpen; both compose existing OMNI primitives). *(Also affirms/sharpens, not net-new: `agent_workbench`, Build-OS context-engineering, Knowledge-Reservoirs-supply-governed-context, Agent-Work-Protocol pre-action fetch — all EXISTS-AS prior.)*

### C. Reread flags
- **Metadata lifted, not verified against a screenshot** — §0/§0.1 taken verbatim from the Review-001 metadata block (`source_url`/`title`/`channel`/`speaker`/`published_at`). Confirm `speaker: Will Scott` + `published_at: Jun 14, 2026` if a screenshot arrives. Knox Review-001 `at:` timestamp = `TK`.
- **`build` reads target OMNI's own substrate, not app features** — "build=partial" on cluster-1 means React surfaces exist but no *formalized* design system/token registry; "build=absent" on clusters 2/4/5 means OMNI has no coded governed context-source rail or agent-harness (the *doctrine* — Manifest Read Graph / Agent-Work-Protocol — exists; the *runtime rail* does not).
- **★ Cross-link to `205` (carry into fold):** cluster-3/4 fetched context is exactly what `205`'s `content_authority_class`/`infected_memory_risk` governs — instructions you MUST retrieve (213) vs content that must NOT be allowed to instruct (205) are two sides of one boundary. 213 is the constructive pole; ensure fetched context is itself authority-tagged (a design-system rail can be poisoned too).
- **Tensions to Tension Register (mild):** cluster-3 (rail ≠ authority; `GRD-039`) and cluster-6 (agent decision/tool-use vs domains-commit-truth) — both resolved by existing law (context/read access ≠ commit authority; `capability_envelope` + CNS commit-gate + AI-proposes/domains-commit). Tension, not conflict.

### D. One-line hard read + strongest OMNI line
**Hard read:** a small **Build-OS / Surface-Map vocabulary source with one durable keeper and zero net-new frame** — *OMNI agents must retrieve the current design system, domain contracts, surface rules, and workflow constraints and generate INSIDE those rails, never build the UI/edit the system from generic model memory*; import "design-system-as-governance-layer," "context engineering = fetch-before-act," and "check work against actual (not memorized) instructions" as **Build-OS + Surface-Map + Agent-Work-Protocol vocabulary**, reject MCP-as-doctrine and design-system-as-truth, keep both proposed primitives as composed NAMEs, and treat the residue as **doctrine-settled / build-gap** (the read-graph/fetch-before-act discipline is already OMNI; the coded context rail + formal design system are not). Not spine; a clean AFFIRM + build signal.

**Strongest OMNI line:** *"MCP gives the actual instructions so that the AI agents can check its work"* [3:13] — for OMNI this is non-optional: agents fetch and validate against **current governed contracts / design-system / surface rules / RBAC / policy**, not latent model memory. Knox's shortest version nails it: *"MCP is not the point. The point is governed context delivery."*

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `Build-OS (MAJOR — context-engineering / fetch-before-act / agent-workbench context assembly) · Surface/Projection Maps + Design-System contract (MAJOR — design-system-as-governance-layer + design_system_as_agent_constraint) · Agent-Work-Protocol + Manifest Read Graph (MAJOR — pre-action fetch-authoritative-context; retrieve-not-memory) · Knowledge-Reservoirs (medium — reservoirs supply governed context) · §B AI-substrate (medium — MCP-like context/tool rails, model/tool-pluggable) · §C security (minor — cross-link 205 content_authority_class on fetched context) · Settings (minor — configurable surface rules, not runtime truth)` · promotion: `watch` (Build-OS/Surface-Map/Agent-Work-Protocol import-vocabulary; 0 net-new mechanisms [2 net-new NAMEs to sharpen]; 2 mild tensions resolved by existing law → Tension Register; doctrine-settled/build-gap signal)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — transcript (§1) + Knox Review 001 pasted (Nick); §0/§0.1 metadata LIFTED from Review-001 metadata block (`source_platform`/`source_url`/`source_title`/`channel_or_org: IBM Technology`/`speaker: Will Scott`/`published_at: Jun 14, 2026`/`content_type`/`source_reliability_context: vendor`); slug proposed `bridging-design-systems-code-mcp-ai-agents` (file NOT renamed — Opus-main folds); §3 Review 003 written (Opus; **medium/vocabulary tier, 6 clusters, 0 net-new mechanisms** [2 net-new NAMEs: `context_source_protocol`, `design_system_as_agent_constraint`], 2 mild tensions, two-axis reality-check w/ repo grep = 0 hits); §4 filled; status `raw_dropped` → `analyzed`. Registry/coverage/anchor fold deferred to Opus-main.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.
