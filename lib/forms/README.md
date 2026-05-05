# LEGACY — `lib/forms/`

> **This directory is LEGACY and should NOT be extended.**
>
> It contains the prior `FormDefinition`-based intake system (`lib/forms/glp1-intake.ts`, `lib/forms/types.ts`, etc.) that pre-dates the typed module + claim-ledger architecture established in **Section 1K.0.5** of the system map.
>
> All new intake work lives in `lib/intake/` (typed Module / Question / Pathway / Emission system) + `lib/clinical-concepts/`, `lib/entities/`, `lib/consents/`, `lib/commerce/`. See `lib/intake/README.md`.
>
> The legacy `FormDefinition` system was authored before the system map's data routing discipline existed. It conflates identity capture, clinical claim capture, and consent capture into a single JSONB `form_submissions.answers` blob — losing provenance, supersession semantics, and canonical-home routing. The new architecture corrects this.
>
> **Do not extend these files.** Do not add new fields, new conditional rendering, new validation. Do not register additional `FormDefinition`s here. If you need to capture clinical data, use the new `lib/intake/` architecture.
>
> **Why kept temporarily:** removing these files immediately would break app boot if any existing route imports `glp1IntakeForm` or related types. Phase 4 work will migrate / delete these files as the new intake runtime ships.
