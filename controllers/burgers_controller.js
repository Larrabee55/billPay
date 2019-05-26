var express = require("express");
// makes a router for express
var router = express.Router();

var path = require("path");
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
router.post("/api/iou", function (req, res) {
  userBills.iou([
    "recipient", "amount", "memo"
  ], [
      req.body.recipient, req.body.amount, req.body.memo
    ], function (result) {
      res.json();
    });
});

router.post("/api/receipt", function (req, res) {
  userBills.receipt([
    "catagory", "amount"
  ], [
      req.body.catagory, req.body.amount
    ], function (result) {
      res.json();
    });
});

router.get("/iou", function (req, res) {
  res.sendFile(path.join(__dirname, "../testIou.html"))
});

router.get("/receipt", function (req, res) {
  res.sendFile(path.join(__dirname, "../testReceipt.html"))
});


// create a router and export it
module.exports = router;