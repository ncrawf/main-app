# v4 — FAI — Foundational Architecture Reconciliation & Installation — GATE-0 CHARTER (R1)

Document type: `handoff_or_readiness_gate` (arc-opening packet — using an **existing** taxonomy category deliberately; see §4)
Authority: `analysis_nonbinding` (`D0THES-GRD-036`). Binds nothing. Promotes nothing. **Mints no name, no category, no artifact class.**
Status: **`gate_0_charter_R1 · pending_nick_knox_acceptance · nothing_started`**. Current state lives in §1 and nowhere else.
Domain(s): `architecture_governance` · `cross_cutting` — **no domain owns this arc's output.**
Lifecycle role: opens `OMNI-FOUNDATIONAL-ARCHITECTURE-INSTALL`.
Source-of-truth relationship: consumes the estate read-only. Where this charter and a carrier differ, **the carrier controls.**
Supersedes: nothing. Superseded by: none.
Manifest action: `add_tier2` **PROPOSED** — not landed (`PRESPINE-PHASEA-INTEGRATOR` VACANT).
Review gate: `user_knox_required`

> **R1 correction receipt.** R0 (`8c0e8b1`, Insurance branch) contained two structural errors, both rejected by Knox and by the operator, both accepted here: **(a)** it treated the arc as an open existential question with a `NOT_A_SYSTEM` exit; **(b)** it proposed a single-law `payment state ≠ care state` probe as Gate 1. **The operator's "outpost" meant the first permanent structure at the real site — not a test cabin to decide whether the site exists.** I misread it. Both are deleted. R0 also named `.cursor/plans/` root as the candidate home; **also deleted** (§5).

---

## §1 — ONE CURRENT-STATE SURFACE

| Fact | Value |
|---|---|
| Existence question | **CLOSED. The thing exists.** Decided by the operator; Knox concurs. Not reopened, not gated, not tested |
| Arc state | `chartered_R1 · not_started` |
| What this file authorizes | **nothing** — it is a proposal for Nick + Knox acceptance |
| Insurance | **FROZEN.** PR #14, separate branch, unmerged. `C3.9` not started. `E2` not started |
| Branch posture | **this arc is on its own branch from `main @ 9a6e7de`.** Insurance and FAI do not share closure (§8) |
| Blocking obligation | **`PRESPINE-PHASEA-INTEGRATOR` VACANT.** No shared control-plane surface may land |

---

## §2 — What the thing is, and the two parts Knox's model is missing

**Working functional description (NOT a name):** the build-facing source that states the OMNI-wide rules every operating area must satisfy, defines the reusable architectural compositions those areas instantiate, declares how each concrete area specializes them, and specifies the proof required before anything is built.

Knox proposes four parts. **Pressure-tested against ISO/IEC/IEEE 42010 (the international standard for architecture description) and against this estate's own failure record, four is incomplete by at least two — and both omissions are the direct causes of this session's failures.**

| # | Part | Status | Why |
|---|---|---|---|
| 1 | the normative rules every area must satisfy | Knox | — |
| 2 | reusable architectural compositions | Knox | — |
| 3 | per-area specialization declarations | Knox | — |
| 4 | conformance + build-entry enforcement | Knox | — |
| **5** | **controlled vocabulary / term registry** | **ADDED** | **The seven-labels disease IS a missing controlled vocabulary.** One law carried seven names across the estate and three arcs re-derived it. No amount of pattern-writing fixes that; a term registry does. First-class, not a glossary appendix |
| **6** | **correspondence rules** — how the parts and the existing maps relate to one another | **ADDED** | 42010's term. **Nothing in OMNI states how the System Map relates to the Surface Map relates to contracts relates to Reactor.** That absence *is* the disease: every arc inferred the relationships and inferred them differently |
| **7?** | **views/maps as a typed part** | **OPEN** | The System and Surface Maps are already architecture *views*. Knox files them in a folder without typing them. Gate 2 decides whether "map" is a part or a pattern |

**Four is probably not the number. Six is probably closer. Gate 2 decides — but 5 and 6 are not optional, because the estate's two most expensive failures map exactly onto their absence.**

---

## §3 — Three things this charter refuses to accept on assertion

### §3.1 "Constitution" is the wrong word, and the operator's reason is architecturally correct
A constitution is what everything rests on. **In OMNI that is the thesis.** This layer does something narrower and more useful: it **constrains construction and blocks non-conforming builds**. Established options, with provenance, **for the operator to choose from — no agent names this**:

| Candidate | Provenance | Fit |
|---|---|---|
| **specification** (normative core) | IETF RFC / W3C / AUTOSAR | **strongest** — "conformance" is only meaningful against a *specification*; the word does the work |
| **reference architecture** (the package) | SEI, Microsoft, AWS | strongest for the *package* containing spec + patterns + profiles |
| **base specification + profiles** | **FHIR** — base spec that profiles constrain and extend, with computable conformance | closest healthcare-native analogue; already half-inherited via C4.6 |
| **architecture description** | ISO/IEC/IEEE 42010 | precise, standards-grade, dry |
| *building code* | not software | wrong domain, **right connotation** — normative, testable, inspector-enforced, tells you what any building must satisfy without telling you what to build |
| ~~constitution~~ | — | **rejected** — collides with the thesis, and implies foundational-most |

