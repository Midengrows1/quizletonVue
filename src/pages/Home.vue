<script setup>
import MainCard from "@/components/Maincard.vue";
import Layout from "@/components/global/Layout.vue";
import { store } from "../store";
const cardsArray = store.cards;
</script>
<template>
  <div class="w-full">
    <Header></Header>
    <Layout>
      <h1 class="p-2 font-bold text-5xl border-b-2">Все Карточки</h1>
      <ul class="w-full flex flex-row items-center">
        <MainCard v-for="{ id, title, description, terms } in cardsArray" :key="id" :id="id" :title="title" :terms="terms"
          :description="description" :count="terms.length"></MainCard>
      </ul>
    </Layout>
  </div>
</template>

<style></style>
