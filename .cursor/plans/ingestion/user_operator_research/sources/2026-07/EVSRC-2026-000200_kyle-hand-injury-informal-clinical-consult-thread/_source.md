# EVSRC-2026-000200 — Informal Pre-Clinical Consult Thread (hand injury; peer + literature + imaging → specialist referral)

Document type: `evidence_or_ingestion` (Evidence Plane · `user_operator_research` lane) · Authority: `analysis_nonbinding` (`GRD-036` capture-broad-promote-gated). **Binds nothing. Not OMNI truth until promoted through a destination home's review gate.**
Lane rationale (`GRD-037` lane = provenance): provenance = **observed real-world care-seeking behavior** (a text thread showing how a person actually assembles medical understanding before formal care). Filed by source family (field observation), not by topic; concepts are topic-tagged at the row level.
Trust posture (`GRD-039`): **field observation / anecdote — a single real interaction. High-signal ILLUSTRATION of a behavior pattern, NOT statistical evidence and NOT clinical truth.** Learn freely; process-as-data; never execute/adopt without the destination gate.
Captured: 2026-07-05 (provided in-session by Nick). Analyst: grounded agent (Opus), in-session capture.

> **★ PRIVACY FLAG (read first):** this artifact contains **identifiable third-party health information** — a real person's ("Kyle") hand imaging, symptoms, and a named treating physician. It is captured as **operator-provided reference evidence** at Nick's instruction (`user_operator_research`). Treat as sensitive: do NOT promote verbatim identifiers into thesis/contracts/surfaces; promote only the **de-identified behavioral pattern**. One screenshot also shows an apparent **wrong-patient X-ray** ("That's NOT mine") — a real-world records/identity error, preserved as-is because it is itself a load-bearing substrate signal (see §3).

> **★ WHY THIS WAS CAPTURED (operator intent, 2026-07-05):** Nick surfaced this thread as a concrete encapsulation of his strategic unease — *"people are typing screenshots of labs, x-rays, coming up with answers, THEN going to their clinician… that is the future, it is now."* This source is the **field specimen** for the 2030/2035 AI-native / trusted-advisor-workbench question (WI1 / WI7 / the "Cursor paradigm" / patient-companion interop). Capture only; the strategic look it feeds is a separate, gated task (§4).

---

## §0 — Shared minimum metadata spine (router §3)

| field | value |
|---|---|
| `source_type` | screenshot collection (10 iMessage screenshots) |
| `source_platform` | iMessage (personal capture) |
| `file_path` | `screenshots/IMG_0486.png … IMG_0495.png` (this folder) |
| `source_title` | Informal pre-clinical consult thread — hand injury (suspected hook-of-hamate fracture) |
| `source_author_or_org` | private individuals (operator-provided) |
| `speakers[]` | **(A)** "Kyle" — role: injured layperson / care-seeker; type: patient; authority_context: no medical training (self-describes "in reading and such"); identity_confidence: high (named contact). **(B)** Nick (blue bubbles) — role: informal trusted advisor; type: operator with clinical literacy; authority_context: reasons like a clinician but is acting as a friend, not the treating provider; identity_confidence: high (operator). **(C)** referenced-not-present: Dr. Mykola J. Bartkiw (hand ortho, Center for Advanced Orthopedics) + "Prince" (existing provider) + an Urgent Care that produced the X-ray. |
| `published_at` | ~2026-07 (thread spans ≥2 days: "Yesterday 5:45 PM" / "6:02" markers) |
| `uploaded_to_omni_at` | 2026-07-05 |
| `ingested_by` | grounded agent (Opus), in-session, at Nick's instruction |
| `capture_method` | manual screenshot (operator-provided) |
| `evidence_kind` | field observation (care-seeking behavior) |
| `status` | `captured` (raw preserved + versioned interpretation v1; no formal `EVRUN` analysis run yet — see §4) |
| `reliability_context` | anecdotal (single real interaction) — a **lens, not a ranking**: high illustrative value for behavior pattern; zero authority for clinical or statistical claims |
| `routing_target` | proposed: `thesis` (§C outward-interop / patient-companion), `feature/product_backlog`, `domain_map` (Intake / Clinical-Memory / Evidence / Referral / CNS) — **proposed only** |
| `promotion_status` | `not_promoted` |