### §3.2 Reactor's scope is NOT settled, and settling it needs no gate
Knox states *"Reactor is one major module inside it"* on the strength of the `EVRUN-000007/000008` terminus. **That terminus describes what the run was chartered to answer — intent-to-consequence continuity. It does not establish that Reactor is only that.** Reactor's own framing is *"candidate constitutional center"* — an ambition strictly larger than its evidenced scope. **Reading "what the run covered" as "what the concept is" is a category error, and it is exactly the error that produced this session's other failures.**

**How it resolves, without a gate and without another Reactor essay:** lay Reactor's **eight invariants** beside Care's constitutional laws, GCE's crossing spine, and the 05-17 three-layer pattern, **in one table, once.** Either the eight cover the space or they visibly do not. **That is a reading exercise in Gate 2's first hours, not a test and not a pass.** The operator's instruction stands: no six-gate ceremony to answer a question a table answers.

### §3.3 "Patterns" is the correct established term — and that is the honest answer, not a better one
The operator asks whether there is a better name than a `patterns` folder. **There is not, and inventing one would be the eighth-label error.** "Pattern" is the established term for a reusable architectural composition — *Design Patterns*, *Pattern-Oriented Software Architecture*, *Patterns of Enterprise Application Architecture*. It is diluted by overuse, not wrong. **What matters more than the folder name: OMNI's patterns carry conformance obligations, which makes them closer to FHIR profiles applied one level up than to a pattern catalogue.**

---

## §4 — **The forwards move, and it must come first: the document taxonomy is stale and missing the classes this work needs**

The operator's sharpest point: *"what does a normal tech app taxonomy look like? what are the files? then we go fill them in."* **The estate already has that file, and it is the reason we cannot simply start writing.**

`doctrine/00_document_governance_and_taxonomy_2026-05-19.md` §2 fixes ten categories and states: **"Do not invent a new category unless explicitly approved."**

`manifest_or_catalog` · `canon_digest` · `doctrine` · `adr` · `domain_rule_slice` · `audit_or_pressure_test` · `evidence_or_ingestion` · `narrative_or_postmortem` · `handoff_or_readiness_gate` · `future_or_parked_watch`

**Verified absent from that list: `specification` · `contract` · `pattern` · `profile` · `conformance`.**

> **And `contract` is absent while 16 contract files exist in `.cursor/plans/contracts/`.** The taxonomy predates Foundation vNext. **We have been writing the estate's most build-facing artifacts into a governing taxonomy that has no class for them for months** — the same staleness as the 05-17 pattern, `WI16`, and Build Entry.

**Consequence, and it is the actual first move:** every artifact class this arc needs would be an unapproved new category. **So Gate 1 begins by fixing the taxonomy — deciding what classes of document exist, what authority each carries, and where each lives — and only then creating artifacts.** That is building it forwards. It is also small, bounded, and does not require reconciling a single law first.

---

## §5 — Where it lives

**Not `.cursor/plans/`.** That is the working estate — charters, packets, gate results, preservation, evidence. It stays that.

