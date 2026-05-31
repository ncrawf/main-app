# D7 — Documents / Evidence / Consent / Media / Materialized Records — Domain Contract

Document type: `domain_contract` (build-facing canonical truth for one domain)
Authority: `canonical` for the durable-artifact / media / consent-artifact / materialized-record substrate + artifact custody/visibility
Status: `draft_for_ratification` (created 2026-05-31, Foundation vNext; domain pass #7; Nick + Knox review gate)
Domain(s): `documents`, `consent`, `media`, `evidence`
Lifecycle role: the ARTIFACT / MATERIALIZATION layer — the durable thing produced, received, or stored (PDF, image, photo, report, signed form, consent, generated note, aftercare packet, `media_artifact`, `evidence_record`) + its custody, retention, access, and scoped visibility. The first stage of the universal flow (`media_artifact`), and the materialization sink for completed work. It owns *the durable artifact*, NOT the measured value (Observation), NOT the clinical claim/adoption (Clinical Memory), NOT the actualized work (D5).
Source-of-truth relationship: distilled per `foundation_vnext_reconciliation.plan.md` §1.5. **Controlling spine: DL-22 (clinical media + intake artifacts + consent + patient_document — DRAFT, Round 7 never ran) + thesis §7.5 artifact custody/portability + §7.5.4 consent specificity + §7.7 projection doctrine.** Method per `00_architecture_artifact_index.md`.
Supersedes: none (DL-22 = DRAFT spine cleaned-in; Q14 partial resolution carried forward)
Superseded by: none
Manifest action: `add_tier1` · Review gate: `user_knox_required`

---

## §1.5 Freshest-Authority Check (embedded)

| Layer | Source | Disposition |
|---|---|---|
| **Spine (DRAFT)** | DL-22 (unified `patient_document` + open `document_kind` + clinical photos + before/after + consent_artifact/template + signature_envelope + linkage + 7-state lifecycle + access governance + GDPR) | clean-into-contract (Round 7 never ran → this IS the first clean pass) |
| **Thesis (lens)** | §7.5 artifact custody/portability (custodian/source/visibility dimensions) + §7.5.4 consent specificity + §7.7 universal projection (one substrate, many scoped views) + §8 `media_artifact` + §1548 `evidence_record` (accountable) | clean-into-contract |
| **Adjacent** | Observation (structured values), Clinical Memory (assertion/adoption), D5 (work), D6 (commerce/insurance), Intake (construction), Federation (operator/visibility), RBAC (access atoms) | seam |

**Reconciliation:** DL-22 is already broad and explicitly **rejects "separate substrate per document kind"** and keeps `document_kind` an **open registry** — so it absorbs all artifact/media/document/report types WITHOUT becoming a "labs" bucket. Two refinements vs DL-22: (a) **structured extraction → Observation**, not D7 (DL-22 inv 10 / Q-DL22-5 already punts structured ingestion out); (b) **intake construction → Intake**, D7 owns only `intake_form_submission` as a stored artifact (DL-22's `intake_session`/`intake_template`/`intake_response` framing predates the mature `lib/intake/*` + Intake contract → demote to Intake's).

## §1 Purpose

D7 owns **durable artifacts, clinical media, consent artifacts, and materialized records**, plus their **custody, retention, access governance, lifecycle, and scoped visibility**. It answers: *what is the durable artifact, where did it come from, who custodies it, who may see it, what does it prove, what was materialized from care?*

## §2 Governing thesis concepts

§7.5: **artifact custody / portability** — custodian, source, and visibility are **separate dimensions** (per-event ownership §7.5.1); artifacts are patient-portable via `shared_context_grant`. §7.7: one artifact substrate, **many scoped projections**. §7.5.4: **consent specificity** (per-recipient/scope/purpose/duration; per-category for 42 CFR Part 2).

## §3 Ownership boundary

**Owns:** `patient_document` (unified primitive, open `document_kind`); `media_artifact` (image/audio/video/transcript/device_log/report PDF); `clinical_photo_detail` + `before_after_pair`; `consent_artifact` + `consent_template` + `signature_envelope`; `patient_document_linkage`; document lifecycle (7-state) + retention + access projection + GDPR pseudonymization; **materialized records** (`evidence_record`, signed notes, generated PDFs, aftercare/precare packets); artifact custody + scoped visibility (§6).
**Does NOT own:** structured measured values (Observation); normalized clinical claim + adoption (Clinical Memory); actualized work/service occurrence (D5); commerce/insurance-entitlement/payment truth (D6); intake construction (Intake — D7 stores `intake_form_submission` only); the **consent-gate enforcement** (Boundary-Policy/RBAC — §5); patient/device/operator identity (Identity/Federation); raw inbound message thread (Messaging).

## §4 Three distinct gates — D7 owns artifact-integrity only ("verification" is not one word)

Two non-clinical verification levels + a separate clinical-adoption gate; none implies the next:
1. **Artifact-integrity verification (D7 — THIS domain):** *"Did we store/render the durable artifact faithfully?"* — `checksum_sha256`, signed-URL integrity, lifecycle. About the blob.
2. **Data/extraction-fidelity verification (Observation §4–§5):** *"Did we extract/normalize/display the VALUE faithfully?"* — about the structured value parsed FROM the artifact.
3. **Clinical-adoption gate (Clinical Memory):** *"Did a clinician adopt the meaning?"*

UI shows all three distinctly: **source artifact · extracted/verified data · clinically-adopted truth.** A faithfully-stored PDF (D7-integrity OK) ≠ verified extraction ≠ clinical adoption.

## §5 Consent — artifact here, gate elsewhere

**D7 owns the consent *artifact*:** `consent_artifact` (immutable post-signature; revocation is an additive row), `consent_template` (versioned), `signature_envelope` (signature method + evidence hash + surrogate signer), rendered/countersigned PDF, validity/expiry/revocation. **Boundary-Policy/RBAC owns the consent *gate*:** whether an action requires consent X and reject-if-missing/expired (DL-22 inv 15 routes this through DL-18 atoms at action emission). §7.5.4 consent specificity + 42 CFR Part 2 per-category (DL-22 inv 17) preserved.

## §6 One canonical artifact, many scoped visibility grants (Nick + Knox locked)

**Three separate dimensions — never collapsed:** (1) **artifact identity** ("this IS the Henry Ford pathology report"); (2) **custody** ("OMNI/patient holds a durable copy"; `artifact_custodian`); (3) **visibility/use** ("GI specialist may view for GI care"; `visibility_grant`/`shared_context_grant` §7.5/§12.4 — per recipient/purpose/duration).

- **One canonical artifact, many scoped projections** (§7.7): the same report is ONE `patient_document` with multiple scoped grants — not per-practice copies.
- **Duplicate uploads → provenance/upload events + visibility requests, NOT duplicate artifacts**, when fingerprint/source metadata match (PDF hash · accession number · report date · source org · patient-identity confidence · document_kind). Second upload attaches as a new `upload_event`/evidence_ref to the canonical artifact.
- **Patient-level OMNI custody ≠ universal provider visibility.** Operators see an artifact only via consent / care_relationship / `shared_context_grant` / boundary policy / break-glass.

**Ladder-v0-vs-deferred reconciliation (with Identity §9/§11 — coverage check 2026-05-31):** the cross-operator grant primitives (`shared_context_grant` / `visibility_grant` / `care_relationship`) are **owned by the Federation domain (pass #11, not yet run)** and Identity **defers the cross-ORG layer to ladder v2/v3** (`REV-143`). So: at **ladder v0** (single identity namespace, multiple operator/brand `patient_relationship`s) scoped artifact visibility runs via **`patient_relationship` scoping + RBAC access atoms** (DL-22 inv 21) — buildable now. **Cross-org** artifact sharing (true `shared_context_grant`/MPI) is the **deferred** federation layer. D7's one-canonical-many-grants model is correct as the target; its cross-org enforcement depends on the Federation pass (`REV-157`).

## §7 Invariants / rejection rules

1. **Unified artifact substrate, open `document_kind`** (DL-22 inv 1/2) — no separate substrate per kind; no closed enum; no narrow "labs"/"documents" bucket.
2. **Artifact ≠ observation ≠ assertion** — D7 holds the durable thing; structured values → Observation; clinical claim → Clinical Memory.
3. **One canonical artifact, many scoped grants** (§6) — dedupe by fingerprint; custody ≠ visibility.
4. **Consent immutable post-signature; revocation additive** (DL-22 inv 13/16); gate enforcement is Boundary-Policy's (§5).
5. **Object storage + signed-URL per access** (DL-22 inv 4); no inline blobs (>10KB); no long-lived public URLs.
6. **Access governance via RBAC atoms** (DL-22 inv 21); high-sensitivity (42 CFR Part 2 / genetic / SUD) requires Tier-4 attestation.
7. **GDPR/erasure preserves audit** (DL-22 inv 24) — pseudonymize, don't delete; tamper-evident access audit (inv 23).
8. **Federation readiness** (§8) — every artifact preserves origin/source/custodian/operator-practice/received-authored-performed times.
9. **Materialization seam, not work-truth** — D7 materializes documentation FROM completed work; D5 owns that the work occurred (§10).

## §8 Federation / inter-practice readiness

Every artifact preserves: source organization/operator, originating facility/practice, uploader/receiver, `artifact_custodian`, document/source type, received/authored/performed times. Cross-practice access is via scoped `visibility_grant` / `shared_context_grant` / care relationship / boundary policy / break-glass — **not** a flattened shared chart.

## §9 Canonical objects

`patient_document` (unified; open `document_kind`; PII class; 7-state lifecycle; storage_uri + checksum) · `media_artifact` · `clinical_photo_detail` + `before_after_pair` · `consent_artifact` + `consent_template` + `signature_envelope` · `patient_document_linkage` (M:N, references not copies) · `evidence_record` / materialized records (notes/PDFs/packets) · `visibility_grant` / `shared_context_grant` (scoped projection) · `upload_event` / fingerprint dedupe (§6). Exact shapes per DL-22 + contract.

## §10 Seams

- **`SC-D5-D7-001`** D5 `service_occurrence.completed` / work-item recorded → D7 materializes documentation/evidence artifact (D5 owns work-truth; D7 owns the materialized record).
- **D7 → Observation** (artifact extraction → structured values + verification state).
- **D7 → Clinical Memory** (`document_extracted` assertion with `evidence_refs` back to the single artifact; stays `unconfirmed` until provider adopts).
- **D7 ↔ Federation** (scoped visibility grants across operators/practices; §6/§8).
- **D7 ↔ RBAC** (access atoms; consent-gate enforcement; §5).
- **Intake → D7** (`intake_form_submission` artifact; `routePatientDocument` uploads).

## §11 Open items (→ `08`)

- **`SC-D5-D7-001` materialization seam** finalize (`REV-140` from D5 pass — what materializes when).
- **Artifact dedupe / one-canonical-many-grants** build rules (`REV-155`): fingerprint/source-metadata match policy + upload_event + visibility-request flow.
- **DL-22 Q-DL22-1..5 promotion gates** (unified substrate lock, before/after pairing, consent in-flight versioning, surrogate evidence, external-report OCR) — carry forward.
- Consent-gate enforcement boundary with RBAC (confirm at RBAC pass).
- Intake-overlap: demote DL-22 `intake_session`/`template`/`response` framing to Intake's (`REV-156`).

## §12 Evidence sources

DL-22 (26 invariants + Q14 + rejected patterns) · thesis §7.5 + §7.5.4 + §7.7 + §8 + §1548 `evidence_record` · `lib/intake/documents/*` (`route-patient-document`) + `lib/consents/*` · communications_topology §11 ingress (fax/document inbound) · Mindbody Documents/Forms/consent raw layers (5/10/11/20) · Day 0 Build Contract §3.4/§3.6.
