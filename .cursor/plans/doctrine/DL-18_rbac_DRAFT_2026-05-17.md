# DL-18 — RBAC / Permission Substrate (DRAFT)

**Date:** 2026-05-17
**Status:** DRAFT — Phase 1 hardening per Day 0 Build Contract commit `6dc1286`. NOT locked doctrine. Joint Opus + Knox + user signoff required before promotion to locked DL in `system_map_three_layers_60706286.plan.md`. NOT code. NOT migrations. NOT substrate slice.

**Substrate evolution clause (binding 2026-05-17 — Knox correction REPLACES my prior parallel-substrate proposal):** DL-18 EXTENDS the existing [lib/auth/capabilities.ts](../../lib/auth/capabilities.ts) capability layer; it does NOT replace it with a parallel system. The existing `ROLE_CAPABILITIES` compile-time const (8 roles × 20 capabilities) becomes the Day 1 SEED DATA for `permission_group_atom_grant` rows when the substrate slice lands. The existing `hasCapability()` + `requireCapability()` functions remain the read-side API (no replacement). The existing `audit_events` table (per `emitCapabilityAudit` pattern at [lib/auth/capabilities.ts](../../lib/auth/capabilities.ts) lines 298-353) IS the permission audit log — DL-18 does NOT propose a separate `permission_audit_log` table; the existing audit_events substrate extends with new action values (`capability.grant_modified` / `capability.assignment_modified` / `capability.attestation_emitted`). The existing `SensitiveAccessReason` enum at lines 89-95 (6 values: routine_clinical_review / break_glass_emergency / patient_requested / compliance_audit / cross_state_coverage / training) IS the Day 1 seed for Tier 2 reason_code attestation kind per inv 9. The existing `staff_profiles.role` enum (8 staff roles) is the Day 1 seed for permission_group assignment at inv 5 layer 5. Adoption is incremental: per-staff capability rows (inv 6 layer 6) start empty Day 1; resolution falls through to role-based grants via ROLE_CAPABILITIES seed.

**Substrate evolution path for `requireCapability` + `emitCapabilityAudit`:** existing `MinimalUser` + `RequireCapabilityOptions` types extend to admit `actor_kind` parameter per DL-16 amendment 43 12-kind actor; default = `'staff_user'` for backward compat (current hardcoded value at [lib/auth/capabilities.ts](../../lib/auth/capabilities.ts) line 317); explicit override per DL-16 amendment 43 actor 4-tuple admits the full enum.

**Cross-anchors:**
- System map §1D (staff capability layer; existing implementation at `lib/auth/capabilities.ts`) + DL-14 inv 8 (capability + audited mutations) + DL-16 amendment 43 (actor 4-tuple + 12-kind enum) + §1J.9 (high-liability mutations + authority boundaries)
- Layer 2 Section G.2.3 (RBAC primitives source-of-truth)
- Day 0 Build Contract §3.2 (RBAC primitives + permission group scaffolding ships Day 0) + §3.7 patches + §6.4 step 4
- Mindbody raw batches 13-16 (cumulative RBAC + capability evidence: 5 permission groups per brand / per-staff 8+ capability flags / permission group ↔ atom grants)

**Scope (binding):** OMNI granular permission substrate — every authorization decision against operational substrate (booking emit / commerce sale close / clinical chart write / Rx prescribe / lab order / refund issue / contract cancel / membership grant / settings edit / federation policy change / audit log inspect / break-glass invoke). Specializes against DL-16 — every DL-18 invariant inherits the appropriate DL-16 invariants (envelope, action authorization at emission, decision record, audit). DL-18 binds the **permission substrate**; it does NOT bind operational substrate primitives (those live in DL-15 / DL-17 / DL-7 / etc.); it does NOT bind identity provider / SSO integration (those are partner_adapter actors per DL-16 amendment 43).

---

## Invariants (24 candidates)

### Core RBAC primitives

