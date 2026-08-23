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

## 2.2) Acceptance-boundary integrity *(CANDIDATE — `review_required`)*

> **Force.** **Acceptance unit A** — candidate under `D0CKPT-DEC-010`, `status: review_required`. **This is not active law. If adopted, the following governs.** Merging a change set containing these bytes does not activate them; activation is a separate accepted review transaction.

**Applicability — deliberately wider than §2.1.** This governs **any proposed change bundle**, explicitly **including ordinary bounded work** that owes nothing under §2.1. An ordinary bounded task can broaden a bundle's acceptance scope exactly as easily as a coordinated package can; §2.1's *"nothing in this section"* exemption does not reach here.

> **The general law: co-location in one physical carrier, presentation through one review object, or application through one landing group does not prove shared acceptance.** None of them establishes shared authority, shared review gate, shared lifecycle, shared acceptance, or compatible reversal posture.

**Repository specialization** — the same law where the carrier is Git: **branch/ref, change set, review object, landing group and acceptance transaction remain distinct.** *Stated at the general level first because OMNI also works through supplied packets, non-branch durable carriers, deployment and configuration bundles, evidence-promotion packets, migration packages and architecture acceptance objects — the mechanism must survive Git ceasing to be the only adapter.*

**This is not "one carrier, one object"** — that would be the next overcorrection. A branch may legitimately carry several work objects, and a coordinated package may intentionally reconcile several lanes into one landing. **The law is acceptance coupling, not object count.**

**The decisive test, applied at claim-and-scope grain — not at work-object grain, because one work object routinely contains several acceptance units:**

> **Can any material claim or scope slice be dispositioned or landed without deciding the rest?**

**If yes, those are distinct acceptance units.** This catches one document carrying several decisions · one architecture object with separately governed subsections · one review object carrying independently acceptable laws · one migration containing distinct semantic changes.

**Distinct acceptance units require independent addressability and rightful disposition.** They may share **one** review object **only where that review object explicitly preserves each unit's scope, holder, gate, disposition and landing relationship.** Where the review vehicle cannot preserve that independence — **or where one unit must land, reverse, or remain pending independently** — separate review objects or change sets are required.

**A shared landing group coordinates application; it never merges acceptance units, holders or authority.** *Landing and sequencing can be coordinated; **authority holders do not become shared by coordinating them.** "Coordinated acceptance holder" is the next polite phrase for hidden authority collapse, and it is refused here.*

**An acceptance unit is version-bound** — without this, independent acceptance inside one changing carrier is only theoretical. **Review and disposition apply to an exact unit revision.**

**A review is immutable evidence about the revision reviewed; what a later change ends is CARRY-FORWARD, not the review:**

> **A review or disposition remains valid historical evidence about the exact unit revision it addressed. A material successor change terminates its applicability to the successor revision; it does not erase, falsify, or retroactively invalidate the historical review event. The successor revision carries NO inherited disposition unless a fresh review occurs, or an explicit unchanged-scope and unchanged-dependency proof permits carry-forward.**

**`historically valid ≠ currently applicable ≠ carried forward to successor ≠ superseded ≠ erased`.** *These five are distinct states and collapsing any pair is a temporal error. The same physics governs consent revisions, professional-authority changes, policy versions, delegated-authority envelopes, clinical recommendations, migrations, deployment approvals and external counterparty commitments — this clause is the build-time instance of it, not a special case.*

**Material change is change to a unit's claims, scope, authority, conditions or dependencies.** **A change to a *different* unit terminates nothing here**, provided the accepted unit's pinned scope and declared dependencies are proven unchanged.

**Shared support must be declared, clause by clause, and CO-LOCATION IS NOT SUPPORT.** Shared support means a **particular definition, rule or control semantically relied on by more than one unit** — *living in the same file is not shared support, a file blob is not a semantic dependency, and a reference from one unit to another is not reciprocal support.* **A material change to declared shared support terminates carry-forward for every dependent unit**; their earlier dispositions remain valid as historical dispositions of the pinned earlier revisions. **Undeclared shared support is the silent form of the collapse this section forbids.**

**Four things a reviewable unit revision must separate:**

| element | what it proves |
|---|---|
| **carrier snapshot** | which immutable file or object revision was inspected (whole-file blob) |
| **unit scope** | the exact semantic region — section, row, clause — constituting the unit |
| **directional dependency** | what this unit relies on that it does not own, and in which direction |
| **declared shared support** | the exact clauses relied on by more than one unit |

`carrier snapshot + unit scope + directional dependencies + declared shared support = reviewable unit revision`

