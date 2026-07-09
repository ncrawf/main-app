# EVSRC-2026-000224 — Dynamic Subagents: How to Run Parallel Agents Reliably in Deep Agents

Document type: `source_capture` · Lane / reservoir: `outside_learning`
**Status:** `raw_dropped` → `normalized` → `reviewed` → `analyzed` → `promoted | deferred`  ·  **current: `analyzed`**
Authority: `evidence_nonbinding` — captured source + interpretations only; binds nothing until routed + promoted.

> **HOW TO USE THIS FILE — two kinds of marks:**
> • `TK` = a field the normalizer (Opus) fills from the screenshot — **leave it alone.**
> • **⬇️ PASTE blocks = the ONLY spots Nick touches.** Exactly **3**: transcript (§1), **Knox read (§3 Review 001)**, gut note (§3 Review 002, optional). Plus: **drop the screenshot in chat** → Opus fills §0.
> Copy this into `sources/<YYYY-MM>/`, rename `EVSRC-2026-000224_TK.md` (id = highest EVSRC + 1), add a row to `../../00_index.md`.
>
> **Per-source flow (the standard):** Nick pastes transcript (§1) + Knox's strategic read (§3 **Review 001** — paste it AS-IS, however rich Knox makes it; do NOT reformat into fields) + optional gut note (§3 Review 002). Then the agent (Opus) writes **§3 Review 003 — formal deep extraction** (formalizing Review 001, NOT rediscovering it), updates the run's **concept registry** (cross-source synthesis), the coverage matrix, and fills **§4 pointers** at closeout. **The per-source deep read lives HERE in §3 — never in a separate sidecar/extraction file** (`GRD-044`). Cross-source synthesis lives in the EVRUN concept registry.

## §0 — Source identity / metadata  *(normalizer fills from the screenshot — leave `TK`)*
- evsrc_id: `EVSRC-2026-000224`  ·  filename: `EVSRC-2026-000224_dynamic-subagents-deep-agents-parallel-orchestration.md`
- source_platform: `YouTube`  ·  source_url: `https://www.youtube.com/watch?v=5AkdMangfNk`  ·  source_title: `Dynamic Subagents: How to Run Parallel Agents Reliably in Deep Agents`
- channel_or_org: `LangChain`  ·  speaker: `Colin Francis, Software Engineer at LangChain`  ·  published_at: `Jun 29, 2026`
- captured_at: `2026-07-07`  ·  captured_by: `Nick`  ·  capture_method: `YouTube screenshot + description + chapter list + pasted transcript`
- content_type: `dynamic subagents / Deep Agents / Decode / programmatic subagent orchestration / code-interpreter middleware / parallel agent fan-out / context isolation / task global / typed response schemas / workflow patterns / LangSmith traces / reliable coverage at scale`  ·  source_reliability_context: `Official LangChain technical walkthrough from a LangChain software engineer. Strong source for code-mediated orchestration of subagents, reliable coverage at scale, context isolation, and reusable workflow patterns. Highly relevant to Build-OS, AI Substrate, Agent Work Protocol, RLM-style orchestration, and eval/trace doctrine. Treat Deep Agents / Decode as implementation examples, not mandatory OMNI infrastructure.`  ·  topic_tags_light: `[LangChain, Colin_Francis, Deep_Agents, Decode, dynamic_subagents, programmatic_subagents, code_interpreter_middleware, task_global, workflow_keyword, context_isolation, parallel_agents, fan_out, typed_response_schema, reliable_coverage, orchestration_in_code, Classify_and_Act, Fan_Out_and_Synthesize, Adversarial_Verification, Generate_and_Filter, Tournament, Loop_Until_Done, LangSmith_traces, Build_OS, AI_Substrate, Agent_Work_Protocol, Polaris]`

## §0.1 — People / authorship / authority context  *(normalizer fills from screenshot + description + transcript — this is what makes a source a reservoir, not a transcript dump)*
- primary speaker(s):
  - name: `Colin Francis` · role_in_source: `speaker / presenter` · affiliation_at_publication: `LangChain (Software Engineer)` · speaker_type: `vendor (engineer/practitioner)` · authority_context: `Official LangChain technical walkthrough of a just-launched feature (dynamic subagents in Deep Agents / Decode); strong primary-source authority on the mechanism, vendor-positioned on the product` · identity_confidence: `high_from_operator_metadata`
- publisher / channel: `LangChain`  ·  interviewer / moderator / host: `n/a (solo walkthrough)`
- event_context: `LangChain product/engineering walkthrough video announcing the dynamic-subagents feature, published Jun 29, 2026`  ·  perspective / conflict notes: `Vendor source promoting LangChain's Deep Agents SDK + Decode terminal agent. Treat Deep Agents / Decode as implementation examples, not mandatory OMNI infrastructure (GRD-039 authority-is-descriptive). The six patterns are credited to prior Anthropic work on dynamic workflows.`

> **Authority is descriptive, not worship** (`GRD-039`): record *who* said it (raises relevance), but every claim still routes through evidence → interpretation → gated promotion. (Clinical reservoir extends this block heavily — authors / affiliations / journal / DOI-PMID / study-type / evidence-level / COI / retraction — `FWREG-006`.)

## §0.5 — Processing checklist
**Nick drops:** [x] transcript → §1 · [x] screenshot in chat · [x] **Knox strategic read → §3 Review 001** (paste as-is) · [ ] (optional) gut note → §3 Review 002
**Agent (Opus) does:** [x] id+filename · [x] §0 metadata from screenshot · [x] takes labeled · [x] **§3 Review 003 formal deep extraction** (formalize Review 001) · [ ] update EVRUN concept registry (cross-source) *(deferred → returned fold packet; Opus-main folds — this agent does not edit registry)* · [ ] update coverage matrix *(deferred → Opus-main)* · [x] **fill §4 pointers (closeout)** · [x] NO sidecar extraction file (`GRD-044`)

## §1 — Verbatim transcript  ·  layer: `raw_source`  ·  IMMUTABLE

⬇️⬇️⬇️  PASTE THE FULL TRANSCRIPT BELOW  (do not summarize)  ⬇️⬇️⬇️

In this video



Chapters

