# v4 — FAI — PRE-0 — AGENT B · BLIND ALTERNATIVE DESIGN

Document type: `evidence_or_ingestion` — **immutable once pasted**
Authority: **NONE.** Preservation confers no authority (`D0THES-GRD-036`). **No model authors the architecture.** Agreement between agents is not corroboration.
Status: `awaiting_operator_population` · `never_default_loaded`
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
| Model + version             | chatgpt pro wahtever current model was                      |
| Provider / family           | OpenAI |
| Date + time run             | 8/9/2026 10 pm                                              |
| Who ran it                  | Nick (operator)                                             |
| **Prompt used**             | **the block in §2 of THIS file, verbatim**                  |
| Prompt source of record     | `v4_FAI_PRE0_preflight_brief_and_protocol_2026-08-09.md` §5 |
| Prompt modified in any way? | **no**                                                      |




### Blindness declaration — every line matters; a "yes" does not void the run, it scopes it


| Was the agent...                                                             |         |
| ---------------------------------------------------------------------------- | ------- |
| a **fresh context** with no prior OMNI conversation?                         | yes     |
| **blind to the repository** — no repo access, no file reads, no code search? | **yes** |
| **blind to the internet** — no web search, no browsing, no retrieval?        | **no**  |
| **blind to the OMNI name** — did the prompt or any tool reveal "OMNI"?       | **yes** |
| blind to **our plan, charter, package shape, Reactor, root requirements**?   | **yes** |
| blind to the **failure record / handoff**?                                   | **yes** |
| blind to the **other agents' submissions**?                                  | **yes** |
| Did it ask clarifying questions before answering?                            | no      |
| Any tool calls made?                                                         | idk     |


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

# Polycentric Longitudinal Substrate

## Architectural position

Do **not** build a platform whose database, workflow engine, ontology, control plane, or AI becomes the owner of “the patient state” or “the business state.”

Build a **federation of principal-scoped authority cells** that exchange attributed, signed, versioned statements. Shared infrastructure may transport, index, project, test, and distribute those statements, but it may not merge their authority.

The fundamental unit is therefore not a row, event, task, or patient object. It is:

> **A statement made by exactly one principal, through an identified actor, under a stated authority basis, at a stated time, about a stated subject, using stated semantics, with evidence of issuance and—where applicable—execution.**

A multi-party transaction is a **set of independently issued statements**, not one jointly mutable platform object.

### Core terms

| Term                          | Meaning                                                                                                                                                                                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Principal**                 | A patient, representative, clinician, provider organization, payer, pharmacy, lab, employer, lender, supplier, public program, operator, or other legal/professional entity capable of making its own statements, commitments, refusals, and decisions. |
| **Actor**                     | The human, software agent, device, robot, or service acting for a principal. An actor is not automatically a principal.                                                                                                                                 |
| **Operator**                  | An entity running some portion of the substrate. It may itself be a principal for hosting or operational commitments, but it does not inherit the authority of principals it hosts.                                                                     |
| **Logical operator instance** | A stable administrative and isolation namespace with adopted policies, trust relationships, data placement, and runtime configuration. It is independent of physical deployment.                                                                        |
| **Principal cell**            | A logical authority boundary for one principal or one explicitly bounded authority domain of that principal. One operator instance may host thousands of cells.                                                                                         |
| **Source of commitment**      | The external system authoritative for what was recorded or executed in that system. This does **not** mean that its record is necessarily factually true.                                                                                               |
| **Projection**                | A view derived from statements. It is always perspective-bound, time-bound, policy-bound, and rebuildable.                                                                                                                                              |
| **Compact**                   | A versioned protocol describing how independent statements can form an interaction, such as an appointment, order, authorization, payment, delivery, or referral.                                                                                       |
| **Continuity bundle**         | A portable package of statements, source references, semantics, proofs, and verification material. It is not a new master record.                                                                                                                       |

For example, the substrate must be able to preserve simultaneously:

* clinician: “I recommend medication X”;
* patient: “I refuse medication X”;
* payer: “I will not cover medication X”;
* pharmacy: “Medication X was not dispensed”;
* operator: “A notification was delivered.”

It must not replace those with a single field such as `medication_status = cancelled`.

### Structural model

```text
 Patient / representative cell         Provider / clinician cells
  - intent and refusals                 - clinical assertions
  - representation evidence             - professional decisions
  - local acceptance policy             - local source systems
              \                             /
               \  attributed statements  /
                \ proposals / refusals   /
                 \ commitments / receipts
                  \ corrections / disputes
                   v
          Replaceable exchange mechanisms
        transport | routing | indexing | catalogs
          witnesses | telemetry | package mirrors
                   ^
                  / \
                 /   \
       Payer / pharmacy / lab / employer / supplier cells
       - each with its own sources, decisions, and liabilities
```

The architecture-management system is likewise a **protocol and package system**, not one privileged management server.

---

## Shared-mechanism sovereignty ledger

This is the required boundary for every shared control plane, semantic layer, event index, policy evaluator, or coordination service.

| Shared mechanism                                | It may own                                                                                                                       | It may **never** own                                                                                                              | Failure boundary                                                                                                                   | How it is replaced                                                                                                                  |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Artifact catalog and distribution plane**     | Package discovery, mirrors, hashes, signatures, release notifications, non-authoritative adoption telemetry                      | The only copy of a rule; forced adoption; principal private keys; clinical, consent, or financial decisions                       | New releases and discovery pause. Nodes continue with their last locally admitted packages.                                        | Signed packages are mirrored and exportable through open manifests over files, object storage, package protocols, or offline media. |
| **Identity and endpoint directory**             | Issuer-published key bindings, endpoints, credential references, revocation notices                                              | Authority grants; definitive patient matching; a universal root of trust; transitive trust between federation members             | Previously established relationships use cached trust bundles. Formation of new relationships may pause.                           | Multiple directories, bilateral trust bundles, federation-specific directories, and out-of-band bootstrap procedures coexist.       |
| **Semantic catalog**                            | Versioned schemas, code systems, value sets, mapping assertions, documentation, provenance, compatibility declarations           | Universal clinical meaning; an assertion that two concepts are factually equivalent; rewriting source-coded data                  | Source-coded exchange continues. Search, decision support, and analytics may degrade or require manual interpretation.             | Semantic packages and mapping snapshots can be exported, mirrored, forked, and evaluated by multiple mapping providers.             |
| **Coordination broker**                         | Delivery, retry, deduplication, interaction-local ordering, routing, transport acknowledgements                                  | Consent, agreement, commitment, refusal, legal formation of a transaction, or advancement of another principal’s workflow         | Local queues persist. Parties may use direct, batch, or alternate-broker exchange. Timeliness degrades, not authority.             | Any compatible broker or direct protocol exchange can carry the same envelopes.                                                     |
| **Evidence index or transparency witness**      | Hashes, pointers, signed checkpoints, inclusion receipts, equivocation detection                                                 | The sole copy of protected content; the accuracy of statements; a global order across principals; resolution of disputes          | Discovery or external witnessing is reduced. Issuer and recipient evidence journals remain authoritative for their own records.    | Rebuild indices from principal journals; use multiple witnesses; move to another transparency service.                              |
| **Policy evaluator**                            | Evaluation of a named, versioned policy package on behalf of a named principal; production of an explanation and evidence bundle | Universal permit/deny decisions; combining different principals’ authority; hiding rule origin; creating authority                | The named principal follows its declared degradation policy: local evaluator, manual review, fail-safe stop, or limited operation. | Portable policy text, executable form, and test vectors run in another evaluator.                                                   |
| **Fleet distribution and reconciliation plane** | Candidate desired-state computation, package delivery, runtime inventory, deployment within a pre-granted scope                  | Consent, patient records, source facts, principal policies as their only copy, principal signing keys, or forced fleet uniformity | Nodes freeze new change admission and continue in last-known-admitted state. Local emergency controls remain available.            | A different reconciler consumes the same signed desired-state packages and local adoption records.                                  |
| **Observability exchange**                      | Privacy-scoped health signals, signed incident notices, aggregate service metrics, bilateral interaction receipts                | A global patient timeline; unrestricted correlation; bypassing consent or purpose limitations; clinical decisions                 | Local observability remains. Cross-operator diagnosis and fleet-wide aggregation degrade.                                          | Open telemetry schemas, local export, and alternative collectors permit replacement.                                                |

