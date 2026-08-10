# v4 — FAI — OMNI Architecture — ARC EXECUTION PLAN (R4)

Document type: `handoff_or_readiness_gate` (the plan the next agent runs; **not** the architecture)
Authority: `analysis_nonbinding`. Binds nothing. Mints nothing.
Status: **`execution_plan_R4 · pending_nick_knox_acceptance · nothing_started`**
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: converts the accepted Gate-0 charter into an executable program. **The next agent executes this. It does not redesign it.**
Manifest action: `add_tier2` **PROPOSED** — not landed.
Review gate: `user_knox_required`

**Companion:** the Gate-0 charter (**R5**) — the *why*, and the ONLY current gate sequence lives **here**, not there.

---

## §0 — Correction receipt R1 → R2 → R3: two self-inflicted errors, both verified against the estate

**(1) I made an optional catalog mandatory.** R1 declared `omni_work_method_repertoire.md` a *"mandatory consult at every gate"* and required a Pressure Coverage Matrix row per uncertainty. **Its own header and passport say the opposite, verbatim:**

> *"**optional method catalog** … **This is an optional catalog, not a workflow.** Open it when seeing the available approaches would improve a decision; otherwise ignore it. **It prescribes no order, requires no method, has no minimum count** … **`METHOD-000` — Direct reconciliation. Read the controlling sources and answer. Default.** Use a specialized method only when a named uncertainty demands one … originates no architecture or execution authority."*

**Deleted.** This is the same error class as everything else this session: take something that already exists, fail to read its own terms, and impose ceremony on top of it. **Corrected method law at §4.**

**(2) "Most teams do considerably less — a docs folder, ADRs and a README is the whole gap" was false, and it contradicts OMNI's own landed doctrine.** Build OS `10` Rollout Step 5 already targets, verbatim: *"Automated registry, ownership leases, shared-surface locks, merge queue, semantic collision detection, parent/child scheduling, status projection and proof automation"*, plus a **declarative machine-readable work-package manifest**, a **manifest validator**, an **ownership claim/lease/transfer mechanism**, **shared-surface policy checks (policy-as-code)** — *"a lane physically **cannot** land an edit to a protected control surface"* — and a **cold-boot / replacement-agent eval suite**.

**So OMNI accepted this target months ago and I benchmarked us against a modest app team.** Deleted. The correct comparator class is at §3.

---

## §0.5 — ROOT REQUIREMENTS OF OMNI ARCHITECTURE — written here NOW, relocated at G2

**The operator's charge: we compressed to four requirements after an enormous spend, and they were sitting in a chat window.** Knox proposed preserving them as a *required G2 deliverable*. **That is still evaporation** — G2 is several gates away, inside a plan, inside an unaccepted PR. **So the text is written here, in full, now. G2 RELOCATES it to `/architecture/README.md`; G2 does not author it.**

> ### Root requirements of OMNI Architecture
>
> **1. EXPLICIT.** Every binding architectural requirement exists in an OMNI-owned, substrate-independent canonical form. **No vendor, tool, conversation, code path, or human recollection is the only place a rule lives.**
>
> **2. RESOLVABLE.** For any mission, actor, operator, federation, tenant, deployment posture and as-of point in time, the exact applicable architecture — standards, profiles, variations, exceptions, owners and proof obligations — can be **deterministically resolved**.
>
> **3. EVOLVABLE.** An architectural change can be proposed, authority-checked, impact-analyzed, reviewed, versioned, propagated, migrated, coexisted, deprecated and **reversed** — without silently forking the architecture or losing history.
>
> **4. OBSERVABLE.** Divergence between the declared architecture and artifacts, code, configuration, effective deployment state and runtime evidence is **detected, attributed, and routed to a governed correction path**.
>
> *State it. Resolve it. Change it safely. Know when reality diverges.*

**Status: `candidate_architecture_system_requirements`.** Not doctrine, not care law, not Reactor invariants, not thesis prose. **Ratification only after G3 reconciliation and G4 proof.**

