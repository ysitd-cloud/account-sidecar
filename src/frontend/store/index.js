import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

export default function () {
  return new Store({
    state: {
      params: {},
    },
    actions: {},
    mutations: {},
  });
}
