# Learning from Pstack: Build Your Own Reliable Coding Agent Stack

English speaker notes based on the September 22 rehearsal. 26 main slides, 12 minutes 55 seconds planned, plus an untimed event cover and dancing closing slide and no backup slides. Short bullet cues, not a script. The 12:55 timing includes the added skills, composition, repository and model-configuration slides; the supplied rehearsal recording lasts 15:50. The skills slide and resource summary were added after the recording.

Generated from the native Slidev notes in slides.md. Edit slides.md, then run pnpm notes. Press P in Slidev to open presenter mode.

## 1. Learning from Pstack: Build Your Own Reliable Coding Agent Stack

TIME: COVER

- Leave the event cover on screen as the audience settles.
- Advance to the talk title to start the 12-minute presentation.

SOURCE: research/munich-oktoberfest-cover-prompt.md. Generated with the built-in image_gen tool, matching the earlier TACON cover style.

## 2. Learning from pstack

TIME: 00:00–00:10 (10s)

- Welcome — enough energy left for some agentic-coding talk?
- Models and tools improved hugely since my talk last year.
- Today: learn from pstack; take away a verification skill for your own project.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.

## 3. Hi, I’m Alex

TIME: 00:10–00:20 (10s)

- Alex — developer from Germany; I share what I learn on alexop.dev.
- Last year: AI talk at the TypeScript meetup.
- Since then: better models and tools — how much has our workflow improved?

SOURCE: https://alexop.dev (accessed 2026-09-22); research/raw/2026-09-22-speaker-introduction.md. Photo supplied by the presenter.

## 4. The perfect AI coding workflow

TIME: 00:20–00:50 (30s)

- Start with the image only. Click 1: Carl as a developer. Click 2: Carl as a designer. Click 3: Carl as a business analyst.
- [Ask for hands] “Who has had an agent say ‘done’ — and then found the feature didn’t work?”
- [Wait 3–5 seconds; look around and acknowledge the actual response. Allow 10–15 seconds total.]
- “That gap is what this talk is about.” The dream: an idea → a good, working feature.
- Our engineering job: build a workflow we can trust. What foundations do we need?

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.

## 5. Three foundations for trusted agent work

TIME: 00:50–01:45 (55s)

- [click] Verification — agent runs the real app end to end; shop → cart → checkout.
- [click] Engineering skills — encode the practices we want followed.
- [click] Codebase design — “the codebase is also memory”; agents copy existing patterns.
- Biggest ongoing investment: make those patterns worth copying.
- Aim: less repeated correction and review; trust still needs evidence.

SOURCE: Lauren’s video, 07:05–18:57 and 18:57–30:38; research/raw/2026-09-21-three-foundations-direction.md. Emphasis on codebase investment is the presenter’s framing.

## 6. The loop I want around every change

TIME: 01:45–02:25 (40s)

- [Point around the loop] Plan → implement → review → verify.
- A working feature can still have poor code — cover all four responsibilities.
- Review the change; verify the behavior in the running app.
- Failed check → fix and repeat. This is my teaching model for the workflow.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.

## 7. What is a plugin?

TIME: 02:25–02:45 (20s)

- [Ask for hands] “Who has already installed a skill or plugin for their coding agent?”
- [Brief show of hands; acknowledge the response.]
- [Few hands: use Hamcrab’s packaging analogy. Many hands: keep the definition brief.]
- Plugin = installable, shareable package of skills and optional tools. Skills describe the work; tools provide actions.
- Hamcrab packages repeated instructions; pstack packages an engineering workflow.

SOURCE: OpenAI, Plugin architecture, https://developers.openai.com/plugins/concepts/plugins (accessed 2026-09-22). Captured in research/raw/openai-plugin-architecture.md. Comic generated with the built-in imagegen tool using the existing Hamcrab artwork as a character reference.

## 8. Meet pstack’s creator

TIME: 02:45–03:00 (15s)

- Lauren Tan, known as poteto, created pstack.
- She helps build React Compiler and has worked at Cursor, Meta, and Netflix.
- Pstack packages the engineering practices she uses herself. Let’s look inside.

SOURCE: https://github.com/cursor/plugins/tree/main/pstack and https://react.dev/community/team, accessed 2026-09-22. Research: research/raw/2026-09-22-pstack-creator.md. Profile screenshot supplied by the user on 2026-09-22, preserved in public/creator/lauren-poteto-profile.png. Current employer is omitted because the supplied profile and React team page differ.

## 9. Pstack on GitHub

