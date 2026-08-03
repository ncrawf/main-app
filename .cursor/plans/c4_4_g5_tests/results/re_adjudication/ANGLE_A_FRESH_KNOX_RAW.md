<!-- C4.4 G5 THREE-ANGLE — RAW TEST EVIDENCE — FRESH ANGLE A (constitutional/type adversary)
knox_re_adjudication: VALID · PASS WITH FIVE NAMED RECONCILIATIONS (A-R01..A-R05). No constitutional blocker. See KNOX_RE_ADJUDICATION.md in this folder.
prompt_file: .cursor/plans/c4_4_g5_tests/C44_G5_ANGLE_A_PROMPT.md
prompt_blob: 8e1b7c41e6d8088ba4a4678e7632c43ded0f16c2
target_commit: 13f0d98027da7087428f47bc07363645a5f4e4ab
packet_blob: 7c83e7ef0e7bbc29f14a5341edd1fbfed6bf07c8
received_timestamp: 2026-08-03 (as relayed by Nick)
raw_body_sha256: 77573932534a2e052939ac70b269e9e90c90be05932f109c0961e9cbc6403792
raw_body_sha256_scope: sha of every byte after the single exact-line body marker below (grep -c anchored marker == 1)
executor: fresh Knox-lineage (ChatGPT) repo-connected context — NOT Gemini. (The first run-2 Angle-A attempt was a Gemini context Knox adjudicated NONCONFORMANT TEST; this is the required new-independent-agent rerun against the R2-patched commit; relocated from results/run2_ab_rerun/ANGLE_A_RAW.md by git mv, body byte-unchanged.)
relay_note: preserved exactly as relayed by Nick; body begins at "1. Integrity receipt" and ends at the explicit stop declaration. Tables preserved as-pasted. No cleaning, no reformatting, no summary, no cross-agent contamination, no Opus patching of the body.
-->
<!--END-WRAPPER-->

1. Integrity receipt
Integrity relationship	Independent verification
Orchestration instruction	57707bd055d8eb2545140feaf21b0d6fa924902f:.cursor/plans/c4_4_g5_tests/C44_G5_ANGLE_A_PROMPT.md resolved to blob 8e1b7c41e6d8088ba4a4678e7632c43ded0f16c2. The prompt was read in full and is the controlling assignment.
Target commit	Commit 13f0d98027da7087428f47bc07363645a5f4e4ab resolved and was used for all target-tree reads. No moving branch tip was used.
G5 packet	.cursor/plans/v4_C4_4_disposition_ledger_and_v4_handoff.md at the target commit resolved to exact blob 7c83e7ef0e7bbc29f14a5341edd1fbfed6bf07c8.
G3 architecture substance	The exact architecture object at commit 6c86e2edc3935f5f7bad9c628b4e450837712767 resolved to blob e364acbad3352457eb8c761d287e91787ea71eea.
G3 acceptance carrier	The same path at target commit 13f0d98… resolved separately to carrier blob 76a8cdfc4c75376ec5db1fa658c714a973169426. It was used only to confirm accepted-status lineage, not as the architecture under attack.
G3 dual pin	The expected difference between architecture-substance blob e364acb… and acceptance-carrier blob 76a8cdf… was preserved; it is not an integrity failure.
G4 carrier	.cursor/plans/v4_C4_4_fixture_suite_and_adversarial_results.md at the target commit resolved to exact blob 07f866207836a22c103505835f80aa495a623101.
Execution posture	Read-only inspection only. No repository, branch, file, issue, pull-request, or control-plane mutation occurred.

No pinned integrity relationship failed.

2. Source posture

Read fully

The orchestration prompt and exact Angle-A requirements.
G5 packet blob 7c83e7e…, Part I and Part II through its final passport and stop report.
G3 architecture-substance blob e364acb…, including G2 constitution, §R.1–R.17, §R.CORPUS, fixture traces, and amendment ledger.
G4 carrier blob 07f8662…, including frozen fixtures, raw adversary submission, Knox adjudication, routed finding, and stop report.

Consulted only for status

G3 acceptance-carrier blob 76a8cdf…; it did not supply architecture definitions or mutation blockers.

Automatically injected or tool-operational context outside the pinned read set

System-level ChatGPT, tool-use, citation, safety, current-date, and artifact instructions.
General developer instructions, including connector routing and progress-update requirements.
OMNI/Knox IV project framing, boot rules, source-discipline rules, and project conversation context.
KNOX_II_FULL_OPERATING_INSTRUCTIONS_v3_UPDATED.md.
_KNOX_STRATEGIC_READ_PROMPT.md.
wave-2_source_scaffolding_654989a0.plan…md.
Project conversation history and inferred user/project memories supplied by the harness.
The current user message and its explicit completion checklist.
The GitHub connector skill and connector schemas used solely to perform immutable file retrieval.
File-search and connector metadata associated with the above materials.

None of those outside materials supplied an architectural definition, blocker, defect, type judgment, or conclusion below. No finding was influenced by external boot context. No additional repository file or web source was opened.

