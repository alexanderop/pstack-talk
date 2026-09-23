# Audience resources

## Current synthesis

The closing summary asks the audience to explore pstack and give their agent a way to prove its work. One secret gist links installation instructions, the deployed Slidev deck, its PDF, and the public research sources. The QR remains on the dancing finale during questions.

## Standalone skills before the summary

A 40-second slide recommends four skills from the [pinned upstream snapshot](../raw/2026-09-22-pstack-useful-skills.md): `unslop` edits AI writing patterns while preserving meaning and tone; `technical-writing` structures docs using Diátaxis and clear instruction rules; `how` explains subsystem architecture and runtime flow; `blast-radius` investigates effects beyond the diff and requires executable evidence for safety assumptions where feasible. These are intended workflows, not guarantees of correct output.

Also considered `why`, `interrogate`, and `architect`. The first four cover writing, documentation, understanding and change risk with little additional explanation; the others remain linked in the gist. This selection is editorial judgment. The technical-writing skill covers docs, RFCs, READMEs, PR descriptions and commit messages, not documentation generation alone.

## Claims and evidence

- Upstream Cursor installation uses `/add-plugin pstack`, followed by `/setup-pstack` and `/poteto-mode`. [Captured README](../raw/2026-09-22-pstack-installation.md)
- The audience handoff is maintained in [the resource document](../../resources/pstack-talk.md). The installed Codex invocation shown in the talk differs from upstream Cursor syntax.

## A guide for audience follow-up

The complete ten-chapter guide adds a reading path from setup and routing through understanding, design, implementation, verification, autonomous work, principles, customization and copyable recipes. Its smallest useful habit is to state a goal and a way to verify it, such as “add a --json flag; text output stays byte-identical; verify both.” It also documents `/bro` as a plain-language restatement of the previous reply. [Guide index](../raw/pstack-guide.md#readmemd), [recipes](../raw/pstack-guide.md#10-recipes-and-pitfallsmd)

The setup chapter is specifically for Cursor: `/add-plugin pstack`, `/setup-pstack`, then a new chat. It describes `~/.cursor/rules/pstack-models.mdc`, role-specific overrides, `auto`/`inherit-parent` as omission of the delegate model field, panel size derived from list length, and a `swarm workers` role. It warns that files written before 0.15.3 may pin old defaults. It offers verification-skill generation when neither a skill nor a harness is found. Do not substitute these paths for the installed Codex plugin's configuration. [Guide: setup](../raw/pstack-guide.md#01-setupmd)

The September 23 closing slide now gives a concrete starting assignment: pick one feature, write its expected result, give the agent tools to exercise it, and keep the evidence. This is a teaching adaptation of the guide’s finish conditions and the existing Outpost Zero proof. The guide remains optional depth; the deployed gist and resource document were not changed. [Guide chapter 06](../raw/pstack-guide.md)

The short model-configuration slide after “Invoke poteto-mode” introduces `/setup-pstack` and three role groups: code delegates, judgment and review panels. It names no model winners and labels the displayed command as Cursor syntax. This adds 15 seconds; the talk now has 26 timed slides, 12:55 total, plus the untimed cover and finale. [Setup source](../raw/pstack-guide.md)

## Tensions and open questions

The original supplied guide articles lack canonical URLs. The resource list explains this and links the upstream getting-started guide instead. The gist is unlisted but accessible to everyone with the link.

## Sources

- [Upstream README capture](../raw/2026-09-22-pstack-installation.md)
- [Audience resource document](../../resources/pstack-talk.md)

- [Standalone skills snapshot](../raw/2026-09-22-pstack-useful-skills.md)
- [Complete pstack guide, captured September 23](../raw/pstack-guide.md)
