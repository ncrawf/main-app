# v4 — FAI — G1 OPERATING-MODEL CARRIER (R3)

Document type: `handoff_or_readiness_gate` (gate-output carrier — the G1 deliverable named in execution plan §5)
Authority: `analysis_nonbinding` (`D0THES-GRD-036`). **Binds nothing. Mints nothing. Promotes nothing. Closes nothing.** Where this carrier and a controlling carrier differ, **the carrier controls and this file is corrected.**
Status: **`g1_carrier_R3 · state=proposed · BLOCKED_ON_BOOT_STATE_NORMALIZATION`**
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: **working dossier for the G1 gate output — NOT yet an acceptance object.** It carries the model proposal, the required evidence (`§E`), and the completion matrix (`§G1-CONTRACT`) that says which R8-required outputs are still missing. **Read `§G1-CONTRACT` first: it is the only honest answer to "is G1 done."**
Source-of-truth relationship: **owns nothing.** Gate sequence → plan §5. Rationale → charter R9. Finding disposition → PRE-0 ledger R5. Program state → the checkpoint. Authority truth → §4's carriers. External/enterprise correspondence → **C3.8 G2/G4**. Build-side operating model → **Build OS `09`/`10`** *(at their declared maturity — §1.3)*.
Manifest action: `add_tier2` · Review gate: `user_knox_required`

> ## ★ POSTURE
> Authored under **`proposal_authoring`** — may research, propose, author, test; may **never** accept, approve or commit. **Closes no ledger row. Does not close G1.**
> **§E is the gate's required evidence and MUST NOT be compressed, summarized or replaced by totals in any future revision.** R2 deleted three required evidence tables while keeping their totals. See §0.1.
> **Produced under an unresolved boot-compliance violation (§0.2).** Preservable as work; not acceptable as compliant until cleared.

---

## §0 — Correction receipt: R2 → R3

Third independent review; not accepted. **Two failures outrank everything else, and the first is the worst thing this gate has done.**

### §0.1 — R2 deleted its own evidence and kept the totals

Verified against the live file:

| R2 claimed | R2 contained |
|---|---|
| *"40 `blocks G1` rows carry verdict + destination + acceptance condition"* | **the 40-row semantic receipt was gone.** `AB-02`, `AB-04`, `AB-07`, `AB-14`, `INV-03`, `INV-18`, `INV-26` appear **nowhere** in the file |
| *"Nine rows: 2 adopt · 3 narrow · 4 defer"* | **the nine-row tool table was gone.** *JSON Schema*, *CODEOWNERS*, *Backstage*, *OpenRewrite* appear nowhere |
| *"7 of 10 capabilities are `current_practice_only`"* | **the ten-row frontier matrix was gone** |

**Three required G1 outputs were compressed out of existence while their totals survived** — in the document whose own guardrail candidate reads *"string presence is not semantic discharge."* R1 at least held the tables and made a weak claim about them; **R2 kept the claim and deleted the proof.** That is `C-11`/`C-12` in its purest form: **a count outliving its evidence.**

**Root cause, and it generalizes.** Each revision rewrote the whole carrier as prose. In a narrative pass, evidence tables read as *detail* and get compressed. **Required gate outputs cannot survive inside a narrative that is re-authored every round.** Two consequences:

1. **§E now fences them** with an explicit non-compression rule, and every total in this file points at its §E table instead of restating it.
2. **A banner is a warning, not an architecture — and R3's *"machine-readable descriptors survive, prose does not"* is withdrawn as overstatement.** A YAML file is as deletable as a table. **Durability comes from stable identity · versioning · append-only or explicitly-superseding revision · protected writers · required completeness checks · source linkage · and automated failure when expected evidence disappears.** Machine-readability matters because it makes those *checkable*, not because it makes them true. §E's fence is an interim warning; the durable mechanism is a G2 requirement (`B-15`).

### §0.2 — The boot violation remains unresolved

Verified: `AGENTS.md`, read-graph #15 and the checkpoint agree; **execution plan R8** still reads `pending_..._acceptance · nothing_started`, `Manifest action: PROPOSED — not landed`, and its §7 `Next` still names four things that already happened; **charter R9** matches and still declares the integrator **VACANT**; and **the catalog rows for both read `ACCEPTED`.**

R1 graded this *"directional and benign"* and continued. Withdrawn in R2, and still true here: **a waiver is granted by an authority, never self-issued by the actor bound.** `B-1` at §6.2. Not repaired here — writing accepted gate carriers is not this seat's act.

### §0.3 — Applied

| # | Correction |
|---|---|
| 1 | **Evidence restored** — §E1/E2/E3/E4, fenced (§0.1) |
| 2 | **Build OS `09`/`10`/`11` read** — third required-source failure closed (§1.3) |
| 3 | **"Three planes" withdrawn** — it minted vocabulary that already exists, against a doctrine rule forbidding exactly that. Replaced by an inherited rule + Care's U/C/A crosswalk + existing profile axes (§2) |
| 4 | **"NIST 800-207 isomorphic" downgraded** to *partial correspondence*; C3.8 itself says *"strongly ZTA-compatible in principle"*, and an owning-domain commit is **not** a NIST Policy Administrator (§5) |
| 5 | **SPIFFE downgraded** — authenticated workload **identity**, which is an input to authorization, not authorization (§5) |
| 6 | **in-toto/SLSA expanded** — the build-plane gap is not "attestation"; it is authorized functionaries, isolated execution, non-forgeable provenance, declared inputs, material/product rules, protected signing, and verification at admission **and** release (§5) |
| 7 | **"Conformance is the wrong requirement" corrected** — *internal-model equivalence* is not required; **boundary conformance is mandatory**. GCE is the established **home** for that contract; **the contract content does not yet exist** (thesis §C paused) — §3, `G-18` |
| 8 | **C3.8 does not moot Lane 1** — it answered security/enterprise questions, not architecture-description, variability, profile-composition or conformance practice (§5.3) |
| 9 | **Blockers sorted by rightful gate** — G1 is not held hostage to G4 proof, and unfinished G1 semantics are not pushed downstream (§6.2) |
| 10 | **G4 adversarial fixtures added to existing tests** — no new gate, no new arc (§E5) |
| 11 | **Verdict relabelled** to the actual incompleteness (§6.1) |
| 12 | **Comparator placement corrected** — Build OS `10` requires new comparators to be recorded in `comparator_analogy_registry.md`, *"never re-scatter."* §5 is therefore a **consumption** table pointing at existing records, plus proposed registry rows — not a new comparator home (§5.4) |

**One refinement rather than verbatim application.** The review asks R3 to *"reconcile the authority model against the actual five-layer Build OS."* Done — but **the Build OS corpus is consumed at its declared maturity, not as settled truth** (§1.3). The operator's read is that the Build OS arc may be unfinished; `10` says so about itself.

### §0.4 — Source posture

**Read fully:** plan R8 · charter R9 · PRE-0 ledger R5 · checkpoint · Tier-0 #14 · C3.8 G2 + G4 · **Build OS `09` and `10`** · Artifact Index · `rbac_authority_contract.md` · Agent Runtime capture. **Read to controlling sections:** Build OS `11` (status + stale-foundation warning) · `02_authority_routing_map.md` · GCE/enterprise posture · thesis §A/§B envelopes · `EVRUN-000007` `_05 §I.13–I.15` + `_06` · `EVRUN-000008` `_04`/`_03` · Care §§1b·4·5a·5b·5b.1·9·9a·13·18·**19** · Identity/Federation/D7 · `C4.4 §R`. **Searched:** six AI-corpus registries; estate external-pattern vocabulary. **Still not inspected — declared, not discharged:** C3.8 G1b/G3 · Lane-1 primary sources · System/Surface Maps · Polaris · Platform + Accountability captures · C4.6 · federation-permeability arc.

---

## §G1-CONTRACT — completion matrix against the R8 required outputs

> **This is the readiness contract, NOT the acceptance object and NOT the architecture.** It answers one question — *what must exist before G1 can be accepted, and what is still missing.* **Accepting this matrix would be accepting a checklist instead of an operating model.** Its absence is nonetheless why four revisions produced review dossiers instead of a gate result. **A cell is `COMPLETE` only when its sources are read, its decision is made or explicitly named open with an owner, and its evidence is in `§E`.**
>
> **Method rule: whole-dossier rewriting is retired as the *evidence-completion* method for this gate.** Three of four revisions re-authored the entire carrier, which is how required evidence got deleted (§0.1) and how the load-bearing model moved three times. **This retires uncontrolled reauthoring — it does NOT retire synthesis, architecture, or the eventual authoring of a clean carrier.** Closing cells 2–7 *requires* bounded authoring; source retrieval is the prerequisite, not the substitute.
>
> **Global completion rule:** *no output is complete while its model section, provenance table, blocker table, STOP receipt, catalog entry and route entry disagree.* The previous pass changed conclusions in the body and left six surfaces stale — which is why this rule exists.