### Explicit rejections

This design rejects:

1. a global event graph as the authoritative history;
2. a cross-principal workflow engine that advances everyone’s state;
3. a universal authority graph;
4. a universal patient identifier as the basis for record merger;
5. a canonical ontology that silently replaces source meaning;
6. a control plane able to force changes into every logical instance.

Optional indices, graphs, workflow tools, and semantic layers are allowed only as **attributed, rebuildable projections** within the boundaries above.

### Standards posture

FHIR Consent can encode consent metadata, source references, verification, permit/deny rules, and machine-readable provisions, while the specification leaves actual enforcement to implementation and policy. That makes it useful as an interchange representation, but not as a universal legal decision service. ([HL7][1])

FHIR Provenance and AuditEvent distinguish resource-generation provenance from activity auditing, and AuditEvent explicitly anticipates that the same event may be reported from different perspectives with different knowledge. W3C PROV provides a broader interchange model for entities, agents, and activities. These are useful adapters for the attributed-evidence model, not substitutes for it. ([FHIR][2])

NIST’s zero-trust model is appropriate for eliminating implicit infrastructure trust, but authentication and network trust do not establish legal or professional authority. IETF RATS can supply evidence about device or agent operating state, while SCITT-style transparency can witness single-issuer signed statements and issue receipts. Neither should adjudicate the truth or legal effect of those statements. ([NIST Computer Security Resource Center][3])

### Uncertainties deliberately left unresolved

The architecture must profile, rather than silently decide:

* whether a clinician, employing organization, or both are the relevant principal for a particular act;
* when a representative may override or coexist with a patient’s expressed refusal;
* which emergency, public-health, court, or statutory authorities can override ordinary preferences;
* how retention, deletion, sealing, correction, and evidentiary preservation interact in each jurisdiction;
* the legal effect of a machine agent’s commitment or signature;
* acceptable identity-matching evidence and error rates;
* the evidentiary sufficiency of legacy systems that cannot issue strong receipts;
* the safety regime for autonomous physical action by devices and robots.

---

# 1. Architecture artifact taxonomy

“Owns” below means the artifact class is responsible for expressing that concern. It does not confer runtime authority on its maintainer.

| Artifact or resource class                         | What it owns                                                                                                                               | What it forbids                                                                                                                                   |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **A1. Constitutional invariant specification**     | Non-collapsible principles, foundational terms, prohibited couplings, mandatory negative properties                                        | Vendor topology, product configuration, temporary workflow rules, or jurisdiction-specific legal conclusions masquerading as universal invariants |
| **A2. Principal and authority profile**            | Principal types; actor relationships; representation, delegation, credential, and authority-evidence structures; verifier acceptance rules | Treating directory presence, employment, authentication, role name, or possession of a key as sufficient authority                                |
| **A3. Information contract**                       | Envelope schemas, required attribution, time model, identifiers, confidentiality labels, correction relations, serialization rules         | Unattributed consequential data; source-normalization that destroys original meaning; bare “current state” without provenance                     |
| **A4. Interaction or compact protocol**            | Message choreography, principal-local state transitions, timeouts, idempotency, compensation, version negotiation                          | Global transactions, platform-inferred agreement, cross-principal two-phase commit, or mutation of another principal’s state                      |
| **A5. Semantic package**                           | Versioned concepts, code systems, units, schemas, mapping assertions, uncertainty, author, and mapping evidence                            | Declaring one ontology universally controlling; deleting source codes; presenting an attributed mapping as factual identity                       |
| **A6. Policy package**                             | Human-readable rules, executable representation, test vectors, scope, principal, legal or contractual basis, effective period              | Rules that exist only in a vendor UI, prompt, SaaS workflow, proprietary database, or undocumented model behavior                                 |
| **A7. Source connector contract**                  | Source-of-commitment designation, read/write semantics, version tokens, receipts, reconciliation, latency, outage and correction behavior  | Treating a cache as authoritative; declaring a source write complete before receipt; hidden transformation or silent loss of source identifiers   |
| **A8. Safety, privacy, security, and misuse case** | Explicit claims, assumptions, hazards, threat models, mitigations, evidence, residual risk, human-factor concerns                          | Blanket declarations that a component is “safe,” “HIPAA-compliant,” “secure,” or “clinically validated” outside a stated scope                    |
| **A9. Deployment and variation profile**           | Logical-to-physical bindings, data placement, isolation, residency, resilience, supported capabilities, local overlays                     | Changing principal, consent, correction, or source-sovereignty semantics through deployment configuration                                         |
| **A10. Conformance profile and test suite**        | Observable requirements, negative tests, interoperability scenarios, evidence formats, test environment                                    | Universal legal certification; a single pass/fail label without profile, version, environment, exceptions, and issuer                             |
| **A11. Observability contract**                    | Telemetry schema, correlation scope, retention, access controls, redaction, checkpoints, incident evidence                                 | Global patient correlation, observability-based access bypass, or dashboards presented as authoritative clinical state                            |
| **A12. Change capsule and decision record**        | Proposed delta, rationale, impacts, reviews, approvals, refusals, conditions, migration, rollout, rollback, evidence                       | Silent behavior changes; approval by simple majority where a separately affected principal must consent; erasure of dissent                       |
| **A13. Release and attestation manifest**          | Exact package composition, digests, dependencies, build provenance, test results, signatures, transparency receipts                        | Hidden dependencies, mutable release contents, or bundling policy and semantic changes as an undocumented software update                         |
| **A14. Adoption, refusal, and exception record**   | A named principal’s decision to adopt, conditionally adopt, defer, refuse, waive, or withdraw an artifact                                  | Assuming publication equals adoption; permanent invisible exceptions; waivers without owner, scope, compensating control, and expiry              |
| **A15. Continuity and portability bundle**         | Exported statements, source references, semantic snapshots, policies necessary for interpretation, proofs, and verification instructions   | Becoming a new canonical record; stripping issuer identity; converting copies into source records without an explicit new commitment              |
| **A16. Runtime statement and evidence envelope**   | One principal’s assertion, proposal, decision, refusal, commitment, receipt, correction, dispute, or attestation                           | More than one undifferentiated issuer; overwriting another issuer’s statement; signature without authority context                                |
| **A17. Incident and corrective-action record**     | What was observed, by whom, affected scope, containment, disputed facts, corrective changes, reopening criteria                            | Postmortem consensus being represented as uncontested truth; retroactive rewriting of logs or decisions                                           |

---

# 2. Architecture content model

## 2.1 Constitutional invariants

These invariants apply to both runtime and architecture management.

