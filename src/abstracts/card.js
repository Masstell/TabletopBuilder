class Card {

    constructor(img, name, desc, value) {
        // has a sprite
        this.img = img;

        // has a name
        this.name = desc || 'newCard';

        // has a description
        this.desc = desc || 'Description of my Card';

        // has a value
        this.value = value || 1;
    }

    get id () { return this._id; }

    set id (id) { this._id = id || Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1)) + 1; }
}
