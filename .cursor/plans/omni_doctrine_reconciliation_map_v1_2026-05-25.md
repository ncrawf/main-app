# OMNI Doctrine Reconciliation Map v1

> **F.2.0.v1 CALIBRATION REFRESH COMPLETE 2026-05-25 — F.2.2 STAGED BATCHES NEXT (REFRESHED V1 LENS FOUNDATION)**
>
> Phase F.2.0 calibration (6 audit rows + 7 thesis-gap rows + 0 K8 conflicts + executive verdict + self-assessment + Operating Contract §17) approved-in-principle 2026-05-25 by Nick + Knox. Method validated. One required refinement for F.2.2: staged batches (4-6 batches of ~5-7 artifacts each, NOT a monolithic mega-run), with each batch mandatorily mixing substrate-spine + cruft-likely UI/product-drift sections to correct calibration sample-bias. Knox verbatim: *"This calibration is strong. The method worked. The most important finding is that Thesis v0 §12.1 may understate existing substrate."*
>
> **2026-05-25 v1 lens swap**: Thesis v1 (`omni_thesis_v1_2026-05-25.md`) spawned 2026-05-25 per `D0THES-DEC-002` to absorb case-centered care + visible-provider deployment + AI capability governance + Q7 §12.1 absorption + strategic pressure-test. F.2.0 calibration findings preserve substantively (calibration was v0-lens; calibration findings remain valid as v0-lens audit); F.2.2 batches operate against v1 lens. Audit picks for F.2.2.A unchanged (Charter + Protocol + Control Plane + AGENTS + system map §1F + §1G); lens swap is the operative change. Calibration's Q7 finding (thesis v0 §12.1 understates 1K.5.A) ABSORBED into v1 §12.1 refinement; D0THES-REV-010 (observation/assertion naming reconciliation) directionally resolved by v1 §12.1 (preserve `1K.5.A patient_clinical_assertions` substrate naming; thesis cross-references). AI capability governance now in v1 §12.8 — directly relevant for F.2.2.D DL audit batch (audits AI-related substrate including 1K.5.A three-fan-out narrative pipeline + Stage 1.5 multi-question assertion-builder + AI extraction emitter); v1 §12.8 provides doctrine lens for that batch.
>
> Reconciliation Map v1 grows in-place through F.2.2 batches per Operating Contract §17 append rules.
>
> **2026-05-25 F.2.0.v1 Calibration Refresh (per Knox three-tier policy)**: Same-day post-v1-spawn refresh of the F.2.0 calibration against v1 lens (v0-lens findings preserved as historical layer in §§0-7; v1-lens findings layered in §8). Outcome: 0 Tier 1 mechanical errata; 5 Tier 2 substantive bidirectional findings (routed to Phase G via D0THES-REV-027..031; v1 NOT patched per Knox three-tier policy); 0 Tier 3 materially-misleading findings. All 6 calibration rows STABLE under v1 lens (0 K-category changes; amendment SCOPE grew ~1.5-2x per row). v1 CONFIRMED usable as F.2.2 audit lens. F.2.2.A staged batch begins next against refreshed v1 lens foundation. See §8 for full v1-lens refresh analysis.

Document type: `doctrine_candidate`
Authority: `derived_nonbinding` (calibration + audit output of OMNI Doctrine Refresh Arc; informs Phase G refresh but is not binding canonical doctrine)
Status: `F.2.0 calibration complete; F.2.1 approved-with-refinement; F.2.2 staged batches begin (next: F.2.2.A coordination spine + scheduling/messaging UI cruft test)`
Domain(s): `architecture_governance`, `omni_doctrine_refresh`, `audit`
Lifecycle role: `governed_stream_artifact` (reconciliation map v1; F.2.0 calibration → F.2.2 full audit → F.2 closure)
Source-of-truth relationship: F.2.0 calibration of the OMNI Doctrine Refresh Arc per `~/.cursor/plans/omni_doctrine_refresh_23fb24b1.plan.md`. Companion to OMNI Thesis v0 (canonical: `.cursor/plans/omni_thesis_v0_2026-05-24.md`).
Supersedes: none
Superseded by: F.2.2 full audit completion expands this artifact in-place per Operating Contract §17; ultimately Phase G refresh outputs at canonical destinations supersede the map's classifications.
Manifest action: `add_tier2`
Review gate: `user_knox_required` (F.2.1 calibration approval; later F.3 reconciliation map approval before Phase G)

agent_read_rule: `consult_if_routed`

Volume: 1
Volume state: `open_for_append` (calibration → full audit batches accumulate)
Spawned: 2026-05-25 (F.2.0 calibration batch)
Next volume: TBD (Reconciliation Map v2 if F.2.1 requires re-calibration; otherwise this volume grows through F.2.2)

---

## §0 Status Posture — F.2.1 APPROVED-WITH-ONE-REFINEMENT

**F.2.1 calibration review gate complete 2026-05-25 by Nick + Knox.** Outcome: **approve-with-one-refinement**. Method validated. Calibration marker REMOVED.

**Knox verbatim on calibration outcome**: *"This calibration is strong. I agree with the read. ... The method worked: evidence-grounded classifications, confidence levels, no repair during audit, valid-decision preservation, bidirectional thesis feedback, system-map section handling, clear sample-bias warning. The most important finding is that Thesis v0 §12.1 may understate existing substrate: 1K.5.A / patient_clinical_assertions already carries much of the observation/extracted_assertion logic. That should be treated as thesis feedback, not audit failure."*

**One required refinement for F.2.2** (binding per F.2.1):

1. **Staged batches, not blank check.** F.2.2 executes in 4-6 batches of ~5-7 artifacts each. Per-batch checkpoint commit + per-batch executive verdict + per-batch Tier 2 stop report.

2. **Each batch MUST include cruft-likely sections, not only substrate-spine docs.** Specifically sample scheduling UI / messaging UI / intake UI / analytics / identity-merge UX / financial lifecycle material per batch so audit tests BOTH (a) preserve valid decisions inside crufty containers, AND (b) identify stale containers themselves. Calibration sample bias (substrate-spine focus) MUST be corrected from F.2.2.A onward.

3. **Per-batch bidirectional thesis feedback continues.** Q7 "what does the audit teach us about the thesis itself" is mandatory per-batch. Calibration's Q7 finding (thesis v0 §12.1 understates 1K.5.A substrate) is the bidirectional-feedback signal F.2.2 batches must keep producing.

**F.2.2 batch structure** (per the OMNI Doctrine Refresh Arc plan §F.2.2):

- F.2.2.A coordination spine + scheduling/messaging UI cruft test (~5-7 artifacts; next)
- F.2.2.B catalog/routing spine + analytics/financial cruft test (~5-7 artifacts)
- F.2.2.C ledgers + identity/intake cruft test (~5-7 artifacts)
- F.2.2.D DL audit + AI layer cruft test (~5-7 artifacts; heavier)
- F.2.2.E architecture + governance + remaining (~5-7 artifacts)
- F.2.2.F (only if needed) parking-branch consult batch (~3-5 artifacts)

**Reconciliation Map v1 grows in-place through batches** per Operating Contract §17 append rules. F.2.2 master closure aggregates all batch verdicts into a master Executive Audit Verdict at top of map. F.3 review gate then reviews master verdict before Phase G refresh executes.

**Operating principle (preserved across all batches)**: preserve-by-default for memory; authority-by-proof. Memory (file, history) preserved; authority (binding force) provisional pending audit-proof of thesis-alignment.

**Evidence discipline (preserved)**: every classification cites specific artifact content with rationale. No vibes / title / memory classifications.

**Confidence discipline (preserved)**: every row gets `confidence_level: high / medium / low`. Low-confidence rows default `refresh_action: needs_deeper_read`.

**No repair during F.2 (preserved)**: this map classifies and sequences only. Phase G is the repair phase. If audit finds a stale or extension-needed doc, it gets classified + valid decisions preserved + queued for Phase G action.

**Substrate health note**: calibration showed the substrate is healthier than feared. F.2.2 must NOT default to expecting cruft; same evidence + valid_decisions_to_preserve discipline applies whether the artifact turns out to be K1 preserve or K4 stale.

**Operating principle**: preserve-by-default for memory; authority-by-proof. Memory (file, history) is preserved; authority (binding force) is provisional pending audit-proof of thesis-alignment.

**Evidence discipline**: every classification (Knox category / memory_disposition / authority_disposition / refresh_action) cites specific artifact content with rationale. No vibes / title / memory classifications.

**Confidence discipline**: every row gets `confidence_level: high / medium / low`. Low-confidence rows default `refresh_action: needs_deeper_read` (NOT a final refresh order).

**No repair during F.2**: this map classifies and sequences. F.2 does NOT rewrite doctrine. Phase G is the repair phase. If audit finds a stale or extension-needed doc, it gets classified + valid decisions preserved + queued for Phase G action.

---

## §1 Executive Audit Verdict (mini; scoped to F.2.0 calibration batch)

7 mandatory synthesis questions, each answered with bullets naming specific artifacts. Anything not fitting one of the 7 goes in "Additional Findings" sub-section.

### Q1 — What is healthier than expected?

- **`1K.5.A Clinical concept + assertion layer`** (system map lines 5077-5385) is SUBSTANTIVELY MORE ALIGNED with thesis v0 §12.1 than thesis v0 articulates. 1K.5.A already implements: `patient_clinical_assertions` table with `confidence` enum (low/moderate/high/definitive) + `confidence_score` (numeric 0.00-1.00 for AI authors) + `assertion_type` (12 values including present/absent/suspected/ruled_out/active_problem/resolved/family_history/risk_factor/exposure/use/allergy_reaction) + `status` (unconfirmed/provider_confirmed/provider_rejected/provider_resolved/provider_refined/retracted/superseded) + `authored_by` (9-value enum from patient_reported → provider_confirmed → ai_suggested → system_derived with computed `authority_rank` generated column) + `evidence_refs` typed union + `metadata.conflict_state` for v0 §10 #1 no-silent-contradictions + append-only supersession chain (`supersedes_assertion_id`) + `concept_version` pinning + `longitudinal_pattern` rollup view with 6 enum values (consistent_present/consistent_absent/consistent_resolved/conflicting/uncertain/insufficient_history). Thesis v0 §12.1 names "observation + extracted_assertion as first-class primitives between source_event and candidate" — 1K.5.A IS that layer, with richer detail.

- **`§1Z Universal CNS Event Envelope`** (system map lines 11454-11643, DL-16 home) already implements the 7-category vocabulary partition (`§1Z.2`: Domain event / Canonical domain state / orchestration_run / orchestration_action / Rail/surface projection / Outcome event / CNS decision) that thesis v0 §8 universal flow operates over. Thesis describes modality-interchangeable input flow; §1Z provides the underlying universal envelope + registry + atomicity + isolation + audit substrate that makes that flow work. The thesis preserves and extends rather than replaces.

- **`coherent_omni_architecture_pattern_2026-05-17.md`** explicitly self-describes (§5) as "NOT new doctrine ... CROSS-DL PATTERN REFERENCE — a one-page distillation." The §1 three-layer pattern (planned commitment → actual delivery → linked evidence/commerce) is validated across 10 domains (Scheduling, Commerce, RBAC, Federation, Intake, Messaging, Clinical-Media, Care Obligations, Promo, Future pillars). Thesis v0 §1 + §6.5 + §10 + §12 all extend cleanly via additive amendments without disturbing the 3-layer pattern.

- **`09_omni_build_os_layer_model.md`** 5-layer Build OS model (Truth / Execution / Command-Tool / Runtime-Proof / Governance-Cadence) is structurally orthogonal to thesis content. Thesis preserves the Build OS triplet (per thesis v0 §16) intact; new artifacts from the 5 surgical additions fill Layer 1 (Truth) as additive entries, not restructuring.

- **`CNS ADR (`cns_action_orchestration_adr_2026-05-17.md`)`** Round 3.5 locked doctrine (6 sections §2.14-§2.20 + Round Kickoff Reading Discipline §2.21) all aligns with thesis. Source-agnostic CNS action orchestration + Context Module Layer (6 module types) + CNS Action Envelope (18 fields) + Provider Clinical Context Packet (AI proposes / deterministic validates / provider signs) ALL ALIGN with thesis v0 §8 + §9 + §10 + §12.1.

### Q2 — What is worse than expected?

- **None of the 6 calibration artifacts are "stale UX cruft from week 2."** Nick's framing in the conversation arc ("the system map is a collection of random UX ideas I was chasing around like a wild man on week 2") may have over-stated the problem at the substrate-spine level. **CAVEAT: this is sampling bias** — we deliberately audited 2 substrate-spine sections (§1Z + §1K.5.A) per Knox's "test the hard thing" criterion, NOT random sections. Full F.2.2 audit MUST sample sections that Nick specifically remembers as cruft (likely 1F scheduling UI experiments, 1G messaging UI, 1H analytics surfaces, 1I financial lifecycle, 1J identity merge UX, 1K intake UI flows). Calibration suggests system map has substantial load-bearing substrate; F.2.2 will reveal which sections have UX cruft.

- **DL-21 federation is DRAFT (not locked)** with 5 open sub-questions (Q-DL21-1 through Q-DL21-5). Slight risk of being cited as if locked. NOT dangerous; DRAFT status is explicit in header. But Phase G.2 sub-arc needs to resolve open sub-questions + thesis-extension decisions simultaneously.

### Q3 — What must be refreshed first?

Dependency-ordered priority for these 6 artifacts:

