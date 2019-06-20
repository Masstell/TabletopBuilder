import ResourceCollection from '../abstracts/resource_collection';
import Chip from './chip';

export default class Bank extends ResourceCollection {
    constructor (config) {
        let _config = {
            resourceClass: Chip,
            ...config
        };

        super(_config);
    }

    get gameObject () { 
        if ('undefined' === typeof this._gameObject) {
            this._gameObject = new Phaser.GameObjects.GameObject(this.scene, this.x, this.y);
        }

        return this._gameObject;
    }

    removeAmountOfResources (amount = 1) {
        return this.generateResources(amount);
    }
}