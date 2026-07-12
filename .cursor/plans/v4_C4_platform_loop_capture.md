# OMNI Platform Loop — architecture capture

*Working handle: **Platform Loop** = OMNI's governed loop run on **the OMNI platform / capability estate, across change AND live operation.** Three control planes: **Build-OS · Release Operations · Runtime Operations.** Siblings: `v4_C4_governed_reporting_resolution_capture.md` (**Accountability Loop**) + the **Care Loop** (REV-184 + care contracts). Public names + filenames finalize at the spine.*

Document type: `plan_or_roadmap` (cross-cutting architecture capture; pre-spine) · Authority: `analysis_nonbinding` (`GRD-036`) · Status: `active` (edited in place) · Domain(s): architecture_governance, platform_architecture, build_os, release_operations, runtime_operations, cross_cutting · Review gate: `user_knox_required`.
**Relationship:** canonical **parent** for the Platform Loop. `09_omni_build_os_layer_model.md` = detail child for the **Build-OS subsystem only** (NOT the Platform home). CNS is **not** the Platform executive. Maturity: **core decomposition provisionally stable; object/seam/operating semantics under review. Not closed.**

## §0 — Shared framing + canonical seam matrix
OMNI's ONE governed loop (Sense→Decide→Act→Prove/Learn + authority gates) is **recursive.** Care · Platform · Accountability are coupled specializations; they share the constitutional substrate + **Polaris** grammar but keep distinct records/orchestrators/lifecycles/closures/authorities and couple via typed links + Polaris seams, **NOT one executive** (`GRD-029`).
**Seam model (two levels + TYPED; identical in both captures).** `seam_kind = custody_handoff | work_trigger | control_request | evidence_publication | consequence_notification`. **Only `custody_handoff` transfers custody of the source work.**
- **Internal Platform seams:** Build→Release *(custody_handoff)* · Release→Runtime *(custody_handoff)* · Release→Build *(work_trigger)* · Runtime→Release *(control_request)* · Runtime→Build *(work_trigger)*.
- **Cross-loop seams:** Care→Accountability *(consequence_notification)* · Platform→Accountability *(consequence_notification carrying a `response_projection` payload — §21; NOT a new seam kind)* · Accountability→Care *(work_trigger/reopen)* · Accountability→Platform *(control_request)* · Care→Platform *(evidence_publication: learning)* · Platform→Care *(consequence_notification)*.

## §1 — Purpose + boundary
**Platform Loop = stewardship of (a) OMNI's next possible state, (b) its transition into environments, (c) its actual live state.** Non-goals: NOT care decisioning · NOT Accountability · NOT one technical god-plane · NOT all business operations · NOT the semantic ontology itself · NOT run by one executive. Security + Privacy = cross-cutting control relationships (§13).

## §2 — Platform identity GRAPH (the provenance spine — relationships, not just nouns)
Without the graph, the Care Response-Seam Audit cannot answer *which deployed implementation produced an output · which release introduced it · which operators/patients were exposed · whether the defect was in a service/capability/model/connector/policy.* Core relationships (candidate; names → C5):
```
platform_capability      implemented_by ─► platform_service
capability_version       composed_of ─► {model_version · tool_version · prompt_version · policy_version · knowledge_projection_version}
capability_version       realized_through / depends_on ─► service_version          (NOT part of composed_of — removes the double-use)
release                  packages ─► one or more versioned artifacts
deployment               places ─► release/version set   onto ─► deployment_target (environment × operator/tenant × region)
deployed_capability_instance   realizes ─► capability_version   runs_on ─► service_version / environment / operator scope
```
This graph IS the execution-provenance backbone the Accountability + Care loops read (Accountability §20 field list must resolve against it).
**Ownership + cardinality:** **stable service/capability IDENTITY** (accountable owner · purpose · failure domain · authority/capability envelope · lifecycle/deprecation status) belongs to a **Platform service/capability CATALOG/registry function** composed over existing **Settings/Catalog + P35 capability topology + System Map** (do NOT mint a new domain). **Build-OS owns versions + artifacts** (`service_version`/`capability_version`/`build_artifact`/`release_candidate`), NOT the durable identity. **Cardinality is many-to-many:** a capability may be implemented by several services; a service may implement several capabilities.

