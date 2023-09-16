import Foo from "./pages/Foo.vue";
import Bar from "./pages/Bar.vue";
import Homepage from "./pages/Homepage.vue";
import Apartment from "./pages/Apartment.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import LoginPage from "./pages/Login.vue";
import RegistrationPage from "./pages/Registration.vue";
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
    name: "homepage",
  },
  {
    path: "/apartments-vue/apartment/:id",
    component: Apartment,
    name: "apartment",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "Login-page",
  },
  {
    path: "/registration",
    component: RegistrationPage,
    name: "registration-page",
  },
  {
    path: "/:pathMatch(.*)",
    component: ErrorPage,
    name: "error-page",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
