# Cluster Inventory — v25–v26

- cluster: ai_substrate_2026 / v25–v26 (agentic consent / Delegated-Authority Envelope; digital certificate lifecycle / machine trust)
- sources: videos/v25.md (IBM — "Agentic Consent Explained: How AI Agents Act Safely and Responsibly", Grant Miller), videos/v26.md (IBM — "Your Certs Are Expiring: Digital Certificate Management Explained", Jeff Crume)
- date: 2026-06-04
- status: lossless concept inventory — non-binding evidence
- method: read §1 (verbatim transcript → anchors) and §2 (distillation → concepts) for each source; one block per distinct concept; no cap. NOTE: v25 §2 distillation is EMPTY and Nick flagged it un-analyzed ("idk opus, i don't think knox/chat analyzed this one actually, you should analyze the verbatim if needed"); all v25 concepts are derived from the verbatim §1 transcript directly. v26 has both §1 transcript and §2 distillation.

---

### v25 — Agentic consent = Delegated-Authority Envelope (who / what / scope / lifetime)
- concept: Delegated-Authority Envelope (the four-part consent object)
- anchor: "Agentic consent defines who delegated the authority, what actions are permitted, and the scope and lifetime of that delegation." (0:13–0:24)
- diluted: Consent for an agent is not a boolean grant but a structured envelope binding four fields — the delegating principal (who), the permitted action set (what), the boundary of work (scope), and the time/duration of validity (lifetime).
- why_it_matters: This is the canonical authority primitive OMNI needs the moment any agent acts on behalf of a patient, provider, or operator — it is the schema for "Right actor / Right authority" in the mantra.
- omni_impact: Change/sharpen — OMNI's authority spine (RBAC + Authority gates + Federation delegation) should carry an explicit delegated-authority envelope record (delegator, action scope, boundary, expiry) for every agent action, not coarse role grants.
- landing_zone: contract(P1: RBAC/Authority + CNS) + thesis(P0)
- affected_artifacts: Architecture Memory Control Plane (authority/schema spine), RBAC/Authority contract, CNS orchestration, Federation delegation, audit/AI-lineage, thesis §8 authority gates
- flag: new
- confidence: high
- requires_reread: yes

### v25 — Consent baseline: express vs implied
- concept: Two classical consent forms (express, implied)
- anchor: "there can be express consent which is unmistakably stated... 'Can I borrow your car?'... 'yes, but only go to the store and be back within an hour.'... Implied consent is really more through action... a sign that says property is under video surveillance, if I walk in... I implicitly say I understand." (1:05–1:49)
- diluted: Consent occurs when one party voluntarily agrees to another's proposal; it can be express (unmistakably stated, often conditional/scoped) or implied (granted by an action in a known context).
- why_it_matters: Grounds OMNI's consent model in the legal/clinical baseline — both forms appear in care (signed informed-consent docs vs. implied consent by entering a monitored facility / engaging a surface).
- omni_impact: Affirm — OMNI consent domain must represent both explicit (signed/affirmed) and implied (contextual/action-based) consent; the borrowed-car example is exactly a scoped+time-bound express grant.
- landing_zone: contract(P1: Consent/Identity) + thesis(P0)
- affected_artifacts: Consent contract, identity/consent records, informed-consent surfaces
- flag: affirm
- confidence: high
- requires_reread: no

### v25 — IT consent (explicit, informed, voluntary, affirmative action)
- concept: IT consent definition
- anchor: "IT consent... it is explicit informed voluntary action by a person for an organization to collect process or use information about them... it requires a clear affirmative action." (2:07–2:30) / "accept button... checkbox... cookies that pop up under privacy laws." (3:00–3:28)
- diluted: In IT systems, consent is an explicit, informed, voluntary, affirmative act (accept button / checkbox) authorizing an org to collect, process, or use a person's data for stated purposes.
- why_it_matters: This is today's static-consent baseline OMNI inherits for data collection/processing — the floor that agentic consent must extend beyond.
- omni_impact: Affirm — OMNI's data-collection/processing consent (HIPAA-adjacent, privacy-law) maps to this; affirmative-action + informed-purpose are required fields.
- landing_zone: contract(P1: Consent) + boot/governance
- affected_artifacts: Consent contract, privacy/compliance posture, data-processing records
- flag: affirm
- confidence: high
- requires_reread: no

