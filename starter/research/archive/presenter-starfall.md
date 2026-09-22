# Learning from Pstack: Build Your Own Reliable Coding Agent Stack

English speaker notes. 34 main slides, exactly 15 minutes of planned stage time, followed by 3 optional slides. Approximately 2063 spoken words, excluding timing, source labels, and bracketed cues.

Generated from the native Slidev notes in slides.md. Edit slides.md, then run pnpm notes. Press P in Slidev to open presenter mode.

## 1. Learning from Pstack: Build Your Own Reliable Coding Agent Stack

TIME: 00:00–00:20 (20s)

I want to show you how I use pstack to organize work with a coding agent. First, I will explain what pstack is and how its pieces fit together. Then we will follow one feature through a real project: a flamethrower in my browser game, Starfall.

## 2. The perfect AI coding workflow

TIME: 00:20–00:50 (30s)

Imagine this is your software team. Nobody reads code anymore. You describe a feature, press one button, and three seconds later it ships perfectly.

Anyone?

[Pause for hands.]

Yeah, me neither.

So, if none of us has the perfect workflow, what would help us get closer?

## 3. What do we need from the workflow?

TIME: 00:50–01:35 (45s)

For me, there are three requirements.

The most important is that the agent can verify its own changes. It needs to run the relevant checks, inspect the result, and fix what fails. For a UI change, that means opening the application and checking the behavior in the browser.

Second, we need to give it guidance on writing good code. Clear engineering principles and project conventions give it something concrete to follow.

Third, the workflow needs to fit the task. We also fix bugs and write documentation. Our coding setup needs to support those jobs too.

With those requirements in mind, let us talk about pstack, a plugin that addresses many of them.

## 4. pstack

TIME: 01:35–01:50 (15s)

Pstack is a plugin created by poteto. It provides reusable engineering instructions for your coding agent.

It brings together verification guidance, coding principles, and playbooks for different tasks. The coding tool provides the model and tools. Pstack provides instructions for organizing the work.

SOURCE: pstack README.md, skills/poteto-mode/SKILL.md and harness/codex.md. This is a high-level description of the instruction layer, not a claim that the repository contains only Markdown.

## 5. Pstack creator poteto

TIME: 01:50–02:00 (10s)

And this is poteto, or Lauren, who created pstack. If you know her work on React, Cursor, or developer tooling, the emphasis on practical engineering workflows will feel familiar.

SOURCE: User-provided profile screenshot.

## 6. Sales Outbound computer handoff

TIME: 02:00–02:05 (5s)

[Show the computer handoff screenshot.]

Now let us look at the entry-point skill.

SOURCE: User-provided screenshot.

## 7. $poteto-mode

TIME: 02:05–02:35 (30s)

You start with one skill: poteto-mode. You invoke it with a task, and its instructions tell the lead agent how to route that task.

For example, an investigation and a feature implementation need different workflows. Poteto-mode points to those workflows and to the supporting skills and principles. The agent reads the relevant instructions as it needs them.

You do not need to select every piece manually. In the Starfall sessions, you will see the plugin-qualified spelling, pstack:poteto-mode. It names this same entry point.

SOURCE: pstack skills/poteto-mode/SKILL.md routing and playbook index.

## 8. A skill is a set of instructions

TIME: 02:35–03:00 (25s)

Imagine I ask the agent to add a flamethrower. A skill is a document that tells it when an instruction applies and how to work. The coding agent reads those instructions and uses its tools. Poteto-mode is one such skill. It helps organize the task and points to more instructions as needed.

SOURCE: User-provided Poteto Mode skill. Diagrams are conceptual teaching summaries; example design assignments are illustrative.

## 9. poteto-mode chooses the workflow

TIME: 03:00–03:25 (25s)

The first decision is which kind of task this is. Adding a flamethrower changes behavior, so it matches Feature. A broken weapon would instead fit Bug fix. Asking how damage works could fit Investigation. The selected playbook gives the agent a workflow for that kind of task.

SOURCE: User-provided Poteto Mode skill. Diagrams are conceptual teaching summaries; example design assignments are illustrative.

## 10. A playbook organizes the work

TIME: 03:25–03:50 (25s)

This is a simplified teaching map of feature work. Understand the existing game, design the change, build it, review it, and verify the behavior. Verification can send us back to fix the implementation. These boxes summarize the workflow; they are not a verbatim list of the separate Feature playbook steps.

SOURCE: User-provided Poteto Mode skill. Diagrams are conceptual teaching summaries; example design assignments are illustrative.

