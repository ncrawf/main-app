# EVSRC-2026-000259 — <title or TK>

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed` (Review 003 written 2026-07-11; folded to `EVRUN-2026-000005`; 0 net-new + 3 sharpenings; propose-only)**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Wave-4 scaffold (created 2026-07-11). Register/run: see `../../00_index.md` (wave-4). EVRUN to open at processing = `EVRUN-2026-000005` (or fold into wave-3 per operator).
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — AS-IS) + optional gut note (§3 Review 002). Then Opus writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry**, coverage matrix, and fills **§4 pointers** at closeout. Deep read lives HERE in §3 — never a sidecar (`GRD-044`).

## §0 — Source identity / metadata  *(normalized by Opus from Knox §3 rough-metadata + transcript)*
- evsrc_id: `EVSRC-2026-000259`  ·  filename: `EVSRC-2026-000259_nemoclaw-dcode-governed-runtime-blueprint.md` *(renamed from `_TK` 2026-07-11 wave-close)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=_iGxqQ2J2hc`  ·  source_title: `NemoClaw + dcode: A governed blueprint for AI coding agents`
- channel_or_org: `LangChain`  ·  speaker: `not clearly identified (LangChain demo)`  ·  published_at: `~2026-07-08`
- captured_at: `2026-07-11`  ·  captured_by: `Nick`  ·  capture_method: `transcript paste + screenshot`
- content_type: `first-party vendor governed-runtime demo (sandbox/policy-tiers/approval-gates/audit/verification)`  ·  source_reliability_context: `vendor implementation demo — strong for the deployment pattern + mechanics; promotional + incomplete as a general security/governance model; not proven healthcare-grade`  ·  topic_tags_light: `[governed_sandbox, coding_agent, runtime_policy, approval_gate, audit_logs, resource_profile, policy_tier, independent_verification, OpenShell, NemoClaw, dcode]`

## §0.1 — People / authorship / authority context
- primary speaker(s):
  - name: `TK (LangChain presenter)` · role_in_source: `presenter` · affiliation_at_publication: `LangChain` · speaker_type: `vendor practitioner` · authority_context: `implementation authority (provisioning/policy/approvals/verification/logs); does not establish healthcare-grade isolation guarantees` · identity_confidence: `low (not named)`
- publisher / channel: `LangChain`  ·  interviewer / moderator / host: `n/a (demo)`
- event_context: `dcode inside NVIDIA NemoClaw-managed OpenShell sandbox, Nemotron via Baseten — the production-runtime + policy-enforcement layer of the 256/258 cluster`  ·  perspective / conflict notes: `first-party vendor; NemoClaw/OpenShell/dcode/Nemotron/Baseten = named rails, not OMNI commitments`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it, but every claim still routes through evidence → interpretation → gated promotion.

## §0.5 — Processing checklist
**Nick drops:** [ ] transcript → §1 · [ ] screenshot in chat · [ ] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [ ] id+filename · [ ] §0 metadata from screenshot · [ ] takes labeled · [ ] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) · [ ] update coverage matrix · [ ] **fill §4 pointers (closeout)** · [ ] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

n this video



Chapters

