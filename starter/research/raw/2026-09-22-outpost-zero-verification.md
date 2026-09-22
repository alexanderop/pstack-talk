---
kind: file
title: Outpost Zero verification generation and smoke-test evidence
url: unknown
author: Alexander Opalic and Codex
publisher: Local Codex sessions and project artifacts
published: 2026-09-22
collected: 2026-09-22
status: complete
---

# Provenance

Selected verbatim messages and files captured from local September 22 sessions. This is an evidence extract, not a complete session transcript. No game verification was rerun for this capture. Installed pstack version: 0.15.2+codex.20260921114941.

## Session 01a0c8a0-4b74-7460-a338-7ff884a568cb

Source: `/Users/alexanderopalic/.codex/sessions/2026/09/22/rollout-2026-09-22T12-19-03-01a0c8a0-4b74-7460-a338-7ff884a568cb.jsonl`. Filename timestamps are local session labels.

### user

```text
$pstack:create-verification-skill
```

### assistant

```text
Created [verify-outpost-zero](.agents/skills/verify-outpost-zero/SKILL.md) with five feature recipes.

Proved building, upgrading, sale cancellation, and refund behavior in Chrome. [Evidence retained](artifacts/verification/20260922-122240-80943/actions.md); tab and server cleaned up.

Lint, type checking, build, and skill validation passed. Existing changes were preserved.

Use `/maintain-verification-skill` to keep the map current.
```

## Session 01a0c8b1-99da-7231-bcc5-6ab19785ea34

Source: `/Users/alexanderopalic/.codex/sessions/2026/09/22/rollout-2026-09-22T12-37-57-01a0c8b1-99da-7231-bcc5-6ab19785ea34.jsonl`. Filename timestamps are local session labels.

### user

```text
verfiy and do a smoke test if this game works
```

### Tool call showing reuse

```javascript
const results = await Promise.allSettled([
tools.exec_command({cmd:"cat .agents/skills/verify-outpost-zero/SKILL.md","max_output_tokens":6000}),
tools.exec_command({cmd:"rg -n 'outpost-zero' /Users/alexanderopalic/.codex/memories/MEMORY.md","max_output_tokens":1500}),
tools.exec_command({cmd:"git status --short && cat package.json && rg --files -g AGENTS.md","max_output_tokens":4000})
]);results.forEach(text);

```

### Tool call showing reuse

```javascript
text(await tools.exec_command({cmd:"cat .agents/skills/verify-outpost-zero/features/{README,defenses,missions,squads,combat,controls}.md","max_output_tokens":8000}));
text(await tools.exec_command({cmd:"mkdir -p artifacts/verification/smoke-20260922 && git rev-parse HEAD > artifacts/verification/smoke-20260922/revision.txt && git status --short > artifacts/verification/smoke-20260922/worktree.txt; lsof -nP -iTCP:5297 -sTCP:LISTEN","max_output_tokens":1000}));
text(await tools.exec_command({cmd:"pnpm lint && pnpm check && pnpm build && pnpm test:unit","yield_time_ms":1000,"max_output_tokens":1500}));

```

### assistant

```text
The game passes the smoke test.

- Lint, TypeScript, and production build passed.
- All **11 tests passed**, covering construction, sales, mission switching, wave launch, and keyboard focus.
- Manually verified battlefield rendering, tower upgrades, salvage costs, and sale confirmation.

Full combat progression and audio remain unverified; manual checks were interrupted by active Chrome use. Build reports a large JavaScript bundle warning.

No source changes made. [Verification report and screenshots](/Users/alexanderopalic/Projects/games/outpost-zero/artifacts/verification/smoke-20260922/actions.md).
```

## File: SKILL.md

Source: `/Users/alexanderopalic/Projects/games/outpost-zero/.agents/skills/verify-outpost-zero/SKILL.md`

````markdown
---
name: verify-outpost-zero
description: Launch and verify Outpost Zero's Vue/Phaser browser game through real player interactions, with retained screenshots and a feature map. Use for gameplay, controls, tower economy, mission, and visual verification.
---

