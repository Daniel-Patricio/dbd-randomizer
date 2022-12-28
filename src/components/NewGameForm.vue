<template>
  <div class="border rounded-md p-6">
    <form method="POST" class="flex flex-col md:flex-row">
      <div>
        <div class="mb-3">
          <label for="gameMode">Modo de jogo</label>
          <select
            v-model="gameMode"
            name="gameMode"
            class="ml-3 border rounded-md p-2"
          >
            <option>Assassino</option>
            <option>Sobrevivente</option>
          </select>
        </div>

        <div v-show="gameMode === 'Sobrevivente'" class="mb-3">
          <label for="playersCount">Jogadores</label>
          <input
            v-model="playersCount"
            type="number"
            name="playersCount"
            class="ml-3 border rounded-md p-2"
            min="1"
            max="4"
          />
        </div>

        <div v-show="gameMode === 'Sobrevivente'" class="mb-3">
          <label for="difficulty">Dificuldade</label>
          <select
            v-model="difficulty"
            name="difficulty"
            class="ml-3 border rounded-md p-2"
          >
            <option v-for="n in playersCount">{{ n }}</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="alert-interval">Intervalo de alertas (minutos)</label>
          <input
            v-model="alertInterval"
            type="number"
            name="alert-interval"
            class="ml-3 border rounded-md p-2"
            min="1"
            max="5"
          />
        </div>

        <div class="mb-3">
          <div class="flex">
            <input
              v-model="lobbyRules"
              type="checkbox"
              id="lobby-rules"
              class="peer hidden"
            />
            <label
              for="lobby-rules"
              class="select-none cursor-pointer rounded-lg border-2 border-gray-200 py-2 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-green-400 peer-checked:text-gray-900 peer-checked:border-green-400"
            >
              Regra de início de partida
            </label>
          </div>
        </div>
      </div>

      <div
        v-show="gameMode === 'Sobrevivente'"
        class="md:ml-4 border rounded-md p-6"
      >
        <div v-for="n in playersCount" class="mb-2">
          <p>Jogador {{ n }}</p>
          <input
            type="text"
            name="player"
            class="border p-2 mt-1 rounded-md"
            placeholder="Nome jogador"
          />
        </div>
      </div>
    </form>

    <button
      type="submit"
      class="bg-gray-200 mt-4 font-bold border rounded-md p-2 w-full hover:bg-green-400 transition-all"
    >
      Iniciar
    </button>
  </div>
</template>

<script>
export default {
  name: "NewGameForm",
  data() {
    return {
      gameMode: "Assassino",
      playersCount: "1",
      players: [],
      difficulty: "1",
      alertInterval: "2",
      lobbyRules: false,
    };
  },
};
</script>
