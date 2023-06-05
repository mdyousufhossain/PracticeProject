const express = require("express");
const app = express();
const port = 3000;

// app.use((res,req) => {
//     res.res.send({"color":"Red"})

// })

app.get("/dogs", (res, req) => {
  res.res.send({ type: "animal", name: "dog", attribute: "Loyality" });
});

app.get("/", (res, req) => {
  res.res.send({ type: "animal", name: "Human", attribute: "humanity" });
});

app.get("/fun", (res, req) => {
  res.res.send("<h1>hey hey this is just for fun </h1>");
});

app.get("/users/:user/", (res, req) => {
  const { user } = req.req.params;
  res.res.send(`<h1>Welcome home ${user} </h1>`);
});

app.post("/create", (res, req) => {
  res.res.send("creating post ");
});

app.get("*", (res, req) => {
  res.res.send("<h1> Invalid page please check your direction </h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port : http://localhost:3000/`);
});
