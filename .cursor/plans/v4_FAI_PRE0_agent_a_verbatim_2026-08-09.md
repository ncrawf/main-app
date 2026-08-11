# v4 — FAI — PRE-0 — AGENT A · BLIND ALTERNATIVE DESIGN

Document type: `evidence_or_ingestion` — **immutable once pasted**
Authority: **NONE.** Preservation confers no authority (`D0THES-GRD-036`). **No model authors the architecture.** Agreement between agents is not corroboration.
Status: **`verbatim_frozen`** · `never_default_loaded` — populated and frozen at commit `fac5881`. Provenance normalized at `539a966`+; **unresolved fields below are marked `unknown`, never guessed.**
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: **blind alternative design only.** This agent never audits our plan and never sees it.
Manifest action: `add_tier4` **PROPOSED** — not landed.
Review gate: `user_knox_required`

**Where this came from:** the operator ran the prompt in §2 below in a fresh external chat and pasted the raw answer into §3. **Protocol of record:** `v4_FAI_PRE0_preflight_brief_and_protocol_2026-08-09.md`. **Consumed by:** `v4_FAI_PRE0_reconciliation_ledger_2026-08-09.md` — every materially distinct finding gets a row and a disposition there, and **G1/G3 cannot close while a row is undisposed.**

**This agent produces a design and nothing else.** It does not review the FAI plan — that is Agent C's job, and comparing the two is the reconciler's job, not any agent's.

---



## §1 — ## Provenance — FILL THIS IN WHEN YOU PASTE


| Field                       | Value                                                       |
| --------------------------- | ----------------------------------------------------------- |
| Model + version             | opus 5 max                                                  |
| Provider / family           | Anthropic |
| Date + time run             | 8/9/2026                                                    |
| Who ran it                  | Nick (operator)                                             |
| **Prompt used**             | **the block in §2 of THIS file, verbatim**                  |
| Prompt source of record     | `v4_FAI_PRE0_preflight_brief_and_protocol_2026-08-09.md` §5 |
| Prompt modified in any way? | **NO** — if yes, quote the change                           |




### Blindness declaration — every line matters; a "yes" does not void the run, it scopes it


| Was the agent...                                                             |                                                   |
| ---------------------------------------------------------------------------- | ------------------------------------------------- |
| a **fresh context** with no prior OMNI conversation?                         | YES                                               |
| **blind to the repository** — no repo access, no file reads, no code search? | **YES**                                           |
| **blind to the internet** — no web search, no browsing, no retrieval?        | **NO**                                            |
| **blind to the OMNI name** — did the prompt or any tool reveal "OMNI"?       | **YES**                                           |
| blind to **our plan, charter, package shape, Reactor, root requirements**?   | **YES**                                           |
| blind to the **failure record / handoff**?                                   | **YES**                                           |
| blind to the **other agents' submissions**?                                  | **YES**                                           |
| Did it ask clarifying questions before answering?                            | NO                                                |
| Any tool calls made?                                                         | **YES — canvas/artifact tooling only.** The frozen response records reading a canvas SDK surface, writing the design to a canvas, and running a type check. **No repository or web retrieval is evidenced.** Exact call set unrecorded (`unknown`) |


**Why the repo and internet lines exist:** an agent with repository access is **not blind** — it can read our decomposition. An agent that searched the web for "OMNI architecture" is **not blind** either. **Neither invalidates the submission — but the reconciliation must know**, because a "convergence" produced by an agent that read our answer is not convergence.

---



## §2 — THE EXACT PROMPT THAT WAS SENT

*(copy from here; do not retype. If you change a word, say so in §1.)*

```
Design the architecture and the architecture-management system for a
2030-2035 longitudinal care and business operating substrate.

CONTEXT (facts only)
It serves patients, providers, clinical and non-clinical staff, operators,
enterprises, federations of operators, external principals (payers,
pharmacies, labs, lenders, suppliers, employers, public programs),
software agents, connectors to ordinary business systems (email, chat,
payroll, banking, calendars), sensors, devices and eventually robotics.

It must preserve, as first-class and non-collapsible:
- non-fungible authority among legally and professionally independent
  principals whose truths, commitments, refusals and liabilities cannot be
  merged into one platform's judgement;
- patient consent, refusal and represented authority;
- source sovereignty (external systems remain authoritative for facts
  committed in their own systems);
- separation of clinical meaning from financial/commercial interest;
- correction and reopening without erasing history;
- longitudinal continuity across changing counterparties and operators;
- portability and non-captivity;
- proof of what happened, under whose authority.

It must support thousands of LOGICAL operator instances, which may run on
one multi-tenant deployment, several regional deployments, dedicated
enterprise installations, or federated nodes. Logical instance is not the
same thing as physical deployment.

Large numbers of human and machine actors must be able to propose, review,
implement, propagate, observe and repair changes to the system - without
any single agent, vendor, deployment, ontology or control plane becoming
sovereign.

Treat the requested outputs below as CONCERNS THAT MUST BE COVERED, not as a
prescribed decomposition. You may merge, split, rename, reorder or reject
these categories if a materially better architecture requires it. If you do,
show explicitly where every requested concern is handled.

PRODUCE
 1. architecture artifact taxonomy (what document/resource classes exist,
    what each owns, what each forbids)
 2. architecture content model
 3. architecture operations / change model
 4. multi-agent and fleet operating model
 5. deployment and variation model
 6. repository / package shape
 7. conformance and observability model
 8. the TEN most dangerous omissions in your own design
 9. falsifiers - what evidence would show your design is wrong
10. what must be correct AT PLANTING versus what may safely evolve later

THEN ANSWER THIS SEPARATELY AND EXPLICITLY
Which parts of your own proposal become WRONG because healthcare contains
legally and professionally independent principals whose truths,
commitments, refusals and liabilities cannot be collapsed into one
platform? Name the specific assumptions in your design that fail, and what
you would replace them with.

CONSTRAINTS
- No vendor product may be the only place a rule can live.
- Do not assume a single source of truth across principals.
- If you propose ANY shared control plane, ontology, workflow engine, event
  graph or semantic layer, state exactly: what it may own, what it may
  NEVER own, how independent-principal authority survives it, its failure
  boundary, and how it can be replaced.
- State what you are uncertain about rather than resolving it silently.
```

---



## §3 — VERBATIM RESPONSE

*(paste the raw answer between the markers. Do not edit, summarize, reformat or correct it. Corrections belong in the reconciliation ledger, which cites this file.)*

