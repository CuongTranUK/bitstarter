var express = require('express');
var fs = require('fs');
var bf = require('buffer');
var output = Buffer(256);

var app = express.createServer(express.logger());

function getFile() {
fs.readFile('index.html','utf8', function(err, data) {
	if(err) throw err;
	var buf = new Buffer(data, 'utf8');
	/* console.log(buf.toString('utf8')); */
	return buf;
});
}


app.get('/', function(request, response) {
  /* output = "Hello World"; */
  output = getFile();
  var str = output.toString('utf8');
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


