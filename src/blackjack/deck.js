import Card from '../abstracts/card';
import CardCollection from '../abstracts/card_collection';

export default class Deck extends CardCollection {
    //let VALUES = {'A':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, 'T':10, 'J':10, 'Q':10, 'K':10};

    constructor(scene) {
        super(scene);
        const SUITS = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
        const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        SUITS.forEach((suit) => {
            RANKS.forEach((rank) => {
                this.addCard( new Card("asdf", rank, suit) );
            });
        });
        this.shuffleCollection();
    }

    drawCard() {
        let drawnCard = this.cards.pop();
        return drawnCard;
    }
}
