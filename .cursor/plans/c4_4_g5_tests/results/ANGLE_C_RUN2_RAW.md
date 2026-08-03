<!-- C4.4 G5 THREE-ANGLE — RAW TEST EVIDENCE — ANGLE C (downstream authorability test) — RUN 2
prompt_file: .cursor/plans/c4_4_g5_tests/C44_G5_ANGLE_C_PROMPT.md
prompt_blob (run 2, frozen prompt @ fa31fd6): 90b5339908af027e07e6396f923196a89cc42642
frozen_target_commit (G5 packet): f7db832a2f5eec5e6fc13fc996984cce5d8fb002
frozen_packet_blob: a12bd0ef9821c13c3a0144977d3a73cd8e1dc42a
executor: fresh Gemini repo-connected context (Angle C)
receipt_timestamp: 2026-08-02 (as relayed by Nick)
raw_output_sha256: 7e026e1f23a51e2106fb2925d62ab2b64be900b27c803992c356f1177ee06bfb (sha256 over the body below the END-WRAPPER marker)
knox_adjudication: IN PROGRESS — Knox is adjudicating run-2 A/B/C together in parallel as this is preserved; verdict pending. Stored verbatim, unedited, no summary/correction/merge.
relay_note: preserved exactly as relayed by Nick (transport prefix "c = " stripped; body begins at the agent's opening line). No revision requested, no tables cleaned, no findings summarized, no cross-agent contamination, no Opus patching of the body.
-->
<!--END-WRAPPER-->

The prompt is fully loaded and executed as specified. Below is the complete Angle C output.

---

# C4.4 G5 — ANGLE C: Downstream Authorability Test (Run-2)

## Integrity receipt (verified before authoring)

| pin | expected | verified |
|---|---|---|
| Repository | `ncrawf/main-app` | ✓ (local clone of same) |
| Target commit | `f7db832a2f5eec5e6fc13fc996984cce5d8fb002` | ✓ `git cat-file -t` = `commit` |
| G5 packet blob | `a12bd0ef9821c13c3a0144977d3a73cd8e1dc42a` | ✓ `f7db832:.cursor/plans/v4_C4_4_disposition_ledger_and_v4_handoff.md` → `a12bd0e` |
| G3 architecture substance blob | `e364acbad3352457eb8c761d287e91787ea71eea` | ✓ readable blob; `6c86e2e:.cursor/plans/v4_C4_4_taxonomy_constitution_and_reference_architecture.md` → `e364acb` |
| G3 carrier at target commit | `76a8cdfc4c75376ec5db1fa658c714a973169426` | ✓ `f7db832:<G3 path>` → `76a8cdf` (differs from substance — **expected, not an integrity failure**) |
| G4 carrier blob | `07f866207836a22c103505835f80aa495a623101` | ✓ `f7db832:.cursor/plans/v4_C4_4_fixture_suite_and_adversarial_results.md` → `07f8662` |

The G3 dual-pin relationship holds exactly as the prompt describes (`e364acb` = accepted architecture substance I author from; `76a8cdf` = the acceptance/status carrier at the target commit; the two differ). No integrity-mismatch STOP is triggered. I author architecture from `e364acb`; I consulted `76a8cdf` only for acceptance status (G3 ACCEPTED · G4 PASS 30/32 · G5 run-1 HOLD, patch applied, run-2 armed).

## Source posture

- **Read in full (from the pinned read set only):** G5 packet (`a12bd0e`, Part I + Part II, all sections I.0–I.10, App-A/B/C/D/E, §G5-0…§G5-10); G3 substance (`e364acb`, §2 six-class constitution + matrix, §3 A/B/C adjudication, §5 five ingress axes, §6 D7/corpus boundary, §7 two lifecycle profiles, §8 authority profile + state-families, §R.0–R.17 reference architecture, §R.CORPUS P3 verdict); G4 carrier (`07f8662`, consulted for adjudication status + `C44-G4-R01`); prior-depth map (`f7db832:…prior_depth…`, §4.1/§4.2 mechanism matrix, §9.1 34-row census, §6.3 candidate laws); spine shape §8 (`f7db832:…v4_C4_spine_shape_plan.md`, the row-8 charge + 6 open Qs); reservoir frontier (`f7db832:…cns_and_knowledge_reservoirs_frontier_2026-06-06.md`, §1–§6 incl. the 6 open Qs); comparator registry (`f7db832:…comparator_analogy_registry.md`, §A/§B/§C/§D); Build Entry Gate v0 (`f7db832:…11_build_entry_gate_v0.md`, Foundational Composition Admission Checklist + 10 proof questions); OpenEvidence blob (`7cb62ed`, §1 transcript + Review 003 18-cluster extraction); Simulation blob (`a709c5d`, §1 transcript + Review 003 15-cluster extraction).
- **Authored ONLY from the pinned objects.** Where the raw evidence sources (OpenEvidence Review-003 cluster 14, Simulation Review-003 primitives) differ from the packet's Knox-reconciled placement, **the packet controls** (e.g., OpenEvidence's "five reservoir families" and cluster-14 "clinician-wisdom reservoir" are reconciled in I.4 into `authority_class` values + S3/S6 placement, not five S2 families; I author the reconciled version and flag the divergence).

### Automatic boot-context disclosure (mandatory)

This repository auto-injected the following OMNI boot/framing context that is **NOT** part of my pinned read set. I list all of it and confirm none supplied any term, decision, or conclusion in the six outputs:

- **Always-applied Cursor rules:** `.cursor/rules/00_omni_opus_boot.mdc` (OMNI-OPUS-REPO-NATIVE operating profile); `CLAUDE.md` (compatibility pointer); `AGENTS.md` (repository law + boot pointers, checkpoint #15, comparator lenses §3.5, work-class table).
- **Plugin/marketplace always-applied rules:** `runlayer` mcp-governance; `antimetal` conventions; `exa` search awareness.
- **Session hooks context:** Vercel plugin knowledge-update; the `superpowers:using-superpowers` skill preamble ("you have superpowers").
- **Environment metadata:** `<user_info>`, git status, terminal folder, MCP server catalog, agent-skills list.

**Compliance actions taken per the prompt's boot-context clause:** I did **not** run the AGENTS/`00_omni_opus_boot` boot sequence, did **not** produce a Protocol §9 stop report, did **not** load any file outside the pinned read set, and did **not** follow any OMNI work-protocol instruction. Auto-loaded boot context was treated as non-authoring. **No output was influenced by auto-loaded context** — every term below traces to a pinned read-set pointer. (One transparency note: the packet, G3, spine-shape, and frontier are themselves in-repo files that *also* appear in boot pointers; I used them **only** because they are in the pinned read set, at their pinned pins — not because AGENTS points to them.)

---

# OUTPUT 1 — Spine §8 detailed outline

**Exact source pointers.** Packet I.2 (fan-out map), I.3 (six classes), I.3A (two-speed law), I.4 (S2 orthogonal axes), I.6 (Foundry), I.7 (Simulation boundary), I.10 #1 (spine mini-contract), App-E §E.4(1) (spine schema, no blank questions); G3 `e364acb` §2/§2.1/§2.2/§2.3 (constitution + matrix + directional law), §8.1/§8.2 (authority profile + state-families), §12 (frontier 6-Q disposition); spine-shape `…v4_C4_spine_shape_plan.md` row 8 (the charge + the six open Qs) + row 7 (runtime/context) + rows 5/6 (CNS/AI substrate); frontier `…frontier_2026-06-06.md` §1/§4 (the 6 open Qs).

**Accepted base decisions (G2/G3, G4 PASS 30/32).** Six constitutional classes S1–S6 that must never collapse (G3 §2, §2.3; packet I.3). Parent B adopted, A rejected, C rejected-as-owner (G3 §3; packet I.1 "not one everything store"). Clinical Memory = **S3**, not S2 (G3 §2 S3 row; packet I.4 reclassified-out list). The directional law is a **fan-out graph, not a pipeline** (G3 §2.2; packet I.2). Authority is a **multidimensional profile, not a ladder** (G3 §8.1).

**Detailed §8 outline (the section the spine author writes):**

- **§8.0 — Purpose + what §8 does / does NOT ratify.** §8 ratifies the constitutional *boundary* only; concrete schemas/APIs/service/folder/product labels stay C5 (packet I.10 #1 "output"; App-E §E.4(1)(f)). Non-goal: no roster of "6 reservoir databases," no Foundry-as-compiler, no one global Foundry (packet I.10 #1 prohibited collapses).
- **§8.1 — Ratify the six constitutional classes S1–S6.** Carry the G3 §2.1 anti-collapse matrix verbatim as the constitutional distinctions (authority relationship · custody+mutation law · retention/deletion · correction · ownership · admissibility · freshness · reprocessing · what-it-is-NOT). Preserve **Clinical Memory = S3** (App-E §E.4(1)(c); frontier open-Q2 → resolved).
- **§8.2 — Ratify the directional/fan-out law.** "Source Estate preserves · CNS orchestrates · Reservoirs supply · Foundry compiles/tends/proposes · Retrieval Rails draw · Context Router assembles · owning domains commit" (G3 §2.2; packet I.2). Explicitly: S1 feeds both S2 and S3; S1/S2/S3 feed S5; the Context Router draws directly across admissible S1/S2/S3/S5 — **not downstream of one Foundry pipeline** (packet I.2 Knox §2).
- **§8.3 — Ratify the S2 orthogonal-axis model (NOT a roster).** Carry I.4's four axis-groups **Subject** (`primary_subject_domain` exactly-1 + `secondary_domain_tags[]` 0..n) × **Content** (`primary_semantic_form` exactly-1, controls lifecycle + `secondary_forms[]` 0..n) × **Origin** (`origin_party` · `admission_scope` · `access_policy_refs[]` · `reality_basis` · `epistemic_mode` · `source_kind` · `authority_class`) × **Authority** (retained G2 dims incl. `use_ceiling`). **Ratify `lesson` as a `primary_semantic_form`** (Content-axis value), a settled value — NOT an unresolved domain (App-E §E.4(1)(b); packet I.4 load-bearing rules). Route physical/access/review **partitioning** of `form=lesson` units to C5 + review/access owners; the spine carries only the constitutional boundary (packet I.10 #1 open; App-E §E.4(1)(f); §G5-N.8 pick 3).
- **§8.4 — Ratify/diff the operator-decided family label.** "Knowledge Reservoirs / Reservoir family" is **operator-decided** (Nick, §G5-N.1) — §8 **ratifies or issues an explicit diff**, it does not receive it as a blank question (App-E §E.4(1)(a)). Family = a **non-owning classification tag, not a per-member prefix** (frontier §1; packet §G5-N.1).
- **§8.5 — Ratify the authority PROFILE + four orthogonal state-families.** G3 §8.1 profile axes (`knowledge_kind · authority_basis · review_authority · scope · principal/tenant · use_ceiling · consequence_class · freshness`) and §8.2 four orthogonal state-families (admission / activation / currency / materialization). `indexed ≠ accepted`; the deepest law: **normativity is adoption-time, not storage-time** — operative force lives in an owning S3/Settings state via an **explicit adoption link**, never in an S2 field (packet I.4 `use_ceiling` rule; I.3A).
- **§8.6 — Place the two-speed operational decision-and-override lineage seam (I.3A).** State the two clocks as constitution: **fast** = owning-domain/Settings/governance commits current operative state + immutable S1 receipt + immediate next S6 draw (never S2, never runtime memory); **slow** = S1 evidence → candidate → S2 review/admission → explicit S3/Settings adoption link. Carry the **four ORTHOGONAL scope dimensions** — `operational_effect` · `owner_state_kind` · `knowledge_lifecycle` · `promotion_scope` (planning dimensions, not enums; C5 authors the record shape) — as independent, never one mutually-exclusive field (packet I.3A). Falsifiers: no "instant memory" class; S2 never live owner-state; one local override never silently becomes operator-wide/platform-common/network.
- **§8.7 — Place the Foundry / Context-Router / CNS / Agent-Runtime seams.** **OMNI Intelligence Foundry = the integrated governed knowledge-evolution capability/composition** (proposes · compiles · tends · routes; never commits another owner's truth, no cross-tenant right by being the Foundry). **Foundry maintenance missions/machinery = the R.12 component** (compiles S5, tends S2, proposes) — the whole ≠ the component; no "Foundry Operations" noun (packet I.6, §G5-N.3/.5; G3 §R.12). Context Router assembles S6 and emits an immutable **S1 run-context receipt**; CNS orchestrates, Agent Runtime supplies actors — all own none of S1–S6 (packet I.2/I.3; G3 §R.11).
- **§8.8 — Place the Simulation boundary (constitutional data-plane relationship only).** Simulation **spec/persona/population/run/output = internally-generated S1**; **evaluation records + release decisions = Platform E&V / Evaluation & Assurance (or Build-OS) owner-state — NOT universal S4**; an admitted, generalized result = candidate S2 (`reality_basis=simulated · source_kind=simulation_run · authority_class=model_output · use_ceiling=descriptive_only`); simulated output never becomes truth by generation alone. The **Simulation-Lab capability itself is a separate future arc, NOT authored in §8** (packet I.7, §G5-N.10; see Output 5).
- **§8.9 — Resolve the frontier's SIX open questions (do not re-derive — the depth exists; spine-shape row 8 charge).** (1) **Family name** → operator-decided Reservoir/Knowledge Reservoirs; §8 ratifies/diffs (§8.4). (2) **Care-Outcomes-Learning shape** → dissolved: it is `subject=clinical · form=lesson`, not a reservoir; "Care Outcomes Learning"/"Care Practice"/"Lessons Learned bucket" all rejected (packet §G5-8, I.4). (3) **Clinical Memory's class** → S3 (patient truth), consulted-not-a-reservoir (§8.1). (4) **CNS framework** → placed to spine §5/§7 + `FWREG-010` Agent-Runtime formulation (packet §G5-3.C §12 disposition; G3 §12 `bounded-deferred Q3`); §8 states the seam, not the full CNS taxonomy. (5) **Authority-class taxonomy** → the I.4 Origin-axis `authority_class` set (`publisher_or_journal · guideline_body · expert_consensus · regulator · manufacturer · institutional_record · principal_assertion · patient_report · model_output · other_governed`), owned by `FWREG-007`; `source_kind ≠ authority_class` (§8.3). (6) **Reservoir vs domain-memory vs projection vs workbench** → the six-class separation itself (S2 vs S3 vs S5 vs S4), G3 §2.3 (§8.1).
- **§8.10 — Route the residual C5/owner picks (not blanks).** The §G5-N.8 residual pick-set: clinical-literature body public label · Foundry public label (Palantir word-collision) · `form=lesson` physical partitioning — each carries pinned context; owner = Nick + spine §8 branding pass / C5; **plus** the acknowledged architecture-memory gap (§G5-N.9: a later naming thread not recovered — first search the transcript corpus). §8 records these as explicitly-routed, not fabricated.
- **§8.11 — Downstream hand-offs.** §8 outputs feed §5/§7 CNS + Agent-Runtime (`FWREG-010`), C5 Source-Estate/Reservoir/retrieval-index/reconsideration contracts, Build-OS (F-Self EPP prerequisites, Output 4), and Task-D (Output 6). Also names the two executable proof programs' constitutional prerequisites (Spine/C5 set them; see I.9A.1/I.9A.2).

**G5 candidate decisions consumed (not yet accepted).** The orthogonal S2 axes (I.4), the Foundry recomposition (I.6), the I.3A two-speed seam, the Simulation data-plane placement (I.7) are `recommended · pending Nick+Knox acceptance` — §8 ratifies with an explicit diff, not silent adoption (packet I.0 decision-state table).

**Open decisions §8 must leave open (routed).** Family-label final ratification; residual naming/partitioning picks (§G5-N.8); CNS framework taxonomy (→ §5/§7 + `FWREG-010`); patient-principal portability mechanics (§G5-7); `C44-G4-R01` ranking governance (→ C5/retrieval + Router).

**Prohibited collapses (falsifiers).** Any §8 section that (a) makes S2 operative (a "required/prohibited" force baked into an S2 field without an S3/Settings adoption link); (b) treats S2 as 6 branded reservoir databases/roster; (c) makes the Foundry or Agent Runtime a committer of domain truth; (d) collapses the Foundry whole into its maintenance machinery; (e) reduces the I.3A scope to "one of six" mutually-exclusive kinds; (f) mints a seventh "instant memory" class; (g) re-opens A/C parent or re-derives the frontier's 6 Qs.

**Required proof.** Pinned name-pick criteria for the §G5-N.8 residual set (App-E; packet I.10 #1 "proof"); an explicit-diff record wherever §8 deviates from an accepted G3 distinction.

**Maturity language.** Everything in §8 is `spine-line` ratification of accepted-or-recommended architecture; **nothing is built, contracted, or production-proven** (packet I.0 "reserved ≠ designed ≠ contracted ≠ built ≠ evaluated ≠ production-proven").

**Explicit uncertainties.** Whether Nick re-issues the family label as-is vs diffs it; whether "OMNI Intelligence Foundry" survives the Palantir word-collision as a surface name (§G5-N.8 pick 2); the §G5-N.9 memory-gap (a later naming thread was not recovered by the packet itself and is not in my read set).

---

# OUTPUT 2 — Source-Estate C5 contract outline

**Exact source pointers.** Packet I.3 (S1 constitution), I.5 P01/P10/P16 (patient/federation/build principals), I.10 #2 (Source-Estate mini-contract), App-A P01/P03/P10/P12/P16/P19 (custody rows); G3 `e364acb` §R.1 (landing/quarantine), §R.2 (custody rails + four-identity Amendment-2), §R.3 (package/manifest/completeness/closure + Amendment-4), §R.6 (extraction_run lineage), §R.9 (lineage/provenance), §R.13 (reprocessing), §R.CORPUS P3 verdict (D7-physics reuse + Source-Estate corpus layer above D7), §6 (D7 boundary), §7 (two lifecycle profiles); prior-depth §3/§4.1/§4.2 (the corpus-admission envelope as the compound candidate gap), §7 (F-Self manifest profiles), CL-01/CL-02/CL-03 (partial peers).

**Accepted base decisions.** S1 Source Estate = durable custody of received **and internally-generated** artifacts (incl. simulation specs/runs/outputs), immutable-while-retained, **receipt-truth ≠ content-truth**, non-adopted by default (G3 §2; packet I.3). **Received ≠ concluded** (packet I.1(A)). D7 per-artifact physics are **reused, not rebuilt**; a Source-Estate corpus/package layer sits **above** D7 artifacts (G3 §R.CORPUS P3 ADOPTED verdict; §6). Two lifecycle profiles under shared mechanics: (A) bounded admission package (closable) and (B) open-ended evolving corpus (closable watermarked epochs) (G3 §7).

**C5 Source-Estate contract outline:**

- **§1 Scope + constitutional boundary.** Owns S1 custody governance semantics over pluggable storage rails it does not own; owns **no** domain truth (S3) and **no** reusable-knowledge acceptance (S2). "Corpus layer is not a new plane and not a god-store" (G3 §6 guard).
- **§2 Artifact primitive (subject-agnostic).** Reuse D7 custody/integrity/one-canonical-many-grants/fingerprint-dedup/`upload_event`/open-`document_kind`/5-disposition/federation-ready lineage (G3 §R.CORPUS P3; §6a). **Four orthogonal identities, never collapsed to a hash** (G3 §R.2 Amendment-2): (i) blob/byte identity (content-addressing may single-instance storage — infra only); (ii) artifact identity (provenance · source-system · subject · authority · identifiers · policy — **not hash alone**); (iii) receipt/upload/transmission identity (every materially-distinct receipt survives; idempotent retry resolves to existing receipt); (iv) evidence independence (repeated copies ≠ corroboration by arrival). Custody roles kept distinct (originator · data-subject · legal-controller · processor · custodian · admitting-principal · tenant-scope · visibility/use-authority — G3 §2.1; legal controllership is **not** decided here, routed to legal/privacy owner per App-A Knox §5).
- **§3 Corpus / package layer (the genuine net-new).** Package/collection identity + membership; declared-vs-received completeness; atomic sub-bundles; **purpose-safe partial admission** ("a corrupt training PDF must not block 49,999 valid records," G3 §R.3 / prior-depth §4.3 15-L); quarantine (preserve-with-reason, never drop); closure with enumerated exceptions. **Two lifecycle profiles** (G3 §7 / §R.3): profile A closes; profile B never globally closes but **epochs/ingestion-windows close with explicit watermarks + exceptions**. **A closed package stays closed as a historical receipt** — a correction package is a *new* package that links-to+supersedes a named scope and may reopen *downstream processing* only (G3 §R.3 Amendment-4).
- **§4 Landing + quarantine.** Admission-to-custody gate (≠ acceptance/commit); provenance + authority-to-send capture (authority-to-send ≠ authority-of-content); the five orthogonal ingress axes applied at landing (G3 §5); receipt records what/whence/when/under-what-asserted-authority (G3 §R.1). Duplicate accounting is receipt-preserving (blob-dedup may share storage; received-count reflects receipts, G3 §R.3).
- **§5 Custody / storage-rail interface.** Object/blob/WORM/lakehouse/KMS = **buy/wrap** ("OMNI must not become a lakehouse," G3 §R.2/§R.17); OMNI owns WORM policy, typed-copy discipline (DR/export/cache copies are typed + subordinate, never a second original), and **storage topology ≠ constitutional ownership** (G3 §R.2).
- **§6 Extraction / normalization + `extraction_run` lineage.** `extraction_run` = first-class re-runnable unit; **interpretation ≠ adoption**; model/parser version pinned; one source ↔ many runs over years (G3 §R.6, `GRD-040`); parsers/OCR/embedding models = interchangeable rails; extraction-fidelity gate distinct from artifact-integrity gate (G3 §R.6 / D7 gate-1/gate-2).
- **§7 Lineage / provenance.** Every derived object resolves to exact source artifact + derivation + version (G3 §R.9); repetition ≠ independent evidence; broken lineage = degraded/untrusted state, not silently trusted.
- **§8 Correction / legal-hold / retention / deletion / revocation (received-source side).** Additive supersession; deletion/pseudonymization/legal-hold are governed additive events preserving audit (GDPR-erasure-preserves-audit); the four revocation-family events (G3 §R.15 Amendment-3); no silent source disappearance (packet I.10 #2 falsifier). Reprocessing honors current consent/retention (a withdrawn source is not resurrected — G3 §R.13).
- **§9 As-of / reprocessing.** Corpus-scale reprocessing lineage; as-of reconstruction of "what the estate held/concluded at a prior closure/watermark" (G3 §R.13; explicit C4.4↔C4.5 dependency — packet I.8 mechanism 5 DEFER→C4.5).
- **§10 Federation inbound.** Federated source admission = the F0 fixture; locally-admitted ≠ universally-trusted (G3 §R.16, 15-J); Federation contract owns the cross-operator grant substrate (`draft_for_ratification`, packet FC-1).
- **§11 Simulation-artifact custody.** Simulation spec/persona/population/run/output are **internally-generated S1** artifacts (packet I.7; G3 §R.2 pt 11) — this contract holds them; evaluation/release state is NOT here (Platform E&V/Build-OS, Output 5).
- **§12 Enterprise interface obligations routed here (I.9B).** Connector / continuous-sync / CDC interface (bulk acquisition + ongoing feeds + late/out-of-order + backpressure) — commodity substrate BUY/WRAP; OMNI owns S1 append-only receipt truth (packet I.9B #1). Vendor/rail switching + exit proof jointly with Task-D/Federation (packet I.9B #10).

**G5 candidate decisions consumed.** S1 explicitly includes internally-generated + simulation artifacts (packet I.3, §G5-N.4a correction); the corpus-admission envelope as OMNI-native BUILD (candidate differentiation, not moat — prior-depth §4.3).

**Open decisions.** Exact corpus-parent placement schema (inside widened D7 vs Source-Estate layer — G3 §R.CORPUS defers the schema to C5); quarantine-state enumeration; transport/scanner selection; profile-A/B contract-split detail (all G3 §R.1/§R.3 "deferred").

**Prohibited collapses (falsifiers).** S1 = truth; storing = adopting; corpus-as-exhaust; hash-only artifact identity (erasing receipts/faking independence); any silent source disappearance; declaring D7 sufficient because it can store a PDF; forcing a continuous feed into a single closable package.

**Required proof.** Append-only manifest + custody/correction events; declared-vs-received closure with visible exceptions; deletion-verification (the Bedrock delete-resurrection anti-pattern, prior-depth CL-03); `received ≠ concluded` demonstrable.

**Maturity language.** Contract = `draft-for-ratification target`, **unbuilt** for the corpus/package layer; **partial build evidence** exists only for patient-document custody (canonical `patient_documents` bucket + `patient_document_routing` manifest + `route_patient_document` RPC — but the portal path still writes legacy `intake_uploads`, so the canonical path is not the live path; packet FC-2, Q1/App-A P01). Corpus-scale = **unbuilt** (packet App-A P10 `[U]`).

**Explicit uncertainties.** Whether the corpus parent lands inside a widened D7 or a distinct Source-Estate layer (G3 defers); the enterprise continuous-sync ordering/partial-failure interface is named debt, not designed (packet I.9C risk register).

---

# OUTPUT 3 — Knowledge-Reservoir C5 contract outline

**Exact source pointers.** Packet I.4 (the canonical S2 model + 12 worked examples), I.3 (S2 constitution), I.3A (two-speed seam — S2 is the slow-clock terminus, never live owner-state), I.5 P05/P07/P15 (provider/operator/literature principals), I.10 #3 (Reservoir mini-contract), App-A/B §I.4-coordinate rows; G3 `e364acb` §R.8 (reservoir admission + authority profile + review_gate), §8.1 (authority profile), §8.2 (four orthogonal state-families), §2.3 (S2 vs S1/S3/S4/S5); OpenEvidence `7cb62ed` Review-003 clusters 4/12/13/14 (authority hierarchy, clinician-wisdom, non-crossing firewall); frontier §2 (reservoir contract fields authority_class/owner/review_gate/retrieval_use_boundary); prior-depth §6.3 (independence-weighting candidate law), CL-07 (indexed≠accepted).

**Accepted base decisions.** S2 = governed **reusable** knowledge bodies; owner **accepts** a unit within a bounded authority/use profile; **not** patient truth, **not** raw source, **not** a projection, **not operative policy** (G3 §2; packet I.3). `indexed ≠ accepted` (G3 §R.8; prior-depth CL-07). Reclassified OUT of S2: Clinical Memory→S3, Evidence Plane→S4, wikis→S5, mission context→S6, source custody→S1 (packet §G5-N.4).

**C5 Knowledge-Reservoir contract outline:**

- **§1 Typed-unit schema over the four orthogonal axis-groups** (packet I.4 — the canonical model; **identical S2 axes to Output 1 §8.3**):
  - **Subject:** `primary_subject_domain` (exactly 1: clinical · operations · product · build · risk · brand) + `secondary_domain_tags[]` (0..n).
  - **Content:** `primary_semantic_form` (exactly 1, **controls lifecycle/review**: claim · pattern · procedure · model · synthesis · lesson) + `secondary_forms[]` (0..n).
  - **Origin:** `origin_party` (first_party/third_party, **relative to the admitting principal**) · `admission_scope` (principal_local · operator_local · federation_shared · OMNI_internal · public_reference) · `access_policy_refs[]` (0..n) · `reality_basis` (real_world · simulated) · `epistemic_mode` (observed · reported · inferred · synthesized) · `source_kind` (1 primary + 0..n secondary) · `authority_class` (1 primary + 0..n secondary).
  - **Authority (retained G2):** principal/tenant · authority_basis · review_authority · applicability/scope · **`use_ceiling`** · consequence_class · freshness · sensitivity · admission/activation/currency/materialization states (G3 §8.1/§8.2).
- **§2 `admission_scope` ≠ artifact custody.** `admission_scope` = the governed principal/tenant/profile scope within which the unit was admitted/maintained; it is **NOT** S1/D7 physical/legal custody (`public_reference` is an admission scope, not a custody claim over bytes) (packet I.4 Knox §2).
- **§3 `access_policy_refs[]` — visibility is not intrinsic.** Read authority is evaluated **at request time** against 0..n composed grant/permeability policies; **default-deny when none resolves**; many grants may compose; **the unit never intrinsically grants access to itself** (one canonical unit, many grants) (packet I.4 Knox §3).
- **§4 `source_kind` ≠ `authority_class`.** `literature` is a `source_kind`, **never** an `authority_class` (a journal meta-analysis = `source_kind=literature · authority_class=publisher_or_journal`); a provider preference = `authority_class=principal_assertion`; an operator/build/brand internal record = `institutional_record`; a generic CVE = `source_kind=vulnerability_record · authority_class=other_governed` (issuer), not `policy`/`regulator`. **No `operator_record` catch-all** (packet I.4 Knox §1; examples 8/11).
- **§5 `use_ceiling` + adoption-link law (the load-bearing operative-force fix).** `use_ceiling ∈ {descriptive_only · advisory · executable_candidate · prohibited_for_action}` says what a unit **may inform** — it does **not** confer operative force. **`required`/`prohibited` operative force is NEVER an S2 field** — it is an adopted policy/rule owned by the domain/governance (S3/Settings), carried to the unit by an **explicit adoption link** (packet I.4 Knox §4; worked example 3: a federation-mandatory SOP's "required" force lives in the federation's S3/Settings policy linking to the unit). **This is the deepest law: normativity is adoption-time, not storage-time.**
- **§6 Admission lifecycle + four orthogonal state-families.** admission: `candidate → in_review → accepted | rejected`; activation: `inactive/active/suspended`; currency: `current/stale/superseded/withdrawn`; materialization (form×status) tracked separately (G3 §8.2; §R.8). A `stale`/`superseded`-but-`accepted` unit stays accepted yet non-admissible for high-consequence use. **Passive capture PROPOSES; passive promotion FORBIDDEN** (G3 §R.8 15-K). Contradictions survive (no false-coherence averaging); low-authority material admitted at a low `use_ceiling` rather than rejected; **independence-weighting** distinguishes N copies from N corroborations (packet I.4; prior-depth §6.3; G3 §R.8/§11.2).
- **§7 The OpenEvidence clinical firewall** (packet I.4 clinical decomposition; OpenEvidence `7cb62ed` clusters 4/12/13/14 — **reconciled by the packet**). Within `primary_subject_domain=clinical`, distinct `authority_class` values must not cross-contaminate: `source_kind=literature`→`publisher_or_journal` · `guideline`→`guideline_body` · **collective clinician wisdom → `authority_class=expert_consensus`** (below literature/guideline, above anecdote; `use_ceiling=descriptive_only`; a gated high-risk learning-signal, never automatic truth). **`patient_context` → S3/S6** (NOT an S2 family/authority-class); **observed `care_outcome` → S1/S3 evidence** until reviewed+generalized+admitted. Owns `FWREG-006` (clinical-evidence-reservoir contract) + `FWREG-007` (authority-class taxonomy). *(Divergence flag: the raw OpenEvidence Review-003 cluster 14 lists "clinician-wisdom" and "patient-context"/"care-outcomes" as **separate reservoir families**; the packet's Knox §6 reconciliation demotes these to `authority_class` values + S3/S6 placement. I author the packet's reconciled version, per read-set precedence.)*
- **§8 The slow clock terminates here (I.3A).** An admitted S2 unit is **still not operative** until an owning S3/Settings state adopts it via the §5 adoption link. S2 is **never live owner-state**; if the fast operational clock writes an override into S2 to make the next run see it, the seam is violated (packet I.3A hard laws). One local override never silently becomes operator-wide/platform-common/network without the separate promotion gate advancing `promotion_scope` to `federation_promoted`.
- **§9 Membrane / cross-tenant.** Operator private-alpha (`admission_scope=operator_local`) never becomes platform-common by silent extraction; federation-shared units are only explicitly-promoted, permissioned, lineage-preserving (packet I.5 laws 4/3; App-A P07/P18).
- **§10 Enterprise interfaces routed here (I.9B).** Semantic-mapping/local-vocabulary versioning (a reusable mapping *pattern* may be S2; an **active operational mapping** is committed governance/domain config — the two do not collapse) (packet I.9B #3). S2 admission operations / reviewer capacity → the admission-operations model (I.9C) jointly with Foundry maintenance + Build OS.

**G5 candidate decisions consumed.** The orthogonal axis model itself (I.4, superseding the June-06 roster); `use_ceiling` replacing `normative_posture`; `admission_scope`/`access_policy_refs[]` renamings.

**Open decisions.** Physical partitioning of `form=lesson` units (one partition vs several — an access/scale/review-authority decision, not nomenclature; packet §G5-N.8 pick 3, I.10 #3 open); OpenEvidence member-contract detail (★reread at C5, `FWREG-006`); the reservoir roster/partition + final family name (→ spine §8, G3 §R.8 deferred).

**Prohibited collapses (falsifiers).** Branded-roster tables ("6/8 reservoir databases," KK1–KK8); making an S2 unit operative via a field without an S3/Settings adoption link; `patient_context`/`care_outcome` as S2 authority classes; `lesson`-as-domain; `literature`-as-`authority_class`; an `operator_record` catch-all; treating `admission_scope` as artifact custody; a single intrinsic visibility enum instead of plural request-time `access_policy_refs[]`.

**Required proof.** `indexed ≠ accepted` demonstrable; firewall non-crossing (literature/guideline/wisdom); adoption-link demo (a "required" SOP's force resolving to an S3/Settings link, not an S2 field); independence-weighting vs naive dedup.

**Maturity language.** Contract = **to be minted** (does not yet exist — packet I.10); `FWREG-006`/`FWREG-007` **unbuilt** (`watch`); no verified build of governed reservoir admission.

**Explicit uncertainties.** `form=lesson` partitioning; the OpenEvidence member-contract detail deferred to C5; the raw-source-vs-packet firewall divergence noted in §7.

---

# OUTPUT 4 — OMNI Intelligence Foundry Pilot (F-Self) — Build-Entry outline

**Exact source pointers.** Packet **I.9** (F-Self build-entry charter A–O), **I.9A.1** (F-Self Intelligence Foundry Pilot — Executable Proof Program — cited to the packet, not the prompt), I.6 (Foundry whole vs component), I.10 #6 (Build-OS mini-contract), §G5-5 (F-Self recommended first target); G3 `e364acb` §R.12 (Foundry maintenance-mission machinery), §R.6/§R.8 (extraction/admission), §R.11 (Context Router receipt); Build Entry Gate v0 `…11_build_entry_gate_v0.md` (Foundational Composition Admission Checklist + consequential-composition threshold + 10 required proof questions + non-admission conditions).

**Accepted base decisions.** The Foundry **proposes · compiles · tends · routes — never commits another owner's truth**, never gains cross-tenant access by being the Foundry, never silently promotes network learning (packet I.6 invariant; G3 §R.12 PROPOSE-only). **Whole ≠ component:** the OMNI Intelligence Foundry is the integrated capability; the Foundry maintenance missions/machinery (R.12) is one component; no "Foundry Operations" noun (packet I.6, §G5-N.3/.5).

**Naming + citing the two executable proof programs (packet-sourced, per run-2 discipline).**
- **F-Self Intelligence Foundry Pilot — Executable Proof Program (cite packet §I.9A.1):** the I.9 charter *promoted* to a named post-C4.4 proof program; preserves unchanged — no build authorization in G5; the Build-Entry prerequisites (I.9 §M); the full I.9 A–O fixtures + §N exit criteria. Ownership: Build OS / Platform E&V execute; Spine §8 + C5 set constitutional/contract prerequisites; Build Entry authorizes execution. **Naming it is not executing or passing it.**
- **Enterprise Bootstrap Steel Thread — Executable Proof Program (cite packet §I.9A.2):** named here as a required post-C4.4 proof program (see Output 6 for its Task-D ownership); referenced so this build-entry outline does not conflate F-Self (OMNI-internal, no PHI) with the enterprise steel thread.

**F-Self build-entry outline (I.9 A–O mapped onto the Build Entry Gate checklist):**

- **A. Bounded initial corpus** (I.9.A): this C4.4 packet · bounded control-plane files (catalog `01` · read-graph `04` · decision `03` · guardrail `06`) · bounded source packets · one semantic-loss specimen (wave-5) · one contradiction/invalidation specimen · **NO** patient/clinical/federation content.
- **B. Actors/roles** (I.9.B): source steward · Foundry maintainer · reviewer/admitter · governance owner · projection steward · pilot operator. Agents propose; owners commit.
- **C. Minimal logical components** (I.9.C): corpus manifest · S1 artifact custody · extraction run (**R.6** machinery; **S4 only where a source runs through the external-evidence Evidence Workbench** — F-Self's own corpus is largely R.6, not S4) · candidate knowledge unit · review/admission queue · accepted S2 unit · living S5 projection/wiki · retrieval rail · Context Router draw · immutable S1 run-context receipt · contradiction/invalidation/reconsideration · governance-proposal routing.
- **D. Inputs → outputs** (I.9.D): corpus + control-plane files + specimens → admitted S2 units · compiled S5 wiki · run-context receipts · architecture/guardrail/eval/Build-OS **candidates** (proposals to the control plane — never commits).
- **E. State transitions** (I.9.E): `received(S1) → extracted(candidate) → in-review → admitted(S2)|rejected|deferred → compiled(S5) → drawn(S6, receipt) → (on contradiction) reconsidered → superseded|retained`.
- **F. Authority gates** (I.9.F): admission gate (`indexed≠accepted`) · Build-OS entry gate · control-plane commit boundary (Foundry proposes; owner commits). Consequential-vs-lightweight classification per the gate checklist.
- **G. Interfaces** (I.9.G): S1 custody · Context Router · Architecture Memory Control Plane (proposal-only interface, I.6) · Build OS/eval · retrieval rails (swappable).
- **H. Failure/degraded** (I.9.H): rail unavailable → degrade to lexical, no corpus loss; extraction failure → candidate quarantined, source retained; reviewer absent → queue holds, nothing auto-promotes.
- **I. Privacy/security** (I.9.I): OMNI-internal scope only; no tenant estate read; no PHI; audit trace per hop.
- **J. Observability/proof** (I.9.J): run-context receipt per draw; lineage source→unit→projection; admission/exclusion basis preserved.
- **K. Evaluation fixtures** (I.9.K): semantic-loss specimen (regression) · contradiction specimen (survival) · stale-projection specimen (self-marking) · ranking/exclusion fixture (`C44-G4-R01`).
- **L. Build/buy/wrap posture** (I.9.L): custody = BUY/WRAP; retrieval rails = BUY/WRAP; admission/lineage/reconsideration/Router = BUILD-on-rails. **No vendor selection in the pilot.**
- **M. Entry criteria (each a gate, not a go)** (I.9.M): (1) spine §8 places the S1 corpus owner + ratifies the six classes; (2) a C5 Source-Estate contract mints the corpus-admission envelope (R.1/R.3) + `extraction_run` lineage (R.6/R.13); (3) Build-Entry-Gate v0 admits the slice with the **Foundational Composition Admission Checklist** satisfied.
- **N. Exit / success criteria (the I.9A.1 pass/fail proof obligations)** (I.9.N): source cannot disappear · passive mining cannot promote · a contradiction survives (no last-write merge) · a stale projection self-marks · the affected set is reconstructable · a retrieval rail is swappable without corpus loss · ranking/exclusion basis is preserved · no agent/control-plane self-commit · re-derivation burden is measurably reduced · no false completeness claim.
- **O. Explicit non-goals** (I.9.O): no schema mint · no vendor selection · no patient/clinical/federation data · no autonomous commit · not "the global Foundry" (F-Self is one profile).

**Mapping onto the Build Entry Gate (`11_build_entry_gate_v0.md`):**
- **Consequential-composition threshold classified first** (gate requirement). F-Self consequential paths = owning-domain/control-plane commit + audit/compliance-relevant state; **the pilot has no patient-facing/entitlement/scheduling consequential paths** (OMNI-internal only), which is *why* it is the safe first slice (packet §G5-5).
- **The 10 required proof questions answered by the I.9 A–O map:** (1) source events → I.9.A/C; (2) which domain owns each consequential commit → I.9.F (control-plane owner; Foundry never commits); (3) temporary vs durable → S1 receipt/S5 projection (temporary) vs admitted S2/committed governance (durable), I.9.E; (4) lineage per hop → I.9.J; (5) freshness states → I.9.K stale-projection fixture + G3 §8.2 currency; (6) policy/model/config versions pinned → G3 §R.6 run-version pinning + I.3A version-pinning; (7) suppression/no-op/defer + re-entry → I.9.E `rejected|deferred` + reconsideration; (8) strict replay vs reconstructability → run-context receipt = as-of reconstructability (G3 §R.11 / §11 law 5, not bit-identical); (9) exclusion + governed retention → eviction ≠ deletion (G3 §R.15); (10) forbidden silent cross-domain mutation → the control-plane commit boundary (Foundry proposes only; G3 §R.12 Amendment-1 fence).
- **Non-admission conditions** (gate): missing consequential classification, freshness/re-anchor declarations, version pinning, suppression lifecycle, or ownership-preserving commit boundaries → block. F-Self must satisfy each before authorization.

**G5 candidate decisions consumed.** F-Self as the recommended FIRST implementation target (packet §G5-5, I.9); I.9 promoted to the named I.9A.1 proof program (packet I.9A.1 — bounded post-test patch).

**Open decisions.** Build-entry sequencing (packet I.10 #6 open); enduring owner of Runtime-Ops operational S3 (G3 §R.7 deferred → spine §8); the provider/clinical-reference specimen only *after* non-PHI controls are proven (I.9.A).

**Prohibited collapses (falsifiers).** Foundry-as-committer; passive mining that promotes; build authorization inside G5; treating the pilot as "the global Foundry"; the Foundry whole collapsed into its maintenance machinery.

**Required proof.** The I.9 §N exit criteria treated as gate tests (packet I.10 #6 "proof"); the Foundational Composition Admission Checklist bundle.

**Maturity language.** **Unbuilt.** G5 authorizes **no build**, mints no schema, selects no vendor. OMNI already hand-runs a primitive version (catalog · decision ledger · read-graph · handoffs), so the first build *replaces a real manual grind* — but that is a rationale, **not a build claim** (packet §G5-5). Naming the I.9A.1 EPP is not executing or passing it.

**Explicit uncertainties.** Whether the enduring Foundry-mission steward is Runtime-Ops vs Build-OS (deferred); build-entry sequencing relative to spine §8 + C5 (both prerequisites, un-sequenced).

---

# OUTPUT 5 — OMNI Simulation Lab boundary charter

**Exact source pointers.** Packet **I.7** (Simulation & generated evidence), §G5-N.10 (the DECIDED disposition), §G5-N.4a row 6 (simulated-scenario placement), I.8 mechanism 12 (Tesla/Simile evidence, `[F]` speaker-asserted); Simulation blob `a709c5d` Review-003 clusters 3/6/12/13/14 + §D "strongest OMNI line"; G3 `e364acb` §2 (S1 includes internally-generated), §R.2 pt 11 (runtime may emit internally-generated S1).

**Accepted base decisions.** Simulation informs design; **it never commits truth** (`projection≠truth` `D0THES-DEC-033` + candidate≠commit + `GRD-036`) — the deepest existing law the source lands on (Simulation Review-003 cluster 3, §D). Convergent/divergent labeling + distribution-match/TVD metrics are **speaker-asserted `[F]`** watch evidence (packet I.8 row 12; Simulation Review-003 §C talking-their-book caveat).

**Simulation-Lab boundary charter:**

- **§1 Decision (precise).** The **OMNI Simulation Lab is a candidate bounded capability formulation under Platform E&V / Evaluation & Assurance**, using **Agent Runtime** to execute simulation actors/runs and **Build OS** where it generates build/evaluation fixtures. It is **not a domain, plane, reservoir, or truth owner**; its full architecture is **not authored in C4.4** — a separate future charter if Nick authorizes it (packet I.7; §G5-N.10 "separate future arc, OUTSIDE C4.4"). Status: `candidate · watch · doctrine partial · build absent` (`EVSRC-2026-000242`).
- **§2 Data-plane placement (decided INSIDE C4.4 — so simulated cases are not homeless):**
  - simulation **spec / persona / population model / run config / run receipt / output → internally-generated S1** artifacts (packet I.7; §G5-N.4a row 6; G3 §2 S1);
  - **evaluation records + release decisions → Platform E&V / Evaluation & Assurance owner-state** (and **Build OS** for build-specific fixtures) — **NOT universally S4** (S4 is the external-evidence Evidence Workbench; it assists only where *external* evidence is processed — packet I.7 Knox §6);
  - an **admitted, generalized** result → candidate **S2** (`reality_basis=simulated · source_kind=simulation_run · authority_class=model_output · use_ceiling=descriptive_only`);
  - any policy / product-rule / clinical change → still requires its **owning domain's commit**;
  - **simulation never becomes truth by generation alone** — convergent-vs-divergent labeling + explicit confidence metrics required before any real-world use (packet I.7; Simulation Review-003 clusters 12/13/14).
- **§3 Boundary invariants (the constitutional fence C4.4 owns).** No auto-promotion; simulated output never auto-commits to S3/policy/clinical truth; the Lab commits nothing; grounding in real behavioral data where ethically allowed but **never launders bias or bypasses consent/PHI** (Simulation Review-003 §D); simulation-eval ≠ agent-eval (kept distinct — Simulation Review-003 §C).
- **§4 Minimum future-charter dimensions (recorded, NOT authored here — packet I.7):** scenario provenance · population/persona construction · model/runtime version · reality/simulation labeling · calibration & validation · uncertainty · bias · authority/use_ceiling · run receipt · evaluation owner · promotion prohibition · release boundary · human-exposure boundary. (Corroborated by Simulation Review-003 primitives: `convergence_label`, `distribution_match_metric`, `simulation_confidence_report`, `simulation_statistical_standard` — all `watch`, speaker-asserted.)
- **§5 Ownership routing.** Capability/machinery = future bounded arc (spine §8 candidate input + its own charter if authorized); run execution = Agent Runtime; evaluation/release = Platform E&V / Evaluation & Assurance; build fixtures = Build OS; data custody = S1 (Output 2 §11); admitted lessons = S2 (Output 3, `reality_basis=simulated`).

**G5 candidate decisions consumed.** The data-plane placement (I.7 / §G5-N.4a) is decided; the capability arc is deferred (§G5-N.10).

**Open decisions.** The full Simulation-Lab architecture (a separate future charter, only if Nick authorizes); calibration/uncertainty standards (Simile's TVD<0.15 / convergent-divergent are watch-only, not adopted metrics — packet I.8 row 12 `[F]`).

**Prohibited collapses (falsifiers).** Simulation as a domain/plane/reservoir/truth owner; simulation artifacts anywhere but S1; evaluation/release records as universal S4; simulated output auto-committing to S3/policy; treating speaker-asserted metrics (TVD/85%) as proof.

**Required proof.** Convergent-vs-divergent + explicit confidence metrics before any real-world use; the `simulation_confidence_report` "do-not-use-for" decision-limits (Simulation Review-003 primitive) — as a *future-charter* obligation, not a current build.

**Maturity language.** `candidate · watch · doctrine partial · build absent`. The Lab is **not an accepted C4.4 module**; only the data-plane relationship is decided inside C4.4.

**Explicit uncertainties.** Whether Nick authorizes the separate Simulation-Lab arc at all; whether evaluation ownership sits with Platform E&V vs Build-OS for a given fixture (packet I.7 splits by build-vs-general use).

---

# OUTPUT 6 — Comparator `BUILD / BUY / WRAP / PARTNER / HOST_ON` matrix

**Exact source pointers.** Packet **I.8** (comparator-by-mechanism, the canonical matrix, verified `[V]` / flagged `[F]` + claim-authority grades), **I.9A.2** (Enterprise Bootstrap Steel Thread — Executable Proof Program — cited to the packet), I.9B (10 enterprise interface obligations), I.9C (admission-operations + scale-risk register), I.10 #7 (Task-D mini-contract), §G5-N.6 (comparator inheritance receipt); G3 `e364acb` §R.17 (build/buy/wrap per mechanism); prior-depth §4.2 (OMNI-relative mechanism matrix), §9.1 (34-system census, CL-01…CL-15), §4.3 (candidate differentiation, not moat); comparator registry `…comparator_analogy_registry.md` §A (Palantir) / §B (Anthropic/Amazon/Tesla/NASA) / §D (incidental vendors).

**Accepted base decisions.** Comparators are **evidence, never architectural authorities**; **no superiority, "full," or moat claim anywhere**; "not found in a bounded survey ≠ does not exist" (G1 market-exhaustiveness = low-to-moderate) (packet I.8; prior-depth §4.3/§9). Palantir = the **closest composition competitor**; host-vs-build-vs-wrap is `DEFER→Task-D` (packet I.8 ★ source-path correction). `[F]` rows are watch-only.

**Disposition legend (packet I.8):** **BUILD** (identity, OMNI-owned) · **BUILD-on-rails** (OMNI semantics over bought infra) · **BUY/WRAP** (commodity substrate) · **PARTNER/HOST_ON** (evaluate) · **DEFER→Task-D**. Verification flags `[V]`/`[F]`; claim-authority: `vendor-doc` · `independent` · `speaker-asserted` · `teaching-level`.

| # mechanism | incumbent evidence + pointer | disposition | claim-authority + flag | falsifier / DEFER |
|---|---|---|---|---|
| 1 source/corpus custody | AWS S3 Object-Lock WORM; Bedrock KB delete defect (prior-depth §4.2/§9.1 CL-03) | **BUY/WRAP** substrate + **BUILD** custody semantics | vendor-doc `[V]` | can an incumbent compose raw+derived lifecycle faster? → Task-D |
| 2 package/manifest/closure | Palantir dataset txns GA/media-txn preview; FHIR Bulk manifests (CL-01/02) | **BUILD** (unbuilt corpus-admission envelope) | vendor-doc `[V]` | two manifest profiles (bounded vs evolving) must not collapse |
| 3 catalog/lineage | Palantir column-lineage; Databricks Unity (breaks on rename) (CL-05) | **WRAP** (PLUG catalog infra; "OMNI must NOT become a lakehouse") | vendor-doc `[V]` | retrieval unit resolves to source + derivation |
| 4 semantic model/ontology | Palantir Foundry/AIP (Action-gated commit, markings, JSON/OpenAPI export; RDF/OWL portability NOT established) (CL-06/14; registry §A) | **BUILD (identity)**; Palantir **HOST_ON/PARTNER/WRAP DEFER→Task-D** | vendor-doc `[V]` | "can Palantir implement this faster than OMNI?" → Task-D |
| 5 temporal/as-of | Palantir bitemporal (nearest peer); BigQuery time-travel; Iceberg (CL-…; §6.3) | **BUILD → DEFER (C4.5)** | vendor-doc `[V/F]` | C4.5 six-source anchor + REV-184 frozen-context |
| 6 access/markings | Palantir CBAC; Glean permission-LAG oversharing (Knostic, CL-09/13) | **BUILD** | vendor-doc + **independent** (Knostic) `[V]` | PHI-in-embeddings law; break-glass → replayable-proof |
| 7 retrieval/context/ranking | Glean KG; Azure hybrid+RRF; Pinecone/Weaviate/Chroma/Elastic (CL-04b/07/09) | **BUY/WRAP rails** + **BUILD** Router | vendor-doc `[V]`; **not verified (`C44-G4-R01`)** | ranking/selection/exclusion proof + rail-swap test |
| 8 memory/skills | **Anthropic** Skills/MCP/read_only/Memory; LangChain 3-tier; Letta (MINJA); Vertex last-write (CL-07/08) | **BUILD-on-rails** | vendor-doc `[V]` | conversation→candidate memory-promotion seam; PHI never weight-baked |
| 9 wiki/projections | OKF v0.1; OpenWiki 0.2; Karpathy; LLM-Wikis panel (compiled cache ≠ truth) | **BUILD** | vendor-doc/teaching `[V]` | OKF compatibility profile; dual human+agent projection |
| 10 knowledge admission/reconsideration | CQ (Mozilla.ai) propose→confirm/tiers; Anthropic read_only; Palantir Action-gate (CL-03/05/07/08) | **BUILD** (near-peers CQ/Anthropic = DIFF) | vendor-doc/independent `[V]` | evidence-clustering + independence-weighting vs naive dedup |
| 11 action/commit | Palantir Action-Types; ServiceNow HITL; Amazon Act-loop; CQ propose-vs-commit (CL-06; registry §B) | **BUILD** | vendor-doc `[V]` | moat needs implemented behavior + measured fidelity — none demonstrated |
| 12 evaluation/simulation | **Tesla** shadow/sim `[F]`; **Simile** convergent/divergent + TVD<0.15 **`[F]` speaker-asserted** (EVSRC-000242) | **BUILD (separate arc)** — Sim Lab `watch` | Tesla teaching-level `[F]`; Simile **speaker-asserted** `[F]` | Tesla row re-read; confidence-metrics before real-world use |
| 13 federation/portability | Palantir JSON/OpenAPI export; Epic Care Everywhere; Datavant tokens; Particle purpose forgeable (CL-13/14) | **BUILD (identity)**; Palantir infra **HOST_ON/PARTNER/WRAP DEFER→Task-D** | vendor-doc `[V]` | portability/copyability test → Task-D; F0 envelope unbuilt |
| 14 operations/build | **Anthropic** build-OS discipline; IBM watsonx Orchestrate `[F]`; LangChain Context Hub (§9.1) | **BUY/WRAP/PARTNER** orchestration + **BUILD** OMNI admission/authority/proof/maintenance semantics | Anthropic teaching `[V]`; IBM `[F]` thin | authorability spec authored, not frozen/executed; ~8–12-artifact manual burden (directional) |
| ★ OpenEvidence (clinical cross-cut, not a §9.1 row) | physician-augment + clinical-context-packet + stratified authority + collective-wisdom firewall (EVSRC-000068) | **PARTNER/WRAP** behind a `clinical_evidence_service_adapter` capability envelope | vendor-doc/independent `[F]` (member-contract ★reread at C5) | never surrender care authority; build-vs-buy gate at `FWREG-006` |

**Naming + citing the Enterprise Bootstrap Steel Thread (packet-sourced).** The **Enterprise Bootstrap Steel Thread — Executable Proof Program (cite packet §I.9A.2)** is a **required post-C4.4 executable proof program — NOT a new class.** It proves OMNI can bootstrap and continuously operate a real enterprise estate through the six classes + the I.3A two-speed seam, without a seventh class or a sovereign vendor ontology, over a bounded realistic enterprise fixture (mixed EHR/CRM/ERP/files/HL7/FHIR/event sources · source manifests + continuous sync · identity collisions + un-merge · local vocabulary + semantic mapping · workflow/microdecision observation · action/override lineage [I.3A fast clock] · current local policy/config owner-state · correction/revocation/permission change · temporal/as-of with C4.5 · Context Router draw · outcome + reconsideration [I.3A slow clock] · vendor/rail switching [exit proof] · degraded operation + failure injection). **Ownership split (routed, not built):** Task-D = composition/procurement alternatives (host/build/wrap/partner) + bounded fixture charter + economic/operating assumptions; Spine/C5 = constitutional + contract prerequisites; Build Entry = execution authorization; Runtime/Build-OS/Platform-E&V = execution + proof. **No arbitrary latency/scale target is canonized in G5** (no "<2s S1→S5", no "seven days without intervention") — Task-D/Build-Entry set consequence-specific, measurable objectives. **Naming ≠ executing or passing.**

**Enterprise interface obligations feeding Task-D (I.9B, condensed).** connector/CDC → C5 Source-Estate+Task-D · entity-resolution→Identity S3 (never an "S2 golden record") · semantic-mapping/vocab versioning · workflow/microdecision observation (**a composition across owners — Agent Runtime is NOT the universal enterprise observer**) · action/override lineage → I.3A · local config/policy commit → S3/Settings · runtime rate-limit/backpressure/sandbox · admission-operations/reviewer capacity → I.9C · outcome/reconsideration → I.3A slow clock · vendor/rail switching + exit proof (packet I.9B #1–#10). **Admission-operations + scale-risk register** (I.9C): consequence/risk tiers · review-authority · queue priority · dedup-without-erasing-independent-evidence · recurrence thresholds · reviewer capacity/SLA · rubber-stamp detection · a stop/degraded condition when the review channel saturates — carried as contract/executable-proof/procurement/watch **debt, not proven defects**.

**Build Entry prerequisites (named).** The Steel Thread's execution is authorized only through Build Entry Gate v0's Foundational Composition Admission Checklist (consequential-composition classification + the 10 proof questions + non-admission conditions), with Spine §8 + C5 setting the constitutional/contract prerequisites first (packet I.9A.2 ownership split; `…11_build_entry_gate_v0.md`).

**Accepted base decisions.** Palantir = closest composition competitor, no moat proven; commodity storage/retrieval/parsers/OCR/MPI = plug/wrap; Task-D decision precedes vendor selection (packet I.8; I.10 #7/#9; G3 §R.17).

**G5 candidate decisions consumed.** I.9A.2 as a named proof program; the I.9B/I.9C enterprise-interface + admission-operations obligations as Task-D operating-economics inputs (packet bounded post-test patch).

**Open decisions.** Every `DEFER→Task-D` cell (mechanisms 4/5/13 host-vs-build-vs-wrap; the OpenEvidence build-vs-buy gate); the I.9C debts; consequence-specific measurable targets (Task-D/Build-Entry set them — no canonized G5 number).

**Prohibited collapses (falsifiers).** Any superiority/paper-moat claim; vendor lock-in inheritance; S2-as-golden-state/live-config; arbitrary performance targets canonized as architecture; treating `[F]`/speaker-asserted rows as settled; a "moat" asserted without measured fidelity.

**Required proof.** A measurable healthcare-native advantage test (packet I.10 #7); the Steel-Thread coverage list run as proof obligations at Build-Entry (not now).

**Maturity language.** All BUILD items are **candidate differentiation** whose defensibility depends on implemented behavior + measured fidelity — **not established pre-build**; OMNI's realization is partial/manual/contract-only (prior-depth CL-15). **No moat, no superiority, no "OMNI ahead."**

**Explicit uncertainties.** Whether an incumbent (esp. Palantir) can compose faster than OMNI implements — the honest open Task-D/strategy risk (prior-depth §4.3 ★; packet §G5-N.6); switching cost of Palantir ontology export unestablished (CL-14).

---

# NONBINDING self-conformance matrix (I do NOT adjudicate — Knox does)

| output | (a) read-set only | (b) no prohibited collapse | (c) correct maturity language | (d) resolves assigned open items | (e) cross-output consistent | self-assessed |
|---|---|---|---|---|---|---|
| 1 Spine §8 | yes | yes | yes (spine-line ratification, nothing built) | yes (all 6 frontier Qs resolved; family label ratify/diff; lesson as form; Clinical Memory=S3; seams placed; partitioning→C5) | yes | self-PASS (nonbinding) |
| 2 Source-Estate C5 | yes | yes | yes (corpus layer unbuilt; only patient-doc partial-build) | yes (corpus-admission envelope; received≠concluded; custody/receipt separation; correction/legal-hold) | yes | self-PASS (nonbinding) |
| 3 Knowledge-Reservoir C5 | yes | yes | yes (contract to-be-minted; FWREG-006/007 unbuilt) | yes (4 axis-groups + cardinality; admission_scope≠custody; access_policy_refs[] plural/default-deny; source_kind≠authority_class; use_ceiling + adoption-link; OpenEvidence firewall) | yes | self-PASS (nonbinding) |
| 4 Foundry-Pilot (F-Self) | yes | yes | yes (unbuilt; no build authorized) | yes (I.9 A–O → Build-Entry checklist; **names + cites I.9A.1**) | yes | self-PASS (nonbinding) |
| 5 Simulation-Lab charter | yes | yes | yes (candidate/watch/build-absent) | yes (S1 artifacts; Platform-E&V/Build-OS eval, not universal S4; gated S2; future-charter dims) | yes | self-PASS (nonbinding) |
| 6 Comparator matrix | yes | yes | yes (candidate differentiation, no moat/superiority) | yes (I.8 mechanisms + disposition + claim-authority; **names + cites I.9A.2**; Build-Entry prereqs) | yes | self-PASS (nonbinding) |

**Cross-output consistency checks (App-E §E.5):** S2 axes identical across #1 §8.3 and #3 §1 (same four axis-groups + cardinality) ✓; Foundry whole-vs-component identical across #1 §8.7 and #4 (integrated capability vs R.12 maintenance machinery) ✓; Simulation placement identical across #1 §8.8 and #5 §2 (S1 artifacts; eval = Platform-E&V/Build-OS not universal S4; gated S2) ✓; no output makes S2 operative (all route operative force to an S3/Settings adoption link) ✓; no output invents a class absent from I.3 (no seventh/"instant memory" class) ✓.

# Exact source pointers per material claim
Consolidated inline under each output's "Exact source pointers" + parenthetical citations. Load-bearing anchors: six classes = G3 `e364acb` §2/§2.1/§2.2/§2.3 + packet I.3; S2 orthogonal axes = packet I.4; two-speed law = packet **I.3A** (four orthogonal dimensions `operational_effect`·`owner_state_kind`·`knowledge_lifecycle`·`promotion_scope`); Foundry whole/component = packet I.6 + G3 §R.12; Simulation boundary = packet I.7 + §G5-N.10 + Simulation blob `a709c5d` cluster 3/§D; OpenEvidence firewall = packet I.4 + OpenEvidence blob `7cb62ed` clusters 4/12/13/14 (packet-reconciled); comparator = packet I.8 + prior-depth §4.2/§9.1 + registry §A/§B; proof programs = packet **I.9A.1 / I.9A.2**; Build-Entry checklist = `…11_build_entry_gate_v0.md`; frontier 6 Qs = frontier `…2026-06-06.md` §1/§4 + G3 §12 + spine-shape §8 row 8.

# Explicit uncertainties
- Family-label ratify-vs-diff and the "OMNI Intelligence Foundry" surface-name Palantir collision (§G5-N.8 picks 1–2).
- `form=lesson` physical partitioning (§G5-N.8 pick 3) — routed to C5/spine, not resolvable from the packet.
- The §G5-N.9 architecture-memory gap: a later Nick/Knox/Opus naming thread was **not recovered by the packet** and is **not in my read set** — I did not fabricate a replacement clinical-literature-body name.
- Whether an incumbent (Palantir) can compose faster than OMNI implements (prior-depth §4.3 open Task-D risk).
- Legal controllership per principal (App-A Knox §5 — routed to legal/privacy owner, not architecture).
- The raw OpenEvidence source vs packet firewall placement divergence (Output 3 §7) — resolved in favor of the packet per read-set precedence.

# Mandatory concepts I could NOT source from the allowed read set
**None.** Every mandatory concept was sourced to a pinned read-set object. Specifically, the two run-1 PARTIAL items are now packet-sourceable and cited to the packet, not the prompt: the **two-speed law** → packet **§I.3A**; the **F-Self Intelligence Foundry Pilot — Executable Proof Program** → packet **§I.9A.1**; the **Enterprise Bootstrap Steel Thread — Executable Proof Program** → packet **§I.9A.2**. The Build-Entry prerequisites are sourced to `…11_build_entry_gate_v0.md` (Foundational Composition Admission Checklist) + packet I.9 §M / I.9A.2 ownership split. The App-E §E.7(e) required-concept set (Simulation boundary; Foundry whole/component; OpenEvidence firewall; adoption-time normativity; admission_scope≠custody + access_policy_refs[] plural/access-time; the I.3A two-speed seam; the two named proof programs) is present and packet-cited across Outputs 1–6.

---

ANGLE C COMPLETE. NO VERDICT ISSUED. AWAITING KNOX ADJUDICATION.
