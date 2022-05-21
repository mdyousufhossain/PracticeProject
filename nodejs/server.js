const http = require('http');
const fs =require('fs');

const server = http.createServer(function(req,res){
    res.write('Hellow World!');
    res.write('Hellow World!');
    res.end();
    res.end();
}).listen(8080)

