var orm = require("../config/orm.js");

var userIou = {

  all: function (cols, vals, cb) {
    orm.all("userIou", cols, vals, function (res) {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.create("userIou", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("userIou", objColVals, condition, function (res) {
      cb(res)
    });
  },
  delete: function (condition, cb) {
    orm.delete("userIou", condition, function (res) {
      cb(res);
    });
  }
}

module.exports = userIou;