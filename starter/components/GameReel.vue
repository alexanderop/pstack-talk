<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

type Cell = readonly [number, number]
type Piece = { color: string; cells: readonly Cell[] }
const shapes: readonly Piece[] = [
  { color: '#51ddf5', cells: [[0, 0], [0, 1], [0, 2], [0, 3]] },
  { color: '#b18aff', cells: [[1, 0], [0, 1], [1, 1], [2, 1]] },
  { color: '#ffb252', cells: [[2, 0], [0, 1], [1, 1], [2, 1]] },
  { color: '#ffdf64', cells: [[0, 0], [1, 0], [0, 1], [1, 1]] },
  { color: '#6be5ad', cells: [[1, 0], [2, 0], [0, 1], [1, 1]] },
  { color: '#6396ff', cells: [[0, 0], [0, 1], [1, 1], [2, 1]] },
  { color: '#ff6e97', cells: [[0, 0], [1, 0], [1, 1], [2, 1]] },
]
const order = [0, 1, 2, 3, 5, 4, 0, 6, 1, 3, 2, 0, 5, 6, 4]
const blank = (): string[][] => Array.from({ length: 20 }, () => Array<string>(10).fill(''))
function seed() {
  const grid = blank()
  const heights = [5, 6, 7, 6, 5, 6, 7, 7, 6, 0]
  heights.forEach((height, x) => {
    for (let y = 20 - height; y < 20; y++) grid[y][x] = shapes[(Math.floor(x / 2) + Math.floor(y / 2)) % shapes.length].color
  })
  return grid
}
const board = ref(seed())
const paused = ref(false)
const reducedMotion = ref(false)
const score = ref(12400)
const lines = ref(24)
const cleared = ref<number[]>([])
const sequence = ref(0)
const piece = ref<Piece>(shapes[0])
const position = ref({ x: 3, y: 0 })
const target = ref({ x: 9, y: 16 })
const landing = ref(false)
const nextPiece = computed(() => shapes[order[(sequence.value + 1) % order.length]])
const settledCells = computed(() => board.value.flatMap((row, y) => row.flatMap((color, x) => color ? [{ x, y, color }] : [])))
const activeCells = computed(() => piece.value.cells.map(([x, y]) => ({ x: x + position.value.x, y: y + position.value.y })))
const ghostCells = computed(() => piece.value.cells.map(([x, y]) => ({ x: x + target.value.x, y: y + target.value.y })))
function fits(cells: readonly Cell[], x: number, y: number) {
  return cells.every(([dx, dy]) => x + dx >= 0 && x + dx < 10 && y + dy >= 0 && y + dy < 20 && !board.value[y + dy][x + dx])
}
function rotate(cells: readonly Cell[]): Cell[] {
  const rotated: Cell[] = cells.map(([x, y]) => [-y, x])
  const minX = Math.min(...rotated.map(([x]) => x))
  return rotated.map(([x, y]) => [x - minX, y])
}
function plan() {
  const shape = shapes[order[sequence.value % order.length]]
  let cells = shape.cells
  let best = -Infinity
  let choice: { cells: readonly Cell[]; x: number; y: number } | undefined
  for (let rotation = 0; rotation < 4; rotation++) {
    for (let x = 0; x < 10; x++) {
      if (!fits(cells, x, 0)) continue
      let y = 0
      while (fits(cells, x, y + 1)) y++
      const grid = board.value.map(row => [...row])
      cells.forEach(([dx, dy]) => { grid[y + dy][x + dx] = shape.color })
      const full = grid.filter(row => row.every(Boolean)).length
      const remaining = grid.filter(row => !row.every(Boolean))
      while (remaining.length < 20) remaining.unshift(Array<string>(10).fill(''))
      let holes = 0
      const heights = Array.from({ length: 10 }, (_, col) => {
        const top = remaining.findIndex(row => Boolean(row[col]))
        if (top === -1) return 0
        for (let row = top; row < 20; row++) if (!remaining[row][col]) holes++
        return 20 - top
      })
      const roughness = heights.slice(1).reduce((sum, height, i) => sum + Math.abs(height - heights[i]), 0)
      const value = full * 14 - holes * 12 - heights.reduce((sum, h) => sum + h, 0) * .55 - roughness * .8
      if (value > best) { best = value; choice = { cells, x, y } }
    }
    cells = rotate(cells)
  }
  if (!choice) { board.value = seed(); sequence.value = 0; plan(); return }
  piece.value = { color: shape.color, cells: choice.cells }
  position.value = { x: 3, y: 0 }
  target.value = { x: choice.x, y: choice.y }
  landing.value = false
}
let tick = 0
let hold = 0
function advance() {
  if (hold > 0) { hold--; return }
  if (cleared.value.length) {
    const count = cleared.value.length
    board.value = board.value.filter((_, y) => !cleared.value.includes(y))
    while (board.value.length < 20) board.value.unshift(Array<string>(10).fill(''))
    score.value += [0, 100, 300, 500, 800][count] * 3
    lines.value += count
    cleared.value = []
    sequence.value++
    plan()
    return
  }
  if (landing.value) {
    piece.value.cells.forEach(([x, y]) => { board.value[y + position.value.y][x + position.value.x] = piece.value.color })
    cleared.value = board.value.flatMap((row, y) => row.every(Boolean) ? [y] : [])
    if (cleared.value.length) { hold = 4; return }
    sequence.value++
    plan()
    hold = 1
    return
  }
  tick++
  if (position.value.x !== target.value.x) position.value.x += Math.sign(target.value.x - position.value.x)
  else {
    position.value.y = Math.min(target.value.y, position.value.y + (tick % 6 === 0 ? 4 : 1))
    if (position.value.y === target.value.y) { landing.value = true; score.value += 24; hold = 1 }
  }
}
let timer: ReturnType<typeof setInterval> | undefined
let motion: MediaQueryList | undefined
const updateMotion = () => {
  reducedMotion.value = motion?.matches ?? false
  if (reducedMotion.value) paused.value = true
}
onMounted(() => {
  plan()
  motion = window.matchMedia('(prefers-reduced-motion: reduce)')
  updateMotion()
  motion.addEventListener('change', updateMotion)
  timer = setInterval(() => { if (!paused.value) advance() }, 70)
})
onUnmounted(() => { clearInterval(timer); motion?.removeEventListener('change', updateMotion) })
</script>

