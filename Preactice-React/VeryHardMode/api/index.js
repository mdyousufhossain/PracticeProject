const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const uuid = require("uuid").v4;
const cors = require("cors");

// const os = require('os')
// console.log(os.tmpdir())

app.use(express.json());
app.use(express.static("client/build")); // Serve the React app
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

const users = [];

app.get("/user", (req, res) => {
  res.json(users);
});

app.post("/user/update", (req, res) => {
  // using try catch method for error handling

  try {
    const { text } = req.body; // getting the input value from fron end 
    const updatedUser = { id:uuid(), text  };
    // updating the user array 
    users.push(updatedUser);
    // pusing it to front end 
    res.json(users);

  } catch (err) {
    res.status(500).json("oh noo its happeing again");
  }
});



// deploying server !
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
