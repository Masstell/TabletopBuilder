export default class Deck extends CardCollection {
    let SUITS = ['C', 'S', 'H', 'D'];
    let RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
    let VALUES = {'A':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, 'T':10, 'J':10, 'Q':10, 'K':10}


    constructor() {
        this.cards = [];
        SUITS.forEach(function(suit) {
            RANKS.forEach(function(rank) {
                this.cards.push( new Card(suit, rank) );
            });
        });
        this.shuffleCollection;
    }

    drawCard() {
        let drawnCard = this.cards.pop();
        return drawnCard;
    }
}
