# Agent Work Protocol

Document type: `doctrine`
Authority: governance_binding runtime protocol for agent work packages (non-schema authority)
Status: active
Domain(s): architecture_governance, build_os, agent_execution
Lifecycle role: mandatory agent operating loop inside OMNI Build OS
Source-of-truth relationship: operational child protocol of `00_omni_coordination_charter.md`; does not supersede control-plane schema homes or Build OS gate authorities; must be cataloged/routed as runtime protocol child of Charter
Supersedes: scattered runtime-loop guidance across patch-spec drafts
Superseded by: none
Manifest action: add_tier0
Review gate: user_knox_required

---

## Applicability

This protocol is mandatory for architecture/doctrine/build/work-package execution.

An agent must run this loop:
`boot -> identify current gate/work package -> classify -> load context -> intake/route -> build-entry checks -> execute within scope -> lifecycle maintenance -> proof/stop`.

## Authority Boundary

This protocol defines required agent runtime behavior only.

It does not own:
- canonical ledger/catalog/read-graph schema contracts,
- control-plane authority routing semantics,
- Build OS gate authority.

It must always route schema-governed operations to canonical control-plane artifacts.

---

## 1) Boot

Required boot artifacts:
- `AGENTS.md`
- `00_omni_coordination_charter.md`
- `00_architecture_memory_control_plane.md`
- `04_manifest_read_graph.md`
- `09_omni_build_os_layer_model.md` (when implementation-lane work is in scope)
- `10_omni_build_os_rollout_sequence.md` (when implementation-lane work is in scope)
- `11_build_entry_gate_v0.md` (when implementation-lane work is in scope)

The implementation-lane triad (09/10/11) is also routed in `04_manifest_read_graph.md` `## Implementation-Lane Anchors`. Boot-path synchronization across these artifacts is required by `00_architecture_memory_control_plane.md` `## Boot-Path Synchronization Requirement`.

**Boot Freshness Check (do this before any architecture / doctrine / thesis / Tier-2+ work).** Compare the **Current Checkpoint Handoff** named in (a) `AGENTS.md` `## OMNI Operating References`, (b) `04_manifest_read_graph.md` Tier-0 Universal Path #15, and (c) the current-state banner of any named controlling plan. They MUST agree on: the current checkpoint, the active controlling plan, the current gate/state, and the next allowed action. **If they disagree, STOP and report the mismatch before substantive work** — a stale or duplicate pointer is the known 2026-06-13 failure (an agent booted from a stale checkpoint because two pointers had drifted). The closeout side of this rule is §8 **Checkpoint Closeout Rule**; timeless guardrail `06` `D0CKPT-GRD-001`.

If boot artifacts conflict, follow precedence defined in `00_omni_coordination_charter.md`.

---

## 2) Identify Current Gate / Work Package

Before any substantive work:
- declare current lane/domain/surface,
- declare gate status (pre-entry, entry, execution, closure),
- declare whether runtime/code edits are in scope.

No gate declaration means no execution.

---

## 2.1) Durable Work — lane continuity contract + coordination overlay

Before partitioning work, answer **two independent questions**. Neither implies the other.

1. **Continuity** — must this work survive agent/session replacement, pause, transfer, or delayed re-entry **without a chat transcript**?
2. **Coordination** — do multiple writers, partitions, dependencies, shared surfaces, or outputs require deliberate ordering or reconciliation?

| continuity needed? | coordination needed? | posture | what applies |
|---|---|---|---|
| no | no | **ordinary bounded work** | §§1–9 only. **Nothing in this section.** |
| yes | no | **durable lane** | Lane Continuity Contract |
| no | yes | **coordinated bounded work** | Collision controls **only** — contested surface · authorized writer · serialization order. **No parent, membership, sibling states or integrator.** |
| yes | yes | **coordinated work package** | both |

**Obligations are proportional to the need that actually triggered them.** Nothing here is owed because a prior work package needed it.

**Trigger = material need, NOT artifacts.** A branch, a worktree, an output file, or a named executor is *evidence* that a durable lane may exist; **none of them creates one.** Work that completes inside its own bounded execution context stays ordinary even when it uses a branch. **Durability is earned by a real continuity need** — pause, transfer, replacement, delayed activation, or an output that **must survive independently for later or replacement-context consumption**. (An output consumed immediately, in the same working context, is coordination — not durability.) Coordination is earned by a real collision, dependency, or reconciliation requirement.

**Independence is NOT required for a lane to exist.** Independence only informs whether *simultaneous execution* is wise. Coupled work often deserves separate ownership and outputs while being **sequenced** rather than run at once.

**Concurrency never determines package membership.** Lanes belong to one package when they serve the same bounded parent outcome and their closure must be coordinated or reconciled. Unrelated efforts running at the same time stay **separate packages** with separate **state and closure paths** — and with bases and integrators only where each package independently requires them. The only cross-package obligation is a bounded **collision check** on shared branches, files, canonical surfaces and incompatible decisions.

**Keep these dimensions separate (orthogonal — do not collapse them into a taxonomy):**

| Dimension | Question |
|---|---|
| package membership | are these efforts part of the same intended outcome and closure? |
| lane inventory | which provisional partitions currently exist? |
| activation | which are dormant / active / blocked / review-ready / complete? |
| concurrency | which *active* lanes happen to run at the same time? |
| coupling | `independent` · `loosely_coupled` · `ordered_dependency` · `tightly_coupled` |
| dependency | must one lane consume another's accepted result first? |
| collision risk | can they touch the same branch, artifact, truth or control surface? |
| integration | where and how are results recombined — **if** recombination is required? |

