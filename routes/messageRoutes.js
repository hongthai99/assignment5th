const express = require('express');
const messController = require('../controller/messageController');
const routes = express.Router();

routes.post('/message', messController.postMessage);

module.exports = routes;