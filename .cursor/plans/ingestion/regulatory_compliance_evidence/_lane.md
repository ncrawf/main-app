# Lane: Regulatory / Compliance Evidence

Status: **latent** (placeholder — no evidence yet) · Parent: `../00_evidence_router.md`

**What belongs:** laws, payer rules, HIPAA, state licensure, privacy regimes (GDPR/CCPA), accreditation requirements — anything that can become a **binding constraint** on OMNI.

**What does NOT belong:** technical security advisories (→ `security_advisory_evidence/`).

**Lane-specific extraction fields** (extend shared spine):
`jurisdiction` · `effective_date` · `risk_domain` · `requirement` · `confidence` · `legal_review_needed` · `affected_contracts` · `control_impact`

**Promotion bar: HIGH.** This is the one lane whose promotions edge toward truth-adjacent constraints. `legal_review_needed` is default-on; **never auto-promote** a regulatory requirement. Routes to `contract` / `security_rule` / `Build OS` / `thesis` after review. Capture broad; promotion gated (`GRD-036`).
