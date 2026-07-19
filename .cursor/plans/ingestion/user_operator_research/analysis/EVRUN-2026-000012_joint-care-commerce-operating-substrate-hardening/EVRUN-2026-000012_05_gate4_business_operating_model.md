# EVRUN-2026-000012 — §05 · Gate 4 — Business-Owner Operating Model + Burden Ledger + Product Acceptance

Document type: `evidence_or_ingestion` (analysis carrier)
Authority: `analysis_nonbinding` (`GRD-036`). **Binds nothing. Promotes nothing. Pre-spine / pre-v4 — propose-only.**
Status: `analysis_active` — Gate 4 = `PRODUCT_MODEL_PASSES_WITH_NAMED_BURDEN_RECONCILIATIONS` (Knox-accepted 2026-07-19 + adjudication patch A–J applied in place); **Gate 5 `AUTHORIZED_AFTER_GATE_4_ADJUDICATION_PATCH` — executed in `_06`, STOP for Nick+Knox after Gate 5.**
Lifecycle role: Gate-4 operator-reality / product-acceptance layer of EVRUN-2026-000012. Consumes `_02 §15` (accepted architecture) as **fixed input**. Does NOT reopen lifecycle classification or Reactor taxonomy.
Manifest action: `add_tier2`
Review gate: `user_knox_required`
Read-graph evaluation: `no_new_route_needed` — reached through `EVRUN-2026-000012` run folder.
Source-of-truth relationship: candidate product/operating requirements; binds no contract, schema, Care capture, spine, or surface map.
Supersedes: none · Superseded by: none

> **FIXED ARCHITECTURE INPUT (from `_02 §15`, do not reopen):** one risk-adaptive intent-to-consequence constitution (Reactor, unpromoted) compiled across **multiple native lifecycle families** — Care resolution · Operator operating/configuration change · Sourcing selection · Fulfillment execution (OFC Act) · Financial settlement (D6) · Platform change · Accountability response. **Domain-owned authoritative records** (no universal ledger). **Typed cross-lifecycle relations.** **Governed projections that expose but own/route/execute NOTHING.** Invariants **activate risk-adaptively** (not counted). **Care Resolution ≠ Sourcing Selection ≠ Fulfillment Execution.** Operator configuration = domain-native governed operating-change lifecycle with release-like controls. **No universal dashboard. No universal executive (CNS is not it).** Clinical choice must never silently optimize operator economics.

> **DE-IDENTIFICATION:** all case actors/vendors tokenized per `_00 §0.5`. `[OPERATOR-BRAND]` = the practice's "Powered-by-OMNI" brand; `[PT-MIKE]`/`[PT-DAN]` = patients; `[CO-OWNER]` = non-clinical co-owner; `[VENDOR-A]`/`[VENDOR-B]` = pharmacies/compounders; `[FD]` = front desk / patient coordinator; `[PROV]` = clinician-operator; `[OWNER]` = business owner. Peptide/GLP names (`sermorelin`, `tirzepatide`, `enclomiphene`) are the shared-casual-name equivalence hazard from H3.

> **GATE-4 CENTRAL QUESTION:** *Does the accepted architecture become an operating environment a real provider, co-owner, front desk, business owner, patient, and counterparty can use — and does it materially outperform the current fragmented workaround without weakening clinical-commercial separation?*

> **★ KNOX GATE-4 ADJUDICATION PATCH (2026-07-19) — applied in place.** Gate 4 = `PRODUCT_MODEL_PASSES_WITH_NAMED_BURDEN_RECONCILIATIONS`, **accepted as a coherent, falsifiable product model — NOT as proof of actual outperformance.** Corrections applied A–J below: evidence-level demotion (§5.10/§5.12); system-level (not gate-by-gate) friction law + irreducible-work list (§5.4); total-ecosystem-burden `A15` (§5.9); **counterparty-participation ladder** (§5.6.1) so operator value does NOT require vendor OMNI adoption; firewall precision — *operator economic advantage* blind, *patient affordability/access* visible (§5.7); payment-preflight/capture-timing (§5.6.2); bounded delegated **agent execution** (§5.2.F); owner-liability + vendor-offer-evidence + clinical-commit-home language (§5.1/§5.2.A/§5.2.E); six Gate-5 reconciliations R1–R6 (§5.12). §15 architecture unchanged. Gate 5 = `AUTHORIZED_AFTER_GATE_4_ADJUDICATION_PATCH`.

---

## §5.0 — Method + evidence posture

Gate 4 is a **product-reality test**, not a build. I do not fabricate click counts where no product exists (`Gate-4` hard rule). Where I state a burden delta I mark its **evidence basis**: `OBSERVED` (visible in 280/281 case facts), `INFERRED` (reasoned from the workflow + contracts), or `ASSUMED` (plausible but unproven — flagged for Gate-5 fixtures / real operator research). The current-reality baseline is drawn from the 280/281 traces (`_00 §2`) and the C3.9 plastics/medspa wedge frame.

**Anti-pattern guard (self-check against `06_guardrail_antipattern_digest.md`):** no universal dashboard; no god-surface; projections stay non-authoritative; every surface below names the authority it does **not** own. Business-owner usability is treated as an architectural criterion (H8), and governance friction must be **repaid** (Gate-4 hard product law), not merely imposed.

---

## §5.1 — CURRENT OPERATING REALITY (the fragmented workaround being replaced)

The 280/281 cluster shows a real peptide/medspa practice running care+commerce on a **stack of disconnected tools plus human glue**: a booking/POS system (Boulevard-class), one-or-more **pharmacy/vendor portals**, **SMS/text threads** (including the duplicated "call [VENDOR-A]" / "text [PT-DAN]" thread), **spreadsheets** for pricing/margin/inventory, paper/PDF **consents**, and the clinician's memory. The "operating system" is actually the **front desk's head + a group text**.

### §5.1.A — Per-actor current-reality map

