const express = require("express");
const app = express();
const port = 8080;


app.use(express.urlencoded({ extended:true }))

app.get("/form",(res,req) => {
    console.log(req.req.body)
    res.res.send("this is home page")
})

app.post("/form",(res,req) => {
    const { fname , sname } =  req.req.body 

    res.res.send(`<h1> this is ${fname} and their surename is ${sname} </h1>`)
})

app.listen(port, () => {
    
    console.log("server running on http://localhost:8080/")
})