I'm considering whether this architectural design request requires the brainstorming skill first, since it's a creative analytical task rather than code work in an existing project. The canvas skill explicitly mentions architecture reviews, and this is a substantial architecture design document. A canvas could present the content nicely with good visual hierarchy, but there's a real risk of burying the intellectual substance in UI work when the conceptual content is what actually matters here. I need to weigh whether the presentation benefit justifies the effort and potential distraction from the core deliverables. I should check the canvas skill to see if it's actually the right fit here, though the user hasn't explicitly asked for one and writing to an unknown workspace feels presumptuous. But the skill does list architecture reviews as a use case. Regardless, the real work is thinking through the architecture itself — the content quality matters far more than the presentation format. Let me focus on understanding the core problem: designing a longitudinal care and business operating substrate for 2030-2035, along with the architecture-management system that would govern how it evolves and gets verified across the organization.
The user's key insight is that healthcare isn't a single-truth system with one canonical record, one ontology, one workflow engine — it's a network of independent principals making attributed claims and commitments to each other. Most platforms assume centralized authority and state, which breaks down. So the architecture needs to be built around attributed claims and commitments between principals rather than canonical state. I'm starting to map out the foundational primitives: principals as legally or professionally distinct loci of authority, with different types like natural persons, licensed professional roles, and legal entities. Commitments create liability through obligations between parties—orders, referrals, authorizations, payments, scheduling promises—each with conditions, expiry dates, and discharge records that track fulfillment. Refusals and objections are first-class entities distinct from mere absence of consent, encompassing patient refusals, clinician refusals based on professional judgment, payer refusals, and crucially, silence as a third state that's neither consent nor refusal. Authority grants and warrants represent delegations of power with specific provenance and constraints. Reconciling divergent assertions means holding both views rather than forcing resolution, with each principal's interpretation explicitly marked as their own working perspective. Episodes of continuity aren't records themselves but rather braided chains of identity and care assertions that must persist across operator changes, so they can't depend on any single system's IDs. The key architectural insight is splitting what most platforms merge together: a record plane that holds only attributed assertions and their provenance, separate from an interpretation plane of many non-authoritative views like clinical summaries or billing perspectives, each one explicitly attributed and replaceable. Clinical assertions must remain independent from financial incentives — a coding suggestion is an act by the coding principal, not a mutation of the clinician's original note. The system needs to track who benefits from each assertion, making financial interests visible as attributed disclosures. I'm also thinking about maintaining separate vocabularies for clinical and billing domains, with explicit, versioned translations between them that are themselves attributed acts.
Translation is fundamentally a claim, not a fact — it's never a simple identity mapping. The architecture must enforce non-collapsibility: no financial artifact derived from clinical data can masquerade as clinical fact, and no clinical assertion can be silently amended by revenue processes, which should be verifiable through lineage typing.
For managing the system itself across thousands of instances and deployment topologies with many human and machine actors, I'm treating architecture as versioned, attributed, machine-checkable artifacts using the same primitives as clinical assertions — commitments by governing principals with defined scope, effective dates, and conformance tests.
The system needs normative levels with different change velocities: invariants requiring constitutional process, wire-level protocols, jurisdiction-specific profiles, and per-instance policies. Since nobody can be forced to upgrade, version negotiation and capability declaration happen at every boundary, with a defined compatibility window and deprecation protocol where the deprecator bears the cost. Conformance isn't self-reported — instances must pass independently runnable, portable test suites with signed results, and multiple competing certifiers can coexist on the substrate.
Fork rights are structural: portability, exit capability, and the ability for a federation to run its own registry or profile so that if governance fails, you can fork the ontology and continue interoperating at the invariant layer. Change propagates via epidemic/gossip and pull models with explicit per-instance adoption state rather than central push control. Machine agents operate under scoped warrants with mandatory provenance of authority, rate limits, and blast-radius controls — every agent action is an attributed assertion or proposed commitment that requires human countersignature when it creates liability, since agents are only principals in a delegated sense.
Agent fleets need identity, capability attestation, sandboxing, canary deployments across instances, and reversibility. The repository structure mirrors the normative levels: invariants as a tiny, human-readable constitution; protocol for wire contracts and schemas; multiple versioned vocabularies with individual owners and attributed translations rather than global merges; profiles for jurisdictional bindings; conformance suites per level; and reference implementations from at least two independent parties to ensure rules aren't implementation-defined.
Beyond that, I'm thinking through deployments as topology descriptors rather than code, governance structures with decision records and dispute tracking, migrations that handle data and semantic evolution with reversibility, and evidence collection for conformance results and incidents. The key insight is that requiring two independent implementations prevents any single vendor product from being the sole authority on a rule—the spec and tests become the home of truth.
For the deployment model, I need to separate logical instances from physical deployments, which means establishing stable, cryptographic instance identity that's portable and not tied to any particular host, defining placement and jurisdiction constraints, designing a migration protocol so instances can move between deployments without breaking references, and supporting different tenancy modes.
Variation should live in profiles and capability declarations rather than code forks, with an explicit taxonomy of what can vary—local policy, UI, integrations—and what's invariant—the core rules, wire protocol, attribution semantics. Version skew across a federation is expected and normal, not an error condition.
For observability, I'm building a rights-aware system where different stakeholders see different views: operators monitor their own instance, patients see access logs to their records, regulators check conformance, and federations track aggregate health. There's no universal admin view—access is scoped to what each observer is entitled to see.
The metrics that actually matter are divergence rate, unresolved commitments, refusal honoring latency, correction latency, export success rate, authority chain completeness, and agent action reversal rate. Portability isn't something you claim—you have to routinely drill it, test the exit path, or you don't actually have it.
Now I'm being self-critical about the biggest gaps in my own design. Temporality is under-specified—bitemporal isn't sufficient; I need valid-time, assertion-time, knowledge-time for when this instance learned something, and effective-time for authority changes, including retroactive ones. Identity resolution across principals is another major gap—patient matching especially has been hand-waved rather than properly specified.
Deletion versus append-only immutability is a hard problem. GDPR erasure, sealed records, expungement, court orders, and safety concerns like protecting abuse survivors' addresses mean "never erase" is legally false. I need cryptographic redaction with tombstoning that's provably unreadable, plus the distinct concept of legally compelled forgetting. Economics matter too—someone has to pay for the substrate, for storing a 40-year record, for conformance, for connectors. Without an economic model, the architecture gets captured by whoever funds it. And then there's emergency and degraded mode—the whole system assumes verifiable authority chains and network availability, which isn't always realistic.
Key management and cryptographic lifecycle over decades is another layer. Signatures need to verify in 2065; key rotation, compromise, post-quantum migration, dead certificate authorities, deceased signers—all of these create real problems. Human factors are critical too. An attribution-rich, divergence-preserving record is harder to read, and if clinicians can't scan it in 30 seconds, they'll ignore it or build shadow systems instead. Views become the de facto truth, which undermines the whole premise. And I'm realizing the design assumes principals are honest-but-independent, which doesn't account for fraud, upcoding, coerced consent, malicious agents, sybil operators, or dark patterns.
Migration from the existing world is messier than I've treated it—HL7v2, faxes, DICOM, portals, phone calls, paper. The connector layer is where semantics get destroyed. Then there's governance capture itself: my governance model can be captured or deadlock, and I haven't solved who decides the invariants or how to bootstrap legitimacy. Forking has network-effect costs that make exit mostly theoretical. There are also questions about liability when the substrate errs, what "reasonable reliance" means for agents, the cost of append-only at scale, and the fact that patients are the least-resourced principal with different non-captivity requirements than operators.
I should pick the ten falsifiers with the sharpest teeth and ground each one in what specifically breaks in my design. Observable evidence matters: clinicians routing around the system with shadow documentation, the interpretive view becoming what gets cited in court while the record plane becomes decorative, divergence either never appearing because it's collapsed upstream or appearing constantly without resolution, independent implementations diverging on conformance in ways the spec can't settle, or export drills failing because other operators can't ingest the data.
I also need to flag when the system is nominally sovereign but everyone runs the same vendor anyway, when countersignatures are rubber-stamped over 99% of the time, when time-to-value is so long nobody deploys it, when governance never actually says no, when cost per patient-year exceeds what people will pay, or when the legal system won't recognize the attribution records as evidence—or worse, when discovery burdens make operators want less recording instead of more.
The hard choices happen at planting time: the identity model for attribution and assertions, the non-erasure semantics and redaction escape hatches.
At the foundation level, I'm locking in the time model, the principal and warrant structure including delegation chains, instance identity and portability keys, the invariant layer with its amendment procedure, a cryptographic agility framework that lets me swap algorithms without breaking the system, the separation between record, interpretation, and coordination planes, and treating refusal and silence as first-class concepts. I'm also building in a two-implementation rule and executable conformance from day one.
Everything else can shift: vocabularies, profiles, translations, UI and views, most workflow patterns, storage and transport, agent capabilities, federation rules, and the economics.
But now I'm getting at what actually breaks. The core assumption I need to challenge is whether the substrate can define "an assertion" in a universal way. Different professions have completely different epistemic units—a nurse's observation isn't the same as a radiologist's impression or a pharmacist's check or a lawyer's opinion. Forcing one schema for an attributed claim imposes an ontology that doesn't fit. Instead, I need an assertion envelope that stays opaque about its contents, with the body type owned by each profession's own vocabulary authority. The substrate only guarantees attribution, integrity, addressing, and time.
And there's another assumption cracking: that there's a single continuous thread of longitudinal data. But continuity itself is a claim—"this is the same person, the same care relationship"—and it's made by someone, and it's contestable. Different principals might legitimately disagree about identity. So instead of a global merge, I need continuity as attributed linkage assertions with confidence and basis, where each principal maintains their own view.
Then there's the warrant problem. I can't assume the substrate can verify whether a power of attorney is valid, whether a clinician is acting within scope, or whether an emergency justified breaking glass. Those are legal determinations made by courts and boards, not the platform. What I can do is have the substrate record asserted authority and its evidence, enforce only what's cryptographically verifiable plus declared scope, and expose an adjudication hook for access decisions.
Access control itself is local to each custodian—the substrate can't be the authority for data it doesn't hold. And certification isn't a global badge either; it's a principal's claim. Multiple certifiers publish signed results, and relying parties choose whom to trust. Finally, refusals don't magically propagate across operators. A patient's refusal recorded in one system doesn't legally bind another principal who never received it, and some refusals get overridden by law anyway. So refusals need to be directed speech acts with delivery receipts and an explicit override mechanism, distinguishing "known-to" from "recorded."
When it comes to process state, two principals will genuinely disagree about whether a referral was accepted. Rather than trying to enforce a single truth, each principal holds their own view, and the shared artifact is the message log with receipts. Mismatches become first-class "commitment divergences" that trigger human resolution. Correction without erasure also isn't always possible—legal holds, sealed records, minors aging into control, and erasure orders all complicate things. Retractions need to be first-class speech acts with propagation obligations on the relying party, plus a compelled-forgetting protocol with attested destruction. And the platform can't simply enforce clinical and financial separation either.
The actual separation is an organizational and legal matter, especially since many principals are legitimately both payer and provider. What I can enforce is typed lineage and disclosure—measure and expose the provenance, don't pretend to prevent the mixing. The real insight is that "no single source of truth" doesn't mean nothing is authoritative. Each principal is authoritative for their own commitments and their own record. The failure would be making everything equally uncertain. Instead, I need locus-of-authority typing: for each proposition class, determine who is authoritative—the payer for coverage determinations, the lab for results as-issued, the patient for their preferences and goals, the clinician for their clinical judgment. Truth becomes federated but not homeless.
Machine agents can't be principals with warrants like humans because liability doesn't attach to software. Every agent action must trace back to a responsible human or legal-entity principal who bears the liability, with an explicit accountable principal field that can't be null. Agent identity is useful for forensics, not for authority. The substrate itself isn't neutral either—anything defining the envelope, addressing, and conformance tests exercises power. I need an explicit minimality budget for the invariant layer and fork-ability that preserves interop on a smaller kernel. And portability that actually matters isn't just data export; it's relationship portability—the ability to continue commitments and authority chains with a new operator.
The exit protocol needs to handle warrant re-anchoring, commitment novation, and reference continuity. There's also a real tension I should name: append-only ledgers create discovery and subpoena exposure risks, and the more attributable you make everything, the more defensively people write. That chilling effect on candid documentation is a genuine problem worth acknowledging.
For any shared control plane—whether it's an ontology, workflow engine, event graph, or semantic layer—I need to state clearly what it may own, what it never owns, how independent authority survives, what the failure boundary is, and how replaceable it is. I should keep the number of shared things small and give each one consistent treatment.
The core candidates are the naming and integrity kernel with identifiers and content addressing, the assertion envelope protocol for attribution and scope, a pluggable directory for discovering principals and their capabilities, an executable conformance suite, federated vocabulary registries with attributed translations, a coordination protocol for offer and accept flows, and a governance registry for decisions. I'm explicitly rejecting global engines—no global workflow engine, patient index, event graph, semantic layer, or policy decision point. Though I'm still uncertain about whether an event graph itself could work within these constraints.
What I'm settling on instead: each principal maintains their own event logs with cross-references between them, but no centralized global graph. Any shared index becomes just a hint service—non-authoritative, where losing it only degrades discovery speed, never correctness. That leads me to a powerful criterion: anything shared must be safe to lose without breaking authority or correctness. I'm calling this the loss test. I should also add that anything shared must be forkable without losing prior evidence, and no shared component can be the sole place a rule lives—these become invariants for the architecture.
Now I'm sketching out an artifact taxonomy that covers both system architecture and how we manage the architecture itself. I'm thinking of organizing this into tiers, starting with a constitutional layer that defines the non-negotiable properties and amendment procedures, then moving into kernel protocols for identity, addressing, and signatures.
The next tier handles coordination—how systems speak to each other, handle receipts, and represent disagreements—while authority specs define delegation and revocation without prescribing who can do what clinically. Then interop bindings let jurisdictions apply local requirements like vocabulary choices and data residency without breaking the core semantics.
At the third tier, translation artifacts own their loss statements rather than pretending to be perfect equivalence, and connector contracts declare what's authoritative upstream versus what gets transformed. Instance charters establish logical identity and governance separate from deployment details, which stay purely topological.
Moving to tier four, I'm mapping out the change and evidence layer — RFCs, decision records, migration plans with reversals, deprecation notices that allocate costs, conformance suites and results, incident records, divergence registers, and exit playbooks. Each artifact has its own ownership and constraints. Now I'm thinking through the content model itself — what actually goes inside these documents, including how to express normative strength and scope of binding across instances.
The key insight is that architecture docs typically only prescribe what to do, so I need to build in sections for what's forbidden, counter-examples, failure boundaries, and replaceability criteria. Every normative artifact should carry the failure modes, how to detect them, and how to swap it out. I'm also considering whether to cover both the artifact model and the runtime information model — the assertions, commitments, warrants, and divergences that exist during execution — since those are equally important to the architecture description itself.
For the ops and change model, I'm mapping out a full lifecycle: proposal through contestation, decision by named authority, implementation across multiple instances, conformance checking, publication, adoption (where each instance pulls and declares its state), observation, and repair or rollback. There's also an emergency change path with retroactive review, deprecation with compatibility windows where the deprecator bears the cost, and crucially — no forced upgrades, with version negotiation instead. Plus mechanisms for dispute, appeal, and forking.
Now for multi-agent and fleet operations: agents are always delegated with an accountable principal, operating under a charter that specifies scope, blast radius, reversibility class, and rate limits with escalation paths. I'm defining three action classes — observe, propose, and commit-under-standing-authority — where only the last is risky and requires pre-granted narrow warrants with automatic expiry and sampling review. Fleet operations use canaries across instances with staged rollout and a local kill switch per instance so no single instance is forced to continue; there's no central kill switch as the only control. And agent-to-agent communication must never create commitments.
For the operational side, I'm thinking through how agents create assertions rather than mutations, so when two agents edit the same thing, contention becomes visible divergence instead of a conflict. I'm also considering the review economics — sampling audits with power calculations to catch rubber-stamping, and tracking reversal rates to measure how often decisions get undone. Agents need receipts, idempotency guarantees, and human-readable narrative trails for accountability.
Then there's the deployment and variation layer: logical instances separate from physical deployments, with portable instance identity, placement descriptors, residency rules, and migration mechanics. Version skew is expected, capability negotiation happens between instances, and I'm defining a taxonomy of what can vary at each tier. And finally the repo and package shape follows similar principles around versioning, releases, and signing.
For conformance and observability, I'm setting up executable conformance checks with multiple independent certifiers producing signed results, plus self-attestation paired with external verification. Observability is scoped by observer class and rights, with patient-facing access logs and federation health tracked through voluntary publication and sampling rather than central telemetry. Key metrics include divergence, refusal latency, correction latency, portability drill success, agent reversal rates, authority-chain completeness, and silence-versus-refusal classification. The tension I'm holding is that observability must not become surveillance of clinicians — that's a real constraint I need to respect.
Now I'm thinking about how to format all of this into something dense and rigorous that the user is asking for. I'm weighing whether a canvas would actually serve the user better here, or if keeping this in chat is the right call. The canvas skill is designed for structured artifacts, but reading through it to understand the mechanics feels like it might slow me down. My instinct is that the user wants the reasoning laid out directly in the conversation rather than having to open a separate document, so I'll stick with a well-organized chat response and make the prose-heavy content work here. I need to step back and actually read the canvas skill to understand when it applies, rather than continuing to second-guess myself. I also want to make sure I'm being explicit about uncertainties throughout the response, and I'm noting that rules need to live in multiple places—not just vendor products—so I'll anchor them in the normative spec and conformance tests.



