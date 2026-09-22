# Coding agent workflow

## Current synthesis

The supplied talk organizes agent work as Plan → Implement → Review → Verify. This is the presenter’s teaching model, rather than a literal pstack playbook. The existing conversion preserves its argument and speaker notes. The user’s September 21 clarification shifts the desired outcome toward building an independent workflow from these principles, with pstack as an example. [Source deck](../raw/pstack-source-slides.md)

The user subsequently identified the verification diagram as the central lesson: build a verification skill for the audience’s own codebase. The proposed talk now foregrounds feature map + repeatable application controls, with explicit expected results and evidence. Durable constraints support that lesson. [User direction](../raw/2026-09-21-verification-slide-direction.md)

The user also requests three explicit foundations: verification, engineering skills, and codebase design, emphasizing the difficulty and value of the third. The delivery goal is less repeated manual review. Treat this as an engineering strategy, not a proven speedup or blanket permission to skip human judgment. [User direction](../raw/2026-09-21-three-foundations-direction.md)

The September 22 plugin comic introduces the packaging concept before pstack: an installable, shareable package can contain reusable skills, MCP tools, or both. Existing tools may be sufficient for a skills-only plugin. Hamcrab's box and robot illustrate installation rather than model training. [OpenAI plugin architecture](../raw/openai-plugin-architecture.md)

## Source walkthrough

The requested teaching sequence is now chat prompt → generated state-machine-style overview → source walkthrough. The overview deliberately repeats the four-stage map used in the editor sidebar, with a fix-and-recheck loop and principles shown separately as guidance. This is a global orientation before file-level detail, not an exhaustive playbook or an executable state machine. [Routing and verification source](../raw/2026-09-22-pstack-feature-trace.md)

A single-message chat slide now precedes the source walkthrough. It shows the user-requested `$poteto-mode` invocation and the same theme-persistence request. This is an illustrative prompt with the skill already installed; the upstream Cursor source uses slash syntax. The next editor slide repeats the same prompt for continuity. [Routing source](../raw/2026-09-22-pstack-feature-trace.md)

The audience-facing map now groups the example into Read request → Choose Feature playbook → Plan and implement → Verify. Model the Domain and Prove It Works appear as supporting guidance, not separate workflow stages. The five source slides remain, but their count does not imply five execution stages. This is the presenter’s simplification, approved on September 22, with the full playbook retained in the notes. [Pinned source snapshot](../raw/2026-09-22-pstack-feature-trace.md)

The September 22 debugger-style sequence visits four real files across five stops immediately after the Skills / Playbooks / Principles slide: Poteto Mode, Feature, Model the Domain, and Prove It Works. The illustrative request is to add a theme preference that survives reload. The code-editor view uses verbatim excerpts with marked omissions and line wrapping. Each click highlights an instruction and updates a separate illustrative agent-action strip. After Model the Domain, the walkthrough returns to Feature step four to show worker implementation, lead review, and surface verification. The illustrative TypeScript union makes the design decision concrete; a failed reload check returns to implementation. [Pinned source snapshot](../raw/2026-09-22-pstack-feature-trace.md)

Feature step four explicitly names Model the Domain before delegation. Prove It Works is reached through Poteto Mode's applicability trigger before declaring done, alongside Feature step five's surface verification. These are instructions interpreted by an agent, not deterministic imports or a captured execution. The full Feature playbook additionally includes architect, a throughput checkpoint, ordered commits, conditional interrogation, and Opening a PR. This snapshot requires code-writing delegation even for small features, which corrects the earlier slide's suggestion that one agent was sufficient under this playbook. [Pinned source snapshot](../raw/2026-09-22-pstack-feature-trace.md)

## Rehearsal and delivery cues

The September 22 rehearsal motivates the talk with the gap between better models/tools and dependable team workflows, uses a shop checkout as the verification example, describes the codebase as memory, and introduces the game through the presenter’s tower-defense hobby and Vue joke. These are the presenter’s framing and personal delivery cues, not new independent evidence about model training or guaranteed quality. The short native Slidev notes preserve those cues. [Rehearsal transcript](../raw/2026-09-22-talk-rehearsal.md)

