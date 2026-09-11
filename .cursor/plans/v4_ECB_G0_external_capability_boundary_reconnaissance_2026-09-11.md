# ECB Gate 0 — OMNI's Care Participation Operating Model

Document type: `plan_or_roadmap` — **Gate-0 estate-reconnaissance and subject-definition carrier**
Authority: `analysis_nonbinding` (`D0THES-GRD-036`). **Originates no doctrine, mints no domain, accepts no architecture, promotes nothing.**
Status: `G0_R3_AUTHORED_PENDING_NICK_KNOX_REVIEW · arc_not_started · fai_untouched · catalog_registration_OWED`
Revision: **R3** — amends R2 (`3b9db0c2`) against the Knox R2 review (BC-1…BC-4) plus two operator-raised corrections. Log at `§22`.
Domain(s): `cross_domain` · `architecture_governance` · `federation` · `rbac_authority` · `cns_orchestration` · `ordered_fulfillment` · `d7_documents_consent` · `observation_measurement` · `clinical_memory` · `trials_research`
Lifecycle role: names the subject, records recovered inheritance with per-claim evidence, freezes the frontier burden and the discriminating tests — **before** architecture extraction.
Source-of-truth relationship: **owns nothing.** Arc state belongs to `§1`.
Supersedes / Superseded by: nothing / none.
Manifest action: `add_tier2` — **PROPOSED, registration OWED** (`§20.1`).
Review gate: `user_knox_required`

---

## §0 — R3 amendment summary

Knox's four bounded corrections (BC-1…BC-4) are **accepted**, with one narrowing where proper verification vindicated the underlying claim. Two **operator-raised** corrections outrank them in consequence, and both are now verified against the repository. A fifth section adds the frontier mechanisms the operator asked for, which neither review had put in the carrier.

### §0.1 Operator correction 1 — the name collides, and with the inverted sense

Nick: *"it worries me if there's a potential collision with care capability elsewhere ... how is care capability within omni different than external to omni?"* **Verified. The worry is correct and the collision is worse than a duplicate token.**

`capability` carries **three distinct senses** in this estate:

| Sense | Meaning | Home |
|---|---|---|
| 1 | a **permission atom** held by an actor | RBAC contract; `lib/auth/capabilities.ts` |
| 2 | a thing an **external system can do**, admitted under a posture | P35; GCE capability contract |
| 3 | **`Core Capabilities` — OMNI's OWN operated care businesses** | Federation contract inv 29 / `T0-14` |

**Sense 3 is the fatal one.** *"Care–Capability Operating Model"* reads as sense 2 — the external provider. But in the Federation contract, which owns the very boundary this arc studies, a **care capability is OMNI's own operator**:

```69:69:.cursor/plans/contracts/federation_contract.md
8. **Operator-neutrality — no privileged OMNI tier (`T0-14`/`T0-16(a)`, inv 29):** OMNI-operated operators (Core Capabilities / Specialty Lines) are tenants subject to IDENTICAL permeability/consent/Tier-4/transparency rules; the substrate REJECTS (a) a grant giving an OMNI operator access a peer Brand couldn't get under equivalent consent, (b) discovery/routing/continuity preference for OMNI operators, (c) any deployment/governance-plane bypass of the gates.
```

So the name points at the opposite of its intended referent, in the contract most likely to be read alongside it. That is not an aesthetic problem and a disambiguation footnote does not fix it.

**And the deeper half of the operator's question is the real finding.** *"How is care capability within OMNI different than external to OMNI?"* — **architecturally, it is not, and the estate has already ratified that it must not be.** `T0-14` operator-neutrality: *"OMNI-operated operators are tenants like any third-party Brand — identical permeability/consent/attestation rules; **no privileged tier; no self-dealing via deployment/governance control**"* (federation contract line 32). `D0THES-GRD-032`: *"architecturally OMNI Direct = one rail; economically it is NOT demoted."*

**A `care ↔ capability` framing silently encodes an inside/outside dichotomy the architecture forbids.** Name it that way and every future agent inherits a privileged category for OMNI's own care. That is a `T0-14` violation installed by vocabulary. **Installed as invariant `[INV-NP]` at `§3.3`, and made falsifiable by scenario `S16`** — where the producer *is* an OMNI-operated Core Capability and the trace must not diverge in kind.

### §0.2 Operator correction 2 — "participation" is not a safer word, it is the estate's existing word

Chasing sense-3 led to **Care `§9a`**, which neither review had recovered and which is a closer antecedent to this subject than anything previously cited:

```264:270:.cursor/plans/v4_C4_care_operating_model_capture.md
## §9a — Multi-actor / multi-agent participation & influence (three non-collapsing gates; contributions ≠ votes)
**[INV] Participation topology (unbounded, dynamic, never fully known):** patient ± private AI · provider ± preferred external AI · OMNI-native assistant · specialist AI · pharmacy AI · payer AI · lab/public-health · staff · regulator · **unknown-at-start**; join/leave/mute/revoke/re-enter. Modeled by `resolution_participation_binding` (narrow C5 candidate) + `resolution_participant_graph` (projection, NOT truth). Per-contribution semantics: agent/runtime identity · represented principal · agent-operator/sponsor/incentive · model/provider/version · harness/runtime-profile version · context+source versions · `stability_state` · capabilities/tools used · evidence refs · **correlation/independence class** · output · uncertainty · **exposure to human** · **human disposition {unseen/reviewed/accepted/modified/rejected}** · influence on plan/action · downstream commit links · later evaluation · revocation.
```

That single paragraph already carries: **join/leave/mute/revoke/re-enter** (the obligation-survival question at `H5`) · **correlation/independence class** (what R3 was about to claim as a novel frontier mechanism — see `§17.F2`) · **agent-operator/sponsor/incentive** (the neutrality question at `Q-ECB-12`) · **model/provider/version + harness/runtime-profile version** (lineage axes at `Q-ECB-17`) · **unknown-at-start** participants · **revocation** · *"contributions ≠ votes"* and *"multiplicity ≠ independence."*

Care also carries `ai_participation_policy {prohibited · permitted · optional · required_by_versioned_operator/protocol_policy}` and **research participation** and **agent-participation + context-access** as consent families.

**Therefore the subject is renamed to OMNI's Care Participation Operating Model** — not to dodge a collision, but because *participation* is the estate's own vocabulary for this exact concept, it carries no inside/outside dichotomy (OMNI Direct participates; a robot vendor participates; a manufacturer participates; a patient participates), and it makes `[INV-NP]` natural rather than bolted on. Arc key **`ECB` unchanged** — a mechanical handle inherited from P35's family name, explicitly **not** a scope statement.

**This is one decision, not a reopened naming debate.** Knox asked for no further naming round and that request is honoured: the *subject* is identical to R2's, only the label stops colliding. **Fallback, if Nick prefers continuity with the reviewed wording:** keep *Care–Capability* and carry `[INV-NP]` + `S16` regardless — the invariant is the load-bearing half and it must survive either choice.

### §0.3 BC-1 — the loss claim: verified where it survives, withdrawn where it did not

Knox is right that R2's story ran ahead of its evidence in three ways, and right on methodology. One claim survived proper testing.

| R2 claim | Disposition |
|---|---|
| *"no row, no route and no owner"* | **WITHDRAWN as stated.** The frame has a source carrier — C3.7 `§12`. Related mechanisms have named owners: **`REV-190`** (translational bridge) and **`REV-189`** — *"Care-substrate route-outs — confirm homes in CARE contracts, NOT a research lane (`GRD-026`)"*, carrying `line_of_therapy_state`, `molecular_readiness_state`/`tissue_availability` and the option-preservation concern. Route `9a` carries the C3.7 terminus through the v4-authoring input set. |
| *"the FWREG row was never written"* | **RETAINED, now properly verified.** R2 asserted this from a current-state grep, which cannot establish history — a valid objection. Re-run against **history on all refs**: `git log --all -S<term> -- future_work_registry.md` returns **0** for `tumor`, `translational`, `biospecimen`, `organoid`, `PDX` and `model_to_trial`. **No such row has appeared in any commit touching the registry, on any ref.** The claim is narrowed to what that shows: the promised registry entry was never written; whether one is *needed* is undecided (`§20.5`). |
| *"this caused three later arcs to miss it"* | **WITHDRAWN.** Unsupported causal story, and self-serving: it used an infrastructure gap to explain away a reading failure. **Plainly: the frame was in a source this author had already consulted, and this author missed the passage.** A routing weakness and an incomplete read coexist; neither is established as the cause of anyone else's omission. |
| *"C3.7 `§100`"* | **CORRECTED.** Line 100 is a location; the section is **`§12`** (*"Scope & home boundary (Nick's point: NOT all of this is 'clinical research')"*, opens line 94). The third supply side is **`§11`** (line 87). |

**`H0` is rewritten** to test whether the broader account is adequately represented, reconciled and routed for this task — not to prove a history.

### §0.4 BC-2 — the maturity ladder is dissolved

Accepted without reservation. R2's `L1`–`L5` ladder with a *"Max level"* column made independent evidence questions look like one ordered score, and it graded different objects in different rows — a ratified principle with an unbuilt record was labelled `L1` while unaccepted code could outrank it. Replaced at `§5.0` by **four independent columns**: what is specified · what was accepted and at what scope · what implementation was actually inspected · what composition evidence exists and of what kind (desk trace / executable fixture / observed operation).

