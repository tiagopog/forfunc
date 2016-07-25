http = require('http');

http.createServer(function(req, rep) {
  console.log('Request received!');
  rep.writeHeader(200, { "Content-Type": "text/plain" });
  rep.write("Hello World!");
  rep.end();
}).listen(8080);

console.log('Server is running...')