**Each maps to an existing acceptance test, so none is decorative:** Explicit → **test 11** (substrate independence) · Resolvable → **tests 1, 2, 8** · Evolvable → **tests 3, 4, 5, 6, 10** · Observable → **test 9**.

**Ownership split, so this is not another homeless compression:** the architecture entrypoint owns the compact normative statement · the operations standard owns the detailed obligations · the conformance suite proves them · Build OS executes the change and proof mechanics · Agent Runtime applies them to runs · the spine locates them · the thesis explains why they matter · domain contracts and profiles compile them locally **without restating them**.

**And the honest diagnosis of why this took so long:** we never lacked these four. **Explicit** is `GRD-033`/`GRD-034`. **Resolvable** is the question the effective-architecture compiler exists to answer. **Evolvable** is Build OS Step-5. **Observable** is drift detection. **All four existed as fragments in four different places and never once as a single statement with an owner** — which is this arc's thesis, applied to this arc's own output.

---

## §1 — The two halves. R1 designed one of them.

| | | R1 status |
|---|---|---|
| **A — OMNI Architecture (content)** | standards · views · contracts · patterns · operating profiles · deployment profiles · vocabulary · decisions · conformance requirements | designed |
| **B — OMNI Architecture Operations** | how the architecture is discovered, changed, reviewed, compiled, propagated, monitored for drift and repaired — by humans **and agents** | **under-specified** |

**Content says what must be true. Operations makes it stay true.** R1's acceptance test — cold routing — tests only *"can I find it."* **That was the overcorrection**, and Knox is right: it does not test which version applies, what breaks if this changes, who must approve, whether it propagated, whether code still conforms, which deployments are stale, whether behaviour drifted, or whether it can roll back.

**Ten operations capabilities, and each already has a partial or an owner in this estate:**

| Capability | What it must do | What exists today |
|---|---|---|
| **architecture catalog / graph** | IDs, owners, versions, roles, dependencies, applicability, supersession, proof links — **generated from canonical source, never a second copy** | `01_master_corpus_catalog.md` + `04_manifest_read_graph.md` — hand-maintained, prose |
| **change proposal system** | branch an architecture change, identify affected resources, require owner review, preserve rationale | git branches + `CODEOWNERS` + AWP §5 |
| **impact analysis** | traverse standard → profile → contract → code → deployment → test **before** approval | nothing |
| **effective-architecture compiler** | resolve global standards + operating profile + deployment profile + operator variation into one snapshot | nothing |
| **conformance engine** | test inherited requirements, forbidden loosening, source/commit authority, profile compatibility | C4.6 `C1`–`C16` · Reactor fixture (31/31) · `check-checkpoint-pointer.mjs` |
| **propagation engine** | generate or propose downstream updates to contracts, templates, code, policies, tests, config | nothing |
| **fleet reconciliation** | which deployments run which architecture/profile versions; upgrades, skew, deprecation, exceptions | nothing |
| **architecture observability** | compare declared architecture to code, config, deployment and runtime behaviour; detect drift | nothing |
| **agentic workbench** | bounded research / impact / migration / conformance agents that cooperate **without any gaining universal authority** | Agent Runtime capture (map-depth) |
| **exception / debt lifecycle** | approved deviation with owner, scope, expiry, compensating control, removal-or-promotion | `08` + FWREG, prose only |

---

## §2 — Multi-agent operating loop — bounded roles, no sovereign architect

```
external change · runtime drift · operator request · domain finding
   → evidence agent            preserve exact source
   → classification agent      terminus · authority · owner · profile · decision state
   → proposal agent            scoped branch; CANNOT merge
   → impact agent              affected standards/contracts/profiles/code/tests/deployments/agents
   → owner review              domain owners for their resources; steward for cross-cutting
   → conformance agent         policies · contradictions · compatibility · negative controls
   → migration agent           approved templates / transformation recipes
   → integrator                merges the authorized coherent change set
   → fleet agent               publish version; resolve rollout per deployment profile
   → observer agent            compare intended vs live; opens proposals, NEVER silently rewrites
```

