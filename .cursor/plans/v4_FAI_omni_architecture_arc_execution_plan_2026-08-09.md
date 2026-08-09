# v4 — FAI — OMNI Architecture — ARC EXECUTION PLAN

Document type: `handoff_or_readiness_gate` (the plan the next agent runs; **not** the architecture)
Authority: `analysis_nonbinding`. Binds nothing. Mints nothing.
Status: **`execution_plan_R1 · pending_nick_knox_acceptance · nothing_started`**. Current state lives in the charter §1, not here.
Domain(s): `architecture_governance` · `cross_cutting`
Lifecycle role: converts the accepted Gate-0 charter into an executable program. **The next agent executes this. It does not redesign it.**
Source-of-truth relationship: subordinate to the charter. Where they differ, the charter controls.
Manifest action: `add_tier2` **PROPOSED** — not landed.
Review gate: `user_knox_required`

**Companion:** `v4_FAI_G0_foundational_architecture_reconciliation_and_install_charter_2026-08-09.md` (R3) — the *why*, the decisions, the non-actions. **This file is the *how*.**

---

## §1 — Two structural changes to the reviewed arc, and why

Knox proposed eight gates, eight whole-estate source lanes and roughly fifty named methods, with external-mechanism study at **G5** and profile pressure as the qualifier. **The arc is directionally right and backwards in exactly two places the operator named.**

### §1.1 The external-mechanism study moves to the FRONT — it is the first substantive act, not the fifth gate
**Knox's order:** recover the whole estate → synthesize OMNI's architecture → build profiles → *then* compare against ISO 42010, SEI, FHIR, IHE, AUTOSAR, AWS, Palantir.

**That is the exact failure this arc exists to correct.** We have carried FHIR in the comparator registry for months **as a payload standard and never as a method**, and it cost six months. Putting the method comparison at G5 means synthesizing an artifact-role model out of OMNI's own history, and *then* discovering we built a worse version of a solved problem. **The artifact-role model is the thing being decided, and established practice already answers it.**

**Corrected: the external study is cheap, bounded, and first.** A handful of primary sources, days not weeks. Its output is the **artifact-role model and the variation model** — which is what everything downstream classifies into.

### §1.2 The acceptance test is ROUTING, not profile pressure — Insurance is not the qualifier
Profile pressure proves the architecture can **express** Insurance. **It does not prove the documents are in the right place and findable**, which is the actual failure. The operator is right: an agent can write convincing prose that Insurance is well-modelled while the estate remains unnavigable.

**The real test is already written in both reviews' own closing lines:** a cold agent entering Insurance, Pharmacy, Gmail, payroll or a new federation is routed to the correct architecture, profile, variation points and proof obligations **without knowing any historical filename or this conversation.** That is **mechanically testable with a fixture**, it can be run early, and it fails loudly. **It replaces profile-pressure-as-qualifier.**

Profile declarations still get written — as **structural proof that the declaration format works**, not as proof the domains are correct.

### §1.3 Consequence: reconciliation becomes CLASSIFICATION, and it distributes
**Knox's G2 pays the whole-estate synthesis tax up front, before anything is installed. That is the big bang, and it is why five prior arcs' findings evaporated — there was nowhere to put them.**

**Inverted here:** install the container, then **classify existing artifacts into it in place** — what role, what authority, what maturity, where it lives — **without rewriting them.** That is cheap and mechanical. **Deep reconciliation then happens per area, when that area is next touched, because a home now exists for the finding.** Five gates, not eight, and the expensive part is distributed instead of front-loaded.

**Honest answer to *"what would LangGraph or IBM or anyone with an app do?"*** — considerably less than this. A `docs/architecture/` directory, ADRs, a README that says what the system is, and a rule that changes go through it. **Most teams have less material than we do. What they have that we do not is one obvious entry point and an enforced change path.** That is the whole gap. It is ordinary, it is not exotic, and it is why this could have been done in week 4.

---

## §2 — Method law
`doctrine/omni_work_method_repertoire.md` (**80 methods, verified**) is a **mandatory consult** for every gate. Individual methods stay **optional**. **No gate runs methods as ceremony.**

Every gate records a **Pressure Coverage Matrix** row per material uncertainty:

`uncertainty · candidate methods · selected · why selected · material alternative rejected · evaluator · stop condition · result`

**Prior-work law (applies at every gate, before anything is called new):** `M-102` controlling-terminus recovery · `M-103` authority/maturity classification · `M-106` EXISTS-AS / novelty dedup · `M-304` decision-state reconciliation. **Assume the question was litigated before; do not assume the prior conclusion was right.** Prior-us may have been smarter, less informed, more insightful, or simply wrong — the system must hold all four open.

---

## §3 — Roles, branches, writable surfaces
**Worker** (source packets; extraction and classification only — **no architecture conclusions**) · **Integrator** (single writer of the architecture package and all shared surfaces) · **Adversary** (fresh context; never the builder) · **Adjudicator** (authors neither submission; rubric frozen before results) · **Operator** (Nick — accepts gates, chooses the name, appoints the integrator).

