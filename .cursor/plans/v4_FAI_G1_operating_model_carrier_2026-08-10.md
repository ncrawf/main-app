# v4 — FAI — G1 OPERATING-MODEL CARRIER (R1)

Document type: `handoff_or_readiness_gate` (gate-output carrier — the G1 deliverable named in the execution plan §5 gate-output transaction contract)
Authority: `analysis_nonbinding` (`D0THES-GRD-036`). **Binds nothing. Mints nothing. Promotes nothing. Closes nothing.** Where this carrier and a controlling carrier differ, **the carrier controls and this file is corrected.**
Status: **`g1_carrier_R1 · state=proposed · pending_architecture_steward_and_affected_domain_owner_approval`**
Domain(s): `architecture_governance` · `cross_cutting` — **no domain owns this arc's output.**
Lifecycle role: the G1 gate output — recognizes the operating model, proposes dispositions for the `blocks G1` ledger rows, and delivers the mandatory `§G1-AUTH` reconciliation.
Source-of-truth relationship: **owns nothing.** Gate sequence → execution plan §5. Arc rationale → charter R9. Finding disposition → PRE-0 ledger R5. Program state → the current checkpoint. Authority truth → the carriers named in §3.
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2`
Review gate: `user_knox_required`

> ## ★ AUTHORITY POSTURE — read before using this file
> Authored under **`proposal_authoring`**: may *"research, propose, author, test"*; may **never** *"accept, approve or commit."*
> **This file closes no ledger row, ratifies no contract, and does not close G1.** Every disposition here is **proposed**. The transition of any row to `closed` is an act of the accepting seats — `architecture_steward` + affected `domain_owner_approval` — recorded in the ledger by an acceptance transaction, not by assertion in a nonbinding carrier.
> **Nothing in §3 is authored.** It is recognition of structure already present in named carriers. Where this file appears to state a new law, that is a defect — open the cited carrier.

---

## §0 — Correction receipt: R0 → R1

R0 was reviewed and **not accepted**. Eleven objections were raised; **all were checked against the repository before disposition, and the material ones were correct.** R1 is a bounded amendment, not a new arc: PRE-0 is not reopened, G0 is not reopened, G2 does not start.

**The four that mattered most, and what they exposed:**

| # | Objection | Verified | What it actually exposed |
|---|---|---|---|
| **1** | R0 claimed the boot-freshness check **passed**. | **CORRECT — and broader than stated.** `AGENTS.md` §Agent Boot requires the pointer, read-graph #15 **and the named controlling plan's current-state banner** to agree. R8 still reads `pending_operator_and_independent_review_acceptance · nothing_started`, `Manifest action: PROPOSED — not landed`, and its §7 `Next` still names four things that already happened. R9 reads the same and still declares the integrator **VACANT**. Meanwhile the catalog rows for those very files read `ACCEPTED`. | R0 checked two of three required surfaces and reported a pass. **The arc founded on "OMNI mis-states its own state" mis-stated its own boot in the gate after the one that said so.** §0.1. |
| **2** | R0 wrote *"AB-08 CLOSED HERE"* and *"AB-08 closed"* in its stop receipt. | **CORRECT.** A carrier whose passport reads `analysis_nonbinding`, authored by a seat that may not accept, in an unmerged draft, cannot close a ledger row. | **This is `L-6` recurring.** The ledger demoted its own §3.5 for *"declaring it canonical from an `analysis_nonbinding` ledger."* R0 read that sentence, wrote it into its own §3, and then did the same thing eighty lines later. |
| **3** | R0's 40-row machine check proved **coverage, not discharge**. | **CORRECT, and this is the sharpest hit.** The check proved every identifier appears somewhere in the document. It proved nothing about whether the obligation was inherited, decided or routed. | **`C-11`/`C-12`'s root cause, self-inflicted.** R0 quotes the ledger saying R0-of-the-ledger *"machine-verified that four fields were present and mistook that for the fields being valid"* — then verified string presence and called it discharge. §10 replaces it with a semantic receipt. |
| **4** | R0's seat model **cannot represent the live transaction that authorized it.** | **CORRECT.** The G0 receipt reads `accountable_operator_principal: Nick` and `integration_holder: Opus`. R0 §3.8 defined holder binding as *"which principal occupies which seat."* Under R0's own vocabulary Opus is an actor, not a principal. | `AB-12` — governance self-hosted on OMNI's own primitives — was a row R0 claimed to discharge. **A model that cannot describe its own authority basis has not been self-hosted; it has been asserted.** §3.5. |

**Also corrected:** R0 re-hardened the eternal agent claims R8 explicitly **deleted** (§3.6) · R0 elevated *"absence is denial"* beyond its valid scope, colliding with Care's typed `unknown`/`not-applicable`/`authorized-exception` states (§3.7) · R0 said *"six composition models"* answering *"five questions"* and then listed six functions, and the category was wrong besides (§2) · R0's *"`M-106` = zero net-new"* converted an anti-re-derivation rule into an anti-synthesis rule (§6) · R0 treated eight pressure scenarios as resolved that are not (§4.2) · R0 made all fifteen §R questions mandatory for every mechanism, which manufactures ceremony (§9.3) · R0 applied inconsistent evidence thresholds across tool rows (§7) · R0 made *"local admission"* a universal fleet rule and *"skew is normal"* an absolute (§9.4).

**One objection is partly declined, with reasons at §7.4** — that G1 must complete a full primary-source pass on all external mechanisms before any tool verdict. Restructuring the decision format moves most of that obligation to where it actually binds.

### §0.1 — Boot receipt, restated honestly

**The freshness check does NOT pass byte-clean, and R1 does not claim it does.**

| Surface | Says | Agrees? |
|---|---|---|
| `AGENTS.md` checkpoint-pointer | `HANDOFF_2026-08-10_..._g1_startable.md` | ✔ |
| read-graph Tier-0 #15 | same | ✔ |
| the checkpoint's own §1 banner | `g0_accepted · g1_startable`; next action = G1 + `§G1-AUTH` | ✔ |
| **execution plan R8** — header, `Manifest action`, §7 `Next`, STOP | `pending_..._acceptance · nothing_started`; `PROPOSED — not landed`; next = *operator accepts → integrator appointed → C-10 → G0 closes* | ✘ **stale — all four already occurred** |
| **charter R9** — header, §14, STOP | same posture; **integrator VACANT** | ✘ **stale** |
| catalog rows for R8 and R9 | `ACCEPTED_at_G0_g1_startable` / `gate_0_ACCEPTED_2026-08-10` | ✘ **contradicts the files they describe** |

**Why R1 proceeded rather than stopping.** `AGENTS.md` says to stop and report on disagreement. The disagreement is **directional and benign**: every stale surface *under-claims* — it says less has happened than has. No stale surface authorizes anything, contradicts the gate, or misroutes work. Stopping the arc over surfaces that under-claim would convert a bookkeeping defect into a program halt. **R1 therefore reports rather than stops, and does not repair**: normalizing R8/R9 is a write to accepted gate carriers, which `proposal_authoring` may not perform. Routed as **`G1-FIND-01`** with a recommended repair at §12.3.

**`G-06` is CLOSED.** Tier-0 #14 (`doctrine/coherent_omni_architecture_pattern_2026-05-17.md`) was unread at R0 and is **now read in full.** It changed this carrier materially — see §2. R0 additionally cited it at the wrong path; the file is under `doctrine/`.

**Source posture.** Read fully: execution plan R8 · charter R9 · PRE-0 ledger R5 · current checkpoint · **Tier-0 #14** · Artifact Index · `rbac_authority_contract.md` · Agent Runtime & Harness capture. Read to controlling sections with verbatim extraction: GCE/enterprise posture · thesis §A/§B envelope passages · `EVRUN-2026-000007` `_05 §I.13–§I.15` + `_06` · `EVRUN-2026-000008` `_04`/`_03` · Care §§1b·4·5a·5b·5b.1·9·9a·13·18·19 · Identity/Federation/D7 contracts · `C4.4 §R` template + `R.1`–`R.17` + `§R.16`. Searched exhaustively: the six AI-corpus registries. Consulted: governance taxonomy · `lib/auth/capabilities.ts` · `contracts/` inventory. **Not inspected:** Build OS `09`/`10`/`11` · System/Surface Maps · Polaris · Platform and Accountability captures · C4.6 · C3.8 G4 · federation-permeability future arc · external mechanism primary sources (`G-05`).

**Counts resolved by pointer, never copied.** `C-11`/`C-12` reopened twice each because a corrected duplicate is still a duplicate.

---

## §1 — Gate-output contract compliance

| Contract field (plan §5, `C-09`) | Value | Where |
|---|---|---|
| Output carrier | the operating-model carrier | this file |
| Writable surfaces | new `/architecture` **proposals only** | §13 — no package created |
| Author seat | `proposal_authoring` | posture box |
| Approving seat | `architecture_steward` + affected `domain_owner_approval` | §11 |
| Evidence bundle | comparator + inheritance evidence | §5 · §6 · §7 |
| State on close | `proposed` | header |
| Stop condition | undisposed ledger row | §10 |

**Four G1-specific obligations:** `§G1-AUTH` reconciliation + 11 pressure scenarios → **§3**, **§4** · adopt/narrow/reject/defer on every tool row → **§7** · double evaluation with `current_practice_only` labelling → **§8** · `M-106` EXISTS-AS before claiming novelty → **§6**.

---

## §2 — The recognition

> **This section is the result. Everything after it is consequence.**

### §2.1 — What R0 got wrong about its own finding

R0 reported *"six composition models across four maturity levels, and no carrier reconciles them."* The maturity observation was right. The framing was wrong twice: it miscounted (six models, "five questions", six functions listed), and — more seriously — it **mis-typed** them. They are not six instances of one kind of thing:

- Care §5b is a **typed decomposition of admissibility**, not a composition rule.
- `EVRUN-000007` §I.14 is a **responsibility and custody allocation**, which applies *after* an act.
- RBAC's six-layer resolution is a **procedure** for computing one composer.
- The Agent Runtime meet is a **constraint calculation** over incomparable dimensions.
- GCE is an **owner decomposition**.
- The RBAC four-way spine is a **cross-owner conjunction**.

Laying six unlike things in a table and calling the table "the reconciled model" is not reconciliation. It is a bigger table.

### §2.2 — What they actually are

**They are views of one object, drawn from different angles by whoever needed that face.**

The object is a **consequential transition**: intent becoming authoritative state or real-world effect — **or reaching an honest non-action terminal.** That is not a new coinage. It is, verbatim, what `EVRUN-2026-000007` `_05 §I.15` already defines Reactor as governing.

Read against that object, the seven views resolve cleanly, and each answers a genuinely different kind of question:

| Face of the transition | View | Carrier |
|---|---|---|
| **Stage** — where in the arc are we? | three substrate layers: **planned commitment → actual delivery → linked evidence** | **Tier-0 #14 §1** |
| **Arc law** — what must hold across the whole arc? | eight invariants: admissibility · domain-owned commitment · accepted custody · no silent orphaning · selective reopening · compensation≠remedy≠reconsideration≠outcome · honest projection · bounded proof | Reactor, `EVRUN-000007 §I.14` |
| **Entitlement** — who may be entitled at all? | six-composer decomposition: Identity · Federation · RBAC · D7 · CNS-Meta · owning domain | GCE / enterprise posture |
| **Admissibility (kind)** — *which* admissibility is being asked? | four projections: decision · execution authorization · readiness · consequence, never one boolean | Care §5b |
| **Admissibility (conjunction)** — may this act proceed? | four-way spine, per ownership dimension | RBAC §5 |
| **Resolution** — how is one composer computed? | six-layer ordered evaluation; first DENY blocks | RBAC §5 (DL-18 inv 5) |
| **Constraint** — what is the general form of effective permission? | nine-term meet; denial dominates; no total order, no scalar minimum | Agent Runtime §G2C.2 |
| **Allocation** — who bears what, once it happened? | five layers: state · duty · authority · custody · continuity | `EVRUN-000007 §I.14` |

**The load-bearing find, and R0 missed it by not reading Tier-0 #14.** The 05-17 pattern places **RBAC on the same three-layer spine as scheduling, commerce, federation, intake and messaging** — verbatim: `permission_group + atom_grants (configured access)` → `capability_exercised event (per requireCap)` → `audit_events trail + attestation envelope`. Authority was already modelled as a transition with planned, actual and evidentiary stages **in May 2026**, on a document that says *"future pillars start from this shape, not from scratch"* and sits on the mandatory Universal Path.

**So the grammar was never missing. It was unread.** Tier-0 #14 §5 states the rule that would have prevented all three re-derivations: *"Don't re-derive the 3-layer pattern. Don't re-discover the cross-cutting disciplines. Use them as defaults."*

### §2.3 — Why nobody reconciled them

The estate's usual repair mechanisms are conflict-triggered: the supersession ledger, the open-review queue, the guardrail digest all activate when two things *disagree*.

**No two of these seven views disagree.** Each is correct about its own face. There was never a contradiction to route, so no mechanism fired, and each new arc — needing a face nobody had drawn for its purpose — drew it again. **Re-derivation here was not carelessness. It was the predicted behaviour of a correct estate with an unnamed object.**

That also explains Reactor precisely. Charter §5 already classifies it as *"a candidate cross-cutting ARCHITECTURE STANDARD governing consequential transitions and cross-authority continuity."* Reactor is not one of the seven views — **it is the arc law of the object all seven are viewing.** It stayed invisible because it was held to a production-evidence bar for the right to have an address, which is the arc's own founding diagnosis: **installation maturity and evidence maturity are orthogonal axes.**

### §2.4 — The reconciliation method is already ratified — this is not a new move

OMNI has adjudicated exactly this shape of problem once before, and the ruling is in Tier-0 #14 §1.5.1: the three-layer substrate pattern and the four-layer care OS looked like competing architectures and were adjudicated **`D0THES-REV-045` — compositional, not contradictory** — with one identified as *internal structure within a layer of* the other.

**R1 applies that ratified method rather than inventing a reconciliation.** The seven views are compositional, not contradictory. Each is internal structure of one face of one object.

### §2.5 — What this does and does not license

- It does **not** promote Reactor. `EVRUN-000008` is explicit: *keep frozen as `candidate_spine_doctrine` — do not promote, rename, expand, or implement as a central thing.* R1 promotes nothing. It observes that seven independent views project onto the arc Reactor already names, which is **evidence for the classification charter §5 already made** — and hands G3 its stated task: lay the eight invariants beside Care's laws, GCE's crossing spine and the 05-17 pattern.
- It does **not** mint an object, service, table, plane or domain. There is no `consequential_transition` primitive. Reactor's own build law is **compiled-not-deployed**: an overlay of invariants, never a thing.
- It **does** mean no future arc needs to re-derive an authority model. It needs to say **which face it is standing on** and open that view's carrier.

**Tier-0 #14 §4 supplies the test this recognition must survive**, and it is a hard one: *"No more than 2 levels of doctrine abstraction layered before substrate translation"* and *"if the artifact doesn't translate to a substrate-slice-able primitive within one pass, the artifact is wrong."* §4.1 runs it.

---

## §3 — `§G1-AUTH` — Authority, Agency and Commit Grammar Reconciliation

### §3.1 — The grammar

One transition. Two concurrent tracks. Six non-collapsing questions.

```
        rights · duties · professional and legal obligations
                        │  established externally — never by this architecture
                    PRINCIPAL
                        │  representation basis (relationship, surrogacy, licence, contract, statute)
                    ACTOR  (human · service · device · software agent)
                        │  scoped, purpose-bound, time-bound GRANT
              PROPOSED CONSEQUENTIAL TRANSITION
                        │  admissibility, re-evaluated AT the point of consequence
        ┌───────────────┴───────────────┐
   COMMITMENT track                CUSTODY track          ← concurrent, NOT sequential
   rightful committer +            an actor accepts the
   owning domain make ONE          next work, or nobody
   owned state authoritative       does and it is orphaned
        └───────────────┬───────────────┘
              EFFECT · NON-ACTION · FAILURE · EXCEPTION
                        │
        EVIDENCE · ATTESTATION · CONSEQUENCE STATE
                        │
   correction · revocation · selective reopening · compensation · remedy
