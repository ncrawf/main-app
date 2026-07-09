# EVSRC-2026-000211 — Kagenti's Approach to Multi-Agent Security for AI Agents

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000211_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000211`  ·  filename (proposed slug; file NOT renamed): `EVSRC-2026-000211_kagenti-multi-agent-security-confused-deputy.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=4vfvvzzwcwI`  ·  source_title: `Kagenti's Approach to Multi-Agent Security for AI Agents`
- channel_or_org: `IBM Technology and Red Hat`  ·  speaker: `Legare Kerrison`  ·  published_at: `Jun 16, 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `screenshot + pasted transcript`
- content_type: `multi-agent security / confused deputy / workload identity / delegation chain / SPIFFE / OAuth2 client registration / tool gateway / MCP gateway / mTLS / OpenTelemetry tracing`  ·  source_reliability_context: `vendor + security-researcher — IBM/Red Hat technical security explainer; high relevance to OMNI non-human-actor, chain-aware authorization, tool-gateway doctrine. Kagenti/SPIFFE/Keycloak/Istio specifics = implementation examples, not mandatory architecture.`  ·  topic_tags_light: `[confused_deputy, delegation_chain_authorization, context_token_nonpropagation, workload_identity, SPIFFE, OAuth2_client, Keycloak, AuthBridge, MCP_gateway, tool_gateway_policy_enforcement, mTLS, OpenTelemetry, chain_aware_RBAC, non_human_actor]`
- priority: `4.75/5`  ·  depth: `full_semantic`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Legare Kerrison` · role_in_source: `presenter` · affiliation_at_publication: `IBM Technology / Red Hat` · speaker_type: `vendor` (technical explainer / developer advocate) · authority_context: `IBM/Red Hat technical security explainer on Kagenti, an open-source multi-agent security platform` · identity_confidence: `high_from_screenshot`
- publisher / channel: `IBM Technology and Red Hat`  ·  interviewer / moderator / host: `n/a (single-presenter explainer)`
- event_context: `IBM Technology YouTube explainer (published Jun 16, 2026) on the Kagenti platform's security pillar — confused-deputy defense for multi-agent systems`  ·  perspective / conflict notes: `Vendor-positioned: promotes Kagenti + the SPIFFE/Keycloak/Istio/OpenTelemetry stack. Doctrine (chain-aware authz, workload identity, tool gateway, context≠credential) is durable; the specific open-source component choices are illustrative, not mandatory (per Knox: do not make Kagenti/SPIFFE/Keycloak/Istio OMNI doctrine).`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [~] update EVRUN concept registry (cross-source) — fold packet returned; registry edit deferred to Opus-main (not editing registry this pass per task contract) · [~] update coverage matrix — deferred to Opus-main · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
Today, we're going to look at how to use open source security logic
0:03
at the infrastructure level to combat a common security problem when running multiple AI agents in production.
0:11
Ever heard of a confused deputy security vulnerability?
0:16
A confused deputy is when an agent with completely legitimate authority
0:20
is tricked into using that authority for a request that shouldn't have it, and this can to invisible data breaches.
0:33
Malicious tool calls.
0:40
And prompt injection.
0:47
This is a huge deal.
0:49
Protected information like patient records, financial histories, or internal communications
0:54
could be stolen with audit trails that show nothing but normal authorized activity.
1:00
And without the right security for a multi-agent system, you might end up with at least one confused deputy running around.
1:06
The project we will use to combat this is called Kagenti.
1:11
Kagenti allows you to bring your own agent regardless of what framework you used to build it.
1:19
And then it adds the security layer around it.
1:23
Kagenti can retrieve your source code from GitHub or deploy directly from a
1:27
container image you might have running locally and then adds that security infra.
1:31
The platform has four pillars, lifestyle orchestration, networking, security and observability.
1:39
Today, we're going to be focused on the security pillar because that's where this confused deputy problem gets solved.
1:46
Here's a confused deputy scenario showing credential leakage that can occur with security at the application level.
1:53
A hospital has an agentic system.
1:57
It's for patient billing.
1:59
And they grant a bearer token to this orchestrating agent.
2:05
Now, this bear token is going to grant access to the hospital's patient data.
2:12
And as agent A orchestrates the task, it's going to call subagents to help,
2:20
agents B, C, and D.
2:32
Now, Agent D gets the task to verify if the patient has insurance, but it also
2:39
gets this access token because it's sitting in the context or has been passed the chain.
2:50
Now, agent D was never supposed to have access to patient records.
2:54
It was just verifying if it had insurance, but it now does have that access because the token traveled with the request.
3:03
Now that's a confused deputy, and here's what makes them so hard to combat in agentic system specifically.
3:10
In a traditional application, you have a defined call graph.
3:14
You can say, this service goes to this service, and you can bake that into your network, and segment, and you're done.
3:22
Agents don't work that way.
3:24
The value of an agent is that it decides what to do next.
3:28
You can't statically guarantee the path a request will take.
3:33
You can't bake authorization into this topology.
3:36
So what do you do?
3:37
You stop trying to secure the path and you start trying to security the identity.
3:44
When you deploy an agent via Kagenti, two side cars are deployed along with your agent.
3:57
The first is SPIFFE.
4:02
This stands for Secure Production Identity Framework for Everyone.
4:09
What it actually does is give your agent a cryptographic workload identity,
4:15
an X.509 certificate called a SPIFFE Verifiable Identity Document.
4:21
This is not a username or a password.
4:25
It's not a static API key that someone can copy and paste out of your context and reuse for years.
4:31
It's a short-lived certificate tied to this specific workload in this specific namespace on this specific service account.
4:39
And your agent proves who it is the same way a server on the internet
4:44
proves it's actually your bank with a cert and not a secret.
4:48
Now, the second is the Kagenti client registration.
4:59
And what this does is register the agent as an OAuth2 client in KeyCloak.
5:05
KeyClock is an open source identity and access management solution.
5:09
So it can, so that your agent can request limited tokens for specific tools.
5:15
Okay, now here is where we solve the confused deputy problem.
5:20
Remember agent A and D?
5:23
It was never supposed to touch these patient records,
5:28
but it got the access token passed through it via the context.
5:33
So, Kagenti ships a component called authbridge.
5:38
And every time an agent makes a call, authbridge
5:47
injects a header.
5:53
And this header doesn't just say, this is agent D,
5:56
it says, this agent D called by agent A on behalf of this specific user, and it has the full chain in order cryptographically signed.
6:08
Now, when the request arrives at the patient record tool,
6:12
or the gateway in front of it, you can check whether every actor and the entire chain is authorized for this resource.
6:21
If Agent D should never touch patient data,
6:24
the policy fires and it's blocked, regardless of whether Agent D holds a valid token that it received via the chain.
6:33
And that's the fix.
6:34
The authorization decision is made against the full delegation chain.
6:38
You could not do this with traditional RBAC role-based access control because you need to know the path ahead of time.
6:46
Whereas this approach works precisely because the identity travels with the request.
6:51
From a developer experience standpoint, AuthBridge handles three things at deploy time.
6:57
So fetching and rotating that SPIFFE identity, registering the OAuth2 client in KeyCloak, and standing up in InvoidProxy.
7:12
That validates inbound tokens before your agent code ever sees the request and your agent container is untouched.
7:20
Now on the tool side, the MCP gateway sits in front of your tools like this patient access tool and every tool call goes through it.
7:33
It handles routing, rate limiting and token validation all in one place.
7:38
Swapping out a tool is one URL change Connecting all of this is Istio in ambient mode,
7:44
which handles encrypted, mutually authenticated networking between
7:48
every agent and every tool with no additional configuration request per pod.
7:54
Now, because all of these runs over standard HTTP, OpenTelemetry instruments it automatically.
8:00
You can get a single trace ID that follows the entire request path.
8:06
Kagenti ships with Phoenix for end-to-end agent tracing and MLflow for experiment tracking.
8:11
So when something goes wrong, you can see what happened and who authorized it.
8:16
Every component in this stack is open source, Apache licensed and wired together via Kagenti.
8:22
If you're building a multi-agent system and this hits close to home, drop me your setup in the comments.
8:28
I wanna know what you're working with.
8:29
And if this was helpful, please like and subscribe.
8:32
Thanks so much.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️


