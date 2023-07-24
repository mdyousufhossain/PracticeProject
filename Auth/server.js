const fs = require('fs')
const path = require("path");
const https = require("https");
const expess = require("express");
const jokeRoute =require('./backend/Route/jokeRoute')
const app = expess();
const PORT = 8080;

app.use(expess.json());
app.use(expess.urlencoded({ extended: false }));

app.use("/api/:user/",jokeRoute)

// function Server() {
//   https.createServer({
    
//     key :fs.readFileSync('key.pem'),
//     cert :fs.readFileSync('cert.pem')

//   }).listen(PORT, () => {
//     console.log(`server started in ${PORT} `);
//   });
// }

// Server();

function fakeServer() {
    app.listen(PORT, () => {
        console.log("server started at", PORT)
    })
}

fakeServer()