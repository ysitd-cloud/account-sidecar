import createApp from './app';

const { app, router, store } = createApp();

/* global window */
/* eslint-disable no-underscore-dangle */
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
  if ('user' in window.__INITIAL_STATE__.params) {
    window.gtag('set', { user_id: window.__INITIAL_STATE__.params.user.username });
  }
}
/* eslint-enable */

window.gtag('config', 'UA-103662489-1', {
  send_page_view: false,
  linker: {
    domains: ['ysitd.cloud'],
    accept_incoming: true,
  },
});

router.onReady(() => {
  app.$mount('#app');
});