*"Nothing is L5"* and the commit's *"nothing in the estate"* are **withdrawn** as beyond declared coverage. Replacement: **the material inspected in this reconnaissance does not establish tested end-to-end adequacy for the ECB frontier scenario set.** The same discipline now applies to every absence label — `not located` · `named but uncontracted` · `implementation not inspected` · `composition not demonstrated` — never *"does not exist"* from a search.

Knox's further point accepted: **`H4`'s rejection of a legal conclusion from a repository gap does not exclude legal and regulatory constraints from the inquiry.** They are in scope as operating constraints; this arc is not legal clearance.

### §0.5 BC-3 — governance is a constraint plane, not a lifecycle stage

Accepted, and the fix goes further than the requested wording. R2's `§8` put the capability-formation block **above** the purpose-bound grant. Read as a sequence — which is how a later agent inherits a diagram — it licenses using patient context or material to create an experimental candidate and then treating a later clinical consent as authorization for the earlier use. The prose said otherwise; the diagram wins.

Moving the grant box earlier would not fix it, because **the constraints are orthogonal to the lifecycle, not a stage in it.** That is already the estate's ratified shape: thesis `§8` is *two governed loops plus authority gates **between*** them, not a single pipeline with a permission step. `§8` is therefore rebuilt as a **composition map with a governance constraint plane every act crosses**, plus the explicit rule that **later consent or clinical adoption never retroactively authorizes earlier disclosure, research, model training or experimentation**, and that revalidation, refusal, revision and termination may occur throughout.

### §0.6 BC-4 — receipts and test precision

All accepted: R2's dangling `D0ECB-REV-004` pointer resolved to `D0ECB-REV-002`, the row that actually carries the finding (no new row invented) · `§100`→`§12` · `H9`'s manufacturing-change case moved off `S5` (an adaptive implant is not manufactured to order) onto `S1`/`S13` · `S13` required to develop a patient-specific candidate rather than collapse into cohort-to-existing-trial matching · `S9`/`S11`/`S14` given named expected tests as variations so mandatory mechanisms cannot vanish outside the minimum set · **negative controls rewritten as predicates**, because the illegal *substitution* is the failure and not the state label · FAI clauses harmonised to one rule · route lifecycle text made state-accurate.

---

## §1 — Arc state *(this section owns it)*

```
Arc key:                 ECB
Object of focus:         OMNI's Care Participation Operating Model
Arc state:               GATE_0_R3_AUTHORED — NOT STARTED, NOT ACCEPTED
Gate 0 verdict:          none issued (Nick + Knox review pending)
Architecture accepted:   none
Domain minted:           none
FAI relationship:        separate bounded object; FAI G1 untouched
Next act:                Nick + Knox accept / amend / reject
Authorized on rejection: revise this carrier, or close the arc
```

---

## §2 — Repository, base and review-object posture

| Field | Value |
|---|---|
| Repository | `ncrawf/main-app` |
| Branch | `cursor/ecb-g0-reconnaissance-6a09` |
| Base | `main` @ `2629099e0a611510e52a34c6479f6353bf11a0d5` |
| R1 head / blob | `60619c4f…` / `64d4bc3e…` |
| R2 head / blob | `3b9db0c229bf4479539baae98655e84dfd4dfccc` / `7e8256035ee22cff2b6da1ec738ad779dcab9653` |
| Branch inheritance | **NONE** — based on `main`, not on the FAI branch |

### §2.1 FAI source pins — read-only

| Artifact | Pin |
|---|---|
| FAI branch head at recon | `65f310e0b40901cb4f34bb607d92b37ecf9be043` |
| pause checkpoint | blob `46c0e0037976637720f8720e5770f6acdb34c84a` |
| execution plan R8 | blob `ba4c967a1ca883775d481f4dc07643c2c930668f` |
| G1 operating-model carrier | blob `9835715ed8795a14df395d9f85c8b44fa3af88ea` |

**Receipt:** the carrier blob is `9835715e` — exactly what the pause checkpoint `§2` pins as identical across all three of its recorded heads. **Frozen Authority content has not drifted.** Verify by blob, never by head equality.

---

## §3 — The subject

### §3.1 Object of focus

> **OMNI's Care Participation Operating Model** — the operating model by which independent principals **participate** in a person's care over time: how they **discover** relevant possibilities, **work from authorized context**, **develop and evaluate** candidates, **establish bounded commitments**, **execute**, **observe consequences**, **revise**, **transfer** and **end participation** — without losing patient rights, independent authority, or continuity of the care relationship.

Principals include biological, computational and physical capability providers, research programmes, payers, devices, non-human agents, the patient, **and OMNI's own operated Core Capabilities** (`[INV-NP]`).

**An architectural subject** — not a domain, universal lifecycle, control plane, database object, product brand or central executive. Naming it does not decide whether its realisation needs a new record, several seam contracts, existing records with stronger relationships, or a combination.

### §3.2 The two directions of inquiry

**From care outward** — what should a patient, care team or operator be able to **discover, request, evaluate, commission, monitor, refuse, transfer or revisit**? A care team needs more than *"the vendor is integrated"*: current capability, limitations, eligibility, evidence, timing, responsibility, alternatives, actual acceptance, and recourse.

**From the participant inward** — what does a laboratory, manufacturer, model provider, device operator or research programme need to **know, prove, accept, return and continue to honour**? A producer needs more than *"the chart"*: a defined phenotype, a qualified specimen, confidence in a specific measurement, documented exclusions, permission for one use, a receiving organisation able to administer the result, and a party who will do follow-up.

**The hard middle is a governed relationship in which both sides' claims, limitations, commitments and changes stay legible — including when one side is developing a capability rather than fulfilling an existing one.**

### §3.3 `[INV-NP]` — the non-privilege invariant

> **OMNI-operated Core Capabilities and Specialty Lines are participants on identical terms to any third-party principal.** No privileged tier · no grant an equivalently-consented peer could not obtain · no discovery, routing or continuity preference · no deployment- or governance-plane bypass · no self-dealing. Every OMNI-operated grant carries an audited `operator_neutrality_basis`.

Inherited verbatim in substance from Federation inv 29 / `T0-14` / `T0-16(a)` and `D0THES-GRD-032`. **Not a new rule — an existing ratified one this arc must not break by vocabulary.** Consequence: this arc may not build a model in which *internal care* and *external capability* are different kinds. They are the same kind under different ownership, and the differences that do exist — shared infrastructure, a common audit plane, a common operator of record — are **specific facts to be named, not a category.** Made falsifiable by **`S16`**.

### §3.4 Non-goals

Not a new domain (`GRD-026`) · not a god-object or new control plane (`GRD-035`) · not a reopening of FAI (`§3.5`) · not a claim that OMNI owns therapy design, manufacturing or actuation — **nor the artificial retreat that OMNI may never operate a capability or a surface**, since per F5 the mode is *"a per-system, per-context governed decision — not a thesis assumption"* · not a patient marketplace, lead-broker or paid-placement ranker (`§14`) · not a literature corpus (`GRD-041`; that is `FWREG-006`) · not a product roadmap, GTM plan or wedge selection (`§19.1`) · not an accepted ontology for *"intervention."*

### §3.5 FAI contact — one rule, five postures

| Posture | Permitted | Handling |
|---|---|---|
| **Consult** a frozen candidate as context | yes | cite with hold status |
| **Test a hypothesis against** it | yes | record; binds nothing |
| **Declared reliance** on unaccepted semantics | yes, if declared | **the conclusion inherits the hold**; reliance is never permission to promote |
| **Propose a change** | yes, to Nick | a proposal is not an edit; no FAI write |
| **Blocking contradiction** | — | `FAI_INTERRUPT_CANDIDATE`; stops **that conclusion**, not unrelated work |

**Mere relevance is never an interrupt.** No Selection Accountability amendment or promotion, no `Q-DL18-4` adjudication, no Output-4 consolidation, no FAI write, no PR #17/#19 merge. **`Q-ECB-6`:** `Q-DL18-4` (delegated-authority grain) is described, never chosen.

### §3.6 Fusion and survival are not competitors

R2 withdrew *"incumbents do not have this problem."* Palantir's ontology architecture covers data, logic, action, security, write-back and feedback; treating it as passive fusion was a weak opponent. The real distinction: **what does the operating model preserve when participants share no controlling institution, no incentive, no source of authority, and no willingness to remain?** Assembling a coherent situation from distributed facts is the fusion job and OMNI must do it. The differentiator is what happens when a manufacturer refuses outcome-return terms, a site rejects our custody model, a vendor employs the prescribers, a system returns a valid result but will not expose intermediates, or a patient leaves. **Legitimate patient exit is not a failure**; the failures are abandoned follow-up, suppressed alternatives, unauthorized reuse and misleading continuity claims.

---

## §4 — Source and authority posture

**Read fully by this author:** this carrier; both Knox reviews; the FAI pause checkpoint; `HANDOFF_2026-08-09` ×2; `06_guardrail_antipattern_digest.md`; FAI R8 `§3.9.1`–`§3.9.3`; governance/taxonomy `§3`; read-graph Route Entry Contract + Major-Arc Intake routing.

**Read at specific passages, verbatim-verified by this author:** `v4_C3_7` plan `§11`, `§12` (super-frame, line 100); `v4_C3_5F5` P35 rename; `contracts/federation_contract.md` inv 29 + line 32 (`T0-14`); `06` `GRD-032`; **Care `§9a`** participation topology + per-contribution semantics; Care `§5a` consent families; Care `§5b.1` `ai_participation_policy`; `08_open_review_queue.md` `REV-188`/`189`/`190`; `manifest_action_enum`; read-graph routes `9a`/`10`; C4.6 Rx L2 return-path/recall/communication-capacity; FWREG row inventory **and its full history**; `AGENTS.md` standalone-lane clause.

