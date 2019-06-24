import User from './game/user';

class Game {
    constructor (webSocketServer) {
        this.webSocketServer = webSocketServer;

        this.users = {};
    }

    addUser (userName) {
        if (this.users[userName]) throw `User, ${userName} already exists in game.`;

        let user = new User(userName);

        this.users[userName] = user;

        this.users[userName] = new User(userName);
        //console.log(`ADDING USER ${userName} TO GAME ...`);
    }

    removeUser (userName) {
        if (this.users[userName]) {
            //console.log(`REMOVING USER ${userName} FROM GAME ...`);
            delete this.users[userName];
        }
    }
}

export default Game;