Concepts, vocabulary and the anti-silo rule live in `09_omni_build_os_layer_model.md` Layer 2; this section owns **runtime mechanics only**. Future automation (manifest · validator · leases · locks · merge queue · status projection) is Build OS Layer 3 / `10` Step 5 / `D0THES-REV-158`; the product/care Agent Runtime is `FWREG-010`. **Build-agent branch authority never becomes product, operator, clinical or patient authority** — same harness law does not confer equivalent authority. Planner, implementer, reviewer, adversary, evaluator, proof agent and integrator are **bounded roles inside an authorized work package**, never self-originating authority (`D0THES-GRD-028`, `D0THES-GRD-029`). Agent authority stays principal-typed and commit-gated (`subject · principal · actor · agent · role · capability · committer`). **No new subsystem, agent-identity ontology, branch registry, classification enum or control plane is created here.**

### Lane Continuity Contract — when continuity is material

**Eight durable facts.** They may live in **any existing durable carrier** — the current checkpoint, an accepted work-package map, a handoff, or the lane output's own header. **No new envelope document is required and no new artifact is created to satisfy this.**

1. purpose / intended result;
2. lane scope, and **why durability is needed**;
3. current owner and state;
4. working object — branch + head, or the exact carrier;
5. required source floor **and** open inquiry aperture (a floor is a minimum, never a boundary);
6. writable scope and expected output object;
7. authority limits and prohibited actions;
8. stop / review / landing / re-entry condition.

**Execution law — durable lanes (L).**

- **L1 — one active writer.** One active owner/writer per **writable lane object** at a time — and one writer per branch where a branch exists. (A durable lane may be carried by a document or another writable object rather than a dedicated branch.) Agent-thread replacement does **not** create a new lane: a replacement assumes the same clean object, relay key and packet after an **explicit ownership transfer and freshness check**.
- **L2 — no stale resumption.** A stale, closed, invalidated or materially diverged historical branch is **never resumed in place** — start a fresh branch from the currently approved base and cite the old branch/commit as an immutable source packet.
- **L3 — durable identity is the carrier, never the machine.** Identity depends on what actually carries the lane:
  - *repository lane (has a branch):* relay key · branch · base · input packet · expected output · current head · ownership state;
  - *non-branch durable lane (a document or other writable object):* relay key · **exact carrier/ref** · input packet · expected output · version/state · ownership state.

  An absolute filesystem path is **environment-local and NON-canonical**; record it operationally when assigned, never as identity. **The environment-local worktree rule applies only where a worktree exists** — and where one does, **loss of it is not loss of a lane**: any machine, cloud VM or fresh clone recreates it from branch + base.
- **L4 — write only what you own.** Do not mutate surfaces outside the declared writable scope; where protected surfaces are declared, return **proposed** rows, lifecycle changes and routing instead.
- **L5 — provisional until its own gate.** A lane output is provisional until its **required completion side effects** land under §5 (New Artifact Completion Rule). **Where the lane is the whole work package, its own review/landing gate completes it — no separate integrator and no parent integration transaction are required.**
- **L6 — tracked state.** Track `not_started | active | blocked | review_ready | accepted | landed | closed` plus current head or accepted pin, in **one** durable carrier, at work-package boundaries — not every chat message and **not duplicated across surfaces**.
- **L7 — proportional receipts.** Publish the receipt level that collaboration-model §§2.6–2.7 actually triggers (Relay Endpoint Posture when relayed · Review Object Posture · Bounded Diff Receipt · Source Posture). Full snapshot ceremony is owed to remote/byte/acceptance/landing review, not to every local bounded stop.
- **L8 — no unilateral escalation.** No lane merges or fast-forwards `main`, repoints the checkpoint, or launches a successor phase without explicit authorization.

### Coordination Overlay — when coordination is material

**Two levels. Take only the one your facts require — the light level must never silently pull in the heavy one.**

**(a) Collision controls — ANY coordinated work, including transient bounded work with no durability.** Record only:
1. **contested surface or resource** — what is actually in contention;
2. **currently authorized writer** — who may write it right now;
3. **participants / proposals in flight**;
4. **serialization or landing order**;
5. **collision resolution** — how an incompatibility is settled.

That is the whole obligation for `coordinated_bounded`. **No parent key, no package membership, no sibling lifecycle states, no parent-close blockers, no common base, no integrator role.**

**(b) Package coordination — ADDITIONALLY, only for a durable or explicitly parented multi-part outcome (`coordinated_package`):**
1. **membership** — which partitions serve this parent outcome;
2. **dependency + activation order/states** — what must be accepted before what may start;
3. **base policy** — common base, or a recorded justified exception;
4. **integrator role where one exists**, plus its transfer discipline;
5. **parent close criteria**;
6. **integration transaction** — where reconciliation actually occurs.

**Execution law — coordination (C).** Each law is tagged with the level that activates it.

