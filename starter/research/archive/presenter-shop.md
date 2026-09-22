# Learning from Pstack: Build Your Own Reliable Coding Agent Stack

English speaker notes. 21 main slides, 20 minutes total: 18 minutes of presentation and 2 minutes reserved for questions, followed by 3 optional slides. Approximately 2020 spoken words, excluding timing, source labels, and bracketed cues.

Generated from the native Slidev notes in slides.md. Edit slides.md, then run pnpm notes. Press P in Slidev to open presenter mode.

## 1. Learning from Pstack: Build Your Own Reliable Coding Agent Stack

TIME: 00:00–00:20 (20s)

Today I want to make agent skills concrete. We will follow an online shop adding discount codes, then fixing a later checkout regression. Along the way, we will look at both the diagrams and the Markdown instructions behind them. The shop is a teaching example. The instructions come from pstack.

## 2. The perfect AI coding workflow

TIME: 00:20–00:55 (35s)

Imagine you describe a feature, press a button, and three seconds later it ships perfectly. Nobody needs to read the code or open the application.

[Pause for hands.]

Yeah, me neither. The interesting question is what structure helps when the agent needs to understand unfamiliar code, make a design choice, or discover that its first implementation is wrong. That is where this talk starts.

## 3. What do we need from the workflow?

TIME: 00:55–01:50 (55s)

My first requirement is verification. The agent needs a way to run the relevant behavior and see whether it worked. For a checkout change, that means interacting with checkout and inspecting the resulting totals. A successful build alone cannot establish that.

Second, it needs engineering guidance. Where should a calculation live? What state should be explicit? What does a useful review check?

Third, the workflow should fit the request. Adding new behavior and investigating a reported defect start from different evidence. We will see both today. Keep these three requirements in mind as we look at the instructions.

## 4. pstack

TIME: 01:50–02:35 (45s)

Pstack packages reusable engineering instructions. The coding environment supplies the model, tools, and ability to start other agents. Pstack supplies instructions about how to organize that work.

I will show three kinds of document in this talk. A skill explains a particular job. A playbook organizes a whole task. A principle guides choices across those jobs. You do not need to memorize the names now. We will introduce each when our shop needs it.

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 5. Pstack creator poteto

TIME: 02:35–03:00 (25s)

This is poteto, or Lauren, the creator of pstack. The skill we are about to invoke is named poteto-mode. I am using a pinned copy of the published plugin for this explanation so the Markdown on the slides refers to one version. Now let us give that workflow a concrete job.

SOURCE: User-provided profile screenshot; pinned source recorded in research/shop-narrative.md.

## 6. Our shop needs discount codes

TIME: 03:00–03:45 (45s)

Our example shop sells a canvas tote for fifty euros. Two totes cost one hundred euros. We want customers to enter SAVE10 and receive ten percent off, bringing the merchandise total to ninety euros. We leave tax and shipping outside this example.

The feature also needs to behave when quantities change, when a customer removes the code, and when a code is invalid. Those are concrete outcomes we can inspect. This is a hypothetical shop, not a recording of a successful agent run.

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 7. Invoke poteto-mode

TIME: 03:45–04:20 (35s)

Here is the entry point. I select poteto-mode and describe the behavior I want. I include a meaningful edge case and the delivery boundary. Keep changes local means this example ends with changes and evidence for me to inspect.

I do not list every supporting skill in the prompt. The routing instructions will choose the workflow and load further instructions as the task needs them. The screenshot shows the invocation interface; the shop prompt below it is our example.

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 8. A skill is a Markdown document

TIME: 04:20–05:10 (50s)

This is a small real excerpt from the how skill, with the long description omitted to keep it readable. The file has frontmatter and a Markdown body. The rest of the body supplies the instructions.

That makes the mechanism fairly tangible. When the workflow calls for this skill, the agent reads a document that tells it how to investigate the code. The document is not a second model or an executable program. The agent interprets the instructions and uses its available tools. A supporting skill can itself instruct the agent to delegate part of the work.

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 9. The request selects a playbook

TIME: 05:10–06:00 (50s)

Adding discount codes is new behavior, so this request matches Feature. The Markdown entries are the source of the two branches in the diagram. Poteto-mode tells the agent to open the matched playbook and copy its steps into a todo list.

