import Player from "../abstracts/Player.js";
// player imports Deck
// player imports Hand
// player imports wallet, but I don't need that here

export default class Dealer extends Player {
    // id comes from Player
    this.deck;
    this.hand;

    constructor ( id ) {
      this.deck = {};
      this.hand = {};
    }

    this.setDeck = deck => this.deck = deck;
    this.getDeck = () => return this.deck;

    this.setHand = hand => this.hand = hand;
    this.getHand = () => return this.hand;

    this.shuffleDeck = () => {

    }

    this.dealCardToPlayerHand = (playerId, private) => {
      const card = this.deck.pop();
      deck.transferCardToPlayerHand( playerId, private );
    }

    this.play = (){
      // AI logic
    }
}
