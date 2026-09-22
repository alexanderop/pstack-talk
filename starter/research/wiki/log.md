# Research log

The agent appends entries in this form:

```md
## [2026-09-11] ingest | Source title

- Raw: `research/raw/source-file.md`
- Result: new, updated, disputed, or no material
- Wiki: topic pages changed by this ingest
```

## 2026-09-21 — Imported the supplied pstack talk

Captured the current source slides and provenance, retained research and source excerpts, and adapted the deck to the brand starter. No new factual claims added. The main deck is the current workflow narrative; earlier game and shop versions remain archived.

## [2026-09-21] ingest | Lauren on building trust in coding agents

- Raw: `research/raw/2026-09-21-poteto-agent-trust-video.md`
- Result: updated. Downloaded the full video and English captions, reviewed the complete caption text and sampled visuals throughout, and preserved source uncertainty.
- Wiki: `agent-workflow.md`; updated index and brief to reflect the user’s independent-workflow objective.
- Analysis: `research/creator-video-analysis.md` contains the timestamp map, source limitations, and a proposed revision within the current 20-minute / 24-slide structure.
- New emphasis: recurring corrections should become improvements to code structure, automated checks, reusable tools, and instructions.
- Slides remain unchanged; this request was analysis and discussion of improvements.

## [2026-09-21] ingest | Central verification slide direction

- Raw: `research/raw/2026-09-21-verification-slide-direction.md`; supplied screenshot retained unchanged beside it.
- Result: updated. Made a project-specific verification skill the central takeaway in the brief and analysis proposal. Added central slide copy and a concrete example of expected behavior.
- Wiki: `agent-workflow.md`.
- Slides remain unchanged pending the slide-revision task.

## [2026-09-21] maintenance | Revised verification-centered deck

Implemented the user-approved revision in slides.md. Added the attributed creator diagram, a concrete theme-persistence teaching example, reusable control operations, a feature-map entry, and an independent-build closing action. Retained 24 slides and the 20-minute timing. Regenerated presenter notes and updated the brief and workflow provenance.

## [2026-09-21] ingest | Three foundations and less repeated manual review

- Raw: `research/raw/2026-09-21-three-foundations-direction.md` and supplied screenshot.
- Result: updated the brief and workflow wiki. Slide 3 now establishes verification, engineering skills, and codebase design. Slide 11 demonstrates structure, checks, and instructions through the settings example. The close returns to all three, with verification as the concrete starting action.
- Attribution: source supports the three investments; the codebase emphasis and desired delivery outcome are the presenter’s framing. No universal claim that human review is unnecessary.

## [2026-09-22] ingest | Planning through questions and experiments

- Raw: `research/raw/2026-09-09-pstack-guide-part-2.md`, `research/raw/2026-09-22-grill-me-source.md`, and `research/raw/2026-09-22-pstack-planning-playbooks.md`.
- Result: updated. Captured the supplied article body, current upstream grill-me/grilling, and installed pstack 0.15.2 planning/prototype playbooks.
- Wiki: `planning-and-grilling.md`, index, and source availability correction in `agent-workflow.md`.
- Added: a comparison based on who resolves uncertainty and what evidence supports a decision. Challenged: the oversimplification that grill-me only asks questions without researching code.
- Proposed slide impact: sharpen slides 9 and 10 using the existing theme example and 165-second allocation. Slides remain unchanged.
- Open: final slide wording and whether a first-paint experiment will be recorded or remain illustrative.


## 2026-09-22 — Pstack concept illustrations

Captured upstream routing, feature and autopilot playbooks, how, and domain/type-system principles in `raw/2026-09-22-pstack-concepts-source.md`. Updated agent-workflow with the state-machine analogy, its limits, and the proposed Hamcrab imagery.

## [2026-09-22] ingest | Plugin definition and Hamcrab comic

- Raw: `research/raw/openai-plugin-architecture.md`, current official OpenAI documentation.
- Wiki: `agent-workflow.md`; defines skills and optional MCP tools as plugin contents.
- Slides: inserted a four-panel Hamcrab comic before the pstack introduction at the user's request. The deck now contains 22 timed slides and three backups. Split the existing loop explanation's 75 seconds into 40 seconds for the loop and 35 seconds for the comic, retaining 20 minutes overall.
- Illustration is a teaching metaphor; tool connections are optional and installation does not train the model.

## 2026-09-22 · Feature source walkthrough