1. **One statement, one issuer principal.** Joint acts are represented as linked statements or endorsements, not one merged-authority object.

2. **Authentication is not authority.** Every consequential act identifies both the actor and the principal under whose authority the actor claims to act.

3. **Authority is typed and scoped, not scalar.** There is no universal trust score or total order of principals.

4. **Cross-principal status is a vector.** Any synthesized status must retain all component statements and identify the observer that computed it.

5. **Publication is not adoption.** A package may be published while particular principals refuse it.

6. **Transport success is not business success.** Delivery acknowledgements, source execution receipts, and legal or professional acceptance are distinct.

7. **Absence is not refusal, and refusal is not error.** Refusal, withdrawal, abstention, deferment, inability, timeout, and unknown are different states.

8. **A source is sovereign for its commitment, not for reality.** A lab is authoritative for what it reported; a bank for its ledger entry; a pharmacy for what it recorded as dispensed. None is automatically authoritative for every underlying fact.

9. **Corrections append; they do not erase causality.** Current views may suppress superseded content, but the correction relationship and historical evidence remain subject to lawful retention rules.

10. **Clinical and commercial statements remain typed and attributable.** A coverage denial must never silently become a clinical contraindication.

11. **No global patient merge.** Identity relationships are attributed link assertions with evidence, confidence, scope, and reversibility.

12. **No global total order.** Each issuer may maintain sequence integrity; cross-principal ordering is partial and supported by send/receive receipts and bounded clock evidence.

13. **Every derived view declares its perspective.** A query result includes `asSeenBy`, `asOf`, policy version, semantic version, source set, freshness, and unresolved conflicts.

14. **Local admission is mandatory.** A logical instance or principal cell can reject or quarantine a package even when a federation or vendor recommends it.

15. **Machine authority cannot self-expand.** Agents and devices cannot create, widen, or renew their own capability grants.

16. **Evidence must remain independently verifiable.** Verification must not require access to the original vendor’s live service.

## 2.2 Authority model

Authority is represented as a non-comparable tuple:

```text
Authority =
  principal
  + actor
  + authority basis
  + permitted action
  + governed object or subject
  + purpose
  + jurisdiction
  + effective time
  + constraints
  + verifier
```

An authority basis can reference:

* patient consent or refusal;
* representative appointment;
* professional credential;
* employment or agency relationship;
* contract;
* statutory or regulatory basis;
* court order;
* emergency basis;
* device or agent capability grant;
* federation compact.

A signature authenticates an issuer or service. It does not by itself establish that the issuer had the relevant authority.

Each relying principal records its own result:

```text
accepted
accepted_with_constraints
rejected
unknown
expired
revoked
needs_human_review
```

That verifier result is itself an attributed statement. It does not modify the underlying authority evidence.

## 2.3 Runtime statement model

A consequential statement envelope contains at least:

```text
statement_id
issuer_principal              exactly one
actor
actor_to_principal_relation
statement_kind
authority_basis_refs
subject_refs                  scoped, not globally canonical
payload
payload_schema_and_version
source_commitment_ref
purpose
jurisdiction
observed_time
effective_time_or_interval
recorded_time
issued_time
clock_uncertainty
confidentiality_and_handling
semantic_context
dependencies_and_preconditions
relations_to_prior_statements
retention_class
signature_or_service_attestation
source_receipt
optional_witness_receipt
```

### Statement kinds

| Kind                             | Meaning                                                                                                |
| -------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Observation**                  | What an actor, sensor, device, or organization reports observing                                       |
| **Assertion**                    | What the issuer states or believes                                                                     |
| **Proposal/request**             | A request for another principal to consider or act                                                     |
| **Decision**                     | Accept, deny, abstain, defer, or require more information                                              |
| **Refusal**                      | An explicit unwillingness, prohibition, withdrawal, or non-authorization                               |
| **Commitment**                   | A conditional or unconditional promise by the issuer                                                   |
| **Execution receipt**            | A source system’s record that an action succeeded, failed, partly succeeded, or remains unknown        |
| **Correction**                   | The issuer’s amendment, retraction, supersession, voiding, or restatement of its own earlier statement |
| **Contestation**                 | A different principal’s dispute of another statement                                                   |
| **Reopening**                    | A statement that a previously closed interaction is under consideration again                          |
| **Delegation or representation** | Evidence that an actor or representative may act in a stated scope                                     |
| **Conformance or attestation**   | Evidence about an implementation, device, model, build, or operating environment                       |

### Required historical relations

At minimum:

```text
amends
supersedes
retracts
voids_as_error
disputes
reopens
responds_to
fulfills
fails_to_fulfill
derived_from
interprets
maps_from
acknowledges
```

Only the original issuer may amend, retract, or supersede its statement. Other principals issue contestations.

## 2.4 Multi-principal interaction model

A cross-principal interaction is:

```text
Interaction =
  participant set
  + independent statements
  + compact protocol version
  + interaction-scoped identifiers
  + per-principal local states
  + observer-specific derived status
```

A compact can determine that protocol conditions appear satisfied. It cannot infer legal agreement unless the involved principals’ own commitment statements explicitly give that effect.

There is no distributed ACID transaction across independent principals. Use:

* conditional offers;
* explicit acceptances;
* source execution receipts;
* escrow where legally appropriate;
* idempotent commands;
* time-bounded commitments;
* compensation;
* reconciliation.

An irreversible action is never “rolled back.” A new compensating or correcting action is issued.

## 2.5 Patient intent and represented authority

Patient consent, refusal, and representation are separate first-class resources, not fields on an access-control list.

A representation record includes:

* represented person;
* representative;
* issuer of the representation evidence;
* legal or factual basis;
* scope of action;
* relevant domains;
* valid period;
* jurisdiction;
* verification history;
* restrictions;
* revocation or dispute;
* conflicting representatives;
* whether delegation is permitted.

A consent or refusal evaluator returns:

1. the relevant patient and representative statements;
2. applicable policy and legal-basis references;
3. conflicts and uncertainty;
4. a recommendation or candidate decision;
5. the named principal responsible for the final decision.

It does not return a universal authorization.

An emergency override does not alter or erase the refusal. It produces a separate decision stating who overrode it, the asserted basis, scope, time, and required review.

## 2.6 Separation of meaning domains

The substrate uses typed domains:

| Domain                         | Examples                                                                 | Boundary                                                                |
| ------------------------------ | ------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| **Patient intent**             | Goals, preferences, consent, refusal, representation                     | Must not be inferred from clinical or financial behavior                |
| **Clinical**                   | Observations, diagnoses, recommendations, orders, professional judgments | Must not be silently changed by coverage, price, or operator incentives |
| **Commercial and financial**   | Coverage, price, claim, payment, credit, contract, supplier terms        | Must not be presented as clinical meaning                               |
| **Operational**                | Availability, scheduling, staffing, delivery, inventory, execution       | May constrain execution but does not redefine clinical necessity        |
| **Authority and identity**     | Credentials, delegations, representation, trust bindings                 | Establishes evidence for acting authority, not clinical truth           |
| **Evidence and observability** | Provenance, audits, receipts, incidents, conformance                     | Describes activity or evidence, not the underlying care conclusion      |

Cross-domain use requires an explicit **bridge artifact** specifying:

* fields released;
* sending and receiving principals;
* purpose;
* authority basis;
* allowed interpretation;
* retention;
* expiry;
* audit and patient-facing disclosure;
* whether the result may influence, inform, or only be displayed beside a decision.

A decision-support system combining clinical, financial, and operational information must emit separate components. It may say:

* clinically preferred option;
* covered option;
* lowest-cost option;
* currently available option;
* patient-preferred option.

It must not emit an unlabeled “best option.”

## 2.7 Source sovereignty model

Source authority is declared per principal, record class, and operation.

A connector contract identifies:

* source principal;
* authoritative system and namespace;
* authoritative record classes;
* authoritative operations;
* source identifier and version token;
* accepted acknowledgement;
* write semantics;
* timeout semantics;
* correction semantics;
* reconciliation frequency;
* freshness threshold;
* evidence strength;
* handling during source outage.

Copies are explicitly labeled:

```text
pending
mirrored
stale
derived
unverified
source_acknowledged
source_rejected
source_state_unknown
```

A platform request to a bank, pharmacy, laboratory, calendar, payroll system, or EHR remains a **proposal or pending command** until the relevant source issues a receipt.

Email, chat, and calendar evidence proves what those systems recorded as sent, received, or scheduled. It does not prove that the content was true or that a recipient legally agreed.

## 2.8 Projection contract

There is no API for an unqualified “current patient state.”

Every materialized or computed projection identifies:

```text
viewpoint_principal
policy_version
semantic_profile
source_set
as_of_time
freshness
identity_links_used
excluded_sources
unresolved_conflicts
derivation_version
```

A receiving principal may produce its own accepted view without mutating the issuers’ statements.

---

# 3. Architecture operations and change model

## 3.1 Change is packaged as a Change Capsule

Every consequential change is represented by a signed Change Capsule containing:

* intent and problem statement;
* affected artifacts and interfaces;
* normative text diff;
* executable or code diff;
* semantic diff;
* principal and authority impact;
* consent and representation impact;
* source-sovereignty impact;
* clinical-commercial boundary impact;
* privacy, security, misuse, and safety analysis;
* backward and forward compatibility;
* data migration and reconciliation plan;
* rollout and quarantine plan;
* code rollback plan;
* data correction or compensation plan;
* observability and success criteria;
* conformance tests;
* proposer, implementer, reviewers, and verifier;
* approvals, conditional approvals, refusals, and unresolved objections.

## 3.2 Change classes

| Class                                                               | Description                                                                                 | Minimum treatment                                                                                                    |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **C0 — explanatory**                                                | No intended behavior or semantic change                                                     | Automated checks and responsible maintainer review                                                                   |
| **C1 — compatible additive**                                        | New optional field, capability, mapping, or test                                            | Compatibility proof, conformance tests, publication                                                                  |
| **C2 — principal-local consequential**                              | Changes access, money, care behavior, retention, automation, or liability for one principal | Named principal adoption, domain review, staged deployment                                                           |
| **C3 — compact or federation change**                               | Changes cross-principal messages, semantics, obligations, or compatibility                  | Independent review by affected constituencies; coexistence and negotiation plan                                      |
| **C4 — constitutional, cryptographic, or catastrophic-risk change** | Changes foundational invariants, trust, evidence, authority, or physical safety             | Multi-constituency decision, independent implementations, migration period, explicit holdouts, falsification testing |

## 3.3 Lifecycle

### 1. Propose

A human or machine actor may propose. The proposal has no authority merely because it was generated by an architecture team or AI.

### 2. Analyze

Automated and human analysis determines:

* affected principals;
* affected authority domains;
* protocol and semantic compatibility;
* whether clinical and commercial concerns become coupled;
* expected source-system behavior;
* migration reversibility;
* safety and privacy implications;
* evidence needed for adoption.

### 3. Review

Review is represented as a vector, not a vote:

```text
principal A: accept
principal B: accept with conditions
principal C: refuse
principal D: defer
clinical safety reviewer: accept
privacy reviewer: open objection
```

A maintainer group may publish a package despite a principal’s refusal. It may not record that principal as having adopted it.

### 4. Build and verify

The implementation, package manifest, policy modules, semantic assets, migration tools, and tests are built and signed. High-impact changes require proposer/implementer/verifier separation.

### 5. Publish candidate

Publication makes a package discoverable. It does not activate it.

### 6. Local admission

Each logical instance applies its own admission policy:

* signature and issuer validation;
* dependency resolution;
* invariant checks;
* local legal and policy review;
* compatibility tests;
* conformance evidence;
* resource and data-placement checks;
* local human approval where required.

The result is an adoption statement.

### 7. Stage and propagate

Propagation is pull-based or notice-triggered. It supports:

* shadow evaluation;
* simulation;
* canary cells;
* limited cohorts;
* dual protocol operation;
* read-only mode;
* manual fallback;
* quarantine.

### 8. Observe and reconcile

The system compares:

* published state;
* principal-adopted state;
* deployment-admitted state;
* observed runtime state;
* source-system results;
* user and patient outcomes.

These states are never collapsed.

### 9. Close, correct, or reopen

Closure records whether success criteria were met. A later issue creates a reopening statement linked to the original change. The original rationale and dissent remain.

## 3.4 Rollback and correction

Three mechanisms must not be confused:

| Mechanism                           | Appropriate use                                                                                       |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Software rollback**               | Restore prior executable or configuration when doing so is safe                                       |
| **Forward repair**                  | Deploy a new version correcting a flawed version                                                      |
| **Business or clinical correction** | Issue a new statement that amends, retracts, compensates for, or contests a prior statement or action |

A database migration that altered historical meaning cannot be “rolled back” by deleting evidence. It requires a forward migration and explicit correction records.

## 3.5 Emergency change

An emergency package can:

* suspend a specific automation capability;
* revoke a compromised credential or package;
* quarantine a connector;
* disable an unsafe model or device command;
* switch a logical instance to a degraded local mode.

It must be:

* narrowly scoped;
* time-bounded;
* signed by an authorized principal;
* independently visible;
* locally enforceable;
* subject to retrospective review.

A federation can distribute an emergency notice. Each member’s pre-adopted policy determines enforcement. No broadcast message silently acquires universal authority.

## 3.6 Rule representation requirement

Any rule affecting access, consent, care, money, retention, liability, automation, or external communication must have:

1. human-readable normative text;
2. a machine-readable or executable representation;
3. clause-to-rule traceability;
4. positive and negative test vectors;
5. issuer and adopting principal;
6. effective period and jurisdiction;
7. version and digest;
8. independent export.

A prompt, model weight, workflow configuration, feature flag, or vendor UI may implement a rule but may not be its only durable representation.

---

# 4. Multi-agent and fleet operating model

## 4.1 Agent roles

Large-scale architecture work is divided into roles with narrow capabilities.

| Role                     | Permitted outputs                                            | Prohibited actions                                               |
| ------------------------ | ------------------------------------------------------------ | ---------------------------------------------------------------- |
| **Scout**                | Inventory, drift report, dependency map, evidence collection | Changes to production or authority artifacts                     |
| **Proposer**             | Change Capsule, alternatives, risk hypotheses                | Approval of its own high-impact proposal                         |
| **Analyst or simulator** | Impact analysis, model checking, scenario results            | Declaring a legal, clinical, or professional decision            |
| **Implementer**          | Code, package, migration, connector implementation           | Independent conformance attestation of its own work              |
| **Reviewer**             | Findings, objections, conditional approval                   | Editing evidence after signing                                   |
| **Verifier**             | Reproducible test and conformance claim                      | Treating test success as universal legal compliance              |
| **Release agent**        | Signed release assembly after approvals                      | Adding unreviewed dependencies or policies                       |
| **Deployment agent**     | Apply locally admitted packages within grant                 | Expanding scope, changing principal policy, bypassing quarantine |
| **Observer**             | Runtime and source reconciliation statements                 | Mutating the observed system                                     |
| **Repair agent**         | Bounded reversible repair or repair proposal                 | Irreversible high-impact action without explicit authority       |

