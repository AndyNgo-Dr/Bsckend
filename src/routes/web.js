const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getABC,
  getHoidanit,
  postCreateUser,
} = require("../controllers/homeController");

router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/hoidanit", getHoidanit);
router.post("/create-user", postCreateUser);
module.exports = router;
