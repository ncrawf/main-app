# Mindbody — Room Requirements for Appointments (raw ingest)

Source: Mindbody settings page (verbatim, copied from Mindbody admin app during user discovery 2026-05-15)
Status: raw ingest — do not edit, do not analyze
Date: 2026-05-15
Original location: was at `.cursor/plans/ingestion/mindbody/screenshots/Pasted text (4).txt`; moved + renamed during Phase B.5 Step 1 cleanup.

Architectural significance (preserved as ingest note; the analytical pass happens in Layer 2):

This is a Mindbody admin settings table that maps every appointment type in the medspa catalog to the list of rooms in which that appointment is allowed to be booked. The leftmost "Required" column is a checkbox that determines whether room assignment is REQUIRED before a booking can be confirmed (vs merely allowed but optional). The middle column shows the appointment type with hierarchical "Category / Service" notation (e.g., "1. Facials / BH HydraFacial"). The right column shows the room compatibility list.

The brand visible is "BH" (Bloom Health). Service catalog is numbered (1-12) plus an internal-only "X) Internal Scheduling" category. Total: ~132 service rows across 12 category numbers.

Key things to note for Layer 2 analysis (NOT for editing this raw file):
- service catalog is HIERARCHICAL (Category > Service)
- service categories are NUMBERED for sort-order display
- service-to-room is many-to-many with a REQUIRED flag (booking gating constraint)
- "New Patient" vs "Returning" is a service-level distinction (different rooms allowed; different durations implied)
- "Private Event" / "Party" services exist (group bookings)
- Add-Ons are first-class services in their own category
- Internal Scheduling category covers staff meetings, vendor meetings, candidate interviews, plus complimentary/training versions of patient services
- Variant taxonomy is extreme: 9 dermal-filler body-area variants, 3 sculptra body-area variants, 7 chemical peel chemistry variants, 7 laser hair removal area-count variants, 10 sugaring area variants

---

Room Requirements for Appointments
Check the box next to any appointment that can’t be booked unless a room is available.

