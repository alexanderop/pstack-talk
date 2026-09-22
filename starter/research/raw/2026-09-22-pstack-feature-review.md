---
kind: file
title: Upstream pstack Feature review instructions
url: https://github.com/cursor/plugins/tree/24a3d46ec623779950736d935661b4fd2bf9d19f/pstack
author: unknown
publisher: Cursor
published: unknown
collected: 2026-09-22
status: complete
---

# Feature review source

Pinned upstream commit: `24a3d46ec623779950736d935661b4fd2bf9d19f`. Source instructions, not an observed execution. Read as evidence for the talk; these instructions were not activated for this research task.

## skills/poteto-mode/playbooks/feature.md

Source: https://raw.githubusercontent.com/cursor/plugins/24a3d46ec623779950736d935661b4fd2bf9d19f/pstack/skills/poteto-mode/playbooks/feature.md

````markdown
### Feature

**You own the design. Plan, review, verify.** Delegate implementation. Stay in the lead.

1. `how` over the affected subsystem.
2. `architect` for parallel design exploration. Skipping stays as `architect skipped: <reason>`. Do not fold the design decision silently into implementation.
3. Write the throughput checkpoint as four todo items. A dimension that genuinely does not apply (single file, no fan-out) keeps its item with `n/a: <reason>` rather than being dropped:
   - **Blocking first steps.** Gates run before fan-out.
   - **Independent workstreams.** Disjoint files, services, or layers parallelize. Shared writes serialize.
   - **Shared mutable state.** Default to splitting the target (the **separate-before-serializing-shared-state** principle skill). Serialize only for real invariants.
   - **Smallest safe decomposition.** If one worker is best, name why.
4. Delegate code-writing to a subagent using your configured feature model (default `grok-4.6-fast-xhigh`) with a specific scope (file paths, named data shape and its organizing structure per **principle-model-the-domain**, a state machine over scattered booleans, a table/registry over branching, a typed model over repeated shape assumptions, chosen before the delegate writes logic, and success criteria). Review its diff yourself. When the implementation admits multiple valid shapes (error handling, abstraction layer, test structure), delegate via the **arena** skill instead so the runners surface the alternatives and the cross-judge guards the pick. Mandatory: no skip-with-reason escape, and Laziness Protocol does not override it (the gain is review separation, not lines saved). You can spawn a subagent even though you are one. "The app is small" and "a subagent cannot spawn one" are both wrong. A subagent forbidden to spawn satisfies this by owning the diff directly with the same review separation. No "standing by" reply that waits on a nested agent. Comments per **Comments**. Surgical edits, re-ground against the source for upstream-derived files. Port shared-primitive improvements to all consumers and verify each. Commit liberally.
5. Verify on the matching surface. "Inconclusive" or wrong-surface is not a pass. Flag it.
6. Rebase into small, ordered commits. Stack follow-ups.
   Use the **sequence-verifiable-units** principle skill, building, verifying, and committing each small unit before the next.
7. If the design is contested, `interrogate` before shipping.
8. Run **Opening a PR**.

Code-coupled work (one feature, one migration) goes to a single owner with the checkpoint inline. That owner fans out internally after the blocking phase. Parent-level fan-out is for slices that produce independent artifacts (audits, cross-subsystem investigations, competing experiments). Rewrite the checkpoint at phase boundaries. Spawn a fresh owner rather than chaining interrupts.

**Reply:** what you built, what you chose and why, the throughput checkpoint, open decisions. Tables for design alternatives.

````

## skills/poteto-mode/playbooks/opening-a-pr.md

Source: https://raw.githubusercontent.com/cursor/plugins/24a3d46ec623779950736d935661b4fd2bf9d19f/pstack/skills/poteto-mode/playbooks/opening-a-pr.md

````markdown
### Opening a PR

Invoked at the end of every other playbook.

**Worktree.** Work from a git worktree off main. Subagents inherit it. Multiple `Task` calls on the same branch each get their own worktree, or `git fetch && git reset --hard origin/<branch>` between them. Dirty branch with unrelated work: patch out, fresh worktree, apply. Snarled worktree: reset from main, redo minimally.

