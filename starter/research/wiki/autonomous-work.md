# Autonomous work and auditable decisions

## Current synthesis

An unattended task needs a concrete goal, a finish condition that can pass or fail, an isolated worktree, explicit permissions and an escape hatch. A duration alone cannot establish completion. The guide combines phased work with a decision log so the human can inspect consequential choices afterward. This extends the talk's verification lesson to longer runs; it is a prescribed workflow, not evidence that a particular overnight run succeeded. [Guide: overnight work](../raw/pstack-guide.md#07-overnightmd)

## Claims and evidence

- Work to be reviewed after the user steps away routes through `/figure-it-out` for phases and `/show-me-your-work` for a decision trail. The guide's `/loop` is a Cursor wake mechanism, not a pstack skill or a portable guarantee of continued execution. [Routing](../raw/pstack-guide.md#02-poteto-modemd), [overnight](../raw/pstack-guide.md#07-overnightmd)
- Each iteration makes a justified change, checks the real artifact, retains progress or discards an unsuccessful change, and records a decision. A plateau should trigger a new approach without quietly weakening the finish condition. [Overnight loop](../raw/pstack-guide.md#07-overnightmd)
- The decision TSV records time, phase, decision, reason, evidence pointer and result. It lives at `decisions.tsv` or `.audit/<task-slug>.tsv` and stays local by default. The morning summary uses an independent reviewer, preferably from another model family, and ends with an Attention section. [Audit](../raw/pstack-guide.md#07-overnightmd)
- Autopilot-full targets independent PRs through merge, with an owner and fresh verifier rounds at the code-ready head and after patch-changing pushes. A clean verdict must cover the patch that actually merges. [Queue workflows](../raw/pstack-guide.md#07-overnightmd)
- Autopilot-stack produces a verified linear stack without shipping; the human reviews and lands it. Orchestrate is for multi-day programs: a standing coordinator prepares briefs and coordinates agents rather than writing code itself. [Queue and program workflows](../raw/pstack-guide.md#07-overnightmd)
- Isolation precedes coordination: separate attempts use separate worktrees. Cleanup classifies merge state, dirty work and active chats before pruning; uncommitted work calls for a human decision. [Worktrees](../raw/pstack-guide.md#02-poteto-modemd)

## A reusable handoff

This example is adapted from the guide. The exact permission to commit or merge must be deliberate. [Contract](../raw/pstack-guide.md#07-overnightmd)

```text
/poteto-mode migrate every caller to the new parser in a fresh worktree off <base>.
Done means zero old callers, all parser fixtures pass, and the old API is deleted.
Keep a decision log. You may commit; do not merge.
If blocked, record the failed checks, what you tried, and what would unblock the work.
```

## Tensions and open questions

The guide's “im going to bed” shorthand assumes the surrounding contract already establishes the goal and authority. It is not evidence that every harness can wake itself, continue indefinitely, or merge without explicit authorization. Babysit stopping at merge-ready and Shipping requiring a separate request remain meaningful boundaries. [Overnight contract](../raw/pstack-guide.md#07-overnightmd), [shipping](../raw/pstack-guide.md#06-verify-and-shipmd)

Which installed harness mechanisms should demonstrate unattended work in a future talk remains open. No overnight run, queue merge, or morning audit was executed for this ingest. The current talk can use the contract as optional follow-up without implying measured autonomy or guaranteed correctness.

## Sources

- [Complete pstack guide, captured September 23](../raw/pstack-guide.md)
- [Related verification synthesis](project-verification.md)
- [Related workflow synthesis](agent-workflow.md)
