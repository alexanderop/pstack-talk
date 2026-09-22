<template>
  <div class="dance-finale">
    <h1>Thank you!</h1>
    <div
      class="hamcrab-dancer"
      role="img"
      aria-label="Hamster in a lobster costume dancing a Judas-inspired routine."
    />
  </div>
</template>

<style scoped>
.dance-finale { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.dance-finale h1 { font-size: 64px; line-height: 1.1; margin: 0 0 12px; }
.hamcrab-dancer {
  width: 340px;
  height: 340px;
  flex-shrink: 0;
  background-image: url('/sprites/hamcrab-judas.png');
  background-size: 400% 400%;
  background-repeat: no-repeat;
  animation: judas-dance 7.328s steps(1, end) infinite;
}
@keyframes judas-dance {
  0% { background-position: 0% 0%; clip-path: inset(0); }
  6.25% { background-position: 33.333333% 0%; }
  12.5% { background-position: 66.666667% 0%; }
  18.75% { background-position: 100% 0%; }
  25% { background-position: 0% 33.333333%; }
  31.25% { background-position: 33.333333% 33.333333%; }
  37.5% { background-position: 66.666667% 33.333333%; }
  43.75% { background-position: 100% 33.333333%; }
  50% { background-position: 0% 66.666667%; clip-path: inset(0 0 4% 0); }
  56.25% { background-position: 33.333333% 66.666667%; }
  62.5% { background-position: 66.666667% 66.666667%; }
  68.75% { background-position: 100% 66.666667%; }
  75% { background-position: 0% 100%; clip-path: inset(0); }
  81.25% { background-position: 33.333333% 100%; }
  87.5% { background-position: 66.666667% 100%; }
  93.75%, 100% { background-position: 100% 100%; }
}
@media (prefers-reduced-motion: reduce) {
  .hamcrab-dancer { animation: none; background-position: 100% 33.333333%; }
}
@media print {
  .hamcrab-dancer { animation: none; background-position: 100% 33.333333%; }
}
</style>
