# v4 — C4.1: OMNI + Polaris — Product Surface + Alignment Core (naming/taxonomy LOCK before spine draft 0)

Document type: `analysis` / concept_note · Authority: `analysis_nonbinding` (`GRD-036`) — a naming/taxonomy LOCK + concept note; **NOT spine prose, NOT a new domain, NOT a new arc, NOT final schema.**
Status: `active` 2026-07-04 (Nick + Knox; Nick's "modes-are-computed-not-six" correction adopted). This is the DEPTH behind **Watch Item 7** (`v4_C4_spine_watch_list.md`). Controlling plan → C4. Registered: catalog (`01`) + read-graph **#9a** canonical input set + WI7 pointer + handoff.
Owed at spine acceptance: none beyond registration (done). Standing flag: git identity unset.

## §0 Why this exists (and what it locks)
Late in the build we realized the **human-facing product surface + its alignment core were undernamed.** The risk it fixes: providers/owners/patients/staff **screenshotting labs, contracts, payroll, skin photos, consents, symptoms into ChatGPT/Claude** → OMNI loses context, provenance, authority, audit, and learning; the model vendors become the workbench and **OMNI becomes backend plumbing.** This note LOCKS the naming + the derivation principle so the spine author cannot flatten it into "Guidance," "copilot," "chatbot," "surfaces," six product brands, or a Palantir-style ontology. **Whoever owns the workbench owns the workflow** (Uber-Eats/Cursor lesson).

## §1 The naming LOCK
- **OMNI** = the daily product, substrate, and **verb**. ("Check OMNI." "Put it in OMNI." "OMNI flagged it." "OMNI won't clear the Rx.")
- **Polaris** = the **alignment core inside OMNI** — the north-star layer that keeps OMNI's movement aligned with source authority, role authority, safety, law/policy, semantic truth, model/capability boundaries, and proof. ("Polaris blocked it." "Polaris says candidate-only." "Polaris preserved source authority." "Polaris found the mapping conflict.")
- **The line:** *OMNI is where the work happens. Polaris is what keeps it true.* / *OMNI moves everywhere. Polaris keeps it aligned.*
- **Naming guards:** NO "OMNI Guidance" (nixed). NO "PGE"/"Polaris Governance Engine" as primary language ("Polaris Core"/"Polaris Layer" only as explanation). NO six separate product brands. **Daily language defaults to OMNI**; Polaris is used for **internal / architectural / enterprise / proof / boardroom** explanation — *"powered by Polaris"* / *"Polaris Core"* may be used where it clarifies the trust/alignment layer, but Polaris is not a separate *daily* product. (Not a rigid ban — you may absolutely say "OMNI is powered by Polaris" in a boardroom.)
- **Polaris is NOT** a new domain · a sovereign brain · a second product · a replacement for contracts · a new source of truth · a magic ontology · an AI agent. **Polaris IS the NAME for the alignment composition already made of OMNI's pre-registered invariants:** `source_authority_map` · domain-owned truth · candidate≠commit · RBAC/authority gates · REV-184 · semantic reconciliation (WI6) · D7/`trace_lineage` · legal/normative policy overlays (WI4) · model/capability envelopes · supply-chain proof · data-value boundaries (G4) · P35 · projection≠authority. **Polaris names the composition; it does not replace the owners** (no god-domain, `GRD-026`/`GRD-035`). **Polaris is not merely internal plumbing — it is also the boardroom PROOF layer:** the explanation of *why* OMNI can safely operate across care, business, AI, data, and action without becoming a chatbot, EMR, marketplace, or proprietary-ontology lock-in.

## §2 THE CORRECTION — modes are COMPUTED, not a hardcoded list of six (Nick's critique, adopted)
A fixed list of six modes is the **wrong unit** — arbitrary and non-exhaustive. It can't cleanly place a disabled patient's **wife wanting a MyChart-style family update** (surrogate/caregiver), a **vendor / payer / regulator**, or a hospital worker who isn't "MA/front-desk."

**The principle — a Polaris "mode" is a *computed governed projection*, not a taxonomy entry:**
> **`Polaris projection + allowed output-classes + gates = f( actor × relationship-to-subject × authority-scope × purpose-of-use × jurisdiction/consent/data-segment )`**

Every term already exists in OMNI (this answers "do they map to existing ideas?" — YES):
- **actor / actor-subtype / represented-principal / surrogate** → **Identity** (human/AI/device/team/system/external actor subtypes; `surrogate_authority`; dyad/linked-identity; `care_relationship`).
- **authority scope / capability** → **RBAC** (4-way spine + attestation).
- **operator/org membership + cross-operator visibility** → **Federation** (legal_entity/brand/site; visibility grants).
- **purpose-of-use** → thesis **§7.6 Network-Governance named access purposes**.
- **role/actor surface; projection ≠ authority** → **Surfaces/Projections (P4/P5, `DEC-033`)**.
- **actor-agnostic resolution + output gating** → **REV-184**.
- **consent / data-segment (42 CFR etc.)** → **D7**.

So **Polaris presents a governed, relationship-and-authority-scoped projection to ANY actor, computed from that tuple** — **exhaustive by construction** (a new actor type is *placed* by the axes, never *added as a new mode*). This is the substrate answer; it also elegantly handles the surrogate-wife, vendor, regulator, and atypical-worker cases without new entities.

## §3 The broad clusters (named PRESETS over the §2 space — for product/UX, NOT the authority model, NOT closed)
Nick's instinct named the natural clusters; here they are as presets (each = a common region of actor × relationship × purpose × authority — **computed, not hardcoded**):
- **Patient-side** — the patient **and their surrogates / family / caregivers / guardians** (via `surrogate_authority` + consent + data-segment; solves the wife-MyChart case). Purpose = personal care. Output: explain / coach / prepare / triage / route; **never diagnose / prescribe / commit.**
- **Care-delivery / action-emitter** — providers/clinicians (+ AI acting under a provider harness). Purpose = care. Output: evidence / candidates / drafts; **provider/domain commits.**
- **Support-staff** — MA / front-desk / coordinator. Purpose = care-operations. Output: role-scoped triage / scripts / forms; **escalation-first; no diagnosis.**
- **Operator / business** — owner / admin / ops / HR / marketing / finance. Purpose = run-the-business. Output: business guidance; **legal/HR/care-affecting changes gated** (WI4/WI5).
- **Enterprise / network** — hospital-system / multi-location. Purpose = govern-the-network. Output: governance/oversight; cross-operator visibility via **Federation + source authority.**
- **Research / quality / compliance / oversight** — incl. **regulators / auditors**. Purpose = learn / oversee. Output: cohorts / audit / quality; gated by source_authority + consent + `knowledge_partition` + the C3.7 economically-blind firewall.
- **External / exchange** — **vendors / partners / payers / external-AI companions (WI1)**. Purpose = exchange. Output: bounded via **P35 + Federation**; external actors are **candidate-generating, not authority.**

These are **presets, not a closed set.** Any actor the presets don't fit is handled by the §2 computation.

## §4 The anti-leakage spine law
**OMNI must be the in-substrate workbench for care and business work. External AI may propose, but OMNI-native (Polaris) interactions occur over governed context, are relationship-and-authority-scoped, provenance-bearing, stored as first-class evidence, and can only create candidates until the appropriate authority commits.** The win over ChatGPT is not a better model — it's **situated context + authority + action-path + proof** (Cursor is powerful because it's *inside* the codebase; OMNI/Polaris is powerful because it's *inside* governed care/business reality).

## §4a — The hard middle (thesis-level — why OMNI + Polaris exist)
OMNI does NOT win by being the biggest model, the prettiest consumer app, the most aggressive marketplace, the largest EMR, or the most proprietary ontology. **OMNI wins in the HARD MIDDLE** — where patient preference meets clinical indication · external-AI advice meets licensed care · local provider judgment meets evidence + liability · business incentive meets safety · operator ownership meets patient authority · semantic chaos meets source authority · model output meets action gates · data value meets consent + proof · enterprise governance meets human care. Amazon / Apple / OpenAI / Anthropic / Palantir / Epic each own powerful *edges*; **OMNI's fight is the messy CENTER where care actually becomes action** (we are the internists/hospitalists of this world — the ones holding the hard middle). **Polaris is the alignment core for that hard middle** — it does not make the decision for everyone; it keeps the work source-authoritative, role-scoped, legally/policy-aware, safety-bounded, and provable **until the right authority commits.** *(Candidate **thesis-level** positioning — the spine author should weigh elevating "the hard middle" into the thesis's core, not leaving it only here.)*

