# Identity / Patient / Contact / Actor — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain)
Authority: `canonical` for the Identity domain (who/what is acted on + linking)
Status: `draft_for_ratification` (created 2026-05-30, Foundation vNext; domain pass #2; Nick + Knox review gate) · **legacy-scatter backfill done 2026-06-01** (grepped legacy map outside DL-10/§1J.10: added L0–L4 assurance ladder + `patient_identity_verifications` + field/source precedence §4; DL-10 handle-vs-person + `contact_identity_handles` §4/§7-inv9; `jurisdiction_of_care` §4/§7-inv10/`REV-166`; §1J.9 break-glass → RBAC)
Domain(s): `identity`, `patient`, `contact`, `actor`
Lifecycle role: the TERRITORY for Identity — the objects/relationships/resolution that everything downstream (CNS, messaging, intake, scheduling, commerce, care) references
Source-of-truth relationship: distilled per `foundation_vnext_reconciliation.plan.md` §1.5 from evidence — **DL-10** (system map §1J + DL-10 lock) is the freshest controlling authority; `HANDOFF_2026-05-11_phase_4h_identity_relationship_doctrine.md` + FOUNDATIONAL §7.13 (four-layer model) + primitives #5/#19/#1 + thesis v2 §7.5.3/§7.2/§12.2/§11/§7.4 + radar zones 34-37 + guardrail `D0W3B-GRD-001`. Method/boundaries per `00_architecture_artifact_index.md`.
Supersedes: identity content scattered across DL-10 / §1J / FOUNDATIONAL §7.13 / primitive #19 (as build-facing artifact; those become evidence/starting-corpus)
Superseded by: none
Manifest action: `add_tier1` (Identity domain contract; pending catalog row + read-graph route)
Review gate: `user_knox_required`

---

## §1.5 reconciliation note (per plan)

- **Freshest authority:** DL-10 (2026-05-11) — hard-won, recent, **not** on a multi-round superseding arc → no Freshest-Authority Check required (unlike DL-20).
- **Thesis v2 reconciliation:** v2 **adds** (does not bulldoze): patient-source / `source_authority=patient` (§7.5.3), patient-is-ultimate-authority (§7.2), device/robot/external_system actor subtypes (§12.2), identity ladder v0→v3 (§11), care_team_graph (§7.4), per-event ownership riding on identity (§7.5.1). No thesis↔substrate conflict → no stop-and-surface.
- **Scope (Nick-ratified):** land the **owned-single-deployment (ladder v0)** identity spine now; mark cross-namespace / cross-org (`care_relationship`, `shared_context_grant`, patient-as-MPI, federation) **OPEN/deferred** to ladder v2/v3 (substrate-hooked via the identity-namespace abstraction, product-deferred).

## §1 Purpose

Identity owns **who or what is being acted on, and how one human's identity relates to many operational relationships** — the layer every other domain references. It implements the DL-10 doctrine: **reusable identity, separate operational relationships.**

## §2 Governing thesis concepts (lens)

Patient-source ≠ operator (§7.5.3); patient is ultimate authority over who treats them (§7.2); only humans occupy care-ownership roles — device/robot/external_system are actors but not owners (§7.2/§12.2); identity portability expands by explicit ladder pass, not drift (§11).

**Build depth bar (Lens B; registry + thesis §3.5):** the *actual build* follows the **Mindbody-analogy = the RIGHT shape** (reusable identity + per-relationship scoped operational state) and explicitly **rejects the Epic-enterprise-everywhere = WRONG shape** (global auto-share on identity match). Consumer-marketplace / Mindbody-style cross-clinic discovery is deferred (ladder v2/v3). This is the build-facing comparator for Identity.

## §3 Ownership boundary

**Owns:** `contact_identity`, `patient` (consumer identity), `patient_relationship`, `actor`, identity namespaces, identity-resolution/merge/linking.
**Does NOT own:** clinical / commerce / messaging-content / care truth (those reference identity and attach operational state to `patient_relationship`); care-team *membership derivation* (CNS/care-coordination computes it; identity holds the relationship + actor primitives it reads).

## §4 Canonical objects (the DL-10 four-layer model + actor)

| Object | One-line |
|---|---|
| `contact_identity` | **pre-account / unknown inbound** layer (Twilio main-line, unknown number, lead form, fax) — exists before/without a `patient`; resolved → patient via explicit identity-claim match. **Handle-vs-person discipline (DL-10 extension):** a phone/email is a **handle, not always one person** (family / assistant / spouse / shared office line / reused number / typo / fraud-substituted). `phone_e164` normalized+indexed; future `contact_identity_handles` admits phone/email/WhatsApp/social handles **without JSONB stuffing**; **ambiguous-handle / shared-handle / typo states are first-class** (matching is high-confidence, never blind) |
| `patient` (consumer identity) | **reusable identity-claim layer** — one canonical row per person **within an identity namespace** (deployment / org PHI boundary). Holds: legal name, DOB, phone, email, portal login, **identity-verification status (L0–L4 assurance ladder, §1J.1-1J.9) + field/source precedence**, duplicate/merge candidates, demographics, **declared `jurisdiction_of_care` (or verified-address child) — single canonical field for eligibility gates, never ship-to/billing/IP mixing (legacy line 107)**, global prefs (where legally appropriate) |
| `patient_identity_verifications` (§1J.1-1J.9) | identity-assurance substrate — graduated **L0–L4** verification levels + match-confidence + the audited evidence behind verification status |
| `patient_relationship` (primitive #19) | **scoped operational relationship** — owns consents, intake, memberships/packages, appointments, care_programs, messaging thread context, clinical chart context, assigned care team, communication endpoint, relationship prefs, lifecycle status (active / disengaged / lost-to-follow-up / churned / transferred / merged) |
| `actor` (primitive #1 + DL-16 amд 43 4-tuple) | who/what performed an action — `staff` / `staff_with_ai_assist` / `provider` / `patient` / `system` + **`device` / `robot` / `external_system`** subtypes (thesis §12.2). Only humans may occupy §7.2 care-ownership roles |
| `identity_resolution` | identity-claim match + merge/link (contact→patient; duplicate dedupe; post-merger linking) — explicit, permissioned, consent-aware, audited |

**Identity namespace:** the boundary within which one `patient` row is canonical (initially a deployment / org PHI boundary). Cross-namespace = explicit federation/linking (deferred; see §9).

## §5 Reusable-vs-scoped split (the binding DL-10 invariant)

`patient` (identity) layer = reusable identity-claim. `patient_relationship` layer = scoped operational state. **Operational state NEVER auto-shares across relationships just because identity claims match** — sharing is explicit, permissioned, consent-aware, audited.

## §6 Relationship-boundary admission guardrail

A scoping dimension (brand / clinic / practice_entity / location / specialty / legal_entity / parent_org / deployment / referral_partner / care_team / endpoint) becomes a `patient_relationship` boundary **only when it owns distinct operational state** (consents / care programs / messaging context / memberships / clinical context / staff access / lifecycle / legal boundary). Otherwise it stays an **attribute** of an existing relationship. Promote only when distinct state actually exists — never pre-emptively.

## §7 Invariants / rejection rules

1. Reject collapsing identity into relationship or vice-versa (reusable vs scoped split; radar zone 34).
2. Reject operational state auto-sharing across relationships on identity-claim match (Epic "Extreme 1"; zone 35). **Two distinct gates (DL-10 core): identity-match confidence gates resolution/linking; consent/authorization — separately — gates operational-state use/sharing/messaging/cross-relationship visibility. A match alone NEVER authorizes sharing.**
3. Reject minting separate `patient` rows per brand for the same human within a namespace (hard-silo "Extreme 2"; zone 37).
4. Reject brand (or any single dimension) hardcoded as the only relationship boundary (zone 36) — use the admission guardrail.
5. Reject collapsing `contact_identity` (pre-account/unknown inbound) into patient-bound rows (`D0W3B-GRD-001` external-line collapse) — route unknown inbound through identity-claim resolution.
6. Patient is NEVER `operator_of_record`; patient-source data enters `source_authority=patient` + `clinical_adoption_state=not_adopted` until a clinical operator adopts (§7.5.3).
7. Only human actors occupy §7.2 care-ownership roles; `device`/`robot`/`external_system` actors cannot.
8. Cross-namespace identity = explicit federation/linking, never automatic shared rows.
9. **Handle ≠ person (DL-10 extension).** A phone/email handle may map to several people (shared/family/typo/fraud); resolution treats shared-handle/ambiguous-handle/typo as first-class states and never blind-matches a handle to one patient.
10. **Single declared `jurisdiction_of_care` (legacy line 107).** Eligibility joins prescriber license × patient jurisdiction on ONE canonical declared field (on `patient` or a verified-address child) — never a per-screen mix of ship-to zip / billing address / ad-hoc IP.

## §8 Vocabulary lock (frozen 2026-05-30)

`contact_identity` · `patient` (consumer identity) · `patient_relationship` · `actor` (+ device/robot/external_system subtypes) · `identity namespace` · `identity_resolution`. Thesis reconciles TO these names; no rename without Nick + Knox.

## §9 Disposition table

| Old primitive / function | Disposition | New home | Why | What breaks if omitted |
|---|---|---|---|---|
| DL-10 lock (system map §1J) | **clean-into-contract** | this contract | DL-10 is the freshest identity authority; cleaned, not copied | nothing — authority preserved |
| primitive #5 `patients` identity | **preserve → `patient`** | this contract §4 | reusable identity layer; already built substrate | identity layer lost |
| primitive #19 `patient_relationship` | **preserve** (doctrine landed; substrate migration future) | this contract §4 | scoped operational relationship | scoping/operational-isolation lost (zones 34/35) |
| primitive #1 `actor` | **preserve + extend** | this contract §4 | add device/robot/external_system subtypes per thesis §12.2 | non-human actor modeling lost |
| §1J.10 `contact_identity` separation | **preserve → `contact_identity`** | §4 + seam `SC-ID-PT-001` | pre-account inbound layer | external-line collapse (`D0W3B-GRD-001`) |
| `brand_id` as relationship boundary | **demote-to-attribute** unless it owns distinct state | §6 admission guardrail | brand is one of 11 dims, not the only one (zone 36) | brand-hardcoded primitive |
| cross-namespace federation (`care_relationship`/`shared_context_grant`/MPI) | **queue (deferred, ladder v2/v3)** | open-review + §9 below | bigger than v0 owned-single; substrate-hooked via namespace abstraction | nothing now (substrate-hook present); cross-org coherence deferred |
| §1J.1-1J.9 L0–L4 assurance ladder + `patient_identity_verifications` + field/source precedence | **preserve → §4/§7** | this contract | graduated identity assurance + which source wins per field | verification depth + precedence lost; identity becomes a flat boolean |
| DL-10 handle-vs-person extension + `contact_identity_handles` | **preserve → §4 `contact_identity` + inv 9** | this contract | phone/email = handle, not person; shared/ambiguous/typo first-class | blind handle→patient matching (fraud/family/typo collisions) |
| jurisdiction-of-care declared field (legacy line 107) | **preserve → §4 `patient` + inv 10** (scope identity-vs-relationship = `REV-166`) | this contract | one canonical eligibility jurisdiction | per-screen jurisdiction drift → eligibility leaks |
| §1J.9 break-glass / admin-intervention / legal-hold | **route → RBAC/Boundary-Policy + Retention §1V** | RBAC + (future) Federation | authority/retention concern, not identity-resolution | (owned elsewhere; identity references) |

## §10 Projections / cross-refs

Display identity (name/avatar/endpoint label) + conversation status chips are **computed projections** over identity + relationship + state substrate, never independent mutable fields (DL-13 display-projection discipline). `care_team_graph` (thesis §7.4) reads `patient_relationship` + assignment layer — membership derivation belongs to CNS/care-coordination; identity provides the primitives.

## §11 Open seams (→ `08`)

- **`SC-ID-PT-001`** `contact_identity → patient / patient_relationship linking` (identity-claim resolution; two-gate: match gates linking, consent gates state-sharing) — seam contract drafted.
- **Cross-namespace / cross-org federation** (`care_relationship` + `shared_context_grant` + patient-as-MPI) — DEFERRED to identity ladder v2/v3. OPEN (`D0THES-REV-143`). **Consumed-before-owned note (coverage check 2026-05-31):** D7 / Observation / Messaging / CNS reference these grant primitives for cross-operator visibility; their **canonical owner is the Federation domain (pass #11, not yet run)**. At ladder v0, cross-operator visibility = `patient_relationship` scoping + RBAC; the cross-org grant layer is deferred. Tracked `REV-157`.
- **`patient_relationship` substrate migration** — doctrine landed (DL-10), substrate not built. OPEN build item (`D0THES-REV-144`).
- **`§1J.10 loadPatientCaseSafetySnapshot`** — identity/safety-snapshot; flagged hard blocker for first Rx-pathway shipment. OPEN (`D0THES-REV-145`).
- **`jurisdiction_of_care` scope** — identity-level (`patient`/verified-address) vs relationship-level (care can differ per `patient_relationship` / state). Held at identity per legacy line 107; relationship lens may require scoping. OPEN (`D0THES-REV-166`). (legacy-scatter backfill 2026-06-01)

## §12 Evidence sources

DL-10 (system map §1J lines 354-370 + lock) · `HANDOFF_2026-05-11_phase_4h_identity_relationship_doctrine.md` · FOUNDATIONAL §7.13 four-layer model · primitives #5/#19/#1 · thesis v2 §7.5.3/§7.2/§12.2/§11/§7.4/§7.5.1 · radar zones 34-37 · guardrail `D0W3B-GRD-001`.
