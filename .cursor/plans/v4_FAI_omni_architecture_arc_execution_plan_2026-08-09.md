# v4 — FAI — OMNI Architecture — ARC EXECUTION PLAN (R6)

Document type: `handoff_or_readiness_gate` (the plan the next agent runs; **not** the architecture)
Authority: `analysis_nonbinding`. Binds nothing. Mints nothing.
Status: **`execution_plan_R6 · pending_operator_and_independent_review_acceptance · nothing_started`**
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: converts the accepted Gate-0 charter into an executable program. **The next agent executes this. It does not redesign it.**
Manifest action: `add_tier2` **PROPOSED** — not landed.
Review gate: `user_knox_required`

**Companion:** the Gate-0 charter (**R6**) — the *why*, and the ONLY current gate sequence lives **here**, not there.

---

## §0 — Correction receipts

### R5 → R6 — the amendment cycle, and a third re-derivation caught in review

**R6 applies the PRE-0 amendment cycle** (ledger §6, Amendments 1–11). **It also withdraws an R6-draft overreach:** the seven-seat authority model authored during the cycle **re-derived authority architecture the estate already holds** — `contracts/rbac_authority_contract.md` (`domain_contract`, `canonical` for the authority/capability substrate, `draft_for_ratification`, controlling spine **DL-18 LOCKED**), the Agent Runtime & Harness capture (*"the `agent_definition` authority ceiling … **never originates or overrides** authority; effective permission is an intersection"*), the thesis `delegated_authority_envelope` / `capability_envelope` split, `EVRUN-2026-000007`'s multi-principal/multi-actor/agent-mediated correction, and Care §5b.

**That is the THIRD re-derivation in a single session** — after `C4.4 §R` twice (ledger §0.1 L-1). **The pattern is now the finding:** under current routing, re-derivation is the *default* behaviour, not an occasional lapse. It recurred inside the artifact written to stop it, by an agent that had just documented the first two instances.

**Consequence:** the seat catalog is demoted to a **provisional change-governance profile for this arc's transaction only** (`§G0`), and **authority reconciliation becomes a required G1 work package** (`§G1-AUTH`). **No authority model is settled here.**

### R1 → R5: two self-inflicted errors, both verified against the estate

**(1) I made an optional catalog mandatory.** R1 declared `omni_work_method_repertoire.md` a *"mandatory consult at every gate"* and required a Pressure Coverage Matrix row per uncertainty. **Its own header and passport say the opposite, verbatim:**

> *"**optional method catalog** … **This is an optional catalog, not a workflow.** Open it when seeing the available approaches would improve a decision; otherwise ignore it. **It prescribes no order, requires no method, has no minimum count** … **`METHOD-000` — Direct reconciliation. Read the controlling sources and answer. Default.** Use a specialized method only when a named uncertainty demands one … originates no architecture or execution authority."*

**Deleted.** This is the same error class as everything else this session: take something that already exists, fail to read its own terms, and impose ceremony on top of it. **Corrected method law at §4.**

**(2) "Most teams do considerably less — a docs folder, ADRs and a README is the whole gap" was false, and it contradicts OMNI's own landed doctrine.** Build OS `10` Rollout Step 5 already targets, verbatim: *"Automated registry, ownership leases, shared-surface locks, merge queue, semantic collision detection, parent/child scheduling, status projection and proof automation"*, plus a **declarative machine-readable work-package manifest**, a **manifest validator**, an **ownership claim/lease/transfer mechanism**, **shared-surface policy checks (policy-as-code)** — *"a lane physically **cannot** land an edit to a protected control surface"* — and a **cold-boot / replacement-agent eval suite**.

**So OMNI accepted this target months ago and I benchmarked us against a modest app team.** Deleted. The correct comparator class is at §3.

---

## §0.5 — ROOT REQUIREMENTS OF OMNI ARCHITECTURE — written here NOW, relocated at G2

**The operator's charge: we compressed to four requirements after an enormous spend, and they were sitting in a chat window.** Knox proposed preserving them as a *required G2 deliverable*. **That is still evaporation** — G2 is several gates away, inside a plan, inside an unaccepted PR. **So the text is written here, in full, now. G2 RELOCATES it to `/architecture/README.md`; G2 does not author it.**

> ### Root requirements of OMNI Architecture **as a maintained system**
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

**Status: `candidate_architecture_system_requirements`.** Not doctrine, not care law, not Reactor invariants, not thesis prose. **And explicitly NOT exhaustive of OMNI's substantive laws** — care, patient authority, clinical adoption, consent, source sovereignty, financial separation, safety, privacy and economic laws are all outside this block. **These four are the root properties required for the architecture to remain a living, usable system. Nothing more.** **Ratification only after G3 reconciliation and G4 proof. At G2 this block is relocated verbatim to `/architecture/README.md`; the copy here then becomes a historical pointer — never two maintained normative copies.**

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

