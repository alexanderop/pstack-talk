---
theme: '@alexop/slidev-theme-brand'
addons:
  - '@alexop/slidev-addon-utils'
layout: default
class: p-0
hideFooter: true
background: false
title: 'Learning from Pstack: Build Your Own Reliable Coding Agent Stack'
info: A talk about planning, implementation, review and verification with pstack.
author: Alexander Opalic
colorSchema: dark
aspectRatio: 16/9
canvasWidth: 1000
transition: slide-left
highlighter: shiki
drawings:
  persist: false
defaults:
  layout: default
mdc: true
download: /pstack-talk.pdf
presenter: true
browserExporter: true
duration: 12min
timer: stopwatch
---

<h1 class="sr-only">TypeScript Meetup Munich 2026</h1>
<img src="/covers/typescript-meetup-munich-oktoberfest-2026.png" alt="TypeScript Meetup Munich 2026 in a vintage purple and pink poster style, with Munich landmarks, Oktoberfest tents, a Ferris wheel, and pretzels." class="absolute inset-0 h-full w-full object-contain" />

<!--
TIME: COVER

- Leave the event cover on screen as the audience settles.
- Advance to the talk title to start the 12-minute presentation.

SOURCE: research/munich-oktoberfest-cover-prompt.md. Generated with the built-in image_gen tool, matching the earlier TACON cover style.
-->

---
layout: default
class: title-reel-slide
background: ''
---

<script setup>
import GameReel from './components/GameReel.vue'
</script>

<div class="title-reel-grid">
<div class="title-reel-copy">
<h1>Learning<br>from pstack</h1>
<p class="title-reel-subtitle">Build Your Own Reliable<br>Coding Agent Stack</p>
<p class="title-reel-author">Alexander Opalic</p>
</div>
<GameReel />
</div>

<!--
TIME: 00:00–00:10 (10s)

- Welcome — enough energy left for some agentic-coding talk?
- Models and tools improved hugely since my talk last year.
- Today: learn from pstack; take away a verification skill for your own project.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
layout: default
class: speaker-intro
---

<div class="speaker-grid">
<div class="speaker-copy">
<h1>Hi, I’m Alex</h1>
<p class="speaker-name">Alexander Opalic</p>
<p class="speaker-bio">Developer from Germany.<br>I build software and share what I learn.</p>
<a class="speaker-link" href="https://alexop.dev">alexop.dev</a>
</div>
<img class="speaker-photo" src="/speaker/alexander-opalic-speaking.png" alt="Alexander Opalic giving a talk beside a presentation screen." />
</div>

<!--
TIME: 00:10–00:20 (10s)

- Alex — developer from Germany; I share what I learn on alexop.dev.
- Last year: AI talk at the TypeScript meetup.
- Since then: better models and tools — how much has our workflow improved?

SOURCE: https://alexop.dev (accessed 2026-09-22); research/raw/2026-09-22-speaker-introduction.md. Photo supplied by the presenter.
-->

---
layout: default
class: artwork
---

# The perfect AI coding workflow
<div class="carl-workflow">
<img class="cover-art" src="/illustrations/feature-factory.png" alt="An automated factory promises a finished feature at the press of a button." />
<svg class="carl-callouts" viewBox="0 0 1808 870" aria-label="Carl plays all three roles">
<g v-click="1">
<text x="150" y="165"><tspan x="150">Carl as a</tspan><tspan x="150" dy="46">developer</tspan></text>
<path d="M150 237 L150 330 M135 312 L150 330 L165 312" />
</g>
<g v-click="2">
<text x="345" y="165"><tspan x="345">Carl as a</tspan><tspan x="345" dy="46">designer</tspan></text>
<path d="M345 237 L345 330 M330 312 L345 330 L360 312" />
</g>
<g v-click="3">
<text x="540" y="119"><tspan x="540">Carl as a</tspan><tspan x="540" dy="46">business</tspan><tspan x="540" dy="46">analyst</tspan></text>
<path d="M540 237 L525 330 M513 310 L525 330 L543 314" />
</g>
</svg>
</div>

<!--
TIME: 00:20–00:50 (30s)

- Start with the image only. Click 1: Carl as a developer. Click 2: Carl as a designer. Click 3: Carl as a business analyst.
- [Ask for hands] “Who has had an agent say ‘done’ — and then found the feature didn’t work?”
- [Wait 3–5 seconds; look around and acknowledge the actual response. Allow 10–15 seconds total.]
- “That gap is what this talk is about.” The dream: an idea → a good, working feature.
- Our engineering job: build a workflow we can trust. What foundations do we need?

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: diagram
---

# Three foundations for trusted agent work

