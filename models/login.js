var orm = require("../config/orm.js");

var userInfo = {
  select: function (table, item, cb) {

    orm.select(table, item, function (res) {
      cb(res)
    })
  }
}

module.exports = userInfo;