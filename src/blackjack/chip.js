import Resource from '../abstracts/resource';

export default class Chip extends Resource {
    get texture () {
        let {
            gameObjectProps: {
                texture
            }
        } = this.config;

        return texture || 'pokerchip1';
    }

    get gameObject () { 
        if ('undefined' === typeof this._image) {
            this._image = new Phaser.GameObjects.Image(this.scene, this.x, this.y, this.texture);
        }

        return this._image;
    }
}