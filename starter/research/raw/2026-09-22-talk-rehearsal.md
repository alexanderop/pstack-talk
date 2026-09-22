---
kind: file
title: Pstack talk rehearsal — Königsberger Weg 2
author: Alexander Opalic
publisher: personal recording
url: local recording supplied by the presenter
published: 2026-09-22
collected: 2026-09-22
status: complete
---

# Pstack talk rehearsal

Source: the presenter’s supplied Voice Memos export, `Königsberger Weg 2.m4a`; retained as `2026-09-22-talk-rehearsal.m4a` beside this capture. Duration: 950.272 seconds (15:50). Transcribed locally with mlx-whisper and the cached `mlx-community/whisper-base-mlx` model, with automatic language detection (English).

This is an automatic transcript, not a manually verified verbatim transcription. Preserve recognition errors in this source; spellings in derived speaker cues are normalized against the existing deck. In particular, pstack, poteto-mode, playbooks, agentic coding, TypeScript, Vue, and create-verification-skill have noisy transcriptions. Unclear personal details are not carried into the notes. Transcript timestamps are approximate.

The rehearsal covers the opening through feature-map maintenance. It does not cover the final planning slide. The recording duration differs from the existing 11:20 slide timing target; the cue revision preserves that target rather than presenting it as measured delivery time.

## Automatic transcript

[00:00–00:15] Okay, hello everyone. I hope you had a good day so far. And you have enough energy to

[00:15–00:24] listen to me for 20 minutes yapping for a joint recording. So my name is Alex and I'm

[00:24–00:35] a college last year. I gave a talk also at the TypeScript meter. Also regarding AI, a bit

[00:35–00:42] how I used AI and I think since then many things have changed. The model's got crazy good,

[00:43–00:55] harnesses got good everything improved drastically. But if I look how we use AI at work or

[00:55–01:04] also if I talk with other developers, I still don't have the feeling that most projects have a setup

[01:04–01:14] were if your B.A or designer has an idea, they can just delegate it to an agent and after 30 minutes

[01:14–01:24] or one hour, they have their new feature also with good code. And I think for the next, I don't know

[01:24–01:34] how long we'll take one, two, three, yes, the main goal for us engineers is to improve the

[01:34–01:43] adrenetic workflow that also other people on your team could contribute. Now before we talk

[01:43–01:51] about Pstack, what other free foundations that we need that agents can create a pull request and

[01:51–01:59] maybe also where we don't have to even read the pull request. The first important piece is

[01:59–02:10] verification. Your agent needs to be able to use your app and to end. On our front end project,

[02:10–02:18] this means for example, fear for e-commerce sites that agent can start the website, he can

[02:18–02:25] click around, buy a product, put it to the checkout and also click and see the checkout worked.

[02:27–02:37] Then also since these models are not really trained on how to write good code, but most

[02:37–02:46] layerboards solving problems, we need to have a workflow that enforces engineering principles.

[02:47–02:54] And there is also for Pstack, could help us if you don't know Pstack, maybe you know superpowers

[02:54–03:04] or pokebox skills, whatever, all the same. And the last step and this probably takes the most time,

[03:04–03:11] the most complete for profit projectors that the code places are also memory. If you have a project

[03:12–03:18] your test done is, the agent will read your file and will just copy paste your style.

[03:19–03:27] So in a perfect word, you have a code base where everything is written in a good way and agent

[03:27–03:37] will just use your patterns. Now, I said before that, if it was just say please do X,

[03:37–03:44] A and add a new feature, these models are good to do it, but this doesn't mean that the quality

[03:44–03:51] will also be good. This one, all these adrenctic workflows, they always need to have some kind of

[03:51–03:56] plan step, implementation step, a review step and also a very file step.

[03:59–04:07] And if you look up superpowers, pokebox skills, they are follow this pattern.

[04:08–04:16] Now, before we talk about Pstack, also import what does a plugin? I don't know who

[04:16–04:20] of you knows what a plugin is when it comes to adrenctic coding, please raise your hand.

[04:23–04:31] Okay, some of you know it. But the idea is with agents, we have new primitive

[04:31–04:39] like skills, agents and MCPs and a plugin is just a way to ship the things and then other people

[04:39–04:49] can install it. So Pstack is in the end a plugin that helps us for adrenctic work.

[04:51–04:58] Now how does Pstack organize adrenctic work? First of all, if you use skills, so I hope you know,

[04:58–05:05] but skills are that it also has a concept like playbox. So playbox basically

[05:06–05:14] does drive if you want to implement a feature or the backup, backup which steps the agent should follow.

[05:15–05:19] And yet these steps are also something that I would develop or do.

[05:20–05:30] And then the last ingredient is something called principles and principles are bit like a

[05:30–05:38] stigat. So one principle could also be for example about TypeScript that agent should model

[05:38–05:46] something first and this principle is a stigat how to write good TypeScript. Another principle

[05:47–05:54] could be proof that it works. So this means that agent needs to verify after he's done with something

[05:54–06:04] that the request works and to it. So what like about potatomot? So here I used codex is

[06:04–06:11] just one skill and if you invoke this skill then the agent kind of understands what potatomot is.

[06:12–06:20] What these playbox are, what these features are, it's like heads into route different requests.

[06:21–06:27] So you don't need to really know exactly how potatomot works, you dress and what potatomot,

[06:27–06:36] and then you either put your request for your feature or maybe you need your prototype or maybe

[06:36–06:42] you just want to understand how something works or you need documentation. That's what you can do.

