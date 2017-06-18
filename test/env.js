// jsdom / canvas
import JSDOM from 'jsdom';
import Canvas from 'canvas';

import {addJsonAssetsToGameCache, addPNGAtlasAssetsToGameCache} from './custom.js';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

global.Image = Canvas.Image; // phaser needs Image in global

// virutal dom - with dom globals :(
global.window = JSDOM.jsdom().defaultView;
global.document = window.document;
global.navigator = window.navigator;
global.Element = window.Element; // phaser needs Element in global
global.HTMLElement = window.HTMLElement; // phaser needs Element in global

// Phaser needs a rendering context
global.window.CanvasRenderingContext2D = new Canvas(GAME_WIDTH, GAME_HEIGHT).getContext('2d');

// moar globals :( - so the code we are test can properly extend from these external libraries
global.PIXI = require('../node_modules/phaser-ce/build/custom/pixi').PIXI;
global.p2 = require('../node_modules/phaser-ce/build/custom/p2');
global.Phaser = require('../node_modules/phaser-ce/build/phaser').Phaser;

let gameReadyPromise = new Promise((resolve, reject) => {
    let game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.HEADLESS);

    game.device.whenReady(() => {
        // p2 physics
        // game.physics.startSystem(Phaser.Physics.P2JS);

        // arcade physics
        // game.physics.startSystem(Phaser.Physics.ARCADE);

        // custom json assets
        addJsonAssetsToGameCache(game);

        resolve(game);
    });
}).then((game) => {
    // custom png atlas assets
    return addPNGAtlasAssetsToGameCache(game);
}).catch((err) => { throw err; });

export default {
    'gameReady': gameReadyPromise
};