IBM / Red Hat — Kagenti Multi-Agent Security

source_platform: YouTube
source_url: https://www.youtube.com/watch?v=4vfvvzzwcwI
source_title: Kagenti’s Approach to Multi-Agent Security for AI Agents
channel_or_org: IBM Technology and Red Hat
speaker: Legare Kerrison
published_at: Jun 16, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: screenshot + pasted transcript
content_type: multi-agent security / confused deputy / workload identity / delegation chain / SPIFFE / OAuth2 client registration / tool gateway / MCP gateway / mTLS / OpenTelemetry tracing
source_reliability_context: IBM/Red Hat technical security explainer. High relevance to OMNI’s non-human actor, chain-aware authorization, and tool-gateway doctrine. Specific Kagenti/SPIFFE/Keycloak/Istio details are implementation examples, not mandatory architecture.
priority: 4.75/5
depth: full_semantic
recommended_status: route to RBAC, Identity, Federation, §C Security, AI Gateway, MCP-tool gateway, CNS, Build-OS, agent runtime security.

Topic tags:
[confused_deputy, delegation_chain_authorization, context_token_nonpropagation, workload_identity, SPIFFE, OAuth2_client, Keycloak, AuthBridge, MCP_gateway, tool_gateway_policy_enforcement, mTLS, OpenTelemetry, chain_aware_RBAC, non_human_actor]


