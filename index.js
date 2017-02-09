//Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var request = require('request');

//Setup Path directory (static)
app.use(express.static(path.join(__dirname, 'static')));

//Decode POST data in JSON and URL encoded formats
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Observe server activity
app.use(require('morgan')('dev'));


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

var server = app.listen((process.env.PORT || 3000), function(){
  console.log('listening on 3000');
});


module.exports = server;
