const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  optimization: {
    usedExports: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    publicPath: '/',
    port: 8080,
    // Enable this host if you need to access this from another device, like for mobile testing:
    // host: '0.0.0.0',
  },
  module: {
    rules: [
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      /**
       * Note: You can do HTLM minification here OR in `html-loader` - but not both.
       *
       * Exact filesize reduction may vary depending on settings used in each.
      */
      minify: false,
    }),
  ],
})
