# v4 — C3.8 / G3: Doctrine Breakers (adversarial questions vs the pre-registered OMNI invariants)

Document type: `analysis` (C3.8 Gate-3 deliverable) · Authority: `analysis_nonbinding` (`GRD-036`) — pressure to be routed at G4, never auto-canon. **NOT a scenario library; NOT G4 disposition; NOT contract/spine/thesis prose.**
Status: **`gate_approved` 2026-07-03 (Nick + Knox, after 2 patches: OMNI-native moat wording + verified tally 15/20/5/8)** — G3 PASSED; NEXT = G4 only (`v4_C3_8_G4_disposition_ledger_and_handoff.md`). Manual/Nick-driven, gate-by-gate. Produced after G2 gate-approved, following `v4_C3_8_G1b_KICKOFF_PROMPT.md` + charter §6 (output #6) + §5 universal-vs-procurement filter.
Inputs: `v4_C3_8_G2_convergence_and_translation_map.md` §4 (the 8 carry-forward tensions) + §1/§2/§3; `v4_C3_8_G1b_source_concept_reality_map.md`; contracts/thesis/REV-184/guardrails read in the acquaintance pass (grounded, not memory).
**Scope discipline (binding, per Knox):** a **breaker MATRIX around the 8 tensions — NOT 80 vague questions, NOT a scenario universe.** Target ~48 (6 per tension). Deep-trace **only the breakers that bite.** Apply the **§5 universal-vs-procurement filter** (is this a universal architecture truth, or an artifact of how enterprises *buy*?). Verdicts are candidate; **final routing is G4.**
**STOP after G3. Do NOT run G4.**

## Pre-registered OMNI invariants (breakers test against THESE — charter §4)
governed execution (Sense→Decide→Act→Prove/Learn + authority gates) · domain-owned truth (one owner/authority/audit per fact) · candidate ≠ commit · source authority (field-level, positional; `source_authority_map`) · ownership boundaries · CNS orchestrates-not-owns · federation-as-boundary-policy (operator-neutrality `T0-14`) · care + business as ONE substrate · projection ≠ authority · REV-184 governed-resolution lifecycle (+7 lines: world-model-honesty, `trust_horizon`, blast-radius authority, non-action-as-commit, disagreement-as-escalation, outcome-reads-original-context) · P35 external-capability / command-authority · `GRD-026` payload≠domain · `GRD-028` AI-axis-not-target · `GRD-035` no-single-domain-owns-a-cross-cutting-concern · `GRD-033` rail-agnostic.

**Verdict legend:** `held` (invariant answers it) · `bent` (mechanism present but needs naming/extension) · `broke` (genuine gap; no current answer) · `open` (a real decision OMNI must make — not a mechanism failure). **Columns:** ID · enterprise premise · invariant tested · breaker question · expected OMNI answer · verdict · disposition preview. (Tension = section header.)

---

## §1 — TENANT-OWNERSHIP DOCTRINE (the highest-risk tension)
| ID | Enterprise premise | Invariant tested | Breaker question | Expected OMNI answer | Verdict | Disposition preview |
|---|---|---|---|---|---|---|
| C38-G3-001 | customer owns data; vendor owns platform | domain-owned truth + source authority | If the operator owns the raw data but OMNI owns the platform, **who owns the derived clinical assertions + `source_authority_map`?** | provenance preserved (`source_authority` stays with originator across adoption); OMNI custodies+governs the derived layer | **bent** ★ | `v4-spine-delta` (state derived-truth ownership) |
| C38-G3-002 | portability / exit rights | ownership boundaries + federation | Can an operator **export ALL data + semantic config + local memory + workflows on exit**, or is there lock-in? | data exportable; **semantic config / memory / workflow exit posture unstated**; cross-org/MPI deferred (ladder v2/v3) | **open** ★ | `v4-spine-delta` + `open-review` (exit doctrine) |
| C38-G3-003 | vendor self-dealing risk | federation operator-neutrality (`T0-14`) | When OMNI operates a Specialty Line **alongside** a Powered-by-OMNI Brand, does data-ownership neutrality actually hold? | yes — `T0-14`/inv-8 REJECT any privileged OMNI tier; `operator_neutrality_basis` audited | **held** | `validated` (name it) |
| C38-G3-004 | tenant-centric ownership | federation-as-boundary-policy | Does "customer owns data" survive OMNI's **patient-centric** inversion — who owns when data crosses operators for the patient? | patient authority (§7.2) + per-event operator attribution; **enterprise-tenant ownership layer unstated** | **bent** | `v4-spine-delta` |
| C38-G3-005 | "your data never leaves our tenant" | data residency/boundary | Can OMNI **structurally guarantee** tenant/geo data residency to a regulator/enterprise? | Federation topology-aware residency (stricter-wins, inv 21) partial; **CMEK/customer-keys unmodeled** | **bent** | `contract-extension` (Fed/D7) + `C5` |
| C38-G3-006 | tenant vs patient ownership conflict | care+business as ONE substrate + ownership boundaries | If **enterprise-tenant ownership** conflicts with **patient authority over care truth**, who wins? | patient is ultimate authority over who treats them (§7.2); but the collision with enterprise-tenant ownership is **undoctrined** | **open** ★ | `v4-spine-delta` (the core adjudication) |

## §2 — SEMANTIC/ONTOLOGY LAYER NAMING + PORTABILITY
| ID | Enterprise premise | Invariant tested | Breaker question | Expected OMNI answer | Verdict | Disposition preview |
|---|---|---|---|---|---|---|
| C38-G3-007 | ontology = proprietary lock-in (Palantir) | domain-owned truth | Is OMNI's ontology a **proprietary lock-in or open governed doctrine**? | contracts + maps are **open governed doctrine** (inspectable, not a black box) — but **not named/positioned as such** | **bent** | `v4-spine-delta (naming/positioning)` |
| C38-G3-008 | semantic config portability | ownership boundaries | Can an operator take its **semantic configuration/overlays** to a competitor? | unstated (ties C38-G3-002) | **open** | `open-review` |
| C38-G3-009 | "you need a named semantic layer product" | `GRD-026` payload≠domain + projection≠authority | Does OMNI need a **named semantic-layer domain**, or is domain-owned-truth + `source_authority_map` + projections sufficient? | sufficient as mechanism; a **named layer must NOT become a domain/god-object** (`GRD-026`/`GRD-035`) | **bent** | `v4-spine-delta (naming, NOT a new domain)` |
| C38-G3-010 | six decision-grade context properties | source authority | Do provenance/currency/authority/policy/decision-history/confidence hold **at cross-org scale**? | yes — `source_authority_map` is field-level positional (C3.6) + REV-184 `world_model_trust` | **held** | `validated` |
| C38-G3-011 | open-standard interchange (OSI) dilutes moat | `GRD-028` moat | Does adopting open semantic interchange **erode the moat**? | no — moat = care-governance + relationships, not format lock-in; interop strengthens legibility | **held** | `validated` |
| C38-G3-012 | the layer absorbs all truth | `GRD-035` + CNS-orchestrates-not-owns | Would a named "semantic/context layer" become a **god-domain** absorbing owning-domain truth? | must be **composed across owners**, not owned by one (`GRD-035`); CNS orchestrates, domains commit | **bent** ★ | `v4-spine-delta` (compose, don't mint god-domain) |

## §3 — BYOM vs CARE-LEVEL MODEL-CHOICE
| ID | Enterprise premise | Invariant tested | Breaker question | Expected OMNI answer | Verdict | Disposition preview |
|---|---|---|---|---|---|---|
| C38-G3-013 | customer brings their own model | candidate≠commit + `capability_envelope` | If a tenant **brings its own model**, does OMNI's care-safety envelope still govern its outputs? | yes-in-principle — `capability_envelope` governs ANY model's role; **BYOM ingestion path unstated** | **bent** ★ | `v4-spine-delta` + AI/Model-Lineage contract |
| C38-G3-014 | customer-model as authority | AI-never-final-authors-safety-sensitive (§B) | Can a **customer-managed model** become the committer of care truth if the customer insists? | no — structural (RLS/capability/type-system/audit) blocks ANY AI commit, incl. customer's | **held** | `validated` |
| C38-G3-015 | swap models per capability | model lineage | Does substrate-model-pluggability preserve `model_version_of_record`? | yes — registry + `model_version_of_record` bind per capability | **held** | `validated` |
| C38-G3-016 | model-choice at point of care (Cursor) | anti-model-choice-medicine (`GRD-028`, §3.5 Q3a) | Can OMNI **refuse** provider/operator model-choice at the care level, structurally? | yes — capability-surface-not-model-surface is doctrine; model is OMNI's responsibility | **held** | `validated` |
| C38-G3-017 | "you're responsible for your model" (MS BYOM) | ownership boundaries + P35 | Who is **liable** when a customer's BYOM produces a bad clinical candidate? | **unstated** — the BYOM responsibility/liability split (customer-RAI vs OMNI-envelope) not doctrined | **open** ★ | `open-review` + `v4-spine-delta` |
| C38-G3-018 | governed BYOM home | the AI/Model-Lineage contract (`⏳ pending`) | Where does BYOM governance **live**, given AI/Model-Lineage is undrafted? | no contract home yet | **broke** | `contract-extension` (draft AI/Model-Lineage) |

## §4 — POLICY-AS-CODE / ReBAC
| ID | Enterprise premise | Invariant tested | Breaker question | Expected OMNI answer | Verdict | Disposition preview |
|---|---|---|---|---|---|---|
| C38-G3-019 | declarative policy-as-code (OPA/Cedar) | RBAC 4-way spine | Is OMNI's authority **declarative policy-as-code** (versioned, PR-reviewed) or imperative? | code-as-config + `policy_resolver` exist; **not a declarative policy DSL layer** | **bent** | `v4-spine-delta (naming)` + `contract-extension` |
| C38-G3-020 | ReBAC relationship engine (Zanzibar) | federation grants | Is Federation's grant graph a **ReBAC engine** — can it reverse-query ("all patients operator X may see")? | ReBAC-**shaped** (`care_relationship`/`shared_context_grant`); not named/built as a relationship-authz engine at scale | **bent** ★ | `contract-extension` (Federation) |
| C38-G3-021 | company-scale cross-org delegation + break-glass | RBAC 4-way + attestation | Does the 4-way spine scale to **cross-org delegation + break-glass** at company scale? | spine + 4-tier attestation + break-glass exist; cross-org delegation deferred | **bent** | `contract-extension` |
| C38-G3-022 | customer authors its own policy | policy-as-code | Can an enterprise **author its own policy overlays** without touching OMNI code? | Settings hosts values; **no policy-authoring DSL for customers** | **open** | `open-review` |
| C38-G3-023 | attribute explosion | per-event orthogonality (`T0-13`) | Does per-event ownership orthogonality survive **ABAC attribute explosion**? | yes — `T0-13` is explicitly per-dimension; no collapse | **held** | `validated` |
| C38-G3-024 | second authority source | no-parallel-authority (RBAC §8.8) | Would a declarative policy engine **fork authority truth** from RBAC? | must **compose**, not fork (RBAC §8.8 no-parallel discipline) | **bent** | `v4-spine-delta` (compose-not-fork) |

## §5 — SUPPLY-CHAIN PROVENANCE
| ID | Enterprise premise | Invariant tested | Breaker question | Expected OMNI answer | Verdict | Disposition preview |
|---|---|---|---|---|---|---|
| C38-G3-025 | SLSA/SBOM build provenance | proof/audit fabric | Does OMNI's proof fabric cover **how its own code/models were built**, or only data/decisions? | **only data/decision provenance** (`trace_lineage`/`source_authority_map`); **build/model/dependency provenance absent** | **broke** ★ | `v4-spine-delta` (proof-fabric extension) + `Build-OS/C5` |
| C38-G3-026 | FDA §524B SBOM for cyber-devices | regulatory / proof | Is OMNI **SBOM-compliant** as a regulated care platform? | unmodeled | **broke** | `C5` + regulatory (owed) |
| C38-G3-027 | model checkpoint scanning (Model Garden) | P35 + supply-chain | When OMNI ingests a third-party/customer model, is there **checkpoint/malware scanning**? | none — no model supply-chain vetting | **broke** | `contract-extension` (P35) + `C5` |
| C38-G3-028 | weights/training-data provenance | model lineage | Does `model_version_of_record` extend to **weights lineage + training-data attestation**? | version pinned; provenance-of-weights not modeled | **bent** | `contract-extension` (AI/Model-Lineage) |
| C38-G3-029 | dependency compromise (MCP04) | security | If a dependency is compromised, does any OMNI layer **detect** it? | no dependency-provenance layer | **broke** | `C5` + candidate security lane |
| C38-G3-030 | spine vs C5 | governed execution / proof | Is supply-chain provenance a **spine concept** or pure C5/Build-OS? | proof-fabric **concept** is spine; the mechanics are C5/Build-OS | **bent** ★ | `v4-spine-delta` (name proof-fabric scope) + `C5` |

## §6 — CONTINUOUS SECURITY/ASSURANCE LANE
| ID | Enterprise premise | Invariant tested | Breaker question | Expected OMNI answer | Verdict | Disposition preview |
|---|---|---|---|---|---|---|
| C38-G3-031 | security = continuous, not a gate | governed execution loops | Is security a **one-time C5 gate or a continuous operating capability**? (Mythos/AI-swarm evidence) | evidence says continuous; OMNI has no named continuous security lane | **bent** ★ | **candidate `v4-spine-delta`** (G4 decides) |
| C38-G3-032 | a "Defend loop" | spine structure | Does OMNI need a **Defend loop** sibling to Sense/Decide/Act/Prove, or cross-cutting assurance? | **undecided — candidate only**; must not mint the loop pre-G4 | **open** | `open` (G3/G4 spine-structure decision) |
| C38-G3-033 | offensive-cyber-capable models (Mythos) | `GRD-039` + Evidence Signal Watch | When frontier models find+exploit vulns, does OMNI's threat posture **defend**? | Evidence *Signal* Watch *learns*; a **defend apparatus is named-but-unbuilt** | **bent** | `open-review` (defend apparatus owner) |
| C38-G3-034 | trust relocated not eliminated | `GRD-030` | Is `GRD-030` (metadata custody, compelled-disclosure) **operationalized** or just doctrine? | principle stated; operational hooks (`trust_transfer_record`) unbuilt | **bent** | `contract-extension` + `C5` |
| C38-G3-035 | continuous online-eval on live flows | eval/assurance | Can OMNI run **continuous assurance** (online-eval/drift) on live care? | Network Governance Plane monitors; not framed as continuous assurance | **bent** | `v4-spine-delta (naming)` + `Build-OS` |
| C38-G3-036 | premature loop-minting | discipline (spine integrity) | Does naming a lane now **distort the spine** before G3/G4 pressure? | yes — correctly **held as candidate**, not minted | **held** | `validated` (discipline holds) |

## §7 — PALANTIR LOCK-IN vs ANTHROPIC NO-STICKINESS/QUALITY
| ID | Enterprise premise | Invariant tested | Breaker question | Expected OMNI answer | Verdict | Disposition preview |
|---|---|---|---|---|---|---|
| C38-G3-037 | moat = lock-in (Palantir) | `GRD-028` moat | Does OMNI's moat depend on **lock-in or on quality/governance**? | governed longitudinal care/business truth + trusted local adoption + proof + portability — **OMNI-native, not lock-in; external sources corroborate but do NOT define the posture** | **held** | `validated` |
| C38-G3-038 | portability → churn risk | `GRD-028` + ownership boundaries | If OMNI is fully portable, **what stops an operator leaving**? | relationships + longitudinal governed truth + care-coordination = the sticky value (not artifact-lock) | **held** | `validated` |
| C38-G3-039 | dragon-egg vs portability | strategy | Is patient-context accumulation compatible with **no-lock-in**? | yes — context follows the patient **by consent**, not lock-in | **held** | `validated` |
| C38-G3-040 | acquirer legibility (§0.5) | capital-allocator legibility | Does refusing lock-in **weaken acquisition legibility**? | must **articulate the non-lock-in moat** clearly (governance + network + care truth) | **bent** | `v4-spine-delta (legibility)` |
| C38-G3-041 | "own the means of production" (Karp) | ownership boundaries | Does OMNI let **operators own their production**, or does OMNI own it? | ties C38-G3-001/006 — tenant-ownership doctrine owed | **open** | `v4-spine-delta` |
| C38-G3-042 | pick the bet | the decision | Which bet does OMNI take **explicitly**? | **OMNI-native portability + quality/governance moat** over proprietary lock-in (external sources corroborate but do not define it) — a Nick+Knox posture call | **open → DECIDED in G4 §2.1** ★ | `v4-spine-delta` (posture decided at G4; mechanics → C5) |

## §8 — MCP CHURN / RAIL-AGNOSTIC VALIDATION
| ID | Enterprise premise | Invariant tested | Breaker question | Expected OMNI answer | Verdict | Disposition preview |
|---|---|---|---|---|---|---|
| C38-G3-043 | MCP breaking stateless revision (RC) | `GRD-033` rail-agnostic | Does OMNI's **§C survive a breaking MCP revision** without a rewrite? | yes — §C owns the capability contract; rails = replaceable adapters | **held** | `validated` |
| C38-G3-044 | MCP stateless/Tasks/Trace-Context | P35 | Does **P35's 8-mode command-authority** map onto MCP's new model? | yes — P35 is rail-agnostic; MCP is one rail | **held** | `validated` |
| C38-G3-045 | name MCP specifically? | `GRD-033` | Should OMNI **name MCP**, or stay rail-agnostic? | name the **pattern** (capability exchange), not the rail; the RC churn proves it | **held** | `validated` |
| C38-G3-046 | W3C Trace Context in MCP | `trace_lineage` | Does OMNI's `trace_lineage` need to **interoperate** with MCP Trace Context? | interop bridge (adapter), not a rewrite | **bent** | `contract-extension` (§C adapter) |
| C38-G3-047 | MCP tool-poisoning regardless of version | P35 + security | Does the MCP tool-security gap need **§C/P35 teeth** irrespective of rail version? | yes — schema-pin/runtime-validation/privilege-isolation (ties §5/§6) | **bent** ★ | `contract-extension` (P35 MCP-security teeth) |
| C38-G3-048 | rail-agnostic = deferral? | discipline | Is §C's rail-agnosticism a **real moat or deferred integration work**? | rail-agnosticism validated by churn; **connectors still need building (C5)** — both true | **held** | `validated` + `C5` (connectors) |

---

## §9 DEEP-TRACE (only the breakers that bite — `broke`/`open`/`bent★`)
- **C38-G3-001/004/006/041 — tenant vs patient vs OMNI ownership (the load-bearing knot).** OMNI's decomposed model answers *provenance* (source_authority never lost) and *per-event operator attribution*, and `T0-14` guarantees OMNI-operator neutrality — but there is **no stated doctrine for "operator/customer owns X, patient owns Y, OMNI owns Z" at enterprise-tenant scale**, and the **patient-authority-vs-tenant-ownership collision (006)** is genuinely undoctrined. This is the **single biggest C3.8 delta** — a `v4-spine-delta` distributed across Federation/Identity/D7/`source_authority_map`/RBAC + the C4 spine. Karp's "own the means of production" (041) is the same knot in enterprise language. **Recommend: the spine author states an explicit tenant-ownership doctrine (§3 candidate answers + Knox altitude) — patient-authority preserved, operator owns config/local-memory/policy-overlays, OMNI owns substrate/safety/proof.**
- **C38-G3-002/008 — portability/exit.** Cross-org/MPI is deferred (ladder v2/v3), so exit-portability of semantic config + memory + workflows is unstated. Not a mechanism failure — a **doctrine + sequencing gap**. `v4-spine-delta` + `open-review`.
- **C38-G3-012 — semantic-layer-as-god-domain risk.** If OMNI names a "semantic/ontology layer" it must be **composed across owning domains**, never a new god-domain (`GRD-035`/`GRD-026`). The naming delta is real but must not violate the anti-god-domain invariant. `v4-spine-delta` (name as composition, not a domain).
- **C38-G3-013/017/018 — BYOM.** The `capability_envelope` governs any model's *role* (held), and AI can never commit (held) — but the **BYOM ingestion path, the responsibility/liability split (customer-RAI vs OMNI-envelope), and the contract home are absent** (AI/Model-Lineage is `⏳ pending`). `broke` on the contract home; `open` on liability. **Recommend: draft the AI/Model-Lineage contract with an explicit BYOM posture — substrate-model-pluggable, care-level-model-choice-refused, customer owns RAI for models they bring.**
- **C38-G3-020 — Federation ReBAC.** Federation's grant graph is ReBAC-shaped but not built/named as a relationship-authz engine with reverse-queries at cross-org scale. `contract-extension` (Federation) — likely the right move as cross-org lands.
- **C38-G3-025/029/030 — supply-chain provenance (genuine `broke`).** OMNI's proof fabric is **data/decision-only**; build/model/dependency provenance (SLSA/SBOM/checkpoint-scan) is **absent**, and **FDA §524B makes SBOM non-optional** for a care platform. The **proof-fabric-concept extension is plausibly spine-level (030)**; the mechanics are C5/Build-OS. **This + tenant-ownership are the two genuine substantive deltas of C3.8.**
- **C38-G3-031/032 — continuous security/assurance lane.** Strengthened by [DARIO Mythos]/[JENSEN swarm] (§CORR): the threat is model-driven, defense must be continuous. **Held as a candidate spine-structure finding** — Defend-loop-sibling vs cross-cutting-assurance-lane vs part-of-Prove/Learn is a **G4/C4 decision, NOT minted here** (spine-integrity discipline, 036).
- **C38-G3-042 — the lock-in-vs-quality bet (a decision, not a mechanism).** OMNI's mechanism already favors an **OMNI-native portability + quality/governance moat** (037/038/039 all `held`; external sources corroborate but do not define it). **DECIDED in G4 §2.1** (Nick + Knox): OMNI rejects coercive artifact lock-in; moat = trusted local adoption + patient-authorized continuity + governed execution + longitudinal truth + proof. Mechanics → C5.
- **C38-G3-047 — P35 MCP-security teeth.** Regardless of MCP version, tool-poisoning needs schema-pinning + runtime tool-output validation + internal/external privilege isolation. `contract-extension` (P35) — ties §5/§6.

## §10 VERDICT ROLLUP (candidate; final routing = G4)
- **Tally (48 breakers — ROW-COUNT VERIFIED before G4, Nick + Knox requirement):** `held` = **15** · `bent` = **20** · `broke` = **5** (supply-chain/BYOM-contract-home: 018, 025, 026, 027, 029) · `open` = **8** (002, 006, 008, 017, 022, 032, 041, 042). Sum = 48. *(Earlier rollup said ~22/17/5/7; corrected — the verified count is 15/20/5/8. The **qualitative result is unchanged**: broke/open verdicts are gaps and decisions, not invariant failures.)*
- **No core invariant broke.** candidate≠commit, domain-owned-truth, AI-never-final-authors, operator-neutrality, projection≠authority, `GRD-028`, `GRD-033` all **held** under pressure. The **plurality verdict is `bent`** (mechanism present, needs naming/extension) over a solid `held` core (15), with a small set of genuine `broke` (5, all supply-chain/BYOM-contract) + `open` (8, decisions). **Enterprise-AI-OS pressure did not break OMNI's physics — it found a naming layer + two substantive gaps + a set of decisions.**
- **Two genuine substantive deltas** (not naming): **(A) tenant-ownership doctrine** (§1 + 041) · **(B) supply-chain provenance / proof-fabric extension** (§5). Both `v4-spine-delta` + `contract/C5`.
- **One candidate spine-structure finding:** continuous security/assurance lane (§6) — held as candidate for G4.
- **One strategic decision:** the lock-in-vs-quality bet (042) — `open-review` for Nick+Knox.
- **Everything else = naming/legibility + bounded extensions** (semantic-layer naming, policy-as-code/ReBAC, ZTA-naming, closed-loop-eval naming, P35 MCP-teeth, §C Trace-Context adapter).
- **§5 universal-vs-procurement filter applied:** CMEK/residency/SBOM-format specifics are partly **procurement artifacts** (route to C5/contract, not spine); the **ownership doctrine + proof-fabric-scope + model-governance posture are universal architecture truths** (spine). No breaker was admitted purely because "governments/F100 buy software that way."

---

## §11 Stop / authority (G3 close — Protocol §9)
`analysis_nonbinding` (`GRD-036`); G3 doctrine-breaker matrix — **`ready_for_gate_review`.**
- **Gate:** G3. **Status: complete; FULL STOP.** Next authorized step = **G4 (disposition ledger — route EVERY finding into the 6 categories) ONLY on Nick + Knox approval.** Do NOT run G4 until approved.
- **Scope honored:** 48 breakers organized by the 8 tensions (NOT a scenario library, NOT new sources); deep-trace only where they bite (§9); §5 universal-vs-procurement filter applied (§10); verdicts are candidate; OMNI frame primary; CEO transcripts used only as pressure (§CORR). No C4/spine/thesis prose, no contract edits, no boot/AGENTS/read-graph/handoff edits.
- **Load-bearing G3 result:** enterprise-AI-OS pressure **did not break a single core invariant**; the real output = **2 substantive deltas (tenant-ownership doctrine · supply-chain proof-fabric) + 1 candidate spine-structure finding (continuous security/assurance) + 1 strategic decision (lock-in-vs-quality) + a set of naming/legibility + bounded extensions.**
- **Owed at promotion (Protocol §5):** catalog row + read-graph route (flagged; `analysis_nonbinding`). CEO-transcript raw `EVSRC` materialization + evidence-lane normalization still owed.
- **Standing flag:** git identity unset — no commit attempted this gate. Boot repoint owed only at checkpoint closeout (not mid-run).
