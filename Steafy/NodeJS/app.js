var express = require('express');
var app = express();

var MatiereController = require('./home/homeController');
app.use('/home', MatiereController);

module.exports = app;