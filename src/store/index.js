import { createStore } from "vuex";

const initialState = {
  user: null,
  token: "",
};
const store = createStore({
  state: { ...initialState },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
});

console.log(store.state.userName);

export default store;