1. **Coherent OMNI Architecture Pattern §1 + new coherence-properties sub-section** — foundational; all downstream coherence operational tests reference this. Add 8-property coherence operational test (v0 §10 properties #1-#8) as new §7. Add observation/assertion as upstream interpretation layer note in §1. Add brand architecture as §2.11 cross-cutting discipline.

2. **`1K.5.A` ↔ thesis v0 §12.1 naming reconciliation decision** (per D0THES-REV-010 + D0THES-REV-011 open review). Two options: (a) preserve patient_clinical_assertions naming; thesis v0 v1 adopts; (b) rename to observation/extracted_assertion; significant downstream impact (intake_response triggers, EvidenceRef union, recordClinicalAssertion API, RLS policies, view names, ~95 concept registry entries). **Strong recommendation: option (a)** — patient_clinical_assertions is more mature naming; preserves all locked substrate decisions. v0 v1 article-level naming can use observation/extracted_assertion as conceptual labels while substrate uses patient_clinical_assertions. F.3 decides.

3. **DL-21 ↔ DL-25 split decision** (per D0THES-REV-009 open review). DL-21 invariants 1-28 all preserve at tenant-boundary scope; thesis v0 §12.4 adds patient-graph scope (care_relationship + shared_context_grant). **Strong recommendation: NEW DL-25 patient-graph; DL-21 stays as tenant-boundary substrate.** Cleaner separation of scopes. DL-21 inv 5 (patient_continuity_policy) + inv 7 (federation_permeability_policy) compose with new DL-25 primitives without overlap. F.3 decides.

4. **§1Z amendments** — add new sub-sections enumerating observation/extracted_assertion event_kinds within 7-category partition, device/robot/external_system actor_kinds within actor model, ownership resolution as coherence property. All additive; preserve 18 existing sub-sections.

5. **CNS ADR §9 (new) Phase G addendum** — note thesis-extension surfaces (observation/assertion upstream of candidate per v0 §12.1; ownership resolution per v0 §10 #8 + v0 §7 coordination_case; device/robot/external_system actor subtypes per v0 §12.2). Preserve locked §2.14-§2.20 content untouched.

6. **Build OS layer model `09`** — no thesis-driven changes needed. G.3 light verification only.

### Q4 — What valid decisions must not be lost? (Nick's load-bearing concern)

**Coherent Pattern** (preserve all):
- 3-layer substrate pattern (planned commitment / actual delivery / linked evidence-commerce) across 10 domains
- 10 cross-cutting disciplines (no vendor names in substrate enums; no specialty names; no Mindbody UI labels; AI classifies + deterministic rules + staff decide; patient-level wallets; pricing on pricing_option not service; free-text bounded + structured schema-driven; tenant configures menu + substrate provides primitives; locked doctrine amended pre-substrate-slice; Layer 2 synthesis from third-party = EVIDENCE not template)
- Cross-domain composition rules (Scheduling → Encounter → Commerce; Promo wallet → Reservation → Application; CNS event round-trip)
- Substrate-slice readiness checklist (15 items)

**Build OS layer model** (preserve all):
- 5-layer model (Truth / Execution / Command-Tool / Runtime-Proof / Governance-Cadence)
- 5 layer interaction rules
- Non-goals (does not authorize implementation lanes; does not define rollout order; does not replace domain contracts)

**DL-21** (preserve invariants 1-28 at tenant-boundary scope):
- 6-tier topology hierarchy (Deployment / Legal Entity / Brand / Site / Location / Venue)
- Tenant scoping as multi-tier composite (not flat)
- 11-axis venue substrate (physical address / venue kind / capacity / equipment / staff assignment / service compatibility / operating hours / jurisdiction / accessibility / mode of practice / partner facility linkage)
- Single deployment-wide patient identity + multi-relationship pattern (inv 4)
- Patient continuity policy substrate (5 continuity_kinds: hand_off_full / hand_off_partial / parallel_relationships / referral_only / isolated; default isolated)
- Cross-brand operations require explicit permeability admission
- Federation Permeability Policy (5 permeability_kinds; Tier 4 attestation required)
- Legal Entity substrate (legal_form / tax_id / compliance_attestations / medical_director / liability_insurance)
- Legal Entity ↔ Brand many-to-many
- Day 0 specialty rollout order (medspa → derm → plastics → GI → cardio → endocrine → sleep)
- Jurisdiction substrate (us_state / us_federal / canada_province / eu_member_state / international_country)
- Provider License substrate (license_kind / jurisdiction / DEA / substance_classes / status / restrictions)
- Provider Credentialing substrate
- Jurisdiction admission rule substrate (executable; per booking/Rx/lab RPC reads)
- Same-patient multi-modality availability Day 0 (Hims-like booking from web)
- Modality switching within an episode
- Attribution Line substrate (cross-LE revenue attribution)
- Email + phone canonical identity discovery
- Patient relationship merge across brands (with consent or Tier 3 dual approval)
- Federation cross-tenant action audit (cns_decision)
- Topology-aware retention + data residency
- Cross-DL bindings (DL-15 / DL-17 / DL-18 / DL-19 / DL-20)
- Federation event vocabulary seed (15 event_kinds; default severity red)
- Federation topology as admin projection

**CNS ADR** (preserve Round 3.5 locked):
- 6 doctrine sections §2.14-§2.20:
  - §2.14 source-agnostic CNS action orchestration (18+ event source taxonomy; 5 patient communication classes; parallel internal action classes; 15 worked examples; 10 anti-pattern rejections)
  - §2.15 Context Module Layer (6 module types: Intervention / Product-SKU / Care Program / Entitlement / Order-Commerce / Patient Profile; anti-brain naming binding; content/version governance with `version` + `approved_by_actor` + `effective_from` + `effective_to` + `superseded_by_version` + `change_audit_lineage`; 3-packet projection: CNS Action / Recipient Communication / Provider Clinical Context)
  - §2.16 CNS Action Envelope (18 fields: action_kind 10 values / reply_policy 7 / thread_policy 9 / recipient_class 8 / action_required 9; 8-tier arbitration priority; patient contact-load budget; 5-operation composition; 10 invariants)
  - §2.17 Provider Clinical Context Packet forward-reference (AI summarizes/proposes / deterministic validates+flags+blocks / provider signs)
  - §2.18 Round 4 mandatory pre-brief Sections A-O
  - §2.19 Citation Map (8 reliability guardrails → existing doctrine)
  - §2.20 Amendment J candidate (J(a) Context Module Layer substrate / J(b) orchestration_action 18-field envelope extension / J(c) source-agnostic event normalization / J(d) Provider Clinical Context Packet substrate)
- §2.21 Round Kickoff Reading Discipline (mandatory pre-reading + opening read receipt + closing statement)
- 4 named corrections + 5 cleanup patches + Patch 7 (content/version governance)
- §8 Round 3.6 + §8.1 Round 4.2C + §8.2 Round 5 pre-open ontology addenda
- 4 alternatives considered + rejection rationale

**§1Z** (preserve 18 sub-sections):
- §1Z.0 scope + binding doctrine references
- §1Z.1 why universal envelope (3 failure modes avoided)
- §1Z.2 7-category vocabulary partition
- §1Z.3 taxonomy registry + schema governance (registry record per kind; breaking-change discipline; CI lint)
- §1Z.4 atomic state mutation + idempotency (event sourcing OR transactional outbox; non-atomic dual writes REJECTED)
- §1Z.5 payload minimization + PHI hydration + multi-tenant isolation + patient impersonation gate
- §1Z.6 action authorization at emission + CNS decision record + tamper-evident audit chain
- §1Z.7 reliability (DLQ + executor timeout + cross-run correlation + replay safety modes)
- §1Z.8 temporal validity (4 time fields) + projection freshness + source-of-truth for clinical
- §1Z.9 consistency tiers (strong/eventual/best-effort) + causality cycle detection + cross-domain saga + compensation
- §1Z.10 AI content validation + impersonation gate + context snapshot immutability
- §1Z.11 operational observability + circuit breakers + environment segregation + reconciliation jobs
- §1Z.12 GDPR/CCPA erasure-by-pseudonymization + retention discipline + privileged-action elevated approval
- §1Z.13 manual reality capture + aggregate concurrency + value normalization + event-granularity routing
- §1Z.14 producer authorization + bidirectional CNS↔domain seam
- §1Z.15 cross-surface reconciliation table (companion file at `docs/architecture/cns_taxonomy_reconciliation.md`)
- §1Z.16 admitted-but-deferred items (D1-D3)
- §1Z.17 explicit rejections (~20 rejected patterns)
- §1Z.18 cross-links

**`1K.5.A`** (preserve all — most substantive single audit row):
- 5-layer model (Evidence / Concept / Assertion / Context / Current clinical memory)
- `clinical_concepts` registry as code-as-config (~95 concepts for first Rx pathway; ~150-200 across 4-5 pathways; ~50 shared core)
- `clinical_concepts_registry_snapshot` DB-shadow for analytics
- Generated INDEX.md + question-bank ↔ concept-bank CI integrity check
- External coding rules (ICD/SNOMED/LOINC/RxNorm/CPT optional; versioned; `use` tags; `authoritative` flag; internal `concept_id` remains source of truth)
- Concept naming rule (clinical entity in concept_id; lifecycle in assertion fields)
- Acute/exacerbation/flare states as structured assertion context + metadata (promotion threshold to dedicated `clinical_episodes` requires ALL THREE: complex state machine + distinct follow-up cadence + episode-count cohort needs)
- `patient_clinical_assertions` table (append-only; 22-field schema)
- 9-value `authored_by` enum + `authority_rank` generated column (provider_confirmed 100 → system_derived 10)
- `confidence` enum (low/moderate/high/definitive) ORTHOGONAL to status
- `confidence_score` numeric (0.00-1.00) for AI authors only
- `evidence_refs` typed union (7 EvidenceRef kinds)
- `AssertionContext` typed jsonb (8 identity-namespace fields + supplemental envelopes for clinical_visit / care_management_source / check_in / lab / provider_assessment + deferred sub-shapes for document / medication_exposure / ai / adverse_event)
- Generalized context principle (identity namespace vs supplemental envelopes; 3 rules)
- `canonicalContextKey()` function (SHA-256 hash of canonical-form identity fields)
- Two-stage trigger pipeline (Stage 1 assertion emitter + Stage 2 chart-column projection; SECURITY DEFINER; fail-closed; no DLQ)
- Stage 1.5 multi-question assertion-builder (composite emitter; assertion_group_id; Mode J double-supersession)
- Narrative free-text intake evidence (immutable raw evidence + three deterministic fan-outs: (a) code-as-config safety scan / (b) AI extraction emitter / (c) discrepancy detection)
- Repeated narrative + longitudinal pattern (extraction is the bridge; NO parallel narrative-pattern detector; CI lint rejects `narrative_*` / `*_topic_history` tables)
- Provider packet (`1K.12`) + workspace panel (`1G.8.5`) rendering for narrative (raw text verbatim + per-segment candidates as actionable rows + safety banner + discrepancy banner)
- Partial-data semantics (`metadata.completion_status` enum: complete/partial/gating_negative/gating_uncertain; NULL = UNKNOWN; safety preflight fails closed on unknown fields for safety floors)
- Structured clinical context discipline (all clinical context fields used for safety/packet/workspace/queue/cohort/AI/quality/audit MUST be first-class queryable dimensions)
- Analytics SQL discipline rules (NEVER `field != value` without NULL handling; NEVER absence-of-assertion = denial; cohort definitions document partial-inclusion rule)
- Reconciliation policies (auto_dedupe / context_distinct / requires_provider_review_on_conflict)
- Pregnancy reconciliation worked example (per-pathway authority floors; notification urgency; patient communication; 5 typed provider action options; documentation requirements)
- `recordClinicalAssertion` write API (idempotent on client_idempotency_key; high-risk mutation per `1J.10`; audited)
- Mode J double-supersession (intake_response chain + assertion chain reference each other)
- Concept retirement migration
- Concept_version semver evolution rule (patch/minor/major bump policy + migration plan for major)
- Diagnosis vs assertion clarification (diagnosis = provider narrative in clinical_visits.assessment; assertion = structured representation)
- What NOT to build (no separate patient_problem_list/allergies/medication_history/medical_history/surgical_history/family_history/social_history/substance_use tables; no SNOMED/ICD/RxNorm/LOINC day 1; no CMS-style admin UI for concepts; no encounter abstraction; no FHIR direct mapping; no AI-authored provider_* statuses; no auto-confirmation from any source other than provider; no allergy-specific or medication-specific columns in v1)
- 13 cross-links

### Q5 — What docs are dangerous if left authoritative?

**None in this calibration set.** All 6 artifacts have either K1 preserve disposition (Build OS, CNS ADR) or K2 amend-via-additive-extension (Coherent Pattern, §1Z) or K3 preserve+extend (DL-21, 1K.5.A). No K4 stale/wrong. No K6/K7 partial-preserve splits needed. No K8 conflicts.

**Slight risk to flag**: DL-21 is DRAFT (not locked) with 5 open sub-questions. If Phase G.2 substrate refresh cites DL-21 as if locked without addressing Q-DL21-1 through Q-DL21-5 + thesis-extension decisions, downstream work could embed unresolved doctrine. Mitigation: Phase G.2 DL-21 sub-arc explicitly addresses all 5 open sub-questions + the DL-21-vs-DL-25 split decision in same pass.

### Q6 — What can safely wait?

- **Build OS layer model (`09`)** — no thesis-driven changes needed; G.3 light verification only. Can wait until after G.2 substrate refresh.
- **CNS ADR amendment** — depends on §1Z amendment + Coherent Pattern coherence-property addition (sequencing matters). Can wait until those land. Then ADR gets §9 Phase G addendum referencing them.
- **DL-21 patient-graph extension OR new DL-25** — waits for F.3 review-gate decision on D0THES-REV-009 split. Cannot start Phase G.2 patient-graph sub-arc without this decision.
- **1K.5.A naming reconciliation** — waits for F.3 review-gate decision on D0THES-REV-010 + D0THES-REV-011 (patient_clinical_assertions vs observation/extracted_assertion canonical naming).

### Q7 — What does the audit teach us about the thesis itself?

**This is the bidirectional-feedback question.** Audit teaches us about both existing doctrine AND the thesis. Findings:

1. **Thesis v0 §12.1 (observation + extracted_assertion as first-class primitives) UNDERSTATES the existing substrate.** `1K.5.A patient_clinical_assertions` already implements this layer at deeper detail than v0 articulates. The thesis labels it as a "surgical addition"; reality is it's a "naming reconciliation + doctrine-level framing of existing substrate." v1 could either: (a) downgrade §12.1 from "surgical addition" to "doctrine-level naming reconciliation"; (b) acknowledge in §12.1 that `1K.5.A` is the substrate-level implementation and §12.1 names the conceptual layer; (c) accept the naming gap as a real cost (patient_clinical_assertions doesn't intuitively communicate "this is the observation+assertion layer"). **Recommendation: option (b)** — adjust thesis v1 §12.1 framing to acknowledge `1K.5.A` substrate while preserving the conceptual naming.

2. **Thesis v0 §8 universal CNS flow is a HIGHER-ABSTRACTION FRAMING over existing §1Z 7-category partition.** The thesis describes input modalities → events → observations → assertions → candidates → resolver → actions → execution → evidence. §1Z provides the underlying envelope + registry + atomicity + isolation + audit substrate that makes this flow work. **Both are correct**; thesis operates at framing layer; §1Z operates at substrate layer. v1 §8 could explicitly cite §1Z as substrate implementation.

3. **Thesis v0 §10 8-property coherence operational test is GENUINELY NEW DOCTRINE-LEVEL ARTICULATION.** §1Z has the substrate primitives that make properties #1-#8 enforceable (no silent contradictions via reconciliation policies; no silent supersession via supersedes_assertion_id; versioned reinterpretation via concept_version; reversibility via retraction chain; cross-slice consistency via reconciliation; time-honest queries via 4-time-field temporal validity; authority lineage via authored_by + authority_rank; ownership resolution via `metadata.completion_status` + AssertionContext.care_management_source). v0 §10 names these as coherence properties cleanly. v1 should preserve and amplify.

4. **Thesis v0 §6.5 brand architecture (Powered-by-OMNI) is GENUINELY NEW DOCTRINE-LEVEL ARTICULATION.** DL-21 has multi-LE + multi-brand substrate but does NOT articulate the substrate-level brand-contract (shared identity / shared consent UX / mandatory data-flow-back / default-on cross-brand context / default-on safety-interrupt routing). This is the cleanest "additive doctrine" in the 5 surgical additions list — no existing OMNI substrate matches the framing.

5. **Thesis v0 §12.4 care_relationship + shared_context_grant IS a GENUINELY NEW SUBSTRATE PRIMITIVE at patient-graph scope.** DL-21 inv 4-7 handle same-deployment cross-brand operations; thesis adds cross-distinct-legal-entity patient-graph operations. New DL-25 strongly recommended.

6. **Thesis v0 §12.2 device/robot/external_system actor subtypes EXTEND existing DL-16 amendment 43 actor 4-tuple.** Actor model itself preserves; thesis adds new actor_kinds.

7. **System map is NOT all "wild man on week 2" cruft** — at least the substrate-spine sections (§1Z + §1K.5.A) are dense, structured, well-tested doctrine. Other sections may genuinely be UX cruft (1F scheduling UI experiments, 1G messaging UI surfaces, 1H analytics surfaces probably) but the substrate is load-bearing. F.2.2 full audit will reveal the proportion.

### Additional Findings

- **Thesis v0 §16 "What survives cleanly if thesis adopted" list is largely accurate** based on calibration sample. Coherent Pattern, Build OS, DL-1..DL-16 locked, DL-17/DL-19/DL-20 unchanged, CNS ADR all survive. DL-21 extends (not replaces). DL-22 likely extends per Knox's original DL pick. New DLs are surgical additions.

- **Calibration sample bias**: Knox's "test the hard thing" criterion led to 4 of 6 artifacts being substrate-spine (Coherent Pattern, Build OS, CNS ADR, §1Z) + 1 federation DL + 1 clinical assertion layer. F.2.2 should deliberately sample: (a) likely-stale UX/UI sections (1F/1G/1H), (b) commerce DL-17 (which thesis touches via business engine), (c) longitudinal intelligence corpus (currently on parking branch), (d) scheduling rule matrix (parking-branch deltas to reconcile).

- **5 surgical additions revised classification** based on calibration evidence:
  - §12.1 observation/extracted_assertion: ~60% substrate-already-exists (1K.5.A) + ~40% naming/framing addition — reclassify from "surgical primitive addition" to "doctrine-level naming reconciliation"
  - §12.2 device/robot actors: extension of existing DL-16 actor model — confirmed surgical addition
  - §12.3 conversational intake doctrine: 1K.5.A has narrative free-text intake with three fan-outs; thesis extends doctrine-level framing — partially substrate-already-exists + partially new doctrine
  - §12.4 care_relationship + shared_context_grant: genuinely new substrate at patient-graph scope — confirmed surgical addition
  - §12.5 Integration Plane: not tested in calibration; deferred to F.2.2

---

## §2 Per-Artifact Audit Rows

6 audit rows. Each follows the schema in `~/.cursor/plans/omni_doctrine_refresh_23fb24b1.plan.md` F.2.2 section.

### Row 1 — `coherent_omni_architecture_pattern_2026-05-17.md`

- **`artifact_path`**: [`.cursor/plans/doctrine/coherent_omni_architecture_pattern_2026-05-17.md`](.cursor/plans/doctrine/coherent_omni_architecture_pattern_2026-05-17.md)
- **`current_state_summary`**: 164-line cross-DL pattern reference. §1 universal three-layer pattern (planned commitment / actual delivery / linked evidence + commerce) mapped across 10 domains (Scheduling, Commerce, RBAC, Federation, Intake, Messaging, Clinical-Media, Care Obligations, Promo, Future pillars). §2 10 cross-cutting disciplines. §3 cross-domain composition rules (Scheduling → Encounter → Commerce; Promo wallet → Reservation → Application; CNS event round-trip). §4 substrate-slice readiness checklist (15 items). §5 explicit "NOT new doctrine" disclaimer. §6 pointers to canonical doctrine.
- **`knox_analysis_category`**: **K2** (correct content + thesis-extension needed; existing 3-layer pattern + 10 disciplines preserve cleanly; thesis adds 8-property coherence operational test + brand architecture as cross-cutting discipline + observation/assertion layer acknowledgment)
- **`classification_evidence`**: 
  - §5 explicitly self-describes: *"This is NOT new doctrine. The DLs (DL-1 through DL-16 locked + DL-17 through DL-22 DRAFT) are doctrine. This is a CROSS-DL PATTERN REFERENCE — a one-page distillation that lets future pillar work start from the shape rather than re-derive it."*
  - §1 three-layer pattern is validated across 10 domains with explicit industry validation (FHIR, Epic, Amazon, Airline, Restaurant, Tesla) — robust foundational pattern
  - §2 cross-cutting disciplines list 10 disciplines including "AI classifies; deterministic rules + staff decide" (aligns with thesis v0 §9 + T0-04), "patient-level wallets for things that survive across visits" (aligns with thesis v0 §5 wedge property #3 commerce wallet), "tenant configures the menu; substrate provides primitives" (aligns with thesis v0 §6.5 brand architecture)
  - §6 pointers reference DL-1..DL-16 locked + DL-17..DL-22 DRAFT (Coherent Pattern is a derivative reference, not new doctrine — supports K2 preserve+extend)
  - Thesis v0 §16 explicitly lists Coherent Pattern in survives-cleanly: *"Coherent OMNI Architecture Pattern §1 three-layer substrate (planned commitment → actual delivery → linked evidence/commerce) already maps across 10 domains"*
  - Thesis additions needed: §10 #8 ownership resolution as 8th coherence property (Coherent Pattern has no coherence-properties section currently); v0 §6.5 brand architecture as new cross-cutting discipline §2.11 (Coherent Pattern doesn't address brand architecture); v0 §12.1 observation/assertion layer note in §1 (Coherent Pattern's 3-layer is downstream of observation interpretation)
- **`memory_disposition`**: `preserve` (file persists)
- **`authority_disposition`**: `keep_binding` (Cross-DL pattern reference is binding; thesis additions extend without replacing)
- **`refresh_action`**: `amend` (additive amendments at Phase G.2; new §7 coherence operational test, new §2.11 brand architecture discipline, §1 observation/assertion upstream note, §6 updated cross-references)
- **`confidence_level`**: **`high`** (clear thesis-extension pathway; no destructive changes; pattern itself unchanged)
- **`internal_coherence`**: internally coherent (no contradictions); thesis additions are additive
- **`dependency_relationships`**: 
  - Downstream depends on: DL-1..DL-22 (cited as canonical doctrine), system map sections (§1F scheduling, §1G messaging, §1H analytics, etc.), CNS ADR (referenced via DL-14)
  - Upstream depends on (for Phase G.2 amendments): thesis v0 §1.5 + §6.5 + §10 + §12.1 (which v1 article-level decisions still pending F.3)
- **`recommended_action`**: Phase G.2 sub-arc — additive amendments per audit findings. Add §7 coherence operational test (8 properties per v0 §10 #1-#8). Add §2.11 brand architecture cross-cutting discipline (per v0 §6.5). Amend §1 with observation/assertion upstream layer note. Update §6 pointers to include thesis v0 path + Operating Contract reference.
- **`estimated_effort`**: **M** (medium — clear additions, no destructive rework; ~3-4 hours of careful editing + cross-link updates)
- **`priority`**: **1** (foundational; downstream amendments at CNS ADR + §1Z reference this Coherent Pattern coherence-properties section)
- **`valid_decisions_to_preserve`**: 
  - 3-layer substrate pattern (planned commitment / actual delivery / linked evidence-commerce) across 10 domains
  - 10 cross-cutting disciplines (preserve verbatim; thesis adds §2.11 brand architecture as 11th)
  - Cross-domain composition rules (Scheduling → Encounter → Commerce; Promo wallet → Reservation → Application; CNS event round-trip)
  - Substrate-slice readiness checklist (15 items)
  - "NOT new doctrine" §5 framing
- **`known_stale_content_to_remove`**: none
- **`phase_g_subphase_assignment`**: **G.2 substrate refresh** (foundational; sequenced first within G.2)

---

### Row 2 — `09_omni_build_os_layer_model.md`

- **`artifact_path`**: [`.cursor/plans/doctrine/09_omni_build_os_layer_model.md`](.cursor/plans/doctrine/09_omni_build_os_layer_model.md)
- **`current_state_summary`**: 135-line permanent five-layer OMNI Build OS model. §1 Layer 1 Truth Layer (what is authoritative, historical, evidentiary, unresolved, superseded). §2 Layer 2 Execution Layer (how agents and engineers perform work safely). §3 Layer 3 Command/Tool Layer (workflow repeatability). §4 Layer 4 Runtime Proof Layer (schemas, types, migrations, invariant tests, CI checks). §5 Layer 5 Governance Cadence Layer (drift/rot prevention). §6 Layer Interaction Rules (5 binding rules: Truth precedes; Execution may not bypass Truth; Command/Tool may optimize but not redefine doctrine authority; Runtime Proof required before "implemented"; Governance Cadence may simplify but not weaken safety gates). §7 Non-Goals.
- **`knox_analysis_category`**: **K1** (correct, aligned, complete — 5-layer model is structurally orthogonal to thesis content; thesis adds artifacts to Layer 1 lists but does NOT change the layer model)
- **`classification_evidence`**:
  - §1 Layer 1 primary question: *"What is true, trusted, unresolved, or superseded?"* — independent of thesis content; thesis v0 §16 "survives cleanly" list confirms Build OS triplet untouched
  - §6 Layer Interaction Rules rule 1: *"Truth Layer precedes all other layers for authority resolution"* — aligns naturally with thesis preserve-by-default-for-memory + authority-by-proof principle
  - §7 Non-Goals: *"This file does not authorize implementation lanes. This file does not define rollout order. This file does not replace domain contracts."* — Build OS layer model is meta-structural; thesis operates within the structure, doesn't change the structure
  - Thesis v0 §16 explicitly: *"OMNI Build OS (layer model + rollout sequence + Build Entry Gate v0) — untouched ✓"*
  - The 5 surgical additions (per thesis v0 §12) are Layer 1 Truth Layer artifacts that will be added to the Layer 1 list when they exist (DL-23 / DL-24 / DL-25 / DL-26 / amendments to DL-16 + DL-21 + DL-22) — but adding new artifacts to a layer list is a catalog/read-graph update operation, NOT a Build OS layer model rewrite
  - No content in `09` conflicts with thesis; the 5 layers + 5 interaction rules + 3 non-goals all preserve verbatim
- **`memory_disposition`**: `preserve` (file persists unchanged)
- **`authority_disposition`**: `keep_binding` (5-layer model is binding doctrine; survives thesis intact)
- **`refresh_action`**: `none` (no thesis-driven changes to the layer model itself; Layer 1 artifact list grows mechanically when DL-23/24/25/26 land in Phase G.2 — that's a catalog/read-graph update operation in G.1, not a Build OS layer model change)
- **`confidence_level`**: **`high`** (5-layer model is structurally orthogonal to thesis content; no extension vectors discovered)
- **`internal_coherence`**: internally coherent; no contradictions
- **`dependency_relationships`**: 
  - Downstream depends on: this file is dependency root for `10_omni_build_os_rollout_sequence.md` + `11_build_entry_gate_v0.md`
  - Upstream depends on: Charter Layer Model (per `00_omni_coordination_charter.md` §2 OMNI Build OS layer)
- **`recommended_action`**: none (preserve as-is); G.3 light verification at Phase G.3 sub-arc to confirm thesis-extension primitives all land in Layer 1 Truth Layer artifact list (mechanical check)
- **`estimated_effort`**: **S** (small — verification only, no rewrite)
- **`priority`**: **5** (lowest priority in this calibration set; can wait until Phase G.3 sub-arc)
- **`valid_decisions_to_preserve`**:
  - 5-layer model (Truth / Execution / Command-Tool / Runtime-Proof / Governance-Cadence)
  - Per-layer purpose + current artifacts list + primary question answered
  - 5 layer interaction rules (binding)
  - Non-goals
- **`known_stale_content_to_remove`**: none
- **`phase_g_subphase_assignment`**: **G.3 coordination refresh** (light verification only)

---

### Row 3 — `DL-21_federation_topology_DRAFT_2026-05-17.md`

- **`artifact_path`**: [`.cursor/plans/doctrine/DL-21_federation_topology_DRAFT_2026-05-17.md`](.cursor/plans/doctrine/DL-21_federation_topology_DRAFT_2026-05-17.md)
- **`current_state_summary`**: 211-line DRAFT DL covering 28 invariants for federation substrate (Day 0 promoted from FUTURE_ARC A1). Six topology tiers (Deployment → LE → Brand → Site → Location → Venue) with multi-tier composite tenant scoping. 11-axis venue substrate (physical address / venue kind / capacity / equipment / staff assignment / service compatibility / operating hours / jurisdiction / accessibility / mode of practice / partner facility linkage). Single deployment-wide patient identity + multi-relationship pattern. Patient continuity policy substrate (5 continuity_kinds). Federation Permeability Policy (5 permeability_kinds with Tier 4 attestation). Legal Entity substrate. Day 0 specialty rollout order (medspa → derm → plastics → GI → cardio → endocrine → sleep). Jurisdiction substrate (50 US states + DC + territories + Canada provinces Day 0). Provider License + Credentialing substrates. Jurisdiction admission rule (executable). Same-patient multi-modality availability Day 0 (Hims-like booking from web). Email + phone canonical identity discovery. Patient relationship merge. Federation cross-tenant action audit. Topology-aware retention. Cross-DL bindings (DL-15/17/18/19/20). 15-event federation domain vocabulary seed. Federation topology as admin projection. Plus 5 open sub-questions (Q-DL21-1 through Q-DL21-5) + 10 rejected patterns + A1 promotion gate.
- **`knox_analysis_category`**: **K3** (valid decisions trapped in DRAFT framing that thesis extends rather than replaces; 28 invariants are largely valid substrate decisions at tenant-boundary scope; thesis adds upstream patient-graph layer that needs to be wired in via new DL-25 OR extension of DL-21)
- **`classification_evidence`**:
  - DL-21 status header: *"DRAFT — Phase 1 hardening per Day 0 Build Contract commit `6dc1286`. NOT locked doctrine. Joint Opus + Knox + user signoff required before promotion to locked DL"*
  - DL-21 invariant 4: *"Single deployment-wide patient identity + multi-relationship pattern (binding per DL-10 + A1 fulfillment per user direction). Per user direction 2026-05-17 patient continuity premise: 'a Hims patient should always have option to utilize a scheduled visit, video, in clinic or otherwise' + multi-brand reality."* — thesis v0 §5 hybrid Hims+medspa wedge directly extends this
  - DL-21 invariant 5 (patient_continuity_policy with 5 continuity_kinds: hand_off_full / hand_off_partial / parallel_relationships / referral_only / isolated) — similar to thesis v0 §12.4 care_relationship semantics BUT at deployment-internal scope (tenant boundary), not cross-distinct-legal-entity patient-graph scope
  - DL-21 invariant 7 (federation_permeability_policy with 5 permeability_kinds: bidirectional_full / bidirectional_read_only / outbound_only / inbound_only / denied + Tier 4 attestation requirement) — explicitly tenant-boundary scope
  - DL-21 invariant 6: *"Cross-brand operations require explicit permeability admission. Every cross-brand action (booking / sale / chart read / Rx prescribe across brand A → brand B) reads `patient_continuity_policy` per inv 5."* — same-deployment cross-brand; NOT cross-LE
  - Thesis v0 §12.4 `care_relationship` (patient × provider × organization × care_slice × scope × started_at × ended_at) + `shared_context_grant` (patient × from_org × to_org × resource_type × resource_id × purpose × scope × granted_by × expires_at × access_level) — explicitly cross-distinct-legal-entity patient-graph scope
  - DL-21 invariant 17: *"Attribution Line substrate Day 0 (per user direction; cross-link DL-17 inv 31)"* — multi-LE revenue attribution; aligns with thesis v0 §6.5 brand architecture but doesn't articulate brand-contract substrate
  - Thesis v0 §16: *"DL-21 federation (extended) — extended for patient-graph care_relationship + shared_context_grant"* — confirms partial_refresh disposition
  - v0 §15.i (D0THES-REV-009): *"Mindbody-style federation depth — boundary between Mindbody-federation (tenant-portability) and OMNI patient-graph federation needs decision"*
  - DL-21 has 5 open sub-questions (Q-DL21-1 medical-director-of-record + Q-DL21-2 patient identity canonical match + Q-DL21-3 cross-state telehealth + Q-DL21-4 specialty rollout depth + Q-DL21-5 partner facility venues) — F.2.2 audit + F.3 should address simultaneously with thesis-extension decisions
- **`memory_disposition`**: `preserve_with_extracted_pointer` (file persists; valid decisions preserved; cross-references to new DL-25 patient-graph if split decision goes that way)
- **`authority_disposition`**: `pending_post_refresh` (DRAFT not locked; specific invariants get keep_binding once refresh lands; some invariants may become extracted_decisions_only if split to new DL-25)
- **`refresh_action`**: `partially_refresh` (Phase G.2 sub-arc — extend with patient-graph invariants OR split off to new DL-25 per F.3 decision; preserve 28 existing invariants; resolve 5 open sub-questions in same pass)
- **`confidence_level`**: **`medium`** (clear thesis extension vectors; but DL-21-vs-DL-25 split decision per D0THES-REV-009 needs F.2.2 audit + F.3 review; either path preserves valid decisions but Phase G.2 sub-arc shape differs)
- **`internal_coherence`**: internally coherent within tenant-boundary scope; 5 open sub-questions are explicit unresolved items not contradictions
- **`dependency_relationships`**:
  - Downstream depends on: DL-15 scheduling (DL-21 inv 22 binding), DL-17 commerce (DL-21 inv 23 binding), DL-18 RBAC (DL-21 inv 24 binding), DL-19 settings (DL-21 inv 25 binding), DL-20 care-coordination (DL-21 inv 26 binding); system map §1J identity sections; FUTURE_ARC document; A1 fulfillment doctrine
  - Upstream depends on (for Phase G.2): thesis v0 §12.4 care_relationship + shared_context_grant primitives; thesis v0 §6.5 brand architecture for inv 17 attribution + inv 9 LE↔brand many-to-many extension; F.3 decision on D0THES-REV-009 (DL-21 vs DL-25 split) + D0THES-REV-012 (brand contract minimums)
- **`recommended_action`**: Phase G.2 sub-arc — coordinated update with F.3 decisions. Per recommendation in §1 Q3: **new DL-25 patient-graph for thesis v0 §12.4 primitives**; **DL-21 stays as tenant-boundary substrate**; resolve Q-DL21-1..5 in same pass; cross-link DL-21 ↔ DL-25 in cross-link section. Preserve all 28 invariants. Promote DL-21 from DRAFT to locked once Phase G.2 sub-arc completes.
- **`estimated_effort`**: **L** (large — 28 invariants to validate; 5 open sub-questions to resolve; DL-21 vs DL-25 split decision; cross-link refresh; promote DRAFT to locked; coordinated with new DL-25 authoring; ~12-20 hours)
- **`priority`**: **2** (high — blocks Phase G.2 patient-graph sub-arc; D0THES-REV-009 closure blocks several other thesis open reviews)
- **`valid_decisions_to_preserve`**:
  - 6-tier topology hierarchy (Deployment / LE / Brand / Site / Location / Venue) with multi-tier composite tenant scoping
  - 11-axis venue substrate (preserve all 11 axes; specialty rollout names pinned per Build Contract §8 but NOT substrate enum values)
  - Single deployment-wide patient identity + multi-relationship pattern (inv 4)
  - 5-kind patient_continuity_policy (inv 5) at tenant-boundary scope
  - 5-kind federation_permeability_policy (inv 7) with Tier 4 attestation requirement
  - Cross-brand operations require explicit permeability admission (inv 6) with audit lineage
  - Legal Entity substrate (inv 8) with 7 legal_form values + compliance_attestations + medical_director_provider_id + liability_insurance
  - Legal Entity ↔ Brand many-to-many (inv 9) with ownership_percent + responsibility_kind
  - Day 0 specialty rollout order pinning (inv 10) — NOT a new DL per specialty
  - Jurisdiction substrate (inv 11) — 50 US states + DC + territories + Canada provinces Day 0
  - Provider License substrate (inv 12) — multi-state licensing with DEA + substance_classes
  - Provider Credentialing substrate (inv 13) — Day 0
  - Jurisdiction admission rule substrate (inv 14) — executable; per booking/Rx/lab RPC reads
  - Same-patient multi-modality availability Day 0 (inv 15) — Hims-like booking
  - Modality switching within an episode (inv 16)
  - Attribution Line substrate (inv 17) with legal_entity_id for multi-LE attribution
  - Email + phone canonical identity discovery (inv 18)
  - Patient relationship merge across brands (inv 19) with consent or Tier 3 dual approval; reversal via Unmask
  - Federation cross-tenant action emits cns_decision (inv 20)
  - Topology-aware retention + data residency (inv 21)
  - Cross-DL bindings (inv 22-26) — DL-15 scheduling, DL-17 commerce, DL-18 RBAC, DL-19 settings, DL-20 care-coordination
  - Federation event vocabulary seed (inv 27) — 15 event_kinds with default severity red
  - Federation topology as admin projection (inv 28)
  - 10 rejected patterns (preserve all rejection rationales)
  - A1 promotion gate
- **`new_thesis_content_to_add`** (target: new DL-25 if split, OR DL-21 extension):
  - `care_relationship` primitive (patient × provider × organization × care_slice × scope × started_at × ended_at) at cross-distinct-legal-entity patient-graph scope
  - `shared_context_grant` primitive (patient × from_org × to_org × resource_type × resource_id × purpose × scope × granted_by × expires_at × access_level) at patient-graph consent scope
  - Brand contract minimums (per v0 §6.5 + D0THES-REV-012): shared identity, shared consent UX, mandatory data-flow-back, default-on cross-brand context, default-on safety-interrupt routing
  - Resolution of 5 open sub-questions (Q-DL21-1 medical-director composition with multi-LE federation; Q-DL21-2 patient identity canonical match thresholds; Q-DL21-3 cross-state telehealth jurisdiction rule; Q-DL21-4 specialty rollout depth at Day 0; Q-DL21-5 partner facility venue ingestion)
- **`known_stale_content_to_remove`**: none identified (all 28 invariants appear valid at their scope)
- **`phase_g_subphase_assignment`**: **G.2 substrate refresh** (sequenced after Coherent Pattern §7 coherence-properties addition; coordinated with new DL-25 authoring + DL-22 conversational artifact extension + CNS ADR Phase G addendum)

---

### Row 4 — `cns_action_orchestration_adr_2026-05-17.md`

- **`artifact_path`**: [`docs/architecture/cns_action_orchestration_adr_2026-05-17.md`](docs/architecture/cns_action_orchestration_adr_2026-05-17.md)
- **`current_state_summary`**: 311-line locked Round 3.5 ADR. Source-agnostic CNS action orchestration as scheduling-rule-matrix binding. §2.1 6 doctrine sections (§2.14-§2.20) locked into `00_index.md`. §2.2 §2.21 Round Kickoff Reading Discipline drift-prevention. §2.3 Patch 7 Context Module versioning (the one genuinely new substrate piece). §3 Decision History — 4 named corrections (anti-brain naming; 9-value thread_policy; multi-recipient orchestration; source-agnostic CNS Action Envelope) + 5 cleanup patches + Patch 7. §4 Rationale (binding citation mechanism; source-agnostic right framing; Context Module Layer; anti-brain naming binding matters; graceful degradation Constraint 5). §5 Consequences. §6 4 Alternatives Considered. §7 References. §8 Round 3.6 addendum. §8.1 Round 4.2C closure addendum. §8.2 Round 5 pre-open ontology addendum. §9 one-sentence decision summary.
- **`knox_analysis_category`**: **K2** (correct content + thesis-extension needed via Phase G addendum; all locked Round 3.5 + 3.6 + 4.2C + Round 5 pre-open content preserves; thesis adds upstream observation/assertion layer + ownership resolution coherence property + device/robot/external_system actor subtypes)
- **`classification_evidence`**:
  - ADR status: `Locked` (Round 3.5 doctrine lock + commit `eb77de1` + Round Kickoff Reading Discipline scaffolding commit `3b85538`)
  - §2 Decision: *"Lock source-agnostic CNS action orchestration doctrine in the scheduling-rule-matrix index (`00_index.md`) as 6 binding doctrine sections (§2.14 through §2.20) plus a binding round kickoff discipline (§2.21) before Round 4 authoring begins."*
  - §2.14 source-agnostic action orchestration (locks 18+ event source taxonomy, Tesla-freeway unified pipeline, Hims-async pressure-test, 5 patient-facing communication classes, parallel internal action classes, 15 worked examples, 10 anti-pattern rejections) — thesis v0 §8 universal CNS flow operates at higher-abstraction over this substrate; thesis preserves the source-agnostic posture
  - §2.15 Context Module Layer (6 module types: Intervention / Product-SKU / Care Program / Entitlement / Order-Commerce / Patient Profile; anti-brain naming binding per Correction 1) — thesis v0 §6.5 brand architecture composes with Context Module Layer but doesn't change the 6 module types
  - §2.16 CNS Action Envelope (18 fields including action_kind 10 values / reply_policy 7 / thread_policy 9 / recipient_class 8 / action_required 9; 8-tier arbitration priority; patient contact-load budget; 5-operation composition; 10 invariants including cross-action_kind + cross-recipient-class split; Constraint 5 graceful degradation) — thesis v0 §8 universal flow preserves this; v0 §7 coordination_case ownership extension extends action_kind enum or adds new envelope field
  - §2.17 Provider Clinical Context Packet: *"AI summarizes/proposes; deterministic validates+flags+blocks; provider signs where clinical authority required; charting-from-context anti-pattern; AI citation/trace requirement"* — thesis v0 §9 AI as bounded participant + v0 §12.1 observation/extracted_assertion + clinician_review primitive align
  - §4.4 anti-brain naming binding: *"The Context Module Layer is the manual + map (operating manual) the CNS reads while driving. It is NOT the brain. The CNS is the brain. The patient state is the road. The event stream is the sensor feed. The pathway/protocol is the operating manual."* — thesis preserves this; T0-04 + v0 §9 + v0 §10 #7 authority lineage all reinforce
  - §4.5 graceful degradation Constraint 5: *"Basic appointment reminders must work without AI. Core deterministic path ... MUST function with AI fully disabled. AI composition is an ENHANCEMENT layer, not a dependency."* — thesis v0 §9 AI as bounded participant strongly aligns
  - §8.1 Round 4.2C closure addendum + §8.2 Round 5 pre-open ontology addendum — establish precedent for adding Phase G addendum noting thesis-extension surfaces
  - Thesis v0 §16: *"CNS ADR (extended) — incorporate observation/assertion layer + ownership resolution + 8th coherence property"* — confirms amend disposition; addendum pattern
  - No content in CNS ADR conflicts with thesis; all locked decisions preserve
- **`memory_disposition`**: `preserve` (file persists; ADR is locked historical decision record)
- **`authority_disposition`**: `keep_binding` (Round 3.5 + 3.6 + 4.2C + Round 5 pre-open locked doctrine stays binding)
- **`refresh_action`**: `amend` (Phase G.2 sub-arc — add §9 Phase G addendum noting thesis-extension surfaces; preserve §2.14-§2.20 + §2.21 + §3-§8.2 untouched)
- **`confidence_level`**: **`high`** (clear preserve-with-amendment disposition; no destructive changes; established addendum pattern with §8 / §8.1 / §8.2 precedent)
- **`internal_coherence`**: internally coherent (4 corrections + 5 patches + Patch 7 + Round 3.6 + 4.2C + Round 5 pre-open addenda all converge on consistent posture)
- **`dependency_relationships`**:
  - Downstream depends on: `00_index.md` §2.14-§2.21 (scheduling rule matrix); DL-14/15/16/17/18/20/21 + communications_topology.md (cited as locked doctrine); 4h phase work (rich-chat / action-items / inbound-classification builds); system map §1F/1G/1G.8/1G.11/1P/1Q.23 (cited)
  - Upstream depends on (for Phase G addendum): thesis v0 §8 + §9 + §10 + §12.1 + §12.2 surfaces; Coherent Pattern §7 coherence operational test (sequenced before ADR addendum); §1Z amendments (sequenced before ADR addendum)
- **`recommended_action`**: Phase G.2 sub-arc — add §9 Phase G addendum to CNS ADR noting: (a) observation/extracted_assertion as upstream interpretation layer per thesis v0 §12.1 (substrate implementation at 1K.5.A patient_clinical_assertions); (b) ownership resolution as 8th coherence property per thesis v0 §10 #8 + v0 §7 coordination_case ownership extension; (c) device/robot/external_system actor subtypes per thesis v0 §12.2 (extends DL-16 amendment 43 actor 4-tuple); (d) brand architecture context per thesis v0 §6.5 (composes with §2.15 Context Module Layer). Preserve §2.14-§2.20 + §2.21 + §3-§8.2 untouched per ADR immutability discipline.
- **`estimated_effort`**: **S** (small — addendum only; ~2-3 hours; preserves all locked content)
- **`priority`**: **3** (sequenced after Coherent Pattern + §1Z amendments + new DL-25; addendum references them)
- **`valid_decisions_to_preserve`**: 
  - All 6 doctrine sections §2.14-§2.20 (preserve verbatim)
  - §2.21 Round Kickoff Reading Discipline
  - 4 named corrections (anti-brain naming; 9-value thread_policy; multi-recipient orchestration; source-agnostic envelope reframe)
  - 5 cleanup patches + Patch 7 (content/version governance)
  - §8 Round 3.6 addendum (parent-contract architecture lock)
  - §8.1 Round 4.2C closure addendum (D4 scheduling slice as inheriting; not standalone reminder engine)
  - §8.2 Round 5 pre-open ontology addendum (service_occurrence as parent object; service_occurrence_kind primary classifier; encounter_view as derived projection)
  - 4 alternatives considered + rejection rationale
- **`new_thesis_content_to_add`**:
  - §9 Phase G addendum referencing thesis v0 §8 universal flow at higher-abstraction over §2.14 source-agnostic orchestration substrate
  - §9 Phase G addendum referencing observation/extracted_assertion layer per thesis v0 §12.1 (substrate at 1K.5.A)
  - §9 Phase G addendum referencing ownership resolution as 8th coherence property per thesis v0 §10 #8 + coordination_case extension per v0 §7
  - §9 Phase G addendum referencing device/robot/external_system actor subtypes per thesis v0 §12.2 (extends DL-16 amendment 43)
- **`known_stale_content_to_remove`**: none
- **`phase_g_subphase_assignment`**: **G.2 substrate refresh** (sequenced after Coherent Pattern + §1Z + new DL-25)

---

### Row 5 — System map `§1Z Universal CNS Event Envelope + Taxonomy` (DL-16 home)

- **`artifact_path`**: [`.cursor/plans/system_map_three_layers_60706286.plan.md`](.cursor/plans/system_map_three_layers_60706286.plan.md) lines 11454-11643 (§1Z; 18 sub-sections; ~190 lines)
- **`current_state_summary`**: System map §1Z. DL-16 home. Substrate for every domain's event vocabulary. 18 sub-sections covering: §1Z.0 scope + binding doctrine references (in-scope universal envelope schema, 7-category vocabulary partition, taxonomy registry governance, atomic state mutation, payload minimization + PHI hydration, multi-tenant isolation, action authorization, idempotency, DLQ, timeouts, replay safety modes, temporal validity, projection freshness, causality cycle detection, consistency tiers, GDPR/CCPA erasure, AI content validation, clinical source-of-truth, patient impersonation gate, cross-domain saga, observability, circuit breakers, environment segregation, producer authorization, CNS decision records, compensation discipline, event-granularity routing, context snapshot immutability, aggregate concurrency, value normalization, manual reality capture, privileged-action elevated approval, tamper-evident audit, out-of-band reconciliation). §1Z.1 why universal envelope (3 failure modes avoided). §1Z.2 7-category vocabulary partition (Domain event / Canonical domain state / orchestration_run / orchestration_action / Rail/surface projection / Outcome event / CNS decision). §1Z.3 taxonomy registry. §1Z.4 atomic state mutation. §1Z.5 PHI hydration + multi-tenant. §1Z.6 action authorization + CNS decision record + tamper-evident audit. §1Z.7 reliability. §1Z.8 temporal validity. §1Z.9 consistency tiers + causality + saga + compensation. §1Z.10 AI content validation + impersonation gate. §1Z.11 observability. §1Z.12 GDPR/CCPA + retention + privileged-action. §1Z.13 manual reality capture + aggregate concurrency + normalization + event-granularity routing. §1Z.14 producer authorization + bidirectional CNS↔domain seam. §1Z.15 cross-surface reconciliation table (`docs/architecture/cns_taxonomy_reconciliation.md` companion). §1Z.16 admitted-but-deferred items (D1-D3). §1Z.17 explicit rejections (~20 rejected patterns). §1Z.18 cross-links.
- **`knox_analysis_category`**: **K2** (correct content + thesis-extension needed; 7-category partition + universal envelope + 18 sub-sections all preserve; thesis adds new event_kinds for observation/extracted_assertion + new actor_kinds for device/robot/external_system + new sub-section for coherence operational test 8th property ownership resolution)
- **`classification_evidence`**:
  - §1Z opening: *"Layer 1 architectural rule: OMNI is an event-driven care coordination brain per DL-14. DL-16 binds the universal grammar of that event graph — every event in every domain (scheduling, messaging, commerce, intake, labs, Rx, notes, external-line, internal collaboration, fax, future) carries the same envelope, partitions into the same 7-category vocabulary, registers through the same taxonomy registry, and obeys the same audit / consistency / safety / observability disciplines."*
  - §1Z.2 7-category partition table — *"DL-16 invariant 3 enumerates seven distinct categories. Section 1Z makes the partition explicit so domain code can resist the recurring temptation to conflate them."* — thesis v0 §8 universal flow describes input modalities → events → observations → assertions → candidates → resolver → actions → execution → evidence; observation/extracted_assertion fit as additional event_kinds within "Domain event" category OR as a new category between Domain event and orchestration_action
  - §1Z.3 taxonomy registry: *"every `event_kind` and `action_kind` must register against [the registry] before production code may emit / subscribe."* — thesis observation/extracted_assertion would register as new event_kinds via existing registry governance
  - §1Z.5 multi-tenant isolation: *"Every event carries `tenant_id` (org / brand / location / practice_entity per DL-10). Subscribers enforce tenant boundary at subscription + delivery."* — thesis v0 §12.4 patient-graph care_relationship + shared_context_grant compose with tenant isolation; cross-org context flows are subject to additional consent grants per v0 §11 v2 controlled-network tier
  - §1Z.6 action authorization at emission + CNS decision record + tamper-evident audit chain — thesis v0 §10 #7 authority lineage + v0 §7 coordination_case ownership extension align with these substrate primitives
  - §1Z.8 temporal validity (4 time fields: `occurred_at` / `recorded_at` / `effective_at` / `valid_from` / `valid_to`) — thesis v0 §10 #6 time-honest queries operationally enforced via these 4 fields
  - §1Z.10 AI content validation + impersonation gate + context snapshot immutability — thesis v0 §9 AI as bounded participant + v0 §10 #7 authority lineage substrate
  - §1Z.14 bidirectional CNS↔domain seam: *"CNS / AI may NEVER directly mutate domain canonical state outside that domain's validation boundary."* — thesis preserves T0-04 + v0 §9
  - §1Z.16 admitted-but-deferred items (D1 distributed tracing infrastructure / D2 data residency per tenant / D3 substrate-level deprecation discipline) — none conflict with thesis
  - §1Z.17 explicit rejections (~20 patterns: closed event taxonomy, events as actions, unidirectional seam, non-atomic mutation, full PHI broadcast, cross-tenant without tenant_id isolation, schema changes without registry, authorization deferred to executor, two-phase commit, replay mode confusion, single-timestamp modeling, projections as authority, causality cascades without depth limit, GDPR erasure by physical delete, AI hallucination, auto-hydration for unverified, manual reality lost, single-admin omnipotence, mutable audit log, no reconciliation) — thesis preserves all rejections; aligns with preserve-by-default-for-memory; authority-by-proof
  - Thesis v0 §16: §1Z is the DL-16 home; CNS ADR amendment + §1Z amendment + Coherent Pattern coherence-property addition coordinate at Phase G.2
- **`memory_disposition`**: `preserve` (file persists; system map section in place)
- **`authority_disposition`**: `keep_binding` (DL-16 home; substrate spine; binding doctrine)
- **`refresh_action`**: `amend` (add new sub-sections noting observation/extracted_assertion as event_kinds within 7-category partition; new actor_kinds for device/robot/external_system; coherence-properties enumeration referencing Coherent Pattern §7; preserve all 18 existing sub-sections)
- **`confidence_level`**: **`medium`** (clear thesis extension pathway; some uncertainty about whether observation/extracted_assertion should be: (a) new event_kinds within Domain event category, OR (b) new sub-category between Domain event and orchestration_action — F.3 review decides; BOTH options preserve §1Z structural integrity; refresh_action=amend either way)
- **`internal_coherence`**: internally coherent (18 sub-sections converge on universal envelope + 7-category + atomicity + isolation + audit consistency)
- **`dependency_relationships`**:
  - Downstream depends on: DL-15 specialization (scheduling), DL-21 federation (tenant_id isolation), DL-22 clinical media; companion `docs/architecture/cns_taxonomy_reconciliation.md`; system map §1D/1F/1G/1J/1K/1N/1Q/1S/1U/1V (cross-linked)
  - Upstream depends on (for Phase G.2): thesis v0 §8 + §10 + §12.1 + §12.2 surfaces; Coherent Pattern §7 coherence operational test (sequenced before §1Z amendment); F.3 decision on event_kind vs sub-category for observation/extracted_assertion (per D0THES-REV-010)
- **`recommended_action`**: Phase G.2 sub-arc — add new §1Z.19 sub-section noting observation/extracted_assertion as event_kinds within 7-category partition per thesis v0 §12.1 (cross-link to substrate implementation at 1K.5.A patient_clinical_assertions); add §1Z.20 noting device/robot/external_system actor_kinds per thesis v0 §12.2 (extends DL-16 amendment 43 actor 4-tuple); add §1Z.21 referencing 8-property coherence operational test per Coherent Pattern §7 + thesis v0 §10. Preserve all 18 existing sub-sections.
- **`estimated_effort`**: **M** (medium — 3 new sub-sections; cross-link updates; coordinated with DL-16 amendment + CNS ADR addendum + Coherent Pattern §7 addition; ~6-8 hours)
- **`priority`**: **2** (high — substrate spine; downstream amendments at CNS ADR + 1K.5.A reference §1Z)
- **`valid_decisions_to_preserve`**:
  - 7-category vocabulary partition (Domain event / Canonical domain state / orchestration_run / orchestration_action / Rail/surface projection / Outcome event / CNS decision)
  - Universal envelope schema (event_id / event_kind / domain / source / actor / 4 time fields / entity refs / payload_version / correlation_id / causation_id / aggregate_id / sequence_number / tenant_id / environment_context / replayability_flag / confidence / authority / source_quality / retention_class / consistency_tier / audit_lineage)
  - Taxonomy registry governance (registry record per kind; breaking-change discipline; CI lint)
  - Atomic state mutation + idempotency (event sourcing OR transactional outbox; non-atomic dual writes REJECTED)
  - Payload minimization + PHI hydration + multi-tenant isolation + patient impersonation gate (4 invariants stack)
  - Action authorization at emission + CNS decision record + tamper-evident audit chain (3 invariants form chain)
  - Reliability (DLQ + executor timeout + cross-run correlation + replay safety modes — 4 invariants)
  - Temporal validity (4 time fields) + projection freshness + source-of-truth for clinical (3 invariants bind time and reads)
  - Consistency tiers + causality cycle detection + cross-domain saga + compensation (4 invariants)
  - AI content validation + impersonation gate + context snapshot immutability (3 invariants for AI-era failure modes)
  - Operational observability + circuit breakers + environment segregation + reconciliation jobs (4 invariants)
  - GDPR/CCPA erasure-by-pseudonymization + retention + privileged-action elevated approval (3 invariants)
  - Manual reality capture + aggregate concurrency + value normalization + event-granularity routing (4 invariants)
  - Producer authorization + bidirectional CNS↔domain seam (2 invariants)
  - Cross-surface reconciliation table (companion file)
  - Admitted-but-deferred items (D1-D3)
  - Explicit rejections (~20 rejected patterns)
  - Cross-links (~25 cross-references)
- **`new_thesis_content_to_add`**:
  - §1Z.19 observation/extracted_assertion as event_kinds within 7-category partition (cross-link to 1K.5.A substrate implementation)
  - §1Z.20 device/robot/external_system actor_kinds (extends DL-16 amendment 43)
  - §1Z.21 coherence operational test 8-property reference (cross-link to Coherent Pattern §7)
- **`known_stale_content_to_remove`**: none
- **`phase_g_subphase_assignment`**: **G.2 substrate refresh** (sequenced after Coherent Pattern §7; coordinated with CNS ADR addendum + DL-16 amendment + 1K.5.A naming reconciliation)

---

### Row 6 — System map `§1K.5.A Clinical concept + assertion layer`

- **`artifact_path`**: [`.cursor/plans/system_map_three_layers_60706286.plan.md`](.cursor/plans/system_map_three_layers_60706286.plan.md) lines 5077-5385 (§1K.5.A; ~310 lines)
- **`current_state_summary`**: Foundational; required before first Rx pathway ships. 5-layer model: Evidence / Concept / Assertion / Context / Current clinical memory. ~95 concepts for first Rx pathway; ~150-200 across 4-5 pathways; ~50 shared core. `clinical_concepts` registry as code-as-config (NOT a database table). Per-concept entry: `concept_id` typed by prefix, `concept_version` semver, `concept_type`, `display_name`, `aliases[]`, `description`, `external_codes?[]` (ICD/SNOMED/LOINC/RxNorm/CPT optional; versioned; system-agnostic; `use` tags; `authoritative` flag), `default_authority_floor?`, `reconciliation_policy`, `active_disease_state_blocks_pathways?`, `retired { retired_at, replaced_by? }?`. `clinical_concepts_registry_snapshot` DB-shadow for analytics. Generated INDEX.md + question-bank ↔ concept-bank CI integrity check. Concept naming rule (clinical entity in concept_id; lifecycle in assertion fields). Acute/exacerbation/flare states as structured assertion context + metadata (not separate concept_ids); promotion-threshold model to dedicated `clinical_episodes` table (requires ALL THREE thresholds). `patient_clinical_assertions` table (append-only; 22 fields including authority_rank generated column). `AssertionContext` typed jsonb (8 identity-namespace fields hashed into context_key + supplemental envelopes for clinical_visit / care_management_source / check_in / lab / provider_assessment + deferred sub-shapes for document / medication_exposure / ai / adverse_event). Generalized context principle (identity namespace vs supplemental envelopes; 3 rules). `canonicalContextKey()` function (SHA-256 hash of canonical-form). `EvidenceRef` typed union (7 EvidenceRef kinds). Authority precedence (9-value enum with computed authority_rank: provider_confirmed 100 → system_derived 10). Longitudinal pattern + consistency rollup view (6-value enum: consistent_present/consistent_absent/consistent_resolved/conflicting/uncertain/insufficient_history). Authority vs pattern hard rule (5 binding clauses; pattern-based confidence NEVER promotes status or authored_by; can boost queue priority but cannot bypass safety floor enforcement). Two-stage trigger pipeline (Stage 1 assertion emitter + Stage 2 chart-column projection; fail-closed; no DLQ). Stage 1.5 multi-question assertion-builder (composite emitter; assertion_group_id; Mode J double-supersession). Narrative free-text intake evidence with three deterministic fan-outs ((a) code-as-config safety scan / (b) AI extraction emitter / (c) discrepancy detection). Repeated narrative + longitudinal pattern (extraction is the bridge; NO parallel narrative-pattern detector; CI lint rejects `narrative_*` / `*_topic_history` tables). Provider packet + workspace panel rendering for narrative (raw text verbatim + per-segment candidates as actionable rows + safety banner + discrepancy banner). Partial-data semantics (`metadata.completion_status` enum: complete/partial/gating_negative/gating_uncertain; NULL = UNKNOWN; safety preflight fails closed). Structured clinical context discipline (all clinical context fields used for safety/packet/workspace/queue/cohort/AI/quality/audit MUST be first-class queryable dimensions). Analytics SQL discipline rules. Reconciliation policies (auto_dedupe / context_distinct / requires_provider_review_on_conflict). Pregnancy reconciliation worked example. `recordClinicalAssertion` write API (idempotent on client_idempotency_key; high-risk mutation per `1J.10`). Mode J double-supersession. Concept retirement migration. Concept_version semver evolution rule. Diagnosis vs assertion clarification. What NOT to build (no separate patient_problem_list/allergies/medication_history/medical_history/surgical_history/family_history/social_history/substance_use tables; no SNOMED day 1; no FHIR direct mapping; no AI-authored provider_* statuses). 13 cross-links.
- **`knox_analysis_category`**: **K1** primary (correct, aligned, complete — 1K.5.A IS the substrate-level implementation of thesis v0 §12.1 observation/extracted_assertion layer, at deeper detail than v0 articulates) + **K2** secondary (terminology reconciliation: thesis names this layer "observation + extracted_assertion"; substrate names it "patient_clinical_assertions" with 9-value authored_by enum — naming decision per F.3)
- **`classification_evidence`**:
  - 1K.5.A header: *"Layer 1+2 architectural rule. The intake response log per `1K.5` is authoritative for the patient's literal answer. This subsection adds the clinical assertion layer that sits between raw evidence (intake / labs / docs / visits / AI) and clinical memory consumed by the safety preflight per `1J.10`, the provider workspace per `1G.8.5`, packet rendering per `1K.12`, and AI summary per `Section 1N`."* — EXACTLY thesis v0 §12.1 substrate position (between raw evidence and committed clinical truth)
  - 1K.5.A Five layers structure: *"Evidence → Concept → Assertion → Context → Current clinical memory"* — thesis v0 §12.1 observation + extracted_assertion = the Assertion layer here; thesis v0 §8 universal flow describes input modalities → events → observations → assertions → candidates which exactly matches 1K.5.A's flow
  - `patient_clinical_assertions` table schema includes `confidence text NOT NULL` enum (low/moderate/high/definitive) + `confidence_score numeric(3,2)` for AI authors (0.00-1.00); thesis v0 §12.1 names "confidence + uncertainty" as primitives — IMPLEMENTED
  - `assertion_type text NOT NULL` enum: *"present | absent | history_of | suspected | ruled_out | active_problem | resolved | family_history | risk_factor | exposure | use | allergy_reaction"* — thesis v0 §12.1 names "polarity (positive/negative/unknown/possible)" — IMPLEMENTED via assertion_type values (present=positive, absent=negative, suspected=possible, ruled_out=negative-with-confidence)
  - `status text NOT NULL` enum: *"unconfirmed | provider_confirmed | provider_rejected | provider_resolved | provider_refined | retracted | superseded"* — thesis v0 §12.1 names "requires_confirmation" + "requires_clinician_review" — IMPLEMENTED via status lifecycle
  - `authored_by text NOT NULL` 9-value enum + `authority_rank int NOT NULL GENERATED ALWAYS AS` generated column — thesis v0 §10 #7 authority lineage substrate — IMPLEMENTED with explicit precedence (provider_confirmed=100, provider_assessed=90, lab_derived=70, document_extracted=60, patient_self_correction=50, patient_reported=40, third_party_reported=30, ai_suggested=20, system_derived=10)
  - `evidence_refs jsonb NOT NULL` typed union per `EvidenceRef` (7 kinds) — thesis v0 §12.1 names "source_observation_ids" — IMPLEMENTED via typed EvidenceRef
  - `metadata.conflict_state = 'unresolved'` for conflict detection — thesis v0 §10 #1 no silent contradictions — IMPLEMENTED via reconciliation policies (`requires_provider_review_on_conflict`)
  - `supersedes_assertion_id` append-only chain + `concept_version` pinning — thesis v0 §10 #2 no silent supersession + #3 versioned reinterpretation — IMPLEMENTED
  - `retracted_at` + `retracted_reason` superseded by new row — thesis v0 §10 #4 reversibility — IMPLEMENTED
  - `asserted_at` + `ingested_at` + full historical chain — thesis v0 §10 #6 time-honest queries — IMPLEMENTED
  - 9-value `authored_by` + `authority_rank` generated column — thesis v0 §10 #7 authority lineage — IMPLEMENTED with computed precedence
  - Longitudinal pattern + consistency rollup view: *"patient_clinical_assertion_history_rollup keyed on (patient_id, concept_id, context_key) aggregates across the entire supersession + history chain"* — MORE SOPHISTICATED than thesis v0 §12.1 articulates
  - Narrative free-text intake evidence with three deterministic fan-outs (safety scan + AI extraction + discrepancy detection) — IMPLEMENTS thesis v0 §12.3 conversational intake at finer granularity
  - 1K.5.A header: *"Build minimal: realistic v1 sizing is ~95 concepts for the first Rx pathway (e.g., GLP-1) and ~150-200 across the first 4-5 pathways combined, with ~50 SHARED CORE concepts reused by every Rx funnel"* — explicit substrate-build discipline
  - "What NOT to build" §: *"No separate patient_problem_list, patient_allergies, patient_medication_history, ... tables. Each is a `concept_type` filter on the assertion view."* — thesis v0 §9 AI bounded participant aligns with "No auto-confirmation from any source other than provider explicit action through `recordClinicalAssertion`"
  - Pregnancy reconciliation worked example demonstrates `requires_provider_review_on_conflict` reconciliation policy with full workflow (per-pathway authority floors; notification urgency; patient communication; 5 typed provider action options; documentation requirements) — operationally tested doctrine
- **`memory_disposition`**: `preserve` (file persists; ~310 lines of dense substrate doctrine; preserves verbatim)
- **`authority_disposition`**: `keep_binding` (foundational substrate; required before first Rx pathway ships per its own header)
- **`refresh_action`**: `amend` (Phase G.2 sub-arc — terminology reconciliation decision per F.3; if F.3 chooses option (a) preserve patient_clinical_assertions naming, then refresh_action=amend with header cross-reference to thesis v0 §12.1; if F.3 chooses option (b) rename to observation/extracted_assertion, then refresh_action=port_rename with significant downstream impact on intake_response triggers, EvidenceRef union, recordClinicalAssertion API, RLS policies, view names, ~95 concept registry entries; strong recommendation = option (a))
- **`confidence_level`**: **`high`** (substantive alignment is clear; terminology reconciliation is a naming decision not a semantic decision; either F.3 outcome preserves all locked substrate decisions)
- **`internal_coherence`**: internally coherent (5-layer model + ~30 substantive sub-discussions + locked design decisions converge on single substrate)
- **`dependency_relationships`**:
  - Downstream depends on: `1K.5` (raw evidence + view dimension extension + trigger pipeline revision); `1K.4` (concept_mapping? field on question-bank entry); `1K.6` (Mode E provider follow-ups + Mode F system check-ins); `1K.13` (Mode J double-supersession); `1J.10` (safety preflight reads); `1L.13` / `1L.20` (lab-derived assertion emitter); `Section 1O` (document-extracted assertion emitter); `Section 1N` (AI assertion path); `1G.8.5` (provider workspace assertion-list panel); `1K.14` (schema row); `1K.0(c)` (`recordClinicalAssertion` write API); `1D.1` (`can_record_clinical_assertion` capability); `Section 1P` (narrative atomization pipeline)
  - Upstream depends on (for Phase G.2 amendment): thesis v0 §12.1 + §12.3 + §10 + §8 surfaces; F.3 decision on naming reconciliation (D0THES-REV-010 + D0THES-REV-011)
- **`recommended_action`**: Phase G.2 sub-arc — terminology reconciliation per F.3 decision. **Strong recommendation: option (a) preserve patient_clinical_assertions naming**; add header cross-reference *"thesis v0 §12.1 names this layer 'observation + extracted_assertion'; substrate implementation uses `patient_clinical_assertions` with 9-value `authored_by` enum; thesis-doctrine-level naming and substrate-level naming coexist."* Preserve all 5 layers + ~30 substantive sub-discussions + locked design decisions. The new DL-23 candidate may simply be a doctrine-level wrapper that points to 1K.5.A substrate as the implementation; OR thesis v0 v1 adopts patient_clinical_assertions terminology and DL-23 is unnecessary (1K.5.A IS the canonical home).
- **`estimated_effort`**: **M** (medium for option (a) — header cross-reference + minor amendments; ~3-4 hours) OR **XL** (extra-large for option (b) — full rename across substrate; CI updates; migration; ~40-60 hours) — strongly recommend option (a)
- **`priority`**: **2** (high — substrate spine for clinical assertion layer; thesis v0 §12.1 references this directly; F.3 naming decision blocks Phase G.2 DL-23 question)
- **`valid_decisions_to_preserve`**: 
  - 5-layer model (Evidence / Concept / Assertion / Context / Current clinical memory)
  - `clinical_concepts` registry as code-as-config (~95 concepts for first Rx pathway; ~150-200 across 4-5; ~50 shared core)
  - `clinical_concepts_registry_snapshot` DB-shadow + generated INDEX.md + question-bank ↔ concept-bank CI integrity check
  - External coding rules (ICD/SNOMED/LOINC/RxNorm/CPT optional; versioned; system-agnostic; `use` tags; `authoritative` flag; internal `concept_id` remains source of truth)
  - Concept naming rule (clinical entity in concept_id; lifecycle in assertion fields)
  - Acute states promotion-threshold model
  - `patient_clinical_assertions` table (22-field schema)
  - 9-value `authored_by` + `authority_rank` generated column
  - `confidence` enum (low/moderate/high/definitive) ORTHOGONAL to status
  - `confidence_score` numeric (0.00-1.00) for AI authors only
  - `evidence_refs` typed union (7 EvidenceRef kinds)
  - `AssertionContext` shape (8 identity-namespace fields + supplemental envelopes)
  - Generalized context principle (identity vs supplemental; 3 rules)
  - `canonicalContextKey()` function (SHA-256 hash)
  - Two-stage trigger pipeline + Stage 1.5 multi-question composite emitter
  - Narrative free-text intake (three fan-outs: safety scan + AI extraction + discrepancy detection)
  - Repeated narrative + longitudinal pattern via extraction bridge (NO parallel detector; CI lint rejects narrative_* tables)
  - Provider packet + workspace panel rendering for narrative
  - Partial-data semantics (`metadata.completion_status` 4 values; NULL = UNKNOWN; fail closed on safety floors)
  - Structured clinical context discipline (all clinical context fields used for safety/packet/workspace/queue/cohort/AI/quality/audit MUST be queryable dimensions)
  - Analytics SQL discipline rules
  - Reconciliation policies (auto_dedupe / context_distinct / requires_provider_review_on_conflict)
  - Pregnancy reconciliation worked example
  - `recordClinicalAssertion` write API (idempotent; high-risk mutation per `1J.10`; audited)
  - Mode J double-supersession (intake_response chain + assertion chain reference each other)
  - Concept retirement migration
  - Concept_version semver evolution rule (patch/minor/major bump policy + migration plan for major)
  - Diagnosis vs assertion clarification
  - What NOT to build (no separate patient_problem_list/allergies/medication_history/medical_history/surgical_history/family_history/social_history/substance_use tables; no SNOMED day 1; no CMS-style admin UI for concepts; no encounter abstraction; no FHIR direct mapping; no AI-authored provider_* statuses; no allergy-specific or medication-specific columns in v1)
  - 13 cross-links
- **`new_thesis_content_to_add`**: terminology reconciliation (header cross-reference per option (a) recommendation); thesis v0 §6.5 brand architecture not currently in 1K.5.A — likely out of scope for 1K.5.A (intake-channel-specific); cross-brand assertion sharing handled by DL-21/DL-25 patient-graph layer not 1K.5.A
- **`known_stale_content_to_remove`**: none identified
- **`phase_g_subphase_assignment`**: **G.2 substrate refresh** (coordinated with Coherent Pattern §7 + §1Z amendment + CNS ADR Phase G addendum + DL-21/DL-25 patient-graph; sequenced after F.3 naming decision)

---

## §3 Thesis Content Gap Table

7 thesis content areas identified from these 6 calibration artifacts. Each maps to target doctrine home(s).

### Gap Row 1 — Observation + extracted_assertion as named primitive (v0 §12.1)

- **`content_area`**: observation + extracted_assertion as first-class primitives between source_event and candidate per v0 §12.1
- **`v0_section_source`**: §12.1
- **`target_doctrine_home`**: **EXISTING `1K.5.A patient_clinical_assertions`** (substrate already implements at deeper detail) + **OPTIONAL new DL-23 doctrine-level wrapper** OR thesis v0 v1 adopts patient_clinical_assertions naming
- **`home_decision`**: `pending_audit` (F.3 decides per D0THES-REV-010 + D0THES-REV-011: option (a) preserve patient_clinical_assertions naming + thesis v0 v1 adopts; OR option (b) rename to observation/extracted_assertion at substrate level — significant downstream impact)
- **`dependency_relationships`**: Depends on Coherent Pattern §7 coherence operational test 8-property (v0 §10 #1-#8 reference observation/assertion confidence/uncertainty primitives). Blocks Phase G.2 DL-23 sub-arc.
- **`priority`**: **1** (foundational; blocks several downstream amendments)
- **`estimated_effort`**: **M** (option (a)) OR **XL** (option (b)) — strongly recommend option (a)
- **`phase_g_subphase_assignment`**: G.2 substrate refresh (1K.5.A amendment)

### Gap Row 2 — 8-property coherence operational test (v0 §10)

- **`content_area`**: 8-property coherence operational test (no silent contradictions; no silent supersession; versioned reinterpretation; reversibility; cross-slice consistency; time-honest queries; authority lineage; ownership resolution) per v0 §10 #1-#8
- **`v0_section_source`**: §10
- **`target_doctrine_home`**: **NEW §7 in Coherent OMNI Architecture Pattern** + cross-references from CNS ADR addendum + §1Z.21 sub-section + 1K.5.A header
- **`home_decision`**: `create_new_section` (Coherent Pattern §7 coherence operational test) + `extend_existing_artifact` (cross-references in CNS ADR addendum + §1Z + 1K.5.A)
- **`dependency_relationships`**: Independent root for Phase G.2; blocks CNS ADR addendum + §1Z amendments (which reference it). Blocks v0 §7 coordination_case ownership extension landing (which is the substrate implementation of property #8 ownership resolution).
- **`priority`**: **1** (foundational; blocks several downstream amendments)
- **`estimated_effort`**: **M** (~3-4 hours for Coherent Pattern §7 + cross-references)
- **`phase_g_subphase_assignment`**: G.2 substrate refresh (Coherent Pattern amendment)

### Gap Row 3 — coordination_case ownership extension (v0 §7)

- **`content_area`**: `coordination_case` ownership attribution (`coordination_owner` / `monitoring_owner` / `open_loop_owner`) OR intentional no-owner rationale documented per case per v0 §7
- **`v0_section_source`**: §7 (named primitives) + §10 #8 (ownership resolution coherence property)
- **`target_doctrine_home`**: **EXTEND CNS ADR §2.16 envelope** with ownership fields OR **EXTEND §1Z.6 action authorization** with ownership semantics OR **NEW DL for coordination_case** — per F.3 D0THES-REV-011 decision
- **`home_decision`**: `pending_audit` (F.3 decides: substrate-level home for coordination_case; thesis v0 v1 article-level naming reconciliation)
- **`dependency_relationships`**: Blocks Phase G.2 ownership primitive boundary decision. Independent of other thesis content areas.
- **`priority`**: **2** (high — blocks Phase G.2 coordination_case sub-arc)
- **`estimated_effort`**: **M-L** depending on home decision (extension = M; new DL = L)
- **`phase_g_subphase_assignment`**: G.2 substrate refresh

### Gap Row 4 — care_relationship + shared_context_grant (v0 §12.4 patient-graph)

- **`content_area`**: `care_relationship` (patient × provider × organization × care_slice × scope × started_at × ended_at) + `shared_context_grant` (patient × from_org × to_org × resource_type × resource_id × purpose × scope × granted_by × expires_at × access_level) at cross-distinct-legal-entity patient-graph scope per v0 §12.4
- **`v0_section_source`**: §12.4
- **`target_doctrine_home`**: **NEW DL-25 patient-graph** (strong recommendation per Audit Row 3 above) OR **EXTEND DL-21 federation** with patient-graph invariants — per F.3 D0THES-REV-009 decision
- **`home_decision`**: `pending_audit` (F.3 decides: strong recommendation NEW DL-25; DL-21 stays as tenant-boundary substrate)
- **`dependency_relationships`**: Blocks Phase G.2 patient-graph sub-arc. Coordinated with DL-21 sub-arc (resolution of 5 open sub-questions + brand contract minimums).
- **`priority`**: **2** (high — blocks Phase G.2 patient-graph sub-arc; D0THES-REV-009 closure blocks several other open reviews)
- **`estimated_effort`**: **L** (large — new DL with 8-15 invariants; cross-link refresh; coordinated with DL-21 sub-arc)
- **`phase_g_subphase_assignment`**: G.2 substrate refresh

### Gap Row 5 — device/robot/external_system actor subtypes (v0 §12.2)

- **`content_area`**: `device` + `robot` + `external_system` as new actor_kinds extending DL-16 amendment 43 actor 4-tuple per v0 §12.2 (note: §1Z.6 already references actor_kind enum incl. clinic + third_party_integration as 12-kind harmonization per DL-16 amendment 43 — thesis adds device + robot + external_system as additional kinds)
- **`v0_section_source`**: §12.2
- **`target_doctrine_home`**: **EXTEND DL-16 amendment 43** actor 4-tuple to include device + robot + external_system + cross-link from §1Z.20 (per Audit Row 5 amendment) + cross-link from CNS ADR §9 Phase G addendum (per Audit Row 4 amendment)
- **`home_decision`**: `extend_existing_artifact` (DL-16 amendment; §1Z; CNS ADR addendum all cross-reference)
- **`dependency_relationships`**: Sequenced after §1Z.20 amendment + CNS ADR addendum (which reference DL-16 amendment).
- **`priority`**: **3** (medium — extension is mechanical once §1Z + CNS ADR amendments land)
- **`estimated_effort`**: **S** (small — extension of existing enum + cross-link refresh; ~2-3 hours)
- **`phase_g_subphase_assignment`**: G.2 substrate refresh

### Gap Row 6 — Brand architecture / Powered-by-OMNI (v0 §6.5)

- **`content_area`**: Brand architecture (Powered-by-OMNI hub-and-spoke pattern; substrate-level brand contract: shared identity / shared consent UX / mandatory data-flow-back / default-on cross-brand context / default-on safety-interrupt routing) per v0 §6.5
- **`v0_section_source`**: §6.5
- **`target_doctrine_home`**: **NEW §2.11 cross-cutting discipline in Coherent OMNI Architecture Pattern** + **EXTEND DL-21 invariant 9 LE↔Brand many-to-many** with brand contract minimums OR new DL-25 patient-graph + brand contract — per F.3 D0THES-REV-012 decision
- **`home_decision`**: `extend_existing_artifact` (Coherent Pattern §2.11 + DL-21 inv 9 extension) OR `create_new_artifact` if brand contract gets standalone DL
- **`dependency_relationships`**: Coordinated with DL-21 sub-arc (Day 0 specialty rollout + LE↔Brand many-to-many invariants). Independent of observation/assertion + coordination_case content areas.
- **`priority`**: **3** (medium — important for strategic narrative; less load-bearing than substrate primitive additions)
- **`estimated_effort`**: **M** (medium — Coherent Pattern §2.11 + DL-21 extension; ~4-5 hours)
- **`phase_g_subphase_assignment`**: G.2 substrate refresh

### Gap Row 7 — Universal CNS flow as higher-abstraction framing (v0 §8)

- **`content_area`**: Universal CNS flow as modality-interchangeable framing (input modalities → source_event → media_artifact → observation → extraction_run → extracted_assertion → patient_confirmation/clinician_review → committed assertion → CNS context_packet update → candidate → policy_resolver → authorized_action → execution → output modalities → evidence_record) per v0 §8 — operates at higher abstraction layer over §1Z 7-category partition substrate
- **`v0_section_source`**: §8
- **`target_doctrine_home`**: **AMEND Coherent Pattern §3 cross-domain composition rules** to acknowledge universal flow as composition pattern over the 3-layer substrate + **cross-link from §1Z.18 cross-links** to thesis v0 §8 — universal flow framing is doctrine-level articulation; substrate stays at §1Z + 1K.5.A
- **`home_decision`**: `extend_existing_artifact` (Coherent Pattern §3 + §1Z.18 cross-link)
- **`dependency_relationships`**: Independent root content area; could land any time within Phase G.2 substrate refresh.
- **`priority`**: **3** (medium — articulation, not substrate addition)
- **`estimated_effort`**: **S** (small — Coherent Pattern §3 extension + §1Z.18 cross-link; ~2-3 hours)
- **`phase_g_subphase_assignment`**: G.2 substrate refresh

---

## §4 Aggregate Metrics (scoped to F.2.0 calibration batch)

### Knox category distribution

- K1: 1 row (Build OS layer model)
- K2: 3 rows (Coherent Pattern, CNS ADR, §1Z)
- K3: 1 row (DL-21)
- K4: 0 rows
- K6: 0 rows
- K7: 0 rows
- K8: 0 rows
- K1+K2 hybrid: 1 row (1K.5.A)

### Memory disposition distribution

- preserve: 5 rows (Coherent Pattern, Build OS, CNS ADR, §1Z, 1K.5.A)
- preserve_with_extracted_pointer: 1 row (DL-21)
- archive_in_place: 0 rows
- discard: 0 rows

### Authority disposition distribution

- keep_binding: 5 rows (Coherent Pattern, Build OS, CNS ADR, §1Z, 1K.5.A)
- promote_to_binding: 0 rows
- reduce_to_historical: 0 rows
- demote_to_evidence: 0 rows
- extract_decisions_only: 0 rows
- pending_post_refresh: 1 row (DL-21, due to DRAFT status + DL-21-vs-DL-25 split decision pending)

### Refresh action distribution

- none: 1 row (Build OS)
- port_rename: 0 rows
- partially_refresh: 1 row (DL-21)
- fully_refresh_in_place: 0 rows
- supersede_with_v2: 0 rows
- amend: 4 rows (Coherent Pattern, CNS ADR, §1Z, 1K.5.A)
- route_to_conflict_ledger_first: 0 rows
- needs_deeper_read: 0 rows

### Confidence distribution

- high: 4 rows (Coherent Pattern, Build OS, CNS ADR, 1K.5.A)
- medium: 2 rows (DL-21, §1Z)
- low: 0 rows

### Estimated effort distribution

- S (small): 2 rows (Build OS, CNS ADR addendum)
- M (medium): 3 rows (Coherent Pattern, §1Z, 1K.5.A option (a))
- L (large): 1 row (DL-21)
- XL (extra-large): 0 rows in calibration set (would be 1K.5.A option (b) if F.3 chooses rename — strongly avoid)

### Priority distribution

- Priority 1 (foundational): 1 row (Coherent Pattern §7 coherence operational test)
- Priority 2 (high; blocks other work): 3 rows (DL-21, §1Z, 1K.5.A)
- Priority 3 (medium): 1 row (CNS ADR — sequenced after Coherent Pattern + §1Z)
- Priority 5 (low; can wait): 1 row (Build OS — light verification only)

### Phase G sub-phase distribution

- G.1 spine refresh: 0 rows
- G.2 substrate refresh: 5 rows (Coherent Pattern, DL-21, CNS ADR, §1Z, 1K.5.A)
- G.3 coordination refresh: 1 row (Build OS — light verification)
- G.4 architecture/domain: 0 rows
- G.5 existing-build reconciliation: 0 rows

### Dependency graph (Phase G.2 sequencing within calibration set)

```
Sequence:
1. Coherent Pattern §7 coherence operational test (foundational; priority 1)
2. Then in parallel:
   a. §1Z amendments (priority 2; sequenced after Coherent Pattern §7)
   b. DL-21 sub-arc + new DL-25 patient-graph (priority 2; F.3 split decision required first)
   c. 1K.5.A amendment (priority 2; F.3 naming decision required first)
3. CNS ADR §9 Phase G addendum (priority 3; sequenced after Coherent Pattern + §1Z + 1K.5.A)
4. Build OS layer model G.3 verification (priority 5; no thesis-driven changes; light check only)
```

### Estimated total effort for these 6 artifacts (Phase G.2 + G.3 work)

- ~3-4 hours (Coherent Pattern §7) + ~6-8 hours (§1Z 3 sub-sections) + ~12-20 hours (DL-21 + new DL-25 coordinated) + ~3-4 hours (1K.5.A option (a)) + ~2-3 hours (CNS ADR addendum) + ~1 hour (Build OS verification) = **~27-40 hours of focused Phase G.2 + G.3 work** for these 6 artifacts alone.

Extrapolating to ~30-40 artifacts in full F.2.2 scope: scale-linear estimate ~135-270 hours = ~3-7 weeks of focused doctrine refresh work in Phase G. Matches the OMNI Doctrine Refresh Arc plan's "~8-15 weeks of doctrine work before product translation begins" estimate (calibration suggests the lower bound is more likely if remaining artifacts have similar effort distribution; upper bound only if substantial unanticipated cruft surfaces in F.2.2 audit).

---

## §5 Conflict Ledger Seed Rows

**None.** No K8 contradictory-with-another-artifact cases discovered in F.2.0 calibration batch.

Specifically checked for potential conflicts:
- DL-21 inv 5 (patient_continuity_policy with continuity_kind) vs thesis v0 §12.4 care_relationship — overlap at different scopes (tenant-boundary vs patient-graph). Complementary, not conflicting.
- 1K.5.A `patient_clinical_assertions.authored_by` enum vs thesis v0 §12.1 observation + extracted_assertion terminology — naming choice (F.3 decides). Not a conflict.
- §1Z 7-category partition vs thesis v0 §8 universal flow — same physics at different abstraction layers. Not a conflict.
- CNS ADR §2.17 Provider Clinical Context Packet vs thesis v0 §9 AI as bounded participant — fully aligned. Not a conflict.

If F.2.2 full audit surfaces K8 cases in remaining artifacts, seed rows would be added here.

---

## §6 Phase G Sequencing Recommendation (scoped to F.2.0 calibration batch)

**Recommended Phase G.2 substrate refresh sequence based on calibration findings:**

1. **Coherent Pattern §7 addition** (priority 1; foundational) — add 8-property coherence operational test referencing thesis v0 §10 #1-#8. Add §2.11 cross-cutting discipline for brand architecture. Add §1 observation/assertion upstream layer note.

2. **F.3 decisions required** before further G.2 work proceeds:
   - D0THES-REV-009: DL-21 vs DL-25 split for care_relationship + shared_context_grant patient-graph primitives. **Recommendation: NEW DL-25.**
   - D0THES-REV-010: thesis v0 §12.1 observation/extracted_assertion vs 1K.5.A patient_clinical_assertions naming reconciliation. **Recommendation: option (a) preserve patient_clinical_assertions naming; thesis v1 adopts.**
   - D0THES-REV-011: ownership primitive scope (coordination_owner / monitoring_owner / open_loop_owner) — attributes on coordination_case OR first-class primitives.
   - D0THES-REV-012: brand contract minimums per v0 §6.5.

3. **Post-F.3 parallel sub-arcs**:
   - **(a) §1Z amendments** — new §1Z.19 observation/extracted_assertion event_kinds + §1Z.20 device/robot/external_system actor_kinds + §1Z.21 coherence operational test cross-link
   - **(b) DL-21 sub-arc** — promote from DRAFT to locked; resolve 5 open sub-questions (Q-DL21-1..5); coordinate with new DL-25 authoring
   - **(c) NEW DL-25 patient-graph** — author care_relationship + shared_context_grant invariants at cross-distinct-legal-entity scope; cross-link DL-21 ↔ DL-25
   - **(d) 1K.5.A amendment** — header cross-reference to thesis v0 §12.1; preserve all locked content per option (a) recommendation
   - **(e) DL-16 amendment** — extend amendment 43 actor 4-tuple to include device + robot + external_system actor_kinds

4. **CNS ADR §9 Phase G addendum** (priority 3; sequenced after Coherent Pattern + §1Z + 1K.5.A) — note thesis-extension surfaces; preserve §2.14-§2.20 + §2.21 + §3-§8.2 untouched.

5. **Build OS layer model G.3 verification** (priority 5; can wait) — confirm thesis-extension primitives all land in Layer 1 Truth Layer artifact list; mechanical catalog update; no rewrite.

**F.2.2 full audit MUST sample**:
- (a) Sections likely to be stale (1F scheduling UI, 1G messaging surfaces, 1H analytics, 1I financial lifecycle UI, 1J identity merge UX, 1K intake UI flows) — calibration may have undersampled cruft sections.
- (b) Commerce DL-17 — thesis touches via business engine §13.5; not in calibration set.
- (c) Longitudinal intelligence corpus — currently on parking branch; F.2.2 should consult (parking branch reconciliation is G.5 work, but audit-consult is F.2.2).
- (d) Scheduling rule matrix — parking-branch deltas to reconcile.
- (e) DL-22 clinical media — thesis v0 §12.3 conversational artifact extension target; coordinate with 1K.5.A narrative free-text findings.
- (f) DL-14 CNS orchestration — likely on parking branch; foundational for CNS substrate.
- (g) Communications topology — referenced extensively in CNS ADR; thesis-extension implications.
- (h) AI Governance Policy — thesis v0 §9.5 learning loop boundary; check for stale assumptions.

**Total estimated F.2.2 effort**: ~135-270 hours (~3-7 weeks of focused work) based on calibration scaling. Within OMNI Doctrine Refresh Arc plan estimate of ~1-2 weeks for F.2 (calibration suggests upper bound; specifically the system map per-section sub-audits are the heaviest cost).

---

## §7 Self-Assessment (F.2.0 calibration review)

**Per Knox + Nick discipline: self-assessment is mandatory in F.2.0 to surface schema problems before F.2.2 commits to full execution.**

### What classifications were hard

1. **DL-21 K3 vs K2 decision** — DL-21 invariants 4-7 (patient continuity policy + federation permeability policy at tenant-boundary scope) ALMOST conflict with thesis v0 §12.4 care_relationship + shared_context_grant (at patient-graph scope). Initially considered K8 (contradictory) but verified the scopes are complementary not conflicting. Settled on K3 (valid decisions in older framing that thesis extends). F.3 needs explicit DL-21-vs-DL-25 split decision.

2. **1K.5.A K1 vs K2 decision** — 1K.5.A IS substantively the thesis v0 §12.1 observation/extracted_assertion layer at deeper detail. Classified primarily as K1 (correct/aligned/complete) with K2 (terminology reconciliation needed). The "K2 secondary" classification was uncomfortable because thesis under-credits the existing substrate; surfaced this in Q7 audit teaches us about thesis (Finding 1).

3. **§1Z observation/extracted_assertion placement** — should they be new event_kinds within existing "Domain event" category, OR a new sub-category between Domain event and orchestration_action? Both options preserve §1Z structural integrity. Confidence = medium; F.3 review-gate or F.2.2 audit can resolve.

4. **Build OS K1 with refresh_action=none** — felt counter-intuitive at first because thesis adds substantial new doctrine. But verification: Build OS layer model is STRUCTURALLY orthogonal to thesis content; new artifacts fill Layer 1 mechanically without changing the model. Settled on K1 / refresh_action=none / priority 5.

### Where uncertain (low-confidence rationale + what additional evidence would resolve)

Two rows tagged confidence = medium:

1. **DL-21** — uncertain whether F.3 chooses DL-21-extension vs new DL-25. Both preserve valid decisions; Phase G.2 sub-arc shape differs significantly. Strong recommendation in audit row = new DL-25. Resolution requires F.3 explicit decision OR F.2.2 deeper read of DL-21 inv 4-7 vs thesis v0 §12.4 boundary semantics + Mindbody-style federation depth (D0THES-REV-009).

2. **§1Z amendments** — uncertain about observation/extracted_assertion as new event_kinds vs new sub-category. Resolution: F.2.2 deeper read of §1Z.2 7-category partition + DL-16 invariant 3 + how taxonomy registry (§1Z.3) handles new kinds vs new categories. Both options viable; F.3 decides.

No rows tagged confidence = low. No rows defaulted to `refresh_action: needs_deeper_read`.

### Whether the schema is working

**Schema seems to be working well. Two minor observations:**

1. **`classification_evidence` field is doing the heaviest work.** It forces audit to ground every classification in specific artifact content. Without it, audit would be vibes-based. Confirming this field is mandatory + visible in every row.

2. **`valid_decisions_to_preserve` field is critical for Nick's load-bearing concern.** 1K.5.A row had ~30 substantive locked decisions to preserve; DL-21 had ~28. Without this field, the per-artifact preservation discipline would be implicit and easy to lose. Confirming mandatory for K3 / K6 / K7 cases + recommending for K1 cases with substantial content.

3. **Two-axis disposition (memory + authority + refresh_action) is doing real work.** Build OS = memory=preserve + authority=keep_binding + refresh=none vs Coherent Pattern = memory=preserve + authority=keep_binding + refresh=amend are different operational states despite same memory+authority. Three-axis precision was correct discipline.

4. **Confidence levels work as intended.** Medium-confidence rows had real uncertainty pathways with resolution mechanisms (F.3 decision OR F.2.2 deeper read). No "low" confidence rows in calibration because the 6 artifacts are substrate-spine — likely to be high-confidence. F.2.2 will surface more low-confidence cases when sampling unfamiliar / stale sections.

### Whether the system-map section approach works

**Works for substrate-spine sections (§1Z, §1K.5.A).** Both audited as substantial dense doctrine; preserve+amend dispositions. Each ~190-310 lines treated as one audit row was appropriate — both have internal coherence and shouldn't be split further.

**Caveat: calibration didn't test cruft-likely sections.** F.2.2 MUST sample 1F (scheduling UI), 1G (messaging UI), 1H (analytics surfaces), 1J (identity merge UX), 1K (intake UI). If those reveal "wild man on week 2" UX cruft, the system-map approach needs roll-up verdict + stable-vs-cruft separation discipline (which the plan already specifies but calibration didn't exercise).

### What the calibration teaches us about full F.2.2 scope/effort

1. **Substrate-spine sections preserve cleanly.** Coherent Pattern, Build OS, CNS ADR all K1/K2 with amend disposition. If remaining substrate-spine artifacts (Charter, Protocol, Control Plane, Doctrine Manifest, AGENTS, catalog, read graph, supersession ledger, decision ledger, open review queue, guardrail digest, operator context) follow similar pattern, F.2.2 effort for those = light.

2. **DL drafts are the heavier audit.** DL-21 (DRAFT, 28 invariants, 5 open sub-questions) was the largest single audit row. DL-17 commerce + DL-22 clinical media + remaining DL drafts likely similar effort. F.2.2 DL audit alone may be ~4-6 days.

3. **1K.5.A substrate density was surprisingly high.** ~310 lines, ~30 substantive locked decisions, deep test of preserve+extend judgment. Similar substrate-spine sections (1F.10 DL-15 scheduling spine, 1G.7 ownership/SLA discipline, 1J.4 identity confidence + gating, 1Q.21 marketing lifecycle suite, 1W tracked clinical objects) may have similar density. F.2.2 system-map audit per section = ~2-4 hours each at this density.

4. **Total F.2.2 effort estimate**: 30-40 canonical artifacts × ~2-6 hours each (average ~3-4 hours per artifact for substrate-spine; ~6-8 hours per DL; ~2-4 hours per system-map section) + executive verdict synthesis + thesis content gap table + dependency graph = ~120-200 hours = ~3-5 weeks of focused work. Matches plan's estimate.

5. **Calibration suggests Nick's "random UX cruft from week 2" framing may have been overstated for substrate spine** but UNTESTED for UI/UX surface sections. F.2.2 should explicitly sample stale-suspect sections.

### Overall confidence in calibration output

- **Substantive findings**: high confidence. 6 calibration artifacts have well-grounded classifications with evidence citations.
- **Open F.3 decisions**: 4 thesis-content-area decisions need F.3 explicit resolution before Phase G.2 can proceed (D0THES-REV-009 + D0THES-REV-010 + D0THES-REV-011 + D0THES-REV-012).
- **F.2.2 scope estimate**: medium confidence. Calibration sample-bias may under-credit cruft-likely sections. Real F.2.2 audit will refine.
- **Schema integrity**: high confidence. Knox + Nick refinements (preserve-memory-authority-by-proof; two-axis disposition; classification_evidence mandatory; valid_decisions_to_preserve mandatory for K3/K6/K7; confidence levels) all worked.

### Recommendations for F.2.1 review gate

- **Approve as-is**: F.2.2 proceeds with same schema + same discipline + same evidence-citation requirements. Recommended.
- **Approve with refinements**: if F.2.1 wants tighter scope (e.g., specific stale-suspect sections to prioritize), F.2.2 can be re-sequenced before execution.
- **Re-calibrate**: only if F.2.1 surfaces fundamental schema problems (not surfaced in this calibration).
- **Reject — scope wrong**: only if F.2.1 concludes audit-driven approach is wrong (extremely unlikely given calibration findings).

**Strongest signal for F.2.1**: thesis v0 §12.1 observation/extracted_assertion UNDERSTATES existing 1K.5.A substrate. Thesis v1 may want to adjust the "5 surgical additions" framing to acknowledge substrate already exists for some items (downgrade some to "doctrine-level naming reconciliation" instead of "surgical primitive addition"). This bidirectional feedback is exactly what Knox + Nick wanted from Q7 audit-teaches-us-about-thesis.

---

## §8 F.2.0.v1 Refresh — V1-Lens Layered Analysis

> **F.2.0.v1 CALIBRATION REFRESH COMPLETE 2026-05-25**
>
> Same-day post-v1-spawn refresh of the F.2.0 calibration against v1 lens. v0-lens findings (§§0-7 above) preserved as historical layer. v1-lens findings layered here per Operating Contract §17 append rules. Per Knox three-tier policy: mechanical errata = fix as errata; substantive thesis feedback = document + route to Phase G or v2 (do NOT patch v1 mid-audit); materially misleading lens = stop + ask. **Outcome: 0 Tier 1 errata; 5 Tier 2 substantive bidirectional findings (routed); 0 Tier 3 materially-misleading findings.** v1 confirmed usable as F.2.2 audit lens.

### §8.1 V1-Lens Master Executive Audit Verdict

Same 7 questions as §1, scoped to v1-lens refresh + bidirectional feedback discovery.

#### Q1.v1 — What is healthier than expected under v1 lens?

- **1K.5.A is EVEN MORE substantively aligned with v1 than v0-lens calibration revealed.** Multiple v1 sections compose with 1K.5.A substrate operationally: §7.3 care_commitment threshold maps to 1K.5.A Stage 1.5 emit_trigger; §7.5 clinical_adoption maps to 1K.5.A `recordClinicalAssertion` API + `provider_assessment.assertion_action` enum (new_diagnosis / confirmation_of_prior / rejection_of_prior / refinement_of_prior / resolution_of_prior); §12.6 case-deliberation `consult_opinion` maps to 1K.5.A `authored_by=provider_assessed` + `clinical_visit_id` cross-link; §12.8 substrate-vs-care boundary maps to 1K.5.A 9-value authored_by enum + computed authority_rank generated column.
- **§1Z audit infrastructure is EXACTLY the substrate v1 §7.6 governance plane operates on.** Tamper-evident audit chain (§1Z.6 invariant 38) + operational observability (§1Z.11 invariant 27) + circuit breakers + environment segregation (invariant 28) + reconciliation jobs (invariant 39) + privileged-action elevated approval (§1Z.12 invariant 37) collectively form the substrate that "aggregate-by-default + patient-identifiable access only by named purpose + minimum-necessary + policy-scoped + logged + reviewable" runs on.
- **CNS ADR §2.17 Provider Clinical Context Packet IS the substrate-level form of v1 §7.5 clinical_adoption.** "AI summarizes/proposes; deterministic validates+flags+blocks; provider signs where clinical authority required" is the operational expression of clinical_adoption decisions (adoption_kind = accept_prior_interpretation / reject_prior_interpretation / reinterpret_independently / view_only_no_adoption).
- **DL-21 + new DL-25 separation gets cleaner under v1 lens.** v1 §12.4 + §7.4 + §7.5 + §7.6 collectively name concrete primitives for the new DL-25 patient-graph; DL-21 retains tenant-boundary scope cleanly. F.3 decision D0THES-REV-009 has sharper basis to resolve.

#### Q2.v1 — What is worse than expected under v1 lens?

- **v1 may UNDER-CREDIT existing substrate in MORE places than F.2.0 originally found.** Q7 in F.2.0 was the first finding (thesis v0 §12.1 understates 1K.5.A). F.2.0.v1 surfaces 5 additional bidirectional feedback findings:
  1. v1 §7.3 care_commitment threshold may under-credit 1K.5.A Stage 1.5 emit_trigger semantics (`gating_negative` / `all_required_answered` / `module_complete` / `session_submitted`)
  2. v1 §7.5 clinical_adoption primitive may under-credit 1K.5.A's `recordClinicalAssertion` API + `provider_assessment.assertion_action` enum
  3. v1 §7.5 clinical_adoption may under-credit CNS ADR §2.17 Provider Clinical Context Packet doctrine
  4. v1 §7.6 governance plane may under-credit §1Z audit infrastructure (tamper-evident chain + observability + circuit breakers + reconciliation)
  5. v1 §12.8 AI capability governance may under-credit 1K.5.A narrative free-text intake three deterministic fan-outs (safety scan + AI extraction emitter + discrepancy detection)
- These are NOT failures of v1. v1 IS the doctrine-level articulation; existing substrate IS the operational implementation. The pattern is the same as Q7 finding: thesis names what substrate already does. **Tier 2 substantive feedback per Knox policy** → document + route to Phase G; do NOT patch v1 mid-audit.

#### Q3.v1 — What must be refreshed first under v1 lens?

Same priority order as v0-lens, plus 5 new Tier 2 findings added to Phase G work queue:

1. **Coherent Pattern §7 coherence operational test + §2.11-§2.16 cross-cutting disciplines** (v0-lens priority 1; v1-lens scope grows ~3x). v1 needs Coherent Pattern §2 cross-cutting disciplines expansion (was 10; v1 adds visible-provider deployment + boundary modes + artifact custody + substrate-vs-care boundary + anti-realself = 5+ additions).
2. **F.3 decisions still pending**: D0THES-REV-009 (DL-21 vs new DL-25 split — sharper recommendation now), D0THES-REV-010 (observation/assertion naming — directionally resolved by v1 §12.1), D0THES-REV-011 (ownership primitive scope — now refined by v1 §7.2 + §7.3), D0THES-REV-012 (brand contract minimums — now refined by v1 §6.5 + §6.6 + §7.5 + §7.6).
3. **Post-F.3 parallel sub-arcs** (v1-lens scope grows ~2x per artifact): §1Z amendments (4 new sub-sections vs original 3); DL-21 + new DL-25 (sharper spec); 1K.5.A amendment (4 cross-link notes vs original 1); CNS ADR §9 addendum (4 cross-references vs original 3).
4. **NEW Tier 2 findings routed to Phase G** (5 substantive bidirectional feedback findings; D0THES-REV-027 through D0THES-REV-031 to be added).

#### Q4.v1 — What valid decisions must not be lost under v1 lens?

**No change from v0-lens.** All 6 artifacts' `valid_decisions_to_preserve` lists hold under v1 lens. v1 ADDS to v0 (doesn't replace); v0 preserves; calibration findings stable.

#### Q5.v1 — What docs are dangerous if left authoritative under v1 lens?

**No change from v0-lens.** None in calibration set. All 6 are K1/K2/K3 with preserve dispositions. v1 lens doesn't change this.

Slight upgrade: DL-21 DRAFT status now has CLEARER promotion path under v1 lens (DL-25 split recommendation has concrete primitive set from v1 §7.4 + §12.4 + §7.5 + §7.6 to ground it).

#### Q6.v1 — What can safely wait under v1 lens?

**No change from v0-lens priority ordering.** Build OS still light verification. CNS ADR still sequenced after Coherent Pattern + §1Z + 1K.5.A. v1-lens scope growth (~2-3x per artifact) means total effort is higher but priority ordering holds.

#### Q7.v1 — What does the audit teach us about the thesis itself (under v1 lens)?

**This is the bidirectional feedback question for v1-lens refresh. 5 substantive findings (Tier 2 per Knox policy):**

1. **v1 §7.3 care_commitment threshold may under-credit 1K.5.A Stage 1.5 emit_trigger.** v1 names the threshold pattern; 1K.5.A operationalizes it via Stage 1.5 multi-question assertion-builder with explicit emit_trigger enum. **Routed to D0THES-REV-027.**

2. **v1 §7.5 clinical_adoption primitive may under-credit 1K.5.A's recordClinicalAssertion API + provider_assessment.assertion_action enum.** 1K.5.A's existing `assertion_action` enum (5 values: new_diagnosis / confirmation_of_prior / rejection_of_prior / refinement_of_prior / resolution_of_prior) IS the operational form of clinical_adoption.adoption_kind. **Routed to D0THES-REV-028.**

3. **v1 §7.5 clinical_adoption may under-credit CNS ADR §2.17 Provider Clinical Context Packet doctrine.** "AI summarizes/proposes; deterministic validates+flags+blocks; provider signs where clinical authority required" IS the substrate-level expression of clinical_adoption decisions. **Routed to D0THES-REV-029.**

4. **v1 §7.6 governance plane may under-credit §1Z audit infrastructure.** Tamper-evident audit chain + operational observability + circuit breakers + environment segregation + reconciliation jobs collectively form the substrate that "aggregate-by-default + patient-identifiable access only by named purpose + minimum-necessary + policy-scoped + logged + reviewable" runs on. **Routed to D0THES-REV-030.**

5. **v1 §12.8 AI capability governance may under-credit 1K.5.A narrative free-text intake three deterministic fan-outs.** Safety scan + AI extraction emitter + discrepancy detection collectively form the substrate that §12.8 capability_envelope discipline operates within. **Routed to D0THES-REV-031.**

**All 5 are Tier 2 substantive feedback per Knox three-tier policy.** Documented in §8.5 below + routed to Phase G as D0THES-REV-027..031. Do NOT trigger v1 completion pass #2. v1 NOT materially misleading; just under-credits existing substrate in named places. Phase G refresh resolves by EXPLICIT cross-link from v1 sections to substrate destinations.

**Threshold check (Tier 3)**: NONE of the 5 findings rise to "v1 materially misleading as F.2.2 audit lens." v1 is sharper than v0; v1 IS usable as F.2.2 audit lens; v1 under-credits existing substrate in places that get resolved by Phase G cross-link work, not v1 patching. **v1 confirmed usable.** F.2.2.A can proceed.

### §8.2 Per-Artifact Audit Rows — V1-Lens Delta

For each of the 6 calibration artifacts, the v1-lens delta sub-section captures what changed under v1 lens. **Original v0-lens findings in §2 are preserved verbatim.** Layered delta only.

#### Row 1.v1 — Coherent OMNI Architecture Pattern (v1-lens delta)

- **v1_lens_category**: STILL K2 (no category change)
- **v1_lens_disposition_changes**: memory=preserve / authority=keep_binding / refresh=amend — all unchanged
- **v1_specific_extensions** (amendment surface grows ~3x):
  - §3.5 strategic pressure-test (Henry Ford / Hims / RealSelf / Cursor differentiation) → add as Coherent Pattern preamble OR new §3 differentiation context section
  - §6.6 visible-provider deployment doctrine → add as Coherent Pattern §2.11 cross-cutting discipline
  - §7.1-§7.2 case/problem ownership + 6-role hierarchy → integrate with Coherent Pattern §3 composition rules (case ownership composes with three-layer substrate)
  - §7.3 care_commitment + 4-level framework → significantly extends Coherent Pattern §1 three-layer substrate; v1 adds preference + assignment + care_commitment + scoped ownership as orthogonal axes
  - §7.4 boundary modes + 7 orthogonal concepts → add as Coherent Pattern §2.12 cross-cutting discipline + integrate §3 composition rules
  - §7.5 artifact custody + clinical_adoption + category-level sharing → add as Coherent Pattern §2.13 cross-cutting discipline
  - §7.6 governance plane + 3-level meta-framework → add as new Coherent Pattern §4 framing section OR §0.5 preamble
  - §8.5 multi-actor deliberation → integrate with Coherent Pattern §3 composition rules
  - §12.6-§12.8 + §13.6 → add to Coherent Pattern §6 pointers + §2.14-§2.16 cross-cutting disciplines
- **v1_bidirectional_feedback**: NONE substantive. v1 adds; Coherent Pattern §2 expansion is mechanical (cross-cutting disciplines).
- **v1_classification_evidence**:
  - v1 §3.5 + §6.6 + §7.3-§7.6 + §13.6 all imply Coherent Pattern §2 cross-cutting discipline additions; v1 §16 explicitly mentions Coherent Pattern survival but doesn't NAME §2 as destination — addressed in Phase G refresh
  - Coherent Pattern §1 three-layer pattern still preserves; v1 §7.3 care_commitment is orthogonal axis to three-layer substrate (not contradiction)
  - Coherent Pattern §5 "this is NOT new doctrine" framing still holds
- **v1_recommended_action_delta**: Phase G.2 sub-arc effort grows ~3x (from ~3-4 hr to ~10-15 hr). Add: differentiation context preamble + §2.11-§2.16 cross-cutting disciplines (5+ additions) + new §4 three-level meta-framework + §7 coherence operational test (9 properties; was planned at 8; v1 adds #9 substrate-vs-care boundary)
- **v1_effort_estimate_delta**: ~3-4 hr → **~10-15 hr** (~3x growth)
- **v1_phase_g_subphase_assignment_delta**: STILL G.2

#### Row 2.v1 — Build OS layer model (v1-lens delta)

- **v1_lens_category**: STILL K1
- **v1_lens_disposition_changes**: all unchanged
- **v1_specific_extensions**: Layer 1 Truth Layer artifact list expands by v1 substrate primitive destinations:
  - DL-23 candidate (case-deliberation per §12.6)
  - DL-24 candidate (conversational intake per §12.3)
  - DL-25 candidate (patient-graph per §12.4 + §7.4 + §7.5)
  - DL-26 candidate (Integration Plane per §12.5)
  - DL-27 candidate (AI capability + model registry per §12.8)
  - Possibly DL-28/29/30 candidates per §7.3/§7.4/§7.6 (Phase G decides which collapse into existing DLs)
  - Reconciliation Map vN governed-stream artifact (Layer 5 Governance Cadence)
  - Thesis vN governed-stream artifact (Layer 5)
- **v1_bidirectional_feedback**: NONE substantive — Build OS layer model structurally orthogonal to thesis content; expanded artifact list is mechanical
- **v1_classification_evidence**:
  - v1 §16 explicitly preserves Build OS triplet untouched
  - Layer 1 Truth Layer purpose unchanged
  - 5 layer interaction rules (binding) unchanged
- **v1_recommended_action_delta**: minor — Layer 1 artifact list grows mechanically in G.3 verification; no rewrite
- **v1_effort_estimate_delta**: ~1 hr (unchanged)
- **v1_phase_g_subphase_assignment_delta**: STILL G.3

#### Row 3.v1 — DL-21 Federation DRAFT (v1-lens delta)

- **v1_lens_category**: STILL K3
- **v1_lens_disposition_changes**: pending_post_refresh resolves more clearly with v1's concrete primitive set
- **v1_specific_extensions for new DL-25 patient-graph**:
  - v1 §12.4 `care_relationship` + `shared_context_grant` (core primitives) — already in v0-lens scope
  - v1 §7.4 boundary modes (cross_brand_same_omni / cross_legal_entity_same_omni / external_partner_network / external_nonpartner_evidence_only / emergency_break_glass operate at patient-graph scope)
  - v1 §7.4 `care_team_graph` (per-patient-per-scope; composes with shared_context_grant for cross-org care teams)
  - v1 §7.5 artifact custody categories (cross-org artifact sharing operates within DL-25 patient-graph scope)
  - v1 §7.5 `clinical_adoption` (cross-org clinical_adoption decisions; Mayo onc adopts Henry Ford imaging interpretation explicit via adoption_kind enum)
  - v1 §7.6 governance plane (cross-org governance + audit + break-glass operates as governance plane functions; DL-25 cross-references)
- **v1_specific_extensions for DL-21 (stays tenant-boundary)**:
  - Explicit cross-link to DL-25 patient-graph scope in DL-21 invariant 4-7 (patient_continuity_policy + federation_permeability_policy at tenant-boundary; patient-graph upstream)
- **v1_bidirectional_feedback**: NONE substantive — DL-21 and new DL-25 work cleanly together under v1 framework; v1 doesn't under-credit DL-21 substrate
- **v1_classification_evidence**:
  - v1 §12.4 explicitly cross-references DL-21 federation as tenant-boundary substrate; patient-graph is upstream
  - v1 §7.4 boundary modes 3-7 operate at patient-graph scope; explicit composition with shared_context_grant
  - v1 §16 names DL-25 as candidate destination home
- **v1_recommended_action_delta**: SHARPER recommendation. DL-25 spec now has 8-10 substantive primitives (care_relationship + shared_context_grant + boundary modes + care_team_graph + artifact custody categories + clinical_adoption + governance plane composition) + 3-5 operational rules + clear DL-21-vs-DL-25 boundary
- **v1_effort_estimate_delta**: ~12-20 hr → **~15-25 hr** (~25% growth; more substrate to specify)
- **v1_phase_g_subphase_assignment_delta**: STILL G.2

#### Row 4.v1 — CNS ADR (v1-lens delta)

- **v1_lens_category**: STILL K2
- **v1_lens_disposition_changes**: all unchanged
- **v1_specific_extensions to Phase G addendum**:
  - §12.1 observation/extracted_assertion (already in v0-lens scope)
  - §10 #8 ownership resolution + #9 substrate-vs-care boundary (#8 in v0-lens; #9 NEW in v1)
  - §12.2 device/robot/external_system actor subtypes (already in v0-lens scope)
  - §6.5 brand architecture context (light; v1 adds visible-provider deployment via §6.6)
  - **NEW v1**: §7.3 care_commitment threshold IS CNS ADR §2.16 envelope's threshold — care_commitment is substrate-named version of authorized_action at scoped-ownership level
  - **NEW v1**: §7.5 clinical_adoption composes with §2.17 Provider Clinical Context Packet — adoption_kind enum operationalizes "AI summarizes/proposes; deterministic validates; provider signs"
  - **NEW v1**: §12.8 AI capability + model registry + capability_envelope (Knox substrate-vs-care boundary) — CNS ADR §2.14 AI-proposes-deterministic-validates-provider-signs sharpens with §12.8 + §10 #9
  - **NEW v1**: §7.6 governance plane composition with CNS ADR — governance plane uses CNS decisions + audit + invariant-monitoring; CNS ADR references but governance plane is not built INTO CNS ADR
- **v1_bidirectional_feedback** (Tier 2 substantive): **CNS ADR §2.17 Provider Clinical Context Packet IS the substrate-level operational form of v1 §7.5 clinical_adoption + §12.8 substrate-vs-care boundary.** v1 may under-credit CNS ADR substrate. **Routed to D0THES-REV-029** per Knox tier 2 policy. Do NOT patch v1.
- **v1_classification_evidence**:
  - CNS ADR §2.14-§2.20 all locked Round 3.5; v1 sections extend / address without contradicting
  - v1 §7.3 care_commitment maps onto CNS ADR §2.16 authorized_action with explicit scope semantics added
  - v1 §7.5 clinical_adoption maps onto CNS ADR §2.17 Provider Clinical Context Packet with explicit acceptance/rejection/reinterpretation semantics
- **v1_recommended_action_delta**: Phase G addendum scope ~2-3x larger. Add: §9.3 v1 §7.3 care_commitment cross-reference + §9.4 v1 §7.5 clinical_adoption cross-reference + §9.5 v1 §12.8 AI capability cross-reference + §9.6 v1 §7.6 governance plane cross-reference (in addition to v0-lens §9.1 observation/assertion + §9.2 ownership resolution + §12.2 actor extension)
- **v1_effort_estimate_delta**: ~2-3 hr → **~5-7 hr** (~2-3x growth)
- **v1_phase_g_subphase_assignment_delta**: STILL G.2 (sequenced after Coherent Pattern + §1Z + 1K.5.A per dependency)

#### Row 5.v1 — System map §1Z Universal CNS Event Envelope (v1-lens delta)

- **v1_lens_category**: STILL K2
- **v1_lens_disposition_changes**: all unchanged
- **v1_specific_extensions** (sub-section count grows from 3 to 7):
  - **v0-lens originals preserved**: §1Z.19 observation/extracted_assertion event_kinds + §1Z.20 device/robot/external_system actor_kinds + §1Z.21 coherence operational test cross-link
  - **NEW v1**: §1Z.22 v1 §12.8 capability_envelope composes with §1Z.3 taxonomy registry (ai_model_registry is registry-of-registries pattern; capability_envelope governs per-capability per-model per-version; substrate-vs-care boundary structurally enforced via §1Z.10 AI content validation + §1Z.14 producer authorization)
  - **NEW v1**: §1Z.23 v1 §7.4 boundary modes compose with §1Z.5 multi-tenant isolation (the 7 boundary modes ARE the operational policy envelopes for cross-tenant visibility + access; care_team_graph composes with §1Z.5 per-patient-per-scope visibility)
  - **NEW v1**: §1Z.24 v1 §7.5 clinical_adoption as new event_kind class (clinical_adoption events distinguished from Domain event + canonical state + orchestration_action per §1Z.2; care_commitment events likewise distinguished; both compose with §1Z 7-category partition without breaking it)
  - **NEW v1**: §1Z.25 v1 §7.6 governance plane uses §1Z audit infrastructure + tamper-evident audit chain (governance plane operates aggregate-by-default via projections over §1Z events; patient-identifiable access logged via §1Z.6 audit chain + §1Z.12 privileged-action elevated approval)
- **v1_bidirectional_feedback** (Tier 2 substantive): **v1 §7.6 governance plane's "aggregate-by-default + patient-identifiable access only by named purpose + logged + reviewable" is OPERATIONALIZED via §1Z audit infrastructure that already exists** (tamper-evident audit chain per §1Z.6 invariant 38 + observability per §1Z.11 invariant 27 + circuit breakers + per-tenant data residency D2 admitted-deferred + reconciliation jobs invariant 39 + privileged-action elevated approval invariant 37). v1 §7.6 under-credits §1Z substrate. **Routed to D0THES-REV-030** per Knox tier 2 policy.
- **v1_classification_evidence**:
  - §1Z 7-category partition preserves; v1 §7.3 care_commitment is the substrate-named threshold between Domain event (pre-accountable) and authorized_action (accountable)
  - §1Z.3 taxonomy registry IS where v1 §12.8 ai_model_registry composes
  - §1Z.5 multi-tenant isolation invariant 8 IS where v1 §7.4 boundary modes operate
  - §1Z.6 action authorization + audit chain IS where v1 §7.6 governance plane reads
  - §1Z.10 AI content validation IS where v1 §12.8 substrate-vs-care boundary structurally enforces
- **v1_recommended_action_delta**: §1Z amendments grow from 3 to 7 sub-sections (~2x growth). Add: §1Z.22 capability_envelope + §1Z.23 boundary modes + §1Z.24 clinical_adoption event_kind + §1Z.25 governance plane uses §1Z infrastructure (in addition to v0-lens §1Z.19 + §1Z.20 + §1Z.21)
- **v1_effort_estimate_delta**: ~6-8 hr → **~12-16 hr** (~2x growth)
- **v1_phase_g_subphase_assignment_delta**: STILL G.2

#### Row 6.v1 — System map §1K.5.A Clinical concept + assertion layer (v1-lens delta)

- **v1_lens_category**: STRONGER K1 finding. v1 has 4 more sections (§7.3 + §7.5 + §12.6 + §12.8) that all compose with 1K.5.A substrate at fine granularity. K2 secondary classification (naming reconciliation per Q7 absorption) preserves but now extends to multiple v1 sections.
- **v1_lens_disposition_changes**: STILL preserve / keep_binding / amend; but amend SCOPE grows substantively
- **v1_specific_extensions to 1K.5.A header cross-reference**:
  - **v0-lens original preserved**: header cross-reference for v0 §12.1 observation/extracted_assertion = 1K.5.A patient_clinical_assertions naming reconciliation
  - **NEW v1**: §7.3 care_commitment threshold IS 1K.5.A's commit boundary — patient_clinical_assertions transition from `unconfirmed` to `provider_confirmed` IS care_commitment activation event; care_commitment_event `activated` lifecycle aligned with 1K.5.A status transition
  - **NEW v1**: §7.5 clinical_adoption composes with 1K.5.A authority precedence — adoption_kind=accept_prior_interpretation maps to inheriting prior `provider_confirmed`; adoption_kind=reject_prior_interpretation maps to new `provider_rejected` superseding; adoption_kind=reinterpret_independently maps to new `provider_assessed` ignoring prior chain. 1K.5.A `recordClinicalAssertion` API IS operational interface for clinical_adoption decisions.
  - **NEW v1**: §12.6 case-deliberation primitives (consult_opinion) compose with 1K.5.A `authored_by=provider_assessed` + `clinical_visit_id` cross-link
  - **NEW v1**: §12.8 AI capability + model registry + substrate-vs-care boundary IS substrate that makes 1K.5.A's narrative free-text intake fan-outs governed (Stage 1 + Stage 1.5 + AI extraction emitter all run within capability_envelope; substrate-vs-care boundary structurally enforces `authored_by=ai_suggested` per 1K.5.A schema)
- **v1_bidirectional_feedback** (Tier 2 substantive; 3 separate findings — highest density of bidirectional feedback in calibration set):
  1. **v1 §7.3 care_commitment threshold may under-credit 1K.5.A Stage 1.5 emit_trigger** (`gating_negative` / `all_required_answered` / `module_complete` / `session_submitted` semantics). **Routed to D0THES-REV-027.**
  2. **v1 §7.5 clinical_adoption primitive may under-credit 1K.5.A `recordClinicalAssertion` API + `provider_assessment.assertion_action` enum** (new_diagnosis / confirmation_of_prior / rejection_of_prior / refinement_of_prior / resolution_of_prior — operational form of clinical_adoption.adoption_kind). **Routed to D0THES-REV-028.**
  3. **v1 §12.8 AI capability governance may under-credit 1K.5.A narrative free-text intake three deterministic fan-outs** (safety scan + AI extraction emitter + discrepancy detection — capability_envelope discipline operationalized). **Routed to D0THES-REV-031.**
- **v1_classification_evidence**:
  - 1K.5.A `recordClinicalAssertion` API + provider_assessment context envelope schema explicitly supports new_diagnosis / confirmation_of_prior / rejection_of_prior / refinement_of_prior / resolution_of_prior — IS clinical_adoption.adoption_kind operational form
  - 1K.5.A 9-value authored_by enum + authority_rank generated column IS substrate-level implementation of v1 §7.5 clinical_adoption + §12.8 substrate-vs-care boundary
  - 1K.5.A Stage 1.5 multi-question assertion-builder emit_trigger IS substrate-level care_commitment threshold
  - 1K.5.A narrative free-text intake three deterministic fan-outs IS substrate-level §12.8 capability_envelope operationalization
- **v1_recommended_action_delta**: header cross-reference grows from 1 to 4+ cross-link notes. Add: 1K.5.A header cross-references v1 §7.3 + §7.5 + §12.6 + §12.8 (each pointing to specific 1K.5.A substrate that operationalizes them).
- **v1_effort_estimate_delta**: ~3-4 hr → **~5-8 hr** (~2x growth)
- **v1_phase_g_subphase_assignment_delta**: STILL G.2 (sequenced after Coherent Pattern + §1Z per dependency)

### §8.3 Extended Thesis Content Gap Table — V1 Spawn + Completion-Pass Surfaces

Original §3 had 7 gap rows for v0 surfaces. V1 spawn + completion pass adds 13 more gap rows for new v1 surfaces needing destination homes.

| # | Content area | v0 / v1 spawn / v1 completion pass | Target doctrine home | Phase G sub-phase |
|---|---|---|---|---|
| 1-7 | (v0 originals; see §3) | v0 | (see §3) | (see §3) |
| 8 | §3.5 Strategic pressure-test (Henry Ford / Hims / RealSelf / Cursor) | v1 spawn | Coherent Pattern preamble OR new §3 differentiation context section | G.2 |
| 9 | §6.6 Visible-provider deployment doctrine | v1 spawn | Coherent Pattern §2.11 cross-cutting discipline | G.2 |
| 10 | §7.1 Case / problem ownership layer | v1 spawn | Extend v0 §7 coordination_case + Coherent Pattern §3 composition rules | G.2 |
| 11 | §7.2 Ownership role hierarchy (6 HUMAN-only roles) | v1 spawn | Extend DL-18 RBAC + Coherent Pattern §3 | G.2 |
| 12 | §7.3 care_commitment + 4-level framework | v1 completion pass | NEW DL-28 candidate (or extend CNS ADR §2.16 envelope + 1K.5.A header) | G.2 |
| 13 | §7.4 Boundary modes + care_team_graph | v1 completion pass | NEW DL-29 candidate (or extend DL-21 + DL-25) | G.2 |
| 14 | §7.5 Artifact custody + clinical_adoption | v1 completion pass | NEW DL-30 candidate (or extend 1K.5.A + DL-22 clinical media + DL-17 commerce) | G.2 |
| 15 | §7.6 OMNI Network Governance Plane | v1 completion pass | NEW DL or Tier 0 candidate; extend §1Z audit + DL-18 RBAC + Operating Contract governance | G.3 + G.4 |
| 16 | §8.5 Multi-actor deliberation as care mode | v1 spawn | Extend Coherent Pattern §3 composition rules + DL-20 care_coordination | G.2 |
| 17 | §12.6 Case-deliberation primitives | v1 spawn | NEW DL-23 candidate (case_question + evidence_bundle + consult_opinion + dissent_state + recommendation_packet + decision_owner) | G.2 |
| 18 | §12.7 Duplicate-therapy guardrail | v1 spawn | Extend 1K.5.A + DL-17 commerce + scheduling rule matrix | G.2 |
| 19 | §12.8 AI capability + model registry + substrate-vs-care boundary | v1 spawn | NEW DL-27 candidate; extend CNS ADR §2.15 + 1K.5.A narrative fan-outs | G.2 |
| 20 | §13.6 Anti-realself rule | v1 spawn | Coherent Pattern §2.16 cross-cutting discipline + business engine §13.5 | G.2 |

**Total Thesis Content Gap rows: 20** (was 7 in v0-lens calibration; +13 added under v1-lens refresh).

### §8.4 Aggregate Metrics — V1-Lens Refresh

**Knox category distribution under v1 lens**: NO CHANGES from v0-lens
- K1: 1 (Build OS) | K2: 3 (Coherent Pattern, CNS ADR, §1Z) | K3: 1 (DL-21) | K1+K2 hybrid: 1 (1K.5.A — now STRONGER K1 finding) | K4: 0 | K6: 0 | K7: 0 | K8: 0

**Memory disposition distribution**: NO CHANGES (5 preserve + 1 preserve_with_extracted_pointer)
**Authority disposition distribution**: NO CHANGES (5 keep_binding + 1 pending_post_refresh)
**Refresh action distribution**: NO CHANGES at row level (1 none + 1 partially_refresh + 4 amend); but refresh action SCOPE grew per row (~2-3x amendment surface)
**Confidence distribution**: NO CHANGES at row level (4 high + 2 medium); HIGHER overall confidence in calibration foundation because v1-lens didn't surface any K-category changes

**Estimated effort distribution (revised under v1 lens)**:
- S (small; ~1 hr): 1 row (Build OS — unchanged)
- M (medium; ~5-8 hr): 1 row (1K.5.A — was ~3-4 hr; v1-lens ~5-8 hr)
- L (large; ~10-15 hr): 2 rows (Coherent Pattern was ~3-4 hr → ~10-15 hr; CNS ADR was ~2-3 hr → ~5-7 hr is M; §1Z was ~6-8 hr → ~12-16 hr is L)
- XL (extra-large; ~15-25 hr): 1 row (DL-21 was ~12-20 hr → ~15-25 hr)
- (CNS ADR is M; counted separately)

**Total Phase G.2 + G.3 effort for these 6 artifacts at v1-lens**:
- v0-lens estimate: ~27-40 hours
- v1-lens estimate: **~50-75 hours** (~1.5-2x growth due to expanded amendment scope per artifact)

**Extrapolated total F.2.2 audit scope (~30-40 artifacts) at v1-lens**: ~200-350 hours = **5-9 weeks of focused work** (was 3-7 weeks at v0-lens estimate).

### §8.5 Bidirectional Thesis Feedback — Tier 2 Findings (Routed; Not Patching v1)

Per Knox three-tier policy, the following Tier 2 substantive bidirectional feedback findings are documented + routed to Phase G or v2 decision. **DO NOT patch v1 mid-audit.** If a finding rises to Tier 3 (v1 materially misleading), stop + ask Nick + Knox. None did.

| Finding | v1 section | Existing substrate under-credited | Route | Open Review Queue Row |
|---|---|---|---|---|
| 1 | §7.3 care_commitment threshold | 1K.5.A Stage 1.5 multi-question assertion-builder emit_trigger (`gating_negative` / `all_required_answered` / `module_complete` / `session_submitted`) | Phase G refresh: cross-link v1 §7.3 to 1K.5.A Stage 1.5 | D0THES-REV-027 |
| 2 | §7.5 clinical_adoption | 1K.5.A `recordClinicalAssertion` API + `provider_assessment.assertion_action` enum (new_diagnosis / confirmation_of_prior / rejection_of_prior / refinement_of_prior / resolution_of_prior) | Phase G refresh: cross-link v1 §7.5 to 1K.5.A recordClinicalAssertion + assertion_action enum | D0THES-REV-028 |
| 3 | §7.5 clinical_adoption | CNS ADR §2.17 Provider Clinical Context Packet doctrine (AI summarizes/proposes; deterministic validates+flags+blocks; provider signs) | Phase G refresh: CNS ADR addendum §9 cross-link v1 §7.5 to §2.17 | D0THES-REV-029 |
| 4 | §7.6 OMNI Network Governance Plane | §1Z audit infrastructure (tamper-evident audit chain §1Z.6 invariant 38 + operational observability §1Z.11 invariant 27 + circuit breakers + reconciliation jobs invariant 39 + privileged-action elevated approval invariant 37) | Phase G refresh: §1Z amendment §1Z.25 cross-link v1 §7.6 to §1Z audit infrastructure | D0THES-REV-030 |
| 5 | §12.8 AI capability governance | 1K.5.A narrative free-text intake three deterministic fan-outs (safety scan + AI extraction emitter + discrepancy detection) | Phase G refresh: 1K.5.A header cross-link v1 §12.8 to narrative fan-outs | D0THES-REV-031 |

**Pattern**: all 5 findings follow the Q7 pattern from F.2.0 (thesis names what substrate already does). Phase G refresh resolves by EXPLICIT cross-link from v1 sections to substrate destinations. **No v1 patching required.**

**Tier 3 threshold check**: NONE of the 5 findings rise to "v1 materially misleading as F.2.2 audit lens." v1 sections are sharper than v0; v1 sections under-credit existing substrate in named places that Phase G cross-link work resolves. v1 IS usable as F.2.2 audit lens. **F.2.2.A can proceed.**

### §8.6 Refined Phase G Sequencing Recommendation — V1-Lens

Same sequence as v0-lens but EFFORTS revised + 5 Tier 2 findings added to Phase G work queue:

1. **Coherent Pattern §7 + §2.11-§2.16 cross-cutting disciplines expansion** (~10-15 hr; was 3-4 hr at v0-lens; foundational; sequenced first within G.2)
2. **F.3 decisions** (Nick + Knox):
   - D0THES-REV-009 DL-21 vs new DL-25 split — RECOMMENDATION (sharper at v1 lens): new DL-25 with concrete §7.4 + §12.4 + §7.5 + §7.6 primitives; DL-21 stays as tenant-boundary
   - D0THES-REV-010 observation/assertion naming — DIRECTIONALLY RESOLVED by v1 §12.1 refinement
   - D0THES-REV-011 ownership primitive scope — REFINED by v1 §7.2 + §7.3; consulting_provider role + 6-role hierarchy locked
   - D0THES-REV-012 brand contract minimums — REFINED by v1 §6.5 + §6.6 + §7.5 + §7.6
3. **Post-F.3 parallel sub-arcs (v1-lens scope grows ~1.5-2x per artifact)**:
   - §1Z amendments (~12-16 hr; was 6-8 hr) — 4 new sub-sections (§1Z.19-§1Z.21 v0-lens + §1Z.22-§1Z.25 v1-lens) + bidirectional cross-link to v1 §7.6
   - DL-21 + new DL-25 (~15-25 hr; was 12-20 hr) — sharper recommendation with §7.4/§7.5/§7.6 primitives
   - 1K.5.A amendment (~5-8 hr; was 3-4 hr) — 4 cross-link notes for §7.3/§7.5/§12.6/§12.8 + 3 bidirectional Tier 2 finding resolutions
   - DL-16 amendment 43 actor_kinds extension + new DL-23/DL-25/DL-26/DL-27/DL-28/DL-29/DL-30 candidates per Phase G consolidation decision
4. **CNS ADR §9 addendum** (~5-7 hr; was 2-3 hr) — sequenced after Coherent Pattern + §1Z + 1K.5.A; covers §9.1-§9.6 (v0-lens §9.1-§9.3 + v1-lens §9.4-§9.6 for care_commitment/clinical_adoption/governance plane composition)
5. **Build OS layer model G.3 verification** (~1 hr; unchanged) — Layer 1 Truth Layer artifact list updated with v1 DL candidates

**Total estimated F.2.2 effort for these 6 artifacts at v1-lens**: ~50-75 hours.
**Total estimated F.2.2 audit scope (~30-40 artifacts) at v1-lens**: ~200-350 hours = **5-9 weeks of focused work**.

### §8.7 V1-Lens Refresh Self-Assessment

**All 6 calibration rows STABLE under v1 lens**:
- 0 K-category changes (still 1 K1 + 3 K2 + 1 K3 + 1 K1+K2 hybrid)
- 0 memory disposition changes
- 0 authority disposition changes
- 0 refresh_action changes at row level
- 6 amendment SCOPE growths per row (~2-3x larger amendment surface; effort estimates ~1.5-2x larger)
- 0 confidence changes at row level

**5 Tier 2 substantive bidirectional feedback findings** (Q7 pattern; thesis names what substrate already does):
- 3 findings on §1K.5.A (high density; §7.3 + §7.5 + §12.8 all under-credit existing 1K.5.A substrate at different granularity)
- 1 finding on CNS ADR §2.17 (§7.5 under-credits)
- 1 finding on §1Z audit infrastructure (§7.6 under-credits)
- ALL 5 routed to Phase G via D0THES-REV-027..031
- 0 v1 patching triggered (Knox three-tier policy: substantive feedback ≠ v1 patch; route to Phase G or v2)

**0 Tier 1 mechanical errata**: v1 confirmed mechanically clean post the T0-10 alignment fix Knox caught pre-commit at `d3d303d`. Re-checked at refresh: no broken cross-references, no wrong candidate counts, no inconsistent status language.

**0 Tier 3 materially-misleading findings**: v1 is sharper than v0; v1 is usable as F.2.2 audit lens; under-credits resolve at Phase G cross-link work. **v1 IS the operative audit lens for F.2.2.**

**Confidence in calibration foundation under v1 lens**: HIGH (v1-lens refresh confirmed v0-lens findings + added depth; bidirectional findings strengthen rather than weaken the audit method)

**Method validation**: refresh approach (preserve historical layer + layer v1-lens delta) worked cleanly. Schema integrity preserved. Knox three-tier policy held throughout. The "delta-led full refresh" structure produced more efficient analysis than fresh re-audit while surfacing more bidirectional feedback than the original calibration.

**F.2.2.A staged batch can proceed against refreshed v1 lens foundation with HIGH confidence.** Audit picks unchanged. Lens swap is the operative change. F.2.2.A begins with Charter + Protocol + Control Plane + AGENTS + system map §1F + §1G against v1-lens-refreshed foundation.

**Operating Contract §17 lifecycle state**: stays `F.2.2 in progress` (refresh is additive within F.2.2 staged-batch phase per §17 append rules). F.2.0.v1 refresh completion = pre-F.2.2.A inter-batch checkpoint. F.2.2.A begins next.

---

## §17 Operating Contract for the omni_doctrine_reconciliation_map_vN stream

Per Control Plane Enforcement Rule 7 (Governed Stream Artifact Operating Contract Rule), this Reconciliation Map vN stream requires an Operating Contract at creation. This §17 IS that contract. Applies to v1 (this artifact) and inherits to v2, v3, ... unless explicitly amended.

### Purpose / Scope

The Reconciliation Map vN stream is the audit output of Phase F.2 (calibration + full audit) of the OMNI Doctrine Refresh Arc. Each version contains:
- Executive Audit Verdict (synthesis of audit findings)
- Per-Artifact Audit Rows (one per canonical doc in scope)
- Thesis Content Gap Table (where new v0 content lands)
- Aggregate Metrics + Dependency Graph + Sequencing Recommendation
- Conflict Ledger Seed Rows (for K8 cases)
- Self-Assessment (mandatory in F.2.0; optional in F.2.2)

v1 is F.2.0 calibration (6 rows + supporting analysis). v1 will grow through F.2.2 full audit additions (additional rows + sections expanded). Upon F.3 review-gate approval + Phase G start, v1 becomes the operative reconciliation map for Phase G refresh work.

### What belongs

- Audit rows per the schema in `~/.cursor/plans/omni_doctrine_refresh_23fb24b1.plan.md` F.2 section (Knox category + memory_disposition + authority_disposition + refresh_action + confidence_level + classification_evidence + valid_decisions_to_preserve + dependencies + sub-phase assignment)
- Thesis content gap rows (per the schema in plan)
- Executive Audit Verdict (7 mandatory synthesis questions + Additional Findings sub-section)
- Aggregate Metrics + Dependency Graph + Sequencing Recommendation
- Conflict Ledger Seed Rows for K8 cases
- Self-Assessment (F.2.0 mandatory; F.2.2 batches optional but encouraged)
- Calibration marker (F.2.0 explicit) + version status

### What does NOT belong

- Doctrine rewrites (Phase G is the repair phase; F.2 classifies and sequences only)
- Binding doctrine claims (this artifact is `derived_nonbinding`; classifications inform Phase G but don't bind doctrine)
- Implementation specs (those route to Phase G sub-arc plans)
- Decision records (route to `03_decision_extraction_ledger.md` per Protocol)
- Evidence detail (route to `07_evidence_ingestion_ledger.md` when ledger active)
- Operational continuity content (route to `HANDOFF_*.md` artifacts)
- Future work payloads (route to `future_work_registry.md`)
- Narrative bodies (route to evolution narrative volumes when produced)

### Entry / Update Format

Each version is a separate file at `.cursor/plans/omni_doctrine_reconciliation_map_vN_YYYY-MM-DD.md` (this file is v1 at 2026-05-25). File uses document passport at top + section structure of v1 as template. F.2.0 calibration content (this v1) becomes the v1 "seed"; F.2.2 batches APPEND rows to existing sections + EXTEND Executive Verdict scoped to each batch. Calibration marker removed when F.2.1 approves and F.2.2 begins.

### Lifecycle States

- `F.2.0 calibration`: 6 rows + self-assessment + calibration marker; pending F.2.1 review gate (current state of this v1)
- `F.2.1 approved`: calibration approved; calibration marker removed; F.2.2 batches begin appending
- `F.2.2 in progress`: full audit batches accumulate; per-batch executive verdicts append; aggregate metrics update
- `F.2.2 complete`: all ~30-40 canonical artifacts audited; master Executive Audit Verdict synthesizes; ready for F.3 review gate
- `F.3 approved`: Reconciliation Map approved; Phase G refresh begins per sequencing recommendation
- `superseded_by_phase_g`: Phase G refresh outputs at canonical destinations supersede this map's classifications; map preserved as historical evidence

### Append / Update / Close Rules

- v1 is **immutable once superseded by v2.** Refinements within v1 active lifecycle (F.2.0 → F.2.1 approved → F.2.2 in progress → F.2.2 complete → F.3 approved → superseded_by_phase_g) land as in-place edits.
- Calibration marker (`F.2.0 CALIBRATION — 6 ROWS — PENDING NICK + KNOX APPROVAL FOR F.2.2 FULL EXECUTION`) MUST be present in §0 calibration posture until F.2.1 approves.
- Adding new audit rows in F.2.2 batches is additive; existing rows immutable once F.2.1 has approved them.
- Refining the Executive Audit Verdict per batch is allowed within F.2.2; each batch's verdict appends to a master verdict at F.2.2 close.
- Conflict Ledger Seed Rows for K8 cases MUST be added when discovered during F.2.2 batches; cannot be deferred.

### Authority Boundary

This artifact is `derived_nonbinding`. It informs Phase G refresh decisions but DOES NOT bind doctrine. Classifications, dispositions, refresh actions are recommendations to be ratified at F.3 review gate. Phase G work is authorized by F.3 approval, not by this artifact directly.

The artifact CANNOT be cited as binding authority for any doctrine, system map, DL, Tier 0 guardrail, Charter, Protocol, Control Plane, or Build OS claim. Citations must route to canonical destinations.

The artifact CAN be cited as evidence for: (a) "this is what the audit found about artifact X"; (b) "this is the recommended Phase G sequencing"; (c) "this is the recommended F.3 decision on open review row Y."

### Catalog / Read-Graph Impact

Each Reconciliation Map vN must register a row in `01_master_corpus_catalog.md` (NACR per Protocol §5). Each vN must have a read-graph route in `04_manifest_read_graph.md` Tier 2 Cross-Cutting Consult Artifacts section (initial route `consult_if_routed`).

For v1 (this artifact): catalog row + read-graph route registered in same pass as F.2.0 closure commit.

### Stop-Report Proof Requirement

Per Protocol §9, when this artifact is created, updated through F.2.2 batches, or superseded, the stop report MUST include:

- `governed_stream_artifact_touched: omni_doctrine_reconciliation_map_vN`
- `operating_contract_applied: §17 of v1 (inheriting)`
- `version_state: F.2.0 calibration | F.2.1 approved | F.2.2 in progress | F.2.2 complete | F.3 approved | superseded_by_phase_g`
- `calibration_marker_present: yes | no (removed at F.2.1 approval)`
- `audit_rows_count: <integer>` (6 at F.2.0; grows through F.2.2)
- `thesis_gap_rows_count: <integer>` (7 at F.2.0; grows through F.2.2)
- `k8_conflict_seed_rows_count: <integer>` (0 at F.2.0)
- `catalog_row: registered | updated`
- `read_graph_route: registered | updated`

---

## §22 Calibration version log

This artifact is v1. Calibration produced 2026-05-25 ~17:00 UTC.

v1 calibration scope:
- F.2.0 Calibration Batch (6 rows + executive verdict + thesis gap table + aggregate metrics + sequencing recommendation + self-assessment)
- Calibration marker present
- Pending F.2.1 review gate approval before F.2.2 begins

Operating Contract §17 governs lifecycle from F.2.0 → F.2.1 → F.2.2 → F.3 → superseded_by_phase_g.

If F.2.1 surfaces schema problems or scope problems, v1 calibration may be re-run as v1.1 (in-place refinement) before F.2.2 begins. If F.2.1 requires fundamentally different approach, v2 (new file) spawns.

Next agent: this artifact is the F.2.0 calibration output. Wait for F.2.1 (Nick + Knox calibration review) approval before any F.2.2 audit work proceeds. v1 status: `F.2.0 calibration; pending F.2.1`.

---

### F.2.0.v1 Calibration Refresh entry (2026-05-25 same-day)

Post v1 spawn + completion pass (commit `d3d303d`), Nick + Knox initiated F.2.0.v1 calibration refresh to re-audit the same 6 artifacts against v1 lens (v1 added 13 new sections including §3.5 + §6.6 + §7.1-§7.6 + §8.5 + §12.6-§12.8 + §13.6 that didn't exist when F.2.0 calibration ran against v0 lens).

**Refresh scope** (locked from plan approval): full re-audit of same 6 artifacts against v1 lens; preserve v0-lens findings as historical layer (§§0-7); layer v1-lens findings (§8); per Knox three-tier policy (mechanical errata = fix; substantive feedback = document + route to Phase G or v2; materially misleading = stop + ask).

**Refresh outcome**:
- 0 Tier 1 mechanical errata
- 5 Tier 2 substantive bidirectional findings (routed to Phase G via D0THES-REV-027..031; v1 NOT patched per Knox policy)
- 0 Tier 3 materially-misleading findings
- All 6 calibration rows STABLE under v1 lens (0 K-category changes; 0 disposition changes; amendment SCOPE grew ~1.5-2x per row)
- v1 CONFIRMED usable as F.2.2 audit lens

**Operational state**: F.2.0.v1 refresh complete; F.2.2.A staged batch begins next against refreshed v1 lens foundation.

If F.2.2 batches surface schema problems, refresh may re-run as v1.1 (in-place); otherwise this volume grows through F.2.2 per Operating Contract §17 append rules. v2 (new file) spawns only if Phase G refresh materially changes the operational role of the Reconciliation Map vN stream.
