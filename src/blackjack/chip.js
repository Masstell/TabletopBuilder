import Resource from '../abstracts/resource';

export default class Chip extends Resource {
    get texture () {
        let {
            imageProps: {
                texture
            }
        } = this.config;

        return texture || 'pokerchip1';
    }

    get image () { 
        if ('undefined' === typeof this._image) {
            this._image = new Phaser.GameObjects.Image(this.scene, this.x, this.y, this.texture);
        }

        console.log(this.texture, this._image);

        return this._image;
    }
}