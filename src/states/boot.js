// json imports

// web fonts
// import WebFont from 'webfontloader';
// require('../../assets/css/fonts.css');
// require('../../assets/fonts/[font].ttf');

// require in other assets to be included but not added to cache at this time
// require('../../assets/sounds/sound.wav');
// require('../../assets/json/tilemap.json');
// require('../../assets/images/tileset.png');

export default class LoadingState extends Phaser.State {
    init () {
        // font loading
        // this.areFontsLoaded = false; // use this if you are loading web fonts
        this.areFontsLoaded = true;

        this.showLoading();
    }

    preload () {
        // load json configuration files
        // this.game.cache.addJSON('jsonConfig', null, jsonConfig);

        // load web fonts
        /* WebFont.load({
            active: function () {
                this.webfontsLoaded();
            }.bind(this),
            custom: {
                families: ['font name'],
                urls: ['/assets/fonts.css']
            }
        }); */
    }

    create () {
        // p2 physics
        /* this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.setImpactEvents(true);
        this.game.physics.p2.restitution = 0.8; */

        // arcade physics
        // this.game.physics.startSystem(Phaser.Physics.ARCADE);
    }

    update () {
        if (this.areFontsLoaded) {
            this.state.start('MainMenu');
        }
    }

    showLoading () {
        var loadingText = 'Loading...';

        var text = this.add.text(0, 0, loadingText, {
            font: 'Helvetica, Arial, Sans-Serif',
            fill: '#ffffff',
            fontSize: 48,
            boundsAlignH: 'center',
            boundsAlignV: 'middle'
        });

        text.setTextBounds(0, 0, this.world.width, this.world.height);
    }

    webfontsLoaded () {
        this.areFontsLoaded = true;
    }
};
