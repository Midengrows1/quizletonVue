<script setup>
const props = defineProps(["id", "title", "description", "terms", "count"]);
</script>
<template>
  <li class="rounded-lg border my-2 p-2 bg-white w-1/3 mx-2">
    <router-link :to="{ path: `/card/${id}` }">
      <div>
        <div class="border-b-2 flex flex-row items-end pb-2 justify-between">
          <h2 class="text-blue-500 text-semibold text-lg w-fit">
            {{ title }}
          </h2>
          <div
            class="flex-inline bg-slate-200 w-fit whitespace-nowrap rounded-xl px-2 font-semibold text-sm"
          >
            {{ count }} {{ count > 5 == 0 ? "терминa" : "терминов" }}
          </div>
        </div>
      </div>
      <div class="flex gap-2 items-center pt-2">
        <div class="w-14 h-auto">
          <img
            src="../../public/userAvatar.png"
            alt="avatar"
            class="object-cover"
          />
        </div>
        <p>UserName</p>
      </div>
    </router-link>
  </li>
</template>

<style></style>
