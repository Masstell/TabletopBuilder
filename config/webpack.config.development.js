const webpack = require('webpack');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const path  = require('path');
const distDir = path.resolve(__dirname, '..', 'dist');

module.exports = require('./webpack.config')({
    mode: 'development',

    plugins: [
        new webpack.DefinePlugin({ 'CANVAS_RENDERER': JSON.stringify(true), 'WEBGL_RENDERER': JSON.stringify(true) }),
        new Serve({
          static: distDir,
          open: true
        })
    ],

    watch: true
});