<div class="hamcrab-foundations">
<section v-click="1" class="foundation-scene">
<img src="/illustrations/hamcrab-verification.png" alt="Hamcrab inspects a running app with a magnifying glass and a green check." />
<h2>Verification</h2>
<p>Run the app.<br>Check the result.</p>
</section>
<section v-click="2" class="foundation-scene">
<img src="/illustrations/hamcrab-workflow.png" alt="Hamcrab follows an instruction book and moves a task through a repeatable workflow." />
<h2>Engineering skills</h2>
<p>Make your workflow<br>reusable.</p>
</section>
<section v-click="3" class="foundation-scene">
<img src="/illustrations/hamcrab-codebase.png" alt="Hamcrab fits a code module into an organized structure with tidy connections." />
<h2>Codebase design</h2>
<p>Make the right change<br>easy.</p>
</section>
</div>
<p v-after class="foundations-takeaway">Invest in the foundations. Reduce repeated manual review.</p>

<!--
TIME: 00:50–01:45 (55s)

- [click] Verification — agent runs the real app end to end; shop → cart → checkout.
- [click] Engineering skills — encode the practices we want followed.
- [click] Codebase design — “the codebase is also memory”; agents copy existing patterns.
- Biggest ongoing investment: make those patterns worth copying.
- Aim: less repeated correction and review; trust still needs evidence.

SOURCE: Lauren’s video, 07:05–18:57 and 18:57–30:38; research/raw/2026-09-21-three-foundations-direction.md. Emphasis on codebase investment is the presenter’s framing.
-->

---
class: diagram
---

# The loop I want around every change

<img class="diagram-image" src="/diagrams/workflow-loop.svg" alt="Plan, Implement, Review and Verify form a loop, with evidence sending work back for revision." />

<!--
TIME: 01:45–02:25 (40s)

- [Point around the loop] Plan → implement → review → verify.
- A working feature can still have poor code — cover all four responsibilities.
- Review the change; verify the behavior in the running app.
- Failed check → fix and repeat. This is my teaching model for the workflow.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: plugin-comic
---

# What is a plugin?

<img class="plugin-comic-image" src="/illustrations/hamcrab-plugin-comic.png" alt="Four-panel comic: Hamcrab repeats instructions, packages a skills booklet and optional tools as a plugin, installs it for a coding robot, and shares it with another Hamcrab." />
<p class="plugin-definition">An installable package of reusable workflows and optional tools.</p>

<!--
TIME: 02:25–02:45 (20s)

- [Ask for hands] “Who has already installed a skill or plugin for their coding agent?”
- [Brief show of hands; acknowledge the response.]
- [Few hands: use Hamcrab’s packaging analogy. Many hands: keep the definition brief.]
- Plugin = installable, shareable package of skills and optional tools. Skills describe the work; tools provide actions.
- Hamcrab packages repeated instructions; pstack packages an engineering workflow.

SOURCE: OpenAI, Plugin architecture, https://developers.openai.com/plugins/concepts/plugins (accessed 2026-09-22). Captured in research/raw/openai-plugin-architecture.md. Comic generated with the built-in imagegen tool using the existing Hamcrab artwork as a character reference.
-->

---
class: creator-intro
clicks: 1
---

<div class="creator-grid">
<div class="creator-copy">
<h1>Meet pstack’s creator</h1>
<p class="creator-name">Lauren Tan</p>
<a class="creator-handle" href="https://x.com/poteto">@poteto</a>
<p>Builds and maintains<br><strong>React Compiler</strong></p>
<p>Previously at<br><strong>Cursor · Meta · Netflix</strong></p>
<p class="creator-purpose">pstack packages her workflow<br>for writing higher-quality code.</p>
</div>
<img class="creator-profile" src="/creator/lauren-poteto-profile.png" alt="Lauren’s @poteto profile, with a cat banner, illustrated avatar, and bio mentioning React Compiler, Cursor, Meta, and Netflix." />
</div>

<HamcrabCameo />

<!--
TIME: 02:45–03:00 (15s)

- Lauren Tan, known as poteto, created pstack.
- She helps build React Compiler and has worked at Cursor, Meta, and Netflix.
- [Click after mentioning React Compiler] Wizard Hamcrab pops in from the right: “Hey, I just wanted to mention that Vue is better than React.” Pause for the joke; he leaves automatically after 8.5 seconds. Left then right replays the cameo.
- Pstack packages the engineering practices she uses herself. Let’s look inside.

SOURCE: https://github.com/cursor/plugins/tree/main/pstack and https://react.dev/community/team, accessed 2026-09-22. Research: research/raw/2026-09-22-pstack-creator.md. Profile screenshot supplied by the user on 2026-09-22, preserved in public/creator/lauren-poteto-profile.png. Current employer is omitted because the supplied profile and React team page differ.
-->

---
layout: none
hideFooter: true
title: Pstack on GitHub
---

<h1 class="sr-only">Pstack on GitHub</h1>
<img src="/creator/pstack-github-repository.png" alt="GitHub’s cursor/plugins repository open to pstack, showing its agents, assets, automations, docs and skills folders and README." class="absolute inset-0 h-full w-full object-contain" />

