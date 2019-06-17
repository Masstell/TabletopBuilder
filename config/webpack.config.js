const path  = require('path');
const srcApp = path.resolve(__dirname, '..', 'src', 'app.js');
const distDir = path.resolve(__dirname, '..', 'dist');

module.exports = (options) => {
    const config = Object.assign({
        entry: {
            app: srcApp,
        },

        output: {
            filename: '[name].js',
            path: distDir
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: [/\.vert$/, /\.frag$/],
                    exclude: [/node_modules/, /assets/],
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
                    type: 'javascript/auto',
                    test: /assets\/.*\.(json|JSON|css|CSS|jpe?g|JPE?G|gif|GIF|png|PNG|svg|SVG|woff|WOFF|ttf|TTF|wav|WAV|mp3|MP3|html|HTML|ico|ICO|txt|TXT)$/,
                    exclude: [/node_modules/],
                    use: [{
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]'
                        }
                    }]
                }
            ]
        },

    }, options);

    return config;
};
