import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(Meta);

export default function (isServer) {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/login', component: () => import('../pages/login/Page.vue') },
      { path: '/connect', component: () => import('../pages/connect/Page.vue') },
      { path: '/', component: () => import('../pages/home/Page.vue') },
    ],
  });

  if (!isServer) {
    router.beforeEach((to, from, next) => {
      /* globals window */
      if (window.ga) {
        window.ga('set', 'page', `${window.location.hostname}${to.path}`);
        window.ga('send', 'pageview');
      }
      next();
    });
  }
  return router;
}
