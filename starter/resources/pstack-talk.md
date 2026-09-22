# Learning from pstack

Build Your Own Reliable Coding Agent Stack — Alexander Opalic

## Slides and PDF

- [Open the slides](https://pstack-talk.vercel.app)
- [Download the PDF](https://pstack-talk.vercel.app/pstack-talk.pdf)
- [About Alex](https://alexop.dev)

## Try pstack in Cursor

[Upstream pstack repository and installation instructions](https://github.com/cursor/plugins/tree/main/pstack)

In Cursor, run these commands one at a time:

```text
/add-plugin pstack
/setup-pstack
/poteto-mode Add a theme preference that survives reload.
```

During setup, choose your reasoning budget and models. Begin with a small task in your own project, and define what a successful result looks like.

These are the upstream Cursor commands. The talk also shows a Codex installation with `$` and namespaced skill syntax; use the invocation syntax supported by your agent.

## Takeaways

- Invest in verification, reusable engineering skills, and codebase design.
- Give the agent a feature map, tools to control the app, and explicit expected results.
- Review the change, then verify the behavior in the running app. Keep the evidence and maintain the feature map as the app changes.
- Read pstack, try it, and adapt the parts that fit your project.

## pstack resources

- [Getting started guide](https://github.com/cursor/plugins/blob/main/pstack/docs/guide/README.md)
- [Poteto mode](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/SKILL.md)
- [Feature playbook](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/playbooks/feature.md)
- [Model the Domain](https://github.com/cursor/plugins/blob/main/pstack/skills/principle-model-the-domain/SKILL.md)
- [Prove It Works](https://github.com/cursor/plugins/blob/main/pstack/skills/principle-prove-it-works/SKILL.md)
- [Type System Discipline](https://github.com/cursor/plugins/blob/main/pstack/skills/principle-type-system-discipline/SKILL.md)
- [Create a verification skill](https://github.com/cursor/plugins/blob/main/pstack/skills/create-verification-skill/SKILL.md)
- [Maintain a verification skill](https://github.com/cursor/plugins/blob/main/pstack/skills/maintain-verification-skill/SKILL.md)
- [Source snapshot used in the walkthrough](https://github.com/cursor/plugins/tree/53e579f1481697931fc44f5445171397cfa2b24b/pstack)

## More skills worth trying

Use these individually in Cursor:

- [`/unslop`](https://github.com/cursor/plugins/blob/main/pstack/skills/unslop/SKILL.md): remove stock AI phrasing while preserving meaning and tone.
- [`/technical-writing`](https://github.com/cursor/plugins/blob/main/pstack/skills/technical-writing/SKILL.md): structure technical docs for the reader and write clear instructions. Also applies to READMEs, RFCs and PR descriptions.
- [`/how`](https://github.com/cursor/plugins/blob/main/pstack/skills/how/SKILL.md): understand subsystem architecture and runtime flow before making changes.
- [`/blast-radius`](https://github.com/cursor/plugins/blob/main/pstack/skills/blast-radius/SKILL.md): investigate what a change could break beyond the diff, and run code to test the assumptions behind its safety. Unproven assumptions must remain explicit.

Also worth exploring: [`/why`](https://github.com/cursor/plugins/blob/main/pstack/skills/why/SKILL.md) for design rationale, [`/interrogate`](https://github.com/cursor/plugins/blob/main/pstack/skills/interrogate/SKILL.md) for review by multiple models, and [`/architect`](https://github.com/cursor/plugins/blob/main/pstack/skills/architect/SKILL.md) for design sketches before implementation.

These descriptions summarize the skill instructions; they do not guarantee correct results. Source checked September 22, 2026.

## Talks and further reading

- [Lauren (@poteto): agent trust, verification, and codebase design](https://x.com/poteto/status/2102050467505430555) — verification from 07:05; codebase design from 18:57.
- [Matt Pocock: Software Fundamentals Matter More Than Ever](https://www.youtube.com/watch?v=v4F1gFy-hqg&t=142s)
- [Matt Pocock’s productivity skills, including grill-me](https://github.com/mattpocock/skills/tree/main/skills/productivity)
- [OpenAI plugin architecture](https://developers.openai.com/plugins/concepts/plugins)
- [Slidev](https://sli.dev) — the presentation framework.
- [Gustavo Krystal Dance: Judas tutorial](https://www.youtube.com/watch?v=UBFz5fnH4Gs) — reference for the mascot’s closing dance.

The original Part 1 and Part 2 articles were supplied without canonical URLs. The upstream guide above is the available getting-started resource; no article URL has been guessed.

The theme-preference walkthrough is illustrative. Outpost Zero screenshots show a specific recorded build/upgrade/sale path, not proof that the entire game was verified.

Installation instructions checked against upstream on September 22, 2026. Upstream commands and skills may change.
