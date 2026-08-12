# v4 — FAI — G1 OPERATING-MODEL CARRIER (R4)

Document type: `handoff_or_readiness_gate` (gate-output carrier — the G1 deliverable named in execution plan §5)
Authority: `analysis_nonbinding` (`D0THES-GRD-036`). **Binds nothing. Mints nothing. Promotes nothing. Closes nothing.** Where this carrier and a controlling carrier differ, **the carrier controls and this file is corrected.**
Status: **`g1_carrier_R4 · state=proposed · B-1_CLEARED · output_1_complete_as_proposal · 1_of_8_outputs_complete`**
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: **working dossier for the G1 gate output — NOT yet an acceptance object.** It carries the model proposal, the required evidence (`§E`), and the completion matrix (`§G1-CONTRACT`) that says which R8-required outputs are still missing. **Read `§G1-CONTRACT` first: it is the only honest answer to "is G1 done."**
Source-of-truth relationship: **owns nothing.** Gate sequence → plan §5. Rationale → charter R9. Finding disposition → PRE-0 ledger R5. Program state → the checkpoint. Authority truth → §4's carriers. External/enterprise correspondence → **C3.8 G2/G4**. Build-side operating model → **Build OS `09`/`10`** *(at their declared maturity — §1.3)*.
Manifest action: `add_tier2` · Review gate: `user_knox_required`

> ## ★ POSTURE
> Authored under **`proposal_authoring`** — may research, propose, author, test; may **never** accept, approve or commit. **Closes no ledger row. Does not close G1.**
> **§E is the gate's required evidence and MUST NOT be compressed, summarized or replaced by totals in any future revision.** R2 deleted three required evidence tables while keeping their totals. See §0.1.
> **`B-1` is CLOSED (2026-08-11, §0.2).** Historical fact retained: everything in this carrier **up to that date** was produced under the then-unresolved boot violation — clearing it removes the blocker, it does not retroactively validate that work. **`§E6`–`§E6.4` in particular remains an exploratory probe and is NOT the Output-1 result.**
> **Output 1 was executed 2026-08-12 at `§E6.5`–`§E6.12`** — the run of the `§E6.3` specification, under `proposal_authoring`, with `B-1` closed. **It closes no ledger row, accepts nothing, installs nothing, and starts no later output.** Its two result dimensions are reported separately and must stay separate: `representability` **14/14 PASS** after four bounded amendments; `estate_validation` **4 PASS · 3 FAIL · 7 NOT_INSTANTIATED**, which is **not** a pass.

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

### §0.4 — Source posture *(cumulative through R3; R4's Output-1 posture is at `§E6.12`)*

**Read fully:** plan R8 · charter R9 · PRE-0 ledger R5 · checkpoint · Tier-0 #14 · C3.8 G2 + G4 · **Build OS `09` and `10`** · Artifact Index · `rbac_authority_contract.md` · Agent Runtime capture · **`OMNI_System_Map_vNext.md` + `OMNI_Surface_Map_vNext.md` (R4)** · **governance taxonomy `00_document_governance_and_taxonomy_2026-05-19.md` (R4)**. **Read to controlling sections:** Build OS `11` (status + stale-foundation warning) · `02_authority_routing_map.md` · GCE/enterprise posture · thesis §A/§B envelopes · `EVRUN-000007` `_05 §I.13–I.15` + `_06` · `EVRUN-000008` `_04`/`_03` · Care §§1b·4·5a·5b·5b.1·9·9a·13·18·**19** · Identity/Federation/D7 · `C4.4 §R` · **ISO/IEC/IEEE 42010 definitions 3.1–3.10 + clauses 4.2.2–4.2.7 (R4; mechanism probe, not adopted)**. **Searched:** six AI-corpus registries; estate external-pattern vocabulary; **R4's estate checks enumerated at `§E6.12`**. **Still not inspected — declared, not discharged:** C3.8 G1b/G3 · Lane-1 primary sources **other than 42010** · Polaris · Platform + Accountability captures · C4.6 · federation-permeability arc. *(The System/Surface Maps left this list in R4 — reading them was the narrow prerequisite floor for the `AB-08` fixture, and it does **not** close `B-8`.)*

---

## §G1-CONTRACT — completion matrix against the R8 required outputs

> **This is the readiness contract, NOT the acceptance object and NOT the architecture.** It answers one question — *what must exist before G1 can be accepted, and what is still missing.* **Accepting this matrix would be accepting a checklist instead of an operating model.** Its absence is nonetheless why four revisions produced review dossiers instead of a gate result. **A cell is `COMPLETE` only when its sources are read, its decision is made or explicitly named open with an owner, and its evidence is in `§E`.**
>
> **Method rule: whole-dossier rewriting is retired as the *evidence-completion* method for this gate.** Three of four revisions re-authored the entire carrier, which is how required evidence got deleted (§0.1) and how the load-bearing model moved three times. **This retires uncontrolled reauthoring — it does NOT retire synthesis, architecture, or the eventual authoring of a clean carrier.** Closing cells 2–7 *requires* bounded authoring; source retrieval is the prerequisite, not the substitute.
>
> **Global completion rule:** *no output is complete while its model section, provenance table, blocker table, STOP receipt, catalog entry and route entry disagree.* The previous pass changed conclusions in the body and left six surfaces stale — which is why this rule exists.

| # | R8-required G1 output | Carrier section | Required sources read? | Decision state | Residual | Acceptance condition |
|---|---|---|---|---|---|---|
| 1 | **artifact metamodel** | **`§E6.5`–`§E6.12` (`AMM-C1` + the run)** · spec `§E6.3` · superseded probe `§E6`–`§E6.4` | Artifact Index ✔, governance taxonomy ✔, R8 §3.1 ✔ · **System Map ✔, Surface Map ✔, 42010 ✔ (mechanism probe, not adopted)** | **COMPLETE_AS_PROPOSAL — fixture RUN.** `representability` **14/14 PASS** after four bounded amendments (`A-1`…`A-4`) + one fixture-protocol amendment (`P-1`); negative controls **9/9** behave as required. **`estate_validation` 4 PASS · 3 FAIL · 7 NOT_INSTANTIATED — not a pass, reported as itself** (`§E6.11`) | 3 estate FAILs (`G1-FIND-13`/`-14`) and 7 uninstantiated kinds — **governance gaps, not schema gaps** · 5 sub-decisions named open with owners (`§E6.11.4`) · `NC-8`'s semantic non-loosening check `UNRESOLVED` → outputs 3 + 6 · catalog row + route `9v-ii` unrepointed (outside this pass's writable scope) | `architecture_steward` accepts `AMM-C1` and disposes `AB-08` per `§E6.11.3`; installation of the descriptor schema is **G2's** transaction against R8 §3.1 |
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

**Honest reading: ONE of eight outputs is complete as a proposal.** Counted from the matrix rows above and manually verified against them (`F-06`): **row 1 `COMPLETE_AS_PROPOSAL`** (fixture run, `§E6.5`–`§E6.12`) · **rows 2–7 `INCOMPLETE`** · **`§G1-AUTH` `partially converged`** · `1 + 6 + 1 = 8` ✔. Of the six gate obligations at `§G1-CONTRACT.b`, **`B-1` is CLOSED** and the rest are proposed or partial.

**Output 1's completion changes the shape of what remains, and shrinks none of it.** Its own estate results are the sharpest evidence yet that **G1's contract is not close to satisfied**: seven of fourteen tested resource kinds have no instance, and three exist ungoverned. Items 2–7 still need the unread Lane-1 and Lane-2 sources **and then bounded authoring** — reading alone will not produce an operations loop, graph semantics or a conformance model. **There is no path from unread sources to a completed architecture that contains no writing.** And Output 1 deliberately did **not** settle precedence, conflict resolution, applicability evaluation, profile composition, source-change propagation, effective resolution or conformance proof — it tested **representation only**, so outputs 3–7 inherit every one of those obligations undischarged (`§G1-CONTRACT.c`).

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
| `AB-08` | artifact taxonomy granularity | **PROPOSED_CLOSURE_ON_REPRESENTABILITY — fixture RUN, still NOT closed** | **the question is malformed as a single class count** — 10 governance categories classify *carriers*, 13 Artifact Index roles assign *homes*, `primary_kind` types *resources*, and finer granularity is `part_of` rather than more classes. Passport ⟂ descriptor survives; **`plane` ⟂ `viewpoint_or_view` is withdrawn as a single axis** (two kinds + one relation, plus `home_plane` ⟂ `constrains_planes[]`); role registry extended by **17 exercised kinds** (+2 carried, untested) | §E6.5–§E6.12 (`§E6.11.3` = the disposition) · superseded probe §E6 · §E-note B | **steward disposes the fork at `§E6.11.3`:** closure if the condition is the representability question `AB-08` names (14/14 representable, 9/9 controls); **OPEN** if it also requires estate validation (`G1-FIND-13`/`-14`) |
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

**§E-note B — `AB-08` passport.** Two objects, not one: the **passport** answers *may I rely on this, for what, at what maturity* and stays small; the **descriptor** (plan §3.1) carries canonical identity, version, owner, dependencies, supersession, applicability, profile inheritance, variation and deployment targeting. R0 listed descriptor fields as passport axes. Proposed axes: `governance_category` · `architecture_role` · `authority_maturity` · `scope` · **`plane` ⟂ `viewpoint_or_view`** · `build_evidence_maturity`. Proposed role additions, all verified absent from the ratified index: `standard` · `pattern` · `operating_profile` · `conformance` · `controlled_vocabulary` · `view`. **★ R4 corrections from running the fixture: (a) the single `viewpoint_or_view` axis is WITHDRAWN — `viewpoint` and `view` are two `primary_kind` values joined by one `governed_by` relation, and collapsing them into one field was malformed; (b) `plane` splits into `home_plane` ⟂ `constrains_planes[]` (`A-1`); (c) `authority_maturity` splits into `authority_level` ⟂ `lifecycle_state` ⟂ `decision_state` ⟂ `naming_state`; (d) `governance_category` belongs to the CARRIER, never to the resource; (e) `controlled_vocabulary` was NOT exercised by the fixture and is therefore carried, not validated. The live model under test is `AMM-C1` at `§E6.5`.** **Closure required the 12-artifact fixture set** (Reactor · GCE · a domain contract · an operating profile · a deployment profile · a viewpoint and its view · a cross-cutting standard · a pattern · a generated snapshot · a conformance suite · implementation proof · a proposed-but-unaccepted decision) to classify with **no ad-hoc exception**. **RUN in R4 — `§E6.6`. Result, stated precisely because the bar is worded precisely: the first run FAILED 6 of 14 cases. Four *general* amendments followed (`A-1`…`A-4`) — none of them a per-case carve-out — and the rerun classified 14/14 with ZERO ad-hoc exceptions, which is the `§E6.3` `bounded amendment → rerun` path rather than the clean-first-run path. `estate_validation` is 4 PASS · 3 FAIL · 7 NOT_INSTANTIATED. Disposition `§E6.11.3` (`G-08`).**

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
> **`AB-08` was still OPEN and unrun as of R3, and no G1 output was completed by that pass.** **R4 then ran the `§E6.3` fixture — `§E6.5`–`§E6.12`.** The withdrawals above stand; the probe is still not a fixture result. Two of the defects below were themselves partly overstated and are corrected in place by direct inspection: **defect 3's parenthetical guess about the `plane` values** and **`§E6.2` item 5's claim that patterns have no instance.**

### §E6.1 — Why the probe was invalid

