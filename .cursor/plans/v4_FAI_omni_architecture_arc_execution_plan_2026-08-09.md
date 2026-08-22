# v4 — FAI — OMNI Architecture — ARC EXECUTION PLAN (R8)

Document type: `handoff_or_readiness_gate` (the plan the next agent runs; **not** the architecture)
Authority: `analysis_nonbinding`. Binds nothing. Mints nothing.
Status: **`execution_plan_R8 · ACCEPTED_AT_G0_2026-08-10 · CURRENT_STATE_BY_CHECKPOINT`**
> **State-normalization receipt (`B-1`, 2026-08-11).** This line previously read `pending_operator_and_independent_review_acceptance · nothing_started`, which was stale: G0 was accepted 2026-08-10, the `integration` holder was appointed, the `C-10` checkpoint transaction landed, and this file's catalog row already read `ACCEPTED_at_G0_g1_startable`.
> **This line now carries artifact lifecycle status only.** A first draft of this repair asserted `G1_IN_PROGRESS` here — **withdrawn**: that would have made an accepted carrier a second progress tracker competing with the checkpoint, which is the defect being removed rather than a fix for it. **An accepted carrier may state its own lifecycle; it may not state program state.**
> **Scope: state surfaces only** — no gate semantics, sequence, scope or content changed. This file continues to own **only** the gate sequence (§5).
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: converts the accepted Gate-0 charter into an executable program. **The next agent executes this. It does not redesign it.**
Manifest action: `add_tier2` — **LANDED** (catalog row + read-graph route `9v`, in the `C-10` transaction 2026-08-10).
Review gate: `user_knox_required`

**Companion:** the Gate-0 charter (**R9**) — the *why*, and the ONLY current gate sequence lives **here**, not there.

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
> **3. EVOLVABLE.** An architectural change can be proposed, authority-checked, impact-analyzed, reviewed, versioned, propagated, migrated, coexisted, deprecated, and — **where semantically safe** — **reversed**. Where reversal is **not** safe, it can be explicitly **superseded, compensated, or advanced through a governed forward migration** — without silently forking the architecture or losing history.
>
> **4. OBSERVABLE.** Divergence between the declared architecture and artifacts, code, configuration, effective deployment state and runtime evidence is **detected, attributed, and routed to a governed correction path**.
>
> *State it. Resolve it. Change it safely. Know when reality diverges.*

**Status: `candidate_architecture_system_requirements`.** Not doctrine, not care law, not Reactor invariants, not thesis prose. **And explicitly NOT exhaustive of OMNI's substantive laws** — care, patient authority, clinical adoption, consent, source sovereignty, financial separation, safety, privacy and economic laws are all outside this block. **These four are the root properties required for the architecture to remain a living, usable system. Nothing more.** **Ratification only after G3 reconciliation and G4 proof. At G2 this block is relocated verbatim to `/architecture/README.md`; the copy here then becomes a historical pointer — never two maintained normative copies.**

**Each maps to an existing acceptance test, so none is decorative:** Explicit → **test 11** (substrate independence) · Resolvable → **tests 1, 2, 8** · Evolvable → **tests 3, 4, 5, 6, 10** · Observable → **test 9**.

**Ownership split, so this is not another homeless compression:** the architecture entrypoint owns the compact normative statement · the operations standard owns the detailed obligations · the conformance suite proves them · Build OS executes the change and proof mechanics · Agent Runtime applies them to runs · the spine locates them · the thesis explains why they matter · domain contracts and profiles compile them locally **without restating them**.

**And the honest diagnosis of why this took so long:** we never lacked these four. **Explicit** is `GRD-033`/`GRD-034`. **Resolvable** is the question the effective-architecture compiler exists to answer. **Evolvable** is Build OS Step-5. **Observable** is drift detection. **All four existed as fragments in four different places and never once as a single statement with an owner** — which is this arc's thesis, applied to this arc's own output.

---

## §0.6 — THE ARCHITECTURE PACKAGE AND TRANSITION CONTRACT — selected here NOW, installed at G2

**Same failure as `§0.5`, same remedy.** The package shape was proposed, contested and re-proposed repeatedly across relay threads under at least a dozen competing vocabularies and was never once written into a governed file — so every replacement agent re-derived it, renamed it, and spent the gate arguing about containers instead of filling them. **The selection is therefore written here, in full, now.** G2 **installs** it; G2 does not author it.

**Status: `selected_g1_structural_and_planting_decision`.** Not installed architecture doctrine · not a ratified taxonomy for the repository · not an acceptance of any output · not a migration instruction. **It supplies no substantive system-, domain- or seam-rule bodies and accepts no G1 output. It selects the package, ownership boundaries, resource roles, canonicality law and transition method into which accepted G1 semantics will compile** — the rule bodies themselves are the remaining G1 outputs' work. *(Earlier wording claimed this section "supplies no architecture semantics." That was false: ownership categories, resource roles, canonicality law, Contract placement, the Profile boundary and GCE's structural relation are all architecture semantics — architecture-of-architecture semantics. The accurate distinction is the one stated above.)*

### The package

```text
/architecture/
  README.md
  system/
  domains/
  seams/
  profiles/
  model/
  operations/
  decisions/
  generated/
```

### What each part owns, and what it may never hold

