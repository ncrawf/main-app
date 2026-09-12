# ECB Gate 0 — the operating model for timely, safe, accountable action across independently governed participants

Document type: `plan_or_roadmap` — **Gate-0 investigation charter**
Authority: `analysis_nonbinding` (`D0THES-GRD-036`). **Originates no doctrine, mints no name, accepts no architecture, promotes nothing.**
Status: `G0_R6_AUTHORED_PENDING_NICK_KNOX_REVIEW · arc_not_started · fai_untouched · catalog_registration_OWED`
Revision: **R6** — amends R5 (`0bbfa91c`). Log at `§16`. **Section numbering and question IDs are stable from R6; the R5→R6 map is at `§15.3`.**
Domain(s): `cross_domain` · `architecture_governance` · `federation` · `rbac_authority` · `cns_orchestration` · `ordered_fulfillment` · `d6_commerce` · `d3_scheduling` · `business_ops_workforce` · `d7_documents_consent` · `observation_measurement` · `clinical_memory` · `trials_research`
Lifecycle role: defines the investigation — its question, its inherited candidates, its ambition, its bounded mechanism, and the four outputs it must produce — **without deciding its answer.**
Source-of-truth relationship: **owns nothing.** Arc state belongs to `§1`.
Manifest action: `add_tier2` — **PROPOSED, registration OWED** (`§14`).
Review gate: `user_knox_required`

---

## §1 — Arc state *(this section owns it)*

```
Arc key:                 ECB  (work identifier only)
Inherited candidate:     EVRUN-2026-000012_02 §15 — ARCHITECTURE_CANDIDATE,
                         scoped to its run, explicitly NOT the only coherent
                         architecture. A candidate to test, not an answer.
Arc state:               GATE_0_R6_AUTHORED — NOT STARTED, NOT ACCEPTED
Gate 0 verdict:          none issued
Architecture accepted:   none
Name minted:             none
FAI relationship:        separate bounded object; FAI G1 untouched
Next act:                Nick + Knox accept / amend / reject
```

---

## §2 — The question

> **What operating model must OMNI realize so that people and independently governed systems can turn changing, incomplete context into timely, safe, accountable care and supporting business action — across individual, shared-operational, and population/network settings, including generated therapies and adaptive physical systems — and which existing, revised, or new mechanisms make that possible?**

**A valid result may conclude that the inherited candidate is sufficient, needs named extensions, needs a different decomposition, or is more elaborate than a requirement warrants. All four must remain reachable.** The arc is not a recovery exercise, a `REV-188` ticket closure, a universal industry-ontology project, or a rewrite of native domain lifecycles.

### §2.1 Two statements that must both survive, and must not be merged

The operator's instruction: *"if we derived the actual ambition, celebrated it, then diluted it down with the guardrail framing and discarded the ambition... then future us drifts, future us doesn't see the ambition."* **Correct, and the fix is not to choose between them.** Both are recorded, separately labelled, with an explicit rule that the second bounds *how* we pursue the first and **does not replace it**.

**THE AMBITION** — a declared strategic intention (`strategic hypothesis` basis, `§4`):

> **OMNI exists to make care act at the speed of the decision and the safety of the best available evidence — simultaneously — from a moisturizer sale to a trauma suite. Not a faster chart. Not a safer chart. An operating substrate on which a commitment can be made the moment it is warranted, and reconsidered the moment it should be, without anyone re-assembling the world by conversation first.** If OMNI cannot eventually stand behind *"we decomposed the physics, built the relationships, and built it for speed and safety"*, it has not earned its position.

**THE CONTRACT** — the bounded mechanism by which the ambition is pursued, and the only thing this arc may test:

> **OMNI is designed to reduce avoidable delay and preventable error by maintaining trustworthy, source-attributed context and explicit conditions for action; reusing what remains valid; rechecking what may invalidate the next act; coordinating resources and independent commitments; and carrying material changes to the authorities responsible for responding. It must remain honest about what is unknown and preserve necessary judgment, consent, verification, and continuing responsibility.**

**The relationship, stated so neither erodes the other:** the ambition names what we are reaching for and may be quoted by the company. The contract names what we will actually build and be measured on. **A guardrail that deletes the reach is a governance failure; a reach that hides the guardrail is a safety failure.** Both go to their homes in `§13.4`.

**And the target is timely *appropriate* action, not transaction velocity.** A faster unnecessary intervention is not an improvement. Sometimes the correct output is immediate action; sometimes fresh evidence, deliberation, refusal, or preparing adjacent work while one condition stays open.

---

## §3 — The speed mechanism, corrected: observation is not commitment

R5 claimed speed comes from preconditions being *"continuously known"* so a commitment can be made *"without re-verification,"* and that a change reaches *"exactly"* the dependent decisions. **All three are withdrawn.** The correction produces a sharper thesis than either R5 or the review.

### §3.1 What the tray example proves

Two procedures both read *"one sterile tray available."* **Both satisfy a precondition check. Neither can safely proceed.** A more frequently refreshed indicator does not help — this is time-of-check/time-of-use, and the fix is not a fresher check. **The fix is that one of them must be able to HOLD the tray.**

Generalising: **speed does not come from knowing a precondition is satisfied. It comes from being able to convert it into a held commitment.** *"One tray available"* is an observation and is worthless for making a promise. *"This tray is reserved for this case until T"* is a commitment and is the only thing a promise can rest on.

**This is what the industrial comparators actually do, and R5 mis-stated it.** Amazon is not fast because it knows inventory; it is fast because it can **reserve** inventory and therefore promise a date it can keep. An airline sells a seat, not a seat count. Stripe's idempotency key does not tell you a charge succeeded — it lets you **retry safely**, which is what permits speed under uncertainty. **In every case the speed comes from a commitment primitive, not from a fresher read.**

### §3.2 The corrected mechanism

`EVRUN-000012 §15`'s Layer-4 relations already separate the two kinds, and R5 lumped them:

| Kind | Relations | What it buys |
|---|---|---|
| **Evaluation** — is this condition supported by available evidence? | `requires` · `depends_on` · `permits` · `constrains` | knowing whether to proceed; **never a guarantee about the world** |
| **Commitment** — is this thing *held* for this act? | `offered_to` · `accepted_by` · `actualizes` · `blocks` | the ability to **promise**; exclusivity; the basis of speed |
| **Consequence** — what changes when something a decision rested on changes? | `invalidates` · `signals_reconsideration` · `supersedes` · `compensates` · `remediates` | the ability to **reconsider correctly**; the basis of safety |

> **Speed comes from holding commitments, not from fresher observation. Safety comes from knowing what to reconsider when a held commitment breaks or a relied-upon fact changes. Efficiency comes from discovering infeasibility at planning time rather than at execution time.**

**Why healthcare is slow, restated correctly:** healthcare mostly **cannot make commitments** across organizational boundaries — it can only make observations and conversations. Nobody can reserve the tray, hold the OR minute, bind the supplier, lock the pre-auth, or pin the result's applicability. So every step is renegotiated verbally at the moment of need. **The delay is not missing information; it is missing commitment primitives.** `H-SPEED`.

