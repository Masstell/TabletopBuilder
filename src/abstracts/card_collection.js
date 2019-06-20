import Card from '../abstracts/card';

export default class CardCollection {

    constructor(scene) {
        this.cards = [];
        this.scene = scene;
    }

    getCollection() {
        return this.cards;
    }

    shuffleCollection() {
        this.cards = _.shuffle(this.cards);
    }

    addCard(card) {
        this.cards.push(card);
    }

    removeCard(card) {
    }

    chooseRandomCard() {
        let randomNumber = Math.floor(Math.random() * this.getCollection().length);
        return this.cards[randomNumber];
    }
}