# Verify Outpost Zero

Read [the feature index](features/README.md), then the relevant feature recipes. The primary surface is the browser at `/`; there is no API, account, seed service, or persistent save. Reload starts over. Run from the repository root. Preserve unrelated work.

## Launch

Prerequisites: Node >=22.12 and pnpm 10.28.2; use `pnpm install --frozen-lockfile` if dependencies are absent. Verify the current checkout with `pnpm lint`, `pnpm check`, and `pnpm build`. Existing regression scripts are `pnpm test:unit`, `pnpm test:browser`, and `pnpm test:e2e`; keep their runners when relevant. Do not add tests unless requested.

Use a dedicated dev port so verification does not borrow the usual development instance on 5197 or preview on 5198. Set these variables in the shell that launches the app:

```sh
VERIFY_PORT=5297
VERIFY_RUN="$(date +%Y%m%d-%H%M%S)-$$"
VERIFY_EVIDENCE="$PWD/artifacts/verification/$VERIFY_RUN"
mkdir -p "$VERIFY_EVIDENCE"
echo "$VERIFY_EVIDENCE"
git rev-parse HEAD > "$VERIFY_EVIDENCE/revision.txt"
git status --short > "$VERIFY_EVIDENCE/worktree.txt"
lsof -nP -iTCP:"$VERIFY_PORT" -sTCP:LISTEN
```

An empty listener result is required before launch. If occupied, choose a different unused port and record it; never terminate its owner. Start the repo's Vite command in a retained foreground PTY:

```sh
pnpm dev --port "$VERIFY_PORT" 2>&1 | tee "$VERIFY_EVIDENCE/server.log"
```

Retain the PTY/session handle for teardown. Ready means Vite prints `Local: http://127.0.0.1:5297/` (or the selected port) and the doctor passes. Record the expanded evidence directory and URL so browser and later shell calls use the same values. Separate ports and tabs isolate in-memory games. Do not run concurrent dependency installs or production builds in this checkout; `dist/` is shared.

## Browser setup

Selected driver: **Computer Use**, using the callable `mcp__cua_repl` runtime. Discover the installed `computer-use:computer-use` skill in the current session and read it if available; never hardcode a plugin cache path. If only the runtime is exposed, initialize with `await cua.getState()` as its own first call and follow the returned documentation. If initialization fails, report the concrete blocker; use another driver only under its documented workflow.

Create a dedicated visible tab:

```js
var game = await cua.createBrowserTab('iab', 'http://127.0.0.1:5297/', { visible: true });
```

Use the actual selected port. If `iab` is unavailable, use a runtime-discovered browser with a unique session name. If no browser providers exist but native Chrome is listed, use the native route below (proven in this environment). Serialize shared desktop access. Never navigate or close an unrelated tab. Read `game.getAXState()` after each action before choosing the next target. Match accessible names from the feature recipes to fresh numerical indices, then call `game.click(index)`. Never copy indices between snapshots. Inspect `game.getScreenshot()` for canvas art and pointer targets; canvas entities are not DOM buttons. Use coordinates only from a current screenshot.

For keys use `game.pressKey(index, '1')`, `'r'`, or `'space'` with the current battlefield region index; keyboard commands require that region to have focus. For a native Mission selector, focus its current index and use `Home`/`End` then `Return` to choose the first/last option. Refresh state afterward.

### Native Chrome route

When browser tab providers return `Browser is not available`, Computer Use may still expose native apps. Bind the observed Chrome app and create a new tab without touching existing pages:

```js
var game = await cua.getApp('com.google.Chrome');
await game.pressKey('super+t');
await game.typeText('http://127.0.0.1:5297/');
await game.pressKey('Return');
await game.getAXState();
```

Keep the same `game` name used by the recipes. Native `click`, AX snapshots, screenshots, and file capture work as below. Native `pressKey` takes only the key: focus a control with `game.click(index)` then `game.pressKey('1')`, for example. Prefer a screenshot-derived empty battlefield point to establish keyboard focus. Native reload uses `game.pressKey('super+r')`. Native cleanup uses `game.pressKey('super+w')` only after a fresh snapshot confirms the active tab has the run's exact URL. Do not call tab-only `reload()`/`close()` on an App. If loading is incomplete, inspect a screenshot then refresh AX state. After screenshot-only observation, request a full AX tree before selecting indices.

