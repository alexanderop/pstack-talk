<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { computed, ref, watch } from 'vue'

const { $clicks, $nav, $page } = useSlideContext()
const active = computed(() => $nav.value.currentPage === $page.value && $clicks.value === 1)
const finished = ref(false)
watch(active, () => { finished.value = false })
</script>

<template>
  <aside
    v-if="active && !finished"
    class="hamcrab-cameo"
    aria-label="Hamcrab's interruption"
    @animationend.self="finished = true"
  >
    <div class="hamcrab-bubble" role="status">
      <span>Hey, I just wanted to mention that</span>
      <strong>Vue is better than React.</strong>
    </div>
    <div
      class="hamcrab-wizard"
      role="img"
      aria-label="Wizard Hamcrab waves hello, talks, flourishes his wand, and waves goodbye."
    />
  </aside>
</template>

<style scoped>
.hamcrab-cameo {
  position: absolute;
  right: 18px;
  bottom: 18px;
  z-index: 30;
  width: 400px;
  height: 425px;
  pointer-events: none;
  animation: wizard-visit 8.5s both;
}
.hamcrab-wizard {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 260px;
  height: 260px;
  background-image: url('/sprites/hamcrab-wizard-cameo.png');
  background-size: 400% 400%;
  background-repeat: no-repeat;
  animation: wizard-poses 8.5s steps(1, end) both;
  filter: drop-shadow(0 10px 14px #0008);
}
.hamcrab-bubble {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 365px;
  padding: 22px 26px;
  border: 3px solid #a78bfa;
  border-radius: 24px;
  background: #fffaf0;
  color: #242033;
  box-shadow: 0 12px 30px #0005;
  font-size: 23px;
  line-height: 1.35;
  animation: wizard-speech 8.5s both;
}
.hamcrab-bubble::after {
  content: '';
  position: absolute;
  right: 75px;
  bottom: -14px;
  width: 24px;
  height: 24px;
  background: #fffaf0;
  border-right: 3px solid #a78bfa;
  border-bottom: 3px solid #a78bfa;
  transform: rotate(45deg);
}
.hamcrab-bubble strong {
  display: block;
  margin-top: 8px;
  color: #087c55;
  font-size: 28px;
}
@keyframes wizard-visit {
  0% { transform: translateX(115%) rotate(8deg); opacity: 0; }
  9%, 88% { transform: translateX(0) rotate(0); opacity: 1; }
  100% { transform: translateX(115%) rotate(-8deg); opacity: 0; }
}
@keyframes wizard-speech {
  0%, 10% { opacity: 0; transform: scale(.9); }
  16%, 85% { opacity: 1; transform: scale(1); }
  91%, 100% { opacity: 0; transform: scale(.9); }
}
/* 4 × 4 sheet: greeting, talking, wand flourish, farewell. */
@keyframes wizard-poses {
  0% { background-position: 0% 0%; }
  3% { background-position: 33.333333% 0%; }
  6%, 12% { background-position: 66.666667% 0%; }
  9%, 15% { background-position: 100% 0%; }
  18%, 30%, 42%, 54% { background-position: 0% 33.333333%; }
  21%, 33%, 45%, 57% { background-position: 33.333333% 33.333333%; }
  24%, 36%, 48%, 60% { background-position: 66.666667% 33.333333%; }
  27%, 39%, 51%, 63% { background-position: 100% 33.333333%; }
  66% { background-position: 0% 66.666667%; }
  70% { background-position: 33.333333% 66.666667%; }
  74% { background-position: 66.666667% 66.666667%; }
  78% { background-position: 100% 66.666667%; }
  82% { background-position: 0% 100%; }
  85% { background-position: 33.333333% 100%; }
  89% { background-position: 66.666667% 100%; }
  94%, 100% { background-position: 100% 100%; }
}
@media (prefers-reduced-motion: reduce) {
  .hamcrab-cameo { animation: quiet-visit 8.5s step-end both; }
  .hamcrab-bubble { animation: none; }
  .hamcrab-wizard { animation: none; background-position: 0% 0%; }
  @keyframes quiet-visit {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
}
@media print {
  .hamcrab-cameo { display: none; }
}
</style>