Cloned the requested cursor/plugins pstack directory into /tmp and captured four complete source files at commit 53e579f1481697931fc44f5445171397cfa2b24b. Added a four-stop editor walkthrough after the concepts slide, replacing the generic skill and routing slides. The sequence traces explicit invocation, Feature routing, Model the Domain, and the Prove It Works trigger. Updated the delegation claim to match the source. Theme persistence remains an illustrative feature, not a recorded run. Rebalanced the 20-minute talk to 24 timed slides plus three backups. Open question: whether to add a real application recording later.

## 2026-09-22 · Make the source walkthrough explicit

Added synchronized illustrative agent actions, a concrete ThemePreference union, and a return to Feature step four for implementation, review, and verification. The final check now shows the failure branch back to implementation. Five stops retain the original 140-second slot; the deck remains 20 minutes with 25 timed slides and three backups. No new upstream claims or executed feature results are introduced.

## 2026-09-22 · Editor workflow minimap

Added a bottom-right workflow diagram beneath the file explorer for the five source stops. The current node follows the slide; implementation, review, verification, and the conditional retry label follow the click. The retry edge illustrates the existing expected failure branch. No timing or upstream claims changed.

- 2026-09-22: Simplified the Poteto mode theme walkthrough to four audience-facing stages. Kept source excerpts and delegation/review; presented principles as supporting guidance and synchronized speaker notes. No new upstream claims.

- 2026-09-22: Added the requested single-message chat before the editor walkthrough, using `$poteto-mode` and the theme-persistence prompt. Split 15 seconds from the preceding introduction; retained the 20-minute total. Updated notes validation to 26 main slides and 3 backups.

- 2026-09-22: Added the requested generated workflow overview between the chat prompt and source walkthrough. It repeats the four-stage map and supporting principles before file-level detail. Reallocated 20 seconds within the walkthrough; now 27 main slides and 3 backups, still 20 minutes.

## 2026-09-22 · Outpost Zero verification evidence and slide proposal

Captured two local Codex sessions, generated verification instructions, the defense recipe, both action reports, installed pstack generation/maintenance source, and five original screenshots in `raw/2026-09-22-outpost-zero-verification.md` and its asset folder. Inspected built/sold pixels. Added `project-verification.md` and a five-slide storyboard that can replace the existing 205-second verification block. The sources establish creation, one live defense-economy proof, subsequent skill reuse, and 11 reported passing automated tests; they do not establish full-game manual coverage or an executed maintenance pass. Maintenance automates an invoked source/live audit rather than watching continuously. Updated the brief's demonstration question. Slides unchanged; next editorial decision is whether to apply the proposed sequence.


## 2026-09-22 · Implement Outpost Zero immediately after the creator diagram

At the user's request, placed the five-slide concrete example directly after Lauren's verification screenshot (slides 15–19). Removed the three later generic verification slides, moved their 205 seconds forward, and updated transitions. Added original evidence assets, four keyboard-driven screenshot states, evidence limits, maintenance explanation, and source citations in speaker notes. Updated presenter generation to 29 timed slides plus three backups; total remains 1200 seconds. Production build, research validation, and presenter checks passed. Inspected all five slides and all four proof states in native Chrome, including the transitions from Lauren's diagram and back to planning. No game verification was rerun.


## 2026-09-22 · Shorten deck and promote invocation screenshot

Kept “Plan · define what success looks like” as the final slide and removed all following slides at the user's request. Preserved the real “Invoke poteto-mode” screenshot by moving it into slide 7, replacing the illustrative chat before the workflow overview and code walkthrough. Updated presenter checks and brief to 20 timed slides, 680 seconds, and no backups. Research sources and image assets remain available.

## 2026-09-22 · Speaker introduction

Added the requested two-column speaker slide immediately after the title, using the supplied photo and a short bio grounded in alexop.dev. Split the opening 20 seconds between the title and introduction; 21 timed slides retain the 680-second total. No open biography question blocks this short introduction.


## [2026-09-22] ingest | Talk rehearsal and short speaker cues

- Raw: `research/raw/2026-09-22-talk-rehearsal.md` and the original M4A export beside it. Local automatic transcription; recognition errors retained and labeled.
- Result: updated. Condensed all 21 native Slidev notes to 3–5 bullets, preserving the personal opening, checkout analogy, codebase-as-memory phrase, domain-first habit, and Vue joke.
- Wiki: `agent-workflow.md`, index. No new factual claim about model training or guaranteed architecture quality was adopted from the rehearsal.
- Preserved source-backed distinctions between generation proof and later smoke run; scheduled maintenance remains an idea.
- Timing: recording 15:50; existing 11:20 target retained and clearly labeled. Final planning slide was not recorded; cues derive from existing notes.
- Open: whether the presenter wants to rehearse toward the existing target or change the time allocation.

