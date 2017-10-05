import Vue from 'vue';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import createRouter from './router';
import createStore from './store';

Vue.use(Vuetify);

export default function () {
  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const options = {
    router,
    store,
    render: h => h(App),
  };

  const app = new Vue(options);
  return { app, router, store };
}
