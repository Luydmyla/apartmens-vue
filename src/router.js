import Foo from "./pages/Foo.vue";
import Bar from "./pages/Bar.vue";
import Homepage from "./pages/Homepage.vue";
import Apartment from "./pages/Apartment.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/apartments-vue/foo",
    component: Foo,
  },
  {
    path: "/apartments-vue/bar",
    component: Bar,
  },
  {
    path: "/apartments-vue/",
    component: Homepage,
  },
  {
    path: "/apartments-vue/apartment",
    component: Apartment,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
