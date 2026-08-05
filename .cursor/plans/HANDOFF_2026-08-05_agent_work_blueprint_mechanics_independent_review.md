# HANDOFF — 2026-08-05 · Agent Work Blueprint / AWP §2.1 mechanics — independent review packet

Document type: `handoff_or_readiness_gate`
Authority: `analysis_nonbinding`
Status: `independent_review_required · lane_launch_HELD · mechanics_bytes_FROZEN`
Domain(s): `architecture_governance`, `build_operations`
Lifecycle role: `bounded mechanics-review packet for a FRESH Knox and a FRESH Opus. NOT doctrine, NOT a new checkpoint, NOT a replacement Agent Work Blueprint, NOT a decision. It freezes current bytes and states the open questions so independent reviewers can adjudicate from repository evidence rather than from conversation.`
Source-of-truth relationship: `changes nothing. The current checkpoint HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md remains the program checkpoint; agent_work_protocol.md §2.1 remains the current binding text pending this review.`
Supersedes: `none` · Superseded by: `none`
Manifest action: `add_tier2 · no_new_route_needed` (reached through the current Aug-3 checkpoint)
Review gate: `user_knox_required`
Open review row: `D0THES-REV-212`

---

## §0 — Why this exists (one paragraph, no theatre)

The Phase-A lane mechanics were built and repeatedly corrected inside a single long working session. The **mechanical** results are sound and verifiable (see §1). The **semantic** results are not yet trustworthy: the 2026-08-05 generalization of `agent_work_protocol.md` §2.1 corrected one real defect (a false solo-vs-parallel binary) and introduced two new ones (trigger overreach, and a contradiction with the boot/routing surfaces). Rather than a fourth same-agent rewrite, the bytes are **frozen** and handed to **independent reviewers**. Nothing in this packet decides anything.

**Lane launch is HELD.** Insurance remains the operator's substantive priority but is **not** authorized to start.

---

## §1 — Live-state receipt (verified 2026-08-05)

| Object | Value |
|---|---|
| Repository | `ncrawf/main-app` |
| `main` | `a28befba4f2c4418bb2b7997895892e6827f44e2` |
| `agent_work_protocol.md` blob | `91e96317da13409cc013dd025f53659157dcc9b7` |
| `09_omni_build_os_layer_model.md` blob | `5438a768104f51bbce5852a12b9b033bde494aeb` |
| `10_omni_build_os_rollout_sequence.md` blob | `d2ad958de307e4b82c910a4186911addbcaa9651` |
| pre-spine map blob | `26eccb0c296d0384fa78d2dab29ab586e713a9fe` |
| Aug-3 checkpoint blob | `e2efdd1a1ba045e3bd075d8a774ba66bcd9cfe27` |
| `AGENTS.md` blob | `277567737eb1ed1e439a0aa6aa0110bb268302e7` |
| `04_manifest_read_graph.md` blob | `29fded41778ca3789cbdc45ab9e8145371f5cfe2` |
| `03_decision_extraction_ledger.md` blob | `728ef8456ad24fe04000f73329e03c2f56540b9a` |
| `06_guardrail_antipattern_digest.md` blob | `aeb3eea143151b12adaafa32cda0241ee267e3e0` |
| Relevant decisions | `D0CKPT-DEC-005` (under review), `D0CKPT-DEC-006` (method repertoire, separate) |
| Relevant guardrail | `D0CKPT-GRD-002` |

**Prepared lane branches — all byte-identical to the content base `f70ff3cbf007b9bd68bedec7c9dfb9365e9e6e05`, all empty, all `not_started`:**

| Relay key | Branch | Head |
|---|---|---|
| `CARE-TASKD-INPUT` | `analysis/care-taskd-input-state` | `f70ff3cb…` |
| `GRR-TASKD-INPUT` | `analysis/accountability-taskd-input-state` | `f70ff3cb…` |
| `INS-G0-MIXEDFIN` | `analysis/insurance-payer-oop-g0` | `f70ff3cb…` |
| `OPECON-G0-COUNTERPARTY` | `analysis/nonlabor-operator-economics-counterparty-g0` | `f70ff3cb…` |
| `C45-P2-ANCHORS` | `analysis/c4-5-phase2-anchor-verification` | `f70ff3cb…` |

**Empty-state proof:** none of the five declared lane output objects exists on `main` — `v4_taskd_input_state_receipt_care_2026-08-04.md` · `v4_taskd_input_state_receipt_grr_2026-08-04.md` · `v4_insurance_payer_oop_gate0_carrier_2026-08-04.md` · `v4_nonlabor_operator_economics_counterparty_gate0_carrier_2026-08-04.md` · `v4_C4_5_phase2_six_source_anchor_verification_2026-08-04.md`. **No lane work has started.** Reviewers must not re-pin, move, or write to any lane branch.

