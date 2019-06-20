
export default class Player {
    constructor(name) {
        this.name = name || 'Player Who Must Not Be Named';
        this.states = ["READY","PLAYING"];

        this.state = this.states.indexOf("READY");
    }

    setState( state ){
      if( this.states.indexOf(state) > -1){
        this.state = this.states.indexOf(state);
      }else{
        throw "Tried to set invalid state (" + state + ")";
      }
    }
    getState(){ return this.state; }
    hasState( state ){
      let index = this.states.indexOf(state);
      return( index > -1 && this.state === index );
    }
}
