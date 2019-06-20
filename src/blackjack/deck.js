import PlayingCard from './playingcard';
import CardCollection from '../abstracts/card_collection';

export default class Deck extends CardCollection {
    constructor(scene) {
        super(scene);
        const SUITS = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
        const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        SUITS.forEach((suit) => {
            RANKS.forEach((rank) => {
                this.addCard( new PlayingCard(scene, rank, suit) );
            });
        });
        this.shuffleCollection();
    }

    drawCard() {
        let drawnCard = this.cards.pop();
        return drawnCard;
    }
}
