# v4 — C4.2 — Enterprise Full-Stack Adversarial Pressure Test (Task D — the FINAL pre-spine gate)

Document type: `analysis` / `architecture_pressure_test` · Authority: `analysis_nonbinding` (`GRD-036`) — **NOT spine prose, NOT contract edits.**
Status: **`shell_pending_population` · `required_pre_spine_input`** (method defined here; RUN after wave-4 video synthesis `EVRUN-2026-000005`, BEFORE v4 Spine Draft 0).
Review gate: **Nick + Knox + Opus** (trifecta).
Controlling plan: `~/.cursor/plans/wave-2_source_scaffolding_654989a0.plan.md` → the pre-spine sequence (Task C videos → **Task D this test** → Draft 0).
Manifest action: `add_tier2` (consult-when-routed; read-graph route added; **catalog row owed on population** — Protocol §5, precedent: C3.5 A–G spokes).
Anti-evaporation: **governed by `EVRUN-2026-000004` §0.6 Required Consumption Protocol** — §6 below (contract/spine consequences) MUST produce explicit dispositions; no keeper insight flattened (§0.6 15-minute-agent test applies).

---

## §A — Why this gate exists (read first)

The pre-spine physics-of-care work (`EVRUN-2026-000004` §0.5 ②) crystallized an **offensive ontology posture**: *OMNI owns the governed operational physics of AI-mediated healthcare — not by owning words, but by defining/operationalizing/testing/proving the closed care loops.* **That is currently an AMBITION UNDER TEST, not a victory** (§0.5 ② burden-of-proof). This gate is where it is **earned or falsified** — the final pre-spine test of whether the claim is real, differentiated, and buildable, or merely language we like.

**Trigger for this test (operator, 2026-07-11):** the reflex to "rattle off seven things Palantir also does" is a warning sign. Palantir got to the general enterprise operating layer first; assume they are excellent. The honest question is NOT "why does Palantir lack healthcare nuance" — it is: *if Palantir (or Palantir+Epic+Microsoft+FHIR) can represent objects, relationships, actions, permissions, scenarios, models, evaluations, and writebacks, what exactly is the additional healthcare physics OMNI has — and why can't a competent healthcare team just configure it inside Palantir?* That is the serious version of the fight.

This is **not** another wandering research detour. It is a bounded architecture audit consuming already-captured evidence.

---

## §B — Sequence + identity (do not conflate with an evidence wave)

