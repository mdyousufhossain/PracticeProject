const express  = require('express')
const connectDB = require('./config/dbConfig')
require('dotenv').config();
const userRoute = require('./Route/userRoute')
const cors = require('cors')

// server 
const app =  express()

const PORT = 5050 


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', userRoute )


// app.get('/' , (req, res ) => {
//     res.send("hey this is home")
// })


// app.get('/test' , (req, res ) => {
//     //route for testing 
//     res.send("hey this is test",)
// })

// app.get('/protected', (req, res) => {
//     console.log(req.headers.cookie)
//     res.send("this is secure route !")
// })

// Router 




const startServer = async () => {
    try {
      //calling for database connection
      await connectDB();
      // starting the server
      app.listen(PORT, () => {
        console.log(`server started at : http://localhost:${PORT}/`);
      });

    } catch (error) {
      console.error(error);
    }
  };
  
  // calling server
  startServer();