<!--
TIME: 03:00–03:15 (15s)

- This is pstack in Cursor’s public plugins repository.
- The workflow is available as files we can read: agents, skills and documentation.
- Let’s look at how those pieces fit together.

SOURCE: User-supplied GitHub screenshot, preserved unchanged in public/creator/pstack-github-repository.png. Source record: research/raw/2026-09-22-pstack-repository-screenshot.md. Repository counts and relative dates are part of the supplied capture, not live claims.
-->

---

# How pstack organizes agent work

<div class="hamcrab-foundations">
<section v-click="1" class="foundation-scene">
<img src="/illustrations/hamcrab-skills.png" alt="Hamcrab follows an instruction manual while tightening a mechanism with a wrench." />
<h2>Skills</h2>
<p>How to do<br>the work</p>
</section>
<section v-click="2" class="foundation-scene">
<img src="/illustrations/hamcrab-playbooks.png" alt="Hamcrab moves a task through a state diagram, with a check that advances it or returns it for fixes." />
<h2>Playbooks</h2>
<p>What happens next<br>and when</p>
</section>
<section v-click="3" class="foundation-scene">
<img src="/illustrations/hamcrab-principles.png" alt="Hamcrab follows a blueprint and fits a TypeScript block into its matching slot; an incompatible shape stays outside." />
<h2>Principles</h2>
<p>Rules that shape<br>good code</p>
</section>
</div>

<!--
TIME: 03:15–03:40 (25s)

- Pstack: Lauren’s workflow, published as poteto — files we can read and adapt.
- [click] Skills = how to do a particular job.
- [click] Playbooks = steps for a feature, bug fix, or other task; include loops and checks.
- [click] Principles = engineering guidance: model the domain, prove it works.
- Instructions guide the agent; they still need checks and good project tools.

SOURCE: research/raw/2026-09-22-pstack-concepts-source.md, especially Poteto Mode, Autopilot-full, and Type System Discipline. The illustrations are teaching metaphors.

SOURCE: See research/workflow-narrative.md. The four-stage loop and fork recommendation are the presenter’s framing.
-->

---
class: skill-composition-slide
clicks: 3
---

# Playbooks compose skills into a workflow

<div class="skill-composition">
<div v-click="1" class="composition-skills">
<h2>Reusable skills</h2>
<div class="composition-skill"><img src="/illustrations/skill-how-manual.png" alt="Open instruction manual with a magnifying glass." /><div><strong>how</strong><p>Understand existing code</p></div></div>
<div class="composition-skill"><img src="/illustrations/skill-architect-blueprint.png" alt="Blue blueprint showing alternative designs." /><div><strong>architect</strong><p>Explore possible designs</p></div></div>
</div>
<svg v-click="2" class="composition-connections" viewBox="0 0 860 350" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M 338 90 C 383 90 401 79 445 79 M 433 71 L 445 79 L 433 87"/><path d="M 338 180 C 388 180 394 145 445 145 M 433 137 L 445 145 L 433 153"/></g></svg>
<img v-click="2" class="composition-mascot" src="/illustrations/hamcrab-compose-skills.png" alt="Hamcrab holds a blueprint toward the Feature playbook." />
<section v-click="2" class="composition-playbook">
<h2>Feature playbook</h2>
<ol>
<li><span>Understand</span><code>how</code></li>
<li><span>Explore designs</span><code>architect</code></li>
<li v-click="3" class="composition-review"><span>Worker implements ·<br />Lead reviews</span></li>
<li v-click="3"><span>Verify</span></li>
</ol>
<p class="composition-caption">Simplified Feature workflow</p>
</section>
</div>
<p v-click="3" class="composition-takeaway">Skills explain <strong>how</strong>. The playbook decides <strong>when</strong>.</p>

<!--
TIME: 03:40–04:05 (25s)

- [click] Each skill is useful on its own: how explains the existing code; architect explores designs.
- [click] A playbook composes these reusable skills into a workflow for a task. Feature starts with how, then architect.
- [click] The worker implements; the lead reviews the diff. Verification checks the actual behavior.
- The Feature playbook assigns review to the lead. The detailed review criteria, including security, live in interrogate, which runs under specific conditions. When building your own workflow, define both who reviews and what they check.
- Optional elaboration: for your own playbook, worker implements → lead reviews using a named rubric (correctness, security, maintainability, tests) → fix findings and review again → verify actual behavior. This is our recommendation; the default upstream Feature review does not explicitly load that rubric. Multiple model reviewers can remain conditional.
- This is a simplified example. The full playbook includes a throughput checkpoint, delegation, ordered commits, conditional interrogation and Opening a PR. Architect can be skipped with an explicit reason.
- These are instructions interpreted by the agent, not deterministic function calls.