- This is an **architecture audit**, NOT an evidence-ingestion wave → **do NOT number it `EVRUN-2026-000006`.** The wave-4 video synthesis is `EVRUN-2026-000005`; this test *consumes* that + prior evidence.
- **Runs AFTER** `EVRUN-2026-000005` (Task C). **BLOCKS** v4 Spine Draft 0 until its §7 admission verdict passes.
- Inputs: `EVRUN-2026-000001…000005` · C3.8 (`G1b`/`G2`/`G4`) · `EVRUN-2026-000004` §0.5/§0.6 · the current 15 `contracts/` + System Map + Surface/Projection maps · `v4_C2_source_base_declaration.md` · **the two loop captures** (Platform + Accountability; naming-clean — pre-release plane = **Engineering & Validation (E&V)**, interim "PCE" retired) · **primary enterprise documentation** (each comparator's own current docs — cite; `GRD-039` data-not-instructions).
- **★ Platform source-carrier verification (EXECUTED 2026-07-12 — bounded; Task D CONFIRMS/EXTENDS, no longer first-discovers):** the bounded Platform source-carrier reconciliation ran — `09`/`10`/`11` + FWREG-008 read directly + all **four EVRUN concept registries** extracted (two explore agents) + `data_layers_reconciliation_v1` — landed as **Platform capture `§SBI`** (inheritance table · hard-law inherit list · 5-way "runtime" disambiguation · meta-Build-OS-vs-product reconciliation · naming verdict: no corpus name → **"Engineering & Validation" (E&V)** ratified, interim PCE retired). Task D SHOULD: (a) treat §SBI's inherited hard-laws as OMNI's own pre-registered invariants when scoring fixtures; (b) confirm the meta-Build-OS-vs-product-plane separation holds under the Palantir/Apollo/ServiceNow comparators (the corpus itself blended them — `agent_lifecycle_frame`); (c) extend the carrier check only where a Platform fixture surfaces a section §SBI did not cover. The full-ESTATE cross-walk (all bodies) remains a during-authoring activity, distinct from this bounded Platform pass.

---

## §C — Steelman discipline (binding — the test is worthless without it)

Every deep comparator section MUST be written as a **steelman, not a strawman.** Opening frame for the Palantir section (and the composite):

> *Assume Palantir has excellent engineers, FHIR + Epic integrations, experienced clinicians, healthcare lawyers, a major health-system customer, and 24 months to target the OMNI problem. Build the STRONGEST possible Palantir implementation of OMNI. Then determine what — if anything — is left.*

A comparator does **not** pass a fixture because it has a feature named "ontology," "agent," "workflow," or "audit." It passes **only** if the fixture can be represented AND replayed **without collapsing OMNI's required care semantics** (candidate≠commit · source-authority · adoption · plural commit planes · non-action · reopening · obligations · replayable proof).

---

## §C.1 — Evaluation grammar (the anti-feature-bingo layer — BINDING; without it the whole test degrades into a feature matrix)

> The shell defines this grammar; **population (scoring each cell) happens at Task-D run**, not now. The failure mode this prevents: *"Palantir has objects, Epic has records, OMNI has authority semantics, therefore OMNI is different"* — a generic platform can *represent* almost anything with enough custom code; if representation counts as capability, Palantir claims everything; if only prepackaged native function counts, OMNI unfairly dismisses every configurable platform. Neither is honest. So **no cell gets a bare PASS/PARTIAL/FAIL.** Every required care semantic, for every stack, is scored on SIX axes:

**Axis 1 — Capability PROFILE (R·E·A·X·P·L — a 6-DIMENSIONAL VECTOR, not a scalar ladder; adjudication in §C.2):** **R**epresent (model the object/relationship/state/provenance faithfully) · **E**nforce (structurally prevent invalid transitions / unauthorized behavior) · **A**uthorize (bind the right principal · actor · authority · consent · owning committer) · **X** execute+recover (perform the action, handle partial failure, compensate, reopen, continue) · **P**rove/replay (who knew · proposed · saw · decided · acted · committed · followed up) · **L**earn-without-rewriting-history (later outcomes improve future operation without changing what was known then). **Score all six separately** — a stack can be strong-R / weak-E / absent-L. *A later capability NEVER compensates for an earlier missing control (§C.2): execute without authorize = unsafe bypass; prove without enforce = observability, not governance; learn without historical integrity = corruption, not improvement.*

**Axis 2 — Implementation class (HOW each rung is achieved):** `NATIVE_PRIMITIVE` · `CONFIGURED_PATTERN` · `CUSTOM_APPLICATION` · `EXTERNAL_INTEGRATION` · `MANUAL_WORKAROUND` · `NOT_SUPPORTED`. (Representing candidate≠commit via a custom app whose safety logic is external to the platform ≠ enforcing it as a native default.)

**Axis 3 — Maturity (production-vs-blueprint asymmetry — MANDATORY on EVERY row, not just the deficiency register):** `SHIPPED` · `PILOTED` · `DOCUMENTED` · `PLAUSIBLE_24_MONTH` · `INFERRED`. Each finding carries **four states**: **competitor_actual** (evidenced now) · **competitor_plausible_24mo** (the steelmanned team's reachable build) · **OMNI_actual** (named? contracted? implemented? proven — today) · **OMNI_target** (after the proposed spine + C5). **★ Binding rule: an unbuilt OMNI semantic advantage counts as a DESIGN advantage, not a PRODUCTION advantage.** A beautiful contract that has never run a fixture is a promising hypothesis, not "better than" a shipped system. Score **semantic_fitness** and **execution_maturity** independently — never collapse them.

**Axis 4 — Configuration cost / fragility (the real answer to "why not just configure it in Palantir?" — STRUCTURED QUALITATIVE, not fake metrics):** judge on a coarse scale — `native_or_small_domain_package` · `moderate_configuration` · `large_fragile_custom_application` · `not_achievable_without_re-platforming` — with **explicit reasoning** across: healthcare-specific custom code · duplicated/parallel policy stores · cross-system truth stores · manual handoffs · custom state machines · runtime-enforcement-vs-convention · testing + regulatory-assurance burden · upgrade/version-migration fragility · implementation duration + specialist staffing · lock-in/exit cost. *(This is a paper audit — do NOT invent LOC counts; name the burden qualitatively with the reasoning. If Palantir does it with a modest domain package → moat weakens; if it needs a large fragile custom app with safety semantics external to the platform → supports a distinct OMNI layer.)*

**Axis 5 — Accountable ownership + liability TRACEABILITY (healthcare-unique — OMNI's home turf; distinct from legal liability, which software cannot determine):** three sub-distinctions — **(a) operational accountability** (who proposed / reviewed / authorized / committed / owned follow-up · which credential + delegation applied · which domain/institution was responsible — *structurally represented + enforced by the platform*); **(b) legal-liability evidence** (the above *preserved* so the applicable legal process — law/jurisdiction/contract/facts/adjudication — can determine malpractice/statutory liability); **(c) redress** (who investigates / corrects / notifies / compensates / escalates). Score whether each is *structural · conventional · lost-at-the-seam*. **The claim (legally credible): OMNI does not DECLARE liability; it prevents responsibility from becoming unowned or untraceable.** A feature-union can produce an action with no structurally-owned accountable committer when a seam fails; OMNI's multi-plane commit + participation topology assign operational accountability structurally.

**Axis 6 — Compounding / trajectory (the moat may be a RATE, not a STATE):** for each capability, is it a **static_capability** (matchable once) or an **accumulating_advantage** (a live network replaying N governed resolutions with outcome linkage widens the gap)? Pair with a **copyability_half_life** (how long a competitor needs to reach parity, and whether OMNI's lead grows or decays while they do). A static feature a competitor matches in a quarter ≠ an evidence/network/adoption flywheel that compounds.

---

## §C.2 — Adjudication + verdict logic (BINDING — the decision rule; without it the rich scoring grammar can be gamed by selective emphasis)

**1. R·E·A·X·P·L is a 6-dimensional profile, non-compensatory in order** (§C.1 Axis 1): score all six; a later capability never excuses an earlier missing control — execute-without-authorize = unsafe bypass · prove-without-enforce = observability not governance · learn-without-historical-integrity = corruption.

**2. Two invariant classes:**
- **HARD CARE INVARIANTS — non-compensatory** (cannot be averaged against breadth / maturity / cost / UX): identity + principal integrity · source authority · candidate≠commit · consent + delegated authority · accountable owning-domain commit · research ≠ standard-of-care separation · valid non-action · reopening after changed evidence / execution failure · obligation continuity · replay-without-rewriting-history.
- **COMPARATIVE ADVANTAGES — graded** (inform strategy; may NOT cancel a collapsed invariant): implementation maturity · configuration burden · speed · usability · distribution · portability · cost · integration burden · compounding.
- **Rule:** *no weighted total turns an authority/safety failure into a pass.*
- **★ Unsafe-collapse vs fail-safe-refusal (Opus sharpening — do not mis-fail conservative stacks OR OMNI's own fail-closed behavior):** a hard-FAIL is triggered only by an **UNSAFE COLLAPSE** — the stack *proceeds* despite a missing/violated control (executes without authorization · commits AI output as truth · loses the accountable committer). A **fail-safe refusal** — the stack lacks the native primitive so it correctly BLOCKS/escalates instead of bypassing — is a **comparative capability gap, not an unsafe hard-fail.**
- **★ Applies to OMNI too:** if OMNI's own current contracts collapse a hard invariant at a fixture, that is a `NOT_READY` / named-reconciliation signal — the test judges OMNI's claimed physics against its OWN fixtures, not only vs competitors (ties §H "must be able to lose").
- **Checkpoint granularity:** each hard invariant is evaluated at every fixture point where it is load-bearing (candidate≠commit at each action-authorization · reopening at the execution-exception · etc.); an unsafe collapse at ANY required checkpoint fails that fixture regardless of excellence elsewhere.

**3. Construction-brief burden (SYMMETRIC — kills both Palantir-omnipotence and OMNI-blueprint-superiority):** every `PLAUSIBLE_24_MONTH` (competitor) AND every `OMNI_target` claim requires a short brief — existing primitives · missing primitives · required custom application · integration path · required data/access · org/regulatory dependency · main failure risk · feasibility evidence · confidence. **Platform flexibility alone is NOT evidence of a plausible implementation. An OMNI target not tied to named contracts + accepted semantics + a fixture + an executable acceptance test is aspiration, not target architecture.**

**4. Comparator test MODES (do not run every stack as a full clinical OS — that trivializes the matrix):**
- **Standalone-stack** (① Palantir · ② Epic / Microsoft-Nuance · + §G composite): *could this stack, with plausible integrations, own the COMPLETE resolution?*
- **Component-and-seam** (③ ServiceNow · Salesforce): *which part of the fixture does it solve exceptionally · what must surround it · which authority/truth/replay seams does it introduce?* (Do NOT score "Salesforce can't run the hospital fixture — fail"; that teaches nothing.)
- **Pattern-transfer** (④ Amazon · Stripe · Waymo/Tesla · NASA/ATC): *which pattern transfers · what changes in healthcare · what must be rejected?*
- The fixture TRUTH is fixed across modes; only the adversary's claimed ROLE differs.

**5. H0–H3 pre-registered discriminators (predict BEFORE population; don't label after):**
- **H0** (vertical-config) — supported if a Palantir-like substrate reaches E/A/X/P on the HARD fixtures via native primitives / a modest domain package, with manageable seam cost.
- **H1** (portable kernel) — supported if the OMNI care-semantic kernel can be specified as host-independent contracts + conformance fixtures, then preserved on >1 enterprise substrate.
- **H2** (operating-system) — supported if competitor stacks repeatedly need duplicated authority / manual seam-quarterbacking / large fragile apps to hold hard invariants, while a coherent OMNI substrate resolves them.
- **H3** (non-software moat) — supported if software semantics look broadly copyable but validated replay evidence / local adoption / outcome history / implementation knowledge / network relationships demonstrably compound.
- Verdict may be a COMBINATION; assign each `supported / partially / refuted` with fixture + §C.1 evidence.

**6. §7 admission verdict follows THIS rule (not a weighted feature score):** `SPINE_READY` = proposed OMNI constitutional claims survive, no unresolved hard-invariant contradiction (incl. OMNI's own) · `SPINE_READY_WITH_NAMED_RECONCILIATIONS` = claims substantially survive, bounded contract/positioning corrections explicitly named + routed (§0.6) · `NOT_READY` = a core ontology/moat claim is falsified, a fixture exposes an unresolved care invariant (competitor OR OMNI), or the H0–H3 verdict materially changes the proposed spine.

> **★ FREEZE (2026-07-11): with §C.2 the METHOD is complete.** No further methodology rounds. The next touch of this file is **POPULATION at Task-D run** (after `EVRUN-2026-000005`). Status stays `shell_pending_population`. *(The test should not ask who has more features; it determines who can preserve the complete care resolution — under failure, through authority, execution, proof, and time — and what layer OMNI must actually own to make that true.)*

---

## §D — Comparator roster (small + deep, NOT fifteen shallow reviews)

**Tiers (do NOT treat as symmetric — Salesforce is not a full clinical stack; the labels prevent false equivalence):** **① Primary platform adversary** = Palantir · **② Clinical incumbent adversaries** = Epic · Microsoft/Nuance · (+ the §G composite) · **③ Enterprise-control + relationship adversaries** = ServiceNow · Salesforce · **④ Pattern donors** = Amazon · Stripe · Waymo/Tesla · NASA/ATC.

**Deep treatment (tiers ①–③):**
| comparator | tier | the attack it presses | why it's on the list |
|---|---|---|
| **Palantir (Foundry / AIP)** — DEEPEST | ① | semantic+kinetic ontology · action types/functions · object-level security · scenarios/counterfactuals · model+agent tooling · evals · SDK/MCP · writeback + operational apps · org adoption | closest to the claim that ontology+workflow+AI+action belong in ONE operating layer |
| **Epic** | ② | record gravity · clinician workflow · patient/clinician/RCM AI surfaces · embedded generative AI · installed distribution · interoperability · implementation muscle | installed clinical system-of-record already embedding AI across the stack |
| **Microsoft / Nuance (Dragon Copilot)** | ② | real-time multi-party ambient capture · role-specific clinical experiences · trusted-reference retrieval w/ citations · task automation · EHR integration · multi-setting deployment | directly adjacent to the Dan/2030 live-conversation ambition |
| **ServiceNow** | ③ | cross-dept workflow ownership · case/task lifecycles · **AI Control Tower** (inventory+govern agents/models/identities/MCP/access/prompt-injection/compliance/runtime/value) | attacks the runtime-governance areas OMNI has described as prospective, as a packaged control plane |
| **Salesforce** | ③ | relationship graph · front door · one-interaction→many-intents · case-to-task orchestration | relationship/surface comparator (already in the Lens-B corpus — keep full, not "CRM"; NOT a full clinical stack) |
| *Oracle Health (conditional)* | ② | include ONLY if primary-source material adds something Epic/Microsoft do not — not for list symmetry | |

**Targeted pattern donors (no full company dissection — already in the internal comparator framework):**
- **Amazon** — fulfillment / exception handling / rerouting / capacity / proof-of-delivery.
- **Stripe** — idempotency / immutable state / reconciliation / money-state-separate-from-meaning.
- **Waymo / Tesla** — state estimation / simulation / safety case / autonomy graduation / localized validation.
- **NASA / ATC** — telemetry-vs-command / go-no-go authority / escalation / shared operating picture / handoff discipline.

---

## §E — Fixtures (replay the SAME care physics against every stack)

Do not compare marketing pages. Each comparator is run against the same fixtures; it passes a fixture only if it can represent + replay it without collapsing OMNI semantics.
- **Fixture 1 — TRT / `EVSRC-251`:** identity/context correction (18-vs-46) · patient screenshots · provider-side AI use · semantic adoption · action authorization · multi-channel continuity · proof.
- **Fixture 2 — Dan / `EVSRC-252`:** live external-world signal · unresolved diagnostic branches · execution exception · pharmacist mixed-authority claims · pharmacy reroute · false closure · context admission (Gate 1) · AI influence + replay.
- **Fixture 3 — hospital case:** movement state · many actors · changing authority/coverage · order≠administration · attention routing · degraded mode · handoffs · high-consequence action. (Source: C3.5 `HCASE` library.)
- **Fixture 4 — cross-operator / research case:** federation · consent + purpose · standard-of-care vs research authority · incentives · external agents · data-value loops · outcome use without retroactive judgment. (Source: C3.6/C3.7.)
- **Fixture 5 — GRR / inward integrity loop (added 2026-07-11):** a cross-domain report ("refill never came AND double-charged AND app crashed AND the AI told me the wrong dose") + a provider "this AI is wrong" flag + a near-miss + an **out-of-band report while OMNI itself is down** → preserve replayable-proof snapshot · classify (care/ops/commerce/build/security) · route by domain/authority/severity/radius/duty-to-act · decompose into one parent + many domain children · mandatory-clock handling · reporter live-projection · incident→problem→change→**verification** · promote failure → eval/regression/runbook. **Directly pressures ServiceNow (ITIL incident/problem/change/case + AI Control Tower) · Palantir (ontology objects+actions over domain data) · patient-safety/near-miss reporting · CAPA · security IR.** Is OMNI's *decomposed-over-domains, REV-184-container, no-new-"case"-domain* answer a moat, or does a configured module do it better? (Source: `v4_C4_governed_reporting_resolution_capture.md` — GRR Draft 0; spine watch-list WI14; FWREG-009. Applies the §C.6/§0.6 "OMNI judged against its own fixtures too" rule — OMNI has only NAMED most GRR machinery, not CONTRACTED/PROVEN.)

---

## §E.1 — Fixture manifests + perturbation + the second loop (authored at population; SPECIFIED here so reviewers can't unconsciously reshape a fixture per competitor)

**Each fixture gets a DETERMINISTIC manifest** (thematic bundles are not runnable): `starting_state` · `participants + principals` · `source_artifacts` · `event_sequence` · `active_uncertainty` · `required_authority` · `expected_committed_outputs` · `required_obligations` · `failure_injections` · `prohibited_semantic_collapses` · `proof_requirements` · `closure_condition`. **251 and 252 are already concrete; the hospital fixture must name the EXACT `HCASE` (not "the hospital case"), and the research/federation fixture must be ONE exact scenario (not a synthetic super-case bundling every hard cross-operator question).**

**Every fixture carries a FAILURE-INJECTION suite** (happy-path only tests workflow capability; OMNI's claim is governed behavior under messy/failing reality): wrong identity · stale context · corrected/withdrawn utterance · revoked participant · conflicting sources · correlated model agreement · partial commit · pharmacy/inventory failure · payer denial · model unavailability · degraded network · prompt injection via an external artifact · hidden AI influence · authorized-actor disagreement · patient refusal · valid non-action · a later outcome that contradicts the initial working model. **Pass condition is NOT "eventually reached an answer" — it is: preserved what changed · who knew · what went stale · what reopened · which obligations remained · why the final action stayed authorized · and who remained accountable.**

**Every fixture continues through the SECOND (longitudinal) loop** (OMNI's claim is *closed loops*, so a fixture may not end at decide/act/proof): `action → fulfillment/execution → proof → follow-up obligation → outcome → learning → next context/resolution`. Dan example: filled? started? symptoms improved? testing done? dx changed? prior reasoning left historically intact? learned for the next case? **A stack that models a one-time workflow but cannot maintain the longitudinal loop fails the fixture — that gap is a primary finding.**

---

## §F — Required sections of the populated artifact (§0–§7)

- **§0 — Verdict surface:** what survives · what breaks · what must change before spine · is Draft 0 admitted? (No soft conclusion.)
- **§1 — Steelman maps:** per deep comparator — what it genuinely owns · can represent · can execute · governs · proves · where it has production maturity OMNI LACKS.
- **§2 — Fixture replay matrix:** each comparator × {251, 252, hospital, federation/research}, scored on the **§C.1 grammar** (R·E·A·X·P·L rung · implementation class · maturity 4-state · config-cost/fragility · accountability · compounding) — NOT bare pass/partial/fail; name the exact semantic that survives or collapses and at which rung.
- **§3 — Appropriation ledger (PATTERN-level — "what do we do with each idea"):** every pattern → `TAKE_AS_IS` · `ADAPT_TO_CARE` · `ALREADY_OURS` · `REJECT` · `WATCH` + an EXACT destination home. *(Distinct from §6's layer-level ledger — do not conflate.)*
- **§4 — OMNI deficiency register (BRUTALLY honest):** what Palantir / ServiceNow / Epic / Microsoft each do BETTER · what OMNI has only NAMED vs CONTRACTED vs actually PROVEN (the maturity axis, applied to OMNI itself).
- **§5 — Moat falsification (per proposed moat):** claim · current evidence · how a competitor could copy it · **copyability half-life** (compounding axis — does OMNI's lead grow or decay while they copy?) · what actually compounds · what would FALSIFY the claim · verdict.
- **§6 — Contract + spine consequences + STRATEGIC-LAYER decision:** (a) every finding → constitutional landing · contract semantics · candidate implementation · acceptance fixture · **explicit disposition** (governed by `EVRUN-2026-000004` §0.6 — no evaporation, no generic recommendations); (b) **LAYER-level strategic ledger (distinct from §3) — for each enterprise layer decide `OWN · BUILD · BUY · HOST_ON · WRAP · PARTNER · USE_AS_RAIL · STANDARDIZE · REJECT`** (e.g. *Palantir hosts ontology/action infra · OMNI owns care contracts + proof*; *Epic = record rail · OMNI owns cross-system resolution*; *Dragon = ambient capture · OMNI owns context-admission + influence lineage*). This converts the test from "who's better?" into an actual build/buy/partner architecture + company strategy.
- **§7 — Admission verdict (per the §C.2 rule — non-compensatory hard invariants, NOT a weighted feature score):** `SPINE_READY` · `SPINE_READY_WITH_NAMED_RECONCILIATIONS` · `NOT_READY`. Draft 0 does not begin without this.

---

## §G — The composite test (the hardest one)

Run the same discipline against the strongest COMPOSITION: **Palantir + Epic + Microsoft Dragon Copilot + FHIR rails.** That combination may already possess enterprise ontology + actions + security + clinical record/workflow + ambient capture + model integration + evaluation + deployment scale. **If OMNI cannot explain why that composition still misses something STRUCTURAL, the moat claim is not ready for the spine.**

### §G.1 — Composite SEAM TAX + the two-way substrate test (possibly the most important test in the artifact)
- **No credit for a feature UNION that can't hold across vendor boundaries.** A theoretical sum (Palantir feature + Epic feature + Dragon feature + FHIR interface) is NOT one coherent system — **the seams are where care physics fails.** Charge the composite for: identity reconciliation · duplicated permissions · consent propagation · source-authority preservation · cross-system provenance · transaction boundaries · conflicting state · action ownership · retry/compensation · version drift · latency · partial/broken integration · audit stitching · data custody · **who is accountable when systems disagree.** Two separate judgments: **(a) capability union** (does the collection collectively possess the capabilities?) vs **(b) integrated operating system** (can it preserve ONE care resolution across the seams without manual quarterbacking, duplicated truth, or broken authority?). *The Dan case is literally a human quarterbacking such a seam — that is the point.*
- **★ Two-way substrate test (Knox — reframes the whole fight):** the test asks not only *"could Palantir build OMNI?"* but *"could OMNI RUN ON Palantir (or Epic/ServiceNow) while retaining its care semantics + authority?"* If yes, OMNI may be a **portable healthcare semantic kernel + evidence system** that consumes another platform underneath — potentially a STRONGER architecture + company strategy than "replace Palantir." This is decided per-layer in §6's strategic ledger.

---

## §H — Pre-registered rival hypotheses (NOT a preferred answer — pre-commit BEFORE seeing evidence to kill anchoring)

**★ The test MUST be able to LOSE (governance pre-commitment, trifecta):** landing on H0/H1/H3 — "OMNI should run on top of a Palantir-like substrate" or "the durable moat is the network/evidence/adoption, not the software" — is a **SUCCESS of the test, not a failure of OMNI.** We do not steer to "OMNI is unique." The prior "preliminary expectation" was replaced with these four rivals precisely because it anchored toward the preferred answer.

- **H0 — Vertical-configuration:** OMNI's "care physics" is implementable as healthcare-specific configuration + application logic on a Palantir-like enterprise substrate. *(If true: steal the platform pattern; stop claiming those pieces are unique.)*
- **H1 — Portable semantic-kernel:** OMNI has a genuine care-semantic + authority kernel, but it can run ON Palantir/Epic/ServiceNow rather than replacing them.
- **H2 — Operating-system:** the care semantics require a coherent substrate existing platforms cannot provide without accumulating unsafe seams + duplicated authority (the §G.1 seam tax is decisive).
- **H3 — Non-software moat:** the software semantics are copyable; the durable moat is the contract corpus + replay/safety evidence + provider network + local adoption + outcomes + implementation knowledge.

The verdict may be a COMBINATION (e.g. "H1 + H3: OMNI owns a portable healthcare semantic kernel + evidence flywheel while hosting on enterprise infra"). Each hypothesis must be assigned `supported` / `partially` / `refuted` with fixture + §C.1 evidence — no binary "unique vs config."

---

## §I — Guardrails
- Steelman, never strawman (§C). A named feature ≠ a passed fixture (§E); no bare PASS without the §C.1 grammar.
- `analysis_nonbinding`, propose-only; consumes evidence, edits no contracts.
- **C3.8 = baseline, NOT pre-protected from falsification (corrected from "do NOT reopen"):** do not rerun the C3.8 ingestion arc or casually relitigate its accepted findings; treat it as the baseline. **BUT if Task D produces a material contradiction, a failed fixture, or a stronger enterprise pattern, route an explicit `affirm / sharpen / supersede / reject` disposition WITH evidence** (a falsification test cannot forbid falsifying its own baseline). Do not start a comparator wave beyond the §D roster.
- **Scope discipline (shell vs population):** THIS document defines the method + grammar + schema. **Population — filling fixture manifests, scoring the §C.1 grid, writing §0–§7 — happens at Task-D RUN (after `EVRUN-2026-000005`), NOT now.** Do not let building the test become the spine-before-the-spine.
- The **test must be able to LOSE** (§H pre-commitment): H0/H1/H3 outcomes are successes, not OMNI failures.
- The 15-minute-agent test (retention) ≠ this test (truth) — do not conflate (`EVRUN-2026-000004` §0.6).
- No v4 Spine Draft 0 before the §7 admission verdict.

---

## §J — Change log
- `2026-07-12` — INPUT-CHECKLIST addition (not a method change; shell stays FROZEN): added the **Platform source-carrier verification** to §B (Knox) — the bounded loop-capture AR-XWALK cited video carriers at name-level only, so Task D must reconcile the wave-ingestion Build-OS/runtime/eval/security/long-horizon carriers against the Platform capture before scoring Platform fixtures. Also noted the two loop captures as inputs (naming-clean after the Build-OS→Platform-Change-Engineering rename).
- `2026-07-11` — Shell authored (Opus, operator-directed; Knox design). `shell_pending_population` / `required_pre_spine_input`. Runs after `EVRUN-2026-000005`. Wired: controlling plan (Task D) + `HANDOFF_2026-07-11…` + read-graph route. Catalog row owed on population.
- `2026-07-11` (ADJUDICATION upgrade — Knox 4-point critique + Opus refinements; **shell FROZEN after this**) — added **§C.2 decision rule** so the scoring grammar can't be gamed by selective emphasis: R·E·A·X·P·L = a 6-dim profile not a scalar (Axis 1 reworded) · **non-compensatory HARD care invariants vs graded comparative advantages** (no weighted total turns an authority failure into a pass) · **Opus sharpening: unsafe-collapse (proceeds despite missing control = hard fail) vs fail-safe-refusal (blocks/escalates = comparative gap)**, and the calculus applies to OMNI's OWN fixtures (ties "must be able to lose") · symmetric **construction-brief burden** for every PLAUSIBLE_24_MONTH + OMNI_target (kills Palantir-omnipotence AND OMNI-blueprint-superiority) · **three test modes** (standalone-stack / component-and-seam / pattern-transfer) mapped to tiers so the matrix isn't trivialized · **H0–H3 pre-registered discriminators** · §7 keyed to the rule. **Accountability axis renamed** → "Accountable ownership + liability traceability" (operational-accountability / legal-liability-evidence / redress — *OMNI does not declare liability; it prevents responsibility from becoming unowned or untraceable*). **FROZEN `shell_pending_population`** — next touch = population at Task-D run.
- `2026-07-11` (GRAMMAR upgrade — Knox 10-point critique + Opus refinements) — added the anti-feature-bingo evaluation grammar so the test can ANSWER, not just ask. **§C.1** = capability ladder R·E·A·X·P·L + implementation-class + maturity 4-state (production-vs-blueprint: unbuilt = design advantage not production advantage) + config-cost/fragility (STRUCTURED QUALITATIVE, not fake LOC metrics — Opus refinement) + **accountability/liability axis** (healthcare-unique — who is the accountable committer across the seam; Opus add) + **compounding/trajectory axis** (moat may be a RATE not a state; copyability half-life; Opus add). **§D** re-tiered (① Palantir · ② Epic/Microsoft-Nuance · ③ ServiceNow/Salesforce · ④ donors) to kill false symmetry. **§E.1** = deterministic fixture manifests (name exact `HCASE`; one exact research scenario) + failure-injection suite + the longitudinal SECOND loop. **§F** matrix scored on §C.1 (not pass/fail); §3 (pattern-level) vs §6 (layer-level) ledgers disambiguated; §6 adds the `OWN/BUILD/BUY/HOST_ON/WRAP/PARTNER/USE_AS_RAIL/STANDARDIZE/REJECT` strategic layer decision. **§G.1** = composite seam-tax + the two-way substrate test ("can OMNI run ON the composite?"). **§H** = pre-registered rival hypotheses H0–H3 (replaces the anchoring "preliminary expectation") + the **test-must-be-able-to-LOSE** governance pre-commitment. **§I** = C3.8 is baseline-not-pre-protected (falsifiable with disposition) + shell-vs-population scope discipline. Still `shell_pending_population`; population runs at Task D.