## §3 — Environment / operator / Federation topology
**environment** (dev·test·staging·production classes) vs **operator/tenant** vs **Federation-shared services.** Plus: operator-specific config · regional/jurisdictional placement + data-residency · cross-operator release channels · operator opt-in/holdback · per-operator rollout evidence · partially-connected/offline operators · who-overrides-whom. Load-bearing: Platform→Accountability routing depends on affected operators; desired-state resolves per operator (§6).

## §4 — Change classes + risk tiers (platform change ≠ code only)
A real change is a **`change_set` containing one or more `change_item`s** (changes routinely span classes: code+migration · model+prompt+routing-policy · connector+secret · flag+operator-config). Each **`change_item`** has a `change_class` · risk contribution · validation profile · rollout posture · recovery strategy; the **`change_set` risk tier aggregates** them + selects Polaris profile depth, evidence, rollout shape, rollback plan.
| change_class | typical validation | rollout posture | rollback reality |
|---|---|---|---|
| code/service | tests · integration · load · security | staged/canary | usually artifact rollback |
| model | task evals · calibration · safety · cost/latency | cohort + shadow/canary | model-route rollback |
| prompt | behavior regression · eval | narrow cohort | config rollback |
| **policy/authority** (distinct from prompt — higher stakes) | authority review · policy regression | narrow/gated | config rollback + review |
| schema/migration | compatibility · data validation · backfill | ordered migration | may require **rollforward** |
| connector/tool | contract tests · authority · **stale-success tests** | operator-specific | disable/fallback |
| knowledge projection | source/freshness/provenance review | partition-scoped | invalidate/rebuild |
| security rule | adversarial validation · access review | urgent/staged by severity | tightly controlled |
| infrastructure/IaC · configuration/feature-flag · identity/access/secrets · reference/operational data · external dependency/library | class-appropriate validation | class-appropriate | class-appropriate |
**Risk tier axes:** blast radius · reversibility · **clinical consequence** · data irreversibility · regulatory consequence · security exposure · operator scope · external dependency · rollback confidence · novelty/uncertainty.

## §5 — Canonical objects + CORRECTED ownership (state on the owning object)
| object | correct owner | correction note |
|---|---|---|
| stable `platform_service`/`platform_capability` **identity** | **Catalog/registry function** (Settings/Catalog + P35 + System Map) | Build-OS owns `service_version`/`capability_version`/artifacts, **NOT identity** (§2) |
| `change_candidate`·`work_package`·`source_revision`·`eval_run`·`build_artifact`·`release_candidate`·`product_defect` | Build-OS | change/defect state on the change/defect |
| `release`·`change_approval`·`promotion_gate`·`deployment`·`deployment_plan`·`rollout`·`canary_cohort`·`maintenance_window`·`migration_execution`·`rollback`·`recall` | Release Operations | **each owns its own lifecycle (§9)** |
| `release_channel` | Release Operations | **the channel is stable; `release_channel_membership` (a promotion RELATION) has the `included→held→removed` lifecycle** — not the channel |
| `environment` (identity·jurisdiction·connectivity·config) · `deployment_target` | **OPEN — do NOT introduce a 4th plane by fiat.** An **environment registry is canonical for environment identity**; Release **consumes** it as a target; Runtime has **operational custody**; operator/Network-Governance owns operator/jurisdictional policy | ownership correction |
| `desired_state` | **each SOURCE owns its intent** (approved release/channel · environment policy · operator config · Network Governance · Security · emergency command); **`resolved_desired_state` = a derived, lineage-bearing Platform projection**; the plan/reconciliation engine consumes it; **conflict decisions are governed + persisted separately** (§6) | ownership correction |
| `constraint` | **cross-plane** (each source owns its constraint; governs Build, Release, AND Runtime) — not a Runtime-only object | ownership correction |
| `feature_flag` | **split**: Build defines intended behavior · Release governs rollout scope · Runtime may emergency-override under authority | ownership correction |
| `observed_state`·`health_signal`·`dependency`·`capacity_state`·`SLI`·`operational_finding`·`service_incident`·`runtime_action`·`runtime_rollback`·`recovery_verification`·`runtime_configuration`·`runtime_policy` | Runtime Operations | Runtime is continuous (§10) |
| `detected_finding` | **shared source category**; subtypes canonical in their plane: `build_finding` (Build-OS) · `operational_finding` (Runtime) · `security_finding` (Security) | finding hierarchy |
| `SLO`·`error_budget` | **objective approved by service owner + risk/domain authority** (clinical/safety for safety-sensitive paths); **measured + enforced/monitored by Runtime** | consumes `SLA` (external, owned by operator/business/legal) — §11 |