Different model instances controlled by the same vendor, credentials, tools, and deployment are not independent merely because they are called separate agents.

For high-risk changes, independence should include different credentials, duty separation, and—where warranted—different organizations or principals.

## 4.2 Agent Action Capsule

Every consequential agent action records:

* agent identity and operator;
* model or build identity;
* principal on whose behalf it acts;
* capability grant;
* grant expiry;
* input evidence digests;
* retrieved context and source references;
* policy and semantic versions;
* proposed action;
* uncertainty and alternatives;
* approvals;
* tool calls;
* tool results;
* source-system receipts;
* runtime attestation where used;
* final disposition.

Agent memory is not authoritative. Material claims in memory must point back to source statements or be labeled as agent-generated inference.

## 4.3 Capability model

Agent and device capabilities are:

* object-scoped;
* action-scoped;
* purpose-scoped;
* time-scoped;
* environment-scoped;
* budget-scoped;
* non-transferable;
* revocable;
* logged.

Agents cannot:

* create or renew their own grants;
* approve their own high-risk changes;
* modify audit evidence;
* impersonate another principal;
* convert an advisory output into a principal decision;
* use commercial data for clinical action outside an explicit bridge;
* continue physical action after local safety revocation.

## 4.4 Fleet state is a five-part vector

The fleet management system separately maintains:

1. **candidate desired state** — what a package publisher proposes;
2. **adopted state** — what a principal has accepted;
3. **admitted state** — what a logical instance has allowed;
4. **reported state** — what the runtime says is installed;
5. **observed state** — what an independent observer can verify.

A single green dashboard cannot collapse these.

## 4.5 Fleet reconciliation

A local reconciler computes candidate configuration from:

* constitutional profile;
* protocol version;
* jurisdiction profile;
* domain profile;
* federation compact;
* principal-local policy;
* deployment overlay;
* emergency restrictions.

Precedence is meaningful only among artifacts adopted by the **same** principal. It cannot resolve disagreement between independent principals.

The local reconciler produces a signed admission record and can refuse, defer, stage, or quarantine a proposed change.

## 4.6 Fleet failure behavior

When the shared fleet plane is unavailable:

* no new central release is required for ordinary local operation;
* already admitted packages continue;
* local source connectors continue;
* local evidence journals continue;
* outbound statements queue;
* local safety controls remain;
* emergency manual operation remains available;
* reconciliation occurs after restoration.

For selected high-risk operations, local policy may require fresh external evidence. That restriction is owned by the relevant principal, not imposed implicitly by control-plane availability.

## 4.7 Connectors, sensors, devices, and robotics

A sensor observation includes:

* device identity;
* owning or operating principal;
* calibration status;
* measurement method;
* units;
* observed and recorded time;
* environmental context;
* uncertainty;
* device/software version;
* attestation evidence where relevant.

A robotic action uses a minimum chain:

```text
principal decision
  -> bounded command
  -> local safety controller admission
  -> actuator execution
  -> physical-state observation
  -> execution receipt
  -> reconciliation
```

Cloud or fleet agents should not directly control an actuator without a local, independently enforceable safety envelope and local stop capability.

The local controller’s receipt proves what it reports executing. It does not prove that the physical-world result was successful; that requires observation and, where necessary, human confirmation.

---

# 5. Deployment and variation model

## 5.1 Logical instance versus physical deployment

| Logical operator instance                    | Physical deployment                              |
| -------------------------------------------- | ------------------------------------------------ |
| Stable instance identifier                   | Region, cluster, appliance, host, or edge device |
| Adopted architecture and policy packages     | Software processes and storage                   |
| Hosted principal cells                       | Tenant partitions, databases, queues             |
| Trust bundles and federation relationships   | Network and key-service placement                |
| Logical data partitions and retention policy | Physical replicas, shards, backups               |
| Conformance profile                          | Runtime versions and infrastructure              |
| Source-connector bindings                    | Specific connector process and credentials       |
| Portability and exit state                   | Physical migration mechanism                     |

The mapping is many-to-many:

* thousands of logical instances may share one multi-tenant deployment;
* one logical instance may span several regions;
* a principal cell may move between operators;
* a dedicated enterprise installation may host several logical instances;
* a federation may connect instances run by unrelated operators.

A physical migration does not change the logical instance identity, principal identity, statement identifiers, or adopted policies.

## 5.2 Deployment forms

| Form                                              | Required properties                                                                                                                                     |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pooled multi-tenant**                           | Per-instance and per-principal isolation, separate key scopes, policy contexts, quotas, logs, support access, exportability, noisy-neighbor containment |
| **Regional deployment**                           | Explicit residency and replication profile, controlled cross-region movement, jurisdiction-aware failover                                               |
| **Dedicated enterprise**                          | Independent operation and upgrade admission; no dependency on pooled control-plane authority                                                            |
| **Federated node**                                | Local sources and policies, statement exchange, bilateral or compact-specific trust, independent outage behavior                                        |
| **Disconnected or intermittently connected edge** | Local queueing, bounded offline authority, expiry rules, later reconciliation, visible uncertainty                                                      |
| **Device or robotics edge**                       | Local safety policy, command limits, physical stop, high-integrity clock and receipt behavior appropriate to risk                                       |

## 5.3 Logical instance boundary

Each logical instance has:

* stable namespace;
* operator principal;
* hosted principal-cell inventory;
* adopted package set;
* trust bundles;
* data-placement manifest;
* source connectors;
* policy evaluators;
* local admission service;
* evidence journal;
* export and recovery configuration;
* conformance claims;
* exceptions and waivers;
* runtime SLO profile.

The instance’s operator key may attest deployment state. It may not sign a clinician, patient, payer, or other hosted principal’s substantive statement unless an explicit authority relationship permits that action.

## 5.4 Variation hierarchy

Variation is expressed through packages, not hidden forks.

```text
constitutional core
  -> protocol profiles
    -> jurisdiction profiles
      -> domain profiles
        -> federation compacts
          -> principal-local policies
            -> deployment overlays
```

A lower layer may:

* add constraints;
* select optional capabilities;
* choose source bindings;
* strengthen safety;
* specify local workflows;
* add terminology or mappings.

It may not weaken the constitutional invariants without becoming a separately identified constitutional fork.

## 5.5 Capability negotiation

Each endpoint advertises:

* supported protocol versions;
* semantic profiles;
* identity and signature mechanisms;
* privacy and handling capabilities;
* correction behavior;
* maximum payload;
* online/offline behavior;
* source-receipt support;
* conformance evidence.

Negotiation can result in:

```text
compatible
compatible_with_adapter
compatible_with_reduced_scope
not_supported
refused
unknown
```

Silent downgrade is prohibited.

## 5.6 Federation model

A federation is a set of independently signed membership and compact statements. Its package defines:

* membership criteria;
* protocol and semantic profiles;
* trust bundles;
* required conformance evidence;
* incident-notification obligations;
* dispute mechanisms;
* version coexistence;
* suspension behavior;
* portability and exit;
* data handling;
* non-transitivity of trust.

Federation membership does not imply that every member accepts every other member’s authority, credentials, semantics, or statements.

A federation operator may control access to federation-operated infrastructure. It cannot invalidate a member’s source records or professional decisions.

