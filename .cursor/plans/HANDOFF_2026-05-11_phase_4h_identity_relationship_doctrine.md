# HANDOFF — Phase 4H identity / relationship doctrine (DL-10)

**Date:** 2026-05-11 evening
**Status:** CLOSED. DL-10 arc complete. Doc-only; no migration; no application code. The seven binding doctrine docs preserve the full nuance of the conversation that surfaced after c2 shipped (chat rendering) about how OMNI identifies one human across multiple brand / clinic / practice relationships within a deployment and across future deployments / mergers.

**Provenance:** triggered by c2 chat rendering shipping earlier on 2026-05-11 PM (commit `8f02bc0`), which surfaced "what about Brand B?" as the next architectural question. The user (with ChatGPT cross-checking) named the Mindbody analogy as the right shape; this arc bound the substrate response.

---

## Why this handoff exists

The c2 chat rendering arc shipped a real `messages` substrate consumer. Messaging is the most visible place where front-end UX collides with backend ownership (brand boundaries, legal entity boundaries, consent scope, clinical chart access, identity matching, multi-deployment shapes). The substrate already had primitive #5 (Patient identity) built and primitive #19 (Continuity Relationship) reserved, but the doctrine had **not yet bound** how OMNI handles the Mindbody-style "one consumer identity, N business relationships" pattern that the wedge clinic strategy (multi-brand expansion: Cultured women's HRT, Make men's HRT/GLP-1, dermatology medspa) explicitly requires.

The two extremes both fail: Epic-style enterprise-wide auto-share (Extreme 1) is clinically and legally wrong for non-hospital outpatient; hard silos per brand (Extreme 2) loses identity reuse, duplicate detection, merger support, consumer-marketplace strategy, and gaming detection. The winning middle is **shared identity substrate, separate operational relationships** — the same pattern Mindbody uses for cross-business consumer experience.

The user was explicit: "if this is foundational, which it seems like it is, let's adjust the system map or doctrine if needed. We are not stashing all these foundational ideas away in random documents and checkpoints." DL-10 is the binding answer; this handoff closes the arc.

---

## What landed (binding doctrine — full six-doc cycle)

### MAIN system map ([`.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md))

- **Doctrine lock DL-10 — Consumer identity vs operational patient-relationship scoping.** Binding paragraphs covering the principle, the identity-namespace clause, the reusable-identity / scoped-operational split, the 11-dimension relationship boundary list, the admission guardrail, the two-extremes anti-pattern rejection, additional rejected anti-patterns, the $500M-state non-foreclosure clause (mirrors DL-6), and the messaging-implication clause.
- **Section 1J intro amendment.** "Single canonical `patients` row per person" now scopes to "within an OMNI identity namespace, initially a deployment / org PHI boundary." Multiple operational relationships per identity within the namespace are `patient_relationship` rows, not parallel `patients` rows. Cross-namespace matching is explicit federation / linking, not automatic shared rows.
- **Section 1U.3 amendment.** `brand_id` graduates from marketing-only to operational/clinical boundary when the brand owns distinct **consents, care programs, messaging context, memberships, clinical context, or staff access**. At graduation, the canonical mechanism is `patient_relationship`-scoping, not `brand_id` on every operational table. Anti-pattern: hardcoding `brand_id` as the only relationship boundary (radar zone 36).

### Foundational doc ([`.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md`](FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md))

- **Primitive #19 formalized as `patient_relationship`**. Expanded description covers the 11-dimension generalized scoping, the relationship-boundary admission guardrail, what the primitive owns (consents, intake, memberships, appointments, care_programs, messages thread context, clinical chart context, care team, communication endpoint, lifecycle status), and the relationship-vs-identity distinction. Status flipped from RESERVED to **LANDED (doctrine via DL-10); substrate migration future**.
- **New §7.13 — Consumer identity vs operational patient-relationship scoping (binding sub-doctrine)** (~280 lines). Subsections:
  - §7.13.0 Binding sentence (verbatim mirror of DL-10 lead)
  - §7.13.1 Why this matters: Mindbody analogy vs Epic contrast
  - §7.13.2 The four-layer object model (external contact identity → `patients` consumer identity → `patient_relationship` → care context)
  - §7.13.3 What's reusable vs scoped (binding split with concrete field lists)
  - §7.13.4 The relationship-boundary admission guardrail (binding test for promotion)
  - §7.13.5 The 8 deployment shapes DL-10 admits (non-foreclosure)
  - §7.13.6 Worked example: same human across Cultured + Make + dermatology medspa
  - §7.13.7 Worked example: Twilio main-line text from unknown number
  - §7.13.8 Worked example: post-merger duplicate linking
  - §7.13.9 Anti-patterns explicitly forbidden by DL-10
  - §7.13.10 What §7.13 does NOT specify (deferred)
  - §7.13.11 Cross-references