**Working target: a top-level, tool-independent architecture package** (Knox's `/architecture` shape is accepted as a *direction*, not as final paths). Constraints:
- **one canonical copy.** The System and Surface Maps migrate in or are superseded there **as one governed transaction** — never duplicated;
- **`docs/architecture/`** keeps ADRs, narratives, rationale, rejected alternatives — the informative half;
- **correctness test:** a builder opening Insurance, Pharmacy or Gmail reaches the normative core **without knowing it exists**;
- **god-layer test, wired from the first commit:** the package **owns no truth and holds no commit authority.** C4.6 `C10` (*no shadow god-domain — ownership matrix + schema review*) is the existing runnable guard and applies to this package itself. **If it ever owns state, it has failed.**

---

## §6 — Gates

**G0 — lock and authorize.** Existence is decided, not tested. Lock: final package class and path · artifact classes (§4) · source set (§7) · integrator and write authority · supersession method · non-actions. **Exit: Nick + Knox acceptance.**

**G1 — erect the outpost.** *The first permanent structure at the real site, in real materials.* Fix the document taxonomy first (§4), then create the actual package at its actual path: the normative core (named by Nick), the manifest, the pattern/profile/conformance schema homes, the map-migration plan, the normative/informative split, and the maintenance and versioning contract. **`candidate_canonical`. Only currently governing, uncontested laws enter the first normative draft; everything unresolved is marked unresolved rather than filled speculatively.** Not a slice. Not a test. The destination.

**G2 — full reconciliation, paid once.** Controlling termini only (§7). Per candidate law or pattern: source · authority · maturity · scope · conflicts · supersession · classification · normative status · build maturity · canonical destination · conformance method. **First hours: the Reactor / Care / GCE / 05-17 comparison table (§3.2).** Parallel source packets, one integrator — not one agent holding a million tokens.

**G3 — profile pressure.** Pharmacy · Insurance · Labs/imaging · Gmail/Slack · payroll/banking · one simple internal domain · **one deliberate non-cousin**. This detects over-generalization and wrong inheritance. **It does not re-litigate existence.**

**G4 — ratify and propagate.** Package promoted to its declared authority · maps migrated or superseded · profiles installed · conformance wired · Build Entry updated · read graph updated · 05-17 superseded or narrowed · `WI16` corrected · spine/thesis/contracts point at the package · **then Insurance returns to `C3.9` and `E2`.**

---

## §7 — Bounded source set — controlling termini, not a corpus sweep

`coherent_omni_architecture_pattern_2026-05-17.md` (**Tier-0 #14, mandatory, unread at boot by this agent**) · `OMNI_System_Map_vNext.md` · `OMNI_Surface_Map_vNext.md` · `doctrine/omni_enterprise_posture_2026-06-03.md` (**GCE — the only ratified member**) · **`doctrine/00_document_governance_and_taxonomy_2026-05-19.md` (§4)** · Polaris (`v4_C4_1_…`) · Care capture §1b/§5b/§5b.1/§18/§19 · Platform capture · Accountability capture · `EVRUN-000007 _05 §I.13–§I.15` + `_06` · `EVRUN-000008 _03` + `_04` · `v4_C4_6_…` §0.5 + §12 · C3.8 G4 · the 16 domain contracts · Build OS `09`/`10`/`11` (**self-declared stale**) · `v4_INS_G1B_…` + the frozen Gate-2 result.

**Out of scope:** whole-estate sweep · 300-transcript rescan (**concept registries first; reopen a raw only where a load-bearing claim depends on it**) · reopening Reactor's eight invariants for their own sake · any implementation lane.

---

## §8 — Package boundary
**Insurance and FAI do not share closure.** This arc is on its own branch from `main @ 9a6e7de` with its own PR and lifecycle. PR #14 contains Insurance only. **Co-occurrence in one conversation is not package membership** — the estate already learned this during the Insurance parent carry, and R0 repeated it.

---

## §9 — Explicit non-actions
No architecture authored before G0 acceptance · no shared control-plane surface written · **no name chosen by any agent** · no new taxonomy category minted before G1 · no new domain, plane, object or god-layer · no `reactor-service` · no promotion by passing reference · **no touching PR #14** · no `C3.9` · no `E2` · no implementation.

---

## §10 — Failure modes, each with its receipt
Stale-state read instead of terminus (`EVRUN-000008` asserted blocked; closed 07-18) · **mandatory Tier-0 route unread at boot (05-17)** · durable home carrying stale content (`WI16`) · arc-local routing (`9p` / `#9g`) · concept frozen without an address (Reactor) · re-derivation mistaken for discovery (O-2/O-3; Knox's SEI/FHIR ≈ Reactor gate 2) · comparator consumed as content not method (FHIR) · **governing taxonomy stale against its own estate (§4)** · patch accretion (R0→R3 + retraction) · **package-boundary violation (R0 mixed FAI into the Insurance branch)**.

**Every gate re-proves a boot receipt for Tier-0 #14.**

---

## §11 — The one operator authorization requested

Nothing else is asked for. The arc cannot open without it, because opening it changes the program's next action and that is checkpoint-level:

> **I appoint Opus as `PRESPINE-PHASEA-INTEGRATOR` for the bounded foundational-architecture arc-opening transaction — branch split, checkpoint repoint, catalog rows, read-graph route. This does not authorize substantive Gate-1 authorship until the revised Gate-0 charter is accepted by Nick and Knox.**

---

## §12 — STOP RECEIPT

| Field | Value |
|---|---|
| Work package | `OMNI-FOUNDATIONAL-ARCHITECTURE-INSTALL` — Gate-0 charter **R1** |
| Branch | `cursor/fai-foundational-architecture-30f4`, from `main @ 9a6e7de` |
| Files | this charter · 2 verbatim preservations (**empty, operator-populated**) · 1 handoff |
| Shared control-plane surfaces | **0 touched** |
| Contracts / schemas / code | **0 touched** |
| Minted | **nothing** — no name, category, law, pattern or object |
| Corrected from R0 | existential test deleted · probe law deleted · `.cursor/plans` home deleted · branch split · parts 5 and 6 added · taxonomy staleness found · Reactor scope claim refused |
| Checkpoint tier | **3** — major-arc opening; narrative owed at arc close |
| Blocking | integrator **VACANT** |
| Next | **Nick + Knox accept, amend or reject.** Nothing auto-starts |

**STOP: `gate_0_charter_R1_pending_operator_and_knox_acceptance`**