| # | Defect |
|---|---|
| 1 | **It tested physical files where the architecture needs logical resources.** Three levels exist and were flattened into *one file × one passport*: the **physical carrier** (file, code module, test, generated artifact) · the **logical architecture resource** (standard, pattern, contract, profile, view, decision) · the **descriptor and its relations**. **R8 §3.1 already specifies a `resource_id` that "survives renames and moves"** — the separation was in a source this gate had read, and the probe designed past it. **This single error produced most of the apparent failures**: one carrier holding a pattern, several normative guardrails and a boundary mechanism looks like a multi-role artifact only if carrier and resource are the same thing. |
| 2 | **Self-contradiction.** GCE was classified as needing `pattern`, while the *"reusable pattern"* row was declared untestable for want of a pattern instance. Both cannot hold in one test. |
| 3 | **The `plane` conclusion used an uninspected taxonomy.** `[seam, capability, projection]` were treated as `plane` values, but the plane taxonomy lives in the System Map / Surface Map — **both unread at R3**. A mismatch against an axis whose controlling source was never opened is not evidence the axis must be multi-valued. **★ Corrected in R4 after reading both maps: the parenthetical *"those look like functions or concerns, not planes"* is FALSIFIED — `seam`, `capability` and `projection` are literally `P2`, `P3` and `P4` of the seven-plane taxonomy settled in `D0THES-DEC-033`. The reasoning above was right and its guess was wrong: the true defect is that one `plane` field was answering two questions — where a resource *resides* versus what it *constrains* (`§E6.9` `G1-FIND-11`, amendment `A-1`).** |
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
5. **Operating profiles, deployment profiles, patterns and generated snapshots have no instances** — the metamodel cannot be validated against roles with nothing in them. *"No instance" is a gap to fix with a marked synthetic exemplar, not a test result.* **★ Corrected in R4: `patterns` is wrong. `doctrine/coherent_omni_architecture_pattern_2026-05-17.md` is a real reusable pattern at read-graph Tier-0 #14 — and it has no passport, no declared authority and no owner, so it fails `estate_validation` rather than lacking an instance (`G1-FIND-13`). Operating profiles, deployment profiles and generated snapshots are confirmed `NOT_INSTANTIATED` (`§E6.6.4`/`.5`/`.9`).**
6. **View/viewpoint correspondence** and **cross-cutting-standard addressability** remain candidate gaps requiring the 42010 source and direct map inspection. **★ Both resolved in R4 by doing exactly that: addressability is real (`06` rows carry ids, force and status — `§E6.6.7`); no `viewpoint` resource exists estate-wide and the maps are *not* asserted to be 42010 views (`§E6.6.6`, `G1-FIND-18`).**

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

**The probe stood unrun until R4.** Its closure condition — the fixture specified at **`§E6.3`** — was **executed in R4 at `§E6.5`–`§E6.11`**. `AB-08`'s disposition is stated at **`§E6.11`**; it is `PROPOSED`, not accepted (`G-08`, `B-3`).

---

## §E6.5 — Output 1 · the candidate metamodel under test (`AMM-C1`)

> **Scope discipline (`§G1-CONTRACT.c`, row 1).** `AMM-C1` is tested for **REPRESENTATION ONLY.** It may not — and here does not — settle precedence, conflict resolution, applicability *evaluation*, profile composition, source-change propagation, effective-architecture resolution, conformance proof, or regulatory/contractual adjudication. Those are outputs 3–7. Anything below that looks like a resolution rule is a **type precondition** (an edge that cannot be drawn), never an algorithm that decides which of two drawable edges wins.
>
> **`AMM-C1` is a candidate under test, not a schema proposal for installation.** Field names are fixture vocabulary. Installation is G2's transaction against R8 §3.1.

### §E6.5.1 — Four layers, because three of them are routinely conflated

**R8 §3.1 already separated descriptor / manifest / snapshot. It did not separate the thing described from the thing describing it from the thing obeying it.** The probe's single worst error (`§E6.1` defect 1) was flattening carrier and resource; the estate's live defects add a third confusion — treating a *file* as the architecture and the *code* as unrelated.

| Layer | What it is | Why it must be separate |
|---|---|---|
| **L0 · entity of interest** | the OMNI substrate and its deployments — **not an artifact** | so *the rule*, *the file stating the rule* and *the system obeying the rule* are three things. **Borrowed from 42010's `architecture` (3.2) ≠ `architecture description` (3.3);** OMNI adds the third term — 42010 models description, not implementation |
| **L1 · logical architecture resource (`AR`)** | the architecture thing itself: a standard, pattern, contract, profile, decision, view, viewpoint, variation point, conformance suite, implementation, snapshot, external source | identity, authority, lifecycle, scope and relations belong here — **not to bytes** |
| **L2 · carrier / locator (`CR`)** | where bytes live: a Markdown document, **a row inside one**, a code module, a migration, a test script, a CI workflow, a generated artifact, an **external publication** | packaging is a **many-to-many** fact about storage. `06` carries **115** guardrail resources (counted, not estimated); one resource spans several files |
| **L3 · descriptor (`DS`)** | the machine-readable record **about** an `AR` — R8 §3.1 object 1 | a descriptor is neither the resource nor its passport. **`§E-note B`'s passport ⟂ descriptor split survives and is load-bearing** |

### §E6.5.2 — The thirteen required distinctions, and where each lives

**Not one passport and not one enum.** Each row is a separate axis or object; collapsing any two reproduces a defect this fixture found.

| # | Required distinction | Where it lives in `AMM-C1` | Anti-collapse note |
|---|---|---|---|
| 1 | logical architecture resource | `AR.resource_id` — stable, never reused, **survives renames, moves and repackaging** (R8 §3.1). **Identity is never name-based** (`G1-FIND-15`) | not a path, not a filename, not a label |
| 2 | physical carrier / canonical locator | `CR.carrier_kind` + `CR.locator` + `CR.carries[] → resource_id` (0..n) | `carries` is n:m in **both** directions |
| 3 | descriptor | `DS.describes → resource_id` (1:1), itself carried by a `CR` | ⟂ passport ⟂ resource |
| 4 | primary resource kind | `AR.primary_kind` — single-valued, closed, amendment-only | **granularity is `part_of`, not a longer class list** (§E6.5.4) |
| 5 | governance/document classification | `CR.carrier_governance_class` = `{declared_value, in_fixed_set, ratification_state}` — **carrier-only** | never on an `AR`; `primary_kind` never on a `CR` |
| 6 | authority level | `AR.authority_level` | **independent of lifecycle** (`§E6.2` finding 2); never inferred from path, recency or carrier status |
| 7 | lifecycle and decision state | `AR.lifecycle_state` ⟂ `AR.decision_state` ⟂ `AR.naming_state` | three axes; `06` uses `status` for one, `08` for another |
| 8 | scope and applicability | `AR.scope` (reach) ⟂ `applicability_claim` (a **separate resource**, one per source × context) | **force never labels a source** (`G1-FIND-10`) |
| 9 | relationships | the typed relation set at §E6.5.5, with cardinality + preconditions | an untyped `related_to` is how a graph rots |
| 10 | view/viewpoint correspondence | `primary_kind ∈ {view, viewpoint}` + `governed_by` (view → viewpoint, 1:0..1, **`undeclared` permitted**) + `unframed_concerns[]` | **`§E-note B`'s single `viewpoint_or_view` axis is withdrawn** — two kinds and one relation, not two values of one field |
| 11 | implementation and evidence relations | `implemented_by` · `verified_by` · `evidenced_by` (`AR` → `CR`, 1:n) | the resource model **cannot be document-only** (`§E6.1` defect 6) |
| 12 | operating- and deployment-profile targeting | `AR.profile_targeting = {operating_profile_ref[], deployment_profile_ref[]}` | a profile **reference** is not a profile **value** |
| 13 | variation-point participation | `declares_variation_point` · `instantiates_variation_point` · `prohibits_variation` | inside a declared point = configuration; outside = an architecture change (charter §6.2, **candidate**) |

