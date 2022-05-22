<template>
  <header class="header">
    <div class="header__container">
      <div class="header__body">
        <div class="header__logo logo">Zeitfall</div>

        <nav class="header__nav nav">
          <div class="nav__body">
            <div class="nav__link"
              v-for="l in navLinks"
              :key="l.title"
              @click="onLinkClick(l)"
              :class="l.active ? 'nav__link_active' : ''"
            >
              <router-link :to="l.path">{{ l.title }}</router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const navLinks = ref([
  {
    title: 'Home',
    path: '/',
    active: false
  },
  {
    title: 'Contacts',
    path: '/contacts',
    active: false
  },
  {
    title: 'About',
    path: '/about',
    active: false
  }
]);

const onLinkClick = link => {
  navLinks.value.map(l => l !== link ? l.active = false : l.active = true);
};

onMounted(() => {
  navLinks.value.map(l => l.path !== route.path ? l.active = false : l.active = true);
});

</script>

<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.header {
  position: fixed;
  height: 100px;
  width: 100%;
  background: linear-gradient(to bottom, 
    rgba(0, 0, 0, 1) 0%, 
    rgba(0, 0, 0, .75) 50%, 
    rgba(0, 0, 0, .5) 75%, 
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 10;

  &__container {
  }

  &__body {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
  }

  &__nav {
  }
}
</style>
