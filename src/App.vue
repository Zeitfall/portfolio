<template>
  <div class="wrapper">
    <Header/>

    <router-view/>

    <Footer/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<style lang="scss">
@import '@/assets/scss/_null.scss';
@import '@/assets/scss/_global.scss';
@import '@/assets/scss/vars.scss';
@import '@/assets/scss/main.scss';
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&family=Roboto+Slab&family=Rubik:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap');

body {
  color: $txt-color;
  background-color: $bcg-color;
  font-family: 'DM Sans', sans-serif;
  user-select: none;
}

.wrapper {
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template: 1fr 100px / 1fr;
}

[class*="__container"] {
  max-width: 1200px;
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;
}
</style>