Transcript
Search in video
What are dynamic sub-agents?
0:00
Hi, I'm Colin and I'm a software engineer at LangChain.
0:03
In this video, I'm really excited to talk about the new feature we just launched for
0:07
Deep Agents in Decode called dynamic subagents. Your agent can already hand off work to subagents.
0:13
Dynamic subagents take this one step further and let it spawn and coordinate those subagents
0:18
programmatically by writing code. This gives your agent the ability to more reliably decompose and
0:24
break down large tasks into smaller parallel work items
0:28
where it might otherwise struggle.
0:30
Let me show you what this looks like.
Live demo: 15 parallel subagents in Deep Agents
0:31
This is Decode, our terminal coding agent
0:34
built using a Deep Agent.
0:35
I've got a request ready to send.
0:37
And one thing to know upfront is that the workflow keyword
0:40
can be used to signal to your agent
0:42
that you want it to write code and spawn subagents
0:45
to help do the job.
0:46
The request that I've got queued up here says,
0:48
run a workflow that fans out 15 subagents
0:51
and have each one write a different breakfast-themed tycoon game.
0:54
When those finish, I want the agent just to pick
0:56
the one that it thinks is the best and share it with me.
0:58
You can see the agent picked up my request
1:00
and you can see that it knows that I wanted it
1:02
to fan out the 15 subagents in parallel.
1:05
So a couple of things to watch here.
1:06
This panel that just popped up
1:08
is the dynamic subagents view.
1:10
This tracks every subagent that's running,
1:12
what each one is working on and how long it's taking.
1:15
Each phase that you see on the left side of the UI
1:18
represents one instance where the agent
1:20
is fanning out a batch of subagents in parallel
1:23
to handle one part of the task.
1:25
The agent is doing all of this by writing code
1:28
to programmatically spawn and coordinate
1:30
all of these subagents.
1:31
This is a really simple example, but dynamic subagents
1:35
are a really powerful feature that agents
1:37
can use for decomposing large tasks at scale.
1:40
So that's a look at dynamic subagents,
1:42
but let's dive in deeper.
Why sub-agents alone aren't enough
1:44
So why do we need this?
1:46
I think it helps to start with what we already have.
1:48
Deep Agents already has subagents, and they're great.
1:52
The main thing that they give you is context isolation.
1:54
Each subagent runs in its own context window.
1:57
It does a piece of the work,
1:59
and it hands back just the results.
2:01
So the main agent's context can stay clean.
2:04
That already exists, and it's still true here.
2:07
If subagents already do that though,
2:08
then why dynamic subagents?
2:11
Well, here's the gap.
2:12
Normally, the main agent orchestrates its subagents itself.
2:17
It calls the subagent tool, which is the task tool
2:19
in Deep Agents.
2:20
It looks at what comes back,
2:22
and then it decides what to call next,
2:24
and that process repeats until it thinks
2:26
it's completed the work that you asked it to do.
2:29
That's totally fine for a handful of calls,
2:32
but all of that orchestration is happening
2:34
in the agent's own reasoning and in its own context.
2:38
The moment that the task gets really big or repetitive,
2:41
this starts to become unreliable.
2:44
You'll see that the agent will start to lose track,
2:46
it'll start to skip things.
2:48
It decides that it's done early.
2:49
Sometimes it takes a really bad trajectory.
The book-summarization example
2:52
So here's a great example of how to think about this.
2:56
Let's say that you want to summarize every page in a book.
3:00
And let's say that you have one subagent per page.
3:03
With plain tool calling, you're relying on the main agent
3:07
to call the subagent tool a few hundred times in a row.
3:10
And you're asking it to do all of that
3:12
without losing the plot.
3:14
With dynamic subagents, this just becomes a case
3:17
where the agent just needs to write a loop.
3:20
It just writes a few lines of code
3:22
that spins up one subagent per page
3:25
and collects the results.
3:27
So the orchestration effectively moves out of the agent's head
3:31
and into code.
3:33
And that's really the whole idea.
Orchestration in code vs. in the agent's head
3:35
When the orchestration logic is easier
3:38
or more reliable to express in code
3:41
than to have the agent generate it each turn,
3:44
the agent has the ability to write code.
3:46
The payoff here is really reliability at scale,
3:49
as well as complex multi-step workflows.
3:52
So what do you actually get
3:54
by moving orchestration into code?
3:56
Well, for us, two things really stand out.
3:59
The first one is reliable coverage at scale.
4:02
A loop runs for every item.
4:04
So the agent gets through, say, all 500 files,
4:07
not just the 75 files that it felt like doing.
4:11
Completeness then stops depending on the agent's discretion.
4:15
And it also stops becoming a prompt engineering problem
4:18
that you have to consistently try to tune
4:20
to get the right behavior.
4:22
The second is real control flow.
4:24
Things like loops and branching, retries,
4:27
and running things in parallel.
4:29
All the stuff that's really awkward and error-prone
4:31
when the agent has to do it turn by turn in its head,
4:35
that now just becomes a few lines of code
4:37
that the agent has to write.
4:39
And that's it.
How the code interpreter middleware works
4:40
So how does the agent run the code?
4:42
That's our code interpreter middleware.
4:44
Just a lightweight in-memory sandbox
4:46
and it gives the agent access to an eval tool.
4:49
And so this allows the agent to write a block of code,
4:53
give it to the eval tool, the runtime runs it,
4:56
and only the final result comes back to the agent,
4:59
which is part of how the context stays so clean.
The task global: spawning subagents from code
5:01
The important part for us with dynamic subagents
5:04
is that the middleware also exposes
5:07
a task global by default.
5:08
I mentioned the task tool and the task global is just a
5:11
programmatic version of that tool that the agent can use in
5:14
code to programmatically spawn subagents. So spawning a sub-
5:18
agent from inside that code is just a programmatic function
5:21
call. The agent just has to call await task with a
5:26
description, a subagent type, and optionally, it can also pass
5:30
a dynamically generated response schema so that the result
5:33
from the task global comes back typed. That typed result is
5:37
really important because it's what lets the agent loop or branch on what its subagent
5:42
returns. Allowing for more complex multi-step workflows, all in code. There's really just
How to trigger it with the workflow keyword
5:48
two things that you need to use this. The first is just attach the code interpreter middleware.
5:53
If you're building your own Deep Agent with the Deep Agents SDK, all you need to do is import the
5:59
code interpreter middleware and pass it in when you're creating your agent. And that's it. The
6:07
global to programmatically spawn subagents. This also ships by default in Decode, which
6:12
is what you saw in the demo. So the second piece is how do you trigger it? Well, you
6:16
trigger it using the workflow keyword. Once the middleware is attached to your Deep Agent,
6:21
the agent can write code to orchestrate subagents, but it won't always decide to do
6:26
that on its own. Putting workflow in your request, though, is the signal that you want
6:30
it to. So for example, "review every file in this PR" may or may not fan out, but something
6:37
like "run workflow to review every file in this PR"
6:40
explicitly tells the agent that you want it
6:42
to write the orchestration code.
6:44
So I want you to keep this in mind
6:46
because this is exactly how you steer every one
6:48
of these patterns that I'm about to show you
6:50
in the coming slides.
The six patterns overview
6:52
Here are the six patterns that are most common.
6:55
These patterns naturally emerge based on the shape
6:58
of the task that the agent is solving.
7:00
And like I said, you steer it
7:02
with how you phrase the workflow request.
7:05
These patterns were originally coined by Anthropic
7:07
in their work on dynamic workflows,
7:09
but we see the same shapes show up in dynamic subagents.
7:14
I'll walk you through all six,
7:15
and for each one, I'll give you the kind of task it fits,
7:18
the request that gets you there,
7:20
and we'll also take a look at a real LangSmith trace
7:22
so you can see it happen.
Pattern 1: Classify and Act
7:24
Pattern one is Classify and Act.
7:27
This one's the simplest, and this one's all about routing.
7:29
You use this when your inputs are all jumbled together,
7:32
and different kinds need different handling
7:35
via different subagent types.
7:37
You would reach for this when you're doing work
7:38
like triaging support tickets or sorting error logs
7:42
or routing user feedback.
7:45
The agent reads each one of the items.
7:47
It decides what type the item is
7:50
and it hands it to the subagent that's right for that type.
7:53
To steer towards this,
7:55
phrase the workflow requests around the types.
7:57
Something like run a workflow to take these 200 tickets,
8:01
figure out what each one is and handle it the right way,
8:04
whatever the right way is for your specific type and task.
8:08
That "figure out what each one is" is really
8:10
what makes it classify first
8:12
instead of treating every item as the same.
8:15
Let's jump into the LangSmith trace for this
8:16
to see what it looks like.
8:18
First, you can see the request I sent.
8:21
I said run a workflow to triage the support tickets
8:23
in a specific JSONL file that I set up.
8:26
I explicitly asked the agent to classify each as a bug,
8:29
a feature request, or a question.
8:31
And I also gave it specific handling instructions
8:34
for each one of those types. What's interesting here is that you'll see that the classify part of the
8:39
Classify and Act pattern took place over a read file call and an eval call. And that's interesting
8:45
because we found that the agent could work the best when it could naturally decompose tasks in
8:50
whatever way it saw fit. So in this case, the agent used its read file tool to take a look at the
8:56
JSONL file that I pointed it at. It took a look at each ticket in the JSONL file and then it used
9:01
its eval tool, which is it using the code interpreter middleware to classify each of
9:06
those tickets. And you can see that it created an array of tickets, put every one of the tickets
9:11
in that array, and then it classified each one as a bug, a feature request, or a question.
9:17
And so the act part of the Classify and Act pattern is in the second eval call that we see.
9:23
What you'll notice is that the agent then sorted each ticket — for bug tickets,
9:28
it added a little more detail in the body, and then it did the same for each of the feature tickets.
9:33
It sorted each of the question tickets.
9:35
So it created a separate array for each ticket type and added a little bit more detail
9:39
based on the classification that it did earlier.
9:43
Going a little bit further down, you can actually see where it's using the task
9:46
global and fanning out to different subagents.
9:49
So you can see that it fanned out in parallel, all of the bugs to the bug
9:53
investigator subagent type.
9:55
So what's really interesting is the agent has the ability to target
9:58
specific subagent types for different tasks that it's solving.
10:01
So all of the bugs went to the bug investigator subagent type,
10:05
all of the features went to the feature analyst subagent type,
10:08
and all of the question tickets went to the
10:10
support responder subagent type.
10:12
Another thing to note here is that you see a description.
10:15
Each description is essentially just
10:17
the system prompt that's being passed to the specific subagent.
10:21
The last thing I'll point out here is that you can see that we have
10:24
a dynamically generated response schema based on
10:26
the request that I sent and the handling that I wanted for each ticket classification type.
10:31
So the agent is able to dynamically generate those response schemas and that gives it a
10:36
way to know that it's going to have a specific output from the task global call.
10:40
So let's take a look at what this actually looked like.
10:44
Here's the full triage summary with all 10 tickets.
10:46
You can see the bug classifications, the feature request classifications, and the question
10:51
classifications.
10:52
You can also see that the agent took specific action that I asked it to take in the request
10:57
for each of those specific ticket types.
10:59
So that's Classify and Act.
Pattern 2: Fan Out and Synthesize
11:01
The next pattern is Fan Out and Synthesize.
11:04
This one's all about coverage.
11:06
This is where you have the same job, you have many items, and you want to run all of these
11:10
in parallel and have them merged into one final answer as your output.
11:15
You would reach for this for more like per-file code reviews, maybe analyzing a batch
11:20
of documents, or performing the same check across a whole fleet of services.
11:25
You steer towards this pattern with words like "every" and "all" plus a single combined
11:30
output.
11:31
So an example of a request that I might send here is "review every file in this PR"
11:36
and give me one summary of the problems.
11:38
The "every" word forces the coverage, and "one summary" here is what adds the synthesize
11:43
step on the end.
11:44
So let's take a look at the trace.
11:47
You can see the request that I sent.
11:48
I said, run a security review workflow
11:51
over the utility code in source_utils.
11:53
I said, cover every file in that directory,
11:55
don't skip any, then give me a single prioritized report
11:58
of the top risks.
11:59
So that single prioritized report
12:01
is the synthesize step that I asked for.
12:04
Here's the eval call where the agent is writing code.
12:08
You can see that it organized each file
12:10
in the source_utils directory into a files array.
12:13
And then you can see where it used Promise.all
12:15
to fan out to each subagent type that it's targeting.
12:19
In this case, it's just targeting one.
12:20
It's targeting a security reviewer.
12:22
You can see that every security reviewer subagent
12:25
is getting a small variation of this description,
12:28
the system prompt, that's just different
12:30
based on the file type.
12:32
And then you can also see the response schema
12:34
that was dynamically generated by the agent.
12:37
You can see here "reviews."
12:38
This final line here is the final return type
12:40
that actually ends up going back
12:42
into the main agent's context.
12:44
So let's take a look at the fan-out.
12:47
So you can see each of these fan out.
12:50
And you'll also notice that when it returned these reviews,
12:53
we have one more eval call here
12:56
where the agent took the reviews
12:58
and it performed a flatten and ranked them as well.
13:01
It did a flat map and then it was able to rank
13:03
all of these based on severity.
13:05
So we have critical, high, medium, and low.
13:09
And so that completes the fan-out and the synthesize.
13:12
And so we should be able to see the final report
13:14
generated. And here it is. So the agent gave me the full
13:19
prioritized security report across all five files. It found 48 total: eight critical, 18
13:26
high, 14 medium, and eight low. And you can see that it gave me the information I asked
13:30
for in my request. The third pattern is Adversarial Verification. This one's all about precision.
Pattern 3: Adversarial Verification
13:38
You would use this when a wrong answer is expensive, and you'd rather miss a few things
13:43
than report something false. You'd want to reach for this when you're performing work
13:48
around things like security audits or compliance checks or high-stakes reviews where you want
13:53
high confidence. Typically this pattern is going to run in two passes. The first pass is what goes
13:59
wide. It's the one that produces the candidates. The second is where we send those candidates to
14:05
independent verifiers. And then only the findings that survive a final majority vote are the ones
14:11
that get reported back to you.
14:13
To steer towards this pattern,
14:15
ask for confidence explicitly.
14:17
As an example, you might say something like,
14:19
run a workflow to find the security issues,
14:21
but only report the ones that you're sure about
14:24
and double check each one before you do.
14:27
That "double check" is what adds the second adversarial pass.
14:31
I said run a security audit workflow
14:33
over the utility code in the source/utils directory.
14:36
Cover every file in that directory
14:38
and look for vulnerabilities.
14:39
And then the key here is I said,
14:41
independently verify each one before it goes in the report.
14:45
I doubled down on this and I said,
14:46
"I only want real confirmed issues,
14:48
so no maybe or theoretical risks."
14:50
And then I asked it for a short report
14:52
of the confirmed findings at the end.
14:53
So let's take a look at that.
14:56
So here's the first eval call we see.
14:59
You can see the files array that was set up again
15:01
based on the files in the source/utils directory.
15:04
But interestingly here,
15:05
we see that the agent actually commented and said,
15:08
hey, here's stage one where I want you to audit all files in parallel.
15:12
So it fanned out,
15:13
this is the candidate pass where it's generating the candidates.
15:16
In this case, we're targeting the auditor subagent type.
15:19
Here's our description, which is again, the system prompt.
15:21
Again, it's only just being differentiated based on the file type.
15:25
Again, we see our dynamically generated response schema.
15:28
If you go a little bit further down,
15:30
you can see where it's using what it knows is going to be
15:33
included in that response schema to write code.
15:35
Additionally, you can see "all findings" here.
15:37
So we have an all findings variable and this is what's being returned to the
15:40
main agent's context.
15:42
So it's going to see this before taking the next step,
15:45
which should be the verification pass.
15:47
So let's take a look at that.
15:49
Okay.
15:50
We see our second eval call here.
15:52
And what I really want to point out here is you'll notice "all findings" here.
15:56
Variables that are stored are persistent across eval calls.
16:00
So in eval call one, the agent created this "all findings" variable,
16:04
and then it was able to both return the data from that
16:07
because that was the final return of that eval
16:09
to the agent's main context,
16:11
but it was actually also able to incorporate that
16:14
in code in the second eval call,
16:16
which is again a really powerful thing
16:18
because it allows the agent to be iterative.
16:20
Also, because it was able to use the response schema,
16:24
it's able to know what fields
16:26
are going to be included on "all findings."
16:28
So you can see for each finding,
16:29
it knows it's going to have a type,
16:30
a line, evidence, explanation, et cetera.
16:33
So it gives the agent the ability to orchestrate
16:36
some of these multi-step, more complicated workflows.
16:40
So again, you can see that in this case,
16:41
we're doing the verification pass
16:43
and we're targeting the verifier subagent type.
16:46
You can see the system prompt that's sent to each verifier
16:49
and you can see the dynamically generated response schema
16:52
where we're looking at confirmed or a reason.
16:55
So let's take a look at the final output of this.
16:59
So you can see here that we actually ended up confirming
17:02
22 of the 26 with four being rejected.
17:04
And you can see the reason for each rejection here.
17:07
And you can see the fan-out as well.
17:10
So let's go up and look at our final output from the agent.
17:13
And here it is.
17:14
You can see that it reported 22 confirmed findings,
17:17
four were rejected.
17:18
And here's the security audit report generated
17:21
from adversarial verification.
17:23
So a really cool pattern used for high confidence.
Pattern 4: Generate and Filter
17:27
Pattern four is Generate and Filter.
17:30
This is when I would say we're moving more into quality as a focus.
17:34
In this pattern, you'll take several subagents,
17:37
have them independently take a shot at the same type of problem,
17:40
and then the agent scores them and keeps the strongest one.
17:44
You'd use this for more open-ended work
17:46
where one attempt usually isn't the best attempt.
17:50
Reach for this for architectural proposals,
17:52
refactoring strategies, or content variations.
17:56
To steer towards this pattern, ask for several,
17:59
and then ask to pick.
18:00
So for example, you might say,
18:02
run a workflow to give me different approaches
18:05
to this refactor, and then tell me which one
18:08
is the best and why.
18:09
The "a few different approaches" is what creates
18:13
the diversity, and "which one is the best"
18:15
is what adds the filter.
18:17
So let's jump into the trace for this one.
18:19
In this case, you can see my request.
18:21
I'm focusing on a rate limiter here.
18:23
I'm saying, hey, this is the wrong design for our scale
18:26
and I've been trying to do one-shots,
18:28
but they just keep coming back mediocre.
18:30
I asked the agent to run a workflow
18:32
that explores a few different redesigns.
18:34
I asked for token bucket, sliding bucket,
18:36
sliding window, leaky bucket, and GCRA.
18:40
I asked it to write each one as a concise design sketch
18:43
and to write it under its own file
18:45
in a candidates directory.
18:46
Then I asked it to weigh them on a few different criteria
18:50
and recommend the strongest with a clear rationale
18:53
for why it wins.
18:54
So let's take a look at that.
18:57
So this first eval should be our generate.
18:59
And we see that the agent took those designs
19:01
for the rate limiter that I asked for
19:03
and it expanded on them.
19:05
So it targeted the candidates directory with a file
19:08
and here's token bucket and here's the prompt
19:10
and the design that it's asking the subagent to generate.
19:14
Going a little bit further down,
19:15
we can see the sliding window counter
19:17
and the file that it's targeting for that.
19:19
We can see the leaky bucket
19:20
and the file that it's targeting for that.
19:22
And the last one is GCRA.
19:24
So here's all of my designs.
19:26
And you can see that at the bottom,
19:28
this is where we're doing the fan-out using the task global.
19:31
And in this case, we're targeting the systems designer
19:33
subagent.
19:34
Now, what's interesting about this one compared
19:36
to every other example that I've showed you
19:39
is that we don't have a response schema here.
19:41
And the reason that we don't have a response schema
19:43
for this one is because we told the agent
19:45
to write all of these to a file.
19:47
So that's one option that you can pick as well
19:50
if it fits your use case better.
19:52
So that should be the generate step.
19:54
Well, let's go look for the filter.
19:56
One thing to notice as I'm scrolling through all this,
19:58
we talked about context a lot.
20:00
You can see just how long each of the subagent calls go for
20:03
and how many tool calls they're making
20:05
as they're trying to generate the rate limiter design.
20:08
This is all about context isolation.
20:10
So this is where subagents are really powerful
20:12
because all of this is staying out
20:14
of the main agent's context window.
20:16
We see a few eval calls,
20:18
but what's really interesting here
20:19
is we can see that the filter decision here
20:21
is actually happening as a regular task tool call.
20:24
And this goes back to what I mentioned about being iterative and not forcing the agent into a specific
20:29
way of tackling these problems.
20:31
So in this case, it handled the generate step with an eval call that fanned out to the systems
20:37
designer.
20:37
But once the designs were done, then it handed it using a regular task tool call to a design
20:42
evaluator.
20:43
So this is where it's actually selecting the best of the designs.
20:46
And we can go back up and look at what the final output of that was.
20:50
We can see the files that were produced.
20:52
We had Token Bucket, the sliding window,
20:54
the Leaky Bucket, and GCRA.
20:56
And here's our scoring matrix, and the winner was GCRA.
Pattern 5: Tournament
21:00
Tournament is pattern five.
21:02
Tournament is Generate and Filter's competitive cousin.
21:04
This is for when "best" is more subjective
21:07
and hard to score directly.
21:09
Instead of rating everything at once,
21:11
the variants go head to head,
21:12
and a judge subagent compares them in pairs,
21:15
just like you would think of any other tournament.
21:17
The winners advance, rounds run until one is left standing,
21:20
and style selection, picking a tone,
21:23
which of these implementations feel best
21:25
is the criteria that we're judging on.
21:27
To steer towards this, frame it as a competition.
21:30
"Run a workflow to draft several versions of this headline
21:34
and pick the strongest by comparing them against each other"
21:36
is an example of a request that I might send.
21:39
That "comparing them against each other"
21:41
is really what turns this into a bracket
21:43
instead of a single scored list.
21:45
So let's hop into the trace for this one.
21:48
You can see in this case, I have a createOrdersHandler.
21:50
I said it's messy and I want the best possible rewrite.
21:53
I said run a workflow that produces several candidate
21:55
rewrites with different priorities:
21:58
readability, robustness, performance, and minimal diff.
22:01
I wanted it again to save each one to its own file
22:03
under the candidates directory.
22:05
And then I explicitly said,
22:07
compare them head to head in a tournament,
22:08
advancing winners until one stands out.
22:10
The first part of our tournament here,
22:12
here are our candidates that the agent generated.
22:15
And you can see that it is fanning out,
22:17
in this case, to the writer subagent.
22:19
Again, because we're writing the files,
22:20
we don't have a dynamically generated response schema.
22:23
So we've now generated our candidates.
22:25
The next eval we should see should be the first part
22:28
of the tournament.
22:28
And here we go.
22:29
We found another eval call.
22:32
And aptly named round one.
22:34
So round one, you can see that we're fanning out to a judge.
22:37
And we're comparing candidate A and candidate B.
22:40
So this is readability versus robustness.
22:44
It also includes the original here.
22:46
And then you can see a second judge call.
22:47
We're putting head-to-head performance versus minimal diff.
22:51
And you can see that we have an output for this that goes back
22:54
into the main agent's context, which is the output of round one.
22:57
So we should see round two further down.
23:00
And we do.
23:02
And you can see that this is the final.
23:04
So again, we're fanning out to the judge subagent type.
23:07
And in this case, you can see that robustness and performance
23:09
both moved on from round one.
23:11
And now we're comparing those head-to-head
23:13
to figure out who the actual winner is going to be.
23:15
So let's go up and take a look at the final result.
23:18
We can see robustness won.
23:20
We can actually see the tournament bracket breakdown here
23:22
where we had readability versus robustness, performance
23:24
versus minimal diff, robustness and performance moved on,
23:27
and robustness was the ultimate winner.
Pattern 6: Loop Until Done
23:29
The final pattern is Loop Until Done.
23:32
This one's all about exhaustiveness.
23:34
The agent runs a pass, it deduplicates against what it already
23:37
found, runs another, and it really only stops
23:39
when a pass turns up nothing new.
23:42
Use this for exhaustive searches, dead code detection,
23:45
and dependency audits. To steer towards this,
23:48
make completeness the stopping condition.
23:50
For example, you might say something like,
23:52
run a workflow to find all the dead code in this repo
23:55
and don't stop until a full pass turns up nothing new.
23:58
The "all" and the "don't stop until" are what creates the loop
24:02
and also gives the agent an exit point.
24:04
So let's take a look at this trace.
24:06
You can see the request I sent.
24:08
Run a thorough security review workflow
24:10
over the code in source utils.
24:11
Work in passes, each pass looks only for issues earlier
24:14
passes missed, and you keep going only while new issues keep turning up. In this case,
24:18
I capped it at three passes, but you could let this run until nothing new shows up.
24:23
So here's our first call. And you can see pass one. It's explicitly saying, hey, this is a broad
24:28
sweep, all five files in parallel, general security issues. So this is the first attempt at
24:33
surfacing issues. And you can see we're summarizing what pass one already found. So this is the
24:38
deduplication step. And then we're fanning out again using what pass one already found as
24:44
context for pass two so that we can try to surface new issues.
24:49
And this should be the final pass three.
24:51
So you can see it's building "all combined."
24:53
It's building a combined list of all the findings so far.
24:56
Again, for deduplication.
24:58
And here's the third pass, which is saying an ultra-targeted
25:01
sweep: give each scanner the full "already found" list.
25:03
So those are all three passes.
25:05
And we can see what the final output here looked like.
25:08
Perfect.
25:08
You can see it says all three passes done.
25:10
Here are the consolidated findings.
25:12
So it went through three rounds.
25:14
It kept deduplicating what the previous rounds found,
25:17
and it ran three times.
25:18
But again, you could let this run exhaustively
25:20
until it completely finishes.
Wrap-up and getting started
25:23
So those are all six patterns.
25:25
And that's dynamic subagents.
25:27
Dynamic subagents add reliable programmatic orchestration
25:31
on top so your agent can take a big job, break it
25:34
into a lot of small ones, and actually finish them
25:37
reliably at scale.
25:39
Two places to get started:
25:40
attach the code interpreter middleware to your Deep Agent,
25:43
or you can just reach for Decode where it's on by default.
25:47
We're really excited about dynamic subagents,
25:49
and we can't wait for you to try it out.
25:51
I'm Colin.
25:52
Thanks for watching.

