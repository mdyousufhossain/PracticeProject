const express = require("express");
const app = express();
const port = 3000;
const path = require('path')
const uuid = require("uuid").v4;
const cors = require("cors");

app.use(express.json());
app.use(express.static("client/build")); // Serve the React app
app.use(cors({
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.static(path.join(__dirname, "build")));



const users = [
  { id: uuid(), name: "John" },
  { id: uuid(), name: "Jane" },
  { id: uuid(), name: "Bob" },
];

app.get("/user", (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { id, name } = req.body;
  const updatedUser = { id, name };

  users = users.map(user => {
    if (user.id === updatedUser.id) {
      return updatedUser;
    }
    return user;
  });

  res.json(updatedUser);
});




app.listen(port, () => {
  console.log("Server running on http://localhost:3000/");
});
