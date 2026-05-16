# Mindbody — Class and Course Options settings (raw ingest)

Source: Mindbody settings page "Class and course Options" (verbatim, copied from Mindbody admin app during user discovery 2026-05-15)
Status: raw ingest — do not edit, do not analyze
Date: 2026-05-15
Original location: was at `.cursor/plans/ingestion/mindbody/screenshots/Pasted text (6).txt`; moved + renamed during Phase B.5 Step 1 cleanup.

Architectural significance (preserved as ingest note; the analytical pass happens in Layer 2):

This is the Mindbody "Class and Course Options" settings page — one of multiple sibling settings tabs visible in the nav row (General Setup & Options / Class and course Options / Appointment Options / Membership Settings / Words and Phrases). The page is divided into three collapsible sections:
- **Booking & Sign-in Policies** (48 numbered settings) — covering Scheduling Restrictions, Schedule Window Settings, Schedule Windows, Cancellation Windows, Default Schedule Lengths, plus a large "General Settings" block covering waitlists, sign-in flow, kiosk self sign-in, and class-specific operational toggles.
- **Class Schedule Appearance & Options** (21 numbered settings) — UI presentation toggles for both Consumer Mode (patient-facing) and Business Mode (staff-facing).
- **Course Schedule Appearance & Options** (20 numbered settings) — multi-session enrollment configuration including Semesters, Drop-ins, Make-ups, Open Courses.

Total: ~89 named settings on a single tab page. Mindbody has at least 4 sibling tabs at this depth.

Key things to note for Layer 2 analysis (NOT for editing this raw file):
- "Class" vs "Course" are separate scheduling entities (one-off classes vs multi-session enrolled courses)
- Settings live in numbered rows with type + value columns
- Many settings are CATEGORIZED (e.g., "Category 1" Schedule Window / Cancellation Window suggests per-category policy support)
- "Consumer Mode" vs "Business Mode" is a foundational distinction (patient-facing vs staff-facing UI; many settings have both variants)
- "First to Claim" Automation vs "Auto-add Automation" are two distinct waitlist mechanics
- Waitlist Lock Window is a TTL-style protection
- Sign-in flow has multiple variants: standard Sign-In, Self Sign-In (kiosk), Auto Sign-In
- "Pay Teachers for No-Shows" + "Deduct no-shows from client's pricing option" — no-show economic policy is configurable per side (staff comp + client comp)
- Visit Milestones tracking is per-client long-term metric surface
- Substitute teacher workflow has dedicated configuration
- "Pick A Spot" — assigned seating model for class bookings
- Semesters + Drop-ins + Make-ups + Open Course are course-enrollment modes
- "Use drop-in-specific capacities" + "Allow drop-ins to increase Courses capacity" suggest course capacity has multiple capacity types
- Class Notes / Reservation Notes are first-class entities at this configuration layer
- Words and Phrases (visible in nav) is the label-customization page — Mindbody allows org-level vocabulary override

---

Class and course Options View support article
General Setup & Options Class and course Options Appointment Options Membership Settings Words and Phrases

Collapse All
Booking & Sign-in Policies
Scheduling Restrictions
 	Type	 
1	Client Unpaid Scheduling Restrictions: 	
Allow All Clients
Schedule Window Settings 
 	Type	 	 
2	Schedule Window Type 	
Rolling
3	Schedule Release Time 	
12:00 am
4	Class time-based booking 	  Enable	
Schedule Windows 
 	Type	Starts	Closes
5	Category 1	
0
 Days (from current date)
0
 Minutes (prior to start)
Cancellation Windows 
 	Type	When	Enable Cancellations in Consumer Mode 
6	Category 1	
0
 Minutes (prior to class)
  Enable
Default Schedule Lengths 
 	Type	 
7	Group Lessons	
365
 Days
8	Courses	
1
 Days
General Settings
 	Type	 
9	
Enable Waitlists: 
Late Cancellation Window Automation: 
  Enable
  Enable   Start "First to Claim" Automation    Continue Auto-add Automation 
10	Waitlist Lock Window: 	
120
 minutes
11	Number of Overlapping Waitlist Allowed: 	
Unlimited
12	Enforce settings of "Client Unpaid Scheduling Restrictions" for the Waitlist: 	 
13	Allow Clients to Waitlist Classes/Courses that overlap existing reservations: 	  Enable
14	Count all Pre-registrations as web sign-ups: 	  Enable
15	Duplicate/Overlapping Client Reservations/Sign-Ins: 	  Enable - Business Mode   Enable - Consumer Mode
16	Use Class Levels: 	  Enable
17	Use Class Testing: 	  Enable
18	Use Leaders/Followers: 	  Enable
19	Automatically Sign In Future Reservations 	  Enable
20	Sign In Window: 	
120
 minutes