Priority: 4.75/5
Depth: full semantic
Recommended status: route to RBAC / Identity / Federation / §C Security / AI Gateway / MCP-tool gateway / CNS / Build-OS / agent runtime security. This is a spine-grade security affirmer for OMNI’s non-human actor + delegation-chain doctrine.

Core takeaway

This source is about the confused deputy problem in multi-agent systems:

An agent with legitimate authority can be tricked into using that authority for a request that should not have it.

The example is perfect for OMNI: a hospital billing orchestrator has a patient-record token; it calls subagents; one subagent that only needed to verify insurance accidentally receives patient-record access because the token traveled through context.

OMNI translation:

Never pass authority through context. Authority must be resolved against identity, delegation chain, user, workload, tool, resource, and action at call time.

This is extremely relevant.

Key concepts to preserve
1. Confused deputy

A confused deputy occurs when an authorized actor is tricked into using its authority for someone else’s unauthorized goal.

OMNI keeper: in agent systems, the audit trail may look “authorized” because a real agent made the call. The breach is invisible unless authorization checks the delegation chain, not just the final caller.

Doctrine candidate:

Authorized activity can still be unauthorized delegation.

2. Token leakage through context

The hospital example is the exact anti-pattern: bearer token travels with the request/context, so a downstream agent receives access it was never supposed to have.

OMNI keeper:

Context is not a credential transport.

This should become a hard rule. Patient context packets, tool prompts, agent memory, MCP calls, and subagent task descriptions must never carry reusable authority tokens.

3. Dynamic call graphs break topology-based security

Traditional services have predictable call graphs. Agents do not. The value of an agent is that it decides what to do next, so you cannot secure the system by assuming a static path.

OMNI keeper:

Secure identity and delegation, not the assumed path.

This lands directly in OMNI because CNS/agents will route dynamically across domains and tools.

4. Workload identity

The video uses SPIFFE as the example: a short-lived cryptographic workload identity tied to a specific workload, namespace, and service account.

OMNI keeper: non-human actors need cryptographic identities, not copied secrets.

This sharpens:

system_actor
agent_identity
workload_identity
device_actor
external_system_actor
AI_author_grant
5. OAuth client registration for agents

Agents are registered as OAuth2 clients so they can request limited tokens for specific tools.

OMNI keeper: agents should request scoped tokens per action/tool, not carry broad ambient credentials.

6. Full delegation chain authorization

This is the central gem.

The AuthBridge header says:

this is Agent D, called by Agent A, on behalf of this specific user

and the full chain is cryptographically signed.

Then the patient-record tool/gateway checks whether every actor in the chain is authorized for the resource. If Agent D should not touch patient data, the request is blocked even if it has a valid token.

OMNI keeper:

Authorization must evaluate the full chain, not merely the bearer token or final caller.

This is exactly what OMNI’s RBAC/Federation/Identity composition needs.

7. Tool gateway

The MCP gateway sits in front of tools and handles routing, rate limiting, and token validation.

OMNI keeper: tools should not be exposed directly to agents. Tool calls need a policy gateway.

This maps to:

AI Gateway
MCP gateway
Tool Invocation Policy
RBAC resolver
Federation permeability check
audit event emission
8. Mutual TLS + traceability

Istio/mTLS handles encrypted, mutually authenticated networking, and OpenTelemetry provides a trace ID across the request path.

OMNI keeper: agent actions need end-to-end traceability across identity, delegation, policy, tool call, and result.

