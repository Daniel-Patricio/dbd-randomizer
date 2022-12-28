<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="text-gray-600 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <i class="fa fa-dice text-2xl"></i>
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <span class="ml-3 text-xl">DBD Randomizer</span>
      </a>
      <nav
        class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
      >
        <RouterLink to="/">Novo jogo</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>
