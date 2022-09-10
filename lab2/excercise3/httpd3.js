
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
    // res.on('data', (chunk) => {
    //     console.log(chunk);
    // }).on('end', () => {
    //     console.log('end');
    // })
    // res.end();
    if (req.method === 'POST') {

      // console.log(req.data)
      //req.data will show undefined because data are coming in streaming way data are not coming altogether
      //thats why we have to listen as data are coming by chunk 
      //use on to get data
      req.on('data',(chunkOfData)=>{
          console.log("Your Submitted Data : "+ chunkOfData.toString());
      })
      res.write("<h1>You are successfully logged in</h1>")
      res.writeHead(200, {"Content-type":"text/html"})
      res.end();

  }
    // res.end(html);
    // res.end("dd")
    console.log("req method : " + req.method + " " + "req url:"+ req.url + " " + req.httpVersion);
    
};
var server = http.createServer(requestListener);

server.listen(8000);
