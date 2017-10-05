/* eslint-disable global-require */
const serveStatic = require('serve-static');
const { IS_PRODUCTION } = require('./config');

function serverDevAssets(app) {
  const webpack = require('webpack');

  const serverBundleConfig = require('../../build/webpack.server.conf');
  const devConfig = require('../../build/webpack.dev.conf');

  const serverBundleCompiler = webpack(serverBundleConfig);
  serverBundleCompiler.watch({
    ignored: /node_modules/,
    polling: true,
  }, (err, stats) => {
    if (err) {
      console.error(err);
    } else {
      console.log(stats.toString('detailed'));
    }
  });

  const compiler = webpack(devConfig);

  const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: devConfig.output.publicPath,
    quiet: true,
  });

  const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {},
  });

  return new Promise((resolve) => {
    app.use(devMiddleware);
    app.use(hotMiddleware);
    devMiddleware.waitUntilValid(() => {
      resolve(app);
    });
  });
}

function serverProductionAssets(app) {
  return new Promise((resolve) => {
    app.use(serveStatic('dist'));
    resolve(app);
  });
}

module.exports = IS_PRODUCTION ? serverProductionAssets : serverDevAssets;
