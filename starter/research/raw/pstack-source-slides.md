---
kind: file
title: Supplied pstack talk
url: file:///Users/alexanderopalic/Projects/talks/pstack-starfall/slides.md
author: Alexander Opalic
publisher: unknown
published: unknown
collected: 2026-09-21
status: complete
---

---
theme: default
title: 'Learning from Pstack: Build Your Own Reliable Coding Agent Stack'
class: illustrated-cover
info: A 20-minute talk about planning, implementation, review and verification with pstack.
author: Alexander Opalic
colorSchema: dark
aspectRatio: 16/9
canvasWidth: 1000
transition: none
highlighter: shiki
drawings:
  persist: false
fonts:
  sans: JetBrains Mono
  mono: JetBrains Mono
  provider: none
defaults:
  layout: default
mdc: true
download: false
presenter: true
browserExporter: true
duration: 20min
timer: countdown
---

<h1 class="cover-accessible-title">Learning from Pstack: Build Your Own Reliable Coding Agent Stack</h1>
<img class="cover-art" src="/covers/learning-from-pstack.png" alt="Learning from Pstack, by Alexander Opalic." />

<!--
TIME: 00:00–00:20 (20s)

I want to explain the structure I want around an AI coding agent. We will start with four familiar stages: plan, implement, review, and verify. Then we will look at how pstack puts instructions and tools behind them, and what you could adapt for your own projects.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: illustrated-cover feature-factory
---

<h1 class="cover-accessible-title">The perfect AI coding workflow</h1>
<img class="cover-art" src="/illustrations/feature-factory.png" alt="An automated factory promises a finished feature at the press of a button." />

<!--
TIME: 00:20–00:50 (30s)

Describe the change, press a button, and the perfect implementation comes out. No misunderstandings, no design debt, no missed behavior.

[Pause.]

That is the promise. My interest is the engineering process we need around the agent when reality is less tidy. Generating code is only one part of that process.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: diagram
---

# Working code is not the whole goal

<img class="diagram-image" src="/diagrams/workflow-gap.svg" alt="Working output today needs context, constraints and feedback to remain maintainable over time." />

<!--
TIME: 00:50–01:45 (55s)

My concern is that an agent can produce code that works while making the system harder to maintain. It might misunderstand the goal, miss an existing boundary, or add another special case where a clearer structure was needed.

I would not make a universal claim that models were never trained on maintainability. The practical point is that we cannot assume they will preserve the qualities our project needs. Those qualities depend on context, conventions, and feedback.

In the guide you supplied, Lauren describes two recurring failures: poorly specified intent and insufficient context for doing the work correctly. That is a useful starting point for designing a workflow.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: diagram
---

# The loop I want around every change

<img class="diagram-image" src="/diagrams/workflow-loop.svg" alt="Plan, Implement, Review and Verify form a loop, with evidence sending work back for revision." />

<!--
TIME: 01:45–03:00 (75s)

This is my mental model. Plan means understand the goal, the existing system, and what success will look like. Implement means turn that understanding into a bounded change. Review means examine the actual change against the design and engineering constraints. Verify means exercise the result and observe what happened.

[Point to each stage, then the return arrow.]

These are responsibilities, not four separate agents or a rigid waterfall. A failed check can send us back to implementation. Evidence that the design is wrong can send us back to planning. A small task can move through the loop quickly.

My belief is that every agentic coding workflow needs these responsibilities covered. The rest of the talk shows how pstack supports them. This is my teaching model, not the literal list of steps in every pstack playbook.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---

# pstack gives the loop instructions

<p class="rule">Skills explain jobs.<br>Playbooks organize tasks.<br>Principles guide decisions.</p>

<!--
TIME: 03:00–03:40 (40s)

Pstack is a collection of engineering instructions for an agent. The coding environment still supplies the model and tools. Pstack describes how to use those capabilities rigorously.

A skill gives instructions for a particular job. A playbook is a reference file that organizes a task. A principle guides decisions across that work, and is itself packaged as a skill. These are ordinary files we can read and customize. They influence agent behavior; they are not an automatic guarantee that the agent follows every instruction.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: illustrated-cover feature-factory
---

<h1 class="cover-accessible-title">Pstack creator poteto</h1>
<img class="cover-art" src="/illustrations/poteto-profile.png" alt="Profile of Lauren, known as poteto, the creator of pstack." />

<!--
TIME: 03:40–03:55 (15s)

Pstack is Lauren’s workflow, published under the name poteto. Her guides emphasize verification as infrastructure and planning through investigation, design sketches, and prototypes. I am borrowing those ideas as a starting point for a workflow I can understand and adapt.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: code-overview
---

