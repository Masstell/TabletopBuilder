import Player from "../abstracts/player.js";
import Deck from "./deck";
import Hand from "./hand";
import Wallet from "./wallet";
// player imports Deck
// player imports Hand
// player imports wallet, but I don't need that here

Player.deck = {};
Player.hand = {};
Player.wallet = {};

export default Player;