**Use the machinery that already exists.** Collaboration model §2.6's **Review Object Posture** and **Bounded Diff Receipt** supply this today: pin the review head · pin the carrier blob · name the exact section or row · name the shared-support clauses and directional dependencies · **use the bounded diff to prove whether the unit scope or its dependencies actually changed.** Consequently **an unrelated edit elsewhere in the same file does not manufacture a semantic reopening**, a shared-definition change reopens every dependent unit, and **a materially changed unit never inherits approval merely because its path is unchanged.** ***No new registry, ledger, identity scheme or semantic-digest subsystem is created here***; Layer 3 may add descriptors later.

**The authority-bearing pin is the acceptance transaction, never the review surface.** A review object's description is **mutable review metadata** and cannot be the sole durable proof of what was accepted. The sequence is: **review surface** = current posture · **independent review** = a result on exact unit revisions · **acceptance transaction** = the rightful force-conferring act carrying durable exact pins (accepted head · unit scopes · carrier blobs · decision-row identities · dependencies and shared support · each independent verdict · the resulting landing group) · **landing receipt** = proof the landed revisions equal the accepted revisions. *An already-governed acceptance receipt or the decision rows carry this; no new artifact is owed.*

**Review disposition is not acceptance.** **Reject, defer and return confer no force.** **A condition or narrowing does not silently accept the original unit** — it produces an **explicit revised claim-and-scope unit or delta**, which must receive the review and disposition required at its *resulting* scope. **Only an acceptance transaction confers accepted force.** *A reviewer's prose condition must never become an invisible part of the accepted architecture.*

**A proposed landing group is conditional on compatible dispositions.** Before landing, the change set is **normalized to contain only the exact accepted unit revisions**: rejected, returned and deferred units are removed or isolated; narrowed or conditioned units are represented as revised units carrying their own review and disposition; and the landing receipt proves the landed revisions match the accepted revisions. **Merge is never a substitute for unit-level disposition.**

**The originating work may carry a pointer, an evidence reference or an accepted dependency to a unit it does not hold; it may never silently land that unit.**

**Different files, a clean rebase and the absence of textual merge conflicts do not establish acceptance compatibility.** File collision and writer collision are not the only collisions — **acceptance, review-scope, merge-timing, lifecycle and branch-purpose collision are all real, and none of them produces a conflict marker.** *"Different files, therefore no collision" is the defective test this clause exists to retire.*

**Eight terms routinely collapsed, and not inherently one-to-one:**

| term | what it is |
|---|---|
| **work object** | the substantive thing being changed or judged |
| **work package** | the bounded intended outcome and closure path |
| **branch / ref** | a mutable version-control carrier |
| **change set** | a selected difference proposed for review |
| **review object** | the pull request, proposal or other vehicle in which review occurs |
| **acceptance unit** | **the exact claim-and-scope bundle intentionally subjected to ONE indivisible rightful disposition — accept · reject · defer · condition · narrow · return — without deciding another unit by implication** |
| **landing group** | one or more accepted units applied atomically or in a governed sequence |
| **acceptance transaction** | the authority-bearing act accepting a specified unit at a specified force and scope |

**`branch ≠ change set ≠ review object ≠ acceptance unit ≠ landing group ≠ acceptance transaction`.** These may align one-to-one; **OMNI must not presume they do.** **Several acceptance units may share one technically atomic landing group without acquiring one authority or one acceptance** — and conversely **one work object may contain claims requiring separate acceptance.** A merge does not promote every claim it contains, and **write access to a branch confers neither authority to broaden the change set nor authority to broaden the review object's acceptance scope.**

**A force label is a semantic guard, not enforcement and not separation.** Marking contained work `candidate` or `review_required` **records that no legitimate normative force has yet been conferred** — it makes a legitimate activation claim unavailable and supports review enforcement. **It does not mechanically prevent merge, misuse, stale citation, or an agent treating the bytes as operative.** **A force label never substitutes for physical separation where separation is required** — which is not the same as saying separation is always required.

Machine-enforceable form is recorded as a named Layer-3 obligation and is deliberately not designed here: `09` Layer 3.

---

## 2.3) Mid-work discovery — bounded interrupt *(CANDIDATE — `review_required`)*

> **Force.** **Acceptance unit B** — candidate under `D0CKPT-DEC-011`, `status: review_required`. **This is not active law. If adopted, the following governs.** *Candidate status follows from the absence of a rightful acceptance transaction — nothing else confers or withholds it.*

**Applicability — deliberately wider than §2.1.** This governs a material discovery arriving during active work, **including ordinary bounded work** that owes nothing under §2.1. §2.1 governs how to operate a partition once one exists; this governs the transition it does not cover — a discovery appearing *inside* active work that may invalidate the act that work was about to perform. **"Originating work" is used throughout**; *parent* appears only where an actual parent package exists, because ordinary bounded work may have no parent, no package and no branch.