——



I'll design this as a full architecture plus the meta-system that governs it. First let me check the canvas skill, since this is exactly the kind of large structured artifact it governs.

The canvas directory is empty-window. Let me read the SDK surface so I use real exports, and check for existing canvases.

No existing canvases here. Let me get the exact prop shapes for the components I'll use.
I have the SDK surface. Writing the architecture as a canvas — it's a large structured artifact with taxonomies, registers, and cross-referenced findings that read far better laid out than as one long chat message.
Let me clean up an unused import and a redundant style, and confirm the type check.
The JSX typing here doesn't accept key on SDK components. Wrapping the mapped elements fixes it.




———



Type check is clean. The full architecture is in the canvas; here's the substance.
The design rests on one inversion: nothing in the substrate is a fact. Everything is an attributed speech act — something a named principal said, promised, refused, or received, at a known time, under stated authority. Merging isn't a feature that got descoped; it's the failure mode the whole thing exists to prevent. Four planes stay deliberately unfused: attribution (append-only, owns provenance and nothing else), interpretation (many competing, disposable views that carry no liability until a principal re-asserts them), coordination (choreography of offers, refusals and receipts with no shared state machine), and governance (the architecture-management system, self-hosted on the same primitives).
Seven components are shared, each disclosed as you asked — what it may own, what it may never own, how independent authority survives it, its failure boundary, and how it's replaced. Five constitutional tests gate anything shared, and the sharpest is the loss test: if a shared component's failure can make an authority decision wrong rather than merely unavailable or slower, it is too powerful. That one rule kills the global patient index, the workflow engine, the semantic layer, the event graph, and the universal admin view. Your constraint that no vendor product may be the only home for a rule is operationalized concretely: rules live in spec plus executable conformance tests, nothing becomes mandatory until two independently controlled implementations pass the same suite, and an implementation never ships in the same release unit as the rule it implements.
On your separate question, the deepest failure isn't the one I expected. It's that I treated divergence as symmetric — holding all conflicting assertions as peers to be preserved. That's false, and it fails in the opposite direction from collapse: the lab is authoritative for what it reported, the payer for its own determination, the patient for their own goals and identity, the clinician for their own judgment. Making everything equally contested destroys real authority in the name of preserving it, and produces a record no one can use. The replacement is locus-of-authority typing per proposition class — truth is federated but not homeless — with divergence meaningful only where two principals genuinely have standing on the same proposition.
Three others fail hard. Warrant evaluation at runtime presumes the platform can decide what courts and licensing boards decide, sometimes years later; the substrate should enforce only key possession, declared scope and expiry, record the rest as asserted authority, and expose an adjudication hook that can retroactively mark a past access unauthorized without rewriting it. Refusal propagation is legally wrong — a refusal recorded at one operator doesn't bind a principal who never received it, and some refusals are lawfully overridden — so refusals become directed acts with delivery receipts, and "overridden-by-law" becomes a fourth consent state that is emphatically not consent. And patients are not principals like the others: every non-captivity mechanism I designed (fork rights, plural certifiers, multiple implementations) is available to operators and unusable by patients, so any patient right that requires patient action to be effective should be modeled as unexercised.
My own most dangerous omission is not technical. There is no economic model — nobody is named as paying for forty years of retention, connector maintenance, second implementations, or the governance body. Whoever pays becomes sovereign regardless of what the charter says, and that defeats the design silently rather than visibly.
I kept your decomposition with three additions: a kernel layer ahead of the taxonomy, temporality promoted to a first-class kernel spec, and a standing uncertainty register. The concern map showing where all ten land is on the first tab.
longitudinal-care-substrate-architecture — a canvas is a live view you can open beside the chat; I used one here because this is a large cross-referenced artifact with five artifact tiers, a shared-component register, and three separate finding sets that are much easier to navigate by tab than to read as one long message.