- **C1 — [any coordinated work] protected surfaces are read-only to participants.** Declared shared control-plane surfaces are read-only; participants return proposed rows and routing.
- **C2 — [any coordinated work] one authorized writer per shared surface; landings are serialized.** Where an integrator role exists it is that writer and it reconciles cross-partition outputs. Where no such role exists — including across unrelated packages — the writer is the canonical surface owner, and landings are serialized rather than concurrent.
- **C3 — [package only] no sibling mutation, no unilateral parent close.** No partition mutates a sibling's branch or output, or declares the parent package closed.
- **C4 — [package only] integration gates.** Parent integration begins only after the required gates: source reconciliation · collision scan · shared-surface routing · lifecycle normalization · the parent closeout transaction (§8 Checkpoint Closeout Rule). It proceeds on the **activated and gate-required** subset; it does not wait for dormant partitions.
- **C5 — [package only] completion in a package.** Where reconciliation is genuinely required, a partition's artifact may be pushed `review_ready_pending_integrator` with its passport and proposed routing bundle, and completes under §5 at the **parent integration transaction**. This is not an exception to §5. **It does not apply to a standalone lane (see L5) or to `coordinated_bounded` work.**
- **C6 — [package only] sequencing over simultaneity.** Tightly coupled partitions are legitimate but should normally be **sequenced**; the downstream one consumes the **accepted** result, never an in-progress branch. A coordinated package may have **zero** concurrency.

**Integrator-transfer law (applies only where an integrator role exists).** The integrator is a **transferable ROLE, not a permanent chat thread** — the same "session is replaceable compute" law that governs lane writers governs it. Where the role exists, its carrier MUST record: role key · current holder · explicit transfer · freshness/collision check on assumption · shared-surface ownership receipt · parent blockers while vacant. A retired, exhausted or replaced holder **MUST NOT strand its lanes**. Where no integrator role exists, this law is inapplicable — do not mint one to satisfy it.

### Conditional mechanics — use when the stated condition is true, not by default

- **Base identification (the ordinary case — no extra commit).** A lane's inherited base is normally recoverable from **branch ancestry**, an **immutable source ref**, or an **existing durable carrier**. That is sufficient. **Do not generate a state-only commit, a pin ceremony, or a receipt for a base that is already recoverable.**
- **Explicit base pin (stronger reproducibility).** Require an explicitly recorded base when: several partitions must be compared or reconciled from a common estate · activation may occur materially later · replacement must reproduce an exact starting corpus · a branch is intentionally frozen while `main` advances · or auditability depends on proving the exact inherited bytes.
- **Common base.** Default for coordinated partitions whose outputs will be compared or reintegrated; an explicit exception is permitted where a partition legitimately consumes a different accepted input or begins later from an approved successor state.
- **Post-acceptance base binding (no self-referential SHA stamping).** A **separate state-only receipt commit** is required only where: accepted **content cannot self-identify its own commit** · prepared branches must all be bound to that accepted generation · or package activation / integrator / lane state must be recorded **after** acceptance. In that case two commits govern and MUST NOT be conflated: **`lane_content_base_sha`** (the accepted **content** commit partitions start from) and **`current_main_state_sha`** (the later **state-only** receipt that pins it and records branch/lane state). The base is **bound after acceptance** — never asserted inside the content commit it describes. A pinned base therefore normally sits behind current `main`; **that distance is expected, not drift.** Branch refs plus the receipt control; a prose phrase is never a binding pin, and **no agent may be required to recover a base SHA from a chat transcript.** This is the `PRESPINE-PHASEA` situation; it is **not** the general case.
- **Single-source law (mutable live state is pinned in exactly ONE place).** A **mutable, live operational** value — current base pin, current branch head, current lane/integrator state — is recorded in **one** owning row and referenced by pointer everywhere else. **Never copy live state into prose, into a boot surface, or into a second carrier**: duplicated state drifts, and drifted state is indistinguishable from real divergence at boot. Discovery surfaces (`AGENTS.md`, the read graph) carry **pointers to the owning row, never the value.** **Explicit exception — frozen evidence.** Immutable snapshot, review, source and historical receipts **may and often must** repeat exact refs: Review Object Postures and Bounded Diff Receipts (collaboration-model §§2.6–2.7), acceptance records, source pins, evidence cutoffs and historical citations. The test is not "is this a SHA?" but **"is this claiming to be current state, or is it labelled frozen evidence?"** Frozen evidence must be labelled as such so it is never mistaken for a status report.
- **Two-Reference Boot law.** Use **only** where both are intentionally true: current-state control surfaces must be read from the current control ref, **and** substantive inputs remain pinned to an older immutable content ref. Then: read `AGENTS.md` · read graph · current checkpoint · lane/integrator state from the **current control-plane ref**; resolve substantive inputs at the **content base** unless separately pinned; **never read a shared control surface from an older base as current state** (a content base is a frozen input, never a status report); if the current receipt does not name the branch/base being opened, **STOP for reconciliation**. Where a lane simply branches from current `main`, the two references coincide and this law is inapplicable.

### What this section does not require

Do not manufacture, for work that has not earned them: a launch envelope document · a parent work package · an integrator role · a parent integration transaction · provisional-until-integrated status · a common base · a state-only base-binding commit · a separate state receipt · sibling/collision fields · or a classification label. **`parallel_work_package` is retired as an active classification** (`D0CKPT-DEC-007`); it survives only as historical lineage describing the original Phase-A origin. Describe the actual posture instead: ordinary work · durable lane · coordinated package · concurrency, coupling, dependency, collision and integration recorded independently as the facts they are.

