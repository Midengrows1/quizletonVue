<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { store } from "../store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add({ faArrowRight, faArrowLeft })
const { cards } = store;
const route = useRoute()
const idparams = route.params.id
const { terms, id, title, description } = cards[idparams - 1];
const [{ name, definition, completed }] = terms;
const model = ref(0);
const isFlipped = ref(false);
const progressValue = ref(0)
const nextSlide = () => {
  model.value = Math.min(model.value + 1, terms.length - 1)
  progressValue.value = (model.value / (terms.length - 1)) * 100
}
const previousSlide = () => {
  model.value = Math.max(model.value - 1, 0);
  progressValue.value = (model.value / (terms.length - 1)) * 100

}
const flipCard = () => {
  isFlipped.value = !isFlipped.value
}
</script>
<template>
  <div class=" px-10 h-screen">
    <header class="p-4 flex items-center bg-white">
      <nav>
        <router-link :to="{ name: 'home' }"><img src="/Quizlet-Logo.png" alt="" class="w-max h-10"></router-link>
      </nav>
      <h2 class="text-3xl font-bold text-center m-auto">Card</h2>
    </header>
    <div>
      <h2 class="text-4xl my-3 font-bold ">{{ title }}</h2>
      <v-carousel v-model="model" hide-delimiters :show-arrows="false">
        <v-carousel-item v-for="({ name, definition }, i) of terms" :key="i" :value="i" class="bg-red-400">
          <v-sheet height="100%" class="card shadow-slate-400 " tile rounded @click="flipCard"
            :class="{ flipped: isFlipped }">
            <div class="d-flex fill-height justify-center align-center front w-full  drop-shadow-xl">
              <p class="text-3xl">{{ name }}</p>
            </div>
            <div class="back d-flex fill-height justify-center align-center front w-full ">
              <p class="text-3xl">{{ definition }}</p>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="flex items-center w-full  justify-center gap-x-5 h-max p-2">
      <v-btn icon='chevron-left' @click="previousSlide" density="default"><font-awesome-icon icon="arrow-left" /></v-btn>
      {{ model + 1 }} / {{ terms.length }}
      <v-btn icon='chevron-right' @click="nextSlide" class="rounded-xl"><font-awesome-icon icon="arrow-right" /></v-btn>
    </div>
    <v-progress-linear v-model="progressValue" color="green" :height="7" rounded></v-progress-linear>
    <div>
      <p class="my-10 font-bold text-2xl">Термины в модуле ({{ terms.length }})</p>
      <h2 class="text-orange-400 font-bold">Изучено ({{ model + 1 }})</h2>
      <p>Вы начали изучать эти термины.<br>Продолжайте!</p>
    </div>
    <div>
      <ul class="flex flex-col gap-y-3">
        <li v-for="({ name, definition }, i) of terms" :key="i"
          class="w-full p-2 flex items-center justify-between shadow-lg   rounded-md bg-white">
          <p class="pr-2 w-32 break-words p-3 border-r-2 border-slate-200">{{ name }}</p>
          <p class="p-3">{{ definition }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.card {
  position: relative;
  transition: transform 0.4s;
  transform-style: preserve-3d;
}

.flipped {
  transform: rotateX(0.5turn);
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.back {
  transform: rotateX(0.5turn);
}
</style>