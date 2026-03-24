const serverless = require('serverless-http');
const app = require('../../router/routeController');

module.exports.handler = serverless(app);