————





# Longitudinal Care and Business Operating Substrate
## Architecture and Architecture-Management System (2030–2035)

Architecture for a substrate serving patients, providers, clinical and non-clinical staff, operators, enterprises, federations, external principals (payers, pharmacies, labs, lenders, suppliers, employers, public programs), software agents, connectors to ordinary business systems, sensors, devices and robotics — where no participant's truths, commitments, refusals or liabilities may be collapsed into the platform's judgement.

**Core commitment.** Nothing in the substrate is a fact. Everything is something a named principal said, promised, refused or received, at a known time, under a stated authority. Merging is the failure mode the design exists to prevent, not a feature that was descoped.

---

## § 1. Kernel and shared planes

### 1.1 The move that makes the rest possible

This is not a system of record. It is a **ledger of attributed speech acts between principals who do not share a truth**. Nothing in it is a fact; everything in it is something someone said, promised, refused, or received, under a named authority, at a known time. Merging is not a feature that was descoped — it is the failure mode the design exists to prevent.

Every conventional platform primitive that assumes convergence — the canonical patient record, the master index, the workflow state machine, the unified ontology, the admin view — is removed and replaced by something weaker on purpose. What replaces them is listed below with an explicit statement of what it may never own.

### 1.2 Four planes, deliberately not fused

**Attribution plane** *(append-only)* — Signed, addressed, timed speech acts. Owns provenance, integrity, addressing, supersession. Owns no meaning, resolves no conflict, ranks no source. The only plane that carries evidentiary weight.

**Interpretation plane** *(disposable)* — Many competing renderings: clinical summaries, worklists, coding suggestions, risk scores. Each signed by whoever computed it, with vocabulary versions. A view never carries liability until a principal re-asserts its content as their own claim.

**Coordination plane** *(choreography)* — Offers, acceptances, refusals, retractions, receipts, deadlines, escalations between principals. Each party computes its own commitment state from messages it received. There is no shared state machine, because a shared state machine picks a winner.

**Governance plane** *(self-hosted)* — The architecture-management system, expressed in the same primitives. An architectural decision is a commitment by a governing principal with declared binding scope, an effective date, an executable test, and preserved dissents.

### 1.3 Five constitutional tests for anything shared

These are the amendment-protected clauses. Any proposed shared component — control plane, ontology, engine, graph, semantic layer — must pass all five or it does not ship. They are the operative form of "no vendor product may be the only place a rule can live."

| Test | Statement | What it prevents |
|---|---|---|
| **Loss test** | If the component vanishes, the system degrades in availability, latency or discovery — never in authority or correctness. | Shared infrastructure becoming an arbiter of who may do what. |
| **Fork test** | A dissenting federation can fork it without invalidating prior evidence, and forks still interoperate at the kernel. | Governance capture becoming irreversible. |
| **Two-implementation test** | Nothing becomes mandatory until two independently controlled implementations pass the same suite. | A rule silently relocating from the spec into one vendor's code. |
| **Attribution test** | Anything the component emits is itself a signed claim by that component, not an unsigned fact. | Infrastructure laundering opinions into truths. |
| **Judgment test** | Every rule is typed machine-checkable or judgment-bearing. Judgment-bearing rules terminate in a named accountable principal and may never be silently automated. | Automation quietly assuming professional or legal judgement. |

### 1.4 Register of shared components

Seven things are shared. Each is stated as required: what it may own, what it may never own, how independent-principal authority survives it, its failure boundary, and how it is replaced.

#### 1. Naming and integrity kernel — *mandatory*
- **May own:** Identifier syntax, content addressing, canonical serialization, signature envelope, long-term timestamp format, cryptographic agility rules.
- **May NEVER own:** What an identifier refers to. Whether a signer had authority. Any body semantics. Any register of who legitimately exists.
- **Authority survives:** It proves only that P signed X at T. It never evaluates whether P was permitted to assert X — that stays local to each relying party.
- **Failure boundary:** Loss means new signatures cannot be minted or verified centrally; all existing evidence stays verifiable offline from local copies. No authority decision becomes wrong.
- **Replaceable by:** Multi-signature envelopes during algorithm migration; a fork adopts a new kernel and cross-certifies prior evidence.

#### 2. Assertion envelope protocol — *mandatory*
- **May own:** Attribution fields, the four clocks, addressing and scope, supersession and retraction links, basis typing, interest-disclosure slot, vocabulary-version pinning.
- **May NEVER own:** Body schemas. Clinical or financial meaning. Whether a claim is true. Any merge or dedup rule.
- **Authority survives:** The body is opaque to the kernel; body typing is owned by each profession's own vocabulary authority. Vocabulary version travels inside the assertion, so old content stays interpretable without a registry lookup.
- **Failure boundary:** Version-negotiated at every hop. Unknown envelope versions are quarantined and still forwardable, never dropped or coerced.
- **Replaceable by:** Envelope versioning with mandatory pass-through of unrecognized fields, so intermediaries cannot silently strip meaning.

#### 3. Coordination protocol — *mandatory*
- **May own:** The speech-act set (offer, accept, refuse, retract, acknowledge, escalate, supersede), receipt semantics, idempotency keys, the representation of divergence.
- **May NEVER own:** Process definitions. Timeouts as business policy. Who must accept what. Any automatic resolution of a disagreement.
- **Authority survives:** Each principal derives its own commitment state from messages it actually received. "Recorded" and "known-to" are distinct states.
- **Failure boundary:** Divergence is the expected output, not a fault. Unresolved divergence ages and escalates to humans; it never auto-resolves.
- **Replaceable by:** It is message-shaped, not engine-shaped. A federation may define its own act set and bridge through an attributed translation artifact.

#### 4. Discovery directory — *hint only*
- **May own:** Endpoint hints, capability declarations, published key material, profile advertisements.
- **May NEVER own:** Authority to act. Patient identity. Any authoritative roster of legitimate principals. Any claim others are required to accept.
- **Authority survives:** Relying parties pin, cache and bypass freely. Multiple roots are permitted; there is no single trust root.
- **Failure boundary:** The clearest case of the loss test: losing it degrades discovery of new counterparties. Established relationships continue from pinned material. Correctness untouched.
- **Replaceable by:** Any mirror publishing the same format. Mirrors are first-class peers, not disaster recovery.

#### 5. Vocabulary registry — *plural*
- **May own:** Hosting of named, owned term sets with versions and deprecations; hosting of attributed translations that declare their own losses.
- **May NEVER own:** A merged global ontology. Equivalence assertions of its own. Changing a vocabulary it does not own. Any claim that a translation is lossless.
- **Authority survives:** Every term set has a named owning authority. Translation is a contestable claim by a party, not a fact — and it must state what it destroys.
- **Failure boundary:** Loss means new terms cannot be resolved. Existing content carries its vocabulary version inline, so the historical record remains readable.
- **Replaceable by:** It is a mirrorable catalogue, not a semantic authority. Competing registries are legitimate.

