# Admin Operating Console — Surface Contract

Plane: **P5 Surface** · Type: `console` · Status: `stub` · Persona(s): admin · Build priority: `day_1`
Source-of-truth relationship: references P1 truth via projections; commits via owning domains + RBAC. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose / job-to-be-done
The administrator's control surface: *run the practice* — staff/workforce, settings/config, access, schedules, commerce/operations health, exceptions.

## §2 Persona(s) + access
admin / practice-manager. RBAC `settings.edit_*` + admin atoms; high-risk changes need Tier-3/4 attestation. Scope per legal_entity/brand/site (Federation/Settings inheritance).

## §3 Reads from (references, owns none)
RBAC (who-can-do-what) · BIZOPS (workforce, comp, labor cost) · D3 (schedule health) · D5 (occurrence/throughput) · D6 (revenue/refunds) · Settings (config) · Messaging (comms health) · CNS (queues/exceptions) · Federation (operators/venues).

## §4 Projections used (P4)
`operating_metrics` · `workforce_operating_context` · `provider_profile` (team).

## §5 Writes / actions allowed (verbs → owning domain + RBAC atom)
edit settings → Settings (`settings.edit_*` + attestation) · manage staff grants → RBAC · manage workforce records/shifts → BIZOPS · resolve exceptions → CNS/owning domain. **No clinical/commerce truth recompute.**

## §6 Forbidden
Never store ops metrics as truth; never grant clinical authority from the console (RBAC atoms only, per-dimension `T0-13`); never edit a doctrine floor (`T0-16` — settings refuses); never bypass attestation for high-risk change.

## §7 Metrics shown
Practice-level operations (utilization, revenue, no-shows, follow-up backlog, labor cost) — `operating_metrics` projection.

## §8 Workflow states
Exception/escalation handling (CNS Stage 4/5), settings-change approval (diff preview + attestation).

## §9 Recovered design / prior gems
*Deposit box: Mindbody admin drill-downs/settings-master surfaces (evidence, not parity); settings 12-section UI taxonomy (DL-19 Q-DL19-4); admin vs ops console boundary (alias — see inbox).*

## §10 Source docs feeding this surface
Settings contract (DL-19) · BIZOPS · RBAC · Mindbody admin raws (12/14/16, evidence).

## §11 Day-1 vs later
Day-1: staff/settings/access/schedule-health. Later: deep analytics (REV-174), IT/integration admin (separate surface).

## §12 Open questions (→ `08`)
- Admin console vs Ops command center vs IT admin boundary — confirm split vs merge at build (currently 3 candidate surfaces; alias risk).