**[PROV] operator-clinician**
- **Work performed:** interprets patient goal → decides clinical appropriateness → picks a product/formulation/dose → tells [FD] what to order → sometimes picks the vendor themselves.
- **Systems touched:** EMR/charting (or notes), text threads, occasionally the pharmacy portal directly.
- **Duplicate entry:** re-states the plan in chart + text + verbally. `OBSERVED`
- **Decisions:** clinical appropriateness; dose; whether a casually-named product (e.g. "sermorelin") from [VENDOR-A] = the one from [VENDOR-B]. `OBSERVED` (H3 hazard)
- **Authority used:** clinical judgment/prescriptive authority — but exercised **inside a commercial funnel** with no firewall.
- **Interruptions/handoffs:** hands off to [FD] for ordering, pricing, consent, follow-up; no structured return signal that it actually happened.
- **Evidence/proof gaps:** no durable link between "what I authorized" and "what was actually sourced/shipped/delivered." `OBSERVED`
- **Reconciliation/unresolved:** learns of stockouts/substitutions/failures **reactively**, often via patient complaint.
- **Risks hidden:** a vendor substitution that **changed clinical meaning** can reach the patient without re-touching clinical authority. `OBSERVED` (the core H3/H5 danger)

**[CO-OWNER] (non-clinical co-owner)**
- **Work:** sets/changes prices, discounts, which services are offered, sometimes vendor relationships — often **mid-episode** and via text/spreadsheet.
- **Systems:** POS config, spreadsheets, texts.
- **Duplicate entry / decisions:** changes price in POS but the "source of truth" for margin lives in a spreadsheet; catalog and price drift.
- **Authority used:** commercial/operator authority — but **can silently affect an in-flight clinical episode** (price change after quote; catalog change after booking). `OBSERVED` (H5)
- **Proof gaps:** no before/after state, no effective-time, no impact assessment on already-quoted patients. `OBSERVED`
- **Risks hidden:** economically-motivated catalog/vendor change is invisible to the clinician and patient (H7 incentive-lineage gap).

**[FD] front desk / patient coordinator — the human integration layer**
- **Work:** the real orchestrator — takes the plan, finds/keys the order into the vendor portal, collects payment, chases consent signatures, tracks shipping, answers "where is my stuff," re-texts the vendor, updates the spreadsheet.
- **Systems:** POS + 1–N pharmacy portals + texts + spreadsheets + email + phone. `OBSERVED` (this is the Boulevard-plus-portals-plus-texts reality)
- **Duplicate entry:** patient/order/price/consent re-keyed across **every** system. `OBSERVED` (highest-volume duplicate-entry actor)
- **Decisions:** which vendor to actually order from (sometimes), how to handle a stockout, whether to bother the clinician.
- **Interruptions/handoffs/exception queues:** the exception queue **is** the front desk. Every stockout, price change, delayed shipment, unsigned consent, failed payment lands here as an interruption.
- **Reconciliation:** manually matches payments ↔ orders ↔ shipments ↔ what the patient actually received.
- **Unresolved work:** "paid but not delivered," "authorized but never ordered," "consent never signed" — tracked (if at all) in the front desk's memory or a spreadsheet cell. `OBSERVED` (orphaned-consequence risk)
- **Risks hidden:** false closure — telling a patient "it's on the way" when the vendor never accepted custody. `OBSERVED`

**[OWNER] business owner**
- **Work:** wants margin/volume/retention visibility; sets strategy. **Bears operator responsibility, economic risk, governance duties, and exposure to externally-determined legal liability — OMNI does not assign legal liability (H-correction).**
- **Systems:** spreadsheets, POS reports, accountant.
- **Proof gaps:** cannot see, per service, true acquisition cost vs patient price vs margin vs rebate capture, nor which vendor relationships are actually profitable. `INFERRED` from 281 pricing/margin material.
- **Risks hidden:** margin erosion via ad-hoc discounts/courtesy waivers; rebate/loyalty (ALLE/ASPIRE-class) value uncaptured or unattributed; economic conflicts of interest undocumented.

**[PT-MIKE]/[PT-DAN] patient**
- **Work:** states a goal, sometimes names a specific product, pays, waits, chases status.
- **Systems:** texts, payment link, maybe a portal.
- **Proof gaps:** opaque state — "did my order go through, is it equivalent to what the doctor said, when will it arrive, why did the price change." `OBSERVED`
- **Risks hidden:** receives a substituted product without understanding whether clinical meaning changed; experiences **false closure**.

**[VENDOR-A]/[VENDOR-B] counterparty (pharmacy/compounder)**
- **Work:** publishes (informally) what it offers, at what formulation/concentration/route/price/lead-time/jurisdiction; accepts or declines an order; dispenses/ships; runs loyalty/rebate programs; wants reorder/replenishment signals.
- **Systems:** its own portal + phone + fax + email. `OBSERVED` (the "call [VENDOR-A]" thread)
- **Proof gaps:** offer terms live in a rep's head or a PDF; substitutions communicated ad-hoc; custody acceptance ambiguous ("did they get the order?"). `OBSERVED`
- **Risks hidden:** OMNI-side has no governed record of **what was offered**, so a later dispute has no ground truth. The vendor also has **no clean lane to participate** without phone/portal glue.

**External AI / agent (emerging)**
- **Work today:** effectively none governed — at most a chatbot drafting messages. The user's own framing (vendor agents auto-shipping SkinPen tips; patient agents challenging price/selection) is **future**, and today has **no incentive-lineage or authority model** at all. `OBSERVED` (absence)

### §5.1.B — Current-reality summary defects (what OMNI must beat)
1. **No firewall:** clinical choice happens inside a commercial funnel; economic influence is invisible. (H7/H9)
2. **Duplicate entry everywhere**, concentrated on [FD].
3. **Orphaned consequences + false closure** are structural, not accidental.
4. **Configuration is casual text-editing** with no before/after, effective-time, or impact assessment. (H5)
5. **Vendor offer + custody are ungoverned** — no ground truth for equivalence, substitution, or "did they accept."
6. **No margin/incentive integrity** — rebate/loyalty/margin uncaptured and unattributed.
7. **The real operating system is the front desk's memory + a group text.**

---

## §5.2 — POWERED-BY-OMNI OPERATING MODEL (per actor; NO universal dashboard)

Each actor gets a **role-specific operating surface** that is a **governed projection** (`_02 §15` Layer 5): it **shows** truth and **offers candidate actions**, but every **commit** goes to an owning domain lifecycle under that actor's authority. I distinguish, for each actor: *information shown · candidate actions · committed actions · queues · exceptions · approvals · custody acceptance · patient-visible state · operator-visible state · commercial state · clinical state · proof/audit.*

