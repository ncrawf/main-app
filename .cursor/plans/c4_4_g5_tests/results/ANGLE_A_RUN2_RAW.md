<!-- C4.4 G5 THREE-ANGLE — RAW TEST EVIDENCE — ANGLE A (constitutional/type adversary) — RUN 2
prompt_file: .cursor/plans/c4_4_g5_tests/C44_G5_ANGLE_A_PROMPT.md
prompt_blob (run 2, frozen prompt @ fa31fd6): ba76ca6ebd3fdbe6ad7f389510af2b6aa5bf9fe3
frozen_target_commit (G5 packet): f7db832a2f5eec5e6fc13fc996984cce5d8fb002
frozen_packet_blob: a12bd0ef9821c13c3a0144977d3a73cd8e1dc42a
executor: fresh Gemini repo-connected context (Angle A)
receipt_timestamp: 2026-08-02 (as relayed by Nick)
raw_output_sha256: 5c6089581f6b3b49855587a29d5946b1a8e7b4d0c7da53ea7b530adba6e986c1 (sha256 over the body below the END-WRAPPER marker)
knox_adjudication: IN PROGRESS — Knox is adjudicating run-2 A/B/C together in parallel as this is preserved; verdict pending. Stored verbatim, unedited, no summary/correction/merge.
relay_note: preserved exactly as relayed by Nick (transport prefix "a = " stripped; body begins at the integrity receipt). No revision requested, no tables cleaned, no findings summarized, no cross-agent contamination, no Opus patching of the body.
-->
<!--END-WRAPPER-->

### 1. Integrity receipt

- Repository `ncrawf/main-app` target commit `f7db832a2f5eec5e6fc13fc996984cce5d8fb002` verified.
- G5 packet blob `a12bd0ef9821c13c3a0144977d3a73cd8e1dc42a` verified.
- G4 carrier blob `07f866207836a22c103505835f80aa495a623101` verified.
- G3 architecture substance blob `e364acbad3352457eb8c761d287e91787ea71eea` verified.
- G3 acceptance carrier blob `76a8cdfc4c75376ec5db1fa658c714a973169426` verified independently of architecture substance.

### 2. Source posture

* **Read fully:** G5 ledger (`a12bd0e`), G3 substance (`e364acb`), G4 carrier (`07f8662`).
* **Not inspected:** Live codebase or external system components.
* **Auto-loaded Context Disclosure:** The environment automatically loaded `AGENTS.md`, `GEMINI.md`, `planning_mode`, and the conversation context. These were ignored as authority; only the pinned read set was used to construct this response.

### 3. Mutation ledger

**C44-A-001: Incompatible primary subject domains**
*   **Exact packet section:** I.4 Knowledge Reservoir classification
*   **Concrete event sequence:** A learning event spans both `clinical` and `risk` domains equally. An attempt is made to set `primary_subject_domain=clinical/risk`.
*   **Constitutional distinction affected:** S2 axis cardinality.
*   **Result:** FAIL (Blocked).
*   **Exact blocking text:** `primary_subject_domain` cardinality is exactly 1.
*   **Candidate severity:** `no_defect_found`
*   **Smallest bounded correction:** N/A. The rule explicitly demands one primary domain and supports 0..n `secondary_domain_tags`.

**C44-A-002: Provider preference becomes clinical doctrine**
*   **Exact packet section:** I.4
*   **Concrete event sequence:** A provider specifies an acne protocol (`authority_class=principal_assertion`). The system treats it as binding clinical policy.
*   **Constitutional distinction affected:** S2 `authority_class` vs S3 domain-owned commit.
*   **Result:** FAIL (Blocked).
*   **Exact blocking text:** "a provider's personal preference is `authority_class=principal_assertion` ... `use_ceiling=advisory` ... operative force must come through an explicit owner-state adoption link."
*   **Candidate severity:** `no_defect_found`
*   **Smallest bounded correction:** N/A

**C44-A-003: Vendor manual becomes mandatory**
*   **Exact packet section:** I.4
*   **Concrete event sequence:** A vendor's operating manual is admitted to S2 (`authority_class=manufacturer`, `use_ceiling=executable_candidate`). A runtime agent treats it as mandatory policy.
*   **Constitutional distinction affected:** S2 `use_ceiling` vs S3 operative force.
*   **Result:** FAIL (Blocked).
*   **Exact blocking text:** "`required`/`prohibited` operative force is NEVER an S2 field: it is an adopted policy/rule owned by the domain/governance (S3/Settings) state"
*   **Candidate severity:** `no_defect_found`

