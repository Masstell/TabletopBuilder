const { execSync, spawnSync } = require('child_process');
const path = require('path');
const process = require('process');

const baseDir = path.join(__dirname, '..') + '/'; 

execSync('rm -rf ' + baseDir + 'dist/');

spawnSync('BUILD_DEV=false ' + baseDir + 'node_modules/webpack/bin/webpack.js -p --config ' + baseDir + 'config/webpack.config.js', {stdio: 'inherit', shell: true})

execSync('cp ' + baseDir + 'electron/main.js ' + baseDir + 'dist/');

spawnSync(baseDir + 'node_modules/electron/cli.js ' + baseDir + 'dist/main.js', {stdio: 'inherit', shell: true});
