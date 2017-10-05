const merge = require('webpack-merge');
const base = require('./webpack.base.conf');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [new VueSSRServerPlugin()];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
  }));
}

module.exports = merge.smart(base, {
  entry: './src/frontend/serverEntry.js',
  plugins,
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  externals: nodeExternals({
    whitelist: /\.(css|vue|styl)$/,
  }),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['env', {
                  targets: {
                    node: 'current',
                  },
                }],
                'stage-2',
              ],
              plugins: [
                'syntax-dynamic-import',
                'syntax-object-rest-spread',
              ],
            },
          },
        ],
      },
    ],
  },
});
