# Cluster v29–v32 — Lossless Concept Inventory

- cluster: v29–v32 (AI substrate 2026 ingestion)
- sources: `videos/v29.md` (Agentic Consent; transcript ≡ v25), `videos/v30.md` (Synthetic Monitoring), `videos/v31.md` (Q‑Day / Post‑Quantum Cryptography), `videos/v32.md` (Granite 4.1 / IBM Bob / Composable AI / Quantum — Mixture of Experts)
- date: 2026-06-04
- status: lossless concept inventory — non-binding evidence
- note: v29 reuses the shared v25 agentic-consent transcript; rows v29.21–v29.26 are the net-new §2 distillation concepts layered atop it. v32 composable-AI rows are flagged high-priority. v31 has both §1 transcript and §2 distillation (not transcript-only).

---

## v29 — Agentic Consent Explained (IBM Technology, Grant Miller)

### v29.01 — Agents execute actions, not just output
- concept: Agents are distinct from generative models because they take real actions on a user's behalf, so we must constrain what actions are permitted.
- anchor: "agents just don't generate output. They execute actions. And we need to take into consideration what actions should be allowed on our behalf" (0:05–0:13)
- diluted: Action-taking, not text-generation, is the governance surface for agents.
- why_it_matters: Reframes AI risk in OMNI from "wrong words" to "wrong acts" against clinical/commercial truth.
- omni_impact: Every AI capability in OMNI must be classified by the actions it can take, not just the content it produces.
- landing_zone: thesis(P0)
- affected_artifacts: omni_thesis_v3, ai_substrate_frame_2026-06-03, AI substrate contract (P1)
- flag: affirm
- confidence: high
- requires_reread: no

### v29.02 — Definition of agentic consent (who/what/scope/lifetime)
- concept: Agentic consent defines who delegated the authority, what actions are permitted, and the scope and lifetime of that delegation.
- anchor: "Agentic consent defines who delegated the authority, what actions are permitted, and the scope and lifetime of that delegation." (0:16–0:24)
- diluted: Consent = delegation tuple {delegator, actions, scope, lifetime}.
- why_it_matters: Gives OMNI a precise schema for the delegation envelope it currently lacks.
- omni_impact: Becomes the canonical field set for OMNI's Delegated Authority Envelope.
- landing_zone: contract(P1:federation + RBAC/authority)
- affected_artifacts: federation native draft, capabilities.ts, RBAC model, AI substrate contract
- flag: new
- confidence: high
- requires_reread: no

### v29.03 — Base definition of consent (voluntary agreement)
- concept: Consent occurs when one person voluntarily agrees to the proposal/desire of another.
- anchor: "consent occurs when one person voluntarily agrees to the proposal desire of someone else" (0:45–0:53)
- diluted: Consent is voluntary agreement between parties about an action.
- why_it_matters: Grounds the agentic case in the human/legal primitive OMNI must preserve for patients.
- omni_impact: Patient/operator consent semantics must trace back to a voluntary, identifiable agreement.
- landing_zone: thesis(P0)
- affected_artifacts: consent doctrine, patient trust infrastructure
- flag: affirm
- confidence: med
- requires_reread: no

### v29.04 — Express vs implied consent
- concept: Express consent is unmistakably stated with conditions; implied consent arises through action (e.g., entering a surveilled property).
- anchor: "there can be express consent which is unmistakably stated... Implied consent is really more through action" (1:05–1:49)
- diluted: Two consent modes: stated-with-conditions vs action-implied.
- why_it_matters: OMNI surfaces will mix explicit clicks and implied-by-use consent; both must be auditable.
- omni_impact: Consent capture must record modality (express vs implied) and conditions attached.
- landing_zone: contract(P1:federation/consent)
- affected_artifacts: consent ledger, Settings surface, D7 audit
- flag: sharpen
- confidence: med
- requires_reread: no

### v29.05 — IT consent (explicit, informed, affirmative action)
- concept: IT consent is an explicit, informed, voluntary affirmative action by a person for an org to collect/process/use info about them (accept button, checkbox, cookie banner).
- anchor: "it is explicit informed voluntary action by a person for an organization to collect process or use information about them... it requires a clear affirmative action" (2:07–2:30)
- diluted: Classic IT consent = explicit informed affirmative click.
- why_it_matters: Establishes the baseline OMNI already knows how to do, against which agentic consent is the gap.
- omni_impact: Static consent UI remains valid for data collection but is insufficient for agent actions.
- landing_zone: surface/projection(P5/P4)
- affected_artifacts: Settings/consent surfaces, privacy posture
- flag: affirm
- confidence: high
- requires_reread: no

### v29.06 — Agentic consent ≠ static permissions / no click-wrap
- concept: In agentic systems there are no static permissions or one-time click-wrap agreements because the environment and decision-making change.
- anchor: "there's no static permissions being given. There's no click wrap agreements... it is no longer a static environment" (4:00–4:29)
- diluted: Static, one-time consent breaks under autonomous, changing agent behavior.
- why_it_matters: Direct correction of any OMNI design that treats AI permission as a global toggle.
- omni_impact: OMNI must reject static-global AI capability grants in favor of dynamic, contextual consent.
- landing_zone: thesis(P0)
- affected_artifacts: AI substrate contract, RBAC model, CNS actions
- flag: new
- confidence: high
- requires_reread: no

### v29.07 — Context-aware and dynamic consent
- concept: Agentic consent must be context-aware and dynamic — tied to what the user wants accomplished and able to change as the system reasons.
- anchor: "we need to make sure that it is context aware and dynamic" (5:23–5:35)
- diluted: Consent evaluation must read live context and adapt.
- why_it_matters: Maps to OMNI's "right context / right moment" mantra at the authorization layer.
- omni_impact: Authorization decisions must consume context packets, not just static role.
- landing_zone: contract(P1:RBAC/authority + AI substrate)
- affected_artifacts: capabilities.ts, context router, CNS
- flag: new
- confidence: high
- requires_reread: no

### v29.08 — Handle changing scenarios / non-deterministic scope drift
- concept: Because agents are non-deterministic and can call other agents/processes, the original permission may no longer fit; consent must keep up with scope change.
- anchor: "by the nature of agentic and its non-deterministic nature, it's always in a dynamic changing environment and consent needs to be able to keep up" (6:22–6:35)
- diluted: Scope can drift mid-task; consent must re-check on drift.
- why_it_matters: Agent-to-agent calls in OMNI (CNS orchestration) can silently exceed original intent.
- omni_impact: Need scope-drift detection that re-triggers consent/escalation when intent boundary is crossed.
- landing_zone: contract(P1:CNS + AI substrate)
- affected_artifacts: CNS orchestration, agent action envelope, D7 audit
- flag: new
- confidence: high
- requires_reread: yes

### v29.09 — Identity as a control (IGA / IDPs)
- concept: Identity governance/administration with IDPs authenticates users and agents, predefines allowed actions, and governs through identity.
- anchor: "identity is a control... we have IDPs and these can tell who the user is. It can authenticate agents... we govern through identity" (6:37–7:15)
- diluted: Identity is the governing spine for both humans and agents.
- why_it_matters: Confirms OMNI agents must be first-class identities, not anonymous code paths.
- omni_impact: Each OMNI agent needs an authenticated identity bound to predefined allowed actions.
- landing_zone: contract(P1:federation + RBAC)
- affected_artifacts: identity model, federation, agent registry
- flag: sharpen
- confidence: high
- requires_reread: no

### v29.10 — Cryptographically verified actions + observability
- concept: Knowing identities and defined actions lets actions be cryptographically verified and observed in a dynamic environment.
- anchor: "this actually allows us to be cryptographically verified... we can have observability around us to know that we actually are allowing certain actions" (7:21–7:42)
- diluted: Identity + defined actions → verifiable, observable authorization.
- why_it_matters: Links agent authority to provable, auditable trust (ties to D7 + Q-Day crypto durability).
- omni_impact: Agent actions should carry verifiable signatures + observability traces.
- landing_zone: contract(P1:D7 audit + security/infra)
- affected_artifacts: D7 audit/materialization, signing infra, observability/traces
- flag: new
- confidence: med
- requires_reread: no

### v29.11 — Agent acts with us, not instead of us
- concept: The goal is for the agent to act with the user, not instead of the user.
- anchor: "we want the agent to act with us and not instead of us" (7:45–8:03)
- diluted: Co-agency, not full substitution.
- why_it_matters: Core posture statement for OMNI's human-in-loop philosophy across care/commerce.
- omni_impact: Default OMNI AI posture is collaborative authority, with human as final authority on high-impact acts.
- landing_zone: thesis(P0)
- affected_artifacts: omni_thesis_v3, CNS human-in-loop, Keeper doctrine
- flag: affirm
- confidence: high
- requires_reread: no

### v29.12 — Granular permissions
- concept: Move from coarse to fine-grained permissions (e.g., agent may read email but not send or delete).
- anchor: "I give permission for an agent to work on my email, but I only want to let it read my email and it cannot send email and it cannot delete email" (8:30–8:43)
- diluted: Per-action permissioning, not per-resource blanket access.
- why_it_matters: Clinical analog: read chart ≠ commit order; this is the OMNI control pattern.
- omni_impact: OMNI capability model must express action-level granularity (read/draft/recommend/commit).
- landing_zone: contract(P1:RBAC/authority)
- affected_artifacts: capabilities.ts, RBAC, agent action envelope
- flag: new
- confidence: high
- requires_reread: no

### v29.13 — Time-restrained, transaction-based access
- concept: Permissions should be narrow in time and bound to a single transaction/instance, re-established for the next action.
- anchor: "make these time restrained and transaction based access... I only want the permission to be for that transaction for that actual instance" (8:47–9:42)
- diluted: Ephemeral, transaction-scoped grants instead of long-lived permissions.
- why_it_matters: Prevents standing AI authority over PHI/commerce; matches least-privilege at runtime.
- omni_impact: OMNI needs transaction-scoped, expiring authority tokens for agent actions.
- landing_zone: contract(P1:RBAC/authority + AI substrate)
- affected_artifacts: capabilities.ts, authority envelope, CNS
- flag: new
- confidence: high
- requires_reread: no

### v29.14 — Governance policies derive permissions
- concept: With identity + governance, policies encode time constraints, transaction rules, and granular permissions that implement consent.
- anchor: "we can actually put policies in here that start identifying... the time constraints... how do I do it for transactions... the granular permissions" (9:50–10:13)
- diluted: Policy engine compiles consent rules into enforceable permissions.
- why_it_matters: OMNI needs a policy layer between governance intent and runtime enforcement.
- omni_impact: Introduce a consent/authority policy store that drives capability checks.
- landing_zone: boot/governance
- affected_artifacts: Architecture Memory Control Plane, capabilities.ts, policy store
- flag: new
- confidence: med
- requires_reread: no

