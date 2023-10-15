<script setup>
import { ref } from "vue";
import { store } from "../store";
const { cards } = store;
const { terms, id, title, description } = cards;
// const card = cards[props.id - 1];
// console.log(card);
console.log(cards.terms);
const slide = ref(1);
const progress = ref(0);
// const completed = (terms[id - 1].completed = true);
const nextSlide = (next) => {
  progress.value = Math.random();
  next.carousel.next();
};
const previousSlide = (prev) => {
  prev.carousel.previous();
};
</script>
<template>
  <div class="bg-red-400 px-10 h-screen">
    <header class="p-4 flex items-center bg-white">
      <nav>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </nav>
      <h2 class="text-3xl font-bold text-center m-auto">Card</h2>
    </header>
    <div>
      <div class="w-full bg-white h-96 mt-10">
        <q-carousel swipeable animated v-model="slide" ref="carousel" infinite>
          <q-carousel-slide
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
          <template v-slot:control> </template>
        </q-carousel>
      </div>
      <div class="bg-blue-400 w-full h-auto flex justify-center">
        <q-carousel-control
          :position="[]"
          :offset="[28, 18]"
          class="q-gutter-xs"
        >
          <q-btn
            push
            round
            dense
            color="orange"
            text-color="black"
            icon="arrow_left"
            @click="previousSlide($refs)"
          />
          <q-btn
            push
            round
            dense
            color="orange"
            text-color="black"
            icon="arrow_right"
            @click="nextSlide($refs)"
          />
        </q-carousel-control>
      </div>
      <q-linear-progress
        :value="progress"
        color="green"
        class="mt-16 rounded-md"
      />
    </div>
  </div>
</template>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  background-color: white;
  background-color: rgba(255, 255, 255, 0.5);
  right: 10px;
  padding: 30px;
  color: #000 !important;
  fill: black !important;
  stroke: black !important;
}
</style>
