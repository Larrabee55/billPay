var express = require("express");
var router = express.Router();
var dbComs = require("../models/dbcoms.js");
var path = require("path")

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
  // let username = req.params.username
  // let password = req.params.password
  userAuth(req.params.username, req.params.password,function(data){
    res.send(data)
  })
})

router.get("/home/:id",function(req,res){
  res.sendFile(path.join(__dirname,"../views/home.html"))
})

function userAuth(username, password, cb){
  dbComs.select("userInfo",username,function(data){
    var user_id = data[0].id
    var user = {
      auth: false,
      data:data
    }
    if(data[0].password == password){
      dbComs.all("userBills",user_id,function(datar){
        console.log(`auth successful for ${username}`)
        user.auth = true
        cb(user)
      })
    }else{
      console.log(`auth failed for ${username}`)
      user.data = null
      cb(user)
    }
  })
}



// function request(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }
// router.get("/",function(req,res){
//     burger.all(function(data){
//         let hbsObj = {
//             burgers:data,            
//         }
//         console.log(hbsObj)
//         res.render("index",hbsObj)
//      })
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