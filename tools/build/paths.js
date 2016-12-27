'use strict';

// Whatever comes as an environment variable, otherwise use root
const ASSETS = process.env.ASSETS || '/';

module.exports = {
    ASSETS: ASSETS,
    APP: './src/app.js'
}