## §3 — The tool decision — **candidate defaults, ratified at G1**

**The operator's instruction is explicit: stop naming these for the fifth time.** So this is a decision table, not prose. **Three of these already exist here in embryo — this is finishing something started, not greenfield adoption.**

**★ AMENDMENT 7 (C-08) — these are CANDIDATE DEFAULTS, not ratified adoptions.** R5 fixed the selections here and then forbade G1's evidence pass from changing them: *select tools → run the comparison → forbid the comparison from changing the selection.* That inverts evidence and decision. The cited inheritance does not repair it — **Build OS Step 5 expressly calls its mechanism list a maturity target, "NOT final design," and makes no vendor selection.**

**G1 must issue an explicit verdict on every row — `adopt` · `narrow` · `reject` · `defer` — with its reason.** The work still reaches a decision; it simply stops pretending the decision preceded the evidence. **A candidate default that survives G1 unchanged is a ratified decision; one that does not is evidence the gate worked.**

| Build OS Step-5 target | Off-the-shelf | Decision | Why now / why not |
|---|---|---|---|
| machine-readable work-package manifest + validator | **JSON Schema + CI** | **CANDIDATE → G1 ratifies** | **three DISTINCT objects, three schemas** — **§3.1 (added by Amendment 3)** |
| approval + integration control | **`CODEOWNERS` + rulesets + required checks + merge queue** | **CANDIDATE → G1 ratifies** | `.github/CODEOWNERS` exists but is **stale** — legacy map only, no `/architecture`. Rewrite it |
| **ownership leases · active claims** | **thin OMNI resource-claim checker** (`change_id` · principal · owner · branch · base · `claimed_resources[]` + mode · `lease_expires_at` · reviewers · state) | **CANDIDATE → G1 ratifies** | **CODEOWNERS does NOT implement leases** — no exclusivity, expiry, transfer or overlap detection. CI rejects overlapping exclusive claims, expired leases, and writes to undeclared resources |
| shared-surface policy checks — *"a lane physically cannot land an edit to a protected control surface"* | **OPA / Conftest in CI** | **CANDIDATE → G1 ratifies** | `check-checkpoint-pointer.mjs` + the `checkpoint-pointer` workflow **are already policy-as-code in embryo.** Generalize them |
| architecture catalog / graph, owners, relationships | **Backstage-COMPATIBLE envelope with OMNI-defined kinds and relations** | **CANDIDATE (envelope) → G1 ratifies; portal DEFERRED** | **OMNI descriptors stay canonical; Backstage entities are a GENERATED consumer. Backstage `spec.owner` is display/responsibility metadata and is NOT OMNI authority** |
| runtime evidence transport | **OpenTelemetry semantic conventions** | **CANDIDATE → G1 ratifies** | **evidence vocabulary, NOT the conformance or drift authority.** Define `omni.architecture.version` · `omni.operating_profile.ids` · `omni.deployment_profile.id` · `omni.federation.id` · `omni.conformance.result`. **PHI and raw patient context are PROHIBITED in attributes** |
| transformation recipes | **stack-native TypeScript codemods first**; OpenRewrite/Moderne later | **DEFER — trigger: a repeatable, mechanically specifiable semantic transformation WITH a decisive verifier** | **not an edit count** — a 2-file change can warrant a recipe and a 50-file change can be too ambiguous to automate. OpenRewrite's OSS core is Java-strongest; TS relies on Moderne CLI |
| desired-vs-live reconciliation | **Argo CD / GitOps** | **DEFER — conditional on the eventual deployment substrate** | **the LOGICAL fleet exists before Kubernetes does.** Do not pick a K8s reconciler because the word 'fleet' appears |
| durable multi-agent execution | **LangGraph / LangSmith** | **DEFER — owned by Agent Runtime, post-spine** | do not build the runtime pre-spine |

**Boundary, stated once so it stops being restated:** these tools carry **mechanism, never authority**. A catalog format does not own OMNI's ownership model; a policy engine does not own the laws; a GitOps reconciler does not own what "conformant" means. **`GRD-033` — visible ≠ authorized — applies to every one of them.**

**And what those tools do NOT supply, which is the whole reason OMNI exists:** the care-authority physics — clinical adoption, patient authority and refusal, source sovereignty, payment-versus-care separation, correction and reopening, custody continuity, multi-principal non-fungible authority. **Palantir is materially ahead in operationalizing a large semantic estate.** OMNI's differentiated work is making clinical adoption, patient authority and refusal, source sovereignty, payment-versus-care separation, correction and reopening, custody continuity and non-fungible multi-principal authority **first-class and portable across substrates**. **This arc has NOT established that Palantir fails to supply that constitution** — only that supplying an ontology platform does not, by itself, supply it. *(R5: the earlier categorical claim is withdrawn as more certainty than the work supports.)*