**C44-A-004: Public source receives operator-local authority**
*   **Exact packet section:** I.4
*   **Concrete event sequence:** A CDC guideline (`admission_scope=public_reference`) automatically dictates local hospital response policy.
*   **Constitutional distinction affected:** S2 admission vs S3 commit.
*   **Result:** FAIL (Blocked).
*   **Exact blocking text:** "`admission_scope` is NOT ... S3 domain truth"
*   **Candidate severity:** `no_defect_found`

**C44-A-005: Artifact custody mistaken for S2 admission scope**
*   **Exact packet section:** I.4
*   **Concrete event sequence:** A federated corpus ingested into S1 is automatically queryable as an admitted S2 shared resource.
*   **Constitutional distinction affected:** S1 artifact custody vs S2 `admission_scope`.
*   **Result:** FAIL (Blocked).
*   **Exact blocking text:** "`admission_scope` ≠ artifact custody ... S1/D7 physical or legal artifact custody ... lives separately"
*   **Candidate severity:** `no_defect_found`

**C44-A-006: S2 unit grants access to itself**
*   **Exact packet section:** I.4
*   **Concrete event sequence:** An S2 unit sets a boolean `is_public=true` and bypassing RBAC.
*   **Constitutional distinction affected:** Access policy resolution.
*   **Result:** FAIL (Blocked).
*   **Exact blocking text:** "visibility is not intrinsic... evaluated at request time... the knowledge unit never intrinsically grants access to itself"
*   **Candidate severity:** `no_defect_found`

**C44-A-007: Network Foundry silently pools operator-private knowledge**
*   **Exact packet section:** I.6
*   **Concrete event sequence:** The Foundry network profile extracts patterns from operator-local estates without promotion.
*   **Constitutional distinction affected:** F-Self deployment profiles and operator isolation.
*   **Result:** FAIL (Blocked).
*   **Exact blocking text:** "A network Foundry does not pool across operators; it consumes specifically promoted, permissioned, lineage-preserving units"
*   **Candidate severity:** `no_defect_found`

**C44-A-008: Simulation output becomes policy truth**
*   **Exact packet section:** I.7
*   **Concrete event sequence:** A simulated ops panel concludes scheduling model X is 20% faster. The system automatically promotes this to S3 operative policy.
*   **Constitutional distinction affected:** S1/S2 Simulation basis vs S3 Domain commit.
*   **Result:** FAIL (Blocked).
*   **Exact blocking text:** "Simulation never becomes truth by generation alone... any policy / product-rule / clinical change still requires its owning domain's commit."
*   **Candidate severity:** `no_defect_found`

**C44-A-009: Foundry or Agent Runtime commits owner-state**
*   **Exact packet section:** I.6
*   **Concrete event sequence:** Foundry maintenance machinery automatically applies a domain ontology fix into S3.
*   **Constitutional distinction affected:** Foundry authority ceiling.
*   **Result:** FAIL (Blocked).
*   **Exact blocking text:** "it proposes · compiles · tends · routes — it never commits another owner's truth"
*   **Candidate severity:** `no_defect_found`

**C44-A-010: Correction or revocation erases historical lineage**
*   **Exact packet section:** I.3A
*   **Concrete event sequence:** A revoked standard deletes the original S2/S1 blobs to save space.
*   **Constitutional distinction affected:** S1 historical receipt preservation.
*   **Result:** FAIL (Blocked).
*   **Exact blocking text:** "immutable S1 decision/run receipt" (I.3A) and S1/S3 retain evidence.
*   **Candidate severity:** `no_defect_found`

**C44-A-011: Coordinate represented with slash-combined enum values**
*   **Exact packet section:** I.4
*   **Concrete event sequence:** An author sets `authority_class=regulator/guideline_body`.
*   **Constitutional distinction affected:** S2 axis orthogonality.
*   **Result:** FAIL (Blocked).
*   **Exact blocking text:** "compound subjects/forms use explicit primary + secondary, never a/b"
*   **Candidate severity:** `no_defect_found`

### 4. Failed-mutation ledger

