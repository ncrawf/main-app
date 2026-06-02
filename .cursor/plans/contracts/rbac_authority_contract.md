# RBAC / Authority / Attestation / Consent-Gate — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain)
Authority: `canonical` for the authority/capability substrate — who may view/act/sign/override/refund/prescribe/access-cross-operator, under what attestation, and whether an action's required consent is present
Status: `draft_for_ratification` (created 2026-06-01, Foundation vNext; domain pass #9 — native draft; Nick + Knox review gate)
Domain(s): `rbac`, `authority`, `attestation`, `boundary_policy`
Lifecycle role: the AUTHORITY layer (thesis §3 Layer-3 Boundary-Policy, capability half) — it decides **actor capability** (does THIS actor have authority for THIS action on THIS ownership dimension) and **gates required consent**. It is one of four interlocking authority pieces; it does NOT replace the others (see §5).
Source-of-truth relationship: distilled per `foundation_vnext_reconciliation.plan.md` §2 native-draft method (FAC-first, one integrated pass). **Controlling spine: DL-18 (LOCKED, 25 inv) — permission_group/atom/grant/assignment/capability + 6-layer resolution + 4-tier attestation + break-glass + brand-capability gate + per-event-ownership orthogonality (T0-13).** **Extends the SHIPPED `lib/auth/capabilities.ts`** (8 roles × 20 capabilities = Day-1 seed; `requireCapability`/`hasCapability` = read-side API; `audit_events`/`emitCapabilityAudit` = the permission audit; `SensitiveAccessReason` = Tier-2 reason seed). Lens: thesis §7.2 (only humans hold care-ownership), §12.8 (AI proposes/humans commit), §7.5.1 + `T0-13` (per-event ownership). Method per `00_architecture_artifact_index.md`.
Supersedes: DL-18 as the build-facing RBAC artifact (DL-18 → evidence/spine); legacy §1D / §1J.9 authority text → evidence
Superseded by: none · Manifest action: `add_tier1` · Review gate: `user_knox_required`
**Consolidation statement (binding):** single build-facing home for staff authority + attestation + the consent-gate. DL-18 (25 inv) + legacy §1D/§1J.9 + the shipped capability layer are **evidence/provenance** (the shipped code is the Day-1 seed, reconciled at build). Build from THIS contract.

---

## §1.5 Freshest-Authority Check (embedded — native draft)

| Layer | Source | Disposition |
|---|---|---|
| **Controlling spine (LOCKED, fresh)** | DL-18 (2026-05-17, locked 2026-05-28 `D0THES-DEC-021`; 25 inv) | **clean-into-contract** (compile) |
| **Shipped build (Day-1 seed)** | `lib/auth/capabilities.ts` (8 `StaffRole` × 20 `Capability`; `requireCapability`/`hasCapability`; `emitCapabilityAudit`→`audit_events`; `SensitiveAccessReason` 6-enum) | **preserve (build-state seed)**; reconcile at build (DL-18 substrate-evolution clause — EXTENDS, not replaces) |
| **Staged items routed here by prior passes** | `REV-169` consent-gate enforcement (privacy/comms) · 4-tier provider attestation (scheduling/D5 cluster) · break-glass teeth (Federation §6 inv 11) · cross-brand capability (Federation grants compose) · high-sensitivity Tier-4 (D7 §6 / 42 CFR Part 2) | **land here** (§6/§7) |
| **Thesis (lens)** | §7.2 only-humans-hold-care-ownership · §12.8 AI-proposes-humans-commit · §7.5.1 + `T0-13` per-event ownership orthogonality | governs; consonant |

**No staleness:** DL-18 is LOCKED + recent + already T0-13-amended (inv 25); the shipped capability layer is the live seed (extend-not-replace). No superseded layer. Q-DL18-1..4 are open sub-questions (§11).

## §1 Purpose

RBAC owns **the authority/capability/attestation substrate**: the granular permission atoms, who holds them (groups + per-staff capability), the deterministic authorization resolution, the attestation tiers (reason-code → dual-approval → provider-signature → legal-entity-owner), break-glass teeth, the brand-capability gate, and **the consent-gate** (whether an action's required patient consent is present, reject-if-missing). It answers *can THIS actor do THIS action, on THIS ownership dimension, with the required attestation + consent* — it does NOT own the patient's identity, the cross-operator grant, the domain commit, or the enforcement orchestration.

## §2 Governing thesis concepts

§7.2: **only human actors occupy care-ownership roles** (device/robot/external_system are actors, not owners). §12.8: **AI proposes / humans commit** — AI is never the final author for safety-sensitive atoms. §7.5.1 + `T0-13`: **per-event ownership orthogonality** — a grant on one ownership dimension (commerce/clinical/custody/coordination/operator/surface/channel) NEVER confers authority on another.

**Build depth bar (Lens B; registry + thesis §3.5):** the *actual build* is **enterprise-grade RBAC + attestation depth (Salesforce/Okta-class permission model + the clinical-attestation rigor of an EMR's sign/co-sign/break-glass)** — granular atoms (~80), default-deny, per-dimension resolution, immutable hash-chained audit, time-bound + reason-coded + dual-approval + provider-signature attestation. NOT a role-string on a user row. This is the build-facing comparator for RBAC.

## §3 Ownership boundary

**Owns:** `permission_group` + `permission_atom` (~80, 9 domain_scopes, `risk_tier`) + `permission_group_atom_grant` (3-state: allow/deny/absent) + `staff_permission_group_assignment` + per-staff `staff_capability` flags; the **6-layer authorization resolution**; the **4-tier attestation** substrate (`attestation` envelope); `break_glass_session` (the capability/attestation/audit teeth); `brand_capability` gate; **the consent-GATE** (does an action require consent X → reject-if-missing/expired, §7); non-human (`system_actor_atom_grant`) + AI-author grants; permission lifecycle + append-only history. Read-side API = `requireCapability`/`hasCapability` (existing); audit = existing `audit_events`.
**Does NOT own:** **patient self-service permissions** (Identity / `patient_relationship` per DL-18 inv 17 — `can_self_book`/`can_self_cancel`/consent-prefs live there, NOT in permission_group); **the consent ARTIFACT/RECORD** (D7 §5 owns `consent_artifact` + typed `patient_consents`; RBAC reads them to gate); **cross-operator GRANT/permeability** (Federation — RBAC grants COMPOSE with it, §5); **the domain commit** (owning domain commits its truth; RBAC only authorizes); **enforcement orchestration** (CNS Meta / Network Governance Plane enforces+audits across the system; RBAC is the per-action resolver it calls); identity (Identity).

## §4 Canonical objects (compiled from DL-18)

`permission_group` (inv 1; 8 system seed = the `StaffRole` enum; tenant-custom allowed; system groups not deletable) · `permission_atom` (inv 2; `atom_key`/`domain_scope`(9)/`risk_tier`(low→critical_break_glass)/`default_audit_required`/`requires_attestation_kind`; ~80 seed incl. the 20 shipped capabilities; open registry) · `permission_group_atom_grant` (inv 3; allow/explicit-deny/absent; `granted_with_constraint` JSONB; temporal) · `staff_permission_group_assignment` (inv 4; multi-group; primary+secondary; temporal; reason) · `staff_capability` (inv 6; per-staff flag ROWS not columns — `is_licensed_provider`/`multi_state_licensed`/`substance_class_authorized_*`/`dea_registered`/`earns_commissions`/`is_break_glass_operator`/…; open) · `attestation` (inv 9; envelope §6) · `break_glass_session` (inv 12; §6) · `brand_capability` (inv 10; brand-level feature gate) · `system_actor_atom_grant` (inv 18; non-human actors) · consent-gate read (§7).

## §5 The 4-way authority composition (the spine — none replaces the others; Knox)

**A consequential action is admissible only when all four hold, evaluated per ownership dimension (`T0-13`):**
1. **Federation** admits the **cross-boundary POSSIBILITY** (permeability/grant if the action crosses an operator boundary; §Federation §5).
2. **RBAC** decides the **actor CAPABILITY** (this contract — the atom is granted + attestation tier satisfied + brand-capability enabled + consent-gate passed).
3. **The owning domain** decides the **domain COMMIT** (D5 commits work, D6 money, Clinical-Memory adoption, etc. — RBAC authorizes, the domain commits its own truth).
4. **CNS Meta (Network Governance Plane)** **ENFORCES + AUDITS** the composition across the system.

**6-layer authorization resolution (RBAC's piece; DL-18 inv 5; first DENY blocks; absence = default-deny):** (1) brand-capability enabled · (2) staff active · (3) required attestation present (§6) · (4) explicit-deny grant · (5) explicit-allow grant · (6) per-staff capability flag (most specific). Re-run at **emission AND execution** (DL-16 inv 10; defense-in-depth) — UI hiding ≠ enforcement (§8).

## §6 Attestation tiers + break-glass (DL-18 inv 8/9/12; the staged 4-tier + teeth)

**4-tier authorship/attestation** (each registered action declares `requires_authorship_tier`): **T1 authorship_only** (FYI; all actor_kinds; no attestation) · **T2 reason_coded** (e.g. cancellation/policy override, sensitive read — `attestation.reason_code`; Day-1 seed = the shipped `SensitiveAccessReason` 6-enum) · **T3 dual_approval** (e.g. refund>threshold, ICD modify, **data-privacy unmask** — two independent attestation envelopes, co-attestor ≠ first) · **T4 provider/owner signature** (Rx, encounter closeout, lab order, **federation permeability change** — `provider_signature` with `signed_with_credential_kind` ∈ {dea_signature/legal_entity_owner_signature/webauthn/password_re_auth} + evidence hash). Attestation envelopes are immutable (hash-chained, DL-16 inv 38), 1:1-bound to the action they authorize.

**Break-glass (the teeth Federation §6 inv 11 pointed to):** `break_glass_session` = time-bound emergency access beyond normal grants — REQUIRES justification + **dual-approver (T3)**, auto-expires (≤4h default; longer needs legal-entity-owner T4), every action emitted under it is linked to the session for post-review, invocation emits a red-severity alert. **Federation owns the cross-tenant break-glass *path*; RBAC owns the *capability + attestation + audit* that authorizes invoking it.**

## §7 Consent-gate enforcement (Boundary-Policy; lands `REV-169`)

RBAC/Boundary-Policy owns **the gate, not the record**: for an action that requires patient consent (outbound marketing/clinical comms per the privacy send-policy §6.1; Rx acceptance; cross-relationship/cross-operator sharing; AI-in-clinical-comms), the gate **reads the typed `patient_consents` record (D7 §5)** and **rejects-if-missing/expired** with a stable reason code. The consent ARTIFACT + the typed record + the 6-toggle mapping are **D7's**; the **requirement + enforcement** are here. (This is the `REV-169` consent-gate slice + the marketing/privacy consent enforcement; the send-policy *computation* is Messaging §6.1, the *gate* is RBAC.) **The legal consent TRUTH/record is D7's** (`consent_artifact` + typed `patient_consents`, §5) — the single source. Only the patient self-service *preference state* (e.g. notification-channel toggles surfaced to the patient) lives in `patient_relationship` (Identity); **Identity is NOT a second consent store** (a toggle change writes through to D7's typed record). RBAC enforces the consent *requirement* against D7's record; it stores neither the record nor the preference.

## §8 Invariants / rejection rules (the gems)

1. **Default-deny** (DL-18 inv 5/3) — absence of an allow grant at all layers = DENY; explicit-deny overrides allow.
2. **Per-event ownership orthogonality — no collapse** (`T0-13`, inv 25): a grant on one ownership dimension does NOT confer authority on another (commerce_owner ≠ clinical-write ≠ custody ≠ coordination); cross-dimension authority requires an explicit grant per dimension.
3. **Re-check at emission AND execution** (inv 16/22; DL-16 inv 10) — UI hiding/projection is NOT enforcement (defense in depth).
4. **AI never final-authors safety-sensitive atoms** (inv 19; §12.8) — `clinical.*`/`commerce.refund_issue`/`break_glass.invoke`/`data_privacy.unmask` require a human actor; AI emission carries `on_behalf_of_id = ai_proposal_id` or is REJECTED.
5. **Only humans hold care-ownership** (§7.2) — device/robot/external_system/system actors get `system_actor_atom_grant`, never care-ownership atoms.
6. **Attestation immutable + 1:1-bound** (inv 9) — hash-chained; tier required per action; dual-approval co-attestor must differ.
7. **Patient ≠ staff RBAC** (inv 17) — patient self-service permissions live in `patient_relationship` (Identity), never in permission_group.
8. **RBAC composes, never replaces** (§5) — RBAC capability is necessary but not sufficient; Federation possibility + domain commit + CNS-Meta enforcement all required. RBAC never grants the cross-operator *possibility* (Federation) nor commits *domain* truth.
9. **Consent-gate reads, never owns** (§7) — RBAC enforces consent requirements against D7's records; it does not store consent.
10. **Every grant/assignment/attestation/break-glass audited via existing `audit_events`** (inv 11) — no parallel audit table; no silent permission change.
11. **Brand-disable ≠ atom-doesn't-exist** (inv 10) — a brand-level disabled atom stays in the registry (re-enablable); distinguishes "not provisioned" from "blocked at runtime".

## §9 Disposition table

| Prior primitive / source | Disposition | Note |
|---|---|---|
| DL-18 (25 inv) | **compile-into-contract (spine)** | §4-§8; evidence |
| shipped `lib/auth/capabilities.ts` (8 roles × 20 caps; requireCapability; audit; SensitiveAccessReason) | **preserve (Day-1 seed); EXTEND not replace** | DL-18 substrate-evolution clause; reconcile at build |
| 4-tier provider attestation (staged from scheduling/D5) | **land → §6** | already DL-18 inv 8 |
| break-glass teeth (Federation §6 inv 11) | **land → §6** (capability/attestation/audit) | Federation owns the path; RBAC the teeth |
| `REV-169` consent-gate enforcement (privacy/comms) | **land → §7** | gate here; record = D7 §5; computation = Messaging §6.1 |
| cross-brand capability (Federation grants) | **compose, §5** (inv 13/24) | Federation possibility + RBAC capability both required |
| patient self-service permissions | **reject (→ Identity `patient_relationship`)** | inv 17 / §8.7 |
| consent artifact/record | **D7 owns; RBAC reads** | §7 |
| serialized-array-on-staff-row / role-string-only / UI-hiding-as-enforcement / silent-change / AI-final-author | **reject** | DL-18 rejected patterns |

## §10 Seams

- **RBAC → every domain:** authorization resolution (the gate every state-mutating action calls at emission + execution).
- **`SC-FED-RBAC-001`** Federation ↔ RBAC: cross-brand grant requires BOTH permeability admission (Federation) AND capability atoms (RBAC); break-glass path (Federation) + capability/attestation (RBAC).
- **`SC-D7-RBAC-001`** D7 ↔ RBAC: consent-gate (§7) reads D7 typed `patient_consents`; D7 access-governance (D7 inv 6) reads RBAC atoms (Tier-4 for 42 CFR Part 2/genetic/SUD).
- **RBAC ↔ Messaging:** the send-policy 8-gate consent check (Messaging §6.1) is enforced via the RBAC consent-gate (§7).
- **RBAC ↔ Settings (DL-19):** editing a settings sub-page requires `settings.edit_*` atoms (inv 23).
- **RBAC ↔ CNS Meta:** the Network Governance Plane enforces/audits over RBAC resolution; CNS calls RBAC at action emission.
- **RBAC ↔ D6 / Clinical-Memory:** high-liability commerce mutations (refund/void/write-off) capability-gated (D6 §8.11); `recordClinicalAssertion`/`clinical_assertion_write` capability + provider-adoption authority (CM).

## §11 Open items (→ `08`)

- `REV-169` consent-gate now lands here (§7) — confirm Messaging/D7 re-point at ratification (computation=Messaging, record=D7, gate=RBAC).
- Q-DL18-1 contractor/temp time-bound grants; Q-DL18-2 multi-state-licensure × jurisdiction-check composition (with Federation `provider_license`); Q-DL18-3 cross-tenant break-glass attestation chain (with Federation); Q-DL18-4 AI autonomy-mode (per-atom pre-grant vs per-emission consent).
- Build reconciliation: the shipped `lib/auth/capabilities.ts` → `permission_group/atom/grant` substrate migration (DL-18 substrate-slice; Day-1 seed from ROLE_CAPABILITIES).
- `operator_neutrality_basis` attestation (Federation inv 8 / `T0-14`) = a Tier-4-class attestation kind — confirm it's in the §6 attestation_kind set at build.
- **CNS-Meta enforcement hooks (named here, drafted at the AI/CNS pass — Knox):** the 4-way spine (§5) names "CNS Meta enforces/audits" but the Network Governance Plane's concrete enforcement substrate (policy resolver reading RBAC resolution + Federation grants; `cns_decision` per authorization; violation/suppression/escalation events) is owned by CNS (§3 Meta-level) and must get concrete hooks when AI/CNS/Build-OS come back around — so "CNS Meta enforces" is not a hand-wave.

## §12 Evidence sources

`DL-18_rbac_DRAFT_2026-05-17.md` (LOCKED; 25 inv + Q-gates + rejected patterns) · shipped `lib/auth/capabilities.ts` (8 roles × 20 caps; `requireCapability`/`hasCapability`/`emitCapabilityAudit`/`SensitiveAccessReason`) · legacy §1D (staff capability) + §1J.9 (high-liability mutations/break-glass) · DL-16 (inv 10 authorization-at-emission · inv 30 decision record · inv 38 tamper-evident · amendment 43 actor 4-tuple) · thesis v2 §7.2 / §12.8 / §7.5.1 + `T0-13` · privacy/comms governance (`REV-169` consent-gate) · scheduling/D5 4-tier attestation · Federation §6 inv 11 (break-glass split) · Mindbody RBAC raws (batches 13-16).