**Plus two axes the fixture forced and `§E-note B` did not have:** `AR.home_plane` (0..1) ⟂ `AR.constrains_planes[]` (0..n) — `§E6.9` `G1-FIND-11`; and `AR.omni_version` (semver) ⟂ `AR.source_edition` (publisher's, opaque) — `G1-FIND-16`.

### §E6.5.3 — Axis values, all drawn from live declarations rather than invented

| Axis | Values | Provenance |
|---|---|---|
| `authority_level` | `constitutional_binding` · `governance_binding` · `canonical` / `canonical_domain` · `derived_nonbinding` · `analysis_nonbinding` · `evidence_only` · **`unstated`** | every value is a live `Authority:` declaration in the estate. **`unstated` is required, not a convenience: `D0-GRD-003` says a doc without a passport is provisional — so absence must be recordable, never silently upgraded** |
| `lifecycle_state` | `proposed` · `in_review` (incl. `draft_for_ratification`) · `ratified_active` · `active_skeleton` · `frozen` · `superseded` · `withdrawn` · `demoted_to_evidence` · **`declared_but_unauthored`** | live `Status:` values. `declared_but_unauthored` is inherited from `G-18` — GCE is the established home whose contract content does not exist |
| `decision_state` | `not_a_decision` · `open` · `decided` · `decided_pending_ratification` · `parked_with_trigger` · `rejected` | `08` row statuses + the Wave-5/Wave-6 promote/merge/park dispositions |
| `naming_state` | `named_accepted` · `named_provisional` · `naming_gate_open` · **`name_prohibited_in_implementation`** | `EVRUN-2026-000008_04`: *"`OMNI Reactor` unchanged/unpromoted · naming gate OPEN"*, and its fixture keeps the name out of every identifier |
| `scope` | `universal` · `plane_scoped` · `domain_scoped` · `arc_scoped` · `profile_scoped` · `deployment_scoped` · `transaction_scoped` | §2.4 per-act rule + `AB-30` jurisdiction axis + `INV-18` |
| `home_plane` / `constrains_planes[]` | `P0 Doctrine` · `P1 Truth` · `P2 Seam` · `P3 Capability` · `P4 Projection` · `P5 Surface` · `P6 Build` · `Evidence` | **`D0THES-DEC-033`, read directly this pass** — Surface Map §2 + System Map source-of-truth rules. Closed at seven planes + Evidence, with Actions/Commands and Evals as **conscious folds** |
| `carrier_kind` | `markdown_document` · `markdown_row` · `code_module` · `sql_migration` · `test_script` · `ci_workflow` · `structured_descriptor` · `generated_artifact` · `external_publication` | every value has ≥1 live instance except `structured_descriptor` and `generated_artifact` (both `NOT_INSTANTIATED`) |

### §E6.5.4 — `primary_kind`: seventeen values the fixture actually exercised — and why the number is not the answer

**`AB-08` asks whether the taxonomy should have 17 classes or 5 tiers. The fixture's answer is that the question compares two different axes.** OMNI's **13 Artifact Index roles** answer *which artifact holds what, and what is forbidden in it* — they are **home/carrier roles**. `primary_kind` answers *what kind of architecture thing this is*. The **10 governance categories** answer *what kind of document the carrier is*. Three axes, three different granularities, none of which is a refinement of the others. **And finer granularity is a relation, not a longer list:** Reactor's eight invariants and `06`'s **115** guardrail rows are `part_of` their parents, not 123 new classes.

**Exercised by ≥1 fixture case, representability case or negative control — seventeen values, each traced to where it was tested:** `standard` (1 · 7) · `pattern` (2 · 8) · `domain_contract` (3) · `interface_contract` (2) · `decision` (2 · 12) · `viewpoint` (6) · `view` (6) · `architecture_map` (6) · `operating_profile` (4 · NC-8 · NC-9) · `deployment_profile` (5 · NC-9) · `variation_point` (Case B) · `conformance_suite` (10) · `implementation` (11) · `generated_snapshot` (9 · NC-3) · `external_source` (Case A · Case B · NC-7) · `applicability_claim` (Case A) · `proposal` (NC-4 · NC-5).

**Carried but NOT exercised, and therefore NOT validated — stated because an unexercised value in a list is an untested claim:** `controlled_vocabulary` (from `§E-note B`; §4.9 names it, no case tested it) · `seam_contract` (the Artifact Index's existing Seam/Event Contract role; referenced only in the open sub-question below, never exercised as a case).
**Open sub-question, not silently decided:** whether the GCE build-facing boundary contract is an `interface_contract` or reconciles to the Artifact Index's existing **Seam/Event Contract** role. Owner `architecture_steward`; it does not block Output 1's representability result. (`G-18` already owns the fact that the contract content does not exist.)

### §E6.5.5 — Typed relations, cardinality, and the ten edges that must be undrawable

| Relation | Cardinality | Precondition (a **type** rule, not a resolution algorithm) |
|---|---|---|
| `part_of` | n:1 | parent and child share `owner_seat` unless an explicit delegation exists |
| `carries` (`CR`→`AR`) | n:m | **no 1:1 constraint may be imposed in either direction** |
| `describes` (`DS`→`AR`) | 1:1 | — |
| `owns` (`AR`→ a fact) | 1:n | **forbidden where `home_plane ∈ {P4, P5}`** (`D0THES-DEC-033`, `T0-15`) |
| `depends_on` | n:m | target must resolve to an existing `resource_id` |
| `specializes` (profile inheritance) | n:1 | specializer's `scope` ⊆ specialized's `scope`; **may not relax an inherited prohibition** |
| `supersedes` | n:m | `authority_level(superseder) ≥ authority_level(superseded)` |
| `conforms_to` | n:m | target `authority_level ∉ {analysis_nonbinding, evidence_only, unstated}` **and** target `lifecycle_state = ratified_active` |
| `implemented_by` / `verified_by` / `evidenced_by` | 1:n | target is a `CR`, not an `AR` |
| `governed_by` (view→viewpoint) | 1:0..1 | `undeclared` is legal and must not be auto-filled |
| `promoted_by` | 1:1 per transition | **required for any increase in `authority_level`** (`D0THES-GRD-036`) |
| `declares` / `instantiates` / `prohibits` variation | n:m | an instantiation must name the point it instantiates |
| `applies_to` (`applicability_claim`) | 1:1 context tuple | tuple = context · profile · jurisdiction · product · actor · `as_of` |
| `translated_to` | n:m | source is never mutated or copied |

**Undrawable by construction:** ① a 1:1 carrier↔resource identity constraint · ② `governance_category` on an `AR`, or `primary_kind` on a `CR` · ③ `authority_level` inferred from lifecycle, path, recency or carrier status · ④ a `P4`/`P5` resource owning truth · ⑤ `supersedes` upward in authority · ⑥ `conforms_to` a non-accepted target · ⑦ an `authority_level` increase without `promoted_by` · ⑧ an `operating_profile`/`deployment_profile` resource carrying `scope = universal`, or relaxing a `universal` prohibition through `specializes` · ⑨ a hand edit to a `generated_snapshot` (`writable_by = nobody`) · ⑩ `omni_version` on an `external_source`, or OMNI rewriting a `source_edition`.

---

## §E6.6 — The twelve-case fixture matrix

> **Reproducibility contract.** Every case names its real instance by path or its `FIXTURE_ONLY` synthetic. Every verdict below was read off the live estate at the head this pass commits, and every aggregate at `§E6.11` is hand-recomputed from these rows (`F-06`).
>
> **Recording contract — the twelve fields required per row** are split for legibility, not dropped: the matrix carries *resource · provenance · expected primary kind · representability · estate_validation*; the per-case blocks carry *expected carrier/locator behaviour · expected authority level · expected lifecycle/decision state · required relationships · forbidden classifications · observed defect or residue · proposed bounded amendment*.
>
> **Aggregation rule, declared before the run:** where a case decomposes into components, its `estate_validation` is the **dominant** component result under `FAIL ≻ NOT_INSTANTIATED ≻ PASS`, with the component split recorded in the row block. `representability` is reported **twice** — as run against `AMM-C1` **pre-amendment**, and again after the bounded amendments at `§E6.10`.

| # | Logical resource under test | Source / fixture provenance | Expected `primary_kind` | `representability` pre → post | `estate_validation` |
|---|---|---|---|---|---|
| 1 | **OMNI Reactor** — the candidate invariant set over consequential transitions | `ingestion/user_operator_research/analysis/EVRUN-2026-000008_multi_principal_agentic_substrate/_04` (terminus) + `_00 §6A` | `standard` | **FAIL** → PASS | **PASS** |
| 2 | **Governed Capability Exchange** | `doctrine/omni_enterprise_posture_2026-06-03.md` §GCE (`D0THES-DEC-036`) | *(cluster — see block)* | **FAIL** → PASS | **NOT_INSTANTIATED** *(4 PASS / 1 NI)* |
| 3 | **a domain contract** — RBAC / Authority / Attestation / Consent-Gate | `contracts/rbac_authority_contract.md` | `domain_contract` | **FAIL** → PASS | **PASS** |
| 4 | **an operating profile** | **`FIXTURE_ONLY`** synthetic `FX-OP-01` (§E6.6.4) | `operating_profile` | PASS → PASS | **NOT_INSTANTIATED** |
| 5 | **a deployment profile** | **`FIXTURE_ONLY`** synthetic `FX-DP-01` (§E6.6.5) | `deployment_profile` | PASS → PASS | **NOT_INSTANTIATED** |
| 6 | **a viewpoint + its view** | view = `OMNI_System_Map_vNext.md` (real); viewpoint = none located estate-wide | `view` + `viewpoint` | PASS → PASS | **NOT_INSTANTIATED** *(view PASS / viewpoint NI)* |
| 7 | **a cross-cutting standard** | `D0THES-GRD-033` — a **row** in `doctrine/06_guardrail_antipattern_digest.md` | `standard` | **FAIL** → PASS | **PASS** |
| 8 | **a reusable pattern** | `doctrine/coherent_omni_architecture_pattern_2026-05-17.md` §1 — **real, read-graph Tier-0 #14** | `pattern` | **FAIL** → PASS | **FAIL** |
| 9 | **a generated effective snapshot** | **`FIXTURE_ONLY`** synthetic `FX-SNAP-01` (§E6.6.9); R8 §3.1 object 3 | `generated_snapshot` | PASS → PASS | **NOT_INSTANTIATED** |
| 10 | **a conformance suite** | `scripts/test-consequential-transition-conformance.ts` | `conformance_suite` | PASS → PASS | **FAIL** |
| 11 | **implementation proof** | the `requireCapability` authority-enforcement resource — `lib/auth/capabilities.ts` + RLS migrations + call sites | `implementation` | PASS → PASS | **FAIL** |
| 12 | **a proposed-but-unaccepted decision** | `D0-REV-010` — a **row** in `doctrine/08_open_review_queue.md`, `status = open` | `decision` | PASS → PASS | **PASS** |

### §E6.6.1 — Case 1 · OMNI Reactor

**Expected carrier/locator behaviour:** several `markdown_document` carriers in one Evidence-lane run directory; the resource is **none of them** — `resource_id` must survive the run's file numbering, and the terminus is the readable entry point, not the resource. **Expected authority level:** `analysis_nonbinding` (`GRD-036`). **Expected lifecycle/decision state:** `lifecycle_state = frozen` · `decision_state = parked_with_trigger` (Wave-6 park routed consequence→control/proof-envelope here) · `naming_state = naming_gate_open`. **Required relationships:** eight invariants `part_of` the resource · `verified_by` case 10's suite · `evidenced_by` the run's submissions · **no** `conforms_to` edge from any binding resource. **Forbidden:** `authority_level ∈ {canonical, governance_binding}` · any `promoted_by` edge (none exists) · `lifecycle_state = ratified_active`.

**Observed defect — representability FAIL, two causes.** ① A single `plane` field cannot express this resource: it **resides** in the Evidence plane as an unpromoted candidate while **constraining** P1/P2/P3 behaviour. The probe hit exactly this and reported *"`plane` had to take a set — `[seam, capability, projection]`"*; direct inspection this pass shows those three **are real plane names** (P2 · P3 · P4), so the probe's observation was better than the withdrawal credited, and `§E6.1` defect 3's parenthetical guess is falsified (`G1-FIND-11`). ② No axis holds a naming prohibition that is independent of acceptance (`G1-FIND-15`). **Amendments:** `A-1` (`home_plane` ⟂ `constrains_planes[]`) and `A-2` (`naming_state`). **estate_validation = PASS** with one residue: the owner is recorded as *run roles* in the terminus (operator Nick · adjudicator Knox), not as a standing `owner_seat` on the resource.

### §E6.6.2 — Case 2 · Governed Capability Exchange — **the case is not one logical resource**

**The fixture's own case list contains a cluster.** The probe read this as *"needs `standard` AND `pattern` AND `seam` simultaneously — one `architecture_role` cannot hold it."* Under the L1/L2 split that conclusion dissolves, but not the way the probe's withdrawal implied: **GCE is five logical resources sharing carriers**, and the probe was describing the cluster, not a multi-role resource.

| Component | `primary_kind` | Carrier | `authority_level` · `lifecycle_state` | `estate_validation` |
|---|---|---|---|---|
| the governed-exchange **spine** (`actor → capability contract → Identity → Federation → RBAC → delegated authority → context packet → consent/grant → CNS → owning-domain commit → audit/proof → classified return`) | `pattern` | `doctrine/omni_enterprise_posture_2026-06-03.md` §GCE | `governance_binding` · `ratified_active` | **PASS** |
| `D0THES-GRD-033` rail-agnosticism | `standard` | `06` row | `governance_binding` · `ratified_active` | **PASS** |
| `D0THES-GRD-034` bounded-not-connect-everything | `standard` | `06` row | `governance_binding` · `ratified_active` | **PASS** |
| `D0THES-DEC-036` the capstone decision | `decision` | `03` row + posture doc | `governance_binding` · `decided` | **PASS** |
| the **build-facing boundary contract** for foreign harnesses (§3's ten obligations) | `interface_contract` | **none** | `unstated` · **`declared_but_unauthored`** | **NOT_INSTANTIATED** |

**Required relationships:** spine `depends_on` the six composers · guardrails `constrains_planes` the spine's planes · boundary contract `part_of` the spine and `declared_but_unauthored` · foreign-harness resources would `conforms_to` the boundary contract — **an edge that cannot yet be drawn, which is `G-18` stated as a graph fact rather than a paragraph.** **Forbidden:** treating the posture document's ratified status as the boundary contract's status; any `conforms_to` edge to a `declared_but_unauthored` target.

**Observed defect:** representability FAIL pre-amendment for the same `plane` reason as case 1 (`A-1`); **and a fixture-protocol defect** — a case naming a cluster produces a fake multi-role failure. **Amendment `P-1`:** a case must be decomposed to single logical resources before testing, and the component split recorded (`G1-FIND-17`). **estate_validation = NOT_INSTANTIATED** by the dominance rule, with the 4/1 split above; **this is the single most consequential estate result in the fixture** — OMNI's stated exchange capstone has a ratified pattern and no boundary contract.

### §E6.6.3 — Case 3 · a domain contract

**Expected carrier/locator behaviour:** one `markdown_document`, one resource; `.cursor/plans/contracts/` is the home. **Expected authority level:** `canonical_domain` for the authority substrate. **Expected lifecycle:** `in_review` (`draft_for_ratification`). **Required relationships:** `owns` the permission/grant/attestation facts · `depends_on` Identity · Federation · D7 · CNS-Meta · `implemented_by` `lib/auth/capabilities.ts` · `supersedes` DL-18 as the build-facing artifact · `part_of` nothing. **Forbidden:** a single field holding both `canonical` and `draft_for_ratification`; `owns` on any P4/P5 resource composing it.

**The probe's sharpest true finding is confirmed and fixed.** The probe reported *"`authority_maturity` had to hold two values — `canonical` for the substrate **and** `draft_for_ratification`."* Splitting `authority_level` ⟂ `lifecycle_state` dissolves it exactly (`§E6.2` finding 2, the defect that section called soundest).

**Observed defect — representability FAIL on the carrier axis.** The file declares `Document type: domain_contract`. That value is **not one of the ten fixed governance categories**, and `AMM-C1` pre-amendment constrains `carrier_governance_class` to the ten ∪ `needs_classification`. Recording it as `needs_classification` is false — the carrier is not unclassified; it is classified under an **unapproved** category. Verified live: **15 of 15** files in `contracts/` declare `domain_contract`. **Amendment `A-3`.** **estate_validation = PASS** (authority declared, lifecycle declared, owner = RBAC domain owner, home usable) with two residues: `.cursor/plans/contracts/` appears **nowhere** in `.github/CODEOWNERS`, so no protected writer exists for any domain contract; and the taxonomy drift is a **steward decision**, not a representability question (`§E6.2` finding 3 — now measured at 15/15 rather than asserted).

### §E6.6.4 — Case 4 · an operating profile · **`FIXTURE_ONLY`**

```yaml
# FIXTURE_ONLY — synthetic exemplar. Not a proposal, not an instance, not installed.
resource_id: FX-OP-01
primary_kind: operating_profile
preferred_label: "2026 agent-constraint operating profile"
authority_level: analysis_nonbinding      # a profile cannot exceed its declaring authority
lifecycle_state: proposed
decision_state: not_a_decision
naming_state: named_provisional
scope: profile_scoped
home_plane: P0
constrains_planes: [P3, P6]
owner_seat: architecture_steward
omni_version: 0.0.1-fixture
profile_targeting: {operating_profile_ref: [self], deployment_profile_ref: []}
relations:
  specializes: [AR:agent-authority-durable-invariants]   # MUST NOT relax
  instantiates_variation_point: [FX-VP-01]
content_under_test:
  - "AI never final-authors safety-sensitive atoms"       # §4.7 current profile
  - "model-bearing actors may not commit domain truth"
  - "agents in this arc hold proposal_authoring only"
```

**Expected carrier behaviour:** a `structured_descriptor` carrier — a kind with **zero live instances**. **Required relationships:** `specializes` the durable invariants; every constraint traceable to a `universal`-scoped parent. **Forbidden:** `scope = universal`; any `specializes` edge that relaxes the parent; `authority_level` above its declaring carrier. **representability = PASS.** **estate_validation = NOT_INSTANTIATED** — residue: the *content* exists as prose in this carrier's §4.7/§4.9 and as the ledger `§3.5` expiring role table, but no `operating_profile` resource, home, owner or version exists anywhere. **A synthetic exemplar proves the model can hold an operating profile. It proves nothing about whether OMNI needs one, who would own it, or whether these three constraints are right.**

### §E6.6.5 — Case 5 · a deployment profile · **`FIXTURE_ONLY`**

```yaml
# FIXTURE_ONLY — synthetic exemplar.
resource_id: FX-DP-01
primary_kind: deployment_profile
preferred_label: "sovereign federation member, jurisdiction J"
authority_level: analysis_nonbinding
lifecycle_state: proposed
scope: deployment_scoped                   # NC-9 asserts this can never be universal
home_plane: P1
constrains_planes: [P1, P2, P5]
owner_seat: federation_domain_owner
projects_over: FED.tenant_id               # INV-18: a deployment profile is a projection
relations:
  specializes: [FX-OP-01]
  instantiates_variation_point: [FX-VP-01]
release_posture: sovereign_federation_member    # §6.4, proposed
```

**Required relationships:** `specializes` an operating profile; `projects_over` Federation's composite `tenant_id`. **Forbidden:** `scope = universal` (NC-9); writing any `universal`-scoped resource; `owns` truth. **representability = PASS.** **estate_validation = NOT_INSTANTIATED** — with a precise residue that a bare "no instance" would have hidden: **the substrate a deployment profile projects over is real** (Federation's six-tier composite `tenant_id`, plus Settings-hosted `federation_permeability_policy` values), and `INV-18` already says *"deployment profile is a projection over it."* What is missing is the profile resource, not the ground it stands on.

### §E6.6.6 — Case 6 · a viewpoint and its view

**Direct inspection replaces the probe's guess.** The probe asserted *"System Map and Surface Map are **views with no declared viewpoint** — a 42010 gap, found by the fixture,"* and `§E6.1` defect 4 correctly withdrew it as untestable while both maps and 42010 were unread. Both are now read.

| Question | Answer, from direct inspection |
|---|---|
| Is the System Map a 42010 **view** (3.5 — *work product expressing the architecture of a system from the perspective of specific system concerns*)? | **Partly, and not usefully.** It is view-like: it addresses a bounded concern set (*what are the parts, who owns truth, how do they connect*) and forbids everything else. But it declares `Document type: system_map`, calls itself *"the MAP, not the territory,"* and claims `canonical` **source-of-truth** status for domain and ownership facts — and it functions as an **index over the P1 plane with pointers to contracts**, which is closer to an AD's identification-and-correspondence role than to a single view |
| The Surface Map? | Declares `Document type: architecture_map`; explicitly a **hub + spokes index** over P4 + P5, with rich detail in `surfaces/` and `projections/` |
| Is a viewpoint declared for either? | **No.** No `viewpoint` resource exists anywhere in the estate — no declared concern set, no model kinds, no correspondence rules, no construction conventions |
| Is OMNI's `plane` a 42010 viewpoint? | **No, and conflating them would be the error.** A **plane** partitions the estate by *what owns what* (`D0THES-DEC-033`). A **viewpoint** (3.6) is *a work product establishing the conventions for constructing, interpreting and using views to frame specific concerns.* Different kinds; they can coexist, and neither substitutes for the other |

**Expected result, therefore:** `view` = a real resource with `governing_viewpoint = undeclared`; `viewpoint` = `NOT_INSTANTIATED`. **`AMM-C1` must be able to say `undeclared` without failing** — a metamodel that forces a governing viewpoint would make the fixture manufacture one, which is how an unread standard becomes an invented programme. **Required relationships:** view `governed_by` (0..1, `undeclared`) · view `depends_on` the contracts it indexes · `unframed_concerns[]` non-empty. **Forbidden:** auto-filling `governed_by`; `owns` truth on a P4/P5 view (NC-6); typing either map as a `domain_contract`. **representability = PASS.** **estate_validation = NOT_INSTANTIATED** (view PASS · viewpoint NI). **Residue:** `AB-25`'s adversarial-principal **assurance viewpoint** and `AB-32`'s **human-factors viewpoint** are both already dispositioned in `§E1` as viewpoints — so the estate has *named two viewpoints and instantiated none*, and `B-10` (`G-04`) is exactly that homelessness.

### §E6.6.7 — Case 7 · a cross-cutting standard

**Expected carrier behaviour — and the probe's most self-refuting claim, now measured.** `D0THES-GRD-033` is a **row** in `06`: `guardrail_id | anti_pattern | source_evidence | domain | severity | enforced_by | status | notes`. It is addressable, named, normative, and carries `severity = high`, `status = active`, `enforced_by`. So *"standards exist as clauses inside doctrine files, not as addressable artifacts"* is false — but the true requirement the probe was groping toward is real: **`carrier_kind = markdown_row` must be first-class, because `06` is one carrier holding **115** logical resources — counted this pass, not estimated** (NC-1).

**Expected authority level:** `governance_binding`. **Expected lifecycle:** `ratified_active`. **Required relationships:** `constrains_planes[]` spanning P0–P3 and P6 · `part_of` the `06` digest as a collection · `enforced_by` → a conformance suite **(no such edge exists)**. **Forbidden:** `home_plane` alone standing in for what it constrains; `authority_level` inferred from the carrier's own status.

**Observed defect:** representability FAIL pre-`A-1` (same plane conflation). **estate_validation = PASS**, with the fixture's cleanest independent confirmation of `§E6.2` finding 2: **`06`'s own carrier declares `Status: Skeleton (Phase 0)` while hosting guardrails at `severity: critical`.** Carrier lifecycle and resource authority are demonstrably independent — a second live instance beside `02_authority_routing_map.md`. Further residues: guardrail rows carry **no `version`, no `effective_from`, no `owner_seat` field and no applicability**, so a guardrail cannot presently be pinned by version in a citation, and `06` is absent from `.github/CODEOWNERS`.

### §E6.6.8 — Case 8 · a reusable pattern — **`§E6.2` finding 5 is corrected**

**`§E6.2` item 5 said operating profiles, deployment profiles, **patterns** and generated snapshots *"have no instances."* For patterns that is false.** `doctrine/coherent_omni_architecture_pattern_2026-05-17.md` is a real reusable pattern — **read-graph Tier-0 #14, boot-visible** — stating a three-layer substrate shape (*planned commitment → actual delivery → linked evidence/commerce*) instantiated across nine named domains, with `Future pillars start from this shape, not from scratch` and six external correspondences (FHIR · Epic · Amazon · airline · restaurant · Tesla). That is a pattern by any definition the fixture could apply.

**Expected carrier behaviour:** one `markdown_document`; the pattern is `instantiated_by` nine domain resources. **Expected authority level:** it should be `governance_binding` or `canonical`. **Observed:** the carrier has **no passport at all** — only `Status: Reference doc.` and `Companion:`. So the only honest value is `authority_level = unstated`, which by `D0-GRD-003` means **provisional**. **Required relationships:** `instantiated_by[]` the nine domains · `evidenced_by` the 05-17 post-mortem · `owner_seat`. **Forbidden:** inferring `governance_binding` from Tier-0 boot-visibility; inferring authority from the read graph's routing decision.

**Observed defect:** representability FAIL pre-`A-3` — `declared_value` is **absent**, which is a third state distinct from both a fixed-set value and `needs_classification`; `A-3` covers it. **estate_validation = FAIL**, and this is the fixture's most uncomfortable estate result: *a boot-visible reusable pattern that every future pillar is instructed to inherit from has no declared authority, no declared lifecycle beyond "Reference doc", and no owner seat.* It is loaded at Tier 0 and governed by nothing. **Not repaired here** — this carrier is the only writable surface this pass, and writing a passport onto a Tier-0 doctrine file is not `proposal_authoring`'s act (`G1-FIND-13`).

### §E6.6.9 — Case 9 · a generated effective snapshot · **`FIXTURE_ONLY`**

```yaml
# FIXTURE_ONLY — synthetic exemplar. R8 §3.1 object 3; unbuilt.
resource_id: FX-SNAP-01
primary_kind: generated_snapshot
snapshot_id: snap-2026-08-12T00:00:00Z
as_of: 2026-08-12T00:00:00Z
authority_level: derived_nonbinding        # derived; it reports force, it does not carry it
lifecycle_state: ratified_active           # immutable once emitted
carrier: {carrier_kind: generated_artifact, writable_by: nobody}
derivation: f(descriptors, change_manifests, as_of)   # byte-reproducible or fail closed
relations:
  derived_from: [DS:*, AR:change_manifest:*]
  supersedes: []                           # FORBIDDEN — a new state is a new snapshot
```

**Expected carrier behaviour:** `generated_artifact`, `writable_by: nobody`, regeneration byte-identical or the pipeline fails closed (R8 §3.1). **Required relationships:** `derived_from` descriptors and manifests. **Forbidden:** any hand edit (NC-3) · any `supersedes` edge · being cited as a source of authority rather than a record of it. **representability = PASS.** **estate_validation = NOT_INSTANTIATED** — verified, not assumed: a repository-wide search for `DO NOT EDIT` · `@generated` · `autogenerated` markers returns **zero** artifacts, and no `structured_descriptor` carrier exists for a snapshot to be derived from. **Nothing generated exists in OMNI today, so the object R8 §3.1 calls the only answer to "what was true on date X" has no instance and no producer.**

### §E6.6.10 — Case 10 · a conformance suite

**Expected carrier behaviour:** `test_script` at `scripts/test-consequential-transition-conformance.ts`. **Required relationships:** `verifies → resource_id` (case 1) · `evidenced_by` the `EVRUN-2026-000008` rubric · `owner_seat`. **Forbidden:** classifying a code carrier with a document governance category (the probe's row-10 complaint, which `A-3`'s carrier/resource split retires) · identifying its target **by name**.

**A live constraint the fixture did not expect, and it validates R8 §3.1.** The suite's header states: *"the frozen candidate name is DELIBERATELY absent from every identifier per the code requirement,"* and its fixture families are neutrally named (`consequential_transition_conformance`, `rx_partial_failure_continuity`, `cross_domain_consequence_fixture`). **So OMNI already contains a resource that its own verifier is forbidden to name.** Identity therefore *cannot* be name-based, which is precisely why R8 §3.1 requires a `resource_id` that survives renames — here proven by a live instance rather than argued. **representability = PASS** for this reason: `verifies` points at a `resource_id`, and the prohibition lands on case 1's `naming_state`, not here.

**estate_validation = FAIL.** The instance exists and its header states its provenance in prose — but: no descriptor; no declared `authority_level` or `lifecycle_state`; **`scripts/` appears nowhere in `.github/CODEOWNERS`**, so no owner or protected writer is recorded; and it is wired into **neither** `package.json` (whose scripts are only `dev`/`build`/`start`/`lint`/`typecheck`) **nor** any CI workflow — `.github/workflows/` contains exactly one file, `checkpoint-pointer.yml`. A conformance suite that nothing runs is not a conformance mechanism.

### §E6.6.11 — Case 11 · implementation proof

**Expected carrier behaviour — this case exists to prove L1/L2 is n:m in the second direction.** One logical resource (the `requireCapability` authority-enforcement rule) is implemented by **several** carriers: `lib/auth/capabilities.ts` (`code_module`), the RLS migrations under `supabase/migrations/` (`sql_migration`), and its call sites. **Required relationships:** `implements → AR:rbac_authority_contract` · `verified_by` a conformance suite · `owner_seat`. **Forbidden:** treating any one file as the resource; requiring a document governance category for a code carrier; inferring the contract's authority from the code's existence (the code is the **Day-1 seed**, and the contract says *"build from THIS contract"*).

**representability = PASS.** **estate_validation = FAIL** — for the same reason as case 10 and with one sharper detail: **`.github/CODEOWNERS` protects `lib/safety/`, `lib/labs/category-mappings/`, `lib/labs/insights/`, `lib/labs/triage/`, `.cursor/plans/audits/`, `.cursor/plans/designs/`, `.cursor/plans/ingestion/` and the *demoted legacy* system map — and does not protect `lib/auth/`, `scripts/`, `.cursor/plans/contracts/`, `.cursor/plans/doctrine/`, the vNext System Map or the Surface Map.** The authority-enforcement code has no protected writer while the lab-insight mappings do, and the estate's only path-keyed protection points at the artifact the vNext pivot demoted to evidence. `verified_by` is effectively `NOT_INSTANTIATED`: one CI workflow exists estate-wide.

### §E6.6.12 — Case 12 · a proposed-but-unaccepted decision

**Expected carrier behaviour:** `markdown_row` in `08`. **Expected authority level:** `analysis_nonbinding` — a proposal carries no force. **Expected decision state:** `open`. **Required relationships:** `proposed_destination` · `required_reviewer` = the approving seat · **no** inbound `conforms_to` from any binding resource (NC-4). **Forbidden:** `lifecycle_state = ratified_active`; any `promoted_by` edge; citation as settled.

**representability = PASS.** **estate_validation = PASS** — `D0-REV-010` carries `required_reviewer: user_knox_required`, `status: open`, a named destination, and a usable home. **The cleanest row in the fixture, and worth naming as such: the estate governs its *open questions* better than it governs its patterns, its conformance suites or its authority-enforcement code.**

**The probe's row-12 complaint dissolves.** It tested *this carrier* and reported *"`governance_category = handoff_or_readiness_gate`, but no `architecture_role` fits a gate output."* Under L1/L2 the gate output **is a carrier**, not an architecture resource; the architecture resources are the `proposal`-kind resources it carries. Recorded as negative control NC-5 rather than as a defect.

---

## §E6.7 — The two `G1-FIND-10` representability cases

> **Representation only.** Neither case may settle precedence, waiver, evidence sufficiency or change semantics (`§G1-CONTRACT.c`; §7.3's *"force belongs to an applicability decision between a source and a context — never as a permanent global label on the source"*).

### Case A — one source, five contextual forces, no duplication

**Under test:** one `external_source` resource + five `applicability_claim` resources, each with its own `normative_force`, `applies_to` tuple and `disposition`, `translated_to` an OMNI-owned resource and `verified_by` evidence — **without copying or mutating the source.**

| `applicability_claim` | `applies_to` (context · profile · jurisdiction · product · `as_of`) | `normative_force` | `disposition` |
|---|---|---|---|
| `FX-AC-01` | architecture-description practice · — · — · — · 2026-08 | `informative comparator` | `consult` |
| `FX-AC-02` | internal architecture standard · OMNI-managed · — · — · 2026-08 | `internally adopted OMNI standard` | `adopt narrowed` |
| `FX-AC-03` | enterprise contract · sovereign member · — · — · 2026-08 | `contractual · customer · procurement` | `narrow` |
| `FX-AC-04` | regulated product · OMNI-managed · US · SaMD-classified component · 2026-08 | `recognized consensus standard / accepted evidence route` | `defer to determination` |
| `FX-AC-05` | non-regulated internal tooling · — · — · — · 2026-08 | `not applicable` | `reject` |

**representability = FAIL pre-amendment, and this is the one genuinely unexpected failure of the pass.** The five claims, five forces and five dispositions are all expressible against one un-mutated source — that part works. What breaks is **version**: `AMM-C1` inherits R8 §3.1's single `version` field with semantic-version semantics (*"`resource_id` + version is the citable unit"*), and an external source's identity is the **publisher's edition**, which is not a semver and which OMNI may never rewrite. The failure was found by hitting it: this pass consulted **ISO/IEC/IEEE 42010:2011** primary text while the current edition is **42010:2022** — the same source, two editions, the same definitions at different clause numbers, and an applicability claim that must pin **which**. **Amendment `A-4`:** `omni_version` ⟂ `source_edition`, with `omni_version` forbidden on an `external_source` and `source_edition` opaque and never OMNI-rewritten. Post-`A-4`: **PASS**.

**estate_validation = NOT_INSTANTIATED**, verified rather than asserted: `ingestion/regulatory_compliance_evidence/` contains exactly one file, `_lane.md`. **Zero `applicability_claim` instances exist estate-wide.** §7.3's honesty holds — a search miss is not proof of absence for *regulatory content*, which is very likely present elsewhere — but the **claim object itself** is absent, and that is the representable thing this case tested.

### Case B — operator variation (the Henry Ford case)

**Under test:** can `AMM-C1` hold **the request**, **the applicable profile**, **the variation point** and **the resulting decision** as four distinct resources without collapsing them?

| Resource | `primary_kind` | Role in the case |
|---|---|---|
| `FX-OR-01` *"our pharmacies only do it this way"* | `external_source` + `applicability_claim` | the inbound requirement, attributed to its requester, never auto-adopted |
| `FX-DP-01` | `deployment_profile` | the profile the request would land in |
| `FX-VP-01` | `variation_point` | the **declared** envelope: `permitted_values` · `prohibited_values` · `owner_seat` · `outside_the_point ⇒ architecture_change_proposal` |
| `FX-DEC-01` | `decision` | the outcome: `configuration_within_point` **or** `architecture_change_proposal` **or** `rejected` **or** `priced_conditional_support` |

**representability = PASS.** The four are distinct kinds with distinct relations (`instantiates_variation_point` · `declares_variation_point` · `applies_to` · `decides`), and the decision is a resource with its own authority and lifecycle rather than an attribute of the request. **estate_validation = NOT_INSTANTIATED** — charter §6.2 chartered variation points as a **candidate mechanism** and G0 acceptance *"authorizes no G1 content"*; zero `variation_point` instances exist. **What Output 1 does NOT do here:** decide whether any particular Henry Ford request is inside a point. That requires evaluation and precedence — outputs 3 and 5.

---

## §E6.8 — Negative controls · nine required, nine run

| # | Control | Required outcome | Result | Mechanism that produced it |
|---|---|---|---|---|
| **NC-1** | one physical carrier holding several logical resources | **must be representable** | **PASS** | `carries` is n:m and no 1:1 constraint is expressible. Live, counted this pass: `06` = **115** guardrail rows · `08` = **250** open-review rows · `03`. **A validator asserting one-carrier-one-resource is itself forbidden** (undrawable edge ①) |
| **NC-2** | one logical resource implemented or evidenced by several files | **must be representable** | **PASS** | `implemented_by` is 1:n. Live: `requireCapability` across `lib/auth/capabilities.ts` + RLS migrations + call sites |
| **NC-3** | a generated resource | **hand edit must FAIL** | **FAILS AS REQUIRED** | `generated_snapshot.writable_by = nobody` + byte-reproducible-or-fail-closed + `supersedes` forbidden (undrawable ⑨) |
| **NC-4** | a proposed-but-unaccepted resource | **`conforms_to` it must FAIL** | **FAILS AS REQUIRED** | `conforms_to` precondition: target `authority_level ∉ {analysis_nonbinding, evidence_only, unstated}` **and** `lifecycle_state = ratified_active`. `D0-REV-010` fails both (undrawable ⑥) |
| **NC-5** | a carrier whose document category legitimately differs from its architecture role | **must be representable** | **PASS ×2** | ① `contracts/rbac_authority_contract.md`: `carrier_governance_class` ≈ `domain_rule_slice` while `primary_kind = domain_contract`. ② this carrier: `handoff_or_readiness_gate` carrying `proposal`-kind resources. **Because classification lives on the carrier and kind on the resource, divergence is normal rather than a defect** |
| **NC-6** | an invalid relationship that must fail | **must FAIL** | **FAILS AS REQUIRED ×2** | ① `analysis_nonbinding` resource `supersedes` a `governance_binding` one — blocked by the authority precondition (undrawable ⑤); this is the exact shape of `B-1`'s original defect. ② a `P4` projection `owns` truth — blocked by `home_plane ∈ {P4,P5}` (undrawable ④; `D0THES-DEC-033`, `T0-15`) |
| **NC-7** | raw external-source ingestion auto-promoting into binding OMNI architecture | **must FAIL** | **FAILS AS REQUIRED** | any increase in `authority_level` requires a `promoted_by → decision` edge (undrawable ⑦). An `EVSRC` at `evidence_only` cannot reach `governance_binding` by being edited — `D0THES-GRD-036` expressed as a graph precondition rather than a warning |
| **NC-8** | an operator preference silently loosening a universal prohibition or an applicable higher-order obligation | **must FAIL** | **FAILS AS REQUIRED — with an UNRESOLVED residue, stated** | *Structurally:* an `operating_profile`/`deployment_profile` may not carry `scope = universal`, and `specializes` may not relax an inherited prohibition; the only representable path is an `architecture_change_proposal` (undrawable ⑧). *Semantically:* **detecting** that a permitted value relaxes a prose prohibition requires a machine-readable rule body, which `AMM-C1` does not provide and Output 1 may not supply. **`UNRESOLVED` → outputs 3 (non-loosening semantics) and 6 (forbidden-loosening as a machine check).** Recorded rather than papered over: the control fails closed **by type**, and the estate cannot yet check it **by content** |
| **NC-9** | a deployment-profile value masquerading as a global architecture amendment | **must FAIL** | **FAILS AS REQUIRED** | `scope` precondition: a `deployment_scoped` resource may neither write nor specialize-with-relaxation a `universal` resource; the escalation path is an `architecture_change_proposal`, not a wider profile value (undrawable ⑧) |

**Three controls required representability and passed; six required failure and failed. One carries an explicit unresolved sub-residue.** No control was rescued, and NC-8's semantic half is reported as a limitation of Output 1's scope rather than as a pass.

---

## §E6.9 — Findings

**`G1-FIND-11` — the `plane` axis is real, closed, and was mis-diagnosed in both directions.** `D0THES-DEC-033` settles seven planes plus Evidence (`P0` Doctrine · `P1` Truth · `P2` Seam · `P3` Capability · `P4` Projection · `P5` Surface · `P6` Build), with Actions/Commands and Evals as **conscious folds, not planes**. The probe reported that `plane` *"had to take a set — `[seam, capability, projection]`"*; those are **literally three plane names** (P2 · P3 · P4), so the probe's observation was sounder than its withdrawal allowed, **and** `§E6.1` defect 3's parenthetical *"those look like functions or concerns, not planes"* is **falsified by direct inspection.** Defect 3's *conclusion* stands unchanged and was correct as reasoning: a mismatch against an axis whose controlling source was never opened is not evidence. **The real defect is neither multi-valuedness nor mis-naming — it is that one field was being asked to answer two questions**, where a resource *resides* and what it *constrains*. → `A-1`.

**`G1-FIND-12` — the governance-taxonomy drift is universal, measured, and not G1's to resolve.** Seventeen-plus live carriers declare a `Document type:` outside the ten fixed categories: **15 of 15** files in `contracts/` declare `domain_contract`; the System Map declares `system_map`; the Surface Map declares `architecture_map`. At least one Tier-0 boot-visible carrier declares **no passport at all** (case 8). `§E6.2` finding 3 asserted this drift; it is now counted. **G1 can make it representable (`A-3`); only the taxonomy owner can ratify, amend or supersede the category set.** → `A-3` + `architecture_steward` decision.

**`G1-FIND-13` — a boot-visible reusable pattern exists and is ungoverned.** `§E6.2` item 5's *"patterns … have no instances"* is **corrected**: `coherent_omni_architecture_pattern_2026-05-17.md` is read-graph Tier-0 #14 and instructs every future pillar to start from its shape. It has no passport, therefore `authority_level = unstated` (provisional per `D0-GRD-003`), no owner seat, no version, and no protected writer. **`estate_validation = FAIL` on the one case where the estate had the instance and lost the governance.** Not repaired here; writing a passport onto a Tier-0 doctrine file is not this seat's act. → `architecture_steward`.

**`G1-FIND-14` — OMNI's non-document resources are governance-invisible.** The conformance suite (case 10) and the authority-enforcement implementation (case 11) are both real and load-bearing, and both fail `estate_validation` for the same reasons: no descriptor, no declared authority or lifecycle, no recorded owner seat, no protected writer. Verified specifics: `.github/CODEOWNERS` protects `lib/safety/`, `lib/labs/*`, `.cursor/plans/audits|designs|ingestion/` and **the demoted legacy system map**, while leaving `lib/auth/`, `scripts/`, `.cursor/plans/contracts/`, `.cursor/plans/doctrine/`, the vNext System Map and the Surface Map unprotected; `package.json` exposes only `dev`/`build`/`start`/`lint`/`typecheck`; `.github/workflows/` holds exactly one workflow. **`§E6.2` finding 4 said non-document resources *"need first-class representation or first-class relations."* They have neither, and the gap is governance, not schema** — `AMM-C1` represents them without amendment. → `architecture_steward` + `repository_administration`, at G2.

**`G1-FIND-15` — naming state is an independent axis, proven by a live instance.** `EVRUN-2026-000008_04` records `OMNI Reactor` as `analysis_closed · adjudicated_nonbinding · naming gate OPEN`, and its conformance fixture is *required* to keep the name out of every identifier. **A resource can be evidentially closed and still have an open name.** Neither `lifecycle_state` nor `decision_state` can hold that, and the case supplies live proof for R8 §3.1's `resource_id`-survives-renames requirement: identity here **cannot** be name-based. → `A-2`.

**`G1-FIND-16` — one `version` field cannot serve OMNI-authored resources and external sources.** Found by hitting it while consulting 42010 (`:2011` primary text vs the current `:2022` edition — same definitions, different clause numbers). R8 §3.1's semantic-version rule is right for OMNI-authored resources and wrong for a publisher's edition, which OMNI may pin but never rewrite. An applicability claim that cannot pin an edition cannot survive a source change — the exact failure mode `§G1-CONTRACT.c` row 4 routes to Output 4. → `A-4`.

**`G1-FIND-17` — the fixture's own case list contained a cluster, and that manufactured the probe's worst apparent failure.** Case 2 (GCE) is **five** logical resources — a ratified spine pattern, two ratified guardrails, one decision, and one `declared_but_unauthored` boundary contract. Testing a cluster as a resource produces *"needs three roles at once,"* which is what the probe reported. **Fixture-protocol amendment `P-1`, distinct from the four metamodel amendments.** → recorded in this pass; no other file changed.

**`G1-FIND-18` — 42010's transferable content is bounded, and OMNI needs more than it supplies.** Taken as **mechanism only**: `architecture` (3.2) ≠ `architecture description` (3.3) · `concern` (3.7) ⟂ `architecture viewpoint` (3.6) ⟂ `architecture view` (3.5) ⟂ architecture model ⟂ `model kind` (3.9) · a model may be part of more than one view · `correspondence` and `correspondence rule` (4.2.6) as the mechanism for composition, refinement, consistency, traceability, dependency, constraint and obligation. That is **four of the thirteen required distinctions** — items 1, 2, 10 and part of 9. **42010 is silent on authority level, lifecycle and decision state, applicability, profile targeting, variation points and non-loosening** — the axes OMNI most needs — and its correspondences relate **AD elements to AD elements**, so OMNI's description→implementation relations (`implemented_by` · `verified_by`) are an OMNI extension, not an inherited mechanism. **No conformance is owed and none is claimed; no standards programme is opened; the maps are not asserted to be 42010 views** (case 6). → `comparator_analogy_registry.md` rows **proposed** under `G1-FIND-08`; nothing landed.

---

## §E6.10 — Bounded amendments and the rerun

**Four metamodel amendments and one fixture-protocol amendment. Each names the rows that forced it — none was applied because it read well.**

| # | Amendment | Forced by | Change |
|---|---|---|---|
| **`A-1`** | plane residence ⟂ plane constraint | cases 1 · 2 · 7 | `plane` (1 field) → `home_plane` (0..1) ⟂ `constrains_planes[]` (0..n). Values unchanged — the `D0THES-DEC-033` set is not extended |
| **`A-2`** | naming state as an independent axis | case 1 (target) · case 10 (verifier) | add `naming_state` ∈ {`named_accepted`, `named_provisional`, `naming_gate_open`, `name_prohibited_in_implementation`} |
| **`A-3`** | carrier classification must carry a ratification state | cases 3 · 6 · 8 | `carrier_governance_class` enum → `{declared_value: <string \| absent>, in_fixed_set: bool, ratification_state: ratified \| declared_unratified \| absent}`. **The ten fixed categories are not amended — this records what a carrier declares and whether that value is approved** |
| **`A-4`** | version namespace split | Case A | `version` → `omni_version` (semver, OMNI-authored only) ⟂ `source_edition` (publisher's, opaque, never OMNI-rewritten) |
| **`P-1`** | *(fixture protocol, not the metamodel)* decompose before testing | case 2 | a case naming a cluster must be decomposed to single logical resources; component results recorded; the case's `estate_validation` is the dominant component result |

**Rerun, affected rows only.** Cases 1, 2, 3, 7 and 8 and Case A were rerun against `AMM-C1 + A-1..A-4`; cases 4, 5, 6, 9, 10, 11, 12, Case B and all nine negative controls were unaffected and were not re-derived.

| Rerun row | pre | post | What changed |
|---|---|---|---|
| 1 · Reactor | FAIL | **PASS** | `home_plane = Evidence` · `constrains_planes = [P1, P2, P3]` · `naming_state = naming_gate_open` |
| 2 · GCE | FAIL | **PASS** | decomposed to five resources (`P-1`); each takes a single `home_plane`; `constrains_planes` carries the spread |
| 3 · domain contract | FAIL | **PASS** | `{declared_value: domain_contract, in_fixed_set: false, ratification_state: declared_unratified}` |
| 7 · cross-cutting standard | FAIL | **PASS** | `home_plane = P0` · `constrains_planes = [P0, P1, P2, P3, P6]` |
| 8 · reusable pattern | FAIL | **PASS** | `{declared_value: absent, in_fixed_set: false, ratification_state: absent}` + `authority_level = unstated` |
| Case A · one source, five forces | FAIL | **PASS** | `source_edition: "ISO/IEC/IEEE 42010:2022"`; `omni_version` forbidden on the source |

**No `estate_validation` value changed in the rerun, and none could have.** The amendments alter what the model can express; they cannot conjure an instance, an owner or a passport. **Any pass in which an amendment improved an `estate_validation` result would be reporting a schema change as an estate change** — the exact laundering `§E6.3`'s two dimensions exist to prevent.

---

## §E6.11 — Output-1 result · aggregates · `AB-08` disposition

### §E6.11.1 — Aggregates, hand-recomputed from the rows above

**`F-06` compliance: every total below is derived by counting the rows at `§E6.6`–`§E6.8`, and the arithmetic is shown so a reviewer can falsify it without rebuilding the fixture.** No total is asserted that the rows do not carry.

**`representability` — 14 cases** (12 fixture cases + Case A + Case B):
- pre-amendment **FAIL = 6** — cases 1, 2, 3, 7, 8 and Case A
- pre-amendment **PASS = 8** — cases 4, 5, 6, 9, 10, 11, 12 and Case B
- `6 + 8 = 14` ✔
- post-amendment **PASS = 14 · FAIL = 0** — six rerun rows moved FAIL→PASS at `§E6.10`; `8 + 6 = 14` ✔

**`estate_validation` — the same 14 cases:**
- **PASS = 4** — cases 1, 3, 7, 12
- **FAIL = 3** — cases 8, 10, 11
- **NOT_INSTANTIATED = 7** — cases 2, 4, 5, 6, 9 and Cases A and B
- `4 + 3 + 7 = 14` ✔

**Negative controls — 9:** required-representable **3** (NC-1, NC-2, NC-5) all PASS · required-to-fail **6** (NC-3, NC-4, NC-6, NC-7, NC-8, NC-9) all FAIL AS REQUIRED · `3 + 6 = 9` ✔ · one (`NC-8`) carries an explicit `UNRESOLVED` sub-residue routed to outputs 3 and 6.

**Amendments: 4 metamodel (`A-1`…`A-4`) + 1 fixture-protocol (`P-1`) = 5**, each traced to named rows.

**Findings: 8** — `G1-FIND-11` … `G1-FIND-18`, each with an owner or a destination at `§7.3`.

### §E6.11.2 — What the two dimensions say, kept apart

> **`representability = 14/14 PASS` after four bounded amendments.** The metamodel can express every required resource, carrier, authority, lifecycle, scope, relation and prohibition in the fixture, and can refuse every one of the nine negative controls.
>
> **`estate_validation = 4 PASS · 3 FAIL · 7 NOT_INSTANTIATED`.** **That is the honest result, and it is not a pass.** Seven of fourteen kinds have no instance at all; three exist and are ungoverned; four are properly instantiated.
>
> **A synthetic exemplar proved representability for four cases (`FX-OP-01`, `FX-DP-01`, `FX-SNAP-01`, and Case A/B's claim and variation objects). It proved nothing about necessity, rightful ownership, scoping, maturity or operational validity — and it is reported as itself, not folded into a total.**

**Three specific things the estate dimension found that no amount of modelling fixes:** OMNI's stated exchange capstone has a ratified pattern and **no boundary contract** (case 2) · a **boot-visible reusable pattern** every future pillar inherits from has no authority, owner or passport (case 8) · the **authority-enforcement code and its conformance suite** have no owner, no descriptor and no runner (cases 10, 11).

### §E6.11.3 — `AB-08` · **PROPOSED** disposition

| Field | Value |
|---|---|
| Row | `AB-08` — artifact taxonomy granularity: 17 classes (B) vs 5 tiers (A) |
| Ledger semantics | `open` · owner **`architecture_steward`** · trigger = G1 artifact-metamodel authoring · **decided at G1** · **blocks G1 close** |
| Closure condition on record | *"the 12-artifact fixture set passes"* (`§E-note B`, `G-08`) |
| **Fixture state** | **RUN.** 12 cases + 2 representability cases + 9 negative controls, `§E6.6`–`§E6.8` |
| **Proposed disposition** | **`PROPOSED_CLOSURE_ON_REPRESENTABILITY` — the granularity question is answered; the estate question is not.** The substantive answer: **`AB-08` is malformed as a single class count.** A · B compared two different axes — the **10** governance categories classify *carriers*, the **13** Artifact Index roles assign *homes and prohibitions*, and `primary_kind` (**17** values exercised here, plus 2 carried and untested) types *resources*. None is a refinement of another, and **finer granularity is a relation (`part_of`), not a longer list** — which is why Reactor's eight invariants and `06`'s **115** guardrail rows require **zero** additional classes. **Adopt neither submission's number.** |
| **Not claimed** | **Not accepted, not closed.** This carrier is `analysis_nonbinding` under `proposal_authoring`; the ledger transition belongs to the accepting transaction, and `AB-08` is owned by the `architecture_steward` |
| **The fork the steward decides** | If `AB-08`'s closure condition is read as the **representability** question it names, the fixture supports closure: 14/14 representable, 9/9 controls correct, four bounded amendments recorded. If it is read as requiring **estate validation** too, `AB-08` **stays OPEN** pending `G1-FIND-13` and `G1-FIND-14`. **`AB-08` asks about taxonomy granularity, so the first reading is the better one — but that is the steward's call, not this seat's, and it is put as a fork rather than resolved by assertion.** |

### §E6.11.4 — `§G1-CONTRACT` Output-1 cell — what changed and what did not

**Output 1 is `COMPLETE_AS_PROPOSAL`**, on the same standard `§G1-CONTRACT.b` already applies to `§E2` and `§E3`: sources read, decision made or explicitly named open with an owner, evidence in `§E`. The five sub-decisions deliberately **left open with owners** are the taxonomy-drift resolution (`G1-FIND-12` → steward), the pattern's passport and authority (`G1-FIND-13` → steward), non-document governance (`G1-FIND-14` → steward + repository administration, G2), `interface_contract` vs the existing Seam/Event Contract role (→ steward), and `controlled_vocabulary`, carried from `§E-note B` and **not exercised by this fixture**.

**What Output 1 did NOT do, by instruction:** no precedence, conflict-resolution, applicability-evaluation, profile-composition, source-change-propagation, effective-resolution, conformance-proof or regulatory-adjudication semantics — outputs 3–7 (`§G1-CONTRACT.c`). **Output 2 is not started.**

**Two owed surfaces are outside this pass's writable scope and are declared rather than silently skipped.** The `§G1-CONTRACT` **global completion rule** requires that no output be complete while its model section, provenance table, blocker table, STOP receipt, **catalog entry and route entry** disagree. The catalog row and read-graph route `9v-ii` still describe this carrier at its pre-Output-1 state (`proposed · not_accepted`, `consult_if_routed`), which remains **accurate as to authority and lifecycle** and stale as to content. **Repointing them belongs to the accepting transaction; this pass was authorized to modify this carrier only.** Recorded so the next agent does not read the omission as a passing check.

---

## §E6.12 — Source posture for this pass *(Output 1)*

**Read fully:** this carrier (all 776 lines of R3, once, in the order `§G1-CONTRACT` → `.b` → `.c` → `§E-note B` → `§E6.1`–`§E6.3` → whole) · the checkpoint · read-graph route `9v` + `9v-ii` · PR #17's *"For the next agent"* section · **`OMNI_System_Map_vNext.md`** (124 lines — closes `§E6.1` defect 3) · **`OMNI_Surface_Map_vNext.md`** (144 lines — the `D0THES-DEC-033` plane taxonomy) · `doctrine/00_architecture_artifact_index.md` · `doctrine/00_document_governance_and_taxonomy_2026-05-19.md`.
**Consulted deeply, to controlling sections:** R8 `§3.1` (the three objects, verbatim) + R8 `§5 G1` + the gate-output transaction contract + `§G1-AUTH` + `§3.9` · PRE-0 ledger row `AB-08` and its `blocking_scope` · `doctrine/omni_enterprise_posture_2026-06-03.md` §GCE + the nine guardrails · `06_guardrail_antipattern_digest.md` row schema + `D0THES-GRD-033`/`-034`/`-036`/`-039` · `08_open_review_queue.md` row schema + `D0-REV-010` · `coherent_omni_architecture_pattern_2026-05-17.md` §1 · `EVRUN-2026-000008_04` terminus · `contracts/rbac_authority_contract.md` passport · `scripts/test-consequential-transition-conformance.ts` header · **ISO/IEC/IEEE 42010 primary text** — definitions 3.1–3.10 and clauses 4.2.2–4.2.7 (`:2011` preview text) plus the `:2022` scope statement and the official conceptual-model and AD-requirements pages. **Mechanism probe only: not adopted, no conformance claimed, no standards programme opened.**
**Located / searched (result recorded, not read through):** `Document type:` declarations across all 15 files in `contracts/` · repository-wide search for `DO NOT EDIT` · `@generated` · `autogenerated` markers (**zero** hits) · `.github/CODEOWNERS` (read in full — 3,695 bytes) · `package.json` scripts · `.github/workflows/` (one file) · `ingestion/regulatory_compliance_evidence/` (one file, `_lane.md`) · `Governed Capability Exchange` occurrences estate-wide.
**Not inspected — declared, not discharged:** C3.8 G1b/G3 · Lane-1 primary sources other than 42010 (SEI · FHIR · IHE · AUTOSAR · AWS lenses · Palantir · Backstage · IBM · LangGraph · OPA · OpenRewrite · Argo CD · OpenTelemetry) · Polaris · Platform + Accountability captures · C4.6 · the federation-permeability arc · the six AI-corpus registries · the founding-thread verbatims · the raw PRE-0 submissions · Insurance and Care history · old PR #17 revisions. **`B-8` is unchanged by this pass** — the narrow prerequisite floor for `AB-08` was read; the source floor was not.
**Live-repository verification:** branch `cursor/fai-g1-operating-model-4933` at `a3569376` on entry — **identical to the last independently verified head**, no advance to reconcile. Boot Freshness Check **PASS**: `AGENTS.md` checkpoint-pointer and read-graph Tier-0 #15 both name `HANDOFF_2026-08-10_foundational_architecture_g1_startable.md`, and the checkpoint's `§1` gate banner agrees (`g0_accepted · g1_startable`). Every estate fact asserted at `§E6.6`–`§E6.9` was read from the working tree at that head.

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
| ~~**B-3**~~ | **`AB-08` fixture RUN 2026-08-12 (`§E6.6`–`§E6.11`)** — *the row stays on the G1 table because running a fixture is not disposing a ledger row.* **What remains is not the fixture: it is the steward's disposition of the `§E6.11.3` fork, and — on the stricter reading of `AB-08`'s closure condition — the two estate defects `G1-FIND-13` and `G1-FIND-14`.** No new blocker minted | **ledger `blocking_scope` = blocks G1**; owner `architecture_steward` |
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

`G-02` seat transfer/suspension → G2 · `G-03` **split** into §E4 problems A and B → `AB-29` · `G-04` adversarial viewpoint → G2 · `G-05` **superseded** by `B-8` · ~~`G-06`~~ **CLOSED** (Tier-0 #14) · `G-07` `C4.4 §R` owner · ~~`G-08`~~ **`AB-08` fixture RUN 2026-08-12** (`§E6.6`–`§E6.11`; disposition `PROPOSED`, not accepted — the gap *"the fixture has never been run"* is closed, the steward's disposition is not) · `G-09` attestation withdrawal · `G-10` seat model untested · `G-11` no substrate translation · `G-12` how many authority contexts; dual-context principals · **`G-13` (new)** third-party effects outside OMNI · **`G-14` (new)** Build Entry Gate `11` frozen against a stale foundation · **`G-15`** `02_authority_routing_map.md` is a Phase-0 skeleton carrying binding routing authority · **`G-19` (new)** **no authoritative applicability-and-traceability mechanism was located** for resolving external obligations, operator policies, contractual requirements, adopted standards and informative comparators into effective OMNI architecture; **existing regulatory content across the estate remains unassessed.** **Split by scope, and *"non-blocking for G1"* is withdrawn as imprecise:** the **cross-cutting semantics ARE part of G1** — carried by `§G1-CONTRACT.c` and closing through the existing Output 1–7 acceptance conditions, already inside `B-3` and `B-15`, so **no new blocker is minted**; the **population and operation of the regulatory programme** (full corpus · product-specific SaMD determinations · certifications · per-jurisdiction adjudication) is **later or parallel work and does not block Output 1** → steward + operator (`G1-FIND-10`). *(An earlier wording claimed the named standards were "all absent" and used a binding/borrowable binary — both withdrawn.)* · **`G-16` (new)** Care's U/C/A crosswalk is a frozen nonbinding candidate; generalizing it past Care is unratified cross-scope synthesis → G3 Care reconciliation · **`G-17` (new)** the five-axis authority decomposition is a proposal requiring reconciliation against Care's own composition-field list → G3 · **`G-18` (new)** GCE is the established home but the build-facing boundary contract does not exist (thesis §C paused) → §C authoring / G3.

*(`G-16`…`G-18` were minted in the body of the previous pass and never reached this register — the finding-evaporation defect this register exists to prevent. Recorded as a live instance under `F-04`.)*

### §7.3 — Findings routed

`G1-FIND-01` R8/R9 stale and contradicted by their own catalog rows; checkpoint §4 diverges from the ledger's `blocking_scope` · `G1-FIND-02` `rbac_authority_contract.md` §5 carries two different four-member lists · `G1-FIND-03` the most precise composition statement sits at the lowest maturity · `G1-FIND-04` G0 receipt normalization **proposed** · `G1-FIND-05` plan §1's *"nothing exists"* and R1's *"nothing is net-new"* are equal and opposite · `G1-FIND-06` operations mechanisms assume elastic review capacity · `G1-FIND-07` **C3.8's ratified posture and translation map were never connected to the authority model** though it was catalogued, routed and named in two required lists · **`G1-FIND-08` (new)** comparators used here need `comparator_analogy_registry.md` rows per Build OS `10`'s never-re-scatter rule · **`G1-FIND-09` (new)** **Build OS `09` already states *"build-agent authority never becomes product authority"*, and Care §19 already carries the U/C/A propagation crosswalk — this gate re-derived both as "three planes."**

**`G1-FIND-11` … `G1-FIND-18` (new, R4 — from running the `AB-08` fixture; each stated in full at `§E6.9` and summarized here so the register stays the index it exists to be).** `G1-FIND-11` the `plane` axis is real and closed (`D0THES-DEC-033`, seven planes + Evidence) and was mis-diagnosed in both directions — one field was answering *resides* and *constrains* → `A-1` · `G1-FIND-12` the governance-taxonomy drift is **universal and measured** (15/15 domain contracts declare `domain_contract`; System Map `system_map`; Surface Map `architecture_map`; one Tier-0 carrier has no passport) — representable via `A-3`, **ratification is the taxonomy owner's** → `architecture_steward` · `G1-FIND-13` a **boot-visible reusable pattern exists and is ungoverned** (`coherent_omni_architecture_pattern_2026-05-17.md`, read-graph Tier-0 #14; no passport, no authority, no owner) — corrects `§E6.2` item 5 → `architecture_steward` · `G1-FIND-14` **OMNI's non-document resources are governance-invisible** (`lib/auth/` and `scripts/` absent from `CODEOWNERS` while `lib/safety/` and the *demoted legacy* map are protected; one CI workflow estate-wide; the conformance suite runnable by nothing) → `architecture_steward` + `repository_administration`, G2 · `G1-FIND-15` **naming state is an axis independent of acceptance**, proven live (Reactor `analysis_closed` + `naming gate OPEN`, and its verifier forbidden to name it) → `A-2` · `G1-FIND-16` one `version` field cannot serve OMNI-authored resources and external editions (found by consulting 42010 `:2011` against the current `:2022`) → `A-4` · `G1-FIND-17` the fixture's own case list contained a **cluster** (GCE = five resources), which manufactured the probe's *"needs three roles at once"* → fixture-protocol amendment `P-1` · `G1-FIND-18` **42010's transferable content is bounded to four of the thirteen required distinctions** and is silent on authority, applicability, profile targeting, variation and non-loosening; its correspondences relate AD elements to AD elements, so OMNI's description→implementation relations are an OMNI extension. **Mechanism probe only — no conformance owed, none claimed, no standards programme opened** → registry rows **proposed** under `G1-FIND-08`.

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

**★ R4 — the representation half is now tested, and only that half.** Case A (one source, five contextual forces, no duplication) and Case B (the Henry Ford operator variation) ran at `§E6.7`. **Both are representable** — Case A only after amendment `A-4` split `omni_version` from `source_edition`, a failure found by hitting it live on 42010's two editions. **Both are `estate_validation = NOT_INSTANTIATED`:** zero `applicability_claim` instances and zero `variation_point` instances exist estate-wide (`ingestion/regulatory_compliance_evidence/` still contains only `_lane.md`). Negative controls `NC-7` (auto-promotion), `NC-8` (operator preference loosening a universal prohibition) and `NC-9` (deployment value as global amendment) all **fail closed by type** — and `NC-8`'s **semantic** check is explicitly `UNRESOLVED` and routed to outputs 3 and 6, because detecting that a permitted value relaxes a *prose* prohibition needs a machine-readable rule body Output 1 does not supply. **The capability gap `G-19` names is unchanged: representable is not implemented, and no lane, registry or FWREG transaction exists.**

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
| Artifact | FAI **G1 operating-model carrier R4** · seat `proposal_authoring` · state **`proposed`** · **`B-1` CLOSED 2026-08-11** |
| R3 → R4 | **Output 1 executed and nothing else.** `AMM-C1` defined (`§E6.5`) · the twelve-case fixture run (`§E6.6`) · the two `G1-FIND-10` representability cases run (`§E6.7`) · nine negative controls run (`§E6.8`) · eight findings (`§E6.9`) · four bounded amendments + one fixture-protocol amendment + the rerun (`§E6.10`) · aggregates and the `AB-08` disposition (`§E6.11`) · source posture (`§E6.12`). **Three R3 claims corrected in place by direct inspection:** `§E6.1` defect 3's `plane` guess · `§E6.2` item 5 on patterns · `§E-note B`'s single `viewpoint_or_view` axis. **Output 2 not started; no clean acceptance carrier authored; no other file touched** |
| R2 → R3 | evidence restored (§E) · Build OS read · "three planes" withdrawn · four external correspondences downgraded · third-party rule corrected · blockers sorted by gate · G4 fixtures added |
| Required G1 evidence | **§E1** 40-row semantic receipt · **§E2** nine tool dispositions · **§E3** ten-row frontier matrix · **§E4/E4b** five traces + eleven scenarios · **§E6.5–§E6.12** the Output-1 metamodel, fixture matrix, negative controls, amendments and rerun. **Fenced against compression** |
| Exploratory, NOT a result | **§E6–§E6.4** the R3 `AB-08` classification probe — **invalid as a fixture**; conclusions withdrawn; retained as evidence of what was examined. **Superseded as the Output-1 answer by `§E6.5`–`§E6.12`, which is the run of the `§E6.3` specification** |
| **Output 1 — the only output advanced** | **`COMPLETE_AS_PROPOSAL`.** `representability` **14/14 PASS** (first run 6 FAIL → four *general* amendments → rerun, **zero per-case exceptions**) · negative controls **9/9 behave as required**, one carrying an explicit `UNRESOLVED` semantic residue (`NC-8` → outputs 3 + 6) · **`estate_validation` 4 PASS · 3 FAIL · 7 NOT_INSTANTIATED — reported as itself and NOT a pass.** Every aggregate hand-recomputed from its rows with the arithmetic shown (`F-06`) |
| **The two dimensions, not collapsed** | Four cases were carried by `FIXTURE_ONLY` synthetics. **They prove representability and nothing else** — not necessity, not rightful ownership, not scoping, not maturity, not operational validity. The three estate FAILs (`G1-FIND-13`, `G1-FIND-14`) and seven uninstantiated kinds are **governance gaps that no schema change can close**, and no amendment moved an `estate_validation` value |
| Process failure — **historical** | the `§E6` probe was **substantive metamodel design performed while `B-1` was still open.** Preserved as evidence; **not compliant G1 execution**, and `B-1`'s later closure does not convert it into one (`§E6.4`) |
| Routed forward, NOT a G1 output | **§E5** ten G4 adversarial fixtures — a G4 proof plan carried under G4's existing tests |
| Ledger | 40 rows verdicted. **ZERO closed.** `AB-08` carries a **`PROPOSED_CLOSURE_ON_REPRESENTABILITY` disposition** supported by the fixture (`§E6.11.3`) — **proposed, not accepted**; the transition belongs to the accepting transaction and the row is the `architecture_steward`'s |
| Operator questions | **Q1** — the rule already existed in Build OS `09`; Care §19's U/C/A supplies the mechanism **as a frozen nonbinding candidate**, and applying it past Care is **this gate's synthesis** (`G-16`). The build-down/care-external binary is **withdrawn**; the rule is **per-act origin resolution**, and authority-origin direction is a **candidate descriptor field, not a profile axis**. **Q2** — internal-model equivalence not required, **boundary conformance mandatory**; GCE is the **home**, but the contract content **does not exist** (thesis §C paused), so the ten obligations are **new synthesis** (`G-18`) |
| Boot | **RESOLVED** — normalized on the base and verified there, 2026-08-11 (§0.2) |
| Minted | **nothing.** No route, gate, checkpoint, handoff, registry, lane, FWREG row, guardrail or artifact. `AMM-C1`'s field and value names are **fixture vocabulary under test**, not installed schema — installation is G2's transaction against R8 §3.1 |
| 42010 | **mechanism probe only.** Four distinctions taken (`§E6.9` `G1-FIND-18`); **not adopted, no conformance owed or claimed, no standards programme opened**, and neither map is asserted to be a 42010 view |
| Verdict | **`NOT_CONVERGED__OUTPUT_1_COMPLETE_AS_PROPOSAL__OUTPUTS_2_TO_7_AND_SOURCE_FLOOR_INCOMPLETE`** *(the R3 label is superseded only as to Output 1; the source floor and model boundaries remain incomplete exactly as R3 stated)* |
| G1 blockers | **still four, and still NOT peers.** **B-3** now reads *fixture RUN; awaiting the steward's disposition of the `§E6.11.3` fork* — **running a fixture is not disposing a ledger row**, and on the stricter reading of `AB-08`'s closure condition it also awaits `G1-FIND-13`/`-14` · **B-8** source floor incl. unread **Lane-2** carriers — **unchanged**; the narrow `AB-08` floor was read, the floor was not · **B-13** `AB-01` generalized form + C4.4 owner acceptance — **unchanged** · **B-15** = *outputs 2–7*, i.e. **the rest of G1**. *(B-2 → open item with owner; B-6 → G2/G4)* |
| Owed and NOT done — declared | the **catalog row** and read-graph **route `9v-ii`** still describe this carrier at its pre-Output-1 content state. Both remain accurate as to authority and lifecycle (`analysis_nonbinding · proposed · not_accepted`) and stale as to content. **Repointing them belongs to the accepting transaction; this pass was authorized to modify this carrier only** — recorded so the `§G1-CONTRACT` global completion rule is not read as passing (`§E6.11.4`) |
| Next | **Stop for Nick + Knox.** Then, in order: ① the steward disposes `AB-08` at the `§E6.11.3` fork and accepts, amends or rejects `AMM-C1`; ② **Output 2 — the architecture-operations loop as a transaction with actors, gates and artifacts** — begins only after that, and it inherits `AMM-C1`'s resource/carrier/descriptor split as its object model; ③ outputs 3–7 inherit the obligations Output 1 was forbidden to settle (precedence · conflict · non-loosening semantics · applicability evaluation · profile composition · source-change propagation · effective resolution · conformance proof) plus `NC-8`'s unresolved semantic check. **`G1-FIND-13` and `G1-FIND-14` are repairs to files this seat may not write; they belong to the steward and to G2, not to Output 2.** **A clean acceptance carrier is assembled after the cells close** — earlier it is another revision by another name |

## §9 — Handoff

**No separate `HANDOFF_*` file** — a third current-state description beside the checkpoint §1 and §8 is the maintained-duplicate failure that reopened `C-11`/`C-12`.

**Changed in R4:** **this carrier only.** No catalog row, no read-graph edit, no checkpoint, no R8/R9, no ledger, no comparator registry, no FWREG, no evidence lane, no System or Surface Map, no Care, no domain contract, no new artifact, no new branch or PR. The catalog and route omissions are **declared** at `§8` and `§E6.11.4`, not silent.
*(R3 changed: this carrier · catalog row · read-graph `9v-ii`.)*

**Verified in R4, against the live working tree at the head this pass commits:** Boot Freshness Check **PASS** (`AGENTS.md` pointer = read-graph Tier-0 #15 = `HANDOFF_2026-08-10_foundational_architecture_g1_startable.md`, and the checkpoint's §1 banner agrees) · branch head on entry `a3569376`, **identical to the last independently verified head — no advance to reconcile** · System Map and Surface Map read in full, `D0THES-DEC-033`'s seven-plane taxonomy confirmed and `§E6.1` defect 3's parenthetical falsified · `coherent_omni_architecture_pattern_2026-05-17.md` confirmed a **real** pattern at read-graph Tier-0 #14 **with no passport** · **15 of 15** files in `contracts/` declare `Document type: domain_contract`, a value absent from the ten fixed categories · `06`'s carrier declares `Status: Skeleton (Phase 0)` while hosting `severity: critical` guardrails · repository-wide search for `DO NOT EDIT` · `@generated` · `autogenerated` returns **zero** artifacts · `.github/CODEOWNERS` read in full — `lib/auth/`, `scripts/`, `contracts/`, `doctrine/` and both vNext maps **unprotected**, while `lib/safety/` and the *demoted legacy* map are protected · `package.json` exposes only `dev`/`build`/`start`/`lint`/`typecheck` · `.github/workflows/` holds exactly one workflow · `ingestion/regulatory_compliance_evidence/` holds exactly one file.
*(R3 verified: `check-checkpoint-pointer.mjs` pass · R2's evidence deletion confirmed by search (`AB-02`, `AB-04`, `AB-07`, `AB-14`, `INV-03`, `INV-18`, `INV-26`, JSON Schema, CODEOWNERS, Backstage, OpenRewrite all absent from R2 while their totals remained) · R8/R9 staleness confirmed · Build OS `09`/`10` read, `11` status read · `02_authority_routing_map.md` confirmed `Skeleton (Phase 0)`.)*

**Load order:** `AGENTS.md` → checkpoint → route `9v` (plan R8 → charter R9 → ledger R5) → `9v-ii` this carrier. Gate sequence **only** in plan §5; closure conditions **only** in the ledger's `blocking_scope`. **Inside this carrier, read `§G1-CONTRACT` → `.b` → `.c` first; for Output 1 read `§E6.5` before `§E6.6`, and read `§E6`–`§E6.4` as the superseded probe it is, not as the result.** **For external/enterprise correspondence, C3.8 G2/G4 is the required read. For build-side operating model, Build OS `09`/`10` — at the maturity they declare, not as settled truth.**

**Stop condition:** superseded when the steward and affected domain owners accept, amend or reject.

**STOP: `g1_working_dossier_R4 · B-1_CLOSED_2026-08-11 · evidence_restored_and_fenced · 40_rows_verdicted_zero_closed · OUTPUT_1_COMPLETE_AS_PROPOSAL · AB-08_PROPOSED_CLOSURE_ON_REPRESENTABILITY_NOT_ACCEPTED · representability_14_of_14_after_4_bounded_amendments · estate_validation_4_PASS_3_FAIL_7_NOT_INSTANTIATED · negative_controls_9_of_9 · G1_CONTRACT_1_of_8_outputs_complete_as_proposal · 4_G1_blockers · output_2_not_started · acceptance_carrier_not_yet_authored`**
