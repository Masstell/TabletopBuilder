#!/usr/bin/env bash

rm -rf dist/; BUILD_DEV=false ./node_modules/webpack/bin/webpack.js -p --config config/webpack.config.base.js

cd dist

zip -r dist-latest.zip *