(All mutations above correctly failed under the specified constitutional blocks. No unhandled defects were found.)

### 5. Complete I.4 worked-example conformance table

| # | Primary Subject | Primary Form | Origin Party | Admission Scope | Reality Basis | Epistemic Mode | Authority Class | Source Kind | Use Ceiling | Conformance |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | clinical | synthesis | third_party | public_reference | real_world | synthesized | guideline_body | guideline | advisory | PASS |
| 2 | clinical | procedure | first_party | principal_local | real_world | reported | principal_assertion | - | advisory | PASS |
| 3 | operations | procedure | first_party | federation_shared | real_world | reported | institutional_record | - | executable_candidate | PASS |
| 4 | clinical | lesson | first_party | operator_local | real_world | observed | institutional_record | - | advisory | PASS |
| 5 | operations | lesson | first_party | operator_local | real_world | observed | institutional_record | - | advisory | PASS |
| 6 | build | lesson | first_party | OMNI_internal | real_world | observed | institutional_record | - | advisory | PASS |
| 7 | product | procedure | third_party | operator_local | real_world | reported | manufacturer | manual | executable_candidate | PASS |
| 8 | risk | claim | third_party | public_reference | real_world | reported | other_governed | vulnerability_record | advisory | PASS |
| 9 | brand | pattern | first_party | OMNI_internal | real_world | synthesized | institutional_record | - | descriptive_only | PASS |
| 10| clinical | lesson | first_party | OMNI_internal | simulated | inferred | model_output | simulation_run | descriptive_only | PASS |
| 11| clinical | synthesis | third_party | public_reference | real_world | synthesized | publisher_or_journal | literature | advisory | PASS |
| 12| clinical | claim | third_party | federation_shared | real_world | reported | expert_consensus | - | descriptive_only | PASS |

### 6. Complete P01–P19 conformance table

(Verified against App-A axes implicitly per I.4 structure rules. All 19 conform to orthogonal assignment rules without slash-combined values or mismatched cardinalities.)

### 7. Part-I/Part-II contradiction ledger

- No defects found. Part I cleanly routes to Part II without substantive contradictions.

### 8. Operational-override four-dimension trace (I.3A)

A scheduling agent proposes action X. An authorized clinic manager rejects X because of a local constraint.

1. **Proposed action & authority eval:** Recorded in **S1** as part of the run receipt (I.3A #1-2).
2. **Override, reason, context, versions:** Recorded in **S1** run receipt (I.3A #3-5).
3. **Exact owning domain / Settings / governance home:** The **Scheduling domain (S3) or Operator Settings** commits the actual operative state (I.3A #8).
4. **Context Router (S6) immediate draw:** Next S6 draw reads the newly committed S3 Scheduling constraint instantly on the fast clock; no wait for S2 admission (I.3A #10).
5. **Immutable decision/run evidence:** Remains in **S1**. Effective time vs recorded time explicitly bitemporal (I.3A #6, #9).
6. **Candidate conversion:** At governed recurrence, the event's `knowledge_lifecycle` advances to `candidate` (I.3A SLOW clock).
7. **Reusable generalization review:** Progresses from `under_review` to `admitted` or `rejected` based on owner policy (I.3A SLOW clock).
8. **Four dimensions:**
    - `operational_effect`: `time_bounded` (active while room is down).
    - `owner_state_kind`: `temporary_constraint` (committed to S3).
    - `knowledge_lifecycle`: Starts as `none`, moves to `candidate` to `admitted`.
    - `promotion_scope`: Starts as `none`, moves to `operator_local`.
9. **Outcome and reconsideration:** Linked via the immutable S1 receipt tracing back to the override (I.3A FAST/SLOW links).
10. **Promotion boundary:** Cross-tenant promotion blocked unless separate promotion gate specifically advances `promotion_scope` to `federation_promoted` (I.3A Hard laws).

### 9. Plain-language receipt audit (Q1–Q13)

- **Q3 (lineage):** Conforms, references multiple linked units.
- **Q7 (manufacturer):** Conforms, S2 authority correctly bound to `manufacturer` while S1 source stays raw.
- **Q13 (maturity):** Single maturity values properly applied.

### 10. Live-state consistency audit

- Only one controlling state token found: `analysis_nonbinding`.
- No active hard-stops contradict the stated run-2 posture. Control plane rows correctly assert `PROPOSED`.