The automatic transcript conflates the generation proof with the later smoke request. Keep them distinct in delivery: the complete build/upgrade/sale proof belongs to generation; the later smoke run stopped at sale confirmation. Scheduling maintenance is a proposed use, not a built-in background job. The final planning slide was not rehearsed and keeps cues derived from its existing notes. [Rehearsal](../raw/2026-09-22-talk-rehearsal.md), [run evidence](../raw/2026-09-22-outpost-zero-verification.md)

## Claims and evidence

- Skills describe jobs; playbooks organize tasks; principles guide decisions. [Source deck](../raw/pstack-source-slides.md)
- The presentation combines tests with observed runtime evidence and describes verification tooling and feature maps. [Provenance](../raw/pstack-workflow-provenance.md)
- Forking pstack is the presenter’s recommendation, not a requirement of the cited guide. [Provenance](../raw/pstack-workflow-provenance.md)

- Lauren describes reusable runtime controls plus a maintained feature map as verification infrastructure (07:05–12:34). [Creator video](../raw/2026-09-21-poteto-agent-trust-video.md)
- Her correction hierarchy prioritizes codebase structure and static checks before rules/review automation, skills, and style guidance (14:56–18:57; 36:09–37:39). [Creator video](../raw/2026-09-21-poteto-agent-trust-video.md)
- She treats code patterns as context that later agents extend, and describes maintaining conventions and preventing new violations (18:57–30:38). [Creator video](../raw/2026-09-21-poteto-agent-trust-video.md)

## Slide illustration interpretation

The September 22 source review sharpens the three roles. Skills package how to perform a particular job (for example, `how` investigates and explains a subsystem). Playbooks sequence those capabilities for a task, with conditional steps, gates, and loops. Autopilot-full explicitly sends findings back for fixes and requires a fresh verdict on the new head. A state-machine diagram is a useful teaching analogy for that control flow, not a claim that every playbook is implemented as an executable state machine. Principles supply engineering rules across steps; Type System Discipline addresses invalid states, semantic primitive types, boundary parsing, and exhaustive variants. Principles themselves are packaged as leaf skills. [Upstream source snapshot](../raw/2026-09-22-pstack-concepts-source.md)

For the proposed Hamcrab slide, use a job instruction/tool for Skills, connected states with a conditional return arrow for Playbooks, and a typed-domain blueprint for Principles. The user's TypeScript example illustrates one principle, not the full scope of principles. This is visual interpretation based on the source and the user's requested direction.

## Tensions and open questions

The original article URLs and full Part 1 capture are absent from the supplied research. The [Part 2 body](../raw/2026-09-09-pstack-guide-part-2.md) was supplied again and captured on September 22; [planning and grilling](planning-and-grilling.md) compares it with current source snapshots. Preserve attribution and its limits; do not present the earlier conversion as a fresh audit of current pstack behavior. The source deck has 21 timed slides (20 minutes including questions) and three backups. Earlier Starfall material is archived, not part of the current main deck.

The video broadens the argument beyond writing skills: reliable infrastructure includes architecture and enforceable checks. The proposed talk should teach this alongside the existing task loop. This is our synthesis. A detailed timestamp map and slide proposal are in [creator-video-analysis.md](../creator-video-analysis.md). Do not generalize the speaker’s PR counts, comment policy, or specific framework into universal recommendations. Source caption authorship is unknown.

## Sources

- [Supplied deck](../raw/pstack-source-slides.md)
- [Workflow provenance](../raw/pstack-workflow-provenance.md)
- [Creator video, captions and capture method](../raw/2026-09-21-poteto-agent-trust-video.md)
- [User direction and supplied verification diagram](../raw/2026-09-21-verification-slide-direction.md)
- [Three-foundations direction](../raw/2026-09-21-three-foundations-direction.md)

- [OpenAI plugin architecture](../raw/openai-plugin-architecture.md)
