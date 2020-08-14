const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const resolve = require('./webpack.config.resolve')

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src/index.js')],
    // Other entries can be added here to split out heavy files
    // see: https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
  },
  resolve,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'o.js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        /**
         * Note: You can do HTLM minification here OR in `HTMLWebpackPlugin` - but not both.
         *
         * Exact filesize reduction may vary depending on settings used in each.
        */
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
    ],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin(),
  ],
}