### §5.2.A — [PROV] clinical workspace (Care resolution lifecycle owner)
- **Information shown:** patient goal, clinical history/observations, the **admissible** product/formulation set for this patient (jurisdiction + consent + catalog-adopted), and — **behind an economic firewall** — a neutral clinical option view that does **not** rank by operator margin.
- **Candidate actions:** propose treatment/dose (candidate, not commit); request a sourcing evaluation.
- **Committed actions:** clinical authorization (commits to the **owning clinical domain / REV-184-governed clinical resolution** — exact home unresolved; do NOT presume D3/D5/care-commitment). This is the only place clinical meaning is committed.
- **Queues/exceptions:** "sourcing changed clinical meaning — reopen decision" (selective-reopening trigger); "substitution requires re-authorization."
- **Approvals:** clinical sign-off; re-authorization on meaning-changing substitution.
- **Custody:** accepts **execution custody** of the clinical decision only (not fulfillment).
- **Patient-visible:** authorized plan (not internal pricing/margin).
- **Clinical state:** authoritative; **commercial state is read-only and firewalled** here.
- **Proof:** every authorization + reopening is evidenced and replayable.

### §5.2.B — [CO-OWNER] + [OWNER] configuration & economics workspace (Operator-configuration lifecycle + D6 economics)
- **Information shown:** current catalog/service lines, prices, discount policy, vendor relationships, margin per service (acquisition vs patient price vs rebate), **incentive lineage** on every offer.
- **Candidate actions:** draft a price/catalog/vendor/consent-applicability/sourcing-policy change.
- **Committed actions:** publish a configuration change through the **governed operating-change lifecycle** (release-like controls: draft → review → authoritative commit → effective-time → publication). Owned by Settings/D6/Federation/D7/RBAC — **not** Platform, **not** a casual edit.
- **Queues/exceptions:** "change affects in-flight quoted patients — impact assessment required"; "defective config — rollback/supersede."
- **Approvals:** authorized committer per change type; co-owner cannot silently mutate a clinical-safety-bearing config.
- **Custody:** accepts **change custody** (carries an approved change into effect).
- **Commercial state:** authoritative (price/margin/discount). **Clinical state read-only.**
- **Proof:** before/after, effective-time, affected projections, cascade/revalidation, rollback — all audited (H5 satisfied).

### §5.2.C — [FD] coordination & exception workspace (consumes projections; commits to owning domains)
- **Information shown:** one **honest consequence projection** per patient/matter — authorized plan, sourcing status, payment status, custody status, shipment/delivery, unresolved obligations, deadlines, conflicting closures. This is the projection that **replaces the front desk's memory + group text** — but it **owns nothing**.
- **Candidate actions:** initiate sourcing per policy, request payment, message patient/vendor, open an exception.
- **Committed actions:** each routes to the owning lifecycle (sourcing selection, D6 payment, messaging) under [FD]'s scoped capability.
- **Queues/exceptions:** the front desk's exception load becomes a **governed queue** (stockout, price-change, delayed/partial/wrong shipment, unsigned consent, failed payment) with typed next-actions — not a memory task.
- **Custody:** **cannot** mark fulfillment complete; can only record what a counterparty actually accepted (H-external-custody).
- **Patient-visible state:** derived from real lifecycle states — **cannot manufacture closure.**
- **Proof:** every action attributed + audited.

### §5.2.D — [PT] patient surface
- **Information shown:** authorized plan (in patient terms), what they're paying and why (with disclosure of material economics where required), real order/custody/shipment/delivery state, and unresolved items.
- **Candidate actions:** consent, pay, ask, request change.
- **Committed actions:** consent commit (D7), payment (D6).
- **Patient-visible state = honest projection of real state** (no false "on the way").
- **Proof:** patient can see the provenance of their own state.

### §5.2.E — [VENDOR] counterparty surface (participation without authority — H4)
- **Information shown:** inbound sourcing requests scoped to what the operator shares; the offers this vendor has published.
- **Candidate actions:** publish/update an **offer** (formulation, concentration, route, availability, jurisdiction, terms, billing mode, lead time); accept/decline **custody**; report dispense/ship/deliver/exception; propose replenishment.
- **Committed actions:** offer publication, custody acceptance, execution evidence — into vendor-owned + OFC records.
- **Custody:** **explicitly accepts execution custody** or declines (OMNI may NOT claim fulfillment on transmit).
- **Hard boundary:** a vendor offer/substitution **never manufactures clinical recommendation authority** (H4). A meaning-changing substitution routes back to [PROV] re-authorization, not straight to the patient.
- **Participation is NOT Day-1-required (see §5.6.1 ladder):** this direct surface is **Mode 5**, the target mode — not a precondition. Operators must get value while vendors stay on API/portal/fax/email/phone/rep rails.
- **Proof (H-correction):** a **versioned, attributed offer record is authoritative evidence of what the counterparty represented at that time** — it is **NOT** proof of current inventory, future availability, custody acceptance, dispensing, shipment, or delivery. That distinction is load-bearing for the no-false-closure law.

### §5.2.F — External AI / agent surface (risk-adaptive bounded execution — G-correction)
- **Authority is action-class, risk, purpose, and delegation specific.** Candidate-only is the **default where authority has not been granted** — NOT a universal prohibition on non-human business commits.
- **A non-human actor MAY execute bounded operator/configuration/sourcing actions inside a pre-authorized envelope** — with **non-human identity, audit, proof, and kill-switch** — e.g.: choose the highest-priority *equivalent* active offer; update availability from an authenticated vendor feed; publish a low-risk price change inside a defined band; initiate a reorder; route a routine exception; create a payment-authorization hold.
- **It MAY NOT:** independently alter clinical meaning; cross consent/jurisdiction/economic-conflict boundaries; exceed economic-conflict limits; make a high-blast-radius configuration change without required review; or falsely represent external custody/execution.
- **Every agent action carries incentive lineage** (who benefits) + a **deliberation-accountability boundary** (private thought vs material influence on a consequential decision); incentive-bearing recommendations are labeled and audited (H9).
- **Gate-5 pressure (R6):** must land between over-automation and "glorified suggestion box."

> **No universal dashboard:** these are seven role-scoped projections over the **same domain-owned records**, not one screen. The shared substrate is the typed cross-lifecycle relation graph + honest projection, not a god-surface.

