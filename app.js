'use strict';

var Express = require('express');
var app = Express();

app.get('/', function(req, res, next) {
  res.send('hello world');
  return next();
});

app.listen(process.env.PORT || 5000);

module.exports = app;