SOURCE: research/raw/2026-09-22-pstack-feature-trace.md, skills/poteto-mode/playbooks/feature.md; research/wiki/agent-workflow.md; research/raw/2026-09-22-pstack-feature-review.md; research/raw/2026-09-22-pstack-review-criteria.md. Artwork is a teaching metaphor; prompts in research/skill-composition-prompts.md.
-->

---
layout: default
class: artwork
---

# Invoke poteto-mode

<img class="entry-image" src="/illustrations/poteto-mode-entry.png" alt="Prompt composer with the poteto-mode skill selected." />

<!--
TIME: 04:05–04:20 (15s)

- Select poteto-mode explicitly, then describe the request.
- One entry point routes the work — no need to memorize every playbook.
- Requests might be a feature, prototype, investigation, or documentation.
- Our walkthrough: a theme preference that survives reload.

SOURCE: User-supplied invocation screenshot. The screenshot shows skill selection, not an executed theme request. research/raw/2026-09-22-pstack-feature-trace.md supports the illustrative routing walkthrough.
-->

---
layout: default
class: poteto-overview
---

# One example through Poteto mode

<img class="poteto-overview-image" src="/diagrams/poteto-mode-overview.png" alt="Simplified workflow: read request, choose the Feature playbook, plan and implement with delegation and review, then verify. A failed check loops back to implementation. Model the Domain and Prove It Works support the work." />
<p class="poteto-overview-caption">The overview first. Then the instructions behind it.</p>

<!--
TIME: 04:20–04:40 (20s)

- Read request → choose Feature → plan and implement → verify.
- The playbook brings in supporting skills and principles as needed.
- Failed verification → fix and check again.
- Now open the files — like stepping through a debugger.

SOURCE: research/raw/2026-09-22-pstack-feature-trace.md. Generated diagram is the presenter’s simplified overview of this feature example. The source walkthrough notes retain the additional playbook steps. Image prompt in research/poteto-overview-prompt.md.
-->

---
layout: code-editor
class: pstack-trace
title: Invoke poteto-mode
project: One example through Poteto mode
activeFile: skills/poteto-mode/SKILL.md
tabs: skills/poteto-mode/SKILL.md
step: Read request
files: |
  skills
    poteto-mode
      SKILL.md
      playbooks
        feature.md
    principle-model-the-domain
      SKILL.md
    principle-prove-it-works
      SKILL.md
---

<h1>Read the request</h1>
<p class="trace-request">$poteto-mode Add a theme preference that survives reload.</p>
<p class="trace-path">Source · skills/poteto-mode/SKILL.md · excerpts</p>

```md {1|3-4|6-8}
# Poteto mode

Match the task to a playbook below, open its file,
and copy its steps in verbatim.
…
- **Feature.** New or changed behavior,
  built from a named data shape.
  `playbooks/feature.md`.
```
<div class="trace-action"><span>Agent action · illustrative</span><p>{{ ["Read the request. Adding a saved theme preference is a feature.", "Choose the Feature playbook for this new behavior.", "Open the playbook and copy its steps into the task list."][$clicks] }}</p></div>

::sidebar-bottom::

<PstackWorkflowMap :stage="1" :click="$clicks" />

<!--
TIME: 04:40–04:55 (15s)

- Start here: poteto-mode selected + “Add a theme preference that survives reload.”
- [click] Read the routing instruction: match task, open playbook, copy steps.
- [click] New behavior → Feature; other tasks use other playbooks.
- Markdown becomes the agent’s checklist. This is an illustrative walkthrough.

SOURCE: research/raw/2026-09-22-pstack-feature-trace.md. cursor/plugins commit 53e579f1481697931fc44f5445171397cfa2b24b. Excerpts retain source wording; long lines are wrapped and omissions are marked. This is a teaching trace of instructions, not a recorded agent run.
-->

---
layout: code-editor
class: pstack-trace
title: Choose the Feature playbook
project: One example through Poteto mode
activeFile: skills/poteto-mode/playbooks/feature.md
tabs: skills/poteto-mode/playbooks/feature.md
step: Choose Feature playbook
files: |
  skills
    poteto-mode
      SKILL.md
      playbooks
        feature.md
    principle-model-the-domain
      SKILL.md
    principle-prove-it-works
      SKILL.md
---

<h1>Choose the Feature playbook</h1>
<p class="trace-path">Source · skills/poteto-mode/playbooks/feature.md · excerpts</p>

```md {1-3|5-6|7-8}
### Feature
1. `how` over the affected subsystem.
2. `architect` for parallel design exploration.
…
4. Delegate code-writing to a subagent
…
named data shape and its organizing structure per
**principle-model-the-domain**
```
<div class="trace-action"><span>Agent action · illustrative</span><p>{{ ["Inspect settings and explore the design. Step 3 plans the work.", "Prepare the worker’s scope, data shape, and success criteria.", "Use Model the Domain to guide the preference’s shape."][$clicks] }}</p></div>