1. **Permission Group is a substrate primitive (not a label on staff).** `permission_group` carries: `id`, `tenant_id` (brand-scoped per DL-10), `name`, `description`, `is_system_group` BOOLEAN (TRUE for OMNI-built-in groups; FALSE for tenant-customized), `parent_group_id` FK NULL (optional inheritance hierarchy). **Day 0 seed = OMNI's existing 8 staff roles per `lib/auth/capabilities.ts` `StaffRole` type (REPLACES my prior 11-group proposal which leaked Mindbody verbatim names per Knox refinement + system_map Cross-DL warning).** The 8 system groups are: `clinical_reviewer`, `prescriber`, `pharmacy_ops`, `customer_support`, `billing`, `compliance_auditor`, `ops_admin`, `super_admin`. These map directly to existing `staff_profiles.role` enum and existing `ROLE_CAPABILITIES` const. **Mindbody UI labels** (External / Front Desk / Manager / Service Provider / Social Media Manager) are NOT promoted into OMNI substrate per system_map Cross-DL warning; tenants can NAME their groups whatever they want via the `name` STRING column. Tenants may add custom groups (`is_system_group = FALSE`); system groups REJECTED for tenant edit/delete (only enable/disable + atom grant override).

2. **Permission Atom is a substrate primitive (granular capability unit).** **Day 0 seed includes the existing 20 capabilities from `lib/auth/capabilities.ts` `Capability` type as the atom_key floor** (per Knox refinement; existing capabilities map 1:1 to atoms): `clinical.prescribe` (was can_prescribe), `clinical.sign_visit` (was can_sign_clinical_visit), `clinical.publish_lab_result`, `clinical.view_history`, `clinical.ai_review`, `clinical.collaborate_case`, `clinical.treatment_authoring`, `operations.edit_tracking`, `operations.advance_fulfillment`, `commerce.refund_issue` (was can_refund), `operations.resolve_support_request`, `messaging.send_nonclinical`, `staff.manage`, `catalog.manage`, `audit.view_log`, `patient.impersonate`, `settings.manage_system`, `search.global_cross_patient` (was can_search_globally), `data.see_non_production` (was can_see_test_data), `clinical.collaborate_patient_case`. Substrate extends with additional operational atoms (`appointment.book` / `appointment.cancel_on_behalf_of_patient` / `commerce.void_pre_settlement` / `commerce.adjustment_create` / `commerce.discount_override` / `encounter.open` / `encounter.close` / `encounter.add_performed_line` / `encounter.attest_signature` / `episode.create` / `episode.reactivate` / `episode_task.assign` / `episode_task.escalate` / `federation.modify_permeability_policy` / `break_glass.invoke` / `data_privacy.unmask_merged_client` / etc.). `permission_atom` carries: `id`, `atom_key` STRING UNIQUE, `domain_scope` ENUM (`scheduling` / `commerce` / `clinical` / `messaging` / `audit` / `settings` / `staff_management` / `federation` / `break_glass`), `risk_tier` ENUM (`low` / `medium` / `high` / `critical_break_glass`), `default_audit_required` BOOLEAN (TRUE for all critical_break_glass + most high), `requires_attestation_kind` ENUM NULL (`reason_code` / `dual_approval` / `provider_signature` / `legal_entity_owner_signature`), `description`, `introduced_in_version`. Day 0 seed registry: ~80 atoms across the 9 domain_scopes. **NOT a closed enum** — registry extends as new operational features land per DL-16 inv 5 + 9 + 29.

3. **Permission Group ↔ Permission Atom grants (many-to-many; explicit row per grant).** `permission_group_atom_grant` carries: `permission_group_id` FK, `permission_atom_id` FK, `is_granted` BOOLEAN (TRUE allows; FALSE explicitly denies, distinct from absence-of-row which is "default-deny"), `granted_with_constraint` JSONB NULL (e.g., `{ scope: 'own_appointments_only' }` for limited-scope grants), `granted_by_actor` per DL-16 amendment 43 actor 4-tuple, `granted_at`, `valid_from` + `valid_to` (temporal per DL-16 inv 18; allows time-bound grants like contractor or temp staff). Three-state grant semantics: present + `is_granted = TRUE` (allow); present + `is_granted = FALSE` (explicit deny — overrides inheritance per inv 5); absent (default-deny per DL-14 inv 8).