| # | R8-required G1 output | Carrier section | Required sources read? | Decision state | Residual | Acceptance condition |
|---|---|---|---|---|---|---|
| 1 | **artifact metamodel** | `§E1` `AB-08` + `§E-note B` | partial — Artifact Index ✔, governance taxonomy ✔ | **proposed, fixture-unproven** | the 12-artifact fixture set is unrun | fixture set classifies with no ad-hoc exception (`G-08`) — **and per the ledger this blocks G1, not G2** |
| 2 | **architecture-operations loop** | `§6.3` roots↔functions matrix | ✘ System Map · Surface Map · Polaris · Platform · Accountability unread | **INCOMPLETE** — a capability matrix is not an operating transaction | the actual proposal → impact → review → conformance → propagation → integration → resolution transaction is not specified | the loop is specified as a transaction with actors, gates and artifacts |
| 3 | **architecture graph semantics** | `§6.3` + plan §3.1 relations | partial | **INCOMPLETE** | no cardinalities, inheritance rules, applicability or conflict semantics | relation model complete enough for a validator to reject a bad edge |
| 4 | **change lifecycle** | `§E1` `AB-07` + `§6.4` | partial | **INCOMPLETE** | field additions and release postures, not a state model | full state model incl. the five change classes |
| 5 | **profile / deployment resolution** | `§2.4` axes + `§6.4` postures | ✘ pre-spine map §5 · Federation read; C4.6 unread | **INCOMPLETE** | proposed axes, no deterministic effective-resolution model | resolution deterministic for an explicit `as_of`, failing closed on contradiction |
| 6 | **conformance + observability model** | `§E2` `§E3` + `§E1` `AB-04`/`AB-10` | partial — C4.6 unread | **INCOMPLETE** | tool and capability tables, not the conformance model | the model itself, incl. forbidden-loosening as a machine check |
| 7 | **adopt / reject / transfer-limit matrix** | `§5` + `§E2` | ✘ Lane-1 primary sources unread | **INCOMPLETE** | transfer limits derived from C3.8 only; the architecture-management lane is unread | Lane-1 read; per-mechanism transfer limits stated |
| — | **`§G1-AUTH`** *(mandatory work package)* | `§4` + `§E4` | partial — Build OS ✔, Care ✔, RBAC ✔, GCE ✔ | **partially converged** | authority-source decomposition (§4.2) unsettled; 2 of 11 scenarios PARTIAL | the decomposition settles and every scenario resolves without invented authority |

### §G1-CONTRACT.b — gate-compliance obligations *(not model outputs, but required for acceptance)*

| Obligation | Evidence | Status | Acceptance condition |
|---|---|---|---|
| PRE-0 rows dispositioned | `§E1` | **proposed** (40/40 verdicted, 0 closed) | steward + affected owners accept |
| One verdict per tool candidate | `§E2` | **complete as proposal** | nine unambiguous verdicts — met (1/5/3/0) |
| Current-practice vs 2030/35 evaluation | `§E3` | **complete as proposal** | ten capabilities covered — met |
| `M-106` inheritance / dedup | `§6` source map | **partial** | no unsupported novelty claim survives |
| Eleven authority scenarios | `§E4b` | **partial** | each resolves, or is named open with an owner per R8 |
| Boot / state integrity | `B-1` | **FAILED** | R8/R9 normalized, or the fields marked historical |

**Honest reading: one of eight outputs is at "proposed"; none is complete; one gate obligation has failed.** The model work is real and the evidence is restored, but **G1's contract is not close to satisfied.** Items 2–7 need the unread Lane-1 and Lane-2 sources **and then bounded authoring** — reading alone will not produce an operations loop, graph semantics or a conformance model. **There is no path from unread sources to a completed architecture that contains no writing.**

---

## §1 — Why this kept happening

### §1.1 — Three layers, in order of force

**1 — The estate is not yet operable as one maintained system.** Build OS `10` says it about itself, and more bluntly than I did: ***"the doctrine is ahead of the tooling"***, and a mature implementation *"would not require a human to interpret hundreds of lines of Markdown every time a parallel package starts, nor rely on an agent remembering that a surface is protected."* Corroborating evidence found this pass: **`02_authority_routing_map.md` — a Tier-0 `doctrine` file whose passport reads *"Binding map for category → canonical home"* — has Status `Skeleton (Phase 0)`.** A binding routing contract that is a skeleton is the diagnosis in one line.

**2 — Agents did not comply with the reading they were given.** Tier-0 #14 (mandatory) unread. C3.8 (catalogued, routed, named in plan Lane 2 **and** charter §10) unread twice. Build OS `09`/`10`/`11` (plan Lane 2) unread twice. **None was unreachable. All were skipped, and each skip was documented as a gap and accepted as if documentation discharged it.**

**3 — Absent shared framing amplified both.** Real amplifier; not the root cause. R1 led with it, which was self-flattering, and that framing is withdrawn.

### §1.2 — The buildable consequence

| Failure observed | Capability required | Root |
|---|---|---|
| plan banner contradicts checkpoint; catalog row contradicts the file it describes | **consistency validator** over declared state | Explicit + Observable |
| mandatory source unread; the skip recorded as a gap and accepted | **boot-corpus load attestation** — a gate proves what it *opened* | Observable |
| a completed, ratified arc's answers never reach a gate that names it | **question-to-source resolution**, not document-to-document routing | Resolvable |
| required evidence deleted by a narrative rewrite (§0.1) | **machine-readable gate outputs** — descriptors, not prose | Explicit |
| the same law re-derived at three altitudes | **generated cross-reference from descriptors** | Explicit |

### §1.3 — Build OS, consumed at declared maturity

| Source | What it settles | Declared maturity |
|---|---|---|
| **`09` Layer Model** | five permanent layers — Truth · Execution · Command/Tool · Runtime Proof · Governance Cadence; five binding interaction rules; **and the rule this gate re-derived: *"build-agent authority never becomes product authority"*** | `Active (v1)`; explicitly *"not a complete Build OS"* |
| **`10` Rollout Sequence** | the nine Step-5 mechanisms (manifest · validator · launcher · claims/leases · policy-as-code · status projection · protected integration · **cold-boot/replacement-agent eval suite** · de-scaffolding) | **"captured interpretation, NOT final design"**; *"the doctrine is ahead of the tooling"* |
| **`11` Build Entry Gate v0** | lane-admission gate; G2 must pass it | **frozen against the pre-vNext foundation** — cites the demoted legacy map; *"do NOT resume any build lane against the legacy map"*; must be re-pointed at the vNext ratification gate |

**Consumed as inputs at that maturity, not as settled authority.** `09`'s five layers are an operating-model partition of the **build side**; they are not an authority taxonomy and do not compete with the authority grammar at §4. **`11`'s frozen state is itself a G2 blocker** — G2 requires a Build Entry verdict from a gate that is frozen against a stale foundation (`B-7`).

**Two rules from `09` that bind this carrier's own conduct:**

- **Vocabulary discipline** — *"Reuse established canonical terms… Introduce new vocabulary only when existing terms cannot discriminate a materially distinct capability, and then through explicit semantic review."* **R2's "three planes" violated this.** §2.
- **Comparator placement** — new comparators are recorded in `comparator_analogy_registry.md`, *"never re-scatter."* §5.4.

---

## §2 — Build vs care authority *(operator question 1, corrected)*

### §2.1 — R2's answer was a re-derivation

R2 minted **"three planes — build/management, control/operations, care/use"** with *"inverted authority origin."* Withdrawn, for three reasons: `plane` is already taken (P0–P6 in the Surface Map); the Build OS already partitions the build side into **five layers**; and `09`'s vocabulary-discipline rule forbids minting a term when existing ones discriminate. **The analysis was not wrong. Naming it a new partition was.**

### §2.2 — The rule already exists

> **Build OS `09`, Layer 2, verbatim: *"build-agent authority never becomes product authority."***

Stated as doctrine at `Active (v1)`, in a file named in this gate's Lane-2 required set. **This gate re-derived it twice.**

### §2.3 — And the mechanism for the differences already exists too

Care §19 carries a **law-scope propagation crosswalk** that is the estate's own answer to *are these the same physics*:

- **U — universal**: propagate to Platform/Accountability. Partial-world-model honesty · **candidate ≠ commit** · participant/context/authority gate separation · actor-taxonomy distinctions · lineage · **multiplicity ≠ independence** · **visibility ≠ authority** · explicit degradation · reopen-without-erasure.
- **C — care-specific**: **do NOT propagate.** Clinical adoption · patient/surrogate consent · care relationships · procedure authority · patient continuity · clinical non-action · treatment-outcome semantics · patient-facing explanation and appeal.
- **A — analogous only**: shapes correspond, semantics differ. Effect-observation-contract ~ runtime-health · plan ~ change_set · care_obligation ~ response_obligation · degraded-care ~ runtime-failover · **participant-admission ~ tool/runtime-authorization**.