<template>
  <div class="game-reel">
    <div class="game-header"><span class="game-label">SCORE<strong>{{ score.toLocaleString('en-US') }}</strong></span><span class="live-dot" aria-hidden="true" /><button class="reel-toggle" :aria-label="paused ? 'Play game animation' : 'Pause game animation'" @click="paused = !paused">{{ paused ? '▶' : 'Ⅱ' }}</button></div>
    <svg viewBox="0 0 260 398" role="img" aria-label="Autoplaying Tetris game with falling tetrominoes, landing previews, and line clears.">
      <defs>
        <linearGradient id="tetris-board" x2="0" y2="1"><stop stop-color="#0a1020"/><stop offset="1" stop-color="#141c30"/></linearGradient>
        <pattern id="tetris-grid" width="19" height="19" patternUnits="userSpaceOnUse"><path d="M19 0H0V19" fill="none" stroke="#b7caff" stroke-opacity=".055" stroke-width=".6"/></pattern>
      </defs>
      <g transform="translate(14 4)">
        <rect width="190" height="380" fill="url(#tetris-board)" stroke="#ffffff18" />
        <rect width="190" height="380" fill="url(#tetris-grid)" />
        <g v-for="cell in ghostCells" :key="`ghost-${cell.x}-${cell.y}`"><rect :x="cell.x * 19 + 1" :y="cell.y * 19 + 1" width="17" height="17" rx="1" :fill="piece.color" fill-opacity=".07" :stroke="piece.color" stroke-opacity=".4" stroke-width=".8" /></g>
        <g v-for="cell in settledCells" :key="`${cell.x}-${cell.y}`" :transform="`translate(${cell.x * 19} ${cell.y * 19})`">
          <rect x=".7" y=".7" width="17.6" height="17.6" rx="1.2" :fill="cell.color" />
          <path d="M2 16V2H16" fill="none" stroke="white" stroke-opacity=".4" stroke-width="1.2"/><path d="M3 17H17V3" fill="none" stroke="#000" stroke-opacity=".23" stroke-width="1.2"/>
          <rect x="4" y="4" width="11" height="11" rx=".5" fill="#fff" fill-opacity=".07" />
        </g>
        <g v-if="!cleared.length" :class="{ 'piece-lock': landing }">
          <g v-for="cell in activeCells" :key="`active-${cell.x}-${cell.y}`" :transform="`translate(${cell.x * 19} ${cell.y * 19})`">
            <rect x=".7" y=".7" width="17.6" height="17.6" rx="1.2" :fill="piece.color"/><path d="M2 16V2H16" fill="none" stroke="white" stroke-opacity=".6" stroke-width="1.2"/><path d="M3 17H17V3" fill="none" stroke="#000" stroke-opacity=".23" stroke-width="1.2"/>
          </g>
        </g>
        <rect v-for="row in cleared" :key="`clear-${row}`" class="clear-flash" x="0" :y="row * 19" width="190" height="19" fill="#e0faff" />
        <g v-if="cleared.length" class="clear-message"><rect x="24" y="142" width="142" height="50" rx="5" fill="#10182eee"/><text x="95" y="162" text-anchor="middle" fill="#fff" font-size="14" font-weight="800" letter-spacing="2">{{ cleared.length === 4 ? 'TETRIS' : `${cleared.length} LINE${cleared.length > 1 ? 'S' : ''}` }}</text><text x="95" y="181" text-anchor="middle" fill="#71e6f6" font-size="12">+{{ [0, 100, 300, 500, 800][cleared.length] * 3 }}</text></g>
      </g>
      <text x="213" y="15" class="side-label">NEXT</text>
      <g transform="translate(213 28)"><rect v-for="([x, y], i) in nextPiece.cells" :key="i" :x="x * 10" :y="y * 10" width="9" height="9" rx="1" :fill="nextPiece.color"/></g>
      <text x="213" y="111" class="side-label">LEVEL</text><text x="213" y="132" class="side-value">03</text>
      <text x="213" y="166" class="side-label">LINES</text><text x="213" y="187" class="side-value">{{ lines }}</text>
      <path d="M213 216H245" stroke="#ffffff15"/><text x="213" y="235" class="side-label">AUTO</text>
    </svg>
    <div class="game-footer"><span>MARATHON</span><span>∞</span></div>
  </div>
