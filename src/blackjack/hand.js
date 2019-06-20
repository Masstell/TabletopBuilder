import CardCollection from '../abstracts/card_collection';
import PlayingCard from './playingcard';

export default class Hand extends CardCollection {
    constructor(scene) {
        super(scene);
        this.cards = [];
    }
    //Phaser.gameObjects.container
}
