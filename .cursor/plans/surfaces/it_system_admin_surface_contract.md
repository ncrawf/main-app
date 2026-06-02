# IT / System Admin — Surface Contract

Plane: **P5 Surface** · Type: `console` · Status: `stub` · Persona(s): IT / system-admin · Build priority: `later`
Source-of-truth relationship: references P1 truth; commits via owning domains + RBAC. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose / job-to-be-done
The technical-administration surface: *configure the platform plumbing* — integrations/adapters, federation/operator topology, access provisioning, audit/security, system health.

## §2 Persona(s) + access
IT / system-admin / break-glass operator. Highest-tier RBAC + Tier-4 attestation; break-glass path (Federation owns path, RBAC owns teeth).

## §3 Reads from (references, owns none)
RBAC (grants/atoms/audit) · Federation (operators/venues/permeability/credentialing) · Settings (registry/integration config) · audit (`audit_events`, hash-chained) · integration/adapter health (Messaging external-line, payment rail, payroll rail, lab/pharmacy vendors).

## §4 Projections used (P4)
`operating_metrics` (system/integration health subset).

## §5 Writes / actions allowed (verbs → owning domain + RBAC atom)
provision/revoke access → RBAC · configure integrations/permeability → Settings/Federation (Tier-4) · invoke break-glass → RBAC `break_glass.invoke` (dual-approval) · manage adapters/rails → respective domain config. **Never reads PHI without named purpose + audit.**

## §6 Forbidden
Never grant clinical/care authority via IT role (per-dimension `T0-13`); never bypass consent/permeability gates; never disable audit/doctrine floors (`T0-16`); never silently change permissions (all audited).

## §7 Metrics shown
System/integration health, audit anomalies, access-change log — not business metrics.

## §8 Workflow states
Access provisioning, break-glass session lifecycle, integration onboarding.

## §9 Recovered design / prior gems
*Deposit box: PHI-surface governance (FUTURE_ARC phi); break-glass teeth (RBAC §6); operator-neutrality audit surface (`T0-14`); ChatGPT-PHI-leak replacement (governed substrate + Response Assist).*

## §10 Source docs feeding this surface
RBAC §6 (break-glass/attestation) · Federation contract · `FUTURE_ARC_2026-05-12_phi_surface_governance.md` · audit invariants.

## §11 Day-1 vs later
Mostly later (single-deployment Day-1 needs minimal IT surface). Break-glass + audit are RBAC/Federation primitives available Day-1; the dedicated IT console is later.

## §12 Open questions (→ `08`)
- IT admin vs Admin console split — confirm; much overlaps RBAC/Federation/Settings (may be a view, not a separate build).
