const http = require('http');
const functions = require('./functions');

http.createServer(functions.dispatcher).listen(8080);

console.log('Server is running...')

// 'use strict';
//
// const app  = require('express')();
// const POST = 8080;
//
// app.get('/', function(req, res) {
// });
