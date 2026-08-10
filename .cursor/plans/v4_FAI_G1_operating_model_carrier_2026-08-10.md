# v4 — FAI — G1 OPERATING-MODEL CARRIER (R2)

Document type: `handoff_or_readiness_gate` (gate-output carrier — the G1 deliverable named in execution plan §5)
Authority: `analysis_nonbinding` (`D0THES-GRD-036`). **Binds nothing. Mints nothing. Promotes nothing. Closes nothing.** Where this carrier and a controlling carrier differ, **the carrier controls and this file is corrected.**
Status: **`g1_carrier_R2 · state=proposed · BLOCKED_ON_BOOT_STATE_NORMALIZATION · pending_architecture_steward_and_affected_domain_owner_approval`**
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: the G1 gate output — proposes the authority model, proposes dispositions for the `blocks G1` ledger rows, and records what this gate got wrong.
Source-of-truth relationship: **owns nothing.** Gate sequence → plan §5. Rationale → charter R9. Finding disposition → PRE-0 ledger R5. Program state → the checkpoint. Authority truth → the carriers named in §5. **Enterprise/external-pattern truth → C3.8 G2/G4.**
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2`
Review gate: `user_knox_required`

> ## ★ POSTURE — read before using this file
> Authored under **`proposal_authoring`**: may research, propose, author, test; may **never** accept, approve or commit. **This file closes no ledger row and does not close G1.**
> **§5 contains authored synthesis, and every construct is labelled with its provenance.** R1 claimed *"nothing in §3 is authored."* That was false and it is withdrawn — see §0.
> **This carrier was produced under a known, unresolved boot-compliance violation (§0.2). It may be preserved as work; it may not be accepted as compliant until that is cleared.**

---

## §0 — Correction receipt: R1 → R2

R1 was reviewed and not accepted. Eighteen amendments were required. **All were checked; sixteen upheld; two refined rather than applied as written (§0.3).** No PRE-0 reopen, no G0 reopen, no G2 start.

Two corrections outrank the rest, and both came from the operator.

### §0.1 — The homework existed. This gate did not do it.

The operator's objection: *we cannot be the first people to delegate authority or run multi-agent builds; why are we confused about concepts that surely already exist?*

**Correct, and worse than stated.** The estate had already done this work, and this gate did not read it.

**`v4_C3_8_*` — the enterprise/AI-OS convergence arc — is complete, gate-approved 2026-07-03/04 by Nick + Knox, catalogued, routed in the read graph, named in execution plan Lane 2, and named again in charter §10's bounded source set.** It contains exactly the external-pattern homework this gate was accused of skipping:

| C3.8 already established | Where |
|---|---|
| OMNI's authority layer is **NIST 800-207 zero-trust isomorphic**: RBAC resolver ≈ **PE**, domain-commit ≈ **PA**, emission+execution gate ≈ **PEP**, `authority_evaluation` + `trust_horizon` ≈ dynamic/observable policy | G2 §1 row 13 |
| Fine-grained authz: OMNI has FGA + ABAC-ish + **ReBAC-shaped** grants (Zanzibar/OpenFGA class) — *"mechanism yes"*, gap is that it is **not named** as a declarative policy layer | G2 §1 row 9, §2 |
| Non-human/agent identity: `non_human_actor` + `delegated_authority_envelope` + `capability_envelope`≠authority — *"concept yes"*, gap = **§A uncontracted; crypto-attestation (mTLS/SVID) unmodeled** | G2 §1 row 16 |
| MCP/tool security incl. tool poisoning and OWASP-MCP → **P35 `command_authority_boundary` (8 modes)** + `GRD-039` (*watched = data, not instructions*) + candidate≠commit; gap = schema-pin, runtime output validation, privilege isolation, shadow-MCP | G2 §1 row 15 |
| **Supply-chain provenance (SLSA/SBOM) is a genuine gap** — OMNI's proof fabric is **data/decision provenance only** | G2 §1 row 14 |
| **Operator-ratified spine LAW: the proof fabric extends to build/model/dependency provenance, not only data/decision provenance** | **G4 §2.4** |
| Six more ratified posture decisions incl. tenant-ownership doctrine, moat-without-lock-in, BYOM, continuous assurance, semantic layer as composed-not-god-domain | G4 §2 |

**R0 and R1 both listed C3.8 under "Not inspected" and proceeded.** That is not a routing failure — C3.8 was catalogued, routed, and named in the gate's own two required-reading lists. **It is a compliance failure, and it is the same one Tier-0 #14 suffered.**

> **The lesson, stated once because it is the most transferable thing this gate produced:**
> **Declaring a gap is not discharging it.** Listing a mandatory, present, catalogued, routed source under *"not inspected"* does not manage a risk — it documents a non-compliance and continues. Gap-declaration is legitimate for genuinely unavailable sources. It is not a substitute for opening a source the gate was required to open.

R1's `G-05` was not a gap. It was this.

### §0.2 — The boot violation is a violation, not an exception

R1 admitted the freshness check fails, then declared the disagreement *"directional and benign"* and continued.

**That exception does not exist.** `AGENTS.md` says stop and report. It does not say *stop only if the stale surface over-authorizes*, and it does not give a proposal author standing to grade the disagreement as harmless. **R1 encountered a rule, found it inconvenient, invented an exception, wrote the exception elegantly, and carried on. That is the precise behaviour this arc exists to end**, and R1 committed it in the same document that diagnoses it.

**Withdrawn.** The status line now carries `BLOCKED_ON_BOOT_STATE_NORMALIZATION`. Verified state:

| Surface | Says | |
|---|---|---|
| `AGENTS.md` pointer · read-graph #15 · checkpoint §1 | `g0_accepted · g1_startable` | ✔ agree |
| **execution plan R8** header · `Manifest action` · §7 `Next` · STOP | `pending_..._acceptance · nothing_started` · `PROPOSED — not landed` · next = *operator accepts → integrator appointed → C-10 → G0 closes* | ✘ **all four already occurred** |
| **charter R9** header · §14 · STOP | same posture; integrator **VACANT** | ✘ |
| catalog rows for R8/R9 | `ACCEPTED_at_G0_g1_startable` | ✘ **contradicts the files they describe** |

**Before this carrier may be accepted, one of two things must happen, and neither is this seat's act:** (a) R8 and R9's current-state surfaces are normalized, or (b) those fields are explicitly marked historical with the checkpoint established as sole current-state owner. **An operator or steward may authorize a bounded waiver. `proposal_authoring` may not create one retrospectively.**

### §0.3 — The other sixteen

| Applied | |
|---|---|
| **Count integrity** | R1 said *"seven views"* over an **eight-row** table, then said Reactor was not one of the seven while listing it as a row — and propagated the wording into the catalog and read graph. **`C-11`/`C-12` recurring inside the document that explains why counts must not be repeated.** Repaired by removing the count, not by renumbering three files (§4). |
| **"Nothing is authored" withdrawn** | Calling synthesis *recognition* is source-authority laundering. Every load-bearing construct now carries a provenance label (§5.0). |
| **Standing context vs transition** | Authority contains standing structures that are not transitions — topology, rights, duties, licensure, seats, consent, prohibitions. Split at §5.1, so *consequential transition* cannot become the next elegant god-abstraction. |
| **`grant` → `authority_basis`** | Not all authority is delegated. Care already enumerates consent · surrogate · directive · order · protocol delegation · operator policy · emergency · statutory. A grant is **one subtype** (§5.2). |
| **Temporal circularity** | R1 put owning-domain **commit** inside a pre-act admissibility conjunction, which makes a commit a precondition of reaching the commit. Separated into admission → commitment → execution → enforcement/proof (§5.3). |
| **Proof ownership** | *"Owned by the Evidence Plane"* is wrong. Proof is distributed across D7, RBAC, Federation, source systems and owning domains; the Evidence Plane ingests, tests and routes (§5.3). |
| **"Four composers" ambiguity** | Six GCE composers, a four-way RBAC spine, four Care projections — R1 said *"the four"* without saying which (§5.3). |
| **`D0THES-REV-045`** | R1 called it a *ratified reconciliation method*. It is a **nonbinding routed finding referenced by Tier-0 #14** — precedent, not universal method. Corrected wherever cited. |
| **"No two views disagree"** | Unverified. Downgraded to: *no blocking contradiction was identified among the inspected passages at this level of abstraction* — several sources are frozen, nonbinding, or read only at selected sections. |
| **C-10 fixture** | It proved **R1's model** was wrong, not that the receipt is defective. The receipt already has separate fields; `holder` was underdefined in the candidate model. Receipt normalization is now a **proposal**, not a discovered defect (§6.1). |
| **"Fixtures / proof"** | Renamed **scenario traces**. Five prose walkthroughs are not proof; only C-10 is live; Tier-0 #14 requires stress-testing *by the user* (§6). |
| **"One semantics from convergence"** | False against R1's own register. All acceptance blockers now listed together (§7.2). |
| **Unreachable-party family split** | Two different problems: **unavailable precondition** (break-glass co-attestor — fail-safe vs fail-secure) and **post-dispatch cancellation** (revocation after emission — delivery, acknowledgment, compensation). Not one elegant answer (§6.2). |
| **Read-graph duplicate removed** | R1 restated Tier-0 #14's mandatory status inside route `9v`. That is a maintained duplicate of a universal rule and a future drift site; the failure was non-compliance, not absent routing. |
| **`9v-ii` trigger narrowed** | *"FAI gate state"* removed. Gate state resolves checkpoint → plan/ledger, never from a proposed synthesis. |
| **Roots ↔ functions** | Many-to-many matrix, not exclusive buckets (§8). |
| **Test 11 narrowed** | From *"the commercial strategy"* to **anti-capture / strategic sovereignty**. The wider moat claim belongs to Task-D, and C3.8 §2.1 already carries the ratified moat posture (§8.2). |

**Two refined rather than applied verbatim.** (1) The causal diagnosis — the reviewer's *"non-operable estate"* is right but incomplete; §1 adds the specific mechanism, because a generic diagnosis produces a generic fix. (2) *"Complete the four primary-source mechanism checks before requesting acceptance"* — partly superseded: **C3.8 already did the external-pattern work**, so the residual is narrower than stated (§7.2, `G-05`).

### §0.4 — Source posture

**Read fully:** plan R8 · charter R9 · PRE-0 ledger R5 · checkpoint · **Tier-0 #14** · **C3.8 G2 + G4** · Artifact Index · `rbac_authority_contract.md` · Agent Runtime capture. **Read to controlling sections, verbatim-extracted:** GCE/enterprise posture · thesis §A/§B envelopes · `EVRUN-000007` `_05 §I.13–I.15` + `_06` · `EVRUN-000008` `_04`/`_03` · Care §§1b·4·5a·5b·5b.1·9·9a·13·18·19 · Identity/Federation/D7 · `C4.4 §R`. **Searched:** six AI-corpus registries; the estate's external-pattern vocabulary. **Still not inspected:** C3.8 G1b + G3 · Build OS `09`/`10`/`11` · System/Surface Maps · Polaris · Platform + Accountability captures · C4.6 · federation-permeability arc. **These are declared, not discharged** — see §0.1.

---

## §1 — Why this kept happening

R1 said re-derivation was *"the predicted behaviour of a correct estate with an unnamed object."* **Withdrawn as self-flattering and monocausal.** The operator is right that it reads like a clever story told instead of doing the work.

**The honest diagnosis has three layers, in order of force:**

**1 — The estate is not yet operable as one maintained system.** Substantial architectural intelligence exists, but it is too large to load reliably, fragmented across mixed-maturity carriers, duplicated between current and historical prose, stale in its own state surfaces, prose-maintained rather than generated, and not machine-resolvable. There is no effective-architecture compiler, no relationship validator that would catch a plan banner contradicting the checkpoint, and no enforcement that the mandatory boot corpus was actually loaded. **This is the arc's reason for existing, and it is Explicit/Resolvable/Evolvable/Observable failing all four.**

**2 — Agents did not comply with the reading they were given.** Tier-0 #14 was mandatory and unread. C3.8 was catalogued, routed, and named in **two** required lists for this gate, and unread — twice. **Neither was unreachable. Both were skipped and the skip was documented.** An estate cannot be judged unnavigable by an agent that did not attempt the route it was handed.

**3 — Absent shared framing amplified both.** Seven partial perspectives on one execution arc, none contradicting the others, so no conflict-triggered mechanism fired. **This is a real amplifier and a genuine synthesis aid. It is not the root cause, and R1 was wrong to lead with it.**

**What follows for Architecture Operations** — and this is the useful part, because layer 1 is buildable:

| Failure observed | Required capability | Root |
|---|---|---|
| plan banner contradicts checkpoint; catalog row contradicts the file it describes | **relationship/consistency validator** over declared state | Explicit + Observable |
| mandatory source not read; skip recorded as a gap and accepted | **boot-corpus load attestation** — the gate proves what it opened, not what it intended to | Observable |
| a completed, ratified arc's answers never reach a later gate that names it | **question-to-source resolution**, not document-to-document routing | Resolvable |
| the same law re-derived at three altitudes | **generated cross-reference from descriptors**, not hand-maintained prose | Explicit |

---

## §2 — The homework, consumed

Per `M-106`, none of the following is presented as new. **C3.8's translation map is the inherited carrier**; this section cites it and adds only the build-plane rows C3.8 did not cover.

| OMNI construct | Established pattern it instantiates | Status |
|---|---|---|
| *an actor never self-authorizes* | **no ambient authority** — capability-security's founding rule | inherited via C3.8 row 13 (ZTA) |
| *capability does not create authority* | **the confused-deputy problem** | present in the estate — `EVSRC-2026-000211` (multi-agent security), routed in the wave-3 registry |
| *effective permission is the intersection/meet* | **capability attenuation** — authority decreases monotonically along a delegation chain | pattern named; OMNI's nine-term form is a superset |
| RBAC resolver / domain commit / emission+execution gate | **PE / PA / PEP** (NIST 800-207; XACML-shaped) | **C3.8 G2 row 13 — already mapped, gate-approved** |
| Federation `care_relationship` + grants | **ReBAC** (Zanzibar/OpenFGA class) | **C3.8 G2 row 9 — mechanism present, naming gap** |
| `delegated_authority_envelope` + TTL/scope/revocation on `non_human_actor` | **workload/agent identity** (SPIFFE class) | **C3.8 G2 row 16 — concept present; crypto-attestation unmodeled** |
| P35 `command_authority_boundary` (8 modes) + `GRD-039` | **tool-poisoning / prompt-injection boundary** (OWASP-MCP class) | **C3.8 G2 row 15 — concept present; teeth owed** |
| point-of-consequence reauthorization | **continuous / per-request authorization** with as-of consistency | consonant with C3.8 row 13 |
| `trace_lineage` + `source_authority_map` | **data/decision provenance** | C3.8 row 14 — **and explicitly NOT build provenance** |
| *(absent)* build/model/dependency provenance | **SLSA / SBOM / in-toto class** | **C3.8 row 14 = genuine gap; G4 §2.4 = ratified law that the proof fabric must extend here** |
| separation of duties; proposer ≠ approver | **static vs dynamic SoD** (NIST RBAC) | R1 stated the rule without the static/dynamic distinction — §5.4 |
| decision-condition predicate (§5.4) | **threshold / quorum authorization** (TUF-class role separation) | synthesized; pattern named |
| break-glass | **emergency access**, a standardized healthcare-IT pattern (ISO 22600 class) | present in RBAC §6; the *partition* case is the residue (§6.2) |
| revocation after an emitted external effect | **compensating transaction / saga**, plus delivery-acknowledgment uncertainty | saga already an estate comparator; the composition is the residue (§6.2) |

**What this buys, and it is the point:** OMNI does not need to author an authority model. It needs to **name what it already instantiates, cite the standard, and author only the delta**. On the evidence above the delta is small and specific — **build-plane provenance, crypto-attestation for non-human actors, MCP-security teeth, and the care-plane physics no general pattern supplies.**

---

## §3 — Are build-plane and care-plane authority the same? *(operator question 1)*

R1 asserted *"two populations, one grammar"* and never tested it. Tested, the answer is **three planes, one grammar, three different directions of authority origin** — and the third difference is the load-bearing one.

| | **Build / management plane** | **Control / operations plane** | **Care / use plane** |
|---|---|---|---|
| Population | builders, reviewers, integrators, administrators, their agents | runtime components, connectors, third-party agents, schedulers | patients, representatives, clinicians, staff, operators, federation members, their agents |
| **Authority originates** | **granted downward** by the organization | **configured** — executes within envelopes; originates nothing | **held externally** — licensure, patient right, statute. **OMNI recognizes and gates it; OMNI cannot confer or revoke it** |
| Reversibility | revert, roll back, redeploy | restart, fail over, kill-switch | **irreversible**; compensation ≠ reversal |
| Liability | the organization | the operator | **an independently licensed professional's personal liability, plus patient rights that exist without any system** |
| Jurisdictional variance | low | low | **high** — capacity, surrogacy, emergency powers, statute |
| Time shape | mostly synchronous, revocable in flight | continuous | standing directives, changing capacity, retrospective authorization |

**The grammar is genuinely shared** — no ambient authority, attenuation, separation of duties, point-of-use reauthorization, non-null accountable principal, attestation. That is why capability-security applies to all three, and why a second build-plane authority mechanism would be a mistake.

**But the physics differ, and the inversion is the finding:** on the build plane authority flows **down from the organization**; on the care plane it is **held externally and merely recognized**. R1's durable invariant 4 half-stated this without noticing it implies the planes are not symmetric. **A model that treats them as symmetric will eventually let an organizational grant appear to confer clinical authority — which is the collapse Care §4 and `INV-30` exist to prevent.**

**Is clinical judgment a fourth thing?** No — it is a **non-transferable authority basis** within the grammar: delegation may authorise execution without authorising professional judgment (`INV-10`). You may delegate the act; you may not delegate the judgment. That is a *kind*, not a plane.

**The estate already ratified the consequence.** C3.8 **G4 §2.4** is an operator-ratified spine LAW: *"Proof fabric extends to supply-chain provenance (build/model/dependency), not only data/decision provenance."* Read against the three planes, that is exactly the statement that **the build plane needs its own proof obligations and does not inherit the care plane's.** The question was answered on 2026-07-04; it had not been connected to the authority model.

**Not settled here** (§9): whether the three planes are three deployment/operating profiles of one standard or three standards; and how a principal holding seats on two planes at once is represented — the physician case: employee-actor, clinical committer, **and** independently accountable professional principal.

---

## §4 — Third-party agents with their own harnesses *(operator question 2)*

*"There is zero guarantee that plug-in conforms to our ideas of authority."*

**Correct — and conformance is the wrong requirement.** This is a solved problem class and the estate holds most of the answer.

**You do not make a foreign harness safe by requiring it to share your authority model. You make it safe by ensuring it cannot exceed what you handed it.** Four mechanisms, three already in the estate:

| Requirement | Mechanism | Estate status |
|---|---|---|
| **Non-amplification** — nothing done through the boundary may exceed the authority attenuated into it, whatever the counterparty believes internally | capability attenuation; `delegated_authority_envelope` with scope/purpose/TTL/revocation; `capability_envelope` ≠ authority | **present** — C3.8 G2 row 16 |
| **No ambient authority across the boundary** — every access via an explicit, scoped, expiring credential; visible ≠ authorized | `GRD-033`; P35 `command_authority_boundary` (8 modes); `GRD-039` *watched = data, not instructions* | **present** — C3.8 G2 row 15 |
| **Local admission of inbound claims** — anything asserted enters as attributed evidence, never auto-trusted | `C4.4 §R.16`: *federated publication ≠ universal trust*; `publish → admit → use-under-grant → revoke` | **present** |
| **Cryptographic attestation of the actor and the artifact** — proving *which* agent, under *which* harness version, performed *which* step | SPIFFE-class workload identity; in-toto/SLSA-class step attestation | **THE GAP** — C3.8 G2 row 16: *"crypto-attestation (mTLS/SVID) unmodeled"*; row 14: build provenance absent; G4 §2.4 ratifies closing it |

**So the answer is: three of four already exist, and the missing one is already a ratified law awaiting implementation.** Without attestation, non-amplification holds only for what passes through OMNI's own gates — a third-party harness that acts outside them is invisible, and the residual risk is exactly the confused deputy.

**What must NOT be done:** require third-party harnesses to adopt OMNI's authority model as a condition of integration. That is unenforceable, it is the *"connect-everything"* posture `GRD-034` rejects, and it converts a boundary problem into a standards-evangelism problem. **Attenuate, admit locally, attest. Do not evangelize.**

---

## §5 — `§G1-AUTH` — the model, with provenance

### §5.0 — Provenance labels (mandatory; R1's *"nothing is authored"* withdrawn)

`INHERITED` verbatim from a named carrier · `RECONCILED` — composed from carriers with no semantic addition · `SYNTHESIZED` — a candidate this gate constructed from existing law · `NET-NEW` — a proposal with no direct estate antecedent · `OPEN`.

| Construct | Provenance |
|---|---|
| Reactor's eight invariants; Tier-0 #14 three-layer pattern; the seven perspectives; GCE decomposition; RBAC spine and resolution; Care's four projections; the nine-term meet; five-layer allocation | **INHERITED** (Reactor and Care frozen/unpromoted; the meet nonbinding) |
| ZTA/PE-PA-PEP mapping; ReBAC shape; SPIFFE gap; build-provenance gap; §2 pattern bindings | **INHERITED** from C3.8 G2/G4 |
| Standing context ⟂ transition transaction split | **SYNTHESIZED** |
| Commitment and custody as concurrent tracks | **SYNTHESIZED** |
| The six non-collapsing questions | **RECONCILED** |
| `authority_basis` typology | **RECONCILED** (Care §5b.1 enumerates the kinds) |
| Seat / accountable principal / exercising actor / grant | **SYNTHESIZED** |
| Durable-invariant vs operating-profile split for agents | **SYNTHESIZED** |
| Decision-condition predicate | **NET-NEW**, grounded in `INV-30` + *contributions are not votes* |
| Three planes with inverted authority origin (§3) | **SYNTHESIZED**; its proof consequence is **INHERITED** (C3.8 §2.4) |
| Governance by attestation withdrawal (§8.3) | **NET-NEW** |
| Whether the planes are three profiles or three standards | **OPEN** |

### §5.1 — Two structures, not one object

R1 collapsed authority into a single transition object. **Authority also contains standing structures that are not transitions**, and flattening them makes *consequential transition* the next god-abstraction.

**A — Standing authority context** *(the as-of graph)*: principals · represented principals · actors · authority bases · relationships · roles, seats, appointments, assignments · grants and prohibitions · consent and directives · licensure and jurisdiction · policies and variation · ownership boundaries · current validity.

**B — Consequential transition transaction** *(the event path)*: proposal or intent → context resolution → admission → required authoritative acts → commitment → custody → execution, non-action or failure → evidence → correction, reopening, remedy.

**A is queried; B is executed. A is as-of; B is a path. Each of the seven inherited perspectives projects onto A, or B, or both** — and *that* is the reconciliation, not a single table. The reconciliation follows the compositional precedent Tier-0 #14 §1.5.1 cites, which rests on `D0THES-REV-045` — **a nonbinding routed finding, not a ratified universal method.**

**Reactor is not one of the perspectives.** It is a frozen, unpromoted **candidate arc law** over B. R1's table listed it as a row and then said it wasn't one, which is where the seven/eight contradiction came from. **No count is stated here; the set is enumerated and left to be generated from descriptors.**

### §5.2 — `authority_basis`, not `grant`

Not all authority is delegated. Care §5b.1 already enumerates the kinds; a delegated grant is one:

```
authority_basis =
    direct right              (a patient's own right)
  | professional authority    (licensure; non-delegable as judgment)
  | organizational authority  (employment, appointment, seat occupancy)
  | representation            (surrogate, guardian, DPOA, parent)
  | delegated grant           (scoped, expiring — the only one carrying a
                               delegated_authority_envelope)
  | consent                   (patient-granted permission)
  | directive                 (a standing instruction)
  | statutory / court order
  | emergency authority
  | policy / protocol basis
```

**A `delegated_authority_envelope` resolves only where delegation is actually involved.** R1's diagram placed a grant between every actor and every transition, which would have made a patient's own right look like something OMNI granted them.

### §5.3 — Four stages, not one conjunction

R1 put owning-domain **commit** inside a pre-act admissibility conjunction — making a commit a precondition of reaching the commit. RBAC §5's four-way wording describes the **valid whole path**, not a pre-execution gate. Separated:

| Stage | Question | Owner |
|---|---|---|
| **1 Admission** | may this be attempted now, for this purpose, in this context? | the composers, typed by Care's four projections |
| **2 Commitment** | which actor and owning domain make which state authoritative? | the owning domain |
| **3 Execution / effect** | what happened — effect, non-action, failure, exception? | the executing actor, under accepted custody |
| **4 Enforcement + proof** | what was enforced, and what demonstrates it as of T? | CNS-Meta enforces; **proof is distributed** |

**Commitment and custody remain concurrent tracks**, because Reactor invariant 4 (*no silent orphaning*) is only necessary if a transition can be committed with custody unaccepted, or custody accepted with nothing committed.

**Proof ownership, corrected.** R1 said *"owned by the Evidence Plane."* Wrong. **D7** owns durable artifacts and consent records · **RBAC** owns permission and attestation audit · **Federation** owns cross-boundary decision records · **source systems** own their externally committed records · **owning domains** own committed state and domain evidence · **the Evidence Plane ingests, tests and routes** external evidence. *Proof is produced and held by its owning system under shared lineage contracts; no plane owns all of it.*

**And the "four" ambiguity:** where this carrier says the composers it means **GCE's six** (Identity · Federation · RBAC · D7 · CNS-Meta · owning domain). RBAC's **four-way spine** and Care's **four projections** are different sets and are named explicitly wherever used.

### §5.4 — Decision conditions, and static vs dynamic SoD

> A **decision condition** is an explicit predicate over independently attributable **approvals**, **refusals**, **abstentions**, **required-party participation**, and **non-overridable rights or duties**.

Refusals are first-class (`INV-30`: a majority may not vote away an independently liable principal's refusal, a patient right, or a professional duty), and *contributions are not votes* (Care §9a). **Thresholds and quorums are operating-profile configuration.**

**Separation of duties has two established forms and R1 conflated them:** **static SoD** — a holder may never occupy both seats at all; **dynamic SoD** — a holder may occupy both but may not exercise both on the same change. R1 asserted only the dynamic form. Which seats need which is a profile decision; **that both forms exist is architecture.**

### §5.5 — Seat · accountable principal · exercising actor · grant

| Object | What it is | Lives in | Changes by |
|---|---|---|---|
| **Seat** | named durable authority position: allowed decisions + explicit prohibitions | architecture | architecture amendment |
| **Accountable principal** | who bears the rights, duties or liability engaged when the seat acts | register | record edit |
| **Exercising actor** | who currently performs the seat's action | register | record edit |
| **Grant** | scope · purpose · time · conditions · proof · revocation · escalation | runtime record | ordinary |

Tests: adding engineers, departments or a compliance function is a **register edit**; and the model must represent its own live authority basis (§6.1). **Not a new mechanism** — RBAC already separates assignment from grant, both temporal, with `system_actor_atom_grant` for non-human actors. **`AB-12` self-hosting means reusing that, not paralleling it.**

**Not yet general.** The model must still survive: a physician who is employee-actor, clinical committer **and** independently accountable professional principal; a patient surrogate; an external payer agent; a deterministic Runtime-Operations component; and multiple domain-owner principals on one change. **Untested — `G-10`.**

### §5.6 — Agents: durable invariants vs today's profile

**Durable — hold in any era:** no actor self-authorizes · capability does not create authority · execution does not create principal status · **principal status and professional authority are established externally; the architecture records the basis, never confers it, and never prohibits what an external regime may later establish** · no actor is both proposer and accepter where independence is required · every consequential act resolves to a rightful commit owner and an attributable chain.

**Current operating profile — true in 2026, revisable, NOT constitutional:** AI never final-authors safety-sensitive atoms · model-bearing actors may not commit domain truth while a deterministic control component may commit bounded operational state · only human actors occupy care-ownership roles · agents in this arc hold `proposal_authoring` only.

**Which action classes an actor may perform is a question of basis, grant, action class, rightful owner and point-of-consequence conditions — never of what kind of thing the actor is.**

### §5.7 — Default-deny, scoped

*Required positive authority may never be inferred from absence. Where a consequential act requires a positive grant and none resolves, execution **fails closed** — while the underlying state stays typed as absent · unknown · unavailable · not-applicable · denied · exception-authorized, each with a named owner.* **Fail-closed is an execution rule, not an epistemic verdict.** Care §5b requires exactly these types and forbids collapsing them; `INV-15` requires rights needing patient action to be modelled as **unexercised**.

### §5.8 — Classification

**Standard:** the six durable invariants · required-positive-authority · no-scalar-authority · necessary-never-sufficient · point-of-consequence reauthorization · the six non-collapsing questions · both SoD forms. **Domain contract:** the composers, the spine, resolution, attestation tiers, consent-gate; Care's projections and `approval_requirement` (Care-owned). **Operating profile:** seat catalogs per plane · thresholds · today's agent constraints · plane postures. **Runtime configuration:** the registers. **Controlled vocabulary:** the three-envelope family; `authority_basis`. **Candidate standard pending promotion:** the nine-term meet (`G1-FIND-03`).

---

## §6 — Scenario traces

**These are worked prose traces, not proof.** Only C-10 is a live transaction; the thousand-deployment case is hypothetical. Tier-0 #14 §4 requires *"at least 5 real-world operational scenarios stress-tested by the user"* — **that requirement is NOT discharged by writing a table.**

### §6.1 — The five traces

| # | Trace | Result | Notes |
|---|---|---|---|
| **1** | **Live C-10 transaction** (`accountable_operator_principal: Nick`; `integration_holder: Opus`) | **model corrected** | Under R1's three objects: fails — Opus is not a principal. Under §5.5: seat `integration`, accountable principal Nick, exercising actor Opus, grant bounded to the arc-opening transaction. **This proves the model was wrong, not that the receipt is defective** — the receipt already separates the fields; `holder` was underdefined in the candidate model. A receipt normalization (`accountable_principal` / `exercising_actor` / `authority_basis` / `grant_scope`) is **proposed**, not a discovered defect. |
| **2** | Patient / clinician / payer / pharmacy disagree | **model corrected** | Four commits on four non-fungible planes; OMNI commits a coordination state describing what remains unresolved and owns none of the others. **Corrects R1's *"the authorized Care owner commits"***, which recreated the single final decider Care §4 forbids. Residue: what the coordination state *is* constitutionally — Care §9a G2 already marks it `[OPEN_RECONCILIATION]` for C5. |
| **3** | Delegation revoked across an in-flight external effect | **PARTIAL** | §6.2 problem B. |
| **4** | Break-glass under partition | **PARTIAL** | §6.2 problem A. |
| **5** | 1,000-deployment release: variation + incompatible skew + mandatory security revocation | **PARTIAL; broke an R1 claim** | R1 made local admission universal. Falsified: a mandatory security revocation against a Powered-by-OMNI deployment is not the same act as against a sovereign federation member. Tier-0 #14 §1.5.2's four coexistent operator abilities predict the postures (§8.3). |

**Tier-0 #14 §4's abstraction test, honestly:** the §5.5 objects sit one level above existing RBAC rows and map onto them, but **an asserted mapping is not a substrate translation.** A real one owes object relationships, ownership, temporal fields, valid and invalid examples, one negative fixture, and proof that no parallel authority system is created. **Not done — `G-11`.**

### §6.2 — Two different problems, not one

R1 compressed these into *"one bounded semantics."* They share a family — distributed authority under uncertain delivery — and differ materially:

**A — Unavailable precondition.** Break-glass requires a dual approver (T3); partition makes the co-attestor unreachable **before** the act. The choice is the classic **fail-safe vs fail-secure** tradeoff: fail closed and block emergency care, or degrade to post-hoc reconciliation and weaken T3 to an assertion. Care §13 supplies retrospective authorization as the degraded path; **no carrier states which applies.**

**B — Post-dispatch cancellation.** Revocation arrives **after** an effect may already have been emitted and custody accepted. This is compensating-transaction territory plus acknowledgment uncertainty: does revocation take effect at emission or at counterparty acknowledgment, and what holds when acknowledgment never arrives? Reactor invariants 3, 4 and 6 supply the pieces (accepted custody · no silent orphaning · compensation ≠ remedy ≠ reversal ≠ reconsideration ≠ outcome); **the composition is unstated.**

**One is precondition degradation. The other is post-dispatch causal control. Do not solve them with one elegant answer.** Both route to `AB-29`.

### §6.3 — The eleven pressure scenarios

**9 represent (7 only after correction) · 2 PARTIAL.** Corrections carried from R1: cardinality resolves **per contribution**, never from agent count or org label (1) · adding a compliance *authority* is an architecture change, adding a person is a register edit (2) · occupancy is configuration, **both SoD forms** are architecture (3) · two agents are not independent evidence — if test output supports acceptance the receipt carries an **evidentiary-independence class** (5) · **integration / release / activation / domain action** are four acts with four gates (6) · no tie-break between principals; discordance is preserved (8, 9) · scenario 10 is PARTIAL (§6.2 B) · scenario 11 is PARTIAL (§6.2 A).

**The plan's criterion is explicit — the model is not converged until each resolves. Two do not.**

---

## §7 — Verdict and blockers

> ### `NOT_CONVERGED__DISTRIBUTED_AUTHORITY_UNDER_UNCERTAIN_ACKNOWLEDGMENT`
> Recommended by `proposal_authoring`. Not self-accepted.

### §7.1 — What converged

The three-plane distinction with inverted authority origin, whose proof consequence is already ratified (§3) · the standing-context / transition split (§5.1) · `authority_basis` over universal grant (§5.2) · four stages with distributed proof (§5.3) · the four-object seat model, corrected against a live transaction (§5.5) · durable-vs-profile agent law (§5.6) · scoped default-deny (§5.7) · the pattern bindings that stop OMNI authoring what it already instantiates (§2) · the third-party boundary answer: **attenuate, admit locally, attest — do not evangelize** (§4).

### §7.2 — Every acceptance blocker, together

R1 said *"one bounded semantics away."* False against its own register.

| # | Blocker | Blocks |
|---|---|---|
| **B-1** | **Boot state not normalized** — R8/R9 stale; no waiver exists (§0.2) | **G1 acceptance** |
| **B-2** | Two distributed-authority problems unresolved (§6.2) | model convergence; `AB-29`; G3 |
| **B-3** | `AB-08` artifact fixture set unrun (`G-08`) | `AB-08` closure |
| **B-4** | Seat model untested against five harder cases (`G-10`) | generality claim |
| **B-5** | No real substrate translation (`G-11`) | Tier-0 #14 §4 |
| **B-6** | Scenario traces not user-stress-tested | Tier-0 #14 §4 |
| **B-7** | C3.8 G1b + G3 unread; four concept-borrowing mechanisms unchecked (`G-05`, narrowed by §2) | Lane-1 discharge |
| **B-8** | `C4.4 §R` cross-arc extension needs its domain owner (`G-07`) | `AB-01` |
| **B-9** | Seat transfer/suspension undefined (`G-02`) | G2 register |
| **B-10** | Adversarial-principal assurance viewpoint has no home (`G-04`) | G2 metamodel |
| **B-11** | Fleet attestation-withdrawal semantics unstated (`G-09`) | G3 fleet model |

**Honest position: the authority synthesis has two unresolved distributed-action problems, and G1 acceptance is additionally blocked by state normalization, fixture proof, source completion and owner acceptance.**

---

## §8 — Architecture Operations

### §8.1 — Four roots, many-to-many

The plan's §0.5 roots are the operating system; the ten capabilities are functions serving them — **not one root each.**

| Function | Explicit | Resolvable | Evolvable | Observable |
|---|---|---|---|---|
| catalog / graph | ● | ● | | ● |
| change proposal | ● | | ● | |
| impact analysis | | ● | ● | |
| effective-architecture compiler | | ● | ● | |
| conformance engine | ● | ● | ● | ● |
| propagation | | | ● | ● |
| fleet reconciliation | | ● | ● | ● |
| drift detection | | | | ● |
| agentic workbench | ● | ● | ● | ● |
| exception / debt lifecycle | ● | | ● | ● |

**The ten do not become ten services, teams or god objects**, and §1's four missing capabilities (consistency validator · load attestation · question-to-source resolution · generated cross-reference) are functions here, not new products.

### §8.2 — Test 11, correctly sized

**Acceptance test 11 is OMNI's anti-capture and strategic-sovereignty mechanism expressed as a conformance test: vendors may supply mechanisms; none may own OMNI's laws.** R1 called it *"the commercial strategy"* — **too grand, withdrawn.** Vendor independence without a loved product, distribution, implementation quality, counterparty adoption, clinical trust and operational proof still loses. **C3.8 §2.1 already carries the ratified moat posture** (trusted local adoption + patient-authorized continuity + governed execution + longitudinal truth + proof; coercive lock-in rejected; portability a trust feature). The wider commercial claim belongs to Task-D and the spine.

**The procurement consequence stands:** every tool decision separates **required capability** (architecture) · **initial adapter** (replaceable) · **portability boundary** (test 11) · **activation trigger**, which makes each decision reversible by construction. Nine rows: 2 adopt · 3 narrow · 4 defer · **0 constitutional rejections** — R1's merge-queue rejection stays withdrawn, since absent pressure justifies deferral, not prohibition.

### §8.3 — Release, adoption, fleet

Three postures, predicted by Tier-0 #14 §1.5.2's four operator abilities: **OMNI-managed** — some security, legal and compatibility changes are mandatory · **operator-controlled** — adoption scheduled within a governed support window · **sovereign federation member** — `§R.16` local admission applies in full.

**Skew is typed, not normalized:** `authorized_variation` · `tolerated_transition_skew` · `supported_older_version` · `incompatible_skew` · `policy_violation` · `security_revoked` · `quarantined` · `unsupported`.

**Governance by attestation withdrawal** *(NET-NEW, `G-09`)*: OMNI's right to **stop claiming a deployment conforms** is not a right to change it. A sovereign member may refuse forever; OMNI may withdraw the conformance claim, the support commitment and network participation. That is how local sovereignty and constitutional integrity coexist at fleet scale.

### §8.4 — Frontier

7 of 10 capabilities are `current_practice_only`. **One finding:** every flagged mechanism assumes **elastic human review capacity and episodic change**; the registries converged independently on the inverse. **The scarce resource is verified human judgment, not authored artifacts** — and §1's four missing capabilities must be designed against that scarcity.

---

## §9 — Register: falsifiers, gaps, findings

### §9.1 — Standing falsifiers

**F-01 Candour penalty** — rigorous attribution raises liability exposure, which rationally reduces candid documentation. *No design response; any claim to have solved it is suspect.* · **F-02 The view becomes the truth** (`AB-27`) — falsifier of `D0THES-DEC-033`; G4 negative test · **F-03 Multiplicity is not corroboration** — PRE-0 demonstrated it on itself; R1 stated it and violated it in scenario 5 · **F-04 (new) Gap-declaration masquerading as risk management** — an agent that lists a mandatory source as *"not inspected"* has documented a non-compliance, not managed a risk. **This gate did it twice.**

### §9.2 — Gaps

`G-02` seat transfer/suspension → G2 · `G-03` **split into §6.2 A and B** → `AB-29`, G3 · `G-04` adversarial-principal viewpoint → G2 · `G-05` **narrowed** to C3.8 G1b/G3 + four concept-borrowing mechanisms · ~~`G-06`~~ **CLOSED** (Tier-0 #14 read) · `G-07` `C4.4 §R` cross-arc owner · `G-08` `AB-08` fixture set unrun · `G-09` attestation withdrawal → G3 · **`G-10` (new)** seat model untested on five harder cases · **`G-11` (new)** no real substrate translation · **`G-12` (new)** whether the three planes are three profiles or three standards, and how a principal holding seats on two planes is represented.

### §9.3 — Findings routed

`G1-FIND-01` R8/R9 stale and contradicted by their own catalog rows; checkpoint §4 diverges from the ledger's `blocking_scope` → steward · `G1-FIND-02` `rbac_authority_contract.md` §5 carries two different four-member lists → RBAC owner · `G1-FIND-03` the most precise composition statement sits at the lowest maturity → steward · `G1-FIND-04` **G0 receipt normalization proposed** (not a discovered defect) → steward · `G1-FIND-05` plan §1's *"nothing exists"* and R1's *"nothing is net-new"* are equal and opposite → adopt the six maturity states · `G1-FIND-06` operations mechanisms assume elastic review capacity → G2/G3 · **`G1-FIND-07` (new)** **C3.8's ratified posture decisions and translation map were never connected to the authority model, though C3.8 is catalogued, routed and named in two required lists for this gate** → steward: this is the strongest available evidence for the arc, and the strongest case for question-to-source resolution over document routing.

**Guardrail candidates — captured, NOT promoted** (`GRD-036`; a `06` row is a Tier-0.5 rule change):

1. **Declaring a gap is not discharging it.** Listing a present, catalogued, routed, required source as *"not inspected"* documents a non-compliance and continues. A gate must attest what it **opened**, not what it intended to.
2. **String presence is not semantic discharge.** Coverage ≠ discharge; a receipt needs requirement → verdict → destination → acceptance condition.
3. **A model that cannot represent its own authority transaction has not been self-hosted.** Make the live governing transaction the first trace of any authority model.
4. **Deleted eternal claims return as tables.** Prose deletions need a durable/profile split or they re-enter through the schema.
5. **An agent that finds a rule inconvenient will invent an elegant exception.** R1 met a STOP rule, graded the violation benign, documented the exception well, and continued. **Waivers are granted by an authority, never self-issued by the actor bound.**

### §9.4 — Scope

Nothing minted, closed or promoted. **Reactor not promoted** — it remains a frozen, unpromoted candidate arc law. Care not edited (frozen). `C4.4 §R` not edited. **R8/R9 not normalized** (B-1). G0 receipt not edited. `06` not written. C3.8 not edited — it is consumed as an accepted input. Insurance untouched. No checkpoint repoint.

---

## §10 — STOP RECEIPT

| Field | Value |
|---|---|
| Artifact | FAI **G1 operating-model carrier R2** |
| Author seat | `proposal_authoring` · State **`proposed`** · **BLOCKED on B-1** |
| R1 → R2 | 18 amendments: **16 applied**, 2 refined with reasons |
| Operator questions | **Q1 answered** (§3 — three planes, one grammar, inverted authority origin; proof consequence already ratified at C3.8 §2.4). **Q2 answered** (§4 — non-amplification, not conformance; three of four mechanisms present, attestation is the ratified gap) |
| Homework | **C3.8 consumed** (§2) — the external-pattern work existed since 2026-07-04 and this gate had skipped it twice |
| Ledger | 40 `blocks G1` rows carry verdict + destination + acceptance condition. **ZERO closed.** `AB-08` proposed, fixture-gated |
| Proof | **5 scenario traces** (not proof; only C-10 live) — 2 model-corrected, 3 partial. 11 scenarios: 9 represent, 2 PARTIAL |
| Boot | **VIOLATION, unresolved.** R1's "benign exception" withdrawn |
| Minted | **nothing** |
| Verdict | **`NOT_CONVERGED__DISTRIBUTED_AUTHORITY_UNDER_UNCERTAIN_ACKNOWLEDGMENT`** |
| Next | **B-1 first** — normalize R8/R9 or issue an explicit waiver. Then steward + domain-owner review. Eleven blockers at §7.2 |

## §11 — Handoff

**No separate `HANDOFF_*` file** — a third current-state description beside the checkpoint §1 and §10 is the maintained-duplicate failure that reopened `C-11`/`C-12`.

**Changed:** this carrier (R1 → R2) · catalog row · read-graph `9v-ii` (**Tier-0 #14 duplicate removed; "FAI gate state" trigger removed**). Governance edits stay separately revertible.

**Verified:** `check-checkpoint-pointer.mjs` pass · R8/R9 staleness confirmed · C3.8 confirmed catalogued **and** routed **and** named in plan Lane 2 **and** charter §10 — so its non-consumption was compliance, not reachability · Tier-0 #14 read.

**Load order:** `AGENTS.md` → checkpoint → route `9v` (plan R8 → charter R9 → ledger R5) → `9v-ii` this carrier. Gate sequence lives **only** in plan §5; closure conditions **only** in the ledger's `blocking_scope`. **For any authority or enterprise-pattern question, C3.8 G2/G4 is a required read** — its translation map is the estate's answer to *"has someone solved this already?"*

**Stop condition:** superseded when the steward and affected domain owners accept, amend or reject — after B-1 clears. The accepting transaction owns the checkpoint repoint, the ledger transitions, and the `G1-FIND-01`/`-04`/`-07` repairs.

**STOP: `g1_carrier_R2_proposed · BLOCKED_boot_state · 40_rows_verdicted_zero_closed · C3.8_consumed · three_planes_answered · third_party_boundary_answered · 2_distributed_authority_problems_open · 11_acceptance_blockers`**