&nbsp;



⬆️⬆️⬆️  END OF TRANSCRIPT  ⬆️⬆️⬆️

## §2 — Screenshot / visible source details  ·  layer: `raw_source_metadata`

*Nothing to paste here — just **drop the screenshot in chat** and the normalizer fills §0. (Or paste the visible title / channel / URL / date below.)*

## §3 — Interpretations & review log  ·  append-only (each reviewer adds a new entry; never overwrite)

### Review 001 — Knox / ChatGPT strategic read  ·  layer: `captured_interpretation_nonbinding`
- reviewer: `Knox / ChatGPT` · type: `AI assistant` · at: `TK` · purpose: `strategic source-local interpretation`

> Knox's read is the **strategic source-local interpretation** — paste **exactly what Knox outputs**, however rich, in ONE block. Do NOT split it into fields or trim it. Knox's output typically already carries: priority/depth · source type + authority context · why this matters for OMNI · core takeaway · OMNI translation · likely landing zones · doctrine/primitive pressure · keeper doctrine · what-not-to-import · hard read. (What we ASK Knox to produce = `_KNOX_STRATEGIC_READ_PROMPT.md`.) The agent's §3 Review 003 **formalizes** this (it does not re-derive it).

⬇️⬇️⬇️  PASTE KNOX'S / CHATGPT'S FULL READ BELOW (as-is)  ⬇️⬇️⬇️