3. Mutation ledger
Mutation	Enabling text attacked	Concrete sequence and affected distinction	Result and exact blocker	Candidate severity, correction, confidence
C44-A-001 — Dual incompatible primary subject domains	I.4 declares primary_subject_domain exactly once while permitting secondary_domain_tags[].	A patient near-miss is asserted to be equally and simultaneously clinical and risk as two primary values. This attacks I.4 Subject cardinality and the prohibition on slash-combined primaries.	Does not survive. I.4 requires exactly one primary subject and permits zero-to-many secondary domain tags. The unit is representable as primary_subject_domain=clinical · secondary_domain_tags=[risk], or as two lineage-linked units where the meanings truly differ.	no_defect_found. No correction. High confidence: the cardinality and secondary-tag escape valve are explicit.
C44-A-002 — Provider preference becomes clinical doctrine	I.4 example 2: provider preference is authority_class=principal_assertion with use_ceiling=advisory.	A provider saves an acne-management preference; retrieval repeatedly exposes it; an implementation treats it as required clinical doctrine. This attacks S2/S3 separation and adoption-time normativity.	Does not survive. The provider assertion remains advisory S2 knowledge. I.4 states that operative required/prohibited force never resides in S2 and requires an explicit S3/Settings adoption link. P05 and Q3 separately state that provider preference is not clinical doctrine.	no_defect_found. No correction. High confidence: both type and use ceiling are explicit.
C44-A-003 — Vendor manual becomes mandatory merely because it is in S2	I.4 example 7 gives a vendor manual use_ceiling=executable_candidate; Q7 says vendor documentation is not the current formulary.	A manufacturer manual is admitted to S2 and then treated as mandatory operating policy without owner adoption. This attacks S2 acceptance versus S3 operative state.	Does not survive. executable_candidate is a ceiling, not operative force. Part I expressly requires a separate owner-state adoption link before required/prohibited behavior exists. The owner may create current inventory, formulary, configuration, or policy in S3; the manual itself stays manufacturer-origin reference material.	no_defect_found. No correction. High confidence.
C44-A-004 — Public source receives operator-local authority	I.4 permits independent admission_scope values including operator_local and public_reference.	An operator locally admits a public article and then relabels its authority as institutional_record, laundering local admission into operator-origin authority. This attacks Origin-axis independence and authority provenance.	Does not survive. Local admission may change where a unit is governed, but not who originated or vouched for it. origin_party, admission_scope, source_kind, and authority_class are independent; literature remains publisher_or_journal, a guideline remains guideline_body, and a regulator source remains regulator. A separate operator assertion or adopted policy requires its own lineage-linked unit or S3 commit.	no_defect_found. No correction. High confidence: the attempted mutation conflates independent axes.
C44-A-005 — Artifact custody mistaken for S2 admission scope	I.4: “admission_scope is governed S2 admission scope, not S1/D7 artifact custody.”	An object stored by an operator custodian is automatically assigned admission_scope=operator_local and considered accepted reusable knowledge. This attacks S1 custody versus S2 admission.	Does not survive. S1 custody and S2 admission are separate constitutional transitions with separate owners and gates. G3 independently says custody is not authority and R.8 requires a reservoir review_gate; storage does not accept knowledge.	no_defect_found. No correction. High confidence.
C44-A-006 — S2 unit self-grants access through intrinsic visibility	I.4 replaces intrinsic visibility with access_policy_refs[] and default-deny, access-time composition.	An S2 unit carries visibility=all_operators and thereby grants access to itself without Federation/RBAC/consent policy. This attacks custody/knowledge admission versus access authority.	Does not survive. Visibility is not an intrinsic unit-owned right. Access is composed at use time from referenced policies, active principal role, purpose, grant, consent, and jurisdiction. The unit cannot self-authorize or self-grant.	no_defect_found. No correction. High confidence.
C44-A-007 — Network Foundry silently pools operator-private knowledge	I.6 network profile permits only governed, promoted network units; I.5 and the membrane law prohibit silent extraction of private alpha.	Foundry maintenance scans operator-local playbooks, creates a platform-common derivative, and exposes it to another operator without a promotion transaction. This attacks principal isolation, membrane law, and Foundry authority ceiling.	Does not survive. Foundry maintenance can propose but cannot promote. Network learning receives only explicitly governed derivatives; technical processing gives no reuse right; operator-private alpha cannot become platform-common by silent extraction.	no_defect_found. No correction. High confidence.
C44-A-008 — Simulation output becomes operative truth	I.7: simulation specification, run, and output are internally generated S1 artifacts; evaluation/release state belongs to Platform E&V or Build OS; an admitted lesson may enter S2 but does not become S3 automatically.	A synthetic cohort predicts a policy benefit; the generated output is directly committed as clinical, patient, product, or operating truth. This attacks S1/S2/S3 separation and simulation authority.	Does not survive. Simulation output remains S1 evidence. Generalized learning must pass S2 admission, and policy/product/clinical state still requires its owning S3 commit. The Simulation capability itself owns no truth and is outside C4.4 as a future bounded arc.	no_defect_found. No correction. High confidence.
C44-A-009 — Foundry or Agent Runtime commits owner-state	I.6: Foundry machinery proposes/compiles and Agent Runtime executes within grants; neither owns S1–S6. G3 R.12 independently prohibits Foundry or runtime actors from committing canonical governance or another domain’s state.	A maintenance agent detects a pattern and writes an operator policy or Clinical-Memory assertion directly. This attacks owner-state and no-self-commit boundaries.	Does not survive. The candidate must route to the exact owning domain, Settings owner, or governance gate. Runtime-Ops may commit only its bounded runtime-operational state; that exception does not authorize policy, clinical, business, or governance truth.	no_defect_found. No correction. High confidence.
C44-A-010 — Appendix contradicts controlling Part I	Part II §G5-4 says: “S1 (authority_class=manufacturer) → S2…” Part I I.4 and Q7 say authority_class applies to the admitted S2 unit, while raw S1 carries manufacturer-origin metadata.	A vendor manual lands as raw S1. The appendix assigns the S2 coordinate authority_class=manufacturer directly to S1, making custody evidence carry reusable-knowledge authority before admission. Separately, App-A’s legend promises subject · form · admission_scope · authority_class · use_ceiling, but eleven asserted S2 rows omit one or more required values.	Survives. The §G5-4 sentence directly violates Part I’s S1/S2 type boundary and Q7’s explicit correction. The incomplete App-A rows also cannot be fully checked against I.4’s exact-one and use-ceiling rules.	major_candidate. Smallest correction: replace the §G5-4 phrase with “S1 artifact carrying manufacturer-origin metadata → admitted S2 unit with authority_class=manufacturer”; complete the five-coordinate tuple in every S2-bearing P row or explicitly state “varies by admitted unit; exactly one required.” High confidence: the contradiction is literal.
C44-A-011 — Correction or revocation erases historical lineage	R.14 requires flag-not-rewrite; R.15 separates withdrawal, access revocation, lawful deletion, and recipient-local reconsideration.	A source is withdrawn; prior accepted knowledge, committed actions, and recipient history are erased or remotely rewritten. This attacks temporal reconstruction and sovereign owner authority.	Does not survive. Correction is additive; original receipt, accepted state, actions, and later reconsideration remain reconstructable. Across sovereignty boundaries, the originator sends a governed withdrawal/deletion event but cannot rewrite another owner’s lawful S1/S2/S3 state.	no_defect_found. No correction. High confidence.
C44-A-012 — Coordinate requires slash-combined or compound enum values	I.4 provides one primary plus zero-to-many secondary values for Subject and Content.	A real patient near-miss is both clinical and risk-oriented, and both a lesson and pattern. The attacker attempts subject=clinical/risk · form=lesson/pattern. This attacks exact cardinality and representability.	Does not survive. It is represented without compound enums as primary_subject_domain=clinical · secondary_domain_tags=[risk] · primary_semantic_form=lesson · secondary_forms=[pattern]. If two meanings have different authority or use ceilings, they become two lineage-linked units.	no_defect_found. No correction. High confidence: the example is expressly represented in I.4.
C44-A-013 — Operational override collapses into memory or one scope field	I.3A defines a fast owner-state clock, a slower learning clock, and four independent dimensions: operational_effect, owner_state_kind, knowledge_lifecycle, and promotion_scope.	Scheduling agent proposes X; clinic manager rejects X because a room is unavailable; the attacker either waits for S2 before honoring the override, stores the reason only in runtime memory, or encodes the whole event as one value such as scope=temporary_condition.	Does not survive. Scheduling S3 commits the current local constraint immediately; immutable S1 evidence preserves proposal, authority evaluation, actual override, reason, versions, references, and both times; the next S6 draw sees S3 immediately; S2 begins only later as a candidate. The four dimensions cannot be replaced by one mutually exclusive field. Full trace appears in §8 below.	no_defect_found. No correction. High confidence: I.3A directly specifies the required trace and reverse-collapse prohibition.
4. Failed-mutation ledger
Mutation	Constitutional text that blocked it	Owner or gate	Failure evidence that would expose a violating implementation
C44-A-001	Exactly one primary_subject_domain; secondary meanings go in secondary_domain_tags[].	S2 admission/type validation	A stored unit containing two primary subject values or a slash-combined primary.
C44-A-002	principal_assertion plus use_ceiling=advisory; required force needs an explicit S3/Settings adoption link.	Clinical-policy or other exact owner-state gate	A provider preference marked required with no owner-state adoption record.
C44-A-003	S2 executable_candidate is not operative; vendor document is not current formulary/configuration.	D6/inventory/Settings or other owning domain	Mandatory behavior pointing only to the S2 manual and no S3 adoption.
C44-A-004	admission_scope does not change origin or authority class.	S2 review gate; later owner adoption if warranted	A third-party public source relabeled institutional_record without a separate local assertion/adoption lineage.
C44-A-005	S1 custody is not S2 admission; R.8 has a separate acceptance gate.	S1 custody governance and S2 reservoir owner	Stored bytes appearing as accepted S2 solely because OMNI/operator holds them.
C44-A-006	access_policy_refs[] are externally governed and evaluated at access time; default deny.	Identity/Federation/RBAC/D7/consent composition	An intrinsic visibility value granting access without an active external policy/grant.
C44-A-007	Foundry proposes; private alpha does not cross principals without governed promotion.	Operator owner plus network-promotion governance	Cross-tenant derivative lacking a promotion receipt, consent basis, membrane evaluation, and lineage.
C44-A-008	Simulation output is S1; evaluation is Platform E&V/Build OS owner-state; domain truth needs its owner.	Platform E&V/Build OS plus eventual owning-domain gate	A simulation run ID directly cited as the authority for committed patient, policy, or product truth.
C44-A-009	Foundry/Runtime own no care, business, policy, or canonical governance truth.	Exact owning domain, Settings, or governance control-plane gate	Direct write from maintenance/runtime actor into another owner’s canonical state without candidate/adoption evidence.
C44-A-011	Additive supersession, flag-not-rewrite, recipient-local reconsideration, as-of preservation.	S1/S2/S3 owners plus Federation and reconsideration routes	Missing original version, missing action-at-time lineage, or remote overwrite of a recipient’s lawful state.
C44-A-012	Primary-plus-secondary decomposition and lineage-linked-unit option.	S2 type validator/review gate	Slash-combined primary enum or a unit whose different authority/use meanings were improperly merged.
C44-A-013	Fast S3/S1/S6 clock is independent of slow S2 learning; all four dimensions are orthogonal.	Scheduling domain, S1 evidence custody, Context Router, later S2 review/promotion owners	Clinic cannot honor its state until S2 review; runtime memory is treated as durable authority; or one scope value replaces the four dimensions.
5. Complete I.4 worked-example conformance table

