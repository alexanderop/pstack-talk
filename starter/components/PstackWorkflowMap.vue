<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  stage: number
  click: number
}>()

const nodes = ['Read request', 'Choose Feature playbook', 'Plan and implement', 'Verify']
const activeStage = computed(() => {
  if (props.stage === 4 && props.click >= 2) return 4
  return [1, 2, 3, 3, 4][props.stage - 1] ?? 1
})
const detail = computed(() => {
  if (props.stage === 4) return ['Worker implements', 'Lead reviews', 'Lead verifies'][Math.min(props.click, 2)]
  if (props.stage === 5) return ['Define the check', 'Switch theme → reload', 'Fix and recheck if needed'][Math.min(props.click, 2)]
  return ['New behavior → Feature', 'Follow the playbook', 'Define the preference'][props.stage - 1]
})
const principle = computed(() => {
  if (props.stage === 3) return 'Model the Domain'
  if (activeStage.value === 4) return 'Prove It Works'
  return null
})
</script>

<template>
  <section class="workflow-map" aria-label="Simplified feature walkthrough">
    <h2>SIMPLIFIED WALKTHROUGH</h2>
    <svg viewBox="0 0 180 132" role="img" :aria-label="`Current step: ${nodes[activeStage - 1]}. ${detail}`">
      <g aria-hidden="true">
        <path v-for="i in 3" :key="`edge-${i}`" :d="`M 80 ${i * 30 + 4} v 6 m -3 -3 l 3 3 3 -3`" class="edge" />
        <g v-for="(label, index) in nodes" :key="label" :class="['node', { current: activeStage === index + 1 }]">
          <rect x="10" :y="index * 30 + 10" width="160" height="24" rx="5" />
          <circle cx="21" :cy="index * 30 + 22" r="3" />
          <text x="31" :y="index * 30 + 26">{{ label }}</text>
        </g>
      </g>
    </svg>
    <p>{{ detail }}</p>
    <aside v-if="principle" class="principle"><span>Supporting principle</span><strong>{{ principle }}</strong></aside>
  </section>
</template>

<style scoped>
.workflow-map { padding: 6px 8px 6px; border-top: 1px solid rgba(171,75,153,.2); }
h2 { margin: 0 0 2px 4px; font: 600 10px 'Geist Mono', monospace; letter-spacing: .1em; color: rgba(234,237,243,.55); }
svg { display: block; width: 100%; }
.node rect { fill: rgba(52,63,96,.18); stroke: rgba(234,237,243,.18); }
.node text { fill: rgba(234,237,243,.6); font: 9px 'Geist Mono', monospace; }
.node circle { fill: transparent; }
.node.current rect { fill: rgba(255,107,237,.13); stroke: #ff6bed; }
.node.current text { fill: #ff6bed; font-weight: 600; }
.node.current circle { fill: #ff6bed; }
.edge { fill: none; stroke: rgba(234,237,243,.3); stroke-width: 1.2; }
p { margin: -4px 0 0; min-height: 18px; font: 10px/1.3 'Geist Mono', monospace; color: #ff6bed; text-align: center; }
.principle { margin: 4px 2px 0; padding: 7px 8px; border-left: 2px solid #ff6bed; background: rgba(255,107,237,.06); }
.principle span { display: block; font-size: 9px; color: rgba(234,237,243,.65); }
.principle strong { display: block; margin-top: 3px; font-size: 11px; color: #ff6bed; }
</style>