Added `starter/rehearsal-feedback.md` at the presenter’s request: timestamped editorial feedback, approximate pace, pause and recording-level measurements, and a focused rehearsal exercise. Voice-quality judgments requiring listening are explicitly outside this analysis.

## [2026-09-22] ingest | Judas dance finale

- Raw: `research/raw/2025-05-13-judas-tutorial.md` and full automatic VTT captions.
- Result: new. Opening two eight-count phrases informed a simplified 16-pose generated mascot loop.
- Wiki: `dance-finale.md`. Added an untimed closing slide, preserving the 11:20 talk timing.

## [2026-09-22] ingest | Audience handoff and pstack installation

- Captured the current upstream README to verify Cursor installation and setup commands.
- Replaced the final planning example with a summary and resource QR; retained the 60-second timing and dancing finale.
- Collected the public research links, installation steps, online deck and PDF in one secret gist.
- Canonical URLs for the originally supplied guide articles remain unknown.

## [2026-09-22] ingest | Useful standalone pstack skills

- Captured seven upstream skill definitions at one pinned commit.
- Added unslop, technical-writing, how and blast-radius before the resource summary. Writing skill instructions describe intended behavior, not a measured quality claim.
- Updated audience-resources synthesis and gist links; retained other candidates as optional reading.
- Added 40 seconds: 22 timed slides, 12 minutes, plus the untimed finale. No new unresolved source question.

## [2026-09-22] maintenance | Munich opening cover

Placed the generated TypeScript Meetup Munich Oktoberfest poster before the talk title as an untimed event cover. Preserved the 12-minute talk timings and updated notes and export counts. Prompt and reference provenance remain in `research/munich-oktoberfest-cover-prompt.md`.

## [2026-09-22] ingest | Pstack creator introduction

Captured the supplied profile and checked the upstream pstack README and React team page. Added Lauren Tan’s introduction before the pstack structure overview, with the screenshot on the right. Current employer remains unresolved across sources and is omitted. Reallocated 15 seconds from the plugin introduction, retaining 12 minutes across 23 timed slides plus two untimed slides.

## [2026-09-22] maintenance | Defense feature Markdown example

Replaced the defense economy table with a compact Markdown example after reading the original Outpost Zero `features/defenses.md` on disk. Preserved its navigation, driving steps, observable outcomes, and gotchas; marked the slide as shortened. Existing source capture already contains the original recipe.

## [2026-09-22] maintenance | Skills composed into playbooks

Added a three-click composition slide after the pstack structure overview, grounded in the existing pinned Feature source. Generated a manual, blueprint and Hamcrab illustration with prompt provenance in `research/skill-composition-prompts.md`. Native labels distinguish named skills from later workflow steps. Updated presenter timing to 12:25 across 24 timed slides, plus cover and finale. No new source ingestion required.

## [2026-09-22] ingest | Actual Feature review responsibilities

Captured six upstream files at one pinned commit in `raw/2026-09-22-pstack-feature-review.md`. Clarified lead diff review, arena cross-judging, conditional interrogate, PR-opening subagent requirements, and the separate babysit trigger in agent-workflow. The current slide's “Implement & review” remains a valid simplification; no slide changes made. Source describes intended behavior, not evidence of compliance by an actual agent run.

## [2026-09-22] ingest | Review criteria and security coverage

Captured the interrogate rubric, code-quality lens, mode wrapper, agent wrapper and Prove It Works at the review-source commit. Clarified that mandatory default lead diff review does not explicitly load the detailed interrogate security rubric. General quality principles and runtime verification are present; systematic security coverage cannot be inferred from the default review instruction.

## [2026-09-22] maintenance | Explicit author and reviewer roles

Changed the composition slide to Worker implements · Lead reviews. Added notes distinguishing upstream conditional interrogate criteria from the recommended explicit baseline rubric for an audience-owned playbook. Kept the longer adaptation as optional elaboration within the existing timing.

## [2026-09-22] ingest | Repository screenshot after creator

Preserved the user-supplied GitHub screenshot unchanged and added it immediately after Lauren’s introduction. Adds a visual view of the repository layout; challenges no prior claim. No new factual question. Updated creator synthesis and source record. Added 15 seconds, bringing the deck to 25 timed slides, 12:40 total, plus cover and finale.
