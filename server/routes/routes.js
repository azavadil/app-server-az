var db = require('../db/mock-db');
var sendPlans = require('../helpers/send-plans');

var getPlans = function (request, response, next) {
  // TODO querystring
  var querystringFound = false;
  if(request.querystring){
    querystringFound = true
    var start = parseInt(request.querystring.start);
    var count = parseInt(request.querystring.count);
    sendPlans(response, next, start, count);
  } else {
    sendPlans(response, next);
  }

};


module.exports = function (server) {

  // Get calc objects
  server.get('/api/getplans', getPlans);
  //server.get('/api/calcobjects/:objId', getCalcObjectById);

  // Create a new calc object
  //server.post('/api/calcobjects', createCalcObject);

  return server;

};
