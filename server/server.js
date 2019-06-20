import express from 'express';
import http from 'http';

class Server {
    constructor () {
        this.expressApp = express();

        this.httpServer = http.Server(this.expressApp);
    }

    initExpressApp () {
        this.expressApp.use(express.static(__dirname + '/public'));

        this.expressApp.get('/', (req, res) => {
            res.send({
                message: ''
            });
        });
    }

    startHTTPServer () {
        this.httpServer.listen(8000, () => {
            console.log(`Listening on ${this.httpServer.address().port}`);
        });
    }

    start () {
        this.initExpressApp();

        this.startHTTPServer();
    }
}

export default Server;
