var express = require('express');
var fs = require('fs');
var contentsfile = fs.readFile('index.html');
var app = express.createServer(express.logger());
var original = contentsfile.toString();
app.get('/', function(request, response) {
  response.send(original);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