| Group | Part | Owns | May not hold |
|---|---|---|---|
| **Architecture content** | `system/` | OMNI-wide architecture — structure, rules, mechanisms, topology, composition, constitutional constraints | domain-native truth · any single domain's lifecycle |
| | `domains/` | canonical architecture **declarations** for a domain's owned fact **types**, meanings, lifecycles, authority boundaries, commitments and internal invariants — **after governed cutover** | **operational records · runtime state** · restated system rules · another domain's truth |
| | `seams/` | jointly governed crossings between independent owners, meanings, authorities and commitments | either side's underlying truth |
| **Effective architecture** | `profiles/` | versioned declarations of **which** architecture applies to a scope, operator, deployment, jurisdiction, purpose and effective interval, and what specialization is permitted there | domain truth · ordinary configuration · a waiver from a rule that still applies |
| **Architecture management** | `model/` | architecture-resource identity, type, version, relation, ownership, applicability, supersession | domain or business ontology |
| | `operations/` | admission, decision, change, resolution, propagation, assurance, observation, correction and retirement **of architecture** | domain runtime operations |
| **Supporting surfaces** | `decisions/` | decision state, rationale, supersession, retired experiments | duplicate normative restatement of the rules it produced |
| | `generated/` | derived catalogs, indexes, graphs, snapshots and views — **non-normative** | any maintained source; it may never become a competing canon |

**A Contract is an artifact form, not a top-level category.** A contract lives under the subject and ownership category it governs — domain contracts under `domains/`, seam contracts under `seams/`, profile declarations under `profiles/`. **There is no `contracts/` peer folder in the package**, and that artifact-form ⟂ ownership-category distinction is precisely why the current `contracts/` directory is not simply relocated wholesale.

**`system/` — not `laws/`, `bedrock/`, `kernel/` or `constitution.md`.** OMNI-wide architecture includes topology, deployment posture, federation posture, composition and shared mechanisms, none of which are laws; a `laws/` folder would become the junk drawer inside one gate. **Consistent with `§5` G2, which already forbids a `constitution.md`.**

### Canonicality and legitimate coexistence

**One maintained canonical source per architecture-resource identity AND version.** Multiple versions may legitimately coexist for different profiles, scopes or effective intervals — that is `§0.5` requirement 2 working as designed, not a defect to be eliminated. **What is forbidden is the same resource-version independently maintained in two normative homes.**

**At accepted canonical cutover — which is the G4 landing transaction — every applicable resolution surface moves with the canonical source in that same transaction** — catalog · read graph · boot pointer · redirect · dependency reference, as applicable to that artifact. **Content relocated without its resolution surfaces is not a migration; it is a fork with a stale entry point**, and the next agent boots to the superseded copy without ever learning a successor exists.

### Transition law

**Current authority does not grant permanent canonical location.**

| Preserved through transition | NOT automatically preserved |
|---|---|
| accepted semantics · authority · ownership · provenance · history · supersession lineage · **current authority until superseded** | path · directory · file grain · current decomposition · narrative format · duplicate restatements · a name retained merely because it is populated |

**Transition verbs:** `REMAIN TEMPORARILY` · `TRANSFORM` · `SPLIT` · `MERGE` · `MIGRATE` · `SUPERSEDE` · `HISTORICAL` · `REJECT`.

**One old file does not map to one new file.** An artifact may transform into several, merge with others, shed material already owned elsewhere, or be rejected outright — while its accepted semantics, ownership and history survive.

**G2 plants the clean package · G3 classifies, reconciles, transforms and STAGES the existing estate artifact by artifact · G4 runs the staged change set through the operating loop and performs the accepted canonical cutover and landing.** `§5` is explicit and this section does not vary it: G3 produces a **staged, unmerged** change set with **no `main` landing** — Amendment 5 (`C-05`), *"G3 DOES NOT LAND. G3 STAGES"* — and that staged set is **G4's input and G4's proof object**. `§5` G3 also already scopes the current domain-contract set to classification at that gate. **A generated pointer from `/architecture/` to a current path is legitimate transition scaffolding with a named cutover, and illegitimate as an outcome.**

### No whole-directory inheritance

**`/architecture/system/` is the future canonical home for accepted OMNI-wide architecture content, wherever that content currently resides.**

**No blanket disposition is recorded here for `.cursor/plans/doctrine/` or `.cursor/plans/contracts/`.** Neither is declared permanently canonical; neither is wholesale migrated, superseded or made historical. **Every existing artifact receives an explicit G3 treatment on its own subject, role, authority and status.** The current `doctrine/` directory in particular holds several distinct artifact roles — OMNI-wide invariants, architecture-memory governance, catalogs and routing, ledgers, Build OS and agent-work material, drafts, comparator and pressure material, historical rationale — and **only the first of those is a `system/` candidate.** The rest route to their own accepted homes under the artifact index, which for most of them means they do not move at all.

### Profiles are a required first-class architecture resource

**Selected — and deliberately not contingent on the current estate already containing clean instances.** `§5` G2 already requires operating and deployment profile structures, variation points and an effective-architecture snapshot structure; **this ratifies that requirement and names its home.** Applicability is already being decided today across schema scoping, the settings catalog, the federation contract and a draft topology file — with no owner, no effective interval and no non-loosening rule. **That scatter is the failure a Profile resource exists to end. The absence of clean Profile instances does not negate the need for a Profile resource when applicability is already being decided across several artifact types without one declared owner, effective interval or non-loosening boundary.**

**A Profile** selects or specializes effective architecture for a defined scope · names its base architecture and version · has an owner and acceptance authority · has an effective interval · declares permitted additions, restrictions or selections · **cannot silently loosen a non-derogable rule** · supports legitimate version coexistence.

**A Profile is not** ordinary customer configuration · a miscellaneous settings document · domain-owned specialization that changes no cross-owner assumption · a temporary waiver from a rule that still applies · an architecture change wearing configuration's clothes.

**Classification discriminator — semantic effect and scope, ordered by increasing architectural consequence:**

