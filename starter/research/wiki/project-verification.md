# Project verification skills

## Current synthesis

The deck now places five Outpost Zero slides immediately after Lauren’s verification diagram: generation, feature map, recorded proof, reuse, and maintenance. They replace the three later generic verification slides and preserve their combined 205-second allocation. The two September 22 sessions show both creation and subsequent reuse of a project-local verification skill. [Source capture](../raw/2026-09-22-outpost-zero-verification.md)

The feature-file slide shows a shortened Markdown version of the local `features/defenses.md`: purpose, navigation, driving steps, expected results, and gotchas. The original also documents other tower families and alternate selection methods. [Original file capture](../raw/2026-09-22-outpost-zero-verification.md)

The feature map connects user intent to navigation, real actions, observable expected states, and gotchas. It is a maintained recipe index, not a record that every feature has passed. The generated skill provides the lifecycle around those recipes: launch, doctor, browser setup, drive, evidence, and cleanup. [Generated skill and map](../raw/2026-09-22-outpost-zero-verification.md)

## Claims and evidence

- Session `01a0c8a0-4b74-7460-a338-7ff884a568cb` was prompted with `$pstack:create-verification-skill`. It generated `.agents/skills/verify-outpost-zero/` with five recipes: defenses, squads, combat, missions, and controls. [Session and files](../raw/2026-09-22-outpost-zero-verification.md)
- Its live defense proof recorded salvage 210 → 125 after build → 45 after upgrade → 144 after confirmed sale. Cancelling the sale kept the tower and 45 salvage. The action log records screenshot and accessibility evidence, no internal setters, and successful owned-process cleanup with evidence retained. [Generation proof](../raw/2026-09-22-outpost-zero-verification.md)
- Session `01a0c8b1-99da-7231-bcc5-6ab19785ea34` received “verfiy and do a smoke test if this game works”. Its tool calls read the generated skill and feature files. Its report records lint/type/build success and 5 unit + 3 browser + 3 end-to-end tests passing. [Smoke session and report](../raw/2026-09-22-outpost-zero-verification.md)
- The smoke run manually observed rendering, build, upgrade, and sale confirmation. Concurrent Chrome use interrupted cancellation; full combat progression and audio remained unverified. The report is narrower than “the whole game works.” [Coverage limits](../raw/2026-09-22-outpost-zero-verification.md)
- Installed pstack 0.15.2 includes `maintain-verification-skill`: read-only source readers per feature, one coordinator exercising every feature, and proven corrections within the skill directory. It sweeps for missing user-facing surfaces, distinguishes doc drift from product regressions, and reports clean/changed/blocked. It is an invoked maintenance pass, not a continuous watcher. [Installed maintenance source](../raw/2026-09-22-outpost-zero-verification.md)

## Finish conditions and verification infrastructure

The guide makes “done” executable: run the real CLI, walk the changed UI flow, replay saved parser or migration input, compare performance profiles, or read back a stored value. Compilation is one check, not proof of the user outcome. Unavailable checks should be reported as inconclusive. `/blast-radius` complements this by identifying and executing the key safety assumption beyond a small diff. [Guide: verification](../raw/pstack-guide.md#06-verify-and-shipmd)

A generated verification skill should specify Launch, Doctor, Drive, Evidence and Cleanup, plus a feature map of user actions and expected results. Generation must demonstrate one complete lifecycle before handoff. Maintenance combines read-only source inspection with a live pass of every mapped feature, reports clean/changed/blocked, and confines corrections to the skill directory; product regressions are reported rather than disguised as documentation drift. These are prescribed checks, not additional Outpost Zero evidence. [Guide: verification lifecycle](../raw/pstack-guide.md#06-verify-and-shipmd)

## PR preparation, readiness, and landing

Opening a PR prepares an isolated worktree, ordered commits, cleaned code and prose, and an evidence-bearing description. Babysit handles conflicts, review threads and CI, batches known fixes into a push, and stops at merge-ready. Shipping is a separate request: fresh agents verify each PR independently and only the contiguous verified sequence from the stack's bottom may land. A verified upper PR cannot bypass an unverified dependency. [Guide: shipping](../raw/pstack-guide.md#06-verify-and-shipmd)

## Tensions and open questions

The generation proof covers one defense economy path, not all five mapped features. The later smoke run adds existing automated coverage but does not prove full missions or combat feel. Neither session demonstrates a maintenance run or a product bug being fixed. Retain these distinctions in speaker notes and relevant on-screen limits. [Evidence](../raw/2026-09-22-outpost-zero-verification.md)

Slides 15–19 run 06:55–10:20; the subsequently shortened deck ends at slide 20 with 11 minutes 20 seconds of notes and no backups. The proof slide advances through four original screenshots. [Storyboard and timing](../outpost-zero-verification-slides.md)

## Sources

- [Local session excerpts, generated skill, feature recipe, action reports, and installed pstack source](../raw/2026-09-22-outpost-zero-verification.md)
- [Five-slide proposal](../outpost-zero-verification-slides.md)
- [Complete pstack guide, captured September 23](../raw/pstack-guide.md)
