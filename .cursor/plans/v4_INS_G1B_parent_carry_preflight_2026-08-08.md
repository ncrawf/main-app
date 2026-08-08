# PREFLIGHT — INS-G1B Parent Carry, Gate-2 Preparation, and Phase-A State Reconciliation

Document type: `handoff_or_readiness_gate`
Authority: `derived_nonbinding`
Status: `review_ready_pending_knox_and_nick · provisional_pending_parent_integration · carry_not_executed · integrator_transfer_not_yet_authorized · shared_surfaces_untouched · gate2_not_started`
Domain(s): `insurance_payer_oop` · `d6_commerce` · `care_operating_model` · `federation` · `clinical_memory` · `cns_coordination` · `accountability_architecture` · `architecture_governance` · `portfolio_sequencing`
Lifecycle role: read-only preflight and exact write plan for the parent integration transaction
Source-of-truth relationship: consumes current `main` plus PR #4/#5/#6 exact review objects; **authorizes nothing**; the child source objects and primary governing sources control over any shorthand in this document
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2` **PROPOSED** — the parent integration transaction owns registration
Review gate: `user_knox_required`
Parent package: `PRESPINE-PHASEA`
Relay key: `INS-G1B-CARRY-PREFLIGHT`

> **Passport completion note (C5-style provisional child output).** Catalog registration and read-graph disposition for this artifact are **PROPOSED in §14 and land only during the authorized parent integration transaction.** This is not a claim that the Agent Work Protocol §5 New Artifact Completion Rule has already been discharged. Under AWP §2.1 `C5`, a partition's artifact may be pushed `review_ready_pending_integrator` with its passport and proposed routing bundle and complete under §5 at the parent transaction. That is the posture here.

**Hard stop:** no carry execution before Knox preflight adjudication, Nick authorization, and explicit `PRESPINE-PHASEA-INTEGRATOR` transfer.

---

## §0 — DECISION REQUEST AND HARD STOP

**This document executes nothing.** It creates one file on one branch. It merges nothing, lands nothing, mutates no shared control-plane surface, moves no checkpoint, and starts no Gate-2 work. Every proof below was produced in a **disposable scratch worktree that has been destroyed**.

After reviewing this preflight, Knox and Nick are asked to authorize exactly six things:

| # | Authorization requested | Who must grant it | Blocking? |
|---|---|---|---|
| **A1** | **Parent assembly by MERGE**, not exact-object materialization (§5, proof in §5.2) | Knox adjudication + Nick | yes |
| **A2** | **Explicit transfer of `PRESPINE-PHASEA-INTEGRATOR`** from the checkpoint §4.2 holder to the executing thread, using the §8 receipt | **Nick only** | yes — hard precondition |
| **A3** | **Retroactive recording of the AWP §2.1 common-base exception** for PR #5/#6, labelled as retroactive (§4) | Knox + Nick | yes |
| **A4** | The **exact write matrix** in §10 — every shared surface the carry may touch, and nothing else | Knox + Nick | yes |
| **A5** | The **Tier-3 guardrail disposition** in §16 — Option A (update `D0TIER0-GRD-004`), not a new row, not `GRD-043` | Knox adjudication | yes |
| **A6** | The **Gate-2 brief contract** in §12 as the single substantive payload artifact | Knox + Nick | yes |

**Nothing in this document is self-authorizing.** In particular, `A2` cannot be inferred from Knox's approval of this preflight; the integrator role has a named holder in a committed surface and only Nick can move it.

---

## §1 — REVIEW OBJECT POSTURE AND SOURCE POSTURE

### §1.1 Exact refs — all verified live in this run

| Ref | Value | Verified |
|---|---|---|
| Repository | `ncrawf/main-app` | ✅ |
| **CONTROL PLANE** | `main @ d592e402b779aaedc1f137189bf51cd2b5ca678d` | ✅ exact; re-fetched, **has not moved** |
| **GATE 0 — PR #4** | head `2aabed770eda9ec8164efaf0c5626816b85ca224` · branch `analysis/insurance-payer-oop-g0` | ✅ open · draft · `MERGEABLE` |
| **GATE 1A — PR #5** | head `671d120fd79c7b55325cf6e998646c02ead45f0f` · branch `cursor/ins-g1a-preservation-caa7` | ✅ open · draft · `MERGEABLE` |
| **GATE 1B — PR #6** | head `78a9b2805e63dbc8f7f721da462bae95a7ce4846` · branch `cursor/ins-g1b-ownership-reconciliation` | ✅ open · draft · `MERGEABLE` · `mergeStateStatus: UNSTABLE` (Vercel only — §17) |
| **This preflight** | branch `planning/ins-g1b-carry-preflight`, based at `d592e40` | this object |

> **★ MALFORMED-REF CORRECTION.** A prior relay recorded PR #5 as `671d120fd79c7f721da462bae95a7ce4846`. That token is **35 characters** and is a **splice** of PR #5's prefix (`671d120fd79c7`) with PR #6's tail (`f721da462bae95a7ce4846`). **The correct PR #5 head is `671d120fd79c7b55325cf6e998646c02ead45f0f`.** Do not propagate the spliced token into any receipt.

### §1.2 Child source objects and blobs — recovered from Git, not from prose

| PR | Path | Source blob |
|---|---|---|
| #4 | `.cursor/plans/v4_insurance_payer_oop_gate0_carrier_2026-08-04.md` | `9f9358574367d14cd21e9cddadbe8e0af612286d` |
| #5 | `.cursor/plans/v4_INS_G1A_regime_independent_care_financing_physics_protocol_2026-08-07.md` | `8876a0d879175ed5b126958f8774dfb82c982ec1` |
| #5 | `.cursor/plans/v4_INS_G1A_phase_a_independent_derivation_verbatim_2026-08-07.md` | `d242162c53040e9b6ed08ba2ba9baba66ece3b4e` |
| #5 | `.cursor/plans/v4_INS_G1A_phase_b_pressure_test_verbatim_2026-08-07.md` | `03295b506d705ba5f4f9de647a424c1e6049c597` |
| #5 | `.cursor/plans/v4_INS_G1A_adjudication_and_terminus_2026-08-07.md` | `6b42d2572736d4d5999cb795eb42cd0880453745` |
| #5 | `.cursor/plans/HANDOFF_2026-08-07_ins_g1a_preserved_gate1b_ready.md` | `70b5e0df04e9b7cd50373e6b90829396feed75dd` |
| #6 | `.cursor/plans/v4_INS_G1B_financing_ownership_and_existing_estate_reconciliation_2026-08-07.md` | `57e5bb5e4da54784c90d22616793c953b67ed776` |

### §1.3 Source posture — strict depth labels

**READ FULLY.** `agent_work_protocol.md` §2.1 (lines 66–178, the whole durable-work contract) + §6 build-entry + §8 preservation-tier table + §8 Checkpoint Closeout Rule · the Gate-1b carrier at R9 in full (1,252 lines, sequentially, in the preceding transaction) · checkpoint §4.2 launch-receipt table and the `INS-G0-MIXEDFIN` lane card · `INS-HAZ-COVSURF` clauses 1–5 and the four activation landings (Gate-0 carrier lines 931–950) · the five guardrail rows named in §16 · `vercel.json`.

**CONSULTED (exact passages verified in place).** `AGENTS.md` boot table + Operating References · read-graph Tier-0 #15 · `08_open_review_queue.md` Queue Governance Lock + rows `REV-159/160/185/193/201` · `05_supersession_conflict_ledger.md` Closure Policy Lock · `03_decision_extraction_ledger.md` Decision Row Contract + status vocabulary in use · `future_work_registry.md` rows `FWREG-009/017/018` + the AWP §6 Future Work Registry Contract · the Gate-1a handoff §0 lane table and §6.0 Review Object Posture · `clinical_memory_assertion_contract.md` §5/§5.1.

**SEARCHED.** `R8 (this)`/`R9 (this)` · the ten R9 sweep terms · `PRESPINE-PHASEA-INTEGRATOR` · `lane_content_base_sha` · `INS-HAZ-COVSURF` · guardrail IDs `D0THES-GRD-043`, `D0CKPT-GRD-003`, `D0PRESS-GRD-001`, `D0TIER0-GRD-004`, `D0TIER0-GRD-005`.

**NOT INSPECTED — named.** The four reconnaissance reports (raw text never supplied to any Opus context — §13) · the Vercel deployment log and the project's plan tier (§17) · off-repo `~/.cursor/plans/` (**does not exist in this environment**; per `D0OPER-DEC-004` this preflight relies on the in-repo `AGENTS.md` + read-graph #15 pointers, which agree) · the Gate-0 and Gate-1a carriers in full at this run (read in prior transactions; **the Gate-0 carrier was read in full three times during Gate 1b, the Gate-1a packet in full at Gate 1b's first action** — but not re-read line-by-line in this preflight) · `v4_C4_5`/`C4.6`/`C3.6C` bodies beyond the anchors already cited in the Gate-1b carrier.

**LIVE REPOSITORY VERIFICATION: yes.** Every SHA, blob, branch state, PR state, merge result, ancestry assertion, guardrail row and ledger row in this document was produced by executing Git or `gh` against the live repository in this run. **No claim here rests on a chat transcript or on recollection.**

---

## §2 — ACCEPTED GATE-1B ARCHITECTURE KERNEL

**Preserved at depth deliberately.** A future integrator must be able to act from this section without reconstructing the architecture out of ledger rows. **This is a preservation restatement of an accepted result, not a new derivation, and it reopens nothing.** Where this summary and the Gate-1b carrier differ, **the carrier controls.**

### §2.1 The two-axis verdict

> **AXIS 1 — TRUTH OWNERSHIP: `NO_SHARED_FINANCING_TRUTH_SUBSTRATE`**
> No universal shared financing truth substrate, payer-named domain, or universal financing truth owner is justified. Authoritative truths are **source-native**, held by existing OMNI owners and external principals, exchanged through the ratified generic **Governed Capability Exchange**.
>
> **AXIS 2 — OPERATING COMPOSITION: `FIRST_CLASS_MIXED_FINANCING_OPERATING_PROFILE REQUIRED`**
> Over source-native owners and generic GCE, OMNI requires a **first-class composed operating profile**. **It owns no source truth and is still a first-class product architecture.**

**The three distinctions the split exists to protect:** no domain ≠ no product · no truth owner ≠ no assessment/work lifecycle · no universal position lifecycle ≠ no coherent end-to-end operating assembly.

### §2.2 What the operating profile MAY own · what it may NEVER own

| MAY own (derived, versioned, non-canonical) | May NEVER own |
|---|---|
| derived mixed-financing assessment + its rule version, inputs, validity, invalidation, recomputation, audience policy | any **source position** |
| explanation of known · predicted · conditional · disputed · unresolved, with `unknown` first-class | any **universal commit authority** |
| attention, deadline, queue and work-ownership state | **write-back** into payer, Care, pharmacy or D6 truth |
| exception visibility and operative posture while unresolved | the **clinical recommendation** or therapeutic-equivalence conclusion |
| correction propagation and redress coordination | the **payer determination** |
| person-portable non-captive longitudinal view | **pharmacy execution truth** |
| proof, lineage, receipts | **patient consent**, agreements, external commitments |

Ten anti-shadow acceptance criteria (Gate-2 output 11) must be **positively demonstrated**, and if the profile cannot satisfy all ten, **Axis 2 is wrong and the answer reverts to seams and noncanonical projections only.**

### §2.3 F1–F7 dispositions

| Law | Verdict | New universal lifecycle? | Bounded work owed |
|---|---|---|---|
| **F1** care does not entail a financing lifecycle | `INHERITED` — D6 §8.1/§8.2 contracted; Care per-plane capture | No | symmetric Care-side statement at C5 |
| **F2** positions not universally substitutable | `CONFIG/POLICY guardrail` **+** `EXISTING OWNER specialization` (D6) | No | **`financing_arrangement`, principal-agnostic** |
| **F3** unclosed advancement creates contemporaneous incidence | `GENERAL RESOURCE-INCIDENCE PHYSICS; no universal owner or representation form proven` — **actor-decomposed, 7 slices** | **Unproven** | operator slice → OPECON; patient/credit → D6; five others native |
| **F4** later allocation cannot rewrite historical incidence | `INHERITED` (preservation); distinguishability travels with F3 per actor | No | none |
| **F5** composed support is derived and source-preserving | `SEAM/PROJECTION ONLY — composition extension required` — **normative** | No | **composition rules + assessment-lifecycle owner (A-Q12)** |
| **F6** financing reversal is asymmetric with care | `EXISTING OWNER — specialization` | No | symmetric Care-side statement at C5 |
| **F7** care-time reliance must remain attributable | `EXISTING OWNER / SEAM EXTENSION — explicit REV-184/Care/CNS home required` — **normative** | No | **four-level reliance + material-effect recording** |

**Four laws require regime-specific or bounded extensions inside existing owners. One is general physics with no universal owner and an unresolved representation form. F5 and F7 remain explicitly normative constitutional commitments.**

### §2.4 The three firewall laws (recovered lineage — seven labels, three laws; not minted here)

- **LAW 1 — `payment_care_firewall`.** *Financial or coverage state may **explicitly constrain execution feasibility**, but must **never silently author, erase, or misrepresent** clinical indication, recommendation, order, consent, or historical rationale.* The operative words are **explicitly** and **silently**. Status: `covered-doctrine`; primitive EXISTS at D6 §8.1.
- **LAW 2 — economic-influence separation.** Economic pressure on the recommendation surface from **any** interested principal — payer · PBM · sponsor · manufacturer · lender · referral source · operator · provider organisation · **OMNI itself** — must not present funding preference as clinical appropriateness or therapeutic equivalence. Must be **structural and auditable, not policy**. Status: `REV-185` **open**; enforcement mechanism + audit spec **OWED**.
- **LAW 3 — feasibility legibility.** The **patient's** economic reality MAY bound the feasible set but must remain **separately sourced and recorded**. Status: normative candidate; no name; home not explicit (F7's disposition).

**Row P's prescribed `elevation` of the economics/value/incentive axis is not executed. Insurance is its third dependent arc.**

### §2.5 Both Nick fixtures, and the friction variant

- **`NICK-FIXTURE-VENDOR-FINANCING-01`** — manufacturer/loyalty/platform-originated patient financing. Produces **no new physics**: F2 strengthened, F6 exercised hard, two enumerations must extend, one D6 `financing_arrangement` lifecycle required, capacity separation mandatory where the operator is also creditor.
- **`NICK-FIXTURE-PAYER-CONSTRAINED-THERAPY-01`** — payer-constrained therapy selection, formulary alternative, clinical re-resolution. **The decisive joint test of all three firewall laws in one transaction.** An instance of C4.6 §4's existing typed multi-principal resolution protocol — **not new resolution physics.** Ten non-flattenable outcomes; **outcome 5** (clinically acceptable but less-preferred alternative chosen for access/affordability, recorded with an honest `resource/access-driven` rationale and never mislabelled clinically optimal) is load-bearing.
- **Administrative-friction variant** — exhaustion is **already 2026 physics**, not a 2035 novelty. Authority · leverage · influence · burden incidence · default power · material care effect must never collapse. Named anti-shadow failure: *the profile FAILS if it preserves formal authority while allowing unbounded administrative burden to become hidden de facto control.*

### §2.6 Task-D reliance and falsification boundary

**Two-level maturity, unchanged: `READY_AS_GATE1B_OWNERSHIP_INPUT` · `NOT_READY_AS_FINAL_INSURANCE_COMPOSITION_INPUT`.**

Task-D **MUST NOT** rely on: F1–F7 as settled spine laws · F5/F7 as binding · H-N2 as closed · F3 as a proven lifecycle or as operator-only · agreement/party-position as solved · Accountability/GRR as ratified or named · coverage identity as decided · the §8.3 continuity function as a proven moat · any payer-proposed alternative as clinically equivalent · a **contracted or implemented** relation-shaped equivalence representation, authority envelope or recommit seam (A-Q14).

Task-D **MUST remain free to falsify**: the correction-law argument · clean actor decomposition of F3 · sufficiency of the generic seam · GCE transfer from pharmacy to financing · that six of seven inheritances survive contracting · **that Axis 2 is real and buildable** · that "care-financing physics" is a useful architectural layer at all · **the neutrality-as-gravity claim**.

### §2.7 Explicit non-decisions carried forward

No contract or schema · no migration · no `clinical_equivalence_assertion` · no universal Agreement object · no fourth authoritative graph · no promoted economics axis · no completed C4.5 sequencing answer · no executed comparator result · **no proven moat** · no payer-named domain · no rename of any concept, file, lane or route.

### §2.8 Under-pressured arrivals (must survive the carry unweakened)

Seven arrivals were reached by internal reasoning over the estate's own artifacts with **no external comparator pressure and no fixture execution**: the five typing axes · three graph roles (A-Q15) · `source_authority_map` as the strongest candidate (A-Q16) · Sourcing selection sufficiency (A-Q18) · `T-21` answering non-linear sequencing (A-Q17) · the two-axis verdict itself · the neutrality posture. **No fixture in this carrier has been executed. Both named fixtures are specifications of tests, not results.** Gate-0's L1 limit still governs: *"no fixture has ever been run. Every claim here is paper."*

---

## §3 — CHILD-OBJECT LINEAGE AND WORKING-PACKET PROGRESSION

### §3.1 The actual progression

| Stage | Lane / relay key | Object(s) | Working state | Committed-state representation |
|---|---|---|---|---|
| **Gate 0** | `INS-G0-MIXEDFIN` | Gate-0 carrier (1,245 lines) | review-ready; PR #4 open draft | **present** in checkpoint §4.2 lane table |
| **Gate 1a** | `INS-G1A-PHYSICS` / preservation | protocol · Phase-A raw · Phase-B raw · adjudication · handoff (5 files) | completed + preserved; PR #5 open draft | **absent** |
| **Gate 1b** | `INS-G1B-OWNERSHIP` | ownership-reconciliation carrier at R9 | analysis accepted pending carry; PR #6 open draft | **absent** |
| **Gate 2** | `INS-G2-OPERATING-COMPOSITION-AND-SUFFICIENCY` | brief — **not yet written** | not started | **absent** |

### §3.2 Classification of PR #5 and PR #6 — **A, with a bounding qualifier**

**Verdict: (A) sequential child lanes added to `PRESPINE-PHASEA` — specifically, sequential gates *within* the existing `INS-G0-MIXEDFIN` partition, NOT new sibling partitions of the five-lane Phase-A inventory.**

**Evidence for lane status (A over C).** The Gate-1a handoff §0 states *"Two lanes exist"* and carries a lane table with branch, head, contents and state per lane. The Gate-1b carrier's line 13 self-identifies: *"Lane: `INS-G1B-OWNERSHIP` · Parent arc: `INS-G0-MIXEDFIN`."* Both produce a durable output object that must survive replacement-context consumption — the AWP §2.1 continuity trigger. These are lanes on the evidence, not mere review surfaces.

**Evidence for package membership (A over B).** AWP §2.1: *"Lanes belong to one package when they serve the same bounded parent outcome and their closure must be coordinated or reconciled."* All three serve one bounded outcome (Insurance ownership resolution feeding Gate 2 and ultimately Task-D), and their closure must be reconciled — they land together or the arc is incoherent. They are therefore package members, and `C1`–`C6` apply: protected surfaces are read-only to them, and the integrator is the authorized shared-surface writer.

**Why the qualifier is load-bearing.** The five Phase-A lanes are *parallel input-state partitions*, each producing one output object. Gate-1a and Gate-1b are **depth inside one partition**, not two additional partitions. The Insurance partition turned out to require three gates rather than one carrier.

**Implementation consequence — this is the answer to "how does the lane table change."** The checkpoint §4.2 lane table gets **ONE row updated with gate lineage**, not two new lane rows. Phase A remains a **five-partition** inventory; the `INS-G0-MIXEDFIN` row gains a gate-lineage sub-structure (Gate 0 → 1a → 1b → 2) with per-gate branch, head, output object and state. Adding two sibling rows would misrepresent Phase A as seven partitions and would inflate the parent-close criteria.

**What this classification does NOT license.** It does not retroactively make the branch creation contemporaneously authorized (§4). It does not expand the Phase-A parent-close criteria. It does not make Gate 2 a Phase-A lane — Gate 2 is downstream of the Insurance partition's completion and is sequenced by the operator.

---

## §4 — BASE-POLICY RECONCILIATION

**Label for this state: `disclosed progression + retroactively normalized exception`.** Explicitly **not** "silent violation ignored" and explicitly **not** "fully compliant contemporaneous exception."

### §4.1 The facts, each verified

1. **The pinned common base is `f70ff3cbf007b9bd68bedec7c9dfb9365e9e6e05`**, recorded in checkpoint §4.2's `lane_content_base_sha` row, which is by design the single owning source for that value.
2. **PR #4 is correctly rooted at that pinned base.** `git merge-base d592e40 origin/analysis/insurance-payer-oop-g0` = `f70ff3c` exactly. Diffed from its own base, PR #4 contributes **one added file, 1,245 insertions, ZERO deletions**.
3. **PR #4's apparent 575 deletions against `main` are a base-distance artifact, not proposed deletions.** `main` is **7 commits** ahead of `f70ff3c`, and the 16 files involved are exactly the doctrine/control-plane surfaces the AWP-rewrite commits touched. The checkpoint names this condition directly: *"`main` sits an unfixed number of commits ahead; that distance is **normal, not drift**, and is not grounds to stop."*
4. **PR #5 and PR #6 both have merge-base `d592e402b779aaedc1f137189bf51cd2b5ca678d`** — current `main`, not the pinned content base. Both are additive-only: 5 files / 3,347 insertions / 0 deletions, and 1 file / 1,252 insertions / 0 deletions respectively.
5. **Their bases were disclosed contemporaneously.** The Gate-1a handoff §6.0 records that *"checkpoint machinery still names `INS-G0-MIXEDFIN` as the single active Phase-A lane"* while adding a second lane, and warns that *"a fresh context that reads only `main` will see Gate 0 as the frontier and may 'correct away' the Gate-1a work."* The Gate-1b carrier §0.3 records that architecture reads used a pinned worktree at `d592e40`. **The divergence was stated, not hidden.**
6. **The AWP §2.1 exception was not recorded in explicit exception language.** §2.1's Common-base clause permits a partition to begin from an approved successor state, but the permission is conditioned on the exception being **explicit**. Disclosure of a base is not the same act as recording a base exception. **No such record exists.**
7. **The `INS-G0-MIXEDFIN` lane card says: branch `analysis/insurance-payer-oop-g0` — "already prepared; do not create a new branch and do not re-pin."** Two further branches now exist.

### §4.2 Why the exception is justified on its merits

The two-reference boot law is the reason. Gate-1a and Gate-1b are **later sequential work that consumed accepted predecessor outputs** (Gate 0's carrier, then Gate 1a's packet) **and had to reason against current control-plane state.** Gate-1b's central task was reconciling candidate laws against *the actual committed estate* — including the AWP rewrite, the guardrail digest and the ledgers as they now stand. Resolving those from the frozen content base would have produced an analysis of a superseded control plane. §2.1 anticipates exactly this: a partition may legitimately begin *"from an approved successor state."* `d592e40` is that approved successor state, and `main` has not moved since.

**Both branches are additive-only and touched zero shared surfaces**, so the base difference created no collision and no divergence in protected state.

### §4.3 What the parent transaction must record

- The exception is recorded **retroactively**, and the receipt must say the word *retroactively*.
- It must state that PR #4 was compliant with the pin and PR #5/#6 were not, **and that this was disclosed at the time**.
- It must **not** rewrite the history to suggest the exception was documented from the beginning.
- It must record the going-forward rule: further Insurance gates branch from the **then-current approved successor state**, and the lane card's "do not create a new branch" is superseded **for this partition only**, by explicit record, with the gate-lineage table in §4.2 of the checkpoint becoming the authority for which branch carries which gate.

---

## §5 — PARENT ASSEMBLY STRATEGY

### §5.1 Decision

# `MERGE_BASED_PARENT_ASSEMBLY_RECOMMENDED`

### §5.2 The proof — run in this session, in a disposable scratch worktree, now destroyed

Scratch worktree created at a temporary path from `d592e402b779aaedc1f137189bf51cd2b5ca678d`, three `--no-ff` merges applied in lineage order, then removed. **The merge-commit SHAs are not reproducible** (merge commits embed timestamps); **the tree and blob results are.** Verify by re-running, not by trusting the commit SHAs below.

```
# merge bases
git merge-base d592e40 origin/analysis/insurance-payer-oop-g0        -> f70ff3cbf007b9bd68bedec7c9dfb9365e9e6e05
git merge-base d592e40 origin/cursor/ins-g1a-preservation-caa7        -> d592e402b779aaedc1f137189bf51cd2b5ca678d
git merge-base d592e40 origin/cursor/ins-g1b-ownership-reconciliation -> d592e402b779aaedc1f137189bf51cd2b5ca678d

