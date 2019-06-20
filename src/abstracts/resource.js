export default class Resource extends Phaser.GameObjects.Image {
    constructor (scene, x, y, texture, frame, id) {
        super(scene, x, y, texture, frame);

        this.id = id;
    }

    get id () { return this._id; }

    set id (id) { this._id = id || Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1)) + 1; }
}