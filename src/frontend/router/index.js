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
      { path: '/password', component: () => import('../pages/password/Page.vue') },
    ],
  });

  if (!isServer) {
    router.beforeEach((to, from, next) => {
      /* globals window */
      if (window.gtag) {
        window.gtag('config', 'UA-103662489-1', {
          page_path: to.path,
        });
      }
      next();
    });
  }
  return router;
}
