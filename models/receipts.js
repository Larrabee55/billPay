var orm = require("../config/orm.js");

var userReceipts = {

  all: function (cols, vals, cb) {
    orm.all("userReceipts", cols, vals, function (res) {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.create("userReceipts", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("userReceipts", objColVals, condition, function (res) {
      cb(res)
    });
  },
  delete: function (condition, cb) {
    orm.delete("userReceipts", condition, function (res) {
      cb(res);
    });
  },
  select: function (user, cb) {
    orm.select("userReceipts", "user_id", user, function (res) {
      cb(res)
    })
  }
}
module.exports = userReceipts;