## §5 Interaction artifact (candidate pattern; final schema → C5)
**`polaris_event` / `omni_interaction_event`:** actor · role · authority-scope · represented-principal · subject (patient/encounter/provider/employee/tenant/document/contract/cohort) · relationship-basis · purpose-of-use · projection(mode) · prompt/task · `context_packet_id` · source-fact refs · model/tool + version · answer · candidate-action(s) · uncertainty/confidence · safety flags · required-authority · commit/reject/override state · retention scope · visibility scope · learning-use permission · audit trail · downstream obligations. **A governed artifact in OMNI's proof/data-value fabric — NOT a vendor chat log, NOT screenshots.**

## §6 Output classes (REV-184 applied)
explain · guide · triage/advise · draft · **candidate-action** · **configuration-change-candidate** (high blast-radius; WI5) · **commit** (ONLY where actor/domain authority permits). **AI proposes → Polaris aligns/checks/gates → the authorized actor/domain commits. AI never commits clinical truth.**

## §7 Storage / learning / data-value rule
Every interaction routes into the correct **G4 data-value loop** (personal-care / local-operator / network / research-RWE / model-product) **only with permission + source authority.** No silent reuse; no vendor-chat-log-as-memory; no covert extraction; no screenshot-workflow-as-default. Every interaction must answer: what did it see · who asked · under what role/authority · what did it output (info/candidate/committed) · what source facts · what model+version · who sees it later · may it be used for learning/QA/review/research/training · which loop.

