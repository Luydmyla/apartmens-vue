import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss";
import router from "./router.js";
import Notifications from "@kyvg/vue3-notification";

import store from "./store/index.js";

createApp(App).use(store).use(Notifications).use(router).mount("#app");

// const store = new Vuex.Store({
//   state: {
//     userName: "John",
//   },
//   mutations: {
//     changeName(state, newName) {
//       state.userName = newName;
//     },
//   },
// });

// store.commit("changeName", "Oleg");
// console.log(store.state.userName);