---

## §3.1 — The three objects *(★ ADDED BY AMENDMENT 3 — C-02)*

**R5 committed to "three DISTINCT objects, three schemas — §3.1" and then never wrote §3.1.** That is not a broken cross-reference: it is the boundary between the architecture's declared model and the machine-readable objects G2 must build. A fresh agent would have had to invent what the objects are, which is canonical, their identity and version semantics, their reference rules, who may write each, and how they relate to catalog and read-graph state.

**Three objects. Different lifecycles, different writers, different authority. Conflating any two is the defect this section exists to prevent.**

| | **1 · Architecture Resource Descriptor** | **2 · Architecture Change Manifest** | **3 · Effective Architecture Snapshot** |
|---|---|---|---|
| **Purpose** | declares that an architecture resource **exists**, what it is, who owns it, what it relates to | proposes and carries a **change** through its lifecycle | records what was **actually in force**, as of a moment |
| **Status** | **CANONICAL** — hand-authored, source of truth | **TRANSACTIONAL** — created per change, closed and retained | **GENERATED + IMMUTABLE** — derived, never hand-edited |
| **Identity** | stable `resource_id`, **never reused**, survives renames and moves | `change_id` | `snapshot_id` + `as_of` timestamp |
| **Version semantics** | semantic version; **`resource_id` + version is the citable unit** | monotonic revisions within the change | none — a snapshot is **immutable**; a new state is a new snapshot |
| **Temporal** | `effective_from` / `effective_to`; supersession is explicit and never silent | proposed / reviewed / approved / staged / landed / reverted, each stamped | the **only** object that answers *"what was true on date X"* |
| **Who may write** | the **`domain_owner_approval`** seat for owned resources; **`architecture_steward`** for cross-cutting (§3.5 of the ledger) | any **`proposal_authoring`** holder — **humans and agents alike** | **nobody.** Emitted by CI from 1 + 2 |
| **Who may approve** | domain owner; cross-cutting acceptance seat for cross-cutting resources | per the change's impact set — **every affected owner** | n/a |
| **Relationships** | `owns` · `depends_on` · `specializes` *(profile inheritance)* · `supersedes` · `conforms_to` · `implemented_by` | `changes[]` → resource ids + versions; `impacts[]` → computed closure | frozen resolution of every relation at `as_of` |
| **Validation** | JSON Schema + CI: unknown relation targets **fail**; a claim on an unowned resource **fails**; a profile loosening an inherited rule **fails** | CI: undeclared-resource writes **fail**; overlapping exclusive claims **fail**; expired leases **fail** | regeneration must be **byte-reproducible** from 1 + 2 at `as_of`, or the pipeline **fails closed** |
| **Generation / consumption** | authored; **generates** the Backstage-compatible entity set as a **downstream consumer, never an authority** | authored; drives CODEOWNERS routing and required checks | consumed by resolution, impact analysis, drift detection and **as-of** queries (test 2) |

**Change classes — every Change Manifest declares exactly one** *(★ Amendment 9, C-03)*:

`reversible` · `reversible_with_migration` · `forward_only` · `compensatable_not_reversible` · `externally_committed`

**A change may not be approved without a declared class.** Canonical-identifier, version-semantics and profile-precedence changes are **presumed `forward_only`** and require an **irreversible-change review** before approval. "Evolvable" therefore means: *reversed where semantically safe — otherwise superseded, compensated, or advanced through an explicit forward migration.* **Prior effective snapshots are preserved in every case**, because they are the only record of what was in force.

**Relationship to existing state.** These objects do **not** replace the catalog or the read graph. The catalog remains the governance-routing surface; the read graph remains the boot-loading surface; **descriptors are the machine-readable architecture layer beneath both**, and both should eventually be *generated from* descriptors rather than maintained beside them. **That migration is G4's transaction, not G2's** — and it is exactly the migration G3 stages.

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

### PRE-0 — OPERATOR-AUTHORIZED ARCHITECTURE PREFLIGHT *(NOT a gate; runs before G0)*
**Protocol, both briefs, drop files and the reconciliation obligation live in `v4_FAI_PRE0_preflight_brief_and_protocol_2026-08-09.md`. This is a pointer — the protocol is not duplicated here.**

