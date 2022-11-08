import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/wiki/:wikiId",
    name: "wiki",
    component: () => import("../views/WikiView.vue"),
  },
  {
    path: "/wiki/:wikiId/formula/:formulaId",
    name: "formula",
    component: () => import("../views/FormulaView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