Rough metadata for Opus

source_platform: YouTube
source_url: https://www.youtube.com/watch?v=5AkdMangfNk
source_title: Dynamic Subagents: How to Run Parallel Agents Reliably in Deep Agents
channel_or_org: LangChain
speaker: Colin Francis, Software Engineer at LangChain
published_at: Jun 29, 2026
captured_at: 2026-07-07
captured_by: Nick
capture_method: YouTube screenshot + description + chapter list + pasted transcript
content_type: dynamic subagents / Deep Agents / Decode / programmatic subagent orchestration / code-interpreter middleware / parallel agent fan-out / context isolation / task global / typed response schemas / workflow patterns / LangSmith traces / reliable coverage at scale
source_reliability_context: Official LangChain technical walkthrough from a LangChain software engineer. Strong source for code-mediated orchestration of subagents, reliable coverage at scale, context isolation, and reusable workflow patterns. Highly relevant to Build-OS, AI Substrate, Agent Work Protocol, RLM-style orchestration, and eval/trace doctrine. Treat Deep Agents / Decode as implementation examples, not mandatory OMNI infrastructure.
priority: 4.75/5
depth: technical_architecture_reference
recommended_status: route to AI Substrate, Build-OS, Agent Work Protocol, dynamic workflow patterns, recursive orchestration, context-memory doctrine, operating_metrics, and Polaris trace/proof layer.

