import Card from '../abstracts/card';

export default class PlayingCard extends Card {
    constructor(scene, rank, suit) {
        let img = new Phaser.GameObjects.Image(scene, 0, 0, 'cards');
        let name = rank.toString() + suit.charAt(0);
        let desc = rank.toString() + ' of ' + suit;
        // make value a bit smarter for the face cards and aces
        let value = rank;
        super(scene, img, name, desc, value);
    }
}