**Recovered via three delegated EXISTS-AS scans** — external-capability/command-authority; context-package/disclosure; lineage/obligation/outcome. **Delegated scans are evidence, not an authored read**; marked `[D]` in `§5`.

**Repository-verified:** branch divergence; carrier blob identity; PR states; `manifest_action_enum`; FWREG history across six terms on all refs; absence from `*.ts`/`*.sql` of `context_packet`, `trust_transfer_record`, `care_obligation`, `external_capability`, `outcome_intelligence`; shipped `actor_kind`; `CONSENT_TYPE_VALUES`.

**NOT inspected — declared:** off-repo controlling plan; FAI G1 carrier byte-for-byte; the six AI-corpus registries — **Gate-1 obligation `§19.2.7`**; thesis `§C`; `v4_C3_7G` beyond the translational cluster; the Demand/counterparty disposition and residual-moat frame — **Gate-1 obligation**; full C3.5–C3.7 scenario rows; the implementation estate; repository history beyond the FWREG query above; current external clinical/regulatory evidence.

**Forbidden inferences:** inventory presence ≠ full read · chronology ≠ authority · **a search miss is not proof of absence** · a current-state grep cannot establish history · a delegated scan's absence claim is weaker than an authored one · **an inspection limit is not an estate verdict.**

---

## §5 — Recovered inheritance

### §5.0 Evidence dimensions — four independent questions, not one score

Per BC-2. For every relied-upon claim, state each separately; **none implies another**, and they are not ordered:

- **Specified** — what semantics exist: fields, states, invariants?
- **Accepted** — by whom, and **at what scope**? A narrow-scope acceptance is not general.
- **Implementation inspected** — what was actually verified in code or migrations, or is implementation **unverified**?
- **Composition evidence** — what kind, for which scenario: **desk trace · executable fixture · observed operation** — or none?

**A ratified principle may have no implementation. Code may exist without architectural acceptance. A desk trace can test a proposed composition without proving a deployed system. Strong evidence in one scope may be irrelevant in another.**

### §5.1 Matrix

`[D]` = delegated scan, not an authored read. *Accepted* records scope.

| # | Concept | Where | Specified | Accepted (scope) | Impl. inspected | Composition |
|---|---|---|---|---|---|---|
| **A** | **SUPER-FRAME** — *"tumor-biology → care → translational evidence → research → outcomes"* longitudinal governed loop; *"OMNI as the environment connecting patient biology, care, models, pharma, outcomes — without lying to the patient or selling them to a sponsor"* | C3.7 `§12` (line 100) | narrative frame only | **not accepted**; recorded as *"a v4/contract finding + a Future-Work-Registry seam; NOT built in C3.7"* — **the registry entry was never written (history-verified)** | n/a | none |
| **A2** | **Care-substrate route-outs** — *"confirm homes in CARE contracts, NOT a research lane (`GRD-026`)"*: `line_of_therapy_state`, `molecular_readiness_state`/`tissue_availability`, **option preservation** | **`REV-189`**, open | named + partially specified | open review, owner Nick + architecture_steward | not inspected | none |
| **B** | **Third supply side** — patient/tumor biology ↔ trial slots ↔ translational model/evidence supply. Eight pressure-candidates, *reuse-first, do NOT pre-mint*: `biospecimen_lineage` · `tumor_model_link` · `translational_model_evidence` · `model_match_candidate` · `model_to_trial_signal` · `specimen_use_consent_scope` · `pharma_model_access_contract` · `patient_model_feedback_loop` | C3.7 `§11`; **`REV-190`** *"leave-door-open, NOT build"* | candidate names + roles | open review, explicitly **not** build-accepted | not inspected | none |
| **C** | **Capability-formation chain + guardrail** — *"PDX/organoid/model response is TRANSLATIONAL EVIDENCE, not direct clinical truth ... NEVER 'mouse responded → patient gets drug' (precision-oncology theater)"*; chain `imaging/path/genomics → specimen lineage → model match or creation → translational_model_evidence → model_to_trial_signal → trial_match_candidate → human review → patient-facing option` | C3.7 `§11` | chain + prohibition | restated in `REV-190`; not contract-accepted | n/a | none |
| **D** | **Care `§9a` — multi-actor participation** — *"three non-collapsing gates; contributions ≠ votes"*; `[INV]` participation topology **unbounded, dynamic, never fully known** incl. **unknown-at-start**, `join/leave/mute/revoke/re-enter`; per-contribution semantics incl. **agent-operator/sponsor/incentive · model/provider/version · harness/runtime-profile version · correlation/independence class · human disposition · influence on plan/action · later evaluation · revocation**; `resolution_participation_binding` (narrow C5 candidate) + `resolution_participant_graph` (**projection, NOT truth**) | Care `§9a` | **richly specified** | `analysis_nonbinding`, **REVIEW-DRAFT, not closed**; capture frozen against edit, readable | not inspected | none |
| **E** | `ai_participation_policy {prohibited · permitted · optional · required_by_versioned_operator/protocol_policy}` × `commit_authority_mode` × `automation_level {observe · draft · recommend · prepare_action · execute_reversible · execute_bounded_control}` × `human_checkpoint_requirement` × `fallback_mode {human_only · deterministic_only · safe_halt · degraded_continue · alternate_capability}`; `[INV]` **Care must remain valid if the model changes, the runtime is unavailable, the patient opts out, or the system is degraded** | Care `§5b.1` | specified enums | same as D | not inspected | none |
| **F** | **`[INV-NP]` operator-neutrality** — no privileged OMNI tier; `Core Capabilities` are tenants; audited `operator_neutrality_basis` | Federation inv 29 / `T0-14`/`T0-16(a)`; `GRD-032` | specified | **`GRD-032` ratified**; Federation contract `draft_for_ratification` | not inspected | none |
| 1 | **P35** — External Capability / Signal-Command Boundary; eight modes `read-only · write-back · request-only · bounded-command · human-confirmed-command · prohibited-command · emergency-break-glass · vendor-operated` | `v4_C3_5F5` §P35-RENAME (*"Nick/Knox 2026-06-14"*, worked example a surgical robot); `G4` §1.5 | mode enum + family | **frame** accepted C3.8 `§1A` 2026-07-04; **owner OPEN `REV-188`** | none found | none |
| 2 | The boundary **with F5's qualifier** — F4: *"OMNI owns the LINK + TELEMETRY + RECORD + the COMMAND/AUTHORITY LOOP — not the surface, and not the physical actuation."* **F5 supersedes that framing:** *"OMNI does **not assume** it owns the mechanics or the native UI ... a per-system, per-context governed decision — **not a thesis assumption**"* | F4; **F5** | qualified statement | F5 supersedes F4's framing; `analysis_nonbinding` | n/a | none |
| 3 | **GCE** (`D0THES-DEC-036`) — the governed exchange spine | enterprise posture | spine stages | **RATIFIED `governance_binding`** | partial patterns | none |
| 4 | Returns classified `evidence \| observation \| proposed-meaning \| externally_committed_truth`; *"External systems never own OMNI-owned canonical truth"* | same | classification | **RATIFIED** | no typed enum | none |
| 5 | Robots/devices are not a domain — `P34` **EXTEND** via RBAC + Identity + P35 | `G4_1` §B `[D]` | disposition | `analysis_nonbinding` | none | none |
| 6 | `device`/`robot`/`external_system` actor subtypes; **only humans hold care-ownership**; `system_actor_atom_grant` | Identity §4; RBAC §4 `[D]` | specified | `draft_for_ratification` | **shipped `actor_kind` differs** — `patient/staff_user/provider_user/system/cron/webhook/partner_adapter/ai_engine` | none |
| 7 | Non-human delegated authority **decomposed** across Identity + RBAC (`delegated_authority_envelope`) + Federation + D7 | posture `[D]` | principle | **RATIFIED** | envelope **uncontracted** | none |
| 8 | `chain_of_identity` — cell-therapy vein-to-vein binding through an external manufacturer | `C3_6F` §1.4 `[D]` | narrow primitive | `analysis_nonbinding` | none | none |
| 9 | IP `custody_chain` — `shipped→received→stored→dispensed→administered→returned→destroyed` + excursion/lot/sponsor reconciliation | `C3_6G` §1.6 `[D]` | states | `analysis_nonbinding` | none | none |
| 10 | `research_permission_stack` — contact → upload-records → HIPAA release → pre-screen/IRB waiver → share-identifiable-with-site → protocol consent → screening consent | C3.7 | **staged ladder** | `analysis_nonbinding` | none | none |
| 11 | `candidate_visibility_scope` — pre-consent external parties see *aggregate accrual projection / de-identified pipeline / site-level feasibility only* | C3.7 | rule | `analysis_nonbinding` | none | none |
| 12 | `standing_match` / `research_navigation_obligation` | C3.7 | obligation | `analysis_nonbinding` | none | none |
| 13 | Consent families under an anti-coercion `[INV]`, with purpose-of-use · permitted recipient · expiry · revocation · derived-grant invalidation | Care `§5a` | specified | REVIEW-DRAFT | 13 `CONSENT_TYPE_VALUES` + `patient_consents` **verified** | none |
| 14 | `gate_timing` — `booking_visibility / booking_hard_gate / pre_arrival_task / pre_performance_gate / closeout_documentation_gate`; consent defaults `pre_performance_gate` | Settings/scheduling `[D]` | enum | binding domain design | partial | none |
| 15 | **Four non-collapsible admissibility projections**; `indicated/contraindicated/uncertain/awaiting-evidence`; `authority_basis` · `authorization_evidence_form` · `approval_requirement` (`dual_control`, `committee/ethics_review`) · versioned `checkpoint_graph` | Care `§5b`/`§5b.1` `[D]` | specified | REVIEW-DRAFT | none | **conformance fixture** (generic) |
| 16 | Trust is relocated; *"context-packet exchange carries a `trust_transfer_record`"* | `GRD-030` | principle + named record | **RATIFIED** | **record unbuilt** (`C38-G3-034` = bent) | none |
| 17 | ACK is not accepted custody; ten-state external-custody ladder; `O10` | `D0W3B-GRD-002`; C4.3 `[D]` | states | guardrail **active**; design PASS | absent/partial | conformance script |
| 18 | Counterparty acceptance is an explicit event — `ingest_counterparty_acceptance_assertion`, *"MUST NOT itself set accepted state"* | C4.6 L2 | specified | **accepted, pharmacy scope** | none | none |
| 19 | **Post-delivery obligations survive episode closure** — *"Delivery may close one fulfillment episode while refill, monitoring, adverse-event, recall and continuation obligations remain open"*; governed return path incl. recall; purpose-separated counterparty capacities so promotional outreach *"may never masquerade as patient-specific care evidence"* | C4.6 Rx L2 | specified | **accepted, pharmacy scope** | not inspected | none |
| 20 | Regulatory status is dated — *"`as_of` truth, never timeless catalog metadata"* | `G2A` `[D]` | principle | `not_promoted` | none | none |
| 21 | `care_obligation` — `care_episode_id` anchor + `task_kind` + `obligation_strength` + temporal + escalation + `parent/dependency/supersedes`; conversion rule; explicit expiry | OFC `§5` `[D]` | specified | `draft_for_ratification`; `REV-163` | **no table** | none |
| 22 | `care_commitment` — accountable promise, distinct from something owed | OFC `§10`; `REV-141` | named only | **OPEN** | none | none |
| 23 | Outcome reads the frozen context, never rewrites it | `REV-184` `[D]` | law | **signed off 2026-06-14, CLOSED** | none | none |
| 24 | `outcome_intelligence` / RWE → own sub-plane under `REV-174` | `C3_6G` `[D]` | named | `REV-174` **OPEN** | none | none |
| 25 | *"No truth by generation"*; `sim/truth firewall` | F5; C4.4 `[D]` | prohibition | `analysis_nonbinding` | none | none |
| 26 | Verification ≠ verification ≠ adoption — artifact-integrity (D7) · data-fidelity (Observation) · **clinical adoption** (CM); *"none implies the next"* | Observation `§4` `[D]` | specified | `draft_for_ratification` | partial | none |
| 27 | Incentive must not bend clinical presentation — *"structural, auditable, economically-blind, posture-invariant"*; C4.6 `C6` margin-only counterfactual | Care `§4`; C4.6 `[D]` | specified | mixed | none | **proof spec only** |
| 28 | Population learning needs a stated basis — *"purpose + legal basis + consent + partition + source-authority ... NOT a blanket 'de-identified'"*; `L5 alpha laundering PROHIBITED` | Care `§7` `[D]` | specified | `analysis_nonbinding` | none | none |
| 29 | Do not become a thin broker (`GRD-032`); measured by preservation not integration count (`GRD-034`) | posture | guardrails | **RATIFIED** | n/a | none |

