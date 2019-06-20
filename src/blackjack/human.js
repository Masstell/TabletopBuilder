import Player from '../abstracts/player';

export default class Human extends Player {
    constructor(name) {
        super(name);
        this.hand = {};
        this.chips = {};
    }

    // get hand () { return this.hand };

    // get chips () { return this.chips };

    // set hand (hand) { this.hand = hand };

    // set chips (chips) { this.chips = chips };
}
