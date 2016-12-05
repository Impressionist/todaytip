/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '../resources/static/bundle');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                loader : 'babel',
                include : APP_DIR,
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};

module.exports = config;