# v4 — FAI — G1 OPERATING-MODEL CARRIER (R3)

Document type: `handoff_or_readiness_gate` (gate-output carrier — the G1 deliverable named in execution plan §5)
Authority: `analysis_nonbinding` (`D0THES-GRD-036`). **Binds nothing. Mints nothing. Promotes nothing. Closes nothing.** Where this carrier and a controlling carrier differ, **the carrier controls and this file is corrected.**
Status: **`g1_carrier_R3 · state=proposed · B-1_CLEARED · 0_of_8_outputs_complete`**
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: **working dossier for the G1 gate output — NOT yet an acceptance object.** It carries the model proposal, the required evidence (`§E`), and the completion matrix (`§G1-CONTRACT`) that says which R8-required outputs are still missing. **Read `§G1-CONTRACT` first: it is the only honest answer to "is G1 done."**
Source-of-truth relationship: **owns nothing.** Gate sequence → plan §5. Rationale → charter R9. Finding disposition → PRE-0 ledger R5. Program state → the checkpoint. Authority truth → §4's carriers. External/enterprise correspondence → **C3.8 G2/G4**. Build-side operating model → **Build OS `09`/`10`** *(at their declared maturity — §1.3)*.
Manifest action: `add_tier2` · Review gate: `user_knox_required`

> ## ★ POSTURE
> Authored under **`proposal_authoring`** — may research, propose, author, test; may **never** accept, approve or commit. **Closes no ledger row. Does not close G1.**
> **§E is the gate's required evidence and MUST NOT be compressed, summarized or replaced by totals in any future revision.** R2 deleted three required evidence tables while keeping their totals. See §0.1.
> **`B-1` is CLOSED (2026-08-11, §0.2).** Historical fact retained: everything in this carrier **up to that date** was produced under the then-unresolved boot violation — clearing it removes the blocker, it does not retroactively validate that work. `§E6` in particular remains an exploratory probe.

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

### §0.2 — The boot violation is **RESOLVED** *(2026-08-11)*

**`B-1` is closed.** R8 and R9 were normalized in a bounded state-normalization transaction on the arc base (authored under `proposal_authoring`, independently reviewed, **operator-accepted at an exact head**, landed under the bounded `integration` seat, then verified **on the base branch rather than the PR head**). Both accepted carriers now state **artifact lifecycle only** — `ACCEPTED_AT_G0_2026-08-10 · CURRENT_STATE_BY_CHECKPOINT` — and their illegitimate current-state rows are checkpoint pointers.

**Post-merge verification, all nine passing on the base:** `AGENTS.md` pointer · read-graph Tier-0 #15 · the checkpoint's gate banner · both catalog rows · R8 lifecycle · R9 lifecycle · no surviving stale claims outside receipts · no `G1_IN_PROGRESS` assertion outside withdrawal notes · `check-checkpoint-pointer` ✔.

**Rule observed:** *an accepted carrier may state its own lifecycle; it may never state program state.* Two drafts got it wrong before landing — one left the carriers stale, the next made them competing progress trackers. **Candidate for architecture-operations law if it survives G1/G3; the durable fix is the consistency validator at `§1.2` that makes the error impossible, not a paragraph about it.**

**The bounded appointment expired on that verification.** No standing integration authority exists.

> **Work produced under the violation is not retroactively validated.** `§E6` remains an exploratory probe; `B-1` clearing removes the blocker, it does not convert that probe into a fixture result.

### §0.2.1 — Historical: the violation as it stood

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
| 1 | **artifact metamodel** | `§E-note B` + **`§E6` (exploratory probe — NOT a fixture result)** | Artifact Index ✔, governance taxonomy ✔, R8 §3.1 ✔ · **System/Surface Maps ✘, 42010 ✘** | **UNRUN.** The probe was invalid — it tested physical files where the model must classify logical resources, and used a `plane` axis whose taxonomy is unread (`§E6.1`) | six candidate findings at `§E6.2`; four proposed roles have **no instance**; the metamodel must first separate logical resource from physical carrier | the fixture specified at **`§E6.3`** runs with expected assertions and negative controls (`G-08`) |
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
| Boot / state integrity | `B-1` · §0.2 | **CLOSED 2026-08-11** | met — normalized on the base and verified there |