**It is finer-grained than declaring regions** — it says *which* laws cross and which must not.

**But its status must be stated honestly, because R3 got this wrong too.** R3 called the crosswalk *"already law in its carrier."* **It is not.** The Care capture is `analysis_nonbinding`, `REVIEW-DRAFT (NOT closed)`, **frozen** under forensic audit, and its `[INV]` marks denote *candidate* invariants. **Correct status: an inherited candidate crosswalk from a frozen carrier, proposed here for cross-context generalization, requiring G3 reconciliation.** Applying it from Care to the build side is itself a **cross-scope synthesis** — calling it settled law to avoid admitting authorship is the same laundering R3 accused R1 of. `G-16`.

### §2.4 — What survives from R2's analysis — and it is smaller than R3 claimed

R3 replaced "three planes" with *"build authority flows downward; care authority is externally held."* **Still too simple, and withdrawn as a binary.** An organization **can** grant and revoke local privileges, appointments, access, delegations and operational authority in a care context — what it cannot do is manufacture a licence or a patient right. Care itself enumerates origins that cut across any build/care line: statute and court order · licensure and professional scope · patient-held right and consent · surrogate representation · organizational appointment and clinical privileges · protocol delegation · operator policy · emergency authority.

**The load-bearing rule is therefore per-act, not per-region:**

> **Every consequential act resolves its authority origin and instrument independently.** The same context routinely mixes origins — an organizationally appointed clinician, exercising a licensure-held scope, under a patient-held consent, within an operator policy.

**Consequence for R3's own claim:** *authority-origin direction* is at most a **descriptor field** on an authority record. **It has not earned the status of a profile axis**, and R3's promotion of it is withdrawn. The remaining candidate axes — delegability · non-transferability · reversibility class · liability bearer · proof obligation · degraded-operation rule · jurisdictional variance — are **proposed for G3 adjudication**, not settled here.

**Clinical judgment is not a region either** — it is a **non-transferable authority basis** (`INV-10`: delegation may authorise execution without authorising professional judgment). Delegate the act, not the judgment.

**How many contexts there are is NOT settled here.** That is G3's classification work. **`G-12`.**

### §2.5 — The proof consequence, already ratified

C3.8 **G4 §2.4**, operator-ratified: *"Proof fabric extends to supply-chain provenance (build/model/dependency), not only data/decision provenance."* Read against §2.3, that is the statement that **the build side carries proof obligations the care side's data/decision provenance does not supply** — the practical half of *"build-agent authority never becomes product authority."* Answered 2026-07-04; never connected to the authority model until now.

---

## §3 — Third-party agent harnesses *(operator question 2, corrected)*

**R2's keeper line — *"conformance is the wrong requirement"* — is wrong as written, and it is withdrawn.** The intuition was right; the sentence overshot.

> **Internal-model equivalence is not required. Boundary conformance is mandatory.**

A third-party harness need not reproduce OMNI's ontology or run OMNI's authority engine internally. **It must conform to an OMNI-owned boundary contract.**

**But R3's *"GCE already owns that contract"* is only half true and is corrected here.** The ratified enterprise posture establishes GCE as the operational capstone and states that OMNI owns *the capability contract, authority envelope, context packet, trust-transfer record, domain-commit boundary and audit/proof.* **That assigns the home. It does not supply the contract** — thesis **§C, GCE's body, is PAUSED and undrafted**, and no build-facing boundary contract has been authored or installed. **Accurate: GCE is the established architectural home and pattern; the boundary-contract content is incomplete.** The table below is therefore **new synthesis proposing that content**, not retrieval of an existing contract. `G-18`.

**What the boundary contract must govern** — R2 listed three of these:

| Obligation | Estate status |
|---|---|
| **authenticate** the workload and its operator | **gap** — SPIFFE-class identity unmodeled (C3.8 G2 row 16) |
| **authorize and attenuate** the exact capability | present — `delegated_authority_envelope`, `capability_envelope` ≠ authority |
| **isolate** execution and credentials | **gap** — C5/security lane (C3.8 row 13) |
| **validate** inputs, tool definitions and outputs | **partial** — P35 modes + `GRD-039`; schema-pin and runtime output validation owed (C3.8 row 15) |
| **constrain side effects**; require idempotency or compensation | partial — Reactor invariants; §E4 trace 3 residue |
| **attest** runtime, model, harness, step and artifact provenance | **gap** — the in-toto/SLSA obligation set (§5.2) |
| **admit locally** every inbound claim | present — `C4.4 §R.16` |
| **observe** behaviour and conformance continuously | partial — C3.8 §2.5 ratifies continuous assurance as LAW; lane shape open |
| **revoke, suspend, quarantine, kill** | partial — revocation strong; §E4 trace 3 |
| **preserve** audit and incident evidence | present, distributed (§4.4) |

**And the hole R2 did not see.** OMNI can guarantee non-amplification **only through OMNI-mediated capability boundaries.** A foreign agent holding independent external credentials — its own pharmacy account, its own EHR login — can act outside OMNI entirely. Attenuating what OMNI hands it does not constrain that. **The boundary contract must therefore distinguish four effect classes:** effects **mediated through** OMNI · effects **asserted back to** OMNI · effects performed **independently outside** OMNI · and **what proof is required before any of them may influence OMNI state.** The fourth is where `§R.16` local admission does the real work. **`G-13`.**

---

## §4 — `§G1-AUTH` — the model

### §4.0 — Provenance labels

`INHERITED` · `RECONCILED` (composed, no semantic addition) · `SYNTHESIZED` (candidate built from existing law) · `NET-NEW` · `OPEN`.

| Construct | Provenance |
|---|---|
| Reactor's eight invariants · Tier-0 #14 three-layer pattern · GCE composers · RBAC spine + six-layer resolution · Care's four projections · the nine-term meet · five-layer allocation · Build OS five layers | **INHERITED** (Reactor and Care frozen/unpromoted; the meet nonbinding; Build OS at §1.3 maturity) |
| *"build-agent authority never becomes product authority"* · ZTA/ReBAC/SPIFFE/SLSA correspondences | **INHERITED** (Build OS `09`; C3.8 G2/G4) |
| Care's U/C/A crosswalk, applied beyond Care | **INHERITED CANDIDATE + SYNTHESIZED cross-scope generalization** — the crosswalk is `analysis_nonbinding`, `REVIEW-DRAFT`, frozen, `[INV]` = candidate; generalizing it past Care is this gate's synthesis (`G-16`) |
| standing context ⟂ transition transaction · commitment/custody as concurrent tracks · six non-collapsing questions · seat/principal/actor/grant · durable-vs-profile agent split | **SYNTHESIZED** |
| the **five-axis authority decomposition** (§4.2) | **SYNTHESIZED proposal**, grounded in Care §5a's anti-collapse distinctions. *(R3's single `authority_basis` enum was malformed and is withdrawn; it was never `RECONCILED`.)* `G-17` |
| decision-condition predicate · the four effect classes (§3) · governance by attestation withdrawal (§6.4) | **NET-NEW** |
| authority-origin direction | **CANDIDATE DESCRIPTOR FIELD — not a settled profile axis.** *(R3 promoted it to a profile axis; withdrawn at §2.4.)* Its proof consequence is **INHERITED** (C3.8 G4 §2.4) |
| the GCE boundary-contract obligation set (§3) | **NET-NEW synthesis** — GCE is the home; the contract content does not exist (`G-18`) |
| how many authority contexts exist | **OPEN** — G3 |

### §4.1 — Two structures

Authority contains standing structures that are not transitions; flattening them makes *consequential transition* a god-abstraction.

**A — Standing authority context** *(as-of graph)*: principals · represented principals · actors · authority bases · relationships · roles, seats, appointments, assignments · grants and prohibitions · consent and directives · licensure and jurisdiction · policies and variation · ownership boundaries · current validity.

**B — Consequential transition transaction** *(event path)*: proposal or intent → context resolution → admission → required authoritative acts → commitment → custody → execution, non-action or failure → evidence → correction, reopening, remedy.

**A is queried; B is executed.** The inherited perspectives project onto A, B, or both. Reactor is a frozen, unpromoted **candidate arc law over B** — not one of the perspectives. **No count is stated;** R1 said *"seven views"* over an eight-row table and propagated it into three files, which is `C-11`/`C-12` again. The reconciliation follows the compositional precedent Tier-0 #14 §1.5.1 cites, resting on `D0THES-REV-045` — **a nonbinding routed finding, not a ratified universal method.**

### §4.2 — Authority decomposed into five axes — **NOT one enum**