### §5.2 Per-concern reading

| Concern | Position |
|---|---|
| Participation as a governed relationship | **richly specified at Care `§9a`/`§5b.1`** (rows D, E); never accepted beyond REVIEW-DRAFT; no implementation inspected; **no composition evidence** |
| The care↔biology↔evidence↔research↔outcomes frame | narrative only (row A); **never accepted; its promised registry entry never written** |
| Capability formation from patient context | candidates + a prohibition (rows B, C); **not accepted at any scope** |
| Operator non-privilege | ratified as a guardrail, `draft_for_ratification` in contract (row F); **no composition evidence** |
| Boundary exchange / context package | spine ratified (row 3); **content absent** per FAI `G-18` |
| Lineage + exposure | fragments across rows 8, 9, 16, 20; **no end-to-end composition** |
| Private discovery | research-scoped rules (rows 10–12); no general mechanism located |
| Obligation survival | rows 21–22; `care_commitment` OPEN; **no table** |
| Containment / recall | **accepted at pharmacy scope** (rows 18, 19); generalisation and exposed-cohort reach not located |

**The inspected material does not establish tested end-to-end adequacy for the ECB frontier scenario set — no row carries observed-operation composition evidence, and only two carry any fixture at all.** That is sufficient reason to investigate. It is not a verdict on the estate.

---

## §6 — Inheritance map

| Concern | Owner | State |
|---|---|---|
| Multi-actor participation semantics | Care capture `§9a` | REVIEW-DRAFT, frozen against edit, readable |
| Care-substrate route-outs incl. option preservation | **`REV-189`** | OPEN |
| Translational model / biospecimen bridge | **`REV-190`** | OPEN, `leave-door-open` |
| The super-frame loop | C3.7 `§12` is its source carrier | **no accepted disposition; no registry entry; no task-entry route** |
| Per-system posture + command mode | **`REV-188`** | **ORPHAN** — frame accepted, owner open |
| Outcome / RWE | `REV-174` | **ORPHAN** |
| `care_commitment` | `REV-141` | **OPEN** |
| Operator non-privilege | Federation inv 29 / `T0-14`; `GRD-032` | ratified guardrail; contract draft |
| Exposure / lineage record | — | not located; **need untested** (`§15`) |
| Identity · RBAC · Federation · D7 · GCE · CNS · Settings · D3 · D5 · OFC · D6 · Observation · CM | their contracts | `draft_for_ratification`, except GCE posture (ratified) |

---

## §7 — Actor / principal map

`patient` · `surrogate / DPOA / guardian` · `referring or prescribing clinician` · `proceduralist` · `supervising clinician` · `longitudinal care team` · `treatment facility / site` · `operator of record` · **`OMNI-operated Core Capability`** (`[INV-NP]`) · `intervention producer` · **`capability developer`** · `execution device or robot` + `vendor operator` · `laboratory / diagnostic` · `biospecimen / model custodian` · `logistics / cold-chain custodian` · `payer / financer` · `regulator` · `IRB / ethics body` · `sponsor` · `non-human delegated agent` · `federation peer` · **`unknown-at-start`** (Care `§9a` `[INV]`).

Rights derive from `authority_basis`, never from possessing data, employing a clinician, owning an interface, or having generated a recommendation. Only humans hold care-ownership. **Delegation is never inferred from call topology** (`D0OL-GRD-008`).

---

## §8 — Composition map — NOT an authorization order

> **This diagram is a composition map of interacting lifecycles. It is not an execution sequence, an authorization order, or a universal lifecycle.** Applicable identity, authority, purpose/use basis, permission, participant admission posture and context-validity requirements constrain **every governed act from the first query or material use onward**. **Later treatment consent or clinical adoption never retroactively authorizes earlier disclosure, research, model training or experimentation.** Revalidation, refusal, revision and termination may occur at any point. Not every aggregate computation requires an identical consent artifact — the **applicable basis must be established for the particular act**, never borrowed from a permission that appears later. This mirrors thesis `§8`: two governed loops with **authority gates between**, not one pipeline with a permission step.

```
╔═══════════════════════════════════════════════════════════════════════════╗
║  GOVERNANCE CONSTRAINT PLANE — crossed by EVERY act below, not a stage    ║
║  identity · authority_basis · purpose/use basis · applicable permission   ║
║  participant admission posture (P35) · context validity for THIS act     ║
║  [INV-NP] OMNI-operated participants on identical terms                  ║
║  revalidate · refuse · revise · terminate — available throughout          ║
╚═══════════════════════════════════════════════════════════════════════════╝
        every ↓ below crosses the plane above

  need / risk / opportunity signal            Observation + CM
  patient and/or provider intent              Care §5a
  ── capability formation ──────────────────────────────────────────────
    discovery that relevant people exist      mechanism not located
    cohort feasibility                        mechanism not located
    specimen / signal qualification           C3.7 §11, oncology scope
    model match OR model creation             REV-190 open
    experimental evidence generated           row C prohibition applies
    candidate designed for this person        no object located
  ── ↑ stage-impersonation control required at EVERY transition ↑ ──────
  purpose-bound context grant                 GCE ratified; content absent
  participant acceptance                      P35 orphan; C4.6 rung 5
  clinical / patient / institutional review   Care §5b
  care commitment / order / enrolment         care_commitment OPEN
  manufacture / prepare / release decision    custody_chain L2; release ≠ adoption
  administration / procedure / activation     command boundary orphan
  exposure + execution receipt                not located; need untested
  outcome / adverse event / non-response      REV-174 orphan
  monitoring / recall / revision / re-dose    accepted pharmacy scope only
  transfer / substitution / closure           care_obligation, no table
```

**The transition that must never collapse (row C, verbatim):** *"NEVER 'mouse responded → patient gets drug' (precision-oncology theater)."* Generalised: **scientific evidence ≠ manufacturing release ≠ clinical adoption ≠ actual use.** A model's prediction is not an observed response; a product shipped is not a product administered; a version approved for deployment is not proof of which version performed a given act.

---

## §9 — Hypotheses and falsifiers

`resolved` / `open` / `insufficient_evidence` are all permitted outcomes (`§18.3`).

