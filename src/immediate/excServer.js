express = require('express');
config = require('./config/config.js')
excRouter = require('./excRouter.js')


class Server {

    constructor() {
      this.app = express();
    }
  
    start() {
      this.app.listen(config.EXP_SERVER_PORT, () => {
        console.log(('  Exceptions App is running at http://localhost:%d'), config.EXP_SERVER_PORT);
        console.log('  Press CTRL-C to stop\n');
      });
    }

    configureApiRoutes() {
      this.app.use('/exc', excRouter);
    }
}

excServer = new Server();
excServer.configureApiRoutes();
excServer.start();