Transcript
Search in video
dcode running inside a governed sandbox
0:00
Today, I'm going to show you how to write code with LangChain Deep Agents Code, or dcode,
0:06
inside a governed NemoClaw OpenShell sandbox.
0:09
The flow is simple.
0:10
You write code using dcode, a terminal-based coding agent.
0:14
Dcode uses Nemotron 3 Ultra, served from Baseten, through an OpenAI-compatible endpoint.
0:20
And then the agent runs inside a NemoClaw-managed OpenShell sandbox, so teams get a controlled
0:26
environment around where the agent runs and what it can access.
0:30
That means developers get their familiar coding agent workflow they expect, while organizations
0:35
get more auditability and control around the environment.
Installing NemoClaw
0:39
First, I'll install NemoClaw using the public installer from the NVIDIA docs.
0:45
The installer handles the CLI setup and then drops it directly into onboarding.
Onboarding and picking the dcode integration
0:51
When the onboarding menu appears, I'll choose option number three, LangChain Deep Agents
0:55
Code.
0:56
That is the dcode integration we want for this walkthrough.
Configuring the inference provider
0:59
Next, NemoClaw asks for the inference provider.
1:03
For this video, we're using Baseten for inference, so I'll choose three.
1:07
Other OpenAI compatible endpoint.
1:10
Baseten exposes an OpenAI compatible model API, so first I'll paste the Baseten base
1:16
URL from their documentation.
1:20
I'll paste my Baseten API key and finally I'll paste the Nemotron 3 Ultra
1:28
model slug from the Baseten docs as well. Now the model route is configured,
1:35
dcode will run inside the sandbox and the model calls will go to Nemotron 3
Naming and reviewing the sandbox
1:39
Ultra through Baseten. Next I'll choose the sandbox name for this. We'll do
1:44
dcode demo.
1:47
Now, NemoClaw shows the configuration before provisioning.
1:50
Everything seems to look good.
1:53
I will confirm this.
Setting resource profile and policy tier
1:56
For resource profile, I'll choose option number six,
1:59
OpenShell defaults.
2:00
For an average demo workload, the defaults are enough.
2:04
Next, it'll ask you for the policy tier for which
2:07
I'll choose balanced, because it gives us
2:10
a practical default for coding agent work while still
2:13
keeping the sandbox governed.
2:15
On this screen, I just need the balanced defaults are enough.
2:20
Once that is set, NemoClaw provisions the OpenShell sandbox
2:23
and prepares the dcode runtime.
Provisioning the OpenShell sandbox
2:26
Now that the deep agents code sandbox is live,
2:30
I'll first just want to verify its status.
2:32
I'll do NemoClaw dcode status.
2:37
It looks like everything is good to go.
Connecting to the sandbox
2:40
Now I'll connect to the sandbox with this command.
2:43
NemoClaw, dcode demo, connect.
2:49
Now we're on this screen,
2:50
which means we're in the terminal inside the environment.
2:53
I'll quickly check that dcode is available.
2:56
Just making sure it looks like it's installed.
Setting up a failing test
3:00
Then now I'll create a small workspace
3:03
for the coding tasks that we're about to test.
3:06
So I'll go ahead and make a new folder
3:08
and CD into that folder as well.
3:13
Once inside this folder,
3:15
I'm going to create a tiny Python project
3:18
with a basic add function.
3:21
In addition, I will add some unit tests
3:24
where it expects a subtraction function
3:27
that does not exist yet.
3:30
So we have both those things.
3:32
And now let's just run our unit tests
3:35
to see how it works.
3:37
We can see that there's a failure.
3:40
This failing test gives dcode something real to fix.
Handing the failing test to dcode
3:44
Now, I'll start dcode from inside the sandbox, which
3:47
is as simple as typing dcode.
3:51
We can skip the setup steps for now.
3:54
And now, instead of pasting one giant command into the
3:59
terminal, I'll use it
4:02
how a developer normally would.
4:04
Open dcode and then paste the task.
4:06
So for the purposes of this, I will say, hey, inspect this tiny Python project, fix the
4:12
failing test by making the smallest reasonable change, run the test, and summarize what changed.
4:20
So we're going to let dcode, with Nemotron 3 Ultra, do what it wants.
4:24
It wants to create the subtract function, which I'm going to approve.
4:31
It's going to test. So I'll approve that as well. This is the actual model round trip and how
4:36
a developer would normally be engaging with the terminal-based coding agent.
Verifying the fix
4:41
Both tests ran and passed. We could see the whole execution process of
4:46
dcode. Now I want to run the test suite myself to verify the results. So first
4:53
let's exit dcode and go back to our terminal. Here let's run the same Python
5:00
unit test command and there we go. We ran both our tests and both
5:05
of them passed, which means that the new code that dcode added has the
5:10
code we need in order to pass.
5:12
And just to verify the code itself, we can now see the subtraction function in that file.
5:18
This is a tiny example, but it proves the workflow.
5:21
The agent can understand the workspace, make a code change, validate it, and summarize
5:26
what happened.
Inspecting policy and logs
5:28
The other important part is the environment around the agent.
5:32
This is not just a coding agent running directly on my laptop.
5:35
NemoClaw gives us a governed OpenShell sandbox around the dcode runtime.
5:39
So let's explain this further.
5:41
First I want to exit out of my terminal and back to my running terminal.
5:49
And first the command that I'd like to show is NemoClaw dcode demo policy explain.
5:59
To policy explain, we can inspect the policy context for this sandbox.
6:02
It shows us things like the active presets, approval and remediation behavior, and support
6:09
boundaries.
6:11
And the next command, policy list, which I've shown here, can show us which policy presets
6:20
are configured, which we took care of when we did the onboarding process.
6:25
Finally, with logs,
6:27
(typing)
6:29
(typing)
6:31
Logs, tail 80, just want to see the last 80.
6:35
And with logs, teams get a more auditable environment
6:38
for running coding agents.
Wrap up
6:40
To summarize, that is dcode running inside
6:43
a NemoClaw OpenShell Sandbox with Baseten inference.
6:47
Developers get a familiar terminal coding agent
6:50
while teams get a governed, auditable environment around it.
6:53
Thank you.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

