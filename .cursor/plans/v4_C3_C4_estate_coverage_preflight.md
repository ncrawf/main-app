# v4 — C3/C4 Estate Coverage Preflight (Gate B) — zero-unknown routing manifest

Document type: `analysis` / coverage_manifest · Authority: `analysis_nonbinding` (`GRD-036`) — **NOT architecture, NOT a handoff, NOT spine/thesis/contract/Care-capture work.** A bounded **exhaustive-accounting / selective-depth** routing check over the existing C3/C4 estate, produced immediately after **Lane 2 ACCEPTED (Nick+Knox 2026-07-14)**. Created 2026-07-14. Review gate: `user_knox_required`. **★ STATUS: Gate-B enumeration PASS (Knox 2026-07-14); routing packet CONDITIONAL → this commit applies the Knox routing-normalization patch (provenance · F-family · D-coverage-first · C3.8 backward-trace · Lane-1 packet · Polaris/Accountability routing · handoff precedence · integrity counts) → Gate B ACCEPTED on this commit. Next transaction = Lane 1 in a FRESH context from the corrected §4 packet.**

**Purpose (Nick's question, Knox's control):** account for **every** C3/C4 file so the eventual Care model cannot silently ignore prior arc work — **without** rereading 61 planning files indiscriminately. Law = **exhaustive accounting; selective depth.** Depth taken here = headers / status / TOC / artifact-use maps / final-disposition / routing sections only (+ named bounded excerpts). No scenario bodies, trace matrices, source packets, or architecture prose were read.

**Routing authorities used (in order):** controlling `HANDOFF_2026-07-13`; read-graph #9a; C2 Source-Base Declaration; each arc's artifact-use map + controlling terminus (C3.5→G4 §11+G4.1 · C3.6→G §8.5 · C3.7→G §7 · C3.8→G4 primary, G1b/G2/G3 = pressure lineage not canon); Late Builder `AR-C35–AR-C38` + `AR-XWALK` (arc-terminus leakage audit = clean/routed); file header/status/TOC; filename = navigation hint only. **⚠️ PROVENANCE (corrected):** the prior Late-Builder AR-DONE audit verified that the original arcs executed their own routing and did **not leak** — that does **NOT** substitute for the current Care audit's **Lane-3 parent reads**. Lane 2 covered legacy/doctrine lineage; the C3.5/6/7 deep-trace mechanics + C3.8 G1–G4 remain **parent-unverified Lane-3 material** (standing handoff §E). "No historical leakage" ≠ "enough present depth to pressure the Care model." This preflight ROUTES those bodies (selective depth) for Lane 3; it does not claim they were consumed in Lane 2.

**Bounded excerpts read for classification (named per depth rule):** C4.1 Polaris header/§0/§1 (naming LOCK + alignment core); C4.2 header (`shell_pending_population`); C3 method-recovery header (`passed_reviewed` gate). All other rows classified from prior-audit knowledge + termini + headers.

---

## §1 — ZERO-UNKNOWN MANIFEST (61 files; one row each)

Schema: **path · role · authority/status · controlling terminus · current parent-read depth · Care relevance · exact Care question it may change · required later depth · lane · disposition**

### C3.1 + C3 method (coverage/method controls)
| path | role · authority · terminus · read-depth · Care-relevance · question · required-depth · lane · **disposition** |
|---|---|
| `v4_C3_1_lens_coverage_audit.md` | lens/coverage audit · `analysis_nonbinding` · self · headers · LOW (coverage control) · "were all lenses applied?" · headers-only · **Lane 6** · **control_only** |
| `v4_C3_method_recovery_ratification_note.md` | C3 comprehension/method gate · `analysis_nonbinding` `passed_reviewed` · self · header read · LOW (method) · none (method, not Care law) · none · **Lane 6** · **control_only** |

