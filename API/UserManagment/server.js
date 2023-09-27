// dependies
const express  = require('express')
const connectDB = require('./config/dbConfig')
require('dotenv').config();
const cors = require('cors')
const cookieParser = require('cookie-parser');
//routes
const userRoute = require('./Route/api/userRoute')
const refresh = require('./Route/refresh')
const registerRoute = require('./Route/registerRoute')
const logoutRoute = require('./Route/logoutRoute')
const loginRoute = require('./Route/loginRoute')

// server 
const app =  express()

const PORT = 5050 

// middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



// register
app.use('/api/v1/', registerRoute )
// login 
app.use('/api/v1/', loginRoute )
// refresh token 
app.use('/api/v1/' , refresh )
// logout 
app.use('/api/v1/' , logoutRoute )
//api
app.use('/api/v1/', userRoute )





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