### §3.3 What is bounded, and what is inherited

R5's overclaims are replaced by the estate's own already-correct formulations, which R5 under-inherited — the fourth such failure this arc:

```92:92:.cursor/plans/v4_C4_5_temporal_integrity_and_asof_reconstruction_pass_plan.md
T-15 — Execution revalidates the minimum-sufficient mutable reality + authority.** *(Knox-patched.)* At execution, revalidate the minimum declared action-critical facts + authority bases required by the governing contract (not a full world reread).
```

```81:81:.cursor/plans/v4_C4_5_temporal_integrity_and_asof_reconstruction_pass_plan.md
T-04 — "Current" is a defensible computation** over validity, freshness, source authority, adoption, contradiction, supersession, instrumentation health, external unknowns, purpose — NOT the newest-timestamp row.
```

**So the goal is less unnecessary reconstruction, never no verification.** Some repeated checking is waste; some is defence in depth, independent verification, current identity assurance, current patient preference, or protection against changed circumstance. **Repetition alone does not tell you which.**

**And "continuously evaluable" is not "continuously known."** A system maintains an assessment of declared conditions against available information; it cannot know reality across independent organizations, humans, devices and scientific processes. `REV-184` already holds the world model to be a **partial, time-stamped projection** with autonomy bounded by a trust horizon and out-of-band action preserved. **An observation being older than now does not make it false or unusable — freshness is action-relative.** A collection time stays a valid historical fact; an availability assertion stops being usable the moment someone else reserves the resource; an interpretation can change while the material does not. **No universal evidence half-life.** `§6` lists the temporal dimensions to test per profile rather than as required columns.

### §3.4 "Exactly the dependent decisions" is withdrawn

```20:20:.cursor/plans/v4_C4_3_care_response_seam_correction_continuity_test.md
10.1 — Correction impact is a governed, versioned assessment over distributed lineage and explicit uncertainty; it is not a correction authority.
```

**A reverse traversal cannot recover an edge that was never recorded.** A miscalibrated monitor may have failed to produce the very observation that would have created the dependency. A clinician may have relied on something outside the instrumented system. An external party may have used a returned result without reporting the use.

**Replacement:** identify the **confirmed** affected set, expose the **potentially affected / not-ruled-out** set and the **indeterminate** scope under declared coverage, initiate **proportionate action under the appropriate authority**, and narrow or widen as evidence improves. Exact reach is a property to test **inside a fully specified fixture with a declared coverage contract** — never a promise about the world. **Avoidable over-propagation and unsafe under-propagation are different errors with different costs; neither is axiomatically worse.** Graph reachability is neither authority nor causation.

---

## §4 — Exposing the basis of a claim *(softened from R5)*

R5 turned four useful distinctions into a mandatory exclusive box. **Withdrawn as an enum.** A requirement may legitimately combine physical limitation, institutional obligation, local policy, ethical commitment and empirical assumption — **mixed basis is not a defect.** Internal policy can be changed by its authorized owner; a model of reality can simply be wrong.

**The discipline is to expose the basis, not to file the claim.** When a claim is load-bearing, say which of these it rests on and in what proportion: **reality** (incomplete observation, irreversible action, consumed material, elapsed time) · **institutional/legal** (professional authority, licensure, data-use obligation, research/practice distinction) · **chosen commitment** (portability, neutrality, non-privilege, refusal to broker) · **empirical/strategic** (defensibility, adoption, burden reduction, measured benefit).

**The failure this prevents:** carrying a commercial hope as though it were a law of nature, which makes it unfalsifiable. **The failure it must not create:** ceremony that forces a box onto every invariant.

---

## §5 — Reality, and OMNI's relation to it

The operator asked whether we have ever declared this. **Not as one statement; the pieces exist in `REV-184` and C4.5.** Proposed integration — **not a new domain, plane or service:**

> **Reality includes people, physical processes, independent institutions, and events that may occur outside OMNI's knowledge or control.** OMNI maintains source-attributed observations, claims, adopted meanings, commitments, occurrences and derived views; **each view has a scope, a time basis, an authority basis, and stated limits.** Authorized humans and systems act through **bounded control relationships**; resulting evidence updates those views and may create, fulfil, revise or transfer obligations. **OMNI must distinguish the world, its representation of the world, its permitted influence on the world, and its evidence of what actually happened.**

The operator's *"stale microseconds later"* intuition needs one refinement: **the question is never whether a representation is current, but whether it still supports this particular use.** Perfect knowledge is not a prerequisite for bounded action, and uncertainty is not permission to act without an adequate basis.

### §5.1 The snapshot question — three objects are being conflated, and one does not exist

The operator: *"what are these reality packets or whatever that OMNI is or isn't delivering... here you go robot... here is the pre-op snapshot... is that a thing? do other companies do that?"* **This is a real architectural gap and neither review answered it.** Three distinct objects are being called "snapshot":

| Object | Direction | Job | Estate status |
|---|---|---|---|
| **Frozen decision context** | backward | what was known and relied on when the decision was made; **outcome reads it, never rewrites it** | `REV-184`, **signed off**; field-set deferred |
| **`as_of` reconstruction** | backward | what we can defensibly say we knew as of T, computed over versioned sources | C4.5 charter accepted; **pass not started** |
| **An action brief** *(no name in the estate)* | **forward** | what a specific actor needs for a specific authorized act | **does not exist** |

**The third is what a robot needs, and a copy of state is exactly the wrong shape for it** — a copy is stale on arrival, which is the operator's own intuition. What the act needs is a **standing condition set with a validity contract**, carrying: the minimum sufficient facts and their time basis (`T-15`) · **what must remain true throughout execution, not merely at authorization** · the authority under which the act proceeds and its scope · the **held commitments** it rests on (`§3.2`) · the fallback if a condition fails mid-act · an expiry, and who may revoke it early.

**Do other industries have this? Yes, and it is not called a snapshot.** A **takeoff clearance** is actor-specific, time-bounded, condition-bearing, revocable, and contains none of the airspace. A **permit-to-work** names the task, the isolations that must hold for its duration, the authorizing person, the expiry and the conditions that void it. **The mechanism is a clearance, not a data extract** — and OMNI has no equivalent. `Q-BRIEF`.

**The estate's nearest relative is CNS `§9.1`'s layered context packet, which already *references rather than copies* and preserves authority — the right instinct, but assembled for orchestration, not issued as a bounded permission to act.** Whether an action brief is a profile of that object or a distinct one is `Q-BRIEF-2`, and whether it is the same object as GCE's boundary exchange is `Q-BOUNDARY-2`.

---

## §6 — The six-robot trauma case: where does OMNI sit?

The operator's escalation is the right one and it must be answered concretely: a trauma suite with a vascular robot, an ortho hip robot, a lab-draw robot, a ventilator, a VTE prophylaxis device and continuous imaging — **three vendors and operating systems, five humans with their own AI agents, a device rep, backend vendors, the lab, the pre-op note, PACU status.** Six actuators on one body at once.

### §6.1 What actually couples them — and it is not their software

