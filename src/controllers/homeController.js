const conection = require("../config/database");

const getHomepage = (req, res) => {
  // process data
  //call model

  res.render("home.ejs");
};

const getABC = (req, res) => {
  res.send("ABC");
};
const getHoidanit = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = (req, res) => {
  console.log(req.body);
  let { email, name, city } = req.body;
  // add data to database
  conection.query(
    `INSERT INTO Users (email, name, city)
VALUES (?, ?, ?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);
      res.send("Create users succeed !");
    }
  );
};
module.exports = {
  getHomepage,
  getABC,
  getHoidanit,
  postCreateUser,
};