Topic tags:
[LangChain, Colin_Francis, Deep_Agents, Decode, dynamic_subagents, programmatic_subagents, code_interpreter_middleware, task_global, workflow_keyword, context_isolation, parallel_agents, fan_out, typed_response_schema, reliable_coverage, orchestration_in_code, Classify_and_Act, Fan_Out_and_Synthesize, Adversarial_Verification, Generate_and_Filter, Tournament, Loop_Until_Done, LangSmith_traces, Build_OS, AI_Substrate, Agent_Work_Protocol, Polaris]

Review 001 — Knox / ChatGPT strategic read

layer: captured_interpretation_nonbinding

Priority: 4.75/5
Depth: technical architecture reference
Recommended status: route to AI Substrate / Build-OS / Agent Work Protocol / dynamic workflow registry / context-memory doctrine / traceable orchestration.

Core takeaway

This source is about moving orchestration out of the model’s fragile turn-by-turn reasoning and into code.

Dynamic subagents let a Deep Agent spawn and coordinate subagents programmatically by writing code, so large tasks can be broken into smaller parallel work items more reliably.

OMNI translation:

For large, repetitive, high-coverage work, do not ask the main agent to remember hundreds of steps in its head. Let it write controlled orchestration code, fan out bounded subagents, collect typed results, and synthesize.

This sharpens the RLM source. RLM gave the broad primitive. This video gives the actual workflow patterns.

Key concepts to preserve
1. Dynamic subagents = programmatic fan-out

The transcript defines dynamic subagents as a feature that lets the agent spawn and coordinate subagents programmatically by writing code. This gives the agent a more reliable way to decompose large tasks into smaller parallel work items.

OMNI keeper:

Dynamic subagents are not just “more agents.”

They are:

code-mediated subagent orchestration.

Potential primitive:

programmatic_subagent_orchestration

A parent agent writes bounded orchestration code to spawn subagents, collect results, and control workflow shape.

2. Context isolation is the first benefit

Deep Agents already had subagents, and the transcript names their core value: each subagent runs in its own context window, does a piece of work, and returns only results, keeping the main agent context clean.

OMNI keeper:

Subagents are context isolation devices before they are “autonomous workers.”

For OMNI:

source chunk reviewer
D7 page extractor
PR file reviewer
contract-section reviewer
trace screener
eval-case generator
citation verifier

Each can work in a local context and return a typed result, instead of polluting the main agent context.

Doctrine candidate:

Subagents protect the parent context by returning results, not their entire working memory.

3. Subagents alone are not enough

The source is clear: normal subagent orchestration still happens inside the main agent’s reasoning/context. That works for a few calls, but gets unreliable when the task becomes large or repetitive; the agent loses track, skips things, stops early, or takes bad trajectories.

OMNI keeper:

This is the anti-“just let the agent handle it” lesson.

For coverage-heavy OMNI work, the problem is not model intelligence alone. It is control flow.

Doctrine candidate:

Repetitive orchestration should not depend on the agent remembering the loop.

4. Orchestration moves from the agent’s head into code

The book example is the cleanest: summarizing every page in a book should not require the agent to call a subagent tool hundreds of times without losing the plot. With dynamic subagents, the agent writes a loop that spins up one subagent per page and collects results. The transcript explicitly says orchestration moves out of the agent’s head and into code.

OMNI translation:

If a task has an obvious loop, branch, retry, fan-out, or stopping condition, encode that in orchestration code instead of prompt pressure.

This is huge for Build-OS and D7.

5. Reliable coverage at scale

The transcript names the payoff: reliable coverage at scale. A loop runs for every item, so the agent gets through all 500 files, not just the 75 it felt like doing. Completeness stops depending on agent discretion or prompt tuning.

OMNI keeper:

This is a direct doctrine candidate:

Completeness should be enforced by control flow, not vibes.

For OMNI:

review every file in a PR
extract every page in a PDF
classify every source in a corpus
test every eval case
screen every trace cluster
check every benefit edge case
process every row in a reconciliation file
6. Real control flow

The second payoff is real control flow: loops, branching, retries, and parallel execution. The transcript contrasts this with the awkwardness of making the agent do those things turn-by-turn in its own head.

OMNI keeper:

The substrate should expose workflow primitives directly:

loop
branch
fan-out
retry
dedupe
majority vote
filter
tournament
stop condition
aggregation

Doctrine candidate:

Agent workflow control flow should be explicit and traceable.

7. Code interpreter middleware as lightweight execution surface

The agent writes code into an eval tool; the runtime executes it; only the final result returns to the agent, helping keep context clean.

OMNI keeper:

This is a middle layer between pure chat and full sandbox.

Useful distinction:

pure model reasoning
code-interpreter orchestration
sandboxed execution
domain tool execution
production commit

Dynamic subagents belong in controlled orchestration, not unconstrained production mutation.

Doctrine candidate:

Code execution for orchestration is not authority to mutate production state.

8. task global and typed result schemas

The middleware exposes a task global, a programmatic version of the task tool, allowing the agent to spawn subagents with a description, subagent type, and optional dynamically generated response schema. Typed results let the agent loop or branch on subagent outputs.

OMNI keeper:

Typed subagent outputs are crucial.

For OMNI, subagents should not just return prose. They should return structured objects:

classification
confidence
cited evidence
extracted fields
recommended action
risk tier
failure reason
accepted/rejected
verifier result
next-step signal

Doctrine candidate:

Subagent outputs should be typed when downstream control flow depends on them.

9. Workflow keyword as explicit routing signal

The transcript says dynamic subagents may not always be chosen automatically; using “workflow” signals that the user wants code-based orchestration. For example, “review every file in this PR” may or may not fan out, while “run workflow to review every file in this PR” explicitly tells the agent to write orchestration code.

OMNI keeper:

OMNI should have explicit mode triggers.

Potential primitive:

workflow_mode_trigger

A user/system instruction that routes a task into structured orchestration rather than ordinary chat/tool use.

For Build-OS, maybe:

“run workflow”
“coverage mode”
“verification mode”
“exhaustive pass”
“candidate generation”
“adversarial verify”
The six workflow patterns
1. Classify and Act

Use when inputs are jumbled and different kinds need different handling. The transcript gives examples: support tickets, error logs, user feedback. The agent classifies each item, then routes it to the right subagent type.

OMNI use cases:

classify patient messages by intent
classify source docs by doctrine domain
classify trace failures by cause
classify SNF documents by note type
classify billing issues by ledger/benefit/payment
classify support tickets into bug / feature / question

Doctrine candidate:

Classify-before-act when heterogeneous inputs require different handlers.

2. Fan Out and Synthesize

Use when the same job must run over many items, then merge into one final answer. The transcript names per-file code review, batch document analysis, and fleet-wide service checks. It says “every” forces coverage and “one summary” adds synthesis.

OMNI use cases:

review every file in a PR
analyze every source in a batch
extract every page of a document
inspect every trace in a cluster
score every eval task
synthesize one prioritized issue list

Doctrine candidate:

Fan out for coverage; synthesize for decision usefulness.

3. Adversarial Verification

Use when a wrong answer is expensive. The pattern runs wide to produce candidates, then sends candidates to independent verifiers, and only reports findings that survive verification/majority vote.

The example asks for only real confirmed issues, no maybe/theoretical risks. The trace confirms 22 of 26 findings and rejects 4 with reasons.

OMNI use cases:

security review
clinical extraction fidelity
medication reconciliation concerns
billing/entitlement corrections
high-risk source doctrine promotion
compliance checks
patient safety escalations

Doctrine candidate:

When false positives are expensive, require independent verification before reporting.

4. Generate and Filter

Several subagents independently attempt the same problem, then the agent scores and keeps the strongest. The transcript suggests architectural proposals, refactoring strategies, and content variations.

OMNI use cases:

propose alternate domain designs
compare refactor strategies
generate documentation structures
draft multiple product flows
compare routing policies
produce several marketing/copy variants

Doctrine candidate:

Use generate-and-filter when quality benefits from multiple independent attempts.

5. Tournament

Tournament is described as generate-and-filter’s competitive cousin, useful when “best” is subjective and hard to score directly. Variants go head-to-head; judge subagents compare pairs; winners advance until one remains.

OMNI use cases:

choose between UX/copy variants
compare architectural proposals with fuzzy criteria
pick the best documentation framing
decide between implementation strategies
evaluate subjective tone/style options

Doctrine candidate:

Use tournament comparison when quality is relative and subjective.

6. Loop Until Done

This pattern runs passes, deduplicates against what was already found, runs again, and stops only when a pass finds nothing new. The transcript names exhaustive searches, dead code detection, and dependency audits.

In the example, each pass looks for issues missed by earlier passes, uses prior findings as context, deduplicates, and continues up to a cap.

OMNI use cases:

exhaustive source gap detection
dead-code review
repeated D7 extraction failure discovery
trace-cluster mining
unsupported-use-case discovery
contract inconsistency search
duplicate/fraud/anomaly checks

Doctrine candidate:

Use loop-until-done when completeness is the stopping condition.

OMNI translation

This source gives OMNI a reusable dynamic workflow pattern library.

Not all agent tasks should be handled the same way. The shape of the task should determine the orchestration pattern:

heterogeneous inputs → Classify and Act
many items, same check → Fan Out and Synthesize
high false-positive cost → Adversarial Verification
open-ended design quality → Generate and Filter
subjective comparison → Tournament
exhaustive discovery → Loop Until Done

The substrate lesson:

Agent workflows need explicit pattern selection, typed subagent outputs, traceable fan-out, and bounded runtime budgets.

Likely OMNI landing zones

AI Substrate

code-mediated orchestration
task global / subagent spawning
response schema contracts
workflow pattern registry
recursion/fan-out limits
trace capture per subagent

Build-OS

file-by-file code review
contract refactoring
source ingestion
eval corpus generation
documentation generation
architecture proposal comparison

Agent Work Protocol

choose workflow pattern by task shape
require typed outputs
cap loops/fan-outs
preserve trace lineage
verify high-risk findings
distinguish candidate vs confirmed output

Knowledge Reservoirs

subagent outputs become candidate structured records
aggregation preserves lineage
no silent promotion into memory

operating_metrics

subagent count
pass count
fan-out latency
token/cost per pattern
verifier rejection rate
coverage completion rate
duplicate rate
accepted-output rate

Polaris / Proof Layer

trace of every fan-out
evidence for classification/routing
verification proof
synthesis lineage
rejection reasons
final aggregation proof
Doctrine candidates
Repetitive orchestration should not depend on the agent remembering the loop.
Completeness should be enforced by control flow, not vibes.
Subagents protect the parent context by returning results, not their entire working memory.
Agent workflow control flow should be explicit and traceable.
Subagent outputs should be typed when downstream control flow depends on them.
Classify-before-act when heterogeneous inputs require different handlers.
Fan out for coverage; synthesize for decision usefulness.
When false positives are expensive, require independent verification before reporting.
Use generate-and-filter when quality benefits from multiple independent attempts.
Use tournament comparison when quality is relative and subjective.
Use loop-until-done when completeness is the stopping condition.
Code execution for orchestration is not authority to mutate production state.
Net-new / sharpen / affirm
Net-new candidates

dynamic_workflow_pattern_registry
A registry of reusable orchestration patterns selected by task shape: classify/act, fan-out/synthesize, adversarial verification, generate/filter, tournament, loop-until-done.

programmatic_subagent_orchestration
Parent agent writes controlled code to spawn subagents, branch, retry, aggregate, and return typed results.

typed_subagent_result_contract
Schema-defined outputs that allow parent agents or workflow code to branch, filter, verify, deduplicate, and aggregate reliably.

workflow_mode_trigger
Explicit user/system signal that routes an agent into code-mediated workflow orchestration.

coverage_enforced_control_flow
Workflow design where loops/fan-out guarantee item coverage instead of relying on agent discretion.

Sharpen existing

recursive_agent_orchestration
This source operationalizes it through dynamic subagents and task globals.

state_externalized_context
Subagent work stays outside parent context; only typed results return.

deterministic_coverage_mode
Fan-out and loop-until-done are concrete coverage modes.

Agent Work Protocol
Adds explicit pattern choice and subagent output contracts.

operating_metrics
Adds pattern-level runtime metrics: cost, latency, pass count, verifier rejection, coverage completion.

Affirm
subagents are context isolation tools
large repetitive tasks need code-level control flow
parallel fan-out improves coverage
typed outputs matter
verification should be separate for high-stakes findings
subjective quality may need comparative evaluation
exhaustive search needs explicit stopping conditions
traces are essential to inspect dynamic workflows
Reject / do not over-import
Do not let dynamic subagents run unbounded.
Do not use fan-out when a simple direct answer is enough.
Do not confuse subagent consensus with domain truth.
Do not treat judge subagents as final authority in high-risk clinical/business contexts.
Do not allow code-interpreter orchestration to mutate production state.
Do not ignore cost explosion from large fan-outs.
Do not let workflow keywords become hidden magic without trace/policy controls.
Hard read

This is a major AI substrate / Build-OS workflow-pattern source.

It turns “multi-agent” from vague architecture into concrete control-flow patterns.

The keeper:

The right way to scale agent work is often not more prompt pressure. It is explicit orchestration: loops, fan-out, typed results, verification passes, tournaments, deduped repeated passes, and traceable aggregation.

Shortest OMNI version:

OMNI should maintain a dynamic workflow pattern registry. For each large task, choose the orchestration shape — classify/act, fan-out/synthesize, adversarial verify, generate/filter, tournament, or loop-until-done — then run bounded subagents with typed outputs, trace every step, and keep authority with the governing workflow/domain.

&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 002 — Nick operator note  ·  layer: `human_context_nonbinding`
- reviewer: `Nick` · type: `human founder/operator` · at: `TK`

⬇️⬇️⬇️  YOUR GUT NOTE BELOW  (optional)  ⬇️⬇️⬇️



&nbsp;



⬆️⬆️⬆️  END  ⬆️⬆️⬆️

### Review 003 — Opus / agent formal deep extraction  ·  layer: `analysis_nonbinding`  ·  (agent-authored, NOT a Nick paste)
- reviewer: `Opus` (or agent) · type: `AI assistant` · at: `2026-07-07` · purpose: `formalize Review 001 → structured per-source extraction → feed EVRUN concept registry` · binds nothing (`GRD-036`/`GRD-044`)

> The agent reads §1 verbatim + §3 Review 001 (Knox) IN FULL, then writes the formal per-source extraction HERE (not a sidecar). Formalize Review 001's strategic read — verify/sharpen it, do not re-derive. Per concept cluster: **concept · OMNI meaning · why · downstream homes (thesis §x / CNS / Build-OS / §C / capability-topology / Knowledge-Reservoirs / security / domain-contracts / UX-surfaces / product / future-watch) · source anchors (verbatim ≤12 words + timestamp) · stale-vs-v3 (ABSENT/PARTIAL/AFFIRM) · weight_tier (spine/vocabulary/low-authority-watch/no-op) · status (promote/watch/reject).** Then: **net-new primitives** (dedup vs registry — don't re-mint) + **reread flags**. Cross-source convergence is folded into the EVRUN **concept registry**, not duplicated here.

⬇️⬇️⬇️  AGENT WRITES THE FORMAL EXTRACTION BELOW  ⬇️⬇️⬇️

**Tier:** `full` (technical-architecture reference; a focused single-feature product walkthrough, but semantically rich — 6 named patterns + mechanism). **Convergent, not frame-extending:** this is the *pattern-library sharpening* of `EVSRC-2026-000220` (RLMs in Deep Agents) and a sibling of 215/216/217 — same LangChain agent-runtime family. It supplies concrete **task-shaped orchestration patterns** on top of 220's low-level recursion mechanic. Binds nothing (`GRD-036`/`GRD-044`).

