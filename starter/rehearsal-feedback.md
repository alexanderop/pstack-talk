# Rehearsal feedback — September 22

Based on the supplied 15:50 recording, a local automatic transcript, and waveform measurements. Timestamps are approximate. This is transcript and acoustic analysis, not a listening-based assessment of vocal tone, accent, or confidence. Recognition errors are not evidence of mispronunciation.

## The most useful change

Give the verification example more of the audience’s attention. The file-by-file walkthrough occupies roughly 07:18–12:17, almost a third of the recording. The central takeaway arrives at 12:17, leaving about three minutes for the diagram, game, feature map, proof, reuse, and maintenance combined.

Try limiting the source walkthrough to three beats: **route the request → define the domain → prove the result**. Keep the detailed files on screen, but explain one decision at each stop. Aim to recover two minutes for the game example and a deliberate ending. These are editorial suggestions; the visible slides have not been changed.

## What to keep

- The opening contrast: models and tools improved, but dependable team workflows still need engineering.
- “The codebase is also memory” around 03:04. A memorable explanation of why existing patterns matter.
- The checkout example around 02:10. It gives non-game developers a familiar verification journey.
- Your domain-first habit around 10:42. It connects agent instructions to how you already work.
- The tower-defense story and Vue joke around 13:00. They give the technical example a personal reason to exist.

## Specific edits for the next rehearsal

| Where | Observation from the transcript | What to try |
| --- | --- | --- |
| 00:00–01:43 | Welcome, last year’s talk, model improvements, team contribution, and a prediction all precede the foundations. | Get to the problem in 30–45 seconds. Remove the speculative “one, two, three years” aside. |
| 02:27–02:47 | The argument about how models are trained is broader than the evidence in the talk. | Say: “Solving the task does not automatically give us maintainable code. We need engineering practices around it.” |
| 03:04–03:37 | “Codebase as memory” is followed by several explanations. | Land the phrase, pause, give one example: “If the existing tests are messy, those are the patterns the next agent sees.” |
| 04:08–04:23 | You ask for raised hands and leave a gap. | Keep this audience interaction. In the live talk, respond to the actual hands before continuing. |
| 07:18–12:17 | The walkthrough explains routing, subagents, architecture, principles, review, and verification at length. | One sentence per highlighted instruction; spend the saved time on what the agent actually observed in the game. |
| 08:52–09:59 | Architecture exploration leads into a comparison with other workflows and an aside about human involvement. | Keep the concrete purpose: “Explore alternatives before implementation.” More agents are not evidence of a better design by themselves. |
| 13:52–14:13 | The feature-map explanation includes “it doesn’t matter so much what’s in there.” | Replace with: “Look at the structure: action, expected result, and gotcha.” Point to one row. |
| 14:48–15:06 | The smoke-test request follows the complete build/upgrade/sale proof, which can blur two sessions. | Say: “Those screenshots came from generation. In a later session, I reused the skill with this short request.” Retain the later run’s coverage limit. |
| 15:19–15:38 | Maintenance and a possible scheduled job finish the recording without a clear close. | Mark scheduling as optional, then finish with one action: “Pick one feature. Give your agent a way to reach it, check it, and keep the evidence.” |

## Voice and delivery

**Pace:** approximately 1,927 automatically recognized words over 15:50, or 122 words per minute including pauses. The opening is roughly 107 wpm; the final verification section roughly 131 wpm. These estimates suggest that speeding up is a poor first fix. Shorten explanations and reserve space for the most important example. Word counts and section boundaries inherit transcription errors.

**Pauses:** a fixed -35 dBFS detector found 172 internal low-level intervals lasting at least 0.7 seconds, totaling about 215 seconds. That is not a precise measure of hesitation: quiet speech, breaths, and slide navigation can count too. One 2.7-second gap around 04:21 follows the raised-hands question and has a clear purpose. Review the gaps around 09:47 and 10:06 when rehearsing the architecture/delegation transition; use a prepared bridge if you were searching for the next point. Do not try to eliminate all pauses.

**Sentence shape:** the transcript frequently chains ideas with “and then,” “so,” and “basically.” The practical improvement is to end a sentence before starting the next step. For example: “The worker implements the feature. [Pause] The lead reviews the diff. [Pause] Then it checks the running app.” This gives the audience a clear sequence and gives you natural breathing points.

**Emphasis to rehearse:** choose a few contrasts instead of trying to sound energetic throughout:

- “The codebase is also **memory**.” [Pause] “Agents copy the patterns they find.”
- “A feature map gives **context**. Tools give **control**.” [Pause] “Together, they let the agent check the result.”
- “The worker says it’s done.” [Pause] “Now **show the evidence**.”

These are suggested delivery markings, not claims that the recording sounded flat. Pitch variation, warmth, projection, and perceived confidence have not been evaluated by listening.

**Recording level:** the decoded mono signal peaks at approximately -0.38 dBFS, with overall RMS around -22.9 dBFS. No decoded samples reach 99% of full scale. There is little peak headroom, so do not simply raise the recording gain. These measurements do not establish microphone quality, absence of earlier clipping, or how loudly you will be heard in a room.

## A focused practice pass

1. Say the opening in 30–45 seconds: what improved, what is still missing, what the audience will learn.
2. Rehearse the five source slides with one main decision per slide. Aim for about three minutes combined.
3. Deliver the game example with deliberate clicks: build, upgrade, sale offer, confirmed sale. Name the observed result each time.
4. Finish with the one-feature verification action above. Pause before saying thank you.

The existing deck has an 11:20 timing target; this recording lasts 15:50 and does not cover the final planning slide. Decide the actual slot before treating either duration as the target. The revised notes preserve the deck’s existing timing labels and explicitly describe them as planned time.

## Sources and method

- [Automatic rehearsal transcript](research/raw/2026-09-22-talk-rehearsal.md)
- [Original recording](research/raw/2026-09-22-talk-rehearsal.m4a)
- [Existing evidence distinguishing generation and reuse](research/raw/2026-09-22-outpost-zero-verification.md)
- Audio decoded with FFmpeg to mono PCM at 16 kHz; 100 ms RMS frames and peak measured locally. Silence detection used -35 dBFS and a minimum 0.7-second duration. No audio was sent to a transcription service.
