# v4 — REV-184: The Governed Resolution Lifecycle — Decision-State Reconciliation (CONVERGED)

Document type: `analysis` (C4-prep reconciliation; runs `08` `D0THES-REV-184`) · Authority: `analysis_nonbinding` (`GRD-036`) — feeds v4 spine/contract shaping; **no contract edits, no spine prose, no new scenarios.**
Status: **✅ SIGNED OFF (Nick + Knox, 2026-06-14) → `08` D0THES-REV-184 CLOSED.** §0 is the canonical output (read first); the Rounds below (§1–§R3.12) are the derivation/evidence/lineage. **The Governed Resolution Lifecycle is now a confirmed v4 spine-grade law (7 lines, §0.2); contract-edit field-set + state-machine routed to the C5 domain-contract-rewrite pass. Next step = the C4 authoring runway.**
Home: `08` `D0THES-REV-184` (flagship; blocks v4 spine sections touching decisions/orders/care-state).

## §0 CANONICAL OUTPUT (read first) — the REV-184 law, ownership map, and signoff checklist
*(This is the integrated result. It is NOT an addendum — it is the core finding. The §R3.x sections are its derivation.)*

### §0.1 The Governed Resolution Lifecycle Law (spine-grade; the v4 line)
> **Every recognized signal, problem, request, or candidate action — raised by ANY actor (human clinician · AI agent · protocol · team · external system) — resolves through one actor-agnostic governed lifecycle at the thesis-§8 authority gate between Sense and Act.** The resolution is computed against a **declared `world_model` / context snapshot** (OMNI's state is a *partial, time-stamped projection*; believed-state is a **candidate, not truth**), is **bounded by a `trust_horizon`** (authorized-autonomy ≤ trusted-horizon — shortened by staleness, uncertainty, irreversibility, and blast-radius), and may resolve to **act · no-act/not-indicated · defer · monitor · consult · dispute · decline · preserve-option · escalate-if-fails · uncertain · emergency-first · post-hoc-reconciliation.** OMNI **records the resolution lineage across actors and time without pretending its state is reality, or that every action originated inside its own gate.** Recognition ≠ ownership ≠ action ≠ intervention; non-action can be a committed decision; disagreement is an escalation signal; outcome later reads the frozen context, never rewrites it.

### §0.2 Named v4 spine lines (the law's load-bearing properties)
1. **governed-resolution-lifecycle** (the actor-agnostic §8-gate primitive) · 2. **non-action-as-commit** · 3. **blast-radius-keyed authority** · 4. **disagreement-as-escalation** · 5. **outcome-reads-original-context (never rewrites)** · 6. **world-model honesty** (`predicted_state = candidate, not truth`; OMNI participates in reality, does not source it) · 7. **`trust_horizon`** (authorized-autonomy ≤ trusted-horizon — *absorbs* verifiability + freshness + reversibility into one law).

### §0.3 Two orthogonal axes (do NOT merge into one enum)
- **`gate_holder_posture`** = WHO held the authority gate: `omni_mediated` · `omni_recommended_human_committed` · `external_authority_committed` · `emergency_first` · `out_of_band_action` · `unknown_gate_holder_pending_reconciliation`.
- **`world_model_trust`** = WHAT OMNI knows: `current` · `stale` · `partially_unknown` · `degraded` → feeds `trust_horizon`. (Stances like `defer_due_to_stale_context` / `await_PACU_signout` are *stances driven by this axis*, NOT gate-holder values. `degraded_mode` = a threshold where the ordinary sensing/authority loop is impaired enough to constrain resolution — NOT every stale context.)

### §0.4 Ownership map (pattern + thin interface over EXISTING primitives — no god-object)
**CNS** owns the resolution RECORD + LIFECYCLE + GRAPH (generalize `cns_decision`; process-state, NOT truth) · **RBAC** owns the authority / blast-radius / reversibility / autonomy gate (`risk_tier` + the autonomy-ladder composition) · **CM** owns truth + commit (adoption) · **OFC** owns obligations RESULTING from a stance (not the stance) · **D5** occurrence/`movement_state` + **P35** = high-priority **freshness inputs** (freshness itself = a read off **`source_authority_map`**, C3.6) · **REV-174** outcome-link (reads frozen context) · **D7** + `trace_lineage` proof. All field names are **candidate contract-pass fields, not final schema** (ratify at C5 contract-edit).

### §0.5 SIGNOFF CHECKLIST — ✅ ALL CONFIRMED (Nick + Knox, 2026-06-14)
- [x] **§8-gate framing** — the governed-resolution layer is the missing Decide layer between Sense and Act.
- [x] **Pattern + thin interface, NOT a god-object** (and NOT cns_decision-bolt-on-alone, NOT clinical-only).
- [x] **Actor-agnostic** (human + AI + protocol + team + system = `DEC-034` made concrete).
- [x] **CNS owns record/lifecycle/graph** (process-state-not-truth guard).
- [x] **RBAC owns authority/blast-radius/reversibility/autonomy gate.**
- [x] **OFC owns obligations-from-stance only** (Knox correction).
- [x] **world-model honesty** (predicted_state = candidate-not-truth; OMNI ≠ reality).
- [x] **`trust_horizon`** (authorized-autonomy ≤ trusted-horizon).
- [x] **`gate_holder_posture`** axis (clean: authority-source values only).
- [x] **out-of-band reality / post-hoc reconciliation** branch (the OR/transfusion/CPR/ET law).
- [x] the 7 spine lines (§0.2) carried into v4; field-set + state-machine deferred to C5 contract-edit.

---

---

> ## ⚠️ READ-ORDER GUARD (for the C4 / v4 agent)
> **§0 above is the CANONICAL output and supersedes everything below.** §1–§R3.12 are the **derivation / lineage / evidence** of how §0 was reached, captured round-by-round — they intentionally preserve **earlier-round language that §0 has since superseded** (e.g., Round 1's narrower "clinical-decision-record" framing and "extend-vs-sibling" fork; Round 2/3's "OMNI-mediated vs OMNI-observed" binary, later split into the two axes). **Read §0 first. Treat the rounds as history. Do NOT resurrect superseded round language** — the canonical terms are: governed-resolution-lifecycle · world-model honesty (`predicted_state = candidate, not truth`) · `trust_horizon` · `gate_holder_posture` × `world_model_trust` · the §0.4 ownership map.

## §1 What ALREADY EXISTS in canon (grounded — read 2026-06-14, not from memory)
- **`cns_decision` (CNS contract §82, LOCKED spine DL-14/DL-16):** a **first-class decision RECORD** — triggers · context-snapshot · rule+model versions · **alternatives** · reason. Plus `candidate` (proposal, not commit) · `resolver` (deterministic policy) · `orchestration_run`/`orchestration_action` · **`trace_lineage`** (`source_event → candidate → resolver → commit`, append-not-mutable). **→ ~60% of the "decision record" already exists.**
- **Authority-by-action-class (CNS §90):** CNS MAY use low-authority evidence for **routing / prioritization / suppression / review-candidate** (workflow); clinical ACTION requires **provider adoption (Clinical Memory) / owning-domain commit / policy gate.** → **commit-authority is NOT CNS; CNS records + proposes, the domain commits.**
- **`clinical_assertion` (Clinical Memory):** append-only diagnostic-TRUTH ("patient has CHF") with `source_authority` · `clinical_adoption_state` (not_adopted→adopted/rejected/**superseded**) · context envelope · evidence_refs · current-memory view. "Provider assessment is just another assertion at highest authority that supersedes lower." → **truth + its supersession already modeled — but truth ≠ decision.**
- **Already-present neighbors:** `care_obligation`/follow-up (OFC), `care_state_view`/blocker (D5, C3.5 P26), `evidence_record` (D7), `ai_decision_log` (C3.5 net-new ≈ cns_decision+trace), `outcome_intelligence`/RWE (`REV-174`, C3.6/C3.7), C3.5 **Chain A act-loop** (`signal → candidate → authority-gate → act/event → proof → obligation → learn`).

## §2 The GAP (what canon does NOT yet model — the REV-184 delta)
1. **Stance taxonomy incl. NON-ACTION-AS-COMMIT.** `cns_decision` records *a* decision + alternatives, but there is no first-class **stance** set: treat-now · monitor/watch · defer-pending-data · defer-to-specialist · consult/co-manage · escalate-if-fails · **no-intervention/not-indicated (a committed decision, not "nothing")** · not-owned-by-this-service · patient-declined · preserve-downstream-option · carry-as-diagnostic-uncertainty. (C3.7 `honest_null_terminal` is the trial-access slice of this.)
2. **Cross-actor DECISION lineage/supersession over time.** CM supersedes *assertions* (truth); `cns_decision` is append-not-mutable but there's no modeled chain of *decisions on the same problem* where actor-B's stance overrides actor-A's, where **non-change is itself a reopen trigger** ("the last team punted; still time now"; surgeon-A-no → surgeon-B-yes; previous-provider-no / I-say-yes, incl. async/group-practice).
3. **Honest rationale-class.** No field distinguishing *why* a non-textbook-optimal action was chosen: clinical-optimal · patient-preference · disposition/system-constraint (wait-for-rehab-qualification) · futility-but-values · defensive · resource/access-driven · uncertainty-watchful. This is what makes grey-zone medicine **legible without lying or auto-judging** — and ties to the firewall (distinguishes an honest disposition tradeoff from incentive masquerading as clinical).
4. **Outcome-linkage WITHOUT retroactive judgment.** No clean "freeze what-was-known-then → link later outcome (read by `outcome_intelligence`)" such that reasoning-quality ≠ decision-correctness is preserved (mirrors C3.6 amend-not-overwrite + source-authority).

## §3 Round-1 RECOMMENDED position (grounded; NOT final)
**The parent is most likely a canonical PATTERN/LAW + a small extension — NOT a new god-object, NOT "CNS owns everything."** Specifically:
- **PATTERN/LAW (canonical):** the **governed resolution-loop = the COMPLETION of C3.5 Chain A.** Chain A modeled only the *act* branch; the resolution-loop adds the **non-act / defer / dispute / uncertain / superseded / outcome-tested** branches. Name it like a chain/law, not an owned object. (Candidate names: `governed_decision_lifecycle` / `action_resolution_state` / `problem_resolution_graph` — resolve in Round 2.)
- **RECORD:** realize via **`cns_decision` + a stance/rationale-class/lineage extension** (it already holds triggers/context/versions/alternatives/reason/trace) — OR a sibling `clinical_decision_record` that `cns_decision` references (THE FORK, §4).
- **TRUTH stays in CM** (`clinical_assertion`); **COMMIT-AUTHORITY stays domain/CM-adoption** (unchanged candidate≠commit law); **OBLIGATION/REOPEN in OFC** (`care_obligation`); **OUTCOME in `REV-174`**; **EXPLANATION via Messaging/Surfaces**; **PROOF via D7 + trace_lineage.** → it's a **cross-contract SEAM threaded by an extended decision record**, not a new domain.
- **Three separable facets** (do NOT collapse, do NOT mint 3 objects): (a) decision **RECORD** (durable fact a stance was taken); (b) decision **LIFECYCLE** state-machine (proposed→pending→deferred→escalated→committed→rejected→superseded→reopened→resolved→outcome-linked — CNS orchestrates); (c) decision **GRAPH/lineage** (across actors+time — where the messy reality becomes analyzable).

## §4 THE FORK (the real decision needing Nick+Knox — Round 1 does not decide it)
**Is the clinical management-decision RECORD (a) an EXTENSION of `cns_decision`, or (b) a SIBLING `clinical_decision_record` that `cns_decision` references?**
- **(a) Extend `cns_decision`:** reuse the existing record + trace + alternatives; add stance/rationale-class/lineage. **Pro:** no new object, leverages locked spine. **Con:** `cns_decision` is *orchestration/workflow*-scoped; loading it with clinical-management-stance + adoption-adjacent semantics risks overloading CNS scope (CNS is "scoped, not omniscient" — §36) and blurring the CNS-records-vs-domain-commits line.
- **(b) Sibling `clinical_decision_record`:** a care-domain decision object (owned where? CM-adjacent? a new thin decision layer?) that *references* `cns_decision` (workflow) + `clinical_assertion` (truth) + `care_obligation` (follow-up). **Pro:** keeps CNS orchestration-scoped; clean home for stance/rationale/lineage/non-action-commit. **Con:** a new object (proliferation risk) + an ownership question (CM? a new "care decision" layer? CNS-Meta?).
- **My lean (weak, Round 1):** **(b)-flavored but minimal** — a thin care-decision record that *composes* existing primitives, because non-action-as-commit + rationale-class + cross-actor lineage are clinical-governance semantics that don't belong inside an orchestration record. But this is exactly what I want trifecta pressure on; (a) may win if Round-2 contract reads show `cns_decision` already stretches here.

## §5 Does it complete Chain A? — YES (Round 1)
Chain A (`signal → candidate → authority-gate → act/event → proof → obligation → learn`) is the **act branch**. REV-184 adds the **resolution branches**: `… → authority-gate → {act | no-act | defer | monitor | consult | dispute | declined | preserve-option | uncertain} → stance-record → obligation/reopen-triggers → outcome-link → learn`. Framing it as "Chain A was under-specified (act-only)" grounds it in canon and avoids a free-floating new top primitive.

## §6 Worked examples → mapped to the structure (proves it handles the messy reality)
- **A→X, A→Y (new info), human-C→Z, actor-D→no-action:** 4 decision RECORDS on one problem; LIFECYCLE = X superseded(new-evidence)→Y superseded(authority)→Z committed→D defers; GRAPH = the actor+time chain w/ reasons; D's "no-action" is a *committed stance*, not absence.
- **TRT requested, labs don't support:** stance=`no-intervention/not-indicated`; rationale-class=`clinical-optimal`; reopen-trigger=`repeat-labs + symptoms`; patient-explanation required; NOT a failed conversion.
- **CHF recognized, diuresis deferred (AKI):** assertion(CHF, CM) + decision(stance=`defer-pending-data`, rationale=`clinical-optimal/safety`, reopen=`renal-recovery`).
- **Surgeon vs internist disagree:** two decision records, different actors/authority, GRAPH preserves both + reasoning; later outcome read by `REV-174` WITHOUT retroactively crowning either (reasoning-quality ≠ decision-correctness).
- **Grey-zone (IV-abx-for-rehab-window; futile bypass):** stance=`act` but rationale-class=`disposition/system-constraint` or `futility-but-values` — **legible, not hidden, not auto-flagged as error**; firewall reads rationale-class to ensure it's not incentive-masquerading-as-clinical.
- **Trial honest-null:** stance=`no-intervention` subtype `honest_null_terminal` (C3.7).

## §7 What v4 must carry NOW vs contract-edit-later
- **NOW (v4 spine law):** the resolution-loop completing Chain A + the law (§8) + the 4 facets (record/lifecycle/graph + stance/rationale/non-action-commit/outcome-link). The spine must NAME this so decision-bearing sections build on it.
- **LATER (contract-edit, post-spine):** the §4 fork resolution (extend-vs-sibling), the exact field-set + owning contract(s), the lifecycle state-machine spec, integration with CM adoption + OFC obligations + REV-174.

## §8 The law to preserve (verbatim into v4)
> **A mature action substrate models not only actions, but stances, deferrals, disagreements, non-actions, uncertainty, reopen-triggers, and later outcome pressure. Recognition ≠ ownership ≠ action ≠ intervention; non-action can be the correct committed care decision.**

## §9 ROUND-1 decision points for Nick + Knox (the back-and-forth) → then ROUND 2
**Decide / pressure these before Round 2:**
1. **The §4 fork:** extend `cns_decision` vs sibling `clinical_decision_record`? (my weak lean = sibling-minimal).
2. **Pattern vs object:** is the parent a canonical *law/chain* (my lean) or a single owned *object*? (god-object risk if object).
3. **Name** (low priority): `governed_decision_lifecycle` / `action_resolution_state` / `problem_resolution_graph` for the parent; `clinical_decision_state` for the clinical child (Nick's pick).
4. **Scope of the cross-actor GRAPH:** how far does v4 commit now vs defer (the disagreement/discordance + reasoning-quality-vs-outcome is real but composes — do NOT mint `recommendation_discordance` separately).
5. **Confirm: does this stay a v4 SPINE LAW + a contract-edit-later**, or does it warrant its own mini-pressure-test first?

**ROUND 2 (after your input) will:** do the targeted reads I have NOT yet done — **OFC `care_obligation`, D5 `care_state_view`, `outcome_intelligence`/REV-174, RBAC authority-to-commit** sections (Round 1 grounded only `cns_decision` + `clinical_assertion`; honesty: the rest is arc-knowledge, not yet contract-verified) — then resolve the fork, draft the field-set + lifecycle state-machine, and propose the exact v4-spine-line + contract-edit-later split. **Do NOT close `08` REV-184 without Nick/Knox.**

---

# ═══ ROUND 2 — widen the center of gravity (Nick + Knox 2026-06-15) ═══
**Mandate:** do NOT bolt a broad discovery onto a stale clinical-record slot. Widen first, resolve the fork second. Reconcile against (a) thesis §8 Sense/Act loops + authority gates, (b) C3.5 Chain A, (c) the **video-corpus decision-mechanics**, (d) the contracts, (e) C3.7 `honest_null_terminal` as ONE subtype. Grounded in reads done this round: OFC (`care_obligation`), CNS (`cns_decision`/authority-by-action-class), CM (`clinical_assertion`/adoption), thesis §8, EVRUN-000002 registry.

## §R2.1 The canonical anchor — this is the RESOLUTION layer AT the §8 authority gate
Thesis §8 is the operating model: **Sense loop** (`source→observation/assertion→adoption→context`) and **Act loop** (`request→authorize→order→fulfill→output→review/release→follow-up`, owned by OFC), **bridged by authority gates (human commits; NASA/Houston go/no-go).** §8 names the gate but has **no first-class home for the resolution STATE produced at the gate** — especially **non-act resolutions** (defer/monitor/decline/no-intervention/dispute), which never enter the Act loop (nothing is ordered) and are not Sense-truth (not an assertion). **That hole is REV-184.** The governed-resolution-lifecycle is the missing **DECIDE layer at the §8 authority gate** — it completes BOTH §8 (the loops) AND C3.5 Chain A (the act-only branch). This is the canonical frame; everything below hangs on it.

## §R2.2 It is ACTOR-AGNOSTIC — and that is the deep unification (the broad answer Nick pushed for)
The resolution at the gate is taken by an **actor ∈ {human clinician · AI agent · protocol/rule · care team · external system}**. The SAME gate governs human and AI decisions → this is **`D0THES-DEC-034` (AI = cross-cutting substrate axis, not domain #12) made concrete**: human and AI actors resolve problems under ONE governance model. It is also the pattern for **multiple agents acting over time at different scopes/lenses** (Nick's framing) — and for OMNI's own **Build-OS** (agents building OMNI) and even this **trifecta** (Opus proposes → Nick relays → Knox reviews → commit). One resolution substrate; many actor types; many scopes (operator-CNS / Patient-CNS / Network-Governance). **The clinical lens (`clinical_decision_state`) and the AI-runtime lens are TWO specializations of the SAME lifecycle** — the AI lens is already richly built (video corpus), the human-clinical lens is the under-built one.

## §R2.3 What the VIDEO LESSONS add — the hidden adjacent concepts (Nick was right)
The EVRUN-000002 registry (decision-mechanics from the AI corpus) reveals dimensions Round 1 missed — each a promote-candidate / NEW-spine:
1. **Blast-radius-keyed authority/autonomy ladder** (reg 104, "autonomy ladder keyed to blast-radius — *what if the actor is wrong* — NOT capability"): the **authority required to commit a stance scales with blast radius**, not with how capable the actor is. The §8 authority gate is calibrated by blast-radius. *(Directly governs "may an AI agent commit this stance autonomously?")*
2. **Verifiability → no-eval-no-autonomy** (reg 51, `task_verifiability_class`): a resolution may be made autonomously only if its correctness is verifiable; unverifiable high-stakes stances require human commit. **Disagreement = a HITL/escalation SIGNAL** (multi-actor discordance ROUTES to review — the GRAPH is *active*, not just recorded).
3. **Agent = model + governed harness; "harness = where authority lives"; "sandboxing contains agency, it does not grant authority"** (reg 47, 54): the actor model. An AI actor's resolution is governed by its harness; **containment/reach ≠ authority-to-commit.** Sharpens the authority dimension for non-human actors.
4. **Recovery / self-heal / rollback** (reg 25 closed-loop "artifacts→read→observe→suggest→gated-commit→self-heal"; reg 41 agent-profile `rollback`): the **reopen/supersede dimension is also recovery** — a resolution can be rolled back / self-healed on new info.
5. **Eval the context-packet, not just the answer** (reg 51): outcome/learning reads the **decision-CONTEXT** (what was known then), not just the result — exactly the "reasoning-quality ≠ decision-correctness / freeze-what-was-known" requirement, video-confirmed.
6. **Minimum-sufficient mechanism** (reg 28, Build-OS law): explicit **god-object guard** — realize the lifecycle with the least mechanism meeting correctness/authority/cost, not a mega-object.

## §R2.4 The ENRICHED dimension set (Round 1's 3 facets + the video dimensions)
RECORD · LIFECYCLE (state-machine) · GRAPH (lineage across actors/time) — **plus**: AUTHORITY-keyed-to-blast-radius · VERIFIABILITY-class (can it be auto-resolved?) · DISAGREEMENT-as-escalation-signal (active graph) · CONTAINMENT≠AUTHORITY (actor reach ≠ right) · RECOVERY/REOPEN/rollback · OUTCOME-reads-context (not-rewrite) · RATIONALE-CLASS (grey-zone legibility) · STANCE-taxonomy incl. non-action-as-commit.

## §R2.5 RESOLVING THE FORK (grounded) — it is "both/neither": PATTERN + thin interface, realized by existing primitives
Round 1's fork (extend `cns_decision` vs new clinical object) was **too narrow** — both options sit inside one contract's vocabulary. Grounded answer:
- **PARENT = a canonical v4 PATTERN/LAW** — the §8-gate governed-resolution-loop (completes Sense→[RESOLVE]→Act→Prove/Learn). Not an owned object. (Name candidates: `governed_resolution_lifecycle` / `action_resolution_graph`.)
- **+ a thin shared RESOLUTION-RECORD INTERFACE** (stance · actor+actor-type · authority(blast-radius) · evidence-snapshot · rationale-class · supersession/reopen · outcome-link), **realized by EXISTING primitives, not a god-object:**
  - **`cns_decision` (CNS)** = the orchestration / **AI-runtime** realization (already has triggers/context/versions/alternatives/reason/trace; add stance + rationale-class + the runtime dims).
  - **`care_obligation` (OFC)** = the realization for **non-act-but-tracked** stances (monitor/defer/recall/**exception** — OFC ALREADY owns "owed/due" lifecycle + "own-state-delegate-truth"; this is the natural home for defer/monitor/reopen, NOT a new object).
  - **`clinical_assertion` (CM)** = the TRUTH the resolution references; **commit-authority stays CM-adoption/owning-domain** (unchanged candidate≠commit).
  - **`clinical_decision_state`** = the care specialization; **`honest_null_terminal`** = the trial-access subtype.
  - **RBAC** = authority(blast-radius); **REV-174** = outcome-pressure; **D7** = proof.
- **Verdict:** NOT extend-cns_decision-alone (that conflates orchestration scope with the cross-actor/non-act care-resolution + would make CNS a junk drawer); NOT a clinical-only object (too narrow); NOT a god-object (video "minimum-sufficient"). **A canonical pattern + a thin interface realized across cns_decision / care_obligation / clinical-specialization, threaded by trace_lineage.** This is reconciliation, not bolting-onto-stale.

## §R2.6 What v4 SPINE must carry NOW vs contract-edit-later
- **NOW (spine law):** §R2.7 law; the **§8-gate resolution layer** (completes the two-loops); **actor-agnostic** (human/AI/protocol/team/system — the AI-axis unification); the enriched dimensions (esp. **blast-radius authority, verifiability→autonomy, disagreement=escalation-signal, non-action-as-commit, outcome-reads-context**); the pattern-not-god-object discipline. The spine must NAME this so decision/order/care-state/AI-runtime sections build on ONE resolution substrate.
- **LATER (contract-edit pass):** exact field-set + which contract realizes which facet; the lifecycle state-machine; how `care_obligation` hosts non-act stances; RBAC blast-radius authority encoding; REV-174 outcome-link; reconcile with D5 `care_state_view`.

## §R2.7 The LAW (refined — supersedes the Round-1 statement)
> **Every recognized problem / signal / candidate — raised by any actor (human, AI agent, protocol, team, system) — must have a governed RESOLUTION at the authority gate between Sense and Act, whether it resolves to act, no-act, defer, monitor, consult, dispute, decline, preserve-option, or uncertain. The resolution is actor-agnostic, authority-scoped by blast-radius, autonomy-gated by verifiability, reopenable, recoverable, outcome-testable (outcome reads the original context, never rewrites it), and non-overwriting. Recognition ≠ ownership ≠ action ≠ intervention; non-action can be the correct committed decision; disagreement is an escalation signal, not noise.**

## §R2.8 Narrowed decision points for Nick + Knox (Round 2 → Round 3/contract-pass)
1. **Confirm the §8-gate framing** (resolution layer completes the two-loops) as the v4 spine home. *(My strong recommendation.)*
2. **Confirm pattern+interface (not god-object, not cns_decision-only).** *(Strong rec, now video-grounded by "minimum-sufficient" + "agent=model+harness".)*
3. **Confirm actor-agnostic** (human + AI under one resolution model = `DEC-034`). *(Strong rec — this is the broad answer.)*
4. **How much of the enriched dimension set is a NAMED spine line now** vs deferred (blast-radius-authority + verifiability-autonomy + disagreement-signal are the strongest candidates — they're already NEW-spine promote-candidates in the registry: autonomy-ladder reg 104, eval-ladder reg 51).
5. **Does this now warrant its own short v4 sub-pass** (it's plausibly a top-5 v4 spine law), or carry as the spine's decision/resolution section + contract-edit-later?
6. Remaining reads for the contract-pass: D5 `care_state_view`, `outcome_intelligence`/REV-174 full, RBAC blast-radius, and the registry autonomy-ladder (104) + eval-ladder (51) + agent-anatomy (106) full rows.

---

# ═══ ROUND 3 — contract-pass (grounded ownership map + field-set + lifecycle) (2026-06-15) ═══
**Confirmed by Nick + Knox (Round 2 sign-off):** §8-gate framing ✓ · pattern + thin interface (not god-object) ✓ · actor-agnostic ✓ · 5 named spine lines ✓ · Round-3 contract-pass (not new scenarios) ✓. **Knox correction adopted:** `care_obligation`/OFC owns obligations that **result from** a stance — NOT the stance itself, and NOT the whole non-act branch. Round 3 reads done: D5, RBAC, REV-174 (CNS §181), + registry reg104/51/47/54/106.

## §R3.1 Parent — CONFIRMED
**A v4 canonical PATTERN/LAW: the governed RESOLUTION LIFECYCLE at the thesis §8 authority gate** (completes Sense → **[RESOLVE]** → Act → Prove/Learn, and C3.5 Chain A's act-only branch). Not an owned object. `clinical_decision_state` = care specialization; `honest_null_terminal` = trial-access subtype.

## §R3.2 Ownership map (grounded — who owns which facet; the answer to "who owns the record")
| Facet | Owner | Grounding |
|---|---|---|
| **Resolution RECORD + LIFECYCLE + GRAPH** | **CNS** — generalize `cns_decision` to actor-agnostic + stance-carrying | CNS already owns `cns_decision`/candidate/resolver/orchestration_run/`trace_lineage`/escalation+suppression + "records/proposes; domains commit" (§82/§90). **CNS owns process-state, NOT truth/commit** (same own-state-delegate-truth discipline as OFC) → no god-object, no junk-drawer. |
| **AUTHORITY / blast-radius / autonomy gate** | **RBAC** | already has `permission_atom.risk_tier` (low→critical_break_glass) + 4-tier attestation + `system_actor_atom_grant` (non-human/AI) + AI-author grants + consent-gate + "AI proposes/humans commit". The **autonomy-ladder = a NEW COMPOSITION** (risk_tier × verifiability × attestation × containment), not a new owner. |
| **TRUTH the resolution references + COMMIT** | **Clinical Memory** (`clinical_assertion` + adoption/supersession) | commit-authority stays CM-adoption/owning-domain (unchanged candidate≠commit). |
| **OBLIGATIONS resulting from a stance** | **OFC** `care_obligation` (+ D5 `care_episode` continuation-triggers for longitudinal monitor) | Knox correction: obligations-from-stance only. Stance "no-intervention, no-follow-up" → **no OFC obligation** but still a recorded resolution. |
| **Occurrence / encounter context** | **D5** (`service_occurrence`/`encounter_view`/`care_episode`) | the resolution references occurrence context; D5 ≠ the resolution home. |
| **OUTCOME (reads context, never rewrites)** | **REV-174** Operating-Intelligence projection | CNS §181: REV-174 = analytics-projection sweep; outcome-link feeds it; decision-context frozen in the record. |
| **PROOF / audit** | **D7** + RBAC `audit_events` + CNS `trace_lineage` | immutable, hash-chained. |
| **EXPLANATION** | Messaging / Surfaces | patient/provider-facing rationale. |

## §R3.3 Thin shared RESOLUTION-RECORD interface — minimal proposed field-set (to ratify at contract-edit, NOT now)
`resolution_id` · **`stance`** (act · no-act/not-indicated · defer · monitor · consult · co-manage · escalate-if-fails · decline/patient-declined · preserve-option · uncertain) · `problem_or_candidate_ref` · **`actor` + `actor_type`** (human · ai_agent · protocol · team · external_system) · **`authority` / `blast_radius`** (→ RBAC risk_tier + attestation tier) · `verifiability_class` (→ autonomy gate) · `evidence_snapshot` + `context_packet_ref` (frozen; CNS §9.1) · **`rationale_class`** (clinical-optimal · patient-preference · disposition/system-constraint · futility-but-values · defensive · resource/access-driven · uncertainty-watchful) · `supersedes` / `superseded_by` (decision lineage) · `reopen_trigger[]` · `obligation_links[]` (→ OFC) · `truth_links[]` (→ CM) · `outcome_link` (→ REV-174) · `proof_ref` (→ D7 + trace_lineage). **Minimum-sufficient (reg28); do not over-build.**

## §R3.4 Lifecycle state-machine
`proposed → pending → {deferred | escalated | committed | rejected} → superseded → reopened → resolved → outcome-linked`. (CNS orchestrates; commit transition gated by RBAC + domain/CM adoption; reopened can re-enter from any non-terminal state on a `reopen_trigger`; recovery/rollback = reopened+superseded per video reg25/41.)

## §R3.5 Graph rule (the active part — disagreement is a signal, not noise)
Multiple actors/agents/protocols/teams **may hold conflicting stances on the same problem concurrently.** The record preserves all (actor + authority + rationale + time). **Disagreement = an escalation/HITL SIGNAL** (video reg51: multi-model/multi-actor discordance routes to human review), NOT a merge-to-one. "Last team punted; conditions unchanged → now act" = a reopen_trigger on non-change. Reasoning-quality ≠ decision-correctness: outcome (REV-174) reads the frozen context, never rewrites the original stance.

## §R3.6 The autonomy/authority gate function (the AI-actor bridge — name it)
**May actor X autonomously commit stance S?** = f(blast_radius[RBAC risk_tier] × verifiability_class × actor attestation/capability × containment). Video laws: **no-eval-no-autonomy** (reg51); **authority keyed to blast-radius not capability** (reg104); **containment ≠ authority** ("sandboxing contains agency, does not grant authority", reg54); **agent = model + governed harness, harness = where authority lives** (reg106). High-blast-radius + low-verifiability ⇒ must escalate to human commit. This is one gate function serving human + AI actors = `DEC-034` made operational.

## §R3.7 v4 spine carries NOW vs contract-edit LATER
- **NOW (named v4 spine lines — Knox-confirmed 5 + the container):** (0) the **actor-agnostic governed-resolution lifecycle at the §8 gate** (the primitive); (1) **non-action-as-commit**; (2) **blast-radius-keyed authority**; (3) **verifiability-gated autonomy**; (4) **disagreement-as-escalation**; (5) **outcome-reads-original-context, never rewrites**.
- **LATER (contract-edit pass, post-spine):** ratify the §R3.3 field-set + §R3.4 state-machine in CNS (generalize `cns_decision`); RBAC autonomy-ladder composition (risk_tier × verifiability × attestation); OFC obligation-from-stance link; REV-174 outcome-link; D7 proof. Each through its domain review gate.

## §R3.8 Remaining for Nick + Knox (before closing REV-184)
1. Confirm **CNS owns the resolution record/lifecycle** (generalizing `cns_decision`) with the process-state-not-truth guard. *(My grounded rec.)*
2. Confirm **RBAC owns the autonomy/authority gate** (risk_tier + the new autonomy-ladder composition). *(My grounded rec.)*
3. Confirm the 6 named spine lines (§R3.7) — or trim.
4. Confirm OFC = obligations-from-stance only (Knox correction). *(Adopted.)*
5. Then REV-184 → **ready_for_signoff**; contract-edit work happens in the C5 domain-contract-rewrite pass, NOT now.

## §R3.9 PATCH — Reality Freshness / Out-of-Band Action (the acute-care branch; Knox + Opus 2026-06-15)
Round 3 was too clean (`signal → candidate → resolution → action`). Real acute care: `signal → candidate → reality changes / external emergency action occurs → OMNI learns late → prior candidate superseded → state reconciled → next decision waits for fresh context`. This is a **core resolution-lifecycle condition, not a feature** (Nick's OR/transfusion/CPR/ET cases; grounded in C3.5 `movement_state`/`degraded_mode`/P35 + C3.6 `source_authority_map`).

**(A) The deeper law (Opus — broader than freshness):** **OMNI is a PARTICIPANT in reality, not its source. Its state is a lagging, partial projection; the substrate must be honest about its own staleness and blindness.** Every resolution/truth/state carries an epistemic status (current-best · known-stale · known-unknown). Ties to `source_authority_map` (who is the authority on this fact *now*) + `degraded_mode` (OMNI operating without current reality).

**(B) The resolution law (Knox):** **a governed resolution is only as valid as the context snapshot it was made against.** If material reality may have changed, the correct stance may be defer · refresh-context · escalate · await-signout · or proceed-under-emergency-authority with **post-hoc reconciliation.** **External actions can supersede OMNI candidates.**

**(C) NEW first-class AXIS (Opus — who held the gate):** **OMNI-mediated** (OMNI's authority gate fired) vs **OMNI-OBSERVED / reality-first** (a different authority — emergency / external actor / device / team — fired; **OMNI is recorder + reconciler + auditor, NOT the gate**). The transfusion/CPR/ET cases are **OMNI-observed.** OMNI must NOT assume every care action waits for its lifecycle (the EMR-fantasy C3.5 warned against).

**(D) Sense-loop coupling (Opus):** freshness is a **Sense-loop latency** property, not only a Decide field. "Off-floor to OR" = a known **Sense blackout window**; "await PACU signout" = a **Sense reacquisition gate.** The resolution DECLARES its Sense-snapshot; a stale Sense ⇒ every resolution on it is suspect.

**(E) Actor-agnostic / AI-native (Opus — think bigger):** "reality outran the actor; an external event committed against a stale world-model" is the **classic autonomy/multi-agent problem** (stale read · optimistic-concurrency · compensation · reconcile — Waymo/agent-runtime corpus). Same law for an AI agent as for a surgeon. Reinforces: this is a v4 substrate law, not an acute-care feature.

**Field-set additions (reuse-grounded):** `context_snapshot_id` (→ CNS `context_packet`, already non-canonical §9.1) · `context_freshness_state` (current/stale/unknown) · `last_authoritative_update_at` · `known_unknowns` · `care_setting`/`location`/`movement_state` ref (→ C3.5 D5) · `out_of_band_event_refs` · `external_commit_source` (→ P35) · `emergency_authority_basis` (→ RBAC break-glass / post-hoc attestation) · `post_hoc_reconciliation_state` · `supersession_reason ∈ {new_info | higher_authority | external_action | stale_context | emergency_override}`.

**Stance / lifecycle additions:** `await_state_refresh` · `await_handoff`/`await_PACU_signout` · `defer_due_to_stale_context` · `proceed_under_emergency_authority` · `superseded_by_external_action` · `post_hoc_reconciled`.

**Examples:** (1) OMNI recommends 5u pRBC; surgeon activates MTP, gives 10u → OMNI preserves its candidate, records the surgeon's committed stance/action under (OMNI-observed) authority, ingests transfusion/administration events, marks prior candidate `superseded_by_external_action`. (2) ED pulseless arrival; CPR/intubation under emergency authority before any formal resolution → OMNI reconciles events/proof/authority-basis/outcome post-hoc. (3) Off-floor to OR; floor decisions needing current physiology → `defer_due_to_stale_context` until PACU signout / device refresh. (4) Procedure before OMNI has operative facts → current state `partially_unknown`; OMNI blocks downstream decisions that require the missing operative facts.

**Ownership clarifications (extend §R3.2):** **CNS owns the record/lifecycle but does NOT own reality** — it does not require all real-world actions to originate inside OMNI; it records + reconciles out-of-band actions. **RBAC** owns authority when OMNI-mediated; emergency authority is recorded **post-hoc** with proof/attestation (break-glass). **D5 `movement_state` + P35 `external_capability` are REQUIRED INPUTS to context-freshness.** **`degraded_mode` (C3.5)** is the existing "OMNI operating without current reality" object — reuse it. OFC owns obligations created by the stance or the reconciliation, not the stance.

**Discipline:** reuse C3.5 `movement_state`/`degraded_mode`/P35 + C3.6 `source_authority_map` + CNS `context_packet`; **no new objects, no contract edits, no scenario batch.**

## §R3.10 Updated v4 spine lines (add to §R3.7) + the appended law clause
- **7th named spine line:** **reality-freshness / OMNI-participates-but-does-not-source-reality** (epistemic humility + the OMNI-mediated-vs-OMNI-observed axis + Sense-snapshot-declaration).
- **Appended law clause (extends §R2.7):** *…and a resolution is only as valid as the context snapshot it declares; OMNI participates in reality but does not source it; external/emergency authorities may act out-of-band and supersede OMNI candidates, to be reconciled post-hoc; when context may be stale the honest stance may be defer / await-refresh / await-handoff / proceed-under-emergency-authority-with-reconciliation.*

## §R3.11 PRECISION PATCH — refine §R3.9 (Knox + Opus + VIDEO sanity-check, 2026-06-15)
*Refines §R3.9 so a hard-won concept is not flattened into a binary or ad-hoc terms. **The video-registry sanity check found SUPERIOR canonical corpus terms — adopt them (Knox patch-pt 6: "use the canonical term").***

**VIDEO SANITY-CHECK RESULT (targeted EVRUN grep, NOT a rewatch — answers Nick's "recheck the videos: yes"):** the corpus already named better concepts for this exact problem:
- **`world_model` + "predicted_state = candidate, NOT truth"** (reg 124, consequence/world-model family) → the canonical root: OMNI maintains a world-model that lags reality; its believed-state is a *candidate*, not truth.
- **`trust_horizon` — "authorized autonomy ≤ trusted horizon" (forecast-N ⇒ act-≤N)** (reg 182, prediction-horizon→authority) → staleness/uncertainty shortens the horizon over which OMNI may act autonomously. **Subsumes + unifies** the Round-2 verifiability-autonomy + freshness lines.
- **Reversibility as a distinct risk axis; "find dependencies before irreversible commits"** (reg 184) → reversibility shapes the gate alongside blast-radius (10u MTP ≪ reversible than a lab order).
- **Bounded-autonomy control loop** `perceive→model+uncertainty→plan→exact-constrain→bounded-execute→observe→recover→supervise` (reg 184); **`post_action_observation` + stop/rollback** (reg 074); **structured intermediate representation between perceive & commit** (reg 049) → the medical-grade articulation of the §8 two-loop; *recover/observe = reconciliation*; the resolution record lives in the structured-intermediate-state.
- **Fail-safe degradation on disconnect** (reg 142) → grounds `degraded_mode`.

**PATCH 1 — TWO orthogonal axes (replace the §R3.9 "OMNI-mediated vs OMNI-observed" binary).** Knox's rename was right but his value-list mixed two axes. Split:
- **`gate_holder_posture`** (WHO held the authority gate — candidate values, not final): `omni_mediated` · `omni_recommended_human_committed` · `external_authority_committed` · `emergency_first` · `out_of_band_action` · `unknown_gate_holder_pending_reconciliation`. *(The flat "OMNI-observed" bucket is gone.)*
- **`world_model_trust`** (WHAT OMNI knows — the freshness/epistemic axis): `current` · `stale` · `partially_unknown` · `degraded` — feeding `trust_horizon` (authorized-autonomy ≤ trusted-horizon). *(Stances like `defer_due_to_stale_context` / `await_PACU_signout` are STANCES driven by this axis, not gate-holder values.)*

**PATCH 2 — the epistemic-humility law (sharpened, corpus-grounded):** *OMNI is not the source of reality. OMNI is a governed participant whose state is a **world-model**: a partial, time-stamped projection in which believed-state is a **candidate, not truth**. Every resolution declares the **freshness, source-authority, and gate-holder-posture** of the context it used, and acts only within its **trust-horizon** (authorized-autonomy ≤ trusted-horizon; shortened by staleness, uncertainty, AND irreversibility). When reality moves outside OMNI, OMNI reconciles via `post_action_observation` without pretending the action originated inside its own gate.*

**PATCH 3 — fields are CANDIDATE contract-pass fields, NOT final schema** (the §R3.9 field-set + the two axes above). Concept is settled; names ratify at the C5 contract-edit pass.

**PATCH 4 — freshness is broader than movement_state/P35.** D5 `movement_state` + P35 `external_capability` are **high-priority freshness inputs, NOT the whole model.** **Freshness = the update-state + source-authority of the *relevant facts* (a read off `source_authority_map`, C3.6)** — also fed by Observation feed-state, D7 evidence timestamps, CM adoption status, Messaging/signout, operator attestation, device latency, ADT/location, OR/PACU handoff, manual out-of-band reports.

**PATCH 5 — `degraded_mode` is a THRESHOLD, not the default.** Stale context is NORMAL (everything is always somewhat stale → handled by `world_model_trust` + trust-horizon). `degraded_mode` (C3.5) fires only when the ordinary sensing/authority loop is **impaired enough that resolution must be CONSTRAINED** (autonomy↓, human-commit↑, defer-by-default) — e.g. outage, lost feed, known blackout window.

**PATCH 6 — reversibility risk axis (corpus reg 184).** Add to the autonomy/authority gate (§R3.6): the gate = f(blast_radius × verifiability × **reversibility** × trust_horizon × actor-authority × containment). Irreversible high-blast-radius commits demand the highest authority + a dependency-check before commit.

## §R3.12 Updated spine lines (supersede §R3.10's 7th line)
- **7th line (upgraded):** **world-model honesty — `predicted_state = candidate, not truth`; OMNI participates in reality, does not source it** (corpus reg 124).
- **8th line:** **`trust_horizon` — authorized autonomy ≤ trusted horizon** (corpus reg 182); this **reconciles/absorbs** the Round-2 "verifiability-gated autonomy" line (verifiability + freshness + reversibility all shorten the horizon).
- **gate_holder_posture** + **reversibility** are sub-dimensions of the resolution record / authority gate, not standalone spine lines.

## Stop / authority
- `analysis_nonbinding` (`GRD-036`); Rounds 1–3 + §R3.9 + §R3.11 precision patch delivered; **no contract edits, no spine prose, no new scenarios.** The freshness branch is now: **two axes (gate_holder_posture × world_model_trust)** + **corpus-canonical terms (`world_model`/predicted_state-candidate-not-truth · `trust_horizon` · reversibility · bounded-autonomy control-loop · `post_action_observation`)** + fields-as-candidates + freshness-off-source_authority + degraded_mode-as-threshold. Video sanity-check: **DONE — corpus had superior terms; adopted.** `08` REV-184 → **in_progress (Round 3 + §R3.9 + §R3.11; → `ready_for_signoff` on Nick+Knox confirm of §R3.8 + the 7th/8th spine lines).** Do NOT close without Nick/Knox. Standing flag: git identity unset.
