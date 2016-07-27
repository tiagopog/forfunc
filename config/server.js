'use strict';

// Constants (class, module etc)
const express    = require('express');
const bodyParser = require('body-parser');
const index      = require('../index');
const PORT       = 3000;

var app = express();

// Middleware
app.use(bodyParser.json());

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