**Branch model:** one FAI branch per gate, from the then-current `main`. **Shared control-plane surfaces are integrator-only and land at G4 or with explicit operator direction.** No worker writes outside its own packet. Collision surface = the architecture package itself; **one writer, serialized.**

---

## §4 — The gates

### G0 — LOCK
**Purpose:** make the arc executable and stop the redesign loop.
**Methods:** `M-101` source-base declaration · `M-102` terminus recovery · `M-103` authority matrix · `M-104` coverage manifest · `M-108` missing-evidence scan · `M-701` charter · `M-704` multi-angle authorability · `M-706` verdict vocabulary · `M-710` boot sync.
**Outputs:** accepted charter (R3) · accepted this plan · role assignment · branch/write model · **exact first G1 action**.
**Verdicts:** `READY_TO_EXECUTE` · `READY_WITH_EXACT_AMENDMENTS` · `NOT_READY_<reason>`.
**Blocked until accepted:** integrator appointment · checkpoint repoint · any shared-surface write.

### G1 — MODEL FROM ESTABLISHED PRACTICE, THEN ERECT THE PACKAGE
**This is the outpost: the first permanent structure at the real site.**

**G1a — external mechanism study (FIRST, bounded, primary sources).**
`ISO/IEC/IEEE 42010` (entity of interest · stakeholders · concerns · viewpoints · views · model kinds · **correspondence rules**) · `SEI` product-line **variability and variation points** · `FHIR` profiling (canonical id · versioning · differential vs snapshot · **constrain-never-loosen** · validation) · `IHE` integration profiles (actors · transactions · required groupings · **multi-profile conformance**) · `AUTOSAR` (standardized interfaces, internals left free) · `AWS` framework + **lenses** (one workload, many lenses) · `Palantir` **interfaces** (abstract type, multiple implementation, capability inheritance) · **and the ordinary case** — what a normal application repository does, honestly reported.
**Output:** an **adoption / rejection / transfer-limit matrix** — mechanism, what it solves, hidden ownership assumptions, transferable part, non-transferable part, OMNI equivalent, evidence grade. **Mechanism only; never the hidden ownership or economic assumptions** (`GRD-026`, `M-207`).
**Then, and only then:** the **artifact-role model**, the **multi-axis identity schema**, the **variation model**, and **architecture change control** — derived from established practice, mapped onto what OMNI already has.

**G1b — install the package.** Real root, real paths, real versioning, real maintenance contract, normative/informative split, the two profile axes and variation-point scaffolds declared as structure. **Uncontested mechanics only** — no doctrinal synthesis. **`candidate_canonical`.**
**Guards from the first commit:** owns no truth · holds no commit authority · **C4.6 `C10`** applies to this package itself · **no `constitution.md`** · **no hand-maintained manifest** duplicating the catalog.
**Methods:** `M-301` decomposition · `M-302` candidate-vs-commit · `M-303` ownership/authority/custody/visibility split · `M-305` collision map · `M-306` maturity-layer separation · `M-509` contradiction sweep · `M-702` desk check · `M-708` byte review.
**Verdicts:** `OUTPOST_INSTALLED` · `OUTPOST_INSTALLED_WITH_NAMED_DEBT` · `OUTPOST_BLOCKED_<reason>`. **A block here means the installation mechanics are wrong — it does not reopen whether OMNI Architecture exists.**

### G2 — CLASSIFY AND MIGRATE IN PLACE
**Classification, not synthesis. Nothing is rewritten.** Each existing architecture artifact receives: `architecture_role` · `governance_category` · `authority_maturity` · `scope` · `plane_or_view` · `build_evidence_maturity` · home · **and its conflicts and supersessions named**.

