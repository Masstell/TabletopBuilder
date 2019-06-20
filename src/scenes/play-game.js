import io from 'socket.io-client';
import Bank from "../blackjack/bank";
import Hand from "../blackjack/hand";
import Wallet from "../blackjack/wallet";
import Deck from '../blackjack/deck';
import Human from '../blackjack/human';
import { creditResourcesFromBankToWallet } from '../blackjack/resource_actions';
import { transferCard } from '../blackjack/card_action';

export default class PlayGameScene extends Phaser.Scene {
    constructor(config, key = "PlayGame") {
        super({ key: key });
    }

    init() {}

    preload () {
        // load all the resources required for this scene before using them
        this.load.image('pokerchip1', 'pokerchip1.png');
        this.load.image("table", "background.png");
        this.load.image('cards', 'face_cards.png');
        this.load.image('card_backs', 'face_cards_back.png');
    }

    create () {
        // TOP: WEBSOCKET CLIENT CONNECTION
        let wsBase = 'ws://localhost:8000/';
        if (document.location.port < 1024) {
            // Privileged port should use itself for WebSocket
            wsBase = document.location.href;
        }
        console.log("USING WEBSOCKET: " + wsBase);
        this.socket = io(wsBase);
        this.socket.on('disconnect', () => {
            console.log('WEBSOCKET SERVER TERMINATED CONNECTION!');
        });
        // END: WEBSOCKET CLIENT CONNECTION

        let deck = new Deck(this);
        console.log(deck.getCollection());
        let hand = new Hand(this);
        console.log(hand);
        transferCard(deck, hand);
        transferCard(deck, hand);
        console.log(hand.getCollection());
        console.log(deck.getCollection());

        this.add.image(300, 300, "table");

        let bank = new Bank({
            gameObjectProps: {
                scene: this
            }
        });
        let wallet = new Wallet({
            gameObjectProps: {
                scene: this,
                x: 100,
                y: 100
            }
        });

        creditResourcesFromBankToWallet(5, bank, wallet);

        this.add.existing(wallet.gameObject);

        let human = new Human();
        console.log("Human", human);
    }

    update() {}
}
