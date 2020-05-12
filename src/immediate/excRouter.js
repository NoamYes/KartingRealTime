express = require('express');

const eController = require('./excController.js');

const excRouter = express.Router();
const PermissionMiddlewareFunc = () => {return};
const validatorMiddlewareFunc = () => {return};

excRouter.post('/exc', PermissionMiddlewareFunc,
            validatorMiddlewareFunc,
             (req, res) => {
                eController.sendUsers(req, res)
             });

module.exports = {excRouter}