| ID | Hypothesis | Counter | Falsifier |
|---|---|---|---|
| **`H0`** | The broader care↔biology↔evidence↔research↔outcomes account is **not adequately represented, reconciled or routed** for a participation assignment — it exists as narrative in C3.7 `§12` with mechanisms split across `REV-189`/`REV-190` and no accepted whole-frame disposition | `REV-189` + `REV-190` + GCE + P35 + Care `§9a` already compose it; the gap is routing hygiene | Attempt the composition from those five. If it holds, `H0` narrows to a routing/disposition finding. **No claim about history or about why prior arcs omitted it.** |
| `H1` | No carrier composes participation end to end; seams break at the joins | the pieces compose once routed | Trace the minimum set with attributed state, authority, evidence, time, commitments, effects, response duties and residual uncertainty at every consequential transition |
| `H2` | GCE's boundary-contract **content** is absent, so each arc re-derives a profile shaped like it | spine + `GRD-034` suffice | find any accepted field-level boundary-exchange contract |
| `H3` | Exposure cannot be reliably reached from a recall | derivable by source-preserving composition over OFC + D5 + D7 + Observation, **no new object needed** | attempt the derivation for `S8`. **Both directions count** — a complete authority-preserving derivation kills `H3`; a gap alone does not justify a universal record |
| `H4` | No general privacy-preserving discovery mechanism is located in the estate | C3.7's stack generalises | trace `S6` on C3.7 primitives only. **A repository gap is an architectural finding, not a legal conclusion — and legal/regulatory constraints remain in scope as operating constraints** |
| `H5` | `care_obligation`'s episode anchor survives clinician departure but not operator exit, producer insolvency or consent expiry — **an episode identifier is not a successor undertaking** | the anchor solves all four | trace `S9`/`S10`/`S12`; name who retains or accepts the duty, how refusal is represented, and what happens when no successor exists. Care `§9a`'s `join/leave/revoke/re-enter` is the nearest existing shape |
| `H6` | The eight P35 modes are an adequate **vocabulary** but not an adequate **model** — supervision, delivery mode, emergency authority, execution delegation and autonomy degree may be separate dimensions collapsed into one enum. **Care `§5b.1` already factors four of these** (`ai_participation_policy` × `commit_authority_mode` × `automation_level` × `fallback_mode`) | eight modes plus context binding suffice | express `S4`'s supervised-autonomous posture in one mode without ambiguity; reconcile against Care `§5b.1`'s factoring |
| `H7` | Producer selection is not covered by existing neutrality law | `GRD-032/034` + Federation inv 29 + Care `§4` + C4.6 `C6` + Care `§9a` `agent-operator/sponsor/incentive` cover it | construct a producer-selection case none of them constrains |
| `H8` | The invariant already binds present-day care | it binds only novel modalities | **`S0`** — informs **present-wedge leverage only**; cannot decide frontier adequacy (`§18.2`) |
| `H9` | **Action-relative context validity is unmodelled** — prior authorization plus good provenance does not establish that the world is still suitable for the next physical or manufacturing act | Care `§4` action-critical freshness covers it | trace `S4` (scene changed since authorization) and **`S1`/`S13`** (patient state changed during design or manufacture — *not* `S5`). Name which facts must be current, how currency is established, what uncertainty is tolerated, who may pause or reject |
| `H10` | Control timescales are conflated — device-local safety, case-level coordination and multi-year surveillance treated as one loop | already separated | trace `S4`/`S5`. Detect both failures: OMNI as a remote dependency for immediate device safety, and local completion falsely closing care obligations |
| `H11` | Option preservation is recognised (`REV-189`, row A2) but not actionable as a capability | adequately routed to general care | trace `S14`. Can OMNI help preserve future options while honestly representing uncertainty, urgency, preference and the cost of waiting? |
| **`H12`** | **`[INV-NP]` is not composition-tested** — no evidence the model treats an OMNI-operated Core Capability identically to a third party under equivalent consent | `T0-14` + inv 29 + `GRD-032` already bind it | **`S16`.** Trace with the producer as a third party, then as an OMNI Core Capability. **If the traces diverge in kind rather than in named facts, the privilege is real** |
| **`H13`** | **Participation postures are assigned, never earned** — no mechanism by which a participant gains a more permissive posture on accumulated evidence, or is demoted on signal | posture assignment plus revocation suffices | `§17.F1`; trace `S4`/`S17` |
| **`H14`** | **Reliance on an opaque-but-attested claim is unmodelled** — no instrument for depending on a frontier producer's assertion whose internals it will not disclose | `externally_committed_truth` + `GRD-030` cover it | `§17.F3`; trace `S17` |

---

## §10 — Stressor axes

`production_locus` · `patient_specificity` · **`capability_existence`** (exists to order → must be created) · `execution_agency` · `adaptivity` · `control_timescale_spread` · `obligation_horizon` · `principal_count` · `regulatory_settledness` · `producer_permanence` · `institutional_willingness` · **`disclosure_openness`** (intermediates visible → opaque) · **`initiating_principal`** (operator → clinician → patient) · **`participant_ownership`** (third party → OMNI-operated).

Modalities are chosen for the axes they stress. **They are never the subject.**

---

## §11–§15 — Frozen question set

### §11 Context and participation
`Q-ECB-1` boundary-object content vs ratified spine · `Q-ECB-1a` which of purpose · intended act · recipient · minimum-necessary envelope · per-fact provenance · adopted-vs-unadopted · freshness · uncertainty · permitted use · prohibited secondary use · retention · expiry · revocation · onward disclosure · required response · capability/model version · receipt and destruction proof · `trust_transfer_record` are **contract terms** vs **derivable** · `Q-ECB-1b` relation between CNS `§9.1`'s internal layered packet and a boundary object · `Q-ECB-1c` `trust_transfer_record`: specify or route (**default route**) · `Q-ECB-1d` which disclosures should **not move data at all** · `Q-ECB-1e` context as **production input** — which facts must be current for *this* act (`H9`) · **`Q-ECB-1f`** how Care `§9a`'s per-contribution semantics relate to a boundary object — same object at two scopes, or two objects?

### §12 Participation posture and command
`Q-ECB-2` **`REV-188` ownership** — a valid answer may distribute P35 semantics across existing owners, create one owner, or **explicitly re-defer with a reason** · `Q-ECB-3` binding grain · `Q-ECB-4` are supervision, delivery mode, emergency authority, execution delegation and autonomy **separate dimensions**, and how does that reconcile with Care `§5b.1`'s existing four-way factoring (`H6`) · `Q-ECB-5` what positively constitutes an execution **receipt** · `Q-ECB-6` the `Q-DL18-4` dependency (described, never chosen) · `Q-ECB-7` Federation's missing non-human/agent modeling (**default: route**) · `Q-ECB-7a` control-timescale separation (`H10`) · **`Q-ECB-7b`** earned vs assigned posture (`H13`, `§17.F1`) · **`Q-ECB-7c`** who evaluates a posture change, and must they be independent of the participant (`§17.F2`)

