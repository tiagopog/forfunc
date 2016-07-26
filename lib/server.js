'use strict';

var express = require('express'),
    app = express();

const PORT = 3000;

app.get('/', function (req, res) {
  console.log('Server hit!');
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