Knox / ChatGPT strategic read

1. Rough metadata

source_platform: YouTube · source_url: https://www.youtube.com/watch?v=_iGxqQ2J2hc · source_title: NemoClaw + dcode: A governed blueprint for AI coding agents · channel_or_org: LangChain · speaker: not clearly identified in supplied metadata · published_at: approximately Jul 8, 2026 · captured_at: 2026-07-11 · capture_method: YouTube screenshot + pasted transcript · content_type: governed agent runtime demo / sandboxing / policy tiers / approval gates / audit logs / coding-agent verification · source_reliability_context: first-party vendor implementation demonstration. Strong evidence for the demonstrated deployment pattern and product mechanics; promotional and incomplete as a general security or governance model. · topic_tags_light: [governed_sandbox, coding_agent, runtime_policy, approval_gate, audit_logs, resource_profile, policy_tier, independent_verification, developer_experience, OpenShell, NemoClaw, dcode]

2. People / authority context

This is an official LangChain demonstration of dcode running inside NVIDIA’s NemoClaw-managed OpenShell sandbox, with Nemotron inference served through Baseten.

The source has practical implementation authority: it shows provisioning, policy selection, approvals, execution, independent test verification, policy inspection, and logs. It does not establish that the named stack is secure enough for healthcare, nor does it deeply explain isolation guarantees, credential handling, network controls, or enforcement failure modes.

3. Suggested processing

priority: 3.75/5

depth: semantic

EVRUN needed?: yes

duplicate/sibling relationship: direct sibling to the preceding Jensen/Harrison harness interview and the dcode/Nemotron walkthrough. Those sources explain the harness and model relationship; this source adds the production-runtime and policy-enforcement layer.

likely landing zones: Build-OS · Agent Work Protocol · AI substrate · runtime security · RBAC · capability placement · audit/proof · policy inspection · production deployment.

promotion posture: Build-OS practice + runtime-governance sharpening + implementation evidence

4. Strategic read
Classification

This is a useful governed-runtime implementation source.

Its primary contribution is not sandboxing itself—OMNI already requires isolation and capability boundaries. The useful pattern is the explicit separation among:

the familiar user-facing agent workflow;
the selected model and inference provider;
the governed execution environment;
the policy preset;
approval behavior;
audit logs;
and independent verification of the result.
Core takeaway

The keeper is: governance should wrap the agent’s normal workflow as an enforceable runtime boundary, rather than depend on the agent remembering or choosing to follow policy.

That distinction matters enormously.

A prompt saying “do not access forbidden data” is guidance.
A sandbox that cannot access the data is enforcement.

A. Governance belongs outside the agent’s reasoning loop

The demo places dcode inside a controlled sandbox governing where it runs and what it may access.

OMNI translation:

The agent should operate inside policy, not carry policy only as instructions in its context.

Prompt-level rules remain useful for behavioral steering. But high-consequence constraints need enforcement outside the model:

network access;
filesystem access;
credentials;
tools;
patient and tenant scope;
write permissions;
external communication;
cost ceilings;
execution duration;
data export;
commit authority.

This sharpens the distinction between:

behavioral instruction;
deterministic gate;
runtime capability;
owning-domain commit.

Keeper doctrine:

Critical constraints must be enforced by the environment, not entrusted solely to the model.
A governed runtime should make forbidden actions unavailable, not merely discouraged.
The agent’s reasoning is inside the control boundary; it is not the control boundary.
B. Preserve the familiar workflow while tightening the environment

The video emphasizes that developers retain the terminal-agent experience while the organization gains control and auditability.

That is a strong product lesson for OMNI.

Governance often fails adoption when it arrives as a separate compliance interface, excessive ceremony, or a replacement for the user’s ordinary workflow. The better pattern is:

preserve the useful surface;
wrap it in invisible or low-friction enforcement;
increase friction only at meaningful decision boundaries.

For providers and staff, OMNI should similarly avoid turning every governed action into a compliance ritual. The user should experience a coherent workflow, while the substrate applies:

identity;
scope;
consent;
policy;
escalation;
trace;
and commit rules underneath.

Keeper doctrine:

Good governance changes what the system can do before it changes how the user must work.
Friction should concentrate at consequential boundaries, not blanket the whole workflow.
C. Policy tiers are useful, but “balanced” is not a sufficient policy model

The demo selects a resource profile and a “balanced” policy tier.

This is practical for onboarding, but OMNI must go deeper than generic presets such as permissive, balanced, or strict.

Healthcare policy must derive from the actual work:

actor;
patient;
operator;
jurisdiction;
data class;
care context;
action type;
reversibility;
clinical consequence;
consent;
delegated authority.

A refill-support agent and a marketing-content agent should not merely choose different generic strictness levels. They require different capability and authority envelopes.

Keeper doctrine:

Policy presets may accelerate setup, but production authority must resolve to explicit capabilities and constraints.
Risk posture is workload-specific, not a global slider.

Candidate pressure:

runtime_policy_profile
workload_policy_tier
policy_explain_projection

The first two likely already exist across capability and runtime envelopes. policy_explain_projection may be a useful surface concept rather than a new primitive.

D. Human approval is shown as a real action gate

The agent proposes creating a function and running a test; the human approves both.

This is a meaningful improvement over vague “human-in-the-loop” language because approval occurs at identifiable actions.

OMNI should preserve that specificity:

what action is proposed;
what resource it affects;
why approval is required;
who may approve;
what evidence is available;
whether approval is reusable;
how long it remains valid;
what happens if the action changes after approval.

The caution is that excessive click-by-click approval becomes unusable. Approval should be keyed to risk and capability class.

Keeper doctrine:

Approval should attach to a typed action, not to the agent session in general.
Human approval is meaningful only when the approver can see what will happen and has authority to permit it.
Approval burden should rise with consequence, not with the number of tool calls.
E. The user independently verifies the result

After the agent reports success, the presenter exits the agent and reruns the test directly.

This is one of the strongest moments in the demo.

It establishes three distinct layers:

the agent says it completed the task;
the execution trace shows what it attempted;
an independent check verifies the intended outcome.

OMNI translation:

Self-reported completion is weaker than independently observed effect.

In care and operations:

an agent may say the order was placed;
the domain must confirm the order exists;
fulfillment must confirm receipt;
later evidence must confirm completion;
outcome intelligence may determine whether the intended effect occurred.

Keeper doctrine:

Agent completion claims are candidates until verified against the owning system or independent evidence.
Execution success, domain commitment, real-world completion, and intended outcome are separate states.

This strongly supports Prove/Learn and post-action obligation.

F. Policy explainability and logs are separate but complementary

The demo exposes both a policy explanation command and runtime logs.

That distinction is valuable:

policy explanation answers what rules were active and what should have been permitted;
logs answer what occurred;
evaluation answers whether the result was good;
domain state answers what became true.

OMNI should not collapse these into one audit stream.

A useful proof view should be able to show:

applicable policy;
resolved capability envelope;
approvals;
attempted actions;
allowed and denied actions;
tool results;
resulting domain commits;
unresolved obligations.

Keeper doctrine:

Policy evidence explains the permitted space; runtime evidence records the traversed path.
Auditability requires both the rule that applied and the event that occurred.
G. A sandbox alone is not governance

The source’s marketing language risks equating “sandboxed and logged” with “governed.”

OMNI should resist that shortcut.

A sandbox may control compute, files, tools, and network boundaries. It does not by itself resolve:

whether the patient consented;
whether the source was authoritative;
whether a clinician was licensed;
whether an action was clinically appropriate;
whether the correct operator owned the workflow;
whether a result entered Clinical Memory;
whether downstream follow-up occurred.

Keeper doctrine:

Runtime governance constrains execution; domain governance determines whether the result may become truth or care.
Secure execution is necessary, but it is not equivalent to authorized clinical action.
Where it lands

Build-OS / Agent Work Protocol — major

governed execution outside the model;
typed approval gates;
independent verification;
policy inspection;
logs as execution evidence.

AI substrate / security — major

sandboxing;
capability restriction;
inference separation;
resource and policy profiles.

Polaris / proof — medium

applicable policy versus actual trace;
denied and approved actions;
separation of execution, correctness, and commitment.

CNS / domain contracts — medium

runtime proposes and executes bounded work;
domains still own committed truth and completion.
Doctrine / primitive pressure