### §13 Discovery, privacy, demand
`Q-ECB-8` are aggregate opportunity · cohort feasibility · anonymous eligibility · notification · re-contact · clinical qualification · identity release · enrolment · lead generation · executable case constitutionally distinct · `Q-ECB-9` does C3.7's stack **generalise** beyond research (cheaper hypothesis; test first) · `Q-ECB-10` is a discovery mechanism this arc's to specify · `Q-ECB-10a` **disclosure risk over time** — repeated queries, rare cohorts, overlapping populations, deduplication, changing permissions · `Q-ECB-11` the six collapsed demand products · `Q-ECB-11a` when a query shapes what a producer develops, what interest does the patient acquire (row B's `patient_model_feedback_loop`) · **`Q-ECB-11b`** **patient-initiated** capability formation (`§17.F5`)

### §14 Selection, commerce, neutrality
`Q-ECB-12` is producer selection already constrained by `GRD-032/034` + Federation inv 29 + Care `§4` + C4.6 `C6` + Care `§9a` `agent-operator/sponsor/incentive`, or is there a real hole (burden on finding the hole) · `Q-ECB-13` are trusted integration · admitted capability · preferred commercial partner · clinically recommended intervention · payer-mandated option · patient-selected option · **OMNI-owned product** separable and separately visible · `Q-ECB-14` **HARD** — Selection Accountability: consult and test against; declared reliance inherits the hold; never extend or promote · `Q-ECB-15` **institutional resistance, mandatory** (`§19.1`) · **`Q-ECB-15a`** `[INV-NP]` — what differs when the participant is an OMNI-operated Core Capability, and is any difference a **named fact** rather than a **category** (`H12`)

### §15 Exposure, outcome, containment, obligation
`Q-ECB-16` **symmetric burden** — does a unified exposure record need to exist, **or** is exposure derivable by source-preserving composition? **Test the composition first**; neither absence nor convenience justifies minting · `Q-ECB-17` which lineage axes are mandatory, per-modality, or never OMNI's — source material · design assumptions · experimental evidence · model version · software version · protocol version · lot/batch · released configuration · device version · operator · supervisor · facility · instructions · consent · administration · exposure. **Different parties are authoritative at different points and must not be collapsed** · `Q-ECB-18` does layered containment generalise past pharmacy scope across regulator withdrawal · manufacturer recall · institutional suspension · federation revocation · OMNI integrity suspension · clinician cessation · patient refusal · payer change · emergency containment — each needing scope · initiating principal · evidence · reason · effective time · affected products/lots/models/sites/populations · temporary-vs-permanent · appeal · notification duties · **exposed-person identification** · safe continuation · **`Q-ECB-18a`** mandatory-action-with-compliance-tracking (`§17.F4`) · `Q-ECB-19` staging observation → adjudicated concern → containment → accountability (`REV-184` + `D0OL-GRD-009`: a score informs, never authorizes) · `Q-ECB-20` which anchor makes an obligation survive (`H5`) · `Q-ECB-21` `REV-174` prerequisite or consumer (**default consumer**) · `Q-ECB-22` option preservation as a positive capability (`H11`)

---

## §16 — Scenario plan (planned, NOT executed)

Gate 0 decides only whether the set is sufficient, orthogonal and **discriminating**. **The minimum set is a starting set, not proof of coverage.**

| ID | Scenario | Axes | Tests |
|---|---|---|---|
| **S0** | Routine **approved** product with a lot, today — external manufacturer, real lot, exposure cohort, monitoring outliving the prescriber | baseline | `H8` (present leverage only) |
| S0b | 503A-compounded peptide — regulatory status as `as_of` truth *(kept separate so regulatory complexity does not contaminate the baseline)* | settledness ↓ | `H8`, `H7` |
| S1 | Patient-specific neoantigen vaccine, **patient state changes during design** | specificity ↑, existence ↑ | `H1`, `H2`, **`H9`** |
| **S2** | Autologous cell/gene therapy, vein-to-vein | specificity max, custody | `H1`, `H3`; `chain_of_identity` reuse |
| S3 | AI-designed biologic *(merge candidate with S1 — overlaps on lineage)* | production locus | `H2`, `H3` |
| **S4** | Supervised autonomous procedure, **scene changed since authorization** | agency ↑, timescale ↑ | `H6`, `H9`, `H10`, `H13` |
| **S5** | Adaptive closed-loop implant, **revised after commitment** | adaptivity ↑, horizon ↑ | `H9`, `H10` |
| **S6** | Privacy-preserving rare-cohort discovery, **repeated queries over overlapping populations** | discovery, principals | `H4`, `Q-ECB-10a` |
| S7 | Trial / expanded-access pathway | research stack | `H4`, `H7` |
| **S8** | Recall after exposure — therapy, model, device or software | exposure, containment | `H3`, `Q-ECB-18`, `Q-ECB-18a` |
| S9 | Cross-federation transfer mid-treatment — **run as a variation on `S2`; expected test: which anchor survives the boundary** | continuity | `H5` |
| **S10** | Producer insolvency mid-obligation | permanence min | `H5` |
| S11 | Multi-principal disagreement incl. **a party refusing OMNI's terms** — **run as a variation on `S4` and `S8`; expected test: what OMNI may represent when a participant refuses** | principals max, willingness ↓ | `H7`, `Q-ECB-15` |
| S12 | Multi-year re-dose after the relationship dissolved | horizon max | `H5`, `Q-ECB-20` |
| **S13** | **Capability formation** — a cohort's problem drives discovery → experimentation → **a patient-specific candidate that did not previously exist**, without appropriating the care relationship. **Must NOT collapse into cohort-to-existing-trial matching.** Carries a design-time context change | existence max | `H0`, `H1`, `H9`, `H11` |
| S14 | Option foreclosure — present care closes a later pathway — **run as a variation on `S1`; expected test: is preservation actionable or only auditable** | — | `H11` |
| **S16** | **The producer IS an OMNI-operated Core Capability.** Trace `S2` twice — third-party producer, then OMNI-operated — and compare | participant ownership | **`H12`**, `Q-ECB-15a` |
| **S17** | **Opaque frontier assertion** — a model provider returns *"this patient is a responder"* and will not disclose model, training data or intermediates; separately, a new capability seeks a more permissive posture | disclosure ↓ | **`H13`**, **`H14`** |
| S15 | **Patient-initiated** capability formation — the patient, not a clinician or operator, initiates discovery that people like them exist | initiating principal | `H0`, `H4`, `Q-ECB-11b` |

**Minimum set: `S0, S2, S4, S5, S6, S8, S10, S13, S16, S17`** — ten. `S16` and `S17` are added because `H12`, `H13` and `H14` are otherwise untestable. `S9`, `S11`, `S14`, `S15` and `S0b` run as **named variations with stated expected tests**, so no mandatory mechanism sits outside the minimum set unexamined.

### §16.1 Negative controls — predicates, not state labels

**The illegal substitution is the failure. The first state in each pair is not inherently wrong.** Each control pairs a valid case with an invalid one differing minimally:

| Valid | Invalid — the substitution |
|---|---|
| a technical ACK recorded as an ACK | an ACK recorded as accepted custody or a discharged duty |
| a simulated or model response labelled as such | a simulated or model response presented as an observed patient response |
| a refusal or a no-intervention decision recorded as itself | a refusal recorded as an intervention performed |
| an approved candidate recorded as approved | an approved candidate recorded as an actual exposure |
| a release decision recorded as the manufacturer's | a release decision treated as clinical adoption |
| an expired or changed authorization recognised as stale | a stale authorization relied on for a new act |
| an unaffected party excluded from a recall | an affected exposed party missed, or an unaffected party notified as exposed |
| evidence used within its permitted purpose | the same evidence used for an impermissible secondary purpose |
| an OMNI-operated participant treated on identical terms | an OMNI-operated participant given access, routing or continuity a peer could not obtain (`[INV-NP]`) |

**A written trace is design evidence — not proof of a deployed system, counterparty agreement, or clinical safety.** Where a claim is mechanically testable, define the fixture or mutation; where it depends on external agreement, label that dependency.

---

## §17 — Frontier mechanisms

The operator's instruction: *"think 2030, think 2035, think frontier ... palantir, anthropic, tesla."* Per thesis `§3.5` Lens-B discipline, each mechanism below carries its **non-transfer** — the ownership or authority assumption that must NOT come with it. These are **hypotheses to test at G1**, not accepted architecture.

**F1 — Earned posture, not assigned posture.** *(Tesla mechanism: shadow mode + staged rollout + per-build tracking.)* P35's eight modes are **assigned** per system and context. There is no mechanism by which a participant **earns** a more permissive posture on accumulated evidence, or is **demoted** on signal. The estate has the prohibitions — *"no truth by generation"*, `sim/truth firewall` — but no **promotion pathway**: a capability that runs alongside the current one, producing recorded-but-not-acted-on output until it earns advancement. **Non-transfer:** Tesla owns the fleet and may promote unilaterally; OMNI does not own the participant, so promotion must be a governed act with a named authority and demotion must be available to **multiple** principals (`Q-ECB-18`'s layered stopping powers). → `H13`, `Q-ECB-7b`, `S17`.

**F2 — Who evaluates, and do they have an interest?** *(Anthropic mechanism: capability evaluation gates deployment authority.)* If posture changes are evidence-driven, the evidence generator matters — and by default a producer supplies its own validation. **Already named, not invented:** `D0OL-GRD-013` holds that verification **depth** is not verification **independence** (*"100 machine checks can share one blind spot"*), and **Care `§9a` already carries `correlation/independence class` and `agent-operator/sponsor/incentive` as per-contribution semantics.** What is missing is a **mechanism** attaching an independence requirement to a posture increase. **Non-transfer:** Anthropic evaluates its own model and owns the deployment decision; OMNI evaluates a counterparty's capability and owns neither. → `Q-ECB-7c`.

**F3 — Reliance on a verifiable-but-opaque assertion.** *(Palantir contrast, sharpened.)* Palantir evaluates typed action preconditions against **one ontology it controls**. OMNI's preconditions span principals who share no ontology and will not expose intermediates. **The 2035 condition is not "will they integrate" — it is "what may we rely on from a participant who returns a valid answer and will never show its work."** `GRD-017` already forbids accepting a generated rationale as high-stakes explainability, so a narrative explanation is **not** available as the reliance instrument. Candidate shape to test: an **attested claim** carrying provenance, evaluator identity and independence class, stated error characteristics, scope of validity and expiry — **without internals**. **Non-transfer:** Palantir's write-back assumes a controlled ontology and a single accountable operator; neither holds here. → `H14`, `S17`. **This is the least-covered frontier axis in the estate and neither review raised it.**

**F4 — Mandatory action against a configuration, with per-instance compliance.** *(Aviation mechanism: the airworthiness directive — already in the comparator registry as Airplane-as-object, never drawn on for this.)* `Q-ECB-18` treats containment as a **posture**. Aviation has something sharper: an authority issues a **mandatory** action against a *configuration*, it **grounds the instance** until complied with, and compliance is tracked **per tail number** in a ledger that outlives the manufacturer. A recall is then not "suspend the product" but a mandatory action against an **exposed set**, with per-person compliance state. **Non-transfer:** aviation has one regulator with grounding authority; care has layered principals with different and non-interchangeable stopping powers — which is `Q-ECB-18` and must not be flattened. → `Q-ECB-18a`, `S8`.

**F5 — Patient-initiated capability formation.** Everything recovered is clinician- or operator-initiated. **The operator's own rare-mutation example is patient-initiated** — the patient wants future therapy companies to know people like them exist. C3.7's `standing_match` is the closest existing shape and is clinician-mediated. Does the model support a patient **commissioning or triggering** capability formation, and what does the patient acquire an interest in when their participation shapes what gets developed? **Non-transfer:** a consumer-marketplace framing would import exactly the lead-broker posture `GRD-032` forbids. → `Q-ECB-11b`, `S15`.

**Note on F2.** It was drafted as novel and demoted to *"already named, mechanism missing"* after Care `§9a` was recovered. Recorded because it is the method working: **inheritance verification precedes assertion** (`§19.2.1`).

---

## §18 — Verdicts

### §18.1 Vocabulary — FROZEN BEFORE RESULTS

