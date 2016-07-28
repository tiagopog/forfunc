'use strict';

// Main
var express    = require('express'),
    bodyParser = require('body-parser'),
    app        = express();

// Constants
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Initialize application
var init = require('./config/init');
init.run(app);

// Server start
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
