import Vuex from "vuex";

// створюємо простіше храніліще стейтів(наших реактивних властивостей), ікі можна змінювати лише за допомогою мутейшн - це методи
const store = new Vuex.Store({
  state: {
    userName: "John",
  },
  mutations: {
    changeName(state, newName) {
      state.userName = newName;
    },
  },
});

// setTimeout(() => {
store.commit("changeName", "Oleg");
// }, 1000);

console.log(store.state.userName);

export default store;
