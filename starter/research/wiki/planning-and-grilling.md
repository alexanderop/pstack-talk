# Planning through questions and experiments

## Current synthesis

The useful comparison is how uncertainty gets resolved. An interview sharpens intent and decisions. Pstack's design workflow additionally makes technical uncertainty the subject of small experiments, then builds an execution plan around evidence. These approaches can be combined. This is our teaching synthesis, based on [Lauren's article](../raw/2026-09-09-pstack-guide-part-2.md), the [grilling source](../raw/2026-09-22-grill-me-source.md), and the [installed playbooks](../raw/2026-09-22-pstack-planning-playbooks.md).

For the existing talk, sharpen slides 9 and 10 within their combined 165 seconds. Slide 9 can distinguish product decisions, codebase facts, and empirical questions. Slide 10 can follow an empirical question through a prototype and into an evidence-bearing execution step. This is a proposal; no slide changes are made by this ingest.

## Claims and evidence

- Lauren describes restating the problem, researching mechanics and history, working backwards from a tutorial or caller experience, comparing designs, and testing uncertain assumptions with prototypes. She places the tactical plan after a design she is happy with. [Article](../raw/2026-09-09-pstack-guide-part-2.md)
- The installed prototype playbook scopes a decision, builds a throwaway artifact, observes behavior on the relevant surface, and returns alternatives, evidence, tradeoffs, and a recommendation. It distinguishes this from production implementation. [Playbooks](../raw/2026-09-22-pstack-planning-playbooks.md)
- The installed multi-phase plan playbook skips obvious one-or-two-file changes, resolves open empirical questions by prototype, includes observable results and verification, validates structure with a script, and hands back the plan before execution. Script success establishes document structure, not design correctness. [Playbooks](../raw/2026-09-22-pstack-planning-playbooks.md)
- At collection time, Matt Pocock's grill-me delegates to grilling. Grilling walks a decision tree in rounds, recommends answers, investigates environmental facts itself, and waits for the user's decisions and confirmation of shared understanding. It does not prescribe pstack's prototype and runtime-proof workflow. [Source snapshot](../raw/2026-09-22-grill-me-source.md)

## Choosing design, coverage, and review tools

The guide separates `/architect` (ground the problem, write caller usage, settle types and boundaries), `/arena` (several attempts at the same brief, cross-judge, select a base and combine the best ideas), `/swarm` (partition independent slices or declared race arms, aggregate PASS/ISSUES/BLOCKED), and `/interrogate` (challenge a shared intent and diff, then triage findings). Arena is design synthesis; swarm is coverage or a race with an explicit selection rule. [Guide: design](../raw/pstack-guide.md#04-designmd)

Architect proceeds into implementation by default. “With checkpoint; stop and show me before implementing” explicitly requests a pause. Interrogate returns Act on, Consider, Noted and Dismissed findings with reasons, and does not apply changes automatically. The guide recommends more scrutiny for costly or contested decisions, rather than treating the full panel workflow as necessary for every change. [Guide: design](../raw/pstack-guide.md#04-designmd)

## Tensions and open questions

Avoid describing this as a pstack-specific harness Plan Mode. The article describes planning practices, architect, prototyping, and a multi-phase planning playbook. Avoid portraying grill-me as ignorant of the codebase or synonymous with adversarial multi-agent plan review. Its source explicitly separates facts the agent finds from decisions the user makes. The interview can precede a pstack experiment.

Illustrative continuation of the deck's theme example: ask the human whether a manual theme choice overrides the system preference; inspect the code to find who restores preferences; if startup timing is uncertain, compare small startup approaches and record whether an incorrect theme appears before restoration. After selecting an approach, define a production change and its reload/first-paint checks. No experiment has been run here, and this is not a diagnosis of the talk application. A straightforward persistence bug does not require competing prototypes.

The article's criticism of abstract planning is the author's position, not proof that interviews or all harness plan modes are ineffective. Its productivity and optimal-design claims are not independently established. The exact timing and final wording of a slide revision remain open; current proposal uses the existing two planning slides.

## Sources

- [User-supplied Part 2 article](../raw/2026-09-09-pstack-guide-part-2.md)
- [Installed pstack planning and prototype playbooks](../raw/2026-09-22-pstack-planning-playbooks.md)
- [Matt Pocock grill-me and grilling source snapshot](../raw/2026-09-22-grill-me-source.md)
- [Complete pstack guide, captured September 23](../raw/pstack-guide.md)