**Three corrections from R4, all accepted:** **(a)** it is **not a gate** — an unaccepted plan may not authorize its own pre-gate; it runs on operator direction and the arc still begins at G0. **(b)** **A blind counter-design does NOT subsume a plan audit** — R4 said it did and that is withdrawn. **The protocol implements two separate tests through THREE independent contexts: Agents A and B produce blind alternative designs only · Agent C performs an independent grounded audit of this plan only · C never sees A or B · reconciliation begins only after all three source objects are frozen.** **(c)** the defect rule is narrowed: *the plan is defective only where it cannot express, evaluate, adopt, reject or disposition a **materially necessary** capability surfaced by the counter-design.* **Difference is evidence, not authority.**

**★ And the operator's structural correction, which is the important one:** the counter-design is **reconciled into the artifact, not consumed as an appetizer for G0.** Every finding becomes a row in the **PRE-0 reconciliation ledger**, and **G1 and G3 cannot close while any row is undisposed.** *(Gate-1b §15.1 part E applied to the preflight — the exact mechanism whose absence let the Insurance arc's findings evaporate in-thread.)*

**Verdicts:** `PLAN_SURVIVES` · `PLAN_SURVIVES_WITH_EXACT_AMENDMENTS` · `PLAN_MATERIALLY_INCOMPLETE_<reason>` · `PLAN_MATERIALLY_OVERBUILT_<reason>`. **One reconciliation, at most one bounded amendment cycle, then G0.**

### G0 — ACCEPT THE PROGRAM
Charter · this plan · roles · authority · writable surfaces · stop conditions · **exact first G1 action**.
**Blocked until accepted:** integrator appointment · checkpoint repoint · any shared-surface write.

**★ AMENDMENT 4 (C-01, C-09, C-10) — a PROVISIONAL change-governance profile for THIS transaction. Not OMNI's authority model.** R5 named every participant except the one that can accept or reject a cross-cutting architectural decision. That gap is real and blocks G0. **But the R6 draft over-corrected**: it authored a seven-seat authority model and declared it *"canonical in the PRE-0 ledger §3.5"* — from an artifact whose own passport reads `analysis_nonbinding`. **A nonbinding ledger cannot mint canonical architecture by declaration**, and OMNI already holds substantial authority architecture across `rbac_authority_contract.md`, Agent Runtime & Harness, the thesis GCE chain, `EVRUN-2026-000007` and Care §5b.

> **Scope of this table — read before using it.**
> **What it is:** a **provisional change-governance profile** answering exactly one question — *who may propose, review, accept, integrate and administer **this foundational-arc transaction**.*
> **What it is NOT:** OMNI's authority architecture, a domain contract, a general seat ontology, or a replacement for `contracts/rbac_authority_contract.md`.
> **Status:** `candidate_operational_profile` · scoped to `OMNI-FOUNDATIONAL-ARCHITECTURE-INSTALL` · **expires when `§G1-AUTH` delivers.**
> **The durable principle it carries forward is one line:** *a stable role definition belongs in architecture; the current holder belongs in a mutable register.* **That principle survives G1. This table may not.**

**One property is non-negotiable even provisionally: no person, model or vendor name appears in any architecture document.** Current holders live in the **G0 holder receipt** below. Adding engineers, departments or a compliance function is a **receipt edit**.

| Role *(this transaction only)* | May | May **never** |
|---|---|---|
| `cross_cutting_architecture_acceptance` | accept/reject cross-cutting architecture; record override rationale | override a domain owner's truth or contract; accept a change it authored |
| `domain_owner_approval` | approve changes to owned truth, lifecycle, contract, commit authority; **block promotion into owned truth** | bind another domain; accept cross-cutting alone |
| `architecture_steward` | maintain coherence; prepare cross-cutting decisions; run impact + correspondence | override domain ownership; accept its own proposals |
| `independent_review` | produce **required** review evidence; force **recorded disposition** | veto autonomously; commit; hold domain or repo authority |
| `proposal_authoring` | research, propose, author, test — **humans and agents alike** | accept, approve or commit |
| `integration` | land an **already-accepted** coherent change set | resolve substantive disagreement by merging; decide content |
| `repository_administration` | apply hosted settings; issue the administration receipt | decide architecture content |

**Rules:** many holders per role and many roles per holder · the same actor may not hold `proposal_authoring` and `cross_cutting_architecture_acceptance` **for the same change**, nor co-exercise `integration` with acceptance on the same set · **a role with zero holders makes every dependent gate fail closed, never default upward.**

**Agent grants — the arc profile and the inherited posture, kept separate.**

