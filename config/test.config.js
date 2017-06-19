import {describe, it} from 'mocha';
import chai from 'chai';
import JSDOM from 'jsdom';
import Canvas from 'canvas';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

global.assert = chai.assert;

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
global._ = require('lodash');

global.game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.HEADLESS);
