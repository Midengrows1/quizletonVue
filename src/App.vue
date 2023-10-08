<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <Header></Header>
  <!-- <ul>
    <li><router-link :to="{ name: 'home' }">Home</router-link></li>
    <li><router-link :to="{ name: 'addquiz' }">Create</router-link></li>
  </ul> -->
  <router-view class="view"></router-view>
</template>

<style scoped></style>
