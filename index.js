var token = require('./token.js');
var valid = require('./valid.js');
var db = require('./db.js');

var express = require('express');
var bodyParser = require('body-parser');

var website = 'example.com/';
var app = express();

app.use(express.static('static'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/:token([a-z0-9]+)', db.load, function(req, res) {
  res.redirect(req.link);
});

app.get('/:token([a-z0-9]+)/expand', db.load, function(req, res) {
  res.send(req.link);
});

app.post('/', valid, token, db.store, function(req, res) {
  res.send(website + req.token);
});

app.use(function(req, res, next) {
  res.status(404).send('404 not found');
});

app.listen(3000);
