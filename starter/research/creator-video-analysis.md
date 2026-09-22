# Creator video analysis and proposed talk direction

Source: [Lauren’s video](https://x.com/poteto/status/2102050467505430555), published September 21, 2026, 38:02. [Local source capture and complete captions](raw/2026-09-21-poteto-agent-trust-video.md). Reviewed the full subtitle track and sampled slides across the recording. Caption authorship is unknown. Recommendations below are our synthesis, not quotations or a claim that the video teaches every pstack workflow.

## Recommended thesis

Build a verification skill for your own codebase, then organize the engineering workflow around it. The skill combines application knowledge, repeatable controls, and evidence of the intended behavior. Pstack is a concrete implementation to learn from. The audience should be able to build a small version without installing or forking it.

The user’s follow-up specifically identifies Lauren’s feature-map-plus-CLI diagram as a central takeaway. Verification is therefore the main construction lesson. Durable corrections and constraints remain supporting ideas, rather than competing for the closing message.

This directly reflects the user’s clarified objective. The current deck already has the right responsibilities, Plan → Implement → Review → Verify. Its strongest material is verification infrastructure. Its biggest gap is that the audience sees many concepts and pstack skill names, but too little construction of a workflow of their own.

## The video’s argument, in order

| Time | Argument and evidence | Implication for our talk |
| --- | --- | --- |
| 00:00–02:05 | Lauren frames delegation around trust and uses a kitchen analogy: the engineer remains responsible for the outcome and working environment. | Keep ownership explicit. Avoid using PR volume as evidence of quality. |
| 02:05–07:05 | Manual performance investigation motivated reusable agent capabilities. She argues that increasing agent count before establishing trust multiplies correction work. | Start with a recurring engineering bottleneck. Teach reliable work before parallelism. |
| 07:05–12:34 | Runtime verification uses repeatable control tools and a maintained feature map. Her Control Glass example uses Chrome DevTools Protocol and collects traces. Formal verification is discussed as a different, harder level. | Make verification tangible: how to launch, reach a feature, exercise it, and retain evidence. Do not imply a screenshot proves general correctness. |
| 12:34–14:56 | Pstack packages engineering workflows and judgment in skills and playbooks. Correct behavior alone does not establish overall engineering quality; she also discusses collecting performance metrics. | Pair code review and explicit constraints with behavior checks. Avoid a false division in which verification cannot measure performance. |
| 14:56–18:57 | Her correction hierarchy prioritizes code structure, then static checks, then rules/review automation, skills, and style guidance. | Promote the current one-sentence remark about lint rules into a central teaching point. |
| 18:57–26:43 | Existing patterns influence future agent changes. Workarounds can spread. Her gardener role removes debt, maintains a conventional path, and prevents new violations. Her team’s comment ban is one specific policy. | Teach how to choose a durable fix. Do not adopt a blanket comment ban or call all conventions universally desirable. |
| 26:43–30:38 | Dune illustrates feature ownership and process boundaries enforced through imports. Team knowledge becomes part of the architecture. | Show one understandable boundary and its check. Skip a full Dune framework tour. |
| 30:38–35:15 | Reusable infrastructure supports event-triggered work through connected services and agents. | Keep outer-loop automation optional. Its usefulness depends on the inner workflow already producing reliable evidence. |
| 35:15–38:02 | The close returns to the correction hierarchy and sustained investment in the environment. | End with one repeated correction the audience can encode tomorrow. |

## What changes in our argument

Keep the four responsibilities as our teaching model; the video does not establish them as pstack’s literal universal sequence. Add a second loop around them: observe a repeated failure → improve the environment → run the next task with that improvement. The first loop repairs a change. The second reduces the need to repeat the same correction.

Make three ideas central:

1. **Verification is a capability you build early.** Plan what will demonstrate success before implementation. Provide repeatable controls and a feature map, then let the agent act, observe, compare, and repair.
2. **Engineering judgment has several homes.** Put unambiguous restrictions in types, architecture, lint rules, and CI when practical. Put contextual decisions in skills and review instructions. Explain what each can and cannot guarantee.
3. **The codebase supplies examples to future agents.** A copied workaround can become a convention. Maintaining the examples and preventing new violations is part of maintaining the workflow.

Pstack then answers a useful concrete question throughout: how did one engineer package these responsibilities? Each pstack example should be followed by an equivalent the audience could write themselves.

## The central verification slide

Use this as an early destination for the audience, then return to it during the worked example. It can replace the freed slot from combining the pstack introduction and creator credit, while the existing verification slides unpack it later.

Suggested title: **A verification skill for your codebase**

Suggested subtitle: **Teach the agent where to go, how to act, and what to check.**

Two visual groups, following the supplied reference:

- **Feature map:** what exists, how users reach it, prerequisites and expected behavior.
- **Control tools:** launch the real app, reproduce the interaction, inspect the result, retain evidence.

Combine them into a clear outcome: **The agent can check its own work.**

Explain in the speaker notes that a CLI is Lauren’s concrete implementation. Existing test runners, browser controls, APIs, and project scripts can supply these operations too. The reusable interface matters more than creating another CLI. A skill ties the map and tools together with instructions for setup, comparison against success criteria, failure handling, and cleanup.

Suggested spoken explanation:

> When you tell an agent to verify its work, it needs to know what your application does and how to operate it. The feature map supplies the first part. Repeatable tools supply the second. Your verification skill connects them: launch the app, reach the feature, exercise it, compare the result with the requirement, and keep the evidence. Now the agent can detect a failure and try again.

Follow immediately with a concrete entry for the example: Settings → choose a preference → reload → confirm the value remains. Contrast an observed persisted value with a screenshot taken before reload; only the former addresses that requirement. This makes the concept reproducible for the audience.

## A single teaching example

Proposed illustration, not a verified demonstration or footage from Lauren’s video: a user changes a preference, but it resets after reloading the application. This is small enough to explain without teaching a domain.

- **Plan:** restate the observable requirement: change the preference, reload, and retain it. Find the existing persistence boundary and how the settings screen is reached. Decide how to establish the starting state.
- **Implement:** make a bounded change through the existing settings service. Add a focused behavioral test for saving and restoring the preference.
- **Review:** inspect whether the implementation follows the existing ownership boundary and whether the test covers the reported failure.
- **Verify:** launch a known state, use the actual settings screen, reload, and inspect the restored preference. Retain the result and relevant state, not just an agent’s completion message.
- **Improve the workflow:** if repeated patches bypass the service, provide one supported API and an import rule where appropriate. Record navigation and setup in the feature map. The next task can reuse both the controls and the constraint.

Use one compact set of artifacts: the request, a short plan, the actual diff, and a verification result. If a live or recorded demo is produced later, obtain those artifacts by executing the example. Do not fabricate passing terminal output.

## Proposed slide changes

Preserve 20 content slides, a two-minute questions slide, and three backups. The deck was subsequently revised on September 21. The map below records the proposal; the implemented changes are recorded in workflow-narrative.md.

| Current slide(s) | Proposed treatment |
| --- | --- |
| 1 | Keep Learning from pstack; make the subtitle and opening promise explicitly about building your own workflow. |
| 2–3 | Keep the brief factory joke. Follow with a concrete recurring correction and the cost of needing a human to supply every check. Do not introduce kitchen and garden metaphors as additional themes. |
| 4 | Keep Plan → Implement → Review → Verify and its feedback arrows. Establish success evidence during planning. |
| 5–6 | Introduce Lauren and pstack together. Reuse the freed slot to distinguish instructions, executable tools, and enforceable project constraints. |
| 7 | Show the smallest readable skill: trigger, inputs, procedure, observable completion, and what to do when evidence fails. Keep it clearly illustrative. |
| 8 | Keep task routing, but show the generic rule first: choose the process that matches the work. Pstack’s router is one example. |
| 9–10 | Use the preference example to show context gathering, acceptance evidence, and a design decision. Reduce the spoken catalog of how/why/recall/teach/arena; retain names in notes or sources. |
| 11 | Convert engineering principles into a concrete decision: which requirements belong in architecture/types, static checks, or instructions? Show Lauren’s hierarchy with attribution. |
| 12 | Keep bounded implementation. Define scope and expected return artifacts. Explain that a single agent can perform the responsibilities; delegation is optional. |
| 13 | Show one specific finding in the example diff, its correction, and the lead’s ownership. |
| 14–16 | Keep verification, repeatable controls, and feature map. Make all three refer to the same preference/reload behavior rather than disconnected conceptual diagrams. |
| 17 | Expand the feedback loop to include maintaining tools, maps, and constraints when failures recur. |
| 18 | Replace “Fork pstack” as the main instruction with “Build your verification skill first.” Offer building, copying selected ideas, and forking as implementation choices. |
| 19 | Show the audience’s starting artifacts: one task playbook, one verification capability, a short feature map, and one useful automated constraint. |
| 20 | Close on giving the agent a way to check its own work. Return to the central map + controls diagram and the opening failure. Mention reusable corrections as how this capability improves over time. |
| 21–24 | Keep questions and three backups. Add the creator video with timestamps to the source backup; existing screenshots can remain optional. |

## Suggested 20-minute allocation

| Time | Purpose |
| --- | --- |
| 00:00–02:00 | Concrete failure, ownership, and the audience promise |
| 02:00–04:00 | Four responsibilities and pstack as the worked example |
| 04:00–09:00 | Trace the example through planning, implementation, and review |
| 09:00–13:00 | Build the means to verify: controls, feature map, evidence, retry |
| 13:00–16:00 | Make repeated corrections durable through structure and checks |
| 16:00–18:00 | Assemble the smallest personal workflow and conclude |
| 18:00–20:00 | Questions |

## What the audience can build afterward

A minimal workflow can be a short document that says when it applies, what to inspect, how to make a bounded change, which checks to run, and what evidence completes the task. Connect it to real project commands. Try it on one small change, inspect the result, and improve the weak point. Separate skills or multiple agents only become useful when they solve an observed organization or context problem.

The primary audience exercise: choose one feature in your app, document how to reach it, connect the commands that exercise it, define the expected result, and ask a fresh agent to follow those instructions. Improve anything that still requires your manual intervention. Repeated corrections can then inform better boundaries, automated checks, or instructions.

## Limits and unresolved choices

The source is a practitioner’s account, not an independent study proving a productivity multiplier. Its architecture and policy choices are examples to assess. Good constraints reduce particular failure modes; they do not make bad code universally impossible. Runtime evidence, static checks, review, and formal proofs establish different properties.

The preference example is a recommendation. The outstanding editorial choice is whether to demonstrate it with a short real recording or explain it through a few actual code and evidence artifacts. Both fit the goal; neither needs a vendor-specific cloud setup.