### C3.5 (hospital/EHR gravity — 17)
| path | classification |
|---|---|
| `v4_C3_5_KICKOFF_PROMPT.md` | execution prompt · nav · G4 · none · LOW · none · none · Lane 3 · **navigation_only** |
| `v4_C3_5_hospital_ehr_gravity_pressure_test_plan.md` | arc plan · nav · G4 · none · LOW · none · none · Lane 3 · **navigation_only** |
| `v4_C3_5A_existing_pressure_test_inventory.md` | asset inventory · control · G4 · none · LOW · none · headers · Lane 3 · **control_only** |
| `v4_C3_5B_hospital_ehr_reality_map.md` | **real-world hospital/EHR reality map** · reality-map · G4 · not-in-Lane-2 · **HIGH** (movement/administration split, degraded mode, rights/disclosure, P35, continuity — real-world mechanics to pressure Care) · "does Care survive hospital EHR gravity/authority/continuity?" · **direct** · Lane 3 · **direct_read_required** |
| `v4_C3_5C_actor_department_authority_map.md` | **actor/department authority map** · authority-map · G4 · not-in-Lane-2 · **HIGH** (who-may-act-where authority topology) · "does Care's authority model hold across hospital actors/departments?" · **direct** · Lane 3 · **direct_read_required** |
| `v4_C3_5D_high_pressure_scenario_library.md` | scenario corpus · G4 · none · MED · scenario pressure on REV-141/167/authority · **coverage-manifest/scenario-taxonomy/selection-rationale = direct-read FIRST (control against cherry-picking), THEN selected scenario bodies** · Lane 3 · **selected_trace_required** |
| `v4_C3_5E_deep_trace_matrix.md` | deep-trace matrix · G4 · none · MED · trace-level Care pressure · **selected declared load-bearing traces** · Lane 3 · **selected_trace_required** |
| `v4_C3_5F_omni_disposition_gap_matrix.md` | **core disposition/gap matrix** · G4 · none · **MED-HIGH** (confirm/extend/net-new adjudication mechanism + tension depth the G4 verdict can't fully prove) · REV-141/167/authority/false-closure dispositions · **direct read of Care-relevant rows** · Lane 3 · **direct_read_required** |
| `v4_C3_5F2_superiority_and_primitive_sufficiency_matrix.md` | F-expansion · G4 · none · LOW-MED · primitive-sufficiency · via G4 · Lane 3 · **represented_by_controlling_terminus** |
| `v4_C3_5F3_adversarial_superiority_expansion.md` | F-expansion · G4 · none · LOW-MED · via G4 · Lane 3 · **represented_by_controlling_terminus** |
| `v4_C3_5F4_network_research_digitaltwin_governance.md` | F-expansion · G4 · none · LOW · via G4 · Lane 3 · **represented_by_controlling_terminus** |
| `v4_C3_5F5_topology_continuity_enterprise_ops_closure.md` | F-expansion (continuity/topology binding) · G4 · none · MED (continuity binding — Care-relevant) · continuity/topology binding vs Care continuity · **selected trace** · Lane 3 · **selected_trace_required** |
| `v4_C3_5G_v4_implications_and_handoff.md` | G handoff · superseded-into-G4 · none · LOW · via G4 · Lane 3 · **represented_by_controlling_terminus** |
| `v4_C3_5G4_handoff_and_verdict.md` | **CONTROLLING TERMINUS (G4 §11 artifact-use map + verdict)** · `analysis_nonbinding` · self · Late-Builder AR-C35 clean · HIGH (routes which C3.5 bodies reopen) · controls Lane-3 C3.5 selection · **headers+§11 map+verdict** · Lane 3 · **control_only** |
| `v4_C3_5G4_1_contract_deskcheck_addendum.md` | G4.1 desk-check (terminus companion) · self · AR-C35 · MED · contract desk-check · **disposition section** · Lane 3 · **control_only** |
| `v4_C3_5_convergence_check_pre_G4.md` | pre-G4 convergence (superseded by G4) · none · LOW · none · none · Lane 3 · **superseded_historical** |
| `v4_C3_5_topology_reconciliation_note.md` | topology/method note · control · G4 · MED (topology closure) · "topology/continuity vocab" · disposition section · Lane 3/6 · **control_only** |

### C3.6 (oncology/trial systems — 7)
| path | classification |
|---|---|
| `v4_C3_6A_existing_asset_inventory.md` | inventory · control · G(§8.5) · LOW · none · headers · Lane 3 · **control_only** |
| `v4_C3_6B_oncology_trial_systems_reality_map.md` | **oncology/trial reality map** · G(§8.5) · not-in-Lane-2 · **HIGH** (field-level source authority, protocol, knowledge partitions, identity/custody chains) · "does Care hold under oncology/trial source-authority + custody?" · **direct** · Lane 3 · **direct_read_required** |
| `v4_C3_6C_source_authority_truth_plane_map.md` | **source-authority / truth-plane map** · G(§8.5) · in-Lane-2-packet · **HIGH** (field-level source authority = tracked_clinical_object/REV-167 + CM authority pressure) · "REV-167 tracked-object + source-authority" · **direct** · Lane 3 · **direct_read_required** |
| `v4_C3_6D_scenario_library.md` | scenario corpus (contains the coverage manifest + scenario families) · G(§8.5) · MED · **coverage-manifest/families = direct-read FIRST, THEN selected scenario bodies** · Lane 3 · **selected_trace_required** |
| `v4_C3_6E_deep_trace_matrix.md` | deep trace · G(§8.5) · MED · selected declared traces · Lane 3 · **selected_trace_required** |
| `v4_C3_6F_disposition_gap_matrix.md` | **core disposition/gap matrix** · G(§8.5) · none · **HIGH** (dense confirm/extend/net-new for trial_protocol, outcome/RWE ownership, P35 placement, ownership-ladder posture — mechanism depth beyond the G verdict) · REV-167/P35/authority/ownership · **direct read of Care-relevant rows** · Lane 3 · **direct_read_required** |
| `v4_C3_6G_handoff_and_verdict.md` | **CONTROLLING TERMINUS (G §8.5 artifact-use map + verdict)** · self · AR-C36 clean · HIGH (routes C3.6 reopen) · **headers+§8.5 map+verdict** · Lane 3 · **control_only** |

### C3.7 (oncology trial-access wedge — 8)
| path | classification |
|---|---|
| `v4_C3_7_oncology_trial_access_wedge_plan.md` | arc plan · nav · G(§7) · LOW · none · none · Lane 3 · **navigation_only** |
| `v4_C3_7A_existing_asset_inventory.md` | inventory · control · G(§7) · LOW · headers · Lane 3 · **control_only** |
| `v4_C3_7B_trial_access_accrual_market_reality.md` | **trial-access/accrual market reality** · G(§7) · not-in-Lane-2 · **MED-HIGH** (recommendation-integrity, honest-null, navigation obligations, recognition≠action) · "does Care's recommendation-integrity/honest-null hold?" · **direct** · Lane 3 · **direct_read_required** |
| `v4_C3_7C_access_funnel_ownership_ladder_map.md` | **access-funnel ownership ladder** · G(§7) · not-in-Lane-2 · **MED-HIGH** (navigation/ownership obligations) · "navigation-obligation + ownership-ladder vs Care ownership" · **direct** · Lane 3 · **direct_read_required** |
| `v4_C3_7D_scenario_library.md` | scenario corpus · G(§7) · MED · **coverage-manifest/families = direct-read FIRST, THEN selected scenario bodies** · Lane 3 · **selected_trace_required** |
| `v4_C3_7E_deep_trace_matrix.md` | deep trace · G(§7) · MED · selected declared traces · Lane 3 · **selected_trace_required** |
| `v4_C3_7F_disposition_gap_matrix.md` | **core disposition/gap matrix** · G(§7) · none · **MED-HIGH** (recommendation-integrity/honest-null/navigation-obligation dispositions + mechanism depth beyond the G verdict) · recommendation-integrity/navigation-obligation vs Care · **direct read of Care-relevant rows** · Lane 3 · **direct_read_required** |
| `v4_C3_7G_handoff_and_verdict.md` | **CONTROLLING TERMINUS (G §7; largest finding graduated to signed-off REV-184)** · self · AR-C37 clean · HIGH · **headers+§7 map+verdict** · Lane 3 · **control_only** |

### C3.8 (enterprise AI-OS convergence — 7)
| path | classification |
|---|---|
| `v4_C3_8_enterprise_ai_os_convergence_pass_plan.md` | arc plan · nav · G4 · LOW · none · none · Lane 3 · **navigation_only** |
| `v4_C3_8_G1a_source_shortlist_and_axis_coverage.md` | source shortlist/axis coverage · control · G4 · LOW · none · headers · Lane 3 · **control_only** |
| `v4_C3_8_G1b_KICKOFF_PROMPT.md` | execution prompt · nav · G4 · none · none · Lane 3 · **navigation_only** |
| `v4_C3_8_G1b_source_concept_reality_map.md` | **intermediate pressure artifact (NOT canon)** · G4-owns-routing · **EXACT backward-trace only** (open only the G1b source-concept row cited by a traced G2 row) · enterprise source-concept reality · **selected_trace via G4→G3→G2→G1b chain** · Lane 3 · **selected_trace_required** |
| `v4_C3_8_G2_convergence_and_translation_map.md` | **intermediate pressure artifact (NOT canon)** · G4-owns-routing · **EXACT backward-trace only** (open only the G2 tension/translation row cited by a traced G3 breaker) · convergence/translation · **selected_trace via G4→G3→G2 chain** · Lane 3 · **selected_trace_required** |
| `v4_C3_8_G3_doctrine_breakers.md` | **intermediate pressure artifact (NOT canon)** · G4-owns-routing · **HIGH** (48 breakers incl. **tenant/operator-ownership vs patient-authority-over-care-truth = mandatory first chain**) · "tenant/operator vs patient authority over care truth" · **selected_trace: open the exact breaker(s) an unresolved G4 Care-row points to** · Lane 3 · **selected_trace_required** |
| `v4_C3_8_G4_disposition_ledger_and_handoff.md` | **CONTROLLING TERMINUS / primary disposition (G4)** · self · AR-C38 exemplary-clean · HIGH (routes C3.8; G1b/G2/G3 = pressure lineage under it) · **headers+G4 disposition ledger** · Lane 3 · **control_only** |

### C3.9 + C4 (20 files = future/method/sibling/core/coverage)
| path | classification |
|---|---|
| `v4_C3_9_plastics_medspa_care_setting_pressure_test.md` | later pressure arc · `shell_pending_population` · none · none · LOW-now · none-now · none · — · **future_not_current** |
| `v4_C4_0_depth_preservation_protocol.md` | depth-protocol (governs synthesis depth) · `analysis_nonbinding` · self · headers · LOW (method control) · none (governs later depth decisions) · headers · **Lane 6/method** · **control_only** |
| `v4_C4_1_omni_polaris_product_surface_and_alignment_core.md` | **Polaris alignment core + naming LOCK** — Polaris is **NOT a new domain, owns NO objects, enforces NOTHING by itself** (names a distributed composition of existing owners/constraints) · `analysis_nonbinding` `active`; read-graph #9a; WI7 · header+§0+§1 read · **HIGH as a lens** (Care authority/safety/proof are the alignment Polaris names) · "does actual contract ownership/enforcement ALIGN with Polaris §1a/§2/§6/§8?" · **direct-read bounded, but ONLY as an END-OF-LANE-1 nonbinding consistency lens (AFTER contracts establish real ownership/enforcement); may NOT prove a carrier exists or an enforcement mechanism landed** · **Lane 1 end-of-lane consistency consult + later sibling reconciliation** · **direct_read_required** |
| `v4_C4_2_enterprise_full_stack_adversarial_pressure_test.md` | **Task D** · `shell_pending_population` `required_pre_spine_input` · none · none · none-now (empty shell; downstream of Care, not an input) · none-now · none · — · **future_not_current** |
| `v4_C4_agent_runtime_and_harness_capture.md` | Agent Runtime sibling capture (homed, separately unreviewed) · `analysis_nonbinding` · self · prior-lane · MED (sibling; later mandatory) · context-health/harness — later · headers-now · **Agent Runtime lane (later)** · **future_not_current** |
| `v4_C4_author_readiness_note.md` | authoring-readiness control · `analysis_nonbinding` · self · none · LOW · none · none · **Lane 6** · **navigation_only** |
| `v4_C4_care_inheritance_evidence_ledger.md` | **THIS ledger (current core Care work)** · `analysis_nonbinding` · self · self · — · — · — · **current core** · **control_only** |
| `v4_C4_care_operating_model_capture.md` | **FROZEN Care capture (artifact under audit; current core)** · `analysis_nonbinding` FROZEN · self · self · — · the correction target (proposed-only) · — · **current core** · **control_only** |
| `v4_C4_fresh_agent_readiness_prompt.md` | execution/readiness prompt · nav · self · none · LOW · none · none · **Lane 6** · **navigation_only** |
| `v4_C4_governed_reporting_resolution_capture.md` | **Accountability Loop capture** (retired names: GRR / Response Fabric / Integrity Loop) — nonbinding sibling architecture, semantics under review · `analysis_nonbinding` · self · prior-lane cited (§1G.5 closure) · MED (sibling; Care consumes — later) · Care↔Accountability reconciliation — later · headers-now · **later Care–Platform–Accountability sibling reconciliation (NOT Lane 1; NOT a present Care contract carrier)** · **future_not_current** |
| `v4_C4_late_builder_gap_register.md` | **Late Builder / arc-terminus leakage audit (AR-DONE)** · `analysis_nonbinding` · self · **parent-read (Lane-6 session-2)** · HIGH (the routing authority for arc termini + idea-field) · "which arc bodies must reopen; any un-homed Care residue" · **already parent-read** · **Lane 6** · **control_only** |
| `v4_C4_platform_loop_capture.md` | Platform sibling capture (provisionally stable; Task-D decisions open) · `analysis_nonbinding` · self · prior-lane · MED (sibling reconciliation later) · Care/Platform reconciliation — later · headers-now · **sibling reconciliation lane (later)** · **future_not_current** |
| `v4_C4_pre_bet_adjudication_packet.md` | bet-check adjudication · `analysis_nonbinding` · self · none · LOW (strategy/evidence) · none · none · **Lane 6/strategy** · **navigation_only** |
| `v4_C4_pre_strategic_bet_memo_ai_native_care.md` | strategic bet memo (Care capture §1/§13 cites as motivation) · `analysis_nonbinding` · self · prior-lane (Lane-4 cited) · LOW-MED (motivation, not law) · none (strategy) · none · **Lane 6/strategy** · **navigation_only** (represented in Care capture) |
| `v4_C4_readiness_bridge.md` | coverage/routing bridge · `analysis_nonbinding` · self · none · LOW · none · headers · **Lane 6** · **control_only** |
| `v4_C4_spine_authoring_plan.md` | spine method/doc structure · `analysis_nonbinding` · self · none · LOW (method; no Care law) · none · none · **Lane 6/method** · **navigation_only** |
| `v4_C4_spine_shape_plan.md` | spine shape (method) · `analysis_nonbinding` · self · none · LOW · none · none · **Lane 6/method** · **navigation_only** |
| `v4_C4_spine_watch_list.md` | watch-item coverage control (WI7=Polaris etc.) · `analysis_nonbinding` · self · none · MED (coverage control) · "any un-tracked Care watch item?" · headers · **Lane 6** · **control_only** |
| `v4_C4_thesis_shape_plan.md` | thesis doc structure (method) · `analysis_nonbinding` · self · none · LOW · none · none · **Lane 6/method** · **navigation_only** |
| `v4_C4_thesis_synthesis_plan.md` | thesis synthesis method · `analysis_nonbinding` · self · none · LOW · none · none · **Lane 6/method** · **navigation_only** |

**Exit condition MET: 61/61 files classified; zero unclassified; no disposition based on filename alone (each grounded in terminus/header/status/prior-audit).**

## §2 — DISPOSITION COUNTS (61 total; CORRECTED per Knox routing patch)
- **control_only:** 18 (C3.1 · C3-method · C3.5A/G4/G4.1/topology-note · C3.6A/6G · C3.7A/7G · C3.8 G1a/G4 · C4.0 · Care-ledger · Care-capture · Late-Builder · readiness-bridge · spine-watch-list)
- **navigation_only:** 13 (C3.5 kickoff/plan · C3.7 wedge-plan · C3.8 plan/G1b-kickoff · C4 author-readiness/fresh-agent/bet-packet/bet-memo/spine-authoring/spine-shape/thesis-shape/thesis-synthesis)
- **direct_read_required:** **10** (C3.5B/5C · C3.6B/6C · C3.7B/7C · **C3.5F/6F/7F core disposition matrices** · C4.1 Polaris [end-of-lane consistency lens])
- **selected_trace_required:** **10** (C3.5D/5E · C3.6D/6E · C3.7D/7E · **C3.5F5 continuity** · C3.8 G1b-map/G2/G3 [exact backward-trace])
- **represented_by_controlling_terminus:** **4** (C3.5F2/F3/F4 · C3.5 G-handoff)
- **superseded_historical:** 1 (C3.5 convergence-check-pre-G4)
- **future_not_current:** **5** (C3.9 · C4.2 Task-D · Agent-Runtime · Platform · **Accountability Loop capture** [ex-"GRR"])
- (sum: 18+13+10+10+4+1+5 = **61** ✓). **Changes vs first draft:** Accountability Loop direct→future; C3.5F/6F/7F represented→direct; C3.5F5 represented→selected.

## §3 — PACKET DELTAS vs the current Lane-1/Lane-3/Lane-6 packets
**MISSING from the current packets (must be ADDED):**
- **Lane 3 — the B/C reality + authority maps** the current packet (which starts at C/D) undernames: **C3.5B** (hospital/EHR reality), **C3.5C** (actor/department authority), **C3.7B** (trial-access market reality), **C3.7C** (access-funnel ownership ladder). *(C3.6B reality + C3.6C source-authority are within-family; 6C was named — 6B was not; ADD 6B.)* These hold the real-world/authority mechanics needed to pressure Care (REV-167 source-authority, authority topology, continuity, navigation/ownership obligations).
- **Lane 1 — MISSING maps/records (must add):** `OMNI_System_Map_vNext` bounded ownership/seam consult · `OMNI_Surface_Experience_Map_vNext` bounded P4/P5 consult · `privacy_communication_governance` audit · AI Substrate §B · the exact REV/open-review/seam records governing REV-038/114/117/141/151/161/167. **C4.1 Polaris = end-of-lane NONBINDING consistency lens (NOT a carrier).** **Accountability Loop capture (ex-"GRR") is NOT Lane 1 → later Care–Platform–Accountability sibling reconciliation.**
- **Lane 6 — C3.1 lens audit · C3 method-recovery · C4.0 depth protocol · readiness-bridge · spine-watch-list** should be explicitly named coverage/method controls.

**OVER-REQUESTED / represented-by-terminus (do NOT full-read):**
- Only the C3.5 **F2/F3/F4** expansions + the C3.5 **G-handoff** (`v4_C3_5G_v4_implications`) → `represented_by_controlling_terminus` (read via G4 §11 unless a G4 row routes back). **CORRECTION: the F CORE matrices (C3.5F, C3.6F, C3.7F) are NOT over-requested — they are `direct_read` (mechanism + tension depth the G/G4 verdict cannot fully prove: trial_protocol / outcome-RWE ownership / P35 placement / ownership-ladder / recommendation-integrity / false-closure adjudications). C3.5F5 continuity = `selected_trace`.**
- **C3.8 G1b/G2/G3** are intermediate pressure artifacts (not canon); read via the **EXACT backward-trace from G4** (G4 unresolved Care row → exact G3 breaker → cited G2 tension/translation row → cited G1b source-concept row), mandatory first chain = **tenant/operator-ownership vs patient-authority-over-care-truth** — NOT a broad selected-read, and NOT G3-alone-without-its-chain.
- Kickoff prompts, arc plans, inventories, spine/thesis shape+synthesis plans → navigation/control; not source reads.

## §4 — REVISED LANE PACKETS
**Revised Lane 1 (current contract + capability spine) — CORRECTED order (contracts establish real ownership/enforcement FIRST; nonbinding lenses LAST):** `OMNI_System_Map_vNext` bounded ownership/seam consult → D3 · D7 · Identity · RBAC · Federation · Intake · Messaging · GCE/capability · **AI Substrate §B (where required)** · Settings/protocol · BIZOPS/workforce · physical/device command authority (P35) → `OMNI_Surface_Experience_Map_vNext` bounded P4/P5 consult (verifies the old Surface/§1G placements + which P4/P5 surfaces/projections exist while owning no truth) · `privacy_communication_governance` audit · **the exact REV/open-review/seam records governing REV-038/114/117/141/151/161/167** → **THEN, end-of-lane, C4.1 Polaris as a NONBINDING consistency lens** (compare actual contract ownership/enforcement vs Polaris §1a/§2/§6/§8; report alignment/contradiction — **may NOT prove a carrier exists or an enforcement mechanism landed**). **Accountability Loop capture (ex-"GRR") REMOVED from Lane 1 → later Care–Platform–Accountability sibling reconciliation.** Verifies the L2-GC.13e candidate carriers (D3/Settings/Messaging/Federation/RBAC/Identity/BIZOPS/Surface/D7) + REV-038/114/117 consent enforcement + care_team_graph/degraded_safety_state carrier + front-desk-access-vs-§7.6.
**Revised Lane 3 (Care pressure — direct controlling bodies, NOT summaries):** per-arc order = **terminus/artifact-use-map → D coverage-manifest + scenario-taxonomy (DIRECT-read, anti-cherry-pick control) → selected D scenario bodies → selected E deep/red traces → F Care-relevant dispositions (DIRECT) → G/G4 verdict comparison.** So: **direct_read** C3.5B/5C + C3.6B/6C + C3.7B/7C (reality/authority/ownership maps) **+ C3.5F/6F/7F core disposition matrices**; **selected_trace** C3.5D/5E, C3.6D/6E, C3.7D/7E, **C3.5F5 continuity**; **C3.8 = EXACT backward-trace** (G4 first → unresolved Care row → exact G3 breaker → cited G2 row → cited G1b row; **mandatory first chain = tenant/operator-ownership vs patient-authority-over-care-truth**); **control via termini** C3.5 G4 §11+G4.1, C3.6 G §8.5, C3.7 G §7, C3.8 G4; C3.5 **F2/F3/F4 + G-handoff** `represented_by_terminus`. Pressure targets: **REV-141, REV-167, authority attachment/transitions, clocks, degraded mode, proof/false-closure, tenant/patient/operator tensions.** **Non-tree Lane-3 source (named, exact path):** `.cursor/plans/audits/2026-06-12_care_lanes_pressure_test_acute_surgical_pt_clinic_snf_ecf.md` (care-lanes pressure test — NOT a v4_C3/C4 file, hence outside the 61-enum; it IS a Lane-3 pressure input).
**Revised Lane 6 (source governance):** C3.1 lens audit · C3 method-recovery · C4.0 depth protocol · readiness-bridge · spine-watch-list · author-readiness · **Late Builder (parent-read; arc-terminus routing authority)** · Build Entry Gate v0 · C2 Source-Base Declaration · read-graph/catalog routes.

## §5 — ROUTING QUESTIONS — RESOLVED (Knox 2026-07-14)
1. **Polaris + Accountability Loop (ex-"GRR")** — **RESOLVED.** Polaris = **bounded Lane-1 END-OF-LANE post-contract consistency lens**, later reused in sibling reconciliation; **never a present-authority carrier**. Accountability Loop = **later Care–Platform–Accountability sibling reconciliation ONLY; REMOVED from the Lane-1 source packet.**
2. **Agent Runtime + Platform** — **RESOLVED.** Sequence = Care forensic audit → Care correction/review → Care–Platform–Accountability reconciliation → Agent Runtime & Harness → context-health proof. **Neither Platform nor Agent Runtime is a Lane-3 pressure input.**
3. **F5 + the F family** — **RESOLVED.** **C3.5 F5** (continuity — corrected from the earlier "C3.8 F5" typo) = `selected_trace_required`. **C3.5 F core / C3.6 F / C3.7 F** = `direct_read_required` (Care-relevant disposition reads). **C3.5 F2/F3/F4** = represented_by_terminus unless a G4 row explicitly routes back.
4. **C4.2 Task-D** — **RESOLVED `future_not_current`.** Does NOT gate Lane 1 or Lane 3; downstream of internal Care/sibling reconciliation + Agent Runtime proof unless Nick+Knox explicitly reorder.

## §5A — HANDOFF PRECEDENCE (resolved)
`HANDOFF_2026-07-14_omni_care_platform_accountability_next_agent.md` **does NOT exist in the repo** (`git ls-files` — no match). The **only live controlling continuity handoff is `HANDOFF_2026-07-13_care_forensic_inheritance_audit.md`**, which already records **Lane 2 ACCEPTED → Gate B → Lane 1**. Therefore there are **no two live handoffs claiming precedence** in-tree; nothing to supersede. If a July-14 vertical handoff exists outside the repo, it is **superseded by the updated July-13 boot handoff + this Gate-B preflight** and must not claim Lane-2-unaccepted or first precedence.

## §6 — NO-WORK-STARTED CONFIRMATION
No Care-capture edit · no contract edit · no Platform/Accountability/Agent-Runtime work · no C3.9/Task-D population · no spine/thesis authoring · no Lane 1/3/6 source-body reads (only headers/status/TOC/artifact-use-maps/routing sections + the named bounded excerpts). This patch physically applied ONLY the Knox routing-normalization corrections (provenance sentence · F-family dispositions · D coverage-first · C3.8 backward-trace · Lane-1 packet · Polaris/Accountability routing · handoff precedence · manifest-integrity counts). This preflight is `analysis_nonbinding` routing only. **Gate B ACCEPTED on this commit. STOP. Lane 1 begins in a FRESH context.**