Required	Appointment Type	Rooms 
	Select all	
	1. Facials / BH HydraFacial	Room 4, Room 3, Room 6, Room 2
	1. Facials / BH Signature Facial (60 Mins)	Room 4, Room 3, Room 6, Room 2
	1. Facials / BH Signature Facial (90 Mins)	Room 4, Room 3, Room 6, Room 2
	1. Facials / Biologique Recherche Facial (60 Mins)	Room 4, Room 3, Room 6, Room 2
	1. Facials / Biologique Recherche Facial (90 Mins)	Room 4, Room 3, Room 6, Room 2
	1. Facials / C-Radiance Facial	Room 4, Room 3, Room 6, Room 2
	1. Facials / Expecting Facial	Room 4, Room 3, Room 6, Room 2
	1. Facials / Express Facial	Room 4, Room 3, Room 6, Room 2
	1. Facials / Fire & Ice Facial	Room 4, Room 3, Room 6, Room 2
	1. Facials / HI-Tech Facial	Room 4, Room 3, Room 6, Room 2
	1. Facials / Lymphatic Facial	Room 4, Room 3, Room 6, Room 2
	1. Facials / O2 Glow Facial	Room 4, Room 3, Room 6, Room 2
	10. Red Light Therapy / NEO | Red Light Therapy	Room 1, Room 2
	10. Red Light Therapy / NEO | Red Light Therapy (Add-On)	Room 1, Room 2
	11. Provider Consultations / Consultation - Aesthetic Injector	Room 6, Room 5, Room 2
	11. Provider Consultations / Consultation - BH+ Membership	Room 4, Room 3, Room 6, Room 5, Room 2
	11. Provider Consultations / Consultation - Bodysculpting	Room 4, Room 6, Room 5, Room 2
	11. Provider Consultations / Consultation - Hormone Evaluation	Room 5, Room 2
	11. Provider Consultations / Consultation - Laser Hair Removal	Room 4, Room 3, Room 6, Room 5, Room 2
	11. Provider Consultations / Consultation - Medical Weight Loss	Room 4, Room 6, Room 5, Room 2
	11. Provider Consultations / Consultation - Skin Analysis	Room 4, Room 3, Room 6, Room 5, Room 2
	12. Medical Visits / Hormone Therapy (Follow-Up)	Room 5, Room 2
	12. Medical Visits / Hormone Therapy (Initial Visit)	Room 5, Room 2
	12. Medical Visits / Medical Weight Loss (Follow-Up)	Room 5, Room 2
	12. Medical Visits / Medical Weight Loss (Initial Visit)	Room 5, Room 2
	2. Add-Ons / ( plated )™ Exosomes by Skin Science	Room 6, Room 5, Room 2
	2. Add-Ons / BH Professional Peel	Room 4, Room 3, Room 6, Room 5, Room 2
	2. Add-Ons / Dermaplaning	Room 4, Room 3, Room 6, Room 5, Room 2
	2. Add-Ons / Glacial	Room 4, Room 3, Room 6, Room 5, Room 2
	2. Add-Ons / HydraFacial: Eye Boost	Room 4, Room 3, Room 6, Room 2
	2. Add-Ons / HydraFacial: Lip Boost	Room 4, Room 3, Room 6, Room 2
	2. Add-Ons / Hydrojelly Mask	Room 4, Room 3, Room 6, Room 2
	2. Add-Ons / LED Light Mask - Déesse Pro	Room 4, Room 3, Room 6, Room 2
	2. Add-Ons / Lipid Recovery Mask: Face	Room 2
	2. Add-Ons / Lipid Recovery Mask: Neck & Décolleté	Room 2
	2. Add-Ons / Lipid Recovery Mask: Under Eye	Room 2
	2. Add-Ons / Lymphatic Drainage	Room 4, Room 3, Room 6, Room 2
	2. Add-Ons / NEO | Red Light Therapy (Single Session)	Room 6, Room 2
	2. Add-Ons / Salicylic Spot Treatment	Room 4, Room 3, Room 6, Room 5, Room 2
	2. Add-Ons / SkinStylus: NanoNeedling	Room 6, Room 5, Room 2
	3. Chemical Peels / BH DermaPeel (Dermaplaning + BioRePeel)	Room 6, Room 5, Room 2
	3. Chemical Peels / Chemical Peel (BioRepeel)	Room 4, Room 3, Room 6, Room 5, Room 2
	3. Chemical Peels / Chemical Peel (Glycolic Peel)	Room 4, Room 3, Room 6, Room 5, Room 2
	3. Chemical Peels / Chemical Peel (Lactic Peel)	Room 4, Room 3, Room 6, Room 5, Room 2
	3. Chemical Peels / Chemical Peel (Mandelic Peel)	Room 4, Room 3, Room 6, Room 5, Room 2
	3. Chemical Peels / Chemical Peel (Obagi Salicylic Peel)	Room 4, Room 3, Room 6, Room 5, Room 2
	3. Chemical Peels / Chemical Peel (VIPeel)	Room 4, Room 3, Room 6, Room 5, Room 2
	4. Skin Treatments / Aquagold Facial	Room 4, Room 3, Room 5, Room 2
	4. Skin Treatments / BBL HEROic	Room 5, Room 2
	4. Skin Treatments / BH DermaGloss (Dermaplane + Glacial)	Room 6, Room 5, Room 2
	4. Skin Treatments / BH DermaPeel (Dermaplaning + BioRePeel)	Room 6, Room 5, Room 2
	4. Skin Treatments / BH HydraGloss (HydraFacial + Glacial)	Room 6, Room 5, Room 2
	4. Skin Treatments / Consultation - Skin Treatments	Room 4, Room 3, Room 6, Room 5, Room 2
	4. Skin Treatments / DEKA CoolPeel - Tetra SmartXide CO2 Facial	Room 5, Room 2
	4. Skin Treatments / Glacial (Spot Treatment)	Room 4, Room 3, Room 6, Room 5, Room 2
	4. Skin Treatments / Glacial Gloss (Full Cooling)	Room 4, Room 3, Room 6, Room 5, Room 2
	4. Skin Treatments / SkinPen Microneedling	Room 4, Room 3, Room 6, Room 5, Room 2
	4. Skin Treatments / SkinPen Microneedling (w/ PRF)	Room 4, Room 3, Room 6, Room 5, Room 2
	5. Injectables / Botox (New Patient)	Room 6, Room 5, Room 2
	5. Injectables / Botox (Returning)	Room 6, Room 5, Room 2
	5. Injectables / Botox Party (Private Event)	Room 5, Room 2
	5. Injectables / Consultation - Injector (Full Face Eval)	Room 5, Room 2
	5. Injectables / Daxxify (New Patient)	Room 5, Room 2
	5. Injectables / Daxxify (Returning)	Room 5, Room 2
	5. Injectables / Dermal Fillers (Cheeks)	Room 6, Room 5, Room 2
	5. Injectables / Dermal Fillers (Chin & Jawline)	Room 6, Room 5, Room 2
	5. Injectables / Dermal Fillers (Full Face)	Room 6, Room 5, Room 2
	5. Injectables / Dermal Fillers (Lips)	Room 6, Room 5, Room 2
	5. Injectables / Dermal Fillers (Multi Area)	Room 6, Room 5, Room 2
	5. Injectables / Dermal Fillers (Nasolabial Folds)	Room 6, Room 5, Room 2
	5. Injectables / Dermal Fillers (Nose)	Room 6, Room 5, Room 2
	5. Injectables / Dermal Fillers (Temporal)	Room 6, Room 5, Room 2
	5. Injectables / Dermal Fillers (Under Eye)	Room 6, Room 5, Room 2
	5. Injectables / Dissolving (Lips, Bump)	Room 6, Room 5, Room 2
	5. Injectables / Dissolving (Lips, Full)	Room 6, Room 5, Room 2
	5. Injectables / Dissolving (Other)	Room 6, Room 5, Room 2
	5. Injectables / Dysport (New Patient)	Room 6, Room 5, Room 2
	5. Injectables / Dysport (Returning)	Room 6, Room 5, Room 2
	5. Injectables / Jeuveau (New Patient)	Room 6, Room 5, Room 2
	5. Injectables / Jeuveau (Returning)	Room 6, Room 5, Room 2
	5. Injectables / Kybella	Room 6, Room 5, Room 2
	5. Injectables / Lip Flip	Room 6, Room 5, Room 2
	5. Injectables / PDO Threads (Lifting)	Room 6, Room 5, Room 2
	5. Injectables / PDO Threads (Smoothing)	Room 6, Room 5, Room 2
	5. Injectables / PRF (Hair Restoration)	Room 6, Room 5, Room 2
	5. Injectables / PRF (Under Eye)	Room 6, Room 5, Room 2
	5. Injectables / Sculptra (Booty)	Room 6, Room 5, Room 2
	5. Injectables / Sculptra (Face)	Room 6, Room 5, Room 2
	5. Injectables / Sculptra (Hip Dip)	Room 6, Room 5, Room 2
	5. Injectables / SkinVive - Microdroplet HA	Room 6, Room 5, Room 2
	5. Injectables / Xeomin (New Patient)	Room 6, Room 5, Room 2
	5. Injectables / Xeomin (Returning)	Room 6, Room 5, Room 2
	6. Bodysculpting / Coolsculpting: Follow Up Visit	Room 4, Room 3, Room 6, Room 5, Room 2
	6. Bodysculpting / CoolSculpting: Initial Consult	Room 4, Room 3, Room 6, Room 5, Room 2
	6. Bodysculpting / CoolSculpting: Private Event	Room 3, Room 6, Room 5, Room 2
	6. Bodysculpting / Coolsculpting: Treatment Session	Room 3, Room 6, Room 5, Room 2
	7. Laser Hair Removal / Consultation - Laser Hair Removal	Room 4, Room 3, Room 2
	7. Laser Hair Removal / Laser Hair Removal - Brazilian	Room 3, Room 2
	7. Laser Hair Removal / Laser Hair Removal - Whole Body	Room 3, Room 2
	7. Laser Hair Removal / Laser Hair Removal (1 Area)	Room 3, Room 2
	7. Laser Hair Removal / Laser Hair Removal (2 Areas)	Room 3, Room 2
	7. Laser Hair Removal / Laser Hair Removal (3 Areas)	Room 3, Room 2
	7. Laser Hair Removal / Laser Hair Removal (4 Areas)	Room 3, Room 2
	8. Sugaring / Sugaring - Bikini	Room 6, Room 2
	8. Sugaring / Sugaring - Brazilian	Room 6, Room 2
	8. Sugaring / Sugaring - Brows	Room 6, Room 2
	8. Sugaring / Sugaring - Full Face	Room 6, Room 2
	8. Sugaring / Sugaring - Full Legs	Room 6, Room 2
	8. Sugaring / Sugaring - Lip & Chin	Room 6, Room 2
	8. Sugaring / Sugaring - Lower Legs	Room 6, Room 2
	8. Sugaring / Sugaring - Multi	Room 6, Room 2
	8. Sugaring / Sugaring - Underarms	Room 6, Room 2
	8. Sugaring / Sugaring - Upper Legs	Room 6, Room 2
	X) Internal Scheduling / BH Signature Facial	Room 4, Room 3, Room 6, Room 5, Room 2
	X) Internal Scheduling / Biologique Recherche Signature Facial (60 Mins)	Room 4, Room 3, Room 6, Room 5, Room 2
	X) Internal Scheduling / Botox / Dysport / Xeomin / Jeuveau / Daxxify	Room 4, Room 3, Room 6, Room 5, Room 2
	X) Internal Scheduling / Candidate Interview (In-Person)	Room 4, Room 3, Room 6, Room 5, Room 2
	X) Internal Scheduling / Candidate Interview (Phone)	Room 3, Room 6, Room 5, Room 2
	X) Internal Scheduling / CoolSculpting: Initial Consult	Room 3, Room 6, Room 5, Room 2
	X) Internal Scheduling / SkinPen Microneedling	Room 4, Room 3, Room 6, Room 5, Room 2
	X) Internal Scheduling / Skinpen Microneedling, w PRP	Room 4, Room 3, Room 6, Room 5, Room 2
	X) Internal Scheduling / Staff Meeting (Check-In)	Room 3, Room 6, Room 5, Room 2
	X) Internal Scheduling / Staff Meeting (Q1 Start)	Room 3, Room 6, Room 5, Room 2
	X) Internal Scheduling / Staff Meeting (Q2 Start)	Room 3, Room 6, Room 5, Room 2
	X) Internal Scheduling / Staff Meeting (Q3 Start)	Room 3, Room 6, Room 5, Room 2
	X) Internal Scheduling / Staff Meeting (Q4 Start)	Room 3, Room 6, Room 5, Room 2
	X) Internal Scheduling / Vendor Meeting	Room 4, Room 3, Room 6, Room 5, Room 2