## 5.7 Migration and exit

Every logical instance must support:

* complete and selective continuity export;
* package and policy export;
* source mappings;
* semantic snapshots;
* evidence and verification material;
* adoption and waiver history;
* unresolved queue export;
* reconstruction of perspective-bound views;
* import into an independent implementation.

A migration produces:

* source inventory;
* destination inventory;
* content and evidence digests;
* missing or transformed item report;
* key-transition evidence;
* source and destination receipts;
* acceptance or refusal by the receiving principal;
* final disposition of the former deployment.

---

# 6. Repository and package shape

This is a **package namespace**, not a required monorepo. Different principals may maintain separate repositories and publish signed packages to multiple mirrors.

```text
architecture/
  constitution/
    invariants/
    prohibited-couplings/
    terminology/
  metamodel/
    principals/
    authority/
    statements/
    corrections/
    identity-links/
    interactions/
  protocols/
    consent/
    clinical/
    financial/
    scheduling/
    orders/
    payments/
    notifications/
    portability/
  semantics/
    schemas/
    terminology/
    mappings/
    units/
  policies/
    templates/
    decision-interfaces/
    test-vectors/
  connectors/
    contracts/
    profiles/
    simulators/
    reconciliation/
  profiles/
    jurisdiction/
    clinical-domain/
    business-domain/
    federation/
    deployment/
  safety/
    hazard-models/
    privacy-cases/
    security-cases/
    misuse-cases/
  conformance/
    suites/
    fixtures/
    negative-tests/
    property-tests/
    model-checks/
    interoperability-scenarios/
  observability/
    event-schemas/
    metric-definitions/
    correlation-profiles/
    redaction/
  agents/
    role-definitions/
    capability-templates/
    action-capsules/
    evaluation-suites/
  changes/
    proposals/
    reviews/
    decisions/
    migrations/
    reopenings/
  releases/
    manifests/
    attestations/
    transparency-receipts/
  portability/
    continuity-bundle/
    verification-tools/
    round-trip-tests/
```

Principal-specific material is separate:

```text
principals/<principal-namespace>/
  adoption/
  refusals/
  policies/
  trust/
  source-designations/
  waivers/
  deployment-bindings/
```

Runtime patient or business records do not belong in the architecture repository.

## Package manifest

Every package declares:

```text
package_id
artifact_class
issuer
maintainers
content_digest
normative_files
executable_files
test_files
dependencies
compatibility
invariants_touched
principal_scope
jurisdiction_scope
risk_class
effective_period
migration
rollback_or_forward_repair
required_capabilities
approvals
refusals
exceptions
signatures
build_provenance
conformance_evidence
optional_transparency_receipts
```

## Repository rules

1. A vendor-specific configuration is generated from, or linked to, a portable package.
2. No production feature flag affecting meaning or authority is untracked.
3. No prompt is the only statement of an authorization rule.
4. Generated code cannot become the only surviving semantic definition.
5. Normative text and executable rules have clause-level traceability.
6. Package verification works offline.
7. Registries are mirrors, not authorities.
8. Core protocols have an independent conformance harness.
9. Core packages are usable through at least two independently controlled implementations before they become mandatory for a federation.
10. Private keys and live credentials are referenced, never stored in packages.

---

# 7. Conformance and observability model

## 7.1 Conformance is an attributed claim

There is no universal `certified = true`.

A conformance claim states:

```text
claim issuer
implementation or deployment tested
logical instance
profile and version
test suite and version
environment
test time
results
exceptions
unexecuted tests
evidence digests
validity period
signature
```

Each relying principal decides which test issuers, laboratories, self-attestations, or evidence it accepts.

## 7.2 Conformance dimensions

| Dimension                          | Required evidence                                                                                        |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Envelope and cryptographic**     | Canonical serialization, signature checks, replay handling, key rotation, algorithm agility              |
| **Authority**                      | Expired, revoked, absent, conflicting, and insufficient authority tests                                  |
| **Consent and refusal**            | Withdrawal, representative conflict, explicit refusal, emergency override, purpose and time restrictions |
| **Source sovereignty**             | Receipt handling, timeout-to-unknown, source rejection, stale cache, reconciliation, correction          |
| **Temporal and correction**        | Multiple time fields, partial ordering, supersession, contestation, reopening                            |
| **Semantic**                       | Version skew, unknown code, mapping disagreement, unit conversion, preservation of source meaning        |
| **Compact protocol**               | Duplicate messages, out-of-order delivery, partial execution, compensation, counterparty refusal         |
| **Clinical-commercial separation** | Payer or price information cannot silently rewrite clinical meaning                                      |
| **Privacy and security**           | Purpose limitation, least privilege, isolation, observability access, key compromise                     |
| **Portability**                    | Export, independent verification, import, round-trip preservation, source and signature retention        |
| **Resilience**                     | Shared control-plane outage, partition, regional failure, offline operation, delayed reconciliation      |
| **Agent and device**               | Capability boundary, self-extension attempts, model substitution, unsafe physical command                |
| **Human factors**                  | Refusal visibility, conflict display, uncertainty, override burden, alert and workflow safety            |

## 7.3 Mandatory negative scenarios

At least these must be in the common conformance suite:

1. The patient refuses while the provider recommends and payer approves. All statements remain visible; no platform action is inferred.
2. A write to an external source times out. The status becomes `unknown`, not `completed`.
3. Two organizations assert conflicting patient identity links. No irreversible merge occurs.
4. A correction arrives after data was exported. The recipient can reconcile without deleting the original evidence.
5. A semantic mapping changes. Historical projections remain reproducible using the old mapping version.
6. A software agent possesses valid authentication but lacks the required authority basis. The action is rejected.
7. The shared control plane is unavailable. Local admitted operation and evidence capture continue.
8. A payer denial is received. It remains a coverage decision and is not rendered as clinical advice.
9. A federation publishes a mandatory upgrade that a member refuses. The refusal and compatibility consequence remain explicit.
10. A key is later compromised. Evidence issued before, during, and after the compromise can be separately assessed.

## 7.4 Observability scopes

### Local full-fidelity observability

Owned by the relevant operator or principal and subject to local access, purpose, and retention policy.

### Bilateral interaction evidence

The parties exchange:

* send and receive receipts;
* source execution receipts;
* compact-version identifiers;
* correction and dispute messages;
* interaction-scoped correlation identifiers.

### Federation aggregate observability

Contains privacy-minimized operational and conformance metrics. It should not contain a universal patient-level correlation key.

## 7.5 Correlation rules

* Use local trace identifiers inside one authority domain.
* Use pairwise or interaction-specific identifiers across principals.
* Rotate identifiers by interaction or purpose when possible.
* Do not expose a global patient trace identifier to all operators.
* Correlation itself is governed data.
* Observers issue attributed observations; they do not mutate the event being observed.

## 7.6 Critical metrics

The minimum fleet and architecture metrics are:

| Category                           | Examples                                                                                                   |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Authority integrity**            | Actions lacking authority basis; expired grants; rejected verifier decisions; override count               |
| **Patient intent**                 | Unresolved consent conflicts; refusal override rate; representation ambiguity; withdrawal propagation time |
| **Source integrity**               | Pending writes; unacknowledged commands; stale mirrors; source drift; reconciliation lag                   |
| **Evidence completeness**          | Missing actor, principal, purpose, source receipt, semantic version, or signature                          |
| **Semantic integrity**             | Unknown concepts; mapping disagreement; unit ambiguity; profile skew                                       |
| **Clinical-commercial separation** | Cross-domain rule invocations; unlabeled mixed recommendations; blocked improper joins                     |
| **Fleet state**                    | Published/adopted/admitted/reported/observed divergence                                                    |
| **Agent containment**              | Denied tool calls; scope violations; self-extension attempts; unverified model or build                    |
| **Portability**                    | Last successful independent export/import; unverifiable package count; reconstruction failure              |
| **Resilience**                     | Local autonomy duration; queued interactions; recovery and reconciliation time                             |
| **Safety**                         | Near misses; emergency stops; unsafe-command rejection; manual intervention                                |
| **Governance**                     | Long-lived waivers; unresolved dissent; concentration of reviewers or release signers                      |

## 7.7 Tamper evidence and retention

Use local append-oriented evidence journals with signed checkpoints and optional independent witnesses.

However:

* append-oriented does not mean every payload must be retained forever;
* content and integrity evidence may have different retention regimes;
* encrypted payloads may be sealed or destroyed while lawful minimal evidence remains;
* even a hash may be sensitive or regulated;
* retention and erasure behavior must be jurisdiction-profiled.

This is an unresolved legal and technical boundary, not something the architecture should hide behind the word “immutable.”

---

# 8. The ten most dangerous omissions in this design

|      # | Omission                                                                   | Why it is dangerous                                                                                                                                                                                      |
| -----: | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  **1** | **A complete jurisdiction-by-jurisdiction principal and authority matrix** | The architecture supplies the grammar for authority but not the legal answer to who may decide in every context, especially minors, incapacity, public health, court orders, and employed professionals. |
|  **2** | **A proven patient and organization identity-linking regime**              | False merges can expose data or alter care; false splits can hide history. Reversible assertions reduce harm but do not solve matching quality.                                                          |
|  **3** | **A full clinical human-factors and safety program**                       | Perfect provenance can still produce unsafe interfaces, alarm fatigue, misunderstood conflicts, or dangerous delays.                                                                                     |
|  **4** | **Decades-long cryptographic continuity**                                  | Keys will be lost or compromised, algorithms will age, organizations will dissolve, and verification material may disappear during a longitudinal record’s lifetime.                                     |
|  **5** | **A credible bridge for weak legacy sources**                              | Many sources cannot provide versioned records, idempotency, strong actor attribution, or cryptographic receipts. Wrapping them can create false confidence.                                              |
|  **6** | **A resolved data-lifecycle model**                                        | Evidentiary preservation, correction, patient rights, litigation holds, public obligations, contractual retention, and deletion may conflict.                                                            |
|  **7** | **Control of semantic and medical-knowledge drift**                        | An attributed mapping can still be dangerously wrong. Large numbers of mappings, model-generated interpretations, and evolving clinical knowledge may overwhelm review.                                  |
|  **8** | **An anti-capture and economic-governance design**                         | A technically polycentric system can still be captured by a dominant payer, operator, standards body, certifier, cloud provider, or funding source.                                                      |
|  **9** | **A complete degraded-care and disaster regime**                           | Partitions, disasters, cyber incidents, staff shortages, and emergency powers may force actions outside ordinary workflows and authority evidence.                                                       |
| **10** | **A physical safety architecture for devices and robotics**                | Digital authorization and audit do not ensure that a physical action is safe, correctly sensed, mechanically bounded, or recoverable.                                                                    |

---

# 9. Falsifiers

A single failed deployment may be nonconformant rather than proof that the architecture is wrong. The architecture is falsified if independent implementations repeatedly cannot satisfy these properties without bypassing its model.

1. **An independent principal cannot refuse a software, policy, or semantic change without losing all unrelated local operation.**

2. **A cross-principal interaction can only be implemented by storing one mutable “truth” row or global workflow state.**

3. **The system cannot preserve a patient refusal, provider recommendation, payer decision, and source execution result as independent simultaneous statements.**

4. **A platform can mark an external action complete without a source-system receipt or explicit evidence that the source cannot provide one.**

5. **A correction requires deleting or mutating the original statement rather than issuing a linked correction.**

6. **An independent implementation cannot verify continuity bundles, policy packages, or historical statements without the original vendor’s live service.**

7. **Moving a logical operator instance between physical deployments changes statement identity, principal authority, or adopted policy.**

8. **A shared ontology or mapping service is required to interpret historical source data, and its failure makes the original statements unintelligible.**

9. **A conformance authority can declare another principal legally or professionally bound merely by certifying software behavior.**

10. **A valid login, role, certificate, or signature is sufficient to perform a consequential act without a scoped authority basis.**

11. **A machine agent can modify its own capability, approve its own high-risk change, or erase evidence of its actions.**

12. **A payer, employer, operator, lender, or supplier can cause a financial or commercial conclusion to appear as an unattributed clinical judgment.**

13. **A central control-plane outage prevents local evidence capture, source access, or already-authorized care that does not inherently require remote confirmation.**

14. **Identity matching creates irreversible patient merges that cannot retain competing linkage assertions.**

15. **A federation requires a globally trusted root whose compromise allows one entity to impersonate all members.**

16. **After key compromise, no evidence remains to distinguish pre-compromise, compromise-window, and post-revocation statements.**

17. **A portability round trip loses issuer identity, correction history, source pointers, semantic versions, or refusal records.**

18. **Operational dashboards routinely show unqualified “current state” without perspective, source, time, or conflict.**

---

# 10. What must be correct at planting versus what may evolve

## Must be correct at planting

These are constitutional or structurally expensive to retrofit.

| Planting requirement                                                      | Why it cannot safely wait                                                                                |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Principal, actor, operator, and logical-instance separation**           | Retrofitting attribution after years of merged records will not reliably recover authority or liability. |
| **One statement, one issuer**                                             | Joint mutable objects create irreversible authority ambiguity.                                           |
| **Authority-basis references**                                            | Authentication-only systems cannot later reconstruct why an actor was permitted to act.                  |
| **Patient consent, refusal, and representation as first-class resources** | ACLs and boolean consent flags destroy the history and scope needed later.                               |
| **Source-of-commitment designation and receipts**                         | Otherwise cached or pending data will become indistinguishable from source-committed facts.              |
| **Correction, contestation, supersession, and reopening relations**       | Overwrite-based histories cannot be repaired retrospectively.                                            |
| **Perspective-bound projections**                                         | A canonical-current-state API will become an embedded dependency across every application.               |
| **Clinical-commercial type separation and bridge controls**               | Once data, features, and decisions are blended, provenance may not be recoverable.                       |
| **Logical instance independent of physical deployment**                   | Tenant identity, keys, policies, and record identifiers otherwise become coupled to infrastructure.      |
| **Local adoption and admission**                                          | A sovereign control plane, once operationally embedded, is difficult to dismantle.                       |
| **Portable rule and package format**                                      | Vendor-only rules accumulate quickly and become impossible to inventory.                                 |
| **Open continuity bundle with independent verification**                  | Portability added late usually exports data without meaning, history, policy, or proof.                  |
| **Partial-order time model and explicit unknown states**                  | Global ordering and binary success semantics create false historical certainty.                          |
| **Reversible identity-link assertions**                                   | Destructive master-patient merges cannot be made safe later.                                             |
| **Principal-controlled trust and cryptographic agility**                  | A single root or algorithm becomes a systemic captivity and continuity risk.                             |
| **Negative conformance tests**                                            | A happy-path-only ecosystem will normalize authority and failure defects.                                |
| **Local safety boundary for physical actions**                            | Cloud-centric robotics control cannot be made safe merely by adding later audit.                         |