#### 6. Conformance suite — *forkable*
- **May own:** Executable tests for kernel, protocol, profile and portability behaviour; the signed-result format.
- **May NEVER own:** Certification monopoly. Declaring a principal illegitimate. Tests that encode one implementation's internals as required behaviour.
- **Authority survives:** Multiple certifiers may run it; relying parties choose whom to trust. Self-attestation is allowed but must be labelled as such.
- **Failure boundary:** Loss means no new certification. Existing signed results remain independently verifiable.
- **Replaceable by:** Fork it. Competing suites are legitimate, and their disagreements are diagnostic information about spec ambiguity.

#### 7. Governance registry — *opt-in scope*
- **May own:** Decision records, their declared binding scope and effective dates, registered dissents, and the amendment history of the invariant charter.
- **May NEVER own:** Binding a principal outside its declared scope. Retroactive binding. Suppressing or expiring a dissent.
- **Authority survives:** Binding scope is explicit and accepted per instance charter. Adoption is pull-based with a declared per-instance state.
- **Failure boundary:** Loss means change coordination degrades. Instances keep running their adopted versions indefinitely — version skew is a normal operating state, not an incident.
- **Replaceable by:** Fork, with continued kernel-level interoperation across the fork.

### 1.5 Refused outright

No global patient index. No global workflow or orchestration engine. No global semantic layer. No global event graph. No global policy decision point. No universal administrative view.

Each of these fails the loss test: losing it would make an authority decision *wrong* rather than merely unavailable.

### 1.6 Runtime primitives

These are what actually flows through the attribution and coordination planes. Note what is absent: no patient record object, no encounter state, no canonical problem list.

| Primitive | What it is | Non-collapsibility it protects |
|---|---|---|
| **Principal** | A legally or professionally distinct locus of authority — person, licensed role, legal entity, public program. | Authority is not a permission bit; it is standing that exists outside the platform. |
| **Warrant** | Delegated authority with scope, expiry, revocation terms, chain to an originator, and a non-nullable accountable principal. | Represented authority, guardianship, break-glass — all attributable rather than assumed. |
| **Assertion** | An attributed claim with an opaque body, typed basis (observed / inferred / reported / copied), and interest disclosure. | Source sovereignty; separation of clinical meaning from commercial interest. |
| **Commitment** | An undertaking with obligor, obligee, condition, expiry, revocation terms and a discharge record. | Liability is a promise between parties, not a platform status field. |
| **Refusal** | A directed speech act with delivery receipts, distinct from silence and from override-by-law. | Consent and refusal survive as positive acts, not as absence of data. |
| **Reference** | A source-sovereign pointer: dated copy, fidelity claim, refresh contract, upstream authority named. | External systems stay authoritative for what they committed in their own systems. |
| **Linkage claim** | An attributed belief that two identities or care relationships are continuous, with basis and confidence. | Longitudinal continuity without a global merge that cannot be undone. |
| **Divergence** | A named, aged, routable condition where two principals with standing disagree. | Disagreement is held and surfaced rather than silently resolved by whoever wrote last. |

---

## § 2. Where each requested concern is handled

The requested decomposition is largely preserved. Three changes: a kernel layer was added ahead of the taxonomy because the artifact classes are meaningless without the constitutional tests that constrain them; temporality was promoted to a first-class kernel spec rather than left inside the content model; and an uncertainty register was added as a standing artifact rather than a one-time disclosure.

| Requested concern | Where it lives |
|---|---|
| 1. Artifact taxonomy | § 3 — five tiers, each with owns/forbids |
| 2. Content model | § 4 — the normative spine carried by every artifact |
| 3. Operations / change model | § 5 — five change classes and the propose-to-repair lifecycle |
| 4. Multi-agent and fleet | § 6 — delegation model, three action classes, fleet operations |
| 5. Deployment and variation | § 7 — logical instance vs. deployment, variation taxonomy |
| 6. Repository / package shape | § 8 — tier-aligned tree and the separation rules |
| 7. Conformance and observability | § 9 — plural certification, observer classes, signal set |
| 8. Ten dangerous omissions | § 10 |
| 9. Falsifiers | § 11 |
| 10. Plant vs. evolve | § 12 |
| Shared-control-plane disclosure | § 1.4 — register of shared components |
| Independent-principal failure analysis | § 13 |
| Standing uncertainties | § 14 — uncertainty register |

---

## § 3. Architecture artifact taxonomy

Five tiers, ordered by change velocity and by who may amend them. The load-bearing column is **Forbids**: most architecture documents only say what to do, which is why authority leaks into whichever artifact is most convenient to edit.

### Tier 0 — Constitutional

| Class | Owns | Forbids |
|---|---|---|
| **Invariant Charter** | The non-collapsible properties, the five constitutional tests, the amendment procedure, and explicit reaffirmation of fork rights. | Naming any vendor, technology, vocabulary, workflow or clinical content. Growing: additions require a minimality justification. |
| **Amendment Record** | History of charter changes with preserved dissents and the vote that carried them. | Retroactive effect. Deleting a dissent. Amending itself. |

### Tier 1 — Kernel specifications

| Class | Owns | Forbids |
|---|---|---|
| **Naming & Integrity Spec** | Identifiers, content addressing, envelope signing, canonical form, crypto agility and long-term verification. | Semantics of anything signed. Any judgement about authority. |
| **Assertion Envelope Spec** | Attribution, addressing, supersession, basis typing, interest disclosure, vocabulary pinning. | Body schemas. Merge rules. Truth conditions. |
| **Time & Temporality Spec** | Valid time, assertion time, knowledge time (when this instance learned it), authority-effective time; clock disagreement and retroactive effect. | Assuming a global clock or that any two principals agree on ordering. |
| **Authority & Warrant Spec** | Delegation structure, revocation, expiry, the non-nullable accountable principal, break-glass form. | Deciding legal validity of a warrant. Enumerating what any profession may clinically do. |
| **Coordination Protocol Spec** | Speech acts, receipts, idempotency, divergence representation and aging. | Process definitions. Business timeouts. Automatic conflict resolution. |

### Tier 2 — Binding and meaning

| Class | Owns | Forbids |
|---|---|---|
| **Profile** | A jurisdiction's or segment's bindings: required vocabularies, retention, residency, mandatory disclosures, override law. | Changing kernel semantics. Binding instances that have not accepted it. |
| **Vocabulary Package** | A named authority's term set, versioned, with deprecations and intended scope of use. | Claiming universality. Silent redefinition of an existing term. |
| **Translation Artifact** | An attributed mapping between two vocabularies, with an explicit statement of what it loses. | Presenting itself as equivalence or identity. Being applied without attribution to the translator. |
| **Connector Contract** | Fidelity claims for one external system: what is authoritative upstream, what is lossy, refresh obligations, and the attribution class of inbound facts. | Asserting as originator. Presenting a degraded-attribution fact as a signed principal claim. |
| **Interest Disclosure Schedule** | Which parties have financial stake in which proposition classes, and what must therefore be disclosed on assertions. | Being used as a permission list. Deciding whether an interest is improper. |

### Tier 3 — Instance

| Class | Owns | Forbids |
|---|---|---|
| **Instance Charter** | The logical instance's portable identity, operator, jurisdiction, accepted profiles, retention terms, exit terms and successor arrangements. | Being tied to a deployment, a vendor, a domain name or a tenant id. |
| **Deployment Descriptor** | Where an instance currently executes, on what topology, under whose operational control. | Containing policy or semantics. Being referenced by any assertion. |
| **Local Policy Package** | Instance-level configuration and local rules. | Contradicting an accepted profile silently — conflicts must be declared and are a conformance finding. |
| **Capability Declaration** | What versions, acts, vocabularies and profiles this instance speaks, right now. | Being stale. It is negotiated at every boundary, not published once. |

### Tier 4 — Change and evidence

| Class | Owns | Forbids |
|---|---|---|
| **Change Proposal** | A proposed change, its class, blast radius, and the falsifier that would show it wrong. | Being decided by its own author. |
| **Decision Record** | The decision, the deciding authority, declared binding scope, effective dates, and all registered dissents. | Binding outside declared scope. Omitting dissent. Retroactive effect. |
| **Migration Plan** | Forward steps and the reversal, or an explicit signed declaration of irreversibility. | Shipping without either a reversal or a named principal owning the irreversibility. |
| **Deprecation Notice** | Compatibility window, migration cost allocation to the deprecator, and the last-support date. | Forcing an upgrade. Shortening a window after publication. |
| **Conformance Suite / Result** | Executable tests; signed, dated, certifier-attributed results. | Monopoly certification. Unsigned or unattributed results. |
| **Incident & Repair Record** | What went wrong, under whose authority, what was repaired, what remains wrong. | Closing without a residual-risk statement. |
| **Divergence Register** | Open disagreements between principals with standing, their age and escalation state. | Auto-closing. Being emptied by picking a winner. |
| **Agent Charter** | A fleet's capabilities, warrants, model provenance, evaluation results, limits and escalation contacts. | A null accountable principal. Unbounded or non-expiring standing authority. |
| **Exit Playbook & Drill Record** | The exit protocol and evidence from real periodic drills, scored for fidelity. | Claiming portability without drill evidence. |
| **Uncertainty Register** | Known-unresolved design questions, who owns each, and what evidence would settle them. | Being closed by assertion rather than by evidence. |