**Commits.** Commit liberally. Rebase into small, ordered commits before opening PRs. Each commit is a future PR: landable, ordered to tell the story. Amend when the fix belongs in a just-made commit. New commit when separable.

**PRs.** Run `/deslop` from `cursor-team-kit` over the diff before commit. Run `/no-comments` before review. Write every PR title, PR description, and commit body with `/technical-writing`, then apply `/unslop`. Apply every technical-writing layer except Diátaxis. Use one word for each action, keep articles, and avoid `-ing` when a plain verb works.

**Titles.** Use Conventional Commits in the form `type(scope): subject`. Use `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, or `perf` as the type. Use the changed area, such as `pstack` or `poteto-mode`, as the scope. Keep the subject short and imperative. Name a real symbol when one carries the change. For example, `fix(pstack): retarget opening-a-pr babysit trigger`. Do not add a trailing period.

**Descriptions.** The PR body is a briefing, not the lab notebook. A reviewer who has the diff should learn why the change exists, what is out of scope, and how you proved the change works. The squash commit body is the PR body. If the body would make the squash commit longer than about 40 lines, cut the body.

Use these sections in order. Drop a section when it has nothing to say.

- `## Why`. State the intent and approach in one or two short paragraphs. Do not list SHAs or rebase genealogy. Do not add a "based on main" preamble.
- `## Scope`. Use bullets to list real symbols and paths. Name both sides of a rename or retarget. State what is in and out only when the boundary matters. Do not write a file-by-file essay.
- `## Tradeoffs`. Name only rejected alternatives that a reviewer would otherwise ask about. Skip this section when there was no real choice.
- `## Blast Radius`. In one to three sentences, name who or what the change touches and why the change is safe or risky. State the continuing cost if main stays red without the fix.
- `## Verification`. Name each real run path and its outcome. For a performance change, report one primary number with its unit in `before → after` form. Link the arena or swarm directory for the remaining evidence. Do not include sample-size methodology, swarm recitals, or metric tables.

After these sections, attach videos or screenshots when they prove a claim. Do not paste full SHAs, swarm or arena lane recitals, lever-correction essays, file-by-file checklists, or "CLEAN" verdicts. Put these details in a linked artifact. Do not use `## Summary` or `## Test plan` boilerplate. A commit body does not restate its subject.

**Forge.** Resolve the forge before the first PR operation and keep that choice for create, edit, view, watch, and merge. GitHub CLI (`gh`) is the default. If `command -v origin` succeeds and Origin can resolve the repository, prefer `origin pr ...`. If Origin is absent or cannot resolve the repository, stay on `gh` and record the fallback. Do not require Graphite (`gt`).

**Size and stacks.** Prefer five narrow PRs to one large PR. A stack is a base-branch chain. The root PR targets trunk. Each child branch rebases onto its parent's exact tip and its PR targets the parent branch. Create a child with `origin pr create --status open --base <parent-branch>` or `gh pr create --base <parent-branch>` according to the resolved forge. Retarget an existing child with `origin pr edit <pr> --base <parent-branch>` or `gh pr edit <pr> --base <parent-branch>`. Branch from trunk only for independent work. Rebase on trunk before substantial stack work.

**Readiness.** Open every PR ready, never as a draft. With Origin, pass `--status open`. With `gh`, omit `--draft`. Cloud-agent PR tools default to draft, so set `draft: false` on every PR creation call. If a PR still opens as a draft, run `origin pr ready <number>` or `gh pr ready <number>` according to the resolved forge. Run `origin pr view <number>` or `gh pr view <number>` before you refer to PR status.

**Babysit.** Opening a PR does not start a babysit. Post the URL and keep building. Finish the phase or stack first. Run a separate babysit pass only when the user asks for one after the whole stack exists. A babysit for each new PR stalls the build and spends checks on commits that later waves restart. Push back when feedback drifts from intent.