---

## §5.3 — OPERATOR-BURDEN LEDGER (load-bearing workflows)

Columns: **current burden → proposed OMNI burden → removed → shifted → newly-created-by-governance → irreducible → automation opportunity → human-review requirement → failure-if-hidden → evidence-that-would-prove-reduction.** Evidence basis tagged per row.

| # | Workflow | Current burden | Proposed OMNI burden | Removed | Shifted | New (governance) | Irreducible | Automation opp. | Human-review req. | Failure if hidden | Proof of reduction |
|---|---|---|---|---|---|---|---|---|---|---|---|
| W1 | Order a product for a patient | [FD] re-keys into portal + POS + text + spreadsheet `OBSERVED` | One sourcing action from the authorized need; auto-projects to payment + fulfillment | ~3 duplicate entries | Keying → confirming candidate | Sourcing-selection authority check | Vendor still must accept custody | Auto-populate order from authorized need | Confirm admissible vendor/offer | Wrong/undelivered product | Duplicate-entry count/order; time-to-order `ASSUMED→Gate5` |
| W2 | Confirm equivalence of a casually-named product | [PROV]/[FD] guess "sermorelin A = sermorelin B" `OBSERVED` H3 | Offer record carries formulation/route/concentration; equivalence is typed | Guesswork | Memory → typed check | Equivalence classification | Genuine clinical judgment on edge cases | Flag non-equivalent substitutions | [PROV] re-auth on meaning change | Silent clinical-meaning change | % substitutions auto-classified vs escalated |
| W3 | Change a price / catalog item | [CO-OWNER] edits POS + spreadsheet, no impact view `OBSERVED` H5 | Governed config change w/ effective-time + impact assessment | Silent drift | Casual edit → reviewed publish | Review/impact step | Someone must decide the price | Auto-detect affected in-flight quotes | Approve if patients affected | Price change hits quoted patient silently | # in-flight quotes flagged pre-publish |
| W4 | Collect + apply consent | Chase PDF signature; hope right version `OBSERVED` H6 | Consent applicability computed; gate enforced pre-consequence | Manual chase/matching | Chase → resolve applicability | Applicability computation | Patient must still consent | Auto-resolve which version applies | Exception on ambiguous applicability | Acting without applicable consent | % consequences with pre-verified consent |
| W5 | Track "where is my order" | [FD] texts vendor, guesses `OBSERVED` | Real custody/shipment/delivery state in projection | Status-chasing texts | Guess → read real state | Custody-acceptance recording | Physical shipping latency | Auto-status from vendor events | Exception on stalled shipment | False "on the way" | Paid-but-undelivered duration |
| W6 | Reconcile paid ↔ ordered ↔ delivered | Manual spreadsheet match `OBSERVED` | Typed relations reconcile automatically; exceptions surfaced | Manual matching | Match → review exceptions | — | Genuine disputes | Auto-reconcile clean cases | Review only mismatches | Money/clinical mismatch unseen | Manual-reconciliation hours |
| W7 | Handle stockout / substitution | Ad-hoc text scramble `OBSERVED` | Fallback sourcing candidates; equivalence-gated | Scramble | Improvise → policy-driven | Fallback policy authoring | Vendor availability reality | Auto-propose equivalent fallback | [PROV] if meaning changes | Non-equivalent substitute reaches patient | % stockouts resolved without clinical error |
| W8 | Capture rebate/loyalty (ALLE/ASPIRE-class) | Often uncaptured `INFERRED` | Incentive lineage on offers; capture attributed | Lost value | Invisible → attributed | Incentive disclosure | Program rules external | Auto-attribute rebate to service/margin | Owner review of economics | Undisclosed economic bias | Rebate-capture rate; margin accuracy |
| W9 | Onboard a vendor | Phone/portal/PDF, no OMNI record `OBSERVED` | Vendor publishes governed offers via counterparty surface | Portal-glue | Operator-keys → vendor-publishes | Offer-record governance | Vendor must still exist/contract | Structured offer intake | Operator admits vendor (Federation) | No ground truth for disputes | Time-to-onboard; offer completeness |
| W10 | Patient status/closure communication | Manual, optimistic `OBSERVED` | Honest projected state | False-closure risk | Manual → derived | — | — | Auto-notify on real state change | — | Manufactured closure | False-closure incidents |

**Net read:** the **largest current burden (duplicate entry + status-chasing + reconciliation + exception glue) collapses onto [FD]**, and OMNI's biggest wins (W1, W5, W6, W10) target exactly that actor. The **new governance burden is concentrated in W3/W4/W7** (config review, consent applicability, fallback policy) — and §5.4 must prove each is repaid.

---

## §5.4 — GOVERNANCE-FRICTION ACCOUNTING (no unexplained tax)

For each **new** gate/review, per Gate-4 hard product law (friction only where consequence requires; repaid elsewhere):

| Gate | Why consequence requires it | Risk controlled | Who | How often | Policy-committable / automatable? | How OMNI repays the friction |
|---|---|---|---|---|---|---|
| **Config-change review** (W3) | A price/catalog/consent/sourcing change can silently harm in-flight patients + margin (H5) | Silent mutation reaching quoted/booked patients | [CO-OWNER]/[OWNER] committer | Per config change | **Partly automatable:** trivial/no-impact changes auto-pass; only changes affecting in-flight matters require review | Eliminates spreadsheet drift; auto impact-assessment; rollback (repays via W3/W6) |
| **Consent-applicability gate** (W4) | Acting without the *applicable* consent version is a legal/clinical harm (H6) | Consequence executed without valid consent | RBAC enforces; D7 owns artifact | Per consequential transition | **Automatable computation** with exception-only human touch | Removes manual chase/matching; prevents rework + liability (repays W4) |
| **Sourcing-selection authority + disclosure** (W1/W7/W8) | Vendor choice carries margin/rebate/ownership incentives (H7) | Hidden economic bias in a care-adjacent decision | Operator/sourcing-policy authority | Per sourcing | **Policy-committable:** admissible set + default order pre-authorized; only exceptions escalate | Faster ordering + captured rebate + auditable margin (repays W1/W8) |
| **Custody-acceptance recording** (W5/W9) | OMNI must not claim fulfillment on transmit (external-custody law) | False closure; paid-but-undelivered | Counterparty accepts/declines | Per fulfillment | **Automatable** via vendor events | Real status kills status-chasing + false closure (repays W5/W10) |
| **Meaning-change re-authorization** (W2/W7) | A substitution that changes clinical meaning must reopen clinical decision | Silent clinical-meaning drift | [PROV] | Only on non-equivalent substitution | **Gated by equivalence classification** (equivalent substitutions do NOT interrupt) | Avoids unnecessary reopening AND unsafe silent change (repays W2/W7) |

