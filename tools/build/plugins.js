'use strict';

const webpack = require('webpack');
const paths = require('./paths');

// This makes it possible for us to safely use env vars on our code
const DefinePlugin = new webpack.DefinePlugin({
    'process.env.ASSETS': JSON.stringify(paths.ASSETS)
});

const UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: true
    }
});

module.exports = {
    DefinePlugin: DefinePlugin,
    UglifyJsPlugin: UglifyJsPlugin
}