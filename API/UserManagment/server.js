const express  = require('express')



// server 
const app =  express()

const PORT = 5050 

app.listen(PORT ,() => {
    console.log(`server started at : http://localhost:${PORT}/`
    )
})




app.get('/' , (req, res ) => {

    res.send("hey this is home")
})

console.log(app.listenerCount())