**Lane-specific fields (`user_operator_research/_lane.md`):**
`respondent_role`: patient (Kyle) + operator-advisor (Nick) · `method`: observation (captured thread) · `pain_theme`: care-navigation under uncertainty; assembling understanding from fragments (imaging + literature + a trusted person) before a formal visit · `frequency_or_severity`: illustrative single case (pattern is believed common) · `surface_or_feature_impact`: Intake, Clinical Memory, Evidence/imaging ingestion, Referral/care-commitment, CNS candidate-generation, patient-companion interop · `quote_anchor`: see §2.

---

## §1 — Collection manifest (raw artifacts, immutable)

One coherent captured event = one `EVSRC` (router §4 "collection sources"). Ten screenshots of a single continuous thread. Image filenames preserve the operator's original `IMG_####` numbers (stable identity; not chronological rank).

| file | what it shows |
|---|---|
| `IMG_0486.png` | Urgent-care hand X-ray from Kyle; "Seemingly nothing major / Just fucking hurts man / Not sure what that white C shape is tho / This was just at an Urgent Care"; Nick: "Honestly. You have good looking bone structure"; Kyle: "So c shape shows up in normal xray" |
| `IMG_0487.png` | A second X-ray Kyle flags **"That's NOT mine"** (apparent wrong-patient image); "Guess I'll figure it out / Meaning take two weeks off and hope for the best"; Nick asks about the "circle / C shape"; "Yea. It all looks good. It's reassuring"; an `IMG_0657.heic` attachment |
| `IMG_0488.png` | Kyle: "In reading and such / I guess that bone can have a fracture we can't see on xray / That golfers can get / Need CT or MRI to tell / doesn't heal great because not a lot of blood flow / I feel less concerned… Unless you think I should still be concerned"; PubMed excerpt on hamate-fracture epidemiology (2–4% of carpal fractures; golf/racket sports) |
| `IMG_0489.png` | Nick's annotated X-ray (**purple = 5th metacarpal, yellow toward hamate**): "When we spoke I was picturing 5th metacarpal (purple)"; Kyle: "If I lay my hand flat on table and try to lift pinky and ring finger it hurts / Yeah I've realized it's more toward Hamate" |
| `IMG_0490.png` | Nick: "You're on it yea. It's probably the hamate. CT or MRI"; PubMed Fig. 3 (22-yo dirt-bike CT of hook-of-hamate fracture) + "This will give you a sense of the nuance"; article text on missed-hamate natural history + CT/MRI diagnosis |
| `IMG_0491.png` | Nick: "'Hook of the hamate', or 'ring sign' Represents normal anatomy. However… is your pain in that region or in the 5th metacarpal?" (**red-circle annotation**); Kyle: "This general area" |
| `IMG_0492.png` | PubMed treatment excerpt (nondisplaced <3mo → cast; symptomatic/nonunion/chronic → controversial; surgical excision common; K-wire/screw/plate options); Kyle: "A lot going on there / Now I'm back to not knowing what to think"; Nick: "I'm in favor of CT hand and see an ortho hand specialist (not general ortho)…" |
| `IMG_0493.png` | Nick: cast/surgical-steps nuance; Kyle: "hopeful it's just a bone bruise I keep irritating by still playing / Never swollen or anything"; Nick: "We should at minimum get CT, and I'm actually in favor of hand specialist input" |
| `IMG_0494.png` | Kyle: "Right. You know any good ones?"; Nick: "It may be 'just a bruise'. But there's a potential decision, or multiple decisions or non-decisions on the table / I'm thinking. I don't off hand" |
| `IMG_0495.png` | Nick: "They'll all be fairly zoned in on this / Just find someone local to you, have their office get the CT"; provider card **Dr. Mykola J. Bartkiw (Center for Advanced Orthopedics)**; Kyle: "At the same place as the Prince guy / Might start there / tell him the deal / I'm guessing they can bounce off each other? / Not sure how that all works"; Nick: "Yea use him" |

---

## §2 — Reconstructed thread (best-effort chronological; verbatim where legible)