**Every run pins:** represented principal · agent runtime profile · architecture version · operating profile(s) · deployment profile · federation/operator/tenant/site · permitted tools · writable resources · required reviewers · commit ceiling · proof obligations.

**This is where Agent Runtime, Build OS, GCE and the deployment model meet.** It is **not** a new agent framework — it is a binding of the existing Agent Runtime object model (`agent_definition` · `agent_runtime_profile` · `agent_session` · `agent_run` · `subagent_run` · authority ceilings · context policy · delegation) to architecture resources.

---

## §3 — The tool decision, made rather than hedged

**The operator's instruction is explicit: stop naming these for the fifth time.** So this is a decision table, not prose. **Three of these already exist here in embryo — this is finishing something started, not greenfield adoption.**

| Build OS Step-5 target | Off-the-shelf | Decision | Why now / why not |
|---|---|---|---|
| machine-readable work-package manifest + validator | **JSON Schema + CI** | **ADOPT at G2** | **three DISTINCT objects, three schemas** — §3.1 |
| approval + integration control | **`CODEOWNERS` + rulesets + required checks + merge queue** | **ADOPT at G2** | `.github/CODEOWNERS` exists but is **stale** — legacy map only, no `/architecture`. Rewrite it |
| **ownership leases · active claims** | **thin OMNI resource-claim checker** (`change_id` · principal · owner · branch · base · `claimed_resources[]` + mode · `lease_expires_at` · reviewers · state) | **ADOPT at G2** | **CODEOWNERS does NOT implement leases** — no exclusivity, expiry, transfer or overlap detection. CI rejects overlapping exclusive claims, expired leases, and writes to undeclared resources |
| shared-surface policy checks — *"a lane physically cannot land an edit to a protected control surface"* | **OPA / Conftest in CI** | **ADOPT at G2** | `check-checkpoint-pointer.mjs` + the `checkpoint-pointer` workflow **are already policy-as-code in embryo.** Generalize them |
| architecture catalog / graph, owners, relationships | **Backstage-COMPATIBLE envelope with OMNI-defined kinds and relations** | **ADOPT the envelope at G2; DEFER the portal** | **OMNI descriptors stay canonical; Backstage entities are a GENERATED consumer. Backstage `spec.owner` is display/responsibility metadata and is NOT OMNI authority** |
| runtime evidence transport | **OpenTelemetry semantic conventions** | **ADOPT the convention at G2** | **evidence vocabulary, NOT the conformance or drift authority.** Define `omni.architecture.version` · `omni.operating_profile.ids` · `omni.deployment_profile.id` · `omni.federation.id` · `omni.conformance.result`. **PHI and raw patient context are PROHIBITED in attributes** |
| transformation recipes | **stack-native TypeScript codemods first**; OpenRewrite/Moderne later | **DEFER — trigger: a repeatable, mechanically specifiable semantic transformation WITH a decisive verifier** | **not an edit count** — a 2-file change can warrant a recipe and a 50-file change can be too ambiguous to automate. OpenRewrite's OSS core is Java-strongest; TS relies on Moderne CLI |
| desired-vs-live reconciliation | **Argo CD / GitOps** | **DEFER — conditional on the eventual deployment substrate** | **the LOGICAL fleet exists before Kubernetes does.** Do not pick a K8s reconciler because the word 'fleet' appears |
| durable multi-agent execution | **LangGraph / LangSmith** | **DEFER — owned by Agent Runtime, post-spine** | do not build the runtime pre-spine |

**Boundary, stated once so it stops being restated:** these tools carry **mechanism, never authority**. A catalog format does not own OMNI's ownership model; a policy engine does not own the laws; a GitOps reconciler does not own what "conformant" means. **`GRD-033` — visible ≠ authorized — applies to every one of them.**