### v29.15 — Just-in-time prompting
- concept: When an agent wants access to sensitive data or hits an action with no policy, it must just-in-time prompt the user for consent.
- anchor: "I want the agents to actually just in time prompt me if they are allowed... if it comes to trying to take some action and there are no policies yet" (10:13–11:01)
- diluted: Sensitive/no-policy actions trigger a live consent prompt.
- why_it_matters: This is the safety-escalation primitive OMNI's CNS needs for high-risk acts.
- omni_impact: CNS must support interrupt → prompt → consent on sensitivity/no-policy/high-impact.
- landing_zone: contract(P1:CNS + AI substrate)
- affected_artifacts: CNS actions, messaging, agent action envelope
- flag: new
- confidence: high
- requires_reread: no

### v29.16 — Human-in-the-loop escalation that records + seeds policy
- concept: Governance puts a human in the loop; the consent decision is recorded and can create new policies so future similar actions are handled automatically.
- anchor: "that consent can drive it can be recorded and it can also create new policies so in the future it knows how to handle that" (11:29–11:39)
- diluted: HITL decisions are logged and become reusable policy.
- why_it_matters: Turns one-off approvals into a learning governance loop (Sense+Act) without losing audit.
- omni_impact: OMNI consent decisions feed both D7 audit and the policy store as new rules.
- landing_zone: boot/governance
- affected_artifacts: D7 audit, policy store, CNS, Build OS agent-control model
- flag: new
- confidence: high
- requires_reread: no

### v29.17 — Transparency (compliance)
- concept: Users must have visibility into policies, what consent was given, and where their information is being used.
- anchor: "does this user have visibility to the policies? Does it have visibility to what consent has been given?" (12:05–12:26)
- diluted: Consent transparency is a compliance requirement.
- why_it_matters: Trust infrastructure for a care company handling PHI at scale.
- omni_impact: Settings surface must expose active policies, consents, and data-use lineage.
- landing_zone: surface/projection(P5/P4)
- affected_artifacts: Settings surface, consent projection, D7
- flag: new
- confidence: high
- requires_reread: no

### v29.18 — Revocability
- concept: Users must be able to see and revoke or change consent at any point, especially for long-lived consents.
- anchor: "can I revoke that consent at any point can I change the consent that I've given" (12:33–12:51)
- diluted: Consent must be revocable/modifiable on demand.
- why_it_matters: Required patient/operator control; absence is a trust/legal failure.
- omni_impact: Authority envelopes need revocation paths surfaced to users.
- landing_zone: surface/projection(P5/P4)
- affected_artifacts: Settings surface, authority envelope, federation
- flag: new
- confidence: high
- requires_reread: no

### v29.19 — Personalization (scoped data control)
- concept: Users control which information/areas agents may access (e.g., allow some data but never a specific folder/drive).
- anchor: "I do not ever want to give access to a very specific area or folder or drive of data. And that gets into personalization" (13:09–13:26)
- diluted: User-defined exclusion zones over their own data.
- why_it_matters: Patients/operators need granular opt-outs over sensitive PHI segments.
- omni_impact: Consent model must support per-resource allow/deny carve-outs.
- landing_zone: contract(P1:RBAC/authority)
- affected_artifacts: RBAC, consent model, Settings surface
- flag: new
- confidence: med
- requires_reread: no

### v29.20 — Living contract between humans and machines
- concept: Agentic consent is a living contract grounded in identity, intent, and context — not a one-time checkbox — ensuring agents act with, not instead of, us.
- anchor: "a living contract between humans and machines grounded in identity, intent, and the context of what's happening" (13:40–13:55)
- diluted: Consent is an evolving identity/intent/context-bound contract.
- why_it_matters: Provides OMNI's headline framing for the whole authority-envelope doctrine.
- omni_impact: Name and adopt "living contract" as OMNI's agentic-consent doctrine label.
- landing_zone: thesis(P0)
- affected_artifacts: omni_thesis_v3, ai_substrate_frame, Keeper doctrine
- flag: new
- confidence: high
- requires_reread: no

### v29.21 — Federation owns delegation topology (net-new §2)
- concept: Federation should own the topology of delegation: who acts, on whose behalf, for what purpose, against what resource, under what relationship, with what consent, for how long, with what revocation and audit.
- anchor (§2): "Federation is not partner portal plumbing. It is authority/provenance/delegation topology for humans, organizations, systems, and agents."
- diluted: Federation = authority/provenance/delegation graph, not partner portal.
- why_it_matters: Reframes the Federation domain's center of gravity for migrated/unmigrated contracts.
- omni_impact: Federation contract must model delegation edges for humans, orgs, systems, and agents.
- landing_zone: contract(P1:federation)
- affected_artifacts: federation native draft, system map vNext, RBAC
- flag: sharpen
- confidence: high
- requires_reread: yes

### v29.22 — RBAC is not enough (net-new §2)
- concept: RBAC only answers "does this actor have this permission"; agentic consent adds intent-fit, context-change, same-transaction, freshness, JIT-confirmation, and with-vs-instead-of checks.
- anchor (§2): "Classic RBAC answers: 'Does this actor have this permission?' Agentic consent adds: Is this action within the original delegated intent?..."
- diluted: Authorization must extend RBAC with intent/context/freshness/transaction dimensions.
- why_it_matters: Pinpoints exactly where OMNI's current coarse RBAC is insufficient for AI.
- omni_impact: Layer a consent-check stage atop RBAC for agent actions.
- landing_zone: contract(P1:RBAC/authority + AI substrate)
- affected_artifacts: capabilities.ts, RBAC, CNS
- flag: new
- confidence: high
- requires_reread: no

### v29.23 — Delegated Authority Envelope as first-class primitive (net-new §2)
- concept: OMNI needs a Delegated Authority Envelope binding identity, purpose, scope, resource, action, time, context, consent, policy, audit, and revocation — not flat flags like role=provider.
- anchor (§2): "Not just role = provider or agent_can_read_messages = true." / "a delegated authority envelope that binds identity, purpose, scope, resource, action, time, context, consent, policy, audit, and revocation"
- diluted: Introduce a single composite envelope object governing every agent action.
- why_it_matters: This is the concrete net-new primitive v29 contributes to OMNI's AI substrate.
- omni_impact: Define the envelope schema and require it on all AI/agent mutations.
- landing_zone: contract(P1:AI substrate + RBAC)
- affected_artifacts: AI substrate contract, federation, capabilities.ts, D7
- flag: new
- confidence: high
- requires_reread: yes

### v29.24 — Transaction-scoped clinical/commerce permission examples (net-new §2)
- concept: Concrete OMNI control patterns: summarize chart now; draft but not send; recommend but not commit med change; retrieve labs for this encounter only; query entitlement but not alter; prepare refill task but clinician approves.
- anchor (§2): "'AI may recommend a med adjustment, but not commit it.' 'AI may retrieve labs for this encounter, but not browse unrelated historical PHI.'"
- diluted: Catalog of read/draft/recommend/prepare vs send/commit/alter boundaries.
- why_it_matters: Gives implementers a ready-made action-boundary library for OMNI domains.
- omni_impact: Seed the agent action-envelope catalog with these patterns.
- landing_zone: BuildOS(P6)
- affected_artifacts: agent action envelope catalog, CNS, commerce/labs/Rx contracts
- flag: new
- confidence: high
- requires_reread: no

### v29.25 — Keeper doctrine: capability ≠ authority (net-new §2)
- concept: OMNI agents may not act merely because technically capable; they act only through a delegated authority envelope binding identity/purpose/scope/resource/action/time/context/consent/policy/audit/revocation.
- anchor (§2): "OMNI agents may not act merely because they are technically capable. They act only through a delegated authority envelope..."
- diluted: Technical capability never implies authorization.
- why_it_matters: A timeless guardrail belonging in boot-visible doctrine.
- omni_impact: Add to Guardrail Anti-pattern Digest / Keeper doctrine.
- landing_zone: boot/governance
- affected_artifacts: 06_guardrail_antipattern_digest, Keeper doctrine, AI substrate frame
- flag: new
- confidence: high
- requires_reread: no

### v29.26 — Sharper doctrine: AI autonomy permissioned at transaction level (net-new §2)
- concept: AI autonomy in OMNI must be permissioned at the transaction level, not granted as a static global capability.
- anchor (§2): "AI autonomy in OMNI must be permissioned at the transaction level, not granted as a static global capability."
- diluted: No static global AI autonomy — transaction-level only.
- why_it_matters: One-line enforceable rule for the AI substrate thesis.
- omni_impact: Encode as a binding constraint in the AI substrate contract/thesis.
- landing_zone: thesis(P0)
- affected_artifacts: omni_thesis_v3, AI substrate contract, RBAC
- flag: new
- confidence: high
- requires_reread: no

---

## v30 — Synthetic Monitoring Explained (IBM Technology, Amanda Downie)

### v30.01 — Synthetic monitoring definition
- concept: A proactive way to monitor digital experiences by simulating user actions and measuring what happens, via scripted tests on schedule/on demand from one or many locations.
- anchor: "It is a proactive way to monitor digital experiences by simulating user actions and measuring what happens." (0:47–1:15)
- diluted: Continuously simulate critical paths and measure them before real users hit them.
- why_it_matters: Names the proof pattern OMNI's Build OS Runtime Proof Layer should institutionalize.
- omni_impact: Adopt synthetic simulation as a standing OMNI proof discipline.
- landing_zone: BuildOS(P6)
- affected_artifacts: Build OS layer model (Layer 4), runtime proof layer
- flag: new
- confidence: high
- requires_reread: no

### v30.02 — Don't learn of failure from users / social media
- concept: The worst way to hear about failure is a user report or social media spike — by then you're already in incident response.
- anchor: "the worst way to hear about a failure is from a user report or a spike in your social media complaints" (0:06–0:12)
- diluted: Reactive discovery of outages is too late.
- why_it_matters: Motivates proactive proof for care workflows where user harm is high-stakes.
- omni_impact: OMNI cannot rely on patient/operator complaints to detect broken care journeys.
- landing_zone: boot/governance
- affected_artifacts: governance cadence layer, reliability doctrine
- flag: affirm
- confidence: med
- requires_reread: no

### v30.03 — Scripted tests on schedule/on-demand from many locations
- concept: Runs scripted tests (load a page, call an API, complete a journey) on a schedule or on demand, from one or many geographic locations.
- anchor: "It basically runs scripted tests like loading a page, calling an API, or completing a key journey, on a schedule or on demand, from one or many locations" (0:58–1:15)
- diluted: Scheduled, multi-region scripted probes of critical flows.
- why_it_matters: Multi-region/role coverage matters for OMNI tenants and geographies.
- omni_impact: Synthetic probes should run across regions, roles, and tenant states.
- landing_zone: BuildOS(P6)
- affected_artifacts: runtime proof layer, golden path library
- flag: new
- confidence: med
- requires_reread: no