This directly supports:

trace_lineage
audit events
REV-184 resolution lifecycle
Polaris proof surface
agent runtime observability
OMNI translation

This is one of the clearest sources so far for agent authority plumbing.

For OMNI, the correct model is:

human/user/principal → delegated agent → subagent → tool gateway → owning domain

At each step:

who is the actor?
who is the represented principal?
who called whom?
what tool/resource is requested?
what action is requested?
what patient/operator/site/tenant boundary applies?
what consent/grant exists?
what RBAC atom permits it?
what Federation permeability applies?
what domain owns the commit?

The model cannot decide this. The token cannot imply this. The final agent identity alone cannot prove this.

The chain must be evaluated.

Likely OMNI landing zones

RBAC

chain-aware authorization
per-action resolver
non-human actor grants
delegation envelope
tool-specific tokens
consent-gate composition

Identity

workload identity
agent identity
represented principal
service-account identity
device/system actor identity

Federation

cross-operator delegation
shared_context_grant
partner/tool boundary
agent access across tenant/operator seams

§C Security / AI Gateway

confused deputy defense
token non-propagation
MCP/tool gateway
mTLS / workload identity
chain audit

CNS

agent orchestration must not imply authority
resolver must call authorization before tool/action
candidate generation separated from domain commit

Build-OS

build agents also need chain-aware repo/tool access
no repo secrets in prompts
tool calls through gateway, not context-passed credentials
Doctrine candidates
Context is not a credential transport.
Secure the identity chain, not the predicted path.
Authorization must evaluate the full delegation chain.
A valid token is not sufficient if the delegation path is invalid.
Agents need workload identity, scoped tokens, and tool gateways.
Confused deputy defense is mandatory for multi-agent systems touching PHI, money, identity, or code.
Tool access must be mediated at infrastructure level, not trusted to agent prompt discipline.
Authorized-looking activity can still be unauthorized delegation.
Net-new / sharpen / affirm
Net-new candidates

delegation_chain_authorization
Authorization decision evaluates every actor in the chain: user/principal, orchestrator agent, subagent, tool, resource, action, and ownership boundary.

context_token_nonpropagation
Hard rule that credentials/tokens must not travel in prompts, task context, agent memory, or subagent handoffs.

workload_identity_for_agents
Each agent/tool workload has short-lived cryptographic identity, not static copied credentials.

tool_gateway_policy_enforcement
All agent tool calls pass through a gateway that validates identity, token, rate, policy, delegation chain, and audit.

Sharpen existing

RBAC / Authority contract
This sharpens the 4-way authority composition: actor capability alone is not enough; delegation chain and resource boundary matter.

non_human_actor
Agents are real actors, not just software functions.

Federation permeability
Cross-operator or cross-tool action must evaluate the whole chain.

trace_lineage
Trace must include who acted, on whose behalf, through which agent/tool path.

promptware / indirect injection
Prompt injection becomes dangerous when it can trick a valid deputy into using real authority.

Affirm
agent systems cannot rely on static call graphs
bearer tokens in context are dangerous
infrastructure-level enforcement beats app-level prompt discipline
tool calls need gateways
agent actions need signed/auditable lineage
patient data access requires chain-aware gates
Reject / do not over-import
Do not make Kagenti itself doctrine.
Do not assume SPIFFE/Keycloak/Istio are mandatory implementation choices.
Do not say traditional RBAC is useless; OMNI’s RBAC must be chain-aware and composed with Identity/Federation/consent/domain authority.
Do not let MCP tools be callable directly from prompts without gateway mediation.
Do not treat a valid token as proof of valid authorization.
Do not solve this only at application layer.
Hard read

This is high-value OMNI security substrate.

The patient-record example is basically the OMNI risk case in miniature: a legitimate orchestrator, downstream subagents, patient data, invisible token leakage, and audit logs that appear normal.

Shortest OMNI version:

OMNI must not authorize agent actions by “does this agent have a token?” It must authorize by “is this full delegation chain allowed to perform this action on this resource for this patient/operator, under this consent/grant, through this tool, right now?”

This belongs very close to RBAC/Federation/Identity and the AI Gateway.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (extraction subagent) · type: `AI assistant` · at: `2026-07-07` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Tier: `full_semantic` (Knox depth) → FULL cluster table.** Formalizes Review 001 (Knox), verified against §1 verbatim + the repo grep — does not re-derive.

