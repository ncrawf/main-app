# ECB Gate 0 — One patient, many independently-owned participants: does the arrangement hold?

Document type: `plan_or_roadmap` — **Gate-0 estate-reconnaissance and question-definition carrier**
Authority: `analysis_nonbinding` (`D0THES-GRD-036`). **Originates no doctrine, mints no domain, accepts no architecture, promotes nothing.**
Status: `G0_R4_AUTHORED_PENDING_NICK_KNOX_REVIEW · arc_not_started · fai_untouched · subject_name_DEFERRED_BY_DESIGN · catalog_registration_OWED`
Revision: **R4** — amends R3 (`88e65c07`) against the Knox clinical-fusion note and two operator corrections that outrank it. Log at `§22`.
Domain(s): `cross_domain` · `architecture_governance` · `federation` · `rbac_authority` · `cns_orchestration` · `ordered_fulfillment` · `d6_commerce` · `d3_scheduling` · `business_ops_workforce` · `d7_documents_consent` · `observation_measurement` · `clinical_memory` · `trials_research`
Lifecycle role: states the question, records recovered inheritance with per-claim evidence, installs the **decomposition** that must precede naming, and specifies the **scenario generator** — before architecture extraction.
Source-of-truth relationship: **owns nothing.** Arc state belongs to `§1`.
Manifest action: `add_tier2` — **PROPOSED, registration OWED** (`§20.1`).
Review gate: `user_knox_required`

---

## §0 — R4: the scope was wrong, and the rename churn was the symptom

### §0.1 The operator's objection, and why it is correct

Nick: *"is the ECB or the fusion element or whatever it is we're talking about... 'clinical' only??? ... our broad point was, this patient needs xyz knee replacement — does the vendor know to send it? does OMNI know to anticipate the 30 items needed for the surgery? ... where does clinical care end and the support for clinical care begin?? ... internal OMNI must have resolved this somewhere???"*

**It did. Care `§1a` is a KEYSTONE and it answers the question directly:**

```95:99:.cursor/plans/v4_C4_care_operating_model_capture.md
## §1a — Mixed interaction & commitment routing (KEYSTONE — "is everything Care?" = NO; one interaction carries many tracks)
**[INV] The classification unit is NOT the conversation / appointment / product / provider / relationship / "loop run" — it is the individual contribution, proposed action, commitment, and state-transition.** A single visit can simultaneously carry clinical evidence · a clinical recommendation · care-support instruction · scheduling · commerce · service-operations · rights/grievance · information/education · research — each routed independently.
- **[INV] Seven per-event ownership dimensions that NEVER collapse (thesis §7.5.1):** `surface_of_record · channel_of_record · operator_of_record · clinical_owner · commerce_owner · artifact_custodian · care_coordination_owner`. Corollary: **`operator_of_record ≠ clinical_owner ≠ commerce_owner ≠ artifact_custodian ≠ clinical_adopter`.**
- **[INV] Payload-noun ≠ domain (`D0THES-GRD-026`, binding guardrail):** "labs/Rx/commerce/messaging/skincare/Botox" are **use-cases threading the operating model**, never domains. The product noun does not tell you the architecture.
```

**There is no clinical/support boundary to find, because it is not a boundary — it is a decomposition.** Nine tracks run through one interaction and route independently, and *"care-support instruction"* is already one of them, sitting beside *clinical evidence* and *commerce* and *service-operations*. Ownership splits seven ways and **`care_coordination_owner` is one of the seven** — which is precisely the "who makes sure all 30 items arrive before incision" role.

**Therefore Knox's proposed label — *"Governed clinical fusion and coordinated execution"* — imports the exact error `GRD-026` forbids.** It names the whole subject after **two of nine tracks** (clinical evidence, clinical recommendation) and **one of seven ownership dimensions** (`clinical_owner`). Under that name the knee-implant supply problem, the instrument-tray assembly, the consignment inventory, the sterile-processing turnaround, the vendor rep's credentialing and the OR-duration booking are all out of scope — **and they are the same coordination physics.** `clinical` is a **facet of a contribution**, not a category of the problem. **Rejected.**

The knee replacement, decomposed through the keystone:

| The thing | Track(s) | Owner dimension | Admissibility projection |
|---|---|---|---|
| "this patient needs a TKA" | clinical recommendation | `clinical_owner` | decision |
| implant model + size selected | clinical recommendation × commerce | `clinical_owner` + `commerce_owner` | decision + readiness |
| **the vendor knowing to send it** | commerce · service-operations | `operator_of_record` (external) + `commerce_owner` | **readiness** |
| **the 30 items assembled before incision** | service-operations | **`care_coordination_owner`** + `artifact_custodian` | **readiness** |
| the rep in the room | service-operations · rights | workforce + participation posture | execution authorization |
| OR booked with correct duration and equipment | scheduling | `care_coordination_owner` | readiness |
| pre-auth | commerce | `commerce_owner` | readiness |
| implant lot → registry → later recall | clinical evidence × commerce | `artifact_custodian` | consequence + proof |

**Five of eight rows have no `clinical_owner` at all.** And `readiness` is not invented here — it is already one of Care `§5b`'s four non-collapsible admissibility projections. The estate had the machinery; nobody had pointed it at this.

### §0.2 The real disease: we keep naming before decomposing

Four revisions, four names — boundary (`ECB`), relationship (`Care–Capability`), admission (`Care Participation`), assembly (`clinical fusion`). **Every one is a facet, and each rename narrowed the subject.** Nick is right that Knox's *"don't do another wholesale rewrite"* reads like patching a hole; he is also right that another rename would be churn. Both are true because **renaming was never the fix.**

`GRD-026` states the actual instruction and we kept skipping it: ***"Decompose-before-naming (mandatory): before creating/naming a domain, decompose the payload into its concerns."***

So R4 does the opposite of the last three revisions:

1. **The arc is named by its QUESTION** — which is nameable now, is stable, and is what `D0PRESS-GRD-001` requires (*"Name the arc by its QUESTION, not its proof mechanism"*). R1 invoked that rule and then drifted from it three times.
2. **The architectural subject is NOT named, and that is a positive design decision, not deferral.** It is `GRD-026`'s mandatory sequence. **This is materially different from R1's deferral**, which Nick correctly rejected: R1 deferred because it did not know, and offered a menu. R4 declines to name because the decomposition has not run, names the decomposition as **Gate-1 output #1**, and states the lattice it must produce (`§3.2`). The name is an **output**.
3. `ECB` stays as the **work identifier only** — a handle in filenames and row IDs, explicitly not a scope statement. Knox's instruction to stop renaming files is honoured.

### §0.3 Two comparator failures, one of them a re-derived corrected error

**Palantir. Knox is right, and the failure is worse than he described.** The estate already carried the stronger observation:

```92:92:.cursor/plans/v4_C4_residual_moat_and_network_formation_doctrine.md
**Palantir** ships semantic objects/links, kinetic actions with validation + side-effects, action logs, granular security, cross-org ontologies, governed write-back, scoped agents, and AIP model/eval/ops tooling. All three capabilities now exist elsewhere (verified via C3.8/G4...)
```

**`cross-org ontologies` and `governed write-back` are already recorded as verified.** R3's *"Palantir evaluates against one ontology it controls"* contradicts the estate's own verified finding. **Withdrawn.**

And the pattern is the point: that same document's revision history shows *"Palantir de-escalation"* as a prior Knox correction, and *"softened Palantir/buyer/consortium absolutes"* as another. **I produced the third instance of an overreach the estate had already corrected twice.** That is not a comparator slip — it is the re-derivation failure this arc exists to study, committed inside the arc. Recorded as `D0ECB-REV-005`, with a candidate guardrail: **a comparator claim must be checked against the comparator registry and the residual/moat frame before it is asserted, exactly as a novelty claim is checked against the estate.**

The surviving distinction, stated as a question rather than an answer: **what does an operating model guarantee when the participants share no controlling institution, no incentive, no source of authority, and no willingness to remain — and can any platform, including one with cross-org ontologies and peering, supply that without the participants consenting to a common authority?** That is `Q-ECB-15` and it must be earned on concrete operating guarantees, refusal behaviour and failure behaviour, not on a capability table.

**`[INV-NP]` over-claimed.** R3 said an internal and an external participant are *"the same kind under different ownership."* Knox's correction is right and his test is better than mine: **equal standing is not identical topology.** Corrected at `§3.4`.

### §0.4 The inheritance Knox supplied is real and better than my comparators

