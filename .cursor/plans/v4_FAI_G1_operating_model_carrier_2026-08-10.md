# v4 — FAI — G1 OPERATING-MODEL CARRIER (R0)

Document type: `handoff_or_readiness_gate` (gate-output carrier — the G1 deliverable named in the execution plan's §5 gate-output transaction contract)
Authority: `analysis_nonbinding` (`D0THES-GRD-036`). **Binds nothing. Mints nothing. Promotes nothing.** Where this carrier and a controlling carrier differ, **the carrier controls and this file is corrected.**
Status: **`g1_carrier_R0 · state=proposed · pending_architecture_steward_and_affected_domain_owner_approval`**
Domain(s): `architecture_governance` · `cross_cutting` — **no domain owns this arc's output.**
Lifecycle role: the G1 gate output — converges the operating model, discharges the `blocks G1` ledger rows, and delivers the mandatory `§G1-AUTH` reconciliation.
Source-of-truth relationship: **owns nothing.** Gate sequence → execution plan §5. Arc rationale → charter R9. Finding disposition → PRE-0 ledger R5. Program state → the current checkpoint. Authority truth → the carriers named in §3.
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2`
Review gate: `user_knox_required`

> ## ★ AUTHORITY POSTURE OF THIS FILE — read before using it
> Authored under **`proposal_authoring`**, which per the execution plan `### G0` seat table may *"research, propose, author, test"* and may **never** *"accept, approve or commit."*
> **The verdict in §11 is a RECOMMENDATION.** G1 is not closed by this file. Closing it requires the approving seats named in the gate-output contract: **`architecture_steward` + affected `domain_owner_approval`**.
> **Every model in §3 and §4 is a reconciliation of carriers that already exist.** Where this file appears to state a new law, that is a defect — open the carrier cited in the row.

---

## §0 — Boot receipt and source posture

**Boot Freshness Check: PASS.** `AGENTS.md` checkpoint-pointer and `04_manifest_read_graph.md` Tier-0 #15 both name `HANDOFF_2026-08-10_foundational_architecture_g1_startable.md`; that checkpoint's §1 banner reads `g0_accepted · g1_startable`, and its §1 "Next action" names **G1 including `§G1-AUTH`, route `9v` first**. No disagreement; no stop condition.

**Route `9v` loaded in its declared order** before authoring: execution plan **R8** → charter **R9** → PRE-0 ledger **R5**.

| Source | Posture |
|---|---|
| execution plan R8 · charter R9 · PRE-0 ledger R5 · current checkpoint | **read fully** |
| `contracts/rbac_authority_contract.md` · `doctrine/00_architecture_artifact_index.md` · `v4_C4_agent_runtime_and_harness_capture.md` | **read fully** |
| `doctrine/omni_enterprise_posture_2026-06-03.md` (GCE) · thesis §A/§B envelope passages · `EVRUN-2026-000007` `_05 §I.13–§I.15` + `_06` · `EVRUN-2026-000008` `_04` + `_03` | **read to the identified controlling sections, verbatim-extracted** |
| Care capture §§1b · 4 · 5a · 5b · 5b.1 · 9 · 9a · 13 · 18 · 19 · `contracts/identity_contract.md` · `contracts/federation_contract.md` · `contracts/D7_documents_consent_media_contract.md` | **read to the identified controlling sections, verbatim-extracted** |
| `v4_C4_4_taxonomy_constitution_and_reference_architecture.md` **§R** (template + `R.1`–`R.17` + `§R.16`) | **read to the controlling sections, verbatim-extracted** — note this is the true home of `§R`, **not** the C4.4 disposition ledger |
| the six AI-corpus concept registries (`EVRUN-2026-000001/2/3/5/6/11`) | **searched exhaustively against the ten operations capabilities** (`M-106` EXISTS-AS, §6) |
| `doctrine/00_document_governance_and_taxonomy_2026-05-19.md` · `lib/auth/capabilities.ts` · `contracts/` inventory | **consulted** |
| Tier-0 #14 `coherent_omni_architecture_pattern_2026-05-17.md` · Build OS `09`/`10`/`11` · Surface/System Maps · Polaris · Platform + Accountability captures · C4.6 · C3.8 G4 · federation-permeability future arc | **NOT inspected in this pass** — see §12 `G-06`. Charter §12 requires *"every gate re-proves a boot receipt for Tier-0 #14 and the Artifact Index."* **The Artifact Index was read in full; Tier-0 #14 was not.** Recorded as a gate-level non-compliance, not concealed. |

**Counts are resolved by pointer, never copied.** `C-11`/`C-12` reopened twice each because a corrected duplicate is still a duplicate. Where this carrier needs a count (artifact roles, contract files, ledger rows) it names the resolving source instead of restating the number.

---

## §1 — What G1 was contracted to produce, and where each obligation is discharged

The execution plan §5 gate-output transaction contract (`C-09`) fixes seven fields for G1. This section is the compliance map; nothing here is new scope.

| Contract field | Value | Discharged at |
|---|---|---|
| Output carrier | the operating-model carrier | **this file** |
| Writable surfaces | new `/architecture` **proposals only** | §13 — **no `/architecture` package created**; G2 installs it. This file proposes its content. |
| Author seat | `proposal_authoring` | header posture box |
| Approving seat | `architecture_steward` + affected `domain_owner_approval` | §11 verdict is a recommendation to those seats |
| Evidence bundle | comparator + inheritance evidence | §5 (Lane 1) · §6 (Lane 3 / `M-106`) · §3 (Lane 2 inheritance) |
| State on close | `proposed` | header `Status:` |
| Stop condition | undisposed ledger row | §2 |

**Plus four obligations the plan attaches to G1 specifically:**

| Obligation | Source | Discharged at |
|---|---|---|
| `§G1-AUTH` — authority/agency/commit **reconciliation**, 11 pressure scenarios | plan `#### §G1-AUTH` | **§3** (model) + **§4** (scenarios) |
| adopt / narrow / reject / defer on **every** §3 tool row, with reasons | Amendment 7 (`C-08`) | **§7** |
| double evaluation — current practice **and** 2030/2035 agent-native; label anything passing only the first `current_practice_only` | plan §3.9.2 | **§8** |
| `M-106` EXISTS-AS against the six registries before presenting anything as new | plan §3.9.1 | **§6** |

---

## §2 — Ledger discharge — the binding closure condition

The PRE-0 ledger is `analysis_nonbinding` as to content but **binding as to closure**: *"G1 and G3 CANNOT CLOSE while any row here is undisposed."*

### §2.1 — The G1 discharge set is 40 rows, not 7

Resolved from the ledger's own per-row **`blocking_scope`** field, which is the field the ledger defines as authoritative for closure. Rows whose `blocking_scope` contains `blocks G1`:

- **§1 (A/B findings) — 20:** `AB-01` `AB-02` `AB-03` `AB-04` `AB-05` `AB-06` `AB-07` `AB-08` `AB-10` `AB-11` `AB-12` `AB-14` `AB-15` `AB-16` `AB-17` `AB-24` `AB-25` `AB-26` `AB-30` `AB-32`
- **§2 (inverse answers) — 20:** `INV-03` `INV-04` `INV-05` `INV-07` `INV-10` `INV-12` `INV-13` `INV-14` `INV-15` `INV-16` `INV-17` `INV-18` `INV-19` `INV-21` `INV-23` `INV-24` `INV-25` `INV-26` `INV-28` `INV-29`

**Only one of these — `AB-08` — is also in the `open` set.** The other 39 are already dispositioned (`adopted`, `adopted_narrowed`, `already_present*`, `rejected_with_reason`); what G1 owes them is not a disposition but a **discharge**: the model must actually carry the adopted content, at a named location. §2.3 is that map.

### §2.2 — ★ A divergence between the checkpoint and the ledger, reported not resolved

The current checkpoint §4 states: *"7 open ledger rows must be disposed before G1 closes — AB-08, AB-19, AB-20, AB-22, AB-23, AB-29, AB-31."*

The ledger's own per-row fields say otherwise:

| Row | Ledger `blocking_scope` | Ledger `trigger_or_target_gate` |
|---|---|---|
| `AB-08` | **blocks G1** | G1 metamodel authoring |
| `AB-19` | non-blocking to FAI; blocks FAI independence claims | OPECON activation |
| `AB-20` | **blocks G3** | G3 correction/retention reconcile |
| `AB-22` | **blocks G3** | G3 identity reconcile |
| `AB-23` | non-blocking | first crypto commitment in a contract |
| `AB-29` | **blocks G3** | G3 |
| `AB-31` | non-blocking | G3 semantic reconcile |

**Reading applied here, and why.** The checkpoint's passport reads *"routes and records state. It hosts no schema and originates no doctrine."* The ledger hosts the `blocking_scope` schema and is named BINDING for closure by route `9v`. So the ledger's per-row field controls, and the checkpoint §4 line is a **compressed restatement that has drifted** — the exact `D0CKPT-GRD-004` maintained-duplicate failure class that reopened `C-11` and `C-12` twice each, now reproduced in the checkpoint written to close that failure.

**Consequence:** six of the seven "open" rows are **not** G1 closure conditions; they are correctly parked with valid owners and later triggers. Forcing them closed at G1 would resolve G3 and OPECON content inside G1 — scope creep licensed by a stale summary.

**This is NOT resolved by this file.** `proposal_authoring` may not amend a checkpoint. Routed as **`G1-FIND-01`** to the `architecture_steward` seat with a recommended repair: replace the checkpoint §4 enumeration with a pointer to the ledger's `blocking_scope` field. Recorded in §12.

### §2.3 — Discharge map for the 40 `blocks G1` rows

| Row(s) | Ledger disposition | Discharged into |
|---|---|---|
| `AB-01` | `already_present_with_extension` — carrier `C4.4 §R` | **§9.1** — the two extensions are verified genuinely absent from §R; the generalization is proposed, not minted |
| `AB-02` `AB-03` `INV-14` | `adopted_narrowed` (loss test · minimality budget · substrate is not neutral) | **§9.2** — the three compose into one shared-mechanism standard candidate |
| `AB-04` | `rejected_with_reason` + independence-proof ladder | **§9.6** |
| `AB-05` `AB-06` `INV-24` | `already_present_with_scope_extension` — carrier `C4.4 §R.16` | **§9.3** |
| `AB-07` | `adopted_narrowed` — input to the §3.1 change manifest | **§9.4** |
| `AB-08` | **`open` → CLOSED HERE** | **§9.7** |
| `AB-10` `INV-25` | `adopted_narrowed` — conformance as attributed claim, no plural certifiers | **§9.6** |
| `AB-11` | `adopted_narrowed` — named Lane-1 inputs; primary sources only | **§5** |
| `AB-12` | `adopted_narrowed` — self-hosting as a G1 design constraint | **§3.1** — self-hosting is the organizing principle of the whole `§G1-AUTH` result |
| `AB-14` `INV-12` `INV-13` | `adopted_narrowed` — relationship portability, novation, re-anchoring, drills | **§9.5** |
| `AB-15` `INV-17` | `adopted_narrowed` — two-level atomic-statement / collective-act model | **§9.5** |
| `AB-16` `AB-17` `INV-05` | `adopted_narrowed` / `adopted` — four orthogonal consent axes | **§9.5** — reconciled against Care §5a, which already forbids one consent object |
| `AB-24` | `adopted_narrowed` — degraded-attribution class | **§9.5** |
| `AB-25` | `adopted` — threat/misuse-case section as a required artifact class | **§9.7** (role axis) + **§12 `G-04`** |
| `AB-26` `INV-16` | `adopted_narrowed` — standing falsifier, **not** a design requirement; the register must exist | **§12** — the uncertainty register is §12 itself |
| `AB-30` | `adopted_narrowed` — jurisdiction as a required **profile axis**; legal content out of scope | **§9.8** |
| `AB-32` | `adopted_narrowed` — human-factors viewpoint + conformance hooks retained by FAI | **§9.9** |
| `INV-03` `INV-04` `INV-19` `INV-29` | `adopted` / `adopted_narrowed` — signature ≠ authorization; delegated policy engines; no globally resolved authority graph; professional vs organizational statement | **§3.4** and **§3.6** |
| `INV-07` `INV-10` | `adopted` — protocol completeness ≠ legal formation; four agent action classes | **§3.5** |
| `INV-15` | `adopted` — patient-rights-by-default inversion | **§3.7** |
| `INV-18` | `adopted` — logical instance ≠ principal cell | **§9.8** |
| `INV-21` `INV-28` | `adopted` — observer-scoped projections that expose known omissions; operator log proves observation only | **§9.5** |
| `INV-23` | `adopted` — clarifying constraint on OMNI's **own** source-authority law | **§9.5** |
| `INV-26` | `adopted` — federation may publish and may restrict its own services; may not record adoption for a member | **§9.3** |

**Zero of the 40 are left unaddressed.** Where the discharge is a proposal rather than a settled model, §12 carries it as a named gap with an owner.

---

## §3 — `§G1-AUTH` — Authority, Agency and Commit Grammar Reconciliation

> **This is a RECONCILIATION.** The plan is explicit: *"G1 must not invent an authority taxonomy. It must reconcile the one that exists."* Three re-derivations in one session established that the material is **structurally unreachable**, not merely overlooked.
> **The provisional §3.5 role table expires here.** Its one durable line — *a stable role definition belongs in architecture; the current holder belongs in a mutable register* — is carried into §3.8. The table itself is not.

### §3.1 — The finding: six composition models, four maturity levels, never reconciled

OMNI does not lack an authority model. It holds **six** overlapping statements of how authority composes, authored by six different passes, and **no carrier reconciles them.** That is the actual `§G1-AUTH` finding, and it is evidenced rather than asserted:

| # | Composition statement | Carrier | Maturity |
|---|---|---|---|
| 1 | **Four-way composition** — *"a consequential action is admissible only when all four hold, evaluated per ownership dimension"*: Federation possibility · RBAC capability · owning-domain commit · CNS-Meta enforcement | `contracts/rbac_authority_contract.md` §5 | `canonical` for the authority substrate · **`draft_for_ratification`** |
| 2 | **Six-composer decomposition** — Identity · Federation · RBAC · D7 consent · CNS-Meta enforcement · owning-domain commit; *"No domain 'is' the trust axis"* | `doctrine/omni_enterprise_posture_2026-06-03.md` (GCE) | **`ratified`** `governance_binding` (`D0THES-DEC-035/036`) |
| 3 | **Six-layer authorization resolution** — brand-capability · staff active · attestation present · explicit-deny · explicit-allow · per-staff flag; *first DENY blocks; absence = default-deny* | `rbac_authority_contract.md` §5 (DL-18 inv 5) | `canonical` · `draft_for_ratification` |
| 4 | **Nine-term intersection / meet** — `actor grant ∩ mission contract ∩ capability/action envelope ∩ object/unit admissibility ∩ purpose ∩ tenant/principal scope ∩ consent/processing authority ∩ jurisdiction/policy ∩ current validity`; *"denial/prohibition dominates; no total ordering, no scalar minimum"* | `v4_C4_agent_runtime_and_harness_capture.md` §G2C.2 | `analysis_nonbinding` · bridge **ACCEPTED** · `not_promoted` |
| 5 | **Four admissibility projections** — decision admissibility · execution authorization · execution readiness · consequence + proof contract, with an anti-collapse `[INV]` | Care capture **§5b** | `analysis_nonbinding` · **FROZEN** under forensic audit |
| 6 | **Five-layer ownership** — owning domain (authoritative state) · principal (duty) · committer (authority) · actor/delegated agent (custody) · OMNI (continuity invariant) | `EVRUN-2026-000007` `_05 §I.14` | `analysis_nonbinding` · frozen **candidate**, unpromoted |

**These are not contradictions. They are answers to different questions that no one has ever laid side by side** — which is why every arc that needs authority re-derives it. §3.2 lays them side by side.

**Two legibility collisions found while doing so, both reportable:**

- **`G1-FIND-02` — two different "four"s in one section.** `rbac_authority_contract.md` §5 states the four-way composition spine, then states competency-gating is *"a **fourth composed input** to the capability decision, distinct from the RBAC grant and the Federation license."* That second four (RBAC grant · Federation license · BIZOPS competency · consent-gate) is an enumeration of inputs **to member 2** of the first four. Both readings are internally correct; a build-facing reader will conflate them. **Not a defect — a disambiguation owed at ratification.** Owner: `domain_owner_approval` for RBAC.
- **`G1-FIND-03` — the intersection formula is the most precise composition statement in the estate and sits at the lowest maturity.** Models 1 and 2 use AND-composition of named composers; model 4 states the general form (a meet over incomparable dimensions with denial dominant and *no scalar minimum*), and only model 4 forecloses the authority-ladder error. It lives in an `analysis_nonbinding` bridge whose own passport says it *"does NOT fulfill or close the whole doctrine."* Promoting it is not this gate's act.

### §3.2 — The reconciliation: one grammar, five orthogonal questions

The six models reconcile because each answers a different question. They are **not** ranked, merged, or replaced.

| Question | Answered by | Model | Shape |
|---|---|---|---|
| **Who may be entitled at all?** | the six composers | 2 | *decomposition* — which domain owns which fragment of the authority fact |
| **Is this specific act admissible?** | the four-way spine | 1 | *conjunction* — all members must hold, per ownership dimension |
| **How is one member (capability) computed?** | six-layer resolution | 3 | *ordered evaluation* — first DENY blocks; absence is denial |
| **What is the general form of "effective permission"?** | the nine-term meet | 4 | *lattice meet* — denial dominates, no total order, no scalar minimum |
| **What kind of admissibility is being asked about?** | Care's four projections | 5 | *typing* — decision vs execution vs readiness vs consequence, never one boolean |
| **Who bears what, once it happens?** | five-layer ownership | 6 | *allocation* — state / duty / authority / custody / continuity |

**The single reconciling sentence, assembled from the carriers and asserting nothing they do not:**

> Authority is **decomposed** across owners (2), **typed** by which admissibility question is being asked (5), **conjoined** across the four composers for a given act (1), **computed** within the capability composer by ordered first-deny resolution (3), **generalized** as a meet over incomparable constraint dimensions in which denial dominates and no scalar ranking exists (4), and **allocated** after the fact across state, duty, authority, custody and continuity (6).

**Three invariants that fall out and are already law in their carriers:**

1. **Absence is denial, never default-upward.** RBAC §8.1 default-deny; ledger §3.5 *"a seat with zero holders causes every gate depending on it to fail closed."* The same rule already governs both planes.
2. **No dimension collapses to a number.** Model 4's *"no total ordering, no scalar minimum"* generalizes Care §5b's *"do NOT collapse to one boolean"* and G2's rejection of R0–R3 authority ladders. **Three independent carriers reject scalar authority.** That convergence is genuine — none was written with the others in view.
3. **Necessary is never sufficient.** Stated verbatim three times: RBAC §8.8 *"RBAC composes, never replaces"*; Federation §9 *"Federation is necessary, not sufficient"*; Agent Runtime §G2C.4-PoC *"presence in the S6 draw or the admissible skill/tool set is **necessary, never sufficient**."*

### §3.3 — Required output: the grammar terms, each resolved to its owning carrier

The plan lists fifteen required outputs. Each is **decided by pointing at the carrier that already settles it**, or named open with an owner.

| Required output | Resolution | Controlling carrier |
|---|---|---|
| **principal vs represented principal** | `principal` = locus of rights/interests/authority. `represented principal` = the principal on whose behalf an actor acts. **Not every actor is a principal**; one human may hold several principal-roles at once. | `EVRUN-000007` registry frame correction; Care §9; thesis §A |
| **actor vs agent** | `actor` = anyone/anything performing an act, human or not. `agent` = **a non-human actor for a principal.** Acting is not authority. | `EVRUN-000007` registry; Care §9 `[INV]` actor taxonomy |
| **organizational role vs architecture seat** | A `role` is an operational function (treating provider, scheduler, biller). A **seat** is a named durable authority position with explicit rights *and explicit prohibitions*. They are different axes; a holder may occupy many of each. | ledger §3.5 (durable line only) + §3.8 below |
| **holder binding** | Which principal occupies which seat, **with effective dates**, in a **mutable register** — never in an architecture document. Test: *adding nine engineers must be a register edit touching no architecture document.* | ledger §3.5; instantiated by the checkpoint §2 G0 holder receipt |
| **`delegated_authority_envelope` vs `capability_envelope`** | **Ratified and distinct.** `capability_envelope` = what a *model/tool* may technically and policy-wise do (AI #12). `delegated_authority_envelope` = what *this actor/agent* may do *for this represented principal* under scope, purpose, TTL, revocation state and escalation rule. *"A tool may be capable of ordering a lab while the actor is not authorized to order this lab for this patient at this time."* A **third** object completes the family: `capability_contract` = what an actor/system may invoke across a governed boundary (GCE/§C). | enterprise posture (ratified); thesis spine three-object family **LOCKED** |
| **approval and attestation topology** | Two carriers, not yet joined. **Care §5b.1** `approval_requirement` = `single_authority · cosign_required · dual_control · independent_verification · supervisory_review · committee/ethics_review`. **RBAC §6** four attestation tiers = `T1 authorship_only · T2 reason_coded · T3 dual_approval · T4 provider/owner signature`. **Reconciliation:** these are orthogonal — Care names *approver cardinality/topology*, RBAC names *evidence strength required*. A cell is (topology × tier). **Neither carrier says this**; proposed here as `G1-FIND-04`. **No N-of-M cardinality exists in either** — named open, `G-01`. | Care §5b.1 · RBAC §6 |
| **domain ownership vs operational custody** | The five-layer split: the **owning domain** holds authoritative state; the **actor/delegated agent** accepts **custody** of the next work within granted scope. *"A non-human agent may accept delegated execution custody; it does NOT thereby acquire independent professional authority or legal personhood."* | `EVRUN-000007` `_05 §I.14` |
| **propose vs execute vs commit vs accept** | Four distinct act classes, each requiring its own grant. `INV-10`: delegation may authorise execution without authorising professional judgment. Runtime instantiation: *"model/agent/subagent output can NEVER directly commit"*; a **deterministic control component** may commit its own **bounded operational state** under a versioned contract, never domain truth. | Agent Runtime §G2C.0(i)/(ii); Care §9a G2; ledger §3.5 seat verbs |
| **build-plane vs use-plane profiles** | **Two populations, ONE grammar.** Build plane = OMNI's builders, reviewers, integrators, administrators and their agents. Use plane = patients, representatives, clinicians, staff, operators, federation members and their agents. Different seat catalogs; identical grammar. **If the build plane invents a second authority mechanism the two will diverge — which is the failure this arc exists to stop.** | ledger §3.5 "Two populations, one grammar"; `AB-12` self-hosting |
| **human and legal-entity accountability** | `legal_entity` is the tax/compliance/**liability** boundary carrying `medical_director_provider_id`; LE↔brand is many-to-many. *"OMNI can FIREWALL AUTHORITY, cannot LEGISLATE LIABILITY"* — the goal is bounded/insurable, not zero. | `contracts/federation_contract.md`; `EVRUN-000007` `_06` |
| **point-of-consequence reauthorization** | **Settled, in three places, under three names.** Agent Runtime §G2C.4-PoC: *"context inclusion does NOT preauthorize action"*, effective permission re-evaluated **at every consequential tool call, external effect and commit boundary**. RBAC §8.3: re-check at **emission AND execution**; *"UI hiding is NOT enforcement."* Care §5a: consent resolves **at the transition where it is required**, defaulting to `pre_performance_gate`. **G1's reconciliation: these are one law with three vocabularies.** | Agent Runtime · RBAC · Care |
| **delegation, redelegation, expiry, revocation, suspension, transfer** | Delegation contract present in full (parent stays accountable · child never inherits broader authority · depth/fan-out bounded · structured return · candidate until adopted). Revocation present and strong: *"revocation propagates ≥ as aggressively as publication"*; derived-grant invalidation cancels dependent scheduled actions and alerts. **`transfer` and `suspension` of a *seat holder* are not covered by any inspected carrier** — named open, `G-02`. | Agent Runtime §6/§G2C.4; Care §5a; RBAC §6 break-glass |
| **multi-agent and multi-principal interaction** | Three agent interaction modes, ratified within their carrier: private principal workspace · typed agent-to-agent **work** exchange · shared governed resolution. Rule: *agents may exchange bounded work directly; consequential care meaning and authority must be mediated through the governed resolution and owning domains.* Plus **multiplicity ≠ evidentiary independence**: *"Five agents on one model ≠ five opinions; ten payer bots = one payer principal."* | `EVRUN-000007` `_02 §8`; Care §9a |
| **authority evidence and as-of reconstruction** | The replay set is enumerated: runtime profile + model version · prompt/policy versions · source and retrieval-unit lineage · accepted-state/projection/compiler versions · the assembled draw as an immutable **S1 run-context receipt** · tool calls · **actor/authority state** · overrides. Bound: replay is **lineage/version-based, not raw retention**. Temporal semantics owned by C4.5, **never acceptance-tested** (`AB-21`, blocks G4). | Agent Runtime §G2C.4; C4.5 |
| **which portions are standards / contracts / profiles / runtime configuration** | **§3.9** |

### §3.4 — Signature, verification and the authority graph

Three inverse answers converge on one correction and the carriers do not yet state it:

- `INV-03` — a digital signature proves **control of a signing mechanism**, not capacity, scope, consent, representation or purpose. RBAC §6 already binds `provider_signature` to `signed_with_credential_kind` + evidence hash, and D7 owns `signature_envelope` — but **no carrier states that the signature is not the authorization.** Proposed as a standard clause: a signature binds `actor · issuing principal · authority basis · scope · time · jurisdiction · verifier decision`, and **the verifier decision is a separate attributed act.**
- `INV-04` — a consent/policy engine may issue an **operative** decision **only** for a named principal under an explicit delegated policy and authority envelope; otherwise it emits evidence or a recommendation, and **never authors a universal consent truth.** This is consonant with RBAC §9 (*"Consent-gate reads, never owns"*) and D7 owning the record; it extends it by naming when an engine's output is operative.
- `INV-19` — there is **no globally resolved authority graph.** Authority evidence is disputed, jurisdiction- and time-dependent, and accepted differently by different relying principals. The correct object is **attributed authority claims plus a verifier-specific acceptance projection.** This is `D0THES-DEC-033` (projections own no truth) applied to authority itself.

### §3.5 — The agent question, answered by grant and action class

The ledger deleted *"agents may hold `proposal_authoring` only"* as a universal rule, deleted *"agent = actor always"* and *"agent ≠ principal ever"* as eternal metaphysical claims, and routed the real question here: **which action classes may an agent perform?**

**Answer, reconciled — not invented:**

| Act class | May an agent perform it? | Controlling constraint |
|---|---|---|
| **propose** (research, author, draft, test) | **Yes**, broadly | seat verb; G4 test 5 *"agents may propose broadly"* |
| **execute — reversible / bounded** | **Yes**, under a `delegated_authority_envelope`, re-authorized at the point of consequence | Care §5b.1 `automation_level`; Agent Runtime §G2C.4-PoC |
| **commit — own bounded operational state** | **Only** the deterministic control component, under a versioned contract; **never** the model-bearing actor | Agent Runtime §G2C.0(ii) |
| **commit — domain truth** | **No.** *"No silent path."* AI emission on a safety-sensitive atom carries `on_behalf_of_id` or is **REJECTED** | Agent Runtime §G2C.0(i); RBAC §8.4 |
| **accept / approve** | **No** | seat prohibitions; *"AI proposes / humans commit"* (§12.8) |
| **ministerial integration of an already-accepted set** | **Conditionally yes** — see below | reconciled here |

**The ministerial-integration boundary (pressure scenario 6), reconciled from three existing rules and no new one:** an agent may exercise `integration` **only** where every one of these holds — (a) the change set is **already accepted** by the rightful seats; (b) the act is **ministerial**, requiring no substantive judgment, because `integration` *"never resolves substantive disagreement by merging"*; (c) the action class is **not safety-sensitive**, because those *"require a human actor"*; (d) a **non-null accountable principal** holds the grant. **The moment merging would resolve a disagreement, it stops being ministerial and the agent must stop.** This narrows existing law; it does not extend agent authority.

**The durable one-line law, unchanged:** *an agent never self-authorizes.*

### §3.6 — What the reconciliation does NOT settle

Stated plainly so no downstream gate reads convergence into it:

- The **maturity spread is unresolved.** One composer is `ratified`; two are `canonical` but `draft_for_ratification`; three are `analysis_nonbinding`, one of those **FROZEN** under a forensic audit and one an unpromoted **candidate**. A build-facing authority model **cannot be more mature than its inputs.** This is the single strongest reason §11 recommends `MODEL_CONVERGED_WITH_NAMED_GAPS`.
- **Care capture is FROZEN** and `analysis_nonbinding`. Care §5b and §5b.1 are the only carriers of the four admissibility projections and of `approval_requirement`. This reconciliation **consults them as the artifact-under-test** and does not promote them. If the forensic audit corrects them, §3.2 model 5 changes.
- **`§G1-AUTH` does not ratify anything.** It reconciles. Ratification of `rbac_authority_contract.md` remains its own domain-owner act.

### §3.7 — The patient-asymmetry inversion (`INV-15`)

Adopted as a law candidate because it is squarely OMNI's declared centre of gravity and **OMNI does not currently state it**:

> Patients are structurally the weakest principals — no legal team, no engineering capacity, no ability to fork. **Every non-captivity mechanism in the architecture is available to operators and unusable by patients.** Therefore: any right whose exercise requires patient action must be modelled as **unexercised**, and patient rights must be enforced by **default system behaviour**, not by an available mechanism.

Consonant with, and sharpening, three existing rules: Care §5a *"patient autonomy is PRIMARY but legally BOUNDED"*; Care §5b.1 silence must never resolve to consent by timeout (`choice = unknown`); `INV-30` a majority may not vote away a patient right. **Routed to G3 Care reconciliation** — Care owns the law, FAI may not author it into Care.

### §3.8 — Seat, holder, grant — the durable primitive that survives §3.5's expiry

| Object | What it is | Where it lives | Mutability |
|---|---|---|---|
| **Seat** | a named durable authority role with explicit **rights** and explicit **prohibitions** | architecture (binding) | architecture amendment only |
| **Holder binding** | which principal occupies which seat, with effective dates | a **register** (mutable operational record) | ordinary record edit |
| **Grant** | a scoped, expiring delegation from a holder to an actor | runtime record | ordinary |

**The test it must pass:** adding nine engineers, three departments or a compliance function is a **register edit** and touches **no architecture document.**

**Two properties this carrier adds, both reconciled rather than invented:** (i) the same three-object structure already exists on the use plane as `principal → assignment → grant` in RBAC's `staff_permission_group_assignment` + `permission_group_atom_grant` + temporal fields — so the build plane is not a second mechanism, it is **the same mechanism applied reflexively** (`AB-12`); (ii) `transfer` and `suspension` of a holder binding are **not defined anywhere** — `G-02`.

### §3.9 — Which portions are standards, contracts, profiles or runtime configuration

The final required `§G1-AUTH` output. Classification only — **no promotion, no minting.**

| Portion | Proposed class | Why |
|---|---|---|
| necessary-never-sufficient · absence-is-denial · no-scalar-authority · an-agent-never-self-authorizes · point-of-consequence reauthorization · non-null accountable principal | **cross-cutting architecture STANDARD** (`MUST`/`MUST NOT`, conformance-testable) | universal, violable, testable — charter §7's definition of a standard |
| the four-way composition · six-composer decomposition · six-layer resolution · attestation tiers · consent-gate | **domain CONTRACT** content | already contract-resident (`rbac_authority_contract.md`, Federation, D7) |
| the four admissibility projections · `approval_requirement` topology · `checkpoint_graph` | **domain CONTRACT** content, Care-owned | Care owns them; FAI reconciles, never authors |
| build-plane seat catalog · use-plane seat catalogs | **OPERATING PROFILE** (build-plane profile vs use-plane profiles) | populations differ, grammar does not — exactly what a profile is for |
| holder register | **runtime CONFIGURATION / operational record** | must be editable without an architecture change |
| `delegated_authority_envelope` · `capability_envelope` · `capability_contract` | **controlled VOCABULARY** entries + contract fields | the family is LOCKED; it needs an addressable home, which the artifact index currently lacks (§9.7) |
| the nine-term meet | **STANDARD** candidate, pending promotion out of `analysis_nonbinding` | it is the general form of every other composition statement |

---

## §4 — The eleven required pressure scenarios

The plan: *"the model is not converged until each resolves without inventing new authority."* Verdict values: **RESOLVES** (existing carriers suffice) · **RESOLVES-NARROWED** (existing law, narrowed here) · **PARTIAL** (a genuine residue is named and routed).

| # | Scenario | Verdict | Resolution — and the carrier it comes from |
|---|---|---|---|
| 1 | **5 pharmacies × 50 agents** simultaneously | **RESOLVES** | Each agent is a non-human actor bound to a represented principal. Federation admits/denies the cross-boundary possibility per `(owning_tenant, other_tenant)`; RBAC resolves capability; the consent-gate reads D7; the owning domain commits. The scaling term is already named: **multiplicity ≠ evidentiary independence** — *"ten payer bots = one payer principal."* **50 agents from 5 pharmacies are 5 principals**, and every cross-tenant action emits a decision record. Nothing new. |
| 2 | **10 engineers + security + clinical + legal + compliance** concurrently | **RESOLVES** | Build plane, §3.8. Seats are architecture; holders are a register; adding a compliance function is a register edit. Separation of duties is enforced per change, not per person. The use-plane grammar is reused, so no second mechanism appears. |
| 3 | One engineer holding **several roles** | **RESOLVES** | Many holders per seat, many seats per holder, effective-dated. Forbidden combinations are *per change*: `proposal_authoring` + `cross_cutting_architecture_acceptance` on the same change; `integration` co-exercised with acceptance on the same set. Concentration is a recorded staffing fact, never architecture. |
| 4 | A role with **no holder** | **RESOLVES** | *"A seat with zero holders causes every gate depending on it to fail closed — never to silently default upward."* Same rule as RBAC default-deny. **Already demonstrated live:** `integration` was VACANT and correctly blocked every shared-surface landing until the operator appointed it. |
| 5 | One agent proposes, **another agent tests** | **RESOLVES** | `proposal_authoring` explicitly includes *"research, propose, author, test."* Two actors in the same seat is unremarkable; what is forbidden is one actor holding proposal **and** acceptance for the same change. Neither agent gains acceptance authority by testing. |
| 6 | An agent performs an **already-approved mechanical integration** | **RESOLVES-NARROWED** | The four-condition ministerial boundary in §3.5, composed from `integration`'s prohibition on resolving disagreement by merging, RBAC §8.4's human requirement for safety-sensitive atoms, and the runtime's model-actor/control-component split. **Narrows existing law; adds none.** |
| 7 | A human proposal author **also holds an approval seat** | **RESOLVES** | Permitted in general, forbidden on the same change: `cross_cutting_architecture_acceptance` *"may never accept a change it authored"*; `architecture_steward` *"may never accept its own proposals."* **Live instance: this carrier.** Its author holds `proposal_authoring` and cannot accept it. |
| 8 | **External payer agent and operator agent disagree** | **RESOLVES** | `INV-06`: no shared cross-principal state machine — the interaction view is a **vector of principal-local states**; mismatch is a named condition routed to humans and **never auto-corrected**. Care §4: non-fungible parallel authority planes — the payer commits coverage, the clinician commits the clinical recommendation, and *"the payer does not determine clinical indication."* Discordance is preserved, not smoothed. |
| 9 | **Patient agent and provider agent disagree** | **RESOLVES** | Same grammar as 8, plus three constraints that forbid a tie-break rule: Care §9a *contributions are not votes* and outputs are *"not presented as independent clinical authority"*; `INV-30` a majority may not vote away a patient right or a professional duty; `INV-15` (§3.7) patient rights enforced by default behaviour. The two agents contribute to **different authority planes**; the authorized Care owner commits. |
| 10 | **Delegation revoked mid-run**, in flight | **RESOLVES** | Three carriers compose exactly. Agent Runtime §G2C.4: the S1 run-context receipt and historical run stay **immutable**; what is invalidated is continued-use authorization, future admissibility and caches; a live run may **pause · terminate · narrow · reassemble**, and the transition is recorded; *revocation propagates ≥ as aggressively as publication*. §G2C.4-PoC forecloses riding a stale grant to a commit. Care §5a derived-grant invalidation cancels dependent scheduled actions and alerts. |
| 11 | **Break-glass under partial network failure** | **PARTIAL** | Present: RBAC §6 break-glass requires justification **+ dual-approver (T3)**, auto-expires (≤4h; longer needs T4 legal-entity-owner), links every action to the session, emits a red-severity alert. Federation §11 owns the cross-tenant **path**; RBAC owns the **teeth**. Care §13 supplies degraded-mode law: safe-halt vs safe-continuation, **retrospective authorization**, emergency actions as valid historical events. Care §5b.1 supplies `emergency_authority` and `emergency_exception`. **The residue:** break-glass **requires a second approver**, and a partition is precisely the condition under which the co-attestor may be unreachable. **No inspected carrier states what happens when a required co-attestor cannot be reached** — whether the gate fails closed (safe, but blocks emergency care) or degrades to post-hoc reconciliation (available, but weakens T3 to an assertion). **Answering it here would be inventing authority, which this gate forbids.** Routed to **`AB-29`** (emergency/degraded-mode regime; `open`; owner = Reactor/Care/Runtime reconciliation owner at the `architecture_steward` seat; `blocks G3`) with the question stated in this specific form, and recorded as `G-03`. |

**Result: 10 of 11 resolve without inventing authority; scenario 11 resolves partially with its residue routed to an existing open row rather than answered.** That single PARTIAL is the second reason §11 recommends `..._WITH_NAMED_GAPS`.

---

## §5 — Lane 1: external mechanisms — transfer verdicts

Mechanism only, `M-207` transfer discipline. **`AB-11` binds this lane:** a model's reading of a standard is not a comparator finding. Where this pass did not reach a primary source, the row says so rather than laundering a summary.

**`C-15` converted three families to conditional consult triggers.** They are **not** studied here and their absence is compliance, not omission: OpenRewrite/Moderne · Argo CD/GitOps · LangGraph/LangSmith.

| Mechanism | What transfers | What must NOT transfer | Source posture |
|---|---|---|---|
| **ISO/IEC/IEEE 42010** | viewpoints · views · **correspondence rules** as a completeness check; the correspondence idea is the load-bearing import — it is what makes an inconsistency *detectable* rather than merely present | conformance claims · vocabulary wholesale · the name. *"It cannot answer any question we actually have."* `architecture description` may appear as metadata **and nowhere else** | charter §3.1 (accepted); standard not re-read this pass |
| **FHIR** | canonical identifier · explicit versioning · base-definition-plus-constraining-specialization · differential vs snapshot · status/publisher · machine-readable validation against a declared profile · **constrain-never-loosen** | framing OMNI as a FHIR equivalent. **Therefore the artifact is an `Operating Profile`, never an unqualified "profile."** Registry finding: the comparator registry carries FHIR as a *payload standard* and never as a *profiling method* — which is why *"we've mentioned FHIR"* produced no variability discipline | charter §3.2 (accepted); primary spec **not inspected this pass** — `G-05` |
| **SEI product lines** | **variation points** — the architecture declares *in advance* where deviation is permitted and how. Inside a declared variation point = configuration; outside = an architecture change. Named failure modes: duplicate mechanisms · incompatible variation choices · unnecessary variation · missed required variations | product-line organizational assumptions | charter §6.2; primary sources **not inspected** — `G-05` |
| **IHE** | actors · transactions · **required groupings** · multi-profile conformance — the mechanism by which several profiles apply to one deployment without forking | IHE's committee governance | **not inspected this pass** — `G-05` |
| **AUTOSAR** | standardized interfaces with internals free — the exact shape of *"OMNI owns the capability contract; the rail is replaceable"* | automotive tiering | **not inspected** — `G-05` |
| **AWS lenses** | one workload, many lenses — validates that **operating-area** and **deployment** profiles are orthogonal views over one architecture rather than two hierarchies | AWS's pillar content | **not inspected** — `G-05` |
| **Palantir** | branching · proposals · resource protection · checks · lineage · **affected-resource builds** (the impact-analysis mechanism §1 records as *nothing exists*) · interfaces · package dependencies | ontology-platform identity. The plan's honest limit stands: **this arc has NOT established that Palantir fails to supply OMNI's care constitution** — only that supplying an ontology platform does not by itself supply it | **not inspected** — `G-05` |
| **Backstage** | catalog · entities · relations · ownership · scaffolding — as a **generated consumer**, never an authority. **`spec.owner` is display/responsibility metadata and is NOT OMNI authority** | the portal; any implication that catalog ownership is authority | plan §3 (accepted) |
| **IBM** | agent catalog + control plane | — | **not inspected** — `G-05` |
| **OPA** | policy-as-code as a *mechanism*: a lane physically cannot land an edit to a protected control surface | the engine as the place a rule lives (test 11) | plan §3; existing embryo verified in-repo |
| **OpenTelemetry** | semantic conventions as an **evidence vocabulary** | conformance or drift **authority**. **PHI and raw patient context are PROHIBITED in attributes** — not a preference | plan §3 |

**Lane-1 verdict: the transfer discipline is sound and the transfers are correctly bounded, but the lane is `evidence_incomplete`.** Seven of eleven mechanisms were carried from prior accepted OMNI analysis rather than from primary sources in this pass. **`AB-11` explicitly requires G1 to go to primary sources.** Recorded as `G-05` — the largest single gap in this carrier, and the reason the §7 tool verdicts are stated as *verdicts on the candidate* rather than as comparator-derived selections.

---

## §6 — Lane 3: `M-106` EXISTS-AS against the six concept registries

The plan's rule: *"for every operations capability, first check whether a wave registry already routed a concept to it. Anything presented as new must first fail `M-106` EXISTS-AS."* All six registries (`EVRUN-2026-000001/2/3/5/6/11`) were searched. All six are `omni_analysis_nonbinding`, **propose-only** until promoted through the destination home's gate.

| # | Operations capability | `M-106` verdict | Representative already-routed concept |
|---|---|---|---|
| 1 | architecture catalog / graph | **partial** | `architecture_memory_lint` → Architecture-Memory Control Plane · Build-OS · AWP |
| 2 | change proposal system | **partial** | `generated_change_candidate` (*candidate ≠ commit for software*) · `intent_to_change_compilation` → Build-OS |
| 3 | impact analysis | **partial** | `dependency_probe_before_commit` (*"find connections before cutting"*) → Architecture-Memory · CNS |
| 4 | effective-architecture compiler | **strong partial** | the F1 compiler family: `compiled_agent_manifest` · `compile_time_policy_check` · **`certified_variation_envelope`** — *"the boundary a governed agent compiler diffs a manifest against"* |
| 5 | conformance engine | **partial** | `executable_governance_law` — *"a control that can't be enforced in product is theater"* · `plan_conformance_check` |
| 6 | propagation engine | **partial** | `derived_permission_invalidation` · `instruction_update_policy` · control-inheritance |
| 7 | fleet reconciliation | **partial** | agent-fleet registry · `deployment_activation_state` · **`accidental drift` vs `authorized variation`** as settled doctrine |
| 8 | architecture observability / drift | **strong partial** | `drift_monitoring_policy` · `CNS_loop_agent` patrol workers · `architecture_memory_lint` stale/superseded detection |
| 9 | agentic workbench | **strong partial** | `agent_workbench` / `agent_cockpit` / `agent_management_layer` · `single_agent_first` · `agent_theater_guardrail` |
| 10 | exception / debt lifecycle | **partial** | `exception_surface` · compensating-control · `residual_risk_authority` · verification-debt-as-capacity-control |

**Result: ZERO of the ten capabilities passes `M-106` as net-new.** Every one has prior routed concepts. The honest characterisation: the **physics** is heavily routed and distributed; the **architecture-operations vocabulary** (catalog, impact traverse, fleet skew, debt lifecycle) was never minted as standalone named capabilities, and no arc consumed these registries for operations design.

> **★ This changes what G1 is allowed to claim.** The §1 capability table's *"what exists today: nothing"* column is **wrong as stated** for capabilities 3, 4, 6, 7 and 8. Nothing exists **as an implemented mechanism**; concepts **were routed** to all of them. Presenting any as greenfield would violate `M-106` and reproduce the arc's founding failure inside the arc's own gate. Recorded as `G1-FIND-05` with a recommended plan correction: split that column into `routed_concept` and `implemented_mechanism`.

---

## §7 — Tool candidate ratification (Amendment 7 / `C-08`)

*"G1 must issue an explicit verdict on every row — `adopt` · `narrow` · `reject` · `defer` — with its reason."* **All nine rows below carry a verdict.** Because Lane 1 is `evidence_incomplete` (`G-05`), these are verdicts on the **candidate as specified**, and every `adopt` is additionally conditioned on G4 test 11 (remove the tool; the architecture must still resolve).

| # | Candidate | **Verdict** | Reason |
|---|---|---|---|
| 1 | machine-readable manifest + validator → **JSON Schema + CI** | **ADOPT** | JSON Schema is a *format*, not an authority, so test 11 survives it: remove the validator and the three §3.1 objects remain stated and checkable by inspection. Narrowed to the §3.1 objects — **the descriptor is canonical, the snapshot is generated and byte-reproducible or the pipeline fails closed.** |
| 2 | approval + integration → **CODEOWNERS + rulesets + required checks + merge queue** | **NARROW** | Adopt CODEOWNERS + rulesets + required checks. **Reject the merge-queue component**: Build OS permits *"merge queue **or** serialized fast-forward"* and `C-17` established there is no measured queueing pressure. Hardening an option into a mandate is unearned. `.github/CODEOWNERS` is stale and carries no `/architecture` — rewriting it is G2 repository-authored work, and **marking a check required is repository-administration**, a different act with a different seat and a receipt. |
| 3 | ownership leases → **thin OMNI resource-claim checker** | **ADOPT** | Verified: CODEOWNERS implements no exclusivity, expiry, transfer or overlap detection, so nothing existing covers it. OMNI-native, so no vendor owns it. **Frontier caveat — `current_practice_only`:** leases solve *write collision*, and at agent scale the binding constraint is *review capacity*. The registries already routed the successor concepts (`claimable_work_item`, `delegation_depth`/`fanout_budget`, `automation_review_sampling_policy`). Adopt the lease; do not mistake it for the agent-scale answer. |
| 4 | shared-surface policy checks → **OPA / Conftest** | **NARROW** | **Adopt policy-as-code as a required mechanism** — `check-checkpoint-pointer.mjs` plus the `checkpoint-pointer` workflow are already policy-as-code in embryo and generalize directly. **Defer OPA/Conftest as the engine**, per `C-16`: adapters move to a triggered task *after* the canonical model survives G3 and G4. Trigger: a policy that cannot be expressed as a direct repository check. The registry concept `executable_governance_law` is the OMNI-side name for this and should be cited rather than re-derived. |
| 5 | catalog / graph → **Backstage-compatible envelope** | **NARROW** | Adopt only the **generated-consumer rule**: OMNI descriptors stay canonical, Backstage entities are generated downstream, and **`spec.owner` is display metadata that is NOT OMNI authority.** Defer the portal. The distinction is load-bearing — a catalog format that carried ownership authority would contradict §3.2 model 2, in which ownership is decomposed across six composers. |
| 6 | runtime evidence → **OpenTelemetry semantic conventions** | **DEFER (adapter) / ADOPT (requirement)** | Per `C-16` the OTel *mapping* is an adapter and moves to a triggered task. **What is adopted now is vendor-neutral:** architecture version, operating-profile ids, deployment-profile id, federation id and conformance result must be emittable as declared, named evidence, **with PHI and raw patient context prohibited in attributes.** The prohibition is not deferrable; the encoding is. |
| 7 | transformation recipes → **TS codemods; OpenRewrite later** | **DEFER** | Trigger upheld exactly as written: a repeatable, mechanically specifiable semantic transformation **with a decisive verifier** — *not an edit count*. `C-15` already made this a conditional consult; nothing in this gate met the trigger. |
| 8 | desired-vs-live reconciliation → **Argo CD / GitOps** | **DEFER** | Upheld and sharpened: **the logical fleet exists before Kubernetes does.** What is required *now* is the logical fleet model — `AB-05` local admission extended to releases, §9.3 — which is a G1 deliverable. The reconciler is conditional on an actual deployment substrate. Do not pick a K8s reconciler because the word *fleet* appears. |
| 9 | durable multi-agent execution → **LangGraph / LangSmith** | **DEFER** | Owned by Agent Runtime, post-spine. `FWREG-010` remains **OPEN** and the Agent Runtime capture's own scope ruling states the bridge *"does not close Agent Runtime."* Building a runtime pre-spine is explicitly out of scope. |

**Tally: 2 adopt · 3 narrow · 4 defer · 0 whole-row reject (1 component reject).** **The gate changed four of nine rows** (three narrowed, one component rejected). Per the plan, *"a candidate default that survives G1 unchanged is a ratified decision; one that does not is evidence the gate worked."* Both outcomes are present, which is the expected result of running the comparison after fixing the selections rather than before.

---

## §8 — The frontier obligation (§3.9.2): double evaluation

Each operations capability evaluated twice — **(1)** against current mature practice, **(2)** against 2030/2035 agent-native operation. Anything passing only (1) is labelled **`current_practice_only`** with the frontier gap named. The registries supply the frontier concepts; none is invented here.

| Capability | (1) current practice | (2) agent-native 2030/35 | Label | Named frontier gap |
|---|---|---|---|---|
| architecture catalog / graph | pass | **partial** | `current_practice_only` | Human-paced curation assumes a human reader. Registry: *"agent-readable markdown · index-first progressive disclosure · frontmatter-metadata = document-passport"* — the catalog must be **machine-first with a human view**, not the inverse. |
| change proposal system | pass | **fail** | `current_practice_only` | Assumes authoring is the scarce resource. Registry: *"Generation is solved. Verification, judgment, and direction are the new craft"*; *"abundant machine execution organized around scarce human intent + judgment."* A proposal system optimized for authoring throughput optimizes the wrong side. |
| impact analysis | pass | pass | — | Improves under agent load; `dependency_probe_before_commit` + affected-resource builds scale with compute. |
| effective-architecture compiler | pass | pass | — | Strongest frontier alignment. Registry F1: *source package → attestable manifest → policy/admission check → release → governed runtime*; `certified_variation_envelope` supplies the diff boundary. |
| conformance engine | pass | **partial** | `current_practice_only` | Episodic CI assumes episodic change. Registry: `executable_governance_law` + patrol loops — *"agents patrol, not only respond."* |
| propagation engine | pass | **fail** | `current_practice_only` | Assumes downstream updates are reviewable one at a time. At agent scale propagation *creates* the review bottleneck. Registry: control-inheritance + compositional review + `automation_review_sampling_policy`. |
| fleet reconciliation | pass | **partial** | `current_practice_only` | Registry settles the direction — *eliminate accidental drift; preserve authorized variation; preserve protective redundancy* — a distinction pure reconcilers cannot express. |
| architecture observability / drift | pass | **partial** | `current_practice_only` | Registry warns *"a system can suffocate on its own observability/traces."* Detection is solved; **attention economics is not** — `human_attention_budget`. |
| agentic workbench | pass | pass | — | Best-covered capability in the corpus, with the anti-patterns pre-named: `single_agent_first`, `agent_theater_guardrail`, anti-god-agent, `delegation_depth`/`fanout_budget`. |
| exception / debt lifecycle | pass | **partial** | `current_practice_only` | Registry: *"scale-converts-rare-to-routine … **exception-capacity scales first**"* — exception volume grows faster than the estate. Expiry-based debt lifecycles assume a human clears the queue. |

**Result: 7 of 10 capabilities are `current_practice_only`.** The operator's critique is **upheld with evidence**: the Build OS Step-5 targets are competent 2020s practice, and the corpus already routed the frontier successors that no arc has consumed.

**The single frontier finding, stated once:** across seven of the seven flagged capabilities the same gap appears — **every mechanism assumes human review capacity is elastic and change is episodic.** The registries independently converged on the inverse (`human_attention_budget`, patrol loops, `automation_review_sampling_policy`, compositional review + control inheritance, exception-capacity-scales-first, *"parallel agents ≠ evidentiary independence"*). **The 2030 operations model's scarce resource is verified human judgment, not authored artifacts** — and the operations model must be designed against that scarcity. This is the strongest candidate for a G2/G3 design constraint and is recorded as `G1-FIND-06`.

---

## §9 — The reconciled operating model

Everything below is a **proposal** discharging named ledger rows. Nothing is minted.

### §9.1 — Shared-mechanism disclosure: generalize `C4.4 §R` (`AB-01`)

**Verified against the source, not assumed.** `C4.4 §R` lives in `v4_C4_4_taxonomy_constitution_and_reference_architecture.md` (G3 layer, **accepted 2026-08-01**, `analysis_nonbinding`, `not_promoted`) and applies **one 13-question template** across `R.1`–`R.17`.

The ledger claimed two clauses are genuinely missing. **Both claims verified TRUE:**

| Claim | Verdict | Evidence |
|---|---|---|
| template has *what OMNI owns* + *what is pluggable* | **TRUE** | template Q3 + Q4 |
| template has an explicit **"what it may NEVER own"** | **FALSE — genuinely absent** | no Q-slot exists; only scattered per-mechanism negatives inside individual `R.x` answers |
| template has **build/buy/wrap** | **TRUE** | template Q12 |
| template has **"how is it replaced" / exit path** | **FALSE — genuinely absent** | Q12 is procurement posture; Q13 routes deferrals. *"Replaceable/swappable"* language covers **design-time** pluggability only. No sunset, migrate-off or exit-path question exists. |

**Proposal:** promote the 13-question template to the **universal shared-mechanism profile** for all architecture mechanisms, adding exactly two questions — **(14) what this mechanism may NEVER own** and **(15) how it is replaced, and what the exit path costs.** Question 15 is what makes G4 test 11 an *executable drill* rather than an assertion.

**Scope correction to the ledger, minor but recorded:** the ledger says *"C4.4 governs data/knowledge/source artifacts, not releases."* §R never states that exclusion; it is a *positive* knowledge/source-estate scope. Extending it to architecture-package releases is therefore an **extension beyond stated scope**, not a repair of an exclusion. **Owner: `domain_owner_approval` for C4.4** — FAI may not extend another arc's accepted deliverable unilaterally. Recorded as `G-07`.

### §9.2 — The shared-mechanism standard candidate (`AB-02` · `AB-03` · `INV-14`)

Three narrowed findings compose into one standard candidate. Each absolute form was rejected in the ledger; the narrowed forms are carried:

1. **Loss clause** — loss of a shared non-owning mechanism must never **silently transfer authority, fabricate correctness, or create false certainty.** It may reduce availability, freshness or verifiability, and the system must **expose that degradation and fail closed where consequence requires it.** Maps onto template Q8.
2. **Minimality clause** — a shared mechanism may compute *allowed / correct / equivalent / binding* **only as an attributed, versioned result for a named principal, authority basis, policy and scope.** It may **never elevate that result into universal truth or into another principal's commitment.** This is `INV-19`'s no-global-authority-graph rule generalized to every shared mechanism.
3. **Non-neutrality clause** (`INV-14`) — *anything defining envelope, addressing, time and conformance exercises power.* **Abandon neutrality as a goal; pursue minimality plus exit.** This is why clause 2 and template Q15 are the same programme.

### §9.3 — Change lifecycle and the logical fleet (`AB-05` · `AB-06` · `INV-24` · `INV-26`)

**The law already exists.** `C4.4 §R.16` states verbatim: `federated publication ≠ universal trust` (locally admitted); *"Inbound is admitted locally (never auto-trusted)"*; lifecycle `publish → (recipient) admit → use-under-grant → revoke`; and the publisher *"does not remotely rewrite the recipient's locally-admitted S2 or locally-committed S3."*

**Extension proposed:** apply that existing law to **architecture-package releases · operating and deployment profiles · fleet desired state · version skew.** Consequences, each already implied by the law:

- A published architecture version is a **candidate**; local adoption determines what is active (`INV-24` — desired state does not determine which rules are active).
- **Version skew is a normal operating state, not an incident** (`AB-06`) — a corollary of local admission, deliberately not minted as a second law.
- **Federation governance may publish and may restrict its own services; it may not record adoption for a member** (`INV-26`).
- `§R.16`'s Amendment-3 profile split transfers directly: a **discrete delivery package** is closable; an **ongoing synchronization relationship** never globally closes and uses bounded epochs and watermarks. An architecture release is the first; fleet reconciliation is the second. **Forcing a continuous feed into a closable package is the named error.**

### §9.4 — The three objects and the change capsule (`AB-07`)

Plan §3.1 specifies the three machine-readable objects. `AB-07`'s change capsule is dispositioned as an **input to the change-manifest schema, not adopted wholesale.** The fields it contributes that §3.1 does not already carry: **rationale · refusals · conditions · rollout.** **`refusals` is the load-bearing one** — a change manifest that records approvals but not refusals cannot satisfy `INV-30` (a majority may not vote away an independently liable principal's refusal) and cannot represent a `domain_owner_approval` block, which the disagreement rule makes **blocking**. **A change manifest without a refusal field silently converts a blocking objection into an absent approval.**

### §9.5 — Information and evidence contract (`AB-15` · `AB-16` · `AB-17` · `AB-24` · `INV-05` · `INV-07` · `INV-13` · `INV-17` · `INV-21` · `INV-23` · `INV-28` · `AB-14` · `INV-12`)

| Clause | Content | Reconciliation note |
|---|---|---|
| **Atomic statement / collective act** | An **atomic statement** has exactly **one issuing principal**, and may carry many actors, signers, witnesses, reviewers, endorsements and dissents. A **collective act** is a composite object with its own identity, a named collective body/process, a **decision rule**, and constituent **independently attributable** statements, assents and dissents. | Dissolves the A-vs-B fork without choosing a winner. A tumour board is neither falsely assigned to one clinician nor given an ambiguous multi-issuer. |
| **Four orthogonal consent axes** | `choice` = consent · refuse · withdraw · **unknown** ⟂ `communication` = recorded · delivered · acknowledged · disputed ⟂ `legal_effect` = effective · limited · **overridden_by_law** · expired ⟂ `authority/source`. **`overridden_by_law` is not a kind of consent** — it is a legal-effect state applied to a **separately preserved** refusal, which survives the override intact. Silence is `choice = unknown` and must **never** resolve to consent by timeout. | **Consonant with Care §5a, which already forbids one consent object** and lists the distinct families. The axes are the *decomposition shape*; Care owns the content. **Care is FROZEN — route to G3, do not edit Care.** |
| **Degraded attribution** | Most inbound facts arrive with **no verifiable principal** (HL7v2, fax, DICOM, portals, phone, paper). Requires an honest degraded-attribution class — *"received by fax from a claimed sender"* — rather than a pipeline that **manufactures a signature to satisfy the schema.** | This is the architectural form of the connector-tsunami concern, and it is exactly what GCE's *"two faces, one spine"* must carry without weakening the spine. |
| **Protocol completeness ≠ formation** (`INV-07`) | A compact/protocol engine may declare **protocol completeness only**; a binding transaction requires independently signed commitments. | Sharpens GCE's `externally_committed_truth` classification — *committed in the source system, NOT OMNI-committed.* |
| **Continuity bundles import as evidence** (`INV-13`) | A receiving operator does not inherit the authority of statements it did not issue; imported material enters as **attributed evidence**, and receiving-principal interpretations are created separately. | Identical in shape to `§R.16` local admission, and to Identity's *patient-source enters `source_authority=patient`, `clinical_adoption_state=not_adopted`.* |
| **Observer-scoped projections** (`INV-21`) | Every evidence graph is an observer-scoped projection and must **expose known omissions.** | The *expose known omissions* clause is the non-obvious half and is absent from the estate; `D0THES-DEC-033` covers only that projections own no truth. |
| **Audit proves observation** (`INV-28`) | An operator-hosted audit log proves **what the operator observed** — not another principal's intent, authority or source execution. | Directly constrains how OMNI may describe its own audit. |
| **Source sovereignty clarified** (`INV-23`) | Sovereignty is authority **for what the source committed or recorded** — not for the underlying reality. | **A clarifying constraint on OMNI's own existing law**, not a new law. Called a *critical near-miss* because the law reads correctly and can be misread exactly this way. |
| **Portability** (`AB-14` · `INV-12`) | Portability is **relationship portability**: export without **warrant re-anchoring** and **commitment novation** delivers an archive, not continuity. Proven by **drills**, not by claims. | Novation, re-anchoring and drill-measurement are absent from the estate. **Fork rights against OMNI governance are a business question routed to the operator**, not architecture. |

### §9.6 — Conformance model (`AB-04` · `AB-10` · `INV-25`)

- **Conformance is an attributed claim** carrying issuer · profile · version · environment · exceptions. **Plural certification is NOT adopted** — premature for OMNI's single-operator posture.
- **Technical conformance ≠ legal compliance ≠ counterparty acceptance** (`INV-25`). These must be separately stated, and the two-receipt split already enforces the analogous separation: `architecture_operations_v0_conformance` vs `runtime_and_fleet_proof` = `not_yet_due`.
- **The independence-proof ladder replaces the rejected two-implementation mandate** (`AB-04`): for an implementation-independent or cross-operator claim, require one or more of — a second independent implementation · an independent parser/validator · an **independently authored conformance suite** · an alternate consumer · a **portability/fork drill** · a standards-native comparison. **Evidence strength rises with consequence and lock-in risk.** This is the same shape as RBAC's risk-tiered attestation ladder, applied to architecture claims — reuse, not invention.

### §9.7 — `AB-08` CLOSED: the artifact metamodel

**`AB-08` is the only `open` row that blocks G1, and the plan requires it decided here.** The fork: **B's 17 artifact classes** vs **A's 5 tiers**, against OMNI's existing architecture-role index and its separate governance-category enum.

**Decision: the granularity question is REJECTED AS MALFORMED. Neither 17 nor 5 is adopted. The multi-axis passport is adopted instead.**

**Why this is a reconciliation and not a third invention:** the question *"how many artifact classes?"* presupposes **one flat enum**, and OMNI has already diagnosed and fixed this exact defect once. Care §5b.1 states verbatim that *"the earlier single enums were malformed"* and **decomposed them into orthogonal axes** (`authority_basis` ⟂ `authorization_evidence_form` ⟂ `approval_requirement` ⟂ `checkpoint_graph`). The artifact taxonomy has the identical pathology, and the charter §4 already reached the identical answer independently. **This is `D0THES-GRD-026` — payload-noun ≠ domain — applied to artifacts.**

**Adopted: six independent passport axes** (charter §4, verified against both taxonomies):

`governance_category` ⟂ `architecture_role` ⟂ `authority_maturity` ⟂ `scope` ⟂ `plane_or_view` ⟂ `build_evidence_maturity`

**The test it passes and every flat enum fails:** Reactor's honest current position is expressible **only** as a vector — `doctrine` / `cross_cutting_architecture_standard` / `candidate` / `cross_cutting` / `[seam, capability, projection]` / `fixture_tested_partial`. **No single enum value can say that, which is precisely why Reactor was unclassifiable and therefore unfindable for three weeks and three arcs.** The taxonomy defect and the invisibility are the same defect.

**The count is not the decision, and must not become one.** `architecture_role` is an **open registry extended by governed architecture change** — which is exactly what charter §6.4's missing change-control process must govern. Hard-coding a role count would create the maintained duplicate that reopened `C-11` and `C-12`. **Both A's 5 and B's 17 are recorded as inputs and neither is adopted.**

**Role values proposed as additions** (charter §4 verified all six absent from the ratified index): `standard` · `pattern` · `operating_profile` · `conformance` · `controlled_vocabulary` · `view`. **Plus one from `AB-25`:** a **threat / misuse-case** artifact class, because OMNI's independent-principal model currently assumes honest-but-independent principals and the estate has no home for adversarial-principal analysis (upcoding, coerced consent, sybil operators, fabricated warrants, strategic divergence asserted for leverage).

**Proposed, not minted.** Charter §11 forbids minting a taxonomy category before G1; G1 may propose, and the `architecture_steward` seat accepts. **The two taxonomies are linked one-way and are not modelled as independent axes** — that corrected diagnosis (`C-12`) is what this repair addresses, and the counts of existing roles and contract files are resolved from the governing index and the `contracts/` directory rather than restated here.

### §9.8 — Profile and deployment resolution (`AB-30` · `INV-18`)

**Two orthogonal profile axes, never one** (charter §6.1): the **operating-area profile** answers *how does OMNI do this kind of work* (Insurance, Pharmacy, Labs, payroll, banking); the **deployment profile** answers *how does this instance run* (single clinic · OMNI-composed enterprise · federated network node). **A one-axis system collapses them, and then every customer deviation looks like an architecture change.**

- **Variation points** (charter §6.2) are the mechanism: inside a declared variation point is **configuration**; outside it is an **architecture change** going through the architecture's own process — not a customer's ticket.
- **Jurisdiction is a required profile axis** (`AB-30`) — the architecture must be able to **express** the variation for minors, incapacity, public health, court orders and employed professionals. **The legal answers themselves are out of scope**, destination `future_work_registry.md`. This is consonant with Care §5b.1's explicit instruction not to hard-code universal examples because they vary by capacity, directive, jurisdiction, operator and law.
- **`INV-18` — one logical instance ≠ one authority domain.** An instance hosts patients, clinicians, contractors and external principals with different liabilities. Separate the **logical instance** from the **principal cell**, and record authority context per action. Federation already supplies the substrate: the composite `tenant_id` across six tiers, with **flat `tenant_id` REJECTED**. **The deployment profile is a projection over that topology, not a second tenancy model.**
- Resolution must be **deterministic for an explicit `as_of` point**, and ambiguous or contradictory profile/variation/exception combinations must **FAIL CLOSED with a named owner and reason** — never silently pick a winner (test 2, `C-13`).

### §9.9 — Human factors as a viewpoint (`AB-32`, with `AB-27` routed to G4)

The ledger reversed `AB-32`'s original routing-out: *"Human-factors architecture is not optional."* **FAI retains** a human-factors/safety **viewpoint**, cognitive-load and interpretability **requirements**, the rule that **projections must not become de facto authority merely by being easier to consume**, and **conformance hooks** for hidden uncertainty, unsafe delay, alarm burden, false clinical gating and explanation integrity. **FWREG owns only the full clinical human-factors research and implementation programme.**

`AB-27` supplies the falsifier this viewpoint exists to catch: *a divergence-preserving record is harder to read; if views are the only usable surface, views become authoritative in practice and the attribution plane is decorative.* **That is a falsifier of `D0THES-DEC-033`, not a duplicate of it** — the law says projections own no truth; `AB-27` supplies the mechanism by which the law **silently fails in practice**. It blocks G4 as a required negative test, extending test 7's negative controls.

---

## §10 — The architecture-operations loop and graph semantics

The plan's §2 loop is **not redesigned here**; it is bound to §3's grammar so it is executable rather than illustrative.

**Every stage is an act class, and each resolves through the same grammar:**

| Loop stage | Seat / act class | Composition constraint |
|---|---|---|
| evidence · classification · proposal · impact · conformance · migration agents | `proposal_authoring` — **propose** | may be human or agent; **never** accept, approve or commit |
| owner review | `domain_owner_approval` for owned resources; `architecture_steward` for cross-cutting | a domain-owner objection **blocks** promotion into that owner's truth |
| integrator | `integration` — **ministerial commit only** | §3.5 four-condition boundary; never resolves substance by merging |
| fleet agent | publishes a version | publication is **not** adoption (§9.3) |
| observer agent | **proposes**, never silently rewrites | `INV-21` observer-scoped; expose known omissions |

**Every run pins** represented principal · agent runtime profile · architecture version · operating profile(s) · deployment profile · federation/operator/tenant/site · permitted tools · writable resources · required reviewers · commit ceiling · proof obligations. **This is not a new agent framework** — it is a binding of the existing Agent Runtime object model to architecture resources, and the pinned set is the §3.3 replay set applied to the build plane.

**Graph semantics** — relationships are those already fixed in plan §3.1 (`owns` · `depends_on` · `specializes` · `supersedes` · `conforms_to` · `implemented_by`), with three constraints carried from §3 and §9:

1. **`owns` is not authority.** Backstage-style `spec.owner` is display metadata; authority resolves through the six composers. A graph edge must never be read as a grant.
2. **`specializes` may constrain and may never loosen** — the FHIR mechanic, and the validation rule that makes profile inheritance checkable.
3. **The graph is generated from descriptors, never hand-maintained beside them.** The charter's second hard constraint — no hand-maintained manifest duplicating the catalog — is the same rule that `C-11`/`C-12` proved by counter-example four times.

---

## §11 — Recommended verdict

> ### `MODEL_CONVERGED_WITH_NAMED_GAPS`
>
> **Recommended by `proposal_authoring`. Not self-accepted.** The approving seats are `architecture_steward` + affected `domain_owner_approval`.

**Why not `MODEL_CONVERGED`:**

1. **Maturity, not content.** `§G1-AUTH` reconciles six composition models spanning `ratified` → `canonical/draft_for_ratification` → `analysis_nonbinding` → **frozen candidate**, with the single most precise statement (the nine-term meet) sitting at the **lowest** maturity and one load-bearing carrier (Care §5b/§5b.1) **FROZEN under a forensic audit**. A build-facing model cannot be more mature than its inputs. Declaring `MODEL_CONVERGED` would claim certainty the sources do not support — the specific dishonesty this arc exists to stop.
2. **Pressure scenario 11 is PARTIAL** with a real residue: break-glass requires a dual approver, and partition is precisely when the co-attestor is unreachable. Answering it here would invent authority.
3. **Lane 1 is `evidence_incomplete`** (`G-05`): seven of eleven external mechanisms were carried from prior accepted OMNI analysis rather than primary sources, while `AB-11` requires primary sources at G1.

**Why not `NOT_CONVERGED`:** the grammar itself holds. Ten of eleven scenarios resolve without inventing authority; all 40 `blocks G1` rows are discharged; the one `open` row that blocks G1 (`AB-08`) is closed; all nine tool candidates carry verdicts; the frontier obligation is discharged with evidence. Nothing found here requires restarting or redesigning the arc.

---

## §12 — Uncertainty register and named gaps

**This section discharges `AB-26` / `INV-16`, which require the register to EXIST and require the candour penalty to be carried as a standing falsifier rather than a design requirement.** The ledger is explicit: *"A refused to solve it; OMNI must not pretend to."*

### §12.1 — Standing falsifiers (not gaps; they do not close)

| # | Falsifier | Status |
|---|---|---|
| **F-01** | **Candour penalty** — rigorous attribution increases liability exposure, which rationally reduces candid documentation and pushes reasoning into side channels. ***"The better it works as proof, the worse this gets."*** | **No design response.** Carried as a permanent falsifier and a G4 falsifier-set member. **Any future claim to have solved it must be treated as suspect.** |
| **F-02** | **Cognitive load — the view becomes the truth** (`AB-27`). If views are the only usable surface, projections become authoritative in practice and the attribution plane is decorative. | Falsifier of `D0THES-DEC-033`. Required G4 negative test. |
| **F-03** | **Multiplicity is not corroboration** — *"five agents on one model ≠ five opinions."* PRE-0 demonstrated this on itself: B and C shared a model family, and two rows were marked prompt-seeded after being miscounted as convergence. | Permanent methodological falsifier for every future multi-agent pass. |

### §12.2 — Named gaps, each with owner, trigger and blocking status

| # | Gap | Owner (seat) | Trigger | Blocks |
|---|---|---|---|---|
| **G-01** | **No N-of-M approval cardinality** exists in any inspected carrier. Care §5b.1 has `dual_control` and `independent_verification`; RBAC has `T3 dual_approval`. Neither expresses "3 of 5" or quorum. | `domain_owner_approval` — Care + RBAC | first governance or clinical process requiring quorum | non-blocking |
| **G-02** | **Seat-holder `transfer` and `suspension` undefined.** Delegation revocation is strong; *transferring or suspending a holder binding mid-flight* is not covered. The vacant-integrator episode was a **vacancy**, never a transfer. | `architecture_steward` | G2 register design | **blocks G2** register schema |
| **G-03** | **Break-glass co-attestor unreachable under partition** (scenario 11). Fail closed and block emergency care, or degrade to post-hoc reconciliation and weaken T3 to an assertion? | `architecture_steward` — Reactor/Care/Runtime reconciliation | G3 deep reconcile | **blocks G3** — folded into `AB-29` |
| **G-04** | **No threat / misuse-case artifact class.** OMNI's independent-principal model assumes honest-but-independent and inherits that unexamined (`AB-25`). | `architecture_steward` | G2 metamodel install | **blocks G2** |
| **G-05** | **Lane 1 `evidence_incomplete`** — 7 of 11 external mechanisms not read at primary source this pass, while `AB-11` requires primary sources at G1. | `proposal_authoring` under `architecture_steward` direction | before G3 foundation reconciliation | **blocks G1 final acceptance** if the approving seat requires full Lane-1 discharge |
| **G-06** | **Tier-0 #14 (`coherent_omni_architecture_pattern_2026-05-17.md`) not read at this gate.** Charter §12 requires every gate to re-prove a boot receipt for Tier-0 #14 **and** the Artifact Index. The Index was read in full; #14 was not. **This is the arc's own recorded failure mode reproduced at its next gate.** | `proposal_authoring` | immediately, before G1 acceptance | **blocks G1 acceptance** |
| **G-07** | **`C4.4 §R` generalization is cross-arc.** §9.1 proposes extending another arc's accepted G3 deliverable. FAI may not do that unilaterally. | `domain_owner_approval` — C4.4 | G1 acceptance | **blocks G1** discharge of `AB-01` |

### §12.3 — Findings routed out of this carrier (`G1-FIND-*`)

| # | Finding | Route |
|---|---|---|
| `G1-FIND-01` | Checkpoint §4's seven-row enumeration diverges from the ledger's per-row `blocking_scope` (§2.2). `D0CKPT-GRD-004` maintained-duplicate class, reproduced in the checkpoint written to close that class. | `architecture_steward` — replace the enumeration with a pointer to the ledger field |
| `G1-FIND-02` | `rbac_authority_contract.md` §5 contains **two different four-member lists**; a build reader will conflate them. | `domain_owner_approval` — RBAC, at ratification |
| `G1-FIND-03` | The most precise composition statement in the estate (the nine-term meet) sits at the lowest maturity. | `architecture_steward` — promotion is not this gate's act |
| `G1-FIND-04` | Approval **topology** (Care) and attestation **tier** (RBAC) are orthogonal and no carrier joins them. | `domain_owner_approval` — Care + RBAC |
| `G1-FIND-05` | Plan §1's *"what exists today: nothing"* column is wrong for capabilities 3, 4, 6, 7, 8 — concepts **were routed**; mechanisms were not built (§6). | plan correction: split into `routed_concept` / `implemented_mechanism` |
| `G1-FIND-06` | The single frontier finding: **every flagged mechanism assumes elastic human review capacity and episodic change** (§8). | G2/G3 design constraint |

---

## §13 — Scope compliance

**Not done, deliberately:**

- **No `/architecture` package created.** G1's writable surface is *"new `/architecture` **proposals only**"*; installation is G2 and requires a **Build Entry verdict** before any executable schema, generator, workflow or policy code.
- **No shared control-plane surface written** beyond the two AWP §5 completion side effects declared in the stop report.
- **Nothing minted.** No taxonomy category, no seat, no domain, no plane, no object, no `constitution.md`, no `manifest.yaml`, no `reactor-service`.
- **Care not edited.** Care capture is FROZEN under forensic audit; consent axes, admissibility projections and `approval_requirement` are consulted as artifact-under-test and routed to G3.
- **`C4.4 §R` not edited.** §9.1 proposes; the C4.4 domain owner disposes (`G-07`).
- **Insurance untouched.** PR #14 not touched; `C3.9` not started; `E2` not started.
- **No market/moat claim.** Mechanism comparison stays here; commercial claims stay with Task-D.
- **No vendor adoption beyond plan §3's rows**, all nine of which carry verdicts in §7.

---

## §14 — STOP RECEIPT

| Field | Value |
|---|---|
| Artifact | FAI **G1 operating-model carrier R0** |
| Gate | G1 — converge the operating model |
| Author seat | `proposal_authoring` |
| State | **`proposed`** — per the gate-output contract |
| Ledger discharge | **40 `blocks G1` rows** discharged (§2.3) · **`AB-08` closed** (§9.7) · 6 non-G1 `open` rows carried forward unchanged with owners and triggers intact |
| `§G1-AUTH` | delivered as a **reconciliation** — six composition models, four maturity levels, one grammar (§3); **11 pressure scenarios: 10 resolve, 1 partial** (§4) |
| Tool ratification | **9 of 9** rows: 2 adopt · 3 narrow · 4 defer · 1 component reject (§7) |
| Frontier obligation | discharged — **7 of 10** capabilities `current_practice_only` with named gaps (§8) |
| `M-106` EXISTS-AS | **0 of 10** capabilities pass as net-new (§6) |
| Minted | **nothing** |
| Shared control-plane surfaces | 2 — catalog row + route `9v` read-order extension (AWP §5 mandatory completion side effects; see stop report) |
| Recommended verdict | **`MODEL_CONVERGED_WITH_NAMED_GAPS`** |
| Next | `architecture_steward` + affected `domain_owner_approval` review → accept / amend / reject. **G1 does not close by this file.** `G-06` (Tier-0 #14 unread) and `G-05` (Lane 1 incomplete) should be discharged before acceptance. |

---

## §15 — Handoff (this carrier IS the Tier-2+ preservation artifact)

**Why there is no separate `HANDOFF_*` file.** AWP §8 requires a durable handoff artifact at Tier 2+. A separate file would be a **third** description of current state beside the checkpoint §1 and this carrier's §14 — the maintained-duplicate failure that reopened `C-11` and `C-12` twice each, whose stated root cause is *"correcting a copy leaves the copy."* This section supplies the §5 Handoff Minimum Contract fields the carrier did not already carry, so there is one carrier and no duplicate.

**Changed artifacts, files and commits**

| File | Change | Commit |
|---|---|---|
| `v4_FAI_G1_operating_model_carrier_2026-08-10.md` | **new** — this file | carrier commit |
| `doctrine/01_master_corpus_catalog.md` | +1 row | governance commit *(separately revertible)* |
| `doctrine/04_manifest_read_graph.md` | route `9v` read order extended | governance commit *(separately revertible)* |

**Verification actually run**

- `node scripts/check-checkpoint-pointer.mjs` → **pass**; both boot surfaces name the current checkpoint.
- Ledger discharge **machine-verified, not asserted**: rows carrying `blocks G1` = **40**; rows named in §2.3 = **40**; set difference = **empty**. Given this arc withdrew every closure claim before R5 as *not byte-true*, the count is computed rather than counted by hand.
- No TypeScript touched → `npm run typecheck` / `npm run lint` **not applicable to this change set**.

**Settled here — do not relitigate without new evidence**

The six-model reconciliation and its five-question structure (§3.2) · the three fall-out invariants (§3.2) · `AB-08`'s closure by multi-axis passport rather than by granularity count (§9.7) · the ministerial-integration four-condition boundary (§3.5) · the nine tool verdicts (§7) · the `M-106` result that **zero** capabilities are net-new (§6).

**Source-of-truth load order for the next agent**

`AGENTS.md` checkpoint-pointer → the named checkpoint → **route `9v`** (execution plan R8 → charter R9 → PRE-0 ledger R5 → **this carrier**). The gate sequence lives **only** in execution plan §5. Closure conditions live **only** in the ledger's per-row `blocking_scope` — **not** in the checkpoint's §4 summary (§2.2, `G1-FIND-01`).

**Guardrail candidates — captured, NOT promoted** (`GRD-036`: capture broad, promotion gated). Writing to `06_guardrail_antipattern_digest.md` is a Tier-0.5 boot-visible rule change; `proposal_authoring` may not make it. Routed to `architecture_steward`:

1. **Multiple statements at multiple maturities cause re-derivation.** When an estate holds several statements of one law at different maturity levels, agents re-derive rather than reconcile, because no single carrier is both complete and authoritative. **Before authoring any cross-cutting model, enumerate every existing statement of it *and its maturity*, and lay them side by side. Finding one carrier is not finding the model.** Evidence: §3.1 — six composition models, four maturity levels, three re-derivations.
2. **A compressed restatement in a routing surface is a staleness site even when the surface is correct on its own terms.** The checkpoint §4 enumeration drifted from the ledger field it summarized (§2.2). This is `D0CKPT-GRD-004` recurring at a new layer, and it argues the existing guardrail should be widened from *boot surfaces* to *any surface that restates another surface's field*.
3. **A precision/maturity inversion is a promotion signal.** The most precise statement of a law sitting at the estate's lowest maturity (`G1-FIND-03`) predicts that later arcs will re-derive the imprecise version.

**Deliberately NOT done**

No checkpoint repoint. G1 is **not closed**, and the Checkpoint Closeout Rule attaches to the commit *claiming the gate done*. Repointing now would tell the next agent a gate closed that did not.

**Stop condition for this handoff:** superseded when the `architecture_steward` and affected `domain_owner_approval` seats accept, amend or reject this carrier — at which point the accepting transaction owns the checkpoint repoint.

**STOP: `g1_carrier_R0_proposed · ledger_40_g1_rows_discharged · AB-08_closed · G1-AUTH_delivered · 10of11_scenarios_resolve · 7_named_gaps · awaiting_approving_seats`**
