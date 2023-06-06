const express = require("express");
const app = express();
const port = 8080;
const path = require('path')

app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.set('views', path.join(__dirname, "views"))

app.set('view engine','ejs')

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

app.get('/comments',(req,res) => {
  res.render('comments/index', { comments })
})
 

app.get('/comments/new', (req, res ) => {
    res.render('comments/new')
})

app.post('/comments',(req,res) => {
    const { username,comment } = req.body
    // adding new element from the list 
    comments.push({ username,comment })
    // using redirection after new comment
    res.redirect('/comments')
})

app.get("/form",(res,req) => {
    /**
     * THIS IS FORM PAGE ADDING ITEM FROM FORM 
     */
    res.res.send("this is home page")
})

app.post("/form",(res,req) => {
    const { fname , sname } =  req.req.body 
    // SCRAPPING ITEM FROM THE body ! / its pretyy much as params
    res.res.send(`<h1> this is ${fname} and their surename is ${sname} </h1>`)
})

app.listen(port, () => {
    
    console.log("server running on http://localhost:8080/")
})