- **Configuration** — selects a value or behaviour wholly within an already-authorized range; **it does not change which architecture applies.**
- **Domain specialization** — changes or strengthens architecture wholly within one domain's ownership, and changes **no** system, seam, Profile or other-domain assumption.
- **Profile** — selects, restricts or specializes **which accepted architecture applies** for a defined scope and effective interval, within declared variation bounds.
- **Waiver / authorized exception** — temporarily authorizes nonconformance **while the underlying rule remains applicable**; requires explicit scope, authority basis, expiry and remediation. *That the rule remains applicable is the exact test separating a waiver from a Profile: a Profile says which architecture applies here; a waiver says the applicable architecture is not being met, temporarily and on the record.*
- **Architecture change** — changes a rule, a permitted variation envelope, an ownership boundary, a cross-owner assumption or an architectural meaning; once admitted it enters the change lifecycle.

**Who may classify, approve, waive, accept risk, commit or integrate each outcome is NOT decided here.** It remains owned by **`§G1-AUTH`** and by the applicable system, domain, seam and Profile authority. `§5` assigns `§G1-AUTH` holder bindings, approval and attestation topology, and the propose ⟂ execute ⟂ commit ⟂ accept distinction, and **G1 cannot close while that package is unresolved** — so a classifier that assigned approvers would pre-decide a mandatory open work package. *An earlier formulation of this discriminator did exactly that and is withdrawn: classification tests what a variation **does**, never who may authorize it.*

**The Profile role and admission boundary are selected. The subtype taxonomy and full schema are not** — those belong to the profile/deployment-resolution output.

### Domain evidence, scope promotion and architecture-subject specialization

**The keystone: discovery location does not determine architectural home.** The domain a rule was found in, the file it was noticed in, the output that recorded it and the search that surfaced it are facts about **how it was reached** — never about **where it belongs**. Home is determined by **subject and rightful ownership**, and by nothing else.

**Two movements are possible out of one domain source, and they are independent.** Collapsing them is what produced the recurring *"are we deriving Care into architecture?"* impasse. Separating them dissolves it.

**Movement 1 — scope placement.** Where does the recovered finding belong?

| When the finding… | Home |
|---|---|
| is domain-native meaning, authority, lifecycle or workflow | **Domain Architecture** |
| changes a crossing, or another owner's assumptions | **Seam** |
| determines legitimate applicability or permitted specialization by scope | **Profile** |
| has failure physics that **survives removal of the domain nouns** *and* recurs across **materially unlike owners or subjects** | **candidate System Architecture** |
| has no architectural consequence | **evidence only — no transfer** |

**Domain truth does not move upward.** Patient facts, clinical judgment, professional authority, native liability, domain commitments and domain workflow **remain domain-owned**, however much reusable law their examination revealed. **A domain is a proving ground, never a donor of its own contents.**

**Movement 2 — architecture-subject specialization.** A distinction *learned* through domain work may be deliberately **re-grounded over architecture itself as a different subject**. This is not promotion, and it is not a mirror of the domain model: the architecture version must independently establish its own **object · owner · authority · authoritative record · clocks · commitments · execution vehicle · consequences · failure boundary · correction or remedy**. **Where any of those differs from the domain instance, the difference is the point, not an inconsistency to be reconciled away.**

```text
SHARED FAILURE PHYSICS        candidate ≠ commitment
        │
        ├─ Care specialization           recommendation ≠ committed order
        ├─ Pharmacy specialization       prescribed ≠ dispensed
        └─ Architecture Operations       proposal ≠ accepted architecture
```

**Same physics; different subjects, owners, clocks, commitments, execution vehicles and remedies.** Care did not become Architecture Operations — Architecture Operations applied a shared distinction to its own subject.

**The two movements are independent.** One finding may yield a candidate system law, an architecture specialization, **both, or neither**. A finding that fails the noun-stripping test may still legitimately specialize to architecture; one that passes it may carry no architecture-management consequence at all.

**Deficiency tests — the guard against architecture management drifting on every domain edit.** A **Resource Model** change is proposed only when the current model **cannot represent** a required architecture object, relation, owner, authority, applicability, version or time. An **Architecture Operations** change is proposed only when current operations **cannot safely govern** architecture proposal, resolution, change, migration, conformance, proof or correction. **A normal domain change modifies neither, merely because a domain changed.**

**Applicable consumption, not wholesale inheritance.** Architecture management consumes only the System Architecture rules **applicable to architecture as its subject**, and separately owns architecture-management rules that are not System Architecture at all. **It does not inherit System Architecture wholesale, and a system rule does not become architecture-management law by proximity.**

**Downward, and across.** Accepted System, Seam and Profile resources become locally meaningful through **versioned reference, applicability resolution, local admission and domain specialization — never copied prose** — and they do not automatically rewrite every domain. Cross-owner and cross-meaning effects route **through the relevant Seam**, not by collapse into one system law or one global transaction.

**Scope.** This transfer law governs Outputs 1–7 and `§G1-AUTH`, G2 compilation and G3 reconciliation, and installs at G2 with the rest of `§0.6`.

### Selected here · open elsewhere

**SELECTED — closed to casual relitigation:** the package and its folder roles · `system/` over `laws/` · **Seam** retained as the term, `seams/` as its home, no `Junction` rename · Profiles first-class · `model/` ⟂ `operations/` · `decisions/` ⟂ `generated/` roles · Contract as artifact form · **GCE = Governed Capability Exchange**, a system-level composition mechanism operating under and through domain and seam contracts, with **no top-level folder** · one-canonical-resource-version · legitimate version coexistence · preservation of accepted semantics, authority, ownership, provenance and history **without preservation of path topology** · **G2 plants · G3 stages · G4 lands** · **the domain-evidence transfer law — discovery location never determines home, scope placement and architecture-subject specialization are independent movements, domain truth does not move upward, and architecture management consumes only what applies to it** · **this is the architecture package, not the repository taxonomy**.