**The whole of it, before the mechanics:** *a material discovery inside active work is assessed against the originating work's **current next act** and **completion condition**. If the next act remains valid, the finding is recorded or routed and work continues. If it is invalid or materially uncertain, **the minimum affected next act, scope or landing path** goes on an **exact hold with a named re-entry condition**. The existing §2.1 continuity × coordination test then determines the topology of any resulting work. No returned candidate is normatively integrated until it has had **consequence-proportionate independent review** and, where it is a normative candidate, **rightful acceptance**.*

**I1 — assess impact before acting, and answer only what the situation raises.** *Local defect · non-blocking · gate-blocking* survive as **human shorthand**, not as a closed classification whose single value carries every answer. The questions below are **independent**; a discovery that fails the first is finished at the first. **If adopted, this procedure is applied proportionately** — requiring all of the questions on every discovery would be the ceremony overreach `06` `D0CKPT-GRD-003` names.

| question | determines |
|---|---|
| does this materially affect the active object? | **relevance** — if no, record or route and continue; stop here |
| is the currently named next act still valid? | **continue vs hold** |
| does it alter a completion or acceptance condition? | **gate impact** |
| is it inside the current owner and writable scope? | **local vs routed** |
| does it need semantic separation from the originating work? | **candidate isolation** |
| must it survive pause or replacement? | **continuity posture** (→ §2.1) |
| does it need multiple writers, owners or reconciliation? | **coordination posture** (→ §2.1) |
| can any of its claims be dispositioned or landed without deciding the originating work? | **acceptance coupling** (→ §2.2) |
| what review and disposition are required before the originating work may use it? | **integration gate** |

**Interrupt on consequence, not fascination.** *"This is important and fascinating"* is not an interrupt trigger; *"the originating work's next act is no longer valid"* is. **Independent value or novelty may fully justify capture and routing to the appropriate owner or evidence surface — it simply does not, by itself, invalidate or hold the originating work.** Equally, **a genuine gate-blocking discovery may not be demoted to future work for convenience** — that ships an object whose completion condition is known to be wrong.

**Who answers what — no seat becomes a universal interrupt authority.** The **method owner** owns the *assessment procedure*, never substantive disposition. The **object or gate holder** owns whether the discovery actually invalidates the next act, narrows the work, or changes its completion condition — an object judgment, not a method one — **and owns permissible USE of existing governing law, accepted dependencies, evidence and blockers — according to each material's resolved authority, scope, currency and evidentiary role.** *It does **not** unilaterally determine source force: authority, scope, currency and evidentiary posture are resolved through the rightful source, owner and control-plane mechanisms first; the object or gate holder then decides permissible use within them.* The **work-package steward** selects and authorizes the resulting execution topology. The **rightful acceptance holder** accepts or rejects **normative candidates**. *If "method decided it is gate-blocking" could stand alone, method would become a hidden meta-authority over every domain, object and build package. And note the split: **evidence can inform without becoming law, existing law can constrain without new acceptance, and a blocker can hold work without becoming architecture** — only a normative candidate needs an acceptance act.*

**I2 — hold the minimum affected scope precisely, before opening anything.** **Hold the minimum affected next act, scope or landing path — not the whole originating work by default.** The whole is held only where the affected portion **cannot be safely separated**; unaffected work continues where its independence, writable scope and completion path remain explicit. *At scale one discovered problem must not halt an entire programme by default.* Record: the exact active object or work package · current ref, version or head **as applicable** · current state · completed work · **the blocked next act** · preserved boundaries · **what remains unheld and why** · re-entry condition. **A hold with no recorded next act is abandonment, not a hold** — the side inquiry silently becomes the assignment. This is **operational state** and belongs in an operational surface: the current checkpoint, work-package state, a designated cross-lane record, or an explicitly operational section of the carrier. **Saying a model is parked must never require editing the model.**

**I3 — resulting side work has no pre-decided topology.** A discovery does not create a lane. It may create **bounded side work**, whose shape is then decided by the **existing §2.1 test**: neither need → *ordinary bounded work* · continuity → *durable lane* · coordination → *coordinated bounded work* · both → *coordinated package*.

**Carrier separation is not independence.** A separate **branch** isolates bytes · a separate **review object** isolates acceptance · a separate **thread** isolates context · a separate **agent instance** supplies another sample. **None of them, by itself, establishes independent review.**

