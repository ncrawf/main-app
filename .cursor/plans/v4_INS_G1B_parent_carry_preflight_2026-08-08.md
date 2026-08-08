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

There are **six authorization DECISIONS, not six things Nick must supply.** Five are review decisions Knox adjudicates; **exactly one — `A2` — requires something only Nick can provide.** Knox adjudicated all six on 2026-08-08 (`PASS WITH REQUIRED PATCHES`); this revision records those rulings and applies the required patches.

| # | Decision | Adjudicator | Knox ruling (2026-08-08) | Still open? |
|---|---|---|---|---|
| **A1** | Parent assembly by **MERGE**, not exact-object materialization (§5) | Knox adjudicates · Nick authorizes execution | **APPROVED with two conditions** — PR #7 merges first; landing must preserve the DAG (§5.6, §18.5) | applied |
| **A2** | **Transfer of `PRESPINE-PHASEA-INTEGRATOR`** to the executing thread (§8) | **NICK ONLY** | pending | **⛔ THE ONLY NICK-ONLY PRECONDITION** |
| **A3** | Base-policy exception disposition (§4) | Knox adjudicates · Nick accepts | **APPROVED as a disclosed nonconformance disposition** | applied |
| **A4** | The **exact write matrix** (§10) | Knox adjudicates · Nick authorizes scope | **REQUEST CHANGES** → exactness patch applied | applied |
| **A5** | Tier-3 **guardrail disposition** (§16) | Knox | **REQUEST CHANGES — target rejected** → replaced with three bounded dispositions | applied |
| **A6** | **Gate-2 brief contract** (§12) | Knox adjudicates · Nick accepts | **APPROVED with one state correction** (Gate-2 lineage) | applied |

**Nothing in this document is self-authorizing.** `A2` cannot be inferred from Knox's approval of this preflight: the integrator role has a named holder in a committed surface, and only Nick can move it.

**What Nick is asked for is ONE instruction, not six answers** — accept the patched preflight · transfer the integrator role · authorize execution of the parent carry on the named branch under this write matrix. That authorization does **not** extend to Gate-2 execution, `main` landing, contract/schema/code/migration changes, Build Entry Gate mutation, or successor-lane auto-start. **`main` landing remains a separate authorization** after the assembled parent branch receives exact review.

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

**What this classification does NOT license.** It does not retroactively make the branch creation contemporaneously authorized (§4). It does not expand the Phase-A parent-close criteria.

> **★ GATE-2 LINEAGE CORRECTION (Knox `A6`, applied).** An earlier revision of this section said Gate 2 is *"downstream of the Insurance partition's completion."* **That was wrong and is retracted.** The Gate-1b carrier states that *"**after (B), not before**, Insurance produces its final Task-D sufficiency receipt"* — Gate 2 **produces** the receipt, so the partition cannot already be complete when Gate 2 begins.
>
> **Correct state: Gate 2 is the next sequential child gate INSIDE the Insurance partition. It is not a sixth Phase-A sibling partition. The Insurance partition remains ACTIVE until Gate 2 returns the final Task-D sufficiency receipt.**
>
> The checkpoint §4.2 row must therefore read `INS-G0-MIXEDFIN → Gate 0 landed → Gate 1a landed → Gate 1b landed → Gate 2 prepared/not_started`, and **must not** read "Insurance partition complete." Gate-2 activation remains operator-controlled.

---

## §4 — BASE-POLICY RECONCILIATION

**Durable label (Knox `A3`, APPROVED):**

> **`accepted_nonconformance_with_bounded_corrective_disposition`** — *later sequential Insurance gates legitimately required the approved successor estate, but the branch/base exception was **disclosed rather than formally recorded** under AWP §2.1. The parent integration transaction records the exception **retroactively** and establishes the going-forward gate-lineage rule.*

Short form, retained: **`disclosed progression + retroactively normalized exception`.** Explicitly **not** "silent violation ignored" and explicitly **not** "fully compliant contemporaneous exception." **Nick may accept this disposition; Nick cannot make the original process contemporaneously compliant, and no artifact may suggest otherwise.**

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

**Exact parent branch (Knox `A1` condition):** `integration/ins-g1b-parent-carry-gate2-prep`

### §5.2 The proof — run in this session, in a disposable scratch worktree, now destroyed