### v30.04 — Shift-left into CI/CD by reusing the same tests
- concept: Integrate synthetic tests into CI/CD by reusing the same tests in pre-deploy and production, eliminating coverage gaps and false confidence from mismatched conditions.
- anchor: "Synthetic monitoring tools enable integration of synthetic tests into your CI/CD pipeline by reusing the same tests that run in production" (1:41–2:13)
- diluted: One test definition for both pre-deploy gate and prod monitoring.
- why_it_matters: Unifies OMNI merge gates with production proof — no drift between them.
- omni_impact: Golden journeys serve as both CI gate and prod monitor.
- landing_zone: BuildOS(P6)
- affected_artifacts: Build entry gate, CI/CD merge gates, runtime proof layer
- flag: new
- confidence: high
- requires_reread: no

### v30.05 — Catch regressions/broken deps/perf degradation pre-prod
- concept: The approach catches regressions, broken dependencies, and performance degradation before changes reach production; deployment continues only if all tests pass.
- anchor: "your CI/CD tool invokes the runs, the defined tests, and continues deployment only if all tests pass" (2:13–2:29)
- diluted: Block deploy on failed critical-path proofs.
- why_it_matters: Turns "all journeys pass" into a hard deploy gate for OMNI.
- omni_impact: No deploy if golden care/operator/agent journeys fail.
- landing_zone: BuildOS(P6)
- affected_artifacts: build entry gate, proof obligations, lifecycle closure
- flag: new
- confidence: high
- requires_reread: no

### v30.06 — Availability/latency baselines validate SLOs
- concept: Synthetic monitoring defines availability and latency baselines and validates SLOs and performance thresholds.
- anchor: "synthetic monitoring defines your availability and latency baselines... validate your service level objectives or SLOs" (2:29–3:10)
- diluted: Baselines + SLO validation via synthetic tests.
- why_it_matters: OMNI needs SLOs on care/authority workflows, not just infra uptime.
- omni_impact: Define SLOs for critical OMNI journeys and prove them synthetically.
- landing_zone: boot/governance
- affected_artifacts: governance cadence layer, SLO definitions
- flag: new
- confidence: med
- requires_reread: no

### v30.07 — Certify new-market launches without real traffic
- concept: Synthetic tests certify availability/performance from new geographies before real traffic exists.
- anchor: "When you don't have real traffic yet, these synthetic tests validate the experience from those geographies" (2:43–2:57)
- diluted: Pre-validate new regions/tenants before launch.
- why_it_matters: OMNI tenant/market expansion can be proven before onboarding patients.
- omni_impact: New-tenant/region readiness gated by synthetic certification.
- landing_zone: BuildOS(P6)
- affected_artifacts: rollout sequence, runtime proof layer
- flag: new
- confidence: med
- requires_reread: no

### v30.08 — Bucket 1: uptime/availability checks
- concept: Reachability, latency, DNS resolution time/records, and SSL certificate validity checks.
- anchor: "your basic is it reachable test, your latency, your DNS resolution time and records, and your SSL certificate validity" (3:18–3:33)
- diluted: Baseline availability + DNS + cert validity probes.
- why_it_matters: SSL/DNS checks tie directly to Q-Day cert durability (v31) for OMNI.
- omni_impact: Include cert/DNS health in OMNI's standing synthetic suite.
- landing_zone: BuildOS(P6)
- affected_artifacts: runtime proof layer, crypto/cert inventory
- flag: new
- confidence: med
- requires_reread: no

### v30.09 — Bucket 2: API checks
- concept: Call key endpoints, validate status codes and response times, and assert important payload fields.
- anchor: "Synthetic monitoring can call key endpoints, validate status codes and response times, and assert important fields in the payload" (3:33–3:47)
- diluted: Endpoint + payload-field assertions.
- why_it_matters: OMNI's domain APIs (intake, scheduling, commerce) need contract-level probes.
- omni_impact: Add API/payload assertions for each OMNI domain contract surface.
- landing_zone: BuildOS(P6)
- affected_artifacts: runtime proof layer, contract conformance tests
- flag: new
- confidence: med
- requires_reread: no

### v30.10 — Bucket 3: transaction/journey checks ("up but unusable")
- concept: End-to-end journey checks are the closest to real experience and catch partial availability / degraded pathways ("It's up... but it's unusable").
- anchor: "your transaction or journey checks. This is the closest thing to a real experience... 'It's up... But it's unusable.'" (3:47–4:05)
- diluted: Full-journey probes catch partial/degraded usability.
- why_it_matters: Care journeys can be technically "up" yet clinically unusable — must be caught.
- omni_impact: Golden patient/operator journeys are first-class synthetic probes.
- landing_zone: BuildOS(P6)
- affected_artifacts: golden path library, runtime proof layer
- flag: new
- confidence: high
- requires_reread: no

### v30.11 — Alert 1: availability failures (repeated, not blips)
- concept: Alert on repeated availability failures, which signal more than a single blip.
- anchor: "availability failures, because when you have repeated failures, those are more of a signal than a single blip" (4:18–4:28)
- diluted: De-noise alerts; repeated failure = real signal.
- why_it_matters: OMNI alerting must be meaningful to avoid operator fatigue.
- omni_impact: Alert thresholds tuned for repetition, not single failures.
- landing_zone: boot/governance
- affected_artifacts: governance cadence layer, alerting policy
- flag: new
- confidence: med
- requires_reread: no

### v30.12 — Alert 2: latency threshold
- concept: Alert when response time crosses a defined too-long limit.
- anchor: "your latency threshold. You want to be alerted when response time crosses a limit" (4:30–4:38)
- diluted: Latency SLA breach alerts.
- why_it_matters: Latency on clinical/AI workflows affects safety and operator throughput.
- omni_impact: Define latency thresholds per critical journey.
- landing_zone: BuildOS(P6)
- affected_artifacts: runtime proof layer, SLO definitions
- flag: new
- confidence: low
- requires_reread: no

### v30.13 — Alert 3: functional assertions
- concept: Alert on functional failures even when steps "succeed" (login succeeds but dashboard never loads).
- anchor: "'login succeeded, but the dashboard never loads.' That's a functional failure." (4:43–4:49)
- diluted: Assert end-state correctness, not just step success.
- why_it_matters: OMNI must assert clinical/operator end-states, not just HTTP 200.
- omni_impact: Functional assertions on journey outcomes (e.g., chart actually renders).
- landing_zone: BuildOS(P6)
- affected_artifacts: runtime proof layer, golden path assertions
- flag: new
- confidence: med
- requires_reread: no

### v30.14 — Alert 4: dependency checks
- concept: Detect slow/failing third-party APIs before users do.
- anchor: "If a third party API is slow, synthetic monitoring can help detect it before your users do" (4:49–4:59)
- diluted: Monitor upstream/third-party dependency health.
- why_it_matters: OMNI depends on labs, pharmacy, payments, model providers — all must be probed.
- omni_impact: Synthetic dependency probes for every external OMNI integration.
- landing_zone: BuildOS(P6)
- affected_artifacts: runtime proof layer, vendor dependency registry
- flag: new
- confidence: med
- requires_reread: no

### v30.15 — Alert 5: security/trust signals (cert expiry, DNS)
- concept: Often-overlooked but recommended: monitor certificate expiration, DNS correctness, and response time as security/trust signals.
- anchor: "your security and trust signals, certificate expiration and DNS correctness and response time" (4:59–5:11)
- diluted: Treat cert/DNS/trust posture as a monitored signal.
- why_it_matters: Bridges synthetic monitoring to crypto durability (Q-Day) and federation trust.
- omni_impact: Cert/DNS/trust monitoring becomes a recurring governance signal.
- landing_zone: boot/governance
- affected_artifacts: governance cadence layer, crypto inventory, federation
- flag: new
- confidence: med
- requires_reread: no

### v30.16 — Rollout pattern (3–5 workflows → availability → journeys → CI/CD)
- concept: Start with 3–5 critical workflows, add availability checks for domains/APIs, layer in full journey tests from key regions, then integrate into CI/CD over time.
- anchor: "Start by defining three to five of your most critical workflows... Over time, you're going to integrate these tests into your whole CI CD pipeline" (5:15–5:49)
- diluted: Incremental rollout from a few golden journeys to full CI/CD coverage.
- why_it_matters: Realistic adoption path for OMNI's proof layer rather than big-bang.
- omni_impact: Phase synthetic coverage starting from highest-risk OMNI journeys.
- landing_zone: BuildOS(P6)
- affected_artifacts: rollout sequence, runtime proof layer
- flag: new
- confidence: med
- requires_reread: no

### v30.17 — Takeaway: proactive safeguard for reliability/UX/security
- concept: Synthetic monitoring detects outages, measures cross-region performance, and reduces risk of broken/non-performant releases — a proactive safeguard.
- anchor: "It becomes your proactive safeguard for system reliability, user experience, and security signals like DNS and certificates" (6:01–6:11)
- diluted: Proactive, repeatable reliability/UX/security safeguard.
- why_it_matters: Summarizes why this is doctrine, not a dashboard, for OMNI.
- omni_impact: Frame synthetic proof as standing safeguard in Build OS.
- landing_zone: BuildOS(P6)
- affected_artifacts: Build OS layer model, runtime proof layer
- flag: affirm
- confidence: med
- requires_reread: no

### v30.18 — Synthetic care/operator/agent journeys (net-new §2)
- concept: OMNI synthetic monitoring should cover synthetic care journeys + operator workflows + agent workflows, not just "is the app up?".
- anchor (§2): "Synthetic care journeys + synthetic operator workflows + synthetic agent workflows. Not just 'is the app up?'"
- diluted: Three synthetic surfaces: patient, operator, agent.
- why_it_matters: Extends synthetic proof to OMNI's actual actors and AI behaviors.
- omni_impact: Build distinct golden journeys per actor class.
- landing_zone: BuildOS(P6)
- affected_artifacts: golden path library, runtime proof layer
- flag: new
- confidence: high
- requires_reread: no

### v30.19 — Synthetic monitoring for authority boundaries (net-new §2)
- concept: A major category: synthetically attempt to violate RBAC, consent, federation, PHI, and agent-action limits to prove boundaries hold.
- anchor (§2): "That last category is huge: synthetic monitoring for authority boundaries."
- diluted: Continuously test that the wrong actor can't see/act on the wrong record.
- why_it_matters: Directly proves the v29 authority-envelope works under realistic conditions.
- omni_impact: Add authority-boundary attack probes to the proof suite.
- landing_zone: BuildOS(P6)
- affected_artifacts: runtime proof layer, RBAC, federation, D7
- flag: new
- confidence: high
- requires_reread: yes

### v30.20 — Maps to Build OS Layer 4 (Runtime Proof Layer) (net-new §2)
- concept: Synthetic journeys, API checks, AI workflow evals, permission/consent boundary checks, agent action-envelope checks, context-retrieval correctness, latency/dependency checks, and CI/CD merge gates all live in Layer 4.
- anchor (§2): "Layer 4: Runtime Proof Layer — synthetic journey tests, API checks, AI workflow eval checks, permission/consent boundary checks..."
- diluted: Populate the Runtime Proof Layer with this full check catalog.
- why_it_matters: Gives concrete contents to an otherwise abstract Build OS layer.
- omni_impact: Define Layer 4 check taxonomy from this list.
- landing_zone: BuildOS(P6)
- affected_artifacts: 09_omni_build_os_layer_model, runtime proof layer
- flag: new
- confidence: high
- requires_reread: no

