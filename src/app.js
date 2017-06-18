// import states
import BootState from './states/boot';
import MainMenuState from './states/main-menu';

require('./index.html');

let game = new Phaser.Game(800, 600);

Phaser.Device.whenReady(function () {
    // plugins
    game.__plugins = game.__plugins || {};

    // add plugins here
    // ...

    // setup global namespace under game for our global data
    game.global = {};

    // states
    game.state.add('Boot', BootState);
    game.state.add('MainMenu', MainMenuState);

    game.state.start('Boot');
});
