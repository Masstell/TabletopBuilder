import ResourceCollection from '../abstracts/resource_collection';
import Chip from './chip';

export default class Wallet extends ResourceCollection {
    constructor (config) {
        let _config = {
            resourceClass: Chip,
            ...config
        };

        super(_config);
    }

    get gameObject () { 
        if ('undefined' === typeof this._container) {
            this._container = new Phaser.GameObjects.Container(this.scene, this.x, this.y);

            let chip1 = new Phaser.GameObjects.Image(this.scene, 0, 0, 'pokerchip1');
            let chip2 = new Phaser.GameObjects.Image(this.scene, chip1.width, 0, 'pokerchip1');
            let chip3 = new Phaser.GameObjects.Image(this.scene, chip1.width / 2, 0, 'pokerchip1');

            this._container.add.existing(chip1);
            this._container.add.existing(chip2);
            this._container.add.existing(chip3);
        }

        return this._container;
    }
}