```

**Why commitment and custody are concurrent tracks and not sequential stages.** If custody followed commitment, Reactor's invariant 4 — *"a local task may fail, but an unresolved patient consequence may not disappear without a new authorized disposition"* — would be unnecessary. Orphaning is only possible because a transition can be **committed with custody unaccepted**, or **custody accepted with nothing yet committed** (a pharmacy accepts the work before it commits dispensing state). Two tracks over one transition is what makes "no silent orphaning" a real invariant rather than a slogan.

**The six questions, each with a rightful owner and none collapsible into another:**

| # | Question | Owned by |
|---|---|---|
| 1 | **Accountability** — whose rights, duties or liabilities are implicated? | principal / legal entity — established externally |
| 2 | **Representation** — who acts for whom, on what basis? | Identity + the representation basis |
| 3 | **Admissibility** — what may be attempted now, for this purpose, in this context? | the four composers, per Care's four projections |
| 4 | **Commitment** — which actor and owning domain may make which state authoritative? | the owning domain |
| 5 | **Custody** — who accepted the next work or the unresolved consequence? | the accepting actor; OMNI enforces continuity |
| 6 | **Proof** — what demonstrates basis, decision, execution, outcome, exception or revocation as of time T? | the evidence plane |

**Collapsing any two of these is the recurring architectural failure**, and each collapse already has a named victim in the estate: 1↔2 (agent treated as principal) · 3↔4 (capability mistaken for commit authority) · 4↔5 (domain commitment mistaken for accepted custody — the orphaning class) · 3↔6 (audit log mistaken for authorization) · 1↔4 (*"the payer determines clinical indication"*).

### §3.2 — Three invariants that survive the correction

R0 stated three. One was overstated and is rewritten; the other two hold.

1. **Required positive authority may never be inferred from absence.** *(Rewritten — R0 said "absence is denial", which is false as a general rule.)* Where a consequential act requires a positive grant and no valid grant resolves, **execution fails closed** — while the underlying state remains **typed** as absent · unknown · unavailable · not-applicable · denied · or exception-authorized. §3.7.
2. **No authority dimension collapses to a number.** Three carriers reject scalar authority independently: the Agent Runtime meet (*no total ordering, no scalar minimum*), Care §5b (*do NOT collapse to one boolean*), and G2's rejection of R0–R3 authority ladders. None was written with the others in view.
3. **Necessary is never sufficient.** Stated verbatim three times: *"RBAC composes, never replaces"* · *"Federation is necessary, not sufficient"* · *"presence in the S6 draw … is necessary, never sufficient."*

### §3.3 — Grammar terms, each resolved to its owning carrier

| Required output (plan `§G1-AUTH`) | Resolution | Carrier |
|---|---|---|
| principal vs represented principal | `principal` = locus of rights/interests/authority; `represented principal` = the one on whose behalf an actor acts. **Not every actor is a principal**; one human may hold several principal-roles at once (operator-actor + licensed-clinical-actor + independently-accountable-professional-principal). | `EVRUN-000007` registry; Care §9 |
| actor vs agent | `actor` = anyone/anything performing an act. `agent` = a non-human actor acting for a principal. **Acting is not authority.** | same |
| organizational role vs architecture seat | `role` = operational function. **seat** = named durable authority position with explicit rights *and prohibitions*. Different axes. | §3.5 |
| holder binding | **Four objects, not one — §3.5.** R0's single "holder" field is the defect. |
| `delegated_authority_envelope` vs `capability_envelope` | **Ratified and distinct**, with a third completing the family: `capability_envelope` = what a model/tool may do · `delegated_authority_envelope` = what an actor may do for a represented principal under scope/purpose/TTL/revocation/escalation · `capability_contract` = what may be invoked across a governed boundary. *"A tool may be capable of ordering a lab while the actor is not authorized to order this lab for this patient at this time."* | enterprise posture (ratified); thesis spine **LOCKED** |
| approval and attestation topology | **Orthogonal, and no carrier joins them.** Care §5b.1 `approval_requirement` names approver **cardinality/topology**; RBAC §6 tiers name **evidence strength**. A cell is (topology × tier). Neither carrier says this. **Plus the decision-rule grammar** — §3.4. | Care §5b.1 · RBAC §6 |
| domain ownership vs operational custody | The two concurrent tracks (§3.1). *"A non-human agent may accept delegated execution custody; it does NOT thereby acquire independent professional authority or legal personhood."* | `EVRUN-000007 §I.14` |
| propose · execute · commit · accept | Four act classes, each needing its own grant; delegation may authorise execution without authorising professional judgment. **Plus a fifth the fixtures forced out: integrate/release/activate — §3.6.** | Agent Runtime §G2C.0; Care §9a; `INV-10` |
| build-plane vs use-plane | **Two populations, ONE grammar.** If the build plane invents a second authority mechanism the two diverge — the failure this arc exists to stop. | ledger §3.5; `AB-12` |
| human and legal-entity accountability | `legal_entity` = tax/compliance/**liability** boundary; LE↔brand many-to-many. *"OMNI can FIREWALL AUTHORITY, cannot LEGISLATE LIABILITY"* — bounded/insurable, not zero. | `federation_contract.md`; `EVRUN-000007 _06` |
| point-of-consequence reauthorization | **Settled in three places under three names, and they are one law:** re-evaluated at *"every consequential tool call, external effect and commit boundary"* · re-check at **emission AND execution**, *"UI hiding is NOT enforcement"* · consent resolves **at the transition where it is required**. | Agent Runtime · RBAC · Care |
| delegation, redelegation, expiry, revocation, suspension, transfer | Delegation and revocation are strong and present. **`transfer` and `suspension` of a seat holder are defined nowhere** — `G-02`. **Revocation across an already-emitted external effect is unresolved** — fixture 3. | Agent Runtime §6/§G2C.4; Care §5a |
| multi-agent and multi-principal interaction | Three interaction modes (private workspace · typed agent-to-agent work exchange · shared governed resolution). **Multiplicity ≠ evidentiary independence**, with correlation classes already enumerated. | `EVRUN-000007 _02 §8`; Care §9a |
| authority evidence and as-of reconstruction | Replay set enumerated; replay is **lineage/version-based, not raw retention**. Temporal semantics owned by C4.5, **never acceptance-tested** (`AB-21`, blocks G4). | Agent Runtime §G2C.4; C4.5 |
| which portions are standards / contracts / profiles / configuration | §3.8 |

### §3.4 — Decision-rule topology, promoted out of deferral

R0 parked N-of-M as a harmless future gap. It is not harmless: **a multi-principal system needs the grammar of a decision rule even when it does not yet need any particular threshold.** G1 settles the shape, not the values:

> A **decision condition** is an explicit predicate over independently attributable **approvals**, **refusals**, **abstentions**, **required-party participation**, and **non-overridable rights or duties**.

Two properties follow from carriers, not from invention: refusals are **first-class and separately attributable** (`INV-30` — a majority may not vote away an independently liable principal's refusal, a patient right, or a professional duty), and *"contributions are not votes"* (Care §9a). **Thresholds, quorums and cardinalities are operating-profile configuration.** `G-01` narrows accordingly: the grammar lands at G1; the values do not.

### §3.5 — Seat · principal · actor · grant — four objects, and the fixture that forced them apart

R0 had three objects and could not describe its own authority basis. **Four:**

| Object | What it is | Where it lives | Changes by |
|---|---|---|---|
| **Seat** | a named durable authority position: allowed decisions + explicit prohibitions | architecture (binding) | architecture amendment |
| **Accountable principal** | who bears the rights, duties or liability engaged when the seat acts | a register | ordinary record edit |
| **Exercising actor** | the human or software actor currently performing the seat's action | a register | ordinary record edit |
| **Grant** | scope · purpose · time · conditions · required proof · revocation · escalation under which the actor exercises the seat for the principal | runtime record | ordinary |

**Two tests it must pass, and R0's three-object model failed the second:**

1. Adding nine engineers, three departments or a compliance function is a **register edit** touching no architecture document.
2. **The model must represent its own live authority basis without verbal exception.** Fixture 1, §4.1.

**This is not a new mechanism.** It is the use-plane's existing structure applied reflexively — RBAC already separates `staff_permission_group_assignment` (who occupies) from `permission_group_atom_grant` (what is granted), both temporal, with `system_actor_atom_grant` as the non-human path. **`AB-12` self-hosting means using that, not paralleling it.**

**Consequence for the G0 receipt** (`G1-FIND-04`): the receipt's field `integration_holder: Opus` conflates *exercising actor* with *accountable principal*, which is precisely what let R0 write a model that could not describe it. Recommended repair — split into `accountable_principal` / `exercising_actor` / `grant_scope`. **A receipt edit, not an architecture change** — which is the first test passing.

### §3.6 — Agents: durable invariants vs today's operating profile

**R0's error, stated plainly.** R8 **deleted** *"agents may hold `proposal_authoring` only"*, *"agent = actor always"* and *"agent ≠ principal ever"* as *"eternal claims about future legal regimes that this arc has no standing to make."* R0 then reintroduced them as a categorical table. **A foundational architecture for 2035 must not encode 2026's product and legal assumptions as constitutional law.**

**Durable invariants — these hold regardless of law, model capability or era:**

1. **No actor self-authorizes.** The one-line law R8 kept.
2. **Capability does not create authority.** *A tool may be capable of what its actor may not do.*
3. **Execution does not create principal status.** Acting is not authority; custody is not personhood.
4. **Principal status and professional authority are established externally** — by law, licence, contract or statute. **The architecture records the basis; it never confers it, and it never prohibits what an external regime may later establish.**
5. **No actor is both proposer and accepter where independence is required.**
6. **Every consequential act resolves to a rightful commit owner and an attributable accountability chain.**

**Current operating-profile constraints — true today, revisable by profile, NOT constitutional:**

| Constraint | Basis | Revisable when |
|---|---|---|
| AI never final-authors safety-sensitive atoms; emission carries `on_behalf_of_id` or is rejected | RBAC §8.4 · thesis §12.8 | law, independent verification, risk class and accountable-principal sponsorship permit |
| Model-bearing actors may not commit domain truth; a deterministic control component may commit only bounded operational state | Agent Runtime §G2C.0 | same |
| Only human actors occupy care-ownership roles | thesis §7.2 | same |
| Agents in **this arc** hold `proposal_authoring` only | ledger §3.5 — *"an arc restriction, NOT a general OMNI rule"* | per transaction |

**The load-bearing sentence:** *which action classes an actor may perform is a question of grant, action class, rightful owner and point-of-consequence conditions* — never of what kind of thing the actor is. **That is what keeps the constitution alive in 2035 without making anything sovereign in 2026.**

### §3.7 — Default-deny, correctly scoped

R0 elevated *"absence is denial"* to a cross-model invariant. It is valid **only within a scoped positive-grant decision**. As a general rule it contradicts the estate:

- absence of evidence is not evidence of absence;
- unknown readiness is **readiness-unknown**, not inadmissibility — Care §5b: *"indicated+accepted-but-operationally-unavailable (readiness, not inadmissibility)"*;
- a missing local record does not extinguish an independently existing patient right — `INV-15` requires such rights be modelled as **unexercised** and enforced by default behaviour;
- patient silence is `choice = unknown` and must **never** resolve to consent by timeout;
- emergency and statutory authority may exist **despite** missing ordinary prerequisites;
- Care §5b explicitly preserves `satisfied · unsatisfied · unknown · not-applicable · authorized-exception` **with an owner per plane**, and forbids collapsing them.

**Correct form:** *Required positive authority may never be inferred from absence. Where a consequential act requires a positive grant and no valid grant resolves, execution fails closed — while the underlying state remains typed as absent, unknown, unavailable, not-applicable, denied, or exception-authorized, each with a named owner for resolving it.*

**Fail-closed is an execution rule. It is not an epistemic verdict.** R0's version would have licensed exactly the collapse Care §5b forbids.

### §3.8 — Standards / contracts / profiles / configuration

| Portion | Class | Why |
|---|---|---|
| the six durable invariants (§3.6) · required-positive-authority (§3.2.1) · no-scalar-authority · necessary-never-sufficient · point-of-consequence reauthorization · the six non-collapsing questions | **cross-cutting architecture STANDARD** | universal, violable, conformance-testable — charter §7's definition |
| four-way composition · six-composer decomposition · six-layer resolution · attestation tiers · consent-gate | **domain CONTRACT** | already contract-resident |
| four admissibility projections · `approval_requirement` · `checkpoint_graph` | **domain CONTRACT**, Care-owned | Care owns them; FAI reconciles, never authors |
| build-plane seat catalog · use-plane seat catalogs · decision-rule thresholds · today's agent constraints (§3.6) | **OPERATING PROFILE** | populations and eras differ; the grammar does not |
| accountable-principal / exercising-actor / grant registers | **runtime CONFIGURATION** | must change without an architecture change |
| the three-envelope family | **controlled VOCABULARY** + contract fields | LOCKED; currently has no addressable home (§9.2) |
| the nine-term meet | **STANDARD** candidate, pending promotion out of `analysis_nonbinding` | it is the general form of every other composition statement (`G1-FIND-03`) |

---

## §4 — Proof: five fixtures, then the eleven scenarios

Fixtures are **not new ceremony**. Tier-0 #14 §4 already requires *"at least 5 real-world operational scenarios stress-tested"* before a pillar is substrate-slice-ready. R1 inherits the obligation rather than inventing it.

**Result values:** `REPRESENTS` (the grammar carries it with no verbal exception) · `REPRESENTS + CORRECTION` (it carries it, and doing so corrected something) · `PARTIAL` (a real residue, named and routed).

### §4.1 — The five fixtures

| # | Fixture | Result | What happened |
|---|---|---|---|
| **1** | **The live C-10 transaction** — `accountable_operator_principal: Nick`; `integration_holder: Opus` | **REPRESENTS + CORRECTION** | Under R0's three objects: **fails** — Opus is not a principal. Under §3.5: seat = `integration`; accountable principal = Nick; exercising actor = Opus (software agent); grant = bounded to the arc-opening transaction, expiring on completion, scoped to landing an already-accepted change set. Carries cleanly, **and exposes the receipt-field conflation** (`G1-FIND-04`). **Self-hosting demonstrated, not asserted.** |
| **2** | **Patient / clinician / payer / pharmacy disagree** | **REPRESENTS + CORRECTION** | Four commit events on four non-fungible planes: the patient commits acceptance or refusal; the clinician commits recommendation or adoption; the payer commits coverage; the pharmacy commits dispense or substitution; the operator commits capacity. OMNI commits **a coordination state describing what remains unresolved**, and owns none of the others. **Corrects R0**, which wrote *"the authorized Care owner commits"* — recreating the single final decider that Care §4 forbids, two paragraphs after quoting Care §4. Residue: what OMNI's coordination state *is* constitutionally — already `[OPEN_RECONCILIATION]` in Care §9a G2, routed to C5. |
| **3** | **Delegation revoked across an in-flight external effect** | **PARTIAL** | Carried: revocation invalidates **future** admissibility, not accepted custody; the emitted effect becomes an unresolved consequence requiring a new authorized disposition (inv 4); `compensation ≠ remedy ≠ reversal ≠ reconsideration ≠ outcome` stay distinct (inv 6); history is append-only. **Not carried:** whether revocation takes effect at **emission** or at **counterparty acknowledgment**, and what holds when acknowledgment never arrives. **Downgraded from R0's RESOLVED.** |
| **4** | **Break-glass under network partition** | **PARTIAL** | Break-glass requires a **dual approver (T3)**; partition is precisely when the co-attestor is unreachable. Fail closed and block emergency care, or degrade to post-hoc reconciliation and weaken T3 to an assertion? No carrier states it. |
| **5** | **1,000-deployment release: legitimate variation + incompatible skew + mandatory security revocation** | **PARTIAL — and it broke an R0 claim** | R0 made **local admission universal**. Fixture 5 falsifies that: a mandatory security revocation against a Powered-by-OMNI deployment is not the same act as against a sovereign federation member. Tier-0 #14 §1.5.2's **four coexistent operator abilities** (power brands · connect brands · govern the network · operate care domains) already predict the postures. Correction at §9.4. Residue: OMNI's right to **stop claiming a deployment conforms** is not the same as a right to change it, and no carrier states the difference. |

**Fixtures 3 and 4 share one root**, which compresses two gaps into one and makes `AB-29` precise:

> **OMNI has no stated semantics for an authority act that requires a second party's acknowledgment when the second party is unreachable.** Break-glass needs a co-attestor; revocation needs a recipient. Both fail the same way, and both currently resolve by silence.

**Tier-0 #14 §4's abstraction test, applied honestly.** *"No more than 2 levels of doctrine abstraction before substrate translation; if the artifact doesn't translate to a substrate-sliceable primitive within one pass, the artifact is wrong."* The grammar is **one** level above existing contract objects and translates in one pass: the four §3.5 objects map onto RBAC's existing assignment/grant rows plus two register fields. **It passes.** The `architecture_role` axis (§9.1) does **not** yet — it is a taxonomy over documents with no substrate slice, which is why it stays proposed and fixture-gated.

### §4.2 — The eleven required pressure scenarios, re-run

R0 claimed 10 of 11 resolved. **Eight were wrong or overstated.** Honest results:

| # | Scenario | R0 | **R1** | Basis |
|---|---|---|---|---|
| 1 | 5 pharmacies × 50 agents | RESOLVES | **RESOLVES-CORRECTED** | R0 wrote *"50 agents from 5 pharmacies are 5 principals."* **Wrong.** One pharmacy may contain several legal entities, an independently accountable pharmacist, a fulfilment operator and payer principals. **Represented-principal cardinality resolves per contribution and per action — never inferred from agent count or organization label.** R0 applied *"ten payer bots = one payer principal"* in the wrong direction: that rule collapses *agents* to a principal, it does not collapse *principals* to an org. |
| 2 | +compliance function | RESOLVES | **RESOLVES-CORRECTED** | Two different acts. Adding a person to an existing seat = **register edit**. Creating a new compliance authority, veto, independent-review requirement or approval stage = **architecture or operating-profile change**. R0 flattened both to staffing. |
| 3 | one person, several seats | RESOLVES | **RESOLVES-CORRECTED** | Occupancy is configuration; **prohibited combinations and separation-of-duty are architecture**. R0's *"concentration is a staffing fact, never architecture"* is half right and dangerous: the concentration is a fact, but the **per-transaction conflict constraint** that makes it survivable is architecture. |
| 4 | a seat with no holder | RESOLVES | **RESOLVES** | Fail closed, never default upward. Demonstrated live — vacant `integration` correctly blocked every shared-surface landing. |
| 5 | one agent proposes, another tests | RESOLVES | **RESOLVES-CORRECTED** | R0: *"two actors in the same seat is unremarkable."* **Wrong where the test contributes to acceptance.** Separate agents are not independent evidence: model family, corpus, context and toolchain correlate them. The estate already has the primitive — correlation classes `independent · shared_primary_source · shared_model_family · derived_from_same_contribution · copied_or_rephrased · correlation_unknown`. **If test output supports acceptance, the receipt must carry an evidentiary-independence class.** PRE-0 proved this on itself: B and C shared a model family. **R0 wrote that falsifier at §12 and violated it at §4.** |
| 6 | agent performs approved mechanical integration | RESOLVES-NARROWED | **RESOLVES-CORRECTED** | R0 conflated *the code governs something safety-sensitive* with *the byte transfer is a safety-sensitive domain action.* **Four distinct acts, four gates:** `integration` (land an accepted set) · `release` (version and publish) · `activation` (make effective in a deployment) · `domain action` (the governed act the code later performs). Substantive authority sits upstream at acceptance; **activation may carry its own gate**. This maps onto the existing E&V → Release → Runtime chain rather than inventing one. |
| 7 | proposal author also holds an approval seat | RESOLVES | **RESOLVES** | Permitted in general, forbidden on the same change. Live instance: this carrier. |
| 8 | payer agent vs operator agent disagree | RESOLVES | **RESOLVES-CORRECTED** | See fixture 2. No shared cross-principal state machine; a **vector of principal-local states**; mismatch is a named condition routed to humans and never auto-corrected. |
| 9 | patient agent vs provider agent disagree | RESOLVES | **RESOLVES-CORRECTED** | Same, plus three constraints that forbid a tie-break: *contributions are not votes* · `INV-30` · `INV-15`. **OMNI does not adjudicate; it preserves the discordance and names who owes what next.** |
| 10 | delegation revoked mid-run | RESOLVES | **PARTIAL** | Fixture 3. In-flight *internal* revocation is fully carried; revocation across an **already-emitted external effect** is not. |
| 11 | break-glass under partial network failure | PARTIAL | **PARTIAL** | Fixture 4. Unchanged, and now joined to 10 by one root. |

**Honest tally: 9 represent (7 of them only after correction) · 2 PARTIAL.** The plan's convergence criterion is explicit — *"the model is not converged until each resolves without inventing new authority."* **Two do not. That decides §11, and it decides it against R0's verdict.**

---

## §5 — Architecture Operations: four roots, ten functions, and which of them OMNI must own

### §5.1 — The compression R0 missed

R0 organized around the plan §1 table of ten operations capabilities and thereby treated them as ten near-products. **The plan already contains the better frame in §0.5, and maps each to an acceptance test:** **Explicit · Resolvable · Evolvable · Observable.**

| Root | The operating system | Subordinate functions |
|---|---|---|
| **EXPLICIT** | a canonical architecture-resource graph: standards, contracts, profiles, variation points, decisions, relationships, owners, versions, supersession, proof obligations | catalog/graph · change proposal |
| **RESOLVABLE** | a deterministic resolver: global requirements + operating profile + deployment profile + authorized variation + exception state + actor/purpose/`as_of` → **one attributable effective snapshot** | effective-architecture compiler · impact analysis |
| **EVOLVABLE** | one governed change transaction: proposal → impact → authority routing → decision → migration → release → **adoption or mandatory activation** → fleet reconciliation → deprecation/revocation | propagation · fleet reconciliation · exception/debt lifecycle |
| **OBSERVABLE** | a conformance and correction loop: declared ↔ artifacts ↔ code ↔ config ↔ deployment ↔ runtime evidence → attributed divergence → exception, repair, rollback, compensation or forward migration | conformance engine · drift detection · agentic workbench |

**The ten do not become ten services, teams or god objects.** They are functions inside four properties. This also resolves the §6 maturity confusion: the *roots* are what must exist; the *functions* are how much of each is built.

### §5.2 — Substrate independence is the commercial strategy, not a hygiene test

The four roots are the part OMNI must own. **Most of the ten functions are the part OMNI should buy.**

Semantic catalogs, ontology-backed action systems, context assembly, agent workbenches, coding agents, tool protocols, evaluation harnesses, permission plumbing, deployment and observability infrastructure — these are being commoditized right now by companies with more capital and more engineers than OMNI will ever point at them. Competing there is a losing trade.

**What no ontology or agent platform supplies by being sophisticated:** clinical adoption as distinct from data ingestion · patient authority, refusal and portability without captivity · multiple independently governed principals whose commitments are **not fungible** · separation of clinical indication from coverage from dispensing from capacity from custody from commerce · cross-authority continuity when one rail terminates while the patient consequence remains unresolved · source sovereignty and correction without erasure · effective architecture across a thousand materially different care deployments · conformance that preserves legitimate operator variation without permitting silent constitutional erosion.

**The join neither the plan nor the review states, and it is the strategically load-bearing sentence of this gate:**

> **Acceptance test 11 — remove every adopted third-party tool; the architecture must still resolve and every law must still be stated and checkable — is not a hygiene test. It is the commercial strategy expressed as a conformance test.**

If every law is expressible outside every vendor's format, then each commoditization wave becomes **cheaper supply** rather than an existential threat: OMNI swaps engines and keeps its constitution. If any law lives only inside a vendor's format, that vendor owns a piece of OMNI's constitution and every wave is an attack.

**This is why §7's decision shape changed.** A tool decision that separates *required capability* from *initial adapter* is **reversible by construction**. `GRD-033` (visible ≠ authorized) and `GRD-034` (measured by preservation, not integration count) are the existing guardrails; test 11 makes them mechanical; §7 makes them procurable.

---

## §6 — Inheritance and residual: what `M-106` actually proved

**R0's conclusion — *"0 of 10 capabilities are net-new"* — is withdrawn.** The six registries proved that concepts were **routed** to all ten. They did not prove the capabilities **exist**. R0 collapsed *routed* into *architected*, which converts an anti-re-derivation rule into an **anti-synthesis rule** — and would forbid G1 from doing the one thing G1 exists to do.

**Six distinct maturity states, which R0 flattened into two:** `mentioned` → `routed` → `architected` → `specified` → `implemented` → `operationally proven`.

| Capability | Inherited fragments (representative) | Highest state reached | Residual G1 must name |
|---|---|---|---|
| architecture catalog / graph | `architecture_memory_lint` · read-graph · `living_classification` · memory strata | **routed** | one canonical graph with owners, versions, supersession, proof links — generated, not hand-kept |
| change proposal | `generated_change_candidate` · `intent_to_change_compilation` · plan-conformance | **routed** | the change manifest as a transaction with refusals first-class (§9.2) |
| impact analysis | `dependency_probe_before_commit` · `ontological_assumption_review` · risk→architecture compilation | **routed** | traversal across profile → contract → code → deployment **before** approval |
| effective-architecture compiler | F1 family: `compiled_agent_manifest` · `compile_time_policy_check` · **`certified_variation_envelope`** | **architected (adjacent domain)** | the *architecture* instance of a compiler pattern already architected for agents |
| conformance engine | `executable_governance_law` · `plan_conformance_check` · eval verifiers | **routed** | forbidden-loosening and profile-compatibility as machine checks |
| propagation | `derived_permission_invalidation` · `instruction_update_policy` · control inheritance | **routed** | downstream generation without creating the review bottleneck (§8) |
| fleet reconciliation | agent-fleet registry · `deployment_activation_state` · **accidental drift vs authorized variation** | **routed** | typed skew + the three release postures (§9.4) |
| observability / drift | `drift_monitoring_policy` · patrol loops · `architecture_memory_lint` | **routed** | declared-vs-live diff, and attention economics before volume |
| agentic workbench | `agent_workbench` · `single_agent_first` · `agent_theater_guardrail` · `delegation_depth`/`fanout_budget` | **architected (adjacent domain)** | binding it to architecture resources — **and buying most of it** (§5.2) |
| exception / debt lifecycle | `exception_surface` · compensating control · `residual_risk_authority` | **routed** | owner + scope + expiry + removal-or-promotion as one lifecycle |

**`M-106` is satisfied and its rule is preserved:** nothing above is presented as net-new, every row names its inherited fragments, and **synthesis of routed fragments into an architected capability is exactly what the registries were captured for.** All six carry `propose-only` and require promotion through the destination home's gate.

**Symmetric correction (`G1-FIND-05`):** plan §1's *"what exists today: nothing"* is too coarse in one direction; R0's *"nothing is net-new"* was equally coarse in the other. Both are replaced by this matrix.

---

## §7 — Tool candidate ratification

### §7.1 — Why the decision shape changed

R0 issued adopt/narrow/reject/defer and applied **inconsistent evidence thresholds**: it rejected the merge queue for want of measured pressure while adopting resource leases on comparably thin evidence, and adopted JSON Schema while declaring its own external-evidence lane incomplete.

The defect is that a single verdict answers two different questions at once. **Every row now carries four parts** — and the required verdict is retained, because `C-08` mandates it:

**required capability** (architecture; survives every vendor) · **initial adapter** (implementation; replaceable) · **portability boundary** (what the tool may never own — test 11) · **activation or replacement trigger** (the evidence that would change it).

### §7.2 — The nine rows

| # | Required capability *(architecture)* | Initial adapter | Portability boundary | Trigger | **Verdict** |
|---|---|---|---|---|---|
| 1 | machine-readable descriptors + **deterministic validation**; snapshot byte-reproducible or fail closed | JSON Schema + CI, if G2 confirms fit | a schema language may never be where a rule *lives* | schema expressiveness insufficient for a declared rule | **ADOPT** *(capability)* |
| 2 | approval routing + **protected serialized integration** | CODEOWNERS + rulesets + required checks | routing metadata is not authority | measured queueing pressure → add merge queue | **NARROW** — merge queue **not rejected constitutionally**, deferred to evidence *(corrects R0)* |
| 3 | **resource-claim semantics** — declared writes, overlap detection | thin OMNI checker | claims are coordination, never authorization | collision evidence → activate exclusivity leases | **ADOPT** *(claim semantics)* / **DEFER** *(exclusivity)* — R0's inconsistency repaired |
| 4 | **policy-as-code**: a lane cannot land an edit to a protected surface | generalize `check-checkpoint-pointer.mjs` | **OPA must never become the constitutional policy language** | a policy inexpressible as a direct repository check | **NARROW** |
| 5 | canonical resource graph with owners and relations | OMNI descriptors canonical; **Backstage entities generated downstream** | `spec.owner` is display metadata, **not** OMNI authority | portal demand from real users | **NARROW** |
| 6 | architecture version · profile ids · conformance result emittable as **named, declared evidence**; **PHI and raw patient context prohibited in attributes** | OTel semantic conventions | a transport is not the conformance or drift authority | adapter after the canonical model survives G3/G4 (`C-16`) | **ADOPT** *(requirement)* / **DEFER** *(mapping)* |
| 7 | repeatable semantic transformation **with a decisive verifier** | TS codemods; OpenRewrite later | recipes are mechanism, never semantics | the trigger, met — *not an edit count* | **DEFER** |
| 8 | **logical** desired-vs-live reconciliation | none yet | *the logical fleet exists before Kubernetes does* | an actual deployment substrate | **DEFER** *(engine)* — the fleet **model** is required now, §9.4 |
| 9 | durable multi-agent execution | none — Agent Runtime owns it | do not build the runtime pre-spine | `FWREG-010` closes | **DEFER** |

**Tally: 2 adopt · 3 narrow · 4 defer · 0 constitutional rejections.** R0's merge-queue rejection is **withdrawn as over-reach** — `C-17` established that a mandate is unearned, which is an argument for deferral, not for constitutional prohibition. Forbidding a mechanism for want of present pressure is the same error in the opposite direction, and it handcuffs a future OMNI with real concurrency.

### §7.3 — The frontier caveat that survives

Resource leases solve **write collision**. At agent scale the binding constraint is **review capacity**. The registries already routed the successors — `claimable_work_item`, `delegation_depth`/`fanout_budget`, `automation_review_sampling_policy`. Adopt the claim semantics; do not mistake them for the agent-scale answer. §8.

### §7.4 — Where the primary-source obligation actually binds *(partial decline)*

The review asks G1 to complete a full primary-source pass on all external mechanisms before any tool verdict. **Partly declined, and here is the reasoning rather than the refusal.**

Under the four-part shape, the **required capability** and the **portability boundary** are architecture decisions derived from OMNI's own laws and fixtures — they do not depend on a vendor comparison. Only the **initial adapter** does, and adapter selection is **G2's admitted implementation lane**, gated by a Build Entry verdict.

So `AB-11`'s primary-source obligation is **not discharged and not waived — it is routed to where it binds**: to adapter selection at G2, and to the mechanisms whose *concepts* the architecture actually borrows (42010 correspondence rules · FHIR constrain-never-loosen · SEI variation points · IHE required groupings). Those four remain owed at G1 and are carried in `G-05`.

**Making G1 read eleven standards to ratify engines it has just deferred would convert a foundational gate into a standards-reading arc, which the scope fence forbids.** Restructuring the decision reduced the obligation honestly rather than dodging it.

---

## §8 — Frontier evaluation (§3.9.2)

| Capability | Current practice | Agent-native 2030/35 | Label | Frontier gap |
|---|---|---|---|---|
| catalog / graph | pass | partial | `current_practice_only` | human-paced curation assumes a human reader; registries route **machine-first with a human view** |
| change proposal | pass | **fail** | `current_practice_only` | optimizes authoring throughput — the wrong side. *"Generation is solved. Verification, judgment, and direction are the new craft."* |
| impact analysis | pass | pass | — | improves under load; scales with compute |
| effective-architecture compiler | pass | pass | — | strongest alignment; `certified_variation_envelope` supplies the diff boundary |
| conformance engine | pass | partial | `current_practice_only` | episodic CI assumes episodic change; *"agents patrol, not only respond"* |
| propagation | pass | **fail** | `current_practice_only` | at agent scale propagation **creates** the review bottleneck; control inheritance + `automation_review_sampling_policy` |
| fleet reconciliation | pass | partial | `current_practice_only` | *eliminate accidental drift; preserve authorized variation; preserve protective redundancy* — pure reconcilers cannot express this |
| observability / drift | pass | partial | `current_practice_only` | *"a system can suffocate on its own observability"*; detection is solved, **attention economics is not** |
| agentic workbench | pass | pass | — | best-covered; anti-patterns pre-named |
| exception / debt | pass | partial | `current_practice_only` | *exception-capacity scales first*; expiry-based lifecycles assume a human clears the queue |

**The single finding (`G1-FIND-06`):** every flagged mechanism assumes **elastic human review capacity and episodic change.** The registries converged independently on the inverse. **The scarce resource in the 2030 operating model is verified human judgment, not authored artifacts** — and §5.1's four roots must be designed against that scarcity, not against authoring throughput.

---

## §9 — The operating model — proposals

### §9.1 — `AB-08`: **PROPOSED disposition, fixture-gated. NOT closed.**

*(R0 said "CLOSED HERE." Withdrawn — §0.)*

**Proposal: the granularity question is malformed. Neither B's 17 classes nor A's 5 tiers is adopted.** The question presupposes one flat enum, and OMNI has diagnosed and fixed this pathology once already: Care §5b.1 states its earlier single enums were *"malformed"* and decomposed them into orthogonal axes. This is `D0THES-GRD-026` — payload-noun ≠ domain — applied to artifacts.

**Two objects, not one — and R0 conflated them:**

- **Passport** answers *"may I rely on this, for what, at what maturity?"* — a small set of independent axes carried in the document.
- **Descriptor** (plan §3.1, already specified) answers *"how does a machine resolve this?"* — canonical identity, version, owner, dependencies, supersession, applicability, profile inheritance, variation, deployment targeting.

R0 listed descriptor fields as passport axes. Corrected: **the passport stays small; the descriptor carries resolution.**

**Proposed passport axes** — R0's six, with two corrections: `governance_category` · `architecture_role` · `authority_maturity` · `scope` · **`plane`** ⟂ **`viewpoint_or_view`** *(R0 fused these; 42010 distinguishes a viewpoint from a view, and OMNI's P0–P6 planes are a third axis)* · `build_evidence_maturity`.

**Proposed role additions** (all six verified absent from the ratified index): `standard` · `pattern` · `operating_profile` · `conformance` · `controlled_vocabulary` · `view`. **`AB-25`'s threat/misuse case is reclassified** — it is an **assurance viewpoint**, not an architecture role.

**The count is not the decision.** `architecture_role` is an open registry extended by governed architecture change. Hard-coding a role count creates the maintained duplicate that reopened `C-11`/`C-12`.

**Closure condition — this is what makes it fixture-gated rather than asserted.** `AB-08` closes when the model classifies this set with no ad-hoc exception: Reactor · GCE · a domain contract · an operating profile · a deployment profile · a viewpoint and its view · a cross-cutting standard · a reusable pattern · a generated effective snapshot · a conformance suite · implementation proof · a proposed-but-unaccepted decision. **R1 has not run that set.** Recorded as **`G-08`**. Note that Tier-0 #14 §4's one-pass substrate test currently **fails** for this axis (§4.1) — it is a taxonomy over documents with no substrate slice, which is the honest reason it stays proposed.

### §9.2 — Shared mechanisms, change, information, conformance, portability

**`C4.4 §R` → universal core + triggered overlays** *(`AB-01`; corrects R0)*. Verified against source: §R applies a **13-question template** across `R.1`–`R.17`, and **both** claimed absences are real — there is no *"what it may NEVER own"* slot, and no *"how is it replaced"* exit path. Q12 is procurement posture; *"replaceable/swappable"* covers design-time pluggability only.

R0 proposed making all fifteen questions mandatory for every mechanism. **Withdrawn** — that manufactures ceremony and produces well-formatted sludge: every mechanism forced through privacy, federation, runtime, retention and procurement headings whether or not they bear.

> **Universal core — seven, for every cross-cutting mechanism:** purpose and constitutional boundary · semantic ownership **and explicit non-ownership** · inputs/outputs/lineage/proof · authority-admission-commit relationship · lifecycle, failure, correction, closure · applicability and profile variation · **replaceability and exit obligations**.
>
> **Triggered overlays — only when material:** data custody/privacy/retention · federation and trust transfer · clinical or safety consequence · agent runtime · vendor/procurement · fleet and deployment · conformance and observability.

**`C4.4 §R` remains the Knowledge-Reservoir / Source-Estate profile of that shape.** It is not silently promoted to universal master template. Cross-arc extension still requires the C4.4 domain owner (`G-07`).

**Shared-mechanism standard candidate** *(`AB-02` · `AB-03` · `INV-14`)*. Loss of a shared non-owning mechanism must never **silently transfer authority, fabricate correctness, or create false certainty**; it may reduce availability, freshness or verifiability, and must **expose the degradation and fail closed where consequence requires**. A shared mechanism may compute *allowed/correct/equivalent/binding* **only as an attributed, versioned result for a named principal, basis, policy and scope** — never elevated into universal truth or another principal's commitment. And `INV-14`: *anything defining envelope, addressing, time and conformance exercises power* — **abandon neutrality as a goal; pursue minimality plus exit.** That is why the core's seventh question is the exit path.

**Change manifest** *(`AB-07`)*. Contributes four fields plan §3.1 lacks: rationale · **refusals** · conditions · rollout. **`refusals` is load-bearing**: a manifest recording approvals but not refusals cannot satisfy `INV-30` and silently converts a blocking domain-owner objection into an absent approval. With §3.4, refusals are first-class terms in the decision condition.

**Information and evidence contract** *(`AB-15` · `AB-16` · `AB-17` · `AB-24` · `INV-05` · `INV-07` · `INV-13` · `INV-17` · `INV-21` · `INV-23` · `INV-28` · `AB-14` · `INV-12`)*. Atomic statement = **one issuing principal**, many actors/signers/witnesses/dissents; collective act = a composite with its own identity, a named body, a **decision rule** (§3.4) and independently attributable constituents. Four orthogonal consent axes — `choice` ⟂ `communication` ⟂ `legal_effect` ⟂ `authority/source` — with **`overridden_by_law` a legal-effect state over a separately preserved refusal**, never a kind of consent. Degraded attribution is an honest class — *"received by fax from a claimed sender"* — never a manufactured signature. Protocol completeness ≠ legal formation. Continuity bundles import as **attributed evidence**. Every evidence graph is observer-scoped and must **expose known omissions**. An operator log proves **what the operator observed**. Source sovereignty is authority for **what the source committed or recorded**, not for the underlying reality. Portability is **relationship portability** — warrant re-anchoring and commitment novation, proven by drills. *(Care is FROZEN: consent axes route to G3 as proposals; Care is not edited.)*

**Conformance** *(`AB-04` · `AB-10` · `INV-25`)*. A conformance result is an **attributed claim** (issuer · profile · version · environment · exceptions); plural certification is **not** adopted. Technical conformance ≠ legal compliance ≠ counterparty acceptance. The rejected two-implementation mandate is replaced by an **independence-proof ladder** whose strength rises with consequence and lock-in — the same risk-tiering shape RBAC already uses for attestation.

### §9.3 — Profiles, variation, jurisdiction

**Two orthogonal axes** (charter §6.1): **operating-area profile** (*how does OMNI do this kind of work*) ⟂ **deployment profile** (*how does this instance run*). Collapsing them makes every customer deviation look like an architecture change. **Variation points** (charter §6.2) are the mechanism: inside a declared variation point is configuration; outside it is an architecture change. **Jurisdiction is a required profile axis** — the architecture must *express* the variation; the legal answers are out of scope. **`INV-18`**: one logical instance ≠ one authority domain — separate the **logical instance** from the **principal cell**; Federation's composite six-tier `tenant_id` is the substrate, and the deployment profile is a projection over it, not a second tenancy model. Resolution must be deterministic for an explicit `as_of` and **fail closed with a named owner** on contradiction.

### §9.4 — Release, adoption and fleet — corrected by fixture 5

**R0 made local admission a universal fleet rule. Withdrawn.** `C4.4 §R.16`'s `publish → admit → use-under-grant → revoke` is real and inherited, but *who may refuse* depends on the deployment posture — and Tier-0 #14 §1.5.2's four coexistent operator abilities already predict which:

| Posture | Adoption | Basis |
|---|---|---|
| **OMNI-managed** (Powered-by-OMNI; OMNI is the engine) | some security, legal and compatibility changes are **mandatory**; OMNI may activate | ability 1 |
| **Operator-controlled** | adoption **scheduled within a governed support window** | abilities 2 + 4 |
| **Sovereign federation member** | **local admission is genuinely independent** — `§R.16` applies in full | ability 3 |

**Skew must be typed, not normalized.** R0's *"version skew is a normal operating state, not an incident"* is true for one type and false for the rest: `authorized_variation` · `tolerated_transition_skew` · `supported_older_version` · `incompatible_skew` · `policy_violation` · `security_revoked` · `quarantined` · `unsupported`. The registry already settles the direction — *eliminate accidental drift; preserve authorized variation; preserve protective redundancy.*

**And the distinction fixture 5 surfaced, which no carrier states:** OMNI's right to **stop claiming a deployment conforms** is not the same as a right to **change** it. A sovereign member may refuse an upgrade forever; OMNI may withdraw the conformance claim, the support commitment and the network participation. **Governance by attestation withdrawal, not by remote control** — the mechanism that lets local sovereignty and constitutional integrity coexist across a thousand deployments. Recorded as **`G-09`** for G3.

**`INV-26`**: federation governance may publish and may restrict **its own** services; it may **not** record adoption for a member. **`§R.16` Amendment-3 transfers**: a discrete release is a closable package; fleet reconciliation is a continuous relationship with bounded epochs and watermarks. Forcing a feed into a closable package is the named error.

### §9.5 — Human factors *(`AB-32`, with `AB-27` to G4)*

FAI retains a human-factors/safety **viewpoint**, cognitive-load and interpretability requirements, the rule that **projections must not become de facto authority merely by being easier to consume**, and conformance hooks for hidden uncertainty, unsafe delay, alarm burden, false clinical gating and explanation integrity. FWREG owns only the full research programme. `AB-27` is the falsifier this viewpoint exists to catch — a falsifier of `D0THES-DEC-033`, not a duplicate of it — and blocks G4 as a negative test.

### §9.6 — The operations loop, bound to the grammar

Loop stages are act classes: evidence/classification/proposal/impact/conformance/migration agents hold **propose** · owner review holds **approve**, and a domain-owner objection **blocks** · integrator holds **ministerial integrate** (§4.2 scenario 6's four-way split) · fleet agent **publishes**, and publication is not adoption · observer agent **proposes**, never silently rewrites. Every run pins the §3.3 replay set applied to the build plane.

**Graph semantics** (plan §3.1 relations) under three constraints: **`owns` is not authority** — a graph edge must never be read as a grant · **`specializes` may constrain and never loosen** · **the graph is generated from descriptors, never hand-maintained beside them.**

---

## §10 — Ledger: semantic receipt

**R0's coverage map is withdrawn.** Presence of an identifier is not discharge — the `C-11`/`C-12` failure class. Rows are grouped where they share one verdict and destination, per the ledger's own granularity rule (*duplicates may be grouped; every source passage stays cited*).

**Fields:** *inherited requirement* → *G1 verdict* → *resulting law or bounded deferral* → *destination* → *acceptance condition*.

| Rows | Inherited requirement | G1 verdict | Resulting law / deferral | Destination | Acceptance condition |
|---|---|---|---|---|---|
| `AB-01` | shared-mechanism disclosure form | **inherited + extended**; both claimed absences verified real | universal core (7) + triggered overlays; §R stays the knowledge/source profile | §9.2 | C4.4 domain owner accepts the cross-arc extension (`G-07`) |
| `AB-02` `AB-03` `INV-14` | loss test · minimality budget · non-neutrality | **adopted narrowed**, composed into one standard candidate | three clauses; exit path becomes core Q7 | §9.2 | `architecture_steward` accepts as a standard candidate |
| `AB-04` `AB-10` `INV-25` | conformance evidence and claim shape | **adopted narrowed**; two-implementation mandate stays rejected | attributed claim; independence ladder; no plural certification | §9.2 | steward accepts |
| `AB-05` `AB-06` `INV-24` `INV-26` | local admission; skew; fleet desired state | **inherited + CORRECTED by fixture 5** | three postures; typed skew; attestation withdrawal (`G-09`) | §9.4 | steward + Federation domain owner |
| `AB-07` | change capsule | **adopted narrowed** as input to §3.1 | four fields; **refusals first-class** | §9.2 | steward accepts at G2 schema |
| `AB-08` | artifact taxonomy granularity | **PROPOSED, fixture-gated — NOT closed** | malformed question; passport ⟂ descriptor; 6 axes with plane ⟂ view split | §9.1 | the 12-artifact fixture set passes (`G-08`) |
| `AB-11` | external mechanisms as named inputs | **partially discharged**; obligation re-routed, not waived | four concept-borrowing mechanisms still owed at G1; adapter comparison → G2 | §5 · §7.4 | `G-05` discharged |
| `AB-12` | governance self-hosted on OMNI's primitives | **discharged by fixture, not by assertion** | four-object seat model; proved against the live C-10 receipt | §3.5 · §4.1 | steward accepts; receipt fields split (`G1-FIND-04`) |
| `AB-14` `INV-12` `INV-13` | portability is relationship portability | **adopted narrowed** | novation + re-anchoring + drill proof; fork rights → operator | §9.2 | steward; operator decides fork rights |
| `AB-15` `INV-17` | one issuer vs collective assertion | **adopted narrowed** — fork dissolved | atomic statement / collective act, with §3.4 decision rule | §9.2 · §3.4 | steward accepts |
| `AB-16` `AB-17` `INV-05` | consent state modelling | **adopted narrowed**; **routed, not applied** | four orthogonal axes; silence is `unknown` | §9.2 → **G3 Care** | Care domain owner, post-forensic |
| `AB-24` `INV-07` `INV-21` `INV-23` `INV-28` | degraded attribution · protocol completeness · observer scope · source sovereignty · audit scope | **adopted** | five clauses of the information contract | §9.2 | steward accepts |
| `AB-25` | adversarial principals | **adopted, reclassified** | assurance **viewpoint**, not an architecture role | §9.1 · `G-04` | steward accepts at G2 |
| `AB-26` `INV-16` | candour penalty as standing falsifier | **adopted narrowed**; register must exist | §12.1 is the register; **no design response, by design** | §12.1 | exists — condition met |
| `AB-30` | jurisdiction variation | **adopted narrowed** | required profile axis; legal content → FWREG | §9.3 | steward accepts |
| `AB-32` | human factors | **adopted narrowed**; R0's routing-out stays reversed | viewpoint + conformance hooks retained | §9.5 | steward accepts |
| `INV-03` `INV-04` `INV-19` `INV-29` | signature ≠ authorization; delegated engines; no global authority graph; professional vs organizational | **adopted narrowed** | attributed authority claims + verifier-specific acceptance projection | §3.3 · §3.7 | RBAC domain owner at ratification |
| `INV-10` | agent action classes | **adopted, RETYPED** | durable invariants vs profile constraints — R0's categorical table withdrawn | §3.6 | steward accepts the split |
| `INV-15` | patient asymmetry inversion | **adopted as law candidate**; **routed, not applied** | rights requiring patient action modelled as unexercised | → **G3 Care** | Care domain owner |
| `INV-18` | logical instance ≠ authority domain | **adopted** | principal cell separate from logical instance | §9.3 | Federation domain owner |

**Honest state: 40 rows carry `blocks G1`; every one has a verdict, a destination and an acceptance condition; ZERO are closed by this file, because closing is not this seat's act.** Six non-G1 `open` rows (`AB-19` `AB-20` `AB-22` `AB-23` `AB-29` `AB-31`) are carried forward unchanged, with `AB-29` sharpened by §4.1's shared root.

**`G1-FIND-01` (checkpoint §4 vs ledger `blocking_scope`) stands** — the checkpoint enumerates seven rows as G1 closure conditions while the ledger's per-row field puts three at G3 and three non-blocking. The ledger hosts the schema; the checkpoint hosts none. Reported, not repaired.

---

## §11 — Verdict

> ### `NOT_CONVERGED__TWO_SCENARIOS_PARTIAL_ON_UNREACHABLE_COUNTERPARTY_SEMANTICS`
>
> **Recommended by `proposal_authoring`. Not self-accepted.**

**This is decided by the plan's own criterion, not by caution.** `§G1-AUTH` states: *"the model is not converged until each [scenario] resolves without inventing new authority."* Scenarios 10 and 11 do not. **Two unresolved scenarios means not converged — the rule admits no partial credit, and R0's `MODEL_CONVERGED_WITH_NAMED_GAPS` hedged on the wrong axis** (maturity of inputs) when the binding criterion was scenario resolution all along.

**What did converge, and should not be relitigated:**

- **The grammar** (§3.1) — recognized, not authored; grounded in Tier-0 #14 and Reactor; reconciled by the ratified `D0THES-REV-045` compositional method; **passing Tier-0 #14 §4's one-pass substrate test.**
- **Seven views, one object** (§2) — with the explanation of *why* nobody reconciled them, which is what stops the next arc re-deriving.
- **Self-hosting, demonstrated** (§4.1 fixture 1) — the model represents its own live authority basis and produced a concrete receipt repair.
- **The durable/profile split for agents** (§3.6) — the constitution stops encoding 2026.

**What remains, and it is small and specific:** one semantics — *an authority act requiring a second party's acknowledgment when that party is unreachable*. It blocks two scenarios, and it belongs to `AB-29`, which already exists, already has an owner, and already blocks G3.

**The honest read: this is one bounded semantics away from convergence, not a redesign.** `NOT_CONVERGED` here is a stronger and more useful result than R0's hedge, because it names exactly what would close it.

---

## §12 — Uncertainty register, gaps, findings

*(This section discharges `AB-26`/`INV-16`: the register must exist, and the candour penalty is carried as a standing falsifier rather than a solved problem.)*

### §12.1 — Standing falsifiers — these do not close

| # | Falsifier |
|---|---|
| **F-01** | **Candour penalty.** Rigorous attribution raises liability exposure, which rationally reduces candid documentation and pushes reasoning into side channels. *"The better it works as proof, the worse this gets."* **No design response. Any future claim to have solved it should be treated as suspect.** |
| **F-02** | **The view becomes the truth** (`AB-27`). If views are the only usable surface, projections become authoritative in practice and the attribution plane is decorative. Falsifier of `D0THES-DEC-033`; required G4 negative test. |
| **F-03** | **Multiplicity is not corroboration.** *"Five agents on one model ≠ five opinions."* PRE-0 demonstrated it on itself; **R0 stated this falsifier and then violated it in scenario 5.** Permanent methodological check on every multi-agent pass, including this one. |

### §12.2 — Named gaps

| # | Gap | Owner (seat) | Trigger | Blocks |
|---|---|---|---|---|
| `G-01` | **Narrowed.** Decision-rule *grammar* landed at §3.4; thresholds/quorums remain profile configuration | Care + RBAC domain owners | first process requiring quorum | non-blocking |
| `G-02` | Seat-holder **transfer** and **suspension** undefined | `architecture_steward` | G2 register design | **blocks G2** |
| `G-03` | **Widened by fixture:** unreachable-counterparty semantics — break-glass co-attestor **and** revocation acknowledgment | `architecture_steward` (Reactor/Care/Runtime) | G3 deep reconcile | **blocks G3** — folded into `AB-29` |
| `G-04` | Adversarial-principal **assurance viewpoint** has no home | `architecture_steward` | G2 metamodel | **blocks G2** |
| `G-05` | **Narrowed** to four concept-borrowing mechanisms (42010 · FHIR · SEI · IHE); adapter comparison re-routed to G2 (§7.4) | `proposal_authoring` under steward | before G3 | **blocks G1 acceptance** if the steward requires full Lane-1 discharge |
| ~~`G-06`~~ | **CLOSED** — Tier-0 #14 read in full; materially changed §2 | — | — | — |
| `G-07` | `C4.4 §R` generalization is cross-arc | C4.4 domain owner | G1 acceptance | **blocks** `AB-01` discharge |
| `G-08` | **New.** The `AB-08` 12-artifact fixture set is unrun | `architecture_steward` | before `AB-08` closure | **blocks** `AB-08` |
| `G-09` | **New.** Attestation withdrawal as the governance mechanism for sovereign deployments is unstated in any carrier | `architecture_steward` + Federation owner | G3 | **blocks G3** fleet model |

### §12.3 — Findings routed out

| # | Finding | Route |
|---|---|---|
| `G1-FIND-01` | **R8 and R9 current-state surfaces are stale**, and the catalog rows describing them contradict them. Checkpoint §4 diverges from the ledger's `blocking_scope`. | `architecture_steward`: normalize or explicitly retire R8/R9 banners so the checkpoint is the sole current-state owner; replace checkpoint §4's enumeration with a pointer to the ledger field |
| `G1-FIND-02` | `rbac_authority_contract.md` §5 contains **two different four-member lists**; a build reader will conflate them | RBAC domain owner at ratification |
| `G1-FIND-03` | The most precise composition statement (the nine-term meet) sits at the **lowest** maturity — a precision/maturity inversion, which predicts future re-derivation of the imprecise version | steward — promotion is not this gate's act |
| `G1-FIND-04` | The **G0 receipt** conflates *exercising actor* with *accountable principal* (`integration_holder: Opus`) | steward — **a receipt edit, not an architecture change** |
| `G1-FIND-05` | Plan §1's *"nothing exists"* and R0's *"nothing is net-new"* are equal and opposite overstatements | plan correction: adopt §6's six maturity states |
| `G1-FIND-06` | Every flagged operations mechanism assumes **elastic human review capacity and episodic change** | G2/G3 design constraint |

**Guardrail candidates — captured, NOT promoted** (`GRD-036`). Writing to `06_guardrail_antipattern_digest.md` is a Tier-0.5 boot-visible rule change, which `proposal_authoring` may not make. Routed to `architecture_steward`:

1. **Correct-but-partial views do not trigger conflict detection.** Every repair mechanism in the estate — supersession, open-review, guardrails — is conflict-triggered. When several carriers hold **non-contradicting partial views of one unnamed object**, nothing fires and every new arc draws the missing face again. **Re-derivation is the predicted behaviour of a correct estate with an unnamed object.** Detection requires asking *"what is this a view of?"*, not *"does this contradict?"*
2. **String presence is not semantic discharge.** A machine check that an identifier appears is coverage. Discharge requires requirement → verdict → destination → acceptance condition. *(R0 committed this after quoting the ledger diagnosing it.)*
3. **A model that cannot represent its own authority transaction has not been self-hosted.** Make the live governing transaction the mandatory first fixture of any authority model.
4. **Deleted eternal claims return as tables.** R8 deleted three metaphysical agent claims in prose; R0 reintroduced them as a categorical matrix. **Deletions need a durable/profile split, or they re-enter through the schema.**

---

## §13 — Scope compliance

No `/architecture` package created — that is G2, behind a Build Entry verdict. **Nothing minted; nothing closed; nothing promoted.** No `consequential_transition` object, table, service or plane. Reactor **not** promoted — §2.5. Care **not** edited (FROZEN; consent axes and `INV-15` route to G3 as proposals). `C4.4 §R` **not** edited (`G-07`). R8/R9 **not** normalized (`G1-FIND-01` — accepted gate carriers are not this seat's to write). The G0 receipt **not** edited (`G1-FIND-04`). `06_guardrail_antipattern_digest.md` **not** written. Insurance untouched. **No checkpoint repoint** — G1 is not closed. No market/moat claim beyond mechanism comparison; §5.2 states a strategy consequence of an existing acceptance test, not a commercial forecast.

---

## §14 — STOP RECEIPT

| Field | Value |
|---|---|
| Artifact | FAI **G1 operating-model carrier R1** |
| Gate | G1 — converge the operating model |
| Author seat | `proposal_authoring` |
| State | **`proposed`** |
| R0 → R1 | 11 objections checked against the repository; **10 upheld and applied**, 1 partly declined with reasons (§7.4) |
| Ledger | 40 `blocks G1` rows carry verdict + destination + acceptance condition (§10). **ZERO closed here.** `AB-08` **proposed, fixture-gated** |
| `§G1-AUTH` | **seven views, one object** (§2); grammar recognized not authored (§3.1); four-object seat model **proved against the live C-10 receipt** (§4.1) |
| Proof | **5 fixtures run** — 2 represent-with-correction, 3 partial. **11 scenarios re-run** — 9 represent (7 only after correction), **2 PARTIAL** |
| Tools | 9 rows, four-part disposition + required verdict: 2 adopt · 3 narrow · 4 defer · **0 constitutional rejections** (R0's merge-queue rejection withdrawn) |
| Frontier | 7 of 10 `current_practice_only` |
| `M-106` | R0's *"zero net-new"* **withdrawn**; replaced by a six-state inheritance-and-residual matrix (§6) |
| Boot | **freshness check does NOT pass byte-clean** — R8/R9 stale (§0.1). `G-06` **CLOSED**: Tier-0 #14 read |
| Minted | **nothing** |
| Recommended verdict | **`NOT_CONVERGED__TWO_SCENARIOS_PARTIAL_ON_UNREACHABLE_COUNTERPARTY_SEMANTICS`** |
| Next | Steward + affected domain owners review. **One bounded semantics** — authority acts requiring an unreachable counterparty's acknowledgment — closes both partials. `G-05` and `G-08` should be discharged before acceptance. |

---

## §15 — Handoff (this carrier IS the Tier-2+ preservation artifact)

**Why no separate `HANDOFF_*` file.** A third description of current state beside the checkpoint §1 and §14 is the maintained-duplicate failure that reopened `C-11`/`C-12`, whose root cause is *"correcting a copy leaves the copy."* This section adds only the Handoff Minimum Contract fields the carrier lacks.

**Changed files:** the carrier (rewritten R0 → R1) · `01_master_corpus_catalog.md` (+1 row) · `04_manifest_read_graph.md` (route `9v` — **conditional child `9v-ii` until accepted**, per review; a proposed carrier does not belong in a mandatory read order). Governance edits stay in their own commit and are separately revertible.

**Verification run:** `node scripts/check-checkpoint-pointer.mjs` → pass. Ledger row set recomputed → 40, unchanged. Knox's R8/R9 staleness claim → **verified true and broader than reported**. Tier-0 #14 → read in full, path corrected to `doctrine/`. No TypeScript touched.

**Settled — do not relitigate without new evidence:** seven-views-one-object and why no mechanism fired (§2) · the grammar and its two concurrent tracks (§3.1) · the four-object seat model, fixture-proved (§3.5) · durable-vs-profile agent split (§3.6) · scoped default-deny (§3.7) · four roots over ten functions, and test 11 as commercial strategy (§5) · the four-part tool disposition (§7.1).

**Load order for the next agent:** `AGENTS.md` pointer → checkpoint → route `9v` (plan R8 → charter R9 → ledger R5 → this carrier). Gate sequence lives **only** in plan §5. Closure conditions live **only** in the ledger's `blocking_scope`, **not** the checkpoint §4 summary.

**Stop condition:** superseded when the `architecture_steward` and affected `domain_owner_approval` seats accept, amend or reject. The accepting transaction owns the checkpoint repoint, the ledger row transitions, and the `G1-FIND-01`/`G1-FIND-04` repairs.

**STOP: `g1_carrier_R1_proposed · 40_rows_verdicted_zero_closed · grammar_recognized · 5_fixtures_run · 2_scenarios_partial · NOT_CONVERGED_pending_unreachable_counterparty_semantics`**
