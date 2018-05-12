const webpack = require('webpack');
const path = require('path');

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';

const config = {
    context: path.resolve(__dirname, '../src'),

    entry: {
        app: ['./app.js'],
    },

    output: {
        filename: '[name].js',
        pathinfo: true,
        path: path.resolve(__dirname, '../dist/'),
        publicPath: ASSET_PATH
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }]
            },
            {
                test: /\.json$/,
                exclude: [/node_modules/, /assets/],
                use: 'json-loader'
            },
            {
                test: [/\.vert$/, /\.frag$/],
                use: 'raw-loader'
            },
            {
                test: /src\/.*\.(html)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]'
                    }
                }]
            },
            {
                test: /assets\/.*\.(css|CSS|jpe?g|JPE?G|gif|GIF|png|PNG|svg|SVG|woff|WOFF|ttf|TTF|wav|WAV|mp3|MP3|html|HTML|ico|ICO|txt|TXT)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({ 'CANVAS_RENDERER': JSON.stringify(true), 'WEBGL_RENDERER': JSON.stringify(true) })
    ],

    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};

module.exports = config;