runtime_policy_profile
typed_action_approval
policy_explain_projection
independent_completion_check
runtime_enforcement_boundary

Most likely these sharpen existing capability envelopes, approval gates, traces, and Prove/Learn rather than justify new domains.

What not to import blindly
Do not equate a sandbox with complete governance.
Do not treat generic “balanced” policy as sufficient for clinical workloads.
Do not assume logs prove correctness.
Do not assume a passing unit test proves production safety.
Do not approve every low-level tool call manually.
Do not let the agent define the policy governing itself.
Do not adopt NemoClaw, OpenShell, dcode, Nemotron, or Baseten as architectural commitments.
Do not confuse OpenAI-compatible endpoints with equivalent behavior, safety, or provenance.
Tiering

Runtime-enforced policy
stale-vs-v3: AFFIRM · weight_tier: spine · status: promote as external convergence

Typed action approval
stale-vs-v3: PARTIAL · weight_tier: spine-supporting · status: sharpen

Independent completion verification
stale-vs-v3: AFFIRM · weight_tier: spine · status: promote into Build-OS/Prove-Learn

Policy explanation plus logs
stale-vs-v3: PARTIAL · weight_tier: vocabulary · status: sharpen

Named vendor stack
stale-vs-v3: ABSENT but implementation-specific · weight_tier: no-op · status: reject as doctrine

5. Hard read

This is the strongest implementation source in the recent LangChain/NVIDIA cluster for showing the distinction between agent behavior and the environment that constrains agent behavior.

Its best sequence is:

provision bounded runtime → resolve policy → execute through typed approvals → verify independently → inspect policy and logs.

Strongest OMNI line:

OMNI should place every agent inside an externally enforced capability boundary, require explicit authority at consequential actions, and verify completion against domain truth rather than trusting the agent’s own report.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `TK` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

reviewer: `Opus` · at: `2026-07-11` · run: `EVRUN-2026-000005` · formalizes Review 001 (Knox), grounded vs §1 · dedup baseline: `000001 §2A` + `000002` + `000003` + post-v3 (esp. wave-2 100–114 · 205/211 · C3.5 P35 · RBAC).

**HEADLINE VERDICT.** The **strongest runtime-governance implementation source** in the LangChain cluster (Knox 3.75/5, semantic). NemoClaw governed runtime for coding agents. **0 net-new**; 3 sharpenings. The load-bearing OMNI reconciliation: **a sandbox is NOT governance** — runtime governance constrains *execution*; domain governance determines whether a result becomes *truth/care*. `doctrine=AFFIRM · build=partial`. Keeper: *governance should wrap the agent's workflow as an enforceable runtime boundary, not depend on the agent choosing to follow policy — a prompt saying "don't access X" is guidance; a sandbox that cannot access X is enforcement.*

### A. Concept clusters (semantic — runtime governance)

| concept | OMNI meaning | homes | anchor | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|
| **Governance outside the reasoning loop** (A) | High-consequence constraints (network/fs/creds/tools/patient-tenant-scope/write/export/cost/duration/commit) enforced by the environment, not carried as prompt instructions — the agent's reasoning is *inside* the control boundary, not the boundary | RBAC deterministic gates · wave-2 `agent_sandbox`/`runtime_shield`/`credential_mediation_proxy` (100–114) · C3.5 P35 | "A sandbox that cannot access the data is enforcement" | AFFIRM | partial | none | spine | promote (external convergence) |
| **Preserve workflow, tighten environment** (B) | Governance changes what the system *can do* before it changes how the user must work; friction concentrates at consequential boundaries, not the whole workflow | Surfaces · product · CNS | "developers retain the terminal-agent experience while the org gains control" | AFFIRM | partial | none | vocabulary | cite |
| **Policy presets insufficient — need workload-specific envelopes** (C) | "balanced/strict" sliders don't suffice; production authority resolves to explicit capabilities/constraints from actor·patient·operator·jurisdiction·data-class·action-type·reversibility·clinical-consequence·consent·delegated-authority | RBAC · capability envelope · Settings `service_policy` · C3.5 P35 modes | "'balanced' policy tier…not sufficient" | PARTIAL | partial | none | spine-supporting | sharpen |
| **Typed action approval, keyed to risk** (D) | Approval attaches to a *typed action* (what/resource/why/who-may/evidence/reuse/validity), NOT the session in general and NOT every tool call — burden rises with consequence | P35 `command_authority_boundary` (human-confirmed-command) · RBAC attestation · HITL taxonomy (062) | "the human approves both [function + test]" | PARTIAL | partial | none | spine-supporting | **promote (sharpening)** |
| **Independent completion verification** (E) | Self-reported completion is weaker than independently-observed effect: agent-claims-done = candidate until verified vs owning system / independent evidence (order-placed → domain-confirms → fulfillment-confirms → outcome) | candidate≠commit · Prove/Learn · C3.5 `administration_event` · REV-184 outcome | presenter "exits the agent and reruns the test directly" | AFFIRM | partial | none | spine | promote into Prove/Learn |
| **Sandbox ≠ governance** (G) | Runtime governance constrains execution (compute/files/tools/network); domain governance determines consent·source-authority·licensure·clinical-appropriateness·operator-ownership·adoption·follow-up | domain contracts · CNS · Clinical Memory · the whole authority spine | "sandboxed and logged" ≠ "governed" | AFFIRM | partial | none | spine | **promote (key reconciliation)** |
| **Policy-explain vs logs vs eval vs domain-state** (F) | Don't collapse audit streams: policy evidence = permitted space; runtime evidence = traversed path; eval = whether good; domain state = what became true | Polaris/proof · trace_lineage · `source_authority_map` | policy-explain command + runtime logs both exposed | PARTIAL | partial | none | vocabulary | sharpen |

