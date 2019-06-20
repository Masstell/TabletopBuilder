import Chip from "../blackjack/chip";
import ResourceCollection from "../abstracts/resource_collection";
import Chip from '../blackjack/chip';
import Bank from '../blackjack/bank';
import Wallet from '../blackjack/wallet';

export default class PlayGameScene extends Phaser.Scene {
  constructor(config, key = "PlayGame") {
    super({ key: key });
  }

  init() {}

  preload() {
    // load all the resources required for this scene before using them
    this.load.image("pokerchip1", "pokerchip1.png");
    this.load.image("table", "background.png");
  }

    create () {
        this.add.image(300, 300, "table");
        let chip = new Chip({ 
            imageProps: {
                scene: this, 
                x: 50, 
                y: 50
            }
        });
        this.add.existing(chip.image);
        let bank = new Bank();
        let wallet = new Wallet();

        console.log(bank, wallet);
    }

    console.log(resourceCollection);
  }

  update() {}
}
