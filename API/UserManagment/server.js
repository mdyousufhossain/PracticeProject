const express  = require('express')



// server 
const app =  express()

const PORT = 5050 





app.get('/' , (req, res ) => {
    
    res.send("hey this is home")
})

app.get('/test' , (req, res ) => {
    //route for testing 
    res.send("hey this is test",)
})

app.listen(PORT ,() => {
    console.log(`server started at : http://localhost:${PORT}/`,
    )
})



