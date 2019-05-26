var orm = require("../config/orm.js");

var userBills = {
  // functions that call ORM functions using specific input for the ORM
  all: function (cb) {
    orm.all("billPayDb", function (res) {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.create("userBills", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("userBills", objColVals, condition, function (res) {
      cb(res)
    });
  },
  iou: function (cols, vals, cb) {
    orm.iou("userIou", cols, vals, function (res) {
      cb(res);
    });
  },

  receipt: function (cols, vals, cb) {
    orm.iou("receipt", cols, vals, function (res) {
      cb(res);
    });
  }
}
// export the database functions for the controller (userBillss_controllers.js)
module.exports = userBills;