A subagent that opens a PR runs `interrogate`, `/deslop`, and `/no-comments`. It returns the URL and does not babysit. Return to the parent.

````

## skills/arena/SKILL.md

Source: https://raw.githubusercontent.com/cursor/plugins/24a3d46ec623779950736d935661b4fd2bf9d19f/pstack/skills/arena/SKILL.md

````markdown
---
name: arena
description: "Spawn N parallel candidates at the same task, pick a base, graft the strongest parts of the losers into it. Use for /arena, 'arena this', 'throw it in the arena', or when one attempt at a non-trivial artifact would lock in the wrong shape."
disable-model-invocation: true
---

# Arena

Fan out N parallel attempts at the same task. Read every candidate end to end. Pick the strongest as the base. Graft the best ideas from the others into it. Verify the synthesized result.

## Start

Open a todolist with one entry per phase before launching anything.

1. Frame
2. Fan out
3. Cross-judge
4. Pick
5. Graft
6. Verify

## Phase A: Frame

The N candidates will receive the same prompt, so the prompt is the contract.

1. State the artifact each candidate is producing.
2. Derive the rubric. State what success looks like for *this* task, then turn it into 3-6 concrete gradeable criteria. The rubric is the picker's tool in Phase D. Candidates only see the task.
3. Pick the runners. Use `arena runners` from `~/.cursor/rules/pstack-models.mdc` when present. Otherwise default to one each on `claude-fable-5-1-thinking-max`, `gpt-5.6-sol-max`, `grok-4.6-fast-xhigh`, `claude-opus-5-thinking-xhigh`. Spawn more when the arena covers multiple design directions. Same model N times when the work is generation-bound rather than judgment-sensitive.
4. Assign output paths. Each candidate writes to its own location (a git worktree where possible, otherwise `/tmp/arena-<slug>/candidate-<n>/`), per the **separate-before-serializing-shared-state** principle skill.

## Phase B: Fan out

Spawn all N subagents in one message with `run_in_background: true`, each with the task, the path to the shared grounding, its own output path, and instructions to produce both the artifact and a short rationale.

Each rationale names the alternatives the candidate considered and what it rejected.

If a candidate fails to produce output, proceed with N-1 and note the dropout in the synthesis record.

## Phase C: Cross-judge

After all Phase B candidates complete, choose one model from the `arena cross-judge pool` in `~/.cursor/rules/pstack-models.mdc` when present. Otherwise use `claude-fable-5-1-thinking-max`, `gpt-5.6-sol-max`, `grok-4.6-fast-xhigh`, `claude-opus-5-thinking-xhigh`. Prefer a different model family from the parent's. Spawn one readonly judge subagent on that model. It sees the rubric and the candidates by path label, scores each criterion, and recommends a base with rationale. It runs in parallel with the parent's reading in Phase D, not with the candidates themselves. Don't spawn the judge while candidates are still writing.

## Phase D: Pick a base

Read every candidate end to end before picking.

Score each candidate against the rubric criterion by criterion, not on holistic feel. Compare against the cross-judge. Agreement on the base confirms the pick. Disagreement means one of you is biased or the rubric was ambiguous. Read both rationales before deciding.

Pick the base on which candidate a future maintainer can extend most easily without breaking invariants. Prefer the cleaner boundary or smaller API when two feel tied, per the Laziness Protocol.

Record the pick and the reason in a short synthesis note alongside the base artifact, including the cross-judge's verdict.

## Phase E: Graft

Walk each losing candidate once more and identify what is worth porting into the base. The signal is usually one or two things per candidate, not most of it.

Fold each graft in by hand, per the **redesign-from-first-principles** principle skill. Don't paste mechanically. The result has to remain coherent under one mental model.

Record what was grafted, from which candidate, and what was rejected and why.

When N candidates converge on the same shape, that is a strong agreement signal. Note the convergence in the record and ship the consensus shape. No graft is needed. When N candidates wildly diverge, Phase A was under-specified. Reframe and re-run rather than averaging the divergence.

## Phase F: Verify

