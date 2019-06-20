
let card = {};

function new(img, name, desc, value) {
    // has a sprite
    card.img = img;

    // has a name
    card.name = desc || 'newCard';

    // has a description
    card.desc = desc || 'Description of my Card';

    // has a value
    card.value = value || 1;
}
