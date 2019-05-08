var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request il URL: ' + request.url);
  response.writeHead(200);
  response.end('Hola Mundo!');
};
var www = http.createServer(handleRequest);
www.listen(8080);