**Rule (B-correction — system-level, NOT gate-by-gate):** *Every governance step must be consequence-justified, proportionate, and compressible where policy permits. Some safeguards remain irreducible human work. OMNI passes only when **total ecosystem burden — including those safeguards — is materially lower**, OR the added safety/accountability value clearly justifies the residual burden.* **Do not require every control to "pay for itself" locally; test the net operating system** (see `A15`, §5.9).

**Irreducible human work (reduced/narrowed/exception-routed, but does NOT disappear):** disputed clinical equivalence · vendor admission + contracting · high-blast-radius configuration review · uncertain consent applicability · regulatory ambiguity · identity conflict · financial disputes · suspected product defects · exception adjudication · external-party refusal or unreachability · patient disagreement or changed preference. These are **net-new or residual** safeguards; OMNI's claim is that their cost is outweighed at the ecosystem level, not that they vanish.

---

## §5.5 — OPERATOR-CONFIGURATION WORKFLOW (governed operating-change lifecycle)

Per §15 law: **operator configuration is a domain-native governed operating-change lifecycle with release-like controls — NOT Platform-owned business semantics, NOT casual Settings rows.** Full span:

```
vendor discovery
  → offer evaluation            (vendor publishes; operator evaluates terms/formulation/jurisdiction/incentive)
  → concept/equivalence mapping (map vendor offer ↔ operator-adopted catalog meaning; H3 equivalence typed)
  → catalog adoption            (Settings: operator adopts the item into its universal catalog definition)
  → pricing & discount policy   (D6: patient price, discount rules, margin intent, incentive lineage)
  → consent applicability       (D7 defines artifact/version; Settings maps applicability; RBAC will enforce)
  → authority review            (authorized committer per change type; impact assessment on in-flight matters)
  → publication / effectivity   (effective-time; affected projections revalidated)
  → runtime consumption         (clinical/sourcing/fulfillment lifecycles consume the effective config)
  → monitoring                  (defect/complaint/margin/consumption signals)
  → suspension / supersession   (pull or replace a defective/withdrawn offer or price)
  → impact assessment           (who relied on the superseded version; downstream cascade)
  → rollback / downstream correction (remedy where owed; reconcile financial/clinical/operational effects)
```

**Ownership map (no new domain minted):** discovery/offer = Federation admission + vendor-owned offer record; catalog adoption = **Settings**; pricing/discount/margin/incentive = **D6**; consent artifact/version = **D7**, applicability mapping = **Settings**, enforcement = **RBAC**; publication controls = a **configuration-publication controller** (release-like) over the owning domains; monitoring/rollback = owning domain + Accountability where remedy is owed. **Change custody** is explicit at publication.

**Small-practice guard (kill-criterion pre-check):** trivial changes (a $10 price bump with no in-flight quotes) must pass with **near-zero ceremony**; the release-like controls **scale with risk** (risk-adaptive constitution), so a solo medspa is not forced through enterprise change-management for routine edits. `ASSUMED → must be proven in Gate 5 fixture "config velocity for small practice."`

---

## §5.6 — PATIENT-SPECIFIC SOURCING + FULFILLMENT WORKFLOW

Per §15: **Care Resolution ≠ Sourcing Selection ≠ Fulfillment Execution.** Full span:

```
authorized need                 (Care resolution commit by [PROV] — clinical meaning fixed)
  → admissible sourcing candidates (offers passing clinical-equivalence + jurisdiction + consent + availability filters)
  → sourcing selection          (pick offer under clinical/commercial/incentive constraints; authority + disclosure + incentive lineage)
  → patient terms & disclosure  (price, material economics disclosed where required)
  → payment posture             (patient-pay vs clinic-purchase/resale; D6)
  → counterparty custody offer  (request sent to vendor)
  → custody acceptance/rejection(vendor EXPLICITLY accepts or declines — no fulfillment claim on transmit)
  → fulfillment                 (OFC Act lifecycle)
  → dispense → shipment → delivery
  → monitoring                  (track real state; deadlines)
  → exception                   (stockout/delay/partial/wrong/damaged/recall)
  → selective reopening         (fulfillment failure may reopen SOURCING; meaning-change reopens CARE)
  → compensation / remedy where owed (D6 refund ≠ clinical remedy ≠ reconsideration ≠ outcome)
```

**Load-bearing separations preserved:**
- A **fulfillment failure** (VENDOR-A stockout) reopens **sourcing** (pick VENDOR-B) **without** disturbing the clinical commitment — **if** the fallback is clinically equivalent.
- A **meaning-changing substitute** reopens **care** ([PROV] re-authorization) before it can reach the patient.
- A **refund** (D6 compensation) does **not** equal clinical remedy if the clinical consequence is irreversible — the projection must keep the clinical consequence open even after money is refunded.
- OMNI **never** shows the patient "delivered" until **delivery custody** is real.

### §5.6.1 — COUNTERPARTY-PARTICIPATION LADDER (D-correction — vendor OMNI adoption is NOT a Day-1 prerequisite)

The largest Gate-4 strategy correction: **the product must deliver operator value while vendors remain on their present rails.** S5 (direct counterparty surface) is the *target*, not the *gate*. Five participation modes, laws identical at every rung:

| Mode | Counterparty participation | Custody/provenance semantics | Where value comes from |
|---|---|---|---|
| **1** | Native governed **API / EDI / webhook** | Machine custody events; high-fidelity | Full auto-status + reconciliation |
| **2** | **Vendor-portal adapter** or agent-assisted operation **with human confirmation** | Adapter-observed state; human confirms custody | S3 collapses re-keying; status semi-auto |
| **3** | Structured **secure message / fax / email ingestion** | Parsed + **attributed**; custody explicit, not inferred | Inbound normalized into the projection |
| **4** | **Operator-entered external report** with **explicit degraded provenance** | Operator-attested; marked degraded/unverified | S3 still collapses tracking + reconciliation |
| **5** | **Direct counterparty OMNI surface** (§5.2.E) | Native governed offer + custody | Full two-sided governance (target mode) |