TIME: 03:00–03:15 (15s)

- This is pstack in Cursor’s public plugins repository.
- The workflow is available as files we can read: agents, skills and documentation.
- Let’s look at how those pieces fit together.

SOURCE: User-supplied GitHub screenshot, preserved unchanged in public/creator/pstack-github-repository.png. Source record: research/raw/2026-09-22-pstack-repository-screenshot.md. Repository counts and relative dates are part of the supplied capture, not live claims.

## 10. How pstack organizes agent work

TIME: 03:15–03:40 (25s)

- Pstack: Lauren’s workflow, published as poteto — files we can read and adapt.
- [click] Skills = how to do a particular job.
- [click] Playbooks = steps for a feature, bug fix, or other task; include loops and checks.
- [click] Principles = engineering guidance: model the domain, prove it works.
- Instructions guide the agent; they still need checks and good project tools.

SOURCE: research/raw/2026-09-22-pstack-concepts-source.md, especially Poteto Mode, Autopilot-full, and Type System Discipline. The illustrations are teaching metaphors.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.

## 11. Playbooks compose skills into a workflow

TIME: 03:40–04:05 (25s)

- [click] Each skill is useful on its own: how explains the existing code; architect explores designs.
- [click] A playbook composes these reusable skills into a workflow for a task. Feature starts with how, then architect.
- [click] The worker implements; the lead reviews the diff. Verification checks the actual behavior.
- The Feature playbook assigns review to the lead. The detailed review criteria, including security, live in interrogate, which runs under specific conditions. When building your own workflow, define both who reviews and what they check.
- Optional elaboration: for your own playbook, worker implements → lead reviews using a named rubric (correctness, security, maintainability, tests) → fix findings and review again → verify actual behavior. This is our recommendation; the default upstream Feature review does not explicitly load that rubric. Multiple model reviewers can remain conditional.
- This is a simplified example. The full playbook includes a throughput checkpoint, delegation, ordered commits, conditional interrogation and Opening a PR. Architect can be skipped with an explicit reason.
- These are instructions interpreted by the agent, not deterministic function calls.

SOURCE: research/raw/2026-09-22-pstack-feature-trace.md, skills/poteto-mode/playbooks/feature.md; research/wiki/agent-workflow.md; research/raw/2026-09-22-pstack-feature-review.md; research/raw/2026-09-22-pstack-review-criteria.md. Artwork is a teaching metaphor; prompts in research/skill-composition-prompts.md.

## 12. Invoke poteto-mode

TIME: 04:05–04:20 (15s)

- Select poteto-mode explicitly, then describe the request.
- One entry point routes the work — no need to memorize every playbook.
- Requests might be a feature, prototype, investigation, or documentation.
- Our walkthrough: a theme preference that survives reload.

SOURCE: User-supplied invocation screenshot. The screenshot shows skill selection, not an executed theme request. research/raw/2026-09-22-pstack-feature-trace.md supports the illustrative routing walkthrough.

## 13. Choose models for the work

TIME: 04:20–04:35 (15s)

- Setup lets you choose models for code delegates, judgment and review panels.
- Choose within your available models and reasoning budget; override only the roles you care about.
- This is Cursor’s command syntax. Now back to our feature walkthrough.

SOURCE: research/raw/pstack-guide.md, chapter 01. Role-level configuration is documented behavior, not a benchmark recommending specific models. This slide does not configure the presenter’s environment.

## 14. One example through Poteto mode

TIME: 04:35–04:55 (20s)

- Read request → choose Feature → plan and implement → verify.
- The playbook brings in supporting skills and principles as needed.
- Failed verification → fix and check again.
- Now open the files — like stepping through a debugger.

SOURCE: research/raw/2026-09-22-pstack-feature-trace.md. Generated diagram is the presenter’s simplified overview of this feature example. The source walkthrough notes retain the additional playbook steps. Image prompt in research/poteto-overview-prompt.md.

## 15. Invoke poteto-mode

TIME: 04:55–05:10 (15s)

- Goal + constraints + proof: save the theme; keep the system default; check after reload.
- [click] You describe the outcome and how to check it. The playbook supplies the steps.
- [click] New behavior → Feature. This is an illustrative walkthrough.

SOURCE: research/raw/pstack-guide.md, chapters 02 and 06. Prompt adapted to the existing theme example.

SOURCE: research/raw/2026-09-22-pstack-feature-trace.md. cursor/plugins commit 53e579f1481697931fc44f5445171397cfa2b24b. Excerpts retain source wording; long lines are wrapped and omissions are marked. This is a teaching trace of instructions, not a recorded agent run.

