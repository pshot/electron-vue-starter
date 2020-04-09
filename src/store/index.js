import Vue from "vue";
import Vuex from "vuex";

import store_example from "./modules/store_example";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { store_example },
});