#### HEADLINE VERDICT
**SPINE — the missing authorization-plumbing leg of OMNI's §A trust axis.** This is the sharpest single source in wave-3 for *how* OMNI must authorize non-human actors. Its core law — **authorize the full, signed delegation chain against identity·workload·user·tool·resource·action at call time; never trust a token that traveled through context** — is not a new frame; it is the concrete enforcement mechanism for what §A (Identity·RBAC·Federation·D7·CNS-Meta compose; no god-domain) already asserts in principle. The "hospital billing orchestrator leaks a patient-record token to an insurance-verify subagent" scenario **is the OMNI risk case in miniature** (PHI + agents + invisible token leakage + audit that looks normal). Doctrine is largely AFFIRM/PARTIAL (§A actors + 205 promptware exist; chain-aware authorization, cryptographic workload identity, and a tool-invocation gateway are ABSENT-as-named); **build is absent** (grep: no `confused_deputy`/`delegation_chain`/`workload_identity`/`SPIFFE`/tool-gateway/`mTLS`/chain-aware anything; `lib/auth/capabilities.ts` is a flat capability check, `system_actor` exists only as an audit/timeline label). Zero direct conflicts — the source AFFIRMs OMNI and hands it four enforcement primitives. **Do NOT import Kagenti/SPIFFE/Keycloak/Istio as doctrine** — they are illustrative components; the durable content is the four laws below. Convergence: this is the AUTHORIZATION-failure twin of 205's promptware ATTACK (injection is *how* a deputy gets confused), the enforcement leg of 203's NHI-explosion, and the concrete plumbing under 201's "long-running-agent identity + containment≠authority."

