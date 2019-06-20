
export default class Player {
    constructor(name) {
        this.name = name || 'Player Who Must Not Be Named';
        this.state = "READY";
    }

    setState( state ){ this.state = state; }
    getState(){ return this.state; }
}