That is the connection I want you to see. There is a file behind the arrow. Later, our reported checkout defect will take the other branch. For now, we follow Feature. These are two routes from a larger set, selected because they make the distinction easy to see.

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 10. Understand the checkout first

TIME: 06:00–07:05 (65s)

The first Feature step calls how over the affected subsystem. In our shop, the agent needs to trace the cart, the pricing calculation, the displayed total, and the total used when submitting an order.

[Trace the three boxes from left to right.]

Where is the current source of truth? Does the component already call a pricing module? Do quantity changes follow the same path as the initial calculation? Before adding a discount, these are observable facts about the existing implementation.

How provides the investigation instructions. The playbook tells the agent when that investigation belongs in the larger task. The useful output is an understanding of the behavior and its ownership, not just a list of filenames.

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 11. Compare designs before implementation

TIME: 07:05–08:20 (75s)

Suppose the agent finds two plausible shapes. It could calculate the discount inside checkout, or integrate it with a pricing module shared by display and order submission. These are illustrative alternatives; the actual codebase supplies the constraints.

Architect calls for at least two structurally different candidates before synthesis. The Feature playbook makes design exploration explicit, and a skipped architect step needs a recorded reason.

For this example, assume there is already a shared pricing module. Extending it may keep totals consistent across callers. The comparison should explain that choice and its tradeoffs. It should not just produce two versions of the same function and declare a winner.

[Point to the chosen path.]

The output is a design the implementation can follow. If implementation exposes a wrong assumption, the design can be revisited.

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 12. Make the discount state explicit

TIME: 08:20–09:25 (65s)

Here is a principle changing a specific design choice. Model the Domain asks us to encode the domain in a structure. For the shop, we could represent an applied discount with its amount and a rejected discount with its reason. A pricing result gathers the subtotal, discount, and final total.

That gives the implementation a named shape before it starts adding conditionals. It also gives reviewers concrete questions. Can a rejected code reduce the total? Can the display and order submission disagree?

This is an illustrative model, not a universal discount schema. The point is how the principle constrains a decision. In pstack, principles are packaged as skills too. They influence multiple steps instead of forming one final checkbox.

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 13. Delegate a bounded assignment

TIME: 09:25–10:45 (80s)

The lead now gives a worker a bounded implementation assignment. The Feature playbook explicitly requires delegated code-writing and the lead reviewing the diff. The worker is another running agent, with a scope and success criteria.

Before delegation, the playbook asks for a checkpoint covering blocking steps, independent work, shared mutable state, and the smallest safe decomposition. In this example, one implementation owner is a reasonable choice because the pricing model and its callers need to agree. That is a reasoned decomposition, not a requirement to maximize the number of agents.

[Read the short assignment.]

The lead checks the returned artifact. It can ask for corrections if the implementation diverges from the chosen model or misses a caller. A confident worker summary is not a substitute for looking at the diff and exercising the behavior.

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 14. Verify the customer journey

TIME: 10:45–12:00 (75s)

We can now turn the desired behavior into a repeatable journey. Start with two fifty-euro items. Apply SAVE10 and expect ninety euros. Change quantity to three and expect one hundred and thirty-five euros. Remove the code and expect one hundred and fifty. Also exercise an invalid code and inspect the submitted total.

These are expected values for our example, not measured test results. Precise calculation tests and browser interaction answer different questions. We want evidence for both the arithmetic and the customer-facing path.

Pstack calls for verification on the matching surface. The principle Prove It Works reinforces checking the real artifact. The normal playbook also includes commit and PR steps. Our explicit keep-local boundary means we stop with reviewable local work and evidence.

[Pause on the quantity-change check. It matters in the next part.]

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 15. Later, a checkout regression

TIME: 12:00–12:45 (45s)

Now imagine a later checkout change introduces a regression. A customer reports that SAVE10 initially works, but changing the quantity makes the discount disappear. With three totes, the screen shows one hundred and fifty euros instead of one hundred and thirty-five.

We already tested this behavior when introducing the feature. This is a later regression, which lets us examine a different task. The request now matches Bug fix. We keep the same shop and the same expected values, but the first step changes.

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 16. Reproduce before editing

TIME: 12:45–13:40 (55s)

The Bug fix playbook starts by reproducing the reported behavior on the relevant surface. For this defect, that is the checkout UI. We need to observe the transition from the correct discounted total to the incorrect total after a quantity change.

