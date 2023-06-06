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

app.get("/search",(req,res) => {
  const { q } = req.query;
  if(!q){ 
    res.send("nothing found if nothing searched")
  }
  res.send(`<h1> Search results for : ${q}</h1>`)
})

app.get("/users/:user/", (res, req) => {
  const { user } = req.req.params;
  res.res.send(`<h1>Welcome home ${user} </h1>`);
});

app.get("/users/:user/:post", (res, req) => {
  const { user , post } = req.req.params;
  res.res.send(`
    <h1>Welcome home ${user} </h1>
      <h2> there it is your post ${post}</h2>
  `);
});

app.post("/create", (res, req) => {
  res.res.send("creating post ");
});

app.get("/bad/:word",(res,req) => {
  const { word } = req.req.params

  res.res.send(`<h1> here is your bad word:</h1> <h3> ${word} </h3> `)

})


app.get("*", (res, req) => {
  res.res.send("<h1> Invalid page please check your direction </h1>");
});



app.listen(port, () => {
  console.log(`Example app listening on port : http://localhost:3000/`);
});