- **§3 dimensional matrix** identity-scope row updated with binding response per DL-10 + §7.13.
- **§11.0 crosswalk** added DL-10 row (LANDED 2026-05-11 evening; substrate migration future).

### ADR ([`docs/architecture/phase_4h_target_first_decision_record.md`](../../docs/architecture/phase_4h_target_first_decision_record.md))

- **§7.13 — Consumer identity vs operational patient-relationship scoping (DL-10)**. Decision / Context / Rationale / Alternatives considered (Mapping A, Mapping C, brand-hardcoded primitive, hard silos, global auto-share, federation-now — each with rejection rationale) / Consequences (what changes for c2 / c3 / c4 / external-line preflight / provider mirror / future federation) / What DL-10 explicitly does NOT decide / Cross-links to all binding docs.

### Radar ([`docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md))

- **2026-05-11 evening addendum** with four new zones:
  - **Zone 34** Identity-collapse drift (tier 1) — treating `patient_id` as global cross-relationship identity in contexts that should be relationship-scoped
  - **Zone 35** Cross-relationship auto-share drift / Extreme 1 (tier 1) — operational state silently propagating across relationships on identity-claim match
  - **Zone 36** Brand-hardcoded relationship primitive (tier 2) — features that assume brand is the only relationship boundary
  - **Zone 37** Hard-silo / no-shared-identity drift / Extreme 2 (tier 1) — minting separate `patients` rows per brand for the same human within a namespace

### Topology doc ([`docs/architecture/communications_topology.md`](../../docs/architecture/communications_topology.md))

- **§11 update** — four conceptual layers now have explicit DL-10 substrate-doctrine mapping. External-line ingress sequence (binding per DL-10) for Twilio main-line / inbound call / fax / lead-form events: contact identity → identity-claim match → resolve-or-create `patient_relationship` → operational state. Never route Twilio main-line directly into `messages` without going through the sequence.
- **§9 build status table** — added row for `patient_relationship` (substrate-build future); updated action items row to record c4's DL-10 obligation to decide per action-item type whether it's identity-scoped or relationship-scoped.

### Evolution narrative ([`docs/architecture/evolution_narrative.md`](../../docs/architecture/evolution_narrative.md))

- **New Act XI: Chat rendering + the identity-relationship doctrine (May 11, afternoon and evening)** (~5 paragraphs). Captures: c2 shipping → the substrate-reality audit catch → DL-10 arc trigger → Mindbody analogy resolution → six-doc cycle close. Names this as the seventh doc-cycle of the doctrine arc; six-doc-cycle convention now has multiple instances across the project.

### Closing handoff (this file, NEW)

- Captures what landed, what was rejected, mode-shift status, open watch zones, cross-doctrine implications, recommended next session entry point.

---

## What was rejected (decisions captured for future-self)

The following alternatives were considered and explicitly rejected during the arc. Each is preserved here so future contributors who encounter the same temptation see the rejection rationale.

