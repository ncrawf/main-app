# `_inbox/` — Unsorted Capture (provenance unknown only)

Status: **always available** · Parent: `../00_evidence_router.md` · Guardrails: `GRD-036`, `GRD-037`

`_inbox/` is for capture whose **provenance/source family is unknown or unnamed**, or that is **too raw to place yet**. It is the "I grabbed this, get it in the loop, I'll source it later" lane.

**It is NOT for "I don't know the topic."** Topic is never how we file (see `GRD-037`). If you know the *source family*, file it directly:
- a YouTube/lecture transcript → `outside_learning/`
- a Hims / Mindbody / competitor screenshot → `competitor_product_evidence/<vendor>/`
- an OWASP/CVE/threat-model doc → `security_advisory_evidence/`
- a HIPAA/licensure rule → `regulatory_compliance_evidence/`
- a PayChex/Quest/Stripe integration doc → `vendor_integration_evidence/`

Do **not** default known sources into `_inbox/`.

**Triage out fast:**
1. Capture the raw artifact + the shared minimum metadata spine (`../00_evidence_router.md` §3).
2. Identify its **provenance lane** and move it there (do not split it; one source = one lane — `GRD-037`).
3. If it justifies a **new lane**, follow "Adding a new lane" (`../00_evidence_router.md` §8).
4. If it isn't evidence at all (internal opinion/strategy), route it out of `ingestion/` entirely (→ `plans/`).

**Never a junk drawer.** Anything sitting here unprocessed is triage debt, not a home.
