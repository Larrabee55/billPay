var orm = require("../config/orm.js");

var userBills = {
  // functions that call ORM functions using specific input for the ORM
  all: function (cb) {
    orm.all("userBill", function (res) {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.create("userBill", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("userBill", objColVals, condition, function (res) {
      cb(res)
    });
  },
  delete: function (condition, cb) {
    orm.delete("userBill", condition, function (res) {
      cb(res);
    });
  },
  select:function(user,cb){
        orm.select("userBills","user_id",user,function(res){
            cb(res)
        })
    }
}
// ------------receipt----------------


// ----------IOU--------------------------

// allIou: function (cols, vals, cb) {
//   orm.iou("userIou", cols, vals, function (res) {
//     cb(res);
//   });
// }
// export the database functions for the controller (userBillss_controllers.js)
module.exports = userBills;