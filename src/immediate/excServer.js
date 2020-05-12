express = require('express');
config = require('./config/config.js')
// excRouter = require('./excRouter.js')
bodyParser = require('body-parser');
eController = require('./excController')

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
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: true }));
      // this.app.use('/exc', excRouter);

      this.app.route('/exc').post((req, res) => {
        eController.sendUsers(req, res)
      }) 

    }
}

const PermissionMiddlewareFunc = () => {return};
const validatorMiddlewareFunc = () => {return};

excServer = new Server();
excServer.configureApiRoutes();
excServer.start();

