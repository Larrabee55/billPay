var express = require("express");
// makes a router for express
var router = express.Router();
// pulls the models file to use for this file
var dbComs = require("../models/dbcoms.js");
var path = require("path")
// displays the data when the page is loaded up
router.get("/", function(req, res) {
  // dbComs.all("userBills", function(data) {

  //   let hbsObj = {
  //     info:data
  //   }

  //   res.render("index",hbsObj)
  // });
  res.sendFile(path.join(__dirname,"../views/login.html"))
});
router.get("/api/info/:username/:password",function(req,res){
  let username = req.params.username
  let password = req.params.password
  let compPass
  var userdata = dbComs.select("userInfo",username,function(data){
    var user_id = data[0].id
    if(data[0].password == password){
      
      dbComs.all("userBills",user_id,function(data){
        console.log(data)
      })
    }
  })
})
// router.get("/",function(req,res){
//     burger.all(function(data){
//         let hbsObj = {
//             burgers:data,            
//         }
//         console.log(hbsObj)
//         res.render("index",hbsObj)
//     })
// })

// router.post("/api/info", function (req, res) {
//   dbComs.create();
// });
// router.put("/api/info/:id", function (req, res) {
//   var condition = "id = " + req.params.id;
//   burger.update();
// });

// create a router and export it
module.exports = router;