**Reopening a selected item requires an explicit governed change proposal grounded in either ① an exact governing contradiction, quoted, or ② material new evidence, an accepted requirement change, or implementation proof that the selection cannot satisfy its intended role.** The proposal must identify the affected decisions, the migration consequence and the rightful decision authority. **Terminology preference, novelty, or a later agent's alternative taste is not sufficient.** *Ground ② is not a loophole — it is required by `§0.5` requirement 3. A rule admitting only pre-existing contradictions would bar the architecture from learning anything from G3 reconciliation, a pressure case, a changed legal or safety obligation, or an open decision resolving in a way the structure cannot represent — none of which begins life as a contradiction with an already-governing source. Closing that door would make the architecture unevolvable, which is the exact failure `§0.5` forbids.*

**EXPLICITLY OPEN — selecting the package decided none of these:** exact file grain and initial inventory beneath each folder · stable rule and resource identifier syntax · profile subtype taxonomy and schema · the disposition of every current doctrine, contract, domain and seam artifact · which change-lifecycle claims promote to `system/` · erasure ⟂ retention resolution · the clinical-financial translation seam · sovereign, offline and fleet evidence · checker and enforcement design · acceptance of any G1 output · the estate-wide repository taxonomy · the final implementation composition of architecture management.

**Naming a folder does not complete an architecture.** The remaining G1 outputs supply the rule bodies · G2 compiles them into files · G3 reconciles and **stages** the estate against them · G4 **lands and proves** it.

### Scope, and what becomes of this block

**This is the architecture package — not a taxonomy for the repository.** Source code, Build OS work, Agent Runtime state, evidence source packets, product specifications, operating plans, research, deployment infrastructure and commercial material are **outside** it, and their homes are a separate estate-normalization question this section does not decide and must not be read as deciding.

**At G2 the selected package declaration is installed into `/architecture/README.md` alongside the `§0.5` root requirements; the copy here then becomes historical execution provenance and a pointer — never two maintained normative copies.**

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

### §4.1 — Reading depth, provenance layer, and promotion hold

**Execution method, not architecture. These bind how ANY source is consumed — estate or external. They fix no count.**

**One fidelity floor; different entitlements** `[KND]`. ①–⑤ establish **one source-fidelity floor across estate and external material.** Concrete application varies with form, accessibility, versioning and provenance, but **neither class receives a lower standard of reading or attribution**: a title misdescribes a product page as readily as a doctrine file, and ②'s layer defect is usually worse externally, where most claims about a system trace to a secondary source rather than the primary. **"Source" here means the bounded document, page, packet, record or thread selected to support a claim — not a website, a repository or an open-ended corpus**; selection and coverage are decisions separate from the fidelity owed once a source is actually opened.

**Entitlement is what differs, and `§4.2` governs it.** **No external source acquires OMNI architectural decision authority by origin** — but many carry real **legal, regulatory, contractual, standards, factual or operational** authority within their own scope, and in a regulated substrate, treating a statute, a binding counterparty specification or a regulator's rule as an interesting mechanism is a serious error. **`GRD-033`'s stripping rule is scoped to comparator import, not to constraint recognition:** strip the ownership and economic assumptions of a mechanism you are *choosing* to borrow; do not strip a constraint that binds OMNI whether or not OMNI finds it convenient. **External authority bounds the solution space and never decides the architecture** — the response to it still passes `§4.2` admission like any other candidate. **So the internal/external distinction governs coverage obligation and entitlement posture; it never lowers the fidelity owed to a source actually opened.** ⑤ applies externally with one honest difference: an external terminus frequently **cannot** be established, and recording that is the result, not licence to accept whatever a search returned first.

**① A label is not a disposition, and it is never a reason to stop reading.** A document's title, banner, folder, section headings, catalog row, registry entry, prior summary and a grep hit are all **claims by someone else about its contents** — and this is the estate where those claims are demonstrably unreliable: a draft domain spine carrying payload fields currently sits inside the doctrine directory. **Source access is not source understanding, a search hit is not a full read, and a search miss is not proof of absence.**

**So the default is the whole source, and reduced depth is a claim that carries its own basis.**

| Admissible basis for reading less | Inadmissible basis |
|---|---|
| something established **inside the source** — it was opened, its coverage established, and the reason the remainder cannot change the conclusion can be named | title · banner · folder · section heading · catalog or registry row · grep hit · a prior agent's summary · *"it looked like X"* |
| the source is **genuinely derivative** of material already consumed, named as such | anything that **describes** the source rather than **reading** it |

*This is not formality. In one recovery pass, reading a temporal charter in full overturned this arc's own recorded claim that an interface was uncorroborated; reopening two raw packets found that a registry-level authority claim is **absent from its speaker source**, and that another anchor's native mechanism is a positional-encoding scheme rather than the care concept attributed to it. **Every one of those was invisible at the depth the estate's own indexing advertised.***

**② A claim's authority is the layer it appears in, not the layer that cites it.** Layered sources — raw packet · reviewer layer · registry entry · carrier citation — each may add interpretation, and interpretation travels downstream wearing the source's authority. **Before a load-bearing claim rests on a layered source, name the layer that actually contains it.** An interpolation found this way is a **source-authority defect**, recorded as one; it does not silently become a defect in the law that cited it, and it does not silently remain support for it.