**ICE / MD PnP / OpenICE and IEEE 11073 SDC / IHE SDPi are much closer mechanism antecedents than "what would Tesla call this."** Adopted at `§17.F6` with the maturity discipline Knox himself insisted on — the inspected SDPi publication leaves **external control outside its specified capabilities**, which is exactly the distinction the arc must preserve: architectural direction ≠ published specification ≠ implemented interoperability ≠ authorized clinical system.

**His strongest technical point is adopted as a new hypothesis:** individually admitted participants issuing individually permitted commands can still produce a **collectively unsafe assembly**. Care `§9a` supplies participation, context-admission and influence semantics; it does **not** establish the safety of a coupled control system. R3 treated `§9a` as more settled than it is. → `H15`.

**His placement split is adopted** (`§17.F7`) — device-local control and immediate safety · live case coordination · longitudinal care and business operation — as **functional responsibilities whose placement must be resolved**, not three new planes. It answers "where does OMNI sit" without making OMNI a transport hop for every signal.

### §0.5 Scenarios: the carrier was building the wrong artifact

Nick: *"i do NOT know if we should be necessarily carrying like 2 random clinical scenarios i spouted off into whatever carrier... whatever arc this becomes needs like 100 scenarios, 1000 scenarios."*

**Correct, and the estate has the precedent.** C3.7's scenario library is *"breaker-heavy (**NOT '250 because 250'**)"*, organised around **breaker families** with a coverage manifest, and its authorship is explicit:

> *"Rows authored by Nick + Knox; this spec/coverage container = `v4_C3_7D_scenario_library.md`. **Opus does NOT author the rows.**"*

R1–R3 hand-listed 10–17 scenarios and called it a minimum set — **the wrong artifact class.** `§16` is replaced by a **generator**: axes × breaker families × coverage manifest × authorship division. The previously hand-listed cases are demoted to **seed instances whose only job is to test whether the generator produces them** — and both of the operator's improvised examples are labelled as such rather than promoted to spec.

---

## §1 — Arc state *(this section owns it)*

```
Arc key:                 ECB  (work identifier only — NOT a scope statement)
Named question:          §3.1
Architectural subject:   DEFERRED BY DESIGN — Gate-1 output #1 (§3.2, GRD-026)
Arc state:               GATE_0_R4_AUTHORED — NOT STARTED, NOT ACCEPTED
Gate 0 verdict:          none issued
Architecture accepted:   none
Domain minted:           none
Scenario library:        NOT authored here — generator only (§16)
FAI relationship:        separate bounded object; FAI G1 untouched
Next act:                Nick + Knox accept / amend / reject
```

---

## §2 — Repository, base and review-object posture

| Field | Value |
|---|---|
| Repository | `ncrawf/main-app` |
| Branch | `cursor/ecb-g0-reconnaissance-6a09` |
| Base | `main` @ `2629099e0a611510e52a34c6479f6353bf11a0d5` |
| R1 / R2 / R3 heads | `60619c4f…` / `3b9db0c2…` / `88e65c07…` |
| Branch inheritance | **NONE** — based on `main`, not the FAI branch |

**FAI pins (read-only):** branch head `65f310e0…` · pause checkpoint blob `46c0e003…` · execution plan R8 blob `ba4c967a…` · G1 carrier blob `9835715e…`. **Receipt:** the carrier blob is `9835715e`, exactly what the pause checkpoint `§2` pins as identical across all three of its recorded heads. **Frozen Authority content has not drifted.** Verify by blob, never head equality.

---

## §3 — The question, and the decomposition that must precede naming

### §3.1 The named question

> **One patient. Many independently-owned participants — humans, devices, software, laboratories, manufacturers, suppliers, organizations, and OMNI's own operators — each holding partial information and different abilities to change that patient's situation. Each participant's observation, interpretation, commitment or act changes the conditions under which the others' work is still valid.**
>
> **Does OMNI's architecture hold that arrangement together — across tracks that are not all clinical, across owners that do not share an institution, across time that outlasts the participants, and under delay, disagreement, duplication, refusal and disconnection?**

Graded on the falsifiable form:

> **Given the accepted and draft architecture as it exists, name the specific guarantees that BREAK in that arrangement, and name the smallest set of extensions that repair them — and, symmetrically, name what the arrangement should ENABLE that the architecture never promised.**

**Failure condition, so this is a test:** if nothing breaks and nothing is unreachable, the verdict is `EXISTING_ARCHITECTURE_SUFFICIENT_WITH_ROUTING` and the arc closes cheaply.

### §3.2 The decomposition — Gate-1 output #1

`GRD-026` requires decomposition before naming. The estate supplies three orthogonal axes; **the arc's first output is to run every contribution through all three and see what has no owner.**

**Axis 1 — track** (Care `§1a`, nine, routed independently): `clinical evidence` · `clinical recommendation` · **`care-support instruction`** · `scheduling` · `commerce` · `service-operations` · `rights/grievance` · `information/education` · `research`.

**Axis 2 — ownership dimension** (thesis `§7.5.1`, seven, never collapse): `surface_of_record` · `channel_of_record` · `operator_of_record` · `clinical_owner` · `commerce_owner` · `artifact_custodian` · **`care_coordination_owner`**.

**Axis 3 — admissibility projection** (Care `§5b`, four, non-collapsible): `decision` · `execution authorization` · **`readiness`** · `consequence + proof`.

**The lattice is the "top-level relationships and what comes underneath" the operator asked for.** For any contribution: which tracks does it carry · who owns it along each dimension · which projections must hold. **A cell with no owner is a finding. A cell that forces two owners into one is a `GRD-035` collapse.**

**What the decomposition must return before any name is proposed:** which cells are populated by accepted architecture · which are populated by drafts · which are empty · whether the empty cells share a shape (which would indicate one missing object) or do not (which would indicate several extensions) · and **only then** whether the subject needs a name at all.

### §3.3 Non-goals

Not a new domain (`GRD-026`) · not a god-object or new control plane (`GRD-035`) · **not clinical-only, and not clinical-first** (`§0.1`) · not a reopening of FAI (`§3.5`) · not a claim that OMNI owns therapy design, manufacturing or actuation — **nor the retreat that OMNI may never operate a capability or surface**, since per C3.5 F5 the mode is *"a per-system, per-context governed decision — not a thesis assumption"* · not a patient marketplace or paid-placement ranker · not a literature corpus (`GRD-041`; that is `FWREG-006`) · not a product roadmap, GTM plan or wedge selection · **not a scenario library** (`§16`) · not an accepted ontology for *"intervention."*

### §3.4 `[INV-NP]` — corrected: equal standing is not identical topology

R3 claimed internal and external participants are *"the same kind under different ownership."* **Over-broad and withdrawn.** Federation inv 29 / `T0-14` forbids **unearned privilege from affiliation**; it does not claim a hospital-internal device, an independent laboratory, an OMNI-owned clinic and a remote manufacturer have identical authority relationships, custody, connectivity or failure behaviour — the same contract explicitly models topology and cross-operator boundaries.

