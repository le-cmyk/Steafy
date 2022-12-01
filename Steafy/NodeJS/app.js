var express = require('express');
var cors = require('cors')
var app = express();
app.use(
    cors({
      origin: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
    })
  );
var MatiereController = require('./home/homeController');
app.use('/home', MatiereController);


module.exports = app;