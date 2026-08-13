# v4 — FAI — G1 OPERATING-MODEL CARRIER (R8.5b · OUTPUT-1 ACCEPTANCE LANDED)

Document type: `handoff_or_readiness_gate` (gate-output carrier — the G1 deliverable named in execution plan §5)
Authority: `analysis_nonbinding` (`D0THES-GRD-036`). **Binds nothing. Mints nothing. Promotes nothing. Closes nothing.** Where this carrier and a controlling carrier differ, **the carrier controls and this file is corrected.**
Status: **`g1_carrier_R8.5b · state=proposed · B-1_CLEARED · OUTPUT_1_ACCEPTED_AS_G1_PROPOSAL__1_OF_8_COMPLETE · AB-08_CLOSED_adopted_narrowed · three_binding_carries_recorded · G1_INCOMPLETE`**
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: **working dossier for the G1 gate output — NOT yet an acceptance object.** It carries the model proposal, the required evidence (`§E`), and the completion matrix (`§G1-CONTRACT`) that says which R8-required outputs are still missing. **Read `§G1-CONTRACT` first: it is the only honest answer to "is G1 done."**
Source-of-truth relationship: **owns nothing.** Gate sequence → plan §5. Rationale → charter R9. Finding disposition → PRE-0 ledger R5. Program state → the checkpoint. Authority truth → §4's carriers. External/enterprise correspondence → **C3.8 G2/G4**. Build-side operating model → **Build OS `09`/`10`** *(at their declared maturity — §1.3)*.
Manifest action: `add_tier2` · Review gate: `user_knox_required`

> ## ★ POSTURE
> Authored under **`proposal_authoring`** — may research, propose, author, test; may **never** accept, approve or commit. **Proposal authorship has no acceptance power — it can close neither a ledger row nor G1.** `AB-08` was closed, and Output 1 accepted, by the separate acceptance transaction recorded at `§7.5`; **G1 itself remains incomplete.**
> **§E is the gate's required evidence and MUST NOT be compressed, summarized or replaced by totals in any future revision.** R2 deleted three required evidence tables while keeping their totals. See §0.1.
> **`B-1` is CLOSED (2026-08-11, §0.2).** Historical fact retained: everything in this carrier **up to that date** was produced under the then-unresolved boot violation — clearing it removes the blocker, it does not retroactively validate that work. **`§E6`–`§E6.4` in particular remains an exploratory probe and is NOT the Output-1 result.**
> **Output 1 passed through multiple candidate and independent-review rounds. `AMM-C4.1` was accepted as the G1 Output-1 proposal at proposal head `480f3bbb2a63d81dec4b091d3cd5871e3ddd4e83` and landed at `a21f95a0964d7a991c0291186cb395a6f2da0072`. Prior candidates remain evidence history. The carrier as a whole remains proposed; G1 remains incomplete; **★ Output 2 is authored and `PROPOSED · NOT_ACCEPTED` (`§E13`, R1 2026-08-13) — authored is not accepted;** Outputs 3–7 and `§G1-AUTH` remain open. The acceptance transaction — not proposal authorship — closed `AB-08`.** *(★ The manually maintained candidate/reviewer count is removed — it was stale three times over and was another propagation liability.)* R4 (`§E6.5`–`§E6.12`) ran the `§E6.3` fixture on `AMM-C1`; **review found three rules the candidate violated.** R5 (`§E7`) produced `AMM-C2`; **review found the same class of defect one level down — the axes were decomposed and the values inside them were not — plus an aggregation that mixed resources, clusters and scenarios in one denominator.** R6 (`§E8`) produces **`AMM-C3`**: every facet answers one question, relation assertions are intervalled so `as_of` is answerable at all, the evidence is split into **three tables with one unit each**, and **three holdouts were predeclared before running**. **R6 historical result, WITHDRAWN in R7 — not current:** T1 22/22 representable; `estate_validation` 3 `PASS` · 11 `FAIL` · 11 `NOT_INSTANTIATED` of 25 — **all three `PASS`es and the aggregate were withdrawn** (`§E9.0`), and **no replacement aggregate is published.** **R7 (`§E9`) produces `AMM-C4`** after the third review found a **factual error** in R6 — the `05` owner column I cited is in an `analysis_nonbinding` child table, not the canonical contract, because my search pattern sampled instead of enumerating. `AMM-C4` withdraws that finding and restates it stronger (**zero of four** canonical ledger contracts record an accountable owner), installs the **eight-relation resource-governance grammar**, and **terminates the assertion/descriptor recursion** R6 opened. **R8 (`§E10`) produces `AMM-C4.1`** — nine bounded corrections, three traces, and **the mandatory Lane-3 `M-106` check R8 §3.9.1 requires and this arc had never run.** **R8.1–R8.3 (`§E11`–`§E12`) then corrected R8's own overreach:** *“seven ownership concepts already routed”* became **one exact, four sharpens, one adjacent-and-conflated, one tension, one mixed** across eight rows; the four **`current_practice_only`** verdicts were **withdrawn as an overcorrection** and replaced by durable mechanism ⟂ current adapter ⟂ frontier residue; enforcement absolutism was withdrawn; and an **eight-function Output-1 Lane-3 checksum** (`§E12.8`) found **no material core change** while defeating the novelty of two more of my findings. **The round-by-round narrative above is historical. Current state is the opening of this posture, the `§7.5` acceptance receipt and `§G1-CONTRACT`.** The acceptance is bounded to Output 1's structural decomposition and to *proposal* status — it promotes no dossier to doctrine, installs nothing, and starts no later output (boundary at `§E12.7`).

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
| 1 | **artifact metamodel** | **`§E10` + `§E11` + `§E12` (`AMM-C4.1` core + closeout + micro-correction + acceptance boundary `§E12.7` + Output-1 Lane-3 checksum `§E12.8`) — the CURRENT ACCEPTED OUTPUT-1 PROPOSAL.** `§E6.5`–`§E6.12` (R4) · `§E7` (R5) · `§E8` (R6) · `§E9` (R7) = **evidence history, superseded** · spec `§E6.3` | Artifact Index ✔, governance taxonomy ✔, R8 §3.1 ✔ **+ §3.9.1/§3.9.2 ✔**, System Map ✔, Surface Map ✔, `03`/`05`/`06`/`08` schemas ✔ · **Lane 3: ownership-scoped `M-106` ✔ + Output-1 eight-function checksum ✔ (`§E12.8`, ten rows, no material core change) · full G1 capability-by-capability check PARTIAL (`B-8`) · NO raw source anchor reopened** · **Lane-1 probes, none adopted: 42010 ✔ SEI ✔ FHIR ✔ IHE ✔ AUTOSAR ✔ Backstage ✔ CODEOWNERS ✔ AWS ✔ Palantir ✔** | **`ACCEPTED_AS_G1_PROPOSAL · 1_OF_8_COMPLETE`** — accepted 2026-08-13. **Accepted proposal and landing → `§7.5`** · **post-acceptance normalization → `§7.5.1a`** · acceptance boundary `§E12.7` · **review and candidate history → `§E6`–`§E12`** · **Lane-3 `M-106` receipt → `§E11.B` / `§E12.8`** — none of it restated here. The four vendor mechanisms are recorded as **durable ⟂ adapter ⟂ residue**, not as a verdict. **R6's 3/11/11 aggregate and all three of its `PASS`es are WITHDRAWN** — a factual error (`§E9.0`) plus two verdicts resting on inference. Published instead: the **eight-relation resource-governance grammar** (`§E9.3`), the **meta-kernel termination rule** (`§E9.4`), four more value collapses repaired (`§E9.5`), and a **eight-case per-resource governance enumeration** (`§E9.6`) — **no replacement aggregate** | **`resource_steward` declared for ZERO of seven real resources**; of eight governance relations OMNI declares at most three for any resource, never the same three · placement predicate `[CAN→3]` · relation bitemporality `[CAN→3]` · prose non-loosening `[CAN→6]` · approval-policy content `[CAN→3]` · **carried to Outputs 3/5/6, NOT settled: operationalization vocabulary · `derogability` · risk-acceptance schema · `independence_assessment` · procedural⟂substantive conformance · edge authority-state · the no-hindsight-leak constraint on `as_of` resolution** (`§E12.7`–`§E12.8`) · the focused fixture is **weak evidence where I chose the cells and strong only where an estate fact filled them** · catalog = **synchronized at the current normalization head** | **MET 2026-08-13.** The diff-only review of the R8.5 corrections ran; `architecture_steward` + operator recorded acceptance of the structural core at an exact head. **`AB-08` is `adopted_narrowed` in the binding ledger — the receipt has landed** (`§E12.5`), and no further fixture is owed. Descriptor-schema installation remains **G2's** transaction against R8 §3.1 |
| 2 | **architecture-operations loop** | **`§E13` — the Output-2 proposal.** `§6.3`'s roots↔functions matrix is superseded as the answer and retained as provenance | System Map ✔ Surface Map ✔ Polaris ✔ GCE ✔ Build OS `09`/`10` ✔ Gate `11` ✔ AWP ✔ Agent Runtime ✔ RBAC ✔ `EVSRC-…-000188` reopened ✔ · **Lane 3: `M-106` run for Output 2 — ten rows, `§E13.21`** · Platform + Accountability **consulted, not read at full depth** | **`PROPOSED · NOT_ACCEPTED` · R1** — entry receipt reviewed twice before authoring (relief `NOT_READY` → veteran adjudication → relief `READY_TO_AUTHOR_WITH_EXACT_CORRECTIONS`), four blockers and ten material corrections applied **before** authoring, three against me. **Then the committed proposal was independently reviewed and returned `NOT_ACCEPTED`: six further blockers and eight material corrections applied in R1 (`§E13.26`), including the proposal's own self-divergence, frozen as fixture `AO-SELF-1`** | **★ The acceptance condition as previously worded was itself the defect Output 2 removes** — *"specified as a transaction"* presumes global atomicity. **`F-13`.** Residual: the five work classes are **local to this analysis**, not an OMNI vocabulary · Platform/Accountability full-depth read still owed (`B-8`) · the `ledger:287` correction is owed promptly and is **not** in this transaction | **★ CORRECTED:** the loop is specified as **one correlated operation decomposed into bounded owner-scoped commitments, deterministic derivations, attributed observations, durable obligations and continuous controllers** — with identities, causal history, fact ownership, predicates, failure/replacement/invalidation behaviour and the self-application boundary — and that specification is **independently reviewed and accepted by the steward** |
| 3 | **architecture graph semantics** | `§6.3` + plan §3.1 relations | partial | **INCOMPLETE** | no cardinalities, inheritance rules, applicability or conflict semantics | relation model complete enough for a validator to reject a bad edge |
| 4 | **change lifecycle** | `§E1` `AB-07` + `§6.4` | partial | **INCOMPLETE** | field additions and release postures, not a state model | full state model incl. the five change classes |
| 5 | **profile / deployment resolution** | `§2.4` axes + `§6.4` postures | ✘ pre-spine map §5 · Federation read; C4.6 unread | **INCOMPLETE** | proposed axes, no deterministic effective-resolution model | resolution deterministic for an explicit `as_of`, failing closed on contradiction |
| 6 | **conformance + observability model** | `§E2` `§E3` + `§E1` `AB-04`/`AB-10` | partial — C4.6 unread | **INCOMPLETE** | tool and capability tables, not the conformance model | the model itself, incl. forbidden-loosening as a machine check |
| 7 | **adopt / reject / transfer-limit matrix** | `§5` + `§E2` | ✘ Lane-1 primary sources unread | **INCOMPLETE** | transfer limits derived from C3.8 only; the architecture-management lane is unread | Lane-1 read; per-mechanism transfer limits stated |
| — | **`§G1-AUTH`** *(mandatory work package)* | `§4` + `§E4` | partial — Build OS ✔, Care ✔, RBAC ✔, GCE ✔ | **partially converged** | authority-source decomposition (§4.2) unsettled; 2 of 11 scenarios PARTIAL | the decomposition settles and every scenario resolves without invented authority |

### §G1-CONTRACT.b — gate-compliance obligations *(not model outputs, but required for acceptance)*

| Obligation | Evidence | Status | Acceptance condition |
|---|---|---|---|
| PRE-0 rows dispositioned | `§E1` | **1 CLOSED · 39 proposed** (40/40 verdicted; **`AB-08` → `adopted_narrowed` in the binding ledger 2026-08-13**) | steward + affected owners accept the remainder |
| One verdict per tool candidate | `§E2` | **complete as proposal** | nine unambiguous verdicts — met (1/5/3/0) |
| Current-practice vs 2030/35 evaluation | `§E3` | **complete as proposal** | ten capabilities covered — met |
| `M-106` inheritance / dedup | `§6` source map | **partial** | no unsupported novelty claim survives |
| Eleven authority scenarios | `§E4b` | **partial** | each resolves, or is named open with an owner per R8 |
| Boot / state integrity | `B-1` · §0.2 | **CLOSED 2026-08-11** | met — normalized on the base and verified there |

**Honest reading: ONE of eight outputs is complete, and a second is now proposed.** Output 1 is **`ACCEPTED_AS_G1_PROPOSAL`**. **Output 2 is `PROPOSED · NOT_ACCEPTED`** (`§E13`) — authored 2026-08-13, awaiting independent proposal review and steward acceptance on the same standard Output 1 met. Outputs 3–7 are **`INCOMPLETE`**. **`§G1-AUTH` is `PARTIALLY CONVERGED`**. **`1 complete + 1 proposed + 5 incomplete + 1 partial = 8`** ✔. **G1 as a whole remains incomplete** — proposing an output completes nothing. Counted from the matrix rows above and manually verified against them (`F-06`). Of the six gate obligations at `§G1-CONTRACT.b`, **`B-1` is CLOSED** and the rest are proposed or partial.

**Output 1's acceptance completes one of eight outputs and discharges none of outputs 2–7's obligations.** The sharpest evidence that **G1's contract is not close to satisfied** is now a governance enumeration rather than a ratio: **of the eight resource-governance relations, OMNI declares at most three for any architecture resource, never the same three, and `resource_steward` for none.** *(Seven cases enumerated at `§E9.6` — a statement about those resources, not a census of OMNI.)* **★ R1 — Output 2 has since been authored and proposed (`§E13`), which is what "bounded authoring" meant; it awaits acceptance.** Items 3–7 still need the unread Lane-1 and Lane-2 sources **and then bounded authoring** — reading alone will not produce graph semantics or a conformance model. **There is no path from unread sources to a completed architecture that contains no writing.** And Output 1 deliberately did **not** settle precedence, conflict resolution, applicability evaluation, profile composition, source-change propagation, effective resolution or conformance proof — it tested **representation only**, so outputs 3–7 inherit every one of those obligations undischarged (`§G1-CONTRACT.c`).

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
| `AB-08` | artifact taxonomy granularity | **CLOSED 2026-08-13 · `adopted_narrowed` in the binding ledger** — operator + `architecture_steward` acceptance at head `480f3bb` | **The five-function answer.** The “17 classes vs 5 tiers” fork was malformed — the two designs classified different things. **① carrier governance class** (what kind of carrier, under which rules) · **② logical resource kind** (what architecture object) · **③ placement role/policy** (where it may live, under what state and authority, with what forbidden — a predicate over kind + decision state + normative effect + scope + epistemic role, `[CAN→3]`) · **④ addressable granularity and composition** (which clauses are separately identifiable, and which of `contained_in` · `member_of` · `participates_in_view` · `included_in_profile` · `decomposes_into` applies) · **⑤ an open, steward-governed kind registry** — a new kind is warranted when **lifecycle, authority, ownership or conformance semantics differ materially**, not merely when finer granularity is wanted. *(★ R8.1: the absolute “granularity is `part_of`, not more classes” is WITHDRAWN — `part_of` was itself decomposed into five relations, and new kinds stay legitimate where the physics differ.)* | **§E11.G** = the normalized answer · `§E10`/`§E11` = the current candidate · R4–R7 = evidence history | **condition met.** No further fixture owed |
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

**Coverage: 40 of 40 `blocks G1` rows above. Closed: 1 — `AB-08` (`adopted_narrowed`, 2026-08-13).** *(Aggregates elsewhere in this file point here and do not restate it.)*

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

> ## ★ R4 FIRST-RUN RECORD — SUPERSEDED BY `§E7`, PRESERVED IN FULL
> **`§E6.5`–`§E6.12` is the R4 first run.** It was independently reviewed and **not accepted**; the review found three places where `AMM-C1` violated rules `AMM-C1` itself had written. **`AMM-C2` and the full rerun are at `§E7`; the review receipt with every disposition is at `§E7.0`.**
>
> **Withdrawn from this block, and NOT to be cited from here:** `representability = 14/14` (Case B was a rule violation, Case A carried an invented force value — `§E7.3`) · `estate_validation = 4 PASS · 3 FAIL · 7 NOT_INSTANTIATED` (two verdicts contradicted their own rows — `§E7.5`) · `authority_level` as a scalar and every ordering over it (`§E7.1.2`) · the collapsed `lifecycle_state` and `naming_state` enums (`§E7.1.3`) · `AR → CR` semantic relations and `part_of n:1` (`§E7.1.4`) · the seventeen-kind registry as closed (`§E7.2`) · `Output 1 = COMPLETE_AS_PROPOSAL` · `AB-08 = PROPOSED_CLOSURE_ON_REPRESENTABILITY` and its steward fork (`§E7.8`) · three bounded-search claims stated as global absence and the *"GCE = five resources"* framing (`§E7.6`).
>
> **Nothing here is deleted.** The row-level evidence, the four `A-*` amendments and the eight R4 findings all stand as the first run's record — that is what made the second run possible (`§0.1`, `F-05`).

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
| 4 | primary resource kind | `AR.primary_kind` — single-valued, closed, amendment-only **★ CORRECTED IN R5 — *“closed”* is withdrawn; the registry is steward-governed and **open** (`§E7.2`).** | **granularity is `part_of`, not a longer class list** (§E6.5.4) |
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

**Observed defect — representability FAIL, two causes.** ① A single `plane` field cannot express this resource: it **resides** in the Evidence plane as an unpromoted candidate while **constraining** P1/P2/P3 behaviour. The probe hit exactly this and reported *"`plane` had to take a set — `[seam, capability, projection]`"*; direct inspection this pass shows those three **are real plane names** (P2 · P3 · P4), so the probe's observation was better than the withdrawal credited, and `§E6.1` defect 3's parenthetical guess is falsified (`G1-FIND-11`). ② No axis holds a naming prohibition that is independent of acceptance (`G1-FIND-15`). **Amendments:** `A-1` (`home_plane` ⟂ `constrains_planes[]`) and `A-2` (`naming_state`). **estate_validation = PASS** with one residue: the owner is recorded as *run roles* in the terminus (operator Nick · adjudicator Knox), not as a standing `owner_seat` on the resource. **★ CORRECTED IN R5 — this verdict contradicted its own residue. `§E6.3`'s criterion requires a rightful owner; a run role is not a standing seat. Recomputed `FAIL` at `§E7.5`.**

### §E6.6.2 — Case 2 · Governed Capability Exchange — **the case is not one logical resource**

**The fixture's own case list contains a cluster.** The probe read this as *"needs `standard` AND `pattern` AND `seam` simultaneously — one `architecture_role` cannot hold it."* Under the L1/L2 split that conclusion dissolves, but not the way the probe's withdrawal implied: **GCE is a cluster, not one resource** — and the probe was describing the cluster, not a multi-role resource. **★ CORRECTED IN R5 — *“five logical resources”* launders a proposal into an estate finding. Accurate: **four addressable GCE resources were located in the inspected estate; this proposal identifies a fifth required boundary contract that is not instantiated** (`§E7.6`; `G-18` already owned that gap).**

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

**Expected result, therefore:** `view` = a real resource with `governing_viewpoint = undeclared`; `viewpoint` = `NOT_INSTANTIATED`. **★ CORRECTED IN R5 — R4 argued in prose that the System Map is an index/hub and then typed it `view` anyway to satisfy the case. The map declares itself `system_map`; the Surface Map declares `architecture_map`. A map may **carry or index** views without being one. Restructured into three sub-cases — real `architecture_map` · `FIXTURE_ONLY` `view` · `FIXTURE_ONLY` `viewpoint` — at `§E7.3` (6a/6b/6c).** **`AMM-C1` must be able to say `undeclared` without failing** — a metamodel that forces a governing viewpoint would make the fixture manufacture one, which is how an unread standard becomes an invented programme. **Required relationships:** view `governed_by` (0..1, `undeclared`) · view `depends_on` the contracts it indexes · `unframed_concerns[]` non-empty. **Forbidden:** auto-filling `governed_by`; `owns` truth on a P4/P5 view (NC-6); typing either map as a `domain_contract`. **representability = PASS.** **estate_validation = NOT_INSTANTIATED** (view PASS · viewpoint NI). **Residue:** `AB-25`'s adversarial-principal **assurance viewpoint** and `AB-32`'s **human-factors viewpoint** are both already dispositioned in `§E1` as viewpoints — so the estate has *named two viewpoints and instantiated none*, and `B-10` (`G-04`) is exactly that homelessness.

### §E6.6.7 — Case 7 · a cross-cutting standard

**Expected carrier behaviour — and the probe's most self-refuting claim, now measured.** `D0THES-GRD-033` is a **row** in `06`: `guardrail_id | anti_pattern | source_evidence | domain | severity | enforced_by | status | notes`. It is addressable, named, normative, and carries `severity = high`, `status = active`, `enforced_by`. So *"standards exist as clauses inside doctrine files, not as addressable artifacts"* is false — but the true requirement the probe was groping toward is real: **`carrier_kind = markdown_row` must be first-class, because `06` is one carrier holding **115** logical resources — counted this pass, not estimated** (NC-1).

**Expected authority level:** `governance_binding`. **Expected lifecycle:** `ratified_active`. **Required relationships:** `constrains_planes[]` spanning P0–P3 and P6 · `part_of` the `06` digest as a collection · `enforced_by` → a conformance suite **(no such edge exists)**. **Forbidden:** `home_plane` alone standing in for what it constrains; `authority_level` inferred from the carrier's own status.

**Observed defect:** representability FAIL pre-`A-1` (same plane conflation). **estate_validation = PASS**, with the fixture's cleanest independent confirmation of `§E6.2` finding 2: **`06`'s own carrier declares `Status: Skeleton (Phase 0)` while hosting guardrails at `severity: critical`.** Carrier lifecycle and resource authority are demonstrably independent — a second live instance beside `02_authority_routing_map.md`. Further residues: guardrail rows carry **no `version`, no `effective_from`, no `owner_seat` field and no applicability**, so a guardrail cannot presently be pinned by version in a citation, and no `.github/CODEOWNERS` routing entry for `06` was located. **★ CORRECTED IN R5 — same defect as case 1: the `PASS` above contradicts these residues. Recomputed `FAIL` at `§E7.5`; the citation consequence is now `G1-FIND-22` — 115 guardrail resources are uncitable under R8's own rule.**

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
lifecycle_state: ratified_active           # ★ CORRECTED IN R5 — category error: a snapshot is EMITTED, not ratified (§E7.1.3, §E7.3 case 9)
carrier: {carrier_kind: generated_artifact, writable_by: nobody}
derivation: f(descriptors, change_manifests, as_of)   # byte-reproducible or fail closed
relations:
  derived_from: [DS:*, AR:change_manifest:*]
  supersedes: []                           # FORBIDDEN — a new state is a new snapshot
```

**Expected carrier behaviour:** `generated_artifact`, `writable_by: nobody`, regeneration byte-identical or the pipeline fails closed (R8 §3.1). **Required relationships:** `derived_from` descriptors and manifests. **Forbidden:** any hand edit (NC-3) · any `supersedes` edge · being cited as a source of authority rather than a record of it. **representability = PASS.** **estate_validation = NOT_INSTANTIATED** — verified, not assumed: a repository-wide search for `DO NOT EDIT` · `@generated` · `autogenerated` markers returns **zero** artifacts, and no `structured_descriptor` carrier exists for a snapshot to be derived from. **★ CORRECTED IN R5 — *“nothing generated exists in OMNI today”* is a bounded lexical search reported as global absence, against the ledger's own `L-5`. Corrected: **no explicitly marked generated artifact was located; an unmarked one would not be found** (`§E7.6`). The finding survives in its bounded form: R8 §3.1's only answer to “what was true on date X” has **no located instance and no located producer.****

### §E6.6.10 — Case 10 · a conformance suite

**Expected carrier behaviour:** `test_script` at `scripts/test-consequential-transition-conformance.ts`. **Required relationships:** `verifies → resource_id` (case 1) · `evidenced_by` the `EVRUN-2026-000008` rubric · `owner_seat`. **Forbidden:** classifying a code carrier with a document governance category (the probe's row-10 complaint, which `A-3`'s carrier/resource split retires) · identifying its target **by name**.

**A live constraint the fixture did not expect, and it validates R8 §3.1.** The suite's header states: *"the frozen candidate name is DELIBERATELY absent from every identifier per the code requirement,"* and its fixture families are neutrally named (`consequential_transition_conformance`, `rx_partial_failure_continuity`, `cross_domain_consequence_fixture`). **So OMNI already contains a resource that its own verifier is forbidden to name.** Identity therefore *cannot* be name-based, which is precisely why R8 §3.1 requires a `resource_id` that survives renames — here proven by a live instance rather than argued. **representability = PASS** for this reason: `verifies` points at a `resource_id`, and the prohibition lands on case 1's `naming_state`, not here.

**estate_validation = FAIL.** The instance exists and its header states its provenance in prose — but: no descriptor; no declared `authority_level` or `lifecycle_state`; **`scripts/` appears nowhere in `.github/CODEOWNERS`**, so no owner or protected writer is recorded; and it is wired into **neither** `package.json` (whose scripts are only `dev`/`build`/`start`/`lint`/`typecheck`) **nor** any CI workflow — `.github/workflows/` contains exactly one file, `checkpoint-pointer.yml`. **★ CORRECTED IN R5 — *“nothing runs it”* is overstated: the suite **is** manually runnable. Defensible form: it is wired into neither `package.json` nor CI and is therefore **not a continuously enforced** conformance mechanism. Likewise *“no owner is recorded”* → **no `CODEOWNERS` routing entry or ownership descriptor was located**, and hosted enforcement was not inspected (`§E7.6`).**

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
| `FX-AC-05` | non-regulated internal tooling · — · — · — · 2026-08 | `not applicable` **★ CORRECTED IN R5 — `not applicable` is an *applicability result*, not a normative force, and it is absent from §7.3's inherited force ladder. R4 invented it without flagging it (`§E7.3`).** | `reject` |

**representability = FAIL pre-amendment, and this is the one genuinely unexpected failure of the pass.** The five claims, five forces and five dispositions are all expressible against one un-mutated source — that part works. What breaks is **version**: `AMM-C1` inherits R8 §3.1's single `version` field with semantic-version semantics (*"`resource_id` + version is the citable unit"*), and an external source's identity is the **publisher's edition**, which is not a semver and which OMNI may never rewrite. The failure was found by hitting it: this pass consulted **ISO/IEC/IEEE 42010:2011** primary text while the current edition is **42010:2022** — the same source, two editions, the same definitions at different clause numbers, and an applicability claim that must pin **which**. **Amendment `A-4`:** `omni_version` ⟂ `source_edition`, with `omni_version` forbidden on an `external_source` and `source_edition` opaque and never OMNI-rewritten. Post-`A-4`: **PASS**.

**estate_validation = NOT_INSTANTIATED**, verified rather than asserted: `ingestion/regulatory_compliance_evidence/` contains exactly one file, `_lane.md`. **Zero `applicability_claim` instances exist estate-wide.** §7.3's honesty holds — a search miss is not proof of absence for *regulatory content*, which is very likely present elsewhere — but the **claim object itself** is absent, and that is the representable thing this case tested.

### Case B — operator variation (the Henry Ford case)

**Under test:** can `AMM-C1` hold **the request**, **the applicable profile**, **the variation point** and **the resulting decision** as four distinct resources without collapsing them?

| Resource | `primary_kind` | Role in the case |
|---|---|---|
| `FX-OR-01` *"our pharmacies only do it this way"* | `external_source` + `applicability_claim` **★ CORRECTED IN R5 — this assigns TWO `primary_kind` values to one resource, violating `AMM-C1`'s own single-valued rule. Case B was therefore NOT a representability pass. The customer's statement and OMNI's claim about it are separate resources (`§E7.3`).** | the inbound requirement, attributed to its requester, never auto-adopted |
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

> **★ CORRECTED IN R5 — BOTH AGGREGATES BELOW ARE WITHDRAWN.** `representability = 14/14` was **13/14 at best**: Case B violated the single-kind rule and Case A carried an invented force value. `estate_validation = 4/3/7` is superseded by **3 PASS · 6 FAIL · 7 NOT_INSTANTIATED** of 16, derived from four declared conjuncts per row. **The R5 aggregates are at `§E7.3`, `§E7.5.1` and `§E7.8`.** Retained here as the first run's arithmetic, which is what made the correction checkable.**

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

### §E6.11.3 — `AB-08` · **PROPOSED** disposition — **★ CORRECTED IN R5: WITHDRAWN**

> **The `PROPOSED_CLOSURE_ON_REPRESENTABILITY` disposition and the steward fork below are both withdrawn.** The fork asked the steward to choose a reading of the closure condition when the row is about taxonomy granularity and the estate defects are separately routed. Current disposition: **`AB-08_REMAINS_OPEN__FALSE_SINGLE_COUNT_REJECTED__AMM_C2_SUBMITTED_FOR_REVIEW`** (`§E7.8`). **The surviving substantive conclusion — adopt neither “17 classes” nor “5 tiers” — stands.**

| Field | Value |
|---|---|
| Row | `AB-08` — artifact taxonomy granularity: 17 classes (B) vs 5 tiers (A) |
| Ledger semantics | `open` · owner **`architecture_steward`** · trigger = G1 artifact-metamodel authoring · **decided at G1** · **blocks G1 close** |
| Closure condition on record | *"the 12-artifact fixture set passes"* (`§E-note B`, `G-08`) |
| **Fixture state** | **RUN.** 12 cases + 2 representability cases + 9 negative controls, `§E6.6`–`§E6.8` |
| **Proposed disposition** | **`PROPOSED_CLOSURE_ON_REPRESENTABILITY` — the granularity question is answered; the estate question is not.** The substantive answer: **`AB-08` is malformed as a single class count.** A · B compared two different axes — the **10** governance categories classify *carriers*, the **13** Artifact Index roles assign *homes and prohibitions*, and `primary_kind` (**17** values exercised here, plus 2 carried and untested) types *resources*. None is a refinement of another, and **finer granularity is a relation (`part_of`), not a longer list** — which is why Reactor's eight invariants and `06`'s **115** guardrail rows require **zero** additional classes. **Adopt neither submission's number.** |
| **Not claimed** | **Not accepted, not closed.** This carrier is `analysis_nonbinding` under `proposal_authoring`; the ledger transition belongs to the accepting transaction, and `AB-08` is owned by the `architecture_steward` |
| **The fork the steward decides** | If `AB-08`'s closure condition is read as the **representability** question it names, the fixture supports closure: 14/14 representable, 9/9 controls correct, four bounded amendments recorded. If it is read as requiring **estate validation** too, `AB-08` **stays OPEN** pending `G1-FIND-13` and `G1-FIND-14`. **`AB-08` asks about taxonomy granularity, so the first reading is the better one — but that is the steward's call, not this seat's, and it is put as a fork rather than resolved by assertion.** |

### §E6.11.4 — `§G1-CONTRACT` Output-1 cell — what changed and what did not — **★ CORRECTED IN R5**

> **`COMPLETE_AS_PROPOSAL` is withdrawn** → `AMM_C2_RERUN_DONE · NOT_COMPLETE · AWAITING_INDEPENDENT_REVIEW` (`§E7.8`). **And the read-graph claim below is withdrawn:** route `9v-ii` carries path, trigger, read rule, authority, lifecycle and promotion condition — **no content description — so it needs nothing.** Acting on the R4 claim would have pushed Output-1 narrative into a routing surface. **The catalog-row note survives, scoped to its `status` column**, which reads `g1_carrier_R3_...` and is two revisions stale.

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

---

# §E7 — Output 1 · R5 · `AMM-C2` and the full rerun

> **Why this section exists.** The R4 run at `§E6.5`–`§E6.12` was independently reviewed and **not accepted**. The review found defects the author's own rerun did not catch — including **three places where `AMM-C1` violated rules `AMM-C1` itself had just written.** That is the fixture working one level up, and it is the strongest argument yet that the fixture was the right instrument.
>
> **`§E6.5`–`§E6.12` is preserved as the R4 first-run record and is NOT rewritten.** Where R4 made a claim this pass corrects, the R4 text carries an explicit in-place `★ CORRECTED IN R5` marker pointing here. **No R4 evidence is deleted** (`§0.1`, `F-05`).
>
> **Output 1 is NOT re-declared complete.** After a review round that found three self-contradictions in the candidate, self-certifying the replacement would be the same error one revision later. State: **`AMM_C2_RERUN_DONE · NOT_COMPLETE · AWAITING_INDEPENDENT_REVIEW`.**
>
> ## ★ R5 RECORD — SUPERSEDED BY `§E8`, PRESERVED IN FULL
> **`AMM-C2` was independently reviewed and not accepted.** It reproduced the exact defect its own new falsifier `F-07` names: the top-level decomposition improved while incompatible meanings stayed fused **inside the values** — `normative_force`, `canonicality_role`, `authority_basis`, `lifecycle_state`, and the owner test. **`AMM-C3` is at `§E8`; the receipt is at `§E8.0`.**
> **Withdrawn from this block:** `representability = 16/16` and `estate_validation = 3 PASS · 6 FAIL · 7 NOT_INSTANTIATED` — **their sixteen rows mixed single resources, clusters and scenarios**, violating fixture protocol `P-1` that R4 itself declared · the headline *“three of sixteen architecture resource **kinds** are both instantiated and governed”* (the rows were not kinds) · case 12's and case 6a's `PASS` (reviewer read as owner) · the *“all semantic relations are resource→resource”* claim · `part_of n:m` · the Artifact-Index placement evidence (partly drift read as design) · *“losening is structurally impossible”* · *“115 guardrails uncitable”* · the *“SEI declines the term”* generalization · `binding_time`'s `[KND]` label.
> **Nothing here is deleted.**

## §E7.0 — Review receipt: what is accepted, what is refined, what is declined

**Assessed against the artifact, not against the review's authority.** Three items were verified as reproducible self-contradictions in `AMM-C1` before any amendment was designed; two items are declined with reasons; four are accepted with a materially different fix than the one proposed; two defects the review did not find are added.

| # | Review finding | Disposition | Basis |
|---|---|---|---|
| 1 | **Case B assigns two `primary_kind` values to one resource** (`external_source` + `applicability_claim`), violating `AMM-C1`'s own single-valued rule; and Case A puts `not applicable` in the `normative_force` column, where it is an **applicability result** | **ACCEPTED IN FULL** | Verified in the live file: `FX-OR-01` row carries both kinds; `FX-AC-05` carries `not applicable` as a force — **a value absent from §7.3's own inherited force ladder, invented by R4 without flagging it.** `representability = 14/14` cannot stand |
| 2 | **`estate_validation` contradicts its own criterion** — cases 1 and 7 are `PASS` while their own row text records no owner | **ACCEPTED, WITH A STRONGER FIX** | Verified. But the deeper defect is that `§E6.3`'s criterion is a **four-conjunct predicate** (known authority · known lifecycle · rightful owner · usable home) that R4 reported as one scalar — the same malformed-scalar defect the review correctly identifies in `authority_level`, one level up. **Fix: report the four conjuncts per row and derive the verdict**, keeping `§E6.3`'s three values rather than inventing a fourth (`§E7.5`) |
| 3 | **`authority_level` is a malformed scalar and `authority_level(superseder) ≥ authority_level(superseded)` is an unsound total order** | **ACCEPTED IN FULL — the highest-consequence defect in the pass** | Verified, and worse than stated: §4.2 **already withdrew** a single `authority_basis` enum over unlike kinds, and §4.9 lists **no-scalar-authority** as a candidate standard. R4 recreated the defect on the one operation that changes what OMNI's law *is*. Under the R4 rule, if `governance_binding > canonical_domain`, a process doctrine could authorize overwriting domain truth — **permissive in exactly the wrong direction** (`§E7.1.2`) |
| 4 | **Lifecycle, maturity, ratification, disposition and naming are still partly collapsed;** `naming_gate_open` (a state) and `name_prohibited_in_implementation` (a policy) cannot be values of one enum | **ACCEPTED IN FULL** | Verified, and the fixture proves it: **case 1 needed both simultaneously** — Reactor's naming gate is open *and* its verifier is forbidden to name it — from a single-valued field. `active_skeleton`, `declared_but_unauthored` and `demoted_to_evidence` each decompose cleanly into two facets, which is itself evidence the decomposition is right. The generated-snapshot row's `lifecycle_state = ratified_active` was a category error: a snapshot is **emitted**, not ratified |
| 5 | **Identity/revision/descriptor/external edition unsettled** — a descriptor must describe a *revision*, and OMNI must be able to version its own characterization of an external source even when the publisher edition does not move | **ACCEPTED IN FULL** | Verified against **FHIR's own mechanism**, which R8 names for exactly this: canonical URL = identity, version = author-assigned, *"maintain same canonical url"* across compatible versions. R8's *"`resource_id` + version is the citable unit"* is **preserved and reconciled**, not replaced (`§E7.1.4`) |
| 6 | **Relation endpoints are inconsistent** — `implemented_by`/`verified_by`/`evidenced_by` point at carriers while the fixture types implementation, conformance suite and evidence as resources; `part_of n:1` too restrictive; same-owner rule unestablished; `owns` too generic; `conforms_to` needs a non-normative sibling | **ACCEPTED IN FULL** | Verified, and each sub-point is corroborated: 42010 says a model **may be part of more than one view** — R4 cited that and then imposed `n:1`. The System Map says the Operating-Intelligence layer *"may own derived views / metric-defs / lineage / freshness / explainability, never source truth"* — so blanket `P4/P5 may not own` is wrong as written. **And the omission the review understated: `conforms_to`-only meant `AMM-C1` could not represent the act that was validating it** — the fixture *evaluates against a proposal*. Guardrail candidate 3 (*"a model that cannot represent its own authority transaction has not been self-hosted"*), one level up |
| 7 | **Output 1 absorbed Output 3/6 semantics and then used its own declarations to pass its own negative controls** | **ACCEPTED AS TO CIRCULARITY · DECLINED AS TO THE PROPOSED BOUNDARY** | **The circularity critique is correct and is answered by grading, not by deletion** (`§E7.4`): a control that fails *because the author wrote the rule it tests* is weak evidence and is now labelled as such. **But the proposed boundary — Output 1 keeps only kinds, facets, relation vocabulary and endpoint types, with all cardinality to Output 3 — would make the assignment's own requirements unrunnable.** `§E6.3` mandates *"**forbidden classifications**"* per row and *"one invalid edge that **must** fail"*; the prohibition list Output 1 was told not to settle is explicit and does **not** include forbidden relationships. Adopted boundary: **cardinality and prohibition that follow from what a kind IS are Output 1; cardinality and precedence that are policy CHOICES are Output 3.** Every constraint is now provenance-labelled `inherited-law` · `kind-definitional` · `candidate→Output 3/6` |
| 8 | **Artifact Index role vs `primary_kind` unreconciled — three parallel taxonomies;** prove independence or supersede the role registry; do not freeze the registry at seventeen | **ACCEPTED AS TO THE DEMAND · DECLINED AS TO THE FORK** | The demand for proof is right and the proof exists (`§E7.2`). **But "independent axis or supersession" is a false fork.** The Artifact Index is a **placement-and-prohibition policy** — *"ONE job / FORBIDDEN in it / canonical home"* — and `primary_kind` is its **key**. It is neither a competitor nor a predecessor, so nothing supersedes anything: the Index gains an explicit key and keeps its `governance_binding` status. Registry **reopened** — not closed at seventeen — and *"granularity is `part_of`, not a longer list"* is narrowed |
| 9 | **The source floor is too narrow for the model actually authored** — read the targeted SEI / FHIR / IHE / AUTOSAR controlling sections | **ACCEPTED IN FULL, and it paid for itself immediately** | Four mechanism findings that changed `AMM-C2` materially, including **SEI's own report declining the term *"variation point"*** and **FHIR making non-loosening a consequence of derivation kind rather than a policy check** (`§E7.1.6`). Same fence as 42010: mechanism only, no adoption, no conformance claimed |
| 10 | **Bounded searches were reported as global absence** | **ACCEPTED IN FULL — this is the arc's own `L-5` law, quoted at §7.3 and then violated three times in R4** | A lexical marker search cannot prove nothing generated exists; a term search cannot prove no equivalent object exists under another name. **And the estate refutes one of them directly: `AB-25` already names an *assurance viewpoint* and `AB-32` a *human-factors viewpoint*** — R4 recorded that as a residue and then still wrote *"no viewpoint resource exists estate-wide"* (`§E7.6`) |
| 11 | **GCE = four inspected resources plus one *proposed* missing contract, not "five resources"** | **ACCEPTED IN FULL** | R4's *"GCE turned out to be five resources"* launders a proposal into an estate finding — the exact proposed-vs-landed failure `B-1` was spent repairing |
| 12 | **CODEOWNERS and conformance conclusions overstated** | **ACCEPTED IN FULL** | No routing entry ≠ no owner; an entry ≠ hosted enforcement (AGENTS.md itself says the checkpoint workflow is *"merge-blocking only once marked a required status check in branch protection"* — R4 read that and failed to apply it); and the suite **is** manually runnable, so *"nothing runs it"* is wrong. *"Not wired into npm or CI, therefore not continuously enforced"* is the defensible form |
| 13 | **The view case has no stable answer — do not force a map into the `view` kind** | **ACCEPTED IN FULL** | R4 argued in prose that the System Map is an index/hub and then typed it `view` to satisfy the case. Restructured into three sub-cases: real `architecture_map` · `FIXTURE_ONLY` `view` · `FIXTURE_ONLY` `viewpoint`, with `indexes`/`carries` relations (`§E7.3`) |
| 14 | *(not raised in review)* **The meta-defect: top-level decomposition did not prevent recollapse inside the value sets** | **ADDED** | `AMM-C1` decomposed thirteen distinctions at the top level and then re-collapsed four of them *inside individual enums and one table row* (`authority_level`, `lifecycle_state`, `naming_state`, Case B's dual kind). **Decomposing the axes does not protect the values.** Guardrail candidate (`§E7.7` `G1-FIND-19`) |
| 15 | *(not raised in review)* **Under R8's own citation rule, 115 guardrail resources are uncitable** | **ADDED** | R8 §3.1: *"`resource_id` + version is the citable unit."* `06` rows carry **no version and no effective interval**. A conformance claim of the form *"we complied with `GRD-033` as of March"* therefore cannot be pinned or defended. Estate finding, not a representability failure (`G1-FIND-22`) |

**Two further review instructions, handled separately:**
1. **"Remove the claim that read-graph `9v-ii` needs content repointing"** — **ACCEPTED and removed.** Verified: route `9v-ii` carries path · trigger · read rule · authority · lifecycle · promotion condition and **no content description**. R4 manufactured an obligation, and discharging it would have pushed Output-1 narrative into a routing surface — a violation in the opposite direction. **But the same instruction cannot be applied to the catalog row: its `status` column literally reads `g1_carrier_R3_PROPOSED_not_accepted_B1_cleared`, which names a revision and is now two revisions stale.** That note is retained, scoped to the `status` column only, and remains unwritable by this seat.
2. **"Output 1 defines relation vocabulary and endpoint types; cardinality to Output 3"** — declined as stated; replaced by the kind-definitional-vs-policy split at item 7.

---

## §E7.1 — `AMM-C2`

> **Same fence as before.** `AMM-C2` is a candidate under test. Field names are fixture vocabulary. Installation is G2's transaction against R8 §3.1. **Every constraint below carries a provenance label:** `[INH]` inherited law this pass only represents · `[KND]` kind-definitional — true of what the kind *is* · `[CAN→3]` / `[CAN→6]` candidate routed to Output 3 or 6, **recorded, not settled.**

### §E7.1.1 — Three-tier identity, replacing one flat resource record

```
LogicalResource         resource_id          stable, never reused, survives renames/moves/repackaging  [INH R8 §3.1]
                        preferred_label      display only; NOT identity                                [KND]
ResourceRevision        resource_id + revision_id (omni_version)                                       [INH R8 §3.1]
                        effective_from / effective_to · derivation · supersedes_revision
Descriptor              describes → ResourceRevision   (NOT the timeless identity)                     [KND]
Carrier                 carries → ResourceRevision | Descriptor record   (n:m, the ONLY resource↔carrier relation)
ExternalSource          source_id + publisher_edition   NEVER written or rewritten by OMNI             [INH GRD-036]
ExternalSourceDescriptor  OMNI's local characterization of that source — independently revisioned      [KND]
```

**R8's rule is preserved, not replaced.** *"`resource_id` + version is the citable unit"* becomes `resource_id + revision_id`; the addition is that the **descriptor attaches to the revision**, which is what makes *"what was true on date X"* answerable at all. **FHIR corroborates the shape** (mechanism only): a `StructureDefinition` is identified by its **canonical URL** while `version` is author-assigned, and a compatible change *"maintain[s] the same canonical url."* Identity and revision are two fields there for the same reason they must be two here.

**The external half is now symmetric.** R4 forbade every local version field on an external source, which left OMNI unable to record that **its own** characterization of a source changed while the publisher's edition stood still. `AMM-C2`: the publisher's edition is opaque and never OMNI-written `[INH]`; OMNI's descriptor *of* that source is an ordinary revisioned resource `[KND]`.

### §E7.1.2 — `authority_level` is dissolved · four facets · **no ordering anywhere**

**The single most consequential correction in this pass.** `supersedes` is the operation that changes what OMNI's law *is*. R4 authorized it by scalar comparison over an enum that mixed **normative force**, **canonicality role**, **evidentiary use** and **declaration completeness** — so the rule was both meaningless (*is `canonical_domain ≥ governance_binding`?* the question has no answer) and **permissive in the wrong direction** (a process doctrine ranking above a domain contract could authorize overwriting domain truth). §4.2 had already withdrawn one flat enum over unlike kinds and §4.9 lists **no-scalar-authority** as a candidate standard. R4 recreated the defect on the worst possible operation.

| Facet | Values | Note |
|---|---|---|
| `normative_force` | `binding` · `nonbinding` · `evidentiary` · `informative` | what force the resource carries `[KND]`. **★ CORRECTED IN R6 — still two questions in one field: `evidentiary` is an epistemic **use**, not a force. Splits into `normative_effect` ⟂ `epistemic_role[]` (`§E8.1.1`).** |
| `canonicality_role` | `canonical_global` · `canonical_domain` · `derived` · `projection` · `none` | source-of-truth role — **orthogonal to force** `[INH]`. **★ CORRECTED IN R6 — three questions in one field (truth scope · provenance · architectural function), and `projection` duplicated `home_plane = P4`. Splits into `truth_authority` ⟂ `derivation_provenance` (`§E8.1.1`); holdout H-3 proved the value set incomplete — a seam contract is canonical for a *boundary*.** |
| `declaration_completeness` | `declared` · `absent` | absence is recordable and never silently upgraded `[INH]` `D0-GRD-003` |
| `authority_basis` | `{owner_seat, establishing_authority, review_gate}` | **who may establish or change the claim** `[INH]` §4.6. **★ CORRECTED IN R6 — four distinct relations bundled as one, in the section that cites §4.6 for keeping them apart. Splits into `accountable_owner` ⟂ `authorized_maintainer[]` ⟂ `accepting_authority` ⟂ `review_requirement` (`§E8.1.1`).** |

**`supersedes` becomes a typed transaction, not a comparison** — six conditions, each labelled:
1. same `resource_id`, **or** an explicit cross-resource supersession decision `[KND]`;
2. compatible `scope` `[KND]`;
3. the acting seat holds rightful authority over the superseded resource per its `authority_basis` `[INH]` §4.6;
4. an explicit supersession **decision resource** exists — supersession is never implicit `[INH]` R8 §3.1 *"supersession is explicit and never silent"*;
5. history preserved — prior revision retained, `effective_to` stamped `[INH]`;
6. where authority domains differ, an **allowed cross-authority transition** — the predicate itself is `[CAN→3]`.

**One prohibition survives, and it is not an ordering.** `normative_force ∈ {nonbinding, evidentiary, informative}` **may not supersede** `normative_force = binding` `[INH]` — from `GRD-036` and *presence-is-not-authority*. This is a single forbidden transition between two named values, not a rank over eight. **It is also the rule whose absence produced `B-1`**, so removing it entirely would discard the one piece of the R4 construct that was load-bearing.

### §E7.1.3 — Lifecycle split into four facets, naming into two

| Facet | Values | What it answers |
|---|---|---|
| `lifecycle_state` | `proposed` · `in_review` · `accepted` · `active` · `retired` · `superseded` · `withdrawn` · **`emitted`** · **`expired`** | where the resource is in its own life `[KND]`. **★ CORRECTED IN R6 — four state families in one field, with real cross-facet duplication: `accepted` duplicated `ratification_state`, `withdrawn` duplicated `disposition`. Splits into five facets, and **`superseded` is removed as assertable — it must be DERIVED from the supersession relation** (`§E8.1.1`, `G1-FIND-27`).** |
| `ratification_state` | `unratified` · `ratified` · `not_applicable` | whether a deciding authority accepted it. **`not_applicable` for generated kinds** — a snapshot is not ratified, it is emitted |
| `completeness_maturity` | `skeleton` · `partial` · `complete` · **`declared_unauthored`** | how much of the content exists `[INH]` `G-18` |
| `disposition` | `none` · `demoted_to_evidence` · `frozen_pending_gate` · `parked_with_trigger` · `rejected` | an act performed **on** the resource |
| `naming_status` | `named_accepted` · `named_provisional` · `naming_gate_open` · `unnamed` | the state of the name |
| `naming_constraints[]` | `none` · `name_prohibited_in_implementation` · `name_prohibited_in_external_publication` | a **policy set** — multi-valued, coexists with any status |

**Every collapsed R4 value decomposes cleanly, which is the evidence the split is right:** `active_skeleton` = `active` + `skeleton` · `declared_but_unauthored` = `accepted` + `declared_unauthored` · `demoted_to_evidence` = disposition · `frozen` = `frozen_pending_gate`. And **case 1 now holds both facts it always had:** `naming_status = naming_gate_open` **with** `naming_constraints = [name_prohibited_in_implementation]`.

### §E7.1.4 — Relations normalized · semantic relations are resource→resource — **★ CORRECTED IN R6**

> **The heading's claim is false and is withdrawn; the table below is not.** Four relations in it terminate at non-resources (`owns_canonical_truth → fact`, `owns_definition → definition`, `applies_to → context tuple`, `carries → revision`). `AMM-C3` declares **typed value objects** as legitimate endpoints instead of pretending otherwise (`§E8.1.4`). **And these edges carry no effective interval — revisioned nodes with timeless edges, which makes `as_of` unanswerable by construction** (`§E8.1.3`, `G1-FIND-28`). `part_of n:m` is over-generalized from one 42010 sentence and splits into five relations (`§E8.1.5`); the `1:n` cardinalities wrongly implied every resource must have an implementation or verifier.

**AUTOSAR supplies the shape, independently of the review** (mechanism only): a software component is described by **three separate objects** — the **port interface** (the contract), the **internal behavior** (runnables, events, port-access mappings), and the **implementation** description (compiler, language, changelog). *"The component communicates with the outside world exclusively using ports."* One component, three descriptions, and the contract says nothing about internals.

| Relation | Endpoints | Cardinality | Provenance |
|---|---|---|---|
| `carries` | `Carrier → ResourceRevision \| Descriptor` | n:m | `[KND]` the only carrier relation |
| `describes` | `Descriptor → ResourceRevision` | 1:1 | `[KND]` |
| `part_of` | `AR → AR` | **n:m** *(was `n:1` — corrected)* | `[KND]`; 42010 4.2.5. **★ CORRECTED IN R6 — that sentence licenses **view participation**, not universal multi-parent containment. Splits into five relations (`§E8.1.5`).** |
| `implemented_by` | `AR → AR(implementation)` | 1:n | `[KND]` AUTOSAR three-description split |
| `realizes_interface` | `AR(implementation) → AR(interface_contract)` | n:m | `[KND]`; **AUTOSAR and IHE converge**: internals unspecified, boundary mandatory |
| `verified_by` | `AR → AR(conformance_suite)` | 1:n | `[KND]` |
| `evidenced_by` | `AR → AR(evidence)` | 1:n | `[KND]` |
| `owns_canonical_truth` | `AR → fact` | 1:n | **forbidden for `canonicality_role = projection`** `[INH]` `DEC-033`, `T0-15` |
| `owns_definition` | `AR → definition` | 1:n | **permitted for projections** — the System Map grants the Operating-Intelligence layer its own metric definitions, lineage, freshness and explainability `[INH]` |
| `conforms_to` | `AR → AR` | n:m | normative; target `ratification_state = ratified` `[INH]` `GRD-036` |
| **`evaluated_against`** | `AR → AR` | n:m | **new**; may target a proposal. **Without it, `AMM-C1` could not represent this fixture** `[KND]` |
| `promoted_by` | force/ratification transition → `AR(decision)` | 1:1 | `[INH]` `GRD-036` |
| `supersedes` | `ResourceRevision → ResourceRevision` | n:m | the six-condition transaction at `§E7.1.2` |
| `requires_grouping_with` | `AR(profile) → AR(profile\|actor)` | n:m | `[KND]` IHE required actor groupings |
| `applies_to` | `AR(applicability_claim) → context tuple` | 1:1 | `[KND]` |
| `translated_to` | `AR(external_source\|claim) → AR` | n:m | source never mutated or copied `[INH]` |

**`part_of`'s same-owner precondition is withdrawn.** R4 asserted *"parent and child share `owner_seat` unless an explicit delegation exists"* as a precondition. It was invented, is not established anywhere in the estate, and is falsified by `06`: guardrail rows sourced from Care, thesis and evidence lanes sit in a digest owned by the steward. **Recorded as `[CAN→3]`, not enforced.**

### §E7.1.5 — Profile derivation: FHIR's two kinds, and non-loosening as a *consequence*

**R4's single `specializes` relation conflated two operations that FHIR — the source R8 names for exactly this — keeps apart:**

| `derivation` | What it may do | Consequence |
|---|---|---|
| `specialization` | **adds** new elements; is the master definition for a type | loosening is not the relevant risk; novelty is |
| `constraint` | **cannot define new elements**; may only *"make new rules about existing content"* | **loosening is structurally impossible, not policed** |

**This is the pass's most useful mechanism transfer, and it partially dissolves a problem R4 deferred.** R4 wrote *"`specializes` may not relax an inherited prohibition"* as a policy precondition, then admitted the semantic check was unresolved, then counted the control as a pass. Under `AMM-C2` a profile whose `derivation = constraint` **cannot** loosen, because adding-rules-only is the only operation available `[KND]`. What remains genuinely unresolved is narrower and now precisely stated: **where a constraint's content is prose rather than a structured rule, no mechanism can compare two prose rules** — that residue is `[CAN→6]`, not the whole problem.

**Two representations, both required** (FHIR, mechanism only): a **differential** carries only the delta and *"serves the authoring process"*; a **snapshot** is *"a fully calculated form… not dependent on any other structure"* and *"serves the implementation tooling."* **This is R8 §3.1 object 3 corroborated by an independent source**, and it explains *why* the snapshot must be derivable rather than authored — which R8 already required as byte-reproducible-or-fail-closed.

### §E7.1.6 — Variability: SEI's own report rejects the term OMNI is using

**Read directly, and it is a genuine surprise.** The CMU/SEI report R8 names declines *"variation point"*: *"a variable part not only describes a location (a point) in the core asset that needs adaptations, but it is also an **organizing container** for all the artifacts (such as variation mechanisms, process descriptions, and variants)… Second, variation point is often used to describe variations in terms that refer to an asset's externally visible properties or functions rather than places in the asset's internal structure."*

**Consequences for `AMM-C2`, all bounded:**
- **The OMNI name is kept** — charter §6.2 uses *variation point* and Build OS `09`'s vocabulary-discipline clause forbids minting a synonym. **SEI's caution is recorded, not obeyed.**
- **The kind is modelled as SEI's container**, because that is what the charter's own description does: `variable_part_location` · `variation_mechanism` · `permitted_variants` · `prohibited_variants` · `owner_seat`.
- **`binding_time` is added, and it was missing from `AMM-C1` entirely**: `design` · `authoring` · `install_or_deploy` · `activation` · `runtime_per_request` `[KND]`. **★ CORRECTED IN R6 — relabelled **`[CAN→3/5]`**. The variable-part / mechanism / binding-time separation is inherited; **where** binding occurs in OMNI's layers is synthesis. Labelling my own invention as inherited is worse than having no label.** It is load-bearing for OMNI specifically — a variation bound at deployment configuration is a different object from one bound per care decision, and conflating them is how a deployment value becomes a clinical policy.
- **`binding_time` belongs to the mechanism, never to the rule.** Placing it on a profile constraint would have been a category error: *"AI never final-authors safety-sensitive atoms"* is checked at many moments and bound at none. SEI's separation of *variable part* / *mechanism* / *binding time* is what caught it (`G1-FIND-24`).

### §E7.1.7 — Multi-profile composition: IHE's union rule, represented not resolved

**IHE, verbatim:** *"Actors supporting multiple Integration Profiles must support all of the transactions of each profile."* Composition is **obligation-union** — never merge-with-override, never weakening. IHE also **folded profile dependencies into required actor groupings**, i.e. a dependency between profiles is expressed as required co-implementation rather than as a separate precedence relation — a directly usable precedent.

**And the boundary rule, arrived at independently of AUTOSAR:** *"When those actors communicate internally, IHE permits them to use proprietary methods… however IHE requires the actors to be capable of communicating with actors on other systems using the defined IHE interfaces."* **Two unrelated primary sources converge on §3's answer** — internal-model equivalence not required, boundary conformance mandatory. That is corroboration from independent mechanisms, which is not the same thing as agreement among reviewers (`F-03`).

**Also directly relevant to an already-adopted OMNI disposition:** *"IHE Integration Profiles are not statements of conformance to standards, and IHE is not a certifying body"* — conformance is communicated as a vendor-published **Integration Statement** listing profiles, actors and options. That is `AB-10`'s *"conformance as an attributed claim carrying issuer, profile, version, environment, exceptions"*, independently corroborated. **Named options bind once claimed** — a variation point with an explicit binding step.

**`AMM-C2` represents the union rule as `[CAN→5]`.** Composition *resolution* remains Output 5; nothing here computes an effective profile.

---

## §E7.2 — Artifact Index role vs `primary_kind` — the reconciliation, with estate evidence

**The demand for proof is accepted; the either/or is declined.** Independence was asserted in R4 and is now demonstrated in both directions from the live estate:

| Direction | Evidence |
|---|---|
| **one Artifact Index role holds several `primary_kind`s** | the **Doctrine** role (`.cursor/plans/doctrine/`) holds `standard` (the 115 `06` rows), `pattern` (`coherent_omni_architecture_pattern_2026-05-17.md`; and the GCE spine inside the enterprise posture), and `decision` (`D0THES-DEC-036`, recorded in the posture document) |
| **one `primary_kind` appears in several Artifact Index roles** | `decision` appears in **Decisions/ADR** (`03` rows), in **Doctrine** (`DEC-036`), and as a proposed decision in **Open Decisions** (`08` rows) |

**Many-to-many in both directions, therefore neither is a refinement of the other — and therefore neither supersedes the other.** But "independent axes" is also the wrong description, because it leaves three taxonomies floating. The accurate relation:

> **The Artifact Index is a placement-and-prohibition policy. `primary_kind` is its key.** The Index's own columns are *"ONE job / FORBIDDEN in it / canonical home"* — that is a **policy** over resources, and the thing it needs in order to be evaluable is a **type for the resource it is placing**. The 10 governance categories classify the **carrier's genre**; `primary_kind` types the **resource**; the Index says **where a resource of that kind may live and what is forbidden there.** Three *functions*, not three competing type systems.

**Proposed, not landed:** the Artifact Index gains an explicit `admissible_kinds[]` column and **keeps its `governance_binding` status** — it is extended, not superseded. Owner: `architecture_steward`. **This carrier writes nothing to it.**

**Two R4 overreaches withdrawn:**
- **The kind registry is reopened.** R4 said *"single-valued, closed, amendment-only"* and implied the fixture settled the set at seventeen. **It did not.** Two kinds remain untested, much of the source floor is unread, and a kind is warranted whenever **lifecycle, authority, ownership or conformance semantics differ materially** — steward-governed and extensible.
- ***"Finer granularity is `part_of`, not a longer kind list"* is narrowed.** `part_of` solves **composition**. It does not remove the need for a new kind when the semantics differ. R4's absolute phrasing would have blocked legitimate kinds.

---

## §E7.3 — Full rerun · fourteen representability cases

> **★ CORRECTED IN R6 — THE UNIT OF THIS TABLE IS INCONSISTENT AND ITS TOTAL IS WITHDRAWN.** Rows 2 (GCE), A and B are **clusters and scenarios**, not single logical resources — which violates fixture protocol `P-1`, declared in R4 by this same author. `16/16` is withdrawn. **`§E8.3` splits the evidence into three tables with one unit each: resource-level (25 rows) · scenario-composition (4) · kind-coverage (21), never summed.** The row-level analysis below stands as evidence; the aggregate does not.

**All fourteen rerun, not just the amended ones, because the facet and relation changes are cross-cutting.** Pre-`AMM-C2` = the R4 result at `§E6.6`/`§E6.7`.

| # | Case | R4 (`AMM-C1`) | R5 (`AMM-C2`) | What changed |
|---|---|---|---|---|
| 1 | Reactor | PASS *(post-`A-1`/`A-2`)* | **PASS** | `naming_status = naming_gate_open` **and** `naming_constraints = [name_prohibited_in_implementation]` — two facets, previously one field |
| 2 | GCE *(4 existing + 1 proposed)* | PASS | **PASS** | components decomposed; `interface_contract` at `completeness_maturity = declared_unauthored`, `lifecycle_state = accepted` |
| 3 | domain contract | PASS | **PASS** | `normative_force = binding` · `canonicality_role = canonical_domain` · `ratification_state = unratified` · `lifecycle_state = in_review` — the R4 two-value problem now spans four facets, none overloaded |
| 4 | operating profile *(`FIXTURE_ONLY`)* | PASS | **PASS** | `binding_time` correctly **absent** — it belongs to the mechanism, not the rule (`§E7.1.6`) |
| 5 | deployment profile *(`FIXTURE_ONLY`)* | PASS | **PASS** | `derivation = constraint` ⇒ loosening structurally unavailable; `binding_time = install_or_deploy` on its variation mechanism |
| **6a** | **`architecture_map`** — System Map, real | *(was typed `view`)* | **PASS** | **restructured.** Typed as the `architecture_map` it declares itself to be; `indexes` the contracts; **not forced into `view`** |
| **6b** | **`view`** — `FIXTURE_ONLY` `FX-VIEW-01` | — | **PASS** | `governed_by` a viewpoint; `part_of` an architecture description; may be `part_of` more than one |
| **6c** | **`viewpoint`** — `FIXTURE_ONLY` `FX-VP-VIEW-01` | — | **PASS** | frames named concerns; specifies model kinds; **separately specifiable from any one description** (42010, mechanism only) |
| 7 | cross-cutting standard | PASS *(post-`A-1`)* | **PASS** | `home_plane = P0`, `constrains_planes = [P0,P1,P2,P3,P6]`; `revision_id = absent` is *representable* — and its consequence is `G1-FIND-22` |
| 8 | reusable pattern | PASS *(post-`A-3`)* | **PASS** | `declaration_completeness = absent` now carries what R4 crammed into `authority_level = unstated` |
| 9 | generated snapshot *(`FIXTURE_ONLY`)* | PASS | **PASS** | **corrected**: `lifecycle_state = emitted` · `ratification_state = not_applicable`. R4's `ratified_active` was a category error |
| 10 | conformance suite | PASS | **PASS** | now `AR --verified_by--> AR(conformance_suite)` with `CR(test_script) --carries--> revision`. R4 pointed `verified_by` at a carrier |
| 11 | implementation proof | PASS | **PASS** | `AR(implementation) --realizes_interface--> AR(domain_contract)`, `implemented_by` resource→resource, three carriers |
| 12 | proposed-but-unaccepted decision | PASS | **PASS** | `ratification_state = unratified` · `lifecycle_state = in_review` · `disposition = none` |
| **A** | one source, five contextual forces | **FAIL → PASS** *(post-`A-4`)* | **PASS, corrected** | **`not applicable` removed from `normative_force`.** Now `applicability_result ∈ {applicable, conditionally_applicable, not_applicable, undetermined}` ⟂ `normative_force` (evaluated **only** when the result is affirmative or conditional) ⟂ `disposition` ⟂ `decision`. `source_edition` pinned; OMNI's own descriptor of the source separately revisioned |
| **B** | operator variation *(Henry Ford)* | **VIOLATION — not a pass** | **PASS, corrected** | **The R4 row assigned two `primary_kind`s to one resource.** Now four resources: `FX-OR-01` `external_source` (the customer's statement, attributed to its requester) → `FX-AC-06` `applicability_claim` (OMNI's assertion *about* it) → `FX-AD-01` `applicability_decision` → outcome ∈ {profile value inside a declared variation point · architecture-change proposal · rejection · conditional support}. **The customer's statement and OMNI's claim about it are not the same resource** |

**R4's representability result is formally withdrawn.** `14/14` was **13/14 at best**: Case B was a rule violation, not a pass, and Case A carried an invented force value. **R5 result: 14 cases + 2 added view sub-cases = 16 tested, 16 representable.**

> **And `16/16` is a weaker claim than it looks.** Representability measures whether the model can *express* something. It says nothing about whether the model is *right*, whether OMNI needs the kind, or whether the constraint is well-chosen. R4's `14/14` was independently falsified within one review round — **this number should be treated as provisional until it survives the same treatment.**

---

## §E7.4 — Negative controls rerun · graded by evidential strength

**The circularity critique is answered by grading, not by deletion.** A control that fails *because the author wrote the rule it tests* is weak evidence, and saying so is the difference between a fixture and a formality.

| # | Control | R5 result | Strength | Why |
|---|---|---|---|---|
| NC-1 | one carrier, many logical resources | **PASS** | **STRONG** | `carries` n:m is a *structural* fact, verifiable against `06` (115 rows) and `08` (250 rows) independently of any policy I wrote |
| NC-2 | one resource, many carriers | **PASS** | **STRONG** | `implemented_by` 1:n; verifiable against `lib/auth/capabilities.ts` + migrations + call sites |
| NC-3 | generated resource, hand edit must fail | **FAILS AS REQUIRED** | **STRONG (`[KND]`)** | `writable_by = nobody` and byte-reproducibility are definitional for a derived kind — corroborated by FHIR's snapshot being *"not dependent on any other structure"* and computer-generated |
| NC-4 | `conforms_to` a proposal must fail | **FAILS AS REQUIRED** | **INHERITED** | `GRD-036` — nothing is truth until promoted. **And `AMM-C2` now supplies the missing legal path: `evaluated_against`**, which is what this fixture actually does to `AMM-C2` |
| NC-5 | carrier category ≠ architecture role | **PASS ×2** | **STRONG** | two axes on two different objects; verifiable against 15/15 contracts and this carrier |
| NC-6a | projection owns canonical truth must fail | **FAILS AS REQUIRED** | **INHERITED** | `DEC-033` / `T0-15`. **Narrowed in R5**: only `owns_canonical_truth` is forbidden; `owns_definition` is *permitted*, per the System Map's own grant to the Operating-Intelligence layer |
| NC-6b | nonbinding supersedes binding must fail | **FAILS AS REQUIRED** | **INHERITED (rewritten)** | R4 blocked it with an unsound total order. R5 blocks it with **one forbidden transition between two named force values** — the `B-1` shape, and no ranking |
| NC-7 | raw evidence auto-promoting into binding law | **FAILS AS REQUIRED** | **INHERITED** | `promoted_by → decision` required for any force or ratification increase — `GRD-036` as a graph precondition |
| NC-8 | operator preference loosening a universal prohibition | **FAILS AS REQUIRED — residue now smaller and precisely stated** | **PART `[KND]`, PART WEAK** | **Materially improved by FHIR:** with `derivation = constraint`, loosening is *structurally* unavailable rather than policed `[KND]`. The remaining residue is narrow and honest: **two prose rules cannot be compared by any mechanism** → `[CAN→6]`. R4 called the whole thing a pass with an unresolved footnote |
| NC-9 | deployment value as global amendment | **FAILS AS REQUIRED** | **WEAK — declared as such** | Blocked by a `scope` precondition **I wrote**. Nothing independent corroborates it yet; the escalation path (`architecture_change_proposal`) is charter §6.2's **candidate** mechanism, not installed law. **Counting this as proof would be circular** `[CAN→3]` |

**Ten controls (9 required, NC-6 split into its two instances): 4 STRONG · 4 INHERITED · 1 mixed · 1 WEAK-and-declared.** **Only the STRONG and INHERITED rows are evidence about the estate. The weak rows are evidence about my own consistency and are labelled so no future pass mistakes them for validation.**

---

## §E7.5 — `estate_validation` recomputed from the four declared conjuncts

> **★ CORRECTED IN R6 — THE OWNER TEST BELOW IS WITHDRAWN AND THE TOTAL WITH IT.** *“Is there a named party entitled to change this resource?”* is **not ownership** — it conflates accountable owner, authorized writer, accepting authority, reviewer and repository routing, which §4.6 of this carrier exists to keep apart. **Case 12's `PASS` is withdrawn** (`required_reviewer` is an accepting authority, and separation of duties may forbid the accepter from authoring) and **case 6a's with it**. Recomputed over a consistent unit with the owner conjunct decomposed at **`§E8.4`: 3 `PASS` · 11 `FAIL` · 11 `NOT_INSTANTIATED` of 25 tested logical resources.**

**`§E6.3`'s criterion is a four-part conjunction** — *"a real OMNI instance… at a known authority and lifecycle state, with a rightful owner and a usable home."* R4 reported it as one scalar and let two verdicts float above defects its own rows recorded. **The three values are unchanged; the derivation is now shown.**

**Rule:** all four ⇒ `PASS` · no instance ⇒ `NOT_INSTANTIATED` · instance exists and ≥1 conjunct fails ⇒ `FAIL`. **Owner test applied uniformly: is there a named party entitled to change THIS resource?**

| # | Case | authority | lifecycle | **owner** | home | R4 | **R5** |
|---|---|---|---|---|---|---|---|
| 1 | Reactor | ✓ `analysis_nonbinding` | ✓ `analysis_closed` | **✗** run roles only; no standing seat | ✓ | PASS | **FAIL** |
| 2 | GCE | vector | vector | vector | vector | NOT_INST | **FAIL** |
| 3 | domain contract | ✓ `canonical` | ✓ `draft_for_ratification` | ✓ RBAC domain owner + declared review gate | ✓ | PASS | **PASS** |
| 4 | operating profile | — | — | — | — | NOT_INST | **NOT_INSTANTIATED** |
| 5 | deployment profile | — | — | — | — | NOT_INST | **NOT_INSTANTIATED** |
| 6a | `architecture_map` (System Map) | ✓ `canonical` | ✓ `active_skeleton` | ✓ document-scoped review gate + steward | ✓ | *(n/a)* | **PASS** |
| 6b | `view` | — | — | — | — | *(n/a)* | **NOT_INSTANTIATED** |
| 6c | `viewpoint` | — | — | — | — | *(n/a)* | **NOT_INSTANTIATED** |
| 7 | cross-cutting standard | ✓ `governance_binding` | ✓ `active` | **✗** `06`'s gate covers *new guardrail promotion*, not stewardship of an existing row; no per-row owner; no `enforced_by` edge resolves | ✓ | PASS | **FAIL** |
| 8 | reusable pattern | **✗** no passport | ~ *"Reference doc"* | **✗** none recorded | ✓ | FAIL | **FAIL** |
| 9 | generated snapshot | — | — | — | — | NOT_INST | **NOT_INSTANTIATED** |
| 10 | conformance suite | **✗** | **✗** | **✗** no routing entry located | ✓ | FAIL | **FAIL** |
| 11 | implementation proof | **✗** | **✗** | **✗** no routing entry located | ✓ | FAIL | **FAIL** |
| 12 | proposed decision | ✓ `analysis_nonbinding` | ✓ `open` | ✓ `required_reviewer` per row + `08`'s per-row closure gate | ✓ | PASS | **PASS** |
| A | one source, five forces | — | — | — | — | NOT_INST | **NOT_INSTANTIATED** |
| B | operator variation | — | — | — | — | NOT_INST | **NOT_INSTANTIATED** |

**Case 2 component vector** *(dominance `FAIL ≻ NOT_INSTANTIATED ≻ PASS`, split shown so nothing is buried)*: GCE spine `PASS` · `GRD-033` **`FAIL`** (owner, same basis as case 7) · `GRD-034` **`FAIL`** · `DEC-036` `PASS` · boundary contract `NOT_INSTANTIATED` ⇒ case **FAIL**. **R4 reported `NOT_INSTANTIATED`, which hid two owner failures behind a missing artifact.**

**Case 12 defended against the review's hedge.** The review suggested a required reviewer and proposed destination *"are not automatically the rightful owner."* True in general — but `08`'s Queue Contract declares *"Review gate: User/Knox closure required **per row**"* and each row carries `required_reviewer`. **For an open decision resource, the party entitled to close it is the party entitled to change it.** `PASS` stands.

**One judgment call, flagged as such.** Cases 6a and 7 turn on the same question and resolve differently: the System Map's review gate covers **the document as a whole**, and the map *is* one resource; `06`'s gate covers **promotion of new guardrails**, so changing an existing row's `severity` or `status` has no named owner. That distinction is thin, and a steward may overturn it — in which case case 6a becomes `FAIL` and the tally moves to **2 PASS / 7 FAIL / 7 NOT_INSTANTIATED**. **Stated rather than hidden, because the aggregate should not depend on an unmarked judgment.**

### §E7.5.1 — Recomputed aggregate

**Sixteen tested resources** (14 cases, with case 6 split into 6a/6b/6c):
- **`PASS` = 3** — cases 3, 6a, 12
- **`FAIL` = 6** — cases 1, 2, 7, 8, 10, 11
- **`NOT_INSTANTIATED` = 7** — cases 4, 5, 6b, 6c, 9, A, B
- `3 + 6 + 7 = 16` ✔

**R4's `4 PASS · 3 FAIL · 7 NOT_INSTANTIATED` is withdrawn.** The corrected picture is materially worse and materially more useful: **three of sixteen resource kinds are both instantiated and governed.** Six exist and are ungoverned — up from three, because the owner conjunct was applied instead of noted.

> **★ CORRECTED IN R6 — the number was right in spirit and wrong in construction.** *“Three of sixteen architecture resource **kinds** are both instantiated and governed”* is false twice: the sixteen rows were **not kinds**, and three of them were **not single resources**. Corrected at `§E8.4.2`: **3 of 25 tested logical resources satisfy the predicate** — a statement about the fixture, **not a census of OMNI**. **The point survives intact and gets sharper:** a substrate whose own architecture resources lack recorded owners cannot later prove who changed a rule, when, or under what authority — and `§E8.4.1` now shows why, measured: **one of four governance ledgers records an owner at all.**

---

## §E7.6 — Corrected estate language

**The arc's own `L-5` law — a search miss is not proof of absence — was quoted at §7.3 and violated three times in R4.** Corrected forms; the underlying findings survive, the universal quantifiers do not.

| R4 claim | Corrected |
|---|---|
| *"no generated artifact exists estate-wide"* | **No explicitly marked generated artifact was located** by a repository-wide lexical search for `DO NOT EDIT` · `@generated` · `autogenerated`. A generated file without a marker would not be found. **No `structured_descriptor` carrier was located**, so R8 §3.1's snapshot has no located producer |
| *"zero `applicability_claim` instances exist estate-wide"* | **No declared applicability-claim object was located** in the inspected controlling carriers; `ingestion/regulatory_compliance_evidence/` contains one file (`_lane.md`). Regulatory material elsewhere remains unassessed |
| *"no `viewpoint` resource exists estate-wide"* | **No viewpoint resource with declared concerns, model kinds or construction conventions was located.** **And the estate refutes the strong form directly: `AB-25` names an *assurance viewpoint* and `AB-32` a *human-factors viewpoint*.** R4 recorded both as residues and then wrote the universal claim anyway. Accurate: **two viewpoints are named and none is specified** — which is what `B-10`/`G-04` already says |
| *"GCE turned out to be five resources"* | **Four addressable GCE resources were located in the inspected estate** (spine pattern · `GRD-033` · `GRD-034` · `DEC-036`); **this proposal identifies a fifth required boundary-contract resource that is not instantiated.** The fifth is proposed here, **not discovered** — `G-18` already owned that gap |
| *"`lib/auth/` and `scripts/` have no owner"* | **No `CODEOWNERS` routing entry and no resource-level ownership descriptor was located** for them. **A missing entry does not prove no owner exists; an entry does not prove hosted enforcement is enabled** — branch protection was not inspected, and AGENTS.md's own note about the checkpoint workflow being *"merge-blocking only once marked a required status check"* applies equally here |
| *"the conformance suite is runnable by nothing"* | **The suite is manually runnable** and its header states its provenance. It is **wired into neither `package.json` nor any CI workflow**, so it is **not a continuously enforced conformance mechanism** — which is the finding that matters |

---

## §E7.7 — Findings added in R5

**`G1-FIND-19` — decomposing the axes does not protect the values, and that is a distinct failure mode.** `AMM-C1` separated thirteen distinctions at the top level and then **re-collapsed four of them inside individual value sets and one table row**: `authority_level` (force + canonicality + evidentiary use + declaration completeness), `lifecycle_state` (lifecycle + maturity + ratification + disposition), `naming_state` (state + policy), and Case B (two kinds on one resource). **The estate's recurring defect is malformed enums; this pass shows the defect survives a correct top-level decomposition by hiding one level down, inside the enum.** Guardrail candidate, **captured not promoted** (`GRD-036`): *an axis is only decomposed if each of its values answers exactly one question.* → `architecture_steward`.

**`G1-FIND-20` — a model that cannot represent the act validating it is not self-hosted.** `AMM-C1` offered only `conforms_to`, which requires an accepted target — so **the fixture evaluating resources against `AMM-C1` was itself unrepresentable in `AMM-C1`.** Fixed by `evaluated_against`. This is the carrier's own guardrail candidate 3 recurring one level up. → resolved in `AMM-C2`.

**`G1-FIND-21` — scalar authority was recreated on the one operation that changes OMNI's law.** §4.2 withdrew a flat enum over unlike kinds; §4.9 names no-scalar-authority as a candidate standard; R4 then ordered eight mixed values and used the ordering to authorize `supersedes`. **The failure mode is not pedantic: a ranking in which a process doctrine outranks a domain contract authorizes overwriting domain truth.** → resolved in `AMM-C2`; the six-condition supersession transaction is `[CAN→3]` for content.

**`G1-FIND-22` — under R8's own citation rule, 115 guardrail resources are uncitable.** R8 §3.1: *"`resource_id` + version is the citable unit."* `06` rows carry no version and no effective interval. **A claim of the form "this deployment complied with `GRD-033` as of March" cannot be pinned, reproduced or defended** — which is precisely the artifact a payer, a regulator or an acquirer asks for. → `architecture_steward`, G2.

**`G1-FIND-23` — non-loosening is better designed away than policed.** FHIR's `derivation = constraint` cannot define new elements, only add rules to existing content, so **loosening is structurally unavailable rather than checked**. R4 wrote it as a policy precondition and deferred the semantics. The residue is now narrow and precise: prose rules cannot be compared by mechanism. → `[CAN→6]`.

**`G1-FIND-24` — `binding_time` was missing entirely, and it belongs to the mechanism, not the rule.** SEI separates *variable part* (location) / *variation mechanism* (how) / *binding time* (when the variant is selected: design · compile · install · startup · runtime). `AMM-C1` had none of it. **For OMNI the distinction is load-bearing: a variation bound at deployment configuration is a different object from one bound per care decision, and conflating them is exactly how a deployment value becomes a clinical policy.** Also: **SEI's own report declines the term *"variation point"*** as ambiguous, preferring *variable part* as an organizing container — recorded, and the OMNI name is kept per Build OS `09`'s vocabulary-discipline clause. → `AMM-C2`; composition remains Output 5.

**`G1-FIND-25` — two independent mechanisms corroborate §3's boundary rule.** AUTOSAR: a component *"communicates with the outside world exclusively using ports"*, with internal behavior and implementation as **separate descriptions**. IHE: internal communication between grouped actors *"is not specified"*, yet the actors must still *"be capable of communicating with actors on other systems using the defined IHE interfaces."* **Internal-model equivalence not required; boundary conformance mandatory** — reached twice, independently, in unrelated domains. `G-18`'s gap is unchanged: the home exists, the contract content does not. → §C authoring / G3.

**`G1-FIND-26` — the Artifact Index needs a key, not a successor.** Demonstrated many-to-many in both directions (`§E7.2`), so neither it nor `primary_kind` refines the other. **Proposed: the Index gains `admissible_kinds[]` and keeps `governance_binding`.** The kind registry is **reopened** — R4's *"closed at seventeen"* and *"granularity is `part_of`, not a longer list"* are both narrowed. → `architecture_steward`.

---

## §E7.8 — Output-1 state · `AB-08` · what this pass does NOT claim

| Field | Value |
|---|---|
| **Output 1** | **`AMM_C2_RERUN_DONE · NOT_COMPLETE · AWAITING_INDEPENDENT_REVIEW`.** R4's `COMPLETE_AS_PROPOSAL` is **withdrawn**. After a review round that found three self-contradictions in the candidate, self-certifying its replacement one revision later would be the same error wearing a new number |
| **`representability`** | **16/16 on `AMM-C2`** — and explicitly provisional. R4's `14/14` was **13/14 at best** and is withdrawn: Case B was a rule violation and Case A carried an invented force value |
| **`estate_validation`** | **3 PASS · 6 FAIL · 7 NOT_INSTANTIATED** of 16, derived from four declared conjuncts per row. R4's `4/3/7` is **withdrawn**. One judgment call is flagged; if overturned, `2/7/7` |
| **Negative controls** | 10 instances behave as required, **now graded**: 4 STRONG · 4 INHERITED · 1 mixed · **1 WEAK and declared so.** Only the first two grades are evidence about the estate |
| **`AB-08`** | **`AB-08_REMAINS_OPEN__FALSE_SINGLE_COUNT_REJECTED__AMM_C2_SUBMITTED_FOR_REVIEW`**. The surviving substantive conclusion: **adopt neither "17 classes" nor "5 tiers"** — the two designs compared different classification functions (carrier genre · logical kind · placement policy · granularity). **The R4 `PROPOSED_CLOSURE_ON_REPRESENTABILITY` disposition and its steward fork are both withdrawn:** the fork asked the steward to choose a reading of the closure condition, when the row is about taxonomy granularity and the estate defects are separately routed. **The three estate failures are NOT `AB-08` closure criteria** |
| **Minted** | **nothing.** No route, catalog, gate, checkpoint, handoff, registry, lane, FWREG row, guardrail, artifact, branch or PR. `G1-FIND-19`'s guardrail candidate is **captured, not promoted** (`GRD-036`) |
| **External sources** | 42010 · SEI · FHIR · IHE · AUTOSAR consulted as **mechanism probes only**. **No conformance owed or claimed to any of them; no standards programme opened; no map asserted to be a 42010 view** |
| **Output 2** | **NOT STARTED**, and must not start before the steward disposes `AB-08` and accepts, amends or rejects `AMM-C2` |
| **Owed, declared** | the **catalog row's `status` column** reads `g1_carrier_R3_...` and is two revisions stale. **Route `9v-ii` needs nothing** — it carries path, trigger, read rule, authority, lifecycle and promotion condition, and no content description; R4's claim that it needed repointing is withdrawn, and acting on it would have pushed Output-1 narrative into a routing surface |

## §E7.9 — Source posture for R5

**Read fully:** the independent review of R4 in full · this carrier's `§E6.5`–`§E6.12` re-read against the review's specific claims *(the three self-contradictions were verified in the live file before any amendment was designed, not taken on the reviewer's authority)* · `doctrine/00_architecture_artifact_index.md` re-read for the placement-policy reconciliation · the catalog row for this carrier · read-graph route `9v-ii` *(to test the repointing claim — it failed the test)*.
**Consulted deeply — the four targeted mechanism sections the review correctly identified as owed, and nothing beyond them:** **FHIR** `StructureDefinition` derivation kinds (`specialization` vs `constraint`), canonical URL vs author-assigned version, differential vs snapshot semantics · **SEI/CMU** *Variability in Software Product Lines* §2.4 — variable part / variation mechanism / binding time, **and its explicit rejection of the term "variation point"** · **IHE** General Introduction ch. 6–7 + ITI TF Vol. 1 ch. 2 — actors/transactions/content modules, Required Actor Groupings across profile boundaries, the multi-profile obligation-union rule, internal-communication-unspecified, *"IHE is not a certifying body"*, Integration Statements, named options · **AUTOSAR** port interface vs `SwcInternalBehavior` vs implementation description. **Mechanism probes only — nothing adopted, no conformance owed or claimed, no standards programme opened.**
**Located / searched:** `06` and `08` row counts recomputed (**115** and **250**) · `08`'s Queue Contract review-gate wording (for the case-12 owner test) · the System Map's Operating-Intelligence grant (*"may own derived views / metric-defs / lineage / freshness / explainability, never source truth"* — which falsified R4's blanket `P4/P5 may not own`) · `AB-25`/`AB-32` viewpoint namings in `§E1` (which falsified R4's *"no viewpoint estate-wide"*).
**Not inspected — declared, not discharged:** the remaining Lane-1 sources (Palantir · Backstage · IBM · LangGraph/LangSmith · OPA · OpenRewrite · Argo CD · OpenTelemetry · AWS lenses) · the full text of any of the five consulted standards beyond the sections named above · C3.8 G1b/G3 · Polaris · Platform + Accountability · C4.6 · federation-permeability · the six AI-corpus registries · the founding-thread verbatims · raw PRE-0 submissions · Insurance and Care history. **`B-8` is unchanged by this pass** — four targeted mechanism sections is not the source floor.
**Live-repository verification:** entered at `e7b5ec8153feb0354eb664a0173c5193cbc78649`, the exact head the review named — **no advance to reconcile.** Boot Freshness Check **PASS** (`AGENTS.md` pointer = read-graph Tier-0 #15 = `HANDOFF_2026-08-10_foundational_architecture_g1_startable.md`; checkpoint `§1` banner agrees); `check-checkpoint-pointer.mjs` **PASS**; exactly one file modified.

---

# §E8 — Output 1 · R6 · `AMM-C3`, consistent fixture units, and three predeclared holdouts

> **`§E7` (`AMM-C2`) is preserved as the R5 evidence-bearing candidate and is not rewritten.** Corrections are marked in place with `★ CORRECTED IN R6`.
>
> **The R5 review's central charge is upheld against the artifact: `AMM-C2` reproduced the exact defect its own new falsifier `F-07` describes.** The top-level decomposition improved and incompatible meanings stayed fused one level down — in `normative_force`, in `canonicality_role`, in `authority_basis`, in `lifecycle_state`, and in the owner test. **Twice in a row now, the decomposition was better than the values inside it.**
>
> ## ★ R6 RECORD — SUPERSEDED BY `§E9`, PRESERVED IN FULL
> **`AMM-C3` was independently reviewed and not accepted, and the review found a FACTUAL error I made and did not catch.** The canonical `## Ledger Contract` in `05` has **no `owner` column**; the owner field I reported belongs to an `analysis_nonbinding` Insurance child table lower in the same file. **My search pattern omitted `item_id` and matched only the child table, which I then reported as “the `05` schema”** (`§E9.0`).
> **Withdrawn from this block:** `G1-FIND-29` as worded · H-1's `estate_validation = PASS` · **all three** `PASS` verdicts · the **3 `PASS` · 11 `FAIL` · 11 `NOT_INSTANTIATED`** aggregate · *“the single cleanest estate result in the fixture”* · *“exactly the relation-assertion shape”* · four remaining value collapses · the un-terminated assertion recursion.
> **`AMM-C4` is at `§E9`. Nothing here is deleted.**
>
> **And the aggregation was invalid on its own protocol.** R4 declared fixture-protocol `P-1` — *a case naming a cluster must be decomposed to single logical resources before testing.* R5 decomposed GCE **inside its row block** and then counted it as **one row** under a dominance rule. `16/16` and `3 PASS · 6 FAIL · 7 NOT_INSTANTIATED` are **withdrawn**: their sixteen rows mixed single resources, clusters and scenarios, so the denominator was not a consistent unit and *"three of sixteen architecture resource **kinds** are both instantiated and governed"* was wrong twice over — the rows were not kinds, and several were not single resources.

## §E8.0 — Review receipt

| # | R5 review finding | Disposition | Basis |
|---|---|---|---|
| 1 | **The fixture aggregates unlike units;** withdraw `16/16` and `3/6/7`; split into resource-level · scenario-composition · kind-coverage tables | **ACCEPTED IN FULL** | Verified: of 16 rows, **13 were single resources, 3 were clusters or scenarios** (GCE, Case A, Case B). **This violated `P-1`, which R4 itself declared.** Three tables at `§E8.3`, never summed |
| 2a | **`normative_force` still mixes force with epistemic use** (`evidentiary`, `informative` are roles, not force) | **ACCEPTED, with one value-set refinement** | Correct: a resource can be binding **and** evidence-bearing. But `binding \| nonbinding \| none` carries its own redundancy — `nonbinding` and `none` collapse. **A proposed guardrail states a norm that does not yet bind; an evidence capture states no norm at all.** `AMM-C3`: `normative_effect ∈ {binding, states_norm_unbound, no_norm}` ⟂ multi-valued `epistemic_role[]` |
| 2b | **`canonicality_role` mixes source-of-truth scope, provenance and architectural function** | **ACCEPTED IN FULL** | Correct, and it was redundant too: `canonicality_role = projection` said the same thing as `home_plane = P4`. Splits into `truth_authority` ⟂ `derivation_provenance`, with scope supplied by the existing `scope` facet |
| 2c | **`authority_basis` bundles four different relations** | **ACCEPTED IN FULL — and the estate explains why I made this error** | §4.6 of **this carrier** already separates seat / accountable principal / exercising actor / grant, and `AMM-C2` re-fused them one section later. **`§E8.4.1` shows the deeper cause: of the four governance ledgers, exactly one records an accountable owner** — `05` has an `owner` column, `03` has none, `06` records an *enforcer*, `08` records a *reviewer*. **The metamodel inherited the estate's own confusion by typing the fields it could see** |
| 3 | **Lifecycle and naming still partly collapsed;** `accepted` duplicates `ratification_state`, `withdrawn` duplicates `disposition`, `superseded` should be derived | **ACCEPTED IN FULL, and generalized** | Verified — `AMM-C2` contained genuine cross-facet duplication. Five facets at `§E8.1.1`. **Generalized into a rule: any state derivable from a relation may not also be independently assertable, or the two will drift** — which is `C-11`/`C-12` and `F-06` (*a count outliving its table*) recurring in state rather than in prose (`G1-FIND-27`) |
| 4 | **Revision semantics fuse technical revision, business version and content identity; and relations are timeless edges over revisioned nodes — a $10B blocker** | **ACCEPTED IN FULL — the most important correction in this pass** | Correct, and decisive: R8 §3.1 object 3 defines the snapshot as *"frozen resolution of every relation at `as_of`"*. **You cannot freeze what was never timestamped.** `AMM-C2` had revisioned nodes and timeless edges, so *"what was in force on date X"* was unanswerable **by construction** (`§E8.1.3`) |
| 5 | **The relation table contradicts its own "resource → resource" claim** | **ACCEPTED IN FULL — the claim was wrong, the table was not** | Verified: `owns_canonical_truth → fact`, `applies_to → context tuple`, `carries → revision`, `promoted_by → decision`. `AMM-C3` takes the second option offered: **typed value-object endpoints declared explicitly**, rather than promoting *fact* and *context* to architecture resources, which would be a category expansion nothing justifies |
| 5b | **`part_of n:m` overgeneralized from one 42010 sentence; cardinalities should be `0..n`** | **ACCEPTED IN FULL** | Correct — 42010 says a *model* may be part of more than one view; that licenses **view participation**, not universal multi-parent containment. Split into five relations at `§E8.1.5`. And `1:n` wrongly implied every resource must have ≥1 implementation or verifier; **most normative resources legitimately have zero** |
| 6 | **The owner test conflates owner, writer, accepter, reviewer and enforcement; cases 12 and 6a are not proven `PASS`** | **ACCEPTED IN FULL** | R5's test — *"is there a named party entitled to change this resource?"* — is **not ownership**, and `AMM-C2`'s own §4.6 says so. **Case 12 is withdrawn from `PASS`**: `required_reviewer` names an accepting authority, and separation of duties may *prohibit* the accepter from authoring. R5 defended it with exactly the conflation under review. Four ownership sub-facts at `§E8.4` |
| 7 | **The Artifact Index reconciliation is not established;** current placement may be the drift the Index exists to detect | **ACCEPTED IN FULL — and my R5 evidence was worse than the review suspected** | Two errors found on re-inspection. **(a) `06` is the *Guardrails* role, not the *Doctrine* role** — the Index lists them separately — so *"Doctrine holds `standard`"* was wrong. **(b) `D0THES-DEC-036` IS a row in `03`**; the posture document *references* it. So *"one kind in three homes"* was **partly reading drift as design**, exactly as charged. Placement is a **predicate over several facets**, not a lookup on `primary_kind` (`§E8.2`) |
| 8 | **The FHIR transfer is overstated** — *"loosening is structurally impossible, not policed"* | **ACCEPTED IN FULL** | Correct, and it is the same error this carrier criticizes elsewhere: claiming a mechanism *discharges* an obligation. Corrected form at `§E8.6`: a `constraint` derivation makes non-loosening **validator-checkable against a pinned base**; it does not self-enforce because the field is present |
| 9 | **Narrow the SEI claim to the 2005 report; `binding_time` placement is OMNI synthesis, not inherited law** | **ACCEPTED IN FULL** | Correct on both. *"SEI declines the term"* → **that report** declines it. And *"binding time belongs to the mechanism, never the rule"* was labelled `[KND]` when it is a **synthesis** — relabelled `[CAN→3/5]`. **A provenance-labelling scheme is worthless if its author mislabels his own inventions as inherited** |
| 10 | IHE and AUTOSAR transfers hold | **NOTED** | Unchanged; comparator mechanisms, not OMNI authority |
| 11 | **The R5 rerun is in-sample fitting; add three predeclared holdouts** | **ACCEPTED IN FULL, and strengthened** | Correct and important: `16/16` meant *"`AMM-C2` can represent the cases `AMM-C2` was built around."* Holdouts predeclared **before** running at `§E8.5`. **Strengthened by grading them:** two of the three are kinds `AMM-C2` had already *named* in its own registry, so I knew they were coming — **only the `05` conflict row is genuinely unseen structure**, and only its result carries full weight |
| 12 | **"115 guardrails are uncitable" is too absolute** | **ACCEPTED IN FULL** | They are citable by id, path, commit and row. The precise gap is the absence of first-class resource revision and effective interval under R8's model — corrected wording at `§E8.6` |
| 13 | *(added)* **Relation assertions are themselves architecture resources, and the review's own fix implies a recursion it did not state** | **ADDED** | If an assertion carries identity, interval, provenance and a governing decision, it has a lifecycle and an authority basis — **so the descriptor model must be able to describe an assertion, and the snapshot must freeze assertion-revisions, not only resource-revisions.** Otherwise the as-of graph is half-built (`§E8.1.3`, `G1-FIND-28`) |
| 14 | *(added)* **The estate records reviewers and enforcers and systematically does not record owners** | **ADDED** | Measured across all four governance ledgers at `§E8.4.1`. This is why the metamodel kept substituting reviewer for owner, and it is a finding about **OMNI**, not about the metamodel (`G1-FIND-29`) |

---

## §E8.1 — `AMM-C3`

> **Provenance labels retained and now applied honestly.** `[INH]` inherited law only represented · `[KND]` kind-definitional · `[CAN→n]` candidate routed to Output *n*, **recorded not settled**. **Two `AMM-C2` labels were wrong and are corrected:** `binding_time` placement `[KND]` → `[CAN→3/5]`, and FHIR non-loosening `[KND]` → `[KND]` for the *structural* half, `[CAN→6]` for the semantic half.

### §E8.1.1 — Facets: every field answers exactly one question

| `AMM-C2` field | Fused questions | `AMM-C3` |
|---|---|---|
| `normative_force` | force **+** epistemic use | **`normative_effect`** ∈ `binding` · `states_norm_unbound` · `no_norm` ⟂ **`epistemic_role[]`** ∈ `evidence` · `analysis` · `reference` · `implementation_proof` · `normative_statement`. **For an `external_source`, `normative_effect` is undefined** — force belongs to the applicability decision, per §7.3's own rule `[INH]` |
| `canonicality_role` | truth scope **+** provenance **+** architectural function | **`truth_authority`** ∈ `canonical_for_scope` · `none` *(the scope comes from `scope`, which is why a seam contract can be `canonical` for one boundary — `§E8.5` H-3)* ⟂ **`derivation_provenance`** ∈ `authored` · `derived` · `generated` — **★ CORRECTED IN R7: two questions again. A snapshot is derived **and** generated; a hand-written synthesis is derived **and** authored. Splits into `content_derivation` ⟂ `production_mechanism` (`§E9.5`).**. **Projection-ness is dropped as redundant** — `home_plane = P4` already says it |
| `authority_basis` | four different relations | **`accountable_owner`** (bears the consequence) ⟂ **`authorized_maintainer[]`** (may write) ⟂ **`accepting_authority`** (may accept/ratify) ⟂ **`review_requirement`** (what must occur before acceptance). §4.6's own split, finally honoured `[INH]` |
| `lifecycle_state` | decision **+** effectivity **+** generation **+** disposition | **`governance_decision_state`** ∈ `proposed` · `in_review` · `accepted` · `rejected` ⟂ **`effectivity_state`** ∈ `not_yet_effective` · `active` · `expired` ⟂ **`generation_state`** ∈ `authored` · `emitted` · `stale` *(derived kinds only)* ⟂ **`completeness_state`** ∈ `skeleton` · `partial` · `complete` · `declared_unauthored` ⟂ **`disposition`** ∈ `none` · `withdrawn` · `demoted_to_evidence` · `frozen_pending_gate` · `parked_with_trigger` |
| `ratification_state` | — | **absorbed into `governance_decision_state`**; `AMM-C2` carried the same fact twice |
| `lifecycle_state = superseded` | asserted state duplicating a relation | **removed as an assertable value.** Supersession is **derived** from a `supersedes` assertion plus `effective_to` `[KND]` |
| `naming_status` | name state **+** review state | **`name_status`** ∈ `named_accepted` · `named_provisional` · `unnamed` ⟂ **`naming_review_state`** ∈ `none` · `open` · `closed` ⟂ **`naming_constraints[]`** *(empty list means none; `none` removed as a member)* |

> **`G1-FIND-27` — the derived-state rule, generalized.** `superseded` was assertable **and** derivable, so the two could disagree. **Any state derivable from a relation must not also be independently assertable.** This is `C-11`/`C-12` and `F-06` — *a count outliving its table* — recurring in **state** rather than in prose. The estate's oldest defect has now appeared in three forms: a count outliving its evidence, a claim outliving its source, and a state outliving its relation.

### §E8.1.2 — Identity: four levels, not two

```
LogicalResource        resource_id        stable logical identity; survives rename, move, repackaging   [INH R8 §3.1]
ResourceRevision       revision_id        immutable revision identity (monotonic within resource_id)    [KND]
                       content_hash       immutable content identity, where the carrier permits it      [KND]
                       omni_version       OPTIONAL human/business release version                       [KND]
                       effective_from / effective_to
Descriptor             descriptor_id + descriptor_revision   — descriptor metadata evolves independently of the resource
ExternalSource         source_id + publisher_edition         — opaque, NEVER OMNI-written                [INH]
ExternalSourceDescriptor  OMNI's characterization — its own identity and revisions                      [KND]
```

**Three levels where `AMM-C2` had one.** FHIR keeps a stable canonical URL, an author-managed business version, and a server-assigned technical version apart, and **several technical versions may share one business version** — mechanism only, but the shape is the point. **R8's *"`resource_id` + version is the citable unit"* is preserved:** the citable unit is `resource_id + revision_id`, and `omni_version` is a human label over it, never the citation key.

### §E8.1.3 — Relation assertions are first-class, intervalled, and describable — **the `as_of` repair**

**This is the correction that decides whether R8 §3.1 object 3 can exist at all.** That object is defined as the *"frozen resolution of every relation at `as_of`"* and as *"the **only** object that answers what was true on date X."* `AMM-C2` gave every **node** a revision and left every **edge** timeless — so the snapshot had nothing to freeze, and the question was unanswerable by construction, not by omission.

```
RelationAssertion
  assertion_id                       stable identity
  assertion_revision                 immutable
  subject      → ResourceRevision                                   [KND]
  predicate    → declared relation type
  object       → ResourceRevision | declared TypedValue             [KND]  (see §E8.1.4)
  effective_from / effective_to      the interval the assertion held
  asserted_by  → seat                provenance
  governed_by  → decision revision   where the assertion is authority-bearing
  supersedes_assertion → assertion_revision
```

**`AR-1 rev 3 --verified_by--> Suite rev 7` is now a dated, attributed, supersedable fact.** When the suite moves to rev 8, the old assertion is closed with an `effective_to` and a new one opens; the graph as of any date is the set of assertions whose interval contains it. **Snapshot derivation becomes possible, and byte-reproducibility becomes checkable** — which is what R8 already required and could not have obtained.

> **`G1-FIND-28` — the recursion the review implied and did not state.** **★ CORRECTED IN R7 — **I opened the regress and did not terminate it.** If assertions are resources and descriptors describe resources, `describes` is itself an assertion needing a descriptor, forever. **Termination rule at `§E9.4`: M1 kernel relations are M2-governed FIELDS, not reified assertions; and a snapshot's schema version is a parameter of the snapshot, not a member of it.** An assertion with identity, revision, interval, provenance and a governing decision **is an architecture resource**. Therefore: **the descriptor model must be able to describe an assertion**, and **the snapshot must freeze assertion-revisions, not only resource-revisions.** Without both, the as-of graph is half-built — nodes reconstruct and edges do not. *(Bitemporality — assertion time versus effective time — is deliberately NOT settled here: `[CAN→3]`.)*

### §E8.1.4 — Endpoint honesty: the "resource → resource" claim is withdrawn

**The R5 table was right and its headline was wrong.** `AMM-C3` declares **typed value objects** as legitimate endpoints rather than pretending they are resources or promoting *fact* and *context* to architecture kinds:

| Declared `TypedValue` | Used by | Why not a resource |
|---|---|---|
| `TruthFact` — a named fact a domain owns | `owns_canonical_truth` | facts are domain state, not architecture description |
| `DefinitionArtifact` — a metric/rendering/lineage definition | `owns_definition` | belongs to the projection, which the System Map explicitly grants `[INH]` |
| `ContextTuple` — context · profile · jurisdiction · product · actor · `as_of` | `applies_to` | a coordinate, not a thing with a lifecycle |
| `ForceTransition` — a change in `normative_effect` or `governance_decision_state` | `promoted_by` | an event, captured as an assertion |

**Rule:** every relation declares its object type as `ResourceRevision` **or** a named `TypedValue`. **No relation may have an undeclared endpoint** `[KND]`.

### §E8.1.5 — `part_of` split; cardinalities normalized

`AMM-C2`'s single `part_of n:m` was generalized from one 42010 sentence about **models in views**. Five distinct relations, each with honest cardinality:

| Relation | Cardinality | Meaning |
|---|---|---|
| `contained_in` | `0..1` | structural containment — a clause inside its standard; **single-parent** |
| `member_of` | `0..n` | collection membership — a guardrail row in the `06` digest |
| `participates_in_view` | `0..n` | 42010 model-in-view; **the only relation the 42010 sentence licenses** `[INH]` |
| `included_in_profile` | `0..n` | profile inclusion |
| `decomposes_into` | `0..n` | inverse of `contained_in` |

**All other cardinalities restated as `0..n` / `1..n`.** `AMM-C2`'s `implemented_by 1:n`, `verified_by 1:n` and `evidenced_by 1:n` wrongly implied **every** resource must have at least one implementation, verifier or evidence object. **Most normative resources legitimately have none** — and in this estate, almost all of them do (`§E8.4`). Corrected to `0..n`.

---

## §E8.2 — Placement: a predicate, not a key — and my R5 evidence re-examined

**The R5 claim *"the Artifact Index is a placement policy and `primary_kind` is its key"* is narrowed, because the evidence for it was partly wrong.**

| R5 evidence | On re-inspection |
|---|---|
| *"the Doctrine role holds `standard` (the `06` rows)"* | **False.** The Artifact Index lists **Guardrails** as its own role with home `06_guardrail_antipattern_digest.md`. `06` sits inside `doctrine/` on disk, but **the Index's roles are role-scoped, not directory-scoped** — I reasoned from the filesystem |
| *"the Doctrine role holds `decision` (`DEC-036` in the posture document)"* | **Partly false.** `D0THES-DEC-036` **is a row in `03`** — the canonical Decisions home. The posture document *hosts the content and references the id*. That is plausibly **valid reference**, not a second home |
| *"`decision` appears in `03`, Doctrine and `08`"* | **Weakened.** `03` is the home; `08` holds *unresolved* items, which the Index defines as a **different role**; the Doctrine appearance is a reference. **The review's charge lands: I read current placement as intended design without testing it against the binding Index** |

**What survives, and it is enough for the narrower claim:** the Doctrine role does hold **more than one kind** — `pattern` (`coherent_omni_architecture_pattern_2026-05-17.md`, and the GCE spine inside the posture document) alongside constitutional invariants — so a one-role-one-kind mapping is still refuted. **But `primary_kind` alone cannot select a home**, and that is the real point:

```
placement_policy(
    primary_kind,
    governance_decision_state,     open decision → 08 · accepted choice + rationale → 03
    normative_effect,              binding invariant → Doctrine or Guardrails
    scope,
    epistemic_role[]               historical proposal → Evidence
) → canonical_home_role                                                    [CAN→3]
```

**`admissible_kinds[]` is therefore necessary and not sufficient**, and the R5 proposal is narrowed to match. **Nothing is written to the Artifact Index.** And the method rule this produced: **current placement is evidence of practice, never of policy — the Index exists precisely to detect the difference** (`G1-FIND-30`).

---

## §E8.3 — Three tables, one unit each, never summed

### §E8.3.1 — T1 · resource-level representability · **one row per logical resource, no clusters, no scenarios**

**25 logical resources.** `R` = real OMNI instance · `X` = external · `S` = `FIXTURE_ONLY` synthetic. **`representability` is the only dimension in this table**; estate validation is `§E8.4`.

| # | Logical resource | `primary_kind` | src | `representability` on `AMM-C3` |
|---|---|---|---|---|
| 1 | OMNI Reactor invariant set | `standard` | R | PASS |
| 2 | `D0THES-GRD-033` | `standard` | R | PASS |
| 3 | `D0THES-GRD-034` | `standard` | R | PASS |
| 4 | GCE governed-exchange spine | `pattern` | R | PASS |
| 5 | three-layer substrate pattern (05-17) | `pattern` | R | PASS |
| 6 | `D0THES-DEC-036` | `decision` | R | PASS |
| 7 | `D0-REV-010` | `decision` *(proposed)* | R | PASS |
| 8 | RBAC / Authority contract | `domain_contract` | R | PASS |
| 9 | GCE build-facing boundary contract | `interface_contract` | *(named, unauthored)* | PASS *(`completeness_state = declared_unauthored`)* |
| 10 | OMNI System Map | `architecture_map` | R | PASS |
| 11 | consequential-transition conformance suite | `conformance_suite` | R | PASS |
| 12 | `requireCapability` authority enforcement | `implementation` | R | PASS |
| 13 | ISO/IEC/IEEE 42010 | `external_source` | X | PASS *(`normative_effect` undefined; force lives on the claim)* |
| 14 | `FX-AC-04` regulated-product applicability claim | `applicability_claim` | S | PASS |
| 15 | `FX-OP-01` | `operating_profile` | S | PASS |
| 16 | `FX-DP-01` | `deployment_profile` | S | PASS |
| 17 | `FX-VIEW-01` | `view` | S | PASS |
| 18 | `FX-VP-VIEW-01` | `viewpoint` | S | PASS |
| 19 | `FX-SNAP-01` | `generated_snapshot` | S | PASS *(`generation_state = emitted`; `governance_decision_state` n/a)* |
| 20 | `FX-VP-01` | `variation_point` | S | PASS |
| 21 | `FX-AD-01` | `applicability_decision` | S | PASS |
| 22 | `FX-OR-01` operator requirement | `external_source` | S | PASS |
| **23** | **`D0INS-CNF-001`** — holdout **H-1** | `conflict_assertion` | R | **see `§E8.5`** |
| **24** | **taxonomy §2 fixed category set** — holdout **H-2** | `controlled_vocabulary` | R | **see `§E8.5`** |
| **25** | **`SC-D3-D5-001`** — holdout **H-3** | `seam_contract` | R | **see `§E8.5`** |

**Rows 1–22: 22 representable on `AMM-C3`.** Rows 23–25 are the holdouts and are reported separately **because a case the model was built around and a case it was not are not the same evidence.**

### §E8.3.2 — T2 · scenario-composition controls *(not resources; not counted with them)*

| # | Scenario | Composes | Result |
|---|---|---|---|
| S-1 | one source, five contextual determinations, no duplication | resource 13 + five `applicability_claim`s | **PASS** — force lives on each claim; `applicability_result` ⟂ `normative_effect` ⟂ `disposition` ⟂ decision; `publisher_edition` pinned per claim |
| S-2 | Henry Ford operator variation | resources 22 → 14-shape claim → 21 → 20 → outcome decision | **PASS** — five distinct resources; the customer's statement and OMNI's claim about it never share a `resource_id` |
| S-3 | GCE multi-resource composition | resources 4 + 2 + 3 + 6 + 9 | **PASS as composition** — and **`§E8.4` shows four of the five fail estate validation**, which the R5 dominance rule hid behind a single row |
| S-4 | map / view / viewpoint assembly | resources 10 + 17 + 18 | **PASS** — the map `indexes` contracts and may `carry` views; **no map is typed as a view** |

### §E8.3.3 — T3 · kind coverage *(the only table that speaks about kinds)*

**21 kinds exercised.** **Real instance located: 11** — `standard` · `pattern` · `decision` · `domain_contract` · `architecture_map` · `conformance_suite` · `implementation` · `external_source` · `seam_contract` · `conflict_assertion` · `controlled_vocabulary`. **Synthetic only, no located instance: 9** — `interface_contract` · `view` · `viewpoint` · `operating_profile` · `deployment_profile` · `variation_point` · `applicability_claim` · `applicability_decision` · `generated_snapshot`. **Exercised through the negative controls: 1** — `proposal`. `11 + 9 + 1 = 21` ✔

**Two kinds `AMM-C2` recorded as *"carried, not exercised"* are now exercised and both have real instances** (`§E8.5`). **`AMM-C2`'s coverage claim was therefore wrong in the direction that flatters the estate** — it under-counted what OMNI already has, while over-counting what is governed.

---

## §E8.4 — Estate validation, with ownership decomposed

**R5's owner test — *"is there a named party entitled to change this resource?"* — is withdrawn.** It conflated accountable owner, authorized writer, accepting authority, reviewer and repository routing, which is the conflation §4.6 of this carrier exists to prevent.

**`§E6.3`'s inherited predicate is unchanged** — known authority · known lifecycle · **rightful owner** · usable home. Only the **owner conjunct** is decomposed, into four sub-facts recorded separately: `accountable_owner` · `authorized_maintainer` · `accepting_authority` · `repository_routing`. **The conjunct is satisfied by `accountable_owner` alone.** A reviewer is not an owner; separation of duties may *forbid* the accepter from authoring.

### §E8.4.1 — Why the metamodel kept making this error: the estate does too

**Measured across all four governance ledgers:**

| Ledger | Owner-ish column | What it actually records |
|---|---|---|
| `03` decisions | **none** | `needs_human_review`, `canonical_destination` — no owner at all |
| `05` supersession/conflict | **`owner`** | an accountable owner — **the only one of the four** |
| `06` guardrails | `enforced_by` | an **enforcement mechanism**, not a party |
| `08` open review | `required_reviewer` | an **accepting authority**, not an owner |

> **`G1-FIND-29` — OMNI systematically records reviewers and enforcers and systematically does not record owners.** **★ CORRECTED IN R7 — *“one ledger in four names an accountable owner”* is FALSE. The canonical `05` contract has **no owner column**; the field I sampled is in an `analysis_nonbinding` child table. **Verified by enumeration: ZERO of four canonical ledger contracts record an accountable owner, and three record a *different* adjacent relation each** (`§E9.0.1`). The finding survives in a stronger form.** One ledger in four names an accountable owner. **`SUPERSEDED_BY_R7_CORRECTION` — verified false; zero of four canonical contracts record one (`§E9.0.1`).** **The metamodel inherited the confusion by typing the fields it could see** — which is how a substrate's gap becomes its description's gap, and then its successor's gap. **At $1B a disciplined operator bridges this by knowing who to ask. At $10B, across forty operators and a thousand agent-proposed changes, "who is accountable for this rule" has no answer and no way to acquire one.**

### §E8.4.2 — Recomputed over T1's consistent unit

| Result | Count | Resources |
|---|---|---|
| **`PASS`** | **3** | 8 RBAC contract *(domain seat by policy + G0 holder receipt)* · 10 System Map *(cross-cutting steward seat by R8 §3.1)* · **23 `D0INS-CNF-001`** — *the one row whose ledger has an `owner` column* |
| **`FAIL`** | **11** | 1 Reactor *(run roles, no standing seat)* · 2 + 3 guardrails *(enforcer, not owner)* · 4 GCE spine *(review gate satisfied, owner unnamed)* · 5 05-17 pattern *(no passport at all)* · 6 `DEC-036` *(`03` has no owner column)* · 7 `D0-REV-010` *(`required_reviewer` is an accepting authority — **R5's `PASS` withdrawn**)* · 11 conformance suite · 12 `requireCapability` · **24 taxonomy category set** · **25 `SC-D3-D5-001`** |
| **`NOT_INSTANTIATED`** | **11** | 9 GCE boundary contract · 13 42010 *(no OMNI-side descriptor exists)* · 14–22 the nine synthetics |
| | `3 + 11 + 11 = 25` ✔ — **★ CORRECTED IN R7: **the whole aggregate is WITHDRAWN.** All three `PASS`es rest on inference, not resource-level declaration: the RBAC receipt is arc-scoped and expires at `§G1-AUTH`, R8's steward is a permitted **writer** not an owner, and `D0INS-CNF-001`'s owner field is in an `analysis_nonbinding` child table. **No replacement total is published; `§E9.6` publishes per-resource governance evidence for seven cases instead.*** | |

**Named correctly, and this matters as much as the number:** *"**3 of 25 tested logical resources satisfy the selected estate-validation predicate.**"* **NOT** *"3 of N architecture resource kinds are governed across OMNI"* — this fixture tested 25 resources chosen to exercise 21 kinds; it is **not** a census of the estate, and R5's headline claimed a survey it never ran.

**R5's `3 PASS · 6 FAIL · 7 NOT_INSTANTIATED` is withdrawn.** The corrected picture is worse again — **eleven failures, not six** — because the ownership decomposition removed three verdicts that rested on reviewers, and because the consistent unit exposed resources the GCE dominance rule had hidden.

---

## §E8.5 — Three holdouts · **predeclared before running**

> **Predeclaration, recorded before any result was computed and before `AMM-C3` was touched for these cases.** Expected `primary_kind`, expected estate verdict, and the **forbidden collapse** each holdout is designed to catch. **If a holdout requires an `AMM-C3` amendment, that is a FAIL and is recorded as one.**
>
> | | expected kind | expected estate | forbidden collapse |
> |---|---|---|---|
> | **H-1** `D0INS-CNF-001` | `conflict_assertion` — a **relation assertion** between two decision revisions | `FAIL` *(assumed no owner, like `03`/`06`/`08`)* | the conflict must not be typed as a `decision`; its two statements must not fuse into one resource |
> | **H-2** `controlled_vocabulary` | `controlled_vocabulary` | **`NOT_INSTANTIATED`** — `AMM-C2` recorded this kind as carried with no instance | a value set must not be typed as a `standard` |
> | **H-3** `SC-D3-D5-001` | `seam_contract` | `FAIL` | seam-level canonicality must not collapse into `canonical_domain`; `owner_of_commit` must not be read as the contract's owner |

**H-1 — `D0INS-CNF-001` · the only genuinely unseen structure.** `05`'s schema is `conflict_id | statement_a | statement_b | domain | severity | resolution_status | owner | review_gate | notes`. **`representability = PASS`, and it is the strongest single result in the pass** — because a conflict row is *exactly* the `RelationAssertion` shape `§E8.1.3` had just been forced to invent: two subject revisions, a predicate (`conflicts_with`), a resolution state, an owner and a review gate. **`AMM-C3` was not adjusted for it.** **`estate_validation = PASS` — and the predeclaration was WRONG.** I predicted `FAIL` by generalizing from `03`/`06`/`08`; `05` carries an explicit `owner` column. **★ CORRECTED IN R7 — **the PASS is withdrawn and the original predeclaration was RIGHT.** The `owner` column is in an `analysis_nonbinding` Insurance child table, not the canonical contract, and its value fuses a role requirement with a named holder. **The generalization I distrusted was correct** (`§E9.0`).** **A predeclaration that fails in the direction of the estate being *better* than assumed is worth more than one that confirms.**

**H-2 — `controlled_vocabulary` · predeclaration WRONG, and instructively.** A real instance exists: **`00_document_governance_and_taxonomy_2026-05-19.md` §2** is a closed ten-value set with a governance rule — *"Do not invent a new category unless explicitly approved"* — which is a controlled vocabulary by any definition the fixture could apply. **`representability = PASS`** (no amendment needed; `truth_authority = canonical_for_scope`, `scope = universal`, `normative_effect = binding`). **`estate_validation = FAIL`, and the reason is the finding: the document that *mandates* the ten-field passport does not have one.** It opens with `**Date:** / **Status:** / **Purpose:**`. So the passport rule, the `D0-GRD-003` guardrail that enforces it, and the vocabulary that defines its values are all carried by a document that fails its own rule. **`AMM-C2`'s "carried, not exercised, no instance" was wrong** — it under-counted what OMNI has.

**H-3 — `SC-D3-D5-001` · predeclaration CORRECT, and it exercised the facet split.** Declares `Document type: seam_contract` — **a third live value outside the ten fixed categories**, joining `domain_contract` (15/15) and `system_map`/`architecture_map`, so the `A-3` carrier-classification facet holds. Declares `Authority: canonical for this cross-domain boundary` — **canonicality scoped to a seam, which `AMM-C2`'s `canonical_global | canonical_domain` could not express** and `AMM-C3`'s `truth_authority = canonical_for_scope` + `scope` does. **`representability = PASS` without amendment.** **`estate_validation = FAIL` as predicted:** the contract's `owner_of_commit` field names who commits the seam's **data** (D5) — **not who owns the contract resource** — and `contracts/seams/` has no repository routing.

**Holdout result: 3 representable, 0 amendments required · 2 of 3 estate predeclarations wrong.** **Graded, because two of these were not blind:** `controlled_vocabulary` and `seam_contract` were kinds `AMM-C2` had **already named** in its own registry, so I knew they were coming — **only H-1 was unseen structure, and only H-1's `PASS` carries full weight.** Three holdouts do not establish generality; they establish that the model did not collapse on first contact outside its training set.

---

## §E8.6 — Narrowed language

| Overstated | Corrected |
|---|---|
| *"loosening is structurally impossible, not policed"* | **A `constraint` derivation may only add restrictions or rules to inherited content, so a validator can reject structural loosening relative to a pinned base** `[KND]`. **It does not self-enforce because the field is present**, and semantic weakening expressed in prose still needs a computable rule representation or independent review `[CAN→6]` |
| *"SEI's own report declines the term 'variation point'"* → read as SEI rejecting it | **The 2005 CMU/SEI report *Variability in Software Product Lines* declines the term**, preferring *variable part* because a variable part is more than a location — it is an organizing container. **Other SEI work uses "variation point." Do not generalize** |
| *"binding time belongs to the mechanism, never the rule"* labelled `[KND]` | **OMNI synthesis, relabelled `[CAN→3/5]`.** The variable-part / mechanism / binding-time separation is inherited; **where binding occurs in OMNI's layers is G1-to-G5 work, not an inherited law.** *(A provenance scheme whose author mislabels his own inventions as inherited is worse than no scheme.)* |
| *"under R8's citation rule, 115 guardrail resources are uncitable"* | **The 115 guardrails are citable today by guardrail id, carrier path, git commit and row.** What they lack is a **first-class resource revision and effective interval** under R8's proposed model, so **reproducible as-of conformance depends on repository commit history rather than architecture-resource revisions.** Serious and defensible; *"uncitable"* was not |

---

## §E8.7 — Findings added in R6

**`G1-FIND-27` — a state derivable from a relation must not also be independently assertable.** `superseded` was both. Third form of the estate's oldest defect: a count outliving its table (`F-06`), a claim outliving its source (`L-5`), **a state outliving its relation.** → `[KND]` in `AMM-C3`; drift-check is `[CAN→6]`.

**`G1-FIND-28` — versioned nodes with timeless edges make `as_of` unanswerable by construction.** R8 §3.1 object 3 is defined as the frozen resolution of every relation at `as_of`; `AMM-C2` gave edges no interval, so there was nothing to freeze. **And the fix recurses: a relation assertion with identity, interval, provenance and a governing decision is itself an architecture resource** — so descriptors must describe assertions and snapshots must freeze assertion-revisions. **This is the single largest structural change in `AMM-C3` and the one with the clearest $10B consequence:** without it, no conformance claim, no supersession history and no effective architecture can be reconstructed for a date. Bitemporality `[CAN→3]`.

**`G1-FIND-29` — OMNI records reviewers and enforcers, not owners.** One of four governance ledgers (`05`) has an `owner` column; `03` has none, `06` names an enforcer, `08` names a reviewer. **The metamodel reproduced the estate's confusion by typing the fields it could see.** → `architecture_steward`, G2.

**`G1-FIND-30` — current placement is evidence of practice, never of policy.** R5 used live file placement to prove an intended many-to-many mapping between Artifact Index roles and kinds; re-inspection showed one claim false (`06` is the Guardrails role) and one partly false (`DEC-036` is a `03` row that the posture document references). **The Artifact Index exists to detect drift; reading drift as design inverts it.** → method rule; placement is a predicate `[CAN→3]`.

**`G1-FIND-31` — the two kinds recorded as having no instance both have real instances.** `controlled_vocabulary` (the taxonomy's own fixed category set) and `seam_contract` (five live contracts). **`AMM-C2`'s coverage claim under-counted what OMNI has while over-counting what OMNI governs** — both errors in the direction of the author's expectations. → coverage is now `§E8.3.3`.

**`G1-FIND-32` — the document that mandates the passport does not have one.** `00_document_governance_and_taxonomy_2026-05-19.md` defines the ten required passport fields and `D0-GRD-003` enforces them; the file itself opens with `Date` / `Status` / `Purpose`. Second Tier-0-adjacent instance after the 05-17 pattern (`G1-FIND-13`). **Not repaired here** — writing passports onto governance files is not this seat's act. → `architecture_steward`.

---

## §E8.8 — Status · `AB-08` · what R6 does not claim

| Field | Value |
|---|---|
| **Output 1** | **`AMM_C3_RERUN_DONE · HOLDOUTS_RUN · NOT_COMPLETE · AWAITING_INDEPENDENT_REVIEW`.** Third candidate, second independent review. **Not self-certified.** The pattern that would justify self-certification — a candidate surviving a reader who did not build it — **has not happened yet** |
| **`representability`** | **T1: 22 of 22 non-holdout resources · holdouts: 3 of 3, zero amendments required.** Reported over **one consistent unit** and **never summed with T2 or T3.** R5's `16/16` withdrawn — mixed units |
| **`estate_validation`** | **3 `PASS` · 11 `FAIL` · 11 `NOT_INSTANTIATED` of 25 tested logical resources**, with the owner conjunct decomposed into four sub-facts. R5's `3/6/7` withdrawn. **Stated as *"tested logical resources satisfying the predicate"*, not as a census of OMNI** |
| **Holdouts** | 3 run, **predeclared before execution**; **2 of 3 estate predeclarations wrong** — both because the estate was *better* than assumed on one axis and *worse* on another. **Graded: only H-1 was unseen structure** |
| **`AB-08`** | **`AB-08_REMAINS_OPEN__FALSE_SINGLE_COUNT_REJECTED__AMM_C3_AND_HOLDOUTS_SUBMITTED_FOR_REVIEW`**. The durable answer is unchanged and now three passes old: **reject both "17 classes" and "5 tiers"** — they compare different classification functions. **Closure still blocked**, on: placement policy is a `[CAN→3]` predicate, not settled; relation bitemporality is `[CAN→3]`; the estate-governance failures are separately routed and remain **not** closure criteria |
| **Minted** | **nothing.** No route, catalog, gate, checkpoint, handoff, registry, lane, FWREG row, guardrail, artifact, branch or PR. **No new standards research** — no source was opened in R6 that R5 had not already read |
| **Output 2** | **NOT STARTED** |

## §E8.9 — Source posture for R6

**Read fully:** the R5 review in full · `§E7` re-read against each of its twelve charges *(every blocking claim verified in the live file before `AMM-C3` was designed)*.
**Consulted deeply — repository only, no new external material:** `03_decision_extraction_ledger.md` schema + the `D0THES-DEC-036` row *(which falsified part of my own R5 placement evidence)* · `05_supersession_conflict_ledger.md` schema + `D0INS-CNF-001` *(holdout H-1)* · `06` and `08` schemas re-read for the owner-column census · `00_document_governance_and_taxonomy_2026-05-19.md` §2 and its header *(holdout H-2)* · `contracts/seams/SC-D3-D5-001…` passport + the Artifact Index seam spec *(holdout H-3)* · `00_architecture_artifact_index.md` role list re-read *(which falsified my `06`-is-Doctrine claim)*.
**Not inspected — declared, not discharged:** unchanged from R5. The remaining Lane-1 sources · full standards texts beyond the sections already read in R5 · C3.8 G1b/G3 · Polaris · Platform + Accountability · C4.6 · federation-permeability · the six AI-corpus registries · the founding-thread verbatims · raw PRE-0 submissions · Insurance and Care history. **`B-8` unchanged.**
**Live-repository verification:** entered at `5b8645066fa8a096e00cc24f4b3e94d49caac792`, the exact head the review named — **no advance to reconcile.** Boot Freshness Check **PASS**; `check-checkpoint-pointer.mjs` **PASS**; exactly one file modified.

---

# §E9 — Output 1 · R7 · `AMM-C4` — resource governance, the meta-kernel, and a corrected record

> **`§E8` (`AMM-C3`) is preserved and not rewritten.** Corrections carry `★ CORRECTED IN R7` markers.
>
> **This pass begins with a withdrawal, because the review found a factual error in R6 that I made and did not catch — and the error was worse than the review described.**
>
> ## ★ R7 RECORD — SUPERSEDED BY `§E10`, PRESERVED IN FULL
> **Corrected in R8:** the acts/artifacts dichotomy *(too clean and false — the right composition is §4.1's standing-context ⟂ consequential-transaction, which was in this carrier all along)* · `approval_policy` as one-per-change-class *(the next god object)* · `resource_steward` as mandatory cardinality *(made the estate's real state unrepresentable)* · integration authority scoped to the resource *(it is transaction-scoped and expiring — the G0 receipt proves it)* · **governance bindings created without effective intervals, one section after fixing exactly that defect** · `repository_enforcement[]` · the machine-verifiable/declared binary · the over-broad intake rule.
> **And `G1-FIND-37`'s novelty claim FAILS `M-106` EXISTS-AS** — the corpus routed it in wave 2 as `demand_signal_ownership` and wave 5 as `AI_control_runtime_binding`, in a harder form: *governance that does not compile to runtime enforcement is theatre* (`§E10.11`).
> **`AMM-C4.1` is at `§E10`. Nothing here is deleted.**

## §E9.0 — The `05` error, verified, and what kind of error it is

**The review's claim is correct.** `05_supersession_conflict_ledger.md` contains **two** tables:

| line | table | owner column? |
|---|---|---|
| 18 | **`## Ledger Contract`** — the canonical schema: `item_id \| source_file \| conflicting_with \| conflict_type \| winning_authority \| resolution_status \| superseded_by \| review_gate \| notes` | **NO** |
| 76 | `### INS-G1B parent carry — semantic conflict rows (added 2026-08-08, **`analysis_nonbinding`**; nothing resolved)` — a local Insurance child table: `conflict_id \| statement_a \| statement_b \| domain \| severity \| resolution_status \| **owner** \| review_gate \| notes` | yes |

**And the mechanism of my error is the part worth recording.** My search pattern was `^| conflict_id\|^| supersession_id\|^| id ` — **it did not include `item_id`**, so it silently skipped the canonical contract at line 18 and matched only the nonbinding child table at line 76. **I then reported that child table as "the `05` schema."**

> **`G1-FIND-33` — a search *hit* is not proof of representativeness.** `L-5` says a search **miss** is not proof of absence. This is its inverse and it is more dangerous, because a miss announces itself as nothing while a hit arrives looking like evidence. **Third variant of the estate's oldest defect: a count outliving its table (`F-06`) · a claim outliving its source (`L-5`) · and now a sample standing in for a population.** The operational rule: **when a search result becomes a claim about a population, the population must be enumerated, not sampled.** Guardrail candidate, captured not promoted.

**Withdrawn:** `G1-FIND-29` as worded · H-1's `estate_validation = PASS` · the **3 `PASS` · 11 `FAIL` · 11 `NOT_INSTANTIATED`** aggregate · *"`05`'s row is the single cleanest estate result in the fixture."* And `architecture_steward_required + Nick` is **not** a normalized owner reference — it fuses a stable role requirement with a named current holder, which is the seat/holder collapse §4.6 forbids.

### §E9.0.1 — The corrected finding is stronger than the one it replaces

**Enumerated, not sampled — all four canonical ledger contracts read in full:**

| Ledger | canonical schema's governance field | What it actually names |
|---|---|---|
| `03` decisions | *(none)* | **nothing** |
| `05` supersession/conflict | `winning_authority` | **semantic authority** over the conflict's resolution |
| `06` guardrails | `enforced_by` | an **enforcement mechanism** |
| `08` open review | `required_reviewer` | an **accepting/review authority** |

> **`G1-FIND-29` (restated, verified) — OMNI's four governance ledgers encode three *different* artifact-governance relations, one per ledger, and encode accountable ownership in none of them.** Not *"one in four records an owner"* — **zero in four.** And the three that record something each record a **different** adjacent relation. **The estate had already partitioned the concept across four surfaces without ever naming the partition** — so an agent reading those fields sees four words for adjacent things and reasonably concludes one of them is ownership. **That is the mechanism by which this keeps happening**, and it is measurable rather than atmospheric.

### §E9.0.2 — And the deeper reason: the estate's authority model answers a different question

**`G1-FIND-34` — OMNI's authority work was built for ACTS. I kept applying it to ARTIFACTS.** **★ CORRECTED IN R8 — too clean and, as written, false: **creating, revising, accepting, activating and superseding a resource ARE consequential acts, and a wrong resource absolutely produces consequences** — a loosened prohibition, a patient right dropped from an effective profile. **Corrected: the act grammar is the *B*-structure, and nobody had built the *A*-structure (standing resource governance) — the composition §4.1 of this carrier already specified** (`§E10.2`, `G1-FIND-38`).** §4.6's four objects — seat · accountable principal · exercising actor · grant — answer *who bears the consequence of a consequential act*. **An artifact has no consequences. It has integrity, currency, and content.** The questions it needs are different: *who keeps it coherent · who owns which semantics inside it · who may write it · who must review · who may accept · who may land · what enforces any of that.*

**The prior authority work was not forgotten or ignored — it was misapplied by type.** Three passes reached for §4.6, which is the right instinct and the wrong instrument, and each produced a slightly different malformed owner field. **This is why excellent prose about care authority did not transfer, and why each pass reads as though ownership were being discovered rather than installed.** The missing object is not an owner concept. It is the **resource-governance projection** of authority onto architecture artifacts — and, one level beneath that, **the resource layer itself: ownership is a property of a resource, and OMNI has carriers and ledger rows, not resources.** Adding an `owner` column to four ledgers would relocate the inconsistency, not resolve it.

---

## §E9.1 — Review receipt

| # | Finding | Disposition |
|---|---|---|
| 1 | `05` schema error; withdraw `G1-FIND-29`, H-1's estate PASS, the 3/11/11 aggregate | **ACCEPTED IN FULL** — verified independently; the mechanism recorded as `G1-FIND-33`; the finding restated in its stronger, enumerated form |
| 2 | The other two `PASS`es rest on inference, not resource-level declaration | **ACCEPTED.** The RBAC contract's G0 receipt is **arc-scoped** — the checkpoint literally reads `effective_to: expires when §G1-AUTH delivers` — so it cannot establish a permanent steward. R8's *"steward writes cross-cutting descriptors"* identifies a **permitted writer**, not an accountable owner. **All three `PASS`es withdrawn** |
| 3 | `accountable_owner` fuses **resource stewardship** with **semantic authority** | **ACCEPTED IN FULL — the best conceptual contribution in the review.** One field cannot hold *"keeps this coherent"* and *"decides what it says,"* and fusing them recreates the god-architect the estate spent §4.2/§4.6 preventing |
| 4 | The assertion→descriptor recursion has no termination rule | **ACCEPTED IN FULL** — I created a regress and did not close it (`§E9.4`) |
| 5 | Four remaining `F-08` value collapses | **ACCEPTED IN FULL — third consecutive pass** (`§E9.5`) |
| 6 | H-1 is *mappable to* the assertion shape, not an instance of it | **ACCEPTED** — *"exactly the shape"* overstated; it lacks subject revisions, normalized predicate/object, effective interval, normalized provenance, governing decision and assertion history |
| 7 | Consume Backstage / CODEOWNERS+rulesets / AWS / Palantir before authoring ownership | **ACCEPTED IN FULL, and the charge lands squarely.** **R8's Lane 1 names Backstage with `ownership` in its parenthetical, and I authored three ownership models without opening it** (`§E9.2`) |
| — | *"Do not publish a replacement aggregate"* | **DECLINED, with a substitute.** Withdrawing the number and publishing nothing risks exactly the finding-evaporation `F-04` names — and the *direction* is not in doubt. **The aggregate is withdrawn; the per-resource conjunct evidence for the focused set is published; and the direction is stated as a bounded claim with its enumeration** (`§E9.6`). A withdrawn number replaced by silence is how a defect becomes atmosphere |
| — | *(added)* Which governance facts are **machine-verifiable** and which are **declared** | **ADDED** — it tells G2 what to build first (`§E9.3.1`) |

---

## §E9.2 — The mechanism probe I should have run three passes ago

**Four official sources. Mechanism only — no adoption, no conformance, no comparator artifact.** Every one of them separates concepts that `AMM-C1`, `-C2` and `-C3` each fused in a slightly different way.

| Source | What it says | What transfers |
|---|---|---|
| **Backstage** — well-known relations | *"the owner of an entity is the **singular entity** (commonly a team) that bears **ultimate responsibility**… and has the authority and capability to develop and maintain it. They will be the **point of contact** if something goes wrong… The main purpose of this relation is for display… **It is not to be used by automated processes to for example assign authorization in runtime systems.** There may be others that also develop or otherwise touch the entity, but **there will always be one ultimate owner**."* | **`resource_steward`, publicly documented, with the anti-authorization warning attached.** Singular by design. And Backstage separates **authored intent** (`spec.owner`) from the **generated `ownedBy` relation**, which is *"the authoritative relationship model"* and *"could be taken from a CODEOWNERS file instead"* — **the descriptor→assertion pattern `§E8.1.3` reinvented, in public since 2020** |
| **GitHub** — CODEOWNERS + rulesets | *"CODEOWNERS is about ownership… Rulesets are about enforcement… they're not competing features."* CODEOWNERS auto-**requests** review; branch protection/rulesets decide what is **required**. **`when reviews from code owners are required, an approval from *any* of the owners is sufficient`** | **Responsibility routing ⟂ enforcement**, exactly as R6's corrected CODEOWNERS wording already conceded. **And a hard transfer limit:** CODEOWNERS approval is an **OR over owners**. OMNI's `INV-30` requires **every affected owner** and treats refusal as non-fungible. **So CODEOWNERS semantics may route OMNI review and may never express OMNI approval** |
| **AWS Well-Architected** — `OPS02-BP01` | *"**Define what ownership means** for the resource use cases in your environment. Ownership can mean who oversees changes… supports the resource during troubleshooting… who is financially accountable… who owns the risk."* Anti-pattern: *"Two teams have overlapping ownership of a critical piece of infrastructure."* Record in **metadata or a central register** | **The word is polysemous and the organization must define which sense it means before assigning it.** That is a one-line diagnosis of three of my passes. It also supplies the register requirement: ownership is recorded **on the resource or in a central register** — which is the descriptor layer |
| **Palantir Foundry** — branch security | *"Resource-level protection is set by **resource owners**, and approval policies are defined by **project owners**."* *"Branch roles control access to branch **management** actions only and **do not grant permissions to edit** resources."* *"**The person who merges may be submitting changes to resources that they cannot edit themselves. This is by design:** edit permissions are still required to modify the resource in the first place; reviewers can be designated to verify and approve; and **merging only applies pre-authored and approved changes**."* | **Owner ⟂ policy-setter ⟂ editor ⟂ reviewer ⟂ merger, in product documentation, with the rationale.** And OMNI's G0 receipt already states the same rule — *"the `integration` holder lands an already-accepted change set and resolves no substantive disagreement by merging"* — **derived independently here, available to read there** |

> **`G1-FIND-35` — the estate keeps deriving what it could have read, and the plan already said where to read it.** R8 Lane 1 names Backstage **for ownership** and Palantir **for resource protection and approvals**. Output 1 authored an ownership model in three consecutive passes without opening either. **This is not a failure of intelligence; it is a failure of intake sequencing** — the mechanism probe ran for 42010, SEI, FHIR, IHE and AUTOSAR because those were named in *review instructions*, while Backstage sat in the plan's own Lane 1 unconsumed. **Rule: before authoring any model in a domain R8 Lane 1 names, open that lane's named source for that domain first.** → `architecture_steward`; candidate for the Build Entry Gate at G2.

---

## §E9.3 — The resource-governance grammar

**No new universal owner object.** Eight explicit relations, each answering one question, with the estate's existing carriers named where they already partially implement it.

| Relation | Question | Cardinality | Existing OMNI/estate anchor |
|---|---|---|---|
| **`resource_steward`** | who is accountable for the resource's **integrity, currency, discoverability and escalation** — not its content | **exactly 1** seat | Backstage's singular ultimate owner; AWS's registered resource owner. **New to OMNI as a named relation** |
| **`semantic_authorities[]`** | who decides **what it says**, scoped to named clauses, facts, relations or domains | `0..n`, **scoped** | `05`'s `winning_authority`; System Map *"one owner per fact"*; RBAC/Care/Federation domain ownership |
| **`authorized_maintainers[]`** | who may **author a revision** | `0..n` | R8 §3.1 writer rules; Agent Work Protocol active writer; Palantir's *"edit permissions"* |
| **`approval_policy`** | which authority set must approve **this class of change** — thresholds, independence, **non-fungible refusal**, conditions | 1 per change class | §4.5 decision conditions; `INV-30`; Palantir project-level approval policy |
| **`review_requirements[]`** | what **review evidence** must exist before acceptance | `0..n` | `06`/`08` `review_gate`; `08` `required_reviewer`; CODEOWNERS routing |
| **`integration_authority`** | who may **land an already-accepted revision** | `0..1` | G0 receipt's bounded `integration` seat; Palantir's merge role |
| **`repository_enforcement[]`** | what **mechanism actually enforces** the above | `0..n` | `06`'s `enforced_by`; CODEOWNERS; rulesets; CI; `check-checkpoint-pointer.mjs` |
| **`holder_assignments`** | which humans/agents currently occupy the stable seats | mutable **register**, not architecture | §4.6 seat/holder split; the G0 holder receipt |

> **The load-bearing sentence: the resource steward owns the resource's *integrity*. The steward does not thereby own every *semantic truth* expressed inside it.** That is how one System Map or one cross-cutting standard stays coherent without recreating a central architect who can overrule a domain, a patient right or a professional duty (`INV-30`).

### §E9.3.1 — Which of these a machine can check, and which only a human can declare

**This is the half the review did not ask for and it decides G2's build order.**

| Facet | Verifiable how |
|---|---|
| `repository_enforcement[]` | **MACHINE-VERIFIABLE today** — CODEOWNERS entries, ruleset/branch-protection state, CI workflow presence, required-check status. *All observable through the platform API* |
| `authorized_maintainers[]` · `integration_authority` | **MACHINE-VERIFIABLE once declared** — comparable against actual commit and merge authorship |
| `review_requirements[]` | **PARTLY** — presence of review is observable; sufficiency is not |
| `resource_steward` · `semantic_authorities[]` · `approval_policy` | **DECLARED ONLY** — no mechanism can infer who *should* be accountable |

**Consequence:** the enforcement half is checkable from day one and the accountability half is not, **so the first thing G2 can build is a divergence check between declared governance and observed platform state** — which is also the only mechanism that would have caught R6's `05` error before it shipped.

---

## §E9.4 — Meta-kernel termination

**The review is right that `§E8.1.3` opened a regress:** if a `RelationAssertion` is an architecture resource, and descriptors describe resources, then `describes` is itself an assertion needing a descriptor, forever.

```
M0   architecture resources and their revisions
M1   governed records ABOUT M0 — descriptors and relation assertions
     versioned · effective-dated · attributed · decision-linked
M2   the metamodel/schema defining M0 and M1
     separately versioned, accepted by a governance transaction
```

**Termination rule `[KND]`:** **M1's kernel relations — `describes`, `carries`, `asserted_by`, `governed_by`, `supersedes_assertion` — are FIELDS of an M1 record, governed by M2. They are not themselves reified as M1 assertions.** A relation assertion is a **first-class governed graph record**, not a fully recursive architecture resource requiring the machinery it supplies.

**Two consequences the review did not state, both load-bearing:**
1. **The metamodel describes itself at exactly one level.** M2 is accepted by a governance transaction — not by a descriptor — which is what stops the fixed point from unrolling.
2. **A snapshot freezes M0 + M1; M2's version is a *parameter* of the snapshot, not a member of it.** Otherwise regenerating a snapshot under an amended schema silently changes what the past said. **A snapshot must record the schema version it was computed under, or byte-reproducibility is meaningless** — the pipeline would reproduce different bytes and be right both times.

*(Implementation is G2's. Bitemporality — assertion time vs effective time — remains `[CAN→3]`.)*

---

## §E9.5 — Remaining `F-08` collapses repaired

**Third consecutive pass in which the values, not the axes, were the defect.**

| `AMM-C3` | Fused | `AMM-C4` |
|---|---|---|
| `derivation_provenance: authored \| derived \| generated` | **derivation** vs **production mechanism** — a snapshot is *both*; a hand-written synthesis of other documents is derived *and* authored | **`content_derivation`** ∈ `original` · `derived_from_other_resources` ⟂ **`production_mechanism`** ∈ `hand_authored` · `machine_generated` |
| `generation_state: authored \| emitted \| stale` | **creation** vs **freshness** — an emitted snapshot can also be stale | **`production_state`** ∈ `not_produced` · `produced` ⟂ **`freshness`** ∈ `current` · `stale` · `unknown` |
| `epistemic_role[]` containing `normative_statement` | duplicates `normative_effect` | **`normative_statement` removed** from `epistemic_role[]`; the remaining values are `evidence` · `analysis` · `reference` · `implementation_proof` |
| `disposition: … frozen_pending_gate \| parked_with_trigger` | **role change** vs **mutability** vs **attention** | **`disposition`** ∈ `none` · `demoted_to_evidence` · `withdrawn` ⟂ **`mutability_state`** ∈ `open` · `frozen_pending_gate` ⟂ **`work_state`** ∈ `active` · `parked_with_trigger`. *(A resource can be parked **and** demoted; `AMM-C3` could not say so)* |

---

## §E9.6 — Focused fixture · eight cases · governance facets only

**No full rerun.** Only the ownership/self-hosting cases, testing whether the eight relations can be **stated** (representability) and whether the estate **has** them (governance instantiation). **The `§E8` `estate_validation` aggregate stays withdrawn; this table publishes per-resource evidence for these seven only and is not summed into any prior total.**

> **Eight rows, not the seven the review listed — deliberately.** The review's seventh item bundled *“conformance suite/authority implementation”*; those are **two logical resources**, and bundling them is the exact unit defect corrected twice already (`P-1`). **Being right about the unit beats matching the requested count.**

| Case | steward | semantic authorities | maintainers | approval policy | review req. | integration | enforcement |
|---|---|---|---|---|---|---|---|
| **RBAC domain contract** | ✗ *(G0 receipt is arc-scoped and expires at `§G1-AUTH`)* | **✓ partial** — RBAC owns authority-substrate semantics per System Map | ~ by R8 policy, not declared | ✗ | ✓ `user_knox_required` | ✗ | ✗ no routing entry located |
| **System Map** | ✗ *(steward is a permitted **writer** under R8, not a declared owner)* | **✓ partial** — *"one owner per fact"* delegates per-domain semantics | ~ by policy | ✗ | ✓ `user_knox_required` | ✗ | ✗ |
| **`D0THES-GRD-033`** | ✗ | ✗ | ✗ | ✗ | ✓ promotion gate on **new** guardrails only | ✗ | **✓ `enforced_by` names a mechanism** |
| **GCE spine** | ✗ | ✓ `D0THES-DEC-036` | ✗ | ✗ | ✓ satisfied 2026-06-03 | ✗ | ✗ |
| **`D0INS-CNF-001`** | ✗ *(the `owner` field is in an `analysis_nonbinding` child table and its value fuses role + holder)* | **✓ the canonical `05` contract's `winning_authority`** | ✗ | ✗ | ✓ `review_gate` | ✗ | ✗ |
| **consequential-transition conformance suite** | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ **no routing entry located; not wired to CI** |
| **`requireCapability` authority enforcement** | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ **no routing entry located** |
| **meta-kernel termination** | *n/a — structural* | | | | | | **PASS**: M1 kernel relations are M2-governed fields, the schema version is a snapshot parameter, and the regress closes at one level (`§E9.4`) |

**Representability: 8 of 8 — the grammar can state every cell above, including every absence.** *(Weak evidence on its own: I designed the grammar against these cases. It carries weight only where a cell is filled by an estate fact I did not choose — `winning_authority`, `enforced_by`, and the two review gates.)*

**Governance instantiation, as an enumeration rather than a score:** **`resource_steward` is declared for ZERO of the seven real resources.** `semantic_authorities` is partially present for four, in three different notations. `review_requirements` is present for four. `repository_enforcement` is present for one, and names a mechanism rather than a party. **`authorized_maintainers`, `approval_policy` and `integration_authority` are declared for none.**

> **That is the finding, and it does not need a ratio to land: of the eight resource-governance relations, OMNI declares at most three for any architecture resource, never the same three, and never the one that says who is accountable.**

---

## §E9.7 — Findings added in R7

**`G1-FIND-33`** — a search **hit** is not proof of representativeness; `L-5`'s inverse, and more dangerous because a hit arrives looking like evidence. When a search result becomes a claim about a population, **enumerate the population.**
**`G1-FIND-29` (restated)** — **zero of four** canonical governance ledger contracts record an accountable owner; three record a **different** adjacent relation each (`winning_authority` · `enforced_by` · `required_reviewer`). The estate partitioned the concept without naming the partition.
**`G1-FIND-34`** — **OMNI's authority model answers a question about acts; architecture resources need a question about artifacts.** The prior work was misapplied by type, not forgotten. And ownership has nothing to attach to until the resource layer exists — **normalizing four ledgers without it would relocate the inconsistency.**
**`G1-FIND-35`** — the estate derives what R8 Lane 1 already told it to read. Three ownership models authored without opening Backstage, which the plan names **for ownership**. **Intake-sequencing rule → Build Entry Gate at G2.**
**`G1-FIND-36`** — **a transfer limit, not a mechanism:** CODEOWNERS satisfies a required review with an approval from **any** listed owner. OMNI's `INV-30` requires **every affected owner** and treats refusal as non-fungible. **CODEOWNERS may route OMNI review; it may never express OMNI approval.** *(Rulesets can require N approvals from named teams, which is closer but still a count, not a set of specific affected owners.)*
**`G1-FIND-37`** — **enforcement is machine-verifiable and accountability is not**, so the first buildable governance mechanism is a **divergence check between declared governance and observed platform state** — the only mechanism that would have caught R6's `05` error before it shipped. **★ CORRECTED IN R8 on two counts: **(a) the binary is overstated** — declared accountability *is* machine-checkable for presence, shape, referential integrity, vacancy, conflict and dates, and neither half proves correctness; the mechanism is **configuration-conformance evidence**, not proof. **(b) the NOVELTY CLAIM FAILS `M-106` EXISTS-AS** — the corpus routed it in wave 2 (`demand_signal_ownership`: *“governance must compile to runtime enforcement; shared reviews and monitoring are theater”*) and wave 5 (`AI_control_runtime_binding`), **in a stronger form than I stated it** (`§E10.11`).**

---

## §E9.8 — Status

| Field | Value |
|---|---|
| **Output 1** | **`AMM_C4_GOVERNANCE_AND_KERNEL_DONE · NOT_COMPLETE · AWAITING_INDEPENDENT_REVIEW`.** Fourth candidate, third review. **Not self-certified** — and after four passes the pattern itself is the argument: **no candidate of mine has yet survived a reader who did not build it** |
| **Withdrawn in R7** | `G1-FIND-29` as worded · H-1 estate `PASS` · **all three** R6 `PASS`es · the **3/11/11** aggregate · *"exactly the relation-assertion shape"* · four `F-08` value collapses |
| **Published instead of a replacement total** | a **eight-case per-resource governance enumeration** (`§E9.6`) and one countable statement: **`resource_steward` is declared for zero of seven real resources.** *(The instruction to publish no aggregate is declined in this narrow form: silence is how a defect becomes atmosphere — `F-04`)* |
| **`AB-08`** | **`AB-08_REMAINS_OPEN__FALSE_SINGLE_COUNT_REJECTED__AMM_C4_SUBMITTED_FOR_REVIEW`.** Unchanged substantive answer: **reject both "17 classes" and "5 tiers."** Closure additionally blocked on the resource-governance grammar and the placement predicate, both `[CAN→3]` |
| **Minted** | **nothing.** No route, catalog, gate, checkpoint, registry, artifact, branch or PR |
| **External** | Backstage · GitHub CODEOWNERS/rulesets · AWS `OPS02-BP01` · Palantir branch security — **mechanism only, no adoption, no conformance, no comparator artifact.** Registry rows remain **proposed** under `G1-FIND-08` |
| **Output 2** | **NOT STARTED** |

## §E9.9 — Source posture for R7

**Read fully:** the R6 review · `05_supersession_conflict_ledger.md` **both tables and its section structure** *(the verification that opens this pass)* · the four canonical ledger contracts enumerated rather than sampled.
**Consulted deeply — four official mechanism sources, all named in R8 Lane 1 or by the review:** Backstage well-known relations + descriptor format *(`spec.owner`, `ownedBy`/`ownerOf`, the display-not-authorization rule)* · GitHub CODEOWNERS docs + required-reviewer rulesets *(routing vs enforcement; any-owner-suffices)* · AWS Well-Architected `OPS02-BP01` *(define what ownership means; central register; overlapping-ownership anti-pattern)* · Palantir Foundry branch security *(resource owner vs project owner vs editor vs reviewer vs merger)*.
**Not inspected — declared:** the private internal architecture systems of any named company beyond these public mechanisms · the remaining Lane-1 sources · the rest of the G1 source floor. **`B-8` unchanged.**
**Live-repository verification:** entered at `4d8e4724a807041afe910427e97abdf80bec6dec` — the exact head the review named, **no advance to reconcile.** Boot Freshness Check **PASS**; `check-checkpoint-pointer.mjs` **PASS**; exactly one file modified.

---

# §E10 — Output 1 · R8 · `AMM-C4.1` — bounded corrections, and the Lane-3 check that should have run first

> **Bounded by instruction: no `AMM-C5`, no full rerun, no ownership-theory tour.** Nine corrections, three traces, and one obligation this arc has been carrying unfulfilled since G0.

## §E10.0 — The operator's charge, and it is binding law rather than an opinion

**The charge:** *"don't go read a public landing page about what Palantir does and think we figured out authority modeling. We ingested 300+ videos — Stanford, Sequoia, Karpathy — there's more at play."*

**This is not a preference. It is R8 §3.9.1–§3.9.2, verbatim, and I have been in breach of it for four passes.**

- **§3.9.1 makes Lane 3 mandatory:** *"for every operations capability at §1, **first check whether a wave registry already routed a concept to it. Anything presented as new must first fail `M-106` EXISTS-AS against these six registries.** An arc that re-derives Build OS concepts the video corpus already routed **has failed before it starts**."*
- **§3.9.2 carries the operator's own words:** *"Our Build OS concepts strike me as sufficient… basic… **but not 2030 and 2035 oriented**… Which was the point of 300+ ingests."* And the plan's own admission: ***"no arc has consumed those registries for operations design."***
- **The method it mandates:** evaluate every mechanism **twice** — against current practice, and against 2030/2035 agent-native operation. **Anything passing only the first is recorded `current_practice_only` with the frontier gap named.**

**I ran the Lane-1 vendor probe at pass four and never ran the mandatory Lane-3 check at all.** `§E10.9` runs it. It is short, it is damning, and it changes the standing of three findings.

## §E10.1 — Receipt

| # | Finding | Disposition |
|---|---|---|
| 0 | **The acts/artifacts dichotomy is too clean and ultimately false** — creating, revising, accepting, activating, superseding and relying on a resource *are* consequential acts, and a wrong resource absolutely produces consequences | **ACCEPTED — and the correction is sharper than either of us put it.** *"An artifact has no consequences"* is false: a loosened clinical prohibition or a patient right dropped from an effective profile is a consequence, and it is the whole reason this matters. **But the deeper embarrassment is that OMNI already had the right composition and I did not apply it: §4.1 of THIS carrier separates *(A)* standing authority context from *(B)* consequential transition transaction, and warns that flattening them makes transition a god-abstraction.** Resource governance is the **A-structure for architecture resources**; the existing act grammar is the **B-structure over it**. Not a separate artifact-authority universe — the composition §4.1 already specified (`§E10.2`) |
| 1 | The eight relations are not eight objects of one kind | **ACCEPTED.** I labelled `holder_assignments` *"a mutable register, not architecture"* and then listed it as one of eight **resource** relations. Regrouped by rightful object (`§E10.3`). **`F-08`'s fourth appearance, and the pattern is descending: axes → values → grouping** |
| 2 | `approval_policy` = 1 per change class is the next god object | **ACCEPTED IN FULL — same defect as scalar authority, on the operation that decides whether a change may land.** `approval_policy_refs[]` → a derived `effective_approval_condition` per proposed change; composition and precedence stay Outputs 3/5 (`§E10.4`) |
| 3 | Cardinality and conformance are fused | **ACCEPTED.** `resource_steward = exactly 1` made the estate's actual state structurally unrepresentable — the fixture would have had to call a real defect a schema error (`§E10.5`) |
| 4 | Integration authority is transaction-scoped | **ACCEPTED, and the estate already proves it:** the G0 receipt reads `integration_holder: Opus — BOUNDED to this arc-opening transaction only`, and §0.2 records that *"the bounded appointment expired on that verification."* I put a transaction grant on the resource (`§E10.6`, trace T-1) |
| 5 | Governance bindings need revision and effectivity too | **ACCEPTED — and this one is the worst of the nine.** `AMM-C3` made ordinary relations effective-dated *because timeless edges make `as_of` unanswerable*, and then `AMM-C4` created a whole governance layer with timeless edges. **I recreated the defect I had just fixed, one section later** (`§E10.7`) |
| 6 | `repository_enforcement[]` too narrow and unscoped | **ACCEPTED** — Palantir resources, cloud policy, runtime config, DB controls, external standards, deployment systems and federated operators are not repositories, and a binding must say **which obligation** it enforces (`§E10.8`) |
| 7 | *"Enforcement machine-verifiable, accountability not"* overstated | **ACCEPTED** — declared accountability **is** machine-checkable for presence, shape, referential integrity, vacancy, conflict and dates. Neither half proves correctness. The G2 mechanism is **configuration-conformance evidence**, not proof of enforcement or accountability |
| 8 | The meta-kernel needs a sealed bootstrap contract | **ACCEPTED, and the last clause is the sharp one:** without a prohibition on moving semantic rules into kernel fields, **the anti-recursion rule becomes an authority bypass** (`§E10.9`… see `§E10.10`) |
| 9 | The intake rule is too broad | **ACCEPTED** — mine was a ceremony engine, and this arc already killed one for the same reason (*"R2's fifteen-mandatory-questions version is withdrawn: it manufactures ceremony"*). Narrowed to claims of **novelty, absence, closure or mechanism transfer** |
| 10 | `AB-08`'s semantic disposition is separable and independently endorsed | **ACCEPTED AS A STATE CHANGE, NOT AS CLOSURE** (`§E10.12`) |

## §E10.2 — The composition, which §4.1 already specified

**Two layers, not two universes:**

| | |
|---|---|
| **A · standing resource governance** *(the as-of context)* | who is accountable for this resource's integrity · whose semantics bind which parts · who may write · what review is required · what enforces it |
| **B · consequential resource-change transaction** *(the event path)* | who proposed this revision · whose semantics it affects · which policies applied · who approved, refused or abstained · who accepted · who integrated · when it became effective · what proves it |

**B is governed by the authority grammar OMNI already has** — §4.3's four stages, §4.5's decision conditions, §4.6's seat/principal/actor/grant, `INV-30`'s non-fungible refusal. **A is what was missing.** The prior authority work was not the wrong instrument; **it was the B-instrument, and nobody had built the A-context for architecture resources.**

> **`G1-FIND-38` — the composition was in §4.1 of this carrier the whole time.** §4.1 says *"Authority contains standing structures that are not transitions; flattening them makes consequential transition a god-abstraction"* — and then four passes flattened resource governance into transition authority anyway. **`G1-FIND-34` is corrected: not "misapplied by type" but "applied to B while A was never built,"** which is a smaller error and a more actionable one.

## §E10.3 — Regrouped by rightful object

| Object | Bindings |
|---|---|
| **the resource** *(A-layer, standing)* | `resource_steward` · `semantic_authorities[]` *(scoped)* · `authorized_maintainers[]` · `review_requirements[]` · **`protected_surface`** *(what may not be written without passing a gate)* |
| **the change transaction** *(B-layer, per proposal)* | `approval_policy_refs[]` **in** → `effective_approval_condition` **derived** → attributed approvals · refusals · abstentions · conditions → `acceptance_decision` → **`integration_grant`** *(bounded, expiring)* → `integration_receipt` |
| **control bindings** *(mechanism ↔ obligation)* | `enforcement_bindings[]` (`§E10.8`) |
| **the occupancy register** *(mutable operational record, NOT architecture)* | `holder_assignments` — §4.6's seat/holder split |
| **the schema** *(M2)* | kernel field list · schema revision · acceptance authority (`§E10.10`) |

## §E10.4 — `approval_policy` is plural in, singular out

```
approval_policy_refs[]        universal · resource-protection · domain-owner · risk-class
                              · jurisdictional/regulatory · operator/deployment · SoD · emergency
        ↓  resolved for ONE proposed change            [CAN→3/5 — the resolution ALGORITHM]
effective_approval_condition  a derived, attributed artifact — never hand-authored          [KND]
        ↓  satisfied by
attributed approvals · refusals · abstentions · conditions                       [INH §4.5, INV-30]
```

**The prohibition that matters:** **no manually authored "effective policy" may be stored.** A flattened policy is a policy whose sources cannot be re-derived, which is `F-06`'s *count outliving its table* in the approval layer. Palantir composes resource-level protection with project-level policy; GitHub layers multiple rulesets — **plural sources are the normal case, not the exception.**

## §E10.5 — Representational cardinality ⟂ governance conformance

| | |
|---|---|
| **schema** | `resource_steward_binding` = `0..1` · `integration_grant` = `0..1` per transaction · `approval_policy_refs[]` = `0..n` |
| **conformance rule** `[CAN→6]` | an **accepted or active** resource MUST resolve **exactly one** accountable stewardship seat; a landed change MUST have exactly one integration grant and a satisfied approval condition |

**Why this matters beyond tidiness:** `AMM-C4` made a steward mandatory, so **the estate's actual condition — zero declared stewards — would have been unrepresentable rather than diagnosable.** A model that cannot express the broken state it was built to measure cannot measure it.

## §E10.6 — Integration authority moves to the transaction

**`integration_grant`** belongs to the change and its landing, not to the resource forever. A resource declares a **`protected_surface`** and its **review requirements**; the *grant to land an accepted revision* is issued per transaction, is bounded, and **expires on verification** — which is exactly what the G0 receipt did and what §0.2 recorded when the appointment ended.

## §E10.7 — Every governance binding is effective-dated M1 data

**Each of `resource_steward_binding` · `semantic_authority_binding` · `maintainer_grant` · `review_requirement` · `approval_policy_reference` · `enforcement_binding` carries:** subject *(resource or revision)* · scope · **`effective_from` / `effective_to`** · provenance · governing decision · status · supersession-or-revocation. **Same law as `§E8.1.3`, inherited rather than re-stated** — otherwise OMNI could say which suite verified a resource in March but not who stewarded it, which policy applied, or whether its enforcement binding existed then.

## §E10.8 — `enforcement_bindings[]`, scoped to obligations

```
enforcement_binding
  mechanism_ref            CODEOWNERS · ruleset · CI check · RLS policy · runtime guard
                           · platform control · federated-operator control · manual procedure
  enforced_obligations[]   WHICH governance obligation this mechanism actually enforces
  target / environment     repo · deployment · tenant · runtime · external system
  desired_state · observed_state · observed_at · verification_evidence
```

**Rule `[KND]`:** a mechanism binding may claim **only** the obligations it actually enforces. **A CODEOWNERS entry is not evidence that approval, semantic-authority or integration rules are enforced** — and per `G1-FIND-36` it cannot enforce OMNI approval at all, since it is satisfied by *any* listed owner.

## §E10.9 — Sealing the meta-kernel

**`§E9.4`'s termination rule is kept and given a root of trust**, because without one it is an authority bypass: any inconvenient relation could be renamed a "kernel field" and escape governance.

1. **Closed kernel-field list** — exactly `describes` · `carries` · `asserted_by` · `governed_by` · `supersedes_assertion`. Additions require an M2 revision `[KND]`.
2. **M2 identity + immutable revision**; **no semantic or policy rule may be relocated into a kernel field** — the anti-bypass clause.
3. **M2 acceptance authority** = `cross_cutting_architecture_acceptance` `[CAN→3]`.
4. **Migration/compatibility rule** for an M2 revision `[CAN→3]`.
5. **Historical snapshots are interpreted under their pinned M2** — a snapshot records the schema version it was computed under (`§E9.4`), so regenerating under an amended schema cannot silently change what the past said.

## §E10.10 — Narrowed intake rule

> **Before claiming novelty, absence, closure, or an external correspondence for a mechanism the controlling plan assigns to a named comparator, consult that source to the depth material to the claim.** *(Not: read every comparator before sketching.)* **And per R8 §3.9.1, "novel" additionally requires failing `M-106` EXISTS-AS against the six registries — Lane 3, which is mandatory and which this arc had never run.**

---

## §E10.11 — The Lane-3 `M-106` EXISTS-AS check, finally run

**Bounded exactly as R8 specifies: the six concept registries are the consumption unit; the raws are NOT rescanned.** Searched for ownership · accountability · stewardship · authority-provenance across all six routing maps.

| Already routed by the corpus | Wave | What I did |
|---|---|---|
| **`ai_layer_ownership_dri`** — *"the AI/harness layer needs a named org OWNER/DRI; **org-design ownership distinct from runtime**"* | **2** | **This is the steward ⟂ runtime-authorization distinction I imported from Backstage at pass four.** It was routed here first |
| **`demand_signal_ownership`** + *"[shared reviews / tool restrictions / monitoring] is theater; **OMNI doctrine/contracts MUST compile to runtime enforcement**"* | **2** | **This is `G1-FIND-37`, and the corpus states it harder than I did.** I wrote *"declared and observed are different classes of fact."* The corpus wrote *"governance that does not compile to enforcement is theater."* **`G1-FIND-37`'s novelty claim FAILS EXISTS-AS** |
| **`AI_control_runtime_binding`** — *"governance must compile in[to runtime]"*; *"OMNI has the organs, **not the declared accountable program**"* | **5** | Same rule from the AI-management-system angle. **Also fails EXISTS-AS** |
| *"the substrate must know… **who owns them, when they expire**… and how to rotate them"* | **3** | **Ownership with expiry and rotation as a substrate property** — the effective-dated governance binding of `§E10.7`, routed a year earlier |
| **`dismissal_as_committed_decision`** — *"dismissing a finding is itself a committed, audited, accountable decision — not a casual ignore"* | **2** | Corroborates `INV-30`'s non-fungible refusal **and extends it: a non-decision is a decision.** `§E10.4`'s condition must therefore admit **abstentions and dismissals as attributed acts**, which it now does |
| *"harness-sovereignty **vs domain-ownership**"* tension | **4** | The god-architect problem, already named as a live tension |
| *"judgment/authority/relationship/dissent/**accountable-commitment** stay human/domain-owned"* | **6** | The semantic-authority-stays-plural-and-human rule |

### §E10.11.1 — The frontier double-evaluation R8 §3.9.2 requires, applied to my own four sources

**Method is this carrier's own `§E3`.** The question: *what does this mechanism assume that stops being true when a thousand agents a day propose changes, review capacity is the bottleneck, drift is continuous, and the reader is more often a machine than a person?*

| Mechanism | Current practice | Agent-native 2030/35 | Label | Frontier gap |
|---|---|---|---|---|
| Backstage singular owner | pass | **fail** | **`current_practice_only`** | an owner is *"a **point of contact** if something goes wrong"* — **a human paging a human.** At agent scale the binding must be machine-resolvable and gate-bearing, not a directory entry |
| CODEOWNERS routing | pass | **fail** | **`current_practice_only`** | auto-**requests** a human reviewer, and **any one owner satisfies it.** Assumes elastic human review capacity — the exact assumption `§E3`/`G1-FIND-06` already flagged across 7 of 10 capabilities |
| AWS register + tags | pass | **fail** | **`current_practice_only`** | *"a wiki page that identifies ownership"* — **a hand-maintained register drifts continuously and is never checked**; it is `F-06` as an operating model |
| Palantir approval policy | pass | partial | **`current_practice_only`** | composition is right; **the approvers are humans and the policy is configured, not derived.** Closest of the four to the frontier form |

> **`G1-FIND-39` — I fixed a real defect with four 2020s mechanisms and shipped them as the answer.** The reviewer/owner conflation **was** genuine and the vendor sources **did** repair it — that part stands. But **all four assume elastic human review capacity and episodic change**, which `§E3` had already identified as the failure mode of 7 of 10 operations capabilities, and **the corpus had already routed the frontier form of the same rule: *governance must compile to runtime enforcement, or it is theater.*** **The vendor mechanisms are the bean sprout; the registries held the seed.** R8 §3.9.2 predicted this failure in the operator's own words and I reproduced it anyway.
>
> **What changes, concretely:** `enforcement_bindings[]` is no longer an *observability* facet reporting what the platform happens to be configured to do. **It is the compile target.** A governance obligation with no enforcement binding is not "undocumented" — under the corpus's own framing it is **theatre**, and `§E10.5`'s conformance rule should eventually say so `[CAN→6]`.

---

## §E10.12 — Three traces

**T-1 · the `B-1` transaction** *(the live one; §0.2)*. Opus authored the R8/R9 normalization → Knox reviewed → **Nick accepted at an exact head** → Opus integrated under a bounded grant → verified on the base → **the appointment expired.** Under `AMM-C4.1`: the resource's A-bindings (steward, semantic authorities, protected surface) stand throughout; the **`integration_grant` is a B-object with `effective_from` at acceptance and `effective_to` at verification.** **PASS** — and it is the only trace carried by a real transaction rather than a synthetic. **Residue:** the receipt records *holders*, and no `resource_steward_binding` for R8 or R9 existed before, during or after — **the transaction was governed and the resources were not.**

**T-2 · layered policy on one change** *(a revision to `contracts/rbac_authority_contract.md`)*. Five policy references apply simultaneously — universal (*no actor self-authorizes*, §4.7) · resource protection (domain contract) · domain-owner requirement (RBAC) · risk class (authority substrate) · separation of duties (proposer ≠ accepter, §4.5). **PASS as representation:** five `approval_policy_refs[]` in, one derived `effective_approval_condition` out, **no flattening, and every source re-derivable.** **What this trace does NOT do — and must not:** it does not resolve precedence between them, does not say what happens if the domain owner refuses while operator policy permits, and does not compute the condition. **Those are Outputs 3 and 5** (`[CAN→3/5]`). *(Weak-evidence caveat: I designed the shape against this case. The estate fact that carries independent weight is that **all five sources already exist in the estate and none of them is currently referenced by any resource.**)*

**T-3 · steward vacancy and transfer.** Represent a resource with **no** steward (`0..1` = none) → **governance conformance FAILS** for an active resource → a holder is appointed to the stable seat → the vacancy interval remains a **dated fact**, not an erasure. **PASS** — and the estate supplies the live instance: `§E4b` scenario 4, *"a seat with no holder — demonstrated live by the vacant integrator."* **The point of the trace is that the vacancy must survive its own repair**, because *"who was accountable in March"* has to remain answerable after someone is appointed in April.

---

## §E10.13 — `AB-08`: a state change, not a closure

**The semantic answer has now survived four candidates and three independent reviews unchanged, and an independent reviewer has endorsed it on the merits:**

> **Reject both "17 classes" and "5 tiers."** They classify different things. The answer is five separable functions: **carrier governance class** (what kind of physical carrier) · **logical resource kind** (what architectural thing) · **placement policy/role** (where it may live, under what conditions, with what forbidden content) · **granularity/containment** (which clauses are addressable parts rather than new kinds) · **an open, steward-governed kind registry** (a new kind requires materially different lifecycle, authority, ownership or conformance semantics).

**State: `AB-08_SEMANTIC_ANSWER_INDEPENDENTLY_REVIEWED__READY_FOR_OPERATOR_STEWARD_CLOSURE`.** This is **materially different from "proposed by the author"** and it is **not closure** — the row is owned by the `architecture_steward`, this seat holds `proposal_authoring`, and the ledger transition belongs to the accepting transaction. **What it does mean: `AB-08` is no longer hostage to the rest of the metamodel.** The surviving `AMM-C4.1` defects — policy composition, transaction scoping, governance effectivity, frontier form of enforcement — **are not taxonomy-granularity questions and never were.**

## §E10.14 — Status

| Field | Value |
|---|---|
| **Output 1** | **`ACCEPTED_AS_G1_PROPOSAL · 1_OF_8_COMPLETE`** — accepted 2026-08-13 by operator + `architecture_steward`, relayed through independent review, at proposal head **`480f3bbb2a63d81dec4b091d3cd5871e3ddd4e83`** / blob `06eb5505dee5b6e4dd2d06cf4a1877b788de2d08`. **Bounded acceptance (`§E12.7`): the structural DECOMPOSITION only.** It does **not** promote this dossier to doctrine, **not** accept the enumerated facet value sets, and **not** settle precedence, policy composition, dispute lifecycle, operationalization modes, risk acceptance, independence dimensions, non-loosening, effective resolution or conformance algorithms — all routed to Outputs 3/5/6 and G2. **It does not accept or close G1.** *(R8.4's “discharged / conditionally accepted” stays withdrawn. R8.5 corrected the four structural over-simplifications; R8.5b normalized four current surfaces that still contradicted them — including a fifth provenance mislabel and a mixed value set inside the fix for a mixed value set.)* Boundary at `§E12.7`: **the facet DECOMPOSITION is core; every enumerated VALUE SET plus the operationalization vocabulary, `derogability`, the risk-acceptance schema and `independence_assessment` are CARRIED to Outputs 3/5/6.** **Proof 1 (`§E12.7.1`) — the anti-collapse laws are INHERITED; the architecture-resource specialization is a CANDIDATE transfer. Global unambiguity of a reference ≠ global sovereignty of authority: an origin-qualified reference is unambiguous with no central issuer, and `T0-14` forbids only the authority.** **Proof 2 (`§E12.7.2`) — origin assertion state is ISSUER-scoped; local admission is a SEPARATE `applicability_decision` by the receiving namespace; dispute is an ORTHOGONAL challenge resource, not a state value; origin-validity + active local admission + `as_of` are NECESSARY, not sufficient.** **Three binding carries (`§E12.7.3`), digest precondition strengthened to descriptor + stable constituents + canonical manifest + pinned canonicalization.** **Stated without self-flattery:** the core survived four reviews, and R8.1/R8.2 each shipped constructions inside passes labelled cleanup (`G1-FIND-43`, `F-12`) |
| **Withdrawn / corrected in R8** | `G1-FIND-34`'s acts/artifacts framing → **the A⟂B composition §4.1 already specified** · `approval_policy` singular · `resource_steward` mandatory cardinality · resource-scoped integration authority · timeless governance edges · `repository_enforcement[]` · the machine-verifiable/declared binary · the broad intake rule · **`G1-FIND-37`'s novelty claim, which FAILS `M-106` EXISTS-AS against waves 2 and 5** |
| **The obligation — CORRECTED IN R8.1** | **`ownership_and_resource_governance_scope_M106` = COMPLETE** across six routing maps. **`full_G1_Lane3_M106` = PARTIAL** — §3.9.1 requires it for **every** operations capability and it has run for one; owned by `B-8` (`§E11.A`). **The four `current_practice_only` labels are WITHDRAWN as an overcorrection**, replaced by durable mechanism ⟂ current adapter ⟂ frontier residue (`§E11.C`) |
| **`AB-08`** | **`CLOSED · adopted_narrowed`** in the binding PRE-0 ledger, 2026-08-13 — independently accepted on the merits; normalized at `§E11.G`, narrowed at `§E12.5`. **The ledger receipt has landed; no further fixture is owed** |
| **Minted** | **nothing** |
| **Output 2** | **NOT STARTED** |

## §E10.15 — Source posture for R8

**Read fully:** the R7 review · R8 **§3.9.1 and §3.9.2** *(the mandatory Lane-3 rule and the frontier obligation, in the operator's own words)* · §4.1 of this carrier *(the A⟂B structure I had failed to apply)*.
**Consulted deeply — Lane 3, the six AI-corpus concept registries, bounded to their routing maps as R8 specifies:** `EVRUN-2026-000001` · `000002` · `000003` · `000005` · `000006` · `000011`. **Raws NOT rescanned, per R8.** Searched for ownership · accountability · stewardship · authority-provenance; seven already-routed concepts recovered at `§E10.11`.
**Carried from R7, not re-opened:** Backstage · CODEOWNERS/rulesets · AWS `OPS02-BP01` · Palantir — **now labelled `current_practice_only`** rather than treated as the answer.
**Not inspected — declared:** the 300+ raw ingests *(R8 forbids rescanning; the registries are the consumption unit)* · the remaining Lane-1 sources · the rest of the G1 source floor. **`B-8` unchanged — one Lane-3 search is not Lane 3 consumed.**
**Live-repository verification:** entered at `6a2a3ff17baa0c5ebda2850fd70d94ac395e70c9`. Boot Freshness Check **PASS**; `check-checkpoint-pointer.mjs` **PASS**; exactly one file modified.

---

# §E11 — Output 1 · R8.1 · closeout amendment — source hierarchy, operationalization, and surface normalization

> **No `AMM-C5`. No new fixture. No new external research. No raw-video rescan.** The central `AMM-C4.1` model survived review; what failed is **source discipline** and **current-state propagation**.

## §E11.0 — The diagnosis, accepted, and the self-indictment it produces

**The review's name for this is better than any I produced: *serial source capture*.** Whichever source was opened most recently became the altitude of the architecture — our own prose, then a standards mechanism, then a vendor implementation, **and last pass, a frontier registry**. That is not synthesis.

**And the specific instance is worse than the general pattern, because it happened inside the pass that diagnosed it.** Verified against the source:

- The wave-2 registry declares itself **`Layer: omni_analysis_nonbinding`** · *"Proposes routes; promotion passes each home's gate (`GRD-036`/`GRD-044`)"* · **`pending promotion gate`**.
- The *"control that can't be enforced in product… is theater; OMNI doctrine/contracts MUST compile to runtime enforcement"* line is tagged **`NEW` (candidate GRD; HARDENS 056 + 136; ex-FDA AFFIRM)**, status **`PARTIAL`**.

**R8 took a `PARTIAL`, candidate guardrail from a regulator-adjacent speaker's personal view, inside a nonbinding workbench pending its promotion gate, and wrote it into the carrier as *"`enforcement_bindings[]` is not an observability facet, it is the compile target."*** That is **`GRD-036` — promotion by vibes — committed in the same pass that criticized treating a vendor page as the answer.** Same defect, opposite source.

> **`G1-FIND-40` — EXISTS-AS defeats novelty; it does not establish truth.** A registry match proves the concept was **routed**. It proves nothing about correctness, maturity, adoption or authority, because the registries are propose-only workbenches whose own contract says nothing is canon until it passes the destination gate. **The correct chain: raw source → registry signal + tension + routing → `M-106` classification → *reopen the exact source anchor when the claim becomes load-bearing* → OMNI transfer/narrowing/rejection decision → destination authority gate → accepted architecture → control and proof.** Rescanning 300 raws is not required and promoting a one-line synthesis is not permitted.

## §E11.A — Lane-3 status corrected

**The carrier said both *"the obligation discharged"* and *"one Lane-3 search is not Lane 3 consumed."* Both cannot be current.**

| | |
|---|---|
| `ownership_and_resource_governance_scope_M106` | **COMPLETE** — executed across all six routing maps |
| `full_G1_Lane3_M106` | **PARTIAL** — R8 §3.9.1 requires the check *for every operations capability*; it has run for **one**. Owned by **`B-8`**; no new blocker minted |

## §E11.B — The seven matches, reclassified — and one of them was my conflation

**R8 presented seven hits as *"ownership concepts the corpus had already routed."* Re-read against the sources, they are not seven copies of one model.**

| Concept | Wave · posture | Class | Transfer limit |
|---|---|---|---|
| *"who owns them, **when they expire**… how to rotate them"* | 3 · routing signal | **`EXACT_EXISTS_AS`** | The strongest match: ownership **with expiry and rotation** is the effective-dated governance binding. Concept routed; **no promotion** |
| `ai_layer_ownership_dri` — org-design ownership distinct from runtime | 2 · thin candidate, vendor-primary harness source, flagged for confirmation | **`SHARPENS`** | Sharpens steward ⟂ runtime-authorization. **Org-design ownership of the AI layer is NOT an architecture-resource stewardship binding** |
| *"…MUST compile to runtime enforcement"* | 2 · **`NEW` candidate GRD · ex-FDA AFFIRM · `PARTIAL`** | **`SHARPENS` + `TENSION`** | **Defeats `G1-FIND-37`'s novelty claim and establishes NO law.** A candidate guardrail from a personal regulator-adjacent view; see `§E11.D` |
| `AI_control_runtime_binding` | 5 · **PROPOSE-ONLY** | **`SHARPENS`** | Same rule, AI-management framing. Propose-only |
| **`demand_signal_ownership`** | 2 · SHARPEN of `use_case_first_AI` | **`ADJACENT` — and R8 CONFLATED IT** | The source says *"the operator owns the **problem**, not the vendor… adds the **who-owns-the-demand** axis; distinct from demand-creation."* **That is demand ownership, not architecture-resource stewardship.** R8's EXISTS-AS claim against it was **wrong** and is withdrawn |
| `dismissal_as_committed_decision` | 2 | **`SHARPENS`** | Approval semantics, not ownership: **a non-decision is an attributed decision.** Feeds `§E10.4`'s condition, not the steward binding |
| harness sovereignty **vs** domain ownership | 4 | **`TENSION_OR_COUNTEREVIDENCE`** | Named as a live tension, not a model. It is the god-architect problem stated as a pressure |
| accountable commitment stays human/domain-owned | 6 | **`SHARPENS`** | Supports plural scoped semantic authority |

**Honest recount — ★ CORRECTED IN R8.2, because the recount was itself wrong.** The eight rows are **1 `EXACT` · 4 `SHARPENS`-only · 1 `ADJACENT` · 1 `TENSION`-only · 1 `SHARPENS`+`TENSION`**; `1+4+1+1+1 = 8` ✔. R8.1 wrote *“one exact, four sharpens, one adjacent, one tension”* = **seven**, silently dropping the mixed row — **`F-06` inside the section written to correct `F-06`** (`§E12.0`). Not *“seven ownership concepts already routed.”* **`G1-FIND-37`'s novelty claim still fails — the concept was routed — but nothing in the corpus makes the stronger form law.**

## §E11.C — The four mechanisms: durable ⟂ current adapter ⟂ frontier residue

**R8's *"all four are `current_practice_only`"* is withdrawn as an overcorrection.** Its reasoning reduced to *humans are involved, therefore it fails 2030*. **A human-heavy operating profile is not an obsolete mechanism** — and the binary threw away the durable half of each source.

| Source | **Durable mechanism** | **Current adapter/profile** | **Frontier residue** |
|---|---|---|---|
| Backstage | a **stable responsibility relation attached to a resource**; one accountable steward; contributors ≠ owner; **ownership ≠ runtime authorization** | display and discovery; a human point of contact | machine-resolved stewardship · effective dates · vacancy and transfer · linkage to policy, review, enforcement and impact traversal |
| CODEOWNERS | **path/resource → review-routing declaration** | file-path based; human review queue; **OR semantics** | affected semantic-authority set derived from the impact graph · non-fungible refusal · independence/correlation requirements · machine-checkable control reconciliation |
| AWS `OPS02-BP01` | **define the responsibility dimensions, then record them on the resource or in a register** | tags, procedures, sometimes hand-maintained registers | governed descriptor relation · effective-dated ownership · drift detection · impact-triggered review. *(R8's "it's a wiki page" was a cheap shot at one example in the doc, not the mechanism)* |
| Palantir | **resource protection · policy composition · edit ≠ review ≠ merge · ministerial landing after policy satisfaction** | human reviewers; configured rather than derived policies | machine-derived affected-resource policy set · agent reviewers with evidence/correlation classes · continuously recomputed approval conditions |

**Rule `[KND]`:** *"the current product configuration does not scale to ten thousand agent proposals"* and *"the underlying architecture principle does not scale"* are different findings. **Record all three columns; never collapse a mechanism to a verdict.**

## §E11.D — Operationalization, not enforcement absolutism

**Withdrawn:** *"`enforcement_bindings[]` is the compile target; an obligation without one is theatre."*

> **★ CORRECTED IN R8.2 — what follows is the OPPOSITE absolutism and is narrowed.** A patient right **does** support deterministic consent checks, access prohibitions, required disclosure, logging and escalation. **Corrected: some of OMNI's highest-consequence obligations cannot be EXHAUSTED BY deterministic enforcement**, and need enforceable boundaries **combined with** attributable judgment, evidence, review and remedy. The mode list below is also made **plural** (`operationalization_bindings[0..n]`), loses `accepted_residual_risk` to its own authority-bearing object, gains a `derogability` facet so the non-waiver rule is checkable, and is relabelled **`[CAN→6]`** (`§E12.1`).

**And the reason this matters for OMNI specifically is sharper than the review put it.** `INV-30` holds that a majority may not vote away an **independently liable principal's refusal, a patient right, or a professional duty**. Those are precisely the obligations that **cannot compile to a deterministic runtime deny**. A clinician's judgment, a legal interpretation, a board's risk acceptance — none of them compiles. **So "compile or it's theatre," applied faithfully, would have declared OMNI's most important invariants theatre.** An architecture that can only represent what it can automatically prevent cannot host care.

```
operationalization_binding                                                     [KND]
  obligation_ref
  mode ∈  prevent · constrain · require_approval · detect · alert · attest
        · audit · sample_review · accountable_human_judgment · accepted_residual_risk
  target · desired_state · observed_state · evidence · effective_interval
```

> **The corrected rule:** *every accepted governance obligation must carry an explicit **operationalization disposition**. An obligation with no implementation, review, detection, evidence or accountable-judgment path is **inert**.* **Runtime enforcement is one mode among ten — the strongest where it applies and unavailable where OMNI matters most.** The corpus's real warning survives: *an obligation nobody can point to a path for is decoration.* `[CAN→6]` for the conformance check.

## §E11.E — The bootstrap governance profile: preserve the functions, generalize the occupants

**The operator's framing is correct and belongs on the record: *the trifecta is the bootstrap Build OS building the Build OS that will build OMNI*.** It is a **live operating profile and fixture**, not a constitutional primitive and not an actor count.

| Function | Current bootstrap occupant |
|---|---|
| operator intent + consequential acceptance | Nick |
| repository-native synthesis and proposal construction | Opus |
| independent architectural challenge and falsification | Knox |
| bounded landing of an already-accepted set | Opus, under a transaction-scoped grant that **expires** |

**`B-1` already ran this end to end** (`§0.2`, trace `T-1`): authored → independently reviewed → **operator accepted at an exact head** → integrated under a bounded grant → verified → **grant expired.**

**Generalized profile — seats, not people:** proposal/synthesis · affected semantic authorities *(non-fungible)* · independent falsification · effective approval condition · acceptance authority · bounded integration grant · evidence and verification receipt · holder assignments in a mutable register. **Two actors or twenty; one holder may occupy several seats only where separation of duties permits; a reviewer need not be a writer; an integrator need not own the semantics; an agent may occupy a bounded seat without self-originating authority. Nick, Knox and Opus are none of them hard-coded.**

> **`G1-FIND-41` — and this is the constraint the profile table cannot express, which the estate already found: independence is a property of a PAIR, not of a seat.** `§E4b` scenario 5 established that *"separate agents are not independent evidence"* and that the receipt must carry an **evidentiary-independence class**. Two instances of one model family in the proposer and reviewer seats satisfy every seat rule and produce **zero** independent review. **So the generalized profile needs `independence_class` on the *relation between holders*, not on the holders** — otherwise "twenty trifectas" is twenty copies of one opinion. `[CAN→3]`. Routed across Outputs 2 *(the loop)*, 3 *(seat/independence/refusal relations)*, 5 *(the condition for this exact change)* and 6 *(proving the required independence actually occurred)*.

## §E11.F — Surface normalization receipt

**Eight surfaces verified stale and repaired. Three of the review's seven findings were this same defect** — the correction gets written in the new section and never propagated to the surfaces that summarize it, which is precisely what the `§G1-CONTRACT` **Global completion rule** exists to prevent.

> **`G1-FIND-42` — current-state propagation is now the dominant remaining defect, larger than any modelling defect.** Five passes, and every one wrote a correct correction into a new section while leaving the posture box, the contract cell, the blocker table, the STOP receipt or the ledger row asserting the superseded version. **A model that is right in one section and wrong in five summaries is wrong.** → the consistency validator at `§1.2`, `B-15`, G2.

| # | Stale surface | Repaired to |
|---|---|---|
| 1 | *"The obligation discharged — Lane-3 `M-106`"* | scoped-complete ⟂ full-partial (`§E11.A`) |
| 2 | opening posture presenting R6's `3/6/7` as the current result | labelled **R6 historical, withdrawn in R7** |
| 3 | `§G1-CONTRACT` Output-1 cell pointing at `§E8` (`AMM-C3`) | **`§E10`/`§E11` (`AMM-C4.1`)**; R4–R8 are evidence history |
| 4 | *"Lane 3: six registries ✔"* | scoped/partial |
| 5 | STOP receipt asserting *"3 of 25 tested logical resources"* | **removed from current state**; preserved inside the R6 record |
| 6 | STOP receipt carrying the withdrawn acts/artifacts diagnosis | **standing resource governance ⟂ consequential resource-change transaction** |
| 7 | `B-3` reading *"fixture RUN TWICE; `AMM-C2` awaiting the steward"* | current state |
| 8 | old `G1-FIND-29` (*"one ledger in four"*) unmarked | **`SUPERSEDED_BY_R7_CORRECTION`** |

## §E11.G — `AB-08` row normalized

**The live row still carried two things the carrier itself had already withdrawn:** the absolute *"finer granularity is `part_of`, not a longer list"* — narrowed in R6 and then **decomposed into five distinct relations** in R8 — and a pointer to `§E7` as the current disposition.

**The accepted five-function answer:**

1. **Carrier governance class** — what kind of physical carrier, under which governance rules.
2. **Logical resource kind** — what architecture object it represents.
3. **Placement role/policy** — where it may live, under what state and authority, with what content forbidden *(a predicate over kind + decision state + normative effect + scope + epistemic role, `[CAN→3]`)*.
4. **Addressable granularity and composition** — which clauses are separately identifiable, and which of `contained_in` · `member_of` · `participates_in_view` · `included_in_profile` · `decomposes_into` applies.
5. **Open, steward-governed kind registry** — a new kind is warranted when **lifecycle, authority, ownership or conformance semantics differ materially**, not merely when finer granularity is wanted.

**`AB-08_ACCEPTED_IN_SUBSTANCE__PENDING_OPERATOR_STEWARD_RECEIPT`.** No further `AB-08` fixture is required.

## §E11.H — Status

| Field | Value |
|---|---|
| **Output 1** | **`AMM_C4_1_CORE_REVIEWED · CLOSEOUT_AMENDMENT_COMPLETE · READY_FOR_STEWARD_ACCEPTANCE_AS_A_PROPOSAL`** — the first time this arc has reached that state, and it is **acceptance as a proposal**, not completion of G1 |
| **Withdrawn in R8.1** | *"Lane-3 discharged"* · *"seven ownership concepts already routed"* *(one exact, four sharpen, one adjacent-and-conflated, one tension)* · the `demand_signal_ownership` EXISTS-AS claim · *"all four vendor mechanisms `current_practice_only`"* · **`enforcement_bindings[]` as the universal compile target** · the eight stale surfaces |
| **`AB-08`** | **`ACCEPTED_IN_SUBSTANCE__PENDING_OPERATOR_STEWARD_RECEIPT`** |
| **Minted** | **nothing.** No new external research, raw scan, fixture, registry, route, catalog edit, gate, checkpoint, branch or PR |
| **Output 2** | **NOT STARTED** |

## §E11.I — Source posture for R8.1

**Read fully:** the R8 review · **the wave-2 registry header and the `demand_signal_ownership` / "theater" entries in their own context** *(which falsified two of my own R8 claims)* · the eight stale surfaces in this carrier, each verified before repair.
**Consulted:** wave-5's propose-only declaration · `§E4b` scenario 5 for the independence-class constraint · `INV-30` for the non-compilable obligations.
**Not inspected — declared:** the 300+ raw sources · **the exact source anchors behind six of the seven registry matches** *(only the wave-2 entries were reopened; per `§E11.0`'s chain, an anchor must be reopened before any of these becomes load-bearing)* · the remaining Lane-1/Lane-2 floor. **`B-8` unchanged.**
**Live-repository verification:** entered at `70223ce374b0bf6ca22ee5240552c12ba6f6d0b5`. Boot Freshness Check **PASS**; `check-checkpoint-pointer.mjs` **PASS**; exactly one file modified.

---

# §E12 — Output 1 · R8.2 · micro-correction

> **No new architecture beyond making R8.1's own constructions coherent.** Six bounded repairs, then stop.

## §E12.0 — The tally, and what it proves

**`§E11.B` has eight rows. Its summary said seven.** Corrected, and stated per class so it can be checked against the rows:

> **8 distinct claims: 1 `EXACT` · 4 `SHARPENS`-only · 1 `ADJACENT` · 1 `TENSION`-only · 1 `SHARPENS` + `TENSION`.** `1+4+1+1+1 = 8` ✔ *(the mixed row — wave-2's compile-to-enforcement candidate — was dropped from the R8.1 count.)*

**This is `F-06` inside the section written to correct `F-06`,** and it lands on the pass that declared count integrity and propagation repaired.

> **`G1-FIND-43` — a closeout that introduces new architecture is not a closeout.** R8.1 framed itself as source discipline plus housekeeping and then shipped **two new constructions** — `operationalization_binding` and the independence relation — one of which carried a value collapse. **Scope creeps invisibly when a pass is labelled cleanup**, because a cleanup pass does not get the scrutiny a model pass gets, from the author least of all. **Rule: any pass that adds a construct is a model pass and is labelled one, whatever else it also does.**

## §E12.1 — Operationalization, corrected

**`§E11.D` fixed enforcement absolutism and recreated `F-08` doing it.** Four repairs:

**① Operationalization is plural.** One obligation routinely needs several controls at once — `prevent` + `detect` + `audit`, or `require_approval` + `attest`. R8.1 made the obligation pick one.

```
obligation → operationalization_bindings[0..n]
operationalization_binding → exactly ONE mode                                   [KND: the linkage]
mode ∈ prevent · constrain · require_approval · detect · alert
     · attest · audit · sample_review · required_attributable_judgment          [CAN→6: the vocabulary]
```

**② `accepted_residual_risk` is removed from the mode enum** — it is not a way of operationalizing an obligation, it is **an authority-bearing decision taken after evaluating the controls and the unresolved exposure.** Leaving it in the enum lets a resolver "operationalize" a patient right by selecting it.

```
risk_acceptance_decision                                                        [CAN→3]
  accepting_authority · risk_scope · rationale · compensating_control_refs[]
  evidence · effective_interval · expiry · review_trigger · revocation
```

**Two additions the review did not name, and both are load-bearing:**

- **A risk acceptance is itself a consequential act (B-layer) and needs its own operationalization.** Who checks that the compensating controls still exist? Who fires the review trigger? **An acceptance with an expiry and no binding enforcing the expiry is a timeless edge** — the defect this carrier has now recreated three times. `review_trigger` and `expiry` must each carry an `operationalization_binding`, or the acceptance quietly outlives its premise. *That is the failure mode of every accepted-risk register in every regulated organisation.*
- **The non-derogability prohibition needs a representable predicate or it is decoration.** *"Residual-risk acceptance may not waive a non-derogable right or an independently borne duty"* is unenforceable prose unless obligations carry it as a facet:

```
derogability ∈ non_derogable · derogable_with_named_authority · derogable        [CAN→3/6]
```

**★ CORRECTED IN R8.3 — the provenance label was wrong for the third time.** `INV-30` supplies the **non-waiver requirement** and the `non_derogable` membership; it does **not** establish a universal three-value facet, that every obligation carries it, or what `derogable_with_named_authority` means. **The requirement is `[INH]`; the facet and its value set are my synthesis and are `[CAN→3/6]`.** *(I have now marked my own invention inherited three times, each time on a construction I was pleased with.)*

**`INV-30` already supplies the `non_derogable` set:** an independently liable principal's refusal · a patient right · a professional duty.

> **★ CORRECTED IN R8.3 — I had the predicate wrong, and the consequence was worse than a modelling slip.** I wrote that a risk acceptance *touching* a `non_derogable` obligation is an undrawable edge. **That would make it structurally impossible for OMNI to record known noncompliance with a patient right** — which is the first thing an auditor, a regulator or an acquirer asks for, and the entire purpose of a risk register. **A risk acceptance MAY reference a non-waivable obligation** (*“we have a known residual risk of failing to satisfy this duty”*). **What is forbidden is the predicate:** `risk_acceptance --waives|satisfies|overrides|discharges|suspends--> non_derogable_obligation`. **Risk acknowledgement is not authority to legalize noncompliance, and honest disclosure must stay representable.** The full risk-acceptance schema is routed to **Outputs 3/6**, not settled here.

**③ The opposite absolutism is withdrawn.** R8.1 said patient rights and professional duties are *"precisely the obligations that cannot compile"* and that runtime enforcement is *"unavailable where OMNI matters most."* **Too absolute in the other direction.** A patient right supports deterministic consent checks, access prohibitions, required disclosure, logging and escalation. **Corrected:** *some of OMNI's highest-consequence obligations **cannot be exhausted by** deterministic enforcement; they require enforceable boundaries **combined with** attributable judgment, evidence, review and remedy.*

**④ Provenance corrected and the inertness claim narrowed.** The *linkage* obligation→operationalization is `[KND]`; **the ten-mode vocabulary is new synthesis and is relabelled `[CAN→6]`** — R8.1 marked its own invention inherited, which is the exact failure `§E9`'s provenance scheme exists to prevent. And:

> **Withdrawn:** *"an obligation with no path is inert."* **Corrected: an accepted obligation with no operationalization path is *operationally unimplemented and nonconforming*. It does not thereby stop being semantically or legally binding.** In care that distinction is the whole difference between a gap and a permission — an unimplemented statutory duty is a **defect**, never a waiver.

**And `accountable_human_judgment` is renamed and defined**, because as a bare label it means nothing: **`required_attributable_judgment` — a named seat must render a determination, recorded with its basis and attributable to its holder.** It composes with `audit` and `sample_review`.

> **★ CORRECTED IN R8.3 — *“discharged by the determination existing, never by its content being correct”* is withdrawn: it collapses two obligations OMNI must hold apart.** **Procedural completion** — a required attributable judgment occurred — is machine-verifiable for existence and attribution. **Substantive conformance** — the judgment is lawful, evidence-grounded, within professional scope, clinically adequate, non-discriminatory, consistent with controlling rights — is **not**, and usually needs domain evidence, review, appeal or later outcome assessment. **This is care physics the build grammar must preserve rather than flatten, and the estate already keeps it apart:** the System Map's three verification gates — artifact-integrity ⟂ data-fidelity ⟂ clinical-adoption — with *“none implies the next.”* My formulation would have collapsed procedure into substance at the governance layer while the domain layer keeps them separate. **Both facets required; `[CAN→6]` for the conformance split.**

## §E12.2 — Independence is assessed per claim, not held by a pair

**R8.1's *"independence is a property of a pair"* was a sharpening that stopped one step short.** The same pair can be independent for one question and tightly correlated for another.

```
independence_assessment                                                         [CAN→3]
  contribution_a · contribution_b
  claim_or_transaction_scope          independence is ALWAYS relative to this
  dimensions_assessed[]  model/training lineage · shared context and source material
                       · incentives · tool and runtime lineage · prompt and policy lineage
                       · temporal separation · evidence kind
  observed_dependencies[] · independence_class · assessor · evidence · effective_at
```

**The pair is necessary and insufficient.**

> **★ CORRECTED IN R8.3 — scope, not substance.** The claim-relative framing stands, but **the dimension list and the record shape are NOT accepted Output-1 core** — they are a **carried requirement plus a test case** for Outputs 3 and 6. R8.2 shipped this as a construction inside a pass labelled micro-correction, which is `F-12` again. **Carried, not settled.**

## §E12.3 — Source reopening must carry the counterevidence

**`§E11.0`'s chain said *"reopen the exact source anchor."* That invites cherry-picking**, because a registry concept is often a synthesis across several sources and the registries carry explicit **tension registers**.

> **Corrected:** *reopen the source anchor **or source set** materially supporting the claim, **plus any registered tension, conflict or counterevidence that could change the transfer decision**.* No raw-corpus rescan; no ceremony. **Do not reopen only the convenient clip.**

## §E12.4 — Propagation receipt, second attempt

**R8.1 declared propagation the dominant defect and then reproduced it.** Six surfaces verified stale and repaired:

| # | Surface | Repaired to |
|---|---|---|
| 1 | `G1-FIND-34` in `§7.3` presented as current | **`SUPERSEDED_BY G1-FIND-38`** |
| 2 | `G1-FIND-37` in `§7.3` presented as current | **`CORRECTED_BY G1-FIND-40` + `§E11.D` + `§E12.1`** |
| 3 | `G1-FIND-39` in `§7.3` presented as current | **`SUPERSEDED_BY §E11.C`/`§E11.D`** |
| 4 | `B-3` describing fixture history and blocking on policy composition | **`AB-08` accepted in substance, operator/steward receipt pending; Output-1 acceptance is a separate transaction** |
| 5 | `G-08` pointing at the superseded state | current state |
| 6 | `§9` handoff: no R8.1/R8.2 receipt, and a load order routing the next agent to `§E6.5` | **R8.1 + R8.2 receipts added; load order rewritten to `§G1-CONTRACT` → `§E10.2`–`§E10.10` → `§E11` → `§E12`, with R4–R7 for provenance only** |

**And the catalog row: stop counting.** It reads `g1_carrier_R3_...`. **It is a pending acceptance-transaction edit, not a proposal-authoring one** — naming it once is the obligation; incrementing a staleness counter every pass was theatre.

## §E12.5 — `AB-08` fifth criterion narrowed

**Current wording admits too much:** *"a new kind is warranted when lifecycle, authority, ownership or conformance semantics differ materially."* **A standard with a different owner is not a new kind — ownership is already a facet.**

> **Narrowed:** *a new kind is warranted when the resource requires materially different **fields, lifecycle transitions, admissible relations, authority/ownership rules or conformance behaviour** that **cannot be expressed honestly through an existing kind plus its facets, profiles and relations**.*

**The operative test is the second clause.** With it, `AB-08`'s five-function answer is complete: **`AB-08_ACCEPTED_IN_SUBSTANCE__PENDING_OPERATOR_STEWARD_RECEIPT`.**

## §E12.6 — Status

| Field | Value |
|---|---|
| **Output 1** | **`ACCEPTED_AS_G1_PROPOSAL · 1_OF_8_COMPLETE`** — accepted 2026-08-13 at head `480f3bb`, bounded by `§E12.7`; receipt at `§7.5`. **R8.4's “discharged / conditionally accepted” is withdrawn.** **The stopping test, applied and reported: all four corrections are representable with the existing resource, decision, relation, context and facet families — ZERO new M2 primitives, and the resource/revision/descriptor/carrier model is untouched.** That is the honest end of this cycle rather than an end by fatigue |
| **`AB-08`** | **`ACCEPTED_IN_SUBSTANCE__PENDING_OPERATOR_STEWARD_RECEIPT`** |
| **Corrected in R8.2** | the `§E11.B` tally · operationalization made plural · `accepted_residual_risk` extracted into an authority-bearing decision **with its own review-trigger operationalization** · `derogability` added so the non-waiver prohibition is checkable · *"cannot compile"* → *"cannot be exhausted by"* · mode vocabulary `[KND]` → `[CAN→6]` · *"inert"* → *"operationally unimplemented and nonconforming, still binding"* · `accountable_human_judgment` → `required_attributable_judgment`, defined · independence scoped to a claim · source reopening extended to counterevidence · six propagation surfaces · the `AB-08` fifth criterion |
| **Minted** | **nothing.** No new research, fixture, registry, route, catalog edit, gate, checkpoint, branch or PR |
| **Output 2** | **NOT STARTED** |

### §E12.8 — Output-1 Lane-3 checksum · eight predeclared functions *(added R8.3)*

**Bounded exactly as required: the six existing routing maps, no raw rescan, no new wave, capped.** Functions predeclared before searching. **Ten rows.**

| Output-1 function | Registry concept found | Class | Posture | Anchor reopened? | Changes `AMM-C4.1`? |
|---|---|---|---|---|---|
| **graph relation authority + provenance** | **`connected_not_committed` / `graph_edge_authority_state`** (w2, src 187) — *"an edge carries provenance/confidence/owner/lifecycle; **an edge is a candidate not a commit**"*; graph-edge analog of `GRD-042` | **`EXACT_EXISTS_AS`** | *"thin SHARPEN candidate (**NOT a mint**)"* | registry row + `GRD-042` route; **raw anchor NOT reopened** | **No core change.** `RelationAssertion` already carries provenance and a governing decision. **It sharpens: an edge should carry an explicit authority state (candidate vs committed) and a confidence, which mine does not** → carry-forward `[CAN→3]` |
| **resource-health / architecture-memory validation** | **`architecture_memory_lint`** (w2, src 188) — *"automated health-check over the control plane → **emits work items**; operationalizes the control-plane hard rules"* | **`EXACT_EXISTS_AS`** | **marked *"One genuine net-new ★"*** | registry row; **raw anchor NOT reopened** | **No core change — but it defeats the novelty of BOTH `G1-FIND-37` and `G1-FIND-42`.** My *"first buildable governance mechanism is a divergence check"* and my *"current-state propagation is the dominant defect"* were **already routed as a genuine net-new in wave 2**, with the emits-work-items half I did not have |
| *(method corroboration, same row)* | **T183 `direct_conflict`** — *"gate-free auto-promotion = **COUNTER-EVIDENCE** for gated promotion … citable `GRD-036` proof"* | **`TENSION`** | recorded conflict | yes, in the registry | **No change — it validates `§E12.3`'s rule live:** the registry preserves the counterevidence beside the concept, which is exactly the tension a transfer decision must reopen |
| **kind / classification / placement / ontology** | **`ontological_assumption_review`** + **generated-schema checks** (w5, src 270) · master guardrail *"**plurality of description ≠ abolition of the discipline of truth at commit**"* | **`SHARPENS`** | wave 5 **PROPOSE-ONLY**; *"strongest net-new-ish artifacts"* | registry row; **anchor NOT reopened** | **No core change.** It sharpens the placement predicate and the open kind registry: **plural description is admissible; commit discipline is singular.** → `[CAN→3]` |
| **resource identity, revision, effectivity (`as_of`)** | **`point_in_time_context_integrity`** = `causal_context_discipline` (w2 src 161) + `time_travel_review` (062) + point-in-time consent (T12) — *"**no-future-leak live + no-hindsight-leak on replay/eval**"*, one discipline | **`SHARPENS`** — **and it adds a constraint I do not have** | routed, paired | registry row; **anchor NOT reopened** | **No M0/M1/M2 change — but a real missing constraint on resolution:** my model answers *"what was in force on date X"*; it does **not** forbid an as-of resolution from using information that did not exist at X. **Hindsight leakage would silently invalidate every reconstructed conformance claim.** → **carried to Output 3 as a named requirement on as-of resolution** |
| **carrier / resource / descriptor separation** | no materially richer decomposition located | **`NO_MATCH`** | — | n/a | No change |
| **stewardship + governance bindings** | prior ownership-scoped pass (`§E11.B`) | *(already run)* | see `§E11.B` | wave-2 entries reopened | No change; receipt normalized at `§E11.B` |
| **generated snapshots / schemas / projections** | generated-schema checks (w5, above) | **`SHARPENS`** | PROPOSE-ONLY | no | No core change; supports `generated_snapshot` + byte-reproducibility |
| **self-hosting / metamodel evolution** | no materially different bootstrap, schema-governance or migration mechanism located | **`NO_MATCH`** | — | n/a | No change — the M0/M1/M2 seal stands unchallenged by the routed corpus |
| **model/version-of-record grain** | `model_version_of_record` (w2) — sharpens `model_lineage_record` at per-use clinical grain | **`ADJACENT`** | routed | no | No change — same shape, different grain (models, not architecture resources) |

**Result: 2 `EXACT` · 3 `SHARPENS` · 1 `TENSION` · 1 `ADJACENT` · 2 `NO_MATCH` · 1 previously run = 10 rows.** `2+3+1+1+2+1 = 10` ✔.

> **No material change to the `AMM-C4.1` core.** Two exact matches corroborate it and **defeat the novelty of two of my findings**; three sharpen it as carry-forwards; two functions found nothing, including the metamodel seal.
>
> **What this does NOT establish — stated because this is exactly where the next overclaim would go: the frontier floor is NOT complete.** This checked **eight Output-1 functions against the six routing maps**. It did not reopen a single raw source anchor, it does not cover G1's other capabilities, and `B-8` still owns the wider floor. **The honest claim is: the Output-1 core was checked against the routed corpus and survived.**

### §E12.7 — The acceptance boundary *(added R8.3 — this is what stops Output 1 swallowing the rest of G1)*

**ACCEPT into the Output-1 core** — the structural decomposition only:
logical resource ⟂ resource revision ⟂ descriptor revision ⟂ carrier/locator · **relation assertion with version, effectivity and provenance** · resource kind · carrier governance class · placement policy · addressable granularity and composition · **authority, lifecycle, status, naming and applicability as DISTINCT facets** · stewardship ⟂ scoped semantic authority · approval-policy **references** · transaction-scoped integration · meta-kernel termination with pinned M2 interpretation · open governed extension of kinds and relations.

> **One narrowing the review's boundary did not state, and it matters: the facet DECOMPOSITION is core; the enumerated VALUES of each facet are not.** Accepting *“distinct facets”* without that clause would accept my value sets by implication — and those are the exact things corrected in four consecutive passes (`F-08`). **Every value set is `[CAN→3/6]`.**

#### §E12.7.1 — Acceptance proof 1 · cross-namespace resource identity is INHERITED, not invented

**★ CORRECTED IN R8.5 — R8.4 collapsed two properties that live on different objects, which is this arc's signature defect committed in the pass meant to end it.** **Global unambiguity is a property of the REFERENCE. Global sovereignty is a property of AUTHORITY.** Three separable things: ① a reference two namespaces cannot make collide · ② federated resolvability of that reference · ③ one authority deciding identity and admission for everyone. **OMNI requires ①, may implement ② through federation, and `T0-14` forbids only ③.** `(origin_namespace_id, local_resource_id)` — or an issuer-qualified URI/URN — is **globally unambiguous with no central issuer and no OMNI registry**; the namespace owns issuance, OMNI owns at most the reference grammar and federation rules. R8.4 attacked a position the relief review never held and dropped the requirement that is real.

> **The invariant: every cross-boundary reference must be globally unambiguous and origin-qualified, while issuance, admission, authority and local adoption remain namespace-sovereign.** Encoding and namespace-key succession are G2's.

**And the estate already owns this law, deliberately:** the Identity contract holds *"one canonical row per person **within an identity namespace** (deployment / org PHI boundary)"* and marks **cross-namespace identity `OPEN/deferred`** rather than minting an MPI · *handle ≠ person* · Federation admits cross-boundary **possibility**, RBAC decides capability, the owning domain commits · **`C4.4 §R.16`: *"federated publication ≠ universal trust (locally admitted)"*, `publish → admit → use-under-grant → revoke`.** **★ CORRECTED IN R8.5 — *“adds nothing”* is provenance mislabel number four and is withdrawn.** The **anti-collapse laws are inherited** — match ≠ relationship · publication ≠ admission · custody ≠ visibility · admission ≠ capability · capability ≠ domain commitment. **Their architecture-resource specialization — mirror, alias, fork, successor, local admission — is a CANDIDATE transfer `[CAN→3/G2]`, because the Identity contract marks cross-namespace identity `OPEN/deferred` and therefore cannot have already settled it.**

| Case | Required result | Inherited from |
|---|---|---|
| A mints resource R | `resource_id` records **A's origin/issuer namespace**; no global registry | Identity namespaces |
| B imports and aliases R | **same source reference**; the local alias is not a new identity | `§R.16` publish→admit |
| B mirrors R | same source revision; **separate local carrier and custody** | custody ≠ authority (D7) |
| B forks R | **new `resource_id`** + explicit `forked_from` lineage | supersession explicitness |
| A and B author identical bytes | **content equality does NOT make them one resource** | handle ≠ person, generalized |
| B locally adopts R | local admission **does not alter A's source authority** | `§R.16` local admission |
| Either renames or moves a carrier | **identity unchanged** | R8 §3.1 survives renames |
| A publishes a successor | supersession is an **authority-bearing relation**, not identity replacement | `05` + §E7.1.2 |

> **The invariant:** `resource identity ≠ carrier location ≠ preferred name ≠ content equality ≠ local custody ≠ local adoption ≠ local authority`. **Encoding — issuer-qualified URI, origin namespace + opaque id, or equivalent — is G2's choice and is NOT made here.**

#### §E12.7.2 — Acceptance proof 2 · graph presence never means commitment

**Answering the question as asked — do the existing facets already cover `RelationAssertion`?** `G1-FIND-28` established that an assertion carrying identity, revision, interval, provenance and a governing decision **is an architecture resource**, so the resource facets apply to it. **★ NORMALIZED IN R8.5b:** the model already represents **proposal, rejection, accepted/effective force, withdrawal and supersession** through existing facets and relations. **Dispute is not a sixth state or a missing value — it is an orthogonal attributed challenge resource.** *(R8.5's “five of six states” asserted a six-state model one line above a table that denies it.)*

| Required proof case | Represented by | Status |
|---|---|---|
| candidate | `governance_decision_state = proposed` | ✔ existing |
| **disputed** | **NOT a state — an orthogonal challenge resource** | **★ CORRECTED IN R8.5.** R8.4 routed `disputed` as a missing sixth value, which is the malformed-enum defect again — **and routing a malformed value to a later output does not unmalform it.** An accepted rule can be **disputed while remaining in force**: a regulator challenging a practice, a vendor contesting a prohibition, a domain owner disputing an edge pending adjudication. **As a mutually exclusive state, filing a dispute would deactivate accepted architecture — an architectural denial-of-service primitive.** Dispute is an **attributed challenge resource** (challenger · scope · basis · evidence · filed_at · review state) related by `disputed_by`; **only a separate authority-bearing stay, revocation, supersession, suspension or local non-admission changes effective force.** Lifecycle and effects → Output 3 |
| rejected | `governance_decision_state = rejected` | ✔ existing |
| accepted, for its interval | `= accepted` + `effectivity_state = active` + `effective_from/to` | ✔ existing |
| withdrawn | `disposition = withdrawn` | ✔ existing |
| superseded, still resolvable | `supersedes_assertion` + `effective_to` | ✔ existing |

**One structural hook is added — and only this one, stated as NECESSARY conditions rather than an inclusion rule (★ corrected in R8.5, where R8.4 read like a complete predicate):**

> **No assertion enters effective architecture unless ① the cited origin assertion is valid for its ISSUER's state at the cited time, ② an ACTIVE local admission/applicability decision admits it for the resolver's namespace and context, and ③ its interval contains the `as_of`. These are necessary, NOT sufficient. Non-admitted assertions are EXCLUDED, never deleted** `[KND]`.

An origin-accepted assertion may still be not locally admitted · outside the selected profile · inapplicable to the deployment, jurisdiction or mission · admitted only as evidence · blocked by non-loosening · locally superseded · **or contested but still effective.** **Outputs 3 and 5 own precedence, conflict, applicability evaluation, non-loosening, profile composition and the resolution algorithm.** **Rejected and withdrawn assertions, together with any challenge or dispute resources attached to them, remain visible as evidence and history. A challenge does not change effective force absent a separate authority-bearing stay, suspension, revocation, supersession or local non-admission decision.** *(★ NORMALIZED IN R8.5b — the prior wording said “rejected, disputed and withdrawn edges,” reintroducing dispute as an edge state one paragraph after declaring it a separate resource.)*

**And confidence stays typed and epistemic** `[CAN→3]`: **there is no universal confidence scalar.** Normative authority state, evidentiary confidence, validation result and source credibility are four dimensions. **A high-confidence edge never becomes binding without an authority-bearing decision, and an accepted prohibition is not *"80% authoritative."***

> ## ★ `G1-FIND-46` — CORRECTED IN R8.5, AND THE ERROR IS THE ONE THIS ARC EXISTS TO STOP
> **R8.4 wrote *“`governance_decision_state` is NAMESPACE-SCOPED, not global”* — and `governance_decision_state` is a SCALAR FACET ON THE ASSERTION.** One scalar cannot hold `accepted` for A, `candidate` for B and `rejected` for C at once. **Calling it namespace-scoped does not fix that; it hides a second object inside the reader's evaluation context.** **That is the malformed-scalar defect — committed in my own headline finding, in the pass whose purpose was to end it.**
>
> **The corrected structure, which mints NOTHING and reuses the existing decision family:**
>
> ```
> ORIGIN ASSERTION        immutable claim issued under A · A's provenance, decision state, effectivity
>         ↓ publish / mirror / custody                              [INH §R.16]
> LOCAL ADMISSION         an applicability_decision issued BY B, referencing the origin assertion,
>                         scoped to B + profile + deployment + mission + as_of,
>                         referencing the EXACT origin assertion REVISION, and carrying its own
>                         governance-decision state · applicability outcome and conditions ·
>                         disposition · effective interval        [★ NORMALIZED IN R8.5b]
>         ↓ derived
> B'S EFFECTIVE ARCHITECTURE = join(origin-valid assertions, ACTIVE local admission decisions)
> ```
>
> **The invariant: the source assertion's governance state is ISSUER-scoped. The receiving namespace's admission is a SEPARATE, attributed, effective-dated authority-bearing decision.** Without that separation a mirror silently imports another operator's committed architecture as though locally binding — the architecture-layer form of the exact collapse Identity and Federation exist to prevent.
>
> **Two additions of my own, both cheap because the estate already has them.** ① **This is the ingress shape's THIRD instance.** §7.3 established that *“Henry Ford says X”* and *“does IEC 62304 apply”* enter identically — an outside claim meeting an OMNI context, requiring an attributed applicability determination. **A peer operator's architecture assertion is the same shape.** `applicability_decision` is therefore exercised by three unrelated sources — external standard, customer requirement, peer operator — which is evidence for its generality rather than my assertion of it. ② **Absence of a local admission decision is NOT rejection.** The common case is B mirroring four hundred assertions and adjudicating none. **★ NORMALIZED IN R8.5b — R8.5 claimed §4.8 “already supplies” `not_determined`. It does not: §4.8's vocabulary is *absent · unknown · unavailable · not-applicable · denied · exception-authorized*. I claimed pure reuse while minting a value — provenance mislabel number five.** **Corrected: no local admission decision is TYPED ABSENCE — normally `absent`, or `unknown` where even its existence cannot be established. The resolver may PROJECT that as `not_determined`, a DERIVED result, never a stored governance-decision state. `denied` requires an attributed decision that exists and says no.**

> **One implication recorded, not constructed** — *I checked whether this is a new facet and it is not; it is a consequence of pinning the origin revision*: because B's admission pins **A's exact assertion revision**, an origin supersession does **not** automatically propagate to B. **That is correct local sovereignty — and it is also how B silently runs stale law forever unless origin supersession is OBSERVABLE to admitters.** `[CAN→3/5]`.

#### §E12.7.3 — Three binding downstream carries

| Carry | Destination | Negative control |
|---|---|---|
| **declared architecture ⟂ observed implementation ⟂ demonstrated conformance** — three states, never one status facet | Outputs 5 + 6 | an accepted declaration must not be readable as *"the implementation conforms"* — the System Map's own three verification gates, *"none implies the next"* |
| **carrier digest ⟂ canonical logical-revision digest**, with anti-equivocation: one `revision_id` may never resolve to two contents; matching digests imply neither shared identity nor shared authority | G2 | **Precondition:** a logical resource whose constituents are prose clauses in a shared carrier has **no canonical serialization** — `D0THES-GRD-033` is a table row whose bytes shift when a neighbour is edited, and `structured_descriptor` + `generated_snapshot` are both `NOT_INSTANTIATED`. **★ CORRECTED IN R8.5 — R8.4 said *“build the descriptor before the digest,”* which is necessary and NOT sufficient: hashing descriptor bytes recreates the same drift one layer lower.** Logical-revision digesting begins only with **① the descriptor layer · ② stable constituent identities** (which clauses, rows, fields, code units or generated fragments constitute this revision) **· ③ a canonical constituent manifest** (membership, order-or-declared-unorderedness, content type, locator, fragment identity, per-constituent digest) **· ④ a pinned deterministic canonicalization/extraction profile** (normalization, row extraction, key ordering, line endings, generated-field treatment). **A further G2 carry: `origin_namespace_id` may not be a mutable tenant slug or DNS name — it must survive rename, acquisition, key rotation and namespace succession through a versioned issuer-authority history.** |
| **federated mirror · alias · fork · derivative · successor · merge/split lineage · local custody · scoped visibility · local admission · withdrawal · deprecation · redaction · tombstone · legal retention** | Outputs 3–5 | reuse Identity/Federation's anti-collapse law; **do not generate a parallel federation doctrine inside the architecture-resource model** |

**CARRY FORWARD — routed, explicitly NOT accepted as Output-1-settled semantics:**
the operationalization **mode vocabulary** · the `derogability` facet and its values · the `risk_acceptance_decision` schema and its substantive rules · `independence_assessment` dimensions · the procedural/substantive conformance split · precedence and policy composition · semantic non-loosening · conformance algorithms · the placement **predicate** · relation **bitemporality**. → **Outputs 3, 5 and 6.**

**Source posture for R8.2:** read the R8.1 review in full; **verified every blocking claim against the live file before amending** — the eight `§E11.B` rows counted individually, and all six propagation surfaces confirmed stale. **No external source opened.** Entered at `d4c20980472f6358b696ac53e489a012e8865e30`; Boot Freshness Check **PASS**; `check-checkpoint-pointer.mjs` **PASS**; one file modified. `B-8` unchanged.

# §E13 — Output 2 · THE ARCHITECTURE-OPERATIONS LOOP — one correlated operation, five work classes

> **This is the Output-2 proposal.** It is `proposed`, not accepted. It settles the operating model for a governed architecture change: what the unit of work is, what identities exist, what history is kept, who owns which fact, what must be proven before a decision is asked for, and how the whole thing behaves under partial failure, actor replacement, review scarcity and self-amendment. It does **not** settle relation semantics (Output 3), the Change Manifest lifecycle enum (Output 4), effective-resolution algorithms (Output 5), conformance algorithms (Output 6), the transfer-limit matrix (Output 7), or any executable controller (G2). Boundary at `§E13.23`.

## §E13.0 — Entry, review lineage, and the error the first draft was built on

Output 2 entered through a two-reviewer pass on an **entry receipt** rather than on authored architecture — an ordering this arc had not used before and should keep. The first receipt (V1) was reviewed by an independent relief reviewer and returned `NOT_READY`, then adjudicated by the veteran reviewer, who accepted the relief disposition and added a continuity/provenance addendum. V2 was returned and adjudicated `READY_TO_AUTHOR_WITH_EXACT_CORRECTIONS`. **Four blockers and ten material corrections were applied before a line of this section was written**, and three of them corrected me rather than the reviewers.

**The root error, withdrawn.** V1 said: *a governed architecture change is one transaction over architecture resources, carried by a Change Manifest, moving through nine stations.* That is false, and it is false in the way that corrupts everything downstream — a false atomicity claim silently defines identity, idempotency, crash recovery, authority and historical reconstruction, and every one of those inherits the error. The candidate disproved itself in its own text: propagation creates owner-scoped child work under independent authority, observation is continuous and has no terminus, correction begins a new change, and externally committed effects cannot be atomically rolled back with repository state.

**Three corrections where the reviewers corrected me, recorded because the arc's dominant failure is my own overcorrection** (`F-07`, `F-11`):

| # | What V2 claimed | Why it was wrong |
|---|---|---|
| 1 | Effectiveness is asserted by the receiving scope, **never** by the origin | Overcorrection. Origin owns source revision, issuer-side validity and effectivity, withdrawal and supersession; the receiver owns admission, activation, profile applicability and local variation. **Effectiveness is jointly derived** (`§E13.18`) |
| 2 | Independence is a **budget** with three substitutable forms at an exchange rate | Too loose to author. Soak time is exposure evidence, not judgment; machine verification cannot replace non-delegable authority; human review cannot erase a machine-decidable hard failure without an attributed exception. Corrected to **policy-declared independence requirements and evidence channels by consequence class** (`§E13.14`) |
| 3 | Repair `ledger:287` only **after** the G2 checker exists, so the loop's own check finds it | **Inverts the gate sequence.** Output 2 is authoring; G2 is implementation. A binding source may not remain knowingly false to serve as test material. Corrected to **frozen fixture + prompt repair by the rightful writer** (`§E13.19`) |

**`F-13` (new) — a false atomicity claim is a load-bearing architectural assertion disguised as a summary sentence.** *"One transaction"* reads like a topic sentence and behaves like a schema. This arc has now produced three defects of the same shape — the god object (`§E10.4`), the malformed scalar (`§E12`), and now the false transaction — and all three entered as *convenient language* rather than as claims anyone intended to make. **The test: if a noun in a summary sentence would change the identity, failure or authority model when taken literally, it is not a summary sentence.**

## §E13.1 — Thesis

**A governed architecture change is one *correlated architecture operation*** — a durable intent carrying a correlation identity, an authority basis and a causal history, and carrying **no atomicity claim whatsoever**.

It decomposes into work of five mechanically distinct classes. **The class is not a phase.** It is a *failure-and-identity signature*.

**★ CORRECTED IN R1 — the claim was too strong, and the review was right to hold it.** R0 said *"ask what class an object is and its operating contract follows,"* which asserts that class determines the whole contract. It does not. **The work class determines default identity, attempt, retry, deduplication, history and terminus semantics. Authority, admissibility, validity, correctness and conformance are evaluated separately and are never implied by class.** A deterministic derivation can be perfectly reproducible and wrong because its ruleset is defective; a commitment can be durably recorded and invalid because the actor lacked authority; an observation can exist and be forged; a controller can reconcile faithfully toward the wrong target. **Class buys failure physics, not truth** — and claiming otherwise would have made the classification the next god object one altitude up (`§E10.4`).

**Two orthogonal axes, which R0 fused.** Every object in this model has **one work class** (what happens when it fails, and how it is retried) **and one record type** (what is durably written): `artifact` · `correlation` · `event` · `execution` · `effect` · `attestation`. R0 claimed five classes and then used ten labels in its own identity table, which is the value-collapse defect this arc has repaired six times. **Composite objects are legitimate where both axes genuinely apply** — a published snapshot is a deterministic derivation *plus* a publication commitment — but **no object is asserted to belong to exactly one class**, and record types are not work classes.

**Anti-god-object discipline, applied to my own construction:** the classes discriminate failure physics inside architecture operations. They are **not** proposed as an OMNI-wide controlled vocabulary, and promoting them to one would be `§E10.4`'s defect at a higher altitude. `[CAN→G2 · semantic review before any vocabulary promotion]`

## §E13.2 — The five work classes

| Class | What it is | Failure means | Retry | Identity | Authority | Terminus |
|---|---|---|---|---|---|---|
| **Commitment** | The **authority-bearing act** — approval, refusal, acceptance, local admission, publication authorization, integration authorization, exception grant, closure. **★ R1: proposal submission is NOT in this class** (`§E13.3`) | The authoritative act did not occur | Idempotent at **submission**; the *effect* is separate | Stable; revised only by supersession | **Required**, revalidated at point of consequence | Yes |
| **Deterministic Derivation** | A pure function of pinned inputs under pinned versions, meeting a **declared determinism contract** | No current-generation result exists | Free and unlimited | **Content digest**, actor-independent | **★ R1:** no normative commit authority; **execution and access remain grant-bound** | Per generation |
| **Observation / evidence acquisition** | An attributed measurement or assertion about the world at a time | **★ R1:** coverage gap · unreachable target · **and also forged, invalid, stale, mis-scoped or instrumentally unhealthy evidence** — the event may be valid while the claim about the target is false | Re-acquisition yields a **new** observation; **redelivery of the same captured event does not** | **★ R1:** source-issued event identity, with **delivery/attempt identity separate**; never content-addressed | **★ R1:** as above — evidence only, grant-bound to acquire | Per acquisition |
| **Obligation** | Durable work that is **owed**, surviving actor and session replacement | Remains open and visible | New attempt against the **same** obligation identity | Family/dedup key ⟂ occurrence ⟂ evaluated revision set (`§E13.4`) | Obligor is substantive; custody is execution-side | Only on discharge |
| **Controller** | Continuous reconciliation with no mission completion state | Coverage degrades or liveness lapses | Per-iteration, with lease and attempt | Scope + generation + instance | **★ R1:** as above — emits **candidates**, never applies, and never manufactures a substantive obligation (`§E13.13`) | **No mission terminus** |

**Five corrections the relief review forced, each recorded because each was a real defect and not a wording preference.**

**(a) A commitment is the authoritative act, not a guarantee that physical effects completed.** V2 defined commitment failure as *"it did not happen,"* which is true of a committed decision record and false of a partially applied migration, a repository change plus hosted administration, an external effect with a lost acknowledgment, a forward-only action, or a multi-resource landing whose physical effects partially succeeded. **The commitment and the effect executed under it are separate facts with separate outcomes.** Effect outcome vocabulary: `not_started · in_progress · applied · partially_applied · outcome_unknown · failed · compensating · verified`. `outcome_unknown` is a first-class terminal-until-resolved value and may never be projected as `applied`. Full lifecycle vocabulary is **Output 4's**; the *distinction* is Output 2's and cannot be deferred.

**(b) Not every machine-produced result is deterministic — hence `Deterministic Derivation`.** Impact traversal and snapshot compilation can be deterministic when every input, executable and canonicalization profile is pinned. An LLM-assisted assessment, an external inventory read, a runtime measurement or an incomplete synthesis is not. **Actor-independent content identity is restricted to results meeting a declared determinism contract.** Everything else is **attributed evidence** carrying run, attempt, model/tool/runtime version, inputs, uncertainty and reproducibility limits. Digest equality is an idempotency claim, and claiming it for a nondeterministic function is the same defect as hand-authoring a derived value: an assertion of sameness that nothing enforces.

**(c) Observation is not derivation.** A measurement at time *T* is an attributed evidence event; repeating the acquisition may legitimately yield a different result with neither being wrong. V2 classified observations as content-addressed derivations, which would make a changed reading look like a corrupted digest. Observation is its own class.

**(d) Obligation ownership splits.** V2's identity table assigned work obligations to Build OS, which turns the execution substrate into the substantive owner of *why work is owed*. Corrected: the **substantive obligation and its obligor** — the resource owner, authority holder, decision, policy or accountable principal that owes correction, review, propagation or verification — belong to the architecture side; **work-item custody, lease and execution state** belong to Build OS. *Build OS owns how the work is carried; it does not own why the work is owed.*

**(e) Controllers have no mission terminus and are not exempt from runtime physics.** V2's *"retry: not applicable — it runs"* is withdrawn. A controller has no terminal mission state, but every controller **instance and reconciliation iteration** starts, stops, fails, restarts, loses leases, changes versions, misses coverage and creates attempts — all with Agent Runtime / Platform identity, liveness, lease, version and evidence.

## §E13.3 — The nine functions, mapped

The nine-function sequence survives **as a functional map**. It is not an atomicity boundary, not a state machine, and not an ordering guarantee — propagation re-enters review, observation runs throughout, and correction restarts the whole shape as a new operation.

| # | Function | Class | Operating note |
|---|---|---|---|
| 1 | Proposal | **★ R1: Artifact + submission Event → Obligations** | The manifest revision is an immutable artifact; **submission is an attributed, permissioned event that creates decision obligations.** R0 called submission a Commitment, which **contradicts this output's own durable law — *proposal is never commitment*** — and would have put asking a question in the same semantic class as acceptance, refusal and exception authorization. Submission commits no architecture. **No sixth class is minted:** the event already exists in `§E13.5` and the durable thing it creates is an Obligation |
| 2 | Impact | Deterministic Derivation | Output is a completeness **claim**, never a set (`§E13.8`) |
| 3 | Owner review | *n* Commitments | One per decision obligation; independently held, independently liable, **not summable** |
| 4 | Conformance | Deterministic Derivation | Evidence for a gate; **never itself a gate** — the System Map's *"none implies the next"* |
| 5 | Propagation | *n* Obligations → child operations | Each may require a different owner's decision; **outside this operation's atomicity by construction** |
| 6 | Integration / landing | Commitment + effects | Bounded to the landing scope; effects carry their own outcome |
| 7 | Effective resolution | Deterministic Derivation + publication Commitment | Generation is derived; **making it effective is a commitment by the admitting scope** |
| 8 | Observation / drift | Controller emitting Observations and Obligations | No terminus; **never auto-applies** |
| 9 | Governed correction | New correlated operation | Causally linked by `correction_of`; **never a continuation** |

## §E13.4 — Identity hierarchy

`change_id` identifies the intended correlated change **and nothing else**. It is not an idempotency key for any execution, decision, effect or result. V1 asked one identifier to distinguish eleven things; the collisions were immediate.

| Identity | Class | Uniqueness namespace | Revision behavior | Idempotency | Lifecycle owner |
|---|---|---|---|---|---|
| `work_package` / lane | **★ R1: execution carrier** (record type `execution`), **linked to** obligations — may carry none, one or many | operator/project | Stable across actors | n/a | **Build OS / AWP §2.1** |
| `operation_id` (= `change_id`) | Correlation | operator/project | Immutable | **Not an idempotency key** | Architecture Operations |
| `manifest_revision_id` | Artifact | content-addressed | Superseded, never edited | Digest equality | Architecture Governance |
| `decision_obligation_id` | Obligation | (operation, authority scope, basis revision) | New on **material** basis change only | Dedup across re-solicitation | Authority resolver |
| `decision_id` + `decision_revision_id` | Commitment | authority holder | Changed judgment = **new revision superseding** | **Submission key** scoped to the obligation | Deciding authority |
| `obligation_id` — propagation · correction · verification-debt · review-request | Obligation | operator/project | Stable | Lease-protected | **Obligor** substantively; Build OS for custody |
| `run_id` · `attempt_id` | Execution | Agent Runtime | New per attempt, always | Never reused | **Agent Runtime** |
| `result_digest` | Deterministic Derivation | content-addressed over (function, canonical input digest, ruleset version, executable version, canonicalization profile) | Immutable | **Digest equality is the idempotency** | Architecture Operations |
| `observation_id` | Observation | **★ R1: source-issued event identity** (sequence or UUID from the acquiring/asserting source) — **not** observer+target+time, which collides on clock ties, duplicate delivery and late-recorded offline acquisition | Append-only | **Redelivery of the same captured event is idempotent; re-acquisition is a new fact.** `delivery_attempt_id` is separate | Observer |
| **★ R1** `generation_id` · `result_digest` | Deterministic Derivation | content-addressed (as below) | Immutable | Digest equality | Generator-contract owner |
| **★ R1** `publication_id` | Commitment | (artifact class, scope) | Monotonic | Atomic pointer swap | **Publication owner in the admitting scope** |
| `effect_id` + effect idempotency key | Commitment/effect | **one intended external or repository effect** | — | **Effect-scoped, never change-scoped** | Emitting boundary (GCE) |
| `finding_family_id` · `finding_occurrence_id` · evaluated revision set | Obligation | **★ R1: three identities, not one.** The **family/dedup key** `(detector, subject locator, defect class)` is revision-independent; the **occurrence** is the episode from opening to verified closure; the **evaluated revision set** records exactly what was examined. R0's single revision-independent key was right while a defect persists and wrong as a universal — **some defect classes are inherently revision-specific** | Family stable; occurrence bounded | Re-detection updates the open occurrence; recurrence after closure opens a new occurrence linked `recurrence_of` | Detector output, admitted by governance |
| `correction_id` | Correlation | new operation | — | — | Architecture Operations |
| `receipt` | Attestation | — | — | — | **References and attests; copies no substantive state** |

**`G1-FIND-47` — human decision *submission* is idempotent; human *judgment* is not, and V1 had this backwards.** A retried approval after a timeout must produce one decision, or a network failure manufactures consent. A genuinely changed position must produce a **new decision revision** that supersedes, with both surviving in history. The system boundary is made idempotent **precisely so that a human changing their mind stays distinguishable from a duplicate packet** — collapse them and the substrate cannot tell reconsideration from retry, which is the difference between a governed reversal and an accident. `[CAN→4 · lifecycle]`

**`G1-FIND-48` — finding identity must exclude the subject revision, and this is what makes correction debt bounded.** If the dedup key includes revision, every rerun after any edit mints a new finding for the same unfixed defect, and *"arrival rate versus closure rate"* stops meaning anything. **But a permanently revision-independent identifier must not collapse every future recurrence into one endless finding:** after **verified closure**, a later recurrence either opens a new occurrence linked by `recurrence_of`, or explicitly reopens the closed finding under a named policy. Stability while open; occurrence semantics after closure. `[CAN→6]`

## §E13.5 — Event and history contract

**Terminal station receipts are withdrawn as a recovery model.** Receipt presence cannot establish causal order, an attempt that started and never completed, a result generated and never published, a withdrawn decision, an expired condition, a grant revoked mid-landing, a duplicate delivery with a lost acknowledgment, a partially applied correction, a late observation, a compensation that superseded an unsafe rollback, or **what was known then rather than what is knowable now**.

**Architecture Operations does not mint a second generic event engine.** Execution events — run started, attempt failed, cancelled, replaced, resumed — are **Agent Runtime's**, which already carries stable run identity, append-only attempt events and a derived current-status projection. Architecture Operations owns only events whose **subject is an architecture resource or an architecture-semantic act**:

`manifest_submitted · decision_recorded · decision_superseded · decision_withdrawn · scope_admitted · scope_declined · landing_proven · effect_outcome_recorded · generation_published · finding_opened · finding_closed · finding_reopened · obligation_created · obligation_discharged · exception_granted · degraded_mode_entered · degraded_mode_exited · correction_linked`

**★ CORRECTED IN R1 — R0's list re-owned three foreign facts, violating this output's own binding map two sections later.** `grant_revoked_in_flight` is **RBAC/authority history's** fact; `obligation_leased` is **Build OS's**; run and attempt relationships are **Agent Runtime's**. All three are **referenced causally** from the architecture operation history and **never re-sourced** there. A second source of a revocation fact is precisely the duplicate-truth defect `§E13.7` prohibits — and I committed it in the section that binds histories to their owners.

Minimum event fields: event identity · correlation · causation/parent · subject and **exact revision** · principal, actor, seat, grant basis · **effective time and recorded time** · input and output digests · policy, ruleset, executable version · attempt identity · supersession, withdrawal, compensation, correction links · scope/namespace · an ordering rule sufficient for replay.

**Bitemporality is inherited, not invented** `[INH]` — the legacy `temporal_truth_pair` (effective + recorded) exists per `D0THES-REV-200`, and Clinical Memory already runs append-only assertions with a derived current view rather than treating the view as the history.

**★ CORRECTED IN R1 — R0 flattened a plurality the estate explicitly preserves, and this was a substantive error rather than a wording one.** R0 said: *a reconstruction of what was effective at T may use only what was recorded by T.* That collapses two different questions, and it would make OMNI **structurally unable to state a retroactive effectivity** — a routine legal and clinical fact (retroactively effective regulation, backdated coverage determination, amended result with an earlier specimen time). Verified against `v4_C4_5_temporal_integrity_and_asof_reconstruction_pass_plan.md`, which names *"the several meanings of 'true at X'"* and scopes hindsight specifically to **then-known reconstruction without hindsight leakage** — a pass plan at declared maturity, so Output 2 binds to the **distinction** and claims no settled algorithm.

| Temporal question | May use later-recorded, earlier-effective facts? |
|---|---|
| `historical_as_now_reconstructed(effective_as_of)` — what we now understand was in force then | **Yes**, and must, when clearly labelled as retrospective |
| `known_as_of(recorded_as_of)` — what OMNI actually possessed then | **No** |
| `decision_context_replay` / actor-exposure — what this actor could have seen then | **No** |
| `evaluation_against_the_knowledge_horizon_then` — was the decision defensible | **No** |

**No-hindsight binds the last three and not the first.** Every historical query or generated snapshot must therefore declare: **temporal question / reconstruction mode · `effective_as_of` · `recorded_as_of` or knowledge cutoff · resolver scope and profile · whether later evidence is admissible.** Full algorithm is **Output 5's**; the declaration requirement is Output 2's.

**And a consequence R0 could not see because it had only one mode.** The Effective Architecture Snapshot remains immutable and is **demoted from historical truth to a materialized derivation** over the history plus pinned inputs. Because it is content-addressed, **the temporal mode and both time bounds must be inside its input manifest** — otherwise two honest snapshots answering *different questions about the same moment* carry different digests and read as a contradiction. `[CAN→5]`

## §E13.6 — Ownership and binding map — `FO-6` answered; it closes only on acceptance

The entry receipt carried *"this may be the Platform Loop with different nouns"* as a falsifier. A falsifier is the wrong instrument: **the answer is a binding table, and Architecture Operations is a specialization that composes.**

**★ CORRECTED IN R1 — R0 titled this *"`FO-6` closed, not deferred,"* and a proposal cannot close its own falsifier.** Writing a persuasive resolution is not the same act as an authority accepting it; `FO-6` is **answered here and closes on Output-2 acceptance**, contingent on the direct verification recorded at `§E13.25` — the binding map's Platform and Accountability rows rest on consulted-not-full-depth reads, and **the shadow-loop question may not be called closed on delegated summaries.**

| Concern | Rightful owner | What Architecture Operations does |
|---|---|---|
| Work packages, claims, leases, writer transfer, protected surfaces, collision control, stale-resumption law | **Build OS / AWP** (`L1`–`L2`, eight durable facts) | Declares architecture work as work packages; adds **semantic** collision (`§E13.11`) |
| Runs, attempts, continuation, cancellation, replacement actor, derived run status | **Agent Runtime** | References `run_id`/`attempt_id`; never re-mints |
| Desired-vs-observed reconciliation, operational plans, retry, compensation, safe halt, migration | **Platform Loop** | Consumes Platform observations as evidence; publishes architecture desired-state |
| Admitted concern, custody, obligation, remedy, verified closure, reopen | **Accountability / GRR** | Engages **only at a threshold crossing** — a lint finding is not an accountable concern |
| Principal, actor, seat, grant, revocation, point-of-consequence reauthorization | **RBAC / `§G1-AUTH`** | Supplies decision-obligation structure; consumes validity |
| Effective/recorded time, no-hindsight replay, domain-owned histories | **Temporal architecture** | Applies; does not restate |
| Cross-boundary emission and ingestion | **GCE / enterprise posture** | **Named dependency — the build-facing boundary contract does not exist** (`G-18`, thesis §C paused) |
| Architecture resources, proposals, semantic decisions, projection compilation, architecture-specific reconciliation | **Architecture Governance / Operations** | Owns outright |

**Authoring test, binding on this section:** if a proposed object would function identically for a non-architecture subject, it belongs to one of the first seven rows and must be **bound, not minted**.

**`G-20` (new) — Architecture Operations is a governed capability under Architecture Governance, not a domain.** It is not a truth-owning domain, an enterprise workflow engine, a generic event platform, a universal queue, or an executive over Platform, Accountability, RBAC or Federation. **Payload-noun ≠ domain** (`D0THES-GRD-026`) applies to my own construction here as much as to labs or Rx.

## §E13.7 — Canonical fact ownership and projection roles

**The law:** *one authoritative owner per fact within a declared scope.* There is **no global canonical state**. Distinctly attributed facts coexist without becoming duplicate truth — which is the same anti-collapse law Identity and Federation already enforce one layer down `[INH]`.

| Fact | Authoritative owner | Class | Note |
|---|---|---|---|
| Source assertion published at origin | Origin namespace | Commitment | Publication ≠ effectiveness anywhere |
| Local admission | **Receiving scope** | Commitment | Sovereignty; typed absence ≠ denial (`§E12.7.2`) |
| Resource revision content | **★ R1:** the resource's declared **scoped semantic authority** + **accountable resource owner** + **stewardship/custody relation**, per the accepted Output-1 eight-relation decomposition — *not* a single "owning steward," which rebuilds the concealed sovereign `§E13.16` prohibits ten sections later | Artifact | Hand-authored, canonical |
| Owner decision | The deciding authority | Commitment | Revisable only by supersession |
| Landing | Integration function | Commitment | Proof an **already-accepted** set was applied |
| Effect outcome | Executing boundary | Effect | `outcome_unknown` never projects as `applied` |
| Deployment activation | The deployment | Commitment | Observed, not asserted by origin |
| Impact · conformance · divergence result | **Nobody — content-addressed** | Deterministic Derivation | Evidence; never authority |
| Effective snapshot | **Nobody — content-addressed** | Deterministic Derivation | Materialized over history + pins |
| Observation | Observer | Observation | Attributed evidence, append-only |
| Detector finding | Detector output, admitted by governance | Obligation | Stable identity (`§E13.4`) |
| Conflict adjudication | `05_supersession_conflict_ledger.md` | Commitment | The **decision about** a divergence |
| Work obligation | **Obligor** substantively; Build OS for custody | Obligation | Machine findings live in generated artifacts; only **promoted** items enter `08` |
| Correction manifest | Proposing steward | Artifact | A new operation |
| Verification | Derivation + closure Commitment | Both | Result derived; closure committed |
| Receipt | — | Attestation | **References and attests; copies nothing** |

**Generated artifacts own no normative truth — but they are not ownerless.** Every generated class names a **generator-contract owner** (who owns the function and its determinism contract), a **publication owner** (who authorizes a generation becoming effective in a scope), an **operational custodian** (who keeps it running and answers for its liveness), its **source inputs**, and an **accountable verification path**. *The artifact is non-authoritative; the machinery producing and publishing it is not.*

**`G1-FIND-49` — the AB-08 defect class, stated as a rule the estate can check.** No fact of **Deterministic Derivation** class may be hand-authored inside a canonical artifact. Where a derived value must appear in prose, it is a **typed quotation pinned to a source revision**, and the check is arithmetic or referential — **never editorial**. This mints nothing: it is the mechanization of `agent_work_protocol.md:169` (**Single-source law** — a mutable live value is recorded in one owning row and referenced by pointer everywhere else) and of `D0CKPT-GRD-003`, whose **intra-artifact specialization was added 2026-08-08 (`INS-G1B`)** and was boot-visible at Tier 0.5 when the `AB-08` propagation failure occurred on **2026-08-13**. **Two binding rules existed, were in force, were boot-visible, and were insufficient — across three corrective passes that each left residue.** That five-day gap is the entire argument for Output 2, and it is why a documented rule without a mechanical check is `executable_governance_law`'s definition of theater. `[CAN→6 · the check itself · G2 · the validator]`

**Typing is a transitional adapter, declared as such.** Requiring humans to hand-annotate every copied scalar forever relocates the maintenance burden rather than removing it. Target state: canonical constituent identity, generated restatements, automatically emitted source links, compiler-known dependency edges, and linting of untyped residual prose. `[CAN→G2]`

## §E13.8 — Impact and owner-completeness

**Traversal finds edges that exist. Completeness is a claim, not a set.** A graph query cannot find an undeclared dependency, an owner omitted from a descriptor, a liability-triggered authority that is not a graph neighbour, an untyped prose restatement, a subscriber that failed to register, or a deployment whose inventory is stale or forged. Without a completeness claim, an omitted owner **silently disappears from the approval condition** and the system returns a clean closure over a partial graph.

Every impact result carries: graph and ruleset revision · relation types traversed · coverage envelope · unresolved targets · uncovered or untyped surfaces · stale or unreachable inventories · **owner-resolution provenance per authority** · policy-triggered authorities · unowned or ambiguously owned resources · and an explicit posture of `complete_for_declared_coverage · partial · unknown`. **A clean result over partial coverage is never reported as complete.**

The owner resolver composes six inputs: resource ownership · change-class policy · **non-waivable rights and independently liable principals** · jurisdiction/operator/federation policy · exception and risk-acceptance policy · current grant and delegation validity.

**`G1-FIND-50` — the non-waivable authority *requirement* is resolved by policy and never by graph adjacency; the *holder* may still fail to resolve.** **★ CORRECTED IN R1 — R0 fused the requirement with the holder.** Patient consent, professional authority and operator sovereignty: the **requirement class cannot be "not found,"** because its applicability is not a function of whether anyone drew an edge. But the **holder** may legitimately resolve to `absent · unknown · unavailable · disputed · lacking_a_current_grant` — and **that does not remove the obligation; it blocks `owner_set_complete`.** The two failure modes are opposite: a missing requirement lets a change through silently, while a missing holder must stop it loudly. Graph absence may downgrade a completeness posture; it may **never** remove a non-waivable requirement from the approval condition. This single asymmetry is what stops an omitted edge from laundering a change past the authority that most needed to see it — and it is the architecture-layer form of `INV-30`'s *every affected owner*, which `G1-FIND-36` already showed CODEOWNERS cannot satisfy. `[CAN→3 · adjacency semantics · 6 · the check]`

**Bootstrap posture, declared rather than discovered later.** Failing closed over a fully described graph is sound; failing closed over the current Markdown estate would block nearly every change. Therefore: closure is required over the **descriptor-covered subgraph** · uncovered or untyped surfaces report `unknown`/`partial` and **never clean** · high-consequence classes remain blocked until covered · lower-consequence classes proceed only under a **named, authority-bearing bootstrap policy with declared residual risk** · coverage expansion is measurable and reported. `[CAN→G2 · coverage instrumentation]`

## §E13.9 — Invalidation, generation, publication

Canonical advancement **logically invalidates** dependent derivations immediately.

**`G1-FIND-51` — invalidation is a predicate, not a stored flag.** A reader determines staleness by comparing the artifact's pinned constituent revisions against current; this requires **no write anywhere**. Storing an `is_stale` boolean would create exactly the independently-writable duplicate state this loop exists to abolish — solving a duplicated-state problem by adding duplicated state, which is `D0CKPT-GRD-003` committed inside the fix for `D0CKPT-GRD-003`.

Then: stale artifacts **fail the current-generation predicate before any replacement exists** · candidate generation is never effective · **partial generation never publishes** · published generation changes through an **atomic pointer swap** · each artifact class declares synchronous, asynchronous or lazy regeneration · repeated generation failure emits a **durable escalated obligation** rather than retrying silently.

## §E13.10 — Operational predicates

Output 4 owns the Change Manifest lifecycle enum. **Output 2 owns the predicates and which object owns each fact** — they are derived over separately owned facts and are never one writable lifecycle scalar. Interface definitions; full algorithms route to Outputs 3–6.

| Predicate | Holds when |
|---|---|
| `impact_current` | The impact result pins the exact manifest revision, base, graph, ruleset and coverage posture currently being evaluated |
| `owner_set_complete` | Every resource owner and every policy-triggered, non-waivable or independently liable authority required for the consequence class has resolved; **no required owner is silently absent** |
| `decision_condition_satisfied` | Current valid decisions satisfy the applicable policy; no blocking refusal, stay, expired condition or invalid grant remains |
| `accepted_historically` | **★ R1 (split).** An authority-bearing acceptance occurred, referencing the exact manifest revision, impact result, conformance result and decision basis. **This is a permanent historical fact and nothing later erases it** |
| `acceptance_currently_usable` | **★ R1 (split).** That acceptance is still usable for a landing or effect **now** — impact, policy, grants, conditions and conformance basis all remain current. An expired grant does **not** erase the decision; it may **block a later effect** and require reauthorization at the point of consequence |
| `landed` | An integration receipt proves the exact accepted set was applied to the named target; **partial or unknown effect is never projected as fully landed** |
| `effective(scope, effective_as_of, recorded_as_of, mode)` | **★ R1:** origin-side validity, local admission and activation, profile applicability, temporal interval and non-revocation all hold **for that scope** — resolved under a **declared temporal mode with both time bounds** (`§E13.5`). One `as_of` parameter cannot answer three different questions honestly |
| `observed` | A trusted, sufficiently current, **admitted** observation covers the named target and generation; **unreachable or unknown is not observed**, and an unadmitted observation is evidence of a report rather than of a target state (`§E13.13`) |
| `conforming` | A current conformance result evaluates the observed target against the effective snapshot under a named policy with adequate coverage |
| `reconciled` | **★ CORRECTED IN R1 — R0 laundered unresolved work into reconciliation.** Declared, landed, effective, generated and observed facts **agree**, **or** every remaining difference is a **current, valid, explicitly authorized** variation / transition-skew / degraded posture **within its permitted envelope**. R0 also admitted *"open obligation"* as a satisfying disjunct, which means **every defect having a ticket would report a fleet as reconciled** — the single most dangerous metric error available at fleet scale, because it makes a degrading estate look healthy to exactly the people who would otherwise intervene |
| `accounted_for` | **★ R1 (new, and it is what R0 actually meant).** Every divergence is known, attributed and owned — with or without an open obligation. **`accounted_for` and `reconciled` are independent:** a well-run estate may be fully accounted-for and not reconciled, and that is an honest and reportable state |
| `remediation_active` | **★ R1 (new).** A discharge attempt is currently live against the open obligation. Distinguishes *owned and being worked* from *owned and parked* |
| `stale` | The result's pinned source generation no longer matches the generation the query requires |

**A materialized current-state projection is permitted for latency and forbidden as a second writable truth:** derived, generation-stamped, deterministically re-derivable, invalidatable — never independently editable.

## §E13.11 — Durable work, replacement, semantic collision, degraded mode

**No generic queue is minted.** Architecture work binds to Build OS and Agent Runtime for stable work identity · dependency readiness · priority · claim and lease · heartbeat · attempt · timeout · retry and backoff · cancellation and revocation · dead-letter and escalation · replacement actor · result publication · terminal or compensating disposition. Build OS `10` already names claims, leases, merge queues and collision detection as **a maturity target rather than an accepted tool architecture**; Output 2 states how architecture work *uses* them and does not pretend they exist.

**Semantic collision is the architecture-specific addition.** Base movement and file disjointness are not collision control: two proposals can be file-disjoint and semantically contradictory, based on different owner or policy revisions, modifying different descriptions of the same logical resource, individually conforming and jointly invalid, or competing to supersede the same relation. The envelope needs a protected **logical** resource set · overlapping-operation detection · atomicity groups · ordering dependencies · a semantic conflict object · a rightful resolver · re-evaluation conditions. **Git and merge queues are adapters underneath it, never the model** — and this is where the arc's own `git-is-a-carrier` law becomes operational rather than rhetorical.

**`G1-FIND-52` — the loop must be able to not run, and neither review raised it.** At scale the conformance engine will be down, the graph will be mid-migration, an inventory will be unreachable. *"Everything blocks"* puts a single point of failure in the constitution; *"proceed unverified"* puts a bypass in it. The third answer is the **minimum-equipment-list posture the estate's own airplane comparator already supplies** (thesis §3.5 Lens B — fail-safe, checklists, black-box): a change may proceed under a **named degraded-mode authority** carrying a recorded **verification debt** that is itself a tracked obligation. Bounded by: named authority · consequence-class ceiling · explicit scope · expiry · compensating controls · discharge deadline · escalation. **Verification debt may never waive a non-derogable authority, a patient-safety floor, a professional duty, a consent requirement or an independently borne duty.** EXISTS-AS `verification_debt_as_capacity_control` (wave 6, `EVRUN-2026-000011` #296) — sharpened, not minted.

**★ CORRECTED IN R1 — R0's *"fail-closed if undischarged"* is incoherent once an effect is irreversible.** A single expiry action assumes the world can always be restored. After a forward-only migration, an externally committed effect or a delivered emission, closing the gate changes nothing that already happened. **Expiry therefore selects from an ordered set of what remains actually available:** block further promotion · quarantine the affected scope · **withdraw the conformance attestation** · safe halt · compensating action · forward correction · escalation to the accountable principal. **Only the first four are always available; the rest depend on what the effect left behind** — and an expiry path that cannot name which one applies is a promise rather than a control. `[CAN→5 · migration · Platform · compensation]` `[CAN→6 · discharge proof · G2]`

## §E13.12 — Decision-condition interfaces

Interfaces required here; **semantics bound to `§G1-AUTH`, not invented**: approval · refusal · abstention · absent or unavailable authority · delegate or substitute · conditional approval and condition expiry · decision expiry · revoked grant · conflicting decision revisions · challenge and stay · emergency action · **point-of-consequence reauthorization** · partial acceptance and splitting.

**`G1-FIND-53` — two kinds of blocking refusal, and a model with one type will silently treat them alike.**

| | **Delegated / revocable gate authority** | **Non-waivable or non-derogable independently held right, duty or authority** |
|---|---|---|
| Example | A review function whose refusal blocks | Patient consent refusal · professional clinical duty · operator sovereignty over local admission |
| Held by | A delegate, at the delegator's discretion | The principal, by law, contract, role or duty |
| Can be ended | **Yes — prospectively**, by withdrawing or replacing the delegation | **★ CORRECTED IN R1: yes — but only by the rightful holder or the governing external basis, prospectively, with history preserved.** R0 said *"No,"* which is wrong and wrong in the direction that matters most: **a patient withdrawing consent is the paradigm case**, and a model asserting patient consent "cannot be ended" cannot represent withdrawal — a legal requirement, not an edge case. Licences expire; duties end when the governed condition or governing law ends; an operator may make a new admission decision |
| Recorded refusal | **Survives.** Ending a delegation never rewrites a recorded refusal as though it never occurred | Survives — and cessation is **prospective**, so acts already performed under the authority that was then in force are **not retroactively invalidated** (`§E13.5`: this is the temporal law applied to authority, not a separate rule) |
| Fungibility | Not routable around while the delegation stands | **★ R1 — the durable invariant is not permanence, it is non-derogability by others: no other participant may waive, outvote, route around or silently time it out while it remains effective.** |

Both produce a blocking refusal; the failure mode of confusing them runs in exactly one direction. **The vocabulary discipline matters too — do not call every professional duty or operator sovereignty claim a "right."** They are independently borne duties and authorities, and flattening them into "rights" is the value-collapse defect this arc has now repaired six times. Where a waiver exists at all, **the waiver holder is named**. `[CAN→§G1-AUTH · 3 · 6]`

## §E13.13 — Observation and evidence trust

An observation carries: observer and workload identity · target and scope · acquisition method · **observed time and recorded time** · freshness · coverage and unreachable areas · tool, runtime and configuration revision · input and artifact digests · instrumentation health · uncertainty · corroboration or contradiction · retention and revocation · notification and subscription · priority · dedup and coalescing · escalation.

**Machine evidence is evidence.** A signature proves custody, not correctness; a tool version proves provenance, not accuracy.

**`G1-FIND-59` (new in R1) — an observation event and a claim about the target are two different facts, and R0's class definition undercut its own field list.** R0 said observation failure means *"coverage gap or unreachable target — not a wrong answer,"* which cannot survive the forged, incorrect, stale or mis-scoped evidence the charge explicitly requires. **`Observer O reported X at T` is establishable. `Target S was in state X` is not, by the same event.** Two objects:

| Object | Establishes | Carries |
|---|---|---|
| **Observation event** | That an acquisition or assertion occurred | Source-issued event identity · acquirer · target · method · observed and recorded time · provenance · delivery attempt |
| **Evidence admission** | That the event is usable as evidence *of target state* for **this** decision | Identity and signature validity · correct target binding · instrumentation health · source currency · coverage sufficiency · integrity · corroboration or contradiction · admissibility for the named conformance decision |

**The event is preserved even when admission fails** — a rejected or forged observation is itself evidence about the observer, and deleting it destroys the only trace of the attempt. `[CAN→6 · admission criteria]`

**`G1-FIND-54` — observer independence is a property of the observation *set*, and R0's own formulation destroyed evidence to make that point.** **★ CORRECTED IN R1.** R0 said twenty correlated observers are *"one observation with twenty timestamps."* That is worse than the error it was fixing: collapsing the events discards detector consistency, disagreement between supposedly identical detectors, timing, observer behaviour and liveness — **real data deleted to protect an inference**, which is `§7.1` item 6's *narrative revision destroys evidence* committed in the section about evidence trust. Corrected: **twenty separately attributable observation events in one declared dependence/correlation cluster, carrying no claim of twenty-fold independent corroboration.** The invariant was always about **corroboration weight**, never about event identity. This is `§E12.2`'s independence-per-claim rule applied to machine evidence, and the same law wave 6 states as *parallel agents ≠ evidentiary independence*. `[CAN→6]`

**`G1-FIND-60` (new in R1) — the no-auto-apply rule was bypassable by auto-creating obligations.** R0 had the observer never *applying* a change, while its controller emitted **substantive obligations** directly — so a detector could not edit architecture but could unilaterally place a binding duty on an owner, which is authority by another route. **Corrected: a controller emits observations, evidence and *candidate* findings only.** A candidate becomes a substantive obligation solely through an **authority-bearing admission**, or through an **already-accepted deterministic policy** that pre-authorizes automatic admission for that defect class. This preserves the raw anchor's own position (`EVSRC-2026-000188_TK.md`: emits work items; auto-promotion prohibited) rather than honouring it in one clause and defeating it in the next. `[CAN→6 · admission policy · Accountability threshold]`

## §E13.14 — Review admission and independence requirements

**Admission before review.** A proposal that has not arrived carrying declared class and consequence · pinned base · valid schema · impact result and coverage posture · required-owner set with provenance · **conformance preflight result** · collision check · rollout scope · rollback/compensation/forward-only posture · cited evidence · stated uncertainty — **does not consume owner-review capacity.**

**★ CORRECTED IN R1 — R0 contained a real contradiction between this section and `§E13.3`.** This section required a conformance result *before* owner review; the functional map places conformance *after* it. Both are needed, and they are **two different moments**: a **machine preflight** before scarce human attention is spent, evaluating what is decidable against the pinned base; and a **final conformance evaluation** after decisions, exceptions, conditions and the final revision set are known. Only the second can be current, because the accepted set does not exist until the decisions do. **A preflight pass is admission evidence and never satisfies the conformance gate.** At a thousand machine-authored proposals a day, a queue that accepts everything syntactically valid is a denial-of-service weapon aimed at authority holders.

Required interfaces: proof-carrying admission · machine-decidable rejection before human review · deduplication and coalescing · consequence/risk classification · WIP limits and backpressure · owner-capacity awareness · deadlines and legal clocks · reserved emergency capacity · reviewer-independence requirements · compatible change waves · dead-letter and escalation. **The final scheduling algorithm is not settled here.**

**`G1-FIND-55` — the scarce input is decorrelated judgment, and it does not come in one currency.** Twenty agents on the same model, corpus and policy are one opinion at twenty times the cost; a queue that counts them as twenty inputs gets *more* wrong as it scales. But the entry receipt's *"independence budget with three substitutable forms"* is too loose to author, and the relief review was right to hold it: **soak time is exposure evidence, not judgment; machine verification cannot replace a legally or professionally non-delegable authority; human review cannot make a machine-decidable hard failure disappear without an attributed exception.** Corrected to **policy-declared independence requirements and evidence channels by consequence class**, with plurality of channel preserved and no single independence score.

**And this binds to an existing accepted row rather than to a new scheduler.** `AB-04` rejected the universal two-implementation mandate and replaced it with an **independence-proof ladder** — second independent implementation · independent parser/validator · independently authored conformance suite · alternate consumer · portability/fork drill · standards-native comparison — under the explicit rule that **evidence strength rises with consequence and lock-in risk**. That row is already `adopted_narrowed`, already routed to the **G1 conformance model**, and already marked `blocks G1`. **The admission model and the conformance model are the same ladder viewed from opposite ends**, and Output 2 should say so rather than building a second scheduler beside it. Full independence assessment remains **Output 6's**. `[CAN→6]`

**Sampling audits a class of decisions made under a pre-authorized policy. A sampled-but-unreviewed change is not approved.**

## §E13.15 — The self-application guard

**This loop governs the resources that define this loop** — the manifest contract, authority and decision policy, conformance rules, the protected integration path, boot routing, and this operations contract itself. `AB-08` was a failure **inside the self-governing subset**: the artifacts that went stale were the ones the process uses to know its own state.

**No new "constitutional document kind" is minted.** The guard binds to Output 1's existing resource facets and placement policy, Build OS protected surfaces, and the authority grammar.

> **Core invariant: a change may not become valid by using the successor rules it proposes to justify itself.**

For any resource governing the architecture-change process:

1. the change is evaluated under the **currently effective predecessor ruleset**;
2. the proposing operation **cannot be its own sole validator, approver or independent proof**;
3. successor rules activate **prospectively only**, after acceptance, landing and verification;
4. predecessor rules remain **resolvable** for historical reconstruction and recovery;
5. **any reduction in review, proof, authority or protection is itself a high-consequence change** requiring explicitly stronger review;
6. emergency or degraded operation may not waive non-derogable rights, independently borne duties, or the evidence needed to review the emergency afterwards;
7. where changing a validator or its policy could change the verdict, **old and new validators are cross-run**.

Relation semantics, lifecycle and conformance detail remain Outputs 3, 4 and 6; the executable guard is G2. **The boundary is Output 2's.** `[CAN→3/4/6 · G2]`

## §E13.16 — Agent continuity and contribution lineage

The live fixture is this arc: a veteran authoring context exhausted, a relief reviewer entering, a veteran reviewer continuing, a fresh authoring context taking over, a fresh reviewer taking the review seat — **all over one branch, one carrier, one work package.** Chat labels are not durable identities.

**Non-collapsing objects** — names remain subject to governing vocabulary; the distinctions are mandatory: work package/lane · architecture operation · **seat/function** · **holder binding** (who occupies a seat, in what scope, over what effective interval) · principal · actor · **runtime profile** · run · attempt · thread/conversation · contribution · grant · handoff receipt · decision receipt · integration receipt · evidence capture.

**★ CORRECTED IN R1 — R0 made an actor a new identity every time it started a run, which breaks the exact continuity this section exists to establish.** Two separate things: **stable actor identity** is `operator/project namespace + actor` and persists across every run; the **contribution attribution coordinate** is `actor + runtime-profile revision + run + attempt` and locates one piece of work. **The display name is not the identity**; two actors may carry the same label in different namespaces without ambiguity, and the same actor under a new runtime profile is the same actor with a different attribution coordinate.

**Replacement semantics.** The work package is unchanged · the prior run and attempt end, suspend or lose their claim · **authority does not pass through prose or pasted context** · a handoff records exact durable state and unresolved obligations · the successor receives a **new holder binding and grant** · a new run and attempt begin · contributions remain attributed to the producing actor, run and attempt · overlap is **explicit concurrency**, never accidental double possession · replacement does not duplicate work · **independence is assessed per claim, never inferred from differing model names** (`§E12.2`) · the prior transcript may inform the successor and **does not become governing truth**.

**`G1-FIND-56` — four attribution facts that must not collapse into one.**

| Fact | What it answers | Grounded in |
|---|---|---|
| **Contribution lineage** | Who produced what | The event history |
| **Credit** | Who is recognized | Organizational or program **policy** |
| **Accountable commitment** | Who accepted or committed the change | An authority-bearing decision receipt |
| **Legal / professional liability** | Who answers for it externally | **Law, contract, duty, role and facts — outside OMNI** |

The entry receipt said liability is *"a policy over the contribution graph."* That goes too far. **OMNI records and resolves liability bases; it does not invent liability because an agent authored more tokens or touched more files.** The distinction matters most exactly where it is easiest to lose: when the actor is a replaceable process, fusing contribution with liability makes the process the principal, which is both false and unusable.

**A solo actor is one occupied authoring function in one work package** — not a degenerate trifecta. The Nick–Opus–Knox pattern is a **bootstrap operating profile** (`§E11.E`), and the constitutional content is the set of non-collapsible functions — operator intent and consequential acceptance · repository-native construction · independent falsification · affected semantic authority · bounded landing · proof — **not the number three.** The profile grows when a change requires a function that cannot be collapsed and shrinks when it does not.

**`architecture_steward` separation, stated as a prohibition because the seat is where every ambiguity gravitates.** These functions remain separable even when one person currently holds several: completeness assessment · semantic ownership · exception authorization · residual-risk acceptance · cross-cutting acceptance · integration · independent verification. One holder may occupy several **only** under the applicable static/dynamic separation-of-duty policy, and **each exercised function is separately receipted.** A steward who assesses completeness, waives missing ownership, grants the exception, accepts the residual risk, approves the shared resource, integrates it and judges the correction adequate **is a sovereign architect** regardless of what the model calls them.

## §E13.17 — Reasoning evidence: the addressability seam

**Live estate finding, and it corrects what I was about to propose.** I intended to route captured build reasoning to the `build_evidence/` lane. **The lane stub explicitly forbids it** — *"this is NOT a shadow Build OS ledger. Internal build findings, agent build logs, codebase discoveries, test/eval results go to their existing homes."* That lane is for **externally-sourced** build technique. Verified before writing; recorded because the near-miss is the point.

**What the estate actually has.** **★ R1 — the count is now a typed quotation rather than a hand-maintained number, which is the only fix consistent with `§E13.7`.** Enumerated set: `.cursor/plans/*verbatim*.md` **as of `ee1fa6e05b4313e49aa361e75a2dea11b491de18`** — **14 files, 2.3 MB, spanning arc segments `C4.2B` · `C4.2C` · `C4.6` · `INS-G0` · `INS-G1A` · `FAI PRE-0` · `FAI G0`.** The glob is the source; the number is a quotation pinned to a revision and **must not be restated anywhere without that pin.** All are **catalogued**, all passported with a consistent contract — `Authority: NONE. Preservation confers no authority (GRD-036)` · `verbatim_preserved · immutable_once_pasted · never_default_loaded` · *"source, not authority; where this thread and a committed carrier differ, the carrier controls"* — and a **custody-vs-authorship split** already separating who holds the record from who authored the content. And `v4_C4_0_depth_preservation_protocol.md` is **`active`**: a standing anti-flattening rule forbidding authoring any section from a routing pointer alone.

**`G1-FIND-57` — reasoning loss is an addressability problem, not a storage problem, and the estate proves it.** `C4.0`'s mechanic for ingested evidence is *registry row → downstream homes → reopen the cited source spans*. It works because the **EVRUN concept registries index into the sources.** Internally-produced reasoning has the sources and **no index**. The verbatims are correctly `never_default_loaded`, which makes them write-only in practice: reconstructing the `AB-08` rationale in this pass cost a full independent run to recover facts that were **known in the thread where the change was made**. Someone already hit this and hand-patched it once — `v4_INS_G0_kickoff_subagent_verbatim_index_2026-08-08.md` exists because one arc needed an index badly enough to build one manually.

**The precise honest statement, tempered from the entry receipt's overclaim:** OMNI has a repeated, passported verbatim-preservation practice and an **active read-side depth discipline**. It does **not** have a general write-side capture, span-addressing or decision-linked reasoning-index contract. Level one (canonical state) and level three (full transcript) exist; **level two does not.**

**The seam, and it must not become another hand-maintained registry.** Addressable reasoning references attach to **existing** objects — decisions (`03`), conflicts (`05`), guardrails (`06`), open-review items (`08`), findings, acceptance receipts — and **the index is generated from those references.** A decision receipt references the rationale that produced it; the rationale unit records claim, basis, alternatives rejected, residual uncertainty, and a pointer to the verbatim span. **The addressable unit is the decision or the rejected alternative, not the session.** `never_default_loaded` survives: the answer to a million tokens of reasoning is never to boot the next agent on it, but to make it **findable from the decision it explains.**

**Two constraints on the captured object.** The ordinary captured material is **visible** rationale, source anchors, rejected alternatives, uncertainty, decisions, tool and action traces, and contribution outputs. **Do not design OMNI around guaranteed access to a model's private hidden chain of thought** — it is not reliably available, not stable across vendors, and not a substrate to build accountability on. And the rationale reference is a **relation over existing decision, conflict, guardrail, finding and review identities — not a second parallel canon.** `[CAN→G2 · generation · Evidence Plane · lane placement]`

**`G1-FIND-58` — retention is governed by an accountability-and-evidence horizon, and contestability is one input rather than the whole rule.** *Ephemeral cognition does not imply ephemeral consequence.* A transcript may be unretained, excluded from personalization, deleted under policy, minimally retained or under legal hold — while a consequential act still owes a durable minimal record: who or what acted, under which principal and grant, which inputs and versions mattered, what decision or effect occurred, what evidence proves it, what authority accepted it. The horizon composes **contestability · rights and duties · consequence · safety · legal and contractual retention · auditability · reproducibility · privacy minimization · legal hold.** Build and care share the **grammar** (principal · actor · runtime profile · run · attempt · conversation · contribution · grant · decision · evidence · handoff · lineage) and **must not share the retention, privacy or authority profile** — a care thread cannot inherit build retention policy. `[CAN→Care · Evidence Plane · not settled here]`

## §E13.18 — Effectiveness is jointly derived

The entry receipt said effectiveness is asserted by the receiving scope *"never by the origin."* **Overcorrection, withdrawn.**

| Side | Owns |
|---|---|
| **Origin** | Source revision · issuer-side validity and effectivity · withdrawal · supersession |
| **Receiving scope** | Local admission · activation · profile applicability · local variation |

**`effective(scope, as_of)` is derived from both** (`§E13.10`). And a federation member's non-admission is **not automatically drift** — but neither is it automatically *"fully conforming."* It resolves to a named posture: `supported_older_version · authorized_variation · transition_skew · incompatible · unsupported · security_revoked · attestation_withdrawn`.

**Sovereignty prevents forced adoption. It does not compel OMNI to attest that every declined revision remains conforming.** The distinction is load-bearing in both directions: without it, drift metrics report every sovereign operator as broken and the correction queue fills with work that must never be done; with it overstated, OMNI would vouch for a security-revoked revision because someone declined to leave it.

**`landed` ≠ `effective` ≠ `observed` ≠ `conforming` ≠ `reconciled`**, and at fleet scale there is no single moment when *the* architecture is uniformly deployed.

## §E13.19 — The `AB-08` vertical proof

**Gate sequence corrected.** The entry receipt required the G2 checker to exist before repairing `ledger:287`, so that the loop's own mechanism would find it. That inverts G1 and G2, and it leaves a **binding** artifact knowingly false to serve as test material. **Manual correction is not the final mechanism, but it is a legitimate governed correction while the mechanism is unbuilt.**

**Sequence:** ① freeze the exact defective snapshot at `50431e32851086acbbd9f4534e2cec7e7f4b5f49` as the immutable fixture input · ② author Output 2 against that frozen evidence *(this section)* · ③ **correct `ledger:287` promptly in a separate, rightful, bounded correction transaction** — not in the Output-2 authoring commit, and not waiting for G2 · ④ preserve the four carrier blocks as ambiguity cases until assertion-vs-quotation typing decides them · ⑤ when the G2 checker exists, run it against the frozen snapshot, the repaired estate, and the synthetic cases.

**Fixture cases.** *"Exactly five true positives"* is withdrawn as an acceptance criterion — the typing rule has not yet decided the ambiguous cases, so pre-counting them assumes the answer.

| # | Case | Expected |
|---|---|---|
| 1 | `ledger:287` — *"7 rows remain legitimately open"* | **True positive.** Detectable by **arithmetic inside the tally block alone**: 34 `adopted` + 31 `adopted_narrowed` + 9 `already_present` family + 1 `rejected_with_reason` + 6 `open` = 81 = classified rows; *"7 open"* yields 82. No semantic judgment, no traversal |
| 2 | `ledger:289` — `adopted_narrowed` = 31 | **Negative control.** Verified correct against the live row set. It differs from case 1 **only in being right**; a checker that flags 287 must pass 289 |
| 3 | **★ CORRECTED IN R1 — R0 wrote "four" beside five anchors, so the fixture count was itself an un-derived hand-count inside the fixture that exists to detect un-derived hand-counts.** Enumerated by identity at `ee1fa6e`: **five assertion sites carrying two distinct superseded state tokens** — `§E10.13` (`AB-08_SEMANTIC_ANSWER_INDEPENDENTLY_REVIEWED__READY_FOR_OPERATOR_STEWARD_CLOSURE`), and `§E11.G` · `§E11.H` · `§E12.5` · `§E12.6` (all `ACCEPTED_IN_SUBSTANCE__PENDING_OPERATOR_STEWARD_RECEIPT`). Two are prose state declarations, two are status-table rows, one is both | **Typed-ambiguity cases**, held open until the current-vs-historical-quotation rule decides them. Not pre-judged. **The prose-vs-table-row split is itself part of the test:** a status row inside a superseded round's record is the hardest case for the typing rule to classify |
| 4 | Synthetic typed `current` assertion | Must equal source at HEAD or flag |
| 5 | Synthetic typed `historical_quotation` pinned to a superseded revision | **Must not flag** |
| 6 | Omitted dependency — untyped prose restatement, no declared edge | Coverage posture `partial`, **never clean** |
| 7 | Stale same-file aggregate | `D0CKPT-GRD-003` intra-artifact case |
| 8 | Duplicate delivery / retry of one correction | **One effect** |
| 9 | Agent replacement mid-correction | Work identity survives; attempt identity does not; **no duplicated work** |
| 10 | A correction that fails verification | **Finding stays open and visible** |

**Pass condition:** every true positive detected with **stable finding identity across reruns** · every negative control unflagged · incomplete coverage reported as `partial` · the correction closing **only** on verification. Case 10 is the load-bearing one: this estate has already run **three** corrective passes over this single change and each left residue, so a correction station that is not provably re-entrant has not been tested.

## §E13.20 — The 2026 floor and the 2030/2035 frontier

Mechanism probes, never authority (`§3.9.2`, `M-207` — take the mechanism, not its ownership or economic assumptions).

| Mechanism | 2026 adapter (probe) | Durable invariant | Frontier residue |
|---|---|---|---|
| Operation history | Durable-workflow event history; attempts distinct from results | Causal, bitemporal, replayable, no-hindsight | **Portable and replayable without the runtime that wrote it** |
| Staleness | Observed-generation markers on reconciled status | Invalidation is a **predicate** over pinned constituents | Machine readers demand it inline; a stale answer becomes a liability event |
| Integration | Merge queue against a moving base | **Semantic** collision is decided above Git | Collisions are between *intents*; Git may not be the carrier |
| Decision lineage | Policy-decision logs with bundle revision | A decision carries its exact authority and policy basis | Cross-operator decisions verifiable by a party that **distrusts the issuer** |
| Artifact provenance | Build provenance binding artifact to builder and inputs | Derivations are content-addressed over pinned inputs | **The snapshot becomes an externally consumed attestation** |
| Review | Human review queues | **Independence, not volume,** is the scarce input | Policy-declared independence channels by consequence class (`AB-04` ladder) |
| Authorship | Humans propose | **Proposal is never commitment** | Proposals arrive proof-carrying; humans govern envelopes and exceptions |
| Agent identity | Session and chat identity | **Work identity survives actor replacement** | **★ R1:** replacement is routine; thread identity becomes **non-authoritative and non-durable as work identity — not irrelevant.** R0 said *irrelevant*, contradicting `§E13.17`, where the thread is the evidence carrier and reasoning-span locator the whole seam depends on |
| Degraded operation | Block or bypass | Named degraded authority + typed verification debt | Debt discharge becomes a governed capacity constraint |
| Care-time authority | Internal RBAC check | Right context · actor · patient · moment · authority | **Counterparty agents query and verify OMNI's architecture at care time** |

**Two frontier claims stated plainly.** First: by 2035 the Effective Architecture Snapshot stops being an internal artifact. A payer's agent, a regulator's agent and a patient's own agent will consult it to decide whether to trust an OMNI assertion, which means it must be **verifiable by a party that does not trust OMNI** — a materially higher bar than *immutable and machine-generated*, and one only content-addressed derivation over pinned inputs can meet. This is the architecture-layer form of `G-18`: the home is GCE and its build-facing contract does not exist. Second: the human bottleneck becomes an architectural object with capacity, expertise, interruption cost and emergency reserve — governed like compute. **Neither is reachable on an identity and history model weaker than the 2026 floor, which is exactly what V1's single `change_id` was.** The candidate was constitutionally ahead of current practice and operationally behind it, which is the dangerous combination.

## §E13.21 — Lane-3 `M-106` EXISTS-AS for Output 2

Run against the six routed AI-corpus registries as the bounded consumption unit (`§3.9.1`). **The corpus had already routed a near-complete decomposition of this loop under other names**, and waves 4–6 each closed with **zero genuine net-new domain objects**.

| Output-2 element | Prior host | Verdict |
|---|---|---|
| Detection emitting governed work | `architecture_memory_lint` (wave 2, `EVSRC-2026-000188`) | **SHARPENS** — reopening the raw anchor showed the defect enum is **narrower** than the registry summary implied; the AB-08 defect (a derived scalar diverging from its canonical source) is not in it. Registry-summary-vs-raw-anchor divergence, **the sixth provenance mislabel of this arc** |
| Doctrine must compile to enforcement | `executable_governance_law` (waves 2, 5) | **EXACT** |
| Correction work object | `claimable_work_item` (wave 5, #274) — queue · worker · validation · approval · budget · lineage | **EXACT** — resolves where machine findings live without touching `08` |
| Invalidation / regeneration | `derived_permission_invalidation` (wave 1) · `cache_invalidation_event`/`cache_scope_key` (wave 5) · `recompute_vs_store_policy` (wave 2, *store truth, recompute derivatives*) | **EXACT family** — `§E13.9` is a sharpening, not a mint |
| Impact traversal | `dependency_probe_before_commit` (wave 2, #184) · `blast_radius_class` | **SHARPENS** — completeness-as-claim is the addition |
| Review-once-inherit-many | `compositional review` + `certified_variation_envelope` (wave 6, #285) | **EXACT** — and it supplies the re-review trigger (departure from the envelope) that the entry receipt's control-inheritance proposal lacked |
| Fleet-scale propagation | `change_absorption_budget` (wave 6, #303–305) | **EXACT** |
| Review scarcity | `verification_debt_as_capacity_control` (#296) · `automation_review_sampling_policy` (#311) | **EXACT** |
| Correlated agents ≠ independence | wave 6 multiplicity law + `§E12.2` | **EXACT** |
| Lifecycle rail vs authority gate | wave 6 #289 — *automate the evidence loop; do not automate the authority gate* | **EXACT** — this is `§E13.13`'s no-auto-apply rule |

**Residual novelty, narrowly stated:** the **unified correlated-operation decomposition with per-class failure physics** (`§E13.2`), the **typed-assertion discriminator** for derived values in prose (`§E13.7`), the **self-application guard** (`§E13.15`), and the **reasoning-index seam** (`§E13.17`). Everything else is sharpening of already-routed concepts. **The gap this arc keeps rediscovering is BUILD, not vocabulary** — and `§E13.7`'s five-day guardrail gap is the sharpest single proof of it.

## §E13.22 — Findings and register deltas

New findings: **`G1-FIND-47`** submission idempotency vs judgment revision · **`G1-FIND-48`** finding identity excludes subject revision, with occurrence semantics after closure · **`G1-FIND-49`** no hand-authored derived value in a canonical artifact; the five-day guardrail gap · **`G1-FIND-50`** non-waivable holders resolved by policy, never adjacency · **`G1-FIND-51`** invalidation is a predicate, not a stored flag · **`G1-FIND-52`** the loop must be able to not run — degraded mode with bounded verification debt · **`G1-FIND-53`** delegated gate vs non-derogable authority · **`G1-FIND-54`** observer independence is a property of the set · **`G1-FIND-55`** independence requirements by consequence class, bound to `AB-04`'s ladder · **`G1-FIND-56`** four attribution facts that must not collapse · **`G1-FIND-57`** reasoning loss is addressability, not storage · **`G1-FIND-58`** accountability-and-evidence horizon for retention.

New standing falsifier: **`F-13`** a false atomicity claim disguised as a summary sentence. New gap: **`G-20`** Architecture Operations is a capability under Architecture Governance, not a domain.

## §E13.23 — Acceptance boundary — what Output 2 does NOT settle

**★ CORRECTED IN R1 — R0's heading said *"Settled here,"* which is an acceptance verb a proposal does not own.** **Proposed as the Output-2 core; acceptance would settle:** the correlated-operation and five-class decomposition · the identity hierarchy and causal links · the event/history contract and its bindings · the ownership/binding map · fact ownership and projection roles · impact and owner-completeness claims · invalidation, generation and publication · the ten operational predicates · durable-work and replacement bindings · semantic collision and degraded mode · decision-condition **interfaces** · observation and evidence trust · the admission and independence-requirement model · the self-application boundary · agent continuity and contribution lineage · the reasoning-evidence boundary and index seam · joint effectiveness · the `AB-08` proof design.

**NOT settled, and no reader may treat this section as settling them:** relation cardinality, precedence, inheritance and conflict semantics (**Output 3**) · the Change Manifest lifecycle enum and change classes (**Output 4** — Output 2 defines only predicates and fact ownership) · the deterministic effective-resolution algorithm and profile composition (**Output 5**) · conformance and independence-assessment algorithms, forbidden-loosening as a machine check (**Output 6**) · the per-mechanism transfer-limit matrix (**Output 7**) · authority ontology, abstention and delegation semantics (**`§G1-AUTH`**) · executable journal, queue, controller, validators and the typing lint (**G2**) · end-to-end proof (**G4**) · Evidence Plane redesign, lane placement for reasoning capture, and clinical retention policy (**named and routed only**).

**The five work classes are local to this operating analysis.** They are not promoted to an OMNI controlled vocabulary by this section, and any such promotion requires its own semantic review.

## §E13.24 — Status

**`OUTPUT_2_PROPOSED · NOT_ACCEPTED · 1_OF_8_COMPLETE_UNCHANGED`.** Output 2 moves from `INCOMPLETE` to `PROPOSED`; it does **not** move to complete, and G1 remains incomplete. Acceptance requires independent proposal review and steward acceptance on the same standard Output 1 met. `B-15` narrows to outputs 3–7 plus Output 2's acceptance. Nothing is installed, no schema is minted, no registry, route, gate, checkpoint, lane or FWREG row is created. **The `ledger:287` correction is owed promptly and is NOT part of this authoring transaction** (`§E13.19` step ③).

## §E13.25 — Source posture for Output 2

**Read fully this pass:** both review objects (relief `NOT_READY`, veteran adjudication, relief `READY_TO_AUTHOR_WITH_EXACT_CORRECTIONS`) · `ingestion/build_evidence/_lane.md` · `v4_C4_0_depth_preservation_protocol.md` · the `AB-04` ledger row · `agent_work_protocol.md` §2.1 durable facts and execution law · `D0CKPT-GRD-003` including its 2026-08-08 intra-artifact specialization.

**Verified live against the repository before writing** (`F-06` discipline): the ledger disposition tally computed row-by-row — **31 `adopted_narrowed`, 81 classified, sum-consistent, `ledger:287` the sole arithmetic defect** · `build_evidence/` contents and its exclusion clause · **the verbatim set enumerated and pinned at `ee1fa6e` (`§E13.17`)**, their catalog rows and three passport headers · `agent_work_protocol.md:169`.

**★ R1 — acceptance precondition, declared rather than assumed.** The binding map's **Platform** and **Accountability** rows were built on consulted-not-full-depth reads. Before Output-2 **acceptance** — not before this correction commit — the controlling sections establishing desired/observed ownership, correction and compensation, the finding-versus-accountable-concern threshold, closure and reopen, and event and obligation ownership must be **read directly and verified**. `FO-6` does not close on delegated summaries (`§E13.6`).

**Consulted deeply, carried from the entry pass:** plan R8 (§1, §3.9.1, §3.9.2, G1 outputs, `§G1-AUTH`, G4's transaction) · the Tier-0 checkpoint · route `9v` · charter R9 · PRE-0 ledger R5 · this carrier's `§G1-CONTRACT`/`.b`/`.c`, `§7.5`/`§7.5.1a`, `§E10`–`§E12` · System and Surface Maps · Polaris · GCE/enterprise posture · Build OS `09`/`10` at declared maturity · Build Entry Gate `11` (frozen) · Agent Runtime & Harness capture · RBAC authority contract · the six AI-corpus registries · `EVSRC-2026-000188_TK.md` reopened.

**Not inspected:** the 300-plus raw ingest corpus · Platform and Accountability captures at full depth · runtime application code · hosted branch-protection settings · Lane-1 primary sources beyond prior probes.

**Evidence discipline — three claims killed by live verification this pass, recorded rather than quietly dropped.** ① A subagent's confidently reported *"sixth stale assertion"* at `ledger:289`, which **does not exist** — the live disposition-cell tally is 31, matching the line; the phantom came from `AB-04`'s row *mentioning* `adopted_narrowed` in prose while its disposition is `rejected_with_reason`. Produced **inside the analysis written to detect exactly that defect class.** ② My own intended routing of build reasoning to `build_evidence/`, which the lane stub disproves. ③ **My own count in `§E13.17`, caught in self-audit after the section was drafted: I wrote *"sixteen files across five arcs"* while listing seven arc labels, and the live count is fourteen files across seven segments.** That is `F-06` committed **in the section documenting `F-06` discipline**, by the author, in the pass whose thesis is that hand-authored derived values drift. **Subagent output is evidence and never authority — and this pass demonstrates the rule is not about subagents.** The defect is authorship of a derived value without deriving it, whoever holds the pen. `F-06` is not cured; it is being caught earlier, and `§E13.7`'s rule exists because catching it earlier by discipline does not scale.

**Entered at `50431e32851086acbbd9f4534e2cec7e7f4b5f49`.** Boot Freshness Check **PASS**. `check-checkpoint-pointer.mjs` **PASS**. **One file modified.**

## §E13.26 — R1 correction receipt, and the second vertical fixture the proposal produced on itself

**The decisive result of the first independent review of Output 2: the proposal authored the mechanism that prevents self-divergence and then reproduced self-divergence inside its own landing commit.** That is not an embarrassment to bury; it is the most valuable evidence this arc has generated, and it becomes a **second frozen fixture** alongside `AB-08`.

### §E13.26.1 — Fixture `AO-SELF-1`, frozen at `ee1fa6e05b4313e49aa361e75a2dea11b491de18` (blob `3b6b49f43a84a481084f7f1ea28831f4fa455c30`)

One fact changed — the verbatim count, corrected from 16 to 14 during self-audit. The correction landed in one surface. **Sibling projections stayed stale, the author declared the pass complete, and the STOP receipt did not detect it.**

| # | Defect | Surface | Detectable by |
|---|---|---|---|
| 1 | Corrected count vs stale siblings | `§E13.17` said 14 · `§E13.25` verification list said 16 · `§7.3` register said 16 | Referential — three restatements of one derived value, two stale |
| 2 | Un-derived fixture count | `§E13.19` said *"four"* beside **five** anchors; STOP token repeated `four_carrier_status_blocks` | **Arithmetic — count the enumerated anchors** |
| 3 | State change not propagated | `§E13.24` said Output 2 `PROPOSED` · `§6.1` still said outputs **2**–7 incomplete · `§6.2` `B-15` and the `§8` blockers row still said outputs **2**–7 | Referential — the `§8` STOP receipt asserted a state its own referenced sections contradicted |
| 4 | Proposal-authored closure | `§E13.6` *"`FO-6` closed"* · `§E13.23` *"Settled here"* | Lexical — acceptance verbs inside an object whose declared state is `NOT_ACCEPTED` |
| 5 | Foreign-fact re-ownership | `§E13.5` event list re-owned `grant_revoked_in_flight` and `obligation_leased` | Referential against `§E13.6`'s own binding map |

**Two facts make this fixture sharper than `AB-08`, and both are worse for the author.**

**First: every stale surface was inside the same commit, and three of them were edited in that commit.** This was not a failure to reach distant artifacts. `§E13.25`, `§7.3` and `§8` were all open under the cursor while the corrected value was being written elsewhere in the same file. **The "I did not look far enough" explanation is unavailable**, which leaves only the real one: *an author editing prose cannot maintain a derived value even inside a single editing session, in the pass whose entire thesis is that hand-maintained derived values drift.*

**Second: the review's own defect list undercounted, and so did mine.** The review named four categories. My first live enumeration found **eight** stale surfaces, including a third `B-15` restatement at the `§8` *"Remaining G1 blockers"* row that no reviewer listed. **The post-correction consistency sweep then found two more** — the opening posture block (`:15`) and the `§G1-CONTRACT` narrative (`:115`), both asserting outputs 2–7 as unauthored — for **ten**. Three successive careful enumerations by two parties produced 4, then 8, then 10. **Hand-enumeration of stale surfaces is itself an instance of the defect class** — which is exactly why `§E13.7`'s rule has to be mechanical and why `§E13.19`'s pass condition requires derivation rather than agreement between two careful readers.

### §E13.26.2 — What `AO-SELF-1` tests that `AB-08` does not

`AB-08` is a **cross-artifact, cross-commit, multi-pass** propagation failure over a *binding* ledger. `AO-SELF-1` is **intra-artifact, single-commit, single-author** over a *proposal*. Together they bracket the defect class:

| | `AB-08` | `AO-SELF-1` |
|---|---|---|
| Blast radius | Across artifacts and commits | **Inside one file, one commit** |
| Corrective passes before residue cleared | Three, each leaving residue | One so far — **this one** |
| Detection | Manual, by a later reader | Manual, by an independent reviewer of the landing |
| What it falsifies | That documented rules suffice | **That author self-audit suffices** |
| Verifies | Cross-surface propagation | **Single-session derivation discipline** |

### §E13.26.3 — Pass condition for the R1 correction

Not *"the surfaces were fixed."* **Every current Output-2 state assertion must be derivable from an enumerated source, and no restatement of a derived value may survive without a pin.** `§E13.17` and `§E13.19` now carry pinned enumerations rather than numbers; `§E13.25` and `§7.3` reference the pin rather than restating the count. **A future checker must be able to flag `AO-SELF-1` at `ee1fa6e` and pass the corrected head — differing only in being right**, which is the same negative-control standard `ledger:289` sets for `AB-08`.

### §E13.26.4 — What R1 did not change

The review's non-regression list is preserved intact: the correlated operation · commitment/effect separation · result/attempt separation · one authoritative owner per fact in scope · impact completeness as a claim · invalidation before regeneration · candidate generation vs publication · the ownership/binding map · semantic collision above Git · the self-application guard · agent succession and holder-binding decomposition · contribution vs accountability vs liability · reasoning evidence as addressability · generated-not-hand-maintained indexes · joint origin/receiver effectiveness · local-admission sovereignty · policy-declared independence channels · the frozen `AB-08` fixture · substrate independence · the Output 3–7 boundary.

**`ledger:287` remains unrepaired and outside this commit**, exactly as before. It is a separate, rightful correction transaction after proposal review.

---

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
> **Scope: the CARRIER AS A WHOLE and G1 — NOT Output 1, and NOT Output 2.** Output 1 is **accepted as a G1 proposal** (`§7.5`); **★ Output 2 is `PROPOSED · NOT_ACCEPTED` (`§E13`, R1 2026-08-13)**; Outputs 3–7, `§G1-AUTH`, the source floor and the model boundaries remain incomplete, so the carrier-level verdict stands unchanged. Recommended by `proposal_authoring`. Not self-accepted.

R1's *"one bounded semantics away"* was false against its own register, and R2's acknowledgment-focused label was too narrow. **The actual incompleteness is source coverage, model boundaries and evidence — plus the two distributed-authority problems.**

### §6.2 — Blockers, sorted by rightful gate

**Re-derived from the ledger's `blocking_scope` and the R8 contract — not from what felt appropriate to defer.** R3 moved `AB-08` to G2, which **overrode the binding ledger**: the ledger says `AB-08` is owned by the architecture steward, **decided at G1 artifact-metamodel authoring, and blocks G1 close.** That correction is the reason this table is re-cut.

**True G1 acceptance blockers**

| # | Blocker | Basis |
|---|---|---|
| ~~**B-1**~~ | **CLOSED 2026-08-11** — boot state normalized on the base branch and verified there (§0.2). Repaired outside this proposal, as required: fixing the accepted G0 carriers inside the proposal they block would have been circular | `AGENTS.md` boot rule |
| **B-13** | **`AB-01` generalized shared-mechanism form** — G1 decides and proposes it; the C4.4 owner participates in G1 approval; any edit to `C4.4 §R` itself is downstream (`G-07`) | ledger: `AB-01` blocks G1 |
| ~~**B-3**~~ | **CLOSED 2026-08-13 — `AB-08` landed `adopted_narrowed` in the binding ledger** at accepted head `480f3bb`; disposition at `§E11.G` + `§E12.5`. **No further fixture owed.** *(Output-1 acceptance was a separate transaction and is also complete; `AMM-C4.1`'s enumerated value sets, precedence, dispute lifecycle, operationalization, risk acceptance and conformance remain routed to Outputs 3/5/6 per `§E12.7`.)* | ledger row now `adopted_narrowed`; owner `architecture_steward` |
| **B-8** | **Source floor incomplete** — Lane-1 architecture-management sources unread **and required Lane-2 carriers unread** (System Map · Surface Map · Polaris · Platform · Accountability · C4.6 · federation-permeability). *R3 understated this as Lane-1 + C3.8 intermediates; C3.8 G4 is the named terminus, so its intermediates are optional — the Lane-2 omission is the real one* | R8 Lane 2 + `AB-11` |
| **B-15** | **★ NARROWED 2026-08-13 — `§G1-CONTRACT` outputs 3–7 incomplete, plus Output-2 acceptance.** The operations loop is **authored and proposed** (`§E13`); proposing discharges nothing. Remaining: graph semantics, change lifecycle, profile resolution, conformance model, transfer-limit matrix | R8 §5 `G1` |

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

**F-07 (new) A correct decomposition does not protect its own values — and self-rerun does not substitute for independent review.** R4 decomposed thirteen distinctions and then re-collapsed four of them one level down, inside the enums (`G1-FIND-19`). It reran its own fixture, found six failures, amended generally, and still shipped **three rules that its own model violated** — all three found by the next reader, none by the author. **Mechanism: an author checks values against the intent that produced them, and a reviewer checks values against the stated rule.** Consequence for this arc: a fixture result is provisional until it survives a reader who did not build the model. *(This is `F-03` — multiplicity is not corroboration — read from the other side: a single author rerunning their own model is not two observations.)*

**F-08 (new) An axis decomposition must be re-run against its own values, every time, and by someone else.** Twice consecutively the top-level decomposition improved and incompatible meanings stayed fused **inside the value sets** — `AMM-C1` in four places, `AMM-C2` in four more, the second time in the very pass that minted `F-07` to warn about it. **Mechanism: an author decomposes at the altitude he is thinking at, and the collapse hides one altitude down.** Companion to `F-07`, and the operational rule is the same: **a candidate is provisional until a reader who did not build it has attacked its values, not just its structure.**

**F-09 (new) A sampled search result presented as a population claim.** R6 grepped for table headers with a pattern that omitted the canonical one, matched an `analysis_nonbinding` child table, and published *“one ledger in four records an owner”* as an estate finding. **Mechanism: a search returns something, and something reads as evidence in a way that nothing does not.** `L-5` guards the miss; nothing guarded the hit. **Rule: a search result may become a claim about a population only after the population is enumerated.** Companion to `F-06`/`F-07`/`F-08` — the same defect family, now in four forms: a count outliving its table, a claim outliving its source, a state outliving its relation, and **a sample standing in for a population.**

**F-10 (new) Reading the vendor page and calling it the homework.** R7 consumed four public product/docs surfaces — Backstage, CODEOWNERS, AWS, Palantir — and treated them as having settled ownership modelling. They fixed a real conflation and they are **current-practice artifacts**: each assumes a human reads a register, a human clears a review queue, a human maintains a wiki. **Meanwhile R8 §3.9.1 had made Lane 3 mandatory since G0 and this arc had never run it**, and the corpus had already routed a harder version of the same rule. **Mechanism: a vendor's documentation describes the configuration surface of a shipped 2020s product; it does not describe the reasoning, the failure modes, or the 2030 shape — and it arrives with the authority of a primary source.** Rule: **a mechanism probe is complete only when the concept has also failed `M-106` EXISTS-AS against the six registries and been run through §3.9.2's frontier double-evaluation.** Companion to `F-09` — both are *the wrong source read confidently*.

**F-11 (new) Serial source capture — the newest source becomes the altitude.** Own prose → 42010 → vendor docs → frontier registry, each in turn treated as the answer. **The sharpest instance: the pass that criticized vendor capture promoted a `NEW`/`PARTIAL` candidate guardrail out of a propose-only workbench into architecture law in its own concluding section.** Mechanism: **a freshly opened source arrives with the authority of a primary source and the convenience of a conclusion**, and the last one read is always the most vivid. **Rule: no term in {governing estate · current mechanism evidence · frontier registry signal · targeted source verification · operator pressure · independent falsification} becomes the answer by being opened last; adoption requires an explicit authority-bearing decision at the destination gate.** Completes the family with `F-09` (wrong sample read confidently) and `F-10` (wrong altitude read confidently).

**F-13 (new, Output 2) A false atomicity claim is a load-bearing architectural assertion disguised as a summary sentence.** The Output-2 entry receipt opened *"a governed architecture change is one transaction over architecture resources, moving through nine stations."* That reads like a topic sentence and behaves like a schema: it silently defines identity, idempotency, crash recovery, authority and historical reconstruction, and every one of those inherited the error. The receipt then **disproved its own sentence three paragraphs later** by describing owner-scoped child work, continuous observation and correction-as-new-change. **This is the arc's third instance of the same shape** — the god object (`§E10.4`), the malformed scalar (`§E12`), and now the false transaction — and all three entered as *convenient language* rather than as claims anyone intended to make. **Test: if a noun in a summary sentence would change the identity, failure or authority model when taken literally, it is not a summary sentence.** Detected by independent review before authoring, which is the first time in this arc a load-bearing error was caught at the receipt stage rather than after a section shipped (`§E13.0`).

**F-12 (new) A pass labelled cleanup does not get a model pass's scrutiny — least of all from its author.** R8.1 called itself source discipline plus housekeeping and shipped **two new architectural constructions**; one contained a value collapse, and its own corrective tally was wrong. **Mechanism: the label sets the reviewer's expectation AND the author's own care level, so a construct smuggled into a closeout is the least-examined thing in the document.** Rule: **any pass that adds a construct is a model pass and is labelled one, whatever else it also does** (`G1-FIND-43`).

**F-01 Candour penalty** — rigorous attribution raises liability exposure, rationally reducing candid documentation. *No design response; any claim to have solved it is suspect.* · **F-02 The view becomes the truth** (`AB-27`) — falsifier of `D0THES-DEC-033`; G4 negative test · **F-03 Multiplicity is not corroboration** — PRE-0 demonstrated it on itself; R1 stated it and violated it in scenario 5 · **F-04 Gap-declaration masquerading as risk management** — this gate did it three times (Tier-0 #14, C3.8, Build OS) · **F-05 (new) Narrative revision destroys evidence** — R2 deleted three required tables while keeping their totals. **Prose is not a durable evidence carrier.**

### §7.2 — Gaps

`G-02` seat transfer/suspension → G2 · `G-03` **split** into §E4 problems A and B → `AB-29` · `G-04` adversarial viewpoint → G2 · `G-05` **superseded** by `B-8` · ~~`G-06`~~ **CLOSED** (Tier-0 #14) · `G-07` `C4.4 §R` owner   · ~~`G-08`~~ **CLOSED 2026-08-13** — the required Output-1 fixture and independent review cycle completed; the taxonomy-granularity question received an **accepted narrowed disposition**; **`AB-08` is `adopted_narrowed` in the binding ledger**. Historical failed candidates remain evidence. **No further Output-1 fixture is owed** · `G-09` attestation withdrawal · `G-10` seat model untested · `G-11` no substrate translation · `G-12` how many authority contexts; dual-context principals · **`G-13` (new)** third-party effects outside OMNI · **`G-14` (new)** Build Entry Gate `11` frozen against a stale foundation · **`G-15`** `02_authority_routing_map.md` is a Phase-0 skeleton carrying binding routing authority · **`G-19` (new)** **no authoritative applicability-and-traceability mechanism was located** for resolving external obligations, operator policies, contractual requirements, adopted standards and informative comparators into effective OMNI architecture; **existing regulatory content across the estate remains unassessed.** **Split by scope, and *"non-blocking for G1"* is withdrawn as imprecise:** the **cross-cutting semantics ARE part of G1** — carried by `§G1-CONTRACT.c` and closing through the existing Output 1–7 acceptance conditions, already inside `B-3` and `B-15`, so **no new blocker is minted**; the **population and operation of the regulatory programme** (full corpus · product-specific SaMD determinations · certifications · per-jurisdiction adjudication) is **later or parallel work and does not block Output 1** → steward + operator (`G1-FIND-10`). *(An earlier wording claimed the named standards were "all absent" and used a binding/borrowable binary — both withdrawn.)* · **`G-16` (new)** Care's U/C/A crosswalk is a frozen nonbinding candidate; generalizing it past Care is unratified cross-scope synthesis → G3 Care reconciliation · **`G-17` (new)** the five-axis authority decomposition is a proposal requiring reconciliation against Care's own composition-field list → G3 · **`G-18` (new)** GCE is the established home but the build-facing boundary contract does not exist (thesis §C paused) → §C authoring / G3.

**`G-20` (new, Output 2) — Architecture Operations is a governed capability under Architecture Governance, NOT a domain.** It is not a truth-owning domain, an enterprise workflow engine, a generic event platform, a universal queue, or an executive over Platform, Accountability, RBAC or Federation. Recorded as a **gap in the estate's naming discipline rather than a defect in the output**: nothing in the current catalog or read graph would stop a later agent from reading `§E13` as the charter for a new domain, and `D0THES-GRD-026` (**payload-noun ≠ domain**) applies to my own construction exactly as it applies to labs or Rx. The binding map at `§E13.6` is the control; **its authoring test is the operative sentence** — if a proposed object would function identically for a non-architecture subject, it belongs to another layer and must be bound, not minted. → resolved when Output 2 is accepted and the catalog row records the capability scope.

*(`G-16`…`G-18` were minted in the body of the previous pass and never reached this register — the finding-evaporation defect this register exists to prevent. Recorded as a live instance under `F-04`.)*

### §7.3 — Findings routed

`G1-FIND-01` R8/R9 stale and contradicted by their own catalog rows; checkpoint §4 diverges from the ledger's `blocking_scope` · `G1-FIND-02` `rbac_authority_contract.md` §5 carries two different four-member lists · `G1-FIND-03` the most precise composition statement sits at the lowest maturity · `G1-FIND-04` G0 receipt normalization **proposed** · `G1-FIND-05` plan §1's *"nothing exists"* and R1's *"nothing is net-new"* are equal and opposite · `G1-FIND-06` operations mechanisms assume elastic review capacity · `G1-FIND-07` **C3.8's ratified posture and translation map were never connected to the authority model** though it was catalogued, routed and named in two required lists · **`G1-FIND-08` (new)** comparators used here need `comparator_analogy_registry.md` rows per Build OS `10`'s never-re-scatter rule · **`G1-FIND-09` (new)** **Build OS `09` already states *"build-agent authority never becomes product authority"*, and Care §19 already carries the U/C/A propagation crosswalk — this gate re-derived both as "three planes."**

**`G1-FIND-11` … `G1-FIND-18` (new, R4 — from running the `AB-08` fixture; each stated in full at `§E6.9` and summarized here so the register stays the index it exists to be).** `G1-FIND-11` the `plane` axis is real and closed (`D0THES-DEC-033`, seven planes + Evidence) and was mis-diagnosed in both directions — one field was answering *resides* and *constrains* → `A-1` · `G1-FIND-12` the governance-taxonomy drift is **universal and measured** (15/15 domain contracts declare `domain_contract`; System Map `system_map`; Surface Map `architecture_map`; one Tier-0 carrier has no passport) — representable via `A-3`, **ratification is the taxonomy owner's** → `architecture_steward` · `G1-FIND-13` a **boot-visible reusable pattern exists and is ungoverned** (`coherent_omni_architecture_pattern_2026-05-17.md`, read-graph Tier-0 #14; no passport, no authority, no owner) — corrects `§E6.2` item 5 → `architecture_steward` · `G1-FIND-14` **OMNI's non-document resources are governance-invisible** (`lib/auth/` and `scripts/` absent from `CODEOWNERS` while `lib/safety/` and the *demoted legacy* map are protected; one CI workflow estate-wide; the conformance suite runnable by nothing) → `architecture_steward` + `repository_administration`, G2 · `G1-FIND-15` **naming state is an axis independent of acceptance**, proven live (Reactor `analysis_closed` + `naming gate OPEN`, and its verifier forbidden to name it) → `A-2` · `G1-FIND-16` one `version` field cannot serve OMNI-authored resources and external editions (found by consulting 42010 `:2011` against the current `:2022`) → `A-4` · `G1-FIND-17` the fixture's own case list contained a **cluster** (GCE = five resources), which manufactured the probe's *"needs three roles at once"* → fixture-protocol amendment `P-1` · `G1-FIND-18` **42010's transferable content is bounded to four of the thirteen required distinctions** and is silent on authority, applicability, profile targeting, variation and non-loosening; its correspondences relate AD elements to AD elements, so OMNI's description→implementation relations are an OMNI extension. **Mechanism probe only — no conformance owed, none claimed, no standards programme opened** → registry rows **proposed** under `G1-FIND-08`.

**`G1-FIND-46` (R8.4, ★ CORRECTED IN R8.5 — `§E12.7.2`). Origin assertion state is ISSUER-scoped; the receiving namespace's admission is a SEPARATE, attributed, effective-dated `applicability_decision`; effective architecture joins origin-valid assertions with ACTIVE local admission decisions.** **R8.4's wording — *“`governance_decision_state` is namespace-scoped, not global”* — is WITHDRAWN as structurally wrong: that field is a scalar facet on the assertion, so one assertion cannot hold `accepted` for A and `candidate` for B, and calling the scalar namespace-scoped hid a second object inside the reader's evaluation context. **The malformed-scalar defect, committed in my own headline finding, in the pass whose purpose was to end it.** The corrected form mints nothing — it reuses the `applicability_decision` family Case B already exercised, making a peer operator's assertion the **third instance of §7.3's ingress shape** (external standard · customer requirement · peer operator). And **absence of an admission decision is TYPED ABSENCE** — §4.8's `absent`/`unknown`; the resolver may **project** `not_determined` as a **derived** result, never store it as a governance-decision state, and **`denied` requires an attributed decision that exists and says no** (★ normalized R8.5b). → Output 3.

**`G1-FIND-44` · `G1-FIND-45` (new, R8.3 — `§E12.8`).** `G1-FIND-44` **the Output-1 Lane-3 checksum defeats two more of my novelty claims.** `architecture_memory_lint` (wave 2, marked *“one genuine net-new ★”*) is *“an automated health-check over the control plane → **emits work items**”* — which is **both** `G1-FIND-37`'s divergence check **and** `G1-FIND-42`'s propagation defect, already routed, **with the emits-work-items half I did not have**. And `connected_not_committed`/`graph_edge_authority_state` (wave 2) is an **`EXACT`** match against `RelationAssertion` — *“an edge carries provenance/confidence/owner/lifecycle; **an edge is a candidate not a commit**”* — sharpening it with an **edge authority state** and a **confidence** mine lacks · `G1-FIND-45` **a constraint on `as_of` resolution the core is missing:** `point_in_time_context_integrity` = *“no-future-leak live **+ no-hindsight-leak on replay/eval**”*. My model answers *what was in force on date X*; it does **not** forbid the resolution from using information that did not exist at X. **Hindsight leakage would silently invalidate every reconstructed conformance claim** — carried to Output 3.

**`G1-FIND-43` (new, R8.2 — `§E12.0`).** **A closeout that introduces new architecture is not a closeout.** R8.1 framed itself as housekeeping and shipped `operationalization_binding` and the independence relation; the first collapsed plural controls into a single mode and admitted `accepted_residual_risk` as an operationalization, which would have let a resolver *“operationalize”* a patient right by accepting the risk. **Repaired at `§E12.1` with a `derogability` facet so the prohibition is checkable rather than prose.** Standing falsifier `F-12`.

**`G1-FIND-40` … `G1-FIND-42` (new, R8.1 — stated in full at `§E11`).** `G1-FIND-40` **EXISTS-AS defeats novelty; it does not establish truth** — the wave registries declare themselves `omni_analysis_nonbinding` / propose-only, so a match proves prior *routing*, and R8 promoted a `PARTIAL` candidate guardrail into architecture law anyway (`GRD-036`). The chain is: registry signal → `M-106` classification → **reopen the exact source anchor when the claim becomes load-bearing** → destination gate · `G1-FIND-41` **independence is a property of a PAIR, not a seat** — `§E4b` scenario 5 already found that separate agents are not independent evidence, so a generalized change-governance profile needs `independence_class` on the *relation between holders*, or twenty trifectas are twenty copies of one opinion · `G1-FIND-42` **current-state propagation is now the dominant remaining defect, larger than any modelling defect** — five passes, each writing a correct correction into a new section while leaving the posture box, contract cell, blocker table, STOP receipt or ledger row asserting the superseded version. **A model that is right in one section and wrong in five summaries is wrong.**

**`G1-FIND-38` · `G1-FIND-39` (new, R8 — stated in full at `§E10.2` and `§E10.11.1`).** `G1-FIND-38` **the composition was in §4.1 of this carrier the whole time** — §4.1 separates standing authority context (A) from consequential transition transaction (B) and warns that flattening them makes transition a god-abstraction; four passes then flattened resource governance into transition authority. **`G1-FIND-34` is corrected: not “misapplied by type” but “applied to B while A was never built.”** · `G1-FIND-39` **`SUPERSEDED_BY §E11.C`/`§E11.D`** — the *diagnosis* stands (four 2020s mechanisms shipped as the answer to a 2030 question) but its **verdict is withdrawn**: `current_practice_only` was an overcorrection, replaced by durable mechanism ⟂ current adapter ⟂ frontier residue. *(As written:* Backstage's owner is *“a point of contact if something goes wrong”*; CODEOWNERS auto-requests a human reviewer and any one owner satisfies it; AWS's register is a wiki page; Palantir's approvers are human. **All four assume elastic human review capacity and episodic change — the exact assumption `§E3`/`G1-FIND-06` already flagged across 7 of 10 capabilities — and all four are now labelled `current_practice_only` under R8 §3.9.2.** Meanwhile the corpus had already routed the frontier form: **governance that does not compile to runtime enforcement is theatre** (wave 2 `demand_signal_ownership`, wave 5 `AI_control_runtime_binding`). **The vendor mechanisms are the bean sprout; the registries held the seed.** → `enforcement_bindings[]` is not an observability facet, it is **the compile target**.*)*

**`G1-FIND-33` … `G1-FIND-37` (new, R7 — from the third independent review and the `AMM-C4` amendment; stated in full at `§E9.7`).** `G1-FIND-33` **a search *hit* is not proof of representativeness** — `L-5`'s inverse and more dangerous, because a hit arrives looking like evidence; my pattern omitted `item_id`, matched only an `analysis_nonbinding` child table, and I reported it as the `05` schema · **`G1-FIND-29` RESTATED and verified by enumeration: ZERO of four canonical governance ledger contracts record an accountable owner**, and three record a *different* adjacent relation each (`winning_authority` · `enforced_by` · `required_reviewer`) — the estate partitioned the concept without ever naming the partition · `G1-FIND-34` **`SUPERSEDED_BY G1-FIND-38`** — *(as written: OMNI's authority model answers a question about ACTS; architecture resources need a question about ARTIFACTS)* — §4.6 was misapplied by type, not forgotten, which is why excellent care-authority prose did not transfer and why each pass reads as rediscovery; **and ownership has nothing to attach to until the resource layer exists** · `G1-FIND-35` **the estate derives what R8 Lane 1 already told it to read** — three ownership models authored without opening Backstage, which the plan names *for ownership*; intake-sequencing rule → Build Entry Gate at G2 · `G1-FIND-36` **transfer limit: CODEOWNERS satisfies a required review with ANY listed owner, while `INV-30` requires EVERY affected owner and treats refusal as non-fungible** — CODEOWNERS may route OMNI review and may never express OMNI approval · `G1-FIND-37` **`CORRECTED_BY G1-FIND-40` + `§E11.D` + `§E12.1`** — *(as written: enforcement is machine-verifiable and accountability is not)*, so the first buildable governance mechanism is a divergence check between declared governance and observed platform state.

**`G1-FIND-27` … `G1-FIND-32` (new, R6 — from the second independent review and the `AMM-C3` rerun; stated in full at `§E8.7`).** `G1-FIND-27` **a state derivable from a relation may not also be independently assertable** — `superseded` was both; third form of the estate's oldest defect, after a count outliving its table and a claim outliving its source · `G1-FIND-28` **versioned nodes with timeless edges make `as_of` unanswerable by construction**, so R8 §3.1's snapshot had nothing to freeze; relation assertions become first-class and intervalled, **and they are themselves architecture resources**, so descriptors must describe assertions and snapshots must freeze assertion-revisions · `G1-FIND-29` **OMNI records reviewers and enforcers, not owners** — one of four governance ledgers (`05`) has an `owner` column; `03` none, `06` an enforcer, `08` a reviewer; **the metamodel inherited the confusion by typing the fields it could see** → steward, G2 · `G1-FIND-30` **current placement is evidence of practice, never of policy** — R5 read drift as design; the Artifact Index exists to detect the difference · `G1-FIND-31` **both kinds recorded as having no instance have real instances** (`controlled_vocabulary` = the taxonomy's own fixed category set; `seam_contract` = five live contracts) — R5 under-counted what OMNI has while over-counting what it governs · `G1-FIND-32` **the document that mandates the ten-field passport does not have one** — second Tier-0-adjacent instance after the 05-17 pattern → steward.

**`G1-FIND-19` … `G1-FIND-26` (new, R5 — from the independent review of R4 and the `AMM-C2` rerun; stated in full at `§E7.7`).** `G1-FIND-19` **decomposing the axes does not protect the values** — `AMM-C1` separated thirteen distinctions and then re-collapsed four of them inside individual enums and one table row; guardrail candidate, captured not promoted · `G1-FIND-20` **a model that cannot represent the act validating it is not self-hosted** — `conforms_to`-only made this fixture unrepresentable in its own candidate; fixed by `evaluated_against` · `G1-FIND-21` **scalar authority was recreated on the one operation that changes OMNI's law**, and ranked permissively in the wrong direction · `G1-FIND-22` **under R8's own citation rule, 115 guardrail resources are uncitable** (no version, no effective interval) → steward, G2 · `G1-FIND-23` **non-loosening is better designed away than policed** (FHIR `derivation = constraint`); residue narrowed to prose-rule comparison → Output 6 · `G1-FIND-24` **`binding_time` was missing entirely and belongs to the mechanism, not the rule**; SEI's own report declines the term *“variation point”* · `G1-FIND-25` **AUTOSAR and IHE independently corroborate §3's boundary rule** — internals unspecified, boundary mandatory · `G1-FIND-26` **the Artifact Index needs a key, not a successor**; `admissible_kinds[]` proposed, registry reopened.

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

**`G1-FIND-47` … `G1-FIND-58` (new, Output 2 — each stated in full in `§E13` and indexed here so the register stays the index it exists to be).** **`-47`** human decision *submission* is idempotent, human *judgment* is not — a retried approval must not manufacture consent, and a changed position is a new decision revision (`§E13.4`) `[CAN→4]` · **`-48`** finding identity excludes the subject revision so re-detection cannot inflate correction debt, **with occurrence semantics after verified closure** (`§E13.4`) `[CAN→6]` · **`-49`** no fact of derivation class may be hand-authored in a canonical artifact — **the mechanization of `agent_work_protocol.md:169` and `D0CKPT-GRD-003`, whose intra-artifact specialization predates the `AB-08` failure by five days and did not prevent it** (`§E13.7`) `[CAN→6/G2]` · **`-50`** non-waivable holders are resolved by policy, never by graph adjacency; absence downgrades a coverage posture and never removes an authority (`§E13.8`) `[CAN→3/6]` · **`-51`** invalidation is a predicate over pinned constituents, not a stored flag — a staleness boolean would be `D0CKPT-GRD-003` committed inside its own fix (`§E13.9`) · **`-52`** the loop must be able to **not run**: degraded-mode authority with bounded, expiring, fail-closed verification debt that may never waive a non-derogable right (`§E13.11`) `[CAN→6/G2]` · **`-53`** delegated revocable gate authority ⟂ non-derogable independently held right, duty or authority — both block, only one is unroutable, and ending a delegation is prospective and never erases a recorded refusal (`§E13.12`) `[CAN→§G1-AUTH/3/6]` · **`-54`** observer independence is a property of the observation **set**; correlated detectors are one observation with many timestamps (`§E13.13`) `[CAN→6]` · **`-55`** independence requirements and evidence channels are **policy-declared by consequence class**, not a fungible budget — and they bind to `AB-04`'s already-accepted independence-proof ladder, which is the conformance model seen from the other end (`§E13.14`) `[CAN→6]` · **`-56`** contribution lineage ⟂ credit ⟂ accountable commitment ⟂ legal/professional liability; **OMNI records liability bases and does not invent liability from authorship volume** (`§E13.16`) · **`-57`** reasoning loss is an **addressability** problem, not a storage problem — a catalogued verbatim set (**enumerated and pinned at `ee1fa6e`**, `§E13.17`) and an active depth protocol exist, the **index into internally-produced reasoning does not**, and one arc already hand-built the missing index (`§E13.17`) `[CAN→G2]` · **`-59`** (R1) an observation **event** and a **claim about the target** are different facts — the event survives even when evidence admission fails (`§E13.13`) `[CAN→6]` · **`-60`** (R1) the no-auto-apply rule was bypassable by auto-**creating** obligations; controllers emit **candidates**, and admission requires authority or pre-authorized policy (`§E13.13`) `[CAN→6]` · **`-58`** retention is governed by an **accountability-and-evidence horizon** — contestability is one input of nine; ephemeral cognition may coexist with durable consequence records, and care may not inherit build's retention profile (`§E13.17`) `[CAN→Care/Evidence Plane]`.

### §7.4 — Scope

Nothing minted, closed or promoted. Reactor stays frozen and unpromoted. Care not edited. `C4.4 §R` not edited. R8/R9 **were** normalized — but on the **base branch**, under a separate bounded transaction, not from this proposal (`B-1`, closed). G0 receipt not edited. `06` not written. `comparator_analogy_registry.md` not written — rows proposed (`G1-FIND-08`). C3.8 and Build OS consumed as inputs. Insurance untouched. No checkpoint repoint.

---

## §7.5 — OUTPUT-1 ACCEPTANCE RECEIPT *(landed 2026-08-13 under a bounded `integration` grant)*

| Field | Value |
|---|---|
| **Accepted object** | `AMM-C4.1`'s **structural decomposition** as the G1 **Output-1 proposal** |
| **Accepted proposal head** | **`480f3bbb2a63d81dec4b091d3cd5871e3ddd4e83`** · carrier blob `06eb5505dee5b6e4dd2d06cf4a1877b788de2d08` |
| **Acceptance chain** | independent review disposition `KNOX_OUTPUT1_STRUCTURAL_CORE = ACCEPTED` · `KNOX_AB08_SEMANTIC_DISPOSITION = ACCEPTED_NARROWED` → **operator relay = acceptance by the operator + `architecture_steward` holder** (both seats held by Nick per the G0 receipt) |
| **Seat exercised for this landing** | **`integration`** — a NEW bounded grant; the G0 appointment had **expired** on its own verification (§0.2). **Bound by `INV-30`: the integration holder lands an already-accepted change set and resolves no substantive disagreement by merging.** Expires on verification of the landed commit |
| **Writable scope exercised** | this carrier · `v4_FAI_PRE0_reconciliation_ledger_2026-08-09.md` (AB-08 row + open count) · `doctrine/01_master_corpus_catalog.md` (this carrier's row) · PR #17 title/body. **Nothing else touched** |
| **NOT accepted** | the dossier as doctrine · the enumerated facet **value sets** · precedence · policy composition · dispute lifecycle · operationalization modes · risk acceptance · independence dimensions · non-loosening · effective resolution · conformance algorithms. **All routed to Outputs 3/5/6 and G2 per `§E12.7`.** **G1 as a whole is NOT accepted or closed** |
| **Control plane after landing** | route `9v-ii` **conditional/proposed, unchanged** · checkpoint **unchanged** · no read-graph promotion · no checkpoint repoint · PR #17 **draft** |
| **Remaining G1 blockers** | **`B-8`** source floor · **`B-13`** `AB-01` + C4.4 owner acceptance · **`B-15`** **★ outputs 3–7 plus Output-2 acceptance** (Output 2 authored and proposed, `§E13`). *(`B-3` closed with `AB-08`.)* |

### §7.5.1 — One divergence this landing CREATES and cannot repair, declared rather than left silent

**The instruction did not foresee this, and I am not going to produce the eleventh instance of the defect this arc documented ten times.**

Closing `AB-08` makes **two lines of the Tier-0 checkpoint stale**, and the checkpoint is **explicitly outside this grant's writable scope** — correctly so, since editing accepted gate carriers from inside the transaction they govern is the `B-1` violation shape:

| Surface | Now reads | Should read | Rightful writer |
|---|---|---|---|
| `HANDOFF_2026-08-10…g1_startable.md` §1 Ledger row | *"81 rows, **7 open**"* | **6 open** | checkpoint owner / `architecture_steward` in a checkpoint transaction |
| same, §4 Standing obligations | *"**7 open ledger rows** … AB-08, AB-19, AB-20, AB-22, AB-23, AB-29, AB-31"* | **6 rows; `AB-08` removed** | same |

**And the reason this is worth more than an apology: the carrier's own `G1-FIND-27` predicted it exactly** — *any state derivable from a relation must not also be independently assertable, or the two will drift.* **The checkpoint independently asserts a count that is derivable from the ledger's open rows.** So the acceptance transaction has just produced, on itself, **the cleanest available seed evidence for Output 2's first vertical slice**: one canonical fact changed once, a dependent projection went stale, and the mechanism that should have caught it (`architecture_memory_lint` — *"an automated health-check over the control plane → emits work items"*) **does not exist yet.**

**Owed follow-up, not landed here:** the checkpoint's two derived counts, in a checkpoint transaction by its rightful writer.

#### §7.5.1a — RESOLVED 2026-08-13, in a separate transaction *(state-normalization pass)*

The operator appointed a **bounded state-normalization writer + integration holder** for a correction-only transaction, distinct from the acceptance landing and carrying no semantic reconsideration. The two checkpoint counts above are **repaired**: §1 Ledger now reads **81 rows, 6 open**; §4 Standing obligations now lists **six rows — `AB-19`, `AB-20`, `AB-22`, `AB-23`, `AB-29`, `AB-31`** — and the STOP line reads `ledger_6_rows_open`. The checkpoint **pointer**, title, G0 receipt and Insurance state were **not** touched. The quotations in the table above are **preserved as the historical record of what the landing left stale**.

**One claim in this section was wrong, and its being wrong makes `G1-FIND-27` stronger, not weaker.** *"Nothing else in the estate depends on them"* **understated the blast radius, and the units it implied were wrong too.** Stated correctly: **`AB-08`'s closure made four duplicated assertions stale across three projection surfaces — two checkpoint assertions, one parent-route assertion and one catalog assertion. All four assertions were stale at the acceptance landing.** The normalization **synchronized the two deliberate checkpoint assertions** and **replaced the route and catalog duplications with pointers to the binding ledger** — removing the duplication rather than re-synchronizing it. The count-bearing surfaces that remain are the ledger (canonical) and the checkpoint (a deliberate Tier-0 restatement).

**This does not discharge the mechanism.** `architecture_memory_lint` still does not exist; four hand-found stale assertions across three projection surfaces are precisely the evidence for building it, and the finding stands as Output 2's seed with its blast radius and its units corrected.

## §8 — STOP RECEIPT

| Field | Value |
|---|---|
| Artifact | FAI **G1 operating-model carrier · OUTPUT-2 R1 (`§E13`, `PROPOSED · NOT_ACCEPTED`)** · Output-1 acceptance landed 2026-08-13 · seat `proposal_authoring` · state **`proposed`** · **`B-1` CLOSED 2026-08-11** |
| **OUTPUT 2 · R0 → R1 · 2026-08-13** | **First independent review of the committed proposal: `NOT_ACCEPTED`, one bounded R1 correction pass, no research cycle.** The architecture core was held non-regressible; **six blocking defects and eight material corrections applied.** **The decisive finding is self-inflicted: the proposal authored the anti-self-divergence mechanism and reproduced self-divergence inside its own landing commit** — now frozen as fixture **`AO-SELF-1`** at `ee1fa6e` (`§E13.26`), the intra-artifact single-commit counterpart to `AB-08`'s cross-artifact multi-pass case. **Eight stale surfaces, three of them edited in the same commit as the correction; the review's own list named four categories and live enumeration found eight, because hand-enumerating stale surfaces is the defect class.** Model corrections: the class claim narrowed to **default identity/attempt/retry/dedup/history/terminus only — never validity, authority or correctness** · work class ⟂ record type separated · **proposal submission removed from `Commitment`** (it contradicted *proposal is never commitment*) · work package demoted to execution carrier · `generation_id` split from `publication_id` · **the collapsed no-hindsight rule replaced by four declared temporal modes**, verified against `v4_C4_5` · **`reconciled` no longer satisfiable by an open obligation**, with `accounted_for` and `remediation_active` split out · **non-derogability corrected from *"cannot be ended"* to *"cannot be waived, outvoted, routed around or silently expired by another participant"*** — a model that cannot represent withdrawal of patient consent is unusable in care · observation **event ⟂ evidence admission** with source-issued identity, and correlated observations preserved as separate events in a dependence cluster rather than collapsed · controllers emit **candidates**, closing the auto-obligation bypass · foreign RBAC/Build-OS/Runtime events referenced, not re-owned · verification-debt expiry made coherent for irreversible effects · stable actor identity split from the attribution tuple · two conformance moments distinguished · acceptance verbs removed from a `NOT_ACCEPTED` object. Two findings added (`G1-FIND-59`, `-60`). One file changed |
| **OUTPUT 2 · 2026-08-13** | **`§E13` authored — the architecture-operations loop, `PROPOSED · NOT_ACCEPTED`.** Entered through a **two-reviewer pass on an entry receipt rather than on authored architecture** — relief `NOT_READY` → veteran adjudication with a continuity/provenance addendum → relief `READY_TO_AUTHOR_WITH_EXACT_CORRECTIONS`. **Four blockers and ten material corrections were applied BEFORE a line was authored**, and three corrected me: receiver-only effectiveness was an overcorrection (**joint derivation**, `§E13.18`); the *"independence budget with substitutable forms"* was too loose (**policy-declared requirements by consequence class** bound to `AB-04`'s ladder, `§E13.14`); and holding `ledger:287` false until a G2 checker existed **inverted the gate sequence** (**frozen fixture + prompt repair**, `§E13.19`). **The root error withdrawn: *"one transaction over nine stations"* — `F-13`.** Replaced by **one correlated operation over five work classes** whose identity, idempotency, retry, recovery and authority semantics are *derived from class membership* rather than specified nine times. Twelve findings (`G1-FIND-47`…`-58`), one falsifier (`F-13`), one gap (`G-20`). Lane-3 `M-106` run for Output 2 — **ten rows, residual novelty narrowed to four items** (`§E13.21`). **Two subagent claims killed by live verification and recorded as negative controls**, one of them a fabricated numeric defect produced *inside the analysis written to detect fabricated numeric defects*. One file changed |
| ACCEPTANCE LANDING · 2026-08-13 | **Bounded `integration` grant, a NEW appointment — the G0 one had expired on its own verification (§0.2).** Landed: Output 1 → `ACCEPTED_AS_G1_PROPOSAL · 1_OF_8_COMPLETE` · `AB-08` → **`adopted_narrowed`** in the binding ledger with the accepted head recorded · `B-3` and `G-08` closed · ledger open count 7→6 · catalog row synchronized · the two authorized non-semantic normalizations (proof-table header, and the removal of the manually maintained candidate/reviewer count). **Zero semantic change.** **And one divergence the instruction did not foresee is DECLARED rather than left silent (`§7.5.1`): closing `AB-08` makes two Tier-0 checkpoint counts stale, the checkpoint is correctly outside this grant, and `G1-FIND-27` predicted exactly this — a derived count independently asserted will drift.** |
| R8.5 → R8.5b | **Four current-surface normalizations, zero new semantics — three named by the relief reviewer, one by the veteran, all four mine.** ① *“five of six states”* asserted a six-state model **one line above the table that denies it**. ② *“Rejected, disputed and withdrawn edges”* reintroduced dispute as an edge state **one paragraph after declaring it a separate resource**. ③ **`not_determined` was claimed as §4.8 reuse and is not in §4.8** — provenance mislabel number **five**; corrected to typed absence (`absent`/`unknown`) which the resolver **projects** as a derived `not_determined`, never stores. ④ **the veteran-only catch: `accepted \| rejected \| revoked \| conditional` mixed governance outcome, disposition and applicability condition inside the fix for a mixed value set** — and the local decision must pin **the exact origin assertion REVISION**, or historical resolution cannot say which version was admitted. **Nothing added: one implication recorded (origin supersession must be observable to admitters, `[CAN→3/5]`) after checking it is a consequence, not a facet.** One file changed |
| R8.4 → R8.5 | **Both reviewers held R8.4; both were right, and the worst error was in my own headline finding.** Four surgical corrections, nothing minted. ① **Global unambiguity ≠ global sovereignty** — R8.4 collapsed a property of the *reference* with a property of *authority*, attacked a position the relief review never held, and dropped the real requirement. ② **Provenance mislabel number four withdrawn** — *“adds nothing”* is false because Identity marks cross-namespace identity `OPEN/deferred`; the laws are inherited, the specialization is a candidate transfer. ③ **`G1-FIND-46` was structurally wrong: `governance_decision_state` is a SCALAR facet, so calling it “namespace-scoped” hid a second object in the reader's context** — the malformed-scalar defect, committed in the pass meant to end it. Corrected to **issuer-scoped origin state ⟂ a separate `applicability_decision` by the receiving namespace**, reusing the existing family. ④ **`disputed` is not a state value** — as a mutually exclusive state, filing a dispute would deactivate accepted architecture; it is an orthogonal challenge resource, and only a stay/revocation/supersession/non-admission changes force. Plus: the resolver hook restated as **necessary, not sufficient**, and the digest precondition strengthened to descriptor + stable constituents + canonical manifest + pinned canonicalization. **Two additions of my own, both reusing estate law: a peer operator's assertion is the ingress shape's THIRD instance, and absence of an admission decision is **typed absence** (§4.8 `absent`/`unknown`), which the resolver may **project** as a derived `not_determined` — never a stored state and never `denied`, which requires an attributed decision.** One file changed |
| R8.3 → R8.4 | **Quadfecta pass: a fresh relief reviewer at 100k feet plus the veteran reviewer, both conditionally accepting the core.** Two acceptance proofs discharged **in place**, capped, no appended section. **Proof 1 — the relief review asked for globally unique identity; the veteran review corrected it and the correction protects `T0-14`: OMNI issuing global architecture-resource identities would make OMNI the cross-operator identity authority, which operator-neutrality forbids.** Verified in the estate: Identity keeps *one canonical row **per namespace*** and marks cross-namespace **`OPEN/deferred`** rather than minting an MPI; `§R.16` supplies `publish → admit → use-under-grant → revoke`. **Cross-namespace resource identity is therefore INHERITED, not invented.** **Proof 2 — answered as asked: five of six assertion states are already covered by existing facets; `disputed` is a value-set gap `[CAN→3]`; one structural hook added — the resolver admits only `accepted` + in-interval assertions and EXCLUDES rather than deletes the rest.** **Composing the two proofs yields the invariant neither review stated: `governance_decision_state` is NAMESPACE-SCOPED (`G1-FIND-46`)** — a mirror imports another operator's edges as **candidate**, not as locally binding. **Three binding carries recorded, one with a precondition neither review named:** logical-revision digests are uncomputable until the descriptor layer exists, because a resource whose constituents are prose clauses in a shared carrier has no canonical serialization. One file changed |
| R8.2 → R8.3 | **In-place acceptance preparation — no appended model section, per the review.** R8.2 violated its own `F-12` by shipping `risk_acceptance_decision`, `derogability` and `independence_assessment` inside a pass labelled micro-correction; **all three are now demoted to routed carries.** Four substantive corrections, each verified first: `derogability` provenance `[INH]`→`[CAN→3/6]` *(third time I labelled my own invention inherited)* · **the risk-acceptance forbidden edge was wrong in a way that would have made recording known noncompliance with a patient right structurally impossible** — corrected to the `waives\|satisfies\|overrides\|discharges\|suspends` predicate · attributable judgment splits into **procedural completion ⟂ substantive conformance**, which the System Map's three verification gates already keep apart · independence carried, not settled. Plus **`§E12.7` the explicit acceptance boundary** (decomposition is core, value sets are not) and **`§E12.8` the eight-function Output-1 Lane-3 checksum** — ten rows, **no material core change**, and **two more of my findings' novelty claims defeated**. One file changed |
| R8.1 → R8.2 | **Diff-bounded micro-correction; no new architecture beyond making R8.1's own constructions coherent.** The `§E11.B` tally was **wrong again** — eight rows summarized as seven, `F-06` inside the section written to correct `F-06` (`G1-FIND-43`: **a closeout that introduces new architecture is not a closeout**). `operationalization` made **plural**; **`accepted_residual_risk` extracted** into an authority-bearing decision **with its own review-trigger operationalization**, plus a **`derogability` facet** so the non-waiver rule is checkable rather than prose; *“cannot compile”* → *“cannot be exhausted by”*; the mode vocabulary relabelled `[CAN→6]`; *“inert”* → *“operationally unimplemented and nonconforming, still binding”*; `accountable_human_judgment` → **`required_attributable_judgment`, defined**; independence scoped to a **claim**, not held by a pair; source reopening extended to **registered counterevidence**; **six propagation surfaces** repaired; the `AB-08` fifth criterion narrowed to the *cannot-be-expressed-through-facets* test. One file changed |
| R8 → R8.1 | **Bounded closeout; no `AMM-C5`, no new fixture, no new external research.** The review's diagnosis accepted in full: **serial source capture** — whichever source was opened most recently became the altitude. **The self-indictment: R8 promoted a `PARTIAL`, `NEW` candidate guardrail from an ex-FDA speaker inside a propose-only workbench into architecture law (*“enforcement_bindings[] is the compile target”*) — `GRD-036` promotion-by-vibes, in the pass that criticized vendor capture.** Corrected: Lane-3 status scoped · the seven registry matches reclassified (one exact, four sharpen, **one adjacent that R8 conflated**, one tension) · the four vendor verdicts replaced by durable/adapter/residue · **enforcement absolutism replaced by a ten-mode `operationalization_binding`, because `INV-30`'s obligations are precisely the ones that cannot compile** · the bootstrap governance profile recorded with `independence_class` on the *pair* · **eight stale surfaces repaired** · `AB-08` normalized to the five-function answer. One file changed |
| R7 → R8 | **Fourth review; `AMM-C4` converging but not accepted; nine bounded corrections + three traces + the obligation this arc never ran.** `AMM-C4.1` (`§E10`): the acts/artifacts dichotomy replaced by **§4.1's own A⟂B composition** · `approval_policy_refs[]` → derived `effective_approval_condition` (the next god object, killed) · raw cardinality `0..1` ⟂ a conformance rule · integration authority moved to the **transaction** · **governance bindings made effective-dated — I had recreated timeless edges one section after fixing them** · `enforcement_bindings[]` scoped to obligations · the meta-kernel **sealed** against semantic escape · the intake rule narrowed. **And the operator's charge, discharged: R8 §3.9.1's mandatory Lane-3 `M-106` EXISTS-AS — never run by this arc — recovers seven already-routed ownership concepts, FAILS `G1-FIND-37`'s novelty claim against wave 2, and §3.9.2's frontier test labels all four vendor mechanisms `current_practice_only`.** `AB-08`'s semantic answer becomes `READY_FOR_OPERATOR_STEWARD_CLOSURE`. Output 2 still not started; one file changed |
| R6 → R7 | **Third independent review; `AMM-C3` not accepted; it also found a FACTUAL error I made and missed.** The `05` owner column I cited sits in an `analysis_nonbinding` Insurance child table, not the canonical `## Ledger Contract` — **my search pattern omitted `item_id` and I reported a sample as the schema** (`§E9.0`, `F-09`). **Withdrawn: `G1-FIND-29` as worded, H-1's estate `PASS`, all three R6 `PASS`es, the 3/11/11 aggregate.** Restated stronger by enumeration: **zero of four** canonical ledger contracts record an accountable owner. **`AMM-C4`** installs the **eight-relation resource-governance grammar** (steward ⟂ scoped semantic authorities ⟂ maintainers ⟂ approval policy ⟂ review requirements ⟂ integration authority ⟂ enforcement ⟂ holder register), **terminates the assertion/descriptor recursion** R6 opened, and repairs **four more value collapses**. **Four official mechanism sources finally consumed — Backstage, CODEOWNERS/rulesets, AWS `OPS02-BP01`, Palantir branch security — all named in R8 Lane 1 or by review, none adopted.** Eight focused governance cases; **no replacement aggregate.** Output 2 still not started; one file changed |
| R5 → R6 | **Second independent review; `AMM-C2` not accepted; `AMM-C3` + consistent fixture units + three predeclared holdouts in response.** Receipt at **`§E8.0`** — **12 review items, all 12 accepted** (one with a value-set refinement), **2 defects added that the review did not find**. `AMM-C3` (`§E8.1`): every facet answers one question · four-level identity · **relation assertions first-class and intervalled, which is what makes `as_of` answerable at all** · typed value-object endpoints declared · `part_of` split into five relations · `0..n` cardinalities. Evidence split into **three tables, one unit each, never summed** (`§E8.3`). Ownership decomposed into four sub-facts (`§E8.4`). **Three holdouts predeclared before running** (`§E8.5`). **R5's `16/16`, its `3/6/7`, its owner test, its resource→resource claim and its Artifact-Index evidence are all withdrawn.** No new external source opened. **Output 2 still not started; one file changed** |
| R4 → R5 | **Independent review of R4 was NOT accepted; `AMM-C2` + full rerun in response.** Receipt of every disposition — accepted / refined / declined — at **`§E7.0`** (13 review items, **11 accepted**, 2 declined with reasons, **2 defects added that the review did not find**). `AMM-C2` at `§E7.1`: `authority_level` dissolved into four facets with **no ordering anywhere** · lifecycle into four · naming into two · three-tier identity (resource / revision / descriptor) · semantic relations normalized to resource→resource · `evaluated_against` added · `binding_time` added · FHIR derivation kinds. Artifact Index reconciled as a **placement policy keyed by `primary_kind`** (`§E7.2`). **Full rerun of all cases and controls** (`§E7.3`–`§E7.5`). **R4's two aggregates, its Output-1 completion claim and its `AB-08` disposition are all withdrawn.** Four targeted mechanism sources read (SEI · FHIR · IHE · AUTOSAR), no adoption. **Output 2 still not started; one file changed** |
| R3 → R4 | **Output 1 executed and nothing else.** `AMM-C1` defined (`§E6.5`) · the twelve-case fixture run (`§E6.6`) · the two `G1-FIND-10` representability cases run (`§E6.7`) · nine negative controls run (`§E6.8`) · eight findings (`§E6.9`) · four bounded amendments + one fixture-protocol amendment + the rerun (`§E6.10`) · aggregates and the `AB-08` disposition (`§E6.11`) · source posture (`§E6.12`). **Three R3 claims corrected in place by direct inspection:** `§E6.1` defect 3's `plane` guess · `§E6.2` item 5 on patterns · `§E-note B`'s single `viewpoint_or_view` axis. **Output 2 not started; no clean acceptance carrier authored; no other file touched** |
| R2 → R3 | evidence restored (§E) · Build OS read · "three planes" withdrawn · four external correspondences downgraded · third-party rule corrected · blockers sorted by gate · G4 fixtures added |
| Required G1 evidence | **§E1** 40-row semantic receipt · **§E2** nine tool dispositions · **§E3** ten-row frontier matrix · **§E4/E4b** five traces + eleven scenarios · **§E6.5–§E6.12** the Output-1 metamodel, fixture matrix, negative controls, amendments and rerun. **Fenced against compression** |
| Exploratory, NOT a result | **§E6–§E6.4** the R3 `AB-08` classification probe — **invalid as a fixture**; conclusions withdrawn; retained as evidence of what was examined. **Superseded as the Output-1 answer by `§E6.5`–`§E6.12`, which is the run of the `§E6.3` specification** |
| **Output 1 — the only output advanced** | **`ACCEPTED_AS_G1_PROPOSAL · 1_OF_8_COMPLETE`** — accepted 2026-08-13 at proposal head `480f3bbb2a63d81dec4b091d3cd5871e3ddd4e83`, landed `a21f95a0964d7a991c0291186cb395a6f2da0072`, receipt `§7.5`, boundary `§E12.7`. **Review and candidate history → `§E6`–`§E12`.** **R6's aggregate and all three of its `PASS`es remain withdrawn.** Published instead: the resource-governance grammar, the meta-kernel termination rule, four repaired collapses, and a **eight-case per-resource governance enumeration**. **One countable statement survives and it is the load-bearing one: `resource_steward` is declared for ZERO of seven real architecture resources, and of eight governance relations OMNI declares at most three for any resource — never the same three.** *(Publishing no number at all was declined: silence is how a defect becomes atmosphere — `F-04`)* |
| **The two dimensions, not collapsed** | The split is permanent and load-bearing: a synthetic exemplar proves representability and nothing else. **★ R8.1 — no current estate aggregate is published.** R6's `3 of 25` was withdrawn in R7 together with all three of its `PASS`es and is preserved only inside the R6 record. The current published governance evidence is the **eight-case enumeration** at `§E10` — `resource_steward` declared for **zero of seven** real resources |
| **Why this keeps happening — the current diagnosis** | **★ R8.1 — the acts/artifacts framing is WITHDRAWN.** Corrected model: **standing resource governance (A) composes with the consequential resource-change transaction (B)** — the composition §4.1 of this carrier already specified and four passes flattened (`§E10.2`). **Verified estate fact that survives:** **zero of four** canonical governance ledger contracts record an accountable owner, and the three that record anything each record a *different* adjacent relation — `05` `winning_authority`, `06` `enforced_by`, `08` `required_reviewer`, `03` nothing. **And the dominant remaining defect is now procedural, not conceptual:** current-state propagation (`G1-FIND-42`) |
| Process failure — **historical** | the `§E6` probe was **substantive metamodel design performed while `B-1` was still open.** Preserved as evidence; **not compliant G1 execution**, and `B-1`'s later closure does not convert it into one (`§E6.4`) |
| Routed forward, NOT a G1 output | **§E5** ten G4 adversarial fixtures — a G4 proof plan carried under G4's existing tests |
| Ledger | 40 rows verdicted. **ONE closed: `AB-08` → `adopted_narrowed` in the binding ledger 2026-08-13** at accepted head `480f3bb`; the ledger's open count moved **7 → 6** (`AB-19`, `AB-20`, `AB-22`, `AB-23`, `AB-29`, `AB-31` remain). **★ The checkpoint's two derived counts, plus route `9v` and the ledger's catalog row, were repaired 2026-08-13 in a separate state-normalization transaction — `§7.5.1a`.** `AB-08`'s semantic answer was `INDEPENDENTLY_REVIEWED__READY_FOR_OPERATOR_STEWARD_CLOSURE` (`§E10.13`) — the first substantive result of this arc an independent reviewer endorsed on the merits — and the **operator + `architecture_steward` acceptance transaction then closed the row**, which authorship could never have done. The surviving substantive conclusion — **adopt neither “17 classes” nor “5 tiers”** — went unchallenged for three passes and is now the ledger's disposition. **The placement predicate `[CAN→3]` and relation bitemporality `[CAN→3]` were NOT settled by that closure; both are carried to Output 3** (`§E12.7`) |
| Operator questions | **Q1** — the rule already existed in Build OS `09`; Care §19's U/C/A supplies the mechanism **as a frozen nonbinding candidate**, and applying it past Care is **this gate's synthesis** (`G-16`). The build-down/care-external binary is **withdrawn**; the rule is **per-act origin resolution**, and authority-origin direction is a **candidate descriptor field, not a profile axis**. **Q2** — internal-model equivalence not required, **boundary conformance mandatory**; GCE is the **home**, but the contract content **does not exist** (thesis §C paused), so the ten obligations are **new synthesis** (`G-18`) |
| Boot | **RESOLVED** — normalized on the base and verified there, 2026-08-11 (§0.2) |
| **Checkpoint state-language — UNRESOLVED interpretation, recorded not settled** | **Checkpoint token `g1_startable` currently functions as the open-G1 gate label while the Next-action field carries output-level progression. Any new gate-state vocabulary requires a separate governed decision.** Nothing is minted here and no token is proposed |
| Minted | **nothing.** No route, gate, checkpoint, handoff, registry, lane, FWREG row, guardrail or artifact. `AMM-C1`'s field and value names are **fixture vocabulary under test**, not installed schema — installation is G2's transaction against R8 §3.1 |
| External mechanisms | **probes only — 42010 · SEI · FHIR · IHE · AUTOSAR · Backstage · CODEOWNERS/rulesets · AWS `OPS02-BP01` · Palantir. Nothing adopted.** **★ R8: all four ownership sources are now labelled `current_practice_only` under R8 §3.9.2's frontier test** — each assumes elastic human review capacity, the assumption `§E3` already flagged across 7 of 10 capabilities. **And Lane 3 finally ran (`§E10.11`): the corpus had already routed org-ownership-distinct-from-runtime-authorization (wave 2), governance-must-compile-to-enforcement (waves 2 and 5), ownership-with-expiry-and-rotation (wave 3), refusal-as-committed-decision (wave 2), and harness-sovereignty-vs-domain-ownership (wave 4).** **`G1-FIND-35`: R8 Lane 1 named Backstage *for ownership* and three ownership models were authored without opening it** — an intake-sequencing failure, not a reasoning one. **`G1-FIND-36` is a transfer LIMIT, not a mechanism: CODEOWNERS satisfies with ANY owner while `INV-30` requires EVERY affected owner.** Three R5 transfer claims narrowed at `§E8.6`: FHIR non-loosening is **validator-checkable against a pinned base**, not self-enforcing · the **2005 SEI report** declines *“variation point”*, which does not generalize to SEI · `binding_time` placement is **OMNI synthesis, relabelled `[CAN→3/5]`**. **Nothing adopted, no conformance owed or claimed to any of them, no standards programme opened, no map asserted to be a 42010 view.** Highest-value transfers: FHIR's `derivation = constraint` makes **non-loosening structural rather than policed** · SEI's own report **declines the term *“variation point”*** and supplies the missing `binding_time` facet · **AUTOSAR and IHE independently corroborate §3's boundary rule** · IHE makes multi-profile composition an **obligation-union** and conformance an **attributed Integration Statement**, corroborating `AB-10` |
| Verdict | **`NOT_CONVERGED__CARRIER_AND_G1_SCOPE__OUTPUT_1_ACCEPTED_AS_G1_PROPOSAL__OUTPUT_2_PROPOSED_NOT_ACCEPTED__AB-08_CLOSED_adopted_narrowed__OUTPUTS_3_TO_7_AND_SOURCE_FLOOR_INCOMPLETE`** *(the verdict is **carrier- and G1-scope, not Output-1 scope** — Output 1 is accepted as a proposal; R4's completion label stays withdrawn; the source floor and model boundaries remain incomplete exactly as R3 stated)* |
| G1 blockers | **three, and still NOT peers.** **`B-3` is CLOSED 2026-08-13** — `AB-08` landed `adopted_narrowed` in the binding ledger and `AMM-C4.1` was accepted as a G1 proposal (`§7.5`). Its historical reading stands as written: **running a fixture is not disposing a ledger row**, R4's proposed closure was withdrawn under review, and closure came from the acceptance transaction rather than from authorship. The estate governance failures are separately routed and were **not** closure criteria · **B-8** source floor incl. unread **Lane-2** carriers — **unchanged**; the narrow `AB-08` floor was read, the floor was not · **B-13** `AB-01` generalized form + C4.4 owner acceptance — **unchanged** · **B-15 NARROWED 2026-08-13** — *outputs 3–7 plus Output 2's acceptance*. **Output 2 is authored and proposed (`§E13`); proposing an output discharges nothing**, and `B-15` closes only when outputs 2–7 are accepted. *(B-2 → open item with owner; B-6 → G2/G4)* |
| **Owed after Output 2 — declared, not silently carried** | **The `ledger:287` correction is owed PROMPTLY and is deliberately NOT in this transaction** (`§E13.19` step ③) — it belongs to the ledger's rightful writer under its own bounded grant, and the frozen fixture at `50431e32851086acbbd9f4534e2cec7e7f4b5f49` preserves the before-state so the repair costs no evidence. **Platform and Accountability were consulted, not read at full depth** — carried under `B-8`. **The four `AB-08` carrier status blocks remain typed-ambiguity cases**, undecided until the assertion-vs-quotation rule exists; they are not counted as positives and not repaired. **Output 2's catalog row and route `9v-ii` are untouched** — repointing belongs to the accepting transaction, exactly as it did for Output 1 (`§E6.11.4`) |
| Owed and NOT done — declared | **`B-8` is unchanged and one Lane-3 search is not Lane 3 consumed** — R8 §3.9.1 requires the EXISTS-AS check *for every operations capability*; it has now run for **two** (ownership, and Output 2's ten-row operations sweep at `§E13.21`). **Catalog state → `§7.5` / `§7.5.1a`; no pending catalog action remains for Output 1.** **Route `9v-ii` needs NOTHING** — it carries path, trigger, read rule, authority, lifecycle and promotion condition and **no content description**; R4's claim that it needed repointing is **withdrawn**, and acting on it would have pushed Output-1 narrative into a routing surface |
| Next | **Resolve from the current Tier-0 checkpoint. This carrier does not own or maintain program-progression state.** |

## §9 — Handoff

**No separate `HANDOFF_*` file** — a third current-state description beside the checkpoint §1 and §8 is the maintained-duplicate failure that reopened `C-11`/`C-12`.

**Changed in Output-2 R1 (2026-08-13):** **this carrier only.** Correction-only pass on the reviewed head `ee1fa6e05b4313e49aa361e75a2dea11b491de18` (blob `3b6b49f43a84a481084f7f1ea28831f4fa455c30`). Six blockers and eight material corrections applied in place with `★ CORRECTED IN R1` markers and **nothing deleted**; `§E13.26` added carrying the **`AO-SELF-1`** self-application fixture. All eight stale Output-2 surfaces reconciled: `§G1-CONTRACT` row 2 · `§6.1` · `§6.2` `B-15` · `§8` *"Remaining G1 blockers"* · `§7.3` register · `§8` artifact and Output-2 rows · `§9` · the final STOP token. **Every hand-maintained count replaced by an enumeration pinned to `ee1fa6e`.** No catalog, read-graph, checkpoint, ledger, registry, FWREG, contract, code, workflow or new artifact. **`ledger:287` still deliberately excluded.**

**Changed in the Output-2 pass R0 (2026-08-13):** **this carrier only.** `§E13` appended — the Output-2 proposal. `§G1-CONTRACT` row 2 repointed from `§6.3` to `§E13` with its acceptance condition **corrected** (the old wording *"specified as a transaction"* was itself `F-13`); the honest-reading count restated as `1 complete + 1 proposed + 5 incomplete + 1 partial = 8`; `F-13`, `G-20` and `G1-FIND-47`…`-58` registered; `B-15` narrowed; the STOP receipt and this handoff repointed. **No catalog edit, no read-graph edit, no checkpoint, no ledger edit, no registry, no FWREG, no evidence-lane write, no contract, no code, no workflow, no new artifact, no new branch.** The `ledger:287` repair is **deliberately excluded** and owed separately (`§E13.19`).

**Changed in R8.2:** **this carrier only.** `§E12` appended — the `§E11.B` tally corrected, operationalization made plural with residual-risk acceptance extracted into its own authority-bearing decision and a `derogability` facet, independence scoped to a claim, source reopening extended to counterevidence, six propagation surfaces repaired, the `AB-08` fifth criterion narrowed. No new research, fixture, registry, route, catalog edit, gate, checkpoint, branch or PR.

**Changed in R8.1:** **this carrier only.** `§E11` appended — serial source capture accepted as the diagnosis; Lane-3 status scoped; the registry matches reclassified; the four vendor verdicts replaced by durable/adapter/residue; enforcement absolutism withdrawn; the bootstrap governance profile recorded; eight stale surfaces repaired; `AB-08` normalized.

**Changed in R8:** **this carrier only** — same scope as every prior pass. `§E10` appended; R7's block marked in place with `★ CORRECTED IN R8` markers and **nothing deleted**; `§G1-CONTRACT`, the `AB-08` row, `B-3`, `G-08`, `§7.1`–`§7.3`, the STOP receipt and this handoff repointed. No catalog edit, no read-graph edit, no checkpoint, no ledger, no registry, no evidence-lane write, no new artifact, branch or PR.

**Changed in R7:** **this carrier only** — same scope as every prior pass. `§E9` appended; R6's block marked in place with `★ CORRECTED IN R7` markers and **nothing deleted**; `§G1-CONTRACT`, the `AB-08` row, `B-3`, `G-08`, `§7.1`–`§7.3`, the STOP receipt and this handoff repointed. No catalog edit, no read-graph edit, no checkpoint, no ledger, no registry, no FWREG, no evidence lane, no System or Surface Map, no Care, no domain contract, no new artifact, branch or PR.

**Changed in R6:** **this carrier only** — same scope as R4 and R5. `§E8` appended; R5's block marked in place with `★ CORRECTED IN R6` markers and **nothing deleted**; `§G1-CONTRACT`, the `AB-08` ledger row, `B-3`, `G-08`, `§7.1`–`§7.3`, the STOP receipt and this handoff repointed. **No new external source opened.** No catalog edit, no read-graph edit, no checkpoint, no R8/R9, no ledger, no registry, no FWREG, no evidence lane, no System or Surface Map, no Care, no domain contract, no new artifact, branch or PR.

**Changed in R5:** **this carrier only** — same scope as R4. `§E7` appended; R4's block marked in place with **fourteen** `★ CORRECTED IN R5` markers plus a scoping banner at `§E6.5`, and **nothing deleted**; `§G1-CONTRACT`, the `AB-08` ledger row, `B-3`, `G-08`, `§7.1`–`§7.3`, the STOP receipt and this handoff repointed. No catalog edit, **no read-graph edit** (route `9v-ii` needs none), no checkpoint, no R8/R9, no ledger, no comparator registry, no FWREG, no evidence lane, no System or Surface Map, no Care, no domain contract, no new artifact, branch or PR.

**Changed in R4:** **this carrier only.** No catalog row, no read-graph edit, no checkpoint, no R8/R9, no ledger, no comparator registry, no FWREG, no evidence lane, no System or Surface Map, no Care, no domain contract, no new artifact, no new branch or PR. The catalog and route omissions are **declared** at `§8` and `§E6.11.4`, not silent.
*(R3 changed: this carrier · catalog row · read-graph `9v-ii`.)*

**Verified in R4, against the live working tree at the head this pass commits:** Boot Freshness Check **PASS** (`AGENTS.md` pointer = read-graph Tier-0 #15 = `HANDOFF_2026-08-10_foundational_architecture_g1_startable.md`, and the checkpoint's §1 banner agrees) · branch head on entry `a3569376`, **identical to the last independently verified head — no advance to reconcile** · System Map and Surface Map read in full, `D0THES-DEC-033`'s seven-plane taxonomy confirmed and `§E6.1` defect 3's parenthetical falsified · `coherent_omni_architecture_pattern_2026-05-17.md` confirmed a **real** pattern at read-graph Tier-0 #14 **with no passport** · **15 of 15** files in `contracts/` declare `Document type: domain_contract`, a value absent from the ten fixed categories · `06`'s carrier declares `Status: Skeleton (Phase 0)` while hosting `severity: critical` guardrails · repository-wide search for `DO NOT EDIT` · `@generated` · `autogenerated` returns **zero** artifacts · `.github/CODEOWNERS` read in full — `lib/auth/`, `scripts/`, `contracts/`, `doctrine/` and both vNext maps **unprotected**, while `lib/safety/` and the *demoted legacy* map are protected · `package.json` exposes only `dev`/`build`/`start`/`lint`/`typecheck` · `.github/workflows/` holds exactly one workflow · `ingestion/regulatory_compliance_evidence/` holds exactly one file.
*(R3 verified: `check-checkpoint-pointer.mjs` pass · R2's evidence deletion confirmed by search (`AB-02`, `AB-04`, `AB-07`, `AB-14`, `INV-03`, `INV-18`, `INV-26`, JSON Schema, CODEOWNERS, Backstage, OpenRewrite all absent from R2 while their totals remained) · R8/R9 staleness confirmed · Build OS `09`/`10` read, `11` status read · `02_authority_routing_map.md` confirmed `Skeleton (Phase 0)`.)*

**Load order:** `AGENTS.md` → checkpoint → route `9v` (plan R8 → charter R9 → ledger R5) → `9v-ii` this carrier. Gate sequence **only** in plan §5; closure conditions **only** in the ledger's `blocking_scope`. **Inside this carrier, read `§G1-CONTRACT` → `.b` → `.c` first. For Output 2 the path is `§E13` in order — `§E13.0` (what the first draft got wrong and why) → `§E13.1`–`§E13.4` (thesis, classes, identities) → the rest as needed → `§E13.23` (the boundary) before treating anything in it as settled. For Output 1 the CURRENT path is `§E10.2`–`§E10.10` (the `AMM-C4.1` core) → `§E11` (closeout) → `§E12` (micro-correction).** **`§E6`–`§E6.4` (the probe), `§E6.5`–`§E6.12` (R4), `§E7` (R5), `§E8` (R6) and `§E9` (R7) are evidence history — open them for provenance or contradiction recovery, never as the result.** **For external/enterprise correspondence, C3.8 G2/G4 is the required read. For build-side operating model, Build OS `09`/`10` — at the maturity they declare, not as settled truth.**

**Stop condition:** superseded when the steward and affected domain owners accept, amend or reject.

**STOP: `g1_carrier_OUTPUT_2_R1 · OUTPUT_1_ACCEPTED_AS_G1_PROPOSAL__1_OF_8_COMPLETE · OUTPUT_2_PROPOSED_NOT_ACCEPTED_§E13 · R1_CORRECTION_APPLIED_6_BLOCKERS_8_MATERIAL · AB-08_adopted_narrowed · B-3_and_G-08_CLOSED · B-8_B-13_remaining · B-15_NARROWED_to_outputs_3_to_7_plus_output_2_acceptance · AB-08_FIXTURE_FROZEN_AT_50431e32851086acbbd9f4534e2cec7e7f4b5f49 · AO-SELF-1_FIXTURE_FROZEN_AT_ee1fa6e05b4313e49aa361e75a2dea11b491de18_blob_3b6b49f43a84a481084f7f1ea28831f4fa455c30 · ledger_287_repair_OWED_SEPARATELY_NOT_IN_THIS_TRANSACTION · AB-08_ambiguity_set_ENUMERATED_BY_IDENTITY_five_sites_two_tokens_UNDECIDED · verbatim_set_ENUMERATED_AND_PINNED_no_hand_count_survives · platform_and_accountability_FULL_DEPTH_READ_REQUIRED_BEFORE_ACCEPTANCE · FO-6_ANSWERED_CLOSES_ON_ACCEPTANCE · catalog_and_route_9v-ii_UNTOUCHED_belong_to_the_accepting_transaction · PR_17_draft · G1_INCOMPLETE · outputs_3_to_7_not_started · no_standing_integration_grant · NOT_SELF_ACCEPTED`**