The declared type law is: exactly one primary Subject and Content value; zero-to-many secondary values; independently typed Origin coordinates; use_ceiling in S2; and operative force only through explicit S3/Settings adoption.

I.4 example	Subject coordinate	Content coordinate	Origin/authority/use coordinate	Independent conformance result
1. Guideline	primary_subject_domain=clinical; no incompatible second primary.	primary_semantic_form=synthesis; secondary_forms=[claim].	third_party · public_reference · real_world · synthesized · source_kind=guideline · authority_class=guideline_body · use_ceiling=advisory.	Conforms. Exactly one primary per cardinality; authority and source kind remain distinct.
2. Provider acne preference	clinical.	procedure.	first_party · principal_local · real_world · reported · authority_class=principal_assertion · use_ceiling=advisory.	Conforms. Provider assertion cannot become doctrine without a separate adoption link.
3. Federation SOP, mandatory locally	operations.	procedure.	first_party · federation_shared · real_world · reported · authority_class=institutional_record · use_ceiling=executable_candidate.	Conforms with required boundary. Mandatory force is not in S2; it comes from the explicit S3/Settings adoption link named in the example.
4. Patient near-miss lesson	Primary clinical; secondary [risk].	lesson.	first_party · operator_local · real_world · observed · institutional_record · advisory.	Conforms. The clinical/risk combination uses primary-plus-secondary rather than two primaries.
5. Fulfillment failure lesson	Primary operations; secondary [risk].	lesson.	first_party · operator_local · real_world · observed · institutional_record · advisory.	Conforms. No compound primary or authority collapse.
6. Build-agent postmortem	build.	lesson.	first_party · OMNI_internal · real_world · observed · institutional_record · advisory.	Conforms. It remains build knowledge, not automatic canonical governance state or runtime skill.
7. Vendor manual	product.	procedure.	third_party · operator_local · real_world · reported · source_kind=manual · authority_class=manufacturer · use_ceiling=executable_candidate.	Conforms. Operator-local admission does not convert manufacturer authority into operator authority; mandatory force still requires owner adoption.
8. CVE	risk.	claim.	third_party · public_reference · real_world · reported · source_kind=vulnerability_record · authority_class=other_governed · advisory.	Conforms. The issuer is not incorrectly classified as a regulator or policy source.
9. Brand-voice pattern	brand.	pattern.	first_party · OMNI_internal · real_world · synthesized · institutional_record · descriptive_only.	Conforms. Descriptive brand pattern has no operative owner-state force by storage alone.
10. Simulated-population lesson	clinical.	lesson.	first_party · OMNI_internal · simulated · inferred · source_kind=simulation_run · authority_class=model_output · descriptive_only.	Conforms. Reality basis and authority ceiling prevent simulation output from becoming patient or policy truth.
11. Meta-analysis	clinical.	synthesis.	third_party · public_reference · real_world · synthesized · source_kind=literature · authority_class=publisher_or_journal · advisory.	Conforms. literature remains a source kind, not an authority class.
12. Clinician-wisdom signal	clinical.	Primary claim; secondary [pattern].	third_party · federation_shared · real_world · reported · authority_class=expert_consensus · descriptive_only.	Conforms. The lower use ceiling prevents collective wisdom from silently becoming clinical doctrine.
6. Complete P01–P19 conformance table

