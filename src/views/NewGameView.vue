<template>
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <div class="flex flex-col">
      <h1 class="font-bold text-xl mb-3">Novo jogo</h1>
      <NewGameForm />
    </div>
  </div>
</template>

<script>
import NewGameForm from "../components/NewGameForm.vue";
export default {
  name: "NewGameView",
  components: {
    NewGameForm,
  },
  setup() {
    return {};
  },
};
</script>