# A skill is a document the agent reads

<p class="source">Illustrative body, not a complete installable skill · SKILL.md</p>

```md
# A specific engineering job

## When to use it
Describe the trigger.

## How to work
Give instructions and point to tools.
```
<p class="sub">Instructions can link to scripts and references.</p>

<!--
TIME: 03:55–04:50 (55s)

Here is the rough shape of a skill body. This is a teaching sketch, not a copy of an installable skill. Real skills also have metadata such as a name and description.

The important mechanism is simple. The agent reads instructions for a job. Those instructions may tell it to inspect files, call tools, read a reference, or delegate a bounded investigation. A skill can include helper scripts as well as prose.

This matters because we can inspect what we are asking the agent to do. When a recurring failure appears, we have a place to improve the instructions or, better, the tool or check that supports them.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: diagram mixed
---

# poteto-mode selects the workflow

<img class="diagram-image" src="/diagrams/workflow-route.svg" alt="A request reaches poteto-mode, which selects a Feature, Bug fix or Investigation playbook." />

<p class="source">Exact sentence, line-wrapped · skills/poteto-mode/SKILL.md</p>

```md
Match the task to a playbook below, open its file,
and copy its steps in verbatim.
```

<!--
TIME: 04:50–05:40 (50s)

Poteto-mode is the entry point. It matches the request to a playbook, opens that file, and copies its steps into a todo list. Feature, Bug fix, and Investigation are three possible routes. The list is much larger.

The diagram shows routing, and the Markdown underneath is the instruction behind it. Playbooks are reference files inside poteto-mode, rather than separate skills that you must invoke one by one.

The selected playbook calls supporting skills as needed. That gives us a sequence for the task and detailed instructions for particular jobs. Now we can walk through our four responsibilities.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: diagram
---

# Plan · build a shared understanding

<img class="diagram-image" src="/diagrams/workflow-context.svg" alt="Restated intent, runtime mechanics and historical context feed a shared understanding of constraints and success." />

<!--
TIME: 05:40–07:00 (80s)

Planning starts with understanding. Lauren suggests asking the agent to restate the problem in its own words. That makes misunderstandings visible before they turn into code, and avoids feeding the agent our untested explanation of the cause.

How traces the current runtime mechanics. Why investigates the reasons behind the current structure using the history and evidence sources that are available. Recall recovers relevant prior context. Teach helps explain the resulting mental model in a form a person can assess.

These are complementary tools, not a checklist that must run on every small task. The useful output is a shared understanding of the goal, constraints, and evidence.

[Follow the arrows into the center.]

The agent needs enough context to make the change. We need enough explanation to judge whether it understood the problem.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: diagram
---

# Plan · sketch, compare, observe

<img class="diagram-image" src="/diagrams/workflow-sketch.svg" alt="Ground the problem, produce competing type and interface sketches, then compare and synthesize them." />

<!--
TIME: 07:00–08:25 (85s)

In this workflow, planning is more concrete than a long list of implementation steps. Architect starts from the existing system and sketches the caller’s usage, types, signatures, and boundaries. It calls arena to compare structurally different candidates and synthesize a design.

The prototype playbook answers questions that observation can settle. Build a small sketch, run it, and inspect or measure the behavior. A genuine product preference may still need a human decision.

This addresses two mistakes from Lauren’s guide: accepting the first design and refining an abstract plan without evidence.

The design is a working hypothesis. If implementation repeatedly requires escape hatches or the same workaround in different places, revisit the architecture. The goal is a clear contract for implementation, supported by what we learned, rather than a planning document that looks impressive.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: diagram mixed
---

# Plan · make engineering constraints explicit

<img class="diagram-image" src="/diagrams/workflow-principles.svg" alt="Model the Domain, Minimize Reader Load and Prove It Works guide structure, ownership and evidence." />

<p class="source">Exact sentence, line-wrapped · principle-model-the-domain/SKILL.md</p>

```md
Encode the real domain in a data structure instead of
scattering it across conditionals.
```

<!--
TIME: 08:25–09:20 (55s)

Principles are how broad engineering preferences become instructions that influence choices. Model the Domain asks the agent to choose structures that represent the problem. Minimize Reader Load asks it to reduce the work needed to understand the code. Prove It Works asks for direct evidence.

These principles apply across the loop. They are not confined to planning, and naming one does not prove the implementation follows it. Review has to examine the resulting code.

For your own stack, this is where your engineering judgment belongs. State the constraints you actually care about, and connect them to decisions the agent can make and checks you can inspect.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: diagram mixed
---

# Implement · delegate a bounded change