## Doctor

Run this read-only check first whenever the instance looks wrong, substituting the recorded port:

```sh
lsof -nP -iTCP:5297 -sTCP:LISTEN
curl --fail --silent http://127.0.0.1:5297/ | head -25
```

Inspect the listener's PID with `ps -p PID -o pid,ppid,command` and `lsof -a -p PID -d cwd`. Require the Vite process from the retained launch, cwd equal to this checkout, HTML referencing `/src/main.ts`, and no startup error in `server.log`. Do not accept HTTP 200 alone. In the browser require the Outpost Zero heading, rendered battlefield (no `Preparing battlefield.` status), Mission selector, resource HUD, and `Launch wave 1` on a fresh load. Record the PID, URL, revision, and dirty status: the revision alone does not identify a dirty build.

## Drive

Use [defenses](features/defenses.md) for the short proof: select A1, build Coil Sentry, upgrade to Railgun Battery, cancel a sale, then confirm a sale. Verify salvage before and after each operation, the actual tower sprite, and the empty pad after sale. This runs before wave 1 so combat cannot change the economy during observation.

Other paths are [missions](features/missions.md), [squads](features/squads.md), [combat](features/combat.md), and [controls](features/controls.md). Feature files enumerate alternate entry points; proof via a button does not establish its keyboard or canvas alternative. Report precisely which paths were exercised.

## Evidence

Keep artifacts in the recorded `artifacts/verification/<run>/` directory (gitignored), separate from disposable runtime state. Save before/action/after accessibility snapshots and inspected screenshots, plus an `actions.md` recording feature IDs, URL, actions, expected/observed values, and skipped paths. Capture intermediate sale confirmation, not only the final empty pad.

The runtime returns text and PNG bytes. Where the REPL permits Node file output:

```js
var fs = await import('node:fs/promises');
// Set `evidence` to the exact absolute VERIFY_EVIDENCE printed by the launch shell.
await fs.writeFile(`${evidence}/before.txt`, await game.getAXState({ disableDiffing: true }));
await fs.writeFile(`${evidence}/before.png`, await game.getScreenshot());
```

Use descriptive names for subsequent captures. If runtime file output is unavailable, retain its image artifacts through the harness's supported export mechanism and record their actual location; do not claim unsaved evidence exists.

Exercise real buttons, keys, and pointer input. No internal dispatch calls, injected state, test-only endpoints, or mocked combat. Check visible consequences alongside HUD changes: tower/squad creation, upgraded art, projectile impacts, sale removal, restart reset. This app has no save DB or server mutation; persistence is not an expected side effect. Reload must discard the game. Screenshots do not establish sound quality or motion; observe successive frames for motion and report audio unverified unless actually heard. Do not claim offline support. For responsive changes inspect a narrow window, including open menus, and record actual dimensions if available.

## Cleanup

Close only the owned tab with `await game.close()` for a Tab, or the native Chrome cleanup above for an App. Send Ctrl-C to the retained launch PTY, then confirm the owned listener has exited using `lsof -nP -iTCP:5297 -sTCP:LISTEN`. If needed, inspect ownership again and terminate only the exact recorded child PID. Never kill by process name. Run cleanup even after a failed attempt before retrying. No save data needs deleting. Keep screenshots, logs, and notes, and confirm the named evidence files still exist after teardown with `ls -lh "$VERIFY_EVIDENCE"` (or its recorded absolute path).

## Helpers

No helper scripts are shipped. Commands above use pnpm, curl, lsof, ps, and Computer Use directly. Keep this map current through `/maintain-verification-skill` when available; it is usable without pstack installed.

````

## File: README.md

Source: `/Users/alexanderopalic/Projects/games/outpost-zero/.agents/skills/verify-outpost-zero/features/README.md`

