# CNS / Orchestration — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for the coordination layer)
Authority: `canonical` for CNS scope architecture + orchestration physics
Status: `draft_for_ratification` (created 2026-05-31, Foundation vNext; domain pass #4; Nick + Knox review gate)
Domain(s): `cns_orchestration`, `longitudinal_intelligence`, `coordination`
Lifecycle role: the TERRITORY for the **Coordination layer** — how CNS scopes coordinate candidates → owning-domain commits across all domains, without becoming a mega-brain or committing domain truth.
Source-of-truth relationship: distilled per `foundation_vnext_reconciliation.plan.md` §1.5 from the FULL CNS arc (embedded FAC §1.5 below). **Controlling: thesis v2 §7.6 (CNS scope architecture) + §3.7 (4-layer care OS) + §7.8 (cross-operator coordination)** as the governing scope model; **DL-14 (CNS center of gravity) + DL-16 (universal envelope) + `cns_action_orchestration_adr_2026-05-17.md`** as the LOCKED orchestration-physics spine; recovered **LI doctrine + pressure-test corpus** as the coherence-layer/signal-ladder evidence (limited-use); §B WP-EXEC-001 trace-lineage runtime as build-state evidence. Method per `00_architecture_artifact_index.md`.
Supersedes: scattered CNS framing (DL-14 single-center language refined by §7.6 scoping; CNS ADR + LI doctrine remain spine/evidence)
Superseded by: none
Manifest action: `add_tier1` · Review gate: `user_knox_required`

---

## §1.5 Freshest-Authority Check (embedded)

CNS is the deepest/most central domain → FAC before draft. Layers + disposition:

| Layer | Source | Disposition |
|---|---|---|
| **Governing scope model (L3 lens)** | thesis v2 **§7.6** (3-scope CNS) + **§3.7** (4-layer care OS, Coordination=Layer 3) + **§7.8** (cross-operator coordination) | clean-into-contract as the SCOPE MODEL |
| **Orchestration physics (LOCKED spine)** | **DL-14** (CNS center of gravity) + **DL-16** (universal envelope/action/projection) + `cns_action_orchestration_adr_2026-05-17.md` | controlling for candidate→resolver→commit, orchestration_run/action, cns_decision, envelope |
| **Coherence-layer intelligence (recovered evidence/limited-use)** | LI doctrine + 4-file pressure-test corpus (`REV-148` §A) | feeds Patient-CNS coherence + signal-authority-ladder; **re-verify vs Tier-0 + v2 before authority** (`D0W3C-GRD-001`: LI informs/ranks/suppresses/escalates, never commits) |
| **Build-state evidence** | §B WP-EXEC-001 `trace_lineage` runtime (branch-ahead, `REV-148`/`CNF-011`) | informs the trace/audit invariant (§11); recover as a bounded BUILD task, NOT in this contract |
| **Rules/templates** | system map §1Q + `cns_taxonomy_reconciliation.md` (20-surface × 7-category) | folded as coordination substrate; full rules/templates may be its own sub-pass (`REV-149`) |

**§7.6-vs-DL-14 reconciliation (resolved, confirmed from text):** v2 §7.6 is a **scoping REFINEMENT over DL-14, not a demolition** (§7.6 line 2423: *"the §3.7 4-layer architecture is unchanged — all operator CNS instances sit at Layer 3"*). **DL-14's CNS = Operator-level (execution) CNS**; v2 ADDS Coherence-level (Patient CNS) + Meta-level (Network Governance Plane). No conflict → no stop-and-surface. **The current canonical CNS scope model has exactly three enterprise scope categories** (verified against thesis §7.6/§3.7 + LI doctrine). **New CNS scope categories require explicit doctrine promotion** (per the §4 designed-family-expands-by-doctrine-pass discipline / `D0THES-GRD-003`); **workflows/modules do NOT become new CNS scopes by default** (anti-sprawl, §4 inv 4).

## §1 Purpose

CNS is the **Coordination layer (§3.7 Layer 3)**: it turns source events into candidates, routes them through resolver/policy/authority, and drives **owning-domain commits** — coordinating across every domain (D3/D5/Identity/intake/messaging/D7/commerce) **without owning their truth or becoming a single mega-brain.**

## §2 Governing thesis concepts

*"Workstreams have operators. Patients have coherence. Networks have governance."* (§7.6) · candidate ≠ commit (DL-14/DL-16) · AI proposes / humans commit (§12.8) · projection ≠ authority · CNS is scoped, not omniscient.

## §3 The CNS scope model (THE core — current canonical model = 3 enterprise scope categories; new categories require explicit doctrine promotion, not drift)

| Scope category | Action discipline | Instances |
|---|---|---|
| **Operator-level CNS** | **EXECUTES** within scope; drives candidates/resolver/orchestration-actions; commits ONLY via its owning domains | 4 peer types: **Brand CNS** (CULTURED/NAKED/partner) · **OMNI Core Capability CNS** (Labs/Store/Diagnostics/Navigation/Vaccines/Support/…) · **OMNI Specialty Line CNS** (HRT/Nephrology/Weight/…) · **Partner Operator CNS** (Henry Ford/Mayo/Quest/pharmacy) |
| **Coherence-level CNS** | **OBSERVES + SIGNALS**; never operates/commits care | **OMNI Patient CNS** (cross-context patient coherence; one logical instance per patient) |
| **Meta-level CNS** | **OBSERVES + ENFORCES** policy; never delivers care | **Network Governance Plane** (rules/safety/audit/model-registry/consent-specificity/model_version_of_record/boundary-modes/break-glass; one per deployment + network-wide) |

All sit at §3.7 **Layer 3 (Coordination CNS)**. **Operator CNS depth VARIES** (commerce-only lightweight → clinical Specialty-Line full depth; §7.6): "CNS = scoped coordination responsibility, not equal clinical depth."

**These are scopes of authority/coordination — NOT independent sovereign brains.** (binding framing)

## §4 Anti-collapse invariants (binding — the enterprise-safety rules)

1. **Operator-CNS** executes only within its operator scope; **cannot commit truth outside authorized owning-domain commits** (D5/D6/D7/Identity/etc. own their truth).
2. **Patient-CNS** observes + signals + coheres; **NEVER operates a workstream or commits care/commerce/messaging/appointment/documentation truth.** (Anti-invisible-doctor: it may surface "dose review may be appropriate"; it may NOT say "lower to 125mcg" — only a clinical operator/provider commits under authority. This is the Alec/wearable line, `REV-142`.)
3. **Network Governance Plane** observes + enforces; **NEVER becomes a care operator/provider.** Aggregate-by-default; patient-identifiable access only by named purpose (support/safety/audit/break-glass/grant/oversight).
4. **No CNS-to-CNS chatter / no mini-brain sprawl.** Scopes interact ONLY through substrate (§5). Domains (messaging/intake/charting/scheduling) are substrate primitives + domain contracts coordinated via the universal flow — **NOT** separate CNS scopes.
5. **No scope collapse** — Operator can't bypass coherence/consent/governance/owning-domain-commit; Coherence can't operate; Meta can't deliver care.

## §5 How scopes interact (substrate-mediated — the mechanism, not vibes)

Cross-scope interaction is ONLY via: **substrate events (DL-16 universal envelope)** carrying the **7 per-event ownership dimensions** (§7.5.1: operator_of_record / clinical_owner / commerce_owner / care_coordination_owner / artifact_custodian / source_authority / surface+channel_of_record) + **`trace_lineage`** (§11), resolved by the **universal CNS flow** (§10: candidate → resolver/policy → **owning-domain commit**). There is **no direct CNS-to-CNS call.** Patient-CNS "signals" = emits non-authoritative candidates/alerts; the relevant operator-CNS consumes and its owning domain commits.

## §6 CNS over the domain contracts (the keystone relationship)

CNS is the **coordination layer OVER** the owning-domain contracts — it does not duplicate or own their truth:
- D3 Scheduling (appointment), D5 Service Occurrence (actualized work), Identity (who/what), + pending Intake / Messaging / D7 Documents / D6 Commerce.
- The operator CNS routes candidates to these domains; **each domain commits its own truth** (D5 commits occurrences, D6 commerce, Identity resolution, etc.).
- "Messaging CNS / Intake CNS / Charting CNS" (operator-internal workflow surfaces) = the **Messaging / Intake / D7 domain contracts**, coordinated by the operator CNS via the universal flow — **not** sovereign sub-CNS brains.

## §7 Cross-operator coordination (§7.8 — the inter-practice-efficiency answer)

- **Default = passive coherence:** `care_coordination_owner` = OMNI Patient CNS. Observes across operators; signals gaps/conflicts/missing-follow-ups/duplicate-therapy (§12.7). Does NOT close loops.
- **Elective = active coordination:** `care_coordination_owner` = explicit operator (OMNI Navigation Core-Capability / brand coordinator / partner / patient-self). Closes loops, reconciles conflicts, schedules cross-domain follow-ups — within its operator scope + consent + boundary policy (§7.4) + `shared_context_grant`/`care_relationship` (§12.5). Inter-practice efficiency WITHOUT a cross-practice mega-brain or privacy violation.

## §8 Patient-CNS coherence + LI signal-authority-ladder (recovered LI doctrine; limited-use evidence)

Patient-CNS coherence is informed by the LI **signal-authority-ladder** (LI doctrine §6): raw signal (context only, never clinical truth) → normalized observation → trend/interpretation → CNS candidate → provider/policy review → committed action OR no-op. Consent/permission/identity-confidence gate candidate influence (LI §5: no permission → no candidate influence). **LI informs/ranks/suppresses/escalates candidate quality; it never commits** (`D0W3C-GRD-001`). This is the home of the longitudinal-signal → governed-care-opportunity future (`REV-142`, `omni_field_cases` FIELD-001). *(LI doctrine is recovered evidence/limited-use — re-verify vs Tier-0 + v2 before treating any LI claim as binding.)*

## §9 Canonical objects (DL-14/16/ADR physics + §7.6 scopes)

`orchestration_run` (multi-step journey) · `orchestration_action` (single emitted intent) · `cns_decision` (first-class decision record: triggers/context-snapshot/rule+model versions/alternatives/reason) · `candidate` (proposal; not commit) · `resolver` (deterministic policy) · `context_packet` (composed temporary context; non-canonical — see §9.1) · universal envelope (DL-16) · `trace_lineage` (§11) · scope entities: operator-CNS / Patient-CNS / Network-Governance-Plane.

### §9.1 Layered-context-packet evidence-authority rule (Nick + Knox 2026-05-31; cross-domain — D7/Observation/Clinical Memory/CNS)

CNS consumes **authority-labeled, provenance-preserving layered context packets — NOT undifferentiated raw blobs, and NOT over-compressed flattened summaries.** A packet *references* (does not copy) the underlying objects and preserves their authority: raw `media_artifact` ref (D7) · structured `observation` ids + ingestion-verification state · `extracted_assertion`/assertion ids + `source_authority` + `clinical_adoption_state` · relevant source metadata (dates/specimen/performing-facility/operator-practice) · model_version/extraction lineage where AI-parsed · a context snapshot/hash for audit-replay. (Field names are the contract's to interpret — not a locked list.)

**Authority-by-action-class (do not collapse):** CNS MAY use **lower-authority** evidence (unverified extraction, unadopted observation, patient language, raw artifact present) for **routing / prioritization / suppression / review-candidate** generation (workflow, not care truth). CNS MUST require the **appropriate authority** for **clinical action** (care change / Rx / dose / diagnosis / patient-facing medical instruction): provider adoption (Clinical Memory) / owning-domain commit / explicit policy gate. *"AI says pathology suggests X"* ≠ sufficient; *"provider adopted finding X"* is the threshold (§7.5.3 + Clinical Memory §8.3–§8.5). **Do not duplicate raw artifacts into CNS records** — reference + snapshot only the decision-relevant context (`trace_lineage`, §11). This preserves the **layered accountability** chain `D7 artifact → Observation (+verification) → Clinical Memory assertion (+adoption) → care_commitment/action` without flattening or unsafe blob-dumping.

## §10 The universal CNS flow (DL-14/16; invariant)

`source_event → media_artifact → observation → extraction (AI/rule; model_version+capability_envelope pinned §12.8) → extracted_assertion (candidate) → patient/clinician review (HUMAN; substrate-vs-care boundary) → committed assertion → context_packet update → candidate (prescribe/message/schedule/escalate/coordinate) → policy_resolver → authorized_action (HUMAN-committed; owning-domain) → execution → output → evidence_record → feedback`. CNS is invariant; modalities (form/lab/wearable/voice/message/etc.) are interchangeable at the boundary. **AI participates at extraction/candidate (non-authoritative); humans + owning domains commit.**

## §11 trace_lineage / audit invariant (incorporates §B build-state)

Every cross-scope/orchestration action carries **`trace_lineage`: `source_event_id → candidate_id → resolver_id → commit_id` (+ state_change / projection refs)** threaded through events/intake/messages/outbound/rules (the §B WP-EXEC-001 runtime). Plus `cns_decision` (DL-16 inv 30) appendable-not-mutable audit. This makes "which signal, which model_version, which resolver, which human commit produced this action?" always answerable. *(§B runtime code recovery is a bounded BUILD task, not this contract — `REV-148`.)*

## §12 Vocabulary lock (frozen)

3 scope categories (Operator-level / Coherence-level / Meta-level) · 4 operator-CNS types (Brand / OMNI Core Capability / OMNI Specialty Line / Partner Operator) · OMNI Patient CNS · Network Governance Plane · `orchestration_run` / `orchestration_action` / `cns_decision` / `candidate` / `resolver` / `context_packet` / `trace_lineage`. Thesis reconciles TO these; no rename without Nick + Knox.

## §13 Disposition table

| Prior decision / primitive | Disposition | Note |
|---|---|---|
| DL-14 CNS center of gravity | **preserve, refined to Operator-level CNS** | §7.6 layering, not demolition |
| DL-16 universal envelope/action/projection | **preserve (spine)** | §9/§10 |
| CNS ADR (orchestration_run/action/cns_decision) | **preserve (spine)** | §9 |
| thesis §7.6 3-scope model + 4 operator types + depth-varies + 3-action discipline | **clean-into-contract** | §3/§4 |
| thesis §7.8 cross-operator coordination | **clean-into-contract** | §7 |
| LI doctrine (signal-ladder, coherence, consent gates) | **preserve as Patient-CNS coherence; evidence/limited-use** | §8; re-verify |
| §B WP-EXEC-001 trace_lineage runtime | **inform invariant (§11); recover as build task** | not contract |
| "Messaging/Intake/Charting CNS" as sub-brains | **reject** — not in thesis; = domain contracts coordinated by operator CNS | §6 (avoid mini-brain sprawl) |
| "inter-practice CNS" as 4th scope | **reject** — = Patient-CNS coherence + §7.8 care_coordination_owner | §7 |

## §14 Seams

- Inbound to CNS: every domain emits source_events/candidates (D3 `appointment.checked_in`→`SC-D3-D5-001`; messaging escalation; intake submission; lab/Rx events).
- CNS → owning domains: `orchestration_action` (candidate) → owning-domain commit (D5/D6/D7/Identity/etc.).
- CNS → Messaging (outbound), CNS → Provider Task, CNS → Network Governance (audit/enforce). Seam contracts authored as those domains pass.

## §15 Open items (→ `08`)

- `REV-149` rules/templates §1Q scope — folded as coordination substrate here; confirm whether it warrants its own domain contract.
- `REV-148` §B trace_lineage runtime recovery (build task) + remaining parking-branch reconciliation.
- LI doctrine re-verification vs current Tier-0 + thesis v2 (evidence → limited-use authority) before any LI claim binds.
- `REV-141` full care_commitment substrate + `REV-142` Alec longitudinal loop both run THROUGH CNS (Patient-CNS signals → operator commit).

## §16 Evidence sources

thesis v2 §7.6 / §3.7 / §7.8 / §12.8 / §9.1 · DL-14 + DL-16 (system map) · `cns_action_orchestration_adr_2026-05-17.md` · recovered LI doctrine + 4-file pressure-test corpus · `cns_taxonomy_reconciliation.md` · rule-matrix `03_6_cns_orchestration_core.md` · §B WP-EXEC-001 trace-lineage runtime (d753a64).