### v25 — Agentic consent ≠ static / click-wrap
- concept: Static-consent inadequacy for agents
- anchor: "there's no static permissions being given. There's no click wrap agreements where you've got a checkbox or an accept... it is no longer a static environment." (4:00–4:29) / "agentic consent is not a one-time or static approval or clicking a checkbox." (13:34)
- diluted: Because agents reason and act autonomously in changing environments, one-time checkbox/click-wrap consent is structurally insufficient — consent must become continuous and responsive.
- why_it_matters: Names the anti-pattern OMNI must avoid — treating agent authorization like a signup checkbox — and motivates dynamic authority gates.
- omni_impact: Sharpen — OMNI guardrail: agent authority cannot be a static role grant; it must be continuously evaluated. Candidate for the Guardrail Anti-pattern Digest (Tier 0.5).
- landing_zone: boot/governance + thesis(P0)
- affected_artifacts: Guardrail Anti-pattern Digest, authority gates, thesis §8
- flag: new
- confidence: high
- requires_reread: no

### v25 — Context-aware & dynamic consent
- concept: Context-aware, dynamic consent property
- anchor: "the first thing is that we need to make sure that it is context aware and dynamic... there is a context that an agentic system is operating... and it's dynamic. It can possibly change." (5:23–5:53)
- diluted: Agentic consent must be evaluated against the live context of what the agent is trying to accomplish and how it intends to execute — and must re-evaluate as that context shifts.
- why_it_matters: Maps directly to OMNI's "Right context / Right moment" — authority decisions must read current clinical/operational context, not a frozen grant.
- omni_impact: Affirm/sharpen — CNS + authority gates must be context-evaluating, pulling current context packet at decision time.
- landing_zone: contract(P1: CNS) + thesis(P0)
- affected_artifacts: CNS orchestration, authority gates, context packets, thesis mantra
- flag: affirm
- confidence: high
- requires_reread: no

### v25 — Handling changing scenarios / scope drift / multi-agent fan-out
- concept: Scope-drift & agent-to-agent delegation hazard
- anchor: "we have to be able to handle changing scenarios... this application may actually call this agent but it also may call another agent that gets involved... by the nature of agentic and its non-deterministic nature, it's always in a dynamic changing environment." (5:55–6:35) / "the original permission that I gave it may be different as it changes scope." (5:00–5:10)
- diluted: An agent's effective scope drifts as it reasons and as it spawns/calls other agents and processes; the original grant can silently become mismatched, and consent must keep up across the fan-out.
- why_it_matters: This is the core delegation-chain risk for OMNI's agent runtime — sub-agents and tool calls can exceed the originally consented scope.
- omni_impact: Change — OMNI must propagate/constrain the delegated-authority envelope across sub-agent and tool-call chains; re-check authority on scope change. Ties to capability/MCP discipline.
- landing_zone: contract(P1: CNS + Capability/MCP) + BuildOS(P6)
- affected_artifacts: CNS, capability registry, MCP layer, sub-agent delegation, audit lineage
- flag: new
- confidence: high
- requires_reread: yes

### v25 — Identity as a control
- concept: Identity-governed authorization (IDP / IGA)
- anchor: "one thing we need to make sure is that identity is a control... we have some sort of an identity governance administration... IDPs and these can tell who the user is. It can authenticate agents... we can predefine what they're allowed to do. And we govern we govern this through identity." (6:37–7:13)
- diluted: Identity (of both users and agents) is the control point: an IGA/IDP layer authenticates principals, knows what each is, and predefines permitted actions — authorization is governed through identity.
- why_it_matters: Confirms OMNI's identity/RBAC plane must authenticate agents as first-class principals, not just humans, and pre-bind their action sets.
- omni_impact: Affirm — agents are identities in OMNI; IGA/IDP-equivalent governs human + agent + machine principals. Connects to v26 machine identity.
- landing_zone: contract(P1: Identity/RBAC) + thesis(P0)
- affected_artifacts: Identity contract, RBAC/Authority, agent identity, Federation
- flag: affirm
- confidence: high
- requires_reread: no

### v25 — Cryptographic verification + observability of actions
- concept: Cryptographically verifiable, observable authority
- anchor: "if we know the identities and we define what actions are available, this actually allows us to be cryptographically verified... we can trust when things are happening in a dynamic environment... we know actions, we can actually verify... we can have observability around us to know that we actually are allowing certain actions to happen." (7:16–7:43)
- diluted: When identities and permitted actions are defined, agent actions become cryptographically verifiable and observable, enabling trust + audit in a dynamic environment.
- why_it_matters: This is the proof/audit leg of OMNI's authority — every governed action should be verifiable and observable (Stripe-style immutable audit / black-box).
- omni_impact: Affirm/sharpen — OMNI authority gates should emit cryptographically verifiable, observable action records; bridges to v26 cert/machine-identity trust substrate.
- landing_zone: contract(P1: Audit/AI-lineage) + BuildOS(P6)
- affected_artifacts: audit log, AI lineage, observability/Runtime Proof, capability invocation records
- flag: affirm
- confidence: high
- requires_reread: no