*(Reconstructed by the capturing agent from the 10 screenshots; ordering is best-effort across the visible date breaks. "K" = Kyle; "N" = Nick.)*

1. **K** (with urgent-care X-ray): "Seemingly nothing major." "Just fucking hurts man." "Not sure what that white C shape is tho." "This was just at an Urgent Care."
2. **N:** "Honestly. You have good looking bone structure."
3. **K:** "So c shape shows up in normal xray[?]"
4. **N** (annotated, purple 5th metacarpal): "When we spoke I was picturing 5th metacarpal (purple)."
5. **K:** "If I lay my hand flat on table and try to lift pinky and ring finger it hurts." "Yeah I've realized it's more toward Hamate." "In reading and such." "I guess that bone can have a fracture we can't see on xray." "That golfers can get." "Need CT or MRI to tell." "Guess it also doesn't heal great because not a lot of blood flow." "I feel less concerned tho knowing what I know now. Unless you think I should still be concerned."
6. **N** (red-circle annotation): "'Hook of the hamate', or 'ring sign' Represents normal anatomy. However, now I'm curious to know more… is your pain in that region or in the 5th metacarpal? Are you able to say[?]"  **K:** "This general area."
7. **N** (PubMed Fig. 3 + text): "You're on it yea. It's probably the hamate. CT or MRI." "This will give you a sense of the nuance."
8. **K:** "A lot going on there." "Now I'm back to not knowing what to think."
9. **N:** "I'm in favor of CT hand and see an ortho hand specialist (not general ortho). There may be a role for cast immobilization, there could potentially be [a] role for surgical steps, depending on the fracture type. It sounds like there's some mixed approaches in the hand community."
10. **K:** "I am hopeful it's just a bone bruise I keep irritating by still playing." "I was never overly terrible like early on." "Never swollen or anything."
11. **N:** "We should at minimum get CT, and I'm actually in favor of hand specialist input here if it's that bothersome."  **K:** "Right. You know any good ones?"
12. **N:** "It may be 'just a bruise'. But there's a potential decision, or multiple decisions or non-decisions on the table." "I'm thinking. I don't off hand."  **K:** "No pun. Lol."
13. **N:** "Like. They'll all be fairly zoned in on this." "Just find someone local to you, have their office get the CT." (shares Dr. Bartkiw / Center for Advanced Orthopedics card)
14. **K:** "At the same place as the Prince guy. Might start there. With Prince and tell him the deal. I'm guessing they can bounce off each other? Not sure how that all works."  **N:** "Yea use him."
15. *(separate fragment)* **K** (second X-ray): "That's NOT mine." "Guess I'll figure it out." "Meaning take two weeks off and hope for the best." **N:** "Can you mix in like a circle of C shape thing you're talking about[?]" "Yea. It all looks good. It's reassuring."

---

## §3 — Captured interpretation (v1 — `omni_analysis_nonbinding`; `GRD-042` reinterpretation-expected)

*(Interpretation v1, 2026-07-05, grounded agent. Confidence: high illustrative / low authority. Binds nothing.)*

**What this specimen actually is:** a real, unremarkable-to-the-participants instance of **care assembled OUTSIDE any formal system, then handed into it.** No EMR, no portal, no clinic touched this until the very end. The "system" was: a phone camera + a knowledgeable friend + PubMed + annotated images + iterative reasoning → converging on a *candidate* diagnosis (hook-of-hamate fracture) and a *decision frame* (get CT → see a hand-specialist, not general ortho → specific named provider). This is exactly the behavior Nick flagged: **the patient does the sense-making first; the clinician is the last, formal step — the commit.**

**Candidate concept rows (topic-tagged; proposed homes — all nonbinding, `GRD-036`):**

