<template>
  <main class="main">
    <div class="main__container">
      <div class="main__body">
        <section class="main__content content">
          <div class="content__body">
            <div class="content__title title">Description</div>
            <div class="content__text text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque assumenda corporis eius quo sapiente! Ipsam molestiae vitae, magnam dolorem est architecto minus cum reiciendis similique saepe et ex nulla obcaecati explicabo iusto repudiandae quia! Odio, distinctio modi ut aut autem sapiente quisquam voluptatem nulla, officia sequi repellat illum repudiandae possimus nisi debitis nemo officiis. Facilis velit sint vel aliquam laudantium? Assumenda quod ex magni fugiat temporibus minus sequi tempora odit dolore, modi quaerat adipisci nesciunt libero laborum? Reprehenderit, iste. Praesentium, veniam impedit quia dolore non exercitationem consequuntur numquam est placeat repellat, nobis nostrum, voluptate aliquam at ea optio saepe asperiores ut repellendus iste maxime distinctio eligendi! Id itaque nemo, corporis tenetur exercitationem vero eaque natus laboriosam architecto, numquam odit provident ducimus! Aspernatur ea facere itaque ex odio deserunt enim id tempore, molestiae accusamus culpa perspiciatis repellat praesentium nisi sequi, fugiat repudiandae? Repellat totam vero iure commodi, molestiae corrupti a rerum consequuntur illo sed. Rem, mollitia. Veniam, autem reiciendis! Ipsum obcaecati cumque dignissimos itaque architecto error esse vitae dolorem, nesciunt, numquam mollitia cum recusandae veniam beatae totam quidem provident porro accusamus debitis quam corporis! Inventore beatae harum, velit id nobis esse itaque eum commodi, temporibus consequatur, eos vero asperiores qui tenetur iure eligendi eveniet libero. Voluptatibus, repudiandae fugiat. Ratione animi distinctio doloribus, sint, sequi enim assumenda temporibus ab deleniti dolorem error dicta culpa laborum repudiandae odit modi? Perferendis, ut odio. Voluptates et enim aliquid debitis voluptatum aspernatur est eaque ut consequatur incidunt, nostrum accusamus iusto provident ducimus accusantium cupiditate. Fugit, laboriosam?
            </div>
          </div>
        </section>

        <section class="main__particles particles">
          <div class="particles__body">
            <!-- <canvas class="particles__canvas" ref="canvas"></canvas> -->
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Particles } from '@/assets/js/Particles.js';
</script>

<style lang="scss" scoped>
.content {

  &__body {
  }

  &__title {
    margin: 0 0 20px 0;
  }
}

.particles {
  &__body {
    height: 100%;
  }

  &__canvas {
  }
}
</style>