### v25 — "Act with us, not instead of us"
- concept: Agent-with-human principle (keeper phrase)
- anchor: "we want the agent to act with us and not instead of us." (7:45–8:03) / "It ensures agents act with us and not instead of us, preserving trust, safety, and governance as autonomy scales." (13:49–13:55)
- diluted: The design north-star is collaborative agency — agents augment and act alongside humans under retained human authority, rather than fully replacing human decision-making.
- why_it_matters: Direct doctrine line for OMNI's care posture — agents support clinicians/operators within authority gates; humans retain final authority on consequential acts.
- omni_impact: Change — adopt as an OMNI AI-substrate doctrine line; aligns with human-in-the-loop authority gates. Note the comment-thread tension (autonomy vs. constant prompting) — OMNI resolves via policy-driven JIT prompting (below).
- landing_zone: thesis(P0) + boot/governance
- affected_artifacts: AI-substrate doctrine, authority gates, thesis §8
- flag: new
- confidence: high
- requires_reread: no

### v25 — Granular (fine-grained) permissions
- concept: Fine-grained action scoping
- anchor: "we want more granular permissions. So yes, I give permission for an agent to work on my email, but I only want to let it read my email and it cannot send email and it cannot delete email." (8:20–8:43)
- diluted: Move from coarse grants ("access email") to fine-grained per-action scopes (read ≠ send ≠ delete); least-privilege at the action level.
- why_it_matters: Maps to OMNI's capability model — agents get specific verbs on specific resources, not blanket domain access.
- omni_impact: Affirm — reinforces capability/MCP per-action grants and `requireCapability` audited mutations; least-privilege by action verb.
- landing_zone: contract(P1: Capability/RBAC) + BuildOS(P6)
- affected_artifacts: capability registry, requireCapability, RBAC, MCP tool scopes
- flag: affirm
- confidence: high
- requires_reread: no

### v25 — Time-constrained & transaction-based access
- concept: Ephemeral, per-transaction grants
- anchor: "make these time restrained and transaction based access... I want it to only be for a very narrow amount of time. I ideally don't want my permissions to last for a long time and only for the transaction that's happening... I only want the permission to be for that transaction for that actual instance." (8:47–9:33)
- diluted: Grants should be short-lived and bound to a single transaction/instance; the next action requires a freshly scoped grant rather than a standing permission.
- why_it_matters: This is the "lifetime" + "scope" legs of the envelope made operational — directly maps to short-lived tokens and per-act authorization in OMNI.
- omni_impact: Change/affirm — OMNI authority should default to ephemeral, transaction-scoped grants (short-lived tokens), re-issued per agent action; complements v26's shrinking-lifetime cert theme (short lifetimes as hygiene).
- landing_zone: contract(P1: Authority/RBAC) + BuildOS(P6)
- affected_artifacts: short-lived tokens, authority gates, capability invocation, audit
- flag: new
- confidence: high
- requires_reread: yes

### v25 — Governance policies implement the constraints
- concept: Policy engine deriving granular/time/transaction grants
- anchor: "when we have identities and we have governance, we can actually put policies in here that start identifying... what are the time constraints? what are how do I do it for transactions? what are the granular permissions that I want to derive from... I can input in my governance policies that will actually start implementing this." (9:48–10:13)
- diluted: A governance/policy layer encodes the rules that derive granular, time-bound, transaction-scoped permissions from identity — policy is the mechanism that produces each envelope.
- why_it_matters: Tells OMNI where the envelope is computed — a policy engine over the identity/authority plane, not ad-hoc per-surface logic.
- omni_impact: Affirm/sharpen — OMNI's authority/policy plane (Control Plane) is the canonical place to define consent-deriving policies; surfaces don't own this.
- landing_zone: contract(P1: Authority/Control-Plane) + boot/governance
- affected_artifacts: Architecture Memory Control Plane, policy engine, authority gates
- flag: affirm
- confidence: high
- requires_reread: no