**And what those tools do NOT supply, which is the whole reason OMNI exists:** the care-authority physics — clinical adoption, patient authority and refusal, source sovereignty, payment-versus-care separation, correction and reopening, custody continuity, multi-principal non-fungible authority. **Palantir is materially ahead in operationalizing a large semantic estate.** OMNI's differentiated work is making clinical adoption, patient authority and refusal, source sovereignty, payment-versus-care separation, correction and reopening, custody continuity and non-fungible multi-principal authority **first-class and portable across substrates**. **This arc has NOT established that Palantir fails to supply that constitution** — only that supplying an ontology platform does not, by itself, supply it. *(R5: the earlier categorical claim is withdrawn as more certainty than the work supports.)*

---

## §3.9 — Two operator corrections that are not in the review's patch list

### §3.9.1 Prior inputs are INHERITED, not re-derived — and they are named
The operator's charge: *"don't build an arc plan that negates the prior inputs as though we're inventing Build OS concepts for the first time."* **Upheld. Verified present and added to the G1 Lane-2 floor as mandatory:**

- **Six AI-corpus concept registries with routing maps** — `EVRUN-2026-000001` · `000002` · `000003` (wave 3) · `000005` (wave 4) · `000006` (wave 5) · `000011` (wave 6), under `ingestion/outside_learning/analysis/`. **These are the distilled form of the 300+ Stanford / IBM / LangChain / Karpathy ingests and are the correct consumption unit — the raws are NOT rescanned.**
- **`FUTURE_ARC_2026-05-12_federation_permeability_topology.md`** — the prior federation/meta-federation arc.
- **Build OS `09`/`10`/`11`** including the Step-5 target, and the prior build arcs that produced them.

**Rule for G1 Lane 2:** for every operations capability at §1, **first check whether a wave registry already routed a concept to it.** Anything presented as new must first fail `M-106` EXISTS-AS against these six registries. **An arc that re-derives Build OS concepts the video corpus already routed has failed before it starts.**

### §3.9.2 The frontier test — the operator's sharpest critique of our own Build OS
> *"Our Build OS concepts strike me as sufficient… basic… but not 2030 and 2035 oriented and not frontier oriented. Which was the point of 300+ ingests."*

**This is correct and it is the difference between the seed and the sprout.** Build OS Step-5's targets — manifests, validators, leases, merge queues, policy-as-code, status projection — are **competent 2020s software-estate practice**. They are what a good platform team builds today. **They are not an agent-native operating model for 2030–2035**, which is what the corpus was ingested to inform, and **no arc has consumed those registries for operations design.**

**So G1 carries an explicit frontier obligation.** The operations model at §1 must be evaluated twice:
1. **against current practice** — does it match what mature estates do today (the §3 tool table);
2. **against 2030/2035 agent-native operation**, using the six registries — *what does this model assume that stops being true when a thousand agents a day propose changes, when review capacity is the bottleneck rather than authoring, when drift is continuous rather than episodic, and when the reader of the architecture is more often a machine than a person?*

**Anything that only passes (1) is recorded as `current_practice_only` with the frontier gap named.** Passing (1) alone is the bean sprout.

### §3.9.3 Pluggability is a conformance test, not a promise
The operator, restated for the last time so it stops needing restating: *third-party tools may be employed; they may never own the build or the machinery; they must be replaceable by any competing product.*

**Made testable as acceptance test 11 (§5, G4):**

> **Remove every adopted third-party tool. The architecture must still resolve, and every law must still be stated and checkable.** Tools may make conformance *faster and automatic*; **none may be the place a rule lives.** A rule expressible only inside a vendor's format has already been surrendered.

**This is the DNA test.** Content gets rewritten, tools get replaced, deployments multiply — the seed survives only if the laws, the resolution and the change process are substrate-independent. **`GRD-033` (visible ≠ authorized) and `GRD-034` (measured by preservation, not integration count) are the existing guardrails; test 11 makes them mechanical.**

