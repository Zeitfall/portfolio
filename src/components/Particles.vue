<template>
  <section class="particles">
    <div class="particles__body">
      <canvas  
        class="particles__canvas" 
        ref="canvas"
        :width="canvasSize.width" 
        :height="canvasSize.height"
      ></canvas>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Particles } from '@/assets/js/Particles.js';

/** animation */
const canvas = ref();
const canvasSize = ref({
  width: innerWidth,
  height: innerHeight
});

window.addEventListener('resize', () => {
  canvasSize.value = {
    width: innerWidth,
    height: innerHeight
  }
});

onMounted(() => {
  let amount;

  if(canvas.value.width < 400) amount = 25;
  else if(canvas.value.width < 800) amount = 50;
  else amount = 100;

  const particles = new Particles(canvas.value, {
    amount, 
    color: '#fff',
    radius: 3
  });

  particles.animate();
});
</script>

<style lang="scss" scoped>
@keyframes impulse {
  0% { opacity: .3; }
  50% { opacity: .5;  }
  100% { opacity: .3; }
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  animation: impulse 3s infinite;

  &__body { height: 100%; }

  &__canvas {}
}
</style>
