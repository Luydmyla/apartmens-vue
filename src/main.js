import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss";
import router from "./router.js";
import Notifications from "@kyvg/vue3-notification";
createApp(App).use(Notifications).use(router).mount("#app");
