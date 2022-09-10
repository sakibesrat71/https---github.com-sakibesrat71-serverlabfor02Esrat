
var http = require('http');
var fs = require('fs');
// const path = require('path');
const requestListener = function (req, res) {
    console.log(req.url);
    var x = fs.readFileSync(`public/public/${req.url}`)
    const ext = req.url.substring(req.url.lastIndexOf('.'));
    const mimes = {
      ".html": "text/html",
      ".css": "text/css",
      ".js": "text/javascript",
      ".ico": "image/x-icon"
    }
    console.log("ext:" + ext);
    res.writeHead(200, {
        'Content-Type': mimes[ext]
      });
    res.write(x);
    res.end();
    // res.end(html);
    // res.end("dd")
    console.log("req method : " + req.method + " " + "req url:"+ req.url + " " + req.httpVersion);
    
};
var server = http.createServer(requestListener);

server.listen(8000);