App-A says every asserted S2 cell is expressed through the Part-I subset subject · form · admission_scope · authority_class · use_ceiling. It also says generic profile rows must state that a primary value varies by admitted unit and that exactly one is required.

Profile	Actual App-A S2 coordinate	Independent conformance result
P01	n/a (facts ≠ knowledge)	Conforms. No S2 unit is asserted; patient-upload facts route toward an owning S3 gate instead.
P02	subject=clinical; primary form varies by admitted unit with exactly one required; admission_scope=principal_local; authority_class=patient_report or principal_assertion according to the unit; use_ceiling=descriptive_only.	Conforms. Conditional authority alternatives are tied to different asserted meanings, not combined on one unit.
P03	n/a	Conforms. Represented-principal upload authority does not create reusable knowledge or turn the proxy into the subject.
P04	n/a	Conforms. Credential artifact routes to workforce/credential S3, not S2.
P05	Two units: article has subject=clinical · source_kind=literature · authority_class=publisher_or_journal · admission_scope=principal_local; annotation has subject=clinical · form=procedure (or claim) · authority_class=principal_assertion · admission_scope=principal_local · use_ceiling=advisory.	Nonconformant/incomplete. The article unit lacks an explicit primary_semantic_form and use_ceiling. The annotation’s “procedure (or claim)” should be restated as “primary form varies by admitted unit; exactly one required.” Small correction: complete both five-coordinate tuples.
P06	subject=operations · form=procedure · admission_scope=principal_local · authority_class=principal_assertion · use_ceiling=advisory.	Conforms. Historical preference remains advisory and is not active policy.
P07	subject=operations · primary_form=pattern · secondary_forms=[procedure] · admission_scope=operator_local · authority_class=institutional_record.	Nonconformant/incomplete. use_ceiling is absent despite the Matrix-A contract requiring it. No value should be inferred; the author must choose one explicitly.
P08	subject=operations · form=procedure · admission_scope=operator_local · authority_class=institutional_record.	Nonconformant/incomplete. use_ceiling is absent. Active SOP force correctly remains S3, but the reusable S2 unit still needs an explicit ceiling.
P09	subject=operations · form=lesson · admission_scope=operator_local · authority_class=institutional_record.	Nonconformant/incomplete. use_ceiling is absent.
P10	admission_scope=federation_shared · authority_class=institutional_record reference candidates.	Nonconformant/incomplete. No explicit primary subject, primary form, or use ceiling is supplied, and the row does not use the permitted “varies by admitted unit; exactly one required” formulation.
P11	n/a	Conforms. The credential corpus routes to the workforce/credential owner, not S2.
P12	subject=product · primary_semantic_form=procedure · source_kind=manual · admission_scope=operator_local · authority_class=manufacturer.	Nonconformant/incomplete. use_ceiling is absent. I.4’s worked example suggests the intended type may be executable_candidate, but App-A must state it rather than rely on inference.
P13	n/a	Conforms. Current price/formulary state belongs to D6 S3; the historical price sheet remains S1 evidence.
P14	Primary subject varies between operations and clinical, exactly one per unit; admission_scope=OMNI_internal · authority_class=institutional_record.	Nonconformant/incomplete. Primary form and use ceiling are absent. Both may vary by unit, but the row must say so explicitly and preserve exact-one cardinality.
P15	subject=clinical · source_kind=literature · admission_scope=public_reference · authority_class=publisher_or_journal.	Nonconformant/incomplete. Primary semantic form and use ceiling are absent.
P16	subject=build · admission_scope=OMNI_internal · authority_class=institutional_record.	Nonconformant/incomplete. Primary semantic form and use ceiling are absent. Canonical governance state remains S3-role owner-state, but any reusable S2 unit still requires the complete tuple.
P17	No S2 coordinate; delegated to six OMNI actor profiles.	Conforms as non-S2 aggregate. The row describes access/processing roles and expressly says no OMNI actor becomes the data subject or authority over patient/operator material.
P18	admission_scope=federation_shared promoted derivatives only; OMNI-internal materialization is separately typed and lineage-linked.	Nonconformant/incomplete. Primary subject, primary form, authority class, and use ceiling are absent. The row must state that each varies by admitted unit with exactly one primary where applicable.
P19	Primary source_kind varies between literature and policy, exactly one; admission_scope=public_reference; authority class is “per originator.”	Nonconformant/incomplete. Primary subject, primary form, and use ceiling are absent. “Per originator” also needs an explicit exactly-one authority-class rule for each admitted unit.