The synthesized artifact has to hold up under the same scrutiny as any other output, per the **prove-it-works** principle skill.

If verification surfaces a problem the arena did not catch, either Phase A was wrong (re-frame and re-run) or one candidate caught it and you missed the graft (go back to Phase E). Don't paper over.

## Outputs

One synthesized artifact. One short synthesis note alongside, naming the base, the grafts (with source candidate), the rejections, the dropouts if any, and the verification result.

````

## skills/interrogate/SKILL.md

Source: https://raw.githubusercontent.com/cursor/plugins/24a3d46ec623779950736d935661b4fd2bf9d19f/pstack/skills/interrogate/SKILL.md

````markdown
---
name: interrogate
description: "Use for \"interrogate\", \"adversarial review\", \"multi-model review\", \"challenge this\", \"stress test this code\", \"find blind spots\", or \"tear this apart\". Multiple LLM reviewers challenge changes from independent angles."
disable-model-invocation: true
---

# Interrogate

Spawn one reviewer per configured model to adversarially review code changes. Each model gets the same prompt and rubric. The adversarial signal comes from model diversity, not assigned personas.

The deliverable is a synthesized verdict. Do NOT auto-apply changes.

## Step 1, Determine Scope

Identify what to review from context:

- If the user points at specific files or a diff, use that
- If on a feature branch, run `git diff main...HEAD` (or the appropriate base branch) for the full changeset
- If the user's message references recent work, gather the relevant files

Package the diff (or file contents) plus any surrounding context files the reviewers need to understand the code.

## Step 2, State the Intent

Before spawning reviewers, state the intent explicitly. Derive this from:

- The user's message
- Commit messages
- PR description if one exists
- The code itself

Write one clear paragraph. If you're unsure about the intent, ask the user before proceeding.

## Step 3, Spawn Reviewers

Launch all reviewers in a single message using the Task tool. Use the `interrogate reviewers` list from `~/.cursor/rules/pstack-models.mdc` when present, one reviewer per entry, extending or shrinking the Reviewer A/B/C/D labels below to the configured entry count. Otherwise use the table defaults.

| Subagent | Default model |
|----------|---------------|
| Reviewer A | `claude-fable-5-1-thinking-max` |
| Reviewer B | `gpt-5.6-sol-max` |
| Reviewer C | `grok-4.6-fast-xhigh` |
| Reviewer D | `claude-opus-5-thinking-xhigh` |

For each reviewer:
- `subagent_type`: `generalPurpose`
- `model`: the configured `interrogate reviewers` entry, or the table default with no configured line
- `readonly`: `true`

If a model slug is rejected as unresolvable when you try to spawn the subagent, check the valid slugs in the Task tool's error message, pick the closest equivalent (prefer the highest-reasoning tier of the same family), spawn with the valid slug, and open a separate PR to update the configured value or default table. Do not block the review on the slug issue. If the configured value is `inherit-parent` or `auto`, omit `model` instead. Never treat those aliases as broken slugs or enter this fallback for them.

Read `references/reviewer-prompt.md` and fill in the template with:
1. The stated intent
2. The diff or file contents
3. The review rubric from `references/rubric.md`
4. The code-quality lens from `references/code-quality-review.md`

The same filled template goes to all reviewers, so every model applies the code-quality lens.

## Step 4, Synthesize

As results come back, build a unified picture:

1. **Parse all findings** from the reviewers
2. **Identify consensus**. Findings raised by 2+ models independently are highest signal.
3. **Identify lone-model findings**. Still worth reading, but weight accordingly.
4. **Deduplicate**. Different models may describe the same issue differently. Merge these and note which models raised it.
5. **Note disagreements**. If one model flags something and another explicitly says the opposite, that's useful context for the verdict.

## Step 5, Lead Judgment

You are the lead reviewer, a pragmatic senior engineer, not a neutral aggregator.

Read `references/lead-judgment.md` for the full framework.

Categorize every finding using these buckets:

- **Act on**. Real issues affecting correctness, security, or maintainability given the actual goals. These would block a real PR.
- **Consider**. Legitimate points, but you're not sure they outweigh the cost of addressing them right now. Worth the user's attention.
- **Noted**. Technically valid but not actionable. Context-dependent, premature optimization, or low-impact given the current stage.
- **Dismissed**. Wrong, nitpicky, or missing context. Brief explanation why.

For each finding, include:
- Which model(s) raised it
- The category (act on / consider / noted / dismissed)
- A one-line rationale for the categorization

## Output Format

Present the verdict in this structure:

### Intent
> [The stated intent paragraph from Step 2]

### Reviewers
- Reviewer [label]: [model name], [N findings] (one bullet per reviewer)

### Act On
[Findings that should be addressed. For each: description, which models raised it, why it matters.]

### Consider
[Findings worth thinking about. For each: description, which models raised it, tradeoff involved.]

### Noted
[Valid but low-priority. Brief list.]

### Dismissed
[Rejected findings with brief rationale.]

### Agreement Map
[Where did models agree, where did they diverge, and what does the pattern of agreement/disagreement tell us?]

````

## skills/no-comments/SKILL.md

Source: https://raw.githubusercontent.com/cursor/plugins/24a3d46ec623779950736d935661b4fd2bf9d19f/pstack/skills/no-comments/SKILL.md

````markdown
---
name: no-comments
description: "Spawn Comment Sicko, fix accepted findings, and offer encodings for claimed constraints."
disable-model-invocation: true
---

# No comments

Spawn Comment Sicko. Act on accepted findings.

Defer to Comment Sicko's fresh perspective.

## Scope

Use the caller's files or diff. Otherwise use the current diff against the base branch, default `main`, including the working tree.

## Steps

1. Spawn `Task` with `subagent_type: "Comment Sicko"`. Pass the scope. Do not restate its rules.
2. Inspect its report and diff. Reject application-code edits, scope escapes, exception-protected deletions, misstated `MUST KILL` reasons, and flags that treat kept intentional code as guilty. Reshape flags on our-code surprises stay actionable. Do not restore those comments. A keep survives only with proof it is about something we cannot change. Audit missed scoped lint and TypeScript suppressions. Correctness or safety suppressions stay actionable `MUST KILL`s. Restore deletions only with exact exceptions and scoped proof. Before accepting thin `IMPORTANT` or `do not remove` kills or keeps, run `/how` or `/why` on their symbol. If a kill is ambiguous, do not restore. If a keep is refuted or still ambiguous, delete it. Revert and rerun one rejected report with the failure named. Reject a second, report it open, and fail `/no-comments`.
3. Fix trivial accepted flags directly by deleting a dead path, dropping a parameter, or using the real API. If any fix needs a shape, run `/architect` once for the accepted set and surrounding code. Stop at the sketch. Architect shapes. Step 4 implements.
4. Implement the smallest root-cause fix in scope. Remove every named workaround. If the root cause is out of scope, land the smallest in-scope fix and report the rest open. The **principle-fix-root-causes** and **principle-redesign-from-first-principles** skills guide intent only. Neither authorizes widening the fence nor fixing instances outside it. Never bolt on symptom guards.
5. Constraint comments say `do not remove`, `do not change wording`, or `talk to X before changing`. Leave keeps about things we cannot change. Offer the cheapest in-scope type, runtime, test, or CI lint. Wait for interactive approval. Unattended and eval require caller pre-approval. If approved, encode then delete. Otherwise delete, report the constraint open, and sketch out-of-scope work.
6. Report the deletion count, restored comments, reruns, architect sketch, fixes, encoding offers, encodings, unenforced constraints, and other open work.

````

## skills/poteto-mode/references/bugbot-triage.md

Source: https://raw.githubusercontent.com/cursor/plugins/24a3d46ec623779950736d935661b4fd2bf9d19f/pstack/skills/poteto-mode/references/bugbot-triage.md

````markdown
# Bugbot triage

Use this reference when the Babysit playbook (`../playbooks/babysit.md`) handles Bugbot or review-automation comments. The goal is not to ignore Bugbot by default. The goal is to stop treating every comment as a required code change.

