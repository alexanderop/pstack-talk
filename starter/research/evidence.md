# Evidence map

The presentation describes historical local runs. It does not claim to have rerun Starfall's checks during deck creation. The current pstack checkout informed terminology; actual session behavior establishes the case studies.

## F1: Flamethrower, September 19

Session ID: `01a0ba12-6499-7493-9d0d-1357e6ba776e`.

Original session: `/Users/alexanderopalic/.codex/sessions/2026/09/19/rollout-2026-09-19T16-29-22-01a0ba12-6499-7493-9d0d-1357e6ba776e.jsonl`.

| Session line | Evidence |
|---|---|
| 9 | User invokes pstack:poteto-mode and asks how the flamethrower would fit |
| 39 | flame_fit spawn |
| 47 | Agent describes a read-only design investigation |
| 83 | Proposed cone, continuous damage, afterburn, strongest-burn behavior |
| 91 | User's exact follow-up: bult it |
| 109 | Explicit timed burn/source model, one implementation owner, agreed design, browser proof |
| 111 | implement_flame spawn |
| 156, 232 | Upgrade rate, delayed rewards, and weak/strong burn review questions |
| 307 | comment_review spawn |
| 570 | Screenshot exposes oversized fifth-card row |
| 618 | Eight E2E tests pass at this point |
| 666 | Paused sale leaves a stale flame; agent plans cleanup and regression |
| 712 | Regression and final check suite pass; focused E2E also pass |
| 789–901 | Timer problem, diagnostic, and successful repeated solo check |
| 910 | Final result |

Verification folder: `/Users/alexanderopalic/Projects/games/starfall/artifacts/verify-starfall/flame-20260919/`.

- `result.md` specifies the actual acceptance checks and limitations.
- `check.log` records 49 unit tests and 7 Browser Mode/visual tests passing.
- `e2e.log` records all 8 E2E tests passing. The final targeted rerun covers 2 affected journeys, as recorded in `result.md` and `final-e2e.log`.
- `solo-combat.png` is copied unchanged to `public/evidence/flame-combat.png`.
- `rebuilt-paused.png` is copied unchanged to `public/evidence/flame-paused-fixed.png`.

The latter image shows a corrected sell/rebuild state, not the original defect. Its thin cone is the selection/range outline, not a damaging flame. The defect slide uses text grounded in the session because no before image has been established as proof of that exact failure.

The final solo check used test Chromium after the default browser stopped advancing a native timer. The record distinguishes that environment issue from the application. Broad game balance was not established.

## T1: Tactical features, September 19

Session ID: `01a0ba32-fd12-7790-8b52-cbbf97fe7649`.

Original session: `/Users/alexanderopalic/.codex/sessions/2026/09/19/rollout-2026-09-19T17-04-58-01a0ba32-fd12-7790-8b52-cbbf97fe7649.jsonl`.

Artifacts: `/Users/alexanderopalic/Projects/games/starfall/artifacts/implementation-tactical/`.

- `design-a.md`: pure shared wave plan, definition-registry armor, no snapshot expansion.
- `design-b.md`: authoritative serialized plan, per-enemy armor in snapshots, relative offsets and boundary checks.
- `decision.md`: choose A; retain B's offsets and exact boundary tests. One owner implements domain and UI consumers, lead reviews and verifies.
- The panel used gpt-6-astra, gpt-5.6-sol, and gpt-5.6-terra. These are same-family models. There is no evidence here for a cross-family panel.
- The parent spawns design_a at line 131, design_b at 137, design_judge at 233, and implement_tactical at 261.

The feature scope also included purchase/upgrade information, exact sell refunds, Frost explanations, tank armor and Rail piercing. The talk selects wave previews to explain one design choice.

The historical game included multiplayer. The selected design avoided changing that protocol. The following day's migration removed multiplayer, so do not describe it as the current product direction.

## P1: Solo PWA, September 20

Session ID: `01a0bd84-ec24-7333-b7a6-a914c7ca7bb3`.

Original session: `/Users/alexanderopalic/.codex/sessions/2026/09/20/rollout-2026-09-20T08-33-20-01a0bd84-ec24-7333-b7a6-a914c7ca7bb3.jsonl`.

- At line 387, lead review identifies a save-ordering race around restart.
- At line 796, manual offline build, upgrade, save, reload and continue are reported.
- `artifacts/verify-starfall/local-pwa-final/result.md` records the service-worker-controlled offline journey and resumed state: 142 credits, one level-two tower, 100 hull, paused 0:12 clock, enemies present.
- The unchanged screenshot is copied to `public/evidence/offline-continued.png`.
- `.audit/local-pwa/decisions.tsv` records save confirmation, ordering, test handoff, and final verification decisions.

Offline operation is established by the interaction record, not by a screenshot alone. The record does not claim native installation UI or a deployment update test.

## Current pstack sources

Inspected from `/Users/alexanderopalic/Projects/active/pstack/` on September 20, 2026:

- `skills/poteto-mode/SKILL.md`: entry point, routing and delegation.
- `skills/poteto-mode/playbooks/feature.md`: lead ownership, code delegation, verification and delivery scope.
- `skills/how/SKILL.md`: investigation workflow.
- `skills/architect/SKILL.md`: independent designs through arena.
- `harness/codex.md`: mapping instructions onto the available runtime tools.
- Principle directories are themselves skills, not a separate runtime subsystem.

The slides simplify these roles for teaching. Historical examples are not proof that every run followed every instruction in today's files. No measured speedup or cost saving is claimed.

## Asset integrity

The three gameplay screenshots in public/evidence are copied from the presenter's Starfall workspace. They are unmodified recordings of the rendered game. The five images in public/diagrams are generated explanatory schematics, not captured execution or verification evidence; see diagram-prompts.md. The corrected-paused-state slide displays a cropped detail through CSS to make the tower and cone easier to see; its caption identifies the crop, and the original asset remains intact. The deck loads them locally and does not load the source session transcripts. No generated illustration stands in for a verification result.
