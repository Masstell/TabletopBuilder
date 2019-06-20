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

            this._container.add(chip1);
            this._container.add(chip2);
            this._container.add(chip3);

            this._text = new Phaser.GameObjects.Text(this.scene, chip1.width / 2, 0, this.amount, { fontSize: '32px' });
            this._text.setOrigin(.5,.5);

            this._container.add(this._text);
        }

        return this._container;
    }

    removeAmountOfResources (amount = 1) {
        super.removeAmountOfResources(amount);

        if (this._text) {
            this._text.setText(this.amount);
        }
    }

    addToResources (resources) {
        super.addToResources(resources);

        if (this._text) {
            this._text.setText(this.amount);
        }
    }
}