<img class="diagram-image" src="/diagrams/workflow-implement.svg" alt="Lead assigns scope and design, a worker implements, and the lead inspects the returned result." />

<p class="source">Illustrative assignment · Worker assignment</p>

```md
Scope: files and responsibilities.
Design: agreed types and boundaries.
Success: observable checks.
Return: change, evidence, open questions.
```

<!--
TIME: 09:20–10:30 (70s)

The Feature playbook keeps the lead responsible for design, review, and verification while delegating code-writing. The assignment includes scope, the chosen data shape, and success criteria. A subagent is another running agent given that bounded job.

Before fan-out, the lead considers blocking work, independent workstreams, shared mutable state, and the smallest safe decomposition. Parallel work is useful when responsibilities can be separated. More workers do not automatically improve a tightly coupled change.

[Point to the assignment.]

Implementation follows the chosen design. If it exposes a bad assumption, that discrepancy should be surfaced. The lead receives an artifact it can inspect, not just a completion message. The separation earns its place through a clear handoff and review responsibility.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: diagram mixed
---

# Review · inspect the actual change

<img class="diagram-image" src="/diagrams/workflow-review.svg" alt="The actual diff enters lead review, which either proceeds or requests revision." />

<p class="source">Exact sentence from the delegation step · playbooks/feature.md</p>

```md
Review its diff yourself.
```

<!--
TIME: 10:30–11:35 (65s)

Review asks whether the implementation matches the intended behavior and the agreed structure. Look at the actual diff. Does it put responsibility in the right place? Does it repeat rules, hide state, or add unnecessary indirection? Do the checks address the changed behavior?

The Feature playbook explicitly tells the lead to review the worker’s diff. Independent perspectives can help, and contested designs have an additional interrogate step before shipping. That does not mean every change requires a large review panel.

The important distinction is responsibility. The worker saying it is done does not transfer ownership of the result. Findings should become specific corrections, and the corrected change should be checked again.

Review also has limits. Reading code cannot establish every runtime property. That brings us to verification.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: diagram
---

# Verify · observe what actually happened

<img class="diagram-image" src="/diagrams/workflow-verify.svg" alt="Verification instructions and control tools produce evidence from the running application." />

<!--
TIME: 11:35–12:40 (65s)

Verification connects the requested behavior to an observed result. Tests can establish precise behavior and guard regressions. Running the actual application can reveal integration, lifecycle, interaction, and environment problems that a narrower check does not exercise.

Choose evidence that matches the claim. A screenshot can show a visible state. A transcript can show a command and its output. Logs, response bodies, or stored state can establish effects that are not visible on screen. A build is useful evidence of buildability, not proof of the whole user journey.

This is why verification is foundational even though it appears at the end of the loop. The agent needs access to it while planning, investigating, implementing, and repairing.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: diagram mixed
---

# Verification needs tools, not just prose

<img class="diagram-image" src="/diagrams/workflow-infrastructure.svg" alt="A project-local verification skill launches a known environment, drives stable commands and observes state and artifacts." />

<p class="source">Section names from create-verification-skill · Generated verification skill</p>

```md
## Launch
## Doctor
## Drive
## Evidence
## Cleanup
```

<!--
TIME: 12:40–14:00 (80s)

Create-verification-skill inspects the repository to discover how to launch, drive, observe, and isolate the application. It produces a project-local skill grounded in the actual commands and tooling.

A useful tool layer can expose stable operations through a small CLI or the project’s existing harness. The agent should not have to reinvent a long interaction script on every task. A doctor check helps distinguish a broken environment from a product defect. Cleanup removes the resources the run created while preserving its evidence.

The generator is also instructed to run its own instructions before handing them over. A verification skill that has never been exercised is still a draft.

Lauren treats this capability as infrastructure. That is the part I would invest in early, because every workflow depends on being able to observe its result.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: diagram mixed
---

# Give the agent a map of the application

<img class="diagram-image" src="/diagrams/workflow-map.svg" alt="A feature map explains what exists and where to find it; tools drive it; expected state establishes success." />

<p class="source">Section names from create-verification-skill · Feature-map entry</p>

```md
## Sub-features
## How to get to it (user POV)
## Driving it with <harness>
## Gotchas
```

<!--
TIME: 14:00–15:00 (60s)

A control tool explains how to interact with the application. A feature map explains what exists, where to find it, and what state should result. Pstack’s generator creates an index and entries for user-facing features.

This saves the agent from repeatedly discovering navigation and feature-specific conditions. It also makes coverage more deliberate. Checking one convenient route is not enough if a behavior is exposed through several entry points.

