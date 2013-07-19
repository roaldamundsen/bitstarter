var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buf = new Buffer(fs.readFileSync('index.html', "utf-8"))
len = buf.length

app.get('/', function(request, response) {
  response.send(buf.toString('utf8', 0, len));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
