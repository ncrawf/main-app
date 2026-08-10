# v4 — FAI — PRE-0 — Architecture Preflight: protocol, briefs, and reconciliation obligation

Document type: `handoff_or_readiness_gate` (operator-authorized preflight; **NOT an arc gate**)
Authority: `analysis_nonbinding`. Binds nothing. Mints nothing.
Status: **`pre0_protocol_authored · awaiting_operator_run`**
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: the read-only preflight that pressures the FAI plan **before** G0 accepts it.
Manifest action: `add_tier2` **PROPOSED** — not landed.
Review gate: `user_knox_required`

> **PRE-0 is not a gate.** The execution plan has not been accepted, and an unaccepted plan must not authorize its own pre-gate. **PRE-0 runs on operator direction alone.** Its output is evidence for G0 **and a standing input to G1 and G3** (§4). **The arc still begins at G0.**

---

## §1 — Two different tests. Do not conjoin them.

R4 said a blind counter-design *subsumes* a plan review. **That was wrong and is withdrawn.**

| | Blind counter-design | Plan audit |
|---|---|---|
| Asks | *what should this be, from first principles?* | *is THIS plan overbuilt, contradictory, mis-sequenced, or unable to produce what it promises?* |
| Sees | the problem only | the exact charter and plan |
| Finds | architecture we did not imagine | ceremony, circular authority, bad ordering, undeliverable promises |
| Cannot find | whether our plan is executable | anything we failed to conceive |

**Both are required. Neither substitutes for the other.**

---

## §2 — The minimum evidence lenses for this arc *(answering "are there more inputs?" — a floor, not a closed taxonomy)*

The operator named three. **There are five, and the two additions are free.**

| # | Input | Question it answers | Where it runs |
|---|---|---|---|
| 1 | **Fresh alternative design** | what *should* this be, unanchored by our decomposition? | **PRE-0 agents A + B** |
| 2 | **Estate inventory** | what is it already *trying* to be? | G1 Lane 2 + Lane 3 · G3 |
| 3 | **External comparators** | how do mature systems solve this? | G1 Lane 1 |
| 4 | **The failure record** ★ | what must it *survive*? | **PRE-0 agent C + reconciliation + G1 + G3 — deliberately NOT A/B** |
| 5 | **Consumer requirements** ★ | what do its *users* need — cold builder · domain owner · integrator · operator/federation · release/fleet · runtime agent · auditor? **Routing is one consumer, not the lens.** | acceptance tests 1–11 |

**Why 4 and 5 are not covered by 1–3.** Designing from first principles produces what is elegant; designing from comparators produces what is conventional; **neither produces what survives *our specific* failure modes.** We have an unusually rich failure record — nine named modes, six months of evaporation, four stale-duplicate incidents — and **it is the most OMNI-specific input available and it costs nothing.** And input 5 inverts the frame: architecture designed for its author is why the estate is unnavigable; **designing from the cold entrant is what makes routing testable.**

---

## §3 — Protocol: THREE fresh contexts, one job each

**R4/R5 gave both jobs to the same two agents. Withdrawn — an agent auditing the plan right after producing its own design is anchored to its own design.** Knox is right and the fix costs one prompt.

| Agent | Job | Sees | Never sees |
|---|---|---|---|
| **A** | blind alternative design | §5 brief only | the charter · the plan · the package shape · Reactor's classification · the content/operations split · the tool decisions · the eleven tests · the four root requirements · **the failure record** · B's or C's work |
| **B** | blind alternative design | §5 brief only | same |
| **C** | **independent grounded plan audit** | exact charter **R6** · exact plan **R5** · this protocol · the handoff and failure record | **A's and B's submissions** |

**Distinct model families where possible. No voting. Agreement between models is not corroboration. No model authors the architecture.** A fourth is added **only** if a submission fails its brief or A and B expose a material unresolved contradiction.

**Why C never sees A and B:** C's job is *"is THIS plan sane and executable,"* not *"is this plan as good as someone else's design."* Contaminating C turns an audit into a comparison, and the comparison is the reconciler's job, not C's.