**The two-test form (Knox's, adopted):**

- **Affiliation test.** Hold delegation, credentialing, custody, jurisdiction, network placement and contractual responsibility constant; vary **only** corporate affiliation. **No privilege may appear.** *(`GRD-032`: architecturally OMNI Direct is one rail. `T0-14`: OMNI-operated operators are tenants like any third-party Brand — no privileged tier, no self-dealing.)*
- **Substantive-difference test.** Vary a real fact — delegation, credentialing, custody, jurisdiction, network placement, contractual responsibility. **The model MAY legitimately behave differently, and must represent that difference rather than erase it.**

Both directions are failures: unearned privilege, **and** flattening a real operating difference. → `H12`, seeds `S16a`/`S16b`.

### §3.5 FAI contact — one rule, five postures

**Consult** (yes, cite hold status) · **test a hypothesis against** (yes, binds nothing) · **declared reliance on unaccepted semantics** (yes if declared; **the conclusion inherits the hold** — never permission to promote) · **propose a change** (to Nick; a proposal is not an edit) · **blocking contradiction** (`FAI_INTERRUPT_CANDIDATE`; stops **that conclusion**, not unrelated work). **Mere relevance is never an interrupt.** No Selection Accountability amendment or promotion, no `Q-DL18-4` adjudication, no Output-4 consolidation, no FAI write, no PR #17/#19 merge. `Q-ECB-6`: `Q-DL18-4` is described, never chosen.

---

## §4 — Source and authority posture

**Read fully by this author:** this carrier; all three Knox reviews; FAI pause checkpoint; `HANDOFF_2026-08-09` ×2; `06_guardrail_antipattern_digest.md`; FAI R8 `§3.9.1`–`§3.9.3`; governance/taxonomy `§3`; read-graph Route Entry Contract + Major-Arc Intake routing.

**Read at specific passages, verbatim-verified by this author:** **Care `§1a` (keystone), `§1CP`, `§5a`, `§5b`, `§5b.1`, `§9a`** · **`v4_C4_residual_moat_and_network_formation_doctrine.md` §Palantir + revision history** · `v4_C3_7` plan `§11`/`§12` + scenario-library spec `§48` (authorship division) · `v4_C3_5F5` P35 rename · `federation_contract.md` inv 29 + `T0-14` · `GRD-032` · `08_open_review_queue.md` `REV-188`/`189`/`190` · `manifest_action_enum` · read-graph routes `9a`/`10` · C4.6 Rx L2 return-path/recall · FWREG inventory **and history** · `AGENTS.md` standalone-lane clause.

**Recovered via three delegated EXISTS-AS scans** — marked `[D]` in `§5`. **Delegated scans are evidence, not an authored read.**

**Repository-verified:** branch divergence; carrier blob identity; PR states; `manifest_action_enum`; FWREG history across six terms on all refs; absence from `*.ts`/`*.sql` of `context_packet`, `trust_transfer_record`, `care_obligation`, `external_capability`, `outcome_intelligence`; shipped `actor_kind`; `CONSENT_TYPE_VALUES`; no `care capability` token collision.

**NOT inspected — declared:** off-repo controlling plan · FAI G1 carrier byte-for-byte · the six AI-corpus registries (**Gate-1**) · thesis `§C` · `v4_C3_7G` beyond the translational cluster · the Demand/counterparty disposition (**Gate-1**) · the residual/moat frame beyond the Palantir passage and revision history · full C3.5–C3.7 scenario rows · the implementation estate · **the ICE / MD PnP / IEEE 11073 SDC / IHE SDPi sources relayed by Knox — unverified here, Gate-1 capture required** (`§19.2.8`).

**Forbidden inferences:** inventory presence ≠ full read · chronology ≠ authority · a search miss is not proof of absence · a current-state grep cannot establish history · a delegated scan's absence claim is weaker than an authored one · an inspection limit is not an estate verdict · **a comparator claim is a novelty claim and owes the same check** (`§0.3`).

---

## §5 — Recovered inheritance

### §5.0 Four independent evidence dimensions — no single score

For each relied-upon claim: **specified** (what semantics exist) · **accepted** (by whom, at what scope) · **implementation inspected** (what was verified, or unverified) · **composition evidence** (desk trace / executable fixture / observed operation / none). **None implies another; they are not ordered.**

### §5.1 Matrix

`[D]` = delegated scan.

| # | Concept | Where | Specified | Accepted (scope) | Impl. | Composition |
|---|---|---|---|---|---|---|
| **K1** | **Care `§1a` KEYSTONE — "is everything Care?" = NO.** Classification unit is the **individual contribution / proposed action / commitment / state-transition**, never the conversation, appointment, product, provider, relationship or loop-run. **Nine tracks** route independently through one interaction. **Seven ownership dimensions never collapse.** Payload-noun ≠ domain. Same referent linked across clinical/service/catalog/commerce/fulfillment records **without ownership change or duplication** (the moisturizer table). *"Not every commerce/operational action requires clinical consent."* | Care `§1a` | **richly specified** | `analysis_nonbinding`, **REVIEW-DRAFT**; capture frozen against edit, readable | not inspected | **none** |
| **K2** | **Four non-collapsible admissibility projections** incl. **`readiness`**; `indicated/contraindicated/uncertain/awaiting-evidence`; `authority_basis` · `authorization_evidence_form` · `approval_requirement` (`dual_control`, `committee/ethics_review`) · versioned `checkpoint_graph` | Care `§5b`/`§5b.1` | specified | REVIEW-DRAFT | none | generic conformance fixture |
| **K3** | **Care `§9a` multi-actor participation** — *"three non-collapsing gates; contributions ≠ votes"*; `[INV]` topology **unbounded, dynamic, never fully known**, incl. **unknown-at-start**, `join/leave/mute/revoke/re-enter`; per-contribution semantics incl. **agent-operator/sponsor/incentive · model/provider/version · harness/runtime-profile version · correlation/independence class · human disposition · influence on plan/action · later evaluation · revocation**; `resolution_participation_binding` (narrow C5 candidate) + `resolution_participant_graph` (**projection, NOT truth**) | Care `§9a` | richly specified | REVIEW-DRAFT | not inspected | **none — and it does NOT establish coupled-control safety** (`H15`) |
| **K4** | `ai_participation_policy` × `commit_authority_mode` × `automation_level {observe · draft · recommend · prepare_action · execute_reversible · execute_bounded_control}` × `human_checkpoint_requirement` × `fallback_mode {human_only · deterministic_only · safe_halt · degraded_continue · alternate_capability}`; `[INV]` **Care must remain valid if the model changes, the runtime is unavailable, the patient opts out, or the system is degraded** | Care `§5b.1` | specified enums | REVIEW-DRAFT | not inspected | none |
| **K5** | **Palantir ships** semantic objects/links, kinetic actions with validation + side-effects, action logs, granular security, **cross-org ontologies**, **governed write-back**, scoped agents, AIP tooling — *"verified via C3.8/G4"* | residual/moat frame | observation | **evidence-grade factual**; strategic conclusions candidate | n/a | n/a |
| **A** | **SUPER-FRAME** — *"tumor-biology → care → translational evidence → research → outcomes"*; *"OMNI as the environment connecting patient biology, care, models, pharma, outcomes — without lying to the patient or selling them to a sponsor"* | C3.7 `§12` | narrative frame | **not accepted**; its promised FWREG seam **never written** (history-verified, 0 hits / 6 terms / all refs) | n/a | none |
| **A2** | **Care-substrate route-outs** — *"confirm homes in CARE contracts, NOT a research lane"*: `line_of_therapy_state`, `molecular_readiness_state`/`tissue_availability`, **option preservation** | **`REV-189`** | named + partial | open review | not inspected | none |
| **B** | **Third supply side** + eight pressure-candidates, *reuse-first, do NOT pre-mint*: `biospecimen_lineage` · `tumor_model_link` · `translational_model_evidence` · `model_match_candidate` · `model_to_trial_signal` · `specimen_use_consent_scope` · `pharma_model_access_contract` · `patient_model_feedback_loop` | C3.7 `§11`; **`REV-190`** | candidate names | open, **not build-accepted** | none | none |
| **C** | **Capability-formation chain + guardrail** — *"PDX/organoid/model response is TRANSLATIONAL EVIDENCE, not direct clinical truth ... NEVER 'mouse responded → patient gets drug'"* | C3.7 `§11` | chain + prohibition | restated in `REV-190` | n/a | none |
| **F** | **Operator-neutrality** — no privileged OMNI tier; `Core Capabilities` are tenants; audited `operator_neutrality_basis`; **contract explicitly models topology and cross-operator boundaries** | Federation inv 29 / `T0-14`; `GRD-032` | specified | **`GRD-032` ratified**; contract `draft_for_ratification` | not inspected | none |
| 1 | **P35** — eight modes `read-only · write-back · request-only · bounded-command · human-confirmed-command · prohibited-command · emergency-break-glass · vendor-operated` | `v4_C3_5F5`; `G4` §1.5 | mode enum | **frame** accepted C3.8 `§1A`; **owner OPEN `REV-188`** | none | none |
| 2 | The boundary **with F5's qualifier** — *"OMNI does **not assume** it owns the mechanics or the native UI ... a per-system, per-context governed decision — not a thesis assumption"* (supersedes F4's absolute framing) | F4; **F5** | qualified | `analysis_nonbinding` | n/a | none |
| 3–4 | **GCE** spine (`D0THES-DEC-036`); returns classified `evidence \| observation \| proposed-meaning \| externally_committed_truth`; *"External systems never own OMNI-owned canonical truth"* | posture | spine + classification | **RATIFIED** | partial / no typed enum | none |
| 6 | `device`/`robot`/`external_system` actor subtypes; **only humans hold care-ownership**; `system_actor_atom_grant` | Identity §4; RBAC §4 `[D]` | specified | `draft_for_ratification` | **shipped `actor_kind` differs** | none |
| 7 | Non-human delegated authority **decomposed** across Identity + RBAC (`delegated_authority_envelope`) + Federation + D7 | posture `[D]` | principle | **RATIFIED** | envelope **uncontracted** | none |
| 8–9 | `chain_of_identity` (vein-to-vein); IP `custody_chain` (`shipped→…→destroyed` + excursion/lot/sponsor reconciliation) | C3.6 `[D]` | primitives | `analysis_nonbinding` | none | none |
| 10–12 | `research_permission_stack` (7 stages) · `candidate_visibility_scope` (pre-consent: aggregate/de-identified/site-level only) · `standing_match` | C3.7 | specified | `analysis_nonbinding` | none | none |
| 13–14 | Consent families under an anti-coercion `[INV]` with purpose-of-use · recipient · expiry · revocation · derived-grant invalidation; `gate_timing` five values, consent defaults `pre_performance_gate` | Care `§5a`; Settings `[D]` | specified | REVIEW-DRAFT / binding design | 13 `CONSENT_TYPE_VALUES` + `patient_consents` **verified** | none |
| 16–17 | Trust relocated; *"context-packet exchange carries a `trust_transfer_record`"* · ACK ≠ accepted custody; ten-state custody ladder | `GRD-030`; `D0W3B-GRD-002`; C4.3 `[D]` | principle + states | **RATIFIED** / active / design PASS | **record unbuilt** | conformance script |
| 18–19 | `ingest_counterparty_acceptance_assertion` (*"MUST NOT itself set accepted state"*) · **post-delivery obligations survive episode closure** (*"Delivery may close one fulfillment episode while refill, monitoring, adverse-event, recall and continuation obligations remain open"*) | C4.6 L2 | specified | **accepted, pharmacy scope** | not inspected | none |
| 20–22 | Regulatory status is `as_of` truth · `care_obligation` (episode anchor, conversion rule, explicit expiry) · `care_commitment` **OPEN `REV-141`** | `G2A`; OFC `[D]` | specified / named | `not_promoted` / draft / OPEN | **no tables** | none |
| 23–26 | Outcome reads frozen context, never rewrites · `outcome_intelligence` under `REV-174` · *"no truth by generation"* · verification ≠ verification ≠ adoption | `REV-184`; C3.6; C4.4; Observation `[D]` | laws | signed-off / OPEN / nonbinding / draft | none / partial | none |
| 27–29 | Incentive must not bend clinical presentation (*"economically-blind, posture-invariant"*) + C4.6 `C6` · population learning needs a stated basis · not a thin broker (`GRD-032`/`034`) | Care `§4`/`§7`; posture `[D]` | specified | mixed / **RATIFIED** | none | proof spec only |