The App-A defect is systemic but bounded: eleven S2-bearing profile rows—P05, P07, P08, P09, P10, P12, P14, P15, P16, P18, and P19—do not satisfy their own declared five-coordinate presentation contract.

7. Part-I/Part-II contradiction ledger

This ledger was produced by comparing controlling Part-I rules directly with actual Part-II statements, without using §G5-10 change receipts or self-certification.

Test	Part-I rule	Part-II statement tested	Result
A-CON-01 — Manufacturer authority placed on S1	I.4 and Q7: authority_class=manufacturer is an S2 coordinate; raw S1 carries manufacturer-origin metadata only.	§G5-4: “S1 (authority_class=manufacturer) → S2…”	Surviving contradiction · major_candidate. This attributes an S2 authority coordinate to raw custody evidence. Replace with “S1 artifact with manufacturer-origin metadata → admitted S2 unit with authority_class=manufacturer.”
A-CON-02 — App-A coordinate completeness	I.4 exact-one cardinality; Matrix-A’s own contract says every S2 cell supplies subject · form · admission_scope · authority_class · use_ceiling.	Eleven S2-bearing P rows omit one or more of those values.	Surviving contradiction · major_candidate. Part II cannot be independently type-checked against Part I as written. Complete the tuple or explicitly declare unit-dependent values with exact-one cardinality.
A-CON-03 — Represented-principal maturity	Part I separates architecture, contract, and build maturity.	Q2 says contract-draft; Matrix C P03 says contract deferred.	Surviving internal contradiction · minor_candidate. The read set cannot determine which is factually correct. Reconcile to one maturity after checking the Identity/consent contract; do not retain both.
A-CON-04 — Workforce credential implementation maturity	Maturity claims require verified implementation evidence, not contract presence.	Q5 says partial-build; Matrix C P04 says implementation was not verified in this pass and no code/migration pointer was confirmed. P11 later says partial implementation by reference to the same material.	Surviving contradiction · major_candidate. Either provide an exact implementation pointer and harmonize P04/P11/Q5, or change Q5 to no-verified-build.
A-CON-05 — Foundry whole versus maintenance machinery	I.6: OMNI Intelligence Foundry is the integrated composition; maintenance machinery is one proposer/compiler component.	App-D §G5-N.3 contains historical linear-chain discovery language.	Mutation blocked. App-D explicitly labels itself a derivation echo, says Part I controls, rejects the linear chain, and preserves Foundry whole ≠ maintenance machinery. No surviving contradiction.
A-CON-06 — Simulation evaluation as universal S4	I.7: simulation artifacts are S1; evaluation/release state belongs to Platform E&V or Build OS; S4 applies only where external evidence is processed.	App-D’s historical simulation wording and §G5-N.4a placement.	Mutation blocked. The appendix explicitly corrects the prior universal-S4 error and matches Part I. No surviving contradiction.
A-CON-07 — Canonical governance state demoted to S5	G3 Amendment-1 and Part I: canonical control-plane state is committed S3-role owner-state; only generated views are S5.	Part II F-Self and nomenclature routing.	Mutation blocked. The appendix preserves the correction and does not demote canonical governance state to a disposable projection.
A-CON-08 — Retrieval ranking becomes formal policy authority	Part I/G3: retrieved ≠ truth; ranking cannot raise authority or use ceiling; owner gate still required.	G4’s C44-G4-R01 and G5 routing.	No formal-authority contradiction. G4 found a downstream proof obligation over ranking influence, not a hidden S3 committer. G5 preserves that distinction.
8. Operational-override four-dimension trace
8.1 Fast operational clock
Required trace element	Concrete scheduling trace	Exact I.3A owner/type resolution
1. Proposed action and authority evaluation	Scheduling agent proposes X: keep the patient in room A at 10:00. The authority evaluation checks the agent’s capability envelope, manager authority, current Scheduling constraints, consent/purpose, and active policy/configuration versions.	The proposal and authority evaluation become part of the consequential run/decision evidence preserved as an immutable S1 decision/run receipt. They do not become S2 or S3 merely by being proposed. I.3A FAST items 1–2.
2. Actual override, reason, references, and versions	Authorized clinic manager rejects X and selects Y because room A is unexpectedly unavailable. The record includes the manager, actual override/action, reason, room-status/source references, relevant scheduling-policy version, model/endpoint version, prompt/runtime profile where applicable, and current configuration version.	I.3A FAST items 3–7 require actual decision/override, reason, context/source references, policy/model/configuration versions, effective time, recorded time, scope, expiry, and reconsideration trigger.
3. Exact owner that commits current operational state	The Scheduling domain commits the changed appointment/room assignment and the temporary room-unavailable constraint as its owner-state. Where implemented as scheduling configuration, Settings may hold the referenced configuration, but the actual scheduling state remains Scheduling-owned.	Exact home: Scheduling S3 owner-state, not generic “S3 or S1,” not runtime memory, and not S2. I.3A worked override trace expressly uses Scheduling domain S3 for the temporary local constraint.
4. Immediate next S6 draw	The next authorized Context Router request reads current Scheduling S3 and therefore excludes room A immediately.	I.3A FAST item 10: the next S6 draw sees committed owner-state without waiting for S2. Context Router assembles; it does not commit.
5. Immutable evidence and temporal fields	S1 preserves proposal X, authority evaluation, manager rejection, chosen action Y, reason, references, all relevant versions, links to the Scheduling S3 commit, and both times.	Effective time is the interval during which the Scheduling constraint applies and is represented in Scheduling’s owner-state plus the evidence record. Recorded time is when the decision/commit/receipt was durably recorded. The immutable S1 receipt preserves both; later C4.5 work may formalize the record shape without creating a new class.
6. Point at which S2 may begin	One override does not create knowledge. Later, sufficient governed recurrence evidence shows a reusable room-outage handling pattern. A lineage-linked proposal is then created.	At that later point only, knowledge_lifecycle advances from none to candidate. The candidate is an operations lesson with source lineage; the original operational state remains Scheduling S3 and the evidence remains S1.
7. Review before reusable generalization	The candidate enters consequence-tiered review. Review checks recurrence, independence, applicability, contrary cases, burden, and whether the pattern is local or generalizable.	knowledge_lifecycle=under_review, then exactly one of admitted or rejected. Foundry/runtime may propose and assemble evidence; the S2 owner/review gate decides admission.
8. Separate owner-policy adoption	Even an admitted S2 lesson does not alter scheduling behavior. The operator may later adopt it as a local scheduling policy through the Scheduling/Settings governance gate.	That explicit S3/Settings adoption link changes operative owner-state. S2 remains the reusable lesson; S3/Settings carries the current policy/configuration.
9. Outcome and reconsideration	The actual scheduling outcome—successful reassignment, delay, patient impact, or failure—is linked to the original proposal/override receipt and the Scheduling state transition. Later contrary outcomes can trigger reconsideration of the S2 lesson and/or correction of the local policy.	Outcome evidence remains S1 and applicable domain state remains S3. Slow-clock reconsideration identifies dependents but does not rewrite the original decision or action history.
10. Prevention of silent wider promotion	The local override cannot silently become operator-wide, OMNI-common, federation-wide, or network knowledge.	promotion_scope remains none until an explicit promotion/adoption transaction. Operator-local adoption and federation promotion are distinct gates. Technical processing, repeated retrieval, or runtime memory cannot advance that scope.
8.2 Four orthogonal dimensions over time

