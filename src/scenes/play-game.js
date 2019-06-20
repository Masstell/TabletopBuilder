import Chip from '../blackjack/chip';

export default class PlayGameScene extends Phaser.Scene {
    constructor (config, key = 'PlayGame') {
        super({ key: key });
    }

    init () {
        
    }

    preload () {
        // load all the resources required for this scene before using them
        this.load.image('pokerchip1', 'pokerchip1.png');
    }

    create () {
        let chip = new Chip({ 
            imageProps: {
                scene: this, 
                x: 50, 
                y: 50
            }
        });
        this.add.existing(chip.image);
    }

    update () {
    }
};