**Clause-reference map (prior numbering → current home; existing citations still resolve).** old 1 → *Immutable base pin* / *Common base* · old 2 → **L1** · old 3 → **L2** · old 4 → **C1** (protected surfaces) / **L4** (general scope) · old 5 → **C2** · old 6 → **L5** (standalone) / **C5** (package) · old 7 → **L7** · old 8 → **L8** (escalation) / **C3** (sibling + parent close) · old 9 → **L6** · old 10 → **C4** · old 11 → the Layer-3 pointer above.

Decision ledger: `D0CKPT-DEC-005` (materially narrowed 2026-08-05 — see `D0CKPT-DEC-007`). Supersession: `D0CKPT-SUP-001`. Guardrails: `06` `D0CKPT-GRD-002`, `D0CKPT-GRD-003`.

---

## 2.2) Delegation Admission — posture, visibility, and capture

**PROPOSED 2026-08-08 · `review_ready_pending_parent_integration` · not yet accepted.** **This section is self-sufficient and carries its own complete contract.** Cross-context conceptual cross-reference — **not an authority dependency** — is `v4_C4_agent_runtime_and_harness_capture.md` §6, which is an **`active_map` with `agent_runtime_formulation_OPEN`**, not ratified doctrine; a dedicated runtime pressure/ratification arc remains owed under `FWREG-010`. §6 (build-agent · internal-operations · user/care-facing — *same harness laws, different authority and exposure*). **This section is the current build/architecture-agent operationalization only.** Decision row proposed as `D0CKPT-DEC-008`.

§2.1 asks how work is partitioned across **lanes**. This asks how work is partitioned across **contexts** — the same moment, one question later. **Trigger on the act of delegating, not on an arc, a work package, or a phase.** It applies identically inside an arc, in a one-off thread, and to any future agent that delegates.

**Proportionality first.** A deterministic microhelper — extraction, mechanical verification, a disposable search or navigation lookup — needs **no ceremony**. It also **cannot originate architecture and cannot count as independent corroboration.** Everything below applies to *substantive* delegation only.

### Four launch facts — declare them, keep them orthogonal

**Do not collapse these into named "agent types."** Blind is not the opposite of supervised: a child can be supervised *and* fresh-context, or unsupervised *and* not independent.

| Fact | Values |
|---|---|
| `execution_posture` | `primary_collaborative` · `delegated_supervised` · `delegated_unsupervised` |
| `capture_posture` | `structured_return_only` · `exact_submission_source_object` |
| `acceptance_topology` | `parent_review` · `named_independent_review` · `owning_authority_gate` |

`owning_authority_gate` is abstract by design; for current architecture/build work it instantiates as Nick, Knox, the trifecta, a domain owner, or another explicitly named reviewer.

**Independence is a composable contract, not an enum** — declare only where materially claimed: `fresh_context` (`yes`/`no`) · `incumbent_answer_exposure` (`withheld`/`partial`/`full`) · `repository_access` (`none`/`bounded`/`full`) · `external_source_access` (`forbidden`/`bounded`/`allowed`) · `continuity_with_prior_phase` (`same_context`/`new_context`/`not_applicable`). Gate-1a was simultaneously fresh-context, answer-blind, repo-denied, research-denied **and** same-thread across phases; no single enum value describes that.

**`primary_collaborative` remains the default for central architecture work** — tightly coupled problems, consequential judgment, weak evaluators, or where the operator needs to participate in the reasoning rather than receive a result. Delegate only where bounded decomposition, specialty, parallel breadth, or independence *materially* helps.

### Declare at launch

`reason_for_delegation` · the four postures above · `expected_output` · `evaluator_or_acceptance_gate` · `authority_and_tools` · `raw_capture_required: yes | no` · `capture_destination_if_yes` · `stop_condition`.

**Operator visibility (D1).** A **consequential independent, adversarial, or unsupervised** delegation must be **operator-visible before launch** — posture, expected result, evaluator, and capture plan. It must not silently appear mid-work.

### Raw capture — when it is required

`exact_submission_source_object` is **required** when any of these holds: the work is **blind, fresh-independent, or adversarial** · **substantive unsupervised analysis** · **expensive or difficult to reproduce** · **expected to shape a decision** · it **uniquely preserves disagreement, reasoning, uncertainty, or rejected branches** · it has a **delayed or replacement-context consumer**.

**Do not manufacture a duplicate.** A child's **native durable output satisfies the requirement** when that object contains the complete submitted result at an immutable ref — do not create a second verbatim copy merely because delegation occurred. Exact capture applies when the submission **would otherwise exist only in transient thread or run context**, and *"expected to shape a decision"* triggers it only when reasoning, uncertainty, rejected alternatives or independence conditions are **not already fully durable in that native output**.

It is **not** required for deterministic extraction, mechanical verification, disposable search helpers, or supervised routine work whose complete durable result already lands in the parent artifact. In that case a **structured return is sufficient and no preservation debt is created.**

**When required, preserve:** the exact assignment · the exact **user-visible final response** · explicitly returned attachments or source ledger · provenance, independence conditions, source cutoff, byte count and content hash · **a named consumer, or an explicit no-consumer disposition.**

> **Never require, request, or preserve hidden chain-of-thought, private scratchpads, every tool event, or the whole platform transcript.** Visible reasoning the author actually returned is part of the returned submission and is preserved with it. **This is not "save every chat."**

### The pointer must have a referent (D2 — the failure this section exists to prevent)