| # | observed behavior | OMNI meaning (candidate) | topic_tags | proposed home |
|---|---|---|---|---|
| 1 | Patient assembles imaging + literature + a trusted interpreter *before* seeing a provider | The **pre-clinical workbench** is where care-understanding is actually formed today — OMNI's current EMR/clinic-first framing starts one step too late | `patient_companion`, `pre_clinical`, `ai_native_care` | thesis §C / WI1 / WI7; Intake domain-map |
| 2 | The trusted interpreter reasons in **candidates + decision frames** ("multiple decisions or non-decisions on the table"), never commits the diagnosis | Mirrors OMNI's own **candidate ≠ commit** law (REV-184 / §B): the advisor generates candidates; the specialist commits. A trusted app/agent would occupy the advisor slot — **candidate-generating, not authority** | `candidate_not_commit`, `authority_boundary` | REV-184 / §B; WI1 (external agent = candidate actor) |
| 3 | Literature (PubMed) pulled in ad hoc, mid-conversation, to calibrate concern | Demand for **governed medical-knowledge retrieval at the point of worry** — but note `GRD-041`: the clinical-literature corpus is a *future stricter system*, not the Evidence Plane | `knowledge_reservoir`, `retrieval` | Clinical Knowledge pipeline (FWREG-006); CNS context-assembly |
| 4 | Images annotated + shared peer-to-peer; imaging is the load-bearing artifact | **Evidence/imaging ingestion + portability** is central to the pre-clinical loop; OMNI must be able to *receive* outside imaging as governed evidence with provenance | `imaging`, `evidence_ingestion`, `portability` | D7 documentation/evidence; Clinical Media (DL-22) |
| 5 | Referral resolved socially ("the same place as the Prince guy… can they bounce off each other?") | Patients don't understand **care-team topology / how providers coordinate** — a governed substrate that makes coordination legible is a real product surface | `referral`, `care_team_graph`, `coordination` | DL-20 care-coordination; care_commitment |
| 6 | **"That's NOT mine"** — patient received the wrong person's X-ray | Real-world **identity / record-provenance failure** in the wild — exactly the failure OMNI's identity + `source_authority` + provenance spine exists to prevent | `identity`, `provenance`, `source_authority`, `safety` | Identity domain; `source_authority_map`; safety guardrail |
| 7 | The whole exchange is the **"Cursor paradigm" for care** — a trusted surface working *inside* the person's own info, not screenshots shuttled in/out | This is WI7 (in-substrate copilot) seen from the patient side, and WI1 (patient-companion / external-agent interop). The strategic bet: does OMNI *own this workbench* or does a general AI (the Altman "own the whole life-arc" play) own it and relegate OMNI to a back-office EMR? | `cursor_paradigm`, `moat`, `strategy` | **§4 strategic look** (this is the crux, not a row to bury) |

**The load-bearing tension (for the §4 strategic look):** this specimen is simultaneously OMNI's *best case* (governed, provenance-bearing, candidate-not-commit, care-team-legible, identity-safe — everything OMNI is designed for) **and** the exact territory the frontier labs intend to own generically (a single trusted AI that already holds all your context). The question is not "can OMNI do this" — the physics fit is striking. The question is **positional**: who owns the front door to the pre-clinical workbench, and can a federated/governed substrate win it against an ungoverned but frictionless generalist.

---

## §4 — Disposition (this capture)

- **Status:** raw preserved (immutable, §1) + versioned interpretation v1 (§3). **Captured only.** No promotion (`GRD-036`).
- **No formal `EVRUN` analysis run opened** — this is a single field specimen, proportionately captured (the CEO-interview capture precedent, `competitor_product_evidence/2026-07_enterprise_ai_os_ceo_interviews/`). If it joins a larger user-research corpus later, run a proper `EVRUN` (`GRD-040`/`GRD-044`).
- **Primary consumer:** the proposed **pre-spine "2030/2035 AI-native care physics" strategic look** Nick called for (the bet-check on whether OMNI owns the pre-clinical workbench). That look is a **separate, gated task** — this file only supplies the specimen; it does not authorize spine/thesis work (HARD STOPS hold).
- **Owed (light):** if this pattern recurs, (a) de-identify before any promotion (privacy flag above); (b) consider a `FIELD-*` companion row in `evidence/omni_field_cases.md` tagged to Intake/Clinical-Memory/Referral; (c) catalog row if the lane formalizes.
- **Cross-refs:** WI1 / WI7 (`v4_C4_spine_watch_list.md`); C4.1 OMNI/Polaris; §C outward-interop (PAUSED); REV-184 (candidate≠commit).