R2 replaced *universal grant* with a single `authority_basis` enum mixing rights, licensure, appointments, consent, directives, court orders and policies. **Withdrawn.** Care §5a says this explicitly and R3 quoted it while violating it: *"These are related but semantically + legally DISTINCT — do NOT coerce into one consent object/state-machine… A DPOA is an authority basis; a directive is an instruction; a visibility grant is a permission; a purchase is a transaction authorization; a signature is evidence."*

**One flat enum over unlike kinds is the malformed-enum defect Care §5b.1 already diagnosed and fixed once.** R3 recreated it under a wider noun. **G1's job is the decomposition, not the enum:**

| Axis | What it answers | Values (illustrative, not closed) |
|---|---|---|
| **1 · Authority source / entitlement** | *what entitles anyone here at all* | right · licensure · appointment · relationship · statute · contract |
| **2 · Authorization instrument** | *the act that authorizes this* | consent · order · grant · directive · policy/protocol · court order · emergency invocation |
| **3 · Representation binding** | *who acts for whom, on what basis* | self · surrogate/guardian/DPOA · parent · delegated agent |
| **4 · Evidence form** | *how it is recorded* | signature · attestation · witness · recorded order |
| **5 · Scope + validity** | *bounds* | purpose · subject · action · time · jurisdiction · conditions · **revocation** |

**Only axis 2's `grant` carries a `delegated_authority_envelope`.** A patient's own right (axis 1) is not something OMNI granted, and R1's diagram — a grant between every actor and every transition — made it look like one.

**These axes are proposed, not settled.** Reconciling them against Care's own composition-field list is G3 work; Care is frozen and FAI may not author into it. `G-17`.

### §4.3 — Four stages, two concurrent tracks

R1 put owning-domain **commit** inside a pre-act admissibility conjunction, making a commit a precondition of reaching the commit. RBAC §5's four-way wording describes the **valid whole path**, not a pre-execution gate.

**1 Admission** (may this be attempted?) → **2 Commitment** (which owning domain makes which state authoritative?) → **3 Execution / non-action / failure** → **4 Enforcement + proof.**

**Commitment and custody remain concurrent tracks**, because Reactor invariant 4 (*no silent orphaning*) is only necessary if a transition can be committed with custody unaccepted, or custody accepted with nothing committed.

**Six non-collapsing questions:** accountability · representation · admissibility · commitment · custody · proof. Each collapse has a named victim: 1↔2 agent-as-principal · 3↔4 capability-as-commit-authority · 4↔5 the orphaning class · 3↔6 audit-log-as-authorization · 1↔4 *"the payer determines clinical indication."*

### §4.4 — Proof is distributed

Not *"owned by the Evidence Plane."* **D7** owns durable artifacts and consent records · **RBAC** permission and attestation audit · **Federation** cross-boundary decision records · **source systems** their externally committed records · **owning domains** committed state and domain evidence · **the Evidence Plane ingests, tests and routes.** *No plane owns all proof.*

**Composer disambiguation:** *the composers* = **GCE's six** (Identity · Federation · RBAC · D7 · CNS-Meta · owning domain). RBAC's **four-way spine** and Care's **four projections** are different sets, named explicitly wherever used.

### §4.5 — Decision conditions; static and dynamic SoD

> A **decision condition** is an explicit predicate over independently attributable **approvals**, **refusals**, **abstentions**, **required-party participation**, and **non-overridable rights or duties**.

Refusals are first-class (`INV-30`); *contributions are not votes* (Care §9a). Thresholds are profile configuration. **Both SoD forms are architecture:** **static** — a holder may never occupy both seats; **dynamic** — may occupy both, may not exercise both on the same change. R1 asserted only the dynamic form.

### §4.6 — Seat · accountable principal · exercising actor · grant

| Object | Lives in | Changes by |
|---|---|---|
| **Seat** — allowed decisions + explicit prohibitions | architecture | amendment |
| **Accountable principal** — bears the rights/duties/liability engaged | register | record edit |
| **Exercising actor** — performs the seat's action | register | record edit |
| **Grant** — scope · purpose · time · conditions · proof · revocation · escalation | runtime record | ordinary |

Reuses RBAC's existing assignment/grant separation plus `system_actor_atom_grant`; **`AB-12` self-hosting means reusing that mechanism, not paralleling it.** **Not yet general** — untested against a physician who is employee-actor, clinical committer *and* independently accountable professional principal; a surrogate; an external payer agent; a deterministic Runtime-Operations component; multiple domain-owner principals on one change. **`G-10`.**

### §4.7 — Agents: durable vs profile

**Durable:** no actor self-authorizes · capability does not create authority · execution does not create principal status · **principal status and professional authority are established externally; the architecture records the basis, never confers it, and never prohibits what an external regime may later establish** · no actor is both proposer and accepter where independence is required · every consequential act resolves to a rightful commit owner and an attributable chain.

**Current profile (2026), revisable:** AI never final-authors safety-sensitive atoms · model-bearing actors may not commit domain truth while a deterministic control component may commit bounded operational state · only human actors occupy care-ownership roles · agents in this arc hold `proposal_authoring` only.

### §4.8 — Default-deny, scoped

*Required positive authority may never be inferred from absence. Where a consequential act requires a positive grant and none resolves, execution **fails closed** — while the underlying state stays typed as absent · unknown · unavailable · not-applicable · denied · exception-authorized, each with a named owner.* **Fail-closed is an execution rule, not an epistemic verdict.**

### §4.9 — Classification

**Standard:** the six durable invariants · required-positive-authority · no-scalar-authority · necessary-never-sufficient · point-of-consequence reauthorization · the six non-collapsing questions · both SoD forms. **Domain contract:** the composers, spine, resolution, attestation tiers, consent-gate; Care's projections and `approval_requirement` (Care-owned). **Operating profile:** seat catalogs · thresholds · today's agent constraints · the §2.4 **candidate** axes *(authority-origin direction is a descriptor field, not among them)*. **Runtime configuration:** the registers. **Controlled vocabulary:** the three-envelope family — **and only axes 1, 2 and 4** of §4.2 (source/entitlement · instrument · evidence form); **axis 3 is a relationship** and **axis 5 a structured object with temporal fields**, neither of which is a vocabulary. **Candidate standard pending promotion:** the nine-term meet (`G1-FIND-03`). **All §4.2 classifications are proposed** (`G-17`).

---

## §5 — External correspondences, at their true strength

### §5.1 — Downgraded

| Claim R2 made | Corrected |
|---|---|
| *"NIST 800-207 isomorphic"* | **Partial correspondence.** NIST's **PA** establishes or terminates the access path and issues session credentials; an OMNI **owning-domain commit** makes domain state authoritative. Those are different acts. C3.8's own wording is *"strongly ZTA-compatible in principle."* **Correct form:** *OMNI's authority path partially corresponds to PE/PA/PEP separation; domain commitment adds semantics the access-path model does not represent.* That is more useful, because it names exactly where OMNI extends the pattern. |
| *"SPIFFE-class attestation"* as the missing piece | **SPIFFE proves workload identity.** Identity is an input to authorization, not authorization. It does not settle delegated purpose, patient or tenant scope, permitted side effects, professional authority, consent, domain commitment or output admissibility. |
| *"crypto-attestation is the gap"* | **Understated.** The in-toto/SLSA obligation set is: authenticated workload identity · **authorized step and functionary** · isolated execution · **non-forgeable provenance** · complete declared inputs and parameters · material/product rules · protected signing authority · **verification at admission AND release.** Naming a comparator does not discharge a contract. |
| ReBAC | **Relationship-shaped mechanism present** (Federation grants); **not** a completed OMNI policy layer. C3.8's gap is *naming a declarative policy layer*, not the absence of relationship semantics. |

### §5.2 — What is inherited, and from where

Every correspondence above is **consumed from C3.8 G2/G4**, which mapped zero trust, fine-grained authorization, non-human identity, MCP/tool security, supply-chain provenance, tenant ownership, model posture and continuous assurance — gate-approved 2026-07-03/04, `analysis_nonbinding`, with G4's posture decisions recorded as **operator-ratified direction for the spine author, not final doctrine.** R3 does not upgrade that status.

### §5.3 — C3.8 does not moot Lane 1

C3.8 answered **security and enterprise-pressure** questions. Lane 1 asks **architecture-management** questions, and they are different: how architecture descriptions relate and correspond (42010) · how profiles inherit and constrain-never-loosen (FHIR) · how variation points keep variants one architecture (SEI) · how several profiles compose on one deployment (IHE) · how interfaces separate from internals (AUTOSAR) · lenses over one workload (AWS) · impact analysis and resource protection (Palantir) · catalog mechanics (Backstage). **R2's claim that C3.8 made Lane 1 *"mostly moot"* is withdrawn.** `B-8`.

### §5.4 — Placement