**Bounded source set — controlling termini only.** Artifact Index · governance taxonomy · **05-17 pattern (Tier-0 #14)** · System Map · Surface Map · GCE · Polaris · Care §1b/§5b/§5b.1/§18/§19 · Platform · Accountability · `EVRUN-000007 _05/_06` · `EVRUN-000008 _03/_04` · C4.6 §0.5/§12 · C3.8 G4 · **the 16 domain contracts** · Federation (tenancy) · pre-spine map §5 (deployment postures) · **Agent Runtime capture + Build OS `09`/`10`/`11`** · the frozen Insurance result.
*Reopen a raw only where the controlling terminus cannot resolve a material question (`M-107` sparingly).*

**Required dispositions landed here:** the **two taxonomies reconciled** · **Reactor** classified as a cross-cutting architecture standard · **GCE** classified as the cross-boundary exchange standard · **05-17** superseded or narrowed · **`WI16`** stale state corrected · System/Surface Maps **migrated or superseded — never duplicated**.
**Methods:** `M-101`–`M-108` · `M-208` authority map · `M-209` responsibility ladder · `M-304` decision-state reconciliation · `M-306` · `M-801`–`M-805` evidence.
**Verdicts:** `ESTATE_CLASSIFIED` · `ESTATE_CLASSIFIED_WITH_NAMED_GAPS` · `CLASSIFICATION_BLOCKED_<reason>`.

### G3 — PROVE ROUTING, AND PROVE THE DECLARATION FORMAT
**The acceptance gate. This is where the arc succeeds or fails.**

**G3a — the routing fixture.** A cold entrant — fresh agent or script — starting from **Insurance · Pharmacy · Labs/imaging · Gmail/Slack · payroll/banking · a new federation · an enterprise deployment · a new build-agent lane** must reach the correct architecture, applicable profiles, variation points and proof obligations **with no historical filename and no access to this conversation.** **Mechanically checkable. It fails loudly.**

**G3b — declaration-format proof.** Write real declarations for **Insurance · Pharmacy · one simple internal domain · one deliberate non-cousin**, and **two deployment profiles** (small operator · composed enterprise). **These prove the format carries authority, inheritance, non-inheritance, owners, variation and conformance — they do not adjudicate whether the domains are correct.** *(Insurance is not the qualifier. The operator is right that domain-quality prose proves nothing about placement.)*

**G3c — adversarial minimum, not ceremony.** Builder and adversary separated · rubric and verdicts frozen **before** results · **≥1 negative control** (`M-508`) expected to produce no defect · **≥1 seeded violation** (`M-505`) that must fail — e.g. a profile silently loosening an inherited law, or the package acquiring truth ownership · **the deliberate non-cousin must be rejected by the model**.
**Methods:** `M-503` builder/adversary/judge separation · `M-505` · `M-506` counterexample · `M-507` competing decomposition · `M-508` · `M-509` · `M-401`–`M-407` scenarios · `M-602` mixed topology · `M-605` fleet/multi-instance · `M-607` portability/exit.
*Eligible via the Pressure Matrix where a real uncertainty warrants it, never as ritual: chaos/fault injection · property-based testing · premortem · shadow run · one-way-vs-two-way-door classification.*
**Verdicts:** `ROUTING_PROVEN` · `ROUTING_PROVEN_WITH_NAMED_GAPS` · `ROUTING_FAILED_<reason>` · `METHOD_INVALID_RERUN_REQUIRED`.

### G4 — INSTALL, WIRE, HAND OFF
**Makes it impossible for the next arc to repeat this one.**
Package promoted to declared authority · **Build Entry enforces profile declaration** (no loop opens or closes without stating inheritance, specialization, non-inheritance, owners, variation points and conformance) · Build OS consumption rules · **Agent Runtime bindings** (which architecture version, which profiles, which federation/operator/tenant, which principal, instance vs fleet) · read graph + catalog + checkpoint repoint · **spine and thesis input-state receipts** (may-rely / must-not-assume / remains-open) · **then Insurance returns** — `C3.9` populate → consume → rerun affected traces → reconcile → **`E2` last**.
**Methods:** `M-702`–`M-710`; **`M-703` input-state receipts · `M-705` disposition ledger · `M-708` byte review · `M-709` state normalization · `M-710` checkpoint/boot sync are mandatory.**
**Verdicts:** `INSTALLED` · `INSTALLED_WITH_NAMED_DEBT` · `INSTALL_BLOCKED_<reason>`.

---

## §5 — Scope fence
**This arc settles three taxonomies:** governance · architecture artifact-role · deployment/profile.
**It does NOT settle the domain/product/clinical ontology.** That is continuous work owned by contracts and profiles, and attempting it here produces the god-arc this exists to prevent.

**Also out of scope:** implementation · schema · migration of runtime data · promotion of Care/C4.6/Reactor/Insurance content by passing reference · reopening Reactor's eight invariants for their own sake · any `reactor-service` · naming by any agent.

---

## §6 — Deferred deliberately, and where it goes instead
Knox's **G5 market/incumbent pressure** and the full sixty-method conformance programme are **not gates here.** The mechanism study at **G1a** does the load-bearing external work; commercial and incumbent pressure belongs to **Task-D and the spine**, which already own it, and duplicating it here would be the third re-derivation of the same comparator material. **Recorded as a deliberate deferral with its destination named — not dropped.**

---

## §7 — Final acceptance test
> **A fresh agent entering any operating area, connector, deployment or build lane is routed to the correct architecture, profiles, variation points and proof obligations — without knowing any historical filename, without reading any arc, and without this conversation.**

**That, and nothing about how well Insurance reads.**

---

## §8 — STOP RECEIPT
| Field | Value |
|---|---|
| Artifact | arc execution plan, R1 |
| Branch | `cursor/fai-foundational-architecture-30f4` |
| Shared control-plane surfaces | **0 touched** |
| Minted | **nothing** |
| Structural changes vs the reviewed arc | external study moved to **first** · reconciliation demoted to **classification in place** · acceptance test changed to **routing** · 8 gates → **5** · G5 deferred to Task-D/spine with destination named |
| Next | **Nick + Knox accept, amend or reject.** Then integrator appointment, then G1a |

**STOP: `execution_plan_R1_pending_acceptance`**