**But a source-layer defect is where a failure starts, not where it stops** `[KND]`. Citation, layer and terminus failures are the recurring **initiating** defect, and they propagate into consequences that are not bibliographic: **false independence** where dependent citations were counted as corroboration · **false novelty** · **wrong grain**, where something specific to one owner is generalized into a universal · **wrong architectural destination** · **maturity overclaim**, where presence in a source is read as production status · and plain reasoning overreach. **Correcting the citation does not correct the conclusion the citation carried.** The conclusions are re-examined separately — which is why ④'s promotion hold outlives the repair of the source beneath it, and why a recovery that reports only citation repairs has probably not finished looking.

**③ The control variable is unresolved semantic load, not file count.** Sources may be read together when they answer **one named question**. But a **discovery cohort establishes relevance, routing, dependency and candidate questions — it may never, by itself, promote an architecture law.** Before an architecture-changing finding is retained, the pass establishes **source identity and exact sections · authority, maturity and supersession posture · the native mechanism without OMNI adaptation · existing architecture coverage · rightful destination · material uninspected scope.** When findings begin **interacting**, or when source authority, output ownership or promotion status is uncertain, the author **stops acquiring sources and records a synthesis checkpoint** before opening another substantial cohort.

**④ Promotion hold.** **Recovery-stage classifications are provisional routing judgments** until normative consolidation, affected-owner composition and review. *Reading a source · recovering its native mechanism · routing the finding · promoting architecture · accepting architecture are **five distinct acts**, and a recovery pass performs the first three.* Durable language — *missing shared law · contradiction · deficiency* — is earned after the checks above, not while the interpretation is still moving.

**⑤ Recovery enters a prior workstream at its current terminus, and a status control restricts only what it says it restricts.** For a workstream that already ran, the entry point is its **current terminus and current-state receipt** — not the first grep hit, the oldest contract, the parent charter, or the most recently named file. The usual packet is **terminus / current-state receipt · integrated artifact or capture · forensic, adjudication or correction record where one exists · native carriers for the load-bearing claims · material post-cutoff additions**, and its members do **different jobs**: the integrated artifact supplies composition and relationships · the adjudication record supplies dispositions and corrections · native carriers supply authority · later additions supply new evidence and **never automatic supersession**. **Chronology, authority and semantic depth are three separate dimensions** — the newest file does not win for being newest, the oldest does not win for being called a contract, and ② keeps running: **follow a load-bearing claim through its citation layers until it reaches an originating source, a rightful authoritative carrier, or an explicit admission that it is synthesis.**

**Status is scope-specific.** *Frozen* restricts mutation and self-promotion · *closed* closes a **named question** · *excluded from an authoring set* excludes from **that set**. **None of the three means unreadable**, and reading one as a reason to skip a workstream's deepest recent work confuses **authority with relevance** — which produces the precise failure this arc exists to end, falling back to an older source because a fresher one carried a banner. *(`§4.2`'s closed-external-floor rule is this same principle at the external boundary.)* A later materially different question may reopen a closed source **without resetting the work that closed it**.

*One recovery pass produced both failures: a parent charter was taken as a workstream's terminus when the terminus was the later build doctrine that the charter's own handoff calls "the LIVE OBJECT," and a freeze against **editing** was read as a bar on **reading**.*

**No file count, batch size, coverage percentage or closed denominator is fixed here, and no method registry, source ledger, schema, enum, column, checker or artifact is created.** This clarifies `METHOD-000`; it does not replace it.

### §4.2 — Evidence intake and synthesis: what may become architecture, and how

**The purpose of this section is to stop estate recovery from impersonating design, and to stop free-form design from silently mutating architecture.** Both failures have occurred in this arc.

**Recovery is evidence reconstruction, not ratification.** Establishing what the estate previously said, what was accepted versus merely proposed, what was actually implemented, and what later work narrowed or superseded is protection against re-deriving months of work. **It establishes nothing about whether the recovered material is good.** A recovered proposition may be **preserved · sharpened · narrowed · relocated · superseded · rejected · or retained only as evidence**, and **ten stale documents do not outvote one better argument — though the better argument becomes durable only through explicit admission, reopening or supersession, never by being the most recent or most persuasive pass.**

**No candidate requires an estate ancestor.** Architecture candidates may be generated by any input below, including reasoning nobody previously wrote down. What every candidate owes is **honesty about its basis** — *source-derived · operator-directed · implementation-evidenced · externally informed · experimentally supported · inferred · novel synthesis* — and the one prohibition is presenting an inference as though it were source-derived or already accepted.

| Input | Legitimate role | What it may not do alone |
|---|---|---|
| **OMNI estate** | recover prior decisions, mechanisms, implementation evidence, failures, unresolved questions | bind because it is old, polished, catalogued or called a contract |
| **Operator direction** | set strategic intent, product posture, risk appetite, priorities, unacceptable outcomes, new questions — **and settle architectural choices within rightful authority** | alter clinical, legal, technical, implementation or observed reality by asserting otherwise |
| **Agent reasoning** | infer, synthesize, challenge, invent alternatives, expose hidden assumptions | present an inference as source-derived or accepted |
| **External primary material** — specifications, standards, and **audit, regulator, incident and commissioned technical reports** | supply mechanisms, formal constraints, operating precedent, investigated failure, negative controls | import its native ownership, economic, liability and authority assumptions |
| **Informal material** — forum, anecdote, practitioner account | reveal operator pain, failure modes, deployment surprises, anti-patterns, search leads | carry a load-bearing architecture claim without stronger corroboration |
| **Code and implementation** | prove what is built, reveal hidden coupling, falsify descriptions | decide what ought to be architecturally authoritative |
| **Runtime evidence** | reveal actual consequence, drift, safety problems, scale behaviour | decide the normative remedy |
| **Experiments and simulation** | compare alternatives, falsify assumptions, expose blast radius | become production truth or observed effect |
| **Domain work** | expose reusable failure physics and architecture deficiencies | donate domain truth or domain authority upward |