The runtime capture §6 already requires the child to return *"a structured result + evidence pointers, NOT its whole transcript."* **It never assigned ownership of creating the object the pointer points at.** Consequence, observed: three commissioned subagents returned, the parent synthesized, and no object existed to point at.

**The commissioning parent owns** the posture decision, the capture declaration, the destination or guaranteed export route **established before adjudicating the result**, operator visibility, and ensuring the returned pointer resolves. **The child owns** the bounded assignment and the structured return. **The reviewer or operator owns adoption.**

### Adoption and review legs

**Child output is `candidate` until adopted by the owning authority.** Preservation proves what a child *said* — never that it was correct, and never that its external claims are promotion-grade. A **separate review or second-trifecta leg receives its own review object and acceptance gate**; it does not silently become parent truth.

### Completion proof

Exact regions non-empty · hashes recorded · no placeholder text remaining · retrievable from a fresh environment · passport/catalog/read-route disposition present or explicitly proposed (§5) · consumer binding present.

---

## 3) Work Classification

Classify payload into one or more classes:
- doctrine/binding rule,
- ADR/decision,
- future work item,
- evidence/rationale,
- narrative/arc,
- handoff/continuity,
- guardrail/failure mode,
- supersession/conflict,
- open review,
- catalog/read-graph impact,
- test/invariant requirement,
- glossary/canonical terminology,
- runbook/operational procedure.

Classification output is required before write operations.

### Classification Decision Contract
For each class selected, produce:
- destination artifact home,
- update-existing vs create-new decision,
- required side-effect updates (ledger/catalog/read-graph/open-review),
- required reviewer gate (if applicable).

---

## 4) Context Loading

Load context by lane/domain/surface tags through read-graph routes:
- relevant doctrine/system map/authority routing,
- relevant ADRs,
- guardrails,
- open review queue rows,
- future work rows,
- handoff continuity artifacts (consult/routed only),
- required proof obligations.

Do not use narrative/handoff/evidence as binding authority unless explicitly promoted/routed.

---

## 5) Artifact Intake and Routing

> **Delegation-capture hook (§2.2, PROPOSED).** Where §2.2 sets `capture_posture: exact_submission_source_object`, the preserved submission is an artifact and routes through this section like any other — passport, catalog disposition, read-graph evaluation — with the source-object posture (`preserved_verbatim` · `source_object_not_interpretation` · `not_promoted`) and its own named consumer. **§2.2 decides whether the object exists; §5 routes it once it does.**

### Row-First, Document-Second
- Update existing registry row/section by default.
- Create new standalone doc only when row/section is insufficient, prior artifact is locked, or protocol explicitly requires a new artifact.

### New Artifact Completion Rule
For every newly created architecture/process/governance markdown artifact, completion requires all of:
- document passport present (per `00_document_governance_and_taxonomy_2026-05-19.md` §3),
- artifact class/category declared,
- authority level declared,
- lifecycle role declared,
- catalog row added or updated in `01_master_corpus_catalog.md`,
- read-graph impact evaluated with either route update in `04_manifest_read_graph.md` or explicit `no-route-needed` reason,
- if classification/routing is uncertain, open-review row created in `08_open_review_queue.md` with owner and review gate.

A new artifact is not complete merely because the file exists. If passport/catalog/read-graph disposition is missing, the artifact remains provisional and the work package may not stop as complete.

This rule applies uniformly across all artifact classes (ADR, doctrine, narrative, handoff, registry, patch-spec, future doc, etc.) — no per-class exception.

### Governed Stream Artifact Operating Contract Pointer

If a newly created artifact is a **governed-stream artifact** (ledger, registry, archive, queue, append-only index, volumed artifact, or recurring governance artifact), the New Artifact Completion Rule above is necessary but not sufficient. The artifact MUST also include an Operating/Maintenance Contract in the same pass per `.cursor/plans/doctrine/00_architecture_memory_control_plane.md` Enforcement Rule 7 and the dedicated `## Governed Stream Artifact Operating Contract Rule` section. See that section for the 9 Minimum Contract Elements (purpose/scope, what belongs, what does not belong, entry/update format, lifecycle states, append/update/close rules, authority boundary, catalog/read-graph impact, stop-report proof requirement).

Existing governed-stream artifacts that lack a clear Operating Contract must be retrofitted on next substantive touch. The protocol does not redefine Rule 7 here; it routes through the canonical destination above and reports completion via the §9 stop report.

### Routing Requirements
When meaningful work occurs, route to appropriate artifacts:
- ADR,
- doctrine/system map/rule slice,
- decision/evidence ledgers,
- guardrail digest,
- supersession/conflict ledger,
- open review queue,
- catalog row updates,
- read-graph updates,
- handoff artifacts,
- future work registry updates.

Use canonical schemas in existing control-plane artifacts; no parallel schema formats.

### Routing Decision Rules (Minimum)
- **ADR vs Doctrine**
  - Use ADR for a specific architecture decision selecting one approach over alternatives.
  - Use doctrine/system-map/rule-slice when defining/updating persistent binding rules or boundaries.
- **Narrative vs Binding**
  - Narrative is rationale/history only unless promoted.
  - Binding authority must land in ADR/doctrine/gate destinations.
- **Guardrail vs Open Review vs Supersession**
  - Guardrail: repeatable failure mode/anti-pattern.
  - Open review: unresolved question/approval dependency.
  - Supersession/conflict: prior interpretation/doc replaced, narrowed, or contradicted.
