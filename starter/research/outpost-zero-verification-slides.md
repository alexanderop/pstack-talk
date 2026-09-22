# Outpost Zero: five-slide verification proposal

Proposed replacement for the three slides “Verify · check the claimed behavior”, “Give the agent repeatable controls”, and “Give the agent a feature map”. Their existing 11:35–15:00 slot is 205 seconds; the five slides below fit that slot. Keep Lauren’s earlier feature-map + controls diagram as the conceptual introduction. Leave the earlier theme example in the workflow walkthrough, then explicitly introduce Outpost Zero as a recorded application of the idea.

Status: implemented on September 22 as slides 15–19, immediately after Lauren’s verification diagram, per the user’s placement request. The original three generic slides were removed; this 205-second sequence now runs 06:55–10:20. Later planning/implementation/review slides move accordingly, with the overall 20-minute duration preserved. The storyboard below records the original proposal; slides.md and presenter.md contain the final wording and timing.

Evidence: [source capture](raw/2026-09-22-outpost-zero-verification.md), [research synthesis](wiki/project-verification.md). All recorded results refer to September 22, 2026.

## 1. Generate a verification skill for this game — 35 seconds

On screen:

> `$pstack:create-verification-skill`

```text
.agents/skills/verify-outpost-zero/
  SKILL.md
  features/
    README.md
    defenses.md   squads.md   combat.md
    missions.md   controls.md
```

Small footer: **Launch → Doctor → Drive → Evidence → Cleanup**

Visual: show the short prompt, then reveal the generated files. A small initial-game screenshot establishes what Outpost Zero is; keep source text readable.

Say: “I ran this in my Vue/Phaser game today. Pstack inspected the repository and wrote instructions for the next agent: how to launch the right instance, check it is healthy, operate the game, save proof, and clean up. It also generated five feature recipes. The generator had to execute one recipe before handing it over.”

Emphasis: the generator produces a project-local skill; the later agent uses that output. No custom CLI or helper script was required here: pnpm, existing shell commands, and Computer Use supplied the controls.

## 2. The feature map tells the agent what to check — 50 seconds

On screen, a shortened teaching excerpt labelled **defenses.md · condensed**:

```text
Reach: Select defense pad A1
Start: fresh game, 210 salvage, no wave running
Build: Coil Sentry → 125 salvage + visible tower
Upgrade: Railgun Battery → 45 + changed sprite
Cancel sale: tower stays, salvage stays 45
Confirm sale: empty pad, salvage 144
Gotcha: combat changes salvage; check before wave 1
```

Visual: readable recipe as the main content; a small five-file index highlights defenses.md. Avoid a full-file screenshot with tiny text.

Say: “A browser tool knows how to click. The feature map explains what the feature means, where to find it, how to exercise it, and what observable result counts as success. It also records traps. Here, launching combat would make exact salvage checks harder because kills earn resources.”

Clarify: the actual files use Sub-features, How to get to it (user POV), Driving it with Computer Use, and Gotchas. This display is a condensed explanation, not a verbatim template. Buttons, keys, and canvas pads are distinct entry points; proving one does not prove them all. Five mapped features does not mean five verified features.

## 3. The agent plays the sequence and keeps proof — 50 seconds

On screen:

**210 → 125 → 45 → 144 salvage**

**Build → Upgrade → Confirm sale**

Visual: advance through the original built.png, upgraded.png, sale-confirmation.png, and sold.png captures in one large image position. Keep the HUD and A1 in frame. Add a short note at the confirmation frame: **Cancel kept the tower and 45 salvage**. Cancellation is supported by the action log and sale-cancelled.txt, not a separate screenshot.

Say: “This is the generation run proving its own instructions. It built the tower, checked the new sprite after upgrading, cancelled a sale, then confirmed a sale. The final pad is empty and the refund is exactly 99. It even selected another pad and returned to check that the refund did not happen twice. Screenshots, accessibility snapshots, and an action log survived cleanup.”

Evidence lesson: a final screenshot alone cannot prove cancellation or a single refund. The ordered actions and intermediate observations supply that context. Name this a defense-economy proof, not a complete game test.

Assets: [built](raw/outpost-zero-verification/built.png), [upgraded](raw/outpost-zero-verification/upgraded.png), [confirmation](raw/outpost-zero-verification/sale-confirmation.png), [sold](raw/outpost-zero-verification/sold.png).

## 4. A later agent can reuse it for a smoke test — 40 seconds

On screen:

> “Verify and do a smoke test if this game works.”

Prompt spelling normalized for display; original: “verfiy and do a smoke test if this game works”.

- Reads the local skill and feature recipes
- Runs existing tests and drives the real game
- Reports evidence and what remains unchecked

Result line: **11 automated tests passed: 5 unit + 3 browser + 3 end-to-end**

Limit line: **Manual checks stopped during concurrent Chrome use; full combat and audio unverified**

Say: “My next prompt did not repeat the setup or explain the UI. The session read the generated skill and map, ran the existing test suites, and used the browser to check building, upgrading, and the sale confirmation. Its report also says where it stopped. That is useful reusable context: another agent can reproduce a behavior, check a change, or investigate a failure.”

Do not merge the sessions: manual cancellation and confirmed sale were proved in the generation run. In the later smoke run, manual cancellation was interrupted. Existing browser tests did cover their named sale assertions. The skill did not generate those 11 tests, and this run did not demonstrate fixing a product defect.

## 5. Pstack also maintains the feature map — 30 seconds

On screen:

> `/maintain-verification-skill`

**Read source → Exercise every mapped feature → Correct the skill and map**

Small supporting line: **Documentation drift: update it. Product regression: report it.**

Say: “Pstack ships the upkeep step too. When you invoke it, readers inspect the source for each feature, and one coordinator drives the app. It checks for missing features and stale recipes, proves its corrections live, and can produce one PR containing changes to the verification skill. It reports actual product bugs instead of silently changing the map to accept them.”

Precision: this is an automated pass when invoked, not a background watcher. Its outcomes are clean, changed, or blocked. Its edit scope is the verification skill directory, not product code. No maintenance invocation was found in these two Outpost Zero sessions; this slide explains the installed pstack instructions, not a recorded maintenance result.

## Shorter variants

- Four slides: combine generation and later reuse into one opening slide; keep feature map, real proof, and maintenance separate.
- Three slides: combine generation with the map; combine proof with the later smoke-test result; retain maintenance as the final slide. Allow roughly three minutes so evidence limits remain understandable.

## Delivery choice

Use the five-slide sequence with progressive image reveals. It provides a concrete example at each step without a live browser dependency. The main audience takeaway is: “Give the next agent a way to run the app, a map of observable behavior, and a place to keep evidence.”