**Architecture contains both choices and facts, and which one is in play decides who may settle it.** *Whether OMNI serves disconnected operators* is a choice, and the operator holds it. *Whether a copy carries its source's authority* is not a choice, and nobody holds it — not the operator, not a reviewer, not consensus. **Operator direction is authoritative over the first and powerless over the second**, which is why it appears above as an input rather than as a bypass: on a genuine choice within rightful authority the operator's decision *is* the answer and needs no evidentiary defence, while on a matter of fact it is a claim that must survive the same scrutiny as any other. An agent that treats a legitimate operator choice as needing external justification is as wrong as one that treats an operator assertion about reality as settling it.

**A closed external floor bounds the campaign, never the question.** Closure forbids launching another indefinite general comparator campaign before an output can move; **it does not forbid a targeted consult when a concrete question could materially change a decision** — and the question may arise from a carrier claim, an estate contradiction, the operator, or the agent's own reasoning. *(Stated for Output 4 at the carrier's `§E15.17.6`; general here.)* **Source type governs how an answer is used, not whether it may be sought:** a specification evidences its specified mechanism · product documentation evidences the documented product model · a postmortem evidences operational failure · a forum post is a hypothesis, a vocabulary or a search lead · a marketing page evidences positioning and nothing further.

**Fast reasoning; deliberate mutation.** An agent may declare **at any moment and without ceremony** that a contract is stale, a proposition false, an attribution invalid, a framing wrong, or a needed concept never represented at all. **Intellectual correction waits for no gate.** What is staged is mutation of *durable state*: while authoring a proposal, change it freely but **explicitly and reviewably** · once accepted, a material change requires an explicit reopening or superseding decision, because other work may already depend on it · once installed, it must be versioned, impact-assessed, migrated where necessary and checked for actual effect. **Thought is never slowed to repository speed, and no single persuasive pass silently rewrites durable architecture.**

**Consolidation organizes the normative architecture by architectural subject, never by source chronology — and organizing is not discarding.** A carrier that accumulates *source → finding → correction → objection → another finding* is an incident channel, not an architecture. But **discovery order, decision lineage, supersession and historical interpretation are preserved, not dissolved**: `§0.6`'s transition law already requires *provenance · history · supersession lineage* to survive every transition, and they survive **in decisions, evidence and provenance**, where they remain reconstructable and answer *why this, why not that, what did this replace, and what was believed at the time*. **What stops being the architecture's conceptual form is the incident log; what must never stop being available is the record of how the architecture got here.** A reader who can state the current law but cannot recover the reasoning that produced it will re-derive it — which is the failure this arc exists to end. Consolidation therefore reorganizes the normative statement entirely around **subject · rightful owner · governing law · applicability · authority · lifecycle · implementation obligation · conformance evidence · failure and remedy**, and makes **one disposition per recovered proposition** — the seven above, plus **invent** where the sources expose a gap requiring new synthesis, **experiment** where evidence is insufficient to choose, and **open decision** where rightful authority or key evidence is still missing. **A successful recovery makes the resulting architecture smaller and clearer, not larger and better footnoted. The recovery state is scaffolding; the installed architecture must never preserve the scaffolding as its conceptual form.**

**Destination of this section.** These are arc method semantics, and R8 is an execution plan that eventually becomes historical — so the destination is fixed now rather than left to be rediscovered. `§0.6` assigns `operations/` the **admission and decision** of architecture; the intake, synthesis and promotion semantics above are that method. **At G2 they compile into the Architecture Operations proposal, review and learning method inside `operations/`; the text here then becomes historical execution provenance and a pointer, never a second maintained normative copy.** The exact file and grain are selected at G1 composition or the G2 planting transaction, which is a question of *where inside `operations/`*, not *whether this survives R8*. Recording the destination is itself an instance of the rule this section states: **material with no home does not survive the transition that retires its carrier.**

### §4.3 — What makes an admitted law operative

**`§4.1` governs how a source is read and `§4.2` what may become architecture. This governs what an admitted law must carry to be architecture rather than rationale.** The method those three describe is one loop — **recover → synthesize → admit → classify the operative obligation → compile → prove → observe → correct** — and `§4.1`/`§4.2` reach only its first three positions. **A law that stops at admission is a style guide.** *(The loop is described, not named: this estate has paid repeatedly for minting a term before the thing was stable.)*

**The progression, and the questions it has to answer.** A normative law becomes operative by acquiring an **execution obligation** — what kind of obligation it creates — then a **compile target** where that obligation is realized, then a **decision, control or proof** with an owner and a satisfying evidence, and finally **observed conformance or divergence**. Operationally a law is operative when OMNI can answer six things: **what kind of obligation · where it is realized · who owns the decision or enforcement · what observable condition constitutes failure · how applicability and Profiles affect it · what evidence demonstrates satisfaction.** **Each applicable question is answered, explicitly marked not-applicable with its reason, or carried as a named acceptance blocker with an owner** — those three are the admissible states and *unanswered* is not among them. *A law that answers one of six is not one-sixth operative.*

**Mechanically operable is not machine-decided, and collapsing the two fails in both directions** `[KND]`. *A patient's represented authority must be valid for this act* is not a proposition a machine should settle at high consequence; the substance stays with its rightful holder. **The law still compiles** — into a required authority adjudication · a named decision holder · required evidence · an effective-time check · a blocking state while unresolved · an audit receipt · and a failure condition if the act proceeds without them. **OMNI does not automate the judgment; it automates whether the required judgment, authority, evidence, scope and proof exist.** Read operability as *the machine decides* and substantive judgment is pushed into code that must not hold it; read it as *this one is too hard to enforce* and the hardest laws stay prose. **At machine volume and high consequence, both are how a governed substrate quietly stops governing.**