## §4 — Method law, corrected
**One pointer. `doctrine/omni_work_method_repertoire.md` is an optional catalog. `METHOD-000` — read the controlling sources and answer — is the default and is valid.** Consult it only when a **named material uncertainty** would be better answered by a specialized method; record the choice **only when it changes scope, independence, cost or acceptance.** **No per-gate matrix. No mandatory consult. No buffet proof.**

**The four recurring source checks — terminus · authority/maturity · EXISTS-AS dedup · decision-state — become architecture-intake automation at G2, not four instructions every agent rereads forever.** That is the difference between building a system and writing another protocol.

---

## §5 — Gates

### G-PRE — FRESH-CONTEXT FRONTIER COUNTER-DESIGN *(runs BEFORE G0 acceptance)*
**Knox placed this inside G1. Moved forward, and that is the substantive change in R6.** The highest-value moment for a blind counter-design is **before we commit to the plan**, not after the integrator is appointed and four gates are underway. If three fresh designs converge on a shape this plan cannot produce, **that is a plan defect and we want it now** — for the cost of three prompts.

**It also answers the operator's question directly: yes, pre-pressure the plan — but by attacking the PROBLEM blind, not by reviewing the plan.** A blind design subsumes a plan review: anything three independent designs produce that our arc cannot reach is a defect in our arc. **One exercise, not two.**

**Step 1 — recover prior blind work first (`M-106`).** The estate already contains blind runs: the **C4.4** fresh repo-connected Gemini adversary and fresh authorability angles · the **`EVRUN-000012`** frozen facts-only blind decomposition · the **C4.6** blind Gemini submission. **Reuse everything in scope. Run only the delta** — none of those asked the present question at this scope.

**Step 2 — three fresh instances, distinct model families, no cross-exposure.** They receive a **sanitized facts-only brief** and **none of**: this plan · the `/architecture` shape · Reactor's classification · the content/operations split · the eleven tests · the tool decisions · Knox's or my framing.

**They are asked for:** architecture artifact taxonomy · content model · operations/change model · agent and fleet operating model · deployment and variation model · repository shape · conformance and observability model · **the ten most dangerous omissions** · falsifiers · **what must be correct at planting versus what may evolve later**.

**And the inverse question, which is the half that actually matters:** *"Which parts of your proposal become wrong because healthcare contains legally and professionally independent principals whose truths, commitments, refusals and liabilities cannot be collapsed into one platform?"* **Without it, a frontier model will hand us one ontology, one workflow engine, one policy plane, one control plane, one event graph — the god-layer, in fashionable clothing.**

**Honest limit, stated up front:** a blind instance given a facts-only brief produces **generic frontier architecture**. It is **strong at finding what we omitted** and **weak at judging what we got right that generic practice gets wrong**. **Its value is asymmetric and the exercise is scoped to the strong half.**

**Handling:** all three preserved verbatim · **no voting** · **agreement between models is not corroboration** · **no model authors the architecture**. One unblinded comparison returns only: **convergent omissions · competing decompositions · assumptions unique to one model · what OMNI already has · what OMNI misses · false imports from generic software practice · questions requiring operator judgement.**

**Verdicts:** `PLAN_SURVIVES` · `PLAN_SURVIVES_WITH_NAMED_ADDITIONS` · `PLAN_MATERIALLY_INCOMPLETE_<reason>`. **A third verdict amends the plan before G0. It does not reopen whether OMNI Architecture exists.**

### G0 — ACCEPT THE PROGRAM
Charter · this plan · roles · authority · writable surfaces · stop conditions · **exact first G1 action**.
**Blocked until accepted:** integrator appointment · checkpoint repoint · any shared-surface write.
**Verdicts:** `READY_TO_EXECUTE` · `READY_WITH_EXACT_AMENDMENTS` · `NOT_READY_<reason>`.

