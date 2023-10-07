// dependies
const express = require("express");
const connectDB = require("./config/dbConfig");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./Middleware/logger");
const errorHandler = require("./Middleware/errorHandle");

//routes
const userRoute = require("./Route/adminRoute/api/userRoute");
const refresh = require("./Route/adminRoute/refresh");
const registerRoute = require("./Route/adminRoute/registerRoute");
const logoutRoute = require("./Route/adminRoute/logoutRoute");
const loginRoute = require("./Route/adminRoute/loginRoute");

// member statistic
const memberRoute = require('./Route/adminRoute/api/memberRoute')
//member route
const memberRegisterRoute = require('./Route/memberRoute/memberRegisterRoute')
//middleware
const verifyJWT = require("./Middleware/verifyJWT");
const credentials = require("./Middleware/credentials");

// server
const app = express();
const PORT = 5050;

app.use(logger);
// app.use(credentials)
// middleware
app.use(credentials);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* this is admin panel route
 * 
 */

// register
app.use("/api/v1/", registerRoute);
// login
app.use("/api/v1/", loginRoute);
// refresh token
app.use("/api/v1/", refresh);
// logout
app.use("/api/v1/", logoutRoute);
//api

/**
 * this is member for orgenation route
*/
// member register route localhost:5050/api/v2/register/member'

app.use('/api/v2/', memberRegisterRoute)

app.use(verifyJWT); // authentication
app.use('/api/v1/member', memberRoute)
app.use("/api/v1/", userRoute);

// error handler
//app.use(errorHandler)

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