[06:44–06:53] So for example if we want to add Dart mode to our feature we would invoke potatomot,

[06:53–07:01] what is called want to edit, that another whole agent will then get the map done file of the

[07:01–07:05] playbook that describes how you should do implementation because I know this is a

[07:06–07:15] yes it's up and that's the sub agents and so on. And then also work file. So this is the rough idea.

[07:17–07:27] Now I try to have a kind of debugger to make it more obvious what happens on the hood.

[07:27–07:35] So we invoke the potatomot skill. That's the first thing that we do. How important that you need to

[07:35–07:42] write potatomot skill and it will not trigger automatically. And then we have the potatomot here,

[07:42–07:50] we have a request at a team preference that survives reloads or just a feature request can be

[07:50–07:57] anything. And then at potatomot the sub-marked and file there we turn the agent to match the task

[07:57–08:06] to our playbook below, open its file, copy its steps and rather than. Then you see that it has

[08:06–08:14] kind of different features and then we say if you want to change behavior then you find the

[08:14–08:21] information in this map and file. If there would be a back request then it would be a different

[08:21–08:32] feature for a back or also there's a playbook for refactor. So the main idea is to kind of make a

[08:33–08:40] step-by-step checklist about all different things you could do and then the agent will reuse that

[08:40–08:50] and he will always work in this way. Then agent will read the feature, will get us into its context

[08:52–08:59] and then feature explains that potatomot has a how skill that basically means that agent should

[09:02–09:09] use some agents, the sub-agents to explore how it works. It's a has an architect skill.

[09:09–09:17] Then the idea is that before he implements something he will spin up two other agents that will

[09:17–09:23] do a discussion kind of what the best architectures and then there will be one agent who's doing the

[09:23–09:31] touch. So there of course the idea is if I have more compute I get a better architecture.

[09:32–09:40] This is maybe also different than madpukerxkits that we don't want to think so much or spend so much

[09:40–09:46] time and attention ourselves to know what is the best architecture agent should find out.

[09:49–09:54] Of course it could also be more in the loop there. It could also just spend more time on

[09:54–09:59] things out yourself but the default feature of high-box is like that.

[10:01–10:05] And then once the architecture is done he will delegate the

[10:08–10:11] code wagging to a sub-agent.

[10:14–10:19] Then as a set there are different skits so most of the time when a new feature there's one important

[10:19–10:26] principle called model domain and this basically means before you start the implementation

[10:27–10:33] you should use touch script and describe what you want to build. So this is important principle

[10:36–10:41] and yeah we have a type model instead of loose parameters or response shape assumptions

[10:42–10:50] and yeah so I also like this before I was also how I was working on features that I first

[10:50–10:58] always thought about how would my domain look how would the type structure be before I even wrote

[10:58–11:05] any line of code. And with the principles being forced the same idea to an agent.

[11:06–11:18] And then the agent will write some code and then there's also one step in the playbook where we

[11:18–11:25] have a review and this example the lead agent will then do a review we'll see if everything was

[11:25–11:30] implemented if there's anything wrong and we'll fix it.

[11:34–11:41] Then the last step also principle is the idea of proof that it works the verify principle.

[11:42–11:49] And once the agent is done was planning implementation review he will then spend some time

[11:50–11:56] and also produce screenshots and videos for us to check if the feature was implemented.

[11:57–12:05] And there if you use cloud agents for example this could also be part of your pipeline that you

[12:05–12:16] automatically upload it. And yeah once this is done we have implemented our feature.

[12:16–12:24] Now the last step the verification skill I think this is something that even if you don't want to use

[12:24–12:37] piece stack every project should have now. So the creator of piece stack has a skill that helps us

[12:37–12:43] to create a verification skill. And what is the idea there? So every project has different features

[12:43–12:50] and an agent needs to know once he is changing something what is even the feature and that he can

[12:50–12:59] verify things by himself. Now on the weekends so maybe a short comment lately I've used my tokens

[12:59–13:06] mostly to generate some video games because it's quite quite fun to read and I'm always a fan of

[13:07–13:15] these tower defense games and I created one game with the review of course because it's the best

[13:15–13:27] JavaScript framework in the world. And yeah it has different features so I told the agent was the

[13:27–13:34] skill, query certification skill, then it created other agent skills that's very far outpost

[13:34–13:41] and still skill and it has now all the features. So my game has some missions and how the combat system

[13:41–13:51] works, how defense works, how control works, everything also a QA engineer would maybe need to

[13:52–14:01] verify that the app works. And the feature maps can look something like that so yeah it doesn't

[14:01–14:07] does matter so much what's what's in there but I hope you get the address that for ecommerce

[14:07–14:13] website we also have different features and then we need to describe what is even this feature and

[14:13–14:22] give the agent some context. And then he clicks around he starts the real app with the browser he's

[14:22–14:30] using computers because he was codex and then you see that he creates a tower then he can upgrade the

[14:30–14:40] tower. Yeah then he can also he's also testing that if he can sell the tower and with this he

[14:40–14:48] verifies end to end by himself that it works. And my original prompt there was just verifying to a

[14:48–14:57] small test that this game works. So of course this depends on the feature you use but I hope you

[14:57–15:05] get the idea that we give the agent a skill also a context about the feature that exists and

[15:05–15:19] then he can verify our app like a good QA engineer. And of course also potato edit a skill to maintain

[15:19–15:25] the feature map because the more features we add soon it will be outdated. So there's a skill.

[15:26–15:33] If you have enough tokens you could also have a kind of crop job that once per day will update

[15:34–15:38] your verification skill and we match everything into mine.
