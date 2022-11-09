import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import searchWord from "../views/searchWord.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/word",
      name: "searchWord",
      component: searchWord,
    },
  ],
});

export default router;
