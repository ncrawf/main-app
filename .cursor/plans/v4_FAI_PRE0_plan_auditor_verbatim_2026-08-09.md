# v4 — FAI — PRE-0 — AGENT C · INDEPENDENT PLAN AUDIT

Document type: `evidence_or_ingestion` — **immutable once pasted**
Authority: **NONE.** Preservation confers no authority (`D0THES-GRD-036`). **No model authors the architecture.** Agreement between agents is not corroboration.
Status: **`verbatim_frozen`** · `never_default_loaded` — populated and frozen at commit `fac5881`. Provenance normalized at `539a966`+; **unresolved fields below are marked `unknown`, never guessed.**
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: **independent grounded audit of the FAI plan only.** This agent produces no architecture.
Manifest action: `add_tier4` **PROPOSED** — not landed.
Review gate: `user_knox_required`

**Where this came from:** the operator ran the prompt in §2 below in a fresh external chat and pasted the raw answer into §3. **Protocol of record:** `v4_FAI_PRE0_preflight_brief_and_protocol_2026-08-09.md`. **Consumed by:** `v4_FAI_PRE0_reconciliation_ledger_2026-08-09.md` — every materially distinct finding gets a row and a disposition there, and **G1/G3 cannot close while a row is undisposed.**

**C's job is "is THIS plan sane and executable," not "is it as good as someone else's design."** Contaminating C with A or B turns an audit into a comparison. **Agent C's blocking findings must close BEFORE G0.**

---



## §1 — ## Provenance — FILL THIS IN WHEN YOU PASTE


| Field                       | Value                                                       |
| --------------------------- | ----------------------------------------------------------- |
| Model + version             | chat gpt pro current model                                  |
| Provider / family           | OpenAI |
| Date + time run             | 8/9/2026 11pm                                               |
| Who ran it                  | Nick (operator)                                             |
| **Prompt used**             | **the block in §2 of THIS file, verbatim**                  |
| Prompt source of record     | `v4_FAI_PRE0_preflight_brief_and_protocol_2026-08-09.md` §6 |
| Prompt modified in any way? | **`unknown`** — operator did not record. Response body is internally consistent with the §2 prompt (it answers all seven required sections in order), so no modification is evidenced; **absence of evidence is not recorded as "no"** |




### Blindness declaration — every line matters; a "yes" does not void the run, it scopes it


| Was the agent...                                                             |         |
| ---------------------------------------------------------------------------- | ------- |
| a **fresh context** with no prior OMNI conversation?                         | yes     |
| **blind to the repository** — no repo access, no file reads, no code search? | no      |
| **blind to the internet** — no web search, no browsing, no retrieval?        | no      |
| **blind to the OMNI name** — did the prompt or any tool reveal "OMNI"?       | no      |
| given the exact **charter R6 + plan R5 + protocol + handoff**?               | yes     |
| **blind to Agent A and Agent B submissions**?                                | yes     |
| repository access available?                                                 | yes     |
| repository ref inspected                                                     | **`185d4732d5e803d651c0527f5be29ab52efc947c`** — **not operator-recorded; transcribed from the agent's own frozen response** ("Pinned commit inspected"), §3 line 1 |
| load-bearing source claims verified?                                         | **YES — independently re-verified by Opus at `539a966`.** Every factual challenge C raised was checked against the repository and **all were correct**, including three that contradicted claims in our own packet. See ledger §0 |
| Did it ask clarifying questions before answering?                            | no      |
| Any tool calls made?                                                         | **`unknown` as operator-recorded** — but the response body evidences repository reads (it cites file contents, line-level facts and a pinned commit), so tool use **did** occur; the exact call set is unrecorded |


**Why the repo and internet lines exist:** an agent with repository access is **not blind** — it can read our decomposition. An agent that searched the web for "OMNI architecture" is **not blind** either. **Neither invalidates the submission — but the reconciliation must know**, because a "convergence" produced by an agent that read our answer is not convergence.

---



## §2 — THE EXACT PROMPT THAT WAS SENT

*(copy from here; do not retype. If you change a word, say so in §1.)*

