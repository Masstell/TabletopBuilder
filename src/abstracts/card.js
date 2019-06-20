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
}