## 11. Skills help with particular steps

TIME: 03:50–04:15 (25s)

Now we attach specific instructions. How helps investigate the existing system. Architect calls for parallel design exploration when code crosses a function boundary. A UI control skill helps the agent exercise the actual game. The playbook organizes the task. These supporting skills explain how to do particular jobs. They load when their triggers apply.

SOURCE: User-provided Poteto Mode skill. Diagrams are conceptual teaching summaries; example design assignments are illustrative.

## 12. Subagents receive bounded assignments

TIME: 04:15–04:40 (25s)

For illustration, one explorer could consider storing burn state on enemies. Another could consider an effect registry. These are hypothetical assignments, not a claim about the historical Starfall run. The lead compares proposals and assigns implementation. It reviews the returned work and owns the outcome. The number of delegates depends on the task.

SOURCE: User-provided Poteto Mode skill. Diagrams are conceptual teaching summaries; example design assignments are illustrative.

## 13. Principles guide decisions

TIME: 04:40–05:00 (20s)

Principles apply across the workflow. Model the Domain points us toward explicit burn state. Minimize Reader Load asks for code that is easy to trace. Prove It Works asks for evidence from the real game. These are illustrative choices. Now let us look at the actual Starfall work and its evidence.

SOURCE: User-provided Poteto Mode skill. Diagrams are conceptual teaching summaries; example design assignments are illustrative.

## 14. This is Starfall

TIME: 05:00–05:25 (25s)

This is Starfall, the browser tower-defense game I worked on over the weekend. Enemies follow the path. You place towers and try to survive.

[Point to the flame on the left.]

The example is adding this flamethrower. It touches damage, upgrades, shared types, and rendering. We will follow the request through the workflow we just discussed.

SOURCE: public/evidence/flame-combat.png. Actual September 19 browser verification capture. See research/evidence.md, F1.

## 15. Slide 15

TIME: 05:25–05:55 (30s)

This was my request, with spelling cleaned up for the slide. I invoke poteto-mode and ask how a flamethrower should work in this game.

The first task is investigation. The agent looks at the existing weapons and combat rules, then proposes a short cone of continuous damage with a burn that lasts after an enemy leaves the flame.

That is the routing we discussed: the wording of the request determines the initial workflow.

SOURCE: Flamethrower session user message at line 9 and response at line 83. Spelling normalized.

## 16. bult it

TIME: 05:55–06:10 (15s)

And then I supplied this carefully written implementation instruction.

[Leave a beat for the audience.]

That really is the complete follow-up. The design conversation already existed. Now the task had changed.

SOURCE: Flamethrower session, user message at line 91. Exact quotation from the presenter's own session.

## 17. The request chooses the route

TIME: 06:10–06:40 (30s)

The follow-up changes the route. We already have a design conversation. Now I have asked for implementation, so the lead moves into the Feature workflow.

It preserves the agreed behavior and works out the implementation scope. I did not have to list every skill or repeat the whole design.

This also shows why boundaries matter. Asking how a feature could work and asking to build it are different instructions.

SOURCE: Flamethrower session commentary at lines 47, 93, and 109. Investigation and Feature playbooks.

## 18. A burn has an owner

TIME: 06:40–07:15 (35s)

Here is Model the Domain in the actual feature. The lead made a burn a timed effect with an owner. This code is a simplified teaching model.

Why an owner? An enemy might die from the burn after its tower has been sold. The game still needs to attribute the reward correctly.

Naming the source, damage rate, and expiry gives us concrete rules to reason about. It also prepares us to ask what happens when two towers burn the same enemy.

SOURCE: Flamethrower session commentary at lines 109 and 156. Reconstructed teaching type, not a repository excerpt.

## 19. Delegation includes review

TIME: 07:15–07:45 (30s)

Follow the implementation loop. The lead gave implement_flame a scope and success criteria, then reviewed the returned code and results. Lead review here is the same lead, not another worker. Corrections go back before browser verification.

Earlier, flame_fit investigated the weapon's fit. Later, comment_review checked comments. Those were separate bounded assignments.

Now the abstract term subagent has a concrete meaning: an assigned job, an output, and someone responsible for checking it.

SOURCE: Flamethrower session spawn records at lines 39, 111, and 307.

## 20. One implementation owner

TIME: 07:45–08:10 (25s)

The lead kept one implementation owner because combat, shared types, and rendering had to agree.

It also explicitly skipped competing prototypes because the design was already agreed. That is a detail worth keeping: this particular run did not explore several implementations in parallel.

