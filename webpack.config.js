/**
 * Development Webpack Configuration
 */

const Dotenv = require('dotenv-webpack');
const { resolve } = require('path');

const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_HOST = 'localhost';
const NODE_PORT = 8111;

module.exports = {
  
  devtool: 'cheap-module-eval-source-map',
  
  context: resolve(__dirname, 'src'),
  
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${NODE_HOST}:${NODE_PORT}`,
    './'
  ],
  
  output: {
    filename: 'app-[hash].js',
    path: resolve(__dirname, 'build'),
    publicPath: '/',
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      },
      { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=15000&name=[name]-[hash].[ext]' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      variables: resolve(__dirname, 'src/scss/utils/variables'),
      mixins: resolve(__dirname, 'src/scss/utils/mixins'),
      respond: resolve(__dirname, 'src/scss/utils/respond')
    }
  },
  
  devServer: {
    host: NODE_HOST,
    port: NODE_PORT,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: true
    }
  },
  
  plugins: [
    new Dotenv({
      path: './.env',
      safe: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new DashboardPlugin()
  ]
  
}