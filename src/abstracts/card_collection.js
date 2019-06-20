export default class CardCollection {

    constructor(cards) {
        this.cards = cards;
    }

    getCollection() {
        return this.cards;
    }

    shuffleCollection() {
        this.cards = lodash_shuffle(this.cards);
    }

    addCard(card) {
        this.cards.push(card);
    }

    removeCard(card) {
    }

    chooseRandomCard() {
        let randomNumber = Math.floor(Math.random() * this.cards.length());
        return this.cards[randomNumber];
    }
}
