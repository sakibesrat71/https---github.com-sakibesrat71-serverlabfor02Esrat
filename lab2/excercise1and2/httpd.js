var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write("<h1>Hello World</h1>");
      return res.end();
}).listen(8000);  