# sequential --no-ff merges in lineage order (all clean, zero conflicts)
git merge --no-ff origin/analysis/insurance-payer-oop-g0         -> acb3b33
git merge --no-ff origin/cursor/ins-g1a-preservation-caa7        -> 9da8514
git merge --no-ff origin/cursor/ins-g1b-ownership-reconciliation -> 8a9e24c   (scratch head 8a9e24cc9a2dd9c121b482be47c351b6e7bc2b2e)
```

**Result 1 — all three merges clean, no conflicts, no manual resolution required.**

**Result 2 — ancestry preserved. `git merge-base --is-ancestor <X> <scratch>` returned true for all four:**

```
2aabed770eda9ec8164efaf0c5626816b85ca224   (PR #4)   ANCESTOR
671d120fd79c7b55325cf6e998646c02ead45f0f   (PR #5)   ANCESTOR
78a9b2805e63dbc8f7f721da462bae95a7ce4846   (PR #6)   ANCESTOR
d592e402b779aaedc1f137189bf51cd2b5ca678d   (main)    ANCESTOR
```

**Result 3 — `git diff --name-status d592e40 <scratch>`: seven files, every one `A` (added). No `D`, no `M`, no `R`.**

**Result 4 — `git diff --numstat`: ZERO deletions on every file.**

```
158  0  .cursor/plans/HANDOFF_2026-08-07_ins_g1a_preserved_gate1b_ready.md
171  0  .cursor/plans/v4_INS_G1A_adjudication_and_terminus_2026-08-07.md
1112 0  .cursor/plans/v4_INS_G1A_phase_a_independent_derivation_verbatim_2026-08-07.md
1008 0  .cursor/plans/v4_INS_G1A_phase_b_pressure_test_verbatim_2026-08-07.md
898  0  .cursor/plans/v4_INS_G1A_regime_independent_care_financing_physics_protocol_2026-08-07.md
1252 0  .cursor/plans/v4_INS_G1B_financing_ownership_and_existing_estate_reconciliation_2026-08-07.md
1245 0  .cursor/plans/v4_insurance_payer_oop_gate0_carrier_2026-08-04.md
--------------------------------------------------------------------------------
7 files changed, 5844 insertions(+), 0 deletions(-)
```

**Result 5 — every child artifact byte-exact.** `git rev-parse <child-head>:<path>` equals `git rev-parse <scratch>:<path>` for all seven files, matching §1.2 exactly. Gate-1b landed as `57e5bb5e…`, Gate-0 as `9f935857…`.

**Result 6 — current-`main` control-plane blobs unchanged.** Verified INTACT: `AGENTS.md` · `agent_work_protocol.md` · `04_manifest_read_graph.md` · `01_master_corpus_catalog.md` · `03_decision_extraction_ledger.md` · `05_supersession_conflict_ledger.md` · `06_guardrail_antipattern_digest.md` · `08_open_review_queue.md` · `future_work_registry.md` · the current checkpoint. **The 7 doctrine commits survive merge intact.**

> **★ CORRECTION OF RECORD.** A prior Opus relay asserted that merging PR #4 into `main` *"would revert 7 doctrine commits."* **That was FALSE and is retracted.** It conflated a two-tree comparison (`git diff main branch`, which reports what would change to make `main`'s tree equal the branch's tree) with what a three-way merge applies. A three-way merge computes from the merge base and combines both descendants; PR #4 only adds a file relative to `f70ff3c`, so nothing is reverted. **Result 6 proves this empirically.** Knox identified the error correctly.

### §5.3 The comparison methods, and which is safe for what

| Method | Valid use | Never use for |
|---|---|---|
| **three-dot / merge-base comparison** (`git diff $(git merge-base A B) B`) | identifying a PR's **actual contribution** | — |
| **two-tree comparison** (`git diff main branch`) | diagnosing **estate divergence** between two trees | **NEVER as an applyable patch** |
| reset / force-move tip / tree replacement / applying a two-dot diff as a patch | **nothing in this transaction** | destructive — prohibited by §18 |

### §5.4 Why Option A is presumptive

Merge preserves **DAG ancestry**, **child commit history**, and **byte identity** simultaneously, and still permits the Exact Object and Assembly Manifest in §9. Exact-object materialization preserves byte identity only, with provenance reduced to a manifest a future reader must trust rather than an object graph they can verify. **Given a passing ancestry-preserving merge proof, materialization is strictly weaker on provenance.**

### §5.5 OPTION B — exact-object materialization (retained fallback)

Fall back **only** if: remote state changed and a re-run merge proof no longer passes · branch protection or repository mechanics make merge ancestry undesirable · or the exact reviewed content cannot be preserved through merge. If Option B is chosen, §6's disposition language changes and the manifest must **distinguish byte preservation from ancestry preservation** rather than implying both.

### §5.6 Execution order for the authorized transaction

1. Create parent branch from **exact current `main`** (re-verify it has not moved; **STOP** if it has).
2. Re-run the §5.2 proof on a scratch branch. **STOP** on any deviation.
3. Merge `--no-ff` in lineage order: **PR #4 → PR #5 → PR #6.**
4. Apply the single §7 normalization commit.
5. Add the Gate-2 brief.
6. Apply the §10 shared-surface transaction as **one closeout commit** (AWP §8 Checkpoint Closeout Rule).
7. Run the §18 pre-landing proof.
8. Submit the complete parent branch for Knox/Nick acceptance. **Do not land without it.**

---

## §6 — CHILD PR FINAL DISPOSITION

**Under Option A (recommended), the correct disposition is `integrated_via_parent_merge` — NOT `superseded_by_parent_assembly`.**

The proof in §5.2 Result 2 shows all three child heads become genuine ancestors of the assembled result. Once the parent lands on `main`, those commits are ancestors of `main`. Labelling them "superseded" would be factually wrong and would discard the ancestry the merge route exists to preserve.

| PR | Disposition under Option A | Timing | Required pointer |
|---|---|---|---|
| **#4** | `integrated_via_parent_merge` | after parent lands | parent commit + landed path + blob `9f935857…` (byte-exact) |
| **#5** | `integrated_via_parent_merge` | after parent lands | parent commit + five landed paths + blobs per §1.2 (all byte-exact) |
| **#6** | `integrated_via_parent_merge` **+ normalized** | after parent lands | parent commit + landed path + **pre-normalization blob `57e5bb5e…`** and **post-normalization blob** (recorded in §9 at execution) |

- If GitHub automatically marks them merged, **retain that truth** — do not overwrite it with a supersession label.
- If they remain open after parent landing, close them **only then**, with the exact parent commit and landed-object pointer.
- **Child PR review history is preserved in all cases** — the PR conversations, review rounds and commit series remain addressable at their own URLs and heads, and the manifest cites those heads.

---

## §7 — GATE-1B NORMALIZATION PATCH

**Do not push R9.1. Do not create R10. Freeze PR #6 at R9.**

Rationale for freezing rather than patching in place: a new head would invalidate the exact R9 review object Knox has already byte-checked, require another verification cycle, and extend the very revision chain whose central lesson is to stop extending it.

**One parent-assembly normalization commit, applied after child integration:**

```
R8 (this)   ->   R8 (`1bc2a93`)
```

Located in the Gate-1b carrier's revision-history paragraph (line 15), where `R8 (this)` and `R9 (this)` currently both appear. **This is a self-reference defect introduced during R9**, which appended its own "(this)" without normalizing R8's — instance nine of the propagation class the carrier itself documents, and direct evidence for §16.

**Manifest fields the normalization commit must record:**

| Field | Value |
|---|---|
| PR #6 source head | `78a9b2805e63dbc8f7f721da462bae95a7ce4846` |
| PR #6 source blob | `57e5bb5e4da54784c90d22616793c953b67ed776` |
| pre-normalization parent blob | must equal `57e5bb5e…` (proves byte-exact import before normalization) |
| post-normalization parent blob | recorded at execution |
| exact diff | one line, one substring: `R8 (this)` → ``R8 (`1bc2a93`)`` |
| reason | self-reference collision introduced at R9; two revisions both reading "(this)" |
| semantic classification | **`no_semantic_architecture_change`** |

**No other normalization is authorized in this commit.** If any further defect is found in a child artifact during assembly, it is **reported, not silently fixed**.

---

## §8 — INTEGRATOR-ROLE TRANSFER RECEIPT

### §8.1 Why this is a hard precondition

Checkpoint §4.2 records the role with a **named current holder**, not as an abstraction:

| Field | Committed value |
|---|---|
| Integrator role key | `PRESPINE-PHASEA-INTEGRATOR` |
| Current holder | `THREAD LOCK PRESPINE-PHASEA-INTEGRATOR \| seat=OPUS \| visible="Pre-spine · Phase-A integration"` |
| Transfer posture | **explicit transfer + freshness/collision check + shared-surface ownership receipt REQUIRED before any replacement holder acts** |

AWP §2.1's integrator-transfer law requires the carrier to record: role key · current holder · explicit transfer · freshness/collision check on assumption · shared-surface ownership receipt · parent blockers while vacant.

**Nine surfaces are owned exclusively by the role and are read-only to all lanes:** `AGENTS.md` · the current checkpoint · `04_manifest_read_graph.md` · `01_master_corpus_catalog.md` · `03_decision_extraction_ledger.md` · `06_guardrail_antipattern_digest.md` · `08_open_review_queue.md` · `future_work_registry.md` · the off-repo controlling-plan banner. **The carry writes exactly those.**

**This preflight required no transfer** — it writes only its own provisional output object, which is within lane writable scope under `L4`. **Carry execution cannot begin without the transfer.**

### §8.2 Exact transfer receipt template — to be completed by Nick, then made durable

```
PRESPINE-PHASEA-INTEGRATOR — ROLE TRANSFER RECEIPT

parent_key:                     PRESPINE-PHASEA
integrator_role_key:            PRESPINE-PHASEA-INTEGRATOR
outgoing_holder:                THREAD LOCK PRESPINE-PHASEA-INTEGRATOR | seat=OPUS |
                                visible="Pre-spine · Phase-A integration"   (checkpoint §4.2)
incoming_holder:                <exact THREAD LOCK string of the executing thread>
operator_authorization:         Nick, explicit — <date/time, exact words>
current_control_plane_ref:      <main SHA at assumption; must equal the base the carry uses>
child_source_refs:              PR #4 2aabed770eda9ec8164efaf0c5626816b85ca224
                                PR #5 671d120fd79c7b55325cf6e998646c02ead45f0f
                                PR #6 78a9b2805e63dbc8f7f721da462bae95a7ce4846
parent_integration_branch:      <exact branch name>
protected_shared_surfaces:      the nine surfaces enumerated in §8.1
other_writers_in_flight:        <exact — including any uncommitted work or concurrent lane>
freshness_check:                main unmoved since <SHA>? Y/N · checkpoint §4.2 unchanged? Y/N ·
                                child heads unchanged? Y/N · §5.2 merge proof re-run and passing? Y/N
collision_scan:                 <result — any other branch or agent touching the nine surfaces>
shared_surface_ownership_ack:   incoming holder acknowledges exclusive write ownership of the nine
                                surfaces for the duration of the transaction
parent_blockers_at_assumption:  A1 assembly · A3 base exception · A4 write matrix · A5 guardrail ·
                                A6 Gate-2 contract  (all from §0)
first_permitted_writable_object: <exact path — the parent branch, nothing else>
stop_on_mismatch:               ANY freshness or collision check returning N => STOP, do not write,
                                report to Nick + Knox
```

### §8.3 Durability requirement

**The transfer must not survive only as "Nick said yes in chat."** It may be *authorized* conversationally, but the parent transaction must make it durable in the owning state surface — the checkpoint §4.2 integrator rows — reconciled under the §2.1 Single-source law into **one** owning row, referenced by pointer elsewhere.

### §8.4 Independence note, for Nick's judgment rather than as a blocker

If the executing thread is the same context that authored the Gate-1b R9 output, it becomes **the lane writer integrating its own lane output.** `C2` permits this (where an integrator role exists, it is the authorized writer), so this is not a rule violation. But it collapses producer and integrator, and the Gate-1b carrier's own §16 statement 2 warns that Opus-and-Knox agreement is not corroboration. **Flagged for Nick's decision, not asserted as a defect.**

---

## §9 — EXACT OBJECT AND ASSEMBLY MANIFEST

**Under Option A this manifest supplements Git DAG provenance; it does not replace it.** Destination blobs are recorded at execution.

| Child PR | Source branch | Source head | Source path | Source blob | Authority | Maturity | Assembly method | Destination path | Byte-exact | Normalized | Final disposition | Consumer routes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| #4 | `analysis/insurance-payer-oop-g0` | `2aabed77…` | `v4_insurance_payer_oop_gate0_carrier_2026-08-04.md` | `9f935857…` | `analysis_nonbinding` | Gate-0 carrier, `not_promoted` | `--no-ff` merge (1st) | same | ✅ yes | no | `integrated_via_parent_merge` | Insurance cold-entry route; `INS-HAZ-COVSURF`; FWREG-017 |
| #5 | `cursor/ins-g1a-preservation-caa7` | `671d120f…` | `v4_INS_G1A_regime_independent_care_financing_physics_protocol_2026-08-07.md` | `8876a0d8…` | `analysis_nonbinding` | protocol, complete | `--no-ff` merge (2nd) | same | ✅ yes | no | `integrated_via_parent_merge` | Insurance route step 2 |
| #5 | " | " | `v4_INS_G1A_phase_a_independent_derivation_verbatim_2026-08-07.md` | `d242162c…` | `analysis_nonbinding` | **raw, verbatim — source** | " | same | ✅ yes | no | " | cited by Gate-1b §1; **raw wins over derivative** |
| #5 | " | " | `v4_INS_G1A_phase_b_pressure_test_verbatim_2026-08-07.md` | `03295b50…` | `analysis_nonbinding` | **raw, verbatim — source of F1–F7** | " | same | ✅ yes | no | " | Gate-1b §1.1 anchor; **controls over the adjudication** |
| #5 | " | " | `v4_INS_G1A_adjudication_and_terminus_2026-08-07.md` | `6b42d257…` | `analysis_nonbinding` | derivative interpretation | " | same | ✅ yes | no | " | derivative — loses precision on F1/F3/F7 |
| #5 | " | " | `HANDOFF_2026-08-07_ins_g1a_preserved_gate1b_ready.md` | `70b5e0df…` | `derived_nonbinding` | handoff | " | same | ✅ yes | no | " | lane-model evidence for §3 |
| #6 | `cursor/ins-g1b-ownership-reconciliation` | `78a9b280…` | `v4_INS_G1B_financing_ownership_and_existing_estate_reconciliation_2026-08-07.md` | `57e5bb5e…` | `analysis_nonbinding` | **R9, analysis accepted pending carry** | `--no-ff` merge (3rd) **+ §7 patch** | same | ✅ before patch | ✅ §7 | `integrated_via_parent_merge` + normalized | every Gate-2 route; §11 consumer matrix |
| — | `planning/ins-g1b-carry-preflight` | this branch | `v4_INS_G1B_parent_carry_preflight_2026-08-08.md` | this object | `derived_nonbinding` | `review_ready_pending_knox_and_nick` | operator decision (§10) | same | n/a | n/a | **operator decision — see §10 note** | readiness-gate record |

**Read order for the assembled estate:** Gate-0 carrier → Gate-1a protocol → Phase-A raw → Phase-B raw → Gate-1a adjudication → Gate-1a handoff → **Gate-1b carrier (R9)** → Gate-2 brief.

---

## §10 — EXACT WRITE-AUTHORITY MATRIX

Every file the **future carry** proposes to touch. Nothing outside this table may be written. "Integrator transfer required" means `A2` gates it.

| Path | Authority | Current owner | Proposed writer | Reason | Exact bounded change | Transfer req'd | Other gate | Body mutation | Rollback |
|---|---|---|---|---|---|---|---|---|---|
| **CREATE** | | | | | | | | | |
| `.cursor/plans/v4_INS_G2_operating_composition_and_sufficiency_brief_2026-08-08.md` | `analysis_nonbinding` | new | integrator | the substantive Gate-2 payload (§12) | new file, full §12 contract | yes | `user_knox_required` | n/a | delete file, revert commit |
| `.cursor/plans/HANDOFF_2026-08-08_ins_g1b_carried_gate2_ready.md` | `derived_nonbinding` | new | integrator | Tier-3 durable handoff (§15) | new file | yes | — | n/a | delete file, revert commit |
| `docs/architecture/evolution_narrative_volume_10_2026-08-08.md` | `narrative_or_postmortem` | new | integrator | **Tier-3 narrative volume, mandatory** (§15) | new file incl. *Prior arcs consulted* | yes | — | n/a | delete file, revert commit |
| **IMPORT (merge, not authored)** | | | | | | | | | |
| the seven child artifacts in §9 | as recorded | child lanes | integrator via merge | assembly | **byte-exact import**; only PR #6 normalized per §7 | yes | — | **§7 one line only** | revert merge commits |
| **SHARED SURFACES — integrator-exclusive** | | | | | | | | | |
| `.cursor/plans/HANDOFF_2026-08-03_..._post_c4_4.md` (checkpoint) | Tier-0 current state | integrator role | integrator | §4.2 gate-lineage row (§3.2); base exception (§4.3); integrator transfer (§8.3); next-authorized-action | bounded edits to §4.2 + banner | yes | Nick | **no rewrite of history** | revert; restore prior banner |
| `AGENTS.md` | Tier-0 boot pointer | integrator role | integrator | Closeout Rule pointer sync — **pointer only, never the value** | current-checkpoint pointer + next action | yes | Nick | no | revert |
| `.cursor/plans/doctrine/04_manifest_read_graph.md` | Tier-0 routing | integrator role | integrator | six cold-entry routes + Tier-0 #15 sync (§14) | **add route entries under the existing contract** — see Tier-4 boundary §15.3 | yes | — | no | revert |
| `.cursor/plans/doctrine/01_master_corpus_catalog.md` | Tier-0 catalog | integrator role | integrator | catalog rows for landed artifacts (§14) | **add rows** (count per §14.1) | yes | — | no | revert |
| `.cursor/plans/doctrine/08_open_review_queue.md` | Tier-0 queue | integrator role | integrator | REV-159/160/185 updates + ONE Gate-2 parent row (§11) | update 3 rows, add 1 | yes | per-row `required_reviewer` | no | revert |
| `.cursor/plans/doctrine/05_supersession_conflict_ledger.md` | Tier-0 conflicts | integrator role | integrator | three conflict rows (§11) | add 3 rows, `resolution_status: open_review` | yes | — | no | revert |
| `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md` | Tier-0.5 boot-visible | integrator role | integrator | **Tier-3 guardrail obligation (§16)** | **update `D0TIER0-GRD-004`** — Option A | yes | Knox `A5` | no | revert |
| `.cursor/plans/doctrine/future_work_registry.md` | Tier-0 FWREG | integrator role | integrator | FWREG-017 update; F3 operator slice → OPECON; `INS-HAZ-COVSURF` row (§11) | update 1, add 1–2 | yes | — | no | revert |
| `.cursor/plans/doctrine/03_decision_extraction_ledger.md` | Tier-0 decisions | integrator role | integrator | **assess only** — Gate-1b §13.2 proposes **zero** decision rows | likely **no change**; if Tier 4 is triggered a row becomes mandatory (§15.3) | yes | — | no | revert |
| **EXPLICITLY UNTOUCHED** | | | | | | | | | |
| all `contracts/**` · `supabase/**` · `lib/**` · `app/**` · all migrations · all schemas | canonical / code | domain owners | **nobody** | out of scope | **none** | — | — | **no** | n/a |
| `C4.6` · `REV-184` bodies | accepted L2 / signed-off | their owners | **nobody** | §15.1-D: no body edit | **none** | — | — | **no** | n/a |
| `C3.6C` · `C4.5` next-actions · `GRR-TASKD-INPUT` · Care Response-Seam Audit | open / inbound-designed | their owners | **not the integrator unilaterally** | bounded pointer only, under that surface's own gate | pointer **proposed**, not landed here | yes + **owner gate** | **owner gate required** | no | revert |
| `vercel.json` | code/config | repo owner | **nobody** | §17 | **none** | — | — | no | n/a |
| off-repo controlling-plan banner | off-repo | integrator role | **cannot** — path does not exist in this environment | environment limitation (`D0OPER-DEC-004`) | **none; report limitation** | — | — | no | n/a |
| `main` | control plane | Nick | **nobody without explicit landing authorization** (`L8`) | no unilateral escalation | **none** | — | Nick | no | n/a |

> **Note on this preflight artifact's own disposition.** It sits on `planning/ins-g1b-carry-preflight`. Whether it is merged into the parent, left as a standalone branch record, or landed separately is an **operator decision** at `A4`. It is a readiness-gate record, not part of the Insurance architecture payload; my recommendation is to merge it with the parent so the decision trail lands with the decision, but it carries no architecture and could equally remain a branch-only record.

---

## §11 — STATE TRANSITION AND CROSS-ARC CONSUMER MATRIX

**Each row uses its OWNING SURFACE's native lifecycle vocabulary. No universal disposition enum is minted** — this is the R9 correction and it is load-bearing here.

Native vocabularies verified in their own primary sources:
- **`08` open review** — `open · open_non_blocking · ready_for_signoff · closed · closed_split_to_children · closed_for_wave3_extraction`; closure requires source files checked · verdict · rationale · canonical destination or no-promotion reason · conflict/supersession linkage, at the row's own `required_reviewer`.
- **`05` conflicts** — `resolution_status: open_review · split_review · needs_catalog_update · partially_resolved · resolved`, under the Closure Policy Lock.
- **`03` decisions** — row `status` (`active · locked · ratified · review_required · draft_for_review · …`) + `authority_level` + supersession linkage.
- **FWREG** — row `status: parked · watch · candidate · promoted · rejected`; AWP §6 build-entry disposition enum (`preserve_invariant_only · keep_parked · promote · open_review · reject_stale`) applies to **matched future-work rows at build entry**, not to other surfaces.
- **contracts/artifacts** — their own `review_gate` and maturity labels.

| Carried item | Owning surface | Current state (verified) | Proposed state | Native disposition | Consuming artifact | Consuming gate | Required proof receipt |
|---|---|---|---|---|---|---|---|
| **`REV-160` + `DEC-027`** — `financing_arrangement` shape; the **highest-value single row** | `08` | **`open`** | `open`, materially updated | carry `DEC-027`'s field list; principal-agnostic obligor; record lender-vs-rebate | **D6 contract / C5** | **C5/D6 cannot close without disposing of `REV-160` against `DEC-027`** | `08` closure note w/ all five required fields + `05` currency row |
| **`REV-185`** — economic-influence separation | `08` | **`open`** | `open`, **sharpened not duplicated** | record three-law separation; Insurance as **third dependent arc**; administrative friction as a fourth pressure pathway; row-P elevation as structural home | Gate-2 §; spine §3b + §C | Gate 2 + spine economics elevation | `08` note + `05` seven-label conflict row |
| **`REV-159`** — D6 insurance/Medicare/HSA-FSA deferral | `08` | **`open`** | `open`, **narrowed** | ownership resolves to existing owners; closure criteria narrowed | Gate-2 residual owner map | Gate 2 | `08` note citing Gate-1b §8.2 |
| **`REV-193` / `REV-201`** — alpha firewall / flywheel | `08` | both **`open`** | `open`, annotated | note as **economics-axis facets** only | row-P elevation | spine | `08` annotation, no state change |
| **Agreement / party-position (Gate-0 row)** | `08` | open | `open`, **re-scoped** | re-scope to **A-Q1a custody + A-Q1b substantive commitment + A-Q2 operative posture**, all generic | Gate-2 commitment taxonomy | Gate 2 output 4 | `08` note |
| **Gate-2 parent row** grouping A-Q12/14/15/16/17/18 | `08` | does not exist | **create ONE row** | `open`, `required_reviewer: user_knox_required`, with explicit closure criteria per A-Q | Gate-2 brief | **Gate 2 cannot close without an explicit disposition for each of the six** | `08` closure note enumerating six dispositions |
| **F3 operator slice** | FWREG | not routed | **new row or FWREG-018 annotation** | `parked` w/ `promotion_trigger` = OPECON-G0 charter; **other six actor slices named out-of-scope for that lane** | OPECON-G0 | OPECON-G0 charter admission | FWREG row + AWP §6 build-entry retrieval |
| **`FWREG-017`** Insurance/mixed-financing seam | FWREG | **exists**, Gate-0 says *"update, do not close"* | **update, do not close** | Gate-0/1a/1b discharged; Gate-2 named as next; invariants **accepted in direction, not contracted** | Gate-2 → Task-D | Task-D sufficiency receipt | FWREG row update |
| **`INS-HAZ-COVSURF`** containment | FWREG + `06` + `05` + Build Entry | **proposed, INERT** — all four activation landings missing | **land all four** (see §11.1) | FWREG row carrying clauses 1–4 **verbatim** | Build Entry | **any PR adding a column/write/coverage-semantic read to the three surfaces** | four landing receipts + Build-Entry note |
| **A-Q14** relation-shaped assertion + recommit seam | Clinical Memory + Accountability §19 + Care Response-Seam Audit | uncontracted | routed | dedup **mandatory** vs CM substrate, `governed_relation_assertion`, Response-Seam Audit | Care Response-Seam Audit | **cannot close without disposing of A-Q14** | audit closure receipt |
| **A-Q15** graph-role reconciliation | Gate-2 acceptance → C5 | three graphs, roles unreconciled | routed | named Gate-2 **failure condition** (fourth *authoritative* graph / duplicated lifecycle truth / one graph owning another's) | Gate-2 output 12 | Gate 2 | Gate-2 acceptance receipt |
| **A-Q16** field-level authority decomposition | C3.6C + CM + RBAC | `populated_G1_pending_review`, candidate net-new spine | bounded inbound pointer **under C3.6C's own gate** | sufficiency **UNPROVEN**; action-specific envelope OPEN | Gate-2 output 14(b) + C5 | Gate 2 + C3.6C's own pass | C3.6C owner acknowledgement |
| **A-Q17** partial-order sequencing — **largest open item** | C4.5 | `gate_0_charter_accepted · full_pass_not_started` | bounded inbound pointer **under C4.5's own gate** | `T-21` is charter law; application to care sequencing exists nowhere | C4.5 full pass + Gate-2 output 13(b) | **C4.5 pass cannot close without disposing of the Insurance partial-order fixture** | C4.5 pass receipt |
| **A-Q18** admissibility vs preference vs policy vs rail vs **funding condition** | C4.6 §9 Sourcing + D6 + Settings | three of five separated; funding-condition case unclassified | Gate-2 trace dimension | **no body edit to C4.6** — accepted L2 doctrine | Gate-2 output 13(a) | Gate 2 | Gate-2 trace result |
| **Payer-constrained-therapy fixture** | C4.6 `C12` + Care Response-Seam + Gate-2 suite | specified, **never executed** | attached to all three | **attach to `C12`, do not rebuild**; `C12` alone is INSUFFICIENT | Gate-2 trace suite | **Gate 2 — REQUIRED trace** | executed trace result |
| **Vendor-financing fixture** | Gate-2 suite | specified, never executed | attached | two enumerations to extend; `financing_arrangement` principal-agnostic | Gate-2 trace suite | Gate 2 | executed trace result |
| **Gate-0/1a/1b child states** | checkpoint §4.2 | one lane row, no gate lineage | **one row updated with gate lineage** (§3.2) | `landed` per gate after parent lands | checkpoint | parent closeout | §4.2 table + closeout commit |
| **Task-D reliance state** | pre-spine sufficiency map + Task-D | `NOT_READY_AS_FINAL_INSURANCE_COMPOSITION_INPUT` | unchanged until Gate 2 | two-level maturity preserved verbatim | Task-D | **Task-D cannot close without the Insurance sufficiency receipt** | Gate-2 → Task-D receipt |

### §11.1 `INS-HAZ-COVSURF` — the four landings that activate it

Verified from the Gate-0 carrier: the contract is **inert until all four land**, and *"until all four land, clause 4 is a recommendation and any consumer may ignore it."*

1. the **guardrail-digest row** for coverage-as-boolean / overwrite-on-check (§M(b));
2. the **`05` conflict row** for the overlapping surfaces;
3. the **`INS-HAZ-COVSURF` FWREG row** carrying clauses 1–4 **verbatim**;
4. a **Build-Entry note** binding clause 4 as an admission check.

Clauses 5 and 6 proposed by Gate-1b §7.4 extend it: no operative coverage view across the three surfaces, and no `patient_column` use for coverage/payer-identity/commercial-willingness attributes without an allowlist and an authority/temporal model.

**Recommendation: land containment NOW, in the parent transaction.** All four landings are row/note writes on integrator-owned surfaces — no schema, no code, no migration. Deferring keeps a live, checkable hazard inert while the surfaces continue to accumulate, which is the exact failure Gate-0 flagged. **Item 4, the Build-Entry note, is the one to watch:** if binding clause 4 as an admission check requires amending the Build Entry Gate's own contract rather than adding a note under it, that tips toward Tier 4 (§15.3) and must be split out.

---

## §12 — GATE-2 BRIEF CONTRACT

**One substantive artifact. Not a family of thin sidecars.**

`.cursor/plans/v4_INS_G2_operating_composition_and_sufficiency_brief_2026-08-08.md`

| Field | Value |
|---|---|
| Document type | `analysis` / `work_package_brief` |
| Authority | `analysis_nonbinding` (`D0THES-GRD-036`) |
| Status | `gate_2_brief_landed_execution_not_started · not_promoted · no_contract_mutation` |
| Lifecycle role | the single substantive payload carrying Gate-1b's accepted result into Gate-2 execution |
| Manifest action | `add_tier2` — **landed by the parent transaction**, not proposed |
| Review gate | `user_knox_required` |
| Read order | Gate-0 → Gate-1a protocol → Phase-A raw → Phase-B raw → Gate-1a adjudication → Gate-1b R9 → **this** |

**ONE current-state surface.** The brief states its status in exactly one place and every other section points to it. This is the direct remedy for the Gate-1b defect where one artifact restated its own state in eight places and produced nine rounds of propagation failure.

**Required sections:**

| § | Content | Constraint |
|---|---|---|
| **0** | Exact Object and Assembly Manifest (§9), inherited | frozen evidence, labelled as such |
| **1** | **Accepted architecture kernel** — §2 of this preflight at equal or greater depth | **must NOT be replaced by "see REV-159/160/185"** |
| **2** | **Cross-arc impact and consumption matrix** — per finding: source carrier + section · affected arc · current maturity · consuming artifact · consuming gate · owning-surface-native disposition · state row updated · required proof receipt · **body-edit authority yes/no** · bounded inbound pointer if any | every ledger row points **back** to its substantive section; every substantive section points **forward** to its owning state row |
| **3** | **State and routing matrix** — §11 of this preflight | native vocabularies only |
| **4** | **Gate-2 execution contract** — trace suite · anti-shadow criteria · A-Q12/14/15/16/17/18 · sourcing selection · partial-order sequencing · comparator families (technology · military/joint C2 · civil aviation) with their three transfer limits · kill conditions · build/buy/wrap boundary · Task-D receipt contract · exact stop | **CARRY FORWARD, do not regenerate** — Gate-1b outputs 1–14 already exist and re-deriving them is the documented failure |
| **5** | **Epistemic provenance appendix** — §13 matrix | no reconstructed raw; no helper authority |
| **6** | **Explicit non-decisions** — §2.7 | *"as important as the positive architecture"* |
| **7** | Under-pressured arrivals — §2.8 | must survive **unweakened** |

**The division of labour, stated so nothing substitutes for anything else:** the **Gate-2 brief** owns substantive architecture · **ledgers** index and govern lifecycle state · the **parent handoff** owns operational continuity and the next gate · the **checkpoint** owns live program state. **No ledger row may become a compressed substitute for the architecture.**

**Explicitly not authorized by the brief:** Gate-2 execution, comparator research, fixture execution, contract/schema/code changes, promotion.

---

## §13 — EPISTEMIC PROVENANCE MATRIX (reconnaissance returns)

**The recommended durable form is ONE concise matrix inside the Gate-2 brief. No verbatim appendix is recommended, because no raw text has ever been supplied to any Opus context and this preflight will not reconstruct it.**

**The distinction this matrix exists to protect.** A helper report **raising a challenge or locating a candidate source** and a **primary repository source establishing, narrowing or falsifying a finding** are different epistemic acts. A single "useful findings" column would collapse them and, read in six months, would credit the helper reports with findings the carrier explicitly says rest on primary sources: *"Every correction above was adjudicated against a primary repository source read directly… **No claim in this carrier rests on a helper report.**"* Collapsing them would be **attribution laundering** — the mirror of the status laundering §15.1 constraint (ii) already forbids.

| Field | Meaning |
|---|---|
| `challenge_or_search_path_raised_by` | which helper prompted the question or located a candidate source |
| `raw_report_available` | **yes/no** — never imply preservation where raw is missing |
| `primary_sources_adjudicated` | the exact repository sources that established the final result |
| `gate1b_disposition` | `confirmed · narrowed · falsified · unresolved` |
| `final_carrier_location` | exact Gate-1b section / correction row |
| `authority_warning` | helper remains **comparative context, not architecture authority** |
| `default_read_posture` | **not required for cold entry** unless a dispute reopens it |

**The four reports, as far as this preflight can honestly state:** (1) care truth / disagreement / correction; (2) money / obligation / resource / economics; (3) external party / counterparty / agreement / Federation; (4) committed insurance implementation forensics. Knox states he holds and read all four. **`raw_report_available` = no, from every Opus context** — they were commissioned before R0 and never returned to Opus at any revision through R9.

**Consequence for the matrix: the `primary_sources_adjudicated` and `gate1b_disposition` columns can be completed by Opus from the carrier's correction receipt; the `challenge_or_search_path_raised_by` column can only be completed by Knox.** The parent transaction must either obtain Knox's input for that column or mark it `attribution_not_reconstructable_by_opus` rather than guessing. **Do not infer helper attribution from the shape of a correction.**

**Sealed verbatim appendix: NOT recommended.** No raw was supplied; its audit value cannot be assessed; and creating a placeholder would violate the no-reconstruction rule. If Knox later supplies raw text, a sealed appendix may be reconsidered with passport `analysis_nonbinding · preserved_verbatim · comparative_context_only · primary_sources_and_gate1b_corrections_control · not_default_read`.

---

## §14 — DISCOVERY PLAN (proposed, not landed)

### §14.1 Catalog rows

**Verification correction to Gate-1b §13.2.** It proposes *"One catalog row."* **That count is now wrong** and the parent must not carry it forward. The parent lands **seven child artifacts plus the Gate-2 brief plus the handoff plus the narrative volume**, and each Tier-2+ artifact requires its own row under the §5 New Artifact Completion Rule. **The corrected obligation is a row per landed artifact** — the exact count is set by `A4`'s decision on which artifacts land. **Residual catalog enum debt is parked at `D0CTLG-REV-001` and is not resolved here.**

### §14.2 Read-graph routes — verification of Gate-1b §15.1 Part C

Part C's six triggered cold-entry routes were **verified in place and are correct as written**; they are carried forward, not regenerated:

1. **Insurance / mixed financing** → Gate-0 → Gate-1a → Gate-1b → **Gate-2 brief**
2. **Pharmacy / formulary / substitution** → C4.6 → the payer-constrained-therapy fixture
3. **Source authority** → C3.6C → A-Q16
4. **Temporal / partial-order / async** → C4.5 → A-Q17
5. **Economics / ranking / incentive** → `REV-185` + late-builder row P
6. **Relation assertions / Care Response Seam / Accountability** → Accountability §19–20 → A-Q14

Plus `05` conflict rows and a FWREG entry. **One correction:** Part C's routes must now terminate at the **Gate-2 brief** as the current head of the Insurance chain, not at the Gate-1b carrier.

**Tier-0 #15 sync** is required by the Closeout Rule if the checkpoint pointer moves (§15).

**No universal-boot promotion.** Gate-1b §13.2 already rejects a single Tier-2 node as insufficient (*"found only by a reader who already knows the subject"*); six triggered routes is the accepted answer and nothing here justifies promoting Insurance to a boot-visible surface.

### §14.3 Bounded backpressure — verification of Gate-1b §15.1 Part D

Part D was **verified in place and is correct**, including its critical qualifier that an open surface is not automatically writable: *"a bounded pointer lands only under that surface's own owner/gate or its designated inbound section."*

| Source arc | Artifact state | Direct pointer authorized? | Who must approve |
|---|---|---|---|
| **C3.6C** | `populated_G1_pending_review` — open | **only under its own owner/gate** | C3.6 owner |
| **C4.5** next-actions | `gate_0_charter_accepted · full_pass_not_started` — open | **only under its own owner/gate** | C4.5 owner |
| **`GRR-TASKD-INPUT`** Input-State Receipt | `not_started`, designed for inbound | yes, into the designated inbound surface | Accountability/GRR owner |
| **Care Response-Seam Audit** | not yet opened | **only when opened** | Care owner |
| **C4.6** | accepted L2 build doctrine | **NO body edit** | — |
| **REV-184** | signed off | **NO body edit** | — |
| **Care capture** | frozen (forensic lane) | **NO body edit** | — |

Each authorized pointer carries **only**: incoming question ID · source ref · why it pressures that arc · required consuming gate · maturity. **Nothing more.** `00_omni_opus_boot.mdc` §10 — no silent mutation of sibling truth.

---

## §15 — CHECKPOINT AND PRESERVATION CLASSIFICATION

### §15.1 THIS preflight-writing transaction

```
work_posture:     durable_lane   (inside the coordinated package PRESPINE-PHASEA)
checkpoint_tier:  2
```

**Continuity: yes** — the output must survive replacement-context consumption by whoever executes the carry. **Coordination: yes at package level**, but this transaction writes only its own object, so `C1` (protected surfaces read-only) is the only active coordination law. Tier 2 because it produces one committed work-package/readiness artifact and moves no shared state.

### §15.2 The FUTURE parent carry

```
work_posture:     coordinated_package
checkpoint_tier:  3
```

**Exact Tier-3 triggers relied on, from the AWP §8 table** (*any* one suffices; four are present):

1. **spans 3+ Tier-0 governance artifacts** — nine integrator-exclusive surfaces are in scope (§8.1);
2. **changes routing semantics** — six cold-entry read-graph routes plus Tier-0 #15;
3. **crosses a phase boundary** — Gate 1b → Gate 2, and the Insurance partition's completion inside Phase A;
4. **spans multiple sessions and multiple commits** — merge commits + normalization + Gate-2 brief + closeout.

**Tier 3 therefore requires:** Tier-2 durable handoff · **narrative volume** (`docs/architecture/evolution_narrative_volume_10_2026-08-08.md`) · **prior-arcs-consulted section** · **guardrail extraction (§16)** · **checkpoint closeout with pointer synchronization in the same commit.**

### §15.3 Why Tier 4 is excluded — and the exact boundary to watch

Tier 4 triggers on *"binding doctrine added or rule changed (Schema Lock, Enforcement Rules, Operating Contracts, Read-Graph Operating Contract, Archive Operating Contract, etc.)."* The carry: adds no binding doctrine · changes no operating contract · changes no schema lock · **adds route entries UNDER the Read-Graph Operating Contract rather than amending the contract itself.**

**Two live boundary risks. If either materializes, that element is Tier 4 and must be REMOVED from this bounded transaction unless Nick separately authorizes canonization:**

- **(a)** If the read-graph work amends the Read-Graph **Operating Contract** (its semantics) rather than adding entries under it.
- **(b)** If `INS-HAZ-COVSURF` landing item 4 requires amending the **Build Entry Gate's own contract** rather than adding a note under it (§11.1).

A Tier-4 element additionally mandates a `03` decision-ledger row plus a `05` supersession update.

### §15.4 Closeout obligations

Per AWP §8 Checkpoint Closeout Rule, in the **SAME closeout commit**: the handoff · `AGENTS.md` · the read graph · and the controlling-plan banner must all be repointed. **The off-repo banner does not exist in this environment** — the transaction must **report that limitation** rather than claim the repoint, per `D0OPER-DEC-004`.

**Next authorized lane after the carry:** `INS-G2-OPERATING-COMPOSITION-AND-SUFFICIENCY`, executed by a **genuinely fresh context** against the landed brief and routes. The current context should be retired at parent landing. **Sequencing remains operator-controlled; no arc auto-starts.**

---

## §16 — GUARDRAIL EXTRACTION AND THE C61 CONFLICT

### §16.1 The C61 pointer is mis-targeted — verified

Gate-1b's **C61** demoted a proposed guardrail pending dedup against **`D0THES-GRD-043`**. Read in the live digest, `GRD-043` is **ingestion hoarding** — *"capturing/categorizing endlessly without routing to an outcome; treating the library (or perfecting the intake machinery) as the work… the Evidence Plane grows but sources sit `raw_dropped`/`analyzed` and never reach a decision."* Its domain is `evidence_processing`.

**That is not the home for an intra-document semantic-propagation residue. Knox is right, and the parent must not carry C61's pointer forward unexamined.**

### §16.2 Dedup performed against the live digest

| Row | What it actually covers | Distance from the candidate lesson |
|---|---|---|
| `D0THES-GRD-043` | ingestion hoarding; Evidence Plane sources never routed | **far** — wrong plane, wrong mechanism |
| `D0PRESS-GRD-001` | pressure-test corpora become graveyards; handoff names artifacts without per-artifact routing | **adjacent** — about inter-artifact discoverability, not intra-artifact propagation |
| `D0TIER0-GRD-005` | preservation treated as exception at checkpoint close | **far** — about producing artifacts, not about their internal consistency |
| `D0CKPT-GRD-003` | ceremony overreach **+ duplicated state**; instance-generalization; artifact-as-trigger | **near on one limb** — "duplicated state" overlaps, but the row's subject is work-partitioning ceremony |
| **`D0TIER0-GRD-004`** | *"Inlining schema content… into a referencing artifact instead of pointing to the canonical schema home. **Creates dual sources of truth that silently drift when the canonical home is updated and the referencing artifact is not.**"* | **CLOSEST — same mechanism, different scope.** GRD-004 is the **cross-artifact** form; the Gate-1b lesson is the **intra-document** form |

### §16.3 Recommended disposition — **Option A: update `D0TIER0-GRD-004`**

**Do not mint a new row. Do not leave the Tier-3 field blank. Do not create an Insurance-specific slogan.**

`D0TIER0-GRD-004` already names the exact mechanism — a restatement drifts because the canonical statement is corrected and the copy is not. The Gate-1b arc supplies a **newly evidenced specialization**: the same failure occurs **inside a single artifact** that restates its own state in multiple places, and it is not caught by presence-only search.

**Candidate lesson, for adjudication:**

> A semantic correction is incomplete until every active restatement, receipt, execution contract, state summary and downstream instruction that depends on the withdrawn claim has been propagated or invalidated. **Presence-only `grep`, correction-at-introduction-only, and multiple self-restated state summaries create false internal consistency.**

**Proposed update to `D0TIER0-GRD-004`:** extend its description with the intra-document specialization; add `source_evidence` pointing to the Gate-1b carrier §0.5 (C45–C48, C51–C52, C56, C62) and to narrative volume 10; add the three named detection failures (presence-only grep, correction-at-introduction, self-restated state summaries); point `notes` at the canonical remedy — **one current-state surface per artifact** (the Gate-2 brief §12 constraint) and the §2.1 Single-source law.

### §16.4 Evidence of recurrence BEYOND this packet — required by C61, and it exists

C61 set the bar at *"evidence of recurrence beyond this packet."* **That bar is met, and here is the evidence — not invented:**

1. **The Phase-A base pin drifted twice when copied.** `AGENTS.md` records that its pointer *"previously carried a stale `51ead01…` after the base rotated,"* and checkpoint §4.2 records that the value *"drifted twice when copied."* The AWP §2.1 **Single-source law exists because of that recurrence.** Different packet, different artifacts, identical mechanism: a value restated in a second location was not updated when the canonical one changed.
2. **`D0CKPT-GRD-003`** was extracted from the 2026-08-04/05 Phase-A arc and already names **duplicated state** as an observed failure — again a different packet.
3. **`DEC-027` / `REV-160`** — a decision recorded in May, never carried into the contract it governed, with the open-review row owning the same question still reading "tentative." Different mechanism (consumption rather than propagation) but the same root: **a correction that did not reach every dependent surface.**

**Conclusion: the dedup succeeds against `D0TIER0-GRD-004` and the recurrence bar is met. Option A is available and is recommended. Options B (new row) and C (no change) are not recommended** — B would add a redundant row to a digest whose own discipline forbids it; C would discard genuinely new evidence for an existing rule.

**This remains Knox's adjudication (`A5`), not this preflight's decision.**

---

## §17 — VERCEL EXCLUSION

**Classification: `excluded_unrelated_check_failure`. Routed OUTSIDE the Insurance carry.**

| Fact | Status |
|---|---|
| `vercel.json` on current `main` contains `"schedule": "*/1 * * * *"` for `/api/cron/outbound-jobs` | **verified from repository bytes** |
| PR #4, #5 and #6 all report a Vercel check failure at the **identical** URL `https://vercel.link/3Fpeeb1` | **verified via `gh pr checks` on all three in this run** |
| Identical failure across three PRs with three different content sets, none touching code or config | **strongly corroborates a repo-level configuration cause, not a PR-content cause** |
| Vercel Hobby-plan cron frequency limit as the specific mechanism | **NOT verified in this preflight** — deployment log not read, plan tier not confirmed |

**Honest label: repository defect verified; cause strongly corroborated by identical cross-PR failure; root cause not conclusively attributed from repository bytes alone.**

- **Do not patch `vercel.json`** in this transaction — it is code/config, outside the write matrix, and belongs to a separate bounded operations work item.
- **Do not let it block architecture preflight review**, unless repository policy requires all checks green with no exception process. PR #6's `mergeStateStatus: UNSTABLE` is attributable to this check alone.
- Record it in the parent proof receipt only as an **excluded unrelated check failure**.

---

## §18 — ROLLBACK AND PROOF PLAN

### §18.1 Boundaries

| Boundary | Value |
|---|---|
| Parent branch base | **exact current `main`** at execution — re-verified; **STOP if moved** |
| Merge order | PR #4 → PR #5 → PR #6, `--no-ff`, lineage order |
| Commit boundaries | (1) three merge commits · (2) one normalization commit (§7) · (3) Gate-2 brief + handoff + narrative · (4) **one shared-surface closeout commit** |
| Normalization boundary | §7 only — **one line, one substring** |
| Shared-surface boundary | the nine integrator surfaces, in **one closeout commit** per AWP §8 |

### §18.2 Pre-landing proof (all must pass; any failure STOPS)

```
git rev-parse origin/main                                   == the recorded base
git merge-base --is-ancestor <each child head> <parent head> == true (x3)
git diff --numstat <main>..<parent head>                     -> zero deletions on imported files
git diff --name-status <main>..<parent head>                 -> only A on child artifacts; only
                                                                intended M on the nine surfaces
git rev-parse <child head>:<path> == git rev-parse <parent>:<path>   for all 7 (PR #6 pre-normalization)
git diff --exit-code <main>:<path> <parent>:<path>           for every surface NOT in the write matrix
                                                             -> must exit 0 (untouched)
```

Plus: every write-matrix row has a landed change · every §11 row has its native disposition and proof receipt · closeout pointers synchronized in the same commit · off-repo banner limitation reported.

### §18.3 Post-landing proof

Child PR states recorded · landed object blobs recorded in the manifest · `AGENTS.md` + read-graph #15 + checkpoint banner mutually agree (**Boot Freshness Check passes for the next agent**) · a fresh context booting from `main` reaches the correct next-authorized action.

### §18.4 Rollback

- **Before `main` landing:** delete or reset the parent branch. Children are untouched and remain the authoritative sources. **Zero blast radius.**
- **After `main` landing:** `git revert` the closeout commit first (restores control-plane pointers), then the content commits, in reverse order. **Never rewrite `main`'s history.** Restore `AGENTS.md`, read-graph #15 and the checkpoint banner to their prior mutually-consistent state **in the same revert commit**, or the next agent boots into an inconsistent control plane.

### §18.5 Prohibited operations — absolute

- **no force push, no `--force-with-lease`, on any branch**
- **no reset of `main` or the parent to any child head**
- **no tree replacement** — never materialize a child's whole tree over current state
- **no applying a two-tree (`git diff main branch`) comparison as a patch** — this is the operation that would have produced the 575 phantom deletions
- **no amending or rewriting child commits** — child history is immutable source
- **no landing on `main` without explicit Nick authorization** (`L8`)

---

## §19 — FINAL PREFLIGHT RECOMMENDATION

# `PREFLIGHT PASS — AUTHORIZE EXECUTION WITH EXACT WRITE MATRIX`

The parent carry is designed, proven where it can be proven, and bounded. The assembly strategy is empirically validated rather than argued: three clean merges, zero deletions, full ancestry, byte-exact child blobs, and current-`main` doctrine intact. The write matrix is exact and closed. Every carried finding has a named consumer, a consuming gate, an owning-surface-native disposition, a state update and a proof receipt.

**Execution remains blocked on the six authorizations in §0**, of which one is a hard structural precondition that only Nick can supply:

> **`A2` — explicit transfer of `PRESPINE-PHASEA-INTEGRATOR`.** The role has a named holder in a committed surface. Without the §8.2 receipt, the executing thread has no authority over any of the nine shared surfaces, and the carry cannot legally begin regardless of Knox's verdict on this document.

**Three items require Knox adjudication and could change the plan:** the assembly route (`A1`), the retroactive base exception (`A3`), and the guardrail disposition (`A5`).

**Two known limitations, disclosed rather than resolved:** the reconnaissance `challenge_or_search_path_raised_by` column cannot be completed by any Opus context (§13), and the off-repo controlling-plan banner cannot be repointed from this environment (§15.4).

**This document authorizes nothing. It executed nothing. `main`, PR #4, PR #5 and PR #6 are untouched.**

**STOP: `preflight_ready_pending_nick_knox_carry_authorization`**
