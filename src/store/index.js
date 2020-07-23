import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: undefined,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser(context, user) {
      context.commit("SET_USER", user);
    },
  },
});
