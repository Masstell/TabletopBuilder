import Chip from '../blackjack/chip';

export default class PlayGameScene extends Phaser.Scene {
    constructor (config, key = 'PlayGame') {
        super({ key: key });
    }

    preload () {
        // load all the resources required for this scene before using them
        this.load.image('pokerchip1', 'pokerchip1.png');
    }

    init () {
        let chip = new Chip({ 
            imageProps: {
                scene: this, 
                x: 50, 
                y: 50
            }
        });
        console.log(chip.image);
        this.add.existing(chip.image);
        this.add.image(100,100,'pokerchip1');
    }

    create () {
    }

    update () {
    }
};
