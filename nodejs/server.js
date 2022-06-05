const http = require('http');
const fs =require('fs');
//this will drop server
const server = http.createServer(function(req,res){
    res.write('Hellow World!');
    res.write('Hellow World!');
    res.end();
    res.end();
}).listen(8080)