> **For PRE-0 and G0 (this transaction):** agent grants are limited to **proposal authoring, research, verification and testing.** No agent holds cross-cutting acceptance, domain-owner approval, or independent repository authority here.
>
> **General OMNI posture (inherited, NOT authored here):** a software agent is a **nonhuman actor** operating under a versioned runtime profile and a delegated grant. It **does not become an accountable principal, domain owner or professional authority merely by acting.** Every consequential act resolves to a **non-null accountable principal · authority basis · capability/action envelope · purpose · scope · current validity · rightful commit owner.**

**The R6 draft's "agents may hold `proposal_authoring` only" is DELETED as a universal rule** — it is an arc restriction, and stating it universally contradicts the estate, which already contemplates agents performing bounded operational actions, conformance work, ministerial execution and tool invocation under delegated capability with point-of-consequence reauthorization. **The durable law is not *"agents may only propose"* but *"an agent never self-authorizes."*** Its two metaphysical companions — *"agent = actor always"* and *"agent ≠ principal ever"* — are also deleted: they make eternal claims about future legal regimes that this arc has no standing to make. **Which action classes an agent may perform is a question of grant and action class, resolved at `§G1-AUTH` — not an identity claim.**

**Disagreement rule.** A `domain_owner_approval` objection **blocks** promotion into that owner's truth. An `independent_review` objection **requires recorded disposition but is not an autonomous veto.** `integration` never resolves substantive disagreement by merging. **Constrained by INV-30: a majority may not vote away an independently liable principal's refusal, a patient right, or a professional duty.**

**★ G0 holder receipt (C-10) — required, because acceptance alone does not confer repository authority. This is the ONLY place names belong.**

Recording that one person currently holds several functions is **honest current-state, not hardwiring**. The receipt is an **operational record with effective dates**, not an architecture document — which is precisely what makes adding engineers a receipt edit.

```yaml
# G0 holder receipt — operational record, NOT architecture
# scope: OMNI-FOUNDATIONAL-ARCHITECTURE-INSTALL only
transaction: OMNI-FOUNDATIONAL-ARCHITECTURE-INSTALL
effective_from:            # date G0 is accepted
effective_to:              # expires when §G1-AUTH delivers

accountable_operator_principal:      # legal/accountable principal for this arc
cross_cutting_acceptance_holder:     # who may accept/reject cross-cutting content
domain_owner_approval_holders:       # per affected domain — list, may be many
architecture_steward_holder:
independent_review_holder:           # the review instance actually used, by name+version
proposal_authoring_actors:           # humans AND agents, each with model+version if nonhuman
integration_holder:                  # VACANT at G0 authoring — must be filled before any landing
repository_administration_holder:

vacancies:                           # every unfilled role, explicitly
  - integration                      # PRESPINE-PHASEA-INTEGRATOR vacant
fail_closed_gates:                   # gates blocked by each vacancy
  - G4_landing                       # blocked while integration is vacant

freshness_and_collision_check:       # result + timestamp
checkpoint_repoint:                  # from -> to, or NOT_PERFORMED
catalog_and_read_graph_changes:      # exact rows, or NONE
first_authorised_G1_write:           # exact file/surface
```

**At the pinned state this receipt cannot be completed:** the live checkpoint still names the Insurance handoff and `PRESPINE-PHASEA-INTEGRATOR` is **vacant**, so **no shared control-plane landing is authorised.** `C-10` therefore closes at G0 execution, not in any agent-authored patch.

**★ Gate-output transaction contract (C-09).** Every gate declares these seven fields before it opens:

| Gate | Output carrier | Writable surfaces | Author seat | Approving seat | Evidence bundle | State on close | Stop condition |
|---|---|---|---|---|---|---|---|
| **PRE-0** | reconciliation ledger | 3 carriers + ledger | `proposal_authoring` | operator ratification | 3 frozen carriers | `analysis_nonbinding` | undisposed row |
| **G0** | charter + plan + G0 receipt | charter · plan · protocol · handoff | `proposal_authoring` | `cross_cutting_architecture_acceptance` | ledger + closure matrix | `accepted` | any `blocks_G0` row open |
| **G1** | operating-model carrier | new `/architecture` **proposals only** | `proposal_authoring` | `architecture_steward` + affected `domain_owner_approval` | comparator + inheritance evidence | `proposed` | undisposed ledger row |
| **G2** | `/architecture` package + admin receipt | `/architecture` · CI · `CODEOWNERS` | `proposal_authoring` | `domain_owner_approval` + `repository_administration` | Build Entry verdict + admin receipt | `installed` \| `controls_unapplied` | Build Entry not admitted |
| **G3** | reconciliation + **staged, unmerged** change set | analysis carriers only — **no `main` landing** | `proposal_authoring` | `architecture_steward` + `domain_owner_approval` | disposition freeze | `staged` | foundational conflict |
| **G4** | landed migration + two receipts | the staged set, through the loop | `proposal_authoring` | `cross_cutting_architecture_acceptance` → `integration` | 11 acceptance tests | `installed` | any test fails |

