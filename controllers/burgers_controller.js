var express = require("express");
// makes a router for express
var router = express.Router();
// pulls the models file to use for this file
var burger = require("../models/burger.js");
// displays the data when the page is loaded up
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burger: data
    };
    res.render("index", hbsObject);
  });
});
router.post("/api/burger", function (req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    res.json({
      id: result.insertId
    });
  });
});
router.put("/api/burger/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// create a router and export it
module.exports = router;