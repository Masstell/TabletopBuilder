class CardCollection {

    constructor {
        this.cards = [];
    }

    getCollection() {
        return this.cards;
    }

    shuffleCollection() {
    }

    addCard(card) {
        this.cards.push(card);
    }

    removeCard(cardIndex) {
        this.cards.splice(cardIndex, 1);
    }
}
