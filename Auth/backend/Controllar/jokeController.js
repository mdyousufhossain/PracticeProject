/**
 * controller of joke API
 *
 */

// getting all item
const GettingAllJoke = (req, res) => {
  res.send("All joke");
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