**The patient's body, the shared room, the shared resources, and the clock.** The vascular repair changes hemodynamics the ventilator is compensating. The ortho robot's positioning changes the vascular robot's working geometry. Imaging demands a room-wide hold and adds exposure to everyone present. VTE prophylaxis interacts with the bleeding being controlled. The lab result is stale before it is read. **None of that coupling runs through an integration.** Connecting their software makes the coupling visible and manageable — and also lets mistakes propagate faster.

**So the problem is not message routing. It is: who holds the right to change a shared physical variable at a given moment, and how does that right move at trauma speed?** That is mutual exclusion and arbitration over physical state — the same shape as the tray (`§3.1`), at seconds instead of days, with a body instead of an instrument set.

**And the protocol already exists, unrepresented, in the room.** Aviation has positive transfer of control — *"you have control" / "I have control."* The OR has the surgeon's authority and the anesthesiologist's veto, executed verbally. **That verbal arbitration is the mechanism, and nothing in OMNI models it.** `Q-ARB`.

### §6.2 Three answers, one of which is a real competitive threat

**(a) OMNI in the control loop — rejected.** OMNI must never be a hop in a device's immediate safety response. Device-local control and immediate safety sit at the device or a qualified local controller with its own timing and failure contract. **No unexamined remote round trip inside a safety loop**, and a device's safe local completion must not silently close broader clinical or business obligations.

**(b) The god robot — named, not dismissed.** The operator's own alternative: a single vendor performs the imaging, organizes the draw, coordinates the vent, and permits the vascular repair. **This is a genuine competitive path and a plausible one.** Its structural limit is exactly stated: **it works only while one vendor owns every actuator.** The moment the hip robot is one manufacturer and the vascular robot is another, someone must arbitrate — and **neither vendor can be trusted to arbitrate for its competitor.** A vendor arbitrating a rival's actuator is a conflict no hospital should accept.

**(c) OMNI holds the arbitration record and the authority model, never the actuation.** Who currently holds the right to change which variable · who may take it and under what conditions · what the transfer evidence is · what happens on loss of communication · and **what each participant was told, when, and whether it acted on information already superseded.** In the example: *the vascular team holds hemodynamic control from T1 to T2; the ortho robot holds positional control except during an imaging hold; imaging holds the room; and every transfer is recorded.* **That is `§15`'s custody model — change, execution, consequence — applied to a physical variable in real time, plus the black box.**

**The honest limit, stated rather than hidden: OMNI cannot arbitrate against a participant that does not accept the arbitration.** This is why `§15.8` already gates external capability exchange behind `REQUIRES_EXTERNAL_ACCEPTANCE`, and why the institutional-resistance test is mandatory (`§12`). **If a vendor refuses a protocol it does not own, OMNI records rather than arbitrates — and that degraded posture must be explicit, not silently assumed away.**

**Strategic hypothesis, labelled as such (`§4`):** the incumbent record system is in the room but models orders and documentation, not rights over physical state, and is not in the control path. A vendor is in the control path but cannot arbitrate a competitor. **Whoever holds the arbitration record holds the seat, and neither is structurally positioned to.** That is a hypothesis to be tested against institutional resistance, not an architectural claim.

---

## §7 — Inherited candidates, at their actual authority

**`EVRUN-2026-000012_02 §15`** — `ARCHITECTURE_CANDIDATE`, Gate-3 accepted **within its run**, binding nothing outside it, with the *"only possible coherent architecture"* claim **explicitly rejected** and some named lifecycle families possibly later proving to be **profiles** of existing lifecycles. Its five-layer account: **one risk-adaptive consequence constitution** where invariants **activate** per transition rather than being counted (*"a transition does NOT leave the constitutional family because one invariant has no activation condition in that instance"*) · **native lifecycle families** with `Care Resolution ≠ Sourcing Selection ≠ Fulfillment Execution` · **domain-owned authoritative records** — no central table, no universal episode truth, no universal obligation ledger, no projection that commits · **fourteen typed cross-lifecycle relations** each carrying source, authority, purpose, effective-time, visibility, evidence, supersession, proof · **governed projections that own and execute nothing, with no universal CNS executive.** Plus **three typed custodies** — change, execution, consequence — activating only on a real transfer.

**Its own open spans are the arc's work surface:** `REQUIRES_C5_DEDUP` (counterparty offer; equivalence/substitution) · `REQUIRES_RUNTIME_PROOF` · `REQUIRES_TASK_D + REQUIRES_EXTERNAL_ACCEPTANCE` (**external capability exchange**) · `REQUIRES_MARKET_VALIDATION`. **What it does not specify:** how predicates are evaluated under incomplete or conflicting evidence · how concurrent commitments are made safely (`§3.1`) · how ongoing physical constraints are maintained during execution · how biological design assumptions remain applicable · **or how any of it reduces burden.**

**Other principal inheritance:** `REV-184` (partial time-stamped world model; trust horizon; outcome reads frozen context) · **C4.5 `T-04`/`T-15`** (defensible "current"; minimum-sufficient revalidation) · **C4.3 `10.1`** (versioned impact assessment with explicit uncertainty; not a correction authority) · **`EVRUN-000012 _05 §5.4`** (policy-committable paths, exception-only human attention, avoided unnecessary reopening, **total-ecosystem burden including irreducible safeguards**) · **Care `§1a`** (the routing rule: classification unit is the contribution; nine tracks; seven ownership dimensions; payload-noun ≠ domain) · **Care `§1b`/`§19`** (universal vs care-specific, verdicted per dimension) · Care `§5b`/`§5b.1`/`§9a` · **GCE** (`D0THES-DEC-036`, **ratified**) · **`T0-14`/inv 29/`GRD-032`** (operator non-privilege) · P35 + `REV-188` (eight postures; owner **open**) · C3.7 `§11`/`§12` + `REV-189`/`REV-190` · C4.6 Rx L2 · `REV-141`/`163`/`174`.

**Evidence dimensions, per relied-upon claim, independently and unordered:** what is **specified** · what was **accepted and at what scope** · what **implementation was inspected** (or is unverified) · what **composition evidence** exists and of what kind (desk trace / executable fixture / observed operation). **Nothing recovered in six revisions carries observed-operation evidence.**

### §7.1 What is actually healthcare-specific

**Not** identity, typed relations, temporal state, commitments, permissions, custody, resource planning, version lineage, distributed controllers, failure handling or governed feedback — **none is a healthcare invention.** The ecosystem class is a socio-technical, cyber-physical system of systems, and OMNI is not that whole ecosystem; it is the governed care-and-business substrate designed to participate in one class of it within a managed scope.

