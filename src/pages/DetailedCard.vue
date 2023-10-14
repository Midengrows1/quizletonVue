<script setup></script>
<template>
  <div class="bg-red-400 px-10 h-screen">
    <header class="p-4 flex items-center bg-white">
      <nav>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </nav>
      <h2 class="text-3xl font-bold text-center m-auto">Card</h2>
    </header>
    <div class="w-full px-20 h-[60%] mt-10">
      <div class="w-full bg-blue-400 h-full">
        <h3>{{}}</h3>
      </div>
    </div>
  </div>
</template>

<style></style>
