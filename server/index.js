var fs = require('fs');
var server = require('restify').createServer({
  version: '1.0.0'
});

// Automatically load handlers in handlers directory
fs.readdirSync(__dirname + '/handlers/').forEach(function (file) {
  console.log('file', file)

  require('./handlers/' + file.substr(0, file.indexOf('.')))(server);

});

// Automatically load routes in routes directory
// In this case the restify body parser is attached to the server 
// and mapParams is set to false
fs.readdirSync(__dirname + '/routes/').forEach(function (file) {

  require('./routes/' + file.substr(0, file.indexOf('.')))(server);

});

module.exports = server;
