const fs = require('fs')
const path = require("path");
const https = require("https");
const expess = require("express");
const app = expess();
const PORT = 8080;

app.get("/:user/dashboard", (req, res) => {
  res.send("this is admin panel");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.post('/:user/dashboard',(req , res) => {
  res.send('user Created')
})





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