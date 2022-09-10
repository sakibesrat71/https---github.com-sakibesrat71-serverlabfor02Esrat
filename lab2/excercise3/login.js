const http = require('http');
const fs = require('fs');
const loadWebPage = require('./loadContentPages');
require("dotenv").config({ path: "../dependency/.env" });


const server = http.createServer((req,res)=>{

    if(req.url === '/'  ){

        res.writeHead(200, {"Content-type":"text/html"})
        res.write(loadWebPage.loadPageContents.formPageData)
        res.end();

   }
    else if (req.url === '/login' && req.method === 'POST') {

        // console.log(req.data)
        //req.data will show undefined because data are coming in streaming way data are not coming altogether
        //thats why we have to listen as data are coming by chunk 
        //use on to get data
        req.on('data',(chunkOfData)=>{
            console.log("Your Submitted Data : "+ chunkOfData.toString());
        })
        res.writeHead(200, {"Content-type":"text/html"})
        res.write(loadWebPage.loadPageContents.successPageData)
        res.end();

    }
    else {
        // res.statusCode(400).send('Wrong url');
        res.writeHead(404, {"Content-type":"text/html"})
        res.write("CANNOT GET URL : "+req.url)
        res.end();
    }

})

server.listen(process.env.SERVER_PORT, ()=>{
    console.log(SERVER IS LISTENING TO PORT : ${process.env.SERVER_PORT})
})