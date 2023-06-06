const express = require("express");

const app = express()

const port = 3030


const comments = [
    {
      username:'Bob',
      comment: "shit this shit is funny hahahah"
    },
    {
      username:'wolf',
      comment: "fucking hell do that shit"
    },
    {
      username:'siyabith',
      comment: "iki mono ga kari "
    }
  ]



app.get("/datas",(req,res) => {
    res.render(comments)
})


app.listen(port,() => {
    console.log("hey this app is running on : http://localhost:3030/")
})