### Headline verdict
**AFFIRM + operational-vocabulary; 2 genuine net-new (dedup-pending), 0 frame-extension, ~0 build.** The source moves agent orchestration **out of the model's fragile turn-by-turn reasoning and into code** — a parent agent writes bounded orchestration code that spawns subagents, collects **typed** results, and controls workflow shape. Every doctrine claim it implies OMNI already holds (subagents = context isolation; `candidate≠commit`; `containment≠authority`; completeness-by-control-flow-not-vibes; typed outputs; trace-everything). Its real yield is a **reusable dynamic-workflow pattern library** selected by task shape (Classify-and-Act · Fan-Out-and-Synthesize · Adversarial-Verification · Generate-and-Filter · Tournament · Loop-Until-Done) plus a **typed-subagent-result contract**. It is the concrete *how* under the 201/210/214/220 "workflow-lane is the unit / agent≠owner-of-truth" spine. **Build reality: absent** — repo grep (`app lib components scripts supabase repo middleware.ts`) shows the 160 `orchestrat` / 241 `workflow` / 4 `fan-out` hits are all the domain **rules-engine / notification dispatcher / clinical chart-review**, NOT agent-subagent orchestration; `subagent`/`task global`/`code interpreter`/`response schema`/`verifier`/`tournament`/`adversarial`/`deep agent`/`eval tool` = **0**. Matches siblings 215/216/220 (all build=absent; REV-158/REV-199 are doctrine, uncoded).

### A. Concept clusters

