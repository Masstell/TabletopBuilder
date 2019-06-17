#!/usr/bin/env bash

DIST="$(pwd)/dist/"

rm -rf "$DIST"

node node_modules/webpack-nano/bin/wp.js --config config/webpack.config.production.js

if [ -d "$DIST" ]; then
    cd "$DIST"

    zip -r dist-latest.zip *
else
    echo 'No dist dir!'
fi
