<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__body">
        <nav class="footer__nav nav">
          <div class="nav__body">
            <div class="nav__link">
              <span>Email:</span>
              <a target="_blank" href="mailto:zzeitfall@gmail.com">zzeitfall@gmail.com</a>
            </div>
            <div class="nav__link">
              <span>Phone:</span>
              <a target="_blank" href="tel:+380502987565">+380502987565</a>
            </div>
            <div class="nav__link">
              <a target="_blank" href="https://t.me/zeitfall">Telegram</a>
            </div>
          </div>
        </nav>

        <div class="footer__logo logo">Zeitfall</div>
      </div>
    </div>
  </footer>
</template>

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
    font-size: 14px;
    transform: rotate(270deg);

    &:before {
      content: '';
      position: absolute;
      bottom: -7px;
      width: 100%;
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
}

@media(max-width: 579.98px) {
  .nav {
    &__body {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
}
</style>