admission_scope on an S2 unit is not the same field as I.3A promotion_scope; admission into an operator-local review body does not itself mean the knowledge has been promoted into operative operator policy.

Trace phase	operational_effect	owner_state_kind	knowledge_lifecycle	promotion_scope	What changed, and what did not
T0 — proposal only	action_only	action_result	none	none	X is proposed and evaluated. No owner-state change, no reusable knowledge, no promotion.
T1 — manager override committed	time_bounded	temporary_constraint	none	none	Scheduling commits room A unavailable and action Y. S1 receipt is durable; next S6 sees it immediately.
T2 — recurrence candidate created	time_bounded	temporary_constraint	candidate	none	A separate lineage-linked S2 candidate now exists. The original local state does not broaden.
T3 — candidate under review	time_bounded	temporary_constraint	under_review	none	Review is active. Nothing is yet admitted or promoted.
T4a — reusable lesson admitted	time_bounded	temporary_constraint	admitted	none	The lesson is accepted in S2, potentially with admission_scope=operator_local; it is still not operative policy and has not crossed the promotion axis.
T4b — candidate rejected	time_bounded	temporary_constraint	rejected	none	Alternative branch: no reusable lesson is accepted; the original operational history remains.
T5 — explicit local policy adoption	continuing	policy	admitted	operator_local	Scheduling/Settings owner explicitly adopts a continuing local policy through an S3 adoption link. This is the first operator-local operative generalization.
T6 — proposed federation sharing	continuing	policy	admitted	federation_candidate	A separately governed derivative is proposed for federation sharing; recipient authority and membrane review remain outstanding.
T7 — governed federation promotion	continuing	policy	admitted	federation_promoted	Promotion occurs only after the separate federation/network gate. Recipients still admit locally; originator promotion does not remotely commit recipient policy.
T8 — later supersession	Current effect as owner decides	Current owner-state kind	superseded	Existing scope marked and reconsidered	New evidence may supersede the lesson. Historical override, policy-at-time, actions, and prior promotion evidence remain reconstructable.
8.3 Reverse mutation: force all four questions into one field