**A law that compiles to nothing is rationale.** Where enforcement is genuinely not mechanical, operativity is discharged by a **sufficient combination** — never one token gesture — establishing, as applicable: **the required human or authority act · its rightful holder · entry and blocking conditions · required evidence · a decision or review receipt · the failure path · exception and waiver posture · and proof that the act occurred.** The available mechanisms include a **mandatory review question · named owner · negative control · affected-resource analysis · acceptance decision · explicit exception or waiver path · required rationale receipt** — but **a named owner alone is not operativity**, and neither is a receipt with no blocking condition nor a review question with no failure path. **Any classification that comes to mean *too difficult to enforce, so future humans should remember it* is an escape hatch** — and a vocabulary that offers one will attract precisely the laws that most needed compiling. Whether a given class vocabulary avoids that is tested where the laws live, not asserted here.

**Sequencing: validate the grammar before consolidation, assign during it, review the mapping after.** Classifying every candidate before deciding which survive is ceremony, because most will merge, narrow, relocate, demote to evidence or be rejected. Deferring classification until after consolidation produces polished prose and discovers operability once the prose is expensive to change. So: **test the classification grammar against materially different failure physics first · assign to every law that survives consolidation, as part of it · review the completed mapping before acceptance.** **No retained normative law reaches acceptance with no operative assignment.**

**The estate holds compilation patterns; it does not hold a compiler** `[KND]`. Declaration · typed representation · CI lint · schema constraint · deterministic derivation · authority gate · proof envelope · observation · negative test all already exist somewhere in it. **What does not exist is the explicit assignment from an accepted law to its operative form** — which is the better starting position, because the pattern is to be extracted rather than invented. `§4.1`'s maturity discipline governs the extraction: **a charter is not a shipped control, a constraint document is not enforcement, and an intended lint is not a running one.** Which of those an exemplar actually is belongs in the trace, never inside the claim it supports.

**Destination.** With `§4.2`, these semantics compile at G2 into the Architecture Operations method inside `operations/`; R8 then retains them as historical execution provenance. **The output that states a law assigns that law's obligation posture, failure semantics and required compile destination — and does not thereby acquire the applicability content, the conformance policy, the authority holder or the tooling.** The originating output owns **that the law requires a downstream mechanism and where that obligation routes**; the named owner supplies the mechanism's content. *A law declaring that it requires authority adjudication without routing that obligation to a holder has not been assigned — it has been deferred, and the two are easy to confuse on the page.*

### §4.4 — Coupled object and method loops

**What separated, and why it mattered.** For most of this arc one seat was expected to recover the estate, author the architecture, diagnose its own method, rewrite its own instructions and review all four. **Those are two objects, not one** — the architecture, and the method that produces, reviews and operates the architecture. What changed is that each acquired an author, a reviewer, a durable home and a governed bridge between them. **The participant count is not the mechanism**, which is why nothing here fixes one.

**This is cross-talk governance, and it is a different layer from continuity** `[KND]`. Handoffs, checkpoints and the durability of a lane's own state are **continuity** machinery: they exist regardless of how many lanes run, how they are staffed, or whether any of this section applies. **What this section governs is what happens when two lanes working *different objects* run at the same time** — how evidence from one reaches the other, what each may write, and how a change in one becomes binding on the other without contaminating it. *A single lane with flawless handoff hygiene still has this problem the moment it is both producing an artifact and revising the method that produces it.* **Do not read the two layers as versions of each other**; fixing continuity does not supply this, and this does not supply continuity.

**Why the separation works, as mechanism rather than preference** `[KND]`. **① The working sets genuinely differ** — object work needs deep source context, native carriers, cohorts and termini; method work needs the shape of failures across passes plus the governing plan. One seat holding both dilutes both or thrashes between them, and **context is the binding resource**, and spending it on two working sets buys depth in neither. **② Self-diagnosis is bounded by vantage and standing, not by capability.** An object author can and should catch its own errors, and this arc's object lane repeatedly withdrew its own retained findings on reopening a source — **that first line of correction is the author's job and remains the author's job.** What an author cannot do is **see the passes it was not present for**, or **independently ratify a generalization drawn from its own error**. Both limits are structural; neither implies the author reasons poorly about method. *A method lane that presumes otherwise gets worse object work, not better, because it teaches the author that self-correction belongs to someone else.* **③ Recurrence is only visible from a position that spans passes**, and this is the load-bearing one: a pass can see its own errors, but **it cannot see that the same class of error already occurred in earlier passes by other authors.** **What actually separates a mistake from a method defect is whether the mechanism can be stated independently of the instance** — *this pass misread that banner* is an instance; *any pass meeting a scope statement will read it as an exclusion* is a defect. **Recurrence is the cheapest and most common evidence of that, not a precondition:** a single high-consequence failure opens a lane where the mechanism plainly generalizes, or where the current method cannot represent what happened. *The overlapping position is what supplies the recurrence evidence, and it is a **vantage** property rather than a competence claim — the same reason a position seeing both ends of a play calls what neither end can.*

**The bridge is what makes this a loop instead of two lanes that never speak.** Object work exposes a repeated or high-consequence method failure → the method lane admits it durably, under review → **the object lane inherits it at an explicit freshness boundary** → better object work exposes the next real limitation. Drop the inheritance step and this degenerates into parallel efforts; drop the durability step and the finding dies in conversation, which is the failure `§4.2` exists to end.

