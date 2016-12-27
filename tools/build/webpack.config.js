'use strict';

const webpack = require('webpack');
const path = require('path');
const paths = require('./paths');
const plugins = require('./plugins');

module.exports = {
    context: path.resolve(__dirname, '../../'),
    entry: {
        app: paths.APP,
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, '../../public/dist'),
        publicPath: paths.ASSETS // useful if we need a CDN
    },
    plugins: [
        // This makes it possible for us to safely use env vars on our code
        plugins.DefinePlugin,
        plugins.UglifyJsPlugin
    ],
    devServer: {
        contentBase: __dirname + "/src", // New
    }
};