### v25 — Just-in-time prompting + human-in-the-loop
- concept: JIT consent prompting / human-in-the-loop escalation
- anchor: "just in time prompting... now our agents decide that it wants to get access to something. Maybe it's really sensitive. It's financial information or it's very personal information... I want the agents to actually just in time prompt me if they are allowed. This could also happen if it comes to trying to take some action and there are no policies yet... It needs to come back to me and ask me for consent. We don't want this all the time but there are scenarios where we want this happen. So this is where in our governance process we put the human in the loop." (10:13–11:13)
- diluted: For sensitive actions or unpoliced gaps, the agent escalates just-in-time to the human for consent — selectively, not constantly — inserting a human-in-the-loop gate.
- why_it_matters: Resolves the autonomy-vs-control tension: OMNI agents run autonomously under policy but pause for human consent on sensitive/novel acts. This is exactly an OMNI authority gate.
- omni_impact: Change — OMNI authority gates should support JIT consent prompts triggered by (a) sensitivity classification or (b) policy-absence; tie to care-sensitive data (PHI, financial).
- landing_zone: contract(P1: CNS/Authority) + thesis(P0) + surface/projection(P5/P4)
- affected_artifacts: authority gates, CNS, consent-prompt surfaces, sensitivity classification, thesis §8 gates
- flag: new
- confidence: high
- requires_reread: yes

### v25 — Consent recorded → generates new policies (learning loop)
- concept: Consent capture as policy-generating feedback loop
- anchor: "I can give my consent and then that consent can drive it can be recorded and it can also create new policies so in the future it knows how to handle that." (11:27–11:39)
- diluted: When a human grants JIT consent, that decision is recorded and can synthesize a new policy, so future identical situations are handled automatically — consent compounds into governance.
- why_it_matters: Gives OMNI a governed learning loop — human authority decisions become durable, auditable policy, reducing future interruptions while preserving lineage. Maps to the Sense+Act governed loops.
- omni_impact: Change — OMNI should treat captured consent as a policy-authoring event (recorded + provenance + future-applicable), under AI lineage/audit.
- landing_zone: contract(P1: Authority/Control-Plane + AI-lineage) + BuildOS(P6)
- affected_artifacts: Control Plane, policy store, AI lineage, audit, Sense/Act loops
- flag: new
- confidence: med
- requires_reread: yes