**Roll-up:** 4 AFFIRM · 3 PARTIAL · 0 conflict. Build partial (OMNI has sandbox/RBAC/P35/candidate≠commit; typed-approval + workload-envelope + independent-check not fully built).

### B. Net-new primitive candidates (dedup)
- `runtime_policy_profile` / `workload_policy_tier` / `runtime_enforcement_boundary` — **EXISTS-AS** capability envelope + C3.5 P35 `command_authority_boundary` + wave-2 runtime primitives (100–114) + RBAC. No mint.
- `typed_action_approval` — **EXISTS-AS** P35 human-confirmed-command + RBAC attestation + HITL taxonomy. Sharpening = approval keyed to *typed action + risk*, not session/per-tool. No mint.
- `independent_completion_check` — **partial exists-as** candidate≠commit + Prove/Learn + C3.5 `administration_event` verification + REV-184 outcome. Sharpening = independent effect-verification > self-report. No mint.
- `policy_explain_projection` — **partial exists-as** Polaris/proof + projection plane. Sharpening = a surface that shows applicable policy vs traversed path (P4 projection), not a new truth store. No mint.
- **Net genuine mints = 0.** 3 sharpenings: governance-outside-loop (RBAC/P35), typed-action-approval keyed-to-risk (P35/RBAC), sandbox≠governance reconciliation (domain contracts).

### C. Reread flags
- LangChain runtime sub-cluster **258/259/260** (dcode/NemoClaw/tracing) — 259 is the runtime-governance apex; fold together, do not double-count.
- Sibling: wave-2 agent_sandbox/runtime (100–114), 205 promptware, 211 confused-deputy, C3.5 P35, RBAC 4-way.

### D. One-line hard read
The cluster's best "agent behavior ≠ the environment that constrains it" source, **0 net-new**. **Strongest OMNI line:** *place every agent inside an externally enforced capability boundary, require explicit authority at consequential actions, and verify completion against domain truth rather than trusting the agent's own report.*

&nbsp;

⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers
- EVRUN(s): `EVRUN-2026-000005` · concept_registry: `analysis/EVRUN-2026-000005_ai-corpus-wave-4/EVRUN-2026-000005_ai-corpus-wave-4_concept_registry_and_routing_map.md` · source_anchor_ledger: `…_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `runtime-governance apex of the LangChain cluster; 0 net-new; 3 sharpenings (governance-outside-loop, typed-action-approval keyed-to-risk, sandbox≠governance reconciliation); AFFIRM independent-completion-verification → Prove/Learn` · promotion: `watch` (propose-only)

## §5 — Change log
- `2026-07-11` — wave-4 scaffold created (id `EVSRC-2026-000259`, provisional `_TK` slug); awaiting Nick transcript + Knox-read + URL paste.
- `2026-07-11` — transcript + Knox Review 001 pasted; **Opus Review 003 written** (`EVRUN-2026-000005`); §0/§0.1 normalized; status `raw_dropped → analyzed`. 0 net-new + 3 sharpenings. Folded to `EVRUN-2026-000005`.

> Authority/retrieval labels are defined once in `../../00_evidence_router.md`.