### §5.2 Reading

**The estate is far richer in *specified* semantics than any reading so far credited — Care `§1a`, `§5b`, `§9a` and `§5b.1` together already carry the classification unit, the track decomposition, the ownership dimensions, the admissibility projections, the participation topology and the automation axes.** What it does not carry anywhere: **acceptance beyond REVIEW-DRAFT, any implementation, and — in every single row — composition evidence.** No row records an observed operation. Two record a generic fixture.

**So the honest position is neither "this is all new" nor "this is already handled." It is: the vocabulary and much of the semantics exist, are unaccepted, unbuilt, and have never been shown to hold together.** That is what the arc is for, and it is why the decomposition (`§3.2`) precedes everything.

---

## §6 — Inheritance map

| Concern | Owner | State |
|---|---|---|
| Classification unit, tracks, ownership dimensions | Care `§1a` | REVIEW-DRAFT, frozen against edit, readable |
| Admissibility projections incl. `readiness` | Care `§5b` | REVIEW-DRAFT |
| Multi-actor participation semantics | Care `§9a` | REVIEW-DRAFT; **no coupled-control safety** |
| Care-substrate route-outs / option preservation | **`REV-189`** | OPEN |
| Translational bridge | **`REV-190`** | OPEN, `leave-door-open` |
| Super-frame loop | C3.7 `§12` is its source carrier | **no accepted disposition; no registry entry; no task-entry route** |
| Per-system posture + command mode | **`REV-188`** | **ORPHAN** |
| Outcome / RWE | `REV-174` | **ORPHAN** |
| `care_commitment` | `REV-141` | **OPEN** |
| Operator non-privilege + topology | Federation inv 29 / `T0-14`; `GRD-032` | ratified guardrail; contract draft |
| Coupled multi-controller safety | — | **not located** (`H15`) |
| Exposure / lineage record | — | not located; **need untested** |

---

## §7 — Actors

`patient` · `surrogate/DPOA/guardian` · `referring or prescribing clinician` · `proceduralist` · `supervising clinician` · `longitudinal care team` · **`care coordinator`** · `treatment facility / site` · **`sterile processing / facility operations`** · `operator of record` · **`OMNI-operated Core Capability`** · `intervention producer` · `capability developer` · **`supplier / distributor / consignment holder`** · **`vendor representative on site`** · `execution device or robot` + `vendor operator` · `laboratory / diagnostic` · `biospecimen / model custodian` · `logistics / cold-chain custodian` · `payer / financer` · `regulator` · `IRB / ethics body` · `sponsor` · `non-human delegated agent` · `federation peer` · **`unknown-at-start`** (Care `§9a` `[INV]`).

Rights derive from `authority_basis`, never from possessing data, employing a clinician, owning an interface, or having generated a recommendation. Only humans hold care-ownership. **Delegation is never inferred from call topology** (`D0OL-GRD-008`). **Performance evidence never independently confers professional authority or a counterparty's delegation.**

---

## §8 — Composition map — NOT an authorization order

> **A composition map of interacting lifecycles — not an execution sequence, authorization order, or universal lifecycle.** Applicable identity, authority, purpose/use basis, permission, participant posture and context-validity constrain **every governed act from the first query or material use onward**. **Later consent or clinical adoption never retroactively authorizes earlier disclosure, research, model training or experimentation.** Revalidation, refusal, revision and termination are available throughout. Not every aggregate computation needs an identical consent artifact — the **applicable basis must be established for the particular act**. This mirrors thesis `§8`: two governed loops with **authority gates between**, not a pipeline with a permission step.
>
> **Every row below carries 1–9 tracks and 7 ownership dimensions (`§3.2`). The rows are not clinical rows.**

```
╔═══════════════════════════════════════════════════════════════════════════╗
║  GOVERNANCE CONSTRAINT PLANE — crossed by EVERY act, not a stage          ║
║  identity · authority_basis · purpose/use basis · applicable permission   ║
║  participant posture (P35) · context validity FOR THIS ACT               ║
║  [INV-NP] affiliation grants no privilege; real differences represented   ║
║  revalidate · refuse · revise · terminate — throughout                    ║
╚═══════════════════════════════════════════════════════════════════════════╝

  need / risk / opportunity signal            Observation + CM
  intent (patient · clinician · operator)     Care §5a
  ── capability formation ──────────────────────────────────────────────
    discovery that relevant people exist      not located
    cohort feasibility                        not located
    specimen / signal qualification           C3.7 §11, oncology scope
    model match OR model creation             REV-190 open
    experimental evidence generated           row C prohibition applies
    candidate designed for this person        no object located
  ── ↑ stage-impersonation control at EVERY transition ↑ ───────────────
  purpose-bound context grant                 GCE ratified; content absent
  participant acceptance                      P35 orphan; C4.6 rung 5
  ── READINESS (Care §5b projection 3) ────────────────────────────────
    resource / item / instrument assembly     no owner located
    supplier + consignment + delivery         commerce/fulfillment tracks
    facility · sterile processing · capacity   service-operations track
    on-site personnel + credentialing         workforce track
  ──────────────────────────────────────────────────────────────────────
  decision + execution authorization          Care §5b projections 1–2
  care commitment / order / enrolment         care_commitment OPEN
  manufacture / prepare / release decision    release ≠ adoption
  execution by humans and/or machines         command boundary orphan
    ↳ CONCURRENT CONTROL of a shared variable  ** H15 — not located **
  exposure + execution receipt                not located
  outcome / adverse event / non-response      REV-174 orphan
  monitoring / recall / revision / re-dose    accepted pharmacy scope only
  transfer / substitution / closure           care_obligation, no table
```

**Must never collapse:** information exchange ≠ interpretation ≠ command authority · command acceptance ≠ execution ≠ demonstrated patient effect · scientific evidence ≠ manufacturing release ≠ clinical adoption ≠ actual use · sample time ≠ analysis time ≠ receipt time · **independently valid participants ≠ a safe assembled system** (`H15`) · recording an action ≠ the action occurring.

---