### v30.21 — Maps to Build OS Layer 5 (Governance Cadence Layer) (net-new §2)
- concept: Recurring drift audits, "golden journey" refreshes, failed-run triage, escalation rules, deprecation of stale tests, and coverage review before new domains ship.
- anchor (§2): "Layer 5: Governance Cadence Layer — recurring drift audits, 'golden journey' refreshes, failed synthetic run triage..."
- diluted: A cadence layer maintains synthetic coverage over time.
- why_it_matters: Prevents proof rot as OMNI evolves.
- omni_impact: Define a governance cadence for synthetic suite upkeep.
- landing_zone: boot/governance
- affected_artifacts: governance cadence layer, Build OS, future work registry
- flag: new
- confidence: high
- requires_reread: no

### v30.22 — Doctrine: implemented = continuously proven, not code-exists (net-new §2)
- concept: OMNI is not implemented when code exists; it is implemented when critical patient/operator/AI/consent/authority/documentation journeys are continuously proven under realistic synthetic conditions.
- anchor (§2): "OMNI is not implemented when code exists. OMNI is implemented when critical patient, operator, AI, consent, authority, and documentation journeys are continuously proven..."
- diluted: Proof, not code presence, defines done.
- why_it_matters: A keeper definition-of-done for the whole Build OS.
- omni_impact: Adopt as a binding lifecycle-closure criterion.
- landing_zone: boot/governance
- affected_artifacts: Build OS lifecycle closure, proof obligations, guardrail digest
- flag: new
- confidence: high
- requires_reread: no

### v30.23 — Golden Path Library (net-new §2)
- concept: A canonical library of synthetic journeys for every major patient/operator/business/agent workflow.
- anchor (§2): "Golden Path Library: Canonical synthetic journeys for every major patient/operator/business/agent workflow."
- diluted: One curated registry of canonical journeys.
- why_it_matters: Central artifact the proof layer and CI gates both reference.
- omni_impact: Create and maintain a Golden Path Library artifact.
- landing_zone: BuildOS(P6)
- affected_artifacts: golden path library (new), runtime proof layer
- flag: new
- confidence: high
- requires_reread: no

### v30.24 — Synthetic patient/operator/agent fixtures (net-new §2)
- concept: Controlled fake patients, providers, admins, agents, consent states, labs, messages, orders, entitlements, and edge cases for synthetic runs.
- anchor (§2): "Synthetic Patient/Operator/Agent Fixtures: Controlled fake patients, providers, admins, agents, consent states, labs, messages, orders, entitlements, edge cases."
- diluted: A governed fixture set powering synthetic journeys.
- why_it_matters: Enables realistic, PHI-safe proof without touching real patient data.
- omni_impact: Build a synthetic fixture system spanning all domains.
- landing_zone: BuildOS(P6)
- affected_artifacts: fixtures, runtime proof layer, test data governance
- flag: new
- confidence: med
- requires_reread: no

### v30.25 — Agentic synthetic evals (net-new §2)
- concept: Synthetic tasks that test retrieval, refusal, escalation, delegation, policy adherence, and action boundaries of agents.
- anchor (§2): "Agentic Synthetic Evals: Synthetic tasks that test retrieval, refusal, escalation, delegation, policy adherence, and action boundaries."
- diluted: Evals specifically for agent behavior/safety.
- why_it_matters: Keeps "AI in the app" from silently drifting beside deterministic truth.
- omni_impact: Stand up an agent-eval harness in the proof layer.
- landing_zone: BuildOS(P6)
- affected_artifacts: runtime proof layer, AI substrate contract, eval harness
- flag: new
- confidence: high
- requires_reread: yes

---

## v31 — Q‑Day Explained (IBM Technology, Jeff Crume)

### v31.01 — Q-Day definition
- concept: Q-Day is the day quantum computers become strong enough to break all classical cryptography.
- anchor: "Q Day is the day when quantum computers finally get strong enough to break all of our classical cryptography" (0:39–0:45)
- diluted: A future inflection where today's crypto fails.
- why_it_matters: Forces OMNI to treat current encryption as time-bounded for long-lived data.
- omni_impact: Plan OMNI crypto for a post-quantum horizon from the start.
- landing_zone: boot/governance
- affected_artifacts: security/infra doctrine, crypto strategy
- flag: new
- confidence: high
- requires_reread: no

### v31.02 — Symmetric vs asymmetric ciphers
- concept: Symmetric ciphers use one shared key; asymmetric use two mathematically related keys where one encrypts and the other decrypts.
- anchor: "with a symmetric cipher, I have one key... An asymmetric cipher... There are two keys that are mathematically related" (1:50–2:11)
- diluted: Two crypto families with different Q-Day exposure.
- why_it_matters: OMNI must track which family protects which data to assess risk.
- omni_impact: Tag protected records with cipher family in crypto inventory.
- landing_zone: contract(P1:security/infra)
- affected_artifacts: crypto inventory, algorithm metadata
- flag: new
- confidence: med
- requires_reread: no

### v31.03 — AES for bulk encryption
- concept: AES (Advanced Encryption Standard) is the common symmetric algorithm for fast bulk encryption.
- anchor: "AES is the most common symmetric algorithm in use today... this is what we use for bulk encryption" (2:11–2:33)
- diluted: AES = fast bulk symmetric encryption.
- why_it_matters: Most OMNI data-at-rest likely AES; informs the doubling remediation.
- omni_impact: Inventory AES usage and key sizes.
- landing_zone: contract(P1:security/infra)
- affected_artifacts: crypto inventory
- flag: new
- confidence: low
- requires_reread: no

### v31.04 — RSA / key distribution / PKI / digital certificates
- concept: RSA (asymmetric) is slower but enables key distribution and underpins PKI and digital certificates.
- anchor: "the most common example over here on the asymmetric side is RSA... this is also the basis for our public key infrastructure, PKI... digital certificates" (2:33–3:11)
- diluted: RSA/PKI/certs are the asymmetric trust backbone.
- why_it_matters: OMNI federation trust, signed assertions, and TLS rely on this exposed layer.
- omni_impact: Map all PKI/cert/signing dependencies for migration.
- landing_zone: contract(P1:federation + security/infra)
- affected_artifacts: federation trust, cert registry, signing infra
- flag: new
- confidence: med
- requires_reread: no

### v31.05 — Grover's algorithm (double symmetric key size)
- concept: Grover's algorithm can break 128-bit symmetric keys; remediation is to double to 256-bit (AES supports it).
- anchor: "a thing called Grover's algorithm... break 128 bits... double the key size to 256" (3:17–3:55)
- diluted: Symmetric is salvageable by key doubling.
- why_it_matters: Cheap, known fix for OMNI's bulk symmetric encryption.
- omni_impact: Standardize on AES-256 for long-lived OMNI data.
- landing_zone: contract(P1:security/infra)
- affected_artifacts: crypto policy, key registry
- flag: new
- confidence: med
- requires_reread: no

### v31.06 — Shor's algorithm (need PQC)
- concept: Shor's algorithm obliterates asymmetric algorithms; doubling key size is insufficient, requiring post-quantum / quantum-safe cryptography.
- anchor: "There's a thing called Shor's algorithm... obliterate these asymmetric algorithms... we actually need new algorithms here, post quantum crypto" (4:03–4:32)
- diluted: Asymmetric needs full algorithm replacement (PQC).
- why_it_matters: OMNI's trust/identity/signing layer faces a hard migration, not a tweak.
- omni_impact: Plan PQC migration for all asymmetric/PKI usage.
- landing_zone: boot/governance
- affected_artifacts: PQC readiness ledger, federation, signing infra
- flag: new
- confidence: high
- requires_reread: no

### v31.07 — Why care: secrets exposed (PHI, cards, IP)
- concept: If quantum breaks crypto, secrets — personal health information, credit card numbers, company IP — stop being secret.
- anchor: "maybe it's your personal health information or it's credit card numbers... company secrets, intellectual property" (4:37–5:13)
- diluted: PHI and financial data become exposed post-Q-Day.
- why_it_matters: OMNI holds exactly this high-value, regulated data class.
- omni_impact: Prioritize PHI/financial records in crypto risk classification.
- landing_zone: contract(P1:security/infra)
- affected_artifacts: data classification, crypto inventory
- flag: new
- confidence: high
- requires_reread: no

### v31.08 — Authentication broken
- concept: Quantum breaks authentication — you can't tell a legitimate actor from an impostor since auth relies on cryptographic primitives.
- anchor: "I won't be able to know if it's a good guy or a bad guy... because our algorithms that do that also rely on cryptographic primitives" (5:13–5:33)
- diluted: Identity/auth itself fails without quantum-safe crypto.
- why_it_matters: Undermines OMNI's identity-as-control spine (v29.09) if not migrated.
- omni_impact: Auth/identity systems must be on the PQC migration path.
- landing_zone: contract(P1:federation + RBAC)
- affected_artifacts: identity/auth, federation, IDP integration
- flag: new
- confidence: med
- requires_reread: no

### v31.09 — Digital signatures / tamper detection broken
- concept: Quantum breaks digital signatures, so we lose the ability to prove a document/contract wasn't tampered with after agreement.
- anchor: "we use cryptographic algorithms in order to determine if a document or a piece of data has been tampered with. We'll lose the ability to do that" (5:36–6:01)
- diluted: Signature/integrity guarantees collapse.
- why_it_matters: OMNI clinical signatures, consent artifacts, and audit integrity depend on this.
- omni_impact: Signed clinical/consent/audit artifacts need quantum-safe signing + durability policy.
- landing_zone: contract(P1:D7 audit + security/infra)
- affected_artifacts: D7 audit, clinical signatures, consent artifacts, signing infra
- flag: new
- confidence: high
- requires_reread: no

### v31.10 — Timing: nobody knows / 5–10 yrs / may be silent
- concept: No one knows when Q-Day happens (~5–10 years estimated), and attackers won't announce it — it may already have happened silently.
- anchor: "No one really knows... five to 10 years from now... It could have already happened and you're just not aware of it yet" (6:22–7:09)
- diluted: Uncertain, possibly-already-occurred, undisclosed timeline.
- why_it_matters: Removes the option to "wait and see" for OMNI's long-lived data.
- omni_impact: Treat Q-Day risk as present, not deferred.
- landing_zone: boot/governance
- affected_artifacts: security doctrine, risk register
- flag: new
- confidence: med
- requires_reread: no