Attempted record:

scope = temporary_condition

That single value cannot answer:

whether operational effect is one action, time-bounded, or continuing;
whether the owner-state is an action result, temporary constraint, configuration, or policy;
whether reusable knowledge is absent, a candidate, under review, admitted, rejected, or superseded;
whether anything has been promoted nowhere, locally, to a federation candidate, or to a federation-promoted state.

I.3A blocks this reverse mutation by requiring one independent value on each dimension and permitting them to change independently over time. The mutation therefore does not survive.

9. Plain-language receipt audit: Q1–Q13
Audit row	Support disposition	Single maturity value	Independent consistency result
Q1 — Patient self-upload	YES	partial-build	Consistent. Canonical manifest routing has partial implementation evidence, while the live portal remains on a legacy path. The note does not claim canonical end-to-end production behavior.
Q2 — Represented family/guardian/caregiver	YES WITH GATES	contract-draft	Maturity inconsistency found. The support logic is coherent—originator and represented patient remain distinct—but Matrix C P03 says contract deferred, not contract-draft. minor_candidate: reconcile to one maturity after checking the Identity/consent contract.
Q3 — Provider professional library	YES	architecture-covered	Receipt itself is coherent. It correctly requires two lineage-linked units: publisher/journal article and provider assertion, and says provider preference is not clinical doctrine. App-A P05 nevertheless leaves the article tuple incomplete; that is reported in §6 rather than silently imputed here.
Q4 — Provider portability	YES WITH GATES	architecture-covered	Consistent. Only provider-owned professional material travels; employer policy, private alpha, licensed bytes, and patient-derived information do not.
Q5 — Employee credentials/training	YES	partial-build	Maturity contradiction found. Matrix C P04 says implementation was not verified and no code/migration pointer was confirmed, while Q5 claims partial build. major_candidate: either supply exact implementation evidence and harmonize P04/P11/Q5, or use no-verified-build.
Q6 — Hospital/federation institutional corpus	YES	contract-draft	Consistent. Federation contract exists as a draft; the OMNI-native corpus-admission envelope is explicitly unbuilt.
Q7 — Vendor/device/robot manuals	YES	architecture-covered	Receipt itself is correctly typed. Raw S1 has manufacturer-origin metadata; authority_class=manufacturer applies only to the admitted S2 unit; vendor document is not current formulary. The conflicting §G5-4 sentence is separately reported.
Q8 — OMNI corporate knowledge families	YES	no-verified-build	Consistent. Architectural homes are distinguished, while no governed end-to-end build is claimed.
Q9 — OMNI corporate default visibility	NO	architecture-covered	Consistent. “NO” is the supported architectural rejection: no privileged OMNI visibility tier. Architecture maturity can validly describe a represented prohibition.
Q10 — Prior-clinic/cross-federation visibility	YES WITH GATES	contract-draft	Consistent. Default is isolated; visibility requires permeability policy, continuity policy, consent, attestation, and owner authority.
Q11 — Patient-principal estate independent of one operator	TARGET-DEFERRED	no-verified-build	Consistent. Direction is accepted in principle, while cross-namespace identity and uplift mechanics remain unresolved and unbuilt.
Q12 — Wiki/RAG/vector architecture	YES	architecture-covered	Consistent. S5 projections are non-authoritative and retrieval systems are replaceable rails; no implementation claim is made in this row.
Q13 — Wiki/RAG/vector verified implementation	TARGET-DEFERRED	no-verified-build	Consistent and single-valued. It does not combine multiple maturity values; partial source-ingestion evidence is correctly distinguished from the complete governed retrieval capability.