**Invariant laws at EVERY mode:** transport **ACK ≠ accepted custody** · externally-reported state is **attributed** (who said so, when, how) · **unobserved downstream state stays UNKNOWN** · the **patient projection may not manufacture closure**. **Product win condition:** **S3 collapses the operator's re-keying + status-chasing + reconciliation even at Modes 3–4 — before any Mode-5 adoption.** This is the R1 test.

### §5.6.2 — PAYMENT PREFLIGHT + CAPTURE TIMING (F-correction — prevention > recovery)

Payment posture is not just "patient-pay vs clinic-pay" — **when** money moves relative to admissibility + custody is a first-class design decision. Default sequence to test (R5):

```
preflight (offer validity · jurisdiction · consent · fulfillment feasibility)
  → payment AUTHORIZATION HOLD
  → counterparty custody acceptance
  → CAPTURE
  → settle
```

...tested **against** cases where **advance capture is commercially required** (some compounders demand prepayment). Policy must decide, per case: when to **authorize · hold · capture · settle · release · refund**, and **what the patient is told at each state**. **Prevention of avoidable paid-but-undelivered episodes is a first-class acceptance requirement** — `A6` must not merely *observe* paid-but-undelivered duration better if OMNI could have **prevented** the premature capture.

---

## §5.7 — ECONOMIC-INTEGRITY FIREWALL

**Principle (§15):** *clinical choice must not silently optimize for operator economics; economic strength is an operator outcome, not a clinical-resolution objective.*

| Economic element | Exposed to | Governed how | Firewall rule |
|---|---|---|---|
| Acquisition cost | [OWNER]/[CO-OWNER] (D6) | Offer record + procurement cost | **Hidden from clinical option ranking** |
| Patient price / affordability / access | patient + clinician + operator | D6 config | **Visible to shared decision-making** — patient economics MAY transparently shape care |
| Fulfillment probability / lead time / adherence burden | patient + clinician | offer + OFC | **Visible** — clinically relevant to a realistic plan |
| Margin | [OWNER] | D6 derived | Owner-visible; **never** a clinical ranking signal |
| Rebate / loyalty (ALLE/ASPIRE) | [OWNER] | Incentive lineage on offer | Captured + attributed; disclosed where it affects a care-adjacent choice |
| Owned-counterparty interest | [OWNER] + audit | Ownership disclosure on vendor | **Must be visible** when that vendor is selected |
| Commission / discount / waiver | operator + audit | D6 | Attributed to an authorized actor; audited |
| Patient-pay vs clinic-pay | patient + D6 | Payment posture | Explicit; affects custody/settlement, not clinical meaning |
| Incentive-bearing AI recommendation | all + audit | Incentive lineage + deliberation-accountability boundary | Labeled; **candidate only**; cannot become truth |

**Firewall law (E-correction — precise):** *The clinical option view is blind to **operator economic advantage**, NOT blind to **patient affordability or access.*** Patient economics (price, affordability, coverage, expected out-of-pocket, adherence feasibility, access, lead time, preference) **may transparently constrain or shape a care decision** in shared decision-making. **Operator** economics — margin, rebate, commission, owned-counterparty preference, internal revenue target, vendor kickback/loyalty — **must NOT influence clinical ranking**; they may shape a **downstream sourcing** choice **only inside the clinical envelope, with disclosed incentive lineage**.

**Mechanism:** the clinical workspace (§5.2.A) consumes an **admissibility-filtered, operator-economic-advantage-blind (but patient-economics-visible)** option set; sourcing selection (§5.2.C/E) is where operator economics legitimately enters, with disclosure + incentive lineage. The firewall is the **seam between Care resolution and Sourcing selection** — exactly the separation §15 fixed.

**Differentiation posture (demoted per E):** the claim that incumbents "structurally cannot" keep operator economics out of clinical ranking while preserving owner economics is a **Task-D differentiation HYPOTHESIS**, not an established product fact — it must be won in the incumbent-composition contest (Gate 6 / Task D), not asserted here.

---

## §5.8 — PRODUCT-SURFACE SET (minimum coherent surfaces; each names what it does NOT own)

| Surface | Truth it projects | Authority it does NOT own |
|---|---|---|
| S1 Clinical workspace ([PROV]) | Care resolution state, admissible options, reopening triggers | Pricing, catalog, sourcing selection, fulfillment |
| S2 Configuration & economics ([CO-OWNER]/[OWNER]) | Catalog, price, discount, margin, incentive lineage, config lifecycle | Clinical meaning, custody, clinical remedy |
| S3 Coordination & exception ([FD]) | Consequence projection, queues, exceptions | ANY commit truth — routes to owning domains; cannot close fulfillment |
| S4 Patient surface | Honest plan/order/custody/delivery/unresolved state; disclosures | All authoritative truth (read + consent/pay commits only) |
| S5 Counterparty surface (vendor) | Offers, inbound requests, custody, execution evidence | Clinical recommendation authority; operator config; pricing-to-patient |
| S6 Financial settlement | D6 payment/refund/reconciliation state | Clinical meaning; fulfillment custody |
| S7 Matter/consequence projection (shared, read-only) | Cross-lifecycle linked state, deadlines, orphans, conflicting closures | Owns/routes/remedies/commits **NOTHING** (the §15 Layer-5 law) |

**Explicitly rejected:** a single universal operator dashboard (kill criterion) and any "universal executive" surface. S7 is a **projection consumed by native controllers**, not a control tower.

---

## §5.9 — PRODUCT ACCEPTANCE CRITERIA (measurable categories + instrumentation; no invented numbers)

