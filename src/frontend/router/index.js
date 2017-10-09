import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(Meta);

export default function () {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/login', component: () => import('../pages/login/Page.vue') },
    ],
  });

  router.beforeEach((to, from, next) => {
    /* globals window */
    if (window !== undefined && window && window.ga) {
      window.ga('set', 'page', to.path);
      window.ga('send', 'pageview');
    }

    next();
  });

  return router;
}