#### A. CONCEPT CLUSTERS

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Confused deputy (the named threat class) | An actor with legitimate authority is tricked into exercising it for a request it should not serve; the audit trail looks "authorized" because a real actor made the call. OMNI keeper: **authorized-looking activity can still be unauthorized delegation.** | §C Security (spine) · RBAC · Identity · §A trust-axis · CNS · Knowledge-Reservoirs (audit-legibility) | "agent…tricked into using that authority for a request that shouldn't have it" [0:16-0:20] | PARTIAL (205 names the injection vector + §A names actors, but "confused deputy" as a named authorization failure mode is ABSENT-as-named) | absent | none | spine | promote |
| 2 | Context is not a credential transport | Tokens/credentials must NEVER travel in prompts, task context, agent memory, MCP payloads, or subagent handoffs; a downstream actor that only needed insurance-verify inherits patient-record access because the bearer token rode the context. Hard rule. | §C Security (spine) · CNS `context_packet` · RBAC · Identity · Knowledge-Reservoirs · Messaging/Intake · D7 | "it also gets this access token because it's sitting in the context" [2:32-2:50] | PARTIAL→ABSENT (extends 205 instruction/data `content_authority_class` to a credential/data boundary; not yet a stated OMNI rule) | absent | none | spine | promote |
| 3 | Dynamic call graphs break topology security → secure identity, not path | An agent's value is deciding what to do next, so the request path can't be statically guaranteed; network segmentation / baked-in call graphs fail. Authorize **identity + delegation**, not an assumed topology. | CNS (dynamic candidate→resolver routing) · RBAC · §C · §A | "You can't statically guarantee the path a request will take" [3:28-3:33] | AFFIRM (CNS is exactly runtime dynamic routing; matches "agent decides next") | absent | none | spine | promote |
| 4 | Workload identity (cryptographic · short-lived · attested) | Each non-human actor/workload proves identity with a short-lived cryptographic credential (SPIFFE X.509 SVID) tied to workload/namespace/service-account — NOT a copyable static API key or secret sitting in context. | §A Identity (spine) · `non_human_actor`/`agent_identity` · RBAC · §C | "short-lived certificate tied to this specific workload…namespace…service account" [4:31-4:39] | PARTIAL (§A `non_human_actor`/`represented_principal` exist; the cryptographic-attestation + short-lived + non-copyable dimension is ABSENT-as-named) | absent (`system_actor` is only an audit label, no crypto identity) | none | spine | promote |
| 5 | OAuth2 client registration → scoped per-tool/per-action tokens | Agents register as clients and request *limited* tokens for *specific* tools, rather than carrying one broad ambient credential. | RBAC `capability_envelope` · `autonomy_level` · Identity · §C | "request limited tokens for specific tools" [5:09-5:15] | AFFIRM (= `capability_envelope` + scoped authority; per-action resolver) | partial (`lib/auth/capabilities.ts` = scoped capability checks; no agent token issuance) | none | vocabulary | watch |
| 6 | Full delegation-chain authorization (the central gem) | Authorization evaluates EVERY actor in a cryptographically-signed chain — "Agent D, called by Agent A, on behalf of this user" → user/principal · orchestrator · subagent · tool · resource · action · tenant/patient boundary · consent/grant · RBAC atom · Federation permeability · owning domain. **A valid token is insufficient if the delegation path is unauthorized.** | RBAC resolver (spine) · Identity · Federation permeability · §A `delegation_chain` · CNS · §C | "authorization decision is made against the full delegation chain" [6:34-6:38] | PARTIAL (§A `delegation_chain` object exists; the chain-*evaluating* resolver policy is ABSENT-as-named — traditional flat RBAC can't do it) | absent (`capabilities.ts` checks final caller only, not chain) | none | spine | promote |
| 7 | Tool-invocation gateway (MCP gateway) — mandatory mediation | Tools are never exposed directly to agents; every tool call passes a policy gateway doing routing, rate-limiting, token validation, chain-aware authorization, and audit emission ("swapping a tool = one URL change"). | §C AI/tool-gateway · RBAC resolver · CNS (resolver calls authz before tool/action) · Federation · audit events | "the MCP gateway sits in front of your tools…every tool call goes through it" [7:20-7:33] | PARTIAL (205 `ai_gateway`/`prompt_firewall` is the inbound-prompt twin; the outbound tool-invocation gateway is a distinct enforcement surface, ABSENT-as-named) | absent | none | spine | promote |
| 8 | Mutual-TLS + end-to-end signed trace | Encrypted, mutually-authenticated transport between every agent and tool (Istio ambient) + a single trace ID that follows the whole request path (OpenTelemetry) → "see what happened and who authorized it." | CNS §11 `trace_lineage` · audit events · §C · REV-184 resolution lifecycle · Polaris proof surface | "a single trace ID that follows the entire request path" [8:00-8:06] | AFFIRM (`trace_lineage` + audit events already doctrine) | partial (audit events + patient timeline exist; no single agent-path trace ID / mTLS) | none | vocabulary | watch |

#### B. NET-NEW PRIMITIVES  *(dedup-pending, Opus-main verifies — several likely EXIST-AS §A trust-axis primitives per operator note)*

1. **`context_token_nonpropagation`** — hard guardrail: credentials/authority tokens must never ride prompts, task context, agent memory, MCP payloads, or subagent handoffs; authority is resolved at call time, not transported. — **EXISTS-AS: net-new guardrail (strongest genuine net-new of 211; safety-bearing).** Composes with CNS `context_packet` + §A + 205 `content_authority_class`/`instruction_data_boundary` (extends the instruction-vs-data boundary to a **credential-vs-data** boundary). Not a re-mint — 205 covers *instructions* in context, this covers *credentials* in context.
2. **`chain_aware_authorization`** (= Knox `delegation_chain_authorization`) — resolver policy: the authorization decision evaluates every actor in the signed delegation chain against resource/action/boundary/consent, not just the final caller's token. — **EXISTS-AS: sharpens §A `delegation_chain` (the object) + RBAC resolver composition; the *chain-evaluating decision* is net-new-as-mechanism.** ⚑ Likely collapses partly into the §A trust-axis contract when authored — flag for Opus-main: mint as a resolver *policy* on top of existing `delegation_chain`, NOT a new actor primitive.
3. **`workload_identity`** — non-human actors carry short-lived, cryptographically-attested workload identities (bound to workload/namespace/account), not copyable static secrets. — **EXISTS-AS: sharpens §A `non_human_actor`/`agent_identity` with a CREDENTIAL/attestation dimension (like `crypto_agility_policy` sharpened §C).** ⚑ Flag: may fold into `agent_identity` as an attribute rather than a standalone primitive — Opus-main verifies against 201's `delegated_autopilot_identity`=EXISTS-AS ruling and 203's NHI-explosion.
4. **`tool_invocation_gateway`** (= Knox `tool_gateway_policy_enforcement`) — mandatory mediation POINT in front of every tool that validates identity/token/rate/chain-authz and emits audit; tools never callable directly by agents/prompts. — **EXISTS-AS: net-new enforcement SURFACE, distinct from 205 `ai_gateway`/`prompt_firewall` (inbound-prompt-facing) and from the *policy* `capability_envelope` (which the gateway enforces).** ⚑ Flag: the 205 dedup REJECTED `tool_invocation_policy` (= `capability_envelope`+`autonomy_level`); this is the *gateway/enforcement-point*, not the policy — Opus-main decides whether it merges into `ai_gateway` as an "outbound/tool" mode or stays separate.

**Re-mint REJECTS (already exist — do NOT mint):** `confused_deputy` scenario → routes as a threat class under §C, not a primitive · `delegation_chain` → §A (exists) · `non_human_actor`/`represented_principal` → §A (exists) · `trace_lineage` → CNS §11 (exists) · `ai_gateway`/`prompt_firewall` → minted by 205 · SPIFFE/Keycloak/Istio/OAuth2/AuthBridge/MLflow/Phoenix → implementation examples, NOT OMNI primitives (Knox: do not make Kagenti doctrine).

#### C. REREAD FLAGS
- **§A trust-axis contract authoring:** when the §A Identity/RBAC/Federation composition contract is written, reconcile whether `chain_aware_authorization` + `workload_identity` are standalone primitives or attributes/policies on existing `delegation_chain`/`agent_identity`. Operator note is explicit: several 211 candidates likely EXIST-AS §A — resist over-minting (`GRD-026`/`GRD-035`).
- **`tool_invocation_gateway` vs 205 `ai_gateway`:** decide one unified gateway (inbound-prompt + outbound-tool modes) vs two surfaces. 211's is outbound (tool-call authz), 205's is inbound (prompt firewall). Same enforcement philosophy, different traffic direction.
- **205↔211 pairing (must co-route):** promptware (205) is the *attack* that CONFUSES a legitimate deputy; confused-deputy (211) is the *authorization failure* it exploits. Route them together in §C as attack↔enforcement pair; `context_token_nonpropagation` (211) is the credential-boundary sibling of `content_authority_class` (205).
- **203/201 convergence:** `workload_identity` is the concrete mechanism for 203's NHI-explosion governance and 201's "identity + containment before autonomy." Verify these three do not each mint overlapping identity primitives.
- **`capabilities.ts` gap:** the built RBAC is a flat final-caller capability check — chain-aware authorization is a genuine build extension (route to Build-OS/C5, not re-plan).

#### D. ONE-LINE HARD READ
OMNI must never authorize an agent action by "does this agent hold a token?" — it must authorize by "is this **full, signed delegation chain** allowed to perform **this action** on **this resource** for **this patient/operator**, under **this consent/grant**, through **this tool**, right now?" — and a credential must never be something the context can carry.

**Strongest OMNI line (verbatim):** *"The authorization decision is made against the full delegation chain… You could not do this with traditional RBAC… because you need to know the path ahead of time… this approach works precisely because the identity travels with the request."* [6:34-6:51]

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `§A trust-axis (MAJOR — Identity/RBAC/Federation composition: chain-aware authorization + workload identity) · §C Security (MAJOR — confused-deputy defense, tool-invocation gateway, context≠credential; pairs w/ 205 promptware) · CNS (medium — dynamic routing must not imply authority; resolver calls authz before tool/action) · trace_lineage/audit (medium — signed end-to-end lineage; REV-184/Polaris) · Build-OS (medium — build/repo agents also need chain-aware tool access, no secrets in prompts) · domain-contracts Identity/RBAC/Federation (chain-aware resolver is a build extension of flat capabilities.ts)` · promotion: `watch` (proposes only — 4 net-new dedup-pending Opus-main; `GRD-036` promotion-gated)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — §0/§0.1 metadata lifted verbatim from Review-001 block (IBM Technology + Red Hat · Legare Kerrison · Jun 16 2026 · Kagenti multi-agent security · url v=4vfvvzzwcwI); proposed filename slug `kagenti-multi-agent-security-confused-deputy` (file NOT renamed). §3 Review 003 authored (full_semantic tier → full 8-cluster table + 4 net-new dedup-pending + reread flags + hard read). §4 pointers filled (EVRUN-2026-000003; impact §A/§C/CNS/trace/Build-OS; promotion=watch). §0.5 ticked. Status flipped `raw_dropped`→`analyzed`. Registry/coverage/anchor NOT edited (fold packet returned to Opus-main).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.
