<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";
const mobileMenuOpen = ref(false);
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faCirclePlus);
library.add(faMagnifyingGlass);
</script>
<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-8xl items-center justify-between p-1 lg:px-28"
      aria-label="Global"
    >
      <div class="flex lg:flex-1 gap-x-4 items-center">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-12 w-auto" src="../../public/Quizlet-Logo.png" alt="" />
        </a>
        <PopoverGroup class="hidden lg:flex lg:gap-x-1 font-semibold">
          <router-link :to="{ name: 'home' }">Home</router-link>
        </PopoverGroup>
        <label
          for="searchCards"
          class="w-1/2 mx-2 ml-2 border-2 rounded-3xl flex flex-row items-center px-3"
        >
          <span>
            <font-awesome-icon
              icon="magnifying-glass"
              size="sm"
              class="text-gray-600"
            />
          </span>
          <input
            type="text"
            class="w-full px-2 py-1 rounded-2xl outline-none"
            id="searchCards"
          />
        </label>
        <router-link :to="{ name: 'addquiz' }">
          <font-awesome-icon
            icon="circle-plus"
            style="color: #0e45a4"
            size="2xl"
          />
        </router-link>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
            >Log in <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<style></style>