---

## § 4. Architecture content model

### The spine every normative artifact carries

Uniform across all tiers, which is what makes the corpus machine-checkable and makes governance auditable rather than conversational. The five unusual fields are marked.

| Field | Content | Why |
|---|---|---|
| **Identity & version** | Content-addressed; supersession links; never overwritten. | History survives correction. |
| **Authoring principal & warrant** | Who wrote it and under what standing. | Architecture is itself an attributed act. |
| **Normative strength & level** | MUST / SHOULD / MAY, crossed with invariant / kernel / profile / local. | Strength and altitude are different questions and are usually conflated. |
| **Binding scope** | Which instances, principals, jurisdictions, and time window it binds. | Nothing binds by default; scope is opt-in and explicit. |
| **Rule class** *(unusual)* | Machine-checkable, or judgment-bearing with a named accountable role. | Prevents automation from quietly absorbing professional judgement. |
| **Conformance reference** | Test ids. A MUST with no executable test is a defect, not a rule. | Rules live in specs plus tests, never only in code. |
| **Forbids block** *(unusual)* | What this artifact may not be used to justify. | Scope creep is how a document becomes a control plane. |
| **Failure boundary** *(unusual)* | What breaks, and how far, if this is wrong. | Makes blast radius a written property rather than a discovery. |
| **Falsifier** *(unusual)* | Observable evidence that would show this artifact is wrong. | Architecture that cannot be wrong cannot be improved. |
| **Replacement path** | How it is superseded, and by whom. | Every component states its own exit before it is adopted. |
| **Registered dissents** *(unusual)* | Objections, preserved permanently even when overruled. | Minority positions are evidence later, especially in litigation. |
| **Interest disclosure** | Who benefits if this rule is adopted. | Commercial interest in rulemaking becomes visible rather than inferred. |

---

## § 5. Architecture operations / change model

### 5.1 Change classes by blast radius

Different altitudes get different evidence requirements and different amending authorities. Class is declared by the proposer and validated during contest — misclassification is itself a conformance finding.

| Class | Change | Required evidence | Who decides |
|---|---|---|---|
| **0** | Local policy or configuration | Local test; declared conflicts with accepted profiles | The instance, alone |
| **1** | Additive vocabulary or profile | Owning authority's sign-off; translation loss statement | Vocabulary or profile owner |
| **2** | Protocol-additive | Capability negotiation proof; backward-compatibility tests | Kernel maintainers, scoped |
| **3** | Protocol-breaking | Two independent implementations; compatibility window; migration cost borne by the deprecator | Kernel maintainers plus affected-federation objection window |
| **4** | Invariant amendment | Supermajority, preserved dissents, explicit reaffirmation of fork rights, minimality justification | Constitutional process only |

### 5.2 Lifecycle

Propose → contest → decide → implement twice → conform → publish → adopt → observe → repair or reverse. The two properties that carry the most weight are that adoption is a pull, and that dissent is preserved rather than resolved.

- No forced upgrade, ever. Version skew across thousands of instances is the normal operating state, not an incident to be driven to zero.
- Contest produces registered dissents that survive the decision. An overruled objection is permanent evidence, not a closed ticket.
- Implementation happens in at least two independently controlled codebases before anything becomes mandatory. If a second team cannot build it from spec plus tests, the rule is not in the spec.
- The deprecator bears migration cost. This is the main structural defence against a large operator externalising churn onto smaller ones.
- Every change ships with its reversal, or a signed declaration of irreversibility naming who owns that decision.
- An emergency path exists, requires retrospective review inside a fixed window, and auto-expires if not ratified.
- Adoption state is declared per instance and observable. Nobody is told to upgrade; the distribution of adoption is simply visible.

---

## § 6. Multi-agent and fleet operating model

**Agents are instruments, never delegates.** Liability does not attach to software. An agent may hold credentials and produce work, but every action it takes carries a non-nullable accountable principal that resolves to a human or legal entity capable of being sued, sanctioned or delicensed. Agent identity exists for forensics, not for authority.

### 6.1 Three action classes

**Observe** *(safe)* — Read, summarise, produce views. Output lands in the interpretation plane, signed by the agent, carrying no liability until a principal re-asserts it.

**Propose** *(gated)* — Draft assertions and offers that require countersignature by a principal with standing. The countersignature, not the draft, is the act.

**Commit** *(dangerous)* — Act under narrow standing authority with hard expiry, rate and blast-radius limits, a declared reversibility class, and mandatory sampling review.

### 6.2 Properties that fall out of the model

- Agents emit assertions, never mutations. Two agents that disagree therefore produce a visible divergence rather than a lost update — contention becomes evidence instead of corruption.
- Every instance holds a local kill switch for any agent operating within it, exercisable without central permission. A central kill switch may exist but may never be the only one; a sole central switch fails the loss test.
- Fleet rollout is staged by instance cohort with canaries, and cohorts are defined by the instances themselves rather than assigned by a vendor.
- Agent-to-agent chains require idempotency keys and loop detection, and any chain terminating in a commitment must render a human-legible narrative of the authority it relied on.
- Anti-theatre instrumentation is mandatory: countersignature approval rate and review-latency distribution are conformance signals. Approval above 99 percent with median review time below plausible reading time is reported as a control failure, not as throughput.

---

## § 7. Deployment and variation model

### 7.1 Logical instance is not a deployment

A logical instance is a named locus of operator authority with a portable, cryptographic identity that is independent of host, domain, tenant id and vendor. A deployment is merely where it happens to execute this year. The mapping is many-to-many over time, and references never resolve through deployment coordinates.

| Mode | Shape | Notable constraint |
|---|---|---|
| **Shared multi-tenant** | Many logical instances, one deployment | Instance charter residency terms must be satisfiable or the deployment refuses to host |
| **Regional** | Instances grouped by residency requirement | Cross-region references are hints, never authority |
| **Dedicated enterprise** | One or few instances, operator-controlled infrastructure | Must still pass identical conformance; no private protocol dialects |
| **Federated node** | Self-hosted, peer-connected | Full kernel conformance; discovery via any mirror |
| **Archival read-only** | Operator has ceased; evidence must remain verifiable | Most commonly forgotten mode, and the one that proves the crypto lifecycle works |

### 7.2 Variation, skew and degradation

- Variation is expressed as profile plus capability declaration, never as a code fork. What may vary is enumerated per tier: local policy, views and connectors may vary freely; profiles vary by jurisdiction; kernel and invariants do not vary at all.
- Relocation is a protocol, not a migration project: an instance moves between deployments without breaking references, because references are identity-addressed and resolved through replaceable hints.
- Version skew is designed for, not remediated. Every boundary negotiates capability; unknown constructs are quarantined and forwarded intact rather than stripped.
- Degraded mode is a designed mode, not an outage. Offline operation, unverifiable authority and expired warrants must not stop care. Break-glass produces a high-salience attributed assertion with mandatory retrospective review — the record shows it happened rather than pretending it could not.

---

## § 8. Repository / package shape

The tree mirrors the artifact tiers so that altitude is visible in the path. Three structural rules matter more than the layout itself.

    invariants/                       constitution; small; amended rarely
    kernel/                           naming, envelope, time, warrant, coordination specs
    conformance/                      executable suites per level; signed-result schema
    vocabularies/<owner>/             owned term sets, versioned, never merged
    translations/                     attributed mappings with declared loss
    profiles/<jurisdiction|segment>/  bindings
    connectors/                       external-system fidelity contracts
    instances/                        instance charters (often federated, per operator)
    deployments/                      topology descriptors only, no policy
    agents/                           agent and fleet charters
    governance/                       proposals, decisions, dissents, amendments
    migrations/                       forward steps with reversals
    evidence/                         conformance results, incidents, drill records
    implementations/                  pointers to independent implementations, never vendored

- An implementation never ships in the same release unit as the rule it implements. Otherwise the rule silently becomes whatever the code does, which is the exact failure the two-implementation test exists to catch.
- The release unit is the spec-and-tests pair. Vendors depend on it; it never depends on a vendor.
- The whole tree is signed and mirrorable, with no dependency on a single forge, registry or hosting provider. Exit from the forge is a drill, like exit from an operator.