```
You are the independent grounded auditor of the supplied FAI packet.

INPUTS
- exact Gate-0 charter R6
- exact execution plan R5
- this PRE-0 protocol
- the foundational-arc handoff and failure record
- the live repository at the supplied head, if repository access is available

You must NOT inspect either Agent A or Agent B submission.

Do not redesign OMNI from scratch. Audit whether THIS SPECIFIC PLAN is
coherent, appropriately scoped, correctly sequenced, source-grounded,
authorized, and executable.

Verify load-bearing repository claims where access permits. Do not perform a
broad corpus sweep. Cite every material finding to an exact file and section.
If repository verification is unavailable, say so explicitly.

ANSWER

1. What materially necessary capability or relationship is ABSENT from the
   plan, or cannot be expressed, evaluated, adopted, rejected or
   dispositioned by it?

2. What in this plan is unnecessary, ceremonial, premature, or better
   deferred? Be specific and name what should be removed.

3. What sequencing, source, authority, ownership, writable-object, dependency
   or acceptance defect could block execution?

4. What decision is being treated as reversible when it is actually expensive
   to reverse?

5. What can be removed without damaging the four root requirements -
   Explicit, Resolvable, Evolvable, Observable?

6. Could a fresh agent execute this plan without redesigning it? If not, what
   exact instruction, source, artifact, authority, output or stop condition
   is missing?

7. Return BOTH:
   - fatal or material omissions;
   - removable or deferrable machinery.

8. Verdict - choose exactly one:
   PLAN_SURVIVES
   PLAN_SURVIVES_WITH_EXACT_AMENDMENTS
   PLAN_MATERIALLY_INCOMPLETE_<reason>
   PLAN_MATERIALLY_OVERBUILT_<reason>

Distinguish plan defects from source-evidence gaps and from later
implementation debt. Do not promote a model preference into an architecture
requirement.
```

---



## §3 — VERBATIM RESPONSE

*(paste the raw answer between the markers. Do not edit, summarize, reformat or correct it. Corrections belong in the reconciliation ledger, which cites this file.)*

Worked for 6m 8s
Agent C — Independent Grounded Plan Audit
Review object
Repository: ncrawf/main-app
Branch: cursor/fai-foundational-architecture-30f4
Pinned commit inspected: 185d4732d5e803d651c0527f5be29ab52efc947c
Audit object: Gate-0 charter R6, execution plan R5, PRE-0 protocol, and foundational-arc handoff.
Blind-design isolation: Neither Agent A nor Agent B submission was opened, searched, or requested.
Source posture
Read fully: KNOX_II_FULL_OPERATING_INSTRUCTIONS_v4_UPDATED; the exact four required FAI files at the pinned commit.
Consulted only for bounded claim verification: the architecture artifact index and document taxonomy; Build OS Step 5; CODEOWNERS; checkpoint-pointer workflow and checker; the two checkpoint pointers and current checkpoint; Reactor’s final terminus; and the contracts-directory inventory.
Not inspected: either blind submission; either G0 thread-verbatim file; the wider transcript corpus; the contents of the domain contracts; most external comparator sources.
Live repository verification: completed against the supplied pinned commit, not against main or a later branch head.

The requested primary state claim is correct: Charter §1 identifies execution plan R5, places PRE-0 before G0, and makes PRE-0 an operator-authorized preflight rather than an arc gate. Plan §5 and Protocol §§3 and 6 agree. The problem is not the controlling state surface; it is that stale duplicate text remains elsewhere in the packet.

1. Materially necessary capability or relationship absent from the plan

1.1 Cross-cutting architectural decision authority is not instantiated

The packet defines almost every participant except the party that can actually accept or reject a cross-cutting architectural decision.

The charter says no domain owns the arc’s output.
Plan §2 says domain owners review owned resources and a “steward for cross-cutting” reviews cross-cutting work.
The integrator merges an authorized coherent change set, correctly implying that the integrator is not sovereign.
G0 says it will accept “roles” and “authority,” but does not require a named cross-cutting steward, decision-right matrix, disagreement rule, or final approval authority for G1 and G3.
The existing Artifact Index uses the phrase architecture_steward + Nick, but the current packet neither names a holder nor establishes that relationship for this arc.

This is material because G1 can produce an operating model and G3 can reconcile the foundation, but neither can become accepted architecture unless someone has explicit authority to adjudicate cross-cutting content without appropriating domain-owned truth.

Required correction: G0 must name or define the authority set and distinguish:

proposal authority;
domain-owner approval authority;
cross-cutting architecture approval authority;
repository integration authority;
GitHub-administration authority;
Nick/Knox review rights;
and the stop/escalation rule when those parties disagree.

The integrator must remain non-sovereign.

1.2 The plan references a missing normative schema section

Plan §3 commits to “three DISTINCT objects, three schemas — §3.1.” There is no §3.1. The file moves directly from §3 to §3.9. G2 then requires the fresh agent to implement the canonical metadata contract, work-package machinery, generated graph path, and effective-architecture snapshot structure.

This is not a minor broken cross-reference. The missing section is the boundary between the architecture’s declared model and the machine-readable objects G2 must build. A fresh agent would have to invent:

what the three objects are;
which is canonical, transactional, or generated;
their identifiers and version semantics;
their reference rules;
who may write each;
and how they relate to existing catalog and read-graph state.

The apparent intended split is:

an architecture resource descriptor;
an architecture change/work-package manifest;
an immutable effective-architecture snapshot.

The amendment must either define these three explicitly or remove the assertion and replace it with the correct objects. It cannot leave the executor to infer them.

1.3 The plan has no explicit forward-only or irreversible change class

“Evolvable” currently says an architectural change can be “reversed,” and G4 test 10 requires rollback. But architecture changes are not uniformly reversible. Published canonical identifiers, profile inheritance rules, externally consumed schemas, deployed compatibility promises, and historical proof semantics can become forward-only even when their effects can be compensated or superseded.

The missing capability is a change classification such as:

reversible;
reversible_with_migration;
forward_only;
compensatable_not_reversible;
externally_committed.

Without that distinction, the plan can falsely pass Evolvable by demonstrating a repository rollback while breaking historical resolution or external consumers.

1.4 PRE-0 does not unambiguously preserve Agent C’s findings

Protocol §4 guarantees that every finding from both Stage-A submissions enters the reconciliation ledger. It does not expressly include Agent C’s plan-audit findings. Protocol §8 preserves C’s verbatim output, but preservation is not disposition. The execution plan speaks more broadly about “every finding,” so the two carriers are inconsistent.

That omission recreates the exact anti-appetizer failure the protocol is intended to prevent: A/B concepts are forced into the ledger, while a blocking plan defect found by C could remain only in the verbatim file.

Required correction: every material finding from A, B, and C must receive a ledger row. C findings classified as plan defects must be dispositioned before G0, not merely carried unresolved into G1 or G3.

1. Unnecessary, ceremonial, premature, or deferrable machinery

2.1 Remove mandatory G1 examination of tools already explicitly deferred

Plan §3 defers:

OpenRewrite/Moderne;
Argo CD/GitOps;
LangGraph/LangSmith.

Yet G1 Lane 1 still makes all of them part of the mandatory external-mechanism pass. That creates research work for machinery the plan has already decided not to build in this arc.

Move those three families to conditional consult triggers:

OpenRewrite only when a repeatable transformation with a decisive verifier exists;
Argo CD only after a deployment substrate makes desired-versus-live reconciliation concrete;
LangGraph/LangSmith only when Agent Runtime owns a durable-execution implementation lane.

This removes ceremony without weakening any root requirement.

2.2 Defer tool-specific adapters from G2

G2 should establish the substrate-independent contracts necessary to satisfy the four roots. It does not need all three of these product mappings immediately:

OPA/Conftest policy encoding;
Backstage-compatible entity generation;
OpenTelemetry semantic-convention mapping.

The plan correctly says these tools carry mechanism rather than authority and that Backstage entities are generated consumers. Test 11 then requires the architecture to survive their removal. That means the tool-neutral policy model, graph model, and evidence model are load-bearing; the adapters are not.

Keep the vendor-neutral contracts in G2. Move each adapter to a triggered implementation task after the canonical model survives G3 and G4.

2.3 Defer the merge queue

The Build OS target itself permits a “merge queue or serialized fast-forward.” The FAI plan hardens that option into mandatory merge-queue adoption at G2 without demonstrating enough concurrent change volume to require it. The same Build OS section explicitly labels its tooling posture a maturity target rather than a final tool architecture.

For G2/G4, protected serialized integration plus required checks is sufficient. Add a merge queue when measured concurrency or queueing pressure makes it necessary.

