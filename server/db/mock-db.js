var fs = require("fs");
var path = require("path");

var filepath = __dirname + "/plans.txt" ;
var data; 
if( fs.existsSync(filepath) ){
  var content = fs.readFileSync(filepath,'utf8');
  var data = [content.split("\n")];
  
}
 
module.exports.data = data;