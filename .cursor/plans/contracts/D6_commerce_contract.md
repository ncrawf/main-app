# D6 — Commerce / Entitlement / Payment — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain)
Authority: `canonical` for commerce substrate + financial lifecycle + retail/clinical rail separation + entitlement
Status: `draft_for_ratification` (created 2026-05-31, Foundation vNext; domain pass #8; Round 6 never ran = first clean pass; Nick + Knox review gate)
Domain(s): `d6_commerce`, `entitlement`, `payment`
Lifecycle role: the MONEY + ENTITLEMENT truth — what was sold, what it grants, whether money moved (and on which rail), and how it reconciles. The sibling commercial truth to D5 (work) and D7 (documentation).
**Consolidation statement (binding — Nick + Knox 2026-05-31):** this contract is the **single consolidated build-facing home for commerce.** It COMPILES the doctrine that was scattered across DL-17 + legacy system map §1E/§1I/§1J.9/§1K.11/§12 into the substance below. **Those sources are evidence/provenance (§13 + disposition §10), NOT required runtime reading and NOT a pointer maze.** Build from THIS contract.
Source-of-truth relationship: distilled per `foundation_vnext_reconciliation.plan.md` §1.5 + §2 step-1 (legacy-map grep). Compiles: **DL-17** (38-invariant commerce spine) + **§1E** (retail/clinical rail separation + catalog/checkout) + **§1I** (financial lifecycle / payment rails / reconciliation / Stripe-v1) + **§1J.9** (commerce authority) + **§1K.11** (checkout authorization) + **§12** (commerce↔lab_orders money-ownership) + thesis §7.5.2/§7.5.3/§7.3 + shipped code.
Supersedes: DL-17 + legacy §1E/§1I/§1J.9/§1K.11/§12 as the build-facing commerce artifact (→ evidence)
Superseded by: none · Manifest action: `add_tier1` · Review gate: `user_knox_required`

---

## §1.5 Freshest-Authority Check (embedded)

| Layer | Source | Disposition |
|---|---|---|
| **L1 legacy (scattered — grepped per step 1)** | §1E (rail separation/catalog/checkout) · §1I (money-movement/rails/recon/Stripe-v1) · §1J.9 (authority) · §1K.11 (checkout auth) · §12 (commerce↔labs money-ownership) | **compile-into-contract**; sources → evidence |
| **L2 freshest substrate** | DL-17 (38-inv spine) + shipped `lib/commerce/*`, `lib/intake/write/{commerce_order,treatment_order,subscription}.ts`, `20260428100000_orders_lifecycle_v1.sql`, Stripe types | preserve (spine + build-state) |
| **L3 thesis** | §7.5.2 catalog substrate · §7.5.3 patient-initiated commerce · §7.3 commerce≠care_commitment threshold · §7.5.1 `commerce_owner` · one-wallet-across-islands + cross-brand permeability (DL-17 inv 34) | lens; consonant |

**Key reconciliation:** DL-17 is the commerce *substrate spine* but **explicitly punts the money-movement/billing-rail layer to §1I**. This contract UNIFIES the two (plus the §1E rail separation) into one domain with three named sub-layers (§4/§5/§6). No conflict; compilation, not redesign.

## §1.6 Thesis Doctrine Pressure Check (mandatory, step 0.6)

| Check | Verdict | Note |
|---|---|---|
| **Federation / operator boundary** | PASS (carried) | `commerce_owner` per operator; cross-brand **strict isolation default + explicit transfer** (DL-17 inv 34); one commerce wallet across islands (§8.10); multi-tenant partition (DL-16 inv 8). Cross-org grant layer = Federation #11 (`REV-157`). |
| **Layered accountability (commerce↔care)** | PASS (CRITICAL invariants §8.1–8.3) | payment state ≠ care state; commerce ≠ care_commitment; no-charge-for-Rx-until-eligibility. Money truth never auto-becomes care truth. |
| **CNS usefulness** | PASS | commerce emits authority-labeled candidates (sale_closed/payment_failed/autopay_failed/entitlement_redeemed); CNS coordinates, D6 commits money truth. |
| **Domain-truth boundary (anti-silo)** | PASS | D6 owns money/entitlement; NOT service taxonomy (Settings/DL-19), work (D5), docs (D7), clinical/Rx decision, scheduling (D3), care_commitment. |

## §1 Purpose

D6 owns **commercial + financial + entitlement truth**: catalog commercialization (pricing), sales/lines, entitlements purchased, money movement across payment rails, reconciliation, refunds/adjustments, and the retail-vs-clinical rail separation. It answers: *what was sold, what it grants, did money move (on which rail), and how does it reconcile* — without owning the clinical decision, the work, the documentation, or the service definition.

## §2 Governing thesis concepts

§7.5.2 catalog substrate (catalog_item + projections + ownership fields, universal across operators). §7.5.3 patient-initiated commerce (buying ≠ operator role; `commerce_owner` = OMNI Store / brand / partner, never patient). **§7.3 commerce ≠ care_commitment** (purchases/diagnostic orders do NOT auto-create care_commitments; accountability attaches separately).

## §3 Ownership boundary

**Owns:** `pricing_option` + commerce variant + price; `commerce_order`+line (retail rail); the **financial-lifecycle / money-movement** layer (rail-agnostic payment state, reconciliation, adapters); `entitlement` + redemption; promo wallet (claim/intent/application); gift card; discount program; tax; revenue category; accounting basis; commission; cancellation/suspension fee policy + application; refund/void/credit/adjustment; attribution.
**Does NOT own:** **service/treatment/catalog *definition* + taxonomy** (Settings/Catalog, DL-19 — D6 commercializes it via `pricing_option`); actualized work (D5); documentation/receipt-as-record (D7 materializes; D6 owns the sale truth); the clinical/Rx **decision** (clinical/Rx domain — D6 charges *after* approval); scheduling (D3 emits lifecycle events, D6 applies fees); `care_commitment` (§7.3); identity (Identity).

## §4 Sub-layer A — Commerce substrate spine (compiled from DL-17)

`pricing_option` (4-type: `single_session`/`multiple_sessions`/`unlimited_period`/`autopay_contract`; `quantity_strategy` 5-enum incl. `per_unit_quantity` — kills per-tier sprawl) · `service_pricing_option_assignment` (M:N; pricing lives here, NOT on service) · `commerce_order` parent + `commerce_order_line` (line_kind discriminator: service/product/pricing_option_sale/gift_card/contract_enrollment/package/tip/treatment_deposit/cancellation_fee/account_credit/tax/refund) · `entitlement` (5-state: purchased→active_redeemable→fully_redeemed/expired/voided; activation-strategy 3-enum; redemption-priority deterministic) + `entitlement_redemption` · `contract`/autopay (lazy template-expansion, RRULE) · `gift_card` (purchase_price≠face_value; balance snapshot+reconciled) · `promo_code` + **promo wallet 4-layer** (`patient_promo_claim` availability → `appointment_promo_intent` reservation → `commerce_order_line.applied_promo_claim_id` truth) · `discount_program` (flat/rotating-tier/cumulative) · `tax_rate` (2-tier) · `revenue_category` (≠ service_category) · `accounting_basis` (accrual/cash, brand-level) · `commission` (per pricing_option/staff) · `cancellation_policy` + `suspension` · `commerce_order_adjustment` (additive correction) · `attribution_line`.

## §5 Sub-layer B — Financial lifecycle / money-movement (compiled from §1I)

**Rail-agnostic money-state vocabulary** (stable internal codes, NOT raw vendor strings): `authorized` · `captured` · `voided` · `payment_failed` · `refund_full` · `refund_partial` · `dispute_open`/`dispute_lost` (only if rail exposes) · `write_off` · `invoice_paid`. **Payment-rail capability matrix** (card/ACH/manual-invoice/crypto — each enabled rail has a full row; modality may be N/A; no half-mapped adapters). **Adapters not ontology:** vendor code + secrets in `metadata.payment_rail.<provider>`, NEVER as enums/RLS checks; Stripe is v1 mapping only (`PaymentIntent`→authorize/capture, `Refund`→refund_*, `Dispute`→dispute_*, `Invoice`→invoice_paid). **Reconciliation/idempotency:** external rail = ledger of record for money movement; app DB is a converging projection; inbound idempotency `(provider, event_id)` or hash; same-transaction `audit_events`; periodic recon per rail per mismatch-class (a)-(f); no silent SQL patch. **Authority split (§1I.0):** external rail authoritative for *fund movement/settlement*; OMNI authoritative for *clinical meaning + order meaning + entitlement + gating*.

## §6 Sub-layer C — Retail-vs-clinical rail separation (compiled from §1E + §12)

**Two parent order rails, never one undifferentiated blob:** `commerce_orders` (retail/supplements/non-Rx/in-office) vs `treatment_orders` (clinical/Rx, charged after approval). **Compositional checkout:** a single customer-facing order combining a clinical line + a retail line MUST carry per-line unambiguous `rail`/`order_kind` segregating settlement/fulfillment/RLS/compliance/tax — inference is REJECTED (it's how Rx + cash-and-carry get merged by accident). **In-person hybrid:** supplements settle immediately at front desk (retail rail) while Rx settles later post-approval (clinical rail) = two settlements/two rails/one encounter; structurally prevents "click-button trivialization" of a clinical decision. **Money-ownership (§12):** `commerce_orders` and `treatment_orders` own money — **no second source of price**; a standalone lab funded through the shop carries `metadata.commerce_order_id`; a treatment-linked lab rides `treatment_orders`.

## §7 Checkout authorization (compiled from §1K.11)

**Today-charge vs if-prescribed (separate events):** today-charge (lab kit / supplement / eval fee) → `captured`; if-prescribed (Rx plan) → `authorization_for_future_charge` with explicit terms, **NO charge until eligibility/prescribing satisfied (absolute).** Subscription pre-auth captured once + reused. Plan options are catalog-driven (Settings), not synthesized at intake. Membership checkout composite (one tx): `membership_service_agreement` + `subscription_auto_renew` + `prescription_order_acceptance` consents (consent ARTIFACT = D7; D6 references).

## §8 Invariants / rejection rules (the gems)

1. **Payment state ≠ care state** (§1I.0): a payment failure / subscription lapse / dispute NEVER by itself ends/voids a `care_program` or cancels `clinical_visits`. Program continuity is internal + clinical, not a funding webhook.
2. **Commerce ≠ care_commitment** (§7.3): purchases + diagnostic orders do NOT auto-create care_commitments; accountability attaches separately.
3. **No charge for Rx until eligibility satisfied** (§1K.11, absolute): provider approval + required review precede the if-prescribed charge.
4. **External rail owns money-movement facts; OMNI owns order/entitlement/clinical meaning** (§1I.0). Routing/RLS NEVER depends on a vendor class name (`metadata.payment_rail` + internal codes only).
5. **No undifferentiated order blob** (§1E): retail vs clinical rails remain distinguishable per-line; inference-to-classify rejected.
6. **No second source of price** (§12): `commerce_orders` + `treatment_orders` own money; everything else references.
7. **Sale immutable post-close; correction = additive adjustment** (DL-17 inv 29), never edit-in-place.
8. **Price-line ≤ subtotal; sum-of-lines = subtotal exactly** (DL-17 inv 7; the $196k-vs-$159 bug), substrate CHECK not app-only.
9. **Deterministic redemption/discount order** (DL-17 inv 4); AI never decides redemption order at runtime. Structured-first: AI never atomizes typed payment-webhook fields (§1I.0).
10. **Federation:** cross-brand commerce strict-isolation default; cross-brand entitlement/wallet transfer is explicit + audited (DL-17 inv 34); one commerce wallet across islands is a target via patient-level claim, not commingled tenant ledgers.
11. **High-liability mutations capability-gated** (§1J.9): refund/void/write-off/manual-order require capability + audit.

## §9 Canonical objects (consolidated)

Spine (§4) + money-movement state + `payment_method` (tenant free-form label + loose `accounting_class` enum; vendor names are LABELS not integrations) + rail-agnostic code vocabulary (§5) + `commerce_orders`/`treatment_orders` rails (§6) + `authorization_for_future_charge` (§7) + reconciliation ids (`metadata.payment_rail.<provider>`). Full field detail = DL-17 inv 1-38 + §1I.1-1I.9 (now compiled here; those are evidence).

## §10 Disposition table

| Prior source | Disposition | Note |
|---|---|---|
| DL-17 (38 inv) | **compile → spine §4** + invariants | evidence |
| §1I (financial lifecycle/rails/recon/Stripe-v1) | **compile → money-movement §5** | the layer DL-17 punted; now owned here |
| §1E (rail separation/catalog/checkout/hybrid) | **compile → §6** | evidence |
| §1K.11 (checkout authorization) | **compile → §7** | evidence; consent artifact → D7 |
| §12 (commerce↔labs money-ownership) | **compile → §6** + seam | evidence |
| §1J.9 (commerce authority) | **compile → §8.11** | capability-gated |
| service/category taxonomy + definitions | **move → Settings/Catalog (DL-19)** | D6 owns pricing_option, not taxonomy |
| `treatment_orders` clinical rail | **shared boundary** | clinical/Rx domain owns decision; D6 owns the money on the rail |
| receipt-as-record | **D7 materializes**; D6 owns sale truth | DL-17 inv 30 |
| shipped `lib/commerce/*` + intake commerce/treatment/subscription writes + orders_lifecycle migration | **preserve (build-state)** | reconcile at Build Reconciliation (`REV-152`-class) |
| insurance/Medicare/HSA-FSA mechanics | **defer (v0)** | `REV-159`; D6 is the future home, not solved now |
| DL-17 Q-gates (package-vs-contract, financing) | **carry forward** | `REV-160` |

## §11 Seams

- **`SC-D5-D6-001`** D5 `service_occurrence.completed` → commerce settlement (D6). (drafted this pass)
- `SC-D3-D6-001` appointment lifecycle (cancel/no-show/reschedule) → fee/entitlement consequence (D6 evaluates `cancellation_policy`; `REV-139`).
- Settings/Catalog (DL-19) → D6: service/catalog *definition* → `pricing_option` commercialization (`SC-SET-D6-001`, pending Settings pass).
- Intake → D6: checkout authorization (§7 today-vs-if-prescribed; `SC` per §1K.11).
- D6 ↔ labs: `commerce_orders` funds `lab_orders` (`metadata.commerce_order_id`, §12).
- D6 → CNS: commerce candidates (sale_closed/payment_failed/autopay_failed/entitlement_redeemed/dispute).
- D6 → D7: receipt/contract materialization (artifact).

## §12 Open / deferred (→ `08`)

- **Insurance / Medicare / HSA-FSA entitlement + payment** (`REV-159`): D6 is the rightful FUTURE home, but v0 DEFERS the mechanics (DL-17 Q-DL17-5; system-map Phase B.5+). Do not pretend solved.
- DL-17 Q-gates: package-as-separate-substrate vs contract-subkind; financing (Cherry/CareCredit) as payment_method vs `financing_arrangement` (`REV-160`).
- `care_commitment` threshold boundary (full substrate deferred, `REV-141`).
- `SC-D5-D6-001` settlement detail + `SC-D3-D6-001` fee detail finalize at build.
- Shipped-code reconciliation (Build Reconciliation, plan §7).

## §13 Evidence sources

DL-17 (38 inv + Q-gates + rejected patterns) · legacy system map §1E / §1I (1I.0-1I.9) / §1J.9 / §1K.11 / §12 · thesis v2 §7.5.2 / §7.5.3 / §7.3 / §7.5.1 + one-wallet-across-islands · shipped `lib/commerce/*` + `lib/intake/write/{commerce_order,treatment_order,subscription}.ts` + `20260428100000_orders_lifecycle_v1.sql` + Stripe types · Mindbody commerce raws (batches 6-21) · Day 0 Build Contract §3.5/§3.7.
