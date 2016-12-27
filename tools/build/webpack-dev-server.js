/**
 * Just for development purposes
 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const path = require('path');

const config = {
	// dynamic route refreshing
    historyApiFallback: {
        disableDotRule: true
    },
    contentBase: path.join(__dirname, '../../src/'),
};

// always dev enviroment when running webpack dev server
const env = {
    dev: process.env.NODE_ENV //Todo: Check if DefinePlugin can take part here too
};

// create the server
const server = new WebpackDevServer(webpack(webpackConfig(env)), config);

// browse at http://localhost:3000/
server.listen(3000, 'localhost');