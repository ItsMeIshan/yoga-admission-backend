const express = require("express");
const createCustomer = require("../controllers/customer");
const router = express.Router();
router.route("/").get((req, res) => {
  res.send("Welcome to the yoga admission");
});
router.route("/create").post(createCustomer);
module.exports = router;