```
EXISTING_ARCHITECTURE_SUFFICIENT_WITH_ROUTING
EXISTING_ARCHITECTURE_REQUIRES_NAMED_EXTENSIONS
NEW_CROSS_DOMAIN_CONTRACT_OR_CONTROL_SURFACE_REQUIRED
NEW_DOMAIN_REQUIRED
FAI_INTERRUPT_CANDIDATE
STRATEGIC_ONLY_NO_ARCHITECTURE_CHANGE
INSUFFICIENT_EVIDENCE
```

`NEW_DOMAIN_REQUIRED` must survive `GRD-026` and `GRD-035` with a named concern no existing owner can hold. **Symmetrically, `§15`/`Q-ECB-16` forbid requiring a new universal record before source-preserving alternatives are tested.** `FAI_INTERRUPT_CANDIDATE` requires a concrete contradiction. **Prior expectation, recorded so it can be wrong:** `REQUIRES_NAMED_EXTENSIONS` + `NEW_CROSS_DOMAIN_CONTRACT_OR_CONTROL_SURFACE_REQUIRED`.

### §18.2 Three conclusions — never substituted

| Conclusion | Question | May NOT decide |
|---|---|---|
| **Present-wedge leverage** | does inheritance help the business now? | whether the frontier obligation matters |
| **Frontier adequacy** | does the model survive a materially different operating regime? | whether anything is built |
| **Implementation readiness** | what exists in code, and what would it take? | architectural sufficiency |

**Present-day success cannot substitute for frontier proof. Present-day non-novelty cannot erase a future-facing obligation.** An architecture result does not imply counterparties agreed, a device is authorized for the envisioned use, or OMNI deployed anything.

### §18.3 Findings may stay open

Each finding carries `resolved` / `open` / `insufficient_evidence`, its four evidence dimensions (`§5.0`), and its FAI posture (`§3.5`). **G1 is not required to force every hypothesis to win or lose before G2's architecture work.**

---

## §19 — Gates

### §19.1 Three gates and their acceptance contracts

| Gate | Purpose | Acceptance contract |
|---|---|---|
| **G0** *(this file)* | Name the subject; recover inheritance; freeze proof obligations, frontier mechanisms, discriminating tests, verdicts, promised outputs | Nick + Knox accept / amend / reject |
| **G1** | Recover remaining inheritance; bounded frontier reality; **trace** participation relationships and failure cases with negative controls; record unresolved findings. **Investigation and tracing may iterate — no artificial blind phase** | minimum set traced with negative controls; every `H` resolved **or** explicitly `open`/`insufficient_evidence`; source floor discharged per output; **institutional-resistance test run**; `[INV-NP]` composition-tested |
| **G2** | Deliver the **integrated operating model** plus adjudicated architecture consequences, destination map, conformance seeds, current-build constraints | one verdict from `§18.1` + the three conclusions of `§18.2`; **every substantive conclusion has an accepted home OR a specifically governed downstream consumption obligation naming consumer + trigger + acceptance condition**; `REV-188` answered or explicitly re-deferred with a reason |

**G2 must produce an operating model, not routed tickets.** Minimum: who participates · what each owns and may decide · what crosses each boundary · what happens when facts or permissions change · what remains owed · how parties enter, refuse, transfer or leave. **No "C5 later" graveyard** — a deferral without consumer, trigger and acceptance condition is not a disposition.

**Mandatory inside G1:** the institutional-resistance test (`Q-ECB-15`) — refusal-to-participate changes what commitments the architecture may represent. **Separate and optional:** wedge selection, market sizing, financing, GTM. Whether medspa / dermatology / plastics is the right substrate for longitudinal participation, producer networks, outcome follow-up, consent portability and lineage is live and Nick's, and does not gate an architecture verdict.

### §19.2 Method law

1. **Inheritance verification precedes assertion, not capture.** Capture candidates promptly as **provisional**; run EXISTS-AS before asserting anything as **new, settled or authoritative**. *(Demonstrated this pass: `§17.F2` was demoted after Care `§9a` surfaced.)*
2. **Source floor declared and discharged per output**, with a named disposition per source. **Delegated scans are evidence, not an authored read** — label which.
3. **One carrier** until it demonstrably cannot hold the content (`D0TIER0-GRD-002`).
4. **No parallel lanes, agents or evidence runs before G0 acceptance.**
5. **`METHOD-000` default.** Record a method choice only where it changes scope, independence, cost or acceptance.
6. **One current-state surface** — `§1` (`D0CKPT-GRD-003`).
7. **Gate 1 must open** the six AI-corpus registries (`EVRUN-000001/2/3/5/6/11`), the **C3.7 `G` terminus**, the **Demand/counterparty disposition** and the **residual-moat frame** — or record why not applicable.
8. **Four evidence dimensions** on every recovered claim (`§5.0`); **maturity** on every external source (`§17`) — `research_demonstration` · `clinical_investigation` · `authorized_bounded_use` · `established_operational_capability` · `speculative_future_assumption`. A statute or specification is authoritative about its own content without proving a deployed capability; **do not conflate a research demonstration with an authorized one.**
9. **No absence claim without its coverage**, and no history claim from a current-state search.

**On the FAI G1 precedent, at the strength the evidence supports:** R8 `§3.9.1`'s mandatory `M-106` check was *"never run by this arc"* until R7→R8, then ran for two capabilities (`B-8` = `PARTIAL`) — a **documented** failure. That it was the **sole cause** of Outputs 1–3's defects is **not established**. The rules stand on their own merits.

---

## §20 — Governance receipts

### §20.1 Read-graph evaluation COMPLETE; catalog registration OWED

Two separate states. Read-graph **evaluation** is performed (`§20.3`), which is what Agent Work Protocol `§5` requires. Catalog **registration** is **owed**.

`AGENTS.md`: *"a standalone lane requires **no** launch envelope, integrator, or parent integration transaction"* — so inheriting integrator vacancy as a global block was wrong. The real reason to serialize is a **verified overlap**: the FAI branch has modified `01_master_corpus_catalog.md`, `04_manifest_read_graph.md` and `future_work_registry.md`. **Overlap is collision risk, not proof of a textual or semantic conflict.**

**Requested from Nick: authorization for one bounded intake transaction** — this carrier's catalog row plus route `#9w` only, on this branch, with a recorded freshness/collision check against the actual target base and the relevant unmerged FAI changes, returning exact head/blob and per-file stats. **Not requested:** unrestricted shared-governance write, a FAI merge, additional queue or registry rows by default, or a governance cleanup.

### §20.2 Catalog row — `add_tier2`

```
| `.cursor/plans/v4_ECB_G0_external_capability_boundary_reconnaissance_2026-09-11.md` | ECB Gate 0 — OMNI's Care Participation Operating Model (reconnaissance + subject definition) | markdown_doc | plan_or_roadmap | cross_domain, architecture_governance, federation, rbac_authority, cns_orchestration, ordered_fulfillment, trials_research | analysis_nonbinding | active | no | yes | no | none | none | `.cursor/plans/v4_ECB_G0_external_capability_boundary_reconnaissance_2026-09-11.md` | add_tier2 | consult_if_routed | user_knox_required | yes | routed | targeted_semantic | review_queue | routed | Gate-0 recon + subject-definition carrier (R3) for the ECB arc — OMNI's Care Participation Operating Model. Owns arc state at §1; originates no doctrine; mints no domain; does not reopen FAI; promotes no C3.7 or Care content. Inherits Care §9a participation semantics, Federation inv 29 / T0-14 operator-neutrality ([INV-NP]), C3.7 §11/§12 + REV-189/REV-190, P35/REV-188, GCE/D0THES-DEC-036, care_obligation/REV-141, REV-174, REV-184, C4.6 post-delivery obligations. Four independent evidence dimensions per claim; no single maturity score. Authored on `main` base with FAI source pins. | ecb_arc_gate0 | ECB-G0 |
```

### §20.3 Read-graph evaluation — performed

**Result: one new Tier-2 consult route is warranted; two routing findings recorded.**

```
#9w — ECB / Care Participation Operating Model
  trigger: participation posture of an external or OMNI-operated capability;
           command/execution authority over a non-human actor; capability
           formation from patient context (specimen / model / patient-specific
           design); intervention lineage, released configuration or exposure;
           recall-to-exposed-person reach; privacy-preserving discovery or
           opportunity/demand separation; obligation survival past
           producer / operator / consent disappearance.
  artifact: .cursor/plans/v4_ECB_G0_external_capability_boundary_reconnaissance_2026-09-11.md
  also load: .cursor/plans/v4_C3_5F5_topology_continuity_enterprise_ops_closure.md (§P35 RENAME)
             .cursor/plans/v4_C3_5G4_handoff_and_verdict.md (§1.5)
             .cursor/plans/v4_C3_5G4_1_contract_deskcheck_addendum.md (§B)
             .cursor/plans/v4_C3_7_oncology_trial_access_wedge_plan.md (§11, §12)
             .cursor/plans/v4_C4_care_operating_model_capture.md (§9a, §5b.1)
             .cursor/plans/contracts/federation_contract.md (inv 29 / T0-14)
             .cursor/plans/doctrine/08_open_review_queue.md (REV-188, 189, 190, 141, 174)
  read rule: consult_if_routed — analysis_nonbinding; originates no doctrine
  tags: cross_domain · architecture_governance · federation · rbac_authority ·
        cns_orchestration · ordered_fulfillment · d7_documents_consent ·
        observation_measurement · clinical_memory · trials_research
  lifecycle: active
  arc state: resolve from the carrier's §1 — this route carries no arc state
  supersession: none — pure addition
  caveat: does NOT reopen FAI; FAI state resolves ONLY through Tier-0 #15.
          Selection Accountability is under acceptance hold — consult and test
          against only; declared reliance inherits the hold (§3.5).
```