4. **Staff ↔ Permission Group assignment (many-to-many; explicit row per assignment).** `staff_permission_group_assignment` carries: `staff_id` FK, `permission_group_id` FK, `assigned_at`, `assigned_by_actor` per DL-16 amendment 43, `valid_from` + `valid_to`, `assignment_reason` ENUM (`hired` / `role_change` / `temporary_coverage` / `contractor` / `system_default`), `is_primary_group` BOOLEAN (one group per staff is primary; multiple secondary allowed). Staff may belong to multiple groups simultaneously (e.g., Service Provider + Manager). Resolution at authorization time: union of atom grants across all currently-valid assignments minus explicit-deny grants per inv 5.

5. **Authorization resolution order (binding; 6 layers).** When CNS emits an `orchestration_action` (per DL-14 inv 16) or staff invokes a UI operation, authorization MUST be resolved deterministically by reading 6 layers in order; first DENY blocks; absence-at-all-layers defaults DENY (per DL-14 inv 8):
    - **Layer 1 — Action enabled at brand/legal-entity level** (per DL-10 + DL-18 inv 14 — brand-level capability gate; some atoms are brand-capability-required; e.g., `clinical.rx_prescribe` requires brand has Rx capability enabled)
    - **Layer 2 — Staff active + not deactivated** (per §1D.3 + DL-12 lifecycle — deactivated staff DENY all atoms regardless of group)
    - **Layer 3 — Required attestation present** (per inv 8 — atom with `requires_attestation_kind` REJECTS without valid attestation envelope on the action)
    - **Layer 4 — Explicit deny grants** (any `permission_group_atom_grant` with `is_granted = FALSE` for staff's groups blocks)
    - **Layer 5 — Explicit allow grants** (any `permission_group_atom_grant` with `is_granted = TRUE` for staff's groups admits)
    - **Layer 6 — Per-staff capability flags** (per inv 7 — additional ALLOW or DENY layer atomic to staff regardless of group)
    
    Per-action audit record (per DL-16 inv 30 decision record) records which layer admitted / blocked + which grant row(s) referenced.

### Per-staff capability layer (composes with permission groups)

6. **Per-staff capability flags ortho­gonal to permission groups (binding).** Per Mindbody Layer 2 C.8 + Batch 14 Step 09 evidence (8+ flags per staff: `Desk staff / Provider for appointments / Provider for group lessons / Sales Rep / Followups assignment / Earns commissions / Earns tips / Google Calendar connected`). OMNI substrate: `staff_capability` carries `staff_id` FK + 1-to-N rows for capability flags. Capability flag is a row, not a column — admits open-ended set without schema migration. Day 0 seed capability_key set: `desk_staff` / `provider_for_appointments` / `provider_for_classes` / `sales_rep` / `followup_assignee` / `earns_commissions` / `earns_tips` / `google_calendar_connected` / `accepts_pos_payments` / `is_licensed_provider` (cross-link Build Contract §3.7 patch 1) / `multi_state_licensed` (cross-link) / `substance_class_authorized_2` / `substance_class_authorized_3` / `substance_class_authorized_4` / `substance_class_authorized_5` / `dea_registered` / `accepts_video_visits` / `accepts_async_review` / `is_break_glass_operator`. **NOT a closed enum** — extends as new operational primitives land.

7. **Capability flag composes with permission group atoms (per inv 5 layer 6).** A capability flag may ALLOW (e.g., `earns_commissions = TRUE` permits commission-receiving line emission) OR DENY (e.g., `is_licensed_provider = FALSE` denies `clinical.rx_prescribe` even if staff is in `Provider` permission group). Resolution at layer 6 of inv 5 — capability is the most-specific layer.

### Authorship + attestation tier substrate (Build Contract §3.4 anchor)

8. **4-tier authorship + attestation hierarchy (binding, per Build Contract §3.4).** Operational records distinguish 4 tiers of authorship rigor; each tier admits a different actor_kind subset per DL-16 amendment 43:
    - **Tier 1 — `authorship_only`** (FYI; e.g., contact log entry; admits all 12 actor_kinds; no attestation required)
    - **Tier 2 — `reason_coded_authorship`** (e.g., cancellation policy override; admits actor_kinds 1-6 + 7 system with policy-driven reason; requires `attestation.reason_code` per inv 9)
    - **Tier 3 — `dual_approval_authorship`** (e.g., refund > $X threshold; ICD code modification; data privacy unmask; admits actor_kinds 2-6; requires TWO independent attestation envelopes per inv 9 dual approval)
    - **Tier 4 — `provider_attestation_signature`** (e.g., Rx prescription; clinical encounter closeout; lab order; admits actor_kinds 3 + 5 only (provider_user + provider_ai_assisted); requires `attestation.provider_signature_ts` + `attestation.signed_with_credential_kind` per inv 9)
    
    Each registered orchestration_action_kind declares `requires_authorship_tier` ENUM (per DL-16 inv 5 + 9 + 29 registry record). Authorization layer 3 (inv 5) reads this requirement + checks attestation envelope.

9. **Attestation envelope substrate (per inv 8).** `attestation` carries: `id`, `attestation_kind` ENUM (`reason_code` / `dual_approval` / `provider_signature` / `legal_entity_owner_signature` / `break_glass_invocation`), `attested_by_actor` per DL-16 amendment 43, `attested_at`, `reason_code` STRING NULL (per `reason_code` kind — **Day 1 seed maps to existing `SensitiveAccessReason` enum from [lib/auth/capabilities.ts](../../lib/auth/capabilities.ts) lines 89-95: routine_clinical_review / break_glass_emergency / patient_requested / compliance_audit / cross_state_coverage / training** — per Knox refinement; existing 6-enum IS the Day 1 Tier 2 reason_code seed, registry-extensible for future kinds), `reason_text` TEXT NULL, `co_attestor_id` FK NULL (per `dual_approval` — the second approver; MUST differ from first per role-separation), `signed_with_credential_kind` ENUM NULL (per `provider_signature`: `dea_signature` / `legal_entity_owner_signature` / `webauthn` / `password_re_auth`), `credential_evidence_hash` STRING NULL (audit-evident hash; e.g., webauthn assertion hash), `valid_for_action_id` FK (the orchestration_action this attestation authorizes; 1-to-1 binding per inv 11). Attestation envelopes are immutable per DL-16 inv 38 tamper-evident audit.

### Brand-level capability gate

10. **Brand-level capability gate composes with permission groups (per inv 5 layer 1).** Per DL-10 + Mindbody Layer 2 C.3 (General Setup and Options master feature flag). `brand_capability` carries: `brand_id` FK, `capability_key` STRING (e.g., `commerce.refunds_enabled` / `clinical.rx_capability` / `clinical.lab_capability` / `scheduling.waitlist` / `scheduling.deposits` / `federation.permeability_to_partner_X` / `messaging.sms_outbound` / `compliance.hipaa_strict_mode` / `payment.classpass_integration` / `payment.alle_rebate_integration`), `is_enabled` BOOLEAN, `enabled_at` + `enabled_by_actor`, `policy_overrides` JSONB NULL. Brand-level disable BLOCKS the atom at layer 1 of inv 5 resolution even if staff has the atom granted. **Disabled at brand level ≠ atom doesn't exist** — atom remains in registry, available for re-enable; substrate distinguishes "not provisioned for this tenant" from "blocked at runtime."

### Audit + decision record bindings

11. **Every permission-grant / staff-assignment / attestation emission is audited via the existing `audit_events` substrate (binding per Knox refinement REPLACES my prior "specialized projection" proposal).** Existing `audit_events` table per [lib/auth/capabilities.ts](../../lib/auth/capabilities.ts) `emitCapabilityAudit` pattern (lines 298-353) IS the permission audit log. DL-18 does NOT propose a separate `permission_audit_log` table. The existing substrate extends with new action values: `capability.grant_modified` / `capability.assignment_modified` / `capability.attestation_emitted` (existing `capability.exercised` and `capability.denied` actions remain). Records: `(actor_user_id, action, resource_type, resource_id, patient_id, actor_kind, metadata JSONB)` per existing `insertAuditEvent` signature. Hash-chain per DL-16 inv 38. REJECTED: silent permission changes (admin updates a permission group atom grant without audit row). REJECTED: parallel audit substrate (would split semantics across two tables).

12. **Break-glass primitive (per §1J.9; bound by DL-18 inv 8 tier 4 attestation).** Break-glass = time-bound emergency access to atoms beyond staff's normal grant set. `break_glass_session` carries: `id`, `initiated_by_actor` per DL-16 amendment 43, `requested_atoms[]`, `justification_text` TEXT REQUIRED, `dual_approver_id` FK REQUIRED (per inv 8 tier 3), `started_at`, `expires_at` (auto-time-bound; ≤ 4 hours default per Build Contract §3.7; longer requires legal_entity_owner attestation per inv 8 tier 4), `status` ENUM (`active` / `expired` / `revoked` / `completed`), `actions_emitted_during_session[]` ARRAY (every action emitted under break-glass is linked to session for post-action review). Break-glass invocation emits `break_glass_session.opened` event + immediate alert per DL-16 inv 30 + amendment 41 severity=red.

### Federation + multi-tenant primitives

13. **Brand-scoped vs cross-brand permission grants (per DL-10 + A1 Federation-Topology DL).** Most grants are brand-scoped (staff with `Provider` group at brand_A has no implicit grant at brand_B). Cross-brand grants require explicit `cross_brand_permission_grant` row + tenant_id of both sides + permeability policy admission per A1 Federation-Topology DL Phase 1 step 4. REJECTED: implicit cross-brand grants via staff multi-tenant assignment without explicit permeability admission (per DL-10 default = strict isolation).

14. **Legal-entity ownership separation from operational permission.** Per Build Contract §3.7 patch 1 + multi-LE federation. Legal entity owner (e.g., Bloom Health Holdings) has implicit `audit.inspect_log` + `compliance.export_phi` + `break_glass.invoke` + `federation.modify_permeability_policy` for their entity, but does NOT have implicit operational permissions (e.g., `clinical.rx_prescribe` requires provider_user actor_kind regardless of LE ownership). LE ownership grants attestation Tier 4 capability per inv 8.

### UI + display projections

15. **Permission group + atom registry browseable as admin UI projection.** Per Layer 2 + Mindbody Batch 16 Step 05 (Permission Groups admin with "Edit/Add Groups" affordance). Admin UI reads registry per DL-16 inv 3 category e projections; displays atoms grouped by `domain_scope` + `risk_tier`. Changes to grants emit `permission_grant_modified` event per inv 11.

16. **Display-state vs source-of-truth (per DL-12 + DL-16 inv 24).** UI elements (e.g., "Edit refund" button visible) read from permission projection; the projection is a derived view of inv 5 resolution. Underlying decision MUST re-run at action emission time (per DL-16 inv 10 — authorization at emission AND execution). UI hiding ≠ enforcement (defense in depth).

### Edge cases + special primitives

17. **Self-service patient permissions (per actor_kind = patient).** Patient operations (self-booking, self-cancellation, message reply, intake submission, payment update) are NOT modeled in permission_group / permission_atom (those are staff RBAC). Patient permissions are modeled in patient_relationship per DL-10 + primitive #19 (e.g., `patient_relationship.can_self_book BOOLEAN`, `.can_self_cancel BOOLEAN`, `.consent_to_marketing BOOLEAN`). DL-18 inv 17 BINDS the boundary: permission_group / permission_atom = staff RBAC ONLY. Patient self-service uses patient_relationship policy. Cross-link DL-10.

18. **System / cron / webhook / partner_adapter / third_party_integration permission grants (per actor_kinds 7-11).** Non-human actors (per DL-16 amendment 43 actor_kinds 7-11) have their own permission grant substrate: `system_actor_atom_grant` carries `actor_id` FK (system_module / cron_job / webhook_endpoint / partner_adapter / partner_id) + `atom_id` FK + temporal validity + scoped constraint JSONB. Resolution at action emission: which atoms can this system module emit? Default-deny per DL-14 inv 8. E.g., `Automatic Payment` system module has `commerce.autopay_charge_emit` + `commerce.payment_attempt_record`. `_ClassPass API_` third_party_integration has `scheduling.book_via_partner_integration` ONLY (booking-only scope per inv 13).

19. **AI-as-author permission grants distinct from human grants (per DL-14 inv 18-21 + actor_kind = staff_with_ai_assist or provider_ai_assisted).** AI may DRAFT operations only for atoms registered with `permits_ai_drafting = TRUE` per DL-16 amendment 42. AI-as-author final-emission (i.e., AI is the actor_kind without human review) is BLOCKED for safety-sensitive atoms (`clinical.*`, `commerce.refund_issue`, `break_glass.invoke`, `data_privacy.unmask_merged_client`). The action substrate enforces: any orchestration_action emission with `actor_kind = staff_with_ai_assist` MUST have `on_behalf_of_id = ai_proposal_id` per DL-16 amendment 43; substrate REJECTS missing provenance.

### Audit + lifecycle

20. **Permission change history is append-only + reconstruction-capable (per DL-12 + DL-16 inv 18 temporal + inv 38 audit).** Every grant / assignment / capability / attestation row has full history queryable by `effective_at` / `valid_from` / `valid_to`. Authorization decisions made in the past can be re-validated against the historical grant state (per DL-16 inv 18). REJECTED: silent grant deletion that breaks historical decision audit.

21. **Permission lifecycle states (binding, 5 states).** `permission_group_atom_grant.status` + `staff_permission_group_assignment.status` + `staff_capability.status` + `brand_capability.status` ENUM: `proposed` (admin drafted; not yet active) / `active` (in force) / `suspended` (temporarily blocked; e.g., during investigation) / `revoked` (explicitly removed; auditable; not deleted) / `expired` (valid_to elapsed). Transitions are state-machine-validated; illegal transitions emit `illegal_transition_attempted` event per DL-15 inv 5 pattern.

### Cross-DL bindings

22. **DL-18 specializes DL-16 authorization invariant 10 (authorization at emission AND execution).** Every orchestration_action_kind registered per DL-16 inv 5 + 9 + 29 declares `required_atoms[]` + `required_authorship_tier` + `required_brand_capabilities[]`. Action emitter checks DL-18 inv 5 resolution + DL-18 inv 10 brand capability + DL-18 inv 8 attestation tier BEFORE emission; executor re-checks at execution (second line of defense). Cross-link DL-16 inv 10 + 30.

23. **DL-18 + Settings-Infrastructure DL (DL-19): editing settings requires settings-domain atoms.** Per Layer 2 C settings as OS (10 sections + ~100 sub-pages). Each settings sub-page is gated by atoms (`settings.edit_<sub-page-key>`). Bulk-cancel admin (Layer 2 D.9) requires `staff.bulk_cancel_admin` atom. Cross-link DL-19.

24. **DL-18 + Federation-Topology DL: permeability changes require federation atoms (high-risk, tier 4 attestation).** Modifying federation permeability policy requires `federation.modify_permeability_policy` atom + Tier 4 attestation (legal entity owner signature). Cross-link DL-10 + A1 + Federation-Topology DL.

---

## Open sub-questions (require Knox + user signoff before lock)

- **Q-DL18-1**: How do contractors / temp staff / locum providers get permission? Tentative: time-bound staff_permission_group_assignment per inv 4 `valid_to` field; admit `contractor_temp_assignment` reason code.
- **Q-DL18-2**: Multi-state licensed providers (per Build Contract §3.7 patch 1) — how does the licensure capability layer compose with the action emission's jurisdiction check? Tentative: inv 6 capability flags `substance_class_authorized_<N>` + `multi_state_licensed` + per-state license sub-substrate (`provider_license_state` row per state); jurisdiction check at emission reads license state composability.
- **Q-DL18-3**: Cross-tenant break-glass (e.g., compliance officer needs PHI access across multiple brands)? Tentative: each brand's break-glass is brand-scoped; cross-brand break-glass requires multi-brand attestation chain.
- **Q-DL18-4**: AI agent autonomous mode (per DL-14 inv 18 bounded autopilot) — when AI emits with `actor_kind = staff_with_ai_assist`, does staff implicitly grant or does each emission require fresh consent? Tentative: staff configures per-atom autonomy mode in advance (default = manual approval); emission proceeds with `ai_proposal_id` provenance; staff can revoke autonomy mode at any time.

---

## Rejected patterns

- **Staff with permissions stored as serialized array on staff row.** Per inv 1-4 — substrate primitives.
- **Implicit cross-brand grants via multi-tenant staff assignment.** Per inv 13 — explicit permeability admission.
- **AI as final authorship without on_behalf_of_id.** Per inv 19 — substrate REJECTS.
- **Silent permission change without audit.** Per inv 11 — explicit `permission_audit_log`.
- **UI hiding as enforcement.** Per inv 16 — defense in depth.
- **Patient permissions in permission_group.** Per inv 17 — patient permissions in patient_relationship per DL-10.
- **Hardcoded permission group atom list.** Per inv 1 + 3 — registry-extensible.
- **Permission decisions cached without re-check at emission.** Per inv 22 + DL-16 inv 10 — re-check at emission AND execution.

---

## Cross-link summary

- **Inherits from:** DL-1 + DL-2 + DL-7 + DL-10 + DL-12 + DL-14 (inv 8 capability) + DL-16 (inv 10 authorization + inv 30 decision record + inv 38 tamper-evident + amendment 43 actor 4-tuple)
- **Specializes:** DL-16 inv 10 for authorization-at-emission discipline
- **Composes with:** DL-15 (scheduling atoms — booking + cancellation + waitlist) + DL-17 (commerce atoms — sale / refund / void / adjustment) + future Clinical-Media DL (clinical chart + intake + consent atoms) + future Care-Coordination DL (episode atoms)
- **Future DL composition:** Clinical-Coding DL (Rx + lab atoms with substance-class capability) + Insurance DL (HSA/FSA atoms deferred)
- **Coexists with:** §1D staff capability layer (existing implementation; inv 5 layer 6 reads from §1D) + §1J.9 high-liability mutations (Tier 4 attestation per inv 8) + §1Q rules (rules-driven action emission reads inv 22 atoms)

---

## Promotion gate

Per Build Contract §6.4 step 4 + §6.5 step 5: DL-18 (DRAFT) → joint signoff → promotion to LOCKED inline in system_map → substrate slice scoping (atom registry seed; permission_group / permission_atom / grant / assignment / capability / attestation DDL; authorization resolver RPC). Substrate slice MUST verify existing §1D `lib/auth/capabilities.ts` implementation is current per §10.5 stale-existing-OMNI warning.

NOT code. NOT migrations. NOT substrate slice. NOT §10.5 warning removal.
