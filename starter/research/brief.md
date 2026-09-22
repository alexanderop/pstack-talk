# Talk brief

## Working title

Learning from Pstack: Build Your Own Reliable Coding Agent Stack

## Audience

Developers using AI coding agents who want a workflow they can inspect and adapt.

## Intended outcome

Be able to build a small coding-agent workflow independently: define responsibilities, connect project tools, verify outcomes, and turn repeated corrections into reusable instructions or automated constraints. Use pstack as a concrete example to inspect and learn from; adopting or forking it is optional.

## Current thesis

The talk presents three foundations for faster delivery with less repeated manual review: verification, reusable engineering skills such as pstack, and codebase design. Emphasize the codebase as a difficult, sustained investment in patterns and enforceable constraints. The practical starting capability is a verification skill for your own codebase: give the agent a feature map, repeatable tools to run and control the application, and checks that compare observed behavior with the intended result. Pstack demonstrates how to package this capability and the engineering workflow around it. The audience should leave able to build a small version themselves. Context, process, and enforceable constraints support that capability.

## Supporting ideas

- A central slide should combine feature map + application controls → self-verification, following the user-supplied creator diagram.
- Skills, playbooks and principles have different responsibilities.
- Planning benefits from investigation, competing sketches and observation.
- Review inspects the diff; verification observes relevant behavior.
- Verification tools and feature maps require maintenance.
- Repeated corrections should improve the environment through code structure, checks, tools, or instructions.
- The codebase supplies patterns that later agents may copy; maintaining those patterns is part of maintaining the workflow.

## Open questions

- Original guide article URLs are not present in the supplied materials.
- Outpost Zero supplies the recorded example immediately after Lauren’s diagram; see [the storyboard](outpost-zero-verification-slides.md). Maintenance is supported by installed skill instructions, not a recorded run. The earlier theme-persistence walkthrough remains illustrative.

## Scope boundaries

The deck has 23 timed slides, including a speaker introduction after the title and ending with the pstack summary and resource QR code. Current notes total 12 minutes; no question or backup slides remain. The real “Invoke poteto-mode” screenshot replaces the earlier illustrative chat at slide 8. Five source-editor stops follow the pstack introduction, prompt, and workflow overview. Five Outpost Zero verification slides follow Lauren’s diagram directly, replacing three later generic verification slides. The four-stage model is the presenter’s framing. The September 21 revision makes independent construction the desired outcome, introduces the creator’s verification diagram, and carries an illustrative theme-persistence example through planning and verification. Forking is an optional implementation choice. See [creator-video-analysis.md](creator-video-analysis.md) for the supporting analysis. Earlier game and shop examples remain in the research archive.

A 40-second slide before the summary introduces standalone unslop, technical-writing, how, and blast-radius skills. This is a short audience recommendation grounded in current upstream instructions.

The untimed TypeScript Meetup Munich Oktoberfest event cover precedes the talk title. The 23 timed slides still total 12 minutes; with the cover and dancing finale there are 25 slides.

A 15-second creator introduction precedes the pstack structure overview, using the supplied profile screenshot on the right. The plugin introduction now takes 20 seconds, preserving the 12-minute total. See [creator](wiki/creator.md).

The skill-composition slide follows “How pstack organizes agent work” and precedes “Invoke poteto-mode”. It adds 25 seconds: the current deck now has 24 timed slides, 12:25 total, plus the untimed cover and finale (26 slides). Earlier counts above describe prior revisions.

The user-supplied repository screenshot now follows the creator introduction. Current deck: 25 timed slides, 12:40 total, plus untimed cover and finale (27 slides).