**Distinct writable surfaces are a safety property, not tidiness.** The method author does not write the object under adjudication, and the object author does not rewrite the general method. **A method change therefore cannot quietly mutate the artifact being judged, and an object finding cannot quietly become general law.**

**Triggers — and the anti-triggers matter more.** Open a method lane when object work exposes **the same process failure recurring · a high-consequence failure in source, authority or maturity handling · a missing transition the current method cannot express · a topology problem causing repeated re-derivation · or an insight likely to affect several future agents or outputs.** Do **not** open one for stylistic preference · a single mistake an existing rule already covers · routine cleanup · or an elegant framework with no demonstrated consequence. **Method work is more enjoyable than grinding source recovery, and an untriggered method lane is procrastination with good prose.**

**Safety rules.** Method changes are **proposals under review, never silent self-modification.** The method lane does not adjudicate the object's substantive architecture. **A method change may not be introduced to rescue an object finding currently under review** — that inverts the loop into laundering, and the overlapping seat is precisely the one positioned to do it without noticing. Not every method discovery interrupts active work. **The loop closes when its defect is addressed**, and at closeout only what proved useful is generalized.

**The operating handshake, kept small on purpose.** **Object work is the default and the method lane is normally inactive.** Opening is **event-driven, never a rotation** — a method lane busy every cycle has stopped being triggered by evidence and become a preference. The question a method signal actually answers is **whether object work continues**, and there are four honest answers: **none**, the issue is object-local and is corrected in place · **watch**, a possible pattern with one instance, recorded in the review receipt without opening a lane · **open, non-blocking**, it likely generalizes and object work proceeds to its next safe checkpoint · **open, blocking**, the defect undermines the validity of current source consumption, authority interpretation, promotion or write safety, so object work pauses at a safe boundary. **An accepted method change is inherited at an explicit freshness boundary and acknowledged in the object lane's next return** — *inheritance that is not acknowledged did not happen.*

**What each function receives is deliberately unequal.** The object author gets the **committed method head, the controlling sections, the exact behavioural delta and the next permitted act** — not the method deliberation. The method author gets **the failure evidence and the trace around it** — not the object's whole source corpus. The review function gets **both heads, both diffs, both returns and the cross-loop line**, plus whatever native sources it must open to assert a finding of its own. *Attention stays fluid across both loops — noticing the connection is the entire point — while **writes and recorded state stay partitioned.** Fluid attention, partitioned authorship.*

**No invisible lanes.** Any lane materially influencing the work is declared. A passive observer may watch commits and receipts and **emit a signal**, holding no write authority and making no object decision; **the moment it proposes a change, interacts with the object author, or affects whether work pauses, it is a declared method lane and is named as one.** *A hidden participant may observe. It may not govern.*

**Known failure modes, named so they stay recognizable.** The overlapping seat is a **throughput bottleneck and a single point of vantage** — if only one position sees both loops, its absence blinds the system. **Method churn can outrun inheritance**, leaving the object author working against instructions that moved underneath — a staleness the coupling itself creates, and the standing price of having a bridge at all. And the pattern **costs more than it returns on ordinary work**, which is why it is optional rather than owed.

**Nothing here is frozen, and the overlap is a function rather than a person.** No seat count, staffing pattern, model identity or named participant is fixed; **the number of agents is not the architecture.** Whoever holds the overlap must be **replaceable**, which means **the coupling's state is shared between the two lanes and owned by neither** — so it is stated where both can read it, rather than held by whichever position happens to sit in both conversations. *Unstated cross-loop state does not merely risk being forgotten; it lets the two lanes carry silently different views of what is binding on whom, which is the specific failure a bridge exists to prevent.* The durable claim is narrow: **separate object work from method work, connect them through reviewed evidence, and let accepted method learning change future execution without rewriting the work already under judgment.**

**Two destinations, and they do not collapse.** The architecture-learning semantics of `§§4.1`–`§4.3` compile into **Architecture Operations** in `operations/`. **This section's collaboration topology does not** — lane identity, authoring and review assignment, writable surfaces, freshness and inheritance, and concurrency belong to **Build OS and the Agent Work Protocol**, where the Arc Repertoire may carry the topology as one optional shape. *What survives replacement is not "use four agents" but something closer to a declarable state: work object · method-dependency version · authoring holder · review holder · writable surface · freshness position · acceptance holder.*

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
**Classify now, deep-reconcile on next substantive touch:** **the current domain-contract set** *(resolved from the governing catalog / architecture inventory at the time of the pass — **deliberately NOT a maintained count here**; every duplicated count is a future staleness site, which is how `C-12` reopened twice)* and the long tail — unless a foundational conflict surfaces.
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

> **Current state only.** Rows that previously copied a count or a gate sequence are now **pointers** — the acceptance suite is counted in §5/G4, the gate sequence lives in §5, and the packet inventory lives in the handoff.
| Field | Value |
|---|---|
| Artifact | arc execution plan **R8** |
| Corrected from R1 | **method-repertoire ceremony deleted** (violated its own contract) · **"most teams do less" deleted** (contradicted Build OS Step-5) · **Operations half added** · external + internal now **parallel** · **the §5/G4 acceptance suite** expands beyond routing-only *(count resolved there, not copied here)* · foundation deep-reconciled, tail classified · **tool decisions made, not hedged** |
| Shared control-plane surfaces | **0 touched** |
| Minted | **nothing** |
| Next | **Resolve from the current checkpoint — this row is NOT a maintained current-state surface.** *(All four steps it previously named — operator acceptance, `integration` appointment, the `C-10` transaction and G0 closure — completed 2026-08-10.)* |

**STOP: `execution_plan_R8_accepted_at_g0_2026-08-10 · gate_sequence_owned_here · current_state_owned_by_checkpoint`**
