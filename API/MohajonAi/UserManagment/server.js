// dependies
const express = require("express");
const connectDB = require("./config/dbConfig");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./Middleware/logger");

//admin routes
//const userRoute = require("./Route/adminRoute/api/userRoute");
const refresh = require("./Route/adminRoute/refresh");
const registerRoute = require("./Route/adminRoute/registerRoute");
const logoutRoute = require("./Route/adminRoute/logoutRoute");
const loginRoute = require("./Route/adminRoute/loginRoute");
/**
 * organization route 
 */
const creatingOrganization = require('./Route/organizationRoute/createRoute')

// middleware

const credentials = require("./Middleware/credentials");
const path = require("path");
const verifyJWT = require("./Middleware/verifyJWT");

// server
const app = express();
const PORT = 5050;

app.use(logger);

app.set('view engine', 'ejs');

// Specify the directory where EJS templates will be stored
app.set('views', path.join(__dirname, 'views'));

// app.use("/bal", (req, res) => {
//   res.render("register", { errors: null, name: "", email: "" });
// });
// middleware
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*    
 this is admin panel route
 * 
 */


// Default root route
//  app.get('/', (req, res) => {
//    res.send('This is the default root page.');
//  });
 

 

// register
app.use("/api/v1/", registerRoute); // register localhost:5050/api/v1/register 
app.use("/api/v1/", loginRoute); //  login localhost:5050/api/v1/login
app.use("/api/v1/", refresh); // refresh token localhost:5050/api/v1/token
app.use("/api/v1/", logoutRoute);// logout
app.use(verifyJWT)
app.use("/api/v1/", creatingOrganization)

/*
 * 
 * This is member for orgenation route
 * 
*/


// admin only admin can access 
// app.use('/api/v1/members', memberRoute)
// app.use("/api/v1/", userRoute);


// app.use('/api/v1/member', orgCreateRoute)
// app.use('/api/v1/member', userjoinRoute)
// app.use('/api/v1/member', blogRoute) // find all the post localhost:5050/api/v2/member/blog/posts
//app.use('/api/v1/member' , createPostRoute) // auth member blogpost localhost:5050/api/v2/member/blog/create

// app.use('*', (req, res) => {
//   res.status(404).send('Page not found.');
// });
// error handler
// app.use(errorHandler)

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