Build OS `10`: *"Record any newly used comparator in `comparator_analogy_registry.md` — never re-scatter."* **§5 is therefore a consumption table pointing at existing records, not a new comparator home.** Comparators used here that may not yet have registry rows — in-toto · SLSA · SPIFFE · Zanzibar/ReBAC · NIST 800-207 · TUF-class thresholds · static/dynamic SoD — are **proposed as registry rows** for the `architecture_steward`; `10` also warns the comparator field is **OPEN and non-exhaustive — do not narrow it.** **`G1-FIND-08`.**

---

# §E — REQUIRED GATE OUTPUTS

> ## ★ DO NOT COMPRESS
> **`§E1`–`§E4b` are G1's required evidence. `§E5` is NOT a G1 output** — it is a **routed G4 proof plan** produced here and carried forward under G4's existing tests.
> **A future revision may correct a row; it may NOT replace any table with a total, a summary or a count.** R2 deleted three of them while keeping their totals (§0.1). Every aggregate elsewhere in this file points here.
> **Vocabulary:** rows carry **proposed dispositions supported by evidence.** Nothing here is *discharged* or *closed* — this file is `analysis_nonbinding`, authored under `proposal_authoring`, and the ledger transition belongs to the accepting transaction.

## §E1 — Ledger semantic receipt — the 40 `blocks G1` rows

Grouped only where rows share one verdict and destination, per the ledger's granularity rule. **Zero rows are closed by this file.**

| Rows | Inherited requirement | Verdict | Resulting law / deferral | Destination | Acceptance condition |
|---|---|---|---|---|---|
| `AB-01` | shared-mechanism disclosure form | inherited + extended; both claimed absences verified real | 7-question universal core + triggered overlays; `C4.4 §R` stays the knowledge/source profile | §E-note A | C4.4 domain owner accepts the cross-arc extension (`G-07`) |
| `AB-02` | loss test | adopted narrowed | loss of a shared non-owning mechanism must never **silently transfer authority, fabricate correctness or create false certainty**; it may reduce availability/freshness/verifiability and must **expose the degradation and fail closed where consequence requires** | shared-mechanism standard candidate | steward accepts |
| `AB-03` | minimality budget | adopted narrowed | a shared mechanism may compute allowed/correct/equivalent/binding **only as an attributed, versioned result for a named principal, basis, policy and scope**; never elevated to universal truth or another principal's commitment | same | steward accepts |
| `INV-14` | substrate is not neutral | adopted | *anything defining envelope, addressing, time and conformance exercises power* — **abandon neutrality as a goal; pursue minimality plus exit** | same; drives core Q7 | steward accepts |
| `AB-04` | two-implementation rule | **rejected as a universal mandate** + replaced | **independence-proof ladder**: second implementation · independent parser/validator · independently authored conformance suite · alternate consumer · portability/fork drill · standards-native comparison. **Strength rises with consequence and lock-in risk** | conformance model | steward accepts |
| `AB-05` `AB-06` `INV-24` `INV-26` | local admission; version skew; fleet desired state; federation cannot adopt for a member | inherited + **corrected by trace 5** | three release postures + typed skew + attestation withdrawal | §6.4 | steward + Federation owner |
| `AB-07` | change capsule | adopted narrowed as input to plan §3.1 | adds rationale · **refusals** · conditions · rollout. **A manifest recording approvals but not refusals silently converts a blocking domain-owner objection into an absent approval** (`INV-30`) | G2 change-manifest schema | steward at G2 |
| `AB-08` | artifact taxonomy granularity | **PROPOSED, fixture-gated — NOT closed** | question is malformed; passport ⟂ descriptor; axes with `plane` ⟂ `viewpoint_or_view` split; role registry open | §E-note B | the 12-artifact fixture set passes (`G-08`) |
| `AB-10` `INV-25` | conformance as attributed claim; conformance ≠ compliance ≠ acceptance | adopted narrowed | claim carries issuer · profile · version · environment · exceptions. **Plural certification NOT adopted** | conformance model | steward accepts |
| `AB-11` | external mechanisms as named inputs | **proposed disposition, partially supported** | C3.8 covers security/enterprise; **architecture-management sources still owed** (§5.3) | Lane 1 | `B-8` closed |
| `AB-12` | governance self-hosted on OMNI's primitives | **proposed disposition supported by trace evidence** | four-object seat model, corrected against the live C-10 transaction; reuses RBAC's assignment/grant split | §4.6 · §E4 trace 1 | steward accepts |
| `AB-14` `INV-12` `INV-13` | portability is relationship portability | adopted narrowed | **warrant re-anchoring + commitment novation**, proven by drills; a continuity bundle imports as **attributed evidence** and does not become the receiver's master record; fork rights → operator | G1 contract + G4 drill | steward; operator decides fork rights |
| `AB-15` `INV-17` | one issuer vs collective assertion | adopted narrowed — fork dissolved | **atomic statement** = one issuing principal, many actors/signers/witnesses/dissents; **collective act** = composite with its own identity, named body, decision rule (§4.5), independently attributable constituents | information contract | steward accepts |
| `AB-16` `AB-17` `INV-05` | consent state modelling | adopted narrowed; **routed, not applied** | four orthogonal axes — `choice` ⟂ `communication` ⟂ `legal_effect` ⟂ `authority/source`; **`overridden_by_law` is a legal-effect state over a separately preserved refusal**; silence is `choice = unknown` and never resolves to consent by timeout | **G3 Care** (frozen) | Care owner, post-forensic |
| `AB-24` | degraded attribution | adopted narrowed | an honest degraded-attribution class — *"received by fax from a claimed sender"* — never a manufactured signature to satisfy a schema | information contract | steward accepts |
| `AB-25` | adversarial principals | adopted, **reclassified** | an **assurance viewpoint**, not an architecture role | §E-note B · `G-04` | steward at G2 |
| `AB-26` `INV-16` | candour penalty | adopted narrowed; register must exist | **standing falsifier, not a design requirement**; §7.1 is the register | §7.1 | condition met |
| `AB-30` | jurisdiction variation | adopted narrowed | required **profile axis**; the architecture must express it; legal answers → FWREG | profile model | steward accepts |
| `AB-32` | human factors | adopted narrowed; R0's routing-out stays reversed | viewpoint + conformance hooks retained; **projections must not become de facto authority merely by being easier to consume**; full programme → FWREG | G1 viewpoint + G4 hooks | steward accepts |
| `INV-03` | signature ≠ authorization | adopted narrowed | a signature proves control of a signing mechanism; it binds actor · issuing principal · **authority basis** · scope · time · jurisdiction · **verifier decision as a separate attributed act** | §4.2 | RBAC owner at ratification |
| `INV-04` | consent engines | adopted narrowed | may issue an **operative** decision only for a named principal under an explicit delegated policy and envelope; otherwise emits evidence; **never authors universal consent truth** | §4.2 | RBAC + D7 owners |
| `INV-19` | no global authority graph | adopted | **attributed authority claims + verifier-specific acceptance projection**; authority evidence is disputed, jurisdiction- and time-dependent | §4.1 A | steward accepts |
| `INV-29` | professional vs organizational statement | adopted narrowed | permit clinician statement, organisational endorsement, or both — **each separately attributable** | §4.2 | steward accepts |
| `INV-07` | protocol completeness ≠ formation | adopted | a compact/protocol engine may declare **protocol completeness only**; binding transactions need independently signed commitments | information contract | steward accepts |
| `INV-10` | agent action classes | adopted, **retyped** | durable invariants vs operating-profile constraints; R0's categorical table withdrawn | §4.7 | steward accepts the split |
| `INV-15` | patient asymmetry | adopted as law candidate; **routed, not applied** | rights requiring patient action are modelled as **unexercised** and enforced by default system behaviour | **G3 Care** | Care owner |
| `INV-18` | logical instance ≠ authority domain | adopted | separate **logical instance** from **principal cell**; Federation's composite six-tier `tenant_id` is the substrate; deployment profile is a projection over it | profile model | Federation owner |
| `INV-21` | observer-scoped projections | adopted | every evidence graph is observer-scoped and must **expose known omissions** — the non-obvious half | projection contract | steward accepts |
| `INV-23` | source sovereignty clarified | adopted | sovereignty is authority for **what the source committed or recorded**, not for the underlying reality — a clarifying constraint on OMNI's own law | G3 source-authority | steward + owner |
| `INV-28` | audit proves observation | adopted | an operator-hosted log proves **what the operator observed** — not another principal's intent, authority or source execution | evidence model | steward accepts |

**Coverage: 40 of 40 `blocks G1` rows above. Closed: 0.** *(Aggregates elsewhere in this file point here and do not restate it.)*