| # | Acceptance category | Instrumentation needed |
|---|---|---|
| A1 | Reduced duplicate entry | Count keystroke/entry events per order across systems, before/after |
| A2 | Reduced manual reconciliation | Hours/week [FD] spends matching pay↔order↔delivery |
| A3 | Reduced orphaned work | Count of "authorized-not-ordered," "paid-not-delivered," "unsigned-consent" open items + age |
| A4 | Reduced false closure | Incidents where patient told "done" but custody not real |
| A5 | Faster accepted custody | Time from sourcing selection → vendor custody acceptance |
| A6 | Lower paid-but-undelivered duration | Median/95p days money-held-vs-delivery |
| A7 | Fewer cross-subject errors | Wrong-patient / wrong-product events |
| A8 | Clearer patient state | Patient "where is my order" contacts per order |
| A9 | Preserved clinical-commercial firewall | Audit: clinical option views contain no margin ranking; % sourcing decisions with incentive lineage |
| A10 | Faster config publication, fewer defects | Config change lead-time; post-publish defect/rollback rate |
| A11 | Faster defect containment | Time from defect detection → suspension + impact assessment |
| A12 | Margin visibility without clinical bias | Rebate-capture rate; margin accuracy; zero margin signals in clinical layer |
| A13 | Reduced operator context switching | # distinct systems touched per episode (target: collapse portals+texts+sheets into role surfaces) |
| A14 | Lower exception-handling burden | Exception queue volume + mean-time-to-resolve |
| **A15** | **Total ecosystem burden (C-correction)** | **Sum of: front-desk/operator time + provider-review time + owner/co-owner time + patient task burden + counterparty participation time + OMNI-ops/implementation time + migration & dual-running + training + role/capability administration + offer/equivalence/regulatory maintenance + connector/data-quality work + false-positive exception burden — measured before AND after** |

**Hard rule honored:** no numerical targets invented; each category has a **defined measurement** to be instrumented (Gate-5 fixtures / real operator research supply the baselines).

**Anti-cheat law (C):** **do NOT claim burden removal when work merely shifts to a less-visible human or service layer** (vendor, OMNI-ops, clinical reviewer, patient, config steward, compliance). `A1–A14` are operator-visible; **`A15` is the honest whole-system test** and governs the Gate-4 pass claim.

---

## §5.10 — PRODUCT KILL CRITERIA (Gate 4 must fail honestly if…)

Assessed against the model above. **Status enum (A-correction):** `DESIGN_NOT_IN_CONFLICT` (the design does the right thing but is unproven) · `NOT_YET_TESTED` · `AT_RISK`. **A design drawn on paper is never `not triggered` — a paper firewall has not proven it resists economic bias; a paper role-surface has not proven users understand it.**

| Kill criterion | Status | Basis / Gate-5 route |
|---|---|---|
| Governance adds more work than it removes | `NOT_YET_TESTED` | System-level test via `A15` (R3) |
| Operator work merely moves into OMNI without compression | `AT_RISK` | S3 must collapse, not add a tool (R1) |
| Co-owner/front desk still need texts + spreadsheets as the real system | `AT_RISK` | Hinges on S3 collapse at Modes 3–4 (R1) |
| Config publication too slow for a small practice | `AT_RISK` | Release-like controls must scale down (R2) |
| Vendor onboarding more expensive than portal work | `AT_RISK` | Ladder must give value pre-Mode-5 (R1) |
| Patient state less honest/understandable | `DESIGN_NOT_IN_CONFLICT` | Honest projection designed (A4/A8); untested |
| Clinical choice becomes economically biased | `DESIGN_NOT_IN_CONFLICT` | Firewall designed (§5.7); prove via A9/A12 (R4) |
| Requires a universal dashboard/executive | `DESIGN_NOT_IN_CONFLICT` | Explicitly rejected (§5.8) |
| Operator cannot run business without expert admin | `AT_RISK` | Config + sourcing policy must be owner-authorable (R2) |
| Attractive only as future infra, not Day-1 value | `NOT_YET_TESTED` | W1/W5/W6/W10 Day-1 wins claimed; prove via R1/R3 |

**Live risks routed to Gate 5:** all `AT_RISK`/`NOT_YET_TESTED` rows above map to reconciliations **R1–R6** (§5.12). None is a current fail; each is a **falsifier Gate 5 must pressure.**

---

## §5.11 — WEDGE VERSUS GENERAL SUBSTRATE

| Layer | Content | Build posture |
|---|---|---|
| **Wedge needs first** (plastics/medspa/peptide) | S1 clinical workspace · S3 coordination/exception (collapse Boulevard+portals+texts+sheets) · patient honest-state (S4) · sourcing+fulfillment separation (§5.6) · consent applicability (W4) · basic margin/rebate capture (W8) | **First proving ground** |
| **Reusable substrate** | The 5-layer §15 composition · typed cross-lifecycle relations · honest projection (S7) · economic-integrity firewall (§5.7) · governed operating-change lifecycle (§5.5) · custody-acceptance law | **Substrate — earned across cases, not wedge-specific** |
| **Wedge-specific configuration** | Peptide/GLP catalog + equivalence rules · specific vendor offers · medspa consent templates · medspa pricing/discount norms | **Configuration, not architecture** |
| **Deferred network infrastructure** | Vendor loyalty auto-replenishment (SkinPen-tips auto-ship) · patient advocate agents · cross-operator vendor network effects · multi-operator portability | **Defer — post-wedge; do NOT build pre-Task-D/C5** |
| **Do NOT build before Task D / C5** | Any new named domain/primitive · counterparty-offer/equivalence/sourcing home minting · the config-lifecycle name · universal projection schema | **Candidate-only; dedup + falsify first** |

**The wedge is the proving ground, not the ceiling** (Knox law). Everything in "reusable substrate" must be *validated by* the wedge but *designed for* the general substrate.

---

## §5.12 — GATE-4 VERDICT

### `PRODUCT_MODEL_PASSES_WITH_NAMED_BURDEN_RECONCILIATIONS`

**Evidence level (A-correction):** *Gate 4 establishes a **coherent, falsifiable product model with a plausible path to material operator outperformance**. Actual outperformance remains **unproven** and must be earned through Gate-5 fixtures, operator testing, implementation evidence, and pilots.* Gate 4 does **not** prove the model already "materially outperforms."

- **Decisive value:** front-desk + operator **work compression with honest continuity** — collapsing [FD]'s duplicate-entry + status-chasing + reconciliation + false-closure + exception glue (W1/W5/W6/W10) into role-scoped projections over domain-owned truth, while making operator **economics stronger without letting them silently bend clinical choice** (§5.7).
- **Current evidence:** **design-level, not runtime proof.**
- **Largest risk:** **hidden burden shift** (work moving to vendor/OMNI-ops/clinical/patient layers — `A15`) **+ dependence on counterparty adoption** (mitigated by the §5.6.1 ladder, not yet proven).
- **Strongest falsifier:** **total ecosystem burden rises**, or **shadow systems (texts/portals/spreadsheets) remain the authoritative system** → `PRODUCT_MODEL_FAILS_OPERATOR_REALITY`.

