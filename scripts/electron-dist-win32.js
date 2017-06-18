const { execSync, spawnSync } = require('child_process');
const path = require('path');
const process = require('process');

const baseDir = path.join(__dirname, '..') + '/'; 

process.chdir(baseDir);

execSync('rm -rf dist/');

spawnSync('BUILD_DEV=false node node_modules/webpack/bin/webpack.js -p --config config/webpack.config.js', {stdio: 'inherit', shell: true});

execSync('cp electron/main.js dist/');

spawnSync('node node_modules/electron-packager/cli.js dist/main.js ' + (process.env.npm_package_name || 'app') + ' --platform win32 --arch x64 --overwrite', {stdio: 'inherit', shell: true});