**§E-note A — `C4.4 §R` generalization.** Verified: the template has 13 questions across `R.1`–`R.17`; **no *"what it may NEVER own"* slot and no exit/replacement question exist.** Proposed: a **seven-question universal core** — purpose and constitutional boundary · semantic ownership **and explicit non-ownership** · inputs/outputs/lineage/proof · authority-admission-commit relationship · lifecycle, failure, correction, closure · applicability and profile variation · **replaceability and exit obligations** — plus **triggered overlays** (data custody/privacy/retention · federation and trust transfer · clinical or safety consequence · agent runtime · vendor/procurement · fleet and deployment · conformance and observability). R2's fifteen-mandatory-questions version is withdrawn: it manufactures ceremony.

**§E-note B — `AB-08` passport.** Two objects, not one: the **passport** answers *may I rely on this, for what, at what maturity* and stays small; the **descriptor** (plan §3.1) carries canonical identity, version, owner, dependencies, supersession, applicability, profile inheritance, variation and deployment targeting. R0 listed descriptor fields as passport axes. Proposed axes: `governance_category` · `architecture_role` · `authority_maturity` · `scope` · **`plane` ⟂ `viewpoint_or_view`** · `build_evidence_maturity`. Proposed role additions, all verified absent from the ratified index: `standard` · `pattern` · `operating_profile` · `conformance` · `controlled_vocabulary` · `view`. **Closure requires the 12-artifact fixture set** (Reactor · GCE · a domain contract · an operating profile · a deployment profile · a viewpoint and its view · a cross-cutting standard · a pattern · a generated snapshot · a conformance suite · implementation proof · a proposed-but-unaccepted decision) to classify with **no ad-hoc exception**. Unrun — `G-08`.

## §E2 — Tool dispositions — all nine rows

Four parts each — **required capability** (architecture) · **initial adapter** (replaceable) · **portability boundary** (test 11) · **trigger** — plus the `C-08` verdict.

| # | Required capability | Initial adapter | Portability boundary | Trigger | Verdict |
|---|---|---|---|---|---|
| 1 | machine-readable descriptors + **deterministic validation**; snapshot byte-reproducible or fail closed | **JSON Schema + CI**, if G2 confirms fit | a schema language may never be where a rule *lives* | schema insufficient for a declared rule | **ADOPT** |
| 2 | approval routing + **protected serialized integration** | **CODEOWNERS + rulesets + required checks** | routing metadata is not authority | measured queueing pressure → add merge queue | **NARROW** — merge queue **deferred, not prohibited** |
| 3 | **resource-claim semantics** — declared writes, overlap detection | thin OMNI checker | claims are coordination, never authorization | collision evidence → activate exclusivity leases | **NARROW** — claim semantics adopted, exclusivity deferred |
| 4 | **policy-as-code** — a lane cannot land an edit to a protected surface | generalize `check-checkpoint-pointer.mjs` | **OPA must never become the constitutional policy language** | a policy inexpressible as a direct repository check | **NARROW** |
| 5 | canonical resource graph with owners and relations | OMNI descriptors canonical; **Backstage entities generated downstream** | `spec.owner` is display metadata, **not** authority | real portal demand | **NARROW** |
| 6 | architecture version · profile ids · conformance result emittable as **named declared evidence**; **PHI and raw patient context PROHIBITED in attributes** | OpenTelemetry conventions | a transport is not the conformance or drift authority | adapter after the model survives G3/G4 (`C-16`) | **NARROW** — emission requirement adopted, OTel mapping deferred |
| 7 | repeatable semantic transformation **with a decisive verifier** | TS codemods; **OpenRewrite** later | recipes are mechanism, never semantics | the trigger met — *not an edit count* | **DEFER** |
| 8 | **logical** desired-vs-live reconciliation | none yet | *the logical fleet exists before Kubernetes does* | an actual deployment substrate | **DEFER** *(engine)*; the fleet **model** is required now (§6.4) |
| 9 | durable multi-agent execution | none — Agent Runtime owns it | do not build the runtime pre-spine | `FWREG-010` closes | **DEFER** |

**Tally, recomputed from the rows above — one top-level verdict each:** **1 ADOPT** (row 1) · **5 NARROW** (rows 2, 3, 4, 5, 6) · **3 DEFER** (rows 7, 8, 9) · **0 REJECT**.

**R3's "2 adopt · 3 narrow · 4 defer" was not byte-true** — rows 3 and 6 carried two verdicts each and the tally did not follow from the table. `C-08` requires **one** explicit verdict per candidate; "adopt the capability, defer the engine" is a **NARROW**, not two verdicts. R1's merge-queue rejection stays withdrawn: absent pressure justifies deferral, not prohibition, and Build OS `10` permits *"merge queue **or** serialized fast-forward."*

## §E3 — Frontier double-evaluation — all ten capabilities

| Capability | Current practice | Agent-native 2030/35 | Label | Named frontier gap |
|---|---|---|---|---|
| catalog / graph | pass | partial | `current_practice_only` | human-paced curation assumes a human reader; registries route **machine-first with a human view** |
| change proposal | pass | **fail** | `current_practice_only` | optimizes authoring throughput — the wrong side. *"Generation is solved. Verification, judgment and direction are the new craft."* |
| impact analysis | pass | pass | — | improves under load; scales with compute |
| effective-architecture compiler | pass | pass | — | strongest alignment; `certified_variation_envelope` supplies the diff boundary |
| conformance engine | pass | partial | `current_practice_only` | episodic CI assumes episodic change; *"agents patrol, not only respond"* |
| propagation | pass | **fail** | `current_practice_only` | at agent scale propagation **creates** the review bottleneck; control inheritance + `automation_review_sampling_policy` |
| fleet reconciliation | pass | partial | `current_practice_only` | *eliminate accidental drift; preserve authorized variation; preserve protective redundancy* |
| observability / drift | pass | partial | `current_practice_only` | *"a system can suffocate on its own observability"*; detection solved, **attention economics is not** |
| agentic workbench | pass | pass | — | best-covered; anti-patterns pre-named |
| exception / debt | pass | partial | `current_practice_only` | *exception-capacity scales first*; expiry-based lifecycles assume a human clears the queue |

**7 of 10 `current_practice_only`. One finding (`G1-FIND-06`):** every flagged mechanism assumes **elastic human review capacity and episodic change**; the registries converged independently on the inverse. **The scarce resource is verified human judgment, not authored artifacts.**

## §E4 — Scenario traces

**Worked prose traces, NOT proof.** Only trace 1 is a live transaction. Tier-0 #14 §4 requires *"at least 5 real-world operational scenarios stress-tested by the user"* — **writing this table does not discharge that** (`B-6`).

| # | Trace | Result |
|---|---|---|
| 1 | **Live C-10 transaction** (`accountable_operator_principal: Nick`; `integration_holder: Opus`) | **model corrected.** Under R1's three objects: fails — Opus is not a principal. Under §4.6: seat `integration`, accountable principal Nick, exercising actor Opus, grant bounded to the arc-opening transaction. **Proves the model was wrong, not that the receipt is defective** — the receipt already separates the fields. A receipt normalization is **proposed**, not a discovered defect (`G1-FIND-04`) |
| 2 | Patient / clinician / payer / pharmacy disagree | **model corrected.** Four commits on four non-fungible planes; OMNI commits a coordination state describing what remains unresolved and owns none of the others. **Corrects R1's *"the authorized Care owner commits"***, which recreated the single final decider Care §4 forbids. Residue: what the coordination state *is* constitutionally — Care §9a G2 marks it `[OPEN_RECONCILIATION]` for C5 |
| 3 | Delegation revoked across an in-flight external effect | **PARTIAL** — problem **B** below |
| 4 | Break-glass under partition | **PARTIAL** — problem **A** below |
| 5 | 1,000-deployment release: variation + incompatible skew + mandatory security revocation | **PARTIAL; broke an R1 claim.** Local admission is not universal — a mandatory security revocation against a Powered-by-OMNI deployment is not the same act as against a sovereign federation member (§6.4) |

**Two different problems, not one.** R1 compressed them into *"one bounded semantics."*

- **A — Unavailable precondition.** Break-glass requires a dual approver (T3); partition makes the co-attestor unreachable **before** the act. Classic **fail-safe vs fail-secure**: block emergency care, or degrade to post-hoc reconciliation and weaken T3 to an assertion. Care §13 supplies retrospective authorization as the degraded path; **no carrier states which applies.**
- **B — Post-dispatch cancellation.** Revocation arrives **after** an effect may already have been emitted and custody accepted. Compensating-transaction territory plus acknowledgment uncertainty: does revocation take effect at emission or at acknowledgment, and what holds when acknowledgment never arrives? Reactor invariants 3, 4 and 6 supply the pieces; **the composition is unstated.**

**One is precondition degradation; the other is post-dispatch causal control.** Both → `AB-29`.

### §E4b — The eleven pressure scenarios — one row each

*(R3 kept the total and left the rows in prose. Same defect, softer. Restored.)*

