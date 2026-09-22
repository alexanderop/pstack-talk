# Learning from pstack

The talk from `../pstack-starfall` adapted to this workspace’s brand theme and utilities addon. The source repository is unchanged.

24 slides: an untimed event cover, 22 timed slides planned for 12 minutes, and an untimed dancing finale for questions. Speaker notes and timings live in `slides.md`.

From the workspace root:

```bash
pnpm install
pnpm dev
pnpm build
pnpm notes
pnpm notes:check
pnpm research:check
pnpm export
```

Press **P** in Slidev for presenter mode. `presenter.md` is generated from the slide notes; regenerate it with `pnpm notes` after editing them.

- `slides.md` — active talk, using the shared theme, fonts, layouts and footer.
- `styles/index.css` — sizing for diagrams and screenshots; brand styling remains in the theme.
- `public/` — referenced artwork and diagrams; SVG colors match the brand palette. The original illustrated cover is retained in `public/covers/`.
- `research/` — supplied research, source excerpts, prompt records and earlier narrative archives.
- `research/raw/` — original slide and provenance captures.
- `examples/components.md` — original starter demonstration, retained as an authoring reference.

The four-stage loop and recommendation to fork pstack are the presenter’s framing. This migration preserves the supplied research; it does not refresh the cited pstack snapshot.

## Published talk

- Slides: https://pstack-talk.vercel.app
- PDF: https://pstack-talk.vercel.app/pstack-talk.pdf
- Secret resource gist: https://gist.github.com/alexanderop/743bbd811f2a56063fb79d3b3847ec27
- Editable resource text: `resources/pstack-talk.md`

The closing summary and dancing finale link to the same gist. The PDF includes every click state (43 pages for 24 slides).

To refresh the downloadable PDF before building:

```bash
pnpm --filter slidev-starter exec playwright install chromium
pnpm --filter slidev-starter exec slidev export --output public/pstack-talk.pdf --with-clicks --dark --wait 500
pnpm build
```

If using an existing Chrome installation, pass `--executable-path` to `slidev export`. The checked-in root `vercel.json` builds the workspace and serves `starter/dist`, including the PDF. The initial publication uploaded only the built static directory. Refresh the PDF whenever slides change.

To update the resource gist:

```bash
gh gist edit 743bbd811f2a56063fb79d3b3847ec27 -f pstack-talk.md starter/resources/pstack-talk.md
```