2.4 Remove duplicated current-state and gate-sequence prose

The packet has already reproduced its own failure mode:

Charter §9 says the gate sequence lives only in the execution plan.
Handoff §5 restates the complete sequence while saying the execution plan is the only place it lives.
Charter §14 still identifies the work package as “execution plan R4” and ends with an R4 stop string, despite Charter §1 correctly naming R5.
Plan §§0 and 5 refer to “ten” acceptance tests while enumerating eleven.

Delete the duplicated sequence from the handoff and leave a pointer. Correct or remove the duplicated version/count fields rather than maintaining another copy.

1. Sequencing, source, authority, ownership, writable-object, dependency, and acceptance defects

3.1 G3 and G4 attempt to perform the same transaction

G3 says the following are landed there:

the reconciled taxonomies;
Reactor and GCE installed into their standard roles;
the maps migrated or superseded.

G4 then says the real end-to-end operating proof will be the transaction that installs Reactor and GCE into those roles and migrates the maps. The proof transaction therefore no longer exists: G3 has already completed it.

This is a direct execution blocker.

Required sequencing:

G3: reconcile deeply, approve the target state, freeze the dispositions, and prepare an unmerged migration change set.
G4: run that change set through proposal, impact, ownership review, conformance, propagation, integration, and post-change resolution; only then land it.

Alternatively G4 needs a different not-yet-executed real migration. The first correction is cleaner.

3.2 G2 is an implementation lane that the packet does not classify as one

G2 requires executable work:

JSON Schema validation;
CI policy checks;
a resource-claim checker;
generators;
workflows;
CODEOWNERS changes;
and possibly repository-hosted settings.

But the charter’s non-actions include no implementation, and Plan §6 says the arc does not settle an implementation lane. Existing repository boot rules say implementation lanes require Build Entry admission. The packet never says whether G0 acceptance substitutes for that admission or whether G2 must separately pass it.

Required correction: classify G2 explicitly as an architecture_operations_tooling implementation lane and require a Build Entry verdict before executable schema, generator, workflow, or policy code lands. If the intention is not to open an implementation lane, limit G2 to canonical documents and non-executable schema prototypes and move tooling to a later admitted lane.

3.3 Several G2 outputs are not repository-writable objects

The plan groups together:

editing CODEOWNERS;
configuring rulesets;
marking checks required;
enabling a merge queue.

Only the first is an ordinary repository-file edit. The checkpoint workflow itself states that it becomes merge-blocking only when marked as a required status check in branch protection and that the workflow file cannot grant that setting. The existing CODEOWNERS is indeed legacy-oriented and has no /architecture path.

The packet has no:

named repository administrator;
explicit authorization for hosted-setting changes;
settings-change request;
settings receipt;
or stop condition when those controls cannot be enabled.

Required correction: split G2 into:

repository-authored outputs;
repository-administration actions.

The latter need a named owner and a receipt recording requested settings, applied settings, evidence, and unapplied controls. No gate may claim a protection is active merely because the workflow or CODEOWNERS file exists.

3.4 Tool adoption is decided before the evidence gate intended to decide it

Plan §3 says the tool decisions are made. G1 then runs the external and internal mechanism comparison and produces the adopt/reject/transfer-limit matrix, but is prohibited from making vendor decisions beyond those already fixed in §3.

That reverses evidence and decision:

select tools;
run the comparison;
forbid the comparison from changing the selection.

The source cited as inheritance does not repair this. Build OS Step 5 explicitly says its mechanism list is a maturity target, “NOT final design,” and makes no vendor or framework selection.

Required correction: §3 should contain bounded candidate defaults, not ratified adoptions. G1 must issue a decision on each candidate—adopt, reject, narrow, or defer—so the work still reaches a decision without pretending that the decision preceded the evidence.

3.5 The plan lacks a gate-output transaction contract

The gates name activities and verdicts, but do not consistently name:

the output carrier;
exact writable surfaces;
author;
approving authority;
evidence bundle;
accepted versus proposed state;
and stop condition.

This is especially material at G1, where a fresh agent must decide how to package the artifact metamodel, operations loop, graph semantics, change lifecycle, resolution model, and decision matrix before /architecture exists. G0 promises to settle writable surfaces but does not require a concrete gate-by-gate transaction map.