### G1 — CONVERGE THE OPERATING MODEL *(external and internal IN PARALLEL, then reconcile)*
**Knox's correction accepted: not external-first, which risks an external taxonomy authoring OMNI; not internal-first, which is six months of scar tissue. Both, then reconcile.**

**Lane 1 — external mechanisms** (primary sources, mechanism only, `M-207` transfer discipline): **42010** (viewpoints/views/**correspondence rules**) · **SEI** (variability, variation points) · **FHIR** (canonical id, versioning, differential, constrain-never-loosen, validation) · **IHE** (actors/transactions/required groupings, multi-profile conformance) · **AUTOSAR** (standardized interfaces, internals free) · **AWS lenses** (one workload, many lenses) · **Palantir** (branching, proposals, resource protection, checks, lineage, affected-resource builds, interfaces, package dependencies) · **Backstage** (catalog, entities, relations, ownership, scaffolding) · **IBM** (agent catalog + control plane) · **LangGraph/LangSmith** (durable execution, HITL, eval) · **OPA** · **OpenRewrite** · **Argo CD** · **OpenTelemetry**.

**Lane 2 — internal foundation** (controlling termini): **Artifact Index** · governance taxonomy · **05-17 pattern (Tier-0 #14)** · System Map · Surface Map · **GCE** · Polaris · **Build OS `09`/`10`/`11` incl. the Step-5 target** · **Agent Runtime & Harness** · **C4.4 Source Estate / Knowledge Reservoir / Domain-Owned State / Evidence Workbench / Compiled Projection / Mission Context** · Reactor `EVRUN-000007/000008` termini · Care §1b/§5b/§5b.1/§18/§19 · Platform · Accountability · C4.6 §0.5/§12 · C3.8 G4 · Federation tenancy · pre-spine §5 deployment postures · conformance estate.

**Lane 3 — prior OMNI inputs (mandatory, §3.9.1); the blind counter-design already ran at G-PRE and its comparison output enters here:** the six AI-corpus concept registries · the federation permeability arc · prior build arcs. **Inherit; do not re-derive.**

**Reconcile into:** artifact metamodel · **architecture-operations loop** · architecture graph semantics · change lifecycle · profile/deployment resolution · conformance and observability model · **adopt/reject/transfer-limit matrix**.
**No vendor adoption decision beyond §3. No market/moat study — that stays Task-D.**
**Verdicts:** `MODEL_CONVERGED` · `MODEL_CONVERGED_WITH_NAMED_GAPS` · `NOT_CONVERGED_<reason>`.

### G2 — ERECT THE REAL OUTPOST
Install the `/architecture` package **and its operations scaffold**: canonical metadata contract · **generated** catalog/graph path (never hand-maintained) · proposal + review contract · architecture versioning and change control · operating **and** deployment profile structures · variation points · effective-architecture snapshot structure · conformance-policy scaffold · **the §3 ADOPT tools wired** (JSON Schema validator · CODEOWNERS/branch protection · OPA in CI generalized from the existing pointer check · Backstage-format entities · OTel conventions) · **architecture-intake automation for the four source checks** (§4).
**Guards from the first commit:** owns no truth · holds no commit authority · **C4.6 `C10`** applies to this package itself · no `constitution.md` · **no hand-maintained manifest duplicating the catalog**.
**Verdicts:** `OUTPOST_INSTALLED` · `..._WITH_NAMED_DEBT` · `BLOCKED_<reason>`.

### G3 — RECONCILE THE FOUNDATION DEEPLY; CLASSIFY THE TAIL
**Knox's split accepted.** **Deeply reconcile now** — because these define the container itself: artifact model · maps · **GCE** · **Reactor** · **Build OS** · **Agent Runtime** · **C4.4** · Care/Platform/Accountability cross-cutting laws · profile and deployment model · conformance.
**Classify now, deep-reconcile on next substantive touch:** the 16 domain contracts and the long tail — unless a foundational conflict surfaces.
**Landed here:** two taxonomies reconciled · Reactor and GCE installed **into their standard roles** · 05-17 superseded or narrowed · `WI16` corrected · maps migrated or superseded, **never duplicated**.
**Verdicts:** `FOUNDATION_RECONCILED` · `..._WITH_NAMED_GAPS` · `BLOCKED_<reason>`.

### G4 — OPERATE IT END TO END, THEN INSTALL
**Run the real loop on a migration already owed** — installing Reactor and GCE into their standard roles and migrating the maps — **not a toy exercise.**

**Ten acceptance tests. Routing is the first, not the whole:**

| # | Test |
|---|---|
| 1 | **Routing** — cold agent finds the right architecture with no historical filename |
| 2 | **Applicability** — resolves exact standards, profile versions, deployment posture, active exceptions |
| 3 | **Impact** — one standard changes; system enumerates affected profiles, contracts, code, tests, deployments, owners |
| 4 | **Parallel change** — two agents propose overlapping changes without silent overwrite or duplicated architecture |
| 5 | **Authority** — agents may propose broadly; only rightful owners approve and commit |
| 6 | **Propagation** — an approved change produces or requests every required downstream update |
| 7 | **Conformance** — a profile loosening an inherited rule **fails**; unauthorized truth ownership **fails**; ≥1 negative control produces no defect; the deliberate non-cousin is **rejected** |
| 8 | **Fleet** — small-operator, composed-enterprise and federated-node deployments resolve different effective snapshots **without forking the architecture** |
| 9 | **Drift** — code, config or deployment that no longer conforms is detected |
| 10 | **Upgrade / rollback** — versions move forward, coexist, deprecate and roll back under explicit rules |
| **11** | **Substrate independence (the DNA test)** — with every adopted third-party tool removed, the architecture still resolves and every law is still stated and checkable |

**Then install:** Build Entry enforces profile declaration · Build OS consumption rules · Agent Runtime bindings · read graph + catalog + checkpoint · **spine and thesis input-state receipts** (may-rely / must-not-assume / remains-open) · **then Insurance returns** — `C3.9` → consume → rerun affected traces → reconcile → **`E2` last**.
**Two receipts, never conflated** (`installation maturity ≠ evidence maturity` — the founding diagnosis of this arc):
- **`architecture_operations_v0_conformance`** — descriptor, repository and CI level: routing · applicability · impact · authority · propagation · policy · logical-fleet · versioning · substrate independence.
- **`runtime_and_fleet_proof`** — `not_yet_due`. Production reconciliation, live care-agent behaviour, real rollback, operational SLOs and customer upgrade behaviour are **not** provable here and must not be read into the first receipt.

**Verdicts:** `INSTALLED` · `INSTALLED_WITH_NAMED_DEBT` · `INSTALL_BLOCKED_<reason>`.

---

## §6 — Scope fence
**Settles:** governance taxonomy · architecture artifact-role taxonomy · deployment/profile taxonomy · the operations loop.
**Does NOT settle:** the domain/product/clinical ontology (continuous, owned by contracts and profiles) · market/moat pressure (**Task-D and the spine — mechanism comparison stays here, commercial claims do not**) · any implementation lane · the Agent Runtime build itself.

---

## §7 — STOP RECEIPT
| Field | Value |
|---|---|
| Artifact | arc execution plan **R2** |
| Corrected from R1 | **method-repertoire ceremony deleted** (violated its own contract) · **"most teams do less" deleted** (contradicted Build OS Step-5) · **Operations half added** · external + internal now **parallel** · **10 acceptance tests** replace routing-only · foundation deep-reconciled, tail classified · **tool decisions made, not hedged** |
| Shared control-plane surfaces | **0 touched** |
| Minted | **nothing** |
| Next | Nick + Knox accept, amend or reject → integrator appointment → G1 |

**STOP: `execution_plan_R2_pending_acceptance`**