Before editing, the agent should record the conditions and the actual result. If it cannot reproduce the defect, it needs more evidence or instrumentation. It should not silently treat a plausible theory as an established cause.

The three lines on the slide form our example reproduction. They are also the sequence we will repeat after the fix. That gives the investigation a concrete target and keeps the definition of success stable.

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 17. Eliminate causes with evidence

TIME: 13:40–15:00 (80s)

There are several explanations for the same visible symptom. The quantity update might clear the discount code. It might retain the code but bypass discount calculation. Or calculation might be correct while the display shows an old value.

The playbook calls for candidate hypotheses and evidence that rules them out. How investigates the current subsystem. Why investigates the regression history. Those investigations can run in parallel, while the lead remains responsible for establishing the cause.

For our example, suppose instrumentation shows that the code remains present, but the quantity-update path calculates a plain subtotal and skips the shared pricing function. That observation supports a particular mechanism. We would still need to confirm the connection in the running application before treating it as the diagnosis.

[Point to the highlighted hypothesis.]

This is where the bug workflow earns its shape. The evidence determines the fix instead of the first plausible explanation determining the code.

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 18. Fix the cause and repeat the repro

TIME: 15:00–16:00 (60s)

Given that confirmed mechanism, the scoped fix is to route quantity changes through the shared pricing calculation with the selected code. A worker implements the change, and the lead reviews the diff. If the fix crosses a function boundary, the Bug fix playbook calls for architect first.

Then repeat exactly the original browser sequence. Apply SAVE10, change quantity to three, and inspect the total. The expected result is one hundred and thirty-five euros. Keep a regression check where a cheap local test path exists; the playbook describes placing the failing reproduction before the fix in commit history.

Our slide shows the expected outcome of the example. An actual completion report needs the observed failing and passing evidence.

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 19. Same shop, different starting evidence

TIME: 16:00–17:05 (65s)

We can now compare the two workflows without learning another set of definitions. A feature starts with desired new behavior and needs an integration design. A bug starts with observed incorrect behavior and needs a reproduced, confirmed mechanism. Both require scoped implementation, review, and verification.

This is what I would take into my own setup. Write down how an agent should investigate my project. Give it decision rules that affect the design. Make verification something it can run and inspect.

Delegation has a cost. Each worker needs context, and each result needs review. Use it for a specific assignment and a useful separation of responsibilities. The shop example illustrates the instructions; it is not a productivity measurement or a guarantee that every agent will follow them correctly.

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 20. Start with one inspectable task

TIME: 17:05–18:00 (55s)

Start with a feature in a project you understand. Name the behavior, provide the delivery boundary, and make sure the agent can exercise the application. Then inspect the selected workflow, the design choices, and the evidence it returns.

If you want to adapt pstack, these Markdown files give you concrete places to make changes. A playbook can encode the sequence for a common task. A supporting skill can explain how to verify your application. A principle can capture a decision rule that you want applied consistently.

The useful outcome is work you can inspect, including where an initial assumption was wrong and how the result was checked. Thank you.

SOURCE: pstack at cursor/plugins commit 6ed0f7a9504f577d7529064103cecce9be7dfc5e. See research/shop-narrative.md. Shop behavior, assignments and outcomes are illustrative, not a recorded run.

## 21. Questions

TIME: 18:00–20:00 (120s)

[Reserve the final two minutes for questions or timing overrun.]

Possible prompts if the room is quiet: What would an agent need to know to reproduce a bug in your application? Which design decisions should it make autonomously? What evidence would make you comfortable reviewing its result?

## 22. Computer handoff example

TIME: BACKUP

User-provided screenshot. Use only if discussing a tool handing control back to a person. It is separate from the shop example.

## 23. A real Starfall verification finding

TIME: BACKUP

In the recorded Starfall run, selling a flamethrower while paused left a stale flame visible. Browser review found the case, and the lead repaired it and retained a regression check. This screenshot shows the corrected state, not the original defect.

SOURCE: research/evidence.md and the recorded flame verification artifacts.

## 24. Source files behind the diagrams

TIME: BACKUP

The main source is https://github.com/cursor/plugins/tree/6ed0f7a9504f577d7529064103cecce9be7dfc5e/pstack. The local source map records excerpts, omissions and example assumptions. The archived Starfall deck remains in research/archive/.