````markdown
# Outpost Zero verification map

Start with [the skill](../SKILL.md) for launch, doctor, evidence, and cleanup. Use a new dedicated tab and a fresh Outpost Zero game unless a recipe says otherwise. No authentication or persisted fixtures are required. Run UI actions serially through Computer Use.

Every action below means: get current AX state, resolve the exact accessible name to its current index, click or press the indicated key, then refresh AX state. Inspect screenshots for all canvas claims. Record actions, before/after HUD values, and screenshots in the run's evidence directory. Record skipped entry points explicitly; one entry point does not prove another.

- [Defenses](defenses.md): pad selection, building, upgrades, sale confirmation/cancellation/refund.
- [Squads](squads.md): barracks, rally placement, squad ownership and removal.
- [Combat](combat.md): wave preview/launch, enemy defenses, orbital strike, mission outcomes.
- [Missions](missions.md): mission selection and reset between the two layouts.
- [Controls](controls.md): pause/resume, speed, sound, restart, reload reset.

Read matching files when scope spans multiple features. The map describes intended observable behavior grounded in the current checkout; it is not a claim that every path has passed a live run. Existing docs/verification.md contains older evidence and limits; do not present it as fresh proof. Source anchors when controls change: src/App.vue, src/features/command-center/CommandCenter.vue, src/features/battle/Battlefield.vue, and src/features/battle/BattleScene.ts.

````

## File: defenses.md

Source: `/Users/alexanderopalic/Projects/games/outpost-zero/.agents/skills/verify-outpost-zero/features/defenses.md`

````markdown
# Build, upgrade, and recycle defenses

Players spend salvage on defenses and upgrades, and recover part of their investment by confirming a sale.

## Sub-features

- `pad-select`: native pad buttons, numbered keys, and canvas pads select the same defense.
- `build`: Coil Sentry (85), Marine Post (100), and Field Mortar (110) appear on empty pads.
- `upgrade`: named tiers change art, stats, costs, and next-tier preview; unaffordable actions are disabled.
- `sale`: confirmation, cancellation, and a single 60 percent refund.

## How to get to it (user POV)

Choose `Select defense pad A1` (also B2/C3/D4; Southport adds E5/F6), press its numbered key with the battlefield focused, or click its marked canvas pad. The menu exposes build actions or the selected tower's upgrade and sale actions. `Close build menu` dismisses it.

## Driving it with Computer Use

Preconditions: fresh Outpost Zero, wave 0/5, no wave launched, record initial salvage as S.

- **Select.** `game.click(index)` for `Select defense pad A1`; expect `A1 · Build a defense`. Capture state and screenshot.
- **Build.** Click `Build Coil Sentry`; expect `A1 · Coil Sentry`, salvage S−85, a visible tower at A1, and `Upgrade to Railgun Battery`.
- **Upgrade.** Click `Upgrade to Railgun Battery`; expect salvage S−165, new art/stats, `Upgrade to Gauss Lance`, and displayed refund 99.
- **Cancel.** Click `Sell Railgun Battery`; capture `Confirm tower sale` and `Recycle for 99 salvage?`. Click `Cancel tower sale`; tower and balance must remain unchanged.
- **Sell.** Click `Sell Railgun Battery` again, then `Confirm sale of Railgun Battery`; expect S−66 salvage, the build menu for an empty A1, and tower disappearance. Select another pad and return to A1 to independently confirm it is empty and the refund did not repeat.
- **Other families/tiers.** Restart between families; build `Build Field Mortar` or `Build Marine Post`. Follow the displayed affordable `Upgrade to Siege Mortar` / `Upgrade to Seismic Battery`, or `Upgrade to Marine Barracks` / `Upgrade to Vanguard Command`. Railgun's third tier is `Upgrade to Gauss Lance`. Earn further salvage through real waves if needed; inspect each change and final `Maximum linear tier reached.`.
- **Alternate selection.** Close the menu, focus the `Outpost Zero battlefield` region, and `game.pressKey(index, '1')`; expect A1. Repeat via its visible canvas pad using screenshot-derived coordinates. Test each alternate separately.

