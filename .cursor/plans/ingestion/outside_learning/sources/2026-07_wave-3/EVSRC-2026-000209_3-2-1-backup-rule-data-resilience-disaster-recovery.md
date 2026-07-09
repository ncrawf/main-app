# EVSRC-2026-000209 — The 3-2-1(-1-0) Backup Rule / Data Resilience & Disaster Recovery *(title inferred)*

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000209_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000209`  ·  filename: `EVSRC-2026-000209_3-2-1-backup-rule-data-resilience-disaster-recovery.md` *(proposed slug; Opus-main confirms rename)*
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=WJzsX32qMJY`  ·  source_title: `3-2-1 Backup Rule Explained: Protect Your Data from Disaster`
- channel_or_org: `IBM Technology`  ·  speaker: `Jeff Crume`  ·  published_at: `Jun 21, 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `screenshot + pasted transcript`
- content_type: `data resilience / backup strategy / disaster recovery / 3-2-1 backup rule / immutable backups / ransomware recovery / outage resilience / recovery planning`  ·  source_reliability_context: `IBM Technology educational security/resilience explainer. Useful for enterprise infrastructure hygiene, backup architecture, disaster recovery vocabulary, and resilience policy framing; general infrastructure guidance, not OMNI clinical or product doctrine.`  ·  topic_tags_light: `[data_resilience, backup_3_2_1, disaster_recovery, immutable_backup, air_gapped_backup, ransomware_resilience, backup_encryption, no_single_point_of_failure, availability_nines, RPO_RTO, restore_testing, D7_retention, classic_security_lane, geographic_separation]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Jeff Crume` · role_in_source: `presenter / educator` · affiliation_at_publication: `IBM Technology` · speaker_type: `educator` · authority_context: `IBM Technology IT-security educator; authority is generic-best-practice + consulting anecdote (NYC/NJ data-center offsite mistake; bank untested-backup failure), NOT vendor product authority` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `IBM Technology`  ·  interviewer / moderator / host: `n/a (single-presenter explainer)`
- event_context: `Short educational whiteboard-style explainer walking the classic 3-2-1 backup rule (3 copies · 2 media types · 1 offsite) then extending it to 3-2-1-1-0 (+1 immutable/air-gapped · 0 recovery errors), plus backup encryption, no-single-point-of-failure, and the cost of availability "nines" (99% → 99.999%).`  ·  perspective / conflict notes: `Generic vendor-neutral IT-resilience hygiene — no product pitch, no market stats to discount. Value = the DATA-DURABILITY / DR doctrine (recoverable, geo-separated, ransomware-resistant, encrypted, tested, no SPOF), NOT any specific tool. Not a thesis-spine source; it fills a "classic infra-security / disaster-recovery" substrate gap (converges with 203).`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [ ] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata (inferred from transcript; no screenshot) · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [~] update EVRUN concept registry (cross-source) — *fold packet returned to Opus-main; NOT edited here* · [~] update coverage matrix — *Opus-main folds* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

Transcript


Search in video
0:00
Three, two, one, liftoff, or disaster.
0:07
If we're talking data backups, failing to follow the three, two one rule will probably result in the latter.
0:13
So what is the three two one rule?
0:14
It's a set of principles to protect you from data loss.
0:18
Why should you care?
0:19
Data is everywhere.
0:20
You can always just make more, right?
0:22
Well, data is the lifeblood of the modern enterprise.
0:25
It's your secret sauce, your customer records.
0:28
Quite literally, it's both your future and your past.
0:32
And if you lose it, then it's gonna feel like you're on that rocket that just crashed after takeoff.
0:37
So let's take a look at the 3-2-1 rule to make sure this doesn't happen to you.
0:41
And if stick around to the end, I'll throw in a few more numbers I think you're gonna wanna know.
0:46
Okay, let's look at what are the aspects of the 3 2 1 rule.
0:50
First of all, there's a rule of three that makes up the three here.
0:54
And it's basically that we need three copies.
0:57
Of our data.
0:58
Now, why is that?
0:59
Well, we're going to have a primary copy of the data that we're working from
1:03
and everyone should understand you need at least one backup because if you don't have
1:08
that well then if the primary fails you've got nothing.
1:12
But bear in mind that if this thing goes down your one backup turns into no backups.
1:19
So you're very exposed even still if you have only a single backup.
1:24
A better idea, and this is what the rule of three is saying here, is that we have our
1:28
primary copy of the data, we have a backup copy, and we have another backup copy.
1:36
That way, now if we have two backups and one of them fails, then we still have a copy of our data.
1:43
So it's really simple.
1:44
The rule of 3 here being have three copies of your data, even if at least one of those is what you're actually using in production.
1:51
Now, the 2 portion of this.
1:54
Says I need two different types of media.
1:57
So I'm gonna store these backups on different types of storage devices.
2:02
Now, why would I need that?
2:03
Well, hardware sometimes fails.
2:07
So for instance, you might have stored this stuff on an SSD, solid state drive,
2:13
and maybe that manufacturer had a bad batch of these and a whole bunch of them start failing.
2:18
That's not hypothetical.
2:19
That has actually happened.
2:21
You're gonna wish that your backups were on something else as well.
2:25
So maybe we're gonna put some of this on a spinning disk, on a hard disk drive.
2:30
And maybe I even have it NAS attached, network attached storage.
2:35
So different technologies that are involved here so that if one fails, they don't all fail.
2:40
And maybe even one other option would be to put one of these in the cloud.
2:45
So I don't even know necessarily what technology is there.
2:49
But I know it's not the very same drives that I have here.
2:52
So three copies, two different types of media, and now we get down to the one.
2:57
At least one of these needs to be offsite.
3:01
Now, why is that?
3:02
Well, because we can have things like natural disasters.
3:06
If I have a fire, flood, earthquake, something like that, then it doesn't matter how many of these I have.
3:14
If they're all in one place, they all go up in smoke or they all get drowned.
3:19
Or they all crush from the earthquake.
3:21
So I need some, at least one of these to be offsite.
3:26
And that offsite, bear in mind, needs to have some geographical separation to it.
3:31
So by this, I mean, I worked with a client one time where their main data center, their main offices were in New York City,
3:39
and their offsite backup was just across the river in New Jersey.
3:44
That's not geographical separation.
3:46
If you have a hurricane, some massive winter storm that cuts the power to the whole area, well, then they're all going down.
3:53
So maybe you have one in New York and one in Arizona, for instance.
3:57
So you want them really separated that way.
4:00
There's three, two, one, three copies, two different types of media and at least one of them offsite.
4:06
But I've got some more numbers for you.
4:08
And now two more numbers, one and zero.
4:12
What do those mean?
4:12
Well, the one in this case means that I need at least one of these copies to be immutable or air gapped.
4:20
Now, what does that mean?
4:21
An immutable backup is one where, think of it almost like a diode, where I
4:26
can write one direction, the data flows in one direction but it doesn't go back the other way.
4:32
So if I have a backup that is immutable, I can right out to it once but then I can read from it as many times as I want.
4:40
I cannot overwrite that same.
4:42
Now, I can still keep writing to the same storage, but it just keeps appending and adding more to it.
4:47
Now, what's the value of that?
4:49
Well, if I have ransomware that has infected or encrypted my original copy,
4:53
then it would be nice to know that I have a copy that it cannot also encrypt, because once it's been written, it can't be changed.
5:01
So that's one example.
5:02
A lot of organizations will say, yeah, but we do air gapped.
5:06
Now, air gapping means just exactly that.
5:09
A lot of people that say they have air gap systems
5:12
really don't an air gap means that it means there's air there's literally no connection between these two.
5:19
So at some point there was a connection and then we separated them and at the point we separated then we took a snapshot.
5:28
And this will forever now be locked in that time.
5:33
In other words, the disadvantage to this is that it will not be current It will always be a snapshot and therefore will always be
5:40
constantly falling further and further out of date.
5:43
The example with this is we can continue writing and not worry about it being overwritten, so it's still protected.
5:50
But the big advantage here is I can keep writing out more copies.
5:54
So it will be more up to date.
5:56
But you need at least one of those to be immutable or error gapped so that it can't be changed after the fact.
6:03
And the zero, ready for this?
6:05
We want none of these, no errors.
6:09
Now, how does that happen?
6:11
Well, I'll tell you for instance, I worked with a bank one time and they had done
6:15
a good job of backing up all their data but what they didn't do was test those backups.
6:22
And once they had a disaster, they went to go pull all the data from their backups, they had nothing.
6:28
All of the data was useless.
6:30
So it's not enough to just do three, two, one, one.
6:34
You also need to go back and periodically test those things, verify that recovery in fact, still works.
6:41
Then if you have all of these things, you've got something that will really work.
6:45
Oh, and there's another thing.
6:47
Across all of this, what should we do?
6:49
We should encrypt these backups.
6:52
Because if we don't, someone may get a copy of one of these backups and then
6:56
be able to read what might be our sensitive information.
6:59
So encrypt, and you'll notice one of the things that I'm verifying or maintaining,
7:04
one of characteristics of this whole thing is I have no single points of failure.
7:10
Because a single point of failure will come back to haunt you.
7:13
So assuming we do all of this stuff, what are the benefits?
7:16
What's the payoff for us?
7:18
Well, it means we have among other things, protection against disasters, disaster recovery capabilities.
7:25
So as I mentioned, the fires, floods, and things like that.
7:28
It's basically Murphy's law, which says anything that can go wrong will go wrong.
7:32
And that's especially true when it comes to backups.
7:35
Another thing we're trying to guard against are attacks.
7:39
So where Murphy's Law is looking at accidental things that just happen in an imperfect world, attacks are intentional.
7:46
This is where someone's done ransomware or hacking into your systems and things like that.
7:51
So if they've done that and I have sufficient backups,
7:54
if someone does a ransomware attack and they say I've got your data and I'm not gonna give it to you until you pay me,
8:00
if I say I got a copy of my data too, you can go pound salt, then we're covered.
8:06
And then the other thing we can do is minimize downtime.
8:10
And every organization, whenever I ask them, how much downtime can you have?
8:14
What kind of availability requirements do you have, guess what they all say?
8:18
We need 24 by seven by 365.
8:24
And I'm thinking in my head, you mean 365 and a quarter, right?
8:27
You don't want leap day to be not working, right.
8:30
So, but that's an laudable goal.
8:34
But if you really thought about what that costs, in other words, if you never have a
8:37
second of downtime, here's some numbers just for you to consider.
8:42
If you have 99% uptime, you know how much downtime that means in a year?
8:48
It means three days.
8:51
So 99% sounds pretty good until you started looking at that.
8:54
Three days of downtime could be crippling for an organization.
8:57
So we call those two nines of availability.
9:00
What about if I have three nines of availability.
9:03
What does this lead to?
9:05
Well, this is gonna give us eight hours of downtime.
9:08
So basically a whole workday almost that's gonna be down even with three nines of availability.
9:14
About four nines, of availability, surely this will make everybody happy.
9:20
Well, four nimes will give you 52 minutes of downtime, it's almost an hour.
9:26
And maybe that's good enough in a lot of cases, but in some it won't be.
9:30
Let's say we go all the way on out here.
9:33
To five nines.
9:36
Now what are we going to end up with?
9:38
Five nines gives us around five minutes of downtime.
9:42
So this is something maybe it would be tolerable.
9:46
There are some cases where even that might not be acceptable.
9:50
But the bottom line is every single one of these has a cost.
9:54
And the further you move down, the more cost it is.
9:57
And the more you want to have the downtime minimized.
10:01
The more you're gonna have to invest in backups.
10:04
That's a huge part of all of this.
10:06
So the bottom line is that you're going to have outages.
10:09
The question is whether your environment will be resilient enough to weather the storm.
10:14
Following the 3-2-1 backup rule is a great start and adding a few more digits to the plan will make it even better.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️


source_platform: YouTube
source_url: https://www.youtube.com/watch?v=WJzsX32qMJY
source_title: 3-2-1 Backup Rule Explained: Protect Your Data from Disaster
channel_or_org: IBM Technology
speaker: Jeff Crume
published_at: Jun 21, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + visible transcript panel
content_type: data resilience / backup strategy / disaster recovery / 3-2-1 backup rule / immutable backups / ransomware recovery / outage resilience / recovery planning
source_reliability_context: IBM Technology educational security/resilience explainer. Useful for enterprise infrastructure hygiene, backup architecture, disaster recovery vocabulary, and resilience policy framing. Treat as general infrastructure guidance, not OMNI clinical or product doctrine.
priority: 3.25/5
depth: medium_semantic
recommended_status: route to Security, Infrastructure, D7 artifact durability, Evidence Plane preservation, disaster recovery, backup policy, restore testing, and operational resilience.

Topic tags:
[IBM_Technology, Jeff_Crume, data_resilience, data_recovery, backup_policy, disaster_recovery, three_two_one_backup_rule, immutable_backups, air_gapped_backups, ransomware_recovery, outage_resilience, restore_testing, recovery_point_objective, recovery_time_objective, D7_durability, Evidence_Plane, infrastructure_security, operational_resilience]




Priority: 3.25/5
Depth: medium semantic
Recommended status: route to §C Security / D7 retention + artifact durability / Infrastructure / Build-OS / Disaster Recovery / Evidence Plane preservation. This is not a thesis-spine source, but it is useful enterprise-resilience hygiene that OMNI should not skip.

Core takeaway

This video explains the classic 3-2-1 backup rule, then extends it into the stronger modern version:

3 copies, 2 media types, 1 offsite copy, 1 immutable or air-gapped copy, 0 recovery errors.

For OMNI, the real keeper is:

Data durability is not “we store it.” Data durability means recoverable, geographically separated, ransomware-resistant, encrypted, periodically tested, and free of single points of failure.

This matters because OMNI’s records are not casual files. They include PHI, consents, D7 artifacts, audit logs, Clinical Memory evidence, identity records, payment/commerce history, operator data, model lineage, and Build-OS doctrine.

Key concepts to preserve
1. Data is enterprise lifeblood

The source frames data as the enterprise’s “secret sauce,” customer records, future, and past. Losing it is not a minor IT inconvenience.

OMNI keeper: some OMNI data is operationally irreplaceable:

signed consents
clinical documentation
D7 source artifacts
audit trails
patient identity / relationship history
care obligations
commerce/entitlement records
provider approvals
model/version lineage
domain contracts and evidence registries
2. Three copies

The video’s first rule: have the primary data plus two backup copies, because one backup becomes zero backups if it fails.

OMNI keeper: a single backup is not resilience. For canonical domains, D7, audit, and doctrine repositories, OMNI needs redundancy by default.

3. Two media types

The second rule is using two different storage media or technologies, because correlated hardware failures happen.

OMNI translation: do not rely on one storage substrate, one cloud bucket, one vendor, or one database backup pattern for everything.

4. One offsite copy with real geographic separation

The source emphasizes that “offsite” must mean meaningful geographic separation, not just across the river in the same regional disaster zone.

OMNI keeper: disaster recovery must be region-aware. Federation, tenant topology, data residency, and backup geography need to be reconciled.

5. Immutable or air-gapped backup

The modern extension is at least one backup that ransomware cannot overwrite. Immutable backups allow append/read but not overwrite; air-gapped backups are disconnected snapshots, though they become stale over time.

OMNI keeper: ransomware resilience requires immutability or real air gap, not just “cloud backup.”

This is especially relevant for:

D7 documents
audit events
clinical source evidence
consent artifacts
financial ledgers
system-map doctrine
production database snapshots
6. Zero errors = tested recovery

The video’s “zero” means no recovery errors. Backups that are never tested may be useless during a real disaster.

OMNI keeper: backup existence is not proof. Recovery must be tested.

Potential OMNI requirement:

Every critical data class has an RPO/RTO target and a periodic restore test.

7. Encrypt backups

Backups must be encrypted, because a backup copy may itself be stolen or exposed.

OMNI keeper: backup encryption is part of PHI/security posture, but it must connect to key management and crypto agility. Encrypted but unrecoverable is also failure.

8. No single points of failure

The source names “no single points of failure” as a core characteristic of the backup plan.

OMNI keeper: this is broader than storage. OMNI should hunt single points of failure across:

data storage
identity provider
email/SMS rails
payment rails
key management
model provider
D7 object storage
audit log storage
deployment pipeline
doctrine/evidence repo
9. Availability has explicit cost

The video explains that 99%, 99.9%, 99.99%, and 99.999% uptime correspond to very different downtime budgets, and each higher level costs more.

OMNI keeper: not every domain needs five nines. OMNI should define availability by workflow criticality:

patient safety / clinical escalation: higher
payment/checkout: high
patient messaging: high but degradable
marketing dashboards: lower
analytics rollups: lower
Build-OS non-prod: lower
OMNI translation

This is a resilience substrate source.

The important OMNI move is to stop saying “backup” generically and instead classify data by:

canonicality
sensitivity
retention requirement
restore priority
acceptable data loss
acceptable downtime
immutability requirement
encryption/key requirement
tenant/operator boundary
geographic/data-residency constraint

Possible policy shape:

data_class → backup_policy → RPO/RTO → media/location → immutability → encryption → restore_test_cadence → owner

Likely OMNI landing zones

§C Security / Infrastructure

backup policy
ransomware-resilient storage
immutable backup posture
disaster recovery
restore testing
no-single-point-of-failure register

D7 Documents

durable artifact backup
consent artifact retention
PHI document recovery
immutable evidence preservation

Audit / Evidence Plane

append-only audit logs
evidence registry recovery
source-capture durability
model/version lineage preservation

Federation

data residency
geographic separation
operator-specific backup policy
cross-tenant recovery boundaries

Build-OS

repo backup
doctrine corpus backup
restore drills
migration rollback
infra-as-code recovery
Doctrine candidates
A backup that has not been restored is only a hope.
Data durability requires recoverability, not merely storage.
Critical records need immutable or air-gapped recovery paths.
Backup geography must be meaningful, not symbolic.
Availability targets are business decisions with cost.
No single point of failure is a design requirement, not a slogan.
Backup policy should be data-class-specific, not system-wide generic.
Net-new / sharpen / affirm

Net-new candidates

data_resilience_policy
Policy mapping each OMNI data class to backup count, media diversity, offsite/region posture, immutability, encryption, RPO/RTO, and restore testing.

restore_test_cadence
Required periodic proof that backups can actually be restored.

immutable_recovery_copy
A ransomware-resistant backup copy that cannot be overwritten by compromised production credentials.

Sharpen existing

D7 artifact_integrity → add recovery durability, not just stored/rendered integrity.
Evidence Plane → evidence must be recoverable and immutable where required.
classic_security_lane → backup/restore belongs beside crypto agility and promptware.
operating_metrics → uptime/downtime/RTO/RPO should be measured per critical workflow.

Affirm

boring infrastructure security is core substrate work
ransomware resilience requires immutability
recovery must be tested
different workflows deserve different uptime targets
backups must be encrypted and geographically separated

Reject / do not over-import

Do not assume 3-2-1 alone is enough for PHI/SOC2/HIPAA-grade systems.
Do not treat air-gapped backups as always current.
Do not target five nines everywhere.
Do not confuse backup with high availability.
Do not let backup copies become ungoverned PHI sprawl.
Hard read

Useful, basic, and necessary.

This is not OMNI doctrine spine, but it fills a boring enterprise-resilience gap:

OMNI’s truth stores only matter if they survive ransomware, vendor failure, region failure, operator mistakes, bad migrations, and broken restore paths.

Shortest OMNI version:

OMNI needs backup doctrine by data class: three copies, diverse media, true offsite separation, immutable recovery, encryption, restore testing, RPO/RTO targets, and no single points of failure.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `TK` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Formalizes Knox Review 001 (medium semantic / 3.25); does not re-derive.** Grounded vs §1 verbatim. Two-axis reality-check: `doctrine` (vs §C security lane + the C3.1 covered-thin "classic infra-security" family + D7 retention + Federation data-residency + operating-metrics + `workflow_lane_as_architecture_unit`) + `build` (repo grep from `/Users/bloomfrontdesk1/Desktop/main-app`: **no** backup/restore/DR/RPO-RTO/air-gap/immutable-recovery/backup-encryption/SPOF/availability-target tooling; the only "immutable" hits are **append-only *record* immutability** — `audit_events` immutable-append, immutable chart narrative, append-only claims/observations — a DISTINCT concept from immutable *recovery copies*; `expires_at` retention hint + "future retention runtime" reserved fields exist but no data-class backup policy). Binds nothing (`GRD-036`/`GRD-044`).

**Headline:** the wave's **backup / disaster-recovery / data-durability gap-filler** — the second "classic infra-security" leg alongside 203's crypto/PQC leg (both answer the **C3.1 covered-thin "classic infra-security"** concern). Formalizes the classic **3-2-1** rule (3 copies · 2 media types · 1 offsite) extended to **3-2-1-1-0** (+1 **immutable/air-gapped** recovery copy · **0** recovery errors = *tested* restore), plus **encrypt backups**, **no single point of failure**, and **availability "nines" have explicit cost** (99% = 3 days down, five-nines = 5 min — pick the target per workflow criticality, not everywhere). 3 net-new §C/DR primitives (Knox's) + 2 proposed as-named. The keeper meta-line: **data durability ≠ "we store it"** — durability means *recoverable, geo-separated, ransomware-resistant, encrypted, periodically tested, and free of single points of failure*, classified **by data class**, because OMNI's stores are consents / clinical memory / D7 artifacts / audit trails / identity / commerce / model-lineage — operationally irreplaceable. **A backup that has not been restored is only a hope.**

### A. Concept clusters (medium)

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **data is operationally irreplaceable (durability by data class)** | some OMNI records cannot be "made more of" — consents, clinical docs, D7 artifacts, audit trails, identity/relationship history, care obligations, commerce/entitlement, provider approvals, model lineage, contracts/evidence registries; durability must be classified per data class | §C security · D7 retention · thesis (canonical-truth-is-sacred) · Reservoirs | "data is the lifeblood of the modern enterprise" [0:22]; "your secret sauce, your customer records" [0:25] | PARTIAL (truth-sacred, but no data-criticality classification) | absent | none | vocabulary | watch |
| 2 | **3 copies — redundancy by default** | one backup becomes zero if it fails; canonical domains, D7, audit, doctrine repos need redundancy by default, not a single copy | §C security · Build-OS (repo/doctrine backup) | "one backup turns into no backups" [1:12]; "have three copies of your data" [1:44] | PARTIAL (platform Supabase backups ≠ doctrine) | absent | none | vocabulary | watch |
| 3 | **2 media types — substrate diversity (no correlated failure)** | do not rely on one storage substrate / one cloud bucket / one vendor / one DB-backup pattern; storage-substrate analog of §B model-pluggability + 203 no-single-vendor | §C security · Federation (vendor) · §B (substrate-diversity parallel) | "two different types of media" [1:54]; "bad batch… start failing" [2:13] | ABSENT | absent | none | vocabulary | watch |
| 4 | **1 offsite w/ REAL geographic separation (region-aware DR)** | "offsite" must mean meaningful geo separation (not across-the-river same disaster zone); reconcile with Federation topology, tenant residency, data-residency, backup geography | Federation (residency/topology) · §C security · Settings | "New York… New Jersey… not geographical separation" [3:39-3:46]; "New York and one in Arizona" [3:53] | PARTIAL (Federation/residency exists; backup-geo unlinked) | absent | none | vocabulary | watch |
| 5 | **immutable / air-gapped recovery copy (ransomware resilience)** | ≥1 backup ransomware cannot overwrite — write-once/append ("diode"), or a disconnected air-gap snapshot (but air-gap goes stale); **DISTINCT from OMNI's existing append-only *record* immutability** | §C security · D7 (durable evidence) · Evidence Plane · audit-log durability | "immutable… write one direction… doesn't go back" [4:26]; "ransomware… copy it cannot also encrypt" [4:53] | PARTIAL (append-only records exist; immutable *recovery copy* ABSENT) | partial (append-only audit/records; immutable *backup* absent) | none | spine (safety) | promote |
| 6 | **0 errors = TESTED recovery (existence ≠ proof)** | untested backups may be useless in a real disaster; every critical data class needs an RPO/RTO target + periodic restore test — "the backup existed but restored to nothing" | §C security · Build-OS (restore drills) · operating-metrics | "test those backups… had nothing" [6:15-6:28]; "periodically test… verify that recovery works" [6:34] | ABSENT | absent | none | spine | promote |
| 7 | **encrypt backups (tie to KMS + crypto agility)** | a backup copy may itself be stolen; encrypt it — but connect to key management + 203 crypto-agility; encrypted-but-unrecoverable (lost keys) is also failure; long-lived encrypted backups carry harvest-now-decrypt-later risk | §C security · Settings (crypto policy) · D7 · (composes 203 `crypto_agility_policy` + `harvest_now_decrypt_later_risk`) | "we should encrypt these backups" [6:49]; "someone may get a copy… read sensitive information" [6:56] | PARTIAL (platform at-rest only; not doctrine) | absent (app-level) | none | vocabulary | watch |
| 8 | **no single point of failure (broader than storage)** | SPOF-hunt is a design requirement, not a slogan — across storage, identity provider, email/SMS rails, payment rails, KMS, model provider, D7 object storage, audit-log storage, deploy pipeline, doctrine/evidence repo | §C security · thesis (no-god-domain) · Federation · CNS · Build-OS | "no single points of failure" [7:04]; "single point of failure will come back to haunt you" [7:13] | PARTIAL (no-god-domain implies it; no resilience register) | absent | none | spine | promote |
| 9 | **availability has explicit cost (nines per workflow criticality)** | 99/99.9/99.99/99.999 = 3d / 8h / 52m / 5m down-budget, each costing more; define availability by **workflow criticality** (patient-safety/clinical-escalation high · checkout high · messaging degradable · marketing/analytics/non-prod low) — not five-nines everywhere | operating-metrics · `workflow_lane_as_architecture_unit` · §C · BIZOPS · (converges 204 per-lane resourcing) | "99%… three days" [8:48]; "five nines… five minutes" [9:38]; "every single one has a cost" [9:50] | PARTIAL (lane-criticality lens exists; availability-target-per-lane ABSENT-as-named) | absent | none | spine-adjacent | promote |

### B. Net-new primitives (dedup vs EVRUN-000001 §2A + 000002 registry + wave-3 minted 201/202/203/204; **dedup-pending, Opus-main verifies**)
- `data_resilience_policy` — meaning: per-data-class policy mapping **data_class → backup_count · media_diversity · offsite/region posture · immutability · encryption · RPO/RTO · restore_test_cadence · owner** — **EXISTS-AS: net-new (§C security / DR umbrella).** Composes with 203 `security_migration_lifecycle` + `harvest_now_decrypt_later_risk` + D7 retention + `data-class sensitivity`. Mint (the umbrella of this source). *(Knox candidate)*
- `restore_test_cadence` — meaning: required periodic proof that a backup can actually be restored (the "0 errors" keeper) — **EXISTS-AS: net-new (§C; Build-OS restore-drill artifact).** Mint. *(Knox candidate)*
- `immutable_recovery_copy` — meaning: a ransomware-resistant, write-once/append backup copy that compromised production credentials cannot overwrite — **EXISTS-AS: net-new (§C).** **Explicitly distinct from OMNI's existing append-only *record* immutability** (`audit_events` immutable-append / immutable chart narrative) — do NOT conflate. Safety-bearing. Mint. *(Knox candidate)*
- `single_point_of_failure_register` — meaning: an explicit, maintained inventory of SPOFs across storage/identity/rails/KMS/model-provider/object-storage/audit/deploy/doctrine-repo, with mitigation posture — **EXISTS-AS: net-new-as-NAME; principle = thesis no-god-domain + Federation; not a new mechanism.** Propose (sharpen-or-mint — **dedup-pending, Opus-main verifies**).
- `availability_target_per_workflow` — meaning: a governed availability/uptime target (RPO/RTO + nines) set per workflow criticality, not one global SLA — **EXISTS-AS: net-new-as-NAME; sharpens `operating_metrics` + `workflow_lane_as_architecture_unit`; converges 204 per-lane resourcing.** Propose (**dedup-pending, Opus-main verifies**).
- (sharpen, EXISTS-AS) `classic_security_lane` (this + 203 fill **C3.1 covered-thin**; 209 = backup/DR leg, 203 = crypto/PQC leg) · `D7 artifact_integrity` (+ *recovery durability*, not just stored/rendered integrity) · Evidence-Plane (evidence must be *recoverable* + immutable where required) · `harvest_now_decrypt_later_risk` (203; long-lived encrypted backups inherit it) · `crypto_agility_policy` (203; backup-encryption keys need rotation/agility) · `operating_metrics` (uptime/downtime/RTO/RPO measured per critical workflow) · Federation (data-residency ⟷ backup geography).

### C. Reread flags
- **No screenshot / no Knox metadata block** → URL / title / speaker / channel / published_at all `TK`. Metadata inferred from transcript style (single-presenter whiteboard IT-security explainer; 3-2-1-1-0 + availability-nines format; consulting anecdotes) → channel/speaker **unconfirmed** (style consistent with an IBM Technology-type educator, but NOT asserted). `identity_confidence: inferred`. If Nick later drops the screenshot, firm §0/§0.1.
- **Terminology-collision flag (important):** OMNI already uses "immutable / append-only" for **audit + clinical records** (`audit_events` immutable-append; immutable chart narrative; append-only claims/observations/consents). `immutable_recovery_copy` here is a **different** concept (ransomware-resistant *backup*, write-once media). Opus-main must keep these distinct in the registry — do not merge the DB-record-immutability build (present) into the backup-immutability doctrine (absent).
- **C3.1 linkage + `08` REV-181:** flag to whoever owns the C3.1 covered-thin families — 209 is the **backup/DR half** of the "classic infra-security" fill (203 was the crypto/PQC half). Same close-eligible `08` REV-181 classic-security item both 203 and 209 feed → surface the pair to the trifecta.
- **Convergence (folded in registry, not here):** cluster 9 (availability-per-workflow) converges with **204** (per-lane runtime resourcing) + `workflow_lane_as_architecture_unit`; clusters 3/7 converge with **203** (substrate/vendor diversity, crypto agility, harvest-now-decrypt-later); cluster 1 with **201** (company-owned governed data as strategic asset). 209 sits with **203** as the two "boring-but-necessary substrate-security" sources of the wave.

### D. One-line hard read + strongest OMNI line
- **Hard read:** useful, basic, necessary — NOT thesis spine, and it does not reshape the care thesis; it fills a boring enterprise-resilience gap: OMNI's truth stores (consents, clinical memory, D7, audit, identity, commerce, model-lineage) only matter if they survive ransomware, vendor failure, region failure, operator mistakes, bad migrations, and broken restore paths. Do NOT assume 3-2-1 alone suffices for PHI/SOC2/HIPAA-grade systems; do not confuse backup with high availability; do not target five-nines everywhere; do not let backup copies become ungoverned PHI sprawl.
- **Strongest OMNI line:** *"OMNI needs backup doctrine **by data class**: three copies, diverse media, true offsite separation, immutable recovery, encryption, restore testing, RPO/RTO targets, and no single points of failure"* — anchored by the sharpest keeper: **"A backup that has not been restored is only a hope."** [6:15-6:41]

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` · per-source deep-read: §3 Review 003 (this file) · impact: `§C security / classic-infra-security (primary — backup/DR/data-durability leg; fills C3.1 covered-thin alongside 203) · D7 retention (durable/recoverable artifacts + harvest-now-decrypt-later on encrypted backups) · Federation (data-residency ⟷ backup geography) · operating-metrics/BIZOPS (availability nines per workflow) · Build-OS (repo/doctrine backup + restore drills) · thesis no-god-domain (SPOF register)` · promotion: `watch → promote candidate (3 net-new §C/DR primitives + 2 proposed as-named; C3.1 classic-security gap-fill (backup/DR half); links 08 REV-181)`

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — transcript (§1) + Knox Review 001 pasted (Nick); §0/§0.1 metadata **inferred from transcript** (single-presenter IT-security explainer; no screenshot → speaker/channel/URL/title `TK (unconfirmed)`); §3 Review 003 written (Opus; medium, 9 clusters + 3 net-new §C/DR primitives [`data_resilience_policy` · `restore_test_cadence` · `immutable_recovery_copy`] + 2 proposed as-named [`single_point_of_failure_register` · `availability_target_per_workflow`], two-axis reality-check, terminology-collision flag on immutable-record-vs-immutable-backup); §4 filled; status → `analyzed`. Slug proposed → `3-2-1-backup-rule-data-resilience-disaster-recovery` (Opus-main confirms rename). **Fold packet returned to Opus-main** for `EVRUN-2026-000003` registry + coverage + anchor-ledger (this agent did NOT edit those — `GRD-044` cross-source synthesis is Opus-main's). Binds nothing (`GRD-036`).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.
