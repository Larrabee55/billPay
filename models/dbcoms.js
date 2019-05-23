var orm = require("../config/orm.js");

var info = {
  // functions that call ORM functions using specific input for the ORM
  all: function (table, item, cb) {
    orm.select(table, item, function (res) {
      cb(res);
    });
  },
  create: function (table, cols, vals, cb) {
    orm.create(table, cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (table, objColVals, condition, cb) {
    orm.update(table, objColVals, condition, function (res) {
      cb(res)
    });
  },
  select: function (table, item, cb){

    orm.select(table, item, function(res){
      cb(res)
    })
  }
}
// export the database functions for the controller (burgers_controllers.js)
module.exports = info;