**Why A and B never see the failure record:** it would tell them our answer. **The failure record pressures C, the reconciliation, G1 and G3 — not the blind designers.** *(Knox's catch; R5 had it feeding the Stage-A brief, which was wrong.)*

---

## §4 — ★ The anti-appetizer rule: the comparator is RECONCILED, not discarded

**The operator's sharpest correction, and it is the failure mode this whole arc exists to fix:** *"Don't have agents build a comparator then discard it when it's time to write the actual artifact."* **That is exactly what happened in the Insurance arc — beautiful prose in-thread, evaporated before the artifact.**

> **Every finding from both Stage-A submissions is entered as a row in `v4_FAI_PRE0_reconciliation_ledger_2026-08-09.md`, and G1 and G3 CANNOT CLOSE until every row carries a disposition.**

Dispositions, fixed in advance: **`adopted`** · **`adopted_narrowed`** · **`already_present`** (with the OMNI carrier named) · **`rejected_with_reason`** · **`out_of_scope`** (with destination) · **`open`** (with owner).

**This reuses the estate's own machinery** — Gate-1b §15.1 part E: *a named consuming gate that cannot pass without disposing of the finding.* **PRE-0 is not an appetizer for G0. It is a durable input to the authoring gates.**

### §4.1 The defect rule, corrected
R4 said *"anything the blind designs produce that our arc cannot reach is a plan defect."* **Too broad — withdrawn.** Blind agents will produce generic enterprise assumptions, vendor-captive shapes, one god-ontology, unnecessary infrastructure, and designs that violate independent-principal physics.

> **The plan is defective only where it cannot express, evaluate, adopt, reject or disposition a *materially necessary* capability or relationship surfaced by the counter-design.**
> **Difference is evidence. Difference is not authority.**

---

## §5 — PROMPT 1 — BLIND DESIGN BRIEF · for AGENTS A and B *(paste verbatim; add nothing)*

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

## §6 — PROMPT 2 — PLAN AUDIT · for AGENT C *(with exact charter R6 + exact plan R5 + this protocol + the handoff; NOT A's or B's work)*

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

**Both "fatal omissions" AND "removable machinery" are required outputs.** An audit that can only add scope is not an audit.

**Terminology, fixed:** A and B produce **model-generated alternative designs**. They are **NOT external comparators** — those are the primary-source mechanisms examined at G1 Lane 1 (ISO 42010 · FHIR/IHE · SEI · AUTOSAR · Palantir · Backstage · IBM · LangGraph · OPA · OpenTelemetry). **A model proposal acquires no evidentiary standing by being preserved verbatim.** Both are reconciled; they are not equivalent sources.

## §7 — Hard stop
**One reconciliation. At most one bounded amendment cycle. Then G0.**
`PLAN_SURVIVES` → straight to G0 · exact amendments → one bounded patch, byte review, G0 · materially incomplete or overbuilt → amend **only the affected part of the plan**; **do not restart from first principles.**
**No recursive blind rerun** unless an amendment changes the plan's fundamental decomposition. **After this, stop designing the design process.**

---

## §8 — Files this preflight uses
| File | Purpose |
|---|---|
| this file | protocol + both briefs + the reconciliation obligation |
| `v4_FAI_PRE0_agent_a_verbatim_2026-08-09.md` | **operator-populated.** Agent A blind design ONLY |
| `v4_FAI_PRE0_agent_b_verbatim_2026-08-09.md` | **operator-populated.** Agent B blind design ONLY |
| `v4_FAI_PRE0_plan_auditor_verbatim_2026-08-09.md` | **operator-populated.** Agent C grounded plan audit ONLY |
| `v4_FAI_PRE0_reconciliation_ledger_2026-08-09.md` | **★ AMENDMENT 8 (C-04): every material finding from Agent A, Agent B AND Agent C gets a ledger row and a disposition.** R5 guaranteed ledger entry for the Stage-A designs only; §8 preserved C's output, but **preservation is not disposition** — so a blocking plan defect found by C could have survived only in a verbatim file, recreating the exact anti-appetizer failure this protocol exists to prevent. **Agent C plan defects must be closed or explicitly rejected BEFORE G0.** A/B findings may flow into G1/G3 with a bounded disposition. **G1 and G3 cannot close with an undisposed row** |

**STOP: `pre0_protocol_ready_awaiting_operator_run`**
