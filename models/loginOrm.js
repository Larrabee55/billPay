var orm = require("../config/orm.js");

var userCreds = {

    all: function (cols, vals, cb) {
        orm.all("userInfo", cols, vals, function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("userInfo", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("userInfo", objColVals, condition, function (res) {
            cb(res)
        });
    },
    delete: function (condition, cb) {
        orm.delete("userInfo", condition, function (res) {
            cb(res);
        });
    },
    select:function(user,cb){
        orm.select("userInfo","user_id",user,function(res){
            cb(res)
        })
    }
}

module.exports = userCreds;