21	Pay Teachers for No-Shows: 	  Yes   No
22	Deduct no-shows from client's pricing option: 	  Yes   No
23	Require All Prerequisites Client Types: 	  Enable
24	Class Sign In Sort Order: 	  Sign In Time   Last name
25	Class Sign In - Show Client Phone Numbers: 	  Enable
26	Class Sign In - Show Client IDs: 	  Enable
27	Class Sign In - Show Account Balances: 	  Enable
28	Class Sign In - Alert Clients w/Negative Account Balances 	  Enable
29	Class Sign In - Client Alerts Time Window: 	
All
 hours
30	Class Sign In - Enable Registering Tagged Clients: 	  Enable
31	Class sign-in sheet - Show pricing option details: 	  Enable
32	Class Sign In Receipt - Show Account Balance: 	  Enable
33	Class Sign In Sheet (Print) - Show Yellow Alert: 	  Enable
34	Print Class Sign In Receipts 	 
35	Non Preregistered Client Alert 	 
36	Sign In / Self Sign-In - Look Ahead Window: 	
120
 minutes
37	Self Sign-In - Allow Signing in without Pre-Registration: 	  Enable
38	Self Sign-In - Allow Signing in Unpaid: 	  Enable
39	Self Sign-In - Automatically Sign Clients in: 	  Enable
40	Self Sign-In - Show Account Balance: 	  Enable
41	Self Sign-In - Alert Staff to Member Issues: 	  Enable
42	Sign In - Allow Signing in Unpaid: 	  Enable
43	Sign In - Change background color: 	
Never
44	Sign In - Flag/Prompt Non-Members: 	  Enable
45	Sign In - Late Check-In Window: 	
30
 minutes
46	Assistant 	  Enable
47	Assistant2 	  Enable
48	Class Sign in / Report – Show Client Visit Milestones 	  Enable
Class Schedule Appearance & Options
 	Type	 
1	Consumer Mode - Show Assistant: 	  Enable
2	Consumer Mode - Show Assistant 2: 	  Enable
3	Start Schedule on Monday or Sunday: 	  Sun   Mon
4	Open Weekly Classes Schedule to Current Day: 	  Enable
5	Group Classes By Visit Type: 	  Enable
6	Business Mode Show Class Statistics: 	  Enable
7	Consumer Mode Show # Open Class Spaces: 	  Enable
8	Hide Sign Up buttons from clients without a current series: 	  Enable
9	Client Recurring Reservations: 	  Disable
10	Bundle classes to allow for multi-day recurring reservations 	  Enable
11	Show Service Category Menu in Class Schedule: 	  Enable
12	Show Class Type Menu in Class Schedule: 	  Enable
13	Large/Multi-Loc Schedule use Daily List View: 	  Enable
14	Show Resources in Consumer Mode: 	  Enable
15	Show Substitute Teachers in Red: 	  Enable
16	Consumer Mode - Show Substitute Footnotes: 	  Enable
17	Business Mode - Show Substitute Footnotes: 	  Enable
18	Enable Quick Teacher Substitution: 	  Enable
19	Enable Class Notes: 	  Enable
20	Default Date Set to Next Class: 	  Enable
21	Enable Pick A Spot 	  Enable
Course Schedule Appearance & Options
 	Type	 
1	Consumer Mode - Show Assistant 1: 	  Enable
2	Consumer Mode - Show Assistant 2: 	  Enable
3	Auto Load Selected Client: 	  Enable
4	Enable Semesters: 	  Enable
5	Enable Courses: 	  Enable
6	Business Mode - Default Schedule View: 	
View All
7	Default Sort Option for Current Week View: 	
Enrollment Day/Time
8	Business Mode - Show Course Descriptions 	  Enable
9	Consumer Mode - Show courses that have already started: 	  Enable (unchecked - Lists Courses with Future Start Dates)
10	Allow Open Course: 	  Enable (unchecked - Force Clients to enroll in all days)
11	Show Service Category Menu in Course Schedule: 	  Enable
12	Show Class Type Menu in Course Schedule: 	  Enable
13	Enable Reservation Notes: 	  Enable
14	Hide Course Times in Schedule: 	  Enable
15	Track Make-ups: 	  Enable
16	Show Registrations in Client Info Screen: 	  Enable
17	Show Resources in Consumer Mode: 	  Enable
18	Allow clients to purchase course pricing options without enrolling: 	  Enable
19	Use drop-in-specific capacities: 	  Enable
20	Allow drop-ins to increase Courses capacity: 	  Enable