The Q table contains two maturity conflicts: Q2 and Q5. Q3, Q7, and Q13 satisfy the three mandatory targeted checks.

10. Live-state consistency audit

The following string is copied verbatim solely as the packet’s required complete lifecycle status. Its embedded adjudication tokens are historical/current-state identifiers from the source, not a verdict issued by this response:

G1_closed · G2_closed · G3_ACCEPTED · G4_KNOX_ADJUDICATED_PASS_30_OF_32 · G5_RUN2_HOLD · RUN2_A_NONCONFORMANT_RERUN_REQUIRED · RUN2_B_NONCONFORMANT_NOT_EVALUATED_WEB_RERUN_REQUIRED · RUN2_C_PASS_6_OF_6_CARRIED_FORWARD · R2_METADATA_STATE_PATCH_APPLIED · analysis_nonbinding · not_accepted · not_promoted · not_merged · outer_checkpoint_#15_UNCHANGED

That exact complete status appears in the packet passport.

State surface	Audit result
Passport/status line	Carries the complete controlling lifecycle-status string above.
§G5-8 Determination	Carries the same run-2 state at its G5-specific scope: A rerun required, B web-capable rerun required, C carried forward, R2 state patch applied, not accepted/promoted/merged. It does not reverse the passport state.
Current hard-stops block	Correctly authorizes only fresh read-only Angle A and Angle B reruns, carries Angle C forward, prohibits self-adjudication and repository writes, and does not retain “no rerun,” “no push,” or “no hand-off” as current law. Historical authoring stops are explicitly labeled superseded.
Footer passport and stop report	Semantically matches the complete current state and names the A+B-only rerun posture.
PROPOSED catalog row in §G5-9	Stale competing declaration found. Although labeled conditional and “not a current-state declaration,” its parenthetical still says “today: G5_RUN1_HOLD · BOUNDED_POST_TEST_PATCH_APPLIED · PREFLIGHT_PATCH_APPLIED · RUN2_ARMED.” That “today” value is superseded by the R2 state.
PROPOSED charter-status row in §G5-9	Same stale declaration. It repeats the old run-1/RUN2_ARMED value as “today,” despite the packet’s current A+B-only rerun state.

Live-state finding: there is one controlling current-state token, and the live hard stops are consistent with the authorized Angle-A rerun. However, the two §G5-9 PROPOSED control-plane parentheticals preserve a stale status value. Because they are expressly conditional, they do not displace the controlling status; they remain a minor_candidate state-hygiene defect.

Smallest bounded correction: delete both stale “today: …RUN2_ARMED” parentheticals and leave only:

on acceptance, synchronize to the then-current controlling lifecycle-status string

No architecture, taxonomy, matrix, comparator, or proof-program change is required for that correction.

11. Explicit stop declaration

ANGLE A COMPLETE. NO VERDICT ISSUED. AWAITING KNOX ADJUDICATION.
