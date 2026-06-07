# Lane: Vendor / Integration Evidence

Status: **latent** (placeholder — no evidence yet) · Parent: `../00_evidence_router.md`

**What belongs:** integration specs for systems OMNI must ingest from or emit to — PayChex, Quest, Surescripts, Stripe, labs, EHR/FHIR/EDI/portal/webhook/API docs. The question each item answers: *what does OMNI ingest/emit here, and what is the trust boundary?*

**What does NOT belong:** competitor product behavior (→ `competitor_product_evidence/`); internal contract definitions (those are `contracts/`).

**Lane-specific extraction fields** (extend shared spine):
`vendor` · `capability_supported` · `integration_mechanism` (API/portal/file/EDI/FHIR/webhook) · `auth_model` · `data_objects` · `rate_limits` · `trust_boundary` · `omni_ingests_or_emits` · `contract_impact`

**Promotion bar:** normal → high (trust-boundary claims). Routes to `contract` / `Build OS` / `domain_map`. Capture broad; promotion gated (`GRD-036`).