## §6 — Layered desired-state × observed-state × reconciliation + PRECEDENCE LAWS
**Desired state is not one pinned version** (Apollo: intent = product + channel + constraints). Resolve in layers:
`platform baseline + environment policy + operator/federation overlay + capability version/channel + cohort/feature-flag scope + emergency override = resolved desired-state envelope.` **Each source owns its intent; `resolved_desired_state` is a DERIVED, lineage-bearing Platform projection (owns no truth); the plan/reconciliation engine consumes it; conflict decisions are governed + persisted separately (not in the projection).**
**Precedence laws (Platform's source-authority doctrine — conflicts do NOT resolve by last-write-wins):**
1. **Law · jurisdiction · security floor · patient-safety floor · prohibited-capability constraints CANNOT be weakened by an operator overlay.**
2. Operator configuration may **specialize legitimate local variation within the permitted envelope** only.
3. **Network Governance** resolves cross-operator shared-service conflicts.
4. **Emergency overrides** require authority · reason · scope · **expiry** · post-review · rollback.
5. A **stale/unreachable** desired-state source cannot silently override a fresher authoritative one.
6. Conflicts **remain visible with lineage**; never silent last-write-wins.
**Observed state carries:** source + freshness · confidence · partial/unreachable status · dependency state · **divergence from desired** · reconciliation history.
**Reconciliation loop laws:** idempotency · drift detection · partial-failure handling · stale-observed handling · conflicting-desired-source resolution (by §6 precedence) · retry · rollback · **safe halt** · offline/federated operation.

## §7 — operational_plan · constraints · actions (the control-loop unit — deepened)
**`operational_plan`** (candidate): plan **identity/version** · **idempotency key** · initiating actor/system · **current custodian** · desired transition · affected services/capabilities · env/operator scope · **preconditions** · **exact desired postconditions** · constraints · approvals · **execution agent** · **dry-run/simulation result** · **timeout** · **retry policy** · **partial-failure behavior** · **compensating/rollback action** · predicted consequence · evidence produced · **verification criteria** · **approval + break-glass lineage** · execution state. Visible + constrained **before** execution; agents/operators execute + report.
**Comparator note (not doctrine):** repeated failed plans MAY trigger scoped automatic **suppression / safe-halt under policy** (Apollo pattern) — treat as a pattern to pressure-test in Task D, not a canonized mechanism.
**`constraint`** — a cross-plane gate (compatibility · maintenance window · approvals · health requirement · dependency readiness · residency · safety/security floor). **actions** = promote·deploy·canary·pause·holdback·rollback·recall·restart·scale·failover·traffic-shift·isolate·disable·migrate (governed by Polaris runtime-action/release profiles).

## §8 — Build-OS (create + validate change)
`change intent → work package → implementation → test/eval → review → verified artifact → release candidate.` Closure of the change: `rejected · deferred · verified_release_candidate.` Does NOT prove production healthy. Detail child: `09_omni_build_os_layer_model.md`.

## §9 — Release Operations (govern transition) — object-specific lifecycles + key distinctions
Each object owns its own state: `release{draft→published→superseded→recalled}` · `deployment{planned→in_progress→completed→failed→rolled_back}` · `rollout{pending→canary→paused→promoting→promoted→halted}` · `release_channel_membership{included→held→removed}` · `migration_execution{planned→running→verified→failed→reverted}`.
**Distinctions (must be defined, not conflated):**
- **rollback ≠ recall:** rollback = move one deployment/environment/operator back a version; **recall** = prohibit/withdraw a release from eligible use across a defined scope.
- **pause ≠ holdback:** pause = stop an *active* rollout; **holdback** = prevent a scope/operator from *entering* the rollout.
- **rollback ≠ rollforward:** irreversible data/schema changes may require **rollforward repair**, not rollback.
- **deployment success ≠ release safety:** a technically-completed deployment does NOT prove the capability is healthy, care effects are acceptable, or rollout should continue — **promotion proof must incorporate observed Runtime evidence** (§10).

## §10 — Runtime Operations (operate + protect live; CONTINUOUS — no generic closure) + the service-health CONTRACT
Runtime Ops does not "close"; the objects within it close: `service_incident{detected→contained→mitigated→resolved→reviewed}` · `runtime_action{proposed→executing→effective/failed→verified}` · `recovery_verification` · `operational_finding` · capacity intervention. **Consumes** the canonical service/capability catalog (stable identity + accountable ownership stay canonical in the Catalog/registry function, §2/§5); **owns** the **runtime service registry + deployed-instance view · on-call mapping** · dependency + failure-domain/health graph · SLO/error-budget (§11) · capacity/demand · performance/latency · cost · availability/resilience classes · failover · backup/restore · **DR + business continuity** · change windows · **incident command** · known-error/workaround · manual + **break-glass** · recovery verification · post-incident learning · **current operational custody**.
**★ Service-health CONTRACT — what EVERY production service/capability MUST expose** (because "HTTP 200" can coexist with stale/unsafe data): liveness · readiness · **correctness** · **data freshness** · dependency health · saturation/capacity · latency · cost · failure mode · degraded mode · **last-known-good state** · telemetry health · synthetic-check status · recovery verification.
Runtime Ops can **restore service without solving the underlying defect** — the durable repair returns to Build-OS (§12).

## §11 — SLI / SLO / SLA / error budget (+ the hard safety law)
**SLI** (measured by Runtime) · **SLO** (objective **approved by the service owner + relevant risk/domain authority**; **measured + enforced/monitored by Runtime** — Runtime does not unilaterally own the objective) · **SLA** (external/contractual — owned by operator/business/legal, *consumed* by Runtime) · **error_budget + burn_rate** (govern release pace + operational risk). Care classes: **patient-safety operating threshold (owned by clinical/safety authority; monitored by Runtime) · availability class · latency class · data-freshness class.**
**★ HARD LAW:** *Error budgets may govern reliability tradeoffs; they NEVER authorize a breach of patient-safety, privacy, consent, or authority invariants.* A service may spend latency/availability budget — it cannot spend a "wrong-medication budget."

## §12 — Transition + custody contracts (each seam: source object · owner · gate · proof · custody acceptance · rollback · fallback)
```
BUILD-OS ── verified release_candidate ──► RELEASE OPS ── deployed version/env ──► RUNTIME OPS
   ▲  ▲                                        │                                      │
   │  └─ RELEASE→BUILD (rejected: compat/packaging/migration/rollout evidence) ───────┘
   └──── RUNTIME→BUILD (durable defect / change request) ─────────────────────────────
RUNTIME OPS ── RUNTIME→RELEASE (emergency rollback/recall/rollout-pause/channel-freeze/flag-change) ──► RELEASE OPS
SECURITY ── vuln finding / recalled version / secret compromise / containment ──► BUILD · RELEASE · RUNTIME
RELEASE OPS ── failed rollout w/ notification/remedy/cross-operator/regulatory duty ──► ACCOUNTABILITY
```
Seam law (per §0 `seam_kind`): **custody_handoff** requires the receiver to accept custody of the source work (Build→Release, Release→Runtime). **work_trigger / control_request / evidence_publication / consequence_notification** create linked work / request an action / publish evidence-or-consequence **while the originating owner retains its own custody** (Runtime→Build, Security→planes, Release→Accountability, Care→Platform, Platform→Care). Every seam still carries: authority basis · permitted data · proof · timeout · rejection/fallback · rollback.

## §13 — Security + Privacy (cross-cutting control relationships)
Security is likely a **cross-cutting control plane**, not a Platform subplane; explicit across: Security Threat Watch (defend) · security incident response · vulnerability management · secrets + workload identity · supply-chain provenance + artifact signing · runtime isolation · access revocation · emergency disablement · security recalls. **Privacy breach handling** couples to the Accountability Loop (`privacy_incident`) + Compliance. Findings enter via §12 seams; canonical in Security; referenced by Platform + Accountability.

## §14 — Polaris profiles (Platform-owned; names + owners word-for-word matched to Accountability §2a)
**Build profile** (work-package authority · source/dependency provenance · contract impact · eval sufficiency · security review · model/tool lineage · migration+rollback readiness · affected-domain sign-off) · **Release profile** (approved candidate · environment+operator scope · compatibility · maintenance window · migration safety · canary design · blast radius · rollback/recall readiness · required approvals) · **Runtime-action profile** (operational authority · urgency · reversibility · patient/operator impact · dependency impact · break-glass · post-execution proof). **Accountability + Clinical profiles are owned by the Accountability + Care captures** (summarized here by reference); **REV-184 only in the Clinical profile.** Polaris resolves the profile; domain services + authorities + humans enforce/commit.

## §15 — Cross-loop seams
- **Platform → Accountability** when a condition creates: party remedy · notification duty · care-continuity risk · regulatory clock · cross-operator obligation · public/vendor responsibility. (Most pre-release + auto-recovered events do NOT cross.)
- **Platform → Care** when live platform behavior may have affected a clinical decision · order · communication · fulfillment · care obligation · service occurrence.
- **Accountability → Platform**: runtime containment (Runtime) · release rollback/recall/pause (Release) · defect investigation + durable repair (Build-OS).
- **★ Care → Platform learning (NOT via Accountability unless harm/duty/remedy/disclosure):** care outcome/effect evidence → Platform evaluation / Build-OS + Product/Outcome-Intelligence. Examples: a capability safe-but-ineffective · provider corrections reveal poor retrieval · longitudinal outcomes show an underperforming workflow · a model consistently ignored but causing no incident. This keeps Accountability from becoming the mandatory gateway for all learning.

## §16 — Views (governed projections with required-content contracts)
- **Release/deployment:** release candidate · packaged versions · evidence · approvals · target scopes · deployment/rollout state · health gates · rollback/recall posture.
- **Desired-vs-observed:** resolved desired-state sources + **authoritative precedence (§6)** · observed source/freshness/confidence · drift · unresolved constraints · active plans · safe-halt state.
- **Service/dependency:** owner/on-call · deployed versions · dependency/failure-domain graph · **health contract (§10)** · current incidents · known-errors/workarounds.
- **SLO/error-budget:** SLI · objective · burn rate · **safety thresholds** · data freshness · triggered operational policy.
- **Incident command:** incident · command roles · affected services/operators · containment · rollback/failover · care impact · Accountability links · communications · recovery proof.
- **Federation/operator rollout:** operator eligibility · holdbacks · jurisdiction/residency · rollout evidence · offline status · cross-operator dependencies · recall state.
- **Capacity/cost:** demand · saturation · latency · model/runtime cost · forecast · approved scaling action · cost-vs-risk boundary.

## §17 — Platform roles / authority / custody
Candidate roles: capability owner · service owner · Build-OS change owner · release manager · change authority · environment owner · operator approver · Runtime on-call · incident commander · Security authority · Privacy/compliance reviewer · Network Governance authority · independent verifier.
For each major transition define: **who proposes · who approves · who executes · who accepts custody · who verifies · who may act under break-glass · who resolves disagreement.**
| transition | proposes | approves | executes | accepts custody | verifies | break-glass | resolves conflict |
|---|---|---|---|---|---|---|---|
| promote release | release manager | change authority | Release Ops | Release Ops | health gates + Runtime evidence | — | change authority |
| deploy to operator scope | Release Ops | operator approver | Release Ops | Runtime Ops | deployment proof | — | Network Governance (cross-operator) |
| runtime action (failover/rollback/disable) | Runtime on-call / monitor | incident commander (severe) | Runtime Ops | Runtime Ops | recovery_verification | Runtime on-call w/ post-proof | incident commander |
| security containment/recall | Security authority | Security authority | Release/Runtime | owning plane | Security | Security break-glass | Security authority |
| emergency desired-state override | authorized incident commander / Security / environment owner | named authority for scope (+ clinical/safety or Network Governance where implicated) | Release Ops or Runtime Ops (per the action) | the owning plane | independent post-review (high-risk) | yes (expiry) | Network Governance |

## §18 — Decommissioning + retirement (Platform is incomplete without safe removal)
Build-OS has de-scaffolding doctrine; Platform needs the live-retirement transition: capability deprecation · release end-of-support · service retirement · dependency removal · operator migration · **data/archive obligations** · credential revocation · feature-flag cleanup · rollback-window closure · retained audit/evidence. (Otherwise OMNI can add/deploy forever but cannot safely remove.) Each retirement is a governed transition with its own Polaris (release/runtime) gate + custody acceptance.

## §19 — AI runtime-router functional boundary (physical home open; functional boundary NOT)
- **AI substrate** owns model/capability-routing **semantics + admissible choices**.
- **Build-OS** validates routing **policy + compatibility**.
- **Release Operations** versions + deploys routing **policy/configuration**.
- **Runtime Operations** **executes, observes, constrains, and may fail over within an authorized envelope.**
- **Polaris** governs authority + risk at each transition.
- **Accountability** receives consequences when routing behavior creates duty/remedy/reporting obligations.
(Prevents another future "who owns runtime routing?" rediscovery; physical placement — a **composed Platform control-plane boundary** vs the AI substrate — stays a Task-D open decision.)

## §20 — Comparator convergence (NOT proof/equivalence) + the moat
Convergence *supports*: **Foundry Code Repositories** (Git authoring/branching/commits/release-tags/review/lint/debug/functions/model-dev) ≈ Build-OS · **Apollo** (Environments · Products/Releases/Versions · Release Channels · Plans · Constraints · agents · liveness/readiness; Hub-observes-Spokes; desired-via-product+channel+constraints) ≈ Release+Runtime Ops · **the Ontology** (objects/links/actions/functions/dynamic-security/interfaces) ≈ semantics. **But:** Code Repositories ≠ OMNI Build-OS; Apollo ≠ all of Runtime Ops/SRE; the Ontology *could be configured* for healthcare. **Moat:** *OMNI supplies healthcare-native constitutional semantics as the governing product contract — clinical authority · consent/purpose · source authority · care obligation · patient remedy · AE/mandated-report clocks · non-punitive safety reporting · longitudinal clinical correction · accountable communication · proof-of-care-continuity — as native, normative, governed operating laws, rather than making them configurable on a generic platform.* Match the structural discipline; own the healthcare physics.

## §21 — `response_projection` publication contract (Platform side; matches Accountability §18)
When a Platform object crosses a consequence/duty threshold into the Accountability Loop, it **publishes** (it does not hand over ownership): record id+type · owning plane · **`domain_status` (= the plane's own status: e.g. `service_incident` mitigated, `product_defect` fixed) · domain_classification · domain_severity · domain_verification_state** · affected-object + **version references (from the §2 identity graph)** · evidence-capture reference. The finding/incident/defect **stays canonical in its Platform control plane**; the Accountability ledger holds a reference + projection + admission + its own overlay. Share: evidence · affected-object refs · severity/urgency · version+trace lineage · ownership · verification links. Do NOT share: lifecycle · canonical records · closure test · visibility · authorities · orchestrator.

## §22 — Task-D fixtures + open decisions
**Task-D pressure:** Palantir Ontology-vs-Apollo separation · ServiceNow release/change/incident mechanics · Build-vs-Release-vs-Runtime ownership · **production runtime router placement** · relation assertions (Accountability §19) · environment/operator topology · exact consequence thresholds · the `operational_plan` suppression/safe-halt pattern.
**Open decisions:** whether a **composed Platform control-plane coordination boundary** is needed (vs distributed across Release/Runtime/Security/Network-Governance — there is NO undefined "Platform Ops" actor) · Release Ops = subloop vs control-plane seam · runtime-incident object hierarchy · exact consequence/duty thresholds · Security = cross-cutting plane vs Platform subplane · production runtime router home · desired-state conflict-resolution authority (beyond the §6 precedence laws).

## Stop / authority
`analysis_nonbinding` (`GRD-036`); propose-only; pre-spine; no contract minting; **core decomposition provisionally stable, not closed.** Canonical parent for the Platform Loop; `09` = Build-OS-subsystem detail child. Sibling = Accountability Loop capture. Wired: catalog row + read-graph route + reciprocal cross-links + watch-list WI15. **Consistency-corrected 2026-07-12** (phantom "Platform Ops" removed → real owning planes under named authority · Runtime consumes-catalog/owns-live-registry · seam-kind cleanup). **AR-XWALK (bounded, Platform-weighted) is the immediate next step, BEFORE Task D.** Maturity scenarios wait until both captures pass Nick+Knox review + the AR-XWALK cross-walk + Task-D pressure.
