# <Surface Name> — Surface Contract

Plane: **P5 Surface** (how a human SEES + OPERATES truth) · owns NO canonical truth
Type: `dashboard` | `console` | `profile` | `workspace` | `app_surface` | `workflow` (pick one primary)
Status: `stub` | `drafted` | `build_near`
Persona(s): <who uses it>
Build priority: `day_1` | `next` | `later`
Source-of-truth relationship: a Surface Contract answers *how does a human operate reality.* It **references** domain truth (P1) via projections (P4); it **commits nothing itself** — every write goes through the owning domain + RBAC gate. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose / job-to-be-done
*What job does this surface do for its persona? One paragraph.*

## §2 Persona(s) + access
*Who uses it; the RBAC atoms / Federation scope / attestation that gate access. (Authority is RBAC's; this names which gate applies.)*

## §3 Reads from (domain truths — references, owns none)
*Tick the domains this surface reads + what it reads:*
- Identity: · Federation: · RBAC: · BIZOPS: · D3: · D5: · D6: · D7: · Settings: · Observation: · Clinical Memory: · CNS: · OFC:

## §4 Projections / read-models used (P4)
*Which Projection Contracts feed this surface (e.g. `provider_profile`, `operating_metrics`).*

## §5 Writes / actions allowed (the verbs)
*What can a human DO here. Each action names the owning domain + RBAC atom it routes through. (Surface invokes; domain commits.)*

## §6 Forbidden (anti-collapse — what this surface must NEVER do)
*The boundary rules. Default floors: never store a metric as source truth; never grant authority from the UI; never recompute another domain's truth (commission, price, occurrence); never bypass consent/eligibility gates.*

## §7 Metrics shown
| metric | source domains | projection | freshness | lineage |
|---|---|---|---|---|

## §8 Workflow states (if console/workspace)
*State machine of the operating workflow, if any.*

## §9 Recovered design / prior gems  ← THE DEPOSIT BOX (rich detail, not bullets)
*The brilliant prior brainstorm/design work for this surface, deposited in full. Cite the source doc per gem.*

## §10 Source docs feeding this surface
*Citations to audits/specs/raws/handoffs/transcripts that fed this surface.*

## §11 Day-1 vs later
*What ships Day-1 vs deferred; rationale.*

## §12 Open questions (→ `08_open_review_queue.md`)