**Honest reading: ZERO of eight outputs are complete.** Output 1 returned to **unrun** when its probe was withdrawn; outputs 2–7 are incomplete; `§G1-AUTH` is partially converged. Of the six gate obligations, **`B-1` is now CLOSED** and the rest are proposed or partial. The model work is real and the evidence is restored, but **G1's contract is not close to satisfied.** Items 2–7 need the unread Lane-1 and Lane-2 sources **and then bounded authoring** — reading alone will not produce an operations loop, graph semantics or a conformance model. **There is no path from unread sources to a completed architecture that contains no writing.**

### §G1-CONTRACT.c — cross-output carry: the external-obligation / operator-variation thread

**`G1-FIND-10` is not a §7 finding to be admired — it is a vertical thread that must force something in each output.** Recorded here so it cannot evaporate into prose, and so no single output tries to swallow it.

| Output | What this thread must force it to settle |
|---|---|
| **1 · artifact metamodel** | represent the **source**, the **applicability determination**, the **variation point**, the **profile**, the resulting **OMNI requirement**, the **decision** and its **evidence** as distinct logical resources or relations — *representation only*, `§E6.3` |
| **2 · operations loop** | intake → classify → assess applicability → owner/steward review → decide → install → verify |
| **3 · graph semantics** | precedence · inheritance · conflict · **non-loosening** · supersession · source→requirement relations |
| **4 · change lifecycle** | what happens when the **source**, contract, operator policy, product classification, or the **applicability decision itself** changes |
| **5 · effective resolution** | resolve the applicable stack for one actor · product · jurisdiction · operator · deployment · mission · `as_of` — **the operator's actual question** |
| **6 · conformance + observability** | prove the resolved obligations are implemented; detect divergence |
| **7 · transfer limits** | what OMNI **adopts · narrows · rejects · defers · treats only as evidence** |

**No new gate, registry or standards inventory.** One scenario, threaded through the contract that already exists.

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

**Gate split — G1 may not defer the generic grammar it is required to deliver.** **G1 settles the cross-cutting decomposition** — that these five are distinct kinds and must not collapse into one enum. **G3/Care reconciles the Care-specific values, storage shapes and domain application** against the frozen Care carrier. R3 assigned the whole thing to G3, which would have deferred a required G1 output. `G-17`.

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

## §E6 — `AB-08` **exploratory classification probe** — NOT a valid fixture result

> ### ★ WITHDRAWN CLAIMS
> The previous pass titled this *"fixture EXECUTED"* and drew architectural conclusions from it. **All of the following are withdrawn:**
> **(a)** that `AB-08`'s fixture was executed · **(b)** the tally *"1 clean · 6 fail · 4 untestable · 1 partial"* — **the table's own rows are 1 ✔ / 7 ✘ / 4 untestable, so the count did not follow from its evidence for the third time in this arc, in the section about fixture rigor** · **(c)** the five repairs as *settled closure conditions* · **(d)** that physical packaging *"follows from"* role cardinality · **(e)** that standards have no addressable form · **(f)** the `plane` and viewpoint conclusions.
>
> **`AB-08` remains OPEN and unrun.** No G1 output was completed by this pass.

### §E6.1 — Why the probe was invalid

| # | Defect |
|---|---|
| 1 | **It tested physical files where the architecture needs logical resources.** Three levels exist and were flattened into *one file × one passport*: the **physical carrier** (file, code module, test, generated artifact) · the **logical architecture resource** (standard, pattern, contract, profile, view, decision) · the **descriptor and its relations**. **R8 §3.1 already specifies a `resource_id` that "survives renames and moves"** — the separation was in a source this gate had read, and the probe designed past it. **This single error produced most of the apparent failures**: one carrier holding a pattern, several normative guardrails and a boundary mechanism looks like a multi-role artifact only if carrier and resource are the same thing. |
| 2 | **Self-contradiction.** GCE was classified as needing `pattern`, while the *"reusable pattern"* row was declared untestable for want of a pattern instance. Both cannot hold in one test. |
| 3 | **The `plane` conclusion used an uninspected taxonomy.** `[seam, capability, projection]` were treated as `plane` values, but the plane taxonomy lives in the System Map / Surface Map — **both still unread**. Those look like functions or concerns, not planes. A mismatch against an axis whose controlling source was never opened is not evidence the axis must be multi-valued. |
| 4 | **The viewpoint result is a candidate question, not a finding.** 42010 is unread and the maps are uninspected. They may be 42010 views, a different role, composite descriptions, or views whose viewpoint is implicit. |
| 5 | **The domain-contract leap.** *"Passport and index disagree"* → *"the metamodel needs a `contract` category"* skipped at least four live alternatives (keep `domain_rule_slice` as the document category with **Domain Contract** as the architecture role · amend the taxonomy · supersede `domain_rule_slice` · make contracts a logical resource on a conventionally-typed carrier). None was adjudicated. |
| 6 | **Code did not prove the document passport failed.** It proves the **resource model cannot be document-only** — a different and smaller claim. A cleaner shape: resources carry descriptors; carriers carry carrier-specific metadata; Markdown uses the document passport; code, tests and generated artifacts use repository-native locators plus `implemented_by` / `verified_by` / `evidenced_by` relations. That is what R8 §3.1's relations were already reaching for. |
| 7 | **"Standards have no address" is self-refuting.** The probe cited `GRD-033` and `GRD-034` — **addressable, named, normative guardrails** — while asserting normative rules exist only as unaddressable prose. The real requirement is **stable resource identity and locators independent of physical-file boundaries**, which is not the same as a file per rule. |
| 8 | **The packaging conclusion does not follow.** One container can carry two separately identified logical resources; two files can be one resource. Packaging turns on independent lifecycle, authority, loading behaviour, update atomicity and supersession — **not** on whether `architecture_role` is scalar. R8 already distinguishes output carrier from evidence bundle, so that split was inherited, not discovered. |