## §9 — Hypotheses and falsifiers

`resolved` / `open` / `insufficient_evidence` are all permitted (`§18.3`).

| ID | Hypothesis | Counter | Falsifier |
|---|---|---|---|
| **`H16`** | **The subject is mis-scoped as clinical wherever it has been named** — the coordination physics apply to `service-operations`, `commerce`, `scheduling` and workforce tracks with no `clinical_owner` at all | clinical tracks are the only ones with genuinely hard coordination | **Run the `§3.2` lattice on the knee-replacement readiness seed.** If every non-clinical cell has an owner and a rule, `H16` dies and the subject narrows legitimately |
| **`H15`** | **Individually admitted participants issuing individually permitted commands can produce a collectively unsafe assembly** — Care `§9a` gives participation, context-admission and influence; it does **not** establish coupled-control safety for two controllers influencing one physiological variable | `§9a`'s three gates plus P35 posture per participant suffice | Trace a two-controller seed. Name composed control responsibility, interaction constraints, timing, conflicting objectives and who resolves. If `§9a` + P35 answer it, `H15` dies |
| **`H17`** | **`readiness` has specified semantics and no owner** — Care `§5b` names it as one of four projections and nothing in the estate assembles resources, items, instruments, suppliers, facility capacity or on-site personnel against a scheduled act | D3 + Settings + OFC + D6 already compose it | Trace the 30-item readiness seed end to end through existing owners |
| `H0` | The care↔biology↔evidence↔research↔outcomes account is not adequately represented, reconciled or routed | `REV-189` + `REV-190` + GCE + P35 + Care `§9a`/`§1a` compose it | attempt the composition from those six. **No claim about history or about why prior arcs omitted it** |
| `H1` | No carrier composes the arrangement end to end; seams break at the joins | the pieces compose once routed | trace seeds with attributed state, authority, evidence, time, commitments, effects, response duties and residual uncertainty at every consequential transition |
| `H2` | GCE's boundary-contract **content** is absent | spine + `GRD-034` suffice | find any accepted field-level boundary-exchange contract |
| `H3` | Exposure cannot be reliably reached from a recall | derivable by source-preserving composition; **no new object needed** | attempt the derivation. **Both directions count** |
| `H4` | No general privacy-preserving discovery mechanism is located | C3.7's stack generalises | trace on C3.7 primitives only. **A repository gap is an architectural finding, not a legal conclusion — legal/regulatory constraints remain in scope as operating constraints** |
| `H5` | The episode anchor survives clinician departure but not operator exit, producer insolvency or consent expiry — **an episode identifier is not a successor undertaking** | the anchor solves all four | name who retains or accepts the duty, how refusal is represented, what happens when no successor exists. **Clinical participation in reasoning is not automatically an obligation-successor mechanism** |
| `H6` | P35's eight modes are an adequate vocabulary but not an adequate model — supervision, delivery mode, emergency authority, execution delegation and autonomy degree may be separate dimensions. **Care `§5b.1` already factors four of these** | eight modes plus context binding suffice | express a supervised-autonomous posture in one mode without ambiguity; reconcile against `§5b.1` |
| `H7` | Producer selection is not covered by existing neutrality law | `GRD-032/034` + inv 29 + Care `§4` + C4.6 `C6` + `§9a` `sponsor/incentive` cover it | construct a selection case none of them constrains |
| `H8` | The arrangement already binds present-day care | it binds only novel modalities | present-wedge seeds — **present leverage only**, cannot decide frontier adequacy (`§18.2`) |
| `H9` | **Action-relative context validity is unmodelled** — prior authorization plus good provenance does not establish that the world is still suitable for the next act | Care `§4` action-critical freshness covers it | trace a changed-scene seed **and** a changed-during-manufacture seed; name which facts must be current, how currency is established, tolerated uncertainty, who may pause or reject |
| `H10` | Control timescales are conflated | already separated | detect both failures: OMNI as a remote dependency for immediate device safety, and local completion falsely closing care obligations |
| `H11` | Option preservation is recognised (`REV-189`) but not actionable | adequately routed to general care | trace an option-foreclosure seed |
| `H12` | **`[INV-NP]` is not composition-tested in either direction** — neither unearned privilege nor flattening of real operating differences | `T0-14` + inv 29 + `GRD-032` bind it | the two tests at `§3.4` |
| `H13` | Participation postures are **assigned, never earned** — no promotion on evidence, no demotion on signal | assignment plus revocation suffices | `§17.F1` |
| `H14` | **Reliance on an opaque-but-attested claim is unmodelled** | `externally_committed_truth` + `GRD-030` cover it | `§17.F3` |

---

## §10 — Stressor axes (inputs to the generator)

`track_mix` (how many of the nine) · `owner_spread` (how many of the seven, across how many organizations) · `production_locus` · `patient_specificity` · `capability_existence` · `execution_agency` · `concurrency` (how many actors change one variable at once) · `adaptivity` · `control_timescale_spread` · `readiness_dependency_count` · `irreversibility` · `obligation_horizon` · `principal_count` · `regulatory_settledness` · `producer_permanence` · `institutional_willingness` · `disclosure_openness` · `initiating_principal` · `participant_ownership` (third party → OMNI-operated) · `connectivity`.

---

## §11–§15 — Frozen question set

**§11 Context and participation** — `Q-ECB-1` boundary-object content vs ratified spine · `1a` which of purpose · intended act · recipient · minimum-necessary envelope · per-fact provenance · adopted-vs-unadopted · freshness · uncertainty · permitted use · prohibited secondary use · retention · expiry · revocation · onward disclosure · required response · capability/model version · receipt and destruction proof · `trust_transfer_record` are **contract terms** vs **derivable** · `1b` relation between CNS `§9.1`'s internal packet and a boundary object · `1c` `trust_transfer_record`: specify or route (**default route**) · `1d` which disclosures should **not move data at all** · `1e` context as production input (`H9`) · `1f` how Care `§9a`'s per-contribution semantics relate to a boundary object · **`1g` how a participant receives what its authorized task needs without receiving the whole record — route is not authority, route is not meaning, and connectivity is not permission**

**§12 Posture and command** — `Q-ECB-2` **`REV-188`** ownership (distribute · create one owner · or **explicitly re-defer with a reason**) · `3` binding grain · `4` separate dimensions vs one enum, reconciled against Care `§5b.1` (`H6`) · `5` what positively constitutes an execution **receipt** · `6` the `Q-DL18-4` dependency · `7` Federation's missing non-human/agent modeling (**default route**) · `7a` control-timescale separation (`H10`) · `7b` earned vs assigned posture (`H13`) · `7c` evaluator independence for posture change · **`7d` composed control responsibility when two actors influence one variable — interaction constraints, timing, conflict resolution, escalation (`H15`)** · **`7e` validated local behaviour on connectivity loss; there is no universal stop-everything or continue-everything fallback**

**§13 Readiness and assembly** *(new — `H17`)* — **`Q-ECB-23`** who owns assembling the resources, items, instruments, implants, consumables, suppliers, facility capacity, sterile-processing turnaround and on-site personnel required by a scheduled act · **`24`** how a supplier or consignment holder learns what is needed, when, and on whose authority · **`25`** what `readiness` state must exist before execution authorization may be granted, and who may refuse on readiness grounds · **`26`** how the same referent (an implant, a consumable, a device) is linked across clinical, service, catalog, commerce and fulfillment records **without ownership change or duplication** (Care `§1a` moisturizer `[INV]`) · **`27`** is `care_coordination_owner` the owner of readiness, or a distinct role

**§14 Discovery, privacy, demand** — `Q-ECB-8` are aggregate opportunity · cohort feasibility · anonymous eligibility · notification · re-contact · clinical qualification · identity release · enrolment · lead generation · executable case constitutionally distinct · `9` does C3.7's stack generalise (cheaper hypothesis; test first) · `10` scope of a discovery mechanism · `10a` **disclosure risk over time** — repeated queries, rare cohorts, overlapping populations, deduplication, changing permissions · `11` the six collapsed demand products · `11a` when a query shapes what a producer develops, what interest does the patient acquire · `11b` **patient-initiated** capability formation (`§17.F5`)

