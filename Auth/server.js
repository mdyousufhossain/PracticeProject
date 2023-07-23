const fs = require('fs')
const path = require("path");
const https = require("https");
const expess = require("express");
const app = expess();
const PORT = 8080;

app.get("/dashboard", (req, res) => {
  res.send("this is admin panel");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

function Server() {
  https.createServer({
    
    key :fs.readFileSync('key.pem'),
    cert :fs.readFileSync('cert.pem')

  }).listen(PORT, () => {
    console.log(`server started in ${PORT} `);
  });
}

Server();