The map is shared project context, and it can become stale. Maintain-verification-skill exists to keep the instructions, tools, and map aligned with the application. The useful habit is to update this infrastructure as the app changes, not to assume one generated skill will remain correct forever.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: diagram
---

# The agent can close the loop

<img class="diagram-image" src="/diagrams/workflow-feedback.svg" alt="Act, Observe, Compare and Adjust form a repeatable feedback loop." />

<!--
TIME: 15:00–15:50 (50s)

Once an agent can act, observe, compare, and adjust, it can continue after a failure without handing every check back to you. This is the core point I take from Part 1 of Lauren’s guide.

It does not eliminate judgment or guarantee correctness. It gives the agent a feedback path. If the result differs from the goal, repair the implementation. If the evidence disproves the design, revisit the plan. If a check cannot reach the relevant behavior, report the limit rather than calling it a pass.

The same verification tools help settle questions during planning and reproduce defects before a fix. They support the whole loop.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: diagram
---

# Fork pstack. Make it yours.

<img class="diagram-image" src="/diagrams/workflow-fork.svg" alt="Fork pstack, fit it to the project, try it, inspect results and keep improving it." />

<!--
TIME: 15:50–17:00 (70s)

My recommendation is to fork pstack and treat it as a starting point you own. Read the parts you use. Keep the instructions that fit your engineering approach and adapt the ones that assume different tools, conventions, or delivery rules.

Start with the verification capability for your application. Then shape the workflow and principles around how your team works. Models, command names, and integrations are configuration choices; the responsibilities in the loop should remain understandable.

Try a bounded task, inspect the work and evidence, and improve the stack where you see repeated friction. A fork also creates maintenance work. Review useful upstream changes and keep your customizations intentional. This is my recommendation, not a requirement from the guide.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: code-overview
---

# Customize the instructions you want followed

<p class="source">Illustrative starter outline · Your fork / project-local skills</p>

```md
## Plan
Understand intent, constraints, and success.
## Implement
Assign bounded work against a clear design.
## Review
Inspect the diff and resolve findings.
## Verify
Run the relevant behavior and retain evidence.
```
<p class="sub">Make recurring lessons into tools and checks.</p>

<!--
TIME: 17:00–17:45 (45s)

This outline is intentionally small. It is a teaching scaffold for your own instructions, not a complete replacement for pstack’s playbooks. Fill it with the commands, boundaries, and decision rules your project actually needs.

When the same mistake happens repeatedly, consider whether a lint rule, a stronger type, a helper command, or a runtime check can prevent it more reliably than another paragraph. Keep the documents clear enough that a fresh agent can use them.

That is how the stack becomes yours: observable requirements, useful tools, and instructions that reflect the way you want to maintain software.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---

# Own the workflow, not just the prompt

<p class="rule">Plan → Implement → Review → Verify</p>
<p class="sub">Give the agent context, constraints,<br>and a way to check its own work.</p>

<!--
TIME: 17:45–18:00 (15s)

The prompt starts the work. The workflow gives it structure. Give the agent context, constraints, and a way to check its own result. Pstack is a concrete starting point you can read, fork, and improve. Thank you.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---

# Questions

<p class="rule">What would you change<br>in your own agent workflow?</p>

<!--
TIME: 18:00–20:00 (120s)

[The final two minutes are reserved for questions or timing overrun.]

Prompts if needed: Can your agent run the application and inspect its result? Which engineering rules belong in your stack? What repeated mistake could a tool or check prevent?

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---

# Invoke poteto-mode

<img class="entry-image" src="/illustrations/poteto-mode-entry.png" alt="Prompt composer with the poteto-mode skill selected." />

<!--
TIME: BACKUP

Invocation screenshot supplied by the user. The interface and model selection are incidental to the workflow.
-->

---
class: illustrated-cover feature-factory
---

<h1 class="cover-accessible-title">Computer handoff</h1>
<img class="cover-art" src="/illustrations/sales-outbound-computer.png" alt="Assistant offers a computer handoff for a Salesforce sign-in." />

<!--
TIME: BACKUP

User-supplied screenshot. Optional illustration of a control handoff.
-->

---

# Sources and further reading

<div class="steps small"><div>Lauren · The Complete Guide to pstack, Parts 1–2</div><div>cursor/plugins · pstack · 6ed0f7a</div><div>Feature playbook · architect · how · why</div><div>create-verification-skill</div></div>

<!--
TIME: BACKUP

Articles supplied in the conversation: Part 1, August 31, 2026; Part 2, September 9, 2026. Repository snapshot: https://github.com/cursor/plugins/tree/6ed0f7a9504f577d7529064103cecce9be7dfc5e/pstack. See research/workflow-narrative.md for attribution, simplifications and source details.
-->

