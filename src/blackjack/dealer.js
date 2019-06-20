import Player from "./player.js";
// player imports Hand
// player imports wallet, but I don't need that here

class Dealer extends Player {
    constructor ( id ) {
      this.id = id;
    }

    play( playerList ){
      // AI logic
      let handValue = 0;
      let numPlayers = playerList.length - 1;
      let numPlayersImBeating = 0;
      let currentVals = [];
      let victoryThreshhold = .75;

      this.setState( "HIT" );

      // Reveal my cards
      this.hand.map((card) => {
        card.private = false;
      });
      // TODO: Send a render event to show this.

      while( "HIT" === this.state ){
        // Determine my current hand value.
        currentVals = this.hand.getValues(); // an array of hand values 21 or less

        // TIME TO THINK!
        // If I bust, then game over.
        if( 0 === currentVals.length ){
          this.setState("BUST");
        }else if( 21 === currentVals[0] ){ // If I have 21, then game over.
          this.setState("STAND");
        }else{
          // If I don't have 21, am I at least beating most of the players?
          // I'll need to make sure to check all possible hand values.

          // loop through the possible values of my hand
          for( i = 0; i < currentVals.length; i++ ){
            handValue = currentVals[i];
            numPlayersImBeating = 0;

            // Check my hand against the hand values of the other players
            playerList.map((player) => {
              if( 0 === player.getHand().getValues().length ){ // player busted
                numPlayersImBeating += 1;
              }else if( player.getHand().getValues()[0] <= handValue ){ // push or win
                numPlayersImBeating += 1;
              }
            });

            // Am I beating enough players to stand?
            if( numPlayersImBeating / numPlayers >= victoryThreshhold ){
              this.setState("STAND");
              break;
            }
          }
        }

        if( "HIT" === move ){
          this.hand = Deck.hit();
        }
      }
    }
}

export default Dealer;
