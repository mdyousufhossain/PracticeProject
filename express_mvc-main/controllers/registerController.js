const userDB = {
  users: require("../model/user.json"),
  setUser: function (data) {
    this.users = data;
  },
};
const fsPromises = require("fs").promises;
const path = require("path");

const bcryot = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  /** if user failed to provide access credential  */
  if (!user || !pwd)
    return res.status(400).json({
      message: "Username name Password are required",
    });
  /** checking for dupclicate */
  const dupclicate = userDB.users.find((person) => person.username === user);
  if (dupclicate)
    return res.sendStatus(409).json({
      message: "someone aleady used this username",
    });

  try {
    // encryt the password
    const hashedPwd = await bcryot.hash(pwd, 10);
    const newUser = { " username": user, password: hashedPwd };

    userDB.setUser([...userDB.users, newUser]);

    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "user.json"),
      JSON.stringify(userDB.users)
    );
    console.log(userDB.users);

    res.status(201).json({ success: `New user ${user} created` });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = { handleNewUser }