| # | concept | OMNI meaning | downstream homes | source anchor (≤12w + [timestamp]) | doctrine | build | conflict | weight | status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | dynamic subagents = code-mediated (programmatic) subagent orchestration | For large/repetitive/high-coverage work the parent doesn't hold N steps in its head — it writes bounded orchestration code that spawns + coordinates subagents. The operational twin of 220's recursion mechanic. | §B AI-substrate runtime · Build-OS · Agent-Work-Protocol · CNS | "spawn and coordinate those subagents programmatically by writing code" [0:13] | AFFIRM | absent | none | spine | watch (=220 mechanic; name, not net-new mechanism) |
| 2 | subagent = context-isolation device (before it is a "worker") | Each subagent runs in its own context window, does a slice, returns **only results** — the parent context stays clean. AFFIRMs OMNI `state_externalized_context` / context-window≠memory. | §B runtime · Knowledge-Reservoirs · CNS · Agent-Work-Protocol | "Each subagent runs in its own context window" [1:57] | AFFIRM | absent | none | spine | watch |
| 3 | subagents-alone-fail: turn-by-turn orchestration in the model's head is unreliable at scale | The problem at scale is **control flow, not model intelligence** — the agent loses track, skips items, quits early, takes bad trajectories when it must remember the loop. | Agent-Work-Protocol · Build-OS · CNS | "task gets really big or repetitive… becomes unreliable" [2:41] | AFFIRM | absent | none | spine | watch |
| 4 | orchestration moves from the agent's head into code | If a task has an obvious loop/branch/retry/fan-out/stop-condition, **encode it** rather than apply prompt pressure. The book-per-page loop is the canonical example. | Build-OS · Agent-Work-Protocol · §B runtime · CNS | "orchestration effectively moves out of the agent's head and into code" [3:31] | AFFIRM | absent | none | spine | watch |
| 5 | reliable coverage at scale = completeness enforced by control flow, not agent discretion | A loop runs for **every** item → all 500 files, not the 75 it felt like. Completeness stops being a prompt-tuning problem. **= 220 `deterministic_coverage_mode` (exact re-mint).** | §B runtime · Build-OS · Agent-Work-Protocol · operating-metrics · this-EVRUN-pipeline | "gets through all 500 files, not just the 75" [4:07] | AFFIRM | absent | none | spine | watch (=220 primitive) |
| 6 | explicit control-flow primitives (loop / branch / retry / parallel / dedupe / vote / filter / stop-condition / aggregate) | The substrate should expose workflow control flow **directly + traceably** rather than force it turn-by-turn in the model's head. | §B runtime · Build-OS · Agent-Work-Protocol · CNS · Polaris/proof | "loops and branching, retries, and running things in parallel" [4:27] | AFFIRM | absent | none | spine | watch |
| 7 | code-interpreter middleware / eval tool = lightweight execution surface (a tier between chat and full sandbox) | Agent writes a code block → eval tool runs it in an in-memory sandbox → only the final result returns (context stays clean). **Orchestration execution ≠ authority to mutate production** (`containment≠authority`). | §B runtime · §C Security (sandbox/containment) · Build-OS · Agent-Work-Protocol | "lightweight in-memory sandbox… gives the agent access to an eval tool" [4:46] | AFFIRM | absent | tension (pole A: code-exec is action-power; pole B: exec≠mutation-authority) | spine | watch |
| 8 | task global + typed (dynamically-generated) response schema = typed subagent-result contract | `await task(description, subagentType, responseSchema)` returns a **typed** object; typed results are what let the parent loop/branch/filter/verify/dedupe/aggregate. Variables persist across eval calls (iterative state). | §B runtime · Agent-Work-Protocol · Build-OS · Knowledge-Reservoirs (candidate structured records) | "pass a dynamically generated response schema so… comes back typed" [5:30] | PARTIAL | absent | none | spine | **promote (net-new candidate → B)** |
| 9 | workflow keyword = explicit mode-trigger routing into code-mediated orchestration | "review every file" may or may not fan out; "run **workflow** to review every file" explicitly requests orchestration code. OMNI's Agent-Work-Protocol already classifies work into modes/lanes at boot. | Agent-Work-Protocol (work-classification) · Build-OS · CNS · UX-surfaces | "'run workflow to review every file'… explicitly tells the agent" [6:40] | AFFIRM | absent | tension (pole A: implicit keyword magic; pole B: traceable/policy-governed routing) | vocabulary | watch |
| 10 | dynamic workflow pattern registry — patterns selected by **task shape** | Not all agent tasks are handled the same way; the shape of the task picks the orchestration pattern. Six patterns (credited to Anthropic's dynamic-workflows work) recur. | Agent-Work-Protocol · Build-OS · §B runtime · CNS | "Here are the six patterns that are most common" [6:55] | PARTIAL | absent | none | spine | **promote (net-new candidate → B)** |
| 11 | Pattern — Classify and Act (routing) | Heterogeneous inputs → classify each → hand to the right subagent type. OMNI: classify patient msgs / source docs / trace failures / billing issues, then route to the right handler. | CNS routing · Agent-Work-Protocol · Messaging/Intake · §B | "reads each item… hands it to the subagent that's right" [7:47] | AFFIRM | absent | none | vocabulary | watch |
| 12 | Pattern — Fan Out and Synthesize (coverage) | Same job × many items in parallel → merged into one output. "every" forces coverage; "one summary" adds synthesis. OMNI: review every PR file / extract every PDF page → one prioritized list. | §B runtime · Build-OS · Knowledge-Reservoirs · operating-metrics | "'every' forces coverage, 'one summary'… adds the synthesize" [11:43] | AFFIRM | absent | none | vocabulary | watch |
| 13 | Pattern — Adversarial Verification (precision) | Two passes: wide candidate pass → independent verifiers → only findings surviving majority-vote/verification reported. For expensive-false-positive work (security/compliance/high-stakes). Trace: 22/26 confirmed, 4 rejected w/ reasons. | §C Security · Build-OS · Polaris/proof · Agent-Work-Protocol · clinical-safety | "only findings that survive a final majority vote… reported" [14:11] | AFFIRM | absent | tension (pole A: verifier/vote = answer; pole B: consensus≠domain-truth, care/business commit) | spine | watch |
| 14 | Pattern — Generate and Filter (open-ended quality) | Several subagents independently attempt the same problem; parent scores + keeps the strongest. For architectural proposals / refactor strategies / content variants. Trace: 4 rate-limiter designs → GCRA won. | Build-OS · Agent-Work-Protocol · §B · product-design | "independently take a shot… agent scores… keeps the strongest" [17:37] | AFFIRM | absent | none | vocabulary | watch |
| 15 | Pattern — Tournament (subjective quality) | Generate-and-filter's competitive cousin: variants go head-to-head, a judge subagent compares pairs, winners advance until one remains. For fuzzy/subjective "best." Trace: robustness won. | Build-OS · Agent-Work-Protocol · Surface/Projection · product | "variants go head to head… a judge subagent compares them in pairs" [21:12] | AFFIRM | absent | tension (shares #13 pole: judge≠final authority in high-risk contexts) | vocabulary | watch |
| 16 | Pattern — Loop Until Done (exhaustiveness) | Run a pass, dedupe against what's found, run again, stop only when a pass turns up nothing new. Completeness is the **stopping condition**. For exhaustive search / dead-code / dependency audits. | §B runtime · Build-OS · Agent-Work-Protocol · operating-metrics | "only stops when a pass turns up nothing new" [23:39] | AFFIRM | absent | none | vocabulary | watch |

**Roll-up:** doctrine = **12 AFFIRM · 2 PARTIAL (#8, #10) · 0 ABSENT**; build = **16 absent / 0 present / 0 partial** (the `doctrine=AFFIRM · build=absent` dominant wave-3 pattern; #8/#10 are `doctrine=PARTIAL · build=absent` net-new candidates). No `direct_conflict`, no `unresolved` — 4 tensions (#7, #9, #13, #15), all resolved by existing OMNI law (see C / Tension convergence).

### B. Net-new primitives — `name — meaning — EXISTS-AS`  *(dedup vs EVRUN-000001 §2A + 000002 + this run's §2; "dedup-pending, Opus-main verifies")*

**Genuine net-new candidates (2):**
- `dynamic_workflow_pattern_registry` — a governed catalog of reusable orchestration patterns selected by **task shape** (classify-and-act · fan-out-and-synthesize · adversarial-verification · generate-and-filter · tournament · loop-until-done), each with a fit-signal, a steering phrase, typed-output expectation, and trace/budget requirements — **EXISTS-AS: net-new NAME (pattern-selection library) layered over `workflow_lane_as_architecture_unit` + 220 `deterministic_coverage_mode` + `autonomy_level`; distinct because it names the *selection layer* (which shape fits which task), not a single mechanism. Watch for `GRD-026` catalog-label risk — it is legible vocabulary for Agent-Work-Protocol, not a new god-mechanism. dedup-pending, Opus-main verifies.**
- `typed_subagent_result_contract` — schema-defined **output** of a subagent call (classification / confidence / cited-evidence / extracted-fields / recommended-action / risk-tier / accepted-rejected / verifier-result / next-step) so parent workflow code can loop/branch/filter/verify/dedupe/aggregate reliably — **EXISTS-AS: net-new (genuine); DISTINCT from 208 `spec_as_agent_contract` (per-task *input* spec), 217 `agent_manifest` (declare-before-run registry), `context_packet` (input context). This is the *return-type* contract. Safety-adjacent: downstream control flow + Knowledge-Reservoir candidate-records depend on it. dedup-pending, Opus-main verifies.**

**Reconciled — NOT net-new (EXISTS-AS; do not re-mint):**
- `programmatic_subagent_orchestration` (Knox) — **= 220 `deterministic_coverage_mode` mechanic + `recursive_agent_orchestration` NAME** (`workflow_lane` + candidate≠commit + fan-out + CNS). This source operationalizes it; not net-new.
- `coverage_enforced_control_flow` (Knox) — **= 220 `deterministic_coverage_mode`** (exact; "every item processed, not the ones it felt like"). Re-mint.
- `workflow_mode_trigger` (Knox) — **sharpens Agent-Work-Protocol work-classification / mode-selection + `autonomy_level`; net-new NAME only** (the "run workflow" keyword = an explicit-mode signal OMNI's boot loop already performs by classifying work class). Watch (`GRD-039`: must be traceable/policy-governed, never hidden magic).
- code-interpreter middleware / `eval_tool` — **= containment/`capability_envelope` (containment≠authority) + sandbox (215 `assume_breach_agent_posture` / `isolated_agent_run`).** Execution-surface tier; not net-new.
- `state_externalized_context` / persistent eval-variables (Knox "sharpen") — **= `context_packet` + Knowledge-Reservoirs; sharpens 204 `context_memory_budget`** (already reconciled under 220).
- The six patterns individually (Classify-and-Act … Loop-Until-Done) — **named entries INSIDE `dynamic_workflow_pattern_registry`**, not separate primitives.
- doctrine reinforcement "code execution for orchestration ≠ authority to mutate production" — **= `containment≠authority` (existing law, AFFIRM), sibling of 205 assume-breach + 220 candidate≠commit.**

### C. Reread flags
- **220 (RLMs in Deep Agents)** — MUST cross-read: 224 is the *pattern-library layer* directly on top of 220's `deterministic_coverage_mode` / code-mediated recursion. 220 = the mechanic; 224 = the six task-shaped patterns that ride it. Fold as one 220↔224 cluster.
- **215 / 217 (Harbor × LangSmith agent-eval)** — 224's Adversarial-Verification (#13) + typed-result contract (#8) are the *runtime* twin of 215's `deterministic_task_verifier` + 217's `agent_manifest`; verifier-subagents ≈ 215 verifiers, but at orchestration-time not eval-time. Distinguish: 224 verifier = in-workflow finding-confirmation; 215 verifier = did-the-agent-succeed.
- **216 (LangSmith Engine / REV-199)** — Loop-Until-Done (#16) + Generate-and-Filter (#14) echo the reflexive trace→issue→fix→eval loop; note the shared self-improvement-vs-no-silent-ship tension.
- **210 / 214 (CNS coordination / anti-god-agent)** — Classify-and-Act (#11) = CNS candidate→resolver→owning-domain routing at the micro-scale; the six patterns are all *bounded-responsibility* decompositions (214 "systems-design problem, not model-capability").
- **Reflexive mirror:** 224's Fan-Out + Classify + Loop-Until-Done literally describe THIS EVRUN pipeline (per-source subagent extraction → dedup → Opus-main fold with anchors, no sidecar) — same self-description flagged for 217/220.
- **Anthropic dynamic-workflows origin** [7:07] — the six patterns are credited upstream to Anthropic; if a primary Anthropic source surfaces, treat 224 as the LangChain *instance*, not the origin.

### D. One-line hard read + strongest OMNI line
- **Hard read:** The right way to scale agent work is usually **not more prompt pressure — it is explicit, traceable orchestration**: loops, fan-out, typed results, verification passes, tournaments, deduped repeated passes, and traceable aggregation, chosen by the shape of the task and run inside bounded budgets.
- **Strongest OMNI line:** OMNI should maintain a **dynamic workflow pattern registry** — for each large task pick the orchestration shape (classify/act · fan-out/synthesize · adversarial-verify · generate/filter · tournament · loop-until-done), then run **bounded** subagents with **typed** outputs, **trace every step**, and keep authority with the governing workflow/domain: subagent consensus is a **candidate**, never a commit, and code execution for orchestration is **never** authority to mutate production (`candidate≠commit` · `containment≠authority`).

&nbsp;



⬆️⬆️⬆️  END Review 003  ⬆️⬆️⬆️

## §4 — Analysis pointers  *(agent fills at CLOSEOUT once analyzed — the "linked" step; leave `TK` until then)*
- EVRUN(s): `EVRUN-2026-000003` (ai-corpus wave-3) · concept_registry: `EVRUN-2026-000003_ai-corpus-wave-3_concept_registry_and_routing_map.md` (Opus-main folds the returned packet — this agent did not edit it) · source_anchor_ledger: `EVRUN-2026-000003_ai-corpus-wave-3_source_anchor_ledger_receipts_only.md` (receipts only; folded by Opus-main) · per-source deep-read: §3 Review 003 (this file) · impact: **§B AI-substrate runtime (MAJOR — code-mediated subagent orchestration, typed-result contract, control-flow primitives) · Build-OS + Agent-Work-Protocol (MAJOR — dynamic workflow pattern registry, pattern-by-task-shape selection, `REV-158`) · CNS (medium — classify-and-act routing = candidate→resolver→owning-domain micro-scale) · Polaris/proof (medium — adversarial-verification trace, verifier rejection reasons, synthesis lineage) · §C Security (medium — exec≠mutation-authority, sandbox containment) · Knowledge-Reservoirs (minor — typed subagent outputs become candidate structured records) · operating-metrics (minor — subagent/pass count, fan-out latency, verifier-rejection-rate, coverage-completion, token/cost per pattern)** · promotion: **watch** (convergent operational vocabulary; 2 net-new dedup-pending — `dynamic_workflow_pattern_registry`, `typed_subagent_result_contract`; PROPOSES only, `GRD-036` gated)

## §5 — Change log
- `2026-07-07` — source file created.
- `2026-07-07` — Opus: §0/§0.1 metadata lifted verbatim from Review 001 header (`identity_confidence: high_from_operator_metadata`); proposed slug `dynamic-subagents-deep-agents-parallel-orchestration` (file NOT renamed); wrote §3 Review 003 formal deep extraction (16-cluster full table + 2 net-new candidates + reread flags + hard read); repo grep confirmed build=absent; §4 pointers filled; §0.5 ticked; status → `analyzed`. Registry/coverage/anchor NOT edited (returned as fold packet for Opus-main). Binds nothing (`GRD-036`/`GRD-044`).

> Authority/retrieval labels are defined once in `../../00_evidence_router.md` (operating principle #9 + §8). Sections carry their `layer:` inline; the legend is not restated per file.