## Gotchas

- Launching a wave makes salvage change through kills; use the pre-wave sequence for exact economy proof.
- A disabled upgrade is expected when funds are insufficient. Never inject money.
- Canvas art needs visual inspection; the tower name alone is insufficient.
- Pause and terminal states disable pad controls and hide the build menu.

````

## File: actions.md

Source: `/Users/alexanderopalic/Projects/games/outpost-zero/artifacts/verification/20260922-122240-80943/actions.md`

````markdown
# Verification-skill proof — 2026-09-22

URL: http://127.0.0.1:5297/
Driver: Computer Use, native Google Chrome App API. Both iab and chrome Tab providers returned Browser is not available; native Chrome worked. The generated skill documents this route. Dedicated tab created and closed without modifying other tabs.

Doctor: Vite PID 80966, parent 80948, cwd /Users/alexanderopalic/Projects/games/outpost-zero. HTTP response referenced /src/main.ts. Launch log reported ready. revision.txt and worktree.txt identify the dirty checkout tested. Initial rendered battlefield had 15 lives, 210 salvage, wave 0/5, and Launch wave 1.

| Feature/path | Action | Expected and observed |
| --- | --- | --- |
| pad-select/button | Select defense pad A1 | Build menu for A1 |
| build/railgun | Build Coil Sentry | Salvage 210 → 125; tower visible; 24 damage, 174 range |
| upgrade/railgun | Upgrade to Railgun Battery | Salvage 125 → 45; distinct upgraded sprite; 40 damage, 196 range; Gauss Lance disabled |
| sale/cancel | Sell Railgun Battery, then Cancel tower sale | Confirmation offered 99 salvage; cancellation retained tower and 45 salvage |
| sale/confirm | Sell Railgun Battery, Confirm sale of Railgun Battery | Salvage 45 → 144; tower removed; empty A1 build menu |
| sale/revisit | Select B2, then A1 | A1 still empty, salvage still 144 |

Inspected screenshots: before.png, built.png, upgraded.png, sale-confirmation.png, sold.png. Accessibility artifacts include before/reselected full trees and intermediate diffs. Diffs retain unchanged values relative to preceding observations. No internal state setters or test hooks were used.

Not exercised: keyboard/canvas pad entry points, other tower families/tiers, squad rallying, combat/full missions, mission selector, system controls, narrow viewport, audio. Five feature recipes are mapped; this run proves the selected defense economy path only.

Validation: pnpm lint, pnpm check, pnpm build passed. Vite reported the existing large-bundle warning. Skill frontmatter validator passed. No application code or tests were changed for this task.

Cleanup: closed owned native Chrome tab with super+w after verifying the URL; sent Ctrl-C to launch PTY 23790. lsof confirmed no listener remained on 5297. All five screenshots, snapshots, revision/worktree records, and server.log still existed after teardown.

````

## File: actions.md

Source: `/Users/alexanderopalic/Projects/games/outpost-zero/artifacts/verification/smoke-20260922/actions.md`

````markdown
# Outpost Zero smoke test — 2026-09-22

Result: tested smoke paths passed; manual coverage limited by concurrent Chrome use.
URL: http://127.0.0.1:5297/
Vite PID: 86004; cwd verified as this checkout. Revision and pre-existing dirty files recorded alongside this report.

## Automated checks
- pnpm lint: passed.
- pnpm check: passed.
- pnpm build: passed; main JS chunk 1,307.68 kB, 358.85 kB gzip, triggers size warning.
- pnpm test:unit: 5 passed (build costs, insufficient funds, barracks sale ownership, paused simulation, restart).
- pnpm test:browser: 3 passed (build, cancel/confirm sale, unaffordable options).
- pnpm test:e2e: 3 passed (real canvas/build/wave launch, mission switching with one canvas, focused Space shortcut). No page errors reported by suite.