| # | Scenario | Result | Inherited mechanism | Correction made | Residue | Owner / gate |
|---|---|---|---|---|---|---|
| 1 | 5 pharmacies × 50 agents | **represents (corrected)** | correlation classes; represented-principal grammar | R1 inferred *"5 pharmacies = 5 principals."* **Cardinality resolves per contribution and per action**, never from agent count or org label — one pharmacy may hold several legal entities, an independently accountable pharmacist, a fulfilment operator and payer principals | — | steward / G1 |
| 2 | + a compliance function | **represents (corrected)** | seat/holder split | R1 flattened both acts to staffing. **Adding a person to an existing seat = register edit; creating a new compliance authority, veto or review stage = architecture or profile change** | — | steward / G1 |
| 3 | one person, several seats | **represents (corrected)** | occupancy rules | R1 asserted only dynamic SoD. **Occupancy is configuration; both static and dynamic SoD are architecture**; per-transaction conflict constraints required | which seats need static vs dynamic | steward / G2 profile |
| 4 | a seat with no holder | **represents** | fail-closed on vacancy | none — demonstrated live by the vacant integrator | — | — |
| 5 | one agent proposes, another tests | **represents (corrected)** | correlation classes (`independent` … `shared_model_family`) | R1: *"two actors in one seat is unremarkable."* **Wrong where the test supports acceptance** — separate agents are not independent evidence. Receipt must carry an **evidentiary-independence class** | class taxonomy not bound to the acceptance receipt schema | steward / G2 |
| 6 | agent performs approved mechanical integration | **represents (corrected)** | E&V → Release → Runtime chain | R1 conflated *the code governs something safety-sensitive* with *the byte transfer is a safety-sensitive act*. **Four acts, four gates: integration · release · activation · domain action** | which gate activation carries | steward / G2 |
| 7 | proposal author also holds an approval seat | **represents** | dynamic SoD; seat prohibitions | none — live instance is this carrier | — | — |
| 8 | payer agent vs operator agent disagree | **represents (corrected)** | non-fungible commit planes; vector of principal-local states | R1's *"the authorized Care owner commits"* recreated the single final decider Care §4 forbids | what OMNI's coordination state **is** constitutionally — Care §9a G2 `[OPEN_RECONCILIATION]` | Care owner / C5 |
| 9 | patient agent vs provider agent disagree | **represents (corrected)** | *contributions are not votes*; `INV-30`; `INV-15` | same as 8, plus: **no tie-break rule exists and none may be invented** | as 8 | Care owner / C5 |
| 10 | delegation revoked mid-run | **PARTIAL** | Reactor inv 3/4/6; invalidation propagation | R1 marked it RESOLVED | **problem B** — post-dispatch cancellation: effect emitted, acknowledgment uncertain | `AB-29` / G3 stage, G4 prove |
| 11 | break-glass under partition | **PARTIAL** | RBAC §6 T3; Care §13 retrospective authorization | none | **problem A** — unavailable precondition: fail-safe vs fail-secure unstated | `AB-29` / G3 stage, G4 prove |

**9 represent (7 only after correction) · 2 PARTIAL.** The plan's criterion is that **each** must resolve without invented authority. **Two do not.**

## §E5 — G4 adversarial fixtures — added to existing tests, no new gate

