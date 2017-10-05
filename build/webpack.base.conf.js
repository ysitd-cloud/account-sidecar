const vueConf = require('./vue-loader.conf');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  plugins: [
    new ProgressBarPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: `${__dirname}/../dist`,
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          // eslint-disable-next-line global-require
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConf,
      },
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [
          { loader: 'graphql-tag/loader' },
        ],
      },
    ],
  },
};