**The specificity is the operating contract.** Care `§19` verdicts it per dimension across Care / Platform / Accountability as `SHARED-LAW · ANALOGOUS · CARE-SPECIFIC · OPEN` — **and `CARE-SPECIFIC` appears in ten places, not two as R5 claimed** — carrying its own caution that differentiation is *"enforced **composition**, NOT patient-authority alone."* The load-bearing distinctions: **the patient is simultaneously beneficiary and rights-holder**, not an asset whose owner sets the objective — preference, refusal, representation and relationship choice stay distinguishable from the organization's goals · **appropriateness ≠ permission ≠ availability ≠ affordability ≠ coverage ≠ readiness ≠ execution ≠ exposure ≠ benefit**, and none may silently impersonate another · **a delivered intervention is not proof of benefit; an observed response is not automatically causation; experimental model evidence is not automatically sufficient for an individual decision** · research and care may coexist with distinguishable purposes. **These difficulties are not exclusive to medicine.** Other sectors have vulnerable people, irreversible harm, independent authorities, uncertain evidence and conflicts of interest. **Healthcare specificity is the particular contract we must realize — not a claim that nobody else has hard coordination.**

**Posture: care-centred.** *"Not every operation is clinical"* is a routing fact; it does **not** demote care from the centre of gravity. R5's *"not clinical-first"* is withdrawn as contradicting that.

### §7.2 Cross-industry comparison — falsifiers, not product markets

Amazon-like fulfillment (offers, inventory, **reservations**, suppliers, shipment, custody, returns — but a customer order is not a clinical commitment) · oil operations (assets, contractors, permits, shared resources, maintenance — **a well is a focal entity, not the root of every crew or reservoir**) · scanner fleets (equipment identity, configuration, qualification, service — **readiness establishes no patient suitability**) · franchise plus food suppliers (corporate standards, independent sites, lots, **distributed recall** — but franchise authority and healthcare authority are not substitutable). **Reportedly** ISA-95/OPC already distinguishes materials, equipment, physical assets and personnel with roles and qualifications, and material definition from lot; GS1 EPCIS handles cross-enterprise event visibility; NIST CPS and IEEE system-of-systems frame the class. **Relayed, unverified here.** **Portability of modelling principles does not mean OMNI's software could run a refinery.**

**Palantir.** *"One ontology they control"* was withdrawn in R4 and stays withdrawn — the estate already verified cross-org ontologies and governed write-back, and **submission criteria combining user, object, relation and execution-context conditions mean "we make preconditions machine-checkable" is not a differentiator.** The useful comparison is mechanical: for one consequential operation ask both designs **what is authoritative · what may be stale · what is retried · what can execute twice · what cannot be rolled back · who accepts responsibility · what happens if the other organization refuses · which individual cases a later correction affects.** Keep **native, hosted and hybrid** realizations alive with identical invariant requirements — a realization choice settles neither semantics nor authority. **Representability does not deliver a care product; neither does native vocabulary.** An incumbent or entrant does not need a novel ontology to compete — only to make a valuable part of this arrangement work better.

---

## §8 — Hypotheses

`resolved` / `open` / `insufficient_evidence` are all permitted.

