var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");
var app = express();

var PORT = process.env.PORT || 8000;

app.use(routes);
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));

//Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});