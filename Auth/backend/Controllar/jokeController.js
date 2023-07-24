/**
 * controller of joke API
 *
 */

// getting all item
const GettingAllJoke = (req, res) => {
    try {
      res.send("all data")
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }

};

// getting single item
const GettingOneJoke = (req, res) => {
  res.send("One joke");
};

// creating joke
const CreatingJoke = (req, res) => {
  res.send("Creating joke");
};

// updating Joke
const UpdatingJoke = (req, res) => {
  res.send("Updateing joke");
};

// deleting Joke
const DeletingJoke = (req, res) => {
  res.send("joke has been deleted !");
};

module.exports = {
  GettingAllJoke,
  GettingOneJoke,
  CreatingJoke,
  UpdatingJoke,
  DeletingJoke,
};
