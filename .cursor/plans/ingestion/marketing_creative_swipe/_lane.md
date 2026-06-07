# Lane: Marketing / Creative Swipe (the "swipe file")

Status: **live-on-first-drop** · Parent: `../00_evidence_router.md` · Guardrails: `GRD-037`, `GRD-040`, `GRD-041`

**What belongs:** external creative/marketing inspiration we may adapt — emails, ads, landing pages, pop-ups, SMS, social posts, packaging, brand/visual references, copy, offer framing, CTA/urgency mechanics, funnel ideas. From a competitor OR anyone with good marketing (e.g. an ALO email, a spa's SMS that worked). The question this lane answers: *what creative/copy/offer/design/funnel idea can we learn from and adapt?*

**What does NOT belong:**
- A competitor's *product/workflow/service* behavior (intake flow, booking, pricing flow, portal UX) → `competitor_product_evidence/`.
- *Business* strategy / pricing model / positioning / investor signal → `market_strategy_evidence/`.
- OUR OWN marketing ideas or assets we publish → internal, NOT evidence. **Drafts, final creative, and live campaign assets belong in the marketing/product system of record** — this lane is only for *external* inspiration/swipes and evidence about creative patterns. Do not let it become the Bloom/OMNI asset library.

**Lane-specific extraction fields** (extend the shared spine in `../00_evidence_router.md` §3):
`creative_type` (email / landing / ad / SMS / popup / social / packaging / brand) · `source_brand` · `what_works` (the gem — subject-line pattern, visual hierarchy, offer framing, CTA style, urgency mechanic, brand tone, mobile layout) · `adapt_for` (specialty / surface / campaign) · `promotion_target` (usually surface / feature / marketing-asset backlog)

**Bulk drops = collection sources.** A whole campaign (100 screenshots) is ONE `EVSRC` folder with `screenshots/` + `copied_text.md` + `_source.md`, one index row, many extracted gems (`../00_evidence_router.md` §4). Don't make 100 decisions for one campaign.

**Promotion bar:** normal. Capture broad; promotion gated (`GRD-036`). Routes to `surface` / `feature` / marketing-asset backlog.

**Forward hook (future, not built):** today this is a backend repo evidence lane. Later it can be productized as a **P5 marketing-workspace surface** — a marketing person uploads a swipe in the OMNI app, tags `adapt_for` (Bloom / Plated / CoolPeel / GLP-1 …), and the system routes it into an evidence source → extracts concepts → generates campaign/copy candidates → runs brand/compliance gates before output. Same Evidence-Plane mechanics underneath; this repo lane is the staging-ground prototype. Named so the path exists; not built.