**§15 Selection, exposure, containment, obligation** — `Q-ECB-12` is producer selection already constrained, or is there a hole (burden on finding the hole) · `13` separability of trusted integration · admitted capability · preferred partner · clinically recommended option · payer-mandated option · patient-selected option · OMNI-owned product · `14` **HARD** Selection Accountability: consult and test; declared reliance inherits the hold; never extend or promote · `15` **institutional resistance, mandatory** · `15a` the two `[INV-NP]` tests (`H12`) · `16` **symmetric burden** — unified exposure record **or** source-preserving composition; test the composition first · `17` which lineage axes are mandatory, per-modality, or never OMNI's · `18` does layered containment generalise past pharmacy scope · `18a` mandatory-action-with-compliance-tracking (`§17.F4`) · `19` staging observation → adjudicated concern → containment → accountability · `20` which anchor makes an obligation survive (`H5`) · `21` `REV-174` prerequisite or consumer (**default consumer**) · `22` option preservation as a capability (`H11`)

---

## §16 — Scenario GENERATOR — not a scenario list

**R1–R3 hand-listed 10–17 scenarios and called it a minimum set. Wrong artifact class.** The operator is right that the arc needs *"100 scenarios, 1000 scenarios"*, and the estate's precedent is explicit: C3.7's library is *"breaker-heavy (**NOT '250 because 250'**)"*, organised around **breaker families** with a coverage manifest, and — **verbatim** — *"Rows authored by Nick + Knox … **Opus does NOT author the rows.**"*

**Therefore this carrier specifies the generator and authors no library.**

### §16.1 Generation rule

A scenario is a point in the `§10` axis space plus **at least one breaker**. Coverage is measured by **breaker-family × axis-extreme**, never by row count. **A scenario earns its place by discriminating between two architectural answers** — not by being interesting or futuristic.

### §16.2 Breaker families — the coverage obligation

Mandatory, each to be populated by Nick + Knox:

**Track and ownership** — a contribution misrouted to the clinical track · a non-clinical act blocked by a clinical gate · two ownership dimensions collapsed into one actor · the same referent duplicated because its role changed · a commerce action demanding clinical consent it does not need.

**Readiness** — an item missing at the moment of execution · a supplier not told · consignment present but unattested · sterile processing not returned · a credentialed rep absent · capacity double-booked · a substitution arriving without authority.

**Time and validity** — sample time vs analysis time vs receipt time diverging · a stale authorization relied on · a scene changed since authorization · a state changed during manufacture · an expired consent with work in flight.

**Duplication and routing** — the same event arriving by two paths and being treated as two corroborating observations · a repeated delivery causing a repeated action · a route mistaken for authority.

**Concurrency and coupling** — two controllers on one variable · individually valid commands that conflict, overshoot or oscillate · an automated process proceeding on assumptions a human just invalidated · unclear conflict resolver.

**Authority and impersonation** — a statement mistaken for a command · extraction converting a note into command authority · ACK as custody · acceptance as execution · execution as demonstrated effect · release as adoption · model evidence as observed response · a charting requirement blocking acknowledgement of an authorized bedside act.

**Participation change** — a participant joining mid-episode · leaving · being revoked · muted · re-entering · unknown-at-start · refusing OMNI's terms · withdrawing consent with work in flight.

**Affiliation and topology** — the two `[INV-NP]` tests: affiliation-only variation (no privilege may appear) and substantive-fact variation (the difference must be represented).

**Degradation** — connectivity loss · a remote dependency in an immediate safety loop · partial execution · unknown state · silent failure · a degraded rail presented as reliable.

**Continuity and disappearance** — producer insolvency · operator exit · clinician departure · cross-federation transfer · long-horizon obligation with no successor · recall after the producer is gone.

**Capability formation** — patient-specific design · irreversible material consumption · limited or non-replaceable specimen · patient-initiated discovery · a query shaping what gets developed · experimental evidence mistaken for clinical truth.

**Neutrality and incentive** — paid placement · accrual pressure · margin-sensitive authorization · commercial outreach disguised as care evidence · OMNI-operated self-dealing.

**Honest-null** — the correct answer is no intervention, no capability, no eligibility, or refusal — and the system must represent that as a valid outcome rather than a failure.

### §16.3 Seeds — NOT the library

The operator's two improvised examples are **seeds whose only job is to test whether the generator produces them and their neighbours.** They are explicitly not the spec and not promoted.

| Seed | Purpose |
|---|---|
| `SEED-READY` | **knee replacement: does the vendor know to send it; are the 30 items anticipated** — the primary test of `H16` and `H17`, and the reason the subject is not clinical |
| `SEED-OR` | multi-participant operating room with concurrent control of a shared physiological variable — `H15`, `H9`, `H10`; laboratory result with three distinct timestamps; a statement that is not a command |
| `SEED-BIO` | patient-specific therapy with a material context change during design or manufacture — `H9`, irreversibility, specimen limits, `H0` |
| `SEED-RECALL` | discovery after exposure; affected vs unaffected reach without converting hypothesis into conclusion — `H3` |
| `SEED-AFFIL` | the same case with a third-party producer and with an OMNI-operated Core Capability — `H12` |
| `SEED-OPAQUE` | a participant returning a valid answer that will never expose its intermediates — `H14` |
| `SEED-GONE` | producer insolvency mid-obligation — `H5` |

**Explicit test of the generator:** if it cannot produce `SEED-READY` and its neighbours from `§10` + `§16.2`, the generator is wrong — **which is the same finding as the subject being mis-scoped as clinical.**

### §16.4 Negative controls — predicates, not state labels

**The illegal substitution is the failure. The first state in each pair is not inherently wrong.**

| Valid | Invalid — the substitution |
|---|---|
| an ACK recorded as an ACK | an ACK recorded as accepted custody or a discharged duty |
| a simulated or model response labelled as such | presented as an observed patient response |
| a refusal or no-intervention recorded as itself | recorded as an intervention performed |
| an approved candidate recorded as approved | recorded as an actual exposure |
| a manufacturer's release decision recorded as theirs | treated as clinical adoption |
| a stale authorization recognised as stale | relied on for a new act |
| one event arriving twice, deduplicated | counted as two independent corroborating observations, or executed twice |
| an unaffected party excluded from a recall | an affected party missed, or an unaffected party notified as exposed |
| evidence used within its permitted purpose | used for an impermissible secondary purpose |
| a clinician's statement recorded as an attributed communication | converted into a device command or proof a setting changed |
| an OMNI-operated participant on identical terms | given access, routing or continuity a peer could not obtain |
| a real operating difference represented | flattened into sameness because affiliation differs |

**A written trace is design evidence — not proof of a deployed system, counterparty agreement, or clinical safety.**

---

## §17 — Frontier mechanisms

Each carries its **non-transfer** per thesis `§3.5` Lens-B discipline. **Hypotheses to test, not accepted architecture.**

**F1 — Earned posture, not assigned.** *(Tesla: shadow mode, staged rollout, per-build tracking.)* P35's modes are assigned; nothing lets a participant **earn** a more permissive posture on evidence or be **demoted** on signal. The estate has the prohibitions (*"no truth by generation"*, `sim/truth firewall`), not the promotion pathway. **Non-transfer:** Tesla owns the fleet and promotes unilaterally; OMNI owns neither the participant nor the only stopping power. → `H13`

**F2 — Evaluator independence for a posture change.** **Already named, mechanism missing:** `D0OL-GRD-013` (depth ≠ independence) plus Care `§9a`'s `correlation/independence class` and `sponsor/incentive`. Missing: the mechanism attaching independence to an authority increase. **Non-transfer:** Anthropic evaluates its own model and owns the deployment decision; OMNI owns neither. → `Q-ECB-7c`

**F3 — Reliance on a verifiable-but-opaque assertion. (Corrected.)** R3's *"Palantir evaluates against one ontology it controls"* is **withdrawn** — the estate already verified cross-org ontologies and governed write-back (`K5`), and current documentation describes shared ontologies and peering. **The surviving question is not a platform limitation but an operating one:** what may OMNI rely on from a participant that returns a valid answer and will never expose its model, data or intermediates? `GRD-017` forbids a generated rationale as high-stakes explainability, so narrative is not the instrument. Candidate shape to test: an **attested claim** carrying provenance, evaluator identity and independence class, stated error characteristics, scope of validity and expiry — **without internals**. **Non-transfer:** a shared ontology is an agreement between parties who chose to share one; it does not supply authority where no party has consented to a common one. → `H14`

**F4 — Mandatory action against a configuration, with per-instance compliance.** *(Aviation airworthiness directive — already in the comparator registry as Airplane-as-object, never drawn on.)* Containment as a posture is weaker: an AD is **mandatory**, **grounds the instance** until complied with, and tracks compliance **per tail number** in a ledger outliving the manufacturer. **Non-transfer:** aviation has one regulator with grounding authority; care has layered, non-interchangeable stopping powers, which must not be flattened. → `Q-ECB-18a`