**Finding 1 — P35 has no task-entry route.** R2's *"nothing routes to P35"* was false and is corrected: route `10` names `agent-runtime/P35/tools` among the C3.8 axes, and route `9a` carries the C3.5–C3.8 termini in the canonical v4-authoring input set. **The narrower finding stands:** both fire on *authoring the v4 spine* or *pursuing a C3.8 convergence finding*, not on *doing participation or capability work*. A Care or Pharmacy author with a device question fires neither. → `D0ECB-REV-001`.

**Finding 2 — the super-frame has a source carrier but no accepted disposition and no task-entry route.** C3.7 `§12` preserves it; `REV-189` and `REV-190` carry adjacent mechanisms with named owners. **What is not established is any accepted whole-frame disposition, and the promised registry entry was never written (history-verified across six terms on all refs).** Whether a distinct entry is needed is undecided (`§20.5`). **No claim about why prior arcs omitted it.** → `D0ECB-REV-002`.

**Separately reported, not this arc's subject:** `main`'s `AGENTS.md` and read-graph Tier-0 #15 name the pre-FAI checkpoint, whose `§1` authorizes *"Gate-2 construction and pressure, and nothing else."* An agent cold-booting on `main` abandons the live FAI arc (`D0CKPT-GRD-004`). Not fixed here; not a prerequisite to this review.

### §20.4 Open-review rows — PROPOSED, land only if authorized

```
| D0ECB-REV-001 | v4_ECB_G0_..._2026-09-11.md §20.3 | P35 (`external_capability`/`command_authority_boundary`) has no TASK-ENTRY route. Routes 10 and 9a reference it but fire on v4-spine authoring / C3.8 convergence, not on doing participation or capability work. Owner open at REV-188 since 2026-06-14. | architecture_governance, cross_domain | Authors who need P35 do not load it; REV-188 stays invisible to them. | read-graph route addition (#9w naming the P35 carriers) | Nick + architecture_steward | open | owner: architecture_steward; closure_condition: task-entry route lands; next_trigger: intake authorization; blocks_current_work: no |
| D0ECB-REV-002 | v4_ECB_G0_..._2026-09-11.md §0.3, §20.3 | The C3.7 super-frame ("tumor-biology → care → translational evidence → research → outcomes") is preserved as narrative at C3.7 §12 with adjacent mechanisms owned by REV-189/REV-190, but has NO accepted whole-frame disposition and no task-entry route; the Future-Work-Registry seam it was promised was never written (verified against history on all refs). Whether a distinct entry is needed is undecided. | architecture_governance, trials_research, cross_domain | The frame stays unreconciled; each arc recovers a fragment of it. | accepted disposition here, an existing-row reference, OR a distinct registry entry if a genuinely separate parked obligation is identified | Nick + architecture_steward | open | owner: architecture_steward; closure_condition: disposition recorded or composition accepted; next_trigger: Gate-0 acceptance; blocks_current_work: no |
| D0ECB-REV-003 | v4_ECB_G0_..._2026-09-11.md §0.3 | `add_tier3` is not in `manifest_action_enum` (none/add_tier0/add_tier1/add_tier2/demote/supersede_link/review_queue/retire). HANDOFF_2026-08-09_foundational_architecture_arc_opened.md carries the invalid value. Corrected in this carrier; the FAI handoff is not this arc's to fix. | architecture_governance, doc_governance | Invalid enum values propagate by copy, as they did into this carrier's R1/R2. | FAI handoff correction at its next substantive touch | architecture_steward | open | owner: architecture_steward; closure_condition: FAI handoff value corrected; next_trigger: next FAI touch; blocks_current_work: no |
```

### §20.5 Future-work registry — **no row proposed**

R2 proposed one. **Withdrawn.** Knox is right that a registry entry must not be created to make a loss narrative true after the fact. The frame is preserved in C3.7 `§12`, its mechanisms in `REV-189`/`REV-190`, and its live handling in this arc's governed scope. **A distinct entry earns its place only if G1/G2 identifies an obligation genuinely outside this arc's scope.** Recorded as an option in `D0ECB-REV-002`, not as a pending write.

### §20.6 Cross-arc collision check

| Object | State | Collision | Handling |
|---|---|---|---|
| FAI G1 / Authority object | PAUSED, frozen, blob `9835715e` | adjacent | read-only, pinned; five-posture ladder `§3.5` |
| FAI Selection Accountability | candidate under hold | would collide if extended | consult + test; declared reliance inherits the hold |
| **Care capture `§9a`/`§5b.1`/`§5a`/`§5b`** | FROZEN against edit, **readable** | **strongest read dependency** | route `#9e`; material claims via evidence ledger + native carriers (`#9f`); **no Care edit, no Care promotion** |
| **C3.7** | `plan_active`, `analysis_nonbinding` | strongest content overlap | primary inheritance; **no C3.7 promotion through this arc** |
| `REV-189` / `REV-190` | OPEN | direct | inherit; do not build; do not close |
| Federation contract inv 29 | `draft_for_ratification` | `[INV-NP]` source | cite; **no contract edit** |
| C4.6 Rx / pharmacy | accepted L2 | strong | cite; generalise past pharmacy or the arc has no reason to exist |
| Insurance Gate 2 · Method PR #19 | frozen / accepted-not-landed | none / non-binding | — |

---

## §21 — Gate-0 stop receipt

**Produced:** this one carrier, revision R3.

**Discharged this pass:** the operator's collision question **verified and resolved** with a three-sense citation including `Core Capabilities` (`§0.1`) · `[INV-NP]` installed from ratified `T0-14`/inv 29/`GRD-032` and made falsifiable by `S16` (`§3.3`) · **Care `§9a` recovered** as the estate's own participation vocabulary, renaming the subject on evidence rather than preference (`§0.2`) · BC-1 resolved by **history-verifying** the surviving claim and withdrawing the causal story and the `§100` citation error · BC-2's maturity ladder dissolved into four independent evidence dimensions · BC-3's diagram defect fixed by making governance a **constraint plane** grounded in thesis `§8` rather than a stage · BC-4's receipt and test defects closed, negative controls rewritten as predicates · five **frontier mechanisms** with non-transfers, one of them demoted by its own inheritance check (`§17`) · three new hypotheses and three new scenarios · the FWREG row **withdrawn**.

**NOT done, by design:** no architecture decided · no domain minted · no scenario executed · no external evidence captured · no lane or agent launched · no contract touched · no FAI mutation · no Care or C3.7 promotion · no registry or queue write · no shared control-plane surface landed.

**Open and owed:** `Q-ECB-1` … `Q-ECB-22` (Gate 1) · `D0ECB-REV-001` … `-003`, to land only if authorized · catalog row + route `#9w` — **bounded intake authorization requested** (`§20.1`) · six AI-corpus registries + C3.7 `G` terminus + Demand disposition + residual-moat frame un-inspected (`§19.2.7`) · relayed external claims unverified (`§19.2.8`) · `main` boot-pointer hazard (Nick) · **`Q-ECB-NAME-1` closed at `§0.2`; fallback recorded** if Nick prefers the reviewed wording.

**Stop condition.** Superseded only when Nick + Knox accept, amend or reject R3. **On acceptance the next authorized act is G1 with the minimum scenario set. On rejection, revise or close.**

---

## §22 — Amendment log

**R1** (`60619c4f`) — initial Gate-0 authoring.

**R2** (`3b9db0c2`) — all nine Knox R1 amendments accepted; five review claims verified first. Subject named; *"2035 comes free"* withdrawn; C3.7 super-frame recovered; *"two-thirds"* replaced; `add_tier3` corrected; `S5` restored, `S13` added; institutional resistance made mandatory; FAI contact made a ladder.

**R3** (this revision) — Knox BC-1…BC-4 accepted, plus two operator corrections that outrank them. **Subject renamed to Care Participation Operating Model** on verified evidence: `capability` carries three senses and `Core Capabilities` means OMNI's *own* operators, so the prior name pointed at the inverted referent in the contract owning the boundary; and `participation` is the estate's existing vocabulary at Care `§9a`. **`[INV-NP]` operator-non-privilege installed** from `T0-14`/inv 29/`GRD-032` with scenario `S16`. **Care `§9a` recovered** — participation topology, per-contribution semantics incl. `correlation/independence class`, `join/leave/mute/revoke/re-enter`, *"contributions ≠ votes"*. BC-1: *"no row/route/owner"* withdrawn; `REV-189` added; `§100`→`§12`; the never-written claim **retained and history-verified** (0 hits, six terms, all refs); **the causal story withdrawn and the reading miss owned**. BC-2: maturity ladder dissolved into four independent dimensions; *"nothing is L5"* withdrawn. BC-3: `§8` rebuilt as a composition map with a governance constraint plane. BC-4: `REV-004` reference resolved, `H9` moved off `S5`, `S13` guarded against collapse, `S9`/`S11`/`S14`/`S15`/`S0b` given named expected tests, negative controls rewritten as predicates, FAI clauses harmonised, route made state-free. **Five frontier mechanisms added** with non-transfers — earned posture (Tesla), evaluator independence (Anthropic; demoted to already-named after Care `§9a`), opaque-but-attested reliance (Palantir contrast), mandatory-action-with-compliance (aviation), patient-initiated formation. New `H12`–`H14`, `S15`–`S17`. FWREG row withdrawn.
