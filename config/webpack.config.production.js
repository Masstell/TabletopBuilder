const webpack = require('webpack');
const path  = require('path');

module.exports = require('./webpack.config')({
    mode: 'production',

    plugins: [
        new webpack.DefinePlugin({ 'CANVAS_RENDERER': JSON.stringify(true), 'WEBGL_RENDERER': JSON.stringify(true) }),
    ]
});
