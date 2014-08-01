var db = require('../db/mock-db');
var serverUtil = require('./server-utils');

module.exports = function(response, next, start, count){
  if(start){
    var data = db.data.slice(start, start+count);
    serverUtil.sendResponse(response, data, 200, next);
  } else {
    serverUtil.sendResponse(response, db.data, 200, next);
  }
};