> **★ PROOF SCOPE — READ BEFORE RELYING ON THE NUMBERS.** The proof below is a **THREE-branch proof (PR #4 · #5 · #6). It does NOT include PR #7**, which Knox subsequently required to be merged first (`A1` condition 1), and it was run against **PR #7's pre-correction state, which no longer exists.** The figures below are therefore **frozen evidence of a three-branch merge, not a status report on the four-branch assembly that will actually execute.**
>
> **MANDATORY: the §5.2 proof MUST be re-run at execution with PR #7's corrected head included as the first merge, and the re-run figures — not these — govern.** Expect **8 files** rather than 7, and an insertion count higher by this artifact's line count. **Do not copy these numbers forward into the execution receipt.** Reporting a stale proof as current is precisely the propagation defect this whole arc exists to eliminate.

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

Parent branch: **`integration/ins-g1b-parent-carry-gate2-prep`**, created from **exact current `main`**.

1. Re-verify `main` has not moved from the recorded base. **STOP** if it has.
2. **Re-run the §5.2 proof on a scratch branch, INCLUDING PR #7 at its corrected head.** **STOP** on any deviation.
3. Merge `--no-ff` in this order: **PR #7 (approved preflight) → PR #4 (Gate 0) → PR #5 (Gate 1a) → PR #6 (Gate 1b).**
4. Apply the single §7 R8 self-reference normalization commit.
5. Add the Gate-2 brief, the subordinate handoff, and the narrative volume.
6. Apply the §10 shared-surface transaction as **one closeout commit** (AWP §8 Checkpoint Closeout Rule).
7. Run the §18 pre-landing proof.
8. Submit the complete parent branch for Knox/Nick acceptance. **Do not land without a separate landing authorization.**

**Why PR #7 merges first (Knox `A1` condition 1).** If the preflight's own disposition were left an operator choice, **the governing execution plan would remain provisional and uncatalogued while the transaction it governs lands.** Merging it first makes the plan an ancestor of the execution it authorizes.

**Landing rule (Knox `A1` condition 2).** The eventual `main` landing **MUST preserve the DAG**. A squash or rebase merge would destroy the ancestry on which `integrated_via_parent_merge` depends and would silently convert this into an exact-object materialization with a false provenance label. If `main` is unchanged, use an ordinary **fast-forward** of the accepted parent head; otherwise **STOP and re-run the proof**. **No squash. No rebase. No tree materialization.**

---

## §6 — CHILD PR FINAL DISPOSITION

**Under Option A (recommended), the correct disposition is `integrated_via_parent_merge` — NOT `superseded_by_parent_assembly`.**

The proof in §5.2 Result 2 shows all three child heads become genuine ancestors of the assembled result. Once the parent lands on `main`, those commits are ancestors of `main`. Labelling them "superseded" would be factually wrong and would discard the ancestry the merge route exists to preserve.

| PR | Disposition under Option A | Timing | Required pointer |
|---|---|---|---|
| **#7** | `integrated_via_parent_merge` — **the approved preflight lands with the transaction it governs** | after parent lands | parent commit + landed path + corrected-head blob |
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
| **#7** | `planning/ins-g1b-carry-preflight` | corrected head, recorded at execution | `v4_INS_G1B_parent_carry_preflight_2026-08-08.md` | recorded at execution | `derived_nonbinding` | Knox-adjudicated, patched | `--no-ff` merge (**1st**) | same | ✅ yes | no | `integrated_via_parent_merge` | the governing execution plan; readiness-gate record |
| #4 | `analysis/insurance-payer-oop-g0` | `2aabed77…` | `v4_insurance_payer_oop_gate0_carrier_2026-08-04.md` | `9f935857…` | `analysis_nonbinding` | Gate-0 carrier, `not_promoted` | `--no-ff` merge (1st) | same | ✅ yes | no | `integrated_via_parent_merge` | Insurance cold-entry route; `INS-HAZ-COVSURF`; FWREG-017 |
| #5 | `cursor/ins-g1a-preservation-caa7` | `671d120f…` | `v4_INS_G1A_regime_independent_care_financing_physics_protocol_2026-08-07.md` | `8876a0d8…` | `analysis_nonbinding` | protocol, complete | `--no-ff` merge (2nd) | same | ✅ yes | no | `integrated_via_parent_merge` | Insurance route step 2 |
| #5 | " | " | `v4_INS_G1A_phase_a_independent_derivation_verbatim_2026-08-07.md` | `d242162c…` | `analysis_nonbinding` | **raw, verbatim — source** | " | same | ✅ yes | no | " | cited by Gate-1b §1; **raw wins over derivative** |
| #5 | " | " | `v4_INS_G1A_phase_b_pressure_test_verbatim_2026-08-07.md` | `03295b50…` | `analysis_nonbinding` | **raw, verbatim — source of F1–F7** | " | same | ✅ yes | no | " | Gate-1b §1.1 anchor; **controls over the adjudication** |
| #5 | " | " | `v4_INS_G1A_adjudication_and_terminus_2026-08-07.md` | `6b42d257…` | `analysis_nonbinding` | derivative interpretation | " | same | ✅ yes | no | " | derivative — loses precision on F1/F3/F7 |
| #5 | " | " | `HANDOFF_2026-08-07_ins_g1a_preserved_gate1b_ready.md` | `70b5e0df…` | `derived_nonbinding` | handoff | " | same | ✅ yes | no | " | lane-model evidence for §3 |
| #6 | `cursor/ins-g1b-ownership-reconciliation` | `78a9b280…` | `v4_INS_G1B_financing_ownership_and_existing_estate_reconciliation_2026-08-07.md` | `57e5bb5e…` | `analysis_nonbinding` | **R9, analysis accepted pending carry** | `--no-ff` merge (3rd) **+ §7 patch** | same | ✅ before patch | ✅ §7 | `integrated_via_parent_merge` + normalized | every Gate-2 route; §11 consumer matrix |

**Read order for the assembled estate:** Gate-0 carrier → Gate-1a protocol → Phase-A raw → Phase-B raw → Gate-1a adjudication → Gate-1a handoff → **Gate-1b carrier (R9)** → Gate-2 brief. *(The preflight is a readiness-gate record read alongside, not a step in the architecture chain.)*

---

## §10 — EXACT WRITE-AUTHORITY MATRIX

Every file the **future carry** proposes to touch. Nothing outside this table may be written. "Integrator transfer required" means `A2` gates it.

> **★ EXACTNESS PATCH (Knox `A4`, `REQUEST CHANGES` — applied).** The prior revision was not genuinely exact: it said FWREG *"add 1–2"*, left this artifact's own disposition an operator choice, and — the material defect — **described the agreement/party-position row as an existing `08` row to be re-scoped. It does not exist.** Verified in the live queue: no agreement/party-position `REV-` row is present (`REV-020` is AI-model-registry governance; `REV-177` is Federation recalibration). Gate 0 **proposed** it as a new row; **it never landed.** It is an **ADD**, not an update. The counts below are now exact and stated per surface.

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
| `.cursor/plans/doctrine/04_manifest_read_graph.md` | Tier-0 routing | integrator role | integrator | six cold-entry routes + Tier-0 #15 summary sync (§14) | **add 6 route entries UNDER the existing contract** — see Tier-4 boundary §15.3 | yes | — | no | revert |
| `.cursor/plans/doctrine/01_master_corpus_catalog.md` | Tier-0 catalog | integrator role | integrator | catalog rows for every landed artifact (§14.1) | **add exactly 11 rows** | yes | — | no | revert |
| `.cursor/plans/doctrine/08_open_review_queue.md` | Tier-0 queue | integrator role | integrator | §11 state transitions | **UPDATE 5** (`REV-159` · `REV-160` · `REV-185` · `REV-193` · `REV-201`) **+ ADD 3** (agreement/party-position · Gate-2 parent row · `INS-HAZ` Build-Entry activation) | yes | per-row `required_reviewer` | no | revert |
| `.cursor/plans/doctrine/05_supersession_conflict_ledger.md` | Tier-0 conflicts | integrator role | integrator | §11.2 semantic conflicts | **ADD exactly 4 rows**, `resolution_status: open_review`; collision-free IDs allocated at execution | yes | — | no | revert |
| `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md` | Tier-0.5 boot-visible | integrator role | integrator | **Tier-3 guardrail obligation (§16, REVISED)** | **UPDATE `D0CKPT-GRD-003`** (narrow) · **UPDATE `D0-GRD-010`** (financing vendor-label) · **ADD 1** coverage-as-boolean / overwrite-on-check row. **`D0TIER0-GRD-004` NOT touched.** | yes | Knox `A5` | no | revert |
| `.cursor/plans/doctrine/future_work_registry.md` | Tier-0 FWREG | integrator role | integrator | §11 FWREG transitions | **UPDATE `FWREG-017`** · **UPDATE `FWREG-018`** (F3 operator slice, with the §11.3 enumeration extension) · **ADD 1** `INS-HAZ-COVSURF` row carrying clauses 1–6. **No second operator-economics row.** | yes | — | no | revert |
| `.cursor/plans/doctrine/03_decision_extraction_ledger.md` | Tier-0 decisions | integrator role | integrator | **assess only** — Gate-1b §13.2 proposes **zero** decision rows | likely **no change**; if Tier 4 is triggered a row becomes mandatory (§15.3) | yes | — | no | revert |
| **EXPLICITLY UNTOUCHED** | | | | | | | | | |
| all `contracts/**` · `supabase/**` · `lib/**` · `app/**` · all migrations · all schemas | canonical / code | domain owners | **nobody** | out of scope | **none** | — | — | **no** | n/a |
| `C4.6` · `REV-184` bodies | accepted L2 / signed-off | their owners | **nobody** | §15.1-D: no body edit | **none** | — | — | **no** | n/a |
| `C3.6C` · `C4.5` next-actions · `GRR-TASKD-INPUT` · Care Response-Seam Audit | open / inbound-designed | their owners | **not the integrator unilaterally** | bounded pointer only, under that surface's own gate | pointer **proposed**, not landed here | yes + **owner gate** | **owner gate required** | no | revert |
| **`.cursor/plans/doctrine/11_build_entry_gate_v0.md`** | Tier-0 gate contract | Build-Entry owner | **NOBODY — explicitly out of scope** | line 12: *"User/Knox approval required before any change to gate verdict semantics."* Binding `INS-HAZ` clause 4 as an admission rule is **plausibly Tier 4** (§11.1, §15.3) | **none** — routed to a Build-Entry activation review row instead | — | **User/Knox, separately** | **no** | n/a |
| `vercel.json` | code/config | repo owner | **nobody** | §17 | **none** | — | — | no | n/a |
| off-repo controlling-plan banner | off-repo | integrator role | **cannot** — path does not exist in this environment | environment limitation (`D0OPER-DEC-004`) | **none; report limitation** | — | — | no | n/a |
| `main` | control plane | Nick | **nobody without explicit landing authorization** (`L8`) | no unilateral escalation | **none** | — | Nick | no | n/a |

> **This preflight's own disposition — RESOLVED, no longer an operator choice (Knox `A1` condition 1).** It is **merged FIRST** into the parent, gets a catalog row, and closes as `integrated_via_parent_merge`. Leaving it optional would strand the governing execution plan as provisional and uncatalogued while the transaction it governs lands.

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
| **Agreement / party-position** | `08` | **DOES NOT EXIST — verified** (Gate 0 proposed it; it never landed. `REV-020` = AI model registry, `REV-177` = Federation recalibration — neither is this row) | **CREATE** as `open` | scoped at creation to **A-Q1a custody + A-Q1b substantive commitment + A-Q2 operative posture**, all generic | Gate-2 commitment taxonomy | Gate 2 output 4 | new `08` row + collision-free ID allocated at execution |
| **Gate-2 parent row** grouping A-Q12/14/15/16/17/18 | `08` | does not exist | **create ONE row** | `open`, `required_reviewer: user_knox_required`, with explicit closure criteria per A-Q | Gate-2 brief | **Gate 2 cannot close without an explicit disposition for each of the six** | `08` closure note enumerating six dispositions |
| **F3 operator slice** | FWREG | **`FWREG-018` already owns non-labor operator economics** — do NOT create a second row | **UPDATE `FWREG-018`** — see §11.3 for the required enumeration extension | `parked` w/ `promotion_trigger` = OPECON-G0 charter; **other six actor slices explicitly named out-of-scope for that lane** | OPECON-G0 | OPECON-G0 charter admission | FWREG row + AWP §6 build-entry retrieval |
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

### §11.2 The four conflict rows owed to `05`

Gate-1b §13.2 proposed three; **Gate 0 proposed a fourth.** All four are stated semantically now; collision-free IDs are allocated at execution.

1. **`DEC-027` ↔ `REV-160` currency** — a decided financing shape and the open row owning the same question have coexisted unreconciled for months; the decision is stranded.
2. **Accountability/GRR naming inconsistency** — the catalog propagated "retired" while `FWREG-009`, `WI14` and pre-spine Card 2 all still carry GRR, and Card 2 mixes both internally. **Not an Insurance question.**
3. **Seven-label / three-law economic-firewall scatter** — one concept carrying seven labels across the estate for three distinct laws.
4. **Overlapping committed coverage-capture surfaces with no declared authority relationship** — `payer_eligibility_documents` · `patient_insurance_details` · the three `patients.*` columns; no FK, no shared coverage identity, no source-authority precedence, divergent correction postures.

### §11.3 `FWREG-018` — the enumeration extension the routing actually requires

**Refinement beyond the ruling, because routing the slice wholesale would drop the real gap.** `FWREG-018` is explicitly **NON-LABOR** and enumerates a **payables/spend** scope: *AP/supplier settlement · procurement · non-labor COGS · media spend · operating budgets · general operating subledger*, plus the counterparty residual. F3's operator slice is *labor · inventory · OR/room capacity · **receivable · liquidity · opportunity cost***.

Mapping the slice against what is actually owned today:

| F3 operator-slice element | Current home | Action |
|---|---|---|
| labour cost | **BIZOPS** — already owned | no action; name as out of `FWREG-018`'s scope |
| inventory, procurement-adjacent COGS | **`FWREG-018`** — already enumerated | no enumeration change |
| **receivable · liquidity · cash position · capacity-as-economic-resource · opportunity cost** | **NOBODY.** Gate-1b §2 records BIZOPS explicitly disclaims *"receivables, liquidity, cash position, capacity-as-economic-resource, opportunity cost, or non-labor operator economics"* — and `FWREG-018`'s enumeration, being payables/spend-oriented, **does not name them either** | **⚠ THIS IS THE ACTUAL GAP.** The `FWREG-018` update MUST explicitly extend its enumeration to carry them, or they fall through the seam between a surface that disclaims them and a surface that never claimed them |

**Consequence: "route the F3 operator slice to `FWREG-018`" is correct in shape but insufficient as written.** The update must state, per element, which part is newly in scope, which was already enumerated, and which belongs to BIZOPS — otherwise the routing looks complete while the unowned residual quietly survives. That is the `DEC-027` failure mode reproduced one arc later.

### §11.1 `INS-HAZ-COVSURF` — the four landings that activate it

Verified from the Gate-0 carrier: the contract is **inert until all four land**, and *"until all four land, clause 4 is a recommendation and any consumer may ignore it."*

1. the **guardrail-digest row** for coverage-as-boolean / overwrite-on-check (§M(b));
2. the **`05` conflict row** for the overlapping surfaces;
3. the **`INS-HAZ-COVSURF` FWREG row** carrying clauses 1–4 **verbatim**;
4. a **Build-Entry note** binding clause 4 as an admission check.

Clauses 5 and 6 proposed by Gate-1b §7.4 extend it: no operative coverage view across the three surfaces, and no `patient_column` use for coverage/payer-identity/commercial-willingness attributes without an allowlist and an authority/temporal model.

> **★ REVISED DISPOSITION (Knox `A4`/Patch 4, applied — the prior revision was internally inconsistent).** The earlier text recommended landing **all four** while the write matrix **did not list `11_build_entry_gate_v0.md`** as a writable path. Those cannot both be true: item 4 cannot land without touching a file that was outside the matrix. Verified: **Build Entry Gate line 12 — *"Review gate: User/Knox approval required before any change to gate verdict semantics."*** Binding clause 4 as an admission rule plausibly changes gate-verdict semantics and is therefore **at least plausibly Tier 4**, which is out of scope for this transaction (§15.3).

**Resolution — land three, route the fourth:**

| Landing | Disposition in the parent transaction |
|---|---|
| **(i)** guardrail-digest row: coverage-as-boolean / overwrite-on-check | **LAND** (§16, one added row) |
| **(ii)** `05` conflict row: overlapping coverage surfaces | **LAND** (§11.2 row 4) |
| **(iii)** `INS-HAZ-COVSURF` FWREG row carrying clauses **1–6** (Gate-0's 1–4 verbatim + Gate-1b §7.4's clauses 5 and 6, labelled as the Gate-1b extension) | **LAND** |
| **(iv)** Build-Entry admission check binding clause 4 | **DO NOT LAND. DO NOT EDIT `11_build_entry_gate_v0.md`.** Create a dedicated **Build-Entry activation review row** in `08` under `user_knox_required` |

**Status after the carry — state it exactly, and do not overstate it:**

> **`preserved_and_routed · not_active_pending_build_entry_gate_review`**

This is honest, it is useful, it keeps the hazard discoverable and routed instead of inert-and-invisible, and **it keeps the parent transaction Tier 3.** What it does **not** do is make clause 4 enforceable — until the Build-Entry activation lands, **clause 4 remains a recommendation any consumer may ignore**, exactly as Gate 0 said.

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

**The four reports:** (1) care truth / disagreement / correction; (2) money / obligation / resource / economics; (3) external party / counterparty / agreement / Federation; (4) committed insurance implementation forensics.

> **★ RESOLVED — NOT A NICK TASK AND NOT A CARRY BLOCKER (Knox Patch 6, applied).** A prior Knox context stated it held and had read all four. **The current Knox context does not have them.** They were never supplied to any Opus context, and **they are not durable repository objects.** Therefore:
>
> - `raw_report_available_to_current_reviewers`: **no**
> - `challenge_attribution`: **`not_recoverable_from_durable_estate`**
> - **primary repository sources control** every Gate-1b finding — the carrier's own §0.5 already states *"No claim in this carrier rests on a helper report"*
> - **no verbatim appendix; no guessed helper attribution; no reconstruction**
> - **Nick is not asked to recover or reconstruct anything. This does not block the carry.**
>
> **This is a continuity defect in the review leg, recorded as such.** Two Knox contexts disagree about whether the reports were read, which is itself the reason no weight may rest on "the helpers found X." The Gate-2 provenance matrix keeps the `challenge_or_search_path_raised_by` column present but populated with `not_recoverable_from_durable_estate`, so the absence is visible rather than silently omitted.

**Sealed verbatim appendix: NOT recommended and NOT deferred — declined.** No raw exists in the durable estate, so its audit value cannot be assessed and a placeholder would violate the no-reconstruction rule.

---

## §14 — DISCOVERY PLAN (proposed, not landed)

### §14.1 Catalog rows

**Verification correction to Gate-1b §13.2.** It proposes *"One catalog row."* **That count is wrong** and must not be carried forward. Catalog convention verified in the live catalog: **narrative volumes and `HANDOFF_*` files both carry rows** (9 and 43 occurrences respectively), so every landed artifact gets one.

**Exact count: 11 rows.**

| # | Artifact |
|---|---|
| 1–5 | the five Gate-1a files (protocol · Phase-A raw · Phase-B raw · adjudication · handoff) |
| 6 | Gate-0 carrier |
| 7 | Gate-1b carrier |
| 8 | **this preflight** (merged first per `A1`) |
| 9 | Gate-2 brief |
| 10 | subordinate Tier-3 handoff |
| 11 | narrative volume 10 |

**Residual catalog enum debt is parked at `D0CTLG-REV-001`** — if any of the 11 rows cannot be typed under the current enum, record it against that row rather than extending the enum inside this transaction.

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

### §15.4 Closeout obligations — and WHICH document is the current checkpoint

> **★ CHECKPOINT STRATEGY — RESOLVED (Knox Patch 1, applied).** The prior revision created an Aug-8 handoff, updated the Aug-3 checkpoint, and said pointers should be "repointed" **without choosing which document becomes the live checkpoint.** That ambiguity was unacceptable, because the Aug-3 checkpoint owns the live Phase-A content-base row, the five-partition inventory, the integrator holder, and the two-reference boot state. Creating a competing current checkpoint would fork all four.

**Decision: the 2026-08-03 checkpoint REMAINS the current program checkpoint and the single owning state surface. It is amended in place.**

| Document | Role after the carry |
|---|---|
| `HANDOFF_2026-08-03_..._post_c4_4.md` | **CURRENT program checkpoint** · Tier-0 #15 target · owns live base pin, partition inventory, integrator holder, two-reference boot state · **amended in place** (gate-lineage row, base exception, integrator transfer) |
| `HANDOFF_2026-08-08_ins_g1b_carried_gate2_ready.md` | **subordinate Tier-3 continuity** · reached **through** Aug-3 §4.2 · **NOT** the Tier-0 #15 target · **must NOT duplicate** the live base pin or integrator state (§2.1 Single-source law) |
| `AGENTS.md` · read-graph #15 | continue naming **Aug-3**, with their embedded summaries synchronized |

This follows the estate's own precedent: the Aug-3 checkpoint was itself amended in place on 08-04 and 08-05 without minting a successor.

Per AWP §8 Checkpoint Closeout Rule, in the **SAME closeout commit**: the handoff · `AGENTS.md` · the read graph · and the controlling-plan banner must all be synchronized. **The off-repo banner does not exist in this environment** — the transaction must **report that limitation** rather than claim the repoint, per `D0OPER-DEC-004`.

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

### §16.3 Disposition — **THREE BOUNDED DISPOSITIONS** (Knox `A5`; my `D0TIER0-GRD-004` proposal REJECTED and withdrawn)

> **★ WITHDRAWN.** The prior revision recommended broadening **`D0TIER0-GRD-004`**. **Knox rejected it and the rejection is correct.** `GRD-004`'s *subject* is narrow and precise — a **protocol/runtime document becoming a second schema host by inlining schema content** (enum lists, field requirements, definitional taxonomies) from a canonical home. Broadening it to cover *every repeated semantic statement inside any document* would convert a precise guardrail into a catch-all, which is the failure mode a guardrail digest exists to avoid. **The mechanism matched; the subject did not.** `GRD-004` is **not touched.**

**Three bounded dispositions instead:**

**(1) Narrowly extend `D0CKPT-GRD-003`** — the correct home, because its **duplicated-state limb** is the law the AWP §2.1 Single-source rule came out of. Add the **intra-artifact** specialization only:

- multiple live status/restatement surfaces **inside one artifact** drift exactly like duplicated cross-artifact state;
- **one current-state surface per artifact**;
- a stale status summary **must be invalidated when the owning statement changes**.

`source_evidence`: Gate-1b carrier §0.5 (C45–C48, C51–C52, C56, C62) + narrative volume 10. `notes` → the AWP §2.1 Single-source law and the Gate-2 brief's one-state-surface constraint (§12).

**(2) Merge the financing-classification candidate into `D0-GRD-010`** — verified as *"Vendor-shaped substrate primitives… **No vendor canonicalization in primitives**,"* which is exactly the right home:

- classify financing arrangements by **obligor · refund destination · reversal physics · commitment physics**;
- **never** by `Cherry` / `CareCredit` / `Allē` / `Aspire` / vendor-name labels.

This also discharges Gate-1b §13.2's "one guardrail candidate, subject to dedup before minting" — **the dedup succeeds and no new row is minted.**

**(3) Add ONE new row: coverage-as-boolean / overwrite-on-check** — `INS-HAZ-COVSURF` landing (i), §11.1. This is a genuinely distinct hazard with no existing home.

**(4) Do NOT promote the broader lesson as a universal guardrail yet.** Preserve it in **narrative volume 10**, the **Gate-2 brief execution constraints**, and the **R9 correction lineage**:

> A semantic correction is incomplete until every active restatement, receipt, execution contract, state summary and downstream instruction depending on the withdrawn claim has been propagated or invalidated. Presence-only `grep`, correction-at-introduction-only, and multiple self-restated state summaries create false internal consistency.

**Rationale for parking it:** beyond-packet evidence currently proves **duplicated state** (§16.4), which disposition (1) captures. It does **not** yet prove the fully generalized semantic-propagation claim. Promoting the general form now would repeat the over-generalization `D0CKPT-GRD-003` itself warns about.

### §16.3a The Tier-3 obligation is DISCHARGED — stated explicitly so no auditor reads it as skipped

AWP §8 requires that a Tier 3+ narrative's timeless lessons **MUST** be extracted into `06` **in the same checkpoint**. **That obligation is discharged by dispositions (1), (2) and (3)** — one narrow extension, one merge, one new row — **not left blank and not deferred.** Disposition (4) is a **deliberate, recorded parking of the broader generalization with its own promotion trigger** (independent recurrence of the *generalized* form outside duplicated state), not an un-extracted lesson. The narrative volume must say this in those terms.

### §16.4 Evidence of recurrence BEYOND this packet — required by C61, and it exists

C61 set the bar at *"evidence of recurrence beyond this packet."* **That bar is met, and here is the evidence — not invented:**

1. **The Phase-A base pin drifted twice when copied.** `AGENTS.md` records that its pointer *"previously carried a stale `51ead01…` after the base rotated,"* and checkpoint §4.2 records that the value *"drifted twice when copied."* The AWP §2.1 **Single-source law exists because of that recurrence.** Different packet, different artifacts, identical mechanism: a value restated in a second location was not updated when the canonical one changed.
2. **`D0CKPT-GRD-003`** was extracted from the 2026-08-04/05 Phase-A arc and already names **duplicated state** as an observed failure — again a different packet.
3. **`DEC-027` / `REV-160`** — a decision recorded in May, never carried into the contract it governed, with the open-review row owning the same question still reading "tentative." Different mechanism (consumption rather than propagation) but the same root: **a correction that did not reach every dependent surface.**

**Conclusion: the recurrence bar C61 set is met — for duplicated state specifically.** That is precisely the scope of disposition (1). It is **not** yet met for the fully generalized semantic-propagation claim, which is why disposition (4) parks it. **No new universal row is minted, and C61's mis-targeted `GRD-043` pointer is retired rather than carried forward.**

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
- **NO SQUASH MERGE and NO REBASE MERGE at any point, including the final `main` landing.** Either would destroy the DAG ancestry on which `integrated_via_parent_merge` depends and would silently convert this into an exact-object materialization wearing a false provenance label. **Landing is fast-forward or ordinary merge only.** If `main` has moved, **STOP and re-run the proof** rather than rebasing.
- **no reset of `main` or the parent to any child head**
- **no tree replacement** — never materialize a child's whole tree over current state
- **no applying a two-tree (`git diff main branch`) comparison as a patch** — this is the operation that would have produced the 575 phantom deletions
- **no amending or rewriting child commits** — child history is immutable source
- **no landing on `main` without explicit Nick authorization** (`L8`)

---

## §19 — FINAL PREFLIGHT RECOMMENDATION

# `PREFLIGHT PASS — PENDING NICK INTEGRATOR TRANSFER AND EXECUTION AUTHORIZATION`

Knox adjudicated this preflight on 2026-08-08: **`PASS WITH REQUIRED PATCHES`.** All required patches are applied in this revision — §0 decision framing · assembly order and DAG-preservation rule (`A1`) · base-exception label (`A3`) · Gate-2 lineage (`A6`) · checkpoint strategy · write-matrix exactness (`A4`) · guardrail retarget (`A5`) · `INS-HAZ` split · reconnaissance closure · PR #7 preservation.

Three refinements were added beyond the ruling, each because compliance-as-written would have left a gap: the **`FWREG-018` enumeration extension** (§11.3), without which receivables, liquidity, capacity-as-economic-resource and opportunity cost fall between a surface that disclaims them and one that never claimed them; the **proof-scope label** (§5.2), because the recorded figures are a *three-branch* proof that must be re-run to cover PR #7; and the **explicit Tier-3 discharge statement** (§16.3a), so a future auditor sees the guardrail obligation as satisfied-and-parked rather than skipped.

**Five of the six decisions in §0 are now closed. Exactly one remains, and it is the only one Nick alone can supply:**

> **`A2` — explicit transfer of `PRESPINE-PHASEA-INTEGRATOR`.** The role has a named holder in a committed surface. Without the §8.2 receipt the executing thread has no authority over any of the nine shared surfaces, and the carry cannot begin regardless of any verdict on this document.

**Two known limitations, disclosed rather than resolved:** helper-report challenge attribution is `not_recoverable_from_durable_estate` (§13 — **not a Nick task, not a blocker**), and the off-repo controlling-plan banner cannot be repointed from this environment (§15.4).

**One open risk carried into execution:** if the read-graph work amends the Read-Graph **Operating Contract** rather than adding entries under it, or if `INS-HAZ` landing (iv) is later bound into the Build Entry Gate itself, that element becomes **Tier 4** and must be removed from this transaction absent separate canonization authority (§15.3).

**This document authorizes nothing. It executed nothing. `main`, PR #4, PR #5 and PR #6 are untouched.**

**STOP: `preflight_ready_pending_nick_knox_carry_authorization`**
