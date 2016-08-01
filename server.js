var express = require('express');
var app = express();
var path = require('path');

app.use("/public", express.static(__dirname + '/public'));
app.use("/assets", express.static(__dirname + '/assets'));
app.use("/lib", express.static(__dirname + '/lib'));
app.use("/src", express.static(__dirname + '/src'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