---

## § 9. Conformance and observability model

Conformance is executable, signed, and plural. Certification is itself a claim by a certifier, and relying parties choose whom to believe. Self-attestation is permitted and labelled — the label is the control.

### 9.1 Observer classes

There is no universal administrative view; that is an invariant. Each observer sees a different surface, by right rather than by role configuration.

- **Patient:** who accessed their record, under what warrant, which refusals were honoured, which were overridden and on whose authority.
- **Clinician:** what they asserted, what was derived from it, and what changed downstream of their words.
- **Operator:** instance health, divergence backlog, commitment aging, adoption state.
- **Counterparty:** shared commitment state and its divergences, from their own side.
- **Certifier or regulator:** conformance evidence, sampled rather than streamed.
- **Federation:** aggregate health assembled from voluntarily published signed summaries plus sampling — never a central telemetry pipe.

### 9.2 Signals that actually matter

Chosen because each one goes wrong in a way that indicates the architecture is being defeated rather than merely strained.

- Divergence rate and divergence age — zero is as alarming as high.
- Unresolved commitment aging, by counterparty.
- Refusal-honouring latency, and override rate with justification completeness.
- Correction and reopening latency.
- Silence-versus-refusal classification rate: is unknown quietly defaulting to consent under time pressure?
- Authority-chain completeness — proportion of acts with a resolvable warrant chain.
- Agent reversal rate and countersignature latency distribution.
- Export drill fidelity, scored by an independent implementation's ability to use the export clinically.
- Version-skew distribution across the fleet.

### 9.3 Unresolved tension, stated rather than designed away

Observability of clinicians slides easily into surveillance of clinicians, which produces defensive documentation and pushes real reasoning off-system. The mitigations on the table — aggregate-first reporting, sampling instead of census, and giving clinicians access to their own observation record — are partial. This sits in the uncertainty register.

**Portability is measured, not declared:** periodic exit drills export a real instance and score whether a different implementation can ingest and clinically use it.

---

## § 10. The ten most dangerous omissions in this design

Ordered roughly by how quietly each one kills the architecture. The quiet ones are worse than the loud ones.

**1. Compelled forgetting.**
Append-only plus correction-without-erasure is legally false. Erasure orders, sealed juvenile records, expungement, safety redaction of an abuse survivor's address, and data-minimisation law all require actual destruction. My integrity kernel assumes evidence is permanent.
*Least-bad first move:* Cryptographic redaction planted from day one — content commitments persist while plaintext is destructible, with attested-destruction records and durable tombstones. This cannot be retrofitted onto a hash chain later.

**2. Temporality is named but not designed.**
I promoted a Time spec to the kernel and then did not specify it. Four clocks are not enough on their own: retroactive warrant revocation, clock disagreement between principals, and effective-dated corrections interact combinatorially. Nearly every longitudinal system dies here.
*Least-bad first move:* Design the temporal algebra before anything else, including the rule for what a query as-of a past date returns when authority was revoked retroactively.

**3. Identity linkage, and un-merge.**
Making continuity an attributed claim is correct and operationally empty. I give no matching model, no wrong-link detection, and critically no un-merge — which is catastrophic, common, and irreversible in most real systems. Linkage claims are also themselves disclosive.
*Least-bad first move:* Un-merge must be a first-class reversible operation from the start, and linkage confidence must be visible to clinicians rather than hidden behind a resolved identity.

**4. No economic model.**
Nothing here says who pays for forty years of retention, for connector maintenance, for second implementations, or for the governance body. Whoever pays becomes sovereign regardless of what the charter says. This is probably the most dangerous omission because it defeats the design silently rather than visibly.
*Least-bad first move:* Fund the kernel, the conformance suite and the second implementation from a source that cannot be withdrawn by any single participant, and treat funding concentration as a monitored conformance signal.

**5. Cognitive load — the view becomes the truth.**
A divergence-preserving, attribution-heavy record is harder to read than a merged one, and clinicians have seconds. If views are the only usable surface, views become authoritative in practice and the attribution plane is decorative. This threatens the entire premise and I have no design for it.
*Least-bad first move:* Treat scannability of held disagreement as a first-class research problem with its own falsifier, not as a UI concern to be handled later.

**6. Key and signature lifecycle across decades.**
Evidence signed in 2031 must verify in 2071. Key rotation, key compromise, dead certificate authorities, deceased signers, post-quantum migration and long-term timestamping all sit under the kernel's central promise and are unaddressed beyond the phrase "crypto agility".
*Least-bad first move:* Long-term validation with periodic re-attestation, planted before first write.

**7. Adversarial principals.**
I assumed honest-but-independent. Real behaviour includes upcoding, dark-patterned or coerced consent, sybil operators, fabricated warrants, agents optimised against the record, and strategic divergence — asserting disagreement to create delay or leverage. The model has no cost function for bad-faith assertion.
*Least-bad first move:* Make divergence costly to originate and cheap to adjudicate, and treat consent-capture UX as a conformance surface rather than a vendor choice.

**8. The brownfield.**
No greenfield exists. HL7v2, faxes, DICOM, portals, phone calls and paper are where attribution actually dies: most inbound facts arrive with no verifiable principal at all. I treated connectors as a contract class and moved on.
*Least-bad first move:* A degraded-attribution class that is honest — "received by fax from a claimed sender" — rather than a pipeline that manufactures a signature to satisfy the schema.

**9. Discovery exposure and the candour penalty.**
A rigorous attribution record is also a rigorous liability record. Rational actors respond by documenting less candidly, keeping shadow notes, or moving decisions off-system. The architecture may reduce the very truth it was built to capture.
*Least-bad first move:* No clean answer. Possible directions include privilege-bearing assertion classes and deliberate coarseness in some attribution granularity. Tracked as a falsifier rather than assumed away.

**10. Governance capture and bootstrap legitimacy.**
The charter presumes a legitimate founding body, and never says who writes the invariants. Fork rights are the safety valve, but forking carries network-effect costs that make exit theoretical for weak participants — above all patients, who cannot fork anything and have no engineering capacity.
*Least-bad first move:* Bootstrap legitimacy has to be earned procedurally and published, and patient-side rights must be enforced by default system behaviour rather than by patients exercising them.

**Runners-up that did not make the ten:** liability allocation when the substrate itself errs; transitions across minority, incapacity and death; the storage cost curve of append-only at population scale; and the operational meaning of silence under time pressure.

---

## § 11. Falsifiers

Each row is observable without asking anyone's opinion. Several are measurable within the first year, which is deliberate — a design whose falsifiers only resolve in a decade is unfalsifiable in practice.

| Observable evidence | What it would falsify |
|---|---|
| Shadow documentation appears — the real note lives somewhere else | The attribution plane is not usable at the point of care; the whole substrate is ceremony. |
| Divergence rate is approximately zero | Disagreement is being collapsed upstream, or nobody records dissent. Non-collapsibility is nominal. |
| Divergence is high and never closes | The model generates unusable noise; humans stop reading and the record degrades into an archive. |
| A second team cannot build an interoperable implementation from spec plus tests | The rule really lives in one codebase. The central constraint has already failed. |
| Independent certifiers never disagree | Plural certification is theatre, or one certifier is sovereign in practice. |
| Exit drills produce an export nobody else can clinically use | Portability is nominal; non-captivity is a claim rather than a property. |
| Everyone runs one vendor anyway | Structural non-captivity defeated by market concentration; the charter is decorative. |
| Countersignature approval above 99 percent at sub-reading-time latency | Human oversight of agents is theatre and the accountable-principal chain is fiction. |
| Governance never refuses a proposal, or invariants are amended often | It is not a constitution; it is a changelog with extra steps. |
| Courts decline to treat the attribution record as evidence | The proof-of-what-happened premise fails at exactly the moment it is supposed to matter. |
| Interpretation-plane views are what get cited in practice and litigation | The record plane has become decorative and the separation of planes has collapsed. |
| Time-to-first-value is so long nobody plants it | The architecture may be correct and is irrelevant, which is the most likely way it dies. |
| Per-patient-year retention cost exceeds willingness to pay by year ten | Longitudinal continuity is economically infeasible and will be silently truncated. |

---

## § 12. Planting versus evolution

### Must be correct at planting *(irreversible)*

- Assertion identity, addressing, and the opaque-body envelope.
- The temporal algebra — all four clocks, plus retroactive effect.
- Non-erasure semantics together with the compelled-forgetting escape hatch. Both, or neither works.
- Warrant model with a non-nullable accountable principal.
- Consent as at least four states — consented, refused, silent, overridden-by-law — never defaulting.
- Instance identity independent of deployment, vendor and operator.
- Cryptographic agility: not the algorithms, the ability to migrate them.
- Separation of the record, interpretation and coordination planes.
- The five constitutional tests and the amendment procedure.
- Executable conformance from the first commit, and the two-implementation rule enforced before anything becomes mandatory.
- Interest-disclosure slot on assertions — cheap now, meaningless if added retroactively.
- Un-merge as a reversible operation.