**F5 — Patient-initiated capability formation.** The estate is operator- and clinician-initiated throughout; the operator's rare-mutation example is patient-initiated. C3.7 carries a patient/family front door and patient-initiated entry — **which must not be conflated with a completed patient-commissioned development model.** **Non-transfer:** a consumer-marketplace framing imports the lead-broker posture `GRD-032` forbids. → `Q-ECB-11b`

**F6 — Existing medical-device interoperability work is the closest real antecedent. (Adopted from the Knox note; unverified here.)** FDA's interoperability definition reportedly includes **exchanging and using information to act on or control another product** — i.e. the problem is not defined as getting device data into a record. **ICE / MD PnP** addresses patient-centred integration, real-time decision support, **safety interlocks** and **closed-loop control**, with **OpenICE** as a research/reference implementation. **IEEE 11073 SDC / IHE SDPi** addresses device-to-device interoperability at high-acuity points of care — and the inspected publication reportedly **leaves external control outside its specified capabilities**. **Non-transfer:** these supply mechanisms and vocabulary, not OMNI's authority model, and **architectural direction ≠ published specification ≠ implemented interoperability ≠ authorized clinical system.** **Status: relayed, not verified in this repository — Gate-1 capture obligation** (`§19.2.8`). → `H15`, `Q-ECB-7d`

**F7 — Three responsibilities, placement unresolved. (Adopted from the Knox note.)** **Device-local control and immediate safety** — at the device or a qualified local controller, with its own timing and failure contract; **no unexamined dependence on a remote round trip.** **Live case coordination** — shared context, role-specific views, commitments, interlocks, conflict handling; OMNI may supply, host, or interoperate with another qualified local platform, and **that allocation is an explicit decision.** **Longitudinal care and business operation** — identity, clinical meaning, orders, obligations, finance, scheduling, cross-organization transfer, outcomes, recall — **connected to the live episode without becoming a synchronous input to every device act.** **Declares no new planes.** The consequence: **OMNI can be central to coordination and continuity without being a transport hop for every signal — and receiving every signal confers neither authority nor operational importance. It must declare, per arrangement, whether it observes, advises, coordinates or commands.** → `H10`, `Q-ECB-7a`

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

`NEW_DOMAIN_REQUIRED` must survive `GRD-026` and `GRD-035` with a named concern no existing owner can hold. **Symmetrically, a new universal record may not be required before source-preserving alternatives are tested.** `FAI_INTERRUPT_CANDIDATE` requires a concrete contradiction. **Prior expectation, recorded so it can be wrong:** `REQUIRES_NAMED_EXTENSIONS` + `NEW_CROSS_DOMAIN_CONTRACT_OR_CONTROL_SURFACE_REQUIRED`.

### §18.2 Three conclusions — never substituted

**Present-wedge leverage** (does inheritance help now — may not decide whether the frontier obligation matters) · **Frontier adequacy** (does the model survive a different operating regime — may not decide whether anything is built) · **Implementation readiness** (what exists in code — may not decide architectural sufficiency). **An architecture result does not imply counterparties agreed, a device is authorized for the envisioned use, or OMNI deployed anything.**

### §18.3 Findings may stay open

Each carries `resolved` / `open` / `insufficient_evidence`, its four evidence dimensions, and its FAI posture.

---

## §19 — Gates

### §19.1 Three gates

| Gate | Purpose | Acceptance contract |
|---|---|---|
| **G0** *(this file)* | State the question; recover inheritance; install the decomposition; specify the generator, breaker families, verdicts, proof obligations | Nick + Knox accept / amend / reject |
| **G1** | **Output #1: run the `§3.2` decomposition** and report populated / draft / empty cells. Then: remaining inheritance; bounded frontier reality; scenario library **authored by Nick + Knox** from the generator; trace with negative controls; record unresolved findings. **Investigation and tracing may iterate — no artificial blind phase** | decomposition delivered; coverage manifest satisfied by breaker-family × axis-extreme; every `H` resolved **or** explicitly `open`/`insufficient_evidence`; institutional-resistance test run; both `[INV-NP]` tests run |
| **G2** | Deliver the **integrated operating account** plus adjudicated architecture consequences, destination map, conformance seeds, current-build constraints — **and only then, whether the subject needs a name** | one verdict + the three conclusions; **every substantive conclusion has an accepted home OR a governed downstream consumption obligation naming consumer + trigger + acceptance condition**; `REV-188` answered or explicitly re-deferred |