## May safely evolve behind those boundaries

* storage engines;
* message brokers;
* deployment orchestrators;
* cloud, on-premises, regional, and edge topology;
* specific FHIR versions and implementation guides;
* terminology and mapping packages;
* policy languages and evaluators;
* application workflows and user interfaces;
* analytics and longitudinal projections;
* agent models and vendors;
* attestation mechanisms;
* transparency-witness implementations;
* federation membership;
* certification and test organizations;
* performance optimizations;
* indexing strategies;
* specific compact libraries;
* richer device and robotics capabilities.

These may evolve only while preserving source statements, authority context, portability, correction history, and local admission.

---

# Separate explicit answer: what becomes wrong because healthcare contains non-collapsible principals

Several convenience abstractions in the proposal become **wrong**, not merely incomplete, if implementers allow them to become authoritative.

| Assumption in the proposal that fails                                                           | Why it is wrong                                                                                                                                       | Replacement                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. One logical operator instance can stand for one authority domain.**                        | An operator instance may host a patient, provider organization, multiple clinicians, contractors, and external principals with different liabilities. | Make logical instance and principal cell separate. One instance hosts many isolated principal cells and records the authority context of each action.                       |
| **2. A principal cell can maintain “the authority graph.”**                                     | Authority evidence can be disputed, jurisdiction-dependent, time-dependent, and accepted differently by different relying principals.                 | Maintain attributed authority claims plus a verifier-specific acceptance projection. There is no globally resolved authority graph.                                         |
| **3. A shared identity directory can determine who a person or organization is.**               | Directory bindings are statements by issuers, not definitive identity or patient matching.                                                            | Use multiple scoped identifiers and reversible identity-link assertions. Each relying principal records whether it accepts the link.                                        |
| **4. A digital signature proves that an act was authorized.**                                   | It proves control of a signing mechanism, not legal capacity, professional scope, consent, representation, or purpose.                                | Bind signatures to actor identity, issuer principal, authority basis, scope, time, jurisdiction, and verifier decision.                                                     |
| **5. A consent engine can return the authoritative permit or deny result.**                     | Different controllers may have different duties, legal bases, emergency powers, and interpretations.                                                  | The engine returns evidence and a recommendation for a named controller. That controller issues its own decision and records its basis.                                     |
| **6. A compact engine can declare that a binding transaction exists.**                          | Message compatibility is not necessarily legal formation, professional acceptance, or patient agreement.                                              | Record explicit, independently signed commitments or acceptances from each relevant principal. Label the computed result only as protocol completeness.                     |
| **7. A cross-principal workflow can have one state machine.**                                   | “Ordered,” “authorized,” “accepted,” “refused,” “scheduled,” “performed,” and “paid” belong to different principals.                                  | Use choreography among principal-local state machines. A shared interaction view is a vector of their states.                                                               |
| **8. An evidence graph can represent the complete case.**                                       | No observer is guaranteed to see all lawful, private, offline, disputed, or unavailable statements.                                                   | Treat every graph as an observer-scoped index or projection. Preserve issuer journals and expose known omissions.                                                           |
| **9. A semantic mapping can normalize multiple principals into one meaning.**                   | A mapping is an interpretation that may be contested or inappropriate for another professional or jurisdiction.                                       | Preserve original coding and issue attributed, versioned mapping statements. Let relying principals choose which mappings they accept.                                      |
| **10. Source sovereignty means the source contains the truth.**                                 | A source may be wrong, outdated, fraudulent, incomplete, or later corrected.                                                                          | Define sovereignty as authority for what the source committed or recorded, not for the underlying reality.                                                                  |
| **11. A fleet desired state can determine what rules are active.**                              | A vendor, federation, or operator cannot unilaterally activate another principal’s clinical, consent, or business policy.                             | Desired state is a candidate package. A principal adoption statement and logical-instance admission record determine local activation.                                      |
| **12. A conformance certificate establishes compliance.**                                       | Technical conformance does not establish legal compliance, professional reasonableness, or acceptance by every counterparty.                          | Use scoped, signed conformance claims. Each relying principal selects accepted profiles, test issuers, evidence, and exceptions.                                            |
| **13. A federation decision can bind dissenting members.**                                      | Membership does not erase the members’ independent duties and liabilities.                                                                            | Federation governance can publish packages, restrict use of federation-operated services, and record incompatibility. It cannot silently record adoption for a member.      |
| **14. A global revocation or emergency switch can safely control all parties.**                 | Different principals may be offline, legally required to continue, or subject to different emergency authority.                                       | Distribute scoped revocation and hazard statements. Local pre-adopted policies determine enforcement, with propagation and non-enforcement visible.                         |
| **15. An append-only evidence system is always legally correct.**                               | Retention, sealing, erasure, patient rights, litigation holds, and professional obligations can conflict.                                             | Separate payload lifecycle from integrity evidence; use jurisdiction profiles, encryption, controlled sealing, tombstones, and explicit lawful disposition.                 |
| **16. The clinical-commercial firewall can be guaranteed by software architecture alone.**      | Incentives, contracts, staffing, governance, training data, and organizational control can still influence clinical behavior.                         | Combine technical separation with conflict disclosure, organizational controls, independent clinical governance, audit, patient visibility, and legal accountability.       |
| **17. A portable continuity bundle can become the receiving operator’s master patient record.** | The receiving operator did not issue the source statements and cannot assume their authority or completeness.                                         | Import the bundle as attributed evidence. Preserve source pointers and signatures; create receiving-principal interpretations separately.                                   |
| **18. A multi-party object may have several issuers.**                                          | Joint issuer fields obscure which principal made which commitment and who can correct it.                                                             | Require one issuer per statement. Represent joint acts as linked statements, countersignatures, endorsements, or an interaction package containing independent commitments. |
| **19. A professional and an employing organization can be represented by one statement.**       | Their legal, professional, and organizational responsibilities may differ even when the same user interface captures the act.                         | Permit a clinician statement, an organizational processing or endorsement statement, or both, each separately attributable.                                                 |
| **20. An operator-hosted audit log proves what another principal did.**                         | It proves what the operator observed or recorded, not necessarily the principal’s intent, authority, or source execution.                             | Preserve operator audit as one perspective and require actor attribution, principal statement, and source receipt appropriate to the act.                                   |
| **21. A machine agent’s action can be treated as the principal’s own judgment.**                | Delegation may authorize execution without authorizing professional judgment or contractual commitment.                                               | Distinguish proposal, decision support, ministerial execution, and delegated commitment. Require an explicit grant for each class.                                          |
| **22. A majority governance process can resolve all architecture disputes.**                    | A majority cannot vote away an independently liable principal’s refusal, patient right, or professional duty.                                         | Use publication governance for common artifacts and independent adoption for principals. Multi-party obligations require the specific affected principals’ commitments.     |

The practical consequence is that the shared substrate must be constitutionally **weaker** than each principal in matters belonging to that principal. Its strength comes from preserving attribution, evidence, interoperability, repair, and portability—not from having the final word.

[1]: https://www.hl7.org/fhir/R5/consent.html "Consent - FHIR v5.0.0"
[2]: https://fhir.hl7.org/fhir/provenance.html "Provenance - FHIR v5.0.0"
[3]: https://csrc.nist.gov/pubs/sp/800/207/final?utm_source=chatgpt.com "SP 800-207, Zero Trust Architecture | CSRC"