### v31.11 — Regulatory deprecation 2030–2035
- concept: Governments/regulators broadly target 2030–2035 to deprecate old crypto standards.
- anchor: "2030 to 2035 is when they're all saying, we need to deprecate... these old crypto standards" (7:16–7:43)
- diluted: Regulatory deadline window for PQC migration.
- why_it_matters: OMNI compliance posture must align to this window.
- omni_impact: Set OMNI PQC migration milestones against 2030–2035.
- landing_zone: boot/governance
- affected_artifacts: compliance posture, PQC readiness ledger
- flag: new
- confidence: med
- requires_reread: no

### v31.12 — Conversion time too long (4000 instances → 10+ yrs)
- concept: An org may have ~4,000 crypto instances; converting one/day takes 10+ years — not enough runway.
- anchor: "if you've got 4,000 instances of cryptography in your environment... more than 10 years before all of your environment is converted" (7:56–8:25)
- diluted: Migration is slow at scale; start early.
- why_it_matters: OMNI must design for crypto agility now to make later migration feasible.
- omni_impact: Centralize crypto so migration isn't 4,000 separate changes.
- landing_zone: contract(P1:security/infra)
- affected_artifacts: crypto abstraction layer, crypto inventory
- flag: new
- confidence: med
- requires_reread: no

### v31.13 — Cost rises near Q-Day / consultant scarcity
- concept: Waiting raises cost — opportunity cost of pulling staff and consultant scarcity as everyone procrastinates.
- anchor: "The closer we get to Q day, the more expensive it's going to be... scarcity is gonna make the price of this go up dramatically" (8:36–9:20)
- diluted: Late migration is economically punishing.
- why_it_matters: Economic argument to bake crypto agility in from day one.
- omni_impact: Early investment in crypto agility lowers total migration cost.
- landing_zone: boot/governance
- affected_artifacts: security doctrine, build prioritization
- flag: affirm
- confidence: low
- requires_reread: no

### v31.14 — Wildcard factor (research breakthroughs)
- concept: A research breakthrough combining Grover's/Shor's with classical/quantum compute could break crypto sooner; two warning-shot examples already fired.
- anchor: "the wild card factor... we've already had two examples... the warning shot was fired" (9:20–10:17)
- diluted: Timeline could compress abruptly.
- why_it_matters: Reinforces present-risk posture; OMNI can't bet on a stable timeline.
- omni_impact: Build for crypto agility to absorb sudden timeline compression.
- landing_zone: boot/governance
- affected_artifacts: risk register, crypto agility doctrine
- flag: new
- confidence: med
- requires_reread: no

### v31.15 — Harvest Now, Decrypt Later
- concept: Adversaries copy encrypted data today and decrypt it once quantum is strong enough — the failure is already locked in for previously exfiltrated data.
- anchor: "Harvest Now Decrypt Later... if I make a copy of your data today and it's encrypted, I just have to sit on it and wait for the future" (10:17–11:21)
- diluted: Today's encrypted data is a future breach.
- why_it_matters: The single most important Q-Day concept for long-lived PHI in OMNI.
- omni_impact: Classify OMNI data by HNDL risk and prioritize re-protection.
- landing_zone: contract(P1:security/infra)
- affected_artifacts: HNDL risk classification, data-retention × encryption-strength matrix
- flag: new
- confidence: high
- requires_reread: yes

### v31.16 — Not ready / start migration now
- concept: Almost no org is ready for Q-Day; migration to PQC is too expensive/slow/risky to defer, so start now.
- anchor: "are you ready for Q-Day and if you're honest the answer, clearly, is no for almost all organizations... you can't afford to wait" (11:21–11:48)
- diluted: Begin PQC migration immediately.
- why_it_matters: Action mandate for OMNI's security roadmap.
- omni_impact: Schedule PQC readiness as a near-term Build OS workstream.
- landing_zone: BuildOS(P6)
- affected_artifacts: future work registry, security roadmap
- flag: new
- confidence: med
- requires_reread: no

