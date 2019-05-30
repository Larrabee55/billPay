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

// ------------receipts----------------------
var userReceipts = require("../models/receipts.js");

router.get("/receipts", function (req, res) {
  userReceipts.all(function (data) {
    var totalAmount = 0;
    for (let i = 0; i < data.length; i++) {
      totalAmount += data[i].amount;
    }

    var hbsObject = {
      userReceipts: data,
      userReceiptsTotal: totalAmount
    };
    res.render("receipts", hbsObject);

  });
});

router.post("/api/userReceipts", function (req, res) {
  userReceipts.create([
    "receipt_name", "amount", "category", "user_id"
  ], [
      req.body.receipt_name, req.body.amount, req.body.category, req.body.user_id
    ], function (result) {
      res.json();
    });
});

router.delete("/api/userReceipts/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  userReceipts.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// -----------IOU------------------------

var userIou = require("../models/iou.js");

router.get("/iou", function (req, res) {
  userIou.all(function (data) {

    var hbsObject = {
      userIou: data
    };
    res.render("iou", hbsObject);

  });
});

router.post("/api/userIou", function (req, res) {
  userIou.create([
    "iou_name", "amount", "user_id"
  ], [
      req.body.iou_name, req.body.amount, req.body.user_id
    ], function (result) {
      res.json();
    });
});

router.delete("/api/userIou/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  userIou.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// -----------Login------------------------

var userCreds = require("../models/loginOrm.js");

router.get("/createlogin", function (req, res) {
  userCreds.all(function (data) {

    var hbsObject = {
      userInfo: data
    };
    res.render("createLogin", hbsObject);

  });
});

const crypto = require("crypto");

require('dotenv').config();

var secret = process.env.secret;

router.post("/api/userCreds", function (req, res) {
  userCreds.create([
    "email", "password"
  ], [
      req.body.email, hash = crypto.createHmac('sha256', secret)
        .update(req.body.password)
        .digest('hex')
    ], function (result) {
      res.json();
    });
});

router.delete("/api/userCreds/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  userCreds.delete(condition, function (result) {
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