The useful separation was one writer with independent review. We will see a different decomposition in the wave-preview example.

SOURCE: Flamethrower session commentary at line 109. Historical shared types included multiplayer snapshots.

## 21. The lead found<br>a missing rule

TIME: 08:10–08:35 (25s)

Review found a rule that needed to be explicit. If a strong tower sets an enemy on fire, should later hits from a weak tower keep extending the strong burn?

The lead called out that interaction and asked for regression coverage. It also checked rewards after the source tower had been sold.

These are concrete review questions about behavior, and they became concrete checks.

SOURCE: Flamethrower session commentary at lines 156, 232, 406, and 467.

## 22. Test Where the<br>Failure Happens

TIME: 08:35–09:05 (30s)

The verification step used Starfall's project-local verification skill. It explained how to run the built game and exercise the player journey.

Damage timing and rewards need precise tests. A visible flame also needs inspection in the browser. The agent selected the tower, built it, watched combat, upgraded it, and sold it.

That is Test Where the Failure Happens in practice: choose evidence that can actually reveal the kind of failure you care about.

SOURCE: Starfall artifacts/verify-starfall/flame-20260919/result.md and the matching pstack principle.

## 23. The tests passed

TIME: 09:05–09:20 (15s)

At this point, the automated checks were passing. A screenshot had already exposed a layout problem with the fifth weapon card, which the agent fixed.

[Pause.]

Then the visual pass found another case.

SOURCE: Flamethrower session commentary at lines 528, 570, and 618. Intermediate point in the run.

## 24. Pause. Sell the tower.

TIME: 09:20–09:55 (35s)

Selling a flamethrower while the game was paused left its last flame visible. The tower was gone, but the effect remained.

This is a finding from the recorded browser review. We do not need to pretend it was caught by an existing test. It was not.

The lead cleared the stale effect on sale, added a regression test, and ran verification again. That sequence is the point: inspect the actual behavior, find the gap, repair it, and retain a check for the case you missed.

SOURCE: Flamethrower session commentary at line 666. This slide describes the recorded finding; it is not a recreated screenshot of the defect.

## 25. The corrected paused state

TIME: 09:55–10:15 (20s)

This is the corrected sell-and-rebuild state, still paused. The thin outline is the range preview. The filled flame plume is gone.

[Point to the tower and the empty cone.]

The agent added a regression check and inspected the rebuilt result. This image is evidence for that particular case.

SOURCE: public/evidence/flame-paused-fixed.png, displayed as a cropped detail. Original rebuilt-paused.png is identified in the verification record.

## 26. What “done” meant here

TIME: 10:15–10:45 (30s)

These are the final recorded totals for the flame run. The full end-to-end suite passed, and the affected flame and mobile journeys ran again after the final fixes.

The lead also retained browser evidence of the actual interactions. A timer problem in one browser required a separate diagnostic and a repeated check in test Chromium.

These are historical results from September nineteenth. They establish what the run checked, rather than promising that every possible interaction is correct.

SOURCE: Starfall artifacts/verify-starfall/flame-20260919/result.md, check.log, e2e.log and final-e2e.log. Full E2E: 8. Final targeted rerun: 2.

## 27. Where parallel design helped

TIME: 10:45–11:05 (20s)

Later that day, another feature needed a different decision: showing an upcoming wave before it arrived.

The preview must match what the simulation will spawn. There were two plausible ways to represent that information. This time, the lead compared independent designs before assigning implementation.

SOURCE: Tactical session 01a0ba32-fd12-7790-8b52-cbbf97fe7649. Wave previews are one part of its larger scope.

## 28. Two designs, one decision

TIME: 11:05–11:45 (40s)

Design A derived the plan from the seed and wave number. Design B stored the plan in the match and sent it in the snapshot. Both could keep preview and spawning consistent.

The session used two design agents and then a judge. They evaluated different structures, not just different wording for the same structure.

Pstack calls on architect for design exploration, and architect uses arena for comparing alternatives. In this run, the model panel used different models from the same family. We should not call that cross-family review.

SOURCE: Starfall artifacts/implementation-tactical/design-a.md, design-b.md, decision.md. Spawn records: design_a, design_b, design_judge. Current pstack skills/architect/SKILL.md and skills/arena/SKILL.md.

## 29. Shared plan, fewer moving parts

TIME: 11:45–12:15 (30s)

The lead chose A because it fit the existing structure and avoided new snapshot fields and a mutable plan lifecycle.

It also kept useful details from B: relative spawn offsets and exact boundary tests. The decision combined a chosen base with a concrete improvement from the alternative.

