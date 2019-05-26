var express = require("express");
// makes a router for express
var router = express.Router();
// pulls the models file to use for this file
var userBills = require("../models/burger.js");
// displays the data when the page is loaded up
router.get("/", function (req, res) {
  userBills.all(function (data) {
    var totalAmount = 0;
    for (let i = 0; i < data.length; i++) {
      totalAmount += data[i].amount;
    }

    var hbsObject = {
      userBills: data,
      userTotal: totalAmount
    };
    res.render("index", hbsObject);

  });
});
router.post("/api/userBills", function (req, res) {
  userBills.create([
    "bill_name", "amount", "due_date", "user_id"
  ], [
    req.body.bill_name, req.body.amount, req.body.due_date, req.body.user_id
  ], function (result) {
    res.json({
      id: result.insertId
    });
  });
});
router.put("/api/userBills/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  userBills.update({
    amount: req.body.amount
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/userBills/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  userBills.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// create a router and export it
module.exports = router;