::sidebar-bottom::

<PstackWorkflowMap :stage="2" :click="$clicks" />

<!--
TIME: 04:55–05:15 (20s)

- Start with how — understand the existing settings implementation.
- Architect — explore competing designs before committing to one.
- [click] Prepare the worker assignment: scope, data shape, success criteria.
- [click] Model the Domain — define the shape before delegating code.
- Let the agent investigate alternatives; I can still join the design discussion.

SOURCE: research/raw/2026-09-22-pstack-feature-trace.md. cursor/plugins commit 53e579f1481697931fc44f5445171397cfa2b24b. Excerpts retain source wording; long lines are wrapped and omissions are marked. This is a teaching trace of instructions, not a recorded agent run.
-->

---
layout: code-editor
class: pstack-trace
title: Read Model the Domain
project: One example through Poteto mode
activeFile: skills/principle-model-the-domain/SKILL.md
tabs: skills/principle-model-the-domain/SKILL.md
step: Plan and implement · supporting principle
files: |
  skills
    poteto-mode
      SKILL.md
      playbooks
        feature.md
    principle-model-the-domain
      SKILL.md
    principle-prove-it-works
      SKILL.md
---

<h1>Plan the preference</h1>
<p class="trace-path">Source · skills/principle-model-the-domain/SKILL.md · excerpts</p>

```md {1-3|5-6|8-9}
# Model the Domain
Encode the real domain in a data structure instead
of scattering it across conditionals.
…
- A typed object/model instead of loose parameters
  or repeated shape assumptions.
…
Do not force an abstraction. Prefer boring code if the
current shape is already clear, local, and unlikely to grow.
```
<div class="trace-action"><span>Agent action · illustrative</span><p>{{ ["Choose one preference with three possible values.", "Use this named type in the worker’s assignment.", "Reuse the existing settings model if it fits."][$clicks] }}</p><code class="trace-type">type ThemePreference = 'light' | 'dark' | 'system'</code></div>

::sidebar-bottom::

<PstackWorkflowMap :stage="3" :click="$clicks" />

<!--
TIME: 05:15–05:45 (30s)

- My own habit: think about the domain and types before writing the logic.
- One theme preference: light | dark | system.
- [click] Put that named type in the worker assignment; avoid loose assumptions.
- [click] Keep it simple — reuse the existing settings model if it fits.

SOURCE: research/raw/2026-09-22-pstack-feature-trace.md. cursor/plugins commit 53e579f1481697931fc44f5445171397cfa2b24b. Excerpts retain source wording; long lines are wrapped and omissions are marked. This is a teaching trace of instructions, not a recorded agent run.
-->

---
layout: code-editor
class: pstack-trace
title: Implement and review
project: One example through Poteto mode
activeFile: skills/poteto-mode/playbooks/feature.md
tabs: skills/poteto-mode/playbooks/feature.md
step: Plan and implement
files: |
  skills
    poteto-mode
      SKILL.md
      playbooks
        feature.md
    principle-model-the-domain
      SKILL.md
    principle-prove-it-works
      SKILL.md
---

<h1>Implement and review</h1>
<p class="trace-path">Source · skills/poteto-mode/playbooks/feature.md · excerpts</p>

```md {1-2|4|6-7}
4. Delegate code-writing to a subagent
…

Review its diff yourself.

5. Verify on the matching surface.
"Inconclusive" or wrong-surface is not a pass. Flag it.
```
<div class="trace-action"><span>Agent action · illustrative</span><p>{{ ["Worker → implement saving and restoring ThemePreference.", "Lead → inspect the diff against the design and requirement.", "Lead → open the app and check persistence across reload."][$clicks] }}</p><div class="trace-flow"><b :class="{ current: $clicks === 0 }">Worker implements</b><span>→</span><b :class="{ current: $clicks === 1 }">Lead reviews</b><span>→</span><b :class="{ current: $clicks === 2 }">Lead verifies</b></div></div>

::sidebar-bottom::

<PstackWorkflowMap :stage="4" :click="$clicks" />

<!--
TIME: 05:45–06:10 (25s)

- Worker implements saving and restoring the preference.
- [click] Lead reviews the diff — requirement, design, mistakes.
- [click] Lead opens the app and checks persistence across reload.
- The playbook coordinates the work; principles guide the decisions.

SOURCE: research/raw/2026-09-22-pstack-feature-trace.md. cursor/plugins commit 53e579f1481697931fc44f5445171397cfa2b24b. Excerpts retain source wording; long lines are wrapped and omissions are marked. This is a teaching trace of instructions, not a recorded agent run.
-->

---
layout: code-editor
class: pstack-trace
title: Read Prove It Works
project: One example through Poteto mode
activeFile: skills/principle-prove-it-works/SKILL.md
tabs: skills/principle-prove-it-works/SKILL.md
step: Verify · supporting principle
files: |
  skills
    poteto-mode
      SKILL.md
      playbooks
        feature.md
    principle-model-the-domain
      SKILL.md
    principle-prove-it-works
      SKILL.md
---

<h1>Verify the theme survives reload</h1>
<p class="trace-path">Source · skills/principle-prove-it-works/SKILL.md · excerpts</p>

```md {1-3|5-7|9}
# Prove It Works
Verify every task output by checking the real thing directly.
Do not infer from proxies, self-reports, or "it compiles."
…
1. Build it (necessary but not sufficient)
2. Run it and exercise the actual feature path
3. Check the full chain: does data flow from input to output?
…
Delegation: trust artifacts, not self-reports.
```
<div class="trace-action"><span>Agent action · illustrative</span><p>{{ ["Define the expected result: dark mode remains after reload.", "Switch theme → reload → confirm it stays selected.", "If it resets, fix the change and repeat the check."][$clicks] }}</p></div>

::sidebar-bottom::

<PstackWorkflowMap :stage="5" :click="$clicks" />

<!--
TIME: 06:10–06:40 (30s)

- Define success: dark mode still selected after reload.
- [click] Change theme → reload → inspect saved value, control, and appearance.
- Keep evidence such as screenshots or an action log; inspect the actual result.
- [click] If it resets: fix and repeat. A worker saying “done” is insufficient.

SOURCE: research/raw/2026-09-22-pstack-feature-trace.md. cursor/plugins commit 53e579f1481697931fc44f5445171397cfa2b24b. Excerpts retain source wording; long lines are wrapped and omissions are marked. This is a teaching trace of instructions, not a recorded agent run.
-->

---
layout: default
class: artwork
---

# A verification skill for your codebase

<img class="verification-reference" src="/illustrations/poteto-verification-reference.png" alt="Lauren’s diagram: a feature map gives context, a CLI gives control, and together they let the agent verify its own work." />
<p class="source">Lauren (@poteto) · Cursor Compile recording · 07:05–12:34</p>

<!--
TIME: 06:40–07:35 (55s)

- [Ask for hands] “Who has an agent that can start your app and check a complete user journey by itself?”
- [Wait 3–5 seconds; acknowledge the response. Allow 10–15 seconds total.] “That’s the capability I want you to take away today.”
- Feature map gives context; tools give control. Build this even if you never adopt pstack.
- Known state → exercise feature → compare result → keep evidence.
- Now my own example: Outpost Zero.

SOURCE: research/creator-video-analysis.md; Lauren’s video https://x.com/poteto/status/2102050467505430555 (07:05–18:57). Examples are illustrative, not recorded results.
-->

---
class: outpost-example
---

# Generate a skill for Outpost Zero

<p class="outpost-command"><code>$pstack:create-verification-skill</code></p>

<div class="outpost-intro">
<img src="/verification/outpost-zero/before.png" alt="Outpost Zero before verification: empty defense pads, 210 salvage, and wave zero." />
<div>
<p class="outpost-path">.agents/skills/verify-outpost-zero/</p>
<pre class="outpost-tree">SKILL.md
features/
  README.md
  defenses.md
  squads.md
  combat.md
  missions.md
  controls.md</pre>
</div>
</div>
<p class="outpost-lifecycle">Launch → Doctor → Drive → Evidence → Cleanup</p>

<!--
TIME: 07:35–08:10 (35s)

- Lately I spend spare tokens making games — I love tower defense.
- Built with Vue — “the best JavaScript framework in the world.” [Smile]
- Run create-verification-skill → local skill plus five feature recipes.
- Like onboarding QA: defenses, squads, combat, missions, controls.
- Reuse existing pnpm commands + Computer Use; try a real recipe during generation.

SOURCE: research/raw/2026-09-22-outpost-zero-verification.md; generation session 01a0c8a0-4b74-7460-a338-7ff884a568cb. Screenshot: generation proof before.png.
-->

---
class: outpost-example outpost-feature-file
---

# One feature file: defenses.md

<p class="outpost-file">features/defenses.md <span>· shortened from the local file</span></p>

```md
# Build, upgrade, and recycle defenses
Spend salvage on towers and upgrades; confirm a sale to recover part.

## How to get to it
Select defense pad A1 to open its build, upgrade, and sale menu.

## Driving it with Computer Use
Start a fresh game at wave 0, before launching combat.
- Build Coil Sentry → visible tower; salvage drops by 85.
- Upgrade to Railgun Battery → new art and stats; costs 80.
- Cancel the sale → tower and balance stay unchanged.
- Confirm the sale → empty pad; refund 99 salvage, once.

## Gotchas
Check before combat: kills change salvage. Inspect the tower visually.
```

<!--
TIME: 08:10–09:00 (50s)

- Feature map gives the agent context — what to do and what success looks like.
- Show the Markdown file: purpose, how to reach the feature, steps, expected results, gotchas.
- Shortened from the local Outpost Zero defenses.md; the original also covers other towers and selection methods.
- Check visible tower AND resource balance; do this before combat changes the numbers.
- Same idea for a shop: explain the cart and checkout journey.
- A mapped feature is a recipe; it still needs to be exercised.

SOURCE: research/raw/2026-09-22-outpost-zero-verification.md; generated features/README.md and features/defenses.md.
-->

---
class: outpost-example outpost-proof
clicks: 3
---

# The agent plays and keeps the evidence

<div class="outpost-proof-caption" aria-live="polite">
<span v-if="$clicks === 0">Build Coil Sentry <strong>210 → 125 salvage</strong></span>
<span v-else-if="$clicks === 1">Upgrade to Railgun Battery <strong>125 → 45 salvage</strong></span>
<span v-else-if="$clicks === 2">Sale confirmation <strong>99 salvage refund offered</strong></span>
<span v-else>Confirm sale <strong>45 → 144 salvage · empty pad</strong></span>
</div>
<img v-if="$clicks === 0" class="outpost-evidence" src="/verification/outpost-zero/built.png" alt="Built Coil Sentry on A1 with 125 salvage remaining." />
<img v-else-if="$clicks === 1" class="outpost-evidence" src="/verification/outpost-zero/upgraded.png" alt="Upgraded Railgun Battery on A1 with 45 salvage remaining." />
<img v-else-if="$clicks === 2" class="outpost-evidence" src="/verification/outpost-zero/sale-confirmation.png" alt="Railgun Battery sale confirmation offering a 99 salvage refund." />
<img v-else class="outpost-evidence" src="/verification/outpost-zero/sold.png" alt="A1 is empty after confirming the sale, with 144 salvage." />
<p class="outpost-proof-footer">Screenshots + accessibility snapshots + action log · retained after cleanup</p>

<!--
TIME: 09:00–09:50 (50s)

- Real generation-run evidence: build tower, salvage 210 → 125.
- [click] Upgrade: changed tower sprite, 125 → 45.
- [click] Sale dialog: 99 refund offered; cancellation kept tower + 45, recorded in the log.
- [Before the final click, ask] “Suppose the tower disappears after selling it. Is that enough to prove selling works?” [Wait 3–5 seconds for an answer.]
- “Check the refund too.” [click] Empty pad AND 144 salvage; revisit to check no double refund.
- Screenshots + action log support this path; they do not prove the whole game.

SOURCE: research/raw/2026-09-22-outpost-zero-verification.md; generation actions.md and built.png, upgraded.png, sale-confirmation.png, sold.png. Cancellation has a text snapshot, not a separate screenshot.
-->

---
class: outpost-example
---

# Reuse it with a simple request

<blockquote class="outpost-prompt">“Verify and do a smoke test if this game works.”</blockquote>

<p class="outpost-reuse">Read the local skill → Follow the recipes → Report the evidence</p>
<div class="outpost-result"><strong>11 tests passed</strong><span>5 unit · 3 browser · 3 end-to-end</span></div>
<p class="outpost-observed">Browser checks: render, build, upgrade, sale confirmation.</p>
<p class="outpost-limit">Manual checks stopped during concurrent Chrome use.<br>Full combat progression and audio remained unverified.</p>

<!--
TIME: 09:50–10:30 (40s)

- Next session: just “Verify and do a smoke test if this game works.”
- Agent reads the saved skill + recipes; no repeated UI walkthrough from me.
- 11 existing tests passed; browser checks reached sale confirmation.
- Concurrent Chrome use interrupted the run; combat and audio remained unchecked.
- Context is reusable — and the report tells me what was actually checked.

SOURCE: research/raw/2026-09-22-outpost-zero-verification.md; smoke session 01a0c8b1-99da-7231-bcc5-6ab19785ea34. Prompt spelling normalized. These are existing tests, not tests generated by the skill. Manual cancellation and completed sale belong to the earlier generation run; the later smoke run did not manually complete those actions.
-->

---
class: outpost-example
---

# Pstack maintains the feature map too

<p class="outpost-command"><code>/maintain-verification-skill</code></p>
<div class="outpost-maintenance">
<p><strong>01</strong><span>Read the source for each feature</span></p>
<p><strong>02</strong><span>Exercise every mapped feature in the app</span></p>
<p><strong>03</strong><span>Prove corrections to the skill and map</span></p>
</div>
<p class="outpost-gotcha">Stale instructions → update them. Product bug → report it.</p>
<p class="source">Automated when invoked · maintenance workflow, not a recorded run</p>

<!--
TIME: 10:30–11:00 (30s)

- As the app changes, the feature map gets stale.
- Invoke maintain-verification-skill: inspect source → exercise app → prove map corrections.
- Update stale instructions; report actual product bugs.
- Optional idea from my rehearsal: schedule maintenance; it is not automatic today.
- Takeaway: maintain the verification context alongside the product.

