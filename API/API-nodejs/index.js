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

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

app.patch('/comments/:id', (req, res) => {
  res.send('Updating Something!');
});

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  const newComment = { username, comment, id: uuid() };
  comments.push(newComment);
  res.redirect('/comments');
});

app.listen(port, () => {
  console.log('Server running on http://localhost:8080/');
});
