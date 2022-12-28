import { createRouter, createWebHistory } from "vue-router";
import NewGameView from "../views/NewGameView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "new-game",
      component: NewGameView,
    },
  ],
});

export default router;