**Verdicts:** `READY_TO_EXECUTE` · `READY_WITH_EXACT_AMENDMENTS` · `NOT_READY_<reason>`.

### G1 — CONVERGE THE OPERATING MODEL *(external and internal IN PARALLEL, then reconcile)*
**Knox's correction accepted: not external-first, which risks an external taxonomy authoring OMNI; not internal-first, which is six months of scar tissue. Both, then reconcile.**

**Lane 1 — external mechanisms** (primary sources, mechanism only, `M-207` transfer discipline): **42010** (viewpoints/views/**correspondence rules**) · **SEI** (variability, variation points) · **FHIR** (canonical id, versioning, differential, constrain-never-loosen, validation) · **IHE** (actors/transactions/required groupings, multi-profile conformance) · **AUTOSAR** (standardized interfaces, internals free) · **AWS lenses** (one workload, many lenses) · **Palantir** (branching, proposals, resource protection, checks, lineage, affected-resource builds, interfaces, package dependencies) · **Backstage** (catalog, entities, relations, ownership, scaffolding) · **IBM** (agent catalog + control plane) · **LangGraph/LangSmith** (durable execution, HITL, eval) · **OPA** · **OpenRewrite** · **Argo CD** · **OpenTelemetry**.

**Lane 2 — internal foundation** (controlling termini): **Artifact Index** · governance taxonomy · **05-17 pattern (Tier-0 #14)** · System Map · Surface Map · **GCE** · Polaris · **Build OS `09`/`10`/`11` incl. the Step-5 target** · **Agent Runtime & Harness** · **C4.4 Source Estate / Knowledge Reservoir / Domain-Owned State / Evidence Workbench / Compiled Projection / Mission Context** · Reactor `EVRUN-000007/000008` termini · Care §1b/§5b/§5b.1/§18/§19 · Platform · Accountability · C4.6 §0.5/§12 · C3.8 G4 · Federation tenancy · pre-spine §5 deployment postures · conformance estate.

**Lane 3 — prior OMNI inputs (mandatory, §3.9.1). The PRE-0 reconciliation ledger enters here as a standing input, and this gate cannot close with an undisposed row:** the six AI-corpus concept registries · the federation permeability arc · prior build arcs. **Inherit; do not re-derive.**

**Reconcile into:** artifact metamodel · **architecture-operations loop** · architecture graph semantics · change lifecycle · profile/deployment resolution · conformance and observability model · **adopt/reject/transfer-limit matrix**.
**No vendor adoption decision beyond §3. No market/moat study — that stays Task-D.**

#### §G1-AUTH — Authority, Agency and Commit Grammar Reconciliation *(★ MANDATORY G1 work package; working label only)*

**This is a RECONCILIATION, not an authoring exercise.** OMNI already holds substantial authority architecture at **mixed maturity across scattered carriers**; it has never been reconciled into one build-facing model. **Three separate re-derivations in one session** — `C4.4 §R` twice, and the seven-role table in the R6 draft — establish that this material is **structurally unreachable**, not merely overlooked. **G1 must not invent an authority taxonomy. It must reconcile the one that exists.**

**Required source set** — read fully, or to the identified controlling sections:

| Source | What it already settles |
|---|---|
| `contracts/rbac_authority_contract.md` + **DL-18 (LOCKED spine)** + `lib/auth/capabilities.ts` | permission atoms · grants · explicit + default deny · attestation tiers · dual approval · break-glass · consent gating · **nonhuman actor grants** · emission-time vs execution-time reauthorization. `domain_contract`, `canonical` for the authority substrate, `draft_for_ratification` |
| Enterprise Posture + **GCE chain** (thesis) | authority is **decomposed, not domain-owned**: Identity · Federation · RBAC · D7 consent · CNS Meta enforcement · owning-domain commit. Carries **`delegated_authority_envelope`** vs **`capability_envelope`** |
| `v4_C4_agent_runtime_and_harness_capture.md` | *"the `agent_definition` authority ceiling … **never originates or overrides** authority; effective permission is an **intersection**"* · agent definitions · runtime profiles · sessions/runs · **subagent delegation** · authority ceilings · **point-of-consequence authorization** |
| Identity · Federation · **D7 consent** contracts | represented principal · boundary permeability · consent record |
| `EVRUN-2026-000007` multi-principal carrier | the **multi-principal → multi-principal/multi-actor/agent-mediated** correction · subject · principal · actor · agent · role · capability · committer · three agent interaction modes |
| `EVRUN-2026-000008` terminus + adjudication | `analysis_closed` · `adjudicated_nonbinding` — **read the terminus, not the index row** |
| Care **§§5b · 5b.1 · 9a** | decision admissibility vs execution authorization vs readiness vs consequence · authority basis · evidence form · **approval cardinality/topology** · reauthorization · escalation · *contributions are not votes* |
| Build OS + Agent Work Protocol | lane authority · gate admission · stop proof |
| Operator context + collaboration model | **roles are model-agnostic working slots**, never permanent model identities or architecture authority |
| **The R6 provisional role table** | **candidate input only — explicitly NOT controlling truth** |

**Required output — G1 decides each, or names it open with an owner:**
principal vs represented principal · actor vs agent · organizational role vs architecture seat · **holder binding** · `delegated_authority_envelope` vs `capability_envelope` · approval and attestation topology · domain ownership vs operational custody · **propose vs execute vs commit vs accept** · build-plane vs use-plane profiles · human and legal-entity accountability · point-of-consequence reauthorization · delegation, redelegation, expiry, revocation, suspension, transfer · multi-agent and multi-principal interaction · authority evidence and **as-of reconstruction** · **and which portions are binding standards, contracts, profiles or runtime configuration.**

**Required pressure scenarios** — the model is not converged until each resolves without inventing new authority:

| # | Scenario |
|---|---|
| 1 | **5 pharmacies × 50 agents** interacting with OMNI simultaneously |
| 2 | **10 engineers + security + clinical + legal + compliance** working the repo concurrently |
| 3 | one engineer temporarily holding **several roles** |
| 4 | a role with **no holder** |
| 5 | one agent proposes, **another agent tests** |
| 6 | an agent performs an **already-approved mechanical integration** |
| 7 | a human proposal author **also holds an approval seat** |
| 8 | **external payer agent and operator agent disagree** |
| 9 | **patient agent and provider agent disagree** |
| 10 | **delegation revoked mid-run**, in flight |
| 11 | **break-glass under partial network failure** |

**Verdicts:** `MODEL_CONVERGED` · `MODEL_CONVERGED_WITH_NAMED_GAPS` · `NOT_CONVERGED_<reason>`. **G1 cannot close `MODEL_CONVERGED` while `§G1-AUTH` is unresolved.**

### G2 — ERECT THE REAL OUTPOST
Install the `/architecture` package **and its operations scaffold**: canonical metadata contract · **generated** catalog/graph path (never hand-maintained) · proposal + review contract · architecture versioning and change control · operating **and** deployment profile structures · variation points · effective-architecture snapshot structure · conformance-policy scaffold · **the §3 ADOPT tools wired** (JSON Schema validator · CODEOWNERS/branch protection · OPA in CI generalized from the existing pointer check · Backstage-format entities · OTel conventions) · **architecture-intake automation for the four source checks** (§4).
**Guards from the first commit:** owns no truth · holds no commit authority · **C4.6 `C10`** applies to this package itself · no `constitution.md` · **no hand-maintained manifest duplicating the catalog**.
**★ AMENDMENT 6 (C-06) — G2 IS AN IMPLEMENTATION LANE AND MUST BE ADMITTED AS ONE.** R5's charter listed "no implementation" among its non-actions while G2 required JSON Schema validation, CI policy checks, a resource-claim checker, generators, workflows and `CODEOWNERS` edits. Repository boot law requires **Build Entry admission** for implementation lanes, and the packet never said whether G0 acceptance substitutes for it. **It does not.** G2 is classified `architecture_operations_tooling` and **requires a Build Entry verdict before any executable schema, generator, workflow or policy code lands.** If that admission is not obtained, G2 is limited to canonical documents and **non-executable** schema prototypes, and all tooling moves to a later admitted lane.

**★ AMENDMENT 6 (C-07) — repository writes and hosted settings are DIFFERENT ACTS with different authority.** R5 grouped them as though editing a file and configuring a ruleset were the same work.

| Repository-authored *(ordinary file edits)* | Repository-administration *(hosted GitHub settings)* |
|---|---|
| `/architecture` descriptors · schemas · generators · workflow **files** · `CODEOWNERS` **content** | branch-protection rulesets · **marking a check required** · merge-queue enablement |
| writer: `proposal_authoring` → owner approval → `integration` | actor: **`repository_administration` seat only** (§3.5 of the ledger) |
| proof: the merged diff | proof: an **administration receipt** — requested settings · applied settings · evidence · **explicitly unapplied controls** |

**No gate may claim a protection is active because a workflow file or `CODEOWNERS` entry exists.** The `checkpoint-pointer` workflow states this about itself: it becomes merge-blocking **only** when marked a required status check in branch protection, and **the workflow file cannot grant that setting.** Where a control cannot be enabled, G2 records it as **unapplied** and the dependent gate **fails closed**.

**Verdicts:** `OUTPOST_INSTALLED` · `..._WITH_NAMED_DEBT` · `BLOCKED_<reason>` · **`BLOCKED_BUILD_ENTRY_NOT_ADMITTED`** · **`INSTALLED_CONTROLS_UNAPPLIED`**.

### G3 — RECONCILE THE FOUNDATION DEEPLY; CLASSIFY THE TAIL
**Knox's split accepted.** **Deeply reconcile now** — because these define the container itself: artifact model · maps · **GCE** · **Reactor** · **Build OS** · **Agent Runtime** · **C4.4** · Care/Platform/Accountability cross-cutting laws · profile and deployment model · conformance.
**Classify now, deep-reconcile on next substantive touch:** the 16 domain contracts and the long tail — unless a foundational conflict surfaces.
**★ AMENDMENT 5 (C-05) — G3 DOES NOT LAND. G3 STAGES.** R5 landed here the exact transaction G4 exists to prove, which destroyed G4's proof object. G3 now **reconciles deeply, adjudicates, approves the target state, freezes the dispositions, and prepares an UNMERGED migration change set.**

**Staged here, not landed:** two taxonomies reconciled *(decision made, change set staged)* · Reactor and GCE **assigned** their standard roles · 05-17 supersession/narrowing **decided** · `WI16` correction **drafted** · map migration/supersession **prepared, never duplicated**.

**Nothing in this list reaches `main` at G3.** The staged change set is G4's input and G4's proof object.
**Verdicts:** `FOUNDATION_RECONCILED` · `..._WITH_NAMED_GAPS` · `BLOCKED_<reason>`.

### G4 — OPERATE IT END TO END, THEN INSTALL
**Run the real loop on a migration already owed** — **the change set G3 staged and did not land** (Reactor and GCE into their standard roles; maps migrated or superseded) — **not a toy exercise.**

**★ AMENDMENT 5 (C-05) — G4 owns the transaction end to end.** G4 runs the staged set through **proposal → impact → ownership review → conformance → propagation → integration → post-change resolution**, and **only then lands it.** If the set were already landed, the loop would have nothing to prove and the arc's central claim — *that OMNI can operate its own architecture* — would be untested.

**Eleven acceptance tests. Routing is the first, not the whole:**

| # | Test |
|---|---|
| 1 | **Routing** — cold agent finds the right architecture with no historical filename |
| 2 | **Applicability** — resolves exact standards, profile versions, deployment posture, active exceptions. **★ Am-9 (C-13):** resolution must be **deterministic for an explicit `as_of` point**, and ambiguous or contradictory profile/variation/exception combinations must **FAIL CLOSED with a named owner and a reason** — never silently pick a winner |
| 3 | **Impact** — one standard changes; system enumerates affected profiles, contracts, code, tests, deployments, owners |
| 4 | **Parallel change** — two agents propose overlapping changes without silent overwrite or duplicated architecture |
| 5 | **Authority** — agents may propose broadly; only rightful owners approve and commit |
| 6 | **Propagation** — an approved change produces or requests every required downstream update |
| 7 | **Conformance** — a profile loosening an inherited rule **fails**; unauthorized truth ownership **fails**; ≥1 negative control produces no defect; the deliberate non-cousin is **rejected** |
| 8 | **Fleet** — small-operator, composed-enterprise and federated-node deployments resolve different effective snapshots **without forking the architecture** |
| 9 | **Drift** — code, config or deployment that no longer conforms is detected |
| 10 | **Upgrade / rollback / forward migration** — **★ Am-9 (C-03/C-14):** test **all five change classes**, not rollback alone. Must include a **`forward_only`** change that is **superseded, compensated or forward-migrated rather than rolled back**, and must prove prior effective snapshots still resolve afterwards. A repository rollback that breaks historical resolution or external consumers is a **FAIL**, not a pass |
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
| Artifact | arc execution plan **R5** |
| Corrected from R1 | **method-repertoire ceremony deleted** (violated its own contract) · **"most teams do less" deleted** (contradicted Build OS Step-5) · **Operations half added** · external + internal now **parallel** · **10 acceptance tests** replace routing-only · foundation deep-reconciled, tail classified · **tool decisions made, not hedged** |
| Shared control-plane surfaces | **0 touched** |
| Minted | **nothing** |
| Next | **PRE-0 execution → one reconciliation → at most one bounded amendment → G0 acceptance → bounded integrator appointment → G1** |

**STOP: `execution_plan_R5_pending_pre0_then_g0`**