## 16. Choose the Feature playbook

TIME: 05:10–05:30 (20s)

- Start with how — understand the existing settings implementation.
- Architect — explore competing designs before committing to one.
- [click] Prepare the worker assignment: scope, data shape, success criteria.
- [click] Model the Domain — define the shape before delegating code.
- Let the agent investigate alternatives; I can still join the design discussion.

SOURCE: research/raw/2026-09-22-pstack-feature-trace.md. cursor/plugins commit 53e579f1481697931fc44f5445171397cfa2b24b. Excerpts retain source wording; long lines are wrapped and omissions are marked. This is a teaching trace of instructions, not a recorded agent run.

## 17. Read Model the Domain

TIME: 05:30–06:00 (30s)

- My own habit: think about the domain and types before writing the logic.
- One theme preference: light | dark | system.
- [click] Put that named type in the worker assignment; avoid loose assumptions.
- [click] Keep it simple — reuse the existing settings model if it fits.

SOURCE: research/raw/2026-09-22-pstack-feature-trace.md. cursor/plugins commit 53e579f1481697931fc44f5445171397cfa2b24b. Excerpts retain source wording; long lines are wrapped and omissions are marked. This is a teaching trace of instructions, not a recorded agent run.

## 18. Implement and review

TIME: 06:00–06:25 (25s)

- Worker implements saving and restoring the preference.
- [click] Lead reviews the diff — requirement, design, mistakes.
- [click] Lead opens the app and checks persistence across reload.
- The playbook coordinates the work; principles guide the decisions.

SOURCE: research/raw/2026-09-22-pstack-feature-trace.md. cursor/plugins commit 53e579f1481697931fc44f5445171397cfa2b24b. Excerpts retain source wording; long lines are wrapped and omissions are marked. This is a teaching trace of instructions, not a recorded agent run.

## 19. Read Prove It Works

TIME: 06:25–06:55 (30s)

- Steer with a principle: “Apply Prove It Works. Show me the theme after reload.”
- Define success: dark mode still selected after reload; a fresh profile defaults to system.
- [click] Change theme → reload → inspect saved value, control, and appearance.
- Keep evidence such as screenshots or an action log; inspect the actual result.
- [click] If it resets: fix and repeat. A worker saying “done” is insufficient.

SOURCE: research/raw/pstack-guide.md, chapter 08. Principle names provide a concrete steering vocabulary.

SOURCE: research/raw/2026-09-22-pstack-feature-trace.md. cursor/plugins commit 53e579f1481697931fc44f5445171397cfa2b24b. Excerpts retain source wording; long lines are wrapped and omissions are marked. This is a teaching trace of instructions, not a recorded agent run.

## 20. A verification skill for your codebase

TIME: 06:55–07:50 (55s)

- [Ask for hands] “Who has an agent that can start your app and check a complete user journey by itself?”
- [Wait 3–5 seconds; acknowledge the response. Allow 10–15 seconds total.] “That’s the capability I want you to take away today.”
- Feature map gives context; tools give control. Build this even if you never adopt pstack.
- Known state → exercise feature → compare result → keep evidence.
- Now my own example: Outpost Zero.

SOURCE: research/creator-video-analysis.md; Lauren’s video https://x.com/poteto/status/2102050467505430555 (07:05–18:57). Examples are illustrative, not recorded results.

## 21. Generate a skill for Outpost Zero

TIME: 07:50–08:25 (35s)

- Lately I spend spare tokens making games — I love tower defense.
- Built with Vue — “the best JavaScript framework in the world.” [Smile]
- Run create-verification-skill → local skill plus five feature recipes.
- Like onboarding QA: defenses, squads, combat, missions, controls.
- Reuse existing pnpm commands + Computer Use; try a real recipe during generation.

SOURCE: research/raw/2026-09-22-outpost-zero-verification.md; generation session 01a0c8a0-4b74-7460-a338-7ff884a568cb. Screenshot: generation proof before.png.

## 22. One feature file: defenses.md

TIME: 08:25–09:15 (50s)

- Feature map gives the agent context — what to do and what success looks like.
- Show the Markdown file: purpose, how to reach the feature, steps, expected results, gotchas.
- Shortened from the local Outpost Zero defenses.md; the original also covers other towers and selection methods.
- Check visible tower AND resource balance; do this before combat changes the numbers.
- Same idea for a shop: explain the cart and checkout journey.
- A mapped feature is a recipe; it still needs to be exercised.