> **Independent review is consequence-proportionate FUNCTIONAL independence from the authoring act.** The reviewer **must not be the authoring pass**, **must hold authority to challenge, return or reject** the candidate, and **must have sufficient separation of context or role to produce a materially distinct assessment.** **Branch, thread, model-instance or prompt separation is never sufficient by itself.** Relevant conflicts and shared provenance are **disclosed**.

*All three conditions are required — a same authoring function under a slightly different prompt can claim a changed vantage while remaining functionally non-independent, which is why "different vantage" alone does not qualify.* This does **not** require a different vendor, a different model, a human for every correction, or ritual blind review — it requires a genuinely distinct review **function**. *Stated now, before automation begins treating "spawn another agent" as proof of independence.*

**The return is proportionate to consequence, not a fixed bundle.** The governing standard: *sufficient for rightful independent review, disposition and re-entry of the originating work.* **Minimum universal content is small** — exact effect on the originating work's next act or completion condition · the exact candidate or finding being returned · source and authority posture sufficient for the claim · disposition and rightful disposition path · re-entry state. **Everything else is conditional**, including worked fixtures, non-goals and downstream obligation maps: a pointer correction owes none of them, a safety-critical authority change may owe considerably more.

**I4 — independent semantic review before *normative* consumption. This is the load-bearing clause.**

> **A new or materially synthesized normative candidate, boundary change, or cross-cutting interpretation may NOT be integrated into the originating work's normative model, accepted boundary, or completion claim until it has survived review independent of the authoring pass. A side discovery may be recorded as evidence, as a blocker, and as work-state in an operational surface at any time.**

**Scope is deliberately narrow, so this does not become ceremony for ordinary corrections.** An **object-local correction already prescribed by governing law** follows the originating work's ordinary review and landing gate — it creates no side candidate and owes no additional method ceremony. Likewise, **discovering an already-governing contract does not require re-accepting that contract**; it requires resolving its **applicability and current force** for the intended use.

The distinction is *operational recording* versus *normative integration*, which is what reconciles this with `I2`. **`I4` is a review boundary, not an acceptance or promotion gate** — rightful acceptance is a separate act, and architecture promotion may be another act again. Review is **consequence-proportionate**: a narrow correction does not owe what a cross-cutting boundary owes. **The reviewer must satisfy the functional-independence test stated at `I3` above** — the same seat re-reading its own candidate does not discharge it (`06` `D0CKPT-GRD-006`). *One definition only; this clause points at it rather than restating it.* **Where the originating carrier is large, this clause does double duty** — stale neighbouring cells are invisible from inside a hot loop, so an unstable candidate seeds defects into surfaces that merely *describe* it.

**I5 — return: the complete effect on the originating work, plus whatever else is true.** A return states the **full effect vector**, because these are **not mutually exclusive** — next act · scope · hold state · completion condition · acceptance path · re-entry condition · or explicitly no effect. *These co-occur routinely; forcing them into one value is the closed-status mistake at a smaller grain.* It also carries **zero or more** independently routed consequences: accepted dependency · routed domain / seam / system obligation · estate or control-plane repair · candidate method change · defect finding · deferred future work.

**Inheritance is bounded by resolved authority, scope, currency and evidentiary role — not by acceptance alone.** The originating work may use material **only at the authority, scope, currency and evidentiary role currently resolved for the intended use.** Existing governing law may **constrain without new acceptance**; accepted decisions may be inherited **at their accepted scope**; evidence may **inform only at its declared evidentiary force**. **Unresolved material is never inherited as law** — and it acquires no binding force merely by being unresolved: **the rightful object or gate authority may impose a blocker or open condition *because of* it.** Then: the rightful owner records each disposition · the originating work runs a **freshness check** · it resumes at its named next act · the side work closes. Work that never closes is a second programme.

**Where the transient state lives, without minting anything.** **If the hold or resulting side work must survive pause, replacement or delayed re-entry, continuity is material and §2.1 applies.** Otherwise **the current operational or review carrier holds the transient state** — and **no work package, checkpoint or durable lane is minted merely to record an interruption.** *Ordinary bounded work may have no package, no checkpoint and no §2.1 obligation; requiring one here would recreate the applicability contradiction this section was moved out of §2.1 to escape.*

**What this does not create.** No interrupt registry · no permanent interrupt lane · no interrupt agent type · no standalone protocol artifact · no second control plane · no new gate · no closed classification enum · no obligation on work that met none of these questions. **An interrupt is an event affecting active work, not a kind of work** — the resulting work is ordinary work under §2.1's tests.

Decision: `D0CKPT-DEC-011` (`review_required`). Guardrail: `06` `D0CKPT-GRD-006` (`D0CKPT-DEC-012`, `review_required`). Concepts: `09` Layer 2. **Related but independently disposable:** `§2.2` / `D0CKPT-DEC-010`.

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
