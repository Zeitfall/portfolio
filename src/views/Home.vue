<template>
  <main class="main">
    <div class="main__container">
      <div class="main__body">
        <section class="main__content content">
          <div class="content__body">
            <div class="content__title title" ref="title" @click="test">Hello!</div>
            <div class="content__text text" ref="text1">
              I'm Vlad Matsko – teenage front-end developer, based in Kropyvnytskyi, Ukraine.
            </div>
            <div class="content__text text" ref="text2">
              Interested in math, machine learning, web development, web design, animations and music making.
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

/** motion */
const title = ref();
const text1 = ref();
const text2 = ref();

useMotion(title, {
  initial: {
    opacity: 0,
    x: -100
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 100,
      duration: 500,
    }
  }
});
useMotion(text1, {
  initial: {
    opacity: 0,
    x: -100
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 250,
      duration: 500,
    }
  }
});
useMotion(text2, {
  initial: {
    opacity: 0,
    x: -100
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 400,
      duration: 500,
    }
  }
});

const test = () => {
  window.scrollTo(0, document.body.scrollHeight);
};
</script>

<style lang="scss" scoped>
.content {
  z-index: 3;

  &__body {
  }

  &__title {
    // padding: 0 0 0 10px;
    margin: 0 0 30px 0;
    font-weight: 900;
  }

  &__text {
    position: relative;
    padding: 0 0 0 15px;
    margin: 0 0 10px 0;

    // &:before {
    //   content: '';
    //   position: absolute;
    //   top: 6.5px;
    //   left: 0;
    //   width: 6px;
    //   height: 6px;
    //   border-radius: 50%;
    //   background-color: #fff;
    // }
  }
}
</style>
