import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import AddQuiz from "../pages/AddQuiz.vue";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/addquiz", name: "addquiz", component: AddQuiz },
  ],
});