Add one table to R5 with a row for PRE-0 and G0–G4 containing those fields. That is enough; a new process framework is unnecessary.

3.6 Current-state blockers are real and correctly represented, but must be discharged explicitly

The live checkpoint still points to the Insurance checkpoint and records PRESPINE-PHASEA-INTEGRATOR as vacant. Both boot surfaces agree. The FAI handoff is not itself the checkpoint. No shared control-plane landing is therefore authorized at the pinned commit.

The packet understands this. The missing execution detail is a required G0 receipt proving:

Nick’s integrator appointment;
freshness and collision check;
checkpoint repoint;
exact catalog/read-graph changes;
and the first authorized G1 write.

Without that receipt, “G0 accepted” is not enough to establish repository authority.

1. Decision treated as reversible that is expensive to reverse

The expensive decision is not the /architecture directory name by itself. It is the combined canonical identity, version, relationship, inheritance, applicability, and profile-precedence model installed at G2.

Once the following depend on that model—

migrated maps and contracts;
profile specializations;
generated catalogs;
Build Entry declarations;
agent run pins;
deployment snapshots;
conformance rules;
and fleet upgrade records—

changing it becomes a compatibility migration, not an ordinary rollback. Plan §0.5 and test 10 currently imply that reversal is a universal property.

The constrain-never-loosen rule is one particularly expensive part of that decision. It may be correct, but the relationship among inheritance, authorized exceptions, variation points, legal overrides, and deployment-specific constraints must be settled before it becomes a negative conformance test.

Exact correction:

classify each change’s reversal posture before approval;
make canonical ID/version/profile-precedence changes pass an irreversible-change review;
preserve prior effective snapshots;
require compatibility and migration rules;
and change “reversed” to “reversed where semantically safe, otherwise superseded, compensated, or advanced through an explicit forward migration.”
5. What can be removed without damaging Explicit, Resolvable, Evolvable, Observable

The following can be removed or deferred safely:

Mandatory G1 research on OpenRewrite, Argo CD, and LangGraph/LangSmith.
G2 implementation of OPA, Backstage, and OpenTelemetry adapters.
Mandatory merge-queue enablement at G2.
The duplicated gate sequence in Handoff §5.
Duplicate version/count state in Charter §14 and Plan §§0/5.
Portal, GitOps, durable-agent-runtime, and fleet-runtime implementation—which the plan mostly already defers.

These removals preserve:

Explicit: canonical vendor-neutral requirements and schemas remain.
Resolvable: descriptors, graph relations, profiles, exceptions, and snapshots remain.
Evolvable: change proposals, versioning, impact, migration, and history remain.
Observable: repository/config conformance and evidence contracts remain; product-specific transports can be added later.

The following should not be removed: the catalog/graph, impact analysis, effective snapshot semantics, owner-gated change lifecycle, conformance, exception lifecycle, temporal history, and a real end-to-end migration proof. Those are the machinery that gives the four roots operational meaning.

1. Could a fresh agent execute the plan without redesigning it?

No.

A fresh agent would have to design material portions that R5 claims are already specified:

the missing three schemas in §3.1;
the holder and rights of cross-cutting architecture authority;
the G1 output carrier and gate transaction contract;
the distinction between repository writes and GitHub-admin settings;
whether G2 is an admitted implementation lane;
whether §3 tool choices are binding or still reviewable;
whether G3 or G4 performs the foundational migration;
how C’s audit findings enter and block the PRE-0 ledger;
how forward-only changes satisfy Evolvable;
how historical/as-of resolution and conflicting applicability are tested.

Two acceptance-test amendments are also necessary:

Test 2 — Applicability: require deterministic resolution for an explicit as_of point and require ambiguous or contradictory profile/variation/exception combinations to fail closed with a named owner and reason.
Test 10 — Upgrade / rollback: test all change classes, including a forward-only change that must be superseded or migrated rather than rolled back.

After the bounded amendments below, a fresh agent could execute without redesigning the program.

1. Required dual return

Fatal or material omissions

I found no fatal conceptual omission requiring the foundational arc to be discarded or restarted.

I found these material omissions or blockers:

no instantiated cross-cutting decision authority;
missing §3.1 and its three schema contracts;
G3/G4 duplicate the same landing transaction;
G2’s implementation and hosted-setting authority are unresolved;
Agent C findings are not unambiguously ledger-bound;
no forward-only/irreversible change class;
no complete gate-output/write-set/acceptance contract;
as-of and ambiguity-fail-closed behavior are not acceptance-tested.
Removable or deferrable machinery
mandatory study of already-deferred tool families;
OPA/Backstage/OTel adapters at G2;
mandatory merge queue;
duplicated sequence/version/count prose;
any runtime/fleet tooling beyond descriptor, repository, and CI-level proof in this arc.
Bounded amendment set

The plan survives if one amendment cycle makes these exact changes:

Amendment 1 — Repair state integrity
Charter §14: replace both R4 references with R5 or delete the duplicate plan-version field.
Plan: replace every “ten acceptance tests” / “10 acceptance tests” statement with eleven.
Handoff §5: remove the duplicated gate sequence and retain only the pointer to R5.
Amendment 2 — Correct the taxonomy source diagnosis

Charter §4 and Handoff §5 should say:

The estate has one binding governance-category taxonomy and one ratified architecture-role index. They are linked one-way but are not modeled as independent passport axes; the role index is incomplete for the proposed architecture roles.

The current claim that they “do not reference each other” or are “mutually invisible” is not supported: the Artifact Index explicitly points to the document taxonomy and says that taxonomy remains binding. Its displayed role table also has 13 rows, not 12.

The exact “16 contract files” count should be reverified before it is repeated. At the pinned commit, the canonical contracts directory exposes 15 top-level contract Markdown files plus five seam contracts; the bounded directory check did not reproduce the stated count.

Amendment 3 — Add §3.1

Define the three machine-readable objects, including:

identity and purpose;
canonical versus generated status;
required fields;
version and temporal semantics;
allowed relationships;
writer and approval authority;
validation behavior;
and generation/consumption rules.
Amendment 4 — Add the G0 authority and gate-output contract

Require G0 to record:

named cross-cutting steward or authority set;
domain-owner rights;
integrator rights and prohibitions;
GitHub-admin owner;
gate-by-gate carriers and write sets;
acceptance authority;
disagreement stop;
first authorized G1 action;
integrator appointment;
freshness/collision receipt;
checkpoint repoint.
Amendment 5 — Re-sequence G3 and G4
G3 reconciles, adjudicates, freezes target state, and stages the unmerged migration.
G4 executes and lands that migration through the architecture-operations loop.
Amendment 6 — Classify and admit G2 correctly
Mark executable G2 work as an implementation lane requiring Build Entry admission.
Separate repository-authored artifacts from hosted GitHub settings.
Require an administration receipt before claiming required checks, rulesets, or merge controls are active.
Amendment 7 — Let G1 ratify the tool choices
Reclassify §3 selections as candidate defaults.
Require G1 to adopt, narrow, reject, or defer each.
Keep JSON Schema/CI and a thin claims mechanism as likely early implementations.
Defer OPA, Backstage, OTel, merge queue, OpenRewrite, Argo CD, and LangGraph until their named triggers.
Amendment 8 — Bind all PRE-0 findings

Protocol §4 must require a reconciliation-ledger row for every material A, B, and C finding. C plan defects must be closed or explicitly rejected before G0.

Amendment 9 — Repair Evolvable and its tests
Add change reversibility classes.
Add historical/as-of and fail-closed ambiguity behavior to test 2.
Expand test 10 beyond rollback to supersession, compensation, coexistence, and forward migration.
Defect classification

Plan defects: missing §3.1; undefined cross-cutting authority; G3/G4 collision; G2 implementation/admin ambiguity; C-ledger ambiguity; premature tool ratification; universal-reversal assumption; missing gate-output contract.

Source-evidence gaps: the “mutually invisible taxonomies” characterization; the role and contract counts; any suggestion that Build OS had already selected the named vendors. Build OS supports the mechanism targets but expressly does not contain a final vendor architecture.

Later implementation debt, not plan defects: the impact engine, effective compiler, propagation engine, fleet reconciliation, runtime observability, and real-world fleet proof do not exist yet. R5 openly records that state and separates descriptor/CI conformance from later runtime and fleet proof.

Verdict

PLAN_SURVIVES_WITH_EXACT_AMENDMENTS