### v25 — Transparency (compliance pillar)
- concept: Consent transparency / visibility
- anchor: "compliance things come out around consent... One of these is transparency... does this user have visibility to the policies? Does it have visibility to what consent has been given? Does it have visibility to where its information is happening?" (11:50–12:18)
- diluted: Compliant agentic consent requires the user to see the active policies, the consent already given, and where their information flows.
- why_it_matters: OMNI's patient/operator surfaces must expose consent state and data-flow visibility — a projection/surface obligation backed by truth.
- omni_impact: Affirm — OMNI needs consent-visibility surfaces/projections (what's consented, where data goes); aligns with privacy-law posture.
- landing_zone: surface/projection(P5/P4) + contract(P1: Consent)
- affected_artifacts: consent-visibility surface, data-flow projection, Consent contract, privacy posture
- flag: affirm
- confidence: high
- requires_reread: no

### v25 — Revocability (compliance pillar)
- concept: Consent revocation & change
- anchor: "the next thing is revoke ability... once a consent has been established... can I have visibility to that and can I revoke that consent at any point can I change the consent that I've given." (12:29–12:51)
- diluted: Users must be able to view, change, and revoke previously granted consent at any time — especially long-lived grants.
- why_it_matters: Revocation is a hard requirement for care consent (patients withdraw consent); OMNI must support live revocation that propagates to active agents/grants.
- omni_impact: Change/affirm — OMNI consent records must be revocable and the revocation must propagate to outstanding delegated-authority envelopes/tokens.
- landing_zone: contract(P1: Consent/Authority) + surface/projection(P5/P4)
- affected_artifacts: Consent contract, revocation propagation, token invalidation, consent surface
- flag: affirm
- confidence: high
- requires_reread: no

### v25 — Personalization (compliance pillar)
- concept: Per-user data-area control / carve-outs
- anchor: "the final thing is personalization which is really about how much control do I have over what type of information I can control in this environment... I allow access to data... but I do not ever want to give access to a very specific area or folder or drive of data." (12:51–13:24)
- diluted: Users can personalize consent down to carve-outs — granting broad data access while permanently excluding specific areas/folders/datasets.
- why_it_matters: Maps to OMNI ownership/visibility boundaries — patients/operators can fence off specific data (e.g., a sensitive record class) from agent access.
- omni_impact: Affirm/sharpen — OMNI's ownership/visibility boundaries should support user-defined exclusion carve-outs enforced at the authority gate.
- landing_zone: contract(P1: Consent/RBAC) + thesis(P0)
- affected_artifacts: visibility boundaries, data carve-out policy, RBAC, Consent contract
- flag: affirm
- confidence: med
- requires_reread: no

### v25 — Consent as a "living contract"
- concept: Living-contract framing (keeper phrase)
- anchor: "agentic consent is not a one-time or static approval... It's a living contract between humans and machines grounded in identity, intent, and the context of what's happening." (13:34–13:49)
- diluted: Agentic consent is best modeled as a living contract — continuously grounded in identity, intent, and context — between humans and machines.
- why_it_matters: A crisp doctrine phrase for OMNI's consent/authority model; note the §1 comment ("Living contract describes what G42-Microsoft already operationalized") corroborates the framing.
- omni_impact: Change — adopt "living contract" as the OMNI framing for the delegated-authority envelope + dynamic consent; cite in thesis authority section.
- landing_zone: thesis(P0) + boot/governance
- affected_artifacts: thesis authority/consent section, AI-substrate doctrine, comparator registry (G42-Microsoft note)
- flag: new
- confidence: high
- requires_reread: no

---

### v26 — Trust is infrastructure
- concept: Trust-as-infrastructure (keeper framing)
- anchor: "In a world where everything is connected, trust is infrastructure. And digital certificates are what keep that infrastructure standing." (9:15–9:22)
- diluted: In a fully connected system, machine trust is not a feature but load-bearing infrastructure; certificates are the structural members holding it up.
- why_it_matters: Elevates machine/cryptographic trust to substrate-level concern for OMNI — consistent with the AI-substrate pivot and v25's verifiable-authority theme.
- omni_impact: Change — add to thesis/operational-risk doctrine: "machine trust / cryptographic identity is part of OMNI's operational trust substrate."
- landing_zone: thesis(P0) + boot/governance
- affected_artifacts: thesis operational-trust section, operational-risk doctrine, Runtime Proof
- flag: new
- confidence: high
- requires_reread: no

### v26 — Digital certificate = credential for machines
- concept: Certificate as machine identity (not person)
- anchor: "at a high level, it's basically a credential for machines. A lot of people think it identifies the person, but actually it identifies a machine... are you really you? Or is the machine you're using the machine that we expect you to be using?" (0:42–0:56)
- diluted: A digital certificate is a machine credential answering "is this machine the machine we expect?" — identity for services/devices, distinct from human identity.
- why_it_matters: OMNI will run many services/agents/endpoints; each needs a machine identity distinct from (but bound to) human/agent principals from v25.
- omni_impact: Affirm — OMNI's identity plane must include machine identity as first-class; complements v25 "identity as a control" (humans + agents + machines).
- landing_zone: contract(P1: Identity/Federation) + BuildOS(P6)
- affected_artifacts: machine identity inventory, Identity contract, Federation trust rails, service identity
- flag: new
- confidence: high
- requires_reread: no

### v26 — Certificate components (name/ID, public key, CA signature)
- concept: Anatomy of a certificate
- anchor: "in that certificate, there's an identifier as to what is the name of the server... like a passport. And then there's a public key... There's a matching private key that is stored on the server... ultimately this thing is signed by a certificate authority." (1:16–1:45)
- diluted: A certificate binds a server identifier (name) to a public key (with private key held secretly on the server) and is signed by a certificate authority.
- why_it_matters: Defines the binding OMNI relies on for any TLS/HTTPS endpoint, MCP server, partner API, and service-to-service link.
- omni_impact: Affirm — background mechanism for OMNI's service endpoints; the name↔key↔CA binding is what machine-identity inventory tracks.
- landing_zone: BuildOS(P6) + contract(P1: Identity)
- affected_artifacts: service endpoints, machine identity inventory, TLS config
- flag: affirm
- confidence: high
- requires_reread: no

### v26 — Certificate authority = trusted third party (passport analogy)
- concept: CA as trust anchor
- anchor: "what is a certificate of authority? That's a third party, a trusted third party that is vouching for the identity of this binding public key to that ID... like a passport... You trust the U.S. Government when I show my passport because they've authenticated me." (1:45–2:17)
- diluted: A CA is a trusted third party vouching for the public-key↔identity binding — trust is delegated to the authority, not to the presenter (passport model).
- why_it_matters: Mirrors OMNI's authority/federation trust topology — trust is anchored in a vouching authority; relevant to cross-operator federation trust roots.
- omni_impact: Affirm/sharpen — Federation's cross-operator trust needs trust anchors analogous to CAs; note §1 comment skepticism ("there is no real authority with the way new certificates can be issued") as a caution on weak trust roots.
- landing_zone: contract(P1: Federation) + boot/governance
- affected_artifacts: Federation trust roots, trust topology, cross-operator authority
- flag: new
- confidence: med
- requires_reread: no

### v26 — Public/private (asymmetric) key encryption
- concept: Asymmetric key pair mechanics
- anchor: "now that you know the public key of the server... you can encrypt a message with it and know that only that server will be able to read it because only it has the matching private key... what is encrypted with one key can only be decrypted with the other." (2:17–2:38)
- diluted: Asymmetric crypto: encrypt with the public key, only the holder of the matching private key can decrypt (and vice-versa) — the basis of confidential channels and signatures.
- why_it_matters: Underpins both v25 "cryptographically verified" authority and OMNI's confidential service communication.
- omni_impact: Affirm — foundational mechanism; links v25 cryptographic verification to v26 cert substrate.
- landing_zone: BuildOS(P6)
- affected_artifacts: TLS/encryption layer, signing/verification, secure transport
- flag: affirm
- confidence: high
- requires_reread: no

### v26 — Three functions: authentication, confidentiality, integrity
- concept: Cert security triad
- anchor: "certificates then enable three functions, primarily. One is authentication... is that server who it claims to be? The next thing is confidentiality... encrypts all of the information... the third piece is integrity... communications have not been tampered with." (2:38–3:21)
- diluted: Certificates deliver authentication (is the server genuine?), confidentiality (encrypted channel via session key exchange), and integrity (tamper-evidence).
- why_it_matters: These three are the trust guarantees OMNI's endpoints/agents depend on for every governed interaction and data exchange.
- omni_impact: Affirm — the triad is the security floor for OMNI service comms; integrity ties to immutable-audit posture.
- landing_zone: BuildOS(P6) + contract(P1: Audit)
- affected_artifacts: secure transport, audit/integrity, service comms
- flag: affirm
- confidence: high
- requires_reread: no

### v26 — Man-in-the-middle prevention
- concept: MITM defense via cert validation
- anchor: "Without certificates... everything becomes vulnerable to this thing we call a man in the middle attack... if you're using digital certificates properly... we'll know when we try to set up this session that this is not the web server that we were trying to match. And now we're gonna cancel that." (3:21–4:11)
- diluted: Proper cert validation detects an interposed attacker (who would otherwise relay/read both sides) by catching the identity mismatch and aborting the session.
- why_it_matters: Concrete failure mode OMNI must defend against across every endpoint, partner connector, and agent tool call.
- omni_impact: Affirm — cert validation is mandatory for OMNI endpoints; agent tool/MCP connections must validate server identity to prevent MITM.
- landing_zone: BuildOS(P6) + contract(P1: Capability/MCP)
- affected_artifacts: TLS validation, MCP/connector trust, endpoint security
- flag: affirm
- confidence: high
- requires_reread: no

### v26 — Machine identity sprawl
- concept: Certificate/identity sprawl at enterprise scale
- anchor: "In a modern enterprise, you don't have a certificate, you have thousands. Web servers, APIs, microservices, load balancers, VPNs, IOT devices, internal service to service communication... This is what we call machine identity sprawl. All of those certificates are identities." (4:13–4:37)
- diluted: A real system has thousands of machine identities (certs) across servers, APIs, microservices, balancers, VPNs, IoT, and internal traffic — each a managed identity.
- why_it_matters: §2 names OMNI's future sprawl explicitly (APIs, internal services, MCP servers, agent runtimes, partner connectors, webhooks, dashboards, AI tool servers, DB paths, external rails) — all enter the machine-identity graph.
- omni_impact: Change — OMNI needs a machine-identity inventory as a first-class operational concern in Build OS / Runtime Proof.
- landing_zone: BuildOS(P6) + contract(P1: Federation/Identity)
- affected_artifacts: machine identity inventory, service ownership registry, Runtime Proof
- flag: new
- confidence: high
- requires_reread: no

### v26 — Certificate failure = hard, ungraceful, silent-then-loud
- concept: Cert-failure blast radius
- anchor: "if any one of these fails, then systems just break all at once... this isn't subtle. Users get blocked immediately, applications fail hard, trust is instantly broken, no graceful degradation, and often there's no useful error message." (4:50–5:13) / "When certs fail quietly, systems fail loudly." (9:04–9:08)
- diluted: Certificate failure is binary and brutal — instant blocking, hard failures, no graceful degradation, often no useful error — a forgotten cert can take down banks/airlines/emergency services with no attacker.
- why_it_matters: A self-inflicted outage class OMNI must engineer against; "trust is instantly broken" is catastrophic for a care substrate.
- omni_impact: Change — add to OMNI operational-risk doctrine; cert-dependency failure is a top-tier availability risk requiring proactive monitoring/CI checks.
- landing_zone: boot/governance + BuildOS(P6)
- affected_artifacts: operational-risk doctrine, Runtime Proof, expiry monitoring, CI checks
- flag: new
- confidence: high
- requires_reread: no

### v26 — Shorter lifetimes: safer but more fragile (security trade-off)
- concept: Lifetime/fragility trade-off
- anchor: "Certificates don't last forever and that's actually by design... shorter lifetimes reduce risk by limiting exposure if a key happens to be compromised, forcing regular revalidation... But this introduces operational risk... This is a classic cybersecurity trade-off. The thing that makes you safer also makes you more fragile." (5:14–5:54)
- diluted: Shorter cert lifetimes improve hygiene (limit compromise window, force revalidation) but raise operational fragility (more frequent renewals, more failure chances) — the safer thing is also the more fragile thing.
- why_it_matters: Generalizes to OMNI: this same trade-off appears in v25's ephemeral/per-transaction grants — short-lived = safer but demands automation to stay reliable.
- omni_impact: Affirm/sharpen — OMNI doctrine: short-lived credentials/tokens (certs AND authority grants) require automation to avoid fragility; ties v25 ephemerality to v26 renewal automation.
- landing_zone: boot/governance + BuildOS(P6)
- affected_artifacts: operational-risk doctrine, token/cert automation, authority-grant lifecycle
- flag: new
- confidence: high
- requires_reread: no

### v26 — Shrinking validity windows (200d→100d→47d)
- concept: Industry-mandated lifetime compression (CA/Browser Forum)
- anchor: "The current widely adopted standard comes from the CA browser form... In 2026, the recommended life cycle is 200 days. In 2027, it's all the way down to 100 days. In 2029... It's 47 days... the days of manual certificate management are numbered." (6:08–6:45)
- diluted: The CA/Browser Forum is compressing public cert validity hard — 200 days (2026) → 100 (2027) → 47 (2029) — making manual renewal untenable.
- why_it_matters: Concrete, dated external forcing function; OMNI's cert/key automation cannot be deferred — the window shrinks on a fixed schedule.
- omni_impact: Change — OMNI Build OS must plan automated cert lifecycle now against these dates; note §1 comments flag this as a real crisis for smaller orgs/IoT.
- landing_zone: BuildOS(P6) + boot/governance
- affected_artifacts: cert automation roadmap, Build OS infra plan, Governance Cadence (expiry-drift audits)
- flag: new
- confidence: high
- requires_reread: no

### v26 — Manual cert management does not scale → automate
- concept: Automation imperative
- anchor: "manual certificate management does not scale. The future is automated issuance, automated renewal, and automated deployment. Centralized visibility... certificates should renew themselves before you even know they exist." (8:27–8:46)
- diluted: At sprawl scale with shrinking lifetimes, only automated issuance/renewal/deployment with centralized visibility works — certs should self-renew invisibly.
- why_it_matters: Sets the operating target for OMNI's machine-trust substrate — invisible, automated, centrally observable lifecycle.
- omni_impact: Change — OMNI Build OS / infra doctrine: automated certificate lifecycle management + centralized visibility is required, not optional.
- landing_zone: BuildOS(P6)
- affected_artifacts: automated cert lifecycle, centralized cert visibility, infra doctrine
- flag: new
- confidence: high
- requires_reread: no

### v26 — Certificate lifecycle management (discover→issue/deploy→monitor→rotate→revoke→retire)
- concept: Six-phase cert lifecycle
- anchor: "first of all, we have to discover... can't secure things you can't see... Then we're going to issue and deploy... automated, policy driven... Then we have to monitor for expirations and policy and usage... rotate certificates... replace them before they expire, not after. Then revoke any... compromised or misused... finally, we're gonna retire any of these old certs." (6:56–8:05)
- diluted: The cert lifecycle is six phases: discover all certs → issue/deploy (automated, policy-driven) → monitor (expiry/policy/usage) → rotate (replace before expiry) → revoke (compromised/misused) → retire (clean up stale keys).
- why_it_matters: A ready-made operational checklist OMNI can adopt directly for its machine-identity substrate (mirrors v25's lifecycle thinking for authority).
- omni_impact: Change — adopt the six-phase lifecycle as OMNI's machine-identity/cert operating model under Runtime Proof + Governance Cadence.
- landing_zone: BuildOS(P6) + boot/governance
- affected_artifacts: cert lifecycle runbook, Runtime Proof, Governance Cadence, machine identity inventory
- flag: new
- confidence: high
- requires_reread: no

### v26 — Full cryptographic risk spectrum (beyond certs)
- concept: Broader crypto-hygiene scope
- anchor: "you want a system that covers the full spectrum of cryptographic risk, not only certs, but also key sizes, quantum safe ciphers, secure libraries, and compliant protocols in your environment." (8:06–8:19)
- diluted: Real crypto governance spans more than certs — key sizes, quantum-safe ciphers, secure libraries, and compliant protocols all belong in scope.
- why_it_matters: Expands OMNI's crypto-hygiene mandate (incl. post-quantum readiness — echoed by §1 "quantum deadlines?" comment) beyond just expiry tracking.
- omni_impact: Sharpen — OMNI crypto-hygiene doctrine should cover key strength, PQ ciphers, library/protocol compliance, not just cert expiry.
- landing_zone: boot/governance + BuildOS(P6)
- affected_artifacts: crypto-hygiene doctrine, dependency/library audits, protocol compliance, PQ readiness
- flag: new
- confidence: med
- requires_reread: no

### v26 — Certificates: hidden liability → governed security control
- concept: Reframe certs as governed control
- anchor: "If you do it right, certificate lifecycle management turns certificates from a hidden liability into a governed security control." (8:19–8:27)
- diluted: Done well, cert lifecycle management converts certificates from an invisible risk into an actively governed security control.
- why_it_matters: Matches OMNI's governance philosophy — surface hidden substrate truth and govern it; machine trust becomes a managed control, not background trivia.
- omni_impact: Affirm — frames machine-trust as a governed control plane element; consistent with OMNI's "govern the substrate" thesis.
- landing_zone: boot/governance + thesis(P0)
- affected_artifacts: governance posture, machine-trust control plane, thesis operational section
- flag: affirm
- confidence: high
- requires_reread: no

### v26 — Routing: machine trust is infra/Runtime-Proof, NOT a product domain
- concept: Correct landing zone for machine trust (anti-domain-sprawl)
- anchor: "This one is not core AI substrate, but it is very relevant to OMNI's runtime trust infrastructure... this should not become a product domain. It belongs in Build OS / infrastructure doctrine... route under Infrastructure / Runtime Proof / Federation-adjacent trust rails." (§2)
- diluted: Machine trust / cert lifecycle must NOT be modeled as an OMNI product domain — it is infrastructure/Runtime-Proof/Governance-Cadence doctrine, with Federation-adjacent trust rails.
- why_it_matters: A payload-noun-≠-domain discipline call (per `D0THES-GRD-026`) — prevents OMNI from spawning a spurious "certificates" domain.
- omni_impact: Affirm — explicitly route machine trust to Build OS / Runtime Proof / Governance Cadence; thesis gets one trust-substrate line; not a System Map domain.
- landing_zone: boot/governance + BuildOS(P6)
- affected_artifacts: System Map (no new domain), Build OS infra doctrine, Runtime Proof, Governance Cadence, thesis line
- flag: new
- confidence: high
- requires_reread: no

### v26 — Machine trust underpins agent-native Federation
- concept: Machine trust as prerequisite for agentic Federation
- anchor: "Agent-native Federation cannot work if MCP servers, partner APIs, internal agents, or service endpoints cannot prove who they are... as OMNI becomes agentic, machine identity and cert lifecycle become part of the AgentOps control plane, not background IT trivia." (§2)
- diluted: Agentic Federation depends on machine trust beneath it — MCP servers, partner APIs, internal agents, and endpoints must prove identity, making cert/machine-identity part of the AgentOps control plane.
- why_it_matters: Directly bridges v26 (machine trust) to v25 (delegated authority) and the agent runtime — Federation's cross-operator authority semantics ride on machine trust rails.
- omni_impact: Change — OMNI Federation + AgentOps control plane must depend on a machine-trust layer; agent tool/MCP endpoints require provable identity (ties to v26 MITM + v25 identity-as-control).
- landing_zone: contract(P1: Federation + Capability/MCP) + BuildOS(P6)
- affected_artifacts: Federation trust rails, AgentOps control plane, MCP/connector identity, agent identity
- flag: new
- confidence: high
- requires_reread: yes

---

## Per-video concept count

| video | source | concepts |
|---|---|---|
| v25 | Agentic Consent Explained (IBM, Grant Miller) — Delegated-Authority Envelope / agentic consent | 18 |
| v26 | Your Certs Are Expiring: Digital Certificate Management (IBM, Jeff Crume) — machine trust / cert lifecycle | 18 |
| **total** | | **36** |
