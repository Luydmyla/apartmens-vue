// import Homepage from "./pages/Homepage.vue";
// import Apartment from "./pages/Apartment.vue";
import ErrorPage from "./pages/ErrorPage.vue";
// import LoginPage from "./pages/Login.vue";
// import RegistrationPage from "./pages/Registration.vue";
// import MyOrdersPage from "./pages/MyOrders.vue";

import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index";

const Apartment = () => import("./pages/Apartment.vue");
const LoginPage = () => import("./pages/Login.vue");
const RegistrationPage = () => import("./pages/Registration.vue");
const MyOrdersPage = () => import("./pages/MyOrders.vue");
const Homepage = () => import("./pages/Homepage.vue");

const routes = [
  {
    path: "/apartments-vue/",
    component: Homepage,
    name: "homepage",
  },
  {
    path: "/apartments-vue/apartment/:id",
    component: Apartment,
    name: "apartment",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/apartments-vue/login",
    component: LoginPage,
    name: "Login-page",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/apartments-vue/registration",
    component: RegistrationPage,
    name: "registration-page",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/apartments-vue/my-orders",
    component: MyOrdersPage,
    name: "my-orders",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/apartments-vue/:pathMatch(.*)",
    component: ErrorPage,
    name: "error-page",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["auth/isLoggedIn"];
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: "Login-page" });
    } else {
      next();
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: "homepage" });
    }
  } else {
    next();
  }
  next();
});
export default router;
