import Chip from "../blackjack/chip";
import Bank from "../blackjack/bank";
import Wallet from "../blackjack/wallet";
import Deck from '../blackjack/deck';
import Dealer from '../blackjack/dealer';
import Human from '../blackjack/human';
import { creditResourcesFromBankToWallet } from '../blackjack/resource_actions';

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

    create() {
        let deck = new Deck(this);
        console.log(deck.getCollection());

        this.add.image(300, 300, "table");

        let chip = new Chip({
            gameObjectProps: {
                scene: this,
            x: 50,
            y: 50
            }
        });
        this.add.existing(chip.gameObject);

        let bank = new Bank({
            gameObjectProps: {
                scene: this
            }
        });
        let wallet = new Wallet({
            gameObjectProps: {
                scene: this
            }
        });

        creditResourcesFromBankToWallet(5, bank, wallet);

        console.log(bank, wallet);

        let human = new Human();
        console.log("Human", human);
    }

    update() {}
}
