# OMNI Enterprise Posture (ratified 2026-06-03)

Document type: `doctrine` (decision-record style; boot-visible; the north star v3 authoring reads through)
Authority: `governance_binding` enterprise-posture frame. Binds the POSTURE + the v3 re-grounding scope; does NOT author schemas/thesis prose (those land in v3 + contracts).
Status: `ratified` 2026-06-03 (Nick + Knox via trifecta; Opus authored). Decision of record: `D0THES-DEC-035`.
Domain(s): architecture_governance, federation, rbac, identity, ai_substrate, cns_orchestration
Lifecycle role: extends `ai_substrate_frame_2026-06-03.md` (AI axis) with the broader enterprise posture (care-substrate-primary + trust axis). The lens every v3 / contract-retrofit edit reads through.
Source-of-truth relationship: framing authority only. Thesis = P0; contracts = P1; etc. This says WHAT OMNI is and HOW its axes relate; it authors no schema.
Supersedes: the implicit "fortress / OMNI-Direct-as-center / Federation-as-operator-only" reading (see `05_supersession_conflict_ledger.md` `D0THES-CNF-014`).
Superseded by: none.
Manifest action: add_tier0 (boot-visible). Review gate: user_knox_required — SATISFIED 2026-06-03.

agent_read_rule: tier0_mandatory

---

## Read this first

Output of two pressure tests (`audits/2026-06-03_outward_omni_agentic_interop_pressure_test.md` + `audits/2026-06-03_federation_universal_trust_topology_pressure_test.md`) run after the spring-2026 AI corpus surfaced an enterprise-posture question. Resolves the fork "care substrate (a) vs trust network (b)" as **(c)**.

## The ratified posture (preserve verbatim)

> OMNI is a **governed care + business substrate** whose defining property is that **identity, authority, consent, context, proof, and commit move coherently across every actor (human, operator, non-human / agent) and every rail (UI, API, MCP, A2A, voice, external assistant) — without flattening ownership.** Owned care operations are the **economic + trust origination engine**; outward governed interoperability is the **architectural posture**. The moat is **care-governance semantics**, not the commodity trust / agent / protocol plumbing it rides on.

## The (c) resolution (why not a or b)

- **(a) pure care-substrate** under-weights the trust dimension → drifts back to the fortress.
- **(b) "OMNI is fundamentally a trust network"** is dangerous: god-domain (Federation absorbing Identity/RBAC/consent/AI) + commodity (generic "trust topology" = IAM/zero-trust, the `D0THES-GRD-028` trap one level up; a contentless trust network is a low-margin utility / "Plaid for healthcare" where care=seed, network=business — NOT this company).
- **(c)** Trust/authority/permeability is a **first-class cross-cutting AXIS** — the same shape as the AI axis (`D0THES-DEC-034`). The system ALREADY decomposed it (RBAC §5 four-way composition + `T0-13`): **Identity = who (+ represented principal) · Federation = cross-boundary topology/permeability · RBAC = capability/attestation/consent-gate (+ delegated_authority_envelope) · D7 = consent record · CNS-Meta = enforcement · owning domain = commit.** No domain "is" the trust axis. **Federation owns the topology layer of it — bounded, not the company.**
  - **Correction (Knox 2026-06-05):** an earlier draft of this line read "AI #12 = non-human authority envelope" — that is WRONG and is superseded. **AI #12 owns the AI/model/capability registry + lineage + `capability_envelope` (what a model/tool may technically/policy-wise do) — NOT non-human authority.** **Non-human *delegated authority*** (for AI agents, external systems, robots, devices, rails, processors — AI is one subtype, not the universal model) is itself decomposed across **Identity (who + represented principal) + RBAC (`delegated_authority_envelope` + capability + attestation) + Federation (cross-boundary) + D7 (consent)** — never owned by AI #12. Assigning non-human authority to AI #12 would recreate the god-domain problem one level over (`GRD-031` pattern). `delegated_authority_envelope` (what an actor/agent may do for a principal under scope/purpose/TTL/revocation/escalation) ≠ `capability_envelope` (what a model/tool may do) — distinct primitives.

## Binding statements (what is ratified)

1. OMNI is a governed care + business substrate. Care **is the business**; the trust axis is the **differentiator**.
2. **Trust/authority/permeability is a first-class cross-cutting axis** (named as a plane in v3).
3. **AI is a first-class cross-cutting axis** (`D0THES-DEC-034`).
4. **Federation owns the topology layer of the trust axis. Federation is NOT the trust axis and NOT a god-domain** (`D0THES-GRD-031`).
5. **OMNI Direct is architecturally one rail among many** (UI / brand app / partner portal / provider workspace / external assistant / API / MCP / voice).
6. **OMNI Direct (and owned care) is NOT economically demoted** — architectural ≠ economic center; owned surfaces remain the primary demand + trust + revenue origination engine (`D0THES-GRD-032`).
7. The moat is **care-governance semantics** (clinical authority, consent specificity, longitudinal coherence, `care_commitment`, operator-boundary meaning, candidate→commit), not commodity plumbing — which OMNI **consumes** behind its governed boundary.
8. **Trust is relocated, not eliminated** — every outward rail names its trust-transfer (who logs / who can be compelled / who monetizes metadata) and governs metadata, not just payload (`D0THES-GRD-030`).

## Caution (binding tone discipline)

"Governed handshake layer" is a useful **descriptive facet, NOT the identity.** Handshake connotes exchange/broker/route; OMNI is context + authority + ownership + proof + commit. Do not let the metaphor optimize the company toward thin brokering. (`D0THES-GRD-032`.)

