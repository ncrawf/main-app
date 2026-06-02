# Provider Operating Profile / Workspace — Surface Contract

Plane: **P5 Surface** · Type: `workspace` + `profile` · Status: `stub` · Persona(s): provider, provider-manager · Build priority: `day_1`
Source-of-truth relationship: references P1 truth via projections (P4); commits nothing itself. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose / job-to-be-done
The provider's home: *what is on my plate, what have I done, what am I cleared to do, how am I performing, what's next.* Combines the work surface (task/review queues) with the operating profile (competency, comp, performance context).

## §2 Persona(s) + access
provider (self-scope) + provider-manager (team-scope). RBAC atoms gate scope; manager view needs the team-read atom; clinical detail gated per RBAC + consent.

## §3 Reads from (references, owns none)
- Identity (who) · Federation (license/credential) · RBAC (capability) · BIZOPS (`workforce_intelligence_state`, comp-tier, operational-state) · D3 (today's schedule) · D5 (service history/occurrences) · D6 (sales/commission) · D7 (certs/contracts) · Settings (requirements) · CM/Observation (clinical metrics, scope-gated) · CNS (`provider_task` queue) · OFC (orders/obligations owned)

## §4 Projections used (P4)
`provider_profile` (primary) · `workforce_operating_context` · `operating_metrics` (scoped) · patient `context_packet` (per open patient).

## §5 Writes / actions allowed (verbs → owning domain + RBAC atom)
- adopt/confirm clinical assertion → Clinical Memory (`clinical_assertion_write` + provider-adoption) · close out occurrence → D5 · sign/attest → RBAC T4 · acknowledge task → CNS · initiate coaching note (manager) → CNS/BIZOPS. **No metric/commission/price recompute here.**

## §6 Forbidden
Never store performance metrics as truth (read `operating_metrics`); never grant own authority/competency from the UI (RBAC+BIZOPS own it); never recompute commission (D6 amount / BIZOPS payout); never bypass the competency-gate to self-clear.

## §7 Metrics shown
| metric | source | projection | freshness | lineage |
|---|---|---|---|---|
| productivity / occurrences | D5 | operating_metrics | daily | trace to occurrences |
| sales / commission progress | D6 | operating_metrics | daily | trace to sales |
| competency / training status | BIZOPS | workforce_operating_context | event | trace to WI-state |
| comp-tier progress | BIZOPS | workforce_operating_context | period | trace to payout |

## §8 Workflow states
Task queue states inherit CNS `provider_task` prioritization (ready-for-review / lab-review / message-turn / ops). Review/release of results = OFC release-state (decision composed, not owned here).

## §9 Recovered design / prior gems
*Deposit box (sweep). Candidate gems: provider worklist prioritization + tie-break (CNS §9 / legacy §1G.1/§1G.4-8); provider "operating profile" = the `provider_profile` projection instance; "you prescribe 25% more than peers" coaching framing (Workforce Intelligence, `REV-173`, AI coaching deferred to #12).*

## §10 Source docs feeding this surface
CNS contract §9 (provider_task/queue) · BIZOPS §4 (`workforce_intelligence_state`) · Mindbody profile/cockpit raws (10/11, evidence) · `REV-173` (WI).

## §11 Day-1 vs later
Day-1: task/review queue + schedule + basic profile + competency-gate visibility. Later: AI coaching/intervention (AI #12), rich performance analytics (REV-174).

## §12 Open questions (→ `08`)
- Provider-self vs manager-team scope boundary (RBAC atoms) — confirm at build.
- Which clinical metrics are provider-visible vs manager-visible (consent/scope).