---

## §2 — Review corpus (read fully)

- `.cursor/plans/doctrine/agent_work_protocol.md` — **§2.1 in full**, plus §§2, 3, 5, 8, 9 as needed for interaction
- `.cursor/plans/doctrine/09_omni_build_os_layer_model.md` — **Layer 2** (incl. the Agent Work Blueprint subsection)
- `.cursor/plans/doctrine/10_omni_build_os_rollout_sequence.md` — **Step 5** (future tooling target)
- `.cursor/plans/HANDOFF_2026-08-03_pre_spine_portfolio_reconciled_post_c4_4.md` — **§§4.1, 4.1a, 4.2**
- `.cursor/plans/v4_pre_spine_sufficiency_and_task_d_reentry_map_2026-08-04.md` — **§§7, 7.1**
- `AGENTS.md` — the work-class table rows (parallel/multi-lane; major-arc intake) and the two sentences beneath it
- `.cursor/plans/doctrine/04_manifest_read_graph.md` — the two durable routes placed outside Tier-0 #15
- `.cursor/plans/doctrine/03_decision_extraction_ledger.md` — `D0CKPT-DEC-005`
- `.cursor/plans/doctrine/06_guardrail_antipattern_digest.md` — `D0CKPT-GRD-002`
- `.cursor/plans/doctrine/operator_context_and_collaboration_model.md` — review/relay rules

---

## §3 — Open questions (questions, NOT settled conclusions)

**1. Trigger overreach.** Current §2.1 says a durable partition — *own branch/worktree, own output object, or a named owner* — triggers §2.1, classification as `parallel_work_package`, **and an accepted launch envelope**. Does this turn nearly every ordinary branch into a formal package and impose unnecessary ceremony? Where is the honest threshold?

**2. Boot/routing contradiction (the live defect).** §2.1 now says one lane triggers it, but `AGENTS.md` routes §2.1 under the **parallel / multi-agent / multi-lane** work class, the durable read-graph route still uses **parallel-work** triggers, and `D0CKPT-DEC-005` / `D0CKPT-GRD-002` still describe the **Parallel Work-Package** contract. **The binding protocol and its discovery/control-plane surfaces no longer agree.** Which side should move?

**3. Core/overlay misclassification.** §2.1 currently labels as universal "CORE": accepted launch envelope · pinned common content base · read-only shared control surfaces · provisional-until-integrated status · parent integration transaction · named integrator + integrator-transfer law. A genuinely standalone lane may need **none** of the last three. What is truly universal vs conditional vs package-specific vs unnecessary?

**4. Misleading compatibility label.** `parallel_work_package` is retained and reinterpreted as "governed lane work" while asserting neither concurrency, independence, nor plurality. Preserve narrowly · rename coherently across all routing surfaces · split into multiple classifications · or drop the abstraction?

**5. Envelope shape.** §2.1 still carries "Parallel Launch Envelope" language and a large envelope schema after becoming a general contract. Is there a **minimal standalone-lane contract**, with a coordination overlay only when required, and proportional fields that keep ordinary bounded work light?

**6. Continuity vs coordination.** Replacement, takeover, branch continuity and source pinning can matter with **one** active lane. Shared-surface locking, sibling dependencies and cross-lane integration require **coordination**. Separate these **without** creating another rigid binary.

**7. Base-binding scope.** When are two-reference boot and post-acceptance base binding genuinely required? Do not assume every lane needs a content commit **plus** a later state-only commit **plus** branch rotation for prose corrections. **The six-plus re-pins in this arc are evidence to examine — not proof the mechanism is good, and not proof it is bad.**

**8. Agent Work Blueprint status.** `09` names it as a current/future artifact; **no such artifact exists.** Valid conclusions include: the capability lives entirely in `09` + AWP · a future machine-readable blueprint/manifest is warranted · another structure is cleaner. **Do not assume a new document must exist.**

---

## §4 — Known failure history (evidence, not blame)

Recorded so reviewers can test whether the current bytes still carry these tendencies:

- **Generalized from a single instance.** §2.1 was written from the five-lane Phase-A package, so it was framed as "the parallel contract" with a concurrency trigger; everything downstream inherited that.
- **False solo-vs-parallel binary** (created, then withdrawn 2026-08-05 — the withdrawal is what introduced items 1–3 above).
- **Improvised names and accidental synonyms** — a proposed `OMNI Governed Work-Package Execution` was rejected as a redundant alias; `lane worker` and `parent integration gate` were coined *in the same paragraph that forbade coining synonyms*, then removed in favour of the established `lane agent` and `parent integration transaction`.
- **Comparator prose scattered into instance documents** (map, checkpoint), then removed to the comparator registry and Step 5.
- **Repeated stale-SHA duplication** — the live base SHA was copied into prose beside its owning row and drifted **twice**; now single-sourced in one table row.
- **Six-plus lane-base rotations before any lane started.** Cheap while lanes are empty; the cost profile after a lane starts writing is untested.
- **Method-repertoire overbuilding then compression** — a 16-field schema with usage/effectiveness accounting was authored, found to have ~7 factually wrong rows, and the accounting was deleted rather than repaired (`D0CKPT-DEC-006`, separate from this review).
- **An absolute rule ("do not coin synonyms") placed in a controlling document**, later replaced with a judgment rule after operator objection to absolutes.

---

## §5 — Required test cases

Each reviewer must run the current bytes against **all ten** and state what the protocol actually requires in each:

1. **Simple bounded in-place task** — no special lane/package machinery unless materially useful.
2. **Standalone durable Insurance lane** — own branch/output/owner, no siblings active. What is the *minimum* continuity mechanics genuinely needed?
3. **`PRESPINE-PHASEA` as-is** — five prepared lanes, only Insurance active, shared future integration, dependencies may emerge, no compulsory concurrency.
4. **Connector permeability** — begins as one broad estate-recovery lane while Insurance is active elsewhere. Separate package or not? May later split into dependent lanes; may need cross-domain reintegration.
5. **Replacement agent** — takes over one existing lane without reopening the package or losing state.
6. **Two tightly coupled lanes** — separate ownership/output but **ordered** execution rather than simultaneous.
7. **Two unrelated packages** — running at the same time without being collapsed into one package.
8. **Shared-surface collision** — two lanes propose changes to the same control surface; coordination/integrator behaviour must be explicit.
9. **Standalone lane that may complete directly** — test whether an integrator and a parent integration transaction are genuinely necessary.
10. **Dead integrator / role transfer** — only where an integrator role actually exists.

---

## §6 — Operator intent (controlling review input — preserve this)

- A lane is a useful, **durable partition of work** — not an architecture boundary.
- **Package membership, activation, concurrency, coupling, dependency, collision risk and integration are separate dimensions.**
- Any lane may operate alone. Any lane may run while unrelated work is active elsewhere.
- Lanes may be independent, loosely coupled, ordered dependencies, or tightly coupled.
- Separate lanes may run concurrently, sequentially, or intermittently.
- A package may begin with one lane and later add / split / merge / pause / retire lanes.
- Work begins from the **broad estate and the real architectural question**.
- Source floors prevent omission but **do not bound inquiry**.
- Lane results remain provisional until reconciled **where reconciliation is actually required**.
- Work partitioning must **never** silently become OMNI ontology or bolt-on architecture.
- The operating model must stay clean enough for a capable agent to **think**.
- **Parallel capacity is a capability, never an obligation.**
- The goal is continuity, wider organization and safe integration — **not procedural theatre**.

---

## §7 — Required reviewer output

Each fresh reviewer works **read-only** and submits **independently, without coordinating** with the other:

1. simplest coherent conceptual model;
2. exact applicability trigger;
3. minimum standalone-lane contract, **if one is warranted**;
4. coordination-overlay trigger and fields;
5. replacement / re-entry mechanics;
6. whether `parallel_work_package` survives, changes, or disappears;
7. exact authority placement across `09` / AWP / `AGENTS.md` / read graph / checkpoint / package map;
8. clauses to retain, modify, move, demote, or delete;
9. ceremony and cognitive-load assessment;
10. migration plan from the current bytes;
11. verdict — **`KEEP_WITH_SMALL_PATCHES`** · **`MATERIAL_REWRITE`** · **`ROLL_BACK_AND_REDESIGN`**;
12. explicit disagreements with Nick, the current Opus, prior Knox, or repository doctrine.

---

## §8 — Hard stops for this review

Reviewers and any agent booting from this packet must **not**: launch any lane · write to or re-pin any lane branch · rotate the content base · edit source floors or lane cards · edit AWP / `09` / `10` / the map / the repertoire / the guardrail digest during review · claim the mechanics are settled · claim they are irreparable · start Task-D, C3.9, the spine, C5 or any proof program.

**Stop condition:** both independent submissions returned, with verdicts, to Nick.

<!--
type: handoff_or_readiness_gate · authority: analysis_nonbinding
status: independent_review_required · lane_launch_HELD · mechanics_bytes_FROZEN
decides nothing; freezes bytes and states questions. reached via the current Aug-3 checkpoint (no new read-graph node)
open review: D0THES-REV-212 · decision under review: D0CKPT-DEC-005 · guardrail: D0CKPT-GRD-002
-->