### §E6.2 — What the probe validly surfaced *(candidate findings, not results)*

1. **The metamodel must explicitly separate logical resource from physical carrier** — the probe's most useful output, arrived at by failing.
2. **Authority level and ratification/lifecycle state are independent** and must not share one `authority_maturity` axis. *(The soundest defect found.)*
3. **Document taxonomy and the live contract passports conflict** — the taxonomy has `domain_rule_slice`; contracts declare `domain_contract`; the Artifact Index recognises **Domain Contract** as an architecture role. Real drift; resolution unadjudicated.
4. **Non-document implementation and proof resources need first-class representation or first-class relations.**
5. **Operating profiles, deployment profiles, patterns and generated snapshots have no instances** — the metamodel cannot be validated against roles with nothing in them. *"No instance" is a gap to fix with a marked synthetic exemplar, not a test result.*
6. **View/viewpoint correspondence** and **cross-cutting-standard addressability** remain candidate gaps requiring the 42010 source and direct map inspection.

### §E6.3 — What a valid `AB-08` fixture requires

Recorded here so the next pass has the specification and does not need a separate planning artifact. **Exact source references sit beside each assertion — not in a source-map document.**

**Candidate under test:** a metamodel distinguishing logical resource · physical carrier/locator · primary resource kind · authority level · lifecycle/decision state · scope and applicability · view/viewpoint relation · implementation and evidence relations · profile/deployment targeting.
**Test cases:** the twelve required **logical resources** — not twelve filenames. Where a kind has no instance, **create a minimal synthetic exemplar explicitly marked as fixture material.**
**Per-case assertions:** expected primary kind · expected carrier · required authority and status · required relations · **forbidden classifications** · whether the schema represents it **without ad-hoc extension**.

**★ TWO INDEPENDENT RESULT DIMENSIONS — do not collapse them.** *(An earlier correction established this and never landed; without it a fresh agent can manufacture a synthetic exemplar for every missing kind and declare the metamodel validated.)*

| Dimension | Question | Values |
|---|---|---|
| **`representability`** | Can the candidate metamodel express this resource — carrier, status, authority, relations, constraints — **without an ad-hoc schema amendment?** | `PASS` · `FAIL` |
| **`estate_validation`** | Does a **real OMNI instance** exist, at a known authority and lifecycle state, with a rightful owner and a usable home? | `PASS` · `FAIL` · **`NOT_INSTANTIATED`** |

**A synthetic exemplar can only ever prove `representability`.** It cannot prove the kind is architecturally **necessary**, correctly **scoped**, rightfully **owned**, operationally **usable**, or **mature**. For operating profiles, deployment profiles, patterns and generated snapshots the expected result is `representability = PASS` with `estate_validation = NOT_INSTANTIATED` — **which is neither an overall pass nor a failure**, and must be reported as itself.
**Negative controls, at minimum:** one carrier holding several logical resources · one logical resource implemented by several code/test files · one generated resource · one proposed-but-unaccepted resource · one carrier whose document type and architecture role legitimately differ · one invalid edge that **must** fail.

**Added by `G1-FIND-10` — two representability cases and three negative controls. Output 1 tests REPRESENTATION ONLY.** It may not settle precedence, conflict resolution, applicability evaluation, source-change propagation, profile composition, conformance proof or adoption policy — those are outputs 3–7 (`§G1-CONTRACT.c`).