## Governed Capability Exchange (operational capstone — `D0THES-DEC-036`)

The operational mechanism of the posture (NOT a new pivot — the *how* of binding statement #1): the universal pattern by which OMNI safely emits to and ingests from any actor/system — **internal and external** — through ONE governed spine:

`actor / represented-principal → capability contract → Identity → Federation boundary → RBAC capability → delegated authority → context packet → consent/grant → CNS orchestration → owning-domain commit → audit/proof → returned artifact/status (classified as evidence | observation | proposed-meaning | externally_committed_truth — committed in the source system, NOT OMNI-committed — BEFORE it counts)`

- **Two faces, one spine:** internal (D7→Observation→Clinical Memory; D5→D6→BIZOPS; Settings→D3) and external (OMNI ↔ lab / Rx / insurance / payroll / supplier / marketplace / external EMR / portal / scheduling agent / partner operator). External adds **trust-transfer + metadata-custody** risk (`D0THES-GRD-030`); the governance spine is identical.
- **Subfamilies:** clinical (labs/Rx/imaging/EMR/portals) · administrative (insurance/prior-auth/billing/claims) · **operator / business-ops** (payroll/HR/time-clock/credentialing/schedule-out) · commerce/supply (inventory/supplier/catalog/marketplace feeds) · communication (Twilio/email/external assistants).
- **Each domain owns: canonical truth + internal projection + external projection + ingestion pathway + action capability + audit/proof.** Projections are exchangeable; external systems are rails/processors/counterparties, **never source-of-truth owners** (anti-corruption layer — PayChex executes payroll; BIZOPS still owns labor truth).

### Keeper doctrine lines (preserve verbatim — future-us must KNOW)
> *"OMNI is rail-agnostic, protocol-agile, vendor-replaceable, and semantics-stable. MCP / A2A / API / FHIR / EDI / portals / browser-and-voice agents / future protocols are replaceable adapters. OMNI owns the capability contract, authority envelope, context packet, trust-transfer record, domain-commit boundary, and audit/proof."* (`D0THES-GRD-033`)

> *"Governed Capability Exchange is how OMNI breathes across the outside world. OMNI is NOT measured by number of integrations; it is measured by whether every exchange preserves identity, authority, consent, context, ownership, commit, and proof. Bounded, designed surface — expanded by doctrine pass, never connect-everything."* (`D0THES-GRD-034`)

Pattern lineage (Lens B — borrowed, not invented): ports-and-adapters / hexagonal architecture + anti-corruption layer (DDD) + stable-semantics-vs-unstable-mechanisms + capability-based security + read-model projections. OMNI's differentiator = applying them with **care-governance semantics as the stable core**; the moat stays care-governance, not exchange breadth.

## The 9 guardrails (constrain v3)

1. Co-primary, not substrate-only (owned care leads GTM; anti platform-with-no-users).
2. Designed bounded capability surface (`D0THES-GRD-003` extension; anti unfalsifiable "shake hands with everything").
3. Architect-outward-now / expose-when-demand (full agent/federation mesh = 2028-2032+).
4. Preserve-and-diff (v3 carries v2 core verbatim + explicit diff; anti recency-erasure `D0THES-GRD-022/023`).
5. Stabilize after v3 (the two pressure tests did their job; no third pre-v3 pass; no reflexive v4).
6. **Trust-transfer & metadata governance** (`D0THES-GRD-030`).
7. **Federation-not-god-domain / trust-is-a-decomposed-axis** (`D0THES-GRD-031`); **architectural≠economic center + metaphor≠identity** (`D0THES-GRD-032`).
8. **Rail-agnostic / protocol-agile / vendor-replaceable / semantics-stable** (`D0THES-GRD-033`) — never bind the architecture to one protocol/vendor/model/agent-framework.
9. **Governed Capability Exchange is bounded, not connect-everything; measured by preservation (authority/context/ownership/commit/proof), not integration count** (`D0THES-GRD-034`).

## v3 authoring contract (Knox instruction, binding)

v3 = **re-ground**, not rewrite. Required method: **explicit v2→v3 diff** (what's preserved verbatim / sharpened / added / superseded), section by section. Promote a **Trust/Boundary axis to a first-class plane** + absorb the AI axis + care-substrate-primary framing. Contracts largely survive (substrate truth vindicated). Supersession `D0THES-SUP-003`.

## Sequence (post-ratification)
Phase 3 lossless source-anchored AI extraction (no cap + coverage audit) → Phase 4 author v3 (diff-disciplined) → Phase 5 route residual + sequence contract retrofits (Federation non-human-actor/delegated-grant/agent-boundary → RBAC delegated-authority → Identity non-human actor → AI #12 capability/model/tool registry → CNS control plane → context-packet exchange → Agentic-Runtime surfaces).

## Cross-references
Decisions `D0THES-DEC-035` (posture) + `D0THES-DEC-036` (Governed Capability Exchange capstone); supersession `D0THES-CNF-014`; guardrails `D0THES-GRD-030/031/032/033/034`; AI frame `ai_substrate_frame_2026-06-03.md` (`D0THES-DEC-034`); pressure tests `audits/2026-06-03_*`; concept inventory `ai_substrate_routing_spine_REV-176.md` + `ingestion/ai_substrate_2026/inventory/` (tracked, non-blocking-but-not-optional); thesis touchpoints §1/§2/§3/§6.7/§7.6/§7.8/§9/§12.8; narrative `docs/architecture/evolution_narrative_volume_5_2026-06-03.md` (addendum).
