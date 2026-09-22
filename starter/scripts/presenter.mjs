import { readFile, writeFile, access } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'
import { parse } from '@slidev/parser'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const { slides } = await parse(await readFile(resolve(root, 'slides.md'), 'utf8'))
const errors = []
let elapsed = 0
let mainCount = 0
let words = 0
const sections = []

function seconds(value) {
  const [minutes, remainder] = value.split(':').map(Number)
  return minutes * 60 + remainder
}

for (const [index, slide] of slides.entries()) {
  const note = slide.note?.trim() ?? ''
  const title = slide.title || slide.content.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1]?.replace(/<[^>]*>/g, ' ') || `Slide ${index + 1}`
  if (!note) errors.push(`Slide ${index + 1} has no speaker notes`)
  const timing = note.match(/^TIME: (\d{2}:\d{2})–(\d{2}:\d{2}) \((\d+)s\)/)
  const backup = note.startsWith('TIME: BACKUP')
  const ending = note.startsWith('TIME: END')
  const cover = index === 0 && note.startsWith('TIME: COVER')
  if (timing) {
    const start = seconds(timing[1])
    const end = seconds(timing[2])
    if (start !== elapsed || end - start !== Number(timing[3])) errors.push(`Slide ${index + 1} has inconsistent timing`)
    elapsed = end
    mainCount++
    const spoken = note.replace(/^TIME:.*$/m, '').replace(/^SOURCE:.*$/gm, '').replace(/\[[^\]]*\]/g, '')
    words += spoken.split(/\s+/).filter(Boolean).length
  } else if (!backup && !ending && !cover) errors.push(`Slide ${index + 1} has no valid timing`)
  for (const match of slide.content.matchAll(/src="(\/[^\"]+)"/g)) {
    try { await access(resolve(root, 'public', match[1].slice(1))) }
    catch { errors.push(`Slide ${index + 1} is missing ${match[1]}`) }
  }
  sections.push(`## ${index + 1}. ${title}\n\n${note}\n`)
}

if (elapsed !== 760) errors.push(`Main talk totals ${elapsed}s instead of 760s`)
if (mainCount !== 25 || slides.length !== 27 || !slides[0]?.note?.trim().startsWith('TIME: COVER') || !slides.at(-1)?.note?.trim().startsWith('TIME: END')) errors.push(`Expected 25 timed slides, one untimed cover and one untimed closing slide, found ${mainCount}/${slides.length}`)

const output = `# ${slides[0].frontmatter.title}\n\nEnglish speaker notes based on the September 22 rehearsal. ${mainCount} main slides, 12 minutes 40 seconds planned, plus an untimed event cover and dancing closing slide and no backup slides. Short bullet cues, not a script. The 12:40 timing includes the added skills, composition and repository slides; the supplied rehearsal recording lasts 15:50. The skills slide and resource summary were added after the recording.\n\nGenerated from the native Slidev notes in slides.md. Edit slides.md, then run pnpm notes. Press P in Slidev to open presenter mode.\n\n${sections.join('\n')}`

if (process.argv.includes('--check')) {
  const current = await readFile(resolve(root, 'presenter.md'), 'utf8').catch(() => '')
  if (current !== output) errors.push('presenter.md is stale; run pnpm notes')
} else {
  await writeFile(resolve(root, 'presenter.md'), output)
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
} else {
  console.log(`${mainCount} main slides + ${slides.length - mainCount} untimed slides; ${elapsed}s; approximately ${words} cue words. Notes and image references complete.`)
}