**Case A — one source, different contextual force, no duplication.** One external source must be representable as *informative comparator* in one context, *internally adopted standard* in another, *contractual requirement* for one deployment, *incorporated or directly applicable regulatory requirement* for a regulated product, and *not applicable* elsewhere — **without copying or mutating the source.** Candidate shape, **fixture material not a final enum**: `external_source` → `applicability_claim` (context · profile · jurisdiction · product · `as_of`) → `normative_force` → `disposition` → `translated_to` → `verified_by`.

**Case B — operator variation.** A Henry Ford requirement must resolve as **an allowed value inside a declared variation point** *or* **an architecture-change proposal outside it** (charter §6.2, candidate). The test: can the model represent **the request, the applicable profile, the variation point, and the resulting decision as distinct things** — without collapsing them?

**Negative controls — each must FAIL:**
1. raw ingestion **auto-promoting** a source into OMNI law;
2. an operator preference **silently loosening** a universal OMNI prohibition or an applicable higher-order obligation;
3. a **deployment-profile value masquerading as a global architecture amendment.**

**Only then can `AB-08` pass, fail, or yield a bounded amendment.**

### §E6.4 — The process failure, recorded

**This probe was substantive metamodel design performed under `B-1`** — the boot-state violation this same file declares blocking, in a document that says work under it *"may be preserved as work; it may not be accepted as compliant."* The previous pass announced it had *"stopped meta-working and built"* — and built past its own stop condition. **Preserved as exploratory evidence; it does not count as compliant G1 execution.** `F-06`.

---

*(Original probe table retained below as evidence of what was examined. Its ✔/✘ markers record the probe's own reading and are NOT fixture verdicts.)*

| # | Artifact | Classifies? | Failure |
|---|---|---|---|
| 1 | **Reactor** | ✔ | `plane` had to take **a set** — `[seam, capability, projection]` — not a scalar |
| 2 | **GCE** | ✘ | needs **`standard` AND `pattern` AND `seam` simultaneously** — normative guardrails (`GRD-033`/`034`) *and* a reusable spine shape *and* an exchange surface. One `architecture_role` cannot hold it |
| 3 | **a domain contract** | ✘ | **no `contract` governance category exists** while 15 contract files do (`C-12`, known). Also `authority_maturity` had to hold **two values** — `canonical` for the substrate *and* `draft_for_ratification` |
| 4 | **an operating profile** | — | **no instance exists.** A proposed role cannot be validated against nothing |
| 5 | **a deployment profile** | — | no instance exists |
| 6 | **a viewpoint + its view** | ✘ | System Map and Surface Map are **views with no declared viewpoint**. A 42010 gap, found by the fixture |
| 7 | **a cross-cutting standard** | ✘ | **standards exist as clauses inside doctrine and guardrail files, not as addressable artifacts.** This is precisely why Reactor *"had no address"* |
| 8 | **a reusable pattern** | — | no instance exists |
| 9 | **a generated effective snapshot** | — | no instance (plan §3.1 object 3, unbuilt) |
| 10 | **a conformance suite** | ✘ | `scripts/test-consequential-transition-conformance.ts` is **code**. The passport axes are document-centric — no governance category fits |
| 11 | **implementation proof** | ✘ | `lib/auth/capabilities.ts`, migrations, CI checks — same: **code, not a document** |
| 12 | **a proposed-but-unaccepted decision** | ✘ | this carrier. `governance_category` = `handoff_or_readiness_gate`, but **no `architecture_role` fits a gate output** |

**The probe's rows are 1 ✔ / 7 ✘ / 4 untestable**, recomputed from the table above. The previous pass reported *"1 clean · 6 fail · 4 untestable · 1 partial"* — **the third count in this arc that did not follow from its own evidence.**

**The durable rule is not a ban on summaries** *(a prior draft said "no tally is stated" and then stated one — withdrawn)*: **no decision-bearing aggregate may be manually maintained without deterministic derivation or a validation check against its underlying rows.** Counts are useful; unchecked duplicated counts are dangerous. **After three occurrences the remedy is a check, not another sentence** — routed to G2 as a validator requirement (`B-15`), since writing one now would exceed this gate's scope.

**The five "repairs" previously listed here are WITHDRAWN as settled conclusions** — see `§E6.1`. Two survive as candidate findings (authority vs ratification state; logical resource vs physical carrier); the rest rested on the carrier/resource conflation, an uninspected `plane` taxonomy, an unread 42010, and a self-refuting claim about addressability.

**On artifact shape:** the logical split between *output carrier* and *evidence bundle* is **inherited from R8, not discovered here**, and physical packaging does **not** follow from role cardinality (`§E6.1` defect 8). **Left open.**

**`AB-08` remains OPEN and unrun** (`G-08`, `B-3`). Its closure condition is the fixture specified at **`§E6.3`**.

## §E5 — G4 adversarial fixtures — routed forward, NOT a G1 output

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
| ~~**B-1**~~ | **CLOSED 2026-08-11** — boot state normalized on the base branch and verified there (§0.2). Repaired outside this proposal, as required: fixing the accepted G0 carriers inside the proposal they block would have been circular | `AGENTS.md` boot rule |
| **B-13** | **`AB-01` generalized shared-mechanism form** — G1 decides and proposes it; the C4.4 owner participates in G1 approval; any edit to `C4.4 §R` itself is downstream (`G-07`) | ledger: `AB-01` blocks G1 |
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

**F-06 (new) Counting my own evidence is a systematic failure, not bad luck.** Three times in this arc a stated aggregate did not follow from the table beneath it — R2's deleted-evidence totals, R3's tool tally, and the `AB-08` probe's *"1 clean · 6 fail"* against rows reading 1 ✔ / 7 ✘. **The third occurred inside the section about fixture rigor.** Mechanism: the aggregate is written from intent while the rows are written from work, and nothing recomputes one from the other. **Summaries are allowed. The rule is that no decision-bearing aggregate may be manually maintained without deterministic derivation or a validation check against its rows** — and after three occurrences the remedy is the check, routed to G2 (`B-15`), not another prohibition. *(An earlier draft's "state no aggregate" is withdrawn as an over-correction.)*