One implementation owner then connected the shared calculations and UI consumers. The lead reviewed and verified the built game.

SOURCE: Starfall artifacts/implementation-tactical/decision.md. Simplified diagram of the chosen shared function.

## 30. The next day: local-first play

TIME: 12:15–12:45 (30s)

The next day, I used the same entry point for a larger change: browser-only play, IndexedDB saves, and a PWA.

This recorded check disabled networking, built and upgraded a tower, saved, reloaded, and continued. It confirmed the same credits, tower level, enemies, and paused clock.

Review also caught a save-ordering race around restart. The task changed, and the workflow still needed a design, scoped work, and evidence.

SOURCE: Starfall artifacts/verify-starfall/local-pwa-final/result.md and session 01a0bd84-ec24-7333-b7a6-a914c7ca7bb3, lines 387 and 796. Offline state comes from the interaction record.

## 31. The five pieces

TIME: 12:45–13:15 (30s)

We started with this vocabulary. Now each part has an example.

Poteto-mode routed my request. The Feature playbook organized the work. Skills supported investigation, design comparison, and browser verification. Principles shaped the burn model and the choice of checks. Subagents handled assigned pieces of work.

The lead connected them and checked the results. That is the general picture I want you to take away from the Starfall example.

SOURCE: Current pstack sources and the historical Starfall evidence in research/evidence.md.

## 32. This has a cost

TIME: 13:15–13:45 (30s)

I would not sell this as free parallelism. Every agent needs context. Every result needs review. Competing designs add work before the implementation begins.

For the flame feature, one implementation owner made sense. For wave previews, comparing two designs answered a real architectural question.

The session records show useful findings, but they do not measure a productivity improvement against a control group. What I can show you is the work and the evidence it produced.

## 33. A starting prompt

TIME: 13:45–14:20 (35s)

If you want to try this, pick one concrete behavior in a project you know. Give the agent the outcome and your delivery boundary. Then inspect how it decomposes the task and what it accepts as evidence.

Keep changes local is an example boundary. You can explicitly ask for a commit or a pull request when that is the result you want.

I would also give the project a repeatable verification skill. The more directly the agent can exercise the app, the more useful that final verification step becomes.

SOURCE: Prompt is an original example, not a quotation. pstack create-verification-skill and Feature playbook describe the supporting workflows.

## 34. A workflow I can inspect

TIME: 14:20–15:00 (40s)

I started with a weapon idea and a two-word follow-up. Pstack gave the agent a repeatable workflow for the work that followed.

We could inspect the design choice, the worker assignment, the review findings, and the browser evidence. That made it possible to see both what the agent built and where its first checks were incomplete.

If you try pstack, start with a small feature in a project you understand. Watch the route it chooses and the evidence it brings back. That is where you can decide whether the workflow helps you. Thank you.

[End the timed talk here. Questions and detail slides follow only if time allows.]

## 35. Questions

TIME: BACKUP

This slide is outside the 15-minute running time. Leave it visible for questions.

Useful prompts if the audience is quiet: Which part would you want to control yourself? What would a verification skill need to know about your application?

## 36. Verification limits

TIME: BACKUP

Use this if someone asks how much the evidence proves. The flame result records 49 unit tests and 7 browser/visual tests. The full 8-test E2E suite passed, followed by a 2-test targeted rerun after the final sale cleanup and CSS changes. The final browser checks ran on the rebuilt version.

The machine's default browser stopped advancing even a native one-second timer. The affected solo verification was repeated successfully in test Chromium without adding an application workaround. An interrupted recording was not counted as success.

This talk does not claim exhaustive balance testing, guaranteed correctness, or that each run followed every current playbook instruction perfectly.

SOURCE: Starfall artifacts/verify-starfall/flame-20260919/result.md.

## 37. Sources

TIME: BACKUP

Presentation reference: https://www.youtube.com/watch?v=v4F1gFy-hqg&t=142s. Matt Pocock, AI Engineer, published April 23, 2026, duration 18:26. Official page: https://ai.engineer/talks/v4F1gFy-hqg-software-fundamentals-for-ai-coding.

The reference informed the sparse black canvas, monospace type, short sequence of ideas, audience pauses, and concrete problem-to-practice explanation. The Starfall argument and speaker text are original. No source-video frames, transcript passages, event branding, or speaker likeness appear in this deck.

Local source map and selected facts: research/evidence.md. Reference analysis and topic map: research/reference.md. Slidev documentation: https://sli.dev/guide/syntax and https://sli.dev/guide/exporting.
