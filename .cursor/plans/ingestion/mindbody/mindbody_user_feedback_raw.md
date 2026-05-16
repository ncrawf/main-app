# Mindbody — user 15% gap list + improvement opportunities (raw ingest)

Source: user (verbatim)
Status: raw ingest — do not edit, do not analyze
Date: 2026-05-15

Ingestion note (preserved verbatim from user):
> [user can add a one-line framing here if helpful]

---

<!--
PASTE INSTRUCTIONS (delete this comment block before / after pasting; not required):

1. One bullet per gap.
2. For each gap, include:
   - WHAT Mindbody does (or fails to do)
   - WHY it's a problem in real medspa operations
   - WHAT you want OMNI to do instead (rough is fine; design TBD)
3. Group by domain if natural (scheduling / commerce / memberships / staff / clients /
   reports / settings / mobile / integrations / etc.), but not required.
4. Rough bullets are fine — don't worry about polish. Architectural root cause comes
   from the Layer 2 synthesis pass; this file is the raw signal.
5. Do not edit later. Frozen verbatim only.

Example format:

## Scheduling

- **Gap: Mindbody's waitlist offer doesn't auto-rebook**
  - WHAT: When a slot frees up, Mindbody pings the waitlist but requires the patient
    to manually re-enter the booking flow.
  - WHY: Patients drop off; clinic loses revenue; staff has to manually call.
  - WANT: OMNI auto-books the next eligible waitlisted patient with a 30-min
    confirmation window; falls through if not confirmed.

## Commerce

- **Gap: ...**
  - WHAT: ...
  - WHY: ...
  - WANT: ...
-->

Okay so main mind body failures, if I haven’t mentioned them elsewhere….


This may not be comprehensive, these are off the top of my head, in no particular order……. Keep in mind… we are designing for HYBRID hims vs medspa or procedural outpatient clinic capabilities. There is HIGH HIGH complexity here.

1 Need ability to control room vs provider vs resource… all independently, so that they can all align when needed, and that booking is impossible if not all 3 are aligned. Like. A provider schedule needs mgmt, they are in a particular room at 12-1pm time, then we need to also be able to specify, our 1 hydra facial machine gets applied to that hydrafcacil visit that got booked. Keep in mind the HF may have not been manually booked, with specifying the resource allocations. The system must account for it.    


2.  Ability to schedule broadly for a service, or appt  type. Then zero in on the service rendered, eg botox 36 units at checkout, while the service type gets tracked, everything recorded. Currently, mind body to my knowledge… we have to use botox as a “product” so we can specify botox $14/unit then we type in 20 units administered. Consider various ways we can achieve this elegantly  across services, inventory, bookkeeping, and actual products. a client may want to book a cheek filler treatment, a chin filler treatment, a botox treatment, how can we present all of that elegantly. It may have to be branching options??? Which mind body doesn’t currently support. Like. Schedule dermal filler visit, or broad injectable visit, choose drop down of services that can be included, . But its not super helpful for staff and for patients if 12 people are all on for “injector consult”. Like. That’s not enough granularity for us to plan the visits , know what’s going on on any treatment day. We want to know if there’s botox, Dysport, jeaveau, cheek filler, lip filer all during one visit. Consider how other platforms or even other industries would solve this problem. How would a restaurant do it?? How would amazon do it? How would zoom do it. Let’s consider all surfaces of the scheduling encounter… like. We’re reserving time, and then we want to get granular on the interaction that will occur. Where it will occur. What resources will get used. And then tracking what gets done. 
3. We will need to weave subscriptions, memberships (if those 2 are different entities, yes they might be?/), point of sale, retail, gift cards, loyalty rewards, and whatever else into this experience for clients. 
4. Progres notes in mind body currently are not great. We will likely be designing progress notes (and/or surgical procedure notes?) elsewhere, like in the provider surface. But let’s consider how those get attached to visits. Whether they must always be attached to a “visit” or not. consider all the different types of visits, a voice “visit”, a video visit?, a in-person visit?, a system check in?, a procedure encounter? Like for moms surgery, or for a endoscopy. 
5. Mindbody is not designed for office or video visits, then dedicated surface for procedure rooms. Let’s Sayan endoscope has 20 in clinic visits with speciaslit. Then another provider or same provider has 10 scopes at the facility on xyzzy day. We’ve acknowledged elsewhere, that we will not be replacing surgical center software?? That’s not what OMNI is? But what about procedure visits. How does that look different from an office visit? Does it look different than a medspa visit, with encounter plus mini procedure? Let’s consider long-term versatility with taxonomy, surfaces, and capabilities. We will plan for Hims and medspa capabilities up front. But we want to be able to service terms clinics, sleep labs, cardio groups, endocrine groups, plastic surgery groups, etc etc. that’s probably where the SaaS actually makes 10k per month subscription!!!! Let’s make sure we make that surface rich. What if more than 1 provider worked on the patient? What if there were 3 MA’s? What if there were 2 doctor’s working on patient. What if there was a send out path report attached to the visit, or not attached to the visit. What if labs were drawn. What if labs were ordered at th visit. How do all these things relate, remain trackable not just to humans, but also to OMNI CNS!
6. We will nee to track, of course, across patients, like, metrics on everything about the visits. Like, number of visits by x provider, number of upsells, check in vs checkout timing, how far over were you, idk. There’s probably many more elements that will come into play. Just thinking
7. How will we attach (or not attach) a Hims like weight loss plan to any scheduled visits. What if a visit includes weight loss discussion and HRT and a sprinkle of botox. 
8. Video visits. scheduled phone “visits”. Ad-hoc video visits. Ad-hoc phone calls. How do we organize a video visit at 12pm, then provider is in room 4 for botox at 1pm for in clinic botox. 
9. How do we display new, first time visits, if at all. 

Idk, there’s ALOT of info included int he screenshots already. Mind body isn’t re-inventing the wheel. We  mostly have to copy what they do well (they actually do ALOT of stuff pretty well at this point), incorporate it into our existing OMNI plan, and refine the limitations. And plan for multiple use cases.  Let’s continue to consider BROADLY what other industries do to organize relationship visits. Let’s consider what a non-scheduling technology might do different, or might do better than mind body, as in . Like. How does a CPU organize visits from the RAM, from other memory. How does an airport organize flights in and out, how does amazon schedule deliveries. How does a assembly line for ford motor company schedule machine working on a fixed car coming down the assembly line. What things do those other industries , or ones I haven’t mentioned, do well that we can incorporate for our organizational infrastructure to maintain $1B scope, scalability, versatility, and granular precision. 
