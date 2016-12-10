/* eslint-disable */
const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '../resources/static/bundle');
const APP_DIR = path.resolve(__dirname, 'app');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const config = {
  entry: ['babel-polyfill', APP_DIR + '/index.jsx'],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_DIR,
        exclude: [nodeModulesPath],
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};

module.exports = config;