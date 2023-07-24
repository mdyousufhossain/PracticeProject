const expess = require('express')
const route = expess.Router()
const {GettingAllJoke, GettingOneJoke , CreatingJoke,UpdatingJoke,
DeletingJoke }  = require('../Controllar/jokeController')





route.get('/all',GettingAllJoke)
route.get('/:id',GettingOneJoke)
route.post('/:id',CreatingJoke)
route.post('/:id',UpdatingJoke)
route.post('/:id',DeletingJoke)


module.exports = route




