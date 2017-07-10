// Load modules
const webpack = require('webpack');
const path = require('path');

// Load base config
const baseConfig = require('./webpack.config.base');

// Create the config
const config = Object.assign({}, baseConfig);

// Set entry points
config.entry = ['webpack-hot-middleware/client?path=http://localhost:4000/__webpack_hmr&reload=true', 'lodash', 'pixi', 'p2', 'phaser', 'webfontloader', './app.js'];

// Set output
config.output.path = path.resolve(__dirname, '../dist/');
config.output.publicPath = 'http://localhost:4000/';

// Enable source maps
config.devtool = 'source-map';

// Specify Electron renderer
config.target = 'electron-renderer';

// Dev plugins
config.plugins = [
   new webpack.HotModuleReplacementPlugin(),
   new webpack.NoEmitOnErrorsPlugin()
];

// Export module
module.exports = config;