- **Evidence**
  - Evidence informs routing/decision; does not auto-bind.
- **Handoff**
  - Continuity artifact only until routed/processed.

### Narrative Handling Rule
- Decide arc action explicitly: `same_arc_addendum` or `new_volume`.
- Maintain narrative lifecycle: `active_open` / `snapshot_locked` / `closed_superseded_by:*`.

### Handoff Minimum Contract
Handoff artifacts must include:
- state snapshot and scope complete,
- changed artifacts/files/commits,
- verification/proof outputs (or deferred reason),
- settled decisions not to re-litigate,
- unresolved assumptions/questions,
- next gate and stop condition.

### Template / Schema Sources (Canonical)
- ADR pattern: `docs/architecture/*adr*.md`
- Handoff pattern: `.cursor/plans/HANDOFF_*.md`
- Decision ledger schema: `.cursor/plans/doctrine/03_decision_extraction_ledger.md`
- Evidence ledger schema: `.cursor/plans/doctrine/07_evidence_ingestion_ledger.md`
- Guardrail schema: `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md`
- Supersession/conflict schema: `.cursor/plans/doctrine/05_supersession_conflict_ledger.md`
- Open review schema: `.cursor/plans/doctrine/08_open_review_queue.md`
- Catalog schema: `.cursor/plans/doctrine/01_master_corpus_catalog.md`
- Read graph schema: `.cursor/plans/doctrine/04_manifest_read_graph.md`
- Future work schema: `.cursor/plans/doctrine/future_work_registry.md` (target canonical home)

---

## 6) Build-Entry Checks (Pre-Edit)

Before implementation-lane edits:
- declare lane/domain/surface tags,
- retrieve matching future work rows by tags/trigger,
- retrieve matching open review and guardrail rows,
- retrieve relevant ADR/doctrine/domain-contract anchors,
- declare dispositions for matched future work (`preserve_invariant_only|keep_parked|promote|open_review|reject_stale`),
- declare proof obligations to run.

If no matching future work rows exist, explicitly report:
`Future Work Registry checked; no matching rows found.`

### Composition Discipline (Governed Temporary Coherence) Pointer
Build-entry admission for consequential lanes must satisfy the Foundational Composition Admission Checklist in `11_build_entry_gate_v0.md`. This checklist is the runtime enforcement of Governed Temporary Coherence doctrine ratified in `system_map_three_layers_60706286.plan.md`, `longitudinal_intelligence_cns_patient_operating_context_2026-05-19.md` §10.1, guardrail digest `D0-GRD-013..017`, and decision/evidence ledger rows `D0GCI-DEC-001`/`D0GCI-EVD-001`.

The protocol does not redefine this doctrine; it routes through the binding destinations above and reports composition-proof completion in stop reports per §9.

### Future Work Registry Contract
Future work includes both seams and features/capabilities.

Required row fields:
- `work_id`
- `item_type` (`architecture_seam` | `product_capability` | `surface_feature` | `integration_future` | `business_ops_future` | `clinical_ops_future` | `infrastructure_future`)
- `title`
- `domain_tags`
- `lane_tags`
- `affected_surfaces`
- `status` (`parked` | `watch` | `candidate` | `promoted` | `rejected`)
- `why_not_now`
- `what_to_preserve_now`
- `promotion_trigger`
- `build_entry_trigger`
- `risk_if_forgotten`
- `risk_if_built_too_early`
- `related_docs`
- `owner_or_review_gate`
- `last_reviewed_at`
- `next_review_condition`

No-empty-registry rule:
- Registry must be seeded with known high-value rows or explicit open-review debt must be created for deferred seeding backlog.

---

## 7) Execution Constraints

During execution:
- stay within declared scope,
- do not bypass routing requirements,
- do not introduce unratified primitives,
- do not perform unauthorized runtime/governance changes outside approved gate,
- where continuity or coordination is material, additionally comply with §2.1 (Durable Work — lane continuity contract + coordination overlay), **proportionally to the posture that actually applies**. Ordinary bounded work carries no §2.1 obligation.

---

## 8) Lifecycle Maintenance (Post-Work)

For touched artifacts, apply explicit lifecycle disposition:
- future work: promoted/parked/rejected/stale with reason,
- open review: closed/split/open with reviewer/gate state,
- supersession/conflict: updated when interpretation changed,
- narrative: lifecycle status updated,
- handoff: processed/routed/demoted semantics,
- catalog/read-graph: current/stale routing updates.

No stale artifact should remain without explicit reason.

### Future Work Lifecycle Rule
If future work is now implemented/accepted into current scope:
- mark `promoted`,
- link to destination ADR/doctrine/build artifact/work package.

If no longer valid:
- mark `rejected` with reason.

If still deferred:
- keep `parked/watch` and update review condition.

Future work must not remain perpetually deferred after implementation.

### Open Review Gap Routing Rule
When unresolved mechanics/canonical-home gaps remain, create or update explicit open-review rows with owner, closure criteria, and recovery trigger.

### Checkpoint Preservation Rule

**Preservation is the default, not the exception.** At every stop, classify the checkpoint tier by objective markers (table below). Required preservation artifacts scale with the tier. Stop reports alone (which live in conversation) only satisfy Tier 1.

**Default-up rule: if classification is uncertain, choose the higher tier.** Over-preservation is recoverable; under-preservation is not.

#### Tier classification

