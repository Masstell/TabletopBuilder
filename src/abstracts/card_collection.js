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
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].name === card.name) {
                this.cards.splice(i, 1);
            }
        }
    }

    chooseRandomCard() {
        let randomNumber = Math.floor(Math.random() * this.getCollection().length);
        return this.cards[randomNumber];
    }
}