### v31.17 — Long-lived PHI crypto strategy can't assume today's primitives (net-new §2)
- concept: If OMNI stores long-lived PHI, identity, audit, signatures, consent, payment-adjacent records, or secrets, its crypto strategy cannot assume today's primitives stay safe for the data's lifetime.
- anchor (§2): "its cryptographic strategy cannot assume today's encryption primitives remain safe for the lifetime of the data"
- diluted: Crypto choices must survive the full retention horizon of the data.
- why_it_matters: Frames crypto as a longitudinal-coherence problem (OMNI's core thesis).
- omni_impact: Couple data-retention policy to crypto-strength requirements.
- landing_zone: thesis(P0)
- affected_artifacts: omni_thesis_v3, security doctrine, retention policy
- flag: new
- confidence: high
- requires_reread: no

### v31.18 — Healthcare data long shelf life
- concept: Healthcare data (PHI, consent history, clinical decisions, identity proofs, audit, doc lineage) may need to remain trustworthy for years or decades.
- anchor (§2): "healthcare data has a long shelf life... may need to remain trustworthy for years or decades"
- diluted: Care data outlives current crypto safety windows.
- why_it_matters: Makes Q-Day uniquely acute for a care substrate vs generic SaaS.
- omni_impact: Treat decade-scale trust durability as a design constraint.
- landing_zone: thesis(P0)
- affected_artifacts: omni_thesis_v3, retention × crypto matrix
- flag: new
- confidence: high
- requires_reread: no

### v31.19 — Cryptographic agility from the beginning (net-new §2)
- concept: OMNI must be cryptographically agile from the start — able to rotate algorithms, keys, certificates, signing schemes, and vendor cryptography without rewriting the system.
- anchor (§2): "OMNI must be cryptographically agile from the beginning... rotate algorithms, keys, certificates, signing schemes, and vendor cryptography without rewriting the whole system"
- diluted: Pluggable, rotatable crypto as a first-class architectural property.
- why_it_matters: The actionable doctrine that makes later PQC migration feasible (vs 4,000 rewrites).
- omni_impact: Introduce a crypto abstraction/rotation layer early.
- landing_zone: contract(P1:security/infra)
- affected_artifacts: crypto abstraction layer, security doctrine
- flag: new
- confidence: high
- requires_reread: yes

### v31.20 — Concrete future crypto primitives (net-new §2)
- concept: Future primitives: crypto inventory, key/certificate registry, algorithm metadata on protected records, signed-artifact durability policy, PQC readiness ledger, HNDL risk classification, data-retention × encryption-strength matrix, rotation/migration playbooks, vendor cryptography attestation, synthetic checks for cert/TLS/signature validity.
- anchor (§2): "crypto inventory / key/certificate registry / algorithm metadata on protected records / PQC readiness ledger / harvest-now-decrypt-later risk classification..."
- diluted: A concrete inventory of crypto-governance artifacts to build.
- why_it_matters: Turns Q-Day awareness into a buildable backlog for OMNI.
- omni_impact: Seed the security/infra backlog with these artifacts.
- landing_zone: BuildOS(P6)
- affected_artifacts: future work registry, security/infra contract, runtime proof layer
- flag: new
- confidence: high
- requires_reread: no

### v31.21 — Federation owns boundary trust; security/infra owns crypto impl (net-new §2)
- concept: Federation should own boundary trust semantics (external trust, partner identity, certs, signed assertions, provenance, actor legitimacy), while security/infra owns the cryptographic implementation.
- anchor (§2): "Federation should own boundary trust semantics, but security/infra must own cryptographic implementation."
- diluted: Separate trust-semantics ownership from crypto-mechanism ownership.
- why_it_matters: Clean separation prevents conflating federation policy with crypto plumbing.
- omni_impact: Draw the boundary in contracts between federation and security/infra.
- landing_zone: contract(P1:federation + security/infra)
- affected_artifacts: federation contract, security/infra contract, system map vNext
- flag: sharpen
- confidence: med
- requires_reread: no

### v31.22 — Runtime Proof Layer crypto checks (net-new §2)
- concept: The Runtime Proof Layer needs certificate/key inventory, crypto dependency checks, algorithm/version visibility, signed-artifact validation, and eventually PQC-readiness checks.
- anchor (§2): "OMNI needs certificate/key inventory, crypto dependency checks, algorithm/version visibility, signed-artifact validation, and eventually PQC-readiness checks"
- diluted: Make crypto posture continuously provable.
- why_it_matters: Connects Q-Day directly to v30's proof layer (shared infrastructure).
- omni_impact: Add crypto-posture probes to the synthetic proof suite.
- landing_zone: BuildOS(P6)
- affected_artifacts: runtime proof layer, crypto inventory
- flag: new
- confidence: med
- requires_reread: no

### v31.23 — Governance Cadence quantum-vulnerability drift audits (net-new §2)
- concept: Recurring drift/audit concern: which keys, certs, encryption/signing methods, vendor deps, backups, and retained datasets are quantum-vulnerable.
- anchor (§2): "which keys, certificates, encryption methods, signing methods, vendor dependencies, backups, and retained datasets are quantum-vulnerable?"
- diluted: Periodic quantum-vulnerability sweeps.
- why_it_matters: Keeps crypto posture from rotting as OMNI and vendors change.
- omni_impact: Add quantum-vulnerability audits to the governance cadence.
- landing_zone: boot/governance
- affected_artifacts: governance cadence layer, vendor attestation, PQC ledger
- flag: new
- confidence: med
- requires_reread: no

---

## v32 — Granite 4.1 / IBM Bob / Composable AI / Quantum (Mixture of Experts) [HIGH PRIORITY]

### v32.01 — Enterprise AI is pluralistic, not monolithic [HIGH]
- concept: Enterprise AI is pluralistic, not monolithic; the need is composable system architecture, not one giant model doing everything.
- anchor: "if you look at the enterprise AI, it is pluralistic, not monolithic" (4:46–4:52); "what IBM is doing is kind of selling a system architecture that is composable" (5:19–5:24)
- diluted: Compose many specialized capabilities rather than one omniscient model.
- why_it_matters: The headline reinforcement of OMNI's AI-substrate-not-feature doctrine.
- omni_impact: OMNI's AI layer must be a composable capability substrate, not a single model choice.
- landing_zone: thesis(P0)
- affected_artifacts: omni_thesis_v3, ai_substrate_frame, AI substrate contract
- flag: affirm
- confidence: high
- requires_reread: no

### v32.02 — Granite 4.1 family of specialized models
- concept: Granite 4.1 ships LM text, vision, speech, and embedding models specialized for specific tasks to complement general agent frameworks.
- anchor: "the launch includes not just the LM text models, but it includes the vision and speech multimodality models... next round of our embedding models... augmenting what you can get out of a general reasoning agent" (2:05–2:32)
- diluted: A family of small specialist models around a generalist agent.
- why_it_matters: Concrete template for OMNI's specialist-model roster.
- omni_impact: OMNI should register specialist models per modality/task.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: model registry, capability registry
- flag: new
- confidence: med
- requires_reread: no

### v32.03 — Vision models for table/chart understanding
- concept: Enterprise vision value is understanding tables/charts and documents, not generating sci-fi pictures.
- anchor: "Enterprise cares. Can you understand tables?... can you do the extremely coolest pictures that are sci fi... No, it's can you understand tables?" (7:08–7:19)
- diluted: Enterprise vision = document/table comprehension.
- why_it_matters: OMNI document intake (labs, forms, faxes) needs table/chart vision, not art.
- omni_impact: Route document understanding to table/chart-capable vision models.
- landing_zone: contract(P1:AI substrate + documents)
- affected_artifacts: document ingestion, capability routing
- flag: new
- confidence: med
- requires_reread: no

### v32.04 — Small on-device speech models
- concept: Speech models driven as small as possible for transcription/translation to run on as many devices as possible.
- anchor: "The speech models similarly are driving down the size... targeting transcription and translation... put those on as many devices as possible" (2:44–3:08)
- diluted: Compact speech models for transcription/translation at the edge.
- why_it_matters: Visit transcription / multilingual access for OMNI patients/operators.
- omni_impact: Consider on-device speech for intake/clinical documentation.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: capability registry, documentation/messaging
- flag: new
- confidence: low
- requires_reread: no

### v32.05 — Small LMs (3B–30B) for instruction-following + tool-calling
- concept: Language models from 3B to 30B focus on instruction following and tool calling, suited to RAG pipelines and background research offloaded from a larger agent.
- anchor: "the language models come in three sizes, down to 3 billion, up to 30 billion... focused largely on instruction following and tool calling... build a rag pipeline around" (3:08–3:42)
- diluted: Small tool-calling LMs handle bounded subtasks.
- why_it_matters: OMNI should offload routine subtasks to cheap specialists.
- omni_impact: Route extraction/classification/coding-substeps to small LMs.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: capability routing, cost tiers
- flag: new
- confidence: med
- requires_reread: no

### v32.06 — Cost explosion is a real enterprise concern
- concept: There's been an enormous explosion in AI costs; for enterprises without unlimited budget, cost becomes a real concern shaping architecture.
- anchor: "there's been this, like, enormous explosion in costs across the board... cost becomes a really real concern" (3:42–4:00)
- diluted: AI cost is now an architectural constraint.
- why_it_matters: At 1BN scale, careless AI calls threaten product feasibility.
- omni_impact: OMNI needs cost as a first-class routing input from the start.
- landing_zone: thesis(P0)
- affected_artifacts: AI substrate contract, cost governance
- flag: new
- confidence: high
- requires_reread: no

### v32.07 — Build infrastructure around the agent, not just the agent
- concept: The need is to build the infrastructure around the agent (specialized models, routing) versus focusing only on the agent itself.
- anchor: "there's like a need to build the infrastructure around the agent versus just like focusing on the agent itself" (4:24–4:33)
- diluted: Agent infra > the agent alone.
- why_it_matters: Validates investing in OMNI's orchestration substrate, not just a chatbot.
- omni_impact: Prioritize the orchestration/routing substrate over a single agent.
- landing_zone: thesis(P0)
- affected_artifacts: ai_substrate_routing_spine_REV-176, AI substrate contract
- flag: affirm
- confidence: high
- requires_reread: no

### v32.08 — IBM Bob: system-level AI development partner/orchestrator [HIGH]
- concept: IBM Bob is a system-level AI development partner / agentic coding partner that intelligently decides how/when to invoke specialist models to offload cost while keeping main logic in the expensive model.
- anchor: "IBM Bob, which is a system level AI development partner, basically a genetic coding partner" (1:05–1:16); "how do I figure out most intelligently how to and when to invoke those side spurs to offload cost" (8:18–8:35)
- diluted: A top-level orchestrator that delegates to bounded specialists.
- why_it_matters: Direct analog for OMNI's CNS/agent orchestration and for "AI on the app" build orchestration.
- omni_impact: Model OMNI orchestration on top-agent-delegates-to-specialists.
- landing_zone: contract(P1:AI substrate/CNS) + BuildOS(P6)
- affected_artifacts: CNS, AI substrate contract, Build OS agent roles
- flag: new
- confidence: high
- requires_reread: yes

### v32.09 — Multimodal orchestration routes each task to the right model [HIGH]
- concept: Bob-style multimodal orchestration routes each task through the right model (frontier for hard reasoning, fine-tuned specialists for e.g. security review, Granite for cheap completions).
- anchor: "the multimodal orchestration, which routes each task through the right modal cloud, for example for hard reasoning, Mistral or granite for cheap completions, fine tuned specialists, for example for security review" (4:52–5:08)
- diluted: Task-to-model routing by difficulty/cost/specialty.
- why_it_matters: This is the core mechanism of OMNI's capability router.
- omni_impact: Define task-to-model routing rules in the AI substrate contract.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: capability router, model registry, routing rules
- flag: new
- confidence: high
- requires_reread: no

### v32.10 — Composable vs monolithic intelligence [HIGH]
- concept: Frontier labs sell monolithic intelligence; the enterprise move is composable system architecture.
- anchor: "the Frontier Labs... they're kind of selling these monolithic intelligence. But... what IBM is doing is kind of selling a system architecture that is composable" (5:13–5:24)
- diluted: Composability beats monolith for enterprise AI.
- why_it_matters: Strategic positioning OMNI should adopt explicitly.
- omni_impact: State OMNI's AI as composable architecture in the thesis.
- landing_zone: thesis(P0)
- affected_artifacts: omni_thesis_v3, AI substrate frame
- flag: affirm
- confidence: high
- requires_reread: no

### v32.11 — OS-vendor analogy (1980s: giant programs → composable services)
- concept: This mirrors the maturity move OS vendors made in the 80s, from giant programs to composable services.
- anchor: "the analogy that we had with the OS vendors... in the 80s... from these giant programs to composable services" (5:30–5:47)
- diluted: AI is repeating the OS modularization arc.
- why_it_matters: A comparator (Lens B) to register for OMNI's substrate framing.
- omni_impact: Append OS-vendor-modularization to the comparator/analogy registry.
- landing_zone: boot/governance
- affected_artifacts: comparator_analogy_registry, thesis §3.5
- flag: new
- confidence: med
- requires_reread: no

### v32.12 — One-giant-model era not sustainable in enterprise
- concept: The "one giant model does everything" era is not sustainable in the enterprise; use frontier models only where affordable and specialists elsewhere.
- anchor: "the one giant model does everything ERA is not really sustainable in the enterprise" (5:36–5:47)
- diluted: Reserve frontier models for high-value tasks; specialize the rest.
- why_it_matters: Cost/sustainability rationale for OMNI's tiered routing.
- omni_impact: Encode affordability-based model selection.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: cost tiers, routing rules
- flag: affirm
- confidence: med
- requires_reread: no

### v32.13 — Large models becoming commodities
- concept: Large models are commoditizing; enterprises don't need 5–6 identical large models.
- anchor: "how these large models become commodities... what do you need 5 or 6 identical large models for? It's not the case" (6:45–7:03)
- diluted: Frontier capability is commoditizing.
- why_it_matters: OMNI should avoid lock-in and treat models as swappable commodities.
- omni_impact: Design model-agnostic routing with swappable providers.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: model registry, provider abstraction (AI Gateway-style)
- flag: new
- confidence: med
- requires_reread: no

### v32.14 — Modularity: standalone composable functions
- concept: Treat models as standalone functions you can compose: "if this is my job, you do it" — what Bob and Granite both enable.
- anchor: "this modularity where you really want to treat this again as these are standalone functions that you can compose" (7:28–7:42)
- diluted: Models as composable, swappable functions.
- why_it_matters: Function-style composition maps to OMNI's capability-envelope design.
- omni_impact: Expose AI capabilities as composable, contracted functions.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: capability envelopes, capability registry
- flag: new
- confidence: med
- requires_reread: no

### v32.15 — Token-maxing vs token-squeezing/right-sizing [HIGH]
- concept: Companies blow budgets via "token maxing"; the sweet spot is "token squeezing"/right-sizing — using tokens effectively at the right cost per token.
- anchor: "token maxing... that's just going to crush your company's budget. So if you can token squeeze, if you can token right size... uses them effectively with the right cost per token" (9:17–9:44)
- diluted: Optimize tokens spent for value, not maximize them.
- why_it_matters: Concrete cost-discipline pattern for OMNI's AI router.
- omni_impact: Add token/cost budgets and right-sizing policy to routing.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: cost governance, token budgets, routing rules
- flag: new
- confidence: high
- requires_reread: no

### v32.16 — Mainframe/COBOL modernization as a moat
- concept: Bob treats trillions of lines of legacy COBOL/mainframe (Z) code as first-class — a modernization moat for banking/financial enterprises.
- anchor: "trillions of lines of code in production written in languages. Most coding agents barely recognize. And I think Bob treats them as a first class. And that's... a moat" (9:44–10:16)
- diluted: First-class legacy-code support is a defensible moat.
- why_it_matters: Analog: OMNI's value in modernizing entrenched EMR/legacy healthcare systems.
- omni_impact: Position OMNI to first-class legacy healthcare data/system migration.
- landing_zone: thesis(P0)
- affected_artifacts: omni_thesis_v3 (Lens A comparators), federation/integration
- flag: new
- confidence: low
- requires_reread: no

### v32.17 — Bounded governed multimodal agent does ~30% of work [HIGH]
- concept: What's shipping is not "replace your developer" but a bounded, governed, multimodal agent that quietly does ~30% of the work while humans handle judgment calls.
- anchor: "what's bounded govern multimodal agent that quietly does 30% of your work while humans handle... the judgment calls" (14:33–14:45)
- diluted: Bounded governed agents augment; humans keep judgment.
- why_it_matters: Realistic, governed augmentation posture matching v29's "with us not instead of us".
- omni_impact: Frame OMNI agents as bounded/governed augmenters, humans own judgment.
- landing_zone: thesis(P0)
- affected_artifacts: omni_thesis_v3, CNS, Keeper doctrine
- flag: affirm
- confidence: high
- requires_reread: no

### v32.18 — Agents as infrastructure, not agent demos [HIGH]
- concept: The era of agent demos is giving way to agents as infrastructure — a hybrid generalist+specialist world requiring layered orchestration.
- anchor: "I don't think we can say maybe the era of Agent Demo is over... the era of the agents as infrastructure is just starting here" (13:55–14:21)
- diluted: Agents are becoming permanent infrastructure.
- why_it_matters: Validates OMNI treating AI as standing substrate with governance, not demos.
- omni_impact: Build AI as durable infrastructure (routing, evals, traces, memory, governance).
- landing_zone: thesis(P0)
- affected_artifacts: ai_substrate_frame, AI substrate contract
- flag: affirm
- confidence: high
- requires_reread: no

### v32.19 — Generalist → specialist distillation cycle [HIGH]
- concept: Use generalist agents to discover what works, collect interaction data, then distill repeated patterns into tighter tools/subagents/smaller models/deterministic workflows; it's a data-driven cycle.
- anchor: "the patterns that users are going to go through... are going to start to shake out into a bunch of common patterns, and then we're going to be able to extract those things out and make them tools, make them sub agents that are running off of a much smaller model" (12:01–12:34); "it's data driven, not some sort of an a priori thought" (13:33–13:50)
- diluted: Discover with generalists, distill into bounded specialists/deterministic paths.
- why_it_matters: Defines OMNI's continuous workflow-maturation loop (runtime + Build OS).
- omni_impact: Adopt trace→pattern→specialist→eval→deterministic→drift→re-distill loop.
- landing_zone: BuildOS(P6)
- affected_artifacts: Build OS, runtime proof layer, AI substrate contract
- flag: new
- confidence: high
- requires_reread: yes

### v32.20 — Layered orchestration (generalist + specialist) [HIGH]
- concept: A hybrid world needs layered orchestrations across generalist and specialist models working together; the right orchestration drives cost down and productivity up.
- anchor: "it has to be kind of layered orchestrations across all of these things working together. And the right orchestration is really key here to drive also the cost down" (14:11–14:26)
- diluted: Generalist on top, bounded specialists underneath, orchestrated.
- why_it_matters: The architectural shape for both OMNI runtime and "AI on the app" builds.
- omni_impact: Standardize generalist-top/specialist-underneath orchestration pattern.
- landing_zone: contract(P1:AI substrate) + BuildOS(P6)
- affected_artifacts: capability router, CNS, Build OS agent roles
- flag: new
- confidence: high
- requires_reread: no

### v32.21 — De Loco: distributed low-communication training
- concept: DeepMind's (decoupled) De Loco is a distributed low-communication training protocol enabling training across multiple data centers.
- anchor: "DeepMind released a paper about a method that they're calling decoupled de loco. And De Loco stands for Distributed Low Communication" (14:52–15:20)
- diluted: Training can be distributed across sites with low communication.
- why_it_matters: Background macro trend; minor direct OMNI impact but shapes provider economics.
- omni_impact: Awareness only; affects model-provider landscape OMNI routes to.
- landing_zone: thesis(P0)
- affected_artifacts: ai_substrate_frame (context), comparator registry
- flag: affirm
- confidence: low
- requires_reread: no

### v32.22 — Gigawatt single-site cluster assumption challenged
- concept: The gigawatt-scale single-site cluster assumption (2023–2025 frontier plans) is now challenged — not just on cost but power (grids like Northern Virginia maxed).
- anchor: "this gigawatt scale, single site cluster assumption that almost drove every frontier training plan from like 2023 to 2025 is now being challenged" (16:18–16:46)
- diluted: Single-site mega-cluster training is hitting power limits.
- why_it_matters: Macro constraint shaping AI cost/availability OMNI depends on.
- omni_impact: Awareness; reinforces multi-provider, cost-aware routing.
- landing_zone: thesis(P0)
- affected_artifacts: ai_substrate_frame (context)
- flag: affirm
- confidence: low
- requires_reread: no

### v32.23 — Training federates, inference concentrates (bifurcation)
- concept: A symmetry: training moves toward federation/distribution while inference concentrates (co-located KV caches, low latency); the data center bifurcates into two topologies.
- anchor: "training... we will get to federation here while inference will keep kind of concentrating because inference wants this co-location of the kV caches... it's kind of bifurcating here" (16:52–17:33)
- diluted: Distributed training vs co-located inference.
- why_it_matters: Notable use of "federation" for compute topology; conceptual echo of OMNI federation.
- omni_impact: Awareness; clarifies that OMNI "federation" ≠ compute federation (avoid conflation).
- landing_zone: thesis(P0)
- affected_artifacts: ai_substrate_frame, comparator registry
- flag: new
- confidence: low
- requires_reread: no

### v32.24 — Goodput metric / tail latency under chaos
- concept: "Goodput" matures as the metric (88% vs 27% in classical data centers) — production training cost is determined by waste from failures; distributed systems shift from throughput-at-idle to tail-latency-under-chaos.
- anchor: "the good put... the paper shows 88% versus 27%... from like throughput at idle to kind of tail latency under chaos when we have all of these failures" (17:40–18:48)
- diluted: Measure useful work under real failure, not peak FLOPs.
- why_it_matters: Mirrors v30's "prove real behavior under realistic conditions" for OMNI proof.
- omni_impact: Favor realistic-condition metrics (goodput-style) in proof/eval design.
- landing_zone: BuildOS(P6)
- affected_artifacts: runtime proof layer, eval metrics
- flag: new
- confidence: low
- requires_reread: no

### v32.25 — Mix-and-match GPU generations / use idle capacity
- concept: Distributed low-comm training lets you mix older and newer GPUs/TPUs and tap stranded/idle/partial/geo-isolated capacity, reducing CapEx pressure to always buy latest hardware.
- anchor: "You can also mix and match... older GPUs with newer GPUs... turns those into useful capacity... you don't have to all CapEx always relate to getting the latest, greatest GPUs" (22:00–23:35)
- diluted: Heterogeneous, idle compute becomes usable for training.
- why_it_matters: Lowers AI cost floor; reinforces cost-aware routing relevance.
- omni_impact: Awareness; cheaper compute may shift OMNI build/inference economics.
- landing_zone: thesis(P0)
- affected_artifacts: ai_substrate_frame (context)
- flag: affirm
- confidence: low
- requires_reread: no

### v32.26 — Federated batch-job training / SETI@home / community-owned models
- concept: Training a frontier model may look more like a globally distributed federated batch job; analogized to SETI@home, raising the possibility of community-owned models where everyone donates local compute (with caveats on sharding limits).
- anchor: "training a frontier model looks more like running a globally distributed, like federated batch job" (22:52–23:16); "the first like truly public open source shared model that is a community owned model" (25:24–25:40)
- diluted: Frontier training as federated/community batch compute.
- why_it_matters: Macro trend toward decentralized model supply; minor direct OMNI impact.
- omni_impact: Awareness; potential future open-model options for OMNI's registry.
- landing_zone: thesis(P0)
- affected_artifacts: ai_substrate_frame (context), model registry
- flag: affirm
- confidence: low
- requires_reread: no

### v32.27 — DeepSeek V4: 1.6T params / 49B active / 3% activation
- concept: DeepSeek V4 is a 1.6T-parameter model with ~49B active params (3% activation), making inference economics that closed labs can't easily match without rebuilding serving infra around comparable sparsity.
- anchor: "1.6 trillion parameter model with 49 active params" (27:55–28:07); "activating 49 billion parameters out of 1.6, that's huge. That's 3%... closed labs right now can't match that inference economics" (35:16–35:34)
- diluted: Extreme sparsity (MoE) drives cheap inference.
- why_it_matters: Cheap frontier-class intelligence enterprises can self-host shifts OMNI options.
- omni_impact: Track sparse/open frontier models for cost-efficient OMNI hosting.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: model registry, cost tiers
- flag: new
- confidence: med
- requires_reread: no

### v32.28 — Sparse attention / lightning indexer / custom CUDA kernels
- concept: DeepSeek brings hardware/software co-design tricks — sparse attention, a "lightning indexer," and custom CUDA kernels that pick a small subset of relevant tokens.
- anchor: "the sparse attention, the lightning index... how to make these custom Cuda kernels pick a small subset of relevant tokens" (34:38–34:51)
- diluted: Attention sparsity via co-designed kernels.
- why_it_matters: Drives down cost/context handling OMNI relies on.
- omni_impact: Awareness; informs which models offer cheap long-context.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: model registry (context capability)
- flag: affirm
- confidence: low
- requires_reread: no

### v32.29 — Cost is the driving story / inference economics [HIGH]
- concept: Across Granite, Bob, and DeepSeek the recurring story is cost — driving down both low-hanging-task models and the top-line agent model; governing cost at enterprise breadth, not per-subscription.
- anchor: "the main story here for this model... cost matters... for large enterprises that need to govern the cost at the entire enterprise breadth rather than the individual subscription breadth" (29:20–29:34)
- diluted: Enterprise-breadth cost governance is the throughline.
- why_it_matters: Anchors OMNI's need for centralized AI cost governance.
- omni_impact: Govern AI cost at the OMNI-enterprise level, not per-user.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: cost governance, AI substrate contract
- flag: affirm
- confidence: high
- requires_reread: no

### v32.30 — Inferencing stack needs rethinking (sparsity/MoE default)
- concept: The inferencing stack must be rethought around sparsity/MoE as the default; serving infra needs comparable sparsity to match economics.
- anchor: "the inferencing stack right now need to be rethink rethought... closed labs right now can't match that inference economics without rebuilding their serving infrastructure around comparable sparsity" (34:58–35:34)
- diluted: Serving infra must adapt to sparse models.
- why_it_matters: If OMNI self-hosts, serving architecture choices matter for cost.
- omni_impact: Factor sparsity-aware serving into any OMNI self-hosting plan.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: serving/inference infra
- flag: new
- confidence: low
- requires_reread: no

### v32.31 — Context representation / memory management is a frontier [HIGH]
- concept: How we represent context to models is a key frontier; long sessions still cause models to forget, rewrite, or self-contradict, and context should be shown with minimal user work.
- anchor: "the way that we represent context, frankly, is one of the next real frontiers... It will forget stuff. It will rewrite things. It will consolidate in ways that are self-contradictory" (32:23–33:28)
- diluted: Context/memory representation is unsolved and critical.
- why_it_matters: Directly shapes OMNI's clinical-memory/longitudinal-coherence ambitions.
- omni_impact: Treat context assembly + memory as a first-class OMNI substrate concern.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: context router, memory modes, clinical memory
- flag: new
- confidence: high
- requires_reread: yes

### v32.32 — 1M context reopens RAG-vs-full-context decision [HIGH]
- concept: When 1M-token context becomes free/default, every RAG pipeline built in the last two years must rethink whether to keep retrieving or stuff the whole document set into context — a choice settled when context was expensive.
- anchor: "when the 1 million context becomes free at the default tier, every enterprise that built a rag pipeline in the last two years has to rethink. Do we keep retrieving, or do we just stuff the entire document set into the context?" (35:57–36:50)
- diluted: Cheap long context reopens retrieval-vs-stuff decisions.
- why_it_matters: OMNI should not hard-commit to RAG vs long-context vs cache.
- omni_impact: Make context mode a routed, per-task decision (not a single strategy).
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: context router, retrieval strategy
- flag: new
- confidence: high
- requires_reread: no

### v32.33 — Quantum is a team effort / ecosystem
- concept: Advancing quantum requires diverse skill sets (engineers, physicists, software, domain experts in chemistry/biology) — "it takes a village."
- anchor: "making any advance in quantum computing is always a team effort... it really does take a village" (37:49–38:48)
- diluted: Quantum progress is inherently multidisciplinary/collaborative.
- why_it_matters: Minor; thematic on ecosystem-building (echoes OMNI federation collaboration).
- omni_impact: Awareness only.
- landing_zone: thesis(P0)
- affected_artifacts: (context)
- flag: affirm
- confidence: low
- requires_reread: no

### v32.34 — University partnerships (UIUC, Georgia, MIT)
- concept: IBM advances quantum via decades-long university partnerships (UIUC, Georgia, MIT) now intensifying around quantum algorithms/applications and fundamental math.
- anchor: "the university partnerships you mentioned... UIUC at Georgia and then MIT... we're going to be looking at algorithms and applications" (39:34–40:44)
- diluted: External research partnerships drive quantum progress.
- why_it_matters: Minor; ecosystem/partnership model context.
- omni_impact: Awareness only.
- landing_zone: thesis(P0)
- affected_artifacts: (context)
- flag: affirm
- confidence: low
- requires_reread: no

### v32.35 — Quantum-centric supercomputing
- concept: UIUC focuses on "quantum centric supercomputing," tackling bigger challenges by activating the field (e.g., half-Möbius molecule creation).
- anchor: "UIUC is going to be focusing on something that we call quantum centric supercomputing" (41:11–41:23)
- diluted: Quantum integrated into supercomputing workflows.
- why_it_matters: Minor; relates to heterogeneous compute future.
- omni_impact: Awareness only.
- landing_zone: thesis(P0)
- affected_artifacts: (context)
- flag: affirm
- confidence: low
- requires_reread: no

### v32.36 — Quantum Advantage definition
- concept: Quantum Advantage = a workflow with a quantum component solving a problem cheaper, more accurate, or faster than classical computing alone; not one-size-fits-all.
- anchor: "Quantum advantage... is able to perform a solution to a problem in a way that's cheaper, more accurate, or faster than classical computing alone" (43:09–43:29)
- diluted: Quantum wins only on specific suited tasks.
- why_it_matters: Frames realistic quantum value; complements v31's Q-Day threat side.
- omni_impact: Awareness; quantum is task-specific, not a general OMNI compute path.
- landing_zone: thesis(P0)
- affected_artifacts: (context)
- flag: affirm
- confidence: low
- requires_reread: no

### v32.37 — Quantum + HPC + AI heterogeneous orchestration
- concept: Quantum isn't a big-data machine; QPUs must be coupled with GPUs/CPUs to orchestrate heterogeneous workflows and get the most from each part.
- anchor: "we really need a couple the CPUs, the quantum processing units with GPUs and CPUs altogether in order to be able to orchestrate these workflows" (43:49–44:13)
- diluted: Heterogeneous QPU+GPU+CPU orchestration.
- why_it_matters: Reinforces the orchestration/composability theme at the hardware layer.
- omni_impact: Awareness; orchestration is universal across the stack.
- landing_zone: thesis(P0)
- affected_artifacts: comparator registry (orchestration)
- flag: affirm
- confidence: low
- requires_reread: no

### v32.38 — Quantum best-fit domains (chemistry/materials/finance/healthcare/bio)
- concept: Best-suited quantum problems describe natural systems — chemistry, materials, physics — plus finance optimization, healthcare/life sciences, biology, and dynamic systems; chemistry likely first.
- anchor: "the best problems that we think are suited for quantum include things like chemistry, materials, physics... finance optimization, healthcare and life sciences, biology" (45:51–46:57)
- diluted: Quantum's near-term value is in natural-system simulation + optimization.
- why_it_matters: Long-horizon: healthcare/life-sciences quantum could eventually touch OMNI's domain.
- omni_impact: Awareness; potential far-future quantum-assisted clinical/optimization workloads.
- landing_zone: thesis(P0)
- affected_artifacts: (context), future work registry
- flag: affirm
- confidence: low
- requires_reread: no

### v32.39 — Organizational absorption capacity / Theory of Constraints (comment)
- concept: A viewer notes agentic AI success depends on organizational absorption capacity, and that agentic systems may shift bottlenecks rather than eliminate them (Theory of Constraints).
- anchor (§1 comment, @Javierplusai): "The success of these systems will depend not only on their technical capabilities, but also on how effectively organizations can integrate, adapt to, and operationalize them... As agentic systems are introduced, they may shift bottlenecks rather than eliminate them."
- diluted: AI shifts constraints; absorption capacity governs realized value.
- why_it_matters: OMNI rollout must account for operator absorption and moving bottlenecks.
- omni_impact: Build OS rollout should track constraint-shift and operator adoption.
- landing_zone: BuildOS(P6)
- affected_artifacts: rollout sequence, change-management doctrine
- flag: new
- confidence: med
- requires_reread: no

### v32.40 — AI orchestration / capability routing layer (net-new §2) [HIGH]
- concept: OMNI needs an AI orchestration substrate / capability-routing layer that routes work to the right capability (frontier reasoning, small specialists, embeddings, vision/speech, deterministic services/tools).
- anchor (§2): "It needs an AI orchestration substrate that can route work to the right capability... Generalist agent at the top; bounded specialists underneath."
- diluted: Add a capability-routing layer to the system map.
- why_it_matters: The central architectural contribution of v32 to OMNI.
- omni_impact: Define an AI Orchestration / Capability Routing layer in the system map + contract.
- landing_zone: contract(P1:AI substrate) + thesis(P0)
- affected_artifacts: OMNI_System_Map_vNext, ai_substrate_routing_spine_REV-176, AI substrate contract
- flag: new
- confidence: high
- requires_reread: yes

### v32.41 — AI is infrastructure, not a feature (net-new §2) [HIGH]
- concept: OMNI should not "add AI features"; AI must be a permanent substrate with routing, cost controls, context controls, evals, traces, memory, tool boundaries, and governance.
- anchor (§2): "OMNI needs AI as a permanent substrate with routing, cost controls, context controls, evals, traces, memory, tool boundaries, and governance."
- diluted: AI = standing substrate, not bolt-on feature.
- why_it_matters: Headline doctrine for the AI-substrate thesis revamp (REV-178).
- omni_impact: Encode AI-as-substrate as a thesis-level commitment.
- landing_zone: thesis(P0)
- affected_artifacts: omni_thesis_v3, ai_substrate_frame, HANDOFF (REV-178)
- flag: new
- confidence: high
- requires_reread: no

### v32.42 — Cost is architectural / cost-aware AI router (net-new §2) [HIGH]
- concept: At 1BN scale careless AI calls shape product feasibility; OMNI needs a cost-aware AI router from the beginning.
- anchor (§2): "OMNI needs a cost-aware AI router from the beginning."
- diluted: Cost is a first-class routing input.
- why_it_matters: Prevents budget-driven feasibility failure as OMNI scales.
- omni_impact: Cost tier is mandatory in the routing decision.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: capability router, cost governance
- flag: new
- confidence: high
- requires_reread: no

### v32.43 — Model/capability registry primitives (net-new §2) [HIGH]
- concept: Future primitives: model registry, capability registry, cost tier, latency tier, safety tier, clinical authority tier, context budget, token budget, fallback policy, escalation policy, task-to-model routing rules.
- anchor (§2): "model registry / capability registry / cost tier / latency tier / safety tier / clinical authority tier / context budget / token budget / fallback policy / escalation policy / task-to-model routing rules"
- diluted: A concrete schema for the routing substrate.
- why_it_matters: Buildable backlog for OMNI's AI substrate contract.
- omni_impact: Define these fields in the AI substrate contract.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI substrate contract, model/capability registries
- flag: new
- confidence: high
- requires_reread: no

### v32.44 — Generalist→specialist distillation loop for OMNI (net-new §2) [HIGH]
- concept: OMNI should expect: messy human/AI workflow → trace collection → pattern extraction → specialist workflow → evals → deterministic/tool-supported pathway → monitored drift → periodic re-distillation.
- anchor (§2): "messy human/AI workflow → trace collection → pattern extraction → specialist workflow → evals → deterministic/tool-supported pathway → monitored drift → periodic re-distillation"
- diluted: A named lifecycle loop for maturing AI workflows.
- why_it_matters: Connects v32 (distillation) with v30 (proof/drift) into one operating loop.
- omni_impact: Adopt the distillation loop in runtime product + Build OS.
- landing_zone: BuildOS(P6)
- affected_artifacts: Build OS, runtime proof layer, AI substrate contract
- flag: new
- confidence: high
- requires_reread: yes

### v32.45 — Context mode is a routed decision (net-new §2) [HIGH]
- concept: OMNI should avoid a single context strategy (not always RAG / long-context / cache / agentic retrieval); instead, context mode is a routed decision.
- anchor (§2): "Context mode is a routed decision."
- diluted: Choose retrieval/long-context/cache per task at routing time.
- why_it_matters: Prevents premature lock-in as context economics shift (see v32.32).
- omni_impact: Add context-mode selection to the capability router.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: context router, retrieval strategy
- flag: new
- confidence: high
- requires_reread: no

### v32.46 — Build OS needs composable build lanes (net-new §2) [HIGH]
- concept: "AI on the app" must also be composable: architect/planner, implementer, reviewer, test writer, migration checker, security checker, doctrine/router checker, context loader, eval runner — generalist orchestration with bounded specialists.
- anchor (§2): "We need composable build lanes: architect/planner, implementer, reviewer, test writer, migration checker, security checker, doctrine/router checker, context loader, eval runner."
- diluted: Multi-agent build roles, not one giant coding agent.
- why_it_matters: Shapes how OMNI itself is built (Agent Work Protocol / Build OS).
- omni_impact: Define multi-agent build roles, context-loading rules, lane permissions, proof obligations.
- landing_zone: BuildOS(P6)
- affected_artifacts: agent_work_protocol, Build OS agent roles, Build entry gate
- flag: new
- confidence: high
- requires_reread: yes

### v32.47 — AI Contract scope (net-new §2) [HIGH]
- concept: The AI Contract should cover model registry, capability envelopes, context router, eval/trace system, cost governance, tool authority, and memory modes; the System Map should add an AI Orchestration / Capability Routing layer.
- anchor (§2): "AI Contract: Model registry, capability envelopes, context router, eval/trace system, cost governance, tool authority, memory modes."
- diluted: Defines the contents of OMNI's AI substrate contract.
- why_it_matters: Direct spec for the REV-178 AI-substrate work.
- omni_impact: Author/extend the AI substrate contract with these sections.
- landing_zone: contract(P1:AI substrate)
- affected_artifacts: AI substrate contract, OMNI_System_Map_vNext
- flag: new
- confidence: high
- requires_reread: no

---

## Per-Video Concept Counts

| Video | Topic | §1 transcript concepts | §2 net-new concepts | Total |
|-------|-------|------------------------|---------------------|-------|
| v29 | Agentic Consent (transcript ≡ v25) | 20 | 6 | 26 |
| v30 | Synthetic Monitoring | 17 | 8 | 25 |
| v31 | Q‑Day / Post‑Quantum Crypto | 16 | 7 | 23 |
| v32 | Composable AI / Granite / Bob / Quantum | 39 | 8 | 47 |
| **Total** | — | **92** | **29** | **121** |
