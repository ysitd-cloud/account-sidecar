const webpack = require('webpack');
const shell = require('shelljs');
const client = require('./webpack.prod.conf');
const server = require('./webpack.server.conf');

process.env.NODE_ENV = 'production';

const assetsPath = './dist';

shell.rm('-rf', assetsPath);
shell.mkdir('-p', assetsPath);
shell.config.silent = true;

webpack([client, server], (err, stats) => {
  if (err) throw err;
  console.log(stats.toString({
    modules: true,
    children: true,
    chunks: true,
    chunkModules: true,
  }));
});
