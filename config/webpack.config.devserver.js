const path = require('path');
const webpack = require('webpack');

// Listen port
const PORT = process.env.PORT || 8080;

// Load base config
const baseConfig = require('./webpack.config.base');

// Create the config
const config = Object.create(baseConfig);

config.devtool = 'cheap-source-map';

config.devServer = {
    host: "0.0.0.0",
    disableHostCheck: true,
    port: PORT,
    contentBase: path.resolve(__dirname, '../src'),
    watchContentBase: true
};

module.exports = config;