| tier | objective markers (ANY trigger except Tier 1 which requires ALL) | required output |
|---|---|---|
| **1 — micro** | NO commit AND NO Tier 0/0.5/1 governance file touched AND NO new artifact created AND NO doctrine/schema/rule change AND change is truly trivial (typo, comment, single-line note) | stop report only (in conversation) |
| **2 — work-package** | a **work-package close** is reached: session ends; OR user/agent explicitly declares a sub-work-package boundary mid-session; OR a coherent scope completes with one or more commits (e.g., "add feature X", "fix bug Y", "land doctrine update Z"); OR phase boundary is crossed. Intermediate commits inside an open work package roll into the package's final checkpoint; not every micro-commit produces a separate handoff. Default: one work-package per session unless explicitly sub-divided. | stop report + durable **handoff artifact** (`.cursor/plans/HANDOFF_YYYY-MM-DD_<slug>.md` per §5 Handoff Minimum Contract) |
| **3 — major arc** | spans 3+ Tier-0 governance artifacts; OR changes boot path / gates / routing semantics / lifecycle / authority boundaries; OR creates or activates an operating layer; OR resolves a repeated agent/process failure mode; OR crosses a phase boundary; OR spans multiple sessions or multiple commits | Tier 2 + **narrative volume** (`docs/architecture/evolution_narrative_volume_N_YYYY-MM-DD.md` per `narrative_or_postmortem` pattern) |
| **4 — canonization** | binding doctrine added or rule changed (Schema Lock, Enforcement Rules, Operating Contracts, Read-Graph Operating Contract, Archive Operating Contract, etc.) | Tier 3 + **decision ledger row** in `03_decision_extraction_ledger.md` + **supersession/conflict ledger update** if prior interpretation was replaced |

#### Handoff minimum (Tier 2+)

Use the §5 Handoff Minimum Contract: state snapshot + scope complete, changed artifacts/files/commits, verification/proof outputs (or deferred reason), settled decisions not to re-litigate, unresolved assumptions/questions, next gate + stop condition, source-of-truth load order. Add explicit `Stop condition for this handoff` so the next checkpoint can mark it superseded.

#### Narrative minimum (Tier 3+)

Use the existing `narrative_or_postmortem` pattern (see `docs/architecture/evolution_narrative*.md` for shape): where the arc started, why the jump/pivot happened, what was discovered, what got built, what mistakes were corrected, canonical binding pointers (non-binding narrative routes to them, does not become them), what remains unresolved. Non-binding; cite canonical destinations, not the narrative.

**Prior-narrative consultation obligation (Tier 3+):** A Tier 3+ narrative does NOT replace prior narrative arcs. Each new major narrative volume MUST include a "Prior arcs consulted" section listing relevant prior narrative volumes (or explicitly stating "no prior arcs relevant" with reason). New volumes point backward to relevant prior arcs and forward to current canonical/binding homes. Older narratives remain valid historical rationale; do not assume the latest volume supersedes them unless explicitly so stated.

**Guardrail extraction obligation (Tier 3+):** When a Tier 3+ narrative surfaces timeless lessons, recurring failure modes, or anti-patterns, those lessons MUST be extracted into `06_guardrail_antipattern_digest.md` as new guardrail rows in the same checkpoint. Each new guardrail row must include `source_evidence` pointing back to the narrative volume and `notes` pointing to the canonical binding destination if one exists. Extract only reusable, future-agent-relevant lessons — not vague slogans, not session-specific observations. The narrative is the chronicle (consulted by agents working in the affected domain); the guardrail is the rule (always loaded at boot via Tier 0.5 boot-visible surface). This is the structural answer to recency bias: timeless lessons survive in the always-visible surface, while narrative remains discoverable for context.

#### Canonization minimum (Tier 4)

Per existing §5 Routing Requirements: doctrine/system map/rule slice update in canonical home + decision ledger row (`03_decision_extraction_ledger.md`) + supersession/conflict ledger row (`05_supersession_conflict_ledger.md`) if prior interpretation replaced + catalog row update + read-graph route impact evaluation.

#### Checkpoint Closeout Rule (the boot path must move with the work)

**A Tier 2+ gate / handoff / phase / control-plane update / major planning arc is NOT "closed" until the boot path points the next agent to the new state — even if the work product already exists.** On every Tier 2+ checkpoint, in the **SAME closeout commit**:
1. write or update the **current checkpoint handoff** (§5 Handoff Minimum Contract);
2. repoint **`AGENTS.md` `## OMNI Operating References` Current Checkpoint Handoff** to it;
3. repoint **`04_manifest_read_graph.md` Tier-0 Universal Path #15 Current Checkpoint Handoff** to it — **(2) and (3) MUST name the same file; duplicate-pointer drift between them is the known failure (2026-06-13: AGENTS on 06-10, read-graph on 06-06, both stale)**;
4. update the **named controlling plan's current-state banner** (gate/state + next allowed action), if one exists;
5. add owed **catalog (`01`) / read-graph (`04`)** rows for new artifacts, or explicitly mark them owed;
6. mark prior checkpoints **historical-only**.

**"Closeout commit" = the commit that CLAIMS the gate/phase/arc closed — NOT every intermediate commit.** Intermediate commits inside an open work package roll up into the package's final checkpoint (per the §8 Tier classification + `D0CKPT-DEC-002`); the repoint obligation fires only at the closure that declares the work done.

