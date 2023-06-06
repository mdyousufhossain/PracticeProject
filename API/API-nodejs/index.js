const express = require("express");
const app = express();
const port = 8080;
const path = require('path')
const { v4: uuid } = require('uuid')




app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.set('views', path.join(__dirname, "views"))

app.set('view engine','ejs')

const comments = [
  {
    id:uuid(),
    username:'Bob',
    comment: "shit this shit is funny hahahah"
  },
  {
    id:uuid(),
    username:'wolf',
    comment: "fucking hell do that shit"
  },
  {
    id:uuid(),
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


app.patch('comments/:id', (req,res) => {
  res.send("Updating Something!")
})

app.post('/comments',(req,res) => {
    const { username,comment } = req.body
    // adding new element from the list 
    comments.push({ username,comment,id: uuid() })
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