SOURCE: research/raw/2026-09-22-outpost-zero-verification.md; generated features/README.md and features/defenses.md.

## 23. The agent plays and keeps the evidence

TIME: 09:15–10:05 (50s)

- Real generation-run evidence: build tower, salvage 210 → 125.
- [click] Upgrade: changed tower sprite, 125 → 45.
- [click] Sale dialog: 99 refund offered; cancellation kept tower + 45, recorded in the log.
- [Before the final click, ask] “Suppose the tower disappears after selling it. Is that enough to prove selling works?” [Wait 3–5 seconds for an answer.]
- “Check the refund too.” [click] Empty pad AND 144 salvage; revisit to check no double refund.
- Screenshots + action log support this path; they do not prove the whole game.

SOURCE: research/raw/2026-09-22-outpost-zero-verification.md; generation actions.md and built.png, upgraded.png, sale-confirmation.png, sold.png. Cancellation has a text snapshot, not a separate screenshot.

## 24. Reuse it with a simple request

TIME: 10:05–10:45 (40s)

- Next session: just “Verify and do a smoke test if this game works.”
- Agent reads the saved skill + recipes; no repeated UI walkthrough from me.
- 11 existing tests passed; browser checks reached sale confirmation.
- Concurrent Chrome use interrupted the run; combat and audio remained unchecked.
- Context is reusable — and the report tells me what was actually checked.

SOURCE: research/raw/2026-09-22-outpost-zero-verification.md; smoke session 01a0c8b1-99da-7231-bcc5-6ab19785ea34. Prompt spelling normalized. These are existing tests, not tests generated by the skill. Manual cancellation and completed sale belong to the earlier generation run; the later smoke run did not manually complete those actions.

## 25. Pstack maintains the feature map too

TIME: 10:45–11:15 (30s)

- As the app changes, the feature map gets stale.
- Invoke maintain-verification-skill: inspect source → exercise app → prove map corrections.
- Update stale instructions; report actual product bugs.
- Optional idea from my rehearsal: schedule maintenance; it is not automatic today.
- Takeaway: maintain the verification context alongside the product.

SOURCE: research/raw/2026-09-22-outpost-zero-verification.md; installed pstack 0.15.2 maintain-verification-skill. No maintenance run was found in the two game sessions. Outcomes: clean, changed, or blocked; edits restricted to the verification skill directory.

## 26. More pstack skills worth trying

TIME: 11:15–11:55 (40s)

- Pstack also has useful skills you can invoke individually.
- Unslop edits writing: removes stock AI phrases while preserving meaning and tone.
- Technical-writing chooses the right document structure and makes instructions precise. Useful for READMEs, technical docs, RFCs, and PR descriptions.
- How explains an unfamiliar subsystem before you change it.
- Blast-radius looks beyond the diff and asks the agent to run code to test the safety assumptions. Unproven claims must stay marked unproven.
- You can try one skill without adopting the entire workflow. These are upstream Cursor command names.

SOURCE: research/raw/2026-09-22-pstack-useful-skills.md; research/wiki/audience-resources.md. Upstream SKILL.md files fetched at a pinned commit on 2026-09-22. Selection is the presenter’s recommendation, not a comparative benchmark.

## 27. Build your own reliable agent stack

TIME: 11:55–12:55 (60s)

- Invest in verification, reusable engineering skills, and codebase design.
- Your first step: pick one feature and write its expected result.
- Give the agent tools to exercise it and keep the evidence, like the tower sale and refund.
- Read pstack’s workflow and adapt that small starting point to your project.
- Scan the QR: installation instructions, this deck, the PDF, and the source resources.
- [Pause so people can scan.] The same code stays on screen during questions.

SOURCE: research/raw/2026-09-22-pstack-installation.md; research/raw/pstack-guide.md, chapter 06; research/wiki/audience-resources.md. Summary is the presenter’s synthesis. Resource gist: https://gist.github.com/alexanderop/743bbd811f2a56063fb79d3b3847ec27

## 28. Thank you!

TIME: END

- Thank you! Leave the mascot dancing during questions.
- Silent, repeating 16-pose adaptation of the first two eight-count phrases.

SOURCE: research/wiki/dance-finale.md; research/hamcrab-judas-prompt.md. Generated mascot sprites based on the user-supplied reference. Choreography adapted from Gustavo Krystal Dance's original music-video tutorial, not an exact reconstruction.