| Fixture | Existing test |
|---|---|
| a build agent attempts a clinical/domain commit *(directly tests Build OS `09`'s "build-agent authority never becomes product authority")* | 5 Authority |
| a third-party harness presents valid identity but exceeds its delegated capability | 5 Authority · 7 Conformance |
| a stale or revoked grant remains cached at one enforcement point | 5 · 9 Drift |
| an external effect occurs, acknowledgment is lost, and retry risks duplication | 10 Change classes |
| a supplied tool's schema or instructions change after admission | 7 Conformance |
| a validly signed artifact has incomplete supply-chain provenance | 7 Conformance |
| a profile attempts to loosen a universal inherited prohibition | 7 Conformance |
| managed deployment vs sovereign federation member respond differently to mandatory security revocation | 8 Fleet |
| multiple correlated agents falsely present as independent review | 7 negative controls |
| every adopted third-party tool removed; the architecture still resolves | 11 Substrate independence |

---

## §6 — Verdict, blockers, operations

### §6.1 — Verdict

> ### `NOT_CONVERGED__REQUIRED_OUTPUTS_RESTORED_SOURCE_FLOOR_AND_MODEL_BOUNDARIES_INCOMPLETE`
> Recommended by `proposal_authoring`. Not self-accepted.

R1's *"one bounded semantics away"* was false against its own register, and R2's acknowledgment-focused label was too narrow. **The actual incompleteness is source coverage, model boundaries and evidence — plus the two distributed-authority problems.**

### §6.2 — Blockers, sorted by rightful gate

**Re-derived from the ledger's `blocking_scope` and the R8 contract — not from what felt appropriate to defer.** R3 moved `AB-08` to G2, which **overrode the binding ledger**: the ledger says `AB-08` is owned by the architecture steward, **decided at G1 artifact-metamodel authoring, and blocks G1 close.** That correction is the reason this table is re-cut.

**True G1 acceptance blockers**

| # | Blocker | Basis |
|---|---|---|
| **B-1** | **Boot state not normalized.** R8/R9 stale; catalog rows contradict them; no waiver exists (§0.2) | `AGENTS.md` boot rule |
| **B-3** | **`AB-08` 12-artifact fixture unrun** — *moved back from G2* | **ledger `blocking_scope` = blocks G1** |
| **B-8** | **Source floor incomplete** — Lane-1 architecture-management sources unread **and required Lane-2 carriers unread** (System Map · Surface Map · Polaris · Platform · Accountability · C4.6 · federation-permeability). *R3 understated this as Lane-1 + C3.8 intermediates; C3.8 G4 is the named terminus, so its intermediates are optional — the Lane-2 omission is the real one* | R8 Lane 2 + `AB-11` |
| **B-15** | **`§G1-CONTRACT` outputs 2–7 incomplete** — the operations loop, graph semantics, change lifecycle, profile resolution, conformance model and transfer-limit matrix | R8 §5 `G1` |

**G2 installation requirements**

| # | | |
|---|---|---|
| **B-7** | Build Entry Gate `11` frozen against a stale foundation; must be re-pointed before it can admit G2 | `11` self-declared |
| **B-9** | Seat transfer/suspension undefined (`G-02`) | — |
| **B-10** | Adversarial-principal assurance viewpoint has no home (`G-04`) | — |

**Reclassified out of G1 blocking, with reasons**

| # | Was | Now | Why |
|---|---|---|---|
| **B-2** | G1 blocker | **G1 open item with an owner** | R8 permits G1 to *"decide each, or name it open with an owner."* How many authority contexts exist is named open, owner = `architecture_steward`, target G3 (`G-12`) |
| **B-6** | G1 blocker | **G2/G4 proof obligation** | Tier-0 #14 §4's *"5 scenarios stress-tested by the user"* is a **substrate-slice readiness checklist for a next pillar**. R3 did not show it binds G1 acceptance. The binding G1 requirement is R8's eleven scenarios (`§E4b`) |
| **B-13** | G3 debt | **G1 content obligation, resolved in three parts** | The ledger says `AB-01` blocks G1. So: **(a)** G1 must decide and propose the generalized shared-mechanism form — a **G1 obligation**; **(b)** the C4.4 owner's acceptance is a **required approving-seat action** at G1 acceptance; **(c)** any insertion into `C4.4 §R` itself is **downstream**. It is not "only G3 debt", and the previous pass listed it in two gates simultaneously (`G-07`) |

**G3 reconciliation debt**

| # | |
|---|---|
| **B-4** | Seat model untested against five harder cases (`G-10`) |
| **B-11** | Fleet attestation-withdrawal semantics unstated (`G-09`) |
| **B-12** | Third-party effects performed **outside** OMNI — the four effect classes (`G-13`) |
*(`B-13` is **not** listed here — it is reclassified to G1 below. The previous pass listed it in both places at once.)*

**G4 proof obligations**

| # | |
|---|---|
| **B-2b** | Problems A and B (§E4) — `AB-29`, staged G3, proved G4 |
| **B-5** | No real substrate translation (`G-11`) |
| **B-14** | The §E5 adversarial fixtures |

### §6.3 — Architecture Operations: four roots, many-to-many

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

**Test 11, correctly sized:** *OMNI's anti-capture and strategic-sovereignty mechanism expressed as a conformance test — vendors may supply mechanisms; none may own OMNI's laws.* R1's *"the commercial strategy"* is withdrawn as too grand; **C3.8 §2.1 already carries the ratified moat posture**, and the wider commercial claim belongs to Task-D.

### §6.4 — Release, adoption, fleet

Three postures, predicted by Tier-0 #14 §1.5.2's four operator abilities: **OMNI-managed** (some security/legal/compatibility changes mandatory) · **operator-controlled** (adoption scheduled within a governed support window) · **sovereign federation member** (`§R.16` local admission in full). **Skew typed, not normalized:** `authorized_variation` · `tolerated_transition_skew` · `supported_older_version` · `incompatible_skew` · `policy_violation` · `security_revoked` · `quarantined` · `unsupported`. **Governance by attestation withdrawal** *(NET-NEW, `G-09`)*: OMNI's right to **stop claiming a deployment conforms** is not a right to change it.

---

## §7 — Register

### §7.1 — Standing falsifiers

**F-01 Candour penalty** — rigorous attribution raises liability exposure, rationally reducing candid documentation. *No design response; any claim to have solved it is suspect.* · **F-02 The view becomes the truth** (`AB-27`) — falsifier of `D0THES-DEC-033`; G4 negative test · **F-03 Multiplicity is not corroboration** — PRE-0 demonstrated it on itself; R1 stated it and violated it in scenario 5 · **F-04 Gap-declaration masquerading as risk management** — this gate did it three times (Tier-0 #14, C3.8, Build OS) · **F-05 (new) Narrative revision destroys evidence** — R2 deleted three required tables while keeping their totals. **Prose is not a durable evidence carrier.**

### §7.2 — Gaps

`G-02` seat transfer/suspension → G2 · `G-03` **split** into §E4 problems A and B → `AB-29` · `G-04` adversarial viewpoint → G2 · `G-05` **superseded** by `B-8` · ~~`G-06`~~ **CLOSED** (Tier-0 #14) · `G-07` `C4.4 §R` owner · `G-08` `AB-08` fixture set · `G-09` attestation withdrawal · `G-10` seat model untested · `G-11` no substrate translation · `G-12` how many authority contexts; dual-context principals · **`G-13` (new)** third-party effects outside OMNI · **`G-14` (new)** Build Entry Gate `11` frozen against a stale foundation · **`G-15`** `02_authority_routing_map.md` is a Phase-0 skeleton carrying binding routing authority · **`G-16` (new)** Care's U/C/A crosswalk is a frozen nonbinding candidate; generalizing it past Care is unratified cross-scope synthesis → G3 Care reconciliation · **`G-17` (new)** the five-axis authority decomposition is a proposal requiring reconciliation against Care's own composition-field list → G3 · **`G-18` (new)** GCE is the established home but the build-facing boundary contract does not exist (thesis §C paused) → §C authoring / G3.

*(`G-16`…`G-18` were minted in the body of the previous pass and never reached this register — the finding-evaporation defect this register exists to prevent. Recorded as a live instance under `F-04`.)*

### §7.3 — Findings routed

`G1-FIND-01` R8/R9 stale and contradicted by their own catalog rows; checkpoint §4 diverges from the ledger's `blocking_scope` · `G1-FIND-02` `rbac_authority_contract.md` §5 carries two different four-member lists · `G1-FIND-03` the most precise composition statement sits at the lowest maturity · `G1-FIND-04` G0 receipt normalization **proposed** · `G1-FIND-05` plan §1's *"nothing exists"* and R1's *"nothing is net-new"* are equal and opposite · `G1-FIND-06` operations mechanisms assume elastic review capacity · `G1-FIND-07` **C3.8's ratified posture and translation map were never connected to the authority model** though it was catalogued, routed and named in two required lists · **`G1-FIND-08` (new)** comparators used here need `comparator_analogy_registry.md` rows per Build OS `10`'s never-re-scatter rule · **`G1-FIND-09` (new)** **Build OS `09` already states *"build-agent authority never becomes product authority"*, and Care §19 already carries the U/C/A propagation crosswalk — this gate re-derived both as "three planes."**

**Guardrail candidates — captured, NOT promoted** (`GRD-036`; a `06` row is a Tier-0.5 rule change):

1. **Declaring a gap is not discharging it.** A gate must attest what it **opened**, not what it intended to.
2. **String or count presence is not semantic discharge.**
3. **A model that cannot represent its own authority transaction has not been self-hosted.**
4. **Deleted eternal claims return as tables.**
5. **An agent that finds a rule inconvenient will invent an elegant exception.** Waivers are granted by an authority, never self-issued by the actor bound.
6. **(new) Narrative revision destroys evidence.** Required outputs must be structurally separated from the prose that carries them — fenced at minimum, machine-readable ideally. **A total that outlives its table is the same defect as a count that outlives its source.**
7. **(new) Before minting vocabulary, search for the rule.** *"Three planes"* was coined over an existing doctrine sentence and an existing propagation crosswalk, in violation of Build OS `09`'s vocabulary-discipline clause.

### §7.4 — Scope

Nothing minted, closed or promoted. Reactor stays frozen and unpromoted. Care not edited. `C4.4 §R` not edited. **R8/R9 not normalized** (`B-1`). G0 receipt not edited. `06` not written. `comparator_analogy_registry.md` not written — rows proposed (`G1-FIND-08`). C3.8 and Build OS consumed as inputs. Insurance untouched. No checkpoint repoint.

---

## §8 — STOP RECEIPT

| Field | Value |
|---|---|
| Artifact | FAI **G1 operating-model carrier R3** · seat `proposal_authoring` · state **`proposed`** · **BLOCKED on B-1** |
| R2 → R3 | evidence restored (§E) · Build OS read · "three planes" withdrawn · four external correspondences downgraded · third-party rule corrected · blockers sorted by gate · G4 fixtures added |
| Required outputs | **§E1** 40-row semantic receipt · **§E2** nine tool dispositions · **§E3** ten-row frontier matrix · **§E4** five traces + eleven scenarios · **§E5** ten G4 fixtures. **Fenced against compression** |
| Ledger | 40 rows verdicted. **ZERO closed** |
| Operator questions | **Q1** — the rule already existed in Build OS `09`; Care §19's U/C/A supplies the mechanism **as a frozen nonbinding candidate**, and applying it past Care is **this gate's synthesis** (`G-16`). The build-down/care-external binary is **withdrawn**; the rule is **per-act origin resolution**, and authority-origin direction is a **candidate descriptor field, not a profile axis**. **Q2** — internal-model equivalence not required, **boundary conformance mandatory**; GCE is the **home**, but the contract content **does not exist** (thesis §C paused), so the ten obligations are **new synthesis** (`G-18`) |
| Boot | **VIOLATION, unresolved** |
| Minted | **nothing** |
| Verdict | **`NOT_CONVERGED__REQUIRED_OUTPUTS_RESTORED_SOURCE_FLOOR_AND_MODEL_BOUNDARIES_INCOMPLETE`** |
| G1 blockers | **B-1** boot state · **B-3** `AB-08` fixture *(ledger says it blocks G1)* · **B-8** source floor incl. unread **Lane-2** carriers · **B-13** `AB-01` generalized form + C4.4 owner acceptance · **B-15** `§G1-CONTRACT` outputs 2–7. *(B-2 → open item with owner; B-6 → G2/G4)* |
| Next | **B-1 first — recommend NOT waiving it.** Then: map each incomplete cell to its exact source and controlling section **before** reading · read selectively · run the `AB-08` fixture · then **bounded authoring** to close cells 2–7. **A clean acceptance carrier is assembled only after the cells close** — earlier, it becomes another revision by another name. Whether that carrier is one artifact or two is decided by **output 1, the artifact metamodel** — not by preference |

## §9 — Handoff

**No separate `HANDOFF_*` file** — a third current-state description beside the checkpoint §1 and §8 is the maintained-duplicate failure that reopened `C-11`/`C-12`.

**Changed:** this carrier (R2 → R3) · catalog row · read-graph `9v-ii`. Governance edits stay separately revertible.

**Verified:** `check-checkpoint-pointer.mjs` pass · **R2's evidence deletion confirmed by search** (`AB-02`, `AB-04`, `AB-07`, `AB-14`, `INV-03`, `INV-18`, `INV-26`, JSON Schema, CODEOWNERS, Backstage, OpenRewrite all absent from R2 while their totals remained) · R8/R9 staleness confirmed · Build OS `09`/`10` read, `11` status read · `02_authority_routing_map.md` confirmed `Skeleton (Phase 0)`.

**Load order:** `AGENTS.md` → checkpoint → route `9v` (plan R8 → charter R9 → ledger R5) → `9v-ii` this carrier. Gate sequence **only** in plan §5; closure conditions **only** in the ledger's `blocking_scope`. **For external/enterprise correspondence, C3.8 G2/G4 is the required read. For build-side operating model, Build OS `09`/`10` — at the maturity they declare, not as settled truth.**

**Stop condition:** superseded when the steward and affected domain owners accept, amend or reject — after `B-1` clears.

**STOP: `g1_working_dossier · BLOCKED_boot_state · evidence_restored_and_fenced · 40_rows_verdicted_zero_closed · G1_CONTRACT_0_of_8_outputs_complete · 5_G1_blockers · acceptance_carrier_not_yet_authored`**
