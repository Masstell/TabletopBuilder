const { execSync, spawnSync } = require('child_process');
const path = require('path');
const process = require('process');

const baseDir = path.join(__dirname, '..') + '/'; 

spawnSync(baseDir + 'node_modules/electron/cli.js ' + baseDir + 'electron/main.js', {stdio: 'inherit', shell: true});