**F-01 Candour penalty** — rigorous attribution raises liability exposure, rationally reducing candid documentation. *No design response; any claim to have solved it is suspect.* · **F-02 The view becomes the truth** (`AB-27`) — falsifier of `D0THES-DEC-033`; G4 negative test · **F-03 Multiplicity is not corroboration** — PRE-0 demonstrated it on itself; R1 stated it and violated it in scenario 5 · **F-04 Gap-declaration masquerading as risk management** — this gate did it three times (Tier-0 #14, C3.8, Build OS) · **F-05 (new) Narrative revision destroys evidence** — R2 deleted three required tables while keeping their totals. **Prose is not a durable evidence carrier.**

### §7.2 — Gaps

`G-02` seat transfer/suspension → G2 · `G-03` **split** into §E4 problems A and B → `AB-29` · `G-04` adversarial viewpoint → G2 · `G-05` **superseded** by `B-8` · ~~`G-06`~~ **CLOSED** (Tier-0 #14) · `G-07` `C4.4 §R` owner · `G-08` `AB-08` fixture set · `G-09` attestation withdrawal · `G-10` seat model untested · `G-11` no substrate translation · `G-12` how many authority contexts; dual-context principals · **`G-13` (new)** third-party effects outside OMNI · **`G-14` (new)** Build Entry Gate `11` frozen against a stale foundation · **`G-15`** `02_authority_routing_map.md` is a Phase-0 skeleton carrying binding routing authority · **`G-19` (new)** **no authoritative applicability-and-traceability mechanism was located** for resolving external obligations, operator policies, contractual requirements, adopted standards and informative comparators into effective OMNI architecture; **existing regulatory content across the estate remains unassessed.** **Split by scope, and *"non-blocking for G1"* is withdrawn as imprecise:** the **cross-cutting semantics ARE part of G1** — carried by `§G1-CONTRACT.c` and closing through the existing Output 1–7 acceptance conditions, already inside `B-3` and `B-15`, so **no new blocker is minted**; the **population and operation of the regulatory programme** (full corpus · product-specific SaMD determinations · certifications · per-jurisdiction adjudication) is **later or parallel work and does not block Output 1** → steward + operator (`G1-FIND-10`). *(An earlier wording claimed the named standards were "all absent" and used a binding/borrowable binary — both withdrawn.)* · **`G-16` (new)** Care's U/C/A crosswalk is a frozen nonbinding candidate; generalizing it past Care is unratified cross-scope synthesis → G3 Care reconciliation · **`G-17` (new)** the five-axis authority decomposition is a proposal requiring reconciliation against Care's own composition-field list → G3 · **`G-18` (new)** GCE is the established home but the build-facing boundary contract does not exist (thesis §C paused) → §C authoring / G3.

*(`G-16`…`G-18` were minted in the body of the previous pass and never reached this register — the finding-evaporation defect this register exists to prevent. Recorded as a live instance under `F-04`.)*

### §7.3 — Findings routed

`G1-FIND-01` R8/R9 stale and contradicted by their own catalog rows; checkpoint §4 diverges from the ledger's `blocking_scope` · `G1-FIND-02` `rbac_authority_contract.md` §5 carries two different four-member lists · `G1-FIND-03` the most precise composition statement sits at the lowest maturity · `G1-FIND-04` G0 receipt normalization **proposed** · `G1-FIND-05` plan §1's *"nothing exists"* and R1's *"nothing is net-new"* are equal and opposite · `G1-FIND-06` operations mechanisms assume elastic review capacity · `G1-FIND-07` **C3.8's ratified posture and translation map were never connected to the authority model** though it was catalogued, routed and named in two required lists · **`G1-FIND-08` (new)** comparators used here need `comparator_analogy_registry.md` rows per Build OS `10`'s never-re-scatter rule · **`G1-FIND-09` (new)** **Build OS `09` already states *"build-agent authority never becomes product authority"*, and Care §19 already carries the U/C/A propagation crosswalk — this gate re-derived both as "three planes."**

**`G1-FIND-10` (new) — OMNI has no located mechanism for turning an outside requirement into an applicable OMNI requirement.** Raised by the operator while scoping 42010. **The finding is a capability gap, not a list of missing standards** — an earlier draft of this row overstated its evidence and is corrected here.

**Source posture, stated honestly.** No authoritative, current **applicability-and-traceability surface** for the named standards was located in the inspected carriers, and exact-term search did not locate named mappings under those identifiers (`IEC 62304` · `ISO 14971` · `ISO 13485` · `ISO 27001` · *HIPAA Security Rule* as a named control set). `ingestion/regulatory_compliance_evidence/` contains only `_lane.md`, which proves **the intended assembled home is unpopulated** — nothing more. **Regulatory material elsewhere in the estate (pharmacy, insurance, System Map, identity/privacy) remains unassessed and is very likely present.** *An earlier draft said "zero coverage." Withdrawn — a search miss is not proof of absence, which is this arc's own rule (`L-5`).*

**Normative force is contextual, not a property of the source.** An earlier draft used a `binding` / `borrowable` binary. Too crude, withdrawn. A candidate ladder — **fixture material, not an adopted enum**:

`directly regulatory` · `incorporated by reference into regulation` · `recognized consensus standard / accepted evidence route` · `contractual · customer · insurer · procurement · certification` · `internally adopted OMNI standard` · `informative comparator` · `raw evidence / unaccepted hypothesis`

> **The load-bearing rule: force belongs to an applicability *decision* between a source and a context — never as a permanent global label on the source.** *(An earlier draft claimed IEC 62304 and ISO 14971 become binding the moment a component is SaMD. Withdrawn as legally overstated: device classification triggers a regulatory assessment; the force of any particular consensus standard still depends on jurisdiction, incorporation or recognition, product scope, and submission or contractual strategy.)*

**★ The operator's Henry Ford case shares the same INGRESS shape — and G0 chartered a candidate mechanism for it.** *"Henry Ford says our pharmacies only do it this way"* and *"does IEC 62304 apply here"* both enter as **an external party's requirement meeting an OMNI context, requiring an attributed applicability determination.** Charter **§6.2** names the mechanism explicitly:

> *"**Variation points** — the actual answer to 'Henry Ford says conform it to us'… the architecture declares, in advance, where deviation is permitted and how. Anything inside a declared variation point is **configuration**. Anything outside it is a **change to the architecture**, which goes through the architecture's own change process — **not a customer's ticket**."*

**Status, stated precisely — an earlier draft called this "an accepted answer," which is withdrawn.** The charter is `analysis_nonbinding`, and **G0 acceptance authorized the arc, not its content** — R9 §1 says so verbatim: *"It authorizes no G1 content."* So variation points and the two profile axes are **G0-chartered candidate mechanisms that G1 must reconcile and validate**, not installed binding architecture. *(Treating an accepted planning charter as doctrine is how a proposal quietly becomes law.)*

**And they are NOT identical machinery — an earlier draft said so and that is the flattening this model exists to prevent.** They share an **applicability envelope**; they diverge immediately after:

| | operator / customer requirement | applicable regulation |
|---|---|---|
| may be | rejected · negotiated · confined to a declared variation point · priced or conditionally supported · expressed as deployment configuration · escalated to an architecture-change proposal | **non-waivable** · may **prohibit an otherwise-permitted variation** · may constrain several profiles at once · may require specific evidence and accountable review · may make a deployment impossible |
| precedence | yields to higher-order obligations | **overrides a customer preference** |
| applicability | contractual scope | jurisdictional **and temporal** |

**A contractual requirement occupies a third posture again.** *They share an applicability envelope — not authority, precedence, waiver, evidence or change semantics.*

**So the operator's fear — *engineers and agents just go build it for them* — has a chartered candidate mechanism, unvalidated and uninstalled.** The gap is not that nobody thought of it; it is that **variation points, operator and deployment profiles, regulatory obligations and comparator lessons have no shared representation, so none of them resolves for a given build.**

**What is G1's, and what is not.** **G1 owns the semantics**: source identity as a logical resource · contextual applicability and force · disposition (`adopt` · `narrow` · `reject` · `defer` · `consult`) · translation into an OMNI-owned home · linkage to contracts, profiles, controls, tests and evidence · resolution for one work package or deployment · impact when a source changes. **G1 does NOT own**: SaMD or device determinations · the US/EU/state regulatory corpus · submission strategy · certification · adjudicating every pharmacy, payer, privacy or AI requirement. **Populating the programme is later or parallel work and does not block Output 1.**

**Proposed destinations — nothing has landed.** `ingestion/regulatory_compliance_evidence/` · `comparator_analogy_registry.md` · `future_work_registry.md`, owned by `architecture_steward` + operator. **This carrier is the only file changed; no lane, registry or FWREG transaction exists.** *(An earlier draft said "routed to," which claimed an accomplished repository transaction. Withdrawn — the proposed-vs-landed distinction `B-1` was spent repairing.)*

**On 42010 and the platform comparators — hold the line at mechanism.** *An earlier draft asserted no major consumer or cloud company conforms to 42010; unverified and withdrawn.* Accurate: **no public formal conformance claim by any named company was verified in this pass, and formal conformance is not required for mechanism transfer.** 42010 specifies how an architecture *description* is structured, not requirements on the system. **The useful question is not "who conforms" but "do their architecture systems separate concerns, reusable lenses, actual representations, consistency relationships, applicability, ownership and change control."** Equally: **claims about how Palantir, Epic, Anthropic or Tesla internally govern architecture are inference unless sourced.** What is *evidenced* is already in the estate — R8 Lane 1 names Palantir's *branching, proposals, resource protection, checks, lineage, affected-resource builds, interfaces, package dependencies*, and C3.8 G2 mapped them with named gaps. **But naming mechanisms is not answering the operator's question.** *How several simultaneously applicable requirements — profiles, operator policies, regulatory constraints, internal standards and exceptions — compose into the effective architecture for one build* **remains unresolved**, and spans outputs 2–7, not this finding. **Study published mechanisms and observable outputs; do not reconstruct an imagined internal playbook because the brand is impressive.** `G-19`.

**Guardrail candidates — captured, NOT promoted** (`GRD-036`; a `06` row is a Tier-0.5 rule change):

1. **Declaring a gap is not discharging it.** A gate must attest what it **opened**, not what it intended to.
2. **String or count presence is not semantic discharge.**
3. **A model that cannot represent its own authority transaction has not been self-hosted.**
4. **Deleted eternal claims return as tables.**
5. **An agent that finds a rule inconvenient will invent an elegant exception.** Waivers are granted by an authority, never self-issued by the actor bound.
6. **(new) Narrative revision destroys evidence.** Required outputs must be structurally separated from the prose that carries them — fenced at minimum, machine-readable ideally. **A total that outlives its table is the same defect as a count that outlives its source.**
7. **(new) Before minting vocabulary, search for the rule.** *"Three planes"* was coined over an existing doctrine sentence and an existing propagation crosswalk, in violation of Build OS `09`'s vocabulary-discipline clause.

### §7.4 — Scope

Nothing minted, closed or promoted. Reactor stays frozen and unpromoted. Care not edited. `C4.4 §R` not edited. R8/R9 **were** normalized — but on the **base branch**, under a separate bounded transaction, not from this proposal (`B-1`, closed). G0 receipt not edited. `06` not written. `comparator_analogy_registry.md` not written — rows proposed (`G1-FIND-08`). C3.8 and Build OS consumed as inputs. Insurance untouched. No checkpoint repoint.

---

## §8 — STOP RECEIPT

| Field | Value |
|---|---|
| Artifact | FAI **G1 operating-model carrier R3** · seat `proposal_authoring` · state **`proposed`** · **`B-1` CLOSED 2026-08-11** |
| R2 → R3 | evidence restored (§E) · Build OS read · "three planes" withdrawn · four external correspondences downgraded · third-party rule corrected · blockers sorted by gate · G4 fixtures added |
| Required G1 evidence | **§E1** 40-row semantic receipt · **§E2** nine tool dispositions · **§E3** ten-row frontier matrix · **§E4/E4b** five traces + eleven scenarios. **Fenced against compression** |
| Exploratory, NOT a result | **§E6** `AB-08` classification probe — **invalid as a fixture**; conclusions withdrawn; six candidate findings and a valid-fixture spec retained |
| Process failure — **historical** | the `§E6` probe was **substantive metamodel design performed while `B-1` was still open.** Preserved as evidence; **not compliant G1 execution**, and `B-1`'s later closure does not convert it into one (`§E6.4`) |
| Routed forward, NOT a G1 output | **§E5** ten G4 adversarial fixtures — a G4 proof plan carried under G4's existing tests |
| Ledger | 40 rows verdicted. **ZERO closed** |
| Operator questions | **Q1** — the rule already existed in Build OS `09`; Care §19's U/C/A supplies the mechanism **as a frozen nonbinding candidate**, and applying it past Care is **this gate's synthesis** (`G-16`). The build-down/care-external binary is **withdrawn**; the rule is **per-act origin resolution**, and authority-origin direction is a **candidate descriptor field, not a profile axis**. **Q2** — internal-model equivalence not required, **boundary conformance mandatory**; GCE is the **home**, but the contract content **does not exist** (thesis §C paused), so the ten obligations are **new synthesis** (`G-18`) |
| Boot | **RESOLVED** — normalized on the base and verified there, 2026-08-11 (§0.2) |
| Minted | **nothing** |
| Verdict | **`NOT_CONVERGED__REQUIRED_OUTPUTS_RESTORED_SOURCE_FLOOR_AND_MODEL_BOUNDARIES_INCOMPLETE`** |
| G1 blockers | **four, and NOT peers.** **B-3** the `AB-08` fixture *(ledger: blocks G1)* · **B-8** source floor incl. unread **Lane-2** carriers · **B-13** `AB-01` generalized form + C4.4 owner acceptance · **B-15** = *outputs 2–7*, i.e. **the rest of G1** — not a task standing alongside the other three. *(B-2 → open item with owner; B-6 → G2/G4)* |
| Next | **Finish output 1, then learn from it — not "attack four blockers."** `B-3`: read the **narrow** prerequisite floor for the `AB-08` fixture (the System/Surface Map material governing the axes it uses, and the relevant 42010 primary material), then test the candidate logical-resource / carrier / descriptor model per `§E6.3`. **No broad source sweep. No new planning artifact.** Only after output 1 has a reproducible result does output 2 begin. **A clean acceptance carrier is assembled after the cells close** — earlier it is another revision by another name; whether it is one artifact or two is a question for output 1 |

## §9 — Handoff

**No separate `HANDOFF_*` file** — a third current-state description beside the checkpoint §1 and §8 is the maintained-duplicate failure that reopened `C-11`/`C-12`.

**Changed:** this carrier (R2 → R3) · catalog row · read-graph `9v-ii`. Governance edits stay separately revertible.

**Verified:** `check-checkpoint-pointer.mjs` pass · **R2's evidence deletion confirmed by search** (`AB-02`, `AB-04`, `AB-07`, `AB-14`, `INV-03`, `INV-18`, `INV-26`, JSON Schema, CODEOWNERS, Backstage, OpenRewrite all absent from R2 while their totals remained) · R8/R9 staleness confirmed · Build OS `09`/`10` read, `11` status read · `02_authority_routing_map.md` confirmed `Skeleton (Phase 0)`.

**Load order:** `AGENTS.md` → checkpoint → route `9v` (plan R8 → charter R9 → ledger R5) → `9v-ii` this carrier. Gate sequence **only** in plan §5; closure conditions **only** in the ledger's `blocking_scope`. **For external/enterprise correspondence, C3.8 G2/G4 is the required read. For build-side operating model, Build OS `09`/`10` — at the maturity they declare, not as settled truth.**

**Stop condition:** superseded when the steward and affected domain owners accept, amend or reject.

**STOP: `g1_working_dossier · B-1_CLOSED_2026-08-11 · evidence_restored_and_fenced · 40_rows_verdicted_zero_closed · G1_CONTRACT_0_of_8_outputs_complete · 4_G1_blockers · acceptance_carrier_not_yet_authored`**
