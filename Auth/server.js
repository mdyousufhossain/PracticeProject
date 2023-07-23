const https = require("https");
const expess = require("express");
const path = require("path");
const app = expess();
const PORT = 8080;

app.get("/dashboard", (req, res) => {
  res.send("this is admin panel");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

function Server() {
  https.createServer().listen(PORT, () => {
    console.log(`server started in ${PORT} `);
  });
}

Server();