## §8 Landing zones
Surfaces/P5 · CNS/`context_packet` · REV-184 · RBAC · **Identity (actor/surrogate/represented-principal)** · D7 · `source_authority_map` · Federation · D6/BIZOPS · Settings/TenantOps · `semantic_reconciliation_record` (WI6) · legal/policy overlays (WI4) · P35 · Build-OS/evals · G4 data-value economy. Ties to Watch Items **1 / 4 / 5 / 6 / 7**.

## §9 Spine-author instructions
- Preserve **OMNI** (daily product/verb) + **Polaris** (alignment core, NOT a new domain). Modes are **subordinate, computed projections.**
- Do NOT: use "Guidance"; brand six products; call it chatbot/copilot as final taxonomy; **hardcode six modes as the authority model** (they are computed per §2); bury it under generic "Surfaces"; turn Polaris into a god-domain/sovereign-brain.
- DO: derive projections from **Identity × RBAC × Federation × purpose-of-use × REV-184 × D7-consent**; reconcile against the FULL care-first estate (not just C3.8); route field/schema mechanics to C5.

## §10 Boardroom contrasts
- **Palantir** sells ontology as an enterprise application layer; **OMNI** uses **Polaris** to govern care+business action over source-authoritative clinical/operational reality.
- **OpenAI/Anthropic** provide models; **Polaris** keeps model outputs *candidates* until source authority, role authority, safety, and proof permit action.
- **Epic** standardizes the record; **OMNI** operationalizes the work; **Polaris** keeps it governed.

## §11 Concrete examples
- Provider "is this zoster?" → OMNI answers on the real chart (role + image provenance + source facts + escalation thresholds); Polaris keeps it candidate-only until the provider commits.
- Owner "how should I comp this provider?" → OMNI analyzes payroll/contracts/incentives/performance; Polaris flags legal/HR/care-affecting gates + incentive-that-could-bend-care (WI4/C3.7).
- Front desk enters "endoromphin" (meaning enclomiphene) → OMNI preserves the source term + proposes mappings + blocks unsafe automation; Polaris prevents bad config from becoming care authority (WI6).
- Disabled patient's **wife** wants an update → computed **surrogate/caregiver** projection (Identity `surrogate_authority` + consent + data-segment); Polaris scopes what she may see/do. **No new "mode" needed.**

## Stop / authority
`analysis_nonbinding` (`GRD-036`); naming/taxonomy LOCK + concept note (WI7 depth). **No spine prose, no contract edits, no new arc.** Registered in catalog + read-graph #9a + WI7 + handoff. Standing flag: git identity unset.
