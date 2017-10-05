const chokidar = require('chokidar');
const { createBundleRenderer } = require('vue-server-renderer');
// eslint-disable-next-line import/no-unresolved
const assets = require('../../dist/assets.json');
// eslint-disable-next-line import/no-unresolved
let serverBundle = require('../../dist/vue-ssr-server-bundle.json');
const { IS_PRODUCTION } = require('./config');

// eslint-disable-next-line import/no-unresolved
const bundleCache = require.resolve('../../dist/vue-ssr-server-bundle.json');
let renderer;

const assetsNames = ['manifest', 'vendor', 'app'];
const styles = assetsNames.reduce((links, name) => {
  if (name in assets && 'css' in assets[name]) {
    links.push(assets[name].css);
  }
  return links;
}, []);

const scripts = assetsNames.reduce((list, name) => {
  if (name in assets && 'js' in assets[name]) {
    list.push(assets[name].js);
  }
  return list;
}, []);

const BUNDLE_PATH = './dist/vue-ssr-server-bundle.json';

function updateServerBundle() {
  return new Promise((resolve) => {
    delete require.cache[bundleCache];
    // eslint-disable-next-line global-require,import/no-unresolved
    serverBundle = require('../../dist/vue-ssr-server-bundle.json');
    resolve();
  });
}

function updateRenderer() {
  return new Promise((resolve) => {
    const opt = {
      runInNewContext: 'once',
    };

    if (IS_PRODUCTION) {
      // eslint-disable-next-line import/no-unresolved,global-require
      opt.clientManifest = require('../../dist/vue-ssr-client-manifest.json');
    }


    renderer = createBundleRenderer(serverBundle, opt);
    resolve();
  });
}

function startWatch() {
  const watcher = chokidar.watch(BUNDLE_PATH);

  watcher.on('change', () => {
    updateServerBundle()
      .then(() => updateRenderer());
  });
}

if (!IS_PRODUCTION) {
  startWatch();
}

module.exports = app => updateServerBundle()
  .then(() => updateRenderer())
  .then(() => {
    app.get('*', (req, res, next) => {
      const context = {
        url: req.url,
        user: req.user,
        params: Object.assign({}, req.query, req.body),
      };

      renderer.renderToString(context, (err, html) => {
        if (err) {
          if ('code' in err) {
            res.status(err.code);
            res.end('404 Not Found');
          } else {
            next(err);
          }
        } else {
          const {
            title, link, meta, script,
          } = context.meta.inject();
          res.render('app.jinja', {
            html,
            scripts,
            styles,
            state: JSON.stringify(context.state),
            title: title.text(),
            link: link.text(),
            meta: meta.text(),
            script: script.text(),
          });
        }
      });
    });
    return app;
  });
