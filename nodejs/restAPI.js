/* 
Primary file for the API
name : Website health checker API 
author : md Yousuf hossain
Date : 01-sept-22
*/

//dependency
var http = require('http');

var url  = require('url');


// Start the server port : 3000
var server = http.createServer(
    
    function(req,res)
    
    {
    // geting the url
    var parsedURL = url.parse(req.URL,true)

    //Get in the path
    var path = parsedURL.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g,'')

    res.end('Hello Baby');

    //User authentecation

    console.log("Request Recived on patj :" + trimmedPath)
})




server.listen(8080,function(){
    console.log('server is Running on port 3002');
})