## Manual Computer Use
- Initial render: battlefield art, four empty pads, 15 integrity, 210 salvage, wave 0/5.
- pad-select: A1 native button opens build menu.
- build: Coil Sentry costs 85; salvage 210 -> 125; tower sprite inspected.
- upgrade: Railgun Battery costs 80; salvage 125 -> 45; larger upgraded sprite inspected; unaffordable Gauss Lance disabled.
- sale confirmation: 99 salvage refund shown; balance remains 45 before confirmation. Screenshot retained.
- Sale cancellation attempt coincided with Chrome window changing; result NOT verified manually. Unrelated window snapshot discarded.

## Limits and teardown
Manual confirmed sale, rally, combat motion/impacts, orbital strike, pause/resume, speed, audio, restart/reload, narrow viewport, later waves and terminal outcomes were not exercised. Automated checks cover only their named assertions, not full mission completion or combat feel.
Chrome runtime blocked further actions because the user was interacting with Chrome. Owned test tab left open to avoid touching another active tab. Dedicated Vite process stopped via retained PTY; port 5297 confirmed free. No source changes or new tests made; prior work preserved.

````

## File: SKILL.md

Source: `/Users/alexanderopalic/.codex/plugins/cache/pstack/pstack/0.15.2+codex.20260921114941/skills/create-verification-skill/SKILL.md`

````markdown
---
name: create-verification-skill
description: "Generate a project-local verification skill that drives your app the way a user does — any language, framework, or platform. Use for /create-verification-skill, \"make a control skill for this repo\", or when a project has no scripted way to prove UI/CLI/service behavior."
disable-model-invocation: true
---

# Create a verification skill

Before delegating, read [the harness instructions](../../harness/README.md) and the active harness file. Map agent names, tool arguments, and model roles there.

Every serious project needs a scripted way to drive the real app and prove behavior: launch it, exercise a feature the way a user would, and capture evidence. This skill generates that as a project-local skill, at whatever path the active harness uses for one (`harness/<detected>.md` names it), tailored to the repo. You write the generator's output for the next agent, not for a human: it will be read cold, mid-task, by an agent that has never seen the app.

## 1. Interview the repo, not the user

Answer these from the codebase and only ask the user what you cannot observe:

- **Surface:** what does a user actually touch? A web UI, a CLI/TUI, a desktop app, an API, a mobile app, a library? A repo can have several; pick the primary one and note the rest.
- **Run:** how does the app start locally? Prefer the repo's own documented dev command (package scripts, Makefile, README quickstart). Note ports, env vars, seed data, auth.
- **Drive:** for websites and Electron web renderers, read [browse-web](../browse-web/SKILL.md) and generate live interaction instructions for its selected driver. Reuse existing launch, fixture, and scenario knowledge; keep Playwright/Cypress and other automated suites as regression gates. For other surfaces, prefer existing expect scripts, PTY helpers, or HTTP endpoints; otherwise use a tmux/PTY harness for CLI/TUI and plain HTTP for services.
- **Observe:** what evidence can be captured? Screenshots, terminal transcripts, response bodies, logs, exit codes, DB state.
- **Isolate:** can two instances run side by side (ports, data dirs, profiles)? If not, say so in the generated skill: refusing to double-drive a shared instance beats corrupting the user's session.

If the checkout doesn't build or start as-is, fix that first (or report it precisely) before generating; a skill written against a broken base teaches wrong steps. When an irrelevant missing asset blocks startup (a static dir the API never serves, a sample config), the generated skill may create it, clearly marked as verification scaffolding, and remove it in cleanup.

## 2. Generate the skill

Write the generated skill to the active harness's project-local skill path (`harness/<detected>.md` names it; on Claude Code that is `.claude/skills/verify-<app>/SKILL.md`) with YAML frontmatter (`name: verify-<app>` and a `description` that names the app, the surface, and when to reach for it — without frontmatter the skill never registers) and these sections, each grounded in what the interview actually found (no placeholders left):

