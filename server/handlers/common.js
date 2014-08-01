var restify = require('restify');

module.exports = function (server) {
  // set mapParams to false to ensure no possiblities of equivocation
  // instead of accessing querystring objects on request.params we access
  // querystring through request.querystring.variableName
  server.use(restify.bodyParser({mapParams: false}));

  return server;

};
