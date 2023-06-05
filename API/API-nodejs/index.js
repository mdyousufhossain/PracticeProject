const express = require('express')
const app = express()
const port = 3000



// app.use((res,req) => {
//     res.res.send({"color":"Red"})

// })

app.get("/dogs",(res,req) => {
    res.res.send({"type":"animal","name":"dog","attribute":"Loyality"})
})


app.get("/",(res,req) => {
  res.res.send({"type":"animal","name":"Human","attribute":"humanity"})
})



app.listen(port, () => {
  console.log(`Example app listening on port : http://localhost:3000/`)
})