SOURCE: research/raw/2026-09-22-outpost-zero-verification.md; installed pstack 0.15.2 maintain-verification-skill. No maintenance run was found in the two game sessions. Outcomes: clean, changed, or blocked; edits restricted to the verification skill directory.
-->

---
class: useful-skills
---

# More pstack skills worth trying

<div class="useful-skill-grid">
<a class="useful-skill-card" href="https://github.com/cursor/plugins/blob/main/pstack/skills/unslop/SKILL.md">
<div class="useful-skill-art" role="img" aria-label="Hamcrab trims a long, wordy page with scissors." style="background-position: 0% 0%"></div>
<div><code>/unslop</code><p>Trim the fluff</p></div>
</a>
<a class="useful-skill-card" href="https://github.com/cursor/plugins/blob/main/pstack/skills/technical-writing/SKILL.md">
<div class="useful-skill-art" role="img" aria-label="Hamcrab organizes notes into a structured instruction manual." style="background-position: 100% 0%"></div>
<div><code>/technical-writing</code><p>Make it clear</p></div>
</a>
<a class="useful-skill-card" href="https://github.com/cursor/plugins/blob/main/pstack/skills/how/SKILL.md">
<div class="useful-skill-art" role="img" aria-label="Hamcrab examines connected gears through a magnifying glass." style="background-position: 0% 100%"></div>
<div><code>/how</code><p>Understand the system</p></div>
</a>
<a class="useful-skill-card" href="https://github.com/cursor/plugins/blob/main/pstack/skills/blast-radius/SKILL.md">
<div class="useful-skill-art useful-skill-art-blast" role="img" aria-label="Hamcrab checks a diagram showing how one changed module affects two connected modules."></div>
<div><code>/blast-radius</code><p>Trace the impact</p></div>
</a>
</div>

<!--
TIME: 11:00–11:40 (40s)

- Pstack also has useful skills you can invoke individually.
- Unslop edits writing: removes stock AI phrases while preserving meaning and tone.
- Technical-writing chooses the right document structure and makes instructions precise. Useful for READMEs, technical docs, RFCs, and PR descriptions.
- How explains an unfamiliar subsystem before you change it.
- Blast-radius looks beyond the diff and asks the agent to run code to test the safety assumptions. Unproven claims must stay marked unproven.
- You can try one skill without adopting the entire workflow. These are upstream Cursor command names.

SOURCE: research/raw/2026-09-22-pstack-useful-skills.md; research/wiki/audience-resources.md. Upstream SKILL.md files fetched at a pinned commit on 2026-09-22. Selection is the presenter’s recommendation, not a comparative benchmark.
-->

---
class: resource-summary
---

# Build your own reliable agent stack

<div class="summary-grid">
<div class="summary-copy">
<h2>Check out pstack</h2>
<p>Read the workflow. Try it.<br>Make it yours.</p>
<a class="summary-repo" href="https://github.com/cursor/plugins/tree/main/pstack">github.com/cursor/plugins → pstack</a>
<p class="summary-takeaway">Give your agent a way<br>to prove its work.</p>
</div>
<a class="summary-qr" href="https://gist.github.com/alexanderop/743bbd811f2a56063fb79d3b3847ec27">
<img src="/resources/pstack-resources-qr.png" alt="Scan for pstack installation instructions, the slides, PDF, and all talk resources." />
<strong>Everything to get started</strong>
<span>Install · Slides · PDF · Resources</span>
</a>
</div>

<!--
TIME: 11:40–12:40 (60s)

- Invest in verification, reusable engineering skills, and codebase design.
- Check out pstack: read the workflow, try a small task, adapt it to your project.
- My first step for you: give your agent a feature map and tools to prove its work.
- Scan the QR: installation instructions, this deck, the PDF, and the source resources.
- [Pause so people can scan.] The same code stays on screen during questions.

SOURCE: research/raw/2026-09-22-pstack-installation.md; research/wiki/audience-resources.md. Summary is the presenter’s synthesis. Resource gist: https://gist.github.com/alexanderop/743bbd811f2a56063fb79d3b3847ec27
-->

---
layout: default
title: Thank you!
---

<DancingHamcrab />
<a class="finale-resources" href="https://gist.github.com/alexanderop/743bbd811f2a56063fb79d3b3847ec27">
<img src="/resources/pstack-resources-qr.png" alt="Scan for installation, slides, PDF, and resources." />
<span>Slides, PDF &amp; resources</span>
</a>

<!--
TIME: END

- Thank you! Leave the mascot dancing during questions.
- Silent, repeating 16-pose adaptation of the first two eight-count phrases.

SOURCE: research/wiki/dance-finale.md; research/hamcrab-judas-prompt.md. Generated mascot sprites based on the user-supplied reference. Choreography adapted from Gustavo Krystal Dance's original music-video tutorial, not an exact reconstruction.
-->