**The G2 acceptance test (Knox's, adopted):** *can a fresh reader explain how the assembled care arrangement behaves — not merely identify its participants, permissions and records?* **More named fields and more gate prose will not satisfy it.**

**Mandatory inside G1:** the institutional-resistance test. **Separate and optional:** wedge selection, market sizing, financing, GTM.

### §19.2 Method law

1. **Inheritance verification precedes assertion, not capture.** Capture candidates as **provisional**; verify before asserting anything as **new, settled or authoritative**. *(Demonstrated: `§17.F2` demoted after Care `§9a`; `§17.F3` withdrawn after the residual/moat frame.)*
2. **A comparator claim is a novelty claim** and owes the same check — against the comparator registry and the residual/moat frame (`§0.3`, `D0ECB-REV-005`).
3. **Source floor declared and discharged per output.** Delegated scans are evidence, not an authored read.
4. **One carrier** until it demonstrably cannot hold the content. **Opus does not author scenario rows.**
5. **No parallel lanes, agents or evidence runs before G0 acceptance.**
6. **`METHOD-000` default.** One current-state surface — `§1`.
7. **Gate 1 must open** the six AI-corpus registries, the C3.7 `G` terminus, the Demand/counterparty disposition, the residual/moat frame **in full**, and Care `§1a`–`§22` in full — or record why not applicable.
8. **External sources must be captured with provenance and maturity before any conclusion depends on them** — `research_demonstration` · `clinical_investigation` · `authorized_bounded_use` · `established_operational_capability` · `speculative_future_assumption`. **A statute or specification is authoritative about its own content without proving a deployed capability.** The `§17.F6` sources are relayed and unverified here.
9. **No absence claim without its coverage; no history claim from a current-state search.**
10. **Stop writing "the biggest discovery yet" around each recovered passage.** Report the finding, its authority, its maturity, and move on.

---

## §20 — Governance receipts

### §20.1 Read-graph evaluation COMPLETE; catalog registration OWED

`AGENTS.md`: *"a standalone lane requires **no** launch envelope, integrator, or parent integration transaction"* — inheriting integrator vacancy as a global block was wrong. The reason to serialize is a **verified overlap**: the FAI branch has modified `01_master_corpus_catalog.md`, `04_manifest_read_graph.md` and `future_work_registry.md`. **Overlap is collision risk, not proof of conflict.**

**Requested: one bounded intake transaction** — this carrier's catalog row plus route `#9w` only, on this branch, with a recorded freshness/collision check, returning exact head/blob and per-file stats. **Not requested:** unrestricted governance write, a FAI merge, additional queue or registry rows by default, or a governance cleanup.

### §20.2 Catalog row — `add_tier2`

```
| `.cursor/plans/v4_ECB_G0_external_capability_boundary_reconnaissance_2026-09-11.md` | ECB Gate 0 — one patient, many independently-owned participants (reconnaissance + question definition) | markdown_doc | plan_or_roadmap | cross_domain, architecture_governance, federation, rbac_authority, cns_orchestration, ordered_fulfillment, d6_commerce, d3_scheduling, business_ops_workforce, trials_research | analysis_nonbinding | active | no | yes | no | none | none | `.cursor/plans/v4_ECB_G0_external_capability_boundary_reconnaissance_2026-09-11.md` | add_tier2 | consult_if_routed | user_knox_required | yes | routed | targeted_semantic | review_queue | routed | Gate-0 recon + question-definition carrier (R4) for the ECB arc. Arc state at §1. Subject NAME deferred by design per GRD-026 decompose-before-naming; the decomposition (Care §1a nine tracks × thesis §7.5.1 seven ownership dimensions × Care §5b four admissibility projections) is Gate-1 output #1. NOT clinical-scoped. Specifies a scenario GENERATOR + breaker families; authors no rows (C3.7 precedent: rows authored by Nick + Knox). Inherits Care §1a/§5b/§5b.1/§9a, Federation inv 29 / T0-14, residual/moat Palantir observation, C3.7 §11/§12 + REV-189/190, P35/REV-188, GCE, REV-141/174/184, C4.6 post-delivery obligations. Originates no doctrine; mints no domain; promotes nothing; does not reopen FAI. | ecb_arc_gate0 | ECB-G0 |
```

### §20.3 Read-graph evaluation — performed

One new Tier-2 consult route `#9w` (key verified free on both refs), triggering on: participation posture of an external or OMNI-operated capability · command or execution authority over a non-human actor · **readiness and resource assembly for a scheduled act** · capability formation from patient context · intervention lineage, released configuration or exposure · recall-to-exposed-person reach · privacy-preserving discovery or opportunity/demand separation · obligation survival past producer/operator/consent disappearance. **Also loads:** `v4_C3_5F5` §P35-RENAME · `v4_C3_5G4` §1.5 · `v4_C3_5G4_1` §B · `v4_C3_7` plan §11/§12 · **`v4_C4_care_operating_model_capture.md` §1a/§5b/§5b.1/§9a** · `federation_contract.md` inv 29 · `v4_C4_residual_moat_and_network_formation_doctrine.md` · `08_open_review_queue.md` `REV-188/189/190/141/174`. **Read rule** `consult_if_routed`. **Arc state resolves from the carrier's `§1`; the route carries none.** Pure addition. **Caveat:** does not reopen FAI; Selection Accountability is under acceptance hold.

**Finding — P35 has no task-entry route.** R2's *"nothing routes to P35"* was false and remains corrected: route `10` names `agent-runtime/P35/tools`; route `9a` carries the C3.5–C3.8 termini. **The narrower finding stands:** both fire on v4-spine authoring or C3.8 convergence, not on doing this work. → `D0ECB-REV-001`.

**Finding — the super-frame has a source carrier, no accepted disposition, and no task-entry route;** its promised registry entry was never written (history-verified). Whether one is needed is undecided. **No claim about why prior arcs omitted it.** → `D0ECB-REV-002`.

### §20.4 Open-review rows — PROPOSED, land only if authorized

`D0ECB-REV-001` P35 task-entry route absent · `D0ECB-REV-002` super-frame disposition + never-written registry entry · `D0ECB-REV-003` `add_tier3` invalid enum in the FAI arc-opened handoff (corrected here; not this arc's to fix) · **`D0ECB-REV-005` comparator re-derivation** — *a Palantir overreach already corrected twice in the residual/moat frame was produced a third time in this carrier's R3; candidate guardrail: a comparator claim owes the same registry check a novelty claim owes.* **Rows are authored for one bounded transaction only and are not automatic writes.**

### §20.5 Future-work registry — no row proposed

A registry entry must not be created to make a loss narrative true after the fact. The super-frame is preserved in C3.7 `§12`, its mechanisms in `REV-189`/`REV-190`, and its live handling in this arc's governed scope. A distinct entry earns its place only if G1/G2 identifies an obligation genuinely outside this arc's scope.

### §20.6 Cross-arc collision check

FAI G1 / Authority object — PAUSED, frozen, blob `9835715e`, read-only, five-posture ladder · FAI Selection Accountability — under hold, consult and test only · **Care capture `§1a`/`§5b`/`§5b.1`/`§9a`/`§5a`** — FROZEN against edit, **readable**; strongest read dependency; route `#9e`, material claims via the evidence ledger and native carriers; **no Care edit, no Care promotion** · **C3.7** — primary content inheritance; **no promotion through this arc** · `REV-189`/`REV-190` — inherit, do not build, do not close · Federation inv 29 — cite, **no contract edit** · **residual/moat frame** — candidate/nonbinding strategic frame; cite factual observations, **do not promote strategic conclusions** · C4.6 Rx — cite; generalise past pharmacy or the arc has no reason to exist · Insurance Gate 2 / Method PR #19 — no overlap / non-binding.

---

## §21 — Gate-0 stop receipt

**Produced:** this one carrier, revision R4. **No scenario library. No architecture. No name for the subject.**

**Discharged this pass:** the operator's clinical-scope objection **answered from Care `§1a`**, a keystone `[INV]` neither review had recovered, and Knox's *"clinical fusion"* label **rejected** with that citation (`§0.1`) · the knee-replacement case decomposed, showing **five of eight rows with no `clinical_owner`** · the four-revision rename pattern diagnosed as **naming before decomposing**, and `GRD-026`'s mandatory sequence installed: **question named now, subject name deferred as Gate-1 output #1** (`§0.2`, `§3.2`) · the Palantir claim **withdrawn** against the estate's own verified observation, and the **third instance of an already-twice-corrected overreach** recorded as a process failure with a candidate guardrail (`§0.3`) · `[INV-NP]` **corrected** to Knox's two-test form, since equal standing is not identical topology (`§3.4`) · **`H15` coupled-control safety** adopted as a real gap Care `§9a` does not close · **`H16`/`H17`** added for mis-scoping and unowned `readiness` · ICE / IEEE 11073 SDC / IHE SDPi adopted as the closest real antecedent with maturity discipline and an unverified label (`§17.F6`) · the three-responsibility placement split adopted (`§17.F7`) · **`§16` replaced by a generator** with twelve breaker families and the C3.7 authorship division, the operator's two examples **demoted to seeds** (`§16.3`).

**NOT done, by design:** no architecture decided · no domain minted · no subject named · no scenario rows authored · no scenario executed · no external evidence captured or verified · no lane or agent launched · no contract touched · no FAI mutation · no Care, C3.7 or residual/moat promotion · no registry or queue write · no shared control-plane surface landed.

**Open and owed:** the `§3.2` decomposition (**G1 output #1**) · `Q-ECB-1` … `Q-ECB-27` · the scenario library (**Nick + Knox**) · `D0ECB-REV-001`/`-002`/`-003`/`-005`, to land only if authorized · catalog row + route `#9w` — **bounded intake authorization requested** · six AI-corpus registries, C3.7 `G` terminus, Demand disposition, residual/moat in full, Care `§1a`–`§22` in full (`§19.2.7`) · `§17.F6` sources unverified (`§19.2.8`) · `main` boot-pointer hazard (Nick).

**Stop condition.** Superseded only when Nick + Knox accept, amend or reject R4. **On acceptance the next authorized act is G1 beginning with the decomposition — nothing else.**

---

## §22 — Amendment log

**R1** (`60619c4f`) — initial authoring. **R2** (`3b9db0c2`) — nine Knox amendments; subject named; *"2035 comes free"* withdrawn; super-frame recovered; `add_tier3` corrected. **R3** (`88e65c07`) — BC-1…BC-4 accepted; renamed to *Care Participation*; `[INV-NP]` installed; Care `§9a` recovered; maturity ladder dissolved; diagram made a constraint plane; five frontier mechanisms added.

**R4** (this revision) — **scope and structure fix, not a rename and not a patch.** Care `§1a` recovered as the keystone answering the operator's clinical-scope question: nine tracks route independently through one interaction, seven ownership dimensions never collapse, and *"care-support instruction"* is already a named track — so **there is no clinical/support boundary, only a decomposition**, and Knox's *"clinical fusion"* label is rejected as a `GRD-026` violation naming the subject after two of nine tracks. Knee replacement decomposed; five of eight rows carry no `clinical_owner`. **The four-revision rename churn diagnosed as naming-before-decomposing**; `GRD-026`'s mandatory sequence installed — the arc is named by its **question**, the architectural subject is **deferred by design** as Gate-1 output #1, `ECB` demoted to a work identifier. **`§16` replaced by a scenario generator** (axes × twelve breaker families × coverage manifest), authorship division adopted verbatim from C3.7 (*"Opus does NOT author the rows"*), the operator's two improvised examples demoted to seeds. **Palantir claim withdrawn** against the estate's verified observation of cross-org ontologies and governed write-back; recorded as the **third instance of an already-twice-corrected overreach** with candidate guardrail `D0ECB-REV-005`. **`[INV-NP]` corrected** to the affiliation test plus the substantive-difference test — equal standing is not identical topology. **`H15`** (coupled-control safety, which Care `§9a` does not establish), **`H16`** (clinical mis-scoping), **`H17`** (unowned `readiness`) added; `§13` readiness question block added. **`§17.F6`** (FDA interoperability definition, ICE/MD PnP/OpenICE, IEEE 11073 SDC / IHE SDPi — adopted as the closest real antecedent, **relayed and unverified here**) and **`§17.F7`** (three-responsibility placement split) adopted from the Knox note. Method law gains: a comparator claim is a novelty claim; Opus authors no scenario rows; stop framing each recovered passage as the biggest discovery yet.