- **Launch:** the exact command that starts the app for verification, and how to tell it's ready (a log line, a port answering, a prompt). Include teardown. For a short-lived CLI or TUI there is no server to keep alive: launch means build the binary (or install deps) once, then start each drive in its own isolated PTY or tmux session.
- **Browser setup:** for web surfaces, name the selected driver and its prerequisites. For Computer Use, instruct the reader to discover and read the installed skill, check its runtime, identify the target app/URL, refresh app state after actions, inspect screenshots, and serialize access to the shared desktop. Do not hardcode a plugin cache path. For `agent-browser`, include a unique named session on every command, snapshot/semantic interactions, screenshot inspection, and session cleanup. Include concrete app-specific actions and evidence steps so the recipe remains usable without pstack installed.
- **Doctor:** one read-only check that answers "is this instance worth driving?" — process up, right version/build, port owned by us, auth valid. An agent runs this first whenever anything looks off.
- **Drive:** the harness recipe with real selectors/commands from this repo, not examples. Prefer stable handles (ARIA labels, data attributes, prompt strings, route paths) over coordinates and tab order.
- **Evidence:** what to capture for a proof and where it goes. State the proof standards: exercise the real user path, not internal setters or test-only endpoints; capture the action and the resulting state, not just the final screen; verify side effects (files written, rows inserted, messages sent) alongside what's visible; mocks only where a production boundary already isolates the external system. When the safe path is a dry-run or test mode, verify what it actually skips by observing (files, network, git refs) rather than trusting its name: some dry-runs still touch the network or open a browser.
- **Cleanup:** how to tear down instances the run created. Never kill by process name; kill what you started. Cleanup removes instances and scratch state, never the evidence: proof artifacts survive the teardown, in a location the skill names.
- **Helpers:** any script the skill ships is executable and its invocation is shown in the skill body. A helper the reader has to reverse-engineer is not a helper.

## 3. Seed the feature map

Create `<project-skill-path>/verify-<app>/features/README.md` plus one file per user-facing feature you can identify (aim for the top 3-5 to start, from routes, commands, menus, or docs). Follow the shape in [`references/feature-map-example/`](references/feature-map-example/) (its commands illustrate the `agent-browser` route; adapt them to the selected driver), with a README index and one file per feature. Each file answers, from the user's point of view: what the feature is, how to reach it, how to drive it with the harness, and what observable end state proves it works. The four H2s are `Sub-features`, `How to get to it (user POV)`, `Driving it with <harness>`, and `Gotchas`. The map is the repo's maintained verification source; a proof that drives one convenient entry point is incomplete when the map lists others.

## 4. Prove the generated skill before handing it over

Run its own instructions end to end once: launch, doctor, drive ONE mapped feature (one is enough; the map exists so later runs can cover the rest), capture evidence, clean up. After cleanup, confirm the evidence still exists at the named location — a cleanup that eats the proof fails this step. Fix what fails, and run the generated cleanup after every failed iteration too, so broken attempts don't strand processes and ports. A generated skill that was never executed is a draft, not a deliverable.

## 5. Offer the maintenance loop

Point the user at `/maintain-verification-skill` for keeping the map honest as the app changes. Suggest a cadence only if they ask.

````

## File: SKILL.md

Source: `/Users/alexanderopalic/.codex/plugins/cache/pstack/pstack/0.15.2+codex.20260921114941/skills/maintain-verification-skill/SKILL.md`

````markdown
---
name: maintain-verification-skill
description: "Periodic pass that keeps a project's verification skill and feature map honest: parallel source readers per feature, one live session driving every feature, at most one PR of proven corrections. Use for /maintain-verification-skill or \"audit the verify skill\"."
disable-model-invocation: true
---

# Maintain a verification skill

Before delegating, read [the harness instructions](../../harness/README.md) and the active harness file. Map agent names, tool arguments, and model roles there.

A feature map rots the moment the app changes. This skill is the upkeep loop for a skill generated by `/create-verification-skill` (or any project-local verification skill with a feature map). The unit of rigor is the feature, not every sentence: cover every feature file from source and exercise every feature live, without terminalising every bullet.

## Outcomes

Pick one, and say which:

- **clean** — every feature got source and live coverage; nothing worth shipping. No branch, no PR.
- **changed** — one PR ships proven doc, harness, or map corrections.
- **blocked** — coverage could not finish or a proven fix could not ship safely. Say exactly what blocked it.

## Edit scope

Only edit the verification skill's own directory (its SKILL.md, features/, and any harness scripts it owns). Never edit product code during a run: a behavior the map describes that the app no longer does is either doc drift (fix the map) or a product regression (report it, don't paper over it in docs).

## Pass

0. **Locate the target.** Find the verification skill to maintain: the project-local skill whose body has launch/drive sections and a feature map (usually `verify-*/` under the active harness's project-local skill path, named in `harness/<detected>.md`). Several candidates → ask which one; none → stop and point at `/create-verification-skill` instead of inventing a target.

1. **Index hygiene.** Read the feature map README and glob its sibling files. Fix missing, extra, duplicate, or dead entries. Lightweight; no generated inventory.

2. **Source wave.** One read-only subagent per feature file, launched concurrently. Each explains "how does this user-facing feature work?" from source, flags likely doc drift with citations, and returns one concise live-verification recipe. Children never drive the app and never edit files. Return shape: feature summary / source entry points / likely drift or none / one recipe.

3. **Reconcile.** For website recipes, read [browse-web](../browse-web/SKILL.md) and align live driving with its selected driver, respecting explicit user and host requirements. Preserve existing automated test runners. Update affected commands, session setup, evidence paths, and cleanup within the verification skill, then prove those changes in the live pass. Every feature file has a returned summary. Merge overlapping recipes into as few app states as practical. Spot-check cited drift; don't re-prove clean claims. Sweep recent churn for user-facing surfaces missing from the map — require a concrete source path before calling one missing.

4. **Live pass.** Required even when source looks clean. The coordinator owns all driving; follow the verification skill's own launch model — one long-lived instance driven serially for servers and UIs, or a fresh isolated session per drive for short-lived CLIs (the skill's Launch section decides, not this one). Exercise every feature at least once, and hold three invariants the whole pass, whatever the failure: (1) never drive an instance you haven't health-checked since it last did something surprising — doctor before first drive, doctor on each fresh session where sessions are the unit, doctor again after any failed drive, and where doctor can't see the failure (a wedged UI state on a healthy process), reset to a known state or relaunch rather than hoping; (2) evidence captured so far survives every cleanup, checked at its named location, not assumed; (3) nothing a drive started outlives that drive's usefulness — failed-iteration residue is cleaned whether the session is stuck, exited, or shared (for a shared instance, clean the residue, not the instance). A doctor failure caused by skill drift is drift: fix it under edit scope and retry once — restart whatever the fix invalidated, nothing more — before calling the pass `blocked`. A feature that can't be reached is `verified-unreachable` only with the concrete prerequisite (auth, entitlement, OS, external state) and the route attempted; if the map omits that prerequisite, that's drift. Any harness fix from triage gets re-driven live before it ships. Final teardown happens after the last drive of the run — including those re-proofs — so nothing outlives the run (evidence stays, per the skill).

5. **Triage.** Wrong or missing user-POV description → doc drift, fix it. Working behavior the harness can't drive → harness gap, fix it; a harness fix follows the same helpers rule as generation (scripts executable, invocation documented in the skill body). App behavior that's actually broken → product gap; record it for the user, keep it out of this PR.

6. **Ship or stop.** For changed: one PR of proven corrections, re-read every changed file first. For clean or blocked: no PR, report the outcome and the coverage honestly.

Keep concise run notes (features covered, unreachable prerequisites, confirmed drift, outcome) in a scratch location; don't commit them.

````

## Retained visual evidence

Copied unchanged from the generation proof. Built and sold screenshots were visually inspected during this research pass.

- [before.png](outpost-zero-verification/before.png)
- [built.png](outpost-zero-verification/built.png)
- [upgraded.png](outpost-zero-verification/upgraded.png)
- [sale-confirmation.png](outpost-zero-verification/sale-confirmation.png)
- [sold.png](outpost-zero-verification/sold.png)