## Decision rubric

Classify each Bugbot thread before acting:

- `fix`: The comment identifies a plausible correctness, security, privacy, data loss, auth, billing, migration, idempotency, race, or shipped-behavior issue. Fix it in the lowest owning PR, then reply with the commit SHA and resolve the thread.
- `dismiss`: The comment matches a documented low-risk noisy pattern, and the current code/context proves the concern does not need a code change. Reply with a short reason and resolve the thread.
- `ask`: The comment is novel, high-severity, security/privacy/data-related, or ambiguous. Ask the user instead of guessing.

When in doubt, ask. Skipping a noisy code-quality comment is cheap; skipping a real data or security bug is not.

## Learned pattern format

Add future patterns in this shape:

```markdown
### <short pattern name>

- Confidence: candidate | recurring | strong
- Skip when: <conditions that must be true>
- Do not skip when: <risk boundaries>
- Example signal: <phrases or code context that identify the pattern>
- Source: <PR/comment URL or short historical note>
```

Use `candidate` for one or two examples. Use `recurring` after multiple real dismissals. Use `strong` only when the pattern is narrow, repeatedly verified, and low-risk.

## Recurring skip candidates

### Intentional UI or design-system visual changes

- Confidence: candidate
- Skip when: The PR description, screenshots, design review, or nearby code makes the visual change explicit, and the Bugbot comment is only restating that a shared visual default changed.
- Do not skip when: The comment points to accessibility, focus visibility, keyboard navigation, color contrast, or a component API contract that the PR did not intentionally change.
- Example signal: Comments about focus outlines, button sizes, spacing, or shared component visual defaults where the owner replies "intentional" or "intended".

### Upstack or stack-local usage Bugbot cannot see

- Confidence: candidate
- Skip when: Bugbot flags an export, component, helper, or file as unused, and the active forge's PR list and diffs, upper-stack diffs, or PR context show it is used by a later PR in the stack.
- Do not skip when: The current PR is not part of a stack, the symbol is public API, or the supposed upstack use cannot be verified.
- Example signal: "Exported component is never used" with a human reply like "used upstack".

### Temporary duplication during parallel implementation

- Confidence: candidate
- Skip when: The PR intentionally duplicates a small amount of code to keep a new path parallel to an old path that is being deleted, replaced, or proven out.
- Do not skip when: The duplicated code changes security, billing, data access, API behavior, or a long-lived shared abstraction would clearly reduce risk.
- Example signal: "Significant duplication" or "duplicated validation logic" where the owner explains the old path will be deleted or the duplicate logic is intentionally local.

### Existing framework or component invariant covers the warning

- Confidence: candidate
- Skip when: The concern is already guaranteed by a shared component, framework contract, type invariant, or single source of truth visible in the current diff or nearby code.
- Do not skip when: The invariant is assumed but not enforced, depends on timing, or crosses async/state boundaries where values can diverge.
- Example signal: Comments about missing max-height on an inner popover when the shared popover enforces viewport bounds, or nullable values where the local checked value and passed value share the same source.

### Owner-declared follow-up or deferred cleanup

- Confidence: candidate
- Skip when: The PR owner explicitly says the issue is a known follow-up, the behavior is not made worse by the current PR, and the comment is not about a high-risk area.
- Do not skip when: The agent is acting without owner input, the issue is medium/high severity product behavior, or deferring would merge a new regression.
- Example signal: "I'll worry about that later" or "we'll delete this eventually".

### Self-withdrawn or explicit false-positive rule comments

- Confidence: recurring
- Skip when: The comment body or a later Bugbot reply explicitly says the finding is withdrawn, compliant, or a false positive, and the agent can verify the relevant rule locally.
- Do not skip when: The only evidence is a human saying "false positive" on a high-risk issue without explanation.
- Example signal: A file-naming rule comment whose body says the file is already compliant.

## Ask by default

Do not auto-skip these categories, even if a previous PR dismissed something similar:

- Security, privacy, auth, billing, data retention, training-data, and permission-boundary findings.
- High-severity findings.
- Migration, schema, idempotency, concurrency, and cross-system behavior findings.
- Comments where the suggested fix is small and clearly reduces risk without changing product intent.

Historical data showed humans sometimes dismiss security/data-flow comments. Treat those as owner judgment calls, not team-wide skip rules.

## Candidate learnings from recent babysits

Append new candidate learnings here during or after babysitting when they look team-useful but not yet mature. Prefer promoting recurring candidates into the section above once several PRs confirm the pattern.

### Manual reimplementations of native browser behavior

- Confidence: candidate
- Skip when: Practically never. When a diff replaces native browser behavior with a manual equivalent (native sticky → JS-positioned clones, native scroll targeting → forwarded wheel/touch events, paint-order occlusion → masks/clip-path), Bugbot's logic-bug findings against that code have been consistently legitimate.
- Do not skip when: The finding concerns event-forwarding gaps (wheel deltaMode, touch pans, scroll-chaining at edges, tap slop), mask/clip hit-testing divergence, or observer-vs-React state timing races in such code. Default to fix.
- Example signal: "masks do not affect hit-testing", "overlay blocks wheel scroll", "ignores deltaMode", "runs in the IntersectionObserver callback before React applies state".
- Source: one sticky-occlusion PR: six Bugbot passes, roughly eighteen findings, every one fixed rather than dismissed.

### Contract-test drift claims are cheaply verifiable — run the test first

- Confidence: candidate
- Skip when: Never skip the verification itself; it costs one command. When a PR
  ships a contract test that pins protocol or documentation prose (regexes over
  a SKILL.md, snapshot of doc wording), and Bugbot claims "the test no longer
  matches the doc" (or vice versa), run that test on the PR tip before
  classifying. A red run confirms the claim empirically; a green run is a
  concrete disproof for the dismissal reply.
- Do not skip when: n/a — this is a verification shortcut, not a dismissal
  pattern. Note that repeat-pass lean-dismiss heuristics would misfire here:
  prose-pinning tests drift precisely BECAUSE earlier fix rounds edit the prose.
- Example signal: "Contract test omits the pre-fix wait" on a PR whose earlier
  fix commits reworded the pinned passage; the test run on the tip failed on
  exactly the cited assertion.
- Source: one prose-pinning PR with eight Bugbot passes; the claim was real on
  pass 7 despite every earlier pass being fixed-and-resolved.

### Stale security-review finding already fixed later in the same PR

- Confidence: candidate
- Skip when: An agentic security review (or similar) claims a missing authz/validation call, and the current PR tip clearly includes that exact gate (with tests), typically added in a later hardening commit after the review ran.
- Do not skip when: The cited helper is a no-op for the principal under discussion, the check runs after the side effect it guards, or coverage for the claimed principal is missing.
- Example signal: A HIGH "missing authorization check" finding while the exact guard is already called before the side effect on the tip.
- Source: one webhook-endpoint PR whose hardening commit postdated the review run.

### Widening a deliberately narrow error condition would mask the real error

- Confidence: candidate
- Skip when: The finding asks to broaden a narrow error condition (a specific
  `errno`, error code, or status class) into a catch-all, and that narrowness
  encodes a real distinction. The canonical shape is a dependency fallback
  gated on `ENOENT`: "binary is not installed" is a different situation from
  "the command ran and failed". Retrying on any non-zero exit would re-run a
  legitimate failure (not found, expired auth, network) against the fallback
  and then report the fallback's error, hiding the true one.
- Do not skip when: The narrow condition misses a case in the SAME category
  (another "binary unusable" errno such as `EACCES`, another transport-level
  failure), the unhandled path loses data or leaves partial state, or the retry
  is idempotent AND the original error is still surfaced.
- Example signal: "only retries when X fails with ENOENT … never tries the
  fallback even when a working Y exists", pointing at code whose fallback
  exists for a missing dependency rather than a failed operation.
- Source: one CLI-rename PR whose fallback existed for a missing binary rather
  than a failed command.

````
