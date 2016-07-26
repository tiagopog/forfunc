'use strict';

// Constants (classes, modules etc)
const express = require('express'),
      index   = require('../index'),
      PORT    = 3000;

var app = express();

// Cloud Function's entry point
var entryPoint = function(req, res) {
  index.payments(req, res);
};

// Basic router
app.get('/', entryPoint);
app.post('/', entryPoint)

// Server start
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
