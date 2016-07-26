const http = require('http');
const index = require('./index');

http.createServer(index.payments).listen(8080);

console.log('Server is running...')
