var express = require('express');
var fs = require('fs');
var bf = require('buffer');
var output = Buffer(256);

var app = express.createServer(express.logger());
fs.readFileSync('index.html', , function(err,data)) {
	if(err) throw err;
	output = data;
});
app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
