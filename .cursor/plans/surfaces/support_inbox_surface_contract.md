# Support / Internal Inbox — Surface Contract

Plane: **P5 Surface** · Type: `workspace` · Status: `stub` · Persona(s): support/ops · Build priority: `next`
Source-of-truth relationship: the inbound-handling surface over Messaging external-line + identity-linking + document routing. References P1; commits via owning domains. Indexed in `OMNI_Surface_Map_vNext.md`.

---

## §1 Purpose / job-to-be-done
*Handle inbound that isn't yet a clean patient action* — external-line messages, unknown-contact comms, faxes/MMS/PDFs, identity claims, document routing, support triage.

## §2 Persona(s) + access
support / ops / front-desk. RBAC support atoms; sensitive-read reason-coded (Tier-2).

## §3 Reads from (references, owns none)
Messaging (external-line/inbound threads) · Identity (contact→patient linking `SC-ID-PT-001`) · D7 (document capture→classify→route; 5-disposition) · CNS (safety-task routing).

## §4 Projections used (P4)
contact/identity-confidence projection · inbound-queue projection.

## §5 Writes / actions allowed (verbs → owning domain)
link contact→patient → Identity · route/classify document → D7 (5-disposition: link/attach/chart_file/safety_task/reject_spam; chart_file is separate capability-gated step) · escalate safety → CNS · reply → Messaging. **No auto-file to chart.**

## §6 Forbidden
Never auto-file unknown-contact artifact to chart (D7 inv 10); never link identity without confidence + audit; never expose PHI to an unverified contact; never bypass safety escalation.

## §7 Metrics shown
Inbound volume, unlinked backlog, safety-task SLA — workflow metrics.

## §8 Workflow states
Inbound → classify → (link / attach / chart_file / safety_task / reject_spam); identity-claim resolution; fax = rail + artifact + queue.

## §9 Recovered design / prior gems
*Deposit box: legacy §1O capture→classify→route + unified routing API + reclassification + surface-projection (D7 §3); 5-disposition (`REV-168`); fax canonical placement (rail/artifact/queue); contact→patient linking (`SC-ID-PT-001`); ChatGPT-PHI-leak replacement.*

## §10 Source docs feeding this surface
D7 §3/§7 (1O routing, 5-disposition) + `REV-168` · Identity (`SC-ID-PT-001`) · Messaging external-line · communications_topology ingress.

## §11 Day-1 vs later
Next (after Messaging external-line + Identity linking build).

## §12 Open questions (→ `08`)
- `REV-168` 5-disposition seam ownership (Messaging origin / D7 chart_file / CNS safety_task).