</template>

<style scoped>
.game-reel { width: 260px; height: 462px; overflow: hidden; border-radius: 10px; border: 1px solid #8293c12e; background: linear-gradient(145deg, #202940, #101726); box-shadow: 0 20px 50px #0005, inset 0 1px 0 #ffffff0d; font-family: 'SFMono-Regular', Consolas, monospace; }
.game-header { height: 45px; display: flex; align-items: center; padding: 0 14px; gap: 10px; }
.game-label { font-size: 8px; letter-spacing: 1.4px; color: #8996b4; display: flex; align-items: baseline; gap: 12px; }
.game-label strong { color: #f1f5ff; font-size: 19px; font-weight: 600; letter-spacing: 1px; }
.live-dot { margin-left: auto; width: 4px; height: 4px; border-radius: 50%; background: #6be5ad; box-shadow: 0 0 8px #6be5ad80; }
.reel-toggle { border: 0; color: #a0acc5; background: none; font-size: 13px; padding: 4px; cursor: pointer; }
.reel-toggle:focus-visible { outline: 2px solid #51ddf5; outline-offset: 2px; }
svg { display: block; width: 100%; }
.side-label { fill: #7b8baa; font-size: 6.5px; letter-spacing: .8px; }
.side-value { fill: #e2eafa; font-size: 16px; }
.game-footer { display: flex; justify-content: space-between; padding: 0 14px; color: #7b8baa; font-size: 7px; letter-spacing: 1.8px; }
.piece-lock { filter: brightness(1.35); }
.clear-flash { animation: line-flash .35s ease-out both; }
@keyframes line-flash { from { opacity: .95; } to { opacity: .1; } }
@media (prefers-reduced-motion: reduce) { .clear-flash { animation: none; } }
</style>
