const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

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
    host: '0.0.0.0',
  },
  module: {
    rules: [
    ],
  },
  plugins: [
  ],
})
