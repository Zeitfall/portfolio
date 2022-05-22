<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__body">
        <nav class="footer__nav nav">
          <div class="nav__body">
            <div
              class="nav__link"
              v-for="l in navLinks"
              :key="l.path"
            >
              <span v-if="l.title">{{ l.title }}:</span>
              <a target="_blank" :href="l.path">{{ l.content }}</a>
            </div>
          </div>
        </nav>

        <div class="footer__logo logo">Zeitfall</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const navLinks = ref([
  {
    title: 'Email',
    content: 'zzeitfall@gmail.com',
    path: 'mailto:zzeitfall@gmail.com',
  },
  {
    title: 'Phone',
    content: '+380502987565',
    path: 'tel:+380502987565',
  },
  {
    title: '',
    content: 'Telegram',
    path: 'https://t.me/zeitfall',
  }
]);
</script>


<style lang="scss" scoped>
@import '@/assets/scss/vars.scss';

.footer {

  &__container {
  }

  &__body {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__nav {
  }

  &__logo {
    position: relative;
    // font-family: monospace;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .5px;
    transform: rotate(270deg);

    &:before {
      // display: none;
      content: '';
      position: absolute;
      bottom: -7px;
      width: calc(100% - 10px);
      height: 2px;
      background-color: $txt-color;
      opacity: .75;
    }
  }
}

.nav {
  &__link {
    font-size: 14px;

    a { text-decoration: underline; }
  }

  @media(max-width: 579.98px) {
    &__body {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
}

</style>
