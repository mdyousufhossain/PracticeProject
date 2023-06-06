const express = require("express");

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

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



app.get("/",(req,res) => {
    res.status(200).send(comments)
})





app.listen(port,() => {
    console.log("hey this app is running on : http://localhost:3030/")
})

