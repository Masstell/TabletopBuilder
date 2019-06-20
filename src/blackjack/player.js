import Player from "../abstracts/player.js";
import Hand from "./hand";
import Wallet from "./wallet";
// player imports Deck
// player imports Hand
// player imports wallet, but I don't need that here

Player.hand = new Hand;
Player.wallet = new Wallet;
Player.states.push("HIT");
Player.states.push("STAND");
Player.states.push("BUST");

Player.setHand = function(h){ this.hand = h; };
Player.getHand = function(){ return this.hand; };

Player.setWallet = function(w){ this.wallet = w; };
Player.getWallet = function(){ return this.wallet; };

export default Player;