**Six Gate-5 reconciliations (I-correction — supersede the original three, which are preserved inside R1/R2/R3):**
- **R1 — Shadow-system collapse + five-mode counterparty participation.** Can OMNI eliminate front-desk re-keying + status-chasing while vendors stay on their present rails? Test all five modes (§5.6.1); operator gets Day-1 value **without** vendor OMNI adoption.
- **R2 — Small-practice configuration velocity + ongoing maintenance.** Test: initial service-line setup · trivial change · high-impact change · urgent suspension · rollback · ongoing offer/equivalence/regulatory maintenance. A solo practice must NOT need enterprise change-management specialists.
- **R3 — Total ecosystem burden (`A15`).** Measure across front desk · provider · owner/co-owner · patient · counterparty · OMNI-ops; include migration, training, dual-running, maintenance, data-quality, false-positive exceptions.
- **R4 — Economic-integrity precision.** Prove: patient affordability/access **visible**; operator margin/rebate/ownership **firewalled** from clinical ranking; sourcing exposes incentive lineage; an owned/higher-margin vendor **cannot silently win**.
- **R5 — Payment + custody sequencing (§5.6.2).** Test authorize/hold/capture/settle/decline/partial/price-change/refund/remedy against sourcing + custody state; **prevention** of avoidable paid-but-undelivered is first-class.
- **R6 — Risk-adaptive bounded agent execution.** Test routine policy-committed execution · exception escalation · meaning-changing substitution · economic-conflict threshold · jurisdiction boundary · high-blast-radius config; result must neither over-automate nor reduce agents to suggestion boxes.

- **What Gate 5 must pressure:** **R1–R6 + every §5.6 exception path** (stockout, non-equivalent substitution, price-change-after-quote, custody-decline, partial/wrong/recalled shipment, refund-with-irreversible-clinical-consequence) scored on the Task-D capability profile (Represent · Enforce · Authorize · Execute-and-recover · Prove/replay · Learn-without-rewriting-history).
- **What must NOT be promoted yet:** no domain/primitive minting; no config-lifecycle naming; no counterparty-offer/equivalence/sourcing home commitment; no contract/schema/Care/spine edits. All remain candidates for Task D / C5.

---

## §5.13 — Protocol §9 STOP REPORT (Gate 4)

- **Work package:** EVRUN-2026-000012 Gate 4 — business-owner operating model + burden ledger + product acceptance, plus the mandatory Gate-3 provenance normalization.
- **Authority posture:** `analysis_nonbinding` · propose-only · pre-spine. Nothing promoted; no contract/schema/Care/spine/AGENTS/read-graph-#15/controlling-plan changed.
- **Fixed input honored:** `_02 §15` architecture used as-is; lifecycle classification + Reactor taxonomy **not reopened**.
- **Provenance files changed (Knox mandate A–D):**
  - Renamed mislabeled Knox-content `_03` → **`_04_knox_final_gate3_adjudication.md`** (verbatim body preserved; passport → `frozen_knox_adjudication`; mislabel line removed).
  - Recreated **`_03_unblinded_gemini_architecture_adjudication.md`** for the raw Gemini final answer (passport `frozen_external_adjudication`, preservation note) — **later filled with the supplied frozen Gemini verbatim (2026-07-19)**.
  - Patched **`_02 §15`** pointer (independent-evidence `_03` vs controlling-adjudication `_04` vs operative `§15`) and **`_02 §15.10`**.
  - Patched **`_00`** status line + Gate-3 gate-log entry for corrected `_03`/`_04` provenance.
- **`_03`/`_04` preservation confirmation:** `_04` = Knox (verbatim, correct passport). `_03` = Gemini raw final adjudication, **frozen verbatim (supplied 2026-07-19)**, correct passport + preservation note. *(Historical note: at Gate-4 authoring the raw text had not yet been relayed; it was supplied and frozen on 2026-07-19.)*
- **Unchanged final §15 architecture:** confirmed — one risk-adaptive consequence constitution; multiple native lifecycle families; domain-owned records; typed cross-lifecycle relations; profile-specific controllers; governed projections that own/execute nothing. **No architecture conclusion changed by Gate 4.**
- **Gate-4 output:** complete (§5.1–§5.12) — verdict **`PRODUCT_MODEL_PASSES_WITH_NAMED_BURDEN_RECONCILIATIONS`**.
- **Validation (Knox §D):** `_03`=Gemini (frozen verbatim, supplied 2026-07-19) ✅ · `_04`=Knox ✅ · `_02 §15` points to both correctly ✅ · Gemini verbatim preserved, not fabricated ✅ · no self-talk presented as adjudication ✅ · no architecture conclusion changed ✅ · no contracts/schemas/Care/thesis/spine/AGENTS/read-graph-#15/controlling-plan changed ✅.
- **Knox Gate-4 adjudication (2026-07-19):** Gate 4 **accepted** as a coherent falsifiable product model (NOT proof of outperformance). Adjudication patch **A–J applied in place** (evidence-level demotion · system-level friction law + irreducible-work list · `A15` total ecosystem burden · counterparty-participation ladder §5.6.1 · payment preflight/capture §5.6.2 · firewall precision §5.7 · bounded agent execution §5.2.F · owner-liability/vendor-offer/clinical-home corrections · six reconciliations R1–R6). §15 architecture **unchanged**.
- **Provenance (K) — RESOLVED 2026-07-19:** `_04` kept as Knox; `_03` filled with the supplied frozen Gemini verbatim; run inventory updated. *(Historical: the raw text took several relays to arrive; it was never fabricated in the interim, per Knox §A.3.)*
- **Next allowed action:** Gate 5 **executed in `_06`** (Knox: no further Knox review between patch and Gate 5). **STOP for Nick + Knox after Gate 5.**
- **Residual disagreements:** none newly opened; open items = (1) `_03` Gemini frozen (RESOLVED 2026-07-19); (2) all R1–R6 are design-level and unproven (by design — Gate-5's burden).