| ID | Hypothesis | Falsifier |
|---|---|---|
| **`H-SPEED`** | Healthcare is slow because **commitment primitives are missing across organizational boundaries**, not because information is missing; speed comes from holding commitments, not fresher observation (`§3`) | For tested operations, separate avoidable coordination wait from capacity queues, actual work, scientific/biological/manufacturing time, necessary deliberation, patient choice and institutional constraint. **If the wait is dominated by anything other than renegotiated commitments, the thesis is wrong.** *(R5's falsifier — "if frontier preconditions are long-lived" — was poorly formed and is withdrawn: the value could still come from reduced reconstruction, earlier preparation or less rework.)* |
| **`H-CONC`** | **Concurrent commitment is unspecified** — the inherited candidate names `requires` but no authoritative reservation, contention, expiry/revocation or execution-evidence semantics (`§3.1`, CWE-367) | the tray case: two actors, one resource, both checks pass. Name the owning transition, contention behaviour, expiry, evidence and recovery |
| **`H-ARB`** | **Arbitration of rights over a shared physical variable is unmodelled**, though it exists as verbal protocol in every OR (`§6`) | the six-robot case. Name who holds which right, transfer conditions and evidence, behaviour on comms loss, and the record of who acted on superseded information |
| **`H-BRIEF`** | **The forward-looking action brief does not exist** — the estate has frozen decision context and `as_of` reconstruction, both backward-looking (`§5.1`) | attempt to issue a bounded permission-to-act from CNS `§9.1` + `REV-184` + C4.5. If it composes, `H-BRIEF` narrows to a profile question |
| **`H-DUR`** | **Conditions that must hold *throughout* execution are unhandled** — initial authorization is treated as settling the act | an act whose conditions change mid-execution; name what is monitored, by whom, with what fallback and stopping capability |
| **`H-IMPACT`** | Impact reach is **bounded and uncertain**, not exact; some consequential relationships are unrecorded, unobservable or discovered afterward (`§3.4`, C4.3 `10.1`) | the miscalibrated-instrument case where outputs were used outside the instrumented system. **A complete reliance graph does not exist to traverse** |
| **`H-SCALE`** | The inherited candidate holds at the individual regime and has **never been tested** at shared-resource or population regime | run all three regimes (`§11.3`). Local correctness cannot establish global resource consistency, population privacy or network stability. **R5's blanket "never tested at wider scope" is softened: the prior adjudication discusses configuration reaching many patients and C4.3 contains cohort and cross-operator cases — what is unestablished is the full ECB scope** |
| **`H-BURDEN`** | The value chain — maintained evidence → less reconstruction → earlier dependency resolution → less rework → more timely appropriate action — **holds for some operations and not others, and the cost of the mechanism itself is unmeasured** | measure per `§12.2`, including **total ecosystem burden** on patients and counterparties, not only OMNI users |
| `H-READY` | No integrated, owned **readiness composition** has been located — Care `§5b` maps readiness onto operational state, Inventory and Runtime health, and `§14` separates work order, obligation and blocker projection, but nothing composes them against a scheduled act | trace the 30-item case through existing owners |
| `H-TRACK` | The physics apply to tracks with **no clinical owner at all** | run Care `§1a`'s routing rule on the readiness case. **The test is whether an applicable consequential responsibility lacks an owner — not whether every cell is populated** |
| `H-CAP` | **Capability formation from patient context** is unhandled — the candidate may not exist until specimens, experimentation and design produce it, and the process changes what is being evaluated | trace a patient-specific design with a material context change mid-manufacture; name what is revisable, what consumed scarce material, what needs a new commitment |
| `H-OPAQUE` | **Reliance on a valid-but-opaque assertion is unmodelled**; `GRD-017` forbids narration as explainability, so a candidate shape is an attested claim carrying provenance, evaluator independence, error characteristics, scope and expiry — without internals | a participant returns a valid answer and will never expose intermediates |
| `H-POSTURE` | Participation postures are **assigned, never earned**; nothing lets a participant earn a more permissive posture on evidence or be demoted on signal. **Performance evidence never independently confers professional authority or another organization's delegation** | attempt an evidence-driven posture change; name the evaluator and its independence (`D0OL-GRD-013`; Care `§9a` `correlation/independence class`) |
| `H-NP` | **Operator non-privilege is untested in both directions** | **affiliation test** — vary affiliation only, no privilege may appear. **Substantive-difference test** — vary delegation, credentialing, custody, jurisdiction, network placement or contractual responsibility; the difference must be **represented, not erased** |
| `H-SURV` | An episode identifier **is not a successor undertaking**; obligations may not survive operator exit, producer insolvency or consent expiry | name who retains or accepts the duty, how refusal is represented, what happens when no successor exists |
| `H-FRAME` | The care↔biology↔evidence↔research↔outcomes frame is not adequately reconciled or routed | attempt the composition from `§15` + `REV-189`/`REV-190` + GCE + P35 + Care `§1a`/`§9a`. **No claim about history or about why prior arcs omitted it** |

---

## §9 — Frontier pressures *(not reducible to one axis)*

R5 reduced the frontier to shortened precondition lifetimes. **Too narrow — a stable fact can be expensive to obtain, reconcile or apply, and a fast-changing fact can be irrelevant to the next act.** The pressures to preserve together: **generated interventions** (the capability may not exist until context, specimens, experimentation and design produce it) · **adaptive execution** (conditions change during an action; admission and initial authorization settle nothing ongoing) · **coupled participants** (independently acceptable actions interacting through physiology, resources, deadlines or objectives) · **multiple scales** (a local observation, batch, model release or policy change affecting many people and organizations) · **independent authority and incomplete visibility** (participants refuse terms, withhold intermediates, change posture, disappear) · **long-lived consequences** (exposure, monitoring, correction and responsibility surviving the original episode and its participants) · **and shortened validity where it genuinely occurs.** These are proof obligations, not predictions that every capability arrives by a date.

---

## §10 — Question set *(stable IDs from R6; R5 map at `§15.3`)*

**Meaning and identity** — `Q-ENT` what kinds of things exist and what the relations mean: person · organization · role · device · model · product definition · offer · lot · physical unit · specimen · aliquot · dataset · derived model · design · dose · observation · plan · reservation · exposure — **not freely substitutable** · `Q-ENT-2` the same moisturizer: catalog definition, vendor offer, physical unit, lot, purchase, aftercare instruction and recorded use are **distinct**; avoiding duplication ≠ one master object · `Q-ENT-3` **material derivation and information derivation are not successive statuses of one patient record**

**State, commitment, dependency, authority, projection, controller, runtime** — `Q-LIFE` valid creation/correction/transition/closure per authoritative record (a payment, order, result, permission and treatment relationship do **not** share one lifecycle because each has a status field) · `Q-PROTO` what a request, offer, acceptance, refusal, delegation, acknowledgment or handoff **means between parties**, and what may be inferred from silence, duplication, timeout, rejection or partial fulfilment · `Q-DEP` **what each typed relation does on change** — update a view · invalidate a candidate · block an unstarted act · demand reassessment of a completed act · create a notification duty · leave the act but alter follow-up. **A graph link alone does none of these**, and `supersedes`/`accepted_by`/`remediates` are not preconditions · `Q-CAUSE` physical and scientific effects need a causal model — **an ontology recording that two controllers influence one variable does not prove the interaction safe** · `Q-AUTH` who may assert, adopt, accept a duty, release a resource, execute, revise or grant use — data ownership ≠ corporate ownership ≠ custody ≠ execution ≠ professional accountability · `Q-PROJ` projection vs controller remit vs owner; **a derived artifact may still have identity, version and a governed lifecycle without owning authoritative state** · `Q-RUNTIME` where state lives, which component checks authority, what happens on delay or failure, which decisions need **current local** facts

**Commitment and concurrency** *(new — `H-CONC`)* — `Q-COMMIT` what makes a commitment **holdable**: authoritative reservation, exclusivity, expiry, revocation, contention behaviour, evidence, recovery · `Q-COMMIT-2` which preconditions **can** be converted into commitments and which can only ever be evaluated · `Q-COMMIT-3` cross-organization commitment where no party has delegated command

**The action brief** *(new — `H-BRIEF`)* — `Q-BRIEF` what a specific actor needs for a specific authorized act: minimum sufficient facts and their time basis · **what must remain true during execution** · authority and scope · held commitments · mid-act fallback · expiry and early revocation · `Q-BRIEF-2` is it a profile of CNS `§9.1`'s context packet or a distinct object · `Q-BOUNDARY-2` is it the same object as GCE's boundary exchange

**Arbitration and physical coupling** *(new — `H-ARB`)* — `Q-ARB` who holds the right to change a shared physical variable, how it transfers, with what evidence, and what happens on comms loss · `Q-ARB-2` composed control responsibility, interaction constraints, timing, conflicting objectives, conflict resolver · `Q-ARB-3` the record of what each participant was told, when, and whether it acted on superseded information · `Q-ARB-4` what OMNI does when a participant **refuses** the arbitration (`§6.2`)

**Posture and command** — `Q-P35` **`REV-188`** ownership (distribute · one owner · or explicitly re-defer with a reason) · `Q-P35-2` binding grain · `Q-P35-3` are supervision, delivery mode, emergency authority, execution delegation and autonomy degree separate dimensions, reconciled against Care `§5b.1`'s existing factoring · `Q-RECEIPT` what positively constitutes an execution receipt · `Q-DL18` the `Q-DL18-4` delegated-authority-grain dependency — **described, never chosen** · `Q-FED` Federation's missing non-human/agent modelling (**default: route**) · `Q-TIME` control-timescale separation · `Q-DEGRADE` validated local behaviour on connectivity loss — **no universal stop-everything or continue-everything fallback**

**Readiness** — `Q-READY` who owns assembling resources, items, instruments, implants, consumables, suppliers, facility capacity, sterile-processing turnaround and on-site personnel · `Q-READY-2` how a supplier or consignment holder learns what is needed, when, on whose authority · `Q-READY-3` what readiness state must exist before execution authorization, and who may refuse on readiness grounds · `Q-READY-4` **readiness is time-sensitive evidence and held commitments over actual resources — never a stored green flag** · `Q-READY-5` is `care_coordination_owner` the owner of readiness or a distinct role

**Discovery, privacy, population** — `Q-DISC` are aggregate opportunity · cohort feasibility · anonymous eligibility · notification · re-contact · clinical qualification · identity release · enrolment · lead generation · executable case constitutionally distinct · `Q-DISC-2` does C3.7's `research_permission_stack` generalise beyond research (cheaper hypothesis; test first) · `Q-DISC-3` disclosure risk over time — repeated queries, rare cohorts, overlapping populations, deduplication, changing permissions · `Q-PROP` **the A→B path**: an attributed observation enters an authorized safety/research process; evidence is evaluated under an applicable basis; a **bounded** finding or revised model is produced; potentially affected cases and organizations are identified; B's team receives it under appropriate terms and makes the decision belonging to that care relationship. **Data use ≠ scientific inference ≠ publication ≠ deployment ≠ clinical adoption** · `Q-PROP-2` **the reverse** — a source observation is corrected: which analyses, outputs, recommendations and prior decisions relied on it, what should be reconsidered, and what remains a valid historical fact

**Selection, exposure, containment, obligation** — `Q-SEL` is producer selection already constrained by `GRD-032`/`034` + inv 29 + Care `§4` + C4.6 `C6` + Care `§9a` `sponsor/incentive`, or is there a hole (burden on finding the hole) · `Q-SEL-2` separability of trusted integration · admitted capability · preferred partner · clinically recommended option · payer-mandated option · patient-selected option · OMNI-owned product · `Q-SA` **HARD** Selection Accountability: consult and test only; declared reliance inherits the hold; never extend or promote · `Q-RESIST` **institutional resistance, mandatory** · `Q-EXP` unified exposure record **or** source-preserving composition — **test the composition first** · `Q-LIN` which lineage axes are mandatory, per-modality, or never OMNI's · `Q-CONTAIN` does layered containment generalise past pharmacy scope, and can a mandatory action against a configuration be tracked to per-instance compliance · `Q-STAGE` staging observation → adjudicated concern → containment → accountability · `Q-SURV` which anchor makes an obligation survive · `Q-OUT` `REV-174` prerequisite or consumer (**default: consumer**) · `Q-OPT` option preservation as a positive capability

---

## §11 — Scenario generation

**Not a library.** **Opus proposes cases; an independent reviewer challenges the coverage model, supplies held-out cases and rejects incorrect expected behaviour; Nick adjudicates.** Coverage is measured by **breaker-family × axis-extreme × regime**, never row count — **and the coverage model itself must be attacked**, because a finite factor model can omit the relevant actor, sequence, physical effect or institutional behaviour. Not every case deserves equal depth or its own artifact.

**§11.1 Axes** — `track_mix` · `owner_spread` · `regime` · `production_locus` · `patient_specificity` · `capability_existence` · `execution_agency` · **`concurrency_on_a_shared_variable`** · **`commitment_availability`** · `adaptivity` · `control_timescale_spread` · `irreversibility` · `obligation_horizon` · `principal_count` · `regulatory_settledness` · `producer_permanence` · `institutional_willingness` · `disclosure_openness` · `initiating_principal` · `participant_ownership` · `connectivity`.

**§11.2 Breaker families** — **commitment and contention** (two actors one resource; check-then-use; expiry; revocation; stale hold) · **arbitration** (concurrent rights over one physical variable; transfer at speed; comms loss; acting on superseded information) · **duration** (a condition that must hold throughout execution fails mid-act) · track and ownership misrouting · readiness and stale readiness · time and validity (sample ≠ analysis ≠ receipt; stale authorization; changed scene; changed-during-manufacture) · duplication and routing (one event two paths treated as corroboration; repeated delivery causing repeated action; route mistaken for authority) · authority and impersonation (statement→command; extraction→authority; ACK→custody; acceptance→execution; execution→effect; release→adoption; model evidence→observed response) · participation change (join, leave, revoke, unknown-at-start, refusal, withdrawal with work in flight) · affiliation and topology · degradation · continuity and disappearance · **population and propagation, including unrecorded reliance** · capability formation · neutrality and incentive · **honest-null** (no intervention, no eligibility, refusal — a valid outcome, not a failure).

**§11.3 Regimes — all three mandatory** — **individual** arrangement with changing participants · **shared operational** (lots, equipment, facilities, capacity, protocols, model releases, supplier arrangements, **operations with zero identified patients**) · **cross-organization and population** (learning, collective hazards, propagation, privacy at scale). **Running the first repeatedly cannot prove the other two.**

**§11.4 Positive capability tests — mandatory** — a patient discovers a legitimate opportunity · a supplier receives enough to fulfil a real need · **an operator reserves resources and the commitment holds** · **a commitment is made immediately because it is held, not because the world is known** · care continues under an acceptable alternative · coordination happens without unnecessary gates. **A framework that only prevents action is not an operating model.**

**§11.5 Negative controls — predicates, not labels.** **The illegal substitution is the failure; the first state in each pair is not wrong.** An ACK as an ACK is valid — as accepted custody it is not. A simulation labelled as such is valid — presented as observed response it is not. A refusal recorded as refusal is valid — as an intervention performed it is not. Likewise: **an availability observation vs a held reservation** · approved candidate vs actual exposure · manufacturer's release vs clinical adoption · stale authorization recognised vs relied upon · one event deduplicated vs double-counted or double-executed · affected party reached vs missed, unaffected notified as exposed · evidence in purpose vs secondary use · an attributed clinical statement vs a device command · an OMNI-operated participant on identical terms vs privileged · a real operating difference represented vs flattened. **A written trace is design evidence — not proof of a deployed system, counterparty agreement, or clinical safety.**

---

## §12 — The four required outputs

**Content obligations, not four new gates, files or teams.** Adopted from the review.

| Output | What the next team must be able to do with it |
|---|---|
| **A — integrated operating-model decision** | Explain what participates, what each owns and may decide, how the lifecycles interact, and what changes when the arrangement changes. **State which inherited assumptions survived, changed or remain unverified.** Compare plausible **structural alternatives** — native lifecycles with typed integration contracts · bounded shared episode/process agreements over local lifecycles · different controller or dependency-evaluation allocations — instantiated only where a real question demands it, never to satisfy a count. **Physical realization (native / hosted / hybrid) is a separate axis and settles neither semantics nor authority.** |
| **B — mechanism and frontier-adequacy evidence** | Explain how conditions are specified and evaluated, evidence reused, action-critical facts revalidated at execution and **during** it, resources and commitments coordinated and **held**, physical control bounded, uncertainty handled, and consequences propagated. Exercise all three regimes, routine and high-consequence, partial and unwilling counterparties, generated interventions, adaptive execution. **Separate design evidence from implementation and clinical proof.** |
| **C — speed/safety/efficiency thesis + evidence contract** | Preserve **both** `§2.1` statements. Explain the causal mechanism, its limits, its empirical assumptions, its counterexamples and how the claim can be tested **without mistaking speed for benefit.** Distinguish intended property · designed mechanism · design-test evidence · implementation proof · external acceptance · observed benefit. **Required even if the architecture mostly reuses earlier work.** |
| **D — downstream consumption package** | For each accepted finding: source status, destination, consumer, acceptance condition, later build test. **A concrete entry packet for the next architecture/thesis/contract/build author — not a reading list and not a "C5 later" queue.** |

**§12.1 Gate fit.** **G0** approves this investigation contract and its boundaries, **not its architecture.** **G1** formulates comparatively with primary evidence and pressure, iterating freely, delivering a coherent candidate plus named unresolved conditions — **not another source summary.** **G2** adjudicates the operating model and its value claims **at their actual evidence level** and records destinations and downstream obligations. **Mandatory inside G1:** the institutional-resistance test (`Q-RESIST`) and both `H-NP` tests. **Separate and optional:** wedge selection, market sizing, financing, GTM.

**§12.2 Measuring the value claim.** For each tested arrangement, separate **avoidable coordination delay** from capacity queues, actual work, scientific/biological/manufacturing time, necessary deliberation, patient choice and institutional constraint. **Better information improves some and abolishes none.** Compare the same demanded outcome under comparable resources and safety requirements: time to an appropriate disposition and, when indicated, execution · tail delays and time to detect material change · repeated work and **total burden on staff, counterparties and patients — not only OMNI users** · unsafe proceed, false-ready, missed impact, unjustified escalation or denial · accuracy of resource commitments and accepted responsibility · remaining-obligation visibility · **confidence and coverage limits, not only successful cases.** **The strongest test is not "did the happy path get faster" but "did it get more timely without concealing uncertainty, suppressing legitimate refusal, shifting unreconciled work onto someone else, or increasing unsafe action."** When a safeguard creates work, the system-level benefit must justify it. Fewer recorded incidents is not fewer actual incidents.

**§12.3 G2 acceptance test.** *Can a fresh reader explain how the assembled arrangement behaves — not merely identify its participants, permissions and records?* **More named fields and more gate prose will not satisfy it.** Scenario counts, a catalog entry, a new route, or `REV-188` closure are **not** adequate success criteria.

---

## §13 — Method, sources, preservation

**§13.1 Method law.** `1` Inheritance verification precedes assertion, not capture — capture provisionally, verify before asserting anything as new, settled or authoritative. `2` **A comparator claim is a novelty claim** and owes the same check. `3` **Before proposing a structural decomposition, consume the operative structural account of the most recent joint/cross-domain run — not its closeout.** `4` Source floor declared and discharged per output; delegated scans labelled as evidence, not an authored read. `5` One carrier. `6` No parallel lanes before G0 acceptance. `7` `METHOD-000` default; one current-state surface (`§1`). `8` **External sources captured with provenance and maturity before any conclusion depends on them** — `research_demonstration` · `clinical_investigation` · `authorized_bounded_use` · `established_operational_capability` · `speculative_future_assumption`. A statute or specification is authoritative about its own content without proving a deployed capability. `9` No absence claim without its coverage; no history claim from a current-state search; **no causal claim about a past omission without evidence for the cause.** `10` **Expose the basis of a load-bearing claim (`§4`) — without forcing a box.** `11` **Stop framing each recovered passage as the biggest discovery yet.** `12` **Preserve the ambition and the contract together (`§2.1`); neither may be deleted in favour of the other.**

**§13.2 Source posture.** **Read fully by this author:** this carrier; all five Knox reviews; **`EVRUN-000012_02 §15` in full**; the FAI pause checkpoint; the guardrail digest; FAI R8 `§3.9`; the read-graph Route Entry Contract and Major-Arc Intake routing. **Verbatim-verified at specific passages:** **C4.5 `T-04` and `T-15`** · **C4.3 `10.1`** · Care `§1a`, `§19` (incl. the ten `CARE-SPECIFIC` occurrences), `§1CP`, `§5a`, `§5b`, `§5b.1`, `§9a` · residual/moat Palantir passage + revision history · C3.7 `§11`/`§12` + scenario-library spec · C3.5 F5 P35 rename · `federation_contract.md` inv 29 / `T0-14` · `GRD-032` · `08` `REV-188`/`189`/`190` · `manifest_action_enum` · read-graph routes `9a`/`9i`/`9m`/`10` · C4.6 Rx L2 · FWREG inventory and history · `AGENTS.md` standalone-lane clause. **Recovered via delegated scans** — marked as evidence. **NOT inspected:** `EVRUN-000012` `_00`/`_01`/`_03`/`_04`/`_05`/`_06`/`_07` (**`_04` controlling adjudication and `_05 §5.0`–`§5.6.1` burden model are bounded G1 additions**) · `REV-184` beyond its cited rule · C4.5 and C4.3 beyond the cited rules · Care capture in full · residual/moat in full · the six AI registries · thesis `§C` · `v4_C3_7G` · the Demand/counterparty disposition · full scenario libraries · the implementation estate · **every external source in `§7.2` and `§9`.**

**§13.3 Routing, corrected.** R5's causal story is **withdrawn**. Verified: the read graph **does** reference `EVRUN-000012` (three mentions, via routes `9i` and `9m`), and the run carries an index plus explicit deep-consumption pointers. **So there was a retrieval path.** The accurate finding is narrower: **there is no direct task-entry route, the catalog run-row points at `_00`, and `_07` warns against being substituted for `_02 §15` — a discoverability weakness worth fixing.** It cannot explain missing a C3.7 passage in a source already consulted, or a Palantir passage in an already-routed source. **Those were reading failures.** A route is a useful improvement and **is not this arc's achievement.**

**§13.4 Preservation homes — part of acceptance, not a closeout chore.** **Thesis/spine:** `§2.1`'s ambition **and** contract, with mechanism, limits and evidence maturity. **Architecture capture / reference model:** the execution, authority, semantic-dependency, temporal, uncertainty and control relationships. **Domain / seam / profile contracts:** applicable conditions, responsible owners, validity and refresh rules, **reservation and commitment semantics**, response requirements, evidence contracts. **Build and evaluation:** fixtures, fault injection, observability, burden measurement, external validation. **Different homes for different responsibilities — not four maintained copies of the same prose.** Exact paths and accepted successors resolve before any write; `/architecture` installation and FAI remain separately controlled. **This carrier is the review home until a destination accepts a finding — not a licence to mark everything C5-later.**

---

## §14 — Governance receipts

**Read-graph evaluation complete; catalog registration OWED.** `AGENTS.md` confirms a standalone lane needs no integrator; the reason to serialize is the **verified overlap** — the FAI branch has modified `01_master_corpus_catalog.md`, `04_manifest_read_graph.md` and `future_work_registry.md`. **Overlap is collision risk, not proof of conflict.** **Requested: one bounded intake transaction** — this carrier's catalog row plus route `#9w` (ECB task entry, also naming `EVRUN-000012_02 §15` and `_04`, the P35 carriers, C3.7 `§11`/`§12`, Care `§1a`/`§1b`/`§5b`/`§9a`/`§19`, C4.5, C4.3, `REV-184`, Federation inv 29, and `REV-188`/`189`/`190`/`141`/`174`) — with a recorded freshness/collision check, returning exact head/blob and per-file stats. **Not requested:** unrestricted governance write, a FAI merge, extra rows by default, or a governance cleanup. **Route key `#9w` verified free on both refs; arc state resolves from `§1` and the route carries none.**

**Open-review rows — PROPOSED, land only if authorized:** `D0ECB-REV-001` P35 has no task-entry route (`10`/`9a` reference it but fire on v4-spine authoring or C3.8 convergence) · `D0ECB-REV-002` the C3.7 super-frame has a source carrier but no accepted whole-frame disposition and no task-entry route; its promised registry entry was never written (history-verified); **no claim about why prior arcs omitted it** · `D0ECB-REV-003` `add_tier3` invalid enum in the FAI arc-opened handoff · `D0ECB-REV-005` comparator re-derivation (Palantir, third instance) · `D0ECB-REV-006` **`EVRUN-000012_02 §15` discoverability** — routed only indirectly via `9i`/`9m`, catalog row points at `_00`, closeout warns against itself; **recorded as a discoverability weakness, not a proven cause.** **No FWREG row proposed.**

**Collision check.** FAI G1 read-only, pinned — carrier blob `9835715e` matches the pause checkpoint's pin across its three recorded heads; **frozen Authority content has not drifted.** Selection Accountability: consult and test only; **declared reliance inherits the hold**; a proposal to Nick is not an edit; only a **blocking contradiction** stops that conclusion, never the arc. **Care capture** frozen against edit, readable, strongest read dependency — **no edit, no promotion.** **`EVRUN-000012`, C4.5, C4.3, `REV-184`, C3.7, residual/moat, C4.6** — cite at stated status, **promote nothing.** Federation inv 29 — cite, no contract edit. Insurance Gate 2 / Method PR #19 — no overlap / non-binding. **`main`'s stale boot pointer remains separately reported and is not this arc's subject.**

---

## §15 — Gate-0 stop receipt

**Produced:** this carrier, revision R6. **No architecture. No name minted. No scenario library. No promotion.**

**§15.1 Discharged.** The **ambition and the contract preserved separately** with an explicit non-substitution rule (`§2.1`) — the operator's first correction · the **speed mechanism corrected from observation to commitment** (`§3`), which answers the tray case, restates why healthcare is slow, and is grounded in `§15`'s own relation vocabulary · three R5 overclaims withdrawn — *continuously known*, *without re-verification*, *exactly the dependent decisions* — against C4.5 `T-04`/`T-15` and C4.3 `10.1`, the **fourth** under-inheritance this arc · the **snapshot question answered**: three objects conflated, the forward-looking **action brief** absent, and the real comparator is a **clearance or permit-to-work**, not a data extract (`§5.1`) · the **six-robot case answered**: the coupling is the body, the room, the resources and the clock; OMNI holds **arbitration of rights over shared physical state plus the black box**, never the control loop; the **god-robot alternative named as a real threat with its structural limit**; and the honest limit that OMNI records rather than arbitrates where a participant refuses (`§6`) · constraint kinds **softened from enum to basis-exposure** (`§4`) · **two false R5 claims corrected** — the read graph **does** reference `EVRUN-000012` via `9i`/`9m`, and Care `§19` has **ten** `CARE-SPECIFIC` occurrences, not two · *"not clinical-first"* withdrawn as contradicting care-centred posture · the **four required outputs** and the **value-measurement contract** adopted · **reference integrity repaired** — section numbering now matches the header, and question IDs are stable with the R5 map below.

**§15.2 NOT done, by design.** No architecture decided · no name minted · no scenario executed · no external source verified · no lane or agent launched · no contract touched · no FAI mutation · no promotion of `EVRUN-000012`, Care, C4.5, C4.3, `REV-184`, C3.7 or residual/moat · no registry or queue write · no shared control-plane surface landed.

**§15.3 R5→R6 question-ID map** *(R5 compressed numbering without preserving meaning; stable IDs replace digits)*. R5 `Q-1`→`Q-ENT` · `Q-1a`→`Q-ENT-2` · `Q-1b`→`Q-ENT-3` · `Q-2`→`Q-LIFE` · `Q-3`→`Q-PROTO` · `Q-4`→`Q-DEP` · `Q-4a`→`Q-CAUSE` · `Q-5`→`Q-AUTH` · `Q-6`→`Q-PROJ` · `Q-7`→`Q-RUNTIME` · `Q-8`→`Q-P35` · `Q-9`→`Q-P35-2` · `Q-10`→`Q-P35-3` · `Q-11`→`Q-RECEIPT` · `Q-12`→`Q-DL18` · `Q-13`→`Q-ARB-2` · `Q-14`→`Q-DEGRADE` · `Q-15`…`Q-19`→`Q-READY`…`Q-READY-5` · `Q-20`…`Q-24`→`Q-DISC`…`Q-PROP-2` · `Q-25`…`Q-37`→`Q-SEL`…`Q-OPT`. **New in R6:** `Q-COMMIT`(×3) · `Q-BRIEF`(×2) · `Q-BOUNDARY-2` · `Q-ARB`, `-3`, `-4` · `Q-FED` · `Q-TIME`. **Retired:** R4's `Q-ECB-*` digits — superseded by these.

**§15.4 Open and owed.** Output A–D (`§12`) · the `Q-*` set (`§10`) · the scenario bank (Opus proposes · independent reviewer attacks · Nick adjudicates) · `D0ECB-REV-001`/`-002`/`-003`/`-005`/`-006` · catalog row + route `#9w` — **bounded intake authorization requested** · bounded G1 source additions: `EVRUN-000012 _04` and `_05 §5.0`–`§5.6.1`, `REV-184 §0`, C4.5 applicable temporal requirements, C4.3 impact/coverage semantics · wider source and external-evidence completion **in G1 before conclusions depend on it** · `main` boot-pointer hazard (Nick).

**Stop condition.** Superseded only when Nick + Knox accept, amend or reject R6. **On acceptance the next authorized act is G1 per `§12.1` — nothing else.**

---

## §16 — Amendment log

**R1** `60619c4f` initial · **R2** `3b9db0c2` nine Knox amendments; *"2035 comes free"* withdrawn · **R3** `88e65c07` maturity ladder dissolved; governance made a constraint plane · **R4** `93dab6aa` scope de-clinicalized from Care `§1a`; naming deferred per `GRD-026`; Palantir withdrawn · **R5** `0bbfa91c` `EVRUN-000012 §15` recovered and installed as inherited structure; lattice demoted; speed thesis introduced.

**R6** (this revision) — **ambition and contract both preserved, separately labelled, with a non-substitution rule** (`§2.1`), answering the operator's objection that a guardrail reformulation silently deletes the reach. **Speed mechanism corrected: observation is not commitment.** The tray case proves a precondition check cannot make two actors safe; speed comes from **holding** a commitment, and `§15`'s Layer-4 relations already separate evaluation from commitment from consequence. Healthcare is slow because **commitment primitives are missing across organizational boundaries**, not because information is missing. Three R5 overclaims withdrawn against **C4.5 `T-04`/`T-15`** and **C4.3 `10.1`** — the fourth under-inheritance this arc. **Snapshot question answered** — frozen decision context and `as_of` reconstruction are backward-looking and exist; the forward-looking **action brief** does not, and its comparator is a **clearance / permit-to-work**, not a data extract. **Six-robot case answered** — coupling is physical, not software; OMNI holds arbitration of rights over shared physical state plus the black box, never the control loop; the god-robot path named as a real threat whose limit is that no vendor can arbitrate a competitor; and the refusal case made explicit. Constraint kinds **softened from an enum to basis-exposure**. **Two false R5 claims corrected** (read graph does reference `EVRUN-000012` via `9i`/`9m`; Care `§19` has ten `CARE-SPECIFIC` rows). Route causation **withdrawn** — a discoverability weakness, not a proven cause, and not this arc's achievement. *"Not clinical-first"* withdrawn. **Four required outputs and the value-measurement contract adopted**, including total ecosystem burden and the rule that speed is not benefit. New hypotheses `H-SPEED`, `H-CONC`, `H-ARB`, `H-BRIEF`, `H-DUR`, `H-IMPACT`, `H-BURDEN`; `H-SCALE` softened. **Reference integrity repaired and question IDs made stable** with an explicit R5→R6 map.