### May safely evolve *(safe to defer)*

- Vocabularies, translations and profiles — plurality was the point.
- Views, summarisation and every user interface.
- Coordination patterns and process choreography.
- Storage engines, transports and deployment topologies.
- Agent capabilities, fleet policy and model providers.
- Federation membership rules.
- Connector inventory and connector fidelity improvements.
- Economics and pricing — though the capacity to change them without re-platforming is itself architectural.

### The test that you planted the right things

The planted list is almost entirely about attribution, time and authority, and contains nothing about clinical or business content. If a clinical or commercial concept appears in the planting list, the kernel has absorbed meaning it has no standing to own.

---

## § 13. What becomes WRONG because principals are legally and professionally independent

The design above is written as though non-collapsibility were a property that careful engineering can guarantee. It is not. Below are the specific assumptions in my own proposal that fail once the principals are genuinely independent, and what replaces each. Items 4, 11 and 12 are the ones I would most expect to be missed in review, and item 4 is the deepest error.

**1. A universal assertion schema, even one with an opaque body.**
The envelope still imposes an epistemic unit: that reality decomposes into discrete claims with one author at one time. A nursing shift assessment, a radiologist's hedged impression, a tumour board consensus and a payer's coverage determination are different epistemic objects. A tumour board decision has no single author, and forcing one falsifies the record.
*Replace with:* Joint and collective assertions with multiple signers and declared decision roles; hedged assertions that carry claims about their own uncertainty; body typing owned by each profession's vocabulary authority. The kernel guarantees attribution, addressing, integrity and time — nothing about the shape of a claim.

**2. The platform can evaluate warrants at runtime.**
Whether a power of attorney is valid, whether break-glass was justified, whether a clinician acted within scope — these are determinations made by courts and licensing boards, sometimes years later. Any runtime evaluation is the platform pre-empting an adjudication it has no standing to make.
*Replace with:* Enforce only what is mechanically checkable — key possession, declared scope, expiry — and record everything else as asserted authority with its evidence. Access decisions are made locally by each custodian and are themselves attributed acts. Add an adjudication artifact that can retroactively mark a past access as unauthorised without rewriting it.

**3. Refusal propagates.**
A refusal recorded at operator A does not bind principal B who never received it, and some refusals are lawfully overridden by mandatory reporting, public health law, or court order. Treating refusal as global state is both legally wrong and operationally impossible.
*Replace with:* Refusals are directed speech acts with delivery receipts, so recorded and known-to are distinct states. Override is permitted but must be attributed, justified, and surfaced to the patient. Overridden-by-law becomes a fourth consent state that is emphatically not consent.

**4. Divergence is symmetric.**
This is the deepest error in the design. Treating all conflicting assertions as peers to be held is itself false: the lab is authoritative for what it reported, the payer for its own determination, the patient for their own goals and preferences, the clinician for their own judgement. Making everything equally contested makes the record useless and destroys real authority in the name of preserving it.
*Replace with:* Locus-of-authority typing per proposition class — truth is federated but not homeless. Divergence is only meaningful where two principals both have standing on the same proposition class, and "we disagree about the world" must be distinguished from "we disagree about what you said".

**5. Commitment state can be shared.**
Two principals will genuinely disagree about whether a referral was accepted, and both may be behaving reasonably. Any shared state machine resolves that by picking a winner, which silently destroys one party's legal position.
*Replace with:* Each principal holds its own commitment ledger. The only shared artifact is the message log with receipts. Mismatch is a named condition routed to humans, with an explicit rule that neither side's view is automatically corrected to match the other.

**6. The platform can enforce separation of clinical meaning from financial interest.**
It cannot, and pretending otherwise is worse than admitting it. Many principals are legitimately both — integrated payer-providers, pharmacy benefit managers, employer-sponsored clinics. Enforcement would require the platform to adjudicate motive.
*Replace with:* Enforce typed lineage, so a financially derived artifact can never be typed as a clinical assertion, and mandate interest disclosure. Then measure and expose re-characterisation rates. Detection and visibility, not prevention. Prevention is a regulatory and organisational function outside the substrate.

**7. Machine agents can hold warrants.**
Liability does not attach to software, so a warrant held by an agent is a liability void — precisely the void that makes automated harm unaccountable.
*Replace with:* Agent identity exists for forensics only. The accountable principal field is non-nullable and must resolve to a human or legal entity that can be sued, sanctioned or delicensed. Agents are instruments of a principal, never delegates of one.

**8. Correction never erases.**
Legal holds, sealed records, minors ageing into control of their own data, erasure orders, and safety redaction all require concealment or destruction. Immutability as an absolute is not lawful.
*Replace with:* Separate three acts that the design conflated: retraction, meaning I no longer stand behind this and it is my right to say so; redaction, meaning compelled concealment with attested destruction and a durable tombstone; and supersession, meaning a newer claim. Relying parties who cached a retracted claim carry an explicit propagation obligation.

**9. Portability means data export.**
What needs to be portable is the relationship, not the bytes. An export that arrives without novated commitments and re-anchored warrants delivers an archive, not continuity of care or of obligation.
*Replace with:* An exit protocol covering warrant re-anchoring, commitment novation with counterparty acknowledgement, and reference continuity — and measured by drills rather than asserted in a contract.

**10. The substrate is neutral.**
Anything that defines the envelope, the addressing, the time model and the conformance suite exercises real power over what can be said and by whom. Neutrality is not achievable by any component that everyone must use.
*Replace with:* Abandon neutrality as a goal and pursue minimality plus exit. A concrete budget: if a clause is not required to keep evidence verifiable across a fork, it does not belong in the kernel. Combine with guaranteed kernel-level interoperation across forks.

**11. Patients are principals like other principals.**
Structurally they are the weakest party: no legal team, no engineering capacity, no ability to fork, no realistic exit. Every non-captivity mechanism in the design — fork rights, plural certifiers, multiple implementations — is available to operators and unusable by patients. The design protects the strong from each other.
*Replace with:* Patient authority exercised through fiduciary intermediaries the patient can change, plus rights enforced by default system behaviour rather than by the patient invoking them. Any right requiring patient action to be effective should be modelled as unexercised.

**12. Rigorous attribution improves the record.**
Attribution rigour increases liability exposure, which rationally reduces candid documentation and pushes real clinical reasoning into conversation, shadow notes and side channels. The design may reduce the truth it captures — and the better it works as proof, the worse this gets.
*Replace with:* No replacement offered. This is a genuine unresolved conflict between proof and candour that the architecture cannot resolve from inside itself. It is tracked as a falsifier, not designed away.

### The common shape of these failures

Every one of these errors has the same form: **the platform quietly assuming a judgement that belongs to someone outside it** — a court, a licensing board, a professional, a patient, a legislature. The kernel is safe exactly to the extent that it makes claims about syntax, time and signatures, and unsafe the moment it makes claims about validity, equivalence, authority or truth.

That suggests a sharper version of the minimality budget than the one stated in the kernel register: a shared component may answer questions of the form *"did this happen, in this form, at this time, signed by this key"*, and may never answer questions of the form *"is this allowed, is this correct, is this the same, or does this bind"*.

---

## § 14. Uncertainty register

Stated rather than resolved. Each of these is a standing artifact with an owner and an evidence condition, not a disclaimer.

- Whether a divergence-preserving record can be made scannable enough for clinical use in seconds. This is load-bearing and unresolved; if it fails, most of the design fails with it.
- Whether plural conformance authorities produce useful signal or merely confusion that participants resolve by defaulting to the largest certifier.
- Whether cryptographic redaction satisfies regulators as erasure, in which jurisdictions, and for how long that answer holds.
- Whether choreography without a central process engine survives operational reality, or whether operators build de facto orchestrators that become sovereign by convenience.
- Whether the two-implementation rule survives economics. Second implementations are chronically unfunded, and this is the rule most likely to be quietly abandoned.
- The right granularity for an assertion. Too fine is unreadable; too coarse loses the attribution that justifies the whole structure. I do not know where the line is.
- Whether silence can be operationalised without becoming de facto consent under time pressure.
- Whether federation-level observability is achievable from voluntary publication and sampling alone, without a central telemetry path that would fail the loss test.
- Where liability lands when the substrate itself is wrong — a defect in the kernel, the conformance suite, or a widely adopted translation artifact.

---

*Nothing in this document should be read as legal advice on retention, erasure, consent or mandatory reporting obligations in any specific jurisdiction.*