**Law (burned in): work is not complete until the next agent boots to the right state.** This hardens the Control Plane `## Boot-Path Synchronization Requirement` for the current-checkpoint pointer specifically; the boot-side detector is §1 **Boot Freshness Check**, and the timeless guardrail is `06` `D0CKPT-GRD-001`. The prior handoff stays in the catalog as historical reference.

#### Why this rule exists

The first major arc closure (Tier-0 governance activation, 2026-05-22 → 2026-05-23) revealed the failure mode: the OS treated preservation as a §5 routing audit ("do we owe an ADR / ledger / handoff?") rather than as routine state preservation. Commit messages, catalog notes, and queue closure notes were treated as sufficient continuity. They are not. Future agents picking up a major arc need narrative-level context AND operational handoff, not just an audit log. This rule prevents the same miss from recurring.

---

## 9) Proof and Stop Report

Stop report must include:
- gate/work package declaration,
- files changed,
- proof/tests run (or deferred reason),
- artifact routing checklist results,
- lifecycle updates applied,
- unresolved assumptions/risks,
- `template_schema_references_used`,
- `schema_deviation:none|yes_with_reason`,
- `legacy_row_compatibility_notes` (if applicable),
- `new_artifacts_created` (list of paths, or `none`),
- `new_artifact_completion_proof` per §5 New Artifact Completion Rule for each path (passport, catalog, read-graph evaluation, authority level, lifecycle role, open-review row if uncertain). If the new artifact is a **governed-stream artifact** (per the definition in `00_architecture_memory_control_plane.md` `## Governed Stream Artifact Operating Contract Rule`), `new_artifact_completion_proof` must additionally include Operating/Maintenance Contract proof covering all Minimum Contract Elements per Enforcement Rule 7,
- `new_artifact_provisional_items` (`none` or listed with owner and review gate),
- `checkpoint_tier`: `1` | `2` | `3` | `4` (per §8 Checkpoint Preservation Rule; default UP if uncertain),
- `checkpoint_artifact_path`: path to durable handoff artifact, or `tier_1_in_conversation_only` if Tier 1,
- `narrative_artifact_path`: path to narrative volume, or `not_required_for_this_tier` if Tier 1 or 2,
- `prior_narratives_consulted`: for Tier 3+, list of prior narrative volume paths consulted (or `no_prior_arcs_relevant` with reason); for Tier 1 or 2, `not_required_for_this_tier`,
- `guardrail_rows_extracted`: for Tier 3+, list of guardrail row IDs added/updated in `06_guardrail_antipattern_digest.md` (or `no_timeless_lessons_surfaced` with reason); for Tier 1 or 2, `not_required_for_this_tier`,
- `canonical_updates`: list of doctrine/ledger/registry/read-graph paths updated, or `not_required_for_this_tier` if Tier 1, 2, or 3,
- **§2.1 posture declaration** — always emit `work_posture`: `ordinary` | `durable_lane` | `coordinated_bounded` | `coordinated_package`. **Fields below are emitted ONLY when the declared posture activates them. Do not enumerate long lists of `not_applicable` values — an unactivated field is simply absent.**
  - *`durable_lane` or `coordinated_package` adds:* `lane_key`, `lane_branch_and_head`, `lane_owner_or_transfer`, `lane_state`, `reentry_source_ref`, `worktree_path_posture`.
  - *base pin required (per §2.1 Conditional mechanics) adds:* `lane_content_base_sha`, and `current_main_state_sha` only where a state-only binding receipt was genuinely required.
  - *two-reference boot genuinely in effect adds:* `control_plane_boot_ref`, `control_plane_checkpoint_ref`, `lane_work_ref`, `two_ref_boot_check`.
  - *`coordinated_bounded` adds ONLY:* `contested_surface`, `authorized_writer`, `serialization_or_landing_order`, `collision_check`. **It does NOT emit `parent_key`, `sibling_states` or `parent_close_blockers`** — requiring those of transient bounded work is the obligation overreach this contract removed.
  - *`coordinated_package` adds:* `parent_key`, `sibling_states`, `shared_surface_changes_proposed`, `collision_check`, `parent_close_blockers`.
  - *an integrator role actually exists adds:* `integrator_role_key`, `integrator_holder_or_transfer`.
  - The superseded single-value forms `parallel_base_sha` and `control_plane_integrator`, and the retired `parallel_*` field prefix, must not be emitted,
- next gate.

Stop is blocked if `new_artifacts_created` is non-empty and any path lacks completion proof.

**Stop is also blocked if `checkpoint_tier >= 2` and `checkpoint_artifact_path` is missing/blank; or if `checkpoint_tier >= 3` and `narrative_artifact_path` OR `prior_narratives_consulted` OR `guardrail_rows_extracted` is missing/blank; or if `checkpoint_tier == 4` and `canonical_updates` is missing/blank.** Preservation existence is mandatory at the declared tier; under-declaring the tier to avoid producing artifacts violates the default-up rule.

---

## 10) Non-Loss Requirement

Accepted mechanics from source material must be preserved or explicitly demoted/deferred with reason and recovery trigger.

No silent drops.

## 11) Coverage and Gap Tracking Requirement

Before wiring/execution approval:
- produce and review `agent_work_protocol_coverage_audit_2026-05-22.md`,
- ensure every mechanic is mapped, mapped_partial with explicit closure path, or unresolved_gap with explicit open-review tracking,
- block wiring if unresolved gaps lack destination and tracking.

This prevents protocol flattening during wiring.
