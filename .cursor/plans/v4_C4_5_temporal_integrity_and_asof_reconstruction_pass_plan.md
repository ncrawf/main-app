# v4 — C4.5 Temporal Integrity & As-Of Reconstruction — Reconciliation Pass Formulation Plan (GATE-0 CHARTER)

Document type: `plan_or_roadmap` (arc charter — Gate-0 deliverable; preserves the trifecta arc + the provisional constitution; list + purpose, not spine prose)
Authority: `analysis_nonbinding` — propose-only pre-spine architecture pass (`GRD-036`/`GRD-043`). Binds NOTHING. Every name/law herein (T-xx, layer names, "Temporal Integrity", "Governed As-Of Reconstruction") is PLANNING VOCABULARY — NOT a minted primitive, domain, schema, or service, and NOT a promoted axis.
Status: `gate_0_charter_accepted · full_pass_not_started · not_promoted`
Domain(s): architecture_governance, cns_orchestration, cross_cutting, ai_substrate, care_operating_model
Lifecycle role: charter + gate map + gem-preservation vessel for the Temporal Reconciliation Pass that ELEVATES/UNIFIES the scattered temporal depth (`FWREG-015`) toward a **candidate** named cross-cutting spine discipline — subject to anchor verification, Task-D falsification, and an explicit admission verdict — WITHOUT a Time domain, a universal canonical timeline, or a truth-owning temporal authority.
Source-of-truth relationship: ELEVATE/UNIFY (do NOT re-derive). Governing-row + registry-level anchors VERIFIED this session; **source-local mechanism claims remain pending the Phase-2 packet reads.** Anchors: `D0THES-REV-198` (carries the elevation/unification NEED — names carriers `EVSRC-2026-000122` / `EVSRC-2026-000124` / `EVSRC-2026-000165` / `EVSRC-2026-000182` / `EVSRC-2026-000184` / `EVSRC-2026-000185` + `D0THES-REV-184`) · `D0THES-REV-200` (carries the physical `temporal_truth_pair` effective+recorded + replayability foundation, stranded in the LEGACY `data_layers_reconciliation_v1.md`) · `EVSRC-2026-000182` (forecast/prediction-horizon→authority SOURCE carrier; synthesized as `EVRUN-2026-000002` registry concept 182 — **NOTE: distinct from open-review `D0THES-REV-182`, which is data-platform retention/deletion/provenance, not forecast-horizon**) · `D0THES-REV-184` (frozen decision context · trust_horizon · world-model honesty · non-action-as-commit) · C4.3 Law 10.1 + O1–O22 (correction/continuity oracles) · Care Operating Model capture §2/§4/§7. Feeds Task D (`v4_C4_2`, adversarial lens) + v4 spine (candidate cross-cutting discipline) + C5 (field/lifecycle realization) + Build-OS (replay/no-hindsight conformance).
Supersedes: none (activates the planning of `FWREG-015`)
Superseded by: none
Manifest action: `add_tier2` (catalog row + read-graph consult route #9k added same pass)
Review gate: `user_knox_required`
agent_read_rule: `consult_if_routed`

---

## §0.0 Acceptance receipt (2026-07-19)

**`gate_0_charter_accepted`.** **Nick** — operator acceptance (A-plus sequencing · Plan-mode-first · this charter). **Knox** — byte-level acceptance of the full 196-line patched charter (`ACCEPT` after the one source-ID correction); architecture Gate-0 accepted, no remaining objection. **Date:** 2026-07-19. **Reviewed version:** the ACCEPT_WITH_REQUIRED_PATCHES 196-line revision + this source-ID correction (`D0THES-REV-182` → `EVSRC-2026-000182` for the forecast-horizon carrier; full-ID normalization). **Nonpromotion posture:** binds nothing (`GRD-036`); no Time domain; no schema; no spine prose; Reactor untouched; `EVRUN-2026-000012` checkpoint NOT repointed. **Next temporal action:** the six-source anchor micro-pass (§9 Phase 2), on operator go. **Task-D amendment remains GATED on that verification** (§8). **Registered:** `D0THES-DEC-038` (`03`) · catalog row · read-graph #9k · `FWREG-015`.

---

## §0 CURRENT STATE + HARD STOPS (read first)

- **Reconciled current state (verified this session against the committed estate — Knox review #1):**
  - `EVRUN-2026-000012` is **`analysis_closed · depth_preserved · routed · not_promoted`** — its `_07` closeout landed (checkpoint `4f2873f`; closeout commit `6a74485`), catalog row reads "Gates 0–7 CLOSED 2026-07-19". **Its analysis is DONE; nothing to "finish."** Its outputs are routed to Task-D per `_07 §7.6`.
  - **DRIFT FLAGGED (not silently papered over):** the current checkpoint `HANDOFF_2026-07-19_taskd_interim_checkpointed_evrun12_active.md` line 12 still says *"NEXT ALLOWED ACTION = finish EVRUN-000012."* That prose is **stale relative to the run's own `_07` closeout** — best read now as the run's DOWNSTREAM obligations (Task-D consumption + owed catalog land), not its analysis. A one-line handoff correction is warranted but is a **separate operator/checkpoint-closeout transaction** (not part of this charter).
  - `Task-D` (`v4_C4_2`) is **interim-population-checkpointed · no §7 verdict · still required pre-spine** (`v4_C4_2A/B/C`).
  - Post-EVRUN pre-spine queue is **OPERATOR-CONTROLLED** — no agent infers the next item.
- **This authored the Gate-0 charter + the Provisional Temporal Constitution v0 ONLY.** The full pass is NOT started. No constitution promoted, no declaration matrix built, no oracle suite authored, no schema, no folders, no Time domain, no as-of service.
- **Propose-only** (`GRD-036`); binds nothing.
- **Sequencing LOCKED at A-plus** (§9): full pass runs **after Task-D, before v4 Spine Draft 0**; but **Task-D may not close without applying the provisional temporal adversarial lens** (§8), and the lens attaches **only after the Phase-2 source verification accepts it** (Knox #10). Post-pass reopens ONLY temporally-affected Task-D conclusions.
- **Outer checkpoint NOT repointed** — parallel operator-activated pre-spine input; mirrors the C4.4 pattern.
- **Reactor untouched/frozen.** C3.8 / C4.3 / EVRUN-000007-008 are INPUTS, not reopened.
- **Two-planes discipline (`D0THES-GRD-002`)**: names constitutional LAW + reconstruction SEMANTICS; does NOT freeze physical schema (C5/Build-OS).
- **Falsifiability (Knox #3): A-plus controls SEQUENCE + SERIOUSNESS + default-candidate-placement — it does NOT pre-promote the axis.** The pass may legitimately conclude the laws stay distributed with no standalone axis, that one law is wrong, or that the axis is narrowed/rejected (§10 admission verdicts).

## §1 Why this is authorized now (not a detour)

1. **`FWREG-015`'s trigger is "Nick opens the Time-in-OMNI arc" — Nick opened it (2026-07-19).** Its instruction: *ELEVATE/UNIFY existing depth — do NOT re-derive.* This charter obeys that.
2. **Anchor verification (governing rows + registry anchors verified; source-local mechanisms pending Phase 2):**
   - `D0THES-REV-198` (`v4_C4_spine_watch_list.md`): *"temporal substrate discipline — ELEVATE/UNIFY the existing depth [124/182/184/165/122/REV-184], do NOT re-derive."* Carries the elevation/unification NEED and names the scattered carriers.
   - `D0THES-REV-200`: the physical bitemporal `temporal_truth_pair` (effective + recorded) + replayability foundation — EXISTS but **in the LEGACY layer** (`data_layers_reconciliation_v1.md` / system-map 1K/1O/1H/1R–1V); must be carried to vNext, not re-invented weaker. *(Attribution corrected per Knox #9: `temporal_truth_pair` originates in REV-200, not REV-198.)*
   - `EVSRC-2026-000182` (forecast/prediction-horizon→authority SOURCE carrier; synthesized as `EVRUN-2026-000002` registry concept 182): the horizon-bounds-authority carrier. *(Corrected per Knox byte-review + Opus repo-verification 2026-07-19: the forecast-horizon carrier is the source `EVSRC-2026-000182`, NOT open-review `D0THES-REV-182` — that row exists but is data-platform retention/deletion/provenance. `FWREG-015` itself carried the same mislabel; flagged for a separate fix.)*
   - `D0THES-REV-184` (SIGNED-OFF): frozen decision context · trust_horizon · world-model honesty · non-action-as-commit.
   - `C4.3` Law 10.1 + O1–O22 + 24/24 mutation catches: the backward/correction half, design-validated (paper discrimination, not runtime proof).
3. **A constitutional axis cannot be bolted on after the spine.** If time becomes a named cross-cutting discipline (candidate peer to §A Trust, §B AI — the estate already treats it as a candidate third discipline, `late_builder_gap_register` row P "…like the time-axis"), it must be a **pre-spine input**. Hence A-plus (§9).

## §2 The unique OMNI claim this pass exists to preserve (and test)

> **OMNI does not merely remember events in order. It preserves the divergence among reality, evidence, knowledge/exposure, adopted meaning, authority, intent, execution, and outcome over time — then composes those histories on demand WITHOUT letting the composition become the truth.** (Trifecta-converged framing, 2026-07-19 — a claim to be *tested*, not assumed.)

Sharpened by the trifecta:
- **Time and authority are DISTINCT disciplines, jointly evaluated for every consequential reconstruction or action** (Knox #1 — NOT one collapsed axis; specimen-collection-time and payment-settlement-time are not actor-scoped, and much of authority is not historical).
- The differentiator is **native + normative supply, NOT raw representability** (Knox #2): a sufficiently expressive event-sourced/temporal DB/ontology *could be configured* toward actor-scoped knowledge-time; OMNI's claim is that the healthcare-specific composition (domain history × actor exposure × source authority × clinical adoption × consent/delegation/licensure × decision-time context × care-action authority × proof × selective reopening) is **supplied, enforced, tested, and replayed as operating law**. "Structurally cannot" is retracted as an overclaim; Task-D tests native-vs-configurable-vs-custom-vs-absent.

## §3 The trifecta arc (preserved — Opus + Knox + Gemini, 2026-07-19)

**Opus opening move:** verified the anchor (`D0THES-REV-198` / `D0THES-REV-200` / `EVSRC-2026-000182` + `FWREG-015`) rather than authoring from a relayed summary; confirmed "embryonic, not absent."

**Knox thesis (the "temporal braid"):** several diverging timelines (reality / evidence-knowledge / authority / intent-commitment / execution-delivery / effect-outcome / forecast); the several meanings of "true at X"; as-of query; forecast≠plan≠commitment≠obligation≠occurrence≠outcome; horizon narrows authority; no-hindsight replay; effective-time authority; first-class temporal uncertainty; **no Time domain / no universal canonical timeline / no truth-owning temporal authority**; bounded Temporal Reconciliation Pass with 4 outputs; C4.3 property/mutation method.

**Opus 3 next-order additions (accepted + refined by Knox):**
- **(A) Exposure/knowledge-history capture is the deeper seam upstream of the composer** → distributed producer ownership + shared publication/coverage contract (NOT one central owner); **exposure ≠ knowledge** (eligible→available→delivered→displayed→viewed→acknowledged→referenced→used→reliance→attested-understood are distinct; unknown cognitive reliance stays unknown).
- **(B) Consequential forecasts must be FROZEN, not reconstructed** (forward twin of frozen decision context) → only ABOVE a consequential-composition threshold (do not persist every transient prediction forever).
- **(C) "predicted ≠ owed"** (forward twin of before≠because) → a prediction is evidence, not duty; obligation arises only through authorized policy/resolution/plan/accepted commitment; a prediction may SATISFY a declared trigger; time may MATURE an already-created recurring obligation (but time is neither actor nor authority — T-13).

**Knox 5 corrections to Opus (all accepted on merits):** (1) time/authority distinct-but-jointly-evaluated; (2) strike "incumbents structurally cannot"; (3) persist-vs-reconstruct instead of N persistent world-models; (4) as-of composer = spine-name the FUNCTION, not an object/service; (5) weight forward (~60/40) but not a robotics arc. **+ "before ≠ because"** (anti liability-hallucination). **+ naming:** *Temporal Integrity* (candidate axis) · *Governed As-Of Reconstruction* (function) · *Governed Temporal Epistemics* (deep sub-layer) — "Reality" rejected (OMNI has source-attributed partial evidence, not objective reality; avoids a future "reality service").

**Gemini independent review (review pressure, not primary authority — reviewed the relayed thesis, not the source packet):** (G1) temporal god-brain paradox → Knox: federated truth ownership + domain-local semantics + governed non-authoritative composition; physical topology OPEN; **+ no false total order**. (G2) prediction horizon → the primary temporal AUTONOMY gate (not the sole system-safety primitive); composed-horizon (T-14). (G3) **multi-dimensional data tax** → the Minimum Temporal Envelope (§6) + over-modeling as a first-class falsifier.

**Knox review of this charter (ACCEPT_WITH_REQUIRED_PATCHES, 2026-07-19):** current-state reconciliation (§0) · falsifiability (§0/§10) · anti-centralization sharpening (T-11) · T-10/13/15/16/21 tightenings + T-22 · envelope kind/basis · matrix arithmetic + Polaris/Agent-Runtime deep · full identifiers · §11→accepted · 03-row-now/Task-D-lens-after-Phase-2 · bounded commit — all applied in this revision.

## §4 Provisional Temporal Constitution v0 (Task-D adversarial-lens form)

*Status: working-plan candidate; nonbinding; NOT a domain/schema/service/finished spine section. To be re-verified against the actual source packets in the Phase-2 anchor micro-pass (§9) BEFORE it becomes a formal Task-D amendment.*

- **T-01 — Temporal meanings do not collapse.** occurred · observed · reported · received · recorded · effective · adopted · authorized · decided · scheduled · executed · delivered · effect · forecast time are distinct whenever domain semantics require them.
- **T-02 — Later recording ≠ later occurrence.** A fact recorded at T2 may be effective at T1; OMNI may update its retrospective reconstruction of T1 but must never pretend it was known/authorized at T1.
- **T-03 — Domain history remains domain-owned.** Canonical temporal state + correction history stay with owning domains; cross-domain historical/current/forecast views are governed projections, not replacement truth stores.
- **T-04 — "Current" is a defensible computation** over validity, freshness, source authority, adoption, contradiction, supersession, instrumentation health, external unknowns, purpose — NOT the newest-timestamp row.
- **T-05 — Every reconstruction declares its temporal question** (≥ current-operative · historical-as-now-reconstructed · OMNI-known-as-of-T · actor-exposure-as-of-T · clinically-adopted-as-of-T · authority/policy-as-of-T · decision-context-replay · plan/obligation-as-of-T · forecast-as-authored-at-T).
- **T-06 — Exposure ≠ knowledge.** access-eligible → available → delivered → displayed → viewed → acknowledged → referenced → used → reliance → attested-understood are distinct; no cognitive-knowledge claim without supporting evidence.
- **T-07 — Before ≠ because.** occurred-before / correlated / influenced / relied-upon / necessary-dependency / sufficient-cause / causality-unknown remain distinct; temporal adjacency never silently becomes blame.
- **T-08 — History preserved; operative views may change.** Correction/supersession/withdrawal/reinterpretation change the operative view without erasing what was recorded/exposed/decided/executed.
- **T-09 — Replay forbids hindsight leakage.** Decision-time replay uses only evidence/exposure/authority/policy/models/context within the declared cutoff; later evidence shown separately as retrospective context, never smuggled into the original basis.
- **T-10 — Persist occurrences; reconstruct views (owner-adopted outcomes only).** *(Knox-patched.)* Persist consequential source events, domain commits, required exposure evidence, authority changes, decision and forecast bases, actions, occurrences, deliveries, corrections, and **owner-adopted outcome/effect observations**. **Derived interpretations remain projections unless an owning authority commits them.** Reconstruct views (current state, actor-scoped as-of context, assembled timelines, cross-domain projections). Do NOT create persistent complete world-models per actor, nor a universal derived-outcome store.
- **T-11 — Governed as-of reconstruction owns nothing.** *(Knox-patched — the sharp god-object rule.)* It pins query purpose · cutoff · audience · authority scope · versions · coverage · instrumentation health · uncertainty. It owns no domain truth, commits no mutation, and performs no correction. **Derivative materializations or caches are permitted only when purpose-scoped, versioned, invalidatable, reconstructable from domain-owned histories, and incapable of becoming a canonical timeline or commit source.** (Spine-names the FUNCTION, not an object — Knox #4.)
- **T-12 — Future semantic roles do not collapse.** possible-future · scenario · forecast · recommendation · resolution · plan · commitment · obligation · order · reservation · execution · outcome are distinct; no universal lifecycle implied.
- **T-13 — Predicted ≠ owed; time is not an actor.** *(Knox-patched.)* Prediction is evidence, not duty. An obligation arises through authorized policy, resolution, plan, or accepted commitment. A prediction or passage of time may SATISFY a declared temporal trigger on an already-authorized obligation; the owning contract + authorized controller advance its state. **Time itself is neither actor nor authority.**
- **T-14 — Horizon bounds authority (composed).** `permitted_action_horizon ≤ min(state_trust_horizon, forecast_reliability_horizon, authority_validity_horizon, policy_validity_horizon, capability_health_horizon, supervision_horizon)`; consequence/irreversibility/uncertainty/blast-radius may only SHORTEN it. (Architecture relationship, not locked math.)
- **T-15 — Execution revalidates the minimum-sufficient mutable reality + authority.** *(Knox-patched.)* At execution, revalidate the minimum declared action-critical facts + authority bases required by the governing contract (not a full world reread). When a required current source is unavailable or instrumentation is degraded, the action narrows / defers / reauthorizes / escalates under an explicit degraded posture.
- **T-16 — No single actor owns the COMPOSED future.** *(Knox-patched.)* Each goal, forecast, plan, commitment, obligation, and constraint retains an explicit owner, authority, and horizon. Cross-principal composition may coordinate them but may not silently subsume them into one sovereign master plan.
- **T-17 — Temporal uncertainty is first-class.** exact · estimated · interval-bounded · before/after · disputed · unknown · unobservable are legitimate; silence / missing telemetry / no-new-record ≠ stability.
- **T-18 — Reopening is selective and continuity-preserving.** New info reopens only lifecycles materially dependent on the changed semantics; surviving commitments/obligations stay visible and owned; no responsibility silently disappears.
- **T-19 — Decision quality ≠ realized outcome.** Later outcome evidence can reopen/improve future decisions without rewriting what was reasonably known/believed/authorized earlier.
- **T-20 — External temporal state is honestly incomplete.** Transport ACK ≠ accepted custody; external receipt ≠ use; absence of returned evidence ≠ no impact; external state unknown until evidenced.
- **T-21 — No false total order; preserve the ordering basis.** *(Gemini/Knox-patched.)* Where clock skew / delayed ingestion / offline work / federation latency / external unknowns prevent exact ordering, preserve the partial order, the source clock or temporal basis, and ordering confidence. **Exact chronology is a conclusion requiring evidence, not a display convenience.**
- **T-22 — Reconstructability is not surveillance authority.** *(Knox-added — the privacy counter-law to T-06 + the exposure-publication contract.)* Temporal + exposure evidence is captured only under a declared purpose, versioned coverage obligation, minimum-necessary policy, access boundary, and retention/deletion rule. OMNI must represent incomplete exposure evidence honestly; it may not "solve" uncertainty by recording every human interaction indefinitely.

## §5 The four boundary decisions (Knox-accepted at Gate 0 — see §11)

1. **Exposure history — distributed ownership + shared publication/coverage contract; NO central owner.** Producers own emitted lineage/exposure evidence; Runtime Operations owns instrumentation health; the contract + E&V profile define required publication coverage. Matrix (candidate): Messaging (delivery/bounce/receipt/interaction) · Surfaces (rendered/displayed/interaction telemetry, minimization-bound) · D7 (disclosure/artifact-access) · RBAC/audit (authorized/sensitive access) · CNS (context-assembly/candidate-routing trace, NOT facts) · Agent Runtime (model/tool/context exposure lineage) · Federation (cross-boundary transport + returned counterparty evidence) · each domain (its state consumed in a consequential op) · Runtime Ops (instrumentation active/degraded/absent) · E&V (tests declared coverage is met). **Bounded by T-22.** Field sets / event classes / exact homes → C5.
2. **Governed as-of reconstruction = spine-named FUNCTION, not a spine-minted object/service** (T-11). Candidate query context (semantic, not locked names): `as_of_time · knowledge_cutoff · actor_or_audience · purpose · authority_scope · operator_scope · policy_version_posture · external_evidence_cutoff · reconstruction_logic_version`. **C5 may realize via domain-local resolvers / a read-only projection-composition service / hybrid fan-out / query libraries / replay bundles / non-authoritative caches / materialized temporal projections / patient-facing timeline surfaces — none of which may become an independent truth source, a correction authority, a universal mutation surface, or an unversioned cache treated as fact.**
3. **Declaration matrix — thin universal coverage (21 homes) + a deep-trace set (17 homes).** Universal thin row: native domain-time KIND + basis (§6) · recorded/system time · validity interval/applicability · freshness/expiry posture · correction/supersession behavior · future-plan/forecast/obligation role (if any) · as-of reconstruction requirement · required pinned versions · required exposure/lineage publication · **which object families are temporally consequential + why** · unresolved temporal gap. **Universal set (21):** Identity · Intake · Observation · Clinical Memory · D7 · D3 · D5 · OFC · D6 · Messaging · RBAC · Federation · Settings · CNS · BIZOPS · Platform · Accountability · Agent Runtime · Operating Intelligence · Surfaces/projections · **Polaris**. **Deep-trace set (17):** Identity · Observation · Clinical Memory · D7 · Messaging · RBAC · Federation · CNS · D3 · D5 · OFC · D6 · Platform · Accountability · Settings · **Agent Runtime** · **Polaris**. **Platform's row splits into E&V / Release / Runtime** (deployed ≠ activated ≠ exposed ≠ adopted ≠ acted-upon is itself a temporal law). Polaris = admissibility/capability/authority/trust-horizon projections must be temporally honest though Polaris owns no truth. **No contract rewriting in this pass.**
4. **Evidence sweep — two-stage.** Stage A (pre-Task-D, bounded six-source anchor verification; §9 Phase 2) · Stage B (post-Task-D broader bounded reconciliation sweep). Not a new EVRUN wave.

## §6 Four-layer separation + the Minimum Temporal Envelope (anti data-tax)

Every artifact of the full pass sorts into exactly one layer (prevents vague doctrine AND premature schema freeze):
- **L1 Constitutional laws** (T-01…T-22) → v4 spine.
- **L2 Query/projection semantics** (as-of modes §7 + governed as-of reconstruction function) → spine names; C5 realizes.
- **L3 Domain declarations** (the thin posture matrix §5.3) → per-contract, gated; each contract **declares which of its object families are temporally consequential + why** (else "every consequential record" is unenforceable).
- **L4 Physical realization** (bitemporal schema, event history, indexes, caches, replay perf; **elevate `D0THES-REV-200` out of legacy into vNext**) → C5 + Build-OS.

**Minimum Temporal Envelope (Gemini/Knox — reject "15 columns on every row"):** every consequential canonical record declares ONLY —
1. recorded/system time (when OMNI durably recorded the state);
2. **native domain-time KIND + basis** — instant · local civil date/time · date-only · duration · interval · recurrence · anchor-relative · estimated-interval · source-clock — with timezone/calendar/jurisdiction basis **where semantically required** — OR an explicit "recorded-time-only" declaration; *(Knox #7 — a timestamp is not always the right temporal form; tz/calendar/jurisdiction/original-local-expression sometimes matter clinically + legally);*
3. version/supersession lineage;
4. temporal applicability (point/interval/ongoing/estimated/disputed/unknown/n-a);
5. freshness/expiry posture.

Additional clocks (observed/reported/adopted/authorized/decided/scheduled/executed/delivered/effect/forecast/exposure/policy-effective) become mandatory **only where domain semantics require**. **Law: temporal dimensionality is declared by domain semantics, not universalized by schema fashion.** Acceptance criterion: the design must NOT require every record to carry every axis, ordinary reads to become replay queries, or a universal cross-domain temporal transaction.

## §7 As-of query modes + forward semantic chain

**As-of modes (min):** current-operative · historical-as-now-reconstructed · OMNI-known-as-of-T · actor-exposure-evidence-as-of-T · clinically-adopted-as-of-T · authority/policy-in-force-as-of-T · decision-context-replay · plan/obligation-state-as-of-T · forecast-as-authored-at-T. Each result carries source/coverage/uncertainty lineage + a declared temporal posture (current / historical-as-known-then / current-retrospective / forecast / planned / overdue / stale / degraded / disputed).

**Forward semantic chain (~60% weight; no universal lifecycle):**
```
possible future → scenario/forecast → recommendation → governed resolution
  → accepted plan → scoped commitment → obligation/order/reservation
  → execution → observed/unobservable effect → replan
```
Attach: T-14 composed-horizon · frozen-forecast (Opus B / Knox threshold) · T-13 predicted≠owed · T-16 multi-principal-composed-not-merged · reversibility as a separate risk axis. Robot/autonomous capability = far-horizon PRESSURE case only, not the lead.

## §8 Task-D adversarial lens + frozen-phase protection

**Binding condition (operator, 2026-07-19):** Task-D may not close without applying the provisional temporal constitution (§4) as an explicit adversarial lens. **Timing (Knox #10):** the lens attaches **only after the Phase-2 six-source verification accepts it** — do NOT amend Task-D now with laws the charter itself says still need source-packet verification. **Governance:** Task-D method is `shell_method_frozen` → the accepted lens attaches as an ADDED adversarial lens (amendment) applied to the **next unfrozen phase**, NOT a re-scope; it must **not** retroactively alter any already-frozen prompt / answer key / scoring. Chronology may establish the lens came later; it must never be laundered into having governed work it did not govern. If a frozen phase already ran, apply the lens as a separately-labeled supplemental pass and selectively reconcile.

**Required Task-D probes (native-supply vs configure vs custom vs absent):** distinct temporal meanings without flattening to generic timestamps · then-known reconstruction w/o hindsight leakage · actor-exposure w/o pretending exposure=cognition · effective-time vs recorded-time authority · freeze consequential decision + forecast bases · distinguish forecast/plan/commitment/obligation/order/execution/outcome · bound autonomy by prediction/trust horizon + reversibility · recheck mutable facts + authority at execution · compose multiple principals' futures without one sovereign plan · expose degraded instrumentation + unknown external use honestly · selective reopening w/o silent orphaning OR universal invalidation · prevent the reconstruction mechanism from becoming a central truth owner/corrector · **no false total order under clock-skew/latency** · minimum-temporal-envelope / data-tax discipline · apply the discipline to care AND commerce AND workforce AND operator-config AND platform-release (not just the clinical chart). **Do NOT reward mere bitemporal columns or event sourcing — the question is whether the governed healthcare composition is supplied + enforceable.**

## §9 Sequencing (LOCKED: A-plus) + phased operating plan

**Operator decision (Nick, 2026-07-19):** the full Temporal Reconciliation Pass runs **after Task-D and before v4 Spine Draft 0** as a candidate spine input; Task-D applies the provisional lens (after Phase-2 verification) before closing; the post-Task-D pass reopens ONLY temporally-affected Task-D conclusions if it finds material new law. *(Rejected: B run-now/interrupt; C leave-undecided; D keep-C5-only.)* Formal `03_decision_extraction_ledger.md` row (`D0THES-DEC-038`) lands in the **charter acceptance/commit transaction** (§12).

- **Phase 0 — Close planning (this charter).** ✅ Revised per Knox review; no substantive temporal execution.
- **Phase 1 — EVRUN-000012 is already analysis-closed** (`6a74485`; `_07` = `analysis_closed · routed`) — **nothing to interrupt or finish.** Its outputs feed Task-D. Next item is **operator-controlled**; the temporal work does not jump the queue.
- **Phase 2 — Six-source anchor micro-pass** (on operator go; before the Task-D lens attaches). Reopen the SIX source packets — **`EVSRC-2026-000122` (= Pertsch: time-scale-aware memory · deterministic waiting · primitive reliability · latency), `000124` (world/consequence model · predicted-state-as-candidate), `000165` (anchor-relative temporal context), `000182` (prediction horizon → authority), `000184` + `000185` (bounded autonomy · reversibility · safe probing)** — with a **dedup/sibling check on 184↔185 before treating them as independent evidence** (no "+Pertsch" double-count; Pertsch IS 122). Per source: source claim · exact support · OMNI translation · analogy-only · rejected · law supported · unresolved tension. Per `GRD-042/044` (reopen the packet; don't author from the anchor ledger). NOT a new EVRUN wave.
- **Phase 3 — Accept + attach the provisional Task-D temporal lens** (compact §8 probes) to the next unfrozen Task-D phase.
- **Phase 4 — Complete Task-D.**
- **Phase 5 — Full Temporal Reconciliation Pass** (§10 outputs).
- **Phase 6 — Temporal placement/admission verdict → v4 spine** receives only accepted laws + honest open questions (no schema/service topology/universal timeline/timestamp taxonomy/robotics detail/unearned moat claims).

## §10 Post-Task-D full-pass outputs + admission verdicts

**Outputs:** **A. Constitution** (~15–25 laws, T-01…T-22 refined against Phase-2 receipts + Task-D findings; explicitly reconciling/closing/refining `D0THES-REV-198`; forward-weighted; braided-but-distinct from §A). **B. Declaration matrix** (thin universal 21 + deep-trace 17; no rewrite). **C. Oracle suite** (25–40 scenario + property + mutation, C4.3 method, ~60/40 forward/backward, care/operator-native; **mutations incl.**: post-cutoff evidence in a reconstruction · "viewed"=knowledge · ephemeral forecast passed as original · forecast creates duty without authority · triggered obligation wrongly rejected by over-broad predicted≠owed · plan executable after consent/license/policy/state expiry · two principals' futures merged into one synthetic plan · cached as-of projection becomes independent truth · chronology→blame · release=activation/exposure/adoption/action · missing instrumentation→falsely-fresh current · a later correction reopens every downstream decision · **false global order under clock skew** · maximal-dimensionality tax · ordinary-read-forced-into-replay · **exposure-history over-capture violating T-22**). **D. Routing & maturity** (per finding: spine / C5 / Build-OS+eval / surface-label / impl gap / external-validation gap / rejected overbuild).

**Admission verdicts (Knox #3 — the pass produces ONE, with evidence; it does NOT pre-assume the axis):**
- `TEMPORAL_AXIS_ADMITTED` — named cross-cutting spine axis.
- `TEMPORAL_DISCIPLINE_ADMITTED_WITH_NAMED_RECONCILIATIONS` — a named discipline, but not a full peer axis; with explicit reconciliations.
- `TEMPORAL_LAWS_DISTRIBUTED_NO_STANDALONE_AXIS` — laws stay distributed across Trust/AI/Care/Platform/domain contracts; no standalone axis.
- `NOT_ADMITTED` — narrowed or rejected.

**Acceptance discipline:** (1) whichever verdict, distinct-but-jointly-evaluated with §A; (2) no Time domain / universal canonical timeline / truth-owning temporal authority / as-of god-composer; (3) Minimum Temporal Envelope holds (no maximal-dimensionality tax, no replay-as-default-read); (4) forward half first-class (composed-horizon autonomy, frozen-forecast, predicted≠owed, no-false-total-order); (5) exposure≠knowledge + before≠because + T-22 carried; (6) every law traces to a source receipt or a prior signed law (no memory-derived doctrine); (7) discipline applies across care+commerce+workforce+operator-config+platform, not clinical-only.

## §11 Accepted Gate-0 boundary decisions (Knox-ratified; adjustable only via evidence)

1. **Exposure publication:** name the distributed publication obligation now; fields + carriers → C5. **ACCEPTED.**
2. **As-of reconstruction:** spine-name the FUNCTION, not an object; cache/timeline qualifications per T-11. **ACCEPTED.**
3. **Matrix:** 21 universal + 17 deep (Polaris in universal; Agent Runtime + Polaris in deep; Platform split E&V/Release/Runtime); adjustable only through evidence. **ACCEPTED.**
4. **Naming:** *Temporal Integrity* (candidate axis) · *Governed As-Of Reconstruction* (function) · *Governed Temporal Epistemics* (technical sublayer). **ACCEPTED.**

## §12 Source posture + governance side-effects + Protocol §9 stop report

**Source posture.** *Read fully (this session):* the 07-19 handoff; read-graph Tier-0 spine; Guardrail Digest; Care Operating Model capture §0–§8; FWREG registry rows; master-catalog C4-family rows; the C4.4 charter template; EVRUN-000012 `_07` closeout status line. *Consulted deeply / via governed search:* C4.3 Law 10.1 + O1–O22 + mutation structure; `data_layers_reconciliation_v1` temporal foundation (via REV-200 pointer). *Located through registries (not reopened raw):* the raw packets behind `EVSRC-2026-000122/124/165/182/184/185` (Phase 2 will read them). *Not inspected this pass:* those raw packets; full legacy system-map line-by-line; live code temporal paths; uncommitted EVRUN working-tree bytes beyond `git status`. *Live-repository verification:* committed branch `evidence/evrun-000012-care-commerce-hardening` inspected — **governing rows + registry-level anchors (`D0THES-REV-198` / `D0THES-REV-200` / `EVSRC-2026-000182` / `D0THES-REV-184`, `FWREG-015`, `EVRUN-2026-000012` `_07`, the C4.4 precedent) VERIFIED**; **source-local mechanism claims + uniform contract realization + runtime enforcement NOT verified and NOT claimed.** GitHub `main` still ends at the C4.3 commit + AGENTS points to the earlier checkpoint → this artifact + the 07-19 checkpoint are a newer LOCAL working packet, legitimately ahead of `main`, not yet pushed.

**Exact files changed this transaction (all UNCOMMITTED on branch `evidence/evrun-000012-care-commerce-hardening`):**
- `v4_C4_5_temporal_integrity_and_asof_reconstruction_pass_plan.md` — **NEW (untracked)**, this charter (the vessel).
- `01_master_corpus_catalog.md` — **modified (also carries unrelated EVRUN/C4.4/demand rows already in the working tree — must NOT be smuggled into this commit)**; added ONE C4.5 row.
- `04_manifest_read_graph.md` — **modified (cleanly mine)**; added consult route **#9k**.
- `future_work_registry.md` — **modified (cleanly mine)**; `FWREG-015` linked to this charter (status stays operator-named-pending; execution post-Task-D).

**Registration receipts:** catalog C4.5 row present · read-graph #9k present · FWREG-015 linked (all grep-verified).

**Owed (Knox-sequenced):** (a) **at charter acceptance/commit** — the formal `03_decision_extraction_ledger.md` row `D0THES-DEC-038` (A-plus sequencing · candidate pre-spine placement · EVRUN-000012 non-interruption · source-verification-before-Task-D-attachment · **no promotion implied**). (b) **after Phase-2 verification** — the Task-D method-file amendment (attach §8 lens to the next unfrozen phase, frozen-phase protection). (c) a **separate operator/checkpoint transaction** to correct the stale "finish EVRUN-000012" handoff line.

**Commit posture (bounded — Knox #11):** do NOT leave the vessel untracked long-term; do NOT smuggle the unrelated EVRUN/C4.4/demand catalog rows into this commit. Recommended: stage `04`/`future_work_registry`/`03`(on write)/the C4.5 file whole, and **hunk-stage only the C4.5 row from `01_master_corpus_catalog.md`** (the file also holds EVRUN/C4.4 rows), OR commit those unrelated changes first, OR cherry-pick the C4.5 transaction onto a clean base. Produce a path-bounded diff receipt at commit.

**Risks if forgotten:** the trifecta arc evaporates (leak-at-pivot); the stale handoff line misroutes a fresh agent to "finish" a closed run; effective-vs-recorded authority errors recur. **Next gate:** Knox verifies this patch → `D0THES-DEC-038` + bounded commit → Phase-2 six-source micro-pass → accept + attach Task-D lens → Task-D completes → full pass → admission verdict → v4 spine.

**Protocol §9 stop report:** work = Gate-0 charter authored + revised per Knox ACCEPT_WITH_REQUIRED_PATCHES; scope = preservation + pre-registration ONLY; nothing promoted; no gate jumped; EVRUN-000012 checkpoint NOT repointed; Reactor untouched; propose-only (`GRD-036`); no substantive temporal execution; deliverable = this coherent, falsifiable, governance-complete charter + its registrations, pending Knox re-verification + the acceptance commit.

<!--
Passport (Agent Work Protocol §5 New Artifact Completion Rule):
 type: plan_or_roadmap (Gate-0 charter + gem-preservation vessel) · authority: analysis_nonbinding (GRD-036) · review_gate: user_knox_required
 catalog row: 01_master_corpus_catalog.md (added same pass) · read-graph: route #9k (added same pass) · FWREG: 015 linked
 status: gate_0_charter_accepted · full_pass_not_started · not_promoted (Nick+Knox 2026-07-19; acceptance receipt §0.0)
 sequence: A-plus (after Task-D, before v4 spine; Task-D lens attaches post-Phase-2-verification) — operator decision 2026-07-19
 decision row D0THES-DEC-038 + bounded commit: LANDED in this acceptance transaction
 revised 2026-07-19 per Knox ACCEPT_WITH_REQUIRED_PATCHES (10 patches) + Knox byte-review source-ID correction (D0THES-REV-182→EVSRC-2026-000182 forecast-horizon carrier; full-ID normalization; D0THES-REV-182 confirmed = retention, not forecast-horizon)
-->
