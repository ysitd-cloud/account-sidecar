import createApp from './app';

const { app, router, store } = createApp();

/* global window */
/* eslint-disable no-underscore-dangle */
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}
/* eslint-enable */

router.onReady(() => {
  app.$mount('#app');
  window.gtag('config', 'UA-103662489-1', {
    send_page_view: false,
    linker: {
      domains: ['ysitd.cloud'],
    },
  });
});