- **Mapping A: redefine `patients` as the per-brand relationship row + add new `person_identity` layer above it.** Rejected: every existing `patient_id` reference across the substrate (timeline, audit, messages, outbound_jobs, care_programs, treatment_items, clinical_visits, lab_orders, refill_requests, commerce_orders, patient_inbox_messages, identity verification, duplicate detection, documents, audit/read logs, portal access, commerce) would become ambiguous. Weeks of doctrine drift for marginal conceptual purity. The current spine treats `patients.id` as the universal handle (per primitive #5 + Section 1J + Section 1U); redefining it now is unjustified churn.
- **Mapping C: completely new top-level layer (`person` table) + new `patient_relationship` + deprecate `patients`.** Rejected for the same reasons as Mapping A, amplified.
- **Naming the primitive `patient_brand_relationship` instead of `patient_relationship`.** Rejected: brand is one of 11 possible scoping dimensions. Hardcoding "brand" forecloses clinic / practice_entity / location / specialty / external-partner / endpoint scoping. Radar zone 36 watches for this.
- **Hard silos per brand: mint separate `patients` rows per brand.** Rejected: loses duplicate detection, merger support, consumer-marketplace strategy, cross-brand risk / gaming detection, Mindbody-style convenience. Radar zone 37 watches.
- **Global-auto-share-everywhere (Epic-enterprise interpretation).** Rejected: works for hospital systems where one legal entity governs all care; wrong for OMNI's outpatient multi-brand context. Clinically dangerous, legally untenable. Radar zone 35 watches.
- **Build cross-deployment federation now.** Rejected as out-of-scope: DL-10 admits federation via the identity-namespace abstraction (non-foreclosure); actual federation mechanism is future work.
- **Auto-promoting every boundary dimension to a relationship.** Rejected via the admission guardrail (§7.13.4): a dimension becomes a relationship boundary **only when it owns distinct operational state**. Endpoint, care team, location are *possible* boundaries; they are not *automatic* boundaries.

---

## Open watch zones (radar)

The v1 pressure-test radar now carries 37 zones total. Zones active to watch as the next phase opens:

- Zone 7 (legacy v0 notification survival) — closed structurally with c9.
- Zone 27 (sibling-discriminant leak / case-as-parent-ontology drift) — actively forming.
- Zone 28 (care-task substrate fragmentation / metadata jsonb leakage) — c2 partially pressure-tested; c4 closes via action-item recon.
- Zone 29 (specialty-acquisition-table proliferation drift) — surfaces at first specialty activation beyond wedge.
- Zone 30 (§6.6 staleness) — surfaces at first sibling activation touching a non-listed specialty.
- Zone 31 (Day 0 depth-bar drift) — surfaces at next sibling activation.
- Zone 32 (owned-vs-external diagnostic conflation) — surfaces at first diagnostic / procedural workflow activation.
- Zone 33 (primitive numbering drift recurrence) — surfaces at any future doctrine-tier amendment citing primitives by number.
- **Zone 34** (identity-collapse drift, tier 1) — actively monitorable; c4 is the first surface.
- **Zone 35** (cross-relationship auto-share drift / Extreme 1, tier 1) — surfaces at first identity-level rule that wants to fan out across relationships.
- **Zone 36** (brand-hardcoded relationship primitive, tier 2) — surfaces at the `patient_relationship` substrate migration.
- **Zone 37** (hard-silo / no-shared-identity drift / Extreme 2, tier 1) — surfaces at any future brand activation or cross-deployment merger.

---

## Cross-doctrine implications

What DL-10 changes for in-flight and future work:

### c2 chat rendering (already shipped as `8f02bc0`)

No change. c2's `(patient_id, care_program_id)`-scoped `messages` is consistent with DL-10 because today each brand is 1:1 with one care program. The substrate is relationship-equivalent for the wedge clinic today; future migrations may add `patient_relationship_id` to operational tables when the substrate landing happens.

### c3 inbox UI (next likely commit)

No change. `patient_inbox_messages` reads on identity-scoped data which is fine. UI lands cleanly.

### c4 (`patient_action_items` substrate build)

**Substantive change.** The c4 preflight must explicitly decide per action-item type whether it's identity-scoped or relationship-scoped. Likely answer: **both** depending on type. For example: `provider_message` is relationship-scoped (different relationships have different provider message threads); `identity_verification_required` is identity-scoped (verification status is global per `patients`); `payment_required` may be relationship-scoped (different brands have different billing). The c4 preflight must enumerate and decide per action-item-type. Watch radar zone 34 (identity-collapse).

### External-line preflight (future)

**Substantive change.** Must start from the external contact identity layer (per topology doc §11 + DL-10 layer 1), do identity-claim matching against `patients` rows in the namespace, then resolve or create a `patient_relationship` (with explicit consent + audit per DL-10) before any operational state writes. Watch radar zones 35 + 37.

### Provider mirror parallel track

**Substantive change.** Queue surfaces (My Queue, clinical inbox, lab review drawer) consuming the per-staff `last_read_message_id` pointer must be **relationship-aware** when listing patients. A provider sees the patients within the relationships their role grants access to, not all patients across all brand relationships in the deployment.

### Future brand activation (e.g., a second brand launches on the deployment)

**Substantive change.** Activation MUST reuse existing `patients` rows for identity-claim-matched humans and create a new `patient_relationship` row, not mint parallel patient rows. Watch radar zone 37.

### Future cross-deployment merger

**Substantive change.** Cross-namespace identity matching must surface candidates for explicit linking / merging; never silently collapse. Watch DL-10's "cross-relationship linking is explicit, permissioned, consent-aware, audited" clause.

---

## Substrate migration sketch (NOT in this commit; named for the future)

When the `patient_relationship` table lands (likely concurrent with external-line preflight or first multi-brand activation), the migration must include:

1. `patient_relationship` table:
   - `id` UUID PK
   - `patient_id` UUID FK to `patients(id)` (within the namespace)
   - `org_id` UUID (primitives discipline)
   - `brand_id` UUID NULL (when brand is the relationship boundary)
   - `practice_entity_id` UUID NULL (when practice_entity is the boundary; admits future)
   - `location_id` UUID NULL (when location is the boundary; admits future)
   - `relationship_kind` text (admits the 11 dimensions: brand / clinic / practice_entity / location / specialty / legal_entity / parent_org / deployment / referral_partner / care_team / endpoint)
   - `status` text CHECK (active / disengaged / lost_to_followup / churned / transferred / merged)
   - `metadata` jsonb (forward-compat)
   - `created_at`, `updated_at`, `effective_at`
2. Backfill: one `patient_relationship` row per existing `patients` row, scoped to the current brand (today each patient has exactly one brand context).
3. Add `patient_relationship_id` FK to operational tables (`care_programs`, `consents`, `memberships`, `messages` — staged migrations).
4. Update RLS predicates to admit relationship-scope filtering.
5. Migrate the `messages.metadata.interaction_context` shape (per §1Q.23) to carry `patient_relationship_id` explicitly.

That migration is **future work**, NOT this commit. This commit binds doctrine; substrate retrofits to doctrine on its own schedule when the first sibling activation drives it.

---

## Recommended next session entry point

Three candidates, ordered by what closes the largest gap relative to the now-bound DL-10:

1. **c3 — `/inbox` UI for `patient_inbox_messages`.** Smallest scope; closes the c1 substrate's UI gap. Doesn't engage DL-10 substantively (`patient_inbox_messages` is identity-scoped substrate); good warm-up after a doctrine-heavy day.

2. **c4 (re-scoped per DL-10) — `patient_action_items` substrate build.** Larger scope; engages DL-10 directly (per-action-item-type identity-vs-relationship scoping decision). The TODO comment in [`lib/messages/postPatientMessage.ts`](../../lib/messages/postPatientMessage.ts) becomes a real action-item resolution call inside the `post_patient_message` SECURITY DEFINER orchestrator. Watch radar zone 34.

3. **External-line preflight.** The Klara/RingCentral substrate foundation. Engages DL-10 in the deepest way (the four-layer model with the external contact identity layer at the top; identity-claim matching against namespace; relationship resolution). This is the architecturally heaviest of the three but it's where DL-10's substrate value most concretely lands. Watch radar zones 35 + 37.

If decision-paralysis sets in: **c3** is the smallest, lowest-risk continuation. **External-line preflight** is the most architecturally significant — the right place to spend doctrine-arc capital next.

---

## Where to look first when picking up

The doctrine on identity / relationship scoping is now spread across the six binding docs + this handoff. To rebuild context cold, read in this order:

1. **MAIN Doctrine lock DL-10** ([`.cursor/plans/system_map_three_layers_60706286.plan.md`](system_map_three_layers_60706286.plan.md), section between DL-9 and Section 1D). The binding architecture in seven binding paragraphs.
2. **MAIN §1J intro amendment** + **§1U.3 amendment** (same file). The two existing sections that DL-10 reconciles with.
3. **Foundational doc §7.13** ([`.cursor/plans/FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md`](FOUNDATIONAL_ARCHITECTURE_2026-05-10_all_dimensions.md)). The long-form rationale + Mindbody analogy + four-layer model + 8-scenario matrix + worked examples.
4. **Foundational doc primitive #19** (same file, §4 line 216). The formalized `patient_relationship` primitive.
5. **ADR §7.13** ([`docs/architecture/phase_4h_target_first_decision_record.md`](../../docs/architecture/phase_4h_target_first_decision_record.md)). The decision rationale + alternatives considered + consequences.
6. **Radar zones 34-37** ([`docs/architecture/v1_pressure_test_radar.md`](../../docs/architecture/v1_pressure_test_radar.md)). What to watch as the next phase opens.
7. **Topology doc §11** ([`docs/architecture/communications_topology.md`](../../docs/architecture/communications_topology.md)). The external-line architectural spine; rides DL-10.
8. **Evolution narrative Act XI** ([`docs/architecture/evolution_narrative.md`](../../docs/architecture/evolution_narrative.md)). The story; reads as continuous narrative from Act X (doctrine reconciliation) into Act XI (chat rendering + identity-relationship doctrine).

---

## Files NOT touched in this commit

- Application code (`lib/`, `app/`, `components/`, `repo/`, `supabase/migrations/`) — all unchanged. c2's chat substrate stays as shipped.
- `docs/architecture/operational_objects_under_patient.md` — already aligns with DL-10's identity / relationship layering; no edits needed in this arc.
- The c1 in-app inbox preflight + c2 chat rendering preflight + c2 handoff — all historical records of in-flight work; no edits needed.

---

## Unresolved questions / deliberate open items

These are intentionally open and will be answered when concrete pressure surfaces:

- **Exact `patient_relationship` schema.** Sketched in §7.13.10 + this handoff "substrate migration sketch"; concrete migration happens when first sibling activation drives it.
- **Identity-confidence scoring for cross-namespace matching.** Future federation architecture.
- **Cross-namespace merger UI + audit shape.** Future product work.
- **Consumer-marketplace portal surface design.** Future product work.
- **External contact-identity primitive concrete schema.** Lives in the external-line preflight architecture (future preflight per topology doc §11).
- **Migration order for operational tables to add `patient_relationship_id`.** Staged migrations; order TBD when first activation drives.
- **CI lint candidates** (radar zones 34-37 enforcement): could later add lint scripts that scan for `patient_brand_relationship` substrings (zone 36 enforcement), or for raw `patients` row creation outside the identity-claim-matching path (zone 37 enforcement). Out of current scope.

---

## Recommended next session entry point — summary

When you (or future contributor) returns:

1. Read this handoff first.
2. Pick from the three recommended next-build candidates (c3 / c4-rescoped / external-line preflight) or override with a different priority.
3. If picking c4 or external-line: read DL-10 + foundational doc §7.13 first (the binding doctrine; ~30 minutes).
4. Write a preflight using the established c1/c2 pattern (single A4-ish page; scope, attributes, watch zones, parity proof, radar zone activations).
5. Write a checkpoint handoff after the commit lands.

The doctrine is bound. The next commit composes against DL-10 + DL-1..DL-9 + Section 1W, not against an implicit substrate.

---

*End of handoff. This closes the Phase 4H identity / relationship doctrine arc. The platform substrate now structurally answers the Mindbody-style "one consumer identity, N operational relationships" question across MAIN + foundational doc + ADR + radar + topology + evolution narrative + this handoff. Future amendments add to MAIN doctrine locks first; foundational doc updates with rationale second; ADR captures decision; radar tracks risk; topology + narrative + handoff close the cycle. Seven-